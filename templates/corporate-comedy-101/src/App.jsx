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



        lucide.createIcons();
    
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-emerald-100 bg-[#F0Fdf4]/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center gap-2 group" href="#">

<img alt="Cliff Prang Logo" className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter hue-rotate-15 saturate-50" src="https://storage.googleapis.com/msgsndr/gSihvbvEreLHFuXMA96M/media/69290675571896646d754d8c.png"/>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<a className="text-white bg-emerald-900 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-md text-sm px-6 py-2.5 text-center transition-all duration-200 shadow-sm border border-transparent shadow-emerald-200 uppercase tracking-widest text-xs" href="#book">Execute Booking</a>
<button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-emerald-800 rounded-lg md:hidden hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-200" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<i className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-emerald-100 rounded-lg bg-emerald-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li>
<a className="block py-2 px-3 text-emerald-700 hover:text-emerald-950 md:p-0 transition-colors tracking-tight" href="#about">Personnel File</a>
</li>
<li>
<a className="block py-2 px-3 text-emerald-700 hover:text-emerald-950 md:p-0 transition-colors tracking-tight" href="#services">Capabilities</a>
</li>
<li>
<a className="block py-2 px-3 text-emerald-700 hover:text-emerald-950 md:p-0 transition-colors tracking-tight" href="#watch">Surveillance</a>
</li>
<li>
<a className="block py-2 px-3 text-emerald-700 hover:text-emerald-950 md:p-0 transition-colors tracking-tight" href="#testimonials">Affidavits</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F0Fdf4] bg-grid-corporate border-b border-emerald-100">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="fade-in-up z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-8 tracking-wide uppercase">
<i className="w-3 h-3 text-emerald-600" data-lucide="check-circle" strokeWidth="1.5"></i>
                    HR Approved Vendor #4922
                </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tighter text-emerald-950 mb-6 leading-[1.05]">
                    Mandatory Fun<br/>
<span className="text-emerald-600/60">Initiative.</span><br/>
                    Now Scheduling.
                </h1>
<p className="text-lg text-emerald-700/80 mb-10 max-w-lg leading-relaxed font-light">
                    Morale is currently at 64%. Corporate policy dictates the immediate deployment of Cliff Prang to increase laughter metrics without violating harassment policies.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-3 text-sm uppercase tracking-wider font-semibold text-white bg-emerald-900 rounded-md hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-200/50" href="#book">
                        Schedule Laughs
                        <i className="w-4 h-4 ml-2" data-lucide="file-check" strokeWidth="1.5"></i>
</a>
<a className="inline-flex items-center justify-center px-8 py-3 text-sm uppercase tracking-wider font-semibold text-emerald-800 bg-[#F0Fdf4] border border-emerald-200 rounded-md hover:bg-emerald-50 hover:border-emerald-300 transition-all" href="#watch">
<i className="w-4 h-4 mr-2" data-lucide="eye" strokeWidth="1.5"></i>
                        Review Evidence
                    </a>
</div>
</div>
<div className="relative lg:h-[600px] flex items-center justify-center lg:justify-end fade-in-up" style={{animationDelay: '0.2s'}}>

<div className="relative w-full max-w-md aspect-[4/5] rounded-sm overflow-hidden shadow-2xl bg-emerald-50 border-[8px] border-white shadow-emerald-900/10">
<img alt="Cliff Prang Headshot" className="w-full h-full object-cover filter contrast-[1.1] sepia-[0.1]" src="https://www.cliffprang.com/files/cache/bcaa79e84c58bb63441e8a9a94584b72_f320.jpeg"/>
</div>

<div className="absolute -z-10 top-20 right-20 w-72 h-72 bg-emerald-200/40 rounded-full blur-[100px]"></div>
<div className="absolute -z-10 bottom-10 left-10 w-64 h-64 bg-teal-200/40 rounded-full blur-[80px]"></div>
</div>
</div>
</section>

<section className="py-12 border-b border-emerald-100 bg-[#ecfdf5]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-bold tracking-[0.2em] text-emerald-500 uppercase mb-10">Agencies Complicit In Hiring Cliff</p>
<div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 mix-blend-multiply">
<span className="text-xl font-bold tracking-tight text-emerald-800">SUPERGIRL</span>
<span className="text-xl font-bold tracking-tight text-emerald-800">SUPERNATURAL</span>
<span className="text-xl font-bold tracking-tight text-emerald-800">ALASKA DAILY</span>
<span className="text-xl font-bold tracking-tight text-emerald-800">YUK YUKS</span>
<span className="text-xl font-bold tracking-tight text-emerald-800">JUST FOR LAUGHS</span>
<span className="text-xl font-bold tracking-tight text-emerald-800">CBC</span>
</div>
</div>
</section>

