import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="block w-40 md:w-48 hover:opacity-80 transition-opacity" href="#">
<img alt="Kinesio Clinic Logo" className="w-full h-auto" src="https://www.kinesioclinic.it/wp-content/uploads/2021/08/Esec-Kinesio.png"/>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-semibold text-slate-900 hover:text-red-600 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-500 hover:text-red-600 transition-colors" href="#chi-siamo">Chi Siamo</a>
<a className="text-sm font-medium text-slate-500 hover:text-red-600 transition-colors" href="#servizi">Servizi</a>
<a className="text-sm font-medium text-slate-500 hover:text-red-600 transition-colors" href="#team">Team</a>
</nav>

<div className="flex items-center gap-4">

<a className="hidden md:inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-red-700 transition-all shadow-lg shadow-red-600/20 hover:shadow-xl hover:-translate-y-0.5" href="#contatti">
<span>Contattaci</span>
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<button className="md:hidden text-slate-900 p-2">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-bold uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                    Milano Centro
                </div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                    Eccellenza <br/>
<span className="text-gradient">Ortopedica</span> e <br/>
                    Riabilitativa.
                </h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                    Benvenuti in Kinesio Clinic. Un centro medico specializzato nella diagnosi, cura e riabilitazione delle patologie muscoloscheletriche.
                </p>
<div className="flex flex-wrap gap-4 pt-2">

<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-red-600 text-white font-semibold hover:bg-red-500 transition-all shadow-lg shadow-red-900/10 hover:shadow-red-900/20" href="#servizi">
                        I Nostri Servizi
                        <iconify-icon icon="solar:stethoscope-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 hover:text-red-600 transition-all" href="#chi-siamo">
                        Scopri di più
                        <iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</a>
</div>

<div className="pt-8 flex items-center gap-8 border-t border-slate-100">
<div>
<p className="text-2xl font-bold text-slate-900">100%</p>
<p className="text-sm text-slate-500 font-medium">Recupero Funzionale</p>
</div>
<div className="w-px h-10 bg-slate-200"></div>
<div>
<p className="text-2xl font-bold text-slate-900">Milano</p>
<p className="text-sm text-slate-500 font-medium">Viale Belisario 9</p>
</div>
</div>
</div>

<div className="relative">

<div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-[2.5rem] blur-2xl -z-10"></div>
<img alt="Kinesio Clinic Interior" className="rounded-[2rem] shadow-2xl w-full object-cover h-[500px] lg:h-[600px] border border-slate-100" src="https://www.kinesioclinic.it/wp-content/uploads/2025/11/001-scaled.jpg"/>

<div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
<div className="flex items-center gap-4">

<div className="p-3 bg-red-100 text-red-600 rounded-xl">
<iconify-icon height="24" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<div>
<p className="font-bold text-slate-900">Team Multidisciplinare</p>
<p className="text-sm text-slate-500">Al vostro servizio per un percorso personalizzato.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="chi-siamo">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Perché scegliere Kinesio</h2>
<p className="text-slate-500 text-lg">Uniamo competenza medica e tecnologie avanzate per garantire il miglior risultato terapeutico.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-red-100 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors shadow-sm">
<iconify-icon height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Location</h3>
<p className="text-slate-500 text-sm leading-relaxed">Nel cuore di Milano, comodo da raggiungere con la metropolitana (Viale Belisario 9).</p>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-red-100 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors shadow-sm">
<iconify-icon height="24" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Tecnologie Avanzate</h3>
<p className="text-slate-500 text-sm leading-relaxed">Apparecchiature di ultima generazione per diagnosi e terapie precise.</p>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-red-100 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors shadow-sm">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Team Esperto</h3>
<p className="text-slate-500 text-sm leading-relaxed">I migliori professionisti del settore al servizio della tua salute.</p>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-red-100 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors shadow-sm">
<iconify-icon height="24" icon="solar:wheelchair-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Easy Access</h3>
<p className="text-slate-500 text-sm leading-relaxed">Accesso facilitato e privo di barriere architettoniche per tutti i pazienti.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="servizi">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
<div>
<h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">I Nostri <span className="text-red-600">Servizi</span></h2>
</div>
<p className="text-lg text-slate-500 leading-relaxed">
                    KINESIO CLINIC offre visite specialistiche e trattamenti personalizzati per la diagnosi, la cura e la riabilitazione delle principali patologie muscoloscheletriche.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative bg-white rounded-[2rem] p-4 border border-slate-200 hover:border-red-200 hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-500 overflow-hidden">
