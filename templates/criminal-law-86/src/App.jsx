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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Instrument Serif', 'serif'],
},
colors: {
brand: {
gold: '#D97706',   // Amber-600
light: '#FCD34D',  // Amber-300
dark: '#020202',   // Almost Black
panel: '#0C0C0C',  // Dark Panel
border: 'rgba(217, 119, 6, 0.15)' // Low opacity gold border
}
},
animation: {
'float': 'float 8s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'marquee': 'marquee 40s linear infinite',
'dash': 'dash 2s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
dash: {
'to': { strokeDashoffset: '24' }
}
}
}
}
}



        // Scroll Reveal Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
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
      

<div className="fixed inset-0 pointer-events-none -z-10 bg-grid"></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[600px] bg-brand-gold/10 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>

<nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[92%] max-w-5xl z-50 transition-all duration-300">
<div className="glass-panel rounded-full p-2 pl-4 md:pl-6 flex items-center justify-between shadow-2xl shadow-brand-gold/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-brand-gold/10 rounded-full flex items-center justify-center border border-brand-gold/30">
<span className="iconify text-brand-gold" data-icon="lucide:scale" data-width="16"></span>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-wide font-sans text-white/90 leading-none">MENDES &amp; SILVA</span>
<span className="text-[9px] text-white/40 tracking-[0.2em] uppercase">Advocacia Criminal</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-normal text-white/60 hover:text-white transition-colors" href="#expertise">Atuação</a>
<a className="text-xs font-normal text-white/60 hover:text-white transition-colors" href="#strategy">Estratégia</a>
<a className="text-xs font-normal text-white/60 hover:text-white transition-colors" href="#about">O Escritório</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:block text-xs font-normal text-white/60 hover:text-white transition-colors px-4" href="#">Área do Cliente</a>
<button className="bg-white text-brand-dark px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs font-bold hover:bg-brand-gold hover:text-white transition-all duration-300 flex items-center gap-2">
<span className="iconify" data-icon="lucide:phone" data-width="12"></span>
                    Plantão 24h
                </button>
</div>
</div>
</nav>
<main className="pt-32 md:pt-40 pb-20">

<section className="container mx-auto px-6 max-w-6xl text-center mb-20 md:mb-32 relative">
<div className="reveal active flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/20 bg-brand-gold/5 backdrop-blur-sm mb-6 md:mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-brand-gold"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
</span>
<span className="text-[10px] md:text-[11px] font-medium text-brand-gold tracking-wide uppercase">Atendimento Urgente em Todo Brasil</span>
</div>
<h1 className="text-5xl sm:text-6xl md:text-8xl font-serif text-white tracking-tight leading-[0.95] mb-6 md:mb-8">
                    Defesa Criminal de <br className="hidden md:block"/>
<span className="text-white/50 italic pr-2">Alta</span> <span className="text-gradient">Complexidade.</span>
</h1>
<p className="text-base md:text-xl font-light text-white/50 max-w-2xl leading-relaxed mb-8 md:mb-10 mx-auto">
                    Não entregue sua liberdade ao acaso. Aliamos 35 anos de tradição jurídica com estratégias de defesa técnica e sigilo absoluto.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center px-4">
<a className="w-full sm:w-auto group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-dark" href="https://wa.me/">
<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#020402_0%,#D97706_50%,#020402_100%)]"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-brand-panel px-8 py-3.5 text-sm font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-[#1a1105]">
                            Falar com Especialista
                            <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</span>
</a>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-medium text-white/60 hover:text-white transition-colors border border-transparent hover:border-white/10 hover:bg-white/5">
                        Conhecer Áreas de Atuação
                    </button>
</div>
</div>
</section>

<section className="container mx-auto px-4 max-w-7xl mb-24 md:mb-40 reveal">
<div className="relative group perspective-[2000px]">

<div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/20 to-brand-dark rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>

<div className="relative rounded-xl bg-[#0C0C0C] border border-brand-border overflow-hidden shadow-2xl transform transition-transform duration-700 md:hover:rotate-x-2">

<div className="h-10 border-b border-brand-border flex items-center px-4 justify-between bg-white/[0.02]">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-white/10 border border-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 border border-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 border border-white/20"></div>
</div>
<div className="text-[10px] font-mono text-white/30 flex items-center gap-2 uppercase tracking-wider">
<span className="iconify" data-icon="lucide:lock" data-width="10"></span>
                            mendes-silva-interno/casos/monitoramento
                        </div>
