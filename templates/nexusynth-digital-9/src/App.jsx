import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Intersection Observer for Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-enter').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="cosmos-bg">
<div className="nebula nebula-1"></div>
<div className="nebula nebula-2"></div>
<div className="nebula nebula-3"></div>
<div className="star-field"></div>
</div>
<div className="noise"></div>
<div className="grid-bg"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030304]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
</div>
<span className="font-mono text-sm font-semibold tracking-tight text-white uppercase">Nexusynth</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors uppercase tracking-wider" href="#vision">Vision</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors uppercase tracking-wider" href="#audit">Audit</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors uppercase tracking-wider" href="#system">System</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full transition-all" href="#contact">
                Start Project <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>

<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<main className="relative z-10 pt-24 pb-20">

<section className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col items-center text-center">
<div className="fade-enter mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 backdrop-blur-sm">
<span className="text-[10px] font-mono text-violet-300 uppercase tracking-widest">Next Gen Web Architecture</span>
</div>
</div>
<h1 className="fade-enter delay-100 text-5xl lg:text-7xl font-semibold tracking-tight text-white mb-8 leading-[1.1]">
                Digitale Präsenz <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40">ohne Kompromisse.</span>
</h1>
<p className="fade-enter delay-200 text-lg text-neutral-400 mb-10 max-w-xl mx-auto leading-relaxed">
                Wir eliminieren technische Schulden und verwandeln veraltete Websites in skalierbare High-Performance Systeme.
            </p>
<div className="fade-enter delay-300 flex flex-col sm:flex-row gap-4 w-full justify-center">
<button className="px-8 py-3.5 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                    Audit anfordern
                </button>
<button className="px-8 py-3.5 bg-transparent border border-white/10 text-white rounded-lg font-medium hover:bg-white/5 transition-colors">
                    Prozesse ansehen
                </button>
</div>

<div className="mt-20 w-full max-w-5xl fade-enter delay-300">
<div className="glass-card rounded-t-xl border-b-0 p-1 bg-gradient-to-b from-white/10 to-transparent">
<div className="bg-[#050507] rounded-t-lg overflow-hidden border border-white/5 aspect-[16/9] relative shadow-2xl">

<div className="absolute inset-0 flex">

<div className="w-16 lg:w-64 border-r border-white/5 bg-white/[0.02] flex flex-col p-4 gap-4">
<div className="h-6 w-24 bg-white/10 rounded hidden lg:block"></div>
<div className="space-y-2 mt-4">
<div className="h-8 w-full bg-white/5 rounded flex items-center px-2"><div className="w-4 h-4 rounded-full bg-white/10"></div></div>
<div className="h-8 w-full bg-transparent rounded flex items-center px-2"><div className="w-4 h-4 rounded-full bg-white/5"></div></div>
<div className="h-8 w-full bg-transparent rounded flex items-center px-2"><div className="w-4 h-4 rounded-full bg-white/5"></div></div>
</div>
</div>

<div className="flex-1 p-8">
<div className="flex justify-between items-center mb-8">
<div className="h-8 w-48 bg-white/10 rounded"></div>
<div className="flex gap-2">
<div className="h-8 w-8 rounded bg-violet-500/20 border border-violet-500/40"></div>
</div>
</div>
<div className="grid grid-cols-3 gap-4 h-40">
<div className="bg-white/5 rounded border border-white/5 relative overflow-hidden group">
<div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500"></div>
</div>
<div className="bg-white/5 rounded border border-white/5 relative overflow-hidden group">
<div className="absolute bottom-0 left-0 w-full h-1 bg-violet-500"></div>
</div>
<div className="bg-white/5 rounded border border-white/5 relative overflow-hidden group">
<div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative" id="vision">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 fade-enter">
<span className="text-violet-400 font-mono text-xs tracking-widest uppercase mb-4 block">Status Quo</span>
<h2 className="text-3xl font-semibold text-white mb-6 tracking-tight">Die unsichtbare Bremse.</h2>
<p className="text-neutral-400 text-sm leading-relaxed">
                            Langsame Ladezeiten und schlechte UX sind keine "Schönheitsfehler" – sie sind direkte Umsatzverluste. Wir beheben das Fundament.
                        </p>
