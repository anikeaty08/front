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


      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }

        // Reveal: apply ready state to the correct group container
        const rootGroup = document.getElementById('main');
        if (rootGroup) rootGroup.classList.add('is-ready');

        // Mobile menu toggle
        const btn = document.getElementById('menuBtn');
        const menu = document.getElementById('mobileMenu');
        let open = false;
        btn?.addEventListener('click', () => {
          open = !open;
          menu.classList.toggle('hidden', !open);
          btn.setAttribute('aria-expanded', String(open));
          btn.innerHTML = open ? '<i data-lucide="x" class="w-5 h-5"></i>' : '<i data-lucide="menu" class="w-5 h-5"></i>';
          if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        });

        // Copyright year
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
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
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qTiAlX0sxkuBOAiL7qHL"></div></div>
<a className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow-lg focus:outline focus:outline-2 focus:outline-orange-200 font-geist" href="#main" style={{transition: 'outline 0.1s ease-in-out'}}>Skip to content</a>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b bg-white/80 border-orange-200/70">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between h-16">

<a className="inline-flex items-center gap-2 group/logo" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md text-sm tracking-tighter font-medium font-geist bg-orange-900 text-white" style={{transition: 'outline 0.1s ease-in-out'}}>CO</span>
<span className="text-base font-medium tracking-tight font-geist text-orange-900" style={{transition: 'outline 0.1s ease-in-out'}}>Company</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm transition-colors font-geist text-orange-700 hover:text-orange-900" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Home</a>
<a className="text-sm transition-colors font-geist text-orange-700 hover:text-orange-900" href="#about" style={{transition: 'outline 0.1s ease-in-out'}}>About</a>
<a className="text-sm transition-colors font-geist text-orange-700 hover:text-orange-900" href="#services" style={{transition: 'outline 0.1s ease-in-out'}}>Services</a>
<a className="text-sm transition-colors font-geist text-orange-700 hover:text-orange-900" href="#blog" style={{transition: 'outline 0.1s ease-in-out'}}>Blog</a>
<a className="text-sm transition-colors font-geist text-orange-700 hover:text-orange-900" href="#contact" style={{transition: 'outline 0.1s ease-in-out'}}>Contact</a>
</nav>

<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border transition-colors font-geist border-orange-200 hover:border-orange-300 text-orange-900 hover:bg-orange-50" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
              Sign in
            </a>
<a className="inline-flex items-center gap-2 text-sm px-3.5 py-2 rounded-md transition-colors font-geist bg-orange-900 text-white hover:bg-orange-800" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              Get started
            </a>
</div>

<button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border active:scale-[0.98] transition border-orange-200 hover:bg-orange-50 hover:border-orange-300" id="menuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="md:hidden hidden border-t border-orange-200" id="mobileMenu">
<nav className="py-3">
<a className="block px-1.5 py-2 text-sm font-geist text-orange-800 hover:text-orange-900" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Home</a>
<a className="block px-1.5 py-2 text-sm font-geist text-orange-800 hover:text-orange-900" href="#about" style={{transition: 'outline 0.1s ease-in-out'}}>About</a>
<a className="block px-1.5 py-2 text-sm font-geist text-orange-800 hover:text-orange-900" href="#services" style={{transition: 'outline 0.1s ease-in-out'}}>Services</a>
<a className="block px-1.5 py-2 text-sm font-geist text-orange-800 hover:text-orange-900" href="#blog" style={{transition: 'outline 0.1s ease-in-out'}}>Blog</a>
<a className="block px-1.5 py-2 text-sm font-geist text-orange-800 hover:text-orange-900" href="#contact" style={{transition: 'outline 0.1s ease-in-out'}}>Contact</a>
<div className="mt-2 flex gap-2 px-1.5">
<a className="flex-1 inline-flex items-center justify-center gap-2 text-sm px-3 py-2 rounded-md border transition-colors font-geist border-orange-200 hover:border-orange-300 text-orange-900 hover:bg-orange-50" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
                Sign in
              </a>
<a className="flex-1 inline-flex items-center justify-center gap-2 text-sm px-3 py-2 rounded-md transition-colors font-geist bg-orange-900 text-white hover:bg-orange-800" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                Get started
              </a>
</div>
</nav>
</div>
</div>
</header>
<main className="group is-ready" id="main">

<section className="relative" id="about">
<div className="absolute inset-0 -z-10 pointer-events-none">
<div className="h-full w-full bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(15,23,42,0.06),transparent_60%)]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="opacity-0 translate-y-4 transition-all duration-700 ease-out delay-100 group-[.is-ready]:opacity-100 group-[.is-ready]:translate-y-0">
<span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs shadow-sm font-geist border-orange-200 text-orange-700 bg-white" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                Trusted by teams worldwide
              </span>
