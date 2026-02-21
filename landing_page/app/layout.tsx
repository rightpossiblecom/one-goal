import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "One Goal - Track one goal daily",
    description: "A minimal habit app that helps you focus on a single goal at a time. No lists. No systems. No overwhelm. Just one goal. Tracked daily.",
};

export const viewport: Viewport = {
    themeColor: "#09090b",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} font-sans antialiased min-h-screen bg-zinc-950 text-zinc-100 flex flex-col`}>
                {children}
            </body>
        </html>
    );
}
