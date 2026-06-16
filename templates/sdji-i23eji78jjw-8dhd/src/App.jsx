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
},
colors: {
primary: '#0070F3', // Vercel Blue-ish
accent: '#79FFE1', // Cyan accent
dark: '#0A0A0A',
card: '#111111',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-dark/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">
<iconify-icon className="text-cyan-400" icon="lucide:fish" strokeWidth="1.5" width="20"></iconify-icon>
                @projetosardinha
            </a>
<a className="hidden md:block text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#produtos">Produtos</a>
<a className="bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-4 py-2 rounded-full border border-white/10 transition-all flex items-center gap-2" href="https://wa.me/">
                Falar no WhatsApp
                <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 opacity-50"></div>
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-medium mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                Vagas abertas para Copy Trade
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                Resultados de Baleia,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-600">acessíveis para Sardinhas.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Automatize seus ganhos no mercado cripto. Copie as operações dos maiores especialistas em tempo real, sem precisar ficar na frente da tela.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group relative px-8 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-slate-200 transition-all w-full sm:w-auto flex items-center justify-center gap-2" href="https://wa.me/">
                    Começar Agora
                    <iconify-icon icon="lucide:message-circle" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="px-8 py-3 text-slate-300 hover:text-white rounded-full font-medium text-sm transition-all flex items-center gap-2" href="#como-funciona">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="16"></iconify-icon>
                    Ver resultados
                </a>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto px-6">
<div className="relative rounded-xl border border-white/10 bg-card/50 backdrop-blur-sm aspect-[16/9] md:aspect-[21/9] overflow-hidden flex items-center justify-center group">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark z-10"></div>

<svg className="w-full h-full opacity-30 group-hover:opacity-50 transition-opacity duration-700" preserveaspectratio="none" viewbox="0 0 1000 400">
<path d="M0,350 Q250,300 400,150 T800,100 T1000,50" fill="none" stroke="#22d3ee" strokeWidth="2"></path>
<path className="opacity-50" d="M0,380 Q300,350 500,200 T900,150 T1000,100" fill="none" stroke="#0ea5e9" strokeWidth="2"></path>
</svg>
<div className="absolute z-20 text-center">
<div className="text-5xl font-semibold text-white tracking-tight mb-2">+324%</div>
<div className="text-sm text-cyan-400 font-medium tracking-wide uppercase">Rentabilidade acumulada</div>
</div>
</div>
</div>
</header>

<div className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1">2.5k+</div>
<div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Sardinhas Ativas</div>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1">92%</div>
<div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Taxa de Acerto</div>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1">R$ 5M+</div>
<div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Volume Operado</div>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1">24/7</div>
<div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Suporte Ativo</div>
</div>
</div>
</div>

<section className="py-24 max-w-7xl mx-auto px-6" id="produtos">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Ecossistema Sardinha</h2>
<p className="text-slate-500 max-w-xl">Ferramentas e conhecimento para você deixar de ser liquidez e começar a surfar as ondas do mercado.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="relative group p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 md:col-span-2 row-span-2 flex flex-col justify-between">
<div className="absolute top-4 right-4 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider">
                    Destaque
                </div>
<div>
<div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Copy Trade Automático</h3>
<p className="text-slate-400 mb-6 leading-relaxed">
                        Conecte sua conta e replique nossas operações instantaneamente. Sem configuração complexa, sem necessidade de analisar gráficos o dia todo. Lucro passivo na sua conta.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-cyan-500" icon="lucide:check"></iconify-icon> Setup em 5 minutos
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-cyan-500" icon="lucide:check"></iconify-icon> Controle total do seu capital
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-cyan-500" icon="lucide:check"></iconify-icon> Histórico transparente
                        </li>
</ul>
</div>
<button className="w-full py-3 rounded-lg bg-white text-black font-medium text-sm hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                    Garantir Vaga
                    <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>

<div className="p-6 rounded-2xl bg-card border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between h-full">
<div>
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="inline-block mb-3 px-2 py-0.5 rounded text-[10px] font-semibold bg-white/5 text-slate-400 uppercase tracking-wider">Vagas Limitadas</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Bunker 21 VIP</h3>
<p className="text-sm text-slate-500 mb-4">Acesso exclusivo ao nosso grupo de sinais e networking de alto nível.</p>
</div>
<a className="text-sm text-white font-medium hover:text-purple-400 transition-colors flex items-center gap-2" href="#">
                    Saiba mais <iconify-icon icon="lucide:chevron-right" width="14"></iconify-icon>
</a>
</div>

<div className="p-6 rounded-2xl bg-card border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between h-full">
<div>
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
<iconify-icon icon="lucide:graduation-cap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="inline-block mb-3 px-2 py-0.5 rounded text-[10px] font-semibold bg-white/5 text-slate-400 uppercase tracking-wider">Lista de Espera</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Mentoria 1:1</h3>
<p className="text-sm text-slate-500 mb-4">Acompanhamento individual para quem quer se tornar um trader profissional.</p>
</div>
<a className="text-sm text-white font-medium hover:text-emerald-400 transition-colors flex items-center gap-2" href="#">
                    Aplicar agora <iconify-icon icon="lucide:chevron-right" width="14"></iconify-icon>
</a>
</div>

<div className="md:col-span-2 lg:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-[#FF0000]/10 to-transparent border border-white/5 hover:border-[#FF0000]/30 transition-all duration-300 flex items-center justify-between group cursor-pointer">
<div>
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-red-500" icon="lucide:youtube" width="20"></iconify-icon>
<span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Conteúdo Gratuito</span>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-1">Canal do YouTube</h3>
<p className="text-sm text-slate-500">Análises semanais e tutoriais para iniciantes.</p>
</div>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-all text-slate-400">
<iconify-icon icon="lucide:external-link" width="18"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02] border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Por que escolher o <br/>Projeto Sardinha?</h2>
<p className="text-slate-400 mb-8 leading-relaxed">
                        No oceano das criptomoedas, sardinhas isoladas são comidas por baleias. Juntos, formamos um cardume organizado, rápido e lucrativo. Nossa tecnologia nivela o jogo.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
