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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-neutral-950/80 border-neutral-900">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter uppercase flex items-center gap-2" href="#">
<iconify-icon className="text-amber-500" icon="solar:fire-linear" strokeWidth="1.5"></iconify-icon>
                FORGEE
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="transition-colors hover:text-neutral-50" href="#espaco">Espaço</a>
<a className="transition-colors hover:text-neutral-50" href="#programas">Programas</a>
<a className="transition-colors hover:text-neutral-50" href="#equipe">Equipe</a>
<a className="transition-colors hover:text-neutral-50" href="#planos">Planos</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center text-xs font-medium border px-4 py-2 rounded-full transition-colors uppercase tracking-tight border-neutral-800 hover:bg-neutral-900" href="#">Sou Membro</a>
<a className="inline-flex items-center justify-center text-xs font-medium px-4 py-2 rounded-full transition-colors uppercase tracking-tight bg-amber-500 text-amber-950 hover:bg-amber-400 shadow-[0_0_20px_-5px_rgba(245,158,11,0.3)]" href="#">Agendar Visita</a>
</div>
</div>
</nav>

<section className="relative md:pt-48 md:pb-32 flex flex-col text-center max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 items-center">

<div className="absolute inset-0 -z-10 w-[100vw] left-1/2 -translate-x-1/2">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent z-10"></div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950 z-10"></div>
<img alt="Gym Background" className="w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs font-medium uppercase tracking-tight mb-8 text-amber-500/80 border border-amber-500/20 bg-amber-500/10 px-3 py-1 rounded-full">Beyond Limits Known™ · Indaiatuba, SP</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.1] mb-8 flex flex-col drop-shadow-2xl">
<span className="">SEM MÁGICA</span>
<span className="">SEM ATALHOS</span>
<span className="">SEM DESCULPAS</span>
</h1>
<p className="text-xl md:text-2xl font-medium tracking-tight mb-4 max-w-2xl text-neutral-300">Treinos progressivos e acompanhamento real!</p>
<p className="text-sm md:text-base max-w-xl mb-10 leading-relaxed text-neutral-400">
            Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-20 z-20">
<a className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-medium px-8 py-3 rounded-full transition-all uppercase tracking-tight bg-amber-500 text-amber-950 hover:bg-amber-400 shadow-[0_0_30px_-5px_rgba(245,158,11,0.4)]" href="#">Começar Agora</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-medium border bg-zinc-950/50 backdrop-blur-sm px-8 py-3 rounded-full transition-colors uppercase tracking-tight border-neutral-800 text-neutral-50 hover:bg-neutral-900" href="#espaco">Conhecer o Espaço</a>
</div>

<div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 border-t pt-10 text-left border-neutral-900 backdrop-blur-sm">
<div className="">
<p className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-100">05H–23H</p>
<p className="text-xs mt-1 text-neutral-500">Horário de funcionamento</p>
</div>
<div className="">
<p className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-100">7 DIAS</p>
<p className="text-xs mt-1 text-neutral-500">Aberto todos os dias da semana</p>
</div>
<div>
<p className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-100">1.800M²</p>
<p className="text-xs mt-1 text-neutral-500">Área total do espaço</p>
</div>
<div>
<p className="text-xl md:text-2xl font-semibold tracking-tight text-amber-500">+1.200 ALUNOS</p>
<p className="text-xs mt-1 text-neutral-500">Base de alunos ativos</p>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-900 bg-neutral-950/50" id="espaco">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-5 flex flex-col justify-between">
<div>
<span className="text-xs font-medium uppercase tracking-tight mb-4 block text-neutral-500">Quem somos</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-tight flex flex-col mb-6">
<span className="">FORJADOS</span>
<span>PELA</span>
<span className="text-amber-500">DISCIPLINA.</span>
</h2>
<div className="space-y-6 text-sm leading-relaxed text-neutral-400 mb-8">
<p className="">A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.</p>
<p className="">Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.</p>
</div>
</div>
<div className="relative rounded-2xl overflow-hidden group">
<div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Gym Structure" className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="lg:col-span-7 flex flex-col justify-center">
<blockquote className="border-l-2 pl-6 my-10 border-amber-500/50">
<p className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-200">"In silence, the transformation begins."</p>
</blockquote>
<p className="text-sm leading-relaxed mb-12 text-neutral-400">
                    Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl border bg-neutral-900/50 border-neutral-800/50 hover:border-neutral-700 transition-colors">
