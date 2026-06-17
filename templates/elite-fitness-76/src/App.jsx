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
      

<nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center select-none" href="#">
<div className="relative inline-block text-4xl tracking-tighter uppercase" style={{fontFamily: 'Impact, sans-serif', color: '#e7ff72'}}>
                    AN<span className="relative inline-block">D<span className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-[45%] text-[0.18em] text-white tracking-normal whitespace-nowrap" style={{fontFamily: 'sans-serif'}}>COACHING BY</span></span>Y
                </div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-lg text-gray-400 hover:text-white transition-colors font-medium" href="#services">Services</a>
<a className="text-lg text-gray-400 hover:text-white transition-colors font-medium" href="#results">Results</a>
<a className="text-lg text-gray-400 hover:text-white transition-colors font-medium" href="#credentials">About</a>
<a className="bg-[#e7ff72] text-black px-5 py-2.5 rounded-full font-semibold text-lg hover:bg-white transition-colors" href="#apply">
                    Apply Now
                </a>
</div>

<button className="md:hidden text-white p-2">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<main className="flex-grow lg:pt-40 lg:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

<div className="flex-1 space-y-8 z-10 w-full">
<div className="inline-flex gap-2 text-sm font-medium text-[#e7ff72] bg-[#e7ff72]/5 border-[#e7ff72]/30 border rounded-full mb-4 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">Accepting New Clients <span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e7ff72] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#e7ff72]"></span>
</span></div>
<h1 className="md:text-7xl lg:text-8xl uppercase leading-[0.9] text-6xl tracking-tighter" style={{fontFamily: 'Impact, sans-serif'}}>
    Transform <br/>
<span className="text-[#e7ff72]">Your Physique.</span> <br/>
    No BS.
</h1>
<p className="md:text-xl leading-relaxed text-lg font-medium text-gray-400 max-w-xl">Efficiency, accountability, and aesthetic results for busy professionals in Hong Kong and worldwide. A proven system that respects your time.</p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="hover:bg-white transition-all flex items-center justify-center gap-2 group text-lg font-semibold text-black text-center bg-[#e7ff72] rounded-full pt-4 pr-8 pb-4 pl-8" href="#apply">
                        Start Your Transformation
                        <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="px-8 py-4 rounded-full font-medium text-lg border border-white/10 hover:border-white/30 transition-colors text-center bg-[#151515]/50 backdrop-blur-sm" href="#services">
                        View Coaching Options
                    </a>
</div>
</div>

<div className="flex-1 relative w-full max-w-md lg:max-w-none mx-auto">
<div className="relative aspect-[3/4] lg:aspect-[4/5] bg-[#151515] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">