<iconify-icon icon="lucide:bot" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">100% Automatizado</h4>
<p className="text-sm text-slate-500">Elimine o fator emocional. O robô executa a estratégia friamente, 24 horas por dia.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
<iconify-icon icon="lucide:shield-check" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Segurança de Capital</h4>
<p className="text-sm text-slate-500">Seu dinheiro fica na sua corretora (Binance/Bybit). Nós apenas enviamos os sinais via API.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
<iconify-icon icon="lucide:globe" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Comunidade Ativa</h4>
<p className="text-sm text-slate-500">Não opere sozinho. Troque experiências com milhares de outros investidores no Discord.</p>
</div>
</div>
</div>
</div>
<div className="relative">

<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-2xl blur-3xl -z-10"></div>
<div className="bg-card border border-white/10 rounded-2xl p-8 shadow-2xl">
<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
<div className="text-sm font-medium text-slate-400">Últimas Operações</div>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-red-500/20"></span>
<span className="w-2 h-2 rounded-full bg-yellow-500/20"></span>
<span className="w-2 h-2 rounded-full bg-green-500"></span>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between text-sm p-3 rounded bg-white/5 border border-white/5">
<div className="flex items-center gap-3">
<span className="text-green-400 font-bold text-xs bg-green-400/10 px-2 py-0.5 rounded">LONG</span>
<span className="text-white font-medium">BTC/USDT</span>
</div>
<span className="text-green-400 font-medium">+12.4%</span>
</div>
<div className="flex items-center justify-between text-sm p-3 rounded bg-white/5 border border-white/5">
<div className="flex items-center gap-3">
<span className="text-red-400 font-bold text-xs bg-red-400/10 px-2 py-0.5 rounded">SHORT</span>
<span className="text-white font-medium">ETH/USDT</span>
</div>
<span className="text-green-400 font-medium">+8.2%</span>
</div>
<div className="flex items-center justify-between text-sm p-3 rounded bg-white/5 border border-white/5">
<div className="flex items-center gap-3">
<span className="text-green-400 font-bold text-xs bg-green-400/10 px-2 py-0.5 rounded">LONG</span>
<span className="text-white font-medium">SOL/USDT</span>
</div>
<span className="text-green-400 font-medium">+5.7%</span>
</div>
</div>
<div className="mt-6 pt-4 border-t border-white/5 text-center">
<p className="text-xs text-slate-500">Dados atualizados em tempo real via API</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">O que dizem as Sardinhas</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-6 rounded-xl bg-card border border-white/5">
<div className="flex gap-1 text-yellow-500 mb-4 text-xs">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
<p className="text-slate-300 text-sm mb-6 leading-relaxed">"Nunca imaginei que conseguiria ter consistência no day trade. O copy trade do Projeto Sardinha mudou minha visão de mercado."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<div className="text-white text-sm font-medium">Carlos Mendes</div>
<div className="text-slate-500 text-xs">Membro desde 2022</div>
</div>
</div>
</div>
<div className="p-6 rounded-xl bg-card border border-white/5">
<div className="flex gap-1 text-yellow-500 mb-4 text-xs">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
<p className="text-slate-300 text-sm mb-6 leading-relaxed">"O suporte no Discord é surreal. Não é só sobre ganhar dinheiro, é sobre aprender e estar num ambiente vencedor."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<div className="text-white text-sm font-medium">Ana Souza</div>
<div className="text-slate-500 text-xs">Aluna Mentoria</div>
</div>
</div>
</div>
<div className="p-6 rounded-xl bg-card border border-white/5">
<div className="flex gap-1 text-yellow-500 mb-4 text-xs">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
<p className="text-slate-300 text-sm mb-6 leading-relaxed">"Comecei com pouco capital e a transparência do projeto me deu confiança. Resultados reais, sem promessas falsas."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<div className="text-white text-sm font-medium">Felipe R.</div>
<div className="text-slate-500 text-xs">Copy Trader</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02] border-y border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-8">A Filosofia Sardinha</h2>
<div className="prose prose-invert prose-lg mx-auto text-slate-400">
<p className="mb-6">
                    No mercado financeiro, as "Baleias" são as grandes instituições que movimentam bilhões e manipulam o preço. Nós, pequenos investidores, somos as "Sardinhas".
                </p>
