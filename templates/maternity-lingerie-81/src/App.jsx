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
      

<div className="fixed bottom-0 left-0 w-full bg-white border-t border-stone-200 p-4 shadow-lg z-50 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="text-xs text-stone-500">
            Wij gebruiken cookies om uw ervaring te verbeteren. Door verder te gaan, gaat u akkoord met ons <a className="underline hover:text-stone-800" href="#">privacybeleid</a>.
        </div>
<div className="flex gap-3">
<button className="text-xs font-medium text-stone-500 hover:text-stone-800 px-4 py-2">Instellingen</button>
<button className="bg-stone-900 text-white text-xs font-medium px-6 py-2 rounded-full hover:bg-stone-800 transition">Accepteren</button>
</div>
</div>

<a className="fixed bottom-20 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center" href="#">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="28"></iconify-icon>
</a>

<div className="bg-stone-900 text-stone-200 text-xs py-2.5">
<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
<div className="flex items-center gap-4">
<a className="flex items-center gap-1.5 hover:text-white" href="tel:+3112345678">
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon>
<span>085 - 123 45 67</span>
</a>
<a className="flex items-center gap-1.5 hover:text-white" href="mailto:info@positielingerie.nl">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon>
<span>info@positielingerie.nl</span>
</a>
</div>
<div className="flex items-center gap-2">
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<span className="text-stone-400">9.2/10 via WebwinkelKeur</span>
</div>
</div>
</div>

<div className="border-b border-stone-200 bg-white">
<div className="container mx-auto px-4 py-2 flex justify-end">
<nav className="flex gap-6 text-xs font-medium text-stone-500 uppercase tracking-wide">
<a className="hover:text-rose-400 transition" href="#">Over ons</a>
<a className="hover:text-rose-400 transition" href="#">Maten</a>
<a className="hover:text-rose-400 transition" href="#">Blog</a>
<a className="hover:text-rose-400 transition" href="#">FAQ</a>
<a className="hover:text-rose-400 transition" href="#">Contact</a>
</nav>
</div>
</div>

<header className="bg-white/90 backdrop-blur-md sticky top-0 z-30 border-b border-stone-100">
<div className="container mx-auto px-4 py-4">
<div className="flex items-center justify-between gap-8">

<a className="flex flex-col leading-none group" href="#">
<span className="text-2xl font-semibold tracking-tighter text-stone-900 group-hover:text-rose-400 transition-colors">POSITIE</span>
<span className="text-sm font-light tracking-[0.2em] text-stone-400 uppercase">Lingerie</span>
</a>

<div className="hidden md:flex flex-1 max-w-lg relative group">
<input className="w-full bg-stone-50 border border-stone-200 rounded-full py-2.5 pl-5 pr-12 text-sm focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-200 transition-all text-stone-700 placeholder:text-stone-400" placeholder="Zoek naar bh's, badmode..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-stone-400 p-1.5 rounded-full hover:text-rose-400 transition">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>

<div className="absolute top-full left-0 w-full bg-white border border-stone-100 rounded-xl shadow-xl mt-2 p-4 hidden group-focus-within:block">
<p className="text-xs font-semibold text-stone-400 uppercase mb-2">Populair</p>
<ul className="text-sm space-y-2">
<li><a className="block hover:bg-stone-50 px-2 py-1 rounded text-stone-600" href="#">Voedingsbh zonder beugel</a></li>
<li><a className="block hover:bg-stone-50 px-2 py-1 rounded text-stone-600" href="#">Zwangerschapsbadpak zwart</a></li>
<li><a className="block hover:bg-stone-50 px-2 py-1 rounded text-stone-600" href="#">Meegroeibh Cake Maternity</a></li>
</ul>
</div>
</div>

