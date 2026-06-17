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



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
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
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


        (function(){const testimonials=[{quote:"\"VegasOps AI increased our dinner reservations by 40% and virtually eliminated no-shows. The AI handles the rush seamlessly.\"",author:"Marco V.",role:"Restaurant Owner",image:"https://images.unsplash.com/photo-1583394838336-acd977736f90?w=2160&q=80"},{quote:"\"The recall agent is a game changer. It automatically contacts past clients to fill my schedule. My chair is booked solid.\"",author:"James T.",role:"Master Barber",image:"https://images.unsplash.com/photo-1635273051932-d112b03d6560?w=2160&q=80"},{quote:"\"We were losing revenue on missed calls. Now, every call is answered 24/7, and our Google reviews have tripled automatically.\"",author:"Sarah L.",role:"Salon Manager",image:"https://images.unsplash.com/photo-1595956553066-fe24a8c33395?w=2160&q=80"}];let currentIndex=0;window.nextTestimonial=function(){currentIndex=(currentIndex+1)%testimonials.length;updateTestimonial();};window.prevTestimonial=function(){currentIndex=(currentIndex-1+testimonials.length)%testimonials.length;updateTestimonial();};function updateTestimonial(){const data=testimonials[currentIndex];const quoteEl=document.getElementById('t-quote');const authorEl=document.getElementById('t-author');const roleEl=document.getElementById('t-role');const imageEl=document.getElementById('t-image');[quoteEl,authorEl,roleEl,imageEl].forEach(el=>el.style.opacity='0');setTimeout(()=>{quoteEl.innerText=data.quote;authorEl.innerText=data.author;roleEl.innerHTML=`${data.role} <span class="inline-block w-4 h-3 rounded-[1px] bg-gradient-to-r from-blue-600 via-white to-red-600 shadow-sm opacity-80"></span>`;imageEl.src=data.image;[quoteEl,authorEl,roleEl,imageEl].forEach(el=>el.style.opacity='1');},300);}})();
      


        (function(){const testimonials=[{quote:"Since using VegasOps AI, we've seen a 40% increase in reservations and practically eliminated no-shows. The AI receptionist handles the dinner rush calls perfectly.",author:"Marco V.",role:"Restaurant Owner",image:"https://images.unsplash.com/photo-1583394838336-acd977736f90?w=2160&q=80"},{quote:"The recall agent is a game changer. It automatically calls clients I haven't seen in a while and books them. My chair is booked solid.",author:"James T.",role:"Master Barber",image:"https://images.unsplash.com/photo-1635273051932-d112b03d6560?w=2160&q=80"},{quote:"I was losing so much revenue to missed calls. Now, every call is answered 24/7, and my Google reviews have tripled thanks to the automated requests.",author:"Sarah L.",role:"Salon Manager",image:"https://images.unsplash.com/photo-1595956553066-fe24a8c33395?w=2160&q=80"}];let currentIndex=0;window.nextTestimonial=function(){currentIndex=(currentIndex+1)%testimonials.length;updateTestimonial();};window.prevTestimonial=function(){currentIndex=(currentIndex-1+testimonials.length)%testimonials.length;updateTestimonial();};function updateTestimonial(){const data=testimonials[currentIndex];const quoteEl=document.getElementById('t-quote');const authorEl=document.getElementById('t-author');const roleEl=document.getElementById('t-role');const imageEl=document.getElementById('t-image');[quoteEl,authorEl,roleEl,imageEl].forEach(el=>el.style.opacity='0');setTimeout(()=>{quoteEl.innerText=data.quote;authorEl.innerText=data.author;roleEl.innerHTML=`${data.role} <span class="inline-block w-4 h-3 rounded-[1px] bg-gradient-to-r from-blue-600 via-white to-red-600 shadow-sm opacity-80"></span>`;imageEl.src=data.image;[quoteEl,authorEl,roleEl,imageEl].forEach(el=>el.style.opacity='1');},300);}})();
      


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
      

<div className="fixed z-0 pointer-events-none top-0 right-0 bottom-0 left-0">
<div className="stars absolute inset-0" style={{opacity: '0.25'}}></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-900/10 blur-[120px] rounded-full"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-950/20 blur-[100px] rounded-full"></div>
</div>

<nav className="flex animate-entry delay-75 max-w-7xl z-50 border-white/5 border-b mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">

<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<div className="relative flex items-center justify-center w-8 h-8">
<svg className="lucide lucide-asterisk text-white w-8 h-8 absolute rotate-45" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v12"></path>
<path d="M17.196 9 6.804 15"></path>
<path d="m6.804 9 10.392 6"></path>
</svg>
<svg className="lucide lucide-asterisk absolute w-[32px] h-[32px]" data-icon-replaced="true" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '32px', height: '32px', color: 'rgb(249, 115, 22)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v12"></path>
<path d="M17.196 9 6.804 15"></path>
<path d="m6.804 9 10.392 6"></path>
</svg>
</div>
<span className="text-xl text-white font-sans font-medium" style={{}}>
          VegasOps AI
        </span>
</div>

<div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-1 py-1 backdrop-blur-md">
<a className="px-4 py-1.5 bg-neutral-800/80 rounded-full text-xs text-white flex items-center gap-2 border border-white/5 shadow-inner font-sans" href="#" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
          Home
        </a>
<a className="hover:text-white transition-colors text-xs text-neutral-400 pt-1.5 pr-4 pb-1.5 pl-4 font-sans" href="#restaurant">
          Restaurants
        </a>
<a className="hover:text-white transition-colors text-xs text-neutral-400 pt-1.5 pr-4 pb-1.5 pl-4" href="#">
          About Us
        </a>
<a className="hover:text-white transition-colors text-xs text-neutral-400 pt-1.5 pr-4 pb-1.5 pl-4" href="#">
          Pricing
        </a>
<button className="px-4 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors flex items-center gap-1 font-sans" style={{}}>
          Features
          <svg className="lucide lucide-chevron-down w-3 h-3" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<a className="px-4 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors font-sans" href="#" style={{}}>
          Book Consultation
        </a>
</div>

<a className="hidden md:block hover:brightness-110 transition-all text-sm text-white bg-gradient-to-b from-orange-400 to-orange-600 border-white/20 rounded-full border-t pt-2 pr-5 pb-2 pl-5 shadow-[0_0_15px_-3px_rgba(249,115,22,0.4)] font-sans" href="#" style={{}}>
        Get Started
      </a>
</nav>

<main className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pt-24 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-20 pl-6 relative items-center">
<div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="AhqzKk9mZE0EnlENMQDi"></div>

</div>

<div className="lg:col-span-7 flex flex-col relative items-start z-10">

