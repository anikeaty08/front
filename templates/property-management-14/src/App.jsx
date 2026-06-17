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
      

<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex-shrink-0 flex items-center">
<a className="flex items-center" href="/">
<img alt="FalcoNest Logo" className="h-8 w-auto" src="https://via.placeholder.com/150x40/1e3a8a/ffffff?text=FalcoNest+Logo"/>
</a>
</div>
<div>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-orange-600 hover:bg-orange-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600" href="#admin">
                    Přihlášení do administrace
                </a>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative pt-16 pb-20 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Kancelářské pozadí" className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-blue-50/90 backdrop-blur-[2px]"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl text-left">
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-blue-950 mb-6 leading-tight">
                            Získejte zpět kontrolu nad svými apartmány.<br className="hidden xl:block"/> <span className="text-blue-800">Konec chaosu.</span>
</h1>
<p className="mt-4 text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                            Jediný digitální dispečink, který spojí vaši kancelář, personál v terénu i majitele bytů do jednoho plynulého systému. Úkoly se řeší samy, a majitelé vidí výsledky.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium rounded-lg text-white bg-orange-600 hover:bg-orange-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600" href="#demo">
                                Chci ukázku zdarma
                                <iconify-icon className="ml-2 text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="relative mx-auto w-full max-w-lg lg:max-w-none">
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/40 ring-1 ring-blue-900/5">
<img alt="Ukázka aplikace FalcoNest" className="w-full h-auto object-cover md:h-[420px] lg:h-[500px]" src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-blue-900/10"></div>
</div>

<div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
<div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-blue-950">Znáte tuto každodenní realitu?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

<div>
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 mb-5">
<iconify-icon height="28" icon="solar:chat-unread-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-blue-950 tracking-tight mb-2">Zmatek na WhatsAppu</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Desítky nepřehledných skupin, ztracené kódy od dveří a neustálé nahánění lidí v terénu s dotazy, jestli už je konečně uklizeno.
                        </p>
</div>

<div>
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 mb-5">
<iconify-icon height="28" icon="solar:table-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-blue-950 tracking-tight mb-2">Roztříštěný Excel</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Neustálé ruční přepisování rezervací, barevné buňky, kterým nikdo nerozumí, a nekonečné noční směny u počítače.
                        </p>
</div>

<div>
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 mb-5">
<iconify-icon height="28" icon="solar:phone-calling-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-blue-950 tracking-tight mb-2">Tlak od majitelů bytů</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Každodenní vyřizování dotazů na obsazenost a vyčerpávající nutnost neustále obhajovat svou těžce vydělanou provizi.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-blue-950">Řešení navržené přímo pro správce</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

<div className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm transition-all hover:shadow-md hover:border-blue-200 group">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 mb-5 group-hover:bg-blue-800 group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="solar:smartphone-update-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-blue-950 tracking-tight mb-2">Chytrá autonomie v terénu</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Mobilní aplikace pro personál, která spolehlivě funguje i ve sklepě bez internetu. Data se synchronizují, jakmile je signál.
                        </p>
</div>

<div className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm transition-all hover:shadow-md hover:border-blue-200 group">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 mb-5 group-hover:bg-blue-800 group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="solar:shield-user-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-blue-950 tracking-tight mb-2">Informační firewall pro majitele</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Klientský portál s "teploměrem obsazenosti", který obhájí vaši provizi a uklidní majitele, ale skryje interní zmatky.
                        </p>
</div>

<div className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm transition-all hover:shadow-md hover:border-blue-200 group">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 mb-5 group-hover:bg-blue-800 group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="solar:hand-shake-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-blue-950 tracking-tight mb-2">White-glove Onboarding</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Nic nepřepisujete. My vezmeme vaše existující tabulky, systém kompletně nastavíme za vás a osobně zaškolíme váš tým.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-100">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-blue-950">Časté dotazy</h2>
</div>
<div className="space-y-8">

<div className="pb-8 border-b border-slate-100 last:border-0 last:pb-0">
<h3 className="text-base font-medium text-blue-950 tracking-tight mb-2 flex items-center">
<iconify-icon className="mr-3 text-blue-600 text-lg" icon="solar:question-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Zvládnou aplikaci používat i starší uklízečky?
                        </h3>
<p className="text-sm text-slate-500 leading-relaxed pl-7 lg:pl-8">
                            Ano, aplikace je maximálně blbuvzdorná, stačí kliknout na 'Hotovo'.
                        </p>
</div>

<div className="pb-8 border-b border-slate-100 last:border-0 last:pb-0">
<h3 className="text-base font-medium text-blue-950 tracking-tight mb-2 flex items-center">
<iconify-icon className="mr-3 text-blue-600 text-lg" icon="solar:wifi-router-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                            Co když vypadne v apartmánu internet?
                        </h3>
