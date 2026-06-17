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
      

<header className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#2D2D2D]">
<div className="max-w-[1280px] mx-auto px-5 md:px-20 h-20 flex items-center justify-between">
<a className="font-display text-2xl tracking-tight text-white font-semibold" href="#">
          FORGEE
        </a>
<nav className="hidden md:flex gap-8">
<a className="text-base text-[#D4D4D4] hover:text-[#C8F135] transition-colors" href="#espaco">
            Espaço
          </a>
<a className="text-base text-[#D4D4D4] hover:text-[#C8F135] transition-colors" href="#programas">
            Programas
          </a>
<a className="text-base text-[#D4D4D4] hover:text-[#C8F135] transition-colors" href="#equipe">
            Equipe
          </a>
<a className="text-base text-[#D4D4D4] hover:text-[#C8F135] transition-colors" href="#planos">
            Planos
          </a>
</nav>
<div className="hidden md:flex items-center gap-4">
<a className="text-base text-white hover:text-[#D4D4D4] font-medium transition-colors" href="#">
            Sou Membro
          </a>
<a className="bg-[#C8F135] hover:bg-[#A8D41A] text-[#0A0A0A] px-6 py-3 rounded-full text-base font-semibold transition-all shadow-[0_0_24px_rgba(200,241,53,0.1)] hover:shadow-[0_0_24px_rgba(200,241,53,0.3)]" href="#">
            Agendar Visita
          </a>
</div>
<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">

<div className="absolute inset-0 z-0">
<img alt="Gym Background" className="w-full h-full object-cover opacity-40 grayscale" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
</div>
<div className="max-w-[1280px] mx-auto px-5 md:px-20 relative z-10 w-full">
<div className="max-w-2xl">
<p className="text-xs text-[#C8F135] font-semibold tracking-[0.15em] uppercase mb-6">
            Beyond Limits Known™ · Indaiatuba, SP · Est. 2018
          </p>
<h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[0.9] mb-6">
            SEM MÁGICA
            <br/>
            SEM ATALHOS
            <br/>
<span className="text-[#C8F135]">SEM DESCULPAS</span>
</h1>
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">
            Treinos progressivos e acompanhamento real!
          </h2>
<p className="text-lg md:text-xl text-[#B0B0B0] mb-10 max-w-xl leading-relaxed">
            Um espaço desenhado para quem treina com intenção. Sem distrações.
            Sem promessas vazias. Só você, o equipamento e o trabalho.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center bg-[#C8F135] hover:bg-[#A8D41A] text-[#0A0A0A] px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-[0_0_24px_rgba(200,241,53,0.2)]" href="#">
              Começar Agora
            </a>
<a className="inline-flex justify-center items-center bg-transparent border border-[#2D2D2D] hover:border-[#D4D4D4] hover:bg-[#111111] text-white px-8 py-4 rounded-full text-lg font-medium transition-all" href="#espaco">
              Conhecer o Espaço
            </a>
</div>
</div>
</div>
</section>

<section className="border-y border-[#2D2D2D] bg-[#0A0A0A] relative z-20">
<div className="max-w-[1280px] mx-auto px-5 md:px-20 py-8 md:py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-[#2D2D2D]">
<div className="flex flex-col items-center md:items-start md:px-8 first:px-0">
<span className="text-xs text-[#B0B0B0] uppercase tracking-[0.1em] mb-2 font-medium">
              Horário
            </span>
<span className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-white">
              05H–23H
            </span>
</div>
<div className="flex flex-col items-center md:items-start md:px-8">
<span className="text-xs text-[#B0B0B0] uppercase tracking-[0.1em] mb-2 font-medium">
              Dias
            </span>
<span className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-white">
              7 DIAS
            </span>
</div>
<div className="flex flex-col items-center md:items-start md:px-8">
<span className="text-xs text-[#B0B0B0] uppercase tracking-[0.1em] mb-2 font-medium">
              Área
            </span>
<span className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-white">
              1.800M²
            </span>
</div>
<div className="flex flex-col items-center md:items-start md:px-8">
<span className="text-xs text-[#B0B0B0] uppercase tracking-[0.1em] mb-2 font-medium">
              Comunidade
            </span>
<span className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-white">
<span className="text-[#C8F135]">+</span>
              1.200 ALUNOS
            </span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0A0A0A]" id="espaco">
<div className="max-w-[1280px] mx-auto px-5 md:px-20">
<div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

<div>
<span className="text-xs text-[#FF6B1A] font-semibold tracking-[0.15em] uppercase mb-6 block">
              Quem somos
            </span>
