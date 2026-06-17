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
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }); // Adjusted threshold for smoother trigger
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();

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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] animate-on-scroll [animation:animationIn_1.5s_ease-out_0s_both] default animate"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[100px] animate-on-scroll [animation:animationIn_1.5s_ease-out_0.2s_both] default animate"></div>
</div>

<main className="overflow-hidden animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both] md:p-12 lg:p-16 animate bg-gray-100 w-full max-w-5xl border-slate-400 border rounded-3xl mt-auto mb-auto pt-8 pr-8 pb-8 pl-8 relative shadow-lg backdrop-blur-2xl">

<header className="flex justify-between items-center mb-16 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both] animate">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-md" style={{}}>
<svg data-lucide="home" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 9.5 12 4l9 5.5"></path><path d="M5 10v10h14V10"></path><path d="M9 21V9h6v12"></path></svg>
</div>
<span className="text-lg text-gray-900 tracking-tighter font-heading" style={{}}>FIRST KEYS AUSTRALIA</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-500">
<a className="transition-colors hover:text-blue-600 font-heading" href="#" style={{}}>Success stories</a>
<a className="transition-colors hover:text-blue-600 font-heading" href="#" style={{}}>How it works</a>
<a className="transition-colors hover:text-blue-600 font-heading" href="#" style={{}}>Learn</a>
</nav>
<a className="group flex items-center gap-2 px-4 py-2 bg-white/50 hover:bg-white border border-white/60 rounded-full transition-all shadow-sm" href="#" style={{}}>
<span className="group-hover:text-blue-500 text-xs text-gray-600 font-heading" style={{}}>Book a free consult</span>
<iconify-icon className="text-gray-400 group-hover:text-blue-500 transition-colors" icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</header>

<section className="max-w-3xl mb-24 flex flex-col items-start">
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] inline-flex text-blue-600 bg-blue-50/80 border-blue-100 border rounded-full mb-6 py-1 px-3 gap-2 items-center animate">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" style={{}}></span>
</span>
<span className="text-[10px] uppercase tracking-wide font-heading" style={{}}>Taking on new first-home buyers</span>
</div>
<h1 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] md:text-6xl leading-[1.1] text-5xl text-gray-900 mb-6 font-heading font-semibold tracking-tight animate font-roboto" style={{}}>
                Getting your <span className="text-blue-500 font-roboto" style={{}}>first home</span> doesn’t have to be overwhelming.
            </h1>
<p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] md:text-2xl leading-relaxed text-xl text-gray-500 max-w-xl mb-10 font-heading font-semibold tracking-tight animate font-roboto" style={{}}>
                First Keys Australia guides first home buyers through every step — from savings and grants to finance and settlement — so you can turn rent into your own front door.
            </p>
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both] flex flex-wrap gap-4 animate">
<button className="flex transition-colors shadow-gray-200/50 hover:bg-blue-600 text-white bg-gray-900 rounded-xl py-3 px-6 shadow-sm items-center gap-2" style={{}}>
<span className="text-sm font-heading" style={{}}>See how we help</span>
<svg className="lucide lucide-chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<button className="flex hover:bg-white transition-all text-gray-700 bg-white/50 border-0 rounded-xl py-3 px-6 shadow-sm backdrop-blur-none items-center gap-2" style={{}}>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
<span className="text-sm font-heading" style={{}}>Copy email: hello@firstkeys.com.au</span>
</button>
</div>
</section>

