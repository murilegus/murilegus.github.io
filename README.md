# trungit.dev

Một trang tĩnh duy nhất: full viewport, phát một video loop vô hạn, chọn ngẫu nhiên
lúc load. Muốn xem cái khác thì refresh.

Toàn bộ nằm trong [`index.html`](index.html) — không build step, không dependency,
không asset đi kèm. Push lên `main` là deploy.

## Thêm video

Mở `index.html`, tìm `var STEAM_CLIPS` gần đầu thẻ `<script>` và thêm một dòng:

```js
var STEAM_CLIPS = [
  'https://shared.fastly.steamstatic.com/community_assets/images/items/<id>/<hash>.mp4',
  // <-- add new links here
];
```

Chỉ nhận `.mp4` và URL tuyệt đối. Ba entry hiện tại là placeholder, phải thay bằng
link thật thì trang mới chạy.

Nên dùng **animated profile background** của Steam Points Shop: tỉ lệ ngang, độ phân
giải đủ lớn để phủ full màn hình. Tránh animated avatar (184×184) và avatar frame —
kéo lên full viewport sẽ vỡ.

## Cách chọn video

Shuffle bag lưu ở `localStorage` key `mediabag.v1`, nên **không video nào lặp lại cho
tới khi đã chiếu hết danh sách**, tính xuyên suốt qua nhiều lần refresh. Hết bag thì
xáo lại, và lần rút đầu tiên sau khi xáo được đảm bảo khác video vừa xem.

Danh sách đổi (thêm/bớt/sửa link) → fingerprint lệch → bag tự reset.
Trình duyệt chặn storage (tab ẩn danh, Safari private) → tự rơi về random thuần,
trang vẫn chạy bình thường.

## Điều khiển

| Phím | Kết quả |
|---|---|
| `R` | Reload, tức là bốc video khác |
| `F` | Toggle fullscreen |
| `C` | Toggle `object-fit` giữa `cover` và `contain` |

Không có nút bấm nào trên trang. Trên mobile thì chỉ còn cách kéo xuống để refresh.

## Lưu ý

`CNAME` giữ custom domain `trungit.dev` (trỏ qua Cloudflare). Đừng xoá.