<div className="flex items-center gap-4 lg:gap-6">
<a className="flex flex-col items-center gap-1 group" href="#">
<iconify-icon className="text-stone-600 group-hover:text-rose-400 transition" icon="solar:user-linear" width="24"></iconify-icon>
<span className="text-[10px] uppercase tracking-wide hidden lg:block group-hover:text-rose-400">Account</span>
</a>
<a className="flex flex-col items-center gap-1 group relative" href="#">
<div className="relative">
<iconify-icon className="text-stone-600 group-hover:text-rose-400 transition" icon="solar:bag-3-linear" width="24"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-rose-300 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">2</span>
</div>
<span className="text-[10px] uppercase tracking-wide hidden lg:block group-hover:text-rose-400">Winkelmand</span>
</a>
</div>
</div>

<nav className="hidden md:flex justify-center gap-8 mt-4 pt-2 border-t border-transparent">
<a className="text-sm font-medium text-stone-600 hover:text-rose-400 transition py-2 border-b-2 border-transparent hover:border-rose-200" href="#">Lingerie</a>
<a className="text-sm font-medium text-stone-600 hover:text-rose-400 transition py-2 border-b-2 border-transparent hover:border-rose-200" href="#">Badmode</a>
<a className="text-sm font-medium text-stone-600 hover:text-rose-400 transition py-2 border-b-2 border-transparent hover:border-rose-200" href="#">Nachtmode</a>
<a className="text-sm font-medium text-stone-600 hover:text-rose-400 transition py-2 border-b-2 border-transparent hover:border-rose-200" href="#">Zwangerschapsmode</a>
<a className="text-sm font-medium text-stone-600 hover:text-rose-400 transition py-2 border-b-2 border-transparent hover:border-rose-200" href="#">Accessoires</a>
<a className="text-sm font-medium text-stone-600 hover:text-rose-400 transition py-2 flex items-center gap-1" href="#">
                    Merken <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</a>
<a className="text-sm font-semibold text-rose-500 hover:text-rose-600 transition py-2 border-b-2 border-transparent hover:border-rose-300" href="#">SALE</a>
</nav>
</div>
</header>

<div className="md:hidden bg-white border-b border-stone-100 p-2 flex overflow-x-auto no-scrollbar gap-4 px-4 sticky top-[73px] z-20">
<a className="whitespace-nowrap text-sm font-medium text-stone-800" href="#">Lingerie</a>
<a className="whitespace-nowrap text-sm font-medium text-stone-800" href="#">Badmode</a>
<a className="whitespace-nowrap text-sm font-medium text-stone-800" href="#">Nachtmode</a>
<a className="whitespace-nowrap text-sm font-medium text-stone-800" href="#">Sale</a>
</div>

<div className="bg-stone-100 py-3 border-b border-stone-200">
<div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between gap-4 text-xs font-medium text-stone-500 uppercase tracking-wide">
<div className="flex items-center gap-2">
<iconify-icon className="text-rose-400" icon="solar:verified-check-linear" width="16"></iconify-icon>
<span>Deskundig advies</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-rose-400" icon="solar:box-minimalistic-linear" width="16"></iconify-icon>
<span>Snelle levering</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-rose-400" icon="solar:phone-linear" width="16"></iconify-icon>
<span>Snel bereikbaar per telefoon</span>
</div>
</div>
</div>

<section className="relative bg-[#f7f5f4] overflow-hidden">
<div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 space-y-6 text-center md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 shadow-sm text-xs font-medium text-rose-400 uppercase tracking-wider mb-2">
<span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>
                        Nieuwe Collectie 2024
                    </div>
<h1 className="text-4xl md:text-6xl font-semibold text-stone-900 tracking-tight leading-[1.1]">
                        Comfort &amp; Stijl <br/>
<span className="text-stone-500 font-light italic">tijdens elke fase.</span>
</h1>
<p className="text-stone-600 max-w-md mx-auto md:mx-0 text-lg leading-relaxed">
                        Ontdek onze exclusieve selectie zwangerschapslingerie die meegroeit met jouw lichaam, zonder in te leveren op elegantie.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
<a className="px-8 py-3.5 bg-stone-900 text-white rounded-lg font-medium hover:bg-stone-800 transition shadow-lg shadow-stone-900/10 w-full sm:w-auto text-center" href="#">
                            Shop Lingerie
                        </a>