<h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95] mb-8">
              FORJADOS
              <br/>
              PELA
              <br/>
<span className="text-[#FF6B1A]">DISCIPLINA.</span>
</h2>
<div className="space-y-6 text-lg text-[#B0B0B0] leading-relaxed">
<p>
                A FORGEE nasceu de uma certeza simples: ambiente mediano produz
                resultado mediano.
              </p>
<p>
                Cada metro quadrado foi pensado para que o espaço não interfira
                — ele desaparece. O que fica é o treino, a concentração e o
                progresso.
              </p>
<blockquote className="border-l-2 border-[#FF6B1A] pl-6 py-2 my-8 text-2xl text-white font-display italic tracking-tight">
                "In silence, the transformation begins."
              </blockquote>
<p>
                Aqui não tem música forçada, espelho em excesso ou coach em
                cima. Tem equipamento que não decepciona no seu melhor dia,
                profissionais que aparecem quando você precisa e silêncio o
                suficiente para se ouvir.
              </p>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="bg-[#111111] border border-[#2D2D2D] p-8 rounded-2xl group hover:border-[#FF6B1A] transition-colors">
<div className="w-12 h-12 bg-[#1E1E1E] rounded-full flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#FF6B1A]" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="font-display text-2xl text-white font-semibold tracking-tight mb-3">
                Intensidade
              </h3>
<p className="text-lg text-[#B0B0B0] leading-relaxed">
                O ambiente foi calibrado para elevar. Iluminação, acústica,
                temperatura — tudo serve ao treino.
              </p>
</div>

<div className="bg-[#111111] border border-[#2D2D2D] p-8 rounded-2xl group hover:border-[#FF6B1A] transition-colors">
<div className="w-12 h-12 bg-[#1E1E1E] rounded-full flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#FF6B1A]" data-lucide="target" strokeWidth="1.5"></i>
</div>
<h3 className="font-display text-2xl text-white font-semibold tracking-tight mb-3">
                Precisão
              </h3>
<p className="text-lg text-[#B0B0B0] leading-relaxed">
                Protocolo individualizado desde o dia um. Nenhuma planilha
                genérica sai daqui.
              </p>
</div>

<div className="bg-[#111111] border border-[#2D2D2D] p-8 rounded-2xl group hover:border-[#FF6B1A] transition-colors">
<div className="w-12 h-12 bg-[#1E1E1E] rounded-full flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#FF6B1A]" data-lucide="sliders-horizontal" strokeWidth="1.5"></i>
</div>
<h3 className="font-display text-2xl text-white font-semibold tracking-tight mb-3">
                Controle
              </h3>
<p className="text-lg text-[#B0B0B0] leading-relaxed">
                Você define o objetivo. Nós fornecemos o caminho, o espaço e o
                suporte.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#111111] border-y border-[#2D2D2D]">
<div className="max-w-[1280px] mx-auto px-5 md:px-20">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
<div>
<div className="font-display text-5xl md:text-6xl font-semibold text-white tracking-tight mb-2">
<span className="text-[#FF6B1A]">+</span>
              1.2K
            </div>
<div className="text-base text-[#B0B0B0] uppercase tracking-wide">
              Alunos ativos
            </div>
</div>
<div>
<div className="font-display text-5xl md:text-6xl font-semibold text-white tracking-tight mb-2">
              94
              <span className="text-[#FF6B1A]">%</span>
</div>
<div className="text-base text-[#B0B0B0] uppercase tracking-wide">
              Retenção (6 meses)
            </div>
</div>
<div>
<div className="font-display text-5xl md:text-6xl font-semibold text-white tracking-tight mb-2">
              8
              <span className="text-[#FF6B1A]">Y</span>
</div>
<div className="text-base text-[#B0B0B0] uppercase tracking-wide">
              Em operação
            </div>
</div>
<div>
<div className="font-display text-5xl md:text-6xl font-semibold text-white tracking-tight mb-2">
              1.8K
            </div>
