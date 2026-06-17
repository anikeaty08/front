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
      
<div className="min-h-screen w-full flex flex-col md:flex-row">

<aside className="w-full md:w-80 lg:w-96 md:h-screen md:fixed md:top-0 md:left-0 p-6 md:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-neutral-200 bg-[#FAFAFA] z-20">

<div className="space-y-6">

<div className="h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden bg-neutral-200">

<img alt="Profile" className="h-full w-full object-cover grayscale contrast-125" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h1 className="text-lg font-semibold tracking-tight text-neutral-900">[Your Name]</h1>
<p className="text-sm text-neutral-500 mt-1 leading-relaxed">
                        Product Designer &amp; Developer based in San Francisco. Creating digital experiences with focus on simplicity.
                    </p>
</div>

<nav className="flex flex-col gap-2 pt-4">
<a className="text-sm font-medium text-neutral-900 hover:text-neutral-500 transition-colors flex items-center gap-2 group" href="#work">
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4" icon="lucide:arrow-right" width="14"></iconify-icon>
                        Work
                    </a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-2 group" href="#about">
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4" icon="lucide:arrow-right" width="14"></iconify-icon>
                        About
                    </a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-2 group" href="#contact">
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4" icon="lucide:arrow-right" width="14"></iconify-icon>
                        Contact
                    </a>
</nav>
</div>

<div className="space-y-6 mt-12 md:mt-0">
<div className="flex items-center gap-4">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="18"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
</a>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
<div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    Available for new projects
                </div>
<p className="text-[10px] text-neutral-300 uppercase tracking-widest">
                    © 2024 Folio
                </p>
</div>
</aside>

<main className="flex-1 md:ml-80 lg:ml-96 p-6 md:p-10 bg-white min-h-screen">
<div className="max-w-4xl mx-auto space-y-20">

<section className="space-y-8" id="work">
<header className="flex justify-between items-end pb-4 border-b border-neutral-100">
<h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wider">Selected Projects</h2>
<span className="text-xs text-neutral-300">2023 — 2024</span>
</header>
<div className="grid grid-cols-1 gap-12">

<article className="group cursor-pointer">
<div className="w-full aspect-[16/10] bg-neutral-100 rounded-lg overflow-hidden mb-4 image-card relative">

<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-medium tracking-wide uppercase">App Design</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-neutral-900 group-hover:underline decoration-1 underline-offset-4">Fintech Dashboard</h3>
<p className="text-sm text-neutral-500 mt-1">UX Research, UI Design</p>
</div>
<iconify-icon className="text-neutral-300 group-hover:text-neutral-900 transition-colors" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
</article>

<article className="group cursor-pointer">
<div className="w-full aspect-[16/10] bg-neutral-100 rounded-lg overflow-hidden mb-4 image-card relative">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-medium tracking-wide uppercase">Web Development</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-neutral-900 group-hover:underline decoration-1 underline-offset-4">Mono Supply</h3>
<p className="text-sm text-neutral-500 mt-1">Frontend, E-commerce</p>
</div>
<iconify-icon className="text-neutral-300 group-hover:text-neutral-900 transition-colors" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
</article>

<article className="group cursor-pointer">
<div className="w-full aspect-[16/10] bg-neutral-100 rounded-lg overflow-hidden mb-4 image-card relative">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1481487484168-9b930d55208d?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-medium tracking-wide uppercase">Branding</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-neutral-900 group-hover:underline decoration-1 underline-offset-4">Architecture Co.</h3>
<p className="text-sm text-neutral-500 mt-1">Identity, Strategy</p>
</div>
<iconify-icon className="text-neutral-300 group-hover:text-neutral-900 transition-colors" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
</article>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 border-t border-neutral-100" id="about">
<div>
<h4 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-6">Services</h4>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-300" icon="lucide:check" width="14"></iconify-icon>
                                User Interface Design
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-300" icon="lucide:check" width="14"></iconify-icon>
                                Frontend Development
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-300" icon="lucide:check" width="14"></iconify-icon>
                                Design Systems
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-300" icon="lucide:check" width="14"></iconify-icon>
                                Prototyping
                            </li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-6">Experience</h4>
<div className="space-y-6">
<div>
<h5 className="text-sm font-medium text-neutral-900">Senior Designer</h5>
<p className="text-xs text-neutral-500 mt-1">Agency Name • 2021 – Present</p>
</div>
<div>
<h5 className="text-sm font-medium text-neutral-900">Product Designer</h5>
<p className="text-xs text-neutral-500 mt-1">Tech Startup • 2019 – 2021</p>
</div>
<div>
<h5 className="text-sm font-medium text-neutral-900">Freelance</h5>
<p className="text-xs text-neutral-500 mt-1">Self-employed • 2017 – 2019</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-neutral-100" id="contact">
<div className="bg-neutral-50 rounded-2xl p-8 md:p-12 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">Have a project in mind?</h2>
<p className="text-neutral-500 text-sm mb-8 max-w-md mx-auto">
                            I'm currently available for freelance work. If you have a project that needs some creative injection, get in touch.
                        </p>
<a className="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors" href="mailto:hello@example.com">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon>
                            hello@email.com
                        </a>
</div>
</section>
</div>
</main>
</div>

    </>
  );
}
