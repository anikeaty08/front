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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-950">
<iconify-icon icon="solar:settings-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-white group-hover:text-zinc-200 transition-colors">
                    Peterko-servis
                </span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white hover:text-zinc-300 transition-colors" href="#">Domov</a>

<div className="relative group h-20 flex items-center">
<button className="flex items-center gap-1 text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">
                        Služby
                        <iconify-icon className="transition-transform group-hover:rotate-180" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</button>

<div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl p-2 opacity-0 invisible group-hover:visible transition-all duration-200 transform translate-y-2 origin-top">
<a className="flex items-center gap-3 p-2 rounded hover:bg-zinc-800 transition-colors group/item" href="#autoservis">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover/item:text-white group-hover/item:bg-zinc-700">
<iconify-icon icon="solar:wheel-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Autoservis</div>
<div className="text-xs text-zinc-500">Komplexné opravy</div>
</div>
</a>
<a className="flex items-center gap-3 p-2 rounded hover:bg-zinc-800 transition-colors group/item mt-1" href="#pneuservis">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover/item:text-white group-hover/item:bg-zinc-700">
<iconify-icon icon="solar:asterisk-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Pneuservis</div>
<div className="text-xs text-zinc-500">Prezutie a vyváženie</div>
</div>
</a>
<a className="flex items-center gap-3 p-2 rounded hover:bg-zinc-800 transition-colors group/item mt-1" href="#sklo">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover/item:text-white group-hover/item:bg-zinc-700">
<iconify-icon icon="solar:maximize-square-minimalistic-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Výmena skla</div>
<div className="text-xs text-zinc-500">Čelné sklá</div>
</div>
</a>
<a className="flex items-center gap-3 p-2 rounded hover:bg-zinc-800 transition-colors group/item mt-1" href="#olej">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover/item:text-white group-hover/item:bg-zinc-700">
<iconify-icon icon="solar:drop-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Výmena oleja</div>
<div className="text-xs text-zinc-500">Pravidelná údržba</div>
</div>
</a>
</div>
</div>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">O nás</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Recenzie</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Kontakt</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="tel:+421900000000">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span>09XX 123 456</span>
</a>
<a className="hidden sm:flex h-9 px-4 items-center justify-center rounded-full bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors" href="#objednat">
                    Objednať sa
                </a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-8 animate-[fadeIn_0.5s_ease-out]">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">Peterko-Servis Nitra</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-6 text-glow leading-[1.1] max-w-5xl mx-auto">
                Prémiová starostlivosť <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-200 to-zinc-500">o vaše vozidlo.</span>
</h1>

<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Špecializovaný <strong className="text-zinc-200 font-medium">autoservis</strong> a <strong className="text-zinc-200 font-medium">pneuservis</strong> v Nitre. 
                Poskytujeme odbornú výmenu oleja, opravu čelného skla a kompletnú diagnostiku. Rýchlo, spoľahlivo a transparentne.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="h-12 px-8 rounded-full bg-white text-zinc-950 text-base font-medium flex items-center gap-2 hover:bg-zinc-200 transition-all w-full sm:w-auto justify-center group" href="#kontakt">
                    Rezervovať termín
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>
<a className="h-12 px-8 rounded-full border border-zinc-700 text-white text-base font-medium flex items-center gap-2 hover:bg-zinc-800 hover:border-zinc-600 transition-all w-full sm:w-auto justify-center" href="#sluzby">
                    Naše služby
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-zinc-800 pt-8">
<div className="flex flex-col items-center gap-2">
<div className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
<iconify-icon icon="solar:verified-check-linear" width="20"></iconify-icon>
</div>
<span className="text-sm text-zinc-400">Certifikovaní mechanici</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<span className="text-sm text-zinc-400">Rýchly servis</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="text-sm text-zinc-400">Záruka na diely</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
<iconify-icon icon="solar:tag-price-linear" width="20"></iconify-icon>
</div>
<span className="text-sm text-zinc-400">Férové ceny</span>
</div>
</div>
</div>
</main>

    </>
  );
}
