import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();
    


      const navExp = document.getElementById('nav-expandable');
      const navBurger = document.getElementById('nav-burger');
      const navLinks = document.getElementById('nav-links');
      let isNavOpen = false;

      navExp.addEventListener('click', (e) => {
          if (e.target.tagName === 'A') return;

          if (!isNavOpen) {
              navExp.style.width = '280px';
              navBurger.style.opacity = '0';
              navBurger.style.transform = 'scale(0.8) rotate(90deg)';
              setTimeout(() => {
                  navLinks.style.opacity = '1';
                  navLinks.style.pointerEvents = 'auto';
              }, 150);
              isNavOpen = true;
          } else {
              closeNav();
          }
      });

      function closeNav() {
          navLinks.style.opacity = '0';
          navLinks.style.pointerEvents = 'none';
          setTimeout(() => {
              navExp.style.width = '36px';
              navBurger.style.opacity = '1';
              navBurger.style.transform = 'scale(1) rotate(0deg)';
          }, 100);
          isNavOpen = false;
      }

      document.addEventListener('click', (e) => {
          if (isNavOpen && !navExp.contains(e.target)) {
              closeNav();
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-xl transition-all duration-500">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-3 group cursor-pointer select-none">
<svg className="w-8 h-8" fill="none" stroke="url(#logo-gradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24">
<defs>
<lineargradient id="logo-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#9333ea"></stop>
<stop offset="100%" stop-color="#06b6d4"></stop>
</lineargradient>
</defs>
<path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"></path>
</svg>
<div className="text-xl font-semibold tracking-tight leading-none">
<span className="text-neutral-500 transition-colors duration-300 group-hover:text-neutral-400">
              Geometry
            </span>
<span className="text-white">Ai</span>
</div>
</div>
<div className="relative h-9 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full overflow-hidden transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer z-50 flex items-center justify-end" id="nav-expandable" style={{width: '36px'}}>
<div className="absolute inset-0 flex flex-col items-center justify-center gap-[3px] transition-all duration-300" id="nav-burger">
<div className="w-3.5 h-[1.5px] bg-white rounded-full"></div>
<div className="w-3.5 h-[1.5px] bg-white rounded-full"></div>
<div className="w-3.5 h-[1.5px] bg-white rounded-full"></div>
</div>
<div className="flex items-center gap-5 px-5 opacity-0 pointer-events-none transition-all duration-300 absolute inset-0 justify-center min-w-[280px]" id="nav-links">
<a className="text-[10px] font-semibold text-white hover:text-cyan-400 tracking-widest uppercase transition-colors" href="#products">
              Products
            </a>
<a className="text-[10px] font-semibold text-white hover:text-purple-400 tracking-widest uppercase transition-colors" href="#studio">
              Studio
            </a>
<a className="text-[10px] font-semibold text-white hover:text-orange-400 tracking-widest uppercase transition-colors" href="#strategy">
              Strategy
            </a>
</div>
</div>
</div>
</nav>

<header className="relative h-screen flex flex-col justify-center items-center overflow-hidden">

<div className="absolute inset-0 z-0 bg-[#020202]">
<div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] z-10"></div>
<div className="absolute inset-0 bg-[#030303]/85 z-10"></div>
<img alt="Bank of China Tower" className="w-full h-full object-cover grayscale opacity-25 transition-all duration-[1500ms] ease-out hover:grayscale-0 hover:opacity-50 hover:scale-105 pointer-events-auto cursor-crosshair" src="https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-10">
<h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] animate-fade-up delay-100 select-none cursor-default group">
<span className="text-neutral-600 transition-colors duration-700 group-hover:text-neutral-500">
            Build in
          </span>
<br/>
<span className="text-white font-semibold transition-all duration-1000 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-orange-400">
            Colour.
          </span>
</h1>
<p className="mt-8 text-sm md:text-base text-neutral-500 font-light max-w-lg mx-auto leading-relaxed tracking-wide animate-fade-up delay-200">
          Use AI to transform complexity to simplicity, unlocking real value.
        </p>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
<i className="w-5 h-5 text-white stroke-[1.5]" data-lucide="chevron-down"></i>
</div>
</header>

<section className="relative py-32 px-6 max-w-7xl mx-auto bg-grid border-t border-white/5">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl tracking-tight text-white font-medium mb-4">
          Our DNA
        </h2>
<p className="text-neutral-500 text-sm max-w-md">
          Our ecosystem covers the entire lifecycle of modern construction
          through three distinct pillars.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">

<div className="group relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/10 bg-[#080808] transition-all duration-700 hover:border-white/20">

<div className="absolute inset-0 w-full h-full">
<img alt="AI Interface" className="w-full h-full object-cover grayscale opacity-40 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105" src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
</div>

<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-colors duration-500">
<i className="w-5 h-5 text-neutral-300 group-hover:text-blue-400 stroke-[1.5]" data-lucide="layers"></i>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-2">
              Applications
            </h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-300 transition-colors duration-500">
              Best of breed solutions and self-developed construction industry
              specific applications addressing industry needs.
            </p>

<div className="mt-6 border-t border-white/10 pt-5">
<p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
                Partners
              </p>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</div>
<span className="text-[10px] font-medium text-neutral-300">
                  Coming Soon
                </span>
</div>
</div>
</div>
</div>

<div className="group relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/10 bg-[#080808] transition-all duration-700 hover:border-white/20 lg:mt-12">

<div className="absolute inset-0 w-full h-full">
<img alt="Visual Programming Automation Script" className="w-full h-full object-cover grayscale opacity-40 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-105" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&amp;w=2532&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
</div>

<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/10 group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-colors duration-500">
<i className="w-5 h-5 text-neutral-300 group-hover:text-purple-400 stroke-[1.5]" data-lucide="cpu"></i>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-2">
              Studio
            </h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-300 transition-colors duration-500">
              Whether it's an automation or a design, we are here to provide
              innovative solutions to your requirements.
            </p>

<div className="mt-6 border-t border-white/10 pt-5">
<p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
                Partners
              </p>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</div>
<span className="text-[10px] font-medium text-neutral-300">
                  Coming Soon
                </span>
</div>
</div>
</div>
</div>

<div className="group relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/10 bg-[#080808] transition-all duration-700 hover:border-white/20 lg:mt-24">

<div className="absolute inset-0 w-full h-full">
<img alt="AlphaGo Board Strategy" className="w-full h-full object-cover grayscale opacity-40 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-105" src="https://images.unsplash.com/photo-1583156340160-775b28a47eb9?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
</div>

<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/10 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-colors duration-500">
<i className="w-5 h-5 text-neutral-300 group-hover:text-orange-400 stroke-[1.5]" data-lucide="compass"></i>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-2">
              Strategy
            </h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-300 transition-colors duration-500">
              Future proof your organisation with deep strategic advisory powered
              by data and intelligence.
            </p>

<div className="mt-6 border-t border-white/10 pt-5 space-y-3">
<div className="flex items-center gap-3 group/item">
<div className="p-1.5 rounded-md bg-white/5 border border-white/5 text-neutral-400 group-hover/item:text-orange-400 transition-colors">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="shield-check"></i>
</div>
<span className="text-xs text-neutral-400 font-medium group-hover/item:text-neutral-200 transition-colors">
                  ISO Certification Support
                </span>
</div>
<div className="flex items-center gap-3 group/item">
<div className="p-1.5 rounded-md bg-white/5 border border-white/5 text-neutral-400 group-hover/item:text-orange-400 transition-colors">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="wrench"></i>
</div>
<span className="text-xs text-neutral-400 font-medium group-hover/item:text-neutral-200 transition-colors">
                  BIM Manager Tools
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative group">

<div className="aspect-square relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/50">

<div className="absolute inset-0 flex justify-around opacity-20">
<div className="w-px h-full bg-white/30"></div>
<div className="w-px h-full bg-white/30"></div>
<div className="w-px h-full bg-white/30"></div>
<div className="w-px h-full bg-white/30"></div>
<div className="w-px h-full bg-white/30"></div>
</div>

<img alt="Structural Detail" className="absolute inset-0 w-full h-full object-cover grayscale opacity-0 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 ease-in-out" src="https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?q=80&amp;w=2673&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex flex-col justify-between p-8 z-10">
<div className="text-neutral-500 font-mono text-xs">
                  HK.ISO.9001
                </div>
<div className="self-end text-neutral-500 font-mono text-xs">
                  EST. 2024
                </div>
</div>
</div>
</div>
<div className="space-y-8">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white leading-tight">
              Precision engineering met
              <br/>
<span className="text-neutral-600">algorithmic intuition.</span>
</h2>
<p className="text-neutral-400 font-light leading-relaxed">
              At Geometry AI, we don't just build software; we architect the
              digital backbone of the construction industry. Inspired by the
              vertical density and efficiency of Hong Kong, our solutions are
              designed to scale.
            </p>
<div className="space-y-4 pt-4 border-t border-neutral-800">
<div className="flex items-start gap-4">
<div className="mt-1">
<i className="w-4 h-4 text-white stroke-[1.5]" data-lucide="check"></i>
</div>
<div>
<h4 className="text-white text-sm font-medium">
                    Full-Spectrum Automation
                  </h4>
<p className="text-xs text-neutral-500 mt-1">
                    From blueprint to brick, automated.
                  </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1">
<i className="w-4 h-4 text-white stroke-[1.5]" data-lucide="check"></i>
</div>
<div>
<h4 className="text-white text-sm font-medium">
                    Generative Design
                  </h4>
<p className="text-xs text-neutral-500 mt-1">
                    AI that iterates designs faster than humanly possible.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030303] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-10">

<div className="space-y-4">
<div className="flex items-center gap-2 select-none">

<svg className="w-5 h-5" fill="none" stroke="url(#footer-gradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24">
<defs>
<lineargradient id="footer-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#9333ea"></stop>
<stop offset="100%" stop-color="#06b6d4"></stop>
</lineargradient>
</defs>
<path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"></path>
</svg>
<span className="text-sm font-semibold tracking-tight text-white">
                GEOMETRY AI
              </span>
</div>
<p className="text-xs text-neutral-500 max-w-xs">
              Building the future of construction intelligence from Hong Kong to
              the world.
            </p>
</div>

<div className="flex gap-16">
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold text-white tracking-wide">
                SOCIAL
              </span>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">
                LinkedIn
              </a>
</div>
</div>
</div>
<div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-neutral-600">
            © 2026 Geometry AI. All rights reserved.
          </p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-900 border border-green-700 animate-pulse"></span>
<span className="text-[10px] text-neutral-500">
              Systems Operational
            </span>
</div>
</div>
</div>
</footer>



    </>
  );
}