<img alt="Coach Andy Professional Bodybuilder" className="w-full h-full object-cover opacity-70 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 object-top" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-br from-[#e7ff72]/95 to-white/0 lg:bg-clip-text lg:text-transparent"></div>
</div>

<div className="absolute -left-4 lg:-left-12 top-12 lg:top-24 bg-[#151515]/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-xl transform hover:scale-105 transition-transform">
<div className="text-4xl lg:text-5xl text-[#e7ff72] tracking-tighter" style={{fontFamily: 'Impact, sans-serif'}}>100+</div>
<div className="text-lg text-white font-medium mt-1">Transformations</div>
<div className="text-sm text-gray-500 font-medium">Proven global success</div>
</div>

<div className="absolute -right-4 lg:-right-8 bottom-12 lg:bottom-24 bg-[#151515]/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-xl transform hover:scale-105 transition-transform">
<div className="text-4xl lg:text-5xl text-white tracking-tighter" style={{fontFamily: 'Impact, sans-serif'}}>4+</div>
<div className="text-lg text-[#e7ff72] font-medium mt-1">Years Experience</div>
<div className="text-sm text-gray-500 font-medium">Professional coaching</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-[#151515]/30 py-8 overflow-hidden relative" id="credentials">
<div className="z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent w-24 absolute top-0 bottom-0 left-0"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>
<div className="max-w-7xl mx-auto px-6 flex overflow-x-auto no-scrollbar items-center gap-12 lg:gap-20 text-gray-400 text-lg font-medium whitespace-nowrap">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">Bodybuilding<i className="w-6 h-6 text-[#e7ff72]" data-lucide="medal" strokeWidth="1.5"></i><span className="tracking-tight text-white">9x Gold Medalist</span></div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-[#e7ff72]" data-lucide="dumbbell" strokeWidth="1.5"></i>
<span className="tracking-tight text-white">Pro Prep Coach</span>
</div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-[#e7ff72]" data-lucide="award" strokeWidth="1.5"></i>
<span className="tracking-tight text-white">NASM Certified</span> Personal Trainer
            </div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-[#e7ff72]" data-lucide="apple" strokeWidth="1.5"></i>
<span className="tracking-tight text-white">Certified</span> Nutrition Specialist
            </div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-[#e7ff72]" data-lucide="activity" strokeWidth="1.5"></i>
<span className="tracking-tight text-white">Hyrox Coach</span> Performance
            </div>
</div>
</section>

<section className="lg:py-32 pt-24 pr-6 pb-24 pl-6" id="services">
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center mb-20">
<h2 className="md:text-6xl uppercase text-5xl tracking-tighter mb-6" style={{fontFamily: 'Impact, sans-serif'}}>elite services</h2>
<p className="md:text-xl text-lg font-medium text-gray-400 max-w-2xl mr-auto ml-auto">Tailored solutions for your specific goals, lifestyle, and location.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<div className="bg-[#151515] p-8 lg:p-10 rounded-3xl border border-white/5 hover:border-[#e7ff72]/50 transition-all duration-300 group relative overflow-hidden flex flex-col">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
<i className="w-32 h-32 text-[#e7ff72]" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div className="w-14 h-14 bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-center justify-center mb-8 text-[#e7ff72] group-hover:bg-[#e7ff72] group-hover:text-black transition-colors">
<i className="w-6 h-6" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">In-Person HK</h3>
<p className="flex-grow text-lg font-medium text-gray-400 mb-8">The ultimate local experience. Hands-on, intensive sessions in Hong Kong. Focus on flawless execution, immediate feedback, and maximizing your time efficiency.</p>
<ul className="space-y-3 mb-8 text-lg font-medium text-gray-300">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#e7ff72]" data-lucide="check" strokeWidth="1.5"></i> 1-on-1 Private Sessions</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#e7ff72]" data-lucide="check" strokeWidth="1.5"></i> Form Correction &amp; Optimization</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#e7ff72]" data-lucide="check" strokeWidth="1.5"></i> Full Nutrition Protocol</li>
</ul>
<a className="inline-flex items-center justify-between w-full bg-white/5 hover:bg-white/10 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-colors border border-white/5" href="#apply">
                        Apply for HK Coaching <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-[#151515] p-8 lg:p-10 rounded-3xl border border-[#e7ff72]/20 hover:border-[#e7ff72]/50 transition-all duration-300 group relative overflow-hidden flex flex-col">
<div className="absolute top-0 right-0 bg-[#e7ff72] text-black text-sm font-semibold px-4 py-1 rounded-bl-xl z-10">
                        Most Popular
                    </div>
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
<i className="w-32 h-32 text-[#e7ff72]" data-lucide="globe" strokeWidth="1.5"></i>
</div>
<div className="w-14 h-14 bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-center justify-center mb-8 text-[#e7ff72] group-hover:bg-[#e7ff72] group-hover:text-black transition-colors">
<i className="w-6 h-6" data-lucide="globe" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl tracking-tight font-semibold mb-4 text-white">Online Global</h3>
<p className="text-lg text-gray-400 font-medium mb-8 flex-grow">
                        Andy's proven system delivered anywhere in the world. Comprehensive weekly check-ins, custom programming, and 24/7 access to ensure constant progression.
                    </p>
<ul className="space-y-3 mb-8 text-lg font-medium text-gray-300">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#e7ff72]" data-lucide="check" strokeWidth="1.5"></i> Custom Training App Access</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#e7ff72]" data-lucide="check" strokeWidth="1.5"></i> Weekly Video Check-ins</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#e7ff72]" data-lucide="check" strokeWidth="1.5"></i> Form Review via Video</li>
</ul>
<a className="inline-flex items-center justify-between w-full bg-[#e7ff72] hover:bg-white text-black px-6 py-4 rounded-xl font-semibold text-lg transition-colors" href="#apply">
                        Apply for Global Coaching <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="lg:p-10 hover:border-[#e7ff72]/50 transition-all duration-300 group overflow-hidden flex flex-col bg-[#151515] border-white/5 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="w-14 h-14 bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-center justify-center mb-8 text-[#e7ff72] group-hover:bg-[#e7ff72] group-hover:text-black transition-colors">
<i className="w-6 h-6" data-lucide="apple" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl tracking-tight font-semibold mb-4 text-white">Nutrition Protocol</h3>
<p className="text-lg text-gray-400 font-medium mb-8 flex-grow">
                        For those who have their training locked in but need expert guidance on macronutrients, meal timing, and supplementation to reveal their hard work.
                    </p>
<a className="inline-flex items-center text-[#e7ff72] font-semibold text-lg hover:text-white transition-colors gap-2 group-hover:gap-3" href="#apply">
                        View Details <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-[#151515] p-8 lg:p-10 rounded-3xl border border-white/5 hover:border-[#e7ff72]/50 transition-all duration-300 group relative overflow-hidden flex flex-col">
<div className="w-14 h-14 bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-center justify-center mb-8 text-[#e7ff72] group-hover:bg-[#e7ff72] group-hover:text-black transition-colors">
<i className="w-6 h-6" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl tracking-tight font-semibold mb-4 text-white">Premade Programs</h3>
<p className="text-lg text-gray-400 font-medium mb-8 flex-grow">
                        Scalable options based on Andy's core philosophies. 8-to-12 week structured routines focusing on hypertrophy, strength, or Hyrox prep. Independent execution.
                    </p>
<a className="inline-flex items-center text-[#e7ff72] font-semibold text-lg hover:text-white transition-colors gap-2 group-hover:gap-3" href="#apply">
                        Browse Programs <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-gradient-to-b from-[#0a0a0a] to-[#151515]" id="apply">
<div className="max-w-4xl mx-auto text-center">
<h2 className="md:text-7xl uppercase text-6xl tracking-tighter mb-6" style={{fontFamily: 'Impact, sans-serif'}}>
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e7ff72] to-white">Commit?</span>
</h2>
<p className="text-xl font-medium text-gray-400 max-w-2xl mr-auto mb-12 ml-auto">
                Join the 100+ individuals who have transformed their bodies and habits. Applications are reviewed within 24 hours.
            </p>
<form className="max-w-md mx-auto space-y-4 text-left">
<div className="">
<input className="placeholder:text-gray-600 focus:outline-none focus:border-[#e7ff72] transition-colors text-lg text-white bg-[#0a0a0a] w-full border-white/10 border rounded-xl pt-4 pr-5 pb-4 pl-5" placeholder="Full Name" type="text"/>
</div>
<div className="">
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-[#e7ff72] transition-colors" placeholder="Email Address" type="email"/>
</div>
<div className="relative">
<select className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-lg text-gray-400 appearance-none focus:outline-none focus:border-[#e7ff72] transition-colors cursor-pointer">
<option disabled="" selected="" value="">Select Coaching Type</option>
<option value="in-person">In-Person (Hong Kong)</option>
<option value="online">Online (Global)</option>
<option value="nutrition">Nutrition Only</option>
</select>
<i className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<button className="w-full bg-[#e7ff72] text-black font-semibold text-xl py-4 rounded-xl hover:bg-white transition-colors mt-4" type="button">
                    Submit Application
                </button>
</form>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6 bg-[#0a0a0a]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center select-none">
<div className="relative inline-block text-2xl tracking-tighter uppercase text-white/50" style={{fontFamily: 'Impact, sans-serif'}}>
                    AN<span className="relative inline-block">D<span className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-[45%] text-[0.18em] text-white/50 tracking-normal whitespace-nowrap" style={{fontFamily: 'sans-serif'}}>COACHING BY</span></span>Y
                </div>
</div>
<div className="flex gap-8 text-gray-500 text-lg font-medium">
<a className="hover:text-[#e7ff72] transition-colors" href="#">Instagram</a>
<a className="hover:text-[#e7ff72] transition-colors" href="#">Terms</a>
<a className="hover:text-[#e7ff72] transition-colors" href="#">Privacy</a>
</div>
<p className="text-gray-600 text-sm font-medium">
                © 2024 Coaching by Andy. All rights reserved.
            </p>
</div>
</footer>


    </>
  );
}
