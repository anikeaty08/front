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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#FFFEF5]/90 border-b border-gray-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-12 h-12 flex items-center justify-center relative overflow-hidden group-hover:shadow-md transition-all duration-300">
<img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col">
<span className="font-serif font-semibold text-[#1A365D] leading-tight text-sm tracking-wide">Hrvatsko Društvo</span>
<span className="font-sans text-xs text-gray-500 uppercase tracking-widest">Ljubljana</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-[#C41E3A] transition-colors" href="#onama">O nama</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#C41E3A] transition-colors" href="#sekcije">Sekcije</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#C41E3A] transition-colors" href="#put">Put prijateljstva</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#C41E3A] transition-colors" href="#novosti">Novosti</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#C41E3A] transition-colors" href="#kontakt">Kontakt</a>
</div>

<div className="hidden lg:flex items-center gap-4">
<button className="text-sm font-medium text-gray-500 hover:text-[#1A365D] transition-colors">HR | SL</button>
<a className="bg-[#C41E3A] hover:bg-[#A01830] text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-lg shadow-red-900/10 hover:shadow-red-900/20 transition-all duration-300 transform hover:-translate-y-0.5" href="#clanstvo">
                    Postani član
                </a>
</div>

<button className="lg:hidden text-gray-700 hover:text-[#C41E3A]">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Croatian Culture Community" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1A365D]/90 via-[#1A365D]/70 to-transparent"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-12">
<div className="max-w-2xl">
<span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs font-medium tracking-widest uppercase mb-6">
                    Osnovano 1993.
                </span>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] mb-6 tracking-tight">
                    Povezujemo Hrvate <br/>
<span className="font-accent italic text-[#FFFEF5]">u Sloveniji</span>
</h1>
<p className="text-lg md:text-xl text-gray-200 mb-10 font-light leading-relaxed max-w-lg">
                    Njegujemo kulturu, čuvamo tradiciju i gradimo mostove prijateljstva između dva naroda već više od tri desetljeća.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#C41E3A] hover:bg-[#A01830] text-white px-8 py-3.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-center" href="#clanstvo">
                        Postani član
                    </a>
<a className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 text-center flex items-center justify-center gap-2 group" href="#onama">
                        Saznaj više
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
<i className="w-6 h-6" data-lucide="chevron-down"></i>
</div>
</header>

<section className="py-24 relative overflow-hidden" id="onama">
<div className="absolute top-0 right-0 w-1/3 h-full bg-pattern-checkers z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-[#C41E3A]/10 rounded-full -z-10"></div>
<img alt="Gathering" className="rounded-2xl shadow-xl shadow-gray-200 object-cover aspect-[4/3] w-full" src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"/>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-[200px] hidden md:block">
<p className="font-serif text-[#1A365D] text-3xl font-medium">30+</p>
<p className="text-sm text-gray-500 mt-1">Godina djelovanja i očuvanja baštine</p>
</div>
</div>
<div>
<span className="text-[#C41E3A] font-medium text-sm uppercase tracking-widest mb-2 block">Tko smo mi</span>
<h2 className="text-4xl font-medium text-[#1A365D] mb-6 tracking-tight">Srce hrvatske zajednice u Ljubljani</h2>
<div className="space-y-4 text-gray-600 font-light leading-relaxed">
<p>
                            Hrvatsko društvo Ljubljana je neprofitna udruga koja okuplja Hrvate i prijatelje Hrvatske koji žive u Ljubljani i okolici. Naša misija je jednostavna, ali snažna: stvoriti dom daleko od doma.
                        </p>
<p>
                            Kroz kulturne manifestacije, edukativne radionice i društvena okupljanja, prenosimo bogatstvo hrvatske baštine novim generacijama.
                        </p>