<h1 className="mt-5 text-4xl sm:text-5xl tracking-tight font-playfair font-medium text-orange-900" style={{transition: 'outline 0.1s ease-in-out'}}>
                Build, launch, and grow with a partner that moves as fast as you do
              </h1>
<p className="mt-4 text-base leading-7 font-geist text-orange-700" style={{transition: 'outline 0.1s ease-in-out'}}>
                We help modern businesses ship better experiences—strategy, design, and engineering under one roof.
                From MVPs to enterprise platforms, our team delivers measurable outcomes on time.
              </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 text-sm px-4 py-2.5 rounded-md transition-colors font-geist bg-orange-900 text-white hover:bg-orange-800" href="#contact" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Talk to us
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 text-sm px-4 py-2.5 rounded-md border transition-colors font-geist border-orange-200 hover:border-orange-300 text-orange-900 hover:bg-orange-50" href="#services" style={{transition: 'outline 0.1s ease-in-out'}}>
                  What we do
                </a>
</div>
<div className="mt-10 grid grid-cols-3 gap-6">
<div className="rounded-lg border p-4 opacity-0 translate-y-4 transition-all duration-700 ease-out delay-200 group-[.is-ready]:opacity-100 group-[.is-ready]:translate-y-0 border-orange-200 bg-white">
<div className="text-2xl tracking-tight font-playfair font-medium text-orange-900" style={{transition: 'outline 0.1s ease-in-out'}}>250+</div>
<div className="mt-1 text-xs font-geist text-orange-600" style={{transition: 'outline 0.1s ease-in-out'}}>Projects delivered</div>
</div>
<div className="rounded-lg border p-4 opacity-0 translate-y-4 transition-all duration-700 ease-out delay-300 group-[.is-ready]:opacity-100 group-[.is-ready]:translate-y-0 border-orange-200 bg-white">
<div className="text-2xl tracking-tight font-playfair font-medium text-orange-900" style={{transition: 'outline 0.1s ease-in-out'}}>98%</div>
<div className="mt-1 text-xs font-geist text-orange-600" style={{transition: 'outline 0.1s ease-in-out'}}>Client satisfaction</div>
</div>
<div className="rounded-lg border p-4 opacity-0 translate-y-4 transition-all duration-700 ease-out delay-500 group-[.is-ready]:opacity-100 group-[.is-ready]:translate-y-0 border-orange-200 bg-white">
<div className="text-2xl tracking-tight font-playfair font-medium text-orange-900" style={{transition: 'outline 0.1s ease-in-out'}}>24/7</div>
<div className="mt-1 text-xs font-geist text-orange-600" style={{transition: 'outline 0.1s ease-in-out'}}>Ongoing support</div>
</div>
</div>
</div>
<div className="lg:pl-10">
<div className="relative opacity-0 translate-y-4 transition-all duration-700 ease-out delay-400 group-[.is-ready]:opacity-100 group-[.is-ready]:translate-y-0">
<div className="absolute -inset-2 -z-10 blur-2xl bg-[radial-gradient(200px_120px_at_20%_20%,rgba(2,6,23,0.06),transparent),radial-gradient(200px_120px_at_80%_60%,rgba(2,6,23,0.06),transparent)]"></div>
<div className="rounded-xl border shadow-sm overflow-hidden border-orange-200 bg-white">
<img alt="Team collaborating in a modern office" className="w-full h-72 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-5">
<div className="flex items-center gap-2 text-xs font-geist text-orange-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                      ISO-aligned delivery • Secure by design
                    </div>
<p className="mt-3 text-sm font-geist text-orange-700" style={{transition: 'outline 0.1s ease-in-out'}}>
                      Our cross-functional teams embed with your stakeholders to accelerate roadmaps, reduce risk, and create lasting value.
                    </p>
