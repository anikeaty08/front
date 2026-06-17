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



tailwind.config = { theme: { fontFamily: { sans: ['Inter','sans-serif'] } } }



    // Initialize Lucide icons
    lucide.createIcons();

    // Mobile menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    navToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Cloud platform selection
    const choiceOptions = document.querySelectorAll('.choose-option');
    
    choiceOptions.forEach(option => {
      option.addEventListener('click', () => {
        // Remove active class from all options
        choiceOptions.forEach(opt => opt.classList.remove('active'));
        // Add active class to clicked option
        option.classList.add('active');
      });
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

    // Intersection Observer for animations
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

    // Observe all animated elements
    document.querySelectorAll('.opacity-0').forEach(el => {
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
      

<header className="sticky top-0 z-50 supports-[backdrop-filter]:bg-neutral-900/90 text-neutral-200 border-[#000]/50 border-b backdrop-blur-md">
<nav className="container mx-auto flex items-center justify-between py-4 px-6">
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight opacity-0 animate-fade-in-left" style={{opacity: '1', transform: 'translateY(0px)'}}>
<span className="bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent font-geist uppercase">SecureVault</span>
</div>
<ul className="hidden lg:flex items-center gap-8 text-sm font-medium opacity-0 animate-fade-in-up animate-delay-200" style={{opacity: '1', transform: 'translateY(0px)'}}>
<li><a className="hover:text-indigo-400 transition-colors duration-200 font-geist" href="#platform">Platform</a></li>
<li><a className="hover:text-indigo-400 transition-colors duration-200 font-geist" href="#solutions">Solutions</a></li>
<li><a className="hover:text-indigo-400 transition-colors duration-200 font-geist" href="#enterprise">Enterprise</a></li>
<li><a className="hover:text-indigo-400 transition-colors duration-200 font-geist" href="#pricing">Pricing</a></li>
<li><a className="hover:text-indigo-400 transition-colors duration-200 font-geist" href="#resources">Resources</a></li>
<li><a className="hover:text-indigo-400 transition-colors duration-200 font-geist" href="#company">Company</a></li>
</ul>
<div className="hidden lg:flex items-center gap-3 opacity-0 animate-fade-in-right animate-delay-400" style={{opacity: '1', transform: 'translateY(0px)'}}>
<button className="px-4 py-2 text-sm font-medium hover:text-indigo-400 transition-colors duration-200 font-geist">
          Sign in
        </button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition-all duration-200 hover:shadow-md font-geist">
          Start free trial
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<button className="lg:hidden p-2 rounded-lg hover:bg-neutral-800 transition-colors duration-200" id="nav-toggle">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</nav>

<div className="lg:hidden hidden border-t border-neutral-700/50 bg-neutral-900/95 backdrop-blur-md" id="mobile-menu">
<div className="px-6 py-4">
<ul className="space-y-4 text-sm font-medium mb-6">
<li><a className="block py-2 hover:text-indigo-400 transition-colors font-geist" href="#platform">Platform</a></li>
<li><a className="block py-2 hover:text-indigo-400 transition-colors font-geist" href="#solutions">Solutions</a></li>
<li><a className="block py-2 hover:text-indigo-400 transition-colors font-geist" href="#enterprise">Enterprise</a></li>
<li><a className="block py-2 hover:text-indigo-400 transition-colors font-geist" href="#pricing">Pricing</a></li>
<li><a className="block py-2 hover:text-indigo-400 transition-colors font-geist" href="#resources">Resources</a></li>
<li><a className="block py-2 hover:text-indigo-400 transition-colors font-geist" href="#company">Company</a></li>
</ul>
<div className="space-y-3">
<button className="w-full py-2 text-sm font-medium text-left hover:text-indigo-400 transition-colors font-geist">
            Sign in
          </button>
<button className="w-full inline-flex justify-center items-center gap-2 px-4 py-3 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition-all duration-200 font-geist">
            Start free trial
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d6636b4-b2ea-42f4-a4b1-f31ec35af96b_3840w.jpg)] bg-cover" id="platform" style={{}}>
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -left-20 -top-32 w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-100 via-white to-stone-50 blur-3xl opacity-60"></div>
<div className="absolute -right-20 -bottom-32 w-96 h-96 rounded-full bg-gradient-to-tl from-orange-100 via-white to-stone-50 blur-3xl opacity-60"></div>
</div>
<div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center py-24 px-6 relative">
<div className="opacity-0 animate-fade-in-left" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6 font-geist">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
          99.9% uptime guaranteed
        </div>
<h1 className="lg:text-7xl leading-tight text-5xl font-medium tracking-tight font-playfair mb-6">
          Enterprise-grade <br className="hidden lg:block"/>
<span className="bg-clip-text font-medium text-transparent font-playfair bg-gradient-to-l from-violet-200 to-pink-200">backup</span> that works
        </h1>
<p className="leading-relaxed text-xl text-neutral-100 font-geist mb-8">
          Automated cloud backup with military-grade encryption. Recover your data in minutes, not hours. Built for companies that can't afford downtime.
        </p>
<div className="flex flex-col sm:flex-row gap-4 mb-8">
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition-all duration-200 hover:shadow-lg font-geist">
            Start 30-day free trial
            <svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</button>
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-neutral-300 text-neutral-700 text-sm font-semibold hover:bg-neutral-50 transition-all duration-200 font-geist">
            Schedule demo
            <svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</button>
</div>
<div className="flex items-center gap-6 text-sm text-neutral-500">
<div className="flex gap-2 text-neutral-100 font-geist items-center">
<svg className="lucide lucide-check-circle w-4 h-4 text-green-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
            No credit card required
          </div>
<div className="flex gap-2 text-neutral-100 font-geist items-center">
<svg className="lucide lucide-shield w-4 h-4 text-green-500" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            SOC 2 Type II certified
          </div>
</div>
</div>
<div className="opacity-0 animate-fade-in-right animate-delay-200" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="p-6 rounded-2xl bg-white shadow-lg border border-neutral-200/50 hover:shadow-xl transition-shadow duration-300">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-neutral-600 font-geist">Recovery Speed</span>
<svg className="lucide lucide-zap w-5 h-5 text-yellow-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-4xl mb-2 font-playfair font-medium">15<span className="text-2xl text-neutral-500 font-playfair font-medium">min</span></h3>
<p className="text-sm text-neutral-500 font-geist">Average recovery time</p>
<div className="mt-4 h-2 bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full w-4/5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
</div>
</div>
<div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200/50 hover:shadow-xl transition-shadow duration-300">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-neutral-600 font-geist">Cost Savings</span>
<svg className="lucide lucide-trending-down w-5 h-5 text-green-500" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
</div>
<h3 className="text-4xl mb-2 font-playfair font-medium">89<span className="text-2xl text-neutral-500 font-playfair font-medium">%</span></h3>
<p className="text-sm text-neutral-500 font-geist">Reduction in backup costs</p>
<div className="mt-4 h-2 bg-white/50 rounded-full overflow-hidden">
<div className="h-full w-5/6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
</div>
</div>
<div className="sm:col-span-2 p-6 rounded-2xl bg-neutral-900 text-white hover:shadow-xl transition-shadow duration-300">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-neutral-300 font-geist">Enterprise Customers</span>
<svg className="lucide lucide-building-2 w-5 h-5 text-blue-400" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</div>
<div className="flex items-center gap-4">
<h3 className="text-3xl font-playfair font-medium">2,500+</h3>
<div className="flex items-center gap-2 text-sm text-green-400 font-geist">
<svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                +23% this quarter
              </div>
</div>
<p className="text-sm text-neutral-400 mt-2 font-geist">Fortune 500 companies trust SecureVault</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gradient-to-b from-neutral-50 to-white">
<div className="container mx-auto">
<div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{opacity: '1', transform: 'translateY(0px)'}}>
<h2 className="text-4xl lg:text-5xl tracking-tight mb-6 font-playfair font-medium">Everything you need to protect your data</h2>
<p className="text-xl text-neutral-600 max-w-3xl mx-auto font-geist">
          Advanced features designed for enterprise security, compliance, and performance requirements.
        </p>
</div>
<div className="grid lg:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl bg-white border border-neutral-200/50 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up animate-delay-200" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-6">
<svg className="lucide lucide-shield-check w-6 h-6 text-indigo-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-2xl mb-4 font-playfair font-medium">Military-Grade Encryption</h3>
<p className="text-neutral-600 mb-6 font-geist">AES-256 encryption at rest and in transit. Zero-knowledge architecture ensures only you can access your data.</p>
<div className="flex items-center gap-2 text-sm text-indigo-600 font-medium font-geist">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            Learn about security
          </div>
</div>
<div className="p-8 rounded-2xl bg-white border border-neutral-200/50 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up animate-delay-400" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-6">
<svg className="lucide lucide-refresh-ccw w-6 h-6 text-green-600" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
</div>
<h3 className="text-2xl mb-4 font-playfair font-medium">Automated Backups</h3>
<p className="text-neutral-600 mb-6 font-geist">Set it and forget it. Intelligent scheduling with incremental backups to minimize bandwidth usage.</p>
<div className="flex items-center gap-2 text-sm text-green-600 font-medium font-geist">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            View automation features
          </div>
</div>
<div className="p-8 rounded-2xl bg-white border border-neutral-200/50 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up animate-delay-600" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
<svg className="lucide lucide-gauge w-6 h-6 text-orange-600" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
</div>
<h3 className="text-2xl mb-4 font-playfair font-medium">Real-time Monitoring</h3>
<p className="text-neutral-600 mb-6 font-geist">24/7 monitoring with instant alerts. Know the status of every backup job in real-time.</p>
<div className="flex items-center gap-2 text-sm text-orange-600 font-medium font-geist">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            Explore monitoring tools
          </div>
</div>
</div>
</div>
</section>

<section className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a0c744d5-9d12-42c9-a431-77b086938f4b_3840w.jpg)] bg-cover pt-24 pr-6 pb-24 pl-6" id="solutions">
<div className="container mx-auto">
<div className="max-w-2xl mb-16 opacity-0 animate-fade-in-up" style={{opacity: '1', transform: 'translateY(0px)'}}>
<h2 className="lg:text-5xl text-4xl font-medium text-neutral-50 tracking-tight font-playfair mb-6">Choose your cloud platform</h2>
<p className="text-xl text-neutral-300 font-geist">
          Native integrations with leading cloud providers. Deploy in minutes with our pre-configured templates.
        </p>
