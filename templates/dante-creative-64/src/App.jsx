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



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Scroll Animation Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
            observer.observe(element);
        });

        // Navbar blur effect optimization
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg', 'shadow-black/20');
            } else {
                navbar.classList.remove('shadow-lg', 'shadow-black/20');
            }
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
      

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-900/20">
<i className="w-5 h-5 text-white" data-lucide="flame"></i>
</div>
<span className="font-serif text-xl font-medium tracking-tight">Dante</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors relative group" href="#services">
                    Services
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors relative group" href="#work">
                    Work
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors relative group" href="#pricing">
                    Pricing
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors relative group" href="#contact">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<div className="flex items-center gap-4">
<a className="px-4 py-2 text-sm font-medium bg-white text-black rounded-lg hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95" href="#contact">Get in Touch</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 gradient-radial"></div>
<div className="absolute inset-0 gradient-glow"></div>

<div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute -top-20 right-1/4 w-96 h-[800px] bg-gradient-to-b from-orange-500/20 via-red-500/10 to-transparent rotate-[25deg] blur-3xl animate-[pulse_5s_ease-in-out_infinite]"></div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden pointer-events-none">
<div className="absolute bottom-32 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent line-glow opacity-80"></div>
<div className="absolute bottom-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60"></div>
<div className="absolute bottom-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-40"></div>
<div className="absolute bottom-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
</div>

<div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
<h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-none">
<div className="overflow-hidden"><span className="block animate-enter text-gradient italic">Where</span></div>
<div className="overflow-hidden"><span className="block animate-enter delay-100 text-gradient italic">vision</span></div>
<div className="overflow-hidden"><span className="block animate-enter delay-200 text-gradient italic">meets</span></div>
<div className="overflow-hidden"><span className="block animate-enter delay-300 text-gradient italic">creation</span></div>
</h1>
<p className="mt-8 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed animate-enter delay-400">
                I craft stunning, production-ready web pages for ambitious businesses. Tell me your vision, and I'll bring it to life.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-enter delay-500">
<a className="group w-full sm:w-auto px-8 py-4 text-base font-medium bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-400 hover:to-red-500 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-orange-900/20" href="#contact">
                    Let's Work Together
                    <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="group w-full sm:w-auto px-8 py-4 text-base font-medium border border-zinc-700 text-white rounded-lg hover:bg-zinc-900 transition-all hover:border-zinc-600 flex items-center justify-center gap-2" href="#work">
<i className="w-5 h-5 group-hover:text-orange-400 transition-colors" data-lucide="eye"></i>
                    View My Work
                </a>
</div>
</div>
</section>

<section className="relative py-20 border-t border-zinc-800/50">
<div className="max-w-7xl mx-auto px-6 reveal-on-scroll">
<p className="text-center text-xs font-medium text-zinc-500 uppercase tracking-widest mb-10">Trusted by innovative teams</p>
<div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
<div className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300 cursor-default">
<i className="w-6 h-6" data-lucide="hexagon"></i>
<span className="text-lg font-medium">Vercel</span>
</div>
<div className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300 cursor-default">
<i className="w-6 h-6" data-lucide="layers"></i>
<span className="text-lg font-medium">Stripe</span>
</div>
<div className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300 cursor-default">
<i className="w-6 h-6" data-lucide="zap"></i>
<span className="text-lg font-medium">Linear</span>
</div>
<div className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300 cursor-default">
<i className="w-6 h-6" data-lucide="star"></i>
<span className="text-lg font-medium">Notion</span>
</div>
<div className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300 cursor-default">
<i className="w-6 h-6" data-lucide="circle"></i>
<span className="text-lg font-medium">Figma</span>
</div>
</div>
</div>
</section>

<section className="relative py-24 md:py-32" id="services">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/30 to-transparent pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gradient italic">
                    What I do for you
                </h2>
<p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
                    You focus on your business. I handle the design and development, delivering pages that convert and impress.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/30 hover-lift card-glow reveal-on-scroll">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 text-orange-500" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3 group-hover:text-white transition-colors">Custom Page Design</h3>
<p className="text-base text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                        Share your vision, brand, and goals. I'll design a page that captures your unique identity and resonates with your audience.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/30 hover-lift card-glow reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 text-purple-500" data-lucide="palette"></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3 group-hover:text-white transition-colors">Brand-Perfect Execution</h3>
<p className="text-base text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                        Send me your brand guidelines and I'll ensure every element—colors, typography, imagery—aligns perfectly with your identity.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/30 hover-lift card-glow reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 text-blue-500" data-lucide="code-2"></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3 group-hover:text-white transition-colors">Production-Ready Code</h3>
<p className="text-base text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                        You receive clean, optimized, semantic code ready for your team to deploy—or I can handle hosting for you.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/30 hover-lift card-glow reveal-on-scroll">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 text-green-500" data-lucide="smartphone"></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3 group-hover:text-white transition-colors">Fully Responsive</h3>
<p className="text-base text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                        Every page I create looks stunning on any device—mobile, tablet, or desktop. No compromises.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/30 hover-lift card-glow reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 text-yellow-500" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3 group-hover:text-white transition-colors">Fast Turnaround</h3>
<p className="text-base text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                        Most projects delivered within 3-5 business days. Need it faster? Let's talk about rush delivery options.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/30 hover-lift card-glow reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-rose-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 text-red-500" data-lucide="message-circle"></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3 group-hover:text-white transition-colors">Revisions Included</h3>
<p className="text-base text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                        Your satisfaction matters. Every package includes revision rounds to ensure the final result exceeds expectations.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative py-24 md:py-32 overflow-hidden" id="work">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/10 via-red-500/10 to-purple-500/10 rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite]"></div>
<div className="relative max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gradient italic">
                    Recent work
                </h2>
