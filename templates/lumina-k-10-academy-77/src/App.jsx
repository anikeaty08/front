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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full z-50 nav-blur bg-blue-950/90 border-b border-blue-900/50 shadow-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<span className="text-xl font-medium tracking-tighter uppercase text-amber-400">L M N A</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-blue-100">
<a className="hover:text-amber-300 transition-colors" href="#">Philosophy <span className="text-xs opacity-70 ml-1">दर्शन</span></a>
<a className="hover:text-amber-300 transition-colors" href="#">K-10 Academics <span className="text-xs opacity-70 ml-1">शैक्षिक</span></a>
<a className="hover:text-amber-300 transition-colors" href="#">Campus <span className="text-xs opacity-70 ml-1">परिसर</span></a>
<a className="hover:text-amber-300 transition-colors" href="#">Journal <span className="text-xs opacity-70 ml-1">पत्रिका</span></a>
</div>
<div className="hidden md:flex items-center">
<a className="text-xs font-medium uppercase tracking-widest text-blue-950 bg-amber-400 hover:bg-amber-300 transition-colors px-6 py-2.5 rounded-full shadow-lg shadow-amber-500/20" href="#">
                    Admissions
                </a>
</div>
<button className="md:hidden text-blue-100 hover:text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center bg-blue-950 pt-20 overflow-hidden">

<div className="absolute inset-0 dark-architectural-pattern opacity-40"></div>
<div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-gradient-to-b from-amber-500/20 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-blue-950 via-blue-950/80 to-transparent z-10"></div>
<div className="relative z-20 px-6 max-w-5xl mx-auto text-center flex flex-col items-center mt-12">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-900/60 text-xs font-medium text-blue-100 mb-8 backdrop-blur-md shadow-inner shadow-white/5">
<span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                K-10 Enrollment Open • भर्ना खुला छ
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-4 leading-[1.1] font-serif-custom">
                A monumental <br className="hidden md:block"/>approach to learning.
            </h1>
<p className="text-xl md:text-2xl text-amber-200/90 font-serif-custom italic mb-8 tracking-wide">
                आधुनिक शिक्षा, स्थानीय पहिचान
            </p>
<p className="text-base md:text-lg text-blue-100 font-light max-w-2xl leading-relaxed mb-12 opacity-90">
                We synthesize the enduring structural beauty of Western Nepali masonry with cinematic modernism, creating an educational environment where deep focus and profound discovery naturally occur from kindergarten through tenth grade.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="bg-amber-400 text-blue-950 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-amber-300 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-amber-500/25">
                    Explore the Campus
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<button className="bg-blue-900/50 backdrop-blur-sm text-white border border-blue-400/30 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-blue-800 transition-all flex items-center justify-center gap-2">
<iconify-icon height="18" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Watch Film
                </button>
</div>
</div>
</header>

<section className="py-24 lg:py-40 px-6 relative bg-stone-50 overflow-hidden">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-50/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-5 order-2 lg:order-1">
<span className="text-xs font-medium tracking-widest uppercase text-orange-600 mb-4 block flex items-center gap-2">
<iconify-icon icon="solar:buildings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Our Architecture • हाम्रो वास्तुकला
                    </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-3 text-stone-900">Where stone meets light.</h2>
<h3 className="text-2xl font-serif-custom italic text-stone-500 mb-8">ढुङ्गा र प्रकाशको संगम।</h3>
<div className="space-y-6 text-stone-600 font-light text-sm md:text-base leading-relaxed">
<p>
                            Drawing from the intricate <i className="font-serif-custom text-orange-800 font-medium">ankhijhyal</i> (carved windows) and slate-roofed structures of the Karnali region, our K-10 campus is grounded in local heritage.
                        </p>
<p>
                            Yet, it breathes modernism. Expansive glass corridors intersect with rammed earth walls, directing natural light to create cinematic shadows that shift throughout the academic day, fostering an atmosphere of calm and focus for students of all ages.
                        </p>
</div>
<div className="mt-10 pt-10 border-t border-stone-200 grid grid-cols-2 gap-8">
<div>
<div className="text-3xl font-medium tracking-tight text-blue-900 mb-1">15+</div>
<div className="text-xs font-medium text-stone-500 uppercase tracking-wider">Acres of Campus</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-orange-600 mb-1">100%</div>
<div className="text-xs font-medium text-stone-500 uppercase tracking-wider">Local Materials</div>
</div>
</div>
</div>

