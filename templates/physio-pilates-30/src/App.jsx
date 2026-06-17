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



      // Phone reveal animation on scroll
      document.addEventListener("DOMContentLoaded",()=>{const p=document.getElementById("phone-mockup");if(!p)return;const t=p.parentElement;const u=()=>{const r=t.getBoundingClientRect();const h=window.innerHeight;const s=h*0.9;const e=h*0.3;let v=(s-r.top)/(s-e);v=Math.max(0,Math.min(1,v));p.style.transform=`translateX(${(1-v)*200}px)`;p.style.opacity=v;};window.addEventListener("scroll",()=>requestAnimationFrame(u));window.addEventListener("resize",()=>requestAnimationFrame(u));u();});
      
      // Initialize Lucide icons
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
      

<div className="video-background-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://d2slp0ba7lpilw.cloudfront.net/Emma_webapp_vid.mp4"></video>
</div>

<nav className="absolute z-50 transition-all duration-300 bg-gradient-to-b from-black/50 to-transparent w-full pt-6 pb-12 top-0">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-white">

<div className="flex flex-col tracking-widest leading-none">
<span className="font-serif text-2xl uppercase">Emma Frazier</span>
<span className="text-[10px] tracking-[0.3em] uppercase opacity-80 mt-1">
            Physio · Pilates · Wellbeing
          </span>
</div>

<div className="hidden md:flex items-center space-x-8 text-lg font-light tracking-wide">
<a className="hover:text-[#C06C4E] transition-colors" href="#">
            Services
          </a>
<a className="hover:text-[#C06C4E] transition-colors" href="#">About</a>
<a className="hover:text-[#C06C4E] transition-colors" href="#">
            Contact Us
          </a>
</div>

<div className="flex items-center space-x-6">
<a className="hover:opacity-75 transition-opacity hidden sm:block" href="#">
<iconify-icon height="24" icon="solar:instagram-linear" width="24"></iconify-icon>
</a>
<a className="hover:opacity-75 transition-opacity hidden sm:block" href="#">
<iconify-icon height="24" icon="solar:facebook-linear" width="24"></iconify-icon>
</a>
<a className="flex items-center hover:opacity-75 transition-opacity" href="#">
<iconify-icon className="mr-2" height="24" icon="solar:cart-large-linear" width="24"></iconify-icon>
<span className="text-lg font-light">0</span>
</a>
<a className="bg-[#C06C4E] hover:bg-[#a85a3f] text-white text-sm font-medium tracking-widest uppercase px-6 py-3 rounded-full transition-colors duration-300" href="#">
            Book Now
          </a>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Video Fallback" className="w-full h-full object-cover hidden" src="default" style={{}}/>

<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/3759600/3759600-hd_1920_1080_25fps.mp4" type="video/mp4"/>
</video>

<div className="bg-stone-900/30 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 mt-20">
<h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-[1.1]">
          Bespoke wellness,
          <br/>
          wherever you go.
        </h1>
<p className="text-xl md:text-2xl font-light text-stone-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience the studio from home. Personalized physiotherapy and
          pilates plans tailored to your body and goals, now available in your
          pocket.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="hover:bg-[#a85a3f] uppercase transition-all duration-300 sm:w-auto text-base font-medium text-white tracking-widest text-center bg-[#C06C4E] w-full rounded-full pt-4 pr-10 pb-4 pl-10" href="#">Sign Up</a>
<a className="bg-transparent border border-white hover:bg-white hover:text-stone-900 text-white text-base font-medium tracking-widest uppercase px-10 py-4 rounded-full transition-all duration-300 w-full sm:w-auto text-center" href="#">
            Sign In
          </a>
</div>
<div className="mt-8 flex justify-center items-center gap-2 text-stone-200 text-sm tracking-wide">
<iconify-icon className="text-[#C06C4E] text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>7-Day Free Trial included</span>
</div>
</div>
</header>

<section className="overflow-hidden md:py-32 bg-[#F5ECDF] py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

<div className="w-full lg:w-1/2 space-y-8">
<h2 className="font-serif text-4xl md:text-5xl font-medium text-stone-800 tracking-tight leading-tight">
              Your personal physio
              <br/>
<span className="text-[#C06C4E] italic">in your pocket.</span>
</h2>
<p className="text-xl text-stone-600 leading-relaxed font-light">
              Designed to bridge the gap between clinic visits and daily life,
              the Emma Frazier app ensures your rehabilitation and wellness
              journey never pauses.
            </p>