</div>
<div className="flex flex-col md:flex-row h-auto md:h-[600px]">

<div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-brand-border p-4 flex md:flex-col gap-1 hidden md:flex bg-[#0A0A0A]">
<div className="text-xs font-medium text-white/40 mb-4 px-2 tracking-wider">PROCESSO: #8921-25</div>
<div className="flex items-center gap-3 px-3 py-2 bg-brand-gold/10 text-brand-gold rounded-md text-sm font-medium cursor-pointer border border-brand-gold/20">
<span className="iconify" data-icon="lucide:activity" data-width="16"></span>
                                Andamento
                            </div>
<div className="flex items-center gap-3 px-3 py-2 text-white/60 hover:text-white hover:bg-white/5 rounded-md text-sm font-medium cursor-pointer transition-colors">
<span className="iconify" data-icon="lucide:file-text" data-width="16"></span>
                                Inquérito Policial
                            </div>
<div className="flex items-center gap-3 px-3 py-2 text-white/60 hover:text-white hover:bg-white/5 rounded-md text-sm font-medium cursor-pointer transition-colors">
<span className="iconify" data-icon="lucide:gavel" data-width="16"></span>
                                Fase Judicial
                            </div>
<div className="flex items-center gap-3 px-3 py-2 text-white/60 hover:text-white hover:bg-white/5 rounded-md text-sm font-medium cursor-pointer transition-colors">
<span className="iconify" data-icon="lucide:scale" data-width="16"></span>
                                Recursos STJ/STF
                            </div>
<div className="mt-auto hidden md:block">
<div className="p-4 rounded-lg border border-brand-border bg-gradient-to-br from-brand-gold/5 to-transparent">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] text-white/50 uppercase">Probabilidade</span>
<span className="text-[10px] text-brand-gold font-bold">ALTA</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-brand-gold w-[85%]"></div>
</div>
<p className="text-[9px] text-white/30 mt-2 leading-tight">Análise baseada em jurisprudência recente do STJ.</p>
</div>
</div>
</div>

<div className="flex-1 p-4 md:p-8 bg-gradient-to-br from-[#0C0C0C] to-[#050505] relative overflow-hidden">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#d97706 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="flex flex-col md:flex-row justify-between md:items-end mb-8 md:mb-12 relative z-10 gap-4">
<div>
<h2 className="text-xl md:text-2xl font-serif text-white mb-1">Timeline da Defesa</h2>
<p className="text-sm text-white/50 font-light">Monitoramento em tempo real de movimentações processuais.</p>
</div>
<div className="flex items-center gap-3">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-500"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs text-green-500 font-mono tracking-wide">EM LIBERDADE</span>
<div className="h-8 w-[1px] bg-white/10 mx-2"></div>
<button className="flex items-center gap-2 text-xs text-white/70 bg-white/5 border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-md transition-all">
<span className="iconify" data-icon="lucide:download" data-width="12"></span>
                                        Relatório
                                    </button>
</div>
</div>

<div className="relative w-full h-64 border border-white/5 bg-white/[0.01] rounded-lg mb-8 flex items-center justify-center overflow-hidden">

<svg className="absolute inset-0 w-full h-full text-brand-gold/20" style={{zIndex: '0'}}>
<path d="M100,150 C200,150 250,80 400,80 S600,180 800,120" fill="none" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1.5"></path>
</svg>

