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
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
slate: {
950: '#020617', // Deep background
900: '#0f172a',
800: '#1e293b',
},
emerald: {
400: '#34d399',
500: '#10b981', // Primary Accent
900: '#064e3b',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2">
<svg className="text-emerald-400 w-6 h-6 fill-current" data-lucide="spade" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18v4"></path><path d="M2 14.499a5.5 5.5 0 0 0 9.591 3.675.6.6 0 0 1 .818.001A5.5 5.5 0 0 0 22 14.5c0-2.29-1.5-4-3-5.5l-5.492-5.312a2 2 0 0 0-3-.02L5 8.999c-1.5 1.5-3 3.2-3 5.5"></path></svg>
<span className="font-display font-semibold text-xl tracking-tight text-white">PokerPilot</span>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#features">Como funciona</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#pricing">Preços</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#faq">Dúvidas</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">
                    Acessar minha conta
                </a>
<a className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]" href="https://calendly.com/pokerpilot/demo" target="_blank">
                    Agendar demonstração
                </a>
</div>

<button className="md:hidden text-slate-300">
<svg className="w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</header>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10"></div>
<div className="absolute inset-0 bg-grid-pattern -z-20 opacity-30"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-white">
                    A solução profissional (e simples) para gerenciar seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">time de poker.</span>
</h1>
<p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                    Centralize tarefas, anotações sobre as mentorias dos jogadores de mentoria, relatórios e alertas inteligentes em um só painel para reduzir em até 30% o tempo de gestão do seu time de poker, com suporte 100% nacional.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-8 py-4 rounded-full transition-all text-base shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]" href="https://calendly.com/pokerpilot/demo" target="_blank">
                        Agendar demonstração
                        <svg className="w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="relative group">
<div className="relative bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl pointer-events-none"></div>

<div className="bg-slate-950 rounded-t-xl p-4 flex items-center gap-4 border-b border-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<div className="h-2 w-32 bg-slate-800 rounded-full"></div>
</div>

<div className="bg-slate-950 rounded-b-xl p-6 min-h-[300px] grid grid-cols-3 gap-4">

<div className="col-span-1 space-y-3 border-r border-white/5 pr-4">
<div className="h-8 w-full bg-emerald-500/20 rounded md:rounded-lg mb-6"></div>
<div className="h-4 w-3/4 bg-slate-800 rounded"></div>
<div className="h-4 w-full bg-slate-800 rounded"></div>
<div className="h-4 w-5/6 bg-slate-800 rounded"></div>
</div>

<div className="col-span-2 space-y-4">
<div className="flex justify-between">
<div className="h-6 w-1/3 bg-slate-700 rounded"></div>
<div className="h-6 w-1/4 bg-emerald-500/10 text-emerald-500 text-xs flex items-center justify-center rounded border border-emerald-500/20">Active</div>
</div>

<div className="h-32 w-full bg-slate-900 border border-white/5 rounded-lg flex items-end gap-1 p-2 pb-0 justify-between">
<div className="w-full bg-emerald-500/20 rounded-t h-[40%]"></div>
<div className="w-full bg-emerald-500/40 rounded-t h-[70%]"></div>
<div className="w-full bg-emerald-500/30 rounded-t h-[50%]"></div>
<div className="w-full bg-emerald-500/60 rounded-t h-[85%]"></div>
<div className="w-full bg-emerald-500/80 rounded-t h-[60%]"></div>
</div>
<div className="space-y-2">
<div className="h-10 w-full bg-slate-900 border border-white/5 rounded flex items-center px-3">
<div className="h-2 w-1/2 bg-slate-800 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="">
<h2 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                        Sente que a gestão do seu time pode ser mais otimizada?
                        <span className="block text-slate-400 text-2xl mt-2 font-normal">Maiores lucros, menos tempo na gestão?</span>
</h2>
<a className="hidden lg:inline-flex items-center gap-2 text-emerald-400 font-medium hover:text-emerald-300 transition-colors" href="https://calendly.com/pokerpilot/demo" target="_blank">
                        Quero ver o PokerPilot na prática <svg className="w-4 h-4" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</a>
