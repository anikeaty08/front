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



    document.addEventListener('DOMContentLoaded',()=>{lucide.createIcons()})
  
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
      

<header className="fixed inset-x-0 top-4 z-50 px-4 fade-up">
<div className="max-w-7xl mx-auto h-14 flex items-center justify-between glass bg-white/5 border border-white/10 rounded-full px-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600">
<i className="w-4 h-4 text-white" data-lucide="hexagon" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium sf-pro-display">Nexus Studio</span>
</div>
<nav className="hidden md:flex gap-8 text-sm">
<a className="text-white/70 hover:text-white transition-colors" href="#">Platform</a>
<a className="text-white/70 hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-white/70 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-white/70 hover:text-white transition-colors" href="#">Blog</a>
</nav>
<div className="hidden md:flex gap-3">
<button className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">Sign in</button>
<button className="px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all">Get started</button>
</div>
<button className="md:hidden p-2"><i className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i></button>
</div>
</header>

<section className="relative pt-44 pb-32 px-4">

<div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
<div className="w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] bg-gradient-to-tr from-[#34d399]/20 via-[#facc15]/30 to-transparent rounded-full absolute -top-1/3 -left-1/4 blur-[120px]"></div>
<div className="w-[70vw] h-[70vw] bg-gradient-to-br from-[#facc15]/20 via-[#34d399]/20 to-transparent rounded-full absolute -bottom-1/3 -right-1/4 blur-[120px]"></div>
</div>
<div className="max-w-4xl mx-auto text-center">
<p className="fade-up fade-delay-1 inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-amber-400/10 border border-emerald-400/30 rounded-full mb-8 text-sm font-medium">
<span className="w-2 h-2 rounded-full bg-amber-300 animate-ping"></span>
        Now trusted by 2.5 M developers
      </p>
<h1 className="fade-up fade-delay-2 text-5xl md:text-6xl lg:text-7xl sf-pro-display tracking-tight font-light bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent mb-8">
        Build faster.<br className="hidden sm:block" /> Ship smarter.
      </h1>
<p className="fade-up fade-delay-3 max-w-2xl mx-auto text-lg text-white/60 leading-relaxed mb-12">
        Next-gen toolchain engineered for velocity and reliability. Craft world-class products without compromise.
      </p>
<div className="fade-up fade-delay-3 flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-emerald-400 to-amber-300 text-black hover:opacity-90 transition-all flex items-center gap-2">
          Get started
          <i className="w-4 h-4" data-lucide="arrow-right" stroke="currentColor" strokeWidth="2"></i>
</button>
<button className="px-8 py-4 rounded-full border border-white/30 hover:bg-white/10 transition-all flex items-center gap-2">
<i className="w-5 h-5" data-lucide="monitor" strokeWidth="1.5"></i>
          Watch demo
        </button>
</div>
</div>
</section>

<section className="pb-32 px-4">
<div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">

<article className="card bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl">
<div className="aspect-video relative">
<img alt="" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=60" />
</div>
<div className="p-8">
<h3 className="text-xl font-semibold sf-pro-display mb-3">4× faster delivery</h3>
<p className="text-white/60 leading-relaxed mb-6">“Switching to Nexus cut our deployment time from hours to minutes, letting the team focus on features users love.”</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[url('https://randomuser.me/api/portraits/women/44.jpg')] bg-cover"></div>
<span className="text-sm font-medium">Emily Nguyen</span>
</div>
<i className="w-5 h-5 text-white/40" data-lucide="trending-up"></i>
</div>
</div>
</article>

<article className="card bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl">
<div className="aspect-video relative">
<img alt="" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=60" />
</div>
<div className="p-8">
<h3 className="text-xl font-semibold sf-pro-display mb-3">99.98 % uptime</h3>
<p className="text-white/60 leading-relaxed mb-6">“Mission-critical services stay online thanks to Nexus’ rock-solid infrastructure and proactive monitoring.”</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[url('https://randomuser.me/api/portraits/men/32.jpg')] bg-cover"></div>
<span className="text-sm font-medium">Dylan Moore</span>
</div>
<i className="w-5 h-5 text-white/40" data-lucide="shield-check"></i>
</div>
</div>
</article>

<article className="card bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl">
<div className="aspect-video relative">
<img alt="" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=60" />
</div>
<div className="p-8">
<h3 className="text-xl font-semibold sf-pro-display mb-3">10× team velocity</h3>
<p className="text-white/60 leading-relaxed mb-6">“Real-time collaboration and instant previews accelerated our feedback loops like never before.”</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[url('https://randomuser.me/api/portraits/women/68.jpg')] bg-cover"></div>
<span className="text-sm font-medium">Sophia Reed</span>
</div>
<i className="w-5 h-5 text-white/40" data-lucide="zap"></i>
</div>
</div>
</article>
</div>
</section>


    </>
  );
}
