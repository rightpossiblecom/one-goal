import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/landing/Footer";
import Link from "next/link";
import { HelpCircle, FileText, Mail } from "lucide-react";

export default function HelpCenter() {
    const categories = [
        {
            title: "Getting Started",
            description: "Learn the basics of setting your first goal and using the tracker.",
            icon: <HelpCircle className="w-6 h-6" />,
            link: "#getting-started"
        },
        {
            title: "Managing Streaks",
            description: "Understand how streaks work, when they reset, and why they matter.",
            icon: <FileText className="w-6 h-6" />,
            link: "#streaks"
        },
        {
            title: "Privacy & Data",
            description: "Everything you need to know about our local-only data approach.",
            icon: <FileText className="w-6 h-6" />,
            link: "/privacy-policy"
        }
    ];

    return (
        <>
            <Navbar />
            <main className="flex-1 flex flex-col items-center pb-24 relative overflow-hidden">
                {/* Background Decorative Blur */}
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

                <section className="w-full max-w-5xl mx-auto px-6 pt-24 md:pt-32">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                            Help Center
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            Find answers, guides, and support for the One Goal application.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {categories.map((category, index) => (
                            <Link
                                key={index}
                                href={category.link}
                                className="glass-panel p-8 rounded-2xl group hover:bg-zinc-800/80 transition-colors block text-left"
                            >
                                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 group-hover:bg-amber-500/10 transition-all">
                                    {category.icon}
                                </div>
                                <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-400 transition-colors">{category.title}</h2>
                                <p className="text-zinc-400 leading-relaxed text-sm">
                                    {category.description}
                                </p>
                            </Link>
                        ))}
                    </div>

                    <div className="glass-panel p-10 rounded-2xl text-center max-w-2xl mx-auto">
                        <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mx-auto mb-6">
                            <Mail className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Still need help?</h3>
                        <p className="text-zinc-400 mb-8">
                            If you couldn't find the answer you're looking for, feel free to reach out to our support team directly. We're here to help you focus.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                        >
                            Contact Support
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
