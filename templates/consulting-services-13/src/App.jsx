import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Simple intersection observer for scroll animations
      document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              // Optional: stop observing once visible
              // observer.unobserve(entry.target);
            }
          });
        }, observerOptions);

        document.querySelectorAll('.scroll-animate').forEach(el => {
          observer.observe(el);
        });

        // Number counter animation
        const counters = document.querySelectorAll('.counter');
        const speed = 200; // The lower the slower

        const animateCounters = () => {
          counters.forEach(counter => {
            const updateCount = () => {
              const target = +counter.getAttribute('data-target');
              const count = +counter.innerText.replace(/,/g, ''); // Remove commas
              const suffix = counter.getAttribute('data-suffix') || '';
              const decimals = +counter.getAttribute('data-decimals') || 0;
              
              // Lower inc for slower animation
              const inc = target / speed;

              if (count < target) {
                // Add increment
                counter.innerText = Math.ceil(count + inc);
                // Call function every ms
                setTimeout(updateCount, 20);
              } else {
                counter.innerText = target;
              }
              // Add suffix at the end purely for display, but innerText loop needs number
              // A better way is to update a separate span or format at the end
              if (count >= target) {
                 counter.innerText = target + suffix;
              }
            };
            updateCount();
          });
        }
        
        // Trigger counters when stats section is visible
        const statsSection = document.getElementById('statsContainer');
        if(statsSection) {
            const statsObserver = new IntersectionObserver((entries) => {
                if(entries[0].isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(statsSection);
                }
            });
            statsObserver.observe(statsSection);
        }

        // Activity Toggle
        const activityToggle = document.getElementById('activityToggle');
        const activityList = document.getElementById('activityList');
        const activityFooter = document.getElementById('activityFooter');

        if(activityToggle && activityList) {
            activityToggle.addEventListener('click', () => {
                activityList.classList.toggle('hidden');
                activityFooter.classList.toggle('hidden');
            });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,30,1)_0%,rgba(0,0,0,1)_100%)]"></div>

<div className="relative w-[120vmin] h-[120vmin] max-w-[900px] max-h-[900px] opacity-25">
<svg className="w-full h-full bulb-graphic overflow-visible" viewbox="0 0 500 600" xmlns="http://www.w3.org/2000/svg">
<defs>

<radialgradient cx="50%" cy="50%" fx="50%" fy="50%" id="rayGradient" r="50%">
<stop offset="0%" stop-color="#00f0ff" stop-opacity="0.8"></stop>
<stop offset="60%" stop-color="#bf00ff" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#000000" stop-opacity="0"></stop>
</radialgradient>

<filter height="200%" id="neon-glow" width="200%" x="-50%" y="-50%">
<fegaussianblur result="blur" stddeviation="3"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>

<g className="rays" transform="translate(250, 250)">
<g stroke="url(#rayGradient)" strokeLinecap="round" strokeWidth="2">
<line transform="rotate(0)" x1="0" x2="0" y1="-100" y2="-280"></line>
<line transform="rotate(30)" x1="0" x2="0" y1="-100" y2="-280"></line>
<line transform="rotate(60)" x1="0" x2="0" y1="-100" y2="-280"></line>
<line transform="rotate(90)" x1="0" x2="0" y1="-100" y2="-280"></line>
<line transform="rotate(120)" x1="0" x2="0" y1="-100" y2="-280"></line>
<line transform="rotate(150)" x1="0" x2="0" y1="-100" y2="-280"></line>
<line transform="rotate(180)" x1="0" x2="0" y1="-100" y2="-280"></line>
<line transform="rotate(210)" x1="0" x2="0" y1="-100" y2="-280"></line>
<line transform="rotate(240)" x1="0" x2="0" y1="-100" y2="-280"></line>
<line transform="rotate(270)" x1="0" x2="0" y1="-100" y2="-280"></line>
<line transform="rotate(300)" x1="0" x2="0" y1="-100" y2="-280"></line>
<line transform="rotate(330)" x1="0" x2="0" y1="-100" y2="-280"></line>
</g>
</g>


