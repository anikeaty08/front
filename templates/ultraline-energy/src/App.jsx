import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        (function() {
          const capObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const tile = entry.target;
                const delay = tile.style.animationDelay || '0ms';
                setTimeout(() => {
                  tile.classList.add('animate-in');
                }, parseInt(delay));
                capObserver.unobserve(tile);
              }
            });
          }, { threshold: 0.1 });

          document.querySelectorAll('.capability-tile').forEach(tile => {
            capObserver.observe(tile);
          });
        })();
      


        (function() {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const card = entry.target;
                const delay = card.style.animationDelay || '0ms';
                setTimeout(() => {
                  card.classList.add('animate-in');
                }, parseInt(delay));
                observer.unobserve(card);
              }
            });
          }, { threshold: 0.1 });

          document.querySelectorAll('.project-card').forEach(card => {
            observer.observe(card);
          });
        })();
      


        (function() {
          const whyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const tile = entry.target;
                const delay = tile.style.animationDelay || '0ms';
                setTimeout(() => {
                  tile.classList.add('animate-in');
                }, parseInt(delay));
                whyObserver.unobserve(tile);
              }
            });
          }, { threshold: 0.15 });

          document.querySelectorAll('.why-tile').forEach(tile => {
            whyObserver.observe(tile);
          });
        })();
      


      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<section className="relative h-screen w-full overflow-hidden">

