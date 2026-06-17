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



  (function () {
    const style = document.createElement("style");
    style.textContent = `
      .animate-on-scroll { animation-play-state: paused !important; }
      .animate-on-scroll.animate { animation-play-state: running !important; }
    `;
    document.head.appendChild(style);

    const once = true;
    if (!window.__inViewIO) {
      window.__inViewIO = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            if (once) window.__inViewIO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
    }
    window.initInViewAnimations = function (selector = ".animate-on-scroll") {
      document.querySelectorAll(selector).forEach((el) => {
        window.__inViewIO.observe(el);
      });
    };
    document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
  })();



  // Mobile menu logic
  const mobileBtn = document.getElementById('mobileMenuToggle');
  if (mobileBtn) {
    mobileBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Mobile menu toggled'); 
    });
  }
  
  // Year
  document.getElementById('year').textContent = new Date().getFullYear();

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
      
<style>
  @keyframes fadeSlideIn {
    0% { opacity: 0; transform: translateY(30px); filter: blur(8px); }
    100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
  }
  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
  }
  .animate-marquee {
    display: flex;
    white-space: nowrap;
    animation: marquee 30s linear infinite;
  }
</style>


<div className="overflow-y-auto transition-opacity duration-500 w-full h-full" id="landing-view">
<header className="overflow-hidden relative">
<div className="absolute inset-0" data-container-bg="true">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>
</div>
<div className="absolute inset-0 -z-10 w-full h-full pointer-events-none" style={{maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent)'}}>
</div>
<div className="sm:px-6 lg:px-8 max-w-7xl mx-auto px-4 relative z-10">

<nav className="flex mt-6 items-center justify-between">
<a className="flex items-center gap-2" href="/">
<span className="text-xl font-semibold tracking-tight text-white font-geist flex items-center gap-2">
<iconify-icon className="text-blue-500 text-2xl" icon="solar:globus-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
              VARNION
            </span>
</a>
<div className="hidden md:flex md:gap-x-2 border rounded-full p-1 backdrop-blur-lg gap-x-2 items-center border-white/10 bg-white/5">
<a className="text-sm font-medium font-geist px-3 py-2 hover:text-white text-slate-300 transition-colors" href="#services">Services</a>
<a className="px-3 py-2 text-sm font-medium font-geist text-slate-300 hover:text-white transition-colors" href="#cloudone">CloudOne</a>
<a className="px-3 py-2 text-sm font-medium font-geist text-slate-300 hover:text-white transition-colors" href="#why-us">Why Us</a>
<div className="relative inline-block group rounded-full">
<a className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] relative z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] border px-6 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] text-xs rounded-full cursor-pointer inline-flex text-white border-blue-500/30 bg-blue-600/20 hover:bg-blue-600/30" href="#contact">
<span className="relative z-10 font-medium text-xs font-geist">Consult Now</span>
</a>
</div>
</div>
<button className="md:hidden inline-flex text-sm font-medium font-geist border rounded-lg p-2 backdrop-blur items-center border-white/10 bg-white/5 text-slate-300" id="mobileMenuToggle">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</button>
</nav>

<section className="pt-24 md:pt-40 pb-20 md:pb-32 relative text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-white/10 text-blue-400 bg-blue-500/10 text-xs font-medium font-geist [animation:fadeSlideIn_1s_ease-out_0.1s_both] opacity-0">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
            Varnion ISP
          </div>
<h1 className="text-5xl sm:text-6xl md:text-7xl [animation:fadeSlideIn_1s_ease-out_0.2s_forwards] tracking-tight font-semibold font-geist opacity-0 max-w-4xl text-white leading-tight">
            Internet Service Provider<br/>
<span className="text-slate-400">With Application-Based Solutions.</span>
</h1>
<p className="sm:text-lg [animation:fadeSlideIn_1s_ease-out_0.3s_both] text-base font-medium font-geist max-w-2xl mt-6 text-slate-400">
            Elevate your business's digital transformation with the cutting-edge internet connection and application solutions from Varnion.
          </p>
<div className="flex flex-col sm:flex-row [animation:fadeSlideIn_1s_ease-out_0.4s_both] mt-10 gap-4 items-center justify-center">
<a className="group inline-flex min-w-[160px] cursor-pointer transition-all duration-500 hover:-translate-y-1 overflow-hidden items-center justify-center hover:bg-slate-200 hover:border-slate-200 hover:text-black text-sm font-medium text-white tracking-tight bg-white border-white border rounded-full pt-3 pr-6 pb-3 pl-6 relative" href="#contact">
<span className="text-slate-950 font-geist">Consult Now</span>
</a>
<a className="inline-flex items-center gap-2 text-sm font-medium border rounded-full px-6 py-3 backdrop-blur font-geist hover:bg-white/10 text-slate-300 border-white/10 bg-white/5 transition-colors" href="#services">
              Explore Services
              <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
