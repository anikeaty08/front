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
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
primary: {
50: '#fff1f2',
100: '#ffe4e6',
200: '#fecdd3',
300: '#fda4af',
400: '#fb7185',
500: '#f43f5e',
600: '#e11d48',
},
accent: {
yellow: '#fef08a',
blue: '#bae6fd',
green: '#bbf7d0',
orange: '#fed7aa',
purple: '#e9d5ff',
},
stone: {
50: '#fffbef',
100: '#fef3c7',
800: '#451a03',
900: '#2a1205',
}
}
}
}
}

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
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-primary-100/50">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-lg tracking-widest font-semibold text-primary-600 uppercase" href="#">Petra Bednářová</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-primary-500 transition-colors" href="#o-mne">O mně</a>
<a className="hover:text-primary-500 transition-colors" href="#pomoc">S čím pomáhám</a>
<a className="hover:text-primary-500 transition-colors" href="#ebook">E-book</a>
<a className="hover:text-primary-500 transition-colors" href="#spoluprace">Spolupráce</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-all hover:shadow-lg hover:shadow-primary-200 hover:-translate-y-0.5" href="#ebook">
                Koupit E-book
            </a>

<button className="md:hidden text-stone-800">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent-yellow organic-blob blur-3xl opacity-60 -z-10"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary-200 organic-blob blur-3xl opacity-60 -z-10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue rounded-full blur-[100px] opacity-20 -z-20"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary-200 text-primary-600 text-xs tracking-wide font-semibold mb-8 shadow-sm">
<iconify-icon icon="solar:heart-angle-linear" width="16"></iconify-icon>
                Respektující přístup pro moderní rodiny
            </div>
<h1 className="font-serif text-5xl lg:text-7xl leading-tight text-stone-900 mb-6">
                Laskavé hranice.<br/>
<span className="italic text-primary-500">Pevné vedení.</span> Bez křiku.
            </h1>
<p className="text-lg lg:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
                Provázím rodiče světem dětských emocí. Pomáhám vám porozumět vzdoru, nastavit hranice s úctou a najít radost i ve chvílích, kdy to doma bouří.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-all shadow-xl shadow-primary-200 hover:-translate-y-1" href="#ebook">
                    Chci E-book
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white border border-primary-100 text-stone-700 rounded-full font-medium hover:border-primary-300 transition-all hover:bg-primary-50" href="#o-mne">
                    Více o mně
                </a>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-serif text-center mb-16 tracking-tight text-stone-900">Pro rodiče, kteří...</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-accent-orange/20 border border-transparent hover:border-accent-orange hover:bg-accent-orange/30 transition-all group duration-300">
<div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 text-orange-500 shadow-sm group-hover:scale-110 transition-transform rotate-3">
<iconify-icon icon="solar:soundwave-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3">Už nechtějí křičet</h3>
<p className="text-stone-600 leading-relaxed">
                        Cítíš, že křik nikam nevede, ale nevíš, jak jinak reagovat, když ti tečou nervy.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-accent-blue/20 border border-transparent hover:border-accent-blue hover:bg-accent-blue/30 transition-all group duration-300">
<div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 text-sky-500 shadow-sm group-hover:scale-110 transition-transform -rotate-2">
<iconify-icon icon="solar:chat-round-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3">Chtějí chápat své dítě</h3>
<p className="text-stone-600 leading-relaxed">
                        Chceš rozumět tomu, co se skrývá za vzdorem a "zlobením", a reagovat na příčinu.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-primary-100 border border-transparent hover:border-primary-300 hover:bg-primary-200 transition-all group duration-300">
<div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 text-primary-500 shadow-sm group-hover:scale-110 transition-transform rotate-1">
<iconify-icon icon="solar:shield-star-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3">Chtějí být pevní a laskaví</h3>
<p className="text-stone-600 leading-relaxed">
                        Hledáš cestu mezi autoritářskou výchovou a přílišnou benevolentností.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 overflow-hidden relative" id="o-mne">