<section className="py-24 bg-[#F0Fdf4] relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-20 items-start">
<div className="relative group">

<div className="rounded-sm overflow-hidden bg-emerald-100 border border-emerald-200 shadow-xl group-hover:shadow-2xl transition-all duration-500">
<img alt="Cliff Speaking" className="w-full h-auto object-cover filter contrast-110 group-hover:contrast-125 transition-all duration-700" src="https://www.cliffprang.com/files/cache/fe751ecf25aa4fefb4aed486b32c9d8f_f274.jpg"/>
</div>
<div className="absolute -bottom-6 -right-6 bg-[#064e3b] p-6 rounded-sm shadow-lg border border-emerald-800 max-w-xs hidden lg:block">
<p className="text-sm text-emerald-100 italic font-mono border-l-2 border-emerald-500 pl-3">"Subject displays 98% compatibility with corporate environments. Hair is satisfactory."</p>
</div>
</div>
<div>
<h2 className="text-3xl font-medium tracking-tight text-emerald-950 mb-8">Subject Profile: Prang, Cliff</h2>
<div className="space-y-6 text-emerald-800/80 text-lg leading-relaxed font-light">
<p>
                            We have identified Cliff as a professional actor and comedian. He has been cleared for entry into your Annual General Meeting.
                        </p>
<p>
                            Analysis confirms appearances on <span className="text-emerald-950 font-semibold border-b border-emerald-300">Supergirl</span> and <span className="text-emerald-950 font-semibold border-b border-emerald-300">Supernatural</span>. While he often plays a "Jackass" on television, our legal team assures us he is insurable for live events.
                        </p>
<p>
<strong>Primary Directive:</strong> Prevent the audience from checking their emails during the awards ceremony.
                        </p>
</div>
<div className="mt-10 flex gap-6">
<a className="text-sm font-bold uppercase tracking-wider text-emerald-900 hover:text-emerald-600 flex items-center gap-1 group transition-colors" href="https://www.imdb.com/name/nm7603540/" target="_blank">
                            Inspect IMDb File
                            <i className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-lucide="arrow-up-right"></i>
</a>
<a className="text-sm font-bold uppercase tracking-wider text-emerald-900 hover:text-emerald-600 flex items-center gap-1 group transition-colors" href="https://www.veryveryimprov.ca/" target="_blank">
                            Verify Improv Credentials
                            <i className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#e6f7ef] border-y border-emerald-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight text-emerald-950">Operational Modalities</h2>
<p className="text-emerald-600 mt-2 text-lg">Select the appropriate entertainment output for your sector.</p>
</div>
<div className="h-px bg-emerald-200 flex-1 ml-8 hidden md:block mb-2"></div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#F0Fdf4] p-8 rounded-sm border border-emerald-200 hover:border-emerald-600 hover:shadow-lg hover:shadow-emerald-100 transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-emerald-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center mb-6 text-emerald-800 group-hover:bg-emerald-600 group-hover:text-white transition-colors border border-emerald-100 group-hover:border-transparent">
<i className="w-5 h-5" data-lucide="mic" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-bold text-emerald-900 mb-3">Stand-Up Comedy</h3>
<p className="text-sm text-emerald-700/70 mb-6 leading-relaxed">
                        Sanitized humor protocols. Guaranteed not to offend the CEO's spouse. Ideal for mitigating awkward silence during dinner.
                    </p>
<a className="text-xs font-bold text-emerald-900 flex items-center group-hover:text-emerald-600 tracking-wide uppercase transition-colors" href="#book">
                        Deploy Unit <i className="w-3 h-3 ml-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-[#F0Fdf4] p-8 rounded-sm border border-emerald-200 hover:border-emerald-600 hover:shadow-lg hover:shadow-emerald-100 transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-emerald-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center mb-6 text-emerald-800 group-hover:bg-emerald-600 group-hover:text-white transition-colors border border-emerald-100 group-hover:border-transparent">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-bold text-emerald-900 mb-3">Event Emcee</h3>
<p className="text-sm text-emerald-700/70 mb-6 leading-relaxed">
                        Why let the VP of Finance read the script? He's dry. Cliff is not. Seamless transitions to keep the agenda under 4 hours.
                    </p>