</div>
<div className="grid md:grid-cols-3 gap-6 mb-12">
<button className="choose-option group relative overflow-hidden p-8 rounded-2xl bg-white border border-neutral-200/50 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up animate-delay-200" data-choice="aws" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center group-[.active]:bg-white">
<svg className="lucide lucide-cloud w-6 h-6 text-orange-600 group-[.active]:text-white" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
</div>
<div className="text-left">
<h3 className="text-xl font-bold group-[.active]:text-white font-geist">Amazon Web Services</h3>
<p className="text-sm text-neutral-500 group-[.active]:text-white/80 font-geist">EC2, RDS, S3, and more</p>
</div>
</div>
<svg className="lucide lucide-chevron-right w-5 h-5 text-neutral-400 group-[.active]:text-white" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="text-left">
<div className="flex items-center gap-2 text-sm text-neutral-600 group-[.active]:text-white/80 font-geist">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Native AWS integration
            </div>
</div>
</button>
<button className="choose-option group relative overflow-hidden p-8 rounded-2xl bg-white border border-neutral-200/50 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up animate-delay-400" data-choice="azure" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center group-[.active]:bg-white">
<svg className="lucide lucide-cloud-rain w-6 h-6 text-blue-600 group-[.active]:text-white" data-lucide="cloud-rain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M16 14v6"></path><path d="M8 14v6"></path><path d="M12 16v6"></path></svg>
</div>
<div className="text-left">
<h3 className="text-xl font-bold group-[.active]:text-white font-geist">Microsoft Azure</h3>
<p className="text-sm text-neutral-500 group-[.active]:text-white/80 font-geist">VMs, SQL, Storage accounts</p>
</div>
</div>
<svg className="lucide lucide-chevron-right w-5 h-5 text-neutral-400 group-[.active]:text-white" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="text-left">
<div className="flex items-center gap-2 text-sm text-neutral-600 group-[.active]:text-white/80 font-geist">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Azure-native deployment
            </div>
