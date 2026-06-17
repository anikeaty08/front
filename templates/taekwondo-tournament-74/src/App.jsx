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



      // Intersection Observer for scroll animations
      const observerOptions = {
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.style.opacity = "1";
                  entry.target.classList.add('animate-reveal');
              }
          });
      }, observerOptions);

      document.querySelectorAll('.animate-reveal').forEach(el => observer.observe(el));
    
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
      

<element-site-header-component className="sticky top-0 z-50 block border-b border-zinc-100 bg-white/90 backdrop-blur-md" hero_background_color="transparent" hero_theme="light" theme="light">
<cu-site-common-header-feature className="cu-header cu-header__light">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-4">
<a className="logo flex items-center gap-3" href="https://cu.ru/">
<tui-icon className="logo__icon" style={{'--t-icon': 'url(https://static.centraluniversity.ru/app/site/assets/icons/cu/cuIconLogoShort.svg)', width: '32px', height: '32px'}}></tui-icon>
<h1 className="logo__h text-lg font-bold uppercase tracking-tighter">
                Центральный университет
              </h1>
</a>
</div>
<div className="flex items-center gap-2">
<a className="vi-link flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-zinc-100" href="https://apply.cu.ru/visuallyimpaired-ba">
<tui-icon style={{'--t-icon': 'url(https://static.centraluniversity.ru/app/site/assets/icons/kit/cuSiteIconEye.svg)', width: '24px', height: '24px'}}></tui-icon>
</a>
<a className="hub-button flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-zinc-100" href="https://id.centraluniversity.ru/">
<tui-icon style={{'--t-icon': 'url(https://static.centraluniversity.ru/app/site/assets/icons/kit/cuSiteIconUser.svg)', width: '24px', height: '24px'}}></tui-icon>
</a>
<button className="fullscreen-menu-button flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-zinc-100">
<svg className="burger-icon" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16H3" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<path d="M21 8H3" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</cu-site-common-header-feature>
</element-site-header-component>

<section className="relative overflow-hidden px-6 py-24 lg:py-40" id="about">
<div className="mx-auto max-w-7xl">
<div className="animate-reveal flex flex-col items-center text-center">
<span className="mb-4 inline-flex items-center space-x-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium tracking-wide">
<span className="flex h-2 w-2 rounded-full bg-red-500"></span>
<span>OCTOBER 12-14, 2024</span>
</span>
<h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-zinc-900 md:text-7xl">
            Precision, Power, and the Spirit of
            <span className="text-zinc-400">Taekwondo</span>
</h1>
<p className="mt-8 max-w-2xl text-lg text-zinc-500 md:text-xl">
            Join the premier international tournament where technique meets
            tenacity. Bringing together the world's finest practitioners for a
            display of mastery.
          </p>
<div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
<button className="flex items-center justify-center space-x-2 rounded-lg bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-800">
<span>View Brackets</span>
<iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="rounded-lg border border-zinc-200 bg-white px-8 py-3 text-sm font-medium text-zinc-600 transition-all hover:bg-zinc-50">
              Live Stream
            </button>
</div>
</div>
</div>

<div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>
</section>

<section className="bg-white px-6 py-24" id="schedule">
<div className="mx-auto max-w-7xl">
<div className="animate-reveal flex flex-col justify-between space-y-4 md:flex-row md:items-end md:space-y-0">
<div>
<h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Competition Schedule
            </h2>
<p className="mt-2 text-zinc-500">
              Three days of intense high-level competition.
            </p>
</div>
<div className="flex space-x-2">
<button className="rounded-md bg-zinc-100 px-4 py-1.5 text-xs font-medium text-zinc-900">
              All Days
            </button>
<button className="rounded-md border border-zinc-100 px-4 py-1.5 text-xs font-medium text-zinc-500 hover:bg-zinc-50">
              Finals
            </button>
</div>
</div>
<div className="animate-reveal delay-1 mt-12 grid gap-4">

<div className="group flex flex-col space-y-4 rounded-2xl border border-zinc-100 p-6 transition-all hover:border-zinc-200 hover:shadow-sm md:flex-row md:items-center md:space-y-0">
<div className="md:w-48">
<span className="text-sm font-medium text-zinc-400">
                08:00 AM — 12:00 PM
              </span>
<h4 className="text-lg font-medium">Day 1: Preliminaries</h4>
</div>
<div className="flex-1 text-sm text-zinc-500 md:px-12">
              Poomsae (Forms) division across all age groups and belt levels.
            </div>
<div className="flex items-center space-x-2 text-xs font-medium text-zinc-900">
<iconify-icon className="text-zinc-400" icon="solar:map-point-linear"></iconify-icon>
<span>Main Arena A</span>
</div>
</div>

<div className="group flex flex-col space-y-4 rounded-2xl border border-zinc-100 p-6 transition-all hover:border-zinc-200 hover:shadow-sm md:flex-row md:items-center md:space-y-0">
<div className="md:w-48">
<span className="text-sm font-medium text-zinc-400">
                09:00 AM — 06:00 PM
              </span>
<h4 className="text-lg font-medium">Day 2: Sparring</h4>
</div>
<div className="flex-1 text-sm text-zinc-500 md:px-12">
              Kyorugi elimination rounds for heavyweight and lightweight
              divisions.
            </div>
<div className="flex items-center space-x-2 text-xs font-medium text-zinc-900">
<iconify-icon className="text-zinc-400" icon="solar:map-point-linear"></iconify-icon>
<span>Main Arena B</span>
</div>
</div>

