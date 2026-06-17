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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="yWZ2Tbe094Fsjgy9NRnD"></div>

</div></div>

<div className="fixed inset-0 z-[-1] pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neutral-900/50 rounded-full blur-[120px] opacity-40"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neutral-800/30 rounded-full blur-[120px] opacity-30"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm font-medium tracking-tight text-white hover:text-neutral-400 transition-colors" href="#">
                ALEXANDER.
            </a>
<div className="flex gap-6 text-xs font-medium text-neutral-500">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#experience">Experience</a>
<a className="hover:text-white transition-colors" href="#gallery">Life</a>
</div>
</div>
</nav>
<main className="max-w-4xl mx-auto px-6 pt-32 pb-24 space-y-32">

<section className="animate-fade-in flex flex-col md:flex-row gap-12 items-start md:items-center justify-between">
<div className="space-y-8 flex-1">
<div className="space-y-4">
<h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight leading-[1.1]">
                        Crafting digital<br/> interfaces with<br/> precision.
                    </h1>
<p className="text-lg text-neutral-400 max-w-md font-light leading-relaxed">
                        Design Engineer focusing on intuitive user interaction and scalable design systems.
                    </p>
</div>
<div className="flex items-center gap-4 pt-2">
<a className="group flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-200 transition-all" href="#contact">
<span>Get in touch</span>
<i className="w-4 h-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</a>
<a className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-neutral-400 hover:text-white border border-transparent hover:border-neutral-800 transition-all" href="#work">
                        View work
                    </a>
</div>
</div>

<div className="relative group shrink-0">
<div className="absolute -inset-1 bg-gradient-to-tr from-neutral-800 to-neutral-900 rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-1000"></div>
<div className="relative w-40 h-40 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
<img alt="Profile" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="animate-fade-in delay-100">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="bg-neutral-900/20 border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-white/10 transition-colors">
<i className="w-5 h-5 text-neutral-500 mb-4" data-lucide="trophy"></i>
<div>
<div className="text-2xl font-medium text-white tracking-tight">3</div>
<div className="text-xs text-neutral-500">Awwwards</div>
</div>
</div>

<div className="bg-neutral-900/20 border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-white/10 transition-colors">
<i className="w-5 h-5 text-neutral-500 mb-4" data-lucide="users"></i>
<div>
<div className="text-2xl font-medium text-white tracking-tight">10k+</div>
<div className="text-xs text-neutral-500">Users Impacted</div>
</div>
</div>

<div className="bg-neutral-900/20 border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-white/10 transition-colors">
<i className="w-5 h-5 text-neutral-500 mb-4" data-lucide="code-2"></i>
<div>
<div className="text-2xl font-medium text-white tracking-tight">4y</div>
<div className="text-xs text-neutral-500">Experience</div>
</div>
</div>

<div className="bg-neutral-900/20 border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-white/10 transition-colors">
<i className="w-5 h-5 text-neutral-500 mb-4" data-lucide="star"></i>
<div>
<div className="text-2xl font-medium text-white tracking-tight">TOP</div>
<div className="text-xs text-neutral-500">Rated Freelancer</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-12 gap-12 animate-fade-in delay-200" id="experience">

<div className="md:col-span-8 space-y-8">
<h2 className="text-sm font-medium text-white tracking-tight border-b border-white/5 pb-4">Experience</h2>
<div className="relative space-y-8">

<div className="absolute left-[19px] top-2 bottom-2 w-px bg-neutral-800"></div>

<div className="relative pl-12 group">
<div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center z-10">
<i className="w-4 h-4 text-white" data-lucide="briefcase"></i>
</div>
<div className="space-y-2">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
<h3 className="text-base font-medium text-white">Senior Product Designer</h3>
<span className="text-xs text-neutral-500 font-mono">2022 — Present</span>
</div>
<div className="text-sm text-neutral-400">Vercel</div>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xl">
                                Leading the design system team. Building core infrastructure for developer experience tools. Improved component reusability by 40%.
                            </p>
</div>
</div>

<div className="relative pl-12 group">
<div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center z-10">
<i className="w-4 h-4 text-neutral-400" data-lucide="layers"></i>
</div>
<div className="space-y-2">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
<h3 className="text-base font-medium text-white">Frontend Developer</h3>
<span className="text-xs text-neutral-500 font-mono">2020 — 2022</span>
</div>
<div className="text-sm text-neutral-400">Stripe</div>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xl">
                                Contributed to the dashboard UI. Implemented new payment flow interfaces using React and internal design tokens.
                            </p>
</div>
</div>

<div className="relative pl-12 group">
<div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center z-10">
<i className="w-4 h-4 text-neutral-400" data-lucide="zap"></i>
</div>
<div className="space-y-2">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
<h3 className="text-base font-medium text-white">Junior Designer</h3>
<span className="text-xs text-neutral-500 font-mono">2019 — 2020</span>
</div>
<div className="text-sm text-neutral-400">Agency</div>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xl">
                                Worked on marketing websites and brand identities for early-stage startups.
                            </p>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 space-y-8">
