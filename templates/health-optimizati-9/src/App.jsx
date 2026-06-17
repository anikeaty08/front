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



        lucide.createIcons({
            strokeWidth: 1.5
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
      

<nav className="absolute top-0 w-full z-50 px-6 py-6 lg:px-12 flex justify-between items-center">
<a className="font-serif font-semibold text-xl tracking-tight text-slate-900 uppercase" href="#">Renoja Core</a>
<div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#">Medical Weight Loss</a>
<a className="hover:text-slate-900 transition-colors" href="#">Hormone Optimization</a>
<a className="hover:text-slate-900 transition-colors" href="#">Advanced Optimization</a>
<a className="hover:text-slate-900 transition-colors" href="#">About</a>
</div>
<div className="flex items-center space-x-6">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Log in</a>
<a className="bg-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors shadow-sm" href="#">Get Started</a>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white">
<div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
<div className="max-w-xl">
<div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full px-3 py-1 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wider">Now accepting new patients</span>
</div>
<h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 leading-[1.1] tracking-tight mb-6">
                    Feel Like <br/>
<span className="text-blue-600">Yourself</span> <br/>
                    Again.
                </h1>
<p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-light">
                    Personalized health optimization using advanced testing, expert care, and targeted treatments — all from home.
                </p>
<div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
<a className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-blue-700 transition-colors text-center shadow-md flex items-center justify-center space-x-2" href="#">
<span>Get Started</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto text-slate-600 px-6 py-3.5 text-base font-medium hover:text-slate-900 transition-colors text-center flex items-center justify-center space-x-2" href="#">
<i className="w-5 h-5 text-slate-400" data-lucide="play-circle"></i>
<span>Browse Services</span>
</a>
</div>
<div className="grid grid-cols-3 gap-8 border-t border-slate-200 pt-8">
<div>
<p className="text-3xl font-serif font-semibold text-slate-900 tracking-tight">3000+</p>
<p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Patients Served</p>
</div>
<div>
<p className="text-3xl font-serif font-semibold text-slate-900 tracking-tight">15+</p>
<p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Providers Online</p>
</div>
<div>
<p className="text-3xl font-serif font-semibold text-slate-900 tracking-tight">98%</p>
<p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Satisfaction Rate</p>
</div>
</div>
</div>
<div className="relative hidden lg:block h-[600px] w-full">

<div className="absolute inset-0 flex justify-center items-end pb-12">
<img alt="Professional Woman" className="h-full object-contain object-bottom drop-shadow-2xl z-10" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" style={{maskImage: 'linear-gradient(to top, transparent 0%, black 10%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 10%)'}}/>
</div>

<div className="absolute top-12 right-24 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 flex items-center space-x-4 z-20 animate-[bounce_4s_infinite_alternate]">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<div>
<p className="text-lg font-semibold text-slate-900 tracking-tight leading-none mb-1">2000+</p>
<p className="text-xs text-slate-500">Patients Served</p>
</div>
</div>

<div className="absolute top-1/3 left-0 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 flex items-center space-x-4 z-20 animate-[bounce_5s_infinite_alternate_reverse]">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
</div>
<div>
<p className="text-lg font-semibold text-slate-900 tracking-tight leading-none mb-1">98%</p>
<p className="text-xs text-slate-500">Success Rate</p>
</div>
</div>

<div className="absolute bottom-32 right-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 flex items-center space-x-4 z-20 animate-[bounce_6s_infinite_alternate]">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
<i className="w-5 h-5" data-lucide="flask-conical"></i>
</div>
<div>
<p className="text-lg font-semibold text-slate-900 tracking-tight leading-none mb-1">Advanced</p>
<p className="text-xs text-slate-500">Lab Testing</p>
</div>
</div>
</div>
</div>
</header>

<section className="bg-slate-950 py-24">
<div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
<a className="group block bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:bg-slate-800/80 transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-slate-300">
<i data-lucide="activity"></i>
</div>
<h3 className="font-serif text-2xl font-semibold text-white tracking-tight mb-4">Medical Weight Loss</h3>
<p className="text-base text-slate-400 font-light leading-relaxed mb-8">
                    A strategic approach using GLP-1 medications combined with nutritional guidance to achieve sustainable weight loss goals.
                </p>
<div className="flex items-center text-sm font-medium text-teal-500 group-hover:text-teal-400 transition-colors">
<span>Explore</span>
<i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</div>
</a>
<a className="group block bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:bg-slate-800/80 transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-slate-300">
<i data-lucide="droplets"></i>
</div>
<h3 className="font-serif text-2xl font-semibold text-white tracking-tight mb-4">Hormone Optimization</h3>
<p className="text-base text-slate-400 font-light leading-relaxed mb-8">
                    Comprehensive testing and personalized protocols to restore balance, energy, mental clarity, and overall function.
                </p>
<div className="flex items-center text-sm font-medium text-teal-500 group-hover:text-teal-400 transition-colors">
<span>Explore</span>
<i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</div>
</a>
<a className="group block bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:bg-slate-800/80 transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-slate-300">
<i data-lucide="zap"></i>
</div>
<h3 className="font-serif text-2xl font-semibold text-white tracking-tight mb-4">Advanced Optimization</h3>
<p className="text-base text-slate-400 font-light leading-relaxed mb-8">
                    Cutting-edge peptide therapies targeting cognitive function, physical recovery, longevity, and peak human performance.
                </p>
<div className="flex items-center text-sm font-medium text-teal-500 group-hover:text-teal-400 transition-colors">
<span>Explore</span>
<i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</div>
</a>
</div>
</section>

<section className="py-24 lg:py-32 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<p className="text-xs font-semibold text-teal-600 tracking-widest uppercase mb-4">Medical Weight Loss</p>
<h2 className="font-serif text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                    A Smarter Approach to Fat Loss
                </h2>
<p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                    Struggling to lose weight no matter what you try? We utilize modern medicine to address the root causes and repair metabolic function.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start text-base text-slate-700">
<div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mr-3 mt-0.5">
<i className="w-3.5 h-3.5 text-teal-600" data-lucide="check"></i>
</div>
<span className="font-light">GLP-1 medication strategies</span>
</li>
<li className="flex items-start text-base text-slate-700">
<div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mr-3 mt-0.5">
<i className="w-3.5 h-3.5 text-teal-600" data-lucide="check"></i>
</div>
<span className="font-light">Focus on muscle preservation</span>
</li>
<li className="flex items-start text-base text-slate-700">
<div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mr-3 mt-0.5">
<i className="w-3.5 h-3.5 text-teal-600" data-lucide="check"></i>
</div>
<span className="font-light">Personalized nutrition protocols</span>
</li>
<li className="flex items-start text-base text-slate-700">
<div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mr-3 mt-0.5">
<i className="w-3.5 h-3.5 text-teal-600" data-lucide="check"></i>
</div>
<span className="font-light">Ongoing physician adjustments</span>
</li>
</ul>
<a className="inline-flex bg-slate-900 text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-slate-800 transition-colors shadow-sm" href="#">
                    Learn More
                </a>
</div>
<div className="order-1 lg:order-2 relative">
<div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
<img alt="Woman smiling in field" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent mix-blend-overlay"></div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-950">
<div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
<img alt="Man in suit looking out window" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
</div>
</div>
<div>
<p className="text-xs font-semibold text-teal-500 tracking-widest uppercase mb-4">Hormone Optimization</p>
<h2 className="font-serif text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                    Restore Balance.<br/>Restore Function.
                </h2>
<p className="text-lg text-slate-400 font-light leading-relaxed mb-8">
                    Low energy? Brain fog? Not feeling like yourself? We look deeper than standard panels to find the root cause.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start text-base text-slate-300">
<div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0 mr-3 mt-0.5">
<i className="w-3.5 h-3.5 text-teal-500" data-lucide="check"></i>
</div>
<span className="font-light">Comprehensive blood panel testing</span>
</li>
<li className="flex items-start text-base text-slate-300">
<div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0 mr-3 mt-0.5">
<i className="w-3.5 h-3.5 text-teal-500" data-lucide="check"></i>
</div>
<span className="font-light">Bio-identical hormone protocols</span>
</li>
<li className="flex items-start text-base text-slate-300">
<div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0 mr-3 mt-0.5">
<i className="w-3.5 h-3.5 text-teal-500" data-lucide="check"></i>
</div>
<span className="font-light">Treatments designed for your unique physiology</span>
</li>
<li className="flex items-start text-base text-slate-300">
<div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0 mr-3 mt-0.5">
<i className="w-3.5 h-3.5 text-teal-500" data-lucide="check"></i>
</div>
<span className="font-light">Continuous adjustments for optimal results</span>
</li>
</ul>
<a className="inline-flex bg-teal-600 text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-teal-500 transition-colors shadow-sm" href="#">
                    Optimize Hormones
                </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 border-t border-slate-900">
<div className="max-w-4xl mx-auto px-6 lg:px-12">
<div className="mb-16">
<p className="text-xs font-semibold text-teal-500 tracking-widest uppercase mb-4">Advanced Therapies</p>
<h2 className="font-serif text-4xl md:text-5xl font-semibold text-white tracking-tight">
                    Your Body Is Capable of More
                </h2>
</div>
<div className="space-y-0 border-t border-slate-800">
<a className="group flex items-center justify-between py-8 border-b border-slate-800 hover:bg-slate-900/50 transition-colors px-4 -mx-4 rounded-xl" href="#">
<div className="flex items-center space-x-8 md:space-x-16">
<span className="text-sm font-medium text-slate-600 font-mono">01</span>
<h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-200 group-hover:text-white transition-colors tracking-tight">Repair &amp; Recovery</h3>
</div>
<div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center group-hover:bg-teal-600 group-hover:border-teal-600 group-hover:text-white text-slate-500 transition-all duration-300">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</a>
<a className="group flex items-center justify-between py-8 border-b border-slate-800 hover:bg-slate-900/50 transition-colors px-4 -mx-4 rounded-xl" href="#">
<div className="flex items-center space-x-8 md:space-x-16">
<span className="text-sm font-medium text-slate-600 font-mono">02</span>
<h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-200 group-hover:text-white transition-colors tracking-tight">Cognitive Optimization</h3>
</div>
<div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center group-hover:bg-teal-600 group-hover:border-teal-600 group-hover:text-white text-slate-500 transition-all duration-300">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</a>
<a className="group flex items-center justify-between py-8 border-b border-slate-800 hover:bg-slate-900/50 transition-colors px-4 -mx-4 rounded-xl" href="#">
<div className="flex items-center space-x-8 md:space-x-16">
<span className="text-sm font-medium text-slate-600 font-mono">03</span>
<h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-200 group-hover:text-white transition-colors tracking-tight">Muscle &amp; Strength</h3>
</div>
<div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center group-hover:bg-teal-600 group-hover:border-teal-600 group-hover:text-white text-slate-500 transition-all duration-300">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</a>
<a className="group flex items-center justify-between py-8 border-b border-slate-800 hover:bg-slate-900/50 transition-colors px-4 -mx-4 rounded-xl" href="#">
<div className="flex items-center space-x-8 md:space-x-16">
<span className="text-sm font-medium text-slate-600 font-mono">04</span>
<h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-200 group-hover:text-white transition-colors tracking-tight">Skin &amp; Aging</h3>
</div>
<div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center group-hover:bg-teal-600 group-hover:border-teal-600 group-hover:text-white text-slate-500 transition-all duration-300">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</a>
<a className="group flex items-center justify-between py-8 hover:bg-slate-900/50 transition-colors px-4 -mx-4 rounded-xl" href="#">
<div className="flex items-center space-x-8 md:space-x-16">
<span className="text-sm font-medium text-slate-600 font-mono">05</span>
<h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-200 group-hover:text-white transition-colors tracking-tight">Sexual Health</h3>
</div>
<div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center group-hover:bg-teal-600 group-hover:border-teal-600 group-hover:text-white text-slate-500 transition-all duration-300">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<h2 className="font-serif text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-16">
                The Process
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
<div className="relative pt-6">
<div className="absolute top-0 left-0 w-full h-px bg-slate-200"></div>
<div className="absolute top-0 left-0 w-1/4 h-px bg-teal-600"></div>
<p className="font-serif text-4xl font-semibold text-teal-600/30 mb-4 tracking-tight">01</p>
<h4 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Assessment</h4>
<p className="text-base text-slate-600 font-light leading-relaxed">
                        Complete a comprehensive online medical history form to give us a clear picture.
                    </p>
</div>
<div className="relative pt-6">
<div className="absolute top-0 left-0 w-full h-px bg-slate-200"></div>
<p className="font-serif text-4xl font-semibold text-teal-600/30 mb-4 tracking-tight">02</p>
<h4 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Testing</h4>
<p className="text-base text-slate-600 font-light leading-relaxed">
                        Receive an advanced lab order sent directly to a local clinic near you.
                    </p>
</div>
<div className="relative pt-6">
<div className="absolute top-0 left-0 w-full h-px bg-slate-200"></div>
<p className="font-serif text-4xl font-semibold text-teal-600/30 mb-4 tracking-tight">03</p>
<h4 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Consultation</h4>
<p className="text-base text-slate-600 font-light leading-relaxed">
                        Review your results in detail with our specialized medical providers.
                    </p>
</div>
<div className="relative pt-6">
<div className="absolute top-0 left-0 w-full h-px bg-slate-200"></div>
<p className="font-serif text-4xl font-semibold text-teal-600/30 mb-4 tracking-tight">04</p>
<h4 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Protocol</h4>
<p className="text-base text-slate-600 font-light leading-relaxed">
                        Receive your personalized protocol delivered directly to your door.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-center">
<div className="max-w-4xl mx-auto px-6 lg:px-12">
<h2 className="font-serif text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12">
                What You Can Expect
            </h2>
<div className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-base md:text-lg font-light text-slate-300">
<div className="flex items-center space-x-6">
<span className="w-8 h-px bg-slate-700"></span>
<span>Sustained Energy</span>
</div>
<div className="flex items-center space-x-6">
<span className="w-8 h-px bg-slate-700"></span>
<span>Fat Loss</span>
</div>
<div className="flex items-center space-x-6">
<span className="w-8 h-px bg-slate-700"></span>
<span>Muscle Retention</span>
<span className="hidden md:block w-8 h-px bg-slate-700"></span>
</div>
<div className="w-full h-0"></div> 
<div className="flex items-center space-x-6">
<span className="w-8 h-px bg-slate-700"></span>
<span>Mental Clarity</span>
</div>
<div className="flex items-center space-x-6">
<span className="w-8 h-px bg-slate-700"></span>
<span>Rapid Recovery</span>
</div>
<div className="flex items-center space-x-6">
<span className="w-8 h-px bg-slate-700"></span>
<span>Biological Optimization</span>
<span className="w-8 h-px bg-slate-700"></span>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden">

<div className="absolute inset-0">
<img alt="Modern interior architecture" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
<h2 className="font-serif text-5xl md:text-6xl font-semibold text-white tracking-tight mb-10 leading-tight">
                Start Feeling Better.
            </h2>
<a className="bg-teal-600 text-white px-10 py-4 rounded-full text-base font-medium hover:bg-teal-500 transition-colors shadow-lg mb-6" href="#">
                Begin Your Journey
            </a>
<p className="text-xs font-semibold text-slate-400 tracking-widest uppercase">
                Private. Personalized. Built for you.
            </p>
</div>
</section>

<footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
<div className="lg:col-span-2">
<a className="font-serif font-semibold text-xl tracking-tight text-white uppercase inline-block mb-6" href="#">Renoja Core</a>
<p className="text-base text-slate-400 font-light leading-relaxed mb-6 max-w-sm">
                        Personalized health optimization using advanced testing, expert care, and targeted treatments — all from home.
                    </p>
<p className="text-xs text-slate-500 tracking-wider uppercase">
                        San Juan • PR 00921 • US &amp; Territories Worldwide
                    </p>
</div>
<div>
<h5 className="text-sm font-semibold text-white mb-6">Services</h5>
<ul className="space-y-4">
<li><a className="text-base text-slate-400 hover:text-white transition-colors font-light" href="#">Medical Weight Loss</a></li>
<li><a className="text-base text-slate-400 hover:text-white transition-colors font-light" href="#">Hormone Optimization</a></li>
<li><a className="text-base text-slate-400 hover:text-white transition-colors font-light" href="#">Advanced Optimization</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold text-white mb-6">Company</h5>
<ul className="space-y-4">
<li><a className="text-base text-slate-400 hover:text-white transition-colors font-light" href="#">About Us</a></li>
<li><a className="text-base text-slate-400 hover:text-white transition-colors font-light" href="#">FAQ</a></li>
<li><a className="text-base text-slate-400 hover:text-white transition-colors font-light" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold text-white mb-6">Support</h5>
<ul className="space-y-4">
<li><a className="text-base text-slate-400 hover:text-white transition-colors font-light" href="mailto:support@renojacore.com">support@renojacore.com</a></li>
<li className="text-base text-slate-400 font-light">Mon-Fri, 9am - 5pm EST</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
<p className="text-sm text-slate-500 font-light">
                    © 2023 Renoja Core. All rights reserved.
                </p>
<div className="flex space-x-6 text-sm font-light">
<a className="text-slate-500 hover:text-slate-300 transition-colors" href="#">Privacy Policy</a>
<a className="text-slate-500 hover:text-slate-300 transition-colors" href="#">Terms &amp; Conditions</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
