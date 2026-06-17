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

        // Scroll Animation Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-amber-400/50 transition-colors">
<span className="text-xs font-bold text-amber-400">A</span>
</div>
                AETHER
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-light tracking-wide">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#agency">Agency</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<button className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all text-xs font-medium tracking-wide text-white">
                START PROJECT
                <i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px] animate-pulse-slow"></div>
<div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/80 to-neutral-950"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-200/80 text-[10px] uppercase tracking-widest mb-8 reveal">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                Redefining Digital Physics
            </div>
<h1 className="text-5xl md:text-8xl font-medium text-white tracking-tighter mb-8 leading-[0.9] reveal" style={{transitionDelay: '100ms'}}>
                We craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">digital</span><br/>
<span className="italic font-light text-white/50">experiences</span> that matter.
            </h1>
<p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed reveal" style={{transitionDelay: '200ms'}}>
                Aether is a creative technology agency blending high-end design with cutting-edge engineering to build immersive web platforms.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 reveal" style={{transitionDelay: '300ms'}}>
<button className="px-8 py-4 bg-white text-black rounded-full text-sm font-medium tracking-wide hover:bg-neutral-200 transition-colors w-full md:w-auto">
                    View Case Studies
                </button>
<button className="px-8 py-4 glass text-white rounded-full text-sm font-medium tracking-wide hover:bg-white/10 transition-colors w-full md:w-auto flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                    Showreel
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<i className="w-5 h-5 text-white/50" data-lucide="chevrons-down"></i>
</div>
</header>

<section className="border-y border-white/5 bg-black py-8 overflow-hidden relative z-20">
<div className="flex whitespace-nowrap animate-ticker w-max">

<div className="flex items-center gap-16 md:gap-32 px-16 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100">
<span className="text-xl font-semibold tracking-tighter">ACME CORP</span>
<span className="text-xl font-semibold tracking-tighter">STRATOS</span>
<span className="text-xl font-semibold tracking-tighter">HYPERION</span>
<span className="text-xl font-semibold tracking-tighter">NEXUS</span>
<span className="text-xl font-semibold tracking-tighter">VERTEX</span>
<span className="text-xl font-semibold tracking-tighter">CLARITY</span>
<span className="text-xl font-semibold tracking-tighter">ECHO</span>
</div>
<div className="flex items-center gap-16 md:gap-32 px-16 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100">
<span className="text-xl font-semibold tracking-tighter">ACME CORP</span>
<span className="text-xl font-semibold tracking-tighter">STRATOS</span>
<span className="text-xl font-semibold tracking-tighter">HYPERION</span>
<span className="text-xl font-semibold tracking-tighter">NEXUS</span>
<span className="text-xl font-semibold tracking-tighter">VERTEX</span>
<span className="text-xl font-semibold tracking-tighter">CLARITY</span>
<span className="text-xl font-semibold tracking-tighter">ECHO</span>
</div>
</div>
</section>

<section className="py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6 reveal">
<div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4">Our Expertise</h2>
<p className="text-neutral-500 max-w-md font-light">Precision engineering meets aesthetic perfection.</p>
</div>
<a className="text-sm text-white border-b border-white/30 pb-1 hover:border-white transition-colors" href="#">View all services</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass glass-hover p-10 rounded-2xl group transition-all duration-500 reveal">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 text-amber-200 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<h3 className="text-xl text-white font-medium mb-3 tracking-tight">UI/UX Design</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">
                        Crafting intuitive interfaces that guide users effortlessly through complex digital ecosystems with micro-interactions.
                    </p>
<ul className="text-xs text-neutral-500 font-mono space-y-2">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full"></div> Design Systems</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full"></div> Prototyping</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full"></div> Motion Design</li>
</ul>
</div>

<div className="glass glass-hover p-10 rounded-2xl group transition-all duration-500 reveal" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 text-amber-200 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6" data-lucide="code-2"></i>
</div>
<h3 className="text-xl text-white font-medium mb-3 tracking-tight">Development</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">
                        Building robust, scalable applications using modern frameworks optimized for performance and SEO.
                    </p>
<ul className="text-xs text-neutral-500 font-mono space-y-2">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full"></div> Full Stack</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full"></div> WebGL / 3D</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full"></div> Headless CMS</li>
</ul>
</div>

<div className="glass glass-hover p-10 rounded-2xl group transition-all duration-500 reveal" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 text-amber-200 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl text-white font-medium mb-3 tracking-tight">Brand Identity</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">
                        Defining the visual and verbal language of brands to create lasting connections with audiences.
                    </p>
