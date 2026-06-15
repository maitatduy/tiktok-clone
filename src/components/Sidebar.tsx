"use client";

import { Home, Compass, User } from "lucide-react";

const navItems = [
    { label: "Trang chủ", icon: Home },
    { label: "Khám phá", icon: Compass },
    { label: "Hồ sơ", icon: User },
];

export default function Sidebar() {
    return (
        <>
            <aside className="hidden md:flex md:flex-col fixed left-0 top-0 h-screen w-20 lg:w-60 border-r border-gray-800 bg-black text-white px-2 lg:px-4 py-6 z-50">
                <div className="text-2xl font-bold mb-10 px-2">
                    <span className="hidden lg:inline">Tiktok Clone</span>
                    <span className="lg:hidden">V</span>
                </div>
                <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            className="flex items-center cursor-pointer gap-4 px-2 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            <item.icon size={26} />
                            <span className="hidden lg:inline text-base font-medium">
                                {item.label}
                            </span>
                        </button>
                    ))}
                </nav>
            </aside>

            <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-black/95 backdrop-blur-sm border-t border-gray-800 flex justify-around items-center z-50">
                {navItems.map((item) => (
                    <button
                        key={item.label}
                        className="flex flex-col items-center cursor-pointer gap-1 text-white text-xs"
                    >
                        <item.icon size={22} />
                        <span>{item.label}</span>
                    </button>
                ))}
            </nav>
        </>
    );
}
