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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="lucide:hard-hat" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900 group-hover:opacity-80 transition-opacity">TITICONST</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#acasa">Acasă</a>
<a className="hover:text-slate-900 transition-colors" href="#despre">Despre Noi</a>
<a className="hover:text-slate-900 transition-colors" href="#servicii">Servicii</a>
<a className="hover:text-slate-900 transition-colors" href="#colaboratori">Colaboratori</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</nav>

<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-slate-900" href="#contact">
                Cere Ofertă
            </a>

<button className="md:hidden text-slate-900">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 overflow-hidden" id="acasa">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="relative max-w-7xl mx-auto px-6 text-center lg:text-left lg:flex lg:items-center lg:justify-between gap-12">
<div className="lg:w-3/5 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-500 text-xs font-medium uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                    Calitate Garantată
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
                    Construim cu <span className="text-amber-500">responsabilitate</span> din 1998.
                </h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                    Peste 25 de ani de experiență în construcții civile, industriale și reabilitări în Bacău. Nu promitem mai mult decât putem face, dar facem tot ce promitem.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
<a className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-slate-900 bg-amber-500 rounded-lg hover:bg-amber-400 transition-colors" href="#servicii">
                        Vezi Serviciile Noastre
                    </a>
<a className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-white border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors" href="#contact">
                        Contactează-ne
                    </a>
</div>
</div>

<div className="hidden lg:block lg:w-2/5">
<div className="relative p-8 bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl">
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium">Seriozitate</h3>
<p className="text-sm text-slate-400">Termene respectate cu strictețe</p>
</div>
</div>
<div className="w-full h-px bg-slate-700"></div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium">Echipă Stabilă</h3>
<p className="text-sm text-slate-400">Personal calificat și dedicat</p>
</div>
</div>
<div className="w-full h-px bg-slate-700"></div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<iconify-icon icon="lucide:award" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium">Experiență</h3>
<p className="text-sm text-slate-400">25+ ani pe piața locală</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="despre">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 text-amber-600 font-medium tracking-tight">
<iconify-icon icon="lucide:activity" strokeWidth="1.5" width="20"></iconify-icon>
<span>Cine suntem</span>
</div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
                        O companie solidă, construită pe încredere.
                    </h2>
<p className="text-lg text-slate-600 leading-relaxed">
                        Titiconst este o firmă de construcții din Bacău, cu peste 25 de ani de experiență în execuția de case la roșu, reabilitări, hale industriale și lucrări din beton armat. 
                    </p>
<p className="text-lg text-slate-600 leading-relaxed">
                        Realizăm construcții civile și industriale, garduri, platforme și amenajări exterioare — toate executate corect, cu materiale de calitate și oameni dedicați.
                    </p>
<div className="grid grid-cols-2 gap-8 pt-6">
<div>
<span className="block text-4xl font-semibold text-slate-900 tracking-tight">1998</span>
<span className="text-sm text-slate-500 font-medium mt-1">Anul înființării</span>
</div>
<div>
<span className="block text-4xl font-semibold text-slate-900 tracking-tight">Specialiști</span>
<span className="text-sm text-slate-500 font-medium mt-1">Cu experiență vastă</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden relative group">

<div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
<iconify-icon icon="lucide:building-2" strokeWidth="1" width="64"></iconify-icon>
</div>