<div className="absolute inset-0 bg-gray-900">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-60" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-power-plant-with-blue-solar-panels-49829-large.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(0,113,206,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,206,0.08) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 1920 1080">
<defs>
<lineargradient id="lineGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#0071CE', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#0071CE', stopOpacity: '0.6'}}></stop>
<stop offset="100%" style={{stopColor: '#0071CE', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path className="line-animate" d="M0 200 Q480 180 960 220 T1920 180" fill="none" stroke="url(#lineGrad)" strokeWidth="1" style={{animationDelay: '0s'}}></path>
<path className="line-animate" d="M0 400 Q480 420 960 380 T1920 420" fill="none" stroke="url(#lineGrad)" strokeWidth="1" style={{animationDelay: '0.5s'}}></path>
<path className="line-animate" d="M0 600 Q480 580 960 620 T1920 580" fill="none" stroke="url(#lineGrad)" strokeWidth="1" style={{animationDelay: '1s'}}></path>
<path className="line-animate" d="M0 800 Q480 820 960 780 T1920 820" fill="none" stroke="url(#lineGrad)" strokeWidth="1" style={{animationDelay: '1.5s'}}></path>
<line stroke="rgba(0,113,206,0.15)" stroke-dasharray="8 12" strokeWidth="1" x1="300" x2="300" y1="0" y2="1080"></line>
<line stroke="rgba(0,113,206,0.1)" stroke-dasharray="4 16" strokeWidth="1" x1="600" x2="600" y1="0" y2="1080"></line>
<line stroke="rgba(0,113,206,0.1)" stroke-dasharray="4 16" strokeWidth="1" x1="1200" x2="1200" y1="0" y2="1080"></line>
<line stroke="rgba(0,113,206,0.15)" stroke-dasharray="8 12" strokeWidth="1" x1="1600" x2="1600" y1="0" y2="1080"></line>
</svg>

<svg className="absolute right-0 bottom-0 h-full opacity-[0.07] transform translate-x-8" fill="none" style={{transform: 'translateZ(-1px) scale(1.1)'}} viewbox="0 0 200 600">
<path d="M100 0 L100 600 M60 100 L140 100 M50 200 L150 200 M40 300 L160 300 M30 400 L170 400 M20 500 L180 500" stroke="#0071CE" strokeWidth="2"></path>
<path d="M100 100 L60 200 M100 100 L140 200 M60 200 L40 300 M140 200 L160 300" stroke="#0071CE" strokeWidth="1.5"></path>
</svg>
</div>

<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>

<div className="relative z-10 h-full flex flex-col justify-between p-5 md:p-8 lg:p-12">

<div className="flex justify-between items-start">
<div className="text-white">
<span className="text-xl md:text-2xl font-semibold tracking-tighter">
              ULTRALINE
            </span>
<span className="text-xs md:text-sm font-medium tracking-wider text-orange-400 block -mt-1">
              ENERGY
            </span>
</div>
<nav className="hidden md:flex gap-6 text-sm text-gray-300">
<a className="hover:text-white transition-colors" href="#capabilities">
              Capabilities
            </a>
<a className="hover:text-white transition-colors" href="#projects">
              Projects
            </a>
<a className="hover:text-white transition-colors" href="#contact">
              Contact
            </a>
</nav>
<button className="md:hidden text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="flex-1 flex -translate-y-16 items-center">
<div className="max-w-xl lg:max-w-2xl pl-0 md:pl-4 lg:pl-8">
<h1 className="sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] -translate-y-12 -translate-y-16 text-4xl font-semibold text-white tracking-tight drop-shadow-lg">
              High-Voltage EPC &amp; Grid Infrastructure Specialists
            </h1>
<p className="uppercase md:mt-6 sm:text-sm md:text-base text-sm font-medium text-gray-300 tracking-[0.25em] mt-4 -translate-y-16">
              Transmission • Substations • Cabling • Grid Modernization
            </p>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 md:mt-10">
<a className="inline-flex items-center justify-center hover:bg-blue-700 transition-colors shadow-blue-600/30 text-sm font-medium text-white bg-blue-600 pt-3.5 pr-7 pb-3.5 pl-7 shadow-lg translate-y-16" href="#projects">
                View Projects
                <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors text-sm font-medium text-white border-white border-2 pt-3.5 pr-7 pb-3.5 pl-7 translate-y-16 scale-100" href="#contact">
                Submit Tender
              </a>
</div>
</div>
</div>

<div className="flex items-center">
<div className="inline-flex items-center gap-2 bg-black/60 px-3 py-2 backdrop-blur-md border border-white/10">
<div className="flex items-center gap-1.5 text-gray-300">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-base font-medium tracking-wide">ISO 9001</span>
</div>
<div className="w-px h-3 bg-gray-600"></div>
<div className="flex gap-1.5 text-base text-gray-300 items-center">
<svg className="lucide lucide-award w-4 h-4" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="text-base font-medium tracking-wide">TÜV</span>
</div>
<div className="w-px h-3 bg-gray-600"></div>
<div className="flex items-center gap-1.5 text-gray-300">
<svg className="lucide lucide-badge-check w-4 h-4" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-base font-medium tracking-wide">CE</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-8 relative overflow-hidden" id="capabilities" style={{background: 'linear-gradient(145deg, #0a1628 0%, #0f172a 40%, #1e293b 70%, #0f172a 100%)'}}>

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(0,113,206,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,206,0.06) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="none">
<defs>
<lineargradient id="capLineGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#0071CE', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#0071CE', stopOpacity: '0.5'}}></stop>
<stop offset="100%" style={{stopColor: '#0071CE', stopOpacity: '0'}}></stop>
</lineargradient>
<lineargradient id="capLineGradV" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#0071CE', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#0071CE', stopOpacity: '0.4'}}></stop>
<stop offset="100%" style={{stopColor: '#0071CE', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path className="line-animate" d="M0 180 Q400 160 800 200 T1600 180" fill="none" stroke="url(#capLineGrad)" strokeWidth="1" style={{animationDelay: '0s'}}></path>
<path className="line-animate" d="M0 380 Q400 400 800 360 T1600 400" fill="none" stroke="url(#capLineGrad)" strokeWidth="1" style={{animationDelay: '1.2s'}}></path>
<path className="line-animate" d="M0 580 Q400 560 800 600 T1600 560" fill="none" stroke="url(#capLineGrad)" strokeWidth="1" style={{animationDelay: '2.4s'}}></path>

<line opacity="0.4" stroke="url(#capLineGradV)" stroke-dasharray="4 8" strokeWidth="1" x1="25%" x2="25%" y1="0" y2="100%"></line>
<line opacity="0.3" stroke="url(#capLineGradV)" stroke-dasharray="4 8" strokeWidth="1" x1="50%" x2="50%" y1="0" y2="100%"></line>
<line opacity="0.4" stroke="url(#capLineGradV)" stroke-dasharray="4 8" strokeWidth="1" x1="75%" x2="75%" y1="0" y2="100%"></line>
</svg>

<svg className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-[0.03] pointer-events-none" fill="none" stroke="#0071CE" strokeWidth="1" viewbox="0 0 800 300">
<path d="M100 280 L150 50 L200 280"></path>
<path d="M350 280 L400 50 L450 280"></path>
<path d="M600 280 L650 50 L700 280"></path>
<path d="M150 50 L400 50 L650 50"></path>
<path d="M150 100 L400 100 L650 100"></path>
<path d="M150 150 L400 150 L650 150"></path>
<circle cx="150" cy="55" r="6"></circle>
<circle cx="400" cy="55" r="6"></circle>
<circle cx="650" cy="55" r="6"></circle>
</svg>
<div className="max-w-6xl mx-auto relative z-10">

<div className="text-center mb-12 md:mb-16">
<h2 className="md:text-4xl text-4xl font-semibold text-white tracking-tight mb-4">
            Core Capabilities
          </h2>
<p className="md:text-base text-base font-light text-slate-400 tracking-wide max-w-2xl mx-auto">
            Grid-Ready. Field-Tested. Engineered for Critical Power
            Infrastructure.
          </p>
</div>

<div className="grid grid-cols-12 gap-3 md:gap-4 auto-rows-[120px] md:auto-rows-[140px]">

<div className="col-span-12 md:col-span-8 row-span-2 relative group capability-tile overflow-hidden" style={{animationDelay: '0ms'}}>
<div className="absolute inset-0 bg-gradient-to-br from-slate-800/95 via-slate-800/90 to-slate-900/95 border border-slate-700/60 transition-all duration-500 group-hover:border-blue-500/70" style={{boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)'}}></div>

<div className="absolute inset-0 opacity-[0.03]" style={{background: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'}}></div>

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundImage: 'linear-gradient(rgba(0,113,206,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,206,0.08) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{boxShadow: 'inset 0 0 40px rgba(0, 113, 206, 0.15), 0 0 20px rgba(0,113,206,0.1)'}}></div>

<svg className="absolute top-0 right-0 w-full h-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" fill="none" preserveaspectratio="none" viewbox="0 0 400 280">
<path d="M350 20 L350 260" stroke="#0071CE" stroke-dasharray="4 6" strokeWidth="0.5"></path>
<path d="M320 40 L380 40" stroke="#0071CE" strokeWidth="0.5"></path>
<path d="M310 80 L390 80" stroke="#0071CE" strokeWidth="0.5"></path>
<path d="M300 120 L400 120" stroke="#0071CE" strokeWidth="0.5"></path>
<circle cx="350" cy="40" fill="none" r="3" stroke="#0071CE" strokeWidth="0.5"></circle>
<circle cx="350" cy="80" fill="none" r="3" stroke="#0071CE" strokeWidth="0.5"></circle>
</svg>
<div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
<div className="w-16 h-16 md:w-20 md:h-20 text-blue-400">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 80 80">

<path d="M40 4 L40 76" strokeWidth="1.5"></path>
<path d="M26 14 L54 14"></path>
<path d="M22 28 L58 28"></path>
<path d="M18 44 L62 44"></path>
<path d="M14 60 L66 60"></path>
<path d="M40 14 L26 28 M40 14 L54 28"></path>
<path d="M26 28 L22 44 M54 28 L58 44"></path>
<path d="M22 44 L18 60 M58 44 L62 60"></path>

<circle cx="26" cy="16" fill="none" r="2.5"></circle>
<circle cx="54" cy="16" fill="none" r="2.5"></circle>
<path d="M23 20 L23 24 M29 20 L29 24" strokeWidth="0.75"></path>
<path d="M51 20 L51 24 M57 20 L57 24" strokeWidth="0.75"></path>

<path d="M30 32 L50 40 M50 32 L30 40" opacity="0.6" strokeWidth="0.5"></path>
<path d="M26 48 L54 56 M54 48 L26 56" opacity="0.6" strokeWidth="0.5"></path>

<rect fill="currentColor" height="4" opacity="0.3" width="12" x="12" y="72"></rect>
<rect fill="currentColor" height="4" opacity="0.3" width="12" x="56" y="72"></rect>
</svg>
</div>
<div className="">
<span className="inline-block px-2 py-1 bg-blue-600/20 border border-blue-500/30 text-[10px] font-medium text-blue-300 uppercase tracking-wider mb-3">
                  Primary Service
                </span>
<h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight uppercase">
                  Transmission Lines
                </h3>
<p className="text-base text-slate-400 mt-2 font-light">
                  110–400kV overhead line installation • Twin &amp; quad bundle
                  conductors
                </p>
<div className="flex items-center gap-4 mt-4">
<span className="text-xs text-slate-500 font-mono">LATTICE</span>
<span className="w-1 h-1 bg-slate-600 rounded-full"></span>
<span className="text-xs text-slate-500 font-mono">MONOPOLE</span>
<span className="w-1 h-1 bg-slate-600 rounded-full"></span>
<span className="text-xs text-slate-500 font-mono">
                    HELICOPTER ASSIST
                  </span>
</div>
</div>
</div>
</div>

<div className="col-span-6 md:col-span-4 row-span-2 relative group capability-tile overflow-hidden" style={{animationDelay: '100ms'}}>
<div className="absolute inset-0 bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-slate-700/50 transition-all duration-500 group-hover:border-blue-500/60"></div>
<div className="absolute inset-0 opacity-[0.02]" style={{background: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'}}></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundImage: 'linear-gradient(rgba(0,113,206,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,206,0.1) 1px, transparent 1px)', backgroundSize: '15px 15px'}}></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{boxShadow: 'inset 0 0 30px rgba(0,113,206,0.12)'}}></div>
<div className="relative z-10 h-full flex flex-col justify-between p-5 md:p-6">
<div className="w-12 h-12 md:w-14 md:h-14 text-blue-400">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 56 56">

<rect height="40" rx="2" width="40" x="8" y="8"></rect>
<path d="M28 8 L28 18"></path>
<path d="M28 38 L28 48"></path>
<circle cx="28" cy="22" r="3"></circle>
<circle cx="28" cy="34" r="3"></circle>
<path d="M25 22 L31 34" strokeWidth="1.5"></path>

<path d="M16 28 L22 28 M34 28 L40 28" strokeWidth="0.75"></path>
<rect fill="currentColor" height="8" opacity="0.2" width="4" x="12" y="24"></rect>
<rect fill="currentColor" height="8" opacity="0.2" width="4" x="40" y="24"></rect>

<path d="M28 48 L28 52 M22 52 L34 52 M24 54 L32 54 M26 56 L30 56" strokeWidth="0.75"></path>
</svg>
</div>
<div>
<h3 className="text-lg md:text-lg font-semibold text-white tracking-tight uppercase">
                  Substation EPC
                </h3>
<p className="text-xs text-slate-400 mt-2 font-light leading-relaxed">
                  AIS &amp; GIS switchgear • 380kV capacity • SCADA integration
                </p>
</div>
</div>
</div>

<div className="col-span-6 md:col-span-4 relative group capability-tile overflow-hidden" style={{animationDelay: '200ms'}}>
<div className="absolute inset-0 bg-gradient-to-br from-slate-800/70 to-slate-900/80 border border-slate-700/50 transition-all duration-500 group-hover:border-blue-500/60"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundImage: 'linear-gradient(rgba(0,113,206,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,206,0.1) 1px, transparent 1px)', backgroundSize: '12px 12px'}}></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{boxShadow: 'inset 0 0 25px rgba(0,113,206,0.1)'}}></div>
<div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-5">
<div className="w-10 h-10 md:w-12 md:h-12 text-blue-400">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 48 48">

<circle cx="24" cy="24" r="18"></circle>
<circle cx="24" cy="24" r="14"></circle>
<circle cx="24" cy="24" r="10"></circle>
<circle cx="24" cy="24" r="6"></circle>
<circle cx="24" cy="24" fill="currentColor" r="3"></circle>

<path d="M24 6 L24 10 M24 38 L24 42 M6 24 L10 24 M38 24 L42 24" strokeWidth="0.75"></path>
</svg>
</div>
<div className="">
<h3 className="text-lg md:text-base font-semibold text-white tracking-tight uppercase">
                  HV Cabling
                </h3>
<p className="text-xs md:text-small text-slate-400 mt-1 font-light">
                  400kV XLPE • Directional drilling
                </p>
</div>
</div>
</div>

<div className="col-span-6 md:col-span-4 relative group capability-tile overflow-hidden" style={{animationDelay: '300ms'}}>
<div className="absolute inset-0 bg-gradient-to-bl from-slate-800/70 to-slate-900/80 border border-slate-700/50 transition-all duration-500 group-hover:border-blue-500/60"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundImage: 'linear-gradient(rgba(0,113,206,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,206,0.1) 1px, transparent 1px)', backgroundSize: '12px 12px'}}></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{boxShadow: 'inset 0 0 25px rgba(0,113,206,0.1)'}}></div>
<div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-5">
<div className="w-10 h-10 md:w-12 md:h-12 text-blue-400">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 48 48">

<circle cx="20" cy="14" r="4"></circle>
<path d="M20 14 L20 4"></path>
<path d="M20 14 L12 24"></path>
<path d="M20 14 L28 24"></path>
<path d="M20 18 L20 40"></path>
<path d="M14 40 L26 40" strokeWidth="1.5"></path>

<path d="M26 30 L38 30 L38 40 L44 40" strokeWidth="0.75"></path>
<rect fill="none" height="8" width="8" x="38" y="26"></rect>
<circle cx="42" cy="30" fill="currentColor" opacity="0.4" r="2"></circle>
</svg>
</div>
<div>
<h3 className="text-sm md:text-base font-semibold text-white tracking-tight uppercase">
                  Grid Connection
                </h3>
<p className="text-xs md:text-xs text-slate-400 mt-1 font-light">
                  Renewable tie-in • Solar &amp; Wind
                </p>
</div>
</div>
</div>

<div className="col-span-6 md:col-span-4 relative group capability-tile overflow-hidden" style={{animationDelay: '400ms'}}>
<div className="absolute inset-0 bg-gradient-to-tr from-slate-800/60 to-slate-900/70 border border-slate-700/50 transition-all duration-500 group-hover:border-blue-500/60"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundImage: 'linear-gradient(rgba(0,113,206,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,206,0.1) 1px, transparent 1px)', backgroundSize: '12px 12px'}}></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{boxShadow: 'inset 0 0 25px rgba(0,113,206,0.1)'}}></div>
<div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-5">
<div className="w-10 h-10 md:w-12 md:h-12 text-blue-400">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 48 48">

