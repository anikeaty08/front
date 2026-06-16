import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
blue: {
50: '#fff0f0', 100: '#ffcccc', 200: '#ff9999', 300: '#ff6666',
400: '#ff3333', 500: '#FF0000', 600: '#cc0000', 700: '#990000',
800: '#660000', 900: '#330000', 950: '#1a0000',
}
}
}
}
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener("DOMContentLoaded", () => {
        gsap.registerPlugin(ScrollTrigger);

        document.querySelectorAll("h1, h2, .h-reveal").forEach(el => {
          if (!el.textContent.trim()) return;
          const words = el.innerText.split(/\s+/);
          el.innerHTML = words.map(w =>
            `<span style="display:inline-block;overflow:hidden;vertical-align:top;margin-right:0.25em">` +
            `<span class="reveal-word" style="display:inline-block;transform:translateY(110%)">${w}</span>` +
            `</span>`
          ).join("");

          gsap.to(el.querySelectorAll(".reveal-word"), {
            y: 0,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.05,
            scrollTrigger: { trigger: el, start: "top 85%" }
          });
        });

        const targets = document.querySelectorAll("p, .grid > div, li, img:not(.absolute), button, a.group");
        targets.forEach(el => {
          if (el.closest("h1, h2")) return;
          gsap.fromTo(el,
            { y: 40, opacity: 0, filter: "blur(10px)" },
            { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 90%" } }
          );
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="" id="wrapper">
<div className="gradient-blur">
<div></div><div></div><div></div><div></div><div></div><div></div>
</div>

<div className="max-w-[1600px] mx-auto shadow-2xl min-h-screen overflow-hidden relative bg-neutral-950">

<nav className="fixed top-8 left-0 right-0 z-50 flex justify-center w-full px-6 pointer-events-none">
<div className="w-full max-w-[1600px] flex items-center justify-between pointer-events-auto mx-auto md:px-16">
<div className="flex items-center gap-4">
<div className="flex flex-col">
<span className="text-white font-bold text-2xl tracking-tighter leading-none">
                ELITE GARAGE
              </span>
<span className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase mt-0.5">
                Autoservis
              </span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center bg-white rounded-full pl-8 pr-10 py-3.5 shadow-2xl">
<div className="flex items-center gap-8">
<a className="text-xs font-bold text-neutral-900 uppercase tracking-widest hover:text-orange-600 transition-colors flex items-center gap-2 group" href="#sluzby" style={{filter: 'blur(0px)'}}>
<span className="text-neutral-400 group-hover:text-orange-600 transition-colors">•</span> Služby
                </a>
<a className="text-xs font-bold text-neutral-900 uppercase tracking-widest hover:text-orange-600 transition-colors flex items-center gap-2 group" href="#ukazky" style={{filter: 'blur(0px)'}}>
<span className="text-neutral-400 group-hover:text-orange-600 transition-colors">•</span> Práce
                </a>
<a className="text-xs font-bold text-neutral-900 uppercase tracking-widest hover:text-orange-600 transition-colors flex items-center gap-2 group" href="#tym" style={{filter: 'blur(0px)'}}>
<span className="text-neutral-400 group-hover:text-orange-600 transition-colors">•</span> Tým
                </a>
<a className="text-xs font-bold text-neutral-900 uppercase tracking-widest hover:text-orange-600 transition-colors flex items-center gap-2 group" href="#cenik" style={{filter: 'blur(0px)'}}>
<span className="text-neutral-400 group-hover:text-orange-600 transition-colors">•</span> Ceník
                </a>
</div>
</div>
<a className="hover:bg-orange-600 transition-all flex items-center gap-3 hover:shadow-orange-500/20 hover:-translate-y-0.5 group text-white bg-blue-500 rounded-full px-8 py-3.5 shadow-xl" href="#kontakt" style={{filter: 'blur(0px)'}}>
<span className="text-xs font-bold uppercase tracking-widest">Rezervovat</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<button className="md:hidden w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors" style={{filter: 'blur(0px)'}}>
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="md:h-[850px] overflow-hidden group w-full h-[90vh] relative">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover brightness-[0.6] grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000 ease-in-out" loop="" muted="" playsinline="">
<source src="https://cdn.midjourney.com/video/6b3c5aff-d006-4726-9722-41cd6cdf1d5a/0.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/20"></div>
<div className="flex flex-col md:pb-24 text-center pb-16 absolute top-0 right-0 bottom-0 left-0 items-center justify-end">
<div className="mb-8">
</div>
<h1 className="text-[20vw] leading-[0.8] font-medium text-white tracking-tighter opacity-90 mix-blend-overlay"><span className="" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}><span className="reveal-word" style={{display: 'inline-block'}}>SERVIS</span></span></h1>
<p className="text-white/80 text-lg md:text-xl font-light max-w-xl mt-6 px-4 leading-relaxed" style={{filter: 'blur(0px)'}}>
            Vaše vozidlo v těch nejlepších rukou. Ultimátní test spolehlivosti a výkonu začíná zde.
          </p>
</div>
</header>

<section className="border-y grid grid-cols-1 md:grid-cols-4 border-white/10">
<div className="flex flex-col group text-center bg-zinc-950 border-white/10 border-r pt-12 pr-12 pb-12 pl-12 items-center justify-center transition-colors hover:bg-zinc-900/50" style={{filter: 'blur(0px)'}}>
<span className="text-7xl font-semibold tracking-tighter transition-colors group-hover:text-blue-500 text-white">15</span>
<span className="text-xs uppercase tracking-[0.25em] mt-4 text-white/50 font-medium">Let praxe</span>
</div>
<div className="flex flex-col text-center bg-zinc-950 border-white/10 border-r pt-12 pr-12 pb-12 pl-12 items-center justify-center" style={{filter: 'blur(0px)'}}>
<span className="text-xs uppercase tracking-[0.25em] text-white/40 font-medium">Kapacita dílny</span>
<span className="text-xl font-medium mt-2 tracking-tight text-white flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
            PŘIJÍMÁME VOZY
          </span>
</div>
<div className="p-12 border-r border-white/10 col-span-1 md:col-span-2 relative overflow-hidden flex items-end group" style={{filter: 'blur(0px)'}}>
<img alt="Mechanic hands" className="contrast-125 transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 brightness-50 grayscale" src="https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&amp;w=800"/>
<div className="bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 p-2">
<div className="text-3xl font-semibold tracking-tighter uppercase text-white">KOMPLEXNÍ PÉČE</div>
<p className="text-sm text-white/60 max-w-sm mt-2 font-light leading-relaxed" style={{filter: 'blur(0px)'}}>
              Optimalizujeme výkon a bezpečnost vašeho vozu s chirurgickou přesností. Žádné kompromisy.
            </p>
</div>
</div>
</section>

<section className="md:px-12 text-white bg-neutral-950 pt-24 pr-6 pb-24 pl-6" id="sluzby">
<div className="max-w-[1600px] mr-auto ml-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
<div className="flex flex-col gap-2 items-start">
<div className="flex items-center gap-3 mb-2">
<span className="w-8 h-[2px] bg-blue-600"></span>
<span className="text-blue-500 font-mono text-lg font-bold tracking-widest uppercase">01</span>
<span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">HLAVNÍ SLUŽBA</span>
</div>
<h2 className="md:text-8xl uppercase leading-[0.9] text-6xl font-bold text-white tracking-tighter font-oswald"><span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}><span className="reveal-word" style={{display: 'inline-block'}}>DIAGNOSTIKA</span></span></h2>
</div>
<div className="flex flex-col items-start md:items-end gap-6">
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
<div className="lg:col-span-5 lg:h-auto overflow-hidden group h-[500px] border-white/10 border rounded-none relative" style={{filter: 'blur(0px)'}}>
<img alt="Diagnostika motoru" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover grayscale contrast-125" src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&amp;w=800" style={{filter: 'blur(0px)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<h3 className="text-white text-2xl font-medium">Analýza Systémů</h3>
<p className="text-white/60 text-sm mt-1" style={{filter: 'blur(0px)'}}>Motor • Převodovka • Elektronika • Brzdy</p>
</div>
</div>
<div className="lg:col-span-7 flex flex-col gap-8" style={{filter: 'blur(0px)'}}>
<div className="overflow-hidden h-[350px] border-white/10 border rounded-none relative">
<img alt="Mechanik pod autem" className="w-full h-full object-cover grayscale brightness-75 contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{filter: 'blur(0px)'}}/>
<div className="bg-gradient-to-r from-black/40 via-transparent to-black/40 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-6 right-6 bg-white rounded-full p-3 shadow-xl">
<iconify-icon className="text-2xl text-blue-600" icon="solar:laptop-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="md:p-12 bg-white/5 border-[#ffffff]/10 border rounded-none pt-10 pr-10 pb-10 pl-10">
<p className="text-lg md:text-xl leading-relaxed mb-8 font-light text-neutral-300" style={{filter: 'blur(0px)'}}>
                  Tohle není běžná prohlídka. Je to <span className="text-blue-500 font-semibold">kompletní analýza</span> postavena na nejnovějších technologiích. Zaměříme se na výkon, chyby řídící jednotky a celkové opotřebení — zatímco <span className="text-blue-500 font-semibold">naši experti</span> konzultují každý detail s vámi.
                </p>
<div className="flex flex-wrap gap-3 mb-8">
<span className="px-4 py-2 rounded-full border border-white/15 text-white/70 text-xs uppercase tracking-widest">Řídící jednotky</span>
<span className="px-4 py-2 rounded-full border border-white/15 text-white/70 text-xs uppercase tracking-widest">Měření emisí</span>
<span className="px-4 py-2 rounded-full border border-white/15 text-white/70 text-xs uppercase tracking-widest">Detailní report</span>
</div>
<button className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-white hover:text-black transition-all text-xs font-bold uppercase tracking-widest text-white" style={{filter: 'blur(0px)'}}>
                  OBJEDNAT DIAGNOSTIKU
                  <iconify-icon className="ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<div className="overflow-hidden border-y bg-blue-600 border-black pt-3 pb-3">
<div className="relative flex whitespace-nowrap">
<div className="flex items-center gap-8 animate-marquee">
<span className="text-2xl font-oswald font-bold uppercase italic tracking-tight text-black px-4">NEKOMPROMISNÍ VÝKON • PROFESIONÁLNÍ PÉČE • ŠPIČKOVÁ DIAGNOSTIKA • RYCHLÝ SERVIS •</span>
<span className="text-2xl font-oswald font-bold uppercase italic tracking-tight text-black px-4">NEKOMPROMISNÍ VÝKON • PROFESIONÁLNÍ PÉČE • ŠPIČKOVÁ DIAGNOSTIKA • RYCHLÝ SERVIS •</span>
</div>
</div>
</div>

<section className="md:px-12 text-white bg-neutral-950 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-[1600px] mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
<div className="flex flex-col items-start gap-2">
<div className="flex items-center gap-3 mb-2">
<span className="w-8 h-[2px] bg-blue-600"></span>
<span className="text-blue-500 font-mono text-lg font-bold tracking-widest uppercase">02</span>
<span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">KOMPLETNÍ</span>
</div>
<h2 className="text-6xl md:text-8xl uppercase font-bold text-white tracking-tighter font-oswald leading-[0.95] px-2 md:px-4"><span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}><span className="reveal-word" style={{display: 'inline-block'}}>NAŠESLUŽBY</span></span></h2>
</div>
<div className="flex flex-col items-start md:items-end gap-6">
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-8 hover:bg-white/5 transition-colors -mx-4 border-white/10 rounded-none border-b pt-12 pr-4 pb-12 pl-4 items-center">
<div className="md:col-span-2" style={{filter: 'blur(0px)'}}>
<span className="text-xl md:text-2xl font-mono font-medium text-neutral-500 group-hover:text-blue-500 transition-colors">01</span>
</div>
<div className="md:col-span-6 space-y-4" style={{filter: 'blur(0px)'}}>
<h3 className="md:text-5xl uppercase leading-none text-4xl font-bold italic text-white tracking-tight font-oswald drop-shadow-md">
                PNEUSERVIS A GEOMETRIE
              </h3>
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:wheel-angle-linear" strokeWidth="1.5"></iconify-icon>
                  Přezutí a vyvážení
                </span>
<span className="text-white/20">|</span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
                  ČAS: 45 MIN
                </span>
</div>
</div>
<div className="md:col-span-4 overflow-hidden h-[280px] border-white/5 border rounded-none relative shadow-2xl" style={{filter: 'blur(0px)'}}>
<img alt="Pneuservis" className="group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 opacity-60 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&amp;w=800" style={{filter: 'blur(0px)'}}/>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 absolute inset-0"></div>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-8 hover:bg-white/5 transition-colors -mx-4 border-white/10 rounded-none border-b pt-12 pr-4 pb-12 pl-4 items-center">
<div className="md:col-span-2" style={{filter: 'blur(0px)'}}>
<span className="text-xl md:text-2xl font-mono font-medium text-neutral-500 group-hover:text-blue-500 transition-colors">02</span>
</div>
<div className="md:col-span-6 space-y-4" style={{filter: 'blur(0px)'}}>
<h3 className="md:text-5xl uppercase leading-none text-4xl font-bold italic text-white tracking-tight font-oswald drop-shadow-md">
                OPRAVY MOTORŮ A PŘEVODOVEK
              </h3>
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
                  Generální opravy
                </span>
<span className="text-white/20">|</span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                  ZÁRUKA: 2 ROKY
                </span>
</div>
</div>
<div className="md:col-span-4 overflow-hidden h-[280px] border-white/5 border rounded-none relative shadow-2xl" style={{filter: 'blur(0px)'}}>
<img alt="Opravy motoru" className="group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 opacity-60 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&amp;w=800" style={{filter: 'blur(0px)'}}/>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 absolute inset-0"></div>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-8 hover:bg-white/5 transition-colors -mx-4 border-white/10 rounded-none border-b pt-12 pr-4 pb-12 pl-4 items-center">
<div className="md:col-span-2" style={{filter: 'blur(10px)'}}>
<span className="text-xl md:text-2xl font-mono font-medium text-neutral-500 group-hover:text-blue-500 transition-colors">03</span>
</div>
<div className="md:col-span-6 space-y-4" style={{filter: 'blur(10px)'}}>
<h3 className="md:text-5xl uppercase leading-none text-4xl font-bold italic text-white tracking-tight font-oswald drop-shadow-md">
                KLIMATIZACE A FILTRY
              </h3>
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:wind-linear" strokeWidth="1.5"></iconify-icon>
                  Plnění a dezinfekce
                </span>
<span className="text-white/20">|</span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
                  ČAS: 60 MIN
                </span>
</div>
</div>
<div className="md:col-span-4 overflow-hidden h-[280px] border-white/5 border rounded-none relative shadow-2xl" style={{filter: 'blur(10px)'}}>
<img alt="Klimatizace" className="group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 opacity-60 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{filter: 'blur(0px)'}}/>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 absolute inset-0"></div>
</div>
</div>
</div>
</section>

<div className="overflow-hidden border-y bg-blue-600 border-black pt-3 pb-3">
<div className="relative flex whitespace-nowrap">
<div className="flex items-center gap-8 animate-marquee">
<span className="text-2xl font-oswald font-bold uppercase italic tracking-tight text-black px-4">NEKOMPROMISNÍ VÝKON • PROFESIONÁLNÍ PÉČE • ŠPIČKOVÁ DIAGNOSTIKA • RYCHLÝ SERVIS •</span>
<span className="text-2xl font-oswald font-bold uppercase italic tracking-tight text-black px-4">NEKOMPROMISNÍ VÝKON • PROFESIONÁLNÍ PÉČE • ŠPIČKOVÁ DIAGNOSTIKA • RYCHLÝ SERVIS •</span>
</div>
</div>
</div>

<section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto border-b border-white/10" id="ukazky">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
<div className="flex flex-col items-start gap-2">
<div className="flex items-center gap-3 mb-2">
<span className="w-8 h-[2px] bg-blue-600"></span>
<span className="uppercase text-lg font-bold text-blue-500 tracking-widest font-mono">03</span>
<span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">GALERIE</span>
</div>
<h2 className="text-6xl md:text-8xl font-oswald font-bold uppercase tracking-tighter text-white leading-[0.9]"><span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}><span className="reveal-word" style={{display: 'inline-block'}}>UKÁZKYPRÁCE</span></span></h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group overflow-hidden hover:-translate-y-1 transition-transform duration-300 bg-red-700 h-[450px] z-10 rounded-none relative" style={{filter: 'blur(0px)'}}>
<img alt="Lakování" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-multiply grayscale contrast-125" src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-red-900/90 to-red-600/40 mix-blend-multiply"></div>
<div className="flex flex-col z-10 pt-8 pr-8 pb-10 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<p className="md:text-4xl uppercase leading-none text-3xl font-bold italic text-white tracking-tight font-oswald drop-shadow-md" style={{filter: 'blur(0px)'}}>Karoserie &amp; Lak</p>
</div>
<button className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-lg z-20" style={{filter: 'blur(0px)'}}>
<iconify-icon className="text-xl" icon="solar:add-linear" strokeWidth="2.5"></iconify-icon>
</button>
</div>

<div className="group overflow-hidden hover:-translate-y-1 transition-transform duration-300 bg-neutral-900 h-[450px] border-neutral-800 border rounded-none relative" style={{filter: 'blur(0px)'}}>
<img alt="Podvozek" className="transition-transform duration-700 group-hover:scale-110 opacity-80 w-full h-full object-cover absolute inset-0 grayscale contrast-125" src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&amp;w=800"/>
<div className="bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 absolute inset-0"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 pb-10">
<span className="block text-xs font-bold text-white/70 uppercase tracking-[0.25em] mb-2 font-oswald">Bezpečnost</span>
<h3 className="uppercase leading-none text-4xl font-bold italic text-white tracking-tight font-oswald">Servis Brzd</h3>
</div>
</div>

<div className="group overflow-hidden hover:-translate-y-1 transition-transform duration-300 bg-neutral-900 h-[450px] border-neutral-800 border rounded-none relative" style={{filter: 'blur(0px)'}}>
<img alt="Svařování" className="transition-transform duration-700 group-hover:scale-110 opacity-80 w-full h-full object-cover absolute inset-0 grayscale contrast-125" src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&amp;w=800"/>
<div className="bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 absolute inset-0"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 pb-10">
<span className="block text-xs font-bold text-white/70 uppercase tracking-[0.25em] mb-2 font-oswald">Detail</span>
<h3 className="text-4xl font-oswald font-bold text-white uppercase italic tracking-tight leading-none">Úpravy výfuků</h3>
</div>
</div>

<div className="group overflow-hidden hover:-translate-y-1 transition-transform duration-300 bg-neutral-900 h-[450px] border-neutral-800 border rounded-none relative" style={{filter: 'blur(0px)'}}>
<img alt="Detailing" className="transition-transform duration-700 group-hover:scale-110 opacity-80 w-full h-full object-cover absolute inset-0 grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 absolute inset-0"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 pb-10">
<span className="block text-xs font-bold text-white/70 uppercase tracking-[0.25em] mb-2 font-oswald">Estetika</span>
<h3 className="text-4xl font-oswald font-bold text-white uppercase italic tracking-tight leading-none">Ruční Mytí</h3>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto border-b border-white/10" id="tym">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
<div className="flex flex-col items-start gap-2">
<div className="flex items-center gap-3 mb-2">
<span className="w-8 h-[2px] bg-blue-600"></span>
<span className="uppercase text-lg font-bold text-blue-500 tracking-widest font-mono">04</span>
<span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">ODPORNÍCI</span>
</div>
<h2 className="text-6xl md:text-8xl font-oswald font-bold uppercase tracking-tighter text-white leading-[0.9]"><span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}><span className="reveal-word" style={{display: 'inline-block'}}>POZNEJTEEXPERTY</span></span></h2>
</div>
<div className="flex flex-col items-start md:items-end gap-6">
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="space-y-12" style={{filter: 'blur(0px)'}}>
<div className="flex gap-6 items-start group">
<div className="mt-1">
<iconify-icon className="text-4xl text-neutral-300 group-hover:text-orange-500 transition-colors" icon="solar:user-bold-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-neutral-500 text-lg leading-relaxed mb-4" style={{filter: 'blur(0px)'}}>
                  "Přistupujeme ke každému autu, jako by to bylo naše vlastní. Klademe důraz na detail, přesnost a hlavně transparentnost vůči zákazníkovi."
                </p>
<div className="flex items-center gap-2 text-sm font-medium">
<span className="text-white">Michal Novák</span>
<span className="text-xs text-blue-500 uppercase tracking-widest ml-2">Hlavní Mechanik</span>
</div>
</div>
</div>
<div className="h-px bg-[#ffffff]/10 w-full"></div>
<div className="flex gap-6 items-start group">
<div className="mt-1">
<iconify-icon className="text-4xl text-neutral-300 group-hover:text-orange-500 transition-colors" icon="solar:user-bold-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-neutral-500 text-lg leading-relaxed mb-4" style={{filter: 'blur(0px)'}}>
                  "Díky neustálému vzdělávání v oboru dokážeme diagnostikovat a vyřešit i ty nejkomplikovanější elektronické závady u moderních vozů."
                </p>
<div className="flex items-center gap-2 text-sm font-medium text-white">
<span>Petr Dvořák</span>
<span className="text-xs text-orange-500 uppercase tracking-widest ml-2">Diagnostik</span>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-6" style={{filter: 'blur(0px)'}}>
<div className="overflow-hidden group w-full h-64 rounded-none relative">
<img alt="Mechanik v akci" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover grayscale contrast-125" src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&amp;w=800" style={{filter: 'blur(0px)'}}/>
<div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
<span className="text-sm font-bold text-neutral-900">100% Nasazení</span>
</div>
</div>
<div className="overflow-hidden group w-full h-64 rounded-none relative">
<img alt="Detail práce" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" style={{filter: 'blur(0px)'}}/>
<div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
<span className="text-sm font-bold text-neutral-900">Preciznost</span>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 text-white bg-neutral-950 pt-24 pr-6 pb-24 pl-6 border-b border-white/10" id="cenik">
<div className="max-w-[1600px] mx-auto">
<div className="flex flex-col md:flex-row md:items-end gap-6 border-white/10 border-b mb-16 pb-8 justify-between">
<div className="flex flex-col items-start gap-2">
<div className="flex items-center gap-3 mb-2">
<span className="w-8 h-[2px] bg-blue-600"></span>
<span className="uppercase text-lg font-bold text-blue-500 tracking-widest font-mono">05</span>
<span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">CENÍK</span>
</div>
<h2 className="md:text-8xl uppercase leading-[0.9] text-6xl font-bold text-white tracking-tighter font-oswald"><span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}><span className="reveal-word" style={{display: 'inline-block'}}>TRANSPARENTNÍCENY</span></span></h2>
</div>
<div className="flex flex-col items-start md:items-end gap-6">
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
<div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8" style={{filter: 'blur(0px)'}}>

<div className="relative bg-black border border-white/20" style={{filter: 'blur(0px)'}}>
<div className="absolute left-0 right-0 -top-[10px] h-5" style={{background: 'radial-gradient(circle, transparent 10px, rgba(0,0,0,1) 10px) repeat-x', backgroundSize: '26px 20px'}}></div>
<div className="absolute left-0 right-0 -bottom-[10px] h-5" style={{background: 'radial-gradient(circle, transparent 10px, rgba(0,0,0,1) 10px) repeat-x', backgroundSize: '26px 20px'}}></div>
<div className="relative p-8 pt-14 min-h-[560px] flex flex-col text-center">
<h3 className="uppercase leading-none text-6xl font-bold italic text-white tracking-tight font-oswald">ZÁKLAD</h3>
<p className="mt-4 text-xs text-white/55 leading-relaxed max-w-[240px] mx-auto" style={{filter: 'blur(0px)'}}>Pravidelná údržba pro hladký chod.</p>
<div className="mt-10 h-px bg-white/15"></div>
<ul className="mt-10 space-y-5 text-sm text-white/75 text-left">
<li className="flex items-center gap-4" style={{filter: 'blur(10px)'}}><span className="inline-flex justify-center text-white w-5">✦</span> Výměna motorového oleje</li>
<li className="flex items-center gap-4" style={{filter: 'blur(10px)'}}><span className="inline-flex w-5 justify-center text-white">✦</span> Výměna základních filtrů</li>
<li className="flex items-center gap-4" style={{filter: 'blur(10px)'}}><span className="inline-flex w-5 justify-center text-white">✦</span> Kontrola provozních kapalin</li>
</ul>
<div className="mt-auto pt-12">
<div className="h-px bg-white/15 mb-8"></div>
<div className="text-5xl font-black tracking-tight"><span className="text-xl mr-2">od</span>2 500 Kč</div>
</div>
</div>
</div>

<div className="relative bg-black border border-white/20" style={{filter: 'blur(0px)'}}>
<div className="absolute left-0 right-0 -top-[10px] h-5" style={{background: 'radial-gradient(circle, transparent 10px, rgba(0,0,0,1) 10px) repeat-x', backgroundSize: '26px 20px'}}></div>
<div className="absolute left-0 right-0 -bottom-[10px] h-5" style={{background: 'radial-gradient(circle, transparent 10px, rgba(0,0,0,1) 10px) repeat-x', backgroundSize: '26px 20px'}}></div>
<div className="min-h-[560px] flex flex-col text-center pt-14 pr-8 pb-8 pl-8 relative">
<h3 className="uppercase leading-none text-6xl font-bold italic text-white tracking-tight font-oswald -translate-x-6">KOMPLET</h3>
<p className="mt-4 text-xs text-white/55 leading-relaxed max-w-[240px] mx-auto" style={{filter: 'blur(0px)'}}>Vše pro maximální bezpečnost.</p>
<div className="mt-10 h-px bg-white/15"></div>
<ul className="mt-10 space-y-5 text-sm text-white/75 text-left">
<li className="flex items-center gap-4" style={{filter: 'blur(10px)'}}><span className="inline-flex justify-center text-white w-5">✦</span> Vše ze Základního servisu</li>
<li className="flex items-center gap-4" style={{filter: 'blur(10px)'}}><span className="inline-flex justify-center text-white w-5">✦</span> Kompletní kontrola brzd a podvozku</li>
<li className="flex items-center gap-4" style={{filter: 'blur(10px)'}}><span className="inline-flex justify-center text-white w-5">✦</span> Počítačová diagnostika</li>
</ul>
<div className="mt-auto pt-12">
<div className="h-px bg-white/15 mb-8"></div>
<div className="text-5xl font-black tracking-tight"><span className="text-xl mr-2">od</span>5 000 Kč</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 h-full" style={{filter: 'blur(0px)'}}>
<div className="border border-white/15 h-full flex flex-col">
<div className="relative aspect-[2.2/1] overflow-hidden shrink-0">
<img alt="Booking" className="opacity-70 w-full h-full object-cover grayscale contrast-125" src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&amp;w=800" style={{filter: 'blur(0px)'}}/>
<div className="absolute inset-0 bg-black/35"></div>
</div>
<div className="flex flex-col flex-1 pt-8 pr-8 pb-8 pl-8">
<h2 className="text-4xl font-black tracking-tight uppercase leading-[0.9]"><span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}><span className="reveal-word" style={{display: 'inline-block'}}>OBJEDNATSERVIS</span></span></h2>
<p className="mt-4 text-xs text-white/50" style={{filter: 'blur(10px)'}}>Zvolte si datum a my se postaráme o zbytek.</p>
<div className="flex-1"></div>
<a className="uppercase text-center hover:invert transition-all text-sm font-black text-black tracking-widest bg-white w-full mt-8 py-5 block" href="#kontakt">Rezervovat Termín</a>
<p className="mt-6 text-[10px] text-white/30 text-center leading-relaxed" style={{filter: 'blur(10px)'}}>
                    Ceny jsou orientační a odvíjí se od značky a modelu vozu. <br/>Přesnou cenovou kalkulaci vám sdělíme před započetím oprav.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto border-b border-white/10" id="kontakt">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
<div className="flex flex-col items-start gap-2">
<div className="flex items-center gap-3 mb-2">
<span className="w-8 h-[2px] bg-blue-600"></span>
<span className="uppercase text-lg font-bold text-blue-500 tracking-widest font-mono">06</span>
<span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">LOKACE</span>
</div>
<h2 className="text-6xl md:text-8xl font-oswald font-bold uppercase tracking-tighter text-white leading-[0.9]"><span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}><span className="reveal-word" style={{display: 'inline-block'}}>KDENÁSNAJDETE</span></span></h2>
</div>
</div>
<div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden group bg-neutral-900 w-full border-white/10 border rounded-none relative shadow-2xl">
<img alt="Mapa umístění" className="contrast-125 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000 ease-in-out group-hover:scale-100 opacity-50 w-full h-full object-cover absolute inset-0 grayscale scale-105" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent pointer-events-none"></div>
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-[45%] left-[50%] -translate-x-1/2 flex flex-col items-center group/marker transition-transform hover:scale-110 pointer-events-auto cursor-pointer">
<div className="px-3 py-1 bg-blue-600 rounded text-[10px] font-bold text-white mb-2 shadow-lg tracking-widest uppercase">
                ELITE GARAGE
              </div>
