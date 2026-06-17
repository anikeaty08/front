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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
        const btn = document.getElementById('mobile-menu-btn');
        const close = document.getElementById('close-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const links = document.querySelectorAll('.mobile-link');
        if(btn && close && menu) {
          btn.addEventListener('click', () => {
            menu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden';
          });
          close.addEventListener('click', () => {
            menu.classList.add('translate-x-full');
            document.body.style.overflow = '';
          });
          links.forEach(l => l.addEventListener('click', () => {
            menu.classList.add('translate-x-full');
            document.body.style.overflow = '';
          }));
        }
      });
    


      (function () {

      function initUnicorn() {
        if (window.UnicornStudio && window.UnicornStudio.init) {
          if (!window.UnicornStudio.isInitialized) {
            window.UnicornStudio.init();
            window.UnicornStudio.isInitialized = true;
          }
        }
      }

      if (window.UnicornStudio && window.UnicornStudio.init) {
        initUnicorn();
        return;
      }

      if (!window.UnicornStudio) {
        window.UnicornStudio = { isInitialized:false };
      }

      if (!document.querySelector("script[data-unicorn-loader]")) {

        var s = document.createElement("script");
        s.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js";

        s.setAttribute("data-unicorn-loader","true");

        s.onload = function () {
          initUnicorn();
        };

        (document.head || document.body).appendChild(s);
      }

      window.addEventListener('scroll', function() {
        var unicornBg = document.querySelector('.unicorn-bg');
        if (unicornBg) {
          if (window.innerWidth > 768) {
            unicornBg.style.transform = 'translateY(' + (window.scrollY * 0.3) + 'px)';
          } else {
            unicornBg.style.transform = 'none';
          }
        }
      }, { passive: true });

      })();
    
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
      


<nav className="z-50 md:px-12 lg:px-24 flex bg-white/50 w-full border-slate-200/60 border-b pt-4 pr-6 pb-4 pl-6 absolute top-0 backdrop-blur-md items-center justify-between">

<a className="flex flex-col items-center group transition-opacity hover:opacity-80 shrink-0" href="#">
<svg className="w-[42px] h-[42px] text-slate-900" fill="none" shape-rendering="geometricPrecision" viewbox="0 0 100 100">
<path className="" d="M 68 20 A 35 35 0 1 0 80 32" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
<circle cx="78" cy="22" fill="#d6979c" r="4.5" stroke="none"></circle>
</svg>
<div className="flex flex-col items-center mt-1 text-center">
<span className="text-[15px] leading-none font-bold text-slate-900 tracking-[0.25em] font-extralight pl-[0.25em]">
            CIRCLE
          </span>
<span className="text-[9px] uppercase text-slate-700 tracking-[0.3em] mt-1 pl-[0.3em]">
            Aesthetics
          </span>
</div>
</a>
<div className="hidden md:flex gap-6 lg:gap-10 text-sm font-extralight text-slate-500">
<a className="hover:text-[#A9898B] transition-colors font-medium" href="#">Home</a>
<a className="hover:text-[#A9898B] transition-colors font-medium" href="#treatments">
          Treatments
        </a>
<a className="hover:text-[#A9898B] transition-colors font-medium" href="#analysis">
          Skin Analysis
        </a>
<a className="hover:text-[#A9898B] transition-colors font-medium" href="#authority">
          Consultant Led
        </a>
<a className="hover:text-[#A9898B] transition-colors font-medium" href="#technology">
          Technology
        </a>
</div>
<button className="hidden hover:bg-white hover:border-[#E3D5D6] hover:text-[#A9898B] transition-all duration-300 md:block text-sm font-medium font-extralight bg-white/80 border-slate-200 border rounded-sm px-5 py-2.5 shadow-sm backdrop-blur-sm">
        Book Consultation
      </button>
<button className="md:hidden text-slate-800 p-2 -mr-2 focus:outline-none flex items-center justify-center transition-opacity hover:opacity-70" id="mobile-menu-btn">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</button>
</nav>

