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

      // Simple Slider Logic
      let currentSlide = 0;
      const slides = document.querySelectorAll('.slide-image');
      const indicators = document.querySelectorAll('#slide-indicators button');
      const totalSlides = slides.length;
      let slideInterval;

      function updateSlide() {
          slides.forEach((slide, index) => {
              if (index === currentSlide) {
                  slide.classList.add('active');
              } else {
                  slide.classList.remove('active');
              }
          });

          indicators.forEach((dot, index) => {
              if (index === currentSlide) {
                  dot.classList.remove('bg-white/30');
                  dot.classList.add('bg-white');
              } else {
                  dot.classList.remove('bg-white');
                  dot.classList.add('bg-white/30');
              }
          });
      }

      function nextSlide() {
          currentSlide = (currentSlide + 1) % totalSlides;
          updateSlide();
          resetInterval();
      }

      function prevSlide() {
          currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
          updateSlide();
          resetInterval();
      }

      function goToSlide(index) {
          currentSlide = index;
          updateSlide();
          resetInterval();
      }

      function resetInterval() {
          clearInterval(slideInterval);
          slideInterval = setInterval(nextSlide, 5000);
      }

      // Initialize
      slideInterval = setInterval(nextSlide, 5000);
    
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
      

<nav className="fixed z-50 transition-all duration-300 bg-red-500 w-full border-white/5 border-b top-0 backdrop-blur-xl" id="navbar">
<div className="flex bg-red-500 h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="https://serviceautochiajna.ro/">
<div className="w-8 h-8 rounded bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]">
<i className="w-4 h-4" data-lucide="wrench"></i>
</div>
<span className="group-hover:text-red-500 transition-colors duration-300 text-sm font-semibold text-slate-950 tracking-tight">
            SERVICE AUTO
            <span className="text-red-500">RED</span>
</span>
</a>

<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-zinc-400">
<a className="hover:text-white transition-colors text-slate-950" href="https://serviceautochiajna.ro/">
            ACASA
          </a>
<a className="hover:text-white transition-colors text-slate-950" href="https://serviceautochiajna.ro/despre-noi-service-auto-red/">
            DESPRE NOI
          </a>
<a className="hover:text-white transition-colors text-slate-950" href="#services">
            MECANICA
          </a>
<a className="hover:text-white transition-colors text-slate-950" href="#services" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'}}>
            DIAGNOZA
          </a>
<a className="hover:text-white transition-colors text-slate-950" href="#contact" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'}}>
            CONTACT
          </a>
</div>

<a className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-semibold hover:bg-zinc-200 transition-all duration-300" href="#contact">
<span className="">FA O PROGRAMARE</span>
<i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>

<button className="md:hidden text-zinc-400 hover:text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-black flex items-center">

<div className="absolute inset-0 z-0" id="hero-slider">

<div className="slide-image active absolute inset-0 w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&amp'}}></div>

<div className="slide-image absolute inset-0 w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&amp'}}></div>

<div className="slide-image absolute inset-0 w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&amp'}}></div>
</div>

<div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30 z-10 pointer-events-none"></div>

<div className="z-20 w-full max-w-7xl mr-auto ml-auto pt-16 pr-6 pl-6 relative">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 text-[10px] font-medium tracking-wider mb-8 text-enter backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
            SERVICE AUTORIZAT RAR
          </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-6 leading-[0.9] text-enter delay-100 drop-shadow-lg">
            Experiență
            <br/>
<span className="text-zinc-400">&amp;</span>
            Pasiune.
          </h1>
<p className="max-w-xl text-zinc-300 text-sm md:text-base leading-relaxed mb-10 text-enter delay-200 drop-shadow-md">
            Service Auto Red Chiajna vă oferă servicii complete de mecanică,
            diagnoză computerizată și revizii, la cele mai înalte standarde de
            calitate.
          </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-enter delay-300">
<a className="px-8 py-3 bg-red-600 hover:bg-red-500 text-white rounded text-sm font-medium transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] flex items-center gap-2" href="#contact">
<i className="w-4 h-4" data-lucide="calendar"></i>
              PROGRAMEAZA ACUM
            </a>
