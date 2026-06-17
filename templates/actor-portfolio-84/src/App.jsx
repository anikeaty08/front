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



        // Initialize Icons
        lucide.createIcons();

        // Simple Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('transition-all', 'duration-1000', 'ease-out');
            observer.observe(section);
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
      

<nav className="fixed w-full z-50 glass-nav border-b border-white/5 transition-all duration-300">
<div className="max-w-screen-2xl mx-auto px-6 py-5 flex justify-between items-center">
<a className="text-sm font-semibold tracking-tighter uppercase text-white hover:text-neutral-400 transition-colors" href="#">
                JONATHAN DOE
            </a>
<div className="hidden md:flex space-x-8">
<a className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#works">Works</a>
<a className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#resume">Credits</a>
<a className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#media">Reel</a>
<a className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<button className="md:hidden text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<header className="relative min-h-screen w-full grid lg:grid-cols-12 overflow-hidden pt-20 lg:pt-0">

<div className="lg:col-span-5 flex flex-col lg:p-16 z-10 lg:bg-none bg-gradient-to-t from-black via-black/50 to-transparent pt-8 pr-8 pb-20 pl-8 justify-end">
<div className="space-y-6">
<div className="flex items-center gap-3">
<div className="h-[1px] w-8 bg-neutral-500"></div>
<span className="uppercase text-xs text-neutral-400 tracking-widest font-mono-tech">Los Angeles </span>
</div>
<h1 className="lg:text-9xl leading-[0.85] text-7xl font-semibold text-white tracking-tighter">Abraxaz<br/> <span className="text-neutral-500">Sanchez</span></h1>
<p className="leading-relaxed text-sm text-neutral-400 max-w-md pt-4">Precision in performance. </p>
<div className="pt-8">
<a className="group inline-flex items-center gap-4 text-sm font-medium text-white border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300" href="#media">
                        WATCH REEL
                        <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="absolute inset-0 lg:static lg:col-span-7 h-full w-full bg-neutral-900">
<img alt="Jonathan Doe Portrait" className="h-full w-full object-cover object-center grayscale contrast-125 brightness-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9e63ca83-4c5c-4070-8f0c-2c24c6a84ea4_800w.jpg?w=800&amp;q=80" style={{}}/>
</div>
</header>

<section className="transition-all duration-1000 ease-out bg-[#080808] border-neutral-900 border-t pt-24 pb-24" id="works">
<div className="px-6 lg:px-16 mb-12 flex justify-between items-end">
<div className="">
<span className="text-xs font-mono-tech uppercase tracking-widest text-neutral-500 block mb-2">Selected Works</span>
<h2 className="text-3xl font-semibold tracking-tight">FEATURED PERFORMANCES</h2>
</div>
<div className="hidden lg:flex gap-2 text-neutral-500">
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
<span className="text-xs font-mono-tech uppercase">Scroll</span>
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="flex overflow-x-auto hide-scroll snap-x snap-mandatory gap-6 lg:px-16 pr-6 pb-12 pl-6 gap-x-6 gap-y-6">

<div className="card-hover group min-w-[85vw] md:min-w-[45vw] lg:min-w-[30vw] snap-center cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 mb-6">
<img alt="Film Still" className="image-reveal w-full h-full object-cover opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 to-transparent">
<span className="text-xs font-mono-tech uppercase text-neutral-400 border border-neutral-700 px-2 py-1 bg-black/50 backdrop-blur-sm">Film</span>
</div>
</div>
<div className="flex justify-between items-start border-t border-neutral-800 pt-4">
<div className="">
<h3 className="text-xl font-medium tracking-tight group-hover:text-white transition-colors">THE SILENT ECHO</h3>
<p className="text-sm text-neutral-500 mt-1">Role: Detective Miller</p>
</div>
<span className="text-sm font-mono-tech text-neutral-600">2023</span>
</div>
</div>

