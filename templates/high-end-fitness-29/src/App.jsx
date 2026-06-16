import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Inicializa os ícones Lucide
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-2xl font-semibold tracking-tight text-white uppercase" href="#">FORGEE</a>
<nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#espaco">Espaço</a>
<a className="hover:text-white transition-colors" href="#programas">Programas</a>
<a className="hover:text-white transition-colors" href="#equipe">Equipe</a>
<a className="hover:text-white transition-colors" href="#planos">Planos</a>
</nav>
<div className="flex items-center gap-6">
<a className="hidden sm:block text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">SOU MEMBRO</a>
<a className="bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all" href="#visita">AGENDAR VISITA</a>
</div>
</div>
<div className="border-t border-white/5 py-1.5 text-center text-xs text-zinc-500 uppercase tracking-widest bg-black">
            Beyond Limits Known™ · Indaiatuba, SP · Est. 2018
        </div>
</header>
<main>

<section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden flex flex-col justify-center min-h-[90vh]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-zinc-900/40 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-6 flex flex-col gap-8 z-10">
<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.9] text-white uppercase">
                        Sem Mágica<br/>
<span className="text-zinc-600">Sem Atalhos</span><br/>
                        Sem Desculpas
                    </h1>
<div>
<p className="text-xl sm:text-2xl font-medium text-white mb-3 tracking-tight">Treinos progressivos e acompanhamento real!</p>
<p className="text-zinc-400 max-w-lg leading-relaxed">
                            Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
                        </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="bg-white text-black px-8 py-4 rounded-full text-base font-medium text-center hover:bg-zinc-200 transition-colors" href="#planos">COMEÇAR AGORA</a>
<a className="border border-zinc-800 text-white px-8 py-4 rounded-full text-base font-medium text-center hover:bg-zinc-900 transition-colors" href="#espaco">CONHECER O ESPAÇO</a>
</div>
</div>
<div className="lg:col-span-6 relative h-[500px] lg:h-[700px] rounded-3xl overflow-hidden border border-zinc-800/50 bg-zinc-900/20 group hidden md:block">
<img alt="Ambiente de treino intenso" className="w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-700" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
<div className="bg-black/60 backdrop-blur-md p-5 rounded-2xl border border-white/10">
<i className="w-5 h-5 text-zinc-400 mb-3" data-lucide="clock" strokeWidth="1.5"></i>
<div className="text-xs text-zinc-500 uppercase tracking-wider mb-1 font-medium">Horário</div>
<div className="font-medium text-white">05H–23H</div>
</div>
<div className="bg-black/60 backdrop-blur-md p-5 rounded-2xl border border-white/10">
<i className="w-5 h-5 text-zinc-400 mb-3" data-lucide="maximize" strokeWidth="1.5"></i>
<div className="text-xs text-zinc-500 uppercase tracking-wider mb-1 font-medium">Área</div>
<div className="font-medium text-white">1.800M²</div>
</div>
<div className="bg-black/60 backdrop-blur-md p-5 rounded-2xl border border-white/10">
<i className="w-5 h-5 text-zinc-400 mb-3" data-lucide="users" strokeWidth="1.5"></i>
<div className="text-xs text-zinc-500 uppercase tracking-wider mb-1 font-medium">Alunos</div>
<div className="font-medium text-white">+1.200</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto w-full mt-16 md:hidden">
<div className="grid grid-cols-2 gap-px bg-zinc-800/50 border border-zinc-800/50 rounded-2xl overflow-hidden">
<div className="bg-black p-5">
<div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Dias</div>
<div className="font-medium text-white text-xl">7 DIAS</div>
</div>
<div className="bg-black p-5">
<div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Fundação</div>
<div className="font-medium text-white text-xl">2018</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="espaco">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
<div>
<span className="text-sm font-medium text-orange-500 uppercase tracking-widest mb-4 block">Quem somos</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white uppercase leading-[1.1] mb-8">
                            Forjados<br/>pela<br/>disciplina.
                        </h2>