</div>
</button>
<button className="choose-option group relative overflow-hidden p-8 rounded-2xl bg-white border border-neutral-200/50 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up animate-delay-600" data-choice="gcp" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center group-[.active]:bg-white">
<svg className="lucide lucide-cloud-lightning w-6 h-6 text-green-600 group-[.active]:text-white" data-lucide="cloud-lightning" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"></path><path d="m13 12-3 5h4l-3 5"></path></svg>
</div>
<div className="text-left">
<h3 className="text-xl font-bold group-[.active]:text-white font-geist">Google Cloud</h3>
<p className="text-sm text-neutral-500 group-[.active]:text-white/80 font-geist">Compute Engine, BigQuery</p>
</div>
</div>
<svg className="lucide lucide-chevron-right w-5 h-5 text-neutral-400 group-[.active]:text-white" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="text-left">
<div className="flex items-center gap-2 text-sm text-neutral-600 group-[.active]:text-white/80 font-geist">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              GCP-optimized backups
            </div>
</div>
</button>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="container mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="opacity-0 animate-fade-in-left" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="flex items-center gap-4 mb-8">
<img alt="Marcus Thompson" className="w-16 h-16 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b62eea8b-831c-41a3-b9b1-21f4c25de5e5_800w.jpg" style={{}}/>
<div>
<h4 className="font-bold text-lg font-geist">Marcus Thompson</h4>
<p className="text-sm text-neutral-600 font-geist">Chief Technology Officer, GlobalTech Solutions</p>
<div className="flex items-center gap-1 mt-1">
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
<div className="flex items-center gap-8 text-sm text-neutral-600">
<div className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
              5,000+ employees
            </div>
