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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#1d232c]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="md:hidden">
<svg className="lucide lucide-menu w-6 h-6 text-[#f0dbc1]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</div>

<div className="flex-1 md:flex-none text-center md:text-left flex items-center justify-center md:justify-start">
<a className="block" href="#">

<img alt="LEGACY" className="h-28 md:h-40 lg:h-52 xl:h-64 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b78f0b77-e5e7-4b75-8272-be133c4b8b88_3840w.png"/>
</a>
</div>

<div className="hidden md:flex items-center space-x-8 font-montserrat text-sm tracking-wide text-white/80">
<a className="hover:text-[#c79e75] transition-colors duration-300" href="#about">Our Story</a>
<a className="hover:text-[#c79e75] transition-colors duration-300" href="#journal">Our Visiblility</a>
<a className="hover:text-[#c79e75] transition-colors duration-300" href="#expertise">Our Approach</a>
<a className="hover:text-[#c79e75] transition-colors duration-300" href="#membership">Our Features</a>
</div>

<div className="hidden md:flex items-center space-x-6">
<svg className="lucide lucide-search w-5 h-5 text-white/60 hover:text-white cursor-pointer transition-colors" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<a className="hover:bg-[#a00923] uppercase transition-all duration-300 hover:border-[#c79e75]/30 text-xs text-white tracking-widest font-montserrat bg-[#88071d] border-transparent border pt-3 pr-6 pb-3 pl-6 shadow-[0_0_20px_rgba(136,7,29,0.3)]" href="#">
  Know More
</a>
</div>

<div className="md:hidden">
<svg className="lucide lucide-search w-6 h-6 text-[#f0dbc1]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
</div>
</nav>

<header className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#88071d]/10 to-transparent pointer-events-none"></div>
<div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#c79e75]/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c79e75]/30 bg-[#c79e75]/5">
<span className="w-1.5 h-1.5 rounded-full bg-[#c79e75]"></span>
<span className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#c79e75]">Luxe Digital-Print Magazine</span>
</div>
<h1 className="font-bodoni text-6xl md:text-8xl leading-[0.95] tracking-tight text-[#f0dbc1]">
                        Crafting <br/>
<span className="italic text-white">Powerful</span> Public <br/>
                        Presence.
                    </h1>
<p className="md:text-xl leading-relaxed text-lg text-white/70 font-lato max-w-xl">
                        Devoted to image building—the craft of shaping personal and brand presence through purposeful storytelling, visual excellence, and smart PR.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="group flex items-center justify-center gap-3 bg-[#f0dbc1] text-[#1d232c] px-8 py-4 font-montserrat text-sm font-medium tracking-wide hover:bg-white transition-all duration-300">
<span className="">Explore Latest Issue</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="flex border-[#ffffff30] hover:border-[#c79e75] hover:text-[#c79e75] transition-all duration-300 text-sm font-medium text-white tracking-wide font-montserrat border pt-4 pr-8 pb-4 pl-8 gap-x-3 gap-y-3 items-center justify-center">
                            Our Philosophy
                        </button>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="relative aspect-[3/4] group cursor-pointer">
<div className="absolute inset-0 bg-[#c79e75] rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500 ease-out"></div>
<div className="absolute inset-0 bg-[#1d232c] border border-white/10 overflow-hidden">
<img alt="Legacy Magazine Cover" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7bbab826-fc55-422e-b981-d89d3c739f72_800w.jpg" style={{}}/>
<div className="bg-gradient-to-t from-[#1d232c] via-transparent to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-8 left-8 right-8">
<span className="font-montserrat text-xs text-[#c79e75] tracking-widest uppercase mb-2 block">Volume 01</span>
<h3 className="font-bodoni text-3xl text-white tracking-tight">The Architecture of Influence</h3>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="w-full border-y border-white/5 bg-[#000000]/20 py-8">
<div className="flex flex-wrap md:justify-between hover:grayscale-0 transition-all duration-500 opacity-40 max-w-7xl mr-auto ml-auto pr-6 pl-6 grayscale gap-x-8 gap-y-8 items-center justify-center">
<span className="font-bodoni text-2xl">VOGUE</span>
<span className="text-xl font-bold tracking-widest font-montserrat">HARPER'S</span>
<span className="font-bodoni text-2xl italic">Vanity Fair</span>
<span className="font-montserrat font-bold text-xl">ELLE</span>
<span className="font-bodoni text-2xl">GQ</span>
</div>
</div>

