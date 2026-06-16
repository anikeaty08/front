import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#f2fdf4',
100: '#e1fce7',
200: '#c5f7d1',
300: '#96edb1',
400: '#5de08a',
500: '#10b981', /* Primary Green */
600: '#16a34a',
700: '#15803d',
800: '#166534',
900: '#14532d',
accent: '#84cc16', /* Lime/Goldish accent */
}
}
}
}
}



      lucide.createIcons();
    


      document.addEventListener('DOMContentLoaded', () => { const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('active'); observer.unobserve(entry.target); } }); }, { threshold: 0.1 }); document.querySelectorAll('.reveal').forEach(el => observer.observe(el)); });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 transition-all duration-300 glass-panel border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="bg-brand-500 p-2 rounded-xl text-white">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<span className="font-semibold text-2xl tracking-tight text-slate-900">
              Solar Life Line
            </span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-base font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#chi-siamo">
              Chi Siamo
            </a>
<a className="text-base font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#servizi">
              Servizi
            </a>
<a className="text-base font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#vantaggi">
              Vantaggi
            </a>
<a className="text-base font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#progetti">
              Progetti
            </a>
</div>

<div className="hidden md:block">
<a className="bg-brand-900 hover:bg-brand-800 text-white px-6 py-2.5 rounded-full text-base font-medium transition-all shadow-lg shadow-brand-900/20 flex items-center gap-2 group" href="#contatti">
              Richiedi Preventivo
              <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-600 hover:text-slate-900">
<i className="w-8 h-8" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Solar Panels" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center lg:text-left">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 reveal">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-200 backdrop-blur-sm">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
</span>
<span className="text-sm font-medium tracking-wide uppercase">
                Il futuro è verde
              </span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
              Energia pulita per un domani
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">
                sostenibile
              </span>
              .
            </h1>
<p className="text-xl text-slate-200 max-w-2xl leading-relaxed">
              Trasforma la tua casa o azienda con impianti fotovoltaici di
              ultima generazione. Riduci i costi, aumenta il valore del tuo
              immobile e proteggi il pianeta.
            </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
<a className="bg-brand-500 hover:bg-brand-400 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-xl shadow-brand-500/30 flex items-center justify-center gap-2" href="#lead-magnet">
                Calcola Risparmio
              </a>
<a className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full text-lg font-medium transition-all flex items-center justify-center gap-2" href="#chi-siamo">
<i className="w-5 h-5" data-lucide="play-circle"></i>
                Come Funziona
              </a>
</div>
</div>

<div className="hidden lg:block relative h-[500px] reveal delay-200">

<div className="absolute top-10 right-10 w-72 bg-white/95 backdrop-blur rounded-2xl p-6 shadow-2xl">
<div className="flex items-center gap-4 mb-4">
<div className="bg-orange-100 p-3 rounded-full text-orange-600">
<i className="w-6 h-6" data-lucide="sun"></i>
</div>
<div>
<p className="text-sm text-slate-500 font-medium">
                    Produzione Odierna
                  </p>
<p className="text-2xl font-bold text-slate-900">45.2 kWh</p>
</div>
</div>
<div className="h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-[75%] bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
</div>
</div>

<div className="absolute bottom-20 left-10 w-80 glass-panel rounded-2xl p-6 shadow-2xl border border-white/40">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-sm text-slate-800 font-medium">
                    Risparmio in Bolletta
                  </p>
<p className="text-3xl font-bold text-brand-700">-70%</p>
</div>
<div className="bg-brand-100 p-2 rounded-lg text-brand-600">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
</div>
<p className="text-xs text-slate-600">
                Confronto rispetto all'anno precedente
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100 reveal">
<div className="p-4">
<p className="text-4xl font-semibold text-slate-900 tracking-tight">
              500+
            </p>
<p className="text-base text-slate-500 mt-1">Impianti Installati</p>
</div>
<div className="p-4">
<p className="text-4xl font-semibold text-slate-900 tracking-tight">
              12k
            </p>
