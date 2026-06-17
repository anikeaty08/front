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



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
'slide-left': 'slideLeft 0.8s ease-out forwards',
'blur-in': 'blurIn 1s ease-out forwards',
'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate'
},
keyframes: {
fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
slideUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
slideLeft: { '0%': { opacity: '0', transform: 'translateX(30px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
blurIn: { '0%': { opacity: '0', filter: 'blur(10px)' }, '100%': { opacity: '1', filter: 'blur(0)' } },
pulseGlow: { '0%': { boxShadow: '0 0 20px rgba(20, 184, 166, 0.3)' }, '100%': { boxShadow: '0 0 40px rgba(20, 184, 166, 0.6)' } }
}
}
}
}



    lucide.createIcons();

    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn?.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Smooth scroll for internal links
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

    // Initialize animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.animate-slide-up, .animate-fade-in, .animate-blur-in').forEach(el => {
      observer.observe(el);
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
      

<div className="fixed inset-0 overflow-hidden -z-10">
<img alt="" className="w-full h-full object-cover blur-3xl scale-125 opacity-30" src="https://images.unsplash.com/photo-1635776062360-af423602aff3?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-black/60 to-green-900/20"></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-md border-b opacity-0 animate-fade-in bg-black/70 border-white/10" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
<div className="flex items-center gap-3">
<span className="uppercase text-xl font-light tracking-tight font-geist" style={{}}>Quantum</span>
</div>
<nav className="hidden md:flex gap-8 text-sm font-medium">
<a className="transition-all duration-300 hover:scale-105 font-geist hover:text-slate-400 font-light" href="#" style={{}}>Platform</a>
<a className="transition-all duration-300 hover:scale-105 font-geist hover:text-slate-400 font-light" href="#" style={{}}>Analytics</a>
<a className="transition-all duration-300 hover:scale-105 font-geist hover:text-slate-400 font-light" href="#" style={{}}>Trading Bots</a>
<a className="transition-all duration-300 hover:scale-105 font-geist hover:text-slate-400 font-light" href="#" style={{}}>Research</a>
<a className="transition-all duration-300 hover:scale-105 font-geist hover:text-slate-400 font-light" href="#" style={{}}>Enterprise</a>
</nav>
<div className="hidden md:flex items-center gap-4">
<button className="text-sm transition-all duration-300 font-geist hover:text-slate-400 font-light" style={{}}>Sign In</button>
<button className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm transition-all duration-300 hover:scale-105 hover:border-transparent font-geist border-white/20 bg-white/5 hover:bg-white hover:text-black font-light" style={{}}>
          Start Trading
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<button className="md:hidden p-2 rounded-lg transition-colors hover:bg-white/10" id="menuBtn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
<div className="hidden md:hidden border-t backdrop-blur-md border-white/10 bg-black/90" id="mobileMenu">
<nav className="flex flex-col gap-4 px-6 py-6 text-sm font-medium">
<a className="transition-colors font-geist hover:text-slate-400 font-light" href="#" style={{}}>Platform</a>
<a className="transition-colors font-geist hover:text-slate-400 font-light" href="#" style={{}}>Analytics</a>
<a className="transition-colors font-geist hover:text-slate-400 font-light" href="#" style={{}}>Trading Bots</a>
<a className="transition-colors font-geist hover:text-slate-400 font-light" href="#" style={{}}>Research</a>
<a className="transition-colors font-geist hover:text-slate-400 font-light" href="#" style={{}}>Enterprise</a>
<div className="flex flex-col gap-3 pt-4 border-t border-white/10">
<button className="text-sm text-left font-geist hover:text-slate-400 font-light" style={{}}>Sign In</button>
<button className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm transition-all duration-300 font-geist border-white/20 bg-white/5 hover:bg-white hover:text-black font-light" style={{}}>
            Start Trading
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</nav>
</div>
</header>

<section className="relative overflow-hidden bg-[url(https://cdn.midjourney.com/fee90b38-f398-49c3-bd8f-18d79dfafac4/0_0.png?w=800&amp;q=80)] bg-cover">

