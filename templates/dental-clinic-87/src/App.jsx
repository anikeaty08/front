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
      

<nav className="fixed top-0 w-full z-50 border-b border-[#1A3A5A]/5 bg-[#FAFAFA]/90 backdrop-blur-md">
<div className="flex h-16 max-w-5xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-sm font-semibold tracking-tighter uppercase flex items-center gap-3 text-[#1A3A5A]" href="#">
<img alt="Studio Napolitano" className="w-auto h-12 object-contain" src="https://dentistanapolitano.it/newsite/wp-content/uploads/2025/12/Logo-2.png"/>
</a>
<a className="hidden sm:flex items-center gap-2 text-xs font-medium bg-[#1A3A5A]/5 hover:bg-[#1A3A5A]/10 text-[#1A3A5A] px-4 py-2 rounded-full transition-colors border border-[#1A3A5A]/10" href="#prenota">
<span className="font-sans">Prenota Visita</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</nav>

<section className="overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E0F2F1] rounded-full blur-3xl opacity-50 -z-10"></div>
<div className="text-center max-w-3xl mr-auto ml-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1A3A5A]/10 bg-white shadow-sm text-[#1A3A5A] text-xs font-medium mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
<span className="font-sans">Campagna Prevenzione 2026</span>
</div>
<h1 className="sm:text-7xl leading-[1.1] text-5xl text-[#1A3A5A] tracking-tight mb-6 font-sans font-semibold">
                Il tuo sorriso inizia <br/> con un caffè.
            </h1>
<p className="sm:text-xl leading-relaxed text-lg font-light text-[#1A3A5A]/70 font-sans max-w-2xl mr-auto mb-10 ml-auto">
                Studio Napolitano premia la tua voglia di star bene. Goditi un caffè offerto da noi nei bar convenzionati e ricevi un check-up completo per la tua salute dentale.
            </p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<a className="sm:w-auto hover:bg-[#b08d4b] transition-all shadow-[#C5A059]/20 flex items-center justify-center gap-2 text-sm font-medium text-white font-sans bg-orange-400 w-full rounded-lg px-8 py-3 shadow-lg" href="#prenota">
<iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Prenota ora la tua visita
                </a>
<a className="w-full sm:w-auto px-8 py-3 bg-white border border-[#1A3A5A]/10 hover:border-[#1A3A5A]/30 text-[#1A3A5A] text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm font-sans" href="#bar-partner">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Scopri i Bar Convenzionati
                </a>
</div>
</div>
</section>