<p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
                    A selection of pages I've crafted for clients. Each one unique, each one built to perform.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-900/10 hover-lift reveal-on-scroll">
<div className="aspect-video bg-gradient-to-br from-orange-600 via-red-600 to-purple-700 p-8 flex items-center justify-center overflow-hidden">
<div className="w-full h-full rounded-lg bg-zinc-900/90 backdrop-blur p-6 flex flex-col transform group-hover:scale-105 transition-transform duration-700 ease-out">
<div className="flex items-center gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="flex-1 flex flex-col gap-3">
<div className="h-4 w-1/3 bg-zinc-700 rounded animate-pulse"></div>
<div className="h-8 w-2/3 bg-gradient-to-r from-orange-500 to-red-500 rounded"></div>
<div className="h-3 w-full bg-zinc-800 rounded"></div>
<div className="h-3 w-4/5 bg-zinc-800 rounded"></div>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium tracking-tight mb-2 group-hover:text-orange-400 transition-colors">SaaS Landing Page</h3>
<p className="text-base text-zinc-400">High-converting landing page for a B2B analytics startup.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/10 hover-lift reveal-on-scroll" style={{transitionDelay: '150ms'}}>
<div className="aspect-video bg-gradient-to-br from-purple-600 via-pink-600 to-red-700 p-8 flex items-center justify-center overflow-hidden">
<div className="w-full h-full rounded-lg bg-zinc-900/90 backdrop-blur p-6 flex flex-col transform group-hover:scale-105 transition-transform duration-700 ease-out">
<div className="flex items-center gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="flex-1 grid grid-cols-3 gap-3">
<div className="bg-zinc-800 rounded-lg"></div>
<div className="bg-gradient-to-b from-purple-500 to-pink-500 rounded-lg"></div>
<div className="bg-zinc-800 rounded-lg"></div>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium tracking-tight mb-2 group-hover:text-purple-400 transition-colors">Product Showcase</h3>
<p className="text-base text-zinc-400">Premium product page for a luxury e-commerce brand.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 hover-lift reveal-on-scroll">
<div className="aspect-video bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 p-8 flex items-center justify-center overflow-hidden">
<div className="w-full h-full rounded-lg bg-zinc-900/90 backdrop-blur p-6 flex flex-col transform group-hover:scale-105 transition-transform duration-700 ease-out">
<div className="flex items-center gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="flex-1 flex flex-col gap-3">
<div className="h-6 w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></div>
<div className="flex-1 grid grid-cols-2 gap-3">
<div className="bg-zinc-800 rounded-lg"></div>
<div className="bg-zinc-800 rounded-lg"></div>
</div>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium tracking-tight mb-2 group-hover:text-blue-400 transition-colors">Agency Website</h3>
<p className="text-base text-zinc-400">Modern portfolio site for a creative design agency.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/10 hover-lift reveal-on-scroll" style={{transitionDelay: '150ms'}}>
<div className="aspect-video bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 p-8 flex items-center justify-center overflow-hidden">
<div className="w-full h-full rounded-lg bg-zinc-900/90 backdrop-blur p-6 flex flex-col transform group-hover:scale-105 transition-transform duration-700 ease-out">
<div className="flex items-center gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="flex-1 flex items-center justify-center">
<div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 animate-pulse"></div>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium tracking-tight mb-2 group-hover:text-emerald-400 transition-colors">Startup Launch Page</h3>
<p className="text-base text-zinc-400">Pre-launch waitlist page for a fintech startup.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 md:py-32" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gradient italic">
                    Investment
                </h2>
<p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
                    Transparent pricing. No surprises. Choose the package that fits your needs.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">

<div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors reveal-on-scroll">
<h3 className="text-lg font-medium mb-2">Single Page</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight">$1,500</span>
</div>
<p className="text-base text-zinc-400 mb-6">Perfect for landing pages, product pages, or coming soon pages.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-base text-zinc-300">
<i className="w-5 h-5 text-green-500" data-lucide="check"></i>
                            1 custom designed page
                        </li>
<li className="flex items-center gap-3 text-base text-zinc-300">
<i className="w-5 h-5 text-green-500" data-lucide="check"></i>
                            Fully responsive
                        </li>
<li className="flex items-center gap-3 text-base text-zinc-300">
<i className="w-5 h-5 text-green-500" data-lucide="check"></i>
                            2 revision rounds
                        </li>
<li className="flex items-center gap-3 text-base text-zinc-300">
<i className="w-5 h-5 text-green-500" data-lucide="check"></i>
                            5 day delivery
                        </li>