<div className="absolute inset-0 pointer-events-none">
<div className="w-full h-full opacity-20 bg-[linear-gradient(rgba(20,184,166,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.1)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
</div>
<div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 lg:pt-24 lg:pb-32">
<div className="mx-auto max-w-4xl text-center">
<div className="opacity-0 animate-slide-up" style={{animationDelay: '0.2s', opacity: '1', transform: 'translateY(0px)'}}>
<span className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs tracking-wider backdrop-blur-sm font-geist border-slate-400/40 bg-slate-400/10 text-slate-300 font-light" style={{}}>
<svg className="lucide lucide-sparkles w-3 h-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
            ADVANCED AI-POWERED CRYPTO INTELLIGENCE
          </span>
</div>
<h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl opacity-0 animate-slide-up" style={{animationDelay: '0.4s', opacity: '1', transform: 'translateY(0px)'}}>
<span className="bg-gradient-to-r bg-clip-text text-transparent font-geist font-medium from-white via-slate-200 to-cyan-300" style={{}}>
            Next-Generation
          </span>
<br/>
<span className="font-geist font-medium text-white" style={{}}>Crypto Trading Platform</span>
</h1>
<p className="mt-6 text-lg lg:text-xl max-w-2xl mx-auto opacity-0 animate-slide-up font-geist text-white/80 font-light" style={{animationDelay: '0.6s', opacity: '1', transform: 'translateY(0px)'}}>
          Harness the power of quantum computing and machine learning to identify profitable trading opportunities, analyze market sentiment, and execute trades with precision.
        </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-slide-up" style={{animationDelay: '0.8s', opacity: '1', transform: 'translateY(0px)'}}>
<button className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-slate-500 to-cyan-500 px-8 py-4 text-sm transition-all duration-300 hover:scale-105 animate-pulse-glow font-geist text-black hover:from-slate-400 hover:to-cyan-400 font-light" style={{}}>
<svg className="lucide lucide-rocket w-5 h-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
            Launch Trading Bot
          </button>
<button className="inline-flex items-center gap-3 rounded-lg border px-8 py-4 text-sm transition-all duration-300 hover:scale-105 backdrop-blur-sm font-geist border-white/20 bg-white/5 hover:bg-white hover:text-black font-light" style={{}}>
<svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
            Watch Demo
          </button>
</div>
</div>

