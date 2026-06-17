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
      

<div className="grid-lines"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.06] bg-[#030303]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#030303]/60 transition-all duration-300">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 md:py-6 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<span className="serif text-2xl text-white tracking-tight font-normal group-hover:opacity-80 transition-opacity">VRG</span>
</a>

<div className="hidden md:flex items-center gap-8 lg:gap-10">
<a className="text-[13px] font-medium text-white hover:text-white transition-colors tracking-wide" href="#firm">The Firm</a>
<a className="text-[13px] font-medium text-white/50 hover:text-white transition-colors tracking-wide" href="#about">Methodology</a>
<a className="text-[13px] font-medium text-white/50 hover:text-white transition-colors tracking-wide" href="#market">Market</a>
<a className="text-[13px] font-medium text-white/50 hover:text-white transition-colors tracking-wide" href="#thesis">Thesis</a>
<a className="text-[13px] font-medium text-white/50 hover:text-white transition-colors tracking-wide" href="#opportunities">Pipeline</a>
</div>

<div className="">
<a className="group flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white/80 hover:text-white transition-colors" href="#partner">
<span className="border-b border-transparent group-hover:border-white/50 pb-0.5 transition-all">Partner Access</span>
</a>
</div>
</div>
</nav>

<header className="relative min-h-[90vh] w-full flex flex-col justify-center overflow-hidden border-b border-white/[0.06]">

<div className="absolute inset-0 z-0 select-none">
<img alt="Structural Form" className="w-full h-full object-cover brightness-[0.4] contrast-[1.2] grayscale" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-8 animate-fade-up">
<h1 className="text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.9] text-white serif font-light tracking-tighter">
<span className="block">Venezuela</span>
<span className="block text-white/90">Redevelopment</span>
<span className="block text-white/40">Group</span>
</h1>
</div>

<div className="lg:col-span-4 animate-fade-up delay-100">
<div className="border-l border-white/20 pl-8 backdrop-blur-sm">
<p className="text-lg md:text-xl font-light text-white/80 leading-relaxed mb-6">
                            We source, structure, and build Venezuela's most significant redevelopment projects.
                        </p>
<div className="flex flex-col gap-1 text-[11px] uppercase tracking-[0.2em] text-white/40 font-medium">
<span>Infrastructure</span>
<span>Hospitality</span>
<span>Urban Core</span>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="relative z-10 bg-[#030303] py-24 md:py-36 border-b border-white/[0.06] w-full" id="firm">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

<div className="lg:col-span-4 sticky top-32">
<span className="block text-[11px] font-mono text-emerald-500/80 mb-6 tracking-widest uppercase">01 / The Firm</span>
<h2 className="serif text-3xl md:text-4xl text-white font-light tracking-tight leading-[1.1]">
                        Unlocking <br/>
<span className="text-white/40 italic">Value</span>
</h2>
</div>

<div className="lg:col-span-8">
<p className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 leading-relaxed tracking-tight">
                        We are a Venezuelan development company with exclusive access to the country's highest-conviction opportunities. We structure and execute large-scale projects in partnership with a select group of world-class developers.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 bg-[#030303] py-24 md:py-32 border-b border-white/[0.06] w-full" id="about">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 md:mb-28 border-b border-white/[0.06] pb-8">
<div>
<span className="block text-[11px] font-mono text-emerald-500/80 mb-6 tracking-widest uppercase">02 / Methodology</span>
<h2 className="serif text-4xl md:text-6xl text-white font-light tracking-tight">Execution-Led</h2>
</div>
<p className="text-white/50 text-base md:text-lg max-w-md font-light leading-relaxed text-right md:text-left">
                    We do not advise. We execute. Our value lies in bridging local access with global governance standards.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 w-full border border-white/[0.06] divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">

<div className="group p-8 lg:p-12 hover:bg-white/[0.02] transition-colors duration-500 min-h-[400px] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-white/40 group-hover:text-white transition-colors" height="24" icon="solar:radar-2-linear" width="24"></iconify-icon>
<span className="font-mono text-[10px] text-white/20">SOURCE</span>
</div>
<div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-4">We Find</h3>
<p className="text-sm md:text-base text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors">
                            We access off-market opportunities through deep local networks. We secure land and assets before they reach the broader market.
                        </p>
</div>
</div>

<div className="group p-8 lg:p-12 hover:bg-white/[0.02] transition-colors duration-500 min-h-[400px] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-white/40 group-hover:text-white transition-colors" height="24" icon="solar:structure-linear" width="24"></iconify-icon>
<span className="font-mono text-[10px] text-white/20">STRUCTURE</span>
</div>
<div>
<h3 className="text-2xl text-white font-medium mb-4 tracking-tight">We Structure</h3>
<p className="text-sm md:text-base text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors">
                            We design legal and capital frameworks that align interests. We mitigate jurisdictional risk through rigorous governance.
                        </p>
</div>
</div>

<div className="group p-8 lg:p-12 hover:bg-white/[0.02] transition-colors duration-500 min-h-[400px] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-white/40 group-hover:text-white transition-colors" height="24" icon="solar:crane-linear" width="24"></iconify-icon>
<span className="font-mono text-[10px] text-white/20">BUILD</span>
</div>
<div>
<h3 className="text-2xl text-white font-medium mb-4 tracking-tight">We Build</h3>
<p className="text-sm md:text-base text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors">
                            We manage development directly. From permitting to construction management, we own the delivery risk.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 bg-[#030303] py-24 md:py-32 border-b border-white/[0.06] w-full" id="market">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="flex flex-col justify-between">
<div>
<span className="block text-[11px] font-mono text-emerald-500/80 mb-6 tracking-widest uppercase">03 / Market Dislocation</span>
<h2 className="serif text-4xl md:text-6xl text-white font-light tracking-tight mb-8">
                            The Valuation<br/>
<span className="text-white/40 italic">Gap</span>
</h2>
<p className="text-lg text-white/60 font-light leading-relaxed max-w-xl">
                            Current asset valuations reflect decades of isolation, ignoring the underlying replacement cost of existing infrastructure. We are acquiring prime assets at a fraction of their construction value.
                        </p>
</div>
<div className="mt-12 lg:mt-0 flex items-center gap-4">
<a className="group flex items-center gap-2 text-xs uppercase tracking-widest text-white hover:text-emerald-400 transition-colors" href="#opportunities">
<span>View Asset Classes</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">

<div className="bg-[#030303] p-10 hover:bg-white/[0.02] transition-colors group">
<iconify-icon className="text-white/30 mb-6 group-hover:text-emerald-500 transition-colors" icon="solar:graph-up-linear" width="24"></iconify-icon>
<p className="serif text-5xl text-white font-light mb-2">-85%</p>
<p className="text-xs uppercase tracking-widest text-white/40">Valuation Discount</p>
</div>

<div className="bg-[#030303] p-10 hover:bg-white/[0.02] transition-colors group">
<iconify-icon className="text-white/30 mb-6 group-hover:text-emerald-500 transition-colors" icon="solar:buildings-2-linear" width="24"></iconify-icon>
<p className="serif text-5xl text-white font-light mb-2">$350<span className="text-2xl text-white/40">/sqm</span></p>
<p className="text-xs uppercase tracking-widest text-white/40">Prime Urban Acquisition</p>
</div>

<div className="bg-[#030303] p-10 hover:bg-white/[0.02] transition-colors group sm:col-span-2">
<div className="flex items-start justify-between">
<div>
<p className="serif text-5xl text-white font-light mb-2">300<span className="text-2xl text-white/40">bn+</span></p>
<p className="text-xs uppercase tracking-widest text-white/40">Proven Reserves (bbl)</p>
</div>
<iconify-icon className="text-white/30 group-hover:text-emerald-500 transition-colors" icon="solar:global-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-white/30 mt-6 font-light">Underpinning long-term recovery fundamentals.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 w-full bg-[#030303] border-b border-white/[0.06]" id="thesis">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
<div className="flex flex-col lg:flex-row border-x border-white/[0.06] bg-[#030303]">

<div className="w-full lg:w-1/2 p-10 md:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/[0.06]">
<div className="max-w-xl">
<span className="block text-[11px] font-mono text-emerald-500/80 mb-6 tracking-widest uppercase">04 / Thesis</span>
<h2 className="serif text-4xl md:text-5xl lg:text-6xl text-white mb-10 leading-[1.1] tracking-tight">
                            A Generational <br/>
<span className="text-white/40 italic">Asymmetry</span>
</h2>
<div className="space-y-8">
<p className="text-lg md:text-xl font-light text-white/70 leading-relaxed">
                                Venezuela represents one of the few remaining frontier markets with developed-world infrastructure bones. 
                            </p>
<p className="text-lg md:text-xl font-light text-white/70 leading-relaxed">
                                Decades of underinvestment have created a dislocation between asset prices and replacement cost. For disciplined capital, this is a multi-decade entry point.
                            </p>
</div>
<div className="mt-12 pt-12 border-t border-white/[0.06]">
<div className="flex items-center gap-4 text-white/40">
<iconify-icon height="20" icon="solar:clock-square-linear" width="20"></iconify-icon>
<span className="text-xs tracking-widest uppercase font-medium">Time Horizon: 10+ Years</span>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-auto overflow-hidden">
<img alt="Construction Site" className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.7] hover:scale-105 transition-transform duration-[2s]" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="bg-[#030303]/20 mix-blend-multiply absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-8 left-8 bg-[#030303]/80 backdrop-blur-md border border-white/10 p-4 max-w-xs">
<div className="flex items-center gap-3 mb-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-[10px] uppercase tracking-widest text-white/60">Active Site</span>
</div>
<p className="text-sm text-white font-medium">Strategic Coastal Corridor</p>
<p className="text-xs text-white/40 mt-1 font-mono">Lat: 10.6012° N, Long: 66.9328° W</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 bg-[#030303] py-24 md:py-32 border-b border-white/[0.06] w-full" id="opportunities">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
<div>
<span className="block text-[11px] font-mono text-emerald-500/80 mb-6 tracking-widest uppercase">05 / Pipeline</span>
<h2 className="serif text-4xl md:text-6xl text-white font-light tracking-tight">Primary Focus</h2>
</div>

<div className="flex items-center gap-2 text-white/30 text-xs uppercase tracking-widest">
<iconify-icon icon="solar:folder-open-linear"></iconify-icon>
<span>Restricted Access</span>
</div>
</div>
<div className="space-y-px bg-white/[0.06] border border-white/[0.06]">

<div className="group relative bg-[#030303] overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[360px]">
<div className="p-10 md:p-14 flex flex-col justify-between order-2 md:order-1 relative z-10">
<div>
<h3 className="text-2xl text-white font-medium mb-4 tracking-tight">Coastal Masterplans</h3>
<p className="text-white/50 text-base font-light leading-relaxed max-w-sm">
                                Large-scale mixed-use hospitality developments on high-barrier coastal land. Phased execution for long-term tourism demand.
                            </p>
</div>
<div className="flex items-center gap-6 mt-8">
<span className="text-[10px] uppercase tracking-widest text-white/30">Scale: &gt; 50 Hectares</span>
<span className="text-[10px] uppercase tracking-widest text-white/30">Type: Greenfield</span>
</div>
</div>
<div className="order-1 md:order-2 relative h-64 md:h-auto img-zoom-container border-l border-white/[0.06]">
<img alt="Coastal Venezuela" className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover grayscale brightness-[0.6] hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e264e605-21db-45b2-8228-c079f84f49fe_1600w.webp"/>
</div>
</div>

<div className="group relative bg-[#030303] overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[360px]">
<div className="order-1 relative h-64 md:h-auto img-zoom-container border-r border-white/[0.06]">
<img alt="Urban Concrete" className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover grayscale brightness-[0.5] hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a946fcb9-5e50-4585-b754-ee973d4d4d96_1600w.jpg"/>
</div>
<div className="p-10 md:p-14 flex flex-col justify-between order-2 z-10 relative">
<div>
<h3 className="text-2xl text-white font-medium mb-4 tracking-tight">Urban Regeneration</h3>
<p className="text-white/50 text-base font-light leading-relaxed max-w-sm">
                                Redevelopment of prime urban cores. Converting distressed assets into Class-A residential and commercial inventory.
                            </p>
</div>
<div className="flex items-center gap-6 mt-8">
<span className="text-[10px] uppercase tracking-widest text-white/30">Focus: Capital City</span>
<span className="text-[10px] uppercase tracking-widest text-white/30">Type: Brownfield</span>
</div>
</div>
</div>

<div className="group relative bg-[#030303] overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[360px]">
<div className="p-10 md:p-14 flex flex-col justify-between order-2 md:order-1 relative z-10">
<div>
<h3 className="text-2xl text-white font-medium mb-4 tracking-tight">Strategic Logistics</h3>
<p className="text-white/50 text-base font-light leading-relaxed max-w-sm">
                                Industrial parks and logistics nodes situated on key trade corridors. Infrastructure designed for the recovering import/export cycle.
                            </p>
</div>
<div className="flex items-center gap-6 mt-8">
<span className="text-[10px] uppercase tracking-widest text-white/30">Focus: Port Adjacency</span>
<span className="text-[10px] uppercase tracking-widest text-white/30">Type: Infrastructure</span>
</div>
</div>
<div className="order-1 md:order-2 relative h-64 md:h-auto img-zoom-container border-l border-white/[0.06]">
<img alt="Industrial" className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover grayscale brightness-[0.5] hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&amp;w=2609&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 bg-[#030303] py-24 md:py-32 border-b border-white/[0.06] w-full" id="partner">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full text-center">
<iconify-icon className="text-white/30 mb-8" height="32" icon="solar:users-group-two-rounded-linear" width="32"></iconify-icon>
<h2 className="serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 tracking-tight font-light">
                Partnership Criteria
            </h2>
<p className="text-lg md:text-xl font-light text-white/50 leading-relaxed mb-12 max-w-2xl mx-auto">
                We partner with international developers and family offices capable of executing at scale. We do not seek passive capital; we seek operational peers.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6">
<a className="group relative px-8 py-4 bg-white text-black text-xs uppercase tracking-[0.15em] font-medium hover:bg-slate-200 transition-colors" href="mailto:partners@vrg.com">
                    Request Introduction
                </a>
<span className="text-white/20 text-xs tracking-widest uppercase">By Invitation Only</span>
</div>
</div>
</section>

<footer className="bg-[#030303] py-12 w-full">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/30">
<div className="flex items-center gap-2">
<span className="serif text-lg text-white/50 tracking-tight normal-case">VRG</span>
</div>
<div className="flex gap-8">
<span>Caracas</span>
<span>Madrid</span>
<span>Miami</span>
</div>
<div>
                © 2024 Venezuela Redevelopment Group
            </div>
</div>
</footer>

    </>
  );
}
