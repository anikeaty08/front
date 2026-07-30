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



    // Initialize lucide icons with stroke width 1.5
    window.addEventListener('load', function() {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
    });

    // Dropdown toggle
    const resourcesBtn = document.getElementById('resourcesBtn');
    const resourcesMenu = document.getElementById('resourcesMenu');
    if (resourcesBtn && resourcesMenu) {
      resourcesBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const isHidden = resourcesMenu.classList.contains('hidden');
        resourcesMenu.classList.toggle('hidden', !isHidden);
        document.addEventListener('click', outsideClose);
        function outsideClose(ev) {
          if (!resourcesMenu.contains(ev.target) && !resourcesBtn.contains(ev.target)) {
            resourcesMenu.classList.add('hidden');
            document.removeEventListener('click', outsideClose);
          }
        }
      });
    }

    // Toggle switch (inline styles)
    const toggleBox = document.getElementById('demoToggle');
    if (toggleBox) {
      toggleBox.addEventListener('click', function() {
        const thumb = this.querySelector('.thumb');
        const input = this.querySelector('input');
        const checked = !(input && input.checked);
        if (input) input.checked = checked;
        this.setAttribute('aria-checked', checked ? 'true' : 'false');
        this.style.background = checked ? '#374151' : '#1f1f1f';
        thumb.style.transform = checked ? 'translateX(18px)' : 'translateX(0px)';
        document.body.style.backgroundColor = checked ? '#0b0b0b' : '#000000';
      });
    }

    // Export HTML
    function downloadHTML() {
      const html = document.documentElement.outerHTML;
      const blob = new Blob([html], { type: 'text/html' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'axion-landing.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(a.href);
    }

    // Staggered reveal animations
    const animEls = Array.from(document.querySelectorAll('[data-animate]'));
    animEls.forEach((el, idx) => {
      el.style.transition = 'all .7s cubic-bezier(0.22, 1, 0.36, 1)';
      el.style.opacity = '0';
      el.style.transform = 'translateY(8px)';
      el.style.filter = 'blur(1px)';
      el.style.willChange = 'transform, opacity, filter';
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0px)';
        el.style.filter = 'blur(0px)';
      }, 150 + idx * 90);
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/glasswave-6HLEnvJfCRsq1aKT2xqlgme7" width="100%"></iframe></div>

<header className="w-full z-40 fixed top-0 left-0 right-0 backdrop-blur-md border-b bg-black/60 border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-14">

<div className="flex items-center space-x-3" data-animate="" style={{opacity: `1`, transform: `translateY(0px)`, filter: `blur(0px)`, willChange: `transform, opacity, filter`, transition: `0.7s cubic-bezier(0.22, 1, 0.36, 1)`}}>
<div className="w-7 h-7 rounded-sm flex items-center justify-center hover:ring-2 transition bg-white ring-white/20">
<svg aria-label="logo" className="text-black" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" width="14">
<path d="M3 3h6v6H3z"></path>
<path d="M9 9h6v6H9z"></path>
</svg>
</div>
<span className="text-lg font-semibold tracking-tight" style={{fontWeight: `600`, letterSpacing: `-0.02em`}}>AXION</span>
</div>

<nav className="hidden md:flex items-center space-x-8 text-sm tracking-tight text-gray-200">
<a className="flex items-center gap-2 transition-colors hover:text-white" data-animate="" href="#" style={{opacity: `1`, transform: `translateY(0px)`, filter: `blur(0px)`, willChange: `transform, opacity, filter`, transition: `0.7s cubic-bezier(0.22, 1, 0.36, 1)`}}>
            Products
            <svg className="w-[16px] h-[16px]" data-lucide="chevron-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(156, 163, 175)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="14" x="5" y="2"></rect><rect height="8" rx="2" width="20" x="2" y="14"></rect><path d="M6 18h2"></path><path d="M12 18h6"></path></svg>
</a>
<a className="flex items-center gap-2 transition-colors hover:text-white" data-animate="" href="#" style={{opacity: `1`, transform: `translateY(0px)`, filter: `blur(0px)`, willChange: `transform, opacity, filter`, transition: `0.7s cubic-bezier(0.22, 1, 0.36, 1)`}}>
            Platform
            <svg className="w-[16px] h-[16px]" data-lucide="chevron-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(156, 163, 175)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="2" y1="12" y2="12"></line><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" x2="6.01" y1="16" y2="16"></line><line x1="10" x2="10.01" y1="16" y2="16"></line></svg>
</a>
<a className="flex items-center gap-2 transition-colors hover:text-white" data-animate="" href="#" style={{opacity: `1`, transform: `translateY(0px)`, filter: `blur(0px)`, willChange: `transform, opacity, filter`, transition: `0.7s cubic-bezier(0.22, 1, 0.36, 1)`}}>
            Company
            <svg className="w-[16px] h-[16px]" data-lucide="chevron-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(156, 163, 175)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"></path><path d="M6 18h12"></path><path d="M6 14h12"></path><rect height="12" width="12" x="6" y="10"></rect></svg>
</a>
</nav>

<div className="flex space-x-4 items-center">

<div className="relative" data-animate="" style={{opacity: `1`, transform: `translateY(0px)`, filter: `blur(0px)`, willChange: `transform, opacity, filter`, transition: `0.7s cubic-bezier(0.22, 1, 0.36, 1)`}}>
<button className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-transparent border text-sm focus:outline-none transition border-white/20 hover:bg-white/10" id="resourcesBtn">
<svg className="mr-1 w-[16px] h-[16px]" data-lucide="grid" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v2"></path><path d="M14 20v2"></path><path d="M18 20v2"></path><path d="M21 20H3"></path><path d="M6 20v2"></path><path d="M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12"></path><rect height="10" rx="2" width="16" x="4" y="6"></rect></svg>
<span className="tracking-tight">Resources</span>
<svg className="ml-1" data-lucide="chevron-down" height="16" width="16"></svg>
</button>
<div className="hidden absolute right-0 mt-2 bg-[#111212] border rounded-lg p-2 min-w-[180px] shadow-xl border-white/10" id="resourcesMenu">
<a className="flex items-center gap-2 text-sm px-2 py-2 rounded-md transition text-gray-200 hover:bg-white/10" href="#">
<svg className="text-gray-400" data-lucide="external-link" height="16" width="16"></svg>
                Docs
              </a>
<a className="flex items-center gap-2 text-sm px-2 py-2 rounded-md transition text-gray-200 hover:bg-white/10" href="#">
<svg className="text-gray-400" data-lucide="external-link" height="16" width="16"></svg>
                API
              </a>
<a className="flex items-center gap-2 text-sm px-2 py-2 rounded-md transition text-gray-200 hover:bg-white/10" href="#">
<svg className="text-gray-400" data-lucide="external-link" height="16" width="16"></svg>
                Support
              </a>
</div>
</div>

<label aria-label="Toggle demo" className="inline-flex items-center cursor-pointer select-none" data-animate="" style={{opacity: `1`, transform: `translateY(0px)`, filter: `blur(0px)`, willChange: `transform, opacity, filter`, transition: `0.7s cubic-bezier(0.22, 1, 0.36, 1)`}}>
<span className="text-sm text-gray-300 tracking-tight mr-2" style={{minWidth: `70px`, textAlign: `right`}}>Mode</span>
<span aria-checked="false" className="inline-flex items-center" id="demoToggle" role="switch" style={{width: `46px`, height: `28px`, background: `rgb(31, 31, 31)`, borderRadius: `999px`, position: `relative`, border: `1px solid rgba(255, 255, 255, 0.15)`}}>
<span className="thumb" style={{width: `22px`, height: `22px`, background: `rgb(255, 255, 255)`, borderRadius: `999px`, position: `absolute`, top: `3px`, left: `3px`, boxShadow: `rgba(0, 0, 0, 0.2) 0px 1px 2px`}}></span>
<input className="sr-only" type="checkbox" />
</span>
</label>

</div>
</div>
</div>
</header>

<section className="pt-20 md:pt-28">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-4 items-stretch">

<aside className="hidden lg:block lg:col-span-4 relative rounded-2xl overflow-hidden border border-white/10" style={{minHeight: `520px`, background: `linear-gradient(to bottom,#0f1420,#121824)`}}>
<div className="absolute inset-0" style={{borderRight: `2px solid rgba(255,255,255,0.12)`, pointerEvents: `none`}}></div>
<div className="absolute left-0 top-0 bottom-0 w-1/4" style={{borderRight: `1px solid rgba(255,255,255,0.12)`, pointerEvents: `none`}}></div>
<div className="h-full flex flex-col bg-cover pt-6 pr-6 pb-6 pl-6 items-start justify-center bg-[url(https://cdn.midjourney.com/4c7a9130-177b-4d5a-9a57-41bb924196ed/0_0.png?w=800&q=80)] bg-center" style={{}}>
<div className="mt-8" data-animate="" style={{opacity: `1`, transform: `translateY(0px)`, filter: `blur(0px)`, willChange: `transform, opacity, filter`, transition: `0.7s cubic-bezier(0.22, 1, 0.36, 1)`}}>
<div className="text-5xl font-semibold tracking-tight text-blue-400" style={{fontWeight: `600`, letterSpacing: `.4px`}}>24+</div>
<p className="mt-2 text-sm text-gray-200" style={{opacity: `.95`}}>Autonomous units deployed</p>
</div>
<div className="mt-8" data-animate="" style={{opacity: `1`, transform: `translateY(0px)`, filter: `blur(0px)`, willChange: `transform, opacity, filter`, transition: `0.7s cubic-bezier(0.22, 1, 0.36, 1)`}}>
<div className="text-5xl font-semibold tracking-tight text-teal-400" style={{fontWeight: `600`, letterSpacing: `.4px`}}>99.3%</div>
<p className="mt-2 text-sm text-gray-200" style={{opacity: `.95`}}>Mission uptime in field tests</p>
</div>
</div>
</aside>

<div className="relative col-span-12 lg:col-span-8 bg-center overflow-hidden h-[520px] bg-cover rounded-2xl" style={{backgroundImage: `url('https://images.unsplash.com/photo-1523419409548-8a8c9d8c86a2?q=80&w=1600&auto=format&fit=crop')`}}>
<div className="absolute inset-0 bg-gradient-to-r mix-blend-multiply from-black/70 via-black/40 to-black/40"></div>
<div className="relative z-10 h-full flex flex-col lg:flex-row pt-8 pr-6 pb-8 pl-6 items-center justify-center">
<div className="flex-1 w-full lg:w-1/2 text-left lg:pl-8 pr-6">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight" data-animate="" style={{lineHeight: `1.04`, textShadow: `rgba(0, 0, 0, 0.25) 0px 2px 0px`, opacity: `1`, transform: `translateY(0px)`, filter: `blur(0px)`, willChange: `transform, opacity, filter`, transition: `0.7s cubic-bezier(0.22, 1, 0.36, 1)`}}>
              EXPLORE
              
              NEW FRONTIERS
            </h1>
<p className="mt-6 text-sm md:text-base max-w-md text-white/90" data-animate="" style={{opacity: `1`, transform: `translateY(0px)`, filter: `blur(0px)`, willChange: `transform, opacity, filter`, transition: `0.7s cubic-bezier(0.22, 1, 0.36, 1)`}}>
              Autonomous systems for off-world scanning and reconnaissance — lightweight, resilient, and self-optimizing.
            </p>
</div>
<div className="flex-1 w-full lg:w-1/2 flex items-center justify-center">
<button className="mt-6 lg:mt-0 font-semibold px-7 py-3 rounded-md shadow-md text-sm tracking-tight border backdrop-blur transition hover:ring-1 bg-white/10 hover:bg-white/15 text-white border-white/20 hover:ring-white/20" data-animate="" style={{opacity: `1`, transform: `translateY(0px)`, filter: `blur(0px)`, willChange: `transform, opacity, filter`, transition: `0.7s cubic-bezier(0.22, 1, 0.36, 1)`}}>
              Request Access
            </button>
</div>

<div className="hidden lg:block absolute right-6 bottom-6 text-right text-sm tracking-tight" data-animate="" style={{width: `220px`, opacity: `1`, transform: `translateY(0px)`, filter: `blur(0px)`, willChange: `transform, opacity, filter`, transition: `0.7s cubic-bezier(0.22, 1, 0.36, 1)`}}>
<div className="uppercase font-semibold text-white/90">Adaptive machines for</div>
<div className="leading-4 text-white/90">planetary surface intelligence</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-6">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-6">

<div className="col-span-12 md:col-span-6 lg:col-span-4 overflow-hidden bg-center text-black bg-cover border-black/10 border rounded-2xl bg-[url(https://cdn.midjourney.com/1821f8bd-e989-43bf-9ab5-03f8d5a52b55/0_0.png?w=800&q=80)]" style={{}}>
<div className="bg-[#e6e8ee]/40 pt-4 pr-4 pb-4 pl-4 backdrop-blur">
<p className="text-sm">Up to 48 hours per cycle</p>
</div><div className="flex gap-6 pt-6 pr-6 pb-6 pl-6 items-center">
<div className="">
<h3 className="text-lg font-semibold text-slate-50 tracking-tight" style={{color: `#1f1f22`}}>LONG-LIFE</h3>
<p className="opacity-80 text-sm text-slate-50 mt-2">POWER SYSTEMS</p>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-6 lg:col-span-4 overflow-hidden bg-cover border rounded-2xl shadow-sm text-black border-black/10 bg-center bg-[url(https://cdn.midjourney.com/c2a2f06e-77bd-4beb-b6c6-4310a3de9c30/0_0.png?w=800&q=80)]" style={{}}>
<div className="flex text-black bg-gray-100/40 pt-4 pr-4 pb-4 pl-4 backdrop-blur items-center justify-between">
<span className="text-sm font-semibold" style={{color: `#1f1f22`}}>Learn more</span>
<span className="text-xs font-semibold px-2 py-1 rounded text-gray-600 bg-white">2/3</span>
</div><div className="flex gap-4 pt-6 pr-6 pb-6 pl-6 items-center">
<div className="text-slate-50">
<h3 className="text-lg font-semibold text-slate-50 tracking-tight" style={{color: `#1f1f22`}}>TERRAIN</h3>
<p className="opacity-70 text-sm mt-1">MAPPING SUITE</p>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 overflow-hidden relative bg-cover border rounded-2xl border-white/10 bg-center bg-[url(https://cdn.midjourney.com/000d4986-a41d-4b0b-b529-c877510f5513/0_0.png?w=800&q=80)]" style={{}}>
<div className="pt-6 pr-6 pb-6 pl-6">
<h4 className="text-lg font-semibold tracking-tight" style={{color: `#fff`}}>24/7 AI VISION</h4>
<p className="text-sm text-gray-200 mt-2">Night-and-day inference with multi-spectrum imaging</p>
</div>
<div className="absolute bottom-0 left-0 right-0 h-16" style={{background: `linear-gradient(to top, rgba(0,0,0,0.9), transparent)`}}></div>
</div>
</div>
</section>

<section className="text-black bg-white/80 border-black/10 border-t mt-8">
<div className="relative overflow-hidden">
<div className="max-w-7xl sm:px-6 lg:px-8 grid grid-cols-12 gap-6 mr-auto ml-auto pt-12 pr-4 pb-12 pl-4 items-center">
<div className="col-span-12 lg:col-span-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">MAP AND CLASSIFY EXTRATERRESTRIAL TERRAIN</h2>
<p className="mt-3 text-sm text-gray-700">High-fidelity topography, mineral signatures, and hazard detection in real time.</p>
<button className="mt-4 inline-flex items-center px-4 py-2 rounded-md text-sm font-semibold tracking-tight hover:ring-1 transition bg-black text-white hover:bg-gray-800 hover:ring-black/10">
<svg className="mr-2 w-[16px] h-[16px]" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 20V10"></path><path d="M18 20v-4"></path><path d="M6 20V4"></path></svg>
            Learn more
          </button>
</div>
<div className="col-span-12 lg:col-span-6 bg-cover bg-[url(https://cdn.midjourney.com/ad8bd311-48b6-4760-ab93-3fa709bc48d5/0_0.png?w=800&q=80)] bg-center" style={{}}>
<div className="w-full h-48 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d7597939-dea3-474c-af26-1f32a3e90d39_1600w.jpg)] bg-cover border rounded-md border-black/10" style={{backgroundImage: `url('https://images.unsplash.com/photo-1562967912-339e7c6a12b3?q=80&w=1200&auto=format&fit=crop')`}}></div>
</div>
</div>
</div>
</section>

<section className="mt-6 border-t bg-black/90 border-white/10">
<div className="max-w-7xl sm:px-6 lg:px-8 grid grid-cols-12 gap-4 mr-auto ml-auto pt-8 pr-4 pb-8 pl-4 items-center">
<div className="col-span-6 md:col-span-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white"></div>
<span className="text-sm font-semibold tracking-tight">Validated by DeepSky Labs</span>
</div>
<div className="col-span-6 md:col-span-9 text-right text-xs text-gray-400">
<span className="mr-4">© 2025 Axion Systems</span>
<span className="mr-4">All rights reserved</span>
</div>
</div>
</section>

<div aria-label="Decorative image" className="hidden md:block fixed bottom-6 right-6 w-48 h-28 rounded-xl overflow-hidden shadow-xl border border-white/10" data-animate="" style={{opacity: `1`, transform: `translateY(0px)`, filter: `blur(0px)`, willChange: `transform, opacity, filter`, transition: `0.7s cubic-bezier(0.22, 1, 0.36, 1)`}}>
<img alt="3D render" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" style={{}} />
</div>



    </>
  );
}
