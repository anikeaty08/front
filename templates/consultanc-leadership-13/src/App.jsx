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



        lucide.createIcons();
    
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
      

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
<div className="absolute inset-0 bg-[#030303]/80 backdrop-blur-xl border-b border-white/5"></div>
<div className="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group z-10" href="#">
<div className="relative w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#B08A5A] to-[#8C6B42]">
<div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<i className="w-5 h-5 text-white fill-current/20" data-lucide="hexagon" strokeWidth="2"></i>
</div>
<span className="text-white text-lg font-semibold tracking-tight">Ferox</span>
</a>

<nav className="hidden md:flex items-center gap-10 z-10">
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#services">Expertise</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#method">Werkwijze</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#values">Visie</a>
</nav>

<div className="flex items-center gap-4 z-10">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all" href="#contact">
                    Contact
                </a>

<button className="md:hidden text-white">
<i data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>

<section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#030303] to-[#030303] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

<div className="max-w-2xl flex-1 text-center lg:text-left fade-in-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#B08A5A] text-xs font-medium mb-8 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B08A5A] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#B08A5A]"></span>
</span>
                        Beschikbaar voor Q4 Projecten
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tighter mb-8 leading-[1.05]">
                        Leiderschap dat <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-600">toekomst bouwt.</span>
</h1>
<p className="text-lg lg:text-xl text-gray-400 mb-10 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
                        Wij leveren high-end Product Owners en Project Leaders. Voor organisaties die geen genoegen nemen met gemiddeld.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#B08A5A] hover:bg-[#9a784f] text-white text-base font-medium rounded-full transition-all shadow-[0_0_20px_rgba(176,138,90,0.3)] hover:shadow-[0_0_30px_rgba(176,138,90,0.5)]" href="#contact">
                            Start Samenwerking
                        </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-base font-medium rounded-full transition-all backdrop-blur-sm" href="#services">
                            Onze Expertise
                        </a>
</div>
</div>

<div className="relative flex-1 w-full max-w-lg lg:max-w-none fade-in-up" style={{animationDelay: '0.3s'}}>
<div className="glow-bg absolute -inset-10 opacity-40 blur-3xl rounded-full"></div>
<div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">

<img alt="Executive Meeting" className="w-full aspect-[4/3] object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 bg-[#030303]/80 backdrop-blur-xl p-5 rounded-xl border border-white/10 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
<div>
<p className="text-white font-medium text-sm">Project Success Rate</p>
<p className="text-[#B08A5A] text-xs">Based on 2023 Audits</p>
</div>
</div>
<span className="text-2xl font-semibold text-white tracking-tight">98%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="values">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 md:flex items-end justify-between border-b border-white/10 pb-8">
<div className="max-w-xl">
<h2 className="text-3xl lg:text-5xl font-semibold text-white tracking-tighter mb-4">De Ferox Standaard</h2>
<p className="text-lg text-gray-500 font-light">Fundamenten waarop wij digitale excellentie bouwen.</p>
</div>
<div className="hidden md:block">
<i className="w-10 h-10 text-[#B08A5A] opacity-50" data-lucide="arrow-down-right"></i>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-[#0A0A0A] p-10 rounded-3xl border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-48 h-48 text-white" data-lucide="shield-check"></i>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#B08A5A] mb-8 border border-white/5">
<i className="w-6 h-6" data-lucide="shield"></i>
</div>
<div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Radicale Betrouwbaarheid</h3>
<p className="text-base text-gray-400 leading-relaxed max-w-md">
                                In een wereld van onzekerheid is onze afspraak heilig. Transparantie in budget, tijdlijn en resultaat staat centraal in elke interactie. Wij elimineren verrassingen.
                            </p>
</div>
</div>
</div>

<div className="md:col-span-1 bg-[#0A0A0A] p-10 rounded-3xl border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between group">
<div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#B08A5A] mb-8 border border-white/5">
<i className="w-6 h-6" data-lucide="target"></i>
</div>
<div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Doelgericht</h3>
<p className="text-base text-gray-400 leading-relaxed">
                            Focus op de stip aan de horizon. Wij vertalen vage ambities naar executie.
                        </p>
</div>
<div className="mt-8 flex justify-end">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="md:col-span-3 bg-[#0A0A0A] p-10 rounded-3xl border border-white/5 hover:border-white/10 transition-colors flex flex-col md:flex-row items-center gap-10">
<div className="flex-1">
<div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#B08A5A] mb-6 border border-white/5">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Verbindend Leiderschap</h3>
<p className="text-base text-gray-400 leading-relaxed max-w-2xl">
                            Techniek is belangrijk, maar mensen maken het verschil. Wij verbinden C-level strategie met operationele teams.
                        </p>
</div>
<div className="flex-shrink-0">
<a className="inline-flex items-center gap-2 text-white font-medium hover:text-[#B08A5A] transition-colors" href="#services">
                            Ontdek onze cultuur <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] border-y border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16">

<div className="lg:col-span-4">
<h2 className="text-3xl lg:text-5xl font-semibold text-white tracking-tighter mb-6 sticky top-24">
                        Core <br/>Expertise.
                    </h2>
</div>

<div className="lg:col-span-8 space-y-8">