<iconify-icon className="text-2xl mb-4 text-amber-500" icon="solar:flame-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight mb-2">Intensidade</h3>
<p className="text-xs leading-relaxed text-neutral-400">O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.</p>
</div>
<div className="p-6 rounded-2xl border bg-neutral-900/50 border-neutral-800/50 hover:border-neutral-700 transition-colors">
<iconify-icon className="text-2xl mb-4 text-amber-500" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight mb-2">Precisão</h3>
<p className="text-xs leading-relaxed text-neutral-400">Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.</p>
</div>
<div className="p-6 rounded-2xl border bg-neutral-900/50 border-neutral-800/50 hover:border-neutral-700 transition-colors">
<iconify-icon className="text-2xl mb-4 text-amber-500" icon="solar:stopwatch-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight mb-2">Controle</h3>
<p className="text-xs leading-relaxed text-neutral-400">Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 px-6 border-y border-neutral-900 overflow-hidden">
<img alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-5 grayscale" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="relative max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center z-10">
<div>
<p className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-50">+1.200</p>
<p className="text-xs font-medium uppercase tracking-tight mt-2 text-neutral-500">Alunos ativos</p>
</div>
<div>
<p className="text-4xl md:text-5xl font-semibold tracking-tighter text-amber-500">94%</p>
<p className="text-xs font-medium uppercase tracking-tight mt-2 text-neutral-500">Retenção 6 meses</p>
</div>
<div className="">
<p className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-50">8 anos</p>
<p className="text-xs font-medium uppercase tracking-tight mt-2 text-neutral-500">Em operação</p>
</div>
<div>
<p className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-50">1.8K M²</p>
<p className="text-xs font-medium uppercase tracking-tight mt-2 text-neutral-500">Dedicados</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-2xl border flex flex-col justify-between bg-neutral-900/30 border-neutral-800/50 hover:bg-neutral-900/50 transition-colors">
<iconify-icon className="text-2xl mb-6 text-neutral-600" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm leading-relaxed mb-8 text-neutral-300">"Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas."</p>
<div className="flex items-center gap-4">
<img alt="Rafael" className="w-10 h-10 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight text-neutral-100">Rafael M.</p>
<p className="text-xs mt-0.5 text-neutral-500">Engenheiro · Aluno há 3 anos</p>
</div>
</div>
</div>
<div className="p-8 rounded-2xl border flex flex-col justify-between bg-neutral-900/30 border-neutral-800/50 hover:bg-neutral-900/50 transition-colors">
<iconify-icon className="text-2xl mb-6 text-neutral-600" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm leading-relaxed mb-8 text-neutral-300">"Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha."</p>
<div className="flex items-center gap-4">
<img alt="Juliana" className="w-10 h-10 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight text-neutral-100">Juliana T.</p>
<p className="text-xs mt-0.5 text-neutral-500">Professora · Aluna há 2 anos</p>
</div>
</div>
</div>
<div className="p-8 rounded-2xl border flex flex-col justify-between bg-neutral-900/30 border-neutral-800/50 hover:bg-neutral-900/50 transition-colors">
<iconify-icon className="text-2xl mb-6 text-neutral-600" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm leading-relaxed mb-8 text-neutral-300">"A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado."</p>
<div className="flex items-center gap-4">
<img alt="Lucas" className="w-10 h-10 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight text-neutral-100">Lucas O.</p>
<p className="text-xs mt-0.5 text-neutral-500">Empresário · Aluno há 4 anos</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-900">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
<div className="md:w-1/3 flex flex-col">
<div>
<span className="text-xs font-medium uppercase tracking-tight mb-4 block text-neutral-500">Estrutura</span>
<h2 className="text-4xl font-semibold tracking-tighter leading-tight mb-4 uppercase">Equipamento<br/>que não te<br/>limita.</h2>
<p className="text-sm text-neutral-400 mb-8">Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.</p>
</div>
<img alt="Weights" className="w-full mt-auto rounded-2xl object-cover h-64 grayscale opacity-80 border border-neutral-800" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="md:w-2/3 space-y-12">
<div>
<h3 className="text-sm font-medium uppercase tracking-tight border-b pb-2 mb-6 text-neutral-50 border-neutral-800">01 — Cardio &amp; Conditioning</h3>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Assault Bike Concept2</span>
<span className="text-xs text-neutral-500">8 UNIDADES</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Remo Concept2 Model D</span>
<span className="text-xs text-neutral-500">6 UNIDADES</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-300">SkiErg Concept2</span>
<span className="text-xs text-neutral-500">4 UNIDADES</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Esteiras NordicTrack com inclinação negativa</span>
<span className="text-xs text-neutral-500">—</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Cordas de batalha 15m e 20m</span>
<span className="text-xs text-neutral-500">—</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div>
<h3 className="text-sm font-medium uppercase tracking-tight border-b pb-2 mb-4 text-neutral-50 border-neutral-800">02 — Força Livre</h3>
<p className="text-xs text-neutral-500">Área completa para powerlifting e weightlifting.</p>
</div>
<div>
<h3 className="text-sm font-medium uppercase tracking-tight border-b pb-2 mb-4 text-neutral-50 border-neutral-800">03 — Máquinas</h3>
<p className="text-xs text-neutral-500">Seleção biomecânica premium para isolamento.</p>
</div>
<div>
<h3 className="text-sm font-medium uppercase tracking-tight border-b pb-2 mb-4 text-neutral-50 border-neutral-800">04 — Funcional &amp; Mobility</h3>
<p className="text-xs text-neutral-500">Espaço aberto para drills, LPO e recuperação.</p>
</div>
<div>
<h3 className="text-sm font-medium uppercase tracking-tight border-b pb-2 mb-4 text-neutral-50 border-neutral-800">05 — Infraestrutura</h3>
<p className="text-xs text-neutral-500">Vestiários completos, climatização e hidratação.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-900 bg-neutral-900/10" id="programas">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<span className="text-xs font-medium uppercase tracking-tight mb-4 block text-neutral-500">O que oferecemos</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-tight uppercase">Um protocolo<br/>para cada<br/>objetivo.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-8 rounded-2xl border flex flex-col h-full bg-neutral-950 border-neutral-800 hover:border-neutral-700 transition-colors">
<h3 className="text-xl font-semibold tracking-tight mb-4">01 — FORGEE STRENGTH</h3>
<p className="text-sm mb-6 flex-grow text-neutral-400">Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.</p>
<div className="pt-6 border-t space-y-3 border-neutral-900">
<div className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-base text-neutral-500" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs text-neutral-300"><strong className="font-medium text-neutral-50">Para quem é:</strong> Iniciantes a avançados em hipertrofia e força.</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-base text-neutral-500" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs text-neutral-300"><strong className="font-medium text-neutral-50">Frequência:</strong> 3–5× por semana.</span>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border relative overflow-hidden flex flex-col h-full bg-neutral-900 border-neutral-700">
<img alt="Conditioning" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-0 right-0 text-[10px] font-semibold uppercase tracking-tight px-3 py-1 rounded-bl-xl bg-amber-500 text-amber-950 z-10">Destaque</div>
<div className="relative z-10 flex flex-col h-full">
<h3 className="text-xl font-semibold tracking-tight mb-4 text-amber-500">02 — FORGEE CONDITIONING</h3>
<p className="text-sm mb-6 flex-grow text-neutral-300">Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.</p>
<div className="pt-6 border-t space-y-3 border-neutral-800">
<div className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-base text-amber-500/70" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs text-neutral-200"><strong className="font-medium text-neutral-50">Para quem é:</strong> Condicionamento, perda de gordura.</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-base text-amber-500/70" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs text-neutral-200"><strong className="font-medium text-neutral-50">Turmas:</strong> 06H · 07H · 12H · 18H · 19H30</span>
</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border flex flex-col h-full bg-neutral-950 border-neutral-800 hover:border-neutral-700 transition-colors">
<h3 className="text-xl font-semibold tracking-tight mb-4">03 — FORGEE MOBILITY</h3>
<p className="text-sm flex-grow text-neutral-400">Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.</p>
</div>

