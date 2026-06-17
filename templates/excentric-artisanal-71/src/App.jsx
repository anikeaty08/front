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



    // Custom JS for Draggable & Auto-scrolling Infinite Slider
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('slider-container');
        const track = document.getElementById('slider-track');

        let pos = 0;
        let speed = 0.5;
        let isDragging = false;
        let startX = 0;
        let lastPos = 0;
        let animationId;
        let isHovered = false;

        container.addEventListener('mouseenter', () => isHovered = true);
        container.addEventListener('mouseleave', () => {
            isHovered = false;
            isDragging = false;
            container.classList.remove('cursor-grabbing');
            container.classList.add('cursor-grab');
        });

        function animate() {
            const totalWidth = track.scrollWidth;
            const viewWidth = container.offsetWidth;
            const resetPoint = totalWidth / 2;

            if (!isDragging && !isHovered) {
                pos -= speed;
            }

            if (pos <= -resetPoint) {
                pos += resetPoint;
            }
            if (pos > 0) {
                pos -= resetPoint;
            }

            track.style.transform = `translateX(${pos}px)`;
            animationId = requestAnimationFrame(animate);
        }

        animationId = requestAnimationFrame(animate);

        container.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX - container.offsetLeft;
            lastPos = pos;
            container.classList.add('cursor-grabbing');
            container.classList.remove('cursor-grab');
        });

        container.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 1.5;
            pos = lastPos + walk;
        });

        container.addEventListener('mouseup', () => {
            isDragging = false;
            container.classList.remove('cursor-grabbing');
            container.classList.add('cursor-grab');
        });

        container.addEventListener('touchstart', (e) => {
            isDragging = true;
            startX = e.touches[0].pageX - container.offsetLeft;
            lastPos = pos;
            isHovered = true;
        });

        container.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const x = e.touches[0].pageX - container.offsetLeft;
            const walk = (x - startX) * 1.5;
            pos = lastPos + walk;
        });

        container.addEventListener('touchend', () => {
            isDragging = false;
            isHovered = false;
        });
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
      

<header className="fixed z-50 bg-[#FDFBF7]/90 w-full border-stone-200 border-b top-0 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mx-auto px-6 items-center justify-between">
<a className="flex items-center gap-2 select-none cursor-pointer hover:opacity-80 transition-opacity" href="#">
<span className="font-['Inter'] font-normal tracking-tighter text-xl text-[#7D1D1D] uppercase">
          EXCENTRIC DESSERTS
        </span>
</a>
<nav className="hidden md:flex gap-x-8 gap-y-8 items-center">
<a className="text-sm font-light text-stone-500 hover:text-[#7D1D1D] transition-colors tracking-wide" href="#despre-noi">
          DESPRE NOI
        </a>
<a className="text-sm font-light text-stone-500 hover:text-[#7D1D1D] transition-colors tracking-wide" href="#locatie">
          LOCAȚIE
        </a>
<a className="bg-[#7D1D1D] text-white text-sm font-light px-6 py-2.5 hover:bg-red-950 transition-all shadow-sm rounded-sm inline-block" href="#produse">
          PRODUSE
        </a>
</nav>
<button className="md:hidden text-[#7D1D1D] p-2 flex items-center justify-center">
<iconify-icon className="text-2xl tracking-tight" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</header>

<section className="mt-20 relative bg-[#7D1D1D] min-h-[75vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F5E6CA_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="z-10 animate-fade-in-up flex flex-col items-center">
<h1 className="md:text-9xl text-7xl text-white font-['Pinyon_Script'] mb-2 leading-none drop-shadow-sm tracking-tight">
        Excentric Desserts
      </h1>
<div className="w-full flex justify-center items-center gap-4 mb-12 opacity-80">
<div className="h-px w-16 bg-white/40"></div>
<span className="text-xl italic text-slate-50 tracking-tight font-['Instrument_Serif'] opacity-100">
          DESERTURI CU ATITUDINE
        </span>
<div className="h-px w-16 bg-white/40"></div>
</div>
<a className="group relative overflow-hidden bg-transparent hover:bg-white hover:text-[#7D1D1D] transition-all duration-500 ease-out text-white border border-white/30 px-8 py-3.5 inline-block rounded-sm" href="#produse">
<span className="uppercase text-xs font-light tracking-[0.2em] z-10 relative">
          Descoperă Meniul
        </span>
