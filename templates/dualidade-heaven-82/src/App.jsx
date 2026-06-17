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



        // Script simples para alterar o estilo da navbar com base no scroll
        const navbar = document.getElementById('navbar');
        const navContainer = document.getElementById('nav-container');
        const navMenu = document.getElementById('nav-menu');
        const brandText = document.getElementById('brand-text');
        const hellSection = document.getElementById('hell');

        window.addEventListener('scroll', () => {
            const hellPosition = hellSection.getBoundingClientRect().top;
            
            // Se o topo da seção Inferno atingir o topo da viewport (com offset para a navbar)
            if (hellPosition < 100) {
                navContainer.classList.remove('glass-heaven', 'text-slate-900');
                navContainer.classList.add('glass-hell', 'text-white', 'border-red-900/30');
                
                navMenu.classList.remove('glass-heaven', 'text-slate-900');
                navMenu.classList.add('glass-hell', 'text-white', 'border-red-900/30');
            } else {
                navContainer.classList.add('glass-heaven', 'text-slate-900');
                navContainer.classList.remove('glass-hell', 'text-white', 'border-red-900/30');
                
                navMenu.classList.add('glass-heaven', 'text-slate-900');
                navMenu.classList.remove('glass-hell', 'text-white', 'border-red-900/30');
            }
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
      

<nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-500" id="navbar">
<div className="glass-heaven rounded-full px-6 py-2 flex items-center gap-2 shadow-sm transition-colors duration-500" id="nav-container">
<span className="font-semibold tracking-tight text-sm uppercase" id="brand-text">Dualidade</span>
</div>
<div className="glass-heaven rounded-full px-2 py-2 flex items-center gap-4 shadow-sm transition-colors duration-500" id="nav-menu">
<a className="text-xs font-medium px-4 py-2 rounded-full hover:bg-slate-100 transition-colors" href="#heaven">Ascensão</a>
<a className="text-xs font-medium px-4 py-2 rounded-full hover:bg-red-900/10 hover:text-red-600 transition-colors" href="#hell">Queda</a>
</div>
</nav>

<section className="relative min-h-screen w-full bg-slate-50 flex flex-col items-center justify-center overflow-hidden" id="heaven">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[30rem] h-[30rem] bg-blue-100 rounded-full blur-3xl opacity-60 animate-drift"></div>
<div className="absolute bottom-[10%] right-[10%] w-[25rem] h-[25rem] bg-indigo-100 rounded-full blur-3xl opacity-60 animate-float"></div>
<div className="absolute top-[40%] left-[40%] w-[40rem] h-[40rem] bg-white rounded-full blur-3xl opacity-80 z-0"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-6 animate-float">
<iconify-icon icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="16"></iconify-icon>
                Dimensão Superior
            </div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-slate-900 mb-6 leading-[0.9]">
                Pureza &amp; <br/>
<span className="text-gradient-heaven">Elevação Etérea</span>
</h1>
<p className="text-lg text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                Experimente a tranquilidade absoluta. Um design leve, responsivo e divino, focado na clareza e na luz.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="group relative px-8 py-3 bg-slate-900 text-white text-sm font-medium rounded-full overflow-hidden transition-all hover:bg-slate-800 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20">
<span className="relative z-10 flex items-center gap-2">
                        Explorar Paraíso
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
</button>
</div>
</div>

<div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 mt-20">

<div className="card-heaven glass-heaven p-8 rounded-3xl transition-all duration-500 cursor-pointer group">
<div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Proteção Divina</h3>
<p className="text-sm text-slate-500 leading-relaxed">Segurança impenetrável com uma interface limpa e acolhedora.</p>
</div>

<div className="card-heaven glass-heaven p-8 rounded-3xl transition-all duration-500 cursor-pointer group mt-0 md:-mt-8">
<div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:cloud-sun-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Clareza Total</h3>
<p className="text-sm text-slate-500 leading-relaxed">Dados visíveis como o céu azul, sem ruídos ou distrações.</p>
</div>

<div className="card-heaven glass-heaven p-8 rounded-3xl transition-all duration-500 cursor-pointer group">
<div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-cyan-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:infinite-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Eternidade</h3>
<p className="text-sm text-slate-500 leading-relaxed">Fluxos contínuos e animações que respiram vida.</p>
</div>
</div>

<div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent via-slate-50 to-neutral-200"></div>
</section>

<div className="w-full h-64 bg-gradient-to-b from-neutral-200 via-neutral-400 to-neutral-950 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-20 mix-blend-overlay"></div>
<div className="text-center z-10">
<p className="text-neutral-800 text-xs font-semibold tracking-[0.3em] uppercase mb-2">A Travessia</p>
<div className="h-16 w-[1px] bg-neutral-800 mx-auto opacity-50"></div>
<iconify-icon className="text-neutral-900 mt-2 animate-bounce" icon="solar:sort-vertical-linear" width="24"></iconify-icon>
</div>
</div>

<section className="relative min-h-screen w-full bg-neutral-950 flex flex-col items-center justify-center overflow-hidden py-20 border-t border-red-900/30" id="hell">

<div className="absolute inset-0 w-full h-full pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-neutral-950 to-neutral-950"></div>

<div className="ember-particle absolute bottom-0 left-[20%] w-1 h-1 bg-orange-500 rounded-full blur-[1px]" style={{animationDelay: '0s', left: '10%'}}></div>
<div className="ember-particle absolute bottom-0 left-[40%] w-2 h-2 bg-red-500 rounded-full blur-[2px]" style={{animationDelay: '1.5s', left: '35%'}}></div>
<div className="ember-particle absolute bottom-0 left-[60%] w-1.5 h-1.5 bg-orange-400 rounded-full blur-[1px]" style={{animationDelay: '0.5s', left: '70%'}}></div>
<div className="ember-particle absolute bottom-0 left-[80%] w-1 h-1 bg-red-600 rounded-full blur-[1px]" style={{animationDelay: '2.5s', left: '85%'}}></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/30 border border-red-900/50 text-red-500 text-xs font-medium mb-6">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                Zona Crítica
            </div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white mb-6 leading-[0.9]">
                Poder &amp; <br/>
<span className="text-gradient-hell animate-pulse">Caos Absoluto</span>
</h1>
<p className="text-lg text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                Mergulhe nas profundezas. Contraste alto, impacto visual agressivo e performance implacável.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="group relative px-8 py-3 bg-red-600 text-white text-sm font-medium rounded-full overflow-hidden transition-all hover:bg-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]">
<span className="relative z-10 flex items-center gap-2">
                        Iniciar Protocolo
                        <iconify-icon className="group-hover:scale-125 transition-transform" icon="solar:fire-linear" width="18"></iconify-icon>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
</button>
</div>
</div>

<div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 mt-20">

<div className="card-hell glass-hell p-8 rounded-3xl transition-all duration-300 cursor-pointer group border-neutral-800">
<div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-red-900/30 flex items-center justify-center text-red-500 mb-6 group-hover:text-red-400 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all">
<iconify-icon icon="solar:bomb-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight group-hover:text-red-400 transition-colors">Impacto Explosivo</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-300">Interações que reagem instantaneamente com força total.</p>
</div>

<div className="card-hell glass-hell p-8 rounded-3xl transition-all duration-300 cursor-pointer group border-neutral-800 mt-0 md:mt-12">
<div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-orange-900/30 flex items-center justify-center text-orange-500 mb-6 group-hover:text-orange-400 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight group-hover:text-orange-400 transition-colors">Velocidade Insana</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-300">Otimização levada ao extremo, sem limites de segurança.</p>
</div>

<div className="card-hell glass-hell p-8 rounded-3xl transition-all duration-300 cursor-pointer group border-neutral-800">
<div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-red-900/30 flex items-center justify-center text-red-600 mb-6 group-hover:text-red-500 group-hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all">
<iconify-icon icon="solar:ghost-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight group-hover:text-red-500 transition-colors">Código Obscuro</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-300">Algoritmos complexos escondidos nas sombras do backend.</p>
</div>
</div>

<div className="w-full max-w-lg mx-auto mt-32 px-6 relative z-10">
<div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-xl p-6 shadow-2xl">
<div className="flex items-center gap-2 mb-6 border-b border-neutral-800 pb-4">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
<span className="ml-auto text-xs text-neutral-600 font-mono">root@hell-server:~</span>
</div>
<div className="space-y-4">
<div className="group">
<label className="block text-xs text-neutral-500 font-mono mb-1 group-focus-within:text-red-500 transition-colors">DESTINO</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2 text-sm text-white font-mono focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all placeholder-neutral-700" placeholder="Digite seu e-mail..." type="text"/>
</div>
<div className="group">
<div className="flex justify-between items-center mb-1">
<label className="block text-xs text-neutral-500 font-mono group-focus-within:text-red-500 transition-colors">INTENSIDADE</label>
<span className="text-xs text-red-500 font-mono hidden group-hover:inline-block">DANGER</span>
</div>
<input className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-600 hover:accent-red-500" type="range"/>
</div>
<button className="w-full mt-4 bg-white text-black font-mono text-sm py-2 rounded hover:bg-red-500 hover:text-white transition-colors duration-200">
                        EXECUTAR_PACTO.EXE
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-950 border-t border-neutral-900 py-12 text-center relative z-20">
<p className="text-neutral-600 text-xs tracking-wider uppercase font-medium">
            O equilíbrio é uma ilusão • Escolha seu lado
        </p>
</footer>


    </>
  );
}
