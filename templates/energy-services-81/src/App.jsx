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
      

<nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
<a className="text-2xl tracking-tighter font-semibold uppercase display-font" href="#">
            4SEASONS<span className="text-[#9D1A10]">.</span>
</a>
<div className="hidden md:flex gap-12 text-sm font-medium tracking-wide uppercase">
<a className="hover:text-neutral-400 transition-colors" href="#services">Expertise</a>
<a className="hover:text-neutral-400 transition-colors" href="#about">Philosophy</a>
<a className="hover:text-neutral-400 transition-colors" href="#projects">Operations</a>
</div>
<button className="group flex items-center gap-2 uppercase text-xs tracking-widest border border-white/20 px-5 py-2 hover:bg-white hover:text-black transition-all duration-300">
            Contact
            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</nav>

<header className="relative w-full h-screen flex flex-col justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Oil Refinery" className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#9D1A10]/20 mix-blend-overlay"></div>
</div>

<div className="relative z-10 px-6 md:px-12 w-full max-w-7xl mx-auto pt-20">
<div className="flex flex-col items-start">
<p className="text-[#9D1A10] uppercase tracking-[0.3em] text-xs font-semibold mb-4 reveal-text delay-100">
                    Iraq Operations — Est. 2008
                </p>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-normal uppercase tracking-tighter leading-[0.85] text-white mix-blend-lighten reveal-text delay-200">
                    Integrated<br/>
<span className="ml-12 md:ml-24 text-neutral-500">Life</span> Support
                </h1>
<div className="mt-12 md:ml-auto md:w-1/3 reveal-text delay-300 backdrop-blur-sm bg-white/5 p-6 border-l-2 border-[#9D1A10]">
<p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                        Redefining camp management, catering, and logistics for the energy sector. We deliver precision in the harshest environments.
                    </p>
</div>
</div>
</div>

<div className="absolute bottom-10 left-6 md:left-12 z-20 flex items-center gap-4 reveal-text delay-300">
<div className="h-[1px] w-12 bg-neutral-600"></div>
<span className="uppercase text-xs tracking-widest text-neutral-500">Scroll to Explore</span>
</div>
</header>

<section className="relative py-32 px-6 md:px-12 bg-[#0a0a0a]">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
<div className="md:col-span-8">
<h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.1]">
                        We operate where others hesitate. <br/>
<span className="text-[#9D1A10]">Precision logistics</span> meet world-class hospitality.
                    </h2>
</div>
<div className="md:col-span-4 flex flex-col gap-6">
<div className="flex items-start gap-4">
<span className="iconify text-[#9D1A10] mt-1" data-icon="lucide:crosshair" data-width="24"></span>
<div>
<h3 className="text-white text-lg font-medium uppercase tracking-wide">Mission Critical</h3>
<p className="text-neutral-500 text-sm mt-2">Supporting Oil &amp; Gas infrastructures with zero margin for error.</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="iconify text-[#9D1A10] mt-1" data-icon="lucide:shield-check" data-width="24"></span>
<div>
<h3 className="text-white text-lg font-medium uppercase tracking-wide">Standard Compliance</h3>
<p className="text-neutral-500 text-sm mt-2">ISO certified operations ensuring safety and quality control.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="relative w-full" id="services">

<section className="sticky top-0 h-screen w-full bg-neutral-900 flex items-center overflow-hidden border-t border-white/5">
<div className="absolute right-0 top-0 w-full md:w-2/3 h-full z-0">
<div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-transparent z-10"></div>
<img alt="Catering" className="w-full h-full object-cover grayscale opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="relative z-20 px-6 md:px-12 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
<div>
<span className="text-[#9D1A10] text-9xl font-bold opacity-20 absolute -top-20 -left-10 select-none display-font">01</span>
<h2 className="text-5xl md:text-7xl font-normal uppercase tracking-tighter text-white mb-8 relative">Industrial<br/>Catering</h2>
<p className="text-lg text-neutral-400 max-w-md font-light mb-8">
                        Feeding the workforce that powers the world. We provide nutritious, high-volume meal preparation tailored to multi-national palates in remote locations.
                    </p>
<ul className="space-y-4 text-sm uppercase tracking-wider text-neutral-300">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#9D1A10]"></div> Centralized Kitchens</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#9D1A10]"></div> HACCP Compliance</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#9D1A10]"></div> 24/7 Service</li>
</ul>
</div>
</div>
</section>

