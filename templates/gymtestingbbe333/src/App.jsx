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



    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('mobile-close-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    function toggleMenu() {
      const isHidden = mobileMenu.classList.contains('invisible');
      if (isHidden) {
        mobileMenu.classList.remove('invisible', 'opacity-0');
        document.body.style.overflow = 'hidden';
      } else {
        mobileMenu.classList.add('invisible', 'opacity-0');
        document.body.style.overflow = '';
      }
    }

    mobileBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', toggleMenu);
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
      

<header className="fixed w-full z-50 transition-all duration-300 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<a className="flex items-center gap-3 group" href="/">
<div className="flex bg-blue-600 w-10 h-10 rounded-xl items-center justify-center text-white shadow-lg shadow-blue-900/20">
<iconify-icon height="24" icon="solar:dumbbell-small-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-500 transition-colors">Slater<span className="text-blue-600">Gym</span></span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#how-it-works">How It Works</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#programs">Programs</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#faq">FAQ</a>
<div className="h-6 w-px bg-white/10 mx-2"></div>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-lg hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 focus:ring-offset-neutral-900" href="#trial">
            Book Free Trial
          </a>
</nav>

<button className="lg:hidden p-2 text-white/80 hover:text-white focus:outline-none" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="lg:hidden fixed inset-0 bg-neutral-950/95 backdrop-blur-xl z-50 opacity-0 invisible transition-all duration-300" id="mobile-menu">
<div className="flex flex-col h-full p-6">
<div className="flex justify-end">
<button className="p-2 text-white/60 hover:text-white" id="mobile-close-btn">
<iconify-icon height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
</div>
<nav className="flex-1 flex flex-col justify-center space-y-8 text-center">
<a className="text-2xl font-medium text-white/90 hover:text-blue-500 transition" href="#how-it-works">How It Works</a>
<a className="text-2xl font-medium text-white/90 hover:text-blue-500 transition" href="#programs">Programs</a>
<a className="text-2xl font-medium text-white/90 hover:text-blue-500 transition" href="#about">About Us</a>
<a className="text-2xl font-medium text-white/90 hover:text-blue-500 transition" href="#faq">FAQ</a>
<a className="mt-8 px-8 py-4 text-lg font-bold bg-blue-600 rounded-lg text-white shadow-lg shadow-blue-900/50" href="#trial">Book Free Trial</a>
</nav>
</div>
</div>
</header>

<section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/40 z-10"></div>
<img alt="Gym interior friendly" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&amp;w=2875&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-20">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 backdrop-blur-sm mb-6 animate-on-scroll is-visible" style={{animationDelay: '0.1s'}}>
<span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
<span className="text-xs font-semibold uppercase tracking-wider text-blue-200">Beginner Friendly • No Contracts</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] animate-on-scroll is-visible" style={{animationDelay: '0.2s'}}>
          Build Strength.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Reclaim Your Energy.</span>
</h1>
<p className="text-lg sm:text-xl text-neutral-300 max-w-xl leading-relaxed mb-10 animate-on-scroll is-visible" style={{animationDelay: '0.3s'}}>
          Designed for busy adults who want results without the guesswork. No intimidation, just effective coaching in a supportive environment.
        </p>
<div className="flex flex-col sm:flex-row gap-4 animate-on-scroll is-visible" style={{animationDelay: '0.4s'}}>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-500 shadow-lg hover:shadow-blue-500/30" href="#trial">
            Book a Free Trial
            <iconify-icon className="ml-2" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-colors border border-white/10 bg-white/5 rounded-lg hover:bg-white/10" href="#how-it-works">
            How It Works
          </a>
</div>
<div className="mt-12 flex items-center gap-4 text-sm text-neutral-400 animate-on-scroll is-visible" style={{animationDelay: '0.5s'}}>
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-neutral-950" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-neutral-950" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-neutral-950" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<p>Trusted by <span className="text-white font-semibold">500+ locals</span> just like you.</p>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-white/5 bg-neutral-900/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center justify-center gap-2 text-xl font-bold text-white"><iconify-icon icon="solar:star-circle-linear"></iconify-icon> Men's Health</div>
<div className="flex items-center justify-center gap-2 text-xl font-bold text-white"><iconify-icon icon="solar:medal-ribbon-star-linear"></iconify-icon> BestLocal</div>
<div className="flex items-center justify-center gap-2 text-xl font-bold text-white"><iconify-icon icon="solar:cup-star-linear"></iconify-icon> FitLife</div>
<div className="flex items-center justify-center gap-2 text-xl font-bold text-white"><iconify-icon icon="solar:verified-check-linear"></iconify-icon> Verified</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950" id="how-it-works">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Fitness Made <span className="text-blue-500">Simple</span></h2>
<p className="text-neutral-400">We know starting is the hardest part. That's why we made our process incredibly simple and welcoming.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900 to-transparent z-0"></div>