<div className="text-base text-[#B0B0B0] uppercase tracking-wide">
              Área dedicada (M²)
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0A0A0A]">
<div className="max-w-[1280px] mx-auto px-5 md:px-20">
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-[#1E1E1E] p-8 rounded-2xl border border-[#2D2D2D] flex flex-col justify-between">
<div>
<div className="flex text-[#C8F135] mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-white leading-relaxed mb-8">
                "Treinei em academias em São Paulo por anos. A FORGEE é a única
                que me fez não sentir falta de nenhuma delas."
              </p>
</div>
<div>
<p className="text-base text-white font-semibold">Rafael M.</p>
<p className="text-sm text-[#B0B0B0]">Engenheiro · Aluno há 3 anos</p>
</div>
</div>
<div className="bg-[#1E1E1E] p-8 rounded-2xl border border-[#2D2D2D] flex flex-col justify-between">
<div>
<div className="flex text-[#C8F135] mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-white leading-relaxed mb-8">
                "Entrei querendo perder peso. Fiquei pela comunidade e pela
                sensação de que alguém realmente acompanha."
              </p>
</div>
<div>
<p className="text-base text-white font-semibold">Juliana T.</p>
<p className="text-sm text-[#B0B0B0]">Professora · Aluna há 2 anos</p>
</div>
</div>
<div className="bg-[#1E1E1E] p-8 rounded-2xl border border-[#2D2D2D] flex flex-col justify-between">
<div>
<div className="flex text-[#C8F135] mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-white leading-relaxed mb-8">
                "A estrutura impressiona. Mas o que me mantém são os
                profissionais. Nunca fui tão bem orientado."
              </p>
</div>
<div>
<p className="text-base text-white font-semibold">Lucas O.</p>
<p className="text-sm text-[#B0B0B0]">Empresário · Aluno há 4 anos</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#111111] relative overflow-hidden border-t border-[#2D2D2D]">
<div className="max-w-[1280px] mx-auto px-5 md:px-20 relative z-10">
<div className="mb-16 max-w-2xl">
<span className="text-xs text-[#C8F135] font-semibold tracking-[0.15em] uppercase mb-6 block">
            Estrutura
          </span>
<h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95] mb-6">
            EQUIPAMENTO
            <br/>
            QUE NÃO TE
            <br/>
