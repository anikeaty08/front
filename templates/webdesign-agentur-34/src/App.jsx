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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });
    
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
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-indigo-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] transition-all duration-300">
                    O
                </div>
<span className="font-semibold tracking-tight text-white text-lg">Onmarx</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#about">Über uns</a>
<a className="hover:text-white transition-colors" href="#services">Leistungen</a>
<a className="hover:text-white transition-colors" href="#work">Referenzen</a>
<a className="hover:text-white transition-colors" href="#pricing">Preise</a>
</div>
<a className="hidden md:inline-flex h-9 items-center justify-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 focus:ring-offset-black" href="#contact">
                Kontakt aufnehmen
            </a>

<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="pt-24 pb-12 px-6 max-w-7xl mx-auto reveal active">
<div className="relative overflow-hidden bg-white/5 border-white/10 border rounded-2xl w-full min-h-[500px] md:min-h-[600px]">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none">
</div>
<img alt="Creative team working on design projects" className="w-full h-full object-cover" loading="eager" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b1c8bd29-43a2-426c-9dd1-916b14f8554d_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent pointer-events-none">
</div>
<div className="absolute inset-0 flex items-end">
<div className="w-full sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl lg:text-7xl text-white font-geist tracking-tighter drop-shadow-lg leading-tight">Design that moves brands forward</h2>
<p className="sm:text-lg leading-relaxed text-lg font-normal text-white/90 font-geist mt-3 drop-shadow-sm max-w-2xl">
                    We craft brand identities, digital products, and strategic campaigns for ambitious teams. From concept to launch, our studio blends clarity, utility, and aesthetics to create work that performs and endures.
                    </p>
<div className="mt-6">
<a className="inline-flex items-center gap-2 hover:bg-white/20 text-sm font-medium text-white tracking-tight bg-white/10 backdrop-blur-sm rounded-full pt-2 pr-4 pb-2 pl-4 border border-white/15 shadow-sm transition-all duration-300" href="#work">
<svg className="lucide lucide-play w-4 h-4 stroke-1.5 fill-white/20" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
<span className="font-geist">Showreel ansehen</span>
</a>
</div>
</div>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rounded-xl bg-white/6 backdrop-blur-sm border border-white/10 p-3 shadow-sm hover:bg-white/10 transition-all duration-300">
<div className="text-xl font-semibold tracking-tight text-white font-geist drop-shadow-sm">200+</div>
<p className="text-[11px] text-white/80 mt-0.5 font-geist">Projects Delivered</p>
</div>
<div className="rounded-xl bg-white/6 backdrop-blur-sm border border-white/10 p-3 shadow-sm hover:bg-white/10 transition-all duration-300">
<div className="text-xl font-semibold tracking-tight text-white font-geist drop-shadow-sm">50+</div>
<p className="text-[11px] text-white/80 mt-0.5 font-geist">Clients Worldwide</p>
</div>
<div className="rounded-xl bg-white/6 backdrop-blur-sm border border-white/10 p-3 shadow-sm hover:bg-white/10 transition-all duration-300">
<div className="text-xl font-semibold tracking-tight text-white font-geist drop-shadow-sm">8</div>
<p className="text-[11px] text-white/80 mt-0.5 font-geist">Years in Practice</p>
</div>
<div className="rounded-xl bg-white/6 backdrop-blur-sm border border-white/10 p-3 shadow-sm hover:bg-white/10 transition-all duration-300">
<div className="text-xl font-semibold tracking-tight text-white font-geist drop-shadow-sm">12</div>
<p className="text-[11px] text-white/80 mt-0.5 font-geist">Team Members</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-black/20 border-white/5 pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-mono text-neutral-500 mb-8 uppercase tracking-widest">Das Vertrauen von Innovatoren</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
<iconify-icon className="text-white" icon="simple-icons:vercel" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:stripe" width="50"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:linear" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:auth0" width="28"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:raycast" width="30"></iconify-icon>
</div>
</div>
</section>

<section className="pt-24 pb-24 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Unser Tech-Stack &amp; Expertise</h2>
<p className="text-neutral-400">Wir nutzen modernste Technologien, um Websites zu bauen, die nicht nur gut aussehen, sondern auch performen.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl glass-panel hover:border-indigo-500/30 transition-colors duration-300 reveal">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:layout-template" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">UI/UX Design</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Benutzerzentrierte Interfaces, die intuitiv sind und Ihre Markenidentität perfekt widerspiegeln.</p>
</div>

<div className="group p-6 rounded-2xl glass-panel hover:border-blue-500/30 transition-colors duration-300 reveal" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:zap" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Performance</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Ladezeiten unter 1 Sekunde. Optimiert für Core Web Vitals und maximales SEO-Ranking.</p>
</div>

<div className="group p-6 rounded-2xl glass-panel hover:border-indigo-500/30 transition-colors duration-300 reveal" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:smartphone" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Responsive</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Perfekte Darstellung auf allen Geräten. Vom iPhone bis zum 4K Monitor.</p>
</div>

