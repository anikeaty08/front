import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import BentoGrid from './components/BentoGrid';
import GlobalCommerceSection from './components/GlobalCommerceSection';
import DarkMetricsSection from './components/DarkMetricsSection';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="min-h-screen flex flex-col bg-white overflow-x-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Navbar />
      
      <main className="flex-grow">
        <div 
          className="pointer-events-none fixed z-[9999] transition-transform duration-75 ease-out"
          style={{ 
            left: `${mousePos.x}px`, 
            top: `${mousePos.y}px`,
            transform: isHovered ? 'scale(1.5) rotate(45deg)' : 'scale(1)'
          }}
        >
          <iconify-icon icon="solar:star-shine-bold" className="text-purple-500 text-2xl"></iconify-icon>
        </div>

        <Hero />
        <LogoStrip />
        
        <section className="py-24 px-page-margin max-w-[1200px] mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2">
              <h2 className="text-[#0a2540] text-3xl md:text-4xl font-medium tracking-tight mb-6">
                A complete payments platform, engineered for growth.
              </h2>
              <p className="text-lg text-[#424770] leading-relaxed mb-6">
                Whether you're looking to bill customers on a recurring basis, set up a marketplace, or simply accept payments, do it all with a fully integrated, global platform that can support online and in-person payments.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <div 
                className="bg-white rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-gray-100 p-6 flex flex-col gap-4 cursor-pointer transition-all duration-500 hover:border-indigo-200"
                onMouseEnter={(e) => e.currentTarget.classList.add('bg-indigo-50/30')}
                onMouseLeave={(e) => e.currentTarget.classList.remove('bg-indigo-50/30')}
              >
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="font-medium text-[#0a2540]">Payment balance</span>
                  <span className="text-xl font-mono text-green-600 animate-pulse">$142,394.20</span>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 w-[70%] transition-all duration-1000"></div>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-pink-500 w-[45%] transition-all duration-1000"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BentoGrid />
        <GlobalCommerceSection />
        <DarkMetricsSection />
        <CaseStudies />
      </main>

      <Footer />
    </div>
  );
}

export default App;