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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/5">
<div className="max-w-[1600px] mx-auto px-6 h-20 flex justify-between items-center">

<a className="font-display font-bold text-2xl tracking-tighter text-white uppercase" href="#">
                Serious
            </a>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Work</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Services</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Agency</a>
<a className="group flex items-center gap-2 pl-5 pr-2 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-lime-accent/50 transition-colors" href="#">
<span className="text-xs font-medium text-white group-hover:text-lime transition-colors">Start Project</span>
<div className="w-8 h-8 rounded-full bg-lime flex items-center justify-center text-black">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</a>
</div>

<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>
<main>

<header className="pt-40 pb-20 px-6 max-w-[1600px] mx-auto">
<div className="flex flex-col gap-12">

<div className="flex flex-wrap gap-3">
<span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 backdrop-blur-sm tracking-wide uppercase">
                        Fintech
                    </span>
<span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 backdrop-blur-sm tracking-wide uppercase">
                        Education
                    </span>
</div>

<h1 className="font-display font-medium text-7xl md:text-[9rem] leading-[0.9] tracking-tighter text-white">
                    FINTOKEI
                </h1>

<div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-t border-white/10 pt-10">
<div className="md:col-span-6">
<p className="text-xl md:text-2xl text-zinc-400 font-light leading-snug tracking-tight">
                            Empowering traders with education and evaluation. A next-generation prop trading ecosystem built for global markets.
                        </p>
</div>
<div className="md:col-span-6 flex items-end justify-start md:justify-end">
<a className="inline-flex items-center gap-3 text-sm font-medium text-lime hover:text-white transition-colors uppercase tracking-widest" href="#">
                            Visit Live Site <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</header>

<section className="border-y border-white/10">
<div className="max-w-[1600px] mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
<div className="p-6 md:p-10">
<span className="block text-xs text-zinc-500 uppercase tracking-widest mb-3">Client</span>
<span className="block text-base font-medium text-white">Purple Trading</span>
</div>
<div className="p-6 md:p-10">
<span className="block text-xs text-zinc-500 uppercase tracking-widest mb-3">Service</span>
<span className="block text-base font-medium text-white">Product Design &amp; Dev</span>
</div>
<div className="p-6 md:p-10">
<span className="block text-xs text-zinc-500 uppercase tracking-widest mb-3">Year</span>
<span className="block text-base font-medium text-white">2023 — 2024</span>
</div>
<div className="p-6 md:p-10">
<span className="block text-xs text-zinc-500 uppercase tracking-widest mb-3">Outcome</span>
<span className="block text-base font-medium text-white">200% Growth</span>
</div>
</div>
</div>
</section>

<section className="w-full relative">
<div className="h-[60vh] md:h-[90vh] w-full bg-zinc-900 relative overflow-hidden group">
<img alt="Fintokei Dashboard" className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-80" src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
</div>
</section>

<section className="py-24 md:py-32 px-6 max-w-[1600px] mx-auto">
<div className="grid md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<h2 className="font-display text-4xl font-medium tracking-tighter text-white sticky top-32">
                        The Challenge
                    </h2>
</div>
<div className="md:col-span-8 space-y-10">
<p className="text-xl md:text-3xl font-light leading-snug text-zinc-200 tracking-tight">
                        The prop trading landscape is crowded with complex, intimidating interfaces. Fintokei needed to disrupt the market by bridging the gap between professional tools and educational accessibility.
                    </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
<div>
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-lime">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3">Speed &amp; Latency</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                                Ensure sub-second latency feedback for dashboard metrics to keep traders informed in real-time.
                            </p>
</div>
<div>
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-lime">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3">User Experience</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                                Create a digital ecosystem that feels transparent and encouraging without overwhelming the user.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 pb-24 md:pb-32 max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10 group">
<img alt="Dashboard Detail" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-block px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                            Dashboard Interface
                        </div>
</div>
</div>
<div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10 group">
<img alt="Mobile View" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-block px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                            Mobile Responsive
                        </div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 max-w-[1600px] mx-auto border-t border-white/10">
