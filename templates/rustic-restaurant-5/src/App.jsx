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



tailwind.config = {
theme: {
extend: {
colors: {
neutral: {
50: '#fafafa',
100: '#f5f5f5', // Requested Background
200: '#e5e5e5',
300: '#d4d4d4',
400: '#a3a3a3',
500: '#737373',
600: '#525252',
800: '#262626',
900: '#171717',
},
red: {
50: '#fef2f2',
100: '#fee2e2',
500: '#ef4444', // Requested Accent
600: '#dc2626',
900: '#7f1d1d',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
}
}
}
}



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
      

<div className="fixed inset-0 pointer-events-none z-50 bg-grain mix-blend-multiply"></div>

<header className="fixed top-0 w-full z-40 bg-neutral-100/80 backdrop-blur-md border-b border-neutral-200/60 transition-all duration-300">
<div className="flex h-16 max-w-screen-xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2" href="#">
<img alt="Schweinswirt Logo" className="w-auto h-14 object-contain rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1cbb93de-dad1-4423-be3b-bb512b799f65_320w.jpg"/>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-neutral-500 font-normal">
<a className="hover:text-red-500 transition-colors" href="#about">Unser Haus</a>
<a className="hover:text-red-500 transition-colors" href="#menu">Speisekarte</a>
<a className="hover:text-red-500 transition-colors" href="#gallery">Galerie</a>
<a className="hover:text-red-500 transition-colors" href="#contact">Kontakt</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-neutral-500 hover:text-red-500 transition-colors" href="tel:05942988538">
<svg className="lucide lucide-phone w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            05942 988538
        </a>
<a className="bg-red-500 text-white text-xs font-medium tracking-wide px-5 py-2.5 rounded-md hover:bg-red-600 transition-colors duration-300 shadow-sm shadow-red-500/20" href="#contact">
        Tisch reservieren
        </a>
</div>
</div>
</header>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-24 pl-6 relative">
<div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mr-auto ml-auto items-center">
<div className="md:pr-12 order-2 md:order-1 fade-up pr-12 space-y-8">
<div className="inline-flex gap-2 uppercase text-xs font-medium text-red-500 tracking-widest bg-red-50 border-red-500/20 border rounded-full pt-1 pr-3 pb-1 pl-3 items-center">
<span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
        Willkommen in Uelsen
      </div>
<h1 className="leading-[1.1] md:text-6xl text-5xl text-neutral-900 tracking-tight font-serif">Beim Schweinswirt im  <br className=""/><i className="w-[32px] h-[24px]" data-icon-replaced="true" strokeWidth="2" style={{width: '32px', height: '24px', color: 'rgb(239, 68, 68)'}}>Koninghoek.</i></h1>
<p className="leading-relaxed text-lg font-light text-neutral-500 max-w-md">Erleben Sie rustikale deutsche Gastlichkeit im Herzen von Uelsen – genießen Sie herzhafte Klassiker, historische Backsteinmauern und eine Atmosphäre, die sich anfühlt wie Zuhause.</p>
<div className="pt-4 flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 hover:bg-neutral-800 transition-all shadow-neutral-900/10 text-sm font-medium text-white bg-neutral-900 rounded-md pt-3 pr-6 pb-3 pl-6 shadow-lg" href="/#menu">Speisekarte</a>
<a className="inline-flex justify-center items-center gap-2 hover:border-red-500 hover:text-red-500 transition-all text-sm font-medium text-neutral-600 bg-white border-neutral-300 border rounded-md pt-3 pr-6 pb-3 pl-6" href="#about">Kontakt aufnehmen</a>
</div>
</div>
<div className="relative h-[550px] w-full rounded-xl overflow-hidden shadow-2xl shadow-neutral-900/5 order-1 md:order-2 group border border-neutral-200 fade-up" style={{animationDelay: '0.2s'}}>

<img alt="Schweinswirt Interior Rustic" className="transition-transform duration-[2000ms] group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57a4f174-2d6a-4e95-b227-2f53cbaf9bf5_1600w.png"/>
<div className="bg-gradient-to-t from-neutral-900/40 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</section>

<section className="border-y scroll-mt-16 bg-white border-neutral-200 pt-24 pb-24" id="about">
<div className="max-w-screen-xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="relative order-2 lg:order-1">
<div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl shadow-neutral-200 relative group border border-neutral-100">
<img alt="Rustic Beams and Brick" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col overflow-y-auto no-scrollbar bg-white/95 border-neutral-200/50 border-l pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 shadow-inner backdrop-blur-xl">
<div className="flex items-start justify-between mb-6 shrink-0">
<div className="">
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight leading-tight">Tisch reservieren</h3>
<p className="text-xs text-neutral-500 font-medium mt-1">Sichern Sie sich Ihren Platz.</p>
</div>
<div className="w-8 h-8 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-900 shrink-0">
<svg className="lucide lucide-calendar-plus" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path><path d="M3 10h18"></path><path d="M16 19h6"></path><path d="M19 16v6"></path></svg>
</div>
</div>
<form className="space-y-4 flex-1 flex flex-col" onsubmit="event.preventDefault()">
<div className="grid grid-cols-2 gap-3 shrink-0">
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500 ml-0.5">Personen</label>
<div className="relative group">
<select className="w-full appearance-none bg-neutral-50 hover:bg-neutral-100 transition-colors border border-neutral-200 rounded-md py-2 pl-3 pr-8 text-sm font-medium text-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900">
<option value="1">1 Person</option>
<option selected="" value="2">2 Personen</option>
<option value="3">3 Personen</option>
<option value="4">4 Personen</option>
<option value="5">5 Personen</option>
<option value="6">6 Personen</option>
<option value="7">7 Personen</option>
<option value="8">8 Personen</option>
<option value="9">9 Personen</option>
<option value="10">10 Personen</option>
<option value="11">11 Personen</option>
<option value="12">12 Personen</option>
<option value="13">13 Personen</option>
<option value="14">14 Personen</option>
6 Personen
            <option value="17">17 Personen</option>
<option value="18">18 Personen</option>
<option value="19">19 Personen</option>
<option value="20">20 Personen</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none group-hover:text-neutral-600 transition-colors" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500 ml-0.5">Zeit</label>
<div className="relative group">
<input className="w-full appearance-none bg-neutral-50 hover:bg-neutral-100 transition-colors border border-neutral-200 rounded-md py-2 px-3 text-sm font-medium text-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 h-[38px]" type="time" value="19:00"/>
</div>
</div>
</div>
<div className="space-y-1.5 shrink-0">
<label className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500 ml-0.5">Datum</label>
<div className="relative">
<input className="w-full appearance-none bg-neutral-50 hover:bg-neutral-100 transition-colors border border-neutral-200 rounded-md py-2 px-3 text-sm font-medium text-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900" type="date"/>
</div>
</div>
<div className="space-y-1.5 shrink-0">
<label className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500 ml-0.5">Notiz <span className="text-neutral-300 font-normal normal-case tracking-normal">(Optional)</span></label>
<textarea className="w-full appearance-none bg-neutral-50 hover:bg-neutral-100 transition-colors border border-neutral-200 rounded-md p-3 text-sm font-medium text-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 resize-none placeholder:text-neutral-400" placeholder="Wünsche, Allergien..." rows="3"></textarea>
</div>
<div className="pt-2 mt-auto shrink-0">
<button className="hover:bg-neutral-800 transition-all flex group active:scale-[0.98] text-sm font-medium text-white bg-neutral-900 w-full rounded-md pt-2.5 pb-2.5 shadow-sm gap-x-2 gap-y-2 items-center justify-center" type="submit">Nachricht abschicken</button>
</div>
</form>
</div>
</div>
</div>

<div className="space-y-8 order-1 lg:order-2">
<div className="">
<span className="uppercase block text-xs font-medium text-neutral-400 tracking-widest mb-3">Atmosphäre</span>
<h2 className="text-4xl text-neutral-900 tracking-tight font-serif mb-6">Rustikaler Charme am Uelser Diek.</h2>
<div className="space-y-4 text-neutral-500 font-light leading-relaxed">
<p className="">Treten Sie ein in den Schweinswirt und lassen Sie die moderne Welt hinter sich.
Unser Restaurant zeichnet sich durch freigelegte Ziegelwände, jahrhundertealte Holzbalken und den warmen Schein funkelnder Kronleuchter aus.

Ob Sie in einer gemütlichen Ecke sitzen, umgeben von Geschichte, oder mit einer großen Familie an unseren massiven Holztischen zusammenkommen – die Atmosphäre lädt Sie ein, zu bleiben, zu entspannen und die herzliche deutsche Küche so zu genießen, wie sie gedacht war.</p>
</div>
</div>
<div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 space-y-4">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-utensils-crossed w-4 h-4 text-red-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8V2z"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
<h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">Kitchen Philosophy</h3>
</div>
<p className="leading-relaxed text-sm text-neutral-500">Wir glauben an ehrliches Essen. Großzügige Portionen, regionale Zutaten und Rezepte, die von Generation zu Generation weitergegeben wurden. Von knusprigem Schnitzel bis hin zu deftigen Braten.</p>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-16 bg-neutral-100 pt-24 pr-6 pb-24 pl-6" id="menu">
<div className="max-w-screen-xl mx-auto">
<div className="flex flex-col md:flex-row mb-16 gap-x-6 gap-y-6 items-end justify-between">
<div className="">
<span className="text-xs font-medium tracking-widest text-neutral-400 uppercase block mb-3">Speisekarte</span>
<h2 className="text-4xl text-neutral-900 tracking-tight font-serif">Entdecke unsere Speisekarte</h2>
<p className="text-sm font-light text-neutral-500 mt-2">Finde unsere leckeren Gerichte</p>
</div>
<a className="hover:border-red-500 hover:text-red-500 transition-colors text-xs font-medium bg-white border-neutral-200 border rounded pt-2 pr-4 pb-2 pl-4 shadow-sm" href="#">Speisekarte jetzt herunterladen</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-neutral-200" id="gallery">
<div className="max-w-screen-xl mx-auto mb-12 text-center">
<span className="text-xs font-medium tracking-widest text-neutral-400 uppercase block mb-3">Galerie</span>
<h2 className="text-3xl text-neutral-900 tracking-tight font-serif" style={{}}>Einblicke in unser schönes Restaurant.</h2>
</div>
<div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
<div className="col-span-2 row-span-2 rounded-lg overflow-hidden relative group">
<img alt="Cocktails and ambiance" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/732dcd6c-81d5-468f-8c29-229c063ec91b_1600w.jpg"/>
</div>
<div className="rounded-lg overflow-hidden relative group">
<img alt="Schnitzel detail" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9ccdf525-87f6-4413-bd5e-abb1d1aa5c27_800w.jpg"/>
</div>
<div className="rounded-lg overflow-hidden relative group">
<img alt="Coffee and Cake" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b40cc8de-38ae-440e-861f-391823f3901c_800w.jpg"/>
</div>
<div className="col-span-2 rounded-lg overflow-hidden relative group">
<img alt="Restaurant wide shot" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0733520d-4d2d-44f4-8384-c60d3d0dc6f5_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900 text-neutral-50 relative overflow-hidden" id="contact">

<div className="opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-screen-xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="">
<span className="uppercase block text-xs font-medium text-neutral-500 tracking-widest mb-4">Besuche uns</span>
<h2 className="text-4xl text-white tracking-tight font-serif mb-6">Finde uns in Uelsen</h2>
<p className="leading-relaxed text-lg font-light text-neutral-400 max-w-md" style={{}}>Zu finden am Uelser Diek 28. Wir freuen uns darauf, Sie in unserem rustikalen Restaurant begrüßen zu dürfen. Für Wochenenden empfehlen wir eine Reservierung.</p>
</div>
<div className="border-neutral-800 border-t pt-6 space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 text-red-500">
<svg className="lucide lucide-map-pin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="">
<h4 className="text-sm font-medium text-white">Addresse</h4>
<p className="text-neutral-400 text-sm mt-1">Uelser Diek 2849843 Uelsen, Germany</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 text-red-500">
<svg className="lucide lucide-phone" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<div className="">
<h4 className="text-sm font-medium text-white">Kontakt</h4>
<p className="text-neutral-400 text-sm mt-1">
<a className="hover:text-white transition-colors" href="tel:05942988538">05942 988538</a>
<a className="hover:text-white transition-colors" href="mailto:schweinswirt-uelsen@outlook.de">schweinswirt-uelsen@outlook.de</a>
</p>
</div>
</div>
</div>
</div>

<div className="h-[400px] w-full rounded-xl overflow-hidden shadow-2xl shadow-black/40 border border-neutral-700 bg-neutral-800 relative group">

<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
<img className="opacity-50 mix-blend-overlay w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9082412-9367-4ce5-82c4-9a11d17aeb82_1600w.png"/>
<div className="absolute z-10 flex flex-col items-center">
<div className="bg-red-500 p-2 rounded-full shadow-lg animate-bounce">
<svg className="lucide lucide-map-pin text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle className="" cx="12" cy="10" r="3"></circle></svg>
</div>
<span className="text-xs font-bold text-neutral-900 bg-white rounded mt-2 pt-1 pr-3 pb-1 pl-3 shadow-lg">Schweinswirt</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-50 border-neutral-200 border-t pt-16 pr-6 pb-8 pl-6">
<div className="flex flex-col md:flex-row gap-8 max-w-screen-xl mr-auto ml-auto gap-x-8 gap-y-8 items-center justify-between">
<div className="text-center md:text-left">
<h2 className="font-serif text-2xl tracking-tight text-neutral-900">SCHWEINSWIRT</h2>
<p className="text-xs text-neutral-400 mt-2 font-light">Gastfreundschaft mit Tradition.</p>
</div>
<div className="flex gap-6">
<a className="text-neutral-400 hover:text-red-500 transition-colors" href="#">
<span className="sr-only">Instagram</span>
<svg className="lucide lucide-instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-neutral-400 hover:text-red-500 transition-colors" href="#">
<span className="sr-only">Facebook</span>
<svg className="lucide lucide-facebook" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="text-neutral-400 hover:text-red-500 transition-colors" href="mailto:schweinswirt-uelsen@outlook.de">
<span className="sr-only">Email</span>
<svg className="lucide lucide-mail" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path></svg>
</a>
</div>
<div className="text-xs text-neutral-400 font-light">
      © 2024 Schweinswirt Uelsen. All rights reserved. <a className="hover:text-neutral-600 underline decoration-neutral-300 underline-offset-2 ml-2" href="#">Impressum</a>
</div>
</div>
</footer>


    </>
  );
}