<ul className="space-y-6 mt-4">
<li className="flex items-start">
<div className="flex-shrink-0 bg-[#C06C4E]/10 p-2 rounded-full flex items-center justify-center">
<iconify-icon className="text-[#C06C4E] text-2xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
<div className="ml-4">
<h3 className="text-lg font-medium text-stone-800">
                    Video Library
                  </h3>
<p className="text-lg text-stone-500 font-light">
                    Unlimited access to 200+ guided pilates &amp; physio
                    sessions.
                  </p>
</div>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 bg-[#C06C4E]/10 p-2 rounded-full flex items-center justify-center">
<iconify-icon className="text-[#C06C4E] text-2xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="ml-4">
<h3 className="text-lg font-medium text-stone-800">
                    Progress Tracking
                  </h3>
<p className="text-lg text-stone-500 font-light">
                    Monitor your range of motion and pain levels daily.
                  </p>
</div>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 bg-[#C06C4E]/10 p-2 rounded-full flex items-center justify-center">
<iconify-icon className="text-[#C06C4E] text-2xl" icon="solar:calendar-mark-linear"></iconify-icon>
</div>
<div className="ml-4">
<h3 className="text-lg font-medium text-stone-800">
                    Tailored Plans
                  </h3>
<p className="text-lg text-stone-500 font-light">
                    Routines automatically adjusted based on your recovery.
                  </p>
</div>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 bg-[#C06C4E]/10 p-2 rounded-full flex items-center justify-center">
<iconify-icon className="text-[#C06C4E] text-2xl" icon="solar:chat-dots-linear"></iconify-icon>
</div>
<div className="ml-4">
<h3 className="text-lg font-medium text-stone-800">
                    Direct Support
                  </h3>
<p className="text-lg text-stone-500 font-light">
                    Chat directly with the Emma Frazier team for advice.
                  </p>
</div>
</li>
</ul>
<div className="pt-6 flex flex-wrap gap-4">

<button className="bg-stone-900 text-white rounded-xl px-4 py-2 flex items-center space-x-2 hover:bg-stone-800 transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200">
<iconify-icon height="32" icon="ic:baseline-apple" width="32"></iconify-icon>
<div className="text-left">
<div className="text-xs uppercase tracking-wide opacity-80">
                    Download on the
                  </div>
<div className="text-lg font-medium leading-none">App Store</div>
</div>
</button>

<button className="bg-stone-900 text-white rounded-xl px-4 py-2 flex items-center space-x-2 hover:bg-stone-800 transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200">
<iconify-icon height="32" icon="ic:baseline-android" width="32"></iconify-icon>
<div className="text-left">
<div className="text-xs uppercase tracking-wide opacity-80">
                    Get it on
                  </div>
<div className="text-lg font-medium leading-none">
                    Google Play
                  </div>
</div>
</button>
</div>
</div>

<div className="w-full lg:w-1/2 flex justify-center relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E8E4DF] rounded-full blur-3xl opacity-50 z-0"></div>

<div className="relative z-10 w-[300px] h-[600px] bg-stone-900 rounded-[3rem] shadow-2xl border-8 border-stone-800 overflow-hidden opacity-0 translate-x-64" id="phone-mockup" style={{transform: 'translateX(0px)', opacity: '1'}}>

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-stone-900 rounded-b-xl z-20"></div>

<div className="w-full h-full bg-[#FBF8F3] flex flex-col relative overflow-hidden rounded-[2.5rem]">

<div className="flex justify-between items-center px-6 pt-3 pb-2 z-10 w-full">
<span className="text-[12px] font-semibold text-stone-900 tracking-wide pl-1">13:15</span>
<div className="flex gap-1.5 items-center pr-1 text-stone-900">
<svg aria-hidden="true" className="lucide lucide-signal w-3.5 h-3.5 stroke-[2.5]" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg aria-hidden="true" className="lucide lucide-wifi w-3.5 h-3.5 stroke-[2.5]" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg aria-hidden="true" className="lucide lucide-battery-full w-4 h-4 stroke-[2.5]" data-lucide="battery-full" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10v4"></path><path d="M14 10v4"></path><path d="M22 14v-4"></path><path d="M6 10v4"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-20">

<div className="text-center pt-2 pb-6">
<h1 className="font-serif text-[22px] uppercase tracking-widest text-[#C06C4E]">Emma Frazier</h1>
<p className="text-[8px] uppercase tracking-[0.3em] text-[#C06C4E]/80 mt-1">Physio &amp; Pilates</p>
</div>

<div className="flex justify-between items-start mb-8">
<div className="">
<h2 className="text-[32px] leading-[1.1] text-stone-900 font-serif">Good morning Emma</h2>
<p className="text-stone-500 font-light text-[15px] mt-2 tracking-wide">Let's move with intention today.</p>
</div>
<div className="relative mt-1">
</div>
</div>

<div className="mb-4">
<h3 className="font-serif text-xl text-stone-900 mb-4">Featured Today</h3>
<div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100/50">

<div className="relative aspect-video w-full bg-stone-200">
<img alt="Workout" className="w-full h-full object-cover" src="https://d2slp0ba7lpilw.cloudfront.net/Standing%20legs%20series.jpg?w=800&amp;q=80"/>

<div className="absolute top-4 left-4 bg-[#EAB308] text-white text-[10px] font-bold px-2.5 py-1 rounded tracking-widest uppercase">
                                    Beginner
                                </div>

<div className="flex bg-black/10 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-12 h-12 bg-[#D66D5A]/90 backdrop-blur-sm rounded-full flex items-center justify-center pl-1 shadow-lg text-white">
<svg aria-hidden="true" className="lucide lucide-play w-5 h-5 fill-current" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>

<div className="p-5">
<h4 className="font-serif text-xl font-medium text-stone-900 mb-2">Standing Leg Series</h4>
<p className="text-sm font-light text-stone-500 leading-relaxed line-clamp-4">
                                    A comprehensive 20-minute standing leg workout designed to build lower body strength, improve balance, and enhance functional movement patterns. Perfect for those looking to strengthen glutes, quads, and hamstrings while maintaining good form.
                                </p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white/95 backdrop-blur-md border-t border-stone-100 pb-6 pt-3 px-4 flex justify-between items-center z-20">
<button className="flex flex-col items-center gap-1 group">
<div className="text-[#D66D5A]">
<svg aria-hidden="true" className="lucide lucide-home w-5 h-5 stroke-[2]" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<span className="text-[9px] font-medium text-[#D66D5A]">Home</span>
</button>
<button className="flex flex-col items-center gap-1 group text-stone-400 hover:text-stone-600 transition">
<svg aria-hidden="true" className="lucide lucide-calendar w-5 h-5 stroke-[1.5]" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-[9px] font-medium">Book</span>
</button>
<button className="flex flex-col items-center gap-1 group text-stone-400 hover:text-stone-600 transition">
<svg aria-hidden="true" className="lucide lucide-library w-5 h-5 stroke-[1.5]" data-lucide="library" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path></svg>
<span className="text-[9px] font-medium">Library</span>
</button>
<button className="flex flex-col items-center gap-1 group text-stone-400 hover:text-stone-600 transition">
<svg aria-hidden="true" className="lucide lucide-radio w-5 h-5 stroke-[1.5]" data-lucide="radio" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path><path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path><path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path><path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path><circle cx="12" cy="12" r="2"></circle></svg>
<span className="text-[9px] font-medium">Live</span>
</button>
<button className="flex flex-col items-center gap-1 group text-stone-400 hover:text-stone-600 transition">
<svg aria-hidden="true" className="lucide lucide-layout-dashboard w-5 h-5 stroke-[1.5]" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="text-[9px] font-medium">Programs</span>
</button>
<button className="flex flex-col items-center gap-1 group text-stone-400 hover:text-stone-600 transition">
<svg aria-hidden="true" className="lucide lucide-users w-5 h-5 stroke-[1.5]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-[9px] font-medium">Community</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#CC6343] border-stone-100 border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto pl-6 md:px-6">
<div className="flex flex-col md:flex-row text-[#F5ECDF] mb-12 pr-6 items-end justify-between" style={{}}>
<div className="">
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-2 text-[#F5ECDF]">
              Curated Collections
            </h2>
<p className="text-lg font-light text-[#F5ECDF]" style={{}}>
              Explore over 200+ guided sessions for every need.
            </p>
</div>
<div className="hidden md:flex space-x-2">
<button className="p-2 rounded-full border border-[#F5ECDF]/30 text-[#F5ECDF] hover:bg-[#F5ECDF] hover:text-[#CC6343] transition">
<iconify-icon className="" height="20" icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="p-2 rounded-full border border-[#F5ECDF]/30 text-[#F5ECDF] hover:bg-[#F5ECDF] hover:text-[#CC6343] transition">
<iconify-icon className="" height="20" icon="solar:arrow-right-linear" style={{color: 'rgb(245, 236, 223)'}} width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pr-6 pb-8 space-x-6">

<div className="min-w-[280px] md:min-w-[360px] snap-start group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
<img alt="Yoga" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover bg-center" src="https://d2slp0ba7lpilw.cloudfront.net/Abs%20%26%20arms%20image.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-white text-xs font-medium">
                20 min
              </div>
<div className="flex group-hover:opacity-100 transition-opacity duration-300 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="bg-white/90 p-3 rounded-full text-[#C06C4E] flex items-center justify-center">
<iconify-icon className="ml-1" height="24" icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] uppercase font-bold text-[#F5ECDF] tracking-widest" style={{}}>
                Flexibility
              </span>
<span className="text-[10px] text-[#F5ECDF]/60">•</span>
<span className="text-[10px] uppercase text-[#F5ECDF] tracking-wide" style={{}}>
                Beginner
              </span>
</div>
<h3 className="text-xl text-[#F5ECDF] font-serif transition-colors" style={{}}>
              Morning Mobility
            </h3>
<p className="text-sm font-light text-[#F5ECDF] mt-1" style={{}}>
              Start your day with gentle spine movements.
            </p>
</div>

<div className="min-w-[280px] md:min-w-[360px] snap-start group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
<img alt="Pilates" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://d2slp0ba7lpilw.cloudfront.net/HealthyHips10.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-white text-xs font-medium">
                45 min
              </div>
<div className="flex group-hover:opacity-100 transition-opacity duration-300 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="bg-white/90 p-3 rounded-full text-[#C06C4E] flex items-center justify-center">
<iconify-icon className="ml-1" height="24" icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] uppercase font-bold text-[#F5ECDF] tracking-widest" style={{}}>
                Strength
              </span>
<span className="text-[10px] text-[#F5ECDF]/60">•</span>
<span className="text-[10px] uppercase text-[#F5ECDF] tracking-wide" style={{}}>
                Advanced
              </span>
</div>
<h3 className="text-xl text-[#F5ECDF] font-serif transition-colors" style={{}}>
              Power Pilates
            </h3>
<p className="text-sm font-light text-[#F5ECDF] mt-1" style={{}}>
              Intense core and glute focused session.
            </p>
</div>

<div className="min-w-[280px] md:min-w-[360px] snap-start group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
<img alt="Meditation" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://d2slp0ba7lpilw.cloudfront.net/Longevity%20legs%20thumb.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-white text-xs font-medium">
                15 min
              </div>
<div className="flex group-hover:opacity-100 transition-opacity duration-300 bg-center opacity-0 bg-[url(https://d2slp0ba7lpilw.cloudfront.net/Longevity%20legs%20thumb.jpg?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="bg-white/90 p-3 rounded-full text-[#C06C4E] flex items-center justify-center">
<iconify-icon className="ml-1" height="24" icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] uppercase font-bold text-[#F5ECDF] tracking-widest" style={{}}>
                Mindfulness
              </span>
<span className="text-[10px] text-[#F5ECDF]/60">•</span>
<span className="text-[10px] uppercase text-[#F5ECDF] tracking-wide" style={{}}>
                All Levels
              </span>
</div>
<h3 className="text-xl font-serif text-[#F5ECDF] transition-colors" style={{}}>
              Deep Rest &amp; Breath
            </h3>
<p className="text-sm font-light text-[#F5ECDF] mt-1" style={{}}>
              Calm your nervous system before sleep.
            </p>
</div>

<div className="min-w-[280px] md:min-w-[360px] snap-start group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
<img alt="Rehab" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://d2slp0ba7lpilw.cloudfront.net/Tx%20roller%20image.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-white text-xs font-medium">
                25 min
              </div>
<div className="flex group-hover:opacity-100 transition-opacity duration-300 opacity-0 bg-[url(https://d2slp0ba7lpilw.cloudfront.net/Tx%20roller%20image.jpg?w=800&amp;q=80)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="bg-white/90 p-3 rounded-full text-[#C06C4E] flex items-center justify-center">
<iconify-icon className="ml-1" height="24" icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] uppercase font-bold text-[#F5ECDF] tracking-widest" style={{}}>
                Rehab
              </span>
<span className="text-[10px] text-[#F5ECDF]/60">•</span>
<span className="text-[10px] uppercase text-[#F5ECDF] tracking-wide" style={{}}>
                Post-Natal
              </span>
</div>
<h3 className="text-xl text-[#F5ECDF] font-serif transition-colors" style={{}}>
              Pelvic Floor Basics
            </h3>
<p className="text-sm font-light text-[#F5ECDF] mt-1" style={{}}>
              Safe exercises for early recovery.
            </p>
</div>

<div className="min-w-[200px] snap-start flex flex-col justify-center items-center text-center p-8 rounded-2xl border border-[#F5ECDF]/30 hover:border-[#F5ECDF] hover:bg-[#F5ECDF]/10 transition-all cursor-pointer group">
<div className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform bg-[#F5ECDF] text-[#CC6343]">
<iconify-icon height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-lg text-[#F5ECDF] mb-1">View All</h3>
<p className="text-xs text-[#F5ECDF]/80 uppercase tracking-widest">
              200+ Classes
            </p>
</div>
</div>
</div>
</section>

<section className="bg-[#F5ECDF] border-[#F5ECDF] border-t pt-20 pb-20">
<div className="text-center max-w-7xl mr-auto ml-auto pr-6 pl-6">
<h2 className="font-serif text-3xl md:text-4xl font-medium mb-12 tracking-tight">
          Stories of recovery
        </h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="text-left bg-slate-50 rounded-2xl px-8 py-8">
<div className="flex text-[#C06C4E] mb-4 space-x-1">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="font-serif italic text-xl text-stone-800 mb-6 leading-relaxed">
              "The specific pilates routines for my lower back have changed my
              life. I feel stronger than I did in my 20s."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-300 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"/>
</div>
<div className="">
<div className="text-sm font-semibold text-stone-900">
                  Sarah Jenkins
                </div>
<div className="text-xs text-stone-500">London</div>
</div>
</div>
</div>

<div className="text-left bg-slate-50 rounded-2xl px-8 py-8">
<div className="flex text-[#C06C4E] mb-4 space-x-1">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="font-serif italic text-xl text-stone-800 mb-6 leading-relaxed">
              "Having Emma's expertise in an app is incredible. The direct chat
              feature helped me tweak my form instantly."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-300 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"/>
</div>
<div>
<div className="text-sm font-semibold text-stone-900">
                  James Miller
                </div>
<div className="text-xs text-stone-500">Bristol</div>
</div>
</div>
</div>

<div className="text-left bg-slate-50 rounded-2xl px-8 py-8">
<div className="flex text-[#C06C4E] mb-4 space-x-1">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="font-serif italic text-xl text-stone-800 mb-6 leading-relaxed">
              "Beautifully designed and so easy to use. It feels like a premium
              studio experience right in my living room."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-300 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"/>
</div>
<div className="">
<div className="text-sm font-semibold text-stone-900">
                  Elena Rossi
                </div>
<div className="text-xs text-stone-500">Manchester</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F5ECDF] pt-24 pb-24">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-12">
<h2 className="font-serif text-4xl font-medium tracking-tight mb-4">
            Invest in your wellbeing
          </h2>
<p className="text-lg text-stone-600 font-light">
            Start with a 7-day free trial. Cancel anytime.
          </p>
</div>
<div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">

<div className="flex-1 hover:bg-white transition duration-300 flex flex-col bg-slate-50 border rounded-2xl px-8 py-8 justify-between">
<div className="">
<h3 className="font-serif text-2xl font-medium text-stone-800 mb-2">
                Monthly
              </h3>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-serif font-medium text-stone-900">
                  £25
                </span>
<span className="text-stone-500 ml-1">/month</span>
</div>
<ul className="space-y-3 mb-8 text-lg font-light text-stone-600">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C06C4E] text-lg" icon="solar:check-circle-linear"></iconify-icon>
                  Full library access
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C06C4E] text-lg" icon="solar:check-circle-linear"></iconify-icon>
                  New classes weekly
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C06C4E] text-lg" icon="solar:check-circle-linear"></iconify-icon>
                  Cancel anytime
                </li>
</ul>
</div>
<a className="block w-full text-center bg-[#CC6343] hover:bg-[#b5583b] text-white font-medium tracking-wide py-3 rounded-lg transition shadow-md" href="#">
              Start 7-Day Trial
            </a>
</div>

<div className="flex-1 flex flex-col bg-slate-50 border-[#F5ECDF] border rounded-2xl px-8 py-8 relative shadow-xl justify-between">
<div className="absolute top-0 right-0 bg-[#C06C4E] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg tracking-widest uppercase">
              Best Value
            </div>
<div className="">
<h3 className="font-serif text-2xl font-medium text-stone-800 mb-2">
                Yearly
              </h3>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-serif font-medium text-stone-900">
                  £320
                </span>
<span className="text-stone-500 ml-1">/year</span>
</div>
<ul className="space-y-3 mb-8 text-lg font-light text-stone-600">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C06C4E] text-lg" icon="solar:check-circle-linear"></iconify-icon>
                  All monthly features
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C06C4E] text-lg" icon="solar:check-circle-linear"></iconify-icon>
                  Personalized roadmap
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C06C4E] text-lg" icon="solar:check-circle-linear"></iconify-icon>
                  Priority support chat
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C06C4E] text-lg" icon="solar:check-circle-linear"></iconify-icon>
                  Save 20% annually
                </li>
</ul>
</div>
<a className="block w-full text-center bg-[#CC6343] hover:bg-[#b5583b] text-white font-medium tracking-wide py-3 rounded-lg transition shadow-md" href="#">
              Start 7-Day Trial
            </a>
</div>
</div>
</div>
</section>

<section className="bg-[#CC6343] border-[#CC6343] border-t pt-24 pb-24">
<div className="max-w-3xl mx-auto px-6 text-[#F5ECDF]" style={{}}>
<h2 className="text-3xl font-medium text-[#F5ECDF] tracking-tight font-serif text-center bg-[#CC6343] mb-12">
          Frequently Asked Questions
        </h2>
<div className="space-y-4">

<div className="border-b border-[#F5ECDF]/30 pb-4">
<details className="group cursor-pointer">
<summary className="flex justify-between items-center font-medium text-xl text-[#F5ECDF] list-none" style={{}}>
                Do I need equipment?
                <span className="transition group-open:rotate-180">
<iconify-icon className="text-[#F5ECDF]/60 text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-[#F5ECDF]/80 font-light mt-3 leading-relaxed text-lg">
                Most of our foundational pilates and physio routines are
                mat-based and require no equipment. For advanced sessions, we
                may suggest a resistance band or small weights.
              </p>
</details>
</div>

<div className="border-b border-[#F5ECDF]/30 pb-4">
<details className="group cursor-pointer">
<summary className="flex justify-between items-center font-medium text-xl text-[#F5ECDF] list-none" style={{}}>
                Can I cancel my trial?
                <span className="transition group-open:rotate-180">
<iconify-icon className="text-[#F5ECDF]/60 text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-[#F5ECDF]/80 font-light mt-3 leading-relaxed text-lg">
                Absolutely. You can cancel your subscription at any point during
                the 7-day free trial via your account settings and you will not
                be charged.
              </p>
</details>
</div>

<div className="border-b border-[#F5ECDF]/30 pb-4">
<details className="group cursor-pointer">
<summary className="flex justify-between items-center font-medium text-xl text-[#F5ECDF] list-none" style={{}}>
                Is this suitable for injuries?
                <span className="transition group-open:rotate-180">
<iconify-icon className="text-[#F5ECDF]/60 text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-[#F5ECDF]/80 font-light mt-3 leading-relaxed text-lg">
                Yes, the app is designed by a physiotherapist. We have specific
                pathways for injury rehabilitation. However, we always recommend
                consulting your doctor before starting new exercises.
              </p>
</details>
</div>
</div>
</div>
</section>

<footer className="text-[#F5ECDF]/80 bg-[#CC6343] border-[#CC6343] border-t pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col">
<span className="font-serif text-2xl text-[#F5ECDF] uppercase tracking-wider" style={{}}>
            Emma Frazier
          </span>
<span className="text-xs tracking-widest uppercase mt-1">
            © 2023 All Rights Reserved
          </span>
</div>
<div className="flex space-x-6 text-sm font-light">
<a className="hover:text-white transition" href="#">Privacy Policy</a>
<a className="hover:text-white transition" href="#">Terms of Service</a>
<a className="hover:text-white transition" href="#">Support</a>
</div>
<div className="flex items-center space-x-4">
<a className="hover:text-white transition" href="#">
<iconify-icon height="20" icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-white transition" href="#">
<iconify-icon height="20" icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>


    </>
  );
}
