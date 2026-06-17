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
      

<div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10 h-[800px]"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-4xl">
<div className="bg-white/70 backdrop-blur-xl border border-zinc-200/80 rounded-full h-14 px-6 flex items-center justify-between shadow-sm">
<a className="text-base font-medium tracking-tight text-zinc-900 flex items-center gap-2" href="#">
<div className="w-7 h-7 bg-zinc-900 rounded-full flex items-center justify-center">
<span className="text-white text-xs font-medium tracking-tight">AI</span>
</div>
                Aktarul
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors" href="#experience">Experience</a>
</div>
<a className="hidden md:inline-flex items-center justify-center h-8 px-4 rounded-full bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition-colors" href="#contact">
                Let's Talk
            </a>
</div>
</nav>
<main className="max-w-5xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">

<section className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
<div className="flex-1 space-y-8 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 shadow-sm text-zinc-600 text-xs font-medium tracking-wide uppercase">
<span className="relative flex w-2 h-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-500"></span>
</span>
                    Available for projects
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] text-zinc-900">
                    GoHighLevel <br className="hidden md:block"/>
<span className="text-zinc-400">Web Designer.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 font-light leading-relaxed max-w-lg">
                    Hi, I'm <span className="text-zinc-900 font-normal">Aktarul Islam</span>. I specialize in crafting beautiful Web Designs, high-converting Funnels, and responsive Front-End Development inside GHL.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm gap-2 group" href="#contact">
                        Work with me
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-full bg-white text-zinc-900 border border-zinc-200 text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm" href="#services">
                        View my services
                    </a>
</div>
<div className="pt-8 flex items-center gap-6 text-zinc-400">
<span className="text-xs font-medium uppercase tracking-widest">Trusted on</span>
<span className="text-base font-medium tracking-tight text-zinc-300">Upwork</span>
<span className="text-base font-medium tracking-tight text-zinc-300">Fiverr</span>
</div>
</div>
<div className="w-full max-w-sm md:w-[380px] flex-shrink-0 relative">

<div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-white rounded-3xl -rotate-3 scale-105 border border-white shadow-sm -z-10 transition-transform duration-500 hover:rotate-0"></div>
<div className="p-2 bg-white rounded-3xl border border-zinc-100 shadow-xl shadow-zinc-200/20">
<img alt="Aktarul Islam" className="w-full h-auto aspect-[4/5] object-cover rounded-2xl bg-zinc-100" src="./user-image.jpg"/>
</div>
</div>
</section>

<section className="pt-40" id="services">
<div className="space-y-4 mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-zinc-900">Design Expertise</h2>
<p className="text-lg text-zinc-500 max-w-xl font-light">
                    Crafting beautiful, high-converting digital experiences tailored specifically for the GoHighLevel platform.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-zinc-600" height="24" icon="solar:laptop-minimalistic-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">Website Design</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                        Designing intuitive and visually stunning website layouts that capture your brand's essence and engage visitors instantly.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-zinc-600" height="24" icon="solar:filter-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">Sales Funnels</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                        Creating high-converting sales funnels and modern landing pages inside GHL with a focus on seamless user experience.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-zinc-600" height="24" icon="solar:code-file-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">Front-End Dev</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                        Translating beautiful designs into responsive, pixel-perfect code to ensure your GHL sites look exceptional everywhere.
                    </p>
</div>
</div>
</section>

<section className="pt-40 flex flex-col md:flex-row gap-16 md:gap-24" id="experience">
<div className="md:w-1/3">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-zinc-900 sticky top-32">My Journey</h2>
</div>
<div className="md:w-2/3">
<div className="relative pl-6 before:absolute before:inset-y-2 before:left-[5px] before:w-[1px] before:bg-gradient-to-b before:from-zinc-200 before:via-zinc-200 before:to-transparent">

<div className="relative mb-16">
<div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-zinc-300 shadow-sm"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
<h3 className="text-xl font-medium tracking-tight text-zinc-900">Freelance Designer</h3>
<span className="text-xs text-zinc-400 font-medium tracking-widest uppercase">2023 - Present</span>
</div>
<h4 className="text-sm text-zinc-400 font-normal mb-4">Upwork &amp; Fiverr</h4>
<p className="text-base text-zinc-500 font-light leading-relaxed max-w-xl">
                            Helping global clients achieve their marketing goals by building custom GHL web designs, migrating platforms, and engineering high-converting funnels that elevate their brand.
                        </p>
</div>

<div className="relative">
<div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-zinc-200"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
<h3 className="text-xl font-medium tracking-tight text-zinc-900">Web Design Focus</h3>
<span className="text-xs text-zinc-400 font-medium tracking-widest uppercase">2023</span>
</div>
<h4 className="text-sm text-zinc-400 font-normal mb-4">UI/UX Expertise</h4>
<p className="text-base text-zinc-500 font-light leading-relaxed max-w-xl">
                            Dedicated focus on modern web design principles, UI/UX best practices, and responsive development to ensure every project not only works flawlessly but looks visually stunning.
                        </p>
</div>
</div>
</div>
</section>

<section className="pt-40 pb-16" id="contact">
<div className="bg-zinc-950 rounded-[2rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-zinc-800/50 rounded-[100%] blur-3xl -z-10 -translate-y-1/2"></div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6 relative z-10">
                    Ready to elevate your brand?
                </h2>
<p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto mb-10 relative z-10">
                    Let's discuss how professional GoHighLevel web design and high-converting funnels can transform your digital presence.
                </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-100 hover:scale-105 transition-all duration-300 gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="mailto:hello@example.com">
<iconify-icon height="18" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                        Send me an email
                    </a>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-200/60 bg-white">
<div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-zinc-900 rounded-full flex items-center justify-center">
<span className="text-white text-[10px] font-medium tracking-tight">AI</span>
</div>
<p className="text-sm text-zinc-500 font-light">
                    © 2024 Aktarul Islam.
                </p>
</div>
<div className="flex items-center gap-6">
<a className="text-sm font-normal text-zinc-400 hover:text-zinc-900 transition-colors" href="#">Twitter</a>
<a className="text-sm font-normal text-zinc-400 hover:text-zinc-900 transition-colors" href="#">LinkedIn</a>
<a className="text-sm font-normal text-zinc-400 hover:text-zinc-900 transition-colors" href="#">GitHub</a>
</div>
</div>
</footer>

    </>
  );
}