</a>
</div>
</section>

<div className="overflow-hidden border-stone-200/50 border-b py-5 bg-white">
<div className="flex whitespace-nowrap gap-12 animate-marquee items-center">

<div className="flex gap-12 items-center">
<span className="text-[#7D1D1D] font-normal tracking-[0.2em] uppercase text-xs">Gusturi Inedite</span>
<span className="text-xs text-stone-300">•</span>
<span className="text-[#7D1D1D] font-normal tracking-[0.2em] uppercase text-xs">Combinații Curajoase</span>
<span className="text-xs text-stone-300">•</span>
<span className="text-[#7D1D1D] font-normal tracking-[0.2em] uppercase text-xs">Arta Cofetăriei</span>
<span className="text-xs text-stone-300">•</span>
<span className="text-[#7D1D1D] font-normal tracking-[0.2em] uppercase text-xs">Experiențe Dulci</span>
<span className="text-xs text-stone-300">•</span>
</div>

<div className="flex gap-12 items-center">
<span className="text-[#7D1D1D] font-normal tracking-[0.2em] uppercase text-xs">Gusturi Inedite</span>
<span className="text-xs text-stone-300">•</span>
<span className="text-[#7D1D1D] font-normal tracking-[0.2em] uppercase text-xs">Combinații Curajoase</span>
<span className="text-xs text-stone-300">•</span>
<span className="text-[#7D1D1D] font-normal tracking-[0.2em] uppercase text-xs">Arta Cofetăriei</span>
<span className="text-xs text-stone-300">•</span>
<span className="text-[#7D1D1D] font-normal tracking-[0.2em] uppercase text-xs">Experiențe Dulci</span>
<span className="text-xs text-stone-300">•</span>
</div>

<div className="flex gap-12 items-center">
<span className="text-[#7D1D1D] font-normal tracking-[0.2em] uppercase text-xs">Gusturi Inedite</span>
<span className="text-xs text-stone-300">•</span>
<span className="text-[#7D1D1D] font-normal tracking-[0.2em] uppercase text-xs">Combinații Curajoase</span>
<span className="text-xs text-stone-300">•</span>
<span className="text-[#7D1D1D] font-normal tracking-[0.2em] uppercase text-xs">Arta Cofetăriei</span>
<span className="text-xs text-stone-300">•</span>
<span className="text-[#7D1D1D] font-normal tracking-[0.2em] uppercase text-xs">Experiențe Dulci</span>
<span className="text-xs text-stone-300">•</span>
</div>
</div>
</div>

<section className="bg-white pt-24 pb-24">
<div className="text-center max-w-4xl mx-auto px-6">
<h2 className="text-[#7D1D1D] leading-[0.9] md:text-8xl text-6xl tracking-tight font-['Instrument_Serif'] mb-8">
        Gusturi Neașteptate
        <br/>
<span className="italic font-['STIX_Two_Text'] text-stone-800">
          Deserturi ieșite din tipare.
        </span>
</h2>
<div className="w-24 h-0.5 bg-[#7D1D1D] mx-auto opacity-20"></div>
</div>
</section>

<section className="overflow-hidden bg-white pt-1 pb-1 scroll-mt-24" id="produse">
<div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between border-b border-stone-200 pb-4">
<h3 className="uppercase text-[#7D1D1D] text-xs font-normal tracking-[0.2em]">
        Colecția Excentrică
      </h3>
<div className="hidden md:flex items-center gap-2 text-xs text-stone-400 font-['Inter'] tracking-wide uppercase">
<iconify-icon className="text-lg tracking-tight" icon="solar:cursor-square-linear" strokeWidth="1.5"></iconify-icon>
<span>Glisează pentru a explora</span>
</div>
</div>

<div className="relative w-full cursor-grab active:cursor-grabbing overflow-hidden touch-none" id="slider-container">
<div className="flex w-max gap-8 px-2 will-change-transform" id="slider-track" style={{transform: 'translateX(0px)'}}>

<div className="w-[340px] flex-shrink-0 group select-none pointer-events-none md:pointer-events-auto">
<div className="aspect-square w-full overflow-hidden mb-5 bg-stone-50 rounded-sm">
<img alt="Tort Excentric Ciocolată" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none" src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex justify-between items-end mb-3">
<h4 className="font-['Inter'] font-normal text-lg uppercase text-[#7D1D1D] tracking-tight leading-none">
              Tort Excentric Ciocolată
            </h4>