</div>
</section>
</div>
</header>

<section className="border-y border-white/5 bg-white/[0.02] py-4 overflow-hidden relative">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
<div className="flex animate-marquee gap-12 items-center opacity-40">

<div className="flex items-center gap-2 font-geist text-sm font-medium uppercase tracking-wider text-slate-500"><iconify-icon className="text-lg" icon="solar:shield-network-linear"></iconify-icon> V-Logo</div>
<div className="flex items-center gap-2 font-geist text-sm font-medium uppercase tracking-wider text-slate-500"><iconify-icon className="text-lg" icon="solar:shield-network-linear"></iconify-icon> V-Logo</div>
<div className="flex items-center gap-2 font-geist text-sm font-medium uppercase tracking-wider text-slate-500"><iconify-icon className="text-lg" icon="solar:cloud-linear"></iconify-icon> Cloud</div>
<div className="flex items-center gap-2 font-geist text-sm font-medium uppercase tracking-wider text-slate-500"><iconify-icon className="text-lg" icon="solar:cloud-linear"></iconify-icon> Cloud</div>
<div className="flex items-center gap-2 font-geist text-sm font-medium uppercase tracking-wider text-slate-500"><iconify-icon className="text-lg" icon="solar:cloud-linear"></iconify-icon> Cloud</div>
<div className="flex items-center gap-2 font-geist text-sm font-medium uppercase tracking-wider text-slate-500"><iconify-icon className="text-lg" icon="solar:cloud-linear"></iconify-icon> Cloud</div>
<div className="flex items-center gap-2 font-geist text-sm font-medium uppercase tracking-wider text-slate-500"><iconify-icon className="text-lg" icon="solar:shield-network-linear"></iconify-icon> V-Logo</div>
<div className="flex items-center gap-2 font-geist text-sm font-medium uppercase tracking-wider text-slate-500"><iconify-icon className="text-lg" icon="solar:shield-network-linear"></iconify-icon> V-Logo</div>
<div className="flex items-center gap-2 font-geist text-sm font-medium uppercase tracking-wider text-slate-500"><iconify-icon className="text-lg" icon="solar:cloud-linear"></iconify-icon> Cloud</div>
<div className="flex items-center gap-2 font-geist text-sm font-medium uppercase tracking-wider text-slate-500"><iconify-icon className="text-lg" icon="solar:cloud-linear"></iconify-icon> Cloud</div>
<div className="flex items-center gap-2 font-geist text-sm font-medium uppercase tracking-wider text-slate-500"><iconify-icon className="text-lg" icon="solar:cloud-linear"></iconify-icon> Cloud</div>
<div className="flex items-center gap-2 font-geist text-sm font-medium uppercase tracking-wider text-slate-500"><iconify-icon className="text-lg" icon="solar:cloud-linear"></iconify-icon> Cloud</div>

<div className="flex items-center gap-2 font-geist text-sm font-medium uppercase tracking-wider text-slate-500"><iconify-icon className="text-lg" icon="solar:shield-network-linear"></iconify-icon> V-Logo</div>
<div className="flex items-center gap-2 font-geist text-sm font-medium uppercase tracking-wider text-slate-500"><iconify-icon className="text-lg" icon="solar:cloud-linear"></iconify-icon> Cloud</div>
</div>
</section>

<section className="relative py-24 md:py-32">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-xs font-semibold tracking-wider uppercase font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] text-blue-500">The Digital Revolution</h2>
<h3 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold font-geist tracking-tight animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both] text-white leading-tight">
          Pioneers at the forefront<br/>of connectivity.
        </h3>
<p className="mt-8 text-lg sm:text-xl font-geist leading-relaxed text-slate-400 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both] max-w-2xl mx-auto">
          Connecting the internet world through a vision of <span className="text-white">“TECHNOLOGY FOR EVERYONE”</span> and boundless innovation to build a resilient digital foundation for your business.
        </p>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 relative" id="services">
