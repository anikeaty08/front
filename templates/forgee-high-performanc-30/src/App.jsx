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
      

<header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 md:px-8 pointer-events-none">
<div className="max-w-7xl mx-auto flex justify-center">
<nav className="bg-[#111111]/80 backdrop-blur-lg border border-[#2E2E2E] rounded-full px-6 py-3 flex justify-between items-center w-full max-w-5xl pointer-events-auto shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
<a className="text-xl md:text-2xl font-semibold tracking-widest text-white uppercase flex items-center gap-2" href="#">
<iconify-icon className="text-[#CFBE00] text-2xl" icon="solar:minimalistic-polygon-linear"></iconify-icon>
                    Forgee
                </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-[#A0A0A0] uppercase tracking-wide">
<a className="hover:text-white transition-colors" href="#espaco">Espaço</a>
<a className="hover:text-white transition-colors" href="#programas">Programas</a>
<a className="hover:text-white transition-colors" href="#equipe">Equipe</a>
<a className="hover:text-white transition-colors" href="#planos">Planos</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-xs font-medium text-white hover:text-[#CFBE00] uppercase tracking-widest transition-colors px-4 py-2" href="#">Sou Membro</a>
<a className="bg-[#CFBE00] text-[#0A0A0A] px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-[#E5D300] hover:shadow-[0_0_20px_rgba(207,190,0,0.25)] transition-all flex items-center gap-2" href="#agendar">
                        Agendar Visita
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<button className="md:hidden text-white p-2 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</nav>
</div>
</header>

<div className="pt-32 pb-8 text-center border-b border-[#1A1A1A] relative z-20">
<p className="text-xs font-light text-[#555555] uppercase tracking-[0.2em]">Beyond Limits Known™ · Indaiatuba, SP · Est. 2018</p>
</div>

<section className="relative pt-20 pb-32 px-4 md:px-8 max-w-7xl mx-auto min-h-[70vh] flex items-center justify-center overflow-hidden rounded-b-3xl">

<div className="absolute inset-0 z-0 bg-noise rounded-b-3xl overflow-hidden">
<img alt="Gym Background" className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-105" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#CFBE00] opacity-[0.03] blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="relative z-10 flex flex-col items-center text-center mt-12">
<h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.95] flex flex-col mb-8 text-[#FFFFFF]">
<span>Sem mágica</span>
<span className="text-[#888888]">Sem atalhos</span>
<span>Sem desculpas</span>
</h1>
<h2 className="text-xl md:text-2xl font-medium text-[#CFBE00] mb-6 tracking-tight">Treinos progressivos e acompanhamento real.</h2>
<p className="text-base md:text-lg font-light text-[#A0A0A0] max-w-2xl mx-auto mb-12 leading-relaxed">
                Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
            </p>
<div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
<a className="w-full sm:w-auto bg-[#CFBE00] text-[#0A0A0A] px-8 py-4 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-[#E5D300] hover:shadow-[0_0_20px_rgba(207,190,0,0.25)] transition-all flex justify-center items-center gap-2" href="#planos">
                    Começar Agora
                </a>
<a className="w-full sm:w-auto bg-[#111111]/50 backdrop-blur-sm text-white border border-[#2E2E2E] px-8 py-4 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-[#1A1A1A] hover:border-[#555555] transition-all flex justify-center items-center" href="#espaco">
                    Conhecer o Espaço
                </a>
</div>
</div>
</section>

<div className="border-b border-[#1A1A1A] bg-[#0A0A0A]">
<div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 text-center divide-x divide-[#1A1A1A] [&amp;&gt;*:first-child]:border-l-0">
<div className="flex flex-col items-center">
<span className="text-xs font-normal text-[#555555] uppercase tracking-widest mb-2">Funcionamento</span>
<span className="text-xl font-medium text-white tracking-tight">05H–23H</span>
</div>
<div className="flex flex-col items-center">
<span className="text-xs font-normal text-[#555555] uppercase tracking-widest mb-2">Dias por semana</span>
<span className="text-xl font-medium text-white tracking-tight">7 DIAS</span>
</div>
<div className="flex flex-col items-center hidden md:flex">
<span className="text-xs font-normal text-[#555555] uppercase tracking-widest mb-2">Área do espaço</span>
<span className="text-xl font-medium text-white tracking-tight">1.800M²</span>
</div>
<div className="flex flex-col items-center">
<span className="text-xs font-normal text-[#555555] uppercase tracking-widest mb-2">Total de alunos</span>
<span className="text-xl font-medium text-white tracking-tight">+1.200 ALUNOS</span>
</div>
<div className="flex flex-col items-center hidden md:flex">
<span className="text-xs font-normal text-[#555555] uppercase tracking-widest mb-2">Fundação</span>
<span className="text-xl font-medium text-white tracking-tight">DESDE 2018</span>
</div>
</div>
</div>
</div>

<section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto" id="espaco">
<div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

<div className="lg:col-span-5 relative">
<div className="sticky top-32">
<span className="text-xs font-normal text-[#CFBE00] uppercase tracking-[0.15em] mb-6 block flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:target-linear"></iconify-icon> Quem somos
                    </span>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.1] mb-8">
                        Forjados<br/>Pela<br/>Disciplina.
                    </h2>
<div className="space-y-6 text-base md:text-lg font-light text-[#A0A0A0] leading-relaxed">
<p>A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.</p>
<p>Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.</p>
<p>Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.</p>
</div>
</div>
</div>

<div className="lg:col-span-7 space-y-16 md:space-y-24">

<div className="w-full aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden bg-noise relative shadow-2xl border border-[#1A1A1A]">
<img alt="Gym Atmosphere" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<blockquote className="pl-6 border-l-2 border-[#CFBE00]">
<p className="text-2xl md:text-3xl font-normal tracking-tight text-white italic">"In silence, the transformation begins."</p>
</blockquote>

<div className="grid sm:grid-cols-3 gap-8">
<div className="space-y-4">
<div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-[#2E2E2E]">
<iconify-icon className="text-xl text-[#CFBE00]" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white uppercase">01 — Intensidade</h3>
<p className="text-sm font-light text-[#A0A0A0]">O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.</p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-[#2E2E2E]">
<iconify-icon className="text-xl text-[#CFBE00]" icon="solar:bullseye-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white uppercase">02 — Precisão</h3>
<p className="text-sm font-light text-[#A0A0A0]">Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.</p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-[#2E2E2E]">
<iconify-icon className="text-xl text-[#CFBE00]" icon="solar:tuning-square-2-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white uppercase">03 — Controle</h3>
<p className="text-sm font-light text-[#A0A0A0]">Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.</p>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-[#111111] border border-[#1A1A1A] p-6 rounded-2xl flex flex-col justify-between aspect-square md:aspect-auto md:h-40">
<span className="text-xs text-[#555555] uppercase tracking-widest">Alunos ativos</span>
<span className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">+1.200</span>
</div>
<div className="bg-[#111111] border border-[#1A1A1A] p-6 rounded-2xl flex flex-col justify-between aspect-square md:aspect-auto md:h-40">
<span className="text-xs text-[#555555] uppercase tracking-widest">Retenção (6m)</span>
<span className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#CFBE00]">94%</span>
</div>
<div className="bg-[#111111] border border-[#1A1A1A] p-6 rounded-2xl flex flex-col justify-between aspect-square md:aspect-auto md:h-40">
<span className="text-xs text-[#555555] uppercase tracking-widest">Em operação</span>
<span className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">8 Anos</span>
</div>
<div className="bg-[#111111] border border-[#1A1A1A] p-6 rounded-2xl flex flex-col justify-between aspect-square md:aspect-auto md:h-40">
<span className="text-xs text-[#555555] uppercase tracking-widest">Área dedicada</span>
<span className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">1.8K M²</span>
</div>
</div>

<div className="space-y-4">
<div className="bg-[#111111] p-8 rounded-2xl border border-[#1A1A1A]">
<p className="text-base font-light text-white mb-6">"Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center text-xs font-medium text-[#A0A0A0]">RM</div>
<div>
<p className="text-sm font-medium text-white uppercase tracking-wide">Rafael M.</p>
<p className="text-xs font-light text-[#555555] uppercase tracking-wider">Engenheiro · Aluno há 3 anos</p>
</div>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="bg-[#111111] p-8 rounded-2xl border border-[#1A1A1A]">
<p className="text-sm font-light text-white mb-6">"Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha."</p>
<div>
<p className="text-xs font-medium text-white uppercase tracking-wide">Juliana T.</p>
<p className="text-[10px] font-light text-[#555555] uppercase tracking-wider mt-1">Professora · Aluna há 2 anos</p>
</div>
</div>
<div className="bg-[#111111] p-8 rounded-2xl border border-[#1A1A1A]">
<p className="text-sm font-light text-white mb-6">"A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado."</p>
<div>
<p className="text-xs font-medium text-white uppercase tracking-wide">Lucas O.</p>
<p className="text-[10px] font-light text-[#555555] uppercase tracking-wider mt-1">Empresário · Aluno há 4 anos</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-t border-[#1A1A1A]">
<div className="max-w-5xl mx-auto px-4 md:px-8">
<div className="text-center mb-16">
<span className="text-xs font-normal text-[#CFBE00] uppercase tracking-[0.15em] mb-4 block">Estrutura</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">Equipamento que não te limita.</h2>
<p className="text-base font-light text-[#A0A0A0] max-w-2xl mx-auto">Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.</p>
</div>

<div className="divide-y divide-[#1A1A1A] border-y border-[#1A1A1A] max-w-4xl mx-auto">
<details className="group bg-transparent open:bg-[#111111] transition-colors" open="">
<summary className="flex justify-between items-center py-6 px-4 cursor-pointer">
<h3 className="text-lg md:text-xl font-medium tracking-tight uppercase text-white group-open:text-[#CFBE00] transition-colors">01 · Cardio &amp; Conditioning</h3>
<div className="relative w-6 h-6 flex items-center justify-center">
<iconify-icon className="absolute text-2xl text-[#555555] group-open:opacity-0 transition-opacity" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="absolute text-2xl text-[#CFBE00] opacity-0 group-open:opacity-100 transition-opacity" icon="solar:minus-circle-linear"></iconify-icon>
</div>
</summary>
<div className="px-4 pb-6 text-sm font-light text-[#A0A0A0]">
<ul className="space-y-4 pt-2">
<li className="flex items-center justify-between border-b border-[#1A1A1A] pb-2">
<span>Assault Bike Concept2</span>
<span className="text-xs font-medium text-white bg-[#1A1A1A] px-2 py-1 rounded">8 UNIDADES</span>
</li>
<li className="flex items-center justify-between border-b border-[#1A1A1A] pb-2">
<span>Remo Concept2 Model D</span>
<span className="text-xs font-medium text-white bg-[#1A1A1A] px-2 py-1 rounded">6 UNIDADES</span>
</li>
<li className="flex items-center justify-between border-b border-[#1A1A1A] pb-2">
<span>SkiErg Concept2</span>
<span className="text-xs font-medium text-white bg-[#1A1A1A] px-2 py-1 rounded">4 UNIDADES</span>
</li>
<li className="flex items-center justify-between border-b border-[#1A1A1A] pb-2">
<span>Esteiras NordicTrack com inclinação negativa</span>
</li>
<li className="flex items-center justify-between">
<span>Cordas de batalha 15m e 20m</span>
</li>
</ul>
</div>
</details>
<details className="group bg-transparent open:bg-[#111111] transition-colors">
<summary className="flex justify-between items-center py-6 px-4 cursor-pointer">
<h3 className="text-lg md:text-xl font-medium tracking-tight uppercase text-white group-open:text-[#CFBE00] transition-colors">02 · Força Livre</h3>
<div className="relative w-6 h-6 flex items-center justify-center">
<iconify-icon className="absolute text-2xl text-[#555555] group-open:opacity-0 transition-opacity" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="absolute text-2xl text-[#CFBE00] opacity-0 group-open:opacity-100 transition-opacity" icon="solar:minus-circle-linear"></iconify-icon>
</div>
</summary>
<div className="px-4 pb-6 text-sm font-light text-[#A0A0A0]">
<p className="pt-2">Racks de agachamento Rogue, plataformas de LPO isoladas, anilhas olímpicas calibradas e dumbells hexagonais até 60kg.</p>
</div>
</details>
<details className="group bg-transparent open:bg-[#111111] transition-colors">
<summary className="flex justify-between items-center py-6 px-4 cursor-pointer">
<h3 className="text-lg md:text-xl font-medium tracking-tight uppercase text-white group-open:text-[#CFBE00] transition-colors">03 · Máquinas</h3>
<div className="relative w-6 h-6 flex items-center justify-center">
<iconify-icon className="absolute text-2xl text-[#555555] group-open:opacity-0 transition-opacity" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="absolute text-2xl text-[#CFBE00] opacity-0 group-open:opacity-100 transition-opacity" icon="solar:minus-circle-linear"></iconify-icon>
</div>
</summary>
<div className="px-4 pb-6 text-sm font-light text-[#A0A0A0]">
<p className="pt-2">Circuito completo articulado convergente. Biomecânica precisa para isolamento muscular sem comprometer articulações.</p>
</div>
</details>
<details className="group bg-transparent open:bg-[#111111] transition-colors">
<summary className="flex justify-between items-center py-6 px-4 cursor-pointer">
<h3 className="md:text-xl uppercase group-open:text-[#CFBE00] transition-colors text-lg font-medium text-white tracking-tight">04 · Funcional &amp; Mobility</h3>
<div className="relative w-6 h-6 flex items-center justify-center">
<iconify-icon className="absolute text-2xl text-[#555555] group-open:opacity-0 transition-opacity" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="absolute text-2xl text-[#CFBE00] opacity-0 group-open:opacity-100 transition-opacity" icon="solar:minus-circle-linear"></iconify-icon>
</div>
</summary>
<div className="px-4 pb-6 text-sm font-light text-[#A0A0A0]">
<p className="pt-2">Área livre com piso absorvente, kettlebells de competição, caixas pliométricas macias e acessórios completos para mobilidade e liberação miofascial.</p>
</div>
</details>
<details className="group bg-transparent open:bg-[#111111] transition-colors">
<summary className="flex justify-between items-center py-6 px-4 cursor-pointer">
<h3 className="text-lg md:text-xl font-medium tracking-tight uppercase text-white group-open:text-[#CFBE00] transition-colors">05 · Infraestrutura</h3>
<div className="relative w-6 h-6 flex items-center justify-center">
<iconify-icon className="absolute text-2xl text-[#555555] group-open:opacity-0 transition-opacity" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="absolute text-2xl text-[#CFBE00] opacity-0 group-open:opacity-100 transition-opacity" icon="solar:minus-circle-linear"></iconify-icon>
</div>
</summary>
<div className="px-4 pb-6 text-sm font-light text-[#A0A0A0]">
<p className="pt-2">Vestiários privativos padrão hotel, climatização dimensionada para treinos intensos, bebedouros de alta vazão e iluminação focada em zonas de treino.</p>
</div>
</details>
</div>
</div>
</section>

<section className="md:py-32 md:px-8 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4" id="programas">
<div className="mb-16">
<span className="text-xs font-normal text-[#CFBE00] uppercase tracking-[0.15em] mb-4 block">O que oferecemos</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter w-full max-w-2xl">Um protocolo para cada objetivo.</h2>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-[#111111] border border-[#1A1A1A] p-8 md:p-10 rounded-[24px] hover:border-[#2E2E2E] transition-colors group flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl font-medium uppercase tracking-tight text-white">Forgee<br/>Strength</h3>
<div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#555555] group-hover:bg-white group-hover:text-[#0A0A0A] transition-all">
<iconify-icon className="text-2xl" icon="solar:dumbbell-linear"></iconify-icon>
</div>
</div>
<p className="text-sm font-light text-[#A0A0A0] mb-8 leading-relaxed">
                        Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.
                    </p>
</div>
<div className="space-y-3 pt-6 border-t border-[#1A1A1A]">
<div className="flex justify-between text-xs uppercase tracking-wider">
<span className="text-[#555555]">Para quem é</span>
<span className="text-white text-right max-w-[60%]">Iniciantes a avançados em hipertrofia e força.</span>
</div>
<div className="flex justify-between text-xs uppercase tracking-wider">
<span className="text-[#555555]">Frequência</span>
<span className="text-white text-right">3–5× por semana.</span>
</div>
</div>
</div>

<div className="bg-[#1A1A1A] border border-[#CFBE00] rounded-[24px] shadow-[0_0_40px_rgba(207,190,0,0.1)] relative overflow-hidden group flex flex-col justify-between">

<div className="absolute inset-0 z-0 bg-noise opacity-40">
<img className="w-full h-full object-cover mix-blend-luminosity" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-[#111111]/90 to-[#111111]/70 z-0"></div>
<div className="absolute top-0 right-0 px-4 py-1 bg-[#CFBE00] text-[#0A0A0A] text-[10px] font-bold uppercase tracking-widest rounded-bl-xl z-10">Destaque</div>
<div className="relative z-10 p-8 md:p-10 flex flex-col h-full justify-between">
<div>
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl font-medium uppercase tracking-tight text-[#CFBE00]">Forgee<br/>Conditioning</h3>
<div className="w-12 h-12 rounded-full bg-[#CFBE00]/10 flex items-center justify-center text-[#CFBE00]">
<iconify-icon className="text-2xl" icon="solar:fire-linear"></iconify-icon>
</div>
</div>
<p className="text-sm font-light text-[#D4D4D4] mb-8 leading-relaxed">
                            Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.
                        </p>
</div>
<div className="space-y-3 pt-6 border-t border-[#333333]">
<div className="flex justify-between text-xs uppercase tracking-wider">
<span className="text-[#A0A0A0]">Para quem é</span>
<span className="text-white text-right max-w-[60%]">Condicionamento, perda de gordura.</span>
</div>
<div className="flex justify-between text-xs uppercase tracking-wider">
<span className="text-[#A0A0A0]">Turmas</span>
<span className="text-white text-right">06H · 07H · 12H · 18H · 19H30</span>
</div>
</div>
</div>
</div>

<div className="bg-[#111111] border border-[#1A1A1A] p-8 md:p-10 rounded-[24px] hover:border-[#2E2E2E] transition-colors group flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl font-medium uppercase tracking-tight text-white">Forgee<br/>Mobility</h3>
<div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#555555] group-hover:bg-white group-hover:text-[#0A0A0A] transition-all">
<iconify-icon className="text-2xl" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
</div>
<p className="text-sm font-light text-[#A0A0A0] leading-relaxed">
                        Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.
                    </p>
</div>
</div>

<div className="bg-[#111111] border border-[#1A1A1A] p-8 md:p-10 rounded-[24px] hover:border-[#2E2E2E] transition-colors group flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl font-medium uppercase tracking-tight text-white">Personal<br/>Training</h3>
<div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#555555] group-hover:bg-white group-hover:text-[#0A0A0A] transition-all">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
</div>
<p className="text-sm font-light text-[#A0A0A0] leading-relaxed">
                        Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#111111] border-y border-[#1A1A1A]" id="planos">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="text-center mb-16">
<span className="text-xs font-normal text-[#CFBE00] uppercase tracking-[0.15em] mb-4 block">Investimento</span>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 leading-none">Sem matrícula.<br/>Sem fidelidade.<br/>Sem enrolação.</h2>
<p className="text-base font-light text-[#A0A0A0]">Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-[24px] p-8 flex flex-col h-full">
<h3 className="text-xl font-medium uppercase tracking-tight text-white mb-2">Livre</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-sm text-[#555555] font-medium tracking-wide">R$</span>
<span className="text-4xl font-semibold tracking-tighter text-white">149</span>
<span className="text-xs text-[#555555] uppercase tracking-widest">/mês</span>
</div>
<ul className="space-y-4 text-sm font-light text-[#A0A0A0] mb-10 flex-grow">
<li className="flex items-start gap-3 text-white"><iconify-icon className="text-lg text-[#CFBE00] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Acesso ilimitado 05H–23H</li>
<li className="flex items-start gap-3 text-white"><iconify-icon className="text-lg text-[#CFBE00] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Avaliação física de entrada</li>
<li className="flex items-start gap-3 text-white"><iconify-icon className="text-lg text-[#CFBE00] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Planilha de treino inicial</li>
<li className="flex items-start gap-3 text-white"><iconify-icon className="text-lg text-[#CFBE00] shrink-0" icon="solar:check-circle-linear"></iconify-icon> App FORGEE</li>
</ul>
<button className="w-full bg-[#1A1A1A] text-white py-4 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-[#222] border border-[#2E2E2E] transition-colors">
                        Quero Esse Plano
                    </button>
</div>

<div className="bg-[#1A1A1A] border border-[#CFBE00] rounded-[24px] p-8 shadow-[0_0_40px_rgba(207,190,0,0.1)] relative flex flex-col h-full lg:scale-105 z-10">
<div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
<span className="bg-[#CFBE00] text-[#0A0A0A] text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">Mais Escolhido</span>
</div>
<h3 className="text-xl font-medium uppercase tracking-tight text-[#CFBE00] mb-2">Plus</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-sm text-[#555555] font-medium tracking-wide">R$</span>
<span className="text-5xl font-semibold tracking-tighter text-white">229</span>
<span className="text-xs text-[#555555] uppercase tracking-widest">/mês</span>
</div>
<ul className="space-y-4 text-sm font-light text-[#D4D4D4] mb-10 flex-grow">
<li className="flex items-start gap-3 text-white"><iconify-icon className="text-lg text-[#CFBE00] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Tudo do plano Livre</li>
<li className="flex items-start gap-3 text-white"><iconify-icon className="text-lg text-[#CFBE00] shrink-0" icon="solar:check-circle-linear"></iconify-icon> 2 sessões de Personal/mês</li>
<li className="flex items-start gap-3 text-white"><iconify-icon className="text-lg text-[#CFBE00] shrink-0" icon="solar:check-circle-linear"></iconify-icon> 1 aula Conditioning/semana</li>
<li className="flex items-start gap-3 text-white"><iconify-icon className="text-lg text-[#CFBE00] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Revisão de planilha (4 semanas)</li>
<li className="flex items-start gap-3 text-white"><iconify-icon className="text-lg text-[#CFBE00] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Acesso ao Mobility</li>
</ul>
<button className="w-full bg-[#CFBE00] text-[#0A0A0A] py-4 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-[#E5D300] hover:shadow-[0_0_20px_rgba(207,190,0,0.25)] transition-all">
                        Quero Esse Plano
                    </button>
</div>

<div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-[24px] p-8 flex flex-col h-full">
<h3 className="text-xl font-medium uppercase tracking-tight text-white mb-2">Elite</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-sm text-[#555555] font-medium tracking-wide">R$</span>
<span className="text-4xl font-semibold tracking-tighter text-white">389</span>
<span className="text-xs text-[#555555] uppercase tracking-widest">/mês</span>
</div>
<ul className="space-y-4 text-sm font-light text-[#A0A0A0] mb-10 flex-grow">
<li className="flex items-start gap-3 text-white"><iconify-icon className="text-lg text-[#CFBE00] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Tudo do plano Plus</li>
<li className="flex items-start gap-3 text-white"><iconify-icon className="text-lg text-[#CFBE00] shrink-0" icon="solar:check-circle-linear"></iconify-icon> 4 sessões de Personal/mês</li>
<li className="flex items-start gap-3 text-white"><iconify-icon className="text-lg text-[#CFBE00] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Acesso ilimitado a classes</li>
<li className="flex items-start gap-3 text-white"><iconify-icon className="text-lg text-[#CFBE00] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Bioimpedância mensal</li>
<li className="flex items-start gap-3 text-white"><iconify-icon className="text-lg text-[#CFBE00] shrink-0" icon="solar:check-circle-linear"></iconify-icon> WhatsApp com coach dedicado</li>
</ul>
<button className="w-full bg-[#1A1A1A] text-white py-4 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-[#222] border border-[#2E2E2E] transition-colors">
                        Quero Esse Plano
                    </button>
</div>
</div>
<div className="mt-12 text-center max-w-2xl mx-auto space-y-6">
<p className="text-xs font-light text-[#555555] tracking-wide">Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto</p>
<div className="inline-flex items-center gap-4 bg-[#0A0A0A] border border-[#1A1A1A] rounded-full p-2 pr-6">
<span className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-xs font-medium tracking-widest uppercase">Diária: R$ 39</span>
<span className="text-xs font-light text-[#A0A0A0]">Acesso por 1 dia</span>
<a className="text-xs font-medium text-[#CFBE00] uppercase tracking-widest ml-4 hover:underline" href="#">Agendar</a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto" id="equipe">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div>
<span className="text-xs font-normal text-[#CFBE00] uppercase tracking-[0.15em] mb-4 block">Quem te acompanha</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter">Coaches que treinam.</h2>
</div>
<p className="text-base font-light text-[#A0A0A0] max-w-md md:text-right">Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-[#111111] rounded-2xl border border-[#1A1A1A] mb-4 relative overflow-hidden flex items-center justify-center bg-noise group-hover:border-[#2E2E2E] transition-colors">
<img alt="Coach Rodrigo" className="w-full h-full object-cover mix-blend-luminosity opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
</div>
<h3 className="text-sm font-medium uppercase tracking-wide text-white">Rodrigo Farias</h3>
<p className="text-xs font-normal text-[#CFBE00] uppercase tracking-wider mt-1">Head Coach</p>
<p className="text-[10px] font-light text-[#555555] uppercase tracking-widest mt-1">CREF 045821-G/SP</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-[#111111] rounded-2xl border border-[#1A1A1A] mb-4 relative overflow-hidden flex items-center justify-center bg-noise group-hover:border-[#2E2E2E] transition-colors">
<img alt="Coach Ana" className="w-full h-full object-cover mix-blend-luminosity opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
</div>
<h3 className="text-sm font-medium uppercase tracking-wide text-white">Ana Luísa</h3>
<p className="text-xs font-normal text-[#CFBE00] uppercase tracking-wider mt-1">Conditioning</p>
<p className="text-[10px] font-light text-[#555555] uppercase tracking-widest mt-1">CREF 078342-G/SP</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-[#111111] rounded-2xl border border-[#1A1A1A] mb-4 relative overflow-hidden flex items-center justify-center bg-noise group-hover:border-[#2E2E2E] transition-colors">
<img alt="Coach Bruno" className="w-full h-full object-cover mix-blend-luminosity opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
</div>
<h3 className="text-sm font-medium uppercase tracking-wide text-white">Bruno T.</h3>
<p className="text-xs font-normal text-[#CFBE00] uppercase tracking-wider mt-1">Mobility &amp; Rehab</p>
<p className="text-[10px] font-light text-[#555555] uppercase tracking-widest mt-1">CREF 091205-G/SP</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-[#111111] rounded-2xl border border-[#1A1A1A] mb-4 relative overflow-hidden flex items-center justify-center bg-noise group-hover:border-[#2E2E2E] transition-colors">
<img alt="Coach Camila" className="w-full h-full object-cover mix-blend-luminosity opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
</div>
<h3 className="text-sm font-medium uppercase tracking-wide text-white">Camila D.</h3>
<p className="text-xs font-normal text-[#CFBE00] uppercase tracking-wider mt-1">Personal Trainer</p>
<p className="text-[10px] font-light text-[#555555] uppercase tracking-widest mt-1">CREF 063417-G/SP</p>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-t border-[#1A1A1A]">
<div className="max-w-3xl mx-auto px-4 md:px-8">
<div className="mb-12">
<span className="text-xs font-normal text-[#CFBE00] uppercase tracking-[0.15em] mb-4 block">Dúvidas</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter">Perguntas diretas.</h2>
</div>
<div className="divide-y divide-[#1A1A1A]">
<details className="group py-6" open="">
<summary className="flex justify-between items-center cursor-pointer">
<h3 className="text-lg font-medium tracking-tight text-white group-hover:text-[#CFBE00] transition-colors">Preciso ter experiência?</h3>
<iconify-icon className="text-xl text-[#555555] group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="pt-4 text-base font-light text-[#A0A0A0] leading-relaxed">
                        Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual.
                    </p>
</details>
<details className="group py-6">
<summary className="flex justify-between items-center cursor-pointer">
<h3 className="text-lg font-medium tracking-tight text-white group-hover:text-[#CFBE00] transition-colors">Posso treinar sozinho?</h3>
<iconify-icon className="text-xl text-[#555555] group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="pt-4 text-base font-light text-[#A0A0A0] leading-relaxed">
                        Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima.
                    </p>
</details>
<details className="group py-6">
<summary className="flex justify-between items-center cursor-pointer">
<h3 className="text-lg font-medium tracking-tight text-white group-hover:text-[#CFBE00] transition-colors">Como funciona o cancelamento?</h3>
<iconify-icon className="text-xl text-[#555555] group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="pt-4 text-base font-light text-[#A0A0A0] leading-relaxed">
                        Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória.
                    </p>
</details>
<details className="group py-6">
<summary className="flex justify-between items-center cursor-pointer">
<h3 className="text-lg font-medium tracking-tight text-white group-hover:text-[#CFBE00] transition-colors">Posso visitar antes de assinar?</h3>
<iconify-icon className="text-xl text-[#555555] group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="pt-4 text-base font-light text-[#A0A0A0] leading-relaxed">
                        Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 bg-[#111111] border-y border-[#1A1A1A]">
<div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
<div>
<span className="text-xs font-normal text-[#CFBE00] uppercase tracking-[0.15em] mb-4 block">Onde estamos</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-12 leading-[1.1]">No coração de Indaiatuba.</h2>
<div className="space-y-8">
<div>
<div className="flex items-start gap-4 text-[#A0A0A0]">
<iconify-icon className="text-xl text-[#CFBE00] shrink-0 mt-1" icon="solar:map-point-linear"></iconify-icon>
<div>
<p className="text-base font-medium text-white mb-1">Rua das Esmeraldas, 742</p>
<p className="text-sm font-light">Jardim Morada do Sol<br/>Indaiatuba, SP<br/>CEP 13.334-210</p>
<p className="text-xs font-light text-[#555555] mt-2 italic">200m do Carrefour · Próximo à saída SP-075</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 border-t border-[#1A1A1A] pt-8">
<div>
<span className="text-[10px] font-normal text-[#555555] uppercase tracking-widest block mb-2">Horários</span>
<ul className="text-sm font-light text-white space-y-2">
<li className="flex justify-between border-b border-[#1A1A1A] pb-1"><span className="text-[#A0A0A0]">Seg a Sex</span> 05H–23H</li>
<li className="flex justify-between border-b border-[#1A1A1A] pb-1"><span className="text-[#A0A0A0]">Sábado</span> 07H–20H</li>
<li className="flex justify-between pb-1"><span className="text-[#A0A0A0]">Dom/Feriado</span> 08H–14H</li>
</ul>
</div>
<div>
<span className="text-[10px] font-normal text-[#555555] uppercase tracking-widest block mb-2">Contato</span>
<ul className="text-sm font-light text-white space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-sm text-[#555555]" icon="solar:smartphone-linear"></iconify-icon> (19) 98234-5678</li>
<li className="flex items-center gap-2"><iconify-icon className="text-sm text-[#555555]" icon="solar:letter-linear"></iconify-icon> contato@forgee</li>
<li className="flex items-center gap-2"><iconify-icon className="text-sm text-[#555555]" icon="solar:camera-linear"></iconify-icon> @forgee.academy</li>
</ul>
</div>
</div>
<div className="flex gap-4 pt-4">
<a className="bg-[#1A1A1A] text-white px-6 py-3 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-[#222] border border-[#2E2E2E] transition-colors flex items-center gap-2" href="#">
<iconify-icon className="text-lg text-[#CFBE00]" icon="solar:chat-line-linear"></iconify-icon> WhatsApp
                        </a>
<a className="bg-transparent text-white border border-[#2E2E2E] px-6 py-3 rounded-full text-xs font-medium uppercase tracking-widest hover:border-[#555555] transition-colors flex items-center gap-2" href="#">
<iconify-icon className="text-lg text-[#555555]" icon="solar:routing-linear"></iconify-icon> Rota
                        </a>
</div>
</div>
</div>

<div className="aspect-square md:aspect-[4/3] bg-[#0A0A0A] border border-[#1A1A1A] rounded-3xl relative overflow-hidden flex items-center justify-center group bg-noise shadow-2xl">
<img alt="Gym Location" className="w-full h-full object-cover opacity-50 mix-blend-luminosity" src="https://images.unsplash.com/photo-1593079831268-3381b0c1239b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0A0A0A]/40 mix-blend-overlay pointer-events-none"></div>
<div className="w-16 h-16 rounded-full bg-[#CFBE00]/20 flex items-center justify-center relative z-10 backdrop-blur-md border border-[#CFBE00]/50">
<div className="w-4 h-4 bg-[#CFBE00] rounded-full shadow-[0_0_20px_rgba(207,190,0,0.8)]"></div>
</div>
</div>
</div>
</section>

<section className="bg-[#CFBE00] overflow-hidden" id="agendar">

<div className="border-b border-[#0A0A0A]/10 py-3 relative flex overflow-x-hidden group">
<div className="animate-marquee whitespace-nowrap flex items-center gap-8">
<span className="text-sm font-bold text-[#0A0A0A] uppercase tracking-[0.3em]">A G E N D E U M A V I S I T A · G R A T U I T A · S E M C O M P R O M I S S O · T R A G A T Ê N I S .</span>
<span className="text-sm font-bold text-[#0A0A0A] uppercase tracking-[0.3em]">A G E N D E U M A V I S I T A · G R A T U I T A · S E M C O M P R O M I S S O · T R A G A T Ê N I S .</span>
<span className="text-sm font-bold text-[#0A0A0A] uppercase tracking-[0.3em]">A G E N D E U M A V I S I T A · G R A T U I T A · S E M C O M P R O M I S S O · T R A G A T Ê N I S .</span>
<span className="text-sm font-bold text-[#0A0A0A] uppercase tracking-[0.3em]">A G E N D E U M A V I S I T A · G R A T U I T A · S E M C O M P R O M I S S O · T R A G A T Ê N I S .</span>
</div>
</div>
<div className="py-24 md:py-32 px-4 md:px-8 text-center flex flex-col items-center">
<h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#0A0A0A] mb-12 leading-[0.95]">A decisão já foi tomada.<br/>Agora é a ação.</h2>
<a className="bg-[#0A0A0A] text-white px-10 py-5 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-[#1A1A1A] hover:scale-105 transition-all flex items-center gap-3 group shadow-2xl" href="#">
                Agendar Visita Gratuita
                <iconify-icon className="text-xl text-[#CFBE00] group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<footer className="bg-[#0A0A0A] pt-20 pb-8 px-4 md:px-8 border-t border-[#1A1A1A]">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<a className="text-2xl font-semibold tracking-widest text-white uppercase flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-[#CFBE00] text-2xl" icon="solar:minimalistic-polygon-linear"></iconify-icon>
                        Forgee
                    </a>
<p className="text-xs font-light text-[#555555] uppercase tracking-[0.2em]">Beyond Limits Known™</p>
</div>
<div>
<h4 className="text-xs font-medium text-white uppercase tracking-widest mb-6">Academia</h4>
<ul className="space-y-4 text-sm font-light text-[#A0A0A0]">
<li><a className="hover:text-[#CFBE00] transition-colors" href="#espaco">Espaço</a></li>
<li><a className="hover:text-[#CFBE00] transition-colors" href="#programas">Programas</a></li>
<li><a className="hover:text-[#CFBE00] transition-colors" href="#equipe">Equipe</a></li>
<li><a className="hover:text-[#CFBE00] transition-colors" href="#planos">Planos</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white uppercase tracking-widest mb-6">Legal &amp; Redes</h4>
<ul className="space-y-4 text-sm font-light text-[#A0A0A0]">
<li><a className="hover:text-white transition-colors" href="#">Política de Privacidade</a></li>
<li><a className="hover:text-white transition-colors" href="#">Termos de Uso</a></li>
<li className="pt-4"><a className="text-white hover:text-[#CFBE00] transition-colors flex items-center gap-2 uppercase tracking-widest text-xs" href="#"><iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon> Instagram</a></li>
</ul>
</div>
</div>
<div className="border-t border-[#1A1A1A] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] font-light text-[#555555] tracking-widest uppercase text-center md:text-left">
                    Forgee Academia LTDA. · CNPJ 00.000.000/0001-00 · CREF SP
                </p>
<p className="text-[10px] font-light text-[#555555] tracking-widest uppercase">
                    Design System © 2026
                </p>
</div>
</div>
</footer>

    </>
  );
}
