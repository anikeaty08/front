import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Plus Jakarta Sans', 'sans-serif'],
},
colors: {
primary: {
50: '#ecfdf5',
100: '#d1fae5',
200: '#a7f3d0',
300: '#6ee7b7',
400: '#34d399',
500: '#10b981', // Emerald 500
600: '#059669',
700: '#047857',
800: '#065f46', // Dark Green
900: '#064e3b',
},
teal: {
400: '#2dd4bf',
500: '#14b8a6',
},
dark: {
900: '#111827',
800: '#1f2937',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
},
boxShadow: {
'glow': '0 0 40px -10px rgba(16, 185, 129, 0.3)',
'glow-lg': '0 0 60px -15px rgba(16, 185, 129, 0.4)',
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-teal-500 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
<i className="w-5 h-5 fill-current" data-lucide="message-circle"></i>
</div>
<span className="font-display font-bold text-xl tracking-tight text-gray-900">Floww</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors" href="#how-it-works">Come funziona</a>
<a className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors" href="#features">Caratteristiche</a>
<a className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors" href="#testimonials">Testimonianze</a>
<a className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors" href="#pricing">Prezzi</a>
<a className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40" href="#start">
                    Inizia gratis
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<button className="md:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-50/50 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold tracking-wide uppercase">
<span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse"></span>
                        🚀 Il tuo WhatsApp Business API in 48 ore
                    </div>
<h1 className="font-display font-bold text-5xl lg:text-7xl leading-[1.1] tracking-tight text-gray-900">
                        WhatsApp Marketing per la tua <span className="text-gradient">Azienda</span>
</h1>
<p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                        Automatizza la comunicazione con i tuoi clienti, aumenta le conversioni e risparmia tempo con la potenza di WhatsApp Business API.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<ul className="space-y-3">
<li className="flex items-center gap-3 text-gray-700 font-medium">
<div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
<i className="w-3.5 h-3.5" data-lucide="zap"></i>
</div>
                                Setup in 48 ore
                            </li>
<li className="flex items-center gap-3 text-gray-700 font-medium">
<div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
<i className="w-3.5 h-3.5" data-lucide="wallet"></i>
</div>
                                A partire da 39€/mese
                            </li>
</ul>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-gray-700 font-medium">
<div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
<i className="w-3.5 h-3.5" data-lucide="handshake"></i>
</div>
                                Supporto italiano dedicato
                            </li>
</ul>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-primary-600 to-teal-500 hover:to-primary-600 text-white px-8 py-4 rounded-2xl text-base font-semibold transition-all shadow-glow hover:shadow-glow-lg hover:-translate-y-1" href="#">
                            Inizia ora gratis
                        </a>
<a className="inline-flex justify-center items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 px-8 py-4 rounded-2xl text-base font-semibold transition-all hover:-translate-y-1" href="#">
<i className="w-5 h-5" data-lucide="play-circle"></i>
                            Guarda come funziona
                        </a>
</div>
<p className="text-sm text-gray-500 font-medium">✅ Già scelto da 200+ aziende italiane</p>
</div>

<div className="relative group perspective-1000">

<div className="absolute inset-0 bg-gradient-to-tr from-primary-400 to-teal-300 rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>

<div className="relative bg-white border border-gray-100 rounded-3xl shadow-2xl overflow-hidden transform group-hover:rotate-y-2 group-hover:rotate-x-2 transition-transform duration-500 ease-out">

<div className="h-12 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="mx-auto w-32 h-2 bg-gray-200 rounded-full opacity-50"></div>
</div>

<div className="flex h-[400px]">

<div className="w-16 bg-gray-50 border-r border-gray-100 flex flex-col items-center py-4 gap-6">
<div className="w-8 h-8 rounded-lg bg-primary-500/10 text-primary-600 flex items-center justify-center"><i className="w-4 h-4" data-lucide="layout-dashboard"></i></div>
<div className="w-8 h-8 rounded-lg text-gray-400 flex items-center justify-center"><i className="w-4 h-4" data-lucide="users"></i></div>
<div className="w-8 h-8 rounded-lg text-gray-400 flex items-center justify-center"><i className="w-4 h-4" data-lucide="message-square"></i></div>
<div className="w-8 h-8 rounded-lg text-gray-400 flex items-center justify-center"><i className="w-4 h-4" data-lucide="settings"></i></div>
</div>

<div className="flex-1 p-6 bg-white relative">
<div className="flex justify-between items-center mb-6">
<div>
<div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
<div className="h-3 w-20 bg-gray-100 rounded"></div>
</div>
<div className="px-3 py-1 bg-primary-50 text-primary-600 text-xs font-semibold rounded-full">Active Campaign</div>
</div>

<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100"></div>
<div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none max-w-[80%]">
<div className="h-2 w-48 bg-gray-300 rounded mb-2 opacity-60"></div>
<div className="h-2 w-32 bg-gray-300 rounded opacity-60"></div>
</div>
</div>
<div className="flex items-start gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-primary-100"></div>
<div className="bg-primary-500 p-3 rounded-2xl rounded-tr-none max-w-[80%]">
<div className="h-2 w-40 bg-white/50 rounded mb-2"></div>
<div className="h-2 w-24 bg-white/50 rounded"></div>
</div>
</div>
<div className="flex items-start gap-3 mt-8">
<div className="w-8 h-8 rounded-full bg-gray-100"></div>
<div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none max-w-[80%] flex items-center gap-2">
<div className="h-2 w-24 bg-gray-300 rounded opacity-60"></div>
<i className="w-3 h-3 text-primary-500" data-lucide="check"></i>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<i className="w-5 h-5" data-lucide="trending-up"></i>
</div>
<div>
<div className="text-xs text-gray-500 font-medium">Conversion Rate</div>
<div className="text-lg font-bold text-gray-900">+38%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 bg-primary-50/50 border-y border-primary-100/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-semibold text-gray-500 mb-6 tracking-wide">UTILIZZATO DA AZIENDE LEADER</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-xl font-bold font-display text-gray-800">ACME Corp</div>
<div className="text-xl font-bold font-display text-gray-800 flex items-center gap-1"><i className="fill-current w-5 h-5" data-lucide="hexagon"></i> Nexus</div>
<div className="text-xl font-bold font-display text-gray-800">Starlight</div>
<div className="text-xl font-bold font-display text-gray-800 flex items-center gap-1"><i className="fill-current w-5 h-5" data-lucide="triangle"></i> VORTEX</div>
<div className="text-xl font-bold font-display text-gray-800">GlobalShift</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-gray-900 mb-4">I numeri che contano</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="mail-open"></i>
</div>
<div className="text-5xl font-bold font-display text-gradient mb-2">+99%</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Tasso di apertura messaggi</h3>
<p className="text-sm text-gray-500 leading-relaxed">WhatsApp ha un tasso di apertura del 99%, contro il 20% delle email tradizionali.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 delay-75">
<div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<div className="text-5xl font-bold font-display text-gradient mb-2">+60%</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Conversioni in più</h3>
<p className="text-sm text-gray-500 leading-relaxed">Le aziende che usano WhatsApp vedono un aumento medio del 60% nelle conversioni.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 delay-150">
<div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<div className="text-5xl font-bold font-display text-gradient mb-2">+38%</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Risposta più veloce</h3>
<p className="text-sm text-gray-500 leading-relaxed">I clienti rispondono il 38% più velocemente su WhatsApp rispetto ad altri canali.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-200" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-gray-900 mb-6">
                    Tutto quello che ti serve per crescere su WhatsApp
                </h2>
<p className="text-lg text-gray-600">
                    Floww è la soluzione all-in-one per gestire il tuo WhatsApp Business senza complicazioni.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="md:col-span-2 group relative overflow-hidden rounded-[2rem] bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
<div className="absolute top-6 right-6 z-10">
<span className="px-3 py-1 text-xs font-semibold bg-primary-100 text-primary-700 rounded-full">Più popolare</span>
</div>
<div className="p-8 h-full flex flex-col">
<div className="mb-auto">
<div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4"><i className="w-5 h-5" data-lucide="megaphone"></i></div>
<h3 className="text-xl font-bold font-display text-gray-900 mb-2">Campagne WhatsApp automatiche</h3>
<ul className="space-y-2 text-sm text-gray-500">
<li className="flex items-center gap-2"><i className="w-3 h-3 text-primary-500" data-lucide="check"></i> Crea campagne broadcast</li>
<li className="flex items-center gap-2"><i className="w-3 h-3 text-primary-500" data-lucide="check"></i> Segmenta il pubblico</li>
<li className="flex items-center gap-2"><i className="w-3 h-3 text-primary-500" data-lucide="check"></i> Traccia conversioni</li>
</ul>
</div>

<div className="mt-8 bg-gray-50 border border-gray-100 rounded-xl p-4 w-full h-32 relative overflow-hidden group-hover:scale-[1.02] transition-transform">
<div className="flex flex-col gap-2">
<div className="w-full h-8 bg-white rounded-lg shadow-sm"></div>
<div className="w-3/4 h-8 bg-white rounded-lg shadow-sm"></div>
<div className="w-full h-8 bg-white rounded-lg shadow-sm"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 group rounded-[2rem] bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all p-8 flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-4"><i className="w-5 h-5" data-lucide="message-circle"></i></div>
<h3 className="text-xl font-bold font-display text-gray-900 mb-2">Chat 1-to-1</h3>
<p className="text-sm text-gray-500">Gestisci conversazioni reali con una casella di posta condivisa.</p>
</div>
<div className="mt-6 flex justify-end">
<div className="w-3/4 bg-teal-50 p-3 rounded-l-xl rounded-tr-xl border border-teal-100">
<div className="h-2 w-full bg-teal-200/50 rounded mb-2"></div>
<div className="h-2 w-1/2 bg-teal-200/50 rounded"></div>
</div>
</div>
</div>

<div className="md:col-span-1 group rounded-[2rem] bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all p-8">
<div className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-4"><i className="w-5 h-5" data-lucide="star"></i></div>
<h3 className="text-xl font-bold font-display text-gray-900 mb-2">Sistema fedeltà</h3>
<p className="text-sm text-gray-500 mb-4">Punti fedeltà automatici per ogni acquisto via chat.</p>
<div className="flex items-center gap-2 text-yellow-600 font-bold text-xl">
<span className="text-3xl">500</span> Punti
                    </div>
</div>

<div className="md:col-span-2 group rounded-[2rem] bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all p-8">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
<div>
<h3 className="text-xl font-bold font-display text-gray-900">WhatsApp vs Email Marketing</h3>
<p className="text-sm text-gray-500">Il confronto non regge.</p>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="text-xs text-gray-500 uppercase bg-gray-50">
<tr>
<th className="px-4 py-3 rounded-l-lg">Metrica</th>
<th className="px-4 py-3 text-primary-600 font-bold">WhatsApp</th>
<th className="px-4 py-3 text-gray-400 rounded-r-lg">Email</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr>
<td className="px-4 py-3 font-medium text-gray-900">Tasso apertura</td>
<td className="px-4 py-3 text-primary-600 font-bold">99% ✅</td>
<td className="px-4 py-3 text-gray-400">20% ❌</td>
</tr>
<tr>
<td className="px-4 py-3 font-medium text-gray-900">Risposta media</td>
<td className="px-4 py-3 text-primary-600 font-bold">90 sec ✅</td>
<td className="px-4 py-3 text-gray-400">90 min ❌</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-gray-900 mb-4">Come funziona la WhatsApp API</h2>
<p className="text-lg text-gray-600">Semplice, veloce, senza complicazioni tecniche</p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-gray-200 via-primary-200 to-gray-200 -z-10"></div>

<div className="relative bg-white pt-8">
<div className="w-24 h-24 mx-auto bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10">
<div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
<span className="font-display font-bold text-2xl">01</span>
</div>
</div>
<div className="text-center px-4">
<h3 className="text-xl font-bold font-display text-gray-900 mb-3">Richiedi l'attivazione</h3>
<p className="text-gray-500 text-sm leading-relaxed">Compila il form e inviaci i documenti richiesti da Meta. Ti guidiamo in ogni passaggio.</p>
</div>
</div>

<div className="relative bg-white pt-8">
<div className="w-24 h-24 mx-auto bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10">
<div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
<span className="font-display font-bold text-2xl">02</span>
</div>
</div>
<div className="text-center px-4">
<h3 className="text-xl font-bold font-display text-gray-900 mb-3">Configuriamo tutto noi</h3>
<p className="text-gray-500 text-sm leading-relaxed">Il nostro team tecnico configura il tuo account WhatsApp Business API in massimo 48 ore.</p>
</div>
</div>

<div className="relative bg-white pt-8">
<div className="w-24 h-24 mx-auto bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10">
<div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
<span className="font-display font-bold text-2xl">03</span>
</div>
</div>
<div className="text-center px-4">
<h3 className="text-xl font-bold font-display text-gray-900 mb-3">Inizia a vendere</h3>
<p className="text-gray-500 text-sm leading-relaxed">Accedi alla dashboard, crea la tua prima campagna e inizia a contattare i tuoi clienti.</p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex justify-center items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-lg hover:shadow-primary-500/30" href="#start">
                    Richiedi attivazione ora <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-primary-50/30">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="font-display font-bold text-3xl text-gray-900 mb-4">Prezzi semplici e trasparenti</h2>
<p className="text-gray-600">Niente costi nascosti. Niente sorprese. Solo WhatsApp marketing che funziona.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white rounded-3xl p-8 border border-red-100 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-2 bg-red-400"></div>
<h3 className="text-xl font-bold text-gray-900 mb-6">Setup Tradizionale</h3>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-gray-600 text-sm">
<i className="w-5 h-5 text-red-500 shrink-0" data-lucide="x"></i> Costo attivazione: 500-2000€
                        </li>
<li className="flex items-start gap-3 text-gray-600 text-sm">
<i className="w-5 h-5 text-red-500 shrink-0" data-lucide="x"></i> Costi mensili minimi: 200-500€
                        </li>
<li className="flex items-start gap-3 text-gray-600 text-sm">
<i className="w-5 h-5 text-red-500 shrink-0" data-lucide="x"></i> Setup tecnico complesso
                        </li>
<li className="flex items-start gap-3 text-gray-600 text-sm">
<i className="w-5 h-5 text-red-500 shrink-0" data-lucide="x"></i> Nessun supporto italiano
                        </li>
</ul>
<div className="mt-auto p-4 bg-red-50 rounded-xl text-center border border-red-100">
<p className="text-xs text-red-600 uppercase font-bold tracking-wider">Totale Stimato</p>
<p className="text-2xl font-bold text-red-700">Da 700€+ /mese</p>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-primary-200 shadow-xl shadow-primary-500/10 relative overflow-hidden transform md:-translate-y-4">
<div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">CONSIGLIATO</div>
<div className="absolute top-0 left-0 w-full h-2 bg-primary-500"></div>
<h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">Con Floww <span className="text-2xl">💚</span></h3>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-gray-700 text-sm font-medium">
<i className="w-5 h-5 text-primary-500 shrink-0" data-lucide="check-circle-2"></i> Setup incluso: 0€
                        </li>
<li className="flex items-start gap-3 text-gray-700 text-sm font-medium">
<i className="w-5 h-5 text-primary-500 shrink-0" data-lucide="check-circle-2"></i> Canone fisso: 39€/mese
                        </li>
<li className="flex items-start gap-3 text-gray-700 text-sm font-medium">
<i className="w-5 h-5 text-primary-500 shrink-0" data-lucide="check-circle-2"></i> Dashboard pronta all'uso
                        </li>
<li className="flex items-start gap-3 text-gray-700 text-sm font-medium">
<i className="w-5 h-5 text-primary-500 shrink-0" data-lucide="check-circle-2"></i> Supporto italiano dedicato
                        </li>
</ul>
<div className="mt-auto p-4 bg-primary-50 rounded-xl text-center border border-primary-100">
<p className="text-xs text-primary-600 uppercase font-bold tracking-wider">Tuo Prezzo</p>
<p className="text-3xl font-bold text-primary-600">Da 39€/mese</p>
<p className="text-xs text-primary-400 mt-1">💰 Risparmi fino all'80%</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-900 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="bg-dark-800 border border-dark-800 rounded-3xl p-6 shadow-2xl relative order-2 lg:order-1">
<div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-teal-600 rounded-3xl blur opacity-20"></div>
<div className="relative bg-dark-800 rounded-2xl overflow-hidden min-h-[400px] flex flex-col">

<div className="p-4 border-b border-gray-700 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-teal-400 flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="bot"></i>
</div>
<div>
<div className="font-bold">AI Assistant</div>
<div className="text-xs text-primary-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span> Online</div>
</div>
</div>

<div className="flex-1 p-4 space-y-4">
<div className="bg-gray-700/50 self-start rounded-2xl rounded-tl-none p-3 max-w-[80%] text-sm text-gray-200">
                                Ciao! Come posso aiutarti oggi con i nostri servizi?
                            </div>
<div className="bg-primary-600 self-end ml-auto rounded-2xl rounded-tr-none p-3 max-w-[80%] text-sm text-white">
                                Vorrei sapere i prezzi per il piano Professional.
                            </div>
<div className="bg-gray-700/50 self-start rounded-2xl rounded-tl-none p-3 max-w-[80%] text-sm text-gray-200">
<span className="block mb-2">Il piano Professional costa 79€/mese e include:</span>
<ul className="list-disc list-inside space-y-1 text-gray-300">
<li>3 Numeri WhatsApp</li>
<li>AI Chatbot avanzato</li>
<li>Automazioni illimitate</li>
</ul>
<button className="mt-3 bg-white text-dark-900 px-4 py-2 rounded-lg text-xs font-bold hover:bg-gray-100 w-full">Attiva ora</button>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-900/50 border border-primary-700 text-primary-300 text-xs font-semibold mb-6">
<i className="w-3 h-3" data-lucide="sparkles"></i> Powered by AI
                    </div>
<h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight mb-6">
                        Agenti AI che lavorano <span className="text-gradient-light">24/7</span>
</h2>
<p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Il tuo assistente virtuale che risponde ai clienti, qualifica lead e chiude vendite mentre dormi. Capisce il linguaggio naturale e si adatta al tuo brand.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-gray-300">
<div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-primary-400"><i className="w-4 h-4" data-lucide="message-square"></i></div>
                            Risposte automatiche intelligenti
                        </li>
<li className="flex items-center gap-3 text-gray-300">
<div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-primary-400"><i className="w-4 h-4" data-lucide="target"></i></div>
                            Qualificazione lead automatica
                        </li>
<li className="flex items-center gap-3 text-gray-300">
<div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-primary-400"><i className="w-4 h-4" data-lucide="globe"></i></div>
                            Supporto multilingua istantaneo
                        </li>
</ul>
<a className="text-primary-300 font-semibold hover:text-white flex items-center gap-2 transition-colors" href="#demo">
                        Scopri gli AI Agents <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-gray-900 mb-4">Scegli il piano perfetto per te</h2>
<p className="text-gray-600">Tutti i piani includono setup gratuito e 7 giorni di prova senza carta.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-gray-300 transition-all hover:shadow-lg">
<h3 className="font-bold text-xl text-gray-900">Starter</h3>
<p className="text-sm text-gray-500 mb-6">Perfetto per iniziare</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-gray-900">39€</span>
<span className="text-gray-500">/mese</span>
</div>
<a className="block w-full py-3 px-4 bg-gray-50 text-gray-900 font-semibold rounded-xl text-center hover:bg-gray-100 transition-colors mb-8 border border-gray-200" href="#">Inizia gratis</a>
<ul className="space-y-4 text-sm text-gray-600">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-primary-500" data-lucide="check"></i> 1 numero WhatsApp Business</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-primary-500" data-lucide="check"></i> 1000 conversazioni/mese</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-primary-500" data-lucide="check"></i> Dashboard completa</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-primary-500" data-lucide="check"></i> Broadcast illimitati</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-primary-500" data-lucide="check"></i> Supporto email</li>
</ul>
</div>

<div className="bg-white border-2 border-primary-500 rounded-3xl p-8 shadow-xl shadow-primary-500/10 relative transform md:-translate-y-4">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Più popolare</div>
<h3 className="font-bold text-xl text-gray-900">Professional ⭐</h3>
<p className="text-sm text-gray-500 mb-6">Per aziende in crescita</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-gray-900">79€</span>
<span className="text-gray-500">/mese</span>
</div>
<a className="block w-full py-3 px-4 bg-primary-600 text-white font-semibold rounded-xl text-center hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30 mb-8" href="#">Inizia gratis</a>
<ul className="space-y-4 text-sm text-gray-600">
<li className="flex items-center gap-3"><span className="font-semibold text-primary-600">Tutto Starter più:</span></li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-primary-500" data-lucide="check"></i> 3 numeri WhatsApp</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-primary-500" data-lucide="check"></i> 3000 conversazioni/mese</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-primary-500" data-lucide="check"></i> AI Chatbot avanzato</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-primary-500" data-lucide="check"></i> Supporto prioritario</li>
</ul>
</div>

<div className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-gray-300 transition-all hover:shadow-lg">
<h3 className="font-bold text-xl text-gray-900">Enterprise</h3>
<p className="text-sm text-gray-500 mb-6">Per grandi volumi</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-gray-900">Custom</span>
</div>
<a className="block w-full py-3 px-4 bg-gray-900 text-white font-semibold rounded-xl text-center hover:bg-gray-800 transition-colors mb-8" href="#">Contattaci</a>
<ul className="space-y-4 text-sm text-gray-600">
<li className="flex items-center gap-3"><span className="font-semibold text-gray-900">Tutto Professional più:</span></li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-primary-500" data-lucide="check"></i> Numeri illimitati</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-primary-500" data-lucide="check"></i> Conversazioni illimitate</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-primary-500" data-lucide="check"></i> Account manager dedicato</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-primary-500" data-lucide="check"></i> SLA garantito</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-display font-bold text-3xl text-center mb-12">Storie di successo</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
<div className="relative h-48 bg-gray-200 rounded-xl mb-4 overflow-hidden">
<img alt="Video thumb" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
<div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg backdrop-blur">
<i className="w-5 h-5 text-gray-900 fill-current" data-lucide="play"></i>
</div>
</div>
</div>
<p className="text-gray-800 italic mb-4">"Prima spendevo migliaia di euro al mese, ora ho un sistema automatico che lavora per me."</p>
<div className="flex items-center gap-3">
<div className="font-semibold text-sm">Paolo Barberini</div>
<div className="text-gray-400 text-xs">Visione Academy</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
<div className="relative h-48 bg-gray-200 rounded-xl mb-4 overflow-hidden">
<img alt="Video thumb" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
<div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg backdrop-blur">
<i className="w-5 h-5 text-gray-900 fill-current" data-lucide="play"></i>
</div>
</div>
</div>
<p className="text-gray-800 italic mb-4">"Ho ricevuto un abito cucito su misura per il mio ecommerce. Fantastico."</p>
<div className="flex items-center gap-3">
<div className="font-semibold text-sm">Giuseppe Bonina</div>
<div className="text-gray-400 text-xs">Bonina SRL</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
<div className="relative h-48 bg-gray-200 rounded-xl mb-4 overflow-hidden">
<img alt="Video thumb" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
<div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg backdrop-blur">
<i className="w-5 h-5 text-gray-900 fill-current" data-lucide="play"></i>
</div>
</div>
</div>
<p className="text-gray-800 italic mb-4">"Gestione clienti in un unico posto. Il team di supporto è eccezionale."</p>
<div className="flex items-center gap-3">
<div className="font-semibold text-sm">Irene Maddalena</div>
<div className="text-gray-400 text-xs">Inizio Impresa</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-display font-bold text-3xl text-center mb-12">Domande frequenti</h2>
<div className="space-y-4">
<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 bg-white border border-gray-200 rounded-2xl cursor-pointer hover:bg-gray-50 transition-colors">
<h3 className="font-semibold text-gray-900">Cos'è la WhatsApp Business API?</h3>
<span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
<i className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity" data-lucide="plus"></i>
<i className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity" data-lucide="minus"></i>
</span>
</summary>
<div className="p-6 pt-0 border border-t-0 border-gray-200 rounded-b-2xl text-gray-600 bg-gray-50/50">
                        È la soluzione ufficiale di Meta per le medie e grandi aziende che vogliono gestire volumi elevati di messaggi, utilizzare automazioni e integrare WhatsApp con i propri software aziendali.
                    </div>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 bg-white border border-gray-200 rounded-2xl cursor-pointer hover:bg-gray-50 transition-colors">
<h3 className="font-semibold text-gray-900">Quanto tempo ci vuole per l'attivazione?</h3>
<span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
<i className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity" data-lucide="plus"></i>
<i className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity" data-lucide="minus"></i>
</span>
</summary>
<div className="p-6 pt-0 border border-t-0 border-gray-200 rounded-b-2xl text-gray-600 bg-gray-50/50">
                        Generalmente completiamo il setup tecnico e la verifica del business in 24-48 ore lavorative.
                    </div>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 bg-white border border-gray-200 rounded-2xl cursor-pointer hover:bg-gray-50 transition-colors">
<h3 className="font-semibold text-gray-900">Posso usare il mio numero esistente?</h3>
<span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
<i className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity" data-lucide="plus"></i>
<i className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity" data-lucide="minus"></i>
</span>
</summary>
<div className="p-6 pt-0 border border-t-0 border-gray-200 rounded-b-2xl text-gray-600 bg-gray-50/50">
                        Sì, è possibile migrare un numero esistente sulla Business API, ma dovrai prima cancellare l'account WhatsApp app da quel numero.
                    </div>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 bg-white border border-gray-200 rounded-2xl cursor-pointer hover:bg-gray-50 transition-colors">
<h3 className="font-semibold text-gray-900">Avete supporto in italiano?</h3>
<span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
<i className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity" data-lucide="plus"></i>
<i className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity" data-lucide="minus"></i>
</span>
</summary>
<div className="p-6 pt-0 border border-t-0 border-gray-200 rounded-b-2xl text-gray-600 bg-gray-50/50">
                        Assolutamente sì. Il nostro team di supporto è basato in Italia e risponde in italiano.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-teal-800 -z-20"></div>
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 -z-10"></div>
<div className="max-w-4xl mx-auto text-center text-white">
<h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-6">Pronto a far crescere il tuo business?</h2>
<p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">Unisciti a 200+ aziende che usano Floww per automatizzare WhatsApp e aumentare le vendite.</p>
<form className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto mb-8">
<input className="px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300 w-full" placeholder="La tua email aziendale" required="" type="email"/>
<button className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-xl font-bold whitespace-nowrap transition-colors shadow-lg" type="submit">Inizia gratis</button>
</form>
<div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-primary-200/80 font-medium">
<span className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="check"></i> Nessuna carta richiesta</span>
<span className="hidden md:inline">•</span>
<span className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="clock"></i> Setup in 48h</span>
<span className="hidden md:inline">•</span>
<span className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="unlock"></i> Cancella quando vuoi</span>
</div>
<div className="mt-12 flex justify-center gap-8 opacity-70 grayscale">

<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="shield-check"></i> <span className="font-bold">Sicuro</span></div>
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="flag"></i> <span className="font-bold">Made in Italy</span></div>
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="star"></i> <span className="font-bold">4.9/5 Rating</span></div>
</div>
</div>
</section>

<footer className="bg-dark-900 text-gray-400 py-16 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">

<div className="space-y-4">
<div className="flex items-center gap-2 text-white mb-4">
<div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-teal-500 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5 fill-current" data-lucide="message-circle"></i>
</div>
<span className="font-display font-bold text-xl">Floww</span>
</div>
<p className="text-sm">WhatsApp Marketing semplificato per aziende ambiziose.</p>
<div className="flex gap-4 pt-2">
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>

<div>
<h4 className="text-white font-bold mb-6">Prodotto</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-primary-400 transition-colors" href="#">Caratteristiche</a></li>
<li><a className="hover:text-primary-400 transition-colors" href="#">Prezzi</a></li>
<li><a className="hover:text-primary-400 transition-colors" href="#">Come funziona</a></li>
<li><a className="hover:text-primary-400 transition-colors" href="#">Integrazioni</a></li>
<li><a className="hover:text-primary-400 transition-colors" href="#">API Docs</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-6">Risorse</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-primary-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-primary-400 transition-colors" href="#">Case studies</a></li>
<li><a className="hover:text-primary-400 transition-colors" href="#">Guide</a></li>
<li><a className="hover:text-primary-400 transition-colors" href="#">Webinar</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-6">Azienda</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-primary-400 transition-colors" href="#">Chi siamo</a></li>
<li><a className="hover:text-primary-400 transition-colors" href="#">Contatti</a></li>
<li><a className="hover:text-primary-400 transition-colors" href="#">Lavora con noi</a></li>
<li><a className="hover:text-primary-400 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<div>© 2025 Floww by Good Company Ltd. Tutti i diritti riservati.</div>
<div>P.IVA: BG206881490</div>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Cookie</a>
<a className="hover:text-white" href="#">Termini</a>
</div>
</div>
</footer>


    </>
  );
}
