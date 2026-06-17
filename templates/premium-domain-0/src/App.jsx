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



        // Initialize Icons
        lucide.createIcons();

        // Intersection Observer for animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.observe-element').forEach((el) => {
            observer.observe(el);
        });
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid opacity-20"></div>
<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full mix-blend-screen"></div>
</div>

<nav className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 flex justify-between items-center observe-element in-view">
</nav>

<main className="flex-grow flex flex-col z-10 pt-20 pr-6 pb-32 pl-6 relative items-center justify-center">

<div className="observe-element delay-100 mb-8 in-view">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-medium tracking-wide text-blue-300 uppercase">Available Now</span>
</div>
</div>

<h1 className="observe-element delay-200 bg-clip-text in-view sm:text-7xl md:text-9xl text-5xl font-medium text-transparent tracking-tighter font-nunito text-center bg-gradient-to-b from-white via-white to-neutral-500 mb-6 line-height-2">syria.pm</h1>

<p className="observe-element delay-300 text-center text-neutral-400 text-lg sm:text-xl max-w-xl mx-auto mb-12 font-light leading-relaxed in-view">
            This premium digital asset is currently on the market. Secure your brand's future identity before it's gone.
        </p>

<div className="observe-element delay-500 flex flex-col sm:flex-row gap-6 in-view gap-x-6 gap-y-6 items-center">

<button className="shiny-cta group" onclick="window.location.href='#'">
<span>
                    Buy Domain
                    <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>

<a className="text-neutral-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-2 group px-4 py-2" href="#">
                See what else we have
                <svg className="lucide lucide-chevron-right w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>

<div className="mt-32 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 pt-12 observe-element delay-500 in-view">

<div className="flex flex-col items-center text-center space-y-3 p-4 rounded-2xl hover:bg-white/5 transition-colors duration-500 border border-transparent hover:border-white/5">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white">
<svg className="lucide lucide-shield-check w-5 h-5 text-neutral-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-sm font-medium text-neutral-200">Secure Transfer</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                    We use top-tier escrow services to ensure your funds and the domain are protected during transfer.
                </p>
</div>

<div className="flex flex-col items-center text-center space-y-3 p-4 rounded-2xl hover:bg-white/5 transition-colors duration-500 border border-transparent hover:border-white/5">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white">
<svg className="lucide lucide-zap w-5 h-5 text-neutral-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-sm font-medium text-neutral-200">Instant Ownership</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                    Once payment is verified, the domain ownership is transferred to your registrar account immediately.
                </p>
</div>

<div className="flex flex-col items-center text-center space-y-3 p-4 rounded-2xl hover:bg-white/5 transition-colors duration-500 border border-transparent hover:border-white/5">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white">
<svg className="lucide lucide-globe w-5 h-5 text-neutral-300" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-sm font-medium text-neutral-200">Global Reach</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                    A premium .com domain gives your brand instant credibility and visibility worldwide.
                </p>
</div>
</div>
</main>

<footer className="relative z-10 w-full max-w-6xl mx-auto px-6 py-8 flex justify-between items-center border-t border-white/5 observe-element">
<p className="text-xs text-neutral-600">© 2025 971 International s.r.o</p>
<div className="flex gap-4">
<a className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors" href="#">Privacy</a>
<a className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors" href="#">Terms</a>
</div>
</footer>


    </>
  );
}
