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
      

<nav className="fixed w-full z-50 transition-all duration-300 bg-emerald-950/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
<a className="text-white text-xl tracking-tighter font-medium z-50 relative group flex items-center gap-1" href="#">
                FAIRWAY<span className="text-amber-400">.</span>FOCUS
            </a>

<div className="hidden md:flex items-center gap-10">
<a className="text-xs uppercase tracking-widest text-stone-400 hover:text-white transition-colors" href="#work">Portfolio</a>
<a className="text-xs uppercase tracking-widest text-stone-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-xs uppercase tracking-widest text-stone-400 hover:text-white transition-colors" href="#about">About</a>
<a className="px-6 py-2.5 bg-white text-emerald-950 text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-amber-50 transition-all duration-300" href="#contact">
                    Book Session
                </a>
</div>

<button className="md:hidden text-white flex items-center justify-center">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-emerald-950">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover opacity-70" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/5439486/5439486-hd_1920_1080_25fps.mp4" type="video/mp4"/>

<img alt="Golf Course" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</video>

<div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/40 to-black/20 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-950"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-emerald-900/30 backdrop-blur-md mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
<span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-stone-200">Booking for 2026 Season</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl text-stone-50 leading-none tracking-tight mb-8 font-normal drop-shadow-2xl">
                The Art of <br/><span className="text-amber-400/90 italic font-light">Patience</span>
</h1>
<p className="text-lg md:text-xl text-stone-200/90 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide mix-blend-overlay">
                Defining the visual legacy of the world's most prestigious golf courses.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="px-8 py-4 bg-amber-500 text-emerald-950 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-amber-400 transition-all shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)]" href="#work">
                    View Portfolio
                </a>
<a className="flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-white/10 transition-colors group" href="#contact">
<span>Inquire Now</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform text-amber-400" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 animate-bounce flex flex-col items-center gap-2">
<span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
<iconify-icon icon="lucide:arrow-down" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</header>

<section className="py-16 bg-emerald-950 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center">
<p className="text-center text-[10px] font-semibold tracking-[0.3em] text-emerald-600 mb-12 uppercase">Trusted by heritage brands</p>
<div className="w-full flex flex-wrap justify-between items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
<span className="text-2xl font-serif text-white/80 tracking-widest">PINEHURST</span>
<span className="text-xl font-sans font-bold text-white/80 tracking-tighter">TITLEIST</span>
<span className="text-2xl font-serif italic text-white/80">Augusta</span>
<span className="text-xl font-sans font-medium text-white/80 tracking-widest border border-white/80 px-3 py-1">PGA</span>
<span className="text-xl font-mono text-white/80">TAYLORMADE</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-stone-100" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
<div>
<span className="text-amber-600 text-xs font-bold tracking-widest uppercase mb-4 block">Selected Works</span>
<h2 className="text-5xl md:text-6xl text-emerald-950 tracking-tighter">Visual Legacy</h2>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-emerald-900/10 flex items-center justify-center text-emerald-900/40 hover:text-emerald-900 hover:border-emerald-900 hover:bg-white transition-all duration-300">
<iconify-icon icon="lucide:arrow-left" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-emerald-900/10 flex items-center justify-center text-emerald-900/40 hover:text-emerald-900 hover:border-emerald-900 hover:bg-white transition-all duration-300">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative aspect-[4/5] md:col-span-1 lg:row-span-2 overflow-hidden bg-emerald-950 cursor-pointer shadow-xl shadow-emerald-950/5">
<img alt="Golfer Swing" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&amp;w=2076&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-2 block">Editorial</span>
<h3 className="text-white text-3xl font-serif italic">The Morning Round</h3>
</div>
</div>
</div>

