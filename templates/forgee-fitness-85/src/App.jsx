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

        // Mobile Menu Logic
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = menuBtn.querySelector('i');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            
            // Toggle icon
            if (mobileMenu.classList.contains('hidden')) {
                menuBtn.innerHTML = '<i data-lucide="menu" stroke-width="1.5" class="w-6 h-6"></i>';
            } else {
                menuBtn.innerHTML = '<i data-lucide="x" stroke-width="1.5" class="w-6 h-6"></i>';
            }
            lucide.createIcons();
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = mobileMenu.classList.contains('hidden') ? 'auto' : 'hidden';
        });

        // Close menu on link click
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                menuBtn.innerHTML = '<i data-lucide="menu" stroke-width="1.5" class="w-6 h-6"></i>';
                lucide.createIcons();
                document.body.style.overflow = 'auto';
            });
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
      

<header className="fixed top-0 w-full z-50 bg-[#111111]/90 backdrop-blur border-b border-[#2A2A2A]">
<div className="max-w-[1440px] mx-auto px-6 lg:px-20 h-20 flex items-center justify-between">

<a className="text-2xl font-extrabold tracking-tight uppercase" href="#">FORGEE</a>

<nav className="hidden md:flex gap-8 items-center">
<a className="text-sm font-medium tracking-widest text-[#B0B0B0] hover:text-white uppercase transition-colors" href="#espaco">Espaço</a>
<a className="text-sm font-medium tracking-widest text-[#B0B0B0] hover:text-white uppercase transition-colors" href="#programas">Programas</a>
<a className="text-sm font-medium tracking-widest text-[#B0B0B0] hover:text-white uppercase transition-colors" href="#equipe">Equipe</a>
<a className="text-sm font-medium tracking-widest text-[#B0B0B0] hover:text-white uppercase transition-colors" href="#planos">Planos</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium tracking-widest text-white uppercase hover:text-[#E8400A] transition-colors" href="#">Sou Membro</a>
<a className="bg-[#E8400A] text-white px-6 py-3 text-sm font-medium tracking-widest uppercase rounded-none hover:bg-[#FF4D0D] transition-colors" href="#agendar">Agendar Visita</a>
</div>

<button className="md:hidden text-white p-2" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>

<div className="w-full bg-[#1E1E1E] border-b border-[#2A2A2A] py-2 px-6 lg:px-20 hidden md:block">
<p className="text-xs font-light text-[#6B6B6B] tracking-widest uppercase text-center md:text-left">
                Beyond Limits Known™ <span className="mx-2">·</span> Indaiatuba, SP <span className="mx-2">·</span> Est. 2018
            </p>
</div>
</header>

<div className="fixed inset-0 bg-[#111111] z-40 hidden flex-col pt-24 px-6 border-t border-[#2A2A2A]" id="mobile-menu">
<nav className="flex flex-col gap-6 mb-12">
<a className="text-2xl font-semibold tracking-tight uppercase text-[#B0B0B0] hover:text-white" href="#espaco">Espaço</a>
<a className="text-2xl font-semibold tracking-tight uppercase text-[#B0B0B0] hover:text-white" href="#programas">Programas</a>
<a className="text-2xl font-semibold tracking-tight uppercase text-[#B0B0B0] hover:text-white" href="#equipe">Equipe</a>
<a className="text-2xl font-semibold tracking-tight uppercase text-[#B0B0B0] hover:text-white" href="#planos">Planos</a>
</nav>
<div className="flex flex-col gap-4 mt-auto pb-12">
<a className="border border-[#2A2A2A] text-center py-4 text-sm font-medium tracking-widest uppercase text-white" href="#">Sou Membro</a>
<a className="bg-[#E8400A] text-center py-4 text-sm font-medium tracking-widest uppercase text-white" href="#agendar">Agendar Visita</a>
</div>
</div>
<main className="flex-grow pt-24 md:pt-32">

<section className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 md:py-24 lg:py-32 flex flex-col justify-center min-h-[80vh] relative">
<div className="max-w-4xl z-10">
<h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight uppercase leading-[0.9] mb-8 text-white">
                    SEM MÁGICA<br/>
                    SEM ATALHOS<br/>
<span className="text-[#E8400A]">SEM DESCULPAS</span>
</h1>
<p className="text-xl md:text-2xl font-medium tracking-tight text-[#D9D9D9] mb-6 border-l-2 border-[#E8400A] pl-4">
                    Treinos progressivos e acompanhamento real!
                </p>
<p className="text-lg md:text-xl font-light text-[#B0B0B0] max-w-2xl mb-12 leading-relaxed">
                    Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#E8400A] text-white px-8 py-4 text-sm font-medium tracking-widest uppercase rounded-none text-center hover:bg-[#FF4D0D] transition-colors flex items-center justify-center gap-2" href="#planos">
                        Começar Agora
                        <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="border border-[#2A2A2A] bg-transparent text-white px-8 py-4 text-sm font-medium tracking-widest uppercase rounded-none text-center hover:border-[#6B6B6B] transition-colors" href="#espaco">
                        Conhecer o Espaço
                    </a>
</div>
</div>

<div className="absolute top-0 right-0 w-full md:w-2/3 h-full overflow-hidden -z-10 pointer-events-none opacity-40 md:opacity-100">
<div className="absolute top-1/4 right-[-10%] w-[600px] h-[600px] bg-[#E8400A] rounded-full blur-[120px] opacity-20 mix-blend-screen"></div>
<div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-[#B22A00] rounded-full blur-[100px] opacity-20 mix-blend-screen"></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMyQTJBMkEiIGZpbGwtb3BhY2l0eT0iMC41Ii8+PC9zdmc+')] opacity-20"></div>
</div>
</section>

<div className="max-w-[1440px] mx-auto px-6 lg:px-20 pb-16 md:pb-24">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-y border-[#2A2A2A] py-8">
<div className="flex flex-col">
<span className="text-xs font-light text-[#6B6B6B] tracking-widest uppercase mb-1">Funcionamento</span>
<span className="text-xl font-semibold tracking-tight text-[#D9D9D9]">05H–23H</span>
</div>
<div className="flex flex-col">
<span className="text-xs font-light text-[#6B6B6B] tracking-widest uppercase mb-1">Frequência</span>
<span className="text-xl font-semibold tracking-tight text-[#D9D9D9]">7 DIAS</span>
</div>
<div className="flex flex-col">
<span className="text-xs font-light text-[#6B6B6B] tracking-widest uppercase mb-1">Área</span>
<span className="text-xl font-semibold tracking-tight text-[#D9D9D9]">1.800M²</span>
</div>
<div className="flex flex-col">
<span className="text-xs font-light text-[#6B6B6B] tracking-widest uppercase mb-1">Comunidade</span>
<span className="text-xl font-semibold tracking-tight text-[#E8400A]">+1.200 ALUNOS</span>
</div>
<div className="flex flex-col">
<span className="text-xs font-light text-[#6B6B6B] tracking-widest uppercase mb-1">Fundação</span>
<span className="text-xl font-semibold tracking-tight text-[#D9D9D9]">DESDE 2018</span>
</div>
</div>
</div>

<section className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 md:py-32" id="espaco">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">

<div className="md:col-span-5 flex flex-col justify-center">
<span className="block text-xs font-normal tracking-widest text-[#6B6B6B] uppercase mb-6">Quem somos</span>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight uppercase leading-[1.0] mb-8">
                        FORJADOS<br/>
                        PELA<br/>
<span className="text-[#E8400A]">DISCIPLINA.</span>
</h2>
<div className="space-y-6 text-lg font-light text-[#B0B0B0] leading-relaxed">
<p>A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.</p>
<p>Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.</p>
</div>
<blockquote className="my-10 border-l-2 border-[#E8400A] pl-6 py-2">
<p className="text-2xl font-medium tracking-tight text-white italic">"In silence, the transformation begins."</p>
</blockquote>
<p className="text-lg font-light text-[#B0B0B0] leading-relaxed">
                        Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
                    </p>
</div>

<div className="md:col-span-7 flex flex-col gap-12">
<div className="w-full aspect-video bg-[#1E1E1E] rounded border border-[#2A2A2A] relative overflow-hidden flex items-center justify-center">
<i className="w-12 h-12 text-[#3A3A3A]" data-lucide="image" strokeWidth="1.0"></i>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-80"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
<div className="bg-[#1E1E1E] p-6 rounded border border-[#2A2A2A]">
<h3 className="text-xl font-medium tracking-tight text-white mb-3">01 — Intensidade</h3>
<p className="text-base font-light text-[#B0B0B0] leading-relaxed">O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.</p>
</div>
<div className="bg-[#1E1E1E] p-6 rounded border border-[#2A2A2A]">
<h3 className="text-xl font-medium tracking-tight text-white mb-3">02 — Precisão</h3>
<p className="text-base font-light text-[#B0B0B0] leading-relaxed">Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.</p>
</div>
<div className="bg-[#1E1E1E] p-6 rounded border border-[#2A2A2A] border-b-2 border-b-[#E8400A]">
<h3 className="text-xl font-medium tracking-tight text-[#E8400A] mb-3">03 — Controle</h3>
<p className="text-base font-light text-[#B0B0B0] leading-relaxed">Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.</p>
</div>
</div>
</div>
</div>

<div className="mt-24 md:mt-32">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-[#111111] border border-[#2A2A2A] p-8 rounded flex flex-col h-full">
<i className="w-8 h-8 text-[#3A3A3A] mb-6" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg font-light text-[#D9D9D9] mb-8 flex-grow">"Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas."</p>
<div className="mt-auto">
<span className="block text-base font-medium tracking-tight text-white">Rafael M.</span>
<span className="block text-sm font-light text-[#6B6B6B] mt-1">Engenheiro · Aluno há 3 anos</span>
</div>
</div>
<div className="bg-[#1E1E1E] border border-[#2A2A2A] p-8 rounded flex flex-col h-full">
<i className="w-8 h-8 text-[#E8400A] mb-6" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg font-light text-white mb-8 flex-grow">"Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha."</p>
<div className="mt-auto">
<span className="block text-base font-medium tracking-tight text-white">Juliana T.</span>
<span className="block text-sm font-light text-[#6B6B6B] mt-1">Professora · Aluna há 2 anos</span>
</div>
</div>
<div className="bg-[#111111] border border-[#2A2A2A] p-8 rounded flex flex-col h-full">
<i className="w-8 h-8 text-[#3A3A3A] mb-6" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg font-light text-[#D9D9D9] mb-8 flex-grow">"A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado."</p>
<div className="mt-auto">
<span className="block text-base font-medium tracking-tight text-white">Lucas O.</span>
<span className="block text-sm font-light text-[#6B6B6B] mt-1">Empresário · Aluno há 4 anos</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-[#2A2A2A] bg-[#1E1E1E]/50">
<div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<div className="sticky top-32">
<span className="block text-xs font-normal tracking-widest text-[#6B6B6B] uppercase mb-6">Estrutura</span>
<h2 className="text-5xl font-semibold tracking-tight uppercase leading-[1.0] mb-6">
                            EQUIPAMENTO<br/>
                            QUE NÃO TE<br/>
<span className="text-[#E8400A]">LIMITA.</span>
</h2>
<p className="text-lg font-light text-[#B0B0B0] leading-relaxed">
                            Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.
                        </p>
</div>
</div>
<div className="md:col-span-8 flex flex-col gap-2">

<details className="group bg-[#111111] rounded border border-[#2A2A2A] overflow-hidden" open="">
<summary className="flex justify-between items-center cursor-pointer p-6 text-xl md:text-2xl font-medium tracking-tight hover:bg-[#1A1A1A] transition-colors select-none">
<span className="uppercase">01 · Cardio &amp; Conditioning</span>
<i className="w-6 h-6 text-[#6B6B6B] group-open:hidden" data-lucide="plus" strokeWidth="1.5"></i>
<i className="w-6 h-6 text-[#E8400A] hidden group-open:block" data-lucide="minus" strokeWidth="1.5"></i>
</summary>
<div className="px-6 pb-6 pt-2 text-lg font-light text-[#B0B0B0] border-t border-[#2A2A2A]">
<ul className="space-y-4 mt-4">
<li className="flex justify-between items-center border-b border-[#2A2A2A] pb-3">
<span>Assault Bike Concept2</span>
<span className="text-xs font-medium tracking-widest text-white uppercase bg-[#2A2A2A] px-2 py-1 rounded">8 Unidades</span>
</li>
<li className="flex justify-between items-center border-b border-[#2A2A2A] pb-3">
<span>Remo Concept2 Model D</span>
<span className="text-xs font-medium tracking-widest text-white uppercase bg-[#2A2A2A] px-2 py-1 rounded">6 Unidades</span>
</li>
<li className="flex justify-between items-center border-b border-[#2A2A2A] pb-3">
<span>SkiErg Concept2</span>
<span className="text-xs font-medium tracking-widest text-white uppercase bg-[#2A2A2A] px-2 py-1 rounded">4 Unidades</span>
</li>
<li className="flex justify-between items-center border-b border-[#2A2A2A] pb-3">
<span>Esteiras NordicTrack com inclinação negativa</span>
</li>
<li className="flex justify-between items-center pb-1">
<span>Cordas de batalha 15m e 20m</span>
</li>
</ul>
</div>
</details>

<details className="group bg-[#111111] rounded border border-[#2A2A2A] overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 text-xl md:text-2xl font-medium tracking-tight hover:bg-[#1A1A1A] transition-colors select-none">
<span className="uppercase">02 · Força Livre</span>
<i className="w-6 h-6 text-[#6B6B6B] group-open:hidden" data-lucide="plus" strokeWidth="1.5"></i>
<i className="w-6 h-6 text-[#E8400A] hidden group-open:block" data-lucide="minus" strokeWidth="1.5"></i>
</summary>
<div className="px-6 pb-6 pt-6 text-lg font-light text-[#B0B0B0] border-t border-[#2A2A2A]">
<p>Plataformas de LPO oficiais, racks de agachamento monobloco, anilhas bumper calibradas e halteres até 60kg.</p>
</div>
</details>

<details className="group bg-[#111111] rounded border border-[#2A2A2A] overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 text-xl md:text-2xl font-medium tracking-tight hover:bg-[#1A1A1A] transition-colors select-none">
<span className="uppercase">03 · Máquinas</span>
<i className="w-6 h-6 text-[#6B6B6B] group-open:hidden" data-lucide="plus" strokeWidth="1.5"></i>
<i className="w-6 h-6 text-[#E8400A] hidden group-open:block" data-lucide="minus" strokeWidth="1.5"></i>
</summary>
<div className="px-6 pb-6 pt-6 text-lg font-light text-[#B0B0B0] border-t border-[#2A2A2A]">
<p>Seleção biomecânica focada em isolamento e carga. Linha completa articulada e de polias com cabos de aço revestidos.</p>
</div>
</details>

<details className="group bg-[#111111] rounded border border-[#2A2A2A] overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 text-xl md:text-2xl font-medium tracking-tight hover:bg-[#1A1A1A] transition-colors select-none">
<span className="uppercase">04 · Funcional &amp; Mobility</span>
<i className="w-6 h-6 text-[#6B6B6B] group-open:hidden" data-lucide="plus" strokeWidth="1.5"></i>
<i className="w-6 h-6 text-[#E8400A] hidden group-open:block" data-lucide="minus" strokeWidth="1.5"></i>
</summary>
<div className="px-6 pb-6 pt-6 text-lg font-light text-[#B0B0B0] border-t border-[#2A2A2A]">
<p>Área de grama sintética de alta densidade, kettlebells de competição, plyoboxes de madeira e estação de mobilidade dedicada.</p>
</div>
</details>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 md:py-32" id="programas">
<div className="text-center mb-16 md:mb-24">
<span className="block text-xs font-normal tracking-widest text-[#6B6B6B] uppercase mb-4">O que oferecemos</span>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight uppercase leading-[1.0]">
                    UM PROTOCOLO<br/>
                    PARA CADA <span className="text-[#E8400A]">OBJETIVO.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-[#1E1E1E] border border-[#2A2A2A] p-8 md:p-10 rounded flex flex-col">
<h3 className="text-2xl font-medium tracking-tight text-white uppercase mb-4">01 — Forgee Strength</h3>
<p className="text-lg font-light text-[#B0B0B0] mb-8 flex-grow">Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.</p>
<div className="grid grid-cols-2 gap-4 border-t border-[#2A2A2A] pt-6">
<div>
<span className="block text-xs font-medium tracking-widest text-[#6B6B6B] uppercase mb-1">Para quem é</span>
<span className="text-base font-light text-white">Hipertrofia e força.</span>
</div>
<div>
<span className="block text-xs font-medium tracking-widest text-[#6B6B6B] uppercase mb-1">Frequência</span>
<span className="text-base font-light text-white">3–5× por semana.</span>
</div>
</div>
</div>

<div className="bg-[#111111] border-2 border-[#E8400A] p-8 md:p-10 rounded flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#E8400A] text-white text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-bl">Destaque</div>
<h3 className="text-2xl font-medium tracking-tight text-[#E8400A] uppercase mb-4">02 — Forgee Conditioning</h3>
<p className="text-lg font-light text-[#D9D9D9] mb-8 flex-grow">Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.</p>
<div className="grid grid-cols-2 gap-4 border-t border-[#3A3A3A] pt-6">
<div>
<span className="block text-xs font-medium tracking-widest text-[#6B6B6B] uppercase mb-1">Para quem é</span>
<span className="text-base font-light text-white">Condicionamento.</span>
</div>
<div>
<span className="block text-xs font-medium tracking-widest text-[#6B6B6B] uppercase mb-1">Turmas</span>
<span className="text-base font-light text-white">06H · 07H · 12H · 18H · 19H30</span>
</div>
</div>
</div>

<div className="bg-[#1E1E1E] border border-[#2A2A2A] p-8 md:p-10 rounded flex flex-col">
<h3 className="text-2xl font-medium tracking-tight text-white uppercase mb-4">03 — Forgee Mobility</h3>
<p className="text-lg font-light text-[#B0B0B0] mb-0 flex-grow">Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.</p>
</div>

<div className="bg-[#1E1E1E] border border-[#2A2A2A] p-8 md:p-10 rounded flex flex-col">
<h3 className="text-2xl font-medium tracking-tight text-white uppercase mb-4">04 — Personal Training</h3>
<p className="text-lg font-light text-[#B0B0B0] mb-0 flex-grow">Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.</p>
</div>
</div>
</section>

<section className="border-t border-[#2A2A2A] bg-[#111111]" id="planos">
<div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 md:py-32">
<div className="text-center mb-16 md:mb-24">
<span className="block text-xs font-normal tracking-widest text-[#6B6B6B] uppercase mb-4">Investimento</span>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight uppercase leading-[1.0] mb-6">
                        SEM MATRÍCULA.<br/>
                        SEM FIDELIDADE.<br/>
<span className="text-[#E8400A]">SEM ENROLAÇÃO.</span>
</h2>
<p className="text-xl font-light text-[#B0B0B0]">Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

<div className="border border-[#2A2A2A] bg-[#111111] rounded flex flex-col p-8">
<h3 className="text-xl font-medium tracking-tight uppercase text-white mb-2">Livre</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold tracking-tight">R$149</span>
<span className="text-sm font-light text-[#6B6B6B]">/mês</span>
</div>
<ul className="space-y-4 mb-10 flex-grow text-base font-light text-[#D9D9D9]">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Acesso ilimitado 05H–23H</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Avaliação física de entrada</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Planilha de treino inicial</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> App FORGEE</li>
<li className="flex items-start gap-3 text-[#6B6B6B]"><i className="w-5 h-5 shrink-0 mt-0.5" data-lucide="minus" strokeWidth="1.5"></i> 2 sessões de Personal/mês</li>
<li className="flex items-start gap-3 text-[#6B6B6B]"><i className="w-5 h-5 shrink-0 mt-0.5" data-lucide="minus" strokeWidth="1.5"></i> 1 aula Conditioning/semana</li>
<li className="flex items-start gap-3 text-[#6B6B6B]"><i className="w-5 h-5 shrink-0 mt-0.5" data-lucide="minus" strokeWidth="1.5"></i> Acesso ao Mobility</li>
</ul>
<button className="w-full border border-[#2A2A2A] text-white py-4 text-sm font-medium tracking-widest uppercase hover:bg-[#1E1E1E] transition-colors">
                            Quero esse plano
                        </button>
</div>

<div className="border-2 border-[#E8400A] bg-[#1E1E1E] rounded flex flex-col p-8 relative transform md:-translate-y-4 shadow-2xl shadow-[#E8400A]/5">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E8400A] text-white text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-sm">Mais Escolhido</div>
<h3 className="text-xl font-medium tracking-tight uppercase text-[#E8400A] mb-2 mt-2">Plus</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold tracking-tight text-white">R$229</span>
<span className="text-sm font-light text-[#6B6B6B]">/mês</span>
</div>
<ul className="space-y-4 mb-10 flex-grow text-base font-light text-white">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Acesso ilimitado 05H–23H</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Avaliação física de entrada</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Planilha de treino inicial</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> App FORGEE</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> 2 sessões de Personal/mês</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> 1 aula Conditioning/semana</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Revisão de planilha mensal</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Acesso ao Mobility</li>
</ul>
<button className="w-full bg-[#E8400A] text-white py-4 text-sm font-medium tracking-widest uppercase hover:bg-[#FF4D0D] transition-colors">
                            Quero esse plano
                        </button>
</div>

<div className="border border-[#2A2A2A] bg-[#111111] rounded flex flex-col p-8">
<h3 className="text-xl font-medium tracking-tight uppercase text-white mb-2">Elite</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold tracking-tight">R$389</span>
<span className="text-sm font-light text-[#6B6B6B]">/mês</span>
</div>
<ul className="space-y-4 mb-10 flex-grow text-base font-light text-[#D9D9D9]">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Tudo do plano Plus</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> 4 sessões de Personal/mês</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Acesso ilimitado a classes</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Bioimpedância mensal</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#E8400A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> WhatsApp com coach dedicado</li>
</ul>
<button className="w-full border border-[#2A2A2A] text-white py-4 text-sm font-medium tracking-widest uppercase hover:bg-[#1E1E1E] transition-colors">
                            Quero esse plano
                        </button>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center bg-[#1E1E1E] border border-[#2A2A2A] rounded p-6">
<p className="text-sm font-light text-[#B0B0B0] text-center md:text-left mb-4 md:mb-0">
                        Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · <span className="text-white font-medium">Plano anual com 15% de desconto</span>
</p>
<div className="flex items-center gap-4 bg-[#111111] border border-[#2A2A2A] px-4 py-2 rounded">
<span className="text-sm font-medium tracking-widest uppercase text-white">Diária: R$ 39</span>
<div className="w-px h-4 bg-[#3A3A3A]"></div>
<a className="text-sm font-medium tracking-widest uppercase text-[#E8400A] hover:text-white transition-colors" href="#">Agendar</a>
</div>
</div>
</div>
</section>

<section className="border-t border-[#2A2A2A] bg-[#1E1E1E]/30" id="equipe">
<div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 md:py-32">
<div className="mb-16 md:mb-24">
<span className="block text-xs font-normal tracking-widest text-[#6B6B6B] uppercase mb-4">Quem te acompanha</span>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight uppercase leading-[1.0] mb-6">
                        COACHES QUE<br/>
<span className="text-[#E8400A]">TREINAM.</span>
</h2>
<p className="text-xl font-light text-[#B0B0B0] max-w-2xl">
                        Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.
                    </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-[#111111] rounded border border-[#2A2A2A] mb-4 relative overflow-hidden flex items-center justify-center group-hover:border-[#E8400A] transition-colors">
<i className="w-16 h-16 text-[#2A2A2A]" data-lucide="user" strokeWidth="1"></i>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-60"></div>
</div>
<h3 className="text-xl font-medium tracking-tight uppercase text-white mb-1">Rodrigo Farias</h3>
<p className="text-sm font-medium tracking-widest text-[#E8400A] uppercase mb-1">Head Coach</p>
<p className="text-xs font-light text-[#6B6B6B]">CREF 045821-G/SP</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-[#111111] rounded border border-[#2A2A2A] mb-4 relative overflow-hidden flex items-center justify-center group-hover:border-[#E8400A] transition-colors">
<i className="w-16 h-16 text-[#2A2A2A]" data-lucide="user" strokeWidth="1"></i>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-60"></div>
</div>
<h3 className="text-xl font-medium tracking-tight uppercase text-white mb-1">Ana Luísa</h3>
<p className="text-sm font-medium tracking-widest text-[#E8400A] uppercase mb-1">Conditioning</p>
<p className="text-xs font-light text-[#6B6B6B]">CREF 078342-G/SP</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-[#111111] rounded border border-[#2A2A2A] mb-4 relative overflow-hidden flex items-center justify-center group-hover:border-[#E8400A] transition-colors">
<i className="w-16 h-16 text-[#2A2A2A]" data-lucide="user" strokeWidth="1"></i>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-60"></div>
</div>
<h3 className="text-xl font-medium tracking-tight uppercase text-white mb-1">Bruno T.</h3>
<p className="text-sm font-medium tracking-widest text-[#E8400A] uppercase mb-1">Mobility &amp; Rehab</p>
<p className="text-xs font-light text-[#6B6B6B]">CREF 091205-G/SP</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-[#111111] rounded border border-[#2A2A2A] mb-4 relative overflow-hidden flex items-center justify-center group-hover:border-[#E8400A] transition-colors">
<i className="w-16 h-16 text-[#2A2A2A]" data-lucide="user" strokeWidth="1"></i>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-60"></div>
</div>
<h3 className="text-xl font-medium tracking-tight uppercase text-white mb-1">Camila D.</h3>
<p className="text-sm font-medium tracking-widest text-[#E8400A] uppercase mb-1">Personal Trainer</p>
<p className="text-xs font-light text-[#6B6B6B]">CREF 063417-G/SP</p>
</div>
</div>
</div>
</section>

<section className="border-t border-[#2A2A2A] bg-[#111111]">
<div className="max-w-[800px] mx-auto px-6 py-16 md:py-32">
<div className="text-center mb-16">
<span className="block text-xs font-normal tracking-widest text-[#6B6B6B] uppercase mb-4">Dúvidas</span>
<h2 className="text-5xl font-semibold tracking-tight uppercase leading-[1.0]">
                        PERGUNTAS<br/>
<span className="text-[#E8400A]">DIRETAS.</span>
</h2>
</div>
<div className="space-y-4">
<details className="group bg-[#1E1E1E] rounded border border-[#2A2A2A] overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 text-lg md:text-xl font-medium tracking-tight hover:bg-[#2A2A2A] transition-colors select-none">
<span>Preciso ter experiência?</span>
<i className="w-5 h-5 text-[#6B6B6B] group-open:rotate-180 transition-transform" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="px-6 pb-6 pt-2 text-lg font-light text-[#B0B0B0]">
<p>Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual.</p>
</div>
</details>
<details className="group bg-[#1E1E1E] rounded border border-[#2A2A2A] overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 text-lg md:text-xl font-medium tracking-tight hover:bg-[#2A2A2A] transition-colors select-none">
<span>Posso treinar sozinho?</span>
<i className="w-5 h-5 text-[#6B6B6B] group-open:rotate-180 transition-transform" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="px-6 pb-6 pt-2 text-lg font-light text-[#B0B0B0]">
<p>Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima.</p>
</div>
</details>
<details className="group bg-[#1E1E1E] rounded border border-[#2A2A2A] overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 text-lg md:text-xl font-medium tracking-tight hover:bg-[#2A2A2A] transition-colors select-none">
<span>Como funciona o cancelamento?</span>
<i className="w-5 h-5 text-[#6B6B6B] group-open:rotate-180 transition-transform" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="px-6 pb-6 pt-2 text-lg font-light text-[#B0B0B0]">
<p>Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória.</p>
</div>
</details>
<details className="group bg-[#1E1E1E] rounded border border-[#2A2A2A] overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 text-lg md:text-xl font-medium tracking-tight hover:bg-[#2A2A2A] transition-colors select-none">
<span>Posso visitar antes de assinar?</span>
<i className="w-5 h-5 text-[#6B6B6B] group-open:rotate-180 transition-transform" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="px-6 pb-6 pt-2 text-lg font-light text-[#B0B0B0]">
<p>Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita.</p>
</div>
</details>
</div>
</div>
</section>

<section className="border-t border-[#2A2A2A] bg-[#1E1E1E]/50">
<div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16">
<div>
<span className="block text-xs font-normal tracking-widest text-[#6B6B6B] uppercase mb-4">Onde estamos</span>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight uppercase leading-[1.0] mb-8">
                        NO CORAÇÃO<br/>
                        DE <span className="text-[#E8400A]">INDAIATUBA.</span>
</h2>
<div className="bg-[#111111] p-6 rounded border border-[#2A2A2A] mb-8">
<p className="text-xl font-light text-white leading-relaxed mb-4">
                            Rua das Esmeraldas, 742<br/>
                            Jardim Morada do Sol<br/>
                            Indaiatuba, SP<br/>
                            CEP 13.334-210
                        </p>
<p className="text-sm font-medium tracking-widest text-[#6B6B6B] uppercase">200m do Carrefour · Próximo à saída SP-075</p>
</div>
<div className="flex gap-4">
<button className="bg-[#E8400A] text-white px-6 py-4 text-sm font-medium tracking-widest uppercase rounded-none hover:bg-[#FF4D0D] transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i> Como Chegar
                        </button>
</div>
</div>
<div className="flex flex-col gap-8 justify-center">
<div>
<h3 className="text-xs font-medium tracking-widest text-[#6B6B6B] uppercase mb-4 border-b border-[#2A2A2A] pb-2">Horários de Funcionamento</h3>
<ul className="space-y-3 text-lg font-light text-[#D9D9D9]">
<li className="flex justify-between"><span>Segunda a Sexta</span> <span className="font-medium text-white">05H00 – 23H00</span></li>
<li className="flex justify-between"><span>Sábado</span> <span className="font-medium text-white">07H00 – 20H00</span></li>
<li className="flex justify-between"><span>Domingo e Feriados</span> <span className="font-medium text-white">08H00 – 14H00</span></li>
</ul>
</div>
<div>
<h3 className="text-xs font-medium tracking-widest text-[#6B6B6B] uppercase mb-4 border-b border-[#2A2A2A] pb-2">Contato</h3>
<ul className="space-y-3 text-lg font-light text-[#D9D9D9] mb-6">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#6B6B6B]" data-lucide="message-circle" strokeWidth="1.5"></i> (19) 98234-5678</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#6B6B6B]" data-lucide="mail" strokeWidth="1.5"></i> contato@forgee.academy</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#6B6B6B]" data-lucide="instagram" strokeWidth="1.5"></i> @forgee.academy</li>
</ul>
<button className="border border-[#2A2A2A] text-white px-6 py-4 text-sm font-medium tracking-widest uppercase rounded-none hover:border-[#6B6B6B] transition-colors w-full sm:w-auto">
                            Falar no WhatsApp
                        </button>
</div>
</div>
</div>
</section>

<section className="bg-[#E8400A] text-[#111111] py-24 md:py-32 overflow-hidden relative">
<div className="max-w-[1440px] mx-auto px-6 lg:px-20 text-center relative z-10">
<h2 className="text-6xl md:text-8xl font-extrabold tracking-tight uppercase leading-[0.9] mb-12">
                    A DECISÃO<br/>
                    JÁ FOI TOMADA.<br/>
                    AGORA É A AÇÃO.
                </h2>
<button className="bg-[#111111] text-white px-10 py-5 text-lg font-medium tracking-widest uppercase rounded-none hover:bg-[#1E1E1E] transition-colors border border-[#111111] shadow-[4px_4px_0px_0px_rgba(17,17,17,0.3)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 duration-200">
                    Agendar Visita Gratuita
                </button>
</div>

<div className="absolute top-8 left-0 w-[200%] flex gap-4 opacity-20 pointer-events-none select-none">
<span className="text-4xl font-extrabold tracking-widest uppercase whitespace-nowrap">AGENDE UMA VISITA · GRATUITA · SEM COMPROMISSO · TRAGA TÊNIS · AGENDE UMA VISITA · GRATUITA · SEM COMPROMISSO · TRAGA TÊNIS</span>
</div>
<div className="absolute bottom-8 left-0 w-[200%] flex gap-4 opacity-20 pointer-events-none select-none -translate-x-[20%]">
<span className="text-4xl font-extrabold tracking-widest uppercase whitespace-nowrap">AGENDE UMA VISITA · GRATUITA · SEM COMPROMISSO · TRAGA TÊNIS · AGENDE UMA VISITA · GRATUITA · SEM COMPROMISSO · TRAGA TÊNIS</span>
</div>
</section>
</main>

<footer className="bg-[#111111] border-t border-[#2A2A2A] pt-16 pb-8">
<div className="max-w-[1440px] mx-auto px-6 lg:px-20">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
<div className="md:col-span-6 flex flex-col">
<a className="text-4xl font-extrabold tracking-tight uppercase text-white mb-2" href="#">FORGEE</a>
<span className="text-sm font-medium tracking-widest text-[#E8400A] uppercase">Beyond Limits Known™</span>
</div>
<div className="md:col-span-3">
<h4 className="text-xs font-medium tracking-widest text-[#6B6B6B] uppercase mb-6">Academia</h4>
<ul className="space-y-4">
<li><a className="text-base font-light text-[#B0B0B0] hover:text-white transition-colors" href="#espaco">Espaço</a></li>
<li><a className="text-base font-light text-[#B0B0B0] hover:text-white transition-colors" href="#programas">Programas</a></li>
<li><a className="text-base font-light text-[#B0B0B0] hover:text-white transition-colors" href="#equipe">Equipe</a></li>
<li><a className="text-base font-light text-[#B0B0B0] hover:text-white transition-colors" href="#planos">Planos</a></li>
</ul>
</div>
<div className="md:col-span-3">
<h4 className="text-xs font-medium tracking-widest text-[#6B6B6B] uppercase mb-6">Legal &amp; Redes</h4>
<ul className="space-y-4">
<li><a className="text-base font-light text-[#B0B0B0] hover:text-white transition-colors" href="#">Política de Privacidade</a></li>
<li><a className="text-base font-light text-[#B0B0B0] hover:text-white transition-colors" href="#">Termos de Uso</a></li>
<li className="pt-4"><a className="text-base font-medium tracking-widest uppercase text-white hover:text-[#E8400A] transition-colors flex items-center gap-2" href="#">Instagram <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i></a></li>
</ul>
</div>
</div>
<div className="border-t border-[#2A2A2A] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs font-light text-[#6B6B6B] tracking-widest uppercase text-center md:text-left">
                    FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP
                </p>
<p className="text-xs font-light text-[#6B6B6B] tracking-widest uppercase">
                    DESIGN SYSTEM © 2026
                </p>
</div>
</div>
</footer>


    </>
  );
}
