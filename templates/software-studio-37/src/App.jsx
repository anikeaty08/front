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
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Theme Toggle Logic
        const themeToggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        // Check local storage or system preference
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                htmlElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        });

        // Scroll Animation Logic
        const revealElements = document.querySelectorAll('.reveal');

        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 100;

            revealElements.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        // Trigger once on load
        revealOnScroll();
    
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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/70">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center rounded-md font-semibold tracking-tighter group-hover:rotate-12 transition-transform duration-300">
                    PD
                </div>
<span className="font-semibold tracking-tighter text-sm uppercase">Project Dev</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500 dark:text-neutral-400">
<a className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#projects">Projects</a>
<a className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#payments">Pricing</a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 transition-all" id="theme-toggle">
<span className="iconify block dark:hidden" data-icon="lucide:moon" data-strokeWidth="1.5" data-width="18"></span>
<span className="iconify hidden dark:block" data-icon="lucide:sun" data-strokeWidth="1.5" data-width="18"></span>
</button>
<a className="hidden sm:flex items-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2 rounded-full text-xs font-semibold tracking-tight hover:opacity-90 transition-opacity" href="#payments">
                    Start Project
                    <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="14"></span>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 mb-8 animate-fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-500"></span>
</span>
<span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 tracking-wide">CAPSTONE PROJECT 2024</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-neutral-900 dark:text-white mb-6 animate-slide-up leading-[1.1]">
                Building Logic. <br/>
<span className="text-neutral-400 dark:text-neutral-600">Designing Future.</span>
</h1>
<p className="max-w-xl mx-auto text-lg text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed animate-slide-up" style={{animationDelay: '100ms'}}>
                Project Dev is a comprehensive development studio specializing in high-performance web, mobile, and desktop applications.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{animationDelay: '200ms'}}>
<a className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg text-sm font-semibold tracking-tight hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 flex items-center justify-center gap-2" href="#projects">
                    View Portfolio
                    <span className="iconify" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="16"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white rounded-lg text-sm font-semibold tracking-tight hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors flex items-center justify-center gap-2" href="#services">
                    Our Services
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4">Core Services</h2>
<p className="text-neutral-500 dark:text-neutral-400 max-w-lg">Tailored solutions for every platform. We engineer robust digital ecosystems.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 reveal hover:shadow-xl dark:hover:shadow-none">
<div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl flex items-center justify-center mb-6 border border-neutral-200 dark:border-neutral-700 shadow-sm group-hover:scale-110 transition-transform">
<span className="iconify text-neutral-900 dark:text-white" data-icon="lucide:globe" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Web Development</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
                        Scalable, responsive, and performant web applications built with modern frameworks. Full-stack solutions from frontend aesthetics to backend logic.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300">
<span className="iconify text-neutral-400" data-icon="lucide:check" data-width="14"></span> React / Vue / Angular
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300">
<span className="iconify text-neutral-400" data-icon="lucide:check" data-width="14"></span> API Integration
                        </li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 reveal hover:shadow-xl dark:hover:shadow-none" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl flex items-center justify-center mb-6 border border-neutral-200 dark:border-neutral-700 shadow-sm group-hover:scale-110 transition-transform">
<span className="iconify text-neutral-900 dark:text-white" data-icon="lucide:smartphone" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Mobile Development</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
                        Native and cross-platform mobile applications designed for iOS and Android. Intuitive interfaces with seamless performance.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300">
<span className="iconify text-neutral-400" data-icon="lucide:check" data-width="14"></span> React Native / Flutter
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300">
<span className="iconify text-neutral-400" data-icon="lucide:check" data-width="14"></span> App Store Deployment
                        </li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 reveal hover:shadow-xl dark:hover:shadow-none" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl flex items-center justify-center mb-6 border border-neutral-200 dark:border-neutral-700 shadow-sm group-hover:scale-110 transition-transform">
<span className="iconify text-neutral-900 dark:text-white" data-icon="lucide:monitor" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Stand-Alone Apps</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
                        Powerful desktop software for offline and enterprise use. System-level integrations and high-computation capability.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300">
