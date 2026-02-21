"use client";

import { motion } from "framer-motion";
import { Target, CheckCircle2, Flame, Shield } from "lucide-react";

export default function Features() {
    const features = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Set Your One Goal",
            description: "Define a single, actionable goal. Not a to-do list, not a complex habit system. Just one clear objective you want to achieve."
        },
        {
            icon: <CheckCircle2 className="w-6 h-6" />,
            title: "Simple Daily Tracker",
            description: "Every day, answer one simple question: Did you do it? A straightforward Yes or No is all it takes to stay accountable."
        },
        {
            icon: <Flame className="w-6 h-6" />,
            title: "Build Your Streak",
            description: "Watch your consistency grow. Your streak is the ultimate motivation to show up, even on days when you don't feel like it."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "100% Private",
            description: "No accounts. No cloud syncing. No data collection. Everything stays on your device, because your goals are your business."
        }
    ];

    return (
        <section id="features" className="w-full py-24 bg-zinc-950 border-t border-zinc-900 relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                        Everything you need. <span className="text-zinc-500">Nothing you don't.</span>
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        We stripped away the complexity of traditional habit trackers to give you the most focused experience possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-panel p-8 flex gap-6 group hover:bg-zinc-800/80 transition-colors rounded-2xl"
                        >
                            <div className="shrink-0 w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500 group-hover:scale-110 group-hover:bg-amber-500/10 transition-all duration-300">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-amber-400 transition-colors">{feature.title}</h3>
                                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