</div>
<div className="flex flex-col gap-6 text-zinc-400">
<p>A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.</p>
<p>Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.</p>
<blockquote className="pl-6 border-l-2 border-zinc-700 text-xl text-white font-medium italic my-4">
                            "In silence, the transformation begins."
                        </blockquote>
<p>Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.</p>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8 mb-24">
<div className="p-8 rounded-3xl border border-zinc-800/50 bg-zinc-900/20">
<div className="text-sm font-medium text-zinc-500 mb-4 tracking-widest">01</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Intensidade</h3>
<p className="text-zinc-400 text-base">O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.</p>
</div>
<div className="p-8 rounded-3xl border border-zinc-800/50 bg-zinc-900/20">
<div className="text-sm font-medium text-zinc-500 mb-4 tracking-widest">02</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Precisão</h3>
<p className="text-zinc-400 text-base">Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.</p>
</div>
<div className="p-8 rounded-3xl border border-zinc-800/50 bg-zinc-900/20">
<div className="text-sm font-medium text-zinc-500 mb-4 tracking-widest">03</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Controle</h3>
<p className="text-zinc-400 text-base">Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.</p>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6">
<div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 flex flex-col justify-between">
<p className="text-zinc-300 mb-8 text-base leading-relaxed">"Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas."</p>
<div>
<div className="font-medium text-white text-base">Rafael M.</div>
<div className="text-sm text-zinc-500">Engenheiro · Aluno há 3 anos</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 flex flex-col justify-between">
<p className="text-zinc-300 mb-8 text-base leading-relaxed">"Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha."</p>
<div>
<div className="font-medium text-white text-base">Juliana T.</div>
<div className="text-sm text-zinc-500">Professora · Aluna há 2 anos</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 flex flex-col justify-between">
<p className="text-zinc-300 mb-8 text-base leading-relaxed">"A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado."</p>
<div>
<div className="font-medium text-white text-base">Lucas O.</div>
<div className="text-sm text-zinc-500">Empresário · Aluno há 4 anos</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-950">
<div className="max-w-4xl mx-auto">
<div className="mb-16">
<span className="text-sm font-medium text-orange-500 uppercase tracking-widest mb-4 block">Estrutura</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white uppercase leading-[1.1] mb-6">
                        Equipamento<br/>que não te<br/>limita.
                    </h2>