<a className="text-xs font-bold text-emerald-900 flex items-center group-hover:text-emerald-600 tracking-wide uppercase transition-colors" href="#book">
                        Deploy Unit <i className="w-3 h-3 ml-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-[#F0Fdf4] p-8 rounded-sm border border-emerald-200 hover:border-emerald-600 hover:shadow-lg hover:shadow-emerald-100 transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-emerald-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center mb-6 text-emerald-800 group-hover:bg-emerald-600 group-hover:text-white transition-colors border border-emerald-100 group-hover:border-transparent">
<i className="w-5 h-5" data-lucide="drama" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-bold text-emerald-900 mb-3">Improv Comedy</h3>
<p className="text-sm text-emerald-700/70 mb-6 leading-relaxed">
                        Managing Producer of Very Very Improv. We make things up. It's like your quarterly projections, but actually funny.
                    </p>
<a className="text-xs font-bold text-emerald-900 flex items-center group-hover:text-emerald-600 tracking-wide uppercase transition-colors" href="https://www.veryveryimprov.ca/" target="_blank">
                        External Audit <i className="w-3 h-3 ml-1" data-lucide="external-link" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-[#F0Fdf4] p-8 rounded-sm border border-emerald-200 hover:border-emerald-600 hover:shadow-lg hover:shadow-emerald-100 transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-emerald-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center mb-6 text-emerald-800 group-hover:bg-emerald-600 group-hover:text-white transition-colors border border-emerald-100 group-hover:border-transparent">
<i className="w-5 h-5" data-lucide="lightbulb" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-bold text-emerald-900 mb-3">Speaker/Workshops</h3>
<p className="text-sm text-emerald-700/70 mb-6 leading-relaxed">
                        "The Power of Looking STUPID". A workshop on vulnerability. Because your team building exercise needs less trust falls.
                    </p>
<a className="text-xs font-bold text-emerald-900 flex items-center group-hover:text-emerald-600 tracking-wide uppercase transition-colors" href="#book">
                        Deploy Unit <i className="w-3 h-3 ml-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#022c22] text-emerald-100 relative overflow-hidden" id="watch">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-emerald-800/50 pb-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white">Surveillance Footage</h2>
<p className="text-emerald-400 mt-2">Video evidence of successful humor execution.</p>
</div>
<a className="hidden md:flex items-center text-xs font-bold uppercase tracking-widest text-emerald-400 hover:text-white transition-colors mt-4 md:mt-0 bg-[#064e3b] px-5 py-3 rounded-sm border border-emerald-700 hover:border-emerald-500" href="https://www.youtube.com" target="_blank">
                    Access Archives <i className="w-4 h-4 ml-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative cursor-pointer">
<div className="aspect-video bg-black rounded-sm overflow-hidden border border-emerald-800 flex items-center justify-center group-hover:border-emerald-500 transition-all shadow-2xl">
<div className="w-16 h-16 rounded-full bg-emerald-900/80 backdrop-blur-md flex items-center justify-center group-hover:bg-emerald-600 group-hover:scale-110 transition-all border border-emerald-500/30">
<i className="w-6 h-6 text-white fill-current" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
<div className="mt-4 flex justify-between items-center border-t border-emerald-900 pt-3">
<p className="font-medium text-sm text-emerald-100">Exhibit A: Stand-Up</p>
<span className="text-xs text-emerald-600 font-mono">03:42</span>
</div>
</div>

<div className="group relative cursor-pointer">
<div className="aspect-video bg-black rounded-sm overflow-hidden border border-emerald-800 flex items-center justify-center group-hover:border-emerald-500 transition-all shadow-2xl">
<div className="w-16 h-16 rounded-full bg-emerald-900/80 backdrop-blur-md flex items-center justify-center group-hover:bg-emerald-600 group-hover:scale-110 transition-all border border-emerald-500/30">
<i className="w-6 h-6 text-white fill-current" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
<div className="mt-4 flex justify-between items-center border-t border-emerald-900 pt-3">
<p className="font-medium text-sm text-emerald-100">Exhibit B: Dramatic Acting</p>
<span className="text-xs text-emerald-600 font-mono">02:15</span>
</div>
</div>

<div className="group relative cursor-pointer">
<div className="aspect-video bg-black rounded-sm overflow-hidden border border-emerald-800 flex items-center justify-center group-hover:border-emerald-500 transition-all shadow-2xl">
<div className="w-16 h-16 rounded-full bg-emerald-900/80 backdrop-blur-md flex items-center justify-center group-hover:bg-emerald-600 group-hover:scale-110 transition-all border border-emerald-500/30">
<i className="w-6 h-6 text-white fill-current" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
<div className="mt-4 flex justify-between items-center border-t border-emerald-900 pt-3">
<p className="font-medium text-sm text-emerald-100">Exhibit C: Emcee Sizzle</p>
<span className="text-xs text-emerald-600 font-mono">01:58</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F0Fdf4] overflow-hidden border-b border-emerald-100" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center text-3xl font-medium tracking-tight text-emerald-950 mb-16">Sworn Affidavits</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="p-8 bg-white rounded-sm border border-emerald-100 relative group hover:border-emerald-400 transition-colors shadow-sm">
<div className="absolute top-0 left-0 w-1 h-full bg-emerald-200 rounded-l-sm group-hover:bg-emerald-600 transition-colors"></div>
<div className="flex text-emerald-200 mb-5 gap-1 group-hover:text-emerald-500 transition-colors">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-emerald-900 font-normal leading-relaxed mb-6">
                        "Cliff Prang is equal parts sweet and spicy. A rare anomaly in the data set: a clean comic who is actually funny."
                    </p>
