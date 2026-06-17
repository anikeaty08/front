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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white" icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-white tracking-tight">DRUPPERS-SECURITY</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-white" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#diensten">Diensten</a>
<a className="hover:text-white transition-colors" href="#over-ons">Over Ons</a>
<a className="hover:text-white transition-colors" href="#keurmerken">Keurmerken</a>
<a className="hover:text-white transition-colors" href="#informatie">Informatie</a>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-2 rounded-full transition-all" href="#contact">
<span>Contact</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="blob bg-indigo-600 w-96 h-96 rounded-full top-0 left-1/4 -translate-x-1/2 -translate-y-1/2"></div>
<div className="blob bg-blue-600 w-80 h-80 rounded-full top-20 right-1/4 translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Streven naar uitmuntendheid
            </div>
<h1 className="lg:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight max-w-4xl mr-auto mb-6 ml-auto">
    Professionele Beveiliging &amp; <br/>
<span className="text-gradient">Service op Maat.</span>
</h1>
<p className="leading-relaxed text-lg text-slate-400 max-w-2xl mr-auto mb-10 ml-auto">
                We zijn trots op ons aanpassingsvermogen en ons streven naar uitmuntendheid in elk aspect van onze service. Ontdek wat wij te bieden hebben en zie hoe wij kunnen bijdragen aan jouw succes.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-950 font-medium rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" href="#contact">
                    Neem Contact Op
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white/5 text-white border border-white/10 font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2" href="#diensten">
                    Onze Diensten
                </a>
</div>
</div>
</main>

<section className="py-24 relative border-t border-white/5" id="diensten">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight mb-4">Onze Diensten</h2>
<p className="text-slate-400 max-w-xl">Van objectbeveiliging tot specialistische zorgbeveiliging. Wij bieden professionele oplossingen voor elke situatie.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-2xl bg-slate-900/50 border border-white/5 p-8 hover:border-white/10 transition-all duration-500">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
<div className="p-3 bg-indigo-500/10 w-fit rounded-xl text-indigo-400 mb-6">
<iconify-icon icon="solar:city-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Objectbeveiliging</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
                        De meest ingezette vorm van beveiliging. Wij combineren receptiediensten met regelmatige controlerondes om vitale ruimtes te beschermen.
                    </p>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Toegangscontrole &amp; Sleutelbeheer</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Ontvangst van bezoekers</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Signaleren onregelmatigheden</li>
</ul>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-slate-900/50 border border-white/5 p-8 hover:border-white/10 transition-all duration-500">
<div className="p-3 bg-blue-500/10 w-fit rounded-xl text-blue-400 mb-6">
<iconify-icon icon="solar:shop-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Retailbeveiliging</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
                        Bevorder het veiligheidsgevoel in uw winkel. Onze beveiligers grijpen professioneel in bij winkeldiefstal en onverwachte situaties.
                    </p>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Afhandeling aangiftes</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Handhaving winkelverboden</li>
</ul>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-slate-900/50 border border-white/5 p-8 hover:border-white/10 transition-all duration-500">
<div className="p-3 bg-orange-500/10 w-fit rounded-xl text-orange-400 mb-6">
<iconify-icon icon="solar:wineglass-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Horecabeveiliging</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Cruciaal voor het welzijn van uw personeel en gasten. Met ruime ervaring in de horeca staat bij onze beveiligers gastheerschap altijd voorop.
                    </p>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-slate-900/50 border border-white/5 p-8 hover:border-white/10 transition-all duration-500">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
<div className="p-3 bg-emerald-500/10 w-fit rounded-xl text-emerald-400 mb-6">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Zorgbeveiliging</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
                        Jarenlange ervaring in high-risk zorgbeveiliging, waaronder psychiatrie en verslavingszorg.
                    </p>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Hoofd koel houden</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Professioneel handelen</li>
