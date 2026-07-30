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
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
      el.style.animationPlayState = 'paused';
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
      

<header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/60">
<div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
<a className="flex items-center gap-2 text-slate-900 font-semibold tracking-tight fade-in font-sans" href="#" style={{animationPlayState: `running`}}>
<svg className="lucide lucide-zap w-6 h-6 text-indigo-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
        FinFlow
      </a>
<nav className="hidden lg:flex items-center gap-8 text-sm fade-in fade-in-delay-1" style={{animationPlayState: `running`}}>
<a className="text-slate-600 hover:text-slate-900 font-medium transition-colors font-sans" href="#">Solutions</a>
<a className="text-slate-600 hover:text-slate-900 font-medium transition-colors font-sans" href="#">Enterprise</a>
<a className="text-slate-600 hover:text-slate-900 font-medium transition-colors font-sans" href="#">Analytics</a>
<a className="text-slate-600 hover:text-slate-900 font-medium transition-colors font-sans" href="#">Resources</a>
<a className="text-slate-600 hover:text-slate-900 font-medium transition-colors font-sans" href="#">Developers</a>
</nav>
<div className="flex items-center gap-3 fade-in fade-in-delay-2" style={{animationPlayState: `running`}}>
<a className="hidden md:inline-block text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors font-sans" href="#">Sign in</a>
<a className="inline-flex items-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-800 transition-all hover:shadow-md font-sans" href="#">
          Get Started
          <svg className="lucide lucide-arrow-right w-4 h-4 ml-1.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button className="lg:hidden text-slate-600 hover:text-slate-900 transition-colors" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>

<div className="lg:hidden hidden border-t border-slate-200 bg-white/95 backdrop-blur-md" id="mobileMenu">
<nav className="px-4 sm:px-6 py-4 space-y-3">
<a className="block text-slate-700 font-medium py-2 hover:text-slate-900 transition-colors font-sans" href="#">Solutions</a>
<a className="block text-slate-700 font-medium py-2 hover:text-slate-900 transition-colors font-sans" href="#">Enterprise</a>
<a className="block text-slate-700 font-medium py-2 hover:text-slate-900 transition-colors font-sans" href="#">Analytics</a>
<a className="block text-slate-700 font-medium py-2 hover:text-slate-900 transition-colors font-sans" href="#">Resources</a>
<a className="block text-slate-700 font-medium py-2 hover:text-slate-900 transition-colors font-sans" href="#">Developers</a>
<div className="pt-3 border-t border-slate-200">
<a className="block text-slate-700 font-medium py-2 hover:text-slate-900 transition-colors font-sans" href="#">Sign in</a>
</div>
</nav>
</div>
</header>

<section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900">
<div className="absolute inset-0 bg-black/20"></div>
<div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="text-white">
<div className="inline-flex items-center gap-2 bg-cyan-600/20 text-cyan-300 rounded-full px-3 py-1 text-sm font-medium mb-6 fade-in font-sans" style={{animationPlayState: `running`}}>
<svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
            Trusted by 50,000+ businesses worldwide
          </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight fade-in fade-in-delay-1 font-instrument-serif font-normal" style={{animationPlayState: `running`}}>
            Financial intelligence<br className="hidden sm:block" />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-400 font-instrument-serif font-normal">built for scale</span>
</h1>
<p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed fade-in fade-in-delay-2 font-sans" style={{animationPlayState: `running`}}>
            Transform your business with AI-powered financial insights, automated workflows, and enterprise-grade security that grows with you.
          </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 fade-in fade-in-delay-3" style={{animationPlayState: `running`}}>
<a className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-cyan-500 transition-all hover:shadow-xl hover:scale-105 font-sans" href="#">
              Start Free Trial
              <svg className="lucide lucide-arrow-right w-5 h-5 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-medium text-white hover:bg-white/20 transition-all border border-white/20 font-sans" href="#">
<svg className="lucide lucide-play w-5 h-5 mr-2" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
              Watch Demo
            </a>
</div>
<div className="mt-12 fade-in fade-in-delay-4" style={{animationPlayState: `running`}}>
<p className="text-sm text-slate-400 mb-4 font-sans">Integrated with leading platforms</p>
<div className="flex items-center gap-6 opacity-70">
<svg className="lucide lucide-database w-6 h-6 text-white/70" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
<svg className="lucide lucide-shield-check w-6 h-6 text-white/70" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<svg className="lucide lucide-globe w-6 h-6 text-white/70" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<svg className="lucide lucide-cpu w-6 h-6 text-white/70" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
</div>
</div>

