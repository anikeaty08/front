import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4', // Background
200: '#e7e5e4', // Border
300: '#d6d3d1',
800: '#292524',
900: '#1c1917', // Primary Black
950: '#0c0a09',
}
},
fontFamily: {
heading: ['"IBM Plex Sans Condensed"', 'sans-serif'],
body: ['"Manrope"', 'sans-serif'],
},
letterSpacing: {
'ultra-wide': '0.2em',
'tighter': '-0.05em',
},
boxShadow: {
'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
}
}
}
}



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


      // Initialize Icons
      lucide.createIcons();

      // Register ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      // Hero Animations
      gsap.from(".reveal-heading", {
          duration: 1.2,
          y: 100,
          opacity: 0,
          ease: "power3.out",
          delay: 0.2
      });

      gsap.from(".reveal-sub", {
          duration: 1.2,
          y: 50,
          opacity: 0,
          ease: "power3.out",
          delay: 0.4
      });

      gsap.to(".reveal-cta", {
          duration: 1.2,
          opacity: 1,
          ease: "power3.out",
          delay: 0.8
      });

      // Scroll Reveal for Sections
      const sections = document.querySelectorAll("section");
      sections.forEach(section => {
          gsap.fromTo(section.children,
              { y: 50, opacity: 0, filter: "blur(10px)" },
              {
                  y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  duration: 1,
                  stagger: 0.1,
                  scrollTrigger: {
                      trigger: section,
                      start: "top 80%",
                      end: "top 20%",
                      toggleActions: "play none none reverse"
                  }
              }
          );
      });

      // Magnetic Hover Effect for Sidebar
      const navItems = document.querySelectorAll('aside nav a');
      navItems.forEach(item => {
          item.addEventListener('mousemove', (e) => {
              const rect = item.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              gsap.to(item, { x: x * 0.2, y: y * 0.2, duration: 0.3 });
          });
          item.addEventListener('mouseleave', () => {
              gsap.to(item, { x: 0, y: 0, duration: 0.3 });
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="fixed z-50 flex flex-col bg-stone-100/80 w-[70px] h-screen border-stone-200 border-r pt-8 pb-8 top-0 left-0 backdrop-blur-md items-center justify-between">

<div className="flex flex-col items-center gap-1 cursor-pointer group">
<div className="w-8 h-8 bg-stone-900 rounded-full flex items-center justify-center text-white font-heading font-bold text-xs tracking-tighter">
          PB
        </div>
<span className="text-[10px] tracking-widest font-heading font-light opacity-0 group-hover:opacity-100 transition-opacity absolute top-16">
          PBLK
        </span>
</div>

<nav className="flex flex-col gap-8 w-full items-center">

<a className="group relative p-3 rounded-xl hover:bg-stone-200 transition-colors" href="#application" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>
<svg className="lucide lucide-app-window w-5 h-5 text-stone-600 group-hover:text-black stroke-[1.5]" data-lucide="app-window" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="M10 4v4"></path><path d="M2 8h20"></path><path d="M6 4v4"></path></svg>
<span className="tooltip absolute left-14 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap z-50">
            Application
          </span>
</a>

<a className="group relative p-3 rounded-xl hover:bg-stone-200 transition-colors" href="#how-it-works">
<svg className="lucide lucide-cpu w-5 h-5 text-stone-600 group-hover:text-black stroke-[1.5]" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="tooltip absolute left-14 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap z-50">
            How it works
          </span>
</a>

<a className="group relative p-3 rounded-xl hover:bg-stone-200 transition-colors" href="#apply">
<svg className="lucide lucide-rocket w-5 h-5 text-stone-600 group-hover:text-black stroke-[1.5]" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<span className="tooltip absolute left-14 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap z-50">
            Apply to Launch
          </span>
</a>

<a className="group hover:bg-stone-200 transition-colors rounded-xl pt-3 pr-3 pb-3 pl-3 relative" href="#documentation">
<svg className="lucide lucide-book group-hover:text-black stroke-[1.5] w-[20px] h-[20px]" data-lucide="book" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg>
<span className="tooltip absolute left-14 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap z-50">
            Documentation
          </span>
</a>

<a className="group hover:bg-stone-200 transition-colors rounded-xl pt-3 pr-3 pb-3 pl-3 relative" href="#team">
<svg className="lucide lucide-users group-hover:text-black stroke-[1.5] w-[20px] h-[20px]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="tooltip absolute left-14 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap z-50">
            Team
          </span>
</a>
</nav>

<div className="flex flex-col items-center gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="vertical-text text-[10px] font-mono text-stone-400 uppercase tracking-widest rotate-180" style={{writingMode: 'vertical-rl'}}>
          System Operational
        </span>
</div>
</aside>

<main className="ml-[70px] w-[calc(100%-70px)] relative">

<div className="aura-background-component top-0 w-full -z-10 fixed h-full aura-grayscale">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div>

<section className="relative flex flex-col min-h-screen w-full border-b border-stone-200 bg-stone-100/30 overflow-hidden">

<div className="absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none mix-blend-multiply" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(0px)', opacity: '1', transform: 'translate(0px, 0px)'}}>
<img alt="Moonlit dunes" className="h-full w-full object-cover filter grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6db8c45a-2b6b-4fed-9347-da402489f38f_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-l from-transparent via-stone-100/50 to-stone-100"></div>
</div>

<div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 flex flex-col justify-center flex-grow" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(0px)', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="mb-8 flex items-center gap-3 animate-fade-in opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
<span className="text-[10px] uppercase text-stone-500 tracking-widest font-mono border border-stone-300 rounded px-2 py-1">
              PBLK Protocol v1
            </span>
<span className="h-[1px] w-12 bg-stone-300"></span>
<span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              Solana Network
            </span>
</div>
<h1 className="text-[clamp(3rem,6vw,6.5rem)] leading-[0.9] text-stone-900 tracking-tighter mb-8 font-heading font-light">
<style>
              @keyframes auraSlideDownFade {
                  from { opacity: 0; transform: translateY(-20px); }
                  to { opacity: 1; transform: translateY(0); }
              }
            </style>
<span className="block" style={{opacity: '0', animation: 'auraSlideDownFade 0.5s ease-out forwards'}}>
              EQUITY.
            </span>
<span className="block" style={{opacity: '0', animation: 'auraSlideDownFade 0.5s ease-out forwards 0.2s'}}>
<span className="text-stone-400">TOKENIZED.</span>
</span>
<span className="block" style={{opacity: '0', animation: 'auraSlideDownFade 0.5s ease-out forwards 0.4s'}}>
              STRUCTURED.
            </span>
</h1>
<p className="text-lg md:text-xl text-stone-600 font-light max-w-xl mb-12 leading-relaxed tracking-tight reveal-sub" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
            The institutional bridge between private equity and on-chain
            liquidity. An SPV-based architecture for compliant, repeatable asset
            launches.
          </p>
<div className="flex flex-wrap gap-6 items-center reveal-cta opacity-0" style={{animation: '0.8s ease-out 0.6s 1 normal forwards running fadeUp', opacity: '1'}}>
<button className="hover:from-[#9945FF]/10 hover:via-[#9945FF]/20 hover:to-[#9945FF]/10 hover:scale-105 duration-500 ease-out transition-all flex group text-sm font-medium text-slate-600 bg-gradient-to-b from-black/10 via-black/20 to-black/10 rounded-full pt-3 pr-6 pb-3 pl-6 relative shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] gap-x-2 gap-y-2 items-center" style={{boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)', color: '#e5e7eb', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))', -BorderRadiusBefore: '9999px'}}>
<span className="text-sm font-medium text-black/60 tracking-tight group-hover:text-[#9945FF] transition-colors duration-500">
                Launch App
              </span>
</button>
<a className="group flex items-center gap-2 hover:text-stone-900 hover:border-stone-900 transition-all text-sm text-stone-500 font-mono border-transparent border-b pb-0.5" href="#structure">
              HOW IT WORKS
              <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="w-full flex flex-col" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(0px)', opacity: '1', transform: 'translate(0px, 0px)'}}>

<div className="w-full border-t border-stone-200 bg-white/40 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
<div className="flex gap-4 md:gap-8 text-[10px] font-mono uppercase text-stone-400 tracking-widest overflow-x-auto no-scrollbar">
<span className="whitespace-nowrap">Capital Formation</span>
<span className="hidden md:inline">•</span>
<span className="whitespace-nowrap">Programmable Equity</span>
<span className="hidden md:inline">•</span>
<span className="whitespace-nowrap">SEC Compliant</span>
</div>
<div className="flex items-center gap-2 pl-4">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest whitespace-nowrap">
                  Live Updates
                </span>
</div>
</div>
</div>

<div className="w-full bg-stone-950 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative overflow-hidden rounded-xl bg-stone-900/50 border border-white/10 p-8 md:p-10 backdrop-blur-md hover:bg-stone-900/80 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full gap-6">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10 text-white group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-building-2 w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 12h4"></path>
<path d="M10 8h4"></path>
<path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
<path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
<path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
</svg>
</div>
<div className="">
<h3 className="text-2xl text-white font-normal tracking-tight mb-3">
                      For Private Companies
                    </h3>
<p className="text-sm text-stone-300 font-light leading-relaxed">
                      Bypass the friction of traditional fundraising. PBLK
                      provides a compliant SPV structure to tokenize equity,
                      manage cap tables automatically, and access global
                      liquidity instantly.
                    </p>
</div>
<div className="mt-auto pt-4 border-t border-white/10 w-full">
<button className="group relative flex w-full items-center justify-center overflow-hidden rounded-full p-[1px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]">

<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

<span className="absolute inset-0 rounded-full bg-stone-800 transition-opacity duration-300 group-hover:opacity-0"></span>

<span className="relative flex h-full w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-stone-800 to-stone-950 px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-stone-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] transition-colors duration-300 group-hover:text-white">
<span className="relative z-10">Apply for Issuance</span>
<svg className="lucide lucide-arrow-right relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 p-8 md:p-10 backdrop-blur-md hover:bg-white/10 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full gap-6">
<div className="w-12 h-12 rounded-full bg-stone-100 text-stone-900 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-users w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
</div>
<div className="">
<h3 className="text-2xl text-white font-normal tracking-tight mb-3">
                      For Participants
                    </h3>
<p className="text-sm text-stone-300 font-light leading-relaxed">
                      Gain fractional exposure to pre-IPO assets. Trade
                      positions on secondary markets with T+0 settlement,
                      verifiable ownership, and automated dividend distribution.
                    </p>
</div>
<div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
<span className="text-[10px] uppercase group-hover:text-white transition-colors text-stone-400 tracking-widest font-mono">
                      View Opportunities
                    </span>
<svg className="lucide lucide-arrow-right w-4 h-4 text-stone-400 group-hover:text-white transition-colors group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:px-24 border-stone-200 border-b pt-32 pr-12 pb-32 pl-12" id="manifesto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: '0', transform: 'translate(0px, 50px)'}}>
<div className="md:col-span-4">
<h2 className="text-[32px] tracking-tight leading-tight text-stone-900 mb-6">
              Institutional Grade.
              <br/>
              Crypto Speed.
            </h2>
<p className="text-sm text-stone-500 leading-relaxed max-w-xs">
              PBLK removes the friction of traditional private placements while
              retaining the legal safeguards required by sophisticated capital.
            </p>
</div>
<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-8 border border-stone-200 bg-white hover:shadow-lg transition-shadow duration-500 group">
<svg className="lucide lucide-shield-check w-8 h-8 text-stone-300 group-hover:text-black mb-6 transition-colors" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="text-lg font-normal mb-3">SPV Architecture</h3>
<p className="text-xs text-stone-500 leading-relaxed">
                Each project is wrapped in a dedicated Special Purpose Vehicle.
                The token represents economic rights, legally tethered to the
                underlying equity.
              </p>
</div>

<div className="p-8 border border-stone-200 bg-white hover:shadow-lg transition-shadow duration-500 group">
<svg className="lucide lucide-repeat w-8 h-8 text-stone-300 group-hover:text-black mb-6 transition-colors" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
<h3 className="text-lg font-normal mb-3">Repeatable Pipeline</h3>
<p className="text-xs text-stone-500 leading-relaxed">
                Not a one-off experiment. A standardized factory for launching
                assets with consistent documentation and audit trails.
              </p>
</div>

<div className="p-8 border border-stone-200 bg-white hover:shadow-lg transition-shadow duration-500 group">
<svg className="lucide lucide-banknote w-8 h-8 text-stone-300 group-hover:text-black mb-6 transition-colors" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
<h3 className="text-lg font-normal mb-3">Flow-Through Value</h3>
<p className="text-xs text-stone-500 leading-relaxed">
                Dividends flow from Operating Company → SPV → Token Holders via
                smart contracts, subject to identity verification.
              </p>
</div>

<div className="p-8 border border-stone-200 bg-stone-900 text-white hover:shadow-lg transition-shadow duration-500 group relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8ffd6d5d-0003-4e89-95a9-651662896da6_1600w.jpg')] opacity-20 bg-cover bg-center mix-blend-screen"></div>
<svg className="lucide lucide-lock w-8 h-8 text-stone-500 group-hover:text-white mb-6 transition-colors relative z-10" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<h3 className="text-lg font-normal mb-3 relative z-10">
                Compliance Gating
              </h3>
<p className="text-xs text-stone-400 leading-relaxed relative z-10">
                Strict KYC/AML enforcement. Tokens are transfer-restricted to
                eligible wallets only.
              </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-12 lg:px-24 bg-white border-b border-stone-200" id="structure">
<div className="max-w-7xl mx-auto" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: '0', transform: 'translate(0px, 50px)'}}>
<div className="mb-20">
<span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-2">
              The Mechanism
            </span>
<h2 className="text-[40px] tracking-tight font-thin text-stone-900">
              From Equity to Token
            </h2>
</div>
<div className="relative">

<div className="absolute left-4 top-0 bottom-0 w-[1px] bg-stone-200 hidden md:block"></div>

<div className="relative pl-0 md:pl-16 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 group">
<div className="absolute left-[13px] top-12 w-2 h-2 rounded-full bg-stone-300 group-hover:bg-black transition-colors hidden md:block outline outline-4 outline-white"></div>
<div className="col-span-1">
<span className="text-xs font-mono text-stone-400 mb-2 block">
                  01 / Structure
                </span>
<h3 className="text-xl font-normal">SPV Formation</h3>
</div>
<div className="col-span-2 border-l border-stone-100 pl-6 md:pl-0 md:border-none">
<p className="text-sm text-stone-500 max-w-md">
                  An SPV is incorporated to hold the specific equity stake of
                  the target private company. Legal agreements finalize the
                  rights to dividends and exit proceeds.
                </p>
</div>
</div>

<div className="relative pl-0 md:pl-16 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 group">
<div className="absolute left-[13px] top-12 w-2 h-2 rounded-full bg-stone-300 group-hover:bg-black transition-colors hidden md:block outline outline-4 outline-white"></div>
<div className="col-span-1">
<span className="text-xs font-mono text-stone-400 mb-2 block">
                  02 / Digitization
                </span>
<h3 className="text-xl font-normal">Token Generation</h3>
</div>
<div className="col-span-2 border-l border-stone-100 pl-6 md:pl-0 md:border-none">
<p className="text-sm text-stone-500 max-w-md">
                  Membership interest in the SPV is represented by tokens minted
                  on Solana. Smart contracts define transfer rules and allowlist
                  logic.
                </p>
</div>
</div>

<div className="relative pl-0 md:pl-16 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 group">
<div className="absolute left-[13px] top-12 w-2 h-2 rounded-full bg-stone-300 group-hover:bg-black transition-colors hidden md:block outline outline-4 outline-white"></div>
<div className="col-span-1">
<span className="text-xs font-mono text-stone-400 mb-2 block">
                  03 / Launch
                </span>
<h3 className="text-xl font-normal">Initial Offering</h3>
</div>
<div className="col-span-2 border-l border-stone-100 pl-6 md:pl-0 md:border-none">
<p className="text-sm text-stone-500 max-w-md">
                  Qualified participants undergo KYC. Upon approval, capital is
                  contributed in stablecoins, and tokens are distributed to
                  non-custodial wallets.
                </p>
</div>
</div>

<div className="relative pl-0 md:pl-16 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 group">
<div className="absolute left-[13px] top-12 w-2 h-2 rounded-full bg-stone-300 group-hover:bg-black transition-colors hidden md:block outline outline-4 outline-white"></div>
<div className="col-span-1">
<span className="text-xs font-mono text-stone-400 mb-2 block">
                  04 / Lifecycle
                </span>
<h3 className="text-xl font-normal">Distributions</h3>
</div>
<div className="col-span-2 border-l border-stone-100 pl-6 md:pl-0 md:border-none">
<p className="text-sm text-stone-500 max-w-md">
                  When the operating company pays dividends or exits, funds flow
                  to the SPV. The protocol facilitates pro-rata distribution to
                  token holders.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-12 lg:px-24 bg-stone-50 border-b border-stone-200" id="features">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto h-auto lg:h-[600px]" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: '0', transform: 'translate(0px, 50px)'}}>

<div className="lg:col-span-2 lg:row-span-2 bg-white border border-stone-200 p-8 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-stone-100 rounded-full blur-3xl opacity-50 -mr-12 -mt-12 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<span className="px-2 py-1 bg-stone-100 text-stone-600 text-[10px] font-mono uppercase rounded">
                Live Monitor
              </span>
<h3 className="text-[32px] mt-4 mb-2 text-stone-900">
                Transparency Dashboard
              </h3>
<p className="text-sm text-stone-500 max-w-sm">
                Real-time view of SPV wallets, token holder distribution, and
                on-chain governance events. Verify, don't trust.
              </p>
</div>

<div className="mt-8 bg-stone-50 border border-stone-200 rounded-lg p-6 w-full h-64 flex flex-col gap-4 shadow-inner">
<div className="flex justify-between items-center border-b border-stone-200 pb-2">
<span className="text-[10px] font-mono text-stone-400">
                  WALLET: 0x7a...4e21
                </span>
<span className="text-[10px] font-mono text-emerald-600">
                  ● ACTIVE
                </span>
</div>
<div className="space-y-2">
<div className="h-2 w-3/4 bg-stone-200 rounded animate-pulse"></div>
<div className="h-2 w-1/2 bg-stone-200 rounded animate-pulse delay-75"></div>
<div className="h-2 w-5/6 bg-stone-200 rounded animate-pulse delay-150"></div>
</div>
<div className="mt-auto flex gap-2">
<div className="flex-1 h-16 bg-white border border-stone-200 rounded flex items-center justify-center">
<span className="text-xs text-stone-400">Asset Graph</span>
</div>
<div className="flex-1 h-16 bg-white border border-stone-200 rounded flex items-center justify-center">
<span className="text-xs text-stone-400">Flows</span>
</div>
</div>
</div>
</div>

<div className="bg-white border border-stone-200 p-8 flex flex-col justify-center items-center text-center hover:border-stone-400 transition-colors cursor-pointer group">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center mb-4 group-hover:bg-stone-900 transition-colors">
<svg className="lucide lucide-download w-5 h-5 text-stone-400 group-hover:text-white transition-colors" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
<h4 className="text-lg font-normal mb-2">Disclosure Pack</h4>
<p className="text-xs text-stone-500 mb-4">
              Download sample PPM and Subscription Agreements.
            </p>
<span className="text-[10px] font-mono uppercase tracking-widest text-stone-900 border-b border-stone-900">
              Get PDF
            </span>
</div>

<div className="bg-stone-900 text-white border border-stone-800 p-8 flex flex-col relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1b99b27-460a-4be5-a724-b983cad2af0c_1600w.jpg')] opacity-20 bg-cover mix-blend-overlay"></div>
<h4 className="text-lg font-normal mb-6 relative z-10">
              Launch Cadence
            </h4>
<div className="space-y-4 relative z-10">
<div className="flex items-center gap-4">
<span className="text-xs font-mono text-stone-500">Q3</span>
<div className="h-[1px] flex-1 bg-stone-800"></div>
<span className="text-xs text-stone-300">Series A</span>
</div>
<div className="flex items-center gap-4">
<span className="text-xs font-mono text-stone-500">Q4</span>
<div className="h-[1px] flex-1 bg-stone-800"></div>
<span className="text-xs text-stone-300">Secondary</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-12 lg:px-24 border-b border-stone-200">
<div className="max-w-5xl mx-auto" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: '0', transform: 'translate(0px, 50px)'}}>
<div className="grid grid-cols-1 md:grid-cols-2 border border-stone-200">

