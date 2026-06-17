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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300">

<div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent pointer-events-none transition-opacity duration-300"></div>
<div className="relative max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<a className="text-lg font-medium tracking-tighter text-white flex items-center gap-3 group" href="#">
<div className="w-8 h-8 rounded bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-500">
<iconify-icon icon="lucide:box" strokeWidth="2" width="16"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-shadow font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>ARSITEK.</span>
</a>

<div className="hidden md:flex items-center gap-1 bg-black/20 backdrop-blur-md p-1.5 rounded-full border border-white/10">
<a className="text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/10 px-5 py-2 rounded-full transition-all font-manrope" href="#projects" style={{transition: 'outline 0.1s ease-in-out'}}>Projects</a>
<a className="text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/10 px-5 py-2 rounded-full transition-all font-manrope" href="#expertise" style={{transition: 'outline 0.1s ease-in-out'}}>Expertise</a>
<a className="text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/10 px-5 py-2 rounded-full transition-all font-manrope" href="#studio" style={{transition: 'outline 0.1s ease-in-out'}}>Studio</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex text-xs font-semibold bg-white text-black px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-colors tracking-tight shadow-[0_0_20px_rgba(255,255,255,0.2)] font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Start Project
                </button>
<button className="md:hidden text-white bg-white/10 p-2 rounded-lg backdrop-blur-sm border border-white/10">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative h-screen w-full overflow-hidden">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover scale-105" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&amp;w=2070">
<source src="https://videos.pexels.com/video-files/3205626/3205626-hd_1920_1080_25fps.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30"></div>
<div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
</div>

<div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-24 md:pb-32">
<div className="max-w-3xl animate-fade-up">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-pulse"></span>
<span className="text-[11px] font-medium tracking-widest text-white uppercase font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Jakarta • 2024</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-[0.95] mb-6 text-shadow font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Elevate <span className="text-zinc-400 font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>Every</span><br/>
                    Dimension.
                </h1>

<div className="flex flex-col md:flex-row items-start gap-8 mt-8">
<p className="text-base md:text-lg font-light text-zinc-300 max-w-md leading-relaxed border-l border-white/20 pl-6 delay-100 animate-fade-up font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                        We design environments that blend structural purity with human experience. A sanctuary of light and space.
                    </p>

<div className="flex items-center gap-4 delay-200 animate-fade-up">
<button className="h-12 w-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 group">
<iconify-icon className="group-hover:animate-bounce" icon="lucide:arrow-down" width="20"></iconify-icon>
</button>
<span className="text-xs tracking-widest uppercase text-white/60 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Discover</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-24 right-6 hidden lg:block animate-fade-up delay-300">
<div className="glass-panel p-6 rounded-2xl w-64">
<div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
<span className="text-xs text-zinc-400 uppercase tracking-wider font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Current Project</span>
<iconify-icon className="text-white" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
<div className="flex gap-4 items-center">
<div className="w-12 h-12 rounded bg-zinc-800 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=200"/>
</div>
<div>
<div className="text-sm font-medium text-white font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>The Stone House</div>
<div className="text-xs text-zinc-500 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Construction Phase</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] border-white/5 border-b pt-16 pb-16">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col gap-1 border-l border-zinc-800 pl-6 group cursor-default">
<span className="text-4xl text-white tracking-tight group-hover:text-emerald-400 transition-colors font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>15+</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Years Experience</span>
</div>
<div className="flex flex-col gap-1 border-l border-zinc-800 pl-6 group cursor-default">
<span className="text-4xl text-white tracking-tight group-hover:text-emerald-400 transition-colors font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>240</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Projects Built</span>
</div>
<div className="flex flex-col gap-1 border-l border-zinc-800 pl-6 group cursor-default">
<span className="text-4xl text-white tracking-tight group-hover:text-emerald-400 transition-colors font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>32</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Global Awards</span>
</div>
<div className="flex flex-col gap-1 border-l border-zinc-800 pl-6 group cursor-default">
<span className="text-4xl text-white tracking-tight group-hover:text-emerald-400 transition-colors font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>100%</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Sustainable</span>
</div>
</div>
</section>

