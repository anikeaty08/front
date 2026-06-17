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
      

<nav className="fixed w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#2E2E2E]">
<div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex-shrink-0">
<a className="font-heading font-extrabold text-2xl tracking-tighter text-[#F5F5F5] uppercase" href="#">
                        Forgee
                    </a>
</div>

<div className="hidden md:block">
<div className="ml-10 flex items-baseline space-x-8">
<a className="text-[#9A9A9A] hover:text-[#C8F000] px-3 py-2 text-sm font-medium uppercase tracking-wider transition-colors" href="#espaco">Espaço</a>
<a className="text-[#9A9A9A] hover:text-[#C8F000] px-3 py-2 text-sm font-medium uppercase tracking-wider transition-colors" href="#programas">Programas</a>
<a className="text-[#9A9A9A] hover:text-[#C8F000] px-3 py-2 text-sm font-medium uppercase tracking-wider transition-colors" href="#equipe">Equipe</a>
<a className="text-[#9A9A9A] hover:text-[#C8F000] px-3 py-2 text-sm font-medium uppercase tracking-wider transition-colors" href="#planos">Planos</a>
</div>
</div>

<div className="hidden md:flex items-center space-x-4">
<a className="text-[#F5F5F5] hover:text-[#C8F000] px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors" href="#">Sou Membro</a>
<a className="bg-[#C8F000] text-[#000000] hover:bg-[#8CCF00] px-5 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors" href="#agendar">Agendar Visita</a>
</div>