<div className="relative mx-auto mt-16 lg:mt-24 max-w-5xl opacity-0 animate-blur-in" style={{animationDelay: '1s', opacity: '1', transform: 'translateY(0px)'}}>
<div className="relative rounded-2xl overflow-hidden border backdrop-blur-sm border-white/10 bg-black/40">
<img alt="Advanced Trading Dashboard" className="w-full h-64 lg:h-96 object-cover" src="https://cdn.midjourney.com/c2d2efcf-ff23-48bb-8e88-7e10a2c1f9af/0_1.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black/60"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-center gap-4 text-sm">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full animate-pulse bg-amber-400"></div>
<span className="font-geist text-white/90 font-light" style={{}}>Live Trading Active</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-trending-up w-4 h-4 text-teal-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="font-geist text-white/90 font-light" style={{}}>+247% Monthly ROI</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 lg:mt-24 grid grid-cols-2 gap-6 lg:gap-8 lg:grid-cols-4">
<div className="text-center rounded-2xl border p-6 backdrop-blur-sm opacity-0 animate-slide-up transition-all duration-300 hover:scale-105 bg-white/5 border-white/10 hover:bg-white/10" style={{animationDelay: '1.2s', opacity: '1', transform: 'translateY(0px)'}}>
<div className="flex items-center justify-center gap-3 text-2xl lg:text-3xl font-bold">
<svg className="lucide lucide-dollar-sign w-6 h-6 text-green-400" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<span className="font-geist font-medium" style={{}}>$2.8B+</span>
</div>
<p className="mt-2 text-sm font-geist text-white/70 font-light" style={{}}>Total Volume Traded</p>
</div>
<div className="text-center rounded-2xl border p-6 backdrop-blur-sm opacity-0 animate-slide-up transition-all duration-300 hover:scale-105 bg-white/5 border-white/10 hover:bg-white/10" style={{animationDelay: '1.4s', opacity: '1', transform: 'translateY(0px)'}}>
<div className="flex items-center justify-center gap-3 text-2xl lg:text-3xl font-bold">
<svg className="lucide lucide-users w-6 h-6 text-blue-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-geist font-medium" style={{}}>85K+</span>
</div>
<p className="mt-2 text-sm font-geist text-white/70 font-light" style={{}}>Active Traders</p>
</div>
<div className="text-center rounded-2xl border p-6 backdrop-blur-sm opacity-0 animate-slide-up transition-all duration-300 hover:scale-105 bg-white/5 border-white/10 hover:bg-white/10" style={{animationDelay: '1.6s', opacity: '1', transform: 'translateY(0px)'}}>
<div className="flex items-center justify-center gap-3 text-2xl lg:text-3xl font-bold">
<svg className="lucide lucide-cpu w-6 h-6 text-purple-400" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="font-geist font-medium" style={{}}>99.7%</span>
</div>
<p className="mt-2 text-sm font-geist text-white/70 font-light" style={{}}>AI Accuracy Rate</p>
</div>
<div className="text-center rounded-2xl border p-6 backdrop-blur-sm opacity-0 animate-slide-up transition-all duration-300 hover:scale-105 bg-white/5 border-white/10 hover:bg-white/10" style={{animationDelay: '1.8s', opacity: '1', transform: 'translateY(0px)'}}>
<div className="flex items-center justify-center gap-3 text-2xl lg:text-3xl font-bold">
<svg className="lucide lucide-zap w-6 h-6 text-yellow-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="font-geist font-medium" style={{}}>0.03s</span>
</div>
<p className="mt-2 text-sm font-geist text-white/70 font-light" style={{}}>Average Execution Time</p>
</div>
</div>
</div>
</section>

<section className="relative py-24 lg:py-32">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl tracking-tight font-geist font-medium" style={{}}>Powered by Advanced AI Technology</h2>
<p className="mt-4 text-lg font-geist text-white/80 font-light" style={{}}>Our quantum-enhanced algorithms process millions of data points to deliver unparalleled trading insights</p>
</div>
<div className="grid lg:grid-cols-3 gap-8">
<div className="rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-white/5 border-white/10 hover:bg-white/10">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-500 to-cyan-500 flex items-center justify-center mb-6">
<svg className="lucide lucide-brain w-6 h-6 text-black" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
</div>
<h3 className="text-xl mb-4 font-geist font-light" style={{}}>Neural Network Analysis</h3>
<p className="font-geist text-white/80 font-light" style={{}}>Deep learning models analyze market patterns, news sentiment, and social media trends to predict price movements with exceptional accuracy.</p>
</div>
<div className="rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-white/5 border-white/10 hover:bg-white/10">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-amber-500 flex items-center justify-center mb-6">
<svg className="lucide lucide-shield w-6 h-6 text-black" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="text-xl mb-4 font-geist font-light" style={{}}>Risk Management</h3>
<p className="font-geist text-white/80 font-light" style={{}}>Advanced risk assessment algorithms automatically adjust position sizes and implement stop-loss strategies to protect your capital.</p>
</div>
<div className="rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-white/5 border-white/10 hover:bg-white/10">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center mb-6">
<svg className="lucide lucide-activity w-6 h-6 text-black" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="text-xl mb-4 font-geist font-light" style={{}}>Real-Time Execution</h3>
<p className="font-geist text-white/80 font-light" style={{}}>Lightning-fast order execution across multiple exchanges with sub-millisecond latency and optimal price discovery.</p>
</div>
</div>
</div>
</section>



    </>
  );
}