</ul>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-slate-900/50 border border-white/5 p-8 hover:border-white/10 transition-all duration-500">
<div className="p-3 bg-purple-500/10 w-fit rounded-xl text-purple-400 mb-6">
<iconify-icon icon="solar:case-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Kantoorbeveiliging</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
                        Essentieel voor het beschermen van medewerkers, eigendommen en vertrouwelijke informatie.
                    </p>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2"><iconify-icon className="text-purple-400" icon="solar:check-circle-linear"></iconify-icon> Preventie inbraak &amp; diefstal</li>
<li className="flex items-center gap-2"><iconify-icon className="text-purple-400" icon="solar:check-circle-linear"></iconify-icon> Voorkomen van agressie</li>
</ul>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900/20 to-slate-900/50 border border-white/5 p-8 flex flex-col justify-between hover:border-white/10 transition-all">
<div className="">
<div className="p-3 bg-white/5 w-fit rounded-xl text-white mb-6">
<iconify-icon icon="solar:question-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Niet gevonden wat u zoekt?</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                            Staat de beveiligingssector die u zoekt hier niet tussen? Neem dan contact met ons op, dan denken wij graag met u mee voor een passende oplossing.
                        </p>
</div>
<div className="mt-8">
<a className="text-sm font-medium text-white flex items-center gap-2 group-hover:gap-3 transition-all" href="#contact">
                            Neem contact op <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-slate-900/20" id="over-ons">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Betrouwbaar &amp; Ervaren</h2>
<p className="text-slate-400 text-lg leading-relaxed mb-10">
                Of het nu gaat om het signaleren van onregelmatigheden tijdens controlerondes of het professioneel afronden van onverwachte situaties: Druppers-Security staat voor u klaar. Wij smoren problemen in de kiem zodat schade aan uw organisatie wordt voorkomen.
            </p>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-4xl font-medium text-white tracking-tight mb-6">Neem contact op</h2>
<p className="text-slate-400">Heeft u vragen over onze diensten of wilt u een passende oplossing bespreken?</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
<a className="flex flex-col items-center justify-center p-8 rounded-2xl bg-slate-900/50 border border-white/10 hover:bg-slate-900 hover:border-indigo-500/50 transition-all group" href="mailto:info@druppers-security.nl">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-4 group-hover:bg-indigo-500 group-hover:scale-110 transition-all">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<span className="text-sm text-slate-500 mb-1">Email ons</span>
<span className="text-white font-medium">info@druppers-security.nl</span>
</a>
<a className="flex flex-col items-center justify-center p-8 rounded-2xl bg-slate-900/50 border border-white/10 hover:bg-slate-900 hover:border-indigo-500/50 transition-all group" href="tel:+31681448594">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-4 group-hover:bg-indigo-500 group-hover:scale-110 transition-all">
<iconify-icon icon="solar:phone-linear" width="24"></iconify-icon>
</div>
<span className="text-sm text-slate-500 mb-1">Bel ons</span>
<span className="text-white font-medium">+31 6 81448594</span>
</a>
</div>

<form className="space-y-4 max-w-lg mx-auto">
<div>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm" placeholder="Naam" type="text"/>
</div>
<div>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm" placeholder="Email adres" type="email"/>
</div>
<div>
<textarea className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm" placeholder="Uw bericht" rows="4"></textarea>
</div>
<button className="w-full bg-white text-slate-950 font-medium py-3 rounded-lg hover:bg-slate-200 transition-colors">
                    Verstuur Bericht
                </button>
</form>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-slate-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col md:flex-row items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-white" icon="solar:shield-keyhole-linear" width="20"></iconify-icon>
<span className="text-sm font-bold text-white tracking-tight">DRUPPERS-SECURITY</span>
</div>
<span className="text-sm text-slate-500">© 2024 Druppers-Security</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#keurmerken">Keurmerken</a>
<a className="hover:text-white transition-colors" href="#informatie">Informatie</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
