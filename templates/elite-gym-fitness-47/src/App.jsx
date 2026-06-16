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
      

<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#2A2A2A]">
<div className="max-w-[1280px] mx-auto px-6 md:px-20 h-20 flex items-center justify-between">
<a className="font-bold tracking-tighter text-xl text-white" href="#">FORGE</a>
<nav className="hidden md:flex gap-8 text-sm font-medium text-[#AAAAAA]">
<a className="hover:text-[#E84D0E] transition-colors" href="#quem-somos">Método</a>
<a className="hover:text-[#E84D0E] transition-colors" href="#equipamentos">Estrutura</a>
<a className="hover:text-[#E84D0E] transition-colors" href="#planos">Planos</a>
<a className="hover:text-[#E84D0E] transition-colors" href="#coaches">Coaches</a>
</nav>
<a className="hidden md:inline-flex items-center justify-center rounded-full bg-[#E84D0E] hover:bg-[#C94209] text-white font-medium px-6 py-2.5 text-sm transition-colors duration-300" href="#planos">
                Agendar Visita
            </a>
<button className="md:hidden text-white text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</header>

<section className="relative bg-[#0D0D0D] min-h-screen flex items-center pt-20 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#141414] z-0"></div>

<div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fillOpacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] z-0"></div>
<div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-20 w-full flex flex-col justify-center items-start py-20">
<span className="text-xs font-medium tracking-[0.12em] uppercase text-[#E84D0E] mb-6 block">Bem-vindo à FORGE Performance Club</span>
<h1 className="font-extrabold tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[80px] text-white leading-[1.05] max-w-4xl mb-8">
                Você não vem aqui para treinar. Você vem aqui para se <span className="text-[#FF6A2F]">tornar.</span>
