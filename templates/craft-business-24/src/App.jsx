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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="text-white text-xl font-medium tracking-tighter uppercase flex items-center gap-1">
                STRUKTUR<span className="text-amber-500">WERK</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-400">
<a className="hover:text-amber-400 transition-colors" href="#herausforderungen">Herausforderungen</a>
<a className="hover:text-amber-400 transition-colors" href="#vorteile">System</a>
<a className="hover:text-amber-400 transition-colors" href="#cases">Resultate</a>
</div>
<a className="hidden md:inline-flex items-center justify-center bg-white/5 border border-white/10 text-white px-5 py-2.5 text-sm font-medium rounded-full hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 transition-all duration-300" href="#termin">
                Analyse anfordern
            </a>
</div>
</nav>

<section className="relative bg-slate-950 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium mb-8 backdrop-blur-md">
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
                        Exklusiv für Inhaber von Handwerksbetrieben
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tighter leading-[1.1] mb-6">
                        Skalieren Sie Ihren Handwerksbetrieb – <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">ohne operatives Chaos.</span>
</h1>
<p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl font-light">
                        Wir digitalisieren Ihre Prozesse, systematisieren Ihre Kundengewinnung und schaffen Strukturen, die Sie als Geschäftsführer endlich aus dem Tagesgeschäft befreien.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3 text-slate-300 group">
<div className="mt-0.5 w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
<iconify-icon className="text-amber-400" height="14" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="font-light">Planbare Gewinnung von hochpreisigen Premium-Aufträgen</span>
</li>
<li className="flex items-start gap-3 text-slate-300 group">
<div className="mt-0.5 w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
<iconify-icon className="text-amber-400" height="14" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="font-light">Digitale, reibungslose Prozesse im Büro und auf der Baustelle</span>
</li>
<li className="flex items-start gap-3 text-slate-300 group">
<div className="mt-0.5 w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
<iconify-icon className="text-amber-400" height="14" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="font-light">Mehr Zeit am Unternehmen zu arbeiten, statt im Unternehmen</span>
</li>
</ul>
<div className="flex flex-col sm:flex-row gap-4">
<a className="relative inline-flex items-center justify-center gap-2 bg-amber-500 text-slate-950 px-8 py-4 text-sm font-medium rounded-full overflow-hidden group hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.4)] transition-all duration-300" href="#termin">
<span className="relative z-10 flex items-center gap-2">
                                Potenzialanalyse sichern
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
</a>
</div>
<div className="mt-12 flex items-center gap-4 text-xs text-slate-400 font-normal">
<div className="flex -space-x-3 hover:space-x-0 transition-all duration-300">
<img alt="Kunde" className="w-9 h-9 rounded-full border-2 border-slate-950 object-cover relative z-30 transition-transform hover:scale-110" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Kunde" className="w-9 h-9 rounded-full border-2 border-slate-950 object-cover relative z-20 transition-transform hover:scale-110" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Kunde" className="w-9 h-9 rounded-full border-2 border-slate-950 object-cover relative z-10 transition-transform hover:scale-110" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&amp;h=100&amp;fit=crop"/>
</div>
<span className="tracking-wide">Bereits über 120 Handwerksbetrieben geholfen</span>
</div>
</div>
<div className="relative hidden lg:block group">
<div className="absolute -inset-1 bg-gradient-to-tr from-amber-500/30 to-blue-500/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
<div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10"></div>
<img alt="Handwerker bei der Planung" className="relative z-0 w-full object-cover h-[600px] grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="herausforderungen">
<div className="absolute inset-0 bg-grid-pattern-light [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-amber-500 text-xs font-medium tracking-widest uppercase mb-4 block">Die Realität</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-slate-900 mb-6">
                    Kommt Ihnen das aus Ihrem Betriebsalltag bekannt vor?
                </h2>
<p className="text-slate-500 text-lg font-light leading-relaxed">
                    Viele Handwerksbetriebe stagnieren nicht mangels Aufträgen, sondern an fehlenden Strukturen.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-8 text-slate-400 group-hover:text-amber-500 group-hover:border-amber-200 group-hover:bg-amber-50 transition-colors duration-300">
