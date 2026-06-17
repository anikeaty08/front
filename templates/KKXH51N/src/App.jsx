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



      // Render lucide icons
      lucide.createIcons();

      // Time in GMT+7 (Asia/Bangkok)
      function updateTime() {
        try {
          const el = document.getElementById('tz-time');
          if (!el) return;
          const now = new Date();
          const options = { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Bangkok' };
          const s = new Intl.DateTimeFormat('en-US', options).format(now);
          el.textContent = s;
        } catch (e) {}
      }
      updateTime();
      setInterval(updateTime, 60000);

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
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
      
<header className="relative min-h-screen overflow-hidden bg-black">

<div className="pointer-events-none absolute inset-x-0 top-0 z-40">
<div className="mx-auto max-w-7xl pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8">
<div className="flex items-start justify-between py-6">

<div className=""></div>

<div className="pointer-events-auto flex items-start gap-4" style={{marginRight: '0'}}>
<div className="hidden gap-4 md:flex items-center">
<div className="flex items-center gap-3">
<div className="flex flex-col text-right">
<span className="text-sm font-medium text-neutral-100 tracking-tight whitespace-nowrap">Available for project</span>
<span className="text-[11px] text-neutral-400 whitespace-nowrap">EARLY FEB 2025</span>
</div>
</div>
<button className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/0 transition hover:bg-white/5 flex-shrink-0">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="flex items-center gap-3 md:hidden">
<button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/0 px-3.5 py-2 text-xs font-semibold tracking-tight text-white transition hover:bg-white/5 whitespace-nowrap">
<svg className="lucide lucide-message-square h-4 w-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                  TALK
                </button>
<button className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/0 transition hover:bg-white/5 flex-shrink-0">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="absolute left-4 top-6 z-40 pointer-events-none sm:left-6 lg:left-8">
<div className="relative select-none">
<h1 className="text-[15vw] leading-[0.8] uppercase font-extrabold text-neutral-300 tracking-tight" style={{textAlign: 'left'}}>
            NEBULA
          </h1>
</div>
</div>

<div className="absolute inset-0 z-0">

<div className="absolute inset-0 bg-black"></div>

<div className="absolute inset-0">
<div className="absolute inset-0 overflow-hidden" style="
              clip-path: polygon(0% 32%, 100% 12%, 100% 58%, 0% 78%);
            ">
<img alt="Focused eye in shadow" className="h-full w-full object-cover scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3bcedbb5-cc5d-4c95-9f89-99282d6e2287_800w.jpg" style={{}}/>

<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/50"></div>
</div>
</div>
</div>

<div className="absolute right-4 top-40 z-20 mx-auto max-w-7xl sm:right-6 lg:right-8">
<div className="ml-auto max-w-sm sm:max-w-md md:max-w-lg">
<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight text-neutral-300 leading-[1.05] text-right">
            Beyond
            Visuals.
            Built with
            Vision.
          </h2>
</div>
</div>

<div className="absolute bottom-32 left-4 z-20 max-w-xl sm:left-6 lg:left-8 sm:bottom-36 md:bottom-40">
<p className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-neutral-100">
          UI/UX Designer building brands,
          websites, and digital experiences
          <span className="text-neutral-400 font-normal">with intention, clarity and care.</span>
</p>
</div>
</header>

<div className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 border-white/10 border-t backdrop-blur-md">
<div className="mx-auto max-w-7xl pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8">
<div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between py-4">

<nav className="flex flex-wrap gap-6 text-sm items-center">
<a className="hover:text-white transition-colors text-neutral-400 tracking-tight" href="#work">Work</a><div className="hidden w-px sm:block bg-neutral-800 h-6"></div>
<a className="hover:text-white transition-colors text-neutral-400 tracking-tight" href="#about">About</a><div className="hidden w-px sm:block bg-neutral-800 h-6"></div>
<a className="hover:text-white transition-colors text-neutral-400 tracking-tight" href="#services">Services</a><div className="hidden w-px sm:block bg-neutral-800 h-6"></div>
<a className="text-neutral-400 hover:text-white transition-colors tracking-tight" href="#contact">Contact</a>
</nav>

<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
<button className="group relative inline-flex gap-3 uppercase transition-all cursor-pointer text-sm font-medium text-white tracking-wider opacity-100 border-transparent border-2 rounded-xl items-center justify-center" style={{padding: '12px 20px', background: 'linear-gradient(0deg, rgb(0, 0, 0), rgb(39, 39, 39))', borderRadius: '10px', border: 'none', color: 'white', position: 'relative', cursor: 'pointer', fontWeight: '900'}}>
<div className="absolute left-0 top-0 w-full h-full rounded-xl pointer-events-none" style={{left: '-2px', top: '-2px', borderRadius: '10px', background: 'linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000)', backgroundSize: '400%', width: 'calc(100% + 4px)', height: 'calc(100% + 4px)', zIndex: '-1', animation: 'steam 20s linear infinite'}}></div>
<div className="absolute left-0 top-0 w-full h-full rounded-xl pointer-events-none" style={{left: '-2px', top: '-2px', borderRadius: '10px', background: 'linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000)', backgroundSize: '400%', width: 'calc(100% + 4px)', height: 'calc(100% + 4px)', zIndex: '-1', animation: 'steam 20s linear infinite', filter: 'blur(50px)'}}></div>
<span className="relative z-30 font-medium">Start project</span>
<span className="relative flex h-5 w-5 items-center justify-center z-30">
<svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
<style>
                @keyframes steam {
                  0% {
                    background-position: 0 0;
                  }
                  50% {
                    background-position: 400% 0;
                  }
                  100% {
                    background-position: 0 0;
                  }
                }
              </style>
</button>
</div>
</div>
</div>
</div>

<section className="relative sm:py-32 bg-black pt-24 pb-24">
<div className="mx-auto max-w-7xl pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8">
<div className="mb-16 grid lg:grid-cols-2 gap-8 items-start">
<h2 className="sm:text-5xl md:text-6xl text-4xl font-semibold text-white tracking-tight">Selected Work</h2>
<div className="flex flex-col items-start lg:items-end gap-6">
<p className="text-lg text-neutral-300 max-w-xl text-left lg:text-right">
              A collection of projects that showcase design thinking, strategic vision, and attention to detail.
            </p>
<button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors">
              View all projects
            </button>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-0 border-t border-white/10">

<div className="divide-y divide-white/10 lg:border-r border-white/10">
<div className="p-8">
<div className="relative mb-6 rounded-xl overflow-hidden">
<img alt="E-commerce Platform Design" className="w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/657e9b8d-e126-435c-a3d5-84ef43f36d93_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<div className="flex items-center gap-4 mb-6">
<div className="">
<div className="text-white font-medium">E-commerce Platform</div>
<div className="text-sm text-neutral-400">Web Design</div>
</div>
</div>
<p className="leading-relaxed text-neutral-300">Redesigned an e-commerce platform to improve UX and drive conversion through design thinking.</p>
</div>
<div className="p-8">
<div className="relative mb-6 rounded-xl overflow-hidden">
<img alt="Fitness Tracker App Design" className="w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fe4689df-36fb-4278-afbf-5fd919271db8_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<div className="flex items-center gap-4 mb-6">
<div className="">
<div className="text-white font-medium">Fitness Tracker App</div>
<div className="text-sm text-neutral-400">Mobile App</div>
</div>
</div>
<p className="text-neutral-300 leading-relaxed">
                iOS and Android app design for a comprehensive fitness tracking platform with social features and AI coaching capabilities.
              </p>
</div>
</div>

<div className="divide-y divide-white/10 lg:border-r border-white/10">
<div className="p-8">
<div className="relative mb-6 rounded-xl overflow-hidden">
<img alt="Tech Startup Branding" className="w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b758b514-4dcf-4403-99ef-56e8a8ac1346_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<div className="flex items-center gap-4 mb-6">
<div className="">
<div className="text-white font-medium">Tech Startup Branding</div>
<div className="text-sm text-neutral-400">Brand Identity</div>
</div>
</div>
<p className="text-neutral-300 leading-relaxed">
                Brand identity and digital presence for a sustainable clean energy startup, emphasizing innovation and environmental responsibility.
              </p>
</div>
<div className="p-8">
<div className="relative mb-6 rounded-xl overflow-hidden">
<img alt="Design System Components" className="w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3296078e-c9ed-4815-ac9d-652df0aa5b32_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<div className="flex items-center gap-4 mb-6">
<div className="">
<div className="text-white font-medium">Design System</div>
<div className="text-sm text-neutral-400">UI Framework</div>
</div>
</div>
<p className="text-neutral-300 leading-relaxed">
                Comprehensive design system for a fintech company, creating scalable components and design tokens for consistent user experiences.
              </p>
</div>
</div>

<div className="divide-y divide-white/10">
<div className="pt-8 pr-8 pb-8 pl-8">
<div className="relative mb-6 rounded-xl overflow-hidden">
<img alt="SaaS Dashboard Interface" className="w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/15dcd313-d05a-4be3-9ae5-cff2235d88bd_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<div className="flex items-center gap-4 mb-6">
<div className="">
<div className="text-white font-medium">SaaS Dashboard</div>
<div className="text-sm text-neutral-400">Web Application</div>
</div>
</div>
<p className="text-neutral-300 leading-relaxed">
                Modern dashboard design for a business analytics platform, featuring complex data visualization and intuitive user workflows.
              </p>
</div>
<div className="p-8">
<div className="relative mb-6 rounded-xl overflow-hidden">
<img alt="UX Strategy Planning" className="w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/17e789bf-f3aa-4172-b9fa-854b9665ed5d_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<div className="flex gap-4 mb-6 items-center">
<div className="">
<div className="text-white font-medium">UX Strategy</div>
<div className="text-sm text-neutral-400">Consultation</div>
</div>
</div>
<p className="text-neutral-300 leading-relaxed">
                Strategic UX consultation and design optimization for a healthcare platform, improving patient engagement and clinical workflows.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative sm:py-32 bg-[#000000] pt-24 pb-24">
<div className="mx-auto max-w-7xl pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8">
<div className="grid lg:grid-cols-2 gap-0 border-t border-white/10">

<div className="divide-y divide-white/10 lg:border-r border-white/10">
<div className="p-8">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-8">
                Design is storytelling through experience
              </h2>
<div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
<p className="">
                  I'm a passionate UI/UX designer with over 8 years of experience crafting digital experiences that connect brands with their audiences. My approach combines strategic thinking with creative execution.
                </p>
<p>
                  From startups to enterprise companies, I've helped organizations tell their stories through thoughtful design, intuitive interfaces, and meaningful user experiences.
                </p>
</div>
</div>
<div className="p-8">
<div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
<p>
                  When I'm not designing, you'll find me exploring new technologies, reading about behavioral psychology, or traveling to discover new perspectives.
                </p>
</div>
<div className="mt-8 flex flex-wrap gap-4">
<span className="px-4 py-2 bg-neutral-800 text-neutral-200 rounded-full text-sm font-medium">UI/UX Design</span>
<span className="px-4 py-2 bg-neutral-800 text-neutral-200 rounded-full text-sm font-medium">Brand Strategy</span>
<span className="px-4 py-2 bg-neutral-800 text-neutral-200 rounded-full text-sm font-medium">Product Design</span>
<span className="px-4 py-2 bg-neutral-800 text-neutral-200 rounded-full text-sm font-medium">Prototyping</span>
</div>
</div>
</div>

<div className="divide-y divide-white/10">
<div className="p-8">
<div className="relative rounded-2xl overflow-hidden mb-6">
<img alt="Designer portrait" className="w-full h-96 lg:h-[500px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3bcedbb5-cc5d-4c95-9f89-99282d6e2287_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
</div>
<div className="flex items-center gap-4 mb-6">
<div>
<div className="text-white font-medium">Creative Designer</div>
<div className="text-sm text-neutral-400">8+ Years Experience</div>
</div>
</div>
</div>
<div className="p-8 relative">

<div className="absolute top-12 left-12 bg-white text-black p-6 rounded-2xl z-10">
<div className="text-3xl font-semibold mb-1">50+</div>
<div className="text-sm text-neutral-600">Projects Completed</div>
</div>
<div className="absolute top-12 right-12 bg-neutral-900 border border-white/10 text-white p-6 rounded-2xl z-10">
<div className="text-3xl font-semibold mb-1">8+</div>
<div className="text-sm text-neutral-400">Years Experience</div>
</div>

<div className="h-24"></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative sm:py-32 bg-black pt-24 pb-24">
<div className="mx-auto max-w-7xl pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8">
<div className="mb-16 grid lg:grid-cols-2 gap-8 items-start">
<h2 className="sm:text-5xl md:text-6xl text-4xl font-semibold text-white tracking-tight">Services That Drive Results</h2>
<div className="flex flex-col items-start lg:items-end gap-6">
<p className="text-lg text-neutral-300 max-w-xl text-left lg:text-right">
              Comprehensive design solutions tailored to elevate your brand and create meaningful user experiences.
            </p>
<button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors">
              Get started
            </button>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-0 border-t border-white/10">

<div className="divide-y divide-white/10 lg:border-r border-white/10">
<div className="p-8">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
<svg className="h-6 w-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 9h6v6H9z"></path></svg>
</div>
<div>
<div className="text-white font-medium">UI/UX Design</div>
<div className="text-sm text-neutral-400">User-centered design</div>
</div>
</div>
<p className="text-neutral-300 leading-relaxed">
                Crafting intuitive and beautiful user interfaces that prioritize user experience. From wireframing to high-fidelity prototypes, I ensure every interaction is meaningful and efficient.
              </p>
</div>
<div className="p-8">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
<svg className="h-6 w-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="m2 17 10 5 10-5"></path><path d="m2 12 10 5 10-5"></path></svg>
</div>
<div className="">
<div className="text-white font-medium">Brand Identity</div>
<div className="text-sm text-neutral-400">Visual storytelling</div>
</div>
</div>
<p className="text-neutral-300 leading-relaxed">
                Developing comprehensive brand identities that capture your essence. Logo design, color palettes, typography, and brand guidelines that resonate with your audience.
              </p>
</div>
</div>

<div className="divide-y divide-white/10 lg:border-r border-white/10">
<div className="p-8">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
<svg className="h-6 w-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="">
<div className="text-white font-medium">Web Design</div>
<div className="text-sm text-neutral-400">Responsive experiences</div>
</div>
</div>
<p className="text-neutral-300 leading-relaxed">
                Creating modern, responsive websites that perform beautifully across all devices. From landing pages to complex web applications, built with user experience at the forefront.
              </p>
</div>
<div className="p-8">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
<svg className="h-6 w-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<div className="">
<div className="text-white font-medium">Mobile App Design</div>
<div className="text-sm text-neutral-400">iOS &amp; Android</div>
</div>
</div>
<p className="text-neutral-300 leading-relaxed">
                Designing native mobile experiences that feel natural and engaging. Focus on platform conventions while maintaining your unique brand personality.
              </p>
</div>
</div>

<div className="divide-y divide-white/10">
<div className="p-8">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
<svg className="h-6 w-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path></svg>
</div>
<div className="">
<div className="text-white font-medium">Design Systems</div>
<div className="text-sm text-neutral-400">Scalable solutions</div>
</div>
</div>
<p className="leading-relaxed text-neutral-300">Building comprehensive design systems that ensure consistency across all digital touchpoints. Component libraries, style guides, and design tokens for scalable growth.
              </p>
</div>
<div className="p-8">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
<svg className="h-6 w-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4"></path><path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1"></path><path d="M3 10v6c0 .552.448 1 1 1h16c.552 0 1-.448 1-1v-6"></path></svg>
</div>
<div>
<div className="text-white font-medium">Consultation</div>
<div className="text-sm text-neutral-400">Strategic guidance</div>
</div>
</div>
<p className="text-neutral-300 leading-relaxed">
                Strategic design consultation to help you make informed decisions about your digital presence. UX audits, design strategy, and optimization recommendations.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative sm:py-32 bg-black pt-24 pb-24">
<div className="mx-auto max-w-7xl pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8">
<div className="mb-16 grid lg:grid-cols-2 gap-8 items-start">
<h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white">
            Design Packages
          </h2>
<div className="flex flex-col items-start lg:items-end gap-6">
<p className="text-lg text-neutral-300 max-w-xl text-left lg:text-right">
              Flexible design solutions crafted to meet your project needs. From quick fixes to complete brand transformations.
            </p>
<button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors">
              Schedule consultation
            </button>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-0 border-t border-white/10">

<div className="divide-y divide-white/10 lg:border-r border-white/10">
<div className="sm:p-16 lg:p-24 text-center pt-12 pr-12 pb-12 pl-12">
<h3 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">Essential</h3>
<p className="leading-relaxed text-lg text-neutral-300 max-w-sm mt-6 mr-auto ml-auto">
                Perfect for startups and small businesses looking to establish their digital presence with clean, functional design.
              </p>
<div className="mt-24">
<div className="text-5xl sm:text-6xl font-semibold tracking-tight text-white">$2,500</div>
<div className="text-lg text-neutral-400 mt-4">one-time project</div>
</div>
</div>
<div className="p-12 sm:p-16 lg:p-24 text-left">
<div className="text-sm text-neutral-400 mb-4">Includes:</div>
<ul className="space-y-3 text-sm text-neutral-300">
<li className="flex items-center gap-3">
<svg className="text-white flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
</svg>
                  Logo design &amp; brand identity
                </li>
<li className="flex items-center gap-3">
<svg className="text-white flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
</svg>
                  5-page website design
                </li>
<li className="flex items-center gap-3">
<svg className="text-white flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
</svg>
                  Mobile-responsive design
                </li>
<li className="flex items-center gap-3">
<svg className="text-white flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
</svg>
                  2 rounds of revisions
                </li>
</ul>
</div>
</div>

<div className="divide-y divide-white/10 lg:border-r border-white/10 relative">
<div className="p-12 sm:p-16 lg:p-24 text-center">
<h3 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">Professional</h3>
<p className="text-lg text-neutral-300 leading-relaxed max-w-sm mx-auto mt-6">
                Comprehensive design solutions for growing businesses that need sophisticated user experiences and brand consistency.
              </p>
<div className="mt-24">
<div className="text-5xl sm:text-6xl font-semibold tracking-tight text-white">$7,500</div>
<div className="text-lg text-neutral-400 mt-4">one-time project</div>
</div>
</div>
<div className="p-12 sm:p-16 lg:p-24 text-left">
<div className="text-sm text-neutral-400 mb-4">Everything in Essential, plus:</div>
<ul className="space-y-3 text-sm text-neutral-300">
<li className="flex items-center gap-3">
<svg className="text-white flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
</svg>
                  Complete design system
                </li>
<li className="flex items-center gap-3">
<svg className="text-white flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
</svg>
                  UI/UX for web application
                </li>
<li className="flex items-center gap-3">
<svg className="text-white flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
</svg>
                  Interactive prototypes
                </li>
<li className="flex items-center gap-3">
<svg className="text-white flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
</svg>
                  User research &amp; testing
                </li>
<li className="flex items-center gap-3">
<svg className="text-white flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
</svg>
                  4 rounds of revisions
                </li>
</ul>
</div>
</div>

<div className="divide-y divide-white/10">
<div className="sm:p-16 lg:p-24 text-center pt-12 pr-12 pb-12 pl-12">
<h3 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">Enterprise</h3>
<p className="leading-relaxed text-lg text-neutral-300 max-w-sm mt-6 mr-auto ml-auto">Full-service design partnership for companies requiring complex solutions and ongoing design support.</p>
<div className="mt-24">
<div className="text-5xl sm:text-6xl font-semibold tracking-tight text-white">Custom</div>
<div className="text-lg text-neutral-400 mt-4">contact for quote</div>
</div>
</div>
<div className="p-12 sm:p-16 lg:p-24 text-left">
<div className="text-sm text-neutral-400 mb-4">Everything in Professional, plus:</div>
<ul className="space-y-3 text-sm text-neutral-300">
<li className="flex items-center gap-3">
<svg className="text-white flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
</svg>
                  Multi-platform design system
                </li>
<li className="flex items-center gap-3">
<svg className="text-white flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
</svg>
                  Mobile app design (iOS &amp; Android)
                </li>
<li className="flex items-center gap-3">
<svg className="text-white flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
</svg>
                  Design team training
                </li>
<li className="flex items-center gap-3">
<svg className="text-white flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
</svg>
                  Ongoing design support
                </li>
<li className="flex items-center gap-3">
<svg className="text-white flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
</svg>
                  Unlimited revisions
                </li>
</ul>
</div>
</div>
</div>
</div>
</section>




    </>
  );
}
