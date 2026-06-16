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
display: ['Bricolage Grotesque', 'sans-serif'],
},
colors: {
brand: {
dark: '#0F172A',
navy: '#17395F',
blue: '#265180',
deep: '#0F2A48',
salmon: '#FF8F7D',
cyan: '#38BDF8',
teal: '#2DD4BF',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



      lucide.createIcons();

      function scrollToSection(id) {
          const element = document.getElementById(id);
          const container = document.getElementById('timeline-container');
          if (element && container) {
              // Determine the left position of the target section relative to the scroll container's content
              const offsetLeft = element.offsetLeft;

              container.scrollTo({
                  left: offsetLeft,
                  behavior: 'smooth'
              });
          }
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="flex-1 overflow-x-auto overflow-y-hidden flex flex-row scroll-smooth no-scrollbar relative w-full h-full" id="timeline-container">

<section className="flex flex-row min-w-max h-full relative bg-brand-navy border-r border-white/5" id="section-1">

<div className="sticky left-0 top-0 z-40 w-0 h-full overflow-visible pointer-events-none flex flex-col">
<div className="w-[100vw] px-8 py-6 flex flex-row items-center gap-6 bg-gradient-to-b from-brand-navy via-brand-navy/90 to-transparent pointer-events-auto">
<span className="text-brand-salmon/60 font-mono text-sm tracking-widest uppercase">
              01 Sektion
            </span>
<h2 className="font-display text-4xl font-semibold tracking-tighter text-brand-salmon">
              Familie &amp; Bildung
            </h2>
</div>
</div>

<div className="flex flex-row gap-48 h-full pr-24 pl-24 relative gap-x-48 gap-y-48 items-center">

<div className="absolute top-[60%] left-0 w-full h-px bg-gradient-to-r from-brand-salmon/40 via-white/10 to-transparent pointer-events-none"></div>

<div className="relative group mt-[-10%] sticky left-12">
<div className="absolute top-full left-8 h-32 w-px bg-gradient-to-b from-brand-salmon/30 to-transparent border-l border-dashed border-white/20"></div>
<div className="z-10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-salmon/10 hover:border-brand-salmon/30 w-80 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative bg-brand-navy shadow-xl border-brand-salmon/20">
<div className="flex items-center justify-between mb-6">
<div className="p-3 rounded-xl bg-brand-salmon/10 text-brand-salmon">
<svg className="lucide lucide-home w-6 h-6 stroke-[1.5]" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
<path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</svg>
</div>
<span className="text-xs font-mono text-white/30 uppercase tracking-widest">
                  Zielgruppe
                </span>
</div>
<h3 className="font-display text-2xl font-medium mb-2 text-white">
                Für Familien
              </h3>
<p className="text-sm text-white/50 leading-relaxed mb-4">
                Begegnung, Beratung und Unterstützung für Familien in allen
                Lebensphasen.
              </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-6 h-6 rounded-full bg-brand-salmon/20 flex items-center justify-center text-[10px] font-bold text-brand-salmon">
                  HF
                </div>
<span className="text-sm font-medium text-white/80">
                  Haus der Familie
                </span>
</div>
</div>
<div className="absolute -bottom-16 left-8 w-4 h-4 rounded-full bg-brand-navy border-4 border-brand-salmon shadow-[0_0_20px_rgba(255,143,125,0.5)] z-20"></div>
</div>

<div className="relative group mt-[20%] sticky left-12">
<div className="absolute bottom-full left-8 h-32 w-px bg-gradient-to-t from-brand-salmon/30 to-transparent border-l border-dashed border-white/20"></div>
<div className="absolute -top-16 left-8 w-4 h-4 rounded-full bg-brand-navy border-4 border-brand-salmon shadow-[0_0_20px_rgba(255,143,125,0.5)] z-20"></div>
<div className="relative z-10 w-80 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-salmon/10 hover:border-brand-salmon/30 bg-brand-navy shadow-xl border-brand-salmon/20">
<div className="flex items-center justify-between mb-6">
<div className="p-3 rounded-xl bg-brand-salmon/10 text-brand-salmon">
<svg className="lucide lucide-users w-6 h-6 stroke-[1.5]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
</div>
<span className="text-xs font-mono text-white/30 uppercase tracking-widest">
                  Zielgruppe
                </span>
</div>
<h3 className="font-display text-2xl font-medium mb-2 text-white">
                Für Alle
              </h3>
<p className="text-sm text-white/50 leading-relaxed mb-4">
                Ein Science Center für alle Altersgruppen. Wissenschaft
                spielerisch entdecken.
              </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-6 h-6 rounded-full bg-brand-salmon/20 flex items-center justify-center text-[10px] font-bold text-brand-salmon">
                  EX
                </div>
<span className="text-sm font-medium text-white/80">
                  Experimenta
                </span>
</div>
</div>
</div>

<div className="relative group mt-[-5%] sticky left-12">
<div className="absolute top-full left-8 h-32 w-px bg-gradient-to-b from-brand-salmon/30 to-transparent border-l border-dashed border-white/20"></div>
<div className="relative z-10 w-80 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-salmon/10 hover:border-brand-salmon/30 bg-brand-navy shadow-xl border-brand-salmon/20">
<div className="flex items-center justify-between mb-6">
<div className="p-3 rounded-xl bg-brand-salmon/10 text-brand-salmon">
<svg className="lucide lucide-graduation-cap w-6 h-6 stroke-[1.5]" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
<path d="M22 10v6"></path>
<path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
</svg>
</div>
<span className="text-xs font-mono text-white/30 uppercase tracking-widest">
                  Ausbildung
                </span>
</div>
<h3 className="font-display text-2xl font-medium mb-2 text-white">
                Erzieher:Innen
              </h3>
<p className="text-sm text-white/50 leading-relaxed mb-4">
                Moderne Ausbildungskonzepte für die pädagogischen Fachkräfte von
                morgen.
              </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-6 h-6 rounded-full bg-brand-salmon/20 flex items-center justify-center text-[10px] font-bold text-brand-salmon">
                  AK
                </div>
<span className="text-sm font-medium text-white/80">
                  Akademie für Bildung
                </span>
</div>
</div>
<div className="absolute -bottom-16 left-8 w-4 h-4 rounded-full bg-brand-navy border-4 border-brand-salmon shadow-[0_0_20px_rgba(255,143,125,0.5)] z-20"></div>
</div>

<div className="w-48"></div>
</div>
</section>

<section className="flex flex-row min-w-max h-full relative bg-brand-blue border-r border-white/5" id="section-2">

<div className="sticky left-0 top-0 z-40 w-0 h-full overflow-visible pointer-events-none flex flex-col">
<div className="w-[100vw] px-8 py-6 flex flex-row items-center gap-6 bg-gradient-to-b from-brand-blue via-brand-blue/90 to-transparent pointer-events-auto">
<span className="text-brand-cyan/60 font-mono text-sm tracking-widest uppercase">
              02 Sektion
            </span>
<h2 className="font-display text-4xl font-semibold tracking-tighter text-brand-cyan">
              Forschung &amp; Wissenschaft
            </h2>
</div>
</div>

<div className="flex flex-row items-center h-full px-24 gap-48 relative">

<div className="absolute top-[60%] left-0 w-full h-px bg-gradient-to-r from-brand-cyan/40 via-white/10 to-transparent pointer-events-none"></div>

<div className="relative group mt-[-8%] sticky left-12">
<div className="absolute top-full left-8 h-32 w-px bg-gradient-to-b from-brand-cyan/30 to-transparent border-l border-dashed border-white/20"></div>
<div className="relative z-10 w-80 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-cyan/10 hover:border-brand-cyan/30 bg-brand-blue shadow-xl border-brand-cyan/20">
<div className="flex items-center justify-between mb-6">
<div className="p-3 rounded-xl bg-brand-cyan/10 text-brand-cyan">
<svg className="lucide lucide-atom w-6 h-6 stroke-[1.5]" data-lucide="atom" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path>
<path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path>
</svg>
</div>
<span className="text-xs font-mono text-white/30 uppercase tracking-widest">
                  Zielgruppe
                </span>
</div>
<h3 className="font-display text-2xl font-medium mb-2 text-white">
                Für Forscher
              </h3>
<p className="text-sm text-white/50 leading-relaxed mb-4">
                Angewandte Forschung mit direktem Nutzen für Wirtschaft und
                Gesellschaft.
              </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center text-[10px] font-bold text-brand-cyan">
                  FH
                </div>
<span className="text-sm font-medium text-white/80">
                  Fraunhofer Institut
                </span>
</div>
</div>
<div className="absolute -bottom-16 left-8 w-4 h-4 rounded-full bg-brand-blue border-4 border-brand-cyan shadow-[0_0_20px_rgba(56,189,248,0.5)] z-20"></div>
</div>

<div className="relative group mt-[25%] sticky left-12">
<div className="absolute bottom-full left-8 h-32 w-px bg-gradient-to-t from-brand-cyan/30 to-transparent border-l border-dashed border-white/20"></div>
<div className="absolute -top-16 left-8 w-4 h-4 rounded-full bg-brand-blue border-4 border-brand-cyan shadow-[0_0_20px_rgba(56,189,248,0.5)] z-20"></div>
<div className="relative z-10 w-80 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-cyan/10 hover:border-brand-cyan/30 bg-brand-blue shadow-xl border-brand-cyan/20">
<div className="flex items-center justify-between mb-6">
<div className="p-3 rounded-xl bg-brand-cyan/10 text-brand-cyan">
<svg className="lucide lucide-library w-6 h-6 stroke-[1.5]" data-lucide="library" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16 6 4 14"></path>
<path d="M12 6v14"></path>
<path d="M8 8v12"></path>
<path d="M4 4v16"></path>
</svg>
</div>
<span className="text-xs font-mono text-white/30 uppercase tracking-widest">
                  Akademie
                </span>
</div>
<h3 className="font-display text-2xl font-medium mb-2 text-white">
                Für Studierende
              </h3>
<p className="text-sm text-white/50 leading-relaxed mb-4">
                Technische Universität München am Standort Heilbronn. Weltklasse
                Ausbildung.
              </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center text-[10px] font-bold text-brand-cyan">
                  TU
                </div>
<span className="text-sm font-medium text-white/80">
                  TUM Campus
                </span>
</div>
</div>
</div>

<div className="relative group mt-[-15%] sticky left-12">
<div className="absolute top-full left-8 h-32 w-px bg-gradient-to-b from-brand-cyan/30 to-transparent border-l border-dashed border-white/20"></div>
<div className="relative z-10 w-80 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-cyan/10 hover:border-brand-cyan/30 bg-brand-blue shadow-xl border-brand-cyan/20">
<div className="flex items-center justify-between mb-6">
<div className="p-3 rounded-xl bg-brand-cyan/10 text-brand-cyan">
<svg className="lucide lucide-book-open-check w-6 h-6 stroke-[1.5]" data-lucide="book-open-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21V7"></path>
<path d="m16 12 2 2 4-4"></path>
<path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"></path>
</svg>
</div>
<span className="text-xs font-mono text-white/30 uppercase tracking-widest">
                  Praxis
                </span>
</div>
<h3 className="font-display text-2xl font-medium mb-2 text-white">
                Bildungscampus
              </h3>
<p className="text-sm text-white/50 leading-relaxed mb-4">
                Theorie und Praxis vereint. Duales Studium auf höchstem Niveau.
              </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center text-[10px] font-bold text-brand-cyan">
                  DH
                </div>
<span className="text-sm font-medium text-white/80">
                  DHBW Heilbronn
                </span>
</div>
</div>
<div className="absolute -bottom-16 left-8 w-4 h-4 rounded-full bg-brand-blue border-4 border-brand-cyan shadow-[0_0_20px_rgba(56,189,248,0.5)] z-20"></div>
</div>
<div className="w-48"></div>
</div>
</section>

<section className="flex flex-row min-w-max h-full relative bg-brand-deep" id="section-3">

<div className="sticky left-0 top-0 z-40 w-0 h-full overflow-visible pointer-events-none flex flex-col">
<div className="w-[100vw] px-8 py-6 flex flex-row items-center gap-6 bg-gradient-to-b from-brand-deep via-brand-deep/90 to-transparent pointer-events-auto">
<span className="text-brand-teal/60 font-mono text-sm tracking-widest uppercase">
              03 Sektion
            </span>
<h2 className="font-display text-4xl font-semibold tracking-tighter text-brand-teal">
              Unternehmertum
            </h2>
</div>
</div>

<div className="flex flex-row items-center h-full px-24 gap-48 relative">

<div className="absolute top-[60%] left-0 w-full h-px bg-gradient-to-r from-brand-teal/40 via-white/10 to-transparent pointer-events-none"></div>

<div className="relative group mt-[-10%] sticky left-12">
<div className="absolute top-full left-8 h-32 w-px bg-gradient-to-b from-brand-teal/30 to-transparent border-l border-dashed border-white/20"></div>
<div className="relative z-10 w-80 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-teal/10 hover:border-brand-teal/30 bg-brand-deep shadow-xl border-brand-teal/20">
<div className="flex items-center justify-between mb-6">
<div className="p-3 rounded-xl bg-brand-teal/10 text-brand-teal">
<svg className="lucide lucide-lightbulb w-6 h-6 stroke-[1.5]" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
<path d="M9 18h6"></path>
<path d="M10 22h4"></path>
</svg>
</div>
<span className="text-xs font-mono text-white/30 uppercase tracking-widest">
                  Startups
                </span>
</div>
<h3 className="font-display text-2xl font-medium mb-2 text-white">
                Gründer:Innen
              </h3>
<p className="text-sm text-white/50 leading-relaxed mb-4">
                Die Community für Startups, Mentoren und Investoren im Herzen
                der Stadt.
              </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-6 h-6 rounded-full bg-brand-teal/20 flex items-center justify-center text-[10px] font-bold text-brand-teal">
                  CF
                </div>
<span className="text-sm font-medium text-white/80">
                  Campus Founders
                </span>
</div>
</div>
<div className="absolute -bottom-16 left-8 w-4 h-4 rounded-full bg-brand-deep border-4 border-brand-teal shadow-[0_0_20px_rgba(45,212,191,0.5)] z-20"></div>
</div>

<div className="relative group mt-[20%] sticky left-12">
<div className="absolute bottom-full left-8 h-32 w-px bg-gradient-to-t from-brand-teal/30 to-transparent border-l border-dashed border-white/20"></div>
<div className="absolute -top-16 left-8 w-4 h-4 rounded-full bg-brand-deep border-4 border-brand-teal shadow-[0_0_20px_rgba(45,212,191,0.5)] z-20"></div>
<div className="relative z-10 w-80 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-teal/10 hover:border-brand-teal/30 bg-brand-deep shadow-xl border-brand-teal/20">
<div className="flex items-center justify-between mb-6">
<div className="p-3 rounded-xl bg-brand-teal/10 text-brand-teal">
<svg className="lucide lucide-cpu w-6 h-6 stroke-[1.5]" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20v2"></path>
<path d="M12 2v2"></path>
<path d="M17 20v2"></path>
<path d="M17 2v2"></path>
<path d="M2 12h2"></path>
<path d="M2 17h2"></path>
<path d="M2 7h2"></path>
<path d="M20 12h2"></path>
<path d="M20 17h2"></path>
<path d="M20 7h2"></path>
<path d="M7 20v2"></path>
<path d="M7 2v2"></path>
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="8" rx="1" width="8" x="8" y="8"></rect>
</svg>
</div>
<span className="text-xs font-mono text-white/30 uppercase tracking-widest">
                  Tech
                </span>
</div>
<h3 className="font-display text-2xl font-medium mb-2 text-white">
                Innovatoren
              </h3>
<p className="text-sm text-white/50 leading-relaxed mb-4">
                Zentrum für Künstliche Intelligenz und digitale Transformation
                der Wirtschaft.
              </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-6 h-6 rounded-full bg-brand-teal/20 flex items-center justify-center text-[10px] font-bold text-brand-teal">
                  AI
                </div>
<span className="text-sm font-medium text-white/80">AI Hub</span>
</div>
</div>
</div>

<div className="relative group mt-[-5%] sticky left-12">
<div className="absolute top-full left-8 h-32 w-px bg-gradient-to-b from-brand-teal/30 to-transparent border-l border-dashed border-white/20"></div>
<div className="relative z-10 w-80 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-teal/10 hover:border-brand-teal/30 bg-brand-deep shadow-xl border-brand-teal/20">
<div className="flex items-center justify-between mb-6">
<div className="p-3 rounded-xl bg-brand-teal/10 text-brand-teal">
<svg className="lucide lucide-network w-6 h-6 stroke-[1.5]" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="6" rx="1" width="6" x="16" y="16"></rect>
<rect height="6" rx="1" width="6" x="2" y="16"></rect>
<rect height="6" rx="1" width="6" x="9" y="2"></rect>
<path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
<path d="M12 12V8"></path>
</svg>
</div>
<span className="text-xs font-mono text-white/30 uppercase tracking-widest">
                  Ökosystem
                </span>
</div>
<h3 className="font-display text-2xl font-medium mb-2 text-white">
                Anwender
              </h3>
<p className="text-sm text-white/50 leading-relaxed mb-4">
                Innovation Park Artificial Intelligence. Der globale Hotspot für
                KI.
              </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-6 h-6 rounded-full bg-brand-teal/20 flex items-center justify-center text-[10px] font-bold text-brand-teal">
                  IP
                </div>
<span className="text-sm font-medium text-white/80">IPAI</span>
</div>
</div>
<div className="absolute -bottom-16 left-8 w-4 h-4 rounded-full bg-brand-deep border-4 border-brand-teal shadow-[0_0_20px_rgba(45,212,191,0.5)] z-20"></div>
</div>
<div className="w-64"></div>
</div>
</section>
</main>

<nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 p-1.5 bg-[#0F172A]/80 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl ring-1 ring-white/5">
<button className="group relative px-6 py-3 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/5" onclick="scrollToSection('section-1')">
<span className="relative z-10 text-sm font-medium text-brand-salmon transition-colors group-hover:text-white">
          Familie &amp; Bildung
        </span>
<div className="absolute inset-0 bg-brand-salmon/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
</button>
<div className="w-px h-4 bg-white/10 mx-1"></div>
<button className="group relative px-6 py-3 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/5" onclick="scrollToSection('section-2')">
<span className="relative z-10 text-sm font-medium text-brand-cyan transition-colors group-hover:text-white">
          Forschung
        </span>
<div className="absolute inset-0 bg-brand-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
</button>
<div className="w-px h-4 bg-white/10 mx-1"></div>
<button className="group relative px-6 py-3 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/5" onclick="scrollToSection('section-3')">
<span className="relative z-10 text-sm font-medium text-brand-teal transition-colors group-hover:text-white">
          Unternehmertum
        </span>
<div className="absolute inset-0 bg-brand-teal/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
</button>
</nav>

<div className="fixed inset-0 pointer-events-none z-0 opacity-20" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fillOpacity=\\'0.1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}></div>

<div className="fixed inset-0 pointer-events-none z-10 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>


    </>
  );
}
