import React, { useEffect, useRef } from 'react';
import UnicornScene from "unicornstudio-react";

const useAOS = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const SpotlightCard = ({ children, className, delay }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`spotlight-card group relative flex flex-col p-10 rounded-[32px] border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-500 ${className || ''}`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" 
        style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)'}}
      />
      <div 
        className="pointer-events-none absolute inset-0 rounded-[32px] border border-brand-sky/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-50" 
        style={{
          maskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)',
          WebkitMaskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)'
        }}
      />
      {children}
    </div>
  );
};

function App() {
  useAOS();

  return (
    <>
      <div className="aura-background-component top-0 w-full h-screen -z-10 fixed" data-alpha-mask="80" style={{ maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)' }}>
        <div className="aura-background-component top-0 w-full -z-10 absolute h-full">
          <UnicornScene projectId="FixNvEwvWwbu3QX9qC3F" sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js" className="absolute w-full h-full left-0 top-0 -z-10" />
        </div>
      </div>

      <div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>
      
      <nav className="fixed -translate-x-1/2 flex shadow-black/50 transition-all duration-300 hover:border-white/20 hover:shadow-brand-sky/5 bg-gradient-to-br from-white/10 to-white/0 w-full lg:w-fit max-w-[90vw] z-50 rounded-full ring-white/10 ring-1 pt-1.5 pr-1.5 pb-1.5 pl-4 top-6 left-1/2 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-xl items-center justify-between">
        <div className="flex gap-2.5 items-center mr-8">
          <div className="relative flex items-center justify-center">
             <iconify-icon icon="solar:layers-minimalistic-bold-duotone" width="24" height="24" style={{ color: '#38bdf8' }}></iconify-icon>
          </div>
          <span className="font-sans font-medium text-base tracking-tight text-white">Aura</span>
        </div>

        <div className="hidden md:flex items-center gap-6 mr-8">
          <a href="#" className="text-xs font-medium text-white/50 hover:text-white transition-colors">Philosophy</a>
          <a href="#" className="text-xs font-medium text-white/50 hover:text-white transition-colors">Ecosystem</a>
          <a href="#" className="text-xs font-medium text-white/50 hover:text-white transition-colors">Rates</a>
        </div>

        <button className="flex gap-2 hover:bg-brand-sky transition-colors group text-xs font-semibold text-black bg-white rounded-full pt-2 pr-4 pb-2 pl-4 items-center flex-none">
          Start Engine
          <iconify-icon icon="solar:arrow-right-bold-duotone" className="group-hover:translate-x-0.5 transition-transform" width="16" height="16"></iconify-icon>
        </button>
      </nav>

      <main className="container lg:px-12 lg:pt-0 min-h-[1100px] flex flex-col lg:flex-row z-10 mr-auto ml-auto pt-0 pr-6 pl-6 relative items-center">
        <div className="lg:w-1/2 flex flex-col lg:py-0 lg:mt-0 w-full mt-16 pt-12 pb-20 justify-center">
          <h4 className="text-xs font-mono tracking-[0.2em] text-white/40 uppercase mb-8 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-sky opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-sky"></span>
            </span>
            System Operational
          </h4>

          <h1 className="lg:text-7xl leading-[1.1] text-brand-sky text-glow text-5xl italic tracking-tight font-serif mb-6">
            Architect your wealth <br />
            <span className="text-white opacity-90">with absolute precision.</span>
          </h1>

          <p className="font-sans text-xl lg:text-2xl font-light text-white/70 leading-relaxed tracking-tight max-w-xl mb-12">
            Advanced financial protocols merged with intuitive design. We provide the infrastructure to accelerate your economic legacy.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <button className="shiny-cta focus:outline-none">
              <span>Initialize Protocol</span>
            </button>

            <button className="hover:bg-white/10 hover:text-white transition-all flex text-sm font-medium text-slate-300 bg-white/5 rounded-full pt-3 pr-6 pb-3 pl-6 gap-2 items-center group" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)', position: 'relative', '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))', '--border-radius-before': '9999px' }}>
              <span className="text-sm font-medium tracking-tight">View Ecosystem</span>
              <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"></iconify-icon>
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 lg:h-[800px] flex w-full h-[500px] relative perspective-1000 items-center justify-center">
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" viewBox="0 0 600 600">
            <defs>
              <radialGradient id="center-glow">
                <stop offset="0%" stopColor="rgba(56, 189, 248, 0.4)" />
                <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
              </radialGradient>
            </defs>
            <g>
              <path d="M -50 150 C 100 150, 100 300, 300 300" fill="none" stroke="white" strokeWidth="1" className="opacity-[0.08]" />
              <path d="M -50 150 C 100 150, 100 300, 300 300" fill="none" stroke="#38BDF8" strokeWidth="1.5" className="beam-line animate-beam opacity-60" />
            </g>
            <g>
              <path d="M -50 450 C 100 450, 100 300, 300 300" fill="none" stroke="white" strokeWidth="1" className="opacity-[0.08]" />
              <path d="M -50 450 C 100 450, 100 300, 300 300" fill="none" stroke="#38BDF8" strokeWidth="1.5" className="beam-line animate-beam opacity-60" style={{ animationDelay: '-1s' }} />
            </g>
            <g>
              <path d="M 650 100 C 500 100, 500 300, 300 300" fill="none" stroke="white" strokeWidth="1" className="opacity-[0.08]" />
              <path d="M 650 100 C 500 100, 500 300, 300 300" fill="none" stroke="#38BDF8" strokeWidth="1.5" className="beam-line animate-beam opacity-60" style={{ animationDelay: '-2s' }} />
            </g>
            <g>
              <path d="M 650 500 C 500 500, 500 300, 300 300" fill="none" stroke="white" strokeWidth="1" className="opacity-[0.08]" />
              <path d="M 650 500 C 500 500, 500 300, 300 300" fill="none" stroke="#38BDF8" strokeWidth="1.5" className="beam-line animate-beam opacity-60" style={{ animationDelay: '-1.5s' }} />
            </g>

            <g transform="translate(300, 300)">
              <circle r="120" fill="url(#center-glow)" className="animate-pulse" />
              <circle r="20" fill="none" stroke="#38BDF8" strokeWidth="1" opacity="0.5" className="animate-sonar" />
              <circle r="20" fill="none" stroke="#38BDF8" strokeWidth="1" opacity="0.5" className="animate-sonar delay-1000" />
              <circle r="20" fill="none" stroke="#38BDF8" strokeWidth="1" opacity="0.5" className="animate-sonar delay-2000" />

              <circle r="65" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="10 20" className="animate-spin-slow" />
              <circle r="45" fill="none" stroke="#38BDF8" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 6" className="animate-spin-slow-reverse" />

              <g className="animate-spin-slow" style={{ animationDuration: '20s' }}>
                <path d="M -80 0 L -70 0" stroke="white" strokeOpacity="0.2" />
                <path d="M 80 0 L 70 0" stroke="white" strokeOpacity="0.2" />
                <path d="M 0 -80 L 0 -70" stroke="white" strokeOpacity="0.2" />
                <path d="M 0 80 L 0 70" stroke="white" strokeOpacity="0.2" />
              </g>

              <circle r="8" fill="#0A0A0A" stroke="#38BDF8" strokeWidth="2" />
              <circle r="4" fill="#38BDF8" className="animate-pulse-fast" />
            </g>
          </svg>

          <div className="absolute top-[20%] lg:top-[25%] left-[10%] lg:left-[15%] flex flex-col items-end">
            <span className="text-xs font-mono text-brand-sky tracking-widest mb-1 opacity-80">ZERO LATENCY</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-brand-sky to-transparent"></div>
          </div>

          <div className="absolute bottom-[20%] lg:bottom-[25%] right-[10%] lg:right-[15%] flex flex-col items-start">
            <span className="text-xs font-mono text-brand-sky tracking-widest mb-1 opacity-80">DEFI NATIVE</span>
            <div className="h-[1px] w-12 bg-gradient-to-r from-brand-sky to-transparent"></div>
          </div>

          <div className="absolute top-[50%] right-[15%] hidden lg:flex flex-col gap-1">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-white/20"></div>
              <div className="w-1 h-1 bg-white/20"></div>
              <div className="w-1 h-1 bg-brand-sky animate-pulse"></div>
            </div>
          </div>
        </div>

        <section className="w-[95%] z-20 pb-8 absolute bottom-0">
          <div className="flex flex-col lg:flex-row overflow-hidden opacity-50 w-full pt-6 gap-x-6 gap-y-6 items-center justify-between">
            <div className="flex-1 overflow-hidden mask-gradient-fade w-full relative">
              <div className="flex animate-marquee hover:[animation-play-state:paused] w-max gap-x-32 gap-y-16 items-center">
                <iconify-icon icon="simple-icons:vercel" width="124" height="28" style={{ color: 'white' }}></iconify-icon>
                <iconify-icon icon="simple-icons:amplitude" width="124" height="28" style={{ color: 'white' }}></iconify-icon>
                <iconify-icon icon="simple-icons:anthropic" width="96" height="30" style={{ color: 'white' }}></iconify-icon>
                
                <iconify-icon icon="simple-icons:vercel" width="124" height="28" style={{ color: 'white' }}></iconify-icon>
                <iconify-icon icon="simple-icons:amplitude" width="124" height="28" style={{ color: 'white' }}></iconify-icon>
                <iconify-icon icon="simple-icons:anthropic" width="96" height="30" style={{ color: 'white' }}></iconify-icon>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/30 text-xs font-mono shrink-0 relative z-10 bg-[#030303] pl-4 lg:bg-transparent lg:pl-0">
              <span className="text-white tracking-wide">[ <span className="text-brand-sky">✓</span> ] TRUSTED BY INDUSTRY LEADERS</span>
            </div>
          </div>
        </section>
      </main>

      <section className="flex flex-col overflow-hidden lg:px-12 z-10 bg-black/50 w-full border-white/5 border-t pt-32 pr-6 pb-32 pl-6 relative backdrop-blur-3xl items-center">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="flex flex-col items-center text-center max-w-3xl mb-24 relative z-10" data-aos="fade-up">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-48 w-6 overflow-hidden flex justify-center">
            <svg className="h-full w-full" viewBox="0 0 6 192" fill="none">
              <defs>
                <linearGradient id="header-beam" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0"/>
                  <stop offset="50%" stopColor="#38BDF8" stopOpacity="1"/>
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M3 0V192" stroke="url(#header-beam)" strokeWidth="1.5" strokeLinecap="round" className="beam-line animate-beam opacity-70"></path>
            </svg>
          </div>

          <div className="flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-sky opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-sky"></span>
            </span>
            <span className="text-xs font-mono text-brand-sky uppercase tracking-[0.2em] font-medium">System Capabilities</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-white mb-8">
            Banking intelligence <span className="text-white/60">made effortless.</span>
          </h2>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl font-light tracking-tight">
            Streamline your capital deployment with AI-driven protocols designed to simplify, automate, and enhance your wealth architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 z-10 w-full max-w-7xl relative gap-x-6 gap-y-6">
          <SpotlightCard delay="100" className="!p-10">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-2xl font-semibold tracking-tight text-white mb-4 relative z-10">Automated Execution</h3>
            <p className="text-base text-white/50 leading-relaxed mb-12 relative z-10 font-light">Generate high-yield strategies and execute trades in milliseconds with our custodial AI algorithms.</p>
            <div className="relative z-10 mt-auto w-full h-72 rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden flex flex-col shadow-2xl">
              <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-2 opacity-50">
                  <div className="w-2 h-2 rounded-full bg-white/40"></div>
                  <div className="w-2 h-2 rounded-full bg-white/40"></div>
                </div>
                <span className="text-xs text-white/30 font-mono">AURA_OS v2.1</span>
              </div>
              <div className="p-6 flex flex-col gap-5 relative h-full">
                <div className="self-end max-w-[90%] bg-white/10 backdrop-blur-sm rounded-2xl rounded-tr-sm p-4 border border-white/5 animate-[fadeIn_1s_ease-out]">
                  <p className="text-xs text-white/90 font-light leading-relaxed">
                    Initialize rebalancing for <span className="text-white font-medium">Portfolio Alpha</span>. Target <span className="text-brand-sky">12.5% APY</span>.
                  </p>
                </div>
                <div className="self-start max-w-[90%] bg-white/[0.03] backdrop-blur-md rounded-2xl rounded-tl-sm p-5 border border-white/10 relative overflow-hidden group-hover:border-brand-sky/20 transition-colors duration-500">
                  <div className="flex items-center gap-2 mb-3 text-brand-sky font-mono text-[10px] uppercase tracking-wider">
                    <iconify-icon icon="solar:stars-linear" width="14" height="14"></iconify-icon> Aura Protocol
                  </div>
                  <p className="mb-4 text-xs text-white/80 font-light">Analyzing liquidity depth across 4 exchanges. Optimal route secured.</p>
                  <div className="w-full bg-black/40 rounded-full h-1.5 mb-2 overflow-hidden">
                    <div className="bg-brand-sky h-full w-[85%] animate-[pulse_2s_infinite]"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-brand-sky/60 font-mono">
                    <span>EXECUTING</span>
                    <span>$52,400.00</span>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard delay="200" className="!p-[1px] lg:-mt-8 lg:mb-8 z-20">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent rounded-[32px]"></div>
            <div className="absolute inset-0 bg-[#050505] rounded-[31px] m-[1px] overflow-hidden" />
            
            <div className="relative z-10 flex flex-col h-full p-10 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-sky/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <iconify-icon icon="solar:bolt-linear" className="text-brand-sky relative z-10" width="24" height="24"></iconify-icon>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-white group-hover:text-white transition-colors">Smart Liquidity</h3>
              </div>
              <p className="text-base text-white/50 leading-relaxed mb-12 font-light group-hover:text-white/70 transition-colors">
                Connect to deep liquidity pools across chains to ensure zero-slippage execution on institutional orders.
              </p>

              <div className="mt-auto relative w-full h-80 flex items-center justify-center perspective-1000">
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0" viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="smart-beam-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(56, 189, 248, 0)" />
                      <stop offset="50%" stopColor="rgba(56, 189, 248, 1)" />
                      <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
                    </linearGradient>
                  </defs>
                  <path d="M420,40 C320,40 280,160 200,160" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <path d="M420,40 C320,40 280,160 200,160" fill="none" stroke="url(#smart-beam-grad)" strokeWidth="1.5" strokeDasharray="100 1000" strokeLinecap="round" className="animate-[beam_3s_linear_infinite]" />
                  <path d="M-20,280 C80,280 120,160 200,160" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <path d="M-20,280 C80,280 120,160 200,160" fill="none" stroke="url(#smart-beam-grad)" strokeWidth="1.5" strokeDasharray="80 1000" strokeLinecap="round" className="animate-[beam_4s_linear_infinite]" />
                  <path d="M200,0 L200,160" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="2 4" />
                </svg>

                <div className="absolute w-96 h-96 border border-brand-sky/5 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] opacity-10"></div>
                <div className="absolute w-80 h-80 border border-white/5 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20 delay-700"></div>
                <div className="absolute w-64 h-64 border border-white/5 rounded-full animate-[spin_40s_linear_infinite]">
                  <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white/10 rounded-full"></div>
                  <div className="absolute top-1/2 -left-1 w-2 h-2 bg-white/10 rounded-full"></div>
                </div>
                <div className="absolute w-60 h-60 border border-white/10 rounded-full animate-[spin_30s_linear_infinite]"></div>
                <div className="absolute w-44 h-44 border border-white/5 rounded-full animate-[spin_20s_linear_infinite_reverse] border-dashed"></div>
                
                <div className="absolute w-36 h-36 border border-brand-sky/20 rounded-full animate-[spin_15s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-sky mt-[-3px] rounded-full shadow-[0_0_10px_rgba(56,189,248,1)]"></div>
                </div>

                <div className="absolute w-60 h-60 animate-[spin_30s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] p-2.5 rounded-full border border-white/10 group-hover:border-brand-sky/30 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.1)] transition-all duration-500">
                    <iconify-icon icon="solar:diamond-linear" width="16" height="16" className="text-white/40 group-hover:text-brand-sky transition-colors"></iconify-icon>
                  </div>
                  <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 bg-[#050505] p-2.5 rounded-full border border-white/10 group-hover:border-brand-sky/30 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.1)] transition-all duration-500">
                     <iconify-icon icon="solar:card-linear" width="16" height="16" className="text-white/40 group-hover:text-brand-sky transition-colors"></iconify-icon>
                  </div>
                </div>

                <div className="z-10 flex group-hover:border-brand-sky/40 transition-colors duration-500 bg-[#0F110E] w-24 h-24 border-white/10 border rounded-3xl relative items-center justify-center overflow-hidden shadow-2xl">
                  <iconify-icon icon="solar:layers-minimalistic-linear" width="32" height="32" className="text-white relative z-20 group-hover:text-brand-sky transition-colors duration-500"></iconify-icon>
                  <div className="animate-[pulse_2s_infinite] bg-gradient-to-tr from-transparent via-brand-sky/10 to-transparent absolute top-0 right-0 bottom-0 left-0 z-10"></div>
                  <div className="absolute inset-0 opacity-20 z-0" style={{backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '18px 18px'}}></div>
                </div>

                <div className="absolute bottom-4 flex flex-col items-center">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 group-hover:border-brand-sky/20 transition-colors">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-sky opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-sky"></span>
                    </span>
                    <div className="text-[10px] text-white/40 font-mono tracking-widest uppercase group-hover:text-white/70 transition-colors">Network Active</div>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard delay="300" className="!p-10">
            <h3 className="text-2xl font-semibold tracking-tight text-white mb-4 relative z-10">Multi-Sig Governance</h3>
            <p className="text-base text-white/50 leading-relaxed mb-12 relative z-10 font-light">Manage treasury operations with institutional-grade security. Set permissions, approve transactions, and audit logs.</p>
            
            <div className="relative mt-auto w-full h-72 rounded-2xl border border-white/10 bg-[#0A0A0A] p-7 flex flex-col justify-center gap-6 shadow-2xl z-10">
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-none"></span>
                  <span className="text-xs text-white/50 font-mono uppercase tracking-wider">Treasury_V4</span>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full border border-[#0A0A0A] bg-white/10 flex items-center justify-center text-white/80 text-[10px] font-medium">JD</div>
                  <div className="w-7 h-7 rounded-full border border-[#0A0A0A] bg-brand-sky/20 flex items-center justify-center text-brand-sky text-[10px] font-medium">AS</div>
                  <div className="w-7 h-7 rounded-full border border-[#0A0A0A] bg-white/5 flex items-center justify-center text-[9px] text-white/40">+3</div>
                </div>
              </div>

              <div className="relative py-1">
                <div className="flex justify-between text-[10px] text-white/40 mb-2 font-mono uppercase">
                  <span>Allocation Limit</span>
                  <span className="text-brand-sky">75% Approved</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full relative flex items-center">
                  <div className="absolute left-0 h-full w-[75%] bg-white/80 rounded-full"></div>
                  <div className="absolute left-[75%] w-4 h-4 bg-white rounded-full z-10 transform -translate-x-1/2 border-2 border-[#0A0A0A] cursor-grab"></div>
                  <div className="absolute left-[75%] -top-9 -translate-x-1/2 bg-[#151515] border border-white/10 text-white text-[10px] px-2.5 py-1.5 rounded shadow-lg whitespace-nowrap animate-bounce">
                    Signed by Alex
                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#151515] border-r border-b border-white/10 transform rotate-45"></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                  <iconify-icon icon="solar:history-linear" width="14" height="14" className="text-white/40"></iconify-icon>
                  <span className="text-xs text-white/60 font-medium">Audit Log</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-brand-sky/10 border border-brand-sky/20 cursor-pointer hover:bg-brand-sky/20 transition-colors">
                  <iconify-icon icon="solar:check-circle-linear" width="14" height="14" className="text-brand-sky"></iconify-icon>
                  <span className="text-xs text-brand-sky font-medium">Approve Tx</span>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>

        <div className="mt-24 relative z-10" data-aos="fade-up" data-aos-delay="400">
          <button className="group relative px-9 py-4 rounded-full bg-white text-black font-semibold text-sm transition-all duration-300 hover:bg-[#e5e5e5] flex items-center gap-3 overflow-hidden tracking-tight">
            <span className="relative z-10">Explore Capabilities</span>
            <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"></iconify-icon>
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0"></div>
          </button>
        </div>
      </section>

      <section className="overflow-hidden flex flex-col px-6 md:px-8 lg:px-12 z-10 bg-[#030303]/80 w-full border-white/5 border-t pt-32 pb-32 relative backdrop-blur-xl items-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_200px] [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_100%)] pointer-events-none"></div>

        <div className="max-w-7xl w-full relative z-10">
          <div className="flex flex-col gap-8 mb-24 max-w-5xl" data-aos="fade-up">
            <span className="text-xs font-mono text-white/40 uppercase tracking-[0.2em] font-medium pl-1 flex items-center gap-3">
              <span className="w-1 h-1 bg-brand-sky rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]"></span>
              Built for the Hybrid Economy
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium tracking-tight text-white leading-[1.1]">
              The modern investor doesn't fit in a single market — <span className="text-white/50">they stake, they hedge, they compound smart.</span> This protocol was made for them.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
            <div className="lg:col-span-4 relative group" data-aos="fade-up" data-aos-delay="100">
              <div className="relative w-full aspect-[3.5/4] rounded-[24px] overflow-hidden border border-white/10 bg-white/[0.02]">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/346c8983-c047-4169-902a-df1305819be6_800w.jpg" alt="Trader Profile" className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-80"></div>
                <div className="absolute top-5 left-5 right-5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex gap-1.5">
                    <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                    <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                  </div>
                  <div className="px-2 py-0.5 rounded border border-white/10 bg-black/20 backdrop-blur-md">
                    <span className="text-[9px] font-mono text-brand-sky tracking-wider">LIVE</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col justify-end h-full relative" data-aos="fade-up" data-aos-delay="200">
              <blockquote className="mb-12 relative">
                <iconify-icon icon="solar:quote-left-linear" width="24" height="24" className="absolute -top-6 -left-8 text-white/10"></iconify-icon>
                <p className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light leading-relaxed tracking-tight">
                  "I used to track my positions in one terminal, my yield in another, and my risk nowhere. This protocol keeps it simple — I see the full liquidity picture without the cognitive load."
                </p>
              </blockquote>

              <div className="mb-12 flex items-center gap-4">
                <div className="h-px w-8 bg-brand-sky/30"></div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/5 pt-8">
                <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group cursor-default">
                  <span className="text-[10px] md:text-xs text-white/50 font-mono uppercase tracking-wide group-hover:text-white/70 transition-colors">
                    Portfolio Volume Up <span className="text-brand-sky">17%</span> since inception
                  </span>
                  <iconify-icon icon="solar:arrow-right-up-linear" width="12" height="12" className="text-brand-sky transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"></iconify-icon>
                </div>
                <button className="shiny-cta group !px-7 !py-3">
                  <span className="text-sm font-medium">Start Investing</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:px-12 flex flex-col overflow-hidden z-10 bg-[#030303]/50 w-full border-white/5 border-t px-6 py-32 relative backdrop-blur-xl items-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_200px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-70 pointer-events-none"></div>

        <div className="max-w-7xl w-full relative z-10">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-12 mb-20">
            <div className="flex flex-col gap-6 max-w-3xl">
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-white/50">03</span>
                <span className="text-xs font-mono text-brand-sky/90 uppercase tracking-[0.2em]">Exchange Infrastructure</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white leading-[1.1]">
                Liquidate & Exchange <span className="text-white/40 italic">Global Assets Instantly.</span>
              </h2>
            </div>
            <div className="max-w-sm pb-2">
              <p className="text-white/50 text-sm leading-relaxed font-light">
                Direct market access with deep institutional liquidity. Convert fiat to digital assets with zero slippage and T+0 settlement.
              </p>
            </div>
          </div>

          <div className="w-full rounded-[24px] border border-white/10 bg-[#080808] overflow-hidden flex flex-col lg:flex-row relative group">
            <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center items-start z-10 relative bg-[#080808]">
              <h3 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6 tracking-tight">Buy, Sell & Yield Digital Currency.</h3>
              <p className="text-white/60 mb-10 leading-relaxed font-light max-w-md text-base">
                Initialize your portfolio and execute trades across 40+ exchanges. One interface for spot, margin, and perpetuals.
              </p>
              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <button className="px-8 py-3.5 bg-brand-sky text-[#030303] font-semibold text-sm rounded-full hover:bg-[#38BDF8]/90 transition-colors flex items-center justify-center gap-2 min-w-[140px]">
                  Get Started
                </button>
                <button className="px-8 py-3.5 border border-white/10 text-white font-medium text-sm rounded-full hover:bg-white/5 transition-colors flex items-center justify-center gap-2 min-w-[140px]">
                  View Markets
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 bg-[#050505] relative min-h-[400px] border-t lg:border-t-0 lg:border-l border-white/5 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 96px' }}></div>
              <div className="relative w-full h-full flex items-center justify-center p-12 perspective-1000">
                <div className="relative w-72 h-56 transform [transform:rotateX(6deg)_rotateY(-6deg)] hover:[transform:rotateX(0deg)_rotateY(0deg)] transition-transform duration-700 ease-out">
                  
                  <div className="absolute top-0 right-0 w-56 h-36 bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl z-0 overflow-hidden">
                    <div className="h-8 border-b border-white/5 flex items-center px-3 gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                    </div>
                    <div className="p-4 grid grid-cols-2 gap-3">
                      <div className="h-12 bg-white/5 rounded border border-white/5"></div>
                      <div className="h-12 bg-white/5 rounded border border-white/5"></div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 w-44 h-32 bg-[#0F0F0F] border border-white/10 rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,1)] z-10 flex flex-col overflow-hidden">
                    <div className="flex justify-between items-center p-4 border-b border-white/5 bg-white/[0.01]">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-brand-sky flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-[10px] font-mono text-white/60">BTC/USD</span>
                      </div>
                      <span className="text-[10px] font-mono text-brand-sky">+2.4%</span>
                    </div>
                    <div className="p-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-white/40">Amount</span>
                        <span className="text-xs text-white font-mono">0.4522</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="w-2/3 h-full bg-brand-sky"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#050505] border border-white/10 rounded-full flex items-center justify-center z-20 shadow-xl animate-[bounce_4s_infinite]">
                    <svg className="w-5 h-5 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2v20M2 12h20"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex lg:px-12 bg-[#030303]/80 w-full z-10 border-white/5 border-t px-6 py-32 relative backdrop-blur-xl justify-center">
        <div className="w-full max-w-7xl bg-brand-sky rounded-[32px] relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-end justify-between p-10 lg:p-24 group">
          <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-cover bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c55b9091-b0ca-4842-92d7-7be239f76440_1600w.webp)]"></div>
          <div className="absolute -right-40 -top-40 w-[600px] h-[600px] bg-white/20 blur-[120px] rounded-full pointer-events-none opacity-60 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col max-w-2xl mb-12 lg:mb-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-[#030303] mb-8 leading-[1.05]">
              Uncertain about your <span className="opacity-60 italic">allocation strategy?</span>
            </h2>

            <a href="#" className="group/card relative mt-4 w-full sm:w-80 h-36 bg-[#030303]/5 border border-[#030303]/10 rounded-2xl p-6 flex flex-col justify-between hover:bg-[#030303]/10 hover:border-[#030303]/20 hover:scale-[1.02] transition-all duration-300">
              <div className="flex justify-between items-start">
                <iconify-icon icon="solar:chat-round-line-bold-duotone" width="32" height="32" className="text-[#030303] opacity-80"></iconify-icon>
                <iconify-icon icon="solar:arrow-right-up-bold-duotone" width="24" height="24" className="text-[#030303] opacity-40 group-hover/card:opacity-100 group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-all"></iconify-icon>
              </div>
              <div>
                <span className="block text-[#030303] font-semibold text-lg tracking-tight">Consult Architect</span>
                <span className="text-[#030303]/60 text-xs font-medium uppercase tracking-wider">Priority Access</span>
              </div>
            </a>
          </div>

          <div className="relative z-10 max-w-md pb-2 lg:text-right flex flex-col items-start lg:items-end gap-6">
            <p className="text-[#030303]/70 text-lg lg:text-xl font-medium leading-relaxed">
              Our liquidity specialists are standing by to model your risk profile and architect a custom yield solution.
            </p>
            <div className="hidden lg:flex gap-1.5 opacity-30">
              <div className="w-1.5 h-1.5 rounded-full bg-[#030303]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#030303]"></div>
              <div className="w-12 h-1.5 rounded-full bg-[#030303]"></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="lg:px-12 flex flex-col z-10 overflow-hidden bg-[#030303] w-full border-white/5 border-t pt-12 pr-6 pb-12 pl-6 relative items-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_200px] [mask-image:linear-gradient(to_bottom,transparent,black_20%)] pointer-events-none"></div>

        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10">
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 bg-white/5 rounded-xl border border-white/10 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                 <iconify-icon icon="solar:layers-minimalistic-bold-duotone" width="24" height="24" style={{ color: '#38bdf8' }}></iconify-icon>
              </div>
              <span className="font-serif font-medium text-2xl tracking-tight text-white">Aura</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-[280px] font-light">
              Engineering the bedrock of the programmable economy. Secure, scalable, and instant.
            </p>
            <div className="flex gap-5 mt-4">
              <a href="#" className="text-white/30 hover:text-white transition-colors"><iconify-icon icon="simple-icons:x" width="16" height="16"></iconify-icon></a>
              <a href="#" className="text-white/30 hover:text-white transition-colors"><iconify-icon icon="simple-icons:github" width="16" height="16"></iconify-icon></a>
              <a href="#" className="text-white/30 hover:text-white transition-colors"><iconify-icon icon="simple-icons:linkedin" width="16" height="16"></iconify-icon></a>
              <a href="#" className="text-white/30 hover:text-white transition-colors"><iconify-icon icon="simple-icons:discord" width="16" height="16"></iconify-icon></a>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6 pt-2">
            <h4 className="text-white font-medium text-sm tracking-wide">Protocol</h4>
            <ul className="flex flex-col gap-3.5">
              <li><a href="#" className="text-white/40 hover:text-brand-sky text-sm transition-colors font-light">Documentation</a></li>
              <li><a href="#" className="text-white/40 hover:text-brand-sky text-sm transition-colors font-light">API Reference</a></li>
              <li><a href="#" className="text-white/40 hover:text-brand-sky text-sm transition-colors font-light">Governance</a></li>
              <li><a href="#" className="flex items-center gap-2 text-white/40 hover:text-brand-sky text-sm transition-colors font-light">
                  System Status
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                </a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6 pt-2">
            <h4 className="text-white font-medium text-sm tracking-wide">Company</h4>
            <ul className="flex flex-col gap-3.5">
              <li><a href="#" className="text-white/40 hover:text-brand-sky text-sm transition-colors font-light">Philosophy</a></li>
              <li><a href="#" className="text-white/40 hover:text-brand-sky text-sm transition-colors font-light">Careers</a></li>
              <li><a href="#" className="text-white/40 hover:text-brand-sky text-sm transition-colors font-light">Press Kit</a></li>
              <li><a href="#" className="text-white/40 hover:text-brand-sky text-sm transition-colors font-light">Legal</a></li>
            </ul>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-row gap-4 lg:gap-4 mt-8 lg:mt-0">
            <a href="#" className="flex-1 group relative p-7 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 flex flex-col justify-between h-36 lg:h-40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex justify-between items-start relative z-10">
                <span className="text-white font-medium text-sm tracking-wide">Contact Sales</span>
                <iconify-icon icon="solar:arrow-right-up-bold-duotone" className="text-white/20 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" width="16" height="16"></iconify-icon>
              </div>
              <div className="relative z-10 flex items-end justify-between">
                <iconify-icon icon="solar:wallet-money-bold-duotone" className="text-brand-sky/60 group-hover:scale-110 transition-transform duration-300" width="32" height="32"></iconify-icon>
              </div>
            </a>

            <a href="#" className="flex-1 group relative p-7 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 flex flex-col justify-between h-36 lg:h-40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex justify-between items-start relative z-10">
                <span className="text-white font-medium text-sm tracking-wide">Help Center</span>
                <iconify-icon icon="solar:arrow-right-up-bold-duotone" className="text-white/20 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" width="16" height="16"></iconify-icon>
              </div>
              <div className="relative z-10 flex items-end justify-between">
                <iconify-icon icon="solar:headphones-round-sound-bold-duotone" className="text-brand-sky/60 group-hover:scale-110 transition-transform duration-300" width="32" height="32"></iconify-icon>
              </div>
            </a>
          </div>
        </div>

        <div className="w-full max-w-7xl mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <span className="text-white/20 text-xs font-mono tracking-wide">© 2024 Aura Financial Technologies. All rights reserved.</span>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 grayscale opacity-30 hover:opacity-100 transition-opacity duration-300">
              <iconify-icon icon="logos:stripe" height="20"></iconify-icon>
            </div>
            <div className="flex items-center gap-2 grayscale opacity-30 hover:opacity-100 transition-opacity duration-300">
              <iconify-icon icon="logos:visaelectron" height="20"></iconify-icon>
            </div>
            <span className="text-white/20 text-xs font-mono border-l border-white/10 pl-8">SOC2 Type II Compliant</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;