<div className="relative fade-in fade-in-delay-2" style={{animationPlayState: `running`}}>

<div className="absolute -top-16 left-4 z-10 text-white bg-white/10 border-white/20 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-lg">
<div className="flex items-center gap-3 mb-2">
<svg className="lucide lucide-trending-up w-5 h-5 text-green-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="font-medium font-sans">Performance</span>
</div>
<p className="text-2xl font-instrument-serif font-normal">+127%</p>
<p className="text-sm text-slate-300 font-sans">Revenue growth</p>
</div>

<div className="absolute -bottom-16 -left-4 z-10 text-white bg-white/10 border-white/20 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-lg">
<div className="flex items-center gap-3 mb-2">
<svg className="lucide lucide-users w-5 h-5 text-blue-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-medium font-sans">Active Users</span>
</div>
<p className="text-2xl font-instrument-serif font-normal">2.4M</p>
<p className="text-sm text-slate-300 font-sans">This month</p>
</div>

<div className="absolute -bottom-16 -right-4 z-10 text-white bg-white/10 border-white/20 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg">
<svg className="lucide lucide-shield-check w-8 h-8 text-green-400 mx-auto" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<p className="text-xs text-slate-300 mt-2 font-sans">SOC 2 Certified</p>
</div>

<img alt="Financial Dashboard" className="w-full rounded-2xl shadow-2xl object-cover h-96 lg:h-full" src="/assets/8eac089d-6f9c-4f95-99ec-0218c0c6ec17_1600w.jpg" />
</div>
</div>
</div>
</section>