<iconify-icon height="24" icon="solar:danger-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-4 tracking-tight">Operative Überlastung</h3>
<p className="text-slate-500 font-light leading-relaxed text-sm">
                        Sie sind der größte Flaschenhals im eigenen Unternehmen. Jede wichtige Entscheidung und jedes Problem landet auf Ihrem Schreibtisch.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-8 text-slate-400 group-hover:text-amber-500 group-hover:border-amber-200 group-hover:bg-amber-50 transition-colors duration-300">
<iconify-icon height="24" icon="solar:documents-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-4 tracking-tight">Zettelwirtschaft &amp; Chaos</h3>
<p className="text-slate-500 font-light leading-relaxed text-sm">
                        Prozesse sind nicht dokumentiert. Informationen gehen zwischen Baustelle und Büro verloren. Die Nachkalkulation fehlt oft komplett.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-8 text-slate-400 group-hover:text-amber-500 group-hover:border-amber-200 group-hover:bg-amber-50 transition-colors duration-300">
<iconify-icon height="24" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-4 tracking-tight">Abhängigkeit von Empfehlungen</h3>
<p className="text-slate-500 font-light leading-relaxed text-sm">
                        Sie haben kein verlässliches, digitales System, um gezielt profitable Anfragen zu generieren und nehmen oft Aufträge mit schlechter Marge an.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-950 border-y border-white/5 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-8 leading-[1.2]">
                Stellen Sie sich vor, Ihr Handwerksbetrieb läuft wie ein <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Schweizer Uhrwerk.</span>
</h2>
<p className="text-lg text-slate-400 font-light leading-relaxed mb-16 max-w-3xl mx-auto">
                Ihre Mitarbeiter wissen genau, was zu tun ist, ohne Sie ständig fragen zu müssen. 
                Die Baustellen sind digital angebunden. Ihr Verkaufsprozess filtert automatisch die besten und profitabelsten Kunden heraus. 
                Sie haben endlich wieder die Kontrolle, Übersicht und die Freiheit, am Wachstum zu arbeiten.
            </p>
<div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
<div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 flex items-center gap-5 rounded-2xl hover:bg-white/10 transition-colors duration-300">
<div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20 flex-shrink-0">
<iconify-icon className="text-amber-400" height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="text-slate-200 font-normal text-sm">Volle Kontrolle &amp; Transparenz</span>
</div>
<div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 flex items-center gap-5 rounded-2xl hover:bg-white/10 transition-colors duration-300">
<div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20 flex-shrink-0">
<iconify-icon className="text-amber-400" height="20" icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<span className="text-slate-200 font-normal text-sm">Planbares, profitables Wachstum</span>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 py-20 relative overflow-hidden">
<div className="absolute right-0 top-0 w-1/2 h-full bg-white/10 blur-3xl transform skew-x-12 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
<div className="text-slate-950 md:w-2/3">
<h2 className="text-2xl md:text-3xl font-medium tracking-tighter mb-3">Bereit, das Fundament für Skalierung zu legen?</h2>
<p className="text-slate-900/80 font-normal text-lg">Lassen Sie uns in einem unverbindlichen Gespräch herausfinden, wo Ihre größten Hebel liegen.</p>
</div>
<div className="md:w-1/3 flex justify-end w-full">
<a className="w-full md:w-auto inline-flex items-center justify-center bg-slate-950 text-white px-8 py-4 text-sm font-medium rounded-full hover:bg-slate-800 hover:shadow-xl transition-all duration-300 group" href="#termin">
                    Jetzt Potenzial erkennen
                    <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-32 bg-slate-50 relative overflow-hidden" id="vorteile">

<div className="absolute top-40 right-0 w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-20 md:flex justify-between items-end gap-10">
<div className="max-w-2xl">
<span className="text-amber-500 text-xs font-medium tracking-widest uppercase mb-4 block">Ihr Nutzen</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-slate-900 leading-[1.1]">
                        Resultate, die über den bloßen Umsatz hinausgehen.
                    </h2>
</div>
<p className="text-slate-500 text-lg font-light mt-6 md:mt-0 max-w-md">
                    Wir optimieren nicht nur einzelne Bereiche, sondern implementieren ein ganzheitliches System für Ihren Betrieb.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-x-16 gap-y-16">

<div className="flex gap-6 group">
<div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 text-amber-500 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
<iconify-icon height="28" icon="solar:user-speak-rounded-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Hochwertige Kundenanfragen</h3>
<p className="text-slate-500 font-light leading-relaxed text-sm">Systematisierte Gewinnung von Premium-Kunden, die Ihre Qualität schätzen und bereit sind, entsprechende Preise zu zahlen. Keine Preisdiskussionen mehr.</p>
</div>
</div>

