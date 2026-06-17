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

    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function activateSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        currentIndex = index;

        slides.forEach((slide, i) => {
            const video = slide.querySelector('video');
            if (i === currentIndex) {
                slide.style.opacity = '1';
                slide.style.zIndex = '10';
                if(video) {
                    video.currentTime = 0;
                    video.play().catch(e => console.log("Auto-play prevented"));
                }
            } else {
                slide.style.opacity = '0';
                slide.style.zIndex = '0';
                if(video) video.pause();
            }
        });
    }

    slides.forEach((slide, i) => {
        const video = slide.querySelector('video');
        if(video) {
            video.addEventListener('ended', () => {
                if (i === currentIndex) {
                    activateSlide(currentIndex + 1);
                }
            });
        }
    });

    prevBtn.addEventListener('click', () => activateSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => activateSlide(currentIndex + 1));
    activateSlide(0);


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
      

<div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none blob-cont">
<div className="blob blob-1"></div>
<div className="blob blob-2"></div>
<div className="blob blob-3"></div>
</div>

<div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%221%22/%3E%3C/svg%3E\')'}}></div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#020408]/70 backdrop-blur-xl transition-all duration-300">
<div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="text-white group-hover:text-indigo-400 transition-colors duration-500">
<svg fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"></path>
</svg>
</div>
<span className="text-lg font-medium tracking-tight text-white font-serif-custom uppercase">Jarzyna Visuals</span>
</div>
<div className="hidden lg:flex items-center gap-8">
<a className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest hover:tracking-[0.15em] duration-300" href="#model-wspolpracy">Oferta</a>
<a className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest hover:tracking-[0.15em] duration-300" href="#portfolio">Portfolio</a>
<a className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest hover:tracking-[0.15em] duration-300" href="#proces">Proces</a>
<a className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest hover:tracking-[0.15em] duration-300" href="#o-nas">O nas</a>
</div>
<div className="flex items-center gap-6">
<button className="bg-white text-black hover:scale-105 active:scale-95 transition-all duration-300 text-xs font-bold px-6 py-3 rounded-full uppercase tracking-wide btn-glow">
                Wyceń Projekt
            </button>
</div>
</div>
</nav>
<main className="w-full relative pt-20">

<section className="relative min-h-[90vh] flex flex-col lg:flex-row max-w-[1400px] mx-auto px-6 lg:px-12 pt-12 pb-20 border-b border-white/5">
<div className="w-full lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-16 mb-12 lg:mb-0 z-10 fade-in-up">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 w-fit mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-[10px] font-bold tracking-widest text-indigo-300 uppercase">Nowa generacja contentu</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium text-white tracking-tight font-serif-custom mb-8 leading-[1.05]">
            Reklama produktu <br/>
<span className="italic text-zinc-500 bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-600">klasy premium.</span>
</h1>
<p className="text-lg text-zinc-400 font-light leading-relaxed max-w-xl mb-12">
            Z Twoich prostych zdjęć tworzymy materiały wizualne, które sprzedają. Łączymy artystyczną wizję z technologią AI, bez konieczności wysyłki produktów.
        </p>
<div className="flex flex-col sm:flex-row gap-4 fade-in-up delay-200">
<button className="group flex items-center justify-center gap-2 text-sm font-bold text-black bg-white hover:scale-105 transition-all duration-300 rounded-full px-8 py-4 btn-glow">
<span>Darmowa Wycena w 24h</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="flex items-center justify-center gap-2 text-sm font-medium text-white border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 rounded-full px-8 py-4 transition-all">
                Zobacz Realizacje
            </button>