<p className="text-base text-slate-500 mt-1">
              Tonnellate CO2 Risparmiate
            </p>
</div>
<div className="p-4">
<p className="text-4xl font-semibold text-slate-900 tracking-tight">
              98%
            </p>
<p className="text-base text-slate-500 mt-1">Clienti Soddisfatti</p>
</div>
<div className="p-4">
<p className="text-4xl font-semibold text-slate-900 tracking-tight">
              25
            </p>
<p className="text-base text-slate-500 mt-1">Anni di Garanzia</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="chi-siamo">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative reveal">
<div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
<img alt="Solar Technician" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
<div className="flex items-center gap-4 mb-3">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=11"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=33"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=59"/>
</div>
<span className="font-semibold text-slate-900 text-lg">4.9/5</span>
</div>
<p className="text-slate-500 text-base leading-snug">
                Valutato eccellente da oltre 500 famiglie italiane.
              </p>
</div>
</div>
<div className="space-y-8 reveal delay-200">
<div className="inline-block px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold tracking-wide">
              CHI SIAMO
            </div>
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight">
              Solar Life Line: L'energia che ti muove.
            </h2>
<p className="text-xl text-slate-600 leading-relaxed">
              Siamo un team di ingegneri e tecnici specializzati nella
              progettazione e installazione di sistemi fotovoltaici ad alta
              efficienza. La nostra missione è rendere l'indipendenza energetica
              accessibile a tutti.
            </p>
<ul className="space-y-4 pt-4">
<li className="flex items-start gap-3">
<div className="mt-1 bg-green-100 p-1 rounded-full text-green-600">
<i className="w-4 h-4 stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-lg text-slate-700">
                  Progettazione su misura per massimizzare il rendimento.
                </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-green-100 p-1 rounded-full text-green-600">
<i className="w-4 h-4 stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-lg text-slate-700">
                  Assistenza burocratica completa per incentivi e detrazioni.
                </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-green-100 p-1 rounded-full text-green-600">
<i className="w-4 h-4 stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-lg text-slate-700">
                  Monitoraggio smart 24/7 tramite app dedicata.
                </span>
</li>
</ul>
<div className="pt-6">
<a className="text-brand-600 font-semibold text-lg hover:text-brand-700 inline-flex items-center gap-2 group" href="#progetti">
                Vedi i nostri lavori
                <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="servizi">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20 reveal">
<span className="text-brand-600 font-semibold text-sm tracking-wider uppercase mb-2 block">
            Cosa Offriamo
          </span>
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-6">
            Le nostre soluzioni solari
          </h2>
<p className="text-xl text-slate-500">
            Tecnologie all'avanguardia per ogni esigenza energetica, dal
            residenziale all'industriale.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-300 reveal delay-100">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Residenziale" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-500 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="home"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3">
                Impianti Residenziali
              </h3>
<p className="text-lg text-slate-500 mb-6">
                Soluzioni chiavi in mano per villette e condomini. Abbatti la
                bolletta della luce fin da subito.
              </p>
<a className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-400 group-hover:bg-brand-500 group-hover:border-brand-500 group-hover:text-white transition-all" href="#">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>

<div className="group relative bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-300 reveal delay-200">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Commerciale" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-8">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-500 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="factory"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3">
                Industriale &amp; Commerciale
              </h3>
<p className="text-lg text-slate-500 mb-6">
                Massimizza il ROI della tua azienda e migliora la sostenibilità
                del tuo business.
              </p>
<a className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-400 group-hover:bg-brand-500 group-hover:border-brand-500 group-hover:text-white transition-all" href="#">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>

<div className="group relative bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-300 reveal delay-300">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Accumulo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-8">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-500 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="battery-charging"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3">
                Sistemi di Accumulo
              </h3>
<p className="text-lg text-slate-500 mb-6">
                Immagazzina l'energia prodotta di giorno per utilizzarla di
                notte. Autonomia al 100%.
              </p>
