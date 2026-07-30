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



        // Initialize Lucide icons
        lucide.createIcons();

        // Mobile menu toggle
        const mobileToggle = document.getElementById('mobile-toggle');
        const navLinks = document.getElementById('nav-links');

        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('hidden');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
                navLinks.classList.add('hidden');
            }
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: `url("/assets/99416125-6e8b-4404-9969-e774855c5494_3840w.jpg")`}}></div>

<header className="bg-transparent">
<nav className="flex max-w-7xl lg:px-8 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-white/10 border-white/20 border rounded-full mt-8 mr-auto mb-8 ml-auto pt-3 pr-2 pb-3 pl-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur-md items-center justify-between">
<div className="flex items-center space-x-3">
<span className="uppercase text-xl font-normal text-gray-900 tracking-tighter">Alex Chen</span>
</div>
<button className="lg:hidden rounded-lg p-2 hover:bg-black/10 transition-colors" id="mobile-toggle">
<svg className="lucide lucide-menu w-6 h-6 text-gray-900" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<ul className="fixed inset-0 z-40 hidden flex-col gap-8 lg:static lg:flex lg:flex-row lg:bg-transparent lg:gap-8 bg-white/95 backdrop-blur-md items-center justify-center" id="nav-links">
<li><a className="hover:text-orange-600 transition-colors duration-200 text-base font-medium text-gray-900" href="#">Home</a></li>
<li className=""><a className="hover:text-orange-600 transition-colors duration-200 text-base font-medium text-gray-900" href="#">Experience</a></li>
<li className=""><a className="hover:text-orange-600 transition-colors duration-200 text-base font-medium text-gray-900" href="#">Projects</a></li>
<li className=""><a className="hover:text-orange-600 transition-colors duration-200 text-base font-medium text-gray-900" href="#">About</a></li>
<li className=""><a className="hover:text-orange-600 transition-colors duration-200 text-base font-medium text-gray-900" href="#">Contact</a></li>
</ul>
<button className="relative cursor-pointer border-none overflow-hidden transition-all duration-200 hover:scale-105 text-sm font-medium text-white rounded-full pt-3 pr-6 pb-3 pl-6 shadow-lg left-4" style={{'--duration': `7s`, '--easing': `linear`, '--c-color-1': `rgba(249, 115, 22, 0.7)`, '--c-color-2': `#dc2626`, '--c-color-3': `#e21bda`, '--c-color-4': `rgba(251, 146, 60, 0.8)`, '--c-shadow': `rgba(249, 115, 22, 0.5)`, '--c-shadow-inset-top': `rgba(251, 146, 60, 0.9)`, '--c-shadow-inset-bottom': `rgba(254, 215, 170, 0.8)`, '--c-radial-inner': `#ea580c`, '--c-radial-outer': `#fb923c`, background: `radial-gradient(circle, var(--c-radial-inner), var(--c-radial-outer) 80%)`, boxShadow: `0 0 14px var(--c-shadow)`}}>
<div className="absolute inset-0 rounded-full pointer-events-none z-10" style={{boxShadow: `inset 0 3px 12px var(--c-shadow-inset-top), inset 0 -3px 4px var(--c-shadow-inset-bottom)`}}></div>
<div className="relative overflow-hidden min-w-32 rounded-full pt-0 pb-0" style={{webkitMaskImage: `-webkit-radial-gradient(white, black)`}}>
<span className="relative z-10 inline-block">Download CV</span>
</div>

</button>
</nav>
</header>

<main className="max-w-7xl lg:px-8 mr-auto ml-auto pr-4 pb-20 pl-4">
<section className="md:p-8 bg-stone-900 border-stone-800 border rounded-[40px] pt-4 pr-4 pb-4 pl-2 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="grid auto-rows-[240px] gap-4 md:auto-rows-[300px] lg:auto-rows-[360px] md:grid-cols-3">

<article className="relative col-span-1 row-span-2 overflow-hidden md:col-span-2 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-[url(/assets/c60c653a-1c73-431a-8619-861a312cc7db_1600w.jpg)] bg-cover rounded-2xl" style={{}}>
<div className="absolute inset-0 flex flex-col md:p-10 pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="flex items-start justify-between">
<h1 className="max-w-sm leading-tight md:text-4xl lg:text-5xl text-3xl text-white tracking-tight">Alex Chen —<span className="text-orange-400 transition-colors duration-300">Senior Product Designer</span></h1>
<div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-xs font-medium text-white">
<div className="h-2 w-2 rounded-full bg-pink-400"></div>
                                Available for hire
                            </div>
