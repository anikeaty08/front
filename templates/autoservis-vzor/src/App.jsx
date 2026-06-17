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
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 font-semibold tracking-tight text-lg text-stone-900">
                [Název Autoservisu]
            </div>
<a className="flex items-center gap-2 text-sm font-medium text-stone-900 bg-white border border-stone-200 hover:bg-stone-100 transition-colors px-4 py-2 rounded-lg shadow-sm" href="tel:+420123456789">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span className="hidden sm:inline">+420 123 456 789</span>
<span className="sm:hidden">Zavolat</span>
</a>
</div>
</nav>

<section className="max-w-5xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="flex flex-col gap-6 items-start">
<h1 className="md:text-5xl lg:text-6xl leading-tight text-4xl font-semibold text-stone-900 tracking-tight">Spolehlivý autoservis</h1>
<p className="text-lg text-stone-600 leading-relaxed max-w-md">
                    Autoservis pro osobní i dodávková vozidla. Rychlé opravy, poctivý přístup a dlouholeté zkušenosti.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
<a className="bg-stone-900 text-white px-6 py-3 rounded-lg font-medium text-base hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 shadow-md" href="tel:+420123456789">
<iconify-icon icon="solar:phone-bold" width="20"></iconify-icon>
                        Zavolat ihned
                    </a>
</div>
<div className="flex items-center gap-2 mt-4 text-sm font-medium text-stone-500">
<iconify-icon icon="solar:clock-circle-linear" width="18"></iconify-icon>
                    Otevřeno dnes do 17:00
                </div>
</div>
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-stone-200 border border-stone-200 shadow-sm">
<img alt="Hero image placeholder" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white border-y border-stone-200">
<div className="max-w-5xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 mb-10">
                Naše služby
            </h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 rounded-xl border border-stone-100 bg-stone-50 hover:bg-stone-100/50 transition-colors">
<iconify-icon className="text-stone-700 mb-4" icon="solar:laptop-minimalistic-linear" width="28"></iconify-icon>
<h3 className="text-base font-semibold text-stone-900 mb-2 tracking-tight">Diagnostika vozidla</h3>
<p className="text-sm text-stone-600 leading-relaxed">Rychlé a přesné zjištění závad pomocí moderních diagnostických přístrojů.</p>
</div>
<div className="p-6 rounded-xl border border-stone-100 bg-stone-50 hover:bg-stone-100/50 transition-colors">
<iconify-icon className="text-stone-700 mb-4" icon="solar:settings-minimalistic-linear" width="28"></iconify-icon>
<h3 className="text-base font-semibold text-stone-900 mb-2 tracking-tight">Servis a opravy</h3>
<p className="text-sm text-stone-600 leading-relaxed">Komplexní mechanické opravy motorů, převodovek a dalších částí vozu.</p>
</div>
<div className="p-6 rounded-xl border border-stone-100 bg-stone-50 hover:bg-stone-100/50 transition-colors">
<iconify-icon className="text-stone-700 mb-4" icon="solar:filter-linear" width="28"></iconify-icon>
<h3 className="text-base font-semibold text-stone-900 mb-2 tracking-tight">Výměna oleje a filtrů</h3>
<p className="text-sm text-stone-600 leading-relaxed">Pravidelná údržba pro dlouhou životnost a bezproblémový chod vašeho motoru.</p>
</div>
<div className="p-6 rounded-xl border border-stone-100 bg-stone-50 hover:bg-stone-100/50 transition-colors">
<iconify-icon className="text-stone-700 mb-4" icon="solar:wheel-linear" width="28"></iconify-icon>
<h3 className="text-base font-semibold text-stone-900 mb-2 tracking-tight">Brzdy a podvozek</h3>
<p className="text-sm text-stone-600 leading-relaxed">Kontrola a výměna brzdových destiček, kotoučů, tlumičů a ramen řízení.</p>
</div>
<div className="p-6 rounded-xl border border-stone-100 bg-stone-50 hover:bg-stone-100/50 transition-colors">
<iconify-icon className="text-stone-700 mb-4" icon="solar:clipboard-check-linear" width="28"></iconify-icon>
<h3 className="text-base font-semibold text-stone-900 mb-2 tracking-tight">Příprava na STK</h3>
<p className="text-sm text-stone-600 leading-relaxed">Kompletní prohlídka, zjištění a odstranění závad před technickou kontrolou.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-5xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 mb-10 text-center">
            Proč si vybrat nás
        </h2>