<section className="py-24 md:py-32 px-6 relative" id="expertise">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<h2 className="md:text-5xl text-4xl text-white tracking-tight font-bodoni mb-6">Built to be Seen,<br/>
<span className="text-[#c79e75] italic">Shared &amp; Talked About.</span></h2>
<div className="h-px w-24 bg-[#88071d]"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group p-8 border border-white/10 bg-white/5 hover:bg-[#f0dbc1] transition-colors duration-500">
<div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1d232c] border border-white/20 mb-8 group-hover:border-[#1d232c]/20">
<svg className="lucide lucide-feather text-[#c79e75] group-hover:text-[#f0dbc1] w-6 h-6 transition-colors" data-lucide="feather" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg>
</div>
<h3 className="font-bodoni text-2xl mb-4 group-hover:text-[#1d232c] transition-colors">Purposeful Storytelling</h3>
<p className="font-lato text-lg text-white/60 group-hover:text-[#1d232c]/80 transition-colors leading-relaxed">
                        We go beyond simple reporting. We craft narratives that define legacies, turning individual profiles into compelling public presence.
                    </p>
</div>
<div className="group p-8 border border-white/10 bg-white/5 hover:bg-[#f0dbc1] transition-colors duration-500">
<div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1d232c] border border-white/20 mb-8 group-hover:border-[#1d232c]/20">
<svg className="lucide lucide-aperture text-[#c79e75] group-hover:text-[#f0dbc1] w-6 h-6 transition-colors" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
</div>
<h3 className="font-bodoni text-2xl mb-4 group-hover:text-[#1d232c] transition-colors">Visual Excellence</h3>
<p className="font-lato text-lg text-white/60 group-hover:text-[#1d232c]/80 transition-colors leading-relaxed">
                        A luxe digital-print experience. Every image is curated to project power and elegance, ensuring the visual language speaks loudly.
                    </p>
</div>
<div className="group p-8 border border-white/10 bg-white/5 hover:bg-[#f0dbc1] transition-colors duration-500">
<div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1d232c] border border-white/20 mb-8 group-hover:border-[#1d232c]/20">
<svg className="lucide lucide-megaphone text-[#c79e75] group-hover:text-[#f0dbc1] w-6 h-6 transition-colors" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
</div>
<h3 className="font-bodoni text-2xl mb-4 group-hover:text-[#1d232c] transition-colors">Strategic Amplification</h3>
<p className="font-lato text-lg text-white/60 group-hover:text-[#1d232c]/80 transition-colors leading-relaxed">
                        Smart PR integration ensures that every story we publish creates impact. We spotlight individuals who have a legacy to make.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#f0dbc1] pt-32 pr-6 pb-32 pl-6">
<div className="max-w-4xl mx-auto text-center">
<svg className="lucide lucide-quote w-12 h-12 text-[#88071d] mx-auto mb-8 opacity-50" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<h2 className="font-bodoni text-4xl md:text-6xl text-[#1d232c] leading-tight tracking-tight mb-8">
                "We spotlight individuals and brands who have a <span className="italic text-[#88071d]">legacy to share</span> or a legacy to make."
            </h2>
<div className="flex items-center justify-center gap-4">
<div className="h-px w-12 bg-[#1d232c]/20"></div>
<div className="h-px w-12 bg-[#1d232c]/20"></div>
</div>
</div>
</section>

<section className="md:py-32 border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mx-auto">

<div className="mb-20">
<h2 className="font-bodoni text-4xl md:text-5xl text-white mb-6 tracking-tight">Our Approach</h2>
<div className="h-px w-24 bg-[#c79e75]"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 text-center">

<div className="group relative">
<div className="font-bodoni text-6xl text-[#c79e75] mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          01</div>
<h3 className="font-bodoni text-2xl text-white mb-4 tracking-tight">Discover the Story</h3>
<p className="font-lato text-sm text-white/60 leading-relaxed max-w-[280px] mx-auto group-hover:text-white/80 transition-colors">
          Deep understanding of your vision, values, and the narrative that defines your impact.
        </p>
</div>

<div className="group relative">
<div className="font-bodoni text-6xl text-[#c79e75] mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          02</div>
<h3 className="font-bodoni text-2xl text-white mb-4 tracking-tight">Craft the Narrative</h3>
<p className="font-lato text-sm text-white/60 leading-relaxed max-w-[280px] mx-auto group-hover:text-white/80 transition-colors">
          Strategic storytelling that positions your legacy with authenticity, clarity, and editorial finesse.
        </p>
</div>

<div className="group relative">
<div className="font-bodoni text-6xl text-[#c79e75] mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          03</div>
<h3 className="font-bodoni text-2xl text-white mb-4 tracking-tight">Visual Direction</h3>
<p className="font-lato text-sm text-white/60 leading-relaxed max-w-[280px] mx-auto group-hover:text-white/80 transition-colors">
          Luxury visual identity and editorial design that elevates your presence across all touchpoints.
        </p>
</div>

<div className="group relative">
<div className="font-bodoni text-6xl text-[#c79e75] mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          04</div>
<h3 className="font-bodoni text-2xl text-white mb-4 tracking-tight">Amplify &amp; Publish</h3>
<p className="font-lato text-sm text-white/60 leading-relaxed max-w-[280px] mx-auto group-hover:text-white/80 transition-colors">
          Strategic publication and amplification across digital and print platforms for maximum impact.
        </p>
</div>
</div>
</div>
</section>

<section className="bg-[#c79e75] border-white/5 border-t pt-32 pr-6 pb-32 pl-6 [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="text-center max-w-3xl mr-auto ml-auto">
<h2 className="font-bodoni text-5xl md:text-6xl text-white mb-6 tracking-tight">
      Ready to Build Your Legacy?
    </h2>
<p className="font-lato text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto">
      Join visionary individuals and brands who are shaping influential narratives. Let's craft a story that endures.
    </p>
<a className="iinline-flex items-center justify-center hover:bg-[#88071d] transition-all duration-300 hover:shadow-[0_0_30px_rgba(136,7,29,0.2)] text-sm font-semibold text-white tracking-wide font-montserrat bg-[#88071d] rounded-sm pt-4 pr-12 pb-4 pl-12 shadow-[0_0_30px_rgba(136,7,29,0.1)]" href="#">
  Start Your Legacy
</a>
</div>
</section>
<section className="md:py-32 pt-24 pr-6 pb-24 pl-6" id="journal">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<span className="font-montserrat text-[#c79e75] text-xs uppercase tracking-widest mb-3 block">From the Magazine</span>
<h2 className="md:text-5xl text-4xl text-white tracking-tight font-bodoni">Curated Profiles</h2>
</div>
<a className="group flex items-center gap-2 font-montserrat text-sm text-white hover:text-[#c79e75] transition-colors" href="#">
                View Archive
                <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">

<article className="group relative aspect-[3/4] cursor-pointer overflow-hidden bg-black">
<img alt="Model" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7bbab826-fc55-422e-b981-d89d3c739f72_800w.jpg" style={{}}/>
<div className="absolute inset-0 p-6 flex flex-col justify-end">
<span className="font-montserrat text-xs text-[#c79e75] uppercase tracking-wider mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Profile</span>
<h3 className="font-bodoni text-2xl text-white leading-none">The Modern Muse</h3>
</div>
</article>

<article className="group relative aspect-[3/4] cursor-pointer overflow-hidden bg-black lg:col-span-2">
<img alt="Architecture" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2301&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<span className="font-montserrat text-xs text-[#c79e75] uppercase tracking-wider mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Space &amp; Brand</span>
<h3 className="font-bodoni text-3xl md:text-4xl text-white leading-none">Corporate Aesthetics
                        <span className="italic font-light">Redefined</span></h3>
</div>
</article>

<article className="group relative aspect-[3/4] cursor-pointer overflow-hidden bg-black">
<img alt="Executive" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a66989c8-3338-4a63-9eeb-ea22fbe035e1_800w.jpg" style={{}}/>
<div className="absolute inset-0 p-6 flex flex-col justify-end">
<span className="font-montserrat text-xs text-[#c79e75] uppercase tracking-wider mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Leadership</span>
<h3 className="font-bodoni text-2xl text-white leading-none">Visionary Tactics</h3>
</div>
</article>
</div>
</div>
</section>

<footer className="bg-black border-white/10 border-t pt-16 pr-6 pb-16 pl-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<a className="block mb-6" href="#">

<img alt="LEGACY" className="md:h-40 lg:h-52 xl:h-64 w-auto h-25 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b78f0b77-e5e7-4b75-8272-be133c4b8b88_3840w.png"/>
</a>
<p className="font-lato text-lg text-white/50 max-w-sm mb-8">
                    Shaping powerful personal and brand presence through purposeful storytelling and visual excellence.
                </p>
<div className="flex gap-6">
<svg className="lucide lucide-instagram w-5 h-5 text-white/40 hover:text-[#c79e75] cursor-pointer transition-colors" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<svg className="lucide lucide-twitter w-5 h-5 text-white/40 hover:text-[#c79e75] cursor-pointer transition-colors" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<svg className="lucide lucide-linkedin w-5 h-5 text-white/40 hover:text-[#c79e75] cursor-pointer transition-colors" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
</div>
<div className="">
<h4 className="font-montserrat text-xs text-white/90 uppercase tracking-widest mb-6">Explore</h4>
<ul className="space-y-4 font-lato text-lg text-white/50">
<li className=""><a className="hover:text-[#f0dbc1] transition-colors" href="#">Magazine</a></li>
<li className=""><a className="hover:text-[#f0dbc1] transition-colors" href="#">Digital Features</a></li>
<li className=""><a className="hover:text-[#f0dbc1] transition-colors" href="#">Events</a></li>
<li className=""><a className="hover:text-[#f0dbc1] transition-colors" href="#">Consultancy</a></li>
</ul>
</div>
<div className="">
<h4 className="font-montserrat text-xs text-white/90 uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-4 font-lato text-lg text-white/50">
<li><a className="hover:text-[#f0dbc1] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#f0dbc1] transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-[#f0dbc1] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#f0dbc1] transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-lato text-sm text-white/30">© 2024 Legacy Magazine. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
