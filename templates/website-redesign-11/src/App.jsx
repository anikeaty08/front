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
      

<nav className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between relative z-50">

<div className="flex items-center gap-2">
<div className="bg-slate-900 text-white p-1.5 rounded-lg">
<svg className="w-6 h-6" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4h16v16H4z" fill="transparent"></path>
<path d="M7 7l2.5 10L12 12l2.5 5L17 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</div>
<span className="text-2xl text-slate-800 tracking-tight font-quicksand font-medium">webtec</span>
</div>

<div className="hidden lg:flex items-center gap-10">
<a className="text-purple-600 font-medium font-quicksand" href="#">Home</a>
<a className="text-slate-600 hover:text-slate-900 font-medium flex items-center gap-1 font-quicksand" href="#">
                Services <svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<a className="text-slate-600 hover:text-slate-900 font-medium flex items-center gap-1 font-quicksand" href="#">
                About <svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<a className="text-slate-600 hover:text-slate-900 font-medium font-quicksand" href="#">Reviews</a>
<a className="text-slate-600 hover:text-slate-900 font-medium font-quicksand" href="#">Projects</a>
<a className="text-slate-600 hover:text-slate-900 font-medium font-quicksand" href="#">Pricing</a>
<a className="text-slate-600 hover:text-slate-900 font-medium font-quicksand" href="#">Blog</a>
<a className="text-slate-600 hover:text-slate-900 font-medium font-quicksand" href="#">Contact</a>
</div>

<div className="hidden lg:flex items-center gap-6">
<a className="text-slate-800 hover:text-purple-600 transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="text-slate-800 hover:text-purple-600 transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-slate-800 hover:text-purple-600 transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>

<button className="lg:hidden text-slate-800">
<svg className="lucide lucide-menu w-8 h-8" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</nav>

<main className="max-w-7xl mx-auto px-6 pt-12 pb-24 relative">

<div className="absolute top-[20%] left-[35%] w-96 h-32 hidden xl:block pointer-events-none z-0 opacity-40">
<svg fill="none" height="150" viewbox="0 0 400 150" width="400" xmlns="http://www.w3.org/2000/svg">
<path d="M0 80 C 100 80, 150 120, 400 20" stroke="#94a3b8" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10 space-y-8">
<div className="">
<p className="text-sm font-medium text-slate-500 tracking-wide font-quicksand mb-4">
                        Web Development, SEO &amp; Paid Ads Agency
                    </p>
<h1 className="text-6xl md:text-7xl text-slate-900 tracking-tight leading-[1.1] mb-6 font-quicksand font-medium">
                        Website <span className="text-slate-900 font-quicksand font-medium">Redesign</span>
</h1>
<p className="text-3xl md:text-4xl text-slate-500 tracking-tight leading-snug font-quicksand font-medium">
                        Get a <span className="text-purple-500 font-quicksand font-medium">Free</span> Website Redesign Before You Decide
                    </p>
</div>
<form className="space-y-4 max-w-lg mt-8">

<div className="relative group">
<input className="w-full bg-white text-slate-800 placeholder-slate-400 rounded-full py-5 px-8 shadow-sm border border-transparent ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-lg" placeholder="yourwebsite.com" type="text"/>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative">
<input className="w-full bg-white text-slate-800 placeholder-slate-400 rounded-full py-5 px-8 shadow-sm border border-transparent ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-lg" placeholder="hello@youremail.com" type="email"/>

<div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-0.5">
<div className="w-1 h-1 rounded-full bg-red-400"></div>
<div className="w-1 h-1 rounded-full bg-red-400"></div>
<div className="w-1 h-1 rounded-full bg-red-400"></div>
</div>
</div>
<input className="w-full bg-white text-slate-800 placeholder-slate-400 rounded-full py-5 px-8 shadow-sm border border-transparent ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-lg" placeholder="Your phone number" type="tel"/>
</div>

<button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-5 rounded-full shadow-lg shadow-purple-200 hover:shadow-purple-300 transition-all flex items-center justify-center gap-2 group mt-2 text-lg tracking-wide uppercase font-quicksand" type="button">
                        Sign Up Today
                        <svg className="lucide lucide-arrow-right-circle w-6 h-6 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 16 4-4-4-4"></path><path d="M8 12h8"></path></svg>
</button>
</form>
</div>

<div className="relative z-10 flex justify-center lg:justify-end">
<div className="w-full max-w-xl bg-black rounded-[2.5rem] overflow-hidden shadow-2xl ring-8 ring-white/50">

<div className="flex items-center justify-between px-8 py-6">
<div className="flex items-center gap-3">
<h3 className="text-white text-xl font-semibold tracking-tight font-quicksand">Up for a whole new experience?</h3>
<span className="text-2xl font-quicksand font-medium">🌷</span>
</div>
<button className="text-slate-400 hover:text-white transition-colors">
<svg className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="relative w-full aspect-[4/3] bg-slate-800 overflow-hidden group cursor-pointer">

<img alt="Web Design Mockup" className="w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-slate-900/20"></div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none transform scale-90 rotate-[-4deg]">
<div className="w-3/4 h-3/4 bg-slate-100 rounded-xl shadow-2xl overflow-hidden relative border border-slate-200/20 transform rotate-6">
<div className="absolute inset-0 bg-gradient-to-br from-white to-slate-200"></div>
<div className="absolute top-4 left-4 right-4 h-32 bg-slate-200 rounded-lg opacity-50"></div>
<div className="absolute bottom-4 left-4 right-4 h-24 bg-purple-100 rounded-lg opacity-50"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-play w-8 h-8 text-slate-900 ml-1 fill-slate-900" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>

<div className="absolute bottom-6 left-6 flex items-center gap-2">
<div className="bg-white/20 backdrop-blur-md text-white p-1 rounded">
<svg className="w-4 h-4" fill="none" height="16" viewbox="0 0 24 24" width="16">
<path d="M7 7l2.5 10L12 12l2.5 5L17 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<span className="text-white font-semibold text-lg tracking-tight font-quicksand">webtec</span>
</div>
</div>

<div className="bg-black py-6 px-8 text-center border-t border-white/10">
<p className="text-white text-lg font-medium tracking-tight flex items-center justify-center gap-2 font-quicksand">
                            Webtec is a unique five 
                            <span className="text-yellow-400"><svg className="lucide lucide-star w-5 h-5 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></span> 
                            rated web agency
                        </p>
<div className="flex items-center justify-center gap-1 mt-3 opacity-50">
<div className="bg-white text-black p-0.5 rounded-sm">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="12">
<path d="M7 7l2.5 10L12 12l2.5 5L17 7"></path>
</svg>
</div>
<span className="text-white text-xs font-bold tracking-wide font-quicksand">webtec</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-32 border-t border-slate-200 pt-16">
<div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="text-4xl text-slate-700 tracking-widest font-quicksand font-medium">FL SWIMWEAR</div>
<div className="text-5xl text-slate-800 tracking-tight font-quicksand font-medium">H&amp;M Group</div>

<div className="text-5xl font-sans font-bold text-slate-300 overflow-hidden w-12 relative">
<span className="absolute left-0 font-quicksand font-medium">A</span>
</div>
</div>
</div>
</main>


    </>
  );
}
