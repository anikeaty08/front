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
      

<nav className="fixed w-full z-50 transition-all duration-300 bg-blue-700/90 backdrop-blur-md border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition">
<i className="text-white w-6 h-6" data-lucide="wallet" strokeWidth="1.5"></i>
</div>
<span className="text-white text-xl font-medium tracking-tight">nasplatky<span className="opacity-70">.online</span></span>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-blue-50 text-lg hover:text-white transition font-medium" href="#">Úvod</a>
<a className="text-blue-50 text-lg hover:text-white transition font-medium" href="#about">O nás</a>
<a className="text-blue-50 text-lg hover:text-white transition font-medium" href="#services">Služby</a>
<a className="text-blue-50 text-lg hover:text-white transition font-medium" href="#faq">Časté otázky</a>
<a className="text-blue-50 text-lg hover:text-white transition font-medium" href="#contact">Kontakt</a>
</div>

<a className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white text-lg font-medium rounded-lg transition shadow-lg shadow-red-500/20" href="#contact">
                Požiadať o splátky
            </a>

<button className="lg:hidden text-white">
<i className="w-8 h-8" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-blue-700 via-blue-500 to-sky-200 z-0"></div>

<div className="absolute top-1/4 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
<div className="absolute bottom-1/3 right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
                Všetko na splátky <br className="hidden md:block"/>
                jednoducho a rýchlo!
            </h1>
<p className="text-xl lg:text-2xl text-blue-50 max-w-2xl mx-auto font-normal mb-10 leading-relaxed">
                Vybavíme financovanie na splátky na čokoľvek, čo si želáte! Splňte si svoje sny už dnes.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto px-8 py-4 bg-red-500 hover:bg-red-600 text-white text-xl font-medium rounded-xl transition shadow-xl shadow-red-900/20 transform hover:-translate-y-0.5" href="#contact">
                    Získať ponuku
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-blue-900 text-xl font-medium rounded-xl transition shadow-lg shadow-blue-900/10 transform hover:-translate-y-0.5" href="#services">
                    Viac info
                </a>
</div>

<div className="relative w-full max-w-5xl mx-auto mt-12">

<div className="relative z-20 transform hover:scale-[1.02] transition duration-500">
<img alt="Car" className="w-full md:w-3/4 mx-auto rounded-2xl shadow-2xl border-4 border-white/30 object-cover h-[300px] md:h-[450px]" src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>

</div>

<div className="hidden md:block absolute bottom-10 -left-12 z-10 w-64 h-48 rounded-xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-6 hover:rotate-0 transition duration-500">
<img alt="House" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>

<div className="hidden md:block absolute top-10 -right-12 z-10 w-56 h-40 rounded-xl overflow-hidden shadow-2xl border-4 border-white transform rotate-6 hover:rotate-0 transition duration-500">
<img alt="Beach" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full">
<svg className="w-full h-auto text-slate-50 fill-current" viewbox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
<path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fillOpacity="1"></path>
</svg>
</div>
</header>

<section className="py-20 lg:py-32 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-4">
                    Čo všetko vieme financovať na splátky?
                </h2>
<p className="text-xl text-slate-500 font-normal">
                    Financovanie na mieru presne pre vás!
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-slate-100">
<div className="h-48 overflow-hidden">
<img alt="Autá" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6 text-center">
<h3 className="text-xl font-semibold text-slate-800">Autá</h3>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-slate-100">
<div className="h-48 overflow-hidden">
<img alt="Nehnuteľnosti" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="p-6 text-center">
<h3 className="text-xl font-semibold text-slate-800">Nehnuteľnosti</h3>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-slate-100">
<div className="h-48 overflow-hidden">
<img alt="Elektro" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="p-6 text-center">
<h3 className="text-xl font-semibold text-slate-800">Elektro</h3>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-slate-100">
<div className="h-48 overflow-hidden">
<img alt="Dovolenky" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="p-6 text-center">
<h3 className="text-xl font-semibold text-slate-800">Dovolenky</h3>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-slate-100">
<div className="h-48 overflow-hidden">
<img alt="Mobily" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="p-6 text-center">
<h3 className="text-xl font-semibold text-slate-800">Mobily</h3>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-slate-100">
<div className="h-48 overflow-hidden">
<img alt="Nábytok" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="p-6 text-center">
<h3 className="text-xl font-semibold text-slate-800">Nábytok</h3>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-slate-100">
<div className="h-48 overflow-hidden">
<img alt="Stroje a Náradie" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="p-6 text-center">
<h3 className="text-xl font-semibold text-slate-800">Stroje a Náradie</h3>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-slate-100">
<div className="h-48 overflow-hidden">
<img alt="Športová výbava" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="p-6 text-center">
<h3 className="text-xl font-semibold text-slate-800">Športová výbava</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-100 via-transparent to-transparent opacity-50"></div>
<div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-50 via-transparent to-transparent opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-blue-900 tracking-tight">
                    Jednoduché a rýchle financovanie na splátky!
                </h2>
