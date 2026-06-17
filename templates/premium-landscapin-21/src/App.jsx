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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Intersection Observer for scroll animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('[class*="animate-"]').forEach((element) => {
                element.style.animationPlayState = 'paused';
                observer.observe(element);
            });
            
            // Mobile Menu Toggle
            const btn = document.getElementById('mobile-menu-btn');
            if (btn) {
                btn.addEventListener('click', () => {
                    // simple mobile menu functionality if needed
                });
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
      <div className="top-0 w-full h-screen -z-10 bg-cover bg-center fixed" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/385a19bf-c28d-4ce5-a5d7-65107ddb7238_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<header className="fixed top-0 left-0 right-0 z-50 glass-effect bg-white/80 border-b border-gray-200/50 animate-fade-in" style={{animationPlayState: 'running'}}>
<nav className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">
<a className="flex items-center gap-2 group" href="#">
<img alt="Reda Brothers Landscaping and Hardscape Experts Logo" className="h-12 w-auto transition-transform group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc96aff1-f8d1-466a-ab8b-9710c258efd4_320w.png"/>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-gray-500 hover:text-green-800 transition-colors" href="#solutions">Solutions</a>
<a className="text-sm font-normal text-gray-500 hover:text-green-800 transition-colors" href="#benefits">Benefits</a>
<a className="text-sm font-normal text-gray-500 hover:text-green-800 transition-colors" href="#features">Services</a>
<a className="text-sm font-normal text-gray-500 hover:text-green-800 transition-colors" href="#faq">FAQ</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="inline-flex items-center justify-center h-9 px-4 rounded-full text-sm font-medium bg-green-800 text-white hover:bg-green-900 transition-all shadow-sm hover:shadow" href="#contact">
                        Get Started
                    </a>
</div>

<button className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</nav>
</header>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: '0.4'}}></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8 mt-4">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl animate-slide-up" style={{animationPlayState: 'running'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-gray-200 bg-white text-gray-600 mb-8 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                        Premium Landscaping &amp; Hardscape
                    </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-gray-900 leading-tight mb-6">
                        Crafting outdoors that <br/><span className="text-gradient">inspire and perform.</span>
</h1>
<p className="text-lg text-gray-500 font-light leading-relaxed mb-10 max-w-xl">
                        Delivering top-tier landscaping, hardscape design, and precise outdoor renovation services with uncompromising quality and meticulous craftsmanship.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-gray-600 font-normal text-base">
<div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center border border-green-100">
<iconify-icon className="text-green-700" icon="solar:check-read-linear" style={{fontSize: '0.875rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
                            Turnkey execution from design to final handover
                        </li>
<li className="flex items-center gap-3 text-gray-600 font-normal text-base">
<div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center border border-green-100">
<iconify-icon className="text-green-700" icon="solar:check-read-linear" style={{fontSize: '0.875rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
                            Exclusive access to premium grade stones and flora
                        </li>
<li className="flex items-center gap-3 text-gray-600 font-normal text-base">
<div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center border border-green-100">
<iconify-icon className="text-green-700" icon="solar:check-read-linear" style={{fontSize: '0.875rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
                            Strict adherence to predetermined timelines and budgets
                        </li>
</ul>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full text-base font-medium bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 transition-all" href="#projects">
                            View Portfolio
                        </a>
</div>
</div>

<div className="relative animate-scale-in animate-delay-200" style={{animationPlayState: 'running'}}>
<div className="absolute inset-0 bg-gradient-to-tr from-green-100/50 to-gray-50 rounded-3xl transform rotate-3 scale-105 border border-green-200/30"></div>
<form className="relative bg-white/80 glass-effect rounded-3xl shadow-xl border border-gray-200/60 p-8 w-full" onsubmit="event.preventDefault();">
<div className="mb-8">
<h3 className="text-2xl font-medium tracking-tight text-gray-900 mb-2">Request an Estimate</h3>
<p className="text-sm font-light text-gray-500">Provide details about your outdoor project to receive a preliminary quotation within 24 hours.</p>
</div>

<div className="mb-6">
<label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">Project Category</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer group">
<input checked="" className="peer sr-only" name="project_type" type="radio" value="commercial"/>
<div className="flex flex-col items-center justify-center p-4 rounded-2xl border border-gray-200/60 bg-white peer-checked:border-green-800 peer-checked:bg-green-50/50 peer-checked:shadow-sm transition-all text-gray-400 peer-checked:text-green-800 hover:border-gray-300">
<iconify-icon className="mb-2" icon="solar:shop-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium">Commercial</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="project_type" type="radio" value="residential"/>
<div className="flex flex-col items-center justify-center p-4 rounded-2xl border border-gray-200/60 bg-white peer-checked:border-green-800 peer-checked:bg-green-50/50 peer-checked:shadow-sm transition-all text-gray-400 peer-checked:text-green-800 hover:border-gray-300">
<iconify-icon className="mb-2" icon="solar:home-smile-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium">Residential</span>
</div>
</label>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">

<div>
<label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">Space Area</label>
<div className="relative">
<input className="w-full h-12 pl-4 pr-12 rounded-xl border border-gray-200/60 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-800/10 focus:border-green-800 transition-all placeholder:text-gray-300" placeholder="e.g. 2000" type="number"/>
<span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-400 pointer-events-none">sq ft</span>
</div>
</div>

<div className="">
<label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">Timeline</label>
<div className="relative">
<select className="w-full h-12 px-4 rounded-xl border border-gray-200/60 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-800/10 focus:border-green-800 transition-all appearance-none text-gray-900 cursor-pointer">
<option>Immediate</option>
<option>1-3 Months</option>
<option>3-6 Months</option>
<option>Just Planning</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>

<div className="mb-8">
<label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">Work Email</label>
<input className="w-full h-12 px-4 rounded-xl border border-gray-200/60 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-800/10 focus:border-green-800 transition-all placeholder:text-gray-300" placeholder="you@company.com" type="email"/>
</div>
<button className="w-full h-12 rounded-xl text-sm font-medium bg-green-800 text-white hover:bg-green-900 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2" type="submit">
                            Get Initial Quote
                            <iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
</form>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-4 animate-slide-up animate-delay-400 z-10" style={{animationPlayState: 'running'}}>
<div className="h-12 w-12 rounded-full bg-green-50 flex items-center justify-center border border-green-100 text-green-600">
<iconify-icon icon="solar:bolt-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900 tracking-tight">Fast Response</p>
<p className="text-xs font-light text-gray-500">Expert analysis in 24h</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-gray-100" id="solutions">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up" style={{animationPlayState: 'running'}}>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">Overcoming standard landscaping challenges</h2>
<p className="text-lg font-light text-gray-500">We address the industry's most common pain points with structured, reliable solutions that protect your investment.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="bg-gray-50 rounded-3xl p-8 border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow animate-slide-up animate-delay-100" style={{animationPlayState: 'running'}}>
<div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center mb-6 text-green-800">
<iconify-icon icon="solar:calculator-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-3">Budget Overruns &amp; Hidden Costs</h3>
<p className="text-sm font-light text-gray-500 mb-6">Financial unpredictability derails projects and strains resources.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-green-700 mt-0.5" icon="solar:arrow-right-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-normal text-gray-700">Transparent, fully itemized initial quoting.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-green-700 mt-0.5" icon="solar:arrow-right-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-normal text-gray-700">Value engineering options without compromising quality.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-green-700 mt-0.5" icon="solar:arrow-right-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-normal text-gray-700">Fixed-price contracts for absolute financial peace of mind.</span>
</li>
</ul>
</div>

<div className="bg-gray-50 rounded-3xl p-8 border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow animate-slide-up animate-delay-200" style={{animationPlayState: 'running'}}>
<div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center mb-6 text-green-800">
<iconify-icon icon="solar:clock-circle-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-3">Missed Deadlines &amp; Delays</h3>
<p className="text-sm font-light text-gray-500 mb-6">Extended timelines disrupt business operations and seasonal enjoyment.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-green-700 mt-0.5" icon="solar:arrow-right-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-normal text-gray-700">Rigorous, data-driven milestone tracking.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-green-700 mt-0.5" icon="solar:arrow-right-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-normal text-gray-700">Proactive supply chain and nursery management.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-green-700 mt-0.5" icon="solar:arrow-right-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-normal text-gray-700">Dedicated full-time site supervision and coordination.</span>
</li>
</ul>
</div>

<div className="bg-gray-50 rounded-3xl p-8 border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow animate-slide-up animate-delay-300" style={{animationPlayState: 'running'}}>
<div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center mb-6 text-green-800">
<iconify-icon icon="solar:hammer-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-3">Subpar Craftsmanship</h3>
<p className="text-sm font-light text-gray-500 mb-6">Poor execution leads to rapid deterioration and aesthetic failures.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-green-700 mt-0.5" icon="solar:arrow-right-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-normal text-gray-700">Exclusive network of verified premium material suppliers.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-green-700 mt-0.5" icon="solar:arrow-right-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-normal text-gray-700">In-house, specialized masonry and hardscape team.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-green-700 mt-0.5" icon="solar:arrow-right-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-normal text-gray-700">Comprehensive multi-point quality assurance protocols.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="benefits">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="mb-16 md:flex justify-between items-end animate-slide-up" style={{animationPlayState: 'running'}}>
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">The Reda Brothers Advantage</h2>
<p className="text-lg font-light text-gray-500">Experience a transformative approach to outdoor contracting that elevates every aspect of your project lifecycle.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between group animate-slide-up" style={{animationPlayState: 'running'}}>
<div className="mb-8">
<div className="w-12 h-12 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-6 text-green-800 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:layers-minimalistic-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-gray-900 mb-2">Flawless Execution</h3>
<p className="text-base font-light text-gray-500 max-w-md">Our precise structural planning and methodical implementation guarantee that the final result perfectly mirrors your initial vision, down to the millimeter.</p>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.02)] group animate-slide-up animate-delay-100" style={{animationPlayState: 'running'}}>
<div className="w-12 h-12 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-6 text-green-800 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:star-fall-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">Elevated Curb Appeal</h3>
<p className="text-sm font-light text-gray-500">Impress clients and inspire guests with environments that authentically reflect your premium market positioning.</p>
</div>

<div className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.02)] group animate-slide-up animate-delay-200" style={{animationPlayState: 'running'}}>
<div className="w-12 h-12 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-6 text-green-800 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:maximize-square-minimalistic-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">Optimized Land Use</h3>
<p className="text-sm font-light text-gray-500">Intelligent spatial planning maximizes outdoor usability, operational efficiency, and natural flow.</p>
</div>

<div className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.02)] group animate-slide-up animate-delay-300" style={{animationPlayState: 'running'}}>
<div className="w-12 h-12 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-6 text-green-800 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:tea-cup-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">Stress-Free Journey</h3>
<p className="text-sm font-light text-gray-500">A single point of contact handles all complexities, turning a typically stressful process into a seamless experience.</p>
</div>

<div className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.02)] group animate-slide-up animate-delay-400" style={{animationPlayState: 'running'}}>
<div className="w-12 h-12 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-6 text-green-800 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">Long-term Durability</h3>
<p className="text-sm font-light text-gray-500">Built to endure diverse weather conditions with sustained material integrity and reliable post-handover maintenance.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-green-950 text-white relative overflow-hidden">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: '0.5'}}></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center mb-16 animate-slide-up" style={{animationPlayState: 'running'}}>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Trusted by industry leaders</h2>
<p className="text-lg font-light text-green-100/70">Hear from the clients who have experienced the Reda Brothers standard.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 animate-slide-up animate-delay-100" style={{animationPlayState: 'running'}}>
<div className="flex gap-1 mb-6 text-green-400">
<iconify-icon icon="solar:star-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-base font-light text-gray-200 leading-relaxed mb-8">
                        "The attention to detail completely transformed our commercial outdoor space. A flawless experience from start to finish. The custom masonry work is unmatched in the region."
                    </p>
