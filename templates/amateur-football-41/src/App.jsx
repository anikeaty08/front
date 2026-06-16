import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-emerald-500" data-icon="lucide:trophy" data-strokeWidth="1.5" data-width="20"></span>
<span className="font-semibold text-lg tracking-tight text-white">To pra Jogo</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#features">Funcionalidades</a>
<a className="hover:text-white transition-colors" href="#gamification">Gamificação</a>
<a className="hover:text-white transition-colors" href="#b2b">Para Organizadores</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Login</a>
<a className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors tracking-tight" href="#">
                    Criar Pelada
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Nova V1.0 Disponível
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                Sua pelada com gestão de <span className="text-gradient-emerald">clube profissional</span>.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Automatize a lista de presença, receba via Pix e transforme cada partida em uma experiência de videogame com estatísticas e cards de jogadores.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    Começar agora
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="h-12 px-8 rounded-lg border border-zinc-700 hover:bg-zinc-800 text-zinc-300 font-medium text-sm transition-all flex items-center gap-2">
                    Ver demonstração
                </button>
</div>
</div>
</header>

<section className="py-20 border-t border-white/5 bg-zinc-950/50" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl flex flex-col justify-between h-full group">
<div>
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-emerald-500 group-hover:border-emerald-500/30 transition-colors">
<span className="iconify" data-icon="lucide:wallet" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Financeiro Automático</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Integração Pix copia e cola com baixa instantânea. Separe mensalistas de diaristas e gerencie o fundo do churrasco sem planilhas.
                        </p>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
<span>Caixa Atual</span>
<span className="text-emerald-500">+R$ 450,00</span>
</div>
<div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full w-[75%] rounded-full"></div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col justify-between h-full group">
<div>
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-blue-500 group-hover:border-blue-500/30 transition-colors">
<span className="iconify" data-icon="lucide:users" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Lista Inteligente</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Regras de prioridade automáticas. O sistema garante a vaga de mensalistas e ordena a fila de espera. Exporte para o WhatsApp em 1 clique.
                        </p>
</div>
<div className="mt-8 space-y-3">
<div className="flex items-center gap-3 p-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs text-zinc-300">João (Mensalista)</span>
<span className="ml-auto text-xs text-zinc-600 font-mono">CONFIRMADO</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-xs text-zinc-300">Pedro (Diarista)</span>
<span className="ml-auto text-xs text-zinc-600 font-mono">PAGAMENTO OK</span>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col justify-between h-full group">
<div>
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-purple-500 group-hover:border-purple-500/30 transition-colors">
<span className="iconify" data-icon="lucide:scale" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Times Equilibrados</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Algoritmo baseado em posição e <i>Overall</i>. Acabe com as panelinhas e garanta jogos competitivos toda semana.
                        </p>
</div>
<div className="mt-8 flex items-center justify-between px-4 py-3 bg-zinc-900/50 rounded-lg border border-zinc-800">
<div className="text-center">
<div className="text-xs text-zinc-500 mb-1">Time A</div>
<div className="text-lg font-bold text-white">82 <span className="text-[10px] font-normal text-zinc-400">OVR</span></div>
</div>
<span className="text-zinc-600 text-xs">VS</span>
<div className="text-center">
<div className="text-xs text-zinc-500 mb-1">Time B</div>
<div className="text-lg font-bold text-white">81 <span className="text-[10px] font-normal text-zinc-400">OVR</span></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="gamification">

<div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

<div className="flex-1">
<h2 className="text-sm font-semibold text-indigo-400 tracking-wide uppercase mb-3">Modo Carreira</h2>
<h3 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Transforme estatísticas em <span className="text-indigo-400">obsessão</span>.</h3>
<p className="text-zinc-400 mb-8 leading-relaxed max-w-lg">
                    Cada jogador tem seu card. Evolua seu <i>Overall</i> jogando bem, conquiste o MVP ou entre para a Seleção da Pelada. Cuidado para não ser votado como o "Bagre" da rodada.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-zinc-300 text-sm">
<span className="iconify text-emerald-500" data-icon="lucide:check-circle-2"></span>
                        Radar de atributos (Velocidade, Finalização, Passe)
                    </li>
<li className="flex items-center gap-3 text-zinc-300 text-sm">
<span className="iconify text-emerald-500" data-icon="lucide:check-circle-2"></span>
                        Histórico de gols, assistências e Clean Sheets
                    </li>
