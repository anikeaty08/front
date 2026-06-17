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
      

<nav className="z-50 text-white w-full absolute top-0">
<div className="lg:px-12 flex h-28 max-w-[100rem] mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="hidden lg:flex items-center justify-end space-x-6 xl:space-x-10 w-2/5">
<a className="uppercase hover:text-gray-300 transition-colors whitespace-nowrap text-xs font-thin tracking-[0.2em]" href="#">Home</a>
<a className="text-xs tracking-[0.2em] uppercase font-thin hover:text-gray-300 transition-colors whitespace-nowrap" href="#">Mini Sessions •</a>
<a className="text-xs tracking-[0.2em] uppercase font-thin hover:text-gray-300 transition-colors whitespace-nowrap" href="#services">Services</a>
</div>

<div className="flex w-1/5 justify-center">
<a className="inline-block hover:opacity-80 transition-opacity" href="#">
<svg className="" fill="none" height="44" viewbox="0 0 48 48" width="44" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="21" cy="24" r="14" stroke="white" strokeWidth="1.5"></circle>
<circle className="" cx="27" cy="24" r="14" stroke="white" strokeWidth="1.5"></circle>
</svg>
</a>
</div>

<div className="hidden lg:flex xl:space-x-10 w-2/5 space-x-6 items-center justify-start">
<a className="text-xs tracking-[0.2em] uppercase font-thin hover:text-gray-300 transition-colors whitespace-nowrap" href="#portfolio">Portfolio •</a>
<a className="text-xs tracking-[0.2em] uppercase font-thin hover:text-gray-300 transition-colors whitespace-nowrap" href="#about">About</a>
<a className="text-xs tracking-[0.2em] uppercase font-thin hover:text-gray-300 transition-colors whitespace-nowrap" href="#inquire">Inquire</a>
</div>

<div className="z-40 pointer-events-none lg:right-12 lg:w-40 lg:h-40 opacity-90 mix-blend-difference w-36 h-36 absolute top-[85vh] right-4">
<svg className="overflow-visible w-full h-full" viewbox="0 0 100 100">
<g className="animate-spin" style={{animationDuration: '20s', transformOrigin: '50px 50px'}}>
<path d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" id="circlePath-spinning"></path>
<text className="uppercase font-thin fill-white tracking-widest" style={{fontSize: '8.5px'}}>
<textpath href="#circlePath-spinning" lengthadjust="spacing" startoffset="0%" textlength="219">
                    WEDDINGS • FILMS • PHOTOGRAPHY • OCEAN WEST STUDIO • 
                </textpath>
</text>
</g>
</svg>
</div><div className="lg:hidden flex w-2/5 items-center justify-end">
<button className="flex text-white items-center">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="flex flex-col md:pb-24 bg-[#0A0A0A] w-full h-screen pb-16 relative justify-end">
<div className="overflow-hidden bg-[#0A0A0A] w-full h-full absolute top-0 right-0 bottom-0 left-0">
<img alt="Wedding Celebration" className="object-center opacity-80 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="hero-gradient absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 lg:px-12 w-full max-w-[100rem] mr-auto ml-auto pr-6 pl-6 relative">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 gap-x-12 gap-y-12 items-end">
<div className="flex flex-col items-start space-y-8">
<h1 className="leading-[0.9] sm:text-7xl lg:text-8xl text-6xl text-white tracking-tighter font-google-sans-flex drop-shadow-lg">
                        Wedding<br/>Photography
                    </h1>