<span className="iconify text-neutral-400" data-icon="lucide:check" data-width="14"></span> Electron / C# / Java
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300">
<span className="iconify text-neutral-400" data-icon="lucide:check" data-width="14"></span> Offline Capabilities
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 dark:bg-black" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4">Selected Projects</h2>
<p className="text-neutral-500 dark:text-neutral-400 max-w-lg">Explore our deployed solutions across all platforms.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 text-xs font-medium rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black">All</button>
<button className="px-4 py-2 text-xs font-medium rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-colors">Web</button>
<button className="px-4 py-2 text-xs font-medium rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-colors">Mobile</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group block reveal">
<div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-200 dark:bg-neutral-900 aspect-[4/3] mb-4">
<div className="absolute inset-0 flex items-center justify-center text-neutral-400 dark:text-neutral-600 bg-neutral-100 dark:bg-neutral-900 group-hover:scale-105 transition-transform duration-500">

<div className="w-3/4 h-3/4 border border-dashed border-neutral-300 dark:border-neutral-700 rounded-lg flex items-center justify-center">
<span className="iconify" data-icon="lucide:layout-template" data-width="48"></span>
</div>
</div>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
<a className="px-6 py-2 bg-white text-black rounded-full text-xs font-semibold tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-neutral-200" href="#">
                                View Live Demo
                            </a>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h4 className="text-lg font-semibold tracking-tight">FinTech Dashboard</h4>
<p className="text-xs text-neutral-500 mt-1">Web Development • React</p>
</div>
<span className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-400">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</span>
</div>
</div>

<div className="group block reveal" style={{transitionDelay: '100ms'}}>
<div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-200 dark:bg-neutral-900 aspect-[4/3] mb-4">
<div className="absolute inset-0 flex items-center justify-center text-neutral-400 dark:text-neutral-600 bg-neutral-100 dark:bg-neutral-900 group-hover:scale-105 transition-transform duration-500">
<div className="w-1/3 h-3/4 border border-dashed border-neutral-300 dark:border-neutral-700 rounded-lg flex items-center justify-center">
<span className="iconify" data-icon="lucide:smartphone" data-width="48"></span>
</div>
</div>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
<a className="px-6 py-2 bg-white text-black rounded-full text-xs font-semibold tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-neutral-200" href="#">
                                View App Demo
                            </a>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h4 className="text-lg font-semibold tracking-tight">HealthTrack Mobile</h4>
<p className="text-xs text-neutral-500 mt-1">Mobile Development • Flutter</p>
</div>
<span className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-400">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</span>
</div>
</div>

<div className="group block reveal" style={{transitionDelay: '200ms'}}>
<div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-200 dark:bg-neutral-900 aspect-[4/3] mb-4">
<div className="absolute inset-0 flex items-center justify-center text-neutral-400 dark:text-neutral-600 bg-neutral-100 dark:bg-neutral-900 group-hover:scale-105 transition-transform duration-500">
<div className="w-3/4 h-2/3 border border-dashed border-neutral-300 dark:border-neutral-700 rounded-lg flex items-center justify-center">
<span className="iconify" data-icon="lucide:terminal" data-width="48"></span>
</div>
</div>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
<a className="px-6 py-2 bg-white text-black rounded-full text-xs font-semibold tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-neutral-200" href="#">
                                Download Demo
                            </a>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h4 className="text-lg font-semibold tracking-tight">Inventory Manager Pro</h4>
<p className="text-xs text-neutral-500 mt-1">Stand-Alone • C# .NET</p>
</div>
<span className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-400">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900" id="payments">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4">Service Packages</h2>
<p className="text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">Secure online payments via Stripe integration.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-400 transition-colors reveal relative">
<h3 className="text-lg font-medium tracking-tight mb-2">Starter</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tighter">$999</span>
<span className="text-neutral-500 text-sm">/project</span>
</div>
<p className="text-sm text-neutral-500 mb-6 h-10">Perfect for landing pages and simple mobile prototypes.</p>
<button className="w-full py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 font-medium text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors mb-8">
                        Select Plan
                    </button>
<div className="space-y-3">
<div className="flex items-center gap-3 text-xs text-neutral-600 dark:text-neutral-300">
<span className="iconify text-neutral-900 dark:text-white" data-icon="lucide:check-circle-2" data-width="14"></span>
                            Single Page Application
                        </div>