</div>
<div className="flex items-end justify-between">
<div>
<p className="max-w-xs text-stone-300 text-lg font-light">Crafting intuitive digital experiences at the intersection of design and technology</p>
<div className="mt-4 flex items-center gap-4">
<div className="flex items-center gap-1 text-stone-300">
<svg className="lucide lucide-map-pin h-4 w-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-sm font-medium">San Francisco, CA</span>
</div>
<div className="flex items-center gap-1 text-stone-300">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-sm font-medium">8+ Years</span>
</div>
</div>
</div>
<button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-200 hover:scale-110">
<svg className="lucide lucide-arrow-up-right h-5 w-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
</article>

<article className="flex flex-col overflow-hidden group relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-white bg-[url(/assets/6674ed65-221c-42e3-8cf9-a9c3eca77da6_800w.jpg)] bg-cover border-red-800/30 rounded-2xl backdrop-blur-sm justify-between" style={{}}>
<div className="p-6">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-red-300">Core Skills</span>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition-all duration-200">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
<h3 className="text-xl font-semibold mb-2">Design & Strategy</h3>
<p className="text-sm text-red-200 mb-4">Full-stack design from research to implementation</p>
<div className="space-y-2">
<div className="flex items-center gap-2 text-sm">
<div className="h-1.5 w-1.5 rounded-full bg-orange-400"></div>
<span className="">Product Design</span>
</div>
<div className="flex items-center gap-2 text-sm">
<div className="h-1.5 w-1.5 rounded-full bg-red-400"></div>
<span className="">Design Systems</span>
</div>
<div className="flex items-center gap-2 text-sm">
<div className="h-1.5 w-1.5 rounded-full bg-red-400"></div>
<span>User Research</span>
</div>
</div>
</div>
</article>

<article className="relative overflow-hidden group hover:border-orange-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-stone-800 bg-[url(/assets/1329c306-0747-4910-83ea-6f0a8b58467e_800w.jpg)] bg-cover border-stone-700 border rounded-2xl" style={{}}>
<div className="relative h-full flex flex-col pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="flex items-center justify-between">
<span className="rounded-full bg-orange-500/20 text-orange-400 px-3 py-1 text-xs font-medium border border-orange-500/30">Experience</span>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-700 hover:bg-stone-600 transition-all duration-200">
<svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
<div className="">
<h3 className="text-2xl mb-2 tracking-tight text-white">Senior Designer</h3>
<p className="text-sm text-stone-400 mb-1">Meta • 2022 - Present</p>
<p className="text-sm text-stone-400">Leading product design for AR/VR experiences</p>
</div>
</div>
</article>

<article className="flex flex-col group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-white bg-[url(/assets/c374d25d-34dc-48f7-9f70-7fbc700c42c8_800w.jpg)] bg-cover border-pink-800/30 rounded-2xl pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-pink-300">Featured Work</span>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur hover:bg-white/30 transition-all duration-200">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
<div className="mt-4">
<p className="text-sm text-pink-200 mb-2">Projects completed this year</p>
<span className="text-3xl font-semibold">12+</span>
<div className="flex gap-2 mt-3 items-center">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 border-2 border-pink-400/30"></div>
<div className="h-6 w-6 rounded-full bg-gradient-to-br from-red-500 to-red-500 border-2 border-pink-400/30"></div>
<div className="h-6 w-6 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 border-2 border-pink-400/30"></div>
</div>
<span className="text-xs text-pink-200">Web & Mobile Apps</span>
</div>
</div>
</article>

<article className="flex flex-col group hover:border-orange-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-stone-800 bg-[url(/assets/92a6b77d-f9a6-4e04-9d1f-9e2f3929a5ee_800w.jpg)] bg-cover border-stone-700 border rounded-2xl pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-stone-400">Education</span>
<div className="flex items-center gap-1 text-orange-400">
<svg className="lucide lucide-graduation-cap h-4 w-4" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<span className="text-xs font-medium">2016</span>
</div>
</div>
<div className="mt-4">
<p className="text-sm text-stone-400 mb-2">Master of Design</p>
<span className="text-xl text-white font-medium">Stanford University</span>
<p className="text-xs text-stone-500 mt-1">Human-Computer Interaction</p>
</div>
</article>

