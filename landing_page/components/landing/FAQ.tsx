"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Do I need to create an account?",
            answer: "No. One Goal is designed to be a completely private, localized utility. You don't need an account, an email, or a subscription to use the core features."
        },
        {
            question: "Where is my data stored?",
            answer: "All your data is stored locally on your device. We don't collect, track, or sync your goals to any cloud servers. It's 100% private."
        },
        {
            question: "Can I track more than one goal?",
            answer: "No, deliberately. The entire philosophy of One Goal is extreme focus. If you want to track multiple habits or goals, there are plenty of other apps for that. One Goal forces you to prioritize the single most important thing."
        },
        {
            question: "What happens if I miss a day?",
            answer: "If you log 'No' or miss a day entirely, your streak resets to zero. This psychological weight is what makes the streak a powerful motivator."
        },
        {
            question: "Is One Goal free to use?",
            answer: "Yes, the core functionality of One Goal is completely free. We may introduce optional premium themes or advanced local analytics in the future, but the ability to track one goal daily will always remain free."
        }
    ];

    return (
        <section id="faq" className="w-full py-24 bg-zinc-950 border-t border-zinc-900 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-zinc-400">Everything you need to know about One Goal.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="border border-zinc-800 bg-zinc-900/50 rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="font-medium text-white pr-8">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-amber-500 shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 pt-0 text-zinc-400 text-sm md:text-base leading-relaxed border-t border-zinc-800/50 mt-2 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
