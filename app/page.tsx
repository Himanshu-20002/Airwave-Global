import dynamic from 'next/dynamic';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSlider from '@/components/hero/HeroSlider';
import MetricCounters from '@/components/sections/MetricCounters';

// Above-The-Fold Interactive Hub
const QuickLogisticsHub = dynamic(() => import('@/components/sections/QuickLogisticsHub'));

// Progressive Below-The-Fold Code-Split Sections
const Accreditations = dynamic(() => import('@/components/sections/Accreditations'));
const ValuePillars = dynamic(() => import('@/components/sections/ValuePillars'));
const CoreServices = dynamic(() => import('@/components/sections/CoreServices'));
const CapabilitiesGrid = dynamic(() => import('@/components/sections/CapabilitiesGrid'));
const IndustriesGrid = dynamic(() => import('@/components/sections/IndustriesGrid'));
const BrandMarquee = dynamic(() => import('@/components/sections/BrandMarquee'));
const ProcessPipeline = dynamic(() => import('@/components/sections/ProcessPipeline'));
const ValueAddedServices = dynamic(() => import('@/components/sections/ValueAddedServices'));
const NetworkMap = dynamic(() => import('@/components/sections/NetworkMap'));
const LatestInsights = dynamic(() => import('@/components/sections/LatestInsights'));
const QuoteSection = dynamic(() => import('@/components/sections/QuoteSection'));
const FloatingActions = dynamic(() => import('@/components/ui/FloatingActions'), { ssr: false });

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        {/* Instant Critical Path (LCP / FCP) */}
        <HeroSlider />
        <MetricCounters />
        <QuickLogisticsHub />

        {/* High-Priority Immediate Scroll Sections */}
        <Accreditations />
        <ValuePillars />
        <CoreServices />

        {/* Deferred Deep Sections (Content-Visibility Accelerated for 120 FPS) */}
        <div className="section-deferred">
          <CapabilitiesGrid />
        </div>
        <div className="section-deferred">
          <IndustriesGrid />
        </div>
        <div className="section-deferred">
          <BrandMarquee />
        </div>
        <div className="section-deferred">
          <ProcessPipeline />
        </div>
        <div className="section-deferred">
          <ValueAddedServices />
        </div>
        <div className="section-deferred">
          <NetworkMap />
        </div>
        <div className="section-deferred">
          <LatestInsights />
        </div>
        <div className="section-deferred">
          <QuoteSection />
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
