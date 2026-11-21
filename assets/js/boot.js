// Runs before first paint so the saved language / theme / colour mode never flashes.
// Loaded synchronously in <head>, ahead of the stylesheets.
// THEMES is the single list of valid themes: add a name here, plus a stylesheet
// assets/css/theme-<name>.css linked from index.html, and it shows up in the switcher.
var THEMES = ['minimal', 'terminal'];
(function () {
  var d = document.documentElement;
  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  var lang = get('site.lang');
  if (lang !== 'en' && lang !== 'vi') lang = /^vi\b/i.test(navigator.language || '') ? 'vi' : 'en';
  var theme = get('site.theme');
  if (THEMES.indexOf(theme) < 0) theme = THEMES[0];
  var pref = get('site.mode');
  if (pref !== 'light' && pref !== 'dark') pref = 'auto';
  var dark = window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
  d.lang = lang;
  d.dataset.theme = theme;
  d.dataset.pref = pref;                                   // what the visitor chose
  d.dataset.mode = pref === 'auto' ? (dark ? 'dark' : 'light') : pref;  // what is shown
})();