<div className="absolute top-1/2 right-0 w-64 h-64 bg-accent-purple rounded-full blur-[80px] opacity-40 -translate-y-1/2"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2 relative">
<div className="absolute inset-0 bg-primary-200 rounded-[2rem] rotate-3 transform translate-y-4 translate-x-4"></div>
<div className="absolute inset-0 bg-accent-yellow rounded-[2rem] -rotate-2 transform -translate-y-2 -translate-x-2 -z-10"></div>
<img alt="Petra Bednářová" className="relative rounded-[2rem] shadow-xl object-cover w-full h-[600px] border-4 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e7ce752e-d734-4ecc-b431-77192714c988_800w.jpg"/>
</div>
<div className="w-full lg:w-1/2">
<div className="mb-4 text-primary-600 font-semibold tracking-wide uppercase text-xs flex items-center gap-2">
<span className="w-8 h-[2px] bg-primary-600"></span> O mně
                    </div>
<h2 className="text-3xl lg:text-4xl font-serif text-stone-900 mb-8 tracking-tight">Jsem máma, která se učí každý den. Stejně jako vy.</h2>
<div className="space-y-6 text-stone-600 text-lg leading-relaxed">
<p>
                            Ahoj, jsem Petra. Máma tří dětí, která zjistila, že teorie z knih vždycky nenarazí na realitu všedního dne tak hladce, jak bychom si přáli.
                        </p>
<p>
                            Moje cesta k respektující výchově nevedla přes dokonalost, ale přes vlastní chyby, pocity viny a hledání cesty zpátky k sobě i k dětem. Věřím, že rodičovství není o tom být bezchybný robot, ale o budování bezpečného přístavu.
                        </p>
<p>
                            Zaměřuji se na vývojovou psychologii a práci s citlivými dětmi. Mým cílem je ukázat vám, že i ve chvílích největšího chaosu lze najít pochopení a <span className="text-primary-600 font-medium">společný smích</span>.
                        </p>
</div>
<div className="mt-10">
<img alt="Podpis" className="h-12 opacity-80 rotate-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="pomoc">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-primary-500 font-semibold tracking-wider text-xs uppercase mb-3 block">Témata a podpora</span>
<h2 className="text-4xl lg:text-5xl font-serif text-stone-900 mb-6 tracking-tight">S čím ti mohu pomoci?</h2>
<p className="text-stone-500 text-lg">Společně najdeme cestu ven z každodenních bojů.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-[2rem] bg-red-50 hover:bg-red-100 transition-colors duration-300 flex flex-col items-center text-center border border-red-100">
<div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 text-red-500">
<iconify-icon icon="solar:bomb-emoji-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-stone-900 mb-2">Záchvaty vzteku</h3>
<p className="text-stone-600 text-sm">Jak zvládnout emoce dítěte v obchodě i doma bez ztráty nervů.</p>
</div>
<div className="group relative p-8 rounded-[2rem] bg-orange-50 hover:bg-orange-100 transition-colors duration-300 flex flex-col items-center text-center border border-orange-100">
<div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 text-orange-500">
<iconify-icon icon="solar:hand-stars-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-stone-900 mb-2">Hranice bez trestů</h3>
<p className="text-stone-600 text-sm">Nastavení pravidel, která dítě respektuje, aniž by se muselo bát.</p>
</div>
<div className="group relative p-8 rounded-[2rem] bg-blue-50 hover:bg-blue-100 transition-colors duration-300 flex flex-col items-center text-center border border-blue-100">
<div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 text-blue-500">
<iconify-icon icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-stone-900 mb-2">Sourozenci</h3>
<p className="text-stone-600 text-sm">Když se doma bojuje o hračky i pozornost. Jak být spravedlivým soudcem.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-stone-900" id="ebook">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/30 rounded-full blur-[100px] opacity-40 -mr-32 -mt-32"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-blue/20 rounded-full blur-[100px] opacity-30 -ml-32 -mb-32"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-1/2 text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-yellow text-stone-900 text-xs font-bold tracking-wide mb-6 uppercase">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
                        Bestseller
                    </div>
<h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 tracking-tight">Průvodce dětskými emocemi</h2>
<p className="text-xl text-stone-300 mb-8 font-light leading-relaxed">
                        Kompletní manuál pro chvíle, kdy dochází trpělivost. Naučte se číst v emocích svých dětí a reagovat tak, aby se doma místo křiku rozhostil klid.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3 text-stone-200">