<div className="p-8 rounded-2xl border flex flex-col h-full bg-neutral-950 border-neutral-800 hover:border-neutral-700 transition-colors">
<h3 className="text-xl font-semibold tracking-tight mb-4">04 — PERSONAL TRAINING</h3>
<p className="text-sm flex-grow text-neutral-400">Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-900" id="planos">
<div className="max-w-7xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter leading-none mb-6 uppercase flex flex-col md:block">
<span className="md:mr-2">Sem matrícula.</span>
<span className="md:mr-2">Sem fidelidade.</span>
<span className="text-amber-500">Sem enrolação.</span>
</h2>
<p className="text-sm text-neutral-400">Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.</p>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

<div className="p-8 rounded-3xl border flex flex-col h-full bg-neutral-950 border-neutral-800 hover:border-neutral-700 transition-colors">
<h3 className="text-base font-medium tracking-tight mb-2 text-neutral-400">Plano LIVRE</h3>
<div className="mb-8">
<span className="text-4xl font-semibold tracking-tighter">R$ 149</span><span className="text-sm text-neutral-500">/mês</span>
</div>
<ul className="space-y-4 mb-10 flex-grow text-sm text-neutral-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Acesso ilimitado 05H–23H
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Avaliação física de entrada
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Planilha de treino inicial
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        App FORGEE
                    </li>