<a className="px-8 py-3.5 bg-white text-stone-900 border border-stone-200 rounded-lg font-medium hover:bg-stone-50 transition w-full sm:w-auto text-center" href="#">
                            Bekijk Badmode
                        </a>
</div>
</div>
<div className="flex-1 relative">

<div className="relative w-full aspect-[4/5] md:aspect-square max-w-md mx-auto">
<div className="absolute inset-0 bg-stone-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform translate-x-4 translate-y-4"></div>
<img alt="Zwangerschapslingerie" className="w-full h-full object-cover rounded-[2rem] shadow-2xl relative z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute -bottom-6 -left-6 z-20 bg-white/90 backdrop-blur p-4 rounded-xl shadow-xl border border-white/50 max-w-[200px]">
<div className="flex items-center gap-3 mb-2">
<div className="bg-rose-100 p-2 rounded-full text-rose-500">
<iconify-icon icon="solar:heart-bold" width="18"></iconify-icon>
</div>
<span className="text-xs font-semibold text-stone-800">Klantfavoriet</span>
</div>
<p className="text-xs text-stone-500 leading-snug">"De zachtste voedingsbh die ik ooit heb gedragen."</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 bg-white border-b border-stone-100 overflow-hidden">
<p className="text-center text-xs text-stone-400 font-medium uppercase tracking-widest mb-8">Wij verkopen topmerken</p>
<div className="flex space-x-12 animate-scroll w-max px-4">

<span className="text-xl font-bold text-stone-300 uppercase tracking-tighter hover:text-stone-500 transition cursor-pointer">Cake Maternity</span>
<span className="text-xl font-bold text-stone-300 uppercase tracking-tighter hover:text-stone-500 transition cursor-pointer">Anita</span>
<span className="text-xl font-bold text-stone-300 uppercase tracking-tighter hover:text-stone-500 transition cursor-pointer">Noppies</span>
<span className="text-xl font-bold text-stone-300 uppercase tracking-tighter hover:text-stone-500 transition cursor-pointer">Mamalicious</span>
<span className="text-xl font-bold text-stone-300 uppercase tracking-tighter hover:text-stone-500 transition cursor-pointer">Cache Coeur</span>
<span className="text-xl font-bold text-stone-300 uppercase tracking-tighter hover:text-stone-500 transition cursor-pointer">Hotmilk</span>

<span className="text-xl font-bold text-stone-300 uppercase tracking-tighter hover:text-stone-500 transition cursor-pointer">Cake Maternity</span>
<span className="text-xl font-bold text-stone-300 uppercase tracking-tighter hover:text-stone-500 transition cursor-pointer">Anita</span>
<span className="text-xl font-bold text-stone-300 uppercase tracking-tighter hover:text-stone-500 transition cursor-pointer">Noppies</span>
</div>
</section>

<section className="py-16 bg-white">
<div className="container mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-semibold text-stone-900 tracking-tight mb-2">Nieuw Binnen</h2>
<p className="text-stone-500 text-sm">De laatste trends in zwangerschapsmode.</p>
</div>

<div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
<button className="px-5 py-2 rounded-full bg-stone-900 text-white text-sm font-medium whitespace-nowrap">Alles</button>
<button className="px-5 py-2 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 text-sm font-medium transition whitespace-nowrap">Lingerie</button>
<button className="px-5 py-2 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 text-sm font-medium transition whitespace-nowrap">Badmode</button>
<button className="px-5 py-2 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 text-sm font-medium transition whitespace-nowrap">Nachtmode</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group">
<div className="relative aspect-[3/4] bg-stone-100 rounded-xl overflow-hidden mb-4">
<span className="absolute top-3 left-3 bg-white text-stone-900 text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm z-10">Nieuw</span>
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur hover:bg-rose-400 hover:text-white p-3 rounded-full text-stone-800 shadow-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>
<div className="space-y-1">
<h3 className="font-medium text-stone-900 group-hover:text-rose-500 transition">Seamless Voedingsbh</h3>
<p className="text-stone-500 text-sm">€ 39,95</p>
<div className="flex gap-1 pt-1">
<span className="text-[10px] border border-stone-200 text-stone-500 px-1 rounded">S</span>
<span className="text-[10px] border border-stone-200 text-stone-500 px-1 rounded">M</span>
<span className="text-[10px] border border-stone-200 text-stone-500 px-1 rounded">L</span>
<span className="text-[10px] border border-stone-200 text-stone-500 px-1 rounded">XL</span>
</div>
</div>
</div>

