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
},
colors: {
copper: {
50: '#fff8f1',
100: '#ffefd8',
200: '#ffdca6',
300: '#ffc36d',
400: '#ff9f32',
500: '#ff800a',
600: '#f05f00',
700: '#c74501',
800: '#9e3508',
900: '#7f2e0d',
}
},
backgroundImage: {
'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.15%22/%3E%3C/svg%3E')",
}
}
}
}



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
      

<div className="fixed inset-0 w-full h-full pointer-events-none z-50 mix-blend-overlay opacity-20 bg-noise"></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-copper-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-zinc-800/20 blur-[100px] rounded-full pointer-events-none z-0"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-24 flex flex-col items-center">

<div className="mb-8 flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-copper-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Matrículas Abertas</span>
</div>

<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-center text-white tracking-tight leading-[1.1] mb-8 max-w-4xl mx-auto">
            Se sua escola tem <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-200 to-copper-500">vaga sobrando</span>,<br className="hidden md:block"/> isso é ótimo.
        </h1>
<p className="text-xl md:text-2xl text-zinc-400 text-center max-w-2xl mb-16 font-light leading-relaxed">
            Dá pra encher ainda esse mês. <span className="text-zinc-200">Não dependa da sorte.</span>
</p>

<div className="w-full grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center mb-20">

<div className="group relative bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 backdrop-blur-md overflow-hidden hover:border-zinc-700 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none"></div>
<div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4">
<div className="flex items-center gap-3">
<div className="p-2 bg-zinc-800/50 rounded-lg">
<i className="w-5 h-5 text-zinc-400" data-lucide="calendar"></i>
</div>
<span className="text-sm font-medium text-zinc-200 tracking-wide uppercase">Cenário Atual</span>
</div>
<span className="text-xs text-zinc-500">Outubro</span>
</div>
<div className="space-y-3 relative">

<div className="flex items-center justify-between p-3 rounded-lg bg-zinc-950/50 border border-zinc-800/50">
<div className="flex items-center gap-3">
<span className="text-zinc-600 text-sm w-4">02</span>
<span className="text-zinc-500 text-base">Turma Manhã</span>
</div>
<span className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-500 border border-zinc-700">Vaga Aberta</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-zinc-950/50 border border-zinc-800/50">
<div className="flex items-center gap-3">
<span className="text-zinc-600 text-sm w-4">05</span>
<span className="text-zinc-500 text-base">Turma Tarde</span>
</div>
<span className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-500 border border-zinc-700">Vaga Aberta</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-zinc-950/50 border border-zinc-800/50 opacity-50">
<div className="flex items-center gap-3">
<span className="text-zinc-600 text-sm w-4">08</span>
<span className="text-zinc-500 text-base">Berçário</span>
</div>
<span className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-500 border border-zinc-700">Vaga Aberta</span>
</div>
</div>
</div>

<div className="flex justify-center py-4 md:py-0">
<div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-copper-900 to-zinc-900 border border-copper-900/50 shadow-[0_0_30px_-5px_rgba(255,159,50,0.3)]">
<i className="w-5 h-5 text-copper-400 rotate-90 md:rotate-0" data-lucide="arrow-right"></i>
</div>
</div>

<div className="group relative bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 backdrop-blur-md overflow-hidden hover:border-copper-900/50 transition-colors duration-500">

<div className="absolute -top-10 -right-10 w-32 h-32 bg-copper-500/10 blur-[50px] rounded-full pointer-events-none"></div>
<div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4">
<div className="flex items-center gap-3">
<div className="p-2 bg-copper-900/20 rounded-lg border border-copper-900/30">
<i className="w-5 h-5 text-copper-400" data-lucide="check-circle-2"></i>
</div>
<span className="text-sm font-medium text-copper-100 tracking-wide uppercase">Cenário Futuro</span>
</div>
<span className="text-xs text-copper-400/80">Previsto</span>
</div>
<div className="space-y-3">

<div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-zinc-900 to-zinc-900 border border-zinc-800">
<div className="flex items-center gap-3">
<span className="text-zinc-500 text-sm w-4">02</span>
<span className="text-zinc-200 text-base">Turma Manhã</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-copper-500"></div>
<span className="text-xs font-medium text-copper-400">Lotado</span>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-zinc-900 to-zinc-900 border border-zinc-800">
<div className="flex items-center gap-3">
<span className="text-zinc-500 text-sm w-4">05</span>
<span className="text-zinc-200 text-base">Turma Tarde</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-copper-500"></div>
<span className="text-xs font-medium text-copper-400">Lotado</span>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-zinc-900 to-zinc-900 border border-zinc-800">
<div className="flex items-center gap-3">
<span className="text-zinc-500 text-sm w-4">08</span>
<span className="text-zinc-200 text-base">Berçário</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-copper-500"></div>
<span className="text-xs font-medium text-copper-400">Lotado</span>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-2xl mx-auto space-y-8 mb-20">
<div className="flex gap-4 items-start">
<i className="w-6 h-6 text-copper-400 mt-1 shrink-0" data-lucide="zap"></i>
<p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                    Vaga sobrando não é problema — <strong className="text-white font-semibold">é oportunidade</strong>.
                </p>
</div>
<div className="flex gap-4 items-start">
<i className="w-6 h-6 text-zinc-500 mt-1 shrink-0" data-lucide="alert-circle"></i>
<p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                    O problema é depender de panfleto, indicação ou visitas aleatórias.
                </p>
</div>
<div className="flex gap-4 items-start">
<i className="w-6 h-6 text-copper-400 mt-1 shrink-0" data-lucide="target"></i>
<p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                    Nós criamos uma <span className="text-white border-b border-copper-500/30">máquina de captação</span> que atrai pais e alunos com intenção real de matrícula, todos os dias.
                </p>
</div>
<div className="bg-zinc-900/50 border-l-2 border-copper-500 pl-6 py-4 rounded-r-lg">
<p className="text-xl md:text-2xl font-medium text-white italic">
                    "Sua estrutura já existe. Agora só falta tráfego."
                </p>
</div>
</div>

<div className="text-center relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-copper-600 to-orange-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<button className="relative bg-zinc-900 hover:bg-zinc-800 text-white text-lg font-medium py-5 px-10 rounded-xl border border-zinc-700 hover:border-copper-500/50 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 w-full md:w-auto mx-auto">
                Quero lotar minhas turmas
                <i className="w-5 h-5 text-copper-400" data-lucide="arrow-up-right"></i>
</button>
<p className="mt-4 text-sm text-zinc-500">Consultoria estratégica para escolas • Vagas limitadas</p>
</div>

<footer className="mt-32 w-full pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 opacity-60 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-copper-600 rounded-full flex items-center justify-center text-[10px] text-black font-bold">E</div>
<span className="text-sm font-medium tracking-tight">Escola Marketing</span>
</div>
<div className="flex gap-6 text-sm">
<a className="hover:text-white transition-colors" href="#">Termos</a>
<a className="hover:text-white transition-colors" href="#">Privacidade</a>
</div>
<div className="text-xs text-zinc-600">
                © 2024 Design System Inspiration
            </div>
</footer>
</div>


    </>
  );
}