<div className="md:hidden flex items-center">
<button aria-controls="mobile-menu" aria-expanded="false" className="text-[#9A9A9A] hover:text-[#F5F5F5]" type="button">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-[#2E2E2E]">

<div className="absolute inset-0 z-[-1] bg-[#0A0A0A]">

<div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent z-20"></div>

<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10"></div>

<img alt="Gym Background" className="w-full h-full object-cover opacity-40 grayscale" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
<span className="inline-block text-[#9A9A9A] font-medium text-xs sm:text-sm uppercase tracking-widest mb-6">Beyond Limits Known™ · Indaiatuba, SP · Est. 2018</span>
<h1 className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[1.05] text-[#F5F5F5] mb-8 drop-shadow-md">
                Sem mágica<br/>

<span className="text-[#C8F000]">Sem atalhos</span><br/>
                Sem desculpas
            </h1>
<p className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-[#F5F5F5] mb-4 max-w-2xl drop-shadow-md">
                Treinos progressivos e acompanhamento real!
            </p>
<p className="text-lg text-[#9A9A9A] max-w-xl mb-10 leading-relaxed font-normal">
                Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mb-20">
<a className="bg-[#C8F000] text-[#000000] text-center px-8 py-4 rounded-lg font-semibold text-lg uppercase tracking-wider hover:bg-[#8CCF00] transition-colors shadow-[0_0_16px_rgba(200,240,0,0.2)] flex items-center justify-center gap-2" href="#planos">
                    Começar Agora <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="border border-[#2E2E2E] bg-[#1A1A1A]/50 backdrop-blur text-[#F5F5F5] text-center px-8 py-4 rounded-lg font-medium text-lg uppercase tracking-wider hover:border-[#C8F000] transition-colors flex items-center justify-center" href="#espaco">
                    Conhecer o Espaço
                </a>
</div>

<div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 pt-10 border-t border-[#2E2E2E]">
<div>
<p className="text-[#9A9A9A] text-sm uppercase tracking-wider mb-1 font-medium">Horário</p>
<p className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-[#F5F5F5]">05H–23H</p>
</div>
<div>
<p className="text-[#9A9A9A] text-sm uppercase tracking-wider mb-1 font-medium">Funcionamento</p>
<p className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-[#F5F5F5]">7 DIAS</p>
</div>
<div>
<p className="text-[#9A9A9A] text-sm uppercase tracking-wider mb-1 font-medium">Área</p>
<p className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-[#F5F5F5]">1.800M²</p>
</div>
<div>
<p className="text-[#9A9A9A] text-sm uppercase tracking-wider mb-1 font-medium">Alunos</p>
<p className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-[#C8F000]">+1.200</p>
</div>
<div className="col-span-2 md:col-span-1">
<p className="text-[#9A9A9A] text-sm uppercase tracking-wider mb-1 font-medium">Histórico</p>
<p className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-[#F5F5F5]">DESDE 2018</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A]" id="espaco">
<div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-4 mb-6">
<span className="w-8 h-[2px] bg-[#C8F000]"></span>
<h3 className="text-[#C8F000] font-medium text-sm uppercase tracking-wider">Quem Somos</h3>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="font-heading font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase text-[#F5F5F5] mb-8 leading-[1.1]">
                        Forjados<br/>Pela<br/>Disciplina.
                    </h2>
<p className="text-lg text-[#9A9A9A] mb-6">
                        A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.
                    </p>
<p className="text-lg text-[#9A9A9A] mb-8">
                        Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
                    </p>
<blockquote className="border-l-2 border-[#C8F000] pl-6 py-2 my-10 bg-[#1A1A1A]/30 rounded-r-lg">
<p className="font-heading text-xl md:text-2xl font-medium italic text-[#F5F5F5] tracking-tight">"In silence, the transformation begins."</p>
</blockquote>
<p className="text-lg text-[#9A9A9A] mb-8">
                        Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
                    </p>
<span className="text-3xl font-heading font-semibold text-[#2E2E2E]">02</span>
</div>

<div className="grid grid-cols-1 gap-6 mt-8 lg:mt-0">
<div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#2E2E2E] hover:border-[#C8F000] transition-colors">
<div className="w-12 h-12 bg-[#252525] rounded-full flex items-center justify-center mb-6 text-[#C8F000]">
<iconify-icon height="24" icon="solar:fire-linear" width="24"></iconify-icon>
</div>
<h4 className="font-heading text-2xl font-medium tracking-tight text-[#F5F5F5] mb-3">Intensidade</h4>
<p className="text-lg text-[#9A9A9A]">O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.</p>
</div>
<div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#2E2E2E] hover:border-[#C8F000] transition-colors">
<div className="w-12 h-12 bg-[#252525] rounded-full flex items-center justify-center mb-6 text-[#C8F000]">
<iconify-icon height="24" icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h4 className="font-heading text-2xl font-medium tracking-tight text-[#F5F5F5] mb-3">Precisão</h4>
<p className="text-lg text-[#9A9A9A]">Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.</p>
</div>
<div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#2E2E2E] hover:border-[#C8F000] transition-colors">
<div className="w-12 h-12 bg-[#252525] rounded-full flex items-center justify-center mb-6 text-[#C8F000]">
<iconify-icon height="24" icon="solar:tuning-square-linear" width="24"></iconify-icon>
</div>
<h4 className="font-heading text-2xl font-medium tracking-tight text-[#F5F5F5] mb-3">Controle</h4>
<p className="text-lg text-[#9A9A9A]">Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#111111] border-y border-[#2E2E2E]">
<div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 divide-x-0 lg:divide-x divide-[#2E2E2E]">
<div className="text-center lg:px-6">
<p className="font-heading text-5xl md:text-6xl font-semibold tracking-tighter text-[#C8F000] mb-2">+1.200</p>
<p className="text-[#9A9A9A] text-sm uppercase font-medium tracking-wider">Alunos ativos</p>
</div>
<div className="text-center lg:px-6">
<p className="font-heading text-5xl md:text-6xl font-semibold tracking-tighter text-[#C8F000] mb-2">94%</p>
<p className="text-[#9A9A9A] text-sm uppercase font-medium tracking-wider">Retenção 6 meses</p>
</div>
<div className="text-center lg:px-6">
<p className="font-heading text-5xl md:text-6xl font-semibold tracking-tighter text-[#C8F000] mb-2">8 anos</p>
<p className="text-[#9A9A9A] text-sm uppercase font-medium tracking-wider">Em operação</p>
</div>
<div className="text-center lg:px-6">
<p className="font-heading text-5xl md:text-6xl font-semibold tracking-tighter text-[#C8F000] mb-2">1.8K</p>
<p className="text-[#9A9A9A] text-sm uppercase font-medium tracking-wider">Área dedicada (M²)</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A]">
<div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#2E2E2E] flex flex-col justify-between">
<div className="mb-6 text-[#3D3D3D]">
<iconify-icon height="40" icon="solar:chat-square-linear" width="40"></iconify-icon>
</div>
<p className="text-lg text-[#F5F5F5] mb-8 font-normal leading-relaxed">
                        "Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas."
                    </p>
<div>
<p className="font-heading text-lg font-medium text-[#C8F000] tracking-tight">Rafael M.</p>
<p className="text-sm text-[#9A9A9A] uppercase tracking-wider mt-1">Engenheiro · Aluno há 3 anos</p>
</div>
</div>

<div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#2E2E2E] flex flex-col justify-between">
<div className="mb-6 text-[#3D3D3D]">
<iconify-icon height="40" icon="solar:chat-square-linear" width="40"></iconify-icon>
</div>
<p className="text-lg text-[#F5F5F5] mb-8 font-normal leading-relaxed">
                        "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha."
                    </p>
<div>
<p className="font-heading text-lg font-medium text-[#C8F000] tracking-tight">Juliana T.</p>
<p className="text-sm text-[#9A9A9A] uppercase tracking-wider mt-1">Professora · Aluna há 2 anos</p>
</div>
</div>

<div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#2E2E2E] flex flex-col justify-between">
<div className="mb-6 text-[#3D3D3D]">
<iconify-icon height="40" icon="solar:chat-square-linear" width="40"></iconify-icon>
</div>
<p className="text-lg text-[#F5F5F5] mb-8 font-normal leading-relaxed">
                        "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado."
                    </p>
<div>
<p className="font-heading text-lg font-medium text-[#C8F000] tracking-tight">Lucas O.</p>
<p className="text-sm text-[#9A9A9A] uppercase tracking-wider mt-1">Empresário · Aluno há 4 anos</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#111111]">
<div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-4 mb-6">
<span className="w-8 h-[2px] bg-[#C8F000]"></span>
<h3 className="text-[#C8F000] font-medium text-sm uppercase tracking-wider">Estrutura</h3>
</div>
<h2 className="font-heading font-semibold text-4xl md:text-5xl tracking-tight uppercase text-[#F5F5F5] mb-6 max-w-2xl">
                Equipamento<br/>que não te<br/>limita.
            </h2>
<p className="text-lg text-[#9A9A9A] mb-16 max-w-xl">
                Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.
            </p>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">

<div>
<div className="flex items-center justify-between border-b-2 border-[#2E2E2E] pb-4 mb-6">
<h4 className="font-heading text-2xl font-medium tracking-tight text-[#F5F5F5]">01 · Cardio &amp; Conditioning</h4>
<iconify-icon className="text-[#C8F000]" height="24" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-center text-lg">
<span className="text-[#F5F5F5]">Assault Bike Concept2</span>
<span className="text-[#9A9A9A] font-medium text-sm bg-[#1A1A1A] px-3 py-1 rounded">8 UNIDADES</span>
</li>
<li className="flex justify-between items-center text-lg">
<span className="text-[#F5F5F5]">Remo Concept2 Model D</span>
<span className="text-[#9A9A9A] font-medium text-sm bg-[#1A1A1A] px-3 py-1 rounded">6 UNIDADES</span>
</li>
<li className="flex justify-between items-center text-lg">
<span className="text-[#F5F5F5]">SkiErg Concept2</span>
<span className="text-[#9A9A9A] font-medium text-sm bg-[#1A1A1A] px-3 py-1 rounded">4 UNIDADES</span>
</li>
<li className="flex justify-between items-center text-lg">
<span className="text-[#F5F5F5]">Esteiras NordicTrack inclinação neg.</span>
</li>
<li className="flex justify-between items-center text-lg">
<span className="text-[#F5F5F5]">Cordas de batalha 15m e 20m</span>
</li>
</ul>
</div>

<div>
<div className="flex items-center justify-between border-b-2 border-[#2E2E2E] pb-4 mb-6">
<h4 className="font-heading text-2xl font-medium tracking-tight text-[#F5F5F5]">02 · Força Livre</h4>
<iconify-icon className="text-[#C8F000]" height="24" icon="solar:dumbbell-linear" width="24"></iconify-icon>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-center text-lg text-[#F5F5F5]">Racks de agachamento Rogue</li>
<li className="flex justify-between items-center text-lg text-[#F5F5F5]">Plataformas de LPO</li>
<li className="flex justify-between items-center text-lg text-[#F5F5F5]">Halters recartilhados até 60kg</li>
<li className="flex justify-between items-center text-lg text-[#F5F5F5]">Anilhas olímpicas calibradas</li>
</ul>
</div>

<div>
<div className="flex items-center justify-between border-b-2 border-[#2E2E2E] pb-4 mb-6">
<h4 className="font-heading text-2xl font-medium tracking-tight text-[#F5F5F5]">03 · Máquinas</h4>
<iconify-icon className="text-[#C8F000]" height="24" icon="solar:settings-linear" width="24"></iconify-icon>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-center text-lg text-[#F5F5F5]">Linha completa Hammer Strength</li>
<li className="flex justify-between items-center text-lg text-[#F5F5F5]">Polias duplas e crossovers</li>
<li className="flex justify-between items-center text-lg text-[#F5F5F5]">Leg press linear e 45 graus</li>
</ul>
</div>

<div>
<div className="flex items-center justify-between border-b-2 border-[#2E2E2E] pb-4 mb-6">
<h4 className="font-heading text-2xl font-medium tracking-tight text-[#F5F5F5]">04 · Funcional &amp; Mobility</h4>
<iconify-icon className="text-[#C8F000]" height="24" icon="solar:move-linear" width="24"></iconify-icon>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-center text-lg text-[#F5F5F5]">Área de grama sintética 30m</li>
<li className="flex justify-between items-center text-lg text-[#F5F5F5]">Trenós de empurre</li>
<li className="flex justify-between items-center text-lg text-[#F5F5F5]">Kettlebells competição</li>
<li className="flex justify-between items-center text-lg text-[#F5F5F5]">Rolos de soltura e tatame</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A]" id="programas">
<div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center text-center mb-16">
<div className="flex items-center gap-4 mb-6">
<span className="w-8 h-[2px] bg-[#C8F000]"></span>
<h3 className="text-[#C8F000] font-medium text-sm uppercase tracking-wider">O que oferecemos</h3>
<span className="w-8 h-[2px] bg-[#C8F000]"></span>
</div>
<h2 className="font-heading font-semibold text-4xl md:text-5xl tracking-tight uppercase text-[#F5F5F5]">
                    Um protocolo<br/>para cada objetivo.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-[#1A1A1A] p-8 md:p-10 rounded-xl border border-[#2E2E2E]">
<div className="mb-6">
<span className="text-[#9A9A9A] font-heading font-bold text-xl">01</span>
</div>
<h4 className="font-heading text-3xl font-medium tracking-tight text-[#F5F5F5] mb-4 uppercase">Forgee Strength</h4>
<p className="text-lg text-[#9A9A9A] mb-8 h-auto md:h-24">Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.</p>
<div className="space-y-3 pt-6 border-t border-[#2E2E2E]">
<div className="flex justify-between">
<span className="text-[#F5F5F5] font-medium text-sm uppercase tracking-wider">Para quem é</span>
<span className="text-[#9A9A9A] text-sm text-right">Iniciantes a avançados em hipertrofia e força.</span>
</div>
<div className="flex justify-between">
<span className="text-[#F5F5F5] font-medium text-sm uppercase tracking-wider">Frequência</span>
<span className="text-[#9A9A9A] text-sm text-right">3–5× por semana.</span>
</div>
</div>
</div>

<div className="bg-[#1C2420] p-8 md:p-10 rounded-xl border border-[#C8F000] relative overflow-hidden shadow-[0_0_30px_rgba(200,240,0,0.05)]">
<div className="absolute top-0 right-0 bg-[#C8F000] text-[#000000] px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-bl-lg">
                        Destaque
                    </div>
<div className="mb-6">
<span className="text-[#C8F000] font-heading font-bold text-xl">02</span>
</div>
<h4 className="font-heading text-3xl font-medium tracking-tight text-[#C8F000] mb-4 uppercase">Forgee Conditioning</h4>
<p className="text-lg text-[#F5F5F5] mb-8 h-auto md:h-24">Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.</p>
<div className="space-y-3 pt-6 border-t border-[#2E2E2E]/50">
<div className="flex justify-between gap-4">
<span className="text-[#F5F5F5] font-medium text-sm uppercase tracking-wider shrink-0">Para quem é</span>
<span className="text-[#9A9A9A] text-sm text-right">Condicionamento, perda de gordura.</span>
</div>
<div className="flex justify-between gap-4">
<span className="text-[#F5F5F5] font-medium text-sm uppercase tracking-wider shrink-0">Turmas</span>
<span className="text-[#C8F000] text-sm text-right font-medium">06H · 07H · 12H · 18H · 19H30</span>
</div>
</div>
</div>

<div className="bg-[#1A1A1A] p-8 md:p-10 rounded-xl border border-[#2E2E2E]">
<div className="mb-6">
<span className="text-[#9A9A9A] font-heading font-bold text-xl">03</span>
</div>
<h4 className="font-heading text-3xl font-medium tracking-tight text-[#F5F5F5] mb-4 uppercase">Forgee Mobility</h4>
<p className="text-lg text-[#9A9A9A]">Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.</p>
</div>

<div className="bg-[#1A1A1A] p-8 md:p-10 rounded-xl border border-[#2E2E2E]">
<div className="mb-6">
<span className="text-[#9A9A9A] font-heading font-bold text-xl">04</span>
</div>
<h4 className="font-heading text-3xl font-medium tracking-tight text-[#F5F5F5] mb-4 uppercase">Personal Training</h4>
<p className="text-lg text-[#9A9A9A]">Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#111111]" id="planos">
<div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center text-center mb-16">
<div className="flex items-center gap-4 mb-6">
<span className="w-8 h-[2px] bg-[#C8F000]"></span>
<h3 className="text-[#C8F000] font-medium text-sm uppercase tracking-wider">Investimento</h3>
<span className="w-8 h-[2px] bg-[#C8F000]"></span>
</div>
<h2 className="font-heading font-semibold text-4xl md:text-5xl tracking-tight uppercase text-[#F5F5F5] mb-6">
                    Sem matrícula.<br/>
                    Sem fidelidade.<br/>
                    Sem enrolação.
                </h2>
<p className="text-lg text-[#9A9A9A] max-w-xl">
                    Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

<div className="bg-[#1A1A1A] rounded-xl border border-[#2E2E2E] p-8 flex flex-col">
<h4 className="font-heading text-2xl font-medium tracking-tight text-[#F5F5F5] uppercase mb-2">Livre</h4>
<div className="mb-8">
<span className="font-heading text-4xl font-semibold tracking-tighter text-[#F5F5F5]">R$ 149</span>
<span className="text-[#9A9A9A]">/mês</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C8F000] shrink-0 mt-0.5" height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
<span className="text-[#9A9A9A] text-lg">Acesso ilimitado 05H–23H</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C8F000] shrink-0 mt-0.5" height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
<span className="text-[#9A9A9A] text-lg">Avaliação física de entrada</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C8F000] shrink-0 mt-0.5" height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
<span className="text-[#9A9A9A] text-lg">Planilha de treino inicial</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C8F000] shrink-0 mt-0.5" height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
<span className="text-[#9A9A9A] text-lg">App FORGEE</span>
</li>
</ul>
<button className="w-full border border-[#2E2E2E] text-[#F5F5F5] hover:border-[#C8F000] hover:text-[#C8F000] font-medium uppercase tracking-wider py-4 rounded-lg transition-colors">
                        Quero esse plano
                    </button>
</div>

<div className="bg-[#1A1A1A] rounded-xl border border-[#2E2E2E] p-8 flex flex-col">
<h4 className="font-heading text-2xl font-medium tracking-tight text-[#F5F5F5] uppercase mb-2">Plus</h4>
<div className="mb-8">
<span className="font-heading text-4xl font-semibold tracking-tighter text-[#F5F5F5]">R$ 229</span>
<span className="text-[#9A9A9A]">/mês</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C8F000] shrink-0 mt-0.5" height="20" icon="solar:add-circle-linear" width="20"></iconify-icon>
<span className="text-[#F5F5F5] font-medium text-lg">Tudo do Livre</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C8F000] shrink-0 mt-0.5" height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
<span className="text-[#9A9A9A] text-lg">2 sessões de Personal/mês</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C8F000] shrink-0 mt-0.5" height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
<span className="text-[#9A9A9A] text-lg">1 aula Conditioning/semana</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C8F000] shrink-0 mt-0.5" height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
<span className="text-[#9A9A9A] text-lg">Revisão planilha a cada 4 sem.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C8F000] shrink-0 mt-0.5" height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
<span className="text-[#9A9A9A] text-lg">Acesso ao Mobility</span>
</li>
</ul>
<button className="w-full border border-[#2E2E2E] text-[#F5F5F5] hover:border-[#C8F000] hover:text-[#C8F000] font-medium uppercase tracking-wider py-4 rounded-lg transition-colors">
                        Quero esse plano
                    </button>
</div>

<div className="bg-[#1C2420] rounded-xl border-2 border-[#C8F000] p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_4px_30px_rgba(200,240,0,0.1)]">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C8F000] text-[#000000] px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                        Mais Escolhido
                    </div>
<h4 className="font-heading text-2xl font-medium tracking-tight text-[#C8F000] uppercase mb-2 mt-2">Elite</h4>
<div className="mb-8">
<span className="font-heading text-5xl font-semibold tracking-tighter text-[#F5F5F5]">R$ 389</span>
<span className="text-[#9A9A9A]">/mês</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C8F000] shrink-0 mt-0.5" height="20" icon="solar:add-circle-linear" width="20"></iconify-icon>
<span className="text-[#F5F5F5] font-medium text-lg">Tudo do Plus</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C8F000] shrink-0 mt-0.5" height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
<span className="text-[#9A9A9A] text-lg">4 sessões Personal/mês</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C8F000] shrink-0 mt-0.5" height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
<span className="text-[#9A9A9A] text-lg">Acesso ilimitado às classes</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C8F000] shrink-0 mt-0.5" height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
<span className="text-[#9A9A9A] text-lg">Bioimpedância mensal</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C8F000] shrink-0 mt-0.5" height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
<span className="text-[#9A9A9A] text-lg">WhatsApp coach dedicado</span>
</li>
</ul>
<button className="w-full bg-[#C8F000] text-[#000000] hover:bg-[#8CCF00] font-semibold uppercase tracking-wider py-4 rounded-lg transition-colors">
                        Quero esse plano
                    </button>