<div className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-database w-4 h-4" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
              500TB protected
            </div>
</div>
</div>
<div className="opacity-0 animate-fade-in-right animate-delay-200" style={{opacity: '1', transform: 'translateY(0px)'}}>
<img alt="Modern office environment" className="w-full h-96 object-cover rounded-2xl shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa727995-a530-4803-be97-b588c2a202ad_1600w.jpg" style={{}}/>
</div>
</div>
</div>
</section>

<section className="text-neutral-200 bg-neutral-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad24d59f-0f44-4c69-9ffb-626ad87a3d65_3840w.jpg)] bg-cover pt-24 pr-6 pb-24 pl-6" id="resources">
<div className="container mx-auto">
<div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{opacity: '1', transform: 'translateY(0px)'}}>
<h2 className="text-4xl lg:text-5xl tracking-tight mb-6 font-playfair font-medium text-neutral-100">Learn from the experts</h2>
<p className="max-w-3xl text-xl text-neutral-200 font-geist mr-auto ml-auto">
          In-depth guides, case studies, and best practices from our team of backup and recovery specialists.
        </p>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<article className="group flex flex-col rounded-2xl bg-neutral-800 border border-neutral-700 overflow-hidden hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up animate-delay-200" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="p-8 bg-gradient-to-br from-purple-900 to-indigo-900 flex-1">
<div className="w-12 h-12 rounded-xl bg-purple-800 flex items-center justify-center mb-6">
<svg className="lucide lucide-play-circle w-6 h-6 text-purple-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
</div>
<h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition-colors font-geist">Webinar: Modern Data Protection Strategies</h3>
<p className="text-neutral-300 mb-4 font-geist">
              Join our experts as they discuss the latest trends in cloud backup, compliance requirements, and disaster recovery planning for enterprise environments.
            </p>
<div className="flex items-center gap-2 text-sm text-neutral-400 font-geist">
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
              45 minutes
            </div>
</div>
<div className="p-6 bg-neutral-900 border-t border-neutral-700">
<a className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors font-geist" href="#">
              Watch webinar
              <svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
</article>

<article className="group flex flex-col rounded-2xl bg-neutral-800 border border-neutral-700 overflow-hidden hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up animate-delay-400" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="p-8 bg-gradient-to-br from-blue-900 to-cyan-900 flex-1">
<div className="w-12 h-12 rounded-xl bg-blue-800 flex items-center justify-center mb-6">
<svg className="lucide lucide-file-text w-6 h-6 text-blue-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-4 group-hover:text-blue-400 transition-colors font-geist">Case Study: Fortune 500 Migration</h3>
<p className="text-neutral-300 mb-4 font-geist">
              Learn how TechCorp migrated their entire backup infrastructure to SecureVault, reducing costs by 67% while improving recovery times.
            </p>
<div className="flex items-center gap-2 text-sm text-neutral-400 font-geist">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
              12 pages
            </div>
</div>
<div className="p-6 bg-neutral-900 border-t border-neutral-700">
<a className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors font-geist" href="#">
              Download PDF
              <svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</a>
</div>
</article>

<article className="group flex flex-col rounded-2xl bg-neutral-800 border border-neutral-700 overflow-hidden hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up animate-delay-600" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="p-8 bg-gradient-to-br from-green-900 to-emerald-900 flex-1">
<div className="w-12 h-12 rounded-xl bg-green-800 flex items-center justify-center mb-6">
<svg className="lucide lucide-book-open w-6 h-6 text-green-400" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-4 group-hover:text-green-400 transition-colors font-geist">Backup &amp; Recovery Best Practices Guide</h3>
<p className="text-neutral-300 mb-4 font-geist">
              Comprehensive guide covering 3-2-1 backup strategies, compliance frameworks, and disaster recovery planning for enterprise IT teams.
            </p>
