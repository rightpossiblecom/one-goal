"use client";

import { motion } from "framer-motion";
import { PenLine, CheckSquare, TrendingUp } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            icon: <PenLine className="w-8 h-8" />,
            title: "Set your goal",
            description: "Type out the one single thing you want to achieve or the habit you want to build. No categories, no tags, just text."
        },
        {
            number: "02",
            icon: <CheckSquare className="w-8 h-8" />,
            title: "Check in daily",
            description: "Open the app and answer honestly: 'Did I complete my goal today?'. A simple tap on Yes or No."
        },
        {
            number: "03",
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Watch it grow",
            description: "Every Yes adds to your streak. Every No resets it. The psychological weight of the streak keeps you accountable."
        }
    ];

    return (
        <section id="how-it-works" className="w-full py-24 bg-zinc-900 border-t border-zinc-800 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                        Three steps to unbreakable focus.
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        We removed every barrier between you and your goal.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-[60px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative z-10 flex flex-col items-center"
                            >
                                <div className="mb-6 relative group">
                                    <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                                    <div className="w-20 h-20 bg-zinc-950 border-2 border-zinc-800 rounded-2xl flex items-center justify-center text-amber-500 relative z-10 shadow-xl group-hover:border-amber-500/50 transition-colors">
                                        {step.icon}
                                    </div>
                                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-amber-500 text-zinc-950 font-bold rounded-lg flex items-center justify-center text-sm z-20 shadow-lg">
                                        {step.number}
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                                <p className="text-zinc-400 leading-relaxed px-4">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