<header className="min-h-screen flex md:px-12 lg:px-24 overflow-hidden pt-40 pr-6 pb-32 pl-6 relative items-center justify-center">

<div className="unicorn-bg absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] md:w-[100vw] xl:w-[1200px] aspect-square opacity-50 mix-blend-screen">
<div className="absolute inset-0 w-full h-full" data-us-dpi="1.5" data-us-fps="60" data-us-lazyload="true" data-us-production="true" data-us-project="yvg2jXyIdpjPbto0iE0W"></div>
</div>
</div>




<div className="flex flex-col font-medium text-center max-w-6xl z-20 mr-auto ml-auto relative items-center">
<div className="inline-flex text-[10px] uppercase sm:text-xs text-slate-50 tracking-[0.1em] font-extralight text-center border-slate-200/80 border rounded-sm mb-10 pt-2 pr-4 pb-2 pl-4 shadow-sm backdrop-blur-md gap-x-2 gap-y-2 items-center" style={{fontFamily: '"JetBrains Mono", monospace'}}>Aesthetic Regenerative Medicine in Suite 14 Blackrock Clinic</div>
<div className="relative mb-10">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] max-w-5xl bg-gradient-to-tr from-slate-300/20 via-slate-200/20 to-transparent blur-[80px] -z-10 pointer-events-none"></div>
<h1 className="leading-[0.95] sm:text-6xl md:text-8xl lg:text-9xl text-5xl font-medium text-slate-950 tracking-tighter font-extralight">Elevate <br className="sm:hidden"/> <span className="bg-clip-text font-extrabold text-transparent bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/100 to-white/50">Your </span><span className="bg-clip-text font-extrabold text-transparent bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/100 to-white/50">BEAUTY</span><br className=""/></h1>
</div>
<p className="md:text-2xl leading-relaxed text-lg font-light text-slate-800 tracking-tight max-w-4xl mb-14">
          Advanced aesthetic medicine delivered in a hospital environment under
          the supervision of a Consultant Plastic Surgeon. Safety is at the core
          of every treatment.
        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="bg-slate-900 text-white px-8 py-4 rounded-sm text-sm font-extralight border border-slate-900 shadow-sm hover:bg-slate-800 transition-all duration-300 flex justify-center items-center" href="#consultation">
            Book Consultation
          </a>
<a className="bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-900 px-8 py-4 rounded-sm text-sm font-extralight shadow-sm hover:border-[#E3D5D6] hover:text-[#A9898B] hover:bg-white transition-all duration-300 flex justify-center items-center gap-2 group" href="#technology">
            Explore Treatments
            <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
</div>
<ul className="mt-16 flex flex-col md:flex-row flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm md:text-base font-extralight text-slate-700 max-w-4xl mx-auto tracking-tight list-none">
<li className="flex font-medium text-slate-950 gap-x-2.5 gap-y-2.5 items-center">
<div className="w-1.5 h-1.5 rounded-full bg-[#C5A8AA]"></div>
            Hospital Environment
          </li>
<li className="flex font-medium text-slate-950 gap-x-2.5 gap-y-2.5 items-center">
<div className="w-1.5 h-1.5 rounded-full bg-[#C5A8AA]"></div>
            Medical Grade Technology
          </li>
<li className="flex font-medium text-slate-950 gap-x-2.5 gap-y-2.5 items-center">
<div className="w-1.5 h-1.5 rounded-full bg-[#C5A8AA]"></div>
            Evidence Based Treatments
          </li>
<li className="flex font-medium text-slate-950 gap-x-2.5 gap-y-2.5 items-center">
<div className="w-1.5 h-1.5 rounded-full bg-[#C5A8AA]"></div>
            Consultant Plastic Surgeon Supervision
          </li>
</ul>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-400">
<iconify-icon className="text-3xl animate-pulse" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</header>