<section className="bg-white border-[#1A3A5A]/5 border-t pt-20 pb-20">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-2xl tracking-tight text-[#1A3A5A] font-sans font-semibold">Come funziona</h2>
<p className="text-[#1A3A5A]/60 text-sm mt-2 font-sans">Bastano 3 semplici passaggi per il tuo benessere.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group hover:border-[#C5A059]/30 transition-colors bg-blue-100 border-[#1A3A5A]/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="w-10 h-10 bg-[#E0F2F1] rounded-full flex items-center justify-center mb-4 text-[#1A3A5A] border border-[#E0F2F1]">
<iconify-icon icon="solar:shop-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-[#1A3A5A] font-sans">1. Entra nel Bar</h3>
<p className="text-sm text-[#1A3A5A]/60 leading-relaxed font-sans">Cerca i locali locali che espongono il logo "Partner Studio Napolitano" nella tua zona.</p>
</div>

<div className="group hover:border-[#C5A059]/30 transition-colors bg-blue-100 border-[#1A3A5A]/5 border rounded-2xl px-6 py-6 shadow-sm">
<div className="w-10 h-10 bg-[#E0F2F1] rounded-full flex items-center justify-center mb-4 text-[#1A3A5A] border border-[#E0F2F1]">
<iconify-icon icon="solar:cup-hot-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#1A3A5A] tracking-tight font-sans mb-2">2. Gusta il Caffè</h3>
<p className="text-sm text-[#1A3A5A]/60 leading-relaxed font-sans">Ricevi il tuo caffè omaggio e il tagliandino della promozione direttamente alla cassa.</p>
</div>

<div className="group hover:border-[#C5A059]/30 transition-colors bg-blue-100 border-[#1A3A5A]/5 border rounded-2xl px-6 py-6 shadow-sm">
<div className="w-10 h-10 bg-[#E0F2F1] rounded-full flex items-center justify-center mb-4 text-[#1A3A5A] border border-[#E0F2F1]">
<iconify-icon icon="solar:qr-code-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-[#1A3A5A] font-sans">3. Inquadra e Prenota</h3>
<p className="text-sm text-[#1A3A5A]/60 leading-relaxed font-sans">Scansiona il QR Code sul tagliandino per attivare il tuo Bonus Prevenzione immediato.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FAFAFA]">
<div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="">
<h2 className="text-3xl tracking-tight text-[#1A3A5A] mb-6 font-sans font-semibold">
                    La tua salute al centro. 
                    <span className="text-[#1A3A5A]/50 font-sans font-semibold">Senza compromessi.</span>
</h2>
<p className="text-[#1A3A5A]/70 text-base leading-relaxed mb-8 font-sans">
                    Mettiamo la salute del tuo sorriso al centro di tutto. Con tecnologie all'avanguardia e un approccio umano, ci prendiamo cura di te a partire dai piccoli gesti quotidiani.
                </p>
<div className="bg-white rounded-xl p-6 border border-[#1A3A5A]/10 shadow-sm">
<h4 className="text-sm font-semibold tracking-tight mb-4 flex items-center gap-2 text-[#1A3A5A] font-sans">
<iconify-icon className="text-[#C5A059]" icon="solar:clipboard-check-linear" width="18"></iconify-icon>
                        Cosa include la visita?
                    </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-[#1A3A5A]/80">
<iconify-icon className="text-[#E0F2F1] text-[#1A3A5A] mt-0.5 shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="font-sans">Visita specialistica approfondita con tecnologie digitali.</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#1A3A5A]/80">
<iconify-icon className="text-[#E0F2F1] text-[#1A3A5A] mt-0.5 shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="font-sans">Screening carie e controllo salute gengivale.</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#1A3A5A]/80">
<iconify-icon className="text-[#E0F2F1] text-[#1A3A5A] mt-0.5 shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="font-sans">Piano di cura personalizzato (senza impegno).</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#1A3A5A]/80">
<iconify-icon className="text-[#E0F2F1] text-[#1A3A5A] mt-0.5 shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="font-sans">Consigli pratici per l'igiene orale quotidiana.</span>
</li>
</ul>
</div>
</div>

<div className="relative" id="bar-partner">

<div className="absolute -inset-1 bg-gradient-to-r from-[#C5A059]/20 to-[#E0F2F1]/50 rounded-2xl blur-lg opacity-60"></div>
<div className="relative bg-white border border-[#C5A059]/30 rounded-2xl p-6 shadow-sm">
<div className="flex items-center justify-between mb-6 border-b border-[#1A3A5A]/5 pb-4">
<h3 className="font-semibold text-[#1A3A5A] tracking-tight font-sans">Bar Convenzionati</h3>
<span className="text-xs font-medium px-2 py-1 bg-[#E0F2F1] text-[#1A3A5A] rounded-md border border-[#E0F2F1] flex items-center gap-1 font-sans">
<span className="w-1.5 h-1.5 rounded-full bg-[#1A3A5A] animate-pulse"></span>
                            Attivi ora
                        </span>
</div>
<div className="space-y-4">

<div className="flex items-center gap-4 p-3 hover:bg-[#FAFAFA] rounded-lg transition-colors cursor-default border border-transparent hover:border-[#1A3A5A]/5">
<div className="w-10 h-10 rounded-full bg-[#FAFAFA] text-[#C5A059] flex items-center justify-center border border-[#1A3A5A]/10 shrink-0">
<span className="text-xs font-bold font-sans">C</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-[#1A3A5A] truncate font-sans">Caffè Centrale</p>
<p className="text-xs text-[#1A3A5A]/50 truncate font-sans">Piazza della Repubblica, 12</p>
</div>
<a className="text-[#1A3A5A]/30 hover:text-[#C5A059] transition-colors" href="#">
<iconify-icon icon="solar:map-arrow-right-linear" width="20"></iconify-icon>
</a>
</div>

<div className="flex items-center gap-4 p-3 hover:bg-[#FAFAFA] rounded-lg transition-colors cursor-default border border-transparent hover:border-[#1A3A5A]/5">
<div className="w-10 h-10 rounded-full bg-[#FAFAFA] text-[#C5A059] flex items-center justify-center border border-[#1A3A5A]/10 shrink-0">
<span className="text-xs font-bold font-sans">B</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-[#1A3A5A] truncate font-sans">Bar Sport &amp; Friends</p>
<p className="text-xs text-[#1A3A5A]/50 truncate font-sans">Via Roma, 45</p>
</div>
<a className="text-[#1A3A5A]/30 hover:text-[#C5A059] transition-colors" href="#">
<iconify-icon icon="solar:map-arrow-right-linear" width="20"></iconify-icon>
</a>
</div>

<div className="flex items-center gap-4 p-3 hover:bg-[#FAFAFA] rounded-lg transition-colors cursor-default border border-transparent hover:border-[#1A3A5A]/5">
<div className="w-10 h-10 rounded-full bg-[#FAFAFA] text-[#C5A059] flex items-center justify-center border border-[#1A3A5A]/10 shrink-0">
<span className="text-xs font-bold font-sans">D</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-[#1A3A5A] truncate font-sans">Dolce Vita Café</p>
<p className="text-xs text-[#1A3A5A]/50 truncate font-sans">Corso Vittorio Emanuele, 8</p>
</div>
<a className="text-[#1A3A5A]/30 hover:text-[#C5A059] transition-colors" href="#">
<iconify-icon icon="solar:map-arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="mt-6 pt-4 border-t border-[#1A3A5A]/5 text-center">
<a className="text-xs text-[#1A3A5A]/50 hover:text-[#C5A059] flex items-center justify-center gap-1 font-medium transition-colors font-sans" href="#">
                            Vedi mappa completa
                            <iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1A3A5A] text-white" id="prenota">
<div className="max-w-xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="text-3xl tracking-tight mb-4 text-white font-sans font-semibold">Attiva il tuo Bonus</h2>
<p className="text-white/60 text-sm font-sans">Hai scansionato il codice al bar? Lascia i tuoi dati qui sotto per essere ricontattato entro 24 ore e fissare la tua visita completa omaggio.</p>
<div className="mt-6 inline-flex items-center gap-2 px-3 py-1 bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/30 rounded-full text-xs font-medium">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
</div>
</div>

<form className="space-y-4 bg-white/5 p-8 rounded-2xl border border-[#C5A059]/30 backdrop-blur-sm shadow-xl shadow-black/20">
<div>
<label className="block text-xs font-medium text-white/50 mb-1.5 font-sans">Nome e Cognome</label>
<input className="w-full bg-[#1A3A5A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all placeholder:text-white/20" placeholder="Mario Rossi" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-white/50 mb-1.5 font-sans">Numero di Telefono</label>
<input className="w-full bg-[#1A3A5A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all placeholder:text-white/20" placeholder="+39 333 1234567" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-white/50 mb-1.5 font-sans">Bar dove hai ricevuto il tagliandino</label>
<div className="relative">
<select className="w-full bg-[#1A3A5A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all appearance-none cursor-pointer">
<option className="font-sans" disabled="" selected="" value="">Seleziona un bar...</option>
<option className="font-sans">Caffè Centrale</option>
<option className="font-sans">Bar Sport &amp; Friends</option>
<option className="font-sans">Dolce Vita Café</option>
<option className="font-sans">Altro</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-[#C5A059] text-white hover:bg-[#b08d4b] font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm shadow-lg shadow-[#C5A059]/20 font-sans" type="button">
                        Invia Richiesta
                        <iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
</button>
<p className="text-[10px] text-white/40 text-center mt-4 font-sans">
                        Inviando il modulo accetti la nostra privacy policy. I dati saranno utilizzati esclusivamente per gestire la prenotazione.
                    </p>
</div>
</form>
</div>
</section>

<footer className="py-12 border-t border-[#1A3A5A]/5 bg-white">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<img alt="Studio Napolitano" className="h-8 w-auto object-contain" src="https://dentistanapolitano.it/newsite/wp-content/uploads/2025/12/Logo-2.png"/>
<span className="text-sm font-semibold tracking-tight text-[#1A3A5A] font-sans">Studio Napolitano</span>
</div>
<div className="flex gap-6 text-xs text-[#1A3A5A]/60 font-medium">
<a className="hover:text-[#1A3A5A] transition-colors font-sans" href="#">Privacy Policy</a>
<a className="hover:text-[#1A3A5A] transition-colors font-sans" href="#">Cookie Policy</a>
<a className="hover:text-[#1A3A5A] transition-colors font-sans" href="#">Contatti</a>
</div>
<p className="text-[10px] text-[#1A3A5A]/40 font-sans">
                © 2024 Studio Napolitano. Tutti i diritti riservati.
            </p>
</div>
</footer>

    </>
  );
}
