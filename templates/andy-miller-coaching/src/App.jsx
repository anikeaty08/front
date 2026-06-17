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



document.getElementById('menuBtn').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('hidden');
});

function reveal() {
  const reveals = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-blur');
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('revealed');
    }
  }
}
window.addEventListener('scroll', reveal);
reveal(); 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const mobileMenu = document.getElementById('mobileMenu');
    if(!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

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
      

<nav className="glassmorphism fixed top-0 left-0 right-0 z-50 transition-transform duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="scroll-reveal flex items-center space-x-3 revealed">
<iconify-icon className="text-emerald-400" height="32" icon="solar:bolt-circle-linear" width="32"></iconify-icon>
<span className="text-lg font-medium text-white tracking-tight">Andy Miller</span>
</div>
<div className="scroll-reveal stagger-2 flex items-center space-x-4 revealed">
<a className="group relative inline-flex items-center justify-center min-w-[120px] cursor-pointer rounded-xl px-[17px] py-[12px] text-black tracking-tight font-medium transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.05] bg-gradient-to-r from-emerald-400 to-teal-400" href="#contact">
<span className="relative z-10">Fix My Team</span>
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
<a className="block text-base font-normal text-gray-400 hover:text-white" href="#approach">Our Approach</a>
<a className="block text-base font-normal text-gray-400 hover:text-white" href="#process">Process</a>
<a className="block text-base font-normal text-gray-400 hover:text-white" href="#about">About</a>
<a className="block text-base font-normal text-gray-400 hover:text-white" href="#faq">FAQ</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient grid-pattern">
<div className="momentum-layer"></div>
<div className="absolute inset-0 overflow-hidden z-0">
<div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl floating"></div>
<div className="absolute bottom-20 right-10 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl floating" style={{animationDelay: '-2s'}}></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10 w-full">
<div className="text-center max-w-4xl mx-auto mb-16">
<div className="scroll-reveal inline-flex glow bg-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 backdrop-blur-none space-x-2 items-center revealed">
<div className="flex w-5 h-5 pulse-glow bg-emerald-500/20 rounded-full items-center justify-center">
<iconify-icon className="text-emerald-400" height="14" icon="solar:target-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-300">Big Swift Kick Performance</span>
</div>
<h1 className="scroll-reveal stagger-1 text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight mb-6 revealed">
        Your Sales Team Doesn't Need More Training. <br className="hidden md:block"/>
<span className="inline-block font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">It Needs Accountability</span>
</h1>
<p className="scroll-reveal stagger-2 text-lg md:text-xl font-light text-gray-300 leading-relaxed mb-10 revealed">
        Most teams don't fail because they don't know what to do. They fail because they don't consistently do it. Andy Miller helps fix that.
      </p>
<div className="scroll-reveal stagger-3 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-6 space-y-4 items-center justify-center revealed">
<a className="relative inline-flex items-center gap-2 hover:scale-105 transition-all duration-200 group text-base font-medium text-black rounded-xl px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-400" href="#contact">
<span className="relative">Fix My Sales Team</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="relative max-w-5xl mx-auto">
<div className="scroll-reveal-blur relative overflow-hidden bg-neutral-900/70 border-neutral-800 border rounded-3xl shadow-2xl backdrop-blur-xl revealed">
<div className="p-6 md:p-10">
<div className="flex items-center gap-3 mb-6">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
<span className="text-sm text-neutral-400 font-medium ml-2 tracking-wide">Watch: Why Sales Teams Stay Stuck</span>
</div>
<div className="grid lg:grid-cols-5 gap-8">

<div className="lg:col-span-3">
<div className="w-full aspect-video bg-neutral-950 border border-white/5 rounded-2xl flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors"></div>
<iconify-icon className="text-white/50 group-hover:text-emerald-400 transition-colors mb-4 relative z-10" height="64" icon="solar:play-circle-bold" width="64"></iconify-icon>
<span className="text-neutral-500 font-mono text-sm uppercase tracking-widest relative z-10">[VIDEO PLACEHOLDER]</span>
</div>
</div>

<div className="lg:col-span-2 flex flex-col justify-center">
<h3 className="text-xl font-medium text-white mb-4">If your team isn't performing consistently, the issue isn't knowledge. <span className="text-emerald-400">It's execution.</span></h3>
<p className="text-neutral-400 text-sm mb-6 leading-relaxed">Most teams:</p>
<ul className="space-y-3 mb-6">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 shrink-0 mt-0.5" height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-neutral-300">Know what to do but don't do it consistently</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 shrink-0 mt-0.5" height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-neutral-300">Lack accountability systems</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 shrink-0 mt-0.5" height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-neutral-300">Rely on motivation instead of structure</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 shrink-0 mt-0.5" height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-neutral-300">Repeat the same mistakes</span>
</li>
</ul>
<div className="p-4 bg-white/5 border border-white/5 rounded-xl">
<p className="text-xs text-neutral-400 leading-relaxed">In this video, Andy breaks down why teams don't improve, what accountability actually looks like, and how to create consistent performance.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-sm font-medium text-neutral-500 mb-8 uppercase tracking-widest">Sales teams improving performance and consistency</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="h-8 md:h-12 px-6 flex items-center justify-center text-xs font-mono border border-dashed border-neutral-600 text-neutral-600 rounded">[IMAGE PLACEHOLDER]</div>
<div className="h-8 md:h-12 px-6 flex items-center justify-center text-xs font-mono border border-dashed border-neutral-600 text-neutral-600 rounded">[IMAGE PLACEHOLDER]</div>
<div className="h-8 md:h-12 px-6 flex items-center justify-center text-xs font-mono border border-dashed border-neutral-600 text-neutral-600 rounded">[IMAGE PLACEHOLDER]</div>
<div className="h-8 md:h-12 px-6 flex items-center justify-center text-xs font-mono border border-dashed border-neutral-600 text-neutral-600 rounded">[IMAGE PLACEHOLDER]</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950" id="problem">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="scroll-reveal inline-flex glow bg-white/5 border-white/10 border rounded-full mb-6 pt-2 pr-4 pb-2 pl-4 backdrop-blur-none space-x-2 items-center revealed">
<iconify-icon className="text-emerald-400" height="16" icon="solar:danger-circle-linear" width="16"></iconify-icon>
<span className="text-sm font-medium text-white">The Root Cause</span>
</div>
<h2 className="scroll-reveal stagger-1 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-6 revealed">
        Why Sales Teams <br/>
<span className="inline-block font-medium bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Stay Inconsistent</span>
</h2>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
<div className="scroll-reveal stagger-1 card-hover group revealed bg-zinc-900/50 border border-white/5 rounded-3xl p-8 hover:bg-zinc-900 hover:border-white/10 transition-all">
<div className="flex w-12 h-12 glow bg-white/5 border border-white/10 rounded-xl items-center justify-center mb-6">
<iconify-icon className="text-neutral-300" height="24" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Lack of accountability</h3>
<p className="text-gray-400 leading-relaxed">No system in place to enforce execution on a daily or weekly basis. Managers hope for the best instead of inspecting what they expect.</p>
</div>
<div className="scroll-reveal stagger-2 card-hover group revealed bg-zinc-900/50 border border-white/5 rounded-3xl p-8 hover:bg-zinc-900 hover:border-white/10 transition-all">
<div className="flex w-12 h-12 glow bg-white/5 border border-white/10 rounded-xl items-center justify-center mb-6">
<iconify-icon className="text-neutral-300" height="24" icon="solar:calendar-date-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Inconsistent habits</h3>
<p className="text-gray-400 leading-relaxed">Reps don't follow through daily. High activity one week is followed by a slump the next, leading to unpredictable pipeline generation.</p>
</div>
<div className="scroll-reveal stagger-3 card-hover group revealed bg-zinc-900/50 border border-white/5 rounded-3xl p-8 hover:bg-zinc-900 hover:border-white/10 transition-all">
<div className="flex w-12 h-12 glow bg-white/5 border border-white/10 rounded-xl items-center justify-center mb-6">
<iconify-icon className="text-neutral-300" height="24" icon="solar:book-bookmark-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Over-reliance on training</h3>
<p className="text-gray-400 leading-relaxed">Knowledge doesn't translate into action. You can send them to another seminar, but without an execution framework, nothing changes.</p>
</div>
<div className="scroll-reveal stagger-4 card-hover group revealed bg-zinc-900/50 border border-white/5 rounded-3xl p-8 hover:bg-zinc-900 hover:border-white/10 transition-all">
<div className="flex w-12 h-12 glow bg-white/5 border border-white/10 rounded-xl items-center justify-center mb-6">
<iconify-icon className="text-neutral-300" height="24" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">No performance structure</h3>
<p className="text-gray-400 leading-relaxed">Results fluctuate constantly because the foundation is built on individual motivation rather than a robust, standardized operational structure.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-black relative overflow-hidden">
<div className="absolute inset-0 bg-emerald-900/10 blur-[100px] z-0"></div>
<div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
<h2 className="scroll-reveal text-3xl md:text-5xl font-light tracking-tight text-white mb-8 leading-tight">
      The Problem Isn't Knowledge.<br/>
<span className="font-medium text-emerald-400">It's Execution.</span>
</h2>
<div className="scroll-reveal stagger-1 text-xl text-neutral-400 font-light space-y-4">
<p>More training won't fix this.</p>
<p>More tools won't fix this.</p>
<p className="text-white pt-4">Performance improves when:</p>
</div>
<div className="scroll-reveal stagger-2 mt-8 inline-flex flex-col md:flex-row gap-4 md:gap-8 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" height="20" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-sm font-medium text-neutral-200">Execution is consistent</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" height="20" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-sm font-medium text-neutral-200">Accountability is clear</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" height="20" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-sm font-medium text-neutral-200">Standards are enforced</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950" id="approach">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="scroll-reveal-left revealed">
<div className="inline-flex glow bg-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm space-x-2 items-center">
<iconify-icon className="text-emerald-400" height="16" icon="solar:shield-check-linear" width="16"></iconify-icon>
<span className="text-sm font-medium text-white">The Solution</span>
</div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-6">
          Sales Accountability<br/>
<span className="font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Systems</span>
</h2>
<p className="text-lg text-gray-400 leading-relaxed mb-8">
          Top teams don't rely on motivation. They rely on structure, strict accountability, and consistent daily action.
        </p>
<div className="space-y-6">
<div className="flex items-start space-x-4 p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-emerald-500/30 transition-colors neon-border">
<div className="flex w-10 h-10 shrink-0 glow bg-emerald-500/10 border border-emerald-500/20 rounded-xl items-center justify-center text-emerald-400 font-bold">1</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Structure</h4>
<p className="text-sm text-gray-400">Clear frameworks for every phase of the sales process.</p>
</div>
</div>
<div className="flex items-start space-x-4 p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-emerald-500/30 transition-colors">
<div className="flex w-10 h-10 shrink-0 glow bg-emerald-500/10 border border-emerald-500/20 rounded-xl items-center justify-center text-emerald-400 font-bold">2</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Accountability</h4>
<p className="text-sm text-gray-400">Transparent metrics and enforced standards across the team.</p>
</div>
</div>
<div className="flex items-start space-x-4 p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-emerald-500/30 transition-colors">
<div className="flex w-10 h-10 shrink-0 glow bg-emerald-500/10 border border-emerald-500/20 rounded-xl items-center justify-center text-emerald-400 font-bold">3</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Consistent Action</h4>
<p className="text-sm text-gray-400">Habit-building routines that turn effort into results.</p>
</div>
</div>
</div>
</div>
<div className="scroll-reveal-right revealed">
<div className="relative">
<div className="aspect-square max-w-md mx-auto overflow-hidden glow border-white/10 border rounded-3xl shadow-2xl bg-zinc-900 flex flex-col items-center justify-center p-8 relative z-10">
<iconify-icon className="text-neutral-700 mb-8" height="80" icon="solar:round-transfer-diagonal-linear" width="80"></iconify-icon>
<h3 className="text-2xl font-medium text-white text-center mb-2">This is what turns</h3>
<div className="flex items-center gap-4 mt-4">
<span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-neutral-300">Effort</span>
<iconify-icon className="text-emerald-400" height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
<span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 font-medium">Results</span>
</div>
</div>
<div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-600 rounded-2xl opacity-20 blur-xl floating z-0"></div>
<div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-600 rounded-2xl opacity-20 blur-xl floating z-0" style={{animationDelay: '-2s'}}></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="scroll-reveal inline-flex glow bg-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm space-x-2 items-center revealed">
<iconify-icon className="text-emerald-400" height="16" icon="solar:star-fall-linear" width="16"></iconify-icon>
<span className="text-sm font-medium text-white">Proven Results</span>
</div>
<div className="scroll-reveal stagger-1 max-w-4xl mx-auto mb-12">
<div className="w-full aspect-video bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center relative group overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-neutral-800/50 mix-blend-overlay"></div>
<span className="text-neutral-500 font-mono text-sm uppercase tracking-widest relative z-10">[IMAGE PLACEHOLDER] Teams improving execution</span>
</div>
</div>
<p className="scroll-reveal stagger-2 max-w-2xl mx-auto text-xl text-neutral-400 font-light">
      Sales teams work with Andy Miller to improve accountability and consistent execution.
    </p>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvc3ZnPg==')]" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="scroll-reveal text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-6">
        How Andy Improves <br/>
<span className="font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Sales Teams</span>
</h2>
<div className="scroll-reveal stagger-1 max-w-5xl mx-auto mt-16">
<div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative">

<div className="hidden md:block absolute top-1/2 left-16 right-16 h-px bg-white/10 -translate-y-1/2 z-0"></div>
<div className="grid md:grid-cols-3 gap-12 relative z-10">
<div className="text-center relative">
<div className="w-16 h-16 flex bg-zinc-900 border border-white/20 rounded-2xl mx-auto mb-6 shadow-lg backdrop-blur-xl items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
<span className="text-2xl font-bold text-emerald-400">1</span>
</div>
<h4 className="text-white font-medium text-lg mb-2">Identify gaps</h4>
<p className="text-neutral-400 text-sm">Pinpoint exactly where execution is breaking down in your process.</p>
</div>
<div className="text-center relative">
<div className="w-16 h-16 flex bg-zinc-900 border border-emerald-500/30 rounded-2xl mx-auto mb-6 shadow-lg backdrop-blur-xl items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform">
<span className="text-2xl font-bold text-emerald-400">2</span>
</div>
<h4 className="text-white font-medium text-lg mb-2">Build systems</h4>
<p className="text-neutral-400 text-sm">Implement strict accountability frameworks and standards.</p>
</div>
<div className="text-center relative">
<div className="w-16 h-16 flex bg-zinc-900 border border-white/20 rounded-2xl mx-auto mb-6 shadow-lg backdrop-blur-xl items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
<span className="text-2xl font-bold text-emerald-400">3</span>
</div>
<h4 className="text-white font-medium text-lg mb-2">Improve results</h4>
<p className="text-neutral-400 text-sm">Drive consistency that leads to predictable, scaling performance.</p>
</div>
</div>
</div>
</div>
<div className="scroll-reveal stagger-2 mt-12">
<a className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium transition-all" href="#contact">
          Improve My Team
          <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="scroll-reveal text-3xl md:text-4xl font-light tracking-tight text-white mb-6">What's Included</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
<div className="scroll-reveal stagger-1 bg-zinc-900/50 rounded-2xl p-6 border border-white/5 backdrop-blur-sm flex items-center gap-4">
<iconify-icon className="text-emerald-400 shrink-0" height="24" icon="solar:cup-star-linear" width="24"></iconify-icon>
<span className="text-white font-medium">Sales Leadership Coaching</span>
</div>
<div className="scroll-reveal stagger-2 bg-zinc-900/50 rounded-2xl p-6 border border-white/5 backdrop-blur-sm flex items-center gap-4">
<iconify-icon className="text-emerald-400 shrink-0" height="24" icon="solar:shield-keyhole-linear" width="24"></iconify-icon>
<span className="text-white font-medium">Accountability Systems</span>
</div>
<div className="scroll-reveal stagger-3 bg-zinc-900/50 rounded-2xl p-6 border border-white/5 backdrop-blur-sm flex items-center gap-4">
<iconify-icon className="text-emerald-400 shrink-0" height="24" icon="solar:widget-add-linear" width="24"></iconify-icon>
<span className="text-white font-medium">Performance Frameworks</span>
</div>
<div className="scroll-reveal stagger-4 bg-zinc-900/50 rounded-2xl p-6 border border-white/5 backdrop-blur-sm flex items-center gap-4">
<iconify-icon className="text-emerald-400 shrink-0" height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<span className="text-white font-medium">Team Training</span>
</div>
<div className="scroll-reveal stagger-5 lg:col-span-2 bg-zinc-900/50 rounded-2xl p-6 border border-white/5 backdrop-blur-sm flex items-center gap-4">
<iconify-icon className="text-emerald-400 shrink-0" height="24" icon="solar:presentation-graph-linear" width="24"></iconify-icon>
<span className="text-white font-medium">Sales Workshops</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950 border-t border-white/5" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="scroll-reveal-left">
<div className="aspect-[4/5] w-full max-w-md mx-auto bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden relative group">
<div className="absolute inset-0 bg-neutral-800/50 flex items-center justify-center">
<span className="text-neutral-500 font-mono text-sm uppercase tracking-widest">[IMAGE PLACEHOLDER]</span>
</div>
<div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl"></div>
</div>
</div>
<div className="scroll-reveal-right space-y-6">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-2">Hi, I'm Andy Miller.</h2>
<div className="w-12 h-1 bg-emerald-500 rounded-full mb-8"></div>
<div className="space-y-6 text-lg text-neutral-400 font-light leading-relaxed">
<p>I work with sales teams that know what to do but aren't doing it consistently.</p>
<p className="text-white font-medium">The issue isn't knowledge — it's execution.</p>
<p>My focus is helping teams build accountability so results improve, day in and day out. No fluff, just practical systems that force execution.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5" id="faq">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="scroll-reveal text-3xl font-light tracking-tight text-white">Frequently Asked Questions</h2>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="scroll-reveal p-6 bg-zinc-900/30 rounded-xl border border-white/5">
<h4 className="text-lg font-medium text-white mb-3">Who is this for?</h4>
<p className="text-neutral-400 text-sm">Sales leaders, teams, and managers who need to enforce consistency and drive execution.</p>
</div>
<div className="scroll-reveal p-6 bg-zinc-900/30 rounded-xl border border-white/5">
<h4 className="text-lg font-medium text-white mb-3">Is this training or coaching?</h4>
<p className="text-neutral-400 text-sm">Both — but heavily focused on practical execution rather than just theory.</p>
</div>
<div className="scroll-reveal p-6 bg-zinc-900/30 rounded-xl border border-white/5">
<h4 className="text-lg font-medium text-white mb-3">Does this work for experienced teams?</h4>
<p className="text-neutral-400 text-sm">Yes, especially those lacking consistency or relying too heavily on outdated motivation tactics.</p>
</div>
<div className="scroll-reveal p-6 bg-zinc-900/30 rounded-xl border border-white/5">
<h4 className="text-lg font-medium text-white mb-3">What makes this different?</h4>
<p className="text-neutral-400 text-sm">We focus on building accountability systems, not just dumping knowledge on your reps.</p>
</div>
<div className="scroll-reveal md:col-span-2 p-6 bg-emerald-900/10 border border-emerald-500/20 rounded-xl text-center">
<h4 className="text-lg font-medium text-emerald-400 mb-2">How do we start?</h4>
<p className="text-neutral-300 text-sm">Book a call below to discuss your team's specific execution gaps.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent z-0"></div>
<div className="max-w-3xl mx-auto px-4 relative z-10 text-center">
<h2 className="scroll-reveal text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
      Build a Consistent <br/>
<span className="font-medium text-emerald-400">Sales Team</span>
</h2>
<p className="scroll-reveal stagger-1 text-lg text-neutral-400 mb-12">
      Book a call to improve how your team performs every day.
    </p>
<div className="scroll-reveal stagger-2 w-full aspect-[4/3] max-w-2xl mx-auto bg-zinc-900 border border-white/10 rounded-2xl flex flex-col items-center justify-center mb-8 shadow-2xl">
<iconify-icon className="text-neutral-600 mb-4" height="48" icon="solar:calendar-linear" width="48"></iconify-icon>
<span className="text-neutral-500 font-mono text-sm uppercase tracking-widest">[CALENDLY PLACEHOLDER]</span>
</div>
<button className="scroll-reveal stagger-3 inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-emerald-400 to-teal-400 text-black font-semibold rounded-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(16,185,129,0.3)]">
      Book My Call
      <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</section>

<footer className="bg-black border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center space-x-3">
<iconify-icon className="text-emerald-400" height="24" icon="solar:bolt-circle-linear" width="24"></iconify-icon>
<span className="text-lg font-medium text-white tracking-tight">Big Swift Kick</span>
</div>
<p className="text-neutral-500 text-sm">
        © 2024 Andy Miller / Big Swift Kick. All rights reserved.
      </p>
</div>
</div>
</footer>



    </>
  );
}
