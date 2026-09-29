import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, Globe, Building2, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingActions from '@/components/ui/FloatingActions';

export const metadata: Metadata = {
  title: 'Privacy Policy | Airwave Global Logistics Private Limited',
  description: 'Understand how Airwave Global Logistics collects, processes, protects, and handles your enterprise data and cargo documentation in compliance with data privacy standards.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="bg-slate-50 min-h-screen">
        {/* Hero Header */}
        <section className="bg-[#071126] text-white py-14 lg:py-18 relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fe7f25_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#fe7f25] hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-display">
              Privacy Policy
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              <strong>Airwave Global Logistics Private Limited</strong> (&ldquo;Airwave&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) prioritizes the trust of our clients, partners, and platform visitors. This Privacy Policy details our practices concerning the collection, management, safeguarding, and disclosure of personal and corporate information.
            </p>
            <p className="mt-2 text-sm text-slate-400">
              By visiting our website or submitting shipping inquiries, you acknowledge and agree to the procedures outlined in this policy.
            </p>
          </div>
        </section>

        {/* Content Body */}
        <section className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">

            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-9 text-slate-700 text-sm leading-relaxed">

              {/* Section 1 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">1</span>
                  Who We Are
                </h2>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-xs sm:text-sm space-y-1.5">
                  <p><strong>Corporate Entity:</strong> Airwave Global Logistics Private Limited</p>
                  <p><strong>Operating Brand:</strong> Airwave Global Logistics</p>
                  <p><strong>Corporate Headquarters:</strong> Plot No. 123, 4th Floor, Sample Business Park, New Delhi - 110001, INDIA</p>
                  <p><strong>Official Website:</strong> <a href="https://airwaveglobal.in" className="text-[#fe7f25] hover:underline font-medium">https://airwaveglobal.in</a></p>
                  <p><strong>Compliance Email:</strong> <a href="mailto:info@airwaveglobal.in" className="text-[#fe7f25] hover:underline font-medium">info@airwaveglobal.in</a></p>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">2</span>
                  Information We Collect
                </h2>
                <p>We gather information necessary to provide accurate quotations, coordinate international freight movements, and maintain platform security:</p>

                <div className="mt-3 space-y-3">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                    <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wide mb-1.5">A. Information Provided Directly by You</h3>
                    <p className="text-xs text-slate-600 mb-2">When completing quote forms, requesting callbacks, or corresponding with our logistics team, you may provide:</p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
                      <li>Full name and job designation</li>
                      <li>Business/company legal name and tax/GST identification</li>
                      <li>Corporate email address and primary telephone / WhatsApp contact</li>
                      <li>Geographical details (origin port/city, destination terminal, country)</li>
                      <li>Shipment specifications (commodity classification, gross weight, volume in CBM, container type, delivery timeline)</li>
                      <li>Inquiry notes, commercial invoices, or cargo documentation attachments</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                    <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wide mb-1.5">B. Information Gathered Automatically</h3>
                    <p className="text-xs text-slate-600 mb-2">During your interaction with our online portal, technical data may be recorded automatically:</p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
                      <li>Browser client, operating system, and screen specifications</li>
                      <li>Pages navigated, dwell time, and interaction heatmaps</li>
                      <li>Referring URL and search channels utilized to locate our services</li>
                      <li>Technical session cookies to remember preferences and ensure DDoS protection</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">3</span>
                  How We Use Your Information
                </h2>
                <p>Collected information is utilized strictly for legitimate operational purposes:</p>
                <ul className="mt-2.5 space-y-1.5 list-disc list-inside text-xs sm:text-sm text-slate-600">
                  <li>Preparing and delivering customized air and ocean freight rate quotations</li>
                  <li>Facilitating carrier space bookings, airline charter allocations, and inland transport scheduling</li>
                  <li>Issuing shipment notices, customs clearance milestones, and AWB/BL documentation updates</li>
                  <li>Enhancing portal usability, page rendering speeds, and mobile accessibility</li>
                  <li>Conducting internal quality audits and cargo volume forecasting</li>
                  <li>Sharing pertinent market advisories, fuel surcharge notices, or operational updates</li>
                </ul>
                <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs font-medium text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Zero Data Monetization:</strong> Airwave does not sell, rent, or trade your personal or cargo information to third-party advertisers.</span>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">4</span>
                  Lawful Grounds for Processing
                </h2>
                <p>We process your data strictly under recognized legal bases, including:</p>
                <ul className="mt-2 space-y-1.5 list-disc list-inside text-xs sm:text-sm text-slate-600">
                  <li><strong>Contractual Execution:</strong> Fulfilling rate requests, bill of lading issuance, and logistics carriage contracts.</li>
                  <li><strong>Consent:</strong> Express authorization granted when completing web forms or requesting communications.</li>
                  <li><strong>Statutory Mandates:</strong> Complying with Indian Customs (ICEGATE), DGFT, tax filing, and aviation security protocols.</li>
                  <li><strong>Legitimate Interests:</strong> Preventing unauthorized portal access, securing enterprise networks, and refining logistics offerings.</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">5</span>
                  How We Share Your Information
                </h2>
                <p>
                  To execute complex multi-modal transit, shipment data is shared exclusively with authorized stakeholders on a need-to-know basis:
                </p>
                <ul className="mt-2.5 space-y-1.5 list-disc list-inside text-xs sm:text-sm text-slate-600">
                  <li><strong>Operating Carriers:</strong> Contracted commercial airlines, container shipping lines, and surface fleet hauliers.</li>
                  <li><strong>Statutory &amp; Port Bodies:</strong> Customs authorities, terminal handling operators, and border inspection agencies.</li>
                  <li><strong>Warehouse &amp; CFS Operators:</strong> Bonded warehouse facilities, inland container depots, and last-mile distributors.</li>
                  <li><strong>Technology Infrastructure:</strong> Secure cloud hosting, SSL gateway providers, and communication relays.</li>
                </ul>
                <p className="mt-2 text-xs text-slate-500">
                  We disclose only the minimal data required to execute safe, compliant, and punctual transit.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">6</span>
                  Cookies &amp; Tracking Technologies
                </h2>
                <p>Our website utilizes necessary and performance cookies to:</p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-xs sm:text-sm text-slate-600">
                  <li>Maintain secure session state and navigation stability</li>
                  <li>Analyze visitor volume and optimize frequently accessed logistics resources</li>
                  <li>Ensure responsive layout adjustments across mobile and desktop devices</li>
                </ul>
                <p className="mt-2 text-xs text-slate-500">
                  You can modify or disable cookies at any time via your browser settings, though certain interactive calculators may function with limited capabilities.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">7</span>
                  Data Security Standards
                </h2>
                <p>
                  We implement multi-layered administrative, digital, and physical safeguards to prevent unauthorized data access, unlawful disclosure, or accidental destruction. These include TLS/SSL data transmission encryption, access-controlled document repositories, and continuous server monitoring.
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  While we take rigorous measures to preserve data confidentiality, no internet transmission is completely immune to external cyber risks, and we advise caution when transmitting sensitive credentials.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">8</span>
                  Data Retention Policy
                </h2>
                <p>Personal and corporate records are retained only for as long as required to:</p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-xs sm:text-sm text-slate-600">
                  <li>Process, execute, and verify contracted freight shipments</li>
                  <li>Satisfy mandatory statutory, tax, and customs audit guidelines (typically 5 to 7 years under Indian law)</li>
                  <li>Address claims, billing clarifications, or legal compliance reviews</li>
                </ul>
                <p className="mt-2 text-xs text-slate-500">
                  Once retention requirements elapse, data is securely sanitized or anonymized.
                </p>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">9</span>
                  Your Privacy Rights
                </h2>
                <p>Under applicable Indian and international privacy standards, you hold the right to:</p>
                <ul className="mt-2.5 space-y-1.5 list-disc list-inside text-xs sm:text-sm text-slate-600">
                  <li>Request confirmation and access to personal records held by Airwave</li>
                  <li>Request rectification of inaccurate, outdated, or incomplete corporate contact data</li>
                  <li>Request erasure of records where legal retention mandates have concluded</li>
                  <li>Opt out of non-transactional marketing and service announcements at any point</li>
                </ul>
                <p className="mt-2 text-xs text-slate-600">
                  To exercise any of these privileges, please email your request to: <a href="mailto:info@airwaveglobal.in" className="text-[#fe7f25] font-semibold hover:underline">info@airwaveglobal.in</a>.
                </p>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">10</span>
                  Third-Party Links &amp; External Portals
                </h2>
                <p>
                  Our site may feature links pointing to third-party resources, port tracking databases, or industry platforms. Airwave is not responsible for the privacy policies or practices maintained by external sites. We suggest reviewing their respective statements before transmitting data.
                </p>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">11</span>
                  Cross-Border Data Transfers
                </h2>
                <p>
                  Given the global nature of freight forwarding, your shipment documentation may be processed in India or at destination international ports where operating carriers and partner agents manage local clearance. We maintain strict non-disclosure commitments across our international partner network.
                </p>
              </div>

              {/* Section 12 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">12</span>
                  Children&apos;s Privacy
                </h2>
                <p>
                  Airwave provides commercial B2B freight forwarding and supply chain services. Our website is intended strictly for corporate business users and does not knowingly collect information from individuals under the age of 18.
                </p>
              </div>

              {/* Section 13 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">13</span>
                  Updates to This Privacy Policy
                </h2>
                <p>
                  We may periodically revise this Privacy Policy to reflect regulatory amendments or operational adjustments. Any changes will be published directly on this page with an updated revision date. We encourage visitors to review this page periodically.
                </p>
              </div>

              {/* Section 14 */}
              <div className="pt-6 border-t border-slate-200">
                <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">14</span>
                  Contact Us
                </h2>
                <p className="mb-3 text-xs sm:text-sm text-slate-600">
                  For questions, data clarification requests, or feedback regarding our privacy practices, please contact our corporate desk:
                </p>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/90 text-xs sm:text-sm space-y-2">
                  <p className="font-bold text-slate-900 text-sm">Airwave Global Logistics Private Limited</p>
                  <p className="text-slate-600">Plot No. 123, 4th Floor, Sample Business Park, New Delhi - 110001, INDIA</p>
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs font-semibold">
                    <a href="mailto:info@airwaveglobal.in" className="inline-flex items-center gap-1.5 text-[#fe7f25] hover:underline">
                      <Mail className="w-3.5 h-3.5" /> info@airwaveglobal.in
                    </a>
                    <a href="tel:+918368262026" className="inline-flex items-center gap-1.5 text-slate-700 hover:text-[#fe7f25]">
                      <Phone className="w-3.5 h-3.5 text-[#fe7f25]" /> +91 83682 62026
                    </a>
                    <a href="https://airwaveglobal.in" className="inline-flex items-center gap-1.5 text-slate-700 hover:text-[#fe7f25]">
                      <Globe className="w-3.5 h-3.5 text-[#fe7f25]" /> airwaveglobal.in
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Back to Home CTA */}
            <div className="mt-8 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#fe7f25] hover:bg-[#e0650d] text-white text-xs sm:text-sm font-bold shadow-md shadow-orange-500/20 transition-all"
              >
                <span>Return to Homepage</span>
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