<div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-neutral-300 animate-entry delay-100">
<svg className="lucide lucide-sparkles w-3 h-3 text-orange-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
<span className="font-sans" style={{}}>
            Eliminate Missed Calls &amp; No-Shows
          </span>
</div>

<h1 className="lg:text-[76px] leading-[1.05] animate-entry delay-150 text-5xl font-light text-white tracking-tight font-bricolage mb-6" style={{transition: 'outline 0.1s ease-in-out'}}>
          SCALE YOUR VENUE
          <span className="inline-flex align-middle mx-1"></span>
          24/7
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
            WITH AI
          </span>
<br/>
          AUTOMATION
        </h1>

<p className="text-lg max-w-xl mb-10 leading-relaxed font-sans animate-entry delay-200 text-neutral-300" style={{}}>
          Premier AI automation for Las Vegas restaurants &amp; barbershops.
          Capture every call, eliminate no-shows, and maximize revenue without
          adding staff.
        </p>

<div className="flex flex-wrap gap-4 mb-20 gap-x-4 gap-y-4 items-center animate-entry delay-300">
<button className="group relative flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-t from-yellow-200 via-orange-400 to-orange-500 px-8 py-3 text-lg font-medium text-[#2c1306] shadow-[0_0_40px_-5px_rgba(249,115,22,0.6)] ring-1 ring-inset ring-white/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-5px_rgba(249,115,22,0.8)] font-sans">
<span className="font-sans" style={{}}>Explore Solutions</span>
</button>
<button className="px-8 py-3 rounded-full bg-white text-black text-lg hover:bg-neutral-200 transition-colors font-sans font-medium" style={{}}>
            Book Demo
          </button>
</div>
</div>

<div className="lg:col-span-5 flex lg:justify-end lg:mt-0 mt-0 relative justify-center z-10 animate-entry delay-500">

<div className="relative w-[360px] bg-neutral-900 rounded-[32px] p-[2px] electric-card overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-yellow-300 via-orange-500 to-transparent opacity-80 z-0"></div>

<div className="relative z-10 bg-[#0A0A0A] rounded-[30px] h-full p-8 flex flex-col items-start overflow-hidden">

<div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-b from-orange-500/10 to-transparent"></div>

<div className="flex justify-between w-full items-start mb-6 relative">
<span className="text-[10px] uppercase text-neutral-400 border border-white/10 px-2 py-1 rounded bg-white/5 flex items-center gap-1.5 font-sans" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                Revenue Recovered
              </span>
</div>
<h3 className="text-xl text-white mb-2 font-sans" style={{}}>
              Missed Calls Converted
            </h3>
<p className="text-xs text-neutral-400 mb-6 leading-relaxed font-sans" style={{}}>
              AI Receptionist active 24/7.
            </p>

<div className="w-full mb-8">
<div className="flex items-baseline gap-2 mb-2">
<span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-orange-400 font-bricolage tracking-tight font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>
                  +40%
                </span>
<span className="text-xs text-orange-500 flex items-center bg-orange-500/10 px-1.5 py-0.5 rounded font-sans" style={{}}>
<svg className="lucide lucide-arrow-up mr-0.5" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 7-7 7 7"></path>
<path d="M12 19V5"></path>
</svg>
                  Reservations
                </span>
</div>

<div className="w-full h-16 relative mt-4">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 280 60">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#f97316" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#f97316" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="" d="M0 50 C 40 50, 60 30, 100 35 C 140 40, 160 10, 200 15 C 240 20, 260 5, 280 0 V 60 H 0 Z" fill="url(#chartGradient)"></path>
<path className="" d="M0 50 C 40 50, 60 30, 100 35 C 140 40, 160 10, 200 15 C 240 20, 260 5, 280 0" fill="none" stroke="#f97316" strokeLinecap="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<circle cx="280" cy="0" fill="#fff" r="3" stroke="#f97316" strokeWidth="2"></circle>
</svg>
</div>
</div>

<button className="hover:brightness-110 transition-all text-sm text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 w-full border-white/20 rounded-full border-t mb-8 pt-3 pb-3 shadow-[0_4px_15px_rgba(249,115,22,0.4)] font-sans" style={{}}>
              Hear AI In Action
            </button>

<div className="space-y-4 w-full mb-8">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-3 text-neutral-300">
<svg className="lucide lucide-eye w-4 h-4 text-orange-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
<span className="font-sans" style={{}}>Calls Handled</span>
</div>
<span className="text-white font-sans" style={{}}>2.4M</span>
</div>
</div>

<div className="relative w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mb-6 flex items-center justify-center">
<span className="bg-[#0A0A0A] px-2 text-[10px] text-neutral-400 uppercase font-sans" style={{}}>
                AI Powered Scale
              </span>
</div>

<div className="flex gap-4 w-full">
<div className="flex items-center gap-1.5 text-[10px] text-neutral-400 font-sans" style={{}}>
<svg className="lucide lucide-sparkles w-3.5 h-3.5 text-white fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
                Auto-Optimization
              </div>
</div>
</div>
</div>
</div>
</main>
<section className="relative py-24 bg-[#050505] overflow-hidden" id="restaurant">
<div className="absolute top-0 right-0 w-1/2 h-full bg-orange-900/5 blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="flex flex-col items-start animate-entry">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-medium mb-6 font-sans">
<svg className="lucide lucide-chef-hat" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path>
<line x1="6" x2="18" y1="17" y2="17"></line>
</svg>
<span className="font-sans">Restaurant Edition</span>
</div>
<h2 className="text-4xl md:text-5xl font-bricolage font-light tracking-tight text-white mb-6 leading-tight">
              The Hostess That
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                Never Sleeps.
              </span>
</h2>
<p className="text-lg text-neutral-400 mb-8 leading-relaxed font-sans">
              Capture every reservation, even during the dinner rush. VegasOps
              Restaurant AI answers calls, manages waitlists, and integrates
              directly with your POS—24/7.
            </p>
<div className="space-y-5 mb-10 w-full">
<div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-colors group hover:shadow-lg">
<div className="mt-1 w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<svg className="lucide lucide-phone" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"></path>
</svg>
</div>
<div>
<h4 className="text-white font-medium mb-1 font-sans">
                    Zero Missed Calls
                  </h4>
<p className="text-sm text-neutral-400 font-sans">
                    Simultaneous call handling ensures no guest goes to
                    voicemail, ever.
                  </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-colors group hover:shadow-lg">
<div className="mt-1 w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<svg className="lucide lucide-calendar-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
<path d="m9 16 2 2 4-4"></path>
</svg>
</div>
<div>
<h4 className="text-white font-medium mb-1 font-sans">
                    Direct POS Integration
                  </h4>
<p className="text-sm text-neutral-400 font-sans">
                    Connects with OpenTable, Resy, Toast, and SevenRooms
                    automatically.
                  </p>