<div className="card-hover group min-w-[85vw] md:min-w-[45vw] lg:min-w-[30vw] snap-center cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 mb-6">
<img alt="Film Still" className="image-reveal w-full h-full object-cover opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&amp;w=2525&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 to-transparent">
<span className="text-xs font-mono-tech uppercase text-neutral-400 border border-neutral-700 px-2 py-1 bg-black/50 backdrop-blur-sm">Series</span>
</div>
</div>
<div className="flex justify-between items-start border-t border-neutral-800 pt-4">
<div>
<h3 className="text-xl font-medium tracking-tight group-hover:text-white transition-colors">ECLIPSE PROTOCOL</h3>
<p className="text-sm text-neutral-500 mt-1">Role: Marcus Kane (Lead)</p>
</div>
<span className="text-sm font-mono-tech text-neutral-600">2022</span>
</div>
</div>

<div className="card-hover group min-w-[85vw] md:min-w-[45vw] lg:min-w-[30vw] snap-center cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 mb-6">
<img alt="Stage Still" className="image-reveal w-full h-full object-cover opacity-80 group-hover:opacity-100 grayscale" src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 to-transparent">
<span className="text-xs font-mono-tech uppercase text-neutral-400 border border-neutral-700 px-2 py-1 bg-black/50 backdrop-blur-sm">Stage</span>
</div>
</div>
<div className="flex justify-between items-start border-t border-neutral-800 pt-4">
<div>
<h3 className="text-xl font-medium tracking-tight group-hover:text-white transition-colors">MACBETH</h3>
<p className="text-sm text-neutral-500 mt-1">Role: Macbeth</p>
</div>
<span className="text-sm font-mono-tech text-neutral-600">2021</span>
</div>
</div>
</div>
</section>

<section className="lg:px-16 transition-all duration-1000 ease-out max-w-screen-2xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="resume">
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-4 sticky h-fit top-32">
<span className="text-xs font-mono-tech uppercase tracking-widest text-neutral-500 block mb-4">Specifications</span>
<h2 className="text-4xl font-semibold tracking-tighter mb-6">CREDITS</h2>
<p className="leading-relaxed text-sm text-neutral-400 mb-8">A breakdown of recent productions across film and theatre. Unrepresented/Non-Union.</p>
<a className="inline-flex items-center uppercase hover:text-neutral-300 hover:border-neutral-300 transition-all text-xl text-white tracking-widest font-mono-tech border-white border-b pb-1" href="#">
  Download Full Resume <svg className="lucide lucide-download w-3 h-3 ml-2" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</a>
</div>

<div className="lg:col-span-8">

<div className="mb-12">
<div className="flex items-center gap-4 mb-6">
<span className="uppercase text-xs text-neutral-500 font-mono-tech">01 —Theatre</span>
<div className="h-[1px] flex-grow bg-neutral-800"></div>
</div>
<div className="space-y-0">

<div className="group grid grid-cols-1 md:grid-cols-12 gap-4 hover:bg-neutral-900/50 transition-colors border-neutral-900 border-b pt-4 pr-2 pb-4 pl-2 gap-x-4 gap-y-4 items-baseline">
<div className="md:col-span-2 text-xs text-neutral-500 font-mono-tech">2025</div>
<div className="md:col-span-5 group-hover:translate-x-2 transition-transform duration-300 text-lg font-medium text-white tracking-tight">Cuarto Dorado</div>
<div className="md:col-span-3 text-sm text-neutral-400">Male Lead / Juan</div>
<div className="md:col-span-2 uppercase text-xs text-neutral-600 text-right">Theatre of Note</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-4 border-b border-neutral-900 items-baseline hover:bg-neutral-900/50 transition-colors px-2">
<div className="md:col-span-2 text-xs text-neutral-500 font-mono-tech">2025</div>
<div className="md:col-span-5 group-hover:translate-x-2 transition-transform duration-300 text-lg font-medium text-white tracking-tight">Prince of Egypt Musical</div>
<div className="md:col-span-3 text-sm text-neutral-400">Ensemble</div>
<div className="md:col-span-2 uppercase text-xs text-neutral-600 text-right">Casa 0101</div>
</div>

</div>
</div>

<div className="mb-12">
<div className="flex items-center gap-4 mb-6">
<span className="uppercase text-xs text-neutral-500 font-mono-tech">02 — Film</span>
<div className="h-[1px] flex-grow bg-neutral-800"></div>
</div>
<div className="space-y-0">

