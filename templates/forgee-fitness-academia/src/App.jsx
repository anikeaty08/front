import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-[#111111]/80 backdrop-blur-md border-b border-[#2A2A2A]">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-2xl font-bold tracking-tight text-[#F5F5F5]" href="#">FORGEE</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-base text-[#BBBBBB] hover:text-[#F5F5F5] font-medium transition-colors" href="#espaco">Espaço</a>
<a className="text-base text-[#BBBBBB] hover:text-[#F5F5F5] font-medium transition-colors" href="#programas">Programas</a>
<a className="text-base text-[#BBBBBB] hover:text-[#F5F5F5] font-medium transition-colors" href="#equipe">Equipe</a>
<a className="text-base text-[#BBBBBB] hover:text-[#F5F5F5] font-medium transition-colors" href="#planos">Planos</a>
</nav>
<div className="hidden lg:flex items-center gap-4">
<a className="text-base text-[#F5F5F5] font-medium hover:text-[#E00000] transition-colors" href="#login">SOU MEMBRO</a>
<a className="bg-[#E00000] hover:bg-[#FF1A1A] text-white px-6 py-2.5 rounded-full text-base font-medium transition-all shadow-[0_0_24px_rgba(224,0,0,0.15)] flex items-center gap-2 group" href="#agendar">
                    AGENDAR VISITA
                    <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<button className="lg:hidden text-[#F5F5F5]">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>

<section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">

<img alt="Gym Background" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-[#111111]/50 via-[#111111]/80 to-[#111111]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[1000px] lg:h-[1000px] bg-[#E00000]/10 rounded-full blur-[100px] lg:blur-[150px] pointer-events-none"></div>
<div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
<span className="text-sm lg:text-base text-[#888888] tracking-widest uppercase font-medium mb-8">Beyond Limits Known™ · Indaiatuba, SP · Est. 2018</span>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight uppercase leading-[0.9] text-[#F5F5F5] mb-8">
                SEM MÁGICA<br/>
                SEM ATALHOS<br/>
<span className="text-[#E00000]">SEM DESCULPAS</span>
</h1>
<p className="text-xl lg:text-2xl text-[#E00000] font-medium mb-4">Treinos progressivos e acompanhamento real!</p>
<p className="text-lg lg:text-xl text-[#BBBBBB] max-w-2xl font-normal leading-relaxed mb-12">
                Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-[#E00000] hover:bg-[#FF1A1A] text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-[0_0_24px_rgba(224,0,0,0.2)] flex items-center justify-center gap-2 group" href="#planos">
                    COMEÇAR AGORA
                    <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto border border-[#3A3A3A] hover:border-[#E00000] hover:text-[#E00000] bg-[#161616]/50 backdrop-blur-sm text-[#F5F5F5] px-8 py-4 rounded-full text-lg font-medium transition-all flex items-center justify-center" href="#espaco">
                    CONHECER O ESPAÇO
                </a>
</div>
</div>

<div className="relative z-10 mt-24 w-full max-w-6xl mx-auto border-t border-b border-[#2A2A2A] bg-[#111111]/80 backdrop-blur-md">
<div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-[#2A2A2A]">
<div className="py-6 px-4 flex flex-col items-center justify-center text-center">
<span className="text-sm text-[#888888] font-medium uppercase tracking-widest mb-1">Horário</span>
<span className="text-lg text-[#F5F5F5] font-semibold tracking-tight">05H–23H</span>
</div>
<div className="py-6 px-4 flex flex-col items-center justify-center text-center">
<span className="text-sm text-[#888888] font-medium uppercase tracking-widest mb-1">Dias</span>
<span className="text-lg text-[#F5F5F5] font-semibold tracking-tight">7 DIAS</span>
</div>
<div className="py-6 px-4 flex flex-col items-center justify-center text-center">
<span className="text-sm text-[#888888] font-medium uppercase tracking-widest mb-1">Área</span>
<span className="text-lg text-[#F5F5F5] font-semibold tracking-tight">1.800M²</span>
</div>
<div className="py-6 px-4 flex flex-col items-center justify-center text-center">
<span className="text-sm text-[#888888] font-medium uppercase tracking-widest mb-1">Alunos</span>
<span className="text-lg text-[#E00000] font-semibold tracking-tight">+1.200 ALUNOS</span>
</div>
<div className="py-6 px-4 flex flex-col items-center justify-center text-center col-span-2 md:col-span-1 border-t md:border-t-0 border-[#2A2A2A]">
<span className="text-sm text-[#888888] font-medium uppercase tracking-widest mb-1">Fundação</span>
<span className="text-lg text-[#F5F5F5] font-semibold tracking-tight">DESDE 2018</span>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 bg-[#0A0A0A] relative overflow-hidden" id="espaco">
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex items-center gap-4 mb-8">
<span className="text-[#E00000] font-bold tracking-widest text-xl">///</span>
<span className="text-[#E00000] font-medium tracking-widest uppercase text-base">Quem somos</span>
</div>
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative">
<div className="z-10">
<h2 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-[0.95] mb-8">
                        FORJADOS<br/>PELA<br/>DISCIPLINA.
                    </h2>
<blockquote className="border-l-2 border-[#E00000] pl-6 py-2 mb-8 text-2xl lg:text-3xl font-medium text-[#F5F5F5] italic tracking-tight">
                        "In silence, the transformation begins."
                    </blockquote>
<div className="flex flex-col gap-6">
<p className="text-lg lg:text-xl text-[#BBBBBB] font-normal leading-relaxed">
                            A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.
                        </p>
<p className="text-lg lg:text-xl text-[#BBBBBB] font-normal leading-relaxed">
                            Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
                        </p>
</div>
</div>

<div className="relative h-[400px] lg:h-auto rounded-2xl overflow-hidden border border-[#2A2A2A]">
<img alt="Equipment" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8 mt-24">
<div className="bg-[#111111] p-8 rounded-xl border border-[#2A2A2A] relative overflow-hidden group">
<img alt="Intensidade bg" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 grayscale transition-opacity duration-500" src="https://images.unsplash.com/photo-1534438097544-46f4943f5509?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10">
<div className="w-12 h-12 bg-[#1A0000] rounded-lg flex items-center justify-center mb-6 border border-[#3A3A3A]">
<iconify-icon className="text-[#E00000] text-2xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight uppercase mb-4">Intensidade</h3>
<p className="text-lg text-[#888888] font-normal leading-relaxed">
                            O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.
                        </p>
</div>
</div>
<div className="bg-[#111111] p-8 rounded-xl border border-[#2A2A2A] relative overflow-hidden group">
<img alt="Precisao bg" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 grayscale transition-opacity duration-500" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10">
<div className="w-12 h-12 bg-[#1A0000] rounded-lg flex items-center justify-center mb-6 border border-[#3A3A3A]">
<iconify-icon className="text-[#E00000] text-2xl" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight uppercase mb-4">Precisão</h3>
<p className="text-lg text-[#888888] font-normal leading-relaxed">
                            Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.
                        </p>
</div>
</div>
<div className="bg-[#111111] p-8 rounded-xl border border-[#2A2A2A] relative overflow-hidden group">
<img alt="Controle bg" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 grayscale transition-opacity duration-500" src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10">
<div className="w-12 h-12 bg-[#1A0000] rounded-lg flex items-center justify-center mb-6 border border-[#3A3A3A]">
<iconify-icon className="text-[#E00000] text-2xl" icon="solar:tuning-square-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight uppercase mb-4">Controle</h3>
<p className="text-lg text-[#888888] font-normal leading-relaxed">
                            Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.
                        </p>
</div>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mt-24">
<div>
<div className="text-5xl lg:text-6xl font-bold tracking-tight text-[#E00000] mb-2">+1.200</div>
<div className="text-lg text-[#BBBBBB] font-medium uppercase tracking-widest">Alunos ativos</div>
</div>
<div>
<div className="text-5xl lg:text-6xl font-bold tracking-tight text-[#E00000] mb-2">94%</div>
<div className="text-lg text-[#BBBBBB] font-medium uppercase tracking-widest">Retenção 6 meses</div>
</div>
<div>
<div className="text-5xl lg:text-6xl font-bold tracking-tight text-[#E00000] mb-2">8 anos</div>
<div className="text-lg text-[#BBBBBB] font-medium uppercase tracking-widest">Em operação</div>
</div>
<div>
<div className="text-5xl lg:text-6xl font-bold tracking-tight text-[#E00000] mb-2">1.8K M²</div>
<div className="text-lg text-[#BBBBBB] font-medium uppercase tracking-widest">Dedicados</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 bg-[#111111] relative border-t border-[#2A2A2A]">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
<div className="w-full lg:w-1/2">
<div className="flex items-center gap-4 mb-8">
<span className="text-[#E00000] font-bold tracking-widest text-xl">///</span>
<span className="text-[#E00000] font-medium tracking-widest uppercase text-base">Estrutura</span>
</div>
<h2 className="text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[0.95] mb-6">
                    EQUIPAMENTO<br/>QUE NÃO TE<br/>LIMITA.
                </h2>
<p className="text-xl text-[#BBBBBB] mb-12 max-w-2xl font-normal leading-relaxed">
                    Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.
                </p>
<div className="space-y-12">

<div>
<div className="bg-[#1A1A1A] py-4 px-6 rounded-t-xl border border-[#2A2A2A] flex justify-between items-center">
<h3 className="text-xl font-semibold tracking-tight uppercase text-[#F5F5F5]">01 — Cardio &amp; Conditioning</h3>
<iconify-icon className="text-[#E00000] text-xl" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<div className="border-x border-b border-[#2A2A2A] rounded-b-xl bg-[#0A0A0A] flex flex-col">
<div className="flex justify-between items-center py-5 px-6 border-b border-[#2A2A2A] last:border-0 hover:bg-[#161616] transition-colors">
<span className="text-lg text-[#BBBBBB] font-normal">Assault Bike Concept2</span>
<span className="text-base text-[#F5F5F5] font-medium tracking-widest">8 UNIDADES</span>
</div>
<div className="flex justify-between items-center py-5 px-6 border-b border-[#2A2A2A] last:border-0 hover:bg-[#161616] transition-colors">
<span className="text-lg text-[#BBBBBB] font-normal">Remo Concept2 Model D</span>
<span className="text-base text-[#F5F5F5] font-medium tracking-widest">6 UNIDADES</span>
</div>
<div className="flex justify-between items-center py-5 px-6 border-b border-[#2A2A2A] last:border-0 hover:bg-[#161616] transition-colors">
<span className="text-lg text-[#BBBBBB] font-normal">SkiErg Concept2</span>
<span className="text-base text-[#F5F5F5] font-medium tracking-widest">4 UNIDADES</span>
</div>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-4">
<div className="bg-[#1A1A1A] py-6 px-6 rounded-xl border border-[#2A2A2A] flex justify-between items-center group cursor-pointer hover:border-[#555555] transition-colors">
<span className="text-lg font-semibold tracking-tight uppercase text-[#F5F5F5]">02 — Força Livre</span>
<iconify-icon className="text-[#555555] text-xl group-hover:text-[#F5F5F5] transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="bg-[#1A1A1A] py-6 px-6 rounded-xl border border-[#2A2A2A] flex justify-between items-center group cursor-pointer hover:border-[#555555] transition-colors">
<span className="text-lg font-semibold tracking-tight uppercase text-[#F5F5F5]">03 — Máquinas</span>
<iconify-icon className="text-[#555555] text-xl group-hover:text-[#F5F5F5] transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 h-[600px]">
<div className="rounded-2xl overflow-hidden relative">
<img alt="Gym Structure" className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="grid grid-rows-2 gap-4">
<div className="rounded-2xl overflow-hidden relative">
<img alt="Gym Weights" className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1517836357463-d25dfe09ce14?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-2xl overflow-hidden relative">
<img alt="Gym Cardio" className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1534438097544-46f4943f5509?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 bg-[#0A0A0A] border-t border-[#2A2A2A] relative" id="programas">
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex items-center gap-4 mb-8">
<span className="text-[#E00000] font-bold tracking-widest text-xl">///</span>
<span className="text-[#E00000] font-medium tracking-widest uppercase text-base">O que oferecemos</span>
</div>
<h2 className="text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[0.95] mb-16">
                UM PROTOCOLO<br/>PARA CADA<br/>OBJETIVO.
            </h2>
<div className="grid md:grid-cols-2 gap-6 lg:gap-8">

<div className="group relative bg-[#111111] p-8 lg:p-10 rounded-2xl border border-[#2A2A2A] flex flex-col h-full overflow-hidden">
<img alt="Strength Background" className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent"></div>
<div className="relative z-10 flex-grow flex flex-col">
<h3 className="text-2xl lg:text-3xl font-semibold tracking-tight uppercase mb-4 text-[#F5F5F5]">FORGEE STRENGTH</h3>
<p className="text-lg text-[#BBBBBB] mb-8 font-normal leading-relaxed">
                            Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.
                        </p>
<div className="mt-auto space-y-3">
<div className="flex gap-4 items-start">
<span className="text-sm font-medium uppercase tracking-widest text-[#888888] w-24 shrink-0 pt-1">Para quem é</span>
<span className="text-base text-[#F5F5F5]">Iniciantes a avançados em hipertrofia e força.</span>
</div>
<div className="flex gap-4 items-start">
<span className="text-sm font-medium uppercase tracking-widest text-[#888888] w-24 shrink-0 pt-1">Frequência</span>
<span className="text-base text-[#F5F5F5]">3–5× por semana.</span>
</div>
</div>
</div>
</div>

<div className="group relative bg-[#1A1A1A] p-8 lg:p-10 rounded-2xl border-2 border-[#E00000] flex flex-col h-full shadow-[0_0_40px_rgba(224,0,0,0.1)] overflow-hidden">
<img alt="Conditioning Background" className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:opacity-20 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1517963879433-6ad2b071d714?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/90 to-transparent"></div>
<div className="absolute top-6 right-6 lg:top-8 lg:right-8 bg-[#E00000] text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase flex items-center gap-2 z-20">
<span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                        DESTAQUE
                    </div>
<div className="relative z-10 flex-grow flex flex-col">
<h3 className="text-2xl lg:text-3xl font-semibold tracking-tight uppercase mb-4 text-[#F5F5F5]">FORGEE CONDITIONING</h3>
<p className="text-lg text-[#BBBBBB] mb-8 font-normal leading-relaxed">
                            Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.
                        </p>
<div className="mt-auto space-y-4">
<div className="flex gap-4 items-start">
<span className="text-sm font-medium uppercase tracking-widest text-[#E00000] w-24 shrink-0 pt-1">Para quem é</span>
<span className="text-base text-[#F5F5F5]">Condicionamento, perda de gordura.</span>
</div>
<div className="bg-[#111111]/80 backdrop-blur-sm p-4 rounded-xl border border-[#2A2A2A]">
<span className="block text-xs font-medium uppercase tracking-widest text-[#888888] mb-3">Turmas (horários)</span>
<div className="flex flex-wrap gap-2">
<span className="bg-[#222222] text-[#F5F5F5] px-3 py-1.5 rounded-md text-sm font-medium">06H</span>
<span className="bg-[#222222] text-[#F5F5F5] px-3 py-1.5 rounded-md text-sm font-medium">07H</span>
<span className="bg-[#222222] text-[#F5F5F5] px-3 py-1.5 rounded-md text-sm font-medium">12H</span>
<span className="bg-[#222222] text-[#F5F5F5] px-3 py-1.5 rounded-md text-sm font-medium">18H</span>
<span className="bg-[#222222] text-[#F5F5F5] px-3 py-1.5 rounded-md text-sm font-medium">19H30</span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative bg-[#111111] p-8 lg:p-10 rounded-2xl border border-[#2A2A2A] flex flex-col h-full overflow-hidden">
<img alt="Mobility Background" className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent"></div>
<div className="relative z-10">
<h3 className="text-2xl lg:text-3xl font-semibold tracking-tight uppercase mb-4 text-[#F5F5F5]">FORGEE MOBILITY</h3>
<p className="text-lg text-[#BBBBBB] font-normal leading-relaxed">
                            Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.
                        </p>
</div>
</div>

<div className="group relative bg-[#111111] p-8 lg:p-10 rounded-2xl border border-[#2A2A2A] flex flex-col h-full overflow-hidden">
<img alt="Personal Background" className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent"></div>
<div className="relative z-10">
<h3 className="text-2xl lg:text-3xl font-semibold tracking-tight uppercase mb-4 text-[#F5F5F5]">PERSONAL TRAINING</h3>
<p className="text-lg text-[#BBBBBB] font-normal leading-relaxed">
                            Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 bg-[#111111] border-t border-[#2A2A2A]" id="planos">
<div className="max-w-7xl mx-auto text-center mb-16">
<div className="flex items-center justify-center gap-4 mb-8">
<span className="text-[#E00000] font-bold tracking-widest text-xl">///</span>
<span className="text-[#E00000] font-medium tracking-widest uppercase text-base">Investimento</span>
</div>
<h2 className="text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[0.95] mb-6">
                SEM MATRÍCULA.<br/>SEM FIDELIDADE.<br/>SEM ENROLAÇÃO.
            </h2>
<p className="text-xl text-[#BBBBBB] font-normal max-w-2xl mx-auto">
                Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
            </p>
</div>
<div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 items-center">

<div className="bg-[#1A1A1A] p-8 lg:p-10 rounded-2xl border border-[#3A3A3A] flex flex-col h-full">
<h3 className="text-2xl font-semibold tracking-tight uppercase mb-2">Livre</h3>
<div className="flex items-baseline gap-2 mb-8 border-b border-[#2A2A2A] pb-8">
<span className="text-4xl font-bold tracking-tight text-[#F5F5F5]">R$149</span>
<span className="text-lg text-[#888888] font-medium">/ mês</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#E00000] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-[#BBBBBB]">Acesso ilimitado 05H–23H</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#E00000] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-[#BBBBBB]">Avaliação física de entrada</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#E00000] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-[#BBBBBB]">Planilha de treino inicial</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#E00000] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-[#BBBBBB]">App FORGEE</span>
</li>
</ul>
<button className="w-full py-4 rounded-full border border-[#555555] text-[#F5F5F5] hover:bg-[#F5F5F5] hover:text-[#111111] text-lg font-semibold transition-colors uppercase tracking-wide">
                    Quero esse plano
                </button>
</div>

<div className="bg-[#1E1E1E] p-8 lg:p-10 rounded-2xl border-2 border-[#E00000] flex flex-col h-[105%] relative shadow-[0_4px_40px_rgba(224,0,0,0.15)] z-10 overflow-hidden">

<img alt="Texture" className="absolute inset-0 w-full h-full object-cover opacity-[0.05] grayscale pointer-events-none" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E00000] text-white px-6 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase whitespace-nowrap z-20">
                    Mais Escolhido
                </div>
<div className="relative z-10 flex flex-col h-full">
<h3 className="text-2xl font-semibold tracking-tight uppercase mb-2 text-[#E00000]">Plus</h3>
<div className="flex items-baseline gap-2 mb-8 border-b border-[#3A3A3A] pb-8">
<span className="text-5xl font-bold tracking-tight text-[#F5F5F5]">R$229</span>
<span className="text-lg text-[#888888] font-medium">/ mês</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#E00000] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-[#F5F5F5] font-medium">Tudo do Livre +</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5F5F5] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-[#BBBBBB]">2 sessões de Personal/mês</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5F5F5] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-[#BBBBBB]">1 aula Conditioning/sem.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5F5F5] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-[#BBBBBB]">Revisão planilha mensal</span>
</li>
</ul>
<button className="w-full py-4 rounded-full bg-[#E00000] hover:bg-[#FF1A1A] text-white text-lg font-semibold transition-colors uppercase tracking-wide flex justify-center items-center gap-2 group">
                        Quero esse plano
                        <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="bg-[#1A1A1A] p-8 lg:p-10 rounded-2xl border border-[#3A3A3A] flex flex-col h-full">
<h3 className="text-2xl font-semibold tracking-tight uppercase mb-2">Elite</h3>
<div className="flex items-baseline gap-2 mb-8 border-b border-[#2A2A2A] pb-8">
<span className="text-4xl font-bold tracking-tight text-[#F5F5F5]">R$389</span>
<span className="text-lg text-[#888888] font-medium">/ mês</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#E00000] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-[#F5F5F5] font-medium">Tudo do Plus +</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#E00000] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-[#BBBBBB]">4 sessões Personal/mês</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#E00000] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-[#BBBBBB]">Acesso livre às classes</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#E00000] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-[#BBBBBB]">WhatsApp com coach</span>
</li>
</ul>
<button className="w-full py-4 rounded-full border border-[#555555] text-[#F5F5F5] hover:bg-[#F5F5F5] hover:text-[#111111] text-lg font-semibold transition-colors uppercase tracking-wide">
                    Quero esse plano
                </button>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 bg-[#0A0A0A] border-t border-[#2A2A2A]" id="equipe">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div>
<div className="flex items-center gap-4 mb-6">
<span className="text-[#E00000] font-bold tracking-widest text-xl">///</span>
<span className="text-[#E00000] font-medium tracking-widest uppercase text-base">Quem te acompanha</span>
</div>
<h2 className="text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[0.95]">
                        COACHES QUE<br/>TREINAM.
                    </h2>
</div>
<p className="text-lg text-[#BBBBBB] font-normal max-w-md">
                    Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.
                </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#111111] border border-[#2A2A2A] p-8 rounded-xl flex flex-col items-center text-center group hover:border-[#555555] transition-colors relative overflow-hidden">
<div className="w-24 h-24 rounded-full bg-[#1A1A1A] border-2 border-[#3A3A3A] overflow-hidden mb-6 group-hover:border-[#E00000] transition-colors relative z-10">
<img alt="Rodrigo Farias" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1567013127542-490d732e519a?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-semibold tracking-tight uppercase text-[#F5F5F5] mb-1 relative z-10">Rodrigo Farias</h3>
<p className="text-base text-[#E00000] font-medium mb-4 relative z-10">Head Coach</p>
<p className="text-sm text-[#555555] font-medium tracking-wide relative z-10">CREF 045821-G/SP</p>
</div>

<div className="bg-[#111111] border border-[#2A2A2A] p-8 rounded-xl flex flex-col items-center text-center group hover:border-[#555555] transition-colors relative overflow-hidden">
<div className="w-24 h-24 rounded-full bg-[#1A1A1A] border-2 border-[#3A3A3A] overflow-hidden mb-6 group-hover:border-[#E00000] transition-colors relative z-10">
<img alt="Ana Luísa" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1609899517236-77a7d582ad66?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-semibold tracking-tight uppercase text-[#F5F5F5] mb-1 relative z-10">Ana Luísa</h3>
<p className="text-base text-[#E00000] font-medium mb-4 relative z-10">Conditioning</p>
<p className="text-sm text-[#555555] font-medium tracking-wide relative z-10">CREF 078342-G/SP</p>
</div>

<div className="bg-[#111111] border border-[#2A2A2A] p-8 rounded-xl flex flex-col items-center text-center group hover:border-[#555555] transition-colors relative overflow-hidden">
<div className="w-24 h-24 rounded-full bg-[#1A1A1A] border-2 border-[#3A3A3A] overflow-hidden mb-6 group-hover:border-[#E00000] transition-colors relative z-10">
<img alt="Bruno T." className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-semibold tracking-tight uppercase text-[#F5F5F5] mb-1 relative z-10">Bruno T.</h3>
<p className="text-base text-[#E00000] font-medium mb-4 relative z-10">Mobility &amp; Rehab</p>
<p className="text-sm text-[#555555] font-medium tracking-wide relative z-10">CREF 091205-G/SP</p>
</div>

<div className="bg-[#111111] border border-[#2A2A2A] p-8 rounded-xl flex flex-col items-center text-center group hover:border-[#555555] transition-colors relative overflow-hidden">
<div className="w-24 h-24 rounded-full bg-[#1A1A1A] border-2 border-[#3A3A3A] overflow-hidden mb-6 group-hover:border-[#E00000] transition-colors relative z-10">
<img alt="Camila D." className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1534438097544-46f4943f5509?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-semibold tracking-tight uppercase text-[#F5F5F5] mb-1 relative z-10">Camila D.</h3>
<p className="text-base text-[#E00000] font-medium mb-4 relative z-10">Personal Trainer</p>
<p className="text-sm text-[#555555] font-medium tracking-wide relative z-10">CREF 063417-G/SP</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 bg-[#111111] border-t border-[#2A2A2A]">
<div className="max-w-4xl mx-auto">
<div className="flex items-center gap-4 mb-8">
<span className="text-[#E00000] font-bold tracking-widest text-xl">///</span>
<span className="text-[#E00000] font-medium tracking-widest uppercase text-base">Dúvidas</span>
</div>
<h2 className="text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[0.95] mb-16">
                PERGUNTAS<br/>DIRETAS.
            </h2>
<div className="space-y-6">
<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-8 hover:border-[#555555] transition-colors">
<h3 className="text-2xl font-semibold tracking-tight text-[#F5F5F5] mb-4">Preciso ter experiência?</h3>
<p className="text-lg text-[#BBBBBB] font-normal leading-relaxed">
                        Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual.
                    </p>
</div>
<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-8 hover:border-[#555555] transition-colors">
<h3 className="text-2xl font-semibold tracking-tight text-[#F5F5F5] mb-4">Posso treinar sozinho?</h3>
<p className="text-lg text-[#BBBBBB] font-normal leading-relaxed">
                        Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima.
                    </p>
</div>
<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-8 hover:border-[#555555] transition-colors">
<h3 className="text-2xl font-semibold tracking-tight text-[#F5F5F5] mb-4">Como funciona o cancelamento?</h3>
<p className="text-lg text-[#BBBBBB] font-normal leading-relaxed">
                        Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 bg-[#0A0A0A] relative border-t border-[#2A2A2A]">
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
<div className="flex-1">
<div className="flex items-center gap-4 mb-8">
<span className="text-[#E00000] font-bold tracking-widest text-xl">///</span>
<span className="text-[#E00000] font-medium tracking-widest uppercase text-base">Onde estamos</span>
</div>
<h2 className="text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[0.95] mb-12">
                        NO CORAÇÃO<br/>DE INDAIATUBA.
                    </h2>
<div className="space-y-12">
<div>
<h3 className="text-sm text-[#888888] font-medium tracking-widest uppercase mb-4">Endereço</h3>
<p className="text-2xl font-medium tracking-tight text-[#F5F5F5] leading-snug mb-3">
                                Rua das Esmeraldas, 742<br/>
                                Jardim Morada do Sol — Indaiatuba, SP<br/>
                                CEP 13.334-210
                            </p>
</div>
<div>
<h3 className="text-sm text-[#888888] font-medium tracking-widest uppercase mb-4">Horários</h3>
<div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6 space-y-4">
<div className="flex justify-between items-center border-b border-[#2A2A2A] pb-4">
<span className="text-lg text-[#BBBBBB]">Segunda a Sexta</span>
<span className="text-lg font-medium text-[#F5F5F5]">05H00 – 23H00</span>
</div>
<div className="flex justify-between items-center border-b border-[#2A2A2A] pb-4">
<span className="text-lg text-[#BBBBBB]">Sábado</span>
<span className="text-lg font-medium text-[#F5F5F5]">07H00 – 20H00</span>
</div>
<div className="flex justify-between items-center">
<span className="text-lg text-[#BBBBBB]">Domingo e Feriados</span>
<span className="text-lg font-medium text-[#F5F5F5]">08H00 – 14H00</span>
</div>
</div>
</div>
<div>
<h3 className="text-sm text-[#888888] font-medium tracking-widest uppercase mb-4">Contato</h3>
<div className="flex flex-col gap-4">
<a className="text-lg text-[#F5F5F5] hover:text-[#E00000] transition-colors flex items-center gap-3" href="#">
<iconify-icon className="text-[#E00000] text-xl" icon="solar:chat-square-linear"></iconify-icon>
                                    (19) 98234-5678
                                </a>
<a className="text-lg text-[#F5F5F5] hover:text-[#E00000] transition-colors flex items-center gap-3" href="#">
<iconify-icon className="text-[#E00000] text-xl" icon="solar:letter-linear"></iconify-icon>
                                    contato@forgee.academy
                                </a>
<a className="text-lg text-[#F5F5F5] hover:text-[#E00000] transition-colors flex items-center gap-3" href="#">
<iconify-icon className="text-[#E00000] text-xl" icon="solar:link-linear"></iconify-icon>
                                    @forgee.academy
                                </a>
</div>
</div>
</div>
</div>
<div className="flex-1 flex flex-col justify-center">
<div className="w-full aspect-square md:aspect-video lg:aspect-square bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl flex flex-col items-center justify-center p-8 relative overflow-hidden group">

<img alt="Gym Location" className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-opacity duration-500" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 flex flex-col items-center text-center">
<iconify-icon className="text-5xl text-[#E00000] mb-4 drop-shadow-[0_0_10px_rgba(224,0,0,0.5)]" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xl font-medium tracking-tight text-[#F5F5F5]">Abrir no Mapa</span>
</div>
<div className="absolute bottom-8 w-full px-8 flex flex-col gap-4 z-10">
<a className="w-full bg-[#111111]/80 backdrop-blur-sm hover:bg-[#2A2A2A] border border-[#3A3A3A] text-[#F5F5F5] py-4 rounded-xl text-center text-lg font-medium transition-colors flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-xl" icon="solar:routing-linear"></iconify-icon>
                                COMO CHEGAR
                            </a>
<a className="w-full bg-[#E00000] hover:bg-[#FF1A1A] text-white py-4 rounded-xl text-center text-lg font-medium transition-colors shadow-[0_0_24px_rgba(224,0,0,0.15)] flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-xl" icon="solar:chat-round-line-linear"></iconify-icon>
                                FALAR NO WHATSAPP
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 lg:py-48 px-6 bg-[#0A0A0A] relative overflow-hidden flex flex-col items-center justify-center text-center border-t border-[#2A2A2A]">

<img alt="Intense Lift" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-[#E00000] mix-blend-multiply opacity-80 pointer-events-none"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0A0A0A_90%)] pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto">
<h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-[0.9] text-[#F5F5F5] mb-12">
                A DECISÃO<br/>JÁ FOI TOMADA.<br/>AGORA É A AÇÃO.
            </h2>
<p className="text-sm lg:text-base text-[#F5F5F5] font-semibold tracking-[0.3em] uppercase mb-16 opacity-80">
                A G E N D E · U M A · V I S I T A · G R A T U I T A · S E M · C O M P R O M I S S O
            </p>
<a className="inline-flex items-center justify-center gap-3 bg-[#F5F5F5] hover:bg-white text-[#111111] px-10 py-5 rounded-full text-xl font-bold uppercase tracking-wide transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)] group" href="#agendar">
                AGENDAR VISITA
                <iconify-icon className="text-2xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<footer className="bg-[#050505] pt-24 pb-12 px-6 border-t border-[#1A1A1A]">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mb-24">
<div className="max-w-xs">
<a className="text-3xl font-bold tracking-tight text-[#F5F5F5] block mb-4" href="#">FORGEE</a>
<p className="text-sm text-[#555555] font-medium tracking-widest uppercase">BEYOND LIMITS KNOWN™</p>
</div>
<div className="flex gap-16 lg:gap-32">
<div>
<h4 className="text-base font-semibold text-[#F5F5F5] tracking-widest uppercase mb-6">Academia</h4>
<ul className="space-y-4">
<li><a className="text-base text-[#888888] hover:text-[#E00000] transition-colors" href="#espaco">Espaço</a></li>
<li><a className="text-base text-[#888888] hover:text-[#E00000] transition-colors" href="#programas">Programas</a></li>
<li><a className="text-base text-[#888888] hover:text-[#E00000] transition-colors" href="#equipe">Equipe</a></li>
<li><a className="text-base text-[#888888] hover:text-[#E00000] transition-colors" href="#planos">Planos</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-semibold text-[#F5F5F5] tracking-widest uppercase mb-6">Legal &amp; Redes</h4>
<ul className="space-y-4">
<li><a className="text-base text-[#888888] hover:text-[#E00000] transition-colors" href="#">Política de Privacidade</a></li>
<li><a className="text-base text-[#888888] hover:text-[#E00000] transition-colors" href="#">Termos de Uso</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-[#1A1A1A] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#555555] font-medium tracking-wide">
<div className="flex flex-wrap gap-4 md:gap-8 text-center md:text-left">
<span>FORGEE ACADEMIA LTDA.</span>
<span>CNPJ 00.000.000/0001-00</span>
<span>CREF SP</span>
</div>
<span>DESIGN SYSTEM © 2026</span>
</div>
</footer>

    </>
  );
}
