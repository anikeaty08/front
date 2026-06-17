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



      lucide.createIcons();

      // Simple marquee animation extension since we can't use config
      const style = document.createElement('style');
      style.innerHTML = `
          @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
          }
          .animate-marquee {
              animation: marquee 30s linear infinite;
          }
      `;
      document.head.appendChild(style);
    
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
      
<div className="grain-overlay"></div>

<div className="bg-[#0A2427] text-[#F0E7D6] py-3 text-center border-b border-[#F0E7D6]/10">
<p className="text-sm font-medium tracking-wide uppercase">
        Restoring your body's ability to heal itself
      </p>
</div>

<nav className="sticky top-0 z-40 bg-[#F0E7D6]/90 backdrop-blur-md border-b border-[#0A2427]/10">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

<button className="md:hidden text-[#0A2427]">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>

<a className="serif text-4xl font-medium italic text-[#0A2427] tracking-tight" href="#">
          innata
        </a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm uppercase tracking-wider font-medium hover:text-[#EA2E00] transition-colors" href="#">
            Shop
          </a>
<a className="text-sm uppercase tracking-wider font-medium hover:text-[#EA2E00] transition-colors" href="#">
            Science
          </a>
<a className="text-sm uppercase tracking-wider font-medium hover:text-[#EA2E00] transition-colors" href="#">
            About
          </a>
</div>

<div className="flex items-center space-x-6">
<button className="relative group">
<svg className="lucide lucide-shopping-bag w-6 h-6 text-[#0A2427] group-hover:text-[#EA2E00] transition-colors" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute -top-1 -right-1 w-4 h-4 bg-[#EA2E00] rounded-full text-[#F0E7D6] text-[10px] flex items-center justify-center font-bold">
              0
            </span>
</button>
</div>
</div>
</nav>

<section className="relative border-b border-[#0A2427] overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[85vh]">

<div className="lg:col-span-7 flex flex-col md:px-16 lg:py-0 lg:border-r border-[#0A2427] pt-20 pr-6 pb-20 pl-6 relative justify-center">
<span className="text-[#EA2E00] font-medium tracking-widest uppercase text-sm mb-6">
            Est. 2024 — Bioenergetic Nutrition
          </span>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#0A2427] leading-[0.95] mb-8">
            The world is
            <br/>
<span className="italic font-normal">your oyster.</span>
</h1>
<p className="text-xl md:text-2xl text-[#0A2427]/80 max-w-xl leading-relaxed font-light mb-10">
            The US's first bioenergetic supplement brand. A potent freeze-dried
            oyster and green-lipped mussel extract to restore metabolic health.
          </p>
<div className="flex flex-col sm:flex-row gap-4 items-start">
<a className="bg-[#EA2E00] text-[#F0E7D6] px-10 py-4 rounded-full text-lg font-medium hover:bg-[#0A2427] transition-all duration-300 inline-flex items-center gap-2" href="#product">
              Shop the Extract
              <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<div className="flex items-center gap-3 px-6 py-4">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-[#9DBDB8] border-2 border-[#F0E7D6]"></div>
<div className="w-8 h-8 rounded-full bg-[#0A2427] border-2 border-[#F0E7D6]"></div>
<div className="w-8 h-8 rounded-full bg-[#EA2E00] border-2 border-[#F0E7D6]"></div>
</div>
<span className="text-sm font-medium text-[#0A2427]">
                Trusted by 1000+ Early Adopters
              </span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative bg-[#F0E7D6] overflow-hidden group">

<img alt="Innata Bioenergetic Supplement Amber Jar on Sand" className="transition-transform duration-[3s] ease-out group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a86141ec-707d-4366-8617-eabb5e7698fd_1600w.png"/>

<div className="absolute inset-0 bg-[#0A2427]/5 pointer-events-none"></div>

<div className="absolute bottom-8 right-8 z-20">
<div className="w-28 h-28 rounded-full border border-[#F0E7D6]/40 flex items-center justify-center bg-[#F0E7D6]/80 backdrop-blur-sm text-[#0A2427] animate-[spin_10s_linear_infinite] shadow-xl">
<svg height="100" viewbox="0 0 100 100" width="100">
<defs>
<path d="
                                M 50, 50
                                m -37, 0
                                a 37,37 0 1,1 74,0
                                a 37,37 0 1,1 -74,0" id="circle"></path>
</defs>
<text fontSize="11" font-weight="bold" letter-spacing="1">
</text>
</svg>
<svg className="lucide lucide-zap w-6 h-6 absolute text-[#EA2E00]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
</div>
</div>
</div>
</section>

<div className="bg-[#0A2427] overflow-hidden py-4 border-b border-[#0A2427]">
<div className="flex whitespace-nowrap gap-12 animate-marquee items-center">
<span className="text-[#9DBDB8] text-xl font-medium uppercase tracking-widest flex items-center gap-4">
          Wild Harvested
          <svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
<span className="text-[#F0E7D6] text-xl font-medium uppercase tracking-widest flex items-center gap-4">
          No Fillers
          <svg className="lucide lucide-star w-4 h-4 fill-[#EA2E00] stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
<span className="text-[#9DBDB8] text-xl font-medium uppercase tracking-widest flex items-center gap-4">
          Freeze Dried
          <svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
<span className="text-[#F0E7D6] text-xl font-medium uppercase tracking-widest flex items-center gap-4">
          Metabolic Support
          <svg className="lucide lucide-star w-4 h-4 fill-[#EA2E00] stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
<span className="text-[#9DBDB8] text-xl font-medium uppercase tracking-widest flex items-center gap-4">
          Wild Harvested
          <svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
<span className="text-[#F0E7D6] text-xl font-medium uppercase tracking-widest flex items-center gap-4">
          No Fillers
          <svg className="lucide lucide-star w-4 h-4 fill-[#EA2E00] stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
<span className="text-[#9DBDB8] text-xl font-medium uppercase tracking-widest flex items-center gap-4">
          Freeze Dried
          <svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
<span className="text-[#F0E7D6] text-xl font-medium uppercase tracking-widest flex items-center gap-4">
          Metabolic Support
          <svg className="lucide lucide-star w-4 h-4 fill-[#EA2E00] stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
</div>
</div>

<section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#0A2427]">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="relative order-2 lg:order-1">
<div className="aspect-[4/5] rounded-sm overflow-hidden border border-[#0A2427]">
<img alt="Oyster Shell Texture" className="sepia-[0.3] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4dcebf8c-b949-4e46-ba81-5cd12424485a_1600w.png"/>
</div>

<div className="absolute -bottom-10 -right-6 bg-[#F0E7D6] p-6 border border-[#0A2427] shadow-[8px_8px_0px_0px_rgba(10,36,39,1)] max-w-xs hidden md:block">
<h4 className="serif text-xl font-medium mb-2">
                Wild Pacific Oyster
              </h4>
<p className="text-sm text-[#0A2427]/70">
                Nature's most potent multivitamin. Sourced for maximum zinc,
                copper, and rare trace minerals.
              </p>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-8 leading-none">
              Nature's original
              <span className="text-[#EA2E00] italic serif">multivitamin.</span>
</h2>
<p className="text-xl text-[#0A2427]/80 mb-10 leading-relaxed">
              Modern diets are depleted of the trace minerals our mitochondria
              crave. Our proprietary blend of oyster and green-lipped mussel
              extract provides the raw materials your body needs to generate
              energy and repair itself.
            </p>
<div className="space-y-8">
<div className="flex gap-6">
<div className="w-12 h-12 rounded-full bg-[#9DBDB8]/30 flex items-center justify-center shrink-0 border border-[#0A2427]">
<svg className="lucide lucide-battery-charging w-6 h-6 text-[#0A2427]" data-lucide="battery-charging" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7-3 5h4l-3 5"></path><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path><path d="M22 14v-4"></path><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path></svg>
</div>
<div>
<h3 className="text-xl font-medium serif mb-2">
                    Restores Cellular Energy
                  </h3>
<p className="text-lg text-[#0A2427]/70">
                    Packed with bioavailable B12, Copper, and Zinc to fuel ATP
                    production.
                  </p>
</div>
</div>
<div className="flex gap-6">
<div className="w-12 h-12 rounded-full bg-[#EA2E00]/10 flex items-center justify-center shrink-0 border border-[#0A2427]">
<svg className="lucide lucide-heart-pulse w-6 h-6 text-[#EA2E00]" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
</div>
<div>
<h3 className="text-xl font-medium serif mb-2">
                    Hormonal Balance
                  </h3>
<p className="text-lg text-[#0A2427]/70">
                    Essential precursors for testosterone and hormone synthesis
                    naturally.
                  </p>
</div>
</div>
<div className="flex gap-6">
<div className="w-12 h-12 rounded-full bg-[#F0E7D6] flex items-center justify-center shrink-0 border border-[#0A2427]">
<svg className="lucide lucide-shield-check w-6 h-6 text-[#0A2427]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<h3 className="text-xl font-medium serif mb-2">
                    Systemic Healing
                  </h3>
<p className="text-lg text-[#0A2427]/70">
                    Unique peptides and glycosaminoglycans to support joint and
                    tissue repair.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0A2427] text-[#F0E7D6] py-24 px-6 md:px-12 border-b border-[#F0E7D6]/10">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-[#F0E7D6]/20 pb-12">
<div className="max-w-2xl">
<span className="text-[#9DBDB8] uppercase tracking-widest text-sm font-medium mb-4 block">
              The Science
            </span>
<h2 className="text-5xl md:text-7xl font-medium serif tracking-tight">
              Why
              <span className="italic text-[#9DBDB8]">Bioenergetic?</span>
</h2>
</div>
<p className="text-xl text-[#F0E7D6]/70 max-w-md mt-8 md:mt-0">
            We don't treat symptoms. We provide the fuel for your body's own
            intelligent systems to function as designed.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#F0E7D6]/20 border border-[#F0E7D6]/20">

<div className="bg-[#0A2427] p-10 group hover:bg-[#0F2F33] transition-colors">
<div className="h-12 w-12 mb-6 text-[#EA2E00]">
<svg fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
</div>
<h3 className="text-2xl font-medium serif mb-3">Synergistic Potency</h3>
<p className="text-lg text-[#F0E7D6]/60 leading-relaxed">
              Isolated nutrients fail. The oyster/mussel complex offers trace
              minerals in their natural, protein-bound forms for maximum
              absorption.
            </p>
</div>

<div className="bg-[#0A2427] p-10 group hover:bg-[#0F2F33] transition-colors">
<div className="h-12 w-12 mb-6 text-[#9DBDB8]">
<svg className="" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2h4"></path>
<path d="M12 14v-7"></path>
<path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.8 14h-.2"></path>
<path d="M14 22a7 7 0 0 0 7-7"></path>
<path d="M3.06 13a7 7 0 1 1 10.39 8.87"></path>
</svg>
</div>
<h3 className="text-2xl font-medium serif mb-3">Metabolic Fire</h3>
<p className="leading-relaxed text-lg text-[#F0E7D6]/60" style={{}}>Zinc and copper are the spark plug of energy production. Our extract is one of the richest natural sources of bioavailable zinc and copper on earth.</p>
</div>

<div className="bg-[#0A2427] p-10 group hover:bg-[#0F2F33] transition-colors">
<div className="h-12 w-12 mb-6 text-[#F0E7D6]">
<svg fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="M8 11h8"></path>
<path d="M8 15h8"></path>
<path d="M11 7h2"></path>
</svg>
</div>
<h3 className="text-2xl font-medium serif mb-3">Cold Processed</h3>
<p className="text-lg text-[#F0E7D6]/60 leading-relaxed">
              Freeze-dried immediately after harvest to preserve delicate
              enzymes and peptides that heat destroys.
            </p>
</div>
</div>
</div>
</section>

<section className="md:py-32 md:px-12 pt-24 pr-6 pb-24 pl-6" id="product">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row gap-16">

<div className="w-full lg:w-1/2">
<div className="bg-[#EAE3D3] aspect-square rounded-sm flex items-center justify-center border border-[#0A2427] relative">
<img alt="Innata Bottle" className="contrast-125 mix-blend-multiply w-auto h-3/4 object-contain drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4dcebf8c-b949-4e46-ba81-5cd12424485a_800w.png"/>
<div className="absolute top-6 left-6 bg-[#EA2E00] text-white px-3 py-1 text-xs uppercase tracking-wider font-bold rounded-sm">
                Best Seller
              </div>
</div>
<div className="grid grid-cols-3 gap-4 mt-4">
<div className="bg-[#EAE3D3] aspect-square border border-[#0A2427]/30 rounded-sm flex items-center justify-center cursor-pointer hover:border-[#0A2427]">
<img className="opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a86141ec-707d-4366-8617-eabb5e7698fd_800w.png"/>
</div>
<div className="bg-[#EAE3D3] aspect-square border border-[#0A2427]/30 rounded-sm flex items-center justify-center cursor-pointer hover:border-[#0A2427]">
<div className="text-center p-2">
<span className="block text-2xl serif font-medium">180</span>
<span className="text-xs uppercase tracking-wide">Capsules</span>
</div>
</div>
<div className="bg-[#EAE3D3] aspect-square border border-[#0A2427]/30 rounded-sm flex items-center justify-center cursor-pointer hover:border-[#0A2427]">
<div className="text-center p-2">
<span className="block text-2xl serif font-medium">100%</span>
<span className="text-xs uppercase tracking-wide">Pure</span>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2 flex flex-col w-full justify-center">
<h1 className="text-5xl md:text-6xl serif font-medium text-[#0A2427] tracking-tight mb-2">
              Innata Oyster Extract
            </h1>
<div className="flex items-center gap-4 mb-6">
<span className="text-3xl font-medium text-[#EA2E00]">$72.00</span>
<div className="flex items-center text-[#0A2427]">
<svg className="lucide lucide-star w-4 h-4 fill-[#0A2427]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-[#0A2427]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-[#0A2427]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-[#0A2427]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-[#0A2427]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="ml-2 text-sm font-medium opacity-70">
                  4.9 (128 Reviews)
                </span>
</div>
</div>
<p className="leading-relaxed text-xl text-[#0A2427]/80 border-[#0A2427]/10 border-b mb-8 pb-8">
              A potent, synergistic blend of wild-caught Oyster and Green-Lipped
              Mussel. Encapsulated in gelatin. No fillers, flow agents, or
              synthetic additives. Just pure bioenergetic fuel.
            </p>

<div className="space-y-4 mb-8">
<label className="flex items-center justify-between cursor-pointer bg-[#EA2E00]/5 border-[#EA2E00] border rounded-sm pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border border-[#EA2E00] flex items-center justify-center">
<div className="w-3 h-3 rounded-full bg-[#EA2E00]"></div>
</div>
<span className="text-lg font-medium">Subscribe &amp; Save 25%</span>
</div>
<span className="font-medium">$56.25</span>
</label>
<label className="flex items-center justify-between p-4 border border-[#0A2427]/20 rounded-sm cursor-pointer hover:border-[#0A2427]/50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border border-[#0A2427]/40 flex items-center justify-center"></div>
<span className="font-medium text-lg">One-time Purchase</span>
</div>
<span className="font-medium">$75.00</span>
</label>
</div>

<div className="flex gap-4 mb-8">
<div className="flex items-center border border-[#0A2427] rounded-sm px-4">
<button className="p-2 text-[#0A2427] hover:opacity-60">-</button>
<span className="px-4 font-medium text-lg">1</span>
<button className="p-2 text-[#0A2427] hover:opacity-60">+</button>
</div>
<button className="flex-1 bg-[#0A2427] text-[#F0E7D6] py-4 text-lg font-medium rounded-sm hover:bg-[#EA2E00] transition-colors flex items-center justify-center gap-2 group">
                Add to Cart
                <svg className="lucide lucide-shopping-bag w-5 h-5 group-hover:animate-bounce" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</button>
</div>

<div className="border-t border-[#0A2427]/20">
<div className="py-4 flex justify-between items-center cursor-pointer group">
<span className="font-medium uppercase tracking-wide text-sm">
                  Supplement Facts
                </span>
<svg className="lucide lucide-plus w-4 h-4 text-[#0A2427]/60 group-hover:text-[#EA2E00]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="py-4 border-t border-[#0A2427]/10 flex justify-between items-center cursor-pointer group">
<span className="font-medium uppercase tracking-wide text-sm">
                  Sourcing
                </span>
<svg className="lucide lucide-plus w-4 h-4 text-[#0A2427]/60 group-hover:text-[#EA2E00]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="py-4 border-t border-[#0A2427]/10 flex justify-between items-center cursor-pointer group">
<span className="font-medium uppercase tracking-wide text-sm">
                  Shipping &amp; Returns
                </span>
<svg className="lucide lucide-plus w-4 h-4 text-[#0A2427]/60 group-hover:text-[#EA2E00]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#091718] text-[#9DBDB8] pt-20 pb-10 px-6 border-t border-[#EA2E00]">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mb-20">
<div className="md:col-span-1">
<a className="text-5xl serif font-medium tracking-tight text-[#F0E7D6] italic mb-6 block" href="#">
              innata
            </a>
<p className="text-[#9DBDB8]/70 leading-relaxed mb-6">
              Restoring health through bioenergetic principles. Pure, potent,
              and primal.
            </p>
<div className="flex gap-4">
<a className="hover:text-[#EA2E00] transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="hover:text-[#EA2E00] transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="hover:text-[#EA2E00] transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>
<div>
<h4 className="text-[#F0E7D6] uppercase tracking-widest text-sm font-medium mb-6">
              Shop
            </h4>
<ul className="space-y-3">
<li>
<a className="hover:text-[#F0E7D6] transition-colors" href="#">
                  Oyster Extract
                </a>
</li>
<li>
<a className="hover:text-[#F0E7D6] transition-colors" href="#">
                  Bundles
                </a>
</li>
<li>
<a className="hover:text-[#F0E7D6] transition-colors" href="#">
                  Gift Cards
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-[#F0E7D6] uppercase tracking-widest text-sm font-medium mb-6">
              Learn
            </h4>
<ul className="space-y-3">
<li>
<a className="hover:text-[#F0E7D6] transition-colors" href="#">
                  The Science
                </a>
</li>
<li>
<a className="hover:text-[#F0E7D6] transition-colors" href="#">
                  Our Story
                </a>
</li>
<li>
<a className="hover:text-[#F0E7D6] transition-colors" href="#">
                  Sourcing
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-[#F0E7D6] uppercase tracking-widest text-sm font-medium mb-6">
              Stay Connected
            </h4>
<p className="text-sm mb-4 text-[#9DBDB8]/70">
              Join the bioenergetic movement.
            </p>
<form className="flex border-b border-[#9DBDB8]/30 pb-2">
<input className="bg-transparent w-full outline-none placeholder-[#9DBDB8]/40 text-[#F0E7D6]" placeholder="Email Address" type="email"/>
<button className="text-[#EA2E00] font-medium uppercase text-sm hover:text-[#F0E7D6] transition-colors" type="submit">
                Join
              </button>
</form>
</div>
</div>
<div className="border-t border-[#9DBDB8]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#9DBDB8]/50">
<p>© 2024 Innata Nutrition. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-[#F0E7D6]" href="#">Privacy Policy</a>
<a className="hover:text-[#F0E7D6]" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
