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
    if(!mobileMenu.classList.contains('hidden')){
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
      

<nav className="glassmorphism fixed top-0 left-0 right-0 z-50 transition-transform duration-300" style={{transform: 'translateY(0)'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="scroll-reveal flex items-center space-x-3 revealed">
<div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
<iconify-icon height="20" icon="solar:chart-square-linear" style={{color: 'white'}} width="20"></iconify-icon>
</div>
<span className="text-lg font-medium text-white tracking-tight">Matt Green</span>
</div>
<div className="scroll-reveal stagger-2 flex items-center space-x-4 revealed">
<a className="group relative inline-flex items-center justify-center min-w-[120px] cursor-pointer rounded-xl px-[17px] py-[12px] text-white/70 tracking-tight font-semibold transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.05] hover:text-white" href="#contact" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(20,184,166,0.3) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="relative z-10 font-medium">Fix My Team</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</a>
<button className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors" id="menuBtn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-white/10 bg-black/90 backdrop-blur-xl" id="mobileMenu">
<div className="px-4 py-6 space-y-4">
<a className="block text-base font-normal text-gray-400 hover:text-white" href="#problem">The Problem</a>
<a className="block text-base font-normal text-gray-400 hover:text-white" href="#process">Process</a>
<a className="block text-base font-normal text-gray-400 hover:text-white" href="#included">What's Included</a>
<a className="block text-base font-normal text-gray-400 hover:text-white" href="#about">About</a>
<a className="block text-base font-normal text-gray-400 hover:text-white" href="#faq">FAQ</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden hero-gradient grid-pattern">
<div className="system-flow-bg"></div>
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl floating"></div>
<div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl floating" style={{animationDelay: '-2s'}}></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
<div className="text-center max-w-4xl mx-auto">
<div className="scroll-reveal inline-flex glow bg-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 backdrop-blur-none space-x-2 items-center revealed">
<div className="flex w-5 h-5 pulse-glow bg-emerald-500/20 rounded-full items-center justify-center">
<iconify-icon height="14" icon="solar:play-circle-linear" style={{color: '#10b981'}} width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-300">Watch: Why Sales Teams Fail to Scale</span>
</div>
<h1 className="scroll-reveal stagger-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight mb-6 revealed">
        Your Sales Team Isn't Scaling<br/>
<span className="inline-block font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Because It Isn't Built to</span>
</h1>
<p className="scroll-reveal stagger-2 max-w-2xl mx-auto text-lg md:text-xl font-light text-gray-300 leading-relaxed mb-12 revealed">
        Most companies hire reps but don't build the system around them. Matt Green helps you structure, train, and ramp teams that actually perform.
      </p>
</div>

<div className="scroll-reveal stagger-3 relative max-w-6xl mx-auto mt-8 revealed">
<div className="scroll-reveal-blur bg-neutral-900/70 border-neutral-700 border rounded-3xl shadow-xl backdrop-blur-xl p-6 sm:p-10 revealed" style={{background: 'rgba(17, 17, 17, 0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(64, 64, 64, 0.35)'}}>
<div className="grid lg:grid-cols-5 gap-10 items-center">

<div className="lg:col-span-3">
<div className="relative aspect-video rounded-2xl border border-white/10 bg-black/60 ring-1 ring-inset ring-white/5 overflow-hidden group flex items-center justify-center cursor-pointer">

<div className="absolute inset-0 bg-zinc-900/80 flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-105">
<span className="text-white/40 font-mono text-sm tracking-widest mb-4">VIDEO PLACEHOLDER</span>
<div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 group-hover:bg-emerald-500/40 transition-colors">
<iconify-icon height="24" icon="solar:play-bold" style={{color: '#34d399'}} width="24"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 space-y-6">
<p className="text-lg font-medium text-white tracking-tight border-b border-white/10 pb-4">
              If your team is growing but results aren't improving, the issue isn't hiring. <span className="text-emerald-400">It's structure.</span>
</p>
<div className="space-y-4">
<p className="text-sm font-medium text-gray-300 uppercase tracking-widest">Most companies:</p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-gray-400 text-sm">
<iconify-icon className="text-red-400/70 mt-0.5 shrink-0" height="18" icon="solar:close-circle-linear" width="18"></iconify-icon>
                  hire without a clear ramp plan
                </li>
<li className="flex items-start gap-3 text-gray-400 text-sm">
<iconify-icon className="text-red-400/70 mt-0.5 shrink-0" height="18" icon="solar:close-circle-linear" width="18"></iconify-icon>
                  lack consistent training systems
                </li>
<li className="flex items-start gap-3 text-gray-400 text-sm">
<iconify-icon className="text-red-400/70 mt-0.5 shrink-0" height="18" icon="solar:close-circle-linear" width="18"></iconify-icon>
                  rely on individual performance
                </li>
<li className="flex items-start gap-3 text-gray-400 text-sm border-b border-white/10 pb-4">
<iconify-icon className="text-red-400/70 mt-0.5 shrink-0" height="18" icon="solar:close-circle-linear" width="18"></iconify-icon>
                  struggle to onboard effectively
                </li>
</ul>
<p className="text-sm font-medium text-white pt-2">In this video, Matt breaks down:</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-gray-300 text-sm">
<iconify-icon className="text-emerald-400" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                  why sales teams fail to scale
                </li>
<li className="flex items-center gap-2 text-gray-300 text-sm">
<iconify-icon className="text-emerald-400" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                  what proper enablement looks like
                </li>
<li className="flex items-center gap-2 text-gray-300 text-sm">
<iconify-icon className="text-emerald-400" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                  how to build a team that performs
                </li>
</ul>
</div>
<div className="pt-4">
<a className="inline-flex w-full items-center justify-center gap-2 bg-white text-black font-semibold rounded-xl px-8 py-4 hover:bg-gray-200 transition-colors" href="#contact">
                Fix My Sales Team
              </a>
</div>
</div>
</div>
</div>
</div>

<div className="scroll-reveal stagger-4 mt-20 pt-10 border-t border-white/10 text-center revealed">
<p className="text-xs text-gray-500 uppercase tracking-[0.2em] font-medium mb-8">Companies building stronger sales teams</p>
<div className="h-20 max-w-4xl mx-auto rounded-xl bg-zinc-900/30 border border-white/5 flex items-center justify-center backdrop-blur-sm">
<span className="text-gray-600 font-mono text-xs tracking-widest">IMAGE PLACEHOLDER</span>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-zinc-950 pt-20 pb-20 border-t border-white/5" id="problem">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

<div className="scroll-reveal-left revealed">
<div className="inline-flex glow bg-white/5 border-white/10 border rounded-full mb-6 pt-1.5 pr-3 pb-1.5 pl-3 items-center">
<span className="text-xs font-medium text-emerald-400 uppercase tracking-widest">Deep Diagnosis</span>
</div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-10">
          Why Sales Teams<br/>
<span className="font-medium text-gray-400">Don't Scale</span>
</h2>
<div className="grid sm:grid-cols-2 gap-4">
<div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-emerald-500/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
<iconify-icon className="text-red-400" height="20" icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-white mb-2 tracking-tight">Poor onboarding</h4>
<p className="text-sm text-gray-400 leading-relaxed">Reps take too long to ramp.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-emerald-500/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
<iconify-icon className="text-orange-400" height="20" icon="solar:danger-triangle-linear" width="20"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-white mb-2 tracking-tight">Inconsistent training</h4>
<p className="text-sm text-gray-400 leading-relaxed">No repeatable development system.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-emerald-500/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
<iconify-icon className="text-yellow-400" height="20" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-white mb-2 tracking-tight">Hiring without structure</h4>
<p className="text-sm text-gray-400 leading-relaxed">Roles and expectations are unclear.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-emerald-500/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
<iconify-icon className="text-blue-400" height="20" icon="solar:chart-down-linear" width="20"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-white mb-2 tracking-tight">Performance gaps</h4>
<p className="text-sm text-gray-400 leading-relaxed">Results vary across the team.</p>
</div>
</div>
</div>

<div className="scroll-reveal-right revealed h-full">
<div className="relative h-full min-h-[400px]">
<div className="absolute inset-0 overflow-hidden glow border-white/10 border rounded-3xl shadow-2xl bg-gradient-to-br from-zinc-900 to-black p-10 flex flex-col justify-center">
<div className="inline-flex w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl items-center justify-center mb-6">
<iconify-icon className="text-emerald-400" height="24" icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-6">
              The Problem Isn't Hiring.<br/>
<span className="font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">It's Enablement.</span>
</h3>
<div className="space-y-4 text-gray-300 text-lg font-light">
<p>More reps won't fix this.</p>
<p>More tools won't fix this.</p>
<p className="pt-4 font-medium text-white">Teams scale when:</p>
<ul className="space-y-3 pt-2">
<li className="flex items-center gap-3 text-base">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                  onboarding is structured
                </li>
<li className="flex items-center gap-3 text-base">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                  training is consistent
                </li>
<li className="flex items-center gap-3 text-base">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                  systems support performance
                </li>
</ul>
</div>
</div>
<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-600/20 rounded-2xl blur-xl floating"></div>
</div>
</div>
</div>

<div className="mt-32">
<div className="text-center mb-12">
<h2 className="scroll-reveal stagger-1 text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-4 revealed">
            Sales Enablement Systems
          </h2>
<p className="scroll-reveal stagger-2 max-w-2xl mx-auto text-gray-400 leading-relaxed revealed">
            Top teams don't rely on talent alone. This is what turns hiring into performance.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="scroll-reveal stagger-1 card-hover group revealed">
<div className="p-8 bg-zinc-900/80 border border-white/5 rounded-3xl space-y-4 h-full">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-emerald-400">
<span className="font-mono font-bold text-lg">01</span>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">Structured Onboarding</h3>
<p className="text-sm text-gray-400 leading-relaxed">Replace ad-hoc shadowing with a predictable curriculum that reduces ramp time.</p>
</div>
</div>
<div className="scroll-reveal stagger-2 card-hover group revealed">
<div className="p-8 bg-zinc-900/80 border border-white/5 rounded-3xl space-y-4 h-full">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-emerald-400">
<span className="font-mono font-bold text-lg">02</span>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">Repeatable Training</h3>
<p className="text-sm text-gray-400 leading-relaxed">Ongoing development frameworks so reps continuously improve core competencies.</p>
</div>
</div>
<div className="scroll-reveal stagger-3 card-hover group revealed">
<div className="p-8 bg-zinc-900/80 border border-white/5 rounded-3xl space-y-4 h-full">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-emerald-400">
<span className="font-mono font-bold text-lg">03</span>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">Clear Performance Systems</h3>
<p className="text-sm text-gray-400 leading-relaxed">Metrics, scorecards, and coaching cadences that hold everyone accountable to results.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-black border-t border-white/5">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="scroll-reveal inline-flex bg-white/5 border-white/10 border rounded-full mb-8 pt-1.5 pr-4 pb-1.5 pl-4 items-center revealed">
<span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Teams improving ramp and performance</span>
</div>
<div className="scroll-reveal stagger-1 aspect-[21/9] w-full bg-zinc-900 border border-white/10 rounded-3xl flex items-center justify-center mb-8 relative overflow-hidden group revealed">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-transparent mix-blend-overlay"></div>
<span className="text-gray-600 font-mono text-sm tracking-widest z-10">IMAGE PLACEHOLDER</span>
</div>
<p className="scroll-reveal stagger-2 text-xl text-gray-300 font-light max-w-2xl mx-auto revealed">
      Sales teams work with Sales Assembly to improve onboarding, training, and team performance.
    </p>
</div>
</section>

<section className="md:py-32 bg-zinc-950 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] pt-20 pb-20 border-t border-white/5 relative" id="process">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<h2 className="scroll-reveal stagger-1 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-6 revealed">
        How Matt Builds<br/>
<span className="inline-block font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Sales Teams</span>
</h2>
</div>
<div className="scroll-reveal stagger-3 max-w-4xl mx-auto mb-12 revealed">
<div className="bg-white/5 border-white/10 border rounded-3xl p-8 backdrop-blur-xl">
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[1px] bg-white/10 -translate-y-1/2 z-0"></div>
<div className="text-center relative z-10">
<div className="w-16 h-16 flex bg-zinc-900 border border-emerald-500/30 rounded-full mx-auto mb-6 shadow-lg backdrop-blur-xl items-center justify-center">
<span className="text-emerald-400 font-mono text-xl">1</span>
</div>
<h4 className="text-white font-semibold text-lg mb-2">Assess</h4>
<p className="text-gray-400 text-sm">Audit current team structure and performance gaps</p>
</div>
<div className="text-center relative z-10">
<div className="w-16 h-16 flex bg-zinc-900 border border-emerald-500/30 rounded-full mx-auto mb-6 shadow-lg backdrop-blur-xl items-center justify-center">
<span className="text-emerald-400 font-mono text-xl">2</span>
</div>
<h4 className="text-white font-semibold text-lg mb-2">Build Systems</h4>
<p className="text-gray-400 text-sm">Create structured onboarding and training frameworks</p>
</div>
<div className="text-center relative z-10">
<div className="w-16 h-16 flex bg-zinc-900 border border-emerald-500/30 rounded-full mx-auto mb-6 shadow-lg backdrop-blur-xl items-center justify-center">
<span className="text-emerald-400 font-mono text-xl">3</span>
</div>
<h4 className="text-white font-semibold text-lg mb-2">Improve Ramp</h4>
<p className="text-gray-400 text-sm">Execute, measure, and drive team performance</p>
</div>
</div>
</div>
</div>
<div className="text-center scroll-reveal stagger-4 revealed">
<a className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-6 py-3 rounded-full transition-colors" href="#contact">
          Improve My Team
          <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 bg-black border-t border-white/5" id="included">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<div className="scroll-reveal inline-flex bg-white/5 border-white/10 border rounded-full mb-6 pt-1.5 pr-4 pb-1.5 pl-4 items-center revealed">
<span className="text-xs font-medium text-gray-300 uppercase tracking-widest">The Toolkit</span>
</div>
<h2 className="scroll-reveal stagger-1 text-3xl font-light tracking-tight text-white mb-6 revealed">
        What's Included
      </h2>
</div>
<div className="scroll-reveal stagger-2 bg-zinc-900/40 border border-white/10 rounded-3xl overflow-hidden revealed">
<div className="divide-y divide-white/5">
<div className="p-6 flex items-center gap-4 hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-emerald-400" height="20" icon="solar:book-bookmark-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white">Sales Training Programs</h4>
</div>
</div>
<div className="p-6 flex items-center gap-4 hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-emerald-400" height="20" icon="solar:rocket-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white">Onboarding Systems</h4>
</div>
</div>
<div className="p-6 flex items-center gap-4 hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-emerald-400" height="20" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white">SDR &amp; AE Development</h4>
</div>
</div>
<div className="p-6 flex items-center gap-4 hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-emerald-400" height="20" icon="solar:layers-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white">Enablement Frameworks</h4>
</div>
</div>
<div className="p-6 flex items-center gap-4 hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-emerald-400" height="20" icon="solar:shield-star-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white">Sales Leadership Support</h4>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-zinc-950 border-t border-white/5" id="about">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="scroll-reveal-left order-2 md:order-1 revealed">
<h2 className="text-3xl font-light tracking-tight text-white mb-6">
          Hi, I'm Matt Green.
        </h2>
<div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
<p>
            I work with companies that are hiring sales teams but not seeing consistent results.
          </p>
<p>
            The issue isn't effort — it's how the team is built and developed.
          </p>
<p className="font-medium text-white border-l-2 border-emerald-500 pl-4">
            My focus is helping you create systems that drive performance.
          </p>
</div>
</div>
<div className="scroll-reveal-right order-1 md:order-2 revealed">
<div className="aspect-square max-w-md mx-auto bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-transparent mix-blend-overlay"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-gray-600 font-mono text-sm tracking-widest">IMAGE PLACEHOLDER</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-black border-t border-white/5" id="faq">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="scroll-reveal stagger-1 text-3xl font-light tracking-tight text-white mb-4 revealed">
        Frequently Asked Questions
      </h2>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="scroll-reveal stagger-1 text-left p-6 bg-zinc-900/30 rounded-2xl border border-white/10 hover:border-white/20 transition-colors revealed">
<h4 className="text-base font-medium text-white mb-2">Who is this for?</h4>
<p className="text-sm text-gray-400 leading-relaxed">Sales leaders, founders, and teams.</p>
</div>
<div className="scroll-reveal stagger-2 text-left p-6 bg-zinc-900/30 rounded-2xl border border-white/10 hover:border-white/20 transition-colors revealed">
<h4 className="text-base font-medium text-white mb-2">Is this training or enablement?</h4>
<p className="text-sm text-gray-400 leading-relaxed">Both — focused on systems and development.</p>
</div>
<div className="scroll-reveal stagger-3 text-left p-6 bg-zinc-900/30 rounded-2xl border border-white/10 hover:border-white/20 transition-colors revealed">
<h4 className="text-base font-medium text-white mb-2">Does this work for scaling teams?</h4>
<p className="text-sm text-gray-400 leading-relaxed">Yes, especially those hiring and growing.</p>
</div>
<div className="scroll-reveal stagger-4 text-left p-6 bg-zinc-900/30 rounded-2xl border border-white/10 hover:border-white/20 transition-colors revealed">
<h4 className="text-base font-medium text-white mb-2">What makes this different?</h4>
<p className="text-sm text-gray-400 leading-relaxed">Focus on structure, not just hiring.</p>
</div>
<div className="scroll-reveal stagger-5 text-left p-6 bg-zinc-900/30 rounded-2xl border border-white/10 hover:border-white/20 transition-colors md:col-span-2 revealed">
<h4 className="text-base font-medium text-white mb-2">How do we start?</h4>
<p className="text-sm text-gray-400 leading-relaxed">Book a call.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-zinc-950 border-t border-white/5 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-12">
<h2 className="scroll-reveal stagger-1 text-3xl md:text-5xl font-light tracking-tight text-white mb-6 revealed">
        Build a Sales Team<br/>
<span className="font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">That Performs</span>
</h2>
<p className="scroll-reveal stagger-2 text-lg text-gray-300 font-light revealed">
        Book a call to improve how your team is built, trained, and scaled.
      </p>
</div>

<div className="scroll-reveal stagger-3 w-full bg-zinc-900/80 border border-white/10 rounded-3xl p-2 sm:p-4 backdrop-blur-md revealed">
<div className="h-[600px] w-full rounded-2xl border border-white/5 bg-black/50 flex flex-col items-center justify-center group">
<iconify-icon className="text-gray-600 mb-4 group-hover:text-emerald-500 transition-colors" height="48" icon="solar:calendar-date-linear" width="48"></iconify-icon>
<span className="text-gray-500 font-mono text-sm tracking-widest">CALENDLY PLACEHOLDER</span>
<button className="mt-8 bg-white text-black font-semibold rounded-xl px-8 py-3 hover:bg-gray-200 transition-colors">
            Book My Call
          </button>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
<iconify-icon height="20" icon="solar:chart-square-linear" style={{color: 'white'}} width="20"></iconify-icon>
</div>
<span className="text-xl font-medium text-white tracking-tight">Matt Green</span>
</div>
<div className="flex space-x-6">
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#problem">The Problem</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#about">About</a>
</div>
</div>
<div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-500 text-sm">
        © 2024 Matt Green | Sales Assembly. All rights reserved.
      </p>
</div>
</div>
</footer>



    </>
  );
}
