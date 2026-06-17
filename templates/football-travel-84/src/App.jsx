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
      

<div className="video-background-container fixed -z-10 w-full h-screen top-0" data-alpha-mask="80" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}><video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://www.youtube.com/shorts/tT1JRa28iL0"></video></div>

<nav className="fixed flex z-50 bg-gradient-to-b from-black/90 to-transparent w-full pt-6 pr-6 pb-6 pl-6 top-0 items-center justify-between">
<div className="flex items-center gap-2">

<div className="h-6 w-6 bg-white rounded-full flex items-center justify-center">
<svg className="lucide lucide-zap fill-current w-[12px] h-[12px]" data-icon-replaced="true" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '12px', height: '12px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>

<span className="text-lg font-medium text-white tracking-tight">Boost Tours</span>
</div>

<a className="text-xs font-medium bg-white text-black px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-all duration-300 flex items-center gap-2 group tracking-wide" href="#">
            Inquire <svg className="lucide lucide-arrow-right w-3 h-3 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</nav>

<header className="relative w-full h-screen overflow-hidden flex items-end pb-24 md:pb-32">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-black/50 z-10"></div>
<div className="cursor-pointer bg-gradient-to-t from-black via-black/20 to-black/40 z-10 absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='https://drive.google.com/file/d/16h1th_Qo2r7-4NQEjvm-YED3O8gbg0CW/view?usp=drive_link';window.location.href='https://drive.google.com/file/d/16h1th_Qo2r7-4NQEjvm-YED3O8gbg0CW/view?usp=drive_link'" role="button"></div>

<img alt="Stadium Atmosphere" className="w-full h-full object-cover opacity-80 grayscale-[0.2]" src="default" style={{}}/>
</div>
<div className="z-20 container md:px-12 grid md:grid-cols-2 gap-12 mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-end">
<div className="">

<h1 className="md:text-9xl leading-[0.9] text-7xl font-semibold text-white tracking-tighter mb-8">Unlock <br/> <span className="text-gradient-premium">The Elite.</span></h1>
<p className="leading-relaxed text-xl font-light text-neutral-400 tracking-wide max-w-lg mb-10">
</p>
<div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
<button className="bg-white text-black px-8 py-4 rounded-full font-medium text-sm tracking-wide hover:bg-neutral-200 transition-colors flex items-center gap-2">
                        View Itineraries
                    </button>
<button className="group hover:text-neutral-300 transition-colors flex gap-3 text-sm font-medium text-white tracking-wide rounded-full pt-4 pr-6 pb-4 pl-6 gap-x-3 gap-y-3 items-center">
<div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white transition-all">
<svg className="lucide lucide-play w-3 h-3 fill-current ml-0.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
                        Watch Manifesto
                    </button>
</div>
</div>
<div className="hidden md:flex justify-end items-end gap-4">
<div className="glass-panel p-5 rounded-2xl max-w-xs backdrop-blur-xl border-white/10">
<div className="flex items-center gap-3 mb-3">
<div className="flex -space-x-3">
<img alt="" className="w-10 h-10 rounded-full border-2 border-black" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&amp;h=100&amp;fit=crop" style={{}}/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-black" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop" style={{}}/>
<img alt="" className="w-10 h-10 border-black border-2 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white" style={{}}>Trusted by Parents</span>
<span className="text-xs text-neutral-400">500+ academies hosted</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none"></div>
</header>

<section className="overflow-hidden bg-center bg-black bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4fc14d24-830f-407c-adb1-5fdaf660587f_3840w.jpg)] bg-cover border-white/5 border-t pt-32 pb-32 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-900/40 rounded-full blur-[120px] pointer-events-none"></div>
<div className="container md:px-12 z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="grid md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<span className="text-xs font-medium tracking-widest text-neutral-500 uppercase mb-4 block">Our Philosophy</span>
<h2 className="text-2xl font-medium tracking-tight text-white mb-6">More than just a tour.</h2>
<p className="leading-relaxed text-base font-light text-neutral-400" style={{}}>We bridge the gap between grassroots passion and professional reality. Boost Tours curates bespoke football itineraries that immerse players in the culture, discipline, and glory of the world's biggest clubs.</p>
<a className="inline-flex items-center gap-2 text-sm text-white mt-8 hover:text-neutral-300 transition-colors group border-b border-transparent hover:border-neutral-500 pb-0.5" href="#">
                        Read our story <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="md:col-span-8 md:pl-12">