<article className="flex flex-wrap content-start gap-2 hover:border-stone-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-stone-800 bg-[url(/assets/ed96ff8f-02b6-47fa-8b8f-4e6c07df10a4_800w.jpg)] bg-cover border-stone-700 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="w-full flex items-center justify-between mb-4">
<span className="text-sm font-medium text-stone-400">Tools & Software</span>
</div>
<span className="rounded-full bg-stone-700 border border-stone-600 px-3 py-1.5 text-sm font-medium text-stone-300 hover:border-orange-500 hover:bg-orange-500/20 hover:text-orange-300 transition-all duration-200 hover:scale-105 cursor-pointer">Figma</span>
<span className="rounded-full bg-stone-700 border border-stone-600 px-3 py-1.5 text-sm font-medium text-stone-300 hover:border-orange-500 hover:bg-orange-500/20 hover:text-orange-300 transition-all duration-200 hover:scale-105 cursor-pointer">Sketch</span>
<span className="rounded-full bg-stone-700 border border-stone-600 px-3 py-1.5 text-sm font-medium text-stone-300 hover:border-orange-500 hover:bg-orange-500/20 hover:text-orange-300 transition-all duration-200 hover:scale-105 cursor-pointer">Framer</span>
<span className="rounded-full bg-stone-700 border border-stone-600 px-3 py-1.5 text-sm font-medium text-stone-300 hover:border-orange-500 hover:bg-orange-500/20 hover:text-orange-300 transition-all duration-200 hover:scale-105 cursor-pointer">Principle</span>
<span className="rounded-full bg-stone-700 border border-stone-600 px-3 py-1.5 text-sm font-medium text-stone-300 hover:border-orange-500 hover:bg-orange-500/20 hover:text-orange-300 transition-all duration-200 hover:scale-105 cursor-pointer">After Effects</span>
<span className="rounded-full bg-stone-700 border border-stone-600 px-3 py-1.5 text-sm font-medium text-stone-300 hover:border-orange-500 hover:bg-orange-500/20 hover:text-orange-300 transition-all duration-200 hover:scale-105 cursor-pointer">Webflow</span>
<span className="rounded-full bg-stone-700 border border-stone-600 px-3 py-1.5 text-sm font-medium text-stone-300 hover:border-orange-500 hover:bg-orange-500/20 hover:text-orange-300 transition-all duration-200 hover:scale-105 cursor-pointer">React</span>
<div className="flex items-center gap-2 mt-2">
<div className="h-2 w-2 rounded-full bg-orange-500"></div>
<span className="text-xs text-stone-500">Always exploring new tools</span>
</div>
</article>
</div>
</section>

<footer className="md:px-12 bg-stone-900 border-stone-800 rounded-[40px] border-t mt-12 pt-12 pr-6 pb-12 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 text-stone-300">
<div className="">
<h4 className="text-lg font-semibold mb-4 tracking-tight text-white">Let's Connect</h4>
<p className="text-sm font-light max-w-xs text-stone-400">Always open to discussing new opportunities and interesting projects.</p>
<p className="mt-4 text-xs text-stone-500">© 2024 Alex Chen. All rights reserved.</p>
</div>
<div className="">
<h5 className="text-sm font-semibold mb-3 tracking-tight text-white">Contact</h5>
<ul className="space-y-2 text-sm font-light text-stone-400">
<li><a className="hover:text-orange-400 transition-colors duration-200" href="mailto:alex@example.com">alex@example.com</a></li>
<li><a className="hover:text-orange-400 transition-colors duration-200" href="tel:+1234567890">+1 (234) 567-890</a></li>
<li className="hover:text-orange-400 transition-colors duration-200">San Francisco, CA</li>
</ul>
</div>
<div className="">
<h5 className="text-sm font-semibold mb-3 tracking-tight text-white">Resources</h5>
<ul className="space-y-2 text-sm font-light text-stone-400">
<li className=""><a className="hover:text-orange-400 transition-colors duration-200" href="#">Resume</a></li>
<li className=""><a className="hover:text-orange-400 transition-colors duration-200" href="#">Portfolio</a></li>
<li><a className="hover:text-orange-400 transition-colors duration-200" href="#">Case Studies</a></li>
<li><a className="hover:text-orange-400 transition-colors duration-200" href="#">References</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold mb-3 tracking-tight text-white">Social</h5>
<div className="flex space-x-4">
<a className="text-stone-500 hover:text-orange-400 transition-all duration-200 hover:scale-110" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-stone-500 hover:text-orange-400 transition-all duration-200 hover:scale-110" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-stone-500 hover:text-orange-400 transition-all duration-200 hover:scale-110" href="#">
<svg className="lucide lucide-dribbble w-5 h-5" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
</a>
<a className="text-stone-500 hover:text-orange-400 transition-all duration-200 hover:scale-110" href="#">
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