</div>
<div className="lg:col-span-8 grid md:grid-cols-2 gap-6">

<div className="glass-card p-8 rounded-xl fade-enter group">
<i className="w-6 h-6 text-neutral-500 mb-4 group-hover:text-violet-400 transition-colors" data-lucide="gauge"></i>
<h3 className="text-white font-medium mb-2">Performance Defizite</h3>
<p className="text-neutral-500 text-sm">Jede Sekunde Verzögerung kostet bis zu 7% Conversion. Wir optimieren auf Millisekunden.</p>
</div>

<div className="glass-card p-8 rounded-xl fade-enter delay-100 group">
<i className="w-6 h-6 text-neutral-500 mb-4 group-hover:text-violet-400 transition-colors" data-lucide="smartphone"></i>
<h3 className="text-white font-medium mb-2">Mobile Neglect</h3>
<p className="text-neutral-500 text-sm">Über 60% des Traffics ist mobil. Wer hier nicht glänzt, existiert digital nicht.</p>
</div>

<div className="glass-card p-8 rounded-xl fade-enter delay-200 group">
<i className="w-6 h-6 text-neutral-500 mb-4 group-hover:text-violet-400 transition-colors" data-lucide="search"></i>
<h3 className="text-white font-medium mb-2">SEO Blackbox</h3>
<p className="text-neutral-500 text-sm">Guter Content reicht nicht, wenn die technische Struktur Google blockiert.</p>
</div>

<div className="glass-card p-8 rounded-xl fade-enter delay-300 flex flex-col justify-center items-center text-center border-dashed border-white/10">
<span className="text-xs font-mono text-neutral-600 mb-2">SOLUTION_DETECTED</span>
<span className="text-white font-medium">Nexusynth Framework →</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-black/20" id="audit">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 fade-enter">
<span className="text-violet-400 font-mono text-xs tracking-widest uppercase mb-4 block">Analyse</span>
<h2 className="text-4xl font-semibold text-white tracking-tight">Der Reality Check.</h2>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-4 fade-enter">

<div className="p-6 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
<div className="flex items-center gap-4">
<span className="font-mono text-xs text-neutral-500 group-hover:text-violet-400 transition-colors">01</span>
<h3 className="text-white font-medium">Core Web Vitals Audit</h3>
</div>
<p className="text-neutral-500 text-sm mt-3 pl-8">Detaillierte Analyse von LCP, FID und CLS Werten nach Google Standards.</p>
</div>

<div className="p-6 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
<div className="flex items-center gap-4">
<span className="font-mono text-xs text-neutral-500 group-hover:text-violet-400 transition-colors">02</span>
<h3 className="text-white font-medium">UX Heuristik</h3>
</div>
<p className="text-neutral-500 text-sm mt-3 pl-8">Identifikation von Reibungspunkten in der Customer Journey.</p>
</div>

<div className="p-6 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
<div className="flex items-center gap-4">
<span className="font-mono text-xs text-neutral-500 group-hover:text-violet-400 transition-colors">03</span>
<h3 className="text-white font-medium">Tech Stack Review</h3>
</div>
<p className="text-neutral-500 text-sm mt-3 pl-8">Überprüfung auf veraltete Plugins, Sicherheitslücken und Code-Qualität.</p>
</div>
</div>

