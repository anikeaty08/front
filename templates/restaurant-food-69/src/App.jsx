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
      

<nav className="absolute top-0 left-0 w-full z-50 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"></div>
<div className="flex h-28 max-w-[1400px] mr-auto ml-auto pr-6 pl-6 relative items-center justify-between">

<a className="flex flex-col items-start group bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39ca75dc-5729-49b2-a7ee-5254a124cb25_320w.png)] bg-cover pt-8 pr-2 pb-8 pl-40" href="#">
</a>

<div className="hidden xl:flex gap-8 text-[11px] uppercase font-semibold text-white/90 tracking-widest items-center">
<a className="hover:text-[#d48c70] transition-colors border-b border-transparent hover:border-[#d48c70] pb-0.5" href="#">Home</a>
<div className="group relative cursor-pointer flex items-center gap-1 hover:text-[#d48c70] transition-colors">
                    Restaurant <i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
<div className="group relative cursor-pointer flex items-center gap-1 hover:text-[#d48c70] transition-colors">
                    Events <i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
<a className="hover:text-[#d48c70] transition-colors" href="#">Zakelijk</a>
<a className="hover:text-[#d48c70] transition-colors" href="#about">Over Ons</a>
<a className="hover:text-[#d48c70] transition-colors" href="#">Werken bij</a>
</div>

<div className="hidden md:flex items-center gap-4">
<button className="border border-white/40 text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-white hover:text-stone-900 transition-all backdrop-blur-sm">
                    Offerte
                </button>
<button className="bg-[#d48c70] text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-[#b57258] transition-all shadow-lg hover:shadow-[#d48c70]/20">
                    Reserveer
                </button>
</div>

<button className="xl:hidden text-white">
<i className="w-7 h-7" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative w-full min-h-[110vh] flex flex-col items-center justify-end md:justify-center overflow-hidden bg-stone-900 pb-12 md:pb-0">

<div className="absolute inset-0 w-full h-full z-0">

<img alt="Woman enjoying a moment" className="w-full h-full object-cover opacity-80 object-[center_30%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/38d4703b-1ef4-4606-a254-58f34d967820_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-black/20"></div>
<div className="absolute top-0 right-0 bottom-0 left-0">
<img alt="Hero Background" className="absolute inset-0 w-full h-full object-cover" src="default" style={{}}/>
<div className="bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-black/50 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>

<div className="z-10 flex flex-col md:mt-20 md:mb-24 text-center max-w-5xl mt-32 mr-auto mb-16 ml-auto pr-6 pl-6 relative items-center">
<span className="text-[10px] uppercase bg-center font-bold text-white tracking-[0.4em] opacity-90 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39ca75dc-5729-49b2-a7ee-5254a124cb25_800w.png)] bg-cover pt-20 pr-4 pl-40"></span>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-shadow text-5xl text-white tracking-tight font-serif mb-6 drop-shadow-2xl">
                Waar kleine momenten <br/>
<span className="font-light italic">groots worden</span>
</h1>
<p className="text-white/90 text-lg md:text-xl font-light tracking-wide max-w-2xl leading-relaxed text-shadow drop-shadow-md">
                Kom zoals je bent, plof neer en voel je thuis in het hart van de Rottemeren.
            </p>
</div>

<div className="relative z-20 w-full max-w-7xl mx-auto px-6 pb-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="group relative h-[450px] rounded-[32px] overflow-hidden cursor-pointer border border-white/20 shadow-2xl transition-transform hover:-translate-y-1 duration-500">
<img alt="Restaurant Terrace" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover bg-center absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc219e85-c204-4d2a-9961-79749e23a5b5_800w.webp"/>
<div className="bg-center border-amber-50 border-4 ring-red-600 ring-4 rounded-3xl absolute top-0 right-0 bottom-0 left-0 shadow-[0_4px_6px_rgba(0,_0,_0,_0.049),_0_9.6px_7.6px_rgba(0,_0,_0,_0.069),_0_18px_14.3px_rgba(0,_0,_0,_0.086),_0_32px_25.6px_rgba(0,_0,_0,_0.103),_0_60px_47.8px_rgba(0,_0,_0,_0.123),_0_143px_114.3px_rgba(0,_0,_0,_0.172)]"></div>
<div className="flex flex-col bg-gradient-to-t from-[#5a1c00]/70 to-purple-500/0 w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0 items-start">
<h3 className="text-3xl font-sans font-bold text-white mb-6 leading-tight">Proeven &amp;<br/>Genieten</h3>
<button className="text-[10px] uppercase hover:bg-white/20 transition-all font-bold text-white tracking-[0.2em] bg-red-900 border-white/30 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur-md">
                            Restaurant
                        </button>