<section className="bg-white py-20 lg:py-32">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 fade-in" style={{animationPlayState: `running`}}>
<h2 className="text-3xl lg:text-4xl text-slate-900 tracking-tight mb-4 font-instrument-serif font-normal">Everything you need to scale</h2>
<p className="text-lg text-slate-600 max-w-2xl mx-auto font-sans">Powerful tools and insights that help ambitious teams build better financial products.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="group p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 fade-in fade-in-delay-1" style={{animationPlayState: `paused`}}>
<div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan-600/10 text-cyan-600 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-brain w-7 h-7" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">AI-Powered Analytics</h3>
<p className="text-slate-600 leading-relaxed font-sans">Advanced machine learning algorithms provide real-time insights and predictive analytics for smarter financial decisions.</p>
</div>
<div className="group p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 fade-in fade-in-delay-2" style={{animationPlayState: `paused`}}>
<div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-600/10 text-purple-600 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-shield-check w-7 h-7" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">Enterprise Security</h3>
<p className="text-slate-600 leading-relaxed font-sans">Bank-level encryption, multi-factor authentication, and compliance with global security standards including SOC 2 and ISO 27001.</p>
</div>
<div className="group p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 fade-in fade-in-delay-3" style={{animationPlayState: `paused`}}>
<div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-600/10 text-purple-600 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-zap w-7 h-7" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">Lightning Fast API</h3>
<p className="text-slate-600 leading-relaxed font-sans">Developer-first API with 99.9% uptime, comprehensive documentation, and SDKs for all major programming languages.</p>
</div>
<div className="group p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 fade-in fade-in-delay-1" style={{animationPlayState: `paused`}}>
<div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan-600/10 text-cyan-600 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-globe w-7 h-7" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">Global Infrastructure</h3>
<p className="text-slate-600 leading-relaxed font-sans">Multi-region deployment with edge computing ensures low latency and high availability across 40+ countries worldwide.</p>
</div>
<div className="group p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 fade-in fade-in-delay-2" style={{animationPlayState: `paused`}}>
<div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan-600/10 text-cyan-600 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-trending-up w-7 h-7" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">Advanced Reporting</h3>
<p className="text-slate-600 leading-relaxed font-sans">Customizable dashboards, automated reports, and real-time monitoring with intelligent alerts and notifications.</p>
</div>
<div className="group p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 fade-in fade-in-delay-3" style={{animationPlayState: `paused`}}>
<div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-teal-600/10 text-teal-600 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-users w-7 h-7" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">Team Collaboration</h3>
<p className="text-slate-600 leading-relaxed font-sans">Role-based access controls, audit trails, and collaborative workflows that scale with your organization's needs.</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 text-white py-20 lg:py-32">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 fade-in" style={{animationPlayState: `paused`}}>
<h2 className="text-3xl lg:text-4xl leading-tight tracking-tight mb-6 font-instrument-serif font-normal">Investment solutions that adapt to your strategy</h2>
<p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">Our institutional-grade platform combines cutting-edge technology with deep financial expertise to deliver superior results.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8">
<div className="group p-8 bg-slate-800 rounded-2xl hover:bg-slate-750 transition-all duration-300 fade-in fade-in-delay-1" style={{animationPlayState: `paused`}}>
<div className="flex items-center gap-3 mb-6">
<svg className="lucide lucide-target w-8 h-8 text-indigo-400" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<h4 className="text-xl font-semibold font-sans">Precision Portfolio Management</h4>
</div>
<p className="text-slate-400 mb-6 leading-relaxed font-sans">AI-driven asset allocation and risk management tools that optimize your portfolio performance across market cycles.</p>
<img alt="Portfolio Analytics" className="rounded-xl w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src="/assets/5c17ca71-0e51-4ac2-a6b0-02dbf73b8fdd_800w.jpg" />
<div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
<div className="flex items-center gap-1">
<svg className="lucide lucide-trending-up w-4 h-4 text-green-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="font-sans">15.7% avg return</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-shield w-4 h-4 text-blue-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="font-sans">Low volatility</span>
</div>
</div>
</div>
<div className="group p-8 bg-slate-800 rounded-2xl hover:bg-slate-750 transition-all duration-300 fade-in fade-in-delay-2" style={{animationPlayState: `paused`}}>
<div className="flex items-center gap-3 mb-6">
<svg className="lucide lucide-lock w-8 h-8 text-green-400" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<h4 className="text-xl font-semibold font-sans">Institutional-Grade Security</h4>
</div>
<p className="text-slate-400 mb-6 leading-relaxed font-sans">Multi-signature wallets, cold storage solutions, and comprehensive insurance coverage protect your digital assets.</p>
<img alt="Security Infrastructure" className="rounded-xl w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src="/assets/956ef7f0-86a7-4d5a-ae7b-43d0ca339aba_800w.jpg" />
<div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
<div className="flex items-center gap-1">
<svg className="lucide lucide-shield-check w-4 h-4 text-green-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-sans">SOC 2 Type II</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-key w-4 h-4 text-blue-400" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
<span className="font-sans">Multi-sig custody</span>
</div>
</div>
</div>
<div className="group p-8 bg-slate-800 rounded-2xl hover:bg-slate-750 transition-all duration-300 fade-in fade-in-delay-3" style={{animationPlayState: `paused`}}>
<div className="flex items-center gap-3 mb-6">
<svg className="lucide lucide-bar-chart-3 w-8 h-8 text-purple-400" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<h4 className="text-xl font-semibold font-sans">Real-Time Market Intelligence</h4>
</div>
<p className="text-slate-400 mb-6 leading-relaxed font-sans">Advanced analytics and market insights powered by machine learning algorithms and alternative data sources.</p>
<img alt="Market Intelligence" className="rounded-xl w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src="/assets/551013be-61e3-49e3-9001-73a3a9fea0c0_800w.jpg" />
<div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
<div className="flex items-center gap-1">
<svg className="lucide lucide-clock w-4 h-4 text-yellow-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-sans">Real-time data</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-brain w-4 h-4 text-purple-400" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
<span className="font-sans">AI predictions</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-20 lg:py-32">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="fade-in" style={{animationPlayState: `paused`}}>
<img alt="Sarah Chen, CTO" className="rounded-2xl shadow-lg object-cover w-full h-96 lg:h-[500px]" src="/assets/336569e1-5ebd-455c-8b6f-f159ef2b28ed_1600w.jpg" />
</div>
<div className="bg-slate-900 text-white rounded-2xl p-10 lg:p-12 shadow-xl fade-in fade-in-delay-1" style={{animationPlayState: `paused`}}>
<div className="flex items-center gap-1 mb-6">
<svg className="lucide lucide-star w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-semibold font-sans">
              SC
            </div>