<div className="p-12 bg-stone-50 border-b md:border-b-0 md:border-r border-stone-200">
<h3 className="text-2xl text-stone-400 mb-8 font-light">
                Traditional Private Equity
              </h3>
<ul className="space-y-6">
<li className="flex items-start gap-3 opacity-60">
<svg className="lucide lucide-x w-4 h-4 mt-0.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="text-sm">Illiquid for 5-10 years</span>
</li>
<li className="flex items-start gap-3 opacity-60">
<svg className="lucide lucide-x w-4 h-4 mt-0.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="text-sm">Opaque paper-based reporting</span>
</li>
<li className="flex items-start gap-3 opacity-60">
<svg className="lucide lucide-x w-4 h-4 mt-0.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="text-sm">High minimums ($250k+)</span>
</li>
<li className="flex items-start gap-3 opacity-60">
<svg className="lucide lucide-x w-4 h-4 mt-0.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="text-sm">Manual settlement (weeks)</span>
</li>
</ul>
</div>

<div className="p-12 bg-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-stone-100 to-transparent"></div>
<h3 className="text-2xl text-stone-900 mb-8 font-normal">
                PBLK Structure
              </h3>
<ul className="space-y-6">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 mt-0.5 text-stone-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-medium">
                    Programmable Liquidity
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 mt-0.5 text-stone-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-medium">On-chain Auditability</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 mt-0.5 text-stone-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-medium">Fractional Access</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 mt-0.5 text-stone-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-medium">T+0 Settlement</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 px-12 lg:px-24 bg-stone-50" id="disclosures">
<div className="max-w-3xl mx-auto" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: '0', transform: 'translate(0px, 50px)'}}>
<h2 className="text-[32px] mb-12 text-center text-stone-900">
            Common Questions
          </h2>
