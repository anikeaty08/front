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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#1e293b',
}
},
animation: {
'marquee': 'marquee 30s linear infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Trigger counter animation if it's the stats section
                    const counters = entry.target.querySelectorAll('.counter-animation');
                    if(counters.length > 0) {
                        counters.forEach(counter => {
                            const target = +counter.getAttribute('data-target');
                            const duration = 2000; // ms
                            const increment = target / (duration / 16); // 60fps
                            
                            let current = 0;
                            const updateCounter = () => {
                                current += increment;
                                if(current < target) {
                                    counter.innerText = Math.ceil(current) + '+';
                                    requestAnimationFrame(updateCounter);
                                } else {
                                    counter.innerText = target + '+';
                                }
                            };
                            updateCounter();
                        });
                        // Remove class to prevent re-animating numbers
                        counters.forEach(c => c.classList.remove('counter-animation'));
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((el) => {
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid-slate opacity-[0.15]"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-40"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[100px] opacity-40"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 supports-[backdrop-filter]:bg-white/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group relative z-10" href="#">
<div className="w-8 h-8 bg-gradient-to-tr from-slate-900 to-slate-700 rounded-lg flex items-center justify-center text-white shadow-lg shadow-slate-200">
<iconify-icon icon="lucide:command" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-slate-900 font-semibold tracking-tight text-lg">NEXUS</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors relative group" href="#services">
                    Services
                    <span className="absolute -bottom-4 left-0 w-full h-[1px] bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
</a>
<a className="hover:text-slate-900 transition-colors relative group" href="#about">
                    About
                    <span className="absolute -bottom-4 left-0 w-full h-[1px] bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
</a>
<a className="hover:text-slate-900 transition-colors relative group" href="#careers">
                    Careers
                    <span className="absolute -bottom-4 left-0 w-full h-[1px] bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
</a>
<a className="hover:text-slate-900 transition-colors relative group" href="#articles">
                    Insights
                    <span className="absolute -bottom-4 left-0 w-full h-[1px] bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-200 active:scale-95" href="#contact">
                    Get Started
                </a>
<button className="md:hidden text-slate-900">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/60 shadow-sm text-xs font-medium text-slate-600 mb-8 animate-fade-in-up hover:border-slate-300 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Transforming digital landscapes
            </div>

<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto animate-fade-in-up [animation-delay:200ms] opacity-0 fill-mode-forwards">
                Scalable infrastructure for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-500 to-slate-400 animate-pulse-slow">modern enterprises.</span>
</h1>

<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up [animation-delay:400ms] opacity-0 fill-mode-forwards">
                We engineer robust, secure, and efficient technology solutions that empower your business to move faster and break barriers.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:600ms] opacity-0 fill-mode-forwards">
<a className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-full font-medium text-sm hover:bg-slate-800 transition-all hover:shadow-[0_0_20px_-5px_rgba(15,23,42,0.3)] active:scale-95 flex items-center justify-center gap-2 group" href="#services">
                    Explore Services
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-full font-medium text-sm hover:bg-slate-50 hover:border-slate-300 transition-colors active:scale-95 shadow-sm" href="#about">
                    Why Nexus?
                </a>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-white/50 py-10 overflow-hidden relative">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
<div className="max-w-7xl mx-auto px-6 mb-8 text-center">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest">Trusted by industry leaders</p>
</div>
<div className="flex overflow-hidden group">
<div className="flex gap-24 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused] opacity-60 grayscale hover:grayscale-0 transition-all duration-700">

<span className="text-xl font-bold tracking-tighter text-slate-800 flex items-center gap-2"><iconify-icon className="text-slate-600" icon="lucide:hexagon" width="22"></iconify-icon> ACME</span>
<span className="text-xl font-bold tracking-tighter text-slate-800 flex items-center gap-2"><iconify-icon className="text-slate-600" icon="lucide:triangle" width="22"></iconify-icon> VERTEX</span>
<span className="text-xl font-bold tracking-tighter text-slate-800 flex items-center gap-2"><iconify-icon className="text-slate-600" icon="lucide:circle" width="22"></iconify-icon> SPHERE</span>
<span className="text-xl font-bold tracking-tighter text-slate-800 flex items-center gap-2"><iconify-icon className="text-slate-600" icon="lucide:square" width="22"></iconify-icon> CUBE</span>
<span className="text-xl font-bold tracking-tighter text-slate-800 flex items-center gap-2"><iconify-icon className="text-slate-600" icon="lucide:wind" width="22"></iconify-icon> FLOW</span>
<span className="text-xl font-bold tracking-tighter text-slate-800 flex items-center gap-2"><iconify-icon className="text-slate-600" icon="lucide:zap" width="22"></iconify-icon> BOLT</span>

<span className="text-xl font-bold tracking-tighter text-slate-800 flex items-center gap-2"><iconify-icon className="text-slate-600" icon="lucide:hexagon" width="22"></iconify-icon> ACME</span>
<span className="text-xl font-bold tracking-tighter text-slate-800 flex items-center gap-2"><iconify-icon className="text-slate-600" icon="lucide:triangle" width="22"></iconify-icon> VERTEX</span>
<span className="text-xl font-bold tracking-tighter text-slate-800 flex items-center gap-2"><iconify-icon className="text-slate-600" icon="lucide:circle" width="22"></iconify-icon> SPHERE</span>
<span className="text-xl font-bold tracking-tighter text-slate-800 flex items-center gap-2"><iconify-icon className="text-slate-600" icon="lucide:square" width="22"></iconify-icon> CUBE</span>
<span className="text-xl font-bold tracking-tighter text-slate-800 flex items-center gap-2"><iconify-icon className="text-slate-600" icon="lucide:wind" width="22"></iconify-icon> FLOW</span>
<span className="text-xl font-bold tracking-tighter text-slate-800 flex items-center gap-2"><iconify-icon className="text-slate-600" icon="lucide:zap" width="22"></iconify-icon> BOLT</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Core IT Capabilities</h2>
<p className="text-slate-500 max-w-xl">Comprehensive digital solutions designed to optimize workflow and enhance security across your organization.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-slate-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 reveal">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center mb-6 text-slate-900 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-sm">
<iconify-icon icon="lucide:cloud" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Cloud Infrastructure</h3>
<p className="text-sm leading-relaxed text-slate-500">Scalable AWS and Azure solutions tailored for high availability and fault tolerance.</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-slate-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 reveal [transition-delay:100ms]">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center mb-6 text-slate-900 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-sm">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Cybersecurity</h3>
<p className="text-sm leading-relaxed text-slate-500">Advanced threat detection, penetration testing, and 24/7 security monitoring.</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-slate-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 reveal [transition-delay:200ms]">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center mb-6 text-slate-900 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-sm">
<iconify-icon icon="lucide:code-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Custom Development</h3>
<p className="text-sm leading-relaxed text-slate-500">Full-stack web and mobile application development using modern frameworks.</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-slate-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 reveal">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center mb-6 text-slate-900 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-sm">
<iconify-icon icon="lucide:database" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Data Analytics</h3>
<p className="text-sm leading-relaxed text-slate-500">Turn raw data into actionable insights with our business intelligence pipelines.</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-slate-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 reveal [transition-delay:100ms]">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center mb-6 text-slate-900 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-sm">
<iconify-icon icon="lucide:network" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Network Solutions</h3>
<p className="text-sm leading-relaxed text-slate-500">Enterprise-grade network architecture design, implementation, and maintenance.</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-slate-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 reveal [transition-delay:200ms]">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center mb-6 text-slate-900 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-sm">
<iconify-icon icon="lucide:headphones" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">IT Support</h3>
<p className="text-sm leading-relaxed text-slate-500">Dedicated helpdesk and on-site support to keep your operations running smoothly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden" id="about">

<div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row gap-16 lg:items-center">
<div className="lg:w-1/2 reveal">
<div className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600 mb-6 shadow-sm">About Us</div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Engineering the future of work.</h2>
<p className="text-slate-500 mb-6 leading-relaxed">
                        At Nexus, we believe technology should be an enabler, not a bottleneck. Founded in 2018, we have helped over 500 companies modernize their stack and secure their digital assets.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 group">
<iconify-icon className="text-slate-400 group-hover:text-emerald-500 transition-colors mt-0.5" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span className="text-sm text-slate-700">99.99% Uptime Guarantee on managed services.</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="text-slate-400 group-hover:text-emerald-500 transition-colors mt-0.5" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span className="text-sm text-slate-700">ISO 27001 Certified Security Protocols.</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="text-slate-400 group-hover:text-emerald-500 transition-colors mt-0.5" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span className="text-sm text-slate-700">24/7 Dedicated Support Teams.</span>
</li>
</ul>
</div>
<div className="lg:w-1/2">
<div className="grid grid-cols-2 gap-4 reveal [transition-delay:200ms]">
<div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-48 hover:shadow-md transition-all group">
<iconify-icon className="text-slate-300 group-hover:text-slate-900 transition-colors" icon="lucide:users" strokeWidth="1.5" width="32"></iconify-icon>
<div>
<span className="block text-3xl font-semibold text-slate-900 tracking-tight counter-animation" data-target="500">0</span>
<span className="text-sm text-slate-500">Clients Served</span>
</div>
</div>
<div className="p-6 bg-slate-900 rounded-2xl shadow-lg flex flex-col justify-between h-48 text-white relative overflow-hidden group">

<div className="absolute top-0 right-0 w-20 h-20 bg-white/10 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700"></div>
<iconify-icon className="text-slate-400 group-hover:text-white transition-colors relative z-10" icon="lucide:award" strokeWidth="1.5" width="32"></iconify-icon>
<div className="relative z-10">
<span className="block text-3xl font-semibold text-white tracking-tight counter-animation" data-target="15">0</span>
<span className="text-sm text-slate-400">Industry Awards</span>
</div>
</div>
<div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-48 col-span-2 hover:shadow-md transition-all group">
<iconify-icon className="text-slate-300 group-hover:text-slate-900 transition-colors" icon="lucide:globe" strokeWidth="1.5" width="32"></iconify-icon>
<div>
<span className="block text-3xl font-semibold text-slate-900 tracking-tight counter-animation" data-target="12">0</span>
<span className="text-sm text-slate-500">Global Locations</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10" id="articles">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 reveal">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Latest Insights</h2>
<p className="text-slate-500 max-w-sm">Thoughts on technology, leadership, and the future of IT.</p>
</div>
<a className="text-sm font-medium text-slate-900 hover:text-slate-600 flex items-center gap-1 group" href="#">
                    View all posts 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="flex flex-col group cursor-pointer reveal">
<div className="aspect-video bg-slate-100 rounded-xl mb-4 overflow-hidden border border-slate-200 relative">
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500 z-10"></div>
<div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform duration-700">
<iconify-icon icon="lucide:image" width="40"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
<span>Oct 12, 2023</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="font-medium text-slate-600">Cloud</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Migrating Legacy Systems to the Cloud</h3>
<p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">Strategies for ensuring zero downtime during complex infrastructure migrations.</p>
</article>

<article className="flex flex-col group cursor-pointer reveal [transition-delay:100ms]">
<div className="aspect-video bg-slate-100 rounded-xl mb-4 overflow-hidden border border-slate-200 relative">
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500 z-10"></div>
<div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform duration-700">
<iconify-icon icon="lucide:bar-chart-2" width="40"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
<span>Sep 28, 2023</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="font-medium text-slate-600">Security</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">The Zero Trust Architecture Model</h3>
<p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">Why perimeter-based security is no longer sufficient in the modern enterprise.</p>
</article>

<article className="flex flex-col group cursor-pointer reveal [transition-delay:200ms]">
<div className="aspect-video bg-slate-100 rounded-xl mb-4 overflow-hidden border border-slate-200 relative">
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500 z-10"></div>
<div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform duration-700">
<iconify-icon icon="lucide:cpu" width="40"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
<span>Sep 15, 2023</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="font-medium text-slate-600">AI</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Integrating AI into IT Ops</h3>
<p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">How predictive analytics is changing the way we handle server maintenance.</p>
</article>
</div>
</div>
</section>

<section className="py-12 px-4 reveal">
<div className="max-w-7xl mx-auto bg-slate-900 rounded-[2rem] p-12 md:p-24 text-center overflow-hidden relative group">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-slate-900 opacity-80 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900 to-transparent z-0"></div>

<div className="absolute top-10 right-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
<div className="absolute top-20 left-20 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse [animation-delay:1s]"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to scale your infrastructure?</h2>
<p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg font-light">
                    Get a comprehensive audit of your current IT setup and a roadmap for the future. No commitment required.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="px-8 py-3 bg-white text-slate-900 rounded-full font-medium text-sm hover:bg-slate-200 transition-colors w-full sm:w-auto shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]" href="#">
                        Start your project
                    </a>
<a className="px-8 py-3 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-medium text-sm hover:bg-white/10 transition-colors w-full sm:w-auto" href="#">
                        Contact Sales
                    </a>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 border-t border-slate-100 bg-white relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-slate-900 rounded text-white flex items-center justify-center">
<iconify-icon icon="lucide:command" width="14"></iconify-icon>
</div>
<span className="text-slate-900 font-semibold tracking-tight">NEXUS</span>
</a>
<p className="text-sm text-slate-500 max-w-xs mb-6">
                        Empowering businesses with resilient IT infrastructure and cutting-edge digital solutions.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors p-2 hover:bg-slate-100 rounded-full" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors p-2 hover:bg-slate-100 rounded-full" href="#"><iconify-icon icon="lucide:github" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors p-2 hover:bg-slate-100 rounded-full" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Services</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Cloud</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Security</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Development</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Analytics</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2026 Nexus IT Services. All rights reserved.</p>
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs text-slate-500 font-medium">All systems operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