<rect height="28" rx="1" width="36" x="6" y="10"></rect>
<path d="M10 26 L16 18 L22 24 L28 16 L34 22 L40 14" strokeWidth="1.25"></path>
<path d="M10 32 L40 32" stroke-dasharray="2 2" strokeWidth="0.5"></path>
<circle cx="16" cy="18" fill="currentColor" r="1.5"></circle>
<circle cx="28" cy="16" fill="currentColor" r="1.5"></circle>
<circle cx="40" cy="14" fill="currentColor" r="1.5"></circle>
</svg>
</div>
<div>
<h3 className="text-small md:text-base font-semibold text-white tracking-tight uppercase">
                  Engineering
                </h3>
<p className="text-[10px] md:text-xs text-slate-400 mt-1 font-light">
                  CAD design • Load analysis
                </p>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-8 relative group capability-tile overflow-hidden emergency-tile" style={{animationDelay: '500ms'}}>
<div className="absolute inset-0" style={{background: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 30%, #ea580c 60%, #f97316 100%)'}}></div>

<div className="absolute inset-0 opacity-10" style={{background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.3) 10px, rgba(0,0,0,0.3) 20px)'}}></div>

<div className="absolute inset-0 border-2 border-orange-300/40 emergency-pulse"></div>

<div className="absolute inset-0" style={{boxShadow: 'inset 0 0 60px rgba(0,0,0,0.4)'}}></div>
<div className="relative z-10 h-full flex items-center p-5 md:p-6">
<div className="w-14 h-14 md:w-16 md:h-16 text-white/90 flex-shrink-0 mr-5 md:mr-6">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.25" viewbox="0 0 64 64">

<path d="M32 6 L58 54 L6 54 Z" strokeWidth="1.5"></path>
<path d="M32 18 L28 32 L34 32 L30 46" strokeLinejoin="round" strokeWidth="2"></path>

<path d="M16 16 L10 10 M48 16 L54 10" opacity="0.6" strokeWidth="1"></path>
<path d="M12 24 L4 22 M52 24 L60 22" opacity="0.6" strokeWidth="1"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex items-center gap-3 mb-2">
<h3 className="text-lg md:text-xl font-semibold text-white tracking-tight uppercase">
                    Emergency Response
                  </h3>
<span className="inline-flex items-center gap-1 px-2 py-0.5 bg-white/20 text-[9px] font-bold text-white uppercase tracking-wider rounded-sm">
<span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    24/7
                  </span>
</div>
<p className="text-sm text-white/80 font-light">
                  Rapid fault clearance &amp; grid restoration • Storm damage
                  repair • Critical infrastructure support
                </p>
</div>
<div className="hidden md:flex items-center gap-2 text-white/60 text-xs font-mono">
<span>HOTLINE</span>
<span className="text-white font-medium">+49 30 ULTRA-00</span>
</div>
</div>
</div>
</div>

<div className="hidden md:block absolute top-1/2 left-8 w-3 h-3 rounded-full bg-blue-500/30 border border-blue-400/50 scada-node"></div>
<div className="hidden md:block absolute top-1/3 right-12 w-2 h-2 rounded-full bg-blue-500/40 border border-blue-400/40 scada-node" style={{animationDelay: '0.5s'}}></div>
<div className="hidden md:block absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-blue-500/30 border border-blue-400/30 scada-node" style={{animationDelay: '1s'}}></div>
</div>
<style>
        .capability-tile {
          opacity: 0;
          transform: translateY(30px);
        }
        .capability-tile.animate-in {
          animation: cap-tile-enter 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes cap-tile-enter {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .emergency-pulse {
          animation: emergency-border-pulse 2s ease-in-out infinite;
        }
        @keyframes emergency-border-pulse {
          0%, 100% { border-color: rgba(253, 186, 116, 0.3); box-shadow: 0 0 0 0 rgba(251, 146, 60, 0); }
          50% { border-color: rgba(253, 186, 116, 0.6); box-shadow: 0 0 20px 4px rgba(251, 146, 60, 0.2); }
        }
        .scada-node {
          animation: scada-pulse 3s ease-in-out infinite;
        }
        @keyframes scada-pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        .emergency-tile:hover {
          transform: translateY(-2px);
          transition: transform 0.3s ease;
        }
      </style>

</section>

<section className="py-16 md:py-24 px-4 md:px-8 bg-slate-900 relative overflow-hidden" id="projects">

<div className="absolute inset-0 opacity-5">
<svg className="w-full h-full" preserveaspectratio="none">
<defs>
<pattern height="80" id="projectGrid" patternunits="userSpaceOnUse" width="80" x="0" y="0">
<path d="M80 0L0 80M60 0L0 60M80 20L20 80M40 0L0 40M80 40L40 80M20 0L0 20M80 60L60 80" fill="none" stroke="#0071CE" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect className="" fill="url(#projectGrid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="max-w-6xl mx-auto relative z-10">
<h2 className="md:text-2xl text-3xl font-semibold text-white tracking-tight text-center mb-4">
          Featured Projects
        </h2>
<p className="md:mb-16 text-base text-slate-400 text-center mb-12">
          Delivering critical infrastructure across Europe
        </p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">

<div className="col-span-2 row-span-2 relative group project-card" style={{animationDelay: '0ms', clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)'}}>
<div className="absolute inset-0 bg-navy-900" style={{background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'}}>
<img alt="Nord-Link Interconnector" className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500" src="https://images.unsplash.com/photo-1548337138-e87d889cc369?w=600&amp;h=800&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
<span className="inline-block px-2 py-1 bg-blue-600 text-[10px] font-medium text-white uppercase tracking-wider mb-3">
                Featured
              </span>
<h3 className="text-lg md:text-xl font-medium text-white leading-tight">
                Nord-Link HVDC Interconnector
              </h3>
<p className="text-xs text-slate-300 mt-2">North Sea • 525kV DC</p>
<a className="inline-flex items-center gap-1 text-orange-400 text-sm font-medium mt-4 hover:text-orange-300 transition-colors" href="#">
                View
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="relative group project-card" style={{animationDelay: '100ms'}}>
<div className="absolute inset-0" style={{background: 'linear-gradient(135deg, #334155 0%, #475569 100%)'}}>
<img alt="Brittany Wind Farm" className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500" src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=400&amp;h=300&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4">
<h3 className="text-sm font-medium text-white leading-tight">
                Brittany Wind Farm Connection
              </h3>
<p className="text-[10px] text-slate-300 mt-1">
                Brittany, France • 63kV
              </p>
</div>
</div>

<div className="relative group project-card" style={{animationDelay: '200ms'}}>
<div className="absolute inset-0" style={{background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)'}}>
<img alt="Bavaria Substation" className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500" src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&amp;h=300&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4">
<h3 className="text-sm font-medium text-white leading-tight">
                Bavaria GIS Substation
              </h3>
<p className="text-[10px] text-slate-300 mt-1">
                Munich, Germany • 380kV
              </p>
</div>
</div>

<div className="relative group project-card" style={{animationDelay: '300ms'}}>
<div className="absolute inset-0" style={{background: 'linear-gradient(135deg, #475569 0%, #64748b 100%)'}}>
<img alt="Solar Grid Integration" className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500" src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&amp;h=300&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4">
<h3 className="text-sm font-medium text-white leading-tight">
                Provence Solar Grid Tie-In
              </h3>
<p className="text-[10px] text-slate-300 mt-1">
                Provence, France • 225kV
              </p>
</div>
</div>

<div className="relative group project-card" style={{animationDelay: '400ms'}}>
<div className="absolute inset-0" style={{background: 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)'}}>
<img alt="Alpine Transmission" className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500" src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=400&amp;h=300&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4">
<h3 className="text-sm font-medium text-white leading-tight">
                Alpine Transmission Corridor
              </h3>
<p className="text-[10px] text-slate-300 mt-1">Austria • 400kV</p>
</div>
</div>

<div className="col-span-2 relative group project-card" style={{animationDelay: '500ms'}}>
<div className="absolute inset-0" style={{background: 'linear-gradient(135deg, #334155 0%, #1e293b 100%)'}}>
<img alt="Offshore Wind Cable" className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500" src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&amp;h=300&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<h3 className="text-base font-medium text-white leading-tight">
                North Sea Offshore Wind Export Cable
              </h3>
<p className="text-xs text-slate-300 mt-1">
                Netherlands • 220kV Submarine
              </p>
</div>
</div>
</div>

<div className="text-center mt-10 md:mt-14">
<a className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 text-white text-sm font-medium hover:bg-slate-800 hover:border-slate-500 transition-all" href="#">
            View All Projects
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<style>
        .project-card {
          opacity: 0;
          transform: translateY(30px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card.animate-in {
          animation: project-slide-in 0.6s ease forwards;
        }
        .project-card:hover {
          transform: translateY(-4px);
        }
        @keyframes project-slide-in {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      </style>

</section>

<section className="py-16 md:py-24 px-4 md:px-8 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'}}>

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(0,113,206,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,206,0.08) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" preserveaspectratio="xMidYMid slice">

<g transform="translate(50, 80)">
<path d="M40 250 L40 40 L180 40" fill="none" stroke="#0071CE" strokeWidth="2"></path>
<path d="M40 40 L20 70 M40 40 L60 70" fill="none" stroke="#0071CE" strokeWidth="1.5"></path>
<path d="M180 40 L180 70 M180 40 L160 60" fill="none" stroke="#0071CE" strokeWidth="1.5"></path>
<rect fill="none" height="35" stroke="#0071CE" strokeWidth="1.5" width="30" x="25" y="230"></rect>
<path d="M180 70 L180 120" fill="none" stroke="#0071CE" stroke-dasharray="4 4" strokeWidth="1"></path>
<rect fill="none" height="20" stroke="#0071CE" strokeWidth="1" width="30" x="165" y="120"></rect>
</g>

<g transform="translate(750, 30)">
<path d="M50 0 L50 300" fill="none" stroke="#0071CE" strokeWidth="2"></path>
<path d="M25 40 L75 40" fill="none" stroke="#0071CE" strokeWidth="1.5"></path>
<path d="M15 100 L85 100" fill="none" stroke="#0071CE" strokeWidth="1.5"></path>
<path d="M5 170 L95 170" fill="none" stroke="#0071CE" strokeWidth="1.5"></path>
<path d="M50 40 L25 100 M50 40 L75 100" fill="none" stroke="#0071CE" strokeWidth="1"></path>
<path d="M25 100 L15 170 M75 100 L85 170" fill="none" stroke="#0071CE" strokeWidth="1"></path>
<circle cx="25" cy="42" fill="none" r="4" stroke="#0071CE" strokeWidth="1"></circle>
<circle cx="75" cy="42" fill="none" r="4" stroke="#0071CE" strokeWidth="1"></circle>
<path d="M21 48 L21 60 M29 48 L29 60" fill="none" stroke="#0071CE" strokeWidth="0.75"></path>
<path d="M71 48 L71 60 M79 48 L79 60" fill="none" stroke="#0071CE" strokeWidth="0.75"></path>
</g>

<g transform="translate(1100, 150)">
<ellipse cx="35" cy="15" fill="none" rx="28" ry="10" stroke="#0071CE" strokeWidth="1.5"></ellipse>
<ellipse cx="35" cy="45" fill="none" rx="22" ry="8" stroke="#0071CE" strokeWidth="1.5"></ellipse>
<ellipse cx="35" cy="70" fill="none" rx="18" ry="6" stroke="#0071CE" strokeWidth="1.5"></ellipse>
<ellipse cx="35" cy="90" fill="none" rx="14" ry="5" stroke="#0071CE" strokeWidth="1.5"></ellipse>
<path d="M35 0 L35 15 M35 25 L35 45 M35 53 L35 70 M35 76 L35 90 M35 95 L35 120" fill="none" stroke="#0071CE" strokeWidth="1"></path>
</g>

<g transform="translate(200, 350)">
<circle cx="50" cy="50" fill="none" r="35" stroke="#0071CE" strokeWidth="1.5"></circle>
<circle cx="50" cy="50" fill="none" r="12" stroke="#0071CE" strokeWidth="1.5"></circle>
<path d="M50 15 L50 5 M50 85 L50 95 M15 50 L5 50 M85 50 L95 50" fill="none" stroke="#0071CE" strokeWidth="1.5"></path>
<path d="M25 25 L18 18 M75 25 L82 18 M25 75 L18 82 M75 75 L82 82" fill="none" stroke="#0071CE" strokeWidth="1.5"></path>

<path d="M50 15 L47 8 L53 8 Z M50 85 L47 92 L53 92 Z M15 50 L8 47 L8 53 Z M85 50 L92 47 L92 53 Z" fill="none" stroke="#0071CE" strokeWidth="0.75"></path>
</g>

<g transform="translate(900, 400)">
<rect fill="none" height="60" stroke="#0071CE" strokeWidth="1.5" width="120" x="0" y="20"></rect>
<path d="M20 0 L20 20 M60 0 L60 20 M100 0 L100 20" fill="none" stroke="#0071CE" strokeWidth="1"></path>
<path d="M20 80 L20 100 M60 80 L60 100 M100 80 L100 100" fill="none" stroke="#0071CE" strokeWidth="1"></path>
<circle cx="20" cy="50" fill="none" r="8" stroke="#0071CE" strokeWidth="1"></circle>
<circle cx="60" cy="50" fill="none" r="8" stroke="#0071CE" strokeWidth="1"></circle>
<circle cx="100" cy="50" fill="none" r="8" stroke="#0071CE" strokeWidth="1"></circle>
</g>

<g transform="translate(1250, 380)">
<circle cx="40" cy="40" fill="none" r="35" stroke="#0071CE" strokeWidth="1.5"></circle>
<circle cx="40" cy="40" fill="none" r="28" stroke="#0071CE" strokeWidth="1"></circle>
<circle cx="40" cy="40" fill="none" r="20" stroke="#0071CE" strokeWidth="1"></circle>
<circle cx="40" cy="40" fill="none" r="10" stroke="#0071CE" strokeWidth="1.5"></circle>
<circle cx="40" cy="40" fill="#0071CE" opacity="0.3" r="5"></circle>
</g>
</svg>

<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="none">
<defs>
<lineargradient id="whyLineGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#0071CE', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#0071CE', stopOpacity: '0.4'}}></stop>
<stop offset="100%" style={{stopColor: '#0071CE', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path className="line-animate" d="M0 120 Q400 100 800 140 T1600 120" fill="none" stroke="url(#whyLineGrad)" strokeWidth="1" style={{animationDelay: '0s'}}></path>
<path className="line-animate" d="M0 280 Q400 300 800 260 T1600 300" fill="none" stroke="url(#whyLineGrad)" strokeWidth="1" style={{animationDelay: '1s'}}></path>
<path className="line-animate" d="M0 440 Q400 420 800 460 T1600 420" fill="none" stroke="url(#whyLineGrad)" strokeWidth="1" style={{animationDelay: '2s'}}></path>
</svg>
<div className="max-w-6xl mx-auto relative z-10">
<h2 className="md:text-4xl uppercase text-3xl font-bold text-white tracking-tight font-space-grotesk text-center mb-3" style={{}}>
          ULTRA LINES Operational Advantages
        </h2>
<p className="text-base text-slate-400 text-center mb-12 md:mb-16 font-light max-w-xl mx-auto">
          Engineered for reliability. Built for performance.
        </p>

<div className="grid grid-cols-6 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[160px]">

<div className="col-span-3 md:col-span-2 relative group overflow-hidden why-tile" style={{animationDelay: '0ms'}}>
<div className="absolute inset-0 bg-slate-800/90 border border-slate-700/50 transition-all duration-500 group-hover:border-blue-500/60"></div>

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundImage: 'linear-gradient(rgba(0,113,206,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,206,0.15) 1px, transparent 1px)', backgroundSize: '15px 15px'}}></div>

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{boxShadow: 'inset 0 0 30px rgba(0,113,206,0.2)'}}></div>
<div className="relative z-10 h-full flex flex-col justify-between p-5 md:p-6">
<div className="w-12 h-12 text-blue-400">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 48 48">

<circle cx="18" cy="18" r="10"></circle>
<circle cx="18" cy="18" r="4"></circle>
<path d="M18 8 L18 5 M18 28 L18 31 M8 18 L5 18 M28 18 L31 18"></path>
<path className="" d="M11 11 L8 8 M25 11 L28 8 M11 25 L8 28 M25 25 L28 28"></path>
<circle cx="34" cy="32" r="8"></circle>
<circle cx="34" cy="32" r="3"></circle>
<path d="M34 24 L34 22 M34 40 L34 42 M26 32 L24 32 M42 32 L44 32"></path>
<path d="M28.5 26.5 L26 24 M39.5 26.5 L42 24 M28.5 37.5 L26 40 M39.5 37.5 L42 40"></path>
<path d="M25 22 L28 28" stroke-dasharray="2 2" strokeWidth="1"></path>
</svg>
</div>
<div className="">
<h4 className="text-lg font-semibold text-white tracking-tight">
                  Full EPC Capability
                </h4>
<p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light max-w-[180px]">
                  Turnkey execution from design to energization
                </p>
</div>
</div>
</div>

<div className="col-span-3 md:col-span-2 relative group overflow-hidden why-tile" style={{animationDelay: '100ms'}}>
<div className="absolute inset-0 bg-slate-800/70 border border-slate-700/50 transition-all duration-500 group-hover:border-blue-500/60"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundImage: 'linear-gradient(rgba(0,113,206,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,206,0.15) 1px, transparent 1px)', backgroundSize: '15px 15px'}}></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{boxShadow: 'inset 0 0 30px rgba(0,113,206,0.2)'}}></div>
<div className="relative z-10 h-full flex flex-col justify-between p-5 md:p-6">
<div className="w-12 h-12 text-blue-400">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 48 48">

<rect height="14" rx="1" width="26" x="4" y="22"></rect>
<path d="M30 28 L38 28 L44 34 L44 36 L30 36"></path>
<circle cx="12" cy="38" r="4"></circle>
<circle cx="24" cy="38" r="4"></circle>
<circle cx="40" cy="38" r="4"></circle>
<path d="M10 22 L10 12 L24 12 L24 22" strokeWidth="1.25"></path>
<path d="M4 18 L10 18" strokeWidth="1"></path>
<path d="M10 8 L10 12 M24 8 L24 12" strokeWidth="1"></path>
<path d="M8 12 L26 12" strokeWidth="1"></path>
</svg>
</div>
<div className="">
<h4 className="text-lg font-semibold text-white tracking-tight">
                  Own All Heavy Equipment
                </h4>
<p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light max-w-[180px]">
                  No subcontracted logistics. We mobilize fast.
                </p>
</div>
</div>
</div>

<div className="col-span-6 md:col-span-2 row-span-2 relative group overflow-hidden why-tile" style={{animationDelay: '200ms'}}>
<div className="absolute inset-0" style={{background: 'linear-gradient(145deg, #c2410c 0%, #ea580c 40%, #f97316 100%)'}}></div>

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '25px 25px'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

<svg className="absolute right-2 bottom-2 w-24 h-24 md:w-32 md:h-32 text-white/10" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 64 64">
<path d="M32 4 L32 8"></path>
<ellipse cx="32" cy="14" rx="14" ry="6"></ellipse>
<path d="M18 14 L18 20 Q18 26 32 26 Q46 26 46 20 L46 14"></path>
<path d="M22 26 L22 52 M42 26 L42 52"></path>
<path d="M18 52 L46 52"></path>
<rect height="4" width="8" x="16" y="52"></rect>
<rect height="4" width="8" x="40" y="52"></rect>
</svg>
<div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
<div className="w-16 h-16 md:w-20 md:h-20 text-white/90">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 64 64">

<path d="M8 44 L56 44"></path>
<path d="M12 44 L12 56 M52 44 L52 56"></path>
<rect fill="currentColor" height="4" opacity="0.3" width="8" x="8" y="56"></rect>
<rect fill="currentColor" height="4" opacity="0.3" width="8" x="48" y="56"></rect>
<path d="M8 36 L56 36" strokeWidth="2"></path>
<path d="M12 28 L52 28" strokeWidth="1.5"></path>

<path d="M14 28 L22 36 M26 28 L34 36 M38 28 L46 36 M50 28 L56 34" strokeWidth="2"></path>

<path d="M32 8 L42 24 L22 24 Z" strokeWidth="1.5"></path>
<path d="M32 13 L32 18" strokeWidth="2"></path>
<circle cx="32" cy="21" fill="currentColor" r="1"></circle>
</svg>
</div>
<div className="">
<h4 className="text-lg md:text-xl font-semibold text-white tracking-tight">
                  Safety Without Compromise
                </h4>
<p className="text-sm text-white/80 mt-3 leading-relaxed italic font-light">
                  "Zero lost-time incidents across 15 years of high-voltage
                  operations."
                </p>
<div className="mt-4 flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
<svg className="lucide lucide-shield-check w-4 h-4 text-white" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="text-xs text-white/70 font-medium">
                    HSE Certified
                  </span>
</div>
</div>
</div>
</div>

<div className="col-span-3 md:col-span-1 relative group overflow-hidden why-tile" style={{animationDelay: '300ms'}}>
<div className="absolute inset-0 bg-slate-800/80 border border-slate-700/50 transition-all duration-500 group-hover:border-blue-500/60"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundImage: 'linear-gradient(rgba(0,113,206,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,206,0.15) 1px, transparent 1px)', backgroundSize: '12px 12px'}}></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{boxShadow: 'inset 0 0 25px rgba(0,113,206,0.2)'}}></div>
<div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-5">
<div className="w-10 h-10 text-blue-400">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 40 40">

<circle cx="20" cy="20" r="14"></circle>
<circle cx="20" cy="20" fill="currentColor" r="2"></circle>
<path className="" d="M20 10 L20 20 L28 20" strokeWidth="2"></path>
<path d="M20 6 L20 8 M20 32 L20 34 M6 20 L8 20 M32 20 L34 20"></path>
<path d="M10 10 L12 12 M28 12 L30 10 M10 30 L12 28 M28 28 L30 30"></path>

<path d="M36 14 L40 12 M36 26 L40 28" strokeWidth="1"></path>
</svg>
</div>
<h4 className="text-lg font-semibold text-white tracking-tight">
                Fast Mobilization
              </h4>
</div>
</div>

<div className="col-span-3 md:col-span-1 relative group overflow-hidden why-tile" style={{animationDelay: '400ms'}}>
<div className="absolute inset-0 bg-slate-800/60 border border-slate-700/50 transition-all duration-500 group-hover:border-blue-500/60"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundImage: 'linear-gradient(rgba(0,113,206,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,206,0.15) 1px, transparent 1px)', backgroundSize: '12px 12px'}}></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{boxShadow: 'inset 0 0 25px rgba(0,113,206,0.2)'}}></div>
<div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-5">
<div className="w-10 h-10 text-blue-400">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 40 40">

<path d="M10 18 V14 a10 10 0 0 1 20 0 v4"></path>
<path d="M8 18 h24 a2 2 0 0 1 2 2 v2 H6 v-2 a2 2 0 0 1 2-2z"></path>
<rect height="5" rx="1" width="28" x="6" y="22"></rect>
<path d="M20 4 L20 10" strokeWidth="1"></path>
<circle cx="14" cy="32" r="3"></circle>
<circle cx="26" cy="32" r="3"></circle>
<path d="M17 32 L23 32" strokeWidth="1.5"></path>
</svg>
</div>
<h4 className="text-lg font-semibold text-white tracking-tight">
                In-House Crews
              </h4>
</div>
</div>

<div className="col-span-6 md:col-span-2 relative group overflow-hidden why-tile" style={{animationDelay: '500ms'}}>
<div className="absolute inset-0 bg-slate-800/70 border border-slate-700/50 transition-all duration-500 group-hover:border-blue-500/60"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundImage: 'linear-gradient(rgba(0,113,206,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,206,0.15) 1px, transparent 1px)', backgroundSize: '15px 15px'}}></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{boxShadow: 'inset 0 0 30px rgba(0,113,206,0.2)'}}></div>
<div className="relative z-10 h-full flex flex-col justify-between p-5 md:p-6">
<div className="w-12 h-12 text-blue-400">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 48 48">