<p className="text-zinc-400 text-xl max-w-xl">Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.</p>
</div>
<div className="flex flex-col border-t border-zinc-800">
<details className="group py-6 border-b border-zinc-800" open="">
<summary className="flex justify-between items-center cursor-pointer text-xl font-medium text-white tracking-tight uppercase">
<span>01 · Cardio &amp; Conditioning</span>
<span className="text-zinc-500 group-open:rotate-45 transition-transform duration-300">
<i data-lucide="plus" strokeWidth="1.5"></i>
</span>
</summary>
<div className="pt-6 pb-2 text-zinc-400 text-base">
<ul className="flex flex-col gap-3">
<li className="flex justify-between items-center border-b border-zinc-800/50 pb-2">
<span>Assault Bike Concept2</span>
<span className="text-xs font-medium text-white px-2 py-1 bg-zinc-900 rounded">8 UNIDADES</span>
</li>
<li className="flex justify-between items-center border-b border-zinc-800/50 pb-2">
<span>Remo Concept2 Model D</span>
<span className="text-xs font-medium text-white px-2 py-1 bg-zinc-900 rounded">6 UNIDADES</span>
</li>
<li className="flex justify-between items-center border-b border-zinc-800/50 pb-2">
<span>SkiErg Concept2</span>
<span className="text-xs font-medium text-white px-2 py-1 bg-zinc-900 rounded">4 UNIDADES</span>
</li>
<li className="pb-2">Esteiras NordicTrack com inclinação negativa</li>
<li>Cordas de batalha 15m e 20m</li>
</ul>
</div>
</details>
<details className="group py-6 border-b border-zinc-800">
<summary className="flex justify-between items-center cursor-pointer text-xl font-medium text-zinc-400 hover:text-white transition-colors tracking-tight uppercase">
<span>02 · Força Livre</span>
<span className="text-zinc-500 group-open:rotate-45 transition-transform duration-300">
<i data-lucide="plus" strokeWidth="1.5"></i>
</span>
</summary>
<div className="pt-6 pb-2 text-zinc-400 text-base">
<p>Plataformas de levantamento olímpico completas, racks customizados, barras Rogue e mais de 2 toneladas em anilhas calibradas.</p>
</div>
</details>
<details className="group py-6 border-b border-zinc-800">
<summary className="flex justify-between items-center cursor-pointer text-xl font-medium text-zinc-400 hover:text-white transition-colors tracking-tight uppercase">
<span>03 · Máquinas</span>
<span className="text-zinc-500 group-open:rotate-45 transition-transform duration-300">
<i data-lucide="plus" strokeWidth="1.5"></i>
</span>
</summary>
<div className="pt-6 pb-2 text-zinc-400 text-base">
<p>Equipamentos guiados de alta biomecânica, selecionados placa por placa para isolamento muscular perfeito.</p>
</div>
</details>
<details className="group py-6 border-b border-zinc-800">
<summary className="flex justify-between items-center cursor-pointer text-xl font-medium text-zinc-400 hover:text-white transition-colors tracking-tight uppercase">
<span>04 · Funcional &amp; Mobility</span>
<span className="text-zinc-500 group-open:rotate-45 transition-transform duration-300">
<i data-lucide="plus" strokeWidth="1.5"></i>
</span>
</summary>
<div className="pt-6 pb-2 text-zinc-400 text-base">
<p>Área de gramado artificial, trenós, kettlebells de competição e acessórios completos para liberação miofascial e mobilidade.</p>
</div>
</details>
<details className="group py-6 border-b border-zinc-800">
<summary className="flex justify-between items-center cursor-pointer text-xl font-medium text-zinc-400 hover:text-white transition-colors tracking-tight uppercase">
<span>05 · Infraestrutura</span>
<span className="text-zinc-500 group-open:rotate-45 transition-transform duration-300">
<i data-lucide="plus" strokeWidth="1.5"></i>
</span>
</summary>
<div className="pt-6 pb-2 text-zinc-400 text-base">
<p>Vestiários privativos padrão hotelaria, toalhas cortesia, bebedouros com água gelada filtrada e estacionamento com vallet.</p>
</div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="programas">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<span className="text-sm font-medium text-orange-500 uppercase tracking-widest mb-4 block">O que oferecemos</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white uppercase leading-[1.1]">
                        Um protocolo<br/>para cada<br/>objetivo.
                    </h2>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="p-8 rounded-3xl bg-zinc-900/20 border border-zinc-800/50 flex flex-col h-full">
<div className="mb-6">
<h3 className="text-xl font-semibold text-white tracking-tight uppercase mb-3">01 — Forgee Strength</h3>
<p className="text-zinc-400 text-base leading-relaxed">Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.</p>
</div>
<div className="mt-auto grid grid-cols-2 gap-4 border-t border-zinc-800/50 pt-6">
<div>
<div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Para quem é</div>
<div className="text-sm text-white font-medium">Iniciantes a avançados</div>
</div>
<div>
<div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Frequência</div>
<div className="text-sm text-white font-medium">3–5× por semana</div>
</div>
</div>
</div>

<div className="p-8 rounded-3xl bg-orange-950/20 border border-orange-500/30 flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10">
<i className="w-32 h-32" data-lucide="flame" strokeWidth="1"></i>
</div>
<div className="mb-6 relative z-10">
<div className="inline-flex items-center gap-2 text-xs font-medium text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full mb-4">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                                DESTAQUE
                            </div>