</div>
</div>
</div>
<a className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-medium shadow-[0_0_20px_-5px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.6)] transition-all font-sans" href="#">
              View Restaurant Demo
              <svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="relative animate-entry delay-200">
<div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-500/20 blur-[80px] rounded-full -z-10"></div>
<div className="relative rounded-2xl border border-white/10 bg-[#0F0F0F] overflow-hidden shadow-2xl group">
<div className="relative h-[500px]">
<img alt="Fine Dining" className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-700" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent"></div>
</div>
<div className="absolute top-12 -left-6 bg-neutral-900/90 backdrop-blur border border-white/10 p-4 rounded-xl shadow-lg w-64 animate-[bounce_3s_infinite]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
<svg className="lucide lucide-phone-incoming" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 2 16 8 22 8"></polyline>
<line x1="23" x2="16" y1="1" y2="8"></line>
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"></path>
</svg>
</div>
<div>
<div className="text-white text-xs font-bold font-sans">
                      Table of 6?
                    </div>
<div className="text-green-400 text-[10px] font-sans">
                      Booking Confirmed
                    </div>
</div>
</div>
</div>
<div className="absolute bottom-12 -right-6 bg-neutral-900/90 backdrop-blur border border-white/10 p-4 rounded-xl shadow-lg w-72">
<div className="space-y-3">
<div className="flex gap-2">
<div className="p-2 rounded-lg bg-white/10 text-xs text-neutral-300 font-sans">
                      Do you have vegan options?
                    </div>
</div>
<div className="flex gap-2 justify-end">
<div className="p-2 rounded-lg bg-orange-600/20 text-xs text-orange-200 border border-orange-600/20 font-sans">
                      Yes! We have a full plant-based menu featuring our
                      signature Truffle Risotto.
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="-mt-4 lg:-mt-8 animate-entry delay-700 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mx-auto pt-0 px-2.5 lg:px-0 pb-24 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[300px] bg-orange-600/20 blur-[100px] rounded-full z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

<div className="overflow-hidden md:col-span-2 lg:col-span-3 lg:bg-black/80 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] bg-neutral-900/80 rounded-2xl ring-white/10 ring-1 relative shadow-[0_0_40px_-10px_rgba(249,115,22,0.15)] backdrop-blur-sm">

<div className="-top-10 -right-10 bg-orange-500/10 w-56 h-56 rounded-full absolute blur-3xl"></div>

<div className="flex sm:px-6 bg-white/5 border-white/5 border-b pt-3 pr-4 pb-3 pl-4 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-3 text-sm text-neutral-400">
<a className="inline-flex items-center gap-2 text-white hover:text-orange-400 transition-colors font-sans" href="#" style={{}}>
<svg className="lucide lucide-zap text-orange-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
                Luminous OS
              </a>
<span className="opacity-40 font-sans" style={{}}>/</span>
<span className="text-white font-sans" style={{}}>Growth</span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 text-orange-400 ring-1 ring-orange-500/20 px-2 py-0.5 text-[11px] font-sans" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                Live
              </span>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 bg-black/40 ring-1 ring-white/10 rounded-lg pl-2.5 pr-2.5 h-8">
<svg className="lucide lucide-search text-neutral-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
<input className="bg-transparent text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none w-48" placeholder="Search trends..." type="text"/>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-white/5 text-white text-xs ring-1 ring-white/10 px-3 py-1.5 hover:bg-white/10 transition font-sans" style={{}}>
<svg className="lucide lucide-download" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
                Export
              </button>
</div>
</div>

<div className="grid grid-cols-12">

<aside className="hidden md:flex md:col-span-3 lg:col-span-2 flex-col min-h-[520px] bg-white/5 border-white/5 border-r">
<div className="px-4 py-4">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-900/20 text-sm hover:brightness-110 transition-all px-3 py-2 border border-white/10 font-sans" style={{}}>
<svg className="lucide lucide-plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
                  New Campaign
                </button>
</div>
<nav className="px-3 pb-4 space-y-6 overflow-y-auto">

<div className="">
<div className="px-2 mb-2 text-[10px] uppercase text-neutral-500 font-sans" style={{}}>
                    Platform
                  </div>
<ul className="space-y-1">
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans" href="#">
<svg className="lucide lucide-phone-incoming" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 2 16 8 22 8"></polyline>
<line x1="23" x2="16" y1="1" y2="8"></line>
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"></path>
</svg>
                        Receptionist
                      </a>
</li>
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-white bg-white/5 ring-1 ring-white/10 shadow-inner font-sans" href="#">
<svg className="lucide lucide-calendar-check-2 text-orange-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
<path d="m16 20 2 2 4-4"></path>
</svg>
                        Reservations
                      </a>
</li>
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans" href="#">
<svg className="lucide lucide-star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
                        Reviews
                      </a>
</li>
</ul>
</div>

<div className="">
<div className="px-2 mb-2 text-[10px] uppercase text-neutral-500 font-sans" style={{}}>
                    Content AI
                  </div>
<ul className="space-y-1">
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans" href="#" style={{}}>
<svg className="lucide lucide-sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
                        Generation
                      </a>
</li>
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans" href="#" style={{}}>
<svg className="lucide lucide-calendar-clock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
<path d="M16 2v4"></path>
<path d="M8 2v4"></path>
<path d="M3 10h5"></path>
<path d="M17.5 17.5 16 16.25V14"></path>
<path d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"></path>
</svg>
                        Scheduler
                      </a>
</li>
</ul>
</div>
</nav>
</aside>

<main className="col-span-12 md:col-span-6 lg:col-span-7 min-h-[520px] bg-black/20">

<div className="px-4 sm:px-6 py-3 border-b border-white/5 overflow-x-auto">
<div className="flex items-center gap-6 min-w-max">
<button className="text-sm text-white border-b-2 border-orange-500 pb-3 -mb-3.5 font-sans" style={{}}>
                    Overview
                  </button>
<button className="text-sm text-neutral-500 hover:text-white transition pb-3 -mb-3.5 border-b-2 border-transparent hover:border-white/10 font-sans" style={{}}>
                    Real-time
                  </button>
<button className="text-sm text-neutral-500 hover:text-white transition pb-3 -mb-3.5 border-b-2 border-transparent hover:border-white/10 font-sans" style={{}}>
                    Competitors
                  </button>
<button className="text-sm text-neutral-500 hover:text-white transition pb-3 -mb-3.5 border-b-2 border-transparent hover:border-white/10 font-sans" style={{}}>
                    Alerts
                  </button>
</div>
</div>

<div className="px-4 sm:px-6 py-6 border-b border-white/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<h3 className="text-white text-2xl font-bricolage font-light tracking-tight" style={{transition: 'outline 0.1s ease-in-out'}}>
                      Operations Pulse
                    </h3>