<div className="group">
<div className="relative aspect-[3/4] bg-stone-100 rounded-xl overflow-hidden mb-4">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur hover:bg-rose-400 hover:text-white p-3 rounded-full text-stone-800 shadow-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>
<div className="space-y-1">
<h3 className="font-medium text-stone-900 group-hover:text-rose-500 transition">Kanten Slip Stone</h3>
<p className="text-stone-500 text-sm">€ 19,95</p>
<div className="flex gap-1 pt-1">
<span className="text-[10px] border border-stone-200 text-stone-500 px-1 rounded">M</span>
<span className="text-[10px] border border-stone-200 text-stone-500 px-1 rounded">L</span>
</div>
</div>
</div>

<div className="group">
<div className="relative aspect-[3/4] bg-stone-100 rounded-xl overflow-hidden mb-4">
<span className="absolute top-3 left-3 bg-rose-400 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm z-10">-20%</span>
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur hover:bg-rose-400 hover:text-white p-3 rounded-full text-stone-800 shadow-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>
<div className="space-y-1">
<h3 className="font-medium text-stone-900 group-hover:text-rose-500 transition">Zwangerschaps Badpak</h3>
<p className="text-stone-500 text-sm"><span className="line-through text-stone-300 mr-2">€ 59,95</span> € 47,95</p>
<div className="flex gap-1 pt-1">
<span className="text-[10px] border border-stone-200 text-stone-500 px-1 rounded">S</span>
<span className="text-[10px] border border-stone-200 text-stone-500 px-1 rounded">M</span>
<span className="text-[10px] border border-stone-200 text-stone-500 px-1 rounded">L</span>
</div>
</div>
</div>

<div className="group">
<div className="relative aspect-[3/4] bg-stone-100 rounded-xl overflow-hidden mb-4">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur hover:bg-rose-400 hover:text-white p-3 rounded-full text-stone-800 shadow-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>
<div className="space-y-1">
<h3 className="font-medium text-stone-900 group-hover:text-rose-500 transition">Luxe Nachthemd</h3>
<p className="text-stone-500 text-sm">€ 44,95</p>
<div className="flex gap-1 pt-1">
<span className="text-[10px] border border-stone-200 text-stone-500 px-1 rounded">XS</span>
<span className="text-[10px] border border-stone-200 text-stone-500 px-1 rounded">S</span>
<span className="text-[10px] border border-stone-200 text-stone-500 px-1 rounded">M</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-50">
<div className="container mx-auto px-4">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1">
<img alt="Fitting Advice" className="rounded-2xl shadow-xl w-full object-cover h-[500px]" src="https://images.unsplash.com/photo-1544126592-807ade215a0b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="order-1 md:order-2 space-y-6">
<h2 className="text-3xl font-semibold text-stone-900 tracking-tight">Vind de perfecte pasvorm</h2>
<p className="text-stone-600 leading-relaxed">
                        Je lichaam verandert constant tijdens je zwangerschap. Het vinden van de juiste maat lingerie is essentieel voor comfort en ondersteuning. Bij Positie Lingerie zijn we gespecialiseerd in het adviseren van vrouwen in elke fase.
                    </p>