<div className="relative z-10 bg-neutral-950 p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors group animate-on-scroll">
<div className="w-14 h-14 mx-auto bg-neutral-900 rounded-xl flex items-center justify-center text-blue-500 mb-6 shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="32" icon="solar:calendar-add-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white text-center mb-3">1. Book Intro</h3>
<p className="text-neutral-400 text-center text-sm leading-relaxed">Schedule a free 20-min chat. No workout gear needed, just a conversation about your goals.</p>
</div>

<div className="relative z-10 bg-neutral-950 p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors group animate-on-scroll" style={{animationDelay: '0.2s'}}>
<div className="w-14 h-14 mx-auto bg-neutral-900 rounded-xl flex items-center justify-center text-blue-500 mb-6 shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="32" icon="solar:clipboard-check-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white text-center mb-3">2. Get a Plan</h3>
<p className="text-neutral-400 text-center text-sm leading-relaxed">We'll build a roadmap that fits your schedule, experience level, and lifestyle.</p>
</div>

<div className="relative z-10 bg-neutral-950 p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors group animate-on-scroll" style={{animationDelay: '0.4s'}}>
<div className="w-14 h-14 mx-auto bg-neutral-900 rounded-xl flex items-center justify-center text-blue-500 mb-6 shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="32" icon="solar:dumbbell-large-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white text-center mb-3">3. Start Training</h3>
<p className="text-neutral-400 text-center text-sm leading-relaxed">Show up and follow the guidance. Our coaches ensure you're safe and making progress.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-y border-white/5" id="programs">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 animate-on-scroll">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Training Options</h2>
<p className="text-neutral-400">Whether you prefer 1-on-1 attention or the energy of a small group, we have a spot for you.</p>
</div>
<a className="text-blue-500 font-medium hover:text-blue-400 flex items-center gap-1 transition-colors" href="#trial">
          View Schedule <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group flex flex-col p-8 rounded-2xl bg-neutral-950 border border-white/10 hover:border-blue-500/50 transition-all duration-300 animate-on-scroll">
<div className="mb-6 p-3 bg-blue-900/20 w-fit rounded-lg text-blue-500">
<iconify-icon height="32" icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-2">Small Group Training</h3>
<p className="text-neutral-400 text-sm mb-6 flex-grow">Get personal coaching at a fraction of the cost. Groups are capped at 6 people to ensure quality.</p>
<ul className="space-y-3 mb-8 text-sm text-neutral-300">
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Structured Workouts</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Community Support</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Fun Atmosphere</li>
</ul>
<a className="w-full py-3 rounded-lg border border-white/10 text-center text-sm font-semibold hover:bg-white/5 transition-colors" href="#trial">Learn More</a>
</div>

<div className="group flex flex-col p-8 rounded-2xl bg-neutral-950 border border-blue-500/30 relative overflow-hidden transition-all duration-300 animate-on-scroll" style={{animationDelay: '0.1s'}}>
<div className="absolute top-0 right-0 px-3 py-1 bg-blue-600 text-xs font-bold text-white rounded-bl-lg">POPULAR</div>
<div className="mb-6 p-3 bg-blue-900/20 w-fit rounded-lg text-blue-500">
<iconify-icon height="32" icon="solar:user-id-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-2">Personal Training</h3>
<p className="text-neutral-400 text-sm mb-6 flex-grow">100% focused on you. Perfect for specific goals, injury rehabilitation, or learning proper form.</p>
<ul className="space-y-3 mb-8 text-sm text-neutral-300">
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Custom Programming</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Nutritional Guidance</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Flexible Scheduling</li>
</ul>
<a className="w-full py-3 rounded-lg bg-blue-600 text-white text-center text-sm font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20" href="#trial">Book Session</a>
</div>

<div className="group flex flex-col p-8 rounded-2xl bg-neutral-950 border border-white/10 hover:border-blue-500/50 transition-all duration-300 animate-on-scroll" style={{animationDelay: '0.2s'}}>
<div className="mb-6 p-3 bg-blue-900/20 w-fit rounded-lg text-blue-500">
<iconify-icon height="32" icon="solar:notebook-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-2">Intro Program</h3>
<p className="text-neutral-400 text-sm mb-6 flex-grow">A 6-week foundations course designed specifically for beginners to build confidence.</p>
<ul className="space-y-3 mb-8 text-sm text-neutral-300">
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Learn the Basics</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Low Intensity Start</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Educational Workshops</li>
</ul>
<a className="w-full py-3 rounded-lg border border-white/10 text-center text-sm font-semibold hover:bg-white/5 transition-colors" href="#trial">Learn More</a>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative animate-on-scroll order-2 lg:order-1">
<div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] lg:aspect-square">
<img alt="Coach smiling" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 right-6">
<p className="text-white font-bold text-lg">Coach Slater</p>
<p className="text-blue-400 text-sm">Founder &amp; Head Coach</p>
</div>
</div>
</div>
<div className="animate-on-scroll order-1 lg:order-2">
<div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-widest">Our Philosophy</div>
<h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">We're not here to yell at you.</h2>
<p className="text-lg text-neutral-300 mb-6 leading-relaxed">
            The fitness industry often makes people feel not "fit enough" to join. We built Slater Gym to be the antidote to that.
          </p>