</div>

<div className="space-y-8">

<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
<svg className="w-5 h-5" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
</div>
</div>
<div>
<p className="text-slate-300 text-lg">Falta uma visão realmente intuitiva de tarefas, evolução dos jogadores e alertas do que está saindo do eixo.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
<svg className="w-5 h-5" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
</div>
<div>
<p className="text-slate-300 text-lg">Os relatórios do sistema que você usa hoje não são tão claros e completos quanto você precisa, então muita decisão ainda sai “no feeling”.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
<svg className="w-5 h-5" data-lucide="file-spreadsheet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M8 13h2"></path><path d="M14 13h2"></path><path d="M8 17h2"></path><path d="M14 17h2"></path></svg>
</div>
</div>
<div>
<p className="text-slate-300 text-lg">Você continua dependendo de planilhas, anotações soltas e grupos de WhatsApp e Discord para fechar todas as pontas da operação.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
<svg className="w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
</div>
<div>
<p className="text-slate-300 text-lg">Falta um suporte nacional, rápido e humanizado para te ajudar a decidir com segurança. Uma consultoria que vai de encontro ao que você precisa para elevar sua gestão, centralizá-la em um só local, de forma eficiente e intuitiva.</p>
</div>
</div>
</div>
<div className="lg:hidden mt-6">
<a className="w-full justify-center inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-colors" href="https://calendly.com/pokerpilot/demo" target="_blank">
                        Quero ver o PokerPilot na prática
                    </a>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="features">
<div className="text-center mb-16">
<h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
                Veja como o PokerPilot <br className="hidden md:block"/> otimiza sua gestão na prática
            </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-4 h-auto md:h-[800px]">

<div className="md:col-span-2 md:row-span-2 glass glass-hover rounded-3xl p-8 relative overflow-hidden group">
<div className="relative z-10 flex flex-col h-full">
<div className="mb-4">
<div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
<svg className="w-5 h-5" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<h3 className="font-display text-2xl font-semibold text-white">Tarefas do time sob controle</h3>
<p className="text-slate-400 mt-2 max-w-sm">Painel de tarefas para você e sua equipe não esquecerem nenhuma ação importante de gestão, pagamento ou acompanhamento. Gestão eficiente e centralizada.</p>
</div>

<div className="flex-1 w-full bg-slate-950/50 border border-white/5 rounded-t-xl mt-4 p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
<div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
<span className="text-xs font-semibold text-slate-500 uppercase">To Do</span>
<span className="text-xs text-slate-500">3 pendentes</span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg border border-white/5">
<div className="w-4 h-4 rounded border border-emerald-500/50"></div>
<div className="h-2 w-32 bg-slate-700 rounded-full"></div>
<div className="ml-auto w-6 h-6 rounded-full bg-slate-800"></div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-2 glass glass-hover rounded-3xl p-6 flex flex-col">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
<svg className="w-5 h-5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<h3 className="font-display text-xl font-semibold text-white">Histórico das mentorias sempre à mão</h3>
<p className="text-slate-400 mt-2 text-sm flex-grow">Notes individuais por jogador, registrando o que foi alinhado em cada sessão para acompanhar evolução e próximos passos.</p>
<div className="mt-4 bg-slate-950/50 p-3 rounded-lg border border-white/5 text-xs text-slate-500 font-mono">
                    &gt; Note: Revisão de spots...
                </div>
</div>

<div className="md:col-span-1 glass glass-hover rounded-3xl p-6">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
<svg className="w-5 h-5" data-lucide="bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg>
</div>
<h3 className="font-display text-lg font-semibold text-white">Relatórios claros em poucos cliques</h3>
<p className="text-slate-400 mt-1 text-sm">Visão intuitiva de desempenho do time e dos jogadores, crescimento ao longo do tempo e onde estão os principais resultados.</p>
</div>

