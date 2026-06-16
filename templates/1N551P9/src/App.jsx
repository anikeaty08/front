import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();

        // Initialize animations
        const animatedElements = document.querySelectorAll('[class*="animate-"]');
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated');
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => {
          observer.observe(el);
        });

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
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-20">
<div className="absolute inset-0 bg-gradient-to-br from-[#0A0A14] via-[#1a0d2e] to-[#0A0A14]"></div>
</div>

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] opacity-30 animate-fade-in animate-delay-400 animated blur-[100px]" style={{background: 'radial-gradient(50% 50% at 50% 50%, rgba(168,85,247,0.4) 0%, rgba(109,40,217,0.25) 35%, rgba(15,23,42,0) 70%)'}}></div>
</div>

<header className="sticky top-0 z-40">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-4 rounded-full border border-white/10 bg-white/5/0 backdrop-blur supports-[backdrop-filter]:bg-white/5 animate-fade-in-down animated">
<div className="flex pt-3 pr-4 pb-3 pl-4 items-center justify-between">

<a className="flex items-center gap-3" href="#">
<span className="grid h-9 w-9 place-items-center ring-1 ring-white/20 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-indigo-600 rounded-full">
<svg className="h-5 w-5 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path><path d="M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z"></path><path d="M12 10v4"></path><path d="M10 12h4"></path></svg>
</span>
<span className="text-[17px] font-medium tracking-tight">Relational Alchemy</span>
</a>

<nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
<a className="hover:text-white transition-colors" href="#problem">The Trap</a>
<a className="hover:text-white transition-colors" href="#solution">The Method</a>
<a className="hover:text-white transition-colors" href="#about">Guide</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>

<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-medium tracking-tight text-white shadow-[0_8px_30px_rgba(139,92,246,0.35)] ring-1 ring-white/10 hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-200 hover:shadow-[0_12px_40px_rgba(139,92,246,0.45)]" href="#booking">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><path d="M3.29 7 12 12l8.71-5"></path><path d="M12 22V12"></path></svg>
                Reserve Your Spot
              </a>
<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<svg className="h-5 w-5 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="relative flex flex-col sm:pt-16 lg:pt-20 text-center mr-auto ml-auto pt-12 items-center">

<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 animate-fade-in-up animated">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animated"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="">4-day retreat • November 21-24, 2025</span>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<h1 className="max-w-5xl sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up animate-delay-200 animated text-4xl font-semibold tracking-tight">
            For People-Pleasers Who Are
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">Tired of Disappearing</span>
</h1>
<p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/70 leading-relaxed animate-fade-in-up animate-delay-400 animated">
            Learn to rock the boat without sinking the ship. What if you could speak up without everything falling apart?
          </p>

<div className="mt-8 w-full max-w-4xl animate-fade-in-up animate-delay-600 animated">
<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-sm shadow-2xl">
<div className="aspect-video">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://ik.imagekit.io/ix5ztlclm/AR/ar%203.mp4?updatedAt=1756010730373" title="Relational Alchemy Intensive Video">
        Your browser does not support the video tag.
      </video>
</div>
</div>
</div>

<div className="flex flex-col gap-4 sm:flex-row animate-fade-in-up animate-delay-800 animated mt-8 items-center">
<a className="inline-flex items-center gap-2 ring-1 ring-white/10 shadow-[0_10px_40px_-10px_rgba(139,92,246,0.6)] hover:shadow-[0_15px_50px_-10px_rgba(139,92,246,0.8)] transition-all duration-300 text-sm font-medium text-white tracking-tight bg-gradient-to-tr from-violet-600 to-fuchsia-600 border-2 rounded-full pt-3 pr-6 pb-3 pl-6 hover:scale-105" href="#booking" style={{borderColor: 'rgba(255, 255, 255, 0.3)'}}>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><path d="M3.29 7 12 12l8.71-5"></path><path d="M12 22V12"></path></svg>
              Reserve Your Spot
            </a>
<div className="flex items-center gap-2 text-sm text-white/60">
<span className="text-orange-300">$279</span>
<span className="line-through">$389</span>
<span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full">Early Bird</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-32" id="problem">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="">
<div className="text-left mb-12 animate-fade-in-up animated">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                The <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">"Keep the Peace"</span> Trap
              </h2>
<p className="leading-relaxed text-lg text-white/70 text-left mb-8">
                Conflict feels dangerous. Like it could destroy everything you have. So you walk on eggshells. You make yourself smaller. Here's what that actually creates:
              </p>