<li className="flex items-center gap-3 text-zinc-300 text-sm">
<span className="iconify text-emerald-500" data-icon="lucide:check-circle-2"></span>
                        Modo Rivalidade: Compare stats Head-to-Head
                    </li>
</ul>
</div>

<div className="flex-1 flex justify-center relative">

<div className="absolute inset-0 border border-white/5 rounded-full scale-150 opacity-20 animate-pulse"></div>

<div className="relative w-72 bg-gradient-to-b from-zinc-800 to-zinc-950 border border-yellow-600/30 rounded-t-3xl rounded-b-xl shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-500">

<div className="absolute top-0 inset-x-0 h-1/2 bg-[url('https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
<div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-t from-zinc-900 to-transparent"></div>
<div className="relative p-6 flex items-start justify-between">
<div className="flex flex-col items-center">
<span className="text-4xl font-bold text-white tracking-tighter">89</span>
<span className="text-xs font-bold text-zinc-400">ATA</span>
</div>
<div className="w-12 h-12 rounded-full border border-white/20 bg-black/50 flex items-center justify-center">
<span className="iconify text-yellow-500" data-icon="lucide:crown" data-width="20"></span>
</div>
</div>
<div className="relative mt-20 px-6 pb-6">
<div className="text-center mb-6">
<h4 className="text-xl font-bold text-white tracking-tight">Gabriel Jesus</h4>
<p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">To pra Jogo FC</p>
</div>

<div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm">
<div className="flex justify-between items-center border-b border-white/5 pb-1">
<span className="text-zinc-500 font-semibold">VEL</span>
<span className="text-white font-bold">90</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-1">
<span className="text-zinc-500 font-semibold">DRI</span>
<span className="text-white font-bold">88</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-1">
<span className="text-zinc-500 font-semibold">FIN</span>
<span className="text-white font-bold">85</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-1">
<span className="text-zinc-500 font-semibold">DEF</span>
<span className="text-white font-bold">42</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-1">
<span className="text-zinc-500 font-semibold">PAS</span>
<span className="text-white font-bold">82</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-1">
<span className="text-zinc-500 font-semibold">FIS</span>
<span className="text-white font-bold">78</span>
</div>
</div>

<div className="flex gap-2 mt-6 justify-center">
<div className="px-2 py-1 rounded bg-yellow-500/10 border border-yellow-500/20 text-[10px] text-yellow-500 font-bold uppercase tracking-wider">MVP x3</div>
<div className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-500 font-bold uppercase tracking-wider">Artilheiro</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-zinc-900/20" id="b2b">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 tracking-tight">White-label para o Organizador</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">

<div className="glass-panel p-6 rounded-xl">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded bg-green-900/30 text-green-400">
<span className="iconify" data-icon="lucide:message-circle" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white">Integração WhatsApp</h3>
</div>
<p className="text-sm text-zinc-400">
                        Bot automatizado para enviar lembretes e abertura de listas. Exporte a lista confirmada pronta para colar no grupo.
                    </p>
</div>

<div className="glass-panel p-6 rounded-xl">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded bg-pink-900/30 text-pink-400">
<span className="iconify" data-icon="lucide:palette" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white">Sua Marca</h3>
</div>
<p className="text-sm text-zinc-400">
                        Personalize o app com o logo da sua pelada, nome e cores primárias. O Card do jogador reflete a identidade visual do seu grupo.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tighter">
                Pronto para entrar em campo?
            </h2>
<p className="text-zinc-400 mb-10 text-lg">
                Junte-se a centenas de grupos que já profissionalizaram suas peladas. Experimente grátis, sem cartão de crédito.
            </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 placeholder-zinc-600 text-sm transition-all" placeholder="Seu e-mail profissional" type="email"/>
<button className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm whitespace-nowrap" type="submit">
                    Criar conta grátis
                </button>
</form>
<p className="mt-6 text-xs text-zinc-600">
                Latência mínima <span className="text-zinc-500">•</span> Segurança bancária <span className="text-zinc-500">•</span> Mobile First
            </p>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-zinc-600" data-icon="lucide:trophy" data-width="16"></span>
<span className="text-sm font-medium text-zinc-500">To pra Jogo © 2024</span>
</div>
<div className="flex gap-6 text-sm text-zinc-600">
<a className="hover:text-zinc-300 transition-colors" href="#">Termos</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Privacidade</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Contato</a>
</div>
<div className="flex gap-4">
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="18"></span>
</a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
</div>
</div>
</footer>

    </>
  );
}