</ul>
<a className="w-full inline-flex items-center justify-center text-xs font-medium border px-4 py-3 rounded-xl transition-colors uppercase tracking-tight border-neutral-800 text-neutral-50 hover:bg-neutral-900" href="#">Quero esse plano</a>
</div>

<div className="p-8 rounded-3xl border relative flex flex-col h-full md:scale-105 shadow-2xl z-10 bg-neutral-900 border-amber-500/30 shadow-amber-900/10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-tight px-3 py-1 rounded-full bg-amber-500 text-amber-950">Mais escolhido</div>
<h3 className="text-base font-medium tracking-tight mb-2 text-neutral-400">Plano PLUS</h3>
<div className="mb-8">
<span className="text-4xl font-semibold tracking-tighter text-amber-500">R$ 229</span><span className="text-sm text-neutral-500">/mês</span>
</div>
<ul className="space-y-4 mb-10 flex-grow text-sm text-neutral-200">
<li className="flex items-center gap-3 font-medium text-neutral-50">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Tudo do Livre +
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        2 sessões de Personal/mês
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        1 aula Conditioning/semana
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Revisão planilha a cada 4 semanas
                    </li>
</ul>
<a className="w-full inline-flex items-center justify-center text-xs font-medium px-4 py-3 rounded-xl transition-colors uppercase tracking-tight bg-amber-500 text-amber-950 hover:bg-amber-400" href="#">Quero esse plano</a>
</div>

<div className="p-8 rounded-3xl border flex flex-col h-full bg-neutral-950 border-neutral-800 hover:border-neutral-700 transition-colors">
<h3 className="text-base font-medium tracking-tight mb-2 text-neutral-400">Plano ELITE</h3>
<div className="mb-8">
<span className="text-4xl font-semibold tracking-tighter">R$ 389</span><span className="text-sm text-neutral-500">/mês</span>
</div>
<ul className="space-y-4 mb-10 flex-grow text-sm text-neutral-300">
<li className="flex items-center gap-3 font-medium text-neutral-100">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Tudo do Plus +
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        4 sessões Personal/mês
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Acesso ilimitado às classes
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Bioimpedância mensal
                    </li>
</ul>
<a className="w-full inline-flex items-center justify-center text-xs font-medium border px-4 py-3 rounded-xl transition-colors uppercase tracking-tight border-neutral-800 text-neutral-50 hover:bg-neutral-900" href="#">Quero esse plano</a>
</div>
</div>
<div className="max-w-4xl mx-auto mt-12 flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl border bg-neutral-900/30 border-neutral-800/50">
<p className="text-xs text-center md:text-left text-neutral-400">
                Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto
            </p>
<div className="flex items-center gap-4 text-sm font-medium whitespace-nowrap">
<span className="text-neutral-300">DIÁRIA: R$ 39</span>
<span className="text-neutral-600">|</span>
<span className="text-xs text-neutral-400">Acesso por 1 dia</span>
<a className="text-xs border-b transition-colors uppercase tracking-tight ml-2 text-amber-500 border-amber-500 hover:text-amber-400 hover:border-amber-400" href="#">Agendar</a>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-900" id="equipe">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<span className="text-xs font-medium uppercase tracking-tight mb-4 block text-neutral-500">Quem te acompanha</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-tight uppercase mb-4">Coaches que<br/>treinam.</h2>
<p className="text-sm text-neutral-400">Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl border flex flex-col items-center text-center bg-neutral-950 border-neutral-800 hover:border-neutral-700 transition-colors group">
<img alt="Rodrigo Farias" className="w-20 h-20 rounded-full object-cover mb-6 border border-neutral-800 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<h3 className="text-base font-semibold tracking-tight mb-1">Rodrigo Farias</h3>
<p className="text-xs font-medium mb-4 text-amber-500">Head Coach</p>
<span className="text-[10px] uppercase tracking-tighter text-neutral-600">CREF 045821-G/SP</span>
</div>