<div className="mb-12 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<h2 className="text-3xl md:text-4xl font-semibold font-geist tracking-tight text-white">Core Infrastructure</h2>
<p className="mt-3 text-base font-geist text-slate-400 max-w-xl">Robust, high-performance solutions tailored for enterprise demands.</p>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both] flex flex-col h-full">
<div className="p-3 border rounded-xl bg-blue-500/10 border-blue-500/20 w-fit mb-6 text-blue-400">
<iconify-icon className="text-2xl" icon="solar:routing-3-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight font-geist text-white mb-3">Varnion HighSpeed</h3>
<p className="text-sm font-geist leading-relaxed text-slate-400 flex-grow mb-6">
            Reliable premium internet service from Varnion: Dedicated 1:1 with a stable, symmetrical connection and direct access to the international backbone.
          </p>
<a className="inline-flex items-center gap-2 text-sm font-medium font-geist text-white group-hover:text-blue-400 transition-colors" href="#">
            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both] flex flex-col h-full">
<div className="p-3 border rounded-xl bg-indigo-500/10 border-indigo-500/20 w-fit mb-6 text-indigo-400">
<iconify-icon className="text-2xl" icon="solar:server-square-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight font-geist text-white mb-3">Managed Service</h3>
<p className="text-sm font-geist leading-relaxed text-slate-400 flex-grow mb-6">
            Transform CapEx into OpEx: Increase efficiency through Fiber and Wi-Fi networks, as well as enjoy the advantages of WiFi 6E technology and ultra 10Gb speed in your area.
          </p>
<a className="inline-flex items-center gap-2 text-sm font-medium font-geist text-white group-hover:text-indigo-400 transition-colors" href="#">
            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both] flex flex-col h-full">
<div className="p-3 border rounded-xl bg-cyan-500/10 border-cyan-500/20 w-fit mb-6 text-cyan-400">
<iconify-icon className="text-2xl" icon="solar:database-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight font-geist text-white mb-3">Varnion Datacenter</h3>
<p className="text-sm font-geist leading-relaxed text-slate-400 flex-grow mb-6">
            Optimize your system's performance and security with the latest data center solutions from Varnion, built for maximum uptime.
          </p>
<a className="inline-flex items-center gap-2 text-sm font-medium font-geist text-white group-hover:text-cyan-400 transition-colors" href="#">
            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-slate-900/10 relative" id="cloudone">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<span className="inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium backdrop-blur font-geist border-blue-500/20 text-blue-400 bg-blue-500/10 mb-4">Application Suite</span>
<h2 className="text-3xl md:text-5xl font-semibold font-geist tracking-tight text-white">Varnion CloudOne</h2>
<p className="mt-4 font-geist text-slate-400 max-w-2xl mx-auto">Revolutionize your business with integrated cloud solutions. Enjoy superior bandwidth management, advanced task management systems, and intuitive TV control.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="relative flex flex-col items-center text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<div className="w-16 h-16 rounded-2xl border flex items-center justify-center relative z-10 mb-6 bg-black border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold font-geist mb-3 text-white">Megalos</h3>
<p className="text-sm font-geist leading-relaxed text-slate-400">Advanced technology in bandwidth management, User Management System, Integrated Analytics, and seamlessly integrated with your company's internal systems.</p>
</div>

<div className="relative flex flex-col items-center text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
<div className="w-16 h-16 rounded-2xl border flex items-center justify-center relative z-10 mb-6 bg-black border-blue-500/40 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
<iconify-icon className="text-2xl" icon="solar:smart-home-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold font-geist mb-3 text-white">Keponet</h3>
<p className="text-sm font-geist leading-relaxed text-slate-400">Upgrade the guest journey with Varnion’s internet hospitality suite—smart ecosystem app for next-gen connectivity and 24/7 care from the best hotel ISP in Indonesia.</p>
</div>

