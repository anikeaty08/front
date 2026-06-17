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
colors: {
bg: '#0A0A0A',
card: '#161618',
primary: '#2D5BFF', // Royal Blue
gold: '#F59E0B', // Amber/Gold for XP
text: {
main: '#EDEDED',
muted: '#A1A1AA'
}
},
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}

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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-bg/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<span className="text-xl font-semibold tracking-tight text-white group-hover:text-primary transition-colors">ZELO</span>
<span className="iconify text-primary text-xl group-hover:rotate-12 transition-transform" data-icon="lucide:sparkles"></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
<a className="hover:text-white transition-colors" href="#features">Funcionalidades</a>
<a className="hover:text-white transition-colors" href="#alfred">Alfred</a>
<a className="hover:text-white transition-colors" href="#gamification">Recompensas</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-text-muted hover:text-white hidden sm:block" href="#">Login</a>
<a className="text-xs font-semibold bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors" href="#">
                    Baixar App
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 animate-fade-in">
<span className="iconify text-primary text-sm" data-icon="lucide:zap"></span>
<span className="text-xs font-medium text-text-muted uppercase tracking-wider">A nova era da gestão doméstica</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] mb-6">
                A harmonia da sua casa, <br/>
<span className="text-white/40">em um só lugar.</span>

<span className="absolute inline-block animate-float ml-4 -mt-2">
<span className="iconify text-white w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" data-icon="lucide:ghost"></span>
<span className="iconify text-primary absolute -top-2 -right-2 w-6 h-6 animate-pulse" data-icon="lucide:sparkles"></span>
</span>
</h1>
<p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                O ZELO centraliza finanças, tarefas e mercado em uma experiência premium e gamificada. Transforme o caos doméstico em produtividade coletiva.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="primary-gradient px-8 py-4 rounded-full text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-[0_0_40px_-10px_rgba(45,91,255,0.5)] flex items-center gap-2 group">
                    Começar agora — É grátis
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right"></span>
</button>
<button className="px-8 py-4 rounded-full text-text-muted text-sm font-medium hover:text-white hover:bg-white/5 transition-all border border-transparent hover:border-white/10 flex items-center gap-2">
<span className="iconify" data-icon="lucide:play-circle"></span>
                    Ver demonstração
                </button>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-b from-primary/30 to-transparent rounded-[2.5rem] blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
<div className="relative bg-bg border border-white/10 rounded-[2rem] p-2 md:p-4 shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] flex items-end justify-center">

<div className="w-full h-full bg-[#111] rounded-3xl overflow-hidden relative border border-white/5 flex flex-col">

<div className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#161618]">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<div className="text-xs font-medium text-text-muted">Resumo de Hoje</div>
</div>

<div className="flex-1 p-8 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-card rounded-2xl p-6 border border-white/5 relative overflow-hidden">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-primary/10 rounded-lg text-primary"><span className="iconify" data-icon="lucide:wallet"></span></div>
<span className="text-xs text-green-400 font-medium flex items-center gap-1">+12% <span className="iconify" data-icon="lucide:trending-up"></span></span>
</div>
<div className="text-2xl font-semibold mb-1">R$ 4.250,00</div>
<div className="text-xs text-text-muted">Saldo Disponível</div>
</div>

<div className="bg-card rounded-2xl p-6 border border-white/5">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-gold/10 rounded-lg text-gold"><span className="iconify" data-icon="lucide:trophy"></span></div>
</div>
<div className="text-2xl font-semibold mb-1">Nível 5</div>
<div className="w-full bg-white/10 h-1.5 rounded-full mt-2">
<div className="bg-gold w-[70%] h-full rounded-full"></div>
</div>
<div className="text-xs text-text-muted mt-2">Mestre da Casa</div>
</div>

