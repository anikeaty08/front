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
navy: '#0F172A',
emerald: {
500: '#10B981',
600: '#059669'
},
warm: '#F9FAFB'
}
}
}
}



        lucide.createIcons();
        
        // Scroll animations
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
        
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(section);
        });
        
        // Make first section visible immediately
        document.querySelector('section').style.opacity = '1';
        document.querySelector('section').style.transform = 'translateY(0)';
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80">
<div className="backdrop-blur-xl bg-white/90">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 lg:h-20">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
<span className="text-white font-bold text-lg tracking-tighter">N</span>
</div>
<span className="text-lg font-semibold tracking-tight text-navy">NetPiedev</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors" href="#portfolio">Portfolio</a>
<a className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors" href="#process">Process</a>
<a className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors" href="#testimonials">Results</a>
</div>
<div className="flex items-center gap-3">
<span className="hidden sm:block text-sm text-slate-600 hover:text-emerald-600 cursor-pointer transition-colors">Log in</span>
<a className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-navy/20" href="#contact">
                            Get Your Free Strategy
                        </a>
</div>
</div>
</div>
</div>
</nav>

<section className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden bg-white">
<div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="relative z-10 fade-in">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Business Growth Partner</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
<span className="text-navy">We Build Digital</span>
<br/>
<span className="text-navy">Products That </span>
<span className="text-gradient">Dominate</span>
<br/>
<span className="text-navy">Markets &amp; </span>
<span className="text-gradient">Scale Revenue</span>
</h1>
<p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                        Stop losing customers to average design. NetPiedev engineers high-performance Websites &amp; Apps designed to convert traffic into loyal buyers. <strong className="text-navy">Your business growth is our code.</strong>
</p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-emerald-500/30" href="#contact">
<i className="w-4 h-4" data-lucide="rocket" style={{strokeWidth: '1.5'}}></i>
                            Get Your Free Growth Strategy
                        </a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-navy text-navy rounded-lg text-sm font-semibold hover:bg-navy hover:text-white transition-all" href="#portfolio">
<i className="w-4 h-4" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
                            View Impact Portfolio
                        </a>
</div>
<div className="border-t border-slate-200 pt-8">
<p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-5">Trusted by 50+ High-Growth Startups</p>
<div className="flex flex-wrap items-center gap-6 lg:gap-8">
<span className="text-sm font-semibold text-slate-400 tracking-tight">Spuntify</span>
<span className="text-sm font-semibold text-slate-400 tracking-tight">Mezon</span>
<span className="text-sm font-semibold text-slate-400 tracking-tight">Suntein</span>
<span className="text-sm font-semibold text-slate-400 tracking-tight">EntrDevet</span>
<span className="text-sm font-semibold text-slate-400 tracking-tight">Amex</span>
</div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 blur-3xl rounded-full scale-75"></div>
<div className="relative hero-image">
<div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20 border border-slate-200">
<a href="https://ibb.co/Fq6fc0BP">
<img alt="NetPiedev Digital Solutions" className="w-full h-auto max-w-md lg:max-w-lg object-cover" src="https://i.ibb.co/yB0MKY83/unnamed.jpg"/>
</a>
</div>

<div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 z-20">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
<i className="w-5 h-5 text-emerald-600" data-lucide="trending-up" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="text-xl font-bold text-emerald-600">+300%</div>
<div className="text-xs text-slate-500">Revenue Growth</div>
</div>
</div>
</div>

<div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 z-20">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
<i className="w-5 h-5 text-blue-600" data-lucide="users" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="text-xl font-bold text-navy">500K+</div>
<div className="text-xs text-slate-500">Users Served</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-warm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
<h2 className="text-2xl lg:text-4xl font-bold tracking-tight text-navy mt-2">The NetPiedev Difference</h2>
</div>
<div className="grid lg:grid-cols-2 gap-8">

