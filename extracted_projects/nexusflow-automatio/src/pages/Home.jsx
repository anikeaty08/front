import Hero from '../components/home/Hero';
import LogoCloud from '../components/home/LogoCloud';
import Features from '../components/home/Features';
import Workflow from '../components/home/Workflow';
import ExecutionEngine from '../components/home/ExecutionEngine';
import DataTransformation from '../components/home/DataTransformation';
import Collaboration from '../components/home/Collaboration';
import Observability from '../components/home/Observability';
import Testimonials from '../components/home/Testimonials';
import Architecture from '../components/home/Architecture';
import Pricing from '../components/home/Pricing';
import CTA from '../components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Features />
      <Workflow />
      <ExecutionEngine />
      <DataTransformation />
      <Collaboration />
      <Observability />
      <Testimonials />
      <Architecture />
      <Pricing />
      <CTA />
    </>
  );
}