<div className="w-24 h-1 bg-red-500 mx-auto mt-6 rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 bg-white rounded-2xl shadow-lg border border-slate-100 text-center hover:shadow-xl transition duration-300">
<div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl mb-6 relative">
<i className="w-10 h-10" data-lucide="clipboard-check" strokeWidth="1.5"></i>
<div className="absolute -bottom-2 -right-2 bg-red-500 text-white rounded-full p-1 border-4 border-white">
<i className="w-4 h-4" data-lucide="check" strokeWidth="3"></i>
</div>
</div>
<h3 className="text-xl font-semibold text-slate-800 mb-2">Lorem ipsum</h3>
<p className="text-lg text-slate-500 font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
</div>

<div className="p-8 bg-white rounded-2xl shadow-lg border border-slate-100 text-center hover:shadow-xl transition duration-300">
<div className="inline-flex items-center justify-center w-20 h-20 bg-orange-50 text-orange-500 rounded-2xl mb-6">
<i className="w-10 h-10" data-lucide="handshake" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-slate-800 mb-2">Lorem ipsum</h3>
<p className="text-lg text-slate-500 font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
</div>

<div className="p-8 bg-white rounded-2xl shadow-lg border border-slate-100 text-center hover:shadow-xl transition duration-300">
<div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 text-blue-700 rounded-2xl mb-6">
<i className="w-10 h-10" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-slate-800 mb-2">Lorem ipsum</h3>
<p className="text-lg text-slate-500 font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-12">
<div className="lg:w-1/2">
<div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">O nás</div>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                        Pomáhame plniť sny <br/>už viac ako 10 rokov
                    </h2>
<p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        Sme finančný sprostredkovateľ, ktorý sa špecializuje na spotrebiteľské financovanie. Naším cieľom je prinášať dostupné riešenia pre každého, kto potrebuje získať tovar alebo službu ihneď, no platiť chce postupne.
                    </p>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Spolupracujeme s poprednými finančnými inštitúciami na Slovensku, vďaka čomu vieme garantovať najlepšie úroky a flexibilné podmienky splácania.
                    </p>
<a className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition" href="#contact">
                        Kontaktujte nás <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
<div className="lg:w-1/2 relative">
<div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden shadow-xl">
<img alt="Meeting" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-20 pb-20" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Časté otázky</h2>
<p className="text-lg text-slate-500">Odpovede na to, čo vás najčastejšie zaujíma.</p>
</div>
<div className="space-y-4">

<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer hover:bg-slate-100 transition duration-200 bg-slate-50 rounded-xl pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<h3 className="text-lg font-medium text-slate-900">Lorem ipsum</h3>
<span className="ml-4 flex-shrink-0 text-slate-500 group-open:rotate-180 transition-transform duration-200">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="-mt-2 leading-relaxed text-lg text-slate-600 bg-slate-50 rounded-b-xl pr-6 pb-6 pl-6">Lorem ipsum</div>
</details>

<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer hover:bg-slate-100 transition duration-200 bg-slate-50 rounded-xl pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<h3 className="text-lg font-medium text-slate-900">Lorem ipsum</h3>
<span className="ml-4 flex-shrink-0 text-slate-500 group-open:rotate-180 transition-transform duration-200">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="-mt-2 leading-relaxed text-lg text-slate-600 bg-slate-50 rounded-b-xl pr-6 pb-6 pl-6">Lorem ipsum</div>
</details>