<div className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
<i className="w-5 h-5 text-red-500" data-lucide="x" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-semibold text-slate-500">The Old Way (Others)</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" data-lucide="x-circle" style={{strokeWidth: '1.5'}}></i>
<span className="text-slate-500">Missed deadlines and constant delays</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" data-lucide="x-circle" style={{strokeWidth: '1.5'}}></i>
<span className="text-slate-500">Buggy code that breaks under pressure</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" data-lucide="x-circle" style={{strokeWidth: '1.5'}}></i>
<span className="text-slate-500">Hidden fees and surprise invoices</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" data-lucide="x-circle" style={{strokeWidth: '1.5'}}></i>
<span className="text-slate-500">Ghosting after launch, zero support</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" data-lucide="x-circle" style={{strokeWidth: '1.5'}}></i>
<span className="text-slate-500">No SEO strategy, invisible online</span>
</li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border-2 border-emerald-500 shadow-xl shadow-emerald-500/10">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
<i className="w-5 h-5 text-emerald-600" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-semibold text-navy">The NetPiedev Standard</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
<span className="text-navy font-medium">Transparent Agile Sprints with weekly updates</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
<span className="text-navy font-medium">ROI-focused Architecture built for scale</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
<span className="text-navy font-medium">Fixed pricing with zero hidden costs</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
<span className="text-navy font-medium">Post-Launch SEO Domination strategy</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
<span className="text-navy font-medium">24/7 support &amp; continuous optimization</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
<h2 className="text-2xl lg:text-4xl font-bold tracking-tight text-navy mt-2">The Transparency Engine</h2>
<p className="text-slate-600 mt-4 max-w-2xl mx-auto">Clients pay for certainty. Here's your roadmap to success.</p>
</div>
<div className="grid md:grid-cols-4 gap-6 lg:gap-8 relative">
<div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-500 to-emerald-200"></div>
<div className="relative text-center group">
<div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-white border-2 border-emerald-500 flex items-center justify-center relative z-10 shadow-lg group-hover:shadow-emerald-500/30 transition-all group-hover:-translate-y-1">
<i className="w-10 h-10 text-emerald-600" data-lucide="search" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full mb-3">Step 1</span>
<h3 className="text-lg font-semibold text-navy mb-3">Discovery &amp; Strategy</h3>
<p className="text-sm text-slate-600 leading-relaxed">We don't touch code until we understand your profit model and growth goals.</p>
</div>
<div className="relative text-center group">
<div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-white border-2 border-emerald-500 flex items-center justify-center relative z-10 shadow-lg group-hover:shadow-emerald-500/30 transition-all group-hover:-translate-y-1">
<i className="w-10 h-10 text-emerald-600" data-lucide="layout" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full mb-3">Step 2</span>
<h3 className="text-lg font-semibold text-navy mb-3">The Blueprint</h3>
<p className="text-sm text-slate-600 leading-relaxed">Wireframes and User Journeys designed to ensure maximum retention.</p>
</div>
<div className="relative text-center group">
<div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-white border-2 border-emerald-500 flex items-center justify-center relative z-10 shadow-lg group-hover:shadow-emerald-500/30 transition-all group-hover:-translate-y-1">
<i className="w-10 h-10 text-emerald-600" data-lucide="code-2" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full mb-3">Step 3</span>
<h3 className="text-lg font-semibold text-navy mb-3">Agile Build</h3>
<p className="text-sm text-slate-600 leading-relaxed">You get a clickable update every Friday. No surprises, complete transparency.</p>
</div>
<div className="relative text-center group">
<div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-emerald-600 flex items-center justify-center relative z-10 shadow-lg shadow-emerald-500/30 group-hover:-translate-y-1 transition-all">
<i className="w-10 h-10 text-white" data-lucide="rocket" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full mb-3">Step 4</span>
<h3 className="text-lg font-semibold text-navy mb-3">Launch &amp; Scale</h3>
<p className="text-sm text-slate-600 leading-relaxed">We hand over the keys, but our SEO team ensures the engine keeps running.</p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-warm" id="portfolio">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
<div>
<span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Case Studies</span>
<h2 className="text-2xl lg:text-4xl font-bold tracking-tight text-navy mt-2">Impact Portfolio</h2>
<p className="text-base text-slate-600 mt-2">We don't just build products. We build <span className="text-emerald-600 font-semibold">measurable outcomes</span>.</p>
</div>
<a className="flex items-center gap-2 text-emerald-600 font-semibold text-sm hover:gap-3 transition-all" href="#">
                    View All Work
                    <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-all duration-300">
