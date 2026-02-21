"use client";

import { motion } from "framer-motion";
import { Check, X, Flame } from "lucide-react";
import AppScreen from "../mockup/AppScreen";

export default function Hero() {
    return (
        <section className="relative pt-20 pb-32 overflow-hidden w-full flex justify-center">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left pt-12 lg:pt-0 pl-14 pr-10 xl:pr-10 xl:pl-48">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-400 mb-6"
                        >
                            <Flame className="w-4 h-4 mr-2" />
                            Build your streak
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
                        >
                            Just one goal.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                                Tracked daily.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0"
                        >
                            No lists. No systems. No overwhelm. Set a single goal and commit to it every day with a simple Yes or No.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                        >
                            <a href="#download" className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-amber-500 px-8 text-sm font-semibold text-zinc-950 transition-all hover:bg-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]">
                                Start Tracking Free
                            </a>
                            <a href="#how-it-works" className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800">
                                See How It Works
                            </a>
                        </motion.div>
                    </div>

                    {/* Interactive Mockup */}
                    <div className="flex-1 w-full max-w-md lg:max-w-lg relative pr-14 pl-10 xl:pl-10 xl:pr-48">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="relative z-10"
                        >
                            <AppScreen />
                        </motion.div>

                        {/* Decorative elements around mockup */}
                        <div className="absolute -right-6 top-1/4 animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="glass-panel text-white p-3 rounded-2xl shadow-xl flex items-center gap-3 pr-5">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-zinc-950">
                                    <Flame className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-zinc-400">Current Streak</div>
                                    <div className="font-bold text-lg leading-none">12 Days</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -left-6 bottom-1/4 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                            <div className="glass-panel text-white p-3 rounded-2xl shadow-xl flex items-center gap-3 pr-4">
                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                    <Check className="w-4 h-4" />
                                </div>
                                <div className="font-medium text-sm">Completed Today</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
