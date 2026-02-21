import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-4 group inline-flex">
                            <div className="w-8 h-8 relative overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-950 font-bold">
                                <Image src="/app_logo.png" alt="One Goal" fill className="object-cover group-hover:scale-110 transition-transform" />
                            </div>
                            <span className="font-semibold text-lg tracking-tight text-white group-hover:text-amber-400 transition-colors">
                                One Goal
                            </span>
                        </Link>
                        <p className="text-zinc-400 max-w-sm">
                            A minimal habit app that helps you focus on a single goal at a time. No lists. No systems. No overwhelm. Just one goal.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Product</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#features" className="text-zinc-400 hover:text-amber-400 transition-colors">Features</Link>
                            </li>
                            <li>
                                <Link href="#how-it-works" className="text-zinc-400 hover:text-amber-400 transition-colors">How it works</Link>
                            </li>
                            <li>
                                <Link href="#faq" className="text-zinc-400 hover:text-amber-400 transition-colors">FAQ</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy-policy" className="text-zinc-400 hover:text-amber-400 transition-colors">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-zinc-400 hover:text-amber-400 transition-colors">Terms of Service</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-zinc-400 hover:text-amber-400 transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-zinc-500 text-sm">
                        &copy; {currentYear} One Goal. All rights reserved.
                    </p>
                    <p className="text-zinc-600 text-sm mt-4 md:mt-0 italic">
                        Focus heavily on one thing.
                    </p>
                </div>
            </div>
        </footer>
    );
}