<p className="mb-6">
                    A maioria das sardinhas tenta lutar contra as baleias e acaba sendo engolida. O <strong>Projeto Sardinha</strong> nasceu para mudar essa lógica. Nossa missão é empoderar o pequeno investidor com ferramentas institucionais.
                </p>
<p>
                    Não nadamos contra a corrente. Identificamos para onde as baleias estão indo e pegamos carona no movimento. Juntos, somos invencíveis.
                </p>
</div>
<div className="mt-12 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-8">
<div className="text-left">
<div className="text-white font-medium">Fundador</div>
<div className="text-sm text-slate-500">Trader ex-institucional com 8 anos de mercado</div>
</div>
<div className="h-12 w-[1px] bg-white/10 hidden md:block"></div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="24"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="24"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-10 text-center">Perguntas Frequentes</h2>
<div className="space-y-4">
<details className="group bg-card border border-white/5 rounded-lg open:border-white/10 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white hover:bg-white/5 rounded-lg transition-colors">
                    Como funciona o Copy Trade?
                    <span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                    Através de uma chave API segura, nosso sistema replica as operações da nossa conta mestre diretamente na sua conta. Você mantém a custódia do seu dinheiro o tempo todo. Nós não temos permissão de saque, apenas de operação.
                </div>
</details>
<details className="group bg-card border border-white/5 rounded-lg open:border-white/10 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white hover:bg-white/5 rounded-lg transition-colors">
                    Quanto preciso para começar?
                    <span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                    Recomendamos uma banca mínima de US$ 500 para uma gestão de risco eficiente, mas é possível começar com menos para testar a ferramenta.
                </div>
</details>
<details className="group bg-card border border-white/5 rounded-lg open:border-white/10 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white hover:bg-white/5 rounded-lg transition-colors">
                    Preciso ficar com o computador ligado?
                    <span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                    Não. Todo o processo acontece na nuvem. Você configura uma vez e o sistema roda 24/7 automaticamente.
                </div>
</details>
<details className="group bg-card border border-white/5 rounded-lg open:border-white/10 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white hover:bg-white/5 rounded-lg transition-colors">
                    Existe fidelidade?
                    <span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                    Nenhuma. Você pode cancelar a assinatura do serviço a qualquer momento, sem multas.
                </div>
</details>
</div>
</section>

<section className="py-12 max-w-5xl mx-auto px-6 mb-12">
<div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 p-12 text-center">
<div className="absolute top-0 right-0 p-32 bg-cyan-500/10 blur-[100px] -z-10"></div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Pronto para evoluir?</h2>
<p className="text-slate-400 mb-8 max-w-xl mx-auto">Junte-se ao cardume e comece a ter resultados profissionais ainda hoje.</p>
<a className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]" href="https://wa.me/">
<iconify-icon icon="lucide:phone" width="18"></iconify-icon>
                Falar com Especialista
            </a>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-cyan-400" icon="lucide:fish" width="20"></iconify-icon>
                        @projetosardinha
                    </a>
<p className="text-sm text-slate-500 max-w-xs">
                        Tecnologia e comunidade para investidores de criptomoedas.
                    </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12">
<div>
<h4 className="text-white font-medium text-sm mb-4">Produto</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Copy Trade</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Bunker 21</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Mentoria</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Social</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">YouTube</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Discord</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Termos de Uso</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Privacidade</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8">
<p className="text-[10px] text-slate-700 leading-relaxed text-justify mb-4">
<strong>DISCLAIMER:</strong> Negociar criptomoedas e ativos financeiros envolve alto risco e pode não ser adequado para todos os investidores. O desempenho passado não é garantia de resultados futuros. O Projeto Sardinha fornece ferramentas educacionais e de automação, não consultoria financeira personalizada. Você é o único responsável por suas decisões de investimento.
                </p>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-4">
<p>© 2023 Projeto Sardinha. Todos os direitos reservados.</p>
<div className="flex gap-4">
<iconify-icon icon="lucide:code" width="14"></iconify-icon>
<span>Designed for Sardinhas</span>
</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