<div className="absolute left-[10%] top-[60%] flex flex-col items-center gap-2 z-10">
<div className="w-3 h-3 bg-white/20 rounded-full"></div>
<span className="text-[10px] text-white/30 uppercase">Inquérito</span>
</div>
<div className="absolute left-[40%] top-[30%] flex flex-col items-center gap-2 z-10">
<div className="w-8 h-8 bg-brand-gold/10 border border-brand-gold rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(217,119,6,0.4)]">
<span className="iconify text-brand-gold" data-icon="lucide:file-check" data-width="14"></span>
</div>
<div className="bg-brand-gold/10 px-2 py-1 rounded border border-brand-gold/20">
<span className="text-[10px] text-brand-gold font-bold uppercase">Habeas Corpus</span>
</div>
</div>
<div className="absolute right-[15%] top-[45%] flex flex-col items-center gap-2 z-10">
<div className="w-3 h-3 bg-white/20 rounded-full"></div>
<span className="text-[10px] text-white/30 uppercase">Sentença</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
<div className="glass-panel p-5 rounded-lg border-brand-border/50">
<div className="flex items-start justify-between mb-4">
<div className="p-2 rounded-md bg-white/5 text-white/70">
<span className="iconify" data-icon="lucide:clock" data-width="18"></span>
</div>
<span className="text-xs font-mono text-brand-gold bg-brand-gold/10 px-1.5 py-0.5 rounded">URGENTE</span>
</div>
<div className="text-2xl font-medium text-white mb-1">24/7</div>
<div className="text-xs text-white/40">Atuação em Flagrantes</div>
</div>
<div className="glass-panel p-5 rounded-lg border-brand-border/50">
<div className="flex items-start justify-between mb-4">
<div className="p-2 rounded-md bg-white/5 text-white/70">
<span className="iconify" data-icon="lucide:shield-check" data-width="18"></span>
</div>
</div>
<div className="text-2xl font-medium text-white mb-1">100%</div>
<div className="text-xs text-white/40">Sigilo Absoluto</div>
</div>
<div className="glass-panel p-5 rounded-lg border-brand-gold/20 relative overflow-hidden bg-brand-gold/5">
<div className="flex items-start justify-between mb-4 relative z-10">
<div className="p-2 rounded-md bg-brand-gold/20 text-brand-gold">
<span className="iconify" data-icon="lucide:award" data-width="18"></span>
</div>
</div>
<div className="text-2xl font-medium text-white mb-1 relative z-10">35 Anos</div>
<div className="text-xs text-white/40 relative z-10">De Tradição Penal</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-y border-white/5 bg-white/[0.01] py-12 mb-32 overflow-hidden">
<div className="text-center mb-8">
<p className="text-xs font-medium text-white/30 uppercase tracking-[0.2em] px-4">Especialistas em Crimes Complexos</p>
</div>
<div className="relative flex overflow-x-hidden group">
<div className="animate-marquee flex gap-24 whitespace-nowrap opacity-40 group-hover:opacity-60 transition-all duration-500 pl-4">
<span className="text-xl font-medium tracking-tight font-serif">Direito Penal Econômico</span>
<span className="text-xl font-light tracking-widest font-sans">LAVAGEM DE DINHEIRO</span>
<span className="text-xl font-medium italic font-serif">Tribunal do Júri</span>
<span className="text-xl font-semibold tracking-tight">Crimes Cibernéticos</span>
<span className="text-xl font-medium tracking-tight font-serif">Organização Criminosa</span>
<span className="text-xl font-medium tracking-tight font-serif">Direito Penal Econômico</span>
<span className="text-xl font-light tracking-widest font-sans">LAVAGEM DE DINHEIRO</span>
<span className="text-xl font-medium italic font-serif">Tribunal do Júri</span>
<span className="text-xl font-semibold tracking-tight">Crimes Cibernéticos</span>
<span className="text-xl font-medium tracking-tight font-serif">Organização Criminosa</span>
</div>
</div>
</section>

<section className="container mx-auto px-6 max-w-6xl mb-32" id="expertise">
<div className="mb-16 md:text-center max-w-2xl mx-auto reveal">
<h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-6">Imunidade &amp; Defesa Técnica</h2>
<p className="text-white/50 font-light leading-relaxed">
                    Em momentos críticos, a estratégia define o resultado. Atuamos de forma artesanal para anular provas ilícitas e garantir seus direitos fundamentais.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="md:col-span-2 rounded-3xl bg-[#0C0C0C] border border-white/10 p-8 md:p-10 relative overflow-hidden group reveal">
<div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[80px] rounded-full pointer-events-none transition-opacity opacity-50 group-hover:opacity-100"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="mb-8">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-gold">
<span className="iconify" data-icon="lucide:file-key" data-width="20"></span>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Habeas Corpus Imediato</h3>
<p className="text-white/50 text-sm font-light leading-relaxed max-w-md">
                                Impetração de medidas liminares perante Tribunais Estaduais, STJ e STF. Atuamos com rapidez para reverter prisões ilegais e abusivas.
                            </p>
</div>