<span className="font-['Inter'] font-normal text-lg text-[#7D1D1D] tracking-tight leading-none">
              145 RON
            </span>
</div>
<div className="w-full h-px bg-[#7D1D1D] mb-3 opacity-30"></div>
<div className="space-y-1">
<p className="text-xs uppercase text-[#7D1D1D] font-light tracking-wide">
              Gramaj: <span className="text-stone-500">1.2 kg</span>
</p>
<p className="text-xs uppercase text-[#7D1D1D] font-light tracking-wide">
              Ingrediente: <span className="text-stone-500">Cacao pură, Vișine, Ganache fin</span>
</p>
</div>
</div>
<div className="w-[340px] flex-shrink-0 group select-none pointer-events-none md:pointer-events-auto">
<div className="aspect-square w-full overflow-hidden mb-5 bg-stone-50 rounded-sm">
<img alt="Macarons Excentrici" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none" src="https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex justify-between items-end mb-3">
<h4 className="font-['Inter'] font-normal text-lg uppercase text-[#7D1D1D] tracking-tight leading-none">
              Macarons Excentrici
            </h4>
<span className="font-['Inter'] font-normal text-lg text-[#7D1D1D] tracking-tight leading-none">
              45 RON
            </span>
</div>
<div className="w-full h-px bg-[#7D1D1D] mb-3 opacity-30"></div>
<div className="space-y-1">
<p className="text-xs uppercase text-[#7D1D1D] font-light tracking-wide">
              Cantitate: <span className="text-stone-500">Cutie 6 buc</span>
</p>
<p className="text-xs uppercase text-[#7D1D1D] font-light tracking-wide">
              Arome: <span className="text-stone-500">Matcha, Căpșuni, Lavandă</span>
</p>
</div>
</div>
<div className="w-[340px] flex-shrink-0 group select-none pointer-events-none md:pointer-events-auto">
<div className="aspect-square w-full overflow-hidden mb-5 bg-stone-50 rounded-sm">
<img alt="Ecler cu Fistic și Zmeură" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none" src="https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex justify-between items-end mb-3">
<h4 className="font-['Inter'] font-normal text-lg uppercase text-[#7D1D1D] tracking-tight leading-none">
              Ecler Fistic &amp; Zmeură
            </h4>
<span className="font-['Inter'] font-normal text-lg text-[#7D1D1D] tracking-tight leading-none">
              22 RON
            </span>
</div>
<div className="w-full h-px bg-[#7D1D1D] mb-3 opacity-30"></div>
<div className="space-y-1">
<p className="text-xs uppercase text-[#7D1D1D] font-light tracking-wide">
              Gramaj: <span className="text-stone-500">120g / buc</span>
</p>
<p className="text-xs uppercase text-[#7D1D1D] font-light tracking-wide">
              Ingrediente: <span className="text-stone-500">Cremă fistic, Insert zmeură</span>
</p>
</div>
</div>
<div className="w-[340px] flex-shrink-0 group select-none pointer-events-none md:pointer-events-auto">
<div className="aspect-square w-full overflow-hidden mb-5 bg-stone-50 rounded-sm">
<img alt="Tiramisu Reinterpretat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none" src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex justify-between items-end mb-3">
<h4 className="font-['Inter'] font-normal text-lg uppercase text-[#7D1D1D] tracking-tight leading-none">
              Tiramisu cu Matcha
            </h4>
<span className="font-['Inter'] font-normal text-lg text-[#7D1D1D] tracking-tight leading-none">
              28 RON
            </span>
</div>
<div className="w-full h-px bg-[#7D1D1D] mb-3 opacity-30"></div>
<div className="space-y-1">
<p className="text-xs uppercase text-[#7D1D1D] font-light tracking-wide">
              Gramaj: <span className="text-stone-500">180g / porție</span>
</p>
<p className="text-xs uppercase text-[#7D1D1D] font-light tracking-wide">
              Ingrediente: <span className="text-stone-500">Mascarpone, Matcha japonez</span>
</p>
</div>
</div>

