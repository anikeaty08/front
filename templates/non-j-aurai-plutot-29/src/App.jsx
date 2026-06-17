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
      

<nav className="fixed top-0 w-full z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-[#EAE8E4]">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<button className="md:hidden text-[#4A4036]">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<div className="hidden md:flex items-center space-x-8 text-sm tracking-wide font-medium text-[#78716C]">
<a className="hover:text-[#BC8F78] transition-colors duration-300" href="#studio">The Studio</a>
<a className="hover:text-[#BC8F78] transition-colors duration-300" href="#cafe">Nourish</a>
</div>
<a className="text-2xl font-['Cormorant_Garamond'] tracking-tighter font-semibold text-[#292524]" href="#">
                SŌMA
            </a>
<div className="hidden md:flex items-center space-x-8 text-sm tracking-wide font-medium text-[#78716C]">
<a className="hover:text-[#BC8F78] transition-colors duration-300" href="#schedule">Schedule</a>
<a className="px-5 py-2 rounded-full border border-[#D6D3CD] hover:border-[#BC8F78] hover:text-[#BC8F78] transition-all duration-300" href="#">
                    Book Class
                </a>
</div>
<button className="md:hidden text-[#4A4036]">
<svg className="lucide lucide-shopping-bag w-5 h-5" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</button>
</div>
</nav>

<header className="relative pt-24 pb-6 px-4 lg:px-6 bg-[#FAF9F6]">
<div className="max-w-7xl mx-auto">

<div className="relative w-full h-[65vh] min-h-[500px] max-h-[650px] rounded-[3rem] overflow-hidden shadow-xl shadow-[#292524]/5 group">


<img alt="Soft Pilates Flow" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2.5s] ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&amp;w=2574&amp;auto=format&amp;fit=crop" style={{}}/>

<div className="absolute inset-0 bg-[#4A4036]/30 backdrop-blur-[1px]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

<div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10">

<div className="fade-in-up mb-6" style={{animationDelay: '0.1s'}}>
<span className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-[10px] uppercase tracking-[0.25em] text-white font-medium">
                           Wellness Sanctuary
                       </span>
</div>

<h1 className="fade-in-up font-['Cormorant_Garamond'] text-5xl md:text-7xl lg:text-8xl font-light text-[#FAF9F6] leading-[0.95] tracking-tighter mb-8 hero-text-shadow" style={{animationDelay: '0.2s'}}>
<span className="italic text-[#E5D4CC] pr-2">Reform</span> your body,<br/>
                       restore your <span className="italic pl-2">mind.</span>
</h1>

<div className="fade-in-up max-w-lg mx-auto" style={{animationDelay: '0.3s'}}>
<p className="text-[#EAE8E4] text-base md:text-lg font-light leading-relaxed mb-8 drop-shadow-md">
                           An intimate space combining the precision of Reformer Pilates with the daily ritual of mindful coffee.
                       </p>
<div className="flex items-center justify-center space-x-4">
<button className="px-8 py-3.5 bg-[#FAF9F6] text-[#292524] rounded-full text-sm font-medium hover:bg-[#BC8F78] hover:text-white transition-all duration-300 shadow-lg hover:-translate-y-0.5">
                               View Schedule
                           </button>
<button className="px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/40 text-white rounded-full text-sm font-medium hover:bg-white hover:text-[#292524] transition-all duration-300 hover:-translate-y-0.5">
                               Our Menu
                           </button>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="w-full bg-[#EBE7DF] overflow-hidden py-4 border-y border-[#D6D3CD]/30">
<div className="flex items-center space-x-12 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
<div className="flex items-center space-x-12 opacity-60">
<span className="font-['Cormorant_Garamond'] text-2xl italic">Breath</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#BC8F78]"></span>
<span className="font-['Cormorant_Garamond'] text-2xl italic">Balance</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#BC8F78]"></span>
<span className="font-['Cormorant_Garamond'] text-2xl italic">Flow</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#BC8F78]"></span>
<span className="font-['Cormorant_Garamond'] text-2xl italic">Nourish</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#BC8F78]"></span>
<span className="font-['Cormorant_Garamond'] text-2xl italic">Community</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#BC8F78]"></span>
<span className="font-['Cormorant_Garamond'] text-2xl italic">Breath</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#BC8F78]"></span>
<span className="font-['Cormorant_Garamond'] text-2xl italic">Balance</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#BC8F78]"></span>
<span className="font-['Cormorant_Garamond'] text-2xl italic">Flow</span>
</div>
</div>
</div>