<div className="h-48 bg-gradient-to-br from-violet-600 to-indigo-600 relative overflow-hidden">
<div className="absolute inset-0 bg-black/10"></div>
<div className="absolute bottom-0 left-6 right-6 h-28 bg-white rounded-t-xl shadow-xl flex items-center justify-center">
<i className="w-12 h-12 text-violet-600" data-lucide="shopping-cart" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="p-6">
<span className="text-xs font-semibold text-violet-600 uppercase tracking-wider">E-Commerce</span>
<h3 className="text-lg font-semibold text-navy mt-2 mb-2">UrbanKart Checkout Redesign</h3>
<p className="text-sm text-slate-500 mb-4"><strong className="text-navy">Problem:</strong> Losing 40% of users at checkout.</p>
<p className="text-sm text-slate-500 mb-4"><strong className="text-navy">Solution:</strong> Redesigned UX flow &amp; optimized backend speed.</p>
<div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
<div className="text-center">
<div className="text-xl font-bold text-emerald-600">+312%</div>
<div className="text-xs text-slate-500">Sales</div>
</div>
<div className="text-center">
<div className="text-xl font-bold text-emerald-600">1.8s</div>
<div className="text-xs text-slate-500">Load Time</div>
</div>
<div className="text-center">
<div className="text-xl font-bold text-emerald-600">#1</div>
<div className="text-xs text-slate-500">Google Rank</div>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-all duration-300">
<div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 relative overflow-hidden">
<div className="absolute inset-0 bg-black/10"></div>
<div className="absolute bottom-0 left-6 right-6 h-28 bg-white rounded-t-xl shadow-xl flex items-center justify-center">
<i className="w-12 h-12 text-blue-600" data-lucide="credit-card" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="p-6">
<span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Fintech</span>
<h3 className="text-lg font-semibold text-navy mt-2 mb-2">PayQuick Banking App</h3>
<p className="text-sm text-slate-500 mb-4"><strong className="text-navy">Problem:</strong> Complex onboarding causing 60% drop-off.</p>
<p className="text-sm text-slate-500 mb-4"><strong className="text-navy">Solution:</strong> Simplified KYC with biometric verification.</p>
<div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
<div className="text-center">
<div className="text-xl font-bold text-emerald-600">500K+</div>
<div className="text-xs text-slate-500">Downloads</div>
</div>
<div className="text-center">
<div className="text-xl font-bold text-emerald-600">₹8Cr</div>
<div className="text-xs text-slate-500">Processed</div>
</div>
<div className="text-center">
<div className="text-xl font-bold text-emerald-600">4.8★</div>
<div className="text-xs text-slate-500">Rating</div>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-all duration-300 md:col-span-2 lg:col-span-1">
<div className="h-48 bg-gradient-to-br from-orange-500 to-red-500 relative overflow-hidden">
<div className="absolute inset-0 bg-black/10"></div>
<div className="absolute bottom-0 left-6 right-6 h-28 bg-white rounded-t-xl shadow-xl flex items-center justify-center">
<i className="w-12 h-12 text-orange-600" data-lucide="users" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="p-6">
<span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">SaaS</span>
<h3 className="text-lg font-semibold text-navy mt-2 mb-2">HireFlow HR Platform</h3>
<p className="text-sm text-slate-500 mb-4"><strong className="text-navy">Problem:</strong> Manual hiring process taking 3 weeks.</p>
<p className="text-sm text-slate-500 mb-4"><strong className="text-navy">Solution:</strong> AI-powered candidate screening system.</p>
<div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
<div className="text-center">
<div className="text-xl font-bold text-emerald-600">85%</div>
<div className="text-xs text-slate-500">Time Saved</div>
</div>
<div className="text-center">
<div className="text-xl font-bold text-emerald-600">$2.1M</div>
<div className="text-xs text-slate-500">ARR</div>
</div>
<div className="text-center">
<div className="text-xl font-bold text-emerald-600">200+</div>
<div className="text-xs text-slate-500">Clients</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white" id="testimonials">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
<h2 className="text-2xl lg:text-4xl font-bold tracking-tight text-navy mt-2">What Our Partners Say</h2>
</div>
<div className="bg-white rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100">
<div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
<div className="order-2 md:order-1">
<div className="flex gap-1 mb-6">
<i className="w-5 h-5 text-amber-400 fill-amber-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 text-amber-400 fill-amber-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 text-amber-400 fill-amber-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 text-amber-400 fill-amber-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 text-amber-400 fill-amber-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl lg:text-2xl font-medium text-navy leading-relaxed mb-6">
                            "I was hesitant about the investment, but <span className="text-emerald-600 font-semibold">NetPiedev's SEO strategy paid for the entire website in 3 months</span>. They aren't just developers; they are my growth partners who understand business metrics."
                        </h3>
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                                RK
                            </div>
<div>
<div className="font-semibold text-navy">Rahul Kapoor</div>
<div className="text-sm text-slate-500">CEO, UrbanKart India</div>
</div>
</div>
</div>
<div className="order-1 md:order-2 relative">
<div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden relative flex items-center justify-center">
<i className="w-20 h-20 text-emerald-600 cursor-pointer hover:scale-110 transition-transform" data-lucide="play-circle" style={{strokeWidth: '1.5'}}></i>
<div className="absolute inset-0 bg-navy/5"></div>
</div>
<div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white rounded-xl shadow-xl flex items-center justify-center border border-slate-100">
<i className="w-6 h-6 text-emerald-600" data-lucide="quote" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-warm" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
<h2 className="text-2xl lg:text-4xl font-bold tracking-tight text-navy mt-2">Full-Stack Growth Services</h2>
<p className="text-slate-600 mt-4 max-w-2xl mx-auto">We don't sell software. We sell Sales, Efficiency, and Market Dominance.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-blue-600" data-lucide="globe" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-semibold text-navy mb-3">Web Development</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">Lightning-fast, SEO-optimized websites built for conversions. Next.js &amp; React expertise.</p>
<a className="text-emerald-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#">
                        Learn more <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