<h3 className="text-xl font-semibold text-white tracking-tight uppercase mb-3">02 — Forgee Conditioning</h3>
<p className="text-zinc-300 text-base leading-relaxed">Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.</p>
</div>
<div className="mt-auto grid grid-cols-2 gap-4 border-t border-orange-500/20 pt-6 relative z-10">
<div>
<div className="text-xs text-orange-500/70 uppercase tracking-wider mb-1">Para quem é</div>
<div className="text-sm text-white font-medium">Condicionamento, perda de gordura</div>
</div>
<div>
<div className="text-xs text-orange-500/70 uppercase tracking-wider mb-1">Turmas</div>
<div className="text-sm text-white font-medium">06H · 07H · 12H · 18H · 19H30</div>
</div>
</div>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/20 border border-zinc-800/50 flex flex-col h-full">
<div className="mb-6">
<h3 className="text-xl font-semibold text-white tracking-tight uppercase mb-3">03 — Forgee Mobility</h3>
<p className="text-zinc-400 text-base leading-relaxed">Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.</p>
</div>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/20 border border-zinc-800/50 flex flex-col h-full">
<div className="mb-6">
<h3 className="text-xl font-semibold text-white tracking-tight uppercase mb-3">04 — Personal Training</h3>
<p className="text-zinc-400 text-base leading-relaxed">Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-950 relative" id="planos">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-20">
<span className="text-sm font-medium text-orange-500 uppercase tracking-widest mb-4 block">Investimento</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white uppercase leading-[1.1] mb-6">
                        Sem Matrícula.<br/>Sem Fidelidade.<br/>Sem Enrolação.
                    </h2>
<p className="text-zinc-400 text-lg">Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">

<div className="p-8 rounded-3xl border border-zinc-800/80 bg-black flex flex-col">
<h3 className="text-xl font-semibold text-white tracking-tight uppercase mb-2">Livre</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold text-white tracking-tight">R$149</span>
<span className="text-zinc-500 text-base">/mês</span>
</div>
<ul className="flex flex-col gap-4 text-base text-zinc-400 mb-10 flex-1">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-white shrink-0 mt-0.5" data-lucide="check"></i> Acesso ilimitado 05H–23H</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-white shrink-0 mt-0.5" data-lucide="check"></i> Avaliação física de entrada</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-white shrink-0 mt-0.5" data-lucide="check"></i> Planilha de treino inicial</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-white shrink-0 mt-0.5" data-lucide="check"></i> App FORGEE</li>
</ul>
<button className="w-full py-4 rounded-xl border border-zinc-700 text-white font-medium hover:bg-zinc-900 transition-colors">QUERO ESSE PLANO</button>
</div>

<div className="p-8 rounded-3xl border border-orange-500/50 bg-zinc-900 flex flex-col lg:scale-105 shadow-2xl shadow-orange-900/20 relative z-10">
<div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
<span className="bg-orange-500 text-white text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider">Mais Escolhido</span>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight uppercase mb-2 mt-2">Plus</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold text-white tracking-tight">R$229</span>
<span className="text-zinc-500 text-base">/mês</span>
</div>
<ul className="flex flex-col gap-4 text-base text-zinc-300 mb-10 flex-1">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" data-lucide="check"></i> Acesso ilimitado 05H–23H</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" data-lucide="check"></i> App &amp; Avaliação física</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" data-lucide="check"></i> 2 sessões de Personal/mês</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" data-lucide="check"></i> 1 aula Conditioning/semana</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" data-lucide="check"></i> Revisão de planilha mensal</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" data-lucide="check"></i> Acesso ao Mobility</li>
</ul>
<button className="w-full py-4 rounded-xl bg-orange-600 text-white font-medium hover:bg-orange-500 transition-colors">QUERO ESSE PLANO</button>
</div>