<p className="text-sm text-slate-500 leading-relaxed pl-7 lg:pl-8">
                            Aplikace je plně offline-first, funguje dál a data se odešlou automaticky po připojení.
                        </p>
</div>

<div className="pb-8 border-b border-slate-100 last:border-0 last:pb-0">
<h3 className="text-base font-medium text-blue-950 tracking-tight mb-2 flex items-center">
<iconify-icon className="mr-3 text-blue-600 text-lg" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Jak dlouho trvá nasazení do firmy?
                        </h3>
<p className="text-sm text-slate-500 leading-relaxed pl-7 lg:pl-8">
                            Díky našemu White-glove onboardingu to zvládáme v řádu dnů, navíc za vás přepíšeme všechna data.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl bg-blue-900 px-6 py-12 sm:p-16 text-center overflow-hidden relative border border-blue-800 shadow-2xl">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700/40 via-blue-900 to-blue-950"></div>
<div className="relative z-10">

<div className="inline-flex items-center justify-center px-3 py-1 mb-6 rounded-full bg-orange-500/20 border border-orange-500/30 backdrop-blur-sm">
<iconify-icon className="text-orange-400 mr-2 text-sm" icon="solar:crown-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-orange-200 tracking-wide uppercase">Exkluzivní nabídka</span>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-6">Program Pioneer Partner</h2>
<p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
                            Staňte se jednou z prvních 10 agentur a získejte status strategického partnera. Zajistíme vám prémiový white-glove onboarding zcela zdarma (vaše data převedeme za vás) a uzamkneme vám exkluzivní zaváděcí cenu na celých 18 měsíců. Navíc získáte přímou linku na zakladatele a prioritu při vývoji nových funkcí.
                        </p>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium rounded-lg text-white bg-orange-600 hover:bg-orange-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-900 focus:ring-orange-500" href="#demo">
                            Chci ukázku zdarma
                        </a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-100 scroll-mt-16" id="demo">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center justify-center px-3 py-1 mb-6 rounded-full bg-blue-100 border border-blue-200">
<span className="text-xs font-medium text-blue-800 tracking-wide uppercase">Krok 1 k automatizaci</span>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-blue-950 mb-6">Pojďme to probrat osobně</h2>
<p className="text-lg text-slate-600 mb-10 leading-relaxed">
                            Nejlepší způsob, jak zjistit, zda je FalcoNest pro vaši agenturu to pravé, je rychlá 15minutová ukázka. Žádný tlak, jen se podíváme na vaše procesy a ukážeme vám, jak vám můžeme ušetřit čas.
                        </p>
<div className="space-y-6">
<div className="flex items-center group">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 mr-5 group-hover:border-blue-300 group-hover:bg-blue-50 transition-colors">
<iconify-icon height="24" icon="solar:letter-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-500 mb-0.5">Napište nám</p>
<a className="text-base font-medium text-blue-950 hover:text-orange-600 transition-colors" href="mailto:podpora@falconestapp.com">podpora@falconestapp.com</a>
</div>
</div>
<div className="flex items-center group">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 mr-5 group-hover:border-blue-300 group-hover:bg-blue-50 transition-colors">
<iconify-icon height="24" icon="solar:phone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-500 mb-0.5">Zavolejte nám</p>
<a className="text-base font-medium text-blue-950 hover:text-orange-600 transition-colors" href="tel:+34123456789">+34 (Zde doplňte číslo)</a>
</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
<div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
<div className="relative z-10 text-center">
<h3 className="text-xl font-semibold tracking-tight text-blue-950 mb-2">Vyberte si termín hovoru</h3>
<p className="text-sm text-slate-500 mb-8">Spojíme se přes Google Meet nebo telefonicky.</p>
<div className="w-full h-[400px] bg-slate-50/50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 hover:border-blue-300 hover:bg-blue-50/50 transition-colors group cursor-pointer">
<iconify-icon className="mb-4 text-slate-300 group-hover:text-blue-500 transition-colors" height="48" icon="solar:calendar-add-linear" width="48"></iconify-icon>
<p className="text-sm font-medium text-slate-600">Zde vložíme váš Calendly kalendář</p>
<p className="text-xs mt-2 text-slate-400 max-w-[200px] mx-auto">Klienti si rovnou naklikají čas, který vám oběma vyhovuje.</p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-100 py-8 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">
                © 2024 FalcoNest. Všechna práva vyhrazena.
            </p>
<div className="flex items-center gap-6">
<a className="text-xs font-medium text-slate-500 hover:text-blue-900 transition-colors" href="mailto:podpora@falconestapp.com">
                    podpora@falconestapp.com
                </a>
<a className="text-xs font-medium text-slate-500 hover:text-blue-900 transition-colors" href="#">
                    Ochrana soukromí
                </a>
</div>
</div>
</footer>

    </>
  );
}