<div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] glass-card rounded-2xl p-8 flex flex-col justify-between overflow-hidden fade-enter delay-200">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(124,58,237,0.1),transparent_50%)]"></div>
<div className="relative z-10 flex justify-between items-start text-xs font-mono text-neutral-400 border-b border-white/5 pb-4">
<span>SCAN_ACTIVE</span>
<span className="text-emerald-400 animate-pulse">● LIVE</span>
</div>
<div className="relative z-10 space-y-6 my-auto">

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-white">Performance</span>
<span className="text-red-400">32/100</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-red-500 w-[32%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-white">SEO</span>
<span className="text-yellow-400">58/100</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-yellow-500 w-[58%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-white">Best Practices</span>
<span className="text-emerald-400">92/100</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[92%] shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
</div>
</div>
</div>
<div className="relative z-10 mt-8 pt-6 border-t border-white/5 text-center">
<button className="w-full py-3 bg-violet-600 hover:bg-violet-500 text-white rounded text-sm font-medium transition-colors">
                                Jetzt gratis prüfen
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="system">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center fade-enter">
<span className="text-violet-400 font-mono text-xs tracking-widest uppercase mb-4 block">Architektur</span>
<h2 className="text-3xl font-semibold text-white tracking-tight">Modulares System.</h2>
</div>
<div className="grid md:grid-cols-3 gap-1 bg-white/5 border border-white/5 rounded-2xl overflow-hidden">

<div className="bg-[#040405] p-8 hover:bg-[#08080a] transition-colors relative group">
<div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center text-white mb-6 group-hover:text-violet-400 transition-colors">
<i className="w-5 h-5" data-lucide="code"></i>
</div>
<h3 className="text-white font-medium mb-2">Modern Stack</h3>
<p className="text-neutral-500 text-sm">Next.js, React und Tailwind für maximale Geschwindigkeit.</p>
</div>

<div className="bg-[#040405] p-8 hover:bg-[#08080a] transition-colors relative group">
<div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center text-white mb-6 group-hover:text-violet-400 transition-colors">
<i className="w-5 h-5" data-lucide="database"></i>
</div>
<h3 className="text-white font-medium mb-2">Headless CMS</h3>
<p className="text-neutral-500 text-sm">Sanity oder Strapi für flexible Inhaltsverwaltung ohne Ballast.</p>
</div>

<div className="bg-[#040405] p-8 hover:bg-[#08080a] transition-colors relative group">
<div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center text-white mb-6 group-hover:text-violet-400 transition-colors">
<i className="w-5 h-5" data-lucide="bar-chart"></i>
</div>
<h3 className="text-white font-medium mb-2">Analytics</h3>
<p className="text-neutral-500 text-sm">Datenschutzkonformes Tracking und echte Insights.</p>
</div>

<div className="bg-[#040405] p-8 hover:bg-[#08080a] transition-colors relative group">
<div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center text-white mb-6 group-hover:text-violet-400 transition-colors">
<i className="w-5 h-5" data-lucide="shield"></i>
</div>
<h3 className="text-white font-medium mb-2">Security</h3>
<p className="text-neutral-500 text-sm">Automatische Updates, SSL und DDOS Protection inklusive.</p>
</div>

<div className="bg-[#040405] p-8 hover:bg-[#08080a] transition-colors relative group">
<div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center text-white mb-6 group-hover:text-violet-400 transition-colors">
<i className="w-5 h-5" data-lucide="globe"></i>
</div>
<h3 className="text-white font-medium mb-2">Global CDN</h3>
<p className="text-neutral-500 text-sm">Inhalte werden von Servern in der Nähe des Nutzers geladen.</p>
</div>

<div className="bg-[#040405] p-8 hover:bg-[#08080a] transition-colors flex items-center justify-center group">
<a className="text-sm text-white font-medium border-b border-white/20 pb-1 group-hover:border-white transition-colors" href="#contact">
                            Alle Features ansehen →
                        </a>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="contact">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6 tracking-tight fade-enter">Bereit zu starten?</h2>
<p className="text-neutral-400 text-lg mb-10 fade-enter delay-100">
                    Lassen Sie uns über Ihr Projekt sprechen. Kein Sales-Pitch, nur ehrliche technische Beratung.
                </p>
<div className="fade-enter delay-200 flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors" href="mailto:hello@nexusynth.com">
                        Projekt anfragen
                    </a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">
                        Portfolio ansehen
                    </a>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#010102] py-12 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-white rounded-full"></div>
<span className="text-sm font-semibold text-white tracking-tight">NEXUSYNTH</span>
</div>
<div className="text-xs text-neutral-500">
                © 2024 Nexusynth Digital Engineering. All rights reserved.
            </div>
<div className="flex gap-6">
<i className="w-4 h-4 text-neutral-600 hover:text-white cursor-pointer transition-colors" data-lucide="twitter"></i>
<i className="w-4 h-4 text-neutral-600 hover:text-white cursor-pointer transition-colors" data-lucide="github"></i>
<i className="w-4 h-4 text-neutral-600 hover:text-white cursor-pointer transition-colors" data-lucide="linkedin"></i>
</div>
</div>
</footer>


    </>
  );
}