<div className="group flex flex-col space-y-4 rounded-2xl border border-zinc-100 p-6 transition-all hover:border-zinc-200 hover:shadow-sm md:flex-row md:items-center md:space-y-0">
<div className="md:w-48">
<span className="text-sm font-medium text-zinc-400">
                10:00 AM — 04:00 PM
              </span>
<h4 className="text-lg font-medium">Day 3: Grand Finals</h4>
</div>
<div className="flex-1 text-sm text-zinc-500 md:px-12">
              Championship rounds followed by the closing awards ceremony.
            </div>
<div className="flex items-center space-x-2 text-xs font-medium text-zinc-900">
<iconify-icon className="text-zinc-400" icon="solar:map-point-linear"></iconify-icon>
<span>Main Stage</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 px-6 py-24" id="judges">
<div className="mx-auto max-w-7xl">
<div className="animate-reveal text-center">
<h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Meet the Judges
          </h2>
<p className="mt-2 text-zinc-500">
            Distinguished masters and world-renowned practitioners.
          </p>
</div>
<div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">

<div className="animate-reveal delay-1 group text-center">
<div className="relative mx-auto mb-6 aspect-square overflow-hidden rounded-2xl bg-zinc-200">
<div className="absolute inset-0 bg-zinc-300"></div>
<img alt="Judge" className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=400&amp;h=400&amp;auto=format&amp;fit=crop"/>
</div>
<h5 className="text-sm font-semibold">Master Kenji Sato</h5>
<p className="text-xs text-zinc-400">8th Dan Black Belt</p>
</div>

<div className="animate-reveal delay-2 group text-center">
<div className="relative mx-auto mb-6 aspect-square overflow-hidden rounded-2xl bg-zinc-200">
<div className="absolute inset-0 bg-zinc-300"></div>
<img alt="Judge" className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;h=400&amp;auto=format&amp;fit=crop"/>
</div>
<h5 className="text-sm font-semibold">Dr. Elena Rodriguez</h5>
<p className="text-xs text-zinc-400">International Referee</p>
</div>

<div className="animate-reveal delay-3 group text-center">
<div className="relative mx-auto mb-6 aspect-square overflow-hidden rounded-2xl bg-zinc-200">
<div className="absolute inset-0 bg-zinc-300"></div>
<img alt="Judge" className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=400&amp;h=400&amp;auto=format&amp;fit=crop"/>
</div>
<h5 className="text-sm font-semibold">Grandmaster Kim</h5>
<p className="text-xs text-zinc-400">Technical Director</p>
</div>

<div className="animate-reveal delay-4 group text-center">
<div className="relative mx-auto mb-6 aspect-square overflow-hidden rounded-2xl bg-zinc-200">
<div className="absolute inset-0 bg-zinc-300"></div>
<img alt="Judge" className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=400&amp;h=400&amp;auto=format&amp;fit=crop"/>
</div>
<h5 className="text-sm font-semibold">Master Sarah Chen</h5>
<p className="text-xs text-zinc-400">Olympic Gold Medalist</p>
</div>

<div className="animate-reveal delay-1 group text-center lg:delay-5">
<div className="relative mx-auto mb-6 aspect-square overflow-hidden rounded-2xl bg-zinc-200">
<div className="absolute inset-0 bg-zinc-300"></div>
<img alt="Judge" className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=400&amp;h=400&amp;auto=format&amp;fit=crop"/>
</div>
<h5 className="text-sm font-semibold">Robert Sterling</h5>
<p className="text-xs text-zinc-400">Poomsae Specialist</p>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-900 px-6 py-12 text-white">
<div className="mx-auto max-w-7xl">
<div className="grid gap-12 lg:grid-cols-3">
<div className="space-y-4">
<div className="text-xl font-semibold tracking-tighter">TKD.OPEN</div>
<p className="max-w-xs text-sm text-zinc-400">
              Pushing the boundaries of martial arts through fair competition
              and technical excellence since 1998.
            </p>
</div>
<div className="grid grid-cols-2 gap-8">
<div className="space-y-4">
<h6 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Navigation
              </h6>
<ul className="space-y-2 text-sm text-zinc-400">
<li>
<a className="hover:text-white" href="#">Tournament Info</a>
</li>
<li>
<a className="hover:text-white" href="#">Safety Protocol</a>
</li>
<li><a className="hover:text-white" href="#">Past Winners</a></li>
</ul>
</div>
<div className="space-y-4">
<h6 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Connect
              </h6>
<ul className="space-y-2 text-sm text-zinc-400">
<li><a className="hover:text-white" href="#">Instagram</a></li>
<li><a className="hover:text-white" href="#">YouTube</a></li>
<li><a className="hover:text-white" href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="space-y-4">
<h6 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Newsletter
            </h6>
<div className="flex max-w-sm items-center space-x-2 rounded-lg bg-zinc-800 p-1">
<input className="w-full bg-transparent px-3 text-sm focus:outline-none" placeholder="Email address" type="email"/>
<button className="rounded-md bg-white px-4 py-2 text-xs font-medium text-zinc-900">
                Join
              </button>
</div>
</div>
</div>
<div className="mt-12 flex flex-col justify-between border-t border-zinc-800 pt-8 text-xs text-zinc-500 md:flex-row">
<p>© 2024 International Taekwondo Committee. All rights reserved.</p>
<div className="mt-4 flex space-x-6 md:mt-0">
<a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