</div>
</div>

<div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#2E2E2E] flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-[#9A9A9A] text-sm text-center md:text-left">
                    Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto
                </div>
<div className="flex items-center gap-4 bg-[#252525] px-6 py-3 rounded-lg border border-[#2E2E2E]">
<div>
<span className="text-[#F5F5F5] font-medium uppercase tracking-wider text-sm block">Diária</span>
<span className="font-heading text-xl font-semibold text-[#C8F000]">R$ 39</span>
</div>
<div className="w-[1px] h-8 bg-[#3D3D3D]"></div>
<a className="text-[#F5F5F5] hover:text-[#C8F000] font-medium text-sm uppercase tracking-wider transition-colors" href="#agendar">Agendar</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A]" id="equipe">
<div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-4 mb-6">
<span className="w-8 h-[2px] bg-[#C8F000]"></span>
<h3 className="text-[#C8F000] font-medium text-sm uppercase tracking-wider">Quem te acompanha</h3>
</div>
<h2 className="font-heading font-semibold text-4xl md:text-5xl tracking-tight uppercase text-[#F5F5F5] mb-6">
                Coaches que<br/>treinam.
            </h2>
<p className="text-lg text-[#9A9A9A] mb-16 max-w-xl">
                Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group">
<div className="aspect-[3/4] bg-[#1A1A1A] rounded-xl mb-6 relative overflow-hidden border border-[#2E2E2E] group-hover:border-[#C8F000] transition-colors flex items-center justify-center">
<span className="font-heading text-6xl text-[#252525] font-bold group-hover:text-[#3D3D3D] transition-colors">RF</span>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60"></div>
</div>
<h4 className="font-heading text-2xl font-medium tracking-tight text-[#F5F5F5] mb-1">Rodrigo Farias</h4>
<p className="text-[#C8F000] text-sm font-medium uppercase tracking-wider mb-2">Head Coach</p>
<p className="text-[#6B6B6B] text-xs uppercase">CREF: 045821-G/SP</p>
</div>