<path d="M250 80 
                         C340 80 410 150 410 240 
                         C410 300 380 340 350 370 
                         L320 440 
                         L180 440 
                         L150 370 
                         C120 340 90 300 90 240 
                         C90 150 160 80 250 80 Z" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" style={{filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))'}}></path>

<path d="M180 460 L320 460" stroke="white" strokeLinecap="round" strokeWidth="8"></path>
<path d="M190 490 L310 490" stroke="white" strokeLinecap="round" strokeWidth="8"></path>
<path d="M205 520 L295 520" stroke="white" strokeLinecap="round" strokeWidth="8"></path>


<g transform="translate(250, 240)">

<circle className="nucleus" cx="0" cy="0" r="16"></circle>

<ellipse className="atom-ring atom-orbit-1" filter="url(#neon-glow)" rx="120" ry="35"></ellipse>
<ellipse className="atom-ring atom-orbit-2" filter="url(#neon-glow)" rx="120" ry="35"></ellipse>
<ellipse className="atom-ring atom-orbit-3" filter="url(#neon-glow)" rx="120" ry="35"></ellipse>
</g>
</svg>
</div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 animate-fade-in delay-0 backdrop-blur-xl bg-black/20 border-b border-white/10" style={{animationPlayState: 'running'}}>
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="flex lg:py-6 pt-4 pb-4 items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="relative text-white">
<svg className="lucide lucide-sparkles" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"></path></svg>
</div>
<span className="text-xl font-display font-semibold tracking-tight">Epiphany Unlimited</span>
</a>
<nav className="hidden md:flex items-center gap-1 text-sm font-medium">
<a className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200" href="#services">Services</a>
<a className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200" href="#methodology">Methodology</a>
<a className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200" href="#impact">Impact</a>
<a className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200" href="#consultation">Consultation</a>
</nav>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex h-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-xl">
          Client Portal
        </button>
<button className="group relative inline-flex h-10 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black hover:bg-white/90 transition-all duration-200 shadow-lg shadow-white/20">
<span className="relative z-10">Book Strategy Call</span>
<div className="absolute inset-0 rounded-xl bg-white opacity-0 blur-lg group-hover:opacity-20 transition-opacity"></div>
</button>
<button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
<svg className="h-5 w-5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<main className="">
<section className="relative lg:pt-32 lg:pb-24 pt-8 pb-32">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 xl:gap-16">

<div className="relative z-10 lg:col-span-6 xl:col-span-5">
<div className="animate-slide-up delay-200 mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl" style={{animationPlayState: 'running'}}>
<div className="flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-green-400 animate-pulse" style={{animationPlayState: 'running'}}></span>
<span className="text-xs font-medium">Strategic Clarity</span>
</div>
<div className="h-4 w-px bg-white/20"></div>
<span className="text-xs">Accepting New Clients</span>
</div>
<h1 className="animate-slide-up delay-300 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] mb-6 font-geist font-light tracking-tighter" style={{animationPlayState: 'running'}}>
                Turning Insight into
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent font-geist font-light tracking-tighter">Infinite Growth</span>
</h1>
<p className="animate-slide-up delay-500 max-w-2xl text-lg sm:text-xl leading-relaxed text-white/70 mb-8" style={{animationPlayState: 'running'}}>
                We partner with visionary leaders to transform complex challenges into clear, actionable strategies. Experience the epiphany that changes everything for your business.
              </p>
<div className="animate-slide-up delay-700 flex flex-col sm:flex-row items-start sm:items-center gap-4" style={{animationPlayState: 'running'}}>
<button className="group relative inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-black hover:bg-white/90 transition-all duration-300 shadow-2xl shadow-white/20">
<svg className="h-5 w-5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>
<span>Discover Process</span>
<div className="absolute inset-0 rounded-2xl bg-white opacity-0 blur-xl group-hover:opacity-25 transition-opacity"></div>
</button>
<button className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-medium text-white/90 hover:bg-white/10 hover:border-white/25 transition-all duration-300 backdrop-blur-xl">
<svg className="h-5 w-5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
<span>View Case Studies</span>
</button>
</div>