<div className="md:col-span-1 glass glass-hover rounded-3xl p-6 bg-gradient-to-br from-white/5 to-red-500/5">
<div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 mb-4">
<svg className="w-5 h-5" data-lucide="bell-ring" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M22 8c0-2.3-.8-4.3-2-6"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path><path d="M4 2C2.8 3.7 2 5.7 2 8"></path></svg>
</div>
<h3 className="font-display text-lg font-semibold text-white">Alertas inteligentes do que exige atenção</h3>
<p className="text-slate-400 mt-1 text-sm">Defina parâmetros de saúde do time (como nível de caixa) e receba avisos quando algo sair do que você considera ideal.</p>
</div>

<div className="md:col-span-1 glass glass-hover rounded-3xl p-6">
<div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
<svg className="w-5 h-5" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
</div>
<h3 className="font-display text-lg font-semibold text-white">Gestão também para o próprio jogador</h3>
<p className="text-slate-400 mt-1 text-sm">Ferramentas para o jogador acompanhar o próprio desempenho e enxergar gargalos, alinhando performance com as metas do time.</p>
</div>

<div className="md:col-span-3 glass glass-hover rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
<div className="w-12 h-12 flex-shrink-0 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<svg className="w-6 h-6" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<div className="">
<h3 className="font-display text-xl font-semibold text-white">Suporte 100% nacional</h3>
<p className="text-slate-400 mt-2 max-w-2xl">Atendimento rápido via WhatsApp e e‑mail, em português, para tirar dúvidas de gestão e uso da plataforma sempre que precisar.</p>
</div>
</div>
</div>
<div className="mt-12 text-center space-y-4">
<p className="text-slate-400 text-lg">Tudo isso em um layout simples e intuitivo, pensado para reduzir sua carga operacional e facilitar o dia a dia da gestão do time.</p>
<a className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-slate-200 font-semibold px-8 py-3 rounded-full transition-colors" href="https://calendly.com/pokerpilot/demo" target="_blank">
                Quero testar essas funcionalidades na demo
                <svg className="w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

<section className="py-24 bg-slate-900 border-y border-white/5 relative">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
                    Migrar de plataforma não precisa ser um <span className="text-emerald-400">all‑in arriscado</span>
</h2>
<p className="text-lg text-slate-400">Com a PokerPilot, a troca de plataforma é apenas um detalhe: nossa equipe cuida da migração dos dados, conduz o treinamento e permanece ao seu lado no suporte, para que você só se preocupe em aproveitar uma gestão mais organizada e eficiente.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0"></div>

<div className="relative pt-6 md:pt-0 text-center md:text-left">
<div className="md:absolute top-0 left-0 -translate-y-1/2 w-16 h-16 mx-auto md:mx-0 bg-slate-900 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 z-10 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
<svg className="w-6 h-6" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<div className="md:pt-12">
<h4 className="text-white font-semibold text-lg mb-2 mt-4 md:mt-0">Migração feita pelo time da PokerPilot</h4>
<p className="text-slate-400 text-sm">Toda a importação de dados e históricos é feita por um profissional dedicado, de forma rápida e segura, sem você ter que “começar do zero” na mão.</p>
</div>
</div>

<div className="relative pt-6 md:pt-0 text-center md:text-left">
<div className="md:absolute -translate-y-1/2 md:mx-0 flex z-10 text-emerald-400 bg-slate-900 w-16 h-16 border-emerald-500/30 border rounded-full mr-auto ml-auto top-0 left-0 shadow-[0_0_15px_rgba(16,185,129,0.1)] items-center justify-center">
<svg className="w-6 h-6" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<div className="md:pt-12">
<h4 className="text-white font-semibold text-lg mb-2 mt-4 md:mt-0">Onboarding guiado para você e sua equipe</h4>
<p className="text-slate-400 text-sm">O mesmo especialista que cuida da migração também conduz o treinamento, mostrando passo a passo como usar a plataforma no dia a dia.</p>
</div>
</div>