<circle cx="24" cy="24" r="16"></circle>
<ellipse cx="24" cy="24" rx="16" ry="7"></ellipse>
<ellipse cx="24" cy="24" rx="7" ry="16"></ellipse>
<path d="M8 16 L40 16 M8 32 L40 32" strokeWidth="1"></path>

<circle cx="24" cy="12" fill="currentColor" r="1.5"></circle>
<circle cx="18" cy="14" fill="currentColor" opacity="0.6" r="1"></circle>
<circle cx="30" cy="14" fill="currentColor" opacity="0.6" r="1"></circle>
</svg>
</div>
<div className="">
<h4 className="text-lg font-semibold text-white tracking-tight">
                  Cross-Border EU Operations
                </h4>
<p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light max-w-[200px]">
                  Seamless deployment across DE, FR, AT, CH, BE, NL
                </p>
</div>
</div>
</div>

<div className="col-span-3 md:col-span-1 relative group overflow-hidden why-tile" style={{animationDelay: '600ms'}}>
<div className="absolute inset-0 bg-slate-800/90 border border-slate-700/50 transition-all duration-500 group-hover:border-blue-500/60"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundImage: 'linear-gradient(rgba(0,113,206,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,206,0.15) 1px, transparent 1px)', backgroundSize: '12px 12px'}}></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{boxShadow: 'inset 0 0 25px rgba(0,113,206,0.2)'}}></div>
<div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-5">
<div className="w-10 h-10 text-blue-400">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 40 40">