<div className="group">
<div className="aspect-[3/4] bg-[#1A1A1A] rounded-xl mb-6 relative overflow-hidden border border-[#2E2E2E] group-hover:border-[#C8F000] transition-colors flex items-center justify-center">
<span className="font-heading text-6xl text-[#252525] font-bold group-hover:text-[#3D3D3D] transition-colors">AL</span>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60"></div>
</div>
<h4 className="font-heading text-2xl font-medium tracking-tight text-[#F5F5F5] mb-1">Ana Luísa</h4>
<p className="text-[#C8F000] text-sm font-medium uppercase tracking-wider mb-2">Conditioning</p>
<p className="text-[#6B6B6B] text-xs uppercase">CREF: 078342-G/SP</p>
</div>

<div className="group">
<div className="aspect-[3/4] bg-[#1A1A1A] rounded-xl mb-6 relative overflow-hidden border border-[#2E2E2E] group-hover:border-[#C8F000] transition-colors flex items-center justify-center">
<span className="font-heading text-6xl text-[#252525] font-bold group-hover:text-[#3D3D3D] transition-colors">BT</span>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60"></div>
</div>
<h4 className="font-heading text-2xl font-medium tracking-tight text-[#F5F5F5] mb-1">Bruno T.</h4>
<p className="text-[#C8F000] text-sm font-medium uppercase tracking-wider mb-2">Mobility &amp; Rehab</p>
<p className="text-[#6B6B6B] text-xs uppercase">CREF: 091205-G/SP</p>
</div>