<div className="flex items-center gap-4 mt-auto">
<div className="h-10 w-10 rounded-full bg-green-900 border border-green-800 flex items-center justify-center text-sm font-medium">MT</div>
<div>
<p className="text-sm font-medium text-white">Marcus Thorne</p>
<p className="text-xs font-light text-green-100/60">Property Director</p>
</div>
</div>
</div>

<div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 animate-slide-up animate-delay-200" style={{animationPlayState: 'running'}}>
<div className="flex gap-1 mb-6 text-green-400">
<iconify-icon icon="solar:star-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-base font-light text-gray-200 leading-relaxed mb-8">
                        "They delivered our corporate campus landscaping exactly on time and strictly within budget. Unheard of in this industry. Their transparency and project management are exceptional."
                    </p>
<div className="flex items-center gap-4 mt-auto">
<div className="h-10 w-10 rounded-full bg-green-900 border border-green-800 flex items-center justify-center text-sm font-medium">ER</div>
<div>
<p className="text-sm font-medium text-white">Elena Rodriguez</p>
<p className="text-xs font-light text-green-100/60">VP Operations</p>
</div>
</div>
</div>

<div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 animate-slide-up animate-delay-300" style={{animationPlayState: 'running'}}>
<div className="flex gap-1 mb-6 text-green-400">
<iconify-icon icon="solar:star-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-base font-light text-gray-200 leading-relaxed mb-8">
                        "Our luxury estate's hardscape exceeded every expectation. The bespoke patio and custom fire feature are truly world-class, elevating our living space to a level we couldn't have imagined."
                    </p>