<span className="text-[11px] rounded-md bg-orange-500/10 text-orange-400 ring-1 ring-orange-500/20 px-2 py-0.5 uppercase font-sans" style={{}}>
                      Trending
                    </span>
</div>
<div className="text-xs text-neutral-500 flex items-center gap-1.5 font-sans" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                    Updating live
                  </div>
</div>
<div className="mt-2 text-sm text-neutral-400 font-sans" style={{}}>
                  Cross-platform engagement is scaling •
                  <a className="text-orange-400 hover:text-orange-300 transition-colors font-sans" href="#" style={{}}>
                    View detailed report
                  </a>
</div>
</div>

<div className="px-4 sm:px-6 py-6 space-y-4">

<div className="rounded-xl ring-1 ring-white/10 bg-white/[0.02] p-4 hover:bg-white/[0.04] transition-colors">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="">
<div className="text-sm text-white font-sans" style={{}}>
                          Call Answered: Booking Confirmed
                        </div>
<div className="text-xs text-neutral-500 mt-0.5 font-sans" style={{}}>
                          Avg reach 245k • +42% from last week • 98% sentiment
                        </div>
</div>
</div>
<span className="text-[10px] rounded-md bg-orange-500/10 text-orange-400 ring-1 ring-orange-500/20 px-2 py-0.5 font-sans" style={{}}>
                      REVENUE SAVED
                    </span>
</div>
<div className="mt-4 bg-black/40 rounded-lg ring-1 ring-white/5 p-3 font-mono text-xs">
<div className="grid grid-cols-2 gap-y-2">
<div className="text-neutral-500 font-sans">
                        → Source:
                        <span className="text-orange-400 ml-1 font-sans">
                          Google Maps
                        </span>
</div>
<div className="text-neutral-500 font-sans">
                        → Value:
                        <span className="text-orange-400 ml-1 font-sans">
                          $120.00
                        </span>
</div>
<div className="text-neutral-500 font-sans">
                        → Deposit:
                        <span className="text-orange-400 ml-1 font-sans">
                          Secured
                        </span>
</div>
<div className="text-neutral-500 font-sans">
                        → SMS:
                        <span className="text-orange-400 ml-1 font-sans">Sent</span>
</div>
</div>
</div>
</div>

<div className="rounded-xl ring-1 ring-orange-500/20 bg-gradient-to-b from-orange-500/5 to-transparent p-4">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="">
<div className="text-sm text-white font-sans" style={{}}>
                          Reactivation Campaign Sending
                        </div>
<div className="text-xs text-neutral-500 mt-0.5 font-sans" style={{}}>
                          Batch #847 • 3 Platforms • Est. time 45s
                        </div>
</div>
</div>
<div className="text-[11px] text-orange-400 font-sans" style={{}}>
                      00:45
                    </div>
</div>
<div className="mt-4 flex items-center gap-3">
<span className="text-xs text-neutral-500 font-sans" style={{}}>
                      Processing
                    </span>
<div className="flex-1 h-1.5 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="h-full w-[67%] rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
</div>
<span className="text-xs text-white font-sans" style={{}}>
                      67%
                    </span>
<button className="text-[10px] rounded hover:bg-white/10 text-neutral-400 px-2 py-1 transition-colors font-sans" style={{}}>
                      STOP
                    </button>
</div>
</div>

<div className="rounded-xl ring-1 ring-white/10 bg-white/[0.02] p-4 hover:bg-white/[0.04] transition-colors">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="">
<div className="text-sm text-white font-sans" style={{}}>
                          New 5-Star Review
                        </div>
<div className="text-xs text-neutral-500 mt-0.5 font-sans" style={{}}>
                          Topic: "AI Agents" • Rising fast • 28m ago
                        </div>
</div>
</div>
<span className="text-[10px] rounded-md bg-white/5 text-neutral-300 ring-1 ring-white/10 px-2 py-0.5 font-sans" style={{}}>
                      OPPORTUNITY
                    </span>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="text-xs rounded-md bg-white/5 text-white ring-1 ring-white/10 px-3 py-1.5 hover:bg-white/10 transition-colors font-sans" style={{}}>
                      Generate Response
                    </button>
<button className="text-xs rounded-md text-neutral-400 hover:text-white px-3 py-1.5 transition-colors font-sans" style={{}}>
                      Dismiss
                    </button>
</div>
</div>
</div>
</main>

<aside className="hidden md:block md:col-span-3 lg:col-span-3 bg-white/5 border-l border-white/5 min-h-[520px]">
<div className="px-4 sm:px-5 py-4 space-y-4">

<div className="rounded-xl ring-1 ring-white/10 bg-black/20 p-4">
<div className="text-xs text-neutral-500 mb-3 uppercase font-sans" style={{}}>
                    Live Metrics
                  </div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-white/5 rounded-lg p-3 ring-1 ring-white/5">
<div className="text-[10px] text-neutral-400 mb-1 font-sans">
                        Calls/hr
                      </div>
<div className="text-lg text-white font-sans">12</div>
</div>
<div className="bg-white/5 rounded-lg p-3 ring-1 ring-white/5">
<div className="text-[10px] text-neutral-400 mb-1 font-sans">
                        No-Show Rate
                      </div>
<div className="text-lg text-white font-sans">1.2%</div>
</div>
<div className="bg-white/5 rounded-lg p-3 ring-1 ring-white/5">
<div className="text-[10px] text-neutral-400 mb-1 font-sans">
                        Review Rating
                      </div>
<div className="text-lg text-white font-sans">4.9</div>
</div>
<div className="bg-white/5 rounded-lg p-3 ring-1 ring-white/5">
<div className="text-[10px] text-neutral-400 mb-1 font-sans">
                        Rev. Saved
                      </div>
<div className="text-lg text-orange-400 font-sans">$2.4k</div>
</div>
</div>
</div>

<div className="rounded-xl ring-1 ring-white/10 bg-black/20 p-4">
<div className="text-xs text-neutral-500 mb-2 uppercase font-sans" style={{}}>
                    Connected Accounts
                  </div>
<p className="text-sm text-neutral-300 leading-relaxed font-sans" style={{}}>
                    Active on 4 platforms. All scheduling queues are healthy.
                  </p>
<div className="mt-3 text-xs text-neutral-500 mb-2 font-sans" style={{}}>
                    Platforms
                  </div>
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-colors">
<svg className="lucide lucide-twitter" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-colors">
<svg className="lucide lucide-instagram" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-colors">
<svg className="lucide lucide-linkedin" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</span>
</div>
</div>

<div className="rounded-xl ring-1 ring-white/10 bg-black/20 p-4">
<div className="text-xs text-neutral-500 mb-3 uppercase font-sans" style={{}}>
                    Autopilot
                  </div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-300 font-sans" style={{}}>
                        Auto-repost
                      </span>