<div className="bg-card rounded-2xl p-6 border border-white/5 flex flex-col justify-center gap-3">
<div className="flex items-center gap-3 text-sm text-text-muted">
<div className="w-4 h-4 rounded border border-white/20"></div>
<span>Pagar conta de luz</span>
</div>
<div className="flex items-center gap-3 text-sm text-text-muted">
<div className="w-4 h-4 rounded border border-primary bg-primary flex items-center justify-center text-white text-[10px]"><span className="iconify" data-icon="lucide:check"></span></div>
<span className="line-through text-white/20">Comprar ração</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Tudo sob controle.</h2>
<p className="text-text-muted">A suíte completa de ferramentas para a gestão moderna.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="glass-card rounded-[32px] p-8 md:col-span-2 relative overflow-hidden group">
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-4">
<span className="iconify w-5 h-5" data-icon="lucide:bar-chart-2"></span>
</div>
<h3 className="text-xl font-semibold mb-2">Finanças Pro</h3>
<p className="text-sm text-text-muted max-w-sm">Projeções futuras e saldo real disponível. Visualize para onde seu dinheiro vai.</p>
</div>

<div className="absolute bottom-6 right-6 md:right-12 opacity-50 group-hover:opacity-100 transition-opacity">
<div className="relative">
<span className="iconify text-white w-24 h-24" data-icon="lucide:ghost"></span>
<span className="iconify text-primary absolute top-4 left-6 w-8 h-8" data-icon="lucide:glasses"></span>
<div className="absolute -right-8 top-0 bg-card border border-white/10 p-3 rounded-lg shadow-xl animate-bounce">
<div className="flex items-end gap-1 h-8">
<div className="w-2 bg-primary/30 h-4 rounded-sm"></div>
<div className="w-2 bg-primary/60 h-6 rounded-sm"></div>
<div className="w-2 bg-primary h-8 rounded-sm"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-[32px] p-8 relative overflow-hidden group">
<div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-500 mb-4">
<span className="iconify w-5 h-5" data-icon="lucide:shopping-cart"></span>
</div>
<h3 className="text-xl font-semibold mb-2">Mercado Smart</h3>
<p className="text-sm text-text-muted mb-6">Lista colaborativa que recompensa quem compra.</p>

<div className="absolute -right-4 -bottom-4 rotate-[-10deg] group-hover:rotate-0 transition-transform duration-500">
<div className="bg-bg border border-white/10 p-4 rounded-xl w-48 shadow-2xl">
<div className="flex items-center gap-3 mb-2 opacity-50">
<div className="w-4 h-4 rounded-full border border-white/30"></div>
<div className="h-2 w-20 bg-white/20 rounded"></div>
</div>
<div className="flex items-center gap-3 mb-2">
<div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center text-white text-[10px]">
<span className="iconify" data-icon="lucide:check"></span>
</div>
<div className="h-2 w-24 bg-white/60 rounded"></div>
</div>
<span className="iconify text-white w-12 h-12 absolute -top-10 -right-2" data-icon="lucide:ghost"></span>
</div>
</div>
</div>

<div className="glass-card rounded-[32px] p-8 relative overflow-hidden group">
<div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold mb-4">
<span className="iconify w-5 h-5" data-icon="lucide:medal"></span>
</div>
<h3 className="text-xl font-semibold mb-2">Tarefas &amp; XP</h3>
<p className="text-sm text-text-muted">Transforme a faxina em um jogo com recompensas reais.</p>
<div className="mt-6 flex items-center gap-2">
<span className="text-2xl font-bold text-gold">+50 XP</span>
<span className="iconify text-gold animate-ping" data-icon="lucide:sparkles"></span>
</div>

<div className="absolute bottom-4 right-4 text-white/10 group-hover:text-gold/20 transition-colors">
<span className="iconify w-24 h-24" data-icon="lucide:trophy"></span>
</div>
</div>