<div className="flex gap-6 group">
<div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 text-amber-500 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
<iconify-icon height="28" icon="solar:cpu-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Digitale Prozesse</h3>
<p className="text-slate-500 font-light leading-relaxed text-sm">Von der ersten Anfrage über die Angebotslegung bis zur digitalen Bauakte. Ein nahtloser Informationsfluss spart wöchentlich unzählige Stunden im Büro.</p>
</div>
</div>

<div className="flex gap-6 group">
<div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 text-amber-500 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
<iconify-icon height="28" icon="solar:chart-square-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Höhere Rentabilität</h3>
<p className="text-slate-500 font-light leading-relaxed text-sm">Durch saubere Kalkulation, klare Prozesse und Reduzierung von Fehlern auf der Baustelle steigern wir Ihre Marge signifikant, ohne mehr arbeiten zu müssen.</p>
</div>
</div>

<div className="flex gap-6 group">
<div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 text-amber-500 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
<iconify-icon height="28" icon="solar:cup-star-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Starke Arbeitgebermarke</h3>
<p className="text-slate-500 font-light leading-relaxed text-sm">Ein moderner, strukturierter Betrieb zieht Fachkräfte magisch an. Werden Sie zum attraktivsten Arbeitgeber für Handwerker in Ihrer Region.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-y border-slate-100 relative" id="cases">
<div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-light [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-amber-500 text-xs font-medium tracking-widest uppercase mb-4 block">Erfolge</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-slate-900">
                    Echte Ergebnisse aus der Praxis.
                </h2>
</div>
<div className="grid md:grid-cols-2 gap-10">

<div className="bg-white border border-slate-100 rounded-3xl p-10 flex flex-col shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.08)] transition-all duration-500">
<div className="flex items-center gap-5 mb-8">
<div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center text-slate-500 font-medium border border-white shadow-sm">
                            MW
                        </div>
<div>
<h4 className="font-medium text-slate-900 text-lg tracking-tight">Metallbau Weber GmbH</h4>
<p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">24 Mitarbeiter</p>
</div>
</div>
<div className="relative flex-grow">
<iconify-icon className="absolute -top-4 -left-4 text-slate-100 text-6xl -z-10" icon="solar:quote-right-linear"></iconify-icon>
<blockquote className="text-slate-600 font-light leading-relaxed mb-10 z-10 relative">
                            "Vor der Zusammenarbeit war ich von 6 bis 20 Uhr im Betrieb. Durch die Implementierung digitaler Prozesse und sauberer Verantwortlichkeiten habe ich heute wieder Zeit für Strategie und Familie. Der Umsatz ist dabei um 40% gestiegen, weil wir profitablere Aufträge annehmen."
                        </blockquote>
</div>
<div className="pt-8 border-t border-slate-100 grid grid-cols-2 gap-6">
<div>
<div className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 tracking-tighter mb-1">+40%</div>
<div className="text-xs text-slate-400 font-normal uppercase tracking-wider">Umsatzwachstum</div>
</div>
<div>
<div className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-300 tracking-tighter mb-1">-15h</div>
<div className="text-xs text-slate-400 font-normal uppercase tracking-wider">Operative Arbeit / Wo.</div>
</div>
</div>
</div>

<div className="bg-white border border-slate-100 rounded-3xl p-10 flex flex-col shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.08)] transition-all duration-500">
<div className="flex items-center gap-5 mb-8">
<div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center text-slate-500 font-medium border border-white shadow-sm">
                            HE
                        </div>
<div>
<h4 className="font-medium text-slate-900 text-lg tracking-tight">Holzbau Engert</h4>
<p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">12 Mitarbeiter</p>
</div>
</div>
<div className="relative flex-grow">
<iconify-icon className="absolute -top-4 -left-4 text-slate-100 text-6xl -z-10" icon="solar:quote-right-linear"></iconify-icon>
<blockquote className="text-slate-600 font-light leading-relaxed mb-10 z-10 relative">
                            "Wir hatten genug Aufträge, aber die Zettelwirtschaft hat uns aufgefressen. Heute läuft jede Anfrage über ein digitales System, Angebote gehen in 24 Stunden raus und die Rechnungsstellung passiert per Klick. Eine absolute Erleichterung."
                        </blockquote>
</div>
<div className="pt-8 border-t border-slate-100 grid grid-cols-2 gap-6">
<div>
<div className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 tracking-tighter mb-1">100%</div>
<div className="text-xs text-slate-400 font-normal uppercase tracking-wider">Digitale Abwicklung</div>
</div>
<div>
<div className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-300 tracking-tighter mb-1">+25%</div>
<div className="text-xs text-slate-400 font-normal uppercase tracking-wider">Margensteigerung</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-950 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.05),rgba(2,6,23,1))] pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<span className="text-amber-500 text-xs font-medium tracking-widest uppercase mb-4 block">Das System</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter">
                    In 4 Schritten zum<br/> <span className="text-slate-400">strukturierten Handwerksbetrieb.</span>