<ul className="text-xs text-neutral-500 font-mono space-y-2">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full"></div> Strategy</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full"></div> Visual Assets</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full"></div> Guidelines</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-900/30 border-y border-white/5 overflow-hidden" id="work">
<div className="max-w-7xl mx-auto px-6 mb-16 flex items-end justify-between reveal">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter">Selected Works</h2>
<div className="flex gap-4">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-white"><i className="w-4 h-4" data-lucide="arrow-left"></i></button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-white"><i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</div>
</div>
<div className="flex overflow-x-auto no-scrollbar gap-8 px-6 md:px-[calc((100vw-80rem)/2)] pb-12 snap-x snap-mandatory">

<div className="min-w-[85vw] md:min-w-[600px] snap-center group cursor-pointer reveal">
<div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-6">
<div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black group-hover:scale-105 transition-transform duration-700 ease-out">
<div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>

<div className="w-full h-full flex items-center justify-center">
<div className="w-32 h-32 border border-white/20 rounded-full animate-pulse-slow"></div>
<div className="absolute w-64 h-64 border border-white/5 rounded-full"></div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-1 group-hover:text-amber-200 transition-colors">Lumina Finance</h3>
<p className="text-neutral-500 font-light">Fintech • Web App</p>
</div>
<span className="text-xs border border-white/10 px-2 py-1 rounded text-neutral-400">2023</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[600px] snap-center group cursor-pointer reveal" style={{transitionDelay: '100ms'}}>
<div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-6">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950 group-hover:scale-105 transition-transform duration-700 ease-out">
<div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent"></div>
<div className="w-full h-full flex items-center justify-center">
<div className="w-40 h-20 border border-amber-500/30 rotate-12"></div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-1 group-hover:text-amber-200 transition-colors">Apex Architecture</h3>
<p className="text-neutral-500 font-light">Real Estate • Brand Identity</p>
</div>
<span className="text-xs border border-white/10 px-2 py-1 rounded text-neutral-400">2023</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[600px] snap-center group cursor-pointer reveal" style={{transitionDelay: '200ms'}}>
<div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-6">
<div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black group-hover:scale-105 transition-transform duration-700 ease-out">
<div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent"></div>
<div className="w-full h-full flex items-center justify-center">
<div className="w-20 h-20 bg-white/5 backdrop-blur-md rotate-45"></div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-1 group-hover:text-amber-200 transition-colors">Echo Systems</h3>
<p className="text-neutral-500 font-light">SaaS • Marketing Site</p>
</div>
<span className="text-xs border border-white/10 px-2 py-1 rounded text-neutral-400">2024</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950 -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center reveal">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-16">Built with modern alchemy</h2>
<div className="relative h-[300px] w-full flex items-center justify-center">

<div className="absolute w-24 h-24 bg-gradient-to-tr from-amber-600 to-amber-300 rounded-full blur-[40px] opacity-20"></div>
<div className="absolute z-10 text-white font-medium tracking-widest text-xs">STACK</div>


<div className="absolute animate-float bg-neutral-900/80 border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-sm top-0 left-1/4">
<i className="w-6 h-6 text-blue-400" data-lucide="codepen"></i>
</div>

<div className="absolute animate-float-delay bg-neutral-900/80 border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-sm bottom-10 right-1/4">
<i className="w-6 h-6 text-white rotate-180" data-lucide="triangle"></i>
</div>

<div className="absolute animate-float bg-neutral-900/80 border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-sm top-10 right-10">
<i className="w-6 h-6 text-cyan-400" data-lucide="wind"></i>
</div>

<div className="absolute animate-float-delay bg-neutral-900/80 border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-sm bottom-0 left-10">
<i className="w-6 h-6 text-blue-500" data-lucide="file-code"></i>
</div>

<div className="absolute animate-float bg-neutral-900/80 border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-sm top-1/2 left-10 -translate-y-1/2">
<i className="w-6 h-6 text-green-500" data-lucide="server"></i>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-900/20" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4">Investment</h2>
<p className="text-neutral-500 font-light">Transparent pricing for scalable solutions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

<div className="p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-300 reveal">
<h3 className="text-lg text-white font-medium mb-2">Essential</h3>
<div className="text-3xl font-semibold text-white mb-6 tracking-tight">$5,000<span className="text-sm font-normal text-neutral-500">/project</span></div>
<p className="text-sm text-neutral-400 font-light mb-8">Perfect for early-stage startups needing a landing page.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300"><i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> Single Page Application</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> Mobile Responsive</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> Basic SEO</li>
</ul>
<button className="w-full py-3 rounded-xl border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors">Get Started</button>
</div>

