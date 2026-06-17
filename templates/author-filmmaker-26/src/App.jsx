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
      

<nav className="fixed w-full top-0 z-50 transition-all duration-300 bg-[#F9F7F2]/90 backdrop-blur-sm border-b border-[#2C2C2C]/5">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="font-serif-display text-xl tracking-tighter text-[#1A1A1A] z-50 relative" href="#">
                AM<span className="text-[#C8A398]">.</span>
</a>

<div className="hidden md:flex items-center space-x-10 font-sans-ui text-xs uppercase tracking-[0.15em] text-[#5A5A5A]">
<a className="hover:text-[#C8A398] transition-colors duration-300 relative group" href="#books">
                    Books
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C8A398] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-[#C8A398] transition-colors duration-300 relative group" href="#film-studio">
                    Cinema
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C8A398] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-[#C8A398] transition-colors duration-300 relative group" href="#about">
                    Journal
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C8A398] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="px-5 py-2 border border-[#2C2C2C]/20 rounded-full hover:bg-[#2C2C2C] hover:text-[#F9F7F2] transition-all duration-300" href="#contact">
                    Contact
                </a>
</div>

<button className="md:hidden text-[#2C2C2C]">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<header className="relative w-full min-h-screen flex items-center justify-center pt-20">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-b from-[#F9F7F2]/40 via-[#F9F7F2]/20 to-[#F9F7F2] z-10"></div>
<img alt="Sunlight hitting a wall" className="w-full h-full object-cover object-center opacity-90 grayscale-[10%] reveal-image" src="https://images.unsplash.com/photo-1507842217121-9e6914d40368?q=80&amp;w=2500&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="z-20 text-center max-w-5xl mx-auto px-6 mt-12">
<div className="fade-in-up">
<span className="inline-block py-1 px-3 border border-[#2C2C2C]/30 rounded-full text-[#2C2C2C] text-[10px] font-sans-ui uppercase tracking-[0.2em] mb-8 bg-[#F9F7F2]/50 backdrop-blur-md">
                    Est. 2024
                </span>
</div>
<h1 className="fade-in-up delay-100 font-serif-display text-5xl md:text-7xl lg:text-8xl text-[#1A1A1A] leading-[1.05] tracking-tight mb-8">
                The architecture of<br/><span className="italic text-[#6B6B6B] font-serif-display">human emotion</span>.
            </h1>
<p className="fade-in-up delay-200 font-serif-body text-lg md:text-xl text-[#2C2C2C]/70 max-w-2xl mx-auto leading-relaxed">
                Alessandra Marba is a writer and filmmaker dedicated to stories that reveal the quiet beauty, resilience, and truth of the human experience.
            </p>
<div className="mt-16 fade-in-up delay-300 flex flex-col items-center gap-4">
<a className="w-12 h-12 rounded-full border border-[#2C2C2C]/20 flex items-center justify-center text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white transition-all duration-500 group" href="#featured">
<svg className="lucide lucide-arrow-down w-4 h-4 group-hover:translate-y-1 transition-transform" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</a>
<span className="text-[10px] font-sans-ui uppercase tracking-widest text-[#2C2C2C]/40">Explore</span>
</div>
</div>
</header>

<section className="md:py-32 bg-[#F9F7F2] pt-24 pb-24" id="featured">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#2C2C2C]/10 pb-6">
<h2 className="font-serif-display text-3xl md:text-4xl text-[#1A1A1A]">Curated Works</h2>
<div className="hidden md:block text-right">
<p className="font-sans-ui text-xs uppercase tracking-widest text-[#6B6B6B]">Literature • Cinema • Truth</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">

<a className="group block cursor-pointer" href="#books">
<div className="aspect-[4/5] overflow-hidden bg-[#E5E0D8] relative mb-6">
<div className="group-hover:bg-black/10 transition-colors duration-500 z-10 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Books" className="transition-transform duration-700 group-hover:scale-105 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a838aaeb-6b3c-4439-b190-d8899bc6f6e8_800w.jpg" style={{}}/>
<div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
<span className="inline-flex items-center gap-2 bg-white px-4 py-2 text-xs font-sans-ui uppercase tracking-widest text-black">
                                Read More <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif-display text-2xl text-[#1A1A1A] mb-1">Literature</h3>
<p className="text-sm font-sans-ui text-[#6B6B6B]">Memoirs &amp; Essays</p>
</div>
<span className="text-xs font-sans-ui border border-[#2C2C2C]/20 px-2 py-1 rounded-full text-[#6B6B6B]">01</span>
</div>
</a>

<a className="group block cursor-pointer md:mt-16" href="#film-studio">
<div className="aspect-[4/5] overflow-hidden bg-[#E5E0D8] mb-6 relative">
<div className="group-hover:bg-black/10 transition-colors duration-500 bg-black/0 z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Filmmaking" className="transition-transform duration-700 group-hover:scale-105 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7b40cd21-c1db-4976-a9ca-5aff70865054_800w.jpg" style={{}}/>
<div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
<span className="inline-flex items-center gap-2 bg-white px-4 py-2 text-xs font-sans-ui uppercase tracking-widest text-black">
                                View Studio <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="font-serif-display text-2xl text-[#1A1A1A] mb-1">Yo's Filmes</h3>
<p className="text-sm font-sans-ui text-[#6B6B6B]">Documentary Studio</p>
</div>
<span className="text-xs font-sans-ui border border-[#2C2C2C]/20 px-2 py-1 rounded-full text-[#6B6B6B]">02</span>
</div>
</a>

<a className="group block cursor-pointer" href="#about">
<div className="aspect-[4/5] overflow-hidden bg-[#E5E0D8] relative mb-6">
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
<img alt="Portrait" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b748f68-f793-4516-89ce-c25a396dbb10_800w.jpg" style={{}}/>
<div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
<span className="inline-flex items-center gap-2 bg-white px-4 py-2 text-xs font-sans-ui uppercase tracking-widest text-black">
                                About Me <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif-display text-2xl text-[#1A1A1A] mb-1">The Author</h3>
<p className="text-sm font-sans-ui text-[#6B6B6B]">Alessandra Marba</p>
</div>
<span className="text-xs font-sans-ui border border-[#2C2C2C]/20 px-2 py-1 rounded-full text-[#6B6B6B]">03</span>
</div>
</a>
</div>
</div>
</section>

<section className="md:py-40 overflow-hidden bg-white pt-24 pb-24 relative" id="books">

<div className="absolute top-10 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none">
<h2 className="text-[20vw] font-serif-display whitespace-nowrap leading-none text-[#1A1A1A]">Nua e Crua</h2>
</div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

<div className="w-full lg:w-5/12">
<div className="relative group">

<div className="aspect-[3/4] bg-[#D4C5B0] shadow-2xl relative overflow-hidden rounded-[2px] transform transition-transform duration-700 group-hover:-translate-y-2">
<div className="bg-center opacity-40 mix-blend-multiply bg-[url('https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover absolute top-0 right-0 bottom-0 left-0 grayscale"></div>
<div className="absolute bottom-12 left-0 right-0 text-center">
<span className="font-serif-display text-3xl text-[#2C2C2C] tracking-tighter mix-blend-overlay">Nua e Crua</span>
</div>
</div>

<div className="absolute -bottom-6 -right-6 w-full h-full border border-[#D4C5B0] -z-10 rounded-[2px]"></div>
</div>
</div>

<div className="w-full lg:w-7/12">
<div className="flex items-center gap-4 mb-6">
<span className="w-12 h-[1px] bg-[#C8A398]"></span>
<span className="text-[#C8A398] font-sans-ui text-xs uppercase tracking-[0.2em]">Latest Publication</span>
</div>
<h2 className="font-serif-display text-5xl md:text-6xl text-[#1A1A1A] mb-6 tracking-tight leading-none">
                        Nua e Crua
                    </h2>
<p className="font-serif-display text-xl md:text-2xl text-[#6B6B6B] italic mb-10">
                        "Rebirth is not a moment — it’s a decision."
                    </p>
<div className="prose prose-lg text-[#2C2C2C]/70 font-serif-body leading-relaxed mb-10">
<p className="mb-4">
                            A raw, unfiltered journey through the landscapes of illness, motherhood, and vulnerability. This memoir serves as an intimate blueprint for finding dignity in the darkest moments of the human experience.
                        </p>
<p>
                            Written with the intent to heal not just the writer, but the reader. A portion of all proceeds supports <span className="text-[#2C2C2C] border-b border-[#C8A398]">INCA</span> (National Cancer Institute).
                        </p>
</div>
<div className="flex flex-wrap gap-6">
<button className="bg-[#1A1A1A] text-white px-8 py-4 rounded-sm font-sans-ui text-xs uppercase tracking-widest hover:bg-[#C8A398] transition-colors duration-300">
                            Purchase Copy
                        </button>
<button className="flex items-center gap-2 px-6 py-4 font-sans-ui text-xs uppercase tracking-widest text-[#1A1A1A] hover:text-[#C8A398] transition-colors">
<svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg> Read Excerpt
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#121212] text-[#F2ECE4] relative overflow-hidden" id="film-studio">

<div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-2 lg:h-full lg:border-r lg:border-white/10 lg:pr-8">
<h2 className="font-serif-display text-4xl lg:text-5xl tracking-tight leading-none lg:rotate-180 lg:[writing-mode:vertical-rl] lg:h-[400px] text-white/90">
                        Yo’s Filmes
                     </h2>
</div>

<div className="lg:col-span-10">
<p className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#C8A398] mb-8">Audiovisual Atelier</p>

<div className="relative group cursor-pointer overflow-hidden rounded-sm mb-16">
<div className="aspect-video w-full relative overflow-hidden">
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-play w-6 h-6 text-white fill-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<img alt="Rocinha Cinematic Shot" className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1579705973302-60173c24204d?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="mt-6 flex justify-between items-end">
<div>
<h3 className="font-serif-display text-3xl mb-2">Prismas</h3>
<p className="font-sans-ui text-sm text-white/50 max-w-lg">A documentary exploring identity and culture within Rocinha, Brazil's largest favela.</p>
</div>
<span className="text-[#C8A398] font-sans-ui text-xs border border-[#C8A398]/30 px-3 py-1 rounded-full">Post-Production</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
<div>
<svg className="lucide lucide-aperture w-6 h-6 text-[#C8A398] mb-4" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
<h4 className="font-serif-display text-xl mb-2">Intimate Lens</h4>
<p className="text-sm text-white/50 font-serif-body">Filmmaking that prioritizes closeness, trust, and emotional proximity.</p>
</div>
<div>
<svg className="lucide lucide-users w-6 h-6 text-[#C8A398] mb-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h4 className="font-serif-display text-xl mb-2">Community First</h4>
<p className="text-sm text-white/50 font-serif-body">Stories told with the community, not just about them. Respect is our currency.</p>
</div>
<div>
<svg className="lucide lucide-film w-6 h-6 text-[#C8A398] mb-4" data-lucide="film" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
<h4 className="font-serif-display text-xl mb-2">Artisanal Craft</h4>
<p className="text-sm text-white/50 font-serif-body">Every frame is composed with intention, patience, and artistic integrity.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F9F7F2]" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative">
<img alt="Alessandra Marba" className="w-full aspect-[3/4] object-cover grayscale-[10%] rounded-sm shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b748f68-f793-4516-89ce-c25a396dbb10_1600w.jpg" style={{}}/>
<div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#E5E0D8] rounded-full flex items-center justify-center text-[#1A1A1A]">
<svg className="w-20 h-20 animate-spin-slow" viewbox="0 0 100 100">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="curve"></path>
<text className="text-[10px] uppercase font-sans-ui tracking-widest font-bold fill-current">
<textpath href="#curve">
                                    Storyteller • Filmmaker • Writer •
                                </textpath>
</text>
</svg>
</div>
</div>
<div>
<h2 className="font-serif-display text-4xl md:text-5xl text-[#1A1A1A] mb-8 tracking-tight">
                        A life shaped by stories.
                    </h2>
<div className="space-y-6 font-serif-body text-lg text-[#2C2C2C]/70 leading-relaxed">
<p>
                            I have always lived between worlds—Brazil, England, Italy. My life has been a study in contrasts: the discipline of work and the fluidity of art; the noise of the city and the silence of recovery.
                        </p>
<p>
                            Stories have been my sanctuary. Whether through the lens of a camera or the ink on a page, my mission is singular: to hold space for the truths that often go unspoken.
                        </p>
</div>
<div className="mt-12 pt-8 border-t border-[#2C2C2C]/10">
<p className="font-serif-display italic text-2xl text-[#1A1A1A] mb-4">"I write to remember who we are."</p>
<img alt="Signature" className="h-8 opacity-40 mix-blend-multiply" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" style={{}}/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#EBE7DF] border-t border-b border-[#D4C5B0]/30">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="font-sans-ui text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-4 block">In Development</span>
<h3 className="font-serif-display text-4xl text-[#1A1A1A] mb-2">Destino e Honra</h3>
<p className="font-serif-body italic text-[#6B6B6B] mb-8">A poetic fantasy exploring the architecture of memory.</p>
<div className="w-16 h-[1px] bg-[#2C2C2C]/20 mx-auto"></div>
</div>
</section>

<section className="py-32 bg-[#F9F7F2]" id="contact">
<div className="max-w-xl mx-auto px-6">
<div className="text-center mb-16">
<svg className="lucide lucide-feather w-8 h-8 text-[#C8A398] mx-auto mb-6" data-lucide="feather" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg>
<h2 className="font-serif-display text-4xl md:text-5xl text-[#1A1A1A] mb-6 tracking-tight">Begin a conversation.</h2>
<p className="font-serif-body text-[#2C2C2C]/60 text-lg">
                    For collaborations, press inquiries, or to simply share a story.
                </p>
</div>
<form className="space-y-8">
<div className="group relative">
<input className="block w-full bg-transparent border-b border-[#2C2C2C]/20 py-4 focus:outline-none focus:border-[#C8A398] transition-colors text-[#1A1A1A] font-serif-body peer" id="name" placeholder=" " type="text"/>
<label className="absolute left-0 top-4 text-[#2C2C2C]/40 font-sans-ui text-xs uppercase tracking-widest pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[#C8A398] peer-focus:text-[10px] peer-[&amp;:not(:placeholder-shown)]:-top-4 peer-[&amp;:not(:placeholder-shown)]:text-[10px]" htmlFor="name">Name</label>
</div>
<div className="group relative">
<input className="block w-full bg-transparent border-b border-[#2C2C2C]/20 py-4 focus:outline-none focus:border-[#C8A398] transition-colors text-[#1A1A1A] font-serif-body peer" id="email" placeholder=" " type="email"/>
<label className="absolute left-0 top-4 text-[#2C2C2C]/40 font-sans-ui text-xs uppercase tracking-widest pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[#C8A398] peer-focus:text-[10px] peer-[&amp;:not(:placeholder-shown)]:-top-4 peer-[&amp;:not(:placeholder-shown)]:text-[10px]" htmlFor="email">Email</label>
</div>
<div className="group relative">
<textarea className="block w-full bg-transparent border-b border-[#2C2C2C]/20 py-4 focus:outline-none focus:border-[#C8A398] transition-colors text-[#1A1A1A] font-serif-body peer resize-none" id="message" placeholder=" " rows="3"></textarea>
<label className="absolute left-0 top-4 text-[#2C2C2C]/40 font-sans-ui text-xs uppercase tracking-widest pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[#C8A398] peer-focus:text-[10px] peer-[&amp;:not(:placeholder-shown)]:-top-4 peer-[&amp;:not(:placeholder-shown)]:text-[10px]" htmlFor="message">Message</label>
</div>
<div className="pt-4 text-center">
<button className="inline-block bg-[#1A1A1A] text-white px-10 py-4 rounded-full font-sans-ui text-xs uppercase tracking-[0.15em] hover:bg-[#C8A398] transition-all duration-300 shadow-xl shadow-black/5" type="submit">
                        Send Message
                    </button>
</div>
</form>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-[#2C2C2C]/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-10">
<div>
<h4 className="font-serif-display text-3xl text-[#1A1A1A] tracking-tight mb-2">Alessandra Marba</h4>
<p className="font-sans-ui text-xs uppercase tracking-widest text-[#6B6B6B]">Writer • Filmmaker</p>
</div>
<div className="flex gap-6">
<a className="w-10 h-10 rounded-full border border-[#2C2C2C]/10 flex items-center justify-center text-[#2C2C2C]/60 hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all duration-300" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-full border border-[#2C2C2C]/10 flex items-center justify-center text-[#2C2C2C]/60 hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all duration-300" href="#">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
<a className="w-10 h-10 rounded-full border border-[#2C2C2C]/10 flex items-center justify-center text-[#2C2C2C]/60 hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all duration-300" href="#">
<svg className="lucide lucide-youtube w-4 h-4" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
</div>
<div className="border-t border-[#2C2C2C]/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-sans-ui uppercase tracking-widest text-[#2C2C2C]/40 gap-4">
<div className="flex gap-6">
<a className="hover:text-[#1A1A1A] transition-colors" href="#">Books</a>
<a className="hover:text-[#1A1A1A] transition-colors" href="#">Studio</a>
<a className="hover:text-[#1A1A1A] transition-colors" href="#">Journal</a>
</div>
<div>
                    © 2024 Alessandra Marba.
                </div>
</div>
</div>
</footer>
<style>
        .animate-spin-slow {
            animation: spin 12s linear infinite;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    </style>


    </>
  );
}
