"use client";

import { useRef, useState, useEffect } from "react";
import { Heart, MessageCircle, Share2, Play } from "lucide-react";
import { Video } from "@/types/video";

interface VideoCardProps {
    video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [showPauseIcon, setShowPauseIcon] = useState(false);
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(video.likesCount);

    // Click vào video -> toggle play/pause
    const togglePlay = () => {
        const videoEl = videoRef.current;
        if (!videoEl) return;

        if (videoEl.paused) {
            videoEl.play();
            setIsPlaying(true);
        } else {
            videoEl.pause();
            setIsPlaying(false);
            setShowPauseIcon(true);
            // Ẩn icon pause sau 600ms
            setTimeout(() => setShowPauseIcon(false), 600);
        }
    };

    const toggleLike = () => {
        setLiked((prev) => !prev);
        setLikesCount((prev) => (liked ? prev - 1 : prev + 1));
    };

    // Auto play/pause khi scroll vào view (Intersection Observer)
    useEffect(() => {
        const videoEl = videoRef.current;
        const containerEl = containerRef.current;
        if (!videoEl || !containerEl) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
                        videoEl.play();
                        setIsPlaying(true);
                    } else {
                        videoEl.pause();
                        setIsPlaying(false);
                    }
                });
            },
            { threshold: [0, 0.6, 1] },
        );

        observer.observe(containerEl);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative h-screen w-full snap-start flex items-center justify-center bg-black"
        >
            <div className="relative h-full w-full md:h-[90vh] md:w-[calc(90vh*9/16)] bg-gray-900 overflow-hidden rounded-none md:rounded-2xl">
                <video
                    ref={videoRef}
                    src={video.videoUrl}
                    loop
                    muted
                    playsInline
                    onClick={togglePlay}
                    className="h-full w-full object-cover cursor-pointer"
                />

                {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <Play size={70} className="text-white/80 fill-white/80" />
                    </div>
                )}
                {showPauseIcon && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-ping-once">
                        <div className="bg-black/40 rounded-full p-5">
                            <Play size={50} className="text-white" />
                        </div>
                    </div>
                )}

                <div className="absolute bottom-20 md:bottom-4 left-4 right-20 text-white">
                    <p className="font-bold text-base mb-1">{video.authorName}</p>
                    <p className="text-sm text-gray-200 leading-snug">{video.description}</p>
                </div>

                <div className="absolute bottom-24 md:bottom-6 right-3 flex flex-col items-center gap-5 text-white">
                    <button
                        onClick={toggleLike}
                        className="flex flex-col items-center gap-1 active:scale-90 transition-transform"
                    >
                        <Heart
                            size={30}
                            className={liked ? "fill-red-500 text-red-500" : "text-white"}
                        />
                        <span className="text-xs font-medium">{likesCount.toLocaleString()}</span>
                    </button>

                    <button className="flex flex-col items-center gap-1 active:scale-90 transition-transform">
                        <MessageCircle size={30} />
                        <span className="text-xs font-medium">128</span>
                    </button>

                    <button className="flex flex-col items-center gap-1 active:scale-90 transition-transform">
                        <Share2 size={30} />
                        <span className="text-xs font-medium">Chia sẻ</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