</h2>
</div>
<div className="relative">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-white/10 to-transparent transform md:-translate-x-1/2"></div>
<div className="space-y-16">

<div className="relative flex flex-col md:flex-row items-start md:justify-between group cursor-default">
<div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-amber-500 transform -translate-x-1/2 mt-1.5 md:mt-1 z-10 group-hover:scale-150 group-hover:bg-amber-500 transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.3)]"></div>
<div className="md:w-5/12 pl-16 md:pl-0 md:text-right md:pr-16">
<div className="text-amber-500 text-xs font-medium uppercase tracking-widest mb-2">Phase 1</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Tiefenanalyse &amp; Status Quo</h3>
</div>
<div className="md:w-5/12 pl-16 md:pl-16 mt-3 md:mt-0 text-slate-400 font-light text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                            Wir durchleuchten Ihre aktuellen Prozesse von der Anfrage bis zur Rechnungsstellung. Wir identifizieren Engpässe, Margenfresser und ungenutzte Potenziale in Ihrem Betrieb.
                        </div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:justify-between group cursor-default">
<div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-white/20 group-hover:border-amber-500 transform -translate-x-1/2 mt-1.5 md:mt-1 z-10 group-hover:scale-150 group-hover:bg-amber-500 transition-all duration-300"></div>
<div className="md:w-5/12 pl-16 md:pl-0 md:text-right md:pr-16 md:order-1">
<div className="text-amber-500 text-xs font-medium uppercase tracking-widest mb-2">Phase 2</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Struktur &amp; Strategie</h3>
</div>
<div className="md:w-5/12 pl-16 md:pl-16 mt-3 md:mt-0 text-slate-400 font-light text-sm leading-relaxed md:text-right md:pr-16 md:pl-0 md:order-0 group-hover:text-slate-300 transition-colors">
                            Wir erstellen einen klaren Fahrplan. Sie erhalten exakte Blaupausen für Prozesse, digitale Tools und Systeme, die genau auf Ihr Gewerk zugeschnitten sind.
                        </div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:justify-between group cursor-default">
<div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-white/20 group-hover:border-amber-500 transform -translate-x-1/2 mt-1.5 md:mt-1 z-10 group-hover:scale-150 group-hover:bg-amber-500 transition-all duration-300"></div>
<div className="md:w-5/12 pl-16 md:pl-0 md:text-right md:pr-16">
<div className="text-amber-500 text-xs font-medium uppercase tracking-widest mb-2">Phase 3</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Umsetzung &amp; Digitalisierung</h3>
</div>
<div className="md:w-5/12 pl-16 md:pl-16 mt-3 md:mt-0 text-slate-400 font-light text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                            Wir lassen Sie nicht mit Theorie allein. Gemeinsam implementieren wir digitale Bauakten, automatisierte Neukundengewinnung und schulen Ihr Team für einen reibungslosen Übergang.
                        </div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:justify-between group cursor-default">