<div className="w-[340px] flex-shrink-0 group select-none pointer-events-none md:pointer-events-auto">
<div className="aspect-square w-full overflow-hidden mb-5 bg-stone-50 rounded-sm">
<img alt="Tort Excentric Ciocolată" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none" src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex justify-between items-end mb-3">
<h4 className="font-['Inter'] font-normal text-lg uppercase text-[#7D1D1D] tracking-tight leading-none">
              Tort Excentric Ciocolată
            </h4>
<span className="font-['Inter'] font-normal text-lg text-[#7D1D1D] tracking-tight leading-none">
              145 RON
            </span>
</div>
<div className="w-full h-px bg-[#7D1D1D] mb-3 opacity-30"></div>
<div className="space-y-1">
<p className="text-xs uppercase text-[#7D1D1D] font-light tracking-wide">
              Gramaj: <span className="text-stone-500">1.2 kg</span>
</p>
<p className="text-xs uppercase text-[#7D1D1D] font-light tracking-wide">
              Ingrediente: <span className="text-stone-500">Cacao pură, Vișine, Ganache fin</span>
</p>
</div>
</div>
<div className="w-[340px] flex-shrink-0 group select-none pointer-events-none md:pointer-events-auto">
<div className="aspect-square w-full overflow-hidden mb-5 bg-stone-50 rounded-sm">
<img alt="Macarons Excentrici" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none" src="https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex justify-between items-end mb-3">
<h4 className="font-['Inter'] font-normal text-lg uppercase text-[#7D1D1D] tracking-tight leading-none">
              Macarons Excentrici
            </h4>
<span className="font-['Inter'] font-normal text-lg text-[#7D1D1D] tracking-tight leading-none">
              45 RON
            </span>
</div>
<div className="w-full h-px bg-[#7D1D1D] mb-3 opacity-30"></div>
<div className="space-y-1">
<p className="text-xs uppercase text-[#7D1D1D] font-light tracking-wide">
              Cantitate: <span className="text-stone-500">Cutie 6 buc</span>
</p>
<p className="text-xs uppercase text-[#7D1D1D] font-light tracking-wide">
              Arome: <span className="text-stone-500">Matcha, Căpșuni, Lavandă</span>
</p>
</div>
</div>
<div className="w-[340px] flex-shrink-0 group select-none pointer-events-none md:pointer-events-auto">
<div className="aspect-square w-full overflow-hidden mb-5 bg-stone-50 rounded-sm">
<img alt="Ecler cu Fistic și Zmeură" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none" src="https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex justify-between items-end mb-3">
<h4 className="font-['Inter'] font-normal text-lg uppercase text-[#7D1D1D] tracking-tight leading-none">
              Ecler Fistic &amp; Zmeură
            </h4>
<span className="font-['Inter'] font-normal text-lg text-[#7D1D1D] tracking-tight leading-none">
              22 RON
            </span>
</div>
<div className="w-full h-px bg-[#7D1D1D] mb-3 opacity-30"></div>
<div className="space-y-1">
<p className="text-xs uppercase text-[#7D1D1D] font-light tracking-wide">
              Gramaj: <span className="text-stone-500">120g / buc</span>
</p>
<p className="text-xs uppercase text-[#7D1D1D] font-light tracking-wide">
              Ingrediente: <span className="text-stone-500">Cremă fistic, Insert zmeură</span>
</p>
</div>
</div>
<div className="w-[340px] flex-shrink-0 group select-none pointer-events-none md:pointer-events-auto">
<div className="aspect-square w-full overflow-hidden mb-5 bg-stone-50 rounded-sm">
<img alt="Tiramisu Reinterpretat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none" src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex justify-between items-end mb-3">
<h4 className="font-['Inter'] font-normal text-lg uppercase text-[#7D1D1D] tracking-tight leading-none">
              Tiramisu cu Matcha
            </h4>
<span className="font-['Inter'] font-normal text-lg text-[#7D1D1D] tracking-tight leading-none">
              28 RON
            </span>
</div>
<div className="w-full h-px bg-[#7D1D1D] mb-3 opacity-30"></div>
<div className="space-y-1">
<p className="text-xs uppercase text-[#7D1D1D] font-light tracking-wide">
              Gramaj: <span className="text-stone-500">180g / porție</span>
</p>
<p className="text-xs uppercase text-[#7D1D1D] font-light tracking-wide">
              Ingrediente: <span className="text-stone-500">Mascarpone, Matcha japonez</span>
