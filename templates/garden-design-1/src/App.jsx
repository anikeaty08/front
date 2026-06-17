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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-stone-200/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">

<div className="w-6 h-6 bg-stone-900 text-stone-50 flex items-center justify-center rounded-md group-hover:bg-green-900 transition-colors duration-500">
<span className="iconify" data-height="14" data-icon="lucide:leaf" data-width="14" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-sm font-semibold tracking-widest uppercase text-stone-900">Shagari</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#services">Services</a>
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#projects">Portfolio</a>
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#process">Process</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900" href="#contact">
                Enquire
            </a>

<button className="md:hidden text-stone-500">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-stone-200">

<div className="absolute inset-0 z-0 select-none pointer-events-none">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

<div className="absolute top-[-10%] left-1/4 w-[600px] h-[600px] bg-green-200/20 rounded-full blur-[100px] animate-float"></div>
<div className="absolute top-[10%] right-1/4 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[80px] animate-float" style={{animationDelay: '-2s'}}></div>

<svg className="absolute top-0 left-0 w-full h-full opacity-20" preserveaspectratio="none">
<path d="M0,100 C300,150 600,50 900,120 S1400,80 1600,100" fill="none" stroke="url(#grad1)" strokeWidth="1"></path>
<path d="M0,300 C400,280 800,350 1200,300 S1600,320 1800,300" fill="none" stroke="url(#grad1)" strokeWidth="1" style={{opacity: '0.5'}}></path>
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#78716c', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#10b981', stopOpacity: '0.5'}}></stop>
<stop offset="100%" style={{stopColor: '#78716c', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="max-w-6xl mx-auto px-6 relative z-10 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm border border-stone-200 shadow-sm mb-8 animate-fade-in opacity-0">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-stone-600 tracking-tight">AI-Assisted Landscape Planning</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-stone-900 mb-6 max-w-4xl mx-auto animate-fade-in delay-100 opacity-0 leading-[1.1]">
                Precision design. <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-500 to-green-800">Intelligent management.</span>
</h1>
<p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in delay-200 opacity-0">
                Shagari bridges the gap between organic beauty and structural control. We design living systems and manage them with architectural precision.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in delay-300 opacity-0">
<a className="w-full md:w-auto px-8 py-3 bg-stone-900 text-white text-sm font-medium rounded-full hover:bg-green-900 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-stone-900/20" href="#projects">
                    Explore Projects
                    <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-full md:w-auto px-8 py-3 bg-white/80 backdrop-blur-sm border border-stone-200 text-stone-700 text-sm font-medium rounded-full hover:bg-stone-50 hover:border-stone-300 transition-all duration-300" href="#services">
                    Management Plans
                </a>
</div>
</div>

<div className="mt-16 md:mt-24 max-w-6xl mx-auto px-4 md:px-6 animate-fade-in delay-300 opacity-0">
<div className="relative bg-white p-2 rounded-2xl shadow-2xl shadow-stone-300/50 border border-stone-200/60 backdrop-blur-sm">

<div className="absolute top-0 left-0 right-0 h-12 flex items-center px-4 gap-2 z-20 border-b border-white/10">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-stone-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-stone-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-stone-300"></div>
</div>
<div className="ml-4 px-3 py-1 bg-white/90 rounded-full text-[10px] font-mono text-stone-500 border border-stone-200 shadow-sm flex items-center gap-2">
<span className="iconify text-green-500" data-icon="lucide:scan-line" data-width="12"></span>
                        PROJECT_SCAN_V2.0
                    </div>
</div>

<div className="relative rounded-xl overflow-hidden aspect-[16/9] md:aspect-[21/9]">
<img alt="Oxfordshire Garden Design" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>

<div className="absolute top-1/3 left-1/4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-stone-200 shadow-lg flex items-center gap-2 animate-bounce" style={{animationDuration: '3s'}}>
<span className="h-2 w-2 bg-green-500 rounded-full"></span>
<div className="text-[10px] leading-tight">
<span className="block font-semibold text-stone-800">Soil Moisture</span>
<span className="block text-stone-500">Optimal (45%)</span>
</div>
</div>
<div className="absolute bottom-1/3 right-1/4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-stone-200 shadow-lg flex items-center gap-2 animate-bounce" style={{animationDuration: '4s'}}>
<span className="h-2 w-2 bg-stone-800 rounded-full"></span>
<div className="text-[10px] leading-tight">
<span className="block font-semibold text-stone-800">Zone B</span>
<span className="block text-stone-500">Hardscaping Complete</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-stone-100" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-4">Holistic Landscape Services</h2>
<p className="text-stone-500 max-w-md text-sm leading-relaxed">From initial topography analysis to the final planting of native species, we handle every detail of your outdoor transformation.</p>
</div>
<a className="text-sm font-medium text-stone-900 border-b border-stone-300 pb-0.5 hover:border-stone-900 transition-colors" href="#">Download Brochure</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-stone-50 hover:bg-white border border-stone-100 hover:border-stone-200 transition-all duration-300 hover:shadow-lg hover:shadow-stone-100/50">
<div className="w-10 h-10 bg-white rounded-lg border border-stone-200 flex items-center justify-center mb-6 group-hover:border-green-200 transition-colors">
<span className="iconify text-stone-700 group-hover:text-green-700" data-icon="lucide:pen-tool" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Garden Design</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6">Conceptual drawings, 3D modelling, and planting plans tailored to the Oxfordshire vernacular.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-stone-600">
<span className="iconify text-green-600" data-icon="lucide:check" data-width="12"></span> Site Analysis
                        </li>
<li className="flex items-center gap-2 text-xs text-stone-600">
<span className="iconify text-green-600" data-icon="lucide:check" data-width="12"></span> 3D Visualization
                        </li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-stone-50 hover:bg-white border border-stone-100 hover:border-stone-200 transition-all duration-300 hover:shadow-lg hover:shadow-stone-100/50">
<div className="w-10 h-10 bg-white rounded-lg border border-stone-200 flex items-center justify-center mb-6 group-hover:border-green-200 transition-colors">
<span className="iconify text-stone-700 group-hover:text-green-700" data-icon="lucide:hammer" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Hard Landscaping</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6">Structuring space with local Cotswold stone, bespoke timber joinery, and architectural water features.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-stone-600">
<span className="iconify text-green-600" data-icon="lucide:check" data-width="12"></span> Patios &amp; Terraces
                        </li>
<li className="flex items-center gap-2 text-xs text-stone-600">
<span className="iconify text-green-600" data-icon="lucide:check" data-width="12"></span> Retaining Walls
                        </li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-stone-50 hover:bg-white border border-stone-100 hover:border-stone-200 transition-all duration-300 hover:shadow-lg hover:shadow-stone-100/50">
<div className="w-10 h-10 bg-white rounded-lg border border-stone-200 flex items-center justify-center mb-6 group-hover:border-green-200 transition-colors">
<span className="iconify text-stone-700 group-hover:text-green-700" data-icon="lucide:sprout" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Planting &amp; Care</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6">Curated planting schemes that evolve with the seasons, plus ongoing maintenance packages.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-stone-600">
<span className="iconify text-green-600" data-icon="lucide:check" data-width="12"></span> Seasonal Pruning
                        </li>
<li className="flex items-center gap-2 text-xs text-stone-600">
<span className="iconify text-green-600" data-icon="lucide:check" data-width="12"></span> Soil Health
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24" id="projects">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-12">Selected Works</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 relative group rounded-2xl overflow-hidden bg-stone-200 cursor-pointer">
<img alt="Manor House Garden" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/60 to-transparent">
<div className="flex justify-between items-end">
<div>
<p className="text-stone-300 text-xs font-medium tracking-wider uppercase mb-1">Woodstock, Oxfordshire</p>
<h3 className="text-white text-2xl font-medium tracking-tight">The Manor Walled Garden</h3>
</div>
<div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
<span className="iconify text-white" data-icon="lucide:arrow-up-right" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
</div>

<div className="relative group rounded-2xl overflow-hidden bg-stone-200 cursor-pointer">
<img alt="Modern Courtyard" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&amp;w=2835&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/60 to-transparent">
<p className="text-stone-300 text-xs font-medium tracking-wider uppercase mb-1">Jericho, Oxford</p>
<h3 className="text-white text-lg font-medium tracking-tight">Urban Sanctuary</h3>
</div>
</div>

<div className="relative group rounded-2xl overflow-hidden bg-stone-200 cursor-pointer">
<img alt="Cotswold Stone Path" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/60 to-transparent">
<p className="text-stone-300 text-xs font-medium tracking-wider uppercase mb-1">Burford</p>
<h3 className="text-white text-lg font-medium tracking-tight">Riverside Terrace</h3>
</div>
</div>
</div>
<div className="mt-8 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#">
                    View full portfolio
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</section>

<section className="border-y border-stone-200 bg-white">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-100">
<div className="py-12 px-4 text-center">
<span className="block text-3xl font-semibold text-stone-900 tracking-tight mb-1">10+</span>
<span className="text-xs text-stone-500 font-medium uppercase tracking-wide">Years Experience</span>
</div>
<div className="py-12 px-4 text-center">
<span className="block text-3xl font-semibold text-stone-900 tracking-tight mb-1">45</span>
<span className="text-xs text-stone-500 font-medium uppercase tracking-wide">Projects Completed</span>
</div>
<div className="py-12 px-4 text-center">
<span className="block text-3xl font-semibold text-stone-900 tracking-tight mb-1">100%</span>
<span className="text-xs text-stone-500 font-medium uppercase tracking-wide">Client Satisfaction</span>
</div>
<div className="py-12 px-4 text-center">
<span className="block text-3xl font-semibold text-stone-900 tracking-tight mb-1">RHS</span>
<span className="text-xs text-stone-500 font-medium uppercase tracking-wide">Award Winners</span>
</div>
</div>
</section>

<section className="py-32 bg-stone-50">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="mb-8">
<span className="iconify mx-auto text-green-700 opacity-20" data-icon="lucide:quote" data-width="48" style={{strokeWidth: '1.5'}}></span>
</div>
<blockquote className="text-2xl md:text-3xl font-medium tracking-tight text-stone-900 leading-normal mb-8">
                "Shagari didn't just design a garden; they created a living extension of our home. The attention to the local Oxfordshire ecology while maintaining a modern aesthetic is unparalleled."
            </blockquote>
<div className="flex items-center justify-center gap-4">
<div className="h-10 w-10 bg-stone-300 rounded-full overflow-hidden">
<img alt="Client" className="object-cover h-full w-full grayscale opacity-80" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<cite className="not-italic block text-sm font-semibold text-stone-900">James Thornton</cite>
<span className="text-xs text-stone-500">Chipping Norton, Oxfordshire</span>
</div>
</div>
</div>
</section>

<section className="bg-stone-900 text-stone-300 py-24 rounded-t-[2.5rem] mt-12" id="contact">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

<div>
<div className="flex items-center gap-2 mb-8 text-white">
<span className="iconify" data-height="20" data-icon="lucide:leaf" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-lg font-semibold tracking-widest uppercase">Shagari</span>
</div>
<h2 className="text-4xl font-medium text-white tracking-tight mb-6">Let's cultivate your vision.</h2>
<p className="text-stone-400 max-w-sm mb-8 leading-relaxed">
                        Ready to transform your outdoor space? Reach out for a consultation. Serving Oxford and the surrounding Cotswolds area.
                    </p>
<div className="space-y-4 text-sm">
<a className="flex items-center gap-3 hover:text-white transition-colors" href="mailto:hello@shagari.co.uk">
<span className="iconify text-stone-500" data-icon="lucide:mail" data-width="18" style={{strokeWidth: '1.5'}}></span>
                            hello@shagari.co.uk
                        </a>
<a className="flex items-center gap-3 hover:text-white transition-colors" href="tel:+441865123456">
<span className="iconify text-stone-500" data-icon="lucide:phone" data-width="18" style={{strokeWidth: '1.5'}}></span>
                            +44 (0) 1865 123 456
                        </a>
<div className="flex items-center gap-3">
<span className="iconify text-stone-500" data-icon="lucide:map-pin" data-width="18" style={{strokeWidth: '1.5'}}></span>
                            Summertown, Oxford, OX2
                        </div>
</div>
</div>

<div className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700/50">
<form action="#" className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-stone-400" htmlFor="name">Name</label>
<input className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-all placeholder:text-stone-700" id="name" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-400" htmlFor="email">Email</label>
<input className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-all placeholder:text-stone-700" id="email" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-400" htmlFor="interest">Service of Interest</label>
<div className="relative">
<select className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 appearance-none cursor-pointer" id="interest">
<option>Full Garden Design</option>
<option>Hard Landscaping</option>
<option>Planting Scheme</option>
<option>Maintenance</option>
</select>
<div className="absolute right-3 top-2.5 pointer-events-none text-stone-500">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-400" htmlFor="message">Message</label>
<textarea className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-all placeholder:text-stone-700" id="message" placeholder="Tell us about your garden..." rows="3"></textarea>
</div>
<button className="w-full bg-white text-stone-900 font-medium py-2.5 rounded-lg hover:bg-stone-200 transition-colors text-sm mt-2" type="submit">
                            Send Enquiry
                        </button>
</form>
</div>
</div>
<div className="border-t border-stone-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500">
<p>© 2024 Shagari Gardens Ltd. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-stone-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-stone-300 transition-colors" href="#">Terms</a>
<a className="hover:text-stone-300 transition-colors" href="#">Instagram</a>
</div>
</div>
</div>
</section>

    </>
  );
}
