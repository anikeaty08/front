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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const links = document.querySelectorAll('.mobile-link');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
            const icon = menu.classList.contains('hidden') ? 'menu' : 'x';
            btn.innerHTML = `<i data-lucide="${icon}" stroke-width="1.5"></i>`;
            lucide.createIcons();
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
                btn.innerHTML = `<i data-lucide="menu" stroke-width="1.5"></i>`;
                lucide.createIcons();
            });
        });

        // Simple Accordion logic
        function toggleAccordion(contentId, iconId) {
            const content = document.getElementById(contentId);
            const icon = document.getElementById(iconId);
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                if(iconId.includes('faq')) {
                    icon.style.transform = 'rotate(180deg)';
                } else {
                    icon.style.transform = 'rotate(45deg)';
                }
            } else {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
            }
        }

        // Navbar blur effect on scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 10) {
                nav.classList.add('shadow-lg');
            } else {
                nav.classList.remove('shadow-lg');
            }
        });
    
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
      

<header className="fixed top-0 w-full z-50 bg-[#111111]/80 backdrop-blur-md border-b border-[#2A2A2A] transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">

<a className="text-2xl font-bold tracking-tight uppercase font-display flex items-center gap-2" href="#">
                FORGEE
            </a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-base text-[#B0B0B0] hover:text-white transition-colors" href="#espaco">Espaço</a>
<a className="text-base text-[#B0B0B0] hover:text-white transition-colors" href="#programas">Programas</a>
<a className="text-base text-[#B0B0B0] hover:text-white transition-colors" href="#equipe">Equipe</a>
<a className="text-base text-[#B0B0B0] hover:text-white transition-colors" href="#planos">Planos</a>
</nav>

<div className="hidden lg:flex items-center gap-4">
<a className="text-xs uppercase tracking-widest font-medium text-white hover:text-[#E8400A] transition-colors" href="#">Sou Membro</a>
<a className="bg-[#E8400A] hover:bg-[#FF4D0D] text-white text-xs uppercase tracking-widest font-medium px-6 py-3 rounded-none transition-colors" href="#agendar">
                    Agendar Visita
                </a>
</div>

<button className="lg:hidden text-white" id="mobile-menu-btn">
<i data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>

<div className="bg-[#1E1E1E] border-b border-[#2A2A2A] py-2 text-center overflow-hidden">
<p className="text-xs text-[#6B6B6B] uppercase tracking-widest font-medium">Beyond Limits Known™ · Indaiatuba, SP · Est. 2018</p>
</div>

<div className="hidden fixed inset-0 top-[114px] bg-[#111111] z-40 border-t border-[#2A2A2A] flex-col p-6 gap-6" id="mobile-menu">
<a className="text-2xl font-semibold tracking-tight uppercase border-b border-[#2A2A2A] pb-4 mobile-link" href="#espaco">Espaço</a>
<a className="text-2xl font-semibold tracking-tight uppercase border-b border-[#2A2A2A] pb-4 mobile-link" href="#programas">Programas</a>
<a className="text-2xl font-semibold tracking-tight uppercase border-b border-[#2A2A2A] pb-4 mobile-link" href="#equipe">Equipe</a>
<a className="text-2xl font-semibold tracking-tight uppercase border-b border-[#2A2A2A] pb-4 mobile-link" href="#planos">Planos</a>
<div className="mt-auto flex flex-col gap-4">
<a className="border border-[#2A2A2A] text-white text-center text-xs uppercase tracking-widest font-medium px-6 py-4 rounded-none" href="#">Sou Membro</a>
<a className="bg-[#E8400A] text-white text-center text-xs uppercase tracking-widest font-medium px-6 py-4 rounded-none" href="#agendar">Agendar Visita</a>
</div>
</div>
</header>
<main className="pt-[114px]">

<section className="relative min-h-[90vh] flex flex-col justify-between border-b border-[#2A2A2A]">

<div className="absolute inset-0 z-0">

<img alt="Gym Atmosphere" className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/50"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20"></div>
</div>
<div className="relative z-10 flex-1 flex items-center">
<div className="max-w-7xl mx-auto px-4 md:px-8 w-full py-24">
<div className="max-w-3xl">
<span className="text-xs uppercase tracking-widest text-[#B0B0B0] font-medium block mb-6">Treinos progressivos e acompanhamento real</span>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight uppercase leading-[0.9] font-display text-[#FFFFFF] mb-8">
                            Sem Mágica<br/>
                            Sem Atalhos<br/>
<span className="text-[#E8400A]">Sem Desculpas</span>
</h1>
<p className="text-lg md:text-xl font-light text-[#B0B0B0] max-w-xl leading-relaxed mb-12">
                            Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#E8400A] hover:bg-[#FF4D0D] text-white text-center text-xs uppercase tracking-widest font-medium px-8 py-4 rounded-none transition-colors" href="#planos">
                                Começar Agora
                            </a>
<a className="border border-[#2A2A2A] hover:border-[#E8400A] text-white text-center text-xs uppercase tracking-widest font-medium px-8 py-4 rounded-none transition-colors" href="#espaco">
                                Conhecer o Espaço
                            </a>
</div>
</div>
</div>
</div>

<div className="relative z-10 bg-[#111111]/90 backdrop-blur border-t border-[#2A2A2A]">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-[#2A2A2A]">
<div className="py-6 px-4 md:px-6 flex flex-col gap-1">
<span className="text-xs text-[#6B6B6B] uppercase tracking-widest font-medium">Funcionamento</span>
<span className="text-base text-white font-medium tracking-tight">05H–23H</span>
</div>
<div className="py-6 px-4 md:px-6 flex flex-col gap-1">
<span className="text-xs text-[#6B6B6B] uppercase tracking-widest font-medium">Frequência</span>
<span className="text-base text-white font-medium tracking-tight">7 DIAS</span>
</div>
<div className="py-6 px-4 md:px-6 flex flex-col gap-1 hidden md:flex">
<span className="text-xs text-[#6B6B6B] uppercase tracking-widest font-medium">Área</span>
<span className="text-base text-white font-medium tracking-tight">1.800M²</span>
</div>
<div className="py-6 px-4 md:px-6 flex flex-col gap-1 hidden md:flex">
<span className="text-xs text-[#6B6B6B] uppercase tracking-widest font-medium">Comunidade</span>
<span className="text-base text-white font-medium tracking-tight">+1.200 ALUNOS</span>
</div>
<div className="py-6 px-4 md:px-6 flex flex-col gap-1 hidden md:flex">
<span className="text-xs text-[#6B6B6B] uppercase tracking-widest font-medium">Fundação</span>
<span className="text-base text-white font-medium tracking-tight">DESDE 2018</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-b border-[#2A2A2A]" id="espaco">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">

<div className="md:col-span-5">
<span className="text-xs uppercase tracking-widest text-[#E8400A] font-medium block mb-4">Quem somos</span>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight uppercase font-display leading-[1.1] mb-8">
                            Forjados<br/>
                            Pela<br/>
                            Disciplina.
                        </h2>
<div className="space-y-6 text-[#B0B0B0] font-light text-lg">
<p>A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.</p>
<p>Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.</p>
</div>
<div className="mt-12 pl-6 border-l-2 border-[#E8400A]">
<p className="text-xl md:text-2xl font-medium tracking-tight text-white italic">"In silence, the transformation begins."</p>
</div>
<p className="mt-8 text-[#B0B0B0] font-light text-lg">
                            Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
                        </p>
</div>

<div className="md:col-span-7 flex flex-col justify-center">

<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
<div className="border-t border-[#2A2A2A] pt-4">
<h3 className="text-base font-medium tracking-tight uppercase mb-3">01 — Intensidade</h3>
<p className="text-base text-[#6B6B6B] font-light">O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.</p>
</div>
<div className="border-t border-[#2A2A2A] pt-4">
<h3 className="text-base font-medium tracking-tight uppercase mb-3">02 — Precisão</h3>
<p className="text-base text-[#6B6B6B] font-light">Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.</p>
</div>
<div className="border-t border-[#2A2A2A] pt-4">
<h3 className="text-base font-medium tracking-tight uppercase mb-3">03 — Controle</h3>
<p className="text-base text-[#6B6B6B] font-light">Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.</p>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 bg-[#1E1E1E] border border-[#2A2A2A] rounded-md divide-y md:divide-y-0 md:divide-x divide-[#2A2A2A]">
<div className="p-6 text-center">
<span className="block text-3xl font-semibold tracking-tight text-[#E8400A] mb-1">+1.200</span>
<span className="text-xs uppercase tracking-widest text-[#6B6B6B] font-medium">Alunos ativos</span>
</div>
<div className="p-6 text-center">
<span className="block text-3xl font-semibold tracking-tight text-white mb-1">94%</span>
<span className="text-xs uppercase tracking-widest text-[#6B6B6B] font-medium">Retenção 6m</span>
</div>
<div className="p-6 text-center">
<span className="block text-3xl font-semibold tracking-tight text-white mb-1">8</span>
<span className="text-xs uppercase tracking-widest text-[#6B6B6B] font-medium">Anos operando</span>
</div>
<div className="p-6 text-center">
<span className="block text-3xl font-semibold tracking-tight text-white mb-1">1.8K</span>
<span className="text-xs uppercase tracking-widest text-[#6B6B6B] font-medium">M² de Área</span>
</div>
</div>
</div>
</div>

<div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-[#1E1E1E] p-8 rounded-md border border-[#2A2A2A] flex flex-col justify-between">
<p className="text-lg text-[#B0B0B0] font-light italic mb-8">"Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas."</p>
<div>
<p className="text-base font-medium text-white tracking-tight">Rafael M.</p>
<p className="text-xs text-[#6B6B6B] uppercase tracking-widest mt-1">Engenheiro · Há 3 anos</p>
</div>
</div>
<div className="bg-[#1E1E1E] p-8 rounded-md border border-[#2A2A2A] flex flex-col justify-between">
<p className="text-lg text-[#B0B0B0] font-light italic mb-8">"Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha."</p>
<div>
<p className="text-base font-medium text-white tracking-tight">Juliana T.</p>
<p className="text-xs text-[#6B6B6B] uppercase tracking-widest mt-1">Professora · Há 2 anos</p>
</div>
</div>
<div className="bg-[#1E1E1E] p-8 rounded-md border border-[#2A2A2A] flex flex-col justify-between">
<p className="text-lg text-[#B0B0B0] font-light italic mb-8">"A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado."</p>
<div>
<p className="text-base font-medium text-white tracking-tight">Lucas O.</p>
<p className="text-xs text-[#6B6B6B] uppercase tracking-widest mt-1">Empresário · Há 4 anos</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-b border-[#2A2A2A] bg-[#0A0A0A]">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-5 sticky top-32 self-start">
<span className="text-xs uppercase tracking-widest text-[#E8400A] font-medium block mb-4">Estrutura</span>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight uppercase font-display leading-[1.1] mb-6">
                            Equipamento<br/>
                            Que Não Te<br/>
                            Limita.
                        </h2>
<p className="text-[#B0B0B0] font-light text-lg">
                            Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.
                        </p>
</div>
<div className="lg:col-span-7">
<div className="border-t border-[#2A2A2A]">

<div className="border-b border-[#2A2A2A] py-8 group cursor-pointer" onclick="toggleAccordion('acc-1', 'icon-acc-1')">
<div className="flex justify-between items-center">
<h3 className="text-xl md:text-2xl font-medium tracking-tight uppercase group-hover:text-[#E8400A] transition-colors">01 · Cardio &amp; Conditioning</h3>
<i className="text-[#6B6B6B] group-hover:text-[#E8400A] transition-transform duration-300" data-lucide="plus" id="icon-acc-1" strokeWidth="1.5"></i>
</div>
<div className="hidden mt-6 text-[#B0B0B0]" id="acc-1">
<ul className="space-y-3 font-light text-lg">
<li className="flex justify-between items-center border-b border-[#2A2A2A] pb-2"><span className="text-white">Assault Bike Concept2</span> <span className="text-xs text-[#E8400A] font-medium tracking-widest">8 UNIDADES</span></li>
<li className="flex justify-between items-center border-b border-[#2A2A2A] pb-2"><span className="text-white">Remo Concept2 Model D</span> <span className="text-xs text-[#E8400A] font-medium tracking-widest">6 UNIDADES</span></li>
<li className="flex justify-between items-center border-b border-[#2A2A2A] pb-2"><span className="text-white">SkiErg Concept2</span> <span className="text-xs text-[#E8400A] font-medium tracking-widest">4 UNIDADES</span></li>
<li className="flex justify-between items-center border-b border-[#2A2A2A] pb-2"><span className="text-white">Esteiras NordicTrack com inclinação negativa</span></li>
<li className="flex justify-between items-center pb-2"><span className="text-white">Cordas de batalha 15m e 20m</span></li>
</ul>
</div>
</div>

<div className="border-b border-[#2A2A2A] py-8 group cursor-pointer" onclick="toggleAccordion('acc-2', 'icon-acc-2')">
<div className="flex justify-between items-center">
<h3 className="text-xl md:text-2xl font-medium tracking-tight uppercase group-hover:text-[#E8400A] transition-colors">02 · Força Livre</h3>
<i className="text-[#6B6B6B] group-hover:text-[#E8400A] transition-transform duration-300" data-lucide="plus" id="icon-acc-2" strokeWidth="1.5"></i>
</div>
<div className="hidden mt-6 text-[#B0B0B0]" id="acc-2">
<p className="font-light text-lg">Halteres até 60kg, anilhas olímpicas calibradas, plataformas de LPO e racks de agachamento estruturais desenvolvidos sob medida.</p>
</div>
</div>

<div className="border-b border-[#2A2A2A] py-8 group cursor-pointer" onclick="toggleAccordion('acc-3', 'icon-acc-3')">
<div className="flex justify-between items-center">
<h3 className="text-xl md:text-2xl font-medium tracking-tight uppercase group-hover:text-[#E8400A] transition-colors">03 · Máquinas</h3>
<i className="text-[#6B6B6B] group-hover:text-[#E8400A] transition-transform duration-300" data-lucide="plus" id="icon-acc-3" strokeWidth="1.5"></i>
</div>
<div className="hidden mt-6 text-[#B0B0B0]" id="acc-3">
<p className="font-light text-lg">Parque de máquinas selecionadas por biometria e biomecânica. Foco em polias duplas, articulados plate-loaded e cabos de alta tensão.</p>
</div>
</div>

<div className="border-b border-[#2A2A2A] py-8 group cursor-pointer" onclick="toggleAccordion('acc-4', 'icon-acc-4')">
<div className="flex justify-between items-center">
<h3 className="text-xl md:text-2xl font-medium tracking-tight uppercase group-hover:text-[#E8400A] transition-colors">04 · Funcional &amp; Mobility</h3>
<i className="text-[#6B6B6B] group-hover:text-[#E8400A] transition-transform duration-300" data-lucide="plus" id="icon-acc-4" strokeWidth="1.5"></i>
</div>
<div className="hidden mt-6 text-[#B0B0B0]" id="acc-4">
<p className="font-light text-lg">Área aberta em tatame de alta densidade. Box boxes, kettlebells de competição, medballs e acessórios para liberação miofascial.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-b border-[#2A2A2A]" id="programas">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="text-center mb-16 md:mb-24">
<span className="text-xs uppercase tracking-widest text-[#E8400A] font-medium block mb-4">O que oferecemos</span>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight uppercase font-display leading-[1.1]">
                        Um Protocolo<br/>
                        Para Cada Objetivo.
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<div className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-md p-8 md:p-10 flex flex-col h-full hover:border-[#6B6B6B] transition-colors">
<h3 className="uppercase text-2xl font-medium text-white tracking-tight mb-4">01 — Forgee Strength</h3>
<p className="text-[#B0B0B0] font-light text-lg mb-8 flex-1">Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.</p>
<div className="space-y-3 pt-6 border-t border-[#2A2A2A]">
<div className="flex justify-between">
<span className="text-sm text-[#6B6B6B]">Para quem é</span>
<span className="text-base font-medium text-white text-right">Iniciantes a avançados</span>
</div>
<div className="flex justify-between">
<span className="text-sm text-[#6B6B6B]">Frequência</span>
<span className="text-base font-medium text-white text-right">3–5× por semana</span>
</div>
</div>
</div>

<div className="bg-[#1E1E1E] border border-[#E8400A] rounded-md p-8 md:p-10 flex flex-col h-full relative overflow-hidden group">
<div className="absolute top-0 right-0 bg-[#E8400A] text-white text-[10px] uppercase tracking-widest font-medium px-3 py-1 m-4 rounded-sm">Destaque</div>
<h3 className="text-2xl font-medium tracking-tight uppercase mb-4 text-[#E8400A]">02 — Forgee Conditioning</h3>
<p className="text-[#B0B0B0] font-light text-lg mb-8 flex-1 group-hover:text-white transition-colors">Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.</p>
<div className="space-y-3 pt-6 border-t border-[#2A2A2A]">
<div className="flex justify-between items-center">
<span className="text-sm text-[#6B6B6B]">Para quem é</span>
<span className="text-base font-medium text-white text-right">Condicionamento, queima</span>
</div>
<div className="flex justify-between items-start">
<span className="text-sm text-[#6B6B6B] mt-1">Turmas</span>
<span className="text-base font-medium text-white text-right leading-tight">06H · 07H · 12H<br/>18H · 19H30</span>
</div>
</div>
</div>

<div className="bg-[#111111] border border-[#2A2A2A] rounded-md p-8 md:p-10 flex flex-col h-full">
<h3 className="text-2xl font-medium tracking-tight uppercase mb-4 text-white">03 — Forgee Mobility</h3>
<p className="text-[#B0B0B0] font-light text-lg">Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.</p>
</div>

<div className="bg-[#111111] border border-[#2A2A2A] rounded-md p-8 md:p-10 flex flex-col h-full">
<h3 className="text-2xl font-medium tracking-tight uppercase mb-4 text-white">04 — Personal Training</h3>
<p className="text-[#B0B0B0] font-light text-lg">Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-b border-[#2A2A2A]" id="planos">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="text-center mb-16 md:mb-24">
<span className="text-xs uppercase tracking-widest text-[#E8400A] font-medium block mb-4">Investimento</span>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight uppercase font-display leading-[1.1] mb-6">
                        Sem Matrícula.<br/>
                        Sem Fidelidade.<br/>
                        Sem Enrolação.
                    </h2>
<p className="text-[#B0B0B0] font-light text-lg">
                        Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#111111] border border-[#2A2A2A] rounded-md p-8 flex flex-col">
<div className="mb-8">
<h3 className="text-xl font-medium tracking-tight uppercase text-[#B0B0B0] mb-2">Livre</h3>
<div className="flex items-baseline gap-1">
<span className="text-sm text-[#6B6B6B]">R$</span>
<span className="text-5xl font-semibold tracking-tight text-white">149</span>
<span className="text-sm text-[#6B6B6B]">/mês</span>
</div>
</div>
<ul className="space-y-4 mb-12 flex-1 text-base font-light text-[#D9D9D9]">
<li className="flex items-start gap-3"><i className="text-[#2E7D32] shrink-0 mt-0.5" data-lucide="check" height="18" strokeWidth="2" width="18"></i> Acesso ilimitado 05H–23H</li>
<li className="flex items-start gap-3"><i className="text-[#2E7D32] shrink-0 mt-0.5" data-lucide="check" height="18" strokeWidth="2" width="18"></i> Avaliação física de entrada</li>
<li className="flex items-start gap-3"><i className="text-[#2E7D32] shrink-0 mt-0.5" data-lucide="check" height="18" strokeWidth="2" width="18"></i> Planilha de treino inicial</li>
<li className="flex items-start gap-3"><i className="text-[#2E7D32] shrink-0 mt-0.5" data-lucide="check" height="18" strokeWidth="2" width="18"></i> App FORGEE</li>
</ul>
<button className="w-full border border-[#2A2A2A] hover:border-white text-white text-xs uppercase tracking-widest font-medium py-4 rounded-none transition-colors">
                            Quero esse plano
                        </button>
</div>

<div className="bg-[#1E1E1E] border border-[#E8400A] rounded-md p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_8px_40px_rgba(0,0,0,0.6)] z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E8400A] text-white text-[10px] uppercase tracking-widest font-medium px-4 py-1 rounded-sm border border-[#1E1E1E]">Mais Escolhido</div>
<div className="mb-8">
<h3 className="text-xl font-medium tracking-tight uppercase text-[#E8400A] mb-2">Plus</h3>
<div className="flex items-baseline gap-1">
<span className="text-sm text-[#6B6B6B]">R$</span>
<span className="text-5xl font-semibold tracking-tight text-white">229</span>
<span className="text-sm text-[#6B6B6B]">/mês</span>
</div>
</div>
<ul className="space-y-4 mb-12 flex-1 text-base font-light text-white">
<li className="flex items-start gap-3"><i className="text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" height="18" strokeWidth="2" width="18"></i> Acesso ilimitado 05H–23H</li>
<li className="flex items-start gap-3"><i className="text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" height="18" strokeWidth="2" width="18"></i> Avaliação física de entrada</li>
<li className="flex items-start gap-3"><i className="text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" height="18" strokeWidth="2" width="18"></i> Planilha de treino inicial</li>
<li className="flex items-start gap-3"><i className="text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" height="18" strokeWidth="2" width="18"></i> App FORGEE</li>
<li className="flex items-start gap-3"><i className="text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" height="18" strokeWidth="2" width="18"></i> 2 sessões de Personal/mês</li>
</ul>
<button className="w-full bg-[#E8400A] hover:bg-[#FF4D0D] text-white text-xs uppercase tracking-widest font-medium py-4 rounded-none transition-colors">
                            Quero esse plano
                        </button>
</div>

<div className="bg-[#111111] border border-[#2A2A2A] rounded-md p-8 flex flex-col">
<div className="mb-8">
<h3 className="text-xl font-medium tracking-tight uppercase text-[#B0B0B0] mb-2">Elite</h3>
<div className="flex items-baseline gap-1">
<span className="text-sm text-[#6B6B6B]">R$</span>
<span className="text-5xl font-semibold tracking-tight text-white">389</span>
<span className="text-sm text-[#6B6B6B]">/mês</span>
</div>
</div>
<ul className="space-y-4 mb-12 flex-1 text-base font-light text-[#D9D9D9]">
<li className="flex items-start gap-3"><i className="text-[#2E7D32] shrink-0 mt-0.5" data-lucide="check" height="18" strokeWidth="2" width="18"></i> Tudo do plano Plus</li>
<li className="flex items-start gap-3"><i className="text-[#2E7D32] shrink-0 mt-0.5" data-lucide="check" height="18" strokeWidth="2" width="18"></i> 4 sessões de Personal/mês</li>
<li className="flex items-start gap-3"><i className="text-[#2E7D32] shrink-0 mt-0.5" data-lucide="check" height="18" strokeWidth="2" width="18"></i> Acesso ilimitado a classes</li>
<li className="flex items-start gap-3"><i className="text-[#2E7D32] shrink-0 mt-0.5" data-lucide="check" height="18" strokeWidth="2" width="18"></i> Bioimpedância mensal</li>
<li className="flex items-start gap-3"><i className="text-[#2E7D32] shrink-0 mt-0.5" data-lucide="check" height="18" strokeWidth="2" width="18"></i> WhatsApp com coach dedicado</li>
</ul>
<button className="w-full border border-[#2A2A2A] hover:border-white text-white text-xs uppercase tracking-widest font-medium py-4 rounded-none transition-colors">
                            Quero esse plano
                        </button>
</div>
</div>
<div className="mt-12 text-center flex flex-col items-center gap-6">
<p className="text-sm text-[#6B6B6B] font-light max-w-2xl mx-auto">
                        Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto
                    </p>
<div className="inline-flex items-center gap-4 bg-[#1E1E1E] border border-[#2A2A2A] px-6 py-3 rounded-md">
<span className="text-base text-white font-medium tracking-tight">DIÁRIA: R$ 39</span>
<span className="w-1 h-1 rounded-full bg-[#6B6B6B]"></span>
<span className="text-sm text-[#B0B0B0] font-light">Acesso por 1 dia</span>
<a className="ml-4 text-[#E8400A] text-xs uppercase tracking-widest font-medium hover:text-white transition-colors" href="#">Agendar</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-[#2A2A2A]" id="equipe">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-xs uppercase tracking-widest text-[#E8400A] font-medium block mb-4">Quem te acompanha</span>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight uppercase font-display leading-[1.1]">
                            Coaches Que<br/>Treinam.
                        </h2>
</div>
<p className="text-[#B0B0B0] font-light text-lg max-w-sm md:text-right pb-2">
                        Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.
                    </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group">
<div className="aspect-[3/4] bg-[#1E1E1E] border border-[#2A2A2A] rounded-md mb-4 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">

<div className="absolute inset-0 flex items-center justify-center text-[#2A2A2A] opacity-20">
<i data-lucide="user" size="64"></i>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4">
<span className="text-4xl font-bold tracking-tighter text-[#E8400A] opacity-50 font-display">RF</span>
</div>
</div>
<h3 className="text-lg font-medium text-white tracking-tight uppercase">Rodrigo Farias</h3>
<p className="text-sm text-[#B0B0B0] font-light">Head Coach</p>
<p className="text-xs text-[#6B6B6B] uppercase tracking-widest mt-2">CREF 045821-G/SP</p>
</div>

<div className="group">
<div className="aspect-[3/4] bg-[#1E1E1E] border border-[#2A2A2A] rounded-md mb-4 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
<div className="absolute inset-0 flex items-center justify-center text-[#2A2A2A] opacity-20">
<i data-lucide="user" size="64"></i>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4">
<span className="text-4xl font-bold tracking-tighter text-[#E8400A] opacity-50 font-display">AL</span>
</div>
</div>
<h3 className="text-lg font-medium text-white tracking-tight uppercase">Ana Luísa</h3>
<p className="text-sm text-[#B0B0B0] font-light">Conditioning</p>
<p className="text-xs text-[#6B6B6B] uppercase tracking-widest mt-2">CREF 078342-G/SP</p>
</div>

<div className="group">
<div className="aspect-[3/4] bg-[#1E1E1E] border border-[#2A2A2A] rounded-md mb-4 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
<div className="absolute inset-0 flex items-center justify-center text-[#2A2A2A] opacity-20">
<i data-lucide="user" size="64"></i>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4">
<span className="text-4xl font-bold tracking-tighter text-[#E8400A] opacity-50 font-display">BT</span>
</div>
</div>
<h3 className="text-lg font-medium text-white tracking-tight uppercase">Bruno T.</h3>
<p className="text-sm text-[#B0B0B0] font-light">Mobility &amp; Rehab</p>
<p className="text-xs text-[#6B6B6B] uppercase tracking-widest mt-2">CREF 091205-G/SP</p>
</div>

<div className="group">
<div className="aspect-[3/4] bg-[#1E1E1E] border border-[#2A2A2A] rounded-md mb-4 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
<div className="absolute inset-0 flex items-center justify-center text-[#2A2A2A] opacity-20">
<i data-lucide="user" size="64"></i>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4">
<span className="text-4xl font-bold tracking-tighter text-[#E8400A] opacity-50 font-display">CD</span>
</div>
</div>
<h3 className="text-lg font-medium text-white tracking-tight uppercase">Camila D.</h3>
<p className="text-sm text-[#B0B0B0] font-light">Personal Trainer</p>
<p className="text-xs text-[#6B6B6B] uppercase tracking-widest mt-2">CREF 063417-G/SP</p>
</div>
</div>
</div>
</section>

<section className="border-b border-[#2A2A2A]">
<div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#2A2A2A]">

<div className="p-8 md:p-16 lg:p-24 bg-[#111111]">
<span className="text-xs uppercase tracking-widest text-[#E8400A] font-medium block mb-4">Dúvidas</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight uppercase font-display leading-[1.1] mb-12">
                        Perguntas<br/>Diretas.
                    </h2>
<div className="space-y-2">

<div className="border-b border-[#2A2A2A] py-6 group cursor-pointer" onclick="toggleAccordion('faq-1', 'icon-faq-1')">
<div className="flex justify-between items-center">
<h3 className="text-lg font-medium tracking-tight text-white group-hover:text-[#E8400A] transition-colors">Preciso ter experiência?</h3>
<i className="text-[#6B6B6B] transition-transform duration-300" data-lucide="chevron-down" id="icon-faq-1" strokeWidth="1.5"></i>
</div>
<div className="hidden mt-4 text-[#B0B0B0] font-light text-base pr-8" id="faq-1">
                                Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual.
                            </div>
</div>

<div className="border-b border-[#2A2A2A] py-6 group cursor-pointer" onclick="toggleAccordion('faq-2', 'icon-faq-2')">
<div className="flex justify-between items-center">
<h3 className="text-lg font-medium tracking-tight text-white group-hover:text-[#E8400A] transition-colors">Posso treinar sozinho?</h3>
<i className="text-[#6B6B6B] transition-transform duration-300" data-lucide="chevron-down" id="icon-faq-2" strokeWidth="1.5"></i>
</div>
<div className="hidden mt-4 text-[#B0B0B0] font-light text-base pr-8" id="faq-2">
                                Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima.
                            </div>
</div>

<div className="border-b border-[#2A2A2A] py-6 group cursor-pointer" onclick="toggleAccordion('faq-3', 'icon-faq-3')">
<div className="flex justify-between items-center">
<h3 className="text-lg font-medium tracking-tight text-white group-hover:text-[#E8400A] transition-colors">Como funciona o cancelamento?</h3>
<i className="text-[#6B6B6B] transition-transform duration-300" data-lucide="chevron-down" id="icon-faq-3" strokeWidth="1.5"></i>
</div>
<div className="hidden mt-4 text-[#B0B0B0] font-light text-base pr-8" id="faq-3">
                                Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória.
                            </div>
</div>

<div className="border-b border-[#2A2A2A] py-6 group cursor-pointer" onclick="toggleAccordion('faq-4', 'icon-faq-4')">
<div className="flex justify-between items-center">
<h3 className="text-lg font-medium tracking-tight text-white group-hover:text-[#E8400A] transition-colors">Posso visitar antes de assinar?</h3>
<i className="text-[#6B6B6B] transition-transform duration-300" data-lucide="chevron-down" id="icon-faq-4" strokeWidth="1.5"></i>
</div>
<div className="hidden mt-4 text-[#B0B0B0] font-light text-base pr-8" id="faq-4">
                                Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita.
                            </div>
</div>
</div>
</div>

<div className="p-8 md:p-16 lg:p-24 bg-[#1E1E1E]">
<span className="text-xs uppercase tracking-widest text-[#E8400A] font-medium block mb-4">Onde estamos</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight uppercase font-display leading-[1.1] mb-12">
                        No Coração<br/>De Indaiatuba.
                    </h2>
<div className="space-y-12">
<div>
<p className="text-lg font-light text-white mb-2 leading-relaxed">
                                Rua das Esmeraldas, 742<br/>
                                Jardim Morada do Sol<br/>
                                Indaiatuba, SP<br/>
                                CEP 13.334-210
                            </p>
<p className="text-sm text-[#B0B0B0] font-light flex items-center gap-2 mt-4">
<i className="text-[#6B6B6B]" data-lucide="map-pin" size="16"></i>
                                200m do Carrefour · Próximo à saída SP-075
                            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-[#2A2A2A] pt-8">
<div>
<h4 className="text-xs uppercase tracking-widest text-[#6B6B6B] font-medium mb-4">Horários</h4>
<ul className="space-y-3 text-base text-[#B0B0B0] font-light">
<li className="flex justify-between"><span className="text-white">Seg – Sex</span> <span>05H00 – 23H00</span></li>
<li className="flex justify-between"><span className="text-white">Sábado</span> <span>07H00 – 20H00</span></li>
<li className="flex justify-between"><span className="text-white">Dom &amp; Fer</span> <span>08H00 – 14H00</span></li>
</ul>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest text-[#6B6B6B] font-medium mb-4">Contato</h4>
<ul className="space-y-3 text-base text-[#B0B0B0] font-light">
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><i data-lucide="phone" size="16"></i> (19) 98234-5678</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><i data-lucide="mail" size="16"></i> contato@forgee.academy</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><i data-lucide="instagram" size="16"></i> @forgee.academy</a></li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="bg-[#E8400A] hover:bg-[#FF4D0D] text-white text-center text-xs uppercase tracking-widest font-medium px-6 py-4 rounded-none transition-colors w-full sm:w-auto" href="#">
                                Falar no WhatsApp
                            </a>
<a className="border border-[#2A2A2A] hover:border-[#E8400A] text-white text-center text-xs uppercase tracking-widest font-medium px-6 py-4 rounded-none transition-colors w-full sm:w-auto" href="#">
                                Como Chegar
                            </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden flex flex-col items-center justify-center text-center" id="agendar">
<div className="relative z-10 max-w-4xl mx-auto px-4">
<h2 className="text-6xl md:text-8xl font-semibold tracking-tight uppercase font-display leading-[0.9] mb-12">
                    A Decisão<br/>
                    Já Foi Tomada.<br/>
<span className="text-[#E8400A]">Agora É A Ação.</span>
</h2>
<a className="inline-block bg-white text-[#111111] hover:bg-[#E8400A] hover:text-white text-sm uppercase tracking-widest font-bold px-10 py-5 rounded-none transition-colors" href="#">
                    Agendar Visita Gratuita
                </a>
</div>

<div className="absolute inset-x-0 bottom-10 overflow-hidden whitespace-nowrap opacity-20 pointer-events-none rotate-[-2deg] scale-110 border-y border-[#2A2A2A] py-2">
<div className="inline-block animate-marquee text-[#6B6B6B] text-4xl md:text-6xl font-bold uppercase font-display tracking-tight">
                    A G E N D E   U M A   V I S I T A   ·   G R A T U I T A   ·   S E M   C O M P R O M I S S O   ·   T R A G A   T Ê N I S   ·   
                    A G E N D E   U M A   V I S I T A   ·   G R A T U I T A   ·   S E M   C O M P R O M I S S O   ·   T R A G A   T Ê N I S   ·  
                </div>
</div>
</section>
</main>

<footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="md:col-span-2">
<a className="text-3xl font-bold tracking-tight uppercase font-display text-white mb-2 block" href="#">
                        FORGEE
                    </a>
<p className="text-xs text-[#6B6B6B] uppercase tracking-widest font-medium">Beyond Limits Known™</p>
</div>

<div>
<h4 className="text-xs uppercase tracking-widest text-[#E8400A] font-medium mb-6">Academia</h4>
<ul className="space-y-4 text-sm text-[#B0B0B0] font-light">
<li><a className="hover:text-white transition-colors" href="#espaco">Espaço</a></li>
<li><a className="hover:text-white transition-colors" href="#programas">Programas</a></li>
<li><a className="hover:text-white transition-colors" href="#equipe">Equipe</a></li>
<li><a className="hover:text-white transition-colors" href="#planos">Planos</a></li>
</ul>
</div>

<div>
<h4 className="text-xs uppercase tracking-widest text-[#E8400A] font-medium mb-6">Legal &amp; Redes</h4>
<ul className="space-y-4 text-sm text-[#B0B0B0] font-light">
<li><a className="hover:text-white transition-colors" href="#">Política de Privacidade</a></li>
<li><a className="hover:text-white transition-colors" href="#">Termos de Uso</a></li>
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
</ul>
</div>
</div>

<div className="border-t border-[#2A2A2A] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B6B6B] uppercase tracking-widest font-medium text-center md:text-left">
<p>FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP</p>
<p>DESIGN SYSTEM © 2026</p>
</div>
</div>
</footer>



    </>
  );
}