<div className="p-6 rounded-2xl border flex flex-col items-center text-center bg-neutral-950 border-neutral-800 hover:border-neutral-700 transition-colors group">
<img alt="Ana Luísa" className="w-20 h-20 rounded-full object-cover mb-6 border border-neutral-800 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<h3 className="text-base font-semibold tracking-tight mb-1">Ana Luísa</h3>
<p className="text-xs font-medium mb-4 text-neutral-400">Conditioning</p>
<span className="text-[10px] uppercase tracking-tighter text-neutral-600">CREF 078342-G/SP</span>
</div>

<div className="p-6 rounded-2xl border flex flex-col items-center text-center bg-neutral-950 border-neutral-800 hover:border-neutral-700 transition-colors group">
<img alt="Bruno T." className="w-20 h-20 rounded-full object-cover mb-6 border border-neutral-800 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<h3 className="text-base font-semibold tracking-tight mb-1">Bruno T.</h3>
<p className="text-xs font-medium mb-4 text-neutral-400">Mobility &amp; Rehab</p>
<span className="text-[10px] uppercase tracking-tighter text-neutral-600">CREF 091205-G/SP</span>
</div>

<div className="p-6 rounded-2xl border flex flex-col items-center text-center bg-neutral-950 border-neutral-800 hover:border-neutral-700 transition-colors group">
<img alt="Camila D." className="w-20 h-20 rounded-full object-cover mb-6 border border-neutral-800 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<h3 className="text-base font-semibold tracking-tight mb-1">Camila D.</h3>
<p className="text-xs font-medium mb-4 text-neutral-400">Personal Trainer</p>
<span className="text-[10px] uppercase tracking-tighter text-neutral-600">CREF 063417-G/SP</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-900 bg-neutral-950/50">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<span className="text-xs font-medium uppercase tracking-tight mb-4 block text-neutral-500">Dúvidas</span>
<h2 className="text-4xl font-semibold tracking-tighter leading-tight uppercase">Perguntas<br/>Diretas.</h2>
</div>
<div className="space-y-2">
<details className="group border rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden bg-neutral-950 border-neutral-800">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-sm transition-colors text-neutral-100 hover:bg-neutral-900/50">
                        Preciso ter experiência?
                        <iconify-icon className="transition-transform group-open:rotate-180 text-amber-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-2 text-sm leading-relaxed border-t text-neutral-400 border-neutral-800/50">
                        Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual.
                    </div>
</details>
<details className="group border rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden bg-neutral-950 border-neutral-800">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-sm transition-colors text-neutral-100 hover:bg-neutral-900/50">
                        Posso treinar sozinho?
                        <iconify-icon className="transition-transform group-open:rotate-180 text-amber-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-2 text-sm leading-relaxed border-t text-neutral-400 border-neutral-800/50">
                        Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima.
                    </div>
</details>
<details className="group border rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden bg-neutral-950 border-neutral-800">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-sm transition-colors text-neutral-100 hover:bg-neutral-900/50">
                        Como funciona o cancelamento?
                        <iconify-icon className="transition-transform group-open:rotate-180 text-amber-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-2 text-sm leading-relaxed border-t text-neutral-400 border-neutral-800/50">
                        Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória.
                    </div>
</details>
<details className="group border rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden bg-neutral-950 border-neutral-800">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-sm transition-colors text-neutral-100 hover:bg-neutral-900/50">
                        Posso visitar antes de assinar?
                        <iconify-icon className="transition-transform group-open:rotate-180 text-amber-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-2 text-sm leading-relaxed border-t text-neutral-400 border-neutral-800/50">
                        Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-900">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<span className="text-xs font-medium uppercase tracking-tight mb-4 block text-neutral-500">Onde estamos</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-tight uppercase mb-8">No coração<br/>de Indaiatuba.</h2>
