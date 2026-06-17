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
            // Mouse movement for spotlight effect
            const cards = document.querySelectorAll('.spotlight-card');
            
            document.addEventListener('mousemove', (e) => {
                cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
            });

            // Scroll Reveal Animation
            const reveals = document.querySelectorAll('.reveal');
            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 100;
                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };
            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll();

            // Navbar Glass Transition
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('shadow-lg', 'shadow-indigo-500/5');
                    navbar.style.background = "rgba(2, 6, 23, 0.85)";
                } else {
                    navbar.classList.remove('shadow-lg', 'shadow-indigo-500/5');
                    navbar.style.background = "rgba(2, 6, 23, 0.7)";
                }
            });
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
      

<div className="fixed inset-0 pointer-events-none z-[-1]">
<div className="absolute top-0 left-0 right-0 h-[80vh] bg-grid opacity-30"></div>
<div className="glow-orb w-[500px] h-[500px] bg-indigo-600/20 top-[-100px] left-[-100px]"></div>
<div className="glow-orb w-[600px] h-[600px] bg-cyan-600/10 bottom-[0] right-[-100px]" style={{animationDelay: '-5s'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
<div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg shadow-lg shadow-indigo-500/20">
<span className="font-bold text-white text-lg">B</span>
</div>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">BEPROOF</span>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-300 bg-white/5 border border-white/5 px-4 py-2 rounded-full hover:bg-white/10 hover:text-white transition-all group" href="#contact">
                Kontakt aufnehmen
                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
</nav>

<section className="relative min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden">
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] md:text-xs font-semibold text-indigo-300 mb-8 reveal hover:bg-indigo-500/15 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                OPERATIVER PARTNER AUS BREISACH
            </div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.05] reveal" style={{transitionDelay: '100ms'}}>
<span className="block text-slate-300">Operativer Partner für</span>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-white">digitale Rekrutierung</span>
</h1>

<p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed reveal" style={{transitionDelay: '200ms'}}>
                Personalengpässe in Bau, Handwerk &amp; Industrie dauerhaft lösen. Wir übernehmen den kompletten Prozess – von der Sichtbarkeit bis zur Einstellung.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal" style={{transitionDelay: '300ms'}}>
<button className="btn-gradient text-white px-8 py-4 rounded-lg font-medium tracking-wide flex items-center gap-2 shadow-lg shadow-indigo-500/25">
                    Strategiegespräch
                    <iconify-icon icon="lucide:calendar-check" width="18"></iconify-icon>
</button>
<button className="px-8 py-4 rounded-lg font-medium text-slate-300 hover:text-white border border-white/5 hover:bg-white/5 transition-all flex items-center gap-2">
<iconify-icon icon="lucide:play-circle" width="18"></iconify-icon>
                    Prozess ansehen
                </button>
</div>

