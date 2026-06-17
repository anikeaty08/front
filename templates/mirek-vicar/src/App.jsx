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

        function openModal(src) {
            const modal = document.getElementById('imageModal');
            const img = document.getElementById('modalImage');
            
            img.src = src;
            modal.classList.remove('hidden');
            document.body.classList.add('modal-open');
            
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                img.classList.remove('scale-95');
                img.classList.add('scale-100');
            }, 10);
        }

        function closeModal() {
            const modal = document.getElementById('imageModal');
            const img = document.getElementById('modalImage');
            
            modal.classList.add('opacity-0');
            img.classList.remove('scale-100');
            img.classList.add('scale-95');
            document.body.classList.remove('modal-open');

            setTimeout(() => {
                modal.classList.add('hidden');
                img.src = '';
            }, 300);
        }

        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                closeModal();
            }
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
      

<div className="fixed inset-0 z-[100] bg-slate-900/95 hidden flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300 opacity-0" id="imageModal" onclick="closeModal()">
<div className="relative max-w-5xl w-full flex justify-center">
<button className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" onclick="closeModal()">
<i className="w-8 h-8" data-lucide="x" strokeWidth="1.5"></i>
</button>
<img alt="Detail" className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl scale-95 transition-transform duration-300" id="modalImage" src=""/>
</div>
</div>

<header className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/80">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="bg-slate-900 text-white p-1.5 rounded-lg">
<i className="w-5 h-5" data-lucide="hammer" strokeWidth="1.5"></i>
</div>
<span className="uppercase text-lg font-semibold text-slate-900 tracking-tight">MIREK VIČAR</span>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors tracking-tight" href="tel:+420797628990">+420 797 628 990</a>
<a className="bg-slate-900 text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-slate-800 transition-all shadow-sm hover:shadow-md" href="tel:+420797628990">
                    Zavolat
                </a>
</div>
</div>
</header>
<main className="overflow-x-hidden pt-24 pb-12">

<section className="md:py-20 lg:py-24 max-w-6xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col items-start text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
</span>
<span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">Dostupný pro Velatice a okolí</span>
</div>
<h1 className="leading-[1.1] text-5xl font-semibold text-slate-900 tracking-tight mb-6 md:text-6xl lg:text-6xl">
                        Hodinový manžel <br/> <span className="text-blue-700">Mirek Vičar</span>
</h1>
<p className="leading-relaxed text-lg font-light text-slate-500 max-w-lg mb-10">
                        Rychlé a kvalitní práce v domě, bytě i na zahradě. Ať už potřebuješ přivrtat poličku nebo zrekonstruovat koupelnu, jsem tu pro tebe.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/10" href="tel:+420797628990">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
                            Zavolat
                        </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition-all" href="mailto:Vicarmirek@seznam.cz">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
                            Napsat e-mail
                        </a>
</div>
<div className="grid grid-cols-2 gap-y-6 gap-x-8 w-full border-t border-slate-100 pt-8">
<div className="flex items-center gap-3">
<i className="text-blue-600 w-5 h-5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base font-medium text-slate-900">Široký rozsah prací</span>
</div>
<div className="flex items-center gap-3">
<i className="text-blue-600 w-5 h-5" data-lucide="smile" strokeWidth="1.5"></i>
<span className="text-base font-medium text-slate-900">Férová domluva</span>
</div>
<div className="flex items-center gap-3">
<i className="text-blue-600 w-5 h-5" data-lucide="user" strokeWidth="1.5"></i>
<span className="text-base font-medium text-slate-900">Osobní přístup</span>
</div>
<div className="flex items-center gap-3">
<i className="text-blue-600 w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="text-base font-medium text-slate-900">Lokální řemeslník</span>
</div>
</div>
</div>