<div className="aspect-video w-full rounded-3xl overflow-hidden mb-6 relative">
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10"></div>
<img alt="Visite Ortopediche" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://www.kinesioclinic.it/wp-content/uploads/2025/09/20250913_1802_Visita-Ortopedica-Realistica_remix_01k51ww4azf3jvd7gc1zasc82x.png"/>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-2xl font-bold text-slate-900">Visite Ortopediche</h3>
<span className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white group-hover:border-transparent transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</span>
</div>
<p className="text-slate-500 leading-relaxed">Visite specialistiche dedicate alle patologie articolari, con possibilità di infiltrazioni e programmazione chirurgica mirata.</p>
</div>
</div>

<div className="group relative bg-white rounded-[2rem] p-4 border border-slate-200 hover:border-red-200 hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-500 overflow-hidden">
<div className="aspect-video w-full rounded-3xl overflow-hidden mb-6 relative">
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10"></div>
<img alt="Riabilitazione Fisica" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://www.kinesioclinic.it/wp-content/uploads/elementor/thumbs/ChatGPT-Image-16-giu-2025-16_05_25-r7e9w9aq5xlv4lhmar6ub04g2ser39xnqxbu8sr3gc.png"/>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-2xl font-bold text-slate-900">Riabilitazione Fisica</h3>
<span className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white group-hover:border-transparent transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</span>
</div>
<p className="text-slate-500 leading-relaxed">Percorsi personalizzati per il recupero post-operatorio e post-traumatico, con ginnastica posturale e protocolli su misura.</p>
</div>
</div>

<div className="group relative bg-white rounded-[2rem] p-4 border border-slate-200 hover:border-red-200 hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-500 overflow-hidden">
<div className="aspect-video w-full rounded-3xl overflow-hidden mb-6 relative">
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10"></div>
<img alt="Tecarterapia" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://www.kinesioclinic.it/wp-content/uploads/elementor/thumbs/ChatGPT-Image-16-giu-2025-16_12_41-r7ea6pa63nwk4mbhb9pm0d8towxkm7eaima27h9mbg.png"/>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-2xl font-bold text-slate-900">Tecarterapia</h3>
<span className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white group-hover:border-transparent transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</span>
</div>
<p className="text-slate-500 leading-relaxed">Trattamento strumentale che stimola la circolazione e accelera i processi di guarigione, efficace per dolori e contratture.</p>
</div>
</div>

<div className="group relative bg-white rounded-[2rem] p-4 border border-slate-200 hover:border-red-200 hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-500 overflow-hidden">
<div className="aspect-video w-full rounded-3xl overflow-hidden mb-6 relative">
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10"></div>
<img alt="Onde d'urto" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://www.kinesioclinic.it/wp-content/uploads/elementor/thumbs/20250913_1822_Terapia-Onde-dUrto_remix_01k51y0vrnf2grnn4c0ftvc5yf-rbpczlw9yfm2nec7zde7wjb4pvmn4hnu5qryykvhh8.png"/>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-2xl font-bold text-slate-900">Onde d'urto</h3>
<span className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white group-hover:border-transparent transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</span>
</div>
<p className="text-slate-500 leading-relaxed">Terapia innovativa e non invasiva per ridurre dolore e infiammazioni croniche, ideale per tendiniti e calcificazioni.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">

<span className="text-red-600 font-bold tracking-wider text-sm uppercase mb-2 block">Professionisti</span>
<h2 className="text-3xl md:text-5xl font-bold text-slate-900">Il Nostro Team</h2>
<p className="text-slate-500 mt-4 text-lg">Professionisti del settore con anni di esperienza.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group">
<div className="aspect-square rounded-[2rem] overflow-hidden mb-6 relative bg-slate-100">
<img alt="Dott. Roberto Leo" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://www.kinesioclinic.it/wp-content/uploads/2025/11/007-600x600.jpg"/>
</div>
<h3 className="text-xl font-bold text-slate-900">Dott. Roberto Leo</h3>
<p className="text-red-600 font-medium mt-1">Ortopedico</p>
</div>