<div className="mt-16 relative reveal opacity-80" style={{transitionDelay: '500ms'}}>
<div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10 h-32 bottom-0 w-full"></div>
<div className="w-full max-w-4xl mx-auto h-64 md:h-96 rounded-t-2xl border-x border-t border-indigo-500/20 bg-gradient-to-b from-indigo-900/10 to-transparent backdrop-blur-sm relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-indigo-500/30 rotate-12 blur-[1px]"></div>
<div className="absolute top-1/3 left-1/4 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl animate-pulse"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center space-y-2">
<div className="flex gap-2 justify-center mb-4">
<div className="w-12 h-16 bg-slate-800/50 rounded border border-white/5 animate-pulse"></div>
<div className="w-12 h-16 bg-slate-800/50 rounded border border-white/5 animate-pulse" style={{animationDelay: '0.2s'}}></div>
<div className="w-12 h-16 bg-slate-800/50 rounded border border-white/5 animate-pulse" style={{animationDelay: '0.4s'}}></div>
</div>
<p className="text-xs font-mono text-indigo-400/60">SYSTEM ACTIVE: CANDIDATE FLOW OPTIMIZED</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-[#020617]/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mb-8">Vertrauen von Marktführern</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">

<iconify-icon className="text-white" icon="lucide:hexagon" width="32"></iconify-icon>
<iconify-icon className="text-white" icon="lucide:triangle" width="32"></iconify-icon>
<iconify-icon className="text-white" icon="lucide:circle" width="32"></iconify-icon>
<iconify-icon className="text-white" icon="lucide:square" width="32"></iconify-icon>
<iconify-icon className="text-white" icon="lucide:diamond" width="32"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-tight">
                    Wachstum scheitert nicht am Markt. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Es scheitert am Personal.</span>
</h2>
<div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-transparent rounded mb-8"></div>
</div>
<div className="reveal" style={{transitionDelay: '200ms'}}>
<p className="text-slate-400 text-lg leading-relaxed mb-6">
                    Sie führen einen soliden Betrieb. Die Auftragslage ist gut. Doch das Thema Personal bindet dauerhaft Aufmerksamkeit auf Führungsebene?
                </p>
<p className="text-slate-400 text-lg leading-relaxed">
                    Beproof implementiert ein operatives System im Hintergrund. Ziel ist ein Zustand, in dem Sie sich auf Ihr Tagesgeschäft konzentrieren können – während qualifizierte Fachkräfte planbar zugeführt werden.
                </p>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">

<div className="absolute right-0 top-1/4 w-96 h-96 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<span className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-2 block">Vorteile</span>
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Ergebnisse, die bleiben.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="spotlight-card rounded-2xl p-8 group reveal">
<div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-500 border border-indigo-500/20">
<iconify-icon icon="lucide:repeat" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Reproduzierbarkeit</h3>
<p className="text-slate-400 text-sm leading-relaxed">Kein Zufall mehr. Ein dokumentierter Prozess sorgt dafür, dass Stellen jederzeit wieder besetzbar sind.</p>
</div>

<div className="spotlight-card rounded-2xl p-8 group reveal" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-500 border border-cyan-500/20">
<iconify-icon icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Operative Entlastung</h3>
<p className="text-slate-400 text-sm leading-relaxed">Ihre einzige Aufgabe: Einstellungsgespräche mit vorqualifizierten Kandidaten. Wir machen den Rest.</p>
</div>

<div className="spotlight-card rounded-2xl p-8 group reveal" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-500 border border-purple-500/20">
<iconify-icon icon="lucide:trending-down" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Kosteneffizienz</h3>
<p className="text-slate-400 text-sm leading-relaxed">Profitieren Sie von einem System, das Recruiting mit jeder Einstellung günstiger und präziser macht.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#010309] relative border-t border-white/5">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-20 reveal">
<span className="text-red-400/80 text-xs font-semibold tracking-widest uppercase mb-2 block">Status Quo</span>
<h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">Die Abwärtsspirale</h2>
<p className="text-slate-400 max-w-xl mx-auto">
                    Wenn Stellen länger unbesetzt bleiben, entstehen Kettenreaktionen, die dem Betrieb massiv schaden.
                </p>
</div>
<div className="relative">

<div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-gradient-to-b from-indigo-500 via-purple-500 to-red-500 opacity-40"></div>

<div className="relative grid md:grid-cols-2 gap-12 mb-20 reveal">
<div className="md:text-right pt-2">
<h3 className="text-xl font-semibold text-white mb-2">Phase 01: Engpass</h3>
<p className="text-slate-400 text-sm">Aufträge werden abgelehnt. Maschinen stehen still. Umsatzpotenzial bleibt ungenutzt.</p>
</div>
<div className="relative pl-12 md:pl-0">

<div className="absolute left-[14px] md:left-[-6px] top-3 w-3 h-3 rounded-full bg-[#020617] border border-indigo-500 z-10 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
<div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
<div className="flex items-center gap-2 mb-2 text-indigo-400 text-xs font-mono uppercase">
<iconify-icon icon="lucide:alert-circle"></iconify-icon>
                                Impact
                            </div>
<p className="text-slate-300 text-sm">Erste spürbare Umsatzverluste und Planungsunsicherheit bei Kunden.</p>
</div>
</div>
</div>

<div className="relative grid md:grid-cols-2 gap-12 mb-20 reveal">
<div className="order-2 md:order-1 relative pl-12 md:pl-0">

<div className="absolute left-[14px] md:right-[-6px] md:left-auto top-3 w-3 h-3 rounded-full bg-[#020617] border border-purple-500 z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
<div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
<div className="flex items-center gap-2 mb-2 text-purple-400 text-xs font-mono uppercase">
<iconify-icon icon="lucide:activity"></iconify-icon>
                                Impact
                            </div>
<p className="text-slate-300 text-sm">Steigender Arbeitsdruck, sinkende Qualität und zunehmender Krankenstand im Team.</p>
</div>
</div>
<div className="order-1 md:order-2 pt-2 md:text-left pl-12 md:pl-0">
<h3 className="text-xl font-semibold text-white mb-2">Phase 02: Überlastung</h3>
<p className="text-slate-400 text-sm">Die Stammbelegschaft kompensiert den Mangel. Die Stimmung kippt.</p>
</div>
</div>

<div className="relative grid md:grid-cols-2 gap-12 reveal">
<div className="md:text-right pt-2">
<h3 className="text-xl font-semibold text-red-400 mb-2">Phase 03: Attraktivitätsverlust</h3>
<p className="text-slate-400 text-sm">Leistungsstarke Mitarbeiter kündigen. Bewerber meiden den "gestressten" Betrieb.</p>
</div>
<div className="relative pl-12 md:pl-0">

<div className="absolute left-[14px] md:left-[-6px] top-3 w-3 h-3 rounded-full bg-red-500 border border-red-500 z-10 shadow-[0_0_15px_rgba(239,68,68,0.8)] animate-pulse"></div>
<div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20 backdrop-blur-sm">
<div className="flex items-center gap-2 mb-2 text-red-400 text-xs font-mono uppercase">
<iconify-icon icon="lucide:siren"></iconify-icon>
                                Critical
                            </div>
<p className="text-slate-300 text-sm">Der Betrieb verliert seine Substanz. Die Spirale beschleunigt sich.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-slate-950">

<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-20 reveal">
<span className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-2 block">Beproof Systematik</span>
<h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">Vom Unbekannten zum Wunscharbeitgeber</h2>
<p className="text-slate-400 text-sm md:text-base leading-relaxed">
                    Wir aktivieren nicht nur suchende Bewerber. Wir erreichen die 70% der Fachkräfte, die latent wechselwillig sind.
                </p>
</div>

<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent z-0"></div>

<div className="relative z-10 reveal group">
<div className="w-24 h-24 bg-[#020617] border border-indigo-500/30 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)] group-hover:border-indigo-400 transition-colors duration-500">
<iconify-icon className="text-indigo-400 text-3xl group-hover:scale-110 transition-transform" icon="lucide:radar"></iconify-icon>
</div>
<div className="text-center px-4">
<div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/10 text-indigo-300 mb-3 border border-indigo-500/20">EBENE 01</div>
<h3 className="text-lg font-bold text-white mb-3">Regionale Omnipräsenz</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                            Hochwertige Videoinhalte verankern Ihren Betrieb als Top-Arbeitgeber in den Köpfen der Region. Sie werden sichtbar, bevor der Bedarf entsteht.
                        </p>
</div>
</div>

<div className="relative z-10 reveal group" style={{transitionDelay: '150ms'}}>
<div className="w-24 h-24 bg-[#020617] border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)] group-hover:border-cyan-400 transition-colors duration-500">
<iconify-icon className="text-cyan-400 text-3xl group-hover:scale-110 transition-transform" icon="lucide:arrow-left-right"></iconify-icon>
</div>
<div className="text-center px-4">
<div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/10 text-cyan-300 mb-3 border border-cyan-500/20">EBENE 02</div>
<h3 className="text-lg font-bold text-white mb-3">Vergleich &amp; Wechselwille</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                            Fachkräfte vergleichen unbewusst. Wir zeigen Ihre Vorteile so, dass der aktuelle Arbeitgeber schlechter dasteht. Der Wechselwille reift.
                        </p>
</div>
</div>

<div className="relative z-10 reveal group" style={{transitionDelay: '300ms'}}>
<div className="w-24 h-24 bg-[#020617] border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)] group-hover:border-emerald-400 transition-colors duration-500">
<iconify-icon className="text-emerald-400 text-3xl group-hover:scale-110 transition-transform" icon="lucide:check-circle-2"></iconify-icon>
</div>
<div className="text-center px-4">
<div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-300 mb-3 border border-emerald-500/20">EBENE 03</div>
<h3 className="text-lg font-bold text-white mb-3">Aktivierung &amp; Einstellung</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                            Gezielte Kampagnen holen den Kandidaten ab. Vorqualifizierung filtert Unpassende aus. Sie sprechen nur mit A-Kandidaten.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#020617]">
<div className="max-w-7xl mx-auto px-6">
<div className="spotlight-card rounded-3xl p-8 md:p-12 border border-white/5 bg-gradient-to-br from-slate-900 to-slate-950 relative overflow-hidden reveal">

<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-indigo-500/10 via-transparent to-transparent pointer-events-none"></div>
<div className="grid md:grid-cols-2 gap-12 relative z-10 items-center">
<div>
<div className="flex items-center gap-2 mb-6 text-indigo-400 font-mono text-xs">
<iconify-icon icon="lucide:cpu"></iconify-icon>
                            INTELLIGENT PROCESS
                        </div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                            Kein Glückspiel.<br/>
<span className="text-slate-400">Sondern Mathematik.</span>
</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-8 h-8 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">1</div>
<div>
<h4 className="text-white font-semibold mb-1">Datengetriebene Optimierung</h4>
<p className="text-slate-400 text-sm">Unsere Kampagnen lernen. Je länger sie laufen, desto präziser werden sie. Die Kosten pro Einstellung sinken dauerhaft.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">2</div>
<div>
<h4 className="text-white font-semibold mb-1">Maximale Transparenz</h4>
<p className="text-slate-400 text-sm">Keine Blackbox. Sie erhalten klare Reportings und wissen jederzeit, wie Ihre Pipeline aussieht.</p>
</div>
</div>
</div>
</div>

<div className="bg-[#0B0F19] rounded-xl border border-white/5 p-6 font-mono text-xs text-slate-400 shadow-2xl">
<div className="flex gap-2 mb-4 border-b border-white/5 pb-4">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<div className="space-y-2">
<p><span className="text-purple-400">const</span> <span className="text-blue-400">candidates</span> = <span className="text-orange-400">analyzeRegion</span>(data);</p>
<p><span className="text-purple-400">if</span> (candidates.quality &gt;= <span className="text-green-400">"A-Level"</span>) {</p>
<p className="pl-4"><span className="text-blue-400">pipeline</span>.<span className="text-yellow-400">push</span>(candidate);</p>
<p className="pl-4"><span className="text-slate-500">// 24h Reaktionszeit garantiert</span></p>
<p>}</p>
<p className="text-slate-600 mt-4">/* Ergebnis: 12 qualifizierte Bewerbungen */</p>
<div className="h-1 w-full bg-slate-800 rounded mt-2 overflow-hidden">
<div className="h-full w-3/4 bg-gradient-to-r from-indigo-500 to-cyan-500"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#020617]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-16">Für wen ist Beproof?</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="spotlight-card p-8 rounded-2xl border-l-4 border-l-emerald-500 bg-emerald-900/5 reveal">
<h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
<iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon>
                        Perfect Match
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-300 text-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                            Etablierte Unternehmen in Bau, Handwerk &amp; Industrie.
                        </li>
<li className="flex items-start gap-3 text-slate-300 text-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                            Betriebe, die bereit sind, Qualität vor Quantität zu stellen.
                        </li>
<li className="flex items-start gap-3 text-slate-300 text-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                            Unternehmer, die Recruiting als Chefsache verstehen, aber operativ abgeben wollen.
                        </li>
</ul>
</div>

<div className="spotlight-card p-8 rounded-2xl border-l-4 border-l-red-500 bg-red-900/5 reveal" style={{transitionDelay: '150ms'}}>
<h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
<iconify-icon className="text-red-500" icon="lucide:x"></iconify-icon>
                        Kein Match
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-300 text-sm">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                            Sie suchen nur eine kurzfristige "Notlösung" für 2 Wochen.
                        </li>
<li className="flex items-start gap-3 text-slate-300 text-sm">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                            Sie sind nicht bereit, Ihren Betrieb transparent und ehrlich zu zeigen.
                        </li>
<li className="flex items-start gap-3 text-slate-300 text-sm">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                            Sie suchen "billig" statt "nachhaltig".
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden flex items-center justify-center" id="contact">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#020617] to-[#020617]"></div>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
<div className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-indigo-500/30 rotate-3 hover:rotate-0 transition-transform duration-500">
<iconify-icon className="text-white text-3xl" icon="lucide:message-square-plus"></iconify-icon>
</div>
<h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 shimmer-text">
                Genug von Engpässen?
            </h2>
<p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
                Lassen Sie uns herausfinden, ob wir zusammenpassen. In 15 Minuten prüfen wir Ihr Potenzial in der Region.
            </p>
<button className="btn-gradient text-white px-12 py-5 rounded-lg font-bold text-lg tracking-wide shadow-xl shadow-indigo-500/20 hover:scale-105 transition-transform flex items-center gap-3 mx-auto">
                Gespräch vereinbaren
                <iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</button>
<p className="mt-6 text-xs text-slate-600">Kostenlos &amp; Unverbindlich</p>
</div>
</section>

<footer className="bg-[#010203] border-t border-white/5 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="text-xl font-bold text-white mb-6 flex items-center gap-2">
<span className="w-6 h-6 rounded bg-indigo-500 flex items-center justify-center text-[10px] text-white">B</span>
                        BEPROOF
                    </div>
<p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                        Die operative Lösung gegen Fachkräftemangel. Wir verbinden traditionelle Werte mit modernster Technologie für Bau, Handwerk &amp; Industrie.
                    </p>
</div>
<div>
<h4 className="text-white font-semibold mb-6 text-sm">Kontakt</h4>
<ul className="space-y-4 text-slate-500 text-xs">
<li className="hover:text-indigo-400 transition-colors cursor-pointer">hello@beproof.de</li>
<li className="hover:text-indigo-400 transition-colors cursor-pointer">+49 (0) 7667 000 000</li>
<li>Musterstraße 1<br/>79206 Breisach</li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6 text-sm">Rechtliches</h4>
<ul className="space-y-4 text-slate-500 text-xs">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">AGB</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-700 text-[10px]">© 2025 Beproof. All rights reserved.</p>
<div className="flex gap-4">
<iconify-icon className="text-slate-600 hover:text-white transition-colors cursor-pointer" icon="lucide:linkedin"></iconify-icon>
<iconify-icon className="text-slate-600 hover:text-white transition-colors cursor-pointer" icon="lucide:instagram"></iconify-icon>
</div>
</div>
</div>
</footer>



    </>
  );
}