<section className="sticky top-0 h-screen w-full bg-[#111] flex items-center overflow-hidden border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
<div className="absolute left-0 top-0 w-full md:w-2/3 h-full z-0">
<div className="absolute inset-0 bg-gradient-to-l from-[#111] via-[#111]/80 to-transparent z-10"></div>
<img alt="Camp Management" className="w-full h-full object-cover grayscale opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="relative z-20 px-6 md:px-12 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
<div className="md:col-start-2 pl-0 md:pl-12 border-l border-white/10">
<span className="text-[#9D1A10] text-9xl font-bold opacity-20 absolute -bottom-20 right-10 select-none display-font">02</span>
<h2 className="text-5xl md:text-7xl font-normal uppercase tracking-tighter text-white mb-8">Camp<br/>Management</h2>
<p className="text-lg text-neutral-400 max-w-md font-light mb-8">
                        Creating a home away from home. Complete facility management including housekeeping, laundry, and recreational facility maintenance for maximum crew welfare.
                    </p>
<a className="inline-flex items-center gap-2 text-[#9D1A10] uppercase tracking-widest text-sm hover:text-white transition-colors" href="#">
                        Explore Facilities <span className="iconify" data-icon="lucide:arrow-up-right"></span>
</a>
</div>
</div>
</section>

<section className="sticky top-0 h-screen w-full bg-[#050505] flex items-center overflow-hidden border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
<div className="absolute inset-0 z-0">
<img alt="Logistics" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
</div>
<div className="relative z-20 px-6 md:px-12 w-full max-w-7xl mx-auto text-center">
<span className="text-[#9D1A10] text-lg uppercase tracking-[0.5em] mb-4 block">Logistics &amp; Supply Chain</span>
<h2 className="text-6xl md:text-9xl font-normal uppercase tracking-tighter text-white mb-12">Total<br/>Support</h2>
<div className="flex flex-wrap justify-center gap-4 md:gap-8">
<div className="px-8 py-4 border border-white/10 hover:border-[#9D1A10] hover:bg-[#9D1A10]/10 transition-all duration-300 cursor-crosshair">
<span className="block text-2xl font-bold text-white mb-1">Procurement</span>
<span className="text-xs text-neutral-500 uppercase">Global Sourcing</span>
</div>
<div className="px-8 py-4 border border-white/10 hover:border-[#9D1A10] hover:bg-[#9D1A10]/10 transition-all duration-300 cursor-crosshair">
<span className="block text-2xl font-bold text-white mb-1">Transport</span>
<span className="text-xs text-neutral-500 uppercase">Fleet Management</span>
</div>
<div className="px-8 py-4 border border-white/10 hover:border-[#9D1A10] hover:bg-[#9D1A10]/10 transition-all duration-300 cursor-crosshair">
<span className="block text-2xl font-bold text-white mb-1">Waste Mgmt</span>
<span className="text-xs text-neutral-500 uppercase">Environmental Safe</span>
</div>
</div>
</div>
</section>
</div>

<section className="py-32 bg-white text-black relative overflow-hidden" id="about">
<div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-100 -skew-x-12 translate-x-32 hidden md:block z-0"></div>
<div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<div className="relative">
<img alt="Team" className="w-full h-[500px] object-cover grayscale" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#9D1A10] p-4 flex items-center justify-center text-white text-center">
<span className="font-bold text-4xl display-font leading-none">15+<br/><span className="text-sm font-sans font-normal tracking-wider opacity-80 uppercase">Years Exp.</span></span>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-5xl md:text-7xl font-normal uppercase tracking-tighter mb-8 text-neutral-900">
                        Built on <br/><span className="italic font-serif text-[#9D1A10]">Resilience</span>
</h2>
<p className="text-xl leading-relaxed text-neutral-700 font-light mb-6">
                        4Seasons isn't just a service provider; we are a strategic partner in Iraq's most demanding sectors. We understand the landscape, the culture, and the critical nature of energy operations.
                    </p>
<p className="text-sm uppercase tracking-widest font-semibold text-neutral-900 border-b border-black pb-1 inline-block">Read Our Full Story</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0a0a0a] overflow-hidden" id="projects">
<div className="px-6 md:px-12 max-w-7xl mx-auto mb-16 flex items-end justify-between">
<h2 className="text-5xl md:text-7xl font-normal uppercase tracking-tighter text-white">Selected<br/>Projects</h2>
<div className="hidden md:block text-right">
<p className="text-[#9D1A10]">///</p>
<p className="text-neutral-500 uppercase text-xs tracking-widest">Recent Deployments</p>
</div>
</div>