<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 rounded-full bg-stone-100 text-stone-800 flex items-center justify-center">
<iconify-icon icon="solar:history-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-stone-900">Dlouholetá praxe</h3>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 rounded-full bg-stone-100 text-stone-800 flex items-center justify-center">
<iconify-icon icon="solar:hand-shake-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-stone-900">Férové jednání</h3>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 rounded-full bg-stone-100 text-stone-800 flex items-center justify-center">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-stone-900">Rychlé termíny</h3>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 rounded-full bg-stone-100 text-stone-800 flex items-center justify-center">
<iconify-icon icon="solar:cpu-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-stone-900">Moderní vybavení</h3>
</div>
</div>
</section>

<section className="py-20 px-6 bg-stone-900 text-white">
<div className="max-w-5xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10">
                Co o nás říkají zákazníci
            </h2>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-stone-800/50 border border-stone-700 p-6 rounded-xl">
<div className="flex items-center gap-1 text-stone-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-base text-stone-300 italic mb-4">
                        „Skvělý a rychlý přístup. Auto opraveno za zlomek času oproti autorizovanému servisu. Určitě se vrátím.“
                    </p>
<p className="text-sm font-medium text-stone-400">— Jan Novák</p>
</div>
<div className="bg-stone-800/50 border border-stone-700 p-6 rounded-xl">
<div className="flex items-center gap-1 text-stone-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-base text-stone-300 italic mb-4">
                        „Férové ceny a skvělá domluva. Pan mechanik vše vysvětlil a ukázal. Vřele doporučuji všem v okolí.“
                    </p>
<p className="text-sm font-medium text-stone-400">— Petr Kučera</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-5xl mx-auto">
<div className="bg-white rounded-2xl border border-stone-200 p-8 md:p-12 shadow-sm">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 mb-8">
                Kontakt
            </h2>
<div className="grid md:grid-cols-2 gap-12">
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-600 shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-stone-500 font-medium uppercase tracking-wider mb-1">Adresa</p>
<p className="text-base font-medium text-stone-900">Ulice 123<br/>123 45 Město</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-600 shrink-0">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-stone-500 font-medium uppercase tracking-wider mb-1">Telefon</p>
<a className="text-base font-medium text-stone-900 hover:text-stone-600" href="tel:+420123456789">+420 123 456 789</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-600 shrink-0">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-stone-500 font-medium uppercase tracking-wider mb-1">Email</p>
<a className="text-base font-medium text-stone-900 hover:text-stone-600" href="mailto:info@autoservis-mesto.cz">info@autoservis-[mesto].cz</a>
</div>
</div>
</div>
<div>
<div className="bg-stone-50 rounded-xl p-6 border border-stone-100 mb-6">
<p className="text-xs text-stone-500 font-medium uppercase tracking-wider mb-4">Otevírací doba</p>
<div className="flex justify-between items-center py-2 border-b border-stone-200">
<span className="text-sm font-medium text-stone-600">Po - Pá</span>
<span className="text-sm font-semibold text-stone-900">8:00 - 17:00</span>
</div>
<div className="flex justify-between items-center py-2">
<span className="text-sm font-medium text-stone-600">So - Ne</span>
<span className="text-sm font-semibold text-stone-900">Zavřeno</span>
</div>
</div>
<a className="w-full bg-stone-900 text-white px-6 py-4 rounded-xl font-medium text-base hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 shadow-lg" href="tel:+420123456789">
<iconify-icon icon="solar:phone-bold" width="22"></iconify-icon>
                        Zavolat a domluvit termín
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-stone-100 py-10 border-t border-stone-200">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-center md:text-left">
<span className="block font-semibold tracking-tight text-base text-stone-900 mb-1">
                    [Název Autoservisu]
                </span>
<span className="text-sm text-stone-500">
                    © 2025 Všechna práva vyhrazena.
                </span>
</div>
<div className="flex items-center gap-6 text-stone-500">
<a className="text-sm font-medium hover:text-stone-900 transition-colors" href="tel:+420123456789">+420 123 456 789</a>
<div className="w-px h-4 bg-stone-300"></div>
<div className="flex items-center gap-4">
<a className="hover:text-stone-900 transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-stone-900 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