<div className="space-y-4">

<div className="group border border-stone-200 bg-white rounded-lg overflow-hidden transition-all hover:border-stone-400">
<details className="group">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="text-sm font-medium text-stone-800">
                    Is this a security?
                  </span>
<span className="transition-transform group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4 text-stone-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-xs text-stone-500 leading-relaxed border-t border-stone-100 pt-4">
                  Yes. Tokens issued via PBLK are typically securities under US
                  law and other jurisdictions. They are offered under specific
                  exemptions (e.g., Reg D 506(c), Reg S). Full compliance and
                  accredited investor status is often required.
                </div>
</details>
</div>

<div className="group border border-stone-200 bg-white rounded-lg overflow-hidden transition-all hover:border-stone-400">
<details className="group">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="text-sm font-medium text-stone-800">
                    Who can participate?
                  </span>
<span className="transition-transform group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4 text-stone-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-xs text-stone-500 leading-relaxed border-t border-stone-100 pt-4">
                  Eligibility varies by launch. Generally, participants must
                  complete KYC/AML verification and prove Accredited Investor
                  status or meet specific regional requirements. Check specific
                  launch disclosures.
                </div>
</details>
</div>

<div className="group border border-stone-200 bg-white rounded-lg overflow-hidden transition-all hover:border-stone-400">
<details className="group">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="text-sm font-medium text-stone-800">
                    How are distributions handled?
                  </span>