<h2 className="text-sm font-medium text-white tracking-tight border-b border-white/5 pb-4">Education</h2>
<div className="space-y-6">
<div className="space-y-1">
<h3 className="text-sm font-medium text-white">MSc Interaction Design</h3>
<div className="text-xs text-neutral-400">Design Institute</div>
<div className="text-xs text-neutral-500 font-mono mt-1">2018 — 2019</div>
</div>
<div className="space-y-1">
<h3 className="text-sm font-medium text-white">BS Computer Science</h3>
<div className="text-xs text-neutral-400">University of Tech</div>
<div className="text-xs text-neutral-500 font-mono mt-1">2014 — 2018</div>
</div>
</div>

<div className="pt-8">
<h2 className="text-sm font-medium text-white tracking-tight border-b border-white/5 pb-4 mb-4">Stack</h2>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-neutral-300">Figma</span>
<span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-neutral-300">React</span>
<span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-neutral-300">Next.js</span>
<span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-neutral-300">Tailwind</span>
<span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-neutral-300">Node.js</span>
<span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-neutral-300">Postgres</span>
</div>
</div>
</div>
</section>

<section className="space-y-12 animate-fade-in delay-300" id="work">
<div className="flex items-baseline justify-between border-b border-white/5 pb-4">
<h2 className="text-sm font-medium text-white tracking-tight">Selected Projects</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<a className="group block bg-neutral-900/20 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all" href="#">
<div className="h-48 bg-neutral-900 relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-800/50 group-hover:scale-105 transition-transform duration-500"></div>
<img alt="Project" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 space-y-2">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-white">Chronicle</h3>
<i className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<p className="text-sm text-neutral-500">A minimalistic task management tool for creatives.</p>
</div>
</a>

<a className="group block bg-neutral-900/20 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all" href="#">
<div className="h-48 bg-neutral-900 relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-800/50 group-hover:scale-105 transition-transform duration-500"></div>
<img alt="Project" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 space-y-2">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-white">Vanguard</h3>
<i className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<p className="text-sm text-neutral-500">Enterprise design system documentation platform.</p>
</div>
</a>
</div>
</section>

<section className="space-y-8 animate-fade-in delay-400" id="gallery">
<div className="flex items-baseline justify-between border-b border-white/5 pb-4">
<h2 className="text-sm font-medium text-white tracking-tight">Captures &amp; Life</h2>
<span className="text-xs text-neutral-500">Visual Journal</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96 md:h-80">

<div className="col-span-2 row-span-2 md:col-span-2 md:row-span-2 rounded-xl overflow-hidden border border-white/5 relative group">
<img alt="Landscape" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md">Swiss Alps, 2023</div>
</div>

<div className="col-span-1 row-span-1 rounded-xl overflow-hidden border border-white/5 relative group">
<img alt="Workspace" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1517336714731-489689fd1ca4?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>

<div className="col-span-1 row-span-1 rounded-xl overflow-hidden border border-white/5 relative group">
<img alt="Abstract" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>

<div className="col-span-2 row-span-1 rounded-xl overflow-hidden border border-white/5 relative group">
<img alt="Mountain" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="col-span-1 h-32 rounded-xl overflow-hidden border border-white/5 group relative">
<img alt="Portrait" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 h-32 rounded-xl overflow-hidden border border-white/5 group relative">
<img alt="Nature" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 h-32 rounded-xl overflow-hidden border border-white/5 group relative">
<img alt="Code" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1552083855-45116669b367?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 h-32 rounded-xl overflow-hidden border border-white/5 flex items-center justify-center bg-neutral-900 group cursor-pointer hover:bg-neutral-800 transition-colors">
<span className="text-xs text-neutral-500 group-hover:text-white">View Archive →</span>
</div>
</div>
</section>

<section className="space-y-6 animate-fade-in delay-300">
<h2 className="text-sm font-medium text-white tracking-tight border-b border-white/5 pb-4">Latest Thought</h2>
<div className="flex flex-col bg-neutral-900/20 border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all hover:bg-neutral-900/30">
<div className="flex items-center gap-3 mb-3">
<div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] text-white font-medium border border-white/5">A</div>
<span className="text-xs text-neutral-500">2 days ago</span>
</div>
<p className="text-sm text-neutral-300 leading-relaxed">
                    Simplicity in design isn't just about minimalism. It's about the friction you remove for the user. We often over-engineer solutions when the problem simply requires better visual hierarchy.
                </p>
</div>
</section>

<footer className="border-t border-white/5 pt-12" id="contact">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="space-y-2">
<h2 className="text-2xl font-medium text-white tracking-tight">Let's build together</h2>
<p className="text-sm text-neutral-500">Open for new opportunities.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors" href="mailto:hello@alexander.design">
<i className="w-4 h-4" data-lucide="mail"></i>
<span>hello@alexander.design</span>
</a>
<div className="flex items-center gap-2">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all" href="#">
<i className="w-4 h-4" data-lucide="github"></i>
</a>
</div>
</div>
</div>
<div className="flex justify-between items-end mt-24">
<p className="text-[10px] text-neutral-600">© 2024 Alexander Portfolio.</p>
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
</div>
</footer>
</main>


    </>
  );
}
