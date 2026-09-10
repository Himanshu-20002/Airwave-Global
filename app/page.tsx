import dynamic from 'next/dynamic';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSlider from '@/components/hero/HeroSlider';
import MetricCounters from '@/components/sections/MetricCounters';
import Accreditations from '@/components/sections/Accreditations';
import ValuePillars from '@/components/sections/ValuePillars';
import CoreServices from '@/components/sections/CoreServices';
import CapabilitiesGrid from '@/components/sections/CapabilitiesGrid';
import IndustriesGrid from '@/components/sections/IndustriesGrid';
import BrandMarquee from '@/components/sections/BrandMarquee';
import ProcessPipeline from '@/components/sections/ProcessPipeline';
import ValueAddedServices from '@/components/sections/ValueAddedServices';
import NetworkMap from '@/components/sections/NetworkMap';
import LatestInsights from '@/components/sections/LatestInsights';

const QuickLogisticsHub = dynamic(() => import('@/components/sections/QuickLogisticsHub'));
const QuoteSection = dynamic(() => import('@/components/sections/QuoteSection'));
const FloatingActions = dynamic(() => import('@/components/ui/FloatingActions'), { ssr: false });

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <HeroSlider />
        <MetricCounters />
        <QuickLogisticsHub />
        <Accreditations />
        <ValuePillars />
        <CoreServices />
        <CapabilitiesGrid />
        <IndustriesGrid />
        <BrandMarquee />
        <ProcessPipeline />
        <ValueAddedServices />
        <NetworkMap />
        <LatestInsights />
        <QuoteSection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
