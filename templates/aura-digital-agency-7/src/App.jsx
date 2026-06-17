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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-lg', 'bg-gray-950/95');
                nav.classList.remove('bg-gray-950/80');
            } else {
                nav.classList.remove('shadow-lg', 'bg-gray-950/95');
                nav.classList.add('bg-gray-950/80');
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
      

<div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-indigo-600/20 via-purple-600/10 to-transparent blur-[100px] rounded-full pointer-events-none z-0 opacity-80"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-gray-950/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-semibold text-white tracking-tight flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
<span className="font-bold text-lg">A</span>
</div>
<span>AURA</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#why-us">Why Us</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-white transition-all duration-200 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900" href="#contact">
                    Book Strategy
                </a>
</div>
</div>
</nav>

<section className="relative z-10 pt-40 pb-24 md:pt-52 md:pb-40 px-6">
<div className="max-w-5xl mx-auto text-center relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl rounded-full -z-10"></div>
<div className="fade-in-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8 backdrop-blur-sm shadow-[0_0_15px_-3px_rgba(99,102,241,0.2)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Accepting new partners for Q4
            </div>
<h1 className="fade-in-up delay-100 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-8 leading-[1.05]">
                Premium growth &amp; <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">design-led marketing.</span>
</h1>
<p className="fade-in-up delay-200 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                We bridge the gap between high-end aesthetics and aggressive performance. Clarity, trust, and creativity for startups and premium brands.
            </p>
<div className="fade-in-up delay-300 flex flex-col items-center gap-6">
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">

<a className="w-full sm:w-auto px-8 py-4 bg-white text-gray-950 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] hover:shadow-[0_0_50px_-5px_rgba(255,255,255,0.5)] hover:scale-105 flex items-center justify-center gap-2" href="#contact">
                        Book a Free Strategy Call
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>

<a className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm" href="#work">
                        View Our Work
                    </a>
</div>

<p className="text-xs font-medium text-gray-500 tracking-widest uppercase opacity-80 mt-2">
<span className="text-indigo-400/80 mr-2">✦</span> Designed like luxury. Built for growth. <span className="text-indigo-400/80 ml-2">✦</span>
</p>
</div>
</div>
</section>

<div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-50"></div>

<section className="relative z-10 py-12 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-8">Trusted by founders and fast-growing brands</p>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-bold text-white tracking-tighter hover:text-indigo-200 transition-colors">Acme Corp</span>
<span className="text-lg font-bold text-white tracking-tighter hover:text-indigo-200 transition-colors">Starlight</span>
<span className="text-lg font-bold text-white tracking-tighter hover:text-indigo-200 transition-colors">NEXUS</span>
<span className="text-lg font-bold text-white tracking-tighter hover:text-indigo-200 transition-colors">FocalPoint</span>
<span className="text-lg font-bold text-white tracking-tighter hover:text-indigo-200 transition-colors">Vertex</span>
<span className="text-lg font-bold text-white tracking-tighter hover:text-indigo-200 transition-colors">Horizon</span>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Crafting digital excellence</h2>
<p className="text-gray-400">Comprehensive services designed to scale your brand.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/40">
<i className="text-indigo-400 w-6 h-6" data-lucide="layout"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Web Design</h3>
<p className="text-sm text-gray-400 leading-relaxed">Luxury UI that converts visitors into customers through psychology-driven layouts.</p>
</div>

<div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/40">
<i className="text-indigo-400 w-6 h-6" data-lucide="code-2"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Web Development</h3>
<p className="text-sm text-gray-400 leading-relaxed">Pixel-perfect, lightning-fast builds using modern frameworks and clean code.</p>
</div>

<div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/40">
<i className="text-indigo-400 w-6 h-6" data-lucide="gem"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Branding</h3>
<p className="text-sm text-gray-400 leading-relaxed">Identity systems that command authority and distinguish you from competitors.</p>
</div>

<div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/40">
<i className="text-indigo-400 w-6 h-6" data-lucide="search"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">SEO</h3>
<p className="text-sm text-gray-400 leading-relaxed">Technical and content strategies that dominate search rankings organically.</p>
</div>

<div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/40">
<i className="text-indigo-400 w-6 h-6" data-lucide="smartphone"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Social Handling</h3>
<p className="text-sm text-gray-400 leading-relaxed">Full-service management to engage communities and build brand loyalty.</p>
</div>

<div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/40">
<i className="text-indigo-400 w-6 h-6" data-lucide="pen-tool"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Creative Production</h3>
<p className="text-sm text-gray-400 leading-relaxed">High-end visuals and copy that capture attention in a noisy feed.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-white/5" id="process">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">The Blueprint</h2>
<p className="text-gray-400">A streamlined path from concept to market dominance.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="relative">
<div className="w-24 h-24 rounded-full bg-gray-950 border border-white/10 flex items-center justify-center relative z-10 mb-6 mx-auto md:mx-0 shadow-xl shadow-black/50">
<span className="text-2xl font-semibold text-indigo-400">01</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 md:text-left text-center">Discovery</h3>
<p className="text-sm text-gray-400 md:text-left text-center">We dive deep into your market, competitors, and goals to build a winning strategy.</p>
</div>

<div className="relative">
<div className="w-24 h-24 rounded-full bg-gray-950 border border-white/10 flex items-center justify-center relative z-10 mb-6 mx-auto md:mx-0 shadow-xl shadow-black/50">
<span className="text-2xl font-semibold text-indigo-400">02</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 md:text-left text-center">Design System</h3>
<p className="text-sm text-gray-400 md:text-left text-center">Crafting the visual language and user experience that aligns with your premium positioning.</p>
</div>

<div className="relative">
<div className="w-24 h-24 rounded-full bg-gray-950 border border-white/10 flex items-center justify-center relative z-10 mb-6 mx-auto md:mx-0 shadow-xl shadow-black/50">
<span className="text-2xl font-semibold text-indigo-400">03</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 md:text-left text-center">Build &amp; Optimize</h3>
<p className="text-sm text-gray-400 md:text-left text-center">Development and content creation with rigorous testing for speed and conversion.</p>
</div>

<div className="relative">
<div className="w-24 h-24 rounded-full bg-gray-950 border border-white/10 flex items-center justify-center relative z-10 mb-6 mx-auto md:mx-0 shadow-xl shadow-black/50">
<span className="text-2xl font-semibold text-indigo-400">04</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 md:text-left text-center">Launch &amp; Scale</h3>
<p className="text-sm text-gray-400 md:text-left text-center">Go-live followed by data-driven iteration to ensure consistent growth.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 bg-white/[0.01] border-t border-white/5" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Selected Work</h2>
<p className="text-gray-400">Results that speak for themselves.</p>
</div>
<a className="text-sm font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors" href="#">
                    View full portfolio <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-gray-900 rounded-2xl border border-white/10 overflow-hidden relative mb-6">
<div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
<div className="absolute inset-0 flex items-center justify-center text-gray-700 font-bold text-6xl opacity-20 group-hover:scale-105 transition-transform duration-700">IMG</div>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-block px-3 py-1 bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 rounded-full text-xs text-indigo-200 font-medium mb-2">
                                +180% Leads
                            </div>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-1">FinTech Global</h3>
<p className="text-sm text-gray-500">Branding + Web Design + SEO</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-gray-900 rounded-2xl border border-white/10 overflow-hidden relative mb-6">
<div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
<div className="absolute inset-0 flex items-center justify-center text-gray-700 font-bold text-6xl opacity-20 group-hover:scale-105 transition-transform duration-700">IMG</div>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-block px-3 py-1 bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 rounded-full text-xs text-indigo-200 font-medium mb-2">
                                4.2x ROAS
                            </div>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-1">Luxe Interiors</h3>
<p className="text-sm text-gray-500">Social Ads + Content Creation</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-gray-900 rounded-2xl border border-white/10 overflow-hidden relative mb-6">
<div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
<div className="absolute inset-0 flex items-center justify-center text-gray-700 font-bold text-6xl opacity-20 group-hover:scale-105 transition-transform duration-700">IMG</div>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-block px-3 py-1 bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 rounded-full text-xs text-indigo-200 font-medium mb-2">
                                Series B Funding
                            </div>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-1">Nova Health</h3>
<p className="text-sm text-gray-500">Full Rebrand + App Dev</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-white/5" id="why-us">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Why visionary brands choose Aura</h2>
<p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    We aren't just a service provider; we are your growth partner. We combine the agility of a startup with the polish of a global consultancy.
                </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mt-1">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<div>
<h4 className="text-white font-medium">Design-first growth systems</h4>
<p className="text-sm text-gray-500 mt-1">Marketing that looks as good as it performs.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mt-1">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<div>
<h4 className="text-white font-medium">Premium creative direction</h4>
<p className="text-sm text-gray-500 mt-1">Art direction that elevates your brand perception.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mt-1">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<div>
<h4 className="text-white font-medium">Fast delivery, clean execution</h4>
<p className="text-sm text-gray-500 mt-1">No bloated timelines. We ship quality, fast.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
<div className="relative bg-gray-900 border border-white/10 rounded-2xl p-8 md:p-12">

<div className="mb-10">
<div className="flex text-indigo-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-gray-300 italic mb-6">"Aura completely transformed our digital presence. The level of detail in the design and the strategic thinking behind the campaigns is unmatched."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-700"></div>
<div>
<div className="text-white font-medium text-sm">Sarah Jenkins</div>
<div className="text-xs text-gray-500">Founder, Evolve</div>
</div>
</div>
</div>

<div className="h-px w-full bg-white/10 mb-10"></div>

<div>
<div className="flex text-indigo-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-gray-300 italic mb-6">"Finally, an agency that understands the nuance of premium branding. Our lead quality increased by 200% in month one."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-700"></div>
<div>
<div className="text-white font-medium text-sm">David Chen</div>
<div className="text-xs text-gray-500">CMO, TechFlow</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6" id="contact">
<div className="max-w-4xl mx-auto">
<div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center border border-white/10 bg-gradient-to-b from-gray-900 to-black group">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-500/10 blur-[80px] pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-700"></div>
<h2 className="relative z-10 text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                    Ready to build a brand <br/> people remember?
                </h2>
<p className="relative z-10 text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                    Stop competing on price. Start competing on value. Let's discuss your roadmap to market leadership.
                </p>
<div className="relative z-10 flex flex-col items-center gap-4">
<button className="px-10 py-5 bg-white text-black rounded-full font-bold text-base hover:scale-105 hover:bg-gray-100 transition-all duration-300 shadow-[0_0_50px_-15px_rgba(255,255,255,0.3)]">
                        Book a Strategy Call
                    </button>
<p className="text-xs text-gray-500 mt-4 flex items-center gap-2">
<i className="w-3 h-3 text-green-500" data-lucide="check-circle"></i> Free strategy call 
                        <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                        No pressure
                        <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                        Quick audit included
                    </p>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/5 bg-black pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-2xl font-bold text-white tracking-tight flex items-center gap-2 mb-6" href="#">
                        AURA
                    </a>
<p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-8">
                        A premium digital growth agency building the brands of tomorrow. Combining high-end design with performance marketing.
                    </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Services</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Web Design</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Development</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">SEO &amp; Content</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Paid Social</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Work</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-600">© 2024 Aura Digital Agency. All rights reserved.</p>
<p className="text-xs text-gray-600">Designed for excellence.</p>
</div>
</div>
</footer>


    </>
  );
}