<div className="relative pt-6 md:pt-0 text-center md:text-left">
<div className="md:absolute top-0 left-0 -translate-y-1/2 w-16 h-16 mx-auto md:mx-0 bg-slate-900 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 z-10 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
<svg className="w-6 h-6" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</div>
<div className="md:pt-12">
<h4 className="text-white font-semibold text-lg mb-2 mt-4 md:mt-0">Suporte em português sempre que precisar</h4>
<p className="text-slate-400 text-sm">Depois da implantação, você continua com suporte próximo via WhatsApp e e‑mail, em português, para tirar qualquer dúvida de gestão ou uso.</p>
</div>
</div>

<div className="relative pt-6 md:pt-0 text-center md:text-left">
<div className="md:absolute top-0 left-0 -translate-y-1/2 w-16 h-16 mx-auto md:mx-0 bg-slate-900 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 z-10 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
<svg className="w-6 h-6" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<div className="md:pt-12">
<h4 className="text-white font-semibold text-lg mb-2 mt-4 md:mt-0">Adaptação rápida para times que já usam software</h4>
<p className="text-slate-400 text-sm">A estrutura foi pensada para quem já tem operação rodando: a sensação é de “upgrade de sistema”, não de recomeço do zero.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<h2 className="font-display text-3xl md:text-4xl font-semibold text-white text-center mb-4 tracking-tight">
            Veja o que outros times tem a dizer após migrar para a PokerPilot
        </h2>
<p className="text-center text-slate-400 mb-16">Times que já fizeram o upgrade de gestão contam como foi a experiência.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass p-8 rounded-2xl flex flex-col">
<div className="flex items-center gap-1 text-emerald-400 mb-4">
<svg className="w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-300 mb-6 flex-grow italic">“A migração foi muito mais simples do que eu imaginava. Em poucos dias já estávamos com tudo rodando na PokerPilot sem perder histórico nenhum.”</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-400">T1</div>
</div>
</div>

<div className="glass p-8 rounded-2xl flex flex-col border-emerald-500/20">
<div className="flex items-center gap-1 text-emerald-400 mb-4">
<svg className="w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-300 mb-6 flex-grow italic">“Hoje consigo ver em minutos o que antes levava horas de planilha: desempenho do time, caixa e pontos de atenção.”</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-400">T2</div>
</div>
</div>

<div className="glass p-8 rounded-2xl flex flex-col">
<div className="flex items-center gap-1 text-emerald-400 mb-4">
<svg className="w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-300 mb-6 flex-grow italic">“O time de suporte é rápido e fala a nossa língua. Qualquer dúvida na adaptação foi resolvida direto pelo WhatsApp.”</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-400">T3</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 border-y border-white/5" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-display text-3xl md:text-4xl font-semibold text-white text-center mb-16 tracking-tight">
                Quanto custa dar esse <span className="text-emerald-400">upgrade</span> na gestão do seu time?
            </h2>
<div className="grid lg:grid-cols-2 gap-12 items-start">

<div className="space-y-8">
<div className="space-y-4">
<h3 className="text-2xl font-semibold text-white">Modelo de cobrança simplificado</h3>
<p className="text-slate-400 text-lg leading-relaxed">
                            Você paga uma mensalidade em dólar por jogador ativo no time. À medida que o número de jogadores cresce, o valor por jogador fica mais barato.
                        </p>
</div>
<div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
<h3 className="text-xl font-semibold text-white mb-3">Consultoria personalizada</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                            Você também conta com uma consultoria feita sob medida para iniciar ou aperfeiçoar o seu time de poker, unindo visão jurídica, contábil e de gestão eficiente para sustentar um crescimento sólido e consistente. Todos os profissionais envolvidos são especializados no mercado de poker. A consultoria jurídica e de gestão poderá ser contratada à parte por dentro da plataforma.
                        </p>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3 rounded-full transition-colors" href="https://calendly.com/pokerpilot/demo" target="_blank">
                            Quero fazer um upgrade da gestão do meu time
                            <svg className="w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</a>
</div>
</div>