<div className="mt-4 flex items-center gap-3">
<img alt="Client avatar" className="h-9 w-9 rounded-full object-cover ring-1 ring-orange-200" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium font-geist text-orange-900" style={{transition: 'outline 0.1s ease-in-out'}}>Alex Carter</div>
<div className="text-xs font-geist text-orange-600" style={{transition: 'outline 0.1s ease-in-out'}}>Head of Delivery</div>
</div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="flex items-center gap-2 rounded-lg border px-3 py-2 border-orange-200 bg-white">
<svg className="lucide lucide-cpu w-4 h-4" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="text-xs font-geist text-orange-700" style={{transition: 'outline 0.1s ease-in-out'}}>Product Engineering</span>
</div>
<div className="flex items-center gap-2 rounded-lg border px-3 py-2 border-orange-200 bg-white">
<svg className="lucide lucide-line-chart w-4 h-4" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<span className="text-xs font-geist text-orange-700" style={{transition: 'outline 0.1s ease-in-out'}}>Growth &amp; Analytics</span>
</div>
<div className="flex items-center gap-2 rounded-lg border px-3 py-2 border-orange-200 bg-white">
<svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span className="text-xs font-geist text-orange-700" style={{transition: 'outline 0.1s ease-in-out'}}>UX &amp; Research</span>
</div>
<div className="flex items-center gap-2 rounded-lg border px-3 py-2 border-orange-200 bg-white">
<svg className="lucide lucide-lock w-4 h-4" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="text-xs font-geist text-orange-700" style={{transition: 'outline 0.1s ease-in-out'}}>Security &amp; Compliance</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6">
<div className="h-px bg-orange-200/80"></div>
</div>

<section className="max-w-7xl mx-auto px-6 py-14" id="services">
<div className="grid md:grid-cols-3 gap-6">
<div className="opacity-0 translate-y-4 transition-all duration-700 ease-out delay-100 group-[.is-ready]:opacity-100 group-[.is-ready]:translate-y-0">
<div className="rounded-lg border p-6 hover:shadow-sm transition-shadow border-orange-200 bg-white">
<div className="flex items-center gap-2 text-sm font-medium font-geist text-orange-900" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-box w-5 h-5" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
                Product
              </div>
<p className="mt-2 text-sm font-geist text-orange-700" style={{transition: 'outline 0.1s ease-in-out'}}>Define, validate, and deliver the right features with a lean, outcome-driven approach.</p>
</div>
</div>
<div className="opacity-0 translate-y-4 transition-all duration-700 ease-out delay-200 group-[.is-ready]:opacity-100 group-[.is-ready]:translate-y-0">
<div className="rounded-lg border p-6 hover:shadow-sm transition-shadow border-orange-200 bg-white">
<div className="flex items-center gap-2 text-sm font-medium font-geist text-orange-900" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-server w-5 h-5" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
                Platforms
              </div>
<p className="mt-2 text-sm font-geist text-orange-700" style={{transition: 'outline 0.1s ease-in-out'}}>Cloud-native systems, APIs, and integrations that scale with your business.</p>
</div>
</div>
<div className="opacity-0 translate-y-4 transition-all duration-700 ease-out delay-300 group-[.is-ready]:opacity-100 group-[.is-ready]:translate-y-0">
<div className="rounded-lg border p-6 hover:shadow-sm transition-shadow border-orange-200 bg-white">
<div className="flex items-center gap-2 text-sm font-medium font-geist text-orange-900" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-compass w-5 h-5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                Advisory
              </div>
<p className="mt-2 text-sm font-geist text-orange-700" style={{transition: 'outline 0.1s ease-in-out'}}>Fractional leadership and guidance to de-risk decisions and accelerate delivery.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-b bg-orange-50 border-orange-200/80" id="blog">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-playfair font-medium text-orange-900" style={{transition: 'outline 0.1s ease-in-out'}}>From the blog</h2>
<p className="mt-2 text-sm font-geist text-orange-700" style={{transition: 'outline 0.1s ease-in-out'}}>Insights on product, engineering, and growth—fresh each week.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border transition font-geist text-orange-900 border-orange-200 hover:bg-white hover:border-orange-300" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
              View all
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group rounded-xl overflow-hidden border hover:shadow-sm transition-shadow opacity-0 translate-y-4 transition-all duration-700 ease-out delay-100 group-[.is-ready]:opacity-100 group-[.is-ready]:translate-y-0 border-orange-200 bg-white">
<a className="block" href="#">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Developers collaborating" className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-orange-600">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded border font-geist border-orange-200" style={{transition: 'outline 0.1s ease-in-out'}}>Engineering</span>
<span className="inline-flex items-center gap-1 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                      6 min read
                    </span>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight group-hover:underline font-geist text-orange-900" style={{transition: 'outline 0.1s ease-in-out'}}>Shipping faster with platform primitives</h3>
<p className="mt-2 text-sm font-geist text-orange-700" style={{transition: 'outline 0.1s ease-in-out'}}>How a lean toolkit and clear abstractions reduce complexity and unlock velocity.</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Author avatar" className="h-8 w-8 rounded-full object-cover ring-1 ring-orange-200" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-xs">
<div className="font-geist text-orange-900" style={{transition: 'outline 0.1s ease-in-out'}}>Sam Nguyen</div>
<div className="font-geist text-orange-600" style={{transition: 'outline 0.1s ease-in-out'}}>Mar 18, 2025</div>
</div>
</div>
</div>
</a>
</article>