<div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur rounded-xl border border-slate-200 shadow-lg">
<div className="flex items-start gap-4">
<iconify-icon className="text-amber-500 shrink-0" icon="lucide:quote" strokeWidth="1.5" width="24"></iconify-icon>
<p className="text-sm text-slate-700 italic">"Calitatea nu este un act, ci un obicei. Construim pentru viitor, respectând standardele prezentului."</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="servicii">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Serviciile Noastre</h2>
<p className="text-lg text-slate-600">Oferim o gamă completă de servicii în domeniul construcțiilor, de la fundație până la structuri complexe metalice.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:home" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Construcții Civile &amp; Industriale</h3>
<p className="text-slate-500 text-sm leading-relaxed">Execuție de case la roșu, hale industriale moderne și structuri metalice durabile adaptate nevoilor tale.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:hammer" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Reabilitări și Renovări</h3>
<p className="text-slate-500 text-sm leading-relaxed">Modernizarea clădirilor existente, consolidări structurale și reparații capitale pentru extinderea duratei de viață.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Lucrări Beton &amp; Fundații</h3>
<p className="text-slate-500 text-sm leading-relaxed">Expertiză în turnarea betonului armat, fundații speciale și platforme industriale rezistente la trafic greu.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:trees" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Amenajări Exterioare</h3>
<p className="text-slate-500 text-sm leading-relaxed">Construcție de garduri, pavaje pietonale și carosabile, sistematizări verticale și amenajări peisagistice.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:file-text" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Consultanță și Ofertare</h3>
<p className="text-slate-500 text-sm leading-relaxed">Suport tehnic complet, analiză de proiect și întocmirea de devize corecte și transparente.</p>
</div>

<div className="bg-slate-900 p-8 rounded-2xl flex flex-col justify-center items-start">
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Ai un proiect în plan?</h3>
<p className="text-slate-400 text-sm mb-6">Discută cu echipa noastră despre viziunea ta.</p>
<a className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors" href="#contact">
                        Solicită ofertă
                        <iconify-icon icon="lucide:arrow-right" strokeWidth="2" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="colaboratori">
<div className="max-w-7xl mx-auto px-6 text-center">
<h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-12">Parteneri și Colaboratori de Încredere</h3>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-70">

<div className="flex items-center gap-2 text-xl font-bold text-slate-800 tracking-tighter">
<iconify-icon icon="lucide:landmark" width="24"></iconify-icon> PRIMĂRIA BACĂU
                </div>
<div className="flex items-center gap-2 text-xl font-bold text-slate-800 tracking-tight">
                    GLENCORA
                </div>
<div className="flex items-center gap-2 text-xl font-bold text-slate-800 tracking-tight">
                    DEMECO
                </div>
<div className="flex items-center gap-2 text-lg font-bold text-slate-800 tracking-tight">
<span className="font-normal border p-1 border-slate-800 rounded">CN</span> VASILE ALECSANDRI
                </div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 lg:col-span-1">
<a className="flex items-center gap-2 text-white mb-6" href="#">
<div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center text-slate-900">
<iconify-icon icon="lucide:hard-hat" strokeWidth="2" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight">TITICONST</span>
</a>
<p className="text-sm leading-relaxed mb-6">
                        Construim viitorul cu responsabilitate și profesionalism în Bacău și împrejurimi.
                    </p>
</div>

<div className="col-span-1 lg:col-span-2">
<h4 className="text-white font-semibold mb-6">Informații Contact</h4>
<div className="grid md:grid-cols-2 gap-6">
<div className="flex items-start gap-3">
<iconify-icon className="text-amber-500 shrink-0 mt-1" icon="lucide:map-pin" width="20"></iconify-icon>
<span className="text-sm">Strada Militari nr. 35A, Birou 1–2, Etaj P,<br/>Bacău, 600233</span>
</div>
<div className="space-y-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-amber-500 shrink-0" icon="lucide:phone" width="20"></iconify-icon>
<a className="text-sm hover:text-white transition-colors" href="tel:0740807947">0740 807 947</a>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-amber-500 shrink-0" icon="lucide:mail" width="20"></iconify-icon>
<a className="text-sm hover:text-white transition-colors" href="mailto:titiconst@yahoo.com">titiconst@yahoo.com</a>
</div>
</div>
</div>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Program de Lucru</h4>
<ul className="space-y-3 text-sm">
<li className="flex justify-between">
<span>Luni - Vineri:</span>
<span className="text-white">08:00 - 17:00</span>
</li>
<li className="flex justify-between">
<span>Sâmbătă:</span>
<span className="text-white">Închis / Urgențe</span>
</li>
<li className="flex justify-between">
<span>Duminică:</span>
<span className="text-white">Închis</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2024 Titiconst. Toate drepturile rezervate.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Termeni și condiții</a>
<a className="hover:text-white transition-colors" href="#">Politica de confidențialitate</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