<div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-white/20 group-hover:border-amber-500 transform -translate-x-1/2 mt-1.5 md:mt-1 z-10 group-hover:scale-150 group-hover:bg-amber-500 transition-all duration-300"></div>
<div className="md:w-5/12 pl-16 md:pl-0 md:text-right md:pr-16 md:order-1">
<div className="text-amber-500 text-xs font-medium uppercase tracking-widest mb-2">Phase 4</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Übergabe &amp; Skalierung</h3>
</div>
<div className="md:w-5/12 pl-16 md:pl-16 mt-3 md:mt-0 text-slate-400 font-light text-sm leading-relaxed md:text-right md:pr-16 md:pl-0 md:order-0 group-hover:text-slate-300 transition-colors">
                            Das System läuft. Sie haben volle Transparenz über Kennzahlen. Jetzt konzentrieren wir uns auf profitables Wachstum und Ihre Positionierung als regionaler Marktführer.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50 relative overflow-hidden" id="termin">
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="bg-slate-950 rounded-[2.5rem] p-10 md:p-16 lg:p-20 text-white border border-slate-800/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden">

<div className="absolute -right-40 -top-40 w-96 h-96 bg-amber-500/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute -left-40 -bottom-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-6 leading-[1.15]">Möchten Sie wissen, ob unser System bei Ihnen funktioniert?</h2>
<p className="text-slate-400 font-light mb-12 text-lg">Buchen Sie jetzt ein kostenfreies Erstgespräch. Wir analysieren Ihre Situation und zeigen Ihnen ungenutzte Hebel auf.</p>
<div className="space-y-8">
<div className="flex gap-5">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 font-medium text-sm flex-shrink-0">1</div>
<div>
<h4 className="font-medium text-slate-200">Termin auswählen</h4>
<p className="text-sm text-slate-500 mt-2 font-light">Suchen Sie sich einen passenden Termin im Kalender aus.</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 font-medium text-sm flex-shrink-0">2</div>
<div>
<h4 className="font-medium text-slate-200">Kurze Vorab-Info</h4>
<p className="text-sm text-slate-500 mt-2 font-light">Beantworten Sie 3 kurze Fragen zu Ihrem Betrieb, damit wir uns optimal vorbereiten können.</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-medium text-sm flex-shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.2)]">3</div>
<div>
<h4 className="font-medium text-amber-400">Persönliches Gespräch</h4>
<p className="text-sm text-slate-400 mt-2 font-light">Wir sprechen 30 Minuten über konkrete Lösungsansätze für Ihren Betrieb.</p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-8 md:p-10 text-slate-900 shadow-2xl relative">
<div className="text-center mb-8">
<h3 className="text-xl font-medium tracking-tight mb-2">Erstgespräch vereinbaren</h3>
<p className="text-sm text-slate-500 font-light">Kostenfrei und zu 100% unverbindlich.</p>
</div>

<div className="space-y-5">
<div className="group">
<label className="block text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-amber-500">Ihr Name</label>
<input className="w-full border-b border-slate-200 px-0 py-2 text-sm bg-transparent focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-300" placeholder="Max Mustermann" type="text"/>
</div>
<div className="group">
<label className="block text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-amber-500">Firmenname</label>
<input className="w-full border-b border-slate-200 px-0 py-2 text-sm bg-transparent focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-300" placeholder="Mustermann Holzbau GmbH" type="text"/>
</div>
<div className="group">
<label className="block text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-amber-500">E-Mail Adresse</label>
<input className="w-full border-b border-slate-200 px-0 py-2 text-sm bg-transparent focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-300" placeholder="max@unternehmen.de" type="email"/>
</div>
<button className="w-full bg-slate-950 hover:bg-slate-800 text-white font-medium px-4 py-4 rounded-xl transition-all duration-300 mt-6 text-sm flex items-center justify-center gap-2 group shadow-lg shadow-slate-900/20">
                                Zum Kalender
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div className="flex items-center justify-center gap-2 text-xs text-slate-400 mt-6 font-light">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
                                Ihre Daten sind bei uns zu 100% sicher.
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 py-16 border-t border-white/5 text-center text-slate-600 text-xs font-light">
<div className="max-w-7xl mx-auto px-6">
<div className="text-slate-300 text-lg font-medium tracking-tighter uppercase mb-8 flex items-center justify-center gap-1">
                STRUKTUR<span className="text-amber-500">WERK</span>
</div>
<div className="flex justify-center gap-8 mb-10">
<a className="hover:text-amber-400 transition-colors" href="#">Impressum</a>
<a className="hover:text-amber-400 transition-colors" href="#">Datenschutz</a>
<a className="hover:text-amber-400 transition-colors" href="#">AGB</a>
</div>
<p>© 2023 StrukturWerk Consulting. Alle Rechte vorbehalten.</p>
</div>
</footer>

    </>
  );
}