<div className="bg-slate-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
<div className="px-6 py-4 bg-slate-900 border-b border-white/5 flex justify-between items-center">
<span className="text-sm font-medium text-slate-400">Tamanho do Time</span>
<span className="text-sm font-medium text-slate-400">Valor Mensal (USD)</span>
</div>
<div className="divide-y divide-white/5">
<div className="px-6 py-4 flex justify-between items-center hover:bg-white/5 transition-colors">
<span className="text-white font-medium">1 a 10 jogadores</span>
<span className="text-emerald-400 font-mono font-semibold">$11,85 <span className="text-slate-500 text-xs font-sans">/jogador</span></span>
</div>
<div className="px-6 py-4 flex justify-between items-center hover:bg-white/5 transition-colors">
<span className="text-white font-medium">11 a 30 jogadores</span>
<span className="text-emerald-400 font-mono font-semibold">$8,50 <span className="text-slate-500 text-xs font-sans">/jogador</span></span>
</div>
<div className="px-6 py-4 flex justify-between items-center hover:bg-white/5 transition-colors bg-white/5 border-l-2 border-emerald-500">
<span className="text-white font-medium">31 a 100 jogadores</span>
<span className="text-emerald-400 font-mono font-semibold">$4,25 <span className="text-slate-500 text-xs font-sans">/jogador</span></span>
</div>
<div className="px-6 py-4 flex justify-between items-center hover:bg-white/5 transition-colors">
<span className="text-white font-medium">101 a 300 jogadores</span>
<span className="text-emerald-400 font-mono font-semibold">$2,35 <span className="text-slate-500 text-xs font-sans">/jogador</span></span>
</div>
<div className="px-6 py-4 flex justify-between items-center hover:bg-white/5 transition-colors">
<span className="text-white font-medium">301 a 800 jogadores</span>
<span className="text-emerald-400 font-mono font-semibold">$1,95 <span className="text-slate-500 text-xs font-sans">/jogador</span></span>
</div>
<div className="px-6 py-4 flex justify-between items-center hover:bg-white/5 transition-colors">
<span className="text-white font-medium">Acima de 800 jogadores</span>
<span className="text-white font-medium text-sm">Valor sob consulta</span>
</div>
</div>
<div className="p-4 bg-slate-900/50 text-center border-t border-white/5">
<p className="text-slate-400 text-xs italic">
                            Em média, os times pagam cerca de 15% menos do que em outras plataformas de gestão, com mais recursos incluídos
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-b border-white/5 bg-slate-950">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-10 max-w-3xl mx-auto">
<h2 className="font-display text-2xl font-semibold text-white mb-4">Segurança de dados à altura do seu time</h2>
<p className="text-slate-400">A PokerPilot foi desenhada para que você gerencie resultados, caixa e informações sensíveis com tranquilidade, seguindo as exigências da LGPD e boas práticas modernas de proteção de dados.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 justify-center">

<div className="flex items-center gap-3 justify-center md:justify-start">
<svg className="w-8 h-8 text-emerald-500" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div className="text-left">
<div className="text-white font-medium">Conformidade com LGPD</div>
<div className="text-slate-500 text-xs">Tratamento de dados pessoais alinhado à legislação brasileira, com apoio jurídico especializado no mercado de poker.</div>
</div>
</div>

<div className="flex items-center gap-3 justify-center md:justify-start">
<svg className="w-8 h-8 text-emerald-500" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<div className="text-left">
<div className="text-white font-medium">Infraestrutura segura</div>
<div className="text-slate-500 text-xs">Armazenamento em ambiente com padrões atuais de segurança, controle de acesso por usuário e backups regulares.</div>
</div>
</div>

<div className="flex items-center gap-3 justify-center md:justify-start">
<svg className="w-8 h-8 text-emerald-500" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<div className="text-left">
<div className="text-white font-medium">Transparência e controle</div>
<div className="text-slate-500 text-xs">Foco em relatórios e alertas para gestão, mantendo seus dados sob controle e acessíveis apenas para quem você autorizar.</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6" id="faq">
<h2 className="font-display text-3xl md:text-4xl font-semibold text-white text-center mb-12 tracking-tight">
            Dúvidas frequentes sobre a PokerPilot
        </h2>
<div className="space-y-4">