<div className="p-8 rounded-3xl border border-zinc-800/80 bg-black flex flex-col">
<h3 className="text-xl font-semibold text-white tracking-tight uppercase mb-2">Elite</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold text-white tracking-tight">R$389</span>
<span className="text-zinc-500 text-base">/mês</span>
</div>
<ul className="flex flex-col gap-4 text-base text-zinc-400 mb-10 flex-1">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-white shrink-0 mt-0.5" data-lucide="check"></i> Tudo do plano Plus</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-white shrink-0 mt-0.5" data-lucide="check"></i> 4 sessões de Personal/mês</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-white shrink-0 mt-0.5" data-lucide="check"></i> Acesso ilimitado a classes</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-white shrink-0 mt-0.5" data-lucide="check"></i> Bioimpedância mensal</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-white shrink-0 mt-0.5" data-lucide="check"></i> WhatsApp com coach</li>
</ul>
<button className="w-full py-4 rounded-xl border border-zinc-700 text-white font-medium hover:bg-zinc-900 transition-colors">QUERO ESSE PLANO</button>
</div>
</div>
<div className="mt-16 text-center text-sm text-zinc-500 max-w-2xl mx-auto flex flex-col gap-4">
<p>Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto</p>
<div className="inline-flex items-center justify-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-6 py-3 mx-auto">
<span className="text-white font-medium">DIÁRIA: R$ 39</span>
<span>· Acesso por 1 dia ·</span>
<a className="text-white underline underline-offset-4 hover:text-orange-400" href="#">AGENDAR</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="equipe">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div>
<span className="text-sm font-medium text-orange-500 uppercase tracking-widest mb-4 block">Quem te acompanha</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white uppercase leading-[1.1]">
                            Coaches que<br/>treinam.
                        </h2>
</div>
<p className="text-zinc-400 text-lg max-w-sm">Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group border border-zinc-800/50 rounded-2xl p-6 bg-zinc-900/10 hover:bg-zinc-900/40 transition-colors">
<div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-white font-semibold mb-6">RF</div>
<h3 className="text-lg font-semibold text-white tracking-tight uppercase mb-1">Rodrigo Farias</h3>
<p className="text-sm text-orange-400 font-medium mb-3">Head Coach</p>
<p className="text-xs text-zinc-600 font-mono">CREF 045821-G/SP</p>
</div>
<div className="group border border-zinc-800/50 rounded-2xl p-6 bg-zinc-900/10 hover:bg-zinc-900/40 transition-colors">
<div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-white font-semibold mb-6">AL</div>
<h3 className="text-lg font-semibold text-white tracking-tight uppercase mb-1">Ana Luísa</h3>
<p className="text-sm text-zinc-400 font-medium mb-3">Conditioning</p>
<p className="text-xs text-zinc-600 font-mono">CREF 078342-G/SP</p>
</div>
<div className="group border border-zinc-800/50 rounded-2xl p-6 bg-zinc-900/10 hover:bg-zinc-900/40 transition-colors">
<div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-white font-semibold mb-6">BT</div>
<h3 className="text-lg font-semibold text-white tracking-tight uppercase mb-1">Bruno T.</h3>
<p className="text-sm text-zinc-400 font-medium mb-3">Mobility &amp; Rehab</p>
<p className="text-xs text-zinc-600 font-mono">CREF 091205-G/SP</p>
</div>
<div className="group border border-zinc-800/50 rounded-2xl p-6 bg-zinc-900/10 hover:bg-zinc-900/40 transition-colors">
<div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-white font-semibold mb-6">CD</div>
<h3 className="text-lg font-semibold text-white tracking-tight uppercase mb-1">Camila D.</h3>
<p className="text-sm text-zinc-400 font-medium mb-3">Personal Trainer</p>
<p className="text-xs text-zinc-600 font-mono">CREF 063417-G/SP</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-950">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<span className="text-sm font-medium text-orange-500 uppercase tracking-widest mb-4 block">Dúvidas</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white uppercase leading-[1.1]">
                        Perguntas<br/>Diretas.
                    </h2>
