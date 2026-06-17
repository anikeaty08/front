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
      

<div className="bg-[#1A1A1E] border-b border-[#222228] hidden md:block relative z-50">
<div className="max-w-[1200px] mx-auto px-6 py-2 flex justify-between items-center text-xs font-['JetBrains_Mono',monospace] text-[#9191A0] tracking-widest uppercase">
<span>Beyond Limits Known™</span>
<div className="flex gap-8">
<span className="flex items-center gap-2"><i className="w-3 h-3 text-[#FF2D2D]" data-lucide="map-pin" strokeWidth="1.5"></i> Indaiatuba, SP</span>
<span>Est. 2018</span>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-[#0A0A0B]/90 backdrop-blur-xl border-b border-[#222228]">
<div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 bg-[#FF2D2D] rounded-[4px] flex items-center justify-center group-hover:bg-[#FF5C5C] transition-colors">
<i className="w-5 h-5 text-white" data-lucide="flame" strokeWidth="1.5"></i>
</div>
<span className="font-['Space_Grotesk',sans-serif] font-semibold tracking-widest text-xl uppercase">Forgee</span>
</a>

<div className="hidden lg:flex items-center gap-8 font-medium text-sm text-[#9191A0]">
<a className="hover:text-[#F5F5F8] transition-colors" href="#espaco">Espaço</a>
<a className="hover:text-[#F5F5F8] transition-colors" href="#programas">Programas</a>
<a className="hover:text-[#F5F5F8] transition-colors" href="#equipe">Equipe</a>
<a className="hover:text-[#F5F5F8] transition-colors" href="#planos">Planos</a>
</div>

<div className="hidden lg:flex items-center gap-6">
<a className="text-sm font-medium text-[#9191A0] hover:text-[#F5F5F8] transition-colors" href="#">Sou Membro</a>
<a className="bg-[#FF2D2D] hover:bg-[#FF5C5C] text-white text-sm font-medium px-6 py-3 rounded-[4px] tracking-wide uppercase transition-colors shadow-[0_0_20px_rgba(255,45,45,0.15)]" href="#agendar">
                    Agendar Visita
                </a>
</div>

<button className="lg:hidden text-[#F5F5F8] p-2">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<header className="relative pt-24 pb-32 md:pt-40 md:pb-48 overflow-hidden border-b border-[#222228] bg-black">

<img alt="Gym training" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity pointer-events-none" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/80 via-[#0A0A0B]/60 to-[#0A0A0B] pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2D2D]/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<h1 className="font-['Space_Grotesk',sans-serif] font-semibold text-5xl md:text-7xl lg:text-[110px] leading-[0.9] tracking-tighter uppercase mb-8">
<span className="block">Sem Mágica</span>
<span className="block text-[#9191A0]">Sem Atalhos</span>
<span className="block text-[#FF2D2D]">Sem Desculpas</span>
</h1>
<p className="font-['Space_Grotesk',sans-serif] text-xl md:text-2xl font-medium tracking-tight text-[#D4D4DC] mb-6 max-w-2xl">
                Treinos progressivos e acompanhamento real.
            </p>
<p className="text-base md:text-lg text-[#9191A0] mb-12 max-w-2xl leading-relaxed">
                Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="bg-[#FF2D2D] hover:bg-[#FF5C5C] text-white flex items-center justify-center gap-2 text-sm font-medium px-8 py-4 rounded-[4px] tracking-wide uppercase transition-all shadow-[0_0_20px_rgba(255,45,45,0.2)]" href="#planos">
                    Começar Agora <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="bg-[#0A0A0B]/50 backdrop-blur-md border border-[#33333A] hover:border-[#9191A0] hover:bg-[#1A1A1E]/80 text-[#F5F5F8] flex items-center justify-center text-sm font-medium px-8 py-4 rounded-[4px] tracking-wide uppercase transition-colors" href="#espaco">
                    Conhecer o Espaço
                </a>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full border-t border-[#222228] bg-[#121214]/80 backdrop-blur-md hidden md:block z-20">
<div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between font-['JetBrains_Mono',monospace] text-xs text-[#9191A0] tracking-widest uppercase">
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#FF2D2D]"></div> 05H–23H</div>
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#FF2D2D]"></div> 7 Dias</div>
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#FF2D2D]"></div> 1.800m²</div>
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#FF2D2D]"></div> +1.200 Alunos</div>
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#FF2D2D]"></div> Desde 2018</div>
</div>
</div>
</header>

<section className="py-24 md:py-32 border-b border-[#222228]" id="espaco">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-5">
<p className="font-['JetBrains_Mono',monospace] text-xs text-[#FF2D2D] tracking-[0.12em] uppercase mb-6 flex items-center gap-2">
<span className="w-4 h-[1px] bg-[#FF2D2D]"></span> Quem Somos
                    </p>
<h2 className="font-['Space_Grotesk',sans-serif] font-semibold text-4xl md:text-5xl tracking-tight uppercase leading-[1.1] mb-8">
                        Forjados<br/>Pela<br/>Disciplina.
                    </h2>
<div className="pl-6 border-l-2 border-[#FF2D2D] mb-8">
<p className="font-['Space_Grotesk',sans-serif] text-xl md:text-2xl italic text-[#D4D4DC] tracking-tight">
                            "In silence, the transformation begins."
                        </p>
</div>
</div>

<div className="lg:col-span-7 flex flex-col justify-center">
<div className="space-y-6 text-base md:text-lg text-[#9191A0] leading-relaxed mb-12">
<p className="text-[#F5F5F8] font-medium">A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.</p>
<p>Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.</p>
<p>Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-[#121214] border border-[#222228] p-6 rounded-[8px]">
<h3 className="font-['Space_Grotesk',sans-serif] font-semibold tracking-tight text-lg mb-3">Intensidade</h3>
<p className="text-sm text-[#9191A0] leading-relaxed">O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.</p>
</div>
<div className="bg-[#121214] border border-[#222228] p-6 rounded-[8px]">
<h3 className="font-['Space_Grotesk',sans-serif] font-semibold tracking-tight text-lg mb-3">Precisão</h3>
<p className="text-sm text-[#9191A0] leading-relaxed">Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.</p>
</div>
<div className="bg-[#121214] border border-[#222228] p-6 rounded-[8px]">
<h3 className="font-['Space_Grotesk',sans-serif] font-semibold tracking-tight text-lg mb-3">Controle</h3>
<p className="text-sm text-[#9191A0] leading-relaxed">Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.</p>
</div>
</div>
</div>
</div>

<div className="mt-16 h-[300px] md:h-[450px] w-full rounded-[8px] overflow-hidden relative border border-[#222228]">
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] to-transparent z-10 opacity-60"></div>
<img alt="Pessoas treinando intenso na academia" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:scale-105 transition-all duration-1000 ease-out" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-[#222228]">
<div>
<div className="font-['Space_Grotesk',sans-serif] font-semibold text-4xl md:text-5xl text-[#FF2D2D] mb-2">+1.2K</div>
<div className="font-['JetBrains_Mono',monospace] text-xs text-[#9191A0] uppercase tracking-widest">Alunos Ativos</div>
</div>
<div>
<div className="font-['Space_Grotesk',sans-serif] font-semibold text-4xl md:text-5xl text-[#FF2D2D] mb-2">94%</div>
<div className="font-['JetBrains_Mono',monospace] text-xs text-[#9191A0] uppercase tracking-widest">Retenção 6m</div>
</div>
<div>
<div className="font-['Space_Grotesk',sans-serif] font-semibold text-4xl md:text-5xl text-[#FF2D2D] mb-2">8 Anos</div>
<div className="font-['JetBrains_Mono',monospace] text-xs text-[#9191A0] uppercase tracking-widest">Em Operação</div>
</div>
<div>
<div className="font-['Space_Grotesk',sans-serif] font-semibold text-4xl md:text-5xl text-[#FF2D2D] mb-2">1.8K</div>
<div className="font-['JetBrains_Mono',monospace] text-xs text-[#9191A0] uppercase tracking-widest">M² Dedicados</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
<div className="bg-[#1A1A1E] border border-[#33333A] p-8 rounded-[8px] relative">
<i className="w-8 h-8 text-[#FF2D2D]/20 absolute top-6 right-6" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-base text-[#D4D4DC] italic mb-6">"Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas."</p>
<div className="font-['JetBrains_Mono',monospace] text-xs text-[#9191A0] uppercase tracking-wide">
<span className="text-[#F5F5F8] font-medium">Rafael M.</span> · Engenheiro<br/>Aluno há 3 anos
                    </div>
</div>
<div className="bg-[#1A1A1E] border border-[#33333A] p-8 rounded-[8px] relative">
<i className="w-8 h-8 text-[#FF2D2D]/20 absolute top-6 right-6" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-base text-[#D4D4DC] italic mb-6">"Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha."</p>
<div className="font-['JetBrains_Mono',monospace] text-xs text-[#9191A0] uppercase tracking-wide">
<span className="text-[#F5F5F8] font-medium">Juliana T.</span> · Professora<br/>Aluna há 2 anos
                    </div>
</div>
<div className="bg-[#1A1A1E] border border-[#33333A] p-8 rounded-[8px] relative">
<i className="w-8 h-8 text-[#FF2D2D]/20 absolute top-6 right-6" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-base text-[#D4D4DC] italic mb-6">"A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado."</p>
<div className="font-['JetBrains_Mono',monospace] text-xs text-[#9191A0] uppercase tracking-wide">
<span className="text-[#F5F5F8] font-medium">Lucas O.</span> · Empresário<br/>Aluno há 4 anos
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-b border-[#222228] bg-[#0A0A0B]">
<div className="max-w-[800px] mx-auto px-6">
<div className="text-center mb-16">
<p className="font-['JetBrains_Mono',monospace] text-xs text-[#FF2D2D] tracking-[0.12em] uppercase mb-4">Estrutura</p>
<h2 className="font-['Space_Grotesk',sans-serif] font-semibold text-4xl md:text-5xl tracking-tight uppercase leading-[1.1] mb-6">
                    Equipamento<br/>Que Não Te Limita.
                </h2>
<p className="text-base md:text-lg text-[#9191A0]">Cada peça selecionada com um critério: aguentar seu melhor dia — todos os dias.</p>
</div>
<div className="space-y-2">
<details className="group bg-[#121214] border border-[#222228] rounded-[8px] overflow-hidden" open="">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none bg-[#1A1A1E] group-hover:bg-[#222228] transition-colors">
<span className="font-['Space_Grotesk',sans-serif] font-medium tracking-tight text-lg uppercase group-open:text-[#FF2D2D] transition-colors">01 — Cardio &amp; Conditioning</span>
<div className="text-[#9191A0] group-open:text-[#FF2D2D] transition-colors">
<i className="w-5 h-5 group-open:hidden" data-lucide="plus" strokeWidth="1.5"></i>
<i className="w-5 h-5 hidden group-open:block" data-lucide="minus" strokeWidth="1.5"></i>
</div>
</summary>
<div className="p-6 pt-2 border-t border-[#222228] bg-[#121214]">
<ul className="space-y-4 text-base text-[#9191A0]">
<li className="flex items-center justify-between"><span className="text-[#D4D4DC]">Assault Bike Concept2</span> <span className="font-['JetBrains_Mono',monospace] text-xs uppercase">8 Unid.</span></li>
<li className="flex items-center justify-between"><span className="text-[#D4D4DC]">Remo Concept2 Model D</span> <span className="font-['JetBrains_Mono',monospace] text-xs uppercase">6 Unid.</span></li>
<li className="flex items-center justify-between"><span className="text-[#D4D4DC]">SkiErg Concept2</span> <span className="font-['JetBrains_Mono',monospace] text-xs uppercase">4 Unid.</span></li>
<li className="flex items-center justify-between"><span className="text-[#D4D4DC]">Esteiras NordicTrack (Inclin. Negativa)</span> <span className="font-['JetBrains_Mono',monospace] text-xs uppercase">Custom</span></li>
<li className="flex items-center justify-between"><span className="text-[#D4D4DC]">Cordas de Batalha (15m/20m)</span> <span className="font-['JetBrains_Mono',monospace] text-xs uppercase">Setup</span></li>
</ul>
</div>
</details>
<details className="group bg-[#121214] border border-[#222228] rounded-[8px] overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none bg-[#1A1A1E] group-hover:bg-[#222228] transition-colors">
<span className="font-['Space_Grotesk',sans-serif] font-medium tracking-tight text-lg uppercase group-open:text-[#FF2D2D] transition-colors">02 — Força Livre</span>
<div className="text-[#9191A0] group-open:text-[#FF2D2D] transition-colors">
<i className="w-5 h-5 group-open:hidden" data-lucide="plus" strokeWidth="1.5"></i>
<i className="w-5 h-5 hidden group-open:block" data-lucide="minus" strokeWidth="1.5"></i>
</div>
</summary>
<div className="p-6 pt-2 border-t border-[#222228] bg-[#121214]">
<p className="text-base text-[#9191A0]">Plataformas de LPO Eleiko, Racks Rogue Fitness de alta capacidade, Dumbbells até 60kg e barras olímpicas calibradas.</p>
</div>
</details>
<details className="group bg-[#121214] border border-[#222228] rounded-[8px] overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none bg-[#1A1A1E] group-hover:bg-[#222228] transition-colors">
<span className="font-['Space_Grotesk',sans-serif] font-medium tracking-tight text-lg uppercase group-open:text-[#FF2D2D] transition-colors">03 — Máquinas</span>
<div className="text-[#9191A0] group-open:text-[#FF2D2D] transition-colors">
<i className="w-5 h-5 group-open:hidden" data-lucide="plus" strokeWidth="1.5"></i>
<i className="w-5 h-5 hidden group-open:block" data-lucide="minus" strokeWidth="1.5"></i>
</div>
</summary>
<div className="p-6 pt-2 border-t border-[#222228] bg-[#121214]">
<p className="text-base text-[#9191A0]">Seleção biomecânica precisa com equipamentos Hammer Strength e Arsenal Strength para isolamento máximo.</p>
</div>
</details>
<details className="group bg-[#121214] border border-[#222228] rounded-[8px] overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none bg-[#1A1A1E] group-hover:bg-[#222228] transition-colors">
<span className="font-['Space_Grotesk',sans-serif] font-medium tracking-tight text-lg uppercase group-open:text-[#FF2D2D] transition-colors">04 — Funcional &amp; Mobility</span>
<div className="text-[#9191A0] group-open:text-[#FF2D2D] transition-colors">
<i className="w-5 h-5 group-open:hidden" data-lucide="plus" strokeWidth="1.5"></i>
<i className="w-5 h-5 hidden group-open:block" data-lucide="minus" strokeWidth="1.5"></i>
</div>
</summary>
<div className="p-6 pt-2 border-t border-[#222228] bg-[#121214]">
<p className="text-base text-[#9191A0]">Área de 300m² com grama sintética de alta densidade, trenós, plyo boxes, kettlebells e acessórios de liberação miofascial.</p>
</div>
</details>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-b border-[#222228]" id="programas">
<div className="max-w-[1200px] mx-auto px-6">
<div className="mb-16">
<p className="font-['JetBrains_Mono',monospace] text-xs text-[#FF2D2D] tracking-[0.12em] uppercase mb-4 flex items-center gap-2">
<span className="w-4 h-[1px] bg-[#FF2D2D]"></span> O Que Oferecemos
                </p>
<h2 className="font-['Space_Grotesk',sans-serif] font-semibold text-4xl md:text-5xl tracking-tight uppercase leading-[1.1]">
                    Um Protocolo<br/>Para Cada Objetivo.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-[#121214] border border-[#222228] p-8 rounded-[8px] flex flex-col h-full relative overflow-hidden group">
<div className="relative z-10 flex flex-col h-full">
<div className="font-['JetBrains_Mono',monospace] text-xs text-[#6B6B78] mb-4">01</div>
<h3 className="font-['Space_Grotesk',sans-serif] font-semibold tracking-tight text-2xl uppercase mb-4 group-hover:text-[#FF2D2D] transition-colors">Forgee Strength</h3>
<p className="text-base text-[#9191A0] leading-relaxed mb-8 flex-grow">
                            Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.
                        </p>
<div className="border-t border-[#222228] pt-6 space-y-3 font-['JetBrains_Mono',monospace] text-xs uppercase text-[#D4D4DC]">
<div className="flex justify-between"><span>Público</span> <span className="text-[#6B6B78]">Iniciante a Avançado</span></div>
<div className="flex justify-between"><span>Frequência</span> <span className="text-[#6B6B78]">3-5x Semana</span></div>
</div>
</div>
</div>

<div className="bg-[#1A1A1E] border border-[#FF2D2D]/30 rounded-[8px] flex flex-col h-full relative overflow-hidden shadow-[0_0_30px_rgba(255,45,45,0.05)]">

<img alt="Treino de Conditioning" className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay grayscale" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1E] via-[#1A1A1E]/80 to-transparent"></div>
<div className="absolute top-0 right-0 w-32 h-32 bg-[#FF2D2D]/20 blur-[40px] rounded-full"></div>
<div className="p-8 relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-4">
<div className="font-['JetBrains_Mono',monospace] text-xs text-[#FF2D2D]">02</div>
<span className="bg-[#FF2D2D]/15 text-[#FF2D2D] border border-[#FF2D2D]/30 text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase">Destaque</span>
</div>
<h3 className="font-['Space_Grotesk',sans-serif] font-semibold tracking-tight text-2xl uppercase mb-4 text-[#F5F5F8]">Forgee Conditioning</h3>
<p className="text-base text-[#D4D4DC] leading-relaxed mb-8 flex-grow">
                            Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.
                        </p>
<div className="border-t border-[#33333A]/50 pt-6 space-y-3 font-['JetBrains_Mono',monospace] text-xs uppercase text-[#F5F5F8]">
<div className="flex justify-between"><span>Foco</span> <span className="text-[#9191A0]">Condicionamento / Fat Loss</span></div>
<div className="flex justify-between"><span>Turmas</span> <span className="text-[#9191A0]">06h · 07h · 12h · 18h · 19h30</span></div>
</div>
</div>
</div>

<div className="bg-[#121214] border border-[#222228] p-8 rounded-[8px] flex flex-col h-full group">
<div className="font-['JetBrains_Mono',monospace] text-xs text-[#6B6B78] mb-4">03</div>
<h3 className="font-['Space_Grotesk',sans-serif] font-semibold tracking-tight text-2xl uppercase mb-4 group-hover:text-[#FF2D2D] transition-colors">Forgee Mobility</h3>
<p className="text-base text-[#9191A0] leading-relaxed mb-8 flex-grow">
                        Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.
                    </p>
</div>

<div className="bg-[#121214] border border-[#222228] p-8 rounded-[8px] flex flex-col h-full group">
<div className="font-['JetBrains_Mono',monospace] text-xs text-[#6B6B78] mb-4">04</div>
<h3 className="font-['Space_Grotesk',sans-serif] font-semibold tracking-tight text-2xl uppercase mb-4 group-hover:text-[#FF2D2D] transition-colors">Personal Training</h3>
<p className="text-base text-[#9191A0] leading-relaxed mb-8 flex-grow">
                        Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-b border-[#222228] bg-[#0A0A0B]" id="planos">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center mb-20">
<p className="font-['JetBrains_Mono',monospace] text-xs text-[#FF2D2D] tracking-[0.12em] uppercase mb-4">Investimento</p>
<h2 className="font-['Space_Grotesk',sans-serif] font-semibold text-4xl md:text-5xl tracking-tight uppercase leading-[1.1] mb-6">
                    Sem Matrícula.<br/>Sem Fidelidade.<br/>Sem Enrolação.
                </h2>
<p className="text-base md:text-lg text-[#9191A0] max-w-xl mx-auto">Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto items-center">

<div className="bg-[#121214] border border-[#222228] rounded-[8px] p-8 md:p-10">
<h3 className="font-['Space_Grotesk',sans-serif] font-medium tracking-tight text-xl uppercase mb-2">Livre</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="font-['Space_Grotesk',sans-serif] font-semibold text-4xl">R$149</span>
<span className="text-[#6B6B78] text-sm">/mês</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-[#D4D4DC]">
<li className="flex gap-3"><i className="w-5 h-5 text-[#FF2D2D] shrink-0" data-lucide="check" strokeWidth="2"></i> Acesso ilimitado 05H–23H</li>
<li className="flex gap-3"><i className="w-5 h-5 text-[#FF2D2D] shrink-0" data-lucide="check" strokeWidth="2"></i> Avaliação física de entrada</li>
<li className="flex gap-3"><i className="w-5 h-5 text-[#FF2D2D] shrink-0" data-lucide="check" strokeWidth="2"></i> Planilha de treino inicial</li>
<li className="flex gap-3"><i className="w-5 h-5 text-[#FF2D2D] shrink-0" data-lucide="check" strokeWidth="2"></i> App FORGEE</li>
</ul>
<button className="w-full bg-transparent border border-[#33333A] hover:border-[#9191A0] text-[#F5F5F8] text-sm font-medium py-3 rounded-[4px] tracking-wide uppercase transition-colors">
                        Quero Esse Plano
                    </button>
</div>

<div className="bg-[#1A1A1E] border border-[#FF2D2D] rounded-[8px] p-8 md:p-10 relative md:-translate-y-4 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF2D2D] text-white text-[10px] font-bold px-4 py-1 rounded-full tracking-widest uppercase whitespace-nowrap">
                        Mais Escolhido
                    </div>
<h3 className="font-['Space_Grotesk',sans-serif] font-medium tracking-tight text-xl uppercase text-[#FF2D2D] mb-2">Plus</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="font-['Space_Grotesk',sans-serif] font-semibold text-5xl">R$229</span>
<span className="text-[#9191A0] text-sm">/mês</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-[#F5F5F8]">
<li className="flex gap-3 text-[#9191A0]"><i className="w-5 h-5 text-[#33333A] shrink-0" data-lucide="check" strokeWidth="2"></i> Tudo do Livre +</li>
<li className="flex gap-3"><i className="w-5 h-5 text-[#FF2D2D] shrink-0" data-lucide="check" strokeWidth="2"></i> 2 sessões de Personal/mês</li>
<li className="flex gap-3"><i className="w-5 h-5 text-[#FF2D2D] shrink-0" data-lucide="check" strokeWidth="2"></i> 1 aula Conditioning/semana</li>
<li className="flex gap-3"><i className="w-5 h-5 text-[#FF2D2D] shrink-0" data-lucide="check" strokeWidth="2"></i> Revisão planilha 4 semanas</li>
<li className="flex gap-3"><i className="w-5 h-5 text-[#FF2D2D] shrink-0" data-lucide="check" strokeWidth="2"></i> Acesso ao Mobility</li>
</ul>
<button className="w-full bg-[#FF2D2D] hover:bg-[#FF5C5C] text-white text-sm font-medium py-4 rounded-[4px] tracking-wide uppercase transition-colors shadow-[0_0_15px_rgba(255,45,45,0.2)]">
                        Quero Esse Plano
                    </button>
</div>

<div className="bg-[#121214] border border-[#222228] rounded-[8px] p-8 md:p-10">
<h3 className="font-['Space_Grotesk',sans-serif] font-medium tracking-tight text-xl uppercase mb-2">Elite</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="font-['Space_Grotesk',sans-serif] font-semibold text-4xl">R$389</span>
<span className="text-[#6B6B78] text-sm">/mês</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-[#D4D4DC]">
<li className="flex gap-3 text-[#6B6B78]"><i className="w-5 h-5 text-[#222228] shrink-0" data-lucide="check" strokeWidth="2"></i> Tudo do Plus +</li>
<li className="flex gap-3"><i className="w-5 h-5 text-[#FF2D2D] shrink-0" data-lucide="check" strokeWidth="2"></i> 4 sessões Personal/mês</li>
<li className="flex gap-3"><i className="w-5 h-5 text-[#FF2D2D] shrink-0" data-lucide="check" strokeWidth="2"></i> Acesso ilimitado classes</li>
<li className="flex gap-3"><i className="w-5 h-5 text-[#FF2D2D] shrink-0" data-lucide="check" strokeWidth="2"></i> Bioimpedância mensal</li>
<li className="flex gap-3"><i className="w-5 h-5 text-[#FF2D2D] shrink-0" data-lucide="check" strokeWidth="2"></i> WhatsApp coach dedicado</li>
</ul>
<button className="w-full bg-transparent border border-[#33333A] hover:border-[#9191A0] text-[#F5F5F8] text-sm font-medium py-3 rounded-[4px] tracking-wide uppercase transition-colors">
                        Quero Esse Plano
                    </button>
</div>
</div>
<div className="mt-16 flex flex-col items-center justify-center pt-8 border-t border-[#222228] gap-4">
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-['JetBrains_Mono',monospace] text-[#9191A0] uppercase tracking-wide">
<span><i className="inline w-4 h-4 mr-1 relative -top-0.5" data-lucide="credit-card" strokeWidth="1.5"></i> Pix ou Cartão (3x)</span>
<span>Cancelamento 30 dias</span>
<span className="text-[#D4D4DC]">Plano Anual: -15% OFF</span>
</div>
<div className="mt-8 bg-[#121214] border border-[#222228] rounded-[4px] py-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-6 w-full max-w-[600px]">
<div>
<span className="font-['Space_Grotesk',sans-serif] font-medium tracking-tight text-lg uppercase block">Diária Avulsa</span>
<span className="text-sm text-[#9191A0]">Acesso por 1 dia completo</span>
</div>
<div className="flex items-center gap-6">
<span className="font-['Space_Grotesk',sans-serif] font-semibold text-2xl text-[#FF2D2D]">R$39</span>
<button className="bg-transparent border border-[#33333A] hover:border-[#9191A0] text-[#F5F5F8] text-xs font-medium px-4 py-2 rounded-[4px] tracking-wide uppercase transition-colors">
                            Agendar
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-[#222228]" id="equipe">
<div className="max-w-[1200px] mx-auto px-6">
<div className="mb-16">
<p className="font-['JetBrains_Mono',monospace] text-xs text-[#FF2D2D] tracking-[0.12em] uppercase mb-4 flex items-center gap-2">
<span className="w-4 h-[1px] bg-[#FF2D2D]"></span> Quem te acompanha
                </p>
<h2 className="font-['Space_Grotesk',sans-serif] font-semibold text-4xl md:text-5xl tracking-tight uppercase leading-[1.1] mb-6">
                    Coaches Que<br/>Treinam.
                </h2>
<p className="text-base md:text-lg text-[#9191A0] max-w-2xl">Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#121214] border border-[#222228] p-6 rounded-[8px] group hover:border-[#33333A] transition-colors">
<img alt="Rodrigo Farias" className="w-16 h-16 rounded-[4px] object-cover mb-6 grayscale border border-[#33333A] group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<h4 className="font-['Space_Grotesk',sans-serif] font-medium text-lg uppercase mb-1">Rodrigo Farias</h4>
<p className="text-sm text-[#D4D4DC] mb-4">Head Coach</p>
<p className="font-['JetBrains_Mono',monospace] text-xs text-[#6B6B78]">CREF 045821-G/SP</p>
</div>

<div className="bg-[#121214] border border-[#222228] p-6 rounded-[8px] group hover:border-[#33333A] transition-colors">
<img alt="Ana Luísa" className="w-16 h-16 rounded-[4px] object-cover mb-6 grayscale border border-[#33333A] group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<h4 className="font-['Space_Grotesk',sans-serif] font-medium text-lg uppercase mb-1">Ana Luísa</h4>
<p className="text-sm text-[#D4D4DC] mb-4">Conditioning</p>
<p className="font-['JetBrains_Mono',monospace] text-xs text-[#6B6B78]">CREF 078342-G/SP</p>
</div>

<div className="bg-[#121214] border border-[#222228] p-6 rounded-[8px] group hover:border-[#33333A] transition-colors">
<img alt="Bruno T." className="w-16 h-16 rounded-[4px] object-cover mb-6 grayscale border border-[#33333A] group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<h4 className="font-['Space_Grotesk',sans-serif] font-medium text-lg uppercase mb-1">Bruno T.</h4>
<p className="text-sm text-[#D4D4DC] mb-4">Mobility &amp; Rehab</p>
<p className="font-['JetBrains_Mono',monospace] text-xs text-[#6B6B78]">CREF 091205-G/SP</p>
</div>

<div className="bg-[#121214] border border-[#222228] p-6 rounded-[8px] group hover:border-[#33333A] transition-colors">
<img alt="Camila D." className="w-16 h-16 rounded-[4px] object-cover mb-6 grayscale border border-[#33333A] group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<h4 className="font-['Space_Grotesk',sans-serif] font-medium text-lg uppercase mb-1">Camila D.</h4>
<p className="text-sm text-[#D4D4DC] mb-4">Personal Trainer</p>
<p className="font-['JetBrains_Mono',monospace] text-xs text-[#6B6B78]">CREF 063417-G/SP</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-[#222228]">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div>
<p className="font-['JetBrains_Mono',monospace] text-xs text-[#FF2D2D] tracking-[0.12em] uppercase mb-4">Dúvidas</p>
<h2 className="font-['Space_Grotesk',sans-serif] font-semibold text-3xl md:text-4xl tracking-tight uppercase mb-8">
                    Perguntas<br/>Diretas.
                </h2>
<div className="space-y-4">
<details className="group bg-[#121214] border border-[#222228] rounded-[4px] p-5">
<summary className="flex justify-between items-center cursor-pointer list-none font-medium text-base text-[#F5F5F8] group-hover:text-[#FF2D2D] transition-colors">
                            Preciso ter experiência?
                            <i className="w-5 h-5 text-[#6B6B78] group-open:rotate-180 transition-transform" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<p className="pt-4 text-sm text-[#9191A0] leading-relaxed">Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual.</p>
</details>
<details className="group bg-[#121214] border border-[#222228] rounded-[4px] p-5">
<summary className="flex justify-between items-center cursor-pointer list-none font-medium text-base text-[#F5F5F8] group-hover:text-[#FF2D2D] transition-colors">
                            Posso treinar sozinho?
                            <i className="w-5 h-5 text-[#6B6B78] group-open:rotate-180 transition-transform" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<p className="pt-4 text-sm text-[#9191A0] leading-relaxed">Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima.</p>
</details>
<details className="group bg-[#121214] border border-[#222228] rounded-[4px] p-5">
<summary className="flex justify-between items-center cursor-pointer list-none font-medium text-base text-[#F5F5F8] group-hover:text-[#FF2D2D] transition-colors">
                            Como funciona o cancelamento?
                            <i className="w-5 h-5 text-[#6B6B78] group-open:rotate-180 transition-transform" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<p className="pt-4 text-sm text-[#9191A0] leading-relaxed">Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória.</p>
</details>
<details className="group bg-[#121214] border border-[#222228] rounded-[4px] p-5">
<summary className="flex justify-between items-center cursor-pointer list-none font-medium text-base text-[#F5F5F8] group-hover:text-[#FF2D2D] transition-colors">
                            Posso visitar antes de assinar?
                            <i className="w-5 h-5 text-[#6B6B78] group-open:rotate-180 transition-transform" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<p className="pt-4 text-sm text-[#9191A0] leading-relaxed">Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita.</p>
</details>
</div>
</div>

<div>
<p className="font-['JetBrains_Mono',monospace] text-xs text-[#FF2D2D] tracking-[0.12em] uppercase mb-4">Onde estamos</p>
<h2 className="font-['Space_Grotesk',sans-serif] font-semibold text-3xl md:text-4xl tracking-tight uppercase mb-8">
                    No Coração<br/>De Indaiatuba.
                </h2>
<div className="mb-8 w-full h-[180px] rounded-[8px] overflow-hidden border border-[#222228] relative">
<img alt="Estrutura externa e interior da academia" className="w-full h-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] to-transparent opacity-80"></div>
</div>
<div className="bg-[#1A1A1E] border border-[#33333A] rounded-[8px] p-6 mb-8">
<p className="text-base text-[#F5F5F8] mb-1">Rua das Esmeraldas, 742</p>
<p className="text-sm text-[#9191A0] mb-4">Jardim Morada do Sol — Indaiatuba, SP<br/>CEP 13.334-210</p>
<p className="font-['JetBrains_Mono',monospace] text-xs text-[#6B6B78] uppercase">Ref: 200m do Carrefour · Próx. saída SP-075</p>
</div>
<div className="grid grid-cols-2 gap-6 mb-8 font-['JetBrains_Mono',monospace] text-xs uppercase">
<div>
<div className="text-[#6B6B78] mb-2">Horários</div>
<ul className="space-y-2 text-[#D4D4DC]">
<li className="flex justify-between"><span>Seg-Sex</span> <span>05h-23h</span></li>
<li className="flex justify-between"><span>Sáb</span> <span>07h-20h</span></li>
<li className="flex justify-between"><span>Dom/Fer</span> <span>08h-14h</span></li>
</ul>
</div>
<div>
<div className="text-[#6B6B78] mb-2">Contato</div>
<ul className="space-y-2 text-[#D4D4DC]">
<li>(19) 98234-5678</li>
<li className="lowercase text-[#9191A0]">contato@forgee.academy</li>
<li className="lowercase text-[#9191A0]">@forgee.academy</li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-[#2ECC71]/10 hover:bg-[#2ECC71]/20 border border-[#2ECC71]/30 text-[#2ECC71] flex items-center justify-center gap-2 text-sm font-medium px-6 py-3 rounded-[4px] tracking-wide uppercase transition-colors">
<i className="w-4 h-4" data-lucide="message-circle" strokeWidth="2"></i> WhatsApp
                    </button>
<button className="bg-transparent border border-[#33333A] hover:border-[#9191A0] text-[#F5F5F8] flex items-center justify-center text-sm font-medium px-6 py-3 rounded-[4px] tracking-wide uppercase transition-colors">
                        Como Chegar
                    </button>
</div>
</div>
</div>
</section>

<section className="py-32 text-center relative overflow-hidden" id="agendar">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FF2D2D]/5 pointer-events-none"></div>
<div className="max-w-[800px] mx-auto px-6 relative z-10">
<h2 className="font-['Space_Grotesk',sans-serif] font-semibold text-5xl md:text-6xl tracking-tight uppercase leading-[1.1] mb-12">
                A Decisão<br/>Já Foi Tomada.<br/><span className="text-[#FF2D2D]">Agora É A Ação.</span>
</h2>
<a className="inline-flex items-center justify-center bg-[#FF2D2D] hover:bg-[#FF5C5C] text-white text-sm font-medium px-10 py-5 rounded-[4px] tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(255,45,45,0.2)] hover:shadow-[0_0_40px_rgba(255,45,45,0.4)] hover:-translate-y-1" href="#">
                Agendar Visita Gratuita
            </a>
</div>
</section>

<div className="bg-[#FF2D2D] py-3 overflow-hidden border-y border-[#CC0000]">
<div className="flex gap-8 whitespace-nowrap font-['Space_Grotesk',sans-serif] font-bold text-sm tracking-[0.2em] uppercase text-[#0A0A0B]">
<span>Agende uma visita</span> <span className="opacity-50">·</span>
<span>Gratuita</span> <span className="opacity-50">·</span>
<span>Sem compromisso</span> <span className="opacity-50">·</span>
<span>Traga tênis</span> <span className="opacity-50">·</span>
<span>Agende uma visita</span> <span className="opacity-50">·</span>
<span>Gratuita</span> <span className="opacity-50">·</span>
<span>Sem compromisso</span> <span className="opacity-50">·</span>
<span>Traga tênis</span> <span className="opacity-50">·</span>
<span>Agende uma visita</span>
</div>
</div>

<footer className="bg-[#0A0A0B] pt-16 pb-8 border-t border-[#222228]">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
<div>
<div className="flex items-center gap-3 mb-2">
<div className="w-6 h-6 bg-[#33333A] rounded-[2px] flex items-center justify-center">
<i className="w-4 h-4 text-[#9191A0]" data-lucide="flame" strokeWidth="1.5"></i>
</div>
<span className="font-['Space_Grotesk',sans-serif] font-semibold tracking-widest text-lg uppercase text-[#D4D4DC]">Forgee</span>
</div>
<p className="font-['JetBrains_Mono',monospace] text-xs text-[#6B6B78] uppercase tracking-widest">Beyond Limits Known™</p>
</div>
<div className="flex flex-wrap gap-x-12 gap-y-6 text-sm">
<div className="flex flex-col gap-3 text-[#9191A0]">
<a className="hover:text-[#F5F5F8] transition-colors" href="#espaco">Espaço</a>
<a className="hover:text-[#F5F5F8] transition-colors" href="#programas">Programas</a>
<a className="hover:text-[#F5F5F8] transition-colors" href="#equipe">Equipe</a>
<a className="hover:text-[#F5F5F8] transition-colors" href="#planos">Planos</a>
</div>
<div className="flex flex-col gap-3 text-[#6B6B78]">
<a className="hover:text-[#D4D4DC] transition-colors" href="#">Política de Privacidade</a>
<a className="hover:text-[#D4D4DC] transition-colors" href="#">Termos de Uso</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#1A1A1E] font-['JetBrains_Mono',monospace] text-[10px] text-[#4A4A54] uppercase tracking-wider gap-4 text-center md:text-left">
<span>FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP</span>
<span>DESIGN SYSTEM © 2026</span>
</div>
</div>
</footer>


    </>
  );
}