<div className="flex items-center gap-3 border-t border-emerald-50 pt-4">
<div>
<p className="text-sm font-bold text-emerald-950">CBC Debaters</p>
<p className="text-xs text-emerald-500 uppercase tracking-wide">Official Audit</p>
</div>
</div>
</div>

<div className="p-8 bg-white rounded-sm border border-emerald-100 relative group hover:border-emerald-400 transition-colors shadow-sm">
<div className="absolute top-0 left-0 w-1 h-full bg-emerald-200 rounded-l-sm group-hover:bg-emerald-600 transition-colors"></div>
<div className="flex text-emerald-200 mb-5 gap-1 group-hover:text-emerald-500 transition-colors">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-emerald-900 font-normal leading-relaxed mb-6">
                        "I seriously cannot remember the last time that I laughed for twenty minutes straight. Facial muscle fatigue reported."
                    </p>
<div className="flex items-center gap-3 border-t border-emerald-50 pt-4">
<div>
<p className="text-sm font-bold text-emerald-950">Happy Family Movement</p>
<p className="text-xs text-emerald-500 uppercase tracking-wide">Kansas City Division</p>
</div>
</div>
</div>

<div className="p-8 bg-white rounded-sm border border-emerald-100 relative group hover:border-emerald-400 transition-colors shadow-sm">
<div className="absolute top-0 left-0 w-1 h-full bg-emerald-200 rounded-l-sm group-hover:bg-emerald-600 transition-colors"></div>
<div className="flex text-emerald-200 mb-5 gap-1 group-hover:text-emerald-500 transition-colors">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-emerald-900 font-normal leading-relaxed mb-6">
                        "Cliff is a gem! He's a regular headliner with us at Yuk Yuks. Productivity increases by 12% after his sets."
                    </p>
<div className="flex items-center gap-3 border-t border-emerald-50 pt-4">
<div>
<p className="text-sm font-bold text-emerald-950">Yuk Yuks</p>
<p className="text-xs text-emerald-500 uppercase tracking-wide">Comedy Sector</p>
</div>
</div>
</div>

<div className="p-8 bg-white rounded-sm border border-emerald-100 relative group hover:border-emerald-400 transition-colors shadow-sm">
<div className="absolute top-0 left-0 w-1 h-full bg-emerald-200 rounded-l-sm group-hover:bg-emerald-600 transition-colors"></div>
<div className="flex text-emerald-200 mb-5 gap-1 group-hover:text-emerald-500 transition-colors">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-emerald-900 font-normal leading-relaxed mb-6">
                        "In between nearly peeing my pants and spitting my coffee, I realized I was listening to quality comedy. Cleanup on aisle 4."
                    </p>
<div className="flex items-center gap-3 border-t border-emerald-50 pt-4">
<div>
<p className="text-sm font-bold text-emerald-950">Audience Member</p>
<p className="text-xs text-emerald-500 uppercase tracking-wide">Vancouver Island</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#064e3b] text-emerald-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium tracking-tight mb-8 text-white">Scheduled Appearances</h2>
<div className="max-w-3xl mx-auto bg-[#065f46]/50 backdrop-blur-sm rounded-md border border-[#047857] divide-y divide-[#047857]">

