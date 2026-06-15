# VidFeed - Vertical Scroll Video App

Ứng dụng xem video dạng cuộn dọc (giống TikTok/Reels) xây dựng bằng Next.js (App Router) + TypeScript + Tailwind CSS.

## Tính năng

- Giao diện cuộn dọc full-screen, mỗi video chiếm trọn khung hình (khung 9:16 trên PC)
- Click vào video để Play/Pause
- Tự động Play khi video cuộn vào viewport, tự động Pause khi cuộn ra (Intersection Observer)
- Nút Like đổi màu đỏ và tăng/giảm số lượng khi click
- Sidebar điều hướng: hiển thị bên trái trên PC, bottom nav trên Mobile

## Công nghệ sử dụng

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (icons)

## Cài đặt và chạy

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## Giải thích logic Play/Pause khi cuộn trang

Mỗi `VideoCard` sử dụng **Intersection Observer API** để theo dõi vị trí của container video so với viewport:

- Một `IntersectionObserver` được khởi tạo trong `useEffect`, theo dõi `containerRef` (div bao ngoài video) với `threshold: [0, 0.6, 1]`.
- Khi container giao với viewport đạt tỷ lệ **>= 60%** (`entry.isIntersecting && entry.intersectionRatio >= 0.6`), video sẽ tự động `play()` và state `isPlaying` chuyển thành `true`.
- Khi container rời khỏi vùng giao đó (ví dụ người dùng cuộn qua video khác), video sẽ tự động `pause()` và `isPlaying` chuyển thành `false`.
- Ngoài ra, người dùng có thể click trực tiếp vào video để toggle play/pause thủ công thông qua hàm `togglePlay`, hàm này kiểm tra trạng thái `videoEl.paused` và gọi `play()`/`pause()` tương ứng, đồng thời hiển thị icon overlay (Play/Pause) trong thời gian ngắn để phản hồi trực quan cho người dùng.
- Mỗi `VideoCard` quản lý observer độc lập và cleanup (`observer.disconnect()`) khi component unmount để tránh memory leak.

## Cấu trúc project

```
src/
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ └── globals.css
├── components/
│ ├── VideoFeed.tsx
│ ├── VideoCard.tsx
│ └── Sidebar.tsx
├── data/
│ └── mockVideos.ts
└── types/
└── video.ts
```

## Demo

- Link Vercel: <điền link sau khi deploy>
- Video demo: <điền link Google Drive>