<div className="relative flex flex-col items-center text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both]">
<div className="w-16 h-16 rounded-2xl border flex items-center justify-center relative z-10 mb-6 bg-black border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]">
<iconify-icon className="text-2xl" icon="solar:tv-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold font-geist mb-3 text-white">Vlepo</h3>
<p className="text-sm font-geist leading-relaxed text-slate-400">Digital entertainment solution focuses on content personalization and management of all TVs through a single dashboard.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="why-us">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold font-geist tracking-tight text-white">Your Reliable Partner in the Business Revolution</h2>
<p className="mt-4 font-geist text-slate-400">Varnioso team has been committed for 17 years to delivering effective, new-fashioned internet and technology solutions, supporting the needs of over 400 business partners.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<iconify-icon className="text-2xl text-blue-400 mb-4" icon="solar:widget-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<h3 className="text-base font-semibold font-geist text-white mb-2">App-based Solution</h3>
<p className="text-sm text-slate-400 font-geist leading-relaxed">Varnion CloudOne offers innovative, in-house solutions that enhance and strengthen business performance, seamlessly integrated into internal systems.</p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
<iconify-icon className="text-2xl text-blue-400 mb-4" icon="solar:verified-check-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<h3 className="text-base font-semibold font-geist text-white mb-2">100% SLA</h3>
<p className="text-sm text-slate-400 font-geist leading-relaxed">With a 100% SLA, we provide continual service to keep your business connected with maximum performance.</p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both]">
<iconify-icon className="text-2xl text-blue-400 mb-4" icon="solar:user-hand-up-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<h3 className="text-base font-semibold font-geist text-white mb-2">Personal Assistant Manager</h3>
<p className="text-sm text-slate-400 font-geist leading-relaxed">VICA: Varnion Intelligent Customer Assistance for advancing and managing your Internet network efficiently.</p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.5s_both]">
<iconify-icon className="text-2xl text-blue-400 mb-4" icon="solar:star-fall-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<h3 className="text-base font-semibold font-geist text-white mb-2">Superior Service</h3>
<p className="text-sm text-slate-400 font-geist leading-relaxed">Varnion’s Professional Squad: Committed to offering fast, innovative, and leading-edge service around the clock.</p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.6s_both]">
<iconify-icon className="text-2xl text-blue-400 mb-4" icon="solar:global-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<h3 className="text-base font-semibold font-geist text-white mb-2">Leading Infrastructure</h3>
<p className="text-sm text-slate-400 font-geist leading-relaxed">Focuses on reliability, optimal backbone capacity, and high security. With leading network intelligence, we ensure smooth operations.</p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.7s_both]">
<iconify-icon className="text-2xl text-blue-400 mb-4" icon="solar:leaf-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<h3 className="text-base font-semibold font-geist text-white mb-2">Sustainable Invention</h3>
<p className="text-sm text-slate-400 font-geist leading-relaxed">Connecting the world through creative and environmentally friendly innovations, creating positive transformations globally.</p>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02] border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<h2 className="text-3xl md:text-4xl font-semibold font-geist tracking-tight text-white">What They Say About Us</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl border border-white/10 bg-black flex flex-col animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<iconify-icon className="text-3xl text-blue-500/30 mb-6" icon="solar:quote-left-bold-duotone"></iconify-icon>
<p className="text-sm font-geist leading-relaxed text-slate-300 flex-grow mb-8">
              "We feel greatly assisted by the support and better internet connection from Varnion. The expertise of their team is proven, and the fast connectivity is especially helpful during major events."
            </p>
<div>
<p className="text-sm font-semibold font-geist text-white">Mr. Angga Agia Wardhana</p>
<p className="text-xs font-geist text-slate-500 mt-1">IT Manager, Langham Jakarta</p>
</div>
</div>

<div className="p-8 rounded-2xl border border-blue-500/20 bg-blue-900/10 flex flex-col shadow-[0_0_30px_rgba(59,130,246,0.05)] animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
<iconify-icon className="text-3xl text-blue-500/30 mb-6" icon="solar:quote-left-bold-duotone"></iconify-icon>
<p className="text-sm font-geist leading-relaxed text-slate-300 flex-grow mb-8">
              "The network almost never go down, and if it does, the backup kicks in within less than a minute. For service support, the response is quick and handled with patience. Scheduled regular visits are conducted to ensure every issue is promptly addressed."
            </p>
<div>
<p className="text-sm font-semibold font-geist text-white">Catur Taryatno</p>
<p className="text-xs font-geist text-slate-500 mt-1">IT Manager, AI Thamrin</p>
</div>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-black flex flex-col animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both]">
<iconify-icon className="text-3xl text-blue-500/30 mb-6" icon="solar:quote-left-bold-duotone"></iconify-icon>
<p className="text-sm font-geist leading-relaxed text-slate-300 flex-grow mb-8">
              "Always trust Varnion's service, which truly cares for its clients, from client visits to monitor their needs to organizing refreshing events. Moreover, Varnion's connection remains stable and optimal, with a support team that is always on standby and responds quickly."
            </p>
