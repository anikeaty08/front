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

    // Download functionality
    document.getElementById('downloadHtml').addEventListener('click', () => {
      const source = '<!DOCTYPE html>' + document.documentElement.outerHTML;
      const blob = new Blob([source], {type: 'text/html'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'quantumflow-landing.html';
      a.click();
      URL.revokeObjectURL(url);
    });

    // Smooth scroll for navigation links
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

    // Add hover effects to cards
    document.querySelectorAll('.gradient-border').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.transition = 'transform 0.3s ease';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
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
      

<header className="relative z-50 opacity-0 animate-fade-in-up">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex items-center justify-center rounded-xl border border-lime-400/50 bg-gradient-to-br from-lime-400/10 to-emerald-500/10 backdrop-blur-sm">
<svg className="lucide lucide-zap w-5 h-5 text-lime-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="sm:text-xl text-lg font-semibold tracking-tight">Quantum</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-lime-400 transition-all duration-300 hover:scale-105" href="#solutions">Solutions</a>
<a className="hover:text-lime-400 transition-all duration-300 hover:scale-105" href="#platform">Platform</a>
<a className="hover:text-lime-400 transition-all duration-300 hover:scale-105" href="#enterprise">Enterprise</a>
<a className="hover:text-lime-400 transition-all duration-300 hover:scale-105" href="#resources">Resources</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:block px-4 py-2 text-sm font-medium text-slate-300 hover:text-lime-400 transition-colors">Sign In</button>
<button className="px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-lime-400 to-emerald-500 font-semibold text-sm text-black hover:from-lime-300 hover:to-emerald-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lime-400/25">
          Get Started
        </button>
</div>
</nav>
</header>

<section className="relative z-10 pt-8 sm:pt-16 lg:pt-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

<div className="lg:col-span-7 opacity-0 animate-fade-in-up animate-delay-100">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-lime-400/10 to-emerald-500/10 border border-lime-400/20 mb-6">
<svg className="lucide lucide-sparkles w-4 h-4 text-lime-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
<span className="text-xs font-medium text-lime-300">Powered by Advanced AI</span>
</div>
<h1 className="sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] text-4xl font-thin tracking-tighter mb-6">
<span className="block text-slate-100">Next-gen</span>
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400">financial</span>
<span className="block text-slate-100">intelligence</span>
</h1>
<p className="sm:text-xl leading-relaxed max-w-2xl text-lg text-slate-300 mb-8">
            Transform your financial operations with AI-powered analytics, real-time insights, and automated compliance. Join 50,000+ finance teams already using QuantumFlow.
          </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<button className="hover:from-lime-300 hover:to-emerald-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-lime-400/25 font-semibold text-black bg-gradient-to-r from-lime-400 to-emerald-500 rounded-3xl pt-4 pr-8 pb-4 pl-8">
              Start Free Trial
            </button>
<button className="flex items-center justify-center gap-2 px-8 py-4 rounded-3xl border border-slate-600 font-semibold hover:border-lime-400/50 hover:bg-lime-400/5 transition-all duration-300">
<svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
              Watch Demo
            </button>
</div>

<div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check w-4 h-4 text-lime-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>SOC 2 Compliant</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-lock w-4 h-4 text-lime-400" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="">Bank-grade Security</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-globe w-4 h-4 text-lime-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span>Global Coverage</span>
</div>
</div>
</div>

<div className="lg:col-span-5 opacity-0 animate-fade-in-up animate-delay-200">
<div className="space-y-6">

<div className="gradient-border float" style={{transform: `translateY(0px)`, transition: `transform 0.3s`}}>
<div className="gradient-border-inner pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-lime-400/20 to-emerald-500/20 flex items-center justify-center">
<svg className="lucide lucide-brain-circuit w-5 h-5 text-lime-400" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<div className="">
<h3 className="font-semibold text-white">AI Revenue Forecast</h3>
<p className="text-xs text-slate-400">Real-time predictions</p>
</div>
</div>
<div className="text-right">
<div className="text-2xl font-bold text-lime-400">$2.4M</div>
<div className="text-xs text-emerald-400 flex items-center gap-1">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                      +23.5%
                    </div>
</div>
</div>
<div className="h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-gradient-to-r from-lime-400 to-emerald-500 rounded-full"></div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-gradient-to-br from-white/5 to-white/10 border-white/10 border rounded-3xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-users w-4 h-4 text-cyan-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-xs font-medium text-slate-300">Active Users</span>
</div>
<div className="text-2xl font-bold text-white">847K</div>
<div className="text-xs text-cyan-400">+12% this month</div>
</div>
<div className="bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-4 border border-white/10">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-dollar-sign w-4 h-4 text-emerald-400" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<span className="text-xs font-medium text-slate-300">Cost Savings</span>
</div>
<div className="text-2xl font-bold text-white">$5.2M</div>
<div className="text-xs text-emerald-400">Automated this year</div>
</div>
</div>

<div className="grid grid-cols-5 gap-4">
<div className="col-span-3">
<img alt="Financial team collaboration" className="w-full h-32 object-cover rounded-3xl" src="https://images.unsplash.com/photo-1636690513351-0af1763f6237?w=1080&q=80" />
</div>
<div className="col-span-2 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-4 border border-white/10 flex flex-col justify-center items-center text-center">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-2">
<svg className="lucide lucide-trophy w-4 h-4 text-black" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<span className="text-xs font-medium text-white">Best FinTech</span>
<span className="text-xs text-slate-400">Platform 2024</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 lg:mt-24 opacity-0 animate-fade-in-up animate-delay-300">
<div className="lg:p-8 bg-gradient-to-r from-white/5 via-white/10 to-white/5 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col lg:flex-row items-center lg:items-center gap-6 lg:gap-8">
<div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-lime-400/20 to-emerald-500/20 border border-lime-400/30 shrink-0">
<svg className="lucide lucide-rocket w-8 h-8 text-lime-400" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<div className="flex-1 text-center lg:text-left">
<h3 className="text-xl font-bold text-white mb-2">Accelerate Financial Decision Making</h3>
<p className="text-slate-300 leading-relaxed">
                Leverage machine learning algorithms to predict market trends, optimize cash flow, and automate compliance reporting. 
                Our platform processes over 10 billion transactions daily with 99.9% accuracy.
              </p>
</div>
<div className="flex items-center gap-6 shrink-0">
<div className="text-center">
<div className="text-3xl font-black bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent">4.9</div>
<div className="text-xs font-medium text-slate-400">Customer Rating</div>
</div>
<div className="text-center">
<div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">99.9%</div>
<div className="text-xs font-medium text-slate-400">Uptime SLA</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 opacity-0 animate-fade-in-up animate-delay-400">
<p className="text-center text-sm text-slate-400 mb-8">Trusted by leading financial institutions worldwide</p>
<div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-50">
<div className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-building-2 w-6 h-6" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
<span className="font-semibold">Goldman Sachs</span>
</div>
<div className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-landmark w-6 h-6" data-lucide="landmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 18v-7"></path><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg>
<span className="font-semibold">JPMorgan Chase</span>
</div>
<div className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-banknote w-6 h-6" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
<span className="font-semibold">BlackRock</span>
</div>
<div className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-coins w-6 h-6" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
<span className="font-semibold">Fidelity</span>
</div>
</div>
</div>
</div>
</section>

<button className="md:hidden fixed top-6 right-4 z-50 w-10 h-10 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>


<div className="fixed inset-0 pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-lime-400/5 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
<div className="absolute top-1/2 right-1/3 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl"></div>
</div>


    </>
  );
}