<div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-[0_0_20px_rgba(59,130,246,0.8)] relative">
<div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75"></div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-6 md:left-12 bg-neutral-900/90 backdrop-blur-md border border-white/10 p-6 shadow-2xl pointer-events-auto w-[90%] md:w-[350px]">
<h4 className="text-xl font-oswald font-bold uppercase tracking-tight mb-6">KONTAKTNÍ ÚDAJE</h4>
<div className="space-y-4">
<a className="flex items-center gap-4 text-sm hover:text-blue-400 transition-colors" href="tel:+420123456789">
<iconify-icon className="text-xl text-blue-500" icon="solar:phone-linear"></iconify-icon>
                +420 123 456 789
              </a>
<a className="flex items-center gap-4 text-sm hover:text-blue-400 transition-colors" href="mailto:info@elitegarage.cz">
<iconify-icon className="text-xl text-blue-500" icon="solar:letter-linear"></iconify-icon>
                info@elitegarage.cz
              </a>
<div className="flex items-start gap-4 text-sm">
<iconify-icon className="text-xl text-blue-500 mt-1" icon="solar:map-point-linear"></iconify-icon>
<span>Průmyslová zóna 45,<br/>100 00 Praha</span>
</div>
<div className="flex items-start gap-4 text-sm text-white/60 pt-4 border-t border-white/10 mt-4">
<iconify-icon className="text-xl mt-0.5" icon="solar:clock-circle-linear"></iconify-icon>
<span>Po - Pá: 8:00 - 17:00<br/>So - Ne: Zavřeno</span>
</div>
</div>
<a className="mt-6 block w-full bg-white text-black text-center text-xs font-bold uppercase tracking-widest py-3 hover:bg-blue-600 hover:text-white transition-colors" href="https://maps.google.com" target="_blank">Otevřít v mapách</a>
</div>
</div>
</section>

