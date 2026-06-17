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
brand: {
black: '#111111',
gray: '#FAFAFA',
accent: '#FF2E43', // Neon Red/Pink
logo: '#7C5CFC', // Logo Purple/Blue
}
},
fontSize: {
'2xs': '0.65rem',
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 transition-all duration-300">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="group select-none" href="#">
</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#kurzy">
            Kurzy
          </a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#fitness">
            Benefity
          </a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#tym">
            Náš tým
          </a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#recenze">
            Recenze
          </a>
</div>

<div className="hidden md:block">
<a className="inline-flex items-center gap-2 bg-zinc-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-zinc-800 hover:scale-105 transition-all duration-300" href="#kontakt">
            Kontaktujte nás
            <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<button className="md:hidden p-2 text-zinc-600">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<header className="overflow-hidden lg:pt-30 lg:pb-30 pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-4">

<div className="lg:col-span-2 lg:row-span-3 bg-white rounded-3xl p-8 lg:p-12 border border-zinc-100 flex flex-col justify-center items-start gap-8 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-brand-gray rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-700"></div>
<div className="z-10 w-full relative space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 shadow-sm">
<span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
<span className="text-xs font-medium text-zinc-600 uppercase tracking-wider">
                Nábory otevřeny
              </span>
</div>
<h1 className="display-font text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-zinc-900 leading-[1.1]">
              Kalafa &amp; Batela
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500">
                Shuffle School
              </span>
</h1>
<p className="text-lg text-zinc-600 max-w-lg leading-relaxed font-light">
              Vítejte v první škole shuffle dance v České republice. Zábavné
              kardio, moderní komunita a fresh energie. Zapomeň na nudu ve
              fitku, pojď tančit.
            </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center gap-2 bg-brand-accent text-white text-base font-medium px-8 py-4 rounded-full hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-1 transition-all duration-300" href="#kurzy">
                Otevřené kurzy
                <i className="w-5 h-5" data-lucide="play-circle" strokeWidth="1.5"></i>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-white text-zinc-900 border border-zinc-200 text-base font-medium px-8 py-4 rounded-full hover:bg-zinc-50 hover:border-zinc-300 transition-all duration-300" href="#video">
<i className="w-5 h-5 text-zinc-500" data-lucide="instagram" strokeWidth="1.5"></i>
                Sleduj nás
              </a>
</div>
<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-3">
<img alt="Student" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Student" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Student" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div className="text-sm font-medium text-zinc-500">
<span className="text-zinc-900 font-semibold">2000+</span>
                studentů prošlo naší školou
              </div>
</div>
</div>
</div>

<div className="lg:col-span-1 lg:row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer min-h-[300px]">
<img alt="Shuffle Dance" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&amp;w=1978&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-5 left-5 right-5 text-white translate-y-2 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500">
<div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full mb-3">
<span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></span>
<span className="text-[10px] font-semibold tracking-wider uppercase">
                Live Energy
              </span>
</div>
<h3 className="font-bold text-lg leading-tight font-sora">
              Shuffle Lifestyle
            </h3>
</div>
</div>

<div className="lg:col-span-1 lg:row-span-1 bg-white border border-zinc-100 rounded-3xl p-6 flex flex-col justify-between group hover:border-brand-accent/20 hover:shadow-xl hover:shadow-brand-accent/5 transition-all duration-300 relative overflow-hidden min-h-[180px]">
<div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-110"></div>
<div className="w-10 h-10 rounded-2xl bg-brand-gray flex items-center justify-center text-brand-accent mb-2 group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="flame" strokeWidth="1.5"></i>
</div>
<div>
<span className="block text-3xl font-bold text-zinc-900 tracking-tighter font-sora">
              600+
            </span>
<span className="text-xs text-zinc-500 font-medium uppercase tracking-wide">
              Kcal / lekce
            </span>
</div>
</div>

<div className="lg:col-span-1 lg:row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer min-h-[300px]">
<img alt="Community" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
<div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/50 shadow-sm translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<p className="text-xs font-bold text-zinc-900 flex items-center gap-2">
<i className="w-3 h-3 text-brand-accent" data-lucide="users" strokeWidth="1.5"></i>
              Skvělá parta
            </p>
</div>
</div>

<div className="lg:col-span-1 lg:row-span-1 bg-zinc-900 rounded-3xl p-6 relative overflow-hidden group cursor-pointer border border-zinc-800 hover:border-zinc-700 transition-colors min-h-[180px]">
<div className="absolute inset-0 flex items-end justify-center gap-1.5 opacity-20 pb-6">
<div className="w-1.5 bg-brand-accent h-1/3 animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-1.5 bg-brand-accent h-2/3 animate-[pulse_1.4s_ease-in-out_infinite]"></div>
<div className="w-1.5 bg-brand-accent h-1/2 animate-[pulse_0.8s_ease-in-out_infinite]"></div>
<div className="w-1.5 bg-brand-accent h-3/4 animate-[pulse_1.2s_ease-in-out_infinite]"></div>
<div className="w-1.5 bg-brand-accent h-1/3 animate-[pulse_1s_ease-in-out_infinite]"></div>
</div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="w-10 h-10 rounded-2xl bg-zinc-800 flex items-center justify-center text-white/80 group-hover:text-brand-accent transition-colors">
<i className="w-5 h-5" data-lucide="music" strokeWidth="1.5"></i>
</div>
<div className="">
<p className="text-white font-semibold text-sm">Fresh Music</p>
<p className="text-zinc-500 text-xs mt-0.5">House &amp; Techno</p>
</div>
</div>
</div>
</div>
</header>

<div className="border-y border-zinc-100 bg-white py-12 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-zinc-400 mb-8 tracking-wide uppercase">
          Partneři, kteří nám důvěřují
        </p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<h3 className="text-xl font-bold font-sans tracking-tight">NIKE</h3>
<h3 className="text-xl font-bold font-sans tracking-tight italic">
            PUMA
          </h3>
<h3 className="text-xl font-bold font-sans tracking-tight">ADIDAS</h3>
<h3 className="text-xl font-bold font-sans tracking-tight">REEBOK</h3>
<h3 className="text-xl font-bold font-sans tracking-tight">GYMSHARK</h3>
</div>
</div>
</div>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 order-2 lg:order-1">
<div className="aspect-[4/5] bg-zinc-100 rounded-3xl overflow-hidden relative group">
<img alt="Kalafa and Batela" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
<span className="text-brand-accent font-semibold tracking-tight text-sm uppercase">
            O nás
          </span>
<h2 className="display-font text-3xl lg:text-4xl font-semibold tracking-tighter text-zinc-900">
            Jsme Kalafa &amp; Batela.
            <br/>
            Průkopníci shuffle dance v Česku.
          </h2>
<div className="space-y-4 text-lg text-zinc-600 font-light">
<p>
              Jsme hrdí na to, že jsme průkopníky a přinášíme to nejlepší ze
              světa shuffle dance přímo k vám. Jako jediní se zaměřujeme čistě
              na tento taneční styl a zakládáme si na velmi propracovaném a
              praxí ověřeném systému výuky.
            </p>
<p>
              S více než 7 lety zkušeností jsme vybudovali silnou a uznávanou
              taneční komunitu, která neustále roste. Naše škola nabízí širokou
              škálu kurzů, které jsou k dispozici ve čtyřech městech po celé
              České republice.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-gray relative overflow-hidden" id="fitness">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-brand-accent font-semibold tracking-tight text-sm uppercase">
            Lifestyle &amp; Fitness
          </span>
<h2 className="display-font text-3xl lg:text-4xl font-semibold tracking-tighter text-zinc-900 mt-2">
            Víc než jen tanec.
            <br/>
            Tvoje nová závislost.
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-3xl border border-zinc-100 hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 group">
<div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-3 tracking-tight">
              Intenzivní Kardio
            </h3>
<p className="text-zinc-600 leading-relaxed">
              Zábavný způsob hubnutí, při kterém zapomeneš, že cvičíš. Zlepši
              svou vytrvalost a spálíš stovky kalorií v rytmu hudby.
            </p>
</div>

<div className="bg-white p-8 rounded-3xl border border-zinc-100 hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 group">
<div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="smile" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-3 tracking-tight">
              Mental Health Boost
            </h3>
<p className="text-zinc-600 leading-relaxed">
              Tanec přirozeně zvyšuje hladinu dopaminu. Odcházíš s čistou
              hlavou, lepší náladou a spoustou nové energie.
            </p>
</div>

<div className="bg-white p-8 rounded-3xl border border-zinc-100 hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 group">
<div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-3 tracking-tight">
              Komunita &amp; Přátelé
            </h3>
<p className="text-zinc-600 leading-relaxed">
              Najdeš zde partu lidí na stejné vlně. Podpora, společné akce a
              nová přátelství, která přesahují zdi tanečního sálu.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="kurzy">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-brand-accent font-semibold tracking-tight text-sm uppercase">
              Města
            </span>
<h2 className="display-font text-3xl lg:text-4xl font-semibold tracking-tighter text-zinc-900 mt-2">
              Otevřené kurzy
            </h2>
<p className="text-lg text-zinc-500 mt-2 font-light">
              Vyber si město a začni svou cestu.
            </p>
</div>

<div className="flex gap-2 flex-wrap">
<button className="px-5 py-2 rounded-full bg-zinc-900 text-white text-sm font-medium">
              Vše
            </button>
<button className="px-5 py-2 rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-200 text-sm font-medium transition-colors">
              Začátečníci
            </button>
<button className="px-5 py-2 rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-200 text-sm font-medium transition-colors">
              Pokročilí
            </button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Praha" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1541336528065-8f1fdc435835?w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-white text-xl font-semibold tracking-tight mb-2">
                Praha
              </h3>
<div className="flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
<span className="text-zinc-300 text-sm">Út &amp; Čt 18:00</span>
<span className="bg-white text-black p-2 rounded-full">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</span>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Ostrava" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-white text-xl font-semibold tracking-tight mb-2">
                Ostrava
              </h3>
<div className="flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
<span className="text-zinc-300 text-sm">Po &amp; St 17:00</span>
<span className="bg-white text-black p-2 rounded-full">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</span>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
<img alt="České Budějovice" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-white text-xl font-semibold tracking-tight mb-2">
                Č. Budějovice
              </h3>
<div className="flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
<span className="text-zinc-300 text-sm">Pá 16:30</span>
<span className="bg-white text-black p-2 rounded-full">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</span>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Plzeň" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-white text-xl font-semibold tracking-tight mb-2">
                Plzeň
              </h3>
<div className="flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
<span className="text-zinc-300 text-sm">Út 19:00</span>
<span className="bg-white text-black p-2 rounded-full">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="display-font text-4xl lg:text-6xl font-semibold tracking-tighter text-zinc-900 mb-6">
          Otevři naše brány a přidej se k
          <span className="italic text-brand-accent">fenoménu</span>
</h2>
<p className="text-lg text-zinc-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Našimi bránami prošlo už mnoho vášnivých tanečníků. Tak na co čekáš?
          Připoj se k nám a objev sílu rytmu, svobodu pohybu a nekonečné
          možnosti.
        </p>
<button className="bg-zinc-900 text-white text-base font-medium px-10 py-4 rounded-full hover:bg-zinc-800 hover:scale-105 transition-all duration-300 shadow-xl shadow-zinc-900/10">
          Prohlédnout kurzy
        </button>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 space-y-6">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 uppercase tracking-wider">
<i className="w-3 h-3 text-brand-accent" data-lucide="users" strokeWidth="1.5"></i>
            Komunita
          </span>
<h2 className="display-font text-3xl lg:text-4xl font-semibold tracking-tighter text-zinc-900">
            Staň se součástí naší
            <br/>
            taneční rodiny
          </h2>
<div className="space-y-4 text-lg text-zinc-600 font-light">
<p>
              Navštěvovat naše kurzy neznamená pouze tančení, je to i vstupenka
              do skvělé komunity! Pro naše tanečníky organizujeme menší i větší
              akce, jako například Shuffle víkendy, workshopy se špičkovými
              zahraničními tanečníky a vánoční večírky.
            </p>
</div>
<ul className="space-y-3 pt-2">
<li className="flex items-center gap-3 text-zinc-700">
<i className="w-5 h-5 text-brand-accent" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>Workshopy se zahraničními lektory</span>
</li>
<li className="flex items-center gap-3 text-zinc-700">
<i className="w-5 h-5 text-brand-accent" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>Víkendové akce a party</span>
</li>
<li className="flex items-center gap-3 text-zinc-700">
<i className="w-5 h-5 text-brand-accent" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>Podpora v růstu a soutěžení</span>
</li>
</ul>
</div>
<div className="order-1 lg:order-2 relative">
<div className="aspect-square rounded-full overflow-hidden border-8 border-zinc-50">
<img alt="Community" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg border border-zinc-100 max-w-xs animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<span className="w-8 h-8 rounded-full bg-zinc-200 border-2 border-white"></span>
<span className="w-8 h-8 rounded-full bg-zinc-300 border-2 border-white"></span>
<span className="w-8 h-8 rounded-full bg-zinc-400 border-2 border-white"></span>
</div>
<p className="text-sm font-semibold text-zinc-900">
                Přidej se k nám!
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-gray" id="tym">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="display-font text-3xl font-semibold tracking-tighter text-zinc-900">
            Náš tým
          </h2>
<a className="text-sm font-medium text-zinc-500 hover:text-brand-accent transition-colors" href="#">
            Zobrazit všechny
          </a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl">
<img alt="Dan" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
<p className="text-white text-lg font-semibold">Dan</p>
<p className="text-zinc-300 text-sm">Praha</p>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl">
<img alt="Matyáš" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
<p className="text-white text-lg font-semibold">Matyáš</p>
<p className="text-zinc-300 text-sm">Ostrava</p>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl">
<img alt="Eliška" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
<p className="text-white text-lg font-semibold">Eliška</p>
<p className="text-zinc-300 text-sm">Praha</p>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl">
<img alt="Týna" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
<p className="text-white text-lg font-semibold">Týna</p>
<p className="text-zinc-300 text-sm">Plzeň</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="display-font text-3xl font-semibold tracking-tighter text-zinc-900 text-center mb-12">
          Často kladené otázky
        </h2>
<div className="space-y-4">

<details className="group bg-zinc-50 p-6 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden border border-transparent hover:border-zinc-200 transition-all">
<summary className="flex items-center justify-between cursor-pointer list-none">
<h3 className="text-lg font-medium text-zinc-900">
                Co je Shuffle Kalafa &amp; Batela?
              </h3>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-zinc-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<p className="text-zinc-600 mt-4 leading-relaxed font-light">
              Jsme první a největší škola shuffle dance v ČR. Učíme moderní
              styl, zaměřujeme se na techniku, muzikalitu a hlavně zábavu.
            </p>
</details>

<details className="group bg-zinc-50 p-6 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden border border-transparent hover:border-zinc-200 transition-all">
<summary className="flex items-center justify-between cursor-pointer list-none">
<h3 className="text-lg font-medium text-zinc-900">
                Jsou kurzy vhodné i pro úplné začátečníky?
              </h3>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-zinc-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<p className="text-zinc-600 mt-4 leading-relaxed font-light">
              Ano! Většina našich studentů začíná od nuly. Máme speciální
              metodiku pro začátečníky, díky které zvládneš základy rychle a
              efektivně.
            </p>
</details>

<details className="group bg-zinc-50 p-6 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden border border-transparent hover:border-zinc-200 transition-all">
<summary className="flex items-center justify-between cursor-pointer list-none">
<h3 className="text-lg font-medium text-zinc-900">
                Co si mám vzít na sebe?
              </h3>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-zinc-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<p className="text-zinc-600 mt-4 leading-relaxed font-light">
              Pohodlné sportovní oblečení a hlavně čistou sálovou obuv.
              Doporučujeme boty s rovnou podrážkou pro lepší skluz.
            </p>
</details>
</div>
</div>
</section>

<footer className="bg-zinc-950 text-white pt-20 pb-10 overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20 relative z-10">
<div className="col-span-1 md:col-span-2">

<a className="inline-block mb-6 group select-none" href="#">
<div className="inline-flex flex-col items-center justify-center px-3 py-1.5 border-[1.5px] border-[#7C5CFC] rounded-xl bg-white transition-transform duration-300 group-hover:scale-105 shadow-sm shadow-[#7C5CFC]/20">
<span className="font-sora font-black text-2xl leading-[0.8] tracking-wide text-black">KABA</span>
<span className="font-inter font-bold italic text-[0.6rem] leading-none text-[#7C5CFC] tracking-[0.2em] mt-0.5 ml-0.5">DANCE</span>
</div>
</a>
<p className="text-zinc-400 max-w-sm font-light">
            Vytváříme komunitu, kde se pohyb stává radostí. Přidej se k nám a
            objev svět shuffle dance.
          </p>
<div className="flex gap-4 mt-8">
<a className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-brand-accent transition-colors border border-zinc-800" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-brand-accent transition-colors border border-zinc-800" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-brand-accent transition-colors border border-zinc-800" href="#">
<i className="w-5 h-5" data-lucide="youtube" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div>
<h4 className="font-semibold mb-6">Navigace</h4>
<ul className="space-y-4 text-zinc-400 font-light">
<li>
<a className="hover:text-white transition-colors" href="#">Domů</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Kurzy</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Workshopy
              </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-6">Kontakt</h4>
<ul className="space-y-4 text-zinc-400 font-light">
<li>shufflekalafa@gmail.com</li>
<li>+420 123 456 789</li>
<li>Praha, Česká republika</li>
</ul>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 text-center text-zinc-500 text-sm font-light relative z-10">
        © 2025 Shuffle Kalafa. Všechna práva vyhrazena.
      </div>

<div className="absolute bottom-0 left-0 w-full overflow-hidden select-none pointer-events-none opacity-5">
<span className="text-[20vw] font-bold leading-none text-white tracking-tighter whitespace-nowrap block text-center transform translate-y-[20%]">
          SHUFFLE
        </span>
</div>
</footer>


    </>
  );
}