<div className="flex items-center gap-4 mt-auto">
<div className="h-10 w-10 rounded-full bg-green-900 border border-green-800 flex items-center justify-center text-sm font-medium">JC</div>
<div>
<p className="text-sm font-medium text-white">James Chen</p>
<p className="text-xs font-light text-green-100/60">Private Client</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-gray-100 border-b pt-24 pb-24" id="features">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up" style={{animationPlayState: 'running'}}>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">Comprehensive Capabilities</h2>
<p className="text-lg font-light text-gray-500">Everything required to execute complex outdoor projects under one roof.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
<div className="lg:col-span-3 bg-gray-50 rounded-3xl p-8 border border-gray-200/60 hover:border-gray-300/60 transition-colors animate-slide-up" style={{animationPlayState: 'running'}}>
<iconify-icon className="text-green-800 mb-6" icon="solar:settings-linear" style={{fontSize: '2rem', strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">Irrigation &amp; Drainage Systems</h3>
<p className="text-base font-light text-gray-500 max-w-lg">Flawless water management and smart irrigation infrastructure implemented natively into your design, ensuring lush growth and zero flooding.</p>
</div>
<div className="lg:col-span-2 bg-gray-50 rounded-3xl p-8 border border-gray-200/60 hover:border-gray-300/60 transition-colors animate-slide-up animate-delay-100" style={{animationPlayState: 'running'}}>
<iconify-icon className="text-green-800 mb-6" icon="solar:ruler-angular-linear" style={{fontSize: '2rem', strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">Custom Hardscape &amp; Masonry</h3>
<p className="text-base font-light text-gray-500">Bespoke retaining walls, patios, and architectural stonework created in-house for unparalleled precision and stylistic coherence.</p>
</div>
<div className="lg:col-span-2 bg-gray-50 rounded-3xl p-8 border border-gray-200/60 hover:border-gray-300/60 transition-colors animate-slide-up animate-delay-200" style={{animationPlayState: 'running'}}>
<iconify-icon className="text-green-800 mb-6" icon="solar:maximize-linear" style={{fontSize: '2rem', strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">Landscape Architecture</h3>
<p className="text-base font-light text-gray-500">Strategic terrain modeling that maximizes usable area, ensuring proper zoning while prioritizing human flow and aesthetic beauty.</p>
</div>
<div className="lg:col-span-3 bg-gray-50 rounded-3xl p-8 border border-gray-200/60 hover:border-gray-300/60 transition-colors animate-slide-up animate-delay-300" style={{animationPlayState: 'running'}}>
<div className="flex gap-4">
<div className="flex-1">
<iconify-icon className="text-green-800 mb-6" icon="solar:users-group-two-rounded-linear" style={{fontSize: '2rem', strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">Dedicated Project Management</h3>
<p className="text-base font-light text-gray-500">A singular, dedicated project lead orchestrates all contractors, suppliers, and municipal bodies, providing you with streamlined, stress-free updates.</p>
</div>
</div>
</div>
<div className="lg:col-span-5 bg-gray-50 rounded-3xl p-8 border border-gray-200/60 hover:border-gray-300/60 transition-colors flex flex-col md:flex-row gap-6 items-center justify-between animate-slide-up animate-delay-400" style={{animationPlayState: 'running'}}>
<div className="">
<iconify-icon className="text-green-800 mb-4 md:mb-6 md:block hidden" icon="solar:leaf-linear" style={{fontSize: '2rem', strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">Sustainable Material Sourcing</h3>
<p className="text-base font-light text-gray-500 max-w-2xl">Commitment to environmentally responsible materials and drought-tolerant planting that promotes local ecosystems without sacrificing aesthetic luxury.</p>
</div>
<div className="flex-shrink-0">
<div className="w-16 h-16 rounded-full border border-gray-200 bg-white flex items-center justify-center">
<iconify-icon className="text-green-800 md:hidden" icon="solar:leaf-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-green-800 hidden md:block" icon="solar:check-circle-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="faq">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 animate-slide-up" style={{animationPlayState: 'running'}}>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">Frequently Asked Questions</h2>
<p className="text-lg font-light text-gray-500">Everything you need to know about partnering with us.</p>
</div>
<div className="space-y-4 animate-slide-up animate-delay-100" style={{animationPlayState: 'running'}}>

<details className="group bg-white rounded-2xl border border-gray-200/60 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer font-medium text-lg text-gray-900 tracking-tight">
<span>How long does a typical commercial landscaping project take?</span>
<span className="transition-transform duration-300 group-open:rotate-180 flex items-center justify-center h-6 w-6 rounded-full bg-gray-50 border border-gray-200 group-hover:bg-gray-100 text-green-800">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{fontSize: '1rem'}}></iconify-icon>
</span>
</summary>
<p className="text-gray-500 mt-4 font-light text-base leading-relaxed">
                        Timelines vary based on scale and complexity, but a standard commercial outdoor space typically ranges from 4 to 10 weeks. We provide a guaranteed, detailed schedule during the initial proposal phase.
                    </p>
</details>

<details className="group bg-white rounded-2xl border border-gray-200/60 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer font-medium text-lg text-gray-900 tracking-tight">
<span>Do you handle all necessary building permits?</span>
<span className="transition-transform duration-300 group-open:rotate-180 flex items-center justify-center h-6 w-6 rounded-full bg-gray-50 border border-gray-200 group-hover:bg-gray-100 text-green-800">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{fontSize: '1rem'}}></iconify-icon>
</span>
</summary>
<p className="text-gray-500 mt-4 font-light text-base leading-relaxed">
                        Yes, our dedicated public relations officers handle all necessary approvals from local municipalities, HOAs, and zoning management prior to commencing any physical work.
                    </p>
</details>

<details className="group bg-white rounded-2xl border border-gray-200/60 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer font-medium text-lg text-gray-900 tracking-tight">
<span className="">Can you work within a strictly defined budget?</span>
<span className="transition-transform duration-300 group-open:rotate-180 flex items-center justify-center h-6 w-6 rounded-full bg-gray-50 border border-gray-200 group-hover:bg-gray-100 text-green-800">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{fontSize: '1rem'}}></iconify-icon>
</span>
</summary>
<p className="text-gray-500 mt-4 font-light text-base leading-relaxed">
                        Absolutely. We utilize value engineering to align our designs and material selections strictly with your financial parameters without compromising structural integrity or core aesthetics.
                    </p>
</details>

<details className="group bg-white rounded-2xl border border-gray-200/60 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer font-medium text-lg text-gray-900 tracking-tight">
<span className="">Do you provide warranties on your work?</span>
<span className="transition-transform duration-300 group-open:rotate-180 flex items-center justify-center h-6 w-6 rounded-full bg-gray-50 border border-gray-200 group-hover:bg-gray-100 text-green-800">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{fontSize: '1rem'}}></iconify-icon>
</span>
</summary>
<p className="text-gray-500 mt-4 font-light text-base leading-relaxed">
                        Yes, all our projects include a comprehensive post-handover warranty covering hardscape materials, plant health for the first season, and workmanship, ensuring your long-term peace of mind.
                    </p>
</details>

<details className="group bg-white rounded-2xl border border-gray-200/60 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer font-medium text-lg text-gray-900 tracking-tight">
<span className="">What is your process for handling design changes?</span>
<span className="transition-transform duration-300 group-open:rotate-180 flex items-center justify-center h-6 w-6 rounded-full bg-gray-50 border border-gray-200 group-hover:bg-gray-100 text-green-800">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{fontSize: '1rem'}}></iconify-icon>
</span>
</summary>
<p className="text-gray-500 mt-4 font-light text-base leading-relaxed">
                        Any variation orders are formally documented, priced, and approved by you before implementation. This rigorous change management process prevents unexpected final costs.
                    </p>
</details>
</div>
</div>
</section>

<section className="overflow-hidden bg-white border-gray-100 border-t pt-24 pb-24 relative">

<div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-green-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-gray-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center animate-scale-in" style={{animationPlayState: 'running'}}>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900 mb-6">Ready to Transform Your Outdoors?</h2>
<p className="text-xl font-light text-gray-500 mb-10 max-w-2xl mx-auto">Experience unmatched precision and luxury. Partner with Reda Brothers for your next landscaping requirement.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center justify-center h-14 px-8 rounded-full text-base font-medium bg-green-800 text-white hover:bg-green-900 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5" href="#contact">
                    Start Your Project Today
                </a>
</div>
<p className="text-sm font-normal text-gray-400 mt-6">Schedule a complimentary on-site consultation.</p>
</div>
</section>

<footer className="bg-gray-50 border-t border-gray-200/60 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
<a className="flex items-center gap-2" href="#">
<img alt="Reda Brothers Landscaping and Hardscape Experts Logo" className="h-10 w-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc96aff1-f8d1-466a-ab8b-9710c258efd4_320w.png"/>
</a>
<div className="flex gap-6">
<a className="text-gray-400 hover:text-green-800 transition-colors" href="#">
<span className="sr-only">Twitter</span>
<iconify-icon icon="solar:letter-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
<a className="text-gray-400 hover:text-green-800 transition-colors" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon icon="solar:camera-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
<a className="text-gray-400 hover:text-green-800 transition-colors" href="#">
<span className="sr-only">LinkedIn</span>
<iconify-icon icon="solar:users-group-rounded-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
</div>
</div>
<div className="border-t border-gray-200/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-light">
<p>© 2024 Reda Brothers Landscaping and Hardscape. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-green-800 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-green-800 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