<article className="group rounded-xl overflow-hidden border hover:shadow-sm transition-shadow opacity-0 translate-y-4 transition-all duration-700 ease-out delay-200 group-[.is-ready]:opacity-100 group-[.is-ready]:translate-y-0 border-orange-200 bg-white">
<a className="block" href="#">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Analytics dashboard" className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform" src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-orange-600">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded border font-geist border-orange-200" style={{transition: 'outline 0.1s ease-in-out'}}>Growth</span>
<span className="inline-flex items-center gap-1 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                      8 min read
                    </span>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight group-hover:underline font-geist text-orange-900" style={{transition: 'outline 0.1s ease-in-out'}}>Turning metrics into momentum</h3>
<p className="mt-2 text-sm font-geist text-orange-700" style={{transition: 'outline 0.1s ease-in-out'}}>A framework for aligning product decisions with business outcomes through analytics.</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Author avatar" className="h-8 w-8 rounded-full object-cover ring-1 ring-orange-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-xs">
<div className="font-geist text-orange-900" style={{transition: 'outline 0.1s ease-in-out'}}>Priya Desai</div>
<div className="font-geist text-orange-600" style={{transition: 'outline 0.1s ease-in-out'}}>Mar 6, 2025</div>
</div>
</div>
</div>
</a>
</article>

<article className="group rounded-xl overflow-hidden border hover:shadow-sm transition-shadow opacity-0 translate-y-4 transition-all duration-700 ease-out delay-300 group-[.is-ready]:opacity-100 group-[.is-ready]:translate-y-0 border-orange-200 bg-white">
<a className="block" href="#">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Team brainstorming with sticky notes" className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-orange-600">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded border font-geist border-orange-200" style={{transition: 'outline 0.1s ease-in-out'}}>Product</span>
<span className="inline-flex items-center gap-1 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                      5 min read
                    </span>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight group-hover:underline font-geist text-orange-900" style={{transition: 'outline 0.1s ease-in-out'}}>Rethinking roadmaps: goals over features</h3>
<p className="mt-2 text-sm font-geist text-orange-700" style={{transition: 'outline 0.1s ease-in-out'}}>Create resilient plans by tying everything back to user value and business goals.</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Author avatar" className="h-8 w-8 rounded-full object-cover ring-1 ring-orange-200" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-xs">
<div className="font-geist text-orange-900" style={{transition: 'outline 0.1s ease-in-out'}}>Jordan Lee</div>
<div className="font-geist text-orange-600" style={{transition: 'outline 0.1s ease-in-out'}}>Feb 22, 2025</div>
</div>
</div>
</div>
</a>
</article>
</div>
<div className="mt-6 sm:hidden">
<a className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border transition font-geist text-orange-900 border-orange-200 hover:bg-white hover:border-orange-300" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
              View all
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-16" id="contact">
<div className="rounded-2xl border p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-orange-200 bg-white">
<div className="max-w-2xl">
<h3 className="text-xl sm:text-2xl tracking-tight font-playfair font-medium text-orange-900" style={{transition: 'outline 0.1s ease-in-out'}}>Have a project in mind?</h3>
<p className="mt-2 text-sm font-geist text-orange-700" style={{transition: 'outline 0.1s ease-in-out'}}>Let’s turn your idea into something customers love. We’ll respond within one business day.</p>
</div>
<div className="flex gap-3">
<a className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-md border transition-colors font-geist border-orange-200 hover:border-orange-300 text-orange-900 hover:bg-orange-50" href="mailto:hello@example.com" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
              Email us
            </a>
<a className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-md transition-colors font-geist bg-orange-900 text-white hover:bg-orange-800" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Book a call
            </a>
</div>
</div>
</section>
</main>
<footer className="border-t border-orange-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<a className="inline-flex items-center gap-2 group/logo" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md text-sm tracking-tighter font-medium font-geist bg-orange-900 text-white" style={{transition: 'outline 0.1s ease-in-out'}}>CO</span>
<span className="text-base font-medium tracking-tight font-geist text-orange-900" style={{transition: 'outline 0.1s ease-in-out'}}>Company</span>
</a>
<div className="text-sm font-geist text-orange-600" style={{transition: 'outline 0.1s ease-in-out'}}>
            © <span className="font-geist" id="year" style={{transition: 'outline 0.1s ease-in-out'}}>2025</span> Company. All rights reserved.
          </div>
</div>
</div>
</footer>

<grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration>
    </>
  );
}
