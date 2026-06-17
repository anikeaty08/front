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
      

<div className="fixed top-0 left-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_#B22A001A_0%,_transparent_60%)] pointer-events-none -z-10"></div>

<header className="sticky top-0 w-full z-50 bg-[#111111]/95 backdrop-blur-md border-b border-[#2A2A2A]">
<div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-20">

<a className="text-2xl font-extrabold tracking-tighter uppercase text-white hover:text-[#E8400A] transition-colors" href="#">
                FORGEE
            </a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-normal tracking-[0.10em] uppercase text-[#B0B0B0] hover:text-white transition-colors" href="#espaco">Espaço</a>
<a className="text-sm font-normal tracking-[0.10em] uppercase text-[#B0B0B0] hover:text-white transition-colors" href="#programas">Programas</a>
<a className="text-sm font-normal tracking-[0.10em] uppercase text-[#B0B0B0] hover:text-white transition-colors" href="#equipe">Equipe</a>
<a className="text-sm font-normal tracking-[0.10em] uppercase text-[#B0B0B0] hover:text-white transition-colors" href="#planos">Planos</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-normal tracking-[0.10em] uppercase text-white hover:text-[#E8400A] transition-colors" href="#">
                    Sou Membro
                </a>
<a className="inline-flex items-center justify-center px-6 py-3 bg-[#E8400A] text-white text-sm font-normal tracking-[0.10em] uppercase hover:bg-[#FF4D0D] transition-colors rounded-none" href="#contato">
                    Agendar Visita
                </a>
</div>

<button className="lg:hidden text-white p-2">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>

<div className="bg-[#1E1E1E] py-2 border-b border-[#2A2A2A]">
<div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center flex justify-center">
<p className="text-xs font-normal tracking-[0.14em] uppercase text-[#6B6B6B]">
                    Beyond Limits Known™ <span className="mx-2">·</span> Indaiatuba, SP <span className="mx-2">·</span> Est. 2018
                </p>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative pt-24 pb-16 md:pt-40 md:pb-32 px-6 md:px-12 max-w-[1440px] mx-auto flex flex-col">
<div className="max-w-4xl">
<h1 className="text-6xl md:text-8xl lg:text-[120px] leading-[0.9] font-extrabold tracking-tighter uppercase mb-6 flex flex-col">
<span className="text-white">SEM MÁGICA</span>
<span className="text-white">SEM ATALHOS</span>
<span className="text-[#E8400A]">SEM DESCULPAS</span>
</h1>
<p className="text-xl md:text-2xl font-light text-[#D9D9D9] mb-4 tracking-tight">
                    Treinos progressivos e acompanhamento real!
                </p>
<p className="text-base md:text-lg font-light text-[#B0B0B0] max-w-2xl mb-12">
                    Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 bg-[#E8400A] text-white text-sm font-normal tracking-[0.14em] uppercase hover:bg-[#FF4D0D] transition-colors rounded-none" href="#planos">
                        Começar Agora
                    </a>
<a className="inline-flex items-center justify-center px-8 py-4 border border-[#6B6B6B] text-white text-sm font-normal tracking-[0.14em] uppercase hover:border-white hover:text-white transition-colors rounded-none bg-transparent" href="#espaco">
                        Conhecer o Espaço
                    </a>
</div>
</div>
</section>

<div className="border-y border-[#2A2A2A] bg-[#1E1E1E]">
<div className="max-w-[1440px] mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#2A2A2A]">
<div className="flex-1 px-6 py-6 flex flex-col gap-1">
<span className="text-sm font-light text-[#6B6B6B]">Horário de funcionamento</span>
<span className="text-lg font-semibold tracking-tight uppercase">05H–23H</span>
</div>
<div className="flex-1 px-6 py-6 flex flex-col gap-1">
<span className="text-sm font-light text-[#6B6B6B]">Dias por semana</span>
<span className="text-lg font-semibold tracking-tight uppercase">7 DIAS</span>
</div>
<div className="flex-1 px-6 py-6 flex flex-col gap-1">
<span className="text-sm font-light text-[#6B6B6B]">Área do espaço</span>
<span className="text-lg font-semibold tracking-tight uppercase">1.800M²</span>
</div>
<div className="flex-1 px-6 py-6 flex flex-col gap-1">
<span className="text-sm font-light text-[#6B6B6B]">Total de alunos</span>
<span className="text-lg font-semibold tracking-tight uppercase">+1.200 ALUNOS</span>
</div>
<div className="flex-1 px-6 py-6 flex flex-col gap-1">
<span className="text-sm font-light text-[#6B6B6B]">Ano de fundação</span>
<span className="text-lg font-semibold tracking-tight uppercase">DESDE 2018</span>
</div>
</div>
</div>

<section className="py-24 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto" id="espaco">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
<div className="lg:w-1/3">
<span className="block text-sm font-normal tracking-[0.14em] uppercase text-[#E8400A] mb-6">Quem somos</span>
<h2 className="text-5xl md:text-[72px] leading-[1] font-semibold tracking-tighter uppercase mb-8">
                        FORJADOS<br/>PELA<br/>DISCIPLINA.
                    </h2>
</div>
<div className="lg:w-2/3 flex flex-col gap-8">
<p className="text-lg md:text-xl font-light text-white leading-relaxed">
                        A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.
                    </p>
<p className="text-base md:text-lg font-light text-[#B0B0B0] leading-relaxed">
                        Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
                    </p>
<div className="pl-6 border-l-2 border-[#E8400A] my-4">
<p className="text-xl md:text-2xl font-light italic text-white tracking-tight">
                            "In silence, the transformation begins."
                        </p>
</div>
<p className="text-base md:text-lg font-light text-[#B0B0B0] leading-relaxed">
                        Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
<div className="bg-[#1E1E1E] p-8 border border-[#2A2A2A] rounded">
<h3 className="text-2xl font-medium tracking-tight uppercase mb-4 text-white">01 — Intensidade</h3>
<p className="text-base font-light text-[#B0B0B0]">O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.</p>
</div>
<div className="bg-[#1E1E1E] p-8 border border-[#2A2A2A] rounded">
<h3 className="text-2xl font-medium tracking-tight uppercase mb-4 text-white">02 — Precisão</h3>
<p className="text-base font-light text-[#B0B0B0]">Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.</p>
</div>
<div className="bg-[#1E1E1E] p-8 border border-[#2A2A2A] rounded relative overflow-hidden group">
<div className="absolute inset-0 bg-[#E8400A] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
<h3 className="text-2xl font-medium tracking-tight uppercase mb-4 text-[#E8400A]">03 — Controle</h3>
<p className="text-base font-light text-[#B0B0B0]">Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.</p>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-[#2A2A2A]">
<div>
<span className="block text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-2">+1.200</span>
<span className="text-sm font-normal tracking-[0.10em] uppercase text-[#6B6B6B]">Alunos ativos</span>
</div>
<div>
<span className="block text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-2">94%</span>
<span className="text-sm font-normal tracking-[0.10em] uppercase text-[#6B6B6B]">Retenção em 6 meses</span>
</div>
<div>
<span className="block text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-2">8 anos</span>
<span className="text-sm font-normal tracking-[0.10em] uppercase text-[#6B6B6B]">Em operação</span>
</div>
<div>
<span className="block text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-2">1.8K M²</span>
<span className="text-sm font-normal tracking-[0.10em] uppercase text-[#6B6B6B]">Área dedicada</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
<div className="flex flex-col justify-between bg-[#111111] border border-[#2A2A2A] p-8 rounded hover:border-[#6B6B6B] transition-colors">
<p className="text-base font-light text-[#D9D9D9] mb-8 italic">"Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas."</p>
<div>
<span className="block text-lg font-medium text-white tracking-tight">Rafael M.</span>
<span className="block text-sm font-light text-[#6B6B6B]">Engenheiro · Aluno há 3 anos</span>
</div>
</div>
<div className="flex flex-col justify-between bg-[#111111] border border-[#2A2A2A] p-8 rounded hover:border-[#6B6B6B] transition-colors">
<p className="text-base font-light text-[#D9D9D9] mb-8 italic">"Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha."</p>
<div>
<span className="block text-lg font-medium text-white tracking-tight">Juliana T.</span>
<span className="block text-sm font-light text-[#6B6B6B]">Professora · Aluna há 2 anos</span>
</div>
</div>
<div className="flex flex-col justify-between bg-[#111111] border border-[#2A2A2A] p-8 rounded hover:border-[#6B6B6B] transition-colors">
<p className="text-base font-light text-[#D9D9D9] mb-8 italic">"A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado."</p>
<div>
<span className="block text-lg font-medium text-white tracking-tight">Lucas O.</span>
<span className="block text-sm font-light text-[#6B6B6B]">Empresário · Aluno há 4 anos</span>
</div>
</div>
</div>
</section>

<section className="bg-[#1E1E1E] py-24 md:py-32 px-6 md:px-12 border-y border-[#2A2A2A]">
<div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
<div className="lg:w-1/3">
<span className="block text-sm font-normal tracking-[0.14em] uppercase text-[#E8400A] mb-6">Estrutura</span>
<h2 className="text-4xl md:text-6xl leading-[1.05] font-semibold tracking-tighter uppercase mb-6 text-white">
                        EQUIPAMENTO<br/>QUE NÃO TE<br/>LIMITA.
                    </h2>
<p className="text-base md:text-lg font-light text-[#B0B0B0]">
                        Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.
                    </p>
</div>
<div className="lg:w-2/3 flex flex-col">

<details className="group border-b border-[#2A2A2A]" open="">
<summary className="flex justify-between items-center py-6 cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#E8400A]">
<span className="text-xl font-medium tracking-tight uppercase text-white group-hover:text-[#E8400A] transition-colors">01 · CARDIO &amp; CONDITIONING</span>
<span className="text-[#6B6B6B] group-hover:text-white transition-colors">
<i className="w-6 h-6 transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="pb-8 pl-4 md:pl-8">
<ul className="flex flex-col gap-4">
<li className="flex items-start md:items-center justify-between gap-4 text-base font-light text-[#B0B0B0] flex-col md:flex-row">
<span>Assault Bike Concept2</span>
<span className="text-sm font-normal tracking-[0.10em] uppercase text-white bg-[#111111] px-2 py-1 rounded-sm border border-[#2A2A2A]">8 Unidades</span>
</li>
<li className="flex items-start md:items-center justify-between gap-4 text-base font-light text-[#B0B0B0] flex-col md:flex-row">
<span>Remo Concept2 Model D</span>
<span className="text-sm font-normal tracking-[0.10em] uppercase text-white bg-[#111111] px-2 py-1 rounded-sm border border-[#2A2A2A]">6 Unidades</span>
</li>
<li className="flex items-start md:items-center justify-between gap-4 text-base font-light text-[#B0B0B0] flex-col md:flex-row">
<span>SkiErg Concept2</span>
<span className="text-sm font-normal tracking-[0.10em] uppercase text-white bg-[#111111] px-2 py-1 rounded-sm border border-[#2A2A2A]">4 Unidades</span>
</li>
<li className="text-base font-light text-[#B0B0B0]">Esteiras NordicTrack com inclinação negativa</li>
<li className="text-base font-light text-[#B0B0B0]">Cordas de batalha 15m e 20m</li>
</ul>
</div>
</details>

<details className="group border-b border-[#2A2A2A]">
<summary className="flex justify-between items-center py-6 cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#E8400A]">
<span className="text-xl font-medium tracking-tight uppercase text-white group-hover:text-[#E8400A] transition-colors">02 · FORÇA LIVRE</span>
<span className="text-[#6B6B6B] group-hover:text-white transition-colors">
<i className="w-6 h-6 transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="pb-8 pl-4 md:pl-8 text-base font-light text-[#B0B0B0]">
                            Racks de agachamento Rogue, plataformas de LPO isoladas, anilhas olímpicas calibradas e halteres de precisão até 60kg.
                        </div>
</details>

<details className="group border-b border-[#2A2A2A]">
<summary className="flex justify-between items-center py-6 cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#E8400A]">
<span className="text-xl font-medium tracking-tight uppercase text-white group-hover:text-[#E8400A] transition-colors">03 · MÁQUINAS</span>
<span className="text-[#6B6B6B] group-hover:text-white transition-colors">
<i className="w-6 h-6 transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="pb-8 pl-4 md:pl-8 text-base font-light text-[#B0B0B0]">
                            Linha completa Hammer Strength focada em biomecânica isolada, polias de alta fluidez e leg presses lineares de alta capacidade.
                        </div>
</details>

<details className="group border-b border-[#2A2A2A]">
<summary className="flex justify-between items-center py-6 cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#E8400A]">
<span className="text-xl font-medium tracking-tight uppercase text-white group-hover:text-[#E8400A] transition-colors">04 · FUNCIONAL &amp; MOBILITY</span>
<span className="text-[#6B6B6B] group-hover:text-white transition-colors">
<i className="w-6 h-6 transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="pb-8 pl-4 md:pl-8 text-base font-light text-[#B0B0B0]">
                            Área livre com piso absorvente, caixas pliométricas, kettlebells de competição, bands de tensão e acessórios para liberação miofascial.
                        </div>
</details>

<details className="group border-b border-[#2A2A2A]">
<summary className="flex justify-between items-center py-6 cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#E8400A]">
<span className="text-xl font-medium tracking-tight uppercase text-white group-hover:text-[#E8400A] transition-colors">05 · INFRAESTRUTURA</span>
<span className="text-[#6B6B6B] group-hover:text-white transition-colors">
<i className="w-6 h-6 transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="pb-8 pl-4 md:pl-8 text-base font-light text-[#B0B0B0]">
                            Vestiários privativos padrão executivo, climatização dinâmica zona a zona e hidratação filtrada industrial.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto" id="programas">
<span className="block text-sm font-normal tracking-[0.14em] uppercase text-[#E8400A] mb-6 text-center">O que oferecemos</span>
<h2 className="text-4xl md:text-6xl leading-[1.05] font-semibold tracking-tighter uppercase mb-16 text-white text-center">
                UM PROTOCOLO<br/>PARA CADA<br/>OBJETIVO.
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-[#1E1E1E] border border-[#2A2A2A] p-8 rounded flex flex-col h-full hover:border-[#6B6B6B] transition-colors">
<h3 className="text-2xl font-medium tracking-tight uppercase mb-4 text-white">01 — FORGEE STRENGTH</h3>
<p className="text-base font-light text-[#B0B0B0] mb-8 flex-grow">
                        Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.
                    </p>
<div className="border-t border-[#2A2A2A] pt-4 mt-auto">
<div className="flex flex-col gap-2">
<div className="flex justify-between items-baseline gap-4">
<span className="text-xs font-normal tracking-[0.10em] uppercase text-[#6B6B6B]">Para quem é</span>
<span className="text-sm font-light text-right text-white">Iniciantes a avançados em hipertrofia e força.</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<span className="text-xs font-normal tracking-[0.10em] uppercase text-[#6B6B6B]">Frequência</span>
<span className="text-sm font-light text-right text-white">3–5× por semana.</span>
</div>
</div>
</div>
</div>

<div className="relative bg-[#111111] border border-[#E8400A] p-8 rounded flex flex-col h-full overflow-hidden">
<div className="absolute top-0 right-0 bg-[#E8400A] text-white text-xs font-normal tracking-[0.14em] uppercase px-4 py-1 rounded-bl">
                        Destaque
                    </div>
<div className="absolute inset-0 bg-[#E8400A]/5 pointer-events-none"></div>
<h3 className="text-2xl font-medium tracking-tight uppercase mb-4 text-[#E8400A] relative z-10">02 — FORGEE CONDITIONING</h3>
<p className="text-base font-light text-[#D9D9D9] mb-8 flex-grow relative z-10">
                        Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.
                    </p>
<div className="border-t border-[#2A2A2A] pt-4 mt-auto relative z-10">
<div className="flex flex-col gap-2">
<div className="flex justify-between items-baseline gap-4">
<span className="text-xs font-normal tracking-[0.10em] uppercase text-[#6B6B6B]">Para quem é</span>
<span className="text-sm font-light text-right text-white">Condicionamento, perda de gordura.</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<span className="text-xs font-normal tracking-[0.10em] uppercase text-[#6B6B6B]">Turmas</span>
<span className="text-sm font-light text-right text-white">06H · 07H · 12H · 18H · 19H30</span>
</div>
</div>
</div>
</div>

<div className="bg-[#1E1E1E] border border-[#2A2A2A] p-8 rounded flex flex-col h-full hover:border-[#6B6B6B] transition-colors">
<h3 className="text-2xl font-medium tracking-tight uppercase mb-4 text-white">03 — FORGEE MOBILITY</h3>
<p className="text-base font-light text-[#B0B0B0] flex-grow">
                        Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.
                    </p>
</div>

<div className="bg-[#1E1E1E] border border-[#2A2A2A] p-8 rounded flex flex-col h-full hover:border-[#6B6B6B] transition-colors">
<h3 className="text-2xl font-medium tracking-tight uppercase mb-4 text-white">04 — PERSONAL TRAINING</h3>
<p className="text-base font-light text-[#B0B0B0] flex-grow">
                        Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.
                    </p>
</div>
</div>
</section>

<section className="bg-[#111111] py-24 md:py-32 px-6 md:px-12 border-t border-[#2A2A2A] relative" id="planos">

<div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto relative z-10">
<div className="text-center mb-16">
<span className="block text-sm font-normal tracking-[0.14em] uppercase text-[#E8400A] mb-6">Investimento</span>
<h2 className="text-4xl md:text-6xl leading-[1.05] font-semibold tracking-tighter uppercase mb-6 text-white">
                        SEM MATRÍCULA.<br/>SEM FIDELIDADE.<br/>SEM ENROLAÇÃO.
                    </h2>
<p className="text-base md:text-lg font-light text-[#B0B0B0] max-w-xl mx-auto">
                        Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
                    </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

<div className="bg-[#1E1E1E] border border-[#2A2A2A] rounded flex flex-col p-8">
<h3 className="text-xl font-medium tracking-tight uppercase mb-2 text-white">LIVRE</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold tracking-tighter text-white">R$149</span>
<span className="text-sm font-light text-[#6B6B6B]">/mês</span>
</div>
<ul className="flex flex-col gap-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-base font-light text-[#D9D9D9]">
<i className="w-5 h-5 text-[#6B6B6B] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
                                Acesso ilimitado 05H–23H
                            </li>
<li className="flex items-start gap-3 text-base font-light text-[#D9D9D9]">
<i className="w-5 h-5 text-[#6B6B6B] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
                                Avaliação física de entrada
                            </li>
<li className="flex items-start gap-3 text-base font-light text-[#D9D9D9]">
<i className="w-5 h-5 text-[#6B6B6B] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
                                Planilha de treino inicial
                            </li>
<li className="flex items-start gap-3 text-base font-light text-[#D9D9D9]">
<i className="w-5 h-5 text-[#6B6B6B] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
                                App FORGEE
                            </li>
<li className="flex items-start gap-3 text-base font-light text-[#6B6B6B] opacity-50">
<i className="w-5 h-5 shrink-0 mt-0.5" data-lucide="minus" strokeWidth="1.5"></i>
                                2 sessões de Personal/mês
                            </li>
</ul>
<button className="w-full py-4 border border-[#2A2A2A] text-white text-sm font-normal tracking-[0.14em] uppercase hover:border-white transition-colors rounded-none bg-transparent">
                            Quero esse plano
                        </button>
</div>

<div className="bg-[#111111] border-2 border-[#E8400A] rounded flex flex-col p-8 relative transform lg:-translate-y-4 shadow-[0_8px_40px_rgba(232,64,10,0.1)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E8400A] text-white text-xs font-normal tracking-[0.14em] uppercase px-4 py-1 rounded-sm">
                            Mais Escolhido
                        </div>
<h3 className="text-xl font-medium tracking-tight uppercase mb-2 text-[#E8400A]">PLUS</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-semibold tracking-tighter text-white">R$229</span>
<span className="text-sm font-light text-[#6B6B6B]">/mês</span>
</div>
<ul className="flex flex-col gap-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-base font-light text-white">
<i className="w-5 h-5 text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
                                Todas as vantagens do Livre
                            </li>
<li className="flex items-start gap-3 text-base font-light text-white">
<i className="w-5 h-5 text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
                                2 sessões de Personal/mês
                            </li>
<li className="flex items-start gap-3 text-base font-light text-white">
<i className="w-5 h-5 text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
                                1 aula Conditioning/semana
                            </li>
<li className="flex items-start gap-3 text-base font-light text-white">
<i className="w-5 h-5 text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
                                Revisão de planilha a cada 4 sem.
                            </li>
<li className="flex items-start gap-3 text-base font-light text-white">
<i className="w-5 h-5 text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
                                Acesso ao Mobility
                            </li>
</ul>
<button className="w-full py-4 bg-[#E8400A] text-white text-sm font-normal tracking-[0.14em] uppercase hover:bg-[#FF4D0D] transition-colors rounded-none">
                            Quero esse plano
                        </button>
</div>

<div className="bg-[#1E1E1E] border border-[#2A2A2A] rounded flex flex-col p-8">
<h3 className="text-xl font-medium tracking-tight uppercase mb-2 text-white">ELITE</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold tracking-tighter text-white">R$389</span>
<span className="text-sm font-light text-[#6B6B6B]">/mês</span>
</div>
<ul className="flex flex-col gap-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-base font-light text-[#D9D9D9]">
<i className="w-5 h-5 text-[#6B6B6B] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
                                Todas as vantagens do Livre
                            </li>
<li className="flex items-start gap-3 text-base font-light text-[#D9D9D9]">
<i className="w-5 h-5 text-[#6B6B6B] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
                                4 sessões de Personal/mês
                            </li>
<li className="flex items-start gap-3 text-base font-light text-[#D9D9D9]">
<i className="w-5 h-5 text-[#6B6B6B] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
                                Acesso ilimitado a classes
                            </li>
<li className="flex items-start gap-3 text-base font-light text-[#D9D9D9]">
<i className="w-5 h-5 text-[#6B6B6B] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
                                Bioimpedância mensal
                            </li>
<li className="flex items-start gap-3 text-base font-light text-[#D9D9D9]">
<i className="w-5 h-5 text-[#6B6B6B] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
                                WhatsApp com coach dedicado
                            </li>
</ul>
<button className="w-full py-4 border border-[#2A2A2A] text-white text-sm font-normal tracking-[0.14em] uppercase hover:border-white transition-colors rounded-none bg-transparent">
                            Quero esse plano
                        </button>
</div>
</div>
<div className="mt-12 text-center flex flex-col items-center gap-6">
<p className="text-sm font-light text-[#6B6B6B]">
                        Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto
                    </p>
<div className="inline-flex items-center gap-4 bg-[#1E1E1E] border border-[#2A2A2A] px-6 py-4 rounded-sm">
<div>
<span className="block text-sm font-semibold tracking-tight uppercase text-white">DIÁRIA: R$ 39</span>
<span className="text-sm font-light text-[#B0B0B0]">Acesso por 1 dia</span>
</div>
<a className="text-sm font-normal tracking-[0.10em] uppercase text-[#E8400A] hover:text-white transition-colors ml-4" href="#">
                            Agendar <i className="inline w-4 h-4 ml-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="bg-[#1E1E1E] py-24 md:py-32 px-6 md:px-12 border-t border-[#2A2A2A]" id="equipe">
<div className="max-w-[1440px] mx-auto">
<div className="mb-16">
<span className="block text-sm font-normal tracking-[0.14em] uppercase text-[#E8400A] mb-6">Quem te acompanha</span>
<h2 className="text-4xl md:text-6xl leading-[1.05] font-semibold tracking-tighter uppercase mb-6 text-white">
                        COACHES QUE<br/>TREINAM.
                    </h2>
<p className="text-base md:text-lg font-light text-[#B0B0B0] max-w-xl">
                        Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.
                    </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="border-t border-[#2A2A2A] pt-6 group cursor-pointer hover:border-[#E8400A] transition-colors">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold tracking-tight uppercase text-white">RF</h3>
<i className="w-5 h-5 text-[#6B6B6B] group-hover:text-[#E8400A] transition-colors" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
<p className="text-lg font-medium text-white mb-4">RODRIGO FARIAS</p>
<div className="flex flex-col gap-1">
<span className="text-sm font-light text-[#B0B0B0]">Head Coach</span>
<span className="text-xs font-normal tracking-widest uppercase text-[#6B6B6B]">CREF 045821-G/SP</span>
</div>
</div>

<div className="border-t border-[#2A2A2A] pt-6 group cursor-pointer hover:border-[#E8400A] transition-colors">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold tracking-tight uppercase text-white">AL</h3>
<i className="w-5 h-5 text-[#6B6B6B] group-hover:text-[#E8400A] transition-colors" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
<p className="text-lg font-medium text-white mb-4">ANA LUÍSA</p>
<div className="flex flex-col gap-1">
<span className="text-sm font-light text-[#B0B0B0]">Conditioning</span>
<span className="text-xs font-normal tracking-widest uppercase text-[#6B6B6B]">CREF 078342-G/SP</span>
</div>
</div>

<div className="border-t border-[#2A2A2A] pt-6 group cursor-pointer hover:border-[#E8400A] transition-colors">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold tracking-tight uppercase text-white">BT</h3>
<i className="w-5 h-5 text-[#6B6B6B] group-hover:text-[#E8400A] transition-colors" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
<p className="text-lg font-medium text-white mb-4">BRUNO T.</p>
<div className="flex flex-col gap-1">
<span className="text-sm font-light text-[#B0B0B0]">Mobility &amp; Rehab</span>
<span className="text-xs font-normal tracking-widest uppercase text-[#6B6B6B]">CREF 091205-G/SP</span>
</div>
</div>

<div className="border-t border-[#2A2A2A] pt-6 group cursor-pointer hover:border-[#E8400A] transition-colors">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold tracking-tight uppercase text-white">CD</h3>
<i className="w-5 h-5 text-[#6B6B6B] group-hover:text-[#E8400A] transition-colors" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
<p className="text-lg font-medium text-white mb-4">CAMILA D.</p>
<div className="flex flex-col gap-1">
<span className="text-sm font-light text-[#B0B0B0]">Personal Trainer</span>
<span className="text-xs font-normal tracking-widest uppercase text-[#6B6B6B]">CREF 063417-G/SP</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 max-w-[800px] mx-auto">
<div className="text-center mb-16">
<span className="block text-sm font-normal tracking-[0.14em] uppercase text-[#E8400A] mb-6">Dúvidas</span>
<h2 className="text-4xl md:text-6xl leading-[1.05] font-semibold tracking-tighter uppercase text-white">
                    PERGUNTAS<br/>DIRETAS.
                </h2>
</div>
<div className="flex flex-col divide-y divide-[#2A2A2A]">

<details className="group py-6" open="">
<summary className="flex justify-between items-center cursor-pointer outline-none focus-visible:text-[#E8400A]">
<span className="text-lg md:text-xl font-medium tracking-tight text-white group-hover:text-[#B0B0B0] transition-colors">Preciso ter experiência?</span>
<span className="text-[#6B6B6B] group-hover:text-white transition-colors ml-4 shrink-0">
<i className="w-6 h-6 transition-transform duration-300 group-open:rotate-45" data-lucide="plus" strokeWidth="1.5"></i>
</span>
</summary>
<div className="pt-4 pb-2 text-base font-light text-[#B0B0B0] leading-relaxed">
                        Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual.
                    </div>
</details>

<details className="group py-6">
<summary className="flex justify-between items-center cursor-pointer outline-none focus-visible:text-[#E8400A]">
<span className="text-lg md:text-xl font-medium tracking-tight text-white group-hover:text-[#B0B0B0] transition-colors">Posso treinar sozinho?</span>
<span className="text-[#6B6B6B] group-hover:text-white transition-colors ml-4 shrink-0">
<i className="w-6 h-6 transition-transform duration-300 group-open:rotate-45" data-lucide="plus" strokeWidth="1.5"></i>
</span>
</summary>
<div className="pt-4 pb-2 text-base font-light text-[#B0B0B0] leading-relaxed">
                        Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima.
                    </div>
</details>

<details className="group py-6">
<summary className="flex justify-between items-center cursor-pointer outline-none focus-visible:text-[#E8400A]">
<span className="text-lg md:text-xl font-medium tracking-tight text-white group-hover:text-[#B0B0B0] transition-colors">Como funciona o cancelamento?</span>
<span className="text-[#6B6B6B] group-hover:text-white transition-colors ml-4 shrink-0">
<i className="w-6 h-6 transition-transform duration-300 group-open:rotate-45" data-lucide="plus" strokeWidth="1.5"></i>
</span>
</summary>
<div className="pt-4 pb-2 text-base font-light text-[#B0B0B0] leading-relaxed">
                        Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória.
                    </div>
</details>

<details className="group py-6">
<summary className="flex justify-between items-center cursor-pointer outline-none focus-visible:text-[#E8400A]">
<span className="text-lg md:text-xl font-medium tracking-tight text-white group-hover:text-[#B0B0B0] transition-colors">Posso visitar antes de assinar?</span>
<span className="text-[#6B6B6B] group-hover:text-white transition-colors ml-4 shrink-0">
<i className="w-6 h-6 transition-transform duration-300 group-open:rotate-45" data-lucide="plus" strokeWidth="1.5"></i>
</span>
</summary>
<div className="pt-4 pb-2 text-base font-light text-[#B0B0B0] leading-relaxed">
                        Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita.
                    </div>
</details>
</div>
</section>

<section className="bg-[#1E1E1E] py-24 md:py-32 px-6 md:px-12 border-y border-[#2A2A2A]" id="contato">
<div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
<div className="lg:w-1/2">
<span className="block text-sm font-normal tracking-[0.14em] uppercase text-[#E8400A] mb-6">Onde estamos</span>
<h2 className="text-4xl md:text-6xl leading-[1.05] font-semibold tracking-tighter uppercase mb-12 text-white">
                        NO CORAÇÃO<br/>DE INDAIATUBA.
                    </h2>
<div className="flex flex-col gap-8">
<div>
<p className="text-lg font-light text-white leading-relaxed font-mono">
                                Rua das Esmeraldas, 742<br/>
                                Jardim Morada do Sol<br/>
                                Indaiatuba, SP<br/>
                                CEP 13.334-210
                            </p>
<p className="text-sm font-light text-[#6B6B6B] mt-4">200m do Carrefour · Próximo à saída SP-075</p>
</div>
<div className="grid grid-cols-2 gap-4 border-t border-[#2A2A2A] pt-8">
<div className="flex flex-col gap-1">
<span className="text-sm font-medium tracking-tight uppercase text-white">Segunda a Sexta</span>
<span className="text-base font-light text-[#B0B0B0]">05H00 – 23H00</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-sm font-medium tracking-tight uppercase text-white">Sábado</span>
<span className="text-base font-light text-[#B0B0B0]">07H00 – 20H00</span>
</div>
<div className="flex flex-col gap-1 col-span-2">
<span className="text-sm font-medium tracking-tight uppercase text-white">Domingo e Feriados</span>
<span className="text-base font-light text-[#B0B0B0]">08H00 – 14H00</span>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2 flex flex-col justify-between">

<div className="w-full h-64 bg-[#111111] border border-[#2A2A2A] flex items-center justify-center relative overflow-hidden mb-12">
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#2A2A2A_49%,#2A2A2A_51%,transparent_52%)] bg-[size:20px_20px] opacity-20"></div>
<i className="w-12 h-12 text-[#6B6B6B]" data-lucide="map-pin" strokeWidth="1"></i>
</div>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-4 text-base font-light text-[#B0B0B0]">
<i className="w-5 h-5 text-white" data-lucide="phone" strokeWidth="1.5"></i>
                            (19) 98234-5678
                        </div>
<div className="flex items-center gap-4 text-base font-light text-[#B0B0B0]">
<i className="w-5 h-5 text-white" data-lucide="mail" strokeWidth="1.5"></i>
                            contato@forgee.academy
                        </div>
<div className="flex items-center gap-4 text-base font-light text-[#B0B0B0]">
<i className="w-5 h-5 text-white" data-lucide="instagram" strokeWidth="1.5"></i>
                            @forgee.academy
                        </div>
<div className="flex flex-col sm:flex-row gap-4 mt-6">
<a className="inline-flex items-center justify-center px-8 py-4 bg-[#E8400A] text-white text-sm font-normal tracking-[0.14em] uppercase hover:bg-[#FF4D0D] transition-colors rounded-none" href="#">
<i className="w-4 h-4 mr-2" data-lucide="message-circle" strokeWidth="1.5"></i> Falar no WhatsApp
                            </a>
<a className="inline-flex items-center justify-center px-8 py-4 border border-[#2A2A2A] text-white text-sm font-normal tracking-[0.14em] uppercase hover:border-white transition-colors rounded-none bg-transparent" href="#">
                                Como Chegar
                            </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 text-center relative overflow-hidden flex flex-col items-center justify-center bg-[#E8400A]">

<div className="absolute inset-0 bg-gradient-to-t from-[#B22A00] to-[#E8400A] pointer-events-none"></div>
<div className="relative z-10 w-full max-w-[1440px]">
<h2 className="text-5xl md:text-[80px] lg:text-[100px] leading-[0.9] font-extrabold tracking-tighter uppercase text-white mb-12 drop-shadow-lg">
                    A DECISÃO<br/>JÁ FOI TOMADA.<br/>AGORA É A AÇÃO.
                </h2>
<a className="inline-flex items-center justify-center px-10 py-5 bg-[#111111] text-white text-base md:text-lg font-semibold tracking-[0.14em] uppercase hover:bg-white hover:text-[#111111] transition-colors rounded-none shadow-2xl" href="#contato">
                    Agendar Visita Gratuita
                </a>
</div>

<div className="absolute bottom-0 left-0 w-full bg-[#111111] py-3 overflow-hidden border-t border-[#2A2A2A] flex z-10">
<div className="whitespace-nowrap flex gap-8 animate-[spin_60s_linear_infinite] motion-reduce:animate-none" style={{animation: 'ticker 40s linear infinite'}}>
<style>
                        @keyframes ticker {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                    </style>

<span className="text-sm font-normal tracking-[0.2em] text-[#E8400A] uppercase">A G E N D E U M A V I S I T A · G R A T U I T A · S E M C O M P R O M I S S O · T R A G A T Ê N I S .</span>
<span className="text-sm font-normal tracking-[0.2em] text-[#E8400A] uppercase">A G E N D E U M A V I S I T A · G R A T U I T A · S E M C O M P R O M I S S O · T R A G A T Ê N I S .</span>
<span className="text-sm font-normal tracking-[0.2em] text-[#E8400A] uppercase">A G E N D E U M A V I S I T A · G R A T U I T A · S E M C O M P R O M I S S O · T R A G A T Ê N I S .</span>
<span className="text-sm font-normal tracking-[0.2em] text-[#E8400A] uppercase">A G E N D E U M A V I S I T A · G R A T U I T A · S E M C O M P R O M I S S O · T R A G A T Ê N I S .</span>
</div>
</div>
</section>
</main>

<footer className="bg-[#0A0A0A] pt-24 pb-8 px-6 md:px-12 border-t border-[#2A2A2A]">
<div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between gap-16 mb-24">
<div className="flex flex-col gap-4">
<a className="text-3xl font-extrabold tracking-tighter uppercase text-white hover:text-[#E8400A] transition-colors" href="#">
                    FORGEE
                </a>
<span className="text-sm font-normal tracking-[0.14em] uppercase text-[#6B6B6B]">
                    BEYOND LIMITS KNOWN™
                </span>
</div>
<div className="flex flex-col sm:flex-row gap-16 md:gap-32">
<div className="flex flex-col gap-4">
<span className="text-xs font-semibold tracking-[0.14em] uppercase text-white mb-2">Academia</span>
<a className="text-sm font-light text-[#B0B0B0] hover:text-[#E8400A] transition-colors" href="#espaco">Espaço</a>
<a className="text-sm font-light text-[#B0B0B0] hover:text-[#E8400A] transition-colors" href="#programas">Programas</a>
<a className="text-sm font-light text-[#B0B0B0] hover:text-[#E8400A] transition-colors" href="#equipe">Equipe</a>
<a className="text-sm font-light text-[#B0B0B0] hover:text-[#E8400A] transition-colors" href="#planos">Planos</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-semibold tracking-[0.14em] uppercase text-white mb-2">Legal &amp; Redes</span>
<a className="text-sm font-light text-[#B0B0B0] hover:text-white transition-colors" href="#">Política de Privacidade</a>
<a className="text-sm font-light text-[#B0B0B0] hover:text-white transition-colors" href="#">Termos de Uso</a>
<a className="text-sm font-light text-[#B0B0B0] hover:text-[#E8400A] transition-colors mt-2 flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i> Instagram
                    </a>
</div>
</div>
</div>
<div className="max-w-[1440px] mx-auto pt-8 border-t border-[#2A2A2A] text-center md:text-left">
<p className="text-xs font-light text-[#6B6B6B] tracking-wider uppercase">
                FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP · DESIGN SYSTEM © 2026
            </p>
</div>
</footer>




    </>
  );
}
