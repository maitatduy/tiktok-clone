import { Video } from "@/types/video";

export const mockVideos: Video[] = [
    {
        id: "1",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        authorName: "@bigbuckbunny",
        description: "Big Buck Bunny - một bộ phim hoạt hình mã nguồn mở 🐰",
        likesCount: 1240,
    },
    {
        id: "2",
        videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
        authorName: "@fridayvibes",
        description: "It's Friday! Cuối tuần vui vẻ nha mọi người 🎉",
        likesCount: 3520,
    },
    {
        id: "3",
        videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
        authorName: "@sintelmovie",
        description: "Trailer phim Sintel - tuyệt phẩm hoạt hình 3D 🔥",
        likesCount: 8900,
    },
];