<div className="group">
<div className="aspect-[3/4] bg-[#1A1A1A] rounded-xl mb-6 relative overflow-hidden border border-[#2E2E2E] group-hover:border-[#C8F000] transition-colors flex items-center justify-center">
<span className="font-heading text-6xl text-[#252525] font-bold group-hover:text-[#3D3D3D] transition-colors">CD</span>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60"></div>
</div>
<h4 className="font-heading text-2xl font-medium tracking-tight text-[#F5F5F5] mb-1">Camila D.</h4>
<p className="text-[#C8F000] text-sm font-medium uppercase tracking-wider mb-2">Personal Trainer</p>
<p className="text-[#6B6B6B] text-xs uppercase">CREF: 063417-G/SP</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#111111] border-y border-[#2E2E2E]">
<div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center text-center mb-16">
<div className="flex items-center gap-4 mb-6">
<span className="w-8 h-[2px] bg-[#C8F000]"></span>
<h3 className="text-[#C8F000] font-medium text-sm uppercase tracking-wider">Dúvidas</h3>
<span className="w-8 h-[2px] bg-[#C8F000]"></span>
</div>
<h2 className="font-heading font-semibold text-4xl md:text-5xl tracking-tight uppercase text-[#F5F5F5]">
                    Perguntas<br/>diretas.
                </h2>