<div className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-4 border-b border-neutral-900 items-baseline hover:bg-neutral-900/50 transition-colors px-2">
<div className="md:col-span-2 text-xs text-neutral-500 font-mono-tech">2025</div>
<div className="md:col-span-5 group-hover:translate-x-2 transition-transform duration-300 text-lg font-medium text-white tracking-tight">Tacos El Mas Cabron</div>
<div className="md:col-span-3 text-sm text-neutral-400">El Chef</div>
<div className="md:col-span-2 uppercase text-xs text-neutral-600 text-right">Independent</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-4 border-b border-neutral-900 items-baseline hover:bg-neutral-900/50 transition-colors px-2">
<div className="md:col-span-2 text-xs text-neutral-500 font-mono-tech">2024</div>
<div className="md:col-span-5 group-hover:translate-x-2 transition-transform duration-300 text-lg font-medium text-white tracking-tight">Re-Strung</div>
<div className="md:col-span-3 text-sm text-neutral-400">Paramedic</div>
<div className="md:col-span-2 uppercase text-xs text-neutral-600 text-right">Independent</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="transition-all duration-1000 ease-out bg-neutral-900/30 pt-24 pb-24" id="media">
<div className="max-w-7xl mx-auto px-6 lg:px-16">
<div className="flex justify-between items-end mb-8">
<h2 className="text-3xl font-semibold tracking-tight">DEMO REEL</h2>
<span className="text-xs font-mono-tech text-neutral-500">03:45 — 4K</span>
</div>
<div className="relative w-full aspect-video bg-black group overflow-hidden border border-white/5 shadow-2xl shadow-black/50">

<img alt="Reel Cover" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center">
<button className="relative group/btn">
<div className="absolute inset-0 bg-white/10 rounded-full blur-xl group-hover/btn:blur-2xl transition-all duration-500"></div>
<div className="relative w-24 h-24 rounded-full border border-white/30 flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover/btn:scale-110 transition-transform duration-500">
<svg className="lucide lucide-play w-8 h-8 fill-white text-white ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</button>
</div>

<div className="absolute top-6 left-6 flex gap-4">
<span className="px-2 py-1 border border-white/10 text-[10px] tracking-widest uppercase bg-black/40 backdrop-blur-md text-neutral-300">RAW</span>
<span className="px-2 py-1 border border-white/10 text-[10px] tracking-widest uppercase bg-black/40 backdrop-blur-md text-neutral-300">REC.709</span>
</div>
</div>
</div>
</section>

<footer className="lg:px-16 bg-black border-neutral-900 border-t pt-32 pr-6 pb-12 pl-6" id="contact">
<div className="grid lg:grid-cols-2 mb-24 gap-x-16 gap-y-16">
<div className="">
<h2 className="text-5xl lg:text-7xl font-semibold tracking-tighter mb-8 leading-none">
                    LET'S WORK<br/>TOGETHER
                </h2>
<a className="inline-block hover:text-white transition-colors hover:border-white text-xl text-neutral-400 border-neutral-800 border-b pb-1" href="mailto:hello@jonathandoe.com">sanchezabraxaz@gmail.com</a>
</div>
<div className="grid grid-cols-2 gap-8 text-sm">
<div className="space-y-6">
<span className="text-xs font-mono-tech uppercase tracking-widest text-neutral-500">Representation</span>
<div className="">
<p className="text-neutral-500">Theatrical &amp; Commercial</p>
<p className="text-neutral-500">Los Angeles</p>
</div>
<div className="">
<p className="font-medium text-white mb-1">Independent Talent</p>
<p className="text-neutral-500"></p>
<p className="text-neutral-500">Los Angeles</p>
</div>
</div>
<div className="space-y-6">
<span className="text-xs font-mono-tech uppercase tracking-widest text-neutral-500">Social</span>
<ul className="space-y-2">
<li><a className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2" href="#">Instagram <svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></li>
<li><a className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2" href="#">IMDb <svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></li>
<li className=""><a className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2" href="#">Twitter/X <svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></li>
</ul>
</div>
</div>
</div>
<div className="flex justify-between items-end border-t border-neutral-900 pt-8">
<span className="text-xs text-neutral-700">© 2025 Abraxaz Sanchez</span>
<div className="flex gap-4">
<span className="text-[10px] uppercase text-neutral-700 font-mono-tech"></span>
</div>
</div>
</footer>


    </>
  );
}