<div>
<p className="font-semibold text-lg font-sans">Sarah Chen</p>
<p className="text-slate-400 font-sans">Chief Technology Officer, TechFlow Inc</p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-800">
<div className="flex items-center gap-6 text-sm text-slate-400">
<div className="flex items-center gap-2">
<svg className="lucide lucide-building w-4 h-4" data-lucide="building" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="16" x="4" y="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
<span className="font-sans">Fortune 500 Company</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-sans">10,000+ employees</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-20 lg:py-32">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 fade-in" style={{animationPlayState: `paused`}}>
<h2 className="text-3xl lg:text-4xl text-slate-900 tracking-tight mb-4 font-instrument-serif font-normal">Trusted by industry leaders worldwide</h2>
<p className="text-lg text-slate-600 font-sans">Join thousands of companies that rely on FinFlow for their financial infrastructure</p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow fade-in fade-in-delay-1" style={{animationPlayState: `paused`}}>
<div className="flex items-center justify-center mb-4">
<svg className="lucide lucide-activity w-8 h-8 text-indigo-600" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<p className="text-3xl lg:text-4xl text-slate-900 mb-2 font-instrument-serif font-normal">$127B</p>
<p className="text-sm text-slate-600 font-medium font-sans">Total volume processed</p>
</div>
<div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow fade-in fade-in-delay-2" style={{animationPlayState: `paused`}}>
<div className="flex items-center justify-center mb-4">
<svg className="lucide lucide-users w-8 h-8 text-green-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<p className="text-3xl lg:text-4xl text-slate-900 mb-2 font-instrument-serif font-normal">2.4M</p>
<p className="text-sm text-slate-600 font-medium font-sans">Active users globally</p>
</div>
<div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow fade-in fade-in-delay-3" style={{animationPlayState: `paused`}}>
<div className="flex items-center justify-center mb-4">
<svg className="lucide lucide-star w-8 h-8 text-yellow-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-3xl lg:text-4xl text-slate-900 mb-2 font-instrument-serif font-normal">4.9★</p>
<p className="text-sm text-slate-600 font-medium font-sans">Customer satisfaction</p>
</div>
<div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow fade-in fade-in-delay-4" style={{animationPlayState: `paused`}}>
<div className="flex items-center justify-center mb-4">
<svg className="lucide lucide-shield-check w-8 h-8 text-blue-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-3xl lg:text-4xl text-slate-900 mb-2 font-instrument-serif font-normal">99.9%</p>
<p className="text-sm text-slate-600 font-medium font-sans">API uptime guarantee</p>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-r from-cyan-600 to-purple-600 py-20 lg:py-24">
<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
<div className="max-w-3xl mx-auto fade-in" style={{animationPlayState: `paused`}}>
<h2 className="text-3xl lg:text-5xl tracking-tight mb-6 font-instrument-serif font-normal">Ready to transform your financial operations?</h2>
<p className="text-xl text-cyan-100 mb-10 leading-relaxed font-sans">Join thousands of companies already using FinFlow to build the future of finance. Start your free trial today.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-medium text-cyan-600 shadow-lg hover:bg-slate-100 transition-all hover:shadow-xl hover:scale-105 font-sans" href="#">
            Start Free Trial
            <svg className="lucide lucide-arrow-right w-5 h-5 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-medium text-white hover:bg-white/10 transition-all font-sans" href="#">
<svg className="lucide lucide-calendar w-5 h-5 mr-2" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
            Schedule Demo
          </a>
</div>
<div className="mt-12 text-cyan-200 text-sm">
<p className="font-sans">No credit card required • 30-day free trial • Cancel anytime</p>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white">
<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">

<div className="col-span-2">
<div className="flex items-center gap-2 mb-6">
<svg className="lucide lucide-zap w-6 h-6 text-indigo-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-xl font-semibold font-sans">FinFlow</span>
</div>
<p className="text-slate-400 mb-6 leading-relaxed font-sans">Advanced financial solutions that scale with your business. Build the future of finance with enterprise-grade tools and AI-powered insights.</p>
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>

<div>
<h4 className="font-semibold mb-4 font-sans">Product</h4>
<ul className="space-y-3 text-slate-400">
<li><a className="hover:text-white transition-colors font-sans" href="#">Analytics</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">API</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Security</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Enterprise</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-4 font-sans">Solutions</h4>
<ul className="space-y-3 text-slate-400">
<li><a className="hover:text-white transition-colors font-sans" href="#">Banking</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Fintech</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Insurance</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Investment</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Lending</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-4 font-sans">Resources</h4>
<ul className="space-y-3 text-slate-400">
<li><a className="hover:text-white transition-colors font-sans" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Case Studies</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Webinars</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Support Center</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-4 font-sans">Company</h4>
<ul className="space-y-3 text-slate-400">
<li><a className="hover:text-white transition-colors font-sans" href="#">About</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Press</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Partners</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-400 text-sm font-sans">© 2024 FinFlow. All rights reserved.</p>
<div className="flex items-center gap-6 text-sm text-slate-400">
<a className="hover:text-white transition-colors font-sans" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors font-sans" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors font-sans" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