<div className="animate-slide-up delay-900 grid grid-cols-3 gap-8 mt-12" id="statsContainer" style={{animationPlayState: 'running'}}>
<div>
<div className="text-2xl text-white font-geist font-light tracking-tighter">
<span className="counter" data-suffix="+" data-target="500">0</span>
</div>
<div className="text-sm text-white/60 mt-1">Strategies Delivered</div>
</div>
<div className="">
<div className="text-2xl text-white font-geist font-light tracking-tighter">
<span className="counter" data-suffix="M+" data-target="150">0</span>
</div>
<div className="text-sm text-white/60 mt-1">Value Generated</div>
</div>
<div className="">
<div className="text-2xl text-white font-geist font-light tracking-tighter">
<span className="counter" data-decimals="0" data-suffix="%" data-target="98">0</span>
</div>
<div className="text-sm text-white/60 mt-1">Client Retention</div>
</div>
</div>
</div>

<div className="relative lg:col-span-6 xl:col-span-7">

<div className="animate-blur-in delay-500 relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/5 shadow-2xl shadow-black/40" style={{animationPlayState: 'running'}}>

<img alt="Strategic Insight" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a8a6a2b-b092-45fa-8841-49e21aad6579_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

<div className="glow-light"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="rounded-xl bg-black/40 p-3 backdrop-blur-xl ring-1 ring-white/10">
<div className="text-sm font-medium text-white">Organizational Synergy</div>
<div className="text-xs text-white/70 mt-0.5">Optimized for scalable growth</div>
</div>
</div>
</div>