<button aria-pressed="true" className="relative inline-flex h-5 w-9 items-center rounded-full bg-orange-500/20 ring-1 ring-orange-500/30">
<span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-orange-400 translate-x-4 transition-transform shadow-sm"></span>
<span className="sr-only font-sans" style={{}}>toggle</span>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-300 font-sans" style={{}}>
                        Smart Reply
                      </span>
<button aria-pressed="true" className="relative inline-flex h-5 w-9 items-center rounded-full bg-orange-500/20 ring-1 ring-orange-500/30">
<span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-orange-400 translate-x-4 transition-transform shadow-sm"></span>
<span className="sr-only font-sans" style={{}}>toggle</span>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-300 font-sans" style={{}}>
                        Trend Watch
                      </span>
<button aria-pressed="false" className="relative inline-flex h-5 w-9 items-center rounded-full bg-white/10 ring-1 ring-white/10">
<span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-neutral-400 translate-x-0 transition-transform shadow-sm"></span>
<span className="sr-only font-sans" style={{}}>toggle</span>
</button>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>
</div>
</section>

<section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-tr from-gray-500/0 via-gray-500/10 to-gray-500/0 from-white/0 via-white/10 to-white/0 max-w-7xl rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-10 pr-10 pb-10 pl-10 relative mx-2.5 lg:mx-auto" style={{position: 'relative', -BorderGradient: 'linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>

<div className="flex mb-0 items-center justify-between">
<div className="flex flex-col text-left">
<div className="flex flex-col lg:flex-row gap-4 mb-3 gap-x-4 gap-y-4 items-start lg:items-center">
<span className="text-8xl text-white/5 font-bricolage font-light tracking-tight" style={{transition: 'outline 0.1s ease-in-out'}}>
              01.
            </span>
<div className="space-y-2">
<h2 className="md:text-5xl text-4xl text-white font-bricolage font-light tracking-tight leading-tight" style={{transition: 'outline 0.1s ease-in-out'}}>
                AI Front Desk Agents
              </h2>
<p className="leading-relaxed text-lg text-neutral-400 max-w-2xl font-sans" style={{}}>
                Instantly answers calls, manages reservations, and resolves FAQs
                24/7. Seamlessly integrated across Voice, Web Chat, SMS, and
                Email.
              </p>
<button className="lg:hidden mt-6 w-full sm:w-auto px-6 py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-500 transition-colors whitespace-nowrap font-sans">
                Start Growing Now
              </button>
</div>
</div>
</div>
<div className="hidden lg:block">
<button className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-500 transition-colors whitespace-nowrap font-sans" style={{}}>
            Start Growing Now
          </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 mt-12 mb-12 gap-x-8 gap-y-8">

<div className="md:p-10 flex flex-col overflow-hidden group/card hover:border-white/20 transition-colors duration-500 bg-[#0A0A0A] border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative justify-between">

<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none transition-opacity duration-500 opacity-50 group-hover/card:opacity-100"></div>

<div className="grid grid-cols-3 gap-4 mb-12 relative z-10">
<div className="flex flex-col items-center text-center gap-4 group cursor-pointer">
<div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-300">
<svg className="lucide lucide-mic" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
<line x1="12" x2="12" y1="19" y2="22"></line>
<line x1="8" x2="16" y1="22" y2="22"></line>
</svg>
</div>
<span className="text-xs text-neutral-500 leading-tight group-hover:text-neutral-300 transition-colors font-sans">
                Voice Agent
              </span>
</div>
<div className="flex flex-col items-center text-center gap-4 group cursor-pointer">
<div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-300">
<svg className="lucide lucide-message-square" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
</div>
<span className="text-xs text-neutral-500 leading-tight group-hover:text-neutral-300 transition-colors font-sans">
                Smart SMS
              </span>
</div>
<div className="flex flex-col items-center text-center gap-4 group cursor-pointer">
<div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-300">
<svg className="lucide lucide-map-pin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
<span className="text-xs text-neutral-500 leading-tight group-hover:text-neutral-300 transition-colors font-sans">
                Local SEO
              </span>
</div>
</div>

<div className="mb-10 relative z-10">
<div className="grid grid-cols-4 text-sm font-medium text-white mb-4 px-2">
<div className="col-span-2 font-sans">Call Type</div>
<div className="text-right text-neutral-400 font-sans">Outcome</div>
<div className="text-right text-neutral-400 font-sans">Value</div>
</div>

<div className="grid grid-cols-4 text-sm text-neutral-400 py-4 border-t border-white/5 px-2 hover:bg-white/[0.02] transition-colors rounded-lg">
<div className="col-span-2 text-neutral-300 flex items-center gap-2 font-sans">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
                Hours Inquiry
              </div>
<div className="text-right font-sans">Answered</div>
<div className="text-right text-neutral-500 font-sans">Retention</div>
</div>

<div className="grid grid-cols-4 text-sm text-neutral-400 py-4 border-t border-white/5 px-2 relative overflow-hidden rounded-lg group">
<div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="col-span-2 text-white flex items-center gap-2 relative z-10 font-sans">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                Reservation
              </div>
<div className="text-right text-white relative z-10 font-sans">
                Booked
              </div>
<div className="text-right text-orange-400 relative z-10 font-sans">
                $150+
              </div>
</div>
</div>

<div className="bg-neutral-900/40 border border-white/10 rounded-xl p-2 pl-4 flex justify-between items-center relative z-10 backdrop-blur-sm group hover:border-orange-500/30 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded flex items-center justify-center bg-[#1877F2]/20 text-[#1877F2]">
<svg className="lucide lucide-calendar" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
</div>
<span className="text-neutral-300 text-sm font-sans" style={{}}>
                Connect Booking System
              </span>
</div>
<div className="px-3 py-1.5 rounded-lg bg-white/5 group-hover:bg-orange-500 group-hover:text-white border border-white/5 flex items-center justify-center text-neutral-400 transition-colors text-xs font-sans" style={{}}>
              Connect
            </div>
</div>
</div>

<div className="overflow-hidden min-h-[450px] flex items-center justify-center bg-[#0A0A0A] border-white/10 border rounded-3xl relative group/orbit">

<div className="opacity-80 absolute top-0 right-0 bottom-0 left-0 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.15)_0%,_rgba(0,0,0,0)_70%)]"></div>

<div className="flex md:scale-100 transition-transform duration-500 w-full h-full relative scale-[0.65] items-center justify-center" style={{}}>

<div className="absolute flex items-center justify-center pointer-events-none opacity-20">
<div className="w-[180px] h-[180px] rounded-full border border-orange-500/30"></div>
</div>
<div className="absolute flex items-center justify-center pointer-events-none opacity-20">
<div className="w-[340px] h-[340px] rounded-full border border-orange-500/20"></div>
</div>
<div className="absolute flex items-center justify-center pointer-events-none opacity-10">
<div className="w-[500px] h-[500px] rounded-full border border-orange-500/10"></div>
</div>

