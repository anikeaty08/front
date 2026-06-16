import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function showPage(pageId) {
            const pages = document.querySelectorAll('.page-view');
            pages.forEach(page => {
                page.classList.remove('active');
            });
            const target = document.getElementById('view-' + pageId);
            if (target) {
                target.classList.add('active');
                window.scrollTo(0, 0); // Scroll to top when switching views
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="cloud-anim-layer">
<div className="cloud-shape w-[800px] h-[800px] -top-[20%] -left-[10%]"></div>
<div className="cloud-shape secondary w-[600px] h-[600px] top-[10%] right-[-5%]"></div>
<div className="cloud-shape w-[900px] h-[500px] bottom-[-10%] left-[20%] bg-[#4D5576]/20"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-xl font-bold tracking-tighter text-red-500 flex items-center gap-2 group" href="#" onclick="showPage('home')">
<iconify-icon className="text-red-500 group-hover:rotate-90 transition-transform duration-700" icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
          ONMARX
        </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8C94B3]">
<button className="hover:text-white transition-colors" onclick="showPage('home')">Start</button>
<button className="hover:text-white transition-colors" onclick="showPage('about')">Über uns</button>
<button className="hover:text-white transition-colors" onclick="showPage('portfolio')">Portfolio</button>
<a className="hover:text-white transition-colors" href="#technologies" onclick="showPage('home')">Kompetenz</a>
<a className="hover:text-white transition-colors" href="#pricing" onclick="showPage('home')">Preise</a>
<a className="hover:text-white transition-colors" href="#home-contact" onclick="showPage('home')">Kontakt</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-xs font-medium text-white bg-[#4D5576]/50 hover:bg-[#4D5576] border border-[#8C94B3]/30 rounded-full transition-all duration-200 hover:scale-105" href="#home-contact" onclick="showPage('home')">
            Projekt anfragen
          </a>
<button className="md:hidden text-white flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="page-view active" id="view-home">

<header className="lg:pt-48 lg:pb-40 overflow-hidden z-10 pt-32 pb-24 relative">
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">

<div className="absolute top-0 left-10 md:left-40 animate-[bounce_3s_infinite] opacity-30">
<iconify-icon className="text-[#8C94B3]" icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<div className="absolute bottom-20 right-10 md:right-40 animate-[bounce_4s_infinite] opacity-30">
<iconify-icon className="text-red-400" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4D5576]/50 border border-[#8C94B3]/30 text-red-400 text-xs font-medium mb-8 backdrop-blur-sm shadow-lg shadow-red-900/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
            Neue Kapazitäten verfügbar
          </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter-custom text-white mb-8 max-w-5xl mx-auto leading-[1.1]">
            Digitales Wachstum, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-[#8C94B3] to-red-400">perfekt inszeniert.</span>
</h1>
<p className="text-lg md:text-xl text-[#8C94B3] max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            High-End Webdesign &amp; E-Commerce Lösungen. Wir verwandeln komplexe Anforderungen in elegante, konvertierende Nutzererlebnisse.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="sm:w-auto hover:bg-red-500 transition-all hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] flex items-center justify-center gap-2 group overflow-hidden font-medium text-white bg-red-600 w-full rounded-lg pt-4 pr-8 pb-4 pl-8 relative shadow-[0_0_20px_rgba(239,68,68,0.3)]" href="#pricing">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-[100%]"></div>
              Preise ansehen
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<button className="w-full sm:w-auto px-8 py-4 bg-[#4D5576]/20 hover:bg-[#4D5576]/40 text-white border border-[#8C94B3]/30 rounded-lg font-medium transition-all flex items-center justify-center gap-2 backdrop-blur-sm" onclick="showPage('portfolio')">
              Portfolio
            </button>
</div>
</div>
</header>

<section className="border-y border-[#8C94B3]/10 bg-[#323852]/50 backdrop-blur-sm relative z-10">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[#8C94B3]/10">
<div className="space-y-1">
<p className="text-3xl font-semibold text-white tracking-tight">150+</p>
<p className="text-xs uppercase tracking-wider text-[#8C94B3]">Projekte</p>
</div>
<div className="space-y-1">
<p className="text-3xl font-semibold text-white tracking-tight">99%</p>
<p className="text-xs uppercase tracking-wider text-[#8C94B3]">Uptime</p>
</div>
<div className="space-y-1">
<p className="text-3xl font-semibold text-white tracking-tight">24/7</p>
<p className="text-xs uppercase tracking-wider text-[#8C94B3]">Support</p>
</div>
<div className="space-y-1">
<p className="text-3xl font-semibold text-white tracking-tight">4.9</p>
<p className="text-xs uppercase tracking-wider text-[#8C94B3]">Rating</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-[#323852] border-b border-[#8C94B3]/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4D5576]/20 border border-[#8C94B3]/20 text-[#8C94B3] text-xs font-medium mb-6">
<iconify-icon className="text-red-500" icon="solar:users-group-rounded-linear"></iconify-icon>
                        Wer wir sind
                    </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
                        Nicht nur eine Agentur.<br/>
<span className="text-[#8C94B3]">Ihr digitaler Partner.</span>
</h2>
<p className="text-lg text-[#8C94B3] mb-8 leading-relaxed font-light">
                        Onmarx wurde mit einer klaren Vision gegründet: Die Lücke zwischen atemberaubendem Design und robuster Technologie zu schließen. Wir sind ein Team aus Strategen, Designern und Entwicklern, die Perfektion lieben.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="px-6 py-3 bg-white text-[#323852] rounded-lg font-semibold hover:bg-[#8C94B3] transition-colors flex items-center gap-2" onclick="showPage('about')">
                            Team kennenlernen
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="order-1 lg:order-2 relative">
<div className="absolute -inset-4 bg-red-500/20 blur-3xl rounded-full opacity-20"></div>
<div className="glass-card p-2 rounded-2xl relative rotate-2 hover:rotate-0 transition-transform duration-500">
<img alt="Team at work" className="rounded-xl w-full object-cover shadow-2xl" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-[#323852]" id="technologies">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Tech Stack</h2>
<p className="text-lg text-[#8C94B3]">Moderne Architektur für maximale Performance.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

<div className="glass-card p-6 rounded-xl hover:bg-[#4D5576]/50 transition-all group flex flex-col items-center justify-center text-center gap-4 cursor-default">
<div className="icon-float" style={{animationDelay: '0s'}}><iconify-icon className="text-[#8C94B3] group-hover:text-red-500 transition-colors" icon="solar:database-linear" width="32"></iconify-icon></div>
<span className="font-medium text-[#8C94B3] text-sm">WordPress</span>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-[#4D5576]/50 transition-all group flex flex-col items-center justify-center text-center gap-4 cursor-default">
<div className="icon-float" style={{animationDelay: '0.2s'}}><iconify-icon className="text-[#8C94B3] group-hover:text-red-500 transition-colors" icon="solar:window-frame-linear" width="32"></iconify-icon></div>
<span className="font-medium text-[#8C94B3] text-sm">Webflow</span>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-[#4D5576]/50 transition-all group flex flex-col items-center justify-center text-center gap-4 cursor-default">
<div className="icon-float" style={{animationDelay: '0.4s'}}><iconify-icon className="text-[#8C94B3] group-hover:text-red-500 transition-colors" icon="solar:bag-linear" width="32"></iconify-icon></div>
<span className="font-medium text-[#8C94B3] text-sm">Shopware</span>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-[#4D5576]/50 transition-all group flex flex-col items-center justify-center text-center gap-4 cursor-default">
<div className="icon-float" style={{animationDelay: '0.6s'}}><iconify-icon className="text-[#8C94B3] group-hover:text-red-500 transition-colors" icon="solar:layers-linear" width="32"></iconify-icon></div>
<span className="font-medium text-[#8C94B3] text-sm">Magento</span>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-[#4D5576]/50 transition-all group flex flex-col items-center justify-center text-center gap-4 cursor-default">
<div className="icon-float" style={{animationDelay: '0.8s'}}><iconify-icon className="text-[#8C94B3] group-hover:text-red-500 transition-colors" icon="solar:cart-large-linear" width="32"></iconify-icon></div>
<span className="font-medium text-[#8C94B3] text-sm">Shopify</span>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-[#4D5576]/50 transition-all group flex flex-col items-center justify-center text-center gap-4 cursor-default">
<div className="icon-float" style={{animationDelay: '1s'}}><iconify-icon className="text-[#8C94B3] group-hover:text-red-500 transition-colors" icon="solar:code-square-linear" width="32"></iconify-icon></div>
<span className="font-medium text-[#8C94B3] text-sm">React</span>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-[#323852]" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Transparente Preisgestaltung</h2>
<p className="text-lg text-[#8C94B3]">Investieren Sie in Qualität. Wählen Sie das Paket, das zu Ihren Zielen passt.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

<div className="glass-card p-8 rounded-2xl flex flex-col hover:border-[#8C94B3]/40 transition-all duration-300">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Starter</h3>
<p className="text-sm text-[#8C94B3] mt-1">Die digitale Visitenkarte</p>
</div>
<div className="mb-6">
<div className="flex items-baseline">
<span className="text-3xl font-bold text-white">299,00</span>
<span className="text-[#8C94B3] ml-1">€</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-[#8C94B3]">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            One-Pager Design
                        </li>
<li className="flex items-center gap-3 text-sm text-[#8C94B3]">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Responsive Layout
                        </li>
<li className="flex items-center gap-3 text-sm text-[#8C94B3]">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Kontaktformular
                        </li>
<li className="flex items-center gap-3 text-sm text-[#8C94B3] opacity-50">
<iconify-icon className="text-[#8C94B3] flex-shrink-0" icon="solar:minus-circle-linear" width="16"></iconify-icon>
                            CMS Anbindung
                        </li>
</ul>
<a className="w-full py-3 rounded-lg border border-[#8C94B3]/30 bg-[#4D5576]/30 hover:bg-[#4D5576]/50 text-white text-sm font-medium transition-all text-center" href="#home-contact">
                        Auswählen
                    </a>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col hover:border-red-500/40 transition-all duration-300 pricing-glow">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Professional</h3>
<p className="text-sm text-[#8C94B3] mt-1">Für kleine Unternehmen</p>
</div>
<div className="mb-6">
<div className="flex items-baseline">
<span className="text-3xl font-bold text-white">599,00</span>
<span className="text-[#8C94B3] ml-1">€</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-[#8C94B3]">
<iconify-icon className="text-red-400 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Bis zu 5 Unterseiten
                        </li>
<li className="flex items-center gap-3 text-sm text-[#8C94B3]">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Content Management
                        </li>
<li className="flex items-center gap-3 text-sm text-[#8C94B3]">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            SEO Basis-Setup
                        </li>
<li className="flex items-center gap-3 text-sm text-[#8C94B3]">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Social Media Integration
                        </li>
</ul>
<a className="w-full py-3 rounded-lg border border-red-500/20 bg-red-500/10 hover:bg-red-500/20 text-red-300 text-sm font-medium transition-all text-center" href="#home-contact">
                        Auswählen
                    </a>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col hover:border-[#8C94B3]/40 transition-all duration-300">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Business</h3>
<p className="text-sm text-[#8C94B3] mt-1">Skalierbare Lösungen</p>
</div>
<div className="mb-6">
<div className="flex items-baseline">
<span className="text-3xl font-bold text-white">1.599,00</span>
<span className="text-[#8C94B3] ml-1">€</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-[#8C94B3]">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Bis zu 10 Unterseiten
                        </li>
<li className="flex items-center gap-3 text-sm text-[#8C94B3]">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Erweitertes SEO &amp; Speed
                        </li>
<li className="flex items-center gap-3 text-sm text-[#8C94B3]">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Blog / News System
                        </li>
<li className="flex items-center gap-3 text-sm text-[#8C94B3]">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Google Analytics Setup
                        </li>
</ul>
<a className="w-full py-3 rounded-lg border border-[#8C94B3]/30 bg-[#4D5576]/30 hover:bg-[#4D5576]/50 text-white text-sm font-medium transition-all text-center" href="#home-contact">
                        Auswählen
                    </a>
</div>

<div className="relative p-8 rounded-2xl flex flex-col border border-red-500/30 bg-gradient-to-b from-red-900/30 to-[#323852] shadow-2xl shadow-red-900/10 overflow-hidden group">

<div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                        Empfohlen
                    </div>
<div className="mb-4 relative z-10">
<h3 className="text-lg font-medium text-white flex items-center gap-2">
                            Platinum
                            <iconify-icon className="text-amber-400" icon="solar:crown-linear" width="16"></iconify-icon>
</h3>
<p className="text-sm text-red-200/60 mt-1">Full E-Commerce</p>
</div>
<div className="mb-6 relative z-10">
<div className="flex items-baseline">
<span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-red-200">4.995,00</span>
<span className="text-[#8C94B3] ml-1">€</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1 relative z-10">
<li className="flex items-center gap-3 text-sm text-white/90">
<iconify-icon className="text-red-400 flex-shrink-0" icon="solar:check-circle-bold" width="16"></iconify-icon>
                            Complete Online Shop
                        </li>
<li className="flex items-center gap-3 text-sm text-white/90">
<iconify-icon className="text-red-400 flex-shrink-0" icon="solar:check-circle-bold" width="16"></iconify-icon>
                            Payment Integration
                        </li>
<li className="flex items-center gap-3 text-sm text-white/90">
<iconify-icon className="text-red-400 flex-shrink-0" icon="solar:check-circle-bold" width="16"></iconify-icon>
                            Warenwirtschaft Anbindung
                        </li>
<li className="flex items-center gap-3 text-sm text-white/90">
<iconify-icon className="text-red-400 flex-shrink-0" icon="solar:check-circle-bold" width="16"></iconify-icon>
                            Legal &amp; Compliance Setup
                        </li>
</ul>
<a className="relative z-10 w-full py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm font-medium transition-all text-center shadow-lg shadow-red-900/20" href="#home-contact">
                        Jetzt Starten
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-[#323852]">
<div className="max-w-7xl mx-auto px-6">
<div className="glass-card p-8 md:p-12 rounded-2xl text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-[#4D5576]/20 opacity-50"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Ergebnisse, die zählen</h2>
<p className="text-[#8C94B3] max-w-xl mx-auto mb-8">Schauen Sie sich unsere aktuellen Arbeiten an.</p>
<button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#323852] rounded-lg font-semibold hover:bg-[#8C94B3] transition-colors" onclick="showPage('portfolio')">
                Portfolio ansehen
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-[#323852]" id="home-contact">
<div className="max-w-7xl mx-auto px-6">
<div className="glass-card md:p-16 overflow-hidden border border-[#8C94B3]/20 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
                            Starten Sie Ihr Projekt.
                        </h2>
<p className="text-lg text-[#8C94B3] mb-8 leading-relaxed">
                            Erzählen Sie uns von Ihrer Vision. Wir melden uns innerhalb von 24 Stunden mit einer ersten Einschätzung.
                        </p>
<div className="space-y-6">

<div className="flex items-center gap-4 group cursor-pointer">
<div className="flex group-hover:scale-110 transition-transform shadow-red-900/10 text-red-500 bg-[#4D5576]/30 w-12 h-12 border border-[#8C94B3]/20 rounded-full shadow-lg items-center justify-center">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="font-medium text-white">E-Mail</h3>
<p className="group-hover:text-red-400 transition-colors text-[#8C94B3]">kontakt@onmarxdesign.com</p>
</div>
</div>

<div className="flex items-center gap-4 group cursor-pointer">
<div className="flex group-hover:scale-110 transition-transform shadow-red-900/10 text-red-500 bg-[#4D5576]/30 w-12 h-12 border border-[#8C94B3]/20 rounded-full shadow-lg items-center justify-center">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="font-medium text-white">Telefon</h3>
<p className="group-hover:text-red-400 transition-colors text-[#8C94B3]">+49 (0) 30 2000 8403</p>
</div>
</div>
</div>
</div>

<div className="">
<form action="https://api.web3forms.com/submit" className="space-y-4" method="POST">
<input name="access_key" type="hidden" value="22852578-bebc-4439-ba0c-798f410614e6"/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase text-[#8C94B3] tracking-wider">Name</label>
<input className="w-full px-4 py-3 bg-[#4D5576]/30 border border-[#8C94B3]/20 rounded-lg form-input focus:outline-none transition-all text-white placeholder-[#8C94B3]/50" name="name" placeholder="Ihr Name" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase text-[#8C94B3] tracking-wider">E-Mail</label>
<input className="w-full px-4 py-3 bg-[#4D5576]/30 border border-[#8C94B3]/20 rounded-lg form-input focus:outline-none transition-all text-white placeholder-[#8C94B3]/50" name="email" placeholder="name@firma.de" required="" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase text-[#8C94B3] tracking-wider">Service (Optional)</label>
<select className="w-full px-4 py-3 bg-[#4D5576]/30 border border-[#8C94B3]/20 rounded-lg form-input focus:outline-none transition-all text-white cursor-pointer" name="package">
<option className="bg-[#323852]">Starter (299€)</option>
<option className="bg-[#323852]">Professional (599€)</option>
<option className="bg-[#323852]">Business (1.599€)</option>
<option className="bg-[#323852]" selected="">Platinum / E-Commerce (4.995€)</option>
<option className="bg-[#323852]">Individuelle Anfrage</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase text-[#8C94B3] tracking-wider">Nachricht</label>
<textarea className="w-full px-4 py-3 bg-[#4D5576]/30 border border-[#8C94B3]/20 rounded-lg form-input focus:outline-none transition-all text-white resize-none placeholder-[#8C94B3]/50" name="message" placeholder="Beschreiben Sie kurz Ihr Projekt..." required="" rows="3"></textarea>
</div>
<button className="transition-all hover:bg-red-500 shadow-red-900/20 flex group font-semibold text-white bg-red-600 w-full rounded-lg mt-2 pt-4 pb-4 shadow-lg gap-x-2 gap-y-2 items-center justify-center" type="submit">
                                Submit Form
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:plain-2-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page-view pt-32 pb-24" id="view-about">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-red-500 font-medium text-sm tracking-wider uppercase mb-4 block">Über Onmarx</span>
<h1 className="text-4xl md:text-6xl font-medium tracking-tighter-custom text-white mb-6">
                    Wir bauen das Internet <br/>
<span className="text-[#8C94B3]">von Morgen.</span>
</h1>
<p className="text-xl text-[#8C94B3] font-light leading-relaxed">
                    Wir sind ein Kollektiv aus digitalen Handwerkern. Wir glauben daran, dass gute Software nicht nur funktionieren, sondern begeistern muss.
                </p>
</div>

<div className="grid md:grid-cols-3 gap-6 mb-24">
<div className="glass-card p-8 rounded-xl border border-[#8C94B3]/10">
<iconify-icon className="text-red-500 mb-4" icon="solar:ruler-pen-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Präzision</h3>
<p className="text-[#8C94B3] text-sm leading-relaxed">Jedes Pixel zählt. Wir arbeiten mit der Akribie klassischer Handwerkskunst, übersetzt in die digitale Welt.</p>
</div>
<div className="glass-card p-8 rounded-xl border border-[#8C94B3]/10">
<iconify-icon className="text-indigo-400 mb-4" icon="solar:rocket-2-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Performance</h3>
<p className="text-[#8C94B3] text-sm leading-relaxed">Geschwindigkeit ist ein Feature. Unsere Lösungen sind auf maximale Ladezeiten und Effizienz optimiert.</p>
</div>
<div className="glass-card p-8 rounded-xl border border-[#8C94B3]/10">
<iconify-icon className="text-emerald-400 mb-4" icon="solar:heart-angle-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Partnerschaft</h3>
<p className="text-[#8C94B3] text-sm leading-relaxed">Wir arbeiten nicht für Sie, sondern mit Ihnen. Ihr Erfolg ist der Maßstab unserer Arbeit.</p>
</div>
</div>

<div className="mb-24">
<h2 className="text-3xl font-medium text-white mb-10 text-center">Das Team</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group">
<div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/5]">
<img alt="Henk du Bruyn" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#323852] via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4">
<p className="text-white font-medium">Henk du Bruyn</p>
<p className="text-[#8C94B3] text-xs uppercase tracking-wider">Inhaber</p>
</div>
</div>
</div>

<div className="group">
<div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/5]">
<img alt="Jan Lüning" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#323852] via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4">
<p className="text-white font-medium">Jan Lüning</p>
<p className="text-[#8C94B3] text-xs uppercase tracking-wider">Entwickler</p>
</div>
</div>
</div>

<div className="group">
<div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/5]">
<img alt="Markus Fehing" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#323852] via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4">
<p className="text-white font-medium">Markus Fehing</p>
<p className="text-[#8C94B3] text-xs uppercase tracking-wider">UX Designer</p>
</div>
</div>
</div>

<div className="group">
<div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/5]">
<img alt="Sara Neubauer" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=2576&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#323852] via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4">
<p className="text-white font-medium">Sara Neubauer</p>
<p className="text-[#8C94B3] text-xs uppercase tracking-wider">Webdesign</p>
</div>
</div>
</div>
</div>
</div>

<div className="glass-card p-12 rounded-2xl text-center border border-[#8C94B3]/20">
<h2 className="text-3xl font-medium text-white mb-4">Bereit, uns kennenzulernen?</h2>
<p className="text-[#8C94B3] mb-8 max-w-lg mx-auto">Lassen Sie uns bei einem Kaffee über Ihr Projekt sprechen. Digital oder vor Ort in Berlin.</p>
<button className="px-8 py-3 bg-red-600 hover:bg-red-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-red-900/20" onclick="showPage('home')">
                    Kontakt aufnehmen
                </button>
</div>
</div>
</main>

<main className="page-view pt-32 pb-24" id="view-portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-red-500 font-medium text-sm tracking-wider uppercase mb-4 block">Ausgewählte Arbeiten</span>
<h1 className="text-4xl md:text-6xl font-medium tracking-tighter-custom text-white mb-6">Unsere Projekte</h1>
<p className="text-xl text-[#8C94B3] font-light">Echte Ergebnisse für ambitionierte Marken.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="glass-card rounded-xl overflow-hidden aspect-[4/3] mb-4 relative">
<img alt="E-Commerce Project" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#323852]/60 group-hover:bg-[#323852]/40 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="inline-block px-3 py-1 bg-red-500/20 text-red-300 text-xs rounded-full mb-2 border border-red-500/20 backdrop-blur-md">E-Commerce</span>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-1">Luminary Co.</h3>
<p className="text-[#8C94B3] text-sm">Shopify Relaunch &amp; Branding</p>
</div>

<div className="group cursor-pointer">
<div className="glass-card rounded-xl overflow-hidden aspect-[4/3] mb-4 relative">
<img alt="Dashboard Project" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-[#323852]/60 group-hover:bg-[#323852]/40 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full mb-2 border border-indigo-500/20 backdrop-blur-md">Web App</span>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-1">FinStack</h3>
<p className="text-[#8C94B3] text-sm">Dashboard Interface Design</p>
</div>

<div className="group cursor-pointer">
<div className="glass-card rounded-xl overflow-hidden aspect-[4/3] mb-4 relative">
<img alt="Corporate Project" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-[#323852]/60 group-hover:bg-[#323852]/40 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full mb-2 border border-emerald-500/20 backdrop-blur-md">Corporate</span>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-1">Alpha Construction</h3>
<p className="text-[#8C94B3] text-sm">Corporate Website &amp; SEO</p>
</div>
</div>
</div>
</main>

<main className="page-view pt-32 pb-24" id="view-impressum">
<div className="max-w-3xl mx-auto px-6">
<h1 className="text-3xl font-medium text-white mb-8">Impressum</h1>
<div className="space-y-8 text-[#8C94B3] font-light">
<div className="glass-card p-8 rounded-xl space-y-4">
<h2 className="text-lg font-medium text-white">Angaben gemäß § 5 TMG</h2>
<p>Onmarx Design GmbH<br/>Torstraße 1<br/>10119 Berlin</p>
<p><br/>Henk du Bruyn, Geschäftsführer</p>
</div>
<div className="glass-card p-8 rounded-xl space-y-4">
<h2 className="text-lg font-medium text-white">Kontakt</h2>
<p>Telefon: +49 (0) 30 123 456<br/>E-Mail: hello@onmarx.de</p>
</div>
</div>
</div>
</main>

<main className="page-view pt-32 pb-24" id="view-datenschutz">
<div className="max-w-3xl mx-auto px-6">
<h1 className="text-3xl font-medium text-white mb-8">Datenschutzerklärung</h1>
<div className="space-y-8 text-[#8C94B3] font-light">
<div className="glass-card p-8 rounded-xl space-y-4">
<h2 className="text-lg font-medium text-white">1. Datenschutz auf einen Blick</h2>
<p><strong>Allgemeine Hinweise</strong><br/>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
</div>
<div className="glass-card p-8 rounded-xl space-y-4">
<h2 className="text-lg font-medium text-white">2. Hosting</h2>
<p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:<br/><strong>Externes Hosting</strong></p>
</div>
</div>
</div>
</main>

<footer className="py-8 border-t border-[#8C94B3]/10 bg-[#323852] text-center relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[#8C94B3] text-sm">© 2024 Onmarx Design. All rights reserved.</p>
<div className="flex gap-4 text-xs font-medium">
<button className="hover:text-white transition-colors text-[#8C94B3]" onclick="showPage('impressum')">Impressum</button>
<button className="text-[#8C94B3] hover:text-white transition-colors" onclick="showPage('datenschutz')">Datenschutz</button>
</div>
<div className="flex gap-6">
<a className="text-[#8C94B3] hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-[#8C94B3] hover:text-white transition-colors" href="#"><iconify-icon icon="solar:mention-circle-linear" width="20"></iconify-icon></a>
<a className="text-[#8C94B3] hover:text-white transition-colors" href="#"><iconify-icon icon="solar:basketball-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