<span className="transition-transform group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4 text-stone-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-xs text-stone-500 leading-relaxed border-t border-stone-100 pt-4">
                  When the SPV receives capital (dividends or exit), funds are
                  converted to stablecoins (USDC) and distributed to the wallet
                  addresses holding the tokens at the snapshot time via a smart
                  contract claim portal.
                </div>
</details>
</div>

<div className="group border border-stone-200 bg-white rounded-lg overflow-hidden transition-all hover:border-stone-400">
<details className="group">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="text-sm font-medium text-stone-800">
                    What is on-chain vs off-chain?
                  </span>
<span className="transition-transform group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4 text-stone-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-xs text-stone-500 leading-relaxed border-t border-stone-100 pt-4">
                  Cap table (token distribution), transfer restrictions,
                  distribution logic. Legal entity formation, bank accounts,
                  underlying equity custody, KYC data storage.
                </div>
</details>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-24 px-12 lg:px-24">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1">
<div className="w-8 h-8 bg-white text-stone-900 rounded-full flex items-center justify-center font-bold text-xs mb-6">
              PB
            </div>
<p className="text-xs text-stone-500">
              Building the infrastructure for
              <br/>
              tokenized private markets.
            </p>
</div>
<div>
<h5 className="text-white text-xs uppercase tracking-widest mb-6">
              Platform
            </h5>