</div>
<div className="space-y-2">

<details className="group bg-[#1A1A1A] rounded-xl border border-[#2E2E2E] [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-heading font-medium cursor-pointer list-none text-xl tracking-tight text-[#F5F5F5] p-6">
<span>Preciso ter experiência?</span>
<span className="transition group-open:rotate-45 text-[#C8F000]">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="text-[#9A9A9A] text-lg px-6 pb-6 pt-0 leading-relaxed">
                        Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual.
                    </div>
</details>

<details className="group bg-[#1A1A1A] rounded-xl border border-[#2E2E2E] [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-heading font-medium cursor-pointer list-none text-xl tracking-tight text-[#F5F5F5] p-6">
<span>Posso treinar sozinho?</span>
<span className="transition group-open:rotate-45 text-[#C8F000]">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="text-[#9A9A9A] text-lg px-6 pb-6 pt-0 leading-relaxed">
                        Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima.
                    </div>
</details>

<details className="group bg-[#1A1A1A] rounded-xl border border-[#2E2E2E] [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-heading font-medium cursor-pointer list-none text-xl tracking-tight text-[#F5F5F5] p-6">
<span>Como funciona o cancelamento?</span>
<span className="transition group-open:rotate-45 text-[#C8F000]">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="text-[#9A9A9A] text-lg px-6 pb-6 pt-0 leading-relaxed">
                        Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória.
                    </div>