<div className="space-y-4 pt-4">
<div className="flex items-start gap-3">
<div className="bg-rose-100 p-2 rounded-lg text-rose-500 shrink-0">
<iconify-icon icon="solar:tape-measure-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-stone-900">Maattabellen &amp; Advies</h4>
<p className="text-sm text-stone-500">Duidelijke instructies om zelf je maat op te meten.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="bg-stone-200 p-2 rounded-lg text-stone-600 shrink-0">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-stone-900">Persoonlijke Hulp</h4>
<p className="text-sm text-stone-500">Bel of mail ons voor advies op maat.</p>
</div>
</div>
</div>
<div className="pt-6">
<a className="text-stone-900 font-medium border-b border-stone-900 hover:text-rose-500 hover:border-rose-500 transition pb-1" href="#">Bekijk onze maattabellen</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="container mx-auto px-4 text-center mb-12">
<h2 className="text-3xl font-semibold text-stone-900 tracking-tight mb-3">Favorieten van moeders</h2>
<p className="text-stone-500">De meest gewaardeerde items van dit seizoen.</p>
</div>
<div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

<a className="group relative overflow-hidden rounded-xl bg-stone-100 aspect-[3/4]" href="#">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1512413914633-b5043f4041ea?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex items-end">
<span className="text-white text-sm font-medium">Voedingsbh's</span>
</div>
</a>

<a className="group relative overflow-hidden rounded-xl bg-stone-100 aspect-[3/4] lg:col-span-2 lg:aspect-auto" href="#">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex items-end">
<span className="text-white text-lg font-medium">Zwangerschapsbadmode</span>
</div>
</a>

<a className="group relative overflow-hidden rounded-xl bg-stone-100 aspect-[3/4]" href="#">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex items-end">
<span className="text-white text-sm font-medium">Nachtmode</span>
</div>
</a>

<a className="group relative overflow-hidden rounded-xl bg-stone-100 aspect-[3/4]" href="#">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex items-end">
<span className="text-white text-sm font-medium">Slips</span>
</div>
</a>

<a className="group relative overflow-hidden rounded-xl bg-stone-100 aspect-[3/4]" href="#">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex items-end">
<span className="text-white text-sm font-medium">Accessoires</span>
</div>
</a>
</div>
</section>

<section className="py-16 bg-rose-50/50">
<div className="container mx-auto px-4">
<h2 className="text-2xl font-semibold text-center text-stone-900 mb-10 tracking-tight">Wat klanten zeggen</h2>
<div className="flex overflow-x-auto gap-6 no-scrollbar pb-6 snap-x snap-mandatory">

<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-xl shadow-sm border border-stone-100 snap-center">
<div className="flex text-yellow-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 italic mb-4">"Super service! Ik twijfelde over de maat, maar werd telefonisch uitstekend geholpen. De bh zit als gegoten."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center text-stone-500 font-bold">L</div>
<div>
<p className="text-sm font-semibold text-stone-900">Lisa B.</p>
<p className="text-xs text-stone-400">Geverifieerde koper</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-xl shadow-sm border border-stone-100 snap-center">
<div className="flex text-yellow-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-stone-600 italic mb-4">"Mooie kwaliteit badpak, precies zoals op de foto's. Snelle levering ook, volgende dag al in huis."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center text-stone-500 font-bold">M</div>
<div>
<p className="text-sm font-semibold text-stone-900">Marieke de V.</p>
<p className="text-xs text-stone-400">Geverifieerde koper</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-xl shadow-sm border border-stone-100 snap-center">
<div className="flex text-yellow-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 italic mb-4">"Eindelijk lingerie die lekker zit tijdens mijn zwangerschap maar er toch sexy uit ziet. Aanrader!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center text-stone-500 font-bold">S</div>
<div>
<p className="text-sm font-semibold text-stone-900">Sophie K.</p>
<p className="text-xs text-stone-400">Geverifieerde koper</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">

<div>
<h3 className="text-xl font-semibold text-stone-900 mb-6 tracking-tight">Veelgestelde vragen</h3>
<div className="space-y-4">
<details className="group border border-stone-200 rounded-lg open:bg-stone-50 transition">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-stone-800">
<span>Kan ik retourneren?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-stone-500 text-sm px-4 pb-4 leading-relaxed">
                            Ja, je kunt binnen 14 dagen na ontvangst je bestelling retourneren, mits ongedragen en in originele verpakking.
                        </div>
