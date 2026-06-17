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
      

<div className="absolute top-0 left-0 w-full h-full bg-grain opacity-50 pointer-events-none z-0"></div>
<div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-green-50 rounded-full blur-[120px] opacity-60 z-0"></div>
<div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-neutral-100 rounded-full blur-[100px] opacity-60 z-0"></div>

<header className="w-full py-6 px-6 md:px-12 flex justify-between items-center relative z-20">
<a className="group flex items-center gap-2" href="#">
<span className="font-bebas text-2xl tracking-wide text-neutral-900 group-hover:text-green-600 transition-colors duration-300">VEGAN PRODUCTS</span>
</a>
</header>

<main className="flex-grow flex flex-col items-center justify-center relative z-10 px-6 py-12 text-center max-w-2xl mx-auto w-full">

<div className="mb-10 relative animate-float">

<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-4 bg-neutral-900/5 rounded-[100%] blur-sm transition-all duration-[6000ms] scale-x-75"></div>
<svg className="drop-shadow-xl" fill="none" height="180" viewbox="0 0 200 200" width="180" xmlns="http://www.w3.org/2000/svg">

<path d="M100 20C100 20 85 5 70 25C70 25 80 40 95 45" stroke="#16a34a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"></path>
<path d="M100 20C100 20 115 0 135 20C135 20 120 40 105 45" stroke="#16a34a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"></path>
<path d="M100 20V45" stroke="#16a34a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"></path>

<path d="M125 45C125 45 135 45 135 65C135 110 100 190 100 190C100 190 65 110 65 65C65 45 75 45 75 45H125Z" fill="#F97316" stroke="#ea580c" strokeWidth="1.5"></path>

<path d="M75 70H90" opacity="0.6" stroke="#ea580c" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M110 85H125" opacity="0.6" stroke="#ea580c" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M80 100H100" opacity="0.6" stroke="#ea580c" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M105 120H115" opacity="0.6" stroke="#ea580c" strokeLinecap="round" strokeWidth="1.5"></path>

<circle cx="88" cy="75" fill="#171717" r="3"></circle>
<circle cx="112" cy="75" fill="#171717" r="3"></circle>

<path d="M92 90C92 90 95 87 100 87C105 87 108 90 108 90" stroke="#171717" strokeLinecap="round" strokeWidth="2"></path>

<circle cx="85" cy="82" fill="#fdba74" opacity="0.5" r="4"></circle>
<circle cx="115" cy="82" fill="#fdba74" opacity="0.5" r="4"></circle>
</svg>
</div>

<div className="space-y-6">
<h1 className="font-bebas text-5xl md:text-7xl text-neutral-900 leading-[0.9] tracking-tight">
                КАЖЕТСЯ, ВЫ УШЛИ <br/>
<span className="text-green-600">НЕ В ТУ ГРЯДКУ</span>
</h1>
<p className="font-din text-base md:text-lg text-neutral-500 max-w-md mx-auto leading-relaxed tracking-normal font-normal">
                Но ничего страшного — в нашем ассортименте всё на месте! Вернитесь на главную и найдите что-нибудь вкусное и полезное.
            </p>

<div className="pt-4">
<a className="inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-green-600 text-white font-din font-medium text-sm md:text-base py-3.5 px-8 rounded-full transition-all duration-300 ease-out hover:shadow-lg hover:shadow-green-600/20 hover:-translate-y-0.5 group" href="#">
<span>Вернуться на главную</span>
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors duration-300" height="18" icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 z-[-1] select-none opacity-[0.03]">
<span className="font-bebas text-[20rem] leading-none tracking-tighter text-neutral-900">404</span>
</div>
</main>
<footer className="w-full py-6 text-center relative z-10">
<p className="font-din text-xs text-neutral-400 tracking-wide uppercase">
            © 2024 Vegan Products. All rights reserved.
        </p>
</footer>

    </>
  );
}