<div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-purple-600" data-lucide="smartphone" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-semibold text-navy mb-3">App Development</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">iOS &amp; Android apps with native performance. React Native &amp; Flutter specialists.</p>
<a className="text-emerald-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#">
                        Learn more <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
<div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-emerald-600" data-lucide="trending-up" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-semibold text-navy mb-3">SEO &amp; Growth</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">Technical SEO and content strategy that drives organic traffic and rankings.</p>
<a className="text-emerald-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#">
                        Learn more <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
<div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 rounded-xl bg-pink-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-pink-600" data-lucide="palette" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-semibold text-navy mb-3">UI/UX Design</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">Psychology-driven design that converts visitors into customers. Figma experts.</p>
<a className="text-emerald-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#">
                        Learn more <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
<div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-orange-600" data-lucide="database" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-semibold text-navy mb-3">Backend &amp; API</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">Robust, scalable infrastructure that grows with your business. Node.js &amp; Python.</p>
<a className="text-emerald-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#">
                        Learn more <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
<div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 rounded-xl bg-cyan-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-cyan-600" data-lucide="headphones" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-semibold text-navy mb-3">Support &amp; Maintenance</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">24/7 monitoring and continuous optimization for peak performance.</p>
<a className="text-emerald-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#">
                        Learn more <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-navy relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-blue-600/20"></div>
<div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-6">
<span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Let's Talk Growth</span>
</div>
<h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                Ready to Build Something<br/><span className="text-emerald-400">Extraordinary?</span>
</h2>
<p className="text-base lg:text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                Join 50+ companies who transformed their digital presence with NetPiedev. Your success story starts with a conversation. <strong className="text-white">No obligation, just insights.</strong>
</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-base font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-emerald-500/30" href="#">
<i className="w-5 h-5" data-lucide="calendar" style={{strokeWidth: '1.5'}}></i>
                    Schedule Your Free Strategy Call
                </a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-xl text-base font-semibold hover:bg-white/10 transition-all" href="mailto:hello@netpiedev.com">
<i className="w-5 h-5" data-lucide="mail" style={{strokeWidth: '1.5'}}></i>
                    hello@netpiedev.com
                </a>
</div>
</div>
</section>

<footer className="py-12 bg-white border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
<span className="text-white font-bold tracking-tighter">N</span>
</div>
<span className="text-base font-semibold text-navy">NetPiedev</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-4">Your Business Growth Partner. We don't sell software; we sell Sales, Efficiency, and Market Dominance.</p>
<div className="flex gap-3">
<a className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-emerald-100 transition-colors" href="#">
<i className="w-4 h-4 text-slate-600" data-lucide="twitter" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-emerald-100 transition-colors" href="#">
<i className="w-4 h-4 text-slate-600" data-lucide="linkedin" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-emerald-100 transition-colors" href="#">
<i className="w-4 h-4 text-slate-600" data-lucide="instagram" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-navy mb-4">Services</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-600 hover:text-emerald-600 transition-colors" href="#">Web Development</a></li>
<li><a className="text-sm text-slate-600 hover:text-emerald-600 transition-colors" href="#">App Development</a></li>
<li><a className="text-sm text-slate-600 hover:text-emerald-600 transition-colors" href="#">UI/UX Design</a></li>
<li><a className="text-sm text-slate-600 hover:text-emerald-600 transition-colors" href="#">SEO &amp; Growth</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-navy mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-600 hover:text-emerald-600 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-slate-600 hover:text-emerald-600 transition-colors" href="#portfolio">Portfolio</a></li>
<li><a className="text-sm text-slate-600 hover:text-emerald-600 transition-colors" href="#process">Our Process</a></li>
<li><a className="text-sm text-slate-600 hover:text-emerald-600 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-navy mb-4">Ready to Grow?</h4>
<p className="text-sm text-slate-600 mb-4">Let's discuss how we can help scale your business.</p>
<a className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-500 transition-all" href="#contact">
<i className="w-4 h-4" data-lucide="message-circle" style={{strokeWidth: '1.5'}}></i>
                        Let's Talk
                    </a>
</div>
</div>
<div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-500">© 2025 NetPiedev. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-sm text-slate-500 hover:text-emerald-600 transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-slate-500 hover:text-emerald-600 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