<div className="flex items-center gap-2 text-sm text-neutral-400 font-geist">
<svg className="lucide lucide-bookmark w-4 h-4" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
              24 pages
            </div>
</div>
<div className="p-6 bg-neutral-900 border-t border-neutral-700">
<a className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors font-geist" href="#">
              Read guide
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="pricing">
<div className="container mx-auto">
<div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{opacity: '1', transform: 'translateY(0px)'}}>
<h2 className="text-4xl lg:text-5xl tracking-tight mb-6 font-playfair font-medium">Simple, transparent pricing</h2>
<p className="text-xl text-neutral-600 max-w-3xl mx-auto font-geist">
          Choose the plan that fits your needs. All plans include 24/7 support and 99.9% uptime SLA.
        </p>
</div>
<div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="p-8 rounded-2xl border border-neutral-200/50 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up animate-delay-200" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="text-center mb-8">
<h3 className="text-2xl mb-2 font-playfair font-medium">Starter</h3>
<p className="text-neutral-600 mb-6 font-geist">Perfect for small teams</p>
<div className="flex items-baseline justify-center gap-2">
<span className="text-5xl font-playfair font-medium">$19</span>
<span className="text-neutral-500 font-geist">/month</span>
</div>
<p className="text-sm text-neutral-500 mt-2 font-geist">Up to 1TB storage</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-geist">Daily automated backups</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-geist">AES-256 encryption</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-geist">30-day retention</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-geist">Email support</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg border border-neutral-300 text-neutral-700 font-semibold hover:bg-neutral-50 transition-colors duration-200 font-geist">
            Start free trial
          </button>
</div>

<div className="relative p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200/50 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up animate-delay-400" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-semibold font-geist">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
              Most popular
            </span>
</div>
<div className="text-center mb-8 mt-4">
<h3 className="text-2xl mb-2 font-playfair font-medium">Professional</h3>
<p className="text-neutral-600 mb-6 font-geist">For growing businesses</p>
<div className="flex items-baseline justify-center gap-2">
<span className="text-5xl font-playfair font-medium">$79</span>
<span className="text-neutral-500 font-geist">/month</span>
</div>
<p className="text-sm text-neutral-500 mt-2 font-geist">Up to 10TB storage</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-geist">Everything in Starter</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-geist">Real-time monitoring</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-geist">90-day retention</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-geist">Priority support</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-geist">Advanced reporting</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors duration-200 font-geist">
            Start free trial
          </button>
</div>

<div className="p-8 rounded-2xl border border-neutral-200/50 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up animate-delay-600" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="text-center mb-8">
<h3 className="text-2xl mb-2 font-playfair font-medium">Enterprise</h3>
<p className="text-neutral-600 mb-6 font-geist">For large organizations</p>
<div className="flex items-baseline justify-center gap-2">
<span className="text-5xl font-playfair font-medium">Custom</span>
</div>
<p className="text-sm text-neutral-500 mt-2 font-geist">Unlimited storage</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-geist">Everything in Professional</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-geist">Custom retention policies</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-geist">24/7 phone support</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-geist">Dedicated account manager</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-geist">Custom integrations</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg border border-neutral-300 text-neutral-700 font-semibold hover:bg-neutral-50 transition-colors duration-200 font-geist">
            Contact sales
          </button>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-white py-16 px-6">
<div className="container mx-auto">
<div className="grid lg:grid-cols-4 gap-8 mb-12">
<div>
<div className="flex items-center gap-2 text-xl font-bold mb-6">
<svg className="lucide lucide-shield-check w-6 h-6 text-indigo-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-geist">SecureVault</span>
</div>
<p className="text-neutral-300 mb-6 font-geist">
            Enterprise-grade cloud backup and recovery solutions trusted by thousands of businesses worldwide.
          </p>
<div className="flex items-center gap-4">
<a className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors" href="#">
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
<div>
<h4 className="font-semibold mb-4 font-geist">Platform</h4>
<ul className="space-y-3 text-sm text-neutral-300">
<li><a className="hover:text-white transition-colors font-geist" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Security</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">API</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 font-geist">Solutions</h4>
<ul className="space-y-3 text-sm text-neutral-300">
<li><a className="hover:text-white transition-colors font-geist" href="#">Enterprise</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Small Business</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Healthcare</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Financial Services</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 font-geist">Resources</h4>
<ul className="space-y-3 text-sm text-neutral-300">
<li><a className="hover:text-white transition-colors font-geist" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Support</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Status</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
<p className="font-geist">© 2024 SecureVault. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors font-geist" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors font-geist" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors font-geist" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