<footer className="text-white bg-black border-white/10 border-t pt-24 pr-6 pb-0 pl-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row gap-16 mb-20 gap-x-16 gap-y-16 items-start justify-between">
<div className="space-y-3">
<a className="group flex items-center gap-4 text-6xl md:text-7xl font-semibold tracking-tighter transition-colors hover:text-blue-500" href="#sluzby" style={{filter: 'blur(10px)'}}>
                SLUŽBY
                <iconify-icon className="text-4xl md:text-5xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:arrow-up-right-linear" strokeWidth="2.5"></iconify-icon>
</a>
<a className="group flex items-center gap-4 text-6xl md:text-7xl font-semibold tracking-tighter transition-colors hover:text-blue-500" href="#cenik" style={{filter: 'blur(10px)'}}>
                CENÍK
                <iconify-icon className="text-4xl md:text-5xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:arrow-up-right-linear" strokeWidth="2.5"></iconify-icon>
</a>
<a className="group flex items-center gap-4 text-6xl md:text-7xl font-semibold tracking-tighter transition-colors hover:text-blue-500" href="#kontakt" style={{filter: 'blur(10px)'}}>
                KONTAKT
                <iconify-icon className="text-4xl md:text-5xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:arrow-up-right-linear" strokeWidth="2.5"></iconify-icon>
