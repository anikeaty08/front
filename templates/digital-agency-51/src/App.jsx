import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
primary: '#ffffff',
secondary: '#a3a3a3',
accent: '#3b82f6', // Subtle electric blue
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/20 blur-[120px] rounded-full mix-blend-screen"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-lg font-semibold tracking-tighter text-white flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
<span className="block w-2 h-2 bg-black rounded-full"></span>
</div>
                NEXUS
            </a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#services">Leistungen</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#work">Projekte</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#process">Prozess</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#about">Agentur</a>
</div>

<a className="hidden md:flex items-center gap-2 text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#contact">
                Kontakt aufnehmen
                <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>

<button className="md:hidden text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>
<main className="relative z-10 pt-32 pb-16">

<section className="md:mb-32 max-w-7xl mr-auto mb-24 ml-auto pr-6 pl-6">
<div className="flex flex-col animate-reveal text-center items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
<span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">Verfügbar für neue Projekte</span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-6" style={{}}>Digitale Exzellenz <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">durch Technologie.</span></h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 font-light leading-relaxed">
                    Wir transformieren komplexe Anforderungen in elegante, skalierbare digitale Produkte. Für Marken, die den Status quo herausfordern.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto h-12 px-8 rounded-lg bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group">
                        Projekt starten
                        <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="w-full sm:w-auto h-12 px-8 rounded-lg border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:play-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                        Showreel ansehen
                    </button>
</div>
</div>

<div className="mt-20 relative w-full max-w-5xl mx-auto animate-reveal" style={{animationDelay: '0.2s'}}>
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 rounded-xl opacity-20 blur-lg"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl">
<div className="flex gap-2 border-white/5 border-b pt-3 pr-4 pb-3 pl-4 gap-x-2 gap-y-2 items-center">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
<div className="mx-auto w-48 h-5 bg-neutral-800/50 rounded-md text-[10px] flex items-center justify-center text-neutral-500 font-mono">nexus-system.v2.tsx</div>
</div>
<div className="aspect-[16/9] flex bg-neutral-950/50 pt-0 pr-0 pb-0 pl-0 relative items-center justify-center">

<div className="grid grid-cols-12 gap-4 w-3/4 h-3/4 opacity-80">
<div className="col-span-3 h-full rounded-lg border border-white/5 bg-white/[0.02] flex flex-col gap-3 p-3">
<div className="w-full h-8 bg-white/5 rounded"></div>
<div className="w-full h-2 bg-white/5 rounded mt-2"></div>
<div className="w-2/3 h-2 bg-white/5 rounded"></div>
<div className="mt-auto w-full h-12 bg-indigo-500/10 border border-indigo-500/20 rounded"></div>
</div>
<div className="col-span-9 h-full flex flex-col gap-4">
<div className="w-full h-1/3 rounded-lg border border-white/5 bg-white/[0.02] relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-indigo-500/10 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 h-px bg-indigo-500/50"></div>
<div className="absolute bottom-4 left-1/4 h-12 w-px bg-indigo-500/50"></div>
</div>
<div className="flex-1 rounded-lg border border-white/5 bg-white/[0.02] grid grid-cols-2 gap-4 p-4">
<div className="bg-neutral-900/50 rounded border border-white/5"></div>
<div className="bg-neutral-900/50 rounded border border-white/5"></div>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 p-4 rounded-lg bg-black/90 border border-white/10 font-mono text-xs text-neutral-400 shadow-xl backdrop-blur-md hidden md:block">
<div className="flex gap-2">
<span className="text-indigo-400">const</span>
<span className="text-white">velocity</span>
<span className="text-neutral-500">=</span>
<span className="text-blue-400">98.5</span>;
                             </div>
<div className="flex gap-2 pl-4 mt-1">
<span className="text-indigo-400">return</span>
<span className="text-cyan-200">scale</span>(<span className="text-white">velocity</span>);
                             </div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 py-12 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-neutral-500 mb-8 tracking-widest uppercase">Das Vertrauen von Innovatoren</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:triangle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> ACME INC
                    </div>
<div className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hexagon" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> SPHERE
                    </div>
<div className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:circle-dashed" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 2.182a10 10 0 0 1 3.8 0m0 19.636a10 10 0 0 1-3.8 0m7.509-18.097a10 10 0 0 1 2.69 2.7M2.182 13.9a10 10 0 0 1 0-3.8m18.097 7.509a10 10 0 0 1-2.7 2.69M21.818 10.1a10 10 0 0 1 0 3.8M3.721 6.391a10 10 0 0 1 2.7-2.69m-.03 16.578a10 10 0 0 1-2.69-2.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> ORBITAL
                    </div>