<div className="animate-slide-up delay-1100 absolute -bottom-16 right-0 w-full max-w-sm lg:absolute lg:right-0 lg:top-8 lg:-bottom-auto lg:w-80" style={{animationPlayState: 'running'}}>
<div className="relative shadow-black/40 ring-1 ring-white/10 bg-white/20 border-white/15 border rounded-2xl mr-5 pt-5 pr-5 pb-5 pl-5 shadow-2xl backdrop-blur-3xl" style={{background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(40px)', border: '1px solid rgba(255, 255, 255, 0.18)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'}}>
<div className="flex items-center justify-between">
<div className="flex gap-3 items-center">
<div className="inline-flex h-9 w-9 ring-1 ring-white/20 bg-neutral-50/20 rounded-xl items-center justify-center">
<svg className="h-4 w-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="text-base font-display font-semibold">Live Metrics</h3>
</div>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition-colors" id="activityToggle">
<svg className="stroke-[1.5] w-[16px] h-[16px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="space-y-3 hidden" id="activityList">

<div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/8 transition-all duration-200">
<div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl ring-white/20 bg-neutral-50/20 rounded-xl shadow-lg flex-shrink-0">
<svg className="h-3 w-3 sm:h-4 sm:w-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h10"></path><path d="M9 4v16"></path><path d="m3 9 3 3-3 3"></path><path d="M12 6A9 9 0 0 1 21 3"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs sm:text-sm font-medium text-white truncate">Strategic Audit</p>
<p className="text-xs text-white/60">Completed • 2 hours ago</p>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<div className="h-5 w-5 sm:h-6 sm:w-6 rounded bg-green-500/20 flex items-center justify-center">
<svg className="h-3 w-3 stroke-[2] text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
</div>
<div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/8 transition-all duration-200">
<div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bring-white/20 bg-neutral-50/20 rounded-xl shadow-lg flex-shrink-0">
<svg className="h-3 w-3 sm:h-4 sm:w-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs sm:text-sm font-medium text-white truncate">Market Analysis</p>
<p className="text-xs text-white/60">Processing • 15 mins ago</p>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" style={{animationPlayState: 'running'}}></div>
</div>
</div>
<div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/8 transition-all duration-200">
<div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl ring-white/20 bg-neutral-50/20 rounded-xl ring-1 ring-white/15 shadow-lg flex-shrink-0">
<svg className="h-3 w-3 sm:h-4 sm:w-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs sm:text-sm font-medium text-white truncate">Revenue Forecast</p>
<p className="text-xs text-white/60">Updated • Just now</p>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<div className="h-5 w-5 sm:h-6 sm:w-6 rounded bg-green-500/20 flex items-center justify-center">
<svg className="h-3 w-3 stroke-[2] text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/10 hidden" id="activityFooter">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
<svg className="h-4 w-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
      New Project
    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-animate relative py-20 lg:py-32 in-view" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-geist font-light tracking-tighter">
              Services Designed for
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent font-geist font-light tracking-tighter">Maximum Impact</span>
</h2>
<p className="max-w-2xl mx-auto text-lg text-white/70 leading-relaxed">
              We don't just advise; we transform. Our suite of consulting services unlocks the hidden potential within your organization.
            </p>
</div>
<div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 lg:p-8 ring-1 ring-white/5 shadow-2xl shadow-black/40">
<div className="grid grid-cols-1 gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-6 backdrop-blur-xl hover:from-white/12 hover:to-white/6 transition-all duration-500">
<div className="relative h-48 lg:h-52 overflow-hidden rounded-xl ring-1 ring-white/10 mb-6">
<img alt="Strategic Consulting" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8eb0f134-ad73-4767-934c-a816876c5a4c_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute top-3 right-3">
<button className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 ring-1 ring-white/20 backdrop-blur-xl hover:bg-white/25 transition-colors">
<svg className="h-4 w-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16.2 7.8 12 12l-4.2 4.2"></path><path d="M7.8 7.8 12 12l4.2 4.2"></path></svg>
</button>
</div>
</div>
<div>
<h3 className="text-xl font-display font-semibold tracking-tight mb-3">Strategic Consulting</h3>
<p className="text-white/70 leading-relaxed mb-6">Deep-dive analysis into business operations to identify bottlenecks and craft a roadmap for sustainable, scalable growth.</p>
<button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
<svg className="h-4 w-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    Learn More
                  </button>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-6 backdrop-blur-xl hover:from-white/12 hover:to-white/6 transition-all duration-500">
<div className="relative h-48 lg:h-52 overflow-hidden rounded-xl ring-1 ring-white/10 mb-6">
<img alt="Leadership Development" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91128fd1-ca2a-44e1-b4e8-678711b5c5f4_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute top-3 right-3">
<button className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 ring-1 ring-white/20 backdrop-blur-xl hover:bg-white/25 transition-colors">
<svg className="h-4 w-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</button>
</div>
</div>
<div className="">
<h3 className="text-xl font-display font-semibold tracking-tight mb-3">Leadership Development</h3>
<p className="text-white/70 leading-relaxed mb-6">Empowering C-suite executives and managers with the psychological tools and strategic foresight needed to lead effectively.</p>
<button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
<svg className="h-4 w-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>
                    Explore Programs
                  </button>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-6 backdrop-blur-xl hover:from-white/12 hover:to-white/6 transition-all duration-500">
<div className="relative h-48 lg:h-52 overflow-hidden rounded-xl ring-1 ring-white/10 mb-6">
<img alt="Operational Excellence" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a63e1c25-72f0-45b9-bdc0-c52907914b49_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute top-3 right-3">
<button className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 ring-1 ring-white/20 backdrop-blur-xl hover:bg-white/25 transition-colors">
<svg className="h-4 w-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 17-1.4-1.4"></path><path d="m19.1 4.9-1.4 1.4"></path><path d="M22 12h-2"></path><path d="M4.9 19.1 6.3 17.7"></path><path d="M4.9 4.9 6.3 6.3"></path><path d="M2 12h2"></path></svg>
</button>
</div>
</div>
<div className="">
<h3 className="text-xl font-display font-semibold tracking-tight mb-3">Operational Excellence</h3>
<p className="text-white/70 leading-relaxed mb-6">Streamlining workflows and implementing data-driven systems that remove friction and accelerate delivery times.</p>
<button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
<svg className="h-4 w-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg>
                    Optimize Now
                  </button>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="scroll-animate relative py-20 lg:py-32 in-view" id="methodology">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-geist font-light tracking-tighter">
              The Epiphany
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent font-geist font-light tracking-tighter">Methodology</span>
</h2>
<p className="max-w-2xl mx-auto text-lg text-white/70 leading-relaxed">
              Our proven framework for unlocking business value relies on data, intuition, and rigorous execution.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
<div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10 ring-1 ring-white/5">
<img alt="Discovery Phase" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b535e27a-5611-40e0-a6fd-24d3fdc4aa08_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<div className="bg-black/40 backdrop-blur-xl rounded-xl p-4 ring-1 ring-white/10">
<h4 className="font-semibold text-white mb-1">Discovery Phase</h4>
<p className="text-xs text-white/70">Uncovering root causes and opportunities</p>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10 ring-1 ring-white/5">
<img alt="Strategic Planning" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/905eec03-e9d1-4c06-ac00-75f4081ef1b6_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<div className="bg-black/40 backdrop-blur-xl rounded-xl p-4 ring-1 ring-white/10">
<h4 className="font-semibold text-white mb-1">Strategic Planning</h4>
<p className="text-xs text-white/70">Building the roadmap to success</p>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10 ring-1 ring-white/5">
<img alt="Implementation" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3f1ce1e-0214-4406-9122-f084f36f4fc8_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<div className="bg-black/40 backdrop-blur-xl rounded-xl p-4 ring-1 ring-white/10">
<h4 className="font-semibold text-white mb-1">Implementation</h4>
<p className="text-xs text-white/70">Executing with precision</p>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10 ring-1 ring-white/5 md:col-span-2">
<img alt="Executive Alignment" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a8a6a2b-b092-45fa-8841-49e21aad6579_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<div className="bg-black/40 backdrop-blur-xl rounded-xl p-6 ring-1 ring-white/10">
<h4 className="text-lg font-semibold text-white mb-2">Executive Alignment</h4>
<p className="text-sm text-white/70 max-w-md">Our workshops bring diverse leadership perspectives into a single, unified vision for the future.</p>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10 ring-1 ring-white/5">
<img alt="Continuous Growth" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/794112a2-89b3-41cb-9c68-582e6af6132f_320w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<div className="bg-black/40 backdrop-blur-xl rounded-xl p-4 ring-1 ring-white/10">
<h4 className="font-semibold text-white mb-1">Continuous Growth</h4>
<p className="text-xs text-white/70">Iterative improvement cycles</p>
</div>
</div>
</div>
</div>
<div className="text-center">
<button className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-medium text-white/90 hover:bg-white/10 hover:border-white/25 transition-all duration-300 backdrop-blur-xl">
<svg className="h-5 w-5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
<span>View Case Studies</span>
</button>
</div>
</div>
</section>

<section className="scroll-animate relative py-20 lg:py-32 in-view" id="impact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-geist font-light tracking-tighter">
              Trusted by
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent font-geist font-light tracking-tighter">Visionary Leaders</span>
</h2>
<p className="max-w-2xl mx-auto text-lg text-white/70 leading-relaxed">
              Hear from the founders and executives who have experienced the Epiphany difference.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-8 backdrop-blur-xl hover:from-white/12 hover:to-white/6 transition-all duration-500">
<div className="mb-6">
<div className="flex text-yellow-400 mb-4">
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
<blockquote className="text-white/90 leading-relaxed mb-6">
                  "Epiphany Unlimited provided the clarity we were missing. Their strategic audit revealed inefficiencies that, once fixed, doubled our profit margins in Q4."
                </blockquote>
</div>
<div className="flex items-center gap-4">
<img alt="Client" className="h-12 w-12 rounded-full ring-2 ring-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f52b9e1e-c3e8-4844-b3c5-28aacdc6b434_320w.jpg"/>
<div>
<div className="font-semibold text-white">James Sterling</div>
<div className="text-sm text-white/60">CEO, TechFlow Inc.</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-8 backdrop-blur-xl hover:from-white/12 hover:to-white/6 transition-all duration-500">
<div className="mb-6">
<div className="flex text-yellow-400 mb-4">
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
<blockquote className="text-white/90 leading-relaxed mb-6">
                  "Working with Epiphany wasn't just about strategy; it was about shifting our mindset. We went from stalling to scaling in under six months."
                </blockquote>
</div>
<div className="flex items-center gap-4">
<img alt="Client" className="h-12 w-12 rounded-full ring-2 ring-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b6e4af7-ac86-4163-b303-578671458c76_320w.jpg"/>
<div>
<div className="font-semibold text-white">Elena Vasquez</div>
<div className="text-sm text-white/60">Founder, Aura Design</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-8 backdrop-blur-xl hover:from-white/12 hover:to-white/6 transition-all duration-500">
<div className="mb-6">
<div className="flex text-yellow-400 mb-4">
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
<blockquote className="text-white/90 leading-relaxed mb-6">
                  "The most valuable consulting investment we've made. Their 'unlimited' approach means they are there whenever a new challenge arises."
                </blockquote>
</div>
<div className="flex items-center gap-4">
<img alt="Client" className="h-12 w-12 rounded-full ring-2 ring-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/794112a2-89b3-41cb-9c68-582e6af6132f_320w.jpg"/>
<div>
<div className="font-semibold text-white">Sarah Chen</div>
<div className="text-sm text-white/60">COO, FutureFin</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-animate relative lg:py-32 in-view pt-20 pb-20" id="consultation">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="sm:text-4xl lg:text-5xl text-3xl font-light tracking-tighter font-geist mb-6">
              Engagement
              <span className="block bg-clip-text font-light text-transparent tracking-tighter font-geist bg-gradient-to-r from-blue-400 via-purple-400 to-green-400">Models</span>
</h2>
<p className="max-w-2xl mx-auto text-lg text-white/70 leading-relaxed">
              We offer flexible engagement structures designed to fit the pace and scale of your transformation needs.
            </p>
</div>
<div className="flex justify-center">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl">

<div className="relative hover:bg-white/[0.04] transition-all duration-300 group rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{width: '19rem', backgroundColor: 'hsla(240, 15%, 9%, 1)', boxShadow: '0px -16px 24px 0px rgba(255, 255, 255, 0.10) inset', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 flex bg-neutral-50/10 border-white/20 border rounded-xl items-center justify-center">
<svg className="w-[20px] h-[20px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-white tracking-tight">Audit</h3>
<p className="text-xs text-neutral-500">Diagnostic Assessment</p>
</div>
</div>
<div className="h-5 w-5 rounded-full border-2 border-white/30"></div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-2">
<span className="text-4xl text-white font-geist font-light tracking-tighter">1</span>
<span className="text-sm text-neutral-400">Time Fee</span>
</div>
<p className="text-xs text-neutral-500 mt-1">Full Business Diagnostics</p>
</div>
<ul className="space-y-3 text-sm text-neutral-300 mb-8">
<li className="flex items-start gap-3">
<div className="flex justify-center items-center w-4 h-4 bg-blue-600 rounded-full">
<svg className="w-[12px] h-[12px]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                    Comprehensive Strategy Audit
                  </li>
<li className="flex items-start gap-3">
<div className="flex justify-center items-center w-4 h-4 bg-blue-600 rounded-full">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                    Gap Analysis Report
                  </li>
<li className="flex items-start gap-3">
<div className="flex justify-center items-center w-4 h-4 bg-blue-600 rounded-full">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                    Executive Presentation
                  </li>
<li className="flex items-start gap-3">
<div className="flex justify-center items-center w-4 h-4 bg-blue-600 rounded-full">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                    Action Roadmap
                  </li>
</ul>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
                  Book Assessment
                </button>
</div>

<div className="relative hover:bg-white/[0.04] transition-all duration-300 group rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{width: '19rem', backgroundColor: 'hsla(240, 15%, 9%, 1)', backgroundImage: 'radial-gradient(at 88% 40%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%), radial-gradient(at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%), radial-gradient(at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%)', boxShadow: '0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset'}}>
<div style={{overflow: 'hidden', pointerEvents: 'none', position: 'absolute', zIndex: '-10', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 'calc(100% + 2px)', height: 'calc(100% + 2px)', backgroundImage: 'linear-gradient(0deg, hsl(0, 0%, 100%) -50%, hsl(0, 0%, 40%) 100%)', borderRadius: '1rem'}}>
<div style={{content: '\'\'', pointerEvents: 'none', position: 'fixed', zIndex: '200', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(0deg)', transformOrigin: 'left', width: '200%', height: '10rem', backgroundImage: 'linear-gradient(0deg, hsla(0, 0%, 100%, 0) 0%, hsl(277, 95%, 60%) 40%, hsl(277, 95%, 60%) 60%, hsla(0, 0%, 40%, 0) 100%)', animation: 'rotate 8s linear infinite'}}></div>
</div>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 flex bg-neutral-50/10 border-white/20 border rounded-xl items-center justify-center">
<svg className="w-[20px] h-[20px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="m2 12 20 0"></path><path d="m19 5-7 7-7-7"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-white tracking-tight">Retainer</h3>
<p className="text-xs text-neutral-500">Ongoing Partnership</p>
</div>
</div>
<div className="h-5 w-5 rounded-full border-4 border-green-500"></div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-2">
<span className="text-4xl text-white font-geist font-light tracking-tighter">$15k</span>
<span className="text-sm text-neutral-400">/ month</span>
</div>
<p className="text-xs text-neutral-500 mt-1">Minimum 6-month commitment</p>
</div>
<ul className="space-y-3 text-sm text-neutral-300 mb-8">
<li className="flex items-start gap-3">
<div className="flex justify-center items-center w-4 h-4 bg-green-500 rounded-full">
<svg className="w-[12px] h-[12px] text-black" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                    Dedicated Strategy Team
                  </li>
<li className="flex items-start gap-3">
<div className="flex justify-center items-center w-4 h-4 bg-green-500 rounded-full">
<svg className="w-[12px] h-[12px] text-black" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                    Weekly Executive Calls
                  </li>
<li className="flex items-start gap-3">
<div className="flex justify-center items-center w-4 h-4 bg-green-500 rounded-full">
<svg className="w-[12px] h-[12px] text-black" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                    Priority Implementation Support
                  </li>
<li className="flex items-start gap-3">
<div className="flex justify-center items-center w-4 h-4 bg-green-500 rounded-full">
<svg className="w-[12px] h-[12px] text-black" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                    Quarterly Business Reviews
                  </li>
</ul>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-black hover:bg-neutral-200 transition-all duration-200">
                  Start Partnership
                </button>
</div>

<div className="relative hover:bg-white/[0.04] transition-all duration-300 group rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{width: '19rem', backgroundColor: 'hsla(240, 15%, 9%, 1)', boxShadow: '0px -16px 24px 0px rgba(255, 255, 255, 0.10) inset', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 flex bg-neutral-50/10 border-white/20 border rounded-xl items-center justify-center">
<svg className="w-[20px] h-[20px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-white tracking-tight">Enterprise</h3>
<p className="text-xs text-neutral-500">Global Transformation</p>
</div>
</div>
<div className="h-5 w-5 rounded-full border-2 border-white/30"></div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-2">
<span className="text-4xl text-white font-geist font-light tracking-tighter">Custom</span>
<span className="text-sm text-neutral-400">pricing</span>
</div>
<p className="text-xs text-neutral-500 mt-1">For multi-national organizations</p>
</div>
<ul className="space-y-3 text-sm text-neutral-300 mb-8">
<li className="flex items-start gap-3">
<div className="flex justify-center items-center w-4 h-4 bg-blue-600 rounded-full">
<svg className="w-[12px] h-[12px]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                    Global Strategy Alignment
                  </li>
<li className="flex items-start gap-3">
<div className="flex justify-center items-center w-4 h-4 bg-blue-600 rounded-full">
<svg className="w-[12px] h-[12px]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                    Cross-functional Workshops
                  </li>
<li className="flex items-start gap-3">
<div className="flex justify-center items-center w-4 h-4 bg-blue-600 rounded-full">
<svg className="w-[12px] h-[12px]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                    24/7 Advisory Access
                  </li>
<li className="flex items-start gap-3">
<div className="flex justify-center items-center w-4 h-4 bg-blue-600 rounded-full">
<svg className="w-[12px] h-[12px]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                    Custom BI Dashboards
                  </li>
</ul>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
                  Contact Sales
                </button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black py-12">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<div className="text-white">
<svg className="lucide lucide-sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"></path></svg>
</div>
<span className="text-lg font-display font-semibold text-white">Epiphany Unlimited</span>
</div>
<div className="flex gap-6 text-sm text-white/60">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-sm text-white/40">
              © 2024 Epiphany Unlimited. All rights reserved.
            </div>
</div>
</div>
</footer>
</main>



    </>
  );
}
