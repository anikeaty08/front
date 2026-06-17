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

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const mobileMenu = document.getElementById('mobileMenu');
    if(!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
    
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
      

<nav className="glassmorphism fixed top-0 left-0 right-0 z-50 transition-transform duration-300" style={{transform: 'translateY(-100%)'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="scroll-reveal flex items-center space-x-3 revealed">
<iconify-icon className="text-white" height="32" icon="solar:chart-square-linear" style={{strokeWidth: '1.5px'}} width="32"></iconify-icon>
<span className="text-lg font-medium text-white tracking-tight">Jeb Blount</span>
</div>
<div className="scroll-reveal stagger-1 hidden md:flex items-center space-x-8 revealed">
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#problem">Problem</a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#reframe">Reframe</a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#mechanism">Mechanism</a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="scroll-reveal stagger-2 flex items-center space-x-4 revealed">
<a className="group relative inline-flex items-center justify-center min-w-[120px] cursor-pointer rounded-xl px-[17px] py-[12px] text-white/70 tracking-tight font-semibold transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white" href="#contact" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(6,78,59,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="relative z-10 font-normal">Book Call</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</a>
<button className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors" id="menuBtn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-white/10 bg-black/90 backdrop-blur-xl" id="mobileMenu">
<div className="px-4 py-6 space-y-4">
<a className="block text-base font-normal text-gray-400 hover:text-white" href="#problem">Problem</a>
<a className="block text-base font-normal text-gray-400 hover:text-white" href="#reframe">Reframe</a>
<a className="block text-base font-normal text-gray-400 hover:text-white" href="#mechanism">Mechanism</a>
<a className="block text-base font-normal text-gray-400 hover:text-white" href="#process">Process</a>
<a className="block text-base font-normal text-gray-400 hover:text-white" href="#about">About</a>
<a className="block text-base font-normal text-gray-400 hover:text-white" href="#faq">FAQ</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-gradient pt-32 pb-20">

<div className="absolute inset-0 overflow-hidden">
<div className="energy-lines"></div>
<div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl floating z-0"></div>
<div className="absolute bottom-20 right-10 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl floating z-0" style={{animationDelay: '-2s'}}></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
<div className="text-center">
<div className="scroll-reveal inline-flex glow bg-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 backdrop-blur-none space-x-2 items-center revealed">
<div className="flex w-5 h-5 pulse-glow bg-[#ffffff]/20 rounded-full items-center justify-center">
<iconify-icon className="text-white" height="12" icon="solar:play-linear" style={{strokeWidth: '1.5px'}} width="12"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-300">Watch: Why Your Pipeline Keeps Running Dry</span>
</div>
<h1 className="scroll-reveal stagger-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-none mb-6 revealed">
        Your Pipeline Isn't Empty.<br/>
<span className="inline-block font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">You're Not Prospecting Enough</span>
</h1>
<p className="scroll-reveal stagger-2 max-w-2xl mx-auto text-lg md:text-xl font-light text-gray-300 leading-relaxed mb-10 revealed">
        Most sales problems come down to one thing: not enough consistent prospecting. Jeb Blount helps you fix that.
      </p>
<div className="scroll-reveal stagger-3 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-6 mb-16 space-y-4 items-center justify-center revealed">
<a className="relative inline-flex items-center gap-2 hover:scale-105 transition-all duration-200 group text-base font-medium text-white rounded-xl px-8 py-4" href="#contact">
<span className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full"></span>
<span className="absolute inset-0 ring-1 ring-emerald-400/40 group-hover:ring-emerald-400/60 transition-all rounded-full"></span>
<span className="relative">Fix My Pipeline</span>
<iconify-icon className="relative group-hover:translate-x-1 transition-transform" height="16" icon="solar:double-alt-arrow-right-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</a>
</div>

<div className="relative sm:mt-12 max-w-6xl mx-auto mt-8 mb-12">
<div className="scroll-reveal-blur relative overflow-hidden bg-neutral-900/70 border-neutral-700 border rounded-3xl shadow-xl backdrop-blur-xl revealed" style={{background: 'rgba(17, 17, 17, 0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(64, 64, 64, 0.35)'}}>
<div className="sm:p-10 pt-6 pr-6 pb-6 pl-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-left">

<div className="space-y-6">
<h3 className="text-2xl font-semibold tracking-tight text-white">If your pipeline keeps dropping, the issue isn't your product.</h3>
<p className="text-xl font-medium text-emerald-400">It's activity.</p>
<div className="space-y-4">
<p className="text-base text-gray-300">Most reps:</p>
<ul className="space-y-3">
<li className="flex items-start">
<iconify-icon className="text-red-400 mr-3 mt-0.5 shrink-0" height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-gray-400">Prospect inconsistently</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-red-400 mr-3 mt-0.5 shrink-0" height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-gray-400">Wait for leads instead of creating them</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-red-400 mr-3 mt-0.5 shrink-0" height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-gray-400">Avoid outreach when it gets uncomfortable</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-red-400 mr-3 mt-0.5 shrink-0" height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-gray-400">Rely on motivation instead of discipline</span>
</li>
</ul>
</div>
<div className="pt-4 border-t border-white/10">
<p className="text-sm font-medium text-white mb-2">In this video, Jeb breaks down:</p>
<ul className="text-sm text-gray-400 space-y-1">
<li>• Why pipeline dries up</li>
<li>• What consistent prospecting actually looks like</li>
<li>• How top performers stay full</li>
</ul>
</div>
</div>

<div className="relative w-full aspect-video bg-neutral-950 border border-white/10 rounded-2xl flex flex-col items-center justify-center group overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors"></div>
<iconify-icon className="text-white/50 group-hover:text-emerald-400 transition-colors mb-4" height="64" icon="solar:play-circle-linear" style={{strokeWidth: '1.5px'}} width="64"></iconify-icon>
<div className="font-mono text-sm text-gray-500 tracking-widest">[VIDEO PLACEHOLDER]</div>
</div>
</div>
</div>
</div>

<div className="scroll-reveal stagger-4 max-w-4xl mx-auto mt-20 revealed">
<p className="text-sm font-medium text-gray-400 mb-6 uppercase tracking-widest">Sales teams building stronger pipelines</p>
<div className="w-full h-24 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-500 font-mono text-sm">
          [IMAGE PLACEHOLDER - CLIENT LOGOS]
        </div>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-zinc-950 pt-20 pb-20" id="problem">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16">
<div className="scroll-reveal inline-flex glow bg-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 backdrop-blur-none space-x-2 items-center revealed">
<iconify-icon className="text-white" height="16" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
<span className="text-sm font-medium text-white">Deep Diagnosis</span>
</div>
<h2 className="scroll-reveal stagger-1 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-6 revealed">
        Why Your Pipeline<br/>
<span className="inline-block font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Keeps Dropping</span>
</h2>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
<div className="scroll-reveal-left revealed">
<div className="space-y-6">
<div className="scroll-reveal stagger-1 flex items-start space-x-4 p-6 rounded-2xl bg-zinc-900/30 border border-white/10 hover:border-emerald-400/30 transition-colors neon-border revealed">
<div className="flex w-12 h-12 glow bg-white/10 border-white/20 border rounded-xl pr-3 pl-3 items-center justify-center shrink-0">
<iconify-icon className="text-white" height="24" icon="solar:graph-down-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Inconsistent prospecting</h4>
<p className="text-gray-400 leading-relaxed">Activity isn't sustained. The cycle of feast and famine continues because outreach stops when you get busy.</p>
</div>
</div>
<div className="scroll-reveal stagger-2 flex items-start space-x-4 p-6 rounded-2xl bg-zinc-900/30 border border-white/10 hover:border-emerald-400/30 transition-colors revealed">
<div className="flex w-12 h-12 glow bg-white/10 border-white/20 border rounded-xl pr-3 pl-3 items-center justify-center shrink-0">
<iconify-icon className="text-white" height="24" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Avoidance behavior</h4>
<p className="text-gray-400 leading-relaxed">Reps delay outreach. Tasks that generate pipeline are constantly pushed aside for "easier" administrative work.</p>
</div>
</div>
<div className="scroll-reveal stagger-3 flex items-start space-x-4 p-6 rounded-2xl bg-zinc-900/30 border border-white/10 hover:border-emerald-400/30 transition-colors revealed">
<div className="flex w-12 h-12 glow bg-white/10 border-white/20 border rounded-xl pr-3 pl-3 items-center justify-center shrink-0">
<iconify-icon className="text-white" height="24" icon="solar:inbox-in-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Over-reliance on inbound</h4>
<p className="text-gray-400 leading-relaxed">Pipeline isn't controlled. When marketing leads slow down, the sales team has no mechanism to create their own opportunities.</p>
</div>
</div>
<div className="scroll-reveal stagger-4 flex items-start space-x-4 p-6 rounded-2xl bg-zinc-900/30 border border-white/10 hover:border-emerald-400/30 transition-colors revealed">
<div className="flex w-12 h-12 glow bg-white/10 border-white/20 border rounded-xl pr-3 pl-3 items-center justify-center shrink-0">
<iconify-icon className="text-white" height="24" icon="solar:calendar-date-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">No daily discipline</h4>
<p className="text-gray-400 leading-relaxed">Performance fluctuates. Without daily habits and blocked time, consistent pipeline generation is impossible.</p>
</div>
</div>
</div>
</div>
<div className="scroll-reveal-right revealed h-full flex flex-col justify-center">
<div className="relative w-full aspect-[4/5] bg-neutral-900 border border-white/10 rounded-3xl flex items-center justify-center overflow-hidden glow">
<div className="absolute inset-0 bg-white/5"></div>
<div className="font-mono text-sm text-gray-500 tracking-widest">[IMAGE PLACEHOLDER]</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-black pt-20 pb-20" id="reframe">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="scroll-reveal inline-flex glow bg-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm space-x-2 items-center revealed">
<iconify-icon className="text-white" height="16" icon="solar:target-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
<span className="text-sm font-medium text-white">The Core Issue</span>
</div>
<h2 className="scroll-reveal stagger-1 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-6 revealed">
        The Problem Isn't Leads.<br/>
<span className="inline-block font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">It's Discipline</span>
</h2>
<div className="scroll-reveal stagger-2 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed revealed space-y-4">
<p>More tools won't fix this.</p>
<p>More training won't fix this.</p>
</div>
</div>

<div className="scroll-reveal-blur mb-20 revealed">
<div className="group sm:p-6 bg-zinc-900 border-zinc-800 border rounded-3xl mt-6 pt-6 pr-6 pb-6 pl-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl">
<div className="pt-0 pr-0 pb-0 pl-0">
<div className="flex mb-6 items-center justify-center">
<h3 className="text-xl font-medium text-white">Pipeline improves when:</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-black/40 rounded-2xl p-6 border border-white/10 text-center">
<div className="flex justify-center mb-4">
<iconify-icon className="text-emerald-400" height="32" icon="solar:refresh-circle-linear" style={{strokeWidth: '1.5px'}} width="32"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">Prospecting is Consistent</h4>
<p className="text-sm text-gray-400">Activity happens every single day, not just when desperate.</p>
</div>
<div className="bg-black/40 rounded-2xl p-6 border border-white/10 text-center">
<div className="flex justify-center mb-4">
<iconify-icon className="text-emerald-400" height="32" icon="solar:slider-vertical-linear" style={{strokeWidth: '1.5px'}} width="32"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">Activity is Controlled</h4>
<p className="text-sm text-gray-400">You manage your inputs, measuring exactly what leads to output.</p>
</div>
<div className="bg-black/40 rounded-2xl p-6 border border-white/10 text-center">
<div className="flex justify-center mb-4">
<iconify-icon className="text-emerald-400" height="32" icon="solar:shield-check-linear" style={{strokeWidth: '1.5px'}} width="32"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">Discipline is Maintained</h4>
<p className="text-sm text-gray-400">Execution becomes a habit, overriding temporary lack of motivation.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-zinc-950 pt-20 pb-20 relative overflow-hidden" id="mechanism">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-20">
<div className="scroll-reveal inline-flex glow bg-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm space-x-2 items-center revealed">
<iconify-icon className="text-white" height="16" icon="solar:bolt-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
<span className="text-sm font-medium text-white">The Solution</span>
</div>
<h2 className="scroll-reveal stagger-1 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-8 revealed">
        Fanatical<br/>
<span className="inline-block font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Prospecting</span>
</h2>
<p className="scroll-reveal stagger-2 max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed mb-12 revealed">
        Top performers don't rely on luck.<br/><br/>
        They rely on: <strong>daily activity</strong>, <strong>consistent outreach</strong>, and <strong>disciplined execution</strong>.<br/>
        This is what turns: <span className="text-emerald-400">Effort → into pipeline</span>.
      </p>

<div className="scroll-reveal stagger-3 max-w-5xl mx-auto mb-16 revealed">
<h3 className="text-2xl font-medium text-white mb-8 text-center">What's Included</h3>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white/5 border-white/10 border rounded-2xl p-6 backdrop-blur-xl text-left hover:border-emerald-400/30 transition-colors">
<iconify-icon className="text-emerald-400 mb-4" height="32" icon="solar:book-bookmark-linear" style={{strokeWidth: '1.5px'}} width="32"></iconify-icon>
<h4 className="text-white font-medium text-lg mb-2">Prospecting Training</h4>
<p className="text-gray-400 text-sm">Frameworks to overcome objections, secure attention, and book meetings.</p>
</div>
<div className="bg-white/5 border-white/10 border rounded-2xl p-6 backdrop-blur-xl text-left hover:border-emerald-400/30 transition-colors">
<iconify-icon className="text-emerald-400 mb-4" height="32" icon="solar:layers-linear" style={{strokeWidth: '1.5px'}} width="32"></iconify-icon>
<h4 className="text-white font-medium text-lg mb-2">Pipeline Development Systems</h4>
<p className="text-gray-400 text-sm">Structured approaches to ensure your pipeline never drops below target levels.</p>
</div>
<div className="bg-white/5 border-white/10 border rounded-2xl p-6 backdrop-blur-xl text-left hover:border-emerald-400/30 transition-colors">
<iconify-icon className="text-emerald-400 mb-4" height="32" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5px'}} width="32"></iconify-icon>
<h4 className="text-white font-medium text-lg mb-2">Sales Performance Coaching</h4>
<p className="text-gray-400 text-sm">Direct feedback to refine execution and build relentless discipline.</p>
</div>
<div className="bg-white/5 border-white/10 border rounded-2xl p-6 backdrop-blur-xl text-left hover:border-emerald-400/30 transition-colors lg:col-span-1 md:col-span-2">
<iconify-icon className="text-emerald-400 mb-4" height="32" icon="solar:map-arrow-up-linear" style={{strokeWidth: '1.5px'}} width="32"></iconify-icon>
<h4 className="text-white font-medium text-lg mb-2">Outbound Strategy</h4>
<p className="text-gray-400 text-sm">Omnichannel tactics combining phone, email, and social selling effectively.</p>
</div>
<div className="bg-white/5 border-white/10 border rounded-2xl p-6 backdrop-blur-xl text-left hover:border-emerald-400/30 transition-colors lg:col-span-2 md:col-span-2">
<iconify-icon className="text-emerald-400 mb-4" height="32" icon="solar:presentation-graph-linear" style={{strokeWidth: '1.5px'}} width="32"></iconify-icon>
<h4 className="text-white font-medium text-lg mb-2">Sales Workshops</h4>
<p className="text-gray-400 text-sm">Immersive training events designed to align teams and skyrocket outbound activity.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-black pt-20 pb-20" id="social-proof">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="scroll-reveal inline-flex glow bg-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm space-x-2 items-center revealed">
<iconify-icon className="text-white" height="16" icon="solar:star-fall-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
<span className="text-sm font-medium text-white">Social Proof</span>
</div>
<h2 className="scroll-reveal stagger-1 md:text-4xl lg:text-5xl text-3xl font-light text-white tracking-tight mb-6 revealed">
        Sales teams improving<br/>
<span className="inline-block font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">prospecting performance</span>
</h2>
<p className="scroll-reveal stagger-2 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed revealed mb-12">
        Sales teams use Jeb Blount's approach to improve prospecting consistency and pipeline generation.
      </p>
<div className="scroll-reveal stagger-3 w-full max-w-5xl mx-auto aspect-video bg-neutral-900 border border-white/10 rounded-3xl flex items-center justify-center font-mono text-sm text-gray-500 overflow-hidden relative group">
<div className="absolute inset-0 bg-white/5"></div>
        [IMAGE PLACEHOLDER - TEAM / TRAINING]
      </div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-zinc-950" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center mb-16">
<div className="scroll-reveal inline-flex glow bg-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm space-x-2 items-center revealed">
<iconify-icon className="text-white" height="16" icon="solar:route-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
<span className="text-sm font-medium text-white">Implementation</span>
</div>
<h2 className="scroll-reveal stagger-1 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-6 revealed">
        How Jeb<br/>
<span className="inline-block font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Improves Pipeline</span>
</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 mb-16">
<div className="scroll-reveal stagger-1 bg-zinc-900/50 rounded-2xl p-8 border border-white/10 backdrop-blur-sm text-center revealed">
<div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
<h3 className="text-xl font-medium text-white mb-4">Identify prospecting gaps</h3>
<p className="text-gray-400 text-sm leading-relaxed">Pinpoint exactly where your activity is failing and why pipeline generation has stalled.</p>
</div>
<div className="scroll-reveal stagger-2 bg-zinc-900/50 border-emerald-400/30 border rounded-2xl p-8 backdrop-blur-sm shadow-[inset_0_0_20px_rgba(16,185,129,0.1)] text-center revealed">
<div className="w-12 h-12 rounded-full bg-emerald-500 text-black flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg shadow-emerald-500/30">2</div>
<h3 className="text-xl font-medium text-white mb-4">Build consistent activity systems</h3>
<p className="text-gray-400 text-sm leading-relaxed">Establish rigorous daily habits, time-blocking, and outreach cadences that remove excuses.</p>
</div>
<div className="scroll-reveal stagger-3 bg-zinc-900/50 rounded-2xl p-8 border border-white/10 backdrop-blur-sm text-center revealed">
<div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
<h3 className="text-xl font-medium text-white mb-4">Increase pipeline and performance</h3>
<p className="text-gray-400 text-sm leading-relaxed">Watch opportunities multiply as disciplined execution translates directly into sales results.</p>
</div>
</div>
<div className="text-center mb-32 scroll-reveal revealed">
<a className="inline-flex py-4 px-8 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-emerald-500/20 tracking-wide" href="#contact">
        Improve My Prospecting
      </a>
</div>

<div className="mt-16 text-center" id="faq">
<div className="scroll-reveal inline-flex glow bg-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm space-x-2 items-center revealed">
<iconify-icon className="text-white" height="16" icon="solar:question-circle-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
<span className="text-sm font-medium text-white">FAQ</span>
</div>
<h3 className="text-2xl font-medium text-white mb-12">Frequently Asked Questions</h3>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<div className="text-left p-6 bg-zinc-900/30 rounded-xl border border-white/10">
<h4 className="text-lg font-medium text-white mb-3">Who is this for?</h4>
<p className="text-gray-400 text-sm">Sales reps, teams, and leaders looking to fix inconsistent pipeline generation.</p>
</div>
<div className="text-left p-6 bg-zinc-900/30 rounded-xl border border-white/10">
<h4 className="text-lg font-medium text-white mb-3">Is this prospecting training?</h4>
<p className="text-gray-400 text-sm">Yes, specifically focused on activity, mindset, and execution consistency.</p>
</div>
<div className="text-left p-6 bg-zinc-900/30 rounded-xl border border-white/10">
<h4 className="text-lg font-medium text-white mb-3">Does this work for experienced reps?</h4>
<p className="text-gray-400 text-sm">Yes, especially those whose pipelines have become inconsistent or reliant purely on account management.</p>
</div>
<div className="text-left p-6 bg-zinc-900/30 rounded-xl border border-white/10">
<h4 className="text-lg font-medium text-white mb-3">What makes this different?</h4>
<p className="text-gray-400 text-sm">We don't just give you a script. The entire focus is on discipline, habits, and execution.</p>
</div>
<div className="text-left p-6 bg-zinc-900/30 rounded-xl border border-white/10 md:col-span-2">
<h4 className="text-lg font-medium text-white mb-3">How do we start?</h4>
<p className="text-gray-400 text-sm">Simply book a call using the calendar below to discuss your current pipeline challenges.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-black border-t border-white/10" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-start">

<div className="scroll-reveal-left revealed space-y-8">
<div className="inline-flex glow bg-white/5 border-white/10 border rounded-full mb-4 pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm space-x-2 items-center">
<iconify-icon className="text-white" height="16" icon="solar:user-circle-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
<span className="text-sm font-medium text-white">About</span>
</div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white">
          Hi, I'm <span className="font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Jeb Blount</span>.
        </h2>
<div className="w-full aspect-square max-w-md bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center font-mono text-sm text-gray-500">
          [IMAGE PLACEHOLDER]
        </div>
<div className="text-lg text-gray-300 leading-relaxed space-y-4 max-w-md">
<p>I work with sales professionals who want more pipeline but struggle with consistency.</p>
<p>The issue isn't opportunity — it's activity.</p>
<p>My focus is helping you build discipline so your pipeline stays full.</p>
</div>
</div>

<div className="scroll-reveal-right revealed" id="contact">
<div className="bg-zinc-900/50 rounded-3xl p-8 lg:p-12 border border-white/10 backdrop-blur-sm text-center flex flex-col items-center">
<h3 className="text-3xl font-medium text-white mb-4">Fill Your Pipeline Consistently</h3>
<p className="text-gray-400 mb-10 text-lg">Book a call to improve how you generate pipeline every day.</p>
<div className="w-full aspect-[3/4] sm:aspect-square bg-black/50 border border-white/10 rounded-2xl flex flex-col items-center justify-center font-mono text-sm text-gray-500 mb-8 p-8">
<iconify-icon className="text-white/20 mb-4" height="48" icon="solar:calendar-linear" style={{strokeWidth: '1.5px'}} width="48"></iconify-icon>
            [CALENDLY PLACEHOLDER]
          </div>
<button className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105 tracking-wide text-lg shadow-lg shadow-emerald-500/20">
            Book My Call
          </button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
<div>
<div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
<iconify-icon className="text-white" height="32" icon="solar:chart-square-linear" style={{strokeWidth: '1.5px'}} width="32"></iconify-icon>
<span className="text-xl font-medium text-white tracking-tight">Sales Gravy</span>
</div>
<p className="text-gray-500 text-sm max-w-sm">
          No excuses. Just activity, discipline, and consistent pipeline generation.
        </p>
</div>
<div className="flex space-x-6">
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#problem">Problem</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#reframe">Reframe</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#process">Process</a>
</div>
</div>
<div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-gray-600 text-sm">
        © 2024 Sales Gravy &amp; Jeb Blount. All rights reserved.
      </p>
<div className="flex space-x-6">
<a className="text-gray-600 hover:text-white text-sm transition-colors" href="#">Privacy Policy</a>
<a className="text-gray-600 hover:text-white text-sm transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
