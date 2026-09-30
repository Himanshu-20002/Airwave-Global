import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, Globe, Building2, CheckCircle2 } from 'lucide-react';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingActions from '@/components/ui/FloatingActions';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Airwave Global Logistics Private Limited',
  description: 'Read the standard Terms & Conditions governing access to our website, freight forwarding, customs clearance, and cargo management services.',
};

export default function TermsAndConditionsPage() {
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
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              Welcome to <strong>Airwave Global Logistics Private Limited</strong> (&ldquo;Airwave&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). These Terms &amp; Conditions govern your access to our website and the provision of our freight forwarding and logistics services.
            </p>
            <p className="mt-2 text-sm text-slate-400">
              By visiting our website or utilizing our services, you agree to be bound by these terms. If you disagree with any portion of these conditions, please refrain from using our platform and services.
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
                  About Airwave
                </h2>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-xs sm:text-sm space-y-1.5">
                  <p><strong>Company Name:</strong> Airwave Global Logistics Private Limited</p>
                  <p><strong>Corporate HQ:</strong>Flat No. 400-A, 12, 4th Floor, Hauz Khas, South West Delhi - 110016, Delhi, India</p>
                  <p><strong>Official Website:</strong> <a href="https://airwaveglobal.in" className="text-[#fe7f25] hover:underline font-medium">https://airwaveglobal.in</a></p>
                  <p><strong>Contact Email:</strong> <a href="mailto:info@airwaveglobal.in" className="text-[#fe7f25] hover:underline font-medium">info@airwaveglobal.in</a></p>
                  <p><strong>Contact Number:</strong> <a href="tel:+918368262026" className="text-[#fe7f25] hover:underline font-medium">+91 83682 62026</a></p>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">2</span>
                  Scope of Services
                </h2>
                <p>Airwave delivers comprehensive freight forwarding and supply chain solutions, including:</p>
                <ul className="mt-2.5 space-y-1.5 list-disc list-inside text-xs sm:text-sm text-slate-600">
                  <li>International Air Freight Services (Standard, Priority &amp; Full Aircraft Charters)</li>
                  <li>Ocean Freight Forwarding (FCL, LCL, Breakbulk &amp; Project Cargo)</li>
                  <li>Heavy Lift, Project Logistics &amp; Out-of-Gauge (OOG) consignments</li>
                  <li>Statutory Customs Clearance, Brokerage &amp; Tariff Advisory</li>
                  <li>Multimodal Road, Rail &amp; Inland Container Depot (ICD) transit</li>
                  <li>Temperature-controlled Pharma Cold Chain Logistics</li>
                  <li>Warehousing, Bonded Storage &amp; Final-Mile Delivery</li>
                </ul>
                <p className="mt-2 text-xs text-slate-500 italic">
                  All services remain subject to space availability, technical feasibility, carrier terms, and statutory regulatory compliance.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">3</span>
                  Use of Website
                </h2>
                <p>When accessing or using our digital platform, you agree to the following terms:</p>
                <ul className="mt-2 space-y-1.5 list-disc list-inside text-xs sm:text-sm text-slate-600">
                  <li>You will utilize the platform solely for lawful commercial and logistics purposes.</li>
                  <li>You will not disrupt, impair, or compromise the stability and security of the website.</li>
                  <li>You will not attempt unauthorized entry into administrative portals, servers, or user data.</li>
                  <li>Platform content and digital tools may not be scraped, copied, or republished without written consent.</li>
                </ul>
                <p className="mt-2 text-xs text-slate-500">
                  We reserve the right to restrict or suspend access if malicious activity or terms violation is identified.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">4</span>
                  Information Accuracy &amp; Disclaimer
                </h2>
                <p>While we make reasonable efforts to maintain current and precise content on our website:</p>
                <ul className="mt-2 space-y-1.5 list-disc list-inside text-xs sm:text-sm text-slate-600">
                  <li>All website materials are provided for general informational purposes only.</li>
                  <li>Schedule guidelines, transit duration indicators, and rates are indicative and non-binding.</li>
                  <li>We do not warrant that all descriptions are exhaustive or suitable for unique shipment requirements.</li>
                </ul>
                <p className="mt-2 text-xs text-slate-500">
                  Official logistics engagements are governed strictly by signed quotations, written agreements, and shipping documentation (AWB/BL).
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">5</span>
                  Quotations &amp; Pricing
                </h2>
                <ul className="space-y-1.5 list-disc list-inside text-xs sm:text-sm text-slate-600">
                  <li>All freight rate quotes, RFQ replies, and estimates are provisional until confirmed in writing by Airwave.</li>
                  <li>Tariffs are subject to carrier adjustments, fuel surcharges (FSC/BAF), currency fluctuations, terminal fees, and port congestion.</li>
                  <li>Final invoiced amounts are determined by audited chargeable weights (gross vs. volumetric), dimensions, and verified shipment parameters.</li>
                  <li>Airwave reserves the right to recalculate freight charges where cargo parameters deviate from initial declarations.</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">6</span>
                  Client &amp; Shipper Responsibilities
                </h2>
                <p>Clients and shippers engaging Airwave are responsible for:</p>
                <ul className="mt-2 space-y-1.5 list-disc list-inside text-xs sm:text-sm text-slate-600">
                  <li>Supplying accurate commercial invoices, packing lists, HS classifications, and cargo dimensions.</li>
                  <li>Ensuring all goods comply fully with domestic and destination export/import laws.</li>
                  <li>Secure industrial packaging and unambiguous labeling appropriate for international transport perils.</li>
                  <li>Timely presentation of authorized statutory clearances, IEC details, and director KYC documents.</li>
                  <li>Complete upfront disclosure of any hazardous, chemical, or restricted items with valid MSDS certificates.</li>
                </ul>
                <p className="mt-2 text-xs text-slate-500">
                  Omissions or misdeclarations may cause port holds, carrier penalties, or demurrage costs, which remain the client&apos;s sole responsibility.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">7</span>
                  Customs &amp; Regulatory Clearance
                </h2>
                <p>Customs brokerage and clearance procedures are governed by:</p>
                <ul className="mt-2 space-y-1.5 list-disc list-inside text-xs sm:text-sm text-slate-600">
                  <li>Indian Customs regulations, ICEGATE protocols, and destination border authorities.</li>
                  <li>Applicable governmental port agencies, security inspections, and regulatory boards.</li>
                </ul>
                <p className="mt-2 text-xs text-slate-600">
                  Airwave facilitates customs filing diligently as a customs house agent. However, we cannot guarantee clearance timelines when delays occur due to statutory inspections, customs queries, random assessments, or sovereign border interventions.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">8</span>
                  Limitation of Liability
                </h2>
                <p>To the fullest extent permissible under law:</p>
                <ul className="mt-2 space-y-1.5 list-disc list-inside text-xs sm:text-sm text-slate-600">
                  <li>Airwave shall not be liable for consequential, incidental, indirect, or economic losses, including loss of market or profits.</li>
                  <li>Carrier liability for transit loss or damage is limited in accordance with governing international conventions (Warsaw/Montreal Conventions for Air, Hague-Visby Rules for Ocean).</li>
                  <li>Airwave&apos;s liability as an intermediary is strictly defined by applicable standard trading conditions and bill of lading contracts.</li>
                </ul>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">9</span>
                  Cargo Insurance
                </h2>
                <p>
                  Consignments are not automatically insured against all transit risks. Shippers are strongly encouraged to arrange comprehensive all-risk marine cargo insurance.
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Upon written request, Airwave can assist in facilitating third-party marine insurance coverage, but Airwave acts solely as an intermediary and never as the primary underwriter.
                </p>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">10</span>
                  Third-Party Carriers &amp; Subcontractors
                </h2>
                <p>
                  To execute global freight operations, Airwave partners with reputable third-party commercial airlines, shipping lines, trucking operators, container terminals, and bonded warehouse providers.
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  We exercise due diligence in partner selection, but Airwave is not directly responsible for the operational acts, omissions, or route diversions of independent carriers beyond statutory contractual boundaries.
                </p>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">11</span>
                  Confidentiality
                </h2>
                <p>
                  All commercial freight quotations, shipper trade details, consignee lists, and cargo documentation provided to Airwave are treated as confidential. Such information will only be disclosed to operating airlines, ocean carriers, and customs authorities as strictly required to execute the shipment or comply with statutory orders.
                </p>
              </div>

              {/* Section 12 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">12</span>
                  Intellectual Property
                </h2>
                <p>
                  All content displayed on this website—including company trademarks, logos, visual layouts, text, and design—is the exclusive intellectual property of Airwave Global Logistics Private Limited or its respective licensors. Unauthorized copying, reverse engineering, or reproduction is prohibited.
                </p>
              </div>

              {/* Section 13 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">13</span>
                  Force Majeure
                </h2>
                <p>
                  Airwave shall not be liable for shipment delays, route interruptions, or non-performance caused by events beyond reasonable operational control, including:
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-xs sm:text-sm text-slate-600">
                  <li>Natural disasters, extreme weather, typhoons, and marine perils</li>
                  <li>Labor strikes, lockouts, or port terminal shutdowns</li>
                  <li>War, geopolitical embargoes, or armed conflicts</li>
                  <li>Governmental border restrictions, customs lockdowns, or regulatory mandates</li>
                  <li>Canal blockages, airway groundings, or major carrier insolvencies</li>
                </ul>
              </div>

              {/* Section 14 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">14</span>
                  Governing Law &amp; Jurisdiction
                </h2>
                <p>
                  These Terms &amp; Conditions and all contractual agreements entered into with Airwave shall be governed by and interpreted in accordance with the substantive laws of <strong>India</strong>.
                </p>
                <p className="mt-2">
                  Any disputes or claims arising out of our services or website use shall fall under the exclusive jurisdiction of the competent courts in <strong>New Delhi, India</strong>.
                </p>
              </div>

              {/* Section 15 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">15</span>
                  Amendments &amp; Updates
                </h2>
                <p>
                  Airwave reserves the right to amend or revise these Terms &amp; Conditions periodically to reflect regulatory updates or operational refinements. Any changes become effective immediately upon being published on this page.
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Your continued use of our website or freight services following revisions signifies your acceptance of the updated terms.
                </p>
              </div>

              {/* Section 16 */}
              <div className="pt-6 border-t border-slate-200">
                <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="text-xs font-black text-[#fe7f25] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">16</span>
                  Contact Information
                </h2>
                <p className="mb-3 text-xs sm:text-sm text-slate-600">
                  If you have any questions or require clarifications regarding these Terms &amp; Conditions, please reach out to our team:
                </p>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/90 text-xs sm:text-sm space-y-2">
                  <p className="font-bold text-slate-900 text-sm">Airwave Global Logistics Private Limited</p>
                  <p className="text-slate-600">Flat No. 400-A, 12, 4th Floor, Hauz Khas, South West Delhi - 110016, Delhi, India</p>
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