</div>
<div className="mt-12 flex items-center gap-4 text-xs text-zinc-500 font-medium uppercase tracking-wide">
<span>Trusted by:</span>
<div className="flex gap-4 opacity-50 grayscale">
<span>E-Glamour</span> • <span>TechSpace</span> • <span>BioOrganic</span>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end fade-in-up delay-300">
<div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_-12px_rgba(79,70,229,0.2)] group">
<div className="w-full h-full relative bg-zinc-900" id="hero-slider">
<div className="slide absolute inset-0 transition-opacity duration-700 opacity-100 z-10">
<video autoplay="" className="w-full h-full object-cover" muted="" playsinline="" poster="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=1000&amp;fit=crop">
<source src="https://videos.pexels.com/video-files/6608754/6608754-hd_1080_1920_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent opacity-60"></div>
</div>
<div className="slide absolute inset-0 transition-opacity duration-700 opacity-0 z-0">
<video className="w-full h-full object-cover" muted="" playsinline="" poster="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&amp;w=1000&amp;fit=crop">
<source src="https://videos.pexels.com/video-files/5849622/5849622-hd_1080_1920_30fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent opacity-60"></div>
</div>
<div className="slide absolute inset-0 transition-opacity duration-700 opacity-0 z-0">
<video className="w-full h-full object-cover" muted="" playsinline="" poster="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=1000&amp;fit=crop">
<source src="https://videos.pexels.com/video-files/6981418/6981418-hd_1080_1920_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent opacity-60"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20">
<div className="flex justify-between items-end">
<div>
<span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-2 block">Featured</span>
<h3 className="text-white font-serif-custom text-2xl">Cosmetic Campaign</h3>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300" id="prevBtn">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300" id="nextBtn">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 relative z-10" id="portfolio">
<div className="w-full px-0 py-16 md:py-24">
<div className="max-w-[1400px] mx-auto px-6 mb-16 flex flex-col md:flex-row items-end justify-between fade-in-up">
<div>
<h2 className="text-3xl md:text-5xl font-serif-custom text-white mb-4">Efekty mówią <span className="italic text-zinc-500">same za siebie.</span></h2>
<p className="text-zinc-400 font-light max-w-xl">Różne branże, ten sam cel: przyciągnąć uwagę i sprzedać. Zobacz wybrane realizacje.</p>
</div>
<button className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-indigo-400 transition-colors mt-6 md:mt-0">
                Zobacz pełne portfolio <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 w-full">


<div className="group relative aspect-[4/5] overflow-hidden bg-zinc-900 border-r border-b border-white/5 cursor-pointer">
<img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&amp;w=600&amp;fit=crop"/>
<div className="absolute inset-0 bg-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block mb-1">Beauty</span>
<span className="text-white font-serif-custom text-lg italic">Skin Serum</span>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden bg-zinc-900 border-r border-b border-white/5 cursor-pointer">
<img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&amp;w=600&amp;fit=crop"/>
<div className="absolute inset-0 bg-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block mb-1">Tech</span>
<span className="text-white font-serif-custom text-lg italic">Audio Pro</span>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden bg-zinc-900 border-r border-b border-white/5 cursor-pointer">
<img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&amp;w=600&amp;fit=crop"/>
<div className="absolute inset-0 bg-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block mb-1">Food</span>
<span className="text-white font-serif-custom text-lg italic">Organic Energy</span>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden bg-zinc-900 border-r border-b border-white/5 cursor-pointer">
<img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&amp;w=600&amp;fit=crop"/>
<div className="absolute inset-0 bg-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block mb-1">Fashion</span>
<span className="text-white font-serif-custom text-lg italic">Urban Kicks</span>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden bg-zinc-900 border-r border-b border-white/5 cursor-pointer">
<img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&amp;w=600&amp;fit=crop"/>
<div className="absolute inset-0 bg-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block mb-1">Home</span>
<span className="text-white font-serif-custom text-lg italic">Zen Candle</span>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden bg-zinc-900 border-b border-white/5 cursor-pointer">
<img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&amp;w=600&amp;fit=crop"/>
<div className="absolute inset-0 bg-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block mb-1">Auto</span>
<span className="text-white font-serif-custom text-lg italic">Car Detail</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 py-24 relative overflow-hidden" id="proces">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">

<div className="text-center mb-16 fade-in-up">
<span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold tracking-widest text-[10px] uppercase mb-6">100% Zdalnie • Bez wysyłki</span>
<h2 className="text-4xl md:text-5xl font-serif-custom text-white mb-6">Jak to działa? <br className="hidden md:block"/> <span className="text-zinc-500 italic">3 proste kroki.</span></h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mb-16 fade-in-up delay-100">

<div className="absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent hidden md:block -z-10"></div>