</details>

<details className="group bg-[#1A1A1A] rounded-xl border border-[#2E2E2E] [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-heading font-medium cursor-pointer list-none text-xl tracking-tight text-[#F5F5F5] p-6">
<span>Posso visitar antes de assinar?</span>
<span className="transition group-open:rotate-45 text-[#C8F000]">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="text-[#9A9A9A] text-lg px-6 pb-6 pt-0 leading-relaxed">
                        Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A]">
<div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="flex items-center gap-4 mb-6">
<span className="w-8 h-[2px] bg-[#C8F000]"></span>
<h3 className="text-[#C8F000] font-medium text-sm uppercase tracking-wider">Onde estamos</h3>
</div>
<h2 className="font-heading font-semibold text-4xl md:text-5xl tracking-tight uppercase text-[#F5F5F5] mb-8 leading-[1.1]">
                        No coração<br/>de Indaiatuba.
                    </h2>
<div className="mb-10">
<p className="text-lg text-[#F5F5F5] mb-2 font-medium">Rua das Esmeraldas, 742</p>
<p className="text-lg text-[#9A9A9A] mb-1">Jardim Morada do Sol — Indaiatuba, SP</p>
<p className="text-lg text-[#9A9A9A] mb-4">CEP 13.334-210</p>
<p className="text-sm text-[#6B6B6B] uppercase tracking-wider"><iconify-icon className="inline mr-1" height="16" icon="solar:map-point-linear" width="16"></iconify-icon> 200m do Carrefour · Próximo à saída SP-075</p>
</div>

