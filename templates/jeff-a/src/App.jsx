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



      // Mobile menu toggle
      (function () {
        const btn = document.querySelector('[data-menu-toggle]');
        const panel = document.querySelector('[data-menu-panel]');
        if (btn && panel) {
          btn.addEventListener('click', () => {
            panel.classList.toggle('hidden');
          });
        }
      })();

      // Letter reveal (no @keyframes; staggered transitions)
      (function () {
        const nodes = document.querySelectorAll('[data-letter]');
        nodes.forEach((n, i) => {
          setTimeout(() => {
            n.style.transform = 'translateY(0)';
            n.style.opacity = '1';
          }, 120 + i * 120);
        });
      })();

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Render icons with consistent stroke width
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && typeof lucide.createIcons === 'function') {
          lucide.createIcons({
            attrs: { 'stroke-width': 1.5 }
          });
        }
      });
    
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
      

<header className="sm:px-6 max-w-7xl mr-auto ml-auto pt-6 pr-4 pl-4">
<nav className="flex border-black/5 border-b pb-4 items-center justify-between md:justify-start md:gap-10">

<a className="inline-flex items-center gap-2" href="#">
<img alt="Tree Logo" className="bg-center md:w-14 md:h-14 w-[36px] h-[36px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a91afeb0-c978-420f-a068-50a2937db170_1600w.png"/>
<span className="text-sm font-medium tracking-tight sm:text-lg">Jeff Axelrod</span>
</a>

<div className="hidden md:flex gap-6 gap-x-6 gap-y-6 items-center">
<a className="hover:text-gray-900 text-base text-gray-700 tracking-tight" href="#work">Work</a>
<a className="hover:text-gray-900 text-base text-gray-700 tracking-tight" href="#skills">Skills</a>
<a className="hover:text-gray-900 text-base text-gray-700 tracking-tight" href="#about">About</a>
<a className="hover:text-gray-900 text-base text-gray-700 tracking-tight" href="/readinglist">Reading List</a>
</div>

<div className="flex items-center gap-2">
<button className="md:hidden inline-flex items-center justify-center rounded-full p-2 border border-gray-200 bg-white hover:bg-gray-50" data-menu-toggle="" type="button">
<svg aria-hidden="true" className="lucide lucide-menu w-4 h-4" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<span className="sr-only">Open menu</span>
</button>
</div>
</nav>

<div className="md:hidden hidden mt-3 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden" data-menu-panel="">
<div className="px-4 py-3 grid gap-2">
<a className="text-sm text-gray-800 tracking-tight py-1.5" href="#work">Work</a>
<a className="text-sm text-gray-800 tracking-tight py-1.5" href="#about">About</a>
<a className="text-sm text-gray-800 tracking-tight py-1.5" href="#skills">Skills</a>
<a className="text-sm text-gray-800 tracking-tight py-1.5" href="#contact">Contact</a>
</div>
<div className="border-t border-gray-200 px-4 py-3">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-gray-900 hover:bg-gray-800 border border-gray-900" href="#">
<svg aria-hidden="true" className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span>Download Resume</span>
</a>
</div>
</div>
</header>

<section className="sm:px-6 sm:mt-16 max-w-7xl mt-16 mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-12 items-center">
<div className="lg:col-span-7">
<h1 className="leading-none text-gray-900 tracking-tight">
<span className="block text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-semibold">
<span className="tracking-tighter" data-letter="" style={{display: 'inline-block', transform: 'translateY(0px)', opacity: '1'}}>Jeff</span>
<span className="block"></span>
<span className="tracking-tighter" data-letter="" style={{display: 'inline-block', transform: 'translateY(0px)', opacity: '1'}}>Axelrod</span>
</span>
</h1>
<p className="sm:mt-5 sm:text-3xl leading-relaxed text-base text-gray-700 tracking-tight mix-blend-luminosity max-w-2xl mt-4 brightness-200">
            Entrepreneur/Musician.
            <span className="block mt-1">Currently building DDee.ai.</span>