<section className="md:py-32 md:px-12 lg:px-24 bg-white border-t border-slate-200 pt-24 pr-6 pb-24 pl-6 relative overflow-hidden" id="authority">
<div className="opacity-[0.02] z-0 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)', backgroundSize: '3rem 3rem'}}></div>
<div className="grid lg:grid-cols-2 md:gap-24 lg:gap-x-24 md:py-20 max-w-7xl z-10 mr-auto ml-auto pt-12 pb-12 relative gap-x-20 gap-y-20 items-center">
<div className="flex flex-col">
<span className="text-xs font-extralight uppercase tracking-[0.2em] text-[#C5A8AA] mb-5 block" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
            Medical Leadership
          </span>
<h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8 text-slate-900 leading-tight">
            Hospital-Grade
            <br/>
            Clinical Standards.
          </h2>
<p className="leading-relaxed md:text-xl text-lg font-light text-slate-600 mb-10">
            Led by Consultant Plastic Surgeon Dr Fuan Chan, Circle Aesthetics
            brings rigorous medical protocols to the forefront of regenerative
            aesthetics. We bridge the gap between high-end cosmetic care and
            strict hospital safety measures.
          </p>
<div className="flex items-center gap-5 border-t border-slate-200 pt-8 group cursor-default">
<div className="w-12 h-12 rounded-sm bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-200 group-hover:border-[#E3D5D6] group-hover:text-[#C5A8AA] transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:user-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div className="">
<div className="text-base font-normal text-slate-900 tracking-tight font-extralight">
                Dr Fuan Chan
              </div>
<div className="text-xs font-light text-slate-600 tracking-wide font-extralight mt-0.5" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                CONSULTANT PLASTIC SURGEON
              </div>
</div>
</div>
</div>
<div className="relative w-full">
<div className="-inset-4 -z-10 bg-slate-50 border-slate-100 border rounded-lg absolute"></div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-md overflow-hidden relative z-10 shadow-sm">
<div className="group bg-white p-8 md:p-10 h-full flex flex-col transition-colors duration-300 hover:bg-slate-50/50">
<iconify-icon className="group-hover:text-[#C5A8AA] transition-colors duration-300 text-3xl text-slate-700 mb-8" height="30" icon="solar:shield-check-linear" style={{strokeWidth: '1.5px', color: 'rgb(197, 168, 170)'}} width="114"></iconify-icon>
<div className="text-base font-normal text-slate-900 tracking-tight mb-2">
                Protocol Driven
              </div>
<div className="leading-relaxed text-base font-light text-slate-600">
                Every treatment is executed under strict consultant-designed
                clinical pathways.
              </div>
</div>
<div className="group bg-white p-8 md:p-10 h-full flex flex-col transition-colors duration-300 hover:bg-slate-50/50">
<iconify-icon className="group-hover:text-[#C5A8AA] transition-colors duration-300 text-3xl text-slate-700 mb-8" height="30" icon="solar:medical-kit-linear" style={{strokeWidth: '1.5px', color: 'rgb(197, 168, 170)'}} width="114"></iconify-icon>
<div className="text-base font-normal text-slate-900 tracking-tight mb-2">
                Clinical Environment
              </div>
<div className="leading-relaxed text-base font-light text-slate-600">
                Operating with the sterility and safety standards of a premium
                medical facility.
              </div>
</div>
<div className="group bg-white p-8 md:p-10 h-full flex flex-col transition-colors duration-300 hover:bg-slate-50/50">
<iconify-icon className="group-hover:text-[#C5A8AA] transition-colors duration-300 text-3xl text-slate-700 mb-8" height="30" icon="solar:clipboard-list-linear" style={{strokeWidth: '1.5px', color: 'rgb(197, 168, 170)'}} width="114"></iconify-icon>
<div className="text-base text-slate-900 tracking-tight mb-2">
                Evidence Based
              </div>
