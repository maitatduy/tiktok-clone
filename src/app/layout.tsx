import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
    title: "Tiktok Clone",
    description: "Tiktok Clone using next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
            <body className="bg-black text-white antialiased">
                <Sidebar />
                <main className="md:ml-20 lg:ml-60">{children}</main>
            </body>
        </html>
    );
}
