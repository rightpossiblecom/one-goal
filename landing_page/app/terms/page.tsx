import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/landing/Footer";

export default function TermsOfService() {
    const effectiveDate = "February 22, 2026";

    return (
        <>
            <Navbar />
            <main className="flex-1 flex flex-col items-center pb-24 relative overflow-hidden">
                {/* Background Decorative Blur */}
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

                <section className="w-full max-w-4xl mx-auto px-6 pt-24 md:pt-32">
                    <div className="mb-16 border-b border-zinc-800 pb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                            Terms of Service
                        </h1>
                        <p className="text-xl text-zinc-400">
                            Please read these Terms of Service carefully before using the One Goal application.
                        </p>
                        <p className="text-sm font-medium text-amber-500 mt-6 uppercase tracking-wider">
                            Effective Date: {effectiveDate}
                        </p>
                    </div>

                    <div className="prose prose-invert prose-zinc max-w-none text-zinc-300">
                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Agreement to Terms</h2>
                        <p className="mb-8 leading-relaxed">
                            By downloading, installing, or using the One Goal application (the "Service") operated by One Goal ("us", "we", or "our"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access or use the Service. These terms form a legally binding contract between you and One Goal.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. Description of Service</h2>
                        <p className="mb-6 leading-relaxed">
                            One Goal is a minimalist utility designed to help users track a single daily goal or habit. The Service provides functionality to input text representing a goal, log daily progress via binary input (Yes/No), and visualize continuous streaks of success.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            <strong>Local Nature of the Service:</strong> The Service operates entirely locally on your device. We do not provide cloud backup, synchronization across multiple devices, or account-based recovery. You are solely responsible for the physical and digital security of the device on which the Service is installed.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. Acceptable Use and Restrictions</h2>
                        <p className="mb-6 leading-relaxed">
                            You agree not to misuse the One Goal brand, logo, or software. Specifically, you agree not to:
                        </p>
                        <ul className="list-disc pl-6 mb-8 space-y-3 leading-relaxed">
                            <li>Reverse engineer, decompile, or disassemble the Service.</li>
                            <li>Modify, adapt, translate, or create derivative works based upon the Service.</li>
                            <li>Remove, alter, or obscure any copyright, trademark, or other proprietary rights notices contained in or on the Service.</li>
                            <li>Use the Service in any manner that could interfere with, disrupt, negatively affect, or inhibit other users from fully enjoying the Service, or that could damage, disable, overburden, or impair the functioning of the Service.</li>
                            <li>Use the Service for any illegal or unauthorized purpose.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Intellectual Property Rights</h2>
                        <p className="mb-8 leading-relaxed">
                            The Service and its original content, features, functionality, and design elements (excluding user-generated goals) are and will remain the exclusive property of One Goal and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of One Goal.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. Disclaimers and Limitations of Liability</h2>
                        <p className="mb-6 leading-relaxed">
                            <strong>"As-Is" Provision:</strong> The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We expressly disclaim all warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
                        </p>
                        <p className="mb-6 leading-relaxed">
                            <strong>Not Medical or Professional Advice:</strong> One Goal is a productivity utility. It is not intended to diagnose, treat, cure, or prevent any mental health condition, including but not limited to ADHD, depression, or anxiety. The Service should not be used as a substitute for professional medical advice, diagnosis, or treatment.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            <strong>Limitation of Liability:</strong> In no event shall One Goal, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or content.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">6. Changes to the Service</h2>
                        <p className="mb-8 leading-relaxed">
                            We reserve the right to modify, suspend, or discontinue, temporarily or permanently, the Service or any part thereof with or without notice. You agree that One Goal will not be liable to you or to any third party for any modification, suspension, or discontinuance of the Service.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">7. Governing Law</h2>
                        <p className="mb-8 leading-relaxed">
                            These Terms shall be governed and construed in accordance with the laws of your jurisdiction of residence, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">8. Contact Us</h2>
                        <p className="mb-8 leading-relaxed">
                            If you have any questions about these Terms, please contact us at <a href="mailto:legal@onegoalapp.com" className="text-amber-500 hover:text-amber-400 no-underline transition-colors">legal@onegoalapp.com</a>.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