<rect height="26" rx="2" width="28" x="6" y="8"></rect>
<path d="M6 16 L34 16"></path>
<path d="M12 8 L12 4 M28 8 L28 4"></path>
<path d="M14 24 L18 28 L26 20" strokeWidth="2"></path>
<circle cx="12" cy="12" fill="currentColor" r="1"></circle>
<circle cx="28" cy="12" fill="currentColor" r="1"></circle>
</svg>
</div>
<h4 className="text-lg font-semibold text-white tracking-tight">
                On-Time Delivery
              </h4>
</div>
</div>

<div className="col-span-3 md:col-span-1 relative group overflow-hidden why-tile" style={{animationDelay: '700ms'}}>
<div className="absolute inset-0 bg-slate-800/60 border border-slate-700/50 transition-all duration-500 group-hover:border-blue-500/60"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundImage: 'linear-gradient(rgba(0,113,206,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,206,0.15) 1px, transparent 1px)', backgroundSize: '12px 12px'}}></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{boxShadow: 'inset 0 0 25px rgba(0,113,206,0.2)'}}></div>
<div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-5">
<div className="w-10 h-10 text-blue-400">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 40 40">

<path d="M6 34 L6 10 L34 10"></path>
<path d="M10 30 L16 22 L22 26 L28 14 L34 10" strokeWidth="2"></path>
<circle cx="16" cy="22" fill="currentColor" r="2"></circle>
<circle cx="22" cy="26" fill="currentColor" r="2"></circle>
<circle cx="28" cy="14" fill="currentColor" r="2"></circle>
<path d="M6 10 L4 10 M6 18 L4 18 M6 26 L4 26 M6 34 L4 34" strokeWidth="1"></path>
</svg>
</div>
<h4 className="text-lg font-semibold text-white tracking-tight">
                Cost Control
              </h4>