<div className="group">
<div className="aspect-square rounded-[2rem] overflow-hidden mb-6 relative bg-slate-100">
<img alt="Dott.ssa Roberta Galletti" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://www.kinesioclinic.it/wp-content/uploads/elementor/thumbs/008-rebf9yftuc7zfp8jp3kf0g3l9fz9cdejcw1odmdoog.jpg"/>
</div>
<h3 className="text-xl font-bold text-slate-900">Dott.ssa Roberta Galletti</h3>
<p className="text-red-600 font-medium mt-1">Fisiatra</p>
</div>

<div className="group">
<div className="aspect-square rounded-[2rem] overflow-hidden mb-6 relative bg-slate-100">
<img alt="Dott. Andrea Belvedere" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://www.kinesioclinic.it/wp-content/uploads/2025/11/010-600x600.jpg"/>
</div>
<h3 className="text-xl font-bold text-slate-900">Dott. Andrea Belvedere</h3>
<p className="text-red-600 font-medium mt-1">Fisioterapista</p>
</div>

<div className="group">
<div className="aspect-square rounded-[2rem] overflow-hidden mb-6 relative bg-slate-100">
<img alt="Dott.ssa Milena Tuccio" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://www.kinesioclinic.it/wp-content/uploads/2025/11/011-600x600.jpg"/>
</div>
<h3 className="text-xl font-bold text-slate-900">Dott.ssa Milena Tuccio</h3>
<p className="text-red-600 font-medium mt-1">Fisioterapista</p>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white pt-24 pb-12 rounded-t-[3rem]" id="contatti">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 mb-20">
<div>
<img alt="Logo White" className="h-16 w-auto mb-8 bg-white/10 rounded-lg p-2" src="https://www.kinesioclinic.it/wp-content/uploads/2025/06/Esec-Kinesio-fisio-alta-risoluzione.png"/>
<h2 className="text-3xl font-bold mb-6">Eccellenza ortopedica e riabilitativa nel cuore di Milano</h2>
<p className="text-slate-400 max-w-md leading-relaxed">
                        Prenota la tua visita o richiedi informazioni. Il nostro team è pronto ad accoglierti.
                    </p>
</div>
<div className="grid sm:grid-cols-2 gap-8">
<div>
<h4 className="text-lg font-semibold mb-6 text-white border-b border-white/10 pb-4 inline-block">Contatti</h4>
<ul className="space-y-4 text-slate-300">
<li className="flex items-center gap-3 group hover:text-red-400 transition-colors cursor-pointer">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
<span>02 36562840</span>
</li>
<li className="flex items-center gap-3 group hover:text-red-400 transition-colors cursor-pointer">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
<span>Info@kinesioclinic.it</span>
</li>
<li className="flex items-start gap-3 group hover:text-red-400 transition-colors cursor-pointer">
<iconify-icon className="mt-1" icon="solar:map-point-linear" width="20"></iconify-icon>
<span>Viale Belisario n.9<br/>Milano</span>
</li>
</ul>
</div>
<div>
<h4 className="text-lg font-semibold mb-6 text-white border-b border-white/10 pb-4 inline-block">Orari</h4>
<ul className="space-y-4 text-slate-300">
<li className="flex items-center gap-3">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
<span>Lun - Ven</span>
</li>
<li className="font-semibold text-white pl-8">14:00 - 20:00</li>
</ul>
</div>
</div>
</div>

<div className="w-full h-64 rounded-3xl overflow-hidden mb-12 grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100">
<iframe allowfullscreen="" className="w-full h-full border-0" loading="lazy" src="https://maps.google.com/maps?q=Kinesio%20clinic&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"></iframe>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
<p>© 2025 Kinesio Clinic. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-red-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-red-400 transition-colors" href="#">Cookie Policy</a>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all text-white" href="#">
<iconify-icon icon="brandico:facebook" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all text-white" href="#">
<iconify-icon icon="brandico:instagram" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