<div className="relative w-24 h-24 rounded-full bg-[#120a05] border border-orange-500/50 flex items-center justify-center shadow-[0_0_50px_-5px_rgba(249,115,22,0.5)] z-20">
<div className="animate-ping opacity-20 border-orange-500 border rounded-full absolute top-0 right-0 bottom-0 left-0"></div>
<svg className="lucide lucide-asterisk text-orange-500" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v12"></path>
<path d="M17.196 9 6.804 15"></path>
<path d="m6.804 9 10.392 6"></path>
</svg>
</div>

<div className="absolute inset-0 flex items-center justify-center animate-[spin_60s_linear_infinite]">


<div className="absolute top-1/2 left-1/2 z-10" style={{transform: 'translate(-50%, -50%) rotate(0deg) translateY(-170px) rotate(0deg)'}}>
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
<svg className="lucide lucide-twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</div>
</div>

<div className="absolute top-1/2 left-1/2 z-10" style={{transform: 'translate(-50%, -50%) rotate(60deg) translateY(-170px) rotate(-60deg)'}}>
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
<svg className="lucide lucide-facebook" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</div>
</div>

<div className="absolute top-1/2 left-1/2 z-10" style={{transform: 'translate(-50%, -50%) rotate(120deg) translateY(-170px) rotate(-120deg)'}}>
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
<svg className="lucide lucide-instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</div>
</div>

<div className="absolute top-1/2 left-1/2 z-10" style={{transform: 'translate(-50%, -50%) rotate(180deg) translateY(-170px) rotate(-180deg)'}}>
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
<svg className="text-white w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.46a6.33 6.33 0 0 0 10.86 3.1 5.6 5.6 0 0 0 1.06-2.7V10.4a8.36 8.36 0 0 0 4.69 1.48V8.35a4.86 4.86 0 0 1-2.02-1.66z"></path>
</svg>
</div>
</div>

<div className="absolute top-1/2 left-1/2 z-10" style={{transform: 'translate(-50%, -50%) rotate(240deg) translateY(-170px) rotate(-240deg)'}}>
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
<svg className="lucide lucide-youtube" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
<path d="m10 15 5-3-5-3z"></path>
</svg>
</div>
</div>

<div className="absolute top-1/2 left-1/2 z-10" style={{transform: 'translate(-50%, -50%) rotate(300deg) translateY(-170px) rotate(-300deg)'}}>
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
<svg className="lucide lucide-linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-12">
<div className="flex flex-col items-start group">
<div className="w-8 h-px bg-neutral-700 mb-6 group-hover:bg-orange-500 transition-colors duration-300"></div>
<svg className="lucide lucide-smartphone text-neutral-400 mb-5 group-hover:text-orange-500 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect>
<path d="M12 18h.01"></path>
</svg>
<h3 className="text-xl text-white mb-3 font-sans">
            High-Converting Websites
          </h3>
<p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors font-sans">
            Mobile-first designs built to turn visitors into confirmed
            appointments instantly.
          </p>
</div>
<div className="flex flex-col items-start group">
<div className="w-8 h-px bg-neutral-700 mb-6 group-hover:bg-orange-500 transition-colors duration-300"></div>
<svg className="lucide lucide-bell-ring text-neutral-400 mb-5 group-hover:text-orange-500 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
<path d="M4 2C2.8 2.2 2 3.2 2 4.4c0 1.2.8 2.2 2 2.4"></path>
<path d="M22 2c-1.2.2-2 1.2-2 2.4s.8 2.2 2 2.4"></path>
</svg>
<h3 className="text-xl text-white mb-3 font-sans">
            Intelligent Reminders
          </h3>
<p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors font-sans">
            Automated SMS &amp; call confirmations to slash no-shows and keep
            your chairs full.
          </p>
</div>
<div className="flex flex-col group items-start">
<div className="w-8 h-px bg-neutral-700 mb-6 group-hover:bg-orange-500 transition-colors duration-300"></div>
<svg className="lucide lucide-star text-neutral-400 mb-5 group-hover:text-orange-500 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<h3 className="text-xl text-white mb-3 font-sans">
            Reputation Dominance
          </h3>
<p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors font-sans">
            Automated review generation to skyrocket your ratings and own local
            search.
          </p>
</div>
</div>
</section>
<section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-tr from-gray-500/0 via-gray-500/10 to-gray-500/0 from-white/0 via-white/10 to-white/0 max-w-7xl rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-10 pr-10 pb-10 pl-10 relative mx-2.5 lg:mx-auto" style={{position: 'relative', -BorderGradient: 'linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>

<div className="flex flex-col mb-16">
<div className="flex mb-0 items-center justify-between">
<div className="flex flex-col text-left">
<div className="flex gap-4 mb-3 gap-x-4 gap-y-4 flex-col lg:flex-row items-start lg:items-center">
<span className="text-8xl text-white/5 font-bricolage font-light tracking-tight" style={{transition: 'outline 0.1s ease-in-out'}}>
                02.
              </span>
<div className="space-y-2">
<h2 className="md:text-5xl text-4xl text-white font-bricolage font-light tracking-tight" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Proven Results on the Strip.
                </h2>
<p className="leading-relaxed text-lg text-neutral-400 max-w-2xl font-sans" style={{}}>
                  Discover how top Vegas venues utilize AI to maximize
                  engagement and revenue.
                </p>
<button className="lg:hidden mt-6 w-full sm:w-auto px-6 py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-500 transition-colors whitespace-nowrap font-sans">
                  Start Growing Now
                </button>
</div>
</div>
</div>
<div className="hidden lg:block">
<button className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-500 transition-colors whitespace-nowrap font-sans" style={{}}>
              Start Growing Now
            </button>
</div>
</div>
</div>

<div className="flex gap-4 md:gap-8 relative gap-x-4 gap-y-4 items-center justify-between">
<button className="hidden md:flex w-12 h-12 rounded-xl border border-white/10 bg-[#0F0F0F] text-neutral-400 items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 z-30 group shrink-0 shadow-lg cursor-pointer" onclick="window.prevTestimonial()">
<svg className="lucide lucide-arrow-left group-hover:-translate-x-0.5 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
</button>
<div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-8 group/carousel">
<div className="lg:col-span-6 lg:col-start-1 relative z-20">
<div className="overflow-hidden group/card hover:border-white/20 transition-colors duration-300 md:p-12 bg-[#0A0A0A]/50 w-full lg:w-[620px] border-white/10 border rounded-[24px] pt-8 pr-8 pb-8 pl-8 relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl">
<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[80px] rounded-full pointer-events-none"></div>
<div className="mb-8 text-orange-500 relative z-10">
<svg fill="currentColor" height="40" stroke="none" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
</div>
<blockquote className="text-xl md:text-2xl leading-relaxed text-neutral-200 mb-10 relative z-10 font-bricolage font-light tracking-tight transition-opacity duration-300 italic" id="t-quote" style={{transition: 'outline 0.1s ease-in-out'}}>
                "VegasOps AI increased our dinner reservations by 40% and
                virtually eliminated no-shows. The AI handles the rush
                seamlessly."
              </blockquote>