<div className="group relative bg-[#020408] border border-zinc-800 rounded-3xl p-6 hover:border-zinc-600 transition-colors duration-300">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white mb-6 relative z-10">
<span className="absolute -top-2 -right-2 w-5 h-5 bg-zinc-800 rounded-full flex items-center justify-center text-[10px] font-bold border border-black">1</span>
<i className="w-5 h-5" data-lucide="smartphone"></i>
</div>
<h3 className="text-lg text-white font-medium mb-2">Wyślij zdjęcie</h3>
<p className="text-zinc-400 text-sm font-light">
                    Zrób szybkie zdjęcie produktu telefonem. Bez studia, bez lamp, bez wysyłki towaru.
                </p>
</div>

<div className="group relative bg-zinc-900/40 border border-indigo-500/30 rounded-3xl p-6 shadow-[0_0_40px_-10px_rgba(79,70,229,0.1)]">
<div className="w-12 h-12 rounded-xl bg-indigo-600 border border-indigo-400 flex items-center justify-center text-white mb-6 relative z-10 shadow-lg shadow-indigo-500/30">
<span className="absolute -top-2 -right-2 w-5 h-5 bg-indigo-800 rounded-full flex items-center justify-center text-[10px] font-bold border border-indigo-900">2</span>
<i className="w-5 h-5" data-lucide="wand-2"></i>
</div>
<h3 className="text-lg text-white font-medium mb-2">My zajmujemy się resztą</h3>
<p className="text-zinc-300 text-sm font-light">
                    Zamieniamy zdjęcie w profesjonalną reklamę studyjną lub lifestylową, dając efekt drogiej sesji.
                </p>
</div>

<div className="group relative bg-[#020408] border border-zinc-800 rounded-3xl p-6 hover:border-zinc-600 transition-colors duration-300">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white mb-6 relative z-10">
<span className="absolute -top-2 -right-2 w-5 h-5 bg-zinc-800 rounded-full flex items-center justify-center text-[10px] font-bold border border-black">3</span>
<i className="w-5 h-5" data-lucide="download"></i>
</div>
<h3 className="text-lg text-white font-medium mb-2">Odbierz materiały</h3>
<p className="text-zinc-400 text-sm font-light">
                    W ciągu 2-4 dni otrzymujesz gotowe pliki, sformatowane pod Twoje social media i sklep.
                </p>
</div>
</div>

<div className="flex flex-col items-center justify-center gap-8 fade-in-up delay-200">

<div className="flex items-center gap-4 p-4 rounded-xl border border-dashed border-zinc-700 bg-zinc-900/30 w-full md:w-auto min-w-[300px]">
<div className="w-10 h-10 rounded bg-indigo-600 flex items-center justify-center text-white shrink-0 font-bold text-xs">ZIP</div>
<div>
<div className="text-white text-sm font-medium">Co dostajesz?</div>
<div className="text-zinc-400 text-xs">Umówiona ilość materiałów (Wideo/Foto)</div>
</div>
<i className="w-5 h-5 text-indigo-500 ml-auto" data-lucide="check-circle-2"></i>
</div>

<div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
<a className="flex items-center justify-center gap-2 text-sm font-medium text-white border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 rounded-full px-10 py-4 transition-all w-full sm:w-auto" href="#portfolio">
                    Zobacz co sprzedajemy
                </a>
<button className="flex items-center justify-center gap-2 text-sm font-bold text-black bg-white hover:scale-105 active:scale-95 transition-all duration-300 rounded-full px-10 py-4 btn-glow w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    Wyceń swój projekt
                </button>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 py-24 relative" id="model-wspolpracy">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="text-center mb-12 fade-in-up">
<h2 className="text-4xl md:text-5xl font-serif-custom text-white mb-6">Inwestycja, która się zwraca</h2>

<div className="inline-block p-6 rounded-2xl bg-indigo-900/20 border border-indigo-500/30 max-w-2xl mx-auto backdrop-blur-sm">
<h3 className="text-xl text-white font-medium mb-2">Każdy projekt wyceniamy indywidualnie</h3>
<p className="text-zinc-400 font-light text-sm">
                      Rozumiemy, że każda firma jest inna. Dopasowujemy zakres prac do Twoich potrzeb i budżetu, abyś nie płacił za to, czego nie potrzebujesz. Poniższe pakiety to tylko przykłady.
                  </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 fade-in-up delay-200">