</ul>
<a className="block w-full py-3 text-center text-base font-medium border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95" href="#contact">
                        Get Started
                    </a>
</div>

<div className="relative p-8 rounded-2xl bg-gradient-to-b from-orange-500/10 to-red-500/10 border border-orange-500/30 hover:border-orange-500/50 transition-colors reveal-on-scroll" style={{transitionDelay: '150ms'}}>
<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-medium bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg shadow-orange-900/40">
                        Most Popular
                    </div>
<h3 className="text-lg font-medium mb-2">Multi-Page</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight">$3,500</span>
</div>
<p className="text-base text-zinc-400 mb-6">Ideal for small business websites or comprehensive product sites.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-base text-zinc-300">
<i className="w-5 h-5 text-orange-500" data-lucide="check"></i>
                            Up to 5 pages
                        </li>
<li className="flex items-center gap-3 text-base text-zinc-300">
<i className="w-5 h-5 text-orange-500" data-lucide="check"></i>
                            Cohesive design system
                        </li>
<li className="flex items-center gap-3 text-base text-zinc-300">
<i className="w-5 h-5 text-orange-500" data-lucide="check"></i>
                            3 revision rounds
                        </li>
<li className="flex items-center gap-3 text-base text-zinc-300">
<i className="w-5 h-5 text-orange-500" data-lucide="check"></i>
                            10 day delivery
                        </li>
<li className="flex items-center gap-3 text-base text-zinc-300">
<i className="w-5 h-5 text-orange-500" data-lucide="check"></i>
                            Priority support
                        </li>
</ul>
<a className="block w-full py-3 text-center text-base font-medium bg-gradient-to-r from-orange-500 to-red-600 rounded-lg hover:from-orange-400 hover:to-red-500 transition-all shadow-lg shadow-orange-900/20 hover:scale-105 active:scale-95" href="#contact">
                        Get Started
                    </a>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors reveal-on-scroll" style={{transitionDelay: '300ms'}}>
<h3 className="text-lg font-medium mb-2">Custom Project</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight">Let's Talk</span>
</div>
<p className="text-base text-zinc-400 mb-6">For larger projects, ongoing partnerships, or unique requirements.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-base text-zinc-300">
<i className="w-5 h-5 text-green-500" data-lucide="check"></i>
                            Unlimited pages
                        </li>
<li className="flex items-center gap-3 text-base text-zinc-300">
<i className="w-5 h-5 text-green-500" data-lucide="check"></i>
                            Custom functionality
                        </li>
<li className="flex items-center gap-3 text-base text-zinc-300">
<i className="w-5 h-5 text-green-500" data-lucide="check"></i>
                            Dedicated collaboration
                        </li>
<li className="flex items-center gap-3 text-base text-zinc-300">
<i className="w-5 h-5 text-green-500" data-lucide="check"></i>
                            Flexible timeline
                        </li>
</ul>
<a className="block w-full py-3 text-center text-base font-medium border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95" href="#contact">
                        Contact Me
                    </a>
</div>
</div>
</div>
</section>

<section className="relative py-24 md:py-32" id="contact">
<div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-transparent pointer-events-none"></div>
<div className="relative max-w-3xl mx-auto px-6 reveal-on-scroll">
<div className="text-center mb-12">
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gradient italic mb-6">
                    Let's create something extraordinary
                </h2>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    Tell me about your project and I'll get back to you within 24 hours.
                </p>
</div>
<form className="space-y-6">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-zinc-300 mb-2">Name</label>
<input className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
<input className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" placeholder="you@company.com" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-zinc-300 mb-2">Company</label>
<input className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" placeholder="Your company name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-300 mb-2">Project Details</label>
<textarea className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none" placeholder="Tell me about your project, goals, and timeline..." rows="5"></textarea>
</div>
<button className="w-full py-4 text-base font-medium bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-400 hover:to-red-500 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-orange-900/20 group" type="submit">
                    Send Message
                    <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="send"></i>
</button>
</form>
<div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-zinc-400">
<a className="flex items-center gap-2 hover:text-white transition-colors group" href="mailto:hello@dante.design">
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="mail"></i>
                    hello@dante.design
                </a>
<a className="flex items-center gap-2 hover:text-white transition-colors group" href="#">
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="twitter"></i>
                    @dantedesign
                </a>
</div>
</div>
</section>

<footer className="border-t border-zinc-800/50 py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between">
<div className="flex items-center gap-2 mb-4 md:mb-0 hover:opacity-80 transition-opacity">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="flame"></i>
</div>
<span className="font-serif text-xl font-medium tracking-tight">Dante</span>
</div>
<p className="text-sm text-zinc-500 mb-4 md:mb-0">© 2024 Dante. Crafting digital experiences.</p>
<div className="flex items-center gap-6">
<a className="text-zinc-400 hover:text-white transition-colors hover:scale-110" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="text-zinc-400 hover:text-white transition-colors hover:scale-110" href="#">
<i className="w-5 h-5" data-lucide="dribbble"></i>
</a>
<a className="text-zinc-400 hover:text-white transition-colors hover:scale-110" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