<div>
<p className="text-sm font-semibold font-geist text-white">Handiana</p>
<p className="text-xs font-geist text-slate-500 mt-1">IT Manager, Shang Ri La Hotel</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="contact">
<div className="max-w-3xl mx-auto px-6 text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<h2 className="text-3xl md:text-5xl font-semibold font-geist tracking-tight text-white mb-4">We Understand the Importance of Technology in Business</h2>
<p className="text-lg font-geist text-slate-400 mb-10">Consult now to receive the latest internet technology and best services from our experts.</p>
<form className="text-left border p-6 sm:p-10 rounded-2xl bg-white/[0.02] border-white/10 shadow-2xl">
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
<div className="col-span-1">
<label className="block text-xs font-medium mb-2 font-geist text-slate-400">Full Name</label>
<input className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-1 transition font-geist placeholder-slate-600 focus:border-blue-500 focus:ring-blue-500 border-white/10 text-white bg-black" placeholder="John Doe" type="text"/>
</div>
<div className="col-span-1">
<label className="block text-xs font-medium mb-2 font-geist text-slate-400">Company Email</label>
<input className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-1 transition font-geist placeholder-slate-600 focus:border-blue-500 focus:ring-blue-500 border-white/10 text-white bg-black" placeholder="john@company.com" type="email"/>
</div>
<div className="col-span-1 sm:col-span-2">
<label className="block text-xs font-medium mb-2 font-geist text-slate-400">Service Needed</label>
<div className="relative">
<select className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-1 transition font-geist appearance-none focus:border-blue-500 focus:ring-blue-500 border-white/10 text-white bg-black">
<option className="bg-black text-slate-400">Select a service</option>
<option className="bg-black">HighSpeed Internet</option>
<option className="bg-black">Managed Service</option>
<option className="bg-black">Datacenter</option>
<option className="bg-black">CloudOne Suite</option>
</select>
<iconify-icon className="pointer-events-none absolute right-4 top-3.5 h-4 w-4 text-slate-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="col-span-1 sm:col-span-2">
<label className="block text-xs font-medium mb-2 font-geist text-slate-400">Message</label>
<textarea className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-1 transition font-geist placeholder-slate-600 focus:border-blue-500 focus:ring-blue-500 border-white/10 text-white bg-black" placeholder="How can we help your business?" rows="4"></textarea>
</div>
</div>
<div className="mt-8 text-center sm:text-right">
<button className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition font-geist w-full sm:w-auto justify-center bg-white text-black hover:bg-slate-200" type="button">
                    Send Inquiry
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</button>
</div>
</form>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid gap-12 md:grid-cols-4 lg:grid-cols-5 mb-16">
<div className="lg:col-span-2">
<a className="flex items-center gap-2 mb-4" href="/">
<span className="text-xl font-semibold tracking-tight text-white font-geist flex items-center gap-2">
<iconify-icon className="text-blue-500 text-2xl" icon="solar:globus-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
                VARNION
              </span>
</a>
<p className="text-sm font-geist text-slate-400 max-w-sm mb-6">
              Cyber Building 3rd floor<br/>
              Kuningan Barat No. 8<br/>
              South Jakarta 12710 - Indonesia
            </p>
<div className="space-y-2 text-sm font-geist text-slate-400">
<p className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear"></iconify-icon> 085174166850</p>
<p className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> cs@varnion.net.id</p>
<p className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> appskeren@varnion.net.id</p>
</div>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight font-geist text-white mb-4">About Varnion</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="font-geist hover:text-white transition-colors" href="#">Vpedia</a></li>
<li><a className="font-geist hover:text-white transition-colors" href="#">Experience</a></li>
<li><a className="font-geist hover:text-white transition-colors" href="#">Meet Our CEO</a></li>
<li><a className="font-geist hover:text-white transition-colors" href="#">Varnioso</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight font-geist text-white mb-4">Service</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="font-geist hover:text-white transition-colors" href="#">HighSpeed</a></li>
<li><a className="font-geist hover:text-white transition-colors" href="#">Managed Service</a></li>
<li><a className="font-geist hover:text-white transition-colors" href="#">Datacenter</a></li>
<li><a className="font-geist hover:text-white transition-colors" href="#">CloudOne</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight font-geist text-white mb-4">Connect</h4>
<div className="flex gap-4 text-slate-400">
<a aria-label="Facebook" className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:mask-happly-linear"></iconify-icon></a>
<a aria-label="Instagram" className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon></a>
<a aria-label="YouTube" className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon></a>
<a aria-label="LinkedIn" className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon></a>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
<p className="text-xs font-geist text-slate-500">Copyright ©<span id="year">2026</span> PT. Varnion Technology Semesta</p>
<div className="flex gap-4 opacity-50">
<span className="text-[10px] font-geist tracking-wider uppercase border border-white/20 px-2 py-0.5 rounded">Sertifikasi</span>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