<div className="glass-card rounded-3xl p-8 flex flex-col relative group transition-all duration-500 hover:-translate-y-2">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent group-hover:via-indigo-500 transition-all duration-500"></div>
<div className="mb-6">
<span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2 block">Dla sklepu internetowego</span>
<h4 className="text-2xl font-bold text-white mb-2">Zdjęcia Produktowe</h4>
<div className="text-3xl font-serif-custom text-white/90">499 zł <span className="text-lg font-sans text-zinc-500 font-light">/ przykładowo</span></div>
</div>
<ul className="space-y-4 text-zinc-400 text-sm font-light leading-relaxed mb-8 border-t border-white/5 pt-6">
<li className="flex items-start gap-3"><i className="w-4 h-4 text-indigo-400 shrink-0" data-lucide="check"></i> 5 profesjonalnych zdjęć</li>
<li className="flex items-start gap-3"><i className="w-4 h-4 text-indigo-400 shrink-0" data-lucide="check"></i> Idealne, białe tło</li>
<li className="flex items-start gap-3"><i className="w-4 h-4 text-indigo-400 shrink-0" data-lucide="check"></i> Retusz (poprawa wyglądu)</li>
</ul>
<div className="mt-auto">
<button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white hover:text-black transition-all duration-300">
                            Zapytaj o ten pakiet
                        </button>
</div>
</div>

<div className="glass-card rounded-3xl p-8 flex flex-col relative group transition-all duration-500 hover:-translate-y-2 bg-gradient-to-b from-white/[0.03] to-transparent border-indigo-500/30">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-lg shadow-indigo-500/40">Dla Firmy</div>
<div className="mb-6">
<span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2 block">Kompleksowa opieka</span>
<h4 className="text-2xl font-bold text-white mb-2">Obsługa Marketingowa</h4>
<div className="text-3xl font-serif-custom text-white/90">od 2500 zł <span className="text-lg font-sans text-zinc-500 font-light">/ mies.</span></div>
</div>
<ul className="space-y-4 text-zinc-300 text-sm font-light leading-relaxed mb-8 border-t border-white/5 pt-6">
<li className="flex items-start gap-3"><i className="w-4 h-4 text-indigo-400 shrink-0" data-lucide="check"></i> Stałe prowadzenie Facebook/Instagram</li>
<li className="flex items-start gap-3"><i className="w-4 h-4 text-indigo-400 shrink-0" data-lucide="check"></i> Regularne tworzenie rolek (Reels)</li>
<li className="flex items-start gap-3"><i className="w-4 h-4 text-indigo-400 shrink-0" data-lucide="check"></i> Grafiki reklamowe w cenie</li>
</ul>
<div className="mt-auto flex flex-col gap-3">
<button className="w-full py-4 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 transition-all duration-300 shadow-lg shadow-indigo-900/40">
                            Wybieram stałą współpracę
                        </button>
<button className="w-full py-3 rounded-xl border border-white/20 text-white font-medium text-xs hover:bg-white/10 transition-all flex items-center justify-center gap-2">
<i className="w-3 h-3" data-lucide="eye"></i> Zobacz przykład obsługi
                        </button>
</div>
</div>

<div className="glass-card rounded-3xl p-8 flex flex-col relative group transition-all duration-500 hover:-translate-y-2">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent group-hover:via-indigo-500 transition-all duration-500"></div>
<div className="mb-6">
<span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2 block">Wideo Reklama</span>
<h4 className="text-2xl font-bold text-white mb-2">Spot Reklamowy</h4>
<div className="text-3xl font-serif-custom text-white/90">1200 zł <span className="text-lg font-sans text-zinc-500 font-light">/ spot</span></div>
</div>
<ul className="space-y-4 text-zinc-400 text-sm font-light leading-relaxed mb-8 border-t border-white/5 pt-6">
<li className="flex items-start gap-3"><i className="w-4 h-4 text-indigo-400 shrink-0" data-lucide="check"></i> Krótki film (15 sekund)</li>
<li className="flex items-start gap-3"><i className="w-4 h-4 text-indigo-400 shrink-0" data-lucide="check"></i> Muzyka i napisy</li>
<li className="flex items-start gap-3"><i className="w-4 h-4 text-indigo-400 shrink-0" data-lucide="check"></i> Gotowe na TikToka/Instagrama</li>
</ul>
<div className="mt-auto">
<button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white hover:text-black transition-all duration-300">
                            Zapytaj o wideo
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-black/40" id="o-nas">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 fade-in-up">
<div className="flex flex-col lg:flex-row gap-16 items-start">
<div className="w-full lg:w-1/2">
<div className="flex items-center gap-2 mb-6">
<i className="text-indigo-500 w-5 h-5" data-lucide="layers"></i>
<span className="text-xs font-bold text-white uppercase tracking-widest">Jarzyna Visuals</span>
</div>
<h2 className="text-4xl lg:text-5xl font-serif-custom text-white mb-8 leading-tight">
                    Technologia w służbie <br/><span className="text-zinc-500 italic">artystycznej wizji.</span>