<div className="lg:col-span-7 order-1 lg:order-2 relative h-[500px] lg:h-[700px] rounded-[2.5rem] overflow-hidden bg-stone-200 group shadow-2xl shadow-stone-300/50 border border-white">
<div className="absolute inset-0 bg-stone-200/50 architectural-pattern opacity-60"></div>

<div className="absolute top-[10%] right-[10%] w-[60%] h-[80%] bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100 transform transition-transform duration-700 group-hover:scale-[1.02]">
<div className="absolute inset-0 bg-gradient-to-br from-stone-50 to-stone-200"></div>

<div className="absolute -right-[20%] top-[20%] w-[150%] h-[20%] bg-amber-100/60 rotate-12 blur-md mix-blend-overlay"></div>

<div className="absolute bottom-0 left-0 w-full h-1/3 bg-orange-900/90 border-t-4 border-amber-500 relative overflow-hidden">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.15) 10px, rgba(255,255,255,0.15) 11px)'}}></div>
</div>
</div>

<div className="absolute bottom-[15%] left-[10%] w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white px-6 border-y border-stone-200">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-xl">
<span className="text-xs font-medium tracking-widest uppercase text-blue-600 mb-4 block">Our Foundation • हाम्रो आधार</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-stone-900">Foundational Pillars</h2>
<p className="text-stone-500 font-light text-sm md:text-base leading-relaxed">A rigorous K-10 curriculum designed to cultivate critical thinking, global awareness, and an unshakeable appreciation for local heritage.</p>
</div>
<a className="text-sm font-medium text-blue-600 border-b border-blue-600 pb-1 hover:text-blue-800 hover:border-blue-800 transition-colors inline-flex items-center gap-1 group" href="#">
                    View Full K-10 Curriculum
                    <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="bg-blue-50/50 p-8 lg:p-10 rounded-3xl border border-blue-100 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
<div className="relative">
<div className="w-14 h-14 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon height="28" icon="solar:book-bookmark-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-1 text-stone-900">Classical Humanities</h3>
<p className="text-sm font-serif-custom italic text-blue-700 mb-4">मानविकी र दर्शन</p>
<p className="text-stone-600 font-light text-sm leading-relaxed mb-8 flex-grow">Engaging deeply with texts from both Eastern philosophies and Western traditions to build a robust foundation of ethical reasoning and empathy.</p>
</div>
<div className="w-full h-[2px] bg-blue-200 mt-auto group-hover:bg-blue-500 transition-colors rounded-full"></div>
</div>

<div className="bg-emerald-50/50 p-8 lg:p-10 rounded-3xl border border-emerald-100 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
<div className="relative">
<div className="w-14 h-14 bg-white text-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<iconify-icon height="28" icon="solar:atom-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-1 text-stone-900">Modern Sciences</h3>
<p className="text-sm font-serif-custom italic text-emerald-700 mb-4">आधुनिक विज्ञान</p>
<p className="text-stone-600 font-light text-sm leading-relaxed mb-8 flex-grow">State-of-the-art modernist laboratories supporting inquiry-based learning in physics, biological sciences, and computational logic from early years.</p>
</div>
<div className="w-full h-[2px] bg-emerald-200 mt-auto group-hover:bg-emerald-500 transition-colors rounded-full"></div>
</div>

<div className="bg-orange-50/50 p-8 lg:p-10 rounded-3xl border border-orange-100 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
<div className="relative">
<div className="w-14 h-14 bg-white text-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-orange-100 group-hover:bg-orange-600 group-hover:text-white transition-colors">
<iconify-icon height="28" icon="solar:palette-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-1 text-stone-900">Heritage Arts</h3>
<p className="text-sm font-serif-custom italic text-orange-700 mb-4">सम्पदा र कला</p>
<p className="text-stone-600 font-light text-sm leading-relaxed mb-8 flex-grow">Hands-on studios dedicated to preserving and evolving traditional woodworking, masonry, and architectural crafts specific to the region.</p>
</div>
<div className="w-full h-[2px] bg-orange-200 mt-auto group-hover:bg-orange-500 transition-colors rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="py-32 lg:py-48 bg-blue-900 text-white px-6 text-center relative overflow-hidden flex items-center justify-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-b from-amber-500/10 via-blue-800/50 to-transparent blur-3xl pointer-events-none"></div>
<div className="absolute inset-0 dark-architectural-pattern opacity-20"></div>
<div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
<iconify-icon className="text-5xl text-amber-400 mb-10 opacity-80" icon="solar:quote-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-snug tracking-tight mb-6 font-serif-custom text-blue-50">
                "Education is the architecture of the mind. We build intellects as enduring as the stone temples of our ancestors, illuminated by the clarity of modern thought."
            </h2>