<section className="pt-24 pr-6 pb-24 pl-6" id="studio">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<span className="block text-xs font-medium tracking-[0.2em] uppercase text-[#BC8F78] mb-2">The Practice</span>
<h2 className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl font-medium tracking-tight text-[#292524]">Reformer &amp; Mat</h2>
</div>
<p className="text-[#78716C] font-light max-w-sm text-sm lg:text-base leading-relaxed">
                    Small group sessions designed to lengthen, strengthen and restore. A modern approach to classical Pilates.
                </p>
</div>

<div className="grid md:grid-cols-3 gap-8">

<div className="group relative bg-white p-2 rounded-[2rem] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 border border-[#F5F5F0]">
<div className="relative h-64 rounded-[1.5rem] overflow-hidden mb-6">
<img alt="Reformer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1616803689943-5601631c7fec?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium">50 mins</div>
</div>
<div className="px-4 pb-6">
<h3 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[#292524] mb-2">Signature Reformer</h3>
<p className="text-sm text-[#78716C] mb-6 font-light">A full body flow focusing on alignment, core strength and flexibility. Suitable for all levels.</p>
<a className="inline-flex items-center text-xs font-semibold tracking-wide uppercase text-[#BC8F78] hover:text-[#9A7A68]" href="#">
                            Book Session <svg className="lucide lucide-arrow-right w-3 h-3 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="group relative bg-white p-2 rounded-[2rem] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 border border-[#F5F5F0]">
<div className="relative h-64 rounded-[1.5rem] overflow-hidden mb-6">
<img alt="Mat Pilates" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/73432daf-cbd9-4626-ba72-a5d4aae8f37d_800w.jpg" style={{}}/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium">45 mins</div>
</div>
<div className="px-4 pb-6">
<h3 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[#292524] mb-2">Sculpt &amp; Tone</h3>
<p className="text-sm text-[#78716C] mb-6 font-light">Dynamic mat pilates incorporating small equipment for targeted toning and endurance.</p>
<a className="inline-flex items-center text-xs font-semibold tracking-wide uppercase text-[#BC8F78] hover:text-[#9A7A68]" href="#">
                            Book Session <svg className="lucide lucide-arrow-right w-3 h-3 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="group relative bg-white p-2 rounded-[2rem] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 border border-[#F5F5F0]">
<div className="relative h-64 rounded-[1.5rem] overflow-hidden mb-6">
<img alt="Private" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&amp;w=2069&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium">60 mins</div>
</div>
<div className="px-4 pb-6">
<h3 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[#292524] mb-2">Private 1:1</h3>
<p className="text-sm text-[#78716C] mb-6 font-light">Bespoke sessions tailored specifically to your body's needs and personal goals.</p>
<a className="inline-flex items-center text-xs font-semibold tracking-wide uppercase text-[#BC8F78] hover:text-[#9A7A68]" href="#">
                            Enquire Now <svg className="lucide lucide-arrow-right w-3 h-3 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="cafe">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 mt-12">
<div className="rounded-[2rem] overflow-hidden aspect-[3/4]">
<img alt="Avocado Toast" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&amp;w=1974&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="rounded-[2rem] bg-[#F5F2EB] p-6 flex flex-col justify-center items-center text-center aspect-square">
<svg className="lucide lucide-coffee w-8 h-8 text-[#BC8F78] mb-3" data-lucide="coffee" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path><path d="M6 2v2"></path></svg>
<span className="font-['Cormorant_Garamond'] text-xl italic text-[#4A4036]">SpecialtyCoffee</span>
</div>
</div>
<div className="space-y-4">
<div className="rounded-[2rem] bg-[#FDFCF8] p-6 flex flex-col justify-center items-center text-center aspect-square border border-[#F5F5F0]">
<svg className="lucide lucide-wheat w-8 h-8 text-[#BC8F78] mb-3" data-lucide="wheat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 22 16 8"></path><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"></path><path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path><path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path><path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path></svg>
<span className="font-['Cormorant_Garamond'] text-xl italic text-[#4A4036]">PlantBased</span>
</div>
<div className="rounded-[2rem] overflow-hidden aspect-[3/4]">
<img alt="Latte Art" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&amp;w=1921&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
</div>
</div>

<div>
<span className="inline-block mb-4 text-xs font-medium tracking-[0.2em] uppercase text-[#BC8F78]">The Café</span>
<h2 className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl font-medium tracking-tight mb-8 text-[#292524]">
                        Wholesome food,simply prepared.
                    </h2>
<p className="text-[#78716C] font-light text-lg mb-10 leading-relaxed">
                        Our food philosophy is simple: fresh, organic ingredients assembled with care. No heavy cooking, just pure nourishment to fuel your post-practice glow.
                    </p>

<div className="space-y-6">

<div className="flex items-baseline justify-between group cursor-default">
<div className="flex-1">
<h4 className="font-['Cormorant_Garamond'] text-xl font-medium text-[#4A4036] group-hover:text-[#BC8F78] transition-colors">Smashed Avo on Sourdough</h4>
<p className="text-xs text-[#78716C] mt-1 font-light">Chili flakes, lemon zest, seeds, organic microgreens</p>
</div>
<span className="text-sm font-medium text-[#4A4036] ml-4">$14</span>
</div>
<div className="w-full h-px bg-[#F5F5F0]"></div>

<div className="flex items-baseline justify-between group cursor-default">
<div className="flex-1">
<h4 className="font-['Cormorant_Garamond'] text-xl font-medium text-[#4A4036] group-hover:text-[#BC8F78] transition-colors">Banana &amp; Walnut Bread</h4>
<p className="text-xs text-[#78716C] mt-1 font-light">Toasted with espresso butter or coconut yogurt</p>
</div>
<span className="text-sm font-medium text-[#4A4036] ml-4">$9</span>
</div>
<div className="w-full h-px bg-[#F5F5F0]"></div>

<div className="flex items-baseline justify-between group cursor-default">
<div className="flex-1">
<h4 className="font-['Cormorant_Garamond'] text-xl font-medium text-[#4A4036] group-hover:text-[#BC8F78] transition-colors">Matcha Ceremonial Latte</h4>
<p className="text-xs text-[#78716C] mt-1 font-light">Oat milk, agave syrup, vanilla</p>
</div>
<span className="text-sm font-medium text-[#4A4036] ml-4">$6</span>
</div>
<div className="w-full h-px bg-[#F5F5F0]"></div>

<div className="flex items-baseline justify-between group cursor-default">
<div className="flex-1">
<h4 className="font-['Cormorant_Garamond'] text-xl font-medium text-[#4A4036] group-hover:text-[#BC8F78] transition-colors">House Granola Bowl</h4>
<p className="text-xs text-[#78716C] mt-1 font-light">Seasonal fruits, greek yogurt, honey drizzle</p>
</div>
<span className="text-sm font-medium text-[#4A4036] ml-4">$12</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#F5F2EB]">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="text-center p-8">
<div className="w-12 h-12 mx-auto bg-[#D6C0B3]/20 rounded-full flex items-center justify-center text-[#BC8F78] mb-6">
<svg className="lucide lucide-sun" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<h3 className="font-['Cormorant_Garamond'] text-xl font-medium mb-3">Natural Light</h3>
<p className="text-sm text-[#78716C] font-light">Floor to ceiling windows to keep your practice airy and connected to nature.</p>
</div>
<div className="text-center p-8">
<div className="w-12 h-12 mx-auto bg-[#D6C0B3]/20 rounded-full flex items-center justify-center text-[#BC8F78] mb-6">
<svg className="lucide lucide-armchair" data-lucide="armchair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path><path d="M5 18v2"></path><path d="M19 18v2"></path></svg>
</div>
<h3 className="font-['Cormorant_Garamond'] text-xl font-medium mb-3">Lounge &amp; Stay</h3>
<p className="text-sm text-[#78716C] font-light">Not just a studio. A place to read, work, or catch up with friends after class.</p>
</div>
<div className="text-center p-8">
<div className="w-12 h-12 mx-auto bg-[#D6C0B3]/20 rounded-full flex items-center justify-center text-[#BC8F78] mb-6">
<svg className="lucide lucide-sparkles" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="font-['Cormorant_Garamond'] text-xl font-medium mb-3">Curated Wellness</h3>
<p className="text-sm text-[#78716C] font-light">Premium reformers, Aesop amenities, and carefully selected organic coffee beans.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-medium text-[#292524] mb-4 tracking-tight">Invest in Yourself</h2>
<p className="text-[#78716C] font-light">Flexible options for your lifestyle.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-8 rounded-[2rem] border border-[#EAE8E4] bg-white text-center hover:border-[#BC8F78] transition-colors duration-300">
<h3 className="text-sm font-semibold tracking-widest uppercase text-[#78716C] mb-4">Casual</h3>
<div className="text-4xl font-['Cormorant_Garamond'] text-[#292524] font-medium mb-2">$35</div>
<p className="text-xs text-[#78716C] mb-8">per class</p>
<ul className="space-y-3 mb-8 text-sm text-[#4A4036] font-light">
<li>Valid for 14 days</li>
<li>Mat or Reformer</li>
<li>Towel hire included</li>
</ul>
<button className="w-full py-3 rounded-xl border border-[#D6D3CD] text-sm hover:bg-[#BC8F78] hover:text-white hover:border-[#BC8F78] transition-all">Select</button>
</div>

<div className="p-8 rounded-[2rem] bg-[#292524] text-[#FAF9F6] text-center shadow-xl transform md:-translate-y-4">
<div className="inline-block px-3 py-1 bg-[#BC8F78] text-white text-[10px] font-bold tracking-widest uppercase rounded-full mb-6">Most Popular</div>
<h3 className="text-sm font-semibold tracking-widest uppercase text-[#A8A29E] mb-4">The Ritual</h3>
<div className="text-4xl font-['Cormorant_Garamond'] text-white font-medium mb-2">$65</div>
<p className="text-xs text-[#A8A29E] mb-8">weekly</p>
<ul className="space-y-3 mb-8 text-sm text-[#D6D3CD] font-light">
<li>3 classes per week</li>
<li>Priority booking window</li>
<li>10% off Café &amp; Retail</li>
</ul>
<button className="w-full py-3 rounded-xl bg-[#BC8F78] text-white text-sm hover:bg-[#A67C65] transition-all">Join Now</button>
</div>

<div className="p-8 rounded-[2rem] border border-[#EAE8E4] bg-white text-center hover:border-[#BC8F78] transition-colors duration-300">
<h3 className="text-sm font-semibold tracking-widest uppercase text-[#78716C] mb-4">Unlimited</h3>
<div className="text-4xl font-['Cormorant_Garamond'] text-[#292524] font-medium mb-2">$85</div>
<p className="text-xs text-[#78716C] mb-8">weekly</p>
<ul className="space-y-3 mb-8 text-sm text-[#4A4036] font-light">
<li>Unlimited classes</li>
<li>Bring a friend monthly</li>
<li>15% off Café &amp; Retail</li>
</ul>
<button className="w-full py-3 rounded-xl border border-[#D6D3CD] text-sm hover:bg-[#BC8F78] hover:text-white hover:border-[#BC8F78] transition-all">Select</button>
</div>
</div>
</div>
</section>

<footer className="bg-[#292524] text-[#EAE8E4] pt-24 pb-12 rounded-t-[3rem] mt-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<a className="text-3xl font-['Cormorant_Garamond'] tracking-tighter text-white font-medium mb-6 block" href="#">SŌMA</a>
<p className="text-sm font-light text-[#A8A29E] leading-relaxed">
                        A space for body and mind.<br/>
                        Reformer Pilates &amp; Coffee Shop.
                    </p>
</div>

<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#78716C] mb-6">Studio</h4>
<ul className="space-y-4 text-sm font-light">
<li><a className="hover:text-[#BC8F78] transition-colors" href="#">Class Schedule</a></li>
<li><a className="hover:text-[#BC8F78] transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-[#BC8F78] transition-colors" href="#">Instructors</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#78716C] mb-6">Visit</h4>
<ul className="space-y-4 text-sm font-light">
<li><a className="hover:text-[#BC8F78] transition-colors" href="#">The Café Menu</a></li>
<li><a className="hover:text-[#BC8F78] transition-colors" href="#">Location</a></li>
<li><a className="hover:text-[#BC8F78] transition-colors" href="#">Private Events</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#78716C] mb-6">Stay Connected</h4>
<form className="space-y-4">
<div className="relative">
<input className="w-full bg-[#1C1917] border border-[#44403C] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#BC8F78] text-[#EAE8E4] placeholder-[#57534E]" placeholder="Email address" type="email"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#BC8F78] p-1" type="button">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</form>
<div className="flex space-x-4 mt-6">
<a className="text-[#78716C] hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-[#78716C] hover:text-white transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</div>
</div>
</div>
<div className="border-t border-[#44403C] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#57534E] font-light">
<p>© 2024 SŌMA Studio. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-[#A8A29E]" href="#">Privacy Policy</a>
<a className="hover:text-[#A8A29E]" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