<div className="group relative aspect-square overflow-hidden bg-emerald-950 cursor-pointer shadow-xl shadow-emerald-950/5">
<img alt="Green texture" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
<div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="group relative aspect-square overflow-hidden bg-emerald-950 cursor-pointer shadow-xl shadow-emerald-950/5">
<img alt="Bunker detail" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
<div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="group relative aspect-[16/9] md:col-span-2 overflow-hidden bg-emerald-950 cursor-pointer shadow-xl shadow-emerald-950/5">
<img alt="Landscape Course" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-2 block">Architecture</span>
<h3 className="text-white text-3xl font-serif italic">Cypress Point Views</h3>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
<h2 className="text-5xl text-emerald-950 mb-8 tracking-tighter">Beyond the Lens</h2>
<div className="w-12 h-1 bg-amber-500 mb-8"></div>
<p className="text-stone-500 leading-loose mb-10 text-sm font-light">
                        My approach combines the precision of architectural photography with the raw emotion of the game. Every frame is a study in light, landscape, and the moments in between.
                    </p>
<a className="text-emerald-900 font-medium text-xs uppercase tracking-widest hover:text-amber-600 transition-colors inline-flex items-center gap-3 border-b border-stone-200 pb-1 hover:border-amber-600" href="#contact">
                        Request Rate Card <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-100 border border-stone-100">

<div className="p-12 bg-white hover:bg-stone-50 transition-colors group">
<div className="w-12 h-12 bg-stone-50 text-emerald-900 rounded-sm flex items-center justify-center mb-8 group-hover:bg-emerald-950 group-hover:text-amber-400 transition-colors duration-500">
<iconify-icon icon="lucide:camera" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-emerald-950 mb-4 font-serif">Course Architecture</h3>
<p className="text-stone-500 text-sm leading-relaxed font-light">High-resolution imagery for course designers, resorts, and private clubs. Capturing the nuances of routing and light.</p>
</div>

<div className="p-12 bg-white hover:bg-stone-50 transition-colors group">
<div className="w-12 h-12 bg-stone-50 text-emerald-900 rounded-sm flex items-center justify-center mb-8 group-hover:bg-emerald-950 group-hover:text-amber-400 transition-colors duration-500">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-emerald-950 mb-4 font-serif">Commercial Lifestyle</h3>
<p className="text-stone-500 text-sm leading-relaxed font-light">Authentic brand campaigns for apparel and equipment manufacturers. Focus on movement and atmosphere.</p>
</div>

<div className="p-12 bg-white hover:bg-stone-50 transition-colors group">
<div className="w-12 h-12 bg-stone-50 text-emerald-900 rounded-sm flex items-center justify-center mb-8 group-hover:bg-emerald-950 group-hover:text-amber-400 transition-colors duration-500">
<iconify-icon icon="lucide:trophy" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-emerald-950 mb-4 font-serif">Tournament Coverage</h3>
<p className="text-stone-500 text-sm leading-relaxed font-light">Documentary-style coverage of professional and amateur events. Capturing the tension and release of competition.</p>
</div>