<div className="flex items-center gap-3 text-xs text-neutral-600 dark:text-neutral-300">
<span className="iconify text-neutral-900 dark:text-white" data-icon="lucide:check-circle-2" data-width="14"></span>
                            Basic Responsive Design
                        </div>
<div className="flex items-center gap-3 text-xs text-neutral-600 dark:text-neutral-300">
<span className="iconify text-neutral-900 dark:text-white" data-icon="lucide:check-circle-2" data-width="14"></span>
                            1 Month Support
                        </div>
</div>
</div>

<div className="p-8 rounded-2xl bg-neutral-900 dark:bg-white text-white dark:text-black shadow-2xl scale-105 z-10 reveal" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 right-0 -mt-3 -mr-3 bg-neutral-500 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wide">POPULAR</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Professional</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tighter">$2,499</span>
<span className="text-neutral-400 dark:text-neutral-600 text-sm">/project</span>
</div>
<p className="text-sm text-neutral-400 dark:text-neutral-600 mb-6 h-10">Full-stack web or mobile app with database integration.</p>
<button className="w-full py-3 rounded-lg bg-white dark:bg-black text-black dark:text-white font-semibold text-sm hover:opacity-90 transition-opacity mb-8 flex items-center justify-center gap-2">
                        Pay Securely
                        <span className="iconify" data-icon="lucide:lock" data-width="12"></span>
</button>
<div className="space-y-3">
<div className="flex items-center gap-3 text-xs">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="14"></span>
                            Full Stack Development
                        </div>
<div className="flex items-center gap-3 text-xs">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="14"></span>
                            Admin Dashboard
                        </div>
<div className="flex items-center gap-3 text-xs">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="14"></span>
                            Payment Gateway Setup
                        </div>
<div className="flex items-center gap-3 text-xs">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="14"></span>
                            3 Months Support
                        </div>
</div>
</div>

<div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-400 transition-colors reveal relative" style={{transitionDelay: '200ms'}}>
<h3 className="text-lg font-medium tracking-tight mb-2">Enterprise</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tighter">Custom</span>
</div>
<p className="text-sm text-neutral-500 mb-6 h-10">Complex stand-alone systems and large scale platforms.</p>
<button className="w-full py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 font-medium text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors mb-8">
                        Contact Sales
                    </button>
<div className="space-y-3">
<div className="flex items-center gap-3 text-xs text-neutral-600 dark:text-neutral-300">
<span className="iconify text-neutral-900 dark:text-white" data-icon="lucide:check-circle-2" data-width="14"></span>
                            Multi-platform Support
                        </div>
<div className="flex items-center gap-3 text-xs text-neutral-600 dark:text-neutral-300">
<span className="iconify text-neutral-900 dark:text-white" data-icon="lucide:check-circle-2" data-width="14"></span>
                            Advanced Security
                        </div>
<div className="flex items-center gap-3 text-xs text-neutral-600 dark:text-neutral-300">
<span className="iconify text-neutral-900 dark:text-white" data-icon="lucide:check-circle-2" data-width="14"></span>
                            1 Year Maintenance
                        </div>
</div>
</div>
</div>

<div className="flex justify-center gap-6 mt-16 grayscale opacity-50">
<span className="iconify" data-icon="lucide:credit-card" data-width="32"></span>
<div className="text-2xl font-bold tracking-tighter">Stripe</div>
<div className="text-2xl font-bold tracking-tighter italic">PayPal</div>
</div>
</div>
</section>

<footer className="py-12 bg-neutral-50 dark:bg-black border-t border-neutral-200 dark:border-neutral-900">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center rounded text-xs font-bold">PD</div>
<span className="font-semibold tracking-tighter text-sm">Project Dev</span>
</div>
<div className="flex gap-6 text-xs text-neutral-500">
<a className="hover:text-neutral-900 dark:hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-neutral-900 dark:hover:text-white" href="#">Terms of Service</a>
<a className="hover:text-neutral-900 dark:hover:text-white" href="#">Contact</a>
</div>
<div className="text-xs text-neutral-400">
                    © 2024 Project Dev Capstone.
                </div>
</div>
</div>
</footer>


    </>
  );
}