<a className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md text-white rounded text-sm font-medium transition-colors flex items-center gap-2" href="tel:+40744882017">
<i className="w-4 h-4" data-lucide="phone"></i>
              +4 0744 882 017
            </a>
</div>
</div>
</div>

<div className="absolute bottom-12 right-6 md:right-12 z-20 flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 bg-black/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/10 transition-colors" onclick="prevSlide()">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 bg-black/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/10 transition-colors" onclick="nextSlide()">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>

<div className="absolute bottom-12 left-6 md:left-1/2 md:-translate-x-1/2 z-20 flex gap-2" id="slide-indicators">
<button className="h-1 w-8 rounded-full bg-white transition-all" onclick="goToSlide(0)"></button>
<button className="hover:bg-white/50 transition-all bg-white/30 w-8 h-1 rounded-full" onclick="goToSlide(1)"></button>
<button className="h-1 w-8 rounded-full bg-white/30 hover:bg-white/50 transition-all" onclick="goToSlide(2)"></button>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-950/50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Serviciile Noastre
          </h2>
<p className="text-zinc-400 max-w-xl text-sm">
            Oferim o gamă completă de servicii auto pentru a asigura siguranța
            și performanța mașinii tale.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">

<div className="md:col-span-2 md:row-span-2 glass-panel rounded-xl p-8 relative overflow-hidden group hover:border-red-500/30 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
<div className="absolute right-0 top-0 p-32 bg-red-600/10 blur-[100px] rounded-full group-hover:bg-red-600/20 transition-all"></div>
<div className="relative z-20 h-full flex flex-col justify-end">
<div className="w-12 h-12 rounded bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 text-red-500">
<i className="w-6 h-6" data-lucide="settings-2"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-2">
                Mecanica Generala
              </h3>
<p className="text-zinc-400 text-sm leading-relaxed max-w-md">
                Reparații capitale motoare, sisteme de frânare, direcție și
                suspensie. Folosim echipamente moderne și piese de schimb de
                calitate superioară pentru durabilitate maximă.
              </p>
</div>
</div>

<div className="glass-panel rounded-xl p-8 hover:bg-zinc-900/50 transition-colors group">
<div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center mb-4 text-zinc-300 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="laptop-2"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Diagnoza Computerizata
            </h3>
<p className="text-zinc-500 text-xs leading-relaxed">
              Identificare rapidă și precisă a problemelor electronice folosind
              softuri licențiate pentru toate mărcile auto.
            </p>
</div>

<div className="glass-panel rounded-xl p-8 hover:bg-zinc-900/50 transition-colors group">
<div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center mb-4 text-zinc-300 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="refresh-cw"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Schimburi &amp; Revizii
            </h3>
<p className="text-zinc-500 text-xs leading-relaxed">
              Schimb ulei, filtre, plăcuțe de frână și fluide. Mentenanță
              preventivă pentru a evita costurile majore.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="">
<div className="text-red-500 font-mono text-xs mb-4 tracking-widest uppercase">
            Despre Service Auto Red
          </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
            O echipă tânără,
            <br/>
            determinată și profesionistă.
          </h2>
<div className="space-y-6 text-zinc-400 text-sm leading-relaxed">
<p className="">
              Localizați în inima Chiajnei, Service Auto Red a fost creat din
              pasiunea pentru automobile și dorința de a oferi servicii corecte.
              Suntem o echipă de mecanici tineri, dar cu experiență vastă,
              pregătiți să rezolve orice provocare tehnică.
            </p>
<p className="">
              Credem în transparență totală. Clientul este informat pas cu pas
              despre procesul reparației, costuri și opțiuni, eliminând
              surprizele neplăcute.
            </p>
<ul className="space-y-3 mt-4">
<li className="flex items-center gap-3 text-zinc-300">
<i className="w-4 h-4 text-red-500" data-lucide="check-circle-2"></i>
                Service Autorizat RAR
              </li>
<li className="flex items-center gap-3 text-zinc-300">
<i className="w-4 h-4 text-red-500" data-lucide="check-circle-2"></i>
                Garantie pentru piese si manopera
              </li>
<li className="flex items-center gap-3 text-zinc-300">
<i className="w-4 h-4 text-red-500" data-lucide="check-circle-2"></i>
                Piese originale sau aftermarket de top
              </li>