<div className="glass-card rounded-[32px] p-8 md:col-span-2 relative overflow-hidden group">
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-500 mb-4">
<span className="iconify w-5 h-5" data-icon="lucide:shield-check"></span>
</div>
<h3 className="text-xl font-semibold mb-2">Cofre Digital</h3>
<p className="text-sm text-text-muted max-w-sm">Notas fiscais, garantias e documentos importantes organizados automaticamente.</p>
</div>
<div className="absolute top-1/2 -translate-y-1/2 right-12 group-hover:scale-110 transition-transform">
<div className="bg-[#222] border border-white/10 p-4 rounded-lg w-40 rotate-6 shadow-2xl">
<div className="flex justify-between items-center mb-2">
<div className="h-2 w-12 bg-white/20 rounded"></div>
<span className="iconify text-green-400 w-3 h-3" data-icon="lucide:check-circle"></span>
</div>
<div className="h-1 w-full bg-white/5 rounded mb-1"></div>
<div className="h-1 w-2/3 bg-white/5 rounded"></div>
</div>
<span className="iconify text-white w-16 h-16 absolute -bottom-8 -left-8 drop-shadow-lg" data-icon="lucide:ghost"></span>
<span className="iconify text-white w-6 h-6 absolute -bottom-4 -left-2" data-icon="lucide:search"></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative bg-gradient-to-b from-bg to-[#0f0f12]" id="alfred">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

<div className="flex-1 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5">
<span className="iconify text-green-500 text-xs" data-icon="lucide:message-circle"></span>
<span className="text-xs font-medium text-green-500 uppercase tracking-wider">Integração WhatsApp</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Sua casa no seu bolso, <br/>via WhatsApp.</h2>
<p className="text-text-muted text-lg max-w-md">
                    Mande um áudio ou foto de nota fiscal para o <strong>Alfred</strong>. Nossa IA processa tudo e lança no app instantaneamente. Sem digitação manual.
                </p>
<ul className="space-y-4 text-sm text-text-muted">
<li className="flex items-center gap-3">
<span className="bg-white/10 p-1 rounded-full"><span className="iconify w-4 h-4 text-white" data-icon="lucide:mic"></span></span>
                        "Alfred, paguei 50 reais na padaria."
                    </li>
<li className="flex items-center gap-3">
<span className="bg-white/10 p-1 rounded-full"><span className="iconify w-4 h-4 text-white" data-icon="lucide:camera"></span></span>
                        Foto da conta de luz para arquivar.
                    </li>
</ul>
</div>

<div className="flex-1 w-full max-w-md">
<div className="bg-[#121214] border border-white/10 rounded-[2.5rem] p-6 shadow-2xl relative">

<div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center relative">
<span className="iconify text-black w-6 h-6" data-icon="lucide:ghost"></span>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#121214] rounded-full"></div>
</div>
<div>
<div className="text-sm font-semibold text-white">Alfred (ZELO)</div>
<div className="text-xs text-text-muted">Online agora</div>
</div>
</div>

<div className="space-y-6">

<div className="flex justify-end">
<div className="bg-primary/20 text-white p-4 rounded-2xl rounded-tr-sm max-w-[80%] text-sm">
<div className="flex items-center gap-2 mb-2">
<span className="iconify w-4 h-4" data-icon="lucide:mic"></span>
<div className="h-1 bg-white/30 flex-1 rounded-full w-24"></div>
<span className="text-[10px] text-white/50">0:12</span>
</div>
<p>Gastei 50 reais na padaria agora de manhã.</p>
</div>
</div>

<div className="flex items-center gap-2 text-text-muted text-xs ml-4">
<span>Alfred está digitando...</span>
</div>

<div className="flex justify-start">
<div className="bg-[#1C1C1E] border border-white/5 text-white p-4 rounded-2xl rounded-tl-sm max-w-[85%] text-sm shadow-lg">
<p className="mb-2">Gasto de <strong>R$ 50,00</strong> em "Padaria" registrado com sucesso! 🥐</p>
<div className="bg-black/30 p-2 rounded-lg flex items-center gap-3 border border-white/5">
<div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
<span className="iconify w-4 h-4" data-icon="lucide:croissant"></span>
</div>
<div className="flex-1">
<div className="text-xs font-medium">Alimentação</div>
<div className="text-[10px] text-text-muted">Hoje, 09:41</div>
</div>
<div className="text-xs font-semibold">-R$50</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="gamification">
<div className="max-w-5xl mx-auto bg-gradient-to-br from-[#161618] to-black border border-white/5 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<span className="iconify absolute top-10 left-10 text-gold/20 w-8 h-8 animate-pulse" data-icon="lucide:star"></span>
<span className="iconify absolute bottom-10 right-10 text-primary/20 w-12 h-12" data-icon="lucide:star"></span>
</div>
<div className="relative z-10">
<div className="w-20 h-20 mx-auto bg-gradient-to-b from-gold to-orange-600 rounded-full flex items-center justify-center mb-6 shadow-[0_0_50px_-10px_rgba(245,158,11,0.4)]">
<span className="iconify text-white w-10 h-10" data-icon="lucide:crown"></span>
</div>
<h2 className="text-3xl md:text-5xl font-semibold mb-4">O RPG da Vida Real</h2>
<p className="text-text-muted max-w-xl mx-auto mb-10">
                    Ganhe XP por manter a casa em ordem. Troque seus pontos por recompensas reais combinadas com sua família (um jantar, uma folga, um presente).
                </p>

<div className="max-w-md mx-auto bg-[#222] rounded-full h-12 p-1.5 flex items-center relative border border-white/10 mb-4">
<div className="bg-gradient-to-r from-gold to-yellow-300 h-full rounded-full w-[75%] relative flex items-center justify-end px-4 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
<span className="text-[10px] font-bold text-black tracking-widest uppercase">Mestre da Casa</span>
</div>
<div className="absolute right-4 text-xs font-medium text-text-muted">1500 / 2000 XP</div>
</div>

<div className="flex justify-center mt-2">
<div className="inline-flex items-center gap-2 text-xs text-gold">
<span className="iconify" data-icon="lucide:chevrons-up"></span>
                        Zelinho subiu de nível!
                    </div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16 divide-y md:divide-y-0 md:divide-x divide-white/5">
<div>
<div className="text-4xl font-semibold text-white mb-1">10k+</div>
<div className="text-sm text-text-muted">Casas em harmonia</div>
</div>
<div className="pt-8 md:pt-0">
<div className="text-4xl font-semibold text-white mb-1">40min</div>
<div className="text-sm text-text-muted">Economizados por semana</div>
</div>
<div className="pt-8 md:pt-0">
<div className="text-4xl font-semibold text-white mb-1">4.9/5</div>
<div className="text-sm text-text-muted">Avaliação na App Store</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="glass-card p-6 rounded-2xl">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-semibold">M</div>
<div>
<div className="text-sm font-medium text-white">Mariana Costa</div>
<div className="text-xs text-text-muted">Mãe de dois</div>
</div>
</div>
<p className="text-text-muted text-sm leading-relaxed">"O Alfred mudou minha vida. Não preciso mais abrir planilha de Excel no fim do dia. Só mando o áudio e pronto."</p>
</div>
<div className="glass-card p-6 rounded-2xl">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-semibold">R</div>
<div>
<div className="text-sm font-medium text-white">Rafael Santos</div>
<div className="text-xs text-text-muted">Divide AP com amigos</div>
</div>
</div>
<p className="text-text-muted text-sm leading-relaxed">"A gamificação fez com que meus roomates finalmente lavassem a louça sem eu pedir. Vale cada centavo."</p>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-white w-5 h-5" data-icon="lucide:ghost"></span>
<span className="text-lg font-semibold tracking-tight text-white">ZELO</span>
</div>
<div className="flex gap-6 text-sm text-text-muted">
<a className="hover:text-white transition-colors" href="#">Privacidade</a>
<a className="hover:text-white transition-colors" href="#">Termos</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
<div className="text-xs text-text-muted">
                © 2024 Zelo App. Feito com magia.
            </div>
</div>
</footer>

    </>
  );
}