<ul className="space-y-4 text-xs">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Launches
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Secondary Market
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Portfolio
                </a>
</li>
</ul>
</div>
<div>
<h5 className="text-white text-xs uppercase tracking-widest mb-6">
              Legal
            </h5>
<ul className="space-y-4 text-xs">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Terms of Service
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Risk Disclosures
                </a>
</li>
</ul>
</div>
<div>
<h5 className="text-white text-xs uppercase tracking-widest mb-6">
              Social
            </h5>
<div className="flex gap-4">
<svg className="lucide lucide-twitter w-4 h-4 hover:text-white cursor-pointer" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<svg className="lucide lucide-github w-4 h-4 hover:text-white cursor-pointer" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<svg className="lucide lucide-linkedin w-4 h-4 hover:text-white cursor-pointer" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
</div>
</div>
<div className="border-t border-stone-800 pt-12 text-[10px] text-stone-600 leading-loose text-justify">
<p className="mb-4 font-bold uppercase">Disclaimer</p>
<p>
            This website is for informational purposes only and does not
            constitute an offer to sell or a solicitation of an offer to buy any
            securities. Any such offer would be made only by means of a
            Confidential Private Placement Memorandum (PPM) or other offering
            documents, which will contain material information not found on this
            website and which strictly supersede this information.
          </p>
<p>
            PBLK does not provide legal, tax, or investment advice. Tokenized
            assets involve a high degree of risk, including the risk of total
            loss. Past performance is not indicative of future results. All
            transactions are subject to strict compliance checks, including
            KYC/AML verification. Not available to users in restricted
            jurisdictions.
          </p>
<p className="mt-8 text-center">
            © 2024 PBLK Protocol. All rights reserved.
          </p>
</div>
</footer>
</main>



    </>
  );
}