<div className="p-12 bg-white hover:bg-stone-50 transition-colors group">
<div className="w-12 h-12 bg-stone-50 text-emerald-900 rounded-sm flex items-center justify-center mb-8 group-hover:bg-emerald-950 group-hover:text-amber-400 transition-colors duration-500">
<iconify-icon icon="lucide:image" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-emerald-950 mb-4 font-serif">Fine Art Prints</h3>
<p className="text-stone-500 text-sm leading-relaxed font-light">Limited edition prints for clubhouses and private collections. Museum-quality materials.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-[600px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0">
<img alt="Golf Detail" className="w-full h-full object-cover object-center scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-emerald-950/80"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl">
<iconify-icon className="text-amber-500 mb-8 mx-auto block opacity-80" icon="lucide:quote" strokeWidth="1.5" width="48"></iconify-icon>
<h3 className="text-4xl md:text-6xl text-stone-100 font-serif font-light mb-10 leading-tight">
                "Photography that doesn't just show the course,<br className="hidden md:block"/> but how it <span className="text-amber-400 italic">feels</span> to play it."
            </h3>
<div className="flex items-center justify-center gap-4">
<div className="h-px w-12 bg-stone-500"></div>
<p className="text-stone-300 font-semibold tracking-widest text-xs uppercase">Golf Digest, 2026</p>
<div className="h-px w-12 bg-stone-500"></div>
</div>
</div>
</section>

<footer className="bg-emerald-950 text-stone-300 py-24 border-t border-white/5 relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">

<div>
<span className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4 block">Get in Touch</span>
<h2 className="text-6xl text-white mb-8 font-normal tracking-tight leading-none">Create something <br /><span className="text-stone-400 serif-font italic">timeless.</span></br></h2>
<p className="text-stone-400 mb-16 max-w-md leading-relaxed font-light">
                    Based in Pebble Beach, CA. Available worldwide for commissions.
                </p>
<div className="space-y-8">
<div className="flex items-start gap-6 group">
<div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-emerald-950 group-hover:border-amber-500 transition-all duration-300">
<iconify-icon icon="lucide:mail" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-[10px] text-stone-500 uppercase tracking-widest mb-2 font-semibold">Email</p>
<a className="text-white text-lg hover:text-amber-400 transition-colors font-serif" href="mailto:hello@fairwayfocus.com">hello@fairwayfocus.com</a>
</div>
</div>
<div className="flex items-start gap-6 group">
<div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-emerald-950 group-hover:border-amber-500 transition-all duration-300">
<iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-[10px] text-stone-500 uppercase tracking-widest mb-2 font-semibold">Social</p>
<a className="text-white text-lg hover:text-amber-400 transition-colors font-serif" href="#">@fairwayfocus</a>
</div>
</div>
</div>
</div>

<form className="bg-white/[0.02] backdrop-blur-xl p-8 md:p-12 rounded-sm border border-white/5 space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-3">
<label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">First Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3.5 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500/50 focus:bg-white/10 transition-all text-sm font-light" placeholder="Tiger" type="text"/>
</div>
<div className="space-y-3">
<label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Last Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3.5 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500/50 focus:bg-white/10 transition-all text-sm font-light" placeholder="Woods" type="text"/>
</div>
</div>
<div className="space-y-3">
<label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3.5 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500/50 focus:bg-white/10 transition-all text-sm font-light" placeholder="you@example.com" type="email"/>
</div>

<div className="space-y-4">
<label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Inquiry Type</label>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="checkbox"/>
<div className="px-5 py-2.5 rounded-sm border border-white/10 text-stone-400 text-xs tracking-wide peer-checked:bg-amber-500 peer-checked:text-emerald-950 peer-checked:font-semibold peer-checked:border-amber-500 transition-all hover:bg-white/5">Architecture</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="checkbox"/>
<div className="px-5 py-2.5 rounded-sm border border-white/10 text-stone-400 text-xs tracking-wide peer-checked:bg-amber-500 peer-checked:text-emerald-950 peer-checked:font-semibold peer-checked:border-amber-500 transition-all hover:bg-white/5">Editorial</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="checkbox"/>
<div className="px-5 py-2.5 rounded-sm border border-white/10 text-stone-400 text-xs tracking-wide peer-checked:bg-amber-500 peer-checked:text-emerald-950 peer-checked:font-semibold peer-checked:border-amber-500 transition-all hover:bg-white/5">Commercial</div>
</label>
</div>
</div>

<div className="space-y-6 pt-4">
<label className="flex justify-between text-[10px] font-bold text-stone-500 uppercase tracking-widest">
<span>Project Budget</span>
<span className="text-amber-400">$10k - $100k+</span>
</label>
<div className="relative h-px bg-white/20 w-full">
<div className="absolute top-0 left-0 h-full w-2/3 bg-amber-500"></div>
<div className="absolute top-1/2 left-2/3 w-3 h-3 bg-white rounded-full -translate-y-1/2 -translate-x-1/2 shadow-[0_0_10px_rgba(255,255,255,0.5)] cursor-grab"></div>
</div>
</div>
<button className="w-full bg-white text-emerald-950 text-xs font-bold uppercase tracking-widest py-4 rounded-sm hover:bg-amber-400 transition-colors mt-6">
                    Send Inquiry
                </button>
</form>
</div>
<div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-600 uppercase tracking-widest">
<p>© 2026 Fairway Focus Photography.</p>
<div className="flex gap-8 mt-4 md:mt-0">
<a className="hover:text-amber-500 transition-colors" href="#">Privacy</a>
<a className="hover:text-amber-500 transition-colors" href="#">Terms</a>
<a className="hover:text-amber-500 transition-colors" href="#">Sitemap</a>
</div>
</div>
</footer>

    </>
  );
}