</p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-white bg-gray-900 hover:bg-gray-800 border border-gray-900" href="#work">
<svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span className="">View Work</span>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-gray-900 bg-white hover:bg-gray-50 border border-gray-200 shadow-sm" href="mailto:hello@jordan.design">
<svg aria-hidden="true" className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="">jma0014@gmail.com</span>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
<div className="flex gap-3 border-black/5 border-t pt-4 items-start">
<svg aria-hidden="true" className="lucide lucide-map-pin text-gray-400 w-[18px] h-[18px] mt-0.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div className="">
<p className="text-sm font-medium tracking-tight">Based in Atlanta, GA</p>
</div>
</div>
<div className="flex items-start gap-3 border-t border-black/5 pt-4">
<div className="">
</div>
</div>
<div className="flex gap-3 border-black/5 border-t pt-4 items-start">
<div className="">
</div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="aspect-[4/5] sm:aspect-[5/6] overflow-hidden bg-white rounded-3xl relative shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
<img alt="Portrait of Jordan Lee" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7181404f-d8e0-4e20-b823-d10b6ca9098f_1600w.jpg" style={{filter: 'grayscale(100%) saturate(0) contrast(1.05)'}}/>
<div className="bg-gradient-to-t from-gray-900/20 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="grid grid-cols-3 absolute right-4 bottom-4 left-4">
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-6 sm:mt-20 max-w-7xl border-black/5 border-t mt-20 mr-auto ml-auto pt-10 pr-4 pl-4" id="work">
<div className="flex items-center justify-between">
<h2 className="sm:text-2xl text-xl tracking-tight">Recent Work</h2>
<a className="inline-flex items-center gap-2 hover:text-gray-900 text-sm text-gray-700 tracking-tight" href="#">
<span className="" style={{visibility: 'hidden'}}>View all</span>
<svg aria-hidden="true" className="lucide lucide-arrow-up-right w-4 h-4 invisible" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{visibility: 'hidden'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">

<article className="group overflow-hidden bg-white border-black/5 border rounded-2xl">
<div className="aspect-[16/10] relative">
<img alt="Fintech dashboard design" className="transition-transform duration-500 group-hover:scale-[1.03] w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/62e80001-a72f-428f-89e1-4d09d55376ea_800w.png"/>
<div className="cursor-pointer absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='https://www.ddee.ai/'" role="button"></div>
</div>
<div className="p-4 border-t border-black/5">
<div className="flex gap-2 text-xs text-gray-500 gap-x-2 gap-y-2 items-center">
<svg aria-hidden="true" className="lucide lucide-monitor w-4 h-4" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
<span className="">Founder</span>
</div>
<h3 className="text-base font-semibold tracking-tight mt-2">DDee.ai</h3>
<p className="text-sm text-gray-600 mt-1">1-Day Due Diligence for Commercial Real Estate</p>
</div>
</article>

<article className="group overflow-hidden bg-white border-black/5 border rounded-2xl">
<div className="aspect-[16/10] relative">
<img alt="Mobile app design" className="transition-transform duration-500 group-hover:scale-[1.03] w-full h-full object-contain absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc82d793-6cec-4bd1-9a20-a779f5a938f7_800w.png"/>
<div className="cursor-pointer bg-gradient-to-t from-black/10 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='https://sightlineai.io/'" role="button"></div>
</div>
<div className="border-black/5 border-t pt-4 pr-4 pb-4 pl-4">
<div className="flex gap-2 text-xs text-gray-500 gap-x-2 gap-y-2 items-center">
<svg aria-hidden="true" className="lucide lucide-youtube lucide-smartphone w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="youtube" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(107, 114, 128)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
<span className="">Personal</span>
</div>
<h3 className="text-base font-semibold tracking-tight mt-2">Sightline.io</h3>
<p className="text-sm text-gray-600 mt-1">Youtube Video/Channel Summaries in Minutes</p>
</div>
</article>

<article className="group overflow-hidden bg-white border-black/5 border rounded-2xl">
<div className="aspect-[16/10] relative">
<img alt="Marketing website design" className="transition-transform duration-500 group-hover:scale-[1.03] w-full h-full object-contain absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d525b81-04e2-4da3-bd9b-5a087e4a1083_800w.png"/>
<div className="bg-gradient-to-t from-black/10 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="p-4 border-t border-black/5">
<div className="flex items-center gap-2 text-xs text-gray-500">
<svg aria-hidden="true" className="lucide lucide-shopping-cart lucide-globe w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="shopping-cart" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(107, 114, 128)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
<span className="">Ecommerce</span>
</div>
<h3 className="text-base font-semibold tracking-tight mt-2">Alchemist Labs</h3>
<p className="text-sm text-gray-600 mt-1">Supplements Company </p>
</div>
</article>
</div>
</section><section className="sm:px-6 sm:mt-24 max-w-7xl mt-24 mr-auto mb-16 ml-auto pt-10 pr-4 pl-4" id="contact">
<div className="overflow-hidden sm:p-8 text-white bg-neutral-950 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(255,255,255,0.07),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(255,255,255,0.06),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
</div>
<div className="relative">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-sparkles w-4 h-4 text-white/80" fill="none" height="24" stroke="currentColor" strokesparkles"="" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<h3 className="text-xl font-semibold tracking-tight">Skills</h3>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs bg-white/10 border-white/10 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Commercial Real Estate</span>
<span className="text-xs bg-white/10 border-white/10 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Financial Analysis</span>
<span className="text-xs bg-white/10 border-white/10 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Consumer Products</span>
<span className="text-xs bg-white/10 border-white/10 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Research</span>
<span className="text-xs bg-white/10 border-white/10 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Claude Code</span>
<span className="text-xs bg-white/10 border-white/10 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5">GenAI solutions</span>
<span className="text-xs bg-white/10 border-white/10 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Market Analysis</span>
<span className="text-xs bg-white/10 border-white/10 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Pro Audio/Live Sound</span>
<span className="text-xs bg-white/10 border-white/10 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Music Production</span>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-briefcase w-4 h-4 text-white/80" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<h3 className="text-xl font-semibold tracking-tight">Past jobs</h3>
</div>
<ul className="mt-3 space-y-3">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="lucide lucide-building-2 w-4 h-4 text-white/70 mt-0.5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
<div className="">
<p className="text-sm font-medium tracking-tight">Director of Research</p>
<p className="text-xs text-white/60">2018-2025· Stockbridge Capital Group</p>
</div>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="lucide lucide-building-2 w-4 h-4 text-white/70 mt-0.5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
<div className="">
<p className="text-sm font-medium tracking-tight">Acquisitions/Portfolio Management</p>
<p className="text-xs text-white/60">2015-2018 · Stockbridge Capital Group</p>
</div>
</li>
</ul>
</div>
</div>
<p className="text-[11px] text-white/60 text-center mt-6">© <span className="" id="year">2026</span> Jeff Axelrod</p>
</div>
</div>
</section>

<section className="sm:px-6 sm:mt-20 max-w-7xl border-black/5 border-t mt-20 mr-auto ml-auto pt-10 pr-4 pl-4" id="about">
<div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8 items-start">
<div className="md:col-span-5">
<div className="relative aspect-[16/12] md:aspect-[4/5] rounded-3xl overflow-hidden border border-white/60 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
<img alt="Workspace" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ec69c08-626f-454d-9b98-1ced0b5607b9_1600w.png" style={{filter: 'grayscale(100%) saturate(0) contrast(1.05)'}}/>
<div className="filter: grayscale(100%) saturate(0) contrast(1.05) bg-gradient-to-tr from-black/10 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
<div className="md:col-span-7 md:pl-8 md:border-l md:border-black/5">
<h2 className="text-2xl sm:text-3xl tracking-tight">About</h2>
<p className="sm:text-base leading-relaxed text-sm text-gray-700 mt-3">I am currently building DDEE.ai, a software platform that automates commercial real estate due diligence, turning a multi-week process into something measured in hours.</p>
<p className="sm:text-base leading-relaxed text-sm text-gray-700 mt-4">I am a guitarist in the band Frute and have played 100+ shows around the counrty over the past few years. I consider myself an avid learner and reader. </p>
<div className="mt-6 space-y-4 gap-x-4 gap-y-4">
<div className="gap-x-4 gap-y-4" style={{visibility: 'hidden'}}>
<h3 className="text-sm font-medium text-gray-900 tracking-tight">Recent Focus Areas</h3>
<div className="mt-2 flex flex-wrap gap-2">
<span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md">Design Systems</span>
<span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md">Data Visualization</span>
<span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md">Accessibility</span>
<span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md">Performance</span>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="sm:px-6 sm:mt-24 max-w-7xl border-black/5 border-t mt-24 mr-auto mb-16 ml-auto pt-10 pr-4 pl-4 gap-x-4 gap-y-4" id="contact">
<div className="overflow-hidden sm:p-8 text-white bg-neutral-950 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative gap-x-4 gap-y-4">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(255,255,255,0.07),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(255,255,255,0.06),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
</div>
<div className="relative">
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:divide-x md:divide-white/10">
<div className="">
<p className="text-sm text-white/70">Email</p>
<a className="mt-2 inline-flex items-center gap-3 text-xl sm:text-2xl font-medium tracking-tight" href="mailto:hello@jordan.design">
<svg aria-hidden="true" className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="break-all">jma0014@gmail.com</span>
</a>
</div>
<div className="md:pl-8">
<p className="text-sm text-white/70">Social</p>
<div className="flex flex-wrap gap-3 mt-2 gap-x-3 gap-y-3">
<a className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90" href="#">
<svg aria-hidden="true" className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="inline-flex items-center justify-center hover:bg-white/90 text-gray-900 bg-white w-10 h-10 border-white/10 border rounded-full" href="https://www.instagram.com/jeff_axelrod/">
<svg aria-hidden="true" className="lucide lucide-instagram w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(17, 24, 39)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="inline-flex items-center justify-center hover:bg-white/90 text-gray-900 bg-white w-10 h-10 border-white/10 border rounded-full" href="https://www.linkedin.com/in/jeff-axelrod-34506460/">
<svg 1.5"="" aria-hidden="true" className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" height="2width=" strokeLinecap="round" strokeLinejoin="round" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
<p className="text-[11px] text-white/60 text-left mt-6">© <span className="" id="year">2026</span> Jeff Axelrod</p>
</div>
</div>
</section>


    </>
  );
}
