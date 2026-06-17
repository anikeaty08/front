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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full z-50 bg-[#111111]/95 backdrop-blur-sm border-b border-white/5 transition-all duration-300">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-1 text-white group" href="#">
<iconify-icon className="text-[#E8222A] text-2xl group-hover:scale-110 transition-transform duration-300" icon="solar:bolt-linear"></iconify-icon>
<span className="font-condensed font-semibold text-3xl tracking-tighter uppercase">BRIX</span>
</a>

<div className="hidden lg:flex items-center gap-8 font-condensed uppercase tracking-widest text-xs font-semibold text-[#999999]">
<a className="hover:text-white transition-colors duration-200" href="#">About</a>
<a className="hover:text-white transition-colors duration-200" href="#">Services</a>
<a className="hover:text-white transition-colors duration-200" href="#">Careers</a>
<a className="hover:text-white transition-colors duration-200" href="#">Locations</a>
<a className="hover:text-white transition-colors duration-200" href="#">Blog</a>
<a className="hover:text-white transition-colors duration-200" href="#">FAQ</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex bg-[#E8222A] hover:bg-white hover:text-[#111111] transition-colors duration-300 text-white font-condensed font-semibold uppercase tracking-wider text-xs px-6 py-3 items-center justify-center rounded-none" href="#">Get a Quote</a>
<button className="lg:hidden text-white text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-zinc-900 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2069&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-luminosity opacity-30"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/50 to-transparent w-3/4"></div>
</div>
<div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-20 flex flex-col justify-center">
<span className="text-[#E8222A] font-condensed uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mb-6 flex items-center gap-3">
<span className="w-8 h-[1px] bg-[#E8222A]"></span>
                Licensed Electricians — Ipswich &amp; Brisbane
            </span>
<h1 className="font-condensed font-semibold text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.85] uppercase max-w-5xl mb-6">
                Electrical, Air Con &amp; Solar<br/>
<span className="text-[#999999]">— One Crew. One Call.</span>
</h1>
<p className="text-[#999999] text-base md:text-lg max-w-xl mb-12 leading-relaxed">
                Expert tradesmanship for residential and commercial projects. Serving South East Queensland with unwavering reliability since 2005.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#E8222A] hover:bg-white hover:text-[#111111] transition-colors duration-300 text-white font-condensed font-semibold uppercase tracking-wider text-sm px-8 py-4 text-center rounded-none flex items-center justify-center gap-2" href="#">
                    Get a Free Quote <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="border border-white/20 hover:border-white transition-colors duration-300 text-white font-condensed font-semibold uppercase tracking-wider text-sm px-8 py-4 text-center rounded-none inline-flex items-center justify-center gap-3" href="#">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon> Call 07 3060 9100
                </a>
</div>
</div>

<div className="absolute bottom-0 right-0 z-20 hidden md:flex border-l border-t border-white/10 bg-[#111111]/80 backdrop-blur-md">
<div className="p-8 border-l-4 border-[#E8222A]">
<div className="flex items-center gap-3 text-white font-condensed text-xl uppercase tracking-tight font-semibold">
<div className="flex text-[#E8222A]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
                    5★ Google Rated / 20+ Years
                </div>
</div>
</div>
</header>

<div className="bg-[#E8222A] w-full py-4 relative z-20 overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center text-white text-xs font-condensed tracking-widest uppercase font-semibold gap-x-8 gap-y-3">
<div className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon> Licensed &amp; Insured (Lic. 88304)</div>
<div className="hidden md:block w-1 h-1 bg-white/50 rounded-full"></div>
<div className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:star-circle-linear"></iconify-icon> 5-Star Google Rated</div>
<div className="hidden lg:block w-1 h-1 bg-white/50 rounded-full"></div>
<div className="hidden lg:flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon> Family Owned Since 2005</div>
<div className="hidden xl:block w-1 h-1 bg-white/50 rounded-full"></div>
<div className="hidden xl:flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:calculator-minimalistic-linear"></iconify-icon> Free Quotes</div>
<div className="hidden xl:block w-1 h-1 bg-white/50 rounded-full"></div>
<div className="hidden xl:flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:broom-linear"></iconify-icon> Clean Worksites</div>
</div>
</div>

<section className="py-32 px-6">
<div className="max-w-[1400px] mx-auto">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div>
<span className="text-[#E8222A] font-condensed uppercase tracking-[0.2em] text-xs font-semibold mb-4 flex items-center gap-3">
<span className="w-8 h-[1px] bg-[#E8222A]"></span>
                        What We Do
                    </span>
<h2 className="font-condensed font-semibold text-5xl md:text-7xl tracking-tighter uppercase text-white">Electrical, Air Con &amp; Solar</h2>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-white font-condensed uppercase tracking-widest text-xs font-semibold hover:text-[#E8222A] transition-colors pb-2 border-b border-white/20 hover:border-[#E8222A]" href="#">
                    View All Services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">

<a className="group relative aspect-square md:aspect-[3/4] bg-zinc-900 overflow-hidden block" href="#">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555964821-2e6b9195b6c2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-700 grayscale group-hover:grayscale-0"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-4">
<div className="w-10 h-[2px] bg-[#E8222A] mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
<h3 className="font-condensed text-3xl font-semibold uppercase tracking-tight mb-2 text-white">Residential Electrical</h3>
<p className="text-[#999999] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 h-0 group-hover:h-auto overflow-hidden">Complete home wiring, lighting, safety switches, and fault finding for your property.</p>
</div>
<div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:border-[#E8222A] group-hover:text-[#E8222A] group-hover:bg-[#E8222A]/10 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>

<a className="group relative aspect-square md:aspect-[3/4] bg-zinc-900 overflow-hidden block" href="#">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-700 grayscale group-hover:grayscale-0"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-4">
<div className="w-10 h-[2px] bg-[#E8222A] mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
<h3 className="font-condensed text-3xl font-semibold uppercase tracking-tight mb-2 text-white">Commercial Electrical</h3>
<p className="text-[#999999] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 h-0 group-hover:h-auto overflow-hidden">Large-scale installations, maintenance, fit-outs, and compliance testing.</p>
</div>
<div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:border-[#E8222A] group-hover:text-[#E8222A] group-hover:bg-[#E8222A]/10 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>

<a className="group relative aspect-square md:aspect-[3/4] bg-zinc-900 overflow-hidden block" href="#">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620601614002-31518fdf973b?q=80&amp;w=1964&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-700 grayscale group-hover:grayscale-0"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-4">
<div className="w-10 h-[2px] bg-[#E8222A] mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
<h3 className="font-condensed text-3xl font-semibold uppercase tracking-tight mb-2 text-white">Air Conditioning</h3>
<p className="text-[#999999] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 h-0 group-hover:h-auto overflow-hidden">Split systems &amp; ducted AC installation, servicing, and deep cleaning.</p>
</div>
<div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:border-[#E8222A] group-hover:text-[#E8222A] group-hover:bg-[#E8222A]/10 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>

<a className="group relative aspect-square md:aspect-[3/4] bg-zinc-900 overflow-hidden block" href="#">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-120023a8e9e4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-700 grayscale group-hover:grayscale-0"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-4">
<div className="w-10 h-[2px] bg-[#E8222A] mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
<h3 className="font-condensed text-3xl font-semibold uppercase tracking-tight mb-2 text-white">Solar &amp; Battery</h3>
<p className="text-[#999999] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 h-0 group-hover:h-auto overflow-hidden">High-yield solar panel systems, battery storage solutions, and optimization.</p>
</div>
<div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:border-[#E8222A] group-hover:text-[#E8222A] group-hover:bg-[#E8222A]/10 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#141414]">
<div className="max-w-[1400px] mx-auto px-6">
<span className="text-[#E8222A] font-condensed uppercase tracking-[0.2em] text-xs font-semibold mb-4 flex items-center gap-3">
<span className="w-8 h-[1px] bg-[#E8222A]"></span>
                Why BRIX
            </span>
<div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
<h2 className="font-condensed font-semibold text-5xl md:text-7xl tracking-tighter uppercase text-white max-w-2xl leading-[0.9]">One Crew.<br/>Every Service.<br/><span className="text-[#999999]">Zero Referrals.</span></h2>
<div className="max-w-md flex flex-col justify-end">
<p className="text-[#999999] text-base leading-relaxed mb-8">We don't outsource your trust. When you call BRIX, you get the BRIX team. From fixing a power point to installing a full commercial solar array, our in-house experts handle it all.</p>
<a className="inline-flex items-center gap-2 text-white font-condensed uppercase tracking-widest text-xs font-semibold hover:text-[#E8222A] transition-colors pb-2 border-b border-white/20 hover:border-[#E8222A] self-start" href="#">
                        Talk to Our Team <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="border-t-2 border-[#E8222A] pt-8">
<h3 className="font-condensed text-3xl font-semibold uppercase tracking-tight mb-4 text-white">20+ Years Experience</h3>
<p className="text-[#999999] text-sm leading-relaxed">A family-owned business established in 2005, we bring decades of hands-on technical expertise to every single job site.</p>
</div>
<div className="border-t-2 border-white/10 hover:border-[#E8222A] transition-colors duration-300 pt-8">
<h3 className="font-condensed text-3xl font-semibold uppercase tracking-tight mb-4 text-white">All-in-One Service</h3>
<p className="text-[#999999] text-sm leading-relaxed">Stop coordinating multiple trades. We supply, install, and maintain your electrical, air conditioning, and solar seamlessly.</p>
</div>
<div className="border-t-2 border-white/10 hover:border-[#E8222A] transition-colors duration-300 pt-8">
<h3 className="font-condensed text-3xl font-semibold uppercase tracking-tight mb-4 text-white">Customer-First Approach</h3>
<p className="text-[#999999] text-sm leading-relaxed">Upfront pricing, clean worksites, and reliable communication. We respect your property and your time as if it were our own.</p>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-[#111111]">
<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5 border-l border-r border-white/5">
<div className="py-16 text-center group cursor-default hover:bg-white/5 transition-colors">
<div className="font-condensed text-6xl lg:text-7xl font-semibold text-[#E8222A] tracking-tighter mb-2 group-hover:scale-105 transition-transform duration-300">20+</div>
<div className="uppercase text-xs font-condensed tracking-[0.2em] font-semibold text-[#999999]">Years Active</div>
</div>
<div className="py-16 text-center group cursor-default hover:bg-white/5 transition-colors">
<div className="font-condensed text-6xl lg:text-7xl font-semibold text-[#E8222A] tracking-tighter mb-2 group-hover:scale-105 transition-transform duration-300">500+</div>
<div className="uppercase text-xs font-condensed tracking-[0.2em] font-semibold text-[#999999]">Projects Completed</div>
</div>
<div className="py-16 text-center group cursor-default hover:bg-white/5 transition-colors">
<div className="font-condensed text-6xl lg:text-7xl font-semibold text-[#E8222A] tracking-tighter mb-2 group-hover:scale-105 transition-transform duration-300">5★</div>
<div className="uppercase text-xs font-condensed tracking-[0.2em] font-semibold text-[#999999]">Google Rating</div>
</div>
<div className="py-16 text-center group cursor-default hover:bg-white/5 transition-colors">
<div className="font-condensed text-6xl lg:text-7xl font-semibold text-[#E8222A] tracking-tighter mb-2 group-hover:scale-105 transition-transform duration-300">100%</div>
<div className="uppercase text-xs font-condensed tracking-[0.2em] font-semibold text-[#999999]">Licensed &amp; Insured</div>
</div>
</div>
</section>

<section className="py-4 bg-[#0a0a0a] border-b border-white/5 overflow-hidden flex relative">
<div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
<div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>
<div className="w-[200%] flex animate-ticker font-condensed uppercase tracking-widest text-sm font-semibold text-[#999999] whitespace-nowrap">

<div className="w-1/2 flex justify-around items-center px-4">
<span className="flex items-center gap-2"><iconify-icon className="text-[#E8222A]" icon="solar:chat-round-check-linear"></iconify-icon> "Replied on a Sunday — legend."</span>
<span className="text-white/20">•</span>
<span className="text-white">Authorised Daikin Dealer</span>
<span className="text-white/20">•</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#E8222A]" icon="solar:shield-check-linear"></iconify-icon> Fronius Service Partner</span>
<span className="text-white/20">•</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#E8222A]" icon="solar:medal-star-linear"></iconify-icon> Master Electricians</span>
<span className="text-white/20">•</span>
<span className="text-white">"Cleanest tradies I've hired."</span>
<span className="text-white/20">•</span>
<span>Licensed Contractor 88304</span>
</div>

<div className="w-1/2 flex justify-around items-center px-4">
<span className="flex items-center gap-2"><iconify-icon className="text-[#E8222A]" icon="solar:chat-round-check-linear"></iconify-icon> "Replied on a Sunday — legend."</span>
<span className="text-white/20">•</span>
<span className="text-white">Authorised Daikin Dealer</span>
<span className="text-white/20">•</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#E8222A]" icon="solar:shield-check-linear"></iconify-icon> Fronius Service Partner</span>
<span className="text-white/20">•</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#E8222A]" icon="solar:medal-star-linear"></iconify-icon> Master Electricians</span>
<span className="text-white/20">•</span>
<span className="text-white">"Cleanest tradies I've hired."</span>
<span className="text-white/20">•</span>
<span>Licensed Contractor 88304</span>
</div>
</div>
</section>

<section className="py-32 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-900/40 via-[#111111] to-[#111111]">
<div className="max-w-[1400px] mx-auto px-6">
<span className="text-[#E8222A] font-condensed uppercase tracking-[0.2em] text-xs font-semibold mb-4 flex items-center gap-3">
<span className="w-8 h-[1px] bg-[#E8222A]"></span>
                Client Reviews
            </span>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<h2 className="font-condensed font-semibold text-5xl md:text-7xl tracking-tighter uppercase text-white max-w-2xl">What Our Clients Say.</h2>
<div className="flex gap-2">
<button className="w-12 h-12 border border-white/20 rounded-none flex items-center justify-center text-white hover:bg-[#E8222A] hover:border-[#E8222A] transition-colors"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon></button>
<button className="w-12 h-12 border border-white/20 rounded-none flex items-center justify-center text-white hover:bg-[#E8222A] hover:border-[#E8222A] transition-colors"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8 -mx-6 px-6 lg:mx-0 lg:px-0">

<div className="min-w-[320px] md:min-w-[450px] bg-[#161616] border border-white/5 p-10 snap-start flex flex-col justify-between group hover:border-white/20 transition-colors">
<iconify-icon className="text-5xl text-white/5 mb-8 group-hover:text-[#E8222A]/20 transition-colors" icon="solar:quote-left-bold"></iconify-icon>
<p className="text-white text-lg leading-relaxed mb-10">"Absolutely professional from start to finish. They upgraded our switchboard and installed a new Daikin split system. Cleaned up after themselves and explained everything perfectly."</p>
<div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
<div>
<div className="font-condensed font-semibold text-xl tracking-tight uppercase text-white">Ashley Knight</div>
<div className="flex text-[#E8222A] text-sm mt-1 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-semibold text-xl">G</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[450px] bg-[#161616] border border-white/5 p-10 snap-start flex flex-col justify-between group hover:border-white/20 transition-colors">
<iconify-icon className="text-5xl text-white/5 mb-8 group-hover:text-[#E8222A]/20 transition-colors" icon="solar:quote-left-bold"></iconify-icon>
<p className="text-white text-lg leading-relaxed mb-10">"Responded to our emergency callout within the hour. The team was incredibly knowledgeable and got our factory back online faster than expected. Highly recommend BRIX."</p>
<div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
<div>
<div className="font-condensed font-semibold text-xl tracking-tight uppercase text-white">Rebecca Dencio</div>
<div className="flex text-[#E8222A] text-sm mt-1 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-semibold text-xl">G</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[450px] bg-[#161616] border border-white/5 p-10 snap-start flex flex-col justify-between group hover:border-white/20 transition-colors">
<iconify-icon className="text-5xl text-white/5 mb-8 group-hover:text-[#E8222A]/20 transition-colors" icon="solar:quote-left-bold"></iconify-icon>
<p className="text-white text-lg leading-relaxed mb-10">"We migrated from DJK and BRIX hasn't missed a beat. Serviced our ducted air conditioning ready for summer. Punctual, polite, and great pricing. A true local asset."</p>
<div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
<div>
<div className="font-condensed font-semibold text-xl tracking-tight uppercase text-white">Julianne McBurnie</div>
<div className="flex text-[#E8222A] text-sm mt-1 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-semibold text-xl">G</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[450px] bg-[#161616] border border-white/5 p-10 snap-start flex flex-col justify-between group hover:border-white/20 transition-colors">
<iconify-icon className="text-5xl text-white/5 mb-8 group-hover:text-[#E8222A]/20 transition-colors" icon="solar:quote-left-bold"></iconify-icon>
<p className="text-white text-lg leading-relaxed mb-10">"Installed our new 10kW solar system. The crew worked through the heat, were extremely respectful of our property, and handled all the complex paperwork for us."</p>
<div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
<div>
<div className="font-condensed font-semibold text-xl tracking-tight uppercase text-white">Nina Van S</div>
<div className="flex text-[#E8222A] text-sm mt-1 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-semibold text-xl">G</div>
</div>
</div>
</div>
<div className="mt-12 text-center md:text-left">
<a className="inline-flex items-center gap-2 text-[#E8222A] font-condensed uppercase tracking-widest text-xs font-semibold hover:text-white transition-colors pb-2 border-b border-[#E8222A]/30 hover:border-white" href="#">
                    See All Google Reviews <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<div className="max-w-[1400px] mx-auto px-6 pb-16">
<div className="bg-gradient-to-r from-[#1a1a1a] to-[#111111] border border-white/5 border-l-4 border-l-[#E8222A] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
<iconify-icon className="absolute -right-10 -top-10 text-9xl text-white/[0.02]" icon="solar:wind-linear"></iconify-icon>
<div className="relative z-10 flex items-center gap-4">
<div className="hidden sm:flex w-12 h-12 bg-white/5 rounded-full items-center justify-center text-[#E8222A]">
<iconify-icon className="text-2xl" icon="solar:info-circle-linear"></iconify-icon>
</div>
<p className="text-[#999999] text-sm md:text-base leading-relaxed max-w-3xl">
<strong className="text-white font-semibold font-condensed text-lg tracking-tight uppercase block mb-1">Former DJK Air Conditioning customer?</strong> 
                    You're in good hands — BRIX Electrical &amp; Air has acquired DJK and is here to seamlessly continue your scheduled maintenance, warranties, and emergency support.
                </p>
</div>
<a className="shrink-0 border border-white/20 px-8 py-4 font-condensed uppercase text-xs tracking-widest font-semibold hover:bg-white hover:text-[#111111] transition-colors relative z-10" href="#">Learn More</a>
</div>
</div>

<section className="py-32 border-t border-white/5">
<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="relative aspect-square lg:aspect-[4/5] bg-zinc-900 overflow-hidden order-2 lg:order-1">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&amp;w=2069&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-luminosity opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent"></div>

<div className="absolute bottom-0 left-0 w-full h-1 bg-[#E8222A]"></div>
<div className="absolute top-8 left-8 border-l border-t border-[#E8222A] w-16 h-16 opacity-50"></div>
<div className="absolute bottom-8 right-8 border-r border-b border-[#E8222A] w-16 h-16 opacity-50"></div>
</div>

<div className="order-1 lg:order-2">
<span className="text-[#E8222A] font-condensed uppercase tracking-[0.2em] text-xs font-semibold mb-4 flex items-center gap-3">
<span className="w-8 h-[1px] bg-[#E8222A]"></span>
                    About BRIX
                </span>
<h2 className="font-condensed font-semibold text-5xl md:text-6xl tracking-tighter uppercase text-white mb-8">Ipswich's Most Trusted Electrical &amp; Air Con Team.</h2>
<div className="space-y-6 text-[#999999] text-base leading-relaxed mb-10">
<p>Founded in 2005 as a tight-knit family operation, BRIX Electrical &amp; Air has grown into one of South East Queensland's most capable multi-trade contractors.</p>
<p>We built this company on a simple premise: one phone call should solve your problem. Whether you're wiring a new architectural build, upgrading to a commercial solar system, or needing emergency air conditioning repairs in the peak of summer, our unified crew handles it with uncompromising standards.</p>
</div>
<a className="bg-[#111111] border border-white/20 hover:border-white transition-colors duration-300 text-white font-condensed font-semibold uppercase tracking-wider text-sm px-8 py-4 text-center inline-flex items-center justify-center gap-3" href="#">
                    Meet the Team <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-32 bg-[#141414] border-t border-white/5">
<div className="max-w-4xl mx-auto px-6">
<span className="text-[#E8222A] font-condensed uppercase tracking-[0.2em] text-xs font-semibold mb-4 flex items-center justify-center gap-3">
<span className="w-8 h-[1px] bg-[#E8222A]"></span>
                Support &amp; Info
                <span className="w-8 h-[1px] bg-[#E8222A]"></span>
</span>
<h2 className="font-condensed font-semibold text-5xl md:text-6xl tracking-tighter uppercase text-white text-center mb-16">Frequently Asked Questions</h2>
<div className="space-y-2">

<details className="group bg-[#111111] border border-white/5 hover:border-white/20 transition-colors">
<summary className="flex justify-between items-center font-condensed font-semibold text-xl tracking-tight uppercase cursor-pointer p-6">
                        What areas do you service?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-[#E8222A]">
<iconify-icon className="text-2xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-[#999999] text-sm leading-relaxed px-6 pb-6 border-t border-white/5 pt-4">
                        We primarily service Ipswich, Brisbane CBD, Logan, Springfield, Redbank Plains, Goodna, Ripley, Forest Lake, Inala, Oxley, and surrounding areas in South East Queensland.
                    </div>
</details>

<details className="group bg-[#111111] border border-white/5 hover:border-white/20 transition-colors">
<summary className="flex justify-between items-center font-condensed font-semibold text-xl tracking-tight uppercase cursor-pointer p-6">
                        Are your quotes free?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-[#E8222A]">
<iconify-icon className="text-2xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-[#999999] text-sm leading-relaxed px-6 pb-6 border-t border-white/5 pt-4">
                        Yes, we provide free, no-obligation quotes for all new installations and major upgrades. Diagnostic callouts for repairs may incur a standard service fee, which will be communicated upfront.
                    </div>
</details>

<details className="group bg-[#111111] border border-white/5 hover:border-white/20 transition-colors">
<summary className="flex justify-between items-center font-condensed font-semibold text-xl tracking-tight uppercase cursor-pointer p-6">
                        Are you fully licensed and insured?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-[#E8222A]">
<iconify-icon className="text-2xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-[#999999] text-sm leading-relaxed px-6 pb-6 border-t border-white/5 pt-4">
                        Absolutely. We operate under Electrical Contractor Licence No. 88304. We hold full public liability insurance and strictly adhere to all Australian safety standards and regulations.
                    </div>
</details>

<details className="group bg-[#111111] border border-white/5 hover:border-white/20 transition-colors">
<summary className="flex justify-between items-center font-condensed font-semibold text-xl tracking-tight uppercase cursor-pointer p-6">
                        Can you handle electrical AND air conditioning in one visit?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-[#E8222A]">
<iconify-icon className="text-2xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-[#999999] text-sm leading-relaxed px-6 pb-6 border-t border-white/5 pt-4">
                        Yes! That's the BRIX advantage. Because our crew is dual-qualified, we can route new wiring and install your split system in the same visit, saving you the hassle of coordinating multiple trades.
                    </div>
</details>

<details className="group bg-[#111111] border border-white/5 hover:border-white/20 transition-colors">
<summary className="flex justify-between items-center font-condensed font-semibold text-xl tracking-tight uppercase cursor-pointer p-6">
                        Do you offer emergency callouts?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-[#E8222A]">
<iconify-icon className="text-2xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-[#999999] text-sm leading-relaxed px-6 pb-6 border-t border-white/5 pt-4">
                        Yes, we offer priority emergency response for dangerous electrical faults, total power loss, and commercial critical infrastructure failures. Call our main line 07 3060 9100 for immediate assistance.
                    </div>
</details>

<details className="group bg-[#111111] border border-white/5 hover:border-white/20 transition-colors">
<summary className="flex justify-between items-center font-condensed font-semibold text-xl tracking-tight uppercase cursor-pointer p-6">
                        Are you currently hiring?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-[#E8222A]">
<iconify-icon className="text-2xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-[#999999] text-sm leading-relaxed px-6 pb-6 border-t border-white/5 pt-4">
                        We are always on the lookout for skilled electricians, fridgies, and apprentices who share our commitment to quality. Check our Careers page for current openings or send us your resume.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-[#111111] text-center">
<div className="max-w-[1000px] mx-auto px-6">
<h2 className="font-condensed font-semibold text-3xl md:text-4xl tracking-tighter uppercase mb-10 text-white">Serving Ipswich, Brisbane &amp; Surrounding Areas.</h2>
<div className="flex flex-wrap justify-center gap-3">
<span className="border border-white/10 px-5 py-2 text-xs uppercase tracking-widest font-condensed text-[#999999] hover:text-white hover:border-[#E8222A] hover:bg-[#E8222A]/5 transition-all cursor-default">Ipswich</span>
<span className="border border-white/10 px-5 py-2 text-xs uppercase tracking-widest font-condensed text-[#999999] hover:text-white hover:border-[#E8222A] hover:bg-[#E8222A]/5 transition-all cursor-default">Brisbane CBD</span>
<span className="border border-white/10 px-5 py-2 text-xs uppercase tracking-widest font-condensed text-[#999999] hover:text-white hover:border-[#E8222A] hover:bg-[#E8222A]/5 transition-all cursor-default">Logan</span>
<span className="border border-white/10 px-5 py-2 text-xs uppercase tracking-widest font-condensed text-[#999999] hover:text-white hover:border-[#E8222A] hover:bg-[#E8222A]/5 transition-all cursor-default">Springfield</span>
<span className="border border-white/10 px-5 py-2 text-xs uppercase tracking-widest font-condensed text-[#999999] hover:text-white hover:border-[#E8222A] hover:bg-[#E8222A]/5 transition-all cursor-default">Redbank Plains</span>
<span className="border border-white/10 px-5 py-2 text-xs uppercase tracking-widest font-condensed text-[#999999] hover:text-white hover:border-[#E8222A] hover:bg-[#E8222A]/5 transition-all cursor-default">Goodna</span>
<span className="border border-white/10 px-5 py-2 text-xs uppercase tracking-widest font-condensed text-[#999999] hover:text-white hover:border-[#E8222A] hover:bg-[#E8222A]/5 transition-all cursor-default">Ripley</span>
<span className="border border-white/10 px-5 py-2 text-xs uppercase tracking-widest font-condensed text-[#999999] hover:text-white hover:border-[#E8222A] hover:bg-[#E8222A]/5 transition-all cursor-default">Forest Lake</span>
<span className="border border-white/10 px-5 py-2 text-xs uppercase tracking-widest font-condensed text-[#999999] hover:text-white hover:border-[#E8222A] hover:bg-[#E8222A]/5 transition-all cursor-default">Inala</span>
<span className="border border-white/10 px-5 py-2 text-xs uppercase tracking-widest font-condensed text-[#999999] hover:text-white hover:border-[#E8222A] hover:bg-[#E8222A]/5 transition-all cursor-default">Oxley</span>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div>
<span className="text-[#E8222A] font-condensed uppercase tracking-[0.2em] text-xs font-semibold mb-4 flex items-center gap-3">
<span className="w-8 h-[1px] bg-[#E8222A]"></span>
                        Knowledge Base
                    </span>
<h2 className="font-condensed font-semibold text-5xl md:text-7xl tracking-tighter uppercase text-white">Electrical Tips &amp; News.</h2>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-white font-condensed uppercase tracking-widest text-xs font-semibold hover:text-[#E8222A] transition-colors pb-2 border-b border-white/20 hover:border-[#E8222A]" href="#">
                    View All Articles <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<a className="group block border border-white/5 bg-[#141414] hover:border-white/20 transition-colors" href="#">
<div className="aspect-[16/9] bg-zinc-900 overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?q=80&amp;w=2069&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity"></div>
</div>
<div className="p-8">
<span className="inline-block bg-[#E8222A] text-white font-condensed tracking-widest uppercase text-[10px] font-semibold px-2 py-1 mb-4">Solar</span>
<h3 className="font-condensed text-2xl font-semibold tracking-tight uppercase mb-3 group-hover:text-[#E8222A] transition-colors line-clamp-2">Is a Home Battery Worth It in Queensland?</h3>
<p className="text-[#999999] text-sm line-clamp-2 mb-6">Explore the ROI of solar batteries and whether they make sense for the average Brisbane home.</p>
<span className="inline-flex items-center gap-2 text-white font-condensed uppercase tracking-widest text-xs font-semibold group-hover:text-[#E8222A] transition-colors">
                            Read More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</a>

<a className="group block border border-white/5 bg-[#141414] hover:border-white/20 transition-colors" href="#">
<div className="aspect-[16/9] bg-zinc-900 overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620601614002-31518fdf973b?q=80&amp;w=1964&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity"></div>
</div>
<div className="p-8">
<span className="inline-block bg-[#E8222A] text-white font-condensed tracking-widest uppercase text-[10px] font-semibold px-2 py-1 mb-4">Air Conditioning</span>
<h3 className="font-condensed text-2xl font-semibold tracking-tight uppercase mb-3 group-hover:text-[#E8222A] transition-colors line-clamp-2">Signs Your Ducted AC Needs a Deep Clean</h3>
<p className="text-[#999999] text-sm line-clamp-2 mb-6">Don't wait for a breakdown. Learn the top warning signs that your system is struggling.</p>
<span className="inline-flex items-center gap-2 text-white font-condensed uppercase tracking-widest text-xs font-semibold group-hover:text-[#E8222A] transition-colors">
                            Read More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</a>

<a className="group block border border-white/5 bg-[#141414] hover:border-white/20 transition-colors" href="#">
<div className="aspect-[16/9] bg-zinc-900 overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity"></div>
</div>
<div className="p-8">
<span className="inline-block bg-[#E8222A] text-white font-condensed tracking-widest uppercase text-[10px] font-semibold px-2 py-1 mb-4">Electrical</span>
<h3 className="font-condensed text-2xl font-semibold tracking-tight uppercase mb-3 group-hover:text-[#E8222A] transition-colors line-clamp-2">Switchboard Upgrades: When Are They Mandatory?</h3>
<p className="text-[#999999] text-sm line-clamp-2 mb-6">Understanding the latest safety regulations and why old switchboards pose a serious fire risk.</p>
<span className="inline-flex items-center gap-2 text-white font-condensed uppercase tracking-widest text-xs font-semibold group-hover:text-[#E8222A] transition-colors">
                            Read More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</a>
</div>
</div>
</section>

<section className="py-32 relative bg-[#111111] border-t-4 border-[#E8222A] overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#E8222A]/10 via-[#111111] to-[#111111] pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-condensed font-semibold text-6xl md:text-8xl tracking-tighter uppercase mb-6 leading-[0.9]">
                        Ready to Get Started?<br/>
<span className="text-[#E8222A]">Let's Talk.</span>
</h2>
<p className="text-[#999999] text-lg mb-10 max-w-md">Reach out to our team today for a free, no-obligation quote on your next project. Fast response guaranteed.</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#E8222A] hover:bg-white hover:text-[#111111] transition-colors duration-300 text-white font-condensed font-semibold uppercase tracking-wider text-sm px-8 py-4 text-center rounded-none flex items-center justify-center" href="#">
                            Get a Quote Today
                        </a>
<a className="border border-white/20 hover:border-white transition-colors duration-300 text-white font-condensed font-semibold uppercase tracking-wider text-sm px-8 py-4 text-center rounded-none inline-flex items-center justify-center gap-3" href="#">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon> Call 07 3060 9100
                        </a>
</div>
</div>

<div className="bg-[#161616] border border-white/5 p-8 md:p-12">
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="sr-only">Name</label>
<input className="w-full bg-[#111111] border border-white/10 px-5 py-4 text-sm focus:border-[#E8222A] focus:ring-1 focus:ring-[#E8222A] outline-none text-white transition-all placeholder:text-[#999999]/50 rounded-none" placeholder="Full Name" type="text"/>
</div>
<div>
<label className="sr-only">Phone</label>
<input className="w-full bg-[#111111] border border-white/10 px-5 py-4 text-sm focus:border-[#E8222A] focus:ring-1 focus:ring-[#E8222A] outline-none text-white transition-all placeholder:text-[#999999]/50 rounded-none" placeholder="Phone Number" type="tel"/>
</div>
</div>
<div className="relative">
<label className="sr-only">Service Needed</label>
<select className="w-full bg-[#111111] border border-white/10 px-5 py-4 text-sm focus:border-[#E8222A] focus:ring-1 focus:ring-[#E8222A] outline-none text-[#999999] transition-all appearance-none rounded-none cursor-pointer">
<option disabled="" selected="" value="">Select Service Needed...</option>
<option value="electrical">Residential Electrical</option>
<option value="commercial">Commercial Electrical</option>
<option value="ac">Air Conditioning</option>
<option value="solar">Solar &amp; Battery</option>
<option value="other">Other / Not Sure</option>
</select>
<div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-[#999999]">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="sr-only">Message</label>
<textarea className="w-full bg-[#111111] border border-white/10 px-5 py-4 text-sm focus:border-[#E8222A] focus:ring-1 focus:ring-[#E8222A] outline-none text-white transition-all placeholder:text-[#999999]/50 resize-none rounded-none" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-[#111111] px-8 py-4 font-condensed font-semibold uppercase tracking-widest text-sm hover:bg-[#E8222A] hover:text-white transition-colors duration-300 rounded-none flex items-center justify-center gap-2 mt-2" type="button">
                            Submit Request <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#111111] border-t border-white/5 pt-20 pb-8">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">

<div className="lg:col-span-2">
<a className="flex items-center gap-1 text-white mb-6" href="#">
<iconify-icon className="text-[#E8222A] text-2xl" icon="solar:bolt-linear"></iconify-icon>
<span className="font-condensed font-semibold text-3xl tracking-tighter uppercase">BRIX</span>
</a>
<p className="text-[#999999] text-sm leading-relaxed max-w-sm mb-8">
                        Ipswich &amp; Brisbane Electrical, Air Con &amp; Solar Specialists. One Crew. One Call. Every Service.
                    </p>
<div className="flex items-center gap-4 text-white/50">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:plain-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:suitcase-linear"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="font-condensed font-semibold tracking-widest uppercase text-xs mb-6 text-white">Services</h4>
<ul className="space-y-4 text-sm text-[#999999]">
<li><a className="hover:text-white hover:pl-1 transition-all" href="#">Residential Electrical</a></li>
<li><a className="hover:text-white hover:pl-1 transition-all" href="#">Switchboard Upgrades</a></li>
<li><a className="hover:text-white hover:pl-1 transition-all" href="#">Lighting &amp; Power</a></li>
<li><a className="hover:text-white hover:pl-1 transition-all" href="#">Safety Inspections</a></li>
<li><a className="hover:text-white hover:pl-1 transition-all" href="#">Fault Finding</a></li>
</ul>
</div>
<div>
<h4 className="font-condensed font-semibold tracking-widest uppercase text-xs mb-6 text-white">Commercial</h4>
<ul className="space-y-4 text-sm text-[#999999]">
<li><a className="hover:text-white hover:pl-1 transition-all" href="#">Commercial Fit-outs</a></li>
<li><a className="hover:text-white hover:pl-1 transition-all" href="#">Preventative Maintenance</a></li>
<li><a className="hover:text-white hover:pl-1 transition-all" href="#">Test &amp; Tag</a></li>
<li><a className="hover:text-white hover:pl-1 transition-all" href="#">Emergency Lighting</a></li>
<li><a className="hover:text-white hover:pl-1 transition-all" href="#">Data &amp; Communications</a></li>
</ul>
</div>
<div>
<h4 className="font-condensed font-semibold tracking-widest uppercase text-xs mb-6 text-white">Air &amp; Solar</h4>
<ul className="space-y-4 text-sm text-[#999999]">
<li><a className="hover:text-white hover:pl-1 transition-all" href="#">Split Systems AC</a></li>
<li><a className="hover:text-white hover:pl-1 transition-all" href="#">Ducted Air Conditioning</a></li>
<li><a className="hover:text-white hover:pl-1 transition-all" href="#">AC Maintenance &amp; Repair</a></li>
<li><a className="hover:text-white hover:pl-1 transition-all" href="#">Solar Panel Installation</a></li>
<li><a className="hover:text-white hover:pl-1 transition-all" href="#">Battery Storage Systems</a></li>
</ul>
</div>
<div>
<h4 className="font-condensed font-semibold tracking-widest uppercase text-xs mb-6 text-white">Quick Links</h4>
<ul className="space-y-4 text-sm text-[#999999]">
<li><a className="hover:text-white hover:pl-1 transition-all" href="#">About Us</a></li>
<li><a className="hover:text-white hover:pl-1 transition-all" href="#">Careers</a></li>
<li><a className="hover:text-white hover:pl-1 transition-all" href="#">Locations</a></li>
<li><a className="hover:text-white hover:pl-1 transition-all" href="#">Contact</a></li>
<li><a className="hover:text-white hover:pl-1 transition-all" href="#">Get a Quote</a></li>
</ul>
</div>
</div>

<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-condensed tracking-widest uppercase text-[#999999]">
<p>© 2025 BRIX Electrical &amp; Air. All rights reserved.</p>
<div className="flex gap-6">
<span>Lic. No. 88304</span>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
