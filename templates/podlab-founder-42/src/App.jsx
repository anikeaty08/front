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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Geist', 'sans-serif'],
display: ['Michroma', 'sans-serif'],
},
colors: {
brand: {
400: '#5cea4e',
500: '#2ADD1B',
600: '#22b515',
800: '#187a10',
900: '#104f0b',
glow: 'rgba(42, 221, 27, 0.15)',
}
},
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
}
}
}
}



const CONFIG = {
urls: {
booking: "https://cal.com/podlab/strategy",
system: "#system",
results: "#results",
founder: "#story"
}
};
document.addEventListener("DOMContentLoaded", () => {
// 1. Handle "Book Call" Actions (Universal)
document.querySelectorAll('[data-action="book"]').forEach(el => {
el.addEventListener('click', (e) => {
if (el.tagName !== 'A') {
window.location.href = CONFIG.urls.booking;
} else {
el.href = CONFIG.urls.booking;
}
});
if(el.tagName === 'A') el.href = CONFIG.urls.booking;
});
// 2. Handle Navigation Scrolls
document.querySelectorAll('[data-action="scroll-system"]').forEach(el => {
el.onclick = () => document.querySelector(CONFIG.urls.system).scrollIntoView({behavior: 'smooth'});
});
// 3. Animation Observer
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
// 4. Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu.querySelectorAll('a');
function toggleMenu() {
const isHidden = mobileMenu.classList.contains('translate-x-full');
if (isHidden) {
mobileMenu.classList.remove('translate-x-full');
document.body.style.overflow = 'hidden'; // Prevent scrolling
} else {
mobileMenu.classList.add('translate-x-full');
document.body.style.overflow = '';
}
}
mobileMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
// Close menu when a link is clicked
mobileLinks.forEach(link => {
link.addEventListener('click', () => {
mobileMenu.classList.add('translate-x-full');
document.body.style.overflow = '';
});
});
});



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    
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
      
<div className="aura-background-component fixed top-0 w-full h-screen -z-10 hue-rotate-[240deg]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="1bY8o6HVTI1oxJxuCJEG"></div>