<div className="group p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-[#B08A5A]/30 transition-all duration-300">
<div className="flex flex-col md:flex-row gap-6 md:items-start">
<div className="w-14 h-14 rounded-2xl bg-[#111] border border-white/5 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="briefcase"></i>
</div>
<div>
<h3 className="text-2xl font-semibold text-white mb-2">Management Rollen</h3>
<p className="text-gray-400 mb-6 leading-relaxed">
                                    Hoogwaardige sturing voor complexe transities.
                                </p>
<div className="grid sm:grid-cols-2 gap-4">
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-[#B08A5A]"></div>
<span className="text-sm text-gray-200 font-medium">Program Manager</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-[#B08A5A]"></div>
<span className="text-sm text-gray-200 font-medium">Project Manager</span>
</div>
</div>
</div>
</div>
</div>

<div className="group p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-[#B08A5A]/30 transition-all duration-300">
<div className="flex flex-col md:flex-row gap-6 md:items-start">
<div className="w-14 h-14 rounded-2xl bg-[#111] border border-white/5 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<div>
<h3 className="text-2xl font-semibold text-white mb-2">Product &amp; Team Lead</h3>
<p className="text-gray-400 mb-6 leading-relaxed">
                                    Maximaliseer waardecreatie en team performance.
                                </p>
<div className="grid sm:grid-cols-2 gap-4">
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-[#B08A5A]"></div>
<span className="text-sm text-gray-200 font-medium">Product Owner</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-[#B08A5A]"></div>
<span className="text-sm text-gray-200 font-medium">Project Leader</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="method">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl lg:text-5xl font-semibold text-white tracking-tighter mb-20">De Route naar Resultaat</h2>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="relative group">
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent absolute top-8 left-0 hidden md:block"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-[#030303] border border-white/20 flex items-center justify-center text-white text-lg font-bold mb-6 group-hover:border-[#B08A5A] group-hover:text-[#B08A5A] transition-colors shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                            1
                        </div>
<h3 className="text-xl font-medium text-white mb-3">Analyse &amp; Match</h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                            Diepte-interview om de culturele en technische fit te bepalen.
                        </p>
</div>
</div>

<div className="relative group">
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent absolute top-8 left-0 hidden md:block"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-[#030303] border border-white/20 flex items-center justify-center text-white text-lg font-bold mb-6 group-hover:border-[#B08A5A] group-hover:text-[#B08A5A] transition-colors shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                            2
                        </div>
<h3 className="text-xl font-medium text-white mb-3">Onboarding</h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                            Naadloze integratie in uw teamstructuur met duidelijke KPI's.
                        </p>
</div>
</div>

<div className="relative group">
<div className="relative z-10 flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-[#030303] border border-white/20 flex items-center justify-center text-white text-lg font-bold mb-6 group-hover:border-[#B08A5A] group-hover:text-[#B08A5A] transition-colors shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                            3
                        </div>
<h3 className="text-xl font-medium text-white mb-3">Impact &amp; Review</h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                            Continu bijsturen en rapporteren op voortgang en resultaat.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-y border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="mb-8 flex justify-center text-[#B08A5A]">
<i className="w-8 h-8 fill-current opacity-40" data-lucide="quote"></i>
</div>
<blockquote className="text-2xl md:text-4xl font-normal text-white leading-tight tracking-tight mb-10">
                "Ferox bracht de senioriteit die wij misten. Geen management-jargon, maar strakke lijnen en meetbaar resultaat binnen twee maanden."
            </blockquote>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden grayscale">
<img alt="Client" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="text-left">
<div className="text-white font-semibold text-sm">Thomas de Vries</div>
<div className="text-gray-500 text-xs">CTO, TechGrowth Solutions</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="contact">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl lg:text-6xl font-semibold text-white tracking-tighter mb-6">Klaar om te versnellen?</h2>
<p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto font-light">
                Plan een strategische sessie. Wij denken mee over uw uitdagingen en de ideale oplossing.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center justify-center h-14 px-10 bg-white text-black text-lg font-medium rounded-full transition-all hover:bg-gray-200" href="#">
                    Plan Kennismaking
                </a>
<a className="inline-flex items-center justify-center h-14 px-10 border border-white/10 text-white hover:bg-white/5 text-lg font-medium rounded-full transition-all" href="tel:+31201234567">
                    020 - 123 45 67
                </a>
</div>
</div>
</section>

<footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-[#B08A5A] flex items-center justify-center text-white">
<i className="w-3 h-3 fill-current" data-lucide="hexagon" strokeWidth="2"></i>
</div>
<span className="text-white text-lg font-semibold tracking-tight">Ferox</span>
</a>
<p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                        Excellence in Interim Management &amp; Consultancy.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Diensten</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Product Owner</a></li>
<li><a className="hover:text-white transition-colors" href="#">Project Manager</a></li>
<li><a className="hover:text-white transition-colors" href="#">Program Manager</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li>Amsterdam, NL</li>
<li><a className="hover:text-white transition-colors" href="mailto:info@ferox.nl">info@ferox.nl</a></li>
<li>+31 (0)20 123 45 67</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-600">© 2023 Ferox Consultancy. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-gray-600 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-gray-600 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 p-4 bg-[#030303]/90 backdrop-blur border-t border-white/10 md:hidden z-50">
<a className="flex items-center justify-center w-full py-3 bg-white text-black font-medium rounded-full shadow-lg" href="#contact">
            Plan Kennismaking
        </a>
</div>


    </>
  );
}