<p className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1]">
<span className="transition-colors hover:text-neutral-500 text-neutral-700">At Boost — we believe</span>
<span className="text-slate-200">football is a universal language</span>
<span className="transition-colors hover:text-neutral-500 text-neutral-700">that transcends borders. We create</span>
<span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-neutral-500">unforgettable moments</span>
<span className="transition-colors hover:text-neutral-500 text-neutral-700" style={{}}>that inspire the next generation of athletes.</span>
</p>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950 border-white/5 border-t pt-24 pb-24">
<div className="container mx-auto px-6 md:px-12 mb-12 flex justify-between items-end">
<div className="">
<h3 className="text-3xl font-medium tracking-tight mb-2 text-white">Partner Clubs</h3>
<p className="text-base text-neutral-400 font-light">Exclusive access to the world's elite training grounds.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-colors">
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-colors">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-8 no-scrollbar snap-x snap-mandatory">

<div className="min-w-[85vw] md:min-w-[400px] h-[500px] relative rounded-2xl overflow-hidden snap-center group cursor-pointer border border-white/10 bg-neutral-900">
<img alt="Manchester" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&amp;w=1500&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="flex group-hover:opacity-100 transition-opacity duration-300 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
<svg className="lucide lucide-play w-6 h-6 fill-white text-white ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<div className="w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-widest text-neutral-400 bg-white/5 border border-white/5">England</span>
</div>
<h4 className="text-2xl font-medium tracking-tight text-white">Manchester City</h4>
<p className="text-sm text-neutral-400 mt-2 font-light">Etihad Campus Experience</p>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] h-[500px] relative rounded-2xl overflow-hidden snap-center group cursor-pointer border border-white/10 bg-neutral-900">
<img alt="Barcelona" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
<svg className="lucide lucide-play w-6 h-6 fill-white text-white ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-widest text-neutral-400 bg-white/5 border border-white/5">Spain</span>
</div>
<h4 className="text-2xl font-medium tracking-tight text-white">FC Barcelona</h4>
<p className="text-sm text-neutral-400 mt-2 font-light">La Masia Methodology</p>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] h-[500px] relative rounded-2xl overflow-hidden snap-center group cursor-pointer border border-white/10 bg-neutral-900">
<img alt="Turin" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&amp;w=1500&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
<svg className="lucide lucide-play w-6 h-6 fill-white text-white ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-widest text-neutral-400 bg-white/5 border border-white/5">Italy</span>
</div>
<h4 className="text-2xl font-medium tracking-tight text-white">Juventus FC</h4>
<p className="text-sm text-neutral-400 mt-2 font-light">Continassa Training Center</p>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] h-[500px] relative rounded-2xl overflow-hidden snap-center group cursor-pointer border border-white/10 bg-neutral-900">
<img alt="Munich" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
<svg className="lucide lucide-play w-6 h-6 fill-white text-white ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-widest text-neutral-400 bg-white/5 border border-white/5">Germany</span>
</div>
<h4 className="text-2xl font-medium tracking-tight text-white">Bayern Munich</h4>
<p className="text-sm text-neutral-400 mt-2 font-light">Säbener Straße Sessions</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative">
<div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 blur-3xl pointer-events-none"></div>
<div className="container mx-auto px-6 md:px-12 mb-12">
<h3 className="text-3xl font-medium tracking-tight mb-2 text-white">Tailored Experiences</h3>
<p className="text-base text-neutral-400 font-light">Beyond the 90 minutes. What defines a Boost Tour.</p>
</div>
<div className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-8 no-scrollbar snap-x snap-mandatory">

<div className="min-w-[85vw] md:min-w-[500px] relative rounded-xl overflow-hidden snap-center group border border-white/10 bg-neutral-900">
<div className="h-64 overflow-hidden relative">
<img alt="Coaching" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale" src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&amp;w=1500&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur px-3 py-1 rounded-full border border-white/10">
<svg className="lucide lucide-video w-3 h-3 text-white inline-block mr-1" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg> <span className="text-[10px] text-white uppercase tracking-wider font-medium">Preview</span>
</div>
</div>
<div className="p-8">
<h4 className="text-xl font-medium tracking-tight mb-3 text-white">Pro-Level Coaching</h4>
<p className="text-base text-neutral-400 font-light leading-relaxed">
                        Sessions delivered by UEFA licensed coaches from top academies. Focus on tactical awareness, technical drills, and match preparation.
                    </p>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[500px] relative rounded-xl overflow-hidden snap-center group border border-white/10 bg-neutral-900">