</details>
<details className="group border border-stone-200 rounded-lg open:bg-stone-50 transition">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-stone-800">
<span>Hoe bepaal ik mijn maat?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-stone-500 text-sm px-4 pb-4 leading-relaxed">
                            Gebruik onze uitgebreide maattabel op de productpagina of neem contact op voor persoonlijk advies.
                        </div>
</details>
<details className="group border border-stone-200 rounded-lg open:bg-stone-50 transition">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-stone-800">
<span>Wat is de levertijd?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-stone-500 text-sm px-4 pb-4 leading-relaxed">
                            Bestellingen voor 16:00 uur worden dezelfde dag nog verzonden. Normaal gesproken heb je het de volgende dag in huis.
                        </div>
</details>
</div>
</div>

<div className="bg-stone-900 rounded-2xl p-8 text-white flex flex-col justify-center items-start shadow-xl">
<div className="bg-white/20 p-3 rounded-xl mb-4 text-white">
<iconify-icon icon="solar:calendar-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-2">Pasafspraak maken?</h3>
<p className="text-stone-300 mb-6 leading-relaxed">
                    Liever persoonlijk advies en passen in onze showroom? Plan eenvoudig een afspraak in met een van onze stylistes.
                </p>
<button className="bg-white text-stone-900 px-6 py-3 rounded-lg font-semibold hover:bg-rose-100 transition flex items-center gap-2">
                    Plan afspraak
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-16 bg-stone-50">
<div className="container mx-auto px-4">
<h2 className="text-2xl font-semibold text-stone-900 mb-10 tracking-tight">Tips &amp; Inspiratie</h2>
<div className="grid md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="rounded-xl overflow-hidden aspect-video mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex items-center gap-2 text-xs text-rose-500 font-medium uppercase mb-2">
<span>Advies</span>
<span className="w-1 h-1 bg-stone-300 rounded-full"></span>
<span>12 Okt 2023</span>
</div>
<h3 className="font-medium text-lg text-stone-900 group-hover:text-rose-500 transition mb-2">Wanneer koop je een voedingsbh?</h3>
<p className="text-stone-500 text-sm line-clamp-2">Het juiste moment om je eerste voedingsbh aan te schaffen is vaak een lastige keuze. Wij leggen uit wanneer.</p>
</article>

<article className="group cursor-pointer">
<div className="rounded-xl overflow-hidden aspect-video mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex items-center gap-2 text-xs text-rose-500 font-medium uppercase mb-2">
<span>Trends</span>
<span className="w-1 h-1 bg-stone-300 rounded-full"></span>
<span>05 Okt 2023</span>
</div>
<h3 className="font-medium text-lg text-stone-900 group-hover:text-rose-500 transition mb-2">Zwangerschapsmode trends najaar 2023</h3>
<p className="text-stone-500 text-sm line-clamp-2">Ontdek de nieuwste kleuren en stoffen voor het komende seizoen in onze collectie.</p>
</article>

<article className="group cursor-pointer">
<div className="rounded-xl overflow-hidden aspect-video mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="flex items-center gap-2 text-xs text-rose-500 font-medium uppercase mb-2">
<span>Health</span>
<span className="w-1 h-1 bg-stone-300 rounded-full"></span>
<span>28 Sep 2023</span>
</div>
<h3 className="font-medium text-lg text-stone-900 group-hover:text-rose-500 transition mb-2">Ondersteuning voor je rug</h3>
<p className="text-stone-500 text-sm line-clamp-2">Hoe de juiste lingerie kan helpen bij het verminderen van rugklachten tijdens de zwangerschap.</p>
</article>
</div>
</div>
</section>