<section className="mb-20">
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] flex items-center justify-between mb-8 animate">
<h2 className="text-2xl text-gray-900 font-heading font-semibold tracking-tight font-roboto" style={{}}>Recent First-Home Journeys</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] group hover:bg-white/70 hover:border-blue-200 transition-all duration-300 hover:shadow-md cursor-pointer animate bg-white border-0 rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-[2.8px_2.8px_2.2px_rgba(0,_0,_0,_0.034),_6.7px_6.7px_5.3px_rgba(0,_0,_0,_0.048),_12.5px_12.5px_10px_rgba(0,_0,_0,_0.06),_22.3px_22.3px_17.9px_rgba(0,_0,_0,_0.072),_41.8px_41.8px_33.4px_rgba(0,_0,_0,_0.086),_100px_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-2xl">
<div className="aspect-[4/3] w-full bg-gray-100 rounded-xl overflow-hidden mb-5 relative">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/320676c3-b435-41fe-9277-bacd4f99105b_800w.webp\')'}}></div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-lg text-gray-900 mb-1 font-heading" style={{}}>From renting to keys in hand</h3>
<p className="text-xs text-gray-500 font-heading" style={{}}>Young couple · Western Sydney</p>
</div>
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm text-blue-500">
<iconify-icon className="" icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] group hover:bg-white/70 hover:border-blue-200 transition-all duration-300 hover:shadow-md cursor-pointer bg-white border-0 rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-[2.8px_2.8px_2.2px_rgba(0,_0,_0,_0.034),_6.7px_6.7px_5.3px_rgba(0,_0,_0,_0.048),_12.5px_12.5px_10px_rgba(0,_0,_0,_0.06),_22.3px_22.3px_17.9px_rgba(0,_0,_0,_0.072),_41.8px_41.8px_33.4px_rgba(0,_0,_0,_0.086),_100px_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-2xl animate">
<div className="aspect-[4/3] w-full bg-gray-100 rounded-xl overflow-hidden mb-5 relative">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3585ddcd-adc3-4bef-be46-c58d63255d63_800w.webp\')'}}></div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-lg text-gray-900 mb-1 font-heading" style={{}}>Leveraging first-home grants</h3>
<p className="text-xs text-gray-500 font-heading" style={{}}>Solo buyer · Melbourne VIC</p>
</div>
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm text-blue-500">
<iconify-icon className="" icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both] group hover:bg-white/70 hover:border-blue-200 transition-all duration-300 hover:shadow-md cursor-pointer bg-white border-0 rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-[2.8px_2.8px_2.2px_rgba(0,_0,_0,_0.034),_6.7px_6.7px_5.3px_rgba(0,_0,_0,_0.048),_12.5px_12.5px_10px_rgba(0,_0,_0,_0.06),_22.3px_22.3px_17.9px_rgba(0,_0,_0,_0.072),_41.8px_41.8px_33.4px_rgba(0,_0,_0,_0.086),_100px_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-2xl">
<div className="aspect-[4/3] w-full bg-gray-100 rounded-xl overflow-hidden mb-5 relative">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a81897e6-7b41-4199-8274-2e8482ec7393_800w.webp\')'}}></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg text-gray-900 mb-1 font-heading" style={{}}>Building a future for the family</h3>
<p className="text-xs text-gray-500 font-heading" style={{}}>Growing family · Brisbane QLD</p>
</div>
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm text-blue-500">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] group hover:bg-white/70 hover:border-blue-200 transition-all duration-300 hover:shadow-md cursor-pointer bg-white border-0 rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-[2.8px_2.8px_2.2px_rgba(0,_0,_0,_0.034),_6.7px_6.7px_5.3px_rgba(0,_0,_0,_0.048),_12.5px_12.5px_10px_rgba(0,_0,_0,_0.06),_22.3px_22.3px_17.9px_rgba(0,_0,_0,_0.072),_41.8px_41.8px_33.4px_rgba(0,_0,_0,_0.086),_100px_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-2xl">
<div className="aspect-[4/3] w-full bg-gray-100 rounded-xl overflow-hidden mb-5 relative">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4978f120-2404-47a1-ab03-cedff9f0a906_800w.webp\')'}}></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg text-gray-900 mb-1 font-heading" style={{}}>Turning savings into a front yard</h3>
<p className="text-xs text-gray-500 font-heading" style={{}}>First-time buyers · Perth WA</p>
</div>
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm text-blue-500">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 border-gray-200/50 border-t pt-12 gap-8">
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
<div className="flex items-center gap-2 mb-4 text-blue-500">
<iconify-icon icon="lucide:map" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-gray-900 font-heading" style={{}}>Step-by-step guidance</span>
</div>
<p className="leading-relaxed text-xs text-gray-500 font-heading" style={{}}>From “Where do I start?” to settlement, we break the journey into clear steps so you always know what’s next and what it will cost.</p>
</div>
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
<div className="flex items-center gap-2 mb-4 text-blue-500">
<iconify-icon icon="lucide:badge-dollar-sign" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-gray-900 font-heading" style={{}}>Finance &amp; grants support</span>
</div>
<p className="leading-relaxed text-xs text-gray-500 font-heading" style={{}}>We help you understand your borrowing power, structure your deposit, and access Australian first-home grants and schemes.</p>
</div>
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both]">
<div className="flex items-center gap-2 mb-4 text-blue-500">
<iconify-icon icon="lucide:hand-heart" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-gray-900 font-heading" style={{}}>End-to-end advocacy</span>
</div>
<p className="leading-relaxed text-xs text-gray-500 font-heading" style={{}}>We stay beside you — dealing with brokers, builders, and conveyancers — so you feel supported, not sold to.</p>
</div>
</section>