</h1>
<p className="text-base sm:text-lg text-[#AAAAAA] max-w-2xl mb-12 leading-relaxed">
                Um ambiente de elite, metodologia científica e coaches que tratam sua evolução como missão. Para quem leva performance a sério.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center rounded-full bg-[#E84D0E] hover:bg-[#C94209] text-white font-medium px-8 py-4 text-base transition-colors duration-300" href="#planos">
                    Agendar Visita Gratuita
                    <iconify-icon className="ml-2 text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center rounded-md border border-[#333333] hover:bg-[#222222] text-white font-medium px-8 py-4 text-base transition-colors duration-300" href="#contato">
                    Falar com um Especialista
                </a>
</div>
<div className="mt-16 flex items-center gap-4 text-sm text-[#AAAAAA]">
<div className="flex text-[#E84D0E] text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span>Mais de 4.800 avaliações · Google e Instagram</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#141414]" id="quem-somos">
<div className="max-w-[1280px] mx-auto px-6 md:px-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
<div>
<span className="text-xs font-medium tracking-[0.12em] uppercase text-[#E84D0E] mb-4 block">Nossa História</span>
<h2 className="font-bold tracking-tight text-3xl md:text-5xl text-white leading-tight mb-6">
                        Criada por atletas. Construída para <span className="text-[#FF6A2F]">resultados</span> reais.
                    </h2>
</div>
<div className="text-[#AAAAAA] space-y-6 text-base leading-relaxed flex flex-col justify-center">
<p>A FORGE não é uma academia comum. Nascemos em 2014 da frustração de atletas e coaches que não encontravam um ambiente que unisse estrutura de ponta, metodologia séria e uma cultura de progresso genuíno.</p>
<p>Aqui, cada detalhe foi projetado com intenção: do layout do espaço ao design dos protocolos de treino. Nosso ambiente foi construído para eliminar distrações e maximizar performance — física e mental.</p>
<p className="text-white font-medium">Não importa se você está no primeiro treino ou em preparação para competição. Na FORGE, você é tratado como atleta.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
<div className="bg-[#222222] border border-[#2A2A2A] rounded-2xl p-8 flex flex-col items-start">
<div className="w-12 h-12 rounded-xl bg-[#FF8A5B] text-white flex items-center justify-center text-2xl mb-6">
<iconify-icon icon="solar:test-tube-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-semibold tracking-tight text-xl text-white mb-3">Ciência aplicada</h3>
<p className="text-sm text-[#AAAAAA] leading-relaxed">Nossos protocolos são baseados em evidências e periodizados individualmente. Sem achismos, sem modismos.</p>
</div>
<div className="bg-[#222222] border border-[#2A2A2A] rounded-2xl p-8 flex flex-col items-start">
<div className="w-12 h-12 rounded-xl bg-[#FF8A5B] text-white flex items-center justify-center text-2xl mb-6">
<iconify-icon icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-semibold tracking-tight text-xl text-white mb-3">Espaço de elite</h3>
<p className="text-sm text-[#AAAAAA] leading-relaxed">Equipamentos importados, manutenção diária e um ambiente que respeita quem está ali para evoluir.</p>
</div>
<div className="bg-[#222222] border border-[#2A2A2A] rounded-2xl p-8 flex flex-col items-start">
<div className="w-12 h-12 rounded-xl bg-[#FF8A5B] text-white flex items-center justify-center text-2xl mb-6">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-semibold tracking-tight text-xl text-white mb-3">Cultura de progresso</h3>
<p className="text-sm text-[#AAAAAA] leading-relaxed">Uma comunidade de pessoas que se puxam para cima. Sem julgamento, sem comparação — só evolução.</p>
</div>
</div>
<a className="inline-flex items-center text-[#E84D0E] font-medium hover:text-[#C94209] transition-colors" href="#equipamentos">
                Conhecer a Academia <iconify-icon className="ml-2 text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 bg-[#1A1A1A] border-y border-[#2A2A2A]">
<div className="max-w-[1280px] mx-auto px-6 md:px-20 text-center md:text-left">
<span className="text-xs font-medium tracking-[0.12em] uppercase text-[#E84D0E] mb-4 block">FORGE em Números</span>
<h2 className="font-bold tracking-tight text-3xl md:text-4xl text-white mb-16">Uma década construindo resultados.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-[#333333]">
<div className="flex flex-col items-center md:items-start pt-8 md:pt-0">
<div className="font-extrabold tracking-tight text-5xl md:text-6xl text-white mb-2">4.200<span className="text-[#FF6A2F]">+</span></div>
<div className="text-base text-white font-medium mb-1">Alunos ativos</div>
<div className="text-sm text-[#666666]">E crescendo todo mês</div>
</div>
<div className="flex flex-col items-center md:items-start pt-8 md:pt-0 md:pl-12">
<div className="font-extrabold tracking-tight text-5xl md:text-6xl text-white mb-2">94<span className="text-[#FF6A2F]">%</span></div>
<div className="text-base text-white font-medium mb-1">Taxa de frequência</div>
<div className="text-sm text-[#666666]">Acima da média nacional de 41%</div>
</div>
<div className="flex flex-col items-center md:items-start pt-8 md:pt-0 md:pl-12">
<div className="font-extrabold tracking-tight text-5xl md:text-6xl text-white mb-2">10</div>
<div className="text-base text-white font-medium mb-1">Anos de operação</div>
<div className="text-sm text-[#666666]">Fundada em 2014, São Paulo</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#141414] overflow-hidden">
<div className="max-w-[1280px] mx-auto px-6 md:px-20">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<span className="text-xs font-medium tracking-[0.12em] uppercase text-[#E84D0E] mb-4 block">O que nossos alunos dizem</span>
<h2 className="font-bold tracking-tight text-3xl md:text-4xl text-white leading-tight">Não tome nossa palavra. <span className="text-[#FF6A2F]">Ouça quem treina aqui.</span></h2>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-[#333333] flex items-center justify-center text-white hover:bg-[#222222] transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-[#333333] flex items-center justify-center text-white hover:bg-[#222222] transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

<div className="bg-[#222222] border border-[#2A2A2A] rounded-2xl p-8 flex flex-col h-full">
<div className="flex text-[#E84D0E] text-sm mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#AAAAAA] leading-relaxed mb-8 flex-grow">"Treinei em várias academias de alto padrão em São Paulo e no exterior. A FORGE é a única que entrega o que promete: ambiente sério, coaches que realmente acompanham sua evolução e resultado mensurável. Em 18 meses perdi 14kg e dobrei minha carga no supino."</p>
<div>
<div className="text-base text-white font-medium">Rafael Mendonça</div>
<div className="text-xs text-[#666666]">Empresário · Aluno há 3 anos</div>
</div>
</div>

<div className="bg-[#222222] border border-[#2A2A2A] rounded-2xl p-8 flex flex-col h-full">
<div className="flex text-[#E84D0E] text-sm mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#AAAAAA] leading-relaxed mb-8 flex-grow">"Vim com pré-diabetes e histórico de dor lombar crônica. Meu coach montou um protocolo específico para o meu caso. Em 8 meses os exames normalizaram e a dor desapareceu. Isso não é coincidência, é método."</p>
<div>
<div className="text-base text-white font-medium">Camila Esteves</div>
<div className="text-xs text-[#666666]">Médica · Aluna há 2 anos</div>
</div>
</div>

<div className="bg-[#222222] border border-[#2A2A2A] rounded-2xl p-8 flex flex-col h-full">
<div className="flex text-[#E84D0E] text-sm mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#AAAAAA] leading-relaxed mb-8 flex-grow">"Depois que parei de competir achei que nunca mais treinaria no nível que gosto. A FORGE me deu de volta isso. A intensidade, a seriedade, a estrutura. É o lugar certo para quem foi atleta e não quer baixar o padrão."</p>
<div>
<div className="text-base text-white font-medium">André Castilho</div>
<div className="text-xs text-[#666666]">Ex-atleta · Aluno há 4 anos</div>
</div>
</div>

<div className="bg-[#222222] border border-[#2A2A2A] rounded-2xl p-8 flex flex-col h-full">
<div className="flex text-[#E84D0E] text-sm mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#AAAAAA] leading-relaxed mb-8 flex-grow">"Fui indicada por uma amiga e fiquei com receio: 'vai ser intimidador, não é para mim'. Fui completamente surpreendida. O ambiente é exigente mas acolhedor. Meu coach entende meus limites e me empurra na medida certa."</p>
<div>
<div className="text-base text-white font-medium">Juliana Moraes</div>
<div className="text-xs text-[#666666]">Arquiteta · Aluna há 1 ano</div>
</div>
</div>
</div>
<div className="text-center md:text-left">
<a className="inline-flex items-center justify-center rounded-full bg-[#E84D0E] hover:bg-[#C94209] text-white font-medium px-8 py-4 text-base transition-colors duration-300" href="#planos">
                    Agendar Minha Visita Gratuita
                    <iconify-icon className="ml-2 text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#1A1A1A]" id="equipamentos">
<div className="max-w-[1280px] mx-auto px-6 md:px-20">
<div className="max-w-3xl mb-16">
<span className="text-xs font-medium tracking-[0.12em] uppercase text-[#E84D0E] mb-4 block">Estrutura</span>
<h2 className="font-bold tracking-tight text-3xl md:text-5xl text-white leading-tight mb-6">Equipamentos que não limitam seu <span className="text-[#FF6A2F]">potencial.</span></h2>
<p className="text-base text-[#AAAAAA] leading-relaxed">Importamos o padrão de academias de elite europeias e norte-americanas. Cada equipamento é selecionado por performance, ergonomia e durabilidade.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">

<div className="bg-[#222222] border border-[#2A2A2A] rounded-2xl p-8">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-[#FF8A5B] text-white flex items-center justify-center text-xl">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-semibold tracking-tight text-xl text-white">Cardio</h3>
</div>
<p className="text-sm text-[#E5E5E5] leading-relaxed mb-4">Esteiras Technogym Skillmill · Bikes Assault · Rowers Concept2 · Ski Erg · Treadmill inclinável 40%</p>
<div className="text-xs text-[#666666]">18 equipamentos · Zona climatizada</div>
</div>

<div className="bg-[#222222] border border-[#2A2A2A] rounded-2xl p-8">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-[#FF8A5B] text-white flex items-center justify-center text-xl">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-semibold tracking-tight text-xl text-white">Condicionamento</h3>
</div>
<p className="text-sm text-[#E5E5E5] leading-relaxed mb-4">Área de battle ropes · Kettlebells 4kg–48kg · Medicine balls · Slam balls · Cordas de agilidade</p>
<div className="text-xs text-[#666666]">Zona de alta intensidade</div>
</div>

<div className="bg-[#222222] border border-[#2A2A2A] rounded-2xl p-8">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-[#FF8A5B] text-white flex items-center justify-center text-xl">
<iconify-icon icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-semibold tracking-tight text-xl text-white">Força</h3>
</div>
<p className="text-sm text-[#E5E5E5] leading-relaxed mb-4">Barras Eleiko olímpicas · Plataformas de levantamento · Halteres até 60kg · Rack de powerlifting · Gaiola de agachamento</p>
<div className="text-xs text-[#666666]">Plataformas com borracha de impacto</div>
</div>

<div className="bg-[#222222] border border-[#2A2A2A] rounded-2xl p-8">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-[#FF8A5B] text-white flex items-center justify-center text-xl">
<iconify-icon icon="solar:dumbbell-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-semibold tracking-tight text-xl text-white">Peso Livre</h3>
</div>
<p className="text-sm text-[#E5E5E5] leading-relaxed mb-4">Bancadas ajustáveis Scott · Preacher curl · Polia funcional dupla · Halteres cromados Hammer Strength</p>
<div className="text-xs text-[#666666]">4 estações independentes</div>
</div>

<div className="bg-[#222222] border border-[#2A2A2A] rounded-2xl p-8">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-[#FF8A5B] text-white flex items-center justify-center text-xl">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-semibold tracking-tight text-xl text-white">Máquinas</h3>
</div>
<p className="text-sm text-[#E5E5E5] leading-relaxed mb-4">Linha completa Life Fitness · Leg press 45° · Cadeira extensora · Voador peitoral · Polia alta e baixa</p>
<div className="text-xs text-[#666666]">Linha importada, revisão mensal</div>
</div>

<div className="bg-[#222222] border border-[#2A2A2A] rounded-2xl p-8">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-[#FF8A5B] text-white flex items-center justify-center text-xl">
<iconify-icon icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-semibold tracking-tight text-xl text-white">Funcional</h3>
</div>
<p className="text-sm text-[#E5E5E5] leading-relaxed mb-4">TRX suspension · Bosu · Cones e escadas · Parallettes · Barra de calistenia · Anéis de ginástica</p>
<div className="text-xs text-[#666666]">Área dedicada de 120m²</div>
</div>
</div>

<div className="border-t border-[#2A2A2A] pt-16">
<span className="text-xs font-medium tracking-[0.12em] uppercase text-[#E84D0E] mb-10 block text-center md:text-left">Infraestrutura</span>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div>
<iconify-icon className="text-[#FF6A2F] text-3xl mb-4 block" icon="solar:bath-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-base font-semibold text-white mb-2">Vestiários Premium</h4>
<p className="text-sm text-[#AAAAAA] leading-relaxed">Armários individuais com digital lock, duchas aquecidas, amenities importados, secador de cabelo e espelhos de corpo inteiro.</p>
</div>
<div>
<iconify-icon className="text-[#FF6A2F] text-3xl mb-4 block" icon="solar:apple-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-base font-semibold text-white mb-2">Lounge de Nutrição</h4>
<p className="text-sm text-[#AAAAAA] leading-relaxed">Área de convivência com geladeiras de whey e suplementação, bancada para preparo, água alcalina e café especial.</p>
</div>
<div>
<iconify-icon className="text-[#FF6A2F] text-3xl mb-4 block" icon="solar:bed-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-base font-semibold text-white mb-2">Zona de Recuperação</h4>
<p className="text-sm text-[#AAAAAA] leading-relaxed">Espaço dedicado com rolo de espuma, foam roller vibratório, faixas de mobilidade e cama de massagem disponível sob agendamento.</p>
</div>
<div>
<iconify-icon className="text-[#FF6A2F] text-3xl mb-4 block" icon="solar:parking-square-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-base font-semibold text-white mb-2">Estacionamento</h4>
<p className="text-sm text-[#AAAAAA] leading-relaxed">Vagas garantidas no estacionamento do edifício para alunos com plano Plus e Elite.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#141414]">
<div className="max-w-[1280px] mx-auto px-6 md:px-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-6 space-y-12">
<div>
<span className="text-xs font-medium tracking-[0.12em] uppercase text-[#E84D0E] mb-4 block">Método FORGE</span>
<h2 className="font-bold tracking-tight text-3xl md:text-5xl text-white leading-tight mb-6">Treinamento sem protocolo é <span className="text-[#FF6A2F]">acidente.</span></h2>
<p className="text-base text-[#AAAAAA] leading-relaxed mb-4">Na FORGE, ninguém entra na academia e improvisa. Todo aluno passa por uma avaliação completa e recebe um protocolo de treinamento periodizado, com objetivos definidos, cargas progressivas e revisão quinzenal.</p>
<p className="text-base text-white font-medium">É assim que transformamos esforço em resultado.</p>
</div>
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-[#2A2A2A] md:before:hidden">

<div className="relative flex items-start gap-6">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1A1A1A] border border-[#333333] flex items-center justify-center text-xs font-semibold text-white z-10">01</div>
<div>
<h3 className="font-semibold text-lg text-white mb-2">Avaliação Inicial Completa</h3>
<p className="text-sm text-[#AAAAAA] leading-relaxed">Bioimpedância, teste de força e mobilidade, histórico médico e anamnese de objetivos. 60 minutos com seu coach dedicado.</p>
</div>
</div>

<div className="relative flex items-start gap-6">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1A1A1A] border border-[#333333] flex items-center justify-center text-xs font-semibold text-white z-10">02</div>
<div>
<h3 className="font-semibold text-lg text-white mb-2">Protocolo Periodizado</h3>
<p className="text-sm text-[#AAAAAA] leading-relaxed">Seu plano de treino é dividido em blocos de 4–6 semanas com objetivos progressivos. Adaptação, hipertrofia, força ou condicionamento — conforme sua meta.</p>
</div>
</div>

<div className="relative flex items-start gap-6">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1A1A1A] border border-[#333333] flex items-center justify-center text-xs font-semibold text-white z-10">03</div>
<div>
<h3 className="font-semibold text-lg text-white mb-2">Revisão e Ajuste Quinzenal</h3>
<p className="text-sm text-[#AAAAAA] leading-relaxed">A cada 15 dias, seu coach revisa cargas, evolução e ajusta o protocolo. Nada fica estagnado.</p>
</div>
</div>

<div className="relative flex items-start gap-6">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1A1A1A] border border-[#333333] flex items-center justify-center text-xs font-semibold text-white z-10">04</div>
<div>
<h3 className="font-semibold text-lg text-white mb-2">Relatório Mensal de Performance</h3>
<p className="text-sm text-[#AAAAAA] leading-relaxed">Receba um relatório completo com métricas de evolução, comparativo de composição corporal e metas para o próximo ciclo.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-6 lg:pl-10 mt-8 lg:mt-0">
<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 lg:p-10 sticky top-28">
<h3 className="font-semibold tracking-tight text-2xl text-white mb-8 pb-6 border-b border-[#333333]">Baseado em 4 princípios</h3>
<ul className="space-y-6 mb-10">
<li className="flex items-start gap-4">
<iconify-icon className="text-[#E84D0E] text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<div>
<span className="text-white font-medium block mb-1">Progressão de sobrecarga</span>
<span className="text-sm text-[#AAAAAA]">Cada sessão tem um objetivo mensurável. Sem estagnação.</span>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#E84D0E] text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<div>
<span className="text-white font-medium block mb-1">Especificidade de objetivo</span>
<span className="text-sm text-[#AAAAAA]">Estética, força, saúde ou performance — o protocolo muda.</span>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#E84D0E] text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<div>
<span className="text-white font-medium block mb-1">Individualização real</span>
<span className="text-sm text-[#AAAAAA]">Sem planilha genérica. Cada aluno tem seu próprio ciclo.</span>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#E84D0E] text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<div>
<span className="text-white font-medium block mb-1">Recuperação como treino</span>
<span className="text-sm text-[#AAAAAA]">Protocolo de descanso ativo, mobilidade e sono fazem parte do plano.</span>
</div>
</li>
</ul>
<div className="bg-[#222222] rounded-xl p-4 text-xs text-[#E5E5E5] flex items-center gap-3 border border-[#333333] mb-8">
<iconify-icon className="text-[#FF6A2F] text-lg flex-shrink-0" icon="solar:shield-check-bold"></iconify-icon>
                            Metodologia validada por profissionais de Educação Física com CREF ativo
                        </div>
<a className="inline-flex w-full items-center justify-center rounded-md border border-[#333333] hover:bg-[#222222] text-white font-medium px-8 py-4 text-sm transition-colors duration-300" href="#planos">
                            Quero Conhecer o Protocolo <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0D0D0D]" id="planos">
<div className="max-w-[1280px] mx-auto px-6 md:px-20">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-medium tracking-[0.12em] uppercase text-[#E84D0E] mb-4 block">Matrículas Abertas</span>
<h2 className="font-bold tracking-tight text-3xl md:text-5xl text-white leading-tight mb-6">Escolha o plano certo para seu nível de <span className="text-[#FF6A2F]">comprometimento.</span></h2>
<p className="text-base text-[#AAAAAA] leading-relaxed">Sem fidelidade no primeiro mês. Cancele quando quiser. Mas você não vai querer.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start lg:px-8 mb-12">

<div className="bg-[#222222] border border-[#2A2A2A] rounded-2xl p-8 flex flex-col h-full mt-4">
<div className="mb-8">
<div className="h-6 mb-2"></div> 
<h3 className="text-xl font-semibold text-white mb-2">Livre</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-3xl font-bold text-white">R$ 290</span>
<span className="text-sm text-[#AAAAAA]">/mês</span>
</div>
<p className="text-sm text-[#AAAAAA] h-10">Para quem quer começar com o essencial e construir o ritmo.</p>
</div>
<ul className="space-y-4 mb-8 flex-grow text-sm">
<li className="flex items-start gap-3"><iconify-icon className="text-[#4CAF50] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-[#E5E5E5]">Acesso irrestrito (6h–22h)</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#4CAF50] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-[#E5E5E5]">Avaliação física inicial</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#4CAF50] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-[#E5E5E5]">Protocolo de treino personalizado</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#4CAF50] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-[#E5E5E5]">App FORGE com seu protocolo</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#4CAF50] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-[#E5E5E5]">Acesso a todos os equipamentos</span></li>
<li className="flex items-start gap-3 opacity-40"><iconify-icon className="text-[#AAAAAA] text-lg mt-0.5 flex-shrink-0" icon="solar:close-square-linear"></iconify-icon><span className="text-[#AAAAAA] line-through decoration-[#666666]">Coach dedicado incluso</span></li>
<li className="flex items-start gap-3 opacity-40"><iconify-icon className="text-[#AAAAAA] text-lg mt-0.5 flex-shrink-0" icon="solar:close-square-linear"></iconify-icon><span className="text-[#AAAAAA] line-through decoration-[#666666]">Revisões quinzenais</span></li>
<li className="flex items-start gap-3 opacity-40"><iconify-icon className="text-[#AAAAAA] text-lg mt-0.5 flex-shrink-0" icon="solar:close-square-linear"></iconify-icon><span className="text-[#AAAAAA] line-through decoration-[#666666]">Zona de recuperação</span></li>
<li className="flex items-start gap-3 opacity-40"><iconify-icon className="text-[#AAAAAA] text-lg mt-0.5 flex-shrink-0" icon="solar:close-square-linear"></iconify-icon><span className="text-[#AAAAAA] line-through decoration-[#666666]">Estacionamento conveniado</span></li>
</ul>
<a className="w-full inline-flex items-center justify-center rounded-md border border-[#333333] hover:bg-[#333333] text-white font-medium px-6 py-3.5 text-sm transition-colors" href="#">
                        Começar no Livre <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-gradient-to-br from-[#2A1810] to-[#1A1A1A] border border-[#E84D0E]/30 rounded-3xl p-8 flex flex-col h-full relative z-10 md:-mt-4 md:mb-4 md:scale-105 shadow-[0_0_32px_rgba(232,77,14,0.15)]">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E84D0E] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">Mais popular</div>
<div className="mb-8">
<div className="h-6 mb-2"></div>
<h3 className="text-xl font-semibold text-white mb-2">Plus</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-4xl font-extrabold text-white">R$ 490</span>
<span className="text-sm text-[#AAAAAA]">/mês</span>
</div>
<p className="text-sm text-[#E5E5E5] h-10">Para quem quer resultado real com acompanhamento próximo.</p>
</div>
<ul className="space-y-4 mb-8 flex-grow text-sm">
<li className="flex items-start gap-3"><iconify-icon className="text-[#E84D0E] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-white">Acesso irrestrito (5h–23h)</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#E84D0E] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-white font-medium">Avaliação física completa (bioimpedância)</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#E84D0E] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-white">Protocolo de treinamento periodizado</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#E84D0E] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-white">App FORGE com seu protocolo</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#E84D0E] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-white">Acesso a todos os equipamentos</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#E84D0E] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-white font-medium">1 sessão de revisão com coach/mês</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#E84D0E] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-white">Relatório mensal de performance</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#E84D0E] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-white">Zona de recuperação inclusa</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#E84D0E] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-white">Estacionamento conveniado</span></li>
<li className="flex items-start gap-3 opacity-50"><iconify-icon className="text-[#AAAAAA] text-lg mt-0.5 flex-shrink-0" icon="solar:close-square-linear"></iconify-icon><span className="text-[#AAAAAA]">Coach dedicado em todas as sessões</span></li>
</ul>
<a className="w-full inline-flex items-center justify-center rounded-full bg-[#E84D0E] hover:bg-[#C94209] text-white font-medium px-6 py-4 text-sm transition-colors shadow-[0_0_20px_rgba(232,77,14,0.3)]" href="#">
                        Começar no Plus <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-[#222222] border border-[#2A2A2A] rounded-2xl p-8 flex flex-col h-full mt-4">
<div className="mb-8">
<div className="h-6 mb-2"></div>
<h3 className="text-xl font-semibold text-white mb-2">Elite</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-3xl font-bold text-white">R$ 890</span>
<span className="text-sm text-[#AAAAAA]">/mês</span>
</div>
<p className="text-sm text-[#AAAAAA] h-10">Para quem trata treino como prioridade e quer o máximo de resultado.</p>
</div>
<ul className="space-y-4 mb-8 flex-grow text-sm">
<li className="flex items-start gap-3"><iconify-icon className="text-[#4CAF50] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-[#E5E5E5]">Acesso irrestrito 24/7</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#4CAF50] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-[#E5E5E5]">Avaliação física completa trimestral</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#4CAF50] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-[#E5E5E5]">Protocolo de treinamento periodizado</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#4CAF50] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-[#E5E5E5]">App FORGE com seu protocolo</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#4CAF50] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-[#E5E5E5]">Acesso a todos os equipamentos</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#4CAF50] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-white font-medium">Coach dedicado em todas sessões</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#4CAF50] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-white font-medium">Revisão quinzenal de protocolo</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#4CAF50] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-[#E5E5E5]">Relatório mensal de performance</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#4CAF50] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-[#E5E5E5]">Zona de recuperação inclusa</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#4CAF50] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-[#E5E5E5]">Estacionamento conveniado</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#4CAF50] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-[#E5E5E5]">Nutricionista parceiro (30% off)</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#4CAF50] text-lg mt-0.5 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon><span className="text-[#E5E5E5]">Acesso ao lounge de nutrição 24/7</span></li>
</ul>
<a className="w-full inline-flex items-center justify-center rounded-md border border-[#333333] hover:bg-[#333333] text-white font-medium px-6 py-3.5 text-sm transition-colors" href="#">
                        Começar no Elite <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<p className="text-xs text-[#666666] text-center max-w-2xl mx-auto mb-8">Todos os planos incluem taxa de matrícula de R$ 150, isenta no primeiro mês. Sem fidelidade. Pagamento via PIX, cartão ou débito recorrente.</p>
<div className="text-center">
<a className="inline-flex items-center text-[#AAAAAA] hover:text-white transition-colors text-sm" href="#contato">
                    Não sabe qual plano escolher? <span className="text-[#E84D0E] ml-2 font-medium">Falar com Especialista →</span>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#141414]" id="coaches">
<div className="max-w-[1280px] mx-auto px-6 md:px-20">
<div className="max-w-2xl mb-16">
<span className="text-xs font-medium tracking-[0.12em] uppercase text-[#E84D0E] mb-4 block">Nosso Time</span>
<h2 className="font-bold tracking-tight text-3xl md:text-5xl text-white leading-tight mb-6">Coaches que levam sua evolução a <span className="text-[#FF6A2F]">sério.</span></h2>
<p className="text-base text-[#AAAAAA] leading-relaxed">Todos os nossos coaches têm CREF ativo, especialização em áreas de performance e passagem por academias ou times de alto rendimento.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

<div className="bg-[#222222] border border-[#2A2A2A] rounded-2xl overflow-hidden group">
<div className="aspect-square bg-[#1A1A1A] relative overflow-hidden">

<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23333333\' fillOpacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E')]"></div>
<div className="absolute bottom-4 left-4 bg-[#0D0D0D]/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-medium text-[#E5E5E5] border border-[#333333]">CREF 012345-G/SP</div>
</div>
<div className="p-6">
<h3 className="font-semibold text-lg text-white mb-1">Ricardo Alves</h3>
<p className="text-sm text-[#FF6A2F] font-medium mb-4">Força e Hipertrofia</p>
<p className="text-xs text-[#AAAAAA] mb-4 line-clamp-3">9 anos de experiência com atletas amadores e profissionais. Especialista em periodização para hipertrofia máxima. Já treinou mais de 600 alunos com resultados documentados.</p>
<div className="pt-4 border-t border-[#333333]">
<p className="text-[11px] text-[#666666] mb-1">FORMAÇÃO</p>
<p className="text-xs text-[#E5E5E5]">Bacharel em Ed. Física · Especialista em Treinamento de Força (USP)</p>
</div>
</div>
</div>

<div className="bg-[#222222] border border-[#2A2A2A] rounded-2xl overflow-hidden group">
<div className="aspect-square bg-[#1A1A1A] relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23333333\' fillOpacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E')]"></div>
<div className="absolute bottom-4 left-4 bg-[#0D0D0D]/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-medium text-[#E5E5E5] border border-[#333333]">CREF 023456-G/SP</div>
</div>
<div className="p-6">
<h3 className="font-semibold text-lg text-white mb-1">Mariana Costa</h3>
<p className="text-sm text-[#FF6A2F] font-medium mb-4">Condicionamento e Emagrecimento</p>
<p className="text-xs text-[#AAAAAA] mb-4 line-clamp-3">Especialista em protocolos de alto gasto calórico com preservação de massa magra. Trabalhou com times femininos de atletismo por 4 anos antes de ingressar na FORGE.</p>
<div className="pt-4 border-t border-[#333333]">
<p className="text-[11px] text-[#666666] mb-1">FORMAÇÃO</p>
<p className="text-xs text-[#E5E5E5]">Bacharel em Ed. Física · Pós em Fisiologia do Exercício (UNIFESP)</p>
</div>
</div>
</div>

<div className="bg-[#222222] border border-[#2A2A2A] rounded-2xl overflow-hidden group">
<div className="aspect-square bg-[#1A1A1A] relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23333333\' fillOpacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E')]"></div>
<div className="absolute bottom-4 left-4 bg-[#0D0D0D]/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-medium text-[#E5E5E5] border border-[#333333]">CREF 034567-G/SP</div>
</div>
<div className="p-6">
<h3 className="font-semibold text-lg text-white mb-1">Thiago Barros</h3>
<p className="text-sm text-[#FF6A2F] font-medium mb-4">Funcional e Mobilidade</p>
<p className="text-xs text-[#AAAAAA] mb-4 line-clamp-3">Referência em treinamento funcional de alta intensidade. Combina mobilidade, força e condicionamento em protocolos únicos. Ex-atleta de CrossFit competitivo.</p>
<div className="pt-4 border-t border-[#333333]">
<p className="text-[11px] text-[#666666] mb-1">FORMAÇÃO</p>
<p className="text-xs text-[#E5E5E5]">Bacharel em Ed. Física · Certificação CrossFit L2 · Mobilidade FRC</p>
</div>
</div>
</div>

<div className="bg-[#222222] border border-[#2A2A2A] rounded-2xl overflow-hidden group">
<div className="aspect-square bg-[#1A1A1A] relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23333333\' fillOpacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E')]"></div>
<div className="absolute bottom-4 left-4 bg-[#0D0D0D]/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-medium text-[#E5E5E5] border border-[#333333]">CREF 045678-G/SP</div>
</div>
<div className="p-6">
<h3 className="font-semibold text-lg text-white mb-1">Fernanda Lima</h3>
<p className="text-sm text-[#FF6A2F] font-medium mb-4">Performance Feminina</p>
<p className="text-xs text-[#AAAAAA] mb-4 line-clamp-3">Pioneira em protocolos femininos baseados em ciclicidade hormonal. Atende mulheres que querem performance real sem romper com saúde e qualidade de vida.</p>
<div className="pt-4 border-t border-[#333333]">
<p className="text-[11px] text-[#666666] mb-1">FORMAÇÃO</p>
<p className="text-xs text-[#E5E5E5]">Bacharel em Ed. Física · MBA Saúde · Esp. Hormônios e Performance</p>
</div>
</div>
</div>
</div>
<div className="flex justify-center">
<a className="inline-flex items-center justify-center rounded-md border border-[#333333] hover:bg-[#222222] text-white font-medium px-8 py-3.5 text-sm transition-colors duration-300" href="#contato">
                    Falar com um Coach
                </a>
</div>
</div>
</section>

<section className="py-24 bg-[#1A1A1A] border-t border-[#2A2A2A]">
<div className="max-w-[800px] mx-auto px-6 md:px-20">
<div className="text-center mb-16">
<span className="text-xs font-medium tracking-[0.12em] uppercase text-[#E84D0E] mb-4 block">Dúvidas Frequentes</span>
<h2 className="font-bold tracking-tight text-3xl md:text-4xl text-white">Temos as respostas. Você tem as perguntas.</h2>
</div>
<div className="space-y-2 mb-12">
<details className="group bg-[#222222] border border-[#2A2A2A] rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white font-medium">
                        Preciso ter experiência prévia para treinar na FORGE?
                        <span className="transition duration-300 group-open:-rotate-180 text-[#666666]">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#AAAAAA] leading-relaxed border-t border-[#2A2A2A] pt-4">
                        Não. Recebemos alunos de todos os níveis, do iniciante absoluto ao atleta avançado. A avaliação inicial e o protocolo individualizado garantem que o treino seja adequado ao seu momento. O que importa é a disposição de evoluir.
                    </div>
</details>
<details className="group bg-[#222222] border border-[#2A2A2A] rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white font-medium">
                        Como funciona a avaliação inicial?
                        <span className="transition duration-300 group-open:-rotate-180 text-[#666666]">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#AAAAAA] leading-relaxed border-t border-[#2A2A2A] pt-4">
                        Você agenda uma visita gratuita. Na primeira sessão (60 minutos), seu coach faz uma anamnese completa, avaliação postural, bioimpedância e testes funcionais. Com base nisso, monta seu protocolo de treino personalizado, que fica disponível no app FORGE.
                    </div>
</details>
<details className="group bg-[#222222] border border-[#2A2A2A] rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white font-medium">
                        Posso mudar de plano depois que me matricular?
                        <span className="transition duration-300 group-open:-rotate-180 text-[#666666]">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#AAAAAA] leading-relaxed border-t border-[#2A2A2A] pt-4">
                        Sim, a qualquer momento. O upgrade é imediato. O downgrade entra em vigor no próximo ciclo de cobrança. Não há multa para mudança de plano.
                    </div>
</details>
<details className="group bg-[#222222] border border-[#2A2A2A] rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white font-medium">
                        Existe contrato de fidelidade?
                        <span className="transition duration-300 group-open:-rotate-180 text-[#666666]">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#AAAAAA] leading-relaxed border-t border-[#2A2A2A] pt-4">
                        Não. Acreditamos que um aluno deve ficar porque quer, não porque é obrigado. No entanto, oferecemos desconto de 10% para quem opta pelo pagamento semestral ou anual.
                    </div>
</details>
<details className="group bg-[#222222] border border-[#2A2A2A] rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white font-medium">
                        A academia tem estacionamento?
                        <span className="transition duration-300 group-open:-rotate-180 text-[#666666]">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#AAAAAA] leading-relaxed border-t border-[#2A2A2A] pt-4">
                        Alunos dos planos Plus e Elite têm acesso ao estacionamento conveniado do edifício com validação de até 3 horas por visita. Alunos do plano Livre têm desconto de 50% no mesmo estacionamento.
                    </div>
</details>
<details className="group bg-[#222222] border border-[#2A2A2A] rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white font-medium">
                        Como funciona o app FORGE?
                        <span className="transition duration-300 group-open:-rotate-180 text-[#666666]">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#AAAAAA] leading-relaxed border-t border-[#2A2A2A] pt-4">
                        O app é onde você acompanha todo o seu protocolo de treino, cargas, evolução, relatórios e agenda com seu coach. Disponível para iOS e Android, incluso em todos os planos. Seu coach atualiza seu protocolo diretamente no app após cada revisão.
                    </div>
</details>
</div>
<div className="text-center">
<span className="text-[#AAAAAA] text-sm">Ainda tem dúvidas?</span>
<a className="text-[#E84D0E] font-medium text-sm hover:text-[#C94209] ml-2 transition-colors" href="#contato">
                    Falar com um Especialista →
                </a>
</div>
</div>
</section>

<section className="py-24 bg-[#141414] border-t border-[#2A2A2A]">
<div className="max-w-[1280px] mx-auto px-6 md:px-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<span className="text-xs font-medium tracking-[0.12em] uppercase text-[#E84D0E] mb-4 block">Como Chegar</span>
<h2 className="font-bold tracking-tight text-3xl md:text-4xl text-white mb-8">No coração de São Paulo, perto de você.</h2>
<div className="space-y-8">
<div>
<h3 className="font-semibold text-white mb-2 flex items-center gap-2"><iconify-icon className="text-[#FF6A2F] text-xl" icon="solar:map-point-linear"></iconify-icon> Endereço</h3>
<p className="text-[#AAAAAA] text-sm leading-relaxed">Av. Brigadeiro Faria Lima, 3.477 — 4º andar<br/>Itaim Bibi · São Paulo · SP · 01452-000</p>
</div>
<div>
<h3 className="font-semibold text-white mb-2 flex items-center gap-2"><iconify-icon className="text-[#FF6A2F] text-xl" icon="solar:clock-circle-linear"></iconify-icon> Horários de Funcionamento</h3>
<ul className="text-[#AAAAAA] text-sm space-y-1">
<li><span className="text-[#E5E5E5]">Segunda a Sexta:</span> 5h00 – 23h00</li>
<li><span className="text-[#E5E5E5]">Sábado:</span> 7h00 – 20h00</li>
<li><span className="text-[#E5E5E5]">Domingo e Feriados:</span> 8h00 – 14h00</li>
</ul>
<p className="text-xs text-[#E84D0E] mt-2 font-medium">*Alunos Elite: acesso 24/7 via biometria</p>
</div>
<div>
<h3 className="font-semibold text-white mb-2 flex items-center gap-2"><iconify-icon className="text-[#FF6A2F] text-xl" icon="solar:routing-2-linear"></iconify-icon> Acesso Rápido</h3>
<ul className="text-[#AAAAAA] text-sm space-y-2">
<li><strong className="text-[#E5E5E5] font-medium">Metrô:</strong> Estação Faria Lima (Linha 4-Amarela) — 4 min a pé</li>
<li><strong className="text-[#E5E5E5] font-medium">Ônibus:</strong> Linhas 702P, 675A e 117 — ponto em frente ao edifício</li>
<li><strong className="text-[#E5E5E5] font-medium">Carro:</strong> Estacionamento próprio no edifício</li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center rounded-md border border-[#333333] hover:bg-[#222222] text-white font-medium px-6 py-3 text-sm transition-colors duration-300" href="#">
                            Ver no Google Maps
                        </a>
<a className="inline-flex items-center justify-center rounded-md bg-[#E84D0E] hover:bg-[#C94209] text-white font-medium px-6 py-3 text-sm transition-colors duration-300" href="#planos">
                            Agendar Visita Gratuita
                        </a>
</div>
</div>
<div className="bg-[#222222] rounded-2xl border border-[#2A2A2A] overflow-hidden flex flex-col">

<div className="h-64 sm:h-full w-full bg-[#1A1A1A] relative flex items-center justify-center border-b border-[#2A2A2A]">
<iconify-icon className="text-6xl text-[#333333]" icon="solar:map-linear"></iconify-icon>
</div>
<div className="p-8 bg-[#222222]">
<h3 className="font-semibold text-white mb-4 text-lg">Contato Rápido</h3>
<div className="space-y-3 text-sm">
<a className="flex items-center gap-3 text-[#AAAAAA] hover:text-white transition-colors" href="#">
<iconify-icon className="text-[#FF6A2F] text-lg" icon="solar:phone-linear"></iconify-icon> (11) 3456-7890
                            </a>
<a className="flex items-center gap-3 text-[#AAAAAA] hover:text-white transition-colors" href="#">
<iconify-icon className="text-[#FF6A2F] text-lg" icon="solar:smartphone-linear"></iconify-icon> WhatsApp: (11) 99999-8888
                            </a>
<a className="flex items-center gap-3 text-[#AAAAAA] hover:text-white transition-colors" href="#">
<iconify-icon className="text-[#FF6A2F] text-lg" icon="solar:letter-linear"></iconify-icon> contato@forgeperformance.com.br
                            </a>
<a className="flex items-center gap-3 text-[#AAAAAA] hover:text-white transition-colors pt-2" href="#">
<iconify-icon className="text-[#FF6A2F] text-lg" icon="solar:hashtag-linear"></iconify-icon> Instagram: @forgeperformanceclub
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0D0D0D] border-t border-[#2A2A2A]">
<div className="max-w-[1280px] mx-auto px-6 md:px-20 flex flex-col items-center text-center">
<span className="text-xs font-medium tracking-[0.12em] uppercase text-[#E84D0E] mb-6 block">Próximo Passo</span>
<h2 className="font-bold tracking-tight text-4xl md:text-6xl text-white leading-[1.1] max-w-4xl mb-8">
                O único treino que não gera resultado é o que você <span className="text-[#FF6A2F]">não faz.</span>
</h2>
<p className="text-base sm:text-lg text-[#AAAAAA] max-w-2xl mb-12 leading-relaxed">
                Você chegou até aqui porque algo mudou. Não deixe esse momento passar. A primeira visita é gratuita, sem compromisso e sem pressão de venda.
            </p>
<div className="flex flex-col md:flex-row gap-8 mb-12 text-sm text-[#E5E5E5]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#333333] flex items-center justify-center text-[#FF6A2F] text-lg">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
</div>
<span>Visita 100% gratuita</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#333333] flex items-center justify-center text-[#FF6A2F] text-lg">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
</div>
<span>Agendamento em 2 min</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#333333] flex items-center justify-center text-[#FF6A2F] text-lg">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
<span>Sem fidelidade inicial</span>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#E84D0E] hover:bg-[#C94209] text-white font-semibold px-10 py-5 text-lg transition-colors duration-300 shadow-[0_0_32px_rgba(232,77,14,0.2)]" href="#planos">
                    Agendar Minha Visita Gratuita
                    <iconify-icon className="ml-2 text-2xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center text-[#AAAAAA] hover:text-white font-medium text-sm transition-colors duration-300" href="#contato">
                    Prefiro falar com um especialista →
                </a>
</div>
<p className="mt-12 text-xs text-[#666666]">Mais de 4.200 alunos já tomaram essa decisão. A maioria só lamenta não ter feito antes.</p>
</div>
</section>

<section className="relative bg-[#141414] py-32 md:py-48 flex items-center justify-center text-center overflow-hidden border-t border-[#2A2A2A]">
<div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent z-10"></div>
<div className="relative z-20 max-w-4xl px-6">
<h2 className="font-extrabold tracking-tight text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-8">
                "Força não é o que você levanta.<br/>É o que você decide não <span className="text-[#FF6A2F]">largar.</span>"
            </h2>
<p className="text-sm tracking-[0.12em] uppercase text-[#666666] font-medium mb-12">
                — Método FORGE · Desde 2014
            </p>
<a className="inline-flex items-center justify-center text-white hover:text-[#E84D0E] font-medium text-base transition-colors duration-300" href="#planos">
                Fazer Parte da FORGE <iconify-icon className="ml-2 text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<footer className="bg-[#0D0D0D] pt-20 pb-10 border-t border-[#2A2A2A]">
<div className="max-w-[1280px] mx-auto px-6 md:px-20">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<div className="font-bold tracking-tighter text-2xl text-white mb-2">FORGE</div>
<p className="text-xs tracking-[0.12em] uppercase text-[#666666] mb-6">Performance Club</p>
<p className="text-sm text-[#AAAAAA]">Metodologia. Estrutura. Resultado.</p>
<div className="flex gap-4 mt-6 text-[#AAAAAA]">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:video-frame-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:music-note-linear"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-white font-semibold mb-6">A Academia</h4>
<ul className="space-y-3 text-sm text-[#AAAAAA]">
<li><a className="hover:text-white transition-colors" href="#">Quem Somos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Método FORGE</a></li>
<li><a className="hover:text-white transition-colors" href="#">Nossos Coaches</a></li>
<li><a className="hover:text-white transition-colors" href="#">Estrutura e Equipamentos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog de Performance</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Matrículas</h4>
<ul className="space-y-3 text-sm text-[#AAAAAA]">
<li><a className="hover:text-white transition-colors" href="#">Plano Livre</a></li>
<li><a className="hover:text-white transition-colors" href="#">Plano Plus</a></li>
<li><a className="hover:text-white transition-colors" href="#">Plano Elite</a></li>
<li><a className="text-[#E84D0E] hover:text-[#C94209] font-medium transition-colors" href="#">Agendar Visita Gratuita</a></li>
<li><a className="hover:text-white transition-colors" href="#">Falar com Especialista</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Receba conteúdo de performance</h4>
<form className="flex gap-2">
<input className="w-full bg-[#1A1A1A] border border-[#333333] rounded-md px-4 py-2.5 text-sm text-white placeholder:text-[#666666] focus:outline-none focus:border-[#E84D0E] transition-colors" placeholder="seu@email.com" type="email"/>
<button className="bg-[#E84D0E] hover:bg-[#C94209] text-white px-4 rounded-md transition-colors flex items-center justify-center" type="submit">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="border-t border-[#2A2A2A] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
<p>© 2024 FORGE Performance Club · Todos os direitos reservados</p>
<div className="flex gap-4">
<span>CNPJ 00.000.000/0001-00</span>
<a className="hover:text-[#AAAAAA] transition-colors" href="#">Política de Privacidade</a>
<a className="hover:text-[#AAAAAA] transition-colors" href="#">Termos de Uso</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