<div className="w-full h-24 md:h-32 relative border-t border-white/5 mt-4 pt-6">
<div className="flex justify-between items-center px-4 md:px-12">
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
<span className="iconify text-white/40" data-icon="lucide:lock" data-width="14"></span>
</div>
<div className="w-1 h-8 bg-gradient-to-b from-white/10 to-transparent"></div>
</div>
<div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-brand-gold rounded-full shadow-[0_0_10px_#D97706] animate-pulse"></div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-brand-gold text-white flex items-center justify-center shadow-[0_0_20px_rgba(217,119,6,0.3)]">
<span className="iconify" data-icon="lucide:unlock" data-width="18"></span>
</div>
<div className="text-[10px] text-brand-gold font-mono mt-1 uppercase">Liberdade</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 rounded-3xl bg-[#0C0C0C] border border-white/10 p-8 relative overflow-hidden group reveal delay-100">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white/80">
<span className="iconify" data-icon="lucide:search" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Inquéritos Policiais</h3>
<p className="text-white/50 text-sm font-light mb-8">
                        Acompanhamento presencial em delegacias. Evite a produção de provas autoincriminatórias.
                    </p>

<div className="bg-white/5 rounded-lg p-4 border border-white/5 transform group-hover:scale-105 transition-transform duration-500 origin-bottom">
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2 text-[10px] text-white/60 font-mono">
<span className="text-red-400">ALERT</span> Mandado de Busca
                            </div>
<div className="flex items-center gap-2 text-[10px] text-white/60 font-mono">
<span className="text-brand-gold">ACTION</span> Presença Advogado
                            </div>
<div className="flex items-center gap-2 text-[10px] text-white/60 font-mono">
<span className="text-brand-gold">SUCCESS</span> Depoimento Adiado
                            </div>
<div className="w-full h-1 bg-white/5 rounded-full mt-1"></div>
</div>
</div>
</div>

<div className="md:col-span-1 rounded-3xl bg-[#0C0C0C] border border-white/10 p-8 relative overflow-hidden group reveal delay-100">
<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-gold/10 blur-[60px] rounded-full"></div>
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<span className="iconify" data-icon="lucide:users" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Tribunal do Júri</h3>
<p className="text-white/50 text-sm font-light mb-8">
                        Defesa plena em plenário. Oratória combativa e preparação técnica para casos de crimes contra a vida.
                    </p>
<div className="relative h-24">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-full bg-white/5 rounded-xl p-4 border border-white/5 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs text-white/80 font-medium">Tese Defensiva</span>
</div>
<span className="text-xs text-white/40">Absolvição</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 rounded-3xl bg-[#0C0C0C] border border-white/10 p-8 md:p-10 relative overflow-hidden group reveal">
<div className="flex flex-col md:flex-row justify-between items-end gap-8 h-full">
<div className="max-w-xs">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white/80">
<span className="iconify" data-icon="lucide:scale" data-width="20"></span>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Consultoria Preventiva</h3>
<p className="text-white/50 text-sm font-light leading-relaxed">
                                Análise de riscos penais para empresas e executivos. Compliance criminal e defesa em crimes tributários e financeiros.
                            </p>
</div>

<div className="w-full md:w-[320px] bg-[#020202] border border-white/10 rounded-xl p-4 font-mono text-[10px] text-gray-400 shadow-2xl relative">
<div className="flex gap-1.5 mb-3">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
<div className="space-y-1">
<p><span className="text-brand-gold">ART. 312</span> <span className="text-white">CPP</span> {</p>
<p className="pl-4"><span className="text-gray-500">// Requisitos Prisão Preventiva</span></p>
<p className="pl-4"><span className="text-white">garantia_ordem:</span> <span className="text-red-400">false</span>,</p>
<p className="pl-4"><span className="text-white">risco_fuga:</span> <span className="text-red-400">false</span>,</p>
<p className="pl-4"><span className="text-brand-gold">return</span> <span className="text-green-400">"LIBERDADE_PROVISORIA"</span>;</p>
<p>}</p>
</div>
<div className="absolute -right-2 -bottom-2 w-full h-full border border-brand-gold/20 rounded-xl -z-10"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 relative overflow-hidden border-y border-white/5" id="strategy">
<div className="absolute inset-0 bg-brand-gold/5 mix-blend-overlay"></div>
<div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight mb-8">Do Flagrante à Liberdade</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">

<div className="flex flex-col gap-4 items-center opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
<div className="relative w-64 h-64">

<div className="absolute top-0 left-10 p-3 bg-white/5 border border-white/10 rounded-lg transform -rotate-12">
<span className="iconify text-white/40" data-icon="lucide:siren" data-width="24"></span>
</div>
<div className="absolute bottom-10 right-4 p-3 bg-white/5 border border-white/10 rounded-lg transform rotate-6">
<span className="iconify text-white/40" data-icon="lucide:gavel" data-width="24"></span>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-white/5 border border-white/10 rounded-lg transform -rotate-3 z-10">
<span className="iconify text-white/60" data-icon="lucide:lock" data-width="32"></span>
</div>
<svg className="absolute inset-0 w-full h-full pointer-events-none" viewbox="0 0 100 100">
<path d="M30,30 Q50,50 70,30" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="2,2"></path>
<path d="M30,70 Q50,50 70,70" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="2,2"></path>
</svg>
</div>
<p className="text-sm font-medium text-white/40 uppercase tracking-widest">Risco à Liberdade</p>
</div>

<div className="flex flex-col gap-4 items-center">
<div className="relative w-64 h-64 flex items-center justify-center">
<div className="absolute inset-0 border border-brand-gold/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 border border-brand-gold/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="w-24 h-24 bg-brand-panel rounded-full border border-brand-gold/30 flex items-center justify-center shadow-[0_0_30px_rgba(217,119,6,0.2)] relative z-10">
<div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:scale" data-width="32"></span>
</div>
</div>

<div className="absolute top-0 left-1/2 w-2 h-2 bg-brand-gold rounded-full shadow-[0_0_10px_#D97706]"></div>
<div className="absolute bottom-10 right-10 w-1.5 h-1.5 bg-brand-gold/50 rounded-full"></div>
</div>
<p className="text-sm font-medium text-brand-gold uppercase tracking-widest">Direito Restabelecido</p>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 max-w-4xl text-center mb-24 mt-24">
<div className="glass-panel p-10 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden reveal">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-brand-gold/10 to-transparent pointer-events-none"></div>
<h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-6 relative z-10">Sua liberdade não pode esperar.</h2>
<p className="text-base md:text-lg text-white/50 font-light mb-10 max-w-lg mx-auto relative z-10">
                    O tempo é o fator mais crítico na defesa criminal. Agende uma consulta com nossa equipe sênior agora mesmo.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
<a className="bg-white text-brand-dark px-8 py-4 rounded-full text-sm font-bold hover:bg-brand-gold hover:text-white transition-colors shadow-xl shadow-white/5 flex items-center justify-center gap-2" href="https://wa.me/">
<span className="iconify" data-icon="lucide:message-circle" data-width="16"></span>
                        Contato via WhatsApp
                    </a>
<a className="px-8 py-4 rounded-full text-sm font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2" href="tel:+551199999999">
<span className="iconify" data-icon="lucide:phone-call" data-width="16"></span>
                        Ligação de Emergência
                    </a>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#020202] pt-20 pb-10">
<div className="container mx-auto px-6 max-w-6xl">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-3 h-3 bg-brand-gold rounded-full"></div>
<span className="text-sm font-medium tracking-wide text-white font-sans">MENDES &amp; SILVA</span>
</div>
<p className="text-white/40 text-sm max-w-xs font-light">
                        Escritório de advocacia boutique especializado em Direito Penal e Processual Penal. Excelência técnica e sigilo desde 1985.
                    </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium text-sm">Escritório</h4>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">Sobre Nós</a>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">Sócios</a>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">Carreiras</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium text-sm">Áreas</h4>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">Crimes Financeiros</a>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">Tribunal do Júri</a>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">Execução Penal</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium text-sm">Contato</h4>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">São Paulo - SP</a>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">(11) 3232-0000</a>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">contato@mendes.adv</a>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4 sm:gap-0">
<span className="text-white/20 text-xs font-mono">© 2025 Mendes &amp; Silva Advocacia. OAB/SP 123.456.</span>
<div className="flex gap-4">
<span className="iconify text-white/40 hover:text-white cursor-pointer transition-colors" data-icon="lucide:instagram" data-width="16"></span>
<span className="iconify text-white/40 hover:text-white cursor-pointer transition-colors" data-icon="lucide:linkedin" data-width="16"></span>
<span className="iconify text-white/40 hover:text-white cursor-pointer transition-colors" data-icon="lucide:facebook" data-width="16"></span>
</div>
</div>
</div>
</footer>


    </>
  );
}
