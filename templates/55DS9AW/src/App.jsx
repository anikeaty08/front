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
      <iframe className="fixed w-full h-screen" frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/hellodistortingintro-KK1UjacLdIpYX67NFsvuRTYC" width="100%"></iframe>

<header className="flex items-center justify-between px-6 md:px-10 py-5">
<a className="flex items-center gap-2 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md" href="#">
<svg className="lucide lucide-layers w-5 h-5 text-emerald-500" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span className="font-semibold tracking-tight text-base font-geist">NovaSuite</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm hover:text-white transition-colors font-geist" href="#">Features</a>
<a className="text-sm hover:text-white transition-colors font-geist" href="#">Pricing</a>
<a className="text-sm hover:text-white transition-colors font-geist" href="#">Blog</a>
<a className="text-sm hover:text-white transition-colors font-geist" href="#">Contact</a>
</nav>
<button className="inline-flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium bg-amber-600 hover:bg-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500 transition">
<span className="font-geist">Sign in</span>
<svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
</button>
</header>

<section className="relative flex-grow flex items-center">

<div className="absolute inset-0" id="aura-emchvqsve"></div>

<div className="relative mx-auto w-full max-w-6xl px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">

<div className="space-y-6" style={{animation: 'fade-up .9s ease-out forwards'}}>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight font-space-grotesk" style={{}}>
          Design. Build. <span className="text-amber-500 font-space-grotesk" style={{}}>Ship.</span>
</h1>
<p className="text-orange-400 text-lg sm:text-xl max-w-lg font-geist" style={{animation: 'fade-up 1.1s ease-out .08s forwards'}}>
          A unified suite of tools that helps designers and developers collaborate in real-time, launch faster, and iterate effortlessly.
        </p>

<div className="flex flex-col sm:flex-row gap-3 pt-2" style={{animation: 'fade-up 1.2s ease-out .16s forwards'}}>
<button className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 bg-amber-600 hover:bg-amber-500 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
<span className="font-geist">Get started free</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 bg-orange-800 hover:bg-orange-700 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
<span className="font-geist">Watch demo</span>
</button>
</div>

<div className="flex items-center gap-5 pt-8" style={{animation: 'fade-up 1.3s ease-out .24s forwards'}}>
<div className="flex -space-x-2">
<img alt="Customer avatar" className="w-9 h-9 rounded-full ring-2 ring-orange-900 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Customer avatar" className="w-9 h-9 rounded-full ring-2 ring-orange-900 object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=crop&amp;w=200&amp;q=40"/>
<img alt="Customer avatar" className="w-9 h-9 rounded-full ring-2 ring-orange-900 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=200&amp;q=40"/>
</div>
<p className="text-sm text-orange-400 font-geist">Trusted by over <span className="text-white font-medium font-geist">25k teams</span></p>
</div>
</div>

<div className="relative" style={{animation: 'slide-right 1s cubic-bezier(.4,0,.2,1) .4s forwards'}}>

<div className="relative h-[480px] sm:h-[560px] md:h-[500px] lg:h-[560px] w-full rounded-[2.5rem] overflow-hidden ring-2 ring-orange-800 shadow-2xl">
<img alt="App preview" className="w-full h-full object-cover object-top" src="https://images.unsplash.com/photo-1697707903242-dc15a6b56d45?w=1080&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-orange-950/60 via-orange-950/20 to-transparent"></div>
</div>

<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-orange-900/80 backdrop-blur-sm ring-1 ring-orange-800 rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg hover:shadow-amber-500/10 transition hover:-translate-y-0.5" style={{animation: 'blur-in 1.4s ease-out .8s forwards'}}>
<svg className="lucide lucide-zap w-4 h-4 text-emerald-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm font-geist">Real-time collaboration enabled</span>
</div>
</div>
</div>
</section>

<div className="h-px bg-orange-800"></div>

<footer className="text-center py-6 text-sm text-orange-500 font-geist">
    Built for a brighter workflow • © 2024 NovaSuite
  </footer>



    </>
  );
}