<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer hover:bg-slate-100 transition duration-200 bg-slate-50 rounded-xl pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<h3 className="text-lg font-medium text-slate-900">Lorem ipsum</h3>
<span className="ml-4 flex-shrink-0 text-slate-500 group-open:rotate-180 transition-transform duration-200">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="-mt-2 leading-relaxed text-lg text-slate-600 bg-slate-50 rounded-b-xl pr-6 pb-6 pl-6">Lorem ipsum</div>
</details>

<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer hover:bg-slate-100 transition duration-200 bg-slate-50 rounded-xl pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<h3 className="text-lg font-medium text-slate-900">Lorem ipsum</h3>
<span className="ml-4 flex-shrink-0 text-slate-500 group-open:rotate-180 transition-transform duration-200">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="-mt-2 leading-relaxed text-lg text-slate-600 bg-slate-50 rounded-b-xl pr-6 pb-6 pl-6">Lorem ipsum</div>
</details>
</div>
</div>
</section>

<section className="lg:py-32 text-white bg-slate-900 pt-20 pb-20 relative" id="contact">

<div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-3xl rounded-l-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6">Máte záujem o financovanie?</h2>
<p className="text-xl text-slate-400 mb-10 leading-relaxed">
                        Vyplňte formulár a my sa vám ozveme s nezáväznou ponukou. Alebo nás kontaktujte priamo.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="bg-blue-500/20 p-3 rounded-lg">
<i className="text-blue-400 w-6 h-6" data-lucide="phone"></i>
</div>
<div>
<h3 className="text-lg font-medium text-white">Telefón</h3>
<p className="text-slate-400 text-lg mt-1">0902 113 745</p>
<p className="text-sm text-slate-500 mt-1">Po-Pia: 8:00 - 17:00</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-blue-500/20 p-3 rounded-lg">
<i className="text-blue-400 w-6 h-6" data-lucide="mail"></i>
</div>
<div>
<h3 className="text-lg font-medium text-white">Email</h3>
<p className="text-slate-400 text-lg mt-1">info@nasplatky.online</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-blue-500/20 p-3 rounded-lg">
<i className="text-blue-400 w-6 h-6" data-lucide="map-pin"></i>
</div>
<div>
<h3 className="text-lg font-medium text-white">Sídlo</h3>
<p className="text-slate-400 text-lg mt-1">
                                    RAKUS SERVICES s. r. o.<br/>
                                    Jablonec 416<br/>
                                    900 86 Jablonec
                                </p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl">
<form action="#" className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700" htmlFor="name">Meno a priezvisko</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" id="name" placeholder="Jozef Novák" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700" htmlFor="phone">Telefón</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" id="phone" placeholder="+421 9xx xxx xxx" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" id="email" placeholder="jozef@priklad.sk" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700" htmlFor="product">O čo máte záujem?</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition appearance-none" id="product">
<option>Auto</option>
<option>Nehnuteľnosť</option>
<option>Elektronika</option>
<option>Dovolenka</option>
<option>Iné</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700" htmlFor="message">Správa (nepovinné)</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none" id="message" placeholder="Doplňujúce informácie..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-red-500 hover:bg-red-600 text-white text-lg font-medium rounded-lg transition shadow-lg shadow-red-500/20 mt-2" type="submit">
                            Odoslať nezáväznú žiadosť
                        </button>
<p className="text-xs text-slate-400 text-center mt-4">
                            Odoslaním súhlasíte so spracovaním osobných údajov.
                        </p>
</form>
</div>
</div>
</div>
</section>

<footer className="text-sm text-slate-400 bg-slate-950 border-white/10 border-t pt-12 pb-12">
<div className="flex flex-col md:flex-row gap-6 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex gap-2 gap-x-6 gap-y-6 items-center">
<i className="text-slate-500 w-5 h-5" data-lucide="wallet"></i>
<span className="text-slate-300 font-medium">nasplatky.online</span>
</div>
<div className="flex opacity-5 gap-x-6 gap-y-6">
<a className="hover:text-white transition opacity-5" href="#">Ochrana údajov</a>
<a className="hover:text-white transition opacity-5" href="#">Obchodné podmienky</a>
<a className="hover:text-white transition opacity-5" href="#">Cookies</a>
</div>
<p className="">© 2026 nasplatky.online. Všetky práva vyhradené.</p>
</div>
</footer>


    </>
  );
}