<span className="text-[#C8F135]">LIMITA.</span>
</h2>
<p className="text-xl text-[#D4D4D4] leading-relaxed">
            Cada peça selecionada com um critério: aguentar seu melhor dia todos
            os dias.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-[#1E1E1E] rounded-2xl overflow-hidden border border-[#2D2D2D] hover:border-[#C8F135] transition-all">
<div className="aspect-[4/3] overflow-hidden relative">
<img alt="Cardio" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-[#1E1E1E]/50 to-transparent"></div>

<div className="absolute top-0 right-0 w-8 h-8 bg-[#C8F135] rounded-bl-xl transform translate-x-full group-hover:translate-x-0 transition-transform"></div>
</div>
<div className="p-6 relative z-10 -mt-12">
<span className="text-xs text-[#B0B0B0] font-medium tracking-widest mb-2 block">
                01
              </span>
<h3 className="font-display text-2xl text-white font-semibold tracking-tight mb-4 group-hover:text-[#C8F135] transition-colors">
                CARDIO &amp; CONDITIONING
              </h3>
<ul className="text-base text-[#D4D4D4] space-y-2 mb-6">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-[#C8F135] mt-1 shrink-0" data-lucide="check" strokeWidth="2"></i>
                  Assault Bike Concept2 (8 Unid.)
                </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-[#C8F135] mt-1 shrink-0" data-lucide="check" strokeWidth="2"></i>
                  Remo Concept2 Model D (6 Unid.)
                </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-[#C8F135] mt-1 shrink-0" data-lucide="check" strokeWidth="2"></i>
                  SkiErg Concept2 (4 Unid.)
                </li>
</ul>
</div>
</div>

<div className="group relative bg-[#1E1E1E] rounded-2xl overflow-hidden border border-[#2D2D2D] hover:border-[#C8F135] transition-all">
<div className="aspect-[4/3] overflow-hidden relative">
<img alt="Força Livre" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-[#1E1E1E]/50 to-transparent"></div>
</div>
<div className="p-6 relative z-10 -mt-12">
<span className="text-xs text-[#B0B0B0] font-medium tracking-widest mb-2 block">
                02
              </span>
<h3 className="font-display text-2xl text-white font-semibold tracking-tight mb-4 group-hover:text-[#C8F135] transition-colors">
                FORÇA LIVRE
              </h3>
<p className="text-base text-[#D4D4D4] leading-relaxed">
                Plataformas de LPO padrão olímpico, racks reforçados, anilhas
                calibradas e halteres até 60kg. Espaço otimizado para
                levantamentos pesados sem restrição.
              </p>
</div>
</div>

<div className="group relative bg-[#1E1E1E] rounded-2xl overflow-hidden border border-[#2D2D2D] hover:border-[#C8F135] transition-all">
<div className="aspect-[4/3] overflow-hidden relative">
<img alt="Máquinas" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-[#1E1E1E]/50 to-transparent"></div>
</div>
<div className="p-6 relative z-10 -mt-12">
<span className="text-xs text-[#B0B0B0] font-medium tracking-widest mb-2 block">
                03
              </span>
<h3 className="font-display text-2xl text-white font-semibold tracking-tight mb-4 group-hover:text-[#C8F135] transition-colors">
                MÁQUINAS ARTICULADAS
              </h3>
<p className="text-base text-[#D4D4D4] leading-relaxed">
                Seleção premium de máquinas convergentes e divergentes. Foco
                absoluto em biomecânica isolada para hipertrofia com segurança
                máxima.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0A0A0A]" id="programas">
<div className="max-w-[1280px] mx-auto px-5 md:px-20">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<span className="text-xs text-[#00E5FF] font-semibold tracking-[0.15em] uppercase mb-6 block">
            O que oferecemos
          </span>
<h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95] mb-6">
            UM PROTOCOLO
            <br/>
            PARA CADA
            <br/>
<span className="text-[#00E5FF]">OBJETIVO.</span>
</h2>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-[#111111] p-8 rounded-2xl border border-[#2D2D2D]">
<div className="flex justify-between items-start mb-6">
<h3 className="font-display text-3xl text-white font-semibold tracking-tight">
                FORGEE
                <span className="text-[#00E5FF]">STRENGTH</span>
</h3>
<span className="bg-[#2D2D2D] text-[#D4D4D4] text-xs font-semibold px-3 py-1 rounded-full">
                01
              </span>
</div>
<p className="text-lg text-[#B0B0B0] mb-8 leading-relaxed">
              Musculação por periodização. Para quem quer construir massa e
              entender o próprio corpo. Disponível como treino livre com
              planilha ou acompanhado com coach.
            </p>
<div className="space-y-3 border-t border-[#2D2D2D] pt-6">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#B0B0B0]" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-base text-[#D4D4D4]">
                  Iniciantes a avançados em hipertrofia
                </span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#B0B0B0]" data-lucide="calendar" strokeWidth="1.5"></i>
<span className="text-base text-[#D4D4D4]">
                  Frequência: 3–5× por semana
                </span>
</div>
</div>
</div>

<div className="bg-[#111111] p-8 rounded-2xl border border-[#00E5FF] relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#00E5FF] text-[#0A0A0A] text-xs font-bold px-4 py-1 rounded-bl-lg">
              DESTAQUE
            </div>
<div className="flex justify-between items-start mb-6 mt-2">
<h3 className="font-display text-3xl text-white font-semibold tracking-tight">
                FORGEE
                <span className="text-[#00E5FF]">CONDITIONING</span>
</h3>
<span className="bg-[#2D2D2D] text-[#D4D4D4] text-xs font-semibold px-3 py-1 rounded-full">
                02
              </span>
</div>
<p className="text-lg text-[#B0B0B0] mb-8 leading-relaxed">
              Sessões de 45 min com circuito de alta intensidade — remo, assault
              bike, força funcional e potência. Início e fim marcados. Sem
              improvisar.
            </p>
<div className="space-y-3 border-t border-[#2D2D2D] pt-6">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#B0B0B0]" data-lucide="activity" strokeWidth="1.5"></i>
<span className="text-base text-[#D4D4D4]">
                  Condicionamento, perda de gordura
                </span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#B0B0B0]" data-lucide="clock" strokeWidth="1.5"></i>
<span className="text-base text-[#D4D4D4]">
                  Turmas: 06H · 07H · 12H · 18H · 19H30
                </span>
</div>
</div>
</div>

<div className="bg-[#111111] p-8 rounded-2xl border border-[#2D2D2D]">
<div className="flex justify-between items-start mb-6">
<h3 className="font-display text-3xl text-white font-semibold tracking-tight">
                FORGEE
                <span className="text-[#00E5FF]">MOBILITY</span>
</h3>
<span className="bg-[#2D2D2D] text-[#D4D4D4] text-xs font-semibold px-3 py-1 rounded-full">
                03
              </span>
</div>
<p className="text-lg text-[#B0B0B0] mb-2 leading-relaxed">
              Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É
              trabalho de corpo para quem treina pesado e não quer se machucar.
            </p>
</div>

<div className="bg-[#111111] p-8 rounded-2xl border border-[#2D2D2D]">
<div className="flex justify-between items-start mb-6">
<h3 className="font-display text-3xl text-white font-semibold tracking-tight">
                PERSONAL
                <span className="text-[#00E5FF]">TRAINING</span>
</h3>
<span className="bg-[#2D2D2D] text-[#D4D4D4] text-xs font-semibold px-3 py-1 rounded-full">
                04
              </span>
</div>
<p className="text-lg text-[#B0B0B0] mb-2 leading-relaxed">
              Sessões 1:1 com avaliação completa, protocolo personalizado e
              revisão a cada 4 semanas. Individual ou em dupla.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#111111] border-t border-[#2D2D2D]" id="planos">
<div className="max-w-[1280px] mx-auto px-5 md:px-20">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<span className="text-xs text-[#FF6B1A] font-semibold tracking-[0.15em] uppercase mb-6 block">
            Investimento
          </span>
<h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95] mb-6">
            SEM MATRÍCULA.
            <br/>
            SEM FIDELIDADE.
            <br/>
<span className="text-[#FF6B1A]">SEM ENROLAÇÃO.</span>
</h2>
<p className="text-xl text-[#D4D4D4] leading-relaxed">
            Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
          </p>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">

<div className="bg-[#1E1E1E] rounded-3xl p-8 border border-[#2D2D2D] flex flex-col h-full">
<h3 className="font-display text-2xl text-white font-semibold tracking-tight mb-2">
              LIVRE
            </h3>
<div className="flex items-baseline gap-2 mb-8 border-b border-[#2D2D2D] pb-8">
<span className="text-5xl font-display font-semibold text-white tracking-tight">
                R$149
              </span>
<span className="text-base text-[#B0B0B0]">/ mês</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#C8F135] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span className="text-base text-[#D4D4D4]">
                  Acesso ilimitado 05H–23H
                </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#C8F135] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span className="text-base text-[#D4D4D4]">
                  Avaliação física de entrada
                </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#C8F135] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span className="text-base text-[#D4D4D4]">
                  Planilha de treino inicial
                </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#C8F135] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span className="text-base text-[#D4D4D4]">App FORGEE</span>
</li>
</ul>
<a className="block w-full text-center bg-transparent border border-[#2D2D2D] hover:border-[#D4D4D4] hover:bg-[#2D2D2D] text-white py-4 rounded-full text-base font-semibold transition-all" href="#">
              Quero Esse Plano
            </a>
</div>

<div className="bg-gradient-to-b from-[#1E1E1E] to-[#111111] rounded-3xl p-8 border-2 border-[#FF6B1A] relative flex flex-col h-full transform lg:-translate-y-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B1A] text-[#0A0A0A] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Mais Escolhido
            </div>
<h3 className="font-display text-2xl text-white font-semibold tracking-tight mb-2 mt-2">
              PLUS
            </h3>
<div className="flex items-baseline gap-2 mb-8 border-b border-[#2D2D2D] pb-8">
<span className="text-5xl font-display font-semibold text-white tracking-tight">
                R$229
              </span>
<span className="text-base text-[#B0B0B0]">/ mês</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#FF6B1A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span className="text-base text-white font-medium">
                  Tudo do Livre +
                </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#C8F135] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span className="text-base text-[#D4D4D4]">
                  2 sessões de Personal/mês
                </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#C8F135] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span className="text-base text-[#D4D4D4]">
                  1 aula Conditioning/semana
                </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#C8F135] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span className="text-base text-[#D4D4D4]">
                  Revisão de planilha a cada 4 semanas
                </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#C8F135] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span className="text-base text-[#D4D4D4]">Acesso ao Mobility</span>
</li>
</ul>
<a className="block w-full text-center bg-[#FF6B1A] hover:bg-[#E05510] text-[#0A0A0A] py-4 rounded-full text-base font-semibold transition-all shadow-[0_0_24px_rgba(255,107,26,0.3)]" href="#">
              Quero Esse Plano
            </a>
</div>

<div className="bg-[#1E1E1E] rounded-3xl p-8 border border-[#2D2D2D] flex flex-col h-full">
<h3 className="font-display text-2xl text-white font-semibold tracking-tight mb-2">
              ELITE
            </h3>
<div className="flex items-baseline gap-2 mb-8 border-b border-[#2D2D2D] pb-8">
<span className="text-5xl font-display font-semibold text-white tracking-tight">
                R$389
              </span>
<span className="text-base text-[#B0B0B0]">/ mês</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#B0B0B0] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span className="text-base text-white font-medium">
                  Tudo do Plus +
                </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#C8F135] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span className="text-base text-[#D4D4D4]">
                  4 sessões de Personal/mês
                </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#C8F135] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span className="text-base text-[#D4D4D4]">
                  Acesso ilimitado a todas as classes
                </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#C8F135] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span className="text-base text-[#D4D4D4]">
                  Bioimpedância mensal
                </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#C8F135] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span className="text-base text-[#D4D4D4]">
                  WhatsApp com coach dedicado
                </span>
</li>
</ul>
<a className="block w-full text-center bg-transparent border border-[#2D2D2D] hover:border-[#D4D4D4] hover:bg-[#2D2D2D] text-white py-4 rounded-full text-base font-semibold transition-all" href="#">
              Quero Esse Plano
            </a>
</div>
</div>
<div className="mt-12 text-center max-w-4xl mx-auto">
<p className="text-sm text-[#B0B0B0] mb-4">
            Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30
            dias de aviso · Plano anual com 15% de desconto
          </p>
<div className="inline-flex items-center gap-4 bg-[#1E1E1E] px-6 py-3 rounded-full border border-[#2D2D2D]">
<span className="text-sm text-white font-medium">
              Opção avulsa: DIÁRIA R$ 39
            </span>
<div className="w-1 h-1 bg-[#2D2D2D] rounded-full"></div>
<a className="text-sm text-[#C8F135] hover:text-[#A8D41A] font-semibold transition-colors" href="#">
              Agendar
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0A0A0A]" id="equipe">
<div className="max-w-[1280px] mx-auto px-5 md:px-20">
<div className="mb-16">
<span className="text-xs text-[#C8F135] font-semibold tracking-[0.15em] uppercase mb-6 block">
            Quem te acompanha
          </span>
<h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4">
            COACHES QUE
            <br/>
<span className="text-[#C8F135]">TREINAM.</span>
</h2>
<p className="text-lg text-[#B0B0B0] max-w-2xl">
            Todos graduados em Educação Física. Todos registrados no CREF SP.
            Todos treinando.
          </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-[#111111] p-6 rounded-2xl border border-[#2D2D2D] flex items-center gap-4 hover:border-[#D4D4D4] transition-colors">
<div className="w-14 h-14 rounded-full bg-[#1E1E1E] flex items-center justify-center font-display text-xl text-[#C8F135] font-semibold shrink-0">
              RF
            </div>
<div>
<h4 className="text-base text-white font-semibold">Rodrigo Farias</h4>
<p className="text-sm text-[#C8F135]">Head Coach</p>
<p className="text-xs text-[#6B6B6B] mt-1">CREF 045821-G/SP</p>
</div>
</div>

<div className="bg-[#111111] p-6 rounded-2xl border border-[#2D2D2D] flex items-center gap-4 hover:border-[#D4D4D4] transition-colors">
<div className="w-14 h-14 rounded-full bg-[#1E1E1E] flex items-center justify-center font-display text-xl text-[#C8F135] font-semibold shrink-0">
              AL
            </div>
<div>
<h4 className="text-base text-white font-semibold">Ana Luísa</h4>
<p className="text-sm text-[#C8F135]">Conditioning</p>
<p className="text-xs text-[#6B6B6B] mt-1">CREF 078342-G/SP</p>
</div>
</div>

<div className="bg-[#111111] p-6 rounded-2xl border border-[#2D2D2D] flex items-center gap-4 hover:border-[#D4D4D4] transition-colors">
<div className="w-14 h-14 rounded-full bg-[#1E1E1E] flex items-center justify-center font-display text-xl text-[#C8F135] font-semibold shrink-0">
              BT
            </div>
<div>
<h4 className="text-base text-white font-semibold">Bruno T.</h4>
<p className="text-sm text-[#C8F135]">Mobility &amp; Rehab</p>
<p className="text-xs text-[#6B6B6B] mt-1">CREF 091205-G/SP</p>
</div>
</div>

<div className="bg-[#111111] p-6 rounded-2xl border border-[#2D2D2D] flex items-center gap-4 hover:border-[#D4D4D4] transition-colors">
<div className="w-14 h-14 rounded-full bg-[#1E1E1E] flex items-center justify-center font-display text-xl text-[#C8F135] font-semibold shrink-0">
              CD
            </div>
<div>
<h4 className="text-base text-white font-semibold">Camila D.</h4>
<p className="text-sm text-[#C8F135]">Personal Trainer</p>
<p className="text-xs text-[#6B6B6B] mt-1">CREF 063417-G/SP</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#111111] border-y border-[#2D2D2D]">
<div className="max-w-[800px] mx-auto px-5 md:px-0">
<div className="text-center mb-16">
<span className="text-xs text-[#FF6B1A] font-semibold tracking-[0.15em] uppercase mb-6 block">
            Dúvidas
          </span>
<h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            PERGUNTAS
            <br/>
<span className="text-[#FF6B1A]">DIRETAS.</span>
</h2>
</div>
<div className="space-y-2">
<div className="border-b border-[#2D2D2D] pb-6 mb-6">
<h4 className="text-xl text-white font-semibold mb-3 flex justify-between items-center cursor-pointer">
              Preciso ter experiência?
              <i className="w-5 h-5 text-[#6B6B6B]" data-lucide="chevron-down" strokeWidth="1.5"></i>
</h4>
<p className="text-lg text-[#B0B0B0] leading-relaxed pr-8">
              Não. Todos passam pela avaliação inicial — do iniciante ao atleta.
              O ponto de partida é individual.
            </p>
</div>
<div className="border-b border-[#2D2D2D] pb-6 mb-6">
<h4 className="text-xl text-white font-semibold mb-3 flex justify-between items-center cursor-pointer">
              Posso treinar sozinho?
              <i className="w-5 h-5 text-[#6B6B6B]" data-lucide="chevron-down" strokeWidth="1.5"></i>
</h4>
<p className="text-lg text-[#B0B0B0] leading-relaxed pr-8">
              Sim. A maioria dos alunos treina de forma autônoma com planilha.
              Coaches estão disponíveis para dúvidas pontuais — não ficam em
              cima.
            </p>
</div>
<div className="border-b border-[#2D2D2D] pb-6 mb-6">
<h4 className="text-xl text-white font-semibold mb-3 flex justify-between items-center cursor-pointer">
              Como funciona o cancelamento?
              <i className="w-5 h-5 text-[#6B6B6B]" data-lucide="chevron-down" strokeWidth="1.5"></i>
</h4>
<p className="text-lg text-[#B0B0B0] leading-relaxed pr-8">
              Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa,
              sem justificativa obrigatória.
            </p>
</div>
<div className="border-b border-[#2D2D2D] pb-6 mb-6">
<h4 className="text-xl text-white font-semibold mb-3 flex justify-between items-center cursor-pointer">
              Posso visitar antes de assinar?
              <i className="w-5 h-5 text-[#6B6B6B]" data-lucide="chevron-down" strokeWidth="1.5"></i>
</h4>
<p className="text-lg text-[#B0B0B0] leading-relaxed pr-8">
              Sim — e incentivamos. Agende pelo site. Você conhece o espaço,
              conversa com um coach e faz uma aula experimental gratuita.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0A0A0A]">
<div className="max-w-[1280px] mx-auto px-5 md:px-20">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<span className="text-xs text-[#C8F135] font-semibold tracking-[0.15em] uppercase mb-6 block">
              Onde estamos
            </span>
<h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95] mb-8">
              NO CORAÇÃO
              <br/>
              DE
              <span className="text-[#C8F135]">INDAIATUBA.</span>
</h2>
<div className="space-y-8">
<div className="flex gap-4">
<i className="w-6 h-6 text-[#C8F135] shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
<div>
<p className="text-lg text-white font-medium">
                    Rua das Esmeraldas, 742
                  </p>
<p className="text-base text-[#B0B0B0]">
                    Jardim Morada do Sol — Indaiatuba, SP
                    <br/>
                    CEP 13.334-210
                  </p>
<p className="text-sm text-[#6B6B6B] mt-2">
                    200m do Carrefour · Próximo à saída SP-075
                  </p>
</div>
</div>
<div className="flex gap-4">
<i className="w-6 h-6 text-[#C8F135] shrink-0" data-lucide="clock" strokeWidth="1.5"></i>
<div className="w-full max-w-sm">
<div className="flex justify-between border-b border-[#2D2D2D] pb-2 mb-2">
<span className="text-base text-[#B0B0B0]">Seg a Sex</span>
<span className="text-base text-white font-medium">
                      05H00 – 23H00
                    </span>
</div>
<div className="flex justify-between border-b border-[#2D2D2D] pb-2 mb-2">
<span className="text-base text-[#B0B0B0]">Sábado</span>
<span className="text-base text-white font-medium">
                      07H00 – 20H00
                    </span>
</div>
<div className="flex justify-between">
<span className="text-base text-[#B0B0B0]">Dom / Feriados</span>
<span className="text-base text-white font-medium">
                      08H00 – 14H00
                    </span>
</div>
</div>
</div>
<div className="flex gap-4">
<i className="w-6 h-6 text-[#C8F135] shrink-0" data-lucide="smartphone" strokeWidth="1.5"></i>
<div>
<p className="text-base text-white font-medium">
                    (19) 98234-5678
                  </p>
<p className="text-base text-[#B0B0B0]">contato@forgee.academy</p>
<p className="text-base text-[#B0B0B0]">@forgee.academy</p>
</div>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5A] text-white px-8 py-4 rounded-full text-base font-semibold transition-all" href="#">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="2"></i>
                Falar no WhatsApp
              </a>
<a className="inline-flex justify-center items-center bg-transparent border border-[#2D2D2D] hover:border-[#D4D4D4] hover:bg-[#111111] text-white px-8 py-4 rounded-full text-base font-medium transition-all" href="#">
                Como Chegar
              </a>
</div>
</div>

<div className="aspect-square md:aspect-[4/5] bg-[#1E1E1E] rounded-3xl border border-[#2D2D2D] overflow-hidden relative grayscale hover:grayscale-0 transition duration-500">
<img alt="Localização" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 bg-[#0A0A0A] rounded-full flex items-center justify-center border-2 border-[#C8F135] shadow-[0_0_24px_rgba(200,241,53,0.3)]">
<i className="w-6 h-6 text-[#C8F135]" data-lucide="map-pin" strokeWidth="2"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#C8F135] relative overflow-hidden">

<div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMDAiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')]"></div>
<div className="max-w-[1280px] mx-auto px-5 md:px-20 relative z-10 text-center">
<h2 className="font-display text-5xl md:text-8xl font-semibold tracking-tight text-[#0A0A0A] leading-[0.9] mb-8">
          A DECISÃO
          <br/>
          JÁ FOI TOMADA.
          <br/>
          AGORA É A AÇÃO.
        </h2>
<p className="text-sm md:text-base font-semibold text-[#1E1E1E] tracking-[0.4em] md:tracking-[0.7em] leading-loose mb-12 uppercase max-w-2xl mx-auto break-keep">
          Agende uma visita · gratuita · sem compromisso · traga tênis.
        </p>
<a className="inline-flex justify-center items-center bg-[#0A0A0A] hover:bg-[#1E1E1E] text-white px-10 py-5 rounded-full text-xl font-semibold transition-all shadow-[0_8px_32px_rgba(0,0,0,0.3)]" href="#">
          Agendar Visita Gratuita
        </a>
</div>
</section>

<footer className="bg-[#050505] pt-20 pb-10 border-t border-[#1E1E1E]">
<div className="max-w-[1280px] mx-auto px-5 md:px-20">
<div className="grid md:grid-cols-12 gap-12 mb-16">
<div className="md:col-span-6">
<a className="font-display text-4xl tracking-tight text-white font-semibold mb-2 block" href="#">
              FORGEE
            </a>
<p className="text-sm text-[#C8F135] font-semibold tracking-[0.15em] uppercase mb-6 block">
              BEYOND LIMITS KNOWN™
            </p>
</div>
<div className="md:col-span-3">
<h4 className="text-base text-white font-semibold mb-6">Academia</h4>
<ul className="space-y-4">
<li>
<a className="text-base text-[#B0B0B0] hover:text-[#C8F135] transition-colors" href="#espaco">
                  Espaço
                </a>
</li>
<li>
<a className="text-base text-[#B0B0B0] hover:text-[#C8F135] transition-colors" href="#programas">
                  Programas
                </a>
</li>
<li>
<a className="text-base text-[#B0B0B0] hover:text-[#C8F135] transition-colors" href="#equipe">
                  Equipe
                </a>
</li>
<li>
<a className="text-base text-[#B0B0B0] hover:text-[#C8F135] transition-colors" href="#planos">
                  Planos
                </a>
</li>
</ul>
</div>
<div className="md:col-span-3">
<h4 className="text-base text-white font-semibold mb-6">
              Legal &amp; Redes
            </h4>
<ul className="space-y-4">
<li>
<a className="text-base text-[#B0B0B0] hover:text-white transition-colors" href="#">
                  Política de Privacidade
                </a>
</li>
<li>
<a className="text-base text-[#B0B0B0] hover:text-white transition-colors" href="#">
                  Termos de Uso
                </a>
</li>
<li className="pt-4 flex gap-4">
<a className="text-[#B0B0B0] hover:text-[#C8F135] transition-colors" href="#">
<i className="w-6 h-6" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="text-[#B0B0B0] hover:text-[#C8F135] transition-colors" href="#">
<i className="w-6 h-6" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-[#1E1E1E] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-[#6B6B6B] tracking-wide text-center md:text-left">
            FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP · DESIGN
            SYSTEM © 2026
          </p>
<div className="text-xs text-[#6B6B6B]">Built for Performance</div>
</div>
</div>
</footer>



    </>
  );
}