<section className="py-32 bg-[#050505]" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-16">
<div>
<h2 className="text-3xl md:text-4xl text-white tracking-tight mb-2 font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>Selected Works</h2>
<p className="text-zinc-500 text-sm font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Curated collection of residential and commercial spaces.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-white hover:text-zinc-400 transition-colors group font-manrope" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
                    View Archive <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 cursor-pointer">
<img alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 flex flex-col justify-end p-8">
<span className="text-[10px] font-semibold text-emerald-400 mb-2 tracking-widest uppercase border border-emerald-400/20 bg-emerald-400/10 w-fit px-2 py-0.5 rounded-full backdrop-blur-sm font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Residential</span>
<h3 className="text-2xl text-white tracking-tight mb-1 font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>The Stone House</h3>
<p className="text-zinc-400 text-sm font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Ubud, Bali</p>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 cursor-pointer md:translate-y-16">
<img alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 flex flex-col justify-end p-8">
<span className="text-[10px] font-semibold text-blue-400 mb-2 tracking-widest uppercase border border-blue-400/20 bg-blue-400/10 w-fit px-2 py-0.5 rounded-full backdrop-blur-sm font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Commercial</span>
<h3 className="text-2xl text-white tracking-tight mb-1 font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>Vertex HQ</h3>
<p className="text-zinc-400 text-sm font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Jakarta, Indonesia</p>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 cursor-pointer">
<img alt="Project 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 flex flex-col justify-end p-8">
<span className="text-[10px] font-semibold text-purple-400 mb-2 tracking-widest uppercase border border-purple-400/20 bg-purple-400/10 w-fit px-2 py-0.5 rounded-full backdrop-blur-sm font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Interior</span>
<h3 className="text-2xl text-white tracking-tight mb-1 font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>Minimalist Loft</h3>
<p className="text-zinc-400 text-sm font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Bandung, West Java</p>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 cursor-pointer md:translate-y-16">
<img alt="Project 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 flex flex-col justify-end p-8">
<span className="text-[10px] font-semibold text-orange-400 mb-2 tracking-widest uppercase border border-orange-400/20 bg-orange-400/10 w-fit px-2 py-0.5 rounded-full backdrop-blur-sm font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Cultural</span>
<h3 className="text-2xl text-white tracking-tight mb-1 font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>Art Pavilion</h3>
<p className="text-zinc-400 text-sm font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Yogyakarta, Indonesia</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] border-white/5 border-t pt-24 pb-24" id="expertise">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col gap-6 p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="lucide:pencil-ruler" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-white tracking-tight mb-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Architectural Design</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                            Comprehensive planning from conceptual sketches to construction documentation, focusing on functional minimalism.
                        </p>
</div>
</div>
<div className="flex flex-col gap-6 p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="lucide:armchair" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-white tracking-tight mb-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Interior Architecture</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                            Curating materials, lighting, and spatial flow to create interiors that improve quality of life and productivity.
                        </p>
</div>
</div>
<div className="flex flex-col gap-6 p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="lucide:leaf" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-white tracking-tight mb-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Sustainable Planning</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                            Integrating eco-friendly technologies and passive design strategies to reduce environmental footprint.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-center mix-blend-normal bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e411bbe1-c64a-49f1-97c2-db65b57b17b0_3840w.jpg)] bg-cover border-white/5 border-t pt-32 pb-32 relative">

<div className="absolute inset-0 bg-black/50 z-0"></div>

<div className="absolute top-0 right-0 w-96 h-96 bg-zinc-800 rounded-full blur-3xl opacity-10 -mr-20 -mt-20"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<svg className="text-emerald-500 mb-8 inline-block" data-icon-set="lucide" data-lucide="quote" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<blockquote className="md:text-4xl leading-tight text-2xl text-zinc-50 tracking-tight mb-10 font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>
            "Arsitek did not just build a house; they sculptured light and space into a sanctuary that breathes. An elevation of daily living."
        </blockquote>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="Client" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<div className="text-sm font-medium text-white font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Adrian Santoso</div>
