"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Image from "next/image";

export default function AppScreen() {
    const currentMonth = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date());
    const currentDate = new Intl.DateTimeFormat('en-US', { weekday: 'long', day: 'numeric' }).format(new Date());

    return (
        <div className="w-full relative mx-auto max-w-[320px]">
            <motion.div
                className="relative bg-zinc-950 rounded-[3rem] border-[6px] border-zinc-900 shadow-2xl overflow-hidden aspect-[9/19] flex flex-col"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {/* Status Bar */}
                <div className="h-7 w-full flex justify-between items-center px-6 pt-2 z-20">
                    <div className="text-[10px] font-medium text-white">9:41</div>
                    <div className="flex gap-1.5 items-center">
                        <div className="w-3.5 h-2.5 bg-white rounded-sm"></div>
                        <div className="w-3.5 h-2.5 bg-white rounded-sm"></div>
                        <div className="w-5 h-2.5 bg-white rounded-sm"></div>
                    </div>
                </div>

                {/* Dynamic Island / Notch area */}
                <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-10 pointer-events-none">
                    <div className="w-32 h-6 bg-zinc-900 rounded-b-2xl"></div>
                </div>

                {/* App Content */}
                <div className="flex-1 flex flex-col pt-12 p-6 relative z-0 h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between w-full mb-8">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center font-bold text-zinc-950 text-xs shadow-lg shadow-amber-500/20 relative overflow-hidden">
                                <Image src="/app_logo.png" alt="One Goal" fill className="object-cover" />
                            </div>
                            <span className="font-semibold text-white tracking-tight">One Goal</span>
                        </div>
                    </div>
                    {/* Main Area */}
                    <div className="flex-1 flex flex-col items-center justify-center -mt-6">
                        <div className="text-zinc-500 text-sm font-medium uppercase tracking-widest mb-2">
                            {currentDate}
                        </div>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.8, type: "spring" }}
                            className="w-full text-center my-6"
                        >
                            <h2 className="text-3xl font-extrabold text-white leading-tight mb-2 tracking-tight">
                                Read 10 pages
                            </h2>
                        </motion.div>

                        <div className="flex w-full gap-4 mt-8">
                            <button className="flex-1 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-zinc-800 transition-colors">
                                <X className="w-6 h-6 text-red-500" />
                                <span className="text-xs font-semibold text-zinc-400">Not Today</span>
                            </button>

                            <button className="flex-1 py-4 bg-amber-500 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:scale-105 transition-transform">
                                <Check className="w-6 h-6 text-zinc-950" />
                                <span className="text-xs font-bold text-zinc-950">Done Today</span>
                            </button>
                        </div>
                    </div>

                    {/* Footer Area */}
                    <div className="mt-auto mb-4 w-full flex items-center justify-between border-t border-zinc-900 pt-6">
                        <div className="flex flex-col">
                            <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-1">Current Streak</span>
                            <div className="flex items-center text-amber-500 font-bold text-xl drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
                                🔥 12 Days
                            </div>
                        </div>

                        <button className="text-xs font-medium px-4 py-2 rounded-full border border-zinc-800 text-zinc-400 hover:text-white transition-colors">
                            Change Goal
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-zinc-900/40 rounded-full blur-3xl -z-10 mix-blend-color-dodge"></div>
        </div>
    );
}