</div>
<div className="flex flex-col">
<details className="group py-6 border-t border-zinc-800">
<summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-white tracking-tight">
<span>Preciso ter experiência?</span>
<span className="text-zinc-500 group-open:-scale-y-100 transition-transform duration-300">
<i data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="pt-4 text-zinc-400 text-base leading-relaxed">
<p>Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual.</p>
</div>
</details>
<details className="group py-6 border-t border-zinc-800">
<summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-white tracking-tight">
<span>Posso treinar sozinho?</span>
<span className="text-zinc-500 group-open:-scale-y-100 transition-transform duration-300">
<i data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="pt-4 text-zinc-400 text-base leading-relaxed">
<p>Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima.</p>
</div>
</details>
<details className="group py-6 border-t border-zinc-800">
<summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-white tracking-tight">
<span>Como funciona o cancelamento?</span>
<span className="text-zinc-500 group-open:-scale-y-100 transition-transform duration-300">
<i data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="pt-4 text-zinc-400 text-base leading-relaxed">
<p>Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória.</p>
</div>
</details>
<details className="group py-6 border-t border-zinc-800 border-b">
<summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-white tracking-tight">
<span>Posso visitar antes de assinar?</span>
<span className="text-zinc-500 group-open:-scale-y-100 transition-transform duration-300">
<i data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="pt-4 text-zinc-400 text-base leading-relaxed">
<p>Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita.</p>
</div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative overflow-hidden" id="visita">
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-900/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

<div>
<span className="text-sm font-medium text-orange-500 uppercase tracking-widest mb-4 block">Onde estamos</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white uppercase leading-[1.1] mb-10">
                        No coração<br/>de Indaiatuba.
                    </h2>
<div className="grid sm:grid-cols-2 gap-8 mb-12">
<div>
<h4 className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Endereço</h4>
<p className="text-white text-base leading-relaxed font-medium">
                                Rua das Esmeraldas, 742<br/>
                                Jardim Morada do Sol<br/>
                                Indaiatuba, SP<br/>
<span className="text-zinc-500 text-sm font-normal">CEP 13.334-210</span>
</p>
<p className="text-sm text-zinc-500 mt-2">200m do Carrefour · Próximo à saída SP-075</p>
</div>
<div>
<h4 className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Horários</h4>
<ul className="text-base text-zinc-300 flex flex-col gap-1">
<li className="flex justify-between"><span className="text-zinc-500">Seg–Sex</span> <span className="font-medium text-white">05H–23H</span></li>
<li className="flex justify-between"><span className="text-zinc-500">Sáb</span> <span className="font-medium text-white">07H–20H</span></li>
<li className="flex justify-between"><span className="text-zinc-500">Dom/Fer</span> <span className="font-medium text-white">08H–14H</span></li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors border border-zinc-800">
<i className="w-4 h-4" data-lucide="message-circle"></i> FALAR NO WHATSAPP
                        </button>
<button className="flex items-center justify-center gap-2 bg-transparent hover:bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors border border-zinc-800">
<i className="w-4 h-4" data-lucide="map-pin"></i> COMO CHEGAR
                        </button>
</div>
</div>

<div className="bg-zinc-900/30 border border-zinc-800/50 p-10 rounded-3xl flex flex-col justify-center text-center">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white uppercase leading-[1.1] mb-6">
                        A decisão<br/>já foi tomada.<br/>Agora é a ação.
                    </h3>
<div className="bg-black/50 border border-white/5 py-3 px-4 rounded-lg mb-8 overflow-hidden">
<p className="text-xs font-mono text-zinc-500 tracking-[0.2em] uppercase whitespace-nowrap animate-pulse">
                            A G E N D E U M A V I S I T A · G R A T U I T A · S E M C O M P R O M I S S O · T R A G A T Ê N I S .
                        </p>
</div>
<button className="bg-orange-600 hover:bg-orange-500 text-white w-full py-5 rounded-xl font-medium tracking-wide transition-colors">
                        AGENDAR VISITA GRATUITA
                    </button>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-900 bg-black pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<div className="text-2xl font-semibold tracking-tight text-white uppercase mb-2">FORGEE</div>
<div className="text-xs font-medium text-zinc-600 tracking-widest uppercase">Beyond Limits Known™</div>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-3">
<span className="text-white text-sm font-medium mb-1">Academia</span>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#espaco">Espaço</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#programas">Programas</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#equipe">Equipe</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#planos">Planos</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white text-sm font-medium mb-1">Legal &amp; Redes</span>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Política de Privacidade</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Termos de Uso</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors mt-2" href="#">Instagram</a>
</div>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
<p>FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP</p>
<p>DESIGN SYSTEM © 2026</p>
</div>
</div>
</footer>


    </>
  );
}