</div>
</div>

<div className="group relative h-[450px] rounded-[32px] overflow-hidden cursor-pointer border border-white/20 shadow-2xl transition-transform hover:-translate-y-1 duration-500">
<img alt="Meeting" className="transition-transform duration-700 group-hover:scale-105 w-full h-full absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5cc23100-2673-421f-b007-31822379704e_800w.jpg"/>
<div className="bg-center bg-gradient-to-t from-black/90 via-black/20 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5cc23100-2673-421f-b007-31822379704e_800w.jpg)] bg-cover border-4 rounded-3xl absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex flex-col bg-gradient-to-t from-[#7c2a00]/70 via-stone-900/0 to-black/0 w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0 items-start">
<h3 className="text-3xl font-sans font-bold text-white mb-6 leading-tight">Vergaderen &amp;<br/>Teams</h3>
<button className="text-[10px] uppercase hover:bg-white/20 transition-all font-bold text-white tracking-[0.2em] bg-red-900 border-white/30 border rounded-full px-6 py-3 backdrop-blur-md">
                            Zakelijke Opties
                        </button>
</div>
</div>

<div className="group relative h-[450px] rounded-[32px] overflow-hidden cursor-pointer border border-white/20 shadow-2xl transition-transform hover:-translate-y-1 duration-500">
<img alt="Events" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover bg-center absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d2c6293a-1954-4c6d-bb19-038d48a31a2e_800w.jpg"/>
<div className="bg-center bg-gradient-to-t from-black/90 via-black/20 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d2c6293a-1954-4c6d-bb19-038d48a31a2e_800w.jpg)] bg-cover border-4 rounded-3xl absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex flex-col bg-gradient-to-t from-[#7c2a00]/70 via-stone-900/0 to-black/0 w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0 items-start">
<h3 className="text-3xl font-sans font-bold text-white mb-6 leading-tight">Events &amp;<br/>Community</h3>
<button className="text-[10px] uppercase hover:bg-white/20 transition-all font-bold text-white tracking-[0.2em] bg-red-900 border-white/30 border rounded-full px-6 py-3 backdrop-blur-md">
                            Agenda
                        </button>
</div>
</div>
</div>
</div>
</header>