<div className="flex items-center gap-4 relative z-10">
<div className="flex flex-col">
<span className="text-white text-lg font-sans transition-opacity duration-300" id="t-author" style={{}}>
                    Marco V.
                  </span>
<span className="text-neutral-500 text-xs uppercase flex items-center gap-2 mt-1 font-sans transition-opacity duration-300" id="t-role" style={{}}>
                    Restaurant Owner
                  </span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-6 lg:col-start-7 relative h-[400px] md:h-[600px] rounded-[32px] overflow-hidden border border-white/5 ring-1 ring-white/5 shadow-2xl transition-transform duration-500 group-hover/carousel:scale-[1.01]">
<div className="bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Member" className="w-full h-full object-cover transition-opacity duration-300" id="t-image" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=2160&amp;q=80"/>
<div className="absolute top-6 right-6 z-20 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs text-white flex items-center gap-2 font-sans" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Active Creator
            </div>
</div>
</div>
<button className="hidden md:flex w-12 h-12 rounded-xl border border-white/10 bg-[#0F0F0F] text-neutral-400 items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 z-30 group shrink-0 shadow-lg cursor-pointer" onclick="window.nextTestimonial()">
<svg className="lucide lucide-arrow-right group-hover:translate-x-0.5 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

</section>

<section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-tr from-gray-500/0 via-gray-500/10 to-gray-500/0 from-white/0 via-white/10 to-white/0 max-w-7xl rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-12 pr-10 pb-12 pl-10 relative mx-2.5 lg:mx-auto" style={{position: 'relative', -BorderGradient: 'linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 z-10 relative gap-x-12 gap-y-12 items-center">
<style className="">
          @keyframes flow {
            from { stroke-dashoffset: 24; }
            to { stroke-dashoffset: 0; }
          }
          .animate-flow {
            animation: flow 1s linear infinite;
          }
        </style>

<div className="lg:col-span-5 flex flex-col justify-center">

<div className="flex gap-4 mb-3 gap-x-4 gap-y-4 items-center">
<span className="text-6xl text-white/5 font-bricolage font-light tracking-tight" style={{transition: 'outline 0.1s ease-in-out'}}>
              03.
            </span>
<div className="space-y-2">
<h2 className="md:text-4xl text-4xl text-white font-bricolage font-light tracking-tight" style={{transition: 'outline 0.1s ease-in-out'}}>
                Simple, ROI-Focused Pricing.
              </h2>
</div>
</div>

<p className="text-neutral-400 text-lg leading-relaxed mb-12 max-w-lg font-sans" style={{}}>
            Las Vegas venues are filling seats on autopilot. Choose your growth
            engine.
          </p>

<div className="flex flex-col gap-4 w-full relative z-10 max-w-md">

<button className="relative w-full flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_40px_-10px_rgba(249,115,22,0.4)] transition-transform hover:scale-[1.02] group border-t border-white/20" id="btn-creator" onclick="selectPlan('creator')">
<span className="text-xl font-sans" style={{}}>Starter</span>
<svg className="lucide lucide-zap w-6 h-6 fill-white/20" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>