</h2>
<div className="space-y-6 text-zinc-400 font-light leading-relaxed text-lg mb-8">
<p>
                        Nie jesteśmy zwykłym studiem graficznym. Wykorzystujemy wiedzę zdobytą przy realizacjach filmowych, aby tworzyć nowoczesne reklamy. Za jakością każdego projektu stoi <strong className="text-white font-medium">Szymon Jarzyna</strong>.
                    </p>
<p className="text-sm border-l-2 border-indigo-500 pl-4 py-2 bg-white/5 rounded-r-lg">
<strong className="text-white block mb-1">Nasze narzędzia pracy:</strong>
                        Adobe Creative Cloud (Photoshop, Premiere Pro, After Effects), Blender 3D, Stable Diffusion AI.
                    </p>
</div>
<div className="flex gap-4">
<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
<i className="w-4 h-4 text-indigo-400" data-lucide="shield-check"></i>
<span className="text-xs text-zinc-300 font-medium">Gwarancja Satysfakcji</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
<i className="w-4 h-4 text-indigo-400" data-lucide="clock"></i>
<span className="text-xs text-zinc-300 font-medium">Szybka realizacja</span>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-indigo-500/30 transition-colors duration-300">
<i className="w-8 h-8 text-white mb-4" data-lucide="cpu"></i>
<h3 className="text-white font-medium mb-2">Sztuczna Inteligencja</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Generujemy fotorealistyczne tła i scenerie, oszczędzając Twój budżet na wynajmie studia.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-indigo-500/30 transition-colors duration-300">
<i className="w-8 h-8 text-white mb-4" data-lucide="monitor-play"></i>
<h3 className="text-white font-medium mb-2">Profesjonalny Retusz</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Każde zdjęcie i film przechodzi ręczną korekcję kolorów, aby produkt wyglądał idealnie.
                    </p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#020408] border-t border-white/5 pt-16 pb-8 relative z-10">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 lg:col-span-1">
<div className="flex items-center gap-2 mb-6">
<svg className="text-white" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"></path>
</svg>
<span className="text-white font-serif-custom uppercase tracking-wide">JARZYNA VISUALS</span>
</div>
<p className="text-zinc-500 text-sm leading-relaxed mb-6 font-light">
                    Premium content studio.<br/>Poland / Remote
                </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Oferta</h4>
<ul className="space-y-3 text-sm text-zinc-400 font-light">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Packshot Studio</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Lifestyle AI</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Video Commercial</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Firma</h4>
<ul className="space-y-3 text-sm text-zinc-400 font-light">
<li><a className="hover:text-indigo-400 transition-colors" href="#o-nas">O nas</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#portfolio">Portfolio</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Kontakt</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Kontakt</h4>
<ul className="space-y-4 text-sm text-zinc-400 font-light">
<li className="flex items-center gap-3">
<a className="hover:text-white text-lg font-serif-custom italic decoration-indigo-500 underline underline-offset-4 decoration-1" href="mailto:kontakt@jarzynavisuals.pl">kontakt@jarzynavisuals.pl</a>
</li>
<li>
<p className="text-xs text-zinc-600 leading-relaxed mt-4">
                              +48 730 123 123<br/>
                              Pon – Pt: 9:00 – 17:00
                          </p>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 font-light">
<p>© 2025 Jarzyna Visuals. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
