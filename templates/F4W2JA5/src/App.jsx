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



// Mobile menu toggle
document.getElementById('menuBtn').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('hidden');
});

// Scroll reveal animations
function reveal() {
  const reveals = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-reveal-blur');
  
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('revealed');
    }
  }
}

window.addEventListener('scroll', reveal);
reveal(); // Check on load

// Counter animations
function animateCounters() {
  const counters = document.querySelectorAll('[data-target]');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const prefix = counter.getAttribute('data-prefix') || '';
    const suffix = counter.getAttribute('data-suffix') || '';
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      counter.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
    }, duration / steps);
  });
}

// Trigger counter animation when hero stats section is visible
const observerStats = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      observerStats.unobserve(entry.target);
    }
  });
});

const heroStats = document.getElementById('hero-stats');
if (heroStats) {
  observerStats.observe(heroStats);
}

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

// Add scroll effect to navigation
let lastScrollTop = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    nav.style.transform = 'translateY(-100%)';
  } else {
    nav.style.transform = 'translateY(0)';
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
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
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="hQmuxsIsbhqg99eGrTZM"></div>
</div>

<nav className="glassmorphism fixed top-0 left-0 right-0 z-50 transition-transform duration-300" style={{transform: 'translateY(-100%)'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="scroll-reveal flex items-center space-x-3 revealed">
<svg fill="none" height="36" viewbox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg">
<path d="M16.2932 11.9774C16.1759 9.03514 18.1298 4.66446 18.1298 4.66446C15.4936 4.64047 12.9105 5.40303 10.718 6.82939L10.7286 6.83318C9.57413 9.97876 9.03203 12.5087 9.30055 16.1502C9.57132 19.8221 12.8069 24.2667 12.8069 24.2667L12.8151 24.289C13.2392 24.0337 13.6347 23.7625 13.9746 23.4789C16.0131 21.7779 18.0004 18.0004 18.0004 18.0004C18.0004 18.0004 16.3906 14.4202 16.2932 11.9774Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M16.4666 9.98601C16.4666 9.98601 21.596 9.33699 26 11.3334C28.1175 12.2933 29.7798 13.6204 30.9149 14.7107L30.92 14.7029C31.6572 17.5844 31.4396 20.7292 30.0845 23.6352C30.0845 23.6352 27.7107 19.586 25.1694 18.401C22.6281 17.2159 18.0004 18.0004 18.0004 18.0004C18.0004 18.0004 16.3905 14.4202 16.2932 11.9773C16.2684 11.3573 16.3357 10.6738 16.4573 9.98113L16.4666 9.98601Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M13.9746 23.4789C11.8918 25.2168 7.71515 26.4899 7.71515 26.4899C8.93912 27.9749 10.5052 29.217 12.3655 30.0844C12.8609 30.3154 13.3632 30.5134 13.8699 30.6791C14.0151 30.6328 14.1603 30.5864 14.3053 30.5399C15.133 30.2741 15.9575 30.0014 16.7635 29.6829C18.3761 29.046 19.9175 28.2253 21.2715 26.9077C22.5979 25.6171 23.8898 23.6366 24.8487 21.9828C25.3286 21.1552 25.7258 20.4079 26.0032 19.8676C26.1418 19.5974 26.2505 19.3789 26.3246 19.2279L26.3599 19.1556C25.9732 18.8502 25.5735 18.5894 25.1695 18.401C22.6281 17.2159 18.0004 18.0003 18.0004 18.0003C18.0004 18.0003 16.0131 21.7778 13.9746 23.4789Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M18.1298 4.66446C18.1298 4.66446 16.1759 9.03514 16.2932 11.9774C16.3906 14.4202 18.0004 18.0004 18.0004 18.0004C18.0004 18.0004 16.0131 21.7779 13.9746 23.4789C11.8918 25.2168 7.7151 26.49 7.7151 26.49C4.54807 22.6477 3.67169 17.1791 5.91629 12.3655C8.19652 7.47555 13.0649 4.61836 18.1298 4.66446Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M18.0004 18.0004C18.0004 18.0004 16.3905 14.4202 16.2932 11.9773C16.1759 9.03508 18.1298 4.6644 18.1298 4.6644C19.9775 4.68122 21.8514 5.08435 23.6353 5.91619C30.3092 9.02827 33.1966 16.9613 30.0845 23.6352C30.0845 23.6352 27.7107 19.586 25.1694 18.401C22.6281 17.2159 18.0004 18.0004 18.0004 18.0004Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M7.71515 26.4899C7.71515 26.4899 11.8918 25.2168 13.9746 23.4789C16.0131 21.7778 18.0004 18.0003 18.0004 18.0003C18.0004 18.0003 22.6281 17.2159 25.1695 18.401C27.7108 19.586 30.0845 23.6352 30.0845 23.6352C26.9725 30.3091 19.0394 33.1965 12.3655 30.0844C10.5052 29.217 8.93912 27.9749 7.71515 26.4899Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-lg font-medium text-white tracking-tight">Intel</span>
</div>
<div className="scroll-reveal stagger-1 hidden md:flex items-center space-x-8 revealed">
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#intelligence">Intelligence</a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#automation">Automation</a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#platforms">Platforms</a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#testimonials">Success</a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="scroll-reveal stagger-2 flex items-center space-x-4 revealed">
<button className="group relative inline-flex items-center justify-center min-w-[120px] cursor-pointer rounded-xl px-[17px] py-[12px] text-white/70 tracking-tight font-semibold transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(71,81,92,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="relative z-10 font-normal">Get Started</span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
<button className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors" id="menuBtn">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-white/10 bg-black/90 backdrop-blur-xl" id="mobileMenu">
<div className="px-4 py-6 space-y-4">
<a className="block text-base font-normal text-gray-400 hover:text-white" href="#intelligence">Intelligence</a>
<a className="block text-base font-normal text-gray-400 hover:text-white" href="#automation">Automation</a>
<a className="block text-base font-normal text-gray-400 hover:text-white" href="#solutions">Solutions</a>
<a className="block text-base font-normal text-gray-400 hover:text-white" href="#platforms">Platforms</a>
<a className="block text-base font-normal text-gray-400 hover:text-white" href="#testimonials">Success</a>
<a className="block text-base font-normal text-gray-400 hover:text-white" href="#pricing">Pricing</a>
<a className="block text-base font-normal text-gray-400 hover:text-white" href="#contact">Contact</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient grid-pattern">
<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-20 left-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl floating"></div>
<div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl floating" style={{animationDelay: '-2s'}}></div>
<div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl floating" style={{animationDelay: '-4s'}}></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
<div className="text-center">
<div className="scroll-reveal inline-flex glow bg-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 backdrop-blur-none space-x-2 items-center revealed">
<div className="flex w-5 h-5 pulse-glow bg-[#ffffff]/20 rounded-full items-center justify-center">
<svg className="w-[12px] h-[12px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '12px', height: '12px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path className="" d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-sm font-medium text-gray-300">Introducing Radison Intelligence Platform v2.0</span>
</div>
<h1 className="scroll-reveal stagger-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-none mb-6 revealed">
        Intelligence<br/>
<span className="inline-block font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Amplified</span>
</h1>
<p className="scroll-reveal stagger-2 max-w-2xl mx-auto text-lg md:text-xl font-light text-gray-300 leading-relaxed mb-10 revealed">
        Transform your business with AI that thinks, learns, and evolves. Built for visionaries who dare to reimagine what's possible in the age of intelligent automation.
      </p>
<div className="scroll-reveal stagger-3 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-6 mb-16 space-y-4 items-center justify-center revealed">
<a className="relative inline-flex items-center gap-2 hover:scale-105 transition-all duration-200 group text-base font-medium text-white rounded-xl px-8 py-4" href="#">
<span className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full"></span>
<span className="absolute inset-0 ring-1 ring-emerald-400/40 group-hover:ring-emerald-400/60 transition-all rounded-full"></span>
<span className="relative">Explore Intelligence</span>
<svg className="lucide lucide-chevrons-right relative group-hover:translate-x-1 transition-transform w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button className="inline-flex items-center space-x-2 px-8 py-4 text-base font-medium text-gray-300 hover:text-white transition-colors border border-white/20 rounded-full hover:border-white/40 hover:bg-white/5">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Watch Live Demo</span>
</button>
</div>

<div className="scroll-reveal stagger-4 grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 revealed" id="hero-stats">
<div className="text-center">
<div className="text-3xl md:text-4xl font-light text-white mb-2" data-suffix="" data-target="2847">2,847</div>
<div className="text-sm text-gray-400">Companies Transformed</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-light text-white mb-2" data-suffix="%" data-target="247">247%</div>
<div className="text-sm text-gray-400">Efficiency Increase</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-light text-white mb-2" data-prefix="$" data-suffix="M" data-target="127">$127M</div>
<div className="text-sm text-gray-400">Cost Savings</div>
</div>
<div className="text-center">
<div className="md:text-4xl text-3xl font-light text-white mb-2" data-suffix="" data-target="43">43</div>
<div className="text-sm text-gray-400">Countries Served</div>
</div>
</div>

<div className="relative sm:mt-16 max-w-7xl mt-12 mb-12">
<div className="scroll-reveal-blur relative overflow-hidden bg-neutral-900/70 border-neutral-700 border rounded-3xl mr-24 ml-24 shadow-xl backdrop-blur-xl revealed" style={{background: 'rgba(17, 17, 17, 0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(64, 64, 64, 0.35)'}}>
<div className="sm:p-10 pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<h3 className="text-2xl font-semibold tracking-tight text-white">Private by Design</h3>
<span className="inline-flex items-center gap-2 text-[10px] sm:text-xs text-neutral-300 bg-white/5 border border-white/10 rounded-full px-2.5 py-1">
<svg className="text-green-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path className="" d="m9 12 2 2 4-4"></path>
</svg>
                Secure workspace
              </span>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

<div className="relative rounded-2xl border border-white/10 bg-neutral-900/60 ring-1 ring-inset ring-white/5 overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-neutral-200">Meeting participants</span>
</div>
<span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-green-300 bg-green-500/10 border border-green-500/20 rounded-full px-2 py-0.5">
<svg className="" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path className="" d="m9 12 2 2 4-4"></path>
</svg>
                    No bots detected
                  </span>
</div>
<ul className="px-3 py-3 space-y-2">
<li className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover flex-shrink-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/930ce830-f688-4032-a702-85ace409705c_320w.jpg"/>
<div className="min-w-0">
<p className="text-sm font-medium text-white truncate">Gina Huels <span className="text-neutral-400">(You)</span></p>
<p className="text-xs text-neutral-400 truncate">ginahue65@cluely.com</p>
</div>
</div>
<span className="text-xs text-neutral-300 flex-shrink-0">Owner</span>
</li>
<li className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover flex-shrink-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b68a95ca-4fdd-41bf-aefb-1660e692fa1b_800w.jpg"/>
<div className="min-w-0">
<p className="text-sm font-medium text-white truncate">Todd Cremin</p>
<p className="text-xs text-neutral-400 truncate">todd.cremin@cluely.com</p>
</div>
</div>
<span className="text-xs text-neutral-300 flex-shrink-0">Speaker</span>
</li>
<li className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover flex-shrink-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c3ae0316-44d1-4d54-9a99-512d40bd9537_320w.jpg"/>
<div className="min-w-0">
<p className="text-sm font-medium text-white truncate">Holly Gleason</p>
<p className="text-xs text-neutral-400 truncate">holly_gleaso1972@cluely.com</p>
</div>
</div>
<span className="text-xs text-neutral-300 flex-shrink-0">Speaker</span>
</li>
<li className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover flex-shrink-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f52b9e1e-c3e8-4844-b3c5-28aacdc6b434_800w.jpg"/>
<div className="min-w-0">
<p className="text-sm font-medium text-white truncate">Tomas Hansen</p>
<p className="text-xs text-neutral-400 truncate">tomas_hansen@cluely.com</p>
</div>
</div>
<span className="text-xs text-neutral-300 flex-shrink-0">Speaker</span>
</li>
</ul>
<div className="px-4 py-3 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M9 12l2 2 4-4"></path>
<path className="" d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
<path className="" d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
</svg>
                    Auto‑redacted
                  </div>
<div className="text-xs text-neutral-400">Guest list stays clean</div>
</div>
</div>

<div className="relative ring-1 ring-inset ring-white/5 overflow-hidden bg-neutral-900/60 border-white/10 border rounded-2xl">
<div className="relative h-64">

<div className="absolute inset-0 bg-neutral-950/70">
<div className="h-full p-4">
<div className="rounded-lg bg-neutral-900/90 border border-white/10 h-full overflow-hidden">

<div className="px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-red-500/80"></span>
<span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
<span className="h-3 w-3 rounded-full bg-green-500/80"></span>
</div>
<span className="text-[11px] text-neutral-400 ml-2">src/services/userService.js</span>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-neutral-400 bg-white/5 rounded px-2 py-1">TypeScript</span>
<span className="text-[10px] text-green-400">●</span>
</div>
</div>

<div className="p-4 text-[11px] leading-relaxed font-medium overflow-auto">
<pre className="text-[11px] text-neutral-300"><code className="language-typescript">// Secure user data management service
import { encrypt, validateAccess } from '../utils/security';
import { AuditLogger } from '../logging/audit';

interface UserProfile {
  id: string;
  email: string;
  permissions: string[];
  lastAccess: Date;
}

class UserService {
  private auditLog = new AuditLogger('UserService');

  async fetchUserProfile(userId: string): Promise&lt;UserProfile&gt; {
    // Log access attempt
    this.auditLog.info('User profile access', { userId });
    
    try {
      // Validate permissions
      await validateAccess(userId);
      
      const response = await fetch(`/api/v1/users/${userId}`, {
        headers: {
          'Authorization': `Bearer ${this.getSecureToken()}`,
          'X-Request-ID': this.generateRequestId()
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const userData = await response.json();
      
      // Encrypt sensitive data before storage
      return {
        ...userData,
        email: encrypt(userData.email),
        permissions: userData.permissions || []
      };
      
    } catch (error) {
      this.auditLog.error('Profile fetch failed', { userId, error });
      throw error;
    }
  }

  private getSecureToken(): string {
    return localStorage.getItem('auth_token') || '';
  }

  private generateRequestId(): string {
    return crypto.randomUUID();
  }
}

export default new UserService();</code></pre>
</div>
</div>
</div>
</div>
</div>

<div className="px-4 py-3 border-t border-white/10 bg-gradient-to-r from-neutral-950/50 to-neutral-900/30">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="truncate">Enterprise-grade security &amp; encryption</span>
</div>
<div className="h-3 w-px bg-white/20"></div>
<div className="flex items-center gap-1.5 text-xs text-emerald-400">
<div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
<span>Real-time monitoring active</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-neutral-400 bg-white/5 rounded px-2 py-1">47 lines</span>
<span className="text-[10px] text-neutral-400">TypeScript</span>
</div>
</div>
</div>
</div>

<div className="relative rounded-2xl border border-white/10 bg-neutral-900/60 ring-1 ring-inset ring-white/5 overflow-hidden">
<div className="relative h-56">
<img alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1a8a6a2b-b092-45fa-8841-49e21aad6579_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 to-pink-500/20 mix-blend-overlay"></div>

<div className="absolute right-4 top-4 w-32 sm:w-40 rounded-xl bg-neutral-900/70 border border-white/10 backdrop-blur p-3 shadow-sm">
<div className="flex items-center gap-2 text-xs font-medium text-neutral-200">
<svg className="text-blue-400 flex-shrink-0" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
<span className="truncate">AI Response</span>
</div>
<div className="mt-2 space-y-1.5">
<div className="h-1.5 w-full max-w-28 rounded bg-white/20"></div>
<div className="h-1.5 w-full max-w-24 rounded bg-white/10"></div>
<div className="h-1.5 w-full max-w-20 rounded bg-white/10"></div>
</div>
</div>

<div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex items-center gap-2">
<div className="rounded-xl bg-neutral-900/70 border border-white/10 backdrop-blur px-2 py-1.5 flex items-center gap-1.5">
<span className="text-[10px] text-neutral-300 rounded-lg bg-white/5 border border-white/10 px-2 py-1">⌘</span>
<span className="text-[10px] text-neutral-300 hidden sm:inline">command</span>
</div>
<div className="rounded-xl bg-neutral-900/70 border border-white/10 backdrop-blur px-2 py-1.5 flex items-center gap-1">
<span className="text-[10px] text-neutral-300 rounded-lg bg-white/5 border border-white/10 px-2 py-1">↑</span>
<span className="text-[10px] text-neutral-300 rounded-lg bg-white/5 border border-white/10 px-2 py-1">↓</span>
<span className="text-[10px] text-neutral-300 rounded-lg bg-white/5 border border-white/10 px-2 py-1">→</span>
</div>
</div>
</div>
<div className="px-4 py-3 border-t border-white/10 flex items-center gap-2 text-xs text-neutral-400">
<svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="16" rx="2" width="20" x="2" y="4"></rect>
<path className="" d="M10 4v4"></path>
<path className="" d="M2 8h20"></path>
<path className="" d="M6 4v4"></path>
</svg>
<span className="truncate">Translucent, hideable overlay</span>
</div>
</div>
</div>

<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="">
<h4 className="text-lg font-semibold tracking-tight text-white">Doesn't join meetings</h4>
<p className="mt-2 text-sm text-neutral-400">There are no bots and no extra guests. Your sessions stay clean and focused.</p>
</div>
<div className="">
<h4 className="text-lg font-semibold tracking-tight text-white">Invisible to screen share</h4>
<p className="mt-2 text-sm text-neutral-400">It never shows up in shared screens, recordings, or external tools.</p>
</div>
<div className="">
<h4 className="text-lg font-semibold tracking-tight text-white">Never in your way</h4>
<p className="mt-2 text-sm text-neutral-400">Appears as a lightweight window you can move, fade, or hide anytime.</p>
</div>
</div>

<div className="mt-6">
<a className="inline-flex items-center gap-2 text-xs font-medium text-neutral-100 hover:text-neutral-300" href="#">
                Explore privacy features
                <svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-zinc-950 pt-20 pb-20" id="intelligence">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16">
<div className="scroll-reveal inline-flex glow bg-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 backdrop-blur-none space-x-2 items-center revealed">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path className="" d="M12 8h8"></path><path className="" d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
<span className="text-sm font-medium text-[#ffffff]">Advanced Intelligence Core</span>
</div>
<h2 className="scroll-reveal stagger-1 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-6 revealed">
        Think beyond<br/>
<span className="inline-block font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">conventional automation</span>
</h2>
<p className="scroll-reveal stagger-2 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed revealed">
        Our AI doesn't just follow rules—it understands context, learns from patterns, and makes intelligent decisions that evolve with your business needs in real-time.
      </p>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
<div className="scroll-reveal-left revealed">
<div className="space-y-8">
<div className="scroll-reveal stagger-1 flex items-start space-x-4 p-6 rounded-2xl bg-zinc-900/30 border border-white/10 hover:border-green-300/30 transition-colors neon-border revealed">
<div className="flex w-12 h-12 glow bg-[#ffffff]/20 border-[#ffffff]/30 border rounded-xl pr-3 pl-3 items-center justify-center">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4"></path><circle className="" cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="">
<h4 className="text-xl font-medium text-white mb-2">Contextual Understanding</h4>
<p className="text-gray-400 leading-relaxed">Advanced neural networks that comprehend nuance, interpret complex scenarios, and adapt to changing business requirements with human-like intelligence.</p>
</div>
</div>
<div className="scroll-reveal stagger-2 flex items-start space-x-4 p-6 rounded-2xl bg-zinc-900/30 border border-white/10 hover:border-green-300/30 transition-colors revealed">
<div className="flex w-12 h-12 glow bg-[#ffffff]/20 border-[#ffffff]/30 border rounded-xl pr-3 pl-3 items-center justify-center">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 20V10"></path><path className="" d="M12 20V4"></path><path d="M6 20v-6"></path></svg>
</div>
<div className="">
<h4 className="text-xl font-medium text-white mb-2">Continuous Learning</h4>
<p className="text-gray-400 leading-relaxed">Self-improving systems that enhance performance through experience, identifying patterns and optimizing processes without manual intervention.</p>
</div>
</div>
<div className="scroll-reveal stagger-3 flex items-start space-x-4 p-6 rounded-2xl bg-zinc-900/30 border border-white/10 hover:border-green-300/30 transition-colors revealed">
<div className="flex w-12 h-12 glow bg-[#ffffff]/20 border-[#ffffff]/30 border rounded-xl pr-3 pl-3 items-center justify-center">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
</div>
<div className="">
<h4 className="text-xl font-medium text-white mb-2">Predictive Insights</h4>
<p className="text-gray-400 leading-relaxed">Anticipate future needs and market trends before they materialize, enabling proactive decision-making and strategic advantage.</p>
</div>
</div>
</div>
</div>
<div className="scroll-reveal-right revealed">
<div className="relative">
<div className="overflow-hidden glow border-white/10 border rounded-3xl shadow-2xl">
<img alt="AI Intelligence Visualization" className="w-full h-96 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6dc04406-de49-4988-8d82-e1d9fe1d83c1_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="text-sm text-gray-300 mb-2">Real-time Processing</div>
<div className="w-full bg-white/20 rounded-full h-2 mb-4 overflow-hidden">
<div className="h-2 transition-all duration-2000 ease-out bg-gradient-to-t from-green-400 to-green-200 rounded-full" style={{width: '0%', animation: 'progressFill 3s ease-out forwards'}}></div>
</div>
<div className="text-xs text-gray-400">Advanced neural networks processing <span className="counter" data-target="10">0</span>M+ data points per second</div>
<style>
                @keyframes progressFill {
                  0% { width: 0%; }
                  100% { width: 75%; }
                }
              </style>
</div>
</div>
<div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-indigo-600 to-purple-800 rounded-2xl opacity-30 blur-xl floating"></div>
<div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-pink-600 to-red-700 rounded-2xl opacity-30 blur-xl floating" style={{animationDelay: '-2s'}}></div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="scroll-reveal stagger-2 card-hover group revealed">
<div className="scroll-reveal stagger-1 group sm:p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl revealed bg-zinc-900 border-zinc-800 border rounded-3xl mt-0 pt-8 pr-8 pb-8 pl-8 space-y-3">
<div className="flex w-12 h-12 glow bg-[#ffffff]/20 border-[#ffffff]/30 border rounded-xl pr-3 pl-3 items-center justify-center">
<svg className="w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Natural Language Processing</h3>
<p className="text-gray-400 leading-relaxed">Advanced language models that understand context, sentiment, and intent across multiple languages and dialects.</p>
</div>
</div><div className="scroll-reveal stagger-2 card-hover group revealed">
<div className="scroll-reveal stagger-1 group sm:p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl revealed bg-zinc-900 border-zinc-800 border rounded-3xl mt-0 pt-8 pr-8 pb-8 pl-8 space-y-3">
<div className="flex w-12 h-12 glow bg-[#ffffff]/20 border-[#ffffff]/30 border rounded-xl pr-3 pl-3 items-center justify-center">
<svg className="w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Adaptive Workflows</h3>
<p className="leading-relaxed text-gray-400">Intelligent process automation that adapts to changing conditions and optimizes itself for maximum efficiency.</p>
</div>
</div><div className="scroll-reveal stagger-2 card-hover group revealed">
<div className="scroll-reveal stagger-1 group sm:p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl revealed bg-zinc-900 border-zinc-800 border rounded-3xl mt-0 pt-8 pr-8 pb-8 pl-8 space-y-3">
<div className="flex w-12 h-12 glow bg-[#ffffff]/20 border-[#ffffff]/30 border rounded-xl pr-3 pl-3 items-center justify-center">
<svg className="w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Advanced Security</h3>
<p className="leading-relaxed text-gray-400">Military-grade encryption with AI-powered threat detection and automated security response protocols.</p>
</div>
</div>
<div className="scroll-reveal stagger-3 card-hover group revealed">
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-black pt-20 pb-20" id="automation">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="scroll-reveal inline-flex glow bg-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm space-x-2 items-center revealed">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<span className="text-sm font-medium text-[#ffffff]">Intelligent Automation Suite</span>
</div>
<h2 className="scroll-reveal stagger-1 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-6 revealed">
        Workflows that<br/>
<span className="inline-block font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">think for themselves</span>
</h2>
<p className="scroll-reveal stagger-2 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed revealed">
        Experience automation that goes beyond simple triggers—intelligent systems that understand your business context and make decisions like your most experienced team members.
      </p>
</div>

<div className="scroll-reveal-blur mb-20 revealed">
<div className="group sm:p-6 bg-zinc-900 border-zinc-800 border rounded-3xl mt-6 pt-6 pr-6 pb-6 pl-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl">
<div className="pt-0 pr-0 pb-0 pl-0">
<div className="flex mb-6 items-center justify-between">
<h3 className="text-xl font-medium text-white">Live Automation Dashboard</h3>
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
<span className="text-sm text-gray-400">Real-time Processing</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-black/40 rounded-2xl p-6 border border-white/10">
<div className="flex items-center justify-between mb-4">
<h4 className="text-white font-medium">Task Processing</h4>
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path className="" d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<div className="text-3xl font-light text-white mb-2" id="tasks-processed">15,847</div>
<p className="text-sm text-gray-400">Tasks completed today</p>
<div className="mt-4 h-2 bg-white/10 rounded-full">
<div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style={{width: '78%'}}></div>
</div>
</div>
<div className="bg-black/40 rounded-2xl p-6 border border-white/10">
<div className="flex items-center justify-between mb-4">
<h4 className="text-white font-medium">Efficiency Gain</h4>
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="text-3xl font-light text-white mb-2">247%</div>
<p className="text-sm text-gray-400">Productivity increase</p>
<div className="mt-4 h-2 bg-white/10 rounded-full">
<div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style={{width: '95%'}}></div>
</div>
</div>
<div className="bg-black/40 rounded-2xl p-6 border border-white/10">
<div className="flex items-center justify-between mb-4">
<h4 className="text-white font-medium">Cost Savings</h4>
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path className="" d="M12 6v6l4 2"></path></svg>
</div>
<div className="text-3xl font-light text-white mb-2">$2.4M</div>
<p className="text-sm text-gray-400">Saved this quarter</p>
<div className="mt-4 h-2 bg-white/10 rounded-full">
<div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style={{width: '68%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="scroll-reveal stagger-1 group sm:p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl bg-zinc-900 border-zinc-800 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6 revealed">
<div className="sm:p-6 md:p-8 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
<h3 className="text-xl font-medium text-white mb-3">Intelligent Communication</h3>
<p className="text-gray-400 leading-relaxed">AI-powered conversation flows that understand context, sentiment, and respond with human-like intelligence across all communication channels.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-white/20">
<img alt="Private dining room" className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70c9e818-8e08-4e5c-ae2f-4fc0f3b2b30e_800w.jpg"/>
</div>
</div>
<div className="flex text-sm text-[#ffffff] mt-6 items-center">
<span className="">Learn more</span>
<svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
<div className="scroll-reveal stagger-2 group sm:p-8 bg-zinc-900 border-zinc-800 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl revealed">
<div className="sm:p-6 md:p-8 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
<h3 className="text-xl font-medium text-white mb-3">Smart Data Intelligence</h3>
<p className="leading-relaxed text-gray-400">Transform raw data into actionable insights with AI that identifies patterns, predicts outcomes, and uncovers hidden business opportunities.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-white/20">
<img alt="Private dining room" className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/40da0c82-6e2f-4b70-a7b5-0498f0e7f525_800w.jpg"/>
</div>
</div>
<div className="flex text-sm text-[#ffffff] mt-6 items-center">
<span className="">Learn more</span>
<svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
<div className="scroll-reveal stagger-3 group sm:p-8 bg-zinc-900 border-zinc-800 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl revealed">
<div className="sm:p-6 md:p-8 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
<h3 className="text-xl font-medium text-white mb-3">Lightning Performance</h3>
<p className="leading-relaxed text-gray-400">Experience sub-200ms response times with our optimized AI processing engines and edge computing infrastructure worldwide.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-white/20">
<img alt="Private dining room" className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/562ccd5e-2c33-4a35-9897-6bc64b012fca_800w.jpg"/>
</div>
</div>
<div className="flex text-sm text-[#ffffff] mt-6 items-center">
<span className="">Learn more</span>
<svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-zinc-950 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c66be9d4-d504-42e3-b028-2573e4293134_3840w.jpg)] bg-cover pt-20 pb-20" id="platforms">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<div className="scroll-reveal inline-flex glow bg-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm space-x-2 items-center revealed">
<svg className="w-[16px] h-[16px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path className="" d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path className="" d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span className="text-sm font-medium text-[#ffffff]">Unified Intelligence Ecosystem</span>
</div>
<h2 className="scroll-reveal stagger-1 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-8 revealed">
        One platform.<br/>
<span className="inline-block font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Infinite possibilities</span>
</h2>
<p className="scroll-reveal stagger-2 max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed mb-12 revealed">
        Connect every tool, automate every workflow, and amplify every decision with our comprehensive AI ecosystem that grows with your business.
      </p>

<div className="scroll-reveal stagger-3 max-w-4xl mx-auto mb-16 revealed">
<div className="bg-white/5 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl space-x-0">
<div className="grid md:grid-cols-3 gap-8">
<div className="text-center">
<div className="w-16 h-16 flex bg-white/10 border-white/20 border rounded-none mx-auto mb-4 shadow-lg backdrop-blur-xl items-center justify-center" style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
<svg className="w-8 h-8 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h4 className="text-white font-semibold text-lg mb-2">Lightning Setup</h4>
<p className="text-gray-400 text-sm">Deploy in minutes, not months with pre-built connectors</p>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto mb-4 shadow-lg flex items-center justify-center bg-white/10 border border-white/20 backdrop-blur-xl" style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
<svg className="w-8 h-8 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>
</div>
<h4 className="text-white font-semibold text-lg mb-2">Universal Sync</h4>
<p className="text-gray-400 text-sm">Real-time data synchronization across all platforms</p>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto mb-4 shadow-lg flex items-center justify-center bg-white/10 border border-white/20 backdrop-blur-xl" style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
<svg className="w-8 h-8 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M9 12l2 2 4-4"></path><path d="M21 12c-1.5 0-3-1-3-3s1.5-3 3-3 3 1 3 3-1.5 3-3 3"></path><path d="M3 12c1.5 0 3-1 3-3s-1.5-3-3-3-3 1-3 3 1.5 3 3 3"></path><path d="M12 3c0 1.5-1 3-3 3s-3-1.5-3-3 1-3 3-3 3 1.5 3 3"></path><path d="M12 21c0-1.5 1-3 3-3s3 1.5 3 3-1 3-3 3-3-1.5-3-3"></path></svg>
</div>
<h4 className="text-white font-semibold text-lg mb-2">Smart Scale</h4>
<p className="text-gray-400 text-sm">Auto-scales with your business growth and demands</p>
</div>
</div>
</div>
</div>
</div>

<div className="scroll-reveal revealed text-center border-0 rounded-none pt-8 pr-8 pb-8 pl-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="">
<div className="text-3xl font-light text-white mb-2">200+</div>
<div className="text-sm text-gray-400">Native Integrations</div>
</div>
<div>
<div className="text-3xl font-light text-white mb-2">&lt;5min</div>
<div className="text-sm text-gray-400">Average Setup</div>
</div>
<div className="">
<div className="text-3xl font-light text-white mb-2">99.9%</div>
<div className="text-sm text-gray-400">Sync Reliability</div>
</div>
<div className="">
<div className="text-3xl font-light text-white mb-2">24/7</div>
<div className="text-sm text-gray-400">Real-time Sync</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-black pt-20 pb-20" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="scroll-reveal inline-flex glow bg-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm space-x-2 items-center revealed">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle className="" cx="4" cy="20" r="2"></circle></svg>
<span className="text-sm font-medium text-[#ffffff]">Success Stories</span>
</div>
<h2 className="scroll-reveal stagger-1 md:text-4xl lg:text-5xl text-3xl font-light text-white tracking-tight mb-6 revealed">
        Transforming businesses<br/>
<span className="inline-block font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">worldwide</span>
</h2>
<p className="scroll-reveal stagger-2 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed revealed">
        See how industry leaders are revolutionizing their operations and achieving unprecedented growth with Radison's AI platform.
      </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
<div className="scroll-reveal stagger-1 group sm:p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl bg-zinc-900 border-zinc-800 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6 revealed">
<div className="flex items-center mb-6">
<img alt="CEO Portrait" className="w-12 h-12 rounded-full mr-4 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e7518623-5aeb-4f28-bace-436a99f814d4_320w.jpg"/>
<div>
<h4 className="text-white font-medium">Marcus Chen</h4>
<p className="text-gray-400 text-sm">CEO, TechFlow Industries</p>
</div>
</div>
<blockquote className="text-gray-300 leading-relaxed mb-6">
          "Radison transformed our entire customer support operation. We've seen a 340% increase in resolution speed and our customer satisfaction scores have never been higher."
        </blockquote>
<div className="flex items-center text-sm text-ffffff">
<span className="mr-2">Results:</span>
<span className="text-white">340% faster resolution</span>
</div>
</div>
<div className="scroll-reveal stagger-2 group sm:p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl bg-zinc-900 border-zinc-800 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6 revealed">
<div className="flex items-center mb-6">
<img alt="CEO Portrait" className="w-12 h-12 object-cover rounded-full mr-4" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b27be68c-e516-49e4-9fb5-dccbfd5d5fee_320w.jpg"/>
<div className="">
<h4 className="font-medium text-white">Sarah Mitchell</h4>
<p className="text-sm text-gray-400">CTO, DataVault Corp</p>
</div>
</div>
<blockquote className="text-gray-300 leading-relaxed mb-6">
          "The predictive analytics capabilities are game-changing. Radison helps us anticipate system failures before they happen, reducing downtime by 85% and saving millions annually."
        </blockquote>
<div className="flex items-center text-sm text-ffffff">
<span className="mr-2">Results:</span>
<span className="text-white">85% less downtime</span>
</div>
</div>
<div className="scroll-reveal stagger-3 group sm:p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl bg-zinc-900 border-zinc-800 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6 revealed">
<div className="flex items-center mb-6">
<img alt="CEO Portrait" className="w-12 h-12 object-cover rounded-full mr-4" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/13a5581f-35ac-4b9e-ae7c-47573e09ab8e_320w.jpg"/>
<div className="">
<h4 className="font-medium text-white">David Rodriguez</h4>
<p className="text-sm text-gray-400">COO, GlobalMart</p>
</div>
</div>
<blockquote className="text-gray-300 leading-relaxed mb-6">
          "Implementing Radison across our supply chain was the best decision we made this year. Inventory optimization improved by 180% and our procurement costs dropped significantly."
        </blockquote>
<div className="flex items-center text-sm text-ffffff">
<span className="mr-2">Results:</span>
<span className="text-white">180% better optimization</span>
</div>
</div>
</div>

<div className="scroll-reveal-blur revealed">
<div className="bg-zinc-900/50 rounded-3xl border border-white/10 overflow-hidden backdrop-blur-sm glow">
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-zinc-950" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="scroll-reveal inline-flex glow bg-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm space-x-2 items-center revealed">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"><path className="" d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></circle></svg>
<span className="text-sm font-medium text-[#ffffff]">Flexible Pricing</span>
</div>
<h2 className="scroll-reveal stagger-1 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-6 revealed">
        Scale with<br/>
<span className="inline-block font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">confidence</span>
</h2>
<p className="scroll-reveal stagger-2 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed revealed">
        Choose the plan that fits your needs. Start small and scale up as your business grows, with no hidden fees or surprise charges.
      </p>
</div>

<div className="grid md:grid-cols-3 gap-8">

<div className="scroll-reveal stagger-1 bg-zinc-900/50 rounded-2xl p-8 border border-white/10 backdrop-blur-sm revealed">
<div className="mb-8">
<h3 className="text-xl font-medium text-white mb-2">Starter</h3>
<p className="text-gray-400 mb-6">Perfect for small teams getting started with AI automation</p>
<div className="flex items-baseline mb-6">
<span className="text-3xl font-light text-white">$99</span>
<span className="text-gray-400 ml-2">/month</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-gray-300">
<svg className="w-4 h-4 text-emerald-400 mr-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Up to 1,000 monthly operations
            </li>
<li className="flex items-center text-sm text-gray-300">
<svg className="w-4 h-4 text-emerald-400 mr-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              5 team members included
            </li>
<li className="flex items-center text-sm text-gray-300">
<svg className="w-4 h-4 text-emerald-400 mr-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Basic AI assistant
            </li>
<li className="flex items-center text-sm text-gray-300">
<svg className="w-4 h-4 text-emerald-400 mr-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Email support
            </li>
<li className="flex items-center text-sm text-gray-300">
<svg className="w-4 h-4 text-emerald-400 mr-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Core integrations
            </li>
</ul>
<button className="w-full py-3 px-6 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 hover:border-white/40 transition-all duration-200">
            Get Started
          </button>
</div>
</div>

<div className="scroll-reveal stagger-2 relative bg-zinc-900/50 border-emerald-400/30 border rounded-2xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm hover:shadow-[inset_0_0_20px_rgba(16,185,129,0.3)] revealed" style={{transition: 'box-shadow 0.3s ease'}}>
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<span className="bg-emerald-500 text-black text-xs font-medium px-3 py-1 rounded-full">Most Popular</span>
</div>
<div className="mb-8">
<h3 className="text-xl font-medium text-white mb-2">Professional</h3>
<p className="text-gray-400 mb-6">Ideal for growing businesses with advanced automation needs</p>
<div className="flex items-baseline mb-6">
<span className="text-3xl font-light text-white">$299</span>
<span className="text-gray-400 ml-2">/month</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-gray-300">
<svg className="w-4 h-4 text-emerald-400 mr-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Up to 10,000 monthly operations
            </li>
<li className="flex items-center text-sm text-gray-300">
<svg className="w-4 h-4 text-emerald-400 mr-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              25 team members included
            </li>
<li className="flex items-center text-sm text-gray-300">
<svg className="w-4 h-4 text-emerald-400 mr-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Advanced AI with learning
            </li>
<li className="flex items-center text-sm text-gray-300">
<svg className="w-4 h-4 text-emerald-400 mr-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Priority support &amp; chat
            </li>
<li className="flex items-center text-sm text-gray-300">
<svg className="w-4 h-4 text-emerald-400 mr-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Advanced integrations
            </li>
<li className="flex items-center text-sm text-gray-300">
<svg className="w-4 h-4 text-emerald-400 mr-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Custom workflows
            </li>
</ul>
<button className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-medium hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105">
            Start Free Trial
          </button>
</div>
</div>

<div className="scroll-reveal stagger-3 bg-zinc-900/50 rounded-2xl p-8 border border-white/10 backdrop-blur-sm revealed">
<div className="mb-8">
<h3 className="text-xl font-medium text-white mb-2">Enterprise</h3>
<p className="text-gray-400 mb-6">Custom solutions for large organizations and complex needs</p>
<div className="flex items-baseline mb-6">
<span className="text-3xl font-light text-white">Custom</span>
<span className="text-gray-400 ml-2">pricing</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-gray-300">
<svg className="w-4 h-4 text-emerald-400 mr-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Unlimited operations
            </li>
<li className="flex items-center text-sm text-gray-300">
<svg className="w-4 h-4 text-emerald-400 mr-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Unlimited team members
            </li>
<li className="flex items-center text-sm text-gray-300">
<svg className="w-4 h-4 text-emerald-400 mr-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Custom AI models
            </li>
<li className="flex items-center text-sm text-gray-300">
<svg className="w-4 h-4 text-emerald-400 mr-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              24/7 dedicated support
            </li>
<li className="flex items-center text-sm text-gray-300">
<svg className="w-4 h-4 text-emerald-400 mr-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              On-premise deployment
            </li>
<li className="flex items-center text-sm text-gray-300">
<svg className="w-4 h-4 text-emerald-400 mr-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              SLA guarantees
            </li>
</ul>
<button className="w-full py-3 px-6 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 hover:border-white/40 transition-all duration-200">
            Contact Sales
          </button>
</div>
</div>
</div>

<div className="mt-16 text-center">
<h3 className="text-2xl font-medium text-white mb-8">Frequently Asked Questions</h3>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<div className="text-left p-6 bg-zinc-900/30 rounded-xl border border-white/10">
<h4 className="text-lg font-medium text-white mb-3">Can I change plans anytime?</h4>
<p className="text-gray-400">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately with prorated billing.</p>
</div>
<div className="text-left p-6 bg-zinc-900/30 rounded-xl border border-white/10">
<h4 className="text-lg font-medium text-white mb-3">Is there a free trial?</h4>
<p className="text-gray-400">We offer a 14-day free trial for the Professional plan with full access to all features.</p>
</div>
<div className="text-left p-6 bg-zinc-900/30 rounded-xl border border-white/10">
<h4 className="text-lg font-medium text-white mb-3">What's included in support?</h4>
<p className="text-gray-400">All plans include comprehensive documentation, community forums, and our knowledge base. Higher tiers include priority support.</p>
</div>
<div className="text-left p-6 bg-zinc-900/30 rounded-xl border border-white/10">
<h4 className="text-lg font-medium text-white mb-3">Do you offer custom pricing?</h4>
<p className="text-gray-400">Yes, we work with large organizations to create custom pricing plans that fit specific needs and usage patterns.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-black" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="scroll-reveal inline-flex glow bg-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm space-x-2 items-center revealed">
<svg className="w-[16px] h-[16px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
<span className="text-sm font-medium text-[#ffffff]">Get In Touch</span>
</div>
<h2 className="scroll-reveal stagger-1 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-6 revealed">
        Ready to amplify<br/>
<span className="inline-block font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">your intelligence?</span>
</h2>
<p className="scroll-reveal stagger-2 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed revealed">
        Join thousands of forward-thinking companies that have transformed their operations with Radison. Let's discuss how AI can revolutionize your business.
      </p>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="scroll-reveal-left revealed">
<div className="space-y-8">
<div className="flex items-start space-x-4">
<div className="flex w-12 h-12 glow bg-[#ffffff]/20 border-[#ffffff]/30 border rounded-xl pr-3 pl-3 items-center justify-center">
<svg className="w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Schedule a Demo</h4>
<p className="text-gray-400 leading-relaxed">Book a personalized demo with our AI experts and see Radison in action tailored to your specific use case.</p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="flex w-12 h-12 glow bg-[#ffffff]/20 border-[#ffffff]/30 border rounded-xl pr-3 pl-3 items-center justify-center">
<svg className="w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
</div>
<div className="">
<h4 className="text-xl font-medium text-white mb-2">Enterprise Consultation</h4>
<p className="text-gray-400 leading-relaxed">Connect with our enterprise team to discuss custom solutions, pricing, and implementation strategies for your organization.</p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="flex w-12 h-12 glow bg-[#ffffff]/20 border-[#ffffff]/30 border rounded-xl pr-3 pl-3 items-center justify-center">
<svg className="w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
</div>
<div className="">
<h4 className="text-xl font-medium text-white mb-2">Technical Support</h4>
<p className="text-gray-400 leading-relaxed">Get help with implementation, integration questions, or technical challenges from our experienced support team.</p>
</div>
</div>
</div>
</div>
<div className="scroll-reveal-right revealed">
<div className="bg-zinc-900/50 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-white mb-2">First Name</label>
<input className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-white mb-2">Last Name</label>
<input className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-white mb-2">Email Address</label>
<input className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-white mb-2">Company</label>
<input className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200" placeholder="Your Company" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-white mb-2">How can we help?</label>
<select className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200">
<option>Schedule a Demo</option>
<option>Enterprise Consultation</option>
<option>Technical Support</option>
<option>Partnership Inquiry</option>
<option>General Question</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-white mb-2">Message</label>
<textarea className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none" placeholder="Tell us about your project and how we can help..." rows="4"></textarea>
</div>
<button className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-medium hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105" type="submit">
              Send Message
            </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid md:grid-cols-4 gap-8 mb-8">
<div className="md:col-span-2">
<div className="flex items-center space-x-3 mb-4">
<svg className="" fill="none" height="36" viewbox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg">
<path d="M16.2932 11.9774C16.1759 9.03514 18.1298 4.66446 18.1298 4.66446C15.4936 4.64047 12.9105 5.40303 10.718 6.82939L10.7286 6.83318C9.57413 9.97876 9.03203 12.5087 9.30055 16.1502C9.57132 19.8221 12.8069 24.2667 12.8069 24.2667L12.8151 24.289C13.2392 24.0337 13.6347 23.7625 13.9746 23.4789C16.0131 21.7779 18.0004 18.0004 18.0004 18.0004C18.0004 18.0004 16.3906 14.4202 16.2932 11.9774Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M16.4666 9.98601C16.4666 9.98601 21.596 9.33699 26 11.3334C28.1175 12.2933 29.7798 13.6204 30.9149 14.7107L30.92 14.7029C31.6572 17.5844 31.4396 20.7292 30.0845 23.6352C30.0845 23.6352 27.7107 19.586 25.1694 18.401C22.6281 17.2159 18.0004 18.0004 18.0004 18.0004C18.0004 18.0004 16.3905 14.4202 16.2932 11.9773C16.2684 11.3573 16.3357 10.6738 16.4573 9.98113L16.4666 9.98601Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M13.9746 23.4789C11.8918 25.2168 7.71515 26.4899 7.71515 26.4899C8.93912 27.9749 10.5052 29.217 12.3655 30.0844C12.8609 30.3154 13.3632 30.5134 13.8699 30.6791C14.0151 30.6328 14.1603 30.5864 14.3053 30.5399C15.133 30.2741 15.9575 30.0014 16.7635 29.6829C18.3761 29.046 19.9175 28.2253 21.2715 26.9077C22.5979 25.6171 23.8898 23.6366 24.8487 21.9828C25.3286 21.1552 25.7258 20.4079 26.0032 19.8676C26.1418 19.5974 26.2505 19.3789 26.3246 19.2279L26.3599 19.1556C25.9732 18.8502 25.5735 18.5894 25.1695 18.401C22.6281 17.2159 18.0004 18.0003 18.0004 18.0003C18.0004 18.0003 16.0131 21.7778 13.9746 23.4789Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M18.1298 4.66446C18.1298 4.66446 16.1759 9.03514 16.2932 11.9774C16.3906 14.4202 18.0004 18.0004 18.0004 18.0004C18.0004 18.0004 16.0131 21.7779 13.9746 23.4789C11.8918 25.2168 7.7151 26.49 7.7151 26.49C4.54807 22.6477 3.67169 17.1791 5.91629 12.3655C8.19652 7.47555 13.0649 4.61836 18.1298 4.66446Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M18.0004 18.0004C18.0004 18.0004 16.3905 14.4202 16.2932 11.9773C16.1759 9.03508 18.1298 4.6644 18.1298 4.6644C19.9775 4.68122 21.8514 5.08435 23.6353 5.91619C30.3092 9.02827 33.1966 16.9613 30.0845 23.6352C30.0845 23.6352 27.7107 19.586 25.1694 18.401C22.6281 17.2159 18.0004 18.0004 18.0004 18.0004Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M7.71515 26.4899C7.71515 26.4899 11.8918 25.2168 13.9746 23.4789C16.0131 21.7778 18.0004 18.0003 18.0004 18.0003C18.0004 18.0003 22.6281 17.2159 25.1695 18.401C27.7108 19.586 30.0845 23.6352 30.0845 23.6352C26.9725 30.3091 19.0394 33.1965 12.3655 30.0844C10.5052 29.217 8.93912 27.9749 7.71515 26.4899Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xl font-medium text-white tracking-tight">Intel</span>
</div>
<p className="text-gray-400 leading-relaxed max-w-md">
          Transforming businesses with intelligent automation. Built for visionaries who dare to reimagine what's possible in the age of AI.
        </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-white transition-colors" href="#intelligence">Intelligence Platform</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#automation">Automation Suite</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#platforms">Integrations</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-400 text-sm">
        © 2024 Radison Technologies. All rights reserved.
      </p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-gray-400 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">Security</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
