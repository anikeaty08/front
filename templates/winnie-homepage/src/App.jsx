import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      function scrollSolutions(direction) {
        const container = document.getElementById('solutions-scroll');
        if(container) {
          const w = window.innerWidth;
          let scrollAmount = w * 0.90;
          if (w >= 1024) scrollAmount = 1032;
          else if (w >= 768) scrollAmount = 888;
          container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        }
      }
    


      document.addEventListener('DOMContentLoaded', () => {
        const slides = document.querySelectorAll('.slide-img');
        let currentSlide = 0;
        if(slides.length > 0) {
          setInterval(() => {
            slides[currentSlide].classList.remove('opacity-100');
            slides[currentSlide].classList.add('opacity-0');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.remove('opacity-0');
            slides[currentSlide].classList.add('opacity-100');
          }, 4000);
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-[#FBFAF6]/5 glass-panel">
<div className="flex h-16 max-w-7xl mx-auto px-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="flex overflow-hidden bg-center bg-[#2D2926] w-20 h-20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fcfb12cf-ca90-40ae-9988-78c5eaefbf45_320w.png)] bg-cover border-[#FBFAF6]/10 border rounded-lg relative shadow-inner items-center justify-center">
<div className="absolute -top-1 -right-1 w-3 h-3 bg-[#C44041] rounded-bl-lg"></div>
</div>
</a>

<div className="hidden md:flex gap-8 items-center">
<a className="hover:text-[#C44041] transition-colors text-sm font-medium text-[#FBFAF6]/80" href="#riesenia">
            Riešenia
          </a>
<a className="hover:text-[#C44041] transition-colors text-sm font-medium text-[#FBFAF6]/80" href="#o-nas">
            O nás
          </a>
<a className="hover:text-[#C44041] transition-colors text-sm font-medium text-[#FBFAF6]/80" href="#prace">Referencie</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-[#FBFAF6] transition-all duration-200 bg-[#FBFAF6]/5 border border-[#FBFAF6]/10 rounded-full hover:bg-[#FBFAF6]/10 hover:border-[#FBFAF6]/20 focus:outline-none" href="#eshop">
<iconify-icon className="mr-2 text-[#C44041]" icon="solar:cart-large-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
            E-shop
          </a>
<a className="inline-flex items-center justify-center transition-all duration-300 hover:bg-[#a33536] hover:shadow-lg hover:shadow-[#C44041]/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#2D2926] focus:ring-[#C44041] active:scale-95 text-sm font-medium text-[#FBFAF6] bg-[#C44041] rounded-full pt-2 pr-5 pb-2 pl-5" href="#kontakt">
            Kontakt
          </a>
</div>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#2D2926] pt-24">
<div className="absolute inset-0 z-0" id="hero-slider">
<img alt="Kancelárie" className="w-full h-full object-cover absolute inset-0 opacity-100 transition-opacity duration-1000 slide-img" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<img alt="Školy" className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-1000 slide-img" src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<img alt="Výroba" className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-1000 slide-img" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<img alt="Obchodné centrá" className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-1000 slide-img" src="https://images.unsplash.com/photo-1519567281027-1c620c3a3ee3?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="z-10 bg-gradient-to-b from-[#2D2926]/90 via-[#2D2926]/75 to-[#2D2926] absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 flex-1 flex flex-col text-center max-w-4xl mx-auto px-6 relative items-center justify-center mt-10 md:mt-20 mb-16">
<h1 className="md:text-7xl leading-[1.05] text-5xl font-medium text-[#FBFAF6] tracking-tight text-center mb-6 drop-shadow-lg">
          Prémiový vending.
          <br/>
<span className="text-[#C44041]">Bez starostí.</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-normal text-[#FBFAF6]/80 max-w-2xl mb-10 drop-shadow">
          Moderné automaty, spoľahlivé technológie a chuť, pre ktorú sa budete
          do práce tešiť. Postaráme sa o všetko od inštalácie až po pravidelný
          servis.
        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[#FBFAF6] bg-[#C44041] rounded-full hover:bg-[#a33536] transition-all duration-300 shadow-xl shadow-[#C44041]/20 active:scale-95 group" href="#kontakt">
            Mám záujem
            <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center hover:bg-[#FBFAF6]/20 transition-all duration-300 active:scale-95 text-base font-medium text-[#FBFAF6] bg-[#FBFAF6]/10 border-[#FBFAF6]/20 border rounded-full pt-4 pr-8 pb-4 pl-8 backdrop-blur-md" href="#riesenia">
            Pozrieť riešenia
          </a>
</div>
</div>

<div className="relative z-10 w-full bg-gradient-to-t from-[#2D2926] to-transparent pt-12 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-[#FBFAF6]/5 backdrop-blur-xl border border-[#FBFAF6]/10 rounded-2xl p-6 flex items-center gap-5 group hover:bg-[#FBFAF6]/10 hover:border-[#C44041]/30 transition-all duration-300">
<div className="w-14 h-14 rounded-full bg-[#C44041]/10 flex items-center justify-center text-[#C44041] shrink-0 group-hover:scale-110 group-hover:bg-[#C44041]/20 transition-all duration-300">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-[#FBFAF6] tracking-tight mb-1">
                  Garantovaná čistota
                </h3>
<p className="text-sm text-[#FBFAF6]/60 leading-snug">
                  Pravidelná údržba a 100% hygienické štandardy.
                </p>
</div>
</div>
<div className="bg-[#FBFAF6]/5 backdrop-blur-xl border border-[#FBFAF6]/10 rounded-2xl p-6 flex items-center gap-5 group hover:bg-[#FBFAF6]/10 hover:border-[#C44041]/30 transition-all duration-300">
<div className="w-14 h-14 rounded-full bg-[#C44041]/10 flex items-center justify-center text-[#C44041] shrink-0 group-hover:scale-110 group-hover:bg-[#C44041]/20 transition-all duration-300">
<iconify-icon icon="solar:smart-home-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-[#FBFAF6] tracking-tight mb-1">
                  24/7 Monitoring
                </h3>
<p className="text-sm text-[#FBFAF6]/60 leading-snug">
                  Smart systémy hlásia potrebu doplnenia vopred.
                </p>
</div>
</div>
<div className="bg-[#FBFAF6]/5 backdrop-blur-xl border border-[#FBFAF6]/10 rounded-2xl p-6 flex items-center gap-5 group hover:bg-[#FBFAF6]/10 hover:border-[#C44041]/30 transition-all duration-300">
<div className="w-14 h-14 rounded-full bg-[#C44041]/10 flex items-center justify-center text-[#C44041] shrink-0 group-hover:scale-110 group-hover:bg-[#C44041]/20 transition-all duration-300">
<iconify-icon className="" icon="solar:map-point-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-[#FBFAF6] tracking-tight mb-1">
                  Bleskový servis
                </h3>
<p className="leading-snug text-sm text-[#FBFAF6]/60">
                  Naša servisná flotila je v neustálej pohotovosti.
                </p>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="md:py-32 overflow-hidden bg-[#FBFAF6] pt-24 pb-24 relative" id="riesenia">
<div className="max-w-3xl mx-auto px-6 mb-12 flex flex-col items-center text-center relative z-10">
<h2 className="md:text-5xl text-4xl font-medium text-[#2D2926] tracking-tight mb-6">Riešenia, ktoré pristanú <br className="hidden md:block"/> vášmu priestoru.</h2>
<p className="leading-relaxed text-lg font-normal text-[#2D2926]/70">Nezáleží na tom, či hľadáte reprezentatívny kávomat do modernej kancelárie, alebo robustný systém pre výrobnú halu či exteriér.</p>
</div>

<div className="relative w-full group/slider max-w-[100vw]">

<button className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-[#FBFAF6]/90 backdrop-blur border border-[#2D2926]/10 rounded-full items-center justify-center text-[#2D2926] shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:bg-[#C44041] hover:border-[#C44041] hover:text-[#FBFAF6] hover:scale-110 transition-all duration-300 opacity-0 group-hover/slider:opacity-100 focus:outline-none" onclick="scrollSolutions(-1)">
<iconify-icon className="" height="24" icon="solar:arrow-left-linear" strokeWidth="1.5" style={{color: 'rgb(251, 250, 246)'}} width="24"></iconify-icon>
</button>
<button className="hidden md:flex -translate-y-1/2 z-20 hover:bg-[#C44041] hover:border-[#C44041] hover:text-[#FBFAF6] hover:scale-110 transition-all duration-300 group-hover/slider:opacity-100 focus:outline-none text-[#2D2926] bg-[#FBFAF6]/90 opacity-0 w-14 h-14 border-[#2D2926]/10 border rounded-full absolute top-1/2 right-8 shadow-[0_8px_30px_rgb(0,0,0,0.1)] backdrop-blur items-center justify-center" onclick="scrollSolutions(1)">
<iconify-icon className="" height="24" icon="solar:arrow-right-linear" strokeWidth="1.5" style={{color: 'rgb(251, 250, 246)'}} width="24"></iconify-icon>
</button>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar w-full pb-12 relative gap-x-6 gap-y-6 items-center" id="solutions-scroll">
<div className="shrink-0 scroll-padding-spacer"></div>

<div className="snap-start shrink-0 w-[90vw] md:w-[864px] lg:w-[1008px] h-[648px] md:h-[792px] relative rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-2xl shadow-[#2D2926]/5">
<img alt="Kancelárie a administratívne budovy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2926] via-[#2D2926]/60 to-transparent"></div>
<div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="max-w-2xl">
<h3 className="text-3xl md:text-4xl font-medium text-[#FBFAF6] mb-3 tracking-tight group-hover:text-[#C44041] transition-colors drop-shadow-lg">
                    Kancelárie a administratívne budovy
                  </h3>
<p className="text-[#FBFAF6]/80 text-sm md:text-base drop-shadow leading-relaxed mb-0">
                    Kancelárske priestory, úrady, coworkingy a business centrá.
                    Praktické pre rýchle občerstvenie v pracovnom tempe.
                  </p>
</div>
<div className="shrink-0">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-[#FBFAF6] bg-[#C44041] rounded-full hover:bg-[#a33536] transition-all duration-300 active:scale-95 shadow-lg shadow-[#C44041]/20 group" href="#kontakt">
                    Zistiť viac
                    <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[90vw] md:w-[864px] lg:w-[1008px] h-[648px] md:h-[792px] relative rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-2xl shadow-[#2D2926]/5">
<img alt="Školy a univerzity" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2926] via-[#2D2926]/60 to-transparent"></div>
<div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="max-w-2xl">
<h3 className="text-3xl md:text-4xl font-medium text-[#FBFAF6] mb-3 tracking-tight group-hover:text-[#C44041] transition-colors drop-shadow-lg">
                    Školy a univerzity
                  </h3>
<p className="text-[#FBFAF6]/80 text-sm md:text-base drop-shadow leading-relaxed mb-0">
                    Zahŕňa školy, univerzity, študentské domovy a internáty.
                    Ideálne pre študentské prostredie s vysokou frekvenciou
                    návštev.
                  </p>
</div>
<div className="shrink-0">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-[#FBFAF6] bg-[#C44041] rounded-full hover:bg-[#a33536] transition-all duration-300 active:scale-95 shadow-lg shadow-[#C44041]/20 group" href="#kontakt">
                    Zistiť viac
                    <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[90vw] md:w-[864px] lg:w-[1008px] h-[648px] md:h-[792px] relative rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-2xl shadow-[#2D2926]/5">
<img alt="Výroba a priemyselné areály" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2926] via-[#2D2926]/60 to-transparent"></div>
<div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="max-w-2xl">
<h3 className="text-3xl md:text-4xl font-medium text-[#FBFAF6] mb-3 tracking-tight group-hover:text-[#C44041] transition-colors drop-shadow-lg">
                    Výroba a priemyselné areály
                  </h3>
<p className="text-[#FBFAF6]/80 text-sm md:text-base drop-shadow leading-relaxed mb-0">
                    Výrobné haly, sklady, logistické centrá a dielne. Rieši
                    občerstvenie pre smeny a zamestnancov v priemysle.
                  </p>
</div>
<div className="shrink-0">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-[#FBFAF6] bg-[#C44041] rounded-full hover:bg-[#a33536] transition-all duration-300 active:scale-95 shadow-lg shadow-[#C44041]/20 group" href="#kontakt">
                    Zistiť viac
                    <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[90vw] md:w-[864px] lg:w-[1008px] h-[648px] md:h-[792px] relative rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-2xl shadow-[#2D2926]/5">
<img alt="Športoviská a fitness centrá" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2926] via-[#2D2926]/60 to-transparent"></div>
<div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="max-w-2xl">
<h3 className="text-3xl md:text-4xl font-medium text-[#FBFAF6] mb-3 tracking-tight group-hover:text-[#C44041] transition-colors drop-shadow-lg">
                    Športoviská a fitness centrá
                  </h3>
<p className="text-[#FBFAF6]/80 text-sm md:text-base drop-shadow leading-relaxed mb-0">
                    Posilňovne, štadióny, arény, haly a športové areály.
                    Zameriava sa na zdravé snacky a nápoje pre aktívnych
                    návštevníkov.
                  </p>
</div>
<div className="shrink-0">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-[#FBFAF6] bg-[#C44041] rounded-full hover:bg-[#a33536] transition-all duration-300 active:scale-95 shadow-lg shadow-[#C44041]/20 group" href="#kontakt">
                    Zistiť viac
                    <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[90vw] md:w-[864px] lg:w-[1008px] h-[648px] md:h-[792px] relative rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-2xl shadow-[#2D2926]/5">
<img alt="Stavby a dočasné lokality" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2926] via-[#2D2926]/60 to-transparent"></div>
<div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="max-w-2xl">
<h3 className="text-3xl md:text-4xl font-medium text-[#FBFAF6] mb-3 tracking-tight group-hover:text-[#C44041] transition-colors drop-shadow-lg">
                    Stavby a dočasné lokality
                  </h3>
<p className="text-[#FBFAF6]/80 text-sm md:text-base drop-shadow leading-relaxed mb-0">
                    Staveniská, dočasné stavby, rekonštrukcie, pracovné tábory a
                    súvisiace dočasné objekty. Robustné riešenia odolné voči
                    vonkajším podmienkam.
                  </p>
</div>
<div className="shrink-0">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-[#FBFAF6] bg-[#C44041] rounded-full hover:bg-[#a33536] transition-all duration-300 active:scale-95 shadow-lg shadow-[#C44041]/20 group" href="#kontakt">
                    Zistiť viac
                    <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[90vw] md:w-[864px] lg:w-[1008px] h-[648px] md:h-[792px] relative rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-2xl shadow-[#2D2926]/5">
<img alt="Obchodné centrá a verejné priestory" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2926] via-[#2D2926]/60 to-transparent"></div>
<div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="max-w-2xl">
<h3 className="text-3xl md:text-4xl font-medium text-[#FBFAF6] mb-3 tracking-tight group-hover:text-[#C44041] transition-colors drop-shadow-lg">
                    Obchodné centrá a verejné priestory
                  </h3>
<p className="text-[#FBFAF6]/80 text-sm md:text-base drop-shadow leading-relaxed mb-0">
                    Nákupné centrá, retail parky, stanice, letiská, vonkajšie
                    uzly a verejné zóny. Future-proof pre vysoký traffic 24/7.
                  </p>
</div>
<div className="shrink-0">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-[#FBFAF6] bg-[#C44041] rounded-full hover:bg-[#a33536] transition-all duration-300 active:scale-95 shadow-lg shadow-[#C44041]/20 group" href="#kontakt">
                    Zistiť viac
                    <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="snap-start shrink-0 w-[90vw] md:w-[864px] lg:w-[1008px] h-[648px] md:h-[792px] relative rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-[#2D2926]/5 bg-[#2D2926] flex flex-col items-center justify-center border border-[#2D2926]/10 hover:border-[#C44041]/30 transition-all duration-500 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-[#C44041]/10 via-[#2D2926]/0 to-transparent pointer-events-none"></div>
<div className="z-10 flex flex-col items-center text-center max-w-2xl px-6 md:px-12">
<div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#C44041]/10 flex items-center justify-center text-[#C44041] mb-8 group-hover:scale-110 group-hover:bg-[#C44041]/20 transition-all duration-500 shadow-xl shadow-[#C44041]/10">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="56"></iconify-icon>
</div>
<h3 className="text-3xl md:text-5xl font-medium text-[#FBFAF6] mb-6 tracking-tight group-hover:text-[#C44041] transition-colors">
                Riešenia na mieru
              </h3>
<p className="text-[#FBFAF6]/70 text-base md:text-lg leading-relaxed mb-10">
                Nenašli ste čo hľadáte? Prispôsobíme sa vášmu brandu a
                priestoru. Zabezpečíme inštaláciu aj firemný dizajn presne podľa
                vašich predstáv.
              </p>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[#FBFAF6] bg-[#C44041] rounded-full hover:bg-[#a33536] transition-all duration-300 shadow-xl shadow-[#C44041]/20 active:scale-95 group/btn" href="#kontakt">
                Zobraziť možnosti
                <iconify-icon className="ml-2 group-hover/btn:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="shrink-0 scroll-padding-spacer"></div>
</div>
</div>

</section>

<section className="md:py-32 pt-24 pb-24 bg-[#2D2926] relative" id="o-nas">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-4xl md:text-5xl font-medium text-[#FBFAF6] tracking-tight mb-6">
              S Winnie si
              <span className="text-[#C44041]">iný.</span>
</h2>
<p className="text-lg text-[#FBFAF6]/70 leading-relaxed mb-8 max-w-lg">
              Veríme, že prestávka na kávu nie je len nutnosťou, ale rituálom,
              ktorý formuje náladu na pracovisku. Neponúkame obyčajné automaty,
              tvoríme priestor, kde sa vaši ľudia radi zastavia, oddýchnu si a
              načerpajú novú energiu.
            </p>
<a className="inline-flex items-center justify-center hover:bg-[#a33536] transition-all duration-300 shadow-xl shadow-[#C44041]/20 active:scale-95 text-base font-medium text-[#FBFAF6] bg-[#C44041] rounded-full px-8 py-4 group" href="#kontakt">
              Spoznajte náš príbeh
              <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
<div className="order-1 lg:order-2 relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-black/40 border border-[#FBFAF6]/10">
<img alt="Winnie komunita" className="group-hover:scale-105 transition-transform duration-1000 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e027e0d-87bb-48de-8432-a3c6f688e500_1600w.png"/>
</div>
</div>
</div>
</section>
<section className="md:py-32 overflow-hidden bg-[#FBFAF6] pt-24 pb-24 relative" id="partneri">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-medium text-[#2D2926] tracking-tight mb-4">
            Naši
            <span className="text-[#C44041]">partneri</span>
</h2>
<p className="text-lg text-[#2D2926]/70 max-w-2xl mx-auto leading-relaxed">
            Spolupracujeme s poprednými dodávateľmi a výrobcami, aby sme vám
            mohli prinášať tie najlepšie technológie a suroviny na trhu.
          </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70 mt-12">
<div className="flex flex-col items-center justify-center w-full grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300 group gap-3 py-6">
<iconify-icon className="text-[#2D2926] group-hover:text-[#C44041] transition-colors" icon="solar:cup-hot-bold" width="48"></iconify-icon>
<span className="text-xl font-bold tracking-tighter uppercase text-[#2D2926] group-hover:text-[#C44041] transition-colors">
              Lavazza
            </span>
</div>
<div className="flex flex-col items-center justify-center w-full grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300 group gap-3 py-6">
<iconify-icon className="text-[#2D2926] group-hover:text-[#C44041] transition-colors" icon="solar:shop-bold" width="48"></iconify-icon>
<span className="text-xl font-bold tracking-tighter uppercase text-[#2D2926] group-hover:text-[#C44041] transition-colors">
              Necta
            </span>
</div>
<div className="flex flex-col items-center justify-center w-full grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300 group gap-3 py-6">
<iconify-icon className="text-[#2D2926] group-hover:text-[#C44041] transition-colors" icon="solar:tea-cup-bold" width="48"></iconify-icon>
<span className="text-xl font-bold tracking-tighter uppercase text-[#2D2926] group-hover:text-[#C44041] transition-colors">
              Julius Meinl
            </span>
</div>
<div className="flex flex-col items-center justify-center w-full grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300 group gap-3 py-6">
<iconify-icon className="text-[#2D2926] group-hover:text-[#C44041] transition-colors" icon="solar:smart-home-bold" width="48"></iconify-icon>
<span className="text-xl font-bold tracking-tighter uppercase text-[#2D2926] group-hover:text-[#C44041] transition-colors">
              Evoca
            </span>
</div>
<div className="flex flex-col items-center justify-center w-full grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300 group gap-3 py-6">
<iconify-icon className="text-[#2D2926] group-hover:text-[#C44041] transition-colors" icon="solar:waterdrops-bold" width="48"></iconify-icon>
<span className="text-xl font-bold tracking-tighter uppercase text-[#2D2926] group-hover:text-[#C44041] transition-colors">
              BWT
            </span>
</div>
<div className="flex flex-col items-center justify-center w-full grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300 group gap-3 py-6">
<iconify-icon className="text-[#2D2926] group-hover:text-[#C44041] transition-colors" icon="solar:card-2-bold" width="48"></iconify-icon>
<span className="text-xl font-bold tracking-tighter uppercase text-[#2D2926] group-hover:text-[#C44041] transition-colors">
              Nayax
            </span>
</div>
</div>
</div>
</section>
<section className="md:py-32 bg-[#2D2926] border-[#FBFAF6]/5 border-t pt-24 pb-24" id="prace">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-8 mb-16 md:mb-24 md:items-center">
<div className="max-w-2xl">
<h2 className="md:text-5xl text-4xl font-medium text-[#FBFAF6] tracking-tight mb-6">
              Priestory, ktoré sme
              <span className="text-[#C44041]">premenili.</span>
</h2>
<p className="text-lg text-[#FBFAF6]/70 font-normal leading-relaxed">
              Inšpirujte sa inštaláciami, ktoré sme realizovali pre našich
              klientov. Od dizajnových kancelárií až po náročné priemyselné
              prevádzky – každý priestor je pre nás výzvou na vytvorenie
              dokonalého kávového zážitku.
            </p>
</div>
<div className="shrink-0">
<a className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 text-base font-medium text-[#FBFAF6] bg-[#C44041] rounded-full hover:bg-[#a33536] transition-all duration-300 active:scale-95 shadow-xl shadow-[#C44041]/20 group" href="/prace">
              Zobraziť všetky práce
              <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="-ml-[50vw] -mr-[50vw] overflow-hidden flex flex-col gap-6 w-[100vw] pb-8 relative right-[50%] left-[50%] gap-x-6 gap-y-6">
<div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
<div className="flex gap-6 shrink-0">
<div className="group relative rounded-[2.5rem] overflow-hidden border border-[#FBFAF6]/10 w-[80vw] md:w-[480px] h-[360px] md:h-[480px] shrink-0 cursor-pointer shadow-lg shadow-[#2D2926]/20">
<img alt="Fitness a plaváreň" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/279d5961-17c3-49c7-8e9e-06b78716faa1_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2926] via-[#2D2926]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-2xl font-medium text-[#FBFAF6] tracking-tight mb-1 drop-shadow-md">
                    Fitness a plaváreň
                  </span>
<span className="text-base font-medium text-[#C44041] drop-shadow-md"></span>
</div>
</div>
<div className="group relative rounded-[2.5rem] overflow-hidden border border-[#FBFAF6]/10 w-[80vw] md:w-[480px] h-[360px] md:h-[480px] shrink-0 cursor-pointer shadow-lg shadow-[#2D2926]/20">
<img alt="PRP" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b460d3c0-9b97-4cd3-92d9-09a4b8cd756c_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2926] via-[#2D2926]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-2xl font-medium text-[#FBFAF6] tracking-tight mb-1 drop-shadow-md">
                    PRP
                  </span>
</div>
</div>
<div className="group relative rounded-[2.5rem] overflow-hidden border border-[#FBFAF6]/10 w-[80vw] md:w-[480px] h-[360px] md:h-[480px] shrink-0 cursor-pointer shadow-lg shadow-[#2D2926]/20">
<img alt="Stavba nových bytov Ružinov" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/73e1b37e-70e7-4e13-b145-df3f0456b6b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2926] via-[#2D2926]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-2xl font-medium text-[#FBFAF6] tracking-tight mb-1 drop-shadow-md">
                    Stavba nových bytov Ružinov
                  </span>
</div>
</div>
<div className="group relative rounded-[2.5rem] overflow-hidden border border-[#FBFAF6]/10 w-[80vw] md:w-[480px] h-[360px] md:h-[480px] shrink-0 cursor-pointer shadow-lg shadow-[#2D2926]/20">
<img alt="Zimný štadión" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df36ffb4-a119-4881-b25b-7b41f6c3d4f9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2926] via-[#2D2926]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-2xl font-medium text-[#FBFAF6] tracking-tight mb-1 drop-shadow-md">
                    Zimný štadión
                  </span>
</div>
</div>
<div className="group relative rounded-[2.5rem] overflow-hidden border border-[#FBFAF6]/10 w-[80vw] md:w-[480px] h-[360px] md:h-[480px] shrink-0 cursor-pointer shadow-lg shadow-[#2D2926]/20">
<img alt="Zakladná škola" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fab13e81-6baa-4f2f-adaf-3a994143ee0d_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2926] via-[#2D2926]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-2xl font-medium text-[#FBFAF6] tracking-tight mb-1 drop-shadow-md">
                    Zakladná škola
                  </span>
<span className="text-base font-medium text-[#C44041] drop-shadow-md">
                    Veľký Krtíš
                  </span>
</div>
</div>
<div className="group relative rounded-[2.5rem] overflow-hidden bg-[#FBFAF6]/5 flex flex-col items-center justify-center border border-[#FBFAF6]/10 hover:bg-[#FBFAF6]/10 transition-colors duration-300 w-[80vw] md:w-[480px] h-[360px] md:h-[480px] shrink-0 cursor-pointer shadow-lg shadow-[#2D2926]/20">
<a className="flex flex-col items-center gap-4 text-[#FBFAF6] group/more w-full h-full justify-center" href="#kontakt">
<div className="w-20 h-20 rounded-full bg-[#C44041] flex items-center justify-center group-hover/more:scale-110 transition-transform duration-300 shadow-xl shadow-[#C44041]/20">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="font-medium text-xl tracking-tight">
                    Váš priestor?
                  </span>
</a>
</div>
</div>
<div aria-hidden="true" className="flex gap-6 shrink-0">
<div className="group relative rounded-[2.5rem] overflow-hidden border border-[#FBFAF6]/10 w-[80vw] md:w-[480px] h-[360px] md:h-[480px] shrink-0 cursor-pointer shadow-lg shadow-[#2D2926]/20">
<img alt="Práca 1" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2926] via-[#2D2926]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-[#FBFAF6] font-medium text-2xl mb-1 tracking-tight drop-shadow-md">
                    Kancelárie TechCorp
                  </span>
<span className="text-[#C44041] text-base font-medium drop-shadow-md">
                    Bratislava
                  </span>
</div>
</div>
<div className="group relative rounded-[2.5rem] overflow-hidden border border-[#FBFAF6]/10 w-[80vw] md:w-[480px] h-[360px] md:h-[480px] shrink-0 cursor-pointer shadow-lg shadow-[#2D2926]/20">
<img alt="Práca 2" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2926] via-[#2D2926]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-[#FBFAF6] font-medium text-2xl mb-1 tracking-tight drop-shadow-md">
                    Logistické centrum
                  </span>
<span className="text-[#C44041] text-base font-medium drop-shadow-md">
                    Trnava
                  </span>
</div>
</div>
<div className="group relative rounded-[2.5rem] overflow-hidden border border-[#FBFAF6]/10 w-[80vw] md:w-[480px] h-[360px] md:h-[480px] shrink-0 cursor-pointer shadow-lg shadow-[#2D2926]/20">
<img alt="Práca 3" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1524143986875-3b098d78b363?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2926] via-[#2D2926]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-[#FBFAF6] font-medium text-2xl mb-1 tracking-tight drop-shadow-md">
                    Business centrum
                  </span>
<span className="text-[#C44041] text-base font-medium drop-shadow-md">
                    Košice
                  </span>
</div>
</div>
<div className="group relative rounded-[2.5rem] overflow-hidden border border-[#FBFAF6]/10 w-[80vw] md:w-[480px] h-[360px] md:h-[480px] shrink-0 cursor-pointer shadow-lg shadow-[#2D2926]/20">
<img alt="Práca 4" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2926] via-[#2D2926]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-[#FBFAF6] font-medium text-2xl mb-1 tracking-tight drop-shadow-md">
                    Priemyselný park
                  </span>
<span className="text-[#C44041] text-base font-medium drop-shadow-md">
                    Žilina
                  </span>
</div>
</div>
<div className="group relative rounded-[2.5rem] overflow-hidden border border-[#FBFAF6]/10 w-[80vw] md:w-[480px] h-[360px] md:h-[480px] shrink-0 cursor-pointer shadow-lg shadow-[#2D2926]/20">
<img alt="Práca 5" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2926] via-[#2D2926]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-[#FBFAF6] font-medium text-2xl mb-1 tracking-tight drop-shadow-md">
                    Športová aréna
                  </span>
<span className="text-[#C44041] text-base font-medium drop-shadow-md">
                    Poprad
                  </span>
</div>
</div>
<div className="group relative rounded-[2.5rem] overflow-hidden bg-[#FBFAF6]/5 flex flex-col items-center justify-center border border-[#FBFAF6]/10 hover:bg-[#FBFAF6]/10 transition-colors duration-300 w-[80vw] md:w-[480px] h-[360px] md:h-[480px] shrink-0 cursor-pointer shadow-lg shadow-[#2D2926]/20">
<a className="flex flex-col items-center gap-4 text-[#FBFAF6] group/more w-full h-full justify-center" href="#kontakt">
<div className="w-20 h-20 rounded-full bg-[#C44041] flex items-center justify-center group-hover/more:scale-110 transition-transform duration-300 shadow-xl shadow-[#C44041]/20">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="font-medium text-xl tracking-tight">
                    Váš priestor?
                  </span>
</a>
</div>
</div>
</div>
<div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused] [animation-direction:reverse]"></div>
</div>
</div>
</section>




<section className="bg-[#FBFAF6] pt-24 pb-32 relative" id="spolupraca">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-12 max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium text-[#2D2926] tracking-tight mb-4">
            Winnie pre firmy aj
            <span className="text-[#C44041]">domácnosti</span>
</h2>
<p className="text-lg text-[#2D2926]/70 leading-relaxed">
            Sme pripravení zásobovať váš vendingový biznis, alebo priniesť našu
            prémiovú kávu priamo k vám domov.
          </p>
</div>
<div className="grid lg:grid-cols-2 gap-6">

<div className="relative bg-[#2D2926] border border-[#2D2926]/10 rounded-[2.5rem] overflow-hidden group hover:border-[#C44041]/50 transition-all duration-300 shadow-2xl shadow-black/20 flex flex-col">
<div className="p-8 md:p-12 flex flex-col z-10 flex-1 justify-between h-full">
<div className="">
<div className="w-16 h-16 rounded-full bg-[#C44041]/10 flex items-center justify-center text-[#C44041] mb-8 group-hover:scale-110 group-hover:bg-[#C44041]/20 transition-all duration-300">
<iconify-icon icon="solar:buildings-2-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-medium text-[#FBFAF6] tracking-tight mb-4">
                  Pre firmy a partnerov
                </h3>
<p className="text-[#FBFAF6]/70 text-lg leading-relaxed mb-10">
                  Prevádzkujete vlastné automaty alebo hľadáte spoľahlivého
                  partnera pre vending? Ponúkame prémiovú kávu, suroviny a
                  výhodné veľkoobchodné podmienky.
                </p>
</div>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[#FBFAF6] bg-[#C44041] rounded-full hover:bg-[#a33536] transition-all duration-300 shadow-xl shadow-[#C44041]/20 active:scale-95 group/btn w-fit mt-auto" href="#kontakt">
                Nadviazať spoluprácu
                <iconify-icon className="ml-2 group-hover/btn:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="relative bg-white border border-[#2D2926]/10 rounded-[2.5rem] overflow-hidden group hover:border-[#C44041]/50 transition-all duration-300 shadow-xl shadow-[#2D2926]/5 flex flex-col scroll-mt-24" id="eshop">
<div className="p-8 md:p-12 flex flex-col z-10 flex-1 justify-between h-full">
<div className="">
<div className="w-16 h-16 rounded-full bg-[#C44041]/10 flex items-center justify-center text-[#C44041] mb-8 group-hover:scale-110 group-hover:bg-[#C44041]/20 transition-all duration-300">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-medium text-[#2D2926] tracking-tight mb-4">
                  Winnie u vás doma
                </h3>
<p className="text-[#2D2926]/70 text-lg leading-relaxed mb-10">
                  Zrnková káva z vašej kancelárie, dostupná aj pre vašu domácu
                  pohodu. Objavte naše exkluzívne zmesi a prémiové príslušenstvo
                  priamo v našom e-shope.
                </p>
</div>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[#FBFAF6] bg-[#C44041] rounded-full hover:bg-[#a33536] transition-all duration-300 shadow-xl shadow-[#C44041]/20 active:scale-95 group/btn w-fit mt-auto" href="https://eshop.winnie.sk" target="_blank">
                Prejsť do e-shopu
                <iconify-icon className="ml-2 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-[#2D2926] border-[#FBFAF6]/5 border-t pt-24 pb-32 relative" id="kontakt">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/40 border border-[#FBFAF6]/10">

<div className="lg:w-1/2 bg-[#FBFAF6] p-10 md:p-16 flex flex-col justify-center text-[#2D2926]">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Riešenie priamo
              <br/>
<span className="text-[#C44041]">pre Vás</span>
</h2>
<p className="text-[#2D2926]/70 mb-12 text-lg leading-relaxed max-w-md">
              Zanechajte nám kontakt. Pripravíme bezplatnú obhliadku, navrhneme
              zloženie automatov a postaráme sa o inštaláciu.
            </p>
<div className="space-y-6">
<a className="flex items-center gap-4 text-xl font-medium hover:text-[#C44041] transition-colors group" href="tel:+421900000000">
<div className="w-12 h-12 rounded-full bg-[#C44041]/10 flex items-center justify-center text-[#C44041] group-hover:scale-110 group-hover:bg-[#C44041]/20 transition-all duration-300 shrink-0">
<iconify-icon className="" icon="solar:phone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
                +421 900 000 000
              </a>
<a className="flex items-center gap-4 text-xl font-medium hover:text-[#C44041] transition-colors group" href="mailto:info@winnie.sk">
<div className="w-12 h-12 rounded-full bg-[#C44041]/10 flex items-center justify-center text-[#C44041] group-hover:scale-110 group-hover:bg-[#C44041]/20 transition-all duration-300 shrink-0">
<iconify-icon className="" icon="solar:letter-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
                info@winnie.sk
              </a>
</div>
</div>

<div className="lg:w-1/2 bg-[#C44041] p-10 md:p-16 flex flex-col justify-center">
<form className="space-y-6 w-full">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2 text-left">
<label className="text-sm font-medium text-[#FBFAF6]/90 ml-1">
                    Meno a priezvisko
                  </label>
<input className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all text-[#FBFAF6] placeholder-white/40" placeholder="Ján Novák" required="" type="text"/>
</div>
<div className="space-y-2 text-left">
<label className="text-sm font-medium text-[#FBFAF6]/90 ml-1">
                    E-mail
                  </label>
<input className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all text-[#FBFAF6] placeholder-white/40" placeholder="jan@firma.sk" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2 text-left">
<label className="text-sm font-medium text-[#FBFAF6]/90 ml-1">
                    Telefón
                  </label>
<input className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all text-[#FBFAF6] placeholder-white/40" placeholder="+421 900 000 000" required="" type="tel"/>
</div>
<div className="space-y-2 text-left relative">
<label className="text-sm font-medium text-[#FBFAF6]/90 ml-1">
                    Typ priestoru
                  </label>
<div className="relative">
<select className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all text-[#FBFAF6] appearance-none cursor-pointer" required="">
<option className="text-[#2D2926]" disabled="" selected="" value="">
                        Vyberte typ priestoru...
                      </option>
<option className="text-[#2D2926]" value="kancelarie">
                        Kancelárie a administratívne budovy
                      </option>
<option className="text-[#2D2926]" value="skoly">
                        Školy a univerzity
                      </option>
<option className="text-[#2D2926]" value="vyroba">
                        Výroba a priemyselné areály
                      </option>
<option className="text-[#2D2926]" value="sport">
                        Športoviská a fitness centrá
                      </option>
<option className="text-[#2D2926]" value="stavby">
                        Stavby a dočasné lokality
                      </option>
<option className="text-[#2D2926]" value="verejnost">
                        Obchodné centrá a verejné priestory
                      </option>
<option className="text-[#2D2926]" value="spolupraca">
                        Spolupráca / Veľkoobchod
                      </option>
<option className="text-[#2D2926]" value="ine">
                        Iné riešenie
                      </option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-[#FBFAF6]/70 pointer-events-none" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2 text-left">
<label className="text-sm font-medium text-[#FBFAF6]/90 ml-1">
                  Vaša správa
                </label>
<textarea className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all text-[#FBFAF6] placeholder-white/40 resize-none" placeholder="Dobrý deň, mali by sme záujem o inštaláciu automatov do našich priestorov..." rows="4"></textarea>
</div>
<div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
<p className="text-xs text-[#FBFAF6]/70 max-w-[250px]">
                  Odoslaním formulára súhlasíte so spracovaním osobných údajov.
                </p>
<button className="w-full sm:w-auto px-8 py-4 bg-[#2D2926] text-[#FBFAF6] font-medium rounded-xl hover:bg-black transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl shadow-black/20 active:scale-95 text-base" type="submit">
                  Odoslať dopyt
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#2D2926] pt-16 pb-8 border-t border-[#FBFAF6]/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<a className="flex items-center gap-2 mb-6 group" href="#">
<div className="flex overflow-hidden bg-center bg-[#2D2926] w-16 h-16 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fcfb12cf-ca90-40ae-9988-78c5eaefbf45_320w.png)] bg-cover border-[#FBFAF6]/10 border rounded-lg relative shadow-inner items-center justify-center">
<div className="absolute -top-1 -right-1 w-2 h-2 bg-[#C44041] rounded-bl-lg"></div>
</div>
<span className="text-[#FBFAF6] text-xl font-medium tracking-tight">
                Winnie
              </span>
</a>
<div className="text-[#FBFAF6]/60 text-sm space-y-2">
<p className="">Winnie s.r.o.</p>
<p className="">Štefánikova 4</p>
<p className="">990 01 Veľký Krtíš</p>
<p className="">IČO: 44761490</p>
<p className="">DIČ: 2022821834</p>
</div>
</div>

<div className="">
<h4 className="text-[#FBFAF6] font-medium tracking-tight mb-6">
              Navigácia
            </h4>
<ul className="space-y-4 text-sm text-[#FBFAF6]/60">
<li className="">
<a className="hover:text-[#C44041] transition-colors" href="#riesenia">
                  Riešenia
                </a>
</li>
<li className="">
<a className="hover:text-[#C44041] transition-colors" href="#o-nas">
                  O nás
                </a>
</li>
<li className="">
<a className="hover:text-[#C44041] transition-colors" href="#prace">
                  Naše práce
                </a>
</li>
<li>
<a className="hover:text-[#C44041] transition-colors" href="#spolupraca">
                  Spolupráca
                </a>
</li>
</ul>
</div>

<div className="lg:col-span-2">
<h4 className="text-[#FBFAF6] font-medium tracking-tight mb-6">
              Kontakt
            </h4>
<ul className="space-y-4 text-sm text-[#FBFAF6]/60">
<li className="">
<a className="hover:text-[#C44041] transition-colors flex items-center gap-3" href="/tel:+421 905 251 285">+421 905 251 285</a>
</li>
<li className="">
<a className="hover:text-[#C44041] transition-colors flex items-center gap-3" href="mailto:info@winnie.sk">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="18"></iconify-icon>
                  info@winnie.sk
                </a>
</li>
<li className="">
<a className="hover:text-[#C44041] transition-colors flex items-center gap-3" href="https://eshop.winnie.sk" target="_blank">
<iconify-icon className="" icon="solar:cart-large-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
                  E-shop Winnie
                </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-[#FBFAF6]/5 text-xs text-[#FBFAF6]/40">
<div className="">© 2026 Winnie Vending. Všetky práva vyhradené.</div>
<div className="flex flex-wrap gap-4 md:gap-6 justify-center">
<a className="hover:text-[#FBFAF6]/80 transition-colors" href="#">
              Ochrana súkromia (GDPR)
            </a>
<a className="hover:text-[#FBFAF6]/80 transition-colors" href="#">
              Obchodné podmienky
            </a>
<a className="hover:text-[#FBFAF6]/80 transition-colors" href="#">
              Nastavenie Cookies
            </a>
</div>
</div>
</div>
</footer>




    </>
  );
}
