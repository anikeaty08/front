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



    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    const mobileClose = document.getElementById('mobile-close');

    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('hidden');
    });

    mobileClose.addEventListener('click', () => {
      navLinks.classList.add('hidden');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
        navLinks.classList.add('hidden');
      }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
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
      
<div className="spline-container fixed top-0 w-full h-screen -z-10">
<iframe frameborder="0" height="100%" src="https://my.spline.design/flowingribbon-TlkEaNrvCCNZuJBNJN3LXpRF" width="100%"></iframe>
</div>

<header className="bg-transparent">
<nav className="flex max-w-7xl lg:px-8 mr-auto ml-auto pt-6 pr-4 pb-6 pl-4 items-center justify-between">
<div className="flex items-center space-x-3">
<span className="text-xl font-bold tracking-tight font-geist">PixelForge</span>
</div>
<button className="lg:hidden rounded-lg p-2 hover:bg-neutral-100 transition-colors" id="mobile-toggle">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<ul className="fixed inset-0 z-40 hidden flex-col gap-8 lg:static lg:flex lg:flex-row lg:bg-transparent lg:gap-8 lg:backdrop-blur-none bg-white/95 backdrop-blur-md items-center justify-center" id="nav-links">
<li><a className="hover:text-indigo-600 transition-colors duration-200 text-base font-medium font-geist" href="#">Home</a></li>
<li><a className="text-base font-medium hover:text-indigo-600 transition-colors duration-200 font-geist" href="#">Portfolio</a></li>
<li><a className="text-base font-medium hover:text-indigo-600 transition-colors duration-200 font-geist" href="#">Services</a></li>
<li><a className="hover:text-indigo-600 transition-colors duration-200 text-base font-medium font-geist" href="#">About</a></li>
<li><a className="hover:text-indigo-600 transition-colors duration-200 text-base font-medium font-geist" href="#">Contact</a></li>
<li className="lg:hidden">
<button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 px-6 py-3 text-sm font-medium text-white hover:from-indigo-700 hover:to-cyan-700 transition-all duration-200 font-geist" id="mobile-close">
<svg className="lucide lucide-message-circle h-4 w-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
            Start Project
          </button>
</li>
</ul>
<button className="hidden lg:flex gap-2 text-sm font-medium text-white font-geist rounded-full pt-3 pr-6 pb-3 pl-6 shadow-lg items-center justify-center hover:scale-105 transition-transform duration-200" style={{position: `relative`, width: `150px`, height: `55px`, borderRadius: `45px`, border: `none`, backgroundColor: `rgb(151, 95, 255)`, boxShadow: `0px 10px 10px rgb(210, 187, 253) inset, 0px 5px 10px rgba(5, 5, 5, 0.212), 0px -10px 10px rgb(124, 54, 255) inset`, cursor: `pointer`}}>
        Start Project
        <span style={{content: `''`, position: `absolute`, width: `70%`, height: `2px`, backgroundColor: `rgba(250, 250, 250, 0.678)`, filter: `blur(1px)`, top: `7px`, borderRadius: `50%`, left: `15%`, zIndex: `0`}}></span>
<span style={{content: `''`, position: `absolute`, width: `70%`, height: `2px`, backgroundColor: `rgba(250, 250, 250, 0.137)`, filter: `blur(1px)`, bottom: `7px`, borderRadius: `50%`, left: `15%`, zIndex: `0`}}></span>
</button>
</nav>
</header>

<main className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
<section className="md:p-8 bg-white border-neutral-100 border rounded-3xl pt-4 pr-4 pb-4 pl-2 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="grid auto-rows-[240px] gap-4 md:auto-rows-[300px] lg:auto-rows-[360px] md:grid-cols-3">

<article className="relative col-span-1 row-span-2 overflow-hidden md:col-span-2 group rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<img alt="Creative workspace with 3D elements" className="h-full w-full transition-transform duration-700 group-hover:scale-105 object-cover" src="https://cdn.midjourney.com/9e1f49aa-35a6-40f5-81ef-5785d6e3b791/0_0.png?w=800&q=80" />
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70 group-hover:from-black/20 group-hover:via-black/40 group-hover:to-black/80 transition-all duration-300"></div>
<div className="absolute inset-0 flex flex-col md:p-10 pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="flex items-start justify-between">
<h1 className="max-w-sm leading-tight md:text-4xl lg:text-5xl text-3xl text-white tracking-tight font-geist group-hover:text-indigo-100 transition-colors duration-300">PixelForge Studio —<span className="text-indigo-300 font-geist group-hover:text-indigo-200 transition-colors duration-300">Creative Excellence</span></h1>
<div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-xs font-medium text-white font-geist group-hover:bg-white/20 transition-all duration-300">
<div className="h-2 w-2 rounded-full bg-emerald-400 group-hover:bg-emerald-300 transition-colors duration-300"></div>
                Available for projects
              </div>
</div>
<div className="flex items-end justify-between">
<div>
<p className="max-w-xs text-white/90 text-lg font-light font-geist group-hover:text-white transition-colors duration-300">Crafting digital experiences that inspire and engage audiences worldwide</p>
<div className="mt-4 flex items-center gap-4">
<div className="flex items-center gap-1 text-white/80 group-hover:text-white/90 transition-colors duration-300">
<svg className="lucide lucide-star h-4 w-4 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-medium font-geist">4.9 Rating</span>
</div>
<div className="flex items-center gap-1 text-white/80 group-hover:text-white/90 transition-colors duration-300">
<svg className="lucide lucide-award h-4 w-4" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="text-sm font-medium font-geist">15+ Awards</span>
</div>
</div>
</div>
<button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-md hover:bg-white transition-all duration-200 hover:scale-110 group-hover:shadow-lg">
<svg className="lucide lucide-arrow-up-right h-5 w-5 text-gray-900" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
</article>

<article className="flex flex-col overflow-hidden group relative hover:from-neutral-800 hover:to-neutral-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-white bg-[url(https://cdn.midjourney.com/4f451a3a-9360-4c27-abdb-e5bb725db2c1/0_0.png?w=800&q=80)] bg-cover rounded-2xl justify-between">
<div className="p-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-neutral-300 font-geist group-hover:text-neutral-200 transition-colors duration-300">Services</span>
</div>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition-all duration-200 hover:scale-110">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
<h3 className="text-xl font-semibold mb-2 font-geist group-hover:text-indigo-200 transition-colors duration-300">Full-Stack Digital Solutions</h3>
<p className="text-sm text-neutral-300 mb-4 font-geist group-hover:text-neutral-200 transition-colors duration-300">From concept to launch, we handle every aspect of your digital presence</p>
<div className="space-y-2">
<div className="flex items-center gap-2 text-sm group-hover:text-indigo-200 transition-colors duration-300">
<div className="h-1.5 w-1.5 rounded-full bg-indigo-400 group-hover:bg-indigo-300 transition-colors duration-300"></div>
<span className="font-geist">UI/UX Design</span>
</div>
<div className="flex items-center gap-2 text-sm group-hover:text-cyan-200 transition-colors duration-300">
<div className="h-1.5 w-1.5 rounded-full bg-cyan-400 group-hover:bg-cyan-300 transition-colors duration-300"></div>
<span className="font-geist">Web Development</span>
</div>
<div className="flex items-center gap-2 text-sm group-hover:text-emerald-200 transition-colors duration-300">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-400 group-hover:bg-emerald-300 transition-colors duration-300"></div>
<span className="font-geist">Brand Strategy</span>
</div>
</div>
</div>
</article>

<article className="relative overflow-hidden group hover:border-indigo-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-neutral-100 border rounded-2xl">
<div className="absolute inset-0">
<img alt="Modern 3D design showcase" className="h-full w-full object-cover opacity-20 transition-opacity duration-300 group-hover:opacity-30" src="https://cdn.midjourney.com/7277ca39-c0ba-4045-b7f5-f2ae4aff372c/0_2.png" />
</div>
<div className="relative h-full flex flex-col pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="flex items-center justify-between">
<span className="rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-medium font-geist group-hover:bg-indigo-200 transition-colors duration-300">Portfolio</span>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 hover:scale-110">
<svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
<div className="">
<h3 className="text-2xl mb-2 tracking-tight font-geist group-hover:text-indigo-700 transition-colors duration-300">120+ Projects</h3>
<p className="text-sm text-neutral-600 font-geist group-hover:text-neutral-700 transition-colors duration-300">Completed across various industries and platforms</p>
</div>
</div>
</article>

<article className="flex flex-col group text-white bg-[url(https://cdn.midjourney.com/05138b3b-da48-4fbc-969f-092fc8d5895a/0_3.png?w=800&q=80)] bg-cover rounded-2xl pt-6 pr-6 pb-6 pl-6 justify-between hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blend-multiply">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-indigo-100 font-geist group-hover:text-indigo-50 transition-colors duration-300">Team</span>
</div>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur hover:bg-white/30 transition-all duration-200 hover:scale-110">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
<div className="mt-4">
<p className="text-sm text-indigo-100 mb-2 font-geist group-hover:text-indigo-50 transition-colors duration-300">Expert professionals worldwide</p>
<span className="text-3xl font-geist group-hover:text-indigo-50 transition-colors duration-300">25+</span>
<div className="flex gap-2 mt-3 items-center">
<div className="flex -space-x-2">
<img alt="Avatar 1" className="h-6 w-6 rounded-full border-2 border-white/30 object-cover group-hover:border-white/50 transition-all duration-300" src="https://images.unsplash.com/photo-1500649297466-74794c70acfc?w=320&q=80" />
<img alt="Avatar 2" className="h-6 w-6 rounded-full border-2 border-white/30 object-cover group-hover:border-white/50 transition-all duration-300" src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=320&q=80" />
<img alt="Avatar 3" className="h-6 w-6 rounded-full border-2 border-white/30 object-cover group-hover:border-white/50 transition-all duration-300" src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=320&q=80" />
</div>
<span className="text-xs text-indigo-100 font-geist group-hover:text-indigo-50 transition-colors duration-300">Designers & Developers</span>
</div>
</div>
</article>

<article className="flex flex-col justify-between rounded-2xl bg-white p-6 border border-neutral-100 group hover:border-emerald-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-neutral-600 font-geist group-hover:text-neutral-700 transition-colors duration-300">Growth</span>
</div>
<div className="flex items-center gap-1 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300">
<svg className="lucide lucide-arrow-up h-4 w-4" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
<span className="text-xs font-medium font-geist">+24%</span>
</div>
</div>
<div className="mt-4">
<p className="text-sm text-neutral-500 mb-2 font-geist group-hover:text-neutral-600 transition-colors duration-300">Monthly active users reached</p>
<span className="text-3xl text-neutral-900 font-geist group-hover:text-emerald-700 transition-colors duration-300">2.5M+</span>
<p className="text-xs text-neutral-400 mt-1 font-geist group-hover:text-neutral-500 transition-colors duration-300">Across all client projects</p>
</div>
</article>

<article className="flex flex-wrap content-start gap-2 rounded-2xl bg-neutral-50 p-6 border border-neutral-100 hover:border-neutral-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
<div className="w-full flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-neutral-600 font-geist">Technologies</span>
</div>
</div>
<span className="rounded-full bg-white border border-neutral-200 px-3 py-1.5 text-sm font-medium hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 hover:scale-105 cursor-pointer font-geist">React</span>
<span className="rounded-full bg-white border border-neutral-200 px-3 py-1.5 text-sm font-medium hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 hover:scale-105 cursor-pointer font-geist">Next.js</span>
<span className="rounded-full bg-white border border-neutral-200 px-3 py-1.5 text-sm font-medium hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 hover:scale-105 cursor-pointer font-geist">TypeScript</span>
<span className="rounded-full bg-white border border-neutral-200 px-3 py-1.5 text-sm font-medium hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 hover:scale-105 cursor-pointer font-geist">Figma</span>
<span className="rounded-full bg-white border border-neutral-200 px-3 py-1.5 text-sm font-medium hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 hover:scale-105 cursor-pointer font-geist">Webflow</span>
<span className="rounded-full bg-white border border-neutral-200 px-3 py-1.5 text-sm font-medium hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 hover:scale-105 cursor-pointer font-geist">Shopify</span>
<span className="rounded-full bg-white border border-neutral-200 px-3 py-1.5 text-sm font-medium hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 hover:scale-105 cursor-pointer font-geist">Three.js</span>
<span className="rounded-full bg-white border border-neutral-200 px-3 py-1.5 text-sm font-medium hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 hover:scale-105 cursor-pointer font-geist">Framer</span>
<span className="rounded-full bg-white border border-neutral-200 px-3 py-1.5 text-sm font-medium hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 hover:scale-105 cursor-pointer font-geist">Vercel</span>
<span className="rounded-full bg-white border border-neutral-200 px-3 py-1.5 text-sm font-medium hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 hover:scale-105 cursor-pointer font-geist">Supabase</span>
<div className="flex items-center gap-2 mt-2">
<div className="h-2 w-2 rounded-full bg-emerald-500"></div>
<span className="text-xs text-neutral-500 font-geist">Always learning new tech</span>
</div>
</article>
</div>
</section>
<footer className="bg-white border-t border-neutral-100 mt-12 py-12 px-6 md:px-12 rounded-3xl hover:shadow-md transition-shadow duration-300">
<div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 font-geist text-neutral-700">
<div>
<h4 className="text-lg font-semibold mb-4 tracking-tight font-geist">PixelForge Studio</h4>
<p className="text-sm font-light max-w-xs">Crafting innovative digital experiences and solutions for clients worldwide.</p>
<p className="mt-4 text-xs text-neutral-400 font-light">© 2024 PixelForge Studio. All rights reserved.</p>
</div>
<div>
<h5 className="text-sm font-semibold mb-3 tracking-tight font-geist">Services</h5>
<ul className="space-y-2 text-sm font-light">
<li><a className="hover:text-indigo-600 transition-colors duration-200" href="#">UI/UX Design</a></li>
<li><a className="hover:text-indigo-600 transition-colors duration-200" href="#">Web Development</a></li>
<li><a className="hover:text-indigo-600 transition-colors duration-200" href="#">Brand Strategy</a></li>
<li><a className="hover:text-indigo-600 transition-colors duration-200" href="#">E-commerce Solutions</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold mb-3 tracking-tight font-geist">Company</h5>
<ul className="space-y-2 text-sm font-light">
<li><a className="hover:text-indigo-600 transition-colors duration-200" href="#">About Us</a></li>
<li><a className="hover:text-indigo-600 transition-colors duration-200" href="#">Careers</a></li>
<li><a className="hover:text-indigo-600 transition-colors duration-200" href="#">Blog</a></li>
<li><a className="hover:text-indigo-600 transition-colors duration-200" href="#">Contact</a></li>
</ul>
</div>
<div className="">
<h5 className="text-sm font-semibold mb-3 tracking-tight font-geist">Follow Us</h5>
<div className="flex space-x-4">
<a aria-label="Twitter" className="text-neutral-500 hover:text-indigo-600 transition-all duration-200 hover:scale-110" href="#">
</a>
<a aria-label="LinkedIn" className="text-neutral-500 hover:text-indigo-600 transition-all duration-200 hover:scale-110" href="#">
<svg className="lucide lucide-linkedin w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect className="" height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="Instagram" className="text-neutral-500 hover:text-indigo-600 transition-all duration-200 hover:scale-110" href="#">
<svg className="lucide lucide-instagram w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path className="" d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line className="" x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="Dribbble" className="text-neutral-500 hover:text-indigo-600 transition-all duration-200 hover:scale-110" href="#">
<svg className="lucide lucide-dribbble w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