<div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full translate-x-1/2 ring-4 ring-[#050505]" id="active-dot"></div>
</button>

<button className="w-full flex items-center justify-between p-5 rounded-xl bg-[#181824] border border-white/5 text-neutral-200 hover:bg-[#20202e] hover:border-white/10 transition-all group text-left" id="btn-pro" onclick="selectPlan('pro')">
<span className="text-xl group-hover:text-white font-sans" style={{}}>
                Growth
              </span>
<svg className="lucide lucide-rocket w-6 h-6 text-neutral-500 group-hover:text-white transition-colors" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
</button>

<button className="w-full flex items-center justify-between p-5 rounded-xl bg-[#181824] border border-white/5 text-neutral-200 hover:bg-[#20202e] hover:border-white/10 transition-all group text-left" id="btn-agency" onclick="selectPlan('agency')">
<span className="text-xl group-hover:text-white font-sans" style={{}}>
                Enterprise
              </span>
<svg className="lucide lucide-globe w-6 h-6 text-neutral-500 group-hover:text-white transition-colors" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
</button>
</div>
</div>

<div className="hidden lg:block lg:col-span-2 h-[400px] z-10 relative translate-y-16 gap-x-12 gap-y-12">
<svg className="w-full h-full absolute inset-0 overflow-visible" preserveaspectratio="none" viewbox="0 0 200 400">

<path className="animate-flow shadow-[0_0_15px_rgba(249,115,22,0.5)]" d="M-50 160 C 80 160, 80 200, 180 200 L 240 200" fill="none" id="path-creator" stroke="#f97316" stroke-dasharray="8 8" strokeWidth="2"></path>

<path className="opacity-20" d="M-50 250 C 80 250, 80 200, 180 200 L 240 200" fill="none" id="path-pro" stroke="#525252" stroke-dasharray="6 6" strokeWidth="2"></path>

<path className="opacity-20" d="M-50 340 C 80 340, 80 200, 180 200 L 240 200" fill="none" id="path-agency" stroke="#525252" stroke-dasharray="6 6" strokeWidth="2"></path>

<path d="M230 195 L 240 200 L 230 205" fill="none" stroke="#f97316" strokeWidth="2"></path>
<circle cx="240" cy="200" fill="#f97316" r="2"></circle>
</svg>
</div>

<div className="lg:col-span-5 relative h-full">
<div className="relative w-full h-full bg-neutral-900 rounded-[32px] p-[2px] electric-card overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-b from-yellow-300 via-orange-500 to-transparent opacity-80 z-0"></div>

<div className="relative z-10 bg-[#0A0A0A] rounded-[30px] h-full p-8 lg:p-10 flex flex-col overflow-hidden">

<div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-b from-orange-500/10 to-transparent pointer-events-none"></div>

<div className="flex items-center justify-between mb-2 relative z-10">
<h3 className="text-3xl text-white font-bricolage tracking-tight font-medium" id="plan-title" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Starter Pack
                </h3>
<div className="flex items-baseline gap-1">
<span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-orange-400 font-bricolage tracking-tight font-medium" id="plan-price" style={{transition: 'outline 0.1s ease-in-out'}}>
                    $1,500
                  </span>
<span className="text-sm text-orange-500/80 font-sans" style={{}}>
                    /month
                  </span>
</div>
</div>

<p className="text-neutral-400 mt-6 mb-8 text-sm leading-relaxed border-b border-white/10 pb-8 relative z-10 font-sans" id="plan-desc" style={{}}>
                Core automation for independent venues.
              </p>

<div className="space-y-6 mb-10 relative z-10 flex-grow font-sans" id="plan-features">
<div className="flex items-center gap-4 group/item">
<div className="flex-none transition-transform group-hover/item:translate-x-1">
<svg className="text-orange-500" fill="#f97316" height="12" viewbox="0 0 24 24" width="12">
<path d="M22 12 6 22V2z" stroke="none"></path>
</svg>
</div>
<span className="text-white text-sm font-sans">
                    24/7 AI Voice Receptionist
                  </span>
</div>
<div className="flex items-center gap-4 group/item">
<div className="flex-none transition-transform group-hover/item:translate-x-1">
<svg className="text-orange-500" fill="#f97316" height="12" viewbox="0 0 24 24" width="12">
<path d="M22 12 6 22V2z" stroke="none"></path>
</svg>
</div>
<span className="text-white text-sm font-sans">
                    High-Converting Website
                  </span>
</div>
<div className="flex items-center gap-4 group/item">
<div className="flex-none transition-transform group-hover/item:translate-x-1">
<svg className="text-orange-500" fill="#f97316" height="12" viewbox="0 0 24 24" width="12">
<path d="M22 12 6 22V2z" stroke="none"></path>
</svg>
</div>
<span className="text-white text-sm font-sans">
                    Google Business Profile SEO
                  </span>
</div>
<div className="flex items-center gap-4 group/item">
<div className="flex-none transition-transform group-hover/item:translate-x-1">
<svg className="text-orange-500" fill="#f97316" height="12" viewbox="0 0 24 24" width="12">
<path d="M22 12 6 22V2z" stroke="none"></path>
</svg>
</div>
<span className="text-white text-sm font-sans">
                    Instant Missed Call Recovery
                  </span>
</div>
</div>

<button className="w-full py-4 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:brightness-110 text-white transition-all shadow-[0_8px_30px_-5px_rgba(249,115,22,0.4)] flex items-center justify-center gap-2 group/btn relative z-10 hover:shadow-[0_8px_40px_-5px_rgba(249,115,22,0.6)] border-t border-white/20 font-sans" id="plan-cta" style={{}}>
                Get Started
                <svg className="lucide lucide-arrow-right-circle w-5 h-5 text-white/80 transition-transform group-hover/btn:translate-x-1" data-lucide="arrow-right-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m12 16 4-4-4-4"></path>
<path d="M8 12h8"></path>
</svg>
</button>
</div>
</div>
</div>
</div>

</section>

<footer className="bg-center animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-tr from-gray-500/0 via-gray-500/10 to-gray-500/0 from-white/0 via-white/10 to-white/0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5347579-34d0-43b9-99d3-126f6193d19d_1600w.jpg)] max-w-7xl bg-cover rounded-3xl mt-24 mr-auto mb-12 ml-auto pt-24 pr-6 pb-6 pl-6 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
<div className="z-10 text-center max-w-4xl mr-auto mb-24 ml-auto pr-6 pl-6 relative">
<h2 className="text-2xl md:text-3xl text-white mb-3 font-bricolage font-light tracking-tight" style={{transition: 'outline 0.1s ease-in-out'}}>
          Stay
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
            Ahead
          </span>
          of the Curve
        </h2>
<p className="text-neutral-400 max-w-lg mx-auto mb-8 text-base leading-relaxed font-sans" style={{}}>
          Empowering Las Vegas Hospitality &amp; Service.
        </p>
<div className="relative max-w-xs mx-auto">
<form className="flex items-center rounded-lg bg-[#050505] border border-white/10 focus-within:border-white/20 transition-all">
<input className="w-full bg-transparent border-none text-sm text-white pl-4 pr-1 py-3 focus:outline-none placeholder:text-neutral-600 font-sans h-10 rounded-l-lg" placeholder="Enter your email" type="email"/>
<button className="bg-white hover:bg-neutral-200 text-black px-4 py-2 rounded-r-lg text-sm transition-colors h-10 shadow-lg flex items-center gap-2 flex-shrink-0 font-sans font-medium" style={{}}>
              Subscribe
            </button>
</form>
</div>
</div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16"></div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-12 max-w-7xl mx-auto px-6">
<div className="lg:col-span-2 col-span-full">
<div className="flex flex-col items-start gap-4">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<div className="relative flex items-center justify-center w-8 h-8">
<svg className="lucide lucide-asterisk text-white w-8 h-8 absolute rotate-45" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v12"></path>
<path d="M17.196 9 6.804 15"></path>
<path d="m6.804 9 10.392 6"></path>
</svg>
<svg className="lucide lucide-asterisk absolute w-[32px] h-[32px]" data-icon-replaced="true" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '32px', height: '32px', color: 'rgb(249, 115, 22)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v12"></path>
<path d="M17.196 9 6.804 15"></path>
<path d="m6.804 9 10.392 6"></path>
</svg>
</div>
<span className="text-xl text-white font-sans" style={{}}>
                VegasOps AI
              </span>
</div>
<p className="text-neutral-400 text-sm mt-4">
              Automating Vegas businesses 24/7.
            </p>
</div>
</div>
<div className="lg:col-span-2">
<h4 className="text-white mb-4 text-sm font-sans" style={{}}>Product</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="">
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>
                Product
              </a>
</li>
<li className="">
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>
                Integrations
              </a>
</li>
<li className="">
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>
                Pricing
              </a>
</li>
</ul>
</div>
<div className="lg:col-span-2">
<h4 className="text-white mb-4 text-sm font-sans" style={{}}>Developers</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="">
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>
                Docs
              </a>
</li>
<li className="">
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>
                Discord server
              </a>
</li>
<li className="">
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>
                Changelog
              </a>
</li>
</ul>
</div>
<div className="lg:col-span-2">
<h4 className="text-white mb-4 text-sm font-sans" style={{}}>Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="">
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>
                About
              </a>
</li>
<li className="">
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>
                Articles
              </a>
</li>
<li>
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>
                Contact
              </a>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 flex flex-col items-start gap-4 text-xs text-neutral-600 font-sans">
<p className="font-sans" style={{}}>
          © 2025 AINest INC. All rights reserved.
        </p>
</div>
<div className="absolute bottom-0 left-0 w-full h-16 bg-[#f97316]/20 blur-3xl opacity-50 pointer-events-none"></div>
</footer>


    </>
  );
}
