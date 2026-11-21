(function () {
  'use strict';

  /* Interface strings. */
  var UI = {
    experience: { en: 'Experience', vi: 'Kinh nghiệm' },
    projects: { en: 'Open-source projects', vi: 'Dự án mã nguồn mở' },
    skills: { en: 'Skills', vi: 'Kỹ năng' },
    education: { en: 'Education', vi: 'Học vấn' },
    language: { en: 'Language', vi: 'Ngôn ngữ' },
    theme: { en: 'Theme', vi: 'Giao diện' },
    mode: { en: 'Colour mode', vi: 'Chế độ màu' },
    auto: { en: 'Auto', vi: 'Tự động' },
    light: { en: 'Light', vi: 'Sáng' },
    dark: { en: 'Dark', vi: 'Tối' },
    source: { en: 'Site source', vi: 'Mã nguồn trang' },
    cv: { en: 'Download CV (PDF)', vi: 'Tải CV (PDF)' }
  };
  var THEME_LABELS = { minimal: 'Minimal', terminal: 'Terminal' };

  /* ── State: lives on <html>, mirrored to localStorage ── */
  var root = document.documentElement;
  var app = document.getElementById('app');
  var darkQuery = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;

  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode: keep going */ } }
  function t(v) { return typeof v === 'string' ? v : v[root.lang] || v.en; }

  // Keep the mobile browser's own toolbar in the page's background colour.
  var chrome = document.querySelector('meta[name="theme-color"]');
  function syncChrome() {
    var c = getComputedStyle(root).getPropertyValue('--page').trim();
    if (chrome && c) chrome.setAttribute('content', c);
  }

  function applyMode() {
    var pref = root.dataset.pref;
    root.dataset.mode = pref === 'auto' ? (darkQuery && darkQuery.matches ? 'dark' : 'light') : pref;
    syncChrome();
  }
  if (darkQuery) {
    var onChange = function () { applyMode(); };
    if (darkQuery.addEventListener) darkQuery.addEventListener('change', onChange);
    else if (darkQuery.addListener) darkQuery.addListener(onChange);
  }

  var SETTERS = {
    lang: function (v) { root.lang = v; save('site.lang', v); },
    theme: function (v) { root.dataset.theme = v; save('site.theme', v); },
    mode: function (v) { root.dataset.pref = v; save('site.mode', v); applyMode(); }
  };

  /* ── Rendering ── */
  function el(tag, attrs) {
    var node = document.createElement(tag);
    for (var k in attrs || {}) {
      if (k === 'text') node.textContent = attrs[k];
      else node.setAttribute(k, attrs[k]);
    }
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (c) node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    }
    return node;
  }

  function group(label, key, current, options) {
    var g = el('div', { 'class': 'group', role: 'group', 'aria-label': label });
    options.forEach(function (o) {
      g.appendChild(el('button', {
        type: 'button', 'data-set': key, 'data-value': o[0],
        'aria-pressed': String(o[0] === current), text: o[1]
      }));
    });
    return g;
  }

  function section(id, cmd, title, rows) {
    var list = el('ul', { 'class': 'rows' });
    rows.forEach(function (r) { list.appendChild(el('li', null, el('span', { 'class': 'when', text: r[0] }), r[1])); });
    return el('section', { 'aria-labelledby': 'h-' + id },
      el('h2', {
        id: 'h-' + id, 'data-cmd': cmd, text: title,
        'class': /\/$/.test(cmd) ? 'dir' : '',
        style: '--n:' + cmd.split(' ')[0].length
      }), list);
  }

  function render() {
    var c = CONTENT;
    document.title = t(c.name) + ' — ' + c.role;

    var top = el('header', { 'class': 'top' },
      el('div', { 'class': 'id' }, t(c.shortName) + ' — ' + c.role),
      el('div', { 'class': 'controls' },
        group(t(UI.language), 'lang', root.lang, [['en', 'EN'], ['vi', 'VI']]),
        group(t(UI.theme), 'theme', root.dataset.theme, THEMES.map(function (n) { return [n, THEME_LABELS[n] || n]; })),
        group(t(UI.mode), 'mode', root.dataset.pref, [['auto', t(UI.auto)], ['light', t(UI.light)], ['dark', t(UI.dark)]])
      ));

    var intro = el('div', { 'class': 'intro' },
      el('h1', { text: t(c.headline) }),
      el('p', { 'class': 'lead', text: t(c.lead) }),
      el('p', { 'class': 'cta' },
        el('a', { href: CONTACT.cv, text: t(UI.cv) }),
        el('span', { 'class': 'links' },
          el('a', { href: 'mailto:' + CONTACT.email, text: CONTACT.email }),
          el('a', { href: CONTACT.linkedin, text: 'LinkedIn' }),
          el('a', { href: CONTACT.github, text: 'GitHub' }))));

    var experience = section('exp', 'cat experience.md', t(UI.experience), c.experience.map(function (x) {
      var ul = el('ul');
      x.points.forEach(function (p) { ul.appendChild(el('li', { text: t(p) })); });
      return [t(x.when), el('div', { 'class': 'what' }, el('strong', { text: x.role + ' · ' + x.org }), ul)];
    }));

    var projects = section('proj', 'ls projects/', t(UI.projects), c.projects.map(function (x) {
      return [x.tech, el('div', { 'class': 'what' },
        el('strong', null, el('a', { href: x.url, text: x.name })),
        el('p', { text: t(x.text) }))];
    }));

    var skills = section('skill', 'cat skills.yml', t(UI.skills), c.skills.map(function (x) {
      return [t(x.label), el('div', { 'class': 'what', text: t(x.text) })];
    }));

    var education = section('edu', 'cat education.md', t(UI.education), c.education.map(function (x) {
      return [x.when, el('div', { 'class': 'what' },
        el('strong', { text: t(x.title) + ' · ' + t(x.org) }),
        el('p', { text: t(x.text) }))];
    }));

    var footer = el('footer', null,
      el('span', null, t(c.location) + ' · ', el('a', { href: 'mailto:' + CONTACT.email, text: CONTACT.email })),
      el('nav', null,
        el('a', { href: CONTACT.linkedin, text: 'LinkedIn' }),
        el('a', { href: CONTACT.github, text: 'GitHub' }),
        el('a', { href: 'https://github.com/murilegus/murilegus.github.io', text: t(UI.source) })));

    app.textContent = '';
    app.appendChild(top);
    app.appendChild(el('main', null, intro, experience, skills, education, projects));
    app.appendChild(footer);
    syncChrome();
  }

  app.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('button[data-set]') : null;
    if (!b) return;
    var key = b.getAttribute('data-set'), value = b.getAttribute('data-value');
    SETTERS[key](value);
    render();
    // render() rebuilt the buttons; put keyboard focus back where it was.
    var again = app.querySelector('button[data-set="' + key + '"][data-value="' + value + '"]');
    if (again) again.focus();
  });

  render();
})();