<div className="space-y-6 mb-10">
<div className="flex items-start gap-4">
<iconify-icon className="text-xl mt-1 text-amber-500" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-sm font-medium mb-1 text-neutral-100">Endereço</p>
<p className="text-sm text-neutral-400">Rua das Esmeraldas, 742<br/>Jardim Morada do Sol — Indaiatuba, SP<br/>CEP 13.334-210</p>
<p className="text-xs mt-2 text-neutral-500">200m do Carrefour · Próximo à saída SP-075</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-xl mt-1 text-amber-500" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<div className="w-full max-w-xs">
<p className="text-sm font-medium mb-2 text-neutral-100">Horários</p>
<div className="space-y-2 text-xs text-neutral-400">
<div className="flex justify-between border-b pb-1 border-neutral-800/50">
<span>Segunda a Sexta</span><span>05H00 – 23H00</span>
</div>
<div className="flex justify-between border-b pb-1 border-neutral-800/50">
<span>Sábado</span><span>07H00 – 20H00</span>
</div>
<div className="flex justify-between pb-1">
<span>Domingo e Feriados</span><span>08H00 – 14H00</span>
</div>
</div>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-xl mt-1 text-amber-500" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-sm font-medium mb-1 text-neutral-100">Contato</p>
<p className="text-sm text-neutral-400">WhatsApp: (19) 98234-5678</p>
<p className="text-sm text-neutral-400">E-mail: contato@forgee.academy</p>
<p className="text-sm text-neutral-400">Instagram: @forgee.academy</p>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center text-xs font-medium px-6 py-3 rounded-full transition-colors uppercase tracking-tight bg-neutral-100 text-neutral-950 hover:bg-neutral-300" href="#">Falar no WhatsApp</a>
<a className="inline-flex items-center justify-center text-xs font-medium border px-6 py-3 rounded-full transition-colors uppercase tracking-tight border-neutral-800 text-neutral-50 hover:bg-neutral-900" href="#">Como Chegar</a>
</div>
</div>
<div className="border rounded-3xl h-64 lg:h-auto w-full flex items-center justify-center relative overflow-hidden bg-neutral-900/30 border-neutral-800 group">
<img alt="Gym Location" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:opacity-60 transition-opacity duration-500 mix-blend-overlay" src="https://images.unsplash.com/photo-1526506114642-1e967a5bb85c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<iconify-icon className="text-5xl text-neutral-100 z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-500" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</section>

<section className="py-32 border-t relative overflow-hidden flex flex-col items-center text-center border-neutral-900 bg-neutral-950">

<div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-950/10 pointer-events-none"></div>

<div className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden opacity-5 pointer-events-none select-none text-amber-500">
<div className="marquee-container text-[12vw] font-semibold tracking-tighter whitespace-nowrap uppercase">
<span>AGENDE UMA VISITA · GRATUITA · SEM COMPROMISSO · TRAGA TÊNIS · </span>
<span>AGENDE UMA VISITA · GRATUITA · SEM COMPROMISSO · TRAGA TÊNIS · </span>
</div>
</div>
<div className="relative z-10 px-6">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-none mb-10 flex flex-col uppercase">
<span>A decisão</span>
<span>já foi tomada.</span>
<span className="text-amber-500">Agora é a ação.</span>
</h2>
<a className="inline-flex items-center justify-center text-sm font-medium px-10 py-4 rounded-full transition-all uppercase tracking-tight shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)] hover:shadow-[0_0_60px_-15px_rgba(245,158,11,0.5)] bg-amber-500 text-amber-950 hover:bg-amber-400" href="#">Agendar Visita Gratuita</a>
</div>
</section>

<footer className="border-t pt-16 pb-8 px-6 border-neutral-900 bg-neutral-950">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<span className="text-xl font-semibold tracking-tighter uppercase mb-2 text-neutral-50 flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:fire-linear" strokeWidth="1.5"></iconify-icon>
                        FORGEE
                    </span>
<span className="text-xs font-medium uppercase tracking-tight text-neutral-500">Beyond Limits Known™</span>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-tight mb-4 text-neutral-100">Academia</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="transition-colors hover:text-amber-500" href="#espaco">Espaço</a></li>
<li><a className="transition-colors hover:text-amber-500" href="#programas">Programas</a></li>
<li><a className="transition-colors hover:text-amber-500" href="#equipe">Equipe</a></li>
<li><a className="transition-colors hover:text-amber-500" href="#planos">Planos</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-tight mb-4 text-neutral-100">Legal &amp; Redes</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="transition-colors hover:text-neutral-50" href="#">Política de Privacidade</a></li>
<li><a className="transition-colors hover:text-neutral-50" href="#">Termos de Uso</a></li>
<li><a className="transition-colors hover:text-neutral-50" href="#">Informações legais</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-tighter border-neutral-900 text-neutral-600">
<p>FORGEE ACADEMIA LTDA. CNPJ 00.000.000/0001-00 CREF SP</p>
<p>DESIGN SYSTEM © 2026</p>
</div>
</div>
</footer>

    </>
  );
}