<p className="text-lg text-neutral-300 mb-8 leading-relaxed">
            We don't care how much you lift. We care that you leave feeling better than when you walked in. Our coaches are mentors, not drill sergeants.
          </p>
<div className="grid grid-cols-2 gap-6">
<div>
<p className="text-3xl font-bold text-white">45min</p>
<p className="text-sm text-neutral-500">Average Session</p>
</div>
<div>
<p className="text-3xl font-bold text-white">0</p>
<p className="text-sm text-neutral-500">Judgement</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-t border-white/5" id="faq">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<div className="text-center mb-12 animate-on-scroll">
<h2 className="text-3xl font-bold text-white mb-4">Common Questions</h2>
<p className="text-neutral-400">Everything you need to know before you step inside.</p>
</div>
<div className="space-y-4 animate-on-scroll">

<details className="group bg-neutral-950 border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:border-blue-500/30">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors select-none">
<span>I haven't worked out in years. Is that okay?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-blue-500">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-neutral-400 text-sm leading-relaxed border-t border-transparent group-open:border-white/5 group-open:pt-4">
            Absolutely. Most of our members started exactly where you are. Our "Intro Program" is designed specifically to reintroduce you to movement safely, focusing on form first.
          </div>
</details>

<details className="group bg-neutral-950 border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:border-blue-500/30">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors select-none">
<span>Do I need to sign a long-term contract?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-blue-500">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-neutral-400 text-sm leading-relaxed border-t border-transparent group-open:border-white/5 group-open:pt-4">
            No. We believe you should stay because you want to, not because you have to. We offer flexible month-to-month memberships and session packs.
          </div>
</details>

<details className="group bg-neutral-950 border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:border-blue-500/30">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors select-none">
<span>What if I have an old injury?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-blue-500">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-neutral-400 text-sm leading-relaxed border-t border-transparent group-open:border-white/5 group-open:pt-4">
            Our coaches are trained to modify exercises. During your initial assessment, we'll discuss any limitations and build a plan that works around them while strengthening the surrounding areas.
          </div>
</details>

<details className="group bg-neutral-950 border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:border-blue-500/30">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors select-none">
<span>How long are the sessions?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-blue-500">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-neutral-400 text-sm leading-relaxed border-t border-transparent group-open:border-white/5 group-open:pt-4">
            Most sessions are 45-60 minutes. We value your time and design workouts to be efficient so you can get back to your life.
          </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative overflow-hidden" id="trial">
<div className="absolute inset-0 bg-blue-900/10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-neutral-950/50 to-neutral-950 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-on-scroll">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Your First Week is On Us.</h2>
<p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
        Come see if we're the right fit. No sales pressure, no obligation. Just a chance to see the facility and meet the team.
      </p>
<form className="max-w-md mx-auto space-y-4 bg-neutral-900/50 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
<div className="space-y-4">
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Your Name" type="text"/>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Email Address" type="email"/>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Phone Number" type="tel"/>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2" type="button">
          Claim Free Trial
          <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<p className="text-xs text-neutral-500 mt-4">We respect your privacy. No spam, ever.</p>
</form>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-3 mb-6" href="/">
<div className="flex bg-blue-600 w-8 h-8 rounded-lg items-center justify-center text-white">
<iconify-icon height="20" icon="solar:dumbbell-small-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="text-xl font-bold text-white">Slater<span className="text-blue-600">Gym</span></span>
</a>
<p className="text-neutral-500 text-sm max-w-sm mb-6 leading-relaxed">
            A different kind of gym. Structured training, supportive coaching, and a community that cheers for your success.
          </p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon height="24" icon="solar:instagram-linear" width="24"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon height="24" icon="solar:facebook-linear" width="24"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Programs</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-blue-500 transition-colors" href="#">Beginner Foundations</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Group Training</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Personal Coaching</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Nutrition Plans</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="flex items-center gap-2"><iconify-icon icon="solar:phone-calling-linear"></iconify-icon> (555) 123-4567</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> hello@slatergym.com</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:map-linear"></iconify-icon> 123 Main St, Metro City</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600">© 2024 Slater Fitness Club. All rights reserved.</p>
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<p className="text-xs text-green-500 font-medium">Open Now until 9:00 PM</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