<div className="text-xs text-zinc-300 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>CEO, TechVentures</div>
</div>
</div>
</div>
</section>

<section className="bg-black border-white/5 border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="relative rounded-3xl border border-white/10 bg-zinc-900 overflow-hidden p-12 md:p-24 text-center">

<div className="absolute inset-0 bg-gradient-to-b from-zinc-800/50 to-black pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-white/5 blur-3xl pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl text-white tracking-tighter mb-6 font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>Ready to elevate your vision?</h2>
<p className="text-zinc-400 text-base md:text-lg mb-10 max-w-2xl mx-auto font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Let's discuss how we can bring precision and art to your next project. We are currently accepting commissions for late 2024.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                            Start a Conversation
                        </button>
<button className="w-full sm:w-auto px-8 py-3 bg-transparent border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/5 transition-colors tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                            Download Portfolio
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="overflow-hidden bg-[#050505] w-full border-white/5 border-t pt-20 pb-0 relative">

<div className="flex -translate-y-1/2 z-30 mt-16 mb-16 pr-6 pl-6 absolute top-0 right-0 left-0 justify-center">
<div className="bg-[#0A0A0A] border border-white/10 rounded-full py-2 pl-6 pr-2 flex items-center gap-4 shadow-2xl max-w-md w-full group hover:border-emerald-500/50 transition-colors backdrop-blur-xl">
<input className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-neutral-600 font-sans focus:ring-0" placeholder="Subscribe to our design digest..." type="email"/>
<button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-emerald-400 hover:text-black transition-colors shrink-0">
<iconify-icon icon="lucide:arrow-right" strokeWidth="2.5" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="max-w-7xl mx-auto w-full px-6 lg:px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-20">

<div className="lg:col-span-7 flex flex-col justify-center">
<h2 className="lg:text-[6rem] leading-[0.9] text-5xl text-white tracking-tighter mb-10 font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>
                Design.
                <span className="text-zinc-700 font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>Build.</span>
                Inhabit.
            </h2>
<div className="flex flex-wrap gap-8 opacity-40 hover:opacity-100 transition-opacity duration-500">
<span className="font-bold tracking-tighter text-lg text-white font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>DEZEEN</span>
<span className="font-bold tracking-tighter text-lg text-white font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>ARCHDAILY</span>
<span className="font-bold tracking-tighter text-lg text-white font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>DOMUS</span>
<span className="font-bold tracking-tighter text-lg text-white font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>WALLPAPER*</span>
</div>
</div>

<div className="lg:col-span-5 flex lg:justify-end items-center">
<div className="w-full max-w-sm bg-white p-8 relative overflow-hidden group transform hover:-translate-y-2 transition-transform duration-500 rounded-2xl">

<iconify-icon className="absolute -right-4 -top-4 text-zinc-100 rotate-12 -z-0" icon="lucide:ruler" width="140"></iconify-icon>
<div className="relative z-10">
<h3 className="text-2xl text-black tracking-tight mb-4 font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>Start Your Vision</h3>
<p className="leading-relaxed text-sm font-medium text-zinc-600 mb-8 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Ready to elevate your environment? Access our full portfolio and schedule a consultation.
                    </p>
<div className="flex border-zinc-200 border-t pt-4 items-center justify-between">
<span className="text-xs font-bold uppercase tracking-widest text-black font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Booking 2025</span>
<div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="2" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full overflow-hidden pointer-events-none select-none pt-12">
<h1 className="text-[20vw] leading-none text-white/5 text-center -mb-12 tracking-tighter font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>
            ARSITEK.
        </h1>
<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent"></div>
</div>

<div className="absolute bottom-6 w-full flex justify-center z-30">
<div className="flex gap-6 text-[10px] text-zinc-600 font-mono uppercase tracking-widest bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
<a className="hover:text-zinc-400 transition-colors font-manrope" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Privacy</a>
<span className="font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>© 2024 Arsitek Studio</span>
<a className="hover:text-zinc-400 transition-colors font-manrope" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Terms</a>
</div>
</div>
</footer>

    </>
  );
}