<section className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] mt-20 relative rounded-3xl overflow-hidden bg-gray-900 shadow-2xl group" style={{}}>
<div className="absolute inset-0 z-0">
<img alt="Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<div className="absolute inset-0 default"></div>
</div>
<div className="md:p-12 lg:p-16 flex flex-col lg:flex-row lg:items-center bg-cover bg-center z-10 rounded-3xl p-8 relative backdrop-blur-none gap-10 items-start justify-between" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4bbfae4a-083d-4b6f-9384-5298923d7501_1600w.webp\')'}}>
<div className="max-w-2xl">
<h2 className="md:text-4xl lg:text-5xl leading-[1.1] text-3xl font-semibold text-white tracking-tight font-heading mix-blend-normal mb-6 font-roboto" style={{maskImage: 'linear-gradient(40deg, transparent, black 40%, black 65%, transparent)'}}>
                        Turn “one day” into <span className="text-lime-300 font-roboto" style={{}}>move-in day</span>.
                    </h2>
<p className="md:text-lg leading-relaxed text-base text-slate-50 max-w-lg font-heading" style={{}}>Book a free 30-minute call to map out your first-home plan — what you can afford, how long it could take, and the smartest way to get there.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
<a className="group flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium text-white bg-white/5 border-white/10 border rounded-xl py-3.5 px-8 relative backdrop-blur-md" href="#">
<span className="font-heading" style={{}}>Book a call</span>
<iconify-icon className="transition-transform group-hover:translate-x-0.5" icon="lucide:calendar" width="16"></iconify-icon>
</a>
<a className="group flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium text-white bg-white/5 border-white/10 border rounded-xl py-3.5 px-8 relative backdrop-blur-md" href="#">
<span className="font-heading" style={{}}>Download first-home guide</span>
<iconify-icon className="transition-transform group-hover:translate-x-0.5" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] flex flex-col md:flex-row gap-4 border-gray-200/50 border-t mt-24 pt-8 items-center justify-between">
<span className="text-sm text-gray-400 font-heading" style={{}}>© 2026 First Keys Australia · Helping first home buyers nationwide</span>
<div className="flex items-center gap-6">
<a className="text-gray-400 transition-colors hover:text-blue-600" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="text-gray-400 transition-colors hover:text-blue-600" href="#">
<iconify-icon icon="lucide:github" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="text-gray-400 transition-colors hover:text-blue-600" href="#">
<iconify-icon icon="lucide:linkedin" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="text-gray-400 transition-colors hover:text-blue-600" href="#">
<iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</footer>
</main>

    </>
  );
}