</div>
<a className="inline-flex items-center gap-2 text-[#1A365D] font-medium mt-8 border-b border-[#1A365D]/30 pb-1 hover:border-[#1A365D] transition-all" href="#">
                        Pročitaj našu povijest <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="sekcije">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-[#1A365D] mb-4 tracking-tight">Naše sekcije</h2>
<p className="text-gray-500 font-light">Aktivnosti kroz koje njegujemo kreativnost, glazbu i tradiciju za sve generacije.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 relative overflow-hidden">
<div className="w-12 h-12 bg-[#C41E3A]/5 text-[#C41E3A] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="music"></i>
</div>
<h3 className="text-xl font-medium text-[#2D3748] mb-3">Klapa "Zelena naranča"</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6">
                        Njegujemo tradicijsko a cappella pjevanje, prepoznatljivi simbol dalmatinske i hrvatske kulture.
                    </p>
<a className="text-[#C41E3A] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Saznaj više <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C41E3A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>

<div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 relative overflow-hidden">
<div className="w-12 h-12 bg-[#2D6A4F]/5 text-[#2D6A4F] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="scissors"></i>
</div>
<h3 className="text-xl font-medium text-[#2D3748] mb-3">Sekcija "Ruža hrvatska"</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6">
                        Čuvarice tradicijskih vještina veza, pletenja i izrade narodnih nošnji i rukotvorina.
                    </p>
<a className="text-[#2D6A4F] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Saznaj više <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2D6A4F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>

<div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 relative overflow-hidden">
<div className="w-12 h-12 bg-orange-400/10 text-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="smile"></i>
</div>
<h3 className="text-xl font-medium text-[#2D3748] mb-3">Dječja sekcija "Pčelice"</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6">
                        Kroz igru, ples i pjesmu naši najmlađi uče hrvatski jezik i upoznaju svoje korijene.
                    </p>
<a className="text-orange-500 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Saznaj više <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
</div>
</div>
</section>

<section className="relative py-28 bg-[#1A365D] overflow-hidden" id="put">

<div className="absolute inset-0 opacity-10">
<svg className="h-full w-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1">
<div className="flex items-center gap-3 mb-4">
<span className="h-px w-12 bg-[#C41E3A]"></span>
<span className="text-[#C41E3A] font-medium text-sm uppercase tracking-widest">Tradicija</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight leading-tight">
                        Put prijateljstva <br/>
<span className="font-accent italic text-gray-300">Vukovar - Ljubljana</span>
</h2>
<p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
                        Biciklistička karavana koja svake godine povezuje grad heroj i slovensku prijestolnicu. Simbol upornosti, sjećanja i neraskidive veze između naša dva naroda.
                    </p>
<div className="grid grid-cols-3 gap-6 mb-10 border-t border-white/10 pt-8">
<div>
<p className="text-3xl font-serif text-white">20+</p>
<p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">Godina</p>
</div>
<div>
<p className="text-3xl font-serif text-white">500<span className="text-lg">km</span></p>
<p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">Duljina puta</p>
</div>
<div>
<p className="text-3xl font-serif text-white">100+</p>
<p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">Biciklista</p>
</div>
</div>
<button className="bg-white text-[#1A365D] hover:bg-gray-100 px-8 py-3.5 rounded-full font-medium transition-colors shadow-lg shadow-blue-900/20">
                        Pridruži se karavani 2025
                    </button>
</div>
<div className="order-1 lg:order-2 relative">
<div className="absolute -inset-4 border border-white/10 rounded-3xl translate-x-4 translate-y-4"></div>
<img alt="Cycling Caravan" className="rounded-2xl shadow-2xl w-full object-cover aspect-video" src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<span className="text-[#C41E3A] font-medium text-sm uppercase tracking-widest mb-2 block">Kalendar</span>
<h2 className="text-3xl md:text-4xl font-medium text-[#1A365D] tracking-tight">Nadolazeći događaji</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#1A365D] transition-colors" href="#">
                    Svi događaji <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-4">
<img alt="Event" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur shadow-sm rounded-lg px-3 py-1.5 text-center min-w-[60px]">
<span className="block text-xs text-gray-500 uppercase font-bold">Lis</span>
<span className="block text-xl font-serif text-[#1A365D] leading-none">24</span>
</div>
</div>
<div className="space-y-2">
<span className="text-xs font-medium text-[#2D6A4F] uppercase tracking-wide">Koncert</span>
<h3 className="text-xl font-medium text-[#2D3748] group-hover:text-[#C41E3A] transition-colors line-clamp-2">Godišnji koncert Klape "Zelena naranča"</h3>
<p className="text-sm text-gray-500 line-clamp-2">Pridružite nam se na večeri dalmatinske pjesme u srcu Ljubljane.</p>
<div className="pt-2 flex items-center gap-4 text-xs text-gray-400">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="clock"></i> 19:00</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="map-pin"></i> Cankarjev dom</span>
</div>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-4">
<img alt="Event" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur shadow-sm rounded-lg px-3 py-1.5 text-center min-w-[60px]">
<span className="block text-xs text-gray-500 uppercase font-bold">Stu</span>
<span className="block text-xl font-serif text-[#1A365D] leading-none">05</span>
</div>
</div>
<div className="space-y-2">
<span className="text-xs font-medium text-[#2D6A4F] uppercase tracking-wide">Radionica</span>
<h3 className="text-xl font-medium text-[#2D3748] group-hover:text-[#C41E3A] transition-colors line-clamp-2">Kreativna radionica: Izrada tradicijskog nakita</h3>
<p className="text-sm text-gray-500 line-clamp-2">Naučite tehnike izrade nakita uz naše iskusne voditeljice sekcije Ruža hrvatska.</p>
<div className="pt-2 flex items-center gap-4 text-xs text-gray-400">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="clock"></i> 17:00</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="map-pin"></i> Brilejeva 14</span>
</div>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-4">
<img alt="Event" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur shadow-sm rounded-lg px-3 py-1.5 text-center min-w-[60px]">
<span className="block text-xs text-gray-500 uppercase font-bold">Pro</span>
<span className="block text-xl font-serif text-[#1A365D] leading-none">12</span>
</div>
</div>
<div className="space-y-2">
<span className="text-xs font-medium text-[#2D6A4F] uppercase tracking-wide">Druženje</span>
<h3 className="text-xl font-medium text-[#2D3748] group-hover:text-[#C41E3A] transition-colors line-clamp-2">Božićno druženje članova</h3>
<p className="text-sm text-gray-500 line-clamp-2">Tradicionalno okupljanje uz bakalar, fritule i božićne pjesme.</p>
<div className="pt-2 flex items-center gap-4 text-xs text-gray-400">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="clock"></i> 18:00</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="map-pin"></i> Masarykova 14</span>
</div>
</div>
</article>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#1A365D]" href="#">
                    Svi događaji <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-gray-100" id="novosti">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium text-[#1A365D] mb-12 tracking-tight">Novosti</h2>
<div className="grid md:grid-cols-3 gap-10">

<div className="flex flex-col gap-4">
<span className="text-xs text-gray-400">12. Rujna 2023.</span>
<h3 className="text-lg font-medium text-[#2D3748] leading-snug hover:text-[#C41E3A] cursor-pointer transition-colors">
                        Održana redovna godišnja skupština društva uz rekordan odaziv članova
                    </h3>
<p className="text-sm text-gray-500 line-clamp-2">
                        Predstavljen je plan rada za nadolazeću godinu i izabrano novo vodstvo sekcija.
                    </p>
<a className="text-sm text-[#C41E3A] font-medium hover:underline" href="#">Pročitaj više</a>
</div>

<div className="flex flex-col gap-4">
<span className="text-xs text-gray-400">28. Kolovoza 2023.</span>
<h3 className="text-lg font-medium text-[#2D3748] leading-snug hover:text-[#C41E3A] cursor-pointer transition-colors">
                        Završen 20. Put prijateljstva Vukovar-Ljubljana
                    </h3>
<p className="text-sm text-gray-500 line-clamp-2">
                        Biciklisti su sretno stigli na Prešernov trg gdje ih je dočekao gradonačelnik.
                    </p>
<a className="text-sm text-[#C41E3A] font-medium hover:underline" href="#">Pročitaj više</a>
</div>

<div className="flex flex-col gap-4">
<span className="text-xs text-gray-400">15. Srpnja 2023.</span>
<h3 className="text-lg font-medium text-[#2D3748] leading-snug hover:text-[#C41E3A] cursor-pointer transition-colors">
                        Izašao novi broj časopisa "Klasje"
                    </h3>
<p className="text-sm text-gray-500 line-clamp-2">
                        Ljetno izdanje donosi reportaže s izleta i intervjue s istaknutim članovima.
                    </p>
<a className="text-sm text-[#C41E3A] font-medium hover:underline" href="#">Pročitaj više</a>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="clanstvo">
<div className="absolute inset-0 bg-[#F7FAFC]"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<div className="w-16 h-16 bg-[#C41E3A]/10 text-[#C41E3A] rounded-full flex items-center justify-center mx-auto mb-6">
<i className="w-8 h-8" data-lucide="heart"></i>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-[#1A365D] mb-4 tracking-tight">Postani dio naše zajednice</h2>
<p className="text-gray-500 mb-8 max-w-lg mx-auto">
                Pridružite se obitelji koja slavi kulturu, gradi prijateljstva i čuva tradiciju. Iskoristite pogodnosti članstva i primajte časopis Klasje.
            </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/20 focus:border-[#C41E3A] transition-all text-sm" placeholder="Vaša email adresa" type="email"/>
<button className="bg-[#C41E3A] hover:bg-[#A01830] text-white px-6 py-3 rounded-lg font-medium shadow-md transition-all text-sm whitespace-nowrap" type="submit">
                    Zatraži pristupnicu
                </button>
</form>
<p className="text-xs text-gray-400 mt-4">
                Ili nas posjetite osobno u našim prostorijama.
            </p>
</div>
</section>

<footer className="bg-[#1A365D] text-white pt-20 pb-8 border-t border-white/5" id="kontakt">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 bg-[#C41E3A] rounded flex items-center justify-center">
<span className="text-white font-serif font-bold text-xs tracking-widest">HDL</span>
</div>
<span className="font-serif font-medium text-lg text-white">Hrvatsko Društvo</span>
</div>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Povezujemo Hrvate u Sloveniji, njegujemo kulturu i gradimo prijateljstvo od 1993. godine.
                    </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
</div>
</div>

<div>
<h4 className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-6">Navigacija</h4>
<ul className="space-y-3 text-sm text-gray-300">
<li><a className="hover:text-white transition-colors" href="#onama">O nama</a></li>
<li><a className="hover:text-white transition-colors" href="#sekcije">Sekcije</a></li>
<li><a className="hover:text-white transition-colors" href="#put">Put prijateljstva</a></li>
<li><a className="hover:text-white transition-colors" href="#novosti">Novosti</a></li>
<li><a className="hover:text-white transition-colors" href="#clanstvo">Članstvo</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-6">Kontakt</h4>
<ul className="space-y-4 text-sm text-gray-300">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-[#C41E3A]" data-lucide="map-pin"></i>
<span>Masarykova cesta 14<br/>1000 Ljubljana</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-[#C41E3A]" data-lucide="phone"></i>
<span>+386 1 234 5678</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-[#C41E3A]" data-lucide="mail"></i>
<span>info@hdl.si</span>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-6">Podrška</h4>
<div className="bg-white/5 rounded-lg p-4 border border-white/5">
<p className="text-xs text-gray-400 mb-2">Uz potporu</p>
<p className="font-serif text-sm text-white">Središnji državni ured za Hrvate izvan Republike Hrvatske</p>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
<p>© 2023 Hrvatsko društvo Ljubljana. Sva prava pridržana.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Politika privatnosti</a>
<a className="hover:text-white transition-colors" href="#">Uvjeti korištenja</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