</div>
<div className="grid grid-cols-1 gap-6">
<div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 animate-slide-in-left animate-delay-200 animated">
<div className="flex gap-3 mb-4 items-center">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-600/20">
<svg className="w-[20px] h-[20px]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(252, 165, 165)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
</span>
<h4 className="text-lg font-semibold tracking-tight text-white">Same Fights on Repeat</h4>
</div>
<p className="text-sm text-white/70 leading-relaxed">Nothing gets resolved because nothing gets said. The same issues circle back, wearing deeper grooves each time.</p>
</div>
<div className="animate-slide-in-left animate-delay-400 animated bg-orange-500/5 border-orange-500/20 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex h-10 w-10 items-center justify-center bg-orange-600/20 rounded-xl">
<svg className="w-[20px] h-[20px]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(253, 186, 116)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="5" r="1"></circle><path d="m9 20 3-6 3 6"></path><path d="m6 8 6 2 6-2"></path><path d="M12 10v4"></path></svg>
</span>
<h4 className="text-lg font-semibold tracking-tight text-white">Feel Like a Stranger</h4>
</div>
<p className="text-sm text-white/70 leading-relaxed">Your partner loves a version of you that isn't real. The real you - with needs, boundaries, opinions - stays hidden.</p>
</div>
</div>
<div className="mt-8 animate-fade-in-up animate-delay-600 animated">
<p className="text-lg text-white/90 font-medium">
                That peace isn't peace. It's silence built on everything you can't say.
              </p>
</div>
</div>

<div className="animate-slide-in-right animate-delay-400 animated">
<div className="aspect-[4/5] flex bg-gradient-to-br from-red-500/10 to-orange-500/10 border-white/10 border rounded-2xl items-center justify-center relative"><img alt="Asset image" className="absolute inset-0 w-full h-full object-cover" id="asset-video-1756009848766" src="https://ik.imagekit.io/ix5ztlclm/AR/20241224-DSC09745.jpg?updatedAt=1756009610439"/>P<div className="text-center text-white/40">
<svg className="mx-auto mb-4" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c0 1-1 1-1 1s-1 1-1 1-1-1-1-1-1-1-1-1 1-1 1-1 1-1 1-1 1 1 1 1z"></path><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path><path d="M22 13a18.15 18.15 0 0 1-20 0"></path><rect className="" height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span className="text-sm">Emotional Moment Photo</span>
</div></div>
</div>
</div>
</div>
</section>

<section className="relative mt-32" id="solution">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 animate-fade-in-up animated">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
            What if Conflict Was Your <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Connection Goldmine?</span>
</h2>
<p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
            Everything feels backwards. Conflict feels like the enemy. But avoiding it is what's actually killing your connection. Those conversations that make your stomach drop? Your relationship is starving for them.
          </p>
<blockquote className="text-xl text-white/90 max-w-2xl mx-auto font-medium italic border-l-4 border-violet-500 pl-6">
            "I'll show you how to make every hard moment 'us vs. the problem' instead of 'me vs. them.'"
          </blockquote>
</div>

<div className="relative mt-16 animate-blur-in animate-delay-600 animated">
<div className="border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-6">
              Why Scripts Disappear When Your <span className="text-violet-400">Heart Is Racing</span>