<a className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-400 group-hover:bg-brand-500 group-hover:border-brand-500 group-hover:text-white transition-all" href="#">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="vantaggi">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-500/10 blur-[120px] rounded-full"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div className="reveal">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-8">
              Perché scegliere il solare oggi?
            </h2>
<p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Non è solo una scelta ecologica, è una scelta economica
              intelligente. Con l'aumento dei costi energetici, il fotovoltaico
              è l'investimento più sicuro.
            </p>
<a className="inline-flex items-center gap-2 text-brand-400 font-semibold text-lg hover:text-brand-300" href="#lead-magnet">
              Scopri i tuoi incentivi
              <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid sm:grid-cols-2 gap-6 reveal delay-200">

<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
<div className="bg-brand-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-brand-400">
<i className="w-6 h-6" data-lucide="piggy-bank"></i>
</div>
<h3 className="text-xl font-semibold mb-2">Risparmio Economico</h3>
<p className="text-slate-400 text-base">
                Riduci la bolletta elettrica fino all'80% grazie
                all'autoconsumo.
              </p>
</div>

<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
<div className="bg-brand-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-brand-400">
<i className="w-6 h-6" data-lucide="leaf"></i>
</div>
<h3 className="text-xl font-semibold mb-2">Impatto Ambientale</h3>
<p className="text-slate-400 text-base">
                Energia 100% pulita e rinnovabile a zero emissioni di CO2.
              </p>
</div>

<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
<div className="bg-brand-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-brand-400">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-semibold mb-2">Indipendenza</h3>
<p className="text-slate-400 text-base">
                Proteggiti dagli aumenti incontrollati del prezzo dell'energia.
              </p>
</div>

<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
<div className="bg-brand-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-brand-400">
<i className="w-6 h-6" data-lucide="badge-percent"></i>
</div>
<h3 className="text-xl font-semibold mb-2">Incentivi Fiscali</h3>
<p className="text-slate-400 text-base">
                Recupera il 50% della spesa grazie alle detrazioni statali
                attive.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-50 relative overflow-hidden" id="lead-magnet">
<div className="absolute -left-20 top-20 w-64 h-64 bg-brand-200 rounded-full blur-[80px] mix-blend-multiply opacity-70"></div>
<div className="absolute -right-20 bottom-20 w-80 h-80 bg-blue-200 rounded-full blur-[80px] mix-blend-multiply opacity-70"></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
<div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100 p-8 md:p-12 reveal">
<div className="text-center mb-10">
<span className="bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
              Consulenza Gratuita
            </span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mt-6 mb-4 tracking-tight">
              Scopri quanto puoi risparmiare
            </h2>
<p className="text-lg text-slate-500">
              Compila il form per ricevere un'analisi preliminare del tuo
              potenziale solare senza impegno.
            </p>
</div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700" htmlFor="name">
                  Nome Completo
                </label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all placeholder:text-slate-400" id="name" placeholder="Mario Rossi" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700" htmlFor="phone">
                  Telefono
                </label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all placeholder:text-slate-400" id="phone" placeholder="+39 333 1234567" type="tel"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700" htmlFor="email">
                  Email
                </label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all placeholder:text-slate-400" id="email" placeholder="mario@email.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700" htmlFor="type">
                  Tipo di Immobile
                </label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all appearance-none text-slate-600" id="type">
<option>Abitazione Privata</option>
<option>Azienda / Capannone</option>
<option>Condominio</option>
<option>Terreno Agricolo</option>
</select>
<i className="absolute right-4 top-3.5 w-5 h-5 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-4 rounded-xl shadow-lg shadow-brand-500/20 transition-all text-lg flex justify-center items-center gap-2 group" type="button">
                Richiedi Analisi Gratuita
                <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="send"></i>
</button>
<p className="text-center text-xs text-slate-400 mt-4">
                I tuoi dati sono al sicuro. Leggi la nostra Privacy Policy.
              </p>
</div>
</form>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight text-center reveal">
          Cosa dicono i nostri clienti
        </h2>