</ul>
</div>
</div>

<div className="relative h-[400px] w-full bg-zinc-900 rounded-xl overflow-hidden border border-white/5 flex items-center justify-center">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

<div className="relative z-10 w-64 h-64 border border-zinc-700 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_red]"></div>
<div className="w-48 h-48 border border-zinc-800 rounded-full flex items-center justify-center border-dashed">
<div className="w-32 h-32 bg-red-900/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-red-500/20">
<i className="w-8 h-8 text-red-500" data-lucide="car"></i>
</div>
</div>
</div>

<div className="absolute bottom-8 left-8 text-xs font-mono text-zinc-500">
            STATUS: ACTIVE
            <br/>
            LOC: CHIAJNA
            <br/>
            ID: RED-SVC
          </div>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-zinc-900/30">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">
            100%
          </div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">
            Transparenta
          </div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">
            24h
          </div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">
            Programare Rapida
          </div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">
            5.0
          </div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">
            Rating Clienti
          </div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">
            Autorizat
          </div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">
            Certificare RAR
          </div>
</div>
</div>
</div>

<section className="py-24 relative" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
              Contactează-ne
            </h2>
<p className="text-zinc-400 text-sm mb-12">
              Programează o vizită sau cere o ofertă de preț. Răspundem prompt
              la toate solicitările.
            </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-red-500" data-lucide="map-pin"></i>
</div>
<div>
<div className="text-sm font-medium text-white mb-1">
                    Locatie Service
                  </div>
<div className="text-sm text-zinc-400">
                    Str. 1 Decembrie 1918, Nr 179A,
                    <br/>
                    Rosu, Chiajna, Ilfov
                  </div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-red-500" data-lucide="phone"></i>
</div>
<div>
<div className="text-sm font-medium text-white mb-1">Telefon</div>
<a className="text-sm text-zinc-400 hover:text-red-400 transition-colors" href="tel:+40744882017">
                    +4 0744 882 017
                  </a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-red-500" data-lucide="mail"></i>
</div>
<div className="">
<div className="text-sm font-medium text-white mb-1">Email</div>
<a className="text-sm text-zinc-400 hover:text-red-400 transition-colors" href="mailto:professional.car.solutions@gmail.com">
                    professional.car.solutions@gmail.com
                  </a>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/30 border border-white/5 p-8 rounded-xl backdrop-blur-sm">
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-zinc-500 font-medium ml-1">
                    Nume
                  </label>
<input className="w-full bg-black/50 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="Numele tau" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 font-medium ml-1">
                    Telefon
                  </label>
<input className="w-full bg-black/50 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="07xx xxx xxx" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 font-medium ml-1">
                  Marca / Model Auto
                </label>
<input className="w-full bg-black/50 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="ex: VW Golf 7" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 font-medium ml-1">
                  Mesaj / Problema
                </label>
<textarea className="w-full bg-black/50 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500 transition-colors resize-none" placeholder="Descrie problema pe scurt..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-semibold py-2.5 rounded text-sm hover:bg-zinc-200 transition-colors mt-2">
                TRIMITE SOLICITAREA
              </button>
<p className="text-[10px] text-zinc-600 text-center mt-2">
                Datele tale sunt protejate. Te vom contacta in cel mai scurt
                timp.
              </p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-red-500 border-white/5 border-t pt-12 pb-12">
<div className="flex flex-col md:flex-row gap-6 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex flex-col items-center md:items-start gap-2">
<span className="text-sm font-semibold text-slate-950 tracking-tight">
            SERVICE AUTO
            <span className="text-red-500">RED</span>
</span>
<p className="text-xs text-zinc-600">
            © 2023 Service Auto Chiajna. Toate drepturile rezervate.
          </p>
</div>
<div className="flex gap-6 text-xs text-zinc-500">
<a className="hover:text-white transition-colors text-slate-950" href="#">
            Termeni si Conditii
          </a>
<a className="hover:text-white transition-colors text-slate-950" href="#">
            Cookies
          </a>
<a className="hover:text-white transition-colors text-slate-950" href="#">
            Politica de Confidentialitate
          </a>
</div>
</div>
</footer>


    </>
  );
}
