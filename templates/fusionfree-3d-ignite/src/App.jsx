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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
brand: {
red: '#FF1F1F',
bg: '#0A0A0A',
surface: '#111111'
}
}
}
}
}



        // Spotlight Effect Logic
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.spotlight-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            });
        });

        // Scroll Animation Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
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
      

<div className="flex flex-col lg:flex-row gap-[40px] items-center justify-center w-full max-w-[1400px] px-4">

<div className="relative w-[393px] h-[852px] shrink-0 rounded-[55px] border-[8px] border-[#1a1a1a] bg-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">

<div className="absolute top-7 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-50 pointer-events-none"></div>

<div className="w-full h-full bg-[#050505] rounded-[46px] overflow-y-auto no-scrollbar relative mask-linear">

<div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_0%,#333_0%,transparent_50%)]"></div>
<div className="pt-20 px-6 pb-12 flex flex-col gap-12 relative z-10">

<section className="space-y-8" id="feature">
<div className="space-y-2 reveal">
<h2 className="text-white text-3xl tracking-tight font-medium">Core <span className="text-neutral-500">Workflow</span></h2>
<p className="text-neutral-400 text-lg leading-relaxed">Designed for speed and engineered for burnt-out souls.</p>
</div>
<div className="flex flex-col gap-4 spotlight-group">

<div className="spotlight-card relative group rounded-3xl bg-neutral-900/50 border border-neutral-800 p-6 overflow-hidden reveal">
<div className="spotlight-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.06), transparent 40%)'}}></div>
<div className="spotlight-border absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(255, 255, 255, 0.3), transparent 40%)', maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)', maskComposite: 'exclude', padding: '1px'}}></div>
<span className="iconify text-neutral-200 text-3xl mb-4" data-icon="solar:bolt-circle-linear"></span>
<h3 className="text-white text-xl font-medium mb-2">Instant Sync</h3>
<p className="text-neutral-400 text-lg">Real-time data propagation across all nodes without latency.</p>
</div>

<div className="spotlight-card relative group rounded-3xl bg-neutral-900/50 border border-neutral-800 p-6 overflow-hidden reveal">
<div className="spotlight-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.06), transparent 40%)'}}></div>
<div className="spotlight-border absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(255, 255, 255, 0.3), transparent 40%)', maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)', maskComposite: 'exclude', padding: '1px'}}></div>
<span className="iconify text-neutral-200 text-3xl mb-4" data-icon="solar:shield-check-linear"></span>
<h3 className="text-white text-xl font-medium mb-2">Alpha Masking</h3>
<p className="text-neutral-400 text-lg">Secure containment fields for sensitive user data.</p>
</div>
</div>
</section>

<section className="pt-8 border-t border-neutral-800" id="testimonial">
<div className="reveal mb-6">
<h2 className="text-white text-3xl tracking-tight font-medium">Voices</h2>
</div>
<div className="spotlight-card relative bg-neutral-900/30 border border-neutral-800 rounded-3xl p-6 reveal">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-600"></div>
<div>
<div className="text-white text-lg font-medium">Alex Chen</div>
<div className="text-neutral-500 text-base">Product Designer</div>
</div>
</div>
<p className="text-neutral-300 text-lg leading-relaxed">"The interface is so clean it almost hurts. It's exactly what I needed to stop sighing and start shipping."</p>
</div>
</section>
</div>
</div>
</div>

<div className="relative w-[393px] h-[852px] shrink-0 rounded-[55px] border-[8px] border-[#1a1a1a] bg-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] z-10 scale-[1.02]">

<div className="absolute top-7 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-50 pointer-events-none"></div>

<div className="w-full h-full bg-[#f2f2f2] dark:bg-[#f2f2f2] rounded-[46px] overflow-hidden relative font-sans">

<div className="absolute top-0 left-[25%] w-px h-full bg-[#FF1F1F]"></div>
<div className="absolute top-[20%] left-0 w-full h-px bg-[#FF1F1F]"></div>

<div className="absolute top-14 left-0 w-full px-6 flex justify-between items-center z-20">
<span className="text-[#b0b0b0] text-sm font-medium tracking-tight">bleibtgleich</span>
<div className="w-2 h-2 bg-[#FF1F1F]"></div>
<span className="text-[#b0b0b0] text-sm font-medium tracking-tight">about</span>
<span className="text-[#b0b0b0] text-sm font-medium tracking-tight text-right">in tg mail</span>
</div>