<details className="group glass rounded-xl">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:text-emerald-400 transition-colors">
                    Posso migrar da plataforma que já utilizo para a PokerPilot?
                    <svg className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                    Sim. A PokerPilot faz toda a migração do seu time de forma rápida e segura, com treinamento para explicar o funcionamento da plataforma e suporte humanizado para tirar dúvidas ao longo do processo.
                </div>
</details>

<details className="group glass rounded-xl">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:text-emerald-400 transition-colors">
                    Qual é o diferencial da PokerPilot na gestão do meu time?
                    <svg className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                    A plataforma eleva o nível de gestão com relatórios mais completos e intuitivos, alertas inteligentes e mais organização dos processos operacionais, tratando seu time como uma empresa que precisa seguir métricas para crescer de forma sólida.
                </div>
</details>

<details className="group glass rounded-xl">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:text-emerald-400 transition-colors">
                    Como funciona o suporte?
                    <svg className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                    Você conta com suporte via WhatsApp e e‑mail, em português, com atendimento rápido e humanizado para resolver as principais dúvidas e demandas do dia a dia.
                </div>
</details>

<details className="group glass rounded-xl">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:text-emerald-400 transition-colors">
                    E se eu estiver começando meu time agora e não souber por onde começar?
                    <svg className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                    A PokerPilot oferece consultoria personalizada para ajudar a traçar os próximos passos, incluindo parte jurídica, contábil e gestão eficiente, com profissionais especializados em poker, para que o time cresça de forma sólida e consistente.
                </div>
</details>
</div>

<div className="mt-20 text-center bg-gradient-to-b from-white/5 to-transparent p-10 rounded-3xl border border-white/5">
<h3 className="font-display text-2xl font-semibold text-white mb-2">Ainda ficou com alguma dúvida?</h3>
<p className="text-slate-400 mb-8">Agende uma demonstração gratuita com o nosso time e tire todas as dúvidas enquanto vê a PokerPilot rodando na prática.</p>
<a className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-8 py-4 rounded-full transition-all text-lg shadow-[0_0_20px_rgba(16,185,129,0.3)]" href="https://calendly.com/pokerpilot/demo" target="_blank">
                Agendar demonstração gratuita
            </a>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="space-y-4">
<div className="flex items-center gap-2">
<svg className="text-emerald-400 w-6 h-6 fill-current" data-lucide="spade" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18v4"></path><path d="M2 14.499a5.5 5.5 0 0 0 9.591 3.675.6.6 0 0 1 .818.001A5.5 5.5 0 0 0 22 14.5c0-2.29-1.5-4-3-5.5l-5.492-5.312a2 2 0 0 0-3-.02L5 8.999c-1.5 1.5-3 3.2-3 5.5"></path></svg>
<span className="font-display font-semibold text-xl tracking-tight text-white">PokerPilot</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed">
                        Plataforma de gestão profissional para times de poker que querem clareza, eficiência e suporte 100% nacional.
                    </p>
</div>

<div>
<h4 className="text-white font-semibold mb-4">Menu de navegação</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-emerald-400 transition-colors" href="#features">Como funciona</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#pricing">Preços</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#faq">Dúvidas</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Fale com o suporte</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-4">Recursos e confiança</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Termos de uso</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Política de privacidade (LGPD)</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Segurança e conformidade</a></li>
<li className="pt-2 flex gap-2">
<span className="text-xs text-emerald-500 border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 rounded">LGPD Ready</span>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-4">Contato e social</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li className="flex items-center gap-2">
<svg className="w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> E‑mail comercial
                        </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> WhatsApp de atendimento
                        </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg> Endereço
                        </li>
<li className="flex gap-4 pt-2">
<a className="text-slate-500 hover:text-white" href="#"><svg className="w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-slate-500 hover:text-white" href="#"><svg className="w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-slate-500 hover:text-white" href="#"><svg className="w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
<p>© 2025 PokerPilot. Todos os direitos reservados.</p>
<p className="mt-2 md:mt-0">Construído por quem e para quem vive o mercado de times de poker.</p>
</div>
</div>
</footer>



    </>
  );
}