<div className="grid md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<h2 className="font-display text-4xl font-medium tracking-tighter text-white sticky top-32">
                        The Solution
                    </h2>
</div>
<div className="md:col-span-8 space-y-12">
<p className="text-xl md:text-3xl font-light leading-snug text-zinc-200 tracking-tight">
                        We developed a design system based on "Professional Playfulness". A dark mode base reduces eye strain, punctuated by vibrant gradients and neon accents to highlight key actions.
                    </p>
<div className="space-y-8">
<div className="group border border-white/10 bg-white/[0.02] p-8 hover:border-lime hover:bg-white/[0.04] transition-all duration-300">
<h4 className="font-display text-2xl font-medium text-white mb-2">Gamification</h4>
<p className="text-zinc-400">Progress bars, achievement badges, and clear milestones to keep users motivated.</p>
</div>
<div className="group border border-white/10 bg-white/[0.02] p-8 hover:border-lime hover:bg-white/[0.04] transition-all duration-300">
<h4 className="font-display text-2xl font-medium text-white mb-2">Real-time Data</h4>
<p className="text-zinc-400">Direct API connections to visualize equity curves and market status instantly.</p>
</div>
</div>

<div className="pt-12">
<h5 className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-6">Technologies</h5>
<div className="flex flex-wrap gap-4">
<span className="px-4 py-2 border border-white/10 rounded text-sm text-zinc-300">React</span>
<span className="px-4 py-2 border border-white/10 rounded text-sm text-zinc-300">Next.js</span>
<span className="px-4 py-2 border border-white/10 rounded text-sm text-zinc-300">Tailwind CSS</span>
<span className="px-4 py-2 border border-white/10 rounded text-sm text-zinc-300">Node.js</span>
<span className="px-4 py-2 border border-white/10 rounded text-sm text-zinc-300">AWS</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/10 bg-zinc-900/20">
<div className="max-w-[1600px] mx-auto flex flex-col items-center text-center">
<h2 className="font-display text-6xl md:text-8xl font-semibold text-white tracking-tighter mb-8 leading-[0.9]">
                    Have an idea?
                </h2>
<p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-12 font-light">
                    We help ambitious brands define their digital future. Let's discuss your next project.
                </p>
<a className="group relative inline-flex items-center gap-4 px-8 py-4 bg-lime rounded-full text-black font-semibold tracking-tight overflow-hidden transition-transform hover:scale-105" href="#">
<span className="relative z-10">Start a Project</span>
<i className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-[#050505] pt-20 pb-10 px-6">
<div className="max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
<div className="md:col-span-5">
<a className="font-display font-bold text-3xl tracking-tighter text-white block mb-8 uppercase" href="#">Serious</a>
<p className="text-zinc-500 text-sm max-w-md leading-relaxed">
                        A digital product agency focusing on strategy, design, and development for the modern web. 
                        <br/>Prague based, globally connected.
                    </p>
</div>
<div className="md:col-span-2 md:col-start-7">
<h4 className="text-white font-medium mb-6">Explore</h4>
<ul className="space-y-4 text-sm text-zinc-400">
<li><a className="hover:text-lime transition-colors" href="#">Work</a></li>
<li><a className="hover:text-lime transition-colors" href="#">Services</a></li>
<li><a className="hover:text-lime transition-colors" href="#">Agency</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-white font-medium mb-6">Socials</h4>
<ul className="space-y-4 text-sm text-zinc-400">
<li><a className="hover:text-lime transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-lime transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-lime transition-colors" href="#">Twitter</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-white font-medium mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-zinc-400">
<li><a className="hover:text-lime transition-colors" href="#">hello@serious.cz</a></li>
<li><a className="hover:text-lime transition-colors" href="#">+420 123 456 789</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-end border-t border-white/5 pt-8">
<p className="text-zinc-600 text-xs">© 2024 Serious Media s.r.o.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-zinc-600 text-xs hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-zinc-600 text-xs hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
