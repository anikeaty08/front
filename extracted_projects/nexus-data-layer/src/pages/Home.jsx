import React, { useState } from 'react';
import ParticleCanvas from '../components/ParticleCanvas';
import AnimatedText from '../components/AnimatedText';
import NetworkSlider from '../components/NetworkSlider';
import FloatingMetric from '../components/FloatingMetric';
import TrustBar from '../components/TrustBar';
import CoreCapabilities from '../components/CoreCapabilities';
import HowItWorks from '../components/HowItWorks';
import ProductVisualization from '../components/ProductVisualization';
import UseCases from '../components/UseCases';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';

const Home = () => {
  const [isInitializing, setIsInitializing] = useState(false);

  const handleInitialize = () => {
    setIsInitializing(true);
    setTimeout(() => setIsInitializing(false), 2000);
  };

  return (
    <div className="w-full bg-[#030509] overflow-x-hidden min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden shrink-0">
        {/* Canvas Particle System Background Field */}
        <ParticleCanvas />

        {/* Matte Noise Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none z-10" 
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
        />

        {/* Left Column: Copy & Controls */}
        <div className="w-full md:w-[45%] lg:w-[40%] px-8 lg:px-16 py-16 md:py-24 flex flex-col relative z-20 shrink-0 border-r border-white/5">
          {/* Lineart Detail: Corner Brackets */}
          <div className="absolute top-8 left-8 w-3 h-3 border-t border-l border-white/20 hidden md:block" />
          <div className="absolute top-8 right-8 w-3 h-3 border-t border-r border-white/20 hidden md:block" />
          <div className="absolute bottom-8 left-8 w-3 h-3 border-b border-l border-white/20 hidden md:block" />
          <div className="absolute bottom-8 right-8 w-3 h-3 border-b border-r border-white/20 hidden md:block" />

          <div className="flex-1 flex flex-col justify-center">
            {/* Top Badge */}
            <div 
              className="fade-in-animate inline-flex items-center gap-2 px-3 py-1 text-xs font-light tracking-widest uppercase mb-12 border border-white/10 text-[#60A5FA] rounded-full w-max bg-white/5 backdrop-blur-sm"
              style={{ animationDelay: '0.6s' }}
            >
              <iconify-icon icon="solar:server-square-linear" stroke-width="1.5" class="text-sm"></iconify-icon>
              NEXUS DATA LAYER
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#FFFFFF] mb-6 leading-none font-playfair font-light">
                <AnimatedText text="Unbound computational streams.<br/>The neural framework." delayOffset={0} />
              </h1>
              
              {/* Body Text */}
              <p 
                className="fade-in-animate text-[#9CA3AF] text-lg leading-relaxed max-w-[360px] font-light mb-10 font-inter"
                style={{ animationDelay: '0.75s' }}
              >
                A self-healing packet routing protocol optimizing data streams from localized cores to distributed global networks. Manipulate the frequency track to tune network latency.
              </p>
              
              {/* Primary Action Button */}
              <button 
                onClick={handleInitialize}
                disabled={isInitializing}
                className="fade-in-animate bg-[#60A5FA] text-[#030509] px-8 py-3.5 rounded-full text-sm font-light w-max hover:bg-blue-300 transition-all duration-300 flex items-center gap-2 font-inter disabled:opacity-70 disabled:cursor-not-allowed group"
                style={{ animationDelay: '0.9s' }}
              >
                {isInitializing ? 'Initializing...' : 'Initialize Protocol'}
                <iconify-icon 
                  icon={isInitializing ? "solar:refresh-circle-linear" : "solar:cpu-linear"} 
                  stroke-width="1.5" 
                  class={`text-lg ${isInitializing ? 'animate-spin' : 'group-hover:rotate-12 transition-transform'}`}
                ></iconify-icon>
              </button>
            </div>

            {/* Custom Slider Control */}
            <div className="fade-in-animate mt-16 pt-8 w-full max-w-[400px] relative" style={{ animationDelay: '1.05s' }}>
              <NetworkSlider />
            </div>
          </div>
        </div>

        {/* Right Column: Media Frame */}
        <div 
          className="w-full md:w-[55%] lg:w-[60%] relative bg-transparent overflow-hidden min-h-[500px] md:min-h-0 border-t md:border-t-0 border-white/5 pointer-events-none flex-1" 
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Deep Integration Gradients */}
          <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-r from-[#030509] via-transparent to-transparent opacity-90" />
          <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-t md:bg-none from-[#030509] via-[#030509]/30 to-transparent opacity-80" />

          {/* Glassmorphism Floating Logic Card */}
          <FloatingMetric />
        </div>
      </section>

      {/* Trust Bar Section */}
      <TrustBar />

      {/* Core Capabilities Section */}
      <CoreCapabilities />

      {/* Protocol Flow / How It Works Section */}
      <HowItWorks />

      {/* Infrastructure Topology Diagram Section */}
      <ProductVisualization />

      {/* Applied Use Cases Section */}
      <UseCases />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Pricing Section */}
      <Pricing />
    </div>
  );
};

export default Home;