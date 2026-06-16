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
},
colors: {
brand: {
bg: '#020617',     // Slate 950
surface: '#0f172a', // Slate 900
border: '#1e293b',  // Slate 800
blue: '#3b82f6',    // Bright Blue
orange: '#f6ad55',
gray: '#94a3b8',    // Slate 400
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
backgroundImage: {
'glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/[0.08] bg-brand-bg/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-white uppercase flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black text-xs font-bold">O</div>
                Onmarx
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#services">Leistungen</a>
<a className="hover:text-white transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-white transition-colors" href="#pricing">Preise</a>
<a className="hover:text-white transition-colors" href="#about">Über uns</a>
</div>
<div className="hidden md:flex items-center">
<a className="bg-white text-black px-5 py-2 rounded-full text-xs font-medium hover:bg-brand-orange transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(246,173,85,0.4)]" href="#contact">
                    Kontakt
                </a>
</div>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 bg-grid relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none opacity-40"></div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="absolute top-0 left-10 md:left-40 animate-[bounce_3s_infinite] opacity-30">
<iconify-icon className="text-indigo-400" icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<div className="absolute bottom-20 right-10 md:right-40 animate-[bounce_4s_infinite] opacity-30">
<iconify-icon className="text-rose-400" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-rose-400 text-xs font-medium mb-8 backdrop-blur-sm shadow-lg shadow-rose-900/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
                Neue Kapazitäten verfügbar
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 max-w-5xl mx-auto leading-[1.1]">
                Digitales Wachstum, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400">perfekt inszeniert.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                High-End Webdesign &amp; E-Commerce Lösungen. Wir verwandeln komplexe Anforderungen in elegante, konvertierende Nutzererlebnisse.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="sm:w-auto hover:bg-rose-500 transition-all hover:shadow-[0_0_30px_rgba(225,29,72,0.5)] flex items-center justify-center gap-2 group overflow-hidden font-medium text-white bg-rose-600 w-full rounded-lg pt-4 pr-8 pb-4 pl-8 relative shadow-[0_0_20px_rgba(225,29,72,0.3)]" href="#pricing">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-[100%]"></div>
                    Preise ansehen
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-medium transition-all flex items-center justify-center gap-2 backdrop-blur-sm" href="#portfolio">
                    Portfolio
                </a>
</div>
</div>
</header>

<section className="py-12 border-y border-white/[0.08] bg-brand-bg relative">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-500 uppercase tracking-widest mb-8">Technologie-Partner &amp; Expertise</p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-semibold tracking-tight text-white hover:text-white transition-colors">Shopware</span>
<span className="text-xl font-semibold tracking-tight text-white hover:text-white transition-colors">Shopify</span>
<span className="text-xl font-semibold tracking-tight text-white hover:text-white transition-colors">Webflow</span>
<span className="text-xl font-semibold tracking-tight text-white hover:text-white transition-colors">WordPress</span>
<span className="text-xl font-semibold tracking-tight text-white hover:text-white transition-colors">Magento</span>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tighter mb-4">Unsere Expertise</h2>
<p className="text-slate-400 max-w-xl text-lg">Ganzheitliche Lösungen von der Konzeption bis zum Launch.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white/[0.02] p-8 rounded-2xl border border-white/[0.05] hover:border-brand-blue/30 hover:bg-white/[0.04] transition-all group backdrop-blur-sm">
<div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors border border-blue-500/20 group-hover:border-blue-500">
<iconify-icon icon="solar:code-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-100 mb-3 tracking-tight">Website-Entwicklung</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">WordPress, Webflow &amp; individuelle Lösungen für jeden Anspruch. Skalierbar und sicher.</p>
</div>

<div className="bg-white/[0.02] p-8 rounded-2xl border border-white/[0.05] hover:border-brand-orange/30 hover:bg-white/[0.04] transition-all group backdrop-blur-sm">
<div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-400 mb-6 group-hover:bg-brand-orange group-hover:text-black transition-colors border border-orange-500/20 group-hover:border-brand-orange">
<iconify-icon icon="solar:cart-large-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-100 mb-3 tracking-tight">E-Commerce</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">Shopware, Magento, Shopify &amp; WooCommerce – Ihr Online-Shop, perfekt umgesetzt.</p>
</div>

<div className="bg-white/[0.02] p-8 rounded-2xl border border-white/[0.05] hover:border-purple-500/30 hover:bg-white/[0.04] transition-all group backdrop-blur-sm">
<div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors border border-purple-500/20 group-hover:border-purple-500">
<iconify-icon icon="solar:palette-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-100 mb-3 tracking-tight">UI/UX Design</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">Nutzerzentriertes Design, das konvertiert und begeistert. Wireframing bis High-Fidelity.</p>
</div>

<div className="bg-white/[0.02] p-8 rounded-2xl border border-white/[0.05] hover:border-teal-500/30 hover:bg-white/[0.04] transition-all group backdrop-blur-sm">
<div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-400 mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors border border-teal-500/20 group-hover:border-teal-500">
<iconify-icon icon="solar:rocket-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-100 mb-3 tracking-tight">Performance &amp; SEO</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">Schnelle Ladezeiten (Core Web Vitals) und optimale Sichtbarkeit in Suchmaschinen.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-bg px-6 border-t border-white/[0.08]" id="portfolio">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tighter mb-4">Ausgewählte Arbeiten</h2>
<p className="text-slate-400 max-w-xl text-lg">Ein Einblick in unsere neuesten Projekte.</p>
</div>
<div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-brand-orange transition-colors" href="#">
                        Alle Projekte ansehen
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl bg-brand-surface aspect-[4/3] mb-5 border border-white/[0.08]">
<img alt="Möbelhaus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
<div className="absolute bottom-4 left-4">
<span className="px-2 py-1 bg-white text-black text-[10px] font-bold uppercase rounded">Relaunch</span>
</div>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-1 group-hover:text-brand-orange transition-colors">Möbelhaus Bergmann</h3>
<p className="text-sm text-slate-500">Shopware 6 Relaunch • E-Commerce</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl bg-brand-surface aspect-[4/3] mb-5 border border-white/[0.08]">
<img alt="Cosmetics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
<div className="absolute bottom-4 left-4">
<span className="px-2 py-1 bg-white text-black text-[10px] font-bold uppercase rounded">Design</span>
</div>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-1 group-hover:text-brand-orange transition-colors">Naturkosmetik Waldgrün</h3>
<p className="text-sm text-slate-500">Shopify Plus • Brand Experience</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl bg-brand-surface aspect-[4/3] mb-5 border border-white/[0.08]">
<img alt="Architecture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
<div className="absolute bottom-4 left-4">
<span className="px-2 py-1 bg-white text-black text-[10px] font-bold uppercase rounded">Corporate</span>
</div>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-1 group-hover:text-brand-orange transition-colors">Architekturbüro Lichtblick</h3>
<p className="text-sm text-slate-500">Webflow • Corporate Website</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/[0.08] bg-brand-bg relative">
<div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tighter mb-16 text-center">Warum Onmarx Design?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
<iconify-icon icon="solar:medal-star-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2">Zertifizierte Expertise</h4>
<p className="text-sm text-slate-400 leading-relaxed px-4">Offizielle Partner für Shopware, Shopify und Webflow. Wir kennen die Systeme in- und auswendig.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2">Persönliche Betreuung</h4>
<p className="text-sm text-slate-400 leading-relaxed px-4">Keine anonyme Abfertigung. Ein fester Ansprechpartner begleitet Sie von der Idee bis zum Launch.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-slate-300 mb-6">
<iconify-icon icon="solar:bill-check-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2">Transparenz</h4>
<p className="text-sm text-slate-400 leading-relaxed px-4">Klare Preise, realistische Zeitpläne und ehrliche Kommunikation. Keine versteckten Kosten.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-slate-950/50" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Transparente Preisgestaltung</h2>
<p className="text-lg text-slate-400">Investieren Sie in Qualität. Wählen Sie das Paket, das zu Ihren Zielen passt.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

<div className="glass-card p-8 rounded-2xl flex flex-col border border-white/5 hover:border-white/20 transition-all duration-300">
<div className="mb-4">
<h3 className="text-lg font-medium text-slate-200">Starter</h3>
<p className="text-sm text-slate-500 mt-1">Die digitale Visitenkarte</p>
</div>
<div className="mb-6">
<div className="flex items-baseline">
<span className="text-3xl font-bold text-white">299,00</span>
<span className="text-slate-500 ml-1">€</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                One-Pager Design
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Responsive Layout
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Kontaktformular
              </li>
<li className="flex items-center gap-3 text-sm text-slate-500">
<iconify-icon className="text-slate-700 flex-shrink-0" icon="solar:minus-circle-linear" width="16"></iconify-icon>
                CMS Anbindung
              </li>
</ul>
<a className="w-full py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all text-center" href="#contact">
              Auswählen
            </a>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col border border-white/5 hover:border-white/20 transition-all duration-300 pricing-glow">
<div className="mb-4">
<h3 className="text-lg font-medium text-slate-200">Professional</h3>
<p className="text-sm text-slate-500 mt-1">Für kleine Unternehmen</p>
</div>
<div className="mb-6">
<div className="flex items-baseline">
<span className="text-3xl font-bold text-white">599,00</span>
<span className="text-slate-500 ml-1">€</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-rose-400 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Bis zu 5 Unterseiten
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Content Management
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                SEO Basis-Setup
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Social Media Integration
              </li>
</ul>
<a className="w-full py-3 rounded-lg border border-rose-500/20 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-sm font-medium transition-all text-center" href="#contact">
              Auswählen
            </a>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col border border-white/5 hover:border-white/20 transition-all duration-300">
<div className="mb-4">
<h3 className="text-lg font-medium text-slate-200">Business</h3>
<p className="text-sm text-slate-500 mt-1">Skalierbare Lösungen</p>
</div>
<div className="mb-6">
<div className="flex items-baseline">
<span className="text-3xl font-bold text-white">1.599,00</span>
<span className="text-slate-500 ml-1">€</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Bis zu 10 Unterseiten
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Erweitertes SEO &amp; Speed
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Blog / News System
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Google Analytics Setup
              </li>
</ul>
<a className="w-full py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all text-center" href="#contact">
              Auswählen
            </a>
</div>

<div className="relative p-8 rounded-2xl flex flex-col border border-rose-500/30 bg-gradient-to-b from-rose-900/20 to-slate-900/50 shadow-2xl shadow-rose-900/10 overflow-hidden group">

<div className="absolute top-0 right-0 bg-rose-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
              Empfohlen
            </div>
<div className="mb-4 relative z-10">
<h3 className="text-lg font-medium text-white flex items-center gap-2">
                Platinum
                <iconify-icon className="text-amber-400" icon="solar:crown-linear" width="16"></iconify-icon>
</h3>
<p className="text-sm text-rose-200/60 mt-1">Full E-Commerce</p>
</div>
<div className="mb-6 relative z-10">
<div className="flex items-baseline">
<span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-rose-200">4.995,00</span>
<span className="text-slate-500 ml-1">€</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1 relative z-10">
<li className="flex items-center gap-3 text-sm text-slate-200">
<iconify-icon className="text-rose-400 flex-shrink-0" icon="solar:check-circle-bold" width="16"></iconify-icon>
                Complete Online Shop
              </li>
<li className="flex items-center gap-3 text-sm text-slate-200">
<iconify-icon className="text-rose-400 flex-shrink-0" icon="solar:check-circle-bold" width="16"></iconify-icon>
                Payment Integration
              </li>
<li className="flex items-center gap-3 text-sm text-slate-200">
<iconify-icon className="text-rose-400 flex-shrink-0" icon="solar:check-circle-bold" width="16"></iconify-icon>
                Warenwirtschaft Anbindung
              </li>
<li className="flex items-center gap-3 text-sm text-slate-200">
<iconify-icon className="text-rose-400 flex-shrink-0" icon="solar:check-circle-bold" width="16"></iconify-icon>
                Legal &amp; Compliance Setup
              </li>
</ul>
<a className="relative z-10 w-full py-3 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-sm font-medium transition-all text-center shadow-lg shadow-rose-900/20" href="#contact">
              Jetzt Starten
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-surface border-b border-white/[0.08] px-6 relative overflow-hidden" id="about">
<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-blue/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-brand-orange font-medium tracking-wide uppercase text-xs mb-2 block">Über uns</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tighter mb-6 text-white">Wir sind mehr als nur Pixel-Schubser.</h2>
<p className="text-slate-400 text-lg leading-relaxed mb-8">
                    Onmarx Design wurde mit einer einfachen Idee gegründet: E-Commerce und Webdesign müssen nicht kompliziert sein. Wir kombinieren technisches Know-how mit kreativer Exzellenz, um Lösungen zu schaffen, die nachhaltig wachsen.
                </p>
<div className="flex gap-4">
<div className="bg-brand-bg/50 backdrop-blur-sm p-6 rounded-xl border border-white/[0.08]">
<span className="block text-3xl font-semibold text-brand-orange mb-1">150+</span>
<span className="text-sm text-slate-400">Projekte</span>
</div>
<div className="bg-brand-bg/50 backdrop-blur-sm p-6 rounded-xl border border-white/[0.08]">
<span className="block text-3xl font-semibold text-brand-orange mb-1">8</span>
<span className="text-sm text-slate-400">Jahre Erfahrung</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-white/[0.02] p-4 rounded-xl border border-white/[0.08] h-48 flex flex-col justify-end hover:bg-white/[0.05] transition-colors relative overflow-hidden group">
<img className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity grayscale" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10">
<p className="font-medium text-white">Creative Director</p>
<p className="text-xs text-slate-500">Design Dept.</p>
</div>
</div>
<div className="bg-white/[0.02] p-4 rounded-xl border border-white/[0.08] h-48 mt-8 flex flex-col justify-end hover:bg-white/[0.05] transition-colors relative overflow-hidden group">
<img className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity grayscale" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10">
<p className="font-medium text-white">Lead Developer</p>
<p className="text-xs text-slate-500">Tech Dept.</p>
</div>
</div>
<div className="bg-white/[0.02] p-4 rounded-xl border border-white/[0.08] h-48 -mt-8 flex flex-col justify-end hover:bg-white/[0.05] transition-colors relative overflow-hidden group">
<img className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity grayscale" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10">
<p className="font-medium text-white">E-Commerce Spec.</p>
<p className="text-xs text-slate-500">Strategy Dept.</p>
</div>
</div>
<div className="bg-white/[0.02] p-4 rounded-xl border border-white/[0.08] h-48 flex flex-col justify-end hover:bg-white/[0.05] transition-colors relative overflow-hidden group">
<img className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity grayscale" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10">
<p className="font-medium text-white">Project Lead</p>
<p className="text-xs text-slate-500">Management</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-brand-bg" id="blog">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tighter mb-12">Insights &amp; Inspiration</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<article className="flex flex-col group cursor-pointer">
<div className="h-48 bg-brand-surface rounded-xl mb-6 relative overflow-hidden border border-white/[0.08]">
<img className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur border border-white/10 px-2 py-1 rounded text-xs font-medium text-white shadow-sm">E-Commerce</div>
</div>
<h3 className="text-lg font-medium text-white mb-2 leading-tight group-hover:text-brand-orange transition-colors">Shopware 6 vs. Shopify: Welches System passt zu Ihrem Business?</h3>
<div className="mt-auto pt-4 flex items-center gap-2 text-xs text-slate-500">
<span>8 Min. Lesezeit</span>
<span>•</span>
<span>12. Okt 2024</span>
</div>
</article>
<article className="flex flex-col group cursor-pointer">
<div className="h-48 bg-brand-surface rounded-xl mb-6 relative overflow-hidden border border-white/[0.08]">
<img className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur border border-white/10 px-2 py-1 rounded text-xs font-medium text-white shadow-sm">SEO</div>
</div>
<h3 className="text-lg font-medium text-white mb-2 leading-tight group-hover:text-brand-orange transition-colors">Core Web Vitals 2024: Was Sie jetzt optimieren müssen</h3>
<div className="mt-auto pt-4 flex items-center gap-2 text-xs text-slate-500">
<span>6 Min. Lesezeit</span>
<span>•</span>
<span>05. Okt 2024</span>
</div>
</article>
<article className="flex flex-col group cursor-pointer">
<div className="h-48 bg-brand-surface rounded-xl mb-6 relative overflow-hidden border border-white/[0.08]">
<img className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur border border-white/10 px-2 py-1 rounded text-xs font-medium text-white shadow-sm">Webdesign</div>
</div>
<h3 className="text-lg font-medium text-white mb-2 leading-tight group-hover:text-brand-orange transition-colors">KI im Webdesign: Chance oder Bedrohung?</h3>
<div className="mt-auto pt-4 flex items-center gap-2 text-xs text-slate-500">
<span>9 Min. Lesezeit</span>
<span>•</span>
<span>28. Sep 2024</span>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/[0.08] bg-brand-bg relative" id="contact">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none opacity-30"></div>
<div className="max-w-5xl mx-auto relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tighter mb-4">Lassen Sie uns sprechen</h2>
<p className="text-slate-400 text-lg">Erzählen Sie uns von Ihrem Projekt. Wir antworten innerhalb von 24 Stunden.</p>
</div>
<div className="bg-brand-surface/50 backdrop-blur-md rounded-2xl shadow-2xl border border-white/[0.08] overflow-hidden flex flex-col md:flex-row">

<div className="bg-white/[0.02] p-10 md:w-1/3 flex flex-col justify-between border-r border-white/[0.08]">
<div>
<h3 className="font-medium text-white mb-6">Kontaktinformationen</h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-brand-orange mt-1" icon="solar:letter-linear" width="20"></iconify-icon>
<span className="text-sm text-slate-400">hallo@onmarx-design.de</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-brand-orange mt-1" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<span className="text-sm text-slate-400">+49 (0) 30 123 456 78</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-brand-orange mt-1" icon="solar:map-point-linear" width="20"></iconify-icon>
<span className="text-sm text-slate-400">Musterstraße 123<br/>10115 Berlin</span>
</li>
</ul>
</div>
<div className="mt-10 md:mt-0">
<p className="text-xs text-slate-500 mb-2">Social Media</p>
<div className="flex gap-4 text-white">
<iconify-icon className="hover:text-brand-orange transition-colors cursor-pointer" icon="brandico:linkedin-rect" width="20"></iconify-icon>
<iconify-icon className="hover:text-brand-orange transition-colors cursor-pointer" icon="brandico:instagram" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="p-10 md:w-2/3">
<form action="https://api.web3forms.com/submit" className="space-y-6" method="POST">
<input name="access_key" type="hidden" value="22852578-bebc-4439-ba0c-798f410614e6"/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-400 mb-2">Name *</label>
<input className="w-full rounded-lg border border-white/[0.1] bg-brand-bg px-4 py-2.5 text-sm text-white focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange transition-all placeholder-slate-600" name="name" placeholder="Max Mustermann" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2">E-Mail *</label>
<input className="w-full rounded-lg border border-white/[0.1] bg-brand-bg px-4 py-2.5 text-sm text-white focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange transition-all placeholder-slate-600" name="email" placeholder="max@firma.de" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2">Nachricht *</label>
<textarea className="w-full rounded-lg border border-white/[0.1] bg-brand-bg px-4 py-2.5 text-sm text-white focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange transition-all placeholder-slate-600" name="message" placeholder="Beschreiben Sie kurz Ihr Projekt und Ihre Ziele..." required="" rows="4"></textarea>
</div>
<div className="flex items-start gap-3">
<label className="relative flex items-center p-0.5 rounded-full cursor-pointer">
<input className="peer custom-check sr-only" required="" type="checkbox"/>
<div className="w-5 h-5 border border-slate-600 rounded flex items-center justify-center peer-hover:border-slate-400 transition-colors bg-brand-bg text-black">
<iconify-icon className="text-black hidden" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
</label>
<span className="text-xs text-slate-500 pt-0.5">Ich stimme der Datenschutzerklärung zu.</span>
</div>
<button className="w-full bg-white text-black py-3 rounded-lg text-sm font-medium hover:bg-brand-orange transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(246,173,85,0.4)]" type="submit">
                            Nachricht senden
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-brand-bg border-t border-white/[0.08] pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<a className="text-lg font-semibold tracking-tighter text-white uppercase flex items-center gap-2 mb-6" href="#">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black text-[10px] font-bold">O</div>
                        Onmarx
                    </a>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Wir schaffen digitale Erlebnisse, die Marken stärken und Umsätze steigern. Made in Berlin.
                    </p>
</div>

<div>
<h4 className="font-medium text-white mb-4 text-sm">Leistungen</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-orange transition-colors" href="#">Website-Entwicklung</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">E-Commerce</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">UI/UX Design</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Wartung &amp; Support</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-white mb-4 text-sm">Unternehmen</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-orange transition-colors" href="#">Über uns</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Portfolio</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Karriere</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-white mb-4 text-sm">Rechtliches</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-orange transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">AGB</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/[0.08] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<p>© 2024 Onmarx Design. Alle Rechte vorbehalten.</p>
<p>Mit <span className="text-red-500">♥</span> in Berlin gestaltet.</p>
</div>
</div>
</footer>

    </>
  );
}