</div>
<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute inset-0 grid-lines opacity-30"></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--accent-glow),_transparent_70%)] opacity-40 blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(42,221,27,0.1),_transparent_70%)] opacity-30 blur-3xl"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#020202]/80 backdrop-blur-xl">
<div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-brand-500 text-white shadow-[0_0_15px_rgba(42,221,27,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(42,221,27,0.5)]">
<svg className="ml-0.5" fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M6 5V19" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
<path d="M11 5L20 12L11 19V5Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-sm tracking-tight text-white uppercase font-display font-semibold">
          PodLab
        </span>
</a>

<div className="hidden md:flex items-center gap-8 text-xs font-medium">
<div className="relative group h-16 flex items-center">
<button className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors py-2 group-hover:text-white">
             Services
             <iconify-icon className="group-hover:rotate-180 transition-transform duration-200" icon="lucide:chevron-down" width="10"></iconify-icon>
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 w-[580px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
<div className="rounded-xl border border-white/10 bg-[#0A0A0A]/95 backdrop-blur-2xl shadow-2xl shadow-black/50 overflow-hidden ring-1 ring-white/5">
<div className="grid grid-cols-5 min-h-[320px]">
<div className="col-span-3 p-5 border-r border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-2 mb-5">
<div className="h-6 w-6 rounded bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500">
<iconify-icon icon="lucide:workflow" width="12"></iconify-icon>
</div>
<h4 className="text-[10px] font-bold text-white uppercase tracking-widest font-display">Growth System</h4>
</div>
<div className="space-y-0.5">
<a className="group/item flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors" href="#">
<div className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover/item:bg-brand-500 transition-colors"></div>
<div>
<div className="text-xs font-medium text-white group-hover/item:text-brand-400 transition-colors">Assets Lab</div>
<div className="text-[10px] text-neutral-500 font-light mt-0.5">Category leadership assets</div>
</div>
</a>
<a className="group/item flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors" href="#">
<div className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover/item:bg-brand-500 transition-colors"></div>
<div>
<div className="text-xs font-medium text-white group-hover/item:text-brand-400 transition-colors">Brand Lab</div>
<div className="text-[10px] text-neutral-500 font-light mt-0.5">Authority identity &amp; trust</div>
</div>
</a>
<a className="group/item flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors" href="#">
<div className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover/item:bg-brand-500 transition-colors"></div>
<div>
<div className="text-xs font-medium text-white group-hover/item:text-brand-400 transition-colors">Site Lab</div>
<div className="text-[10px] text-neutral-500 font-light mt-0.5">Conversion infrastructure</div>
</div>
</a>
<a className="group/item flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors" href="#">
<div className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover/item:bg-brand-500 transition-colors"></div>
<div>
<div className="text-xs font-medium text-white group-hover/item:text-brand-400 transition-colors">Video Sales Lab</div>
<div className="text-[10px] text-neutral-500 font-light mt-0.5">Evergreen sales letters</div>
</div>
</a>
<a className="group/item flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors" href="#">
<div className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover/item:bg-brand-500 transition-colors"></div>
<div>
<div className="text-xs font-medium text-white group-hover/item:text-brand-400 transition-colors">Expansion Lab</div>
<div className="text-[10px] text-neutral-500 font-light mt-0.5">Campaign momentum</div>
</div>
</a>
</div>
</div>
<div className="col-span-2 p-5 bg-[#050505]">
<div className="flex items-center gap-2 mb-5">
<div className="h-6 w-6 rounded bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-300">
<iconify-icon icon="lucide:layers" width="12"></iconify-icon>
</div>
<h4 className="text-[10px] font-bold text-white uppercase tracking-widest font-display">Services</h4>
</div>
<div className="space-y-1">
<a className="block p-2 rounded-lg hover:bg-white/5 transition-colors" href="#">
<div className="text-xs font-medium text-white">Studio Time</div>
<div className="text-[10px] text-neutral-500 mt-0.5">Record in person</div>
</a>
<a className="block p-2 rounded-lg hover:bg-white/5 transition-colors" href="#">
<div className="text-xs font-medium text-white">Consulting</div>
<div className="text-[10px] text-neutral-500 mt-0.5">Strategic Advisory</div>
</a>
</div>
</div>
</div>
<div className="px-5 py-3 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
<span className="text-[10px] text-neutral-500">Ready to build your system?</span>
<a className="group/link text-[10px] font-bold text-brand-500 hover:text-brand-400 flex items-center gap-1.5 transition-colors" data-action="book" href="#">
                       Book Strategy <iconify-icon className="transition-transform group-hover/link:translate-x-0.5" icon="lucide:arrow-right" width="10"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<a className="text-neutral-400 hover:text-white transition-colors" href="#system">System</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#results">Results</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#story">Founder</a>
</div>

<div className="hidden md:block">
<button className="shiny-cta shiny-cta-sm" data-action="book">
<span className="flex items-center gap-2">
            Book Strategy
            <iconify-icon className="opacity-70 group-hover:opacity-100" icon="lucide:arrow-right" width="12"></iconify-icon>
</span>
</button>
</div>

<button className="md:hidden flex items-center justify-center text-white p-2" id="mobile-menu-btn">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 z-[60] bg-[#020202] transform translate-x-full transition-transform duration-300 md:hidden flex flex-col h-screen" id="mobile-menu">
<div className="flex items-center justify-between px-6 h-16 border-b border-white/5 bg-[#020202]/80 backdrop-blur-xl shrink-0">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-500 text-white">
<svg className="ml-0.5" fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M6 5V19" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
<path d="M11 5L20 12L11 19V5Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-sm tracking-tight text-white uppercase font-display font-semibold">PodLab</span>
</div>
<button className="text-neutral-400 hover:text-white p-2" id="close-menu-btn">
<iconify-icon icon="lucide:x" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-8">

<div className="space-y-4">
<div className="flex items-center gap-2 mb-4">
<div className="h-6 w-6 rounded bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500">
<iconify-icon icon="lucide:workflow" width="12"></iconify-icon>
</div>
<h4 className="text-xs font-bold text-white uppercase tracking-widest font-display">Growth System</h4>
</div>
<div className="pl-4 border-l border-white/10 space-y-4">
<a className="block group" href="#">
<div className="text-sm font-medium text-white group-hover:text-brand-500 transition-colors">Assets Lab</div>
<div className="text-xs text-neutral-500 mt-1">Category leadership assets</div>
</a>
<a className="block group" href="#">
<div className="text-sm font-medium text-white group-hover:text-brand-500 transition-colors">Brand Lab</div>
<div className="text-xs text-neutral-500 mt-1">Authority identity &amp; trust</div>
</a>
<a className="block group" href="#">
<div className="text-sm font-medium text-white group-hover:text-brand-500 transition-colors">Site Lab</div>
<div className="text-xs text-neutral-500 mt-1">Conversion infrastructure</div>
</a>
<a className="block group" href="#">
<div className="text-sm font-medium text-white group-hover:text-brand-500 transition-colors">Video Sales Lab</div>
<div className="text-xs text-neutral-500 mt-1">Evergreen sales letters</div>
</a>
<a className="block group" href="#">
<div className="text-sm font-medium text-white group-hover:text-brand-500 transition-colors">Expansion Lab</div>
<div className="text-xs text-neutral-500 mt-1">Campaign momentum</div>
</a>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center gap-2 mb-4">
<div className="h-6 w-6 rounded bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-300">
<iconify-icon icon="lucide:layers" width="12"></iconify-icon>
</div>
<h4 className="text-xs font-bold text-white uppercase tracking-widest font-display">Services</h4>
</div>
<div className="pl-4 border-l border-white/10 space-y-4">
<a className="block group" href="#">
<div className="text-sm font-medium text-white group-hover:text-brand-500 transition-colors">Studio Time</div>
<div className="text-xs text-neutral-500 mt-1">Record in person</div>
</a>
<a className="block group" href="#">
<div className="text-sm font-medium text-white group-hover:text-brand-500 transition-colors">Consulting</div>
<div className="text-xs text-neutral-500 mt-1">Strategic Advisory</div>
</a>
</div>
</div>

<div className="border-t border-white/5 pt-6 space-y-6">
<a className="block text-base font-medium text-neutral-300 hover:text-white transition-colors" href="#system">System</a>
<a className="block text-base font-medium text-neutral-300 hover:text-white transition-colors" href="#results">Results</a>
<a className="block text-base font-medium text-neutral-300 hover:text-white transition-colors" href="#story">Founder</a>
</div>
</div>
<div className="p-6 border-t border-white/5 bg-[#050505]">
<button className="shiny-cta w-full flex justify-center" data-action="book">
<span>Book Strategy Call</span>
</button>
</div>
</div>
<main className="relative z-10 pt-32 pb-24">

<section className="mx-auto max-w-7xl px-6 mb-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="max-w-xl">
<div className="animate-on-scroll mb-8 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-900/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-brand-500 shadow-sm">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-500"></span>
</span>
            Trusted by Founders Generating $1M–$8M+
          </div>
<h1 className="animate-on-scroll font-display text-5xl md:text-7xl leading-[0.95] tracking-tight mb-6 heading-gradient">
            Record Once.
            <br/>
<span className="text-neutral-500">Sell Forever.</span>
</h1>
<p className="animate-on-scroll text-lg font-light leading-relaxed text-neutral-400 tracking-tight mb-8 max-w-md">
            We build content systems that duplicate your best sales moves — so
            your business scales without you doing more.
          </p>
<div className="animate-on-scroll flex flex-col sm:flex-row gap-6 items-center sm:items-stretch">

<button className="shiny-cta" data-action="book">
<span>Book A Call</span>
</button>

<button className="inline-flex h-full min-h-[50px] items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10" data-action="scroll-system">
              How the System Works
              <iconify-icon className="ml-2" icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="relative animate-on-scroll lg:pl-12">
<div className="relative rounded-2xl border border-brand-800/30 bg-[#050505] p-1 shadow-2xl">
<div className="relative rounded-xl bg-[#080808] overflow-hidden border border-white/5 aspect-[4/3]">
<div className="absolute top-0 w-full h-8 bg-[#0C0C0C] border-b border-white/5 flex items-center px-3 gap-2">
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
</div>
<div className="w-24 h-2 rounded-full bg-neutral-800 ml-2"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative">
<div className="absolute inset-0 border border-brand-500/10 rounded-full w-64 h-64 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"></div>
<div className="absolute inset-0 border border-brand-500/20 rounded-full w-48 h-48 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 border-dashed animate-[spin_10s_linear_infinite]"></div>
<div className="relative z-10 w-20 h-20 bg-black border border-brand-500/50 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(42,221,27,0.1)]">
<iconify-icon className="text-white" icon="lucide:mic" width="32"></iconify-icon>
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-24 flex flex-col items-center">
<div className="w-px h-12 bg-gradient-to-t from-brand-500/50 to-transparent"></div>
<div className="px-3 py-1 rounded bg-brand-900/20 border border-brand-500/30 text-[10px] text-brand-400 font-mono mt-2">ASSETS</div>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-24 flex flex-col-reverse items-center">
<div className="w-px h-12 bg-gradient-to-b from-brand-500/50 to-transparent"></div>
<div className="px-3 py-1 rounded bg-brand-900/20 border border-brand-500/30 text-[10px] text-brand-400 font-mono mb-2">GROWTH</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-brand-800/20 bg-[#030303] py-24 relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"></div>
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div className="animate-on-scroll">
<h2 className="font-display text-4xl md:text-5xl tracking-tight leading-none heading-gradient">
              You’re not stuck because of your offer.
            </h2>
<h2 className="mt-4 font-display text-4xl md:text-5xl font-medium text-neutral-600 tracking-tight leading-none">
              You’re stuck because you’re the one selling it.
            </h2>
</div>
<div className="animate-on-scroll flex flex-col justify-center space-y-6">
<div className="space-y-4 text-neutral-400 text-lg font-light leading-relaxed">
<p>Most founders hit the same wall. They’re in every pitch. Every call. Every follow-up.</p>
<p className="pl-4 border-l border-brand-500/30 text-neutral-300">The business grows… But it still depends on them.</p>
<p>PodLab exists to remove you from that bottleneck — with systems that sell for you.</p>
</div>

<button className="inline-flex items-center gap-2 text-brand-500 font-medium text-sm hover:text-white transition-colors text-left" data-action="scroll-system">
              See the PodLab Growth System
              <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-32 mx-auto max-w-7xl px-6" id="system">
<div className="mb-16 md:flex md:items-end md:justify-between">
<div className="animate-on-scroll max-w-2xl">
<h2 className="font-display text-3xl md:text-4xl mb-4 heading-gradient">This isn’t content. It’s a system.</h2>
<p className="text-neutral-400 font-light">One integrated framework designed to clarify your message, elevate your brand, and install the sales assets you need for predictable scale.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="animate-on-scroll group glass-panel p-8 rounded-2xl hover:bg-white/[0.03] transition-all duration-300">
<div className="mb-6 inline-flex rounded-lg border border-brand-500/20 bg-brand-500/10 p-2.5 text-brand-500">
<iconify-icon icon="lucide:focus" width="20"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-semibold text-white">AssetsLab</h3>
<p className="text-sm leading-relaxed text-neutral-400">The clarity that positions you as the category leader.</p>
</div>
<div className="animate-on-scroll group glass-panel p-8 rounded-2xl hover:bg-white/[0.03] transition-all duration-300">
<div className="mb-6 inline-flex rounded-lg border border-brand-500/20 bg-brand-500/10 p-2.5 text-brand-500">
<iconify-icon icon="lucide:hexagon" width="20"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-semibold text-white">BrandLab</h3>
<p className="text-sm leading-relaxed text-neutral-400">A premium identity engineered for authority and trust.</p>
</div>
<div className="animate-on-scroll group glass-panel p-8 rounded-2xl hover:bg-white/[0.03] transition-all duration-300">
<div className="mb-6 inline-flex rounded-lg border border-brand-500/20 bg-brand-500/10 p-2.5 text-brand-500">
<iconify-icon icon="lucide:layout-template" width="20"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-semibold text-white">SiteLab</h3>
<p className="text-sm leading-relaxed text-neutral-400">A conversion-first website that removes you from the sales cycle.</p>
</div>
<div className="animate-on-scroll group glass-panel p-8 rounded-2xl hover:bg-white/[0.03] transition-all duration-300 lg:col-span-1.5">
<div className="mb-6 inline-flex rounded-lg border border-brand-500/20 bg-brand-500/10 p-2.5 text-brand-500">
<iconify-icon icon="lucide:video" width="20"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-semibold text-white">VideoSalesLab</h3>
<p className="text-sm leading-relaxed text-neutral-400">Your digital sales team — built in one day.</p>
</div>
<div className="animate-on-scroll group glass-panel p-8 rounded-2xl hover:bg-white/[0.03] transition-all duration-300 lg:col-span-1.5 lg:col-start-2">
<div className="mb-6 inline-flex rounded-lg border border-brand-500/20 bg-brand-500/10 p-2.5 text-brand-500">
<iconify-icon icon="lucide:trending-up" width="20"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-semibold text-white">ExpansionLab</h3>
<p className="text-sm leading-relaxed text-neutral-400">Ongoing campaigns that turn your message into momentum.</p>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-brand-800/20">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="animate-on-scroll lg:col-span-5">
<h2 className="font-display text-4xl mb-6 tracking-tight heading-gradient">The team you call when you’re ready to scale for real.</h2>
<p className="text-neutral-400 text-lg font-light mb-8">PodLab wasn’t built for beginners. It was built for founders who already have traction — but need the systems, clarity, and infrastructure to reach the next level without burning out.</p>

<button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-medium text-white transition-all hover:bg-white/10 hover:border-brand-500/30" data-action="book">
              Book the 15-Minute Call
              <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</button>
</div>
<div className="lg:col-span-7 grid gap-6">
<div className="animate-on-scroll flex gap-4 p-4 rounded-xl border border-transparent hover:border-brand-800/30 transition-colors">
<div className="shrink-0 w-10 h-10 rounded bg-brand-900/20 flex items-center justify-center text-brand-500">
<iconify-icon icon="lucide:shield" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Discipline</h4>
<p className="text-sm text-neutral-500">Military-grade precision meets brand and marketing strategy.</p>
</div>
</div>
<div className="animate-on-scroll flex gap-4 p-4 rounded-xl border border-transparent hover:border-brand-800/30 transition-colors">
<div className="shrink-0 w-10 h-10 rounded bg-brand-900/20 flex items-center justify-center text-brand-500">
<iconify-icon icon="lucide:cpu" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Systems</h4>
<p className="text-sm text-neutral-500">One recording. Five strategic assets. Zero guesswork.</p>
</div>
</div>
<div className="animate-on-scroll flex gap-4 p-4 rounded-xl border border-transparent hover:border-brand-800/30 transition-colors">
<div className="shrink-0 w-10 h-10 rounded bg-brand-900/20 flex items-center justify-center text-brand-500">
<iconify-icon icon="lucide:award" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Authority</h4>
<p className="text-sm text-neutral-500">We engineer trust at scale — with assets backed by data, not theory.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="results">
<div className="mx-auto max-w-7xl px-6 text-center mb-16">
<h2 className="animate-on-scroll font-display text-3xl md:text-5xl mb-4 heading-gradient">Systems that turn overwhelmed<br/>operators into confident CEOs.</h2>
<p className="animate-on-scroll text-neutral-400 mt-4 max-w-2xl mx-auto">You don’t need more content. You need assets that work while you don’t.</p>
</div>
<div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="animate-on-scroll col-span-1 md:col-span-2 glass-panel p-8 rounded-2xl flex flex-col justify-between">
<div className="flex items-center gap-4 mb-8">
<div className="h-12 w-12 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
<span className="text-lg font-bold text-white">JD</span>
</div>
<div>
<div className="text-white font-medium">John Doe</div>
<div className="text-xs text-neutral-500">Founder, TechScale</div>
</div>
</div>
<p className="text-xl text-neutral-300 font-light italic">"We replaced our entire outbound team with the assets PodLab built. The clarity alone added $2M to our pipeline."</p>
</div>
<div className="animate-on-scroll glass-panel p-8 rounded-2xl flex flex-col items-center justify-center text-center">
<div className="text-5xl font-bold text-white mb-2">300%</div>
<div className="text-xs font-mono text-brand-500 uppercase tracking-widest">Conversion Increase</div>
</div>
<div className="animate-on-scroll glass-panel p-8 rounded-2xl">
<p className="text-neutral-400 text-sm mb-6">"Before PodLab, I was on 20 calls a week. Now I take 3 high-leverage calls, and the system does the rest."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-brand-500"></div>
<div className="text-xs font-bold text-white">Sarah Jenkins, CEO</div>
</div>
</div>
<div className="animate-on-scroll glass-panel p-8 rounded-2xl md:col-span-2">
<div className="grid grid-cols-2 gap-8">
<div>
<div className="text-xs text-neutral-500 mb-1">Sales Efficiency</div>
<div className="text-2xl text-white font-medium">High</div>
<div className="w-full bg-neutral-800 h-1 mt-2 rounded-full overflow-hidden">
<div className="bg-brand-500 h-full w-[90%]"></div>
</div>
</div>
<div>
<div className="text-xs text-neutral-500 mb-1">Founder Time Saved</div>
<div className="text-2xl text-white font-medium">20hrs/wk</div>
<div className="w-full bg-neutral-800 h-1 mt-2 rounded-full overflow-hidden">
<div className="bg-brand-500 h-full w-[85%]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-brand-800/20 bg-[#050505]">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center mb-12">
<h2 className="animate-on-scroll font-display text-3xl heading-gradient">How the PodLab System Works</h2>
<p className="animate-on-scroll mt-4 text-neutral-400 font-light">A strategic framework designed to remove you from day-to-day selling.</p>
</div>
<div className="animate-on-scroll relative w-full aspect-video rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden group shadow-2xl">
<div className="absolute inset-0 flex items-center justify-center z-10">
<button className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-transform group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-black group-hover:border-transparent">
<iconify-icon className="ml-1" icon="lucide:play" width="24"></iconify-icon>
</button>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black opacity-50"></div>
<div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-80"></div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-[#050505] to-[#020202] border-t border-brand-800/20" id="story">
<div className="mx-auto max-w-5xl px-6">
<div className="glass-panel rounded-3xl p-8 md:p-12 border border-brand-500/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
<div className="animate-on-scroll md:col-span-4">
<div className="aspect-[3/4] rounded-xl bg-neutral-900 border border-white/10 relative overflow-hidden grayscale contrast-125">
<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
<iconify-icon className="text-neutral-600 opacity-50" icon="lucide:user" width="48"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<div className="text-white font-bold">Hiram Andino</div>
<div className="text-[10px] text-brand-500 uppercase tracking-widest font-mono">Founder</div>
</div>
</div>
</div>
<div className="animate-on-scroll md:col-span-8">
<h2 className="font-display text-3xl mb-6 heading-gradient">The precision came from the Army. The results came from business.</h2>
<div className="space-y-4 text-neutral-400 font-light leading-relaxed">
<p>I’m Hiram Andino — Combat Army veteran, host of How It Started, and founder of PodLab.</p>
<p>Across deployments and a decade in sales leadership, I learned one core truth: <span className="text-white font-normal">Businesses don’t break because of their offer. They break because the founder becomes the bottleneck.</span></p>
<p>PodLab was built to solve that.</p>
</div>
<div className="mt-8">

<button className="group flex items-center gap-3 text-white font-medium hover:text-brand-500 transition-colors" data-action="book">
                  Meet With Hiram (15-Minute Call)
                  <iconify-icon className="transition-transform group-hover:translate-x-1" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-[radial-gradient(ellipse_at_center,_var(--accent-glow),_transparent_70%)] opacity-30 blur-3xl pointer-events-none"></div>
<div className="mx-auto max-w-3xl px-6 text-center">
<h2 className="animate-on-scroll font-display text-5xl md:text-6xl mb-6 tracking-tight heading-gradient">Ready to scale without burning out?</h2>
<p className="animate-on-scroll text-lg text-neutral-400 mb-10">This is the team you call when you’re ready to scale for real.</p>
<div className="animate-on-scroll flex flex-col items-center gap-6">

<button className="shiny-cta" data-action="book">
<span>Book My 15-Minute Strategy Call</span>
</button>

<button className="text-xs text-neutral-500 hover:text-white transition-colors" data-action="scroll-system">
            Browse the PodLab Growth System →
          </button>
</div>
</div>
</section>
</main>

<footer className="border-t border-brand-800/20 bg-[#020202] py-12">
<div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-600" icon="lucide:mic-2" width="16"></iconify-icon>
<span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
          PodLab Systems
        </span>
</div>
<p className="text-[10px] text-neutral-700">
        © 2024 PodLab. All rights reserved. Precision Engineered.
      </p>
</div>
</footer>

    </>
  );
}