</p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden py-24 bg-white scroll-mt-24" id="despre-noi">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="w-full lg:w-1/2">
<h2 className="text-[#7D1D1D] leading-[0.85] md:text-9xl text-6xl tracking-tight font-['Instrument_Serif'] mb-8">
            Arta
            <span className="mr-2 ml-10">Excentrică</span>
</h2>
<div className="space-y-6 max-w-lg">
<p className="text-lg text-stone-600 font-['Inter'] leading-relaxed font-light">
              Din pasiunea pentru deserturi ieșite din tipare, am creat Excentric Desserts. Fiecare prăjitură este o operă de artă, o explozie de gusturi surprinzătoare care provoacă simțurile și redefinesc standardele.
            </p>
<p className="text-lg text-stone-600 font-['Inter'] leading-relaxed font-light">
              Folosim ingrediente premium, rețete inovatoare și un design spectaculos. Pentru că un desert adevărat trebuie să fie la fel de memorabil pe cât este de delicios.
            </p>
<div className="pt-4">
<span className="text-[#7D1D1D] text-4xl font-['Pinyon_Script'] tracking-tight">
                Maeștri Cofetari
              </span>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 relative">
<div className="relative z-10 transform rotate-1 transition-transform hover:rotate-0 duration-700">
<div className="absolute inset-0 border border-[#7D1D1D]/20 translate-x-4 translate-y-4 -z-10 rounded-sm"></div>
<img alt="Detaliu cofetărie" className="grayscale hover:grayscale-0 transition-all duration-700 w-full h-auto shadow-2xl rounded-sm" src="https://images.unsplash.com/photo-1557308536-ee471ef2c390?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#7D1D1D] text-white py-24 border-y border-[#F5E6CA]/10">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-5xl md:text-7xl text-[#F5E6CA] tracking-tight font-['Instrument_Serif'] text-center mb-16">
        Secretul Excentric
      </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="px-4 pt-8 md:pt-0">
<div className="flex justify-center mb-6 text-[#F5E6CA]">
<iconify-icon className="text-5xl tracking-tight" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-light text-[#F5E6CA] font-['Instrument_Serif'] mb-4 tracking-tight">
            Ingrediente Premium
          </h3>
<p className="text-white/80 text-sm font-['Inter'] leading-relaxed max-w-xs mx-auto font-light">
            Selecționăm cele mai fine boabe de cacao, vanilie pură și fructe proaspete, pentru a obține arome intense.
          </p>
</div>
<div className="px-4 pt-8 md:pt-0">
<div className="flex justify-center mb-6 text-[#F5E6CA]">
<iconify-icon className="text-5xl tracking-tight" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-light text-[#F5E6CA] font-['Instrument_Serif'] mb-4 tracking-tight">
            Rețete Inovatoare
          </h3>
<p className="text-white/80 text-sm font-['Inter'] leading-relaxed max-w-xs mx-auto font-light">
            Combinăm texturi și arome complet noi. Păstrăm esența tradiției, dar îi adăugăm mereu un plus de originalitate.
          </p>
</div>
<div className="px-4 pt-8 md:pt-0">
<div className="flex justify-center mb-6 text-[#F5E6CA]">
<iconify-icon className="text-5xl tracking-tight" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-light text-[#F5E6CA] font-['Instrument_Serif'] mb-4 tracking-tight">
            Design Spectaculos
          </h3>
<p className="text-white/80 text-sm font-['Inter'] leading-relaxed max-w-xs mx-auto font-light">
            Credem că frumusețea unui desert contează la fel de mult. Fiecare produs este decorat manual, cu atenție infinită.
          </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden py-24 bg-[#FDFBF7]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row lg:gap-24 gap-16">
<div className="w-full lg:w-[45%] relative">
<div className="relative aspect-[4/5] w-full overflow-hidden shadow-xl rounded-sm">
<img alt="Detaliu desert" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute bottom-0 right-0 bg-[#7D1D1D] text-white p-8 pr-12 z-10 w-[80%] max-w-[280px]">
<span className="block text-5xl font-['Pinyon_Script'] text-center mb-2 tracking-tight">
                Inovație
              </span>
<span className="block text-xs uppercase text-white/80 tracking-[0.25em] font-['Inter'] text-center font-light">
                fără limite
              </span>
</div>
</div>
</div>
<div className="w-full lg:w-[55%] pt-4 lg:pt-12">
<span className="font-['Instrument_Serif'] italic text-[#7D1D1D] text-xl mb-4 block tracking-tight">
            Redefinim conceptul de dulce
          </span>
<h2 className="font-['Instrument_Serif'] text-5xl md:text-6xl leading-[0.9] text-stone-900 mb-12 tracking-tight">
            Deserturi gândite
            <span className="text-[#7D1D1D] italic block mt-2">
              să impresioneze.
            </span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 border-t border-stone-200 pt-12">
<div>
<h3 className="font-['Instrument_Serif'] text-2xl mb-4 text-stone-900 tracking-tight">
                Un Vis Curajos
              </h3>
<p className="text-stone-600 font-['Inter'] text-sm leading-relaxed font-light">
                Excentric Desserts a pornit din dorința de a aduce pe mesele oamenilor altceva decât clasicul. Am transformat un laborator de visuri într-un loc de referință pentru iubitorii de dulce modern.
              </p>
</div>
<div>
<h3 className="font-['Instrument_Serif'] text-2xl mb-4 text-stone-900 tracking-tight">
                Evoluție Continuă
              </h3>
<p className="text-stone-600 font-['Inter'] text-sm leading-relaxed font-light">
                Testăm, inovăm și rafinăm constant. Deși tehnicile sunt complexe și moderne, sufletul și bucuria pe care le punem în fiecare preparat ne reprezintă.
              </p>
</div>
</div>
<div className="relative py-8 border-t border-stone-200">
<span className="absolute top-8 left-0 text-[#7D1D1D] text-4xl font-['Instrument_Serif'] font-semibold opacity-20 tracking-tight">
              “
            </span>
<p className="md:text-2xl leading-snug text-xl italic text-stone-800 font-['Instrument_Serif'] text-center mb-6 pr-8 pl-8 tracking-tight">
              "Un desert excentric nu doar se gustă, ci se trăiește, transformând un moment simplu într-o amintire de neuitat."
            </p>
<p className="text-center text-xs tracking-[0.2em] uppercase text-[#7D1D1D] font-normal">
              — Echipa Excentric
            </p>
</div>
</div>
</div>
</div>
</section>

<div className="bg-[#7D1D1D] border-y border-white/10 py-5 overflow-hidden">
<div className="flex whitespace-nowrap gap-16 animate-marquee items-center">
<div className="flex items-center gap-16">
<span className="text-[#F5E6CA] font-['Instrument_Serif'] italic text-2xl tracking-tight uppercase">
          Creativitate
        </span>
<span className="text-[#F5E6CA]/40 text-sm">•</span>
<span className="text-[#F5E6CA] font-['Instrument_Serif'] italic text-2xl tracking-tight uppercase">
          Gust Excentric
        </span>
<span className="text-[#F5E6CA]/40 text-sm">•</span>
<span className="text-[#F5E6CA] font-['Instrument_Serif'] italic text-2xl tracking-tight uppercase">
          Design Memorabil
        </span>
<span className="text-[#F5E6CA]/40 text-sm">•</span>
</div>
<div className="flex items-center gap-16">
<span className="text-[#F5E6CA] font-['Instrument_Serif'] italic text-2xl tracking-tight uppercase">
          Creativitate
        </span>
<span className="text-[#F5E6CA]/40 text-sm">•</span>
<span className="text-[#F5E6CA] font-['Instrument_Serif'] italic text-2xl tracking-tight uppercase">
          Gust Excentric
        </span>
<span className="text-[#F5E6CA]/40 text-sm">•</span>
<span className="text-[#F5E6CA] font-['Instrument_Serif'] italic text-2xl tracking-tight uppercase">
          Design Memorabil
        </span>
<span className="text-[#F5E6CA]/40 text-sm">•</span>
</div>
<div className="flex items-center gap-16">
<span className="text-[#F5E6CA] font-['Instrument_Serif'] italic text-2xl tracking-tight uppercase">
          Creativitate
        </span>
<span className="text-[#F5E6CA]/40 text-sm">•</span>
<span className="text-[#F5E6CA] font-['Instrument_Serif'] italic text-2xl tracking-tight uppercase">
          Gust Excentric
        </span>
<span className="text-[#F5E6CA]/40 text-sm">•</span>
<span className="text-[#F5E6CA] font-['Instrument_Serif'] italic text-2xl tracking-tight uppercase">
          Design Memorabil
        </span>
<span className="text-[#F5E6CA]/40 text-sm">•</span>
</div>
</div>
</div>

<section className="bg-[#7D1D1D] text-white py-24 relative scroll-mt-24" id="locatie">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<a className="block w-full h-96 bg-stone-900 rounded-sm overflow-hidden relative border border-white/5 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500 group" href="https://maps.google.com/?q=Șoseaua+Virtuții+148a,+București" target="_blank">
<div className="absolute inset-0 flex items-center justify-center z-10 bg-black/40 group-hover:bg-black/20 transition-all">
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-5xl text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-500 tracking-tight" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="bg-[#7D1D1D] text-white px-6 py-3 rounded-sm font-['Inter'] text-sm tracking-[0.2em] uppercase shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                Deschide Harta
              </span>
</div>
</div>
<img alt="Locația noastră" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</a>

<div className="lg:pl-12">
<h2 className="inline-block text-6xl text-[#F5E6CA] tracking-tight font-['Instrument_Serif'] border-white/20 border-b pb-2 mb-8">
            Vizitează-ne
          </h2>
<div className="space-y-8">
<div>
<h4 className="text-lg font-normal tracking-tight font-['Inter'] mb-1 text-white/90">
                Adresă
              </h4>
<p className="font-['Inter'] text-white/60 font-light text-base">
                Șoseaua Virtuții 148a, București
                <a className="hover:text-white transition-colors flex items-center gap-2 mt-1" href="https://maps.google.com/?q=Șoseaua+Virtuții+148a,+București" target="_blank">
                  Deschide în Google Maps
                  <iconify-icon className="text-lg tracking-tight" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div>
<h4 className="text-lg font-normal tracking-tight font-['Inter'] mb-1 text-white/90">
                  Telefon
                </h4>
<p className="font-['Inter'] text-white/60 font-light text-base">
                  0722 282 577
                </p>
</div>
<div>
<h4 className="text-lg font-normal tracking-tight font-['Inter'] mb-1 text-white/90">
                  Email
                </h4>
<p className="font-['Inter'] text-white/60 font-light text-base">
                  excentric.desserts@gmail.com
                </p>
</div>
</div>
<div className="pt-8">
<p className="font-['STIX_Two_Text'] italic text-white/50 text-base leading-relaxed">
                "Treci pragul cofetăriei noastre și lasă-te surprins de arome unice, texturi inedite și momente care sfidează banalul."
              </p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#7D1D1D] text-white pt-20 pb-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end">
<div className="mb-12 md:mb-0">
<h3 className="font-['Instrument_Serif'] text-3xl mb-6 leading-tight tracking-tight text-white/90">
            Îndrăznim
            <br/>
            să fim diferiți
          </h3>
<div className="space-y-4 font-['Inter'] text-xs text-white/60 font-light">
<div className="flex gap-12">
<div>
<strong className="text-white/80 block mb-2 font-normal">
                  Social
                </strong>
<a className="block mb-1 hover:text-white transition-colors" href="#">Instagram</a>
<a className="block hover:text-white transition-colors" href="#">Facebook</a>
</div>
<div>
<strong className="text-white/80 block mb-2 font-normal">
                  Program
                </strong>
<span className="block mb-1">08:00 - 20:00</span>
<span className="block">Luni - Duminică</span>
</div>
</div>
<p className="pt-6 max-w-xs opacity-50">
<a className="hover:text-white transition-colors underline underline-offset-4" href="https://maps.google.com/?q=Șoseaua+Virtuții+148a,+București" target="_blank">
                Deschide în Google Maps
              </a>
</p>
</div>
</div>
<div className="relative text-right select-none">
<span className="text-7xl md:text-9xl leading-none block -mb-4 md:-mb-6 text-[#F5E6CA] font-['Pinyon_Script'] opacity-80 tracking-tight">
            EXCENTRIC
          </span>
<span className="uppercase text-sm md:text-base text-[#F5E6CA] tracking-[0.3em] font-['STIX_Two_Text'] relative right-2 opacity-80">
            Desserts
          </span>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-['Inter'] font-light gap-4">
<p>© 2024 Excentric Desserts.</p>
<p>Arta dulciurilor neconvenționale.</p>
</div>
</div>
</footer>


    </>
  );
}