</div>
</div>

<div className="col-span-6 md:col-span-2 relative group overflow-hidden why-tile" style={{animationDelay: '800ms'}}>
<div className="absolute inset-0 bg-slate-800/80 border border-slate-700/50 transition-all duration-500 group-hover:border-blue-500/60"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundImage: 'linear-gradient(rgba(0,113,206,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,206,0.15) 1px, transparent 1px)', backgroundSize: '15px 15px'}}></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{boxShadow: 'inset 0 0 30px rgba(0,113,206,0.2)'}}></div>
<div className="relative z-10 h-full flex flex-col justify-between p-5 md:p-6">
<div className="w-12 h-12 text-blue-400">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 48 48">

<path className="" d="M6 42 L24 6 L42 42 Z"></path>
<path d="M15 30 L33 30" strokeWidth="1"></path>
<path d="M24 6 L24 14" strokeWidth="1"></path>
<circle cx="24" cy="26" r="4"></circle>
<path d="M24 30 L24 34" strokeWidth="1"></path>

<path d="M10 38 L10 42 M18 38 L18 42 M30 38 L30 42 M38 38 L38 42" strokeWidth="1"></path>

<path d="M22 26 L26 26 M24 24 L24 28" strokeWidth="0.75"></path>
</svg>
</div>
<div className="">
<h4 className="text-lg font-semibold text-white tracking-tight">
                  Engineering Precision
                </h4>