</div>
<div className="pb-2 md:pb-4">
<p className="md:text-3xl leading-relaxed text-2xl text-gray-200 font-google-sans-flex max-w-xl drop-shadow-md">
                        If you are looking for an authentic wedding photographer, capable of capturing the essence of your story and your emotions, you are in the right place. As a high-end wedding photographer, I go far beyond traditional photos, creating unique and unforgettable memories.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-12 bg-[#0A0A0A] border-b border-white/5">
<div className="max-w-[90rem] mx-auto px-6 text-center">
<p className="uppercase text-sm text-gray-500 tracking-[0.2em] font-extralight mb-8">Featured Elegance</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
<span className="font-narrow text-3xl tracking-tighter text-white uppercase">VOGUE</span>
<span className="font-narrow text-3xl tracking-tighter text-white italic">Brides</span>
<span className="font-narrow text-3xl tracking-tighter text-white uppercase">Style Me Pretty</span>
<span className="font-narrow text-3xl tracking-tighter text-white uppercase">The Knot</span>
</div>
</div>
</section>

<section className="md:py-32 overflow-hidden bg-[#FAF8F5] pt-24 pb-24 relative" id="about">
<div className="max-w-[85rem] mx-auto px-6 relative">

<div className="hidden md:block absolute right-6 lg:right-24 top-0 w-[160px] lg:w-[200px] aspect-[3/4] z-10 shadow-sm">
<img alt="Couple celebrating" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="hidden md:block lg:left-12 lg:w-[340px] aspect-[4/5] z-0 w-[280px] absolute bottom-12 left-0 shadow-sm">
<img alt="Bride portrait" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/124c3e04-0a44-49bd-a49f-8fb5ea170ba6_800w.webp"/>
</div>

<div className="flex flex-col z-20 relative items-center">


<div className="md:hidden w-40 aspect-[3/4] mb-12 self-end shadow-sm">
<img alt="Couple celebrating" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/124c3e04-0a44-49bd-a49f-8fb5ea170ba6_800w.webp"/>
</div>

<div className="text-center max-w-[56rem] mx-auto w-full z-20">
<h2 className="leading-[1.25] text-4xl font-light text-[#333333] tracking-tight font-google-sans-flex md:text-5xl md:leading-[1.2] lg:text-5xl">
                    Don’t be afraid! I understand your concerns and want to make it easier for you. My team and I will help you to feel <span className="italic text-[#738065] font-extralight">comfortable, natural</span> and have <span className="italic text-[#738065] font-extralight">fun</span>. Reflecting who you really are in the most <span className="italic text-[#738065] font-extralight">authentic</span> way possible, capture all excitement, tears, joy and create photos and videos which would last <span className="italic text-[#738065] font-extralight">forever</span>.
                </h2>
</div>

<div className="md:hidden aspect-[4/5] self-start w-full max-w-[280px] mt-12 shadow-sm">
<img alt="Bride portrait" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ef3bf00-951c-47fe-9da2-03d12e987f2c_800w.jpg"/>
</div>

<div className="md:mt-24 z-30 mt-16 relative">
</div>
</div>
</div>
</section>

<section className="md:py-32 overflow-hidden bg-[#020617] pt-24 pb-24 relative">

<div className="z-0 pointer-events-none absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(circle 500px at 50% 100px, rgba(249, 115, 22, 0.4), transparent)'}}></div>
<div className="lg:px-12 z-10 max-w-[90rem] mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col md:flex-row md:items-end md:mb-24 gap-8 mb-16 gap-x-8 gap-y-8 items-start justify-between">
<div className="">
<span className="uppercase block text-sm font-thin text-gray-500 tracking-[0.2em] mb-6">The Founders</span>
<h2 className="lg:text-6xl leading-tight text-5xl font-thin text-white tracking-tighter font-google-sans-flex">Vision &amp; Craft<br/>Behind the Lens</h2>
</div>
<div className="max-w-lg">
<p className="lg:text-2xl leading-relaxed text-xl text-gray-400 font-google-sans-flex">
                    With over a decade of documenting love stories across the globe, our foundation is built on blending editorial precision with raw, documentary intuition. We don't just take photographs; we craft heirlooms.
                </p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-12 lg:gap-24">

<div className="flex flex-col group">
<div className="md:h-[70vh] overflow-hidden h-[60vh] rounded-sm mb-8 relative">
<img alt="Elena West" className="group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000 ease-out opacity-80 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f86eb63-acc7-4c6f-b630-5fc34867737b_1600w.png"/>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-6 gap-2">
<h3 className="lg:text-5xl text-4xl font-thin text-white tracking-tighter font-google-sans-flex">Heena Malhotra</h3>
<span className="uppercase text-xs font-thin text-gray-500 tracking-[0.2em] mb-1">Lead Photographer</span>
</div>
<p className="leading-relaxed text-xl text-gray-400 font-google-sans-flex">Elena brings an editorial eye and an unobtrusive approach, ensuring every frame is intentionally composed to immortalize the fleeting atmosphere and unseen glances of your day.</p>
</div>

<div className="flex flex-col group md:mt-32">
<div className="relative h-[60vh] md:h-[70vh] overflow-hidden rounded-sm mb-8">
<img alt="Julian Ocean" className="group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000 ease-out opacity-80 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81d64b87-bc5b-46eb-b264-9801e29f9020_1600w.png"/>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-6 gap-2">
<h3 className="lg:text-5xl text-4xl font-thin text-white tracking-tighter font-google-sans-flex">Eddie Licea</h3>
<span className="uppercase tracking-[0.2em] text-xs font-thin text-gray-500 mb-1">Lead Cinematographer</span>
</div>
<p className="leading-relaxed text-xl text-gray-400 font-google-sans-flex">
                    Julian’s cinematic approach translates raw emotion into moving heirlooms. He focuses on narrative storytelling, preserving the grand architecture and dynamic energy of your celebration.
                </p>
</div>
</div>
</div>
</section>

<section className="md:py-32 overflow-hidden text-[#0A0A0A] bg-[#f9f9f9] pt-24 pb-24 relative" id="services">
<div className="lg:px-12 max-w-[100rem] mr-auto ml-auto pr-6 pl-6">

<div className="flex flex-col md:flex-row md:items-end gap-8 md:mb-24 mb-16 gap-x-8 gap-y-8 items-start justify-between">
<h2 className="leading-snug md:text-6xl lg:text-6xl text-5xl font-thin text-[#0A0A0A] tracking-tighter font-google-sans-flex mb-8">Service</h2>
<p className="max-w-md font-extralight text-[#0A0A0A]/60 text-lg lg:text-xl leading-relaxed md:pb-2">
                Our solutions are tailored to meet the unique vision of your celebration, providing artistry, reliability, and elegance at every stage of your journey.
            </p>
</div>

<div className="flex flex-col w-full">

<div className="group flex flex-col cursor-pointer transition-all duration-300 last:border-b lg:flex-row lg:items-center lg:pt-8 lg:pb-8 w-full border-[#0A0A0A]/20 border-t pt-8 pb-8 relative items-start justify-between">

<div className="lg:left-[60%] -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-20 pointer-events-none hidden lg:block opacity-0 absolute top-1/2 left-[55%] scale-75">
<div className="overflow-hidden bg-zinc-900 w-[450px] h-[320px] border-white/10 rounded-xl relative shadow-2xl">
<img alt="Wedding Photography" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="flex transition-colors bg-black/5 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#455CE9] text-white shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-500 delay-100">
<span className="text-sm font-extralight uppercase tracking-widest">View</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row lg:items-center transition-opacity duration-300 lg:group-hover:opacity-40 z-10 w-full relative items-start justify-between">

<div className="lg:w-1/3 lg:mb-0 transition-transform duration-500 lg:group-hover:translate-x-4 w-full mb-0">
<h3 className="md:text-5xl lg:text-3xl text-4xl font-thin text-[#0A0A0A] tracking-tighter font-google-sans-flex mt-0 mr-0 mb-0 ml-0">Editorial &amp; Timeless Stills</h3>
</div>

<div className="lg:w-1/3 lg:mb-0 transition-transform duration-500 lg:group-hover:translate-x-2 w-full mb-0">
<p className="leading-relaxed lg:pr-8 text-lg text-[#0A0A0A]/70 font-extralight pr-8">
                            Curated, timeless imagery that captures both the grand moments and the quiet, unseen details. We focus on natural light, sophisticated composition, and raw emotion to build a visual legacy that feels authentically you.
                        </p>
</div>

<div className="lg:w-auto flex flex-row lg:justify-end gap-8 transition-transform duration-500 lg:group-hover:-translate-x-4 w-full items-center justify-between">
<span className="uppercase text-sm text-[#0A0A0A]/60 tracking-widest font-google-sans-flex">Photography</span>
</div>
</div>

<div className="w-full mt-6 lg:hidden rounded-xl overflow-hidden shadow-md relative">
<img alt="Wedding Photography" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 flex items-center justify-center bg-white/90 backdrop-blur-sm text-[#0A0A0A] px-6 py-2 rounded-full border border-black/10">
<span className="text-xs font-extralight uppercase tracking-widest">View</span>
</div>
</div>
</div>

<div className="group flex flex-col cursor-pointer transition-all duration-300 last:border-b lg:flex-row lg:items-center lg:pt-8 w-full border-[#0A0A0A]/20 border-t pt-8 pb-8 relative items-start justify-between">

<div className="lg:left-[60%] -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-20 pointer-events-none hidden lg:block opacity-0 absolute top-1/2 left-[55%] scale-75">
<div className="overflow-hidden bg-zinc-900 w-[450px] h-[320px] border-white/10 border-0 rounded-xl relative shadow-2xl">
<img alt="Wedding Videography" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/5 transition-colors">
<div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#455CE9] text-white shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-500 delay-100">
<span className="text-sm font-extralight uppercase tracking-widest">View</span>
</div>
</div>
</div>
</div>

<div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center transition-opacity duration-300 lg:group-hover:opacity-40 relative z-10">

<div className="w-full lg:w-1/3 mb-4 lg:mb-0 transition-transform duration-500 lg:group-hover:translate-x-4">
<h3 className="text-4xl font-thin text-[#0A0A0A] tracking-tighter font-google-sans-flex mt-0 mr-0 mb-0 ml-0 md:text-5xl lg:text-3xl">Cinematic &amp; Emotional Films</h3>
</div>

<div className="w-full lg:w-1/3 mb-6 lg:mb-0 transition-transform duration-500 lg:group-hover:translate-x-2">
<p className="text-lg font-extralight text-[#0A0A0A]/70 leading-relaxed lg:pr-8">
                            Moving portraiture that tells the narrative of your day. We create elegant, emotion-driven films scored to perfectly tailored music, preserving the atmosphere, the spoken vows, and the dynamic energy of your celebration.
                        </p>
</div>

<div className="w-full lg:w-auto flex flex-row items-center justify-between lg:justify-end gap-8 transition-transform duration-500 lg:group-hover:-translate-x-4">
<span className="uppercase text-sm text-[#0A0A0A]/60 tracking-widest font-google-sans-flex">Videography</span>
</div>
</div>

<div className="w-full mt-6 lg:hidden rounded-xl overflow-hidden shadow-md relative">
<img alt="Wedding Videography" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 flex items-center justify-center bg-white/90 backdrop-blur-sm text-[#0A0A0A] px-6 py-2 rounded-full border border-black/10">
<span className="text-xs font-extralight uppercase tracking-widest">View</span>
</div>
</div>
</div>

<div className="group flex flex-col cursor-pointer transition-all duration-300 last:border-b lg:flex-row lg:items-center w-full border-[#0A0A0A]/20 border-t pt-8 pb-8 relative items-start justify-between">

<div className="lg:left-[60%] -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-20 pointer-events-none hidden lg:block opacity-0 absolute top-1/2 left-[55%] scale-75">
<div className="overflow-hidden bg-zinc-900 w-[450px] h-[320px] border-white/10 ring-0 rounded-xl relative shadow-2xl">
<img alt="Live Broadcasting Ceremony" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/5 transition-colors">
<div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#455CE9] text-white shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-500 delay-100">
<span className="text-sm font-extralight uppercase tracking-widest">View</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row lg:items-center transition-opacity duration-300 lg:group-hover:opacity-40 z-10 w-full relative items-start justify-between">

<div className="w-full lg:w-1/3 mb-4 lg:mb-0 transition-transform duration-500 lg:group-hover:translate-x-4">
<h3 className="md:text-5xl lg:text-3xl text-4xl font-thin text-[#0A0A0A] tracking-tighter font-google-sans-flex mt-0 mr-0 mb-0 ml-0">Wedding Live Broadcasting</h3>
</div>

<div className="w-full lg:w-1/3 mb-6 lg:mb-0 transition-transform duration-500 lg:group-hover:translate-x-2">
<p className="text-lg font-extralight text-[#0A0A0A]/70 leading-relaxed lg:pr-8">
                            Share your most cherished moments in real-time with loved ones across the globe. We provide high-fidelity audio and multi-camera streaming to ensure no one misses your celebration.
                        </p>
</div>

<div className="w-full lg:w-auto flex flex-row items-center justify-between lg:justify-end gap-8 transition-transform duration-500 lg:group-hover:-translate-x-4">
<span className="uppercase text-sm text-[#0A0A0A]/60 tracking-widest font-google-sans-flex">Broadcasting</span>
</div>
</div>

<div className="w-full mt-6 lg:hidden rounded-xl overflow-hidden shadow-md relative">
<img alt="Live Broadcasting Ceremony" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 flex items-center justify-center bg-white/90 backdrop-blur-sm text-[#0A0A0A] px-6 py-2 rounded-full border border-black/10">
<span className="text-xs font-extralight uppercase tracking-widest">View</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 overflow-hidden text-white bg-[#0A0A0A] pt-24 pb-24" id="portfolio">
<div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row lg:mb-20 w-full h-full mb-16 gap-x-12 gap-y-12 items-start justify-between">
<div className="flex flex-col w-full h-full">
<div className="flex flex-col md:flex-row md:items-end w-full border-white/10 border-b mb-10 pb-0">
<h2 className="mb-6 md:mb-0 md:mr-auto lg:text-6xl leading-tight text-5xl font-thin text-white tracking-tighter font-google-sans-flex">Selected work</h2>
<div className="flex items-end space-x-6 lg:space-x-10">
<button className="text-sm lg:text-base uppercase tracking-[0.15em] text-white font-thin border-b border-white pb-3 -mb-[1px]">Photography</button>
<button className="lg:text-base uppercase hover:text-gray-300 transition-colors text-sm text-gray-500 tracking-[0.15em] font-extralight pb-3">Videography</button>
</div>
</div>
<div className="max-w-3xl">
<h2 className="leading-[0.95] md:text-7xl lg:text-[6.5rem] lg:text-xl text-6xl font-thin text-white tracking-tighter font-google-sans-flex mb-8"><span className="italic font-google-sans-flex">Moments</span> that<br/>are returned to</h2>
<p className="lg:text-2xl leading-relaxed text-xl text-gray-400 font-google-sans-flex max-w-xl">
                These photographs are chosen again and again, finding in them a familiar feeling of beauty and the exact mood. Look, get inspired and feel - perhaps they will respond to you today and become part of your legacy.
            </p>
</div>
</div>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-2 lg:gap-3 bg-black">
<div className="aspect-square bg-zinc-900 overflow-hidden relative group">
<img alt="Wedding Rings Detail" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1605027628030-9bb6f83535e6?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-zinc-900 overflow-hidden relative group">
<img alt="Bridal Bouquet Detail" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-2 lg:col-span-2 row-span-2 lg:row-span-2 relative overflow-hidden group bg-zinc-900 flex items-center justify-center">
<img alt="Bride Portrait Blur" className="blur-[4px] transition-transform duration-[2s] ease-out group-hover:scale-105 opacity-40 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="w-3/5 aspect-square relative z-10 shadow-2xl overflow-hidden border border-white/5">
<img alt="Bride Portrait Sharp" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" src="https://images.unsplash.com/photo-1509927083803-4bd519298ac4?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="aspect-square bg-zinc-900 overflow-hidden relative group">
<img alt="Wedding Table Setting" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square lg:p-8 flex flex-col bg-black border-white/5 border pt-6 pr-6 pb-6 pl-6 justify-between">
<h3 className="font-narrow text-4xl lg:text-5xl tracking-tighter text-white font-thin leading-none"><span className="italic font-extralight">Quiet</span> beauty</h3>
<p className="text-base text-gray-400 font-extralight leading-relaxed mt-auto max-w-[200px]">Moments in which natural elegance unfolds quietly, confidently, and without unnecessary emphasis.</p>
</div>
<div className="col-span-2 lg:col-span-2 row-span-2 lg:row-span-2 relative overflow-hidden group bg-zinc-900 flex items-center justify-center">
<img alt="Couple Walking Blur" className="blur-[4px] transition-transform duration-[2s] ease-out group-hover:scale-105 opacity-40 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="w-3/5 aspect-square relative z-10 shadow-2xl overflow-hidden border border-white/5">
<img alt="Couple Walking Sharp" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="aspect-square bg-zinc-900 overflow-hidden relative group">
<img alt="Motion Blur Celebration Dancing" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 grayscale" src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-zinc-900 overflow-hidden relative group">
<img alt="Champagne Toast" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-black p-6 lg:p-8 flex flex-col justify-between border border-white/5">
<h3 className="font-narrow text-4xl lg:text-5xl tracking-tighter text-white font-thin leading-none"><span className="italic font-extralight">Natural</span> harmony</h3>
<p className="text-base text-gray-400 font-extralight leading-relaxed mt-auto max-w-[200px]">Connections whose shape, energy, and rhythm create a profound sense of harmony at first glance.</p>
</div>
<div className="aspect-square bg-zinc-900 overflow-hidden relative group">
<img alt="Wedding Dress Fabric Detail" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0A0A0A] text-white">
<div className="max-w-5xl mx-auto px-6 text-center">
<span className="text-7xl font-narrow text-[#1A1A1A] block mb-6 leading-none tracking-tighter">"</span>
<h3 className="font-narrow text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white leading-tight mb-12 font-thin">
                Working with Ocean West was the best investment we made. Their presence was calming, and the resulting work belongs in a magazine. They captured our love exactly as it felt.
            </h3>
<div className="flex flex-col items-center justify-center">
<span className="text-base uppercase tracking-widest text-white font-thin mb-2">Eleanor &amp; James</span>
<span className="text-sm text-gray-500 font-extralight tracking-[0.2em] uppercase">Château de Villette, France</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white border-t border-[#0A0A0A]/10">
<div className="max-w-4xl mx-auto px-6 lg:px-12">
<div className="mb-16 md:mb-20 text-center">
<span className="uppercase tracking-[0.2em] text-sm font-thin text-gray-500 mb-4 block">Information</span>
<h2 className="font-narrow text-5xl md:text-6xl tracking-tighter text-[#0A0A0A] font-thin">Investment &amp; FAQ</h2>
</div>
<div className="space-y-6">

<details className="group border-b border-[#0A0A0A]/10 pb-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none">
<h3 className="text-sm md:text-base uppercase tracking-[0.2em] text-[#0A0A0A] font-extralight pr-4">Do you offer custom packages?</h3>
<span className="relative flex-shrink-0 ml-1.5 w-6 h-6 flex items-center justify-center">
<iconify-icon className="absolute text-xl text-[#0A0A0A] opacity-70 group-open:opacity-0 transition-opacity duration-300" icon="solar:add-linear"></iconify-icon>
<iconify-icon className="absolute text-xl text-[#0A0A0A] opacity-0 group-open:opacity-70 transition-opacity duration-300" icon="solar:minus-linear"></iconify-icon>
</span>
</summary>
<div className="mt-6 text-gray-600 font-extralight text-lg leading-relaxed">
<p>Yes! We customize packages based on how many hours you would need.</p>
</div>
</details>

<details className="group border-b border-[#0A0A0A]/10 pb-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none">
<h3 className="text-sm md:text-base uppercase tracking-[0.2em] text-[#0A0A0A] font-extralight pr-4">Is there a deposit?</h3>
<span className="relative flex-shrink-0 ml-1.5 w-6 h-6 flex items-center justify-center">
<iconify-icon className="absolute text-xl text-[#0A0A0A] opacity-70 group-open:opacity-0 transition-opacity duration-300" icon="solar:add-linear"></iconify-icon>
<iconify-icon className="absolute text-xl text-[#0A0A0A] opacity-0 group-open:opacity-70 transition-opacity duration-300" icon="solar:minus-linear"></iconify-icon>
</span>
</summary>
<div className="mt-6 text-gray-600 font-extralight text-lg leading-relaxed">
<p>Yes, we require a signed contract and a 30% non-refundable retainer to secure your date and our exclusive availability.</p>
</div>
</details>

<details className="group border-b border-[#0A0A0A]/10 pb-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none">
<h3 className="text-sm md:text-base uppercase tracking-[0.2em] text-[#0A0A0A] font-extralight pr-4">How long do we have to wait for our photos and video?</h3>
<span className="relative flex-shrink-0 ml-1.5 w-6 h-6 flex items-center justify-center">
<iconify-icon className="absolute text-xl text-[#0A0A0A] opacity-70 group-open:opacity-0 transition-opacity duration-300" icon="solar:add-linear"></iconify-icon>
<iconify-icon className="absolute text-xl text-[#0A0A0A] opacity-0 group-open:opacity-70 transition-opacity duration-300" icon="solar:minus-linear"></iconify-icon>
</span>
</summary>
<div className="mt-6 text-gray-600 font-extralight text-lg leading-relaxed">
<p>For a full day celebration, you can expect your complete, meticulously curated gallery and cinematic film delivered within 8 to 10 weeks.</p>
</div>
</details>

<details className="group border-b border-[#0A0A0A]/10 pb-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none">
<h3 className="text-sm md:text-base uppercase tracking-[0.2em] text-[#0A0A0A] font-extralight pr-4">Do you give out raw images?</h3>
<span className="relative flex-shrink-0 ml-1.5 w-6 h-6 flex items-center justify-center">
<iconify-icon className="absolute text-xl text-[#0A0A0A] opacity-70 group-open:opacity-0 transition-opacity duration-300" icon="solar:add-linear"></iconify-icon>
<iconify-icon className="absolute text-xl text-[#0A0A0A] opacity-0 group-open:opacity-70 transition-opacity duration-300" icon="solar:minus-linear"></iconify-icon>
</span>
</summary>
<div className="mt-6 text-gray-600 font-extralight text-lg leading-relaxed">
<p>We do not provide raw files. Our dedicated color grading and editorial editing process is a fundamental part of the final artistic vision you invest in.</p>
</div>
</details>

<details className="group border-b border-[#0A0A0A]/10 pb-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none">
<h3 className="text-sm md:text-base uppercase tracking-[0.2em] text-[#0A0A0A] font-extralight pr-4">Can we request specific shots?</h3>
<span className="relative flex-shrink-0 ml-1.5 w-6 h-6 flex items-center justify-center">
<iconify-icon className="absolute text-xl text-[#0A0A0A] opacity-70 group-open:opacity-0 transition-opacity duration-300" icon="solar:add-linear"></iconify-icon>
<iconify-icon className="absolute text-xl text-[#0A0A0A] opacity-0 group-open:opacity-70 transition-opacity duration-300" icon="solar:minus-linear"></iconify-icon>
</span>
</summary>
<div className="mt-6 text-gray-600 font-extralight text-lg leading-relaxed">
<p>Absolutely. Prior to your celebration, we will share a comprehensive questionnaire where you can detail specific family groupings and meaningful details.</p>
</div>
</details>
</div>
</div>
</section>

<section className="py-32 bg-[#0A0A0A] text-white" id="inquire">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12 grid lg:grid-cols-5 gap-16 lg:gap-24 items-start">
<div className="lg:col-span-2">
<h2 className="font-narrow text-5xl md:text-6xl tracking-tighter text-white font-thin mb-6 leading-tight">
                    Begin Your Journey
                </h2>
<p className="text-2xl lg:text-3xl text-gray-400 font-extralight mb-12 leading-relaxed">
                    We accept a limited number of commissions each year to ensure every couple receives our utmost attention and artistry. Please share the details of your celebration below.
                </p>
<div className="space-y-6">
<div className="flex items-center text-sm uppercase tracking-[0.2em] text-gray-300 font-thin">
<iconify-icon className="text-xl mr-4 opacity-70" icon="solar:letter-linear"></iconify-icon>
                        hello@oceanweststudio.com
                    </div>
<div className="flex items-center text-sm uppercase tracking-[0.2em] text-gray-300 font-thin">
<iconify-icon className="text-xl mr-4 opacity-70" icon="solar:map-point-linear"></iconify-icon>
                        Seattle / Worldwide
                    </div>
</div>
</div>
<div className="lg:col-span-3">
<form className="space-y-12">
<div className="grid md:grid-cols-2 gap-10">
<div className="">
<label className="block text-sm uppercase tracking-[0.2em] text-gray-500 mb-3 font-extralight">First &amp; Last Name</label>
<input className="w-full bg-transparent border-b border-gray-700 py-3 text-2xl text-white font-thin focus:border-white focus:outline-none transition-colors" required="" type="text"/>
</div>
<div>
<label className="block text-sm uppercase tracking-[0.2em] text-gray-500 mb-3 font-extralight">Fiancé's Name</label>
<input className="w-full bg-transparent border-b border-gray-700 py-3 text-2xl text-white font-thin focus:border-white focus:outline-none transition-colors" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-10">
<div>
<label className="block text-sm uppercase tracking-[0.2em] text-gray-500 mb-3 font-extralight">Email Address</label>
<input className="w-full bg-transparent border-b border-gray-700 py-3 text-2xl text-white font-thin focus:border-white focus:outline-none transition-colors" required="" type="email"/>
</div>
<div>
<label className="block text-sm uppercase tracking-[0.2em] text-gray-500 mb-3 font-extralight">Wedding Date</label>
<input className="w-full bg-transparent border-b border-gray-700 py-3 text-2xl text-white font-thin focus:border-white focus:outline-none transition-colors" placeholder="MM/DD/YYYY" type="text"/>
</div>
</div>
<div>
<label className="block text-sm uppercase tracking-[0.2em] text-gray-500 mb-3 font-extralight">Venue &amp; Location</label>
<input className="w-full bg-transparent border-b border-gray-700 py-3 text-2xl text-white font-thin focus:border-white focus:outline-none transition-colors" type="text"/>
</div>
<div>
<label className="block text-sm uppercase tracking-[0.2em] text-gray-500 mb-3 font-extralight">Services Interested In</label>
<select className="w-full bg-transparent border-b border-gray-700 py-3 text-2xl text-white font-thin focus:border-white focus:outline-none transition-colors cursor-pointer dark-select">
<option className="bg-[#0A0A0A] text-white" value="full">Full Experience (Photo, Video, Stream)</option>
<option className="bg-[#0A0A0A] text-white" value="photo">Photography</option>
<option className="bg-[#0A0A0A] text-white" value="video">Videography</option>
<option className="bg-[#0A0A0A] text-white" value="stream">Livestreaming</option>
</select>
</div>
<div>
<label className="block text-sm uppercase tracking-[0.2em] text-gray-500 mb-3 font-extralight">Tell us about your vision</label>
<textarea className="w-full bg-transparent border-b border-gray-700 py-3 text-2xl text-white font-thin focus:border-white focus:outline-none transition-colors resize-none" rows="4"></textarea>
</div>
<button className="w-full md:w-auto bg-white text-[#0A0A0A] px-12 py-4 text-sm uppercase tracking-[0.2em] font-thin hover:bg-gray-200 transition-colors duration-300 mt-8 flex items-center justify-center gap-3" type="button">
                        Submit Inquiry
                        <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div></div></section>
    </>
  );
}
