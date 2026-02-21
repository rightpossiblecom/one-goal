import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/landing/Footer";
import { Mail, Twitter, Github } from "lucide-react";

export default function Contact() {
    return (
        <>
            <Navbar />
            <main className="flex-1 flex flex-col items-center pb-24 relative overflow-hidden">
                {/* Background Decorative Blur */}
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

                <section className="w-full max-w-4xl mx-auto px-6 pt-24 md:pt-32">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            Have a question, feedback, or need support? We're here to help you stay focused on your one goal.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {/* Email Contact */}
                        <a
                            href="mailto:support@onegoalapp.com"
                            className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-zinc-800/80 transition-all hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-zinc-950 group-hover:border-amber-400 transition-all duration-300">
                                <Mail className="w-8 h-8" />
                            </div>
                            <h2 className="text-xl font-bold text-white mb-3 tracking-tight">Email Support</h2>
                            <p className="text-zinc-400 mb-2">
                                For general inquiries and technical assistance.
                            </p>
                            <p className="text-amber-500 font-medium group-hover:text-amber-400 transition-colors mt-auto pt-4">
                                support@onegoalapp.com
                            </p>
                        </a>

                        {/* Twitter Contact */}
                        <a
                            href="https://twitter.com/onegoalapp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-zinc-800/80 transition-all hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 group-hover:bg-[#1DA1F2] group-hover:text-white group-hover:border-[#1DA1F2] transition-all duration-300">
                                <Twitter className="w-8 h-8" />
                            </div>
                            <h2 className="text-xl font-bold text-white mb-3 tracking-tight">Twitter / X</h2>
                            <p className="text-zinc-400 mb-2">
                                Follow us for updates, tips, and community motivation.
                            </p>
                            <p className="text-[#1DA1F2] font-medium group-hover:text-[#1a8cd8] transition-colors mt-auto pt-4">
                                @onegoalapp
                            </p>
                        </a>
                    </div>

                    {/* Social Proof / Motivation */}
                    <div className="mt-24 text-center max-w-2xl mx-auto border-t border-zinc-800 pt-16">
                        <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Focus heavily on one thing.</h3>
                        <p className="text-zinc-500 italic">
                            "The man who chases two rabbits, catches neither."
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