<section className="bg-amber-50 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-6xl mr-auto ml-auto">
<h2 className="text-3xl md:text-4xl font-serif text-center text-stone-900 mb-4 tracking-tight">Specials &amp; Arrangementen</h2>
<p className="text-center text-stone-500 mb-16 max-w-2xl mx-auto font-light">Ontdek onze samengestelde belevenissen, speciaal voor jou gecreëerd.</p>
<div className="grid md:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<div className="overflow-hidden group bg-[#efeae3] border-stone-200 border rounded-2xl relative shadow-sm">
<div className="h-64 bg-gray-300 relative overflow-hidden">
<img alt="Champagne" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="default"/>
<div className="bg-center bg-gradient-to-t from-[#7c2d2d] to-transparent opacity-90 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d2c6293a-1954-4c6d-bb19-038d48a31a2e_800w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="absolute bottom-0 w-full p-6 text-white pt-12">

<div className="absolute bottom-0 left-0 right-0 h-3/4 bg-[#7c2d2d] rounded-tr-[80px] -z-10 transition-all duration-500 group-hover:h-full group-hover:rounded-none"></div>
<h3 className="leading-none text-2xl text-red-950 font-serif mb-2">BUBBELS<br/>&amp; BITES</h3>
<p className="leading-relaxed text-sm font-light text-red-950/90 mb-4">
                            Een romantische middag van 15:00 - 18:00 uur met bubbels, bites en live akoestische love songs.
                        </p>
<div className="flex items-end justify-between">
<p className="text-lg font-semibold text-red-950">€57,50 p.p.</p>
<button className="bg-[#5e2222] text-white text-[10px] uppercase font-bold px-4 py-2 rounded-full border border-white/20 hover:bg-black/20 transition-colors">
                                Tickets
                            </button>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl bg-[#f4ece4] shadow-sm flex flex-col group border border-stone-200">
<div className="h-64 relative overflow-hidden">
<img alt="Beer tasting" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover shadow-[0_5.7px_8.6px_rgba(0,_0,_0,_0.07),_0_13.7px_10.9px_rgba(0,_0,_0,_0.099),_0_25.7px_20.5px_rgba(0,_0,_0,_0.123),_0_45.8px_36.6px_rgba(0,_0,_0,_0.147),_0_85.8px_68.5px_rgba(0,_0,_0,_0.176),_0_205px_163.4px_rgba(0,_0,_0,_0.246)] backdrop-blur-3xl" src="https://images.unsplash.com/photo-1566633806327-68e152aaf26d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 relative flex-1 flex flex-col justify-end bg-[#f4ece4]">
<div className="absolute top-[-30px] left-0 w-full h-8 bg-[#f4ece4] rounded-tl-[40px] z-10"></div>
<h3 className="text-2xl font-serif text-[#7c2d2d] mb-3 leading-none">BIER<br/>PROEVERIJ</h3>
<p className="text-stone-600 text-sm mb-6 leading-relaxed">
                            Geniet van een heerlijke bier proeverij bij Flow. 3 speciaalbiertjes én 3 bijpassende hapjes.
                        </p>
<div className="mt-auto pt-4 border-t border-[#7c2d2d]/10">
<div className="flex justify-between items-center mb-4">
<span className="text-stone-500 text-xs uppercase tracking-wider">Prijs</span>
<span className="font-serif text-stone-900 text-lg italic">€33,50 p.p.</span>
</div>
<button className="bg-[#5e2222] text-white text-[10px] uppercase font-bold tracking-wider px-6 py-3 rounded-full hover:bg-[#7c2d2d] transition-colors w-full shadow-sm">
                                Reserveren
                            </button>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl bg-[#ebe7df] shadow-sm flex flex-col group border border-stone-200">
<div className="h-64 relative overflow-hidden">
<img alt="BBQ" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 relative flex-1 flex flex-col justify-end bg-[#ebe7df]">
<div className="absolute top-[-30px] right-0 w-full h-8 bg-[#ebe7df] rounded-tr-[40px] z-10"></div>
<h3 className="text-2xl font-serif text-[#7c2d2d] mb-3 leading-none">BBQ<br/>ARRANGEMENT</h3>
<p className="text-stone-600 text-sm mb-6 leading-relaxed">
                            Voor groepen die samen willen genieten van vuur, smaak en gezelligheid in de buitenlucht.
                        </p>
<div className="mt-auto flex items-end justify-between pt-4 border-t border-stone-400/20">
<button className="bg-[#9caf88] text-white text-[10px] uppercase font-bold tracking-wider px-5 py-3 rounded-full hover:bg-[#859672] transition-colors shadow-sm">
                                Bekijken
                            </button>
<div className="text-right">
<span className="block text-[10px] uppercase tracking-widest text-stone-500">Vanaf</span>
<span className="serif-font text-xl text-[#7c2d2d]">€64,50</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-red-950 bg-amber-50 pt-24 pr-6 pb-24 pl-6" id="about">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative order-2 md:order-1">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl relative">
<img alt="Restaurant Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="bg-center mix-blend-normal bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5cc23100-2673-421f-b007-31822379704e_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="-bottom-8 -right-8 hidden md:block z-10 bg-red-900 max-w-xs border-stone-100 border rounded-tr-[3rem] px-8 py-8 absolute shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
<p className="serif-font leading-relaxed text-lg italic text-amber-50">"Eten is meer dan voeding — het is verbinding."</p>
<p className="uppercase text-xs font-bold text-amber-50 tracking-wider mt-3">— Michelle</p>
</div>
</div>
<div className="order-1 md:order-2">
<span className="text-[#d48c70] font-bold tracking-widest text-xs uppercase mb-3 block">Ons verhaal</span>
<h2 className="md:text-5xl text-4xl text-stone-900 tracking-tight font-serif mb-8">Welkom bij Flow</h2>
<div className="space-y-6 text-stone-600 text-lg leading-relaxed font-light">
<p className="">
                            Gelegen in het prachtige recreatiegebied de Rottemeren, is <span className="font-medium text-stone-900">Flow</span> de plek om even helemaal tot rust te komen.
                        </p>
<p className="">
                            Of je nu komt voor een uitgebreid diner, een gezellige borrel of een zakelijke meeting; bij ons staat genieten centraal. Met passie voor mooie producten en oprechte gastvrijheid zorgen wij voor een onvergetelijke beleving.
                        </p>
</div>
<div className="mt-12 pt-8 border-t border-stone-100">
<h3 className="text-2xl font-serif text-stone-800 mb-6">Wat kun je verwachten?</h3>
<ul className="space-y-5 text-stone-600">
<li className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-[#f4f1ea] flex items-center justify-center shrink-0 text-[#9caf88]">
<i className="w-4 h-4" data-lucide="sun"></i>
</div>
<span className="mt-1">Prachtig terras aan het water met uitzicht over de Rottemeren.</span>
</li>
<li className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-[#f4f1ea] flex items-center justify-center shrink-0 text-[#9caf88]">
<i className="w-4 h-4" data-lucide="users"></i>
</div>
<span className="mt-1">Sfeervolle ruimte voor feesten, partijen en zakelijke events.</span>
</li>
<li className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-[#f4f1ea] flex items-center justify-center shrink-0 text-[#9caf88]">
<i className="w-4 h-4" data-lucide="heart"></i>
</div>
<span className="mt-1">Een menukaart vol verse, seizoensgebonden gerechten.</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="text-[#fcfbf9] bg-amber-50 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-6xl mx-auto text-center mb-20">
<h2 className="text-3xl tracking-tight font-serif mb-6 relative md:text-5xl">Onze Filosofie</h2>
<p className="text-lg font-light text-stone-400 max-w-2xl mr-auto ml-auto">Bij Flow geloven we in de kracht van <span className="text-white font-medium border-b border-[#d48c70]">aandacht, kwaliteit en beleving</span>.</p>
</div>
<div className="grid md:grid-cols-3 gap-16 max-w-5xl mr-auto ml-auto relative gap-x-16 gap-y-16">

<div className="hidden md:block absolute top-12 left-16 right-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-0"></div>
<div className="z-10 group text-center relative">
<div className="flex group-hover:scale-110 group-hover:border-[#d48c70]/50 transition-all duration-500 bg-red-900 w-24 h-24 border-white/5 border rounded-full mb-8 shadow-2xl items-center justify-center">
<i className="w-8 h-8 text-[#d48c70]" data-lucide="heart"></i>
</div>
<h3 className="text-2xl text-white font-serif mb-4">Passie</h3>
<p className="text-stone-400 text-sm leading-relaxed px-4">Liefde voor het vak en de producten waarmee we werken. Dat proef je in elk gerecht.</p>
</div>
<div className="z-10 group text-center relative">
<div className="flex group-hover:scale-110 group-hover:border-[#d48c70]/50 transition-all duration-500 bg-red-900 w-24 h-24 border-white/5 border rounded-full mr-auto mb-8 ml-auto shadow-2xl items-center justify-center">
<i className="w-8 h-8 text-[#d48c70]" data-lucide="zap"></i>
</div>
<h3 className="text-2xl font-serif mb-4 text-white">Energie</h3>
<p className="text-stone-400 text-sm leading-relaxed px-4">Een levendige sfeer waar gastvrijheid en gezelligheid samenkomen.</p>
</div>
<div className="relative z-10 group text-center">
<div className="flex group-hover:scale-110 group-hover:border-[#d48c70]/50 transition-all duration-500 bg-red-900 w-24 h-24 border-white/5 border rounded-full mb-8 shadow-2xl items-center justify-center">
<i className="w-8 h-8 text-[#d48c70]" data-lucide="anchor"></i>
</div>
<h3 className="text-2xl font-serif mb-4 text-white">Locatie</h3>
<p className="text-stone-400 text-sm leading-relaxed px-4">Uniek gelegen aan het water, de perfecte plek om te ontsnappen aan de drukte.</p>
</div>
</div>
</section>

<footer className="bg-amber-50 border-stone-200 border-t pt-24 pb-12" id="contact">
<div className="text-center max-w-4xl mr-auto mb-20 ml-auto">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#f4ece4] text-[#d48c70] mb-8">
<i className="w-6 h-6" data-lucide="droplets"></i>
</div>
<h2 className="md:text-6xl text-4xl text-[#262626] tracking-tight font-serif bg-amber-50 mb-6">Kom genieten bij Flow</h2>
<p className="text-xl text-stone-500 mb-10 font-light max-w-xl mx-auto">Ervaar de rust, de ruimte en de smaken. Wij kijken er naar uit je te verwelkomen.</p>
<div className="flex flex-col md:flex-row justify-center gap-4">
<button className="uppercase hover:bg-[#b57258] transition-all hover:shadow-[#d48c70]/20 hover:-translate-y-1 text-xs font-bold text-white tracking-widest bg-red-900 rounded-full px-10 py-4 shadow-lg">
                    Reserveer Direct
                </button>
<button className="uppercase hover:bg-stone-50 transition-all hover:-translate-y-1 text-xs font-bold text-stone-800 tracking-widest bg-orange-200 border-stone-200 border rounded-full px-10 py-4">
                    Bekijk Events
                </button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-12 text-sm text-stone-600 max-w-7xl border-stone-200 border-t mr-auto ml-auto pt-16 gap-x-12 gap-y-12">
<div className="">
<h4 className="font-serif text-lg text-stone-900 mb-6 flex items-center gap-2">
<i className="w-4 h-4 text-[#d48c70]" data-lucide="map-pin"></i> Bezoek Ons
                </h4>
<p className="mb-2 leading-relaxed">Strandweg 12<br/>2661 KL Bergschenhoek</p>
<p className="text-stone-400 italic mt-2">Prachtig gelegen aan de Rottemeren</p>
</div>
<div className="">
<h4 className="font-serif text-lg text-stone-900 mb-6 flex items-center gap-2">
<i className="w-4 h-4 text-[#d48c70]" data-lucide="phone"></i> Contact
                </h4>
<p className="mb-3 hover:text-[#d48c70] transition-colors cursor-pointer">+31 (0)10 123 4567</p>
<p className="hover:text-[#d48c70] transition-colors cursor-pointer">info@flow-food.nl</p>
</div>
<div className="">
<h4 className="font-serif text-lg text-stone-900 mb-6 flex items-center gap-2">
<i className="w-4 h-4 text-[#d48c70]" data-lucide="calendar"></i> Openingstijden
                </h4>
<ul className="space-y-2">
<li className="flex justify-between border-b border-stone-100 pb-2"><span>Woensdag - Donderdag</span> <span>09:30 - 17:00</span></li>
<li className="flex justify-between border-b border-stone-100 pb-2"><span className="">Vrijdag - Zondag</span> <span>09:30 - 22:00</span></li>
</ul>
<p className="mt-4 text-[11px] text-[#d48c70] font-bold uppercase tracking-wide">* Keuken open tot 21:00</p>
</div>
</div>
<div className="flex flex-col md:flex-row text-xs font-medium text-stone-400 bg-red-900 max-w-7xl mt-24 mr-auto ml-auto items-center justify-between">
<span className="serif-font text-xl text-stone-300 mb-4 md:mb-0">FLOW</span>
<div>
                © 2024 Flow Food &amp; Adventure. Alle rechten voorbehouden.
            </div>
</div>
</footer>


    </>
  );
}