<div className="relative hidden md:block">
<div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-slate-100 rounded-[2rem] -z-10 transform rotate-2"></div>
<img alt="Hodinový manžel Mirek" className="aspect-[4/5] filter contrast-[1.05] w-full object-cover border-slate-100 border rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1646119908749-9579a8e68bee?w=1600&amp;q=80"/>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div className="">
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-4">S čím ti pomůžu?</h2>
<p className="text-slate-500 max-w-xl text-lg">Zvládnu vše od drobných oprav až po větší rekonstrukce. Pokud zde nenajdeš to, co hledáš, stačí zavolat.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Drobné opravy</h3>
<p className="text-base text-slate-500 leading-relaxed">Výměna žárovek, vypínačů, vrtání do zdi, montáž garnýží a poliček.</p>
</div>
<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="droplet" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Instalatérské práce</h3>
<p className="text-base text-slate-500 leading-relaxed">Voda, odpady, výměna baterií, dřezů, sifonů a opravy těsnění.</p>
</div>
<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="hammer" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Zednické práce</h3>
<p className="text-base text-slate-500 leading-relaxed">Obklady, dlažba, omítky, fasády i menší bourací práce.</p>
</div>
<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="door-closed" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Podlahy a dveře</h3>
<p className="text-base text-slate-500 leading-relaxed">Pokládka plovoucích podlah, seřízení oken a dveří, výměna zámků.</p>
</div>
<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="armchair" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Montáže nábytku</h3>
<p className="text-base text-slate-500 leading-relaxed">Skládání nábytku (IKEA atd.), stavba pergol a zahradních přístřešků.</p>
</div>
<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="flower-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Zahradní práce</h3>
<p className="text-base text-slate-500 leading-relaxed">Sekání trávy, stříhání keřů, údržba a sezónní úklid zahrady.</p>
</div>
<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="shovel" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Výkopové práce</h3>
<p className="text-base text-slate-500 leading-relaxed">Práce s menším bagrem, úpravy terénu, výkopy pro přípojky.</p>
</div>
<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="package" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Stěhování a odvoz</h3>
<p className="text-base text-slate-500 leading-relaxed">Doprava materiálu, odvoz starého nábytku a odpadu, vyklízení.</p>
</div>
<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Domácnost</h3>
<p className="text-base text-slate-500 leading-relaxed">Úklid, vaření, příprava rautů, odtah vozidel a další pomoc.</p>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-slate-500 text-base">
                    Nenašel jsi, co hledáš? <a className="text-blue-700 font-semibold hover:underline underline-offset-4" href="tel:+420797628990">Zavolej</a> a domluvíme se. Zvládnu toho víc, než se sem vejde.
                </p>
</div>
</section>

<section className="bg-slate-900 text-white border-y border-slate-800">
<div className="max-w-6xl mx-auto px-6 py-24">
<h2 className="text-4xl font-semibold tracking-tight text-center mb-16">Jak to funguje?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-800 -z-0"></div>
<div className="flex flex-col items-center text-center relative z-10">
<div className="w-16 h-16 rounded-2xl bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center text-white mb-6 font-bold text-xl">1</div>
<h3 className="text-xl font-medium text-white mb-3">Zavoláš nebo napíšeš</h3>
<p className="text-base text-slate-400 max-w-xs">Řekneš mi, co potřebuješ opravit nebo s čím pomoct.</p>
</div>
<div className="flex flex-col items-center text-center relative z-10">
<div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white mb-6 font-bold text-xl">2</div>
<h3 className="text-xl font-medium text-white mb-3">Domluvíme termín</h3>
<p className="text-base text-slate-400 max-w-xs">Najdeme čas, který ti nejlépe vyhovuje.</p>
</div>
<div className="flex flex-col items-center text-center relative z-10">
<div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white mb-6 font-bold text-xl">3</div>
<h3 className="text-xl font-medium text-white mb-3">Hotovo</h3>
<p className="text-base text-slate-400 max-w-xs">Přijedu, kvalitně opravím a uklidím po sobě.</p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24">
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-12">Ukázky mé práce</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-2xl bg-slate-100 aspect-square shadow-sm cursor-zoom-in border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300" onclick="openModal(this.querySelector('img').src)">
<img alt="Realizace kuchyně" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e151a26a-09e2-402e-9c64-9b4ba3a0e94a_800w.jpg"/>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-slate-100 aspect-square shadow-sm cursor-zoom-in border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300" onclick="openModal(this.querySelector('img').src)">
<img alt="Montážní práce" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d8c02402-51c6-4a23-9b8c-f9606451acd4_800w.jpg"/>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-slate-100 aspect-square shadow-sm cursor-zoom-in border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300" onclick="openModal(this.querySelector('img').src)">
<img alt="Práce a nářadí" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b91f792b-a18a-4ac9-8899-4d47d3129029_800w.jpg"/>
</div>
</div>
</section>

