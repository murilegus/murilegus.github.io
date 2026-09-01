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

Chỉ nhận `.mp4` và URL tuyệt đối.

Nên dùng **animated profile background** của Steam Points Shop: tỉ lệ ngang, độ phân
giải đủ lớn để phủ full màn hình. Tránh animated avatar (184×184) và avatar frame —
kéo lên full viewport sẽ vỡ.

Ba clip đang dùng là 1920×1080 (một cái 1920×850), h264, 24fps, 7–8 giây, dưới 1 MB
mỗi file. Lấy link bằng cách mở một background trên Points Shop rồi copy URL của
request `.mp4` trong DevTools → Network.

Trang hotlink thẳng CDN của Steam, không tự host. Đổi lại là không tốn dung lượng
repo và ăn được edge cache của Valve, nhưng Steam đổi đường dẫn thì trang gãy.

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