<div className="h-64 overflow-hidden relative">
<img alt="Matchday" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale" src="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&amp;w=2823&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur px-3 py-1 rounded-full border border-white/10">
<svg className="lucide lucide-video w-3 h-3 text-white inline-block mr-1" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg> <span className="text-[10px] text-white uppercase tracking-wider font-medium">Preview</span>
</div>
</div>
<div className="p-8">
<h4 className="text-xl font-medium tracking-tight mb-3 text-white">Matchday Hospitality</h4>
<p className="text-base text-neutral-400 font-light leading-relaxed">
                        Premium seats at the biggest fixtures in world football. Experience the roar of the crowd from the best vantage points in the stadium.
                    </p>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[500px] relative rounded-xl overflow-hidden snap-center group border border-white/10 bg-neutral-900">
<div className="h-64 overflow-hidden relative">
<img alt="Culture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale" src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&amp;w=2940&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur px-3 py-1 rounded-full border border-white/10">
<svg className="lucide lucide-video w-3 h-3 text-white inline-block mr-1" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg> <span className="text-[10px] text-white uppercase tracking-wider font-medium">Preview</span>
</div>
</div>
<div className="p-8">
<h4 className="text-xl font-medium tracking-tight mb-3 text-white">Stadium &amp; Museum Tours</h4>
<p className="text-base text-neutral-400 font-light leading-relaxed">
                        Walk the tunnel, visit the changing rooms, and explore the history of the clubs. A deep dive into the heritage of the beautiful game.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5">
<div className="container mx-auto px-6 md:px-12">
<div className="mb-16 text-center md:text-left">
<span className="text-neutral-500 text-xs font-medium tracking-widest uppercase">Community</span>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight mt-3 text-white">From the Touchline</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl flex flex-col justify-between h-full hover:bg-white/5 transition-colors">
<div>
<div className="flex gap-0.5 mb-6">
<svg className="lucide lucide-star w-3 h-3 text-white fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-white fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-white fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-white fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-white fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg text-neutral-300 font-light leading-relaxed">
                            "The organization was flawless. From the training session at Carrington to the match tickets at Old Trafford, Boost Tours delivered a Premier League experience."
                        </p>
</div>
<div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
<img alt="User" className="w-10 h-10 rounded-full grayscale" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop" style={{}}/>
<div>
<h5 className="text-sm font-medium text-white">David H.</h5>
<span className="text-xs text-neutral-500">Head Coach, Westside FC</span>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-xl flex flex-col justify-between h-full hover:bg-white/5 transition-colors">
<div>
<div className="flex gap-0.5 mb-6">
<svg className="lucide lucide-star w-3 h-3 text-white fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-white fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-white fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-white fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-white fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg text-neutral-300 font-light leading-relaxed">
                            "An unforgettable trip for our boys. Playing against local Spanish academies gave us a real benchmark. Highly recommended."
                        </p>
</div>
<div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
<img alt="User" className="w-10 h-10 rounded-full grayscale" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&amp;h=100&amp;fit=crop" style={{}}/>
<div>
<h5 className="text-sm font-medium text-white">Sarah Jenkins</h5>
<span className="text-xs text-neutral-500">Team Manager</span>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-xl flex flex-col justify-between h-full hover:bg-white/5 transition-colors">
<div className="">
<div className="flex gap-0.5 mb-6">
<svg className="lucide lucide-star w-3 h-3 text-white fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-white fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-white fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-white fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-white fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg text-neutral-300 font-light leading-relaxed">
                            "The attention to detail is what sets Boost apart. The logistics, the quality of opposition, and the cultural activities were perfectly balanced."
                        </p>
</div>
<div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
<img alt="User" className="w-10 h-10 rounded-full grayscale" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop" style={{}}/>
<div>
<h5 className="text-sm font-medium text-white">Marc Alonso</h5>
<span className="text-xs text-neutral-500">Director of Football</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black py-12 border-t border-white/10 text-neutral-500 font-light text-sm">
<div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<svg className="lucide lucide-zap text-white w-4 h-4 fill-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-white font-medium">Boost Tours</span>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div>
                © 2025 Boost Tours. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
