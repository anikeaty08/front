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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="flex items-center justify-between py-8 px-6 md:px-12 border-b border-zinc-200/50">
<a className="font-['Playfair_Display',_serif] text-xl tracking-tighter font-normal text-zinc-800 hover:opacity-70 transition-opacity" href="#">
            1F
        </a>
<div className="flex gap-8 text-sm text-zinc-500 uppercase tracking-widest font-light">
<a className="hover:text-zinc-900 transition-colors" href="#">Journal</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Manifesto</a>
</div>
</nav>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 md:py-32">

<header className="text-center mb-40">
<h1 className="font-['Playfair_Display',_serif] text-5xl md:text-7xl font-light tracking-tight mb-6 text-zinc-900">
                Insights Journal
            </h1>
<p className="text-zinc-400 text-sm md:text-base uppercase tracking-[0.2em] font-light">
                Curated perspectives on wealth, behavior &amp; life
            </p>
</header>

<section className="mb-48">

<div className="flex items-center justify-center mb-24">
<div className="h-[1px] w-16 md:w-32 bg-zinc-200"></div>
<h2 className="mx-6 text-xs md:text-sm font-normal tracking-[0.25em] text-zinc-500 uppercase">
                    October 2023
                </h2>
<div className="h-[1px] w-16 md:w-32 bg-zinc-200"></div>
</div>

<article className="group cursor-pointer mb-24 block">
<div className="overflow-hidden mb-8 bg-zinc-100 aspect-[4/3] md:aspect-[21/9]">
<img alt="Minimalist architecture" className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105" src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-start justify-between md:items-center flex-col md:flex-row gap-4">
<h3 className="font-['Playfair_Display',_serif] text-3xl md:text-5xl font-normal tracking-tight text-zinc-800 transition-colors group-hover:text-zinc-600">
                        The Psychology of Long-Term Wealth
                    </h3>
<iconify-icon className="text-2xl text-zinc-400 transition-transform duration-500 group-hover:translate-x-2" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</article>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
<article className="group cursor-pointer block">
<div className="overflow-hidden mb-6 bg-zinc-100 aspect-[4/3]">
<img alt="Abstract light and shadow" className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex items-center gap-3 mb-3">
<span className="text-xs text-zinc-400 uppercase tracking-widest font-normal">Behavioral Economics</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span className="text-xs text-zinc-400 font-light italic">By Sarah Jenkins</span>
</div>
<h4 className="font-['Playfair_Display',_serif] text-2xl md:text-3xl font-normal tracking-tight text-zinc-800 transition-all duration-300 group-hover:underline decoration-[0.5px] underline-offset-4 decoration-zinc-400">
                        Navigating Market Volatility with Grace
                    </h4>
</article>
<article className="group cursor-pointer block">
<div className="overflow-hidden mb-6 bg-zinc-100 aspect-[4/3]">
<img alt="Calm water ripples" className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex items-center gap-3 mb-3">
<span className="text-xs text-zinc-400 uppercase tracking-widest font-normal">Philosophy</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span className="text-xs text-zinc-400 font-light italic">By David Chen</span>
</div>
<h4 className="font-['Playfair_Display',_serif] text-2xl md:text-3xl font-normal tracking-tight text-zinc-800 transition-all duration-300 group-hover:underline decoration-[0.5px] underline-offset-4 decoration-zinc-400">
                        The Illusion of Instant Liquidity
                    </h4>
</article>
</div>
</section>

<blockquote className="text-center max-w-4xl mx-auto mb-48 px-4">
<iconify-icon className="text-3xl md:text-4xl text-zinc-300 mb-8 block mx-auto" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<p className="font-['Playfair_Display',_serif] text-3xl md:text-4xl lg:text-5xl font-light leading-snug tracking-tight text-zinc-800 mb-10">
                "True wealth is not measured by the abundance of possessions, but by the quiet confidence of having options and the freedom to choose."
            </p>
<footer className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-normal">
                1 Finance Editorial Board
            </footer>
</blockquote>

<section className="mb-32">

<div className="flex items-center justify-center mb-24">
<div className="h-[1px] w-16 md:w-32 bg-zinc-200"></div>
<h2 className="mx-6 text-xs md:text-sm font-normal tracking-[0.25em] text-zinc-500 uppercase">
                    September 2023
                </h2>
<div className="h-[1px] w-16 md:w-32 bg-zinc-200"></div>
</div>

<article className="group cursor-pointer mb-24 block">
<div className="overflow-hidden mb-8 bg-zinc-100 aspect-[4/3] md:aspect-[21/9]">
<img alt="Glass building facade" className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-start justify-between md:items-center flex-col md:flex-row gap-4">
<h3 className="font-['Playfair_Display',_serif] text-3xl md:text-5xl font-normal tracking-tight text-zinc-800 transition-colors group-hover:text-zinc-600">
                        Architecting a Resilient Portfolio
                    </h3>
<iconify-icon className="text-2xl text-zinc-400 transition-transform duration-500 group-hover:translate-x-2" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</article>

<div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-20 items-end">

<article className="group cursor-pointer block md:col-span-7">
<div className="overflow-hidden mb-6 bg-zinc-100 aspect-[4/5] md:aspect-[3/2]">
<img alt="Structured columns" className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex items-center gap-3 mb-3">
<span className="text-xs text-zinc-400 uppercase tracking-widest font-normal">Strategy</span>
</div>
<h4 className="font-['Playfair_Display',_serif] text-2xl md:text-3xl font-normal tracking-tight text-zinc-800 transition-all duration-300 group-hover:underline decoration-[0.5px] underline-offset-4 decoration-zinc-400">
                        The Silent Compounding of Good Habits
                    </h4>
</article>

<article className="group cursor-pointer block md:col-span-5">
<div className="overflow-hidden mb-6 bg-zinc-100 aspect-[4/5]">
<img alt="Minimalist vase" className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2864&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 mb-3">
<span className="text-xs text-zinc-400 uppercase tracking-widest font-normal">Personal Finance</span>
</div>
<h4 className="font-['Playfair_Display',_serif] text-xl md:text-2xl font-normal tracking-tight text-zinc-800 transition-all duration-300 group-hover:underline decoration-[0.5px] underline-offset-4 decoration-zinc-400">
                        Why Less is Often More in Investing
                    </h4>
</article>
</div>
</section>

<div className="mt-40 text-center border-t border-zinc-200/50 pt-20 pb-10">
<button className="font-['Playfair_Display',_serif] text-lg font-normal text-zinc-500 hover:text-zinc-900 transition-colors italic group inline-flex items-center gap-2">
                Explore previous archives
                <iconify-icon className="transition-transform duration-300 group-hover:translate-y-1" icon="solar:arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</main>

    </>
  );
}