<div className="relative p-10 rounded-3xl bg-neutral-900 border border-amber-500/30 shadow-[0_0_50px_-12px_rgba(251,191,36,0.1)] transform scale-105 z-10 reveal" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 right-0 p-3">
<span className="bg-amber-500/10 text-amber-300 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Popular</span>
</div>
<h3 className="text-xl text-white font-medium mb-2">Professional</h3>
<div className="text-4xl font-semibold text-white mb-6 tracking-tight">$12,000<span className="text-sm font-normal text-neutral-500">/project</span></div>
<p className="text-sm text-neutral-400 font-light mb-8">Full-scale corporate website with CMS integration.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-white"><i className="w-4 h-4 text-amber-400" data-lucide="check"></i> Up to 10 Pages</li>
<li className="flex items-center gap-3 text-sm text-white"><i className="w-4 h-4 text-amber-400" data-lucide="check"></i> CMS Integration</li>
<li className="flex items-center gap-3 text-sm text-white"><i className="w-4 h-4 text-amber-400" data-lucide="check"></i> Advanced Animations</li>
<li className="flex items-center gap-3 text-sm text-white"><i className="w-4 h-4 text-amber-400" data-lucide="check"></i> Analytics Setup</li>
</ul>
<button className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-200 to-amber-500 text-black text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-amber-500/20">Get Started</button>
</div>

<div className="p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-300 reveal" style={{transitionDelay: '200ms'}}>
<h3 className="text-lg text-white font-medium mb-2">Enterprise</h3>
<div className="text-3xl font-semibold text-white mb-6 tracking-tight">Custom</div>
<p className="text-sm text-neutral-400 font-light mb-8">Complex web applications and ongoing support.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300"><i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> Custom Functionality</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> 3D / WebGL Experiences</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> Priority Support</li>
</ul>
<button className="w-full py-3 rounded-xl border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors">Contact Us</button>
</div>
</div>
</div>
</section>

<section className="py-32">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 reveal">
<div>
<i className="w-8 h-8 text-amber-500/50 mb-6" data-lucide="quote"></i>
<h3 className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-6">
                    "Aether transformed our vague ideas into a digital masterpiece. The attention to detail and the fluidity of the animations elevated our brand perception overnight."
                </h3>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-neutral-800 rounded-full"></div>
<div>
<div className="text-sm font-medium text-white">Sarah Jenkins</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">CTO, Stratos</div>
</div>
</div>
</div>
<div className="hidden md:block border-l border-white/5 pl-12">
<div className="space-y-12">
<div className="group cursor-default">
<div className="text-neutral-500 mb-2 text-sm group-hover:text-amber-200 transition-colors">Design Quality</div>
<div className="h-1 w-full bg-neutral-900 rounded-full overflow-hidden">
<div className="h-full bg-neutral-700 w-[98%]"></div>
</div>
</div>
<div className="group cursor-default">
<div className="text-neutral-500 mb-2 text-sm group-hover:text-amber-200 transition-colors">Performance</div>
<div className="h-1 w-full bg-neutral-900 rounded-full overflow-hidden">
<div className="h-full bg-neutral-700 w-[95%]"></div>
</div>
</div>
<div className="group cursor-default">
<div className="text-neutral-500 mb-2 text-sm group-hover:text-amber-200 transition-colors">Communication</div>
<div className="h-1 w-full bg-neutral-900 rounded-full overflow-hidden">
<div className="h-full bg-neutral-700 w-[100%]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 reveal">
<h2 className="text-5xl md:text-7xl font-medium text-white tracking-tighter mb-8">Ready to elevate?</h2>
<p className="text-lg text-neutral-400 font-light mb-12 max-w-2xl mx-auto">
                Join the visionary companies reshaping their industries. Let's build something extraordinary together.
            </p>
<button className="group relative px-10 py-5 bg-white text-neutral-950 rounded-full text-sm font-semibold tracking-wide overflow-hidden">
<span className="relative z-10 group-hover:text-white transition-colors duration-300">START PROJECT</span>
<div className="absolute inset-0 bg-neutral-950 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
</button>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-medium tracking-tighter text-white block mb-6" href="#">AETHER</a>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                        A creative technology agency pushing the boundaries of the digital web.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-6">Sitemap</h4>
<ul className="space-y-4 text-sm font-light text-neutral-400">
<li><a className="hover:text-amber-200 transition-colors" href="#">Services</a></li>
<li><a className="hover:text-amber-200 transition-colors" href="#">Work</a></li>
<li><a className="hover:text-amber-200 transition-colors" href="#">Agency</a></li>
<li><a className="hover:text-amber-200 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-6">Socials</h4>
<ul className="space-y-4 text-sm font-light text-neutral-400">
<li><a className="hover:text-amber-200 transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-amber-200 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-amber-200 transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-amber-200 transition-colors" href="#">Dribbble</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-6">Legal</h4>
<ul className="space-y-4 text-sm font-light text-neutral-400">
<li><a className="hover:text-amber-200 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-amber-200 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<div className="text-xs text-neutral-600">
                    © 2024 Aether Agency. All rights reserved.
                </div>
<div className="text-xs text-neutral-600 mt-4 md:mt-0 flex gap-4">
<span>New York</span>
<span>•</span>
<span>London</span>
<span>•</span>
<span>Tokyo</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
