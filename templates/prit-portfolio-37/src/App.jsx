import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();

      document.addEventListener('DOMContentLoaded', () => {
        // Simple Intersection Observer for staggered reveals
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target); // Only animate once
            }
          });
        }, observerOptions);

        // Observe elements with .reveal-element and special classes
        const animatedElements = document.querySelectorAll('.reveal-element, .hero-bg-text');
        animatedElements.forEach(el => observer.observe(el));

        // Background entrance
        setTimeout(() => {
            const bg = document.getElementById('bg-layer');
            if(bg) bg.classList.remove('opacity-0');
        }, 100);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-[2000ms] ease-out" id="bg-layer">

<img alt="Portrait Background" className="w-full h-full object-cover object-top md:object-[center_25%] md:-translate-y-12 md:scale-110 opacity-60 md:opacity-80 grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab41986f-0d38-4a0f-ad46-84b9268736ae_1600w.png"/>

<div className="absolute inset-x-0 top-0 h-32 md:h-40 bg-gradient-to-b from-black/80 md:from-black/30 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-black via-black/95 to-transparent"></div>
<div className="absolute inset-y-0 right-0 w-full md:w-1/3 bg-gradient-to-l from-black/60 to-transparent"></div>
</div>

<nav className="fixed flex md:px-12 md:py-8 w-full z-50 pt-6 pr-6 pb-6 pl-6 top-0 right-0 left-0 items-center justify-between nav-enter opacity-0">

<div className="flex items-center gap-3 md:gap-4">
<a className="md:text-lg hover:text-neutral-300 transition-colors text-base font-medium text-white tracking-tight" href="#">
          Prit Shah
          <span className="text-neutral-500 ml-0.5">®</span>
</a>

<div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm group cursor-default hover:bg-white/10 transition-colors duration-300">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-medium text-neutral-300 uppercase tracking-widest leading-none group-hover:text-emerald-400 transition-colors">
            Available
          </span>
</div>
</div>

<div className="flex items-center gap-3 md:gap-4">
<button className="hidden md:flex text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300">
          Work
        </button>
<button className="hidden md:flex text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300">
          About
        </button>
<button className="group flex items-center gap-2 bg-black/20 hover:bg-white/10 backdrop-blur-xl border border-white/10 rounded-full pl-3 md:pl-4 pr-1.5 py-1.5 transition-all duration-300 active:scale-95">
<span className="text-[10px] md:text-xs font-medium text-neutral-300 group-hover:text-white uppercase tracking-wider">
            Menu
          </span>
<div className="bg-neutral-800 group-hover:bg-neutral-700 rounded-full p-1.5 md:p-2 transition-colors">
<svg className="lucide lucide-align-right w-3.5 h-3.5 text-white" data-lucide="align-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 5H3"></path><path d="M21 12H9"></path><path d="M21 19H7"></path></svg>
</div>
</button>
</div>
</nav>

<main className="flex-grow flex flex-col md:px-12 md:pb-16 w-full max-w-[1800px] z-10 mr-auto ml-auto pt-28 pr-6 pb-12 pl-6 relative justify-end">

<div className="hero-bg-text absolute top-[40%] md:top-1/2 left-1/2 w-full text-center z-0 pointer-events-none mix-blend-overlay">
<h1 className="text-[13vw] md:text-[18vw] leading-[0.8] font-medium tracking-tighter text-white/50 select-none">
          PRIT SHAH
        </h1>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 md:gap-y-0 md:gap-x-8 w-full z-20 gap-x-y-12 gap-y-1">

<div className="col-span-1 md:col-span-6 lg:col-span-5 flex flex-col md:space-y-8 space-y-6 justify-end">
<div className="space-y-3 md:space-y-4">
<p className="reveal-element delay-100 inline-flex items-center gap-2 uppercase text-xs font-medium text-green-50/80 tracking-wider max-h-screen px-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Product Designer
            </p>
<h2 className="reveal-element delay-200 leading-[1.05] sm:text-5xl md:text-6xl text-3xl font-normal text-white tracking-tight" style={{}}>Designing aesthetics for <span className="italic text-neutral-400 font-nunito">digital natives.</span></h2>
</div>
<div className="flex pt-2 relative items-start reveal-element delay-300">
<a className="shiny-cta focus:outline-none w-45 h-1" href="#">
<span className="max-w-xl max-h-screen">View Selected Projects</span>
</a>
</div>
</div>

<div className="hidden md:block md:col-span-1 lg:col-span-2"></div>

<div className="col-span-1 grid grid-cols-2 content-end md:col-span-5 md:gap-12 gap-x-6 gap-y-6">

<div className="flex flex-col gap-2 md:gap-3 group reveal-element delay-400">
<div className="w-6 md:w-8 h-[1px] bg-neutral-700 group-hover:w-full group-hover:bg-white transition-all duration-700 ease-out"></div>
<h3 className="text-sm font-medium text-white tracking-tight">
              Experience
            </h3>
<p className="text-sm md:text-xs text-neutral-400 leading-relaxed font-manrope">
              5+ years partnering with startups to define their digital
              presence.
            </p>
</div>

<div className="flex flex-col gap-2 md:gap-3 group reveal-element delay-500">
<div className="w-6 md:w-8 h-[1px] bg-neutral-700 group-hover:w-full group-hover:bg-white transition-all duration-700 ease-out"></div>
<h3 className="text-sm font-medium text-white tracking-tight">
              Approach
            </h3>
<p className="text-sm md:text-xs text-neutral-400 leading-relaxed font-manrope">
              Data-driven insights meets high-end clean aesthetics.
            </p>
</div>

<div className="flex flex-col gap-2 md:gap-3 group reveal-element delay-500">
<div className="w-6 md:w-8 h-[1px] bg-neutral-700 group-hover:w-full group-hover:bg-white transition-all duration-700 ease-out"></div>
<h3 className="text-sm font-medium text-white tracking-tight">
              Services
            </h3>
<p className="text-sm md:text-xs text-neutral-400 leading-relaxed font-manrope">
              Interface Design, Design Systems, Branding, Prototyping.
            </p>
</div>

<div className="flex flex-col gap-2 md:gap-3 group reveal-element delay-700">
<div className="w-6 md:w-8 h-[1px] bg-neutral-700 group-hover:w-full group-hover:bg-white transition-all duration-700 ease-out"></div>
<h3 className="text-sm font-medium text-white tracking-tight">
              Contact
            </h3>
<div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-1">
<a className="text-sm md:text-xs text-neutral-400 hover:text-white transition-colors relative overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300" href="#">
                Twitter
              </a>
<a className="text-sm md:text-xs text-neutral-400 hover:text-white transition-colors relative overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300" href="#">
                LinkedIn
              </a>
<a className="md:text-xs hover:text-white transition-colors text-sm text-neutral-400 relative overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300" href="#">
                Email
              </a>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-8 left-8 hidden lg:block z-50 reveal-element delay-700">
<p className="text-[10px] text-neutral-600 font-mono tracking-widest">
        EST. 2025
      </p>
</div>
<div className="fixed bottom-8 right-8 hidden lg:block z-50 reveal-element delay-700">
<div className="w-px h-12 bg-gradient-to-b from-transparent via-neutral-700 to-transparent"></div>
</div>



    </>
  );
}