</div>
<div className="flex overflow-x-auto space-x-6 pb-8 px-6 lg:px-0 max-w-7xl mx-auto scrollbar-hide snap-x snap-mandatory reveal delay-200">

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-brand-200 transition-colors">
<div className="flex gap-1 text-yellow-400 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-6 text-lg italic">
            "Professionali dal primo sopralluogo all'installazione. Ho dimezzato
            la bolletta già dal primo mese. Consigliatissimi!"
          </p>
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/100?img=12"/>
<div>
<p className="font-semibold text-slate-900">Marco Bianchi</p>
<p className="text-sm text-slate-500">Milano, MI</p>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-brand-200 transition-colors">
<div className="flex gap-1 text-yellow-400 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-6 text-lg italic">
            "L'impianto con accumulo mi permette di essere quasi totalmente
            autonomo. Servizio clienti impeccabile."
          </p>
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/100?img=5"/>
<div>
<p className="font-semibold text-slate-900">Laura Verdi</p>
<p className="text-sm text-slate-500">Bergamo, BG</p>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-brand-200 transition-colors">
<div className="flex gap-1 text-yellow-400 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-6 text-lg italic">
            "Installazione veloce e pulita. I pannelli sono esteticamente belli
            e performanti. Ottimo investimento."
          </p>
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/100?img=68"/>
<div>
<p className="font-semibold text-slate-900">Giovanni Rossi</p>
<p className="text-sm text-slate-500">Roma, RM</p>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-brand-200 transition-colors">
<div className="flex gap-1 text-yellow-400 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-6 text-lg italic">
            "Finalmente la mia azienda ha abbattuto i costi fissi. Un partner
            affidabile per il business."
          </p>
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/100?img=32"/>
<div>
<p className="font-semibold text-slate-900">Elena Neri</p>
<p className="text-sm text-slate-500">Torino, TO</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 pt-24 pb-12" id="contatti">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-12 border-b border-slate-800 pb-16">

<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6 text-white">
<div className="bg-brand-500 p-1.5 rounded-lg">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<span className="font-bold text-xl tracking-tight">
                Solar Life Line
              </span>
</div>
<p className="text-slate-400 text-base mb-6">
              Leader nelle soluzioni di energia rinnovabile per un futuro più
              pulito e sostenibile.
            </p>
<div className="flex gap-4">
<a className="p-2 bg-slate-800 rounded-full hover:bg-brand-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="p-2 bg-slate-800 rounded-full hover:bg-brand-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="p-2 bg-slate-800 rounded-full hover:bg-brand-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
</div>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Azienda</h4>
<ul className="space-y-4">
<li>
<a className="hover:text-brand-400 transition-colors" href="#">
                  Chi Siamo
                </a>
</li>
<li>
<a className="hover:text-brand-400 transition-colors" href="#">
                  Servizi
                </a>
</li>
<li>
<a className="hover:text-brand-400 transition-colors" href="#">
                  Progetti
                </a>
</li>
<li>
<a className="hover:text-brand-400 transition-colors" href="#">
                  Lavora con noi
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Contatti</h4>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-brand-500" data-lucide="map-pin"></i>
                Via Roma 10, Milano
              </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-brand-500" data-lucide="phone"></i>
                +39 02 1234567
              </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-brand-500" data-lucide="mail"></i>
                info@solarlifeline.it
              </li>
</ul>
</div>

<div className="bg-slate-800 rounded-2xl overflow-hidden h-48">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.532326759132!2d9.188540!3d45.464664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6a4cb955555%3A0x2352b22668582236!2sDuomo%20di%20Milano!5e0!3m2!1sit!2sit!4v1620000000000!5m2!1sit!2sit" style={{border: '0', opacity: '0.8', filter: 'grayscale(100%) invert(90%)'}} width="100%"></iframe>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
<p>
            © 2023 Solar Life Line. Tutti i diritti riservati. P.IVA
            12345678901
          </p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-white transition-colors" href="#">
              Cookie Policy
            </a>
</div>
</div>
</div>
</footer>



    </>
  );
}