<div className="group p-6 rounded-2xl glass-panel hover:border-cyan-500/30 transition-colors duration-300 reveal" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:code-2" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Clean Code</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Skalierbare Architektur mit Tailwind CSS, React oder modernem HTML5.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden border-white/5 border-t pt-24 pb-24 relative" id="about">
<div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 reveal">
<span className="text-indigo-400 font-mono text-xs uppercase tracking-wider mb-2 block">Über Onmarx</span>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Wir verwandeln Besucher in Kunden.</h2>
<div className="space-y-6 text-neutral-400 text-lg font-light leading-relaxed">
<p>
                        Gutes Design ist mehr als nur Ästhetik – es ist ein Werkzeug für Wachstum. Bei Onmarx kombinieren wir strategisches Denken mit handwerklicher Präzision.
                    </p>
<p>
                        Unser Team aus Designern und Entwicklern arbeitet remote-first, aber immer nah am Kunden. Wir glauben an iterative Prozesse, Transparenz und Ergebnisse, die man messen kann.
                    </p>
</div>
<div className="mt-8 flex gap-8">
<div>
<div className="text-3xl font-bold text-white">50+</div>
<div className="text-sm text-neutral-500 mt-1">Projekte gelauncht</div>
</div>
<div>
<div className="text-3xl font-bold text-white">100%</div>
<div className="text-sm text-neutral-500 mt-1">Kundenzufriedenheit</div>
</div>
<div>
<div className="text-3xl font-bold text-white">24/7</div>
<div className="text-sm text-neutral-500 mt-1">Support &amp; Wartung</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative reveal" style={{transitionDelay: '200ms'}}>
<div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
<img alt="Arbeitsplatz" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay"></div>
</div>

<div className="absolute -bottom-6 -right-6 w-24 h-24 bg-stripes opacity-20"></div>
</div>
</div>
</section>

<section className="py-24 relative bg-black" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">Ausgewählte Arbeiten</h2>
<p className="text-neutral-400">Einblicke in unsere letzten Projekte.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors" href="#">
                    Alle Projekte <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer reveal">
