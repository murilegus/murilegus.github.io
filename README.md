# trungit.dev

Trang portfolio cá nhân. HTML, CSS và JavaScript thuần — không build step, không
dependency. Push lên `main` là deploy.

Người xem tự chọn ba thứ ở đầu trang, lựa chọn được nhớ trong `localStorage`:

| Tuỳ chọn | Giá trị | Mặc định |
|---|---|---|
| Ngôn ngữ | `EN`, `VI` | theo ngôn ngữ trình duyệt |
| Giao diện (theme) | `Minimal`, `Terminal` | `Minimal` |
| Chế độ màu | Tự động, Sáng, Tối | Tự động (theo thiết bị) |

## Cấu trúc

| File | Vai trò |
|---|---|
| [`index.html`](index.html) | Khung trang, nạp các file bên dưới |
| [`assets/js/content.js`](assets/js/content.js) | **Toàn bộ nội dung** (song ngữ) |
| [`assets/js/app.js`](assets/js/app.js) | Dựng trang từ nội dung, xử lý các nút chuyển |
| [`assets/js/boot.js`](assets/js/boot.js) | Chạy trước khi vẽ: áp ngôn ngữ, theme, chế độ màu đã lưu; chứa danh sách `THEMES` |
| [`assets/css/base.css`](assets/css/base.css) | Token màu, bố cục, theme Minimal, màn hình cảm ứng, in ấn |
| [`assets/css/theme-terminal.css`](assets/css/theme-terminal.css) | Theme Terminal |

## Sửa nội dung

Sửa object `CONTENT` trong `assets/js/content.js`. Mỗi giá trị là một chuỗi (dùng
chung cho hai ngôn ngữ) hoặc `{ en: '…', vi: '…' }`. Thêm một công việc, dự án hay
nhóm kỹ năng là thêm một phần tử vào mảng tương ứng.

Mọi theme đều render từ cùng object này, nên sửa một chỗ là đổi ở tất cả theme.

## Thêm theme

Theme chỉ là CSS phủ lên cùng một markup:

1. Tạo `assets/css/theme-<tên>.css` và thêm thẻ `<link>` tương ứng vào `index.html`.
2. Trong file đó, viết `:root[data-theme="<tên>"] { … }` định nghĩa lại các token màu,
   và `:root[data-theme="<tên>"][data-mode="dark"] { … }` cho bản tối. Nếu cần đổi bố
   cục, thêm các rule bắt đầu bằng `[data-theme="<tên>"]`.
3. Thêm tên vào mảng `THEMES` trong `assets/js/boot.js` và nhãn hiển thị vào
   `THEME_LABELS` trong `assets/js/app.js`.

Theme `terminal` là ví dụ: mỗi tiêu đề mục có thuộc tính `data-cmd` (ví dụ
`cat experience.md`) và CSS hiển thị nó thành dòng lệnh, tô màu riêng cho dấu nhắc,
tên lệnh, file và thư mục.

## Chế độ màu

`<html>` mang hai thuộc tính: `data-pref` là lựa chọn của người xem
(`auto`/`light`/`dark`), `data-mode` là chế độ đang hiển thị (`light`/`dark`). Khi
`data-pref="auto"`, trang theo `prefers-color-scheme` và tự đổi khi thiết bị đổi.
Chế độ tối dùng bảng màu Dracula ở mọi theme.

## Xem thử ở máy

Trang nạp file CSS/JS ngoài nên cần chạy qua một máy chủ tĩnh:

```bash
python3 -m http.server 4173
```

Rồi mở <http://localhost:4173>.