<iconify-icon className="text-primary-400 mt-1 flex-shrink-0" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span>5 konkrétních strategií pro krizové situace</span>
</li>
<li className="flex items-start gap-3 text-stone-200">
<iconify-icon className="text-primary-400 mt-1 flex-shrink-0" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span>Jak nastavit hranice bez pocitu viny</span>
</li>
<li className="flex items-start gap-3 text-stone-200">
<iconify-icon className="text-primary-400 mt-1 flex-shrink-0" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span>Audio nahrávky pro uklidnění rodiče (MP3)</span>
</li>
<li className="flex items-start gap-3 text-stone-200">
<iconify-icon className="text-primary-400 mt-1 flex-shrink-0" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span>Doživotní přístup k aktualizacím</span>
</li>
</ul>
<div className="flex flex-col sm:flex-row gap-4 items-center">
<a className="w-full sm:w-auto px-8 py-4 bg-primary-500 hover:bg-primary-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2 group" href="#payment-gateway-placeholder">
                            Koupit průvodce
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:card-linear" width="20"></iconify-icon>
</a>
<span className="text-stone-400 text-sm">30 denní garance vrácení peněz</span>
</div>
</div>

<div className="w-full lg:w-1/2">
<div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-gradient-to-br from-stone-800 to-stone-900 rounded-[2rem] border border-stone-700 p-8 shadow-2xl flex flex-col justify-between overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-500 rounded-full blur-[80px] opacity-20"></div>
<div className="relative z-10 flex justify-between items-start">
<iconify-icon className="text-primary-400" icon="solar:book-2-bold-duotone" width="48"></iconify-icon>
<span className="bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-lg border border-white/10 text-sm font-medium">PDF + Audio</span>
</div>
<div className="relative z-10 text-center my-8 transform transition-transform hover:scale-105 duration-500">

<div className="w-48 h-64 mx-auto bg-stone-100 rounded-lg shadow-xl flex flex-col items-center justify-center p-4 text-center mb-6 rotate-3 border-r-4 border-stone-300">
<span className="text-xs text-stone-400 uppercase tracking-widest mb-2">Petra Bednářová</span>
<span className="font-serif text-2xl text-stone-900 leading-tight">Emoce<br/><span className="text-primary-500 italic">pod kontrolou</span></span>
<div className="mt-8 w-12 h-1 bg-primary-200 rounded-full"></div>
</div>
</div>
<div className="relative z-10 bg-stone-800/80 backdrop-blur-md rounded-2xl p-6 border border-stone-700/50">
<div className="flex justify-between items-end">
<div>
<p className="text-stone-400 text-sm mb-1">Cena dnes</p>
<p className="text-3xl font-bold text-white">290 Kč</p>
</div>
<div className="text-right">
<p className="text-accent-green text-xs font-bold bg-accent-green/10 px-2 py-1 rounded">Okamžité stažení</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-serif text-center mb-16 text-stone-900">Co říkají ostatní maminky</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 bg-stone-50 rounded-[2rem] relative border border-stone-100 hover:shadow-lg transition-shadow">
<div className="absolute -top-4 -right-4 w-10 h-10 bg-accent-yellow rounded-full flex items-center justify-center text-stone-900 shadow-sm">
<iconify-icon icon="solar:quote-up-square-linear" width="20"></iconify-icon>
</div>
<p className="text-stone-600 italic mb-6 leading-relaxed">"Díky Petře jsem pochopila, že když se moje dcera vzteká, nedělá to mně naschvál. E-book mi otevřel oči."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-sm">JM</div>
<div>
<div className="font-bold text-stone-900">Jana M.</div>
<div className="text-stone-400 text-xs">máma 4leté Aničky</div>
</div>
</div>
</div>