<p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light max-w-[200px]">
                  CAD-accurate designs with rigorous QA protocols
                </p>
</div>
</div>
</div>
</div>
</div>
<style>
        .why-tile {
          opacity: 0;
          transform: translateY(40px);
        }
        .why-tile.animate-in {
          animation: why-tile-enter 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .why-tile:nth-child(odd).animate-in {
          animation-name: why-tile-left;
        }
        .why-tile:nth-child(even).animate-in {
          animation-name: why-tile-right;
        }
        .why-tile:nth-child(3).animate-in {
          animation-name: why-tile-up;
        }
        @keyframes why-tile-enter {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes why-tile-left {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes why-tile-right {
          0% { opacity: 0; transform: translateX(40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes why-tile-up {
          0% { opacity: 0; transform: translateY(60px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      </style>

</section>


<section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(0,113,206,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,206,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="none">
<defs>
<lineargradient id="techLineGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#0071CE', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#0071CE', stopOpacity: '0.3'}}></stop>
<stop offset="100%" style={{stopColor: '#0071CE', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path className="line-animate" d="M0 150 Q400 130 800 170 T1600 150" fill="none" stroke="url(#techLineGrad)" strokeWidth="1" style={{animationDelay: '0s'}}></path>
<path className="line-animate" d="M0 350 Q400 370 800 330 T1600 370" fill="none" stroke="url(#techLineGrad)" strokeWidth="1" style={{animationDelay: '1s'}}></path>
<path className="line-animate" d="M0 550 Q400 530 800 570 T1600 530" fill="none" stroke="url(#techLineGrad)" strokeWidth="1" style={{animationDelay: '2s'}}></path>
</svg>
<div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
<h2 className="md:text-2xl md:mb-20 text-3xl font-semibold text-gray-900 tracking-tight font-space-grotesk text-center mb-12">
          Technical Capabilities
        </h2>

<div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
<div className="relative">
<span className="uppercase text-lg font-semibold text-blue-600 tracking-[0.2em] font-space-mono">
              01 / OVERHEAD LINES
            </span>
<h3 className="md:text-xl text-lg font-bold text-gray-900 tracking-tight font-space-grotesk mt-3">
              Transmission Lines
            </h3>
<p className="leading-relaxed text-base font-medium text-gray-600 font-space-grotesk mt-4">
              Full-scope execution of 110kV to 400kV overhead transmission lines
              including tower foundation design and installation, steel lattice
              structure assembly, conductor stringing with tensioning equipment,
              and complete energization protocols.
            </p>
<ul className="mt-6 space-y-3">
<li className="flex gap-3 text-sm text-gray-700 font-space-grotesk items-start">
<span className="w-2 h-2 bg-blue-600 mt-1.5 flex-shrink-0"></span>
                Twin &amp; quad bundle conductor systems up to 4×500mm²
              </li>
<li className="flex gap-3 text-sm text-gray-700 font-space-grotesk items-start">
<span className="w-2 h-2 bg-blue-600 mt-1.5 flex-shrink-0"></span>
                Lattice &amp; monopole tower construction with helicopter assist
              </li>
<li className="flex items-start gap-3 text-sm text-gray-700 font-space-grotesk">
<span className="w-2 h-2 bg-blue-600 mt-1.5 flex-shrink-0"></span>
                Composite &amp; glass insulator string assembly with live-line
                testing
              </li>
</ul>
</div>
<div className="relative bg-slate-100 border-2 border-slate-200 aspect-video overflow-hidden" style={{boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0,0,0,0.05)'}}>
<div className="absolute inset-2 border border-slate-300/50"></div>
<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'linear-gradient(rgba(0,113,206,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,206,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute inset-0 flex items-center justify-center">
<svg className="w-2/3 h-2/3 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 200 120">
<path d="M30 110 L50 20 L70 110"></path>
<path d="M100 110 L120 20 L140 110"></path>
<path d="M170 110 L190 20 L210 110"></path>
<path d="M50 20 L120 20 L190 20" strokeWidth="0.75"></path>
<path d="M50 50 L120 50 L190 50" strokeWidth="0.75"></path>
</svg>
</div>
<div className="absolute bottom-3 left-3 text-[9px] font-space-mono text-slate-400 tracking-wider uppercase">
              SPEC-OHL-001
            </div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8 md:gap-16 md:mb-24 mb-16 items-center">
<div className="md:order-1 relative bg-slate-100 border-2 border-slate-200 aspect-video overflow-hidden" style={{boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0,0,0,0.05)'}}>
<div className="absolute inset-2 border border-slate-300/50"></div>
<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'linear-gradient(rgba(0,113,206,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,206,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute inset-0 flex items-center justify-center">
<svg className="w-1/2 h-1/2 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 100 100">
<rect height="70" rx="2" width="70" x="15" y="15"></rect>
<path d="M50 15 L50 30"></path>
<path d="M50 70 L50 85"></path>
<circle cx="50" cy="35" r="4"></circle>
<circle cx="50" cy="65" r="4"></circle>
<path d="M46 35 L54 65" strokeWidth="2"></path>
</svg>
</div>
<div className="absolute bottom-3 left-3 text-[9px] font-space-mono text-slate-400 tracking-wider uppercase">
              SPEC-SUB-002
            </div>
</div>
<div className="md:order-2 relative">
<span className="uppercase text-lg font-bold text-blue-600 tracking-[0.2em] font-space-mono">
              02 / SUBSTATIONS
            </span>
<h3 className="md:text-xl text-lg font-bold text-gray-900 tracking-tight font-space-grotesk mt-3">
              AIS &amp; GIS Substations
            </h3>
<p className="leading-relaxed text-base font-semibold text-gray-600 font-space-grotesk mt-4">
              Turnkey substation delivery from civil works through switchgear
              installation, power transformer setup, and comprehensive
              protection system integration.
            </p>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3 text-sm text-gray-700 font-space-grotesk">
<span className="w-2 h-2 bg-blue-600 mt-1.5 flex-shrink-0"></span>
                Air-insulated &amp; SF6 gas-insulated switchgear systems
              </li>
<li className="flex items-start gap-3 text-sm text-gray-700 font-space-grotesk">
<span className="w-2 h-2 bg-blue-600 mt-1.5 flex-shrink-0"></span>
                Control, protection &amp; metering panel integration
              </li>
<li className="flex items-start gap-3 text-sm text-gray-700 font-space-grotesk">
<span className="w-2 h-2 bg-blue-600 mt-1.5 flex-shrink-0"></span>
                IEC 61850 SCADA integration &amp; FAT/SAT commissioning
              </li>
</ul>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
<div className="relative">
<span className="uppercase text-lg font-bold text-blue-600 tracking-[0.2em] font-space-mono">
              03 / UNDERGROUND
            </span>
<h3 className="md:text-xl text-lg font-bold text-gray-900 tracking-tight font-space-grotesk mt-3">
              High-Voltage Cabling
            </h3>
<p className="leading-relaxed text-base font-semibold text-gray-600 font-space-grotesk mt-4">
              Underground HV cable installation including precision trenching,
              horizontal directional drilling for obstacle crossings, cable
              pulling with tension monitoring, factory-trained jointing crews,
              and GIS/AIS termination works.
            </p>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3 text-sm text-gray-700 font-space-grotesk">
<span className="w-2 h-2 bg-blue-600 mt-1.5 flex-shrink-0"></span>
                XLPE &amp; MI cable systems rated up to 400kV AC/DC
              </li>
<li className="flex items-start gap-3 text-sm text-gray-700 font-space-grotesk">
<span className="w-2 h-2 bg-blue-600 mt-1.5 flex-shrink-0"></span>
                HDD crossings up to 1,500m &amp; micro-tunneling solutions
              </li>
<li className="flex items-start gap-3 text-sm text-gray-700 font-space-grotesk">
<span className="w-2 h-2 bg-blue-600 mt-1.5 flex-shrink-0"></span>
                Joint bay construction, VLF testing &amp; PD diagnostics
              </li>
</ul>
</div>
<div className="relative bg-slate-100 border-2 border-slate-200 aspect-video overflow-hidden" style={{boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0,0,0,0.05)'}}>
<div className="absolute inset-2 border border-slate-300/50"></div>
<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'linear-gradient(rgba(0,113,206,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,206,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute inset-0 flex items-center justify-center">
<svg className="w-1/2 h-1/2 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="30"></circle>
<circle cx="50" cy="50" r="22"></circle>
<circle cx="50" cy="50" r="14"></circle>
<circle cx="50" cy="50" fill="currentColor" r="6"></circle>
</svg>
</div>
<div className="absolute bottom-3 left-3 text-[9px] font-space-mono text-slate-400 tracking-wider uppercase">
              SPEC-HVC-003
            </div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-8 bg-gray-100">
<div className="max-w-6xl mx-auto">
<h2 className="md:text-2xl text-3xl font-semibold text-gray-900 tracking-tight text-center mb-4">
          Our Field Teams
        </h2>
<p className="md:mb-16 text-base text-gray-500 text-center mb-12">
          Certified professionals across Germany &amp; France
        </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
<div className="bg-gray-800 aspect-square flex flex-col items-center justify-center p-4 relative group">
<svg className="lucide lucide-hard-hat w-12 h-12 text-gray-500" data-lucide="hard-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path><path d="M14 6a6 6 0 0 1 6 6v3"></path><path d="M4 15v-3a6 6 0 0 1 6-6"></path><rect height="4" rx="1" width="20" x="2" y="15"></rect></svg>
<span className="text-sm text-gray-400 text-center mt-4">
              EU Certified HV Linemen
            </span>
</div>
<div className="bg-gray-700 aspect-square flex flex-col items-center justify-center p-4">
<svg className="lucide lucide-wrench w-12 h-12 text-gray-400" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
<span className="text-sm text-gray-300 text-center mt-4">
              Licensed Cable Jointers
            </span>
</div>
<div className="bg-gray-800 aspect-square flex flex-col items-center justify-center p-4">
<svg className="lucide lucide-zap w-12 h-12 text-gray-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm text-gray-400 text-center mt-4">
              Authorized Electricians
            </span>
</div>
<div className="bg-gray-700 aspect-square flex flex-col items-center justify-center p-4">
<svg className="lucide lucide-shield w-12 h-12 text-gray-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="text-sm text-gray-300 text-center mt-4">
              Work-at-Height Certified
            </span>
</div>
</div>

<div className="grid grid-cols-3 gap-4 mt-8 md:mt-12">
<div className="text-center py-6 border border-gray-200 bg-white">
<div className="text-2xl md:text-3xl font-semibold text-blue-600">
              240+
            </div>
<div className="text-sm text-gray-500 mt-1">Field Personnel</div>
</div>
<div className="text-center py-6 border border-gray-200 bg-white">
<div className="text-2xl md:text-3xl font-semibold text-blue-600">
              15
            </div>
<div className="text-sm text-gray-500 mt-1">Years Experience</div>
</div>
<div className="text-center py-6 border border-gray-200 bg-white">
<div className="text-2xl md:text-3xl font-semibold text-blue-600">
              0
            </div>
<div className="text-sm text-gray-500 mt-1">Lost Time Incidents</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-8 bg-gray-900 blueprint-grid relative" id="contact">
<div className="max-w-6xl mx-auto relative z-10">
<div className="grid lg:grid-cols-5 gap-8 md:gap-12">

<div className="lg:col-span-3 bg-white p-6 md:p-10">
<h2 className="md:text-2xl text-3xl font-semibold text-gray-900 tracking-tight mb-2">
              Submit Inquiry
            </h2>
<p className="text-base text-gray-500 mb-8">
              Get in touch with our engineering team
            </p>
<form className="space-y-5">
<div className="grid md:grid-cols-2 gap-5">
<div className="">
<label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
<input className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-blue-600" placeholder="Your name" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-700 mb-2">
                    Company *
                  </label>
<input className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-blue-600" placeholder="Company name" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
<select className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-blue-600 bg-white appearance-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23666%27 strokeWidth=%271.5%27%3E%3Cpath d=%27M6 9l6 6 6-6%27/%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center'}}>
<option>Transmission Line</option>
<option>Substation</option>
<option>Underground Cable</option>
<option>Grid Connection</option>
<option>Other</option>
</select>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-700 mb-2">
                    Voltage Level
                  </label>
<select className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-blue-600 bg-white appearance-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23666%27 strokeWidth=%271.5%27%3E%3Cpath d=%27M6 9l6 6 6-6%27/%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center'}}>
<option>110kV</option>
<option>220kV</option>
<option>380kV</option>
<option>400kV</option>
</select>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
<input className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-blue-600" placeholder="Project location" type="text"/>
</div>

<div className="">
<label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Tender Documents
                </label>
<div className="border-2 border-dashed border-gray-300 p-8 text-center hover:border-blue-600 transition-colors cursor-pointer">
<svg className="lucide lucide-upload w-8 h-8 text-gray-400 mx-auto" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
<p className="text-sm text-gray-500 mt-3">
                    Drag &amp; drop files or click to browse
                  </p>
<p className="text-xs text-gray-400 mt-1">
                    PDF, DOCX, DWG up to 25MB
                  </p>
</div>
</div>
<button className="hover:bg-blue-700 transition-colors flex gap-2 text-base font-medium text-white bg-blue-600 w-full py-4 items-center justify-center" type="submit">
                Submit Tender
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
</div>

<div className="lg:col-span-2 text-white">
<h3 className="text-xl font-semibold mb-6">Contact</h3>
<div className="space-y-6">
<div>
<div className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
<span>🇩🇪</span>
                  Germany
                </div>
<p className="text-sm text-gray-300">Berlin Headquarters</p>
<p className="text-sm text-white mt-2">+49 30 1234 5678</p>
</div>
<div>
<div className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
<span>🇫🇷</span>
                  France
                </div>
<p className="text-sm text-gray-300">Lyon Engineering Hub</p>
<p className="text-sm text-white mt-2">+33 4 5678 9012</p>
</div>
<div className="pt-6 border-t border-gray-700">
<div className="flex items-center gap-3 text-sm">
<svg className="lucide lucide-mail w-4 h-4 text-gray-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<a className="text-white hover:text-orange-400 transition-colors" href="mailto:tenders@ultraline-energy.com">
                    tenders@ultraline-energy.com
                  </a>
</div>
</div>
<div className="pt-6">
<p className="text-xs text-gray-500">
                  Operating across DE, FR, AT, CH, BE, NL
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-8 px-4 md:px-8 bg-black text-gray-500">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-white">
<span className="text-lg font-semibold tracking-tighter">ULTRALINE</span>
<span className="text-sm font-medium text-orange-400 tracking-wider ml-1">
            ENERGY
          </span>
</div>
<div className="text-xs text-center md:text-right">
          © 2024 Ultraline Energy GmbH. All rights reserved.
        </div>
</div>
</footer>


    </>
  );
}