<section className="border-y bg-white border-slate-200">
<div className="max-w-6xl mx-auto px-6 py-24">
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-16 text-center">Co říkají zákazníci</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<div className="flex text-yellow-400 gap-0.5 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-base text-slate-600 leading-relaxed mb-6 italic">"Rychlá domluva, práce odvedená precizně a bez zbytečných řečí. Určitě doporučuji."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">JK</div>
<span className="text-sm font-semibold text-slate-900">Jan K.</span>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<div className="flex text-yellow-400 gap-0.5 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-base text-slate-600 leading-relaxed mb-6 italic">"Spolehlivý, šikovný a ochotný. Pomohl s montáží i drobnými opravami v bytě."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">PM</div>
<span className="text-sm font-semibold text-slate-900">Petra M.</span>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<div className="flex text-yellow-400 gap-0.5 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-base text-slate-600 leading-relaxed mb-6 italic">"Vše proběhlo podle domluvy, dobrá cena a kvalitní práce. Využiji znovu."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">MS</div>
<span className="text-sm font-semibold text-slate-900">Martin S.</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 lg:p-16 text-white overflow-hidden relative shadow-2xl">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Proč zavolat právě mě?</h2>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="text-blue-400 w-5 h-5 mt-0.5" data-lucide="check-circle" strokeWidth="2"></i>
<span className="text-slate-200 text-base">Jeden kontakt na vše, široký rozsah prací</span>
</li>
<li className="flex items-start gap-3">
<i className="text-blue-400 w-5 h-5 mt-0.5" data-lucide="check-circle" strokeWidth="2"></i>
<span className="text-slate-200 text-base">Férová domluva a osobní přístup</span>
</li>
<li className="flex items-start gap-3">
<i className="text-blue-400 w-5 h-5 mt-0.5" data-lucide="check-circle" strokeWidth="2"></i>
<span className="text-slate-200 text-base">Dlouholeté zkušenosti v oboru</span>
</li>
<li className="flex items-start gap-3">
<i className="text-blue-400 w-5 h-5 mt-0.5" data-lucide="check-circle" strokeWidth="2"></i>
<span className="text-slate-200 text-base">Práce uvnitř i venku</span>
</li>
</ul>
</div>

<div className="flex flex-col gap-6 items-start lg:items-end">
<div className="text-left lg:text-right">
<p className="text-blue-300 font-medium text-sm mb-2">Potřebuješ něco opravit?</p>
<h3 className="text-2xl font-medium mb-6">Zavolej nebo napiš a domluvíme se.</h3>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
<a className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/30" href="tel:+420797628990">
                                Zavolat
                            </a>
<a className="flex items-center justify-center gap-2 border border-slate-600 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-slate-700 transition-all" href="mailto:Vicarmirek@seznam.cz">
                                Napsat e-mail
                            </a>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 pb-20 pt-8">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 border-t border-slate-200 pt-12">
<div className="flex items-start gap-4">
<div className="bg-white p-3 rounded-lg border border-slate-200 shrink-0">
<i className="w-6 h-6 text-slate-900" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div className="min-w-0">
<h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">Telefon</h4>
<a className="text-xl text-slate-900 font-semibold hover:text-blue-700 transition-colors block" href="tel:+420797628990">+420 797 628 990</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-white p-3 rounded-lg border border-slate-200 shrink-0">
<i className="w-6 h-6 text-slate-900" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div className="min-w-0">
<h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">E-mail</h4>
<a className="hover:text-blue-700 transition-colors text-xl font-semibold text-slate-900 break-words block" href="mailto:vicarmirek@seznam.cz">Vicarmirek@seznam.cz</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-white p-3 rounded-lg border border-slate-200 shrink-0">
<i className="w-6 h-6 text-slate-900" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div className="min-w-0">
<h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">Adresa</h4>
<p className="text-xl text-slate-900 font-medium">Velatice 133, 664 05</p>
</div>
</div>
</div>
</section>
</main>

<footer className="relative z-10 border-t border-slate-200 bg-white">
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-slate-400" data-lucide="hammer" strokeWidth="1.5"></i>
<span className="text-sm font-semibold text-slate-900">Hodinový manžel Mirek Vičar</span>
</div>
<div className="flex items-center gap-4 text-xs text-slate-500">
<span className="">© 2026 Všechna práva vyhrazena</span>
</div>
</div>
</footer>


    </>
  );
}