</a>
</div>
<div className="md:w-auto md:p-8 bg-neutral-900/50 w-full border-white/10 border rounded-none pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm">
<div className="text-xs uppercase tracking-[0.25em] text-white/50 font-medium">Sociální sítě</div>
<div className="mt-6 flex flex-col gap-3">
<a className="inline-flex items-center justify-between gap-8 border border-white/15 px-5 py-3.5 hover:border-blue-500/50 transition-colors group rounded-xl" href="#" style={{filter: 'blur(10px)'}}>
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
<span className="text-sm font-semibold uppercase tracking-[0.22em]">Instagram</span>
</div>
<span className="text-sm text-white/40 group-hover:text-blue-400 transition-colors">@elite.garage</span>
</a>
<a className="inline-flex items-center justify-between gap-8 border border-white/15 px-5 py-3.5 hover:border-blue-500/50 transition-colors group rounded-xl" href="#" style={{filter: 'blur(10px)'}}>
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
<span className="text-sm font-semibold uppercase tracking-[0.22em]">Facebook</span>
</div>
<span className="text-sm text-white/40 group-hover:text-blue-400 transition-colors">Elite Autoservis</span>
</a>
</div>
<div className="mt-6 text-sm text-white/50 leading-relaxed max-w-xs font-light">
                Sledujte naši práci a novinky ze světa motorismu. Žádné kompromisy.
              </div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-white/10 border-t pt-12 gap-x-10 gap-y-10">