</h3>
<p className="text-lg text-white/70 mb-8 leading-relaxed">
              Your heart pounds. Your brain goes offline. The words just... aren't there. Most advice ignores this. I start here. We build your calm first.
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="text-center">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20 mb-4">
<svg className="w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(196, 181, 253)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"></path><path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"></path><path d="M17 15a3.5 3.5 0 0 0-.025-4.975"></path></svg>
</div>
<h4 className="text-lg font-semibold text-white mb-2">Stay Present</h4>
<p className="text-sm text-white/70">When conflict hits, your nervous system stays regulated instead of hijacked.</p>
</div>
<div className="text-center">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-600/20 mb-4">
<svg className="w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(240, 171, 252)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 18a6 6 0 0 0 0-12v12z"></path></svg>
</div>
<h4 className="text-lg font-semibold text-white mb-2">Turn Fights Into Alignment</h4>
<p className="text-sm text-white/70">Transform reactive patterns into collaborative problem-solving that brings you closer.</p>
</div>
<div className="text-center">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/20 mb-4">
<svg className="h-6 w-6 text-indigo-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(165, 180, 252)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="5" r="1"></circle><path d="m9 20 3-6 3 6"></path><path d="m6 8 6 2 6-2"></path><path d="M12 10v4"></path></svg>
</div>
<h4 className="text-lg font-semibold text-white mb-2">Understand Your Body</h4>
<p className="text-sm text-white/70">Learn why your nervous system hijacks you and how to work with it, not against it.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-32">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 animate-slide-in-left animate-delay-200 animated">
<div className="flex items-center gap-1 mb-4">
<svg className="h-5 w-5 text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="h-5 w-5 text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="h-5 w-5 text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="h-5 w-5 text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="h-5 w-5 text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="flex items-center gap-3">
<img alt="Sarah" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{}}/>
<div className="">
<div className="text-sm font-medium text-white">Sarah</div>
<div className="text-xs text-white/60">Marketing Executive</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 animate-slide-in-right animate-delay-400 animated">
<div className="flex items-center gap-1 mb-4">
<svg className="h-5 w-5 text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="h-5 w-5 text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="h-5 w-5 text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="h-5 w-5 text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="h-5 w-5 text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="flex items-center gap-3">
<img alt="Marianne" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&amp;h=400&amp;fit=crop&amp;crop=face" style={{}}/>
<div>
<div className="text-sm font-medium text-white">Marianne</div>
<div className="text-xs text-white/60">Life Coach</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-32">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12 animate-fade-in-up animated">
<h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-6">
<span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">30 Days</span> From Now:
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mr-auto ml-auto">
<div className="animate-fade-in-up animate-delay-200 animated bg-emerald-500/5 border-emerald-500/20 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600/20 mb-4">
<svg className="h-6 w-6 text-emerald-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<h4 className="text-lg font-semibold tracking-tight text-white mb-3">Have That Conversation</h4>
<p className="text-sm text-white/70 leading-relaxed">Without your heart racing. With clarity instead of chaos. Present instead of panicked.</p>
</div>
<div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-6 animate-fade-in-up animate-delay-400 animated">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600/20 mb-4">
<svg className="h-6 w-6 text-teal-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
</div>
<h4 className="text-lg font-semibold text-white tracking-tight mb-3">Say What You Need</h4>
<p className="text-sm text-white/70 leading-relaxed">Without guilt. Without apology. Without the fear that asking for what you need will destroy everything.</p>
</div>
<div className="animate-fade-in-up animate-delay-600 animated bg-cyan-500/5 border-cyan-500/20 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600/20 mb-4">
<svg className="h-6 w-6 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
</div>
<h4 className="text-lg font-semibold tracking-tight text-white mb-3">Turn Fights Into Understanding</h4>
<p className="text-sm text-white/70 leading-relaxed">Those explosive moments become doorways to deeper intimacy instead of relationship damage.</p>
</div>
<div className="animate-fade-in-up animate-delay-800 animated bg-blue-500/5 border-blue-500/20 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 mb-4">
<svg className="w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(147, 197, 253)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<h4 className="text-lg font-semibold text-white tracking-tight mb-3">Feel More Yourself</h4>
<p className="text-sm text-white/70 leading-relaxed">In your relationship instead of performing a role. Authentic connection instead of careful choreography.</p>
</div>
<div className="animate-fade-in-up animate-delay-1000 animated bg-purple-500/5 border-purple-500/20 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/20 mb-4">
<svg className="w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(216, 180, 254)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<h4 className="text-lg font-semibold tracking-tight text-white mb-3">Stop Choking on 'Fine'</h4>
<p className="text-sm text-white/70 leading-relaxed">When someone asks how you are, you'll have an actual answer. Your truth becomes accessible again.</p>
</div>
</div>
</div>
</section>

<section className="relative mt-32" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="animate-slide-in-left animated">
<img alt="Yaniv" className="w-full max-w-md lg:mx-0 rounded-2xl mr-auto ml-auto shadow-2xl" src="https://ik.imagekit.io/ix5ztlclm/AR/20231119-DSC03894-2.jpg?updatedAt=1756010111154"/>
</div>
<div className="animate-slide-in-right animated">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
              Meet Your <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">Guide</span>
</h2>
<p className="leading-relaxed text-lg text-white/70 mb-6">
              Yaniv gets what it's like to feel too much and not enough at the same time. They've spent years helping people stop disappearing in their relationships.
            </p>
<p className="leading-relaxed text-lg text-white/70 mb-8">
              No fluff. Just tools that work when your nervous system is screaming.
            </p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full bg-violet-400"></div>