<div className="leading-relaxed text-base font-light text-slate-600">
                Utilizing only peer-reviewed, scientifically proven regenerative
                technologies.
              </div>
</div>
<div className="group md:p-10 flex flex-col transition-colors duration-300 hover:bg-slate-50/50 bg-white h-full pt-8 pr-8 pb-8 pl-8">
<iconify-icon className="group-hover:text-[#C5A8AA] transition-colors duration-300 text-3xl text-slate-700 mb-8" height="30" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5px', color: 'rgb(197, 168, 170)'}} width="114"></iconify-icon>
<div className="text-base font-normal text-slate-900 tracking-tight mb-2">
                Expert Team
              </div>
<div className="leading-relaxed text-base font-light text-slate-600">
                Delivered by highly qualified medical professionals under
                continuous supervision.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 md:px-12 lg:px-24 bg-[#F8FAFC] border-slate-200 border-t pt-24 pr-6 pb-24 pl-6" id="technology">
<div className="w-full max-w-7xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row md:items-end border-slate-200 border-b mb-12 pb-10 gap-x-6 gap-y-6 items-start justify-between">
<div className="">
<div className="flex items-center gap-3 mb-4">
<div className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full bg-[#C5A8AA] opacity-75"></span>
<span className="relative inline-flex h-1.5 w-1.5 bg-[#A9898B]"></span>
</div>
<span className="text-xs font-extralight uppercase tracking-[0.2em] text-slate-400" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                System Architecture
              </span>
</div>
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-slate-900">
              Advanced Clinical Technology.
            </h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-md overflow-hidden shadow-sm">

<div className="bg-white p-8 md:p-12 flex flex-col h-full relative group hover:bg-slate-50/80 transition-colors z-10 overflow-hidden">
<div className="absolute -right-4 -bottom-4 text-[12rem] font-thin tracking-tighter text-slate-900 opacity-[0.02] group-hover:scale-105 transition-transform duration-700 pointer-events-none leading-none z-0" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
              01
            </div>
<div className="relative z-10 flex justify-between items-start mb-20 md:mb-28">
<div className="w-10 h-10 rounded-sm bg-white text-slate-700 flex items-center justify-center border border-slate-200 shadow-sm group-hover:border-[#E3D5D6] group-hover:text-[#C5A8AA] transition-colors">
<iconify-icon className="text-2xl" icon="solar:target-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div className="flex flex-col items-end gap-1.5">
<span className="text-xs font-extralight uppercase tracking-[0.15em] px-2 py-1 bg-slate-50 border border-slate-200 rounded-sm text-slate-600" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                  Class IV Laser
                </span>
<span className="text-xs text-[#C5A8AA] font-extralight uppercase tracking-[0.15em]" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                  Active
                </span>
</div>
</div>
<div className="relative z-10 mt-auto border-t border-slate-100 pt-8 group-hover:border-[#E3D5D6] transition-colors">
<h3 className="text-2xl md:text-3xl font-extralight tracking-tight mb-3 text-slate-900">
                Sciton Laser
              </h3>
<p className="md:text-lg leading-relaxed text-base font-thin text-slate-800 max-w-sm">
                Precision resurfacing and targeted skin correction protocols for
                structural refinement and deep dermal renewal.
              </p>
</div>
</div>

<div className="bg-white p-8 md:p-12 flex flex-col h-full relative group hover:bg-slate-50/80 transition-colors z-10 overflow-hidden">
<div className="absolute -right-4 -bottom-4 text-[12rem] font-thin tracking-tighter text-slate-900 opacity-[0.02] group-hover:scale-105 transition-transform duration-700 pointer-events-none leading-none z-0" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
              02
            </div>
<div className="relative z-10 flex justify-between items-start mb-20 md:mb-28">
<div className="w-10 h-10 rounded-sm bg-white text-slate-700 flex items-center justify-center border border-slate-200 shadow-sm group-hover:border-[#E3D5D6] group-hover:text-[#C5A8AA] transition-colors">
<iconify-icon className="text-2xl" icon="solar:box-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div className="flex flex-col items-end gap-1.5">
<span className="text-xs font-extralight uppercase tracking-[0.15em] px-2 py-1 bg-slate-50 border border-slate-200 rounded-sm text-slate-600" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                  Interstitial
                </span>
<span className="text-xs text-[#C5A8AA] font-extralight uppercase tracking-[0.15em]" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                  Active
                </span>
</div>
</div>
<div className="relative z-10 mt-auto border-t border-slate-100 pt-8 group-hover:border-[#E3D5D6] transition-colors">
<h3 className="text-2xl md:text-3xl font-extralight text-slate-900 tracking-tight mb-3">
                Aura 3D Facial Analysis
              </h3>
<p className="md:text-lg leading-relaxed text-base font-thin text-slate-800 max-w-sm">
                Swiss-engineered 3D imaging technology designed for precision
                structural assessment and evidence-based treatment planning.
              </p>
</div>
</div>

<div className="bg-white p-8 md:p-12 flex flex-col h-full relative group hover:bg-slate-50/80 transition-colors z-10 overflow-hidden">
<div className="absolute -right-4 -bottom-4 text-[12rem] font-thin tracking-tighter text-slate-900 opacity-[0.02] group-hover:scale-105 transition-transform duration-700 pointer-events-none leading-none z-0" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
              03
            </div>
<div className="relative z-10 flex justify-between items-start mb-20 md:mb-28">
<div className="w-10 h-10 rounded-sm bg-white text-slate-700 flex items-center justify-center border border-slate-200 shadow-sm group-hover:border-[#E3D5D6] group-hover:text-[#C5A8AA] transition-colors">
<iconify-icon className="text-2xl" icon="solar:sun-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div className="flex flex-col items-end gap-1.5">
<span className="text-xs font-extralight uppercase tracking-[0.15em] px-2 py-1 bg-slate-50 border border-slate-200 rounded-sm text-slate-600" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                  LED Array
                </span>
<span className="text-xs text-[#C5A8AA] font-extralight uppercase tracking-[0.15em]" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                  Active
                </span>
</div>
</div>
<div className="relative z-10 mt-auto border-t border-slate-100 pt-8 group-hover:border-[#E3D5D6] transition-colors">
<h3 className="text-2xl md:text-3xl font-extralight tracking-tight mb-3 text-slate-900">
                Photobiomodulation
              </h3>
<p className="leading-relaxed md:text-lg text-base font-thin text-slate-800 max-w-sm">
                Medical-grade LED therapy accelerating cellular recovery,
                enhancing ATP synthesis, and reducing inflammation.
              </p>
</div>
</div>

<div className="bg-white p-8 md:p-12 flex flex-col h-full relative group hover:bg-slate-50/80 transition-colors z-10 overflow-hidden">
<div className="absolute -right-4 -bottom-4 text-[12rem] font-thin tracking-tighter text-slate-900 opacity-[0.02] group-hover:scale-105 transition-transform duration-700 pointer-events-none leading-none z-0" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
              04
            </div>
<div className="relative z-10 flex justify-between items-start mb-20 md:mb-28">
<div className="w-10 h-10 rounded-sm bg-white text-slate-700 flex items-center justify-center border border-slate-200 shadow-sm group-hover:border-[#E3D5D6] group-hover:text-[#C5A8AA] transition-colors">
<iconify-icon className="text-2xl" icon="solar:syringe-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div className="flex flex-col items-end gap-1.5">
<span className="text-xs font-extralight uppercase tracking-[0.15em] px-2 py-1 bg-slate-50 border border-slate-200 rounded-sm text-slate-600" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                  Biologics
                </span>
<span className="text-xs text-[#C5A8AA] font-extralight uppercase tracking-[0.15em]" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                  Active
                </span>
</div>
</div>
<div className="relative z-10 mt-auto border-t border-slate-100 pt-8 group-hover:border-[#E3D5D6] transition-colors">
<h3 className="text-2xl md:text-3xl font-extralight tracking-tight mb-3 text-slate-900">
                Regenerative Injectables
              </h3>
<p className="md:text-lg leading-relaxed text-base font-thin text-slate-800 max-w-sm">
                Polynucleotides and biostimulators designed to rebuild the
                extracellular matrix and prompt natural collagen.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-48 md:px-12 lg:px-24 lg:pt-28 lg:pb-28 bg-white border-slate-200 border-t pt-32 pr-6 pb-32 pl-6" id="philosophy">
<div className="text-center max-w-4xl mr-auto ml-auto items-center">
<h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight mb-10 leading-[1.1] text-slate-900">
          Regenerative Philosophy.
          <br/>
<span className="text-slate-300">Beyond superficial correction</span>
</h2>
<p className="leading-relaxed md:text-2xl text-lg font-thin text-slate-800 max-w-3xl mr-auto mb-16 ml-auto">
          Our focus shifts from mere augmentation to profound cellular repair.
          By strategically stimulating natural collagen production and
          optimizing underlying tissue health, we achieve sustained,
          sophisticated, and entirely natural-looking results.
        </p>
<div className="flex flex-wrap justify-center gap-3">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 text-slate-600 hover:border-[#E3D5D6] hover:text-[#A9898B] transition-colors cursor-default rounded-sm text-xs font-extralight tracking-wide" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon className="text-base text-[#C5A8AA]" icon="solar:atom-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
            CELLULAR OPTIMIZATION
          </div>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 text-slate-600 hover:border-[#E3D5D6] hover:text-[#A9898B] transition-colors cursor-default rounded-sm text-xs font-extralight tracking-wide" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon className="text-base text-[#C5A8AA]" icon="solar:stars-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
            COLLAGEN STIMULATION
          </div>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 text-slate-600 hover:border-[#E3D5D6] hover:text-[#A9898B] transition-colors cursor-default rounded-sm text-xs font-extralight tracking-wide" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon className="text-base text-[#C5A8AA]" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
            LONG-TERM EFFICACY
          </div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#0B1221] text-white border-t border-slate-800 mt-auto relative overflow-hidden" id="consultation">
<div className="absolute inset-0 z-0 opacity-[0.06]" style={{backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '3rem 3rem'}}></div>
<div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-800/30 via-[#0B1221]/60 to-[#0B1221] pointer-events-none"></div>
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-slate-700/20 via-slate-800/5 to-transparent blur-[100px] z-0 pointer-events-none"></div>
<div className="text-center max-w-3xl z-10 mr-auto ml-auto relative items-center">
<iconify-icon className="text-4xl text-[#C5A8AA] mb-8 mx-auto" icon="solar:calendar-add-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<h2 className="text-3xl md:text-5xl font-extralight tracking-tight mb-6 text-white leading-tight">
          Initiate your clinical treatment plan.
        </h2>
<p className="text-slate-400 font-thin mb-12 text-lg md:text-xl max-w-xl mx-auto">
          Schedule a comprehensive skin and structural consultation with our
          medical team to establish your baseline and roadmap.
        </p>
<button className="bg-white text-slate-900 border border-white px-10 py-4 rounded-sm text-sm font-extralight hover:text-[#A9898B] hover:bg-white shadow-[0_4px_14px_rgba(255,255,255,0.1)] transition-all duration-300">
          Request Consultation
        </button>
</div>
</section>

<footer className="bg-[#0B1221] text-slate-400 py-12 px-6 md:px-12 lg:px-24 border-t border-slate-800/50">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
<div className="md:col-span-2">

<a className="flex flex-col items-start mb-8 group transition-opacity hover:opacity-80" href="/">
<div className="flex flex-col items-center">
<svg className="w-14 h-14 text-white" fill="none" shape-rendering="geometricPrecision" viewbox="0 0 100 100">
<path d="M 68 20 A 35 35 0 1 0 80 32" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
<circle cx="78" cy="22" fill="#d6979c" r="4.5" stroke="none"></circle>
</svg>
<div className="flex flex-col items-center mt-1 text-center">
<span className="text-xl font-normal tracking-[0.25em] text-white leading-none pl-[0.25em]">
                  CIRCLE
                </span>
<span className="text-xs font-light tracking-[0.3em] text-slate-400 mt-1 pl-[0.3em] uppercase">
                  Aesthetics
                </span>
</div>
</div>
</a>
<p className="text-sm font-extralight max-w-xs leading-relaxed">
            Hospital-grade regenerative aesthetic medicine. Consultant
            supervised clinical excellence.
          </p>
</div>
<div className="">
<h4 className="text-xs font-mono-tech font-light uppercase tracking-[0.2em] text-slate-500 mb-6" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
            Clinic
          </h4>
<ul className="space-y-4 text-sm font-extralight">
<li className="">
<a className="hover:text-[#C5A8AA] transition-colors" href="/treatments">
                Treatments
              </a>
</li>
<li>
<a className="hover:text-[#C5A8AA] transition-colors" href="/consultant-led">
                Dr Fuan Chan
              </a>
</li>
<li className="">
<a className="hover:text-[#C5A8AA] transition-colors" href="/technology">
                Technology
              </a>
</li>
<li className="">
<a className="hover:text-[#C5A8AA] transition-colors" href="/book-consultation">
                Book Consultation
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-mono-tech font-light uppercase tracking-[0.2em] text-slate-500 mb-6" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
            Contact
          </h4>
<ul className="space-y-4 text-sm font-extralight">
<li>Dublin Ireland</li>
<li>
<a className="hover:text-[#C5A8AA] transition-colors" href="mailto:clinical@circleaesthetics.ie">
                clinical@circleaesthetics.ie
              </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row text-xs text-slate-300 font-extralight max-w-7xl border-slate-800/50 border-t mt-16 pt-8 gap-x-4 gap-y-4 items-center justify-between">
<p className="">© 2026 Circle Aesthetics. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-[#C5A8AA] transition-colors" href="#">
            Privacy Policy
          </a>
<a className="hover:text-[#C5A8AA] transition-colors" href="#">
            Terms of Use
          </a>
</div>
</div>
</footer>
<div className="fixed inset-0 bg-white/95 backdrop-blur-md z-[60] flex flex-col pt-4 px-6 pb-8 transition-transform transform translate-x-full duration-500 md:hidden overflow-y-auto" id="mobile-menu">
<div className="flex justify-end w-full">
<button className="text-slate-800 p-2 -mr-2 focus:outline-none flex items-center justify-center transition-opacity hover:opacity-70" id="close-menu-btn">
<iconify-icon className="text-3xl" icon="solar:close-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-8 text-2xl font-light tracking-tight text-slate-900 items-center mt-12">
<a className="mobile-link hover:text-[#A9898B] transition-colors" href="#">
          Home
        </a>
<a className="mobile-link hover:text-[#A9898B] transition-colors" href="#treatments">
          Treatments
        </a>
<a className="mobile-link hover:text-[#A9898B] transition-colors" href="#analysis">
          Skin Analysis
        </a>
<a className="mobile-link hover:text-[#A9898B] transition-colors" href="#authority">
          Consultant Led
        </a>
<a className="mobile-link hover:text-[#A9898B] transition-colors" href="#technology">
          Technology
        </a>
<a className="mobile-link mt-8 text-base font-extralight border border-slate-200 bg-white px-8 py-4 rounded-sm hover:border-[#E3D5D6] hover:text-[#A9898B] shadow-sm w-full max-w-[240px] text-center transition-all duration-300" href="#consultation">
          Book Consultation
        </a>
</div>
</div>



    </>
  );
}