<section className="py-16 bg-stone-200">
<div className="container mx-auto px-4 text-center max-w-2xl">
<h2 className="text-2xl font-semibold text-stone-900 mb-2 tracking-tight">Ontvang 5% korting</h2>
<p className="text-stone-600 mb-8">Schrijf je in voor onze nieuwsbrief en ontvang direct een kortingscode voor je eerste bestelling, plus exclusieve aanbiedingen.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 px-4 py-3 rounded-lg border-transparent focus:border-stone-400 focus:ring-0 text-stone-900 placeholder-stone-400 outline-none" placeholder="Jouw e-mailadres" type="email"/>
<button className="bg-stone-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-stone-800 transition" type="button">Inschrijven</button>
</form>
<p className="text-xs text-stone-500 mt-4">Door je in te schrijven ga je akkoord met onze privacyvoorwaarden.</p>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-16 pb-24 md:pb-8">
<div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="space-y-4">
<a className="flex flex-col leading-none" href="#">
<span className="text-lg font-semibold tracking-tighter text-stone-900">POSITIE</span>
<span className="text-[10px] font-light tracking-[0.2em] text-stone-400 uppercase">Lingerie</span>
</a>
<p className="text-sm text-stone-500 leading-relaxed">
                    De specialist in zwangerschapslingerie en badmode. Comfort en stijl voor iedere aanstaande moeder.
                </p>
<div className="flex gap-4 pt-2">
<a className="text-stone-400 hover:text-stone-900 transition" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-stone-400 hover:text-stone-900 transition" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-stone-400 hover:text-stone-900 transition" href="#"><iconify-icon icon="ic:baseline-tiktok" width="20"></iconify-icon></a>
<a className="text-stone-400 hover:text-stone-900 transition" href="#"><iconify-icon icon="solar:whatsapp-linear" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="font-semibold text-stone-900 mb-4 text-sm uppercase tracking-wide">Shoppen</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-rose-500 transition" href="#">Nieuw binnen</a></li>
<li><a className="hover:text-rose-500 transition" href="#">Lingerie</a></li>
<li><a className="hover:text-rose-500 transition" href="#">Badmode</a></li>
<li><a className="hover:text-rose-500 transition" href="#">Nachtmode</a></li>
<li><a className="hover:text-rose-500 transition" href="#">Sale</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-stone-900 mb-4 text-sm uppercase tracking-wide">Klantenservice</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-rose-500 transition" href="#">Contact</a></li>
<li><a className="hover:text-rose-500 transition" href="#">Veelgestelde vragen</a></li>
<li><a className="hover:text-rose-500 transition" href="#">Verzenden &amp; Retourneren</a></li>
<li><a className="hover:text-rose-500 transition" href="#">Maattabellen</a></li>
<li><a className="hover:text-rose-500 transition" href="#">Pasafspraak maken</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-stone-900 mb-4 text-sm uppercase tracking-wide">Contact</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>Hoofdstraat 1<br/>1234 AB Amsterdam</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-stone-900" href="tel:0851234567">085 - 123 45 67</a>
</li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-stone-900" href="mailto:info@positielingerie.nl">info@positielingerie.nl</a>
</li>
</ul>
</div>
</div>

<div className="container mx-auto px-4 border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-stone-400">
                © 2024 Positie Lingerie. Alle rechten voorbehouden.
            </div>
<div className="flex gap-4 text-xs text-stone-400">
<a className="hover:text-stone-600" href="#">Algemene Voorwaarden</a>
<a className="hover:text-stone-600" href="#">Privacybeleid</a>
<a className="hover:text-stone-600" href="#">Cookiebeleid</a>
</div>
<div className="flex gap-3 text-stone-300">
<iconify-icon icon="logos:ideal" width="24"></iconify-icon>
<iconify-icon icon="logos:mastercard" width="24"></iconify-icon>
<iconify-icon icon="logos:visa" width="24"></iconify-icon>
<iconify-icon icon="logos:paypal" width="24"></iconify-icon>
<iconify-icon className="text-stone-400" icon="solar:card-linear" width="24"></iconify-icon>
</div>
</div>
</footer>

    </>
  );
}
