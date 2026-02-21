import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/landing/Footer";

export default function PrivacyPolicy() {
    const lastUpdated = "February 22, 2026";

    return (
        <>
            <Navbar />
            <main className="flex-1 flex flex-col items-center pb-24 relative overflow-hidden">
                {/* Background Decorative Blur */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

                <section className="w-full max-w-4xl mx-auto px-6 pt-24 md:pt-32">
                    <div className="mb-16 border-b border-zinc-800 pb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-zinc-400">
                            Our commitment to your privacy is simple: we believe your goals are your business. This document outlines our data practices for the One Goal application.
                        </p>
                        <p className="text-sm font-medium text-amber-500 mt-6 uppercase tracking-wider">
                            Last Updated: {lastUpdated}
                        </p>
                    </div>

                    <div className="prose prose-invert prose-zinc max-w-none text-zinc-300">
                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Introduction and Core Philosophy</h2>
                        <p className="mb-6 leading-relaxed">
                            Welcome to One Goal ("we," "our," or "us"). We built One Goal with a fundamental philosophy: your personal goals, habits, and progress should remain completely private. In a digital landscape where tracking user behavior and monetizing personal data has become the industry standard, we have chosen a radically different approach. We do not want your data. We do not need your data. Our application is designed to function entirely offline, keeping your information where it belongs—on your device.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            This Privacy Policy applies to the One Goal mobile application and the accompanying website (collectively, the "Services"). By using our Services, you acknowledge the practices described in this policy.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. Data Collection and Local Storage</h2>
                        <p className="mb-6 leading-relaxed">
                            The primary function of One Goal is to allow you to set a single goal and track your daily adherence to that goal. To facilitate this core functionality, the application must store the text of your goal, your daily "Yes" or "No" inputs, and your computed streak history.
                        </p>
                        <p className="mb-6 leading-relaxed">
                            <strong>Local Storage Only:</strong> All of the aforementioned data—your goal, your daily logs, and your streak count—is stored explicitly and exclusively on the local storage of your device. We do not transmit this data to any external servers, third-party databases, or cloud storage environments operated by us or our partners.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            Because this data is stored locally, it remains under your direct control. If you clear the application data via your device's operating system settings, or if you uninstall the application, your goal and streak data will be permanently and irrevocably deleted. We possess no backups of your data and cannot restore it on your behalf.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. What We Do Not Collect</h2>
                        <p className="mb-6 leading-relaxed">
                            To further clarify our commitment to data minimalization, we explicitly state that we do not collect, process, or store:
                        </p>
                        <ul className="list-disc pl-6 mb-8 space-y-3 leading-relaxed">
                            <li><strong>Personally Identifiable Information (PII):</strong> We do not require you to create an account, register with an email address, or provide your name, phone number, or physical address.</li>
                            <li><strong>Usage Analytics:</strong> We refrain from embedding third-party analytics SDKs (Software Development Kits) into the core application that monitor how frequently you open the app, which buttons you press, or the duration of your sessions.</li>
                            <li><strong>Advertising Identifiers:</strong> We do not utilize IDFA (Identifier for Advertisers), Google Advertising ID, or similar tracking mechanisms to serve personalized advertisements.</li>
                            <li><strong>Location Data:</strong> We do not ask for or collect GPS, IP-based, or other geographical location data.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Anonymous Crash Reporting (Optional)</h2>
                        <p className="mb-6 leading-relaxed">
                            In order to ensure the stability and reliability of the One Goal application, we may, with your explicit device-level consent, receive anonymized crash reports. These reports are generated solely in the event that the application experiences a fatal error or unexpected termination.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            These crash reports contain technical diagnostic information, such as your device model, operating system version, and the specific line of code that triggered the failure. They do not contain the text of your personal goal, your daily logs, or any personally identifiable information. Your participation in crash reporting is governed by the diagnostic settings of your mobile operating system (iOS or Android) and can be disabled at any time through your device settings.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. App Store and Platform Ecosystems</h2>
                        <p className="mb-8 leading-relaxed">
                            While we do not collect personal data through the One Goal application, it is important to understand that the platform from which you downloaded the app (e.g., Apple App Store, Google Play Store) operates under its own distinct privacy policies. When you purchase or download the app, these platforms may collect transactional information, device identifiers, and regional data. We encourage you to review the privacy policies of Apple Inc. and Google LLC to understand their respective data practices.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">6. Changes to this Privacy Policy</h2>
                        <p className="mb-8 leading-relaxed">
                            We may update this Privacy Policy from time to time to reflect changes in our practices, operational considerations, or legal and regulatory requirements. Because we do not collect email addresses, we cannot proactively notify you of these changes. We encourage you to review this page periodically. The "Last Updated" date at the top of this document indicates when the latest modifications were published. Your continued use of the One Goal application following the posting of any changes constitutes your acceptance of those changes.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">7. Contact Information</h2>
                        <p className="mb-8 leading-relaxed">
                            If you have any questions, concerns, or requests regarding this Privacy Policy or our overall approach to data privacy, we invite you to contact us. Please reach out to our support team at <a href="mailto:support@onegoalapp.com" className="text-amber-500 hover:text-amber-400 no-underline transition-colors">support@onegoalapp.com</a>.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
