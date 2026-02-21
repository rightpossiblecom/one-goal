import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 relative overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-950 font-bold">
                        <Image src="/app_logo.png" alt="One Goal" fill className="object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="font-semibold text-lg tracking-tight text-white group-hover:text-amber-400 transition-colors">
                        One Goal
                    </span>
                </Link>
                <div className="flex items-center gap-6">
                    <Link href="#features" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block">
                        Features
                    </Link>
                    <Link href="#faq" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block">
                        FAQ
                    </Link>
                    <a
                        href="#download"
                        className="text-sm font-medium bg-white text-zinc-950 px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors"
                    >
                        Get App
                    </a>
                </div>
            </div>
        </nav>
    );
}
