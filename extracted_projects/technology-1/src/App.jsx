import React from 'react';
import ThreeSphere from './components/ThreeSphere';
import AmbientParticles from './components/AmbientParticles';
import Features from './components/Features';
import Architecture from './components/Architecture';
import Performance from './components/Performance';
import EdgeNetwork from './components/EdgeNetwork';
import HowItWorks from './components/HowItWorks';
import Integrations from './components/Integrations';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative bg-[#0A0A0A] text-zinc-200 overflow-x-hidden font-sans selection:bg-[#FF4500]/30 selection:text-white">
      {/* Global Background Effects */}
      <AmbientParticles />
      
      {/* Hero Wrapper */}
      <div className="relative min-h-screen flex flex-col">
        {/* Background 3D element - Restricted to Hero (Made Smaller) */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center md:justify-end md:translate-x-1/4 opacity-60 overflow-hidden">
          <div className="w-[320px] h-[320px] md:w-[500px] md:h-[500px] mt-20 md:mt-0 mr-0 md:mr-12">
            <ThreeSphere />
          </div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col flex-1">
          {/* Navigation */}
          <header className="px-6 py-6 md:px-12 flex justify-between items-center border-b border-white/5 backdrop-blur-sm sticky top-0 z-50 bg-[#0A0A0A]/80">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <iconify-icon icon="solar:bolt-bold" class="text-[#FF4500] text-2xl"></iconify-icon>
              Dasher
            </div>
            <nav className="hidden md:flex gap-8 text-sm font-medium">
              <a href="#features" className="hover:text-white transition-colors duration-200">Features</a>
              <a href="#performance" className="hover:text-white transition-colors duration-200">Performance</a>
              <a href="#how-it-works" className="hover:text-white transition-colors duration-200">Workflow</a>
            </nav>
            <button className="px-5 py-2 bg-[#FF4500]/10 text-[#FF4500] hover:bg-[#FF4500] hover:text-white border border-[#FF4500]/20 rounded-full text-sm font-medium transition-all duration-300">
              Get Started
            </button>
          </header>

          {/* Hero Section */}
          <main className="flex-1 flex flex-col justify-center px-6 md:px-12 max-w-6xl w-full mx-auto py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium w-max mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse"></span>
                Dasher Engine v2.0 is live
              </div>
              
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
                Move at the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-orange-400">
                  Speed of Thought
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-xl">
                Experience unparalleled performance. Dasher leverages advanced compute architecture and intuitive workflows to accelerate your creative process beyond imagination.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-[#FF4500] hover:bg-[#ff571a] text-white rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,69,0,0.3)] hover:scale-105 flex items-center justify-center gap-2">
                  Start Building
                  <iconify-icon icon="solar:arrow-right-linear" class="text-xl"></iconify-icon>
                </button>
                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
                  View Documentation
                  <iconify-icon icon="solar:document-text-linear" class="text-xl"></iconify-icon>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Stats Transition Banner */}
      <section className="relative z-20 px-6 py-10 md:px-12 border-y border-white/5 bg-[#0A0A0A]/60 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          <div>
            <div className="text-4xl font-semibold text-white mb-2 tracking-tight">0.1<span className="text-xl text-[#FF4500]">ms</span></div>
            <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Latency</div>
          </div>
          <div>
            <div className="text-4xl font-semibold text-white mb-2 tracking-tight">99.9<span className="text-xl text-[#FF4500]">%</span></div>
            <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Uptime Guarantee</div>
          </div>
          <div>
            <div className="text-4xl font-semibold text-white mb-2 tracking-tight">10<span className="text-xl text-[#FF4500]">M+</span></div>
            <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Requests/sec</div>
          </div>
          <div>
            <div className="text-4xl font-semibold text-white mb-2 tracking-tight">250<span className="text-xl text-[#FF4500]">+</span></div>
            <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Global Edge Nodes</div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="relative z-10 flex flex-col bg-[#0A0A0A]">
        <Features />
        <Architecture />
        <Performance />
        <EdgeNetwork />
        <HowItWorks />
        <Integrations />
        <Pricing />
        <Testimonials />
        <CTA />
      </div>

      <Footer />
    </div>
  );
}