<div className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-12 no-scrollbar snap-x snap-mandatory">

<div className="min-w-[85vw] md:min-w-[40vw] h-[60vh] relative group cursor-pointer snap-center border border-white/10 overflow-hidden">
<img alt="Basra Project" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-[#9D1A10] text-xs uppercase tracking-widest mb-2 block">Basra, Iraq</span>
<h3 className="text-3xl font-medium text-white uppercase tracking-tight">Rumaila Oil Field</h3>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
<p className="text-neutral-400 text-sm mt-4">Full camp management for 2,000+ personnel.</p>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[40vw] h-[60vh] relative group cursor-pointer snap-center border border-white/10 overflow-hidden">
<img alt="Project 2" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-[#9D1A10] text-xs uppercase tracking-widest mb-2 block">Erbil, Iraq</span>
<h3 className="text-3xl font-medium text-white uppercase tracking-tight">Tactical Logistics</h3>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
<p className="text-neutral-400 text-sm mt-4">Heavy equipment transport and supply chain solutions.</p>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[40vw] h-[60vh] relative group cursor-pointer snap-center border border-white/10 overflow-hidden">
<img alt="Project 3" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-[#9D1A10] text-xs uppercase tracking-widest mb-2 block">Remote Site</span>
<h3 className="text-3xl font-medium text-white uppercase tracking-tight">Mobile Catering Unit</h3>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
<p className="text-neutral-400 text-sm mt-4">Deployable kitchen units for exploration teams.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-[#9D1A10] overflow-hidden">
<div className="marquee-container">
<div className="marquee-content flex gap-20 items-center">

<span className="text-4xl font-bold text-black/30 uppercase tracking-tighter">ISO 9001</span>
<span className="text-4xl font-bold text-black/30 uppercase tracking-tighter">HACCP CERTIFIED</span>
<span className="text-4xl font-bold text-black/30 uppercase tracking-tighter">OHSAS 18001</span>
<span className="text-4xl font-bold text-black/30 uppercase tracking-tighter">ISO 14001</span>
<span className="text-4xl font-bold text-black/30 uppercase tracking-tighter">ISO 22000</span>
<span className="text-4xl font-bold text-black/30 uppercase tracking-tighter">ISO 9001</span>
<span className="text-4xl font-bold text-black/30 uppercase tracking-tighter">HACCP CERTIFIED</span>
<span className="text-4xl font-bold text-black/30 uppercase tracking-tighter">OHSAS 18001</span>
<span className="text-4xl font-bold text-black/30 uppercase tracking-tighter">ISO 14001</span>
<span className="text-4xl font-bold text-black/30 uppercase tracking-tighter">ISO 22000</span>
</div>
</div>
</section>

<footer className="bg-[#050505] pt-32 pb-12 px-6 md:px-12 border-t border-white/5 relative">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
<div>
<h2 className="text-6xl md:text-8xl font-normal uppercase tracking-tighter text-white mb-6">Let's Talk<br/>Business</h2>
<a className="text-2xl md:text-3xl text-neutral-400 hover:text-[#9D1A10] transition-colors border-b border-neutral-800 pb-2 inline-block" href="mailto:info@4seasons.iq">info@4seasons.iq</a>
</div>
<div className="flex flex-col justify-end items-start md:items-end">
<div className="text-right">
<p className="text-neutral-500 uppercase text-xs tracking-widest mb-2">Headquarters</p>
<p className="text-white text-lg font-light">Baghdad, Iraq<br/>Al-Jadriyah Dist. 913</p>
</div>
<div className="mt-8 text-right">
<p className="text-neutral-500 uppercase text-xs tracking-widest mb-2">Connect</p>
<div className="flex gap-4">
<a className="text-white hover:text-[#9D1A10]" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="24"></span></a>
<a className="text-white hover:text-[#9D1A10]" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="24"></span></a>
<a className="text-white hover:text-[#9D1A10]" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="24"></span></a>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8">
<div className="text-[10rem] md:text-[14rem] leading-none font-bold text-white/5 select-none -mb-10 md:-mb-16 -ml-4 display-font">4S</div>
<p className="text-neutral-600 text-xs uppercase tracking-widest mb-4 md:mb-0">© 2024 4Seasons Co. All Rights Reserved.</p>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50vw] h-[50vh] glow-red pointer-events-none opacity-30"></div>
</footer>

    </>
  );
}