<div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left hover:bg-[#065f46] transition-colors">
<div className="flex gap-6 items-center">
<div className="text-center border-r border-emerald-600 pr-6">
<div className="text-xs font-semibold text-emerald-300 uppercase">Oct</div>
<div className="text-xl font-bold text-white">14</div>
</div>
<div>
<h3 className="text-lg font-semibold text-white">Yuk Yuks Abbotsford</h3>
<span className="text-sm text-emerald-300">Abbotsford, BC</span>
</div>
</div>
<button className="px-5 py-2 bg-emerald-100 text-emerald-900 rounded-sm text-xs font-bold uppercase tracking-wide hover:bg-white transition-colors">Purchase Permit</button>
</div>

<div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left hover:bg-[#065f46] transition-colors">
<div className="flex gap-6 items-center">
<div className="text-center border-r border-emerald-600 pr-6">
<div className="text-xs font-semibold text-emerald-300 uppercase">Nov</div>
<div className="text-xl font-bold text-white">02</div>
</div>
<div>
<h3 className="text-lg font-semibold text-white">Very Very Improv</h3>
<span className="text-sm text-emerald-300">Langley, BC</span>
</div>
</div>
<button className="px-5 py-2 bg-emerald-100 text-emerald-900 rounded-sm text-xs font-bold uppercase tracking-wide hover:bg-white transition-colors">Purchase Permit</button>
</div>
</div>
<div className="mt-8">
<a className="text-xs font-bold uppercase tracking-widest text-emerald-400 hover:text-white border-b border-emerald-700 hover:border-white transition-colors pb-1" href="#">View Full Itinerary</a>
</div>
</div>
</section>

<section className="py-24 bg-[#e6f7ef]" id="book">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<div className="inline-block px-3 py-1 mb-4 rounded-full border border-emerald-200 bg-[#F0Fdf4] text-xs font-bold text-emerald-600 uppercase tracking-wider">Form 27B-6</div>
<h2 className="text-4xl font-medium tracking-tighter text-emerald-950 mb-4">Request Personnel</h2>
<p className="text-emerald-700 max-w-2xl mx-auto">
                    Note: Requests for children's parties will be shredded. Requests for weddings will be mocked, then shredded.
                </p>
</div>
<div className="bg-[#F0Fdf4] rounded-sm shadow-xl shadow-emerald-900/5 border border-emerald-200 p-8 md:p-12">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold text-emerald-600 uppercase tracking-wide" htmlFor="name">Supervisor Name</label>
<input className="w-full px-4 py-3 bg-white border border-emerald-200 rounded-sm focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all placeholder:text-emerald-300/50 text-emerald-900" id="name" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-emerald-600 uppercase tracking-wide" htmlFor="email">Digital Contact</label>
<input className="w-full px-4 py-3 bg-white border border-emerald-200 rounded-sm focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all placeholder:text-emerald-300/50 text-emerald-900" id="email" placeholder="jane@lumon.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-emerald-600 uppercase tracking-wide" htmlFor="type">Operation Category</label>
<div className="relative">
<select className="w-full px-4 py-3 bg-white border border-emerald-200 rounded-sm focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all appearance-none text-emerald-900" id="type">
<option>Corporate Morale Boost (Stand-Up)</option>
<option>Meeting Faciliation (Emcee)</option>
<option>Knowledge Transfer (Workshop)</option>
<option>Dramatic Recreation (Acting)</option>
<option>Other (Requires Compliance Approval)</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-emerald-600 uppercase tracking-wide" htmlFor="message">Mission Parameters</label>
<textarea className="w-full px-4 py-3 bg-white border border-emerald-200 rounded-sm focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all placeholder:text-emerald-300/50 text-emerald-900" id="message" placeholder="Specify date, coordinates, budget..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-emerald-900 text-white font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-emerald-800 transition-all shadow-md" type="submit">
                        Submit Requisition
                    </button>
<p className="text-center text-[10px] text-emerald-400 uppercase tracking-widest mt-4">By clicking submit you agree to mandatory fun.</p>
</form>
</div>
</div>
</section>

<footer className="bg-[#F0Fdf4] border-t border-emerald-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="font-bold tracking-tight text-emerald-900 uppercase">Cliff Prang</span>
<span className="text-emerald-400 text-sm">© 2025</span>
</div>
<div className="flex gap-6">
<a className="text-emerald-400 hover:text-emerald-900 transition-colors" href="https://www.instagram.com/cliffprang">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
<span className="sr-only">Instagram</span>
</a>
<a className="text-emerald-400 hover:text-emerald-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
<span className="sr-only">Facebook</span>
</a>
<a className="text-emerald-400 hover:text-emerald-900 transition-colors" href="https://www.imdb.com/name/nm7603540/">
<i className="w-5 h-5" data-lucide="film" strokeWidth="1.5"></i>
<span className="sr-only">IMDb</span>
</a>
</div>
</div>
</footer>


    </>
  );
}