<p className="text-xl md:text-2xl text-amber-200/90 font-serif-custom italic mb-12">
                "शिक्षा नै मनको वास्तुकला हो।"
            </p>
<div className="flex items-center gap-4 text-left bg-blue-950/50 pr-6 pl-2 py-2 rounded-full border border-blue-800/50 backdrop-blur-sm">
<div className="w-12 h-12 rounded-full bg-blue-800 border border-blue-700 flex items-center justify-center text-blue-300">
<iconify-icon height="20" icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Dr. Aarav Malla</p>
<p className="text-xs text-amber-400 font-medium tracking-widest uppercase mt-0.5">Headmaster • प्रधानाध्यापक</p>
</div>
</div>
</div>
</section>

<footer className="bg-blue-950 text-blue-200 py-20 px-6 border-t border-blue-900 mt-auto relative overflow-hidden">
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/30 rounded-full blur-[100px] pointer-events-none translate-y-1/2 translate-x-1/3"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

<div className="md:col-span-5 lg:col-span-4">
<div className="text-2xl font-medium tracking-tighter uppercase text-amber-400 mb-6 block">L M N A</div>
<p className="text-sm font-light leading-relaxed max-w-sm mb-4">
                        Elevating K-10 education through the synthesis of Western Nepali heritage and cinematic modernism.
                    </p>
<p className="text-sm font-serif-custom italic text-blue-300 mb-8">
                        ज्ञान नै शक्ति हो।
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-blue-900 border border-blue-800 flex items-center justify-center hover:bg-amber-400 hover:text-blue-950 transition-colors group" href="#">
<iconify-icon height="18" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-blue-900 border border-blue-800 flex items-center justify-center hover:bg-amber-400 hover:text-blue-950 transition-colors group" href="#">
<iconify-icon height="18" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>

<div className="hidden lg:block lg:col-span-2"></div>

<div className="md:col-span-3 lg:col-span-2">
<h4 className="text-xs font-medium text-white uppercase tracking-widest mb-6 block">Institution</h4>
<ul className="space-y-4 text-sm font-light">
<li><a className="hover:text-amber-300 transition-colors flex items-center justify-between group" href="#">About Us <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">हाम्रो बारेमा</span></a></li>
<li><a className="hover:text-amber-300 transition-colors flex items-center justify-between group" href="#">Leadership <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">नेतृत्व</span></a></li>
<li><a className="hover:text-amber-300 transition-colors flex items-center justify-between group" href="#">Architecture <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">वास्तुकला</span></a></li>
<li><a className="hover:text-amber-300 transition-colors flex items-center justify-between group" href="#">Careers <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">रोजगारी</span></a></li>
</ul>
</div>

<div className="md:col-span-4 lg:col-span-2">
<h4 className="text-xs font-medium text-white uppercase tracking-widest mb-6 block">Academics</h4>
<ul className="space-y-4 text-sm font-light">
<li><a className="hover:text-amber-300 transition-colors" href="#">K-10 Curriculum</a></li>
<li><a className="hover:text-amber-300 transition-colors" href="#">Heritage Arts</a></li>
<li><a className="hover:text-amber-300 transition-colors" href="#">Modern Sciences</a></li>
<li><a className="hover:text-amber-300 transition-colors" href="#">Library &amp; Archives</a></li>
</ul>
</div>

<div className="md:col-span-12 lg:col-span-2 mt-8 md:mt-0">
<h4 className="text-xs font-medium text-white uppercase tracking-widest mb-6 block">Admissions</h4>
<ul className="space-y-4 text-sm font-light">
<li><a className="hover:text-amber-300 transition-colors" href="#">Apply Now</a></li>
<li><a className="hover:text-amber-300 transition-colors" href="#">Tuition &amp; Aid</a></li>
<li><a className="hover:text-amber-300 transition-colors" href="#">Schedule a Tour</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-blue-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-blue-400">
<p>© 2024 Lumina K-10 Academy. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