<div className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl overflow-hidden mb-10">
<div className="px-6 py-4 border-b border-[#2E2E2E] bg-[#252525]">
<h4 className="font-heading text-lg font-medium tracking-tight text-[#F5F5F5] uppercase">Horário de funcionamento</h4>
</div>
<div className="px-6 py-4 flex justify-between items-center border-b border-[#2E2E2E]">
<span className="text-[#9A9A9A] text-lg">Segunda a Sexta</span>
<span className="text-[#F5F5F5] font-medium font-heading text-xl">05H00 – 23H00</span>
</div>
<div className="px-6 py-4 flex justify-between items-center border-b border-[#2E2E2E]">
<span className="text-[#9A9A9A] text-lg">Sábado</span>
<span className="text-[#F5F5F5] font-medium font-heading text-xl">07H00 – 20H00</span>
</div>
<div className="px-6 py-4 flex justify-between items-center">
<span className="text-[#9A9A9A] text-lg">Domingo e Feriados</span>
<span className="text-[#F5F5F5] font-medium font-heading text-xl">08H00 – 14H00</span>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-transparent border border-[#2E2E2E] text-[#F5F5F5] text-center px-6 py-3 rounded-lg font-medium uppercase tracking-wider hover:border-[#C8F000] transition-colors flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-[#C8F000]" height="20" icon="solar:chat-round-linear" width="20"></iconify-icon> Falar no WhatsApp
                        </a>
<a className="bg-[#1A1A1A] text-[#F5F5F5] text-center px-6 py-3 rounded-lg font-medium uppercase tracking-wider hover:bg-[#252525] transition-colors flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-[#9A9A9A]" height="20" icon="solar:routing-2-linear" width="20"></iconify-icon> Como chegar
                        </a>
</div>
</div>

<div className="aspect-square lg:aspect-[4/5] bg-[#1A1A1A] rounded-xl border border-[#2E2E2E] relative overflow-hidden flex items-center justify-center grayscale opacity-80">
<img alt="Map placeholder" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-60" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0A0A0A]/50"></div>
<div className="relative z-10 w-16 h-16 bg-[#C8F000] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(200,240,0,0.4)]">
<iconify-icon className="text-[#000000]" height="32" icon="solar:map-point-linear" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#C8F000] relative overflow-hidden" id="agendar">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, #0A0A0A 25%, #0A0A0A 75%, #000 75%, #000)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px'}}></div>
<div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
<h2 className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase text-[#000000] mb-8 leading-[1]">
                A decisão<br/>já foi tomada.<br/>Agora é a ação.
            </h2>
<p className="text-[#1A2B00] font-medium text-lg sm:text-xl uppercase tracking-widest mb-12 max-w-2xl">
                Agende uma visita · Gratuita · Sem compromisso · Traga tênis.
            </p>
<button className="bg-[#0A0A0A] text-[#F5F5F5] px-10 py-5 rounded-lg font-bold text-xl uppercase tracking-wider hover:bg-[#1A1A1A] transition-colors shadow-2xl flex items-center gap-3 group">
                Agendar Visita Gratuita
                <iconify-icon className="text-[#C8F000] group-hover:translate-x-1 transition-transform" height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
</section>

<footer className="bg-[#0A0A0A] pt-20 pb-10 border-t border-[#2E2E2E]">
<div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="md:col-span-2">
<a className="font-heading font-extrabold text-4xl tracking-tighter text-[#F5F5F5] uppercase mb-2 block" href="#">
                        Forgee
                    </a>
<p className="text-[#C8F000] font-medium text-sm uppercase tracking-widest mb-8">Beyond Limits Known™</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center text-[#9A9A9A] hover:text-[#C8F000] hover:border-[#C8F000] transition-colors" href="#">
<iconify-icon height="20" icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center text-[#9A9A9A] hover:text-[#C8F000] hover:border-[#C8F000] transition-colors" href="#">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h5 className="font-heading text-lg font-medium tracking-tight text-[#F5F5F5] uppercase mb-6">Academia</h5>
<ul className="space-y-4">
<li><a className="text-[#9A9A9A] hover:text-[#C8F000] transition-colors text-base" href="#espaco">Espaço</a></li>
<li><a className="text-[#9A9A9A] hover:text-[#C8F000] transition-colors text-base" href="#programas">Programas</a></li>
<li><a className="text-[#9A9A9A] hover:text-[#C8F000] transition-colors text-base" href="#equipe">Equipe</a></li>
<li><a className="text-[#9A9A9A] hover:text-[#C8F000] transition-colors text-base" href="#planos">Planos</a></li>
</ul>
</div>

<div>
<h5 className="font-heading text-lg font-medium tracking-tight text-[#F5F5F5] uppercase mb-6">Legal &amp; Redes</h5>
<ul className="space-y-4">
<li><a className="text-[#9A9A9A] hover:text-[#C8F000] transition-colors text-base" href="#">Política de Privacidade</a></li>
<li><a className="text-[#9A9A9A] hover:text-[#C8F000] transition-colors text-base" href="#">Termos de Uso</a></li>
<li><a className="text-[#9A9A9A] hover:text-[#C8F000] transition-colors text-base" href="#">@forgee.academy</a></li>
<li><a className="text-[#9A9A9A] hover:text-[#C8F000] transition-colors text-base" href="#">contato@forgee.academy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-[#2E2E2E] flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[#6B6B6B] text-xs uppercase tracking-wider text-center md:text-left">
                    FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP
                </p>
<p className="text-[#6B6B6B] text-xs uppercase tracking-wider">
                    DESIGN SYSTEM © 2026
                </p>
</div>
</div>
</footer>

    </>
  );
}
