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
    document.getElementById("year").textContent = new Date().getFullYear();

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
  
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
      

<header className="fixed top-0 left-0 right-0 z-40">
<nav className="mx-auto flex items-center justify-between rounded-b-xl bg-black/60 px-6 py-4 backdrop-blur-md lg:max-w-7xl animate-fade-in">

<a className="flex items-center gap-2 text-lg font-semibold tracking-tight font-sans animate-slide-in-left delay-100" href="#">
        NB
      </a>

<ul className="hidden items-center gap-8 text-sm font-medium lg:flex animate-fade-in delay-200">
<li className=""><a className="transition-colors hover:text-violet-300 font-sans" href="#">About</a></li>
<li className=""><a className="transition-colors hover:text-violet-300 font-sans" href="#">Platform</a></li>
<li><a className="transition-colors hover:text-violet-300 font-sans" href="#">Pricing</a></li>
<li className=""><a className="transition-colors hover:text-violet-300 font-sans" href="#">Developers</a></li>
<li><a className="transition-colors hover:text-violet-300 font-sans" href="#">Docs</a></li>
<li><a className="transition-colors hover:text-violet-300 font-sans" href="#">Blog</a></li>
</ul>

<div className="flex items-center gap-4 animate-slide-in-left delay-300">
<button className="hidden items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-medium transition hover:border-violet-400 hover:text-violet-300 lg:flex font-sans">
          Sign In
          <svg className="lucide lucide-log-in w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `16px`, height: `16px`, color: `rgb(196, 181, 253)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>

<button className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 lg:hidden" id="menuBtn">
<svg className="lucide lucide-menu h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16"></path><path d="M4 12h16"></path><path d="M4 18h16"></path></svg>
</button>
</div>
</nav>

<div className="hidden bg-black/90 backdrop-blur-lg lg:hidden" id="mobileMenu">
<ul className="space-y-6 px-6 py-8 text-base font-medium">
<li><a className="block hover:text-violet-300 font-sans" href="#">About</a></li>
<li><a className="block hover:text-violet-300 font-sans" href="#">Platform</a></li>
<li><a className="block hover:text-violet-300 font-sans" href="#">Pricing</a></li>
<li><a className="block hover:text-violet-300 font-sans" href="#">Developers</a></li>
<li><a className="block hover:text-violet-300 font-sans" href="#">Docs</a></li>
<li><a className="block hover:text-violet-300 font-sans" href="#">Blog</a></li>
<li>
<button className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 hover:border-violet-400 hover:text-violet-300 font-sans">
            Sign In
            <svg className="lucide lucide-log-in h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"><path d="m15 3 6 6-6 6"></path><path d="M21 9H9"></path><path d="M21 15H9"></path><path d="M3 3h6v18H3z"></path></svg>
</button>
</li>
</ul>
</div>
</header>

<section className="relative flex min-h-screen flex-col overflow-hidden bg-[url(/assets/43b1f862-83f5-42c1-8168-d841ad05dd9c_3840w.jpg)] bg-cover pt-28 items-center justify-center">
<div className="max-w-4xl text-center mt-44 mr-auto ml-auto pr-6 pl-6">
<h1 className="leading-tight sm:text-4xl md:text-5xl lg:text-6xl text-xl tracking-tight font-instrument-serif font-normal animate-blur-in delay-400">
        Distributed AI Cloud Platform<br className="hidden md:block" />on the Quantum Mesh
      </h1>
<p className="mx-auto mt-6 max-w-2xl text-base text-gray-300 sm:text-lg font-sans animate-fade-in-up delay-600">
        Scale intelligent workloads for next-gen applications with unmatched performance and security.
      </p>
<button className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3 text-sm font-medium transition hover:border-violet-400 hover:text-violet-300 font-sans animate-fade-in-up delay-800">
        Request Access
        <svg className="lucide lucide-rocket w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `16px`, height: `16px`, color: `rgb(196, 181, 253)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</section>

<section className="sm:py-32 bg-[url(/assets/61613b76-62cc-4a73-95a6-2e470a47b858_3840w.jpg)] bg-cover pt-24 pb-24">
<div className="mx-auto max-w-5xl px-6">
<h2 className="text-center text-3xl tracking-tight font-instrument-serif font-normal animate-fade-in-up delay-900">Why Nebula?</h2>
<div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">

<div className="flex flex-col items-start gap-4 animate-fade-in-up delay-1000">
<div className="flex h-12 w-12 border-white/20 border rounded-full items-center justify-center">
<svg className="lucide lucide-cpu w-[20px] h-[20px]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
</div>
<h3 className="text-lg font-medium font-sans">High-Performance Compute</h3>
<p className="text-sm text-gray-100">Leverage distributed GPU clusters with sub-millisecond latency for inference and training workloads.</p>
</div>

<div className="flex flex-col items-start gap-4 animate-fade-in-up delay-1100">
<div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
<svg className="lucide lucide-lock-keyhole w-[20px] h-[20px]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="text-lg font-medium font-sans">Zero-Trust Security</h3>
<p className="text-sm text-gray-100">End-to-end encryption and fine-grained access control baked into every layer of the stack.</p>
</div>

<div className="flex flex-col items-start gap-4 animate-fade-in-up delay-1200">
<div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
<svg className="lucide lucide-globe w-[20px] h-[20px]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-lg font-medium font-sans">Global Edge Network</h3>
<p className="text-sm text-gray-100">Deploy models closer to your users in 200+ points of presence for instant, reliable responses.</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-10">
<div className="mx-auto max-w-7xl px-6 text-center text-sm text-gray-400 font-sans animate-fade-in delay-1000">
      © <span className="font-sans" id="year">2025</span> Nebula Technologies. All rights reserved.
    </div>
</footer>



    </>
  );
}
