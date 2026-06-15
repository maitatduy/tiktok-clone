"use client";

import { mockVideos } from "@/data/mockVideos";
import VideoCard from "./VideoCard";

export default function VideoFeed() {
    return (
        <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar">
            {mockVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
            ))}
        </div>
    );
}