<div className="absolute top-[23%] left-[25%] pl-4 z-20 reveal">
<p className="text-[#FF1F1F] text-lg font-medium leading-tight tracking-tight">
                        another burnt-out soul<br/>
                        behind the screen
                    </p>
</div>

<div className="absolute bottom-0 w-full overflow-hidden leading-none z-10">

<div className="absolute -top-12 left-[25%] pl-4 z-20 reveal">
<p className="text-[#FF1F1F] text-sm font-medium tracking-tight">scroll, sigh, and exit.</p>
</div>

<div className="relative w-full h-[300px] flex items-end">
<h1 className="text-[180px] font-semibold text-[#FF1F1F] tracking-tighter leading-[0.75] ml-[-10px] opacity-95 mix-blend-multiply whitespace-nowrap reveal">
                            bleibt<br/>
                            gleich
                        </h1>

<h1 className="absolute top-0 left-0 text-[180px] font-semibold text-[#e0e0e0] tracking-tighter leading-[0.75] ml-[-10px] -z-10 blur-[1px]">
                            UX<br/>UI
                        </h1>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 reveal">
<button className="bg-[#FF1F1F] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-red-700 transition-colors shadow-lg flex items-center gap-2 group">
<span>Enter</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="solar:arrow-right-linear"></span>
</button>
</div>
</div>
</div>

<div className="relative w-[393px] h-[852px] shrink-0 rounded-[55px] border-[8px] border-[#1a1a1a] bg-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">

<div className="absolute top-7 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-50 pointer-events-none"></div>

<div className="w-full h-full bg-[#050505] rounded-[46px] overflow-y-auto no-scrollbar relative">
<div className="pt-20 px-6 pb-12 flex flex-col gap-10 relative z-10">

<section className="space-y-6" id="pricing">
<div className="flex justify-between items-end reveal">
<h2 className="text-white text-3xl tracking-tight font-medium">Plans</h2>
<div className="flex items-center gap-2 bg-neutral-900 rounded-full p-1 border border-neutral-800">
<span className="px-3 py-1 bg-neutral-700 rounded-full text-white text-xs font-medium">M</span>
<span className="px-3 py-1 text-neutral-500 text-xs font-medium">Y</span>
</div>
</div>

<div className="spotlight-card relative bg-neutral-900 border border-neutral-800 rounded-3xl p-6 overflow-hidden group reveal">
<div className="spotlight-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.06), transparent 40%)'}}></div>
<div className="relative z-10">
<h3 className="text-neutral-400 text-lg font-medium mb-1">Pro</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-white text-4xl font-medium tracking-tight">$29</span>
<span className="text-neutral-500 text-lg">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-neutral-300 text-lg">
<span className="iconify text-white" data-icon="solar:check-circle-linear"></span>
                                        Unlimited projects
                                    </li>
<li className="flex items-center gap-3 text-neutral-300 text-lg">
<span className="iconify text-white" data-icon="solar:check-circle-linear"></span>
                                        Analytics
                                    </li>
<li className="flex items-center gap-3 text-neutral-300 text-lg">
<span className="iconify text-white" data-icon="solar:check-circle-linear"></span>
                                        24/7 Support
                                    </li>
</ul>
<button className="w-full py-3 bg-white text-black rounded-xl font-medium text-lg hover:bg-neutral-200 transition-colors">Choose Pro</button>
</div>
</div>
</section>

<footer className="mt-8 pt-10 border-t border-neutral-800 text-center reveal" id="footer">
<div className="flex justify-center gap-6 mb-8">
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><span className="iconify text-2xl" data-icon="solar:brand-twitter-linear"></span></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><span className="iconify text-2xl" data-icon="solar:brand-github-linear"></span></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><span className="iconify text-2xl" data-icon="solar:brand-instagram-linear"></span></a>
</div>
<p className="text-neutral-600 text-base font-medium">© 2024 Bleibtgleich Inc.</p>
<p className="text-neutral-700 text-sm mt-2">Designed in Void.</p>
</footer>
</div>
</div>
</div>
</div>



    </>
  );
}
