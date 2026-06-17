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
brand: {
500: '#6366f1', // Indigo primary
600: '#4f46e5',
glow: '#818cf8',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'scroll': 'scroll 30s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 100;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        // Trigger once on load
        reveal();
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-white text-base font-semibold tracking-tight flex items-center gap-2 group font-sans" href="#">
<div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-brand-500 to-purple-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:shadow-[0_0_25px_rgba(99,102,241,0.8)] transition-all duration-500">
<iconify-icon icon="lucide:box" strokeWidth="2.5" width="14"></iconify-icon>
</div>
                Foundrbox
            </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors font-sans" href="#como-funciona">Como funciona</a>
<a className="hover:text-white transition-colors font-sans" href="#features">Recursos</a>
<a className="hover:text-white transition-colors font-sans" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium hover:text-white hidden sm:block transition-colors font-sans" href="#">Entrar</a>
<button className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-zinc-200 transition-colors tracking-tight flex items-center gap-1 group font-sans">
                    Começar
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="12"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/20 blur-[100px] rounded-full opacity-50 pointer-events-none">
</div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none">
</div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">

<div className="reveal active inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/20 bg-brand-500/10 text-[11px] text-brand-300 mb-8 font-medium shadow-[0_0_20px_rgba(99,102,241,0.2)] font-sans">
<span className="flex h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse-slow"></span>
      Novo: Algoritmo de compatibilidade v2.0
    </div>
<h1 className="reveal active text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter mb-8 leading-[1] md:leading-[0.95] font-sans font-semibold">
      Conecte-se com o <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-500 font-sans font-semibold">co-founder ideal.</span>
</h1>
<p className="reveal active delay-[100ms] text-lg text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed font-sans">
      Foundrbox une visionários de negócios a gênios técnicos. A plataforma onde ideias se transformam em unicórnios
      através da parceria perfeita.
    </p>
<div className="reveal active delay-[200ms] flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-16">
<div className="relative w-full group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500">
</div>
<div className="relative flex items-center bg-zinc-900 rounded-lg p-1">
<iconify-icon className="absolute left-4 text-zinc-500" icon="lucide:search" width="16"></iconify-icon>
<input className="w-full bg-transparent text-white text-sm rounded-md pl-10 pr-4 py-2.5 focus:outline-none placeholder:text-zinc-600" placeholder="Busque por 'CTO' ou 'Fintech'..." type="email"/>
</div>
</div>
<button className="w-full sm:w-auto bg-white text-black px-6 py-3.5 rounded-lg text-sm font-semibold hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] whitespace-nowrap font-sans">
                    Buscar Talentos
                </button>
</div>

<div className="reveal delay-[300ms] mt-10 relative perspective-[2000px] group active">
<div className="relative mx-auto w-full max-w-4xl glass-panel rounded-xl p-2 md:p-3 transform rotate-x-[15deg] group-hover:rotate-x-[5deg] transition-all duration-1000 ease-out shadow-2xl border-t border-white/10">

<div className="bg-[#0A0A0A] rounded-lg overflow-hidden border border-white/5 relative">

<div className="h-10 border-b border-white/5 flex items-center justify-between px-4 bg-zinc-900/50">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="text-[10px] text-zinc-600 font-mono font-sans">foundrbox.app/match</div>
</div>

<div className="grid grid-cols-12 gap-4 p-6 min-h-[400px]">

<div className="col-span-3 hidden md:block space-y-4">
<div className="h-8 w-24 bg-zinc-800/50 rounded animate-pulse"></div>
<div className="space-y-2">
<div className="h-6 w-full bg-zinc-900 rounded border border-white/5"></div>
<div className="h-6 w-full bg-zinc-900 rounded border border-white/5"></div>
<div className="h-6 w-3/4 bg-zinc-900 rounded border border-white/5"></div>
</div>
</div>

<div className="col-span-12 md:col-span-9 grid gap-4">

<div className="bg-zinc-900/40 border border-white/5 rounded-lg p-5 flex items-start justify-between hover:bg-white/[0.02] transition-colors cursor-pointer">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg font-sans">
                    J</div>
<div>
<div className="flex items-center gap-2">
<h3 className="text-white text-sm font-medium font-sans">Julia Santos</h3>
<span className="text-[10px] bg-brand-500/20 text-brand-300 px-1.5 py-0.5 rounded border border-brand-500/30 font-sans">98% Match</span>
</div>
<p className="text-xs text-zinc-500 mt-1 font-sans">Senior Product Manager • Ex-Nubank</p>
<div className="flex gap-2 mt-3">
<span className="text-[10px] px-2 py-1 rounded-full bg-zinc-800 text-zinc-400 font-sans">Fintech</span>
<span className="text-[10px] px-2 py-1 rounded-full bg-zinc-800 text-zinc-400 font-sans">B2B</span>
</div>
</div>
</div>
<div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10">
<iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</div>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-lg p-5 flex items-start justify-between hover:bg-white/[0.02] transition-colors cursor-pointer">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-lg font-sans">
                    M</div>
<div>
<div className="flex items-center gap-2">
<h3 className="text-white text-sm font-medium font-sans">Marcos Dev</h3>
<span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/30 font-sans">95% Match</span>
</div>
<p className="text-xs text-zinc-500 mt-1 font-sans">Fullstack Engineer • 10y XP</p>
<div className="flex gap-2 mt-3">
<span className="text-[10px] px-2 py-1 rounded-full bg-zinc-800 text-zinc-400 font-sans">AI/ML</span>
<span className="text-[10px] px-2 py-1 rounded-full bg-zinc-800 text-zinc-400 font-sans">Python</span>
</div>
</div>
</div>
<div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10">
<iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 right-10 bg-zinc-950 border border-zinc-800 p-4 rounded-lg shadow-2xl flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-xs text-white font-sans">Novo match encontrado!</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01] py-10 overflow-hidden">
<p className="text-center text-xs text-zinc-600 mb-8 uppercase tracking-widest font-medium font-sans">Usado por alumni das melhores empresas</p>
<div className="relative w-full overflow-hidden">

<div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#030303] to-transparent z-10"></div>
<div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#030303] to-transparent z-10"></div>
<div className="flex w-max animate-scroll gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold text-white tracking-tight font-sans">Google</span>
<span className="text-xl font-semibold text-white italic font-sans">Meta</span>
<span className="text-lg font-bold text-white tracking-widest font-sans">AMAZON</span>
<span className="text-xl font-bold text-white font-sans">Netflix</span>
<span className="text-xl font-bold text-white tracking-tighter font-sans">Stripe</span>
<span className="text-xl font-medium text-white font-sans">Airbnb</span>
<span className="text-xl font-bold text-white font-sans">Uber</span>
<span className="text-xl font-semibold text-white font-sans">Spotify</span>

<span className="text-xl font-bold text-white tracking-tight font-sans">Google</span>
<span className="text-xl font-semibold text-white italic font-sans">Meta</span>
<span className="text-lg font-bold text-white tracking-widest font-sans">AMAZON</span>
<span className="text-xl font-bold text-white font-sans">Netflix</span>
<span className="text-xl font-bold text-white tracking-tighter font-sans">Stripe</span>
<span className="text-xl font-medium text-white font-sans">Airbnb</span>
<span className="text-xl font-bold text-white font-sans">Uber</span>
<span className="text-xl font-semibold text-white font-sans">Spotify</span>

<span className="text-xl font-bold text-white tracking-tight font-sans">Google</span>
<span className="text-xl font-semibold text-white italic font-sans">Meta</span>
<span className="text-lg font-bold text-white tracking-widest font-sans">AMAZON</span>
<span className="text-xl font-bold text-white font-sans">Netflix</span>
<span className="text-xl font-bold text-white tracking-tighter font-sans">Stripe</span>
</div>
</div>
</section>

<section className="py-32 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 max-w-2xl reveal active">
<h2 className="text-3xl md:text-4xl text-white tracking-tight mb-4 font-sans font-semibold">
                    Ferramentas para construir <br/>
<span className="text-zinc-500 font-sans font-semibold">relacionamentos sólidos.</span>
</h2>
<p className="text-zinc-400 font-light text-lg font-sans">
                    Não é apenas sobre encontrar alguém. É sobre encontrar a pessoa certa, alinhar expectativas e começar com o pé direito.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="reveal md:col-span-2 glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden group active">
<div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 blur-[80px] rounded-full group-hover:bg-brand-500/20 transition-colors duration-700"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-white mb-6 border border-white/5">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white mb-3 tracking-tight font-sans font-semibold">Vetting Verificado</h3>
<p className="text-zinc-400 font-light max-w-md leading-relaxed font-sans">
                            Validamos experiências anteriores, contribuições de código (GitHub) e histórico profissional (LinkedIn) para garantir que você só converse com candidatos de alto calibre.
                        </p>
</div>

<div className="absolute right-0 bottom-0 opacity-20 transform translate-x-1/4 translate-y-1/4">
<iconify-icon className="text-white" icon="lucide:fingerprint" width="300"></iconify-icon>
</div>
</div>

<div className="reveal md:row-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group hover:border-brand-500/30 transition-colors active">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-white mb-6 border border-white/5">
<iconify-icon icon="lucide:scale" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight font-sans">Equity &amp; Vesting</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-8 font-sans">
                        Ferramentas integradas para discutir divisão de capital e cronogramas de vesting antes mesmo de assinar papéis.
                    </p>

<div className="mt-auto bg-zinc-900/50 rounded-lg p-4 border border-white/5">
<div className="flex justify-between text-[10px] text-zinc-500 mb-2 uppercase tracking-wider">
<span className="font-sans">Distribuição</span>
<span className="font-sans">Tempo</span>
</div>
<div className="flex gap-1 h-32 items-end">
<div className="w-1/4 bg-zinc-800 rounded-t h-[40%]"></div>
<div className="w-1/4 bg-zinc-700 rounded-t h-[60%]"></div>
<div className="w-1/4 bg-brand-900 rounded-t h-[80%]"></div>
<div className="w-1/4 bg-brand-500 rounded-t h-[100%] shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
</div>
</div>
</div>

<div className="reveal glass-panel rounded-2xl p-8 group hover:bg-white/[0.03] transition-colors active">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white mb-4 border border-white/5 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:globe" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 font-sans">Global Reach</h3>
<p className="text-sm text-zinc-400 font-light font-sans">
                        Encontre parceiros em qualquer hub de inovação do mundo.
                    </p>
</div>

<div className="reveal glass-panel rounded-2xl p-8 group hover:bg-white/[0.03] transition-colors active">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white mb-4 border border-white/5 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 font-sans">Fast Match</h3>
<p className="text-sm text-zinc-400 font-light font-sans">
                        Algoritmo que prioriza skills complementares e valores culturais.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-zinc-900/10" id="como-funciona">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="reveal active">
<div className="text-brand-500 font-medium mb-4 tracking-wide text-xs uppercase font-sans">Para todos os perfis</div>
<h2 className="text-3xl text-white tracking-tight mb-8 font-sans font-semibold">Qual o seu papel na próxima grande startup?</h2>
<div className="space-y-4">

<div className="group relative p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-800/40 hover:border-zinc-700 transition-all cursor-pointer overflow-hidden">
<div className="absolute left-0 top-0 w-1 h-full bg-brand-500 transform scale-y-0 group-hover:scale-y-100 transition-transform"></div>
<div className="flex items-start gap-4">
<div className="mt-1 w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:briefcase" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1 group-hover:text-brand-300 transition-colors font-sans">O Visionário (Biz)</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed font-sans">Você entende o mercado, tem o pitch deck e sabe vender. Procura quem construa o produto.</p>
</div>
</div>
</div>

<div className="group relative p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-800/40 hover:border-zinc-700 transition-all cursor-pointer overflow-hidden">
<div className="absolute left-0 top-0 w-1 h-full bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform"></div>
<div className="flex items-start gap-4">
<div className="mt-1 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:code-2" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1 group-hover:text-blue-300 transition-colors font-sans">O Construtor (Tech)</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed font-sans">Você domina a tecnologia e arquitetura. Procura quem traga a visão de negócios e capital.</p>
</div>
</div>
</div>
</div>
</div>

<div className="reveal delay-100 relative active">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-blue-500/20 blur-[80px] opacity-40"></div>
<div className="glass-panel rounded-2xl p-6 relative z-10 border border-white/10">
<div className="flex items-center justify-between mb-8">
<h3 className="text-sm font-medium text-white flex items-center gap-2 font-sans">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Match em Tempo Real
                            </h3>
</div>

<div className="flex justify-between items-center relative py-10">

<div className="flex flex-col items-center gap-3 z-10">
<div className="w-16 h-16 rounded-full border-2 border-brand-500 p-1">
<div className="w-full h-full bg-zinc-800 rounded-full flex items-center justify-center text-white">
<iconify-icon icon="lucide:user" width="24"></iconify-icon>
</div>
</div>
<span className="text-xs text-white font-medium bg-zinc-800 px-2 py-1 rounded font-sans">Você</span>
</div>

<div className="absolute top-1/2 left-0 w-full h-[2px] bg-zinc-800 -translate-y-1/2">
<div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-brand-500 to-transparent animate-[shimmer_2s_infinite]"></div>
</div>
<div className="z-10 bg-black p-2 rounded-full border border-zinc-800">
<iconify-icon className="text-zinc-500" icon="lucide:arrow-right-left" width="16"></iconify-icon>
</div>

<div className="flex flex-col items-center gap-3 z-10">
<div className="w-16 h-16 rounded-full border-2 border-dashed border-zinc-600 p-1 animate-[spin_10s_linear_infinite]">
<div className="w-full h-full bg-zinc-800 rounded-full flex items-center justify-center text-white overflow-hidden">
<iconify-icon className="text-zinc-600" icon="lucide:help-circle" width="24"></iconify-icon>
</div>
</div>
<span className="text-xs text-zinc-500 font-medium font-sans">Co-Founder</span>
</div>
</div>
<div className="space-y-2 mt-4">
<div className="flex justify-between text-xs text-zinc-500">
<span className="font-sans">Skills complementares</span>
<span className="text-green-500 font-sans">Alto</span>
</div>
<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[85%] rounded-full"></div>
</div>
<div className="flex justify-between text-xs text-zinc-500 pt-2">
<span className="font-sans">Visão de Futuro</span>
<span className="text-brand-500 font-sans">Alinhado</span>
</div>
<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-brand-500 w-[92%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative max-w-3xl mx-auto px-6" id="faq">
<div className="reveal text-center mb-16 active">
<h2 className="text-3xl text-white tracking-tight mb-4 font-sans font-semibold">Dúvidas Frequentes</h2>
<p className="text-zinc-400 font-light font-sans">Tudo que você precisa saber antes de começar sua jornada.</p>
</div>
<div className="space-y-4">

<details className="reveal group glass-panel rounded-lg px-6 open:bg-white/[0.04] transition-all duration-300 active">
<summary className="flex justify-between items-center cursor-pointer py-6 text-white text-sm font-medium select-none font-sans">
                    Como o algoritmo de match funciona?
                    <iconify-icon className="icon text-zinc-500" icon="lucide:chevron-down" width="20"></iconify-icon>
</summary>
<div className="text-zinc-400 text-sm font-light leading-relaxed pb-6 border-t border-white/5 pt-4 font-sans">
                    Utilizamos uma combinação de análise técnica (stack, experiência) e psicometria (perfil comportamental, ambição, estilo de trabalho). O objetivo não é achar alguém igual a você, mas alguém que te complete.
                </div>
</details>

<details className="reveal group glass-panel rounded-lg px-6 open:bg-white/[0.04] transition-all duration-300 active">
<summary className="flex justify-between items-center cursor-pointer py-6 text-white text-sm font-medium select-none font-sans">
                    É gratuito para criar perfil?
                    <iconify-icon className="icon text-zinc-500" icon="lucide:chevron-down" width="20"></iconify-icon>
</summary>
<div className="text-zinc-400 text-sm font-light leading-relaxed pb-6 border-t border-white/5 pt-4 font-sans">
                    Sim! Você pode criar seu perfil, navegar por candidatos anonimizados e receber matches básicos gratuitamente. Para iniciar conversas ilimitadas e ver detalhes profundos de vetting, oferecemos planos Premium.
                </div>
</details>

<details className="reveal group glass-panel rounded-lg px-6 open:bg-white/[0.04] transition-all duration-300 active">
<summary className="flex justify-between items-center cursor-pointer py-6 text-white text-sm font-medium select-none font-sans">
                    Vocês ajudam com contratos legais?
                    <iconify-icon className="icon text-zinc-500" icon="lucide:chevron-down" width="20"></iconify-icon>
</summary>
<div className="text-zinc-400 text-sm font-light leading-relaxed pb-6 border-t border-white/5 pt-4 font-sans">
                    Fornecemos templates padrão de Memorando de Entendimento (MoU) e acordos de vesting para startups em estágio inicial, mas sempre recomendamos consultoria jurídica especializada para a formalização final.
                </div>
</details>

<details className="reveal group glass-panel rounded-lg px-6 open:bg-white/[0.04] transition-all duration-300 active">
<summary className="flex justify-between items-center cursor-pointer py-6 text-white text-sm font-medium select-none font-sans">
                    Posso buscar co-founders em outros países?
                    <iconify-icon className="icon text-zinc-500" icon="lucide:chevron-down" width="20"></iconify-icon>
</summary>
<div className="text-zinc-400 text-sm font-light leading-relaxed pb-6 border-t border-white/5 pt-4 font-sans">
                    Com certeza. O Foundrbox é global. Você pode filtrar por localização específica ou marcar "Remoto" para encontrar talentos em qualquer lugar do mundo.
                </div>
</details>
</div>
</section>

<section className="py-20 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
<div className="reveal active">
<div className="text-3xl md:text-4xl text-white mb-2 tracking-tight font-sans font-semibold">12k+</div>
<div className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest font-medium font-sans">Membros Ativos</div>
</div>
<div className="reveal delay-[100ms] active">
<div className="text-3xl md:text-4xl text-white mb-2 tracking-tight font-sans font-semibold">850+</div>
<div className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest font-medium font-sans">Startups Criadas</div>
</div>
<div className="reveal delay-[200ms] active">
<div className="text-3xl md:text-4xl text-white mb-2 tracking-tight font-sans font-semibold">$45M</div>
<div className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest font-medium font-sans">Captados (Seed)</div>
</div>
<div className="reveal delay-[300ms] active">
<div className="text-3xl md:text-4xl text-white mb-2 tracking-tight font-sans font-semibold">93%</div>
<div className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest font-medium font-sans">Taxa de Retenção</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="reveal max-w-5xl mx-auto relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 text-center py-24 px-6 group active">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-500/20 blur-[120px] rounded-full group-hover:bg-brand-500/30 transition-colors duration-1000"></div>
<div className="relative z-10">
<div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-8 flex items-center justify-center text-black shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
<iconify-icon icon="lucide:rocket" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl text-white tracking-tighter mb-6 font-sans font-semibold">
                    Sua jornada começa com 
                    <span className="text-white font-sans font-semibold">o parceiro certo.</span>
</h2>
<p className="text-zinc-400 max-w-lg mx-auto mb-10 text-lg font-light font-sans">
                    Pare de procurar em eventos aleatórios. Use dados para encontrar quem realmente compartilha sua visão.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-black px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-zinc-200 transition-colors shadow-lg hover:shadow-white/20 font-sans">
                        Criar Perfil Grátis
                    </button>
<button className="px-8 py-3.5 rounded-lg text-sm font-semibold text-white border border-zinc-700 hover:bg-white/5 hover:border-zinc-500 transition-all font-sans">
                        Ver Demo
                    </button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-6 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-white text-lg font-semibold tracking-tight flex items-center gap-2 mb-6 font-sans" href="#">
<iconify-icon className="text-brand-500" icon="lucide:box"></iconify-icon>
                        Foundrbox
                    </a>
<p className="text-sm text-zinc-500 max-w-xs leading-relaxed font-light font-sans">
                        Acelerando o futuro conectando os melhores fundadores do mundo.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4 font-sans">Produto</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-brand-400 transition-colors font-sans" href="#">Matchmaking</a></li>
<li><a className="hover:text-brand-400 transition-colors font-sans" href="#">Vetting</a></li>
<li><a className="hover:text-brand-400 transition-colors font-sans" href="#">Preços</a></li>
<li><a className="hover:text-brand-400 transition-colors font-sans" href="#">Enterprise</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4 font-sans">Recursos</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-brand-400 transition-colors font-sans" href="#">Blog</a></li>
<li><a className="hover:text-brand-400 transition-colors font-sans" href="#">Calculadora de Equity</a></li>
<li><a className="hover:text-brand-400 transition-colors font-sans" href="#">Modelos de Contrato</a></li>
<li><a className="hover:text-brand-400 transition-colors font-sans" href="#">Comunidade</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4 font-sans">Empresa</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-brand-400 transition-colors font-sans" href="#">Sobre</a></li>
<li><a className="hover:text-brand-400 transition-colors font-sans" href="#">Carreiras</a></li>
<li><a className="hover:text-brand-400 transition-colors font-sans" href="#">Legal</a></li>
<li><a className="hover:text-brand-400 transition-colors font-sans" href="#">Contato</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600 font-sans">© 2024 Foundrbox Inc. Todos os direitos reservados.</p>
<div className="flex gap-6">
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