<span className="text-white/80">8+ years specializing in relationship dynamics</span>
</div>
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full bg-fuchsia-400"></div>
<span className="text-white/80">Trauma-informed nervous system work</span>
</div>
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full bg-indigo-400"></div>
<span className="text-white/80">Former people-pleaser turned conflict transformation ninja</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-32" id="faq">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 animate-fade-in-up animated">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">Questions</span>
</h2>
</div>
<div className="space-y-6">
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 animate-fade-in-up animate-delay-200 animated">
<h3 className="text-lg font-semibold text-white mb-3">I've tried communication techniques before</h3>
<p className="text-white/70 leading-relaxed">Those failed because they ignored your racing heart. We start there. Most communication advice assumes you're calm and rational. But when conflict hits, your nervous system takes over. We work with your biology, not against it.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 animate-fade-in-up animate-delay-400 animated">
<h3 className="text-lg font-semibold text-white mb-3">What if my partner won't try?</h3>
<p className="text-white/70 leading-relaxed">You'll create safety that invites them in. If they won't? You'll have clarity. When you stop managing their emotions and start honoring your own needs, everything shifts. Either they rise to meet you, or you get clear information about the relationship.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 animate-fade-in-up animate-delay-600 animated">
<h3 className="text-lg font-semibold text-white mb-3">What if I make everything worse?</h3>
<p className="text-white/70 leading-relaxed">You're already making it worse by saying nothing. This gives you a different way. The silent resentment, the walking on eggshells, the slow disappearing act - that's making things worse. At least this path leads somewhere real.</p>
</div>
</div>
</div>
</section>

<section className="relative mt-32" id="booking">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 md:p-12 text-center animate-fade-in-up animated relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 opacity-20">
<div className="w-full h-full rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-white/10 flex items-center justify-center">
<div className="text-center text-white/30">
<svg className="mx-auto mb-2" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
</div>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4 relative z-10">
<span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">Relational Alchemy</span> Intensive
          </h2>
<p className="text-xl text-white/70 mb-6 relative z-10">Turn Conflict Into Connection in 4 Days</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-white/80 relative z-10">
<div className="flex items-center gap-2">
<svg className="h-5 w-5 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="">November 21-24, 2025</span>
</div>
<div className="flex items-center gap-2">
<svg className="h-5 w-5 text-violet-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="">Pai, Thailand</span>
</div>
<div className="flex items-center gap-2">
<svg className="h-5 w-5 text-fuchsia-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
<span className="">16 people max</span>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 relative z-10">
<div className="text-3xl font-bold text-emerald-400">$279</div>
<div className="text-lg text-white/60">
<span className="line-through mr-2">$389</span>
<span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">Early Bird Pricing</span>
</div>
</div>
<a className="inline-flex items-center gap-2 ring-1 ring-white/10 shadow-[0_10px_40px_-10px_rgba(139,92,246,0.6)] hover:shadow-[0_15px_50px_-10px_rgba(139,92,246,0.8)] transition-all duration-300 text-lg font-medium text-white tracking-tight bg-gradient-to-tr from-violet-600 to-fuchsia-600 border-2 rounded-full pt-4 pr-8 pb-4 pl-8 hover:scale-105 relative z-10" href="#" style={{borderColor: 'rgba(255, 255, 255, 0.3)'}}>
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><path d="M3.29 7 12 12l8.71-5"></path><path d="M12 22V12"></path></svg>
            Reserve Your Spot Now
          </a>
<p className="relative z-10 text-sm text-white/50 mt-6">Limited participants for intimate, personalized guidance</p>
</div>
</div>
</section>

<footer className="mt-32 glass-footer">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="mb-8">
<a className="flex items-center gap-3 mb-6" href="#">
<span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-indigo-600 ring-1 ring-white/15 shadow-lg backdrop-blur-sm">
<svg className="h-5 w-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path><path d="M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z"></path><path d="M12 10v4"></path><path d="M10 12h4"></path></svg>
</span>
<span className="text-xl font-semibold tracking-tight text-white">Relational Alchemy</span>
</a>
<p className="text-sm text-white/70 max-w-sm leading-relaxed">Transform conflict into connection. For people-pleasers ready to stop disappearing in their relationships.</p>
</div>
<div className="space-y-4">
<h4 className="text-sm font-medium text-white mb-4">Connect</h4>
<ul className="space-y-3 text-sm text-white/70">
<li><a className="hover:text-white transition-colors duration-200" href="mailto:hello@relationalalchemyintensive.com">hello@relationalalchemyintensive.com</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Facebook</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Contact Support</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-sm font-medium text-white mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-white/70">
<li><a className="hover:text-white transition-colors duration-200" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Refund Policy</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Retreat Guidelines</a></li>
</ul>
</div>
</div>

<div className="mt-12 pt-8 border-t border-white/10">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-6 text-sm text-white/60">
<span>© 2024 Relational Alchemy Intensive</span>
</div>
<div className="flex items-center gap-2 text-xs text-white/50">
<div className="flex h-2 w-2">
<div className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75 animated"></div>
<div className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></div>
</div>
<span>Currently accepting applications</span>
</div>
</div>
</div>
</div>
</footer>




    </>
  );
}