<div className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:box" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg> BLOCKS
                    </div>
<div className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> VOLT
                    </div>
</div>
</div>
</section>

<section className="py-32 max-w-7xl mx-auto px-6" id="services">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Technische Präzision. <br/><span className="text-neutral-500">Kreative Freiheit.</span></h2>
<p className="text-neutral-400 max-w-xl">Wir verbinden Design Thinking mit robuster Ingenieurskunst, um Produkte zu schaffen, die nicht nur funktionieren, sondern begeistern.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-2xl p-8 col-span-1 md:col-span-2 group hover:border-white/20 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<svg aria-hidden="true" className="iconify w-32 h-32 iconify--lucide" data-icon="lucide:layout-grid" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></g></svg>
</div>
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:monitor" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M8 21h8m-4-4v4"></path></g></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">Web Experience Design</h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                        Intuitive Benutzeroberflächen, die Markenidentität und Usability verschmelzen lassen. Wir designen Systeme, nicht nur Seiten.
                    </p>
<div className="mt-8 flex gap-2">
<span className="text-xs border border-white/10 px-2 py-1 rounded text-neutral-400">Figma</span>
<span className="text-xs border border-white/10 px-2 py-1 rounded text-neutral-400">Motion</span>
<span className="text-xs border border-white/10 px-2 py-1 rounded text-neutral-400">UX Research</span>
</div>
</div>

<div className="glass-card rounded-2xl p-8 col-span-1 group hover:border-white/20 transition-colors">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:code-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">Engineering</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Full-Stack Entwicklung mit Fokus auf Performance, Sicherheit und Skalierbarkeit.
                    </p>
</div>

<div className="glass-card rounded-2xl p-8 col-span-1 group hover:border-white/20 transition-colors">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bar-chart-3" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18m-3-4V9m-5 8V5M8 17v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">Growth &amp; Strategy</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Datengetriebene Entscheidungen für nachhaltiges Wachstum und ROI.
                    </p>
</div>

<div className="glass-card rounded-2xl p-8 col-span-1 md:col-span-2 group hover:border-white/20 transition-colors flex flex-col md:flex-row items-start md:items-center gap-8">
<div className="flex-1">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:smartphone" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></g></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">App Development</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                            Native und Cross-Platform Lösungen für iOS und Android, die sich nahtlos in das Ökosystem Ihrer Nutzer integrieren.
                        </p>
</div>

<div className="w-full md:w-48 h-32 bg-neutral-900/50 rounded border border-white/5 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-24 h-1 bg-white/10 rounded-full animate-pulse"></div>
</div>
<div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-indigo-900/20 to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 border-y border-white/5" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-indigo-400 font-mono text-xs mb-4 block">/// OUR WORKFLOW</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">Ein systematischer Ansatz für <span className="text-white">komplexe Probleme</span>.</h2>
<div className="space-y-8">
<div className="flex gap-4 group">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-white bg-neutral-900 group-hover:border-indigo-500 transition-colors">01</div>
<div className="w-px h-full bg-white/10 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-lg font-medium text-white mb-2">Discovery &amp; Audit</h4>
<p className="text-neutral-400 text-sm">Wir analysieren den Ist-Zustand, definieren technische KPIs und erstellen eine Roadmap.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-white bg-neutral-900 group-hover:border-indigo-500 transition-colors">02</div>
<div className="w-px h-full bg-white/10 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-lg font-medium text-white mb-2">Agile Development</h4>
<p className="text-neutral-400 text-sm">Entwicklung in zweiwöchigen Sprints mit kontinuierlichem Feedback und Testing.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-white bg-neutral-900 group-hover:border-indigo-500 transition-colors">03</div>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-2">Scale &amp; Optimize</h4>
<p className="text-neutral-400 text-sm">Launch ist erst der Anfang. Wir optimieren basierend auf echten Nutzerdaten.</p>
</div>
</div>
</div>
</div>

<div className="relative h-[500px] w-full bg-neutral-950 rounded-xl border border-white/10 p-6 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>