<div className="p-8 bg-stone-50 rounded-[2rem] relative border border-stone-100 hover:shadow-lg transition-shadow">
<div className="absolute -top-4 -right-4 w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center text-stone-900 shadow-sm">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</div>
<p className="text-stone-600 italic mb-6 leading-relaxed">"Sledovala jsem spoustu profilů, ale až tady jsem našla laskavost spojenou s praktičností. Investice do průvodce se vyplatila tisíckrát."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">TK</div>
<div>
<div className="font-bold text-stone-900">Tereza K.</div>
<div className="text-stone-400 text-xs">máma dvou synů</div>
</div>
</div>
</div>

<div className="p-8 bg-stone-50 rounded-[2rem] relative border border-stone-100 hover:shadow-lg transition-shadow hidden md:block">
<div className="absolute -top-4 -right-4 w-10 h-10 bg-accent-green rounded-full flex items-center justify-center text-stone-900 shadow-sm">
<iconify-icon icon="solar:star-linear" width="20"></iconify-icon>
</div>
<p className="text-stone-600 italic mb-6 leading-relaxed">"Konečně chápu, co to znamená nastavit hranice laskavě. Už se nebojím říct NE a přitom zůstat v napojení se synem."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm">MS</div>
<div>
<div className="font-bold text-stone-900">Martina S.</div>
<div className="text-stone-400 text-xs">máma 2letého Kuby</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 overflow-hidden border-t border-stone-100 bg-stone-50/50">
<div className="max-w-6xl mx-auto px-6 text-center mb-12">
<h2 className="text-2xl font-serif text-stone-900 mb-4">Inspirace na každý den</h2>
<a className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors bg-white px-6 py-2 rounded-full shadow-sm border border-stone-100" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
                Sleduj mě na Instagramu
            </a>
</div>
<div className="flex justify-center gap-6 min-w-[1000px] overflow-x-auto pb-8 px-4">

<div className="w-64 h-64 bg-stone-200 rounded-2xl flex items-center justify-center overflow-hidden relative group shadow-md hover:-translate-y-2 transition-transform duration-500">
<img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-64 h-64 bg-accent-yellow rounded-2xl flex items-center justify-center relative group shadow-md hover:-translate-y-2 transition-transform duration-500">
<div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
<p className="font-serif text-stone-900 text-xl font-medium">"Dítě není zlé.<br/>Dítě se učí."</p>
</div>
</div>
<div className="w-64 h-64 bg-stone-200 rounded-2xl flex items-center justify-center overflow-hidden relative group shadow-md hover:-translate-y-2 transition-transform duration-500">
<img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-stone-100" id="spoluprace">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-serif text-stone-900 mb-6">Spolupráce</h2>
<p className="text-lg font-light mb-8 max-w-xl mx-auto text-stone-600">
                Jste značka, která souzní s hodnotami respektu, hravosti a rodiny? Ráda podpořím smysluplné projekty.
            </p>
<a className="inline-block px-8 py-3 bg-stone-900 text-white rounded-full hover:bg-primary-600 transition-all" href="mailto:spoluprace@petrabednarova.cz">
                Nabídnout spolupráci
            </a>
</div>
</section>

<footer className="bg-stone-50 border-t border-stone-200 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="text-lg font-serif font-bold tracking-wide text-primary-600 block mb-2">PETRA BEDNÁŘOVÁ</span>
<p className="text-sm text-stone-400">© 2023 Všechna práva vyhrazena.</p>
<a className="text-sm font-medium text-stone-600 hover:text-primary-500 mt-1 block" href="mailto:info@petrabednarova.cz">info@petrabednarova.cz</a>
</div>
<div className="flex gap-6">
<a className="w-10 h-10 rounded-full bg-white shadow-sm border border-stone-100 flex items-center justify-center text-stone-400 hover:text-primary-600 hover:border-primary-200 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="22"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white shadow-sm border border-stone-100 flex items-center justify-center text-stone-400 hover:text-blue-600 hover:border-blue-200 transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="22"></iconify-icon>
</a>
</div>
<div className="flex gap-6 text-xs text-stone-500 font-medium">
<a className="hover:text-primary-600 transition-colors" href="#">GDPR</a>
<a className="hover:text-primary-600 transition-colors" href="#">Obchodní podmínky</a>
</div>
</div>
</footer>



    </>
  );
}
