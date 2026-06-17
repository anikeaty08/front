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
      

<nav className="fixed w-full z-50 glass-nav border-b border-stone-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="md:hidden text-stone-600 hover:text-stone-900 transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="text-xl md:text-2xl font-medium tracking-tighter uppercase text-[#2D3628] z-50 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:left-auto" href="#">
                Korene
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
<a className="hover:text-[#2D3628] transition-colors relative group" href="#produkty">
                    Produkty
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#2D3628] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-[#2D3628] transition-colors relative group" href="#o-nas">
                    O nás
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#2D3628] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-[#2D3628] transition-colors relative group" href="#ritual">
                    Náš rituál
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#2D3628] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-[#2D3628] transition-colors relative group" href="#kontakt">
                    Kontakt
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#2D3628] transition-all duration-300 group-hover:w-full"></span>
</a>
</div>

<div className="flex items-center gap-4">
<button className="text-stone-600 hover:text-[#2D3628] transition-colors">
<iconify-icon height="22" icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="text-stone-600 hover:text-[#2D3628] transition-colors relative">
<iconify-icon height="22" icon="solar:bag-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-800 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-700"></span>
</span>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen pt-24 pb-12 flex items-center overflow-hidden">
<div className="absolute inset-0 z-0 opacity-30 pointer-events-none">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E3E8DE] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#EBE9E1] rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4"></div>
</div>
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
<div className="order-2 md:order-1 flex flex-col items-start space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2D3628]/20 bg-white/40 backdrop-blur-sm">
<iconify-icon className="text-green-700" icon="solar:leaf-linear" width="14"></iconify-icon>
<span className="text-xs font-medium tracking-wide uppercase text-[#2D3628]">Novinky z prírody</span>
</div>
<h1 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.1] text-[#2D3628]">
                    Sila slovenských <br/>
<span className="font-normal italic">lúk v každej</span> <br/>
                    kvapke.
                </h1>
<p className="text-lg md:text-xl text-stone-600 max-w-md font-light leading-relaxed">
                    Čistá prírodná kozmetika z našich bylín. Objavte harmóniu medzi tradíciou a modernou vedou pre žiarivú pleť.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="group inline-flex items-center justify-center gap-2 bg-[#2D3628] text-[#F9F8F4] px-8 py-4 rounded-full text-sm font-medium transition-all hover:bg-[#1f251b] hover:shadow-lg hover:shadow-green-900/10" href="#">
                        Nakupovať kolekciu
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-[#2D3628] border border-[#2D3628]/20 hover:bg-[#2D3628]/5 transition-all" href="#">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                        Náš príbeh
                    </a>
</div>
<div className="pt-8 flex items-center gap-8 border-t border-stone-200 w-full max-w-md">
<div>
<p className="text-2xl font-light">100%</p>
<p className="text-xs text-stone-500 uppercase tracking-wide">Prírodné</p>
</div>
<div>
<p className="text-2xl font-light">Vegan</p>
<p className="text-xs text-stone-500 uppercase tracking-wide">Certifikované</p>
</div>
<div>
<p className="text-2xl font-light">SK</p>
<p className="text-xs text-stone-500 uppercase tracking-wide">Pôvod</p>
</div>
</div>
</div>
<div className="order-1 md:order-2 relative h-[500px] md:h-[700px] w-full">

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-full h-full max-w-md mx-auto">
<img alt="Prírodná kozmetika Korene" className="w-full h-full object-cover rounded-[2rem] shadow-2xl shadow-[#2D3628]/10 relative z-10" src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-12 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl z-20 max-w-[200px]">
<div className="flex items-start justify-between mb-2">
<span className="text-xs font-semibold uppercase tracking-wider text-green-800 bg-green-100 px-2 py-0.5 rounded-full">Bestseller</span>
<iconify-icon className="text-yellow-600" icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-[#2D3628] mb-1">Nočné Sérum</p>
<p className="text-xs text-stone-500">Regenerácia počas spánku s výťažkom z levandule.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full bg-[#EBECE8] py-8 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-center text-stone-400 grayscale opacity-70 gap-8 md:gap-0 overflow-x-auto no-scrollbar">

<span className="text-lg font-semibold tracking-tighter shrink-0">VOGUE</span>
<span className="text-lg font-semibold tracking-tighter shrink-0">ELLE</span>
<span className="text-lg font-semibold tracking-tighter shrink-0">HARPER'S BAZAAR</span>
<span className="text-lg font-semibold tracking-tighter shrink-0">MARIE CLAIRE</span>
<span className="text-lg font-semibold tracking-tighter shrink-0">FORBES</span>
</div>
</div>
</div>

<section className="py-24 bg-white relative" id="o-nas">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#2D3628] mb-4">Esencia čistej krásy</h2>
<p className="text-stone-600 font-light">Vierime, že príroda má odpoveď na všetko. Naše produkty sú mostom medzi divokou prírodou Slovenska a vašou každodennou rutinou.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group p-8 rounded-3xl bg-[#F9F8F4] hover:bg-[#F2F0E9] transition-all duration-500">
<div className="h-12 w-12 rounded-xl bg-[#2D3628] text-[#F9F8F4] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#2D3628] mb-3">Organické zložky</h3>
<p className="text-sm text-stone-600 leading-relaxed">
                        Používame výhradne certifikované organické ingrediencie pestované bez pesticídov na slovenských lúkach.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-[#F9F8F4] hover:bg-[#F2F0E9] transition-all duration-500">
<div className="h-12 w-12 rounded-xl bg-[#2D3628] text-[#F9F8F4] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:heart-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#2D3628] mb-3">Ručná výroba</h3>
<p className="text-sm text-stone-600 leading-relaxed">
                        Každý produkt je miešaný a balený ručne v malých sériách, aby sme zachovali maximálnu čerstvosť a účinnosť.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-[#F9F8F4] hover:bg-[#F2F0E9] transition-all duration-500">
<div className="h-12 w-12 rounded-xl bg-[#2D3628] text-[#F9F8F4] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#2D3628] mb-3">Udržateľnosť</h3>
<p className="text-sm text-stone-600 leading-relaxed">
                        Od recyklovateľných obalov po minimalizáciu odpadu. Naša láska k prírode sa prejavuje v každom kroku výroby.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F9F8F4]" id="produkty">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#2D3628] mb-2">Vybrané produkty</h2>
<p className="text-stone-500">Objavte našu kolekciu pre každý typ pleti.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-[#2D3628] hover:opacity-70 transition-opacity" href="#">
                    Všetky produkty
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-[#EBECE8] rounded-2xl overflow-hidden mb-4">
<img alt="Produkt" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md text-[#2D3628]">Novinka</span>
</div>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-[#2D3628] rounded-full flex items-center justify-center text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon icon="solar:cart-plus-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-[#2D3628]">Lúčny Vánok</h3>
<p className="text-xs text-stone-500 mt-1">Hydratačný krém</p>
</div>
<p className="text-sm font-medium text-[#2D3628]">32.00 €</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-[#EBECE8] rounded-2xl overflow-hidden mb-4">
<img alt="Produkt" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-[#2D3628] rounded-full flex items-center justify-center text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon icon="solar:cart-plus-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-[#2D3628]">Lesná Hmla</h3>
<p className="text-xs text-stone-500 mt-1">Tonikum na tvár</p>
</div>
<p className="text-sm font-medium text-[#2D3628]">24.50 €</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-[#EBECE8] rounded-2xl overflow-hidden mb-4">
<img alt="Produkt" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-[#2D3628] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">Vypredané</span>
</div>
</div>
<div className="flex justify-between items-start opacity-60">
<div>
<h3 className="text-base font-medium text-[#2D3628]">Zlatý Elixír</h3>
<p className="text-xs text-stone-500 mt-1">Olejové sérum</p>
</div>
<p className="text-sm font-medium text-[#2D3628]">45.00 €</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-[#EBECE8] rounded-2xl overflow-hidden mb-4">
<img alt="Produkt" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-[#2D3628] rounded-full flex items-center justify-center text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon icon="solar:cart-plus-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-[#2D3628]">Ranná Rosa</h3>
<p className="text-xs text-stone-500 mt-1">Čistiaci gél</p>
</div>
<p className="text-sm font-medium text-[#2D3628]">18.90 €</p>
</div>
</div>
</div>
<div className="mt-8 flex justify-center md:hidden">
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#2D3628] border-b border-[#2D3628] pb-1" href="#">
                    Všetky produkty
                </a>
</div>
</div>
</section>

<section className="py-24 bg-[#2D3628] text-[#F9F8F4] overflow-hidden" id="ritual">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-10 -left-10 w-32 h-32 border border-white/10 rounded-full"></div>
<img alt="Rituál krásy" className="w-full h-[600px] object-cover rounded-[2rem] opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-8 left-8 right-8 bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/10">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-full bg-[#F9F8F4]/10 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:play-linear" width="24"></iconify-icon>
</div>
<div>
<p className="font-medium">Večerný rituál s Korene</p>
<p className="text-xs text-white/60">Video návod • 2:45 min</p>
</div>
</div>
</div>
</div>
<div className="space-y-8">
<span className="text-[#A4B09A] uppercase tracking-widest text-xs font-semibold">Náš prístup</span>
<h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
                        Viac než kozmetika.<br/>
                        Je to moment pre vás.
                    </h2>
<p className="text-[#F9F8F4]/70 text-lg font-light leading-relaxed">
                        V dnešnom uponáhľanom svete je starostlivosť o pleť príležitosťou spomaliť. Naše produkty sú navrhnuté tak, aby premenili vašu rutinu na zmyslový zážitok.
                    </p>
<div className="space-y-6 pt-4">
<div className="flex gap-4 items-start">
<div className="mt-1 h-2 w-2 rounded-full bg-[#A4B09A] shrink-0"></div>
<div>
<h4 className="font-medium text-lg">Dýchajte</h4>
<p className="text-sm text-[#F9F8F4]/60 mt-1">Jemné vône esenciálnych olejov upokojujú myseľ.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 h-2 w-2 rounded-full bg-[#A4B09A] shrink-0"></div>
<div>
<h4 className="font-medium text-lg">Cíťte</h4>
<p className="text-sm text-[#F9F8F4]/60 mt-1">Bohaté textúry, ktoré sa vpijú do pokožky bez zaťaženia.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 h-2 w-2 rounded-full bg-[#A4B09A] shrink-0"></div>
<div>
<h4 className="font-medium text-lg">Žiarte</h4>
<p className="text-sm text-[#F9F8F4]/60 mt-1">Dlhodobé výsledky viditeľné na prvý pohľad.</p>
</div>
</div>
</div>
<div className="pt-8">
<a className="inline-block border border-[#F9F8F4]/30 px-8 py-3 rounded-full text-sm hover:bg-[#F9F8F4] hover:text-[#2D3628] transition-all" href="#">
                            Objavte rituály
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto bg-[#EBECE8] rounded-[2.5rem] p-12 text-center relative overflow-hidden">
<div className="absolute top-0 right-0 p-12 opacity-5">
<iconify-icon height="200" icon="solar:plant-linear" width="200"></iconify-icon>
</div>
<h2 className="text-3xl font-light tracking-tight text-[#2D3628] mb-4">Staňte sa súčasťou rodiny KORENE</h2>
<p className="text-stone-600 mb-8 max-w-md mx-auto">Získajte 10% zľavu na prvý nákup a prístup k exkluzívnym novinkám z nášho ateliéru.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 px-6 py-4 rounded-full bg-white border-0 focus:ring-2 focus:ring-[#2D3628]/20 outline-none text-sm placeholder:text-stone-400 text-[#2D3628]" placeholder="Váš email" type="email"/>
<button className="px-8 py-4 rounded-full bg-[#2D3628] text-white text-sm font-medium hover:bg-[#1f251b] transition-colors" type="submit">
                    Odoberať
                </button>
</form>
<p className="text-[10px] text-stone-400 mt-4">Kliknutím súhlasíte so spracovaním osobných údajov.</p>
</div>
</section>

<footer className="bg-white border-t border-stone-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="text-xl font-medium tracking-tighter uppercase text-[#2D3628] block mb-6" href="#">
                        Korene
                    </a>
<p className="text-sm text-stone-500 mb-6">
                        Prírodná kozmetika vyrábaná s láskou na Slovensku.
                    </p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-[#2D3628] transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-stone-400 hover:text-[#2D3628] transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-stone-400 hover:text-[#2D3628] transition-colors" href="#"><iconify-icon icon="solar:tiktok-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-medium text-[#2D3628] mb-4 text-sm">Nakupovanie</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-[#2D3628] transition-colors" href="#">Všetky produkty</a></li>
<li><a className="hover:text-[#2D3628] transition-colors" href="#">Starostlivosť o pleť</a></li>
<li><a className="hover:text-[#2D3628] transition-colors" href="#">Telo a kúpeľ</a></li>
<li><a className="hover:text-[#2D3628] transition-colors" href="#">Darčekové sady</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-[#2D3628] mb-4 text-sm">O značke</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-[#2D3628] transition-colors" href="#">Náš príbeh</a></li>
<li><a className="hover:text-[#2D3628] transition-colors" href="#">Udržateľnosť</a></li>
<li><a className="hover:text-[#2D3628] transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-[#2D3628] transition-colors" href="#">Kariéra</a></li>
</ul>
</div>
<div id="kontakt">
<h4 className="font-medium text-[#2D3628] mb-4 text-sm">Kontakt</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li>info@korene.sk</li>
<li>+421 900 000 000</li>
<li>Bratislava, Slovensko</li>
</ul>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
<p>© 2023 Korene Cosmetics. Všetky práva vyhradené.</p>
<div className="flex gap-6">
<a className="hover:text-[#2D3628]" href="#">Ochrana súkromia</a>
<a className="hover:text-[#2D3628]" href="#">Obchodné podmienky</a>
<a className="hover:text-[#2D3628]" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
