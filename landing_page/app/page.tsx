import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import FAQ from "@/components/landing/FAQ";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="flex-1 flex flex-col items-center">
                <Hero />
                <Features />
                <HowItWorks />
                <FAQ />

                {/* Bottom CTA */}
                <section className="w-full py-24 bg-zinc-900 border-t border-zinc-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
                    <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
                        <h2 className="text-4xl font-bold tracking-tight mb-6 text-white">
                            Stop guessing. Start tracking.
                        </h2>
                        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                            Get the clarity you need to achieve your single most important goal. No accounts required.
                        </p>
                        <a
                            href="#download"
                            className="inline-flex h-14 items-center justify-center rounded-full bg-amber-500 px-8 text-sm font-semibold text-zinc-950 transition-all hover:bg-amber-400 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                        >
                            Set your goal now
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