<div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-[#111] mb-4">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/5 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm border border-white/20">Case Study</span>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-1 group-hover:text-indigo-400 transition-colors">FinTech Dashboard</h3>
<p className="text-sm text-neutral-500">UI/UX Design, Frontend Development</p>
</div>

<div className="group cursor-pointer reveal" style={{transitionDelay: '100ms'}}>
<div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-[#111] mb-4">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-500/20 to-teal-500/5 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm border border-white/20">Case Study</span>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-1 group-hover:text-neutral-400 transition-colors">EcoLiving Shop</h3>
<p className="text-sm text-neutral-500">E-Commerce, Branding</p>
</div>

<div className="group cursor-pointer reveal" style={{transitionDelay: '200ms'}}>
<div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-[#111] mb-4">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/5 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm border border-white/20">Case Study</span>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-1 group-hover:text-indigo-400 transition-colors">Architect Studio</h3>
<p className="text-sm text-neutral-500">Portfolio Website, Motion</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Transparente Preise</h2>
<p className="text-neutral-400">Investieren Sie in Qualität. Keine versteckten Kosten.</p>

<div className="flex items-center justify-center gap-4 mt-8">
<span className="text-sm text-white">Einmalig</span>
<div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-[#1a1a1a] appearance-none cursor-pointer transition-all duration-300" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-white/10 cursor-pointer" htmlFor="toggle"></label>
</div>
<span className="text-sm text-neutral-500">Abo (Wartung)</span>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="glass-panel p-8 rounded-2xl relative reveal hover:-translate-y-2 transition-transform duration-300">
<h3 className="text-lg font-medium text-neutral-200 mb-2">Starter</h3>
<div className="text-3xl font-bold text-white mb-6">€2.900<span className="text-sm text-neutral-500 font-normal"> / Projekt</span></div>
<p className="text-sm text-neutral-400 mb-8 border-b border-white/5 pb-8">Perfekt für kleine Unternehmen und Landing Pages.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> One-Pager Design
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> Mobile Responsive
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> Basis SEO Setup
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> Kontaktformular
                        </li>
</ul>
<a className="block w-full py-3 rounded-lg border border-white/10 bg-white/5 text-center text-sm font-medium text-white hover:bg-white/10 transition-colors" href="#contact">Wählen</a>
</div>

<div className="p-8 rounded-2xl relative bg-gradient-to-b from-indigo-600/20 to-indigo-900/10 border border-indigo-500/30 reveal z-10 hover:-translate-y-2 transition-transform duration-300">
<div className="absolute -top-4 left-0 w-full flex justify-center">
<span className="bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Beliebt</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Business</h3>
<div className="text-3xl font-bold text-white mb-6">€5.900<span className="text-sm text-neutral-400 font-normal"> / Projekt</span></div>
<p className="text-sm text-indigo-200 mb-8 border-b border-indigo-500/20 pb-8">Für Unternehmen, die wachsen wollen. Mehr Unterseiten &amp; CMS.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-indigo-300" icon="lucide:check"></iconify-icon> Bis zu 10 Unterseiten
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-indigo-300" icon="lucide:check"></iconify-icon> CMS Integration (Content)
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-indigo-300" icon="lucide:check"></iconify-icon> Premium Animationen
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-indigo-300" icon="lucide:check"></iconify-icon> Speed Optimierung
                        </li>
</ul>
<a className="block w-full py-3 rounded-lg bg-indigo-500 text-center text-sm font-medium text-white hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/25" href="#contact">Jetzt starten</a>
</div>

<div className="glass-panel p-8 rounded-2xl relative reveal hover:-translate-y-2 transition-transform duration-300">
<h3 className="text-lg font-medium text-neutral-200 mb-2">Enterprise</h3>
<div className="text-3xl font-bold text-white mb-6">Individuell</div>
<p className="text-sm text-neutral-400 mb-8 border-b border-white/5 pb-8">Komplexe Web-Apps, E-Commerce und spezielle Anforderungen.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> Custom React/Next.js Dev
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> E-Commerce (Shopify/Woo)
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> API Integrationen
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> Priorisierter Support
                        </li>
</ul>
<a className="block w-full py-3 rounded-lg border border-white/10 bg-white/5 text-center text-sm font-medium text-white hover:bg-white/10 transition-colors" href="#contact">Angebot anfordern</a>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden border-t border-white/5">
<h2 className="text-center text-2xl font-semibold text-white mb-12 reveal">Das sagen unsere Kunden</h2>
<div className="marquee-container relative w-full overflow-hidden">
<div className="flex gap-6 animate-marquee w-max hover:[animation-play-state:paused]">

<div className="w-80 p-6 rounded-xl bg-[#0a0a0a] border border-white/10">
<div className="flex gap-1 text-indigo-400 mb-3">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 mb-4 leading-relaxed">"Onmarx hat unsere Vision perfekt umgesetzt. Die neue Website ist nicht nur wunderschön, sondern konvertiert auch deutlich besser."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700"></div>
<div>
<div className="text-xs font-bold text-white">Thomas Müller</div>
<div className="text-[10px] text-neutral-500">CEO, TechStart GmbH</div>
</div>
</div>
</div>

<div className="w-80 p-6 rounded-xl bg-[#0a0a0a] border border-white/10">
<div className="flex gap-1 text-indigo-400 mb-3">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 mb-4 leading-relaxed">"Unglaubliche Geschwindigkeit in der Umsetzung und im Ladeverhalten der Seite. Absolut empfehlenswert."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700"></div>
<div>
<div className="text-xs font-bold text-white">Sarah Weber</div>
<div className="text-[10px] text-neutral-500">Marketing, EcoShop</div>
</div>
</div>
</div>

<div className="w-80 p-6 rounded-xl bg-[#0a0a0a] border border-white/10">
<div className="flex gap-1 text-indigo-400 mb-3">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 mb-4 leading-relaxed">"Das Design ist Weltklasse. Wir bekommen ständig Komplimente für unseren neuen Webauftritt."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700"></div>
<div>
<div className="text-xs font-bold text-white">Markus Klein</div>
<div className="text-[10px] text-neutral-500">Gründer, CreativeArc</div>
</div>
</div>
</div>

<div className="w-80 p-6 rounded-xl bg-[#0a0a0a] border border-white/10">
<div className="flex gap-1 text-indigo-400 mb-3">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 mb-4 leading-relaxed">"Professionelle Abwicklung von Anfang bis Ende. Die Kommunikation war stets transparent."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700"></div>
<div>
<div className="text-xs font-bold text-white">Julia Wagner</div>
<div className="text-[10px] text-neutral-500">Director, LawFirm KG</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] pt-16 pb-8" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">O</div>
<span className="font-semibold text-white">Onmarx Design</span>
</a>
<h3 className="text-2xl font-semibold text-white mb-6">Bereit für den nächsten Schritt?</h3>
<form className="flex gap-2 max-w-sm">
<input className="flex-1 bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="ihre@email.com" type="email"/>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">Starten</button>
</form>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Unternehmen</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Über uns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Karriere</a></li>
<li><a className="hover:text-white transition-colors" href="#">Kontakt</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Rechtliches</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-white transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-white transition-colors" href="#">AGB</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
<p>© 2024 Onmarx Design. Alle Rechte vorbehalten.</p>
<div className="flex gap-4">
<iconify-icon className="cursor-pointer hover:text-white transition-colors" icon="lucide:instagram" width="16"></iconify-icon>
<iconify-icon className="cursor-pointer hover:text-white transition-colors" icon="lucide:twitter" width="16"></iconify-icon>
<iconify-icon className="cursor-pointer hover:text-white transition-colors" icon="lucide:linkedin" width="16"></iconify-icon>
</div>
</div>
</div>
</footer>



    </>
  );
}