<div className="font-mono text-xs space-y-2">
<div className="flex gap-2 text-neutral-500 border-b border-white/5 pb-2 mb-4">
<span className="w-3 h-3 rounded-full bg-blue-500/20"></span>
<span className="w-3 h-3 rounded-full bg-cyan-500/20"></span>
<span className="w-3 h-3 rounded-full bg-blue-500/20"></span>
<span className="ml-2">deploy.sh</span>
</div>
<div className="text-blue-500">$ init sequence start</div>
<div className="text-neutral-400">&gt; Loading modules... <span className="text-white">done</span></div>
<div className="text-neutral-400">&gt; Optimizing assets... <span className="text-white">done (24ms)</span></div>
<div className="text-neutral-400">&gt; Connecting database...</div>

<div className="mt-12 relative h-48 border-l border-b border-white/10">
<div className="absolute bottom-0 left-0 w-full h-full flex items-end px-1 gap-1">
<div className="w-4 bg-indigo-500/20 h-[20%] rounded-t-sm"></div>
<div className="w-4 bg-indigo-500/20 h-[35%] rounded-t-sm"></div>
<div className="w-4 bg-indigo-500/20 h-[30%] rounded-t-sm"></div>
<div className="w-4 bg-indigo-500/30 h-[50%] rounded-t-sm"></div>
<div className="w-4 bg-indigo-500/40 h-[45%] rounded-t-sm"></div>
<div className="w-4 bg-indigo-500/50 h-[70%] rounded-t-sm"></div>
<div className="w-4 bg-indigo-500/60 h-[85%] rounded-t-sm animate-pulse"></div>
<div className="w-4 bg-indigo-500/80 h-[95%] rounded-t-sm"></div>
</div>
</div>
<div className="mt-4 flex justify-between text-neutral-500">
<span>Performance Score</span>
<span className="text-white">99/100</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
<div className="pl-4">
<div className="text-4xl md:text-5xl font-medium text-white mb-2 tracking-tight">85<span className="text-indigo-500">%</span></div>
<div className="text-sm text-neutral-500 uppercase tracking-wider font-medium">Performance Steigerung</div>
</div>
<div className="pl-8">
<div className="text-4xl md:text-5xl font-medium text-white mb-2 tracking-tight">120<span className="text-indigo-500">+</span></div>
<div className="text-sm text-neutral-500 uppercase tracking-wider font-medium">Projekte Gelauncht</div>
</div>
<div className="pl-8">
<div className="text-4xl md:text-5xl font-medium text-white mb-2 tracking-tight">10<span className="text-indigo-500">x</span></div>
<div className="text-sm text-neutral-500 uppercase tracking-wider font-medium">ROI Durchschnitt</div>
</div>
<div className="pl-8">
<div className="text-4xl md:text-5xl font-medium text-white mb-2 tracking-tight">24<span className="text-indigo-500">/</span>7</div>
<div className="text-sm text-neutral-500 uppercase tracking-wider font-medium">Support</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/10 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-white">
                    Bereit für den <br/> nächsten Schritt?
                </h2>
<p className="text-lg text-neutral-400 mb-10">
                    Lassen Sie uns darüber sprechen, wie wir Ihre Vision technisch und visuell zum Leben erwecken können.
                </p>
<form className="max-w-md mx-auto space-y-4 text-left">
<div>
<label className="sr-only" htmlFor="email">Email</label>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" id="email" placeholder="name@unternehmen.de" type="email"/>
</div>
<div className="relative">
<textarea className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none" placeholder="Erzählen Sie uns kurz von Ihrem Projekt..." rows="3"></textarea>
</div>

<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-white/20 rounded bg-neutral-900 peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-colors"></div>
<svg aria-hidden="true" className="iconify absolute top-0.5 left-0.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">Ich stimme der Datenverarbeitung zu.</span>
</label>
<button className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-neutral-200 transition-colors flex justify-center items-center gap-2 mt-4" type="submit">
                        Anfrage senden
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:send" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#050505] py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-bold tracking-tighter text-white flex items-center gap-2 mb-6" href="#">
<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
<span className="block w-1.5 h-1.5 bg-black rounded-full"></span>
</div>
                        NEXUS
                    </a>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Wir entwickeln digitale Produkte für die Marktführer von morgen. Präzise, schnell und skalierbar.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Agentur</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Über uns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Karriere</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-white transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-white transition-colors" href="#">AGB</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Social</h4>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:github" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-neutral-600">
<p>© 2024 Nexus Agency GmbH. All rights reserved.</p>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
<span>All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