<div style={{filter: 'blur(10px)'}}>
<span className="text-xs uppercase tracking-[0.25em] text-white/40 block mb-4 font-medium">Rychlý kontakt</span>
<p className="text-lg tracking-tight font-medium" style={{filter: 'blur(10px)'}}>INFO@ELITEGARAGE.CZ</p>
<p className="text-lg tracking-tight text-white/50 font-light" style={{filter: 'blur(10px)'}}>+420 123 456 789</p>
</div>
<div style={{filter: 'blur(10px)'}}>
<span className="text-xs uppercase tracking-[0.25em] text-white/40 block mb-4 font-medium">Lokalita</span>
<p className="text-lg tracking-tight font-medium" style={{filter: 'blur(10px)'}}>PRAHA</p>
<p className="text-lg tracking-tight text-white/50 font-light" style={{filter: 'blur(10px)'}}>Průmyslová zóna 45</p>
</div>
<div style={{filter: 'blur(10px)'}}>
<span className="text-xs uppercase tracking-[0.25em] text-white/40 block mb-4 font-medium">Dostupnost</span>
<p className="text-lg tracking-tight font-medium" style={{filter: 'blur(10px)'}}>PO-PÁ: 8:00 - 17:00</p>
<p className="text-lg tracking-tight text-white/50 font-light" style={{filter: 'blur(10px)'}}>Otevřeno pro nové vozy</p>
</div>
<div className="md:text-right" style={{filter: 'blur(10px)'}}>
<span className="text-xs uppercase tracking-[0.25em] text-white/40 block mb-4 font-medium">Legacy</span>
<p className="text-lg tracking-tight font-medium" style={{filter: 'blur(10px)'}}>© 2024 ELITE GARAGE</p>
<p className="text-lg tracking-tight text-white/20 uppercase font-light" style={{filter: 'blur(10px)'}}>Žádné kompromisy</p>
</div>
</div>
</div>
</footer>
</div>

</div>

    </>
  );
}
