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
      

<nav className="bg-black text-white px-6 md:px-12 py-5 sticky top-0 z-50 border-b border-neutral-900">
<div className="max-w-7xl mx-auto flex justify-between items-center">

<div className="flex items-center gap-3">
<div className="flex items-center gap-1 text-base opacity-90 font-serif">
<span>☽</span><span>◯</span><span>☾</span>
</div>
<span className="font-serif tracking-[0.25em] text-lg uppercase mt-1">Sense</span>
</div>

<div className="hidden md:flex gap-8 text-xs tracking-widest uppercase text-[#515151]">
<a className="hover:text-white transition-colors" href="#sobre">Quem Somos</a>
<a className="hover:text-white transition-colors" href="#metodo">Metodologia</a>
<a className="hover:text-white transition-colors" href="#servicos">Serviços</a>
<a className="hover:text-white transition-colors" href="#lab">Sense Lab</a>
</div>

<a className="btn-primary py-3 px-6 text-[0.65rem]" href="#contato">Contato</a>
</div>
</nav>

<section className="bg-black text-white py-24 md:py-32 px-6 relative overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center relative z-10">
<div className="lg:col-span-6 flex flex-col items-start">
<p className="uppercase text-xs tracking-[0.2em] text-[#515151] mb-8 border-l-2 border-[#B60303] pl-4">
                    Para marcas e profissionais que querem crescer no digital com essência, estética e estratégia
                </p>
<h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-8">
                    Uma agência que transforma posicionamento em crescimento consistente.
                </h1>
<p className="text-neutral-400 text-base md:text-lg max-w-lg mb-10 leading-relaxed font-light">
                    A maioria dos negócios não trava por falta de esforço, trava por falta de método. A Sense é a agência de estratégia que organiza posicionamento, comunicação e crescimento de forma estruturada.
                </p>
<a className="btn-primary" href="#contato">Quero conhecer a Sense</a>
</div>

<div className="lg:col-span-6 relative h-[500px] hidden lg:block collage-container">
<div className="absolute inset-0 bg-[#111111] border border-neutral-800 collage-layer rotate-3 overflow-hidden">
<img alt="Editorial bg" className="w-full h-full object-cover opacity-40 grayscale" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-10 left-10 right-0 bottom-10 bg-[#836556] bg-opacity-20 backdrop-blur-sm border border-[#836556]/30 collage-layer -rotate-2 flex items-center justify-center overflow-hidden">
<img alt="Editorial image" className="w-full h-full object-cover opacity-70 mix-blend-overlay" src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-4 right-12 w-48 h-64 bg-[#B60303] collage-layer shadow-2xl flex items-center justify-center overflow-hidden">
<img alt="Textura" className="w-full h-full object-cover opacity-30 mix-blend-multiply" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F0E8] py-24 md:py-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<iconify-icon className="text-5xl text-[#B60303] mb-8" icon="solar:compass-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="font-serif text-3xl md:text-5xl tracking-tight mb-12 text-black">
                Você não tem problema de marketing. Tem problema de estratégia.
            </h2>
<div className="text-lg md:text-xl text-[#515151] space-y-6 font-light leading-relaxed">
<p>Postar com frequência, investir em anúncios, contratar alguém para o perfil.<br/>Tudo isso acontece e mesmo assim, as vendas não seguem um padrão.</p>
<p>Um mês performa bem. No outro, cai. E ninguém sabe exatamente o porquê.<br/>O problema não está na execução.</p>
<p className="text-black font-medium text-xl md:text-2xl pt-4">Sem estratégia, cada ação funciona de forma isolada, sem método, direção ou consistência.</p>
<p className="pt-4">A Sense foi criada para resolver isso.<br/>Com uma metodologia própria, desenvolvida a partir da realidade de marcas e profissionais que viveram esse cenário, estruturamos posicionamento, comunicação e crescimento em um sistema claro e consistente.</p>
</div>
</div>
</section>

<section className="bg-black text-white py-24 md:py-32 px-6 relative overflow-hidden" id="sobre">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="relative h-[600px] hidden lg:block collage-container order-2 lg:order-1">
<div className="absolute top-0 left-0 w-3/4 h-3/4 bg-[#1a1a1a] border border-neutral-800 collage-layer overflow-hidden">
<img alt="Retrato Lis" className="w-full h-full object-cover grayscale opacity-60" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-[#836556] border border-[#836556] collage-layer -rotate-3 shadow-2xl overflow-hidden">
<img alt="Retrato Ju" className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-40 bg-[#B60303] collage-layer rotate-6 mix-blend-multiply opacity-80"></div>
</div>

<div className="order-1 lg:order-2">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-10">Por trás da Sense tem história, não fórmula.</h2>
<div className="space-y-6 text-neutral-400 font-light text-base md:text-lg leading-relaxed">
<p>Nascemos no interior de São Paulo e hoje atendemos marcas em diferentes mercados ao redor do mundo, com o mesmo método e o mesmo padrão de entrega.</p>
<p>Nossa especialidade é transformar negócios que já existem em marcas que crescem com consistência, através de estratégia, posicionamento e execução alinhados do começo ao fim.</p>
<div className="h-px w-16 bg-[#515151] my-8"></div>
<p className="text-white">Lis e Ju são as fundadoras da Sense.</p>
<p>Mais do que executar marketing, construímos ao longo dos anos uma forma própria de pensar estratégia, posicionamento e crescimento.<br/>A partir da experiência com diferentes marcas e mercados, desenvolvemos um método que organiza o marketing com clareza, direção e consistência.</p>
<p className="text-white font-medium italic pt-4">Hoje, lideramos a Sense com o mesmo princípio: crescimento não vem de ações soltas, vem de estratégia bem estruturada.</p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 md:py-32 px-6" id="metodo">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-20 max-w-3xl mx-auto">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-8 text-black">A Metodologia Sense foi desenvolvida a partir da realidade de marcas.</h2>
<p className="text-[#515151] text-lg font-light mb-12">Um processo completo, do diagnóstico à execução. Estruturado em 5 pilares e aplicado com consistência em todas as marcas que entram na Sense.</p>
<div className="inline-block border border-black p-6 relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 text-xs tracking-widest uppercase font-medium flex items-center gap-2">
<iconify-icon className="text-[#B60303]" icon="solar:layers-linear"></iconify-icon> Versão estruturada
                    </div>
<h3 className="font-serif text-2xl mb-2">O Método SENSE</h3>
<p className="text-sm text-[#515151] font-light">Um método proprietário estruturado em 5 pilares que organizam estratégia e crescimento.</p>
</div>
</div>

<div className="border-t border-neutral-200">

<div className="py-10 border-b border-neutral-200 flex flex-col md:flex-row gap-6 md:gap-12 group hover:bg-[#F5F0E8] transition-colors -mx-6 px-6 cursor-default">
<div className="md:w-1/3 flex items-start gap-4">
<iconify-icon className="text-2xl text-[#B60303] mt-2 group-hover:scale-110 transition-transform" icon="solar:target-linear"></iconify-icon>
<div>
<span className="font-serif text-4xl md:text-5xl text-[#B60303] group-hover:text-black transition-colors">S</span>
<span className="font-serif text-2xl text-black ml-2 tracking-tight">— Sentido</span>
</div>
</div>
<div className="md:w-2/3">
<h4 className="text-lg font-medium mb-3 text-black">Diagnóstico de Marca e Presença Digital</h4>
<p className="text-[#515151] font-light leading-relaxed">Entendemos o momento atual da marca, sua comunicação e onde estão as principais oportunidades de crescimento.</p>
</div>
</div>

<div className="py-10 border-b border-neutral-200 flex flex-col md:flex-row gap-6 md:gap-12 group hover:bg-[#F5F0E8] transition-colors -mx-6 px-6 cursor-default">
<div className="md:w-1/3 flex items-start gap-4">
<iconify-icon className="text-2xl text-[#B60303] mt-2 group-hover:scale-110 transition-transform" icon="solar:map-arrow-up-linear"></iconify-icon>
<div>
<span className="font-serif text-4xl md:text-5xl text-[#B60303] group-hover:text-black transition-colors">E</span>
<span className="font-serif text-2xl text-black ml-2 tracking-tight">— Estratégia</span>
</div>
</div>
<div className="md:w-2/3">
<h4 className="text-lg font-medium mb-3 text-black">Pesquisa de Público e Personas<br/>Estratégia de Conteúdo</h4>
<p className="text-[#515151] font-light leading-relaxed">Definimos para quem a marca fala, como se posiciona e quais caminhos estratégicos sustentam o crescimento.</p>
</div>
</div>

<div className="py-10 border-b border-neutral-200 flex flex-col md:flex-row gap-6 md:gap-12 group hover:bg-[#F5F0E8] transition-colors -mx-6 px-6 cursor-default">
<div className="md:w-1/3 flex items-start gap-4">
<iconify-icon className="text-2xl text-[#B60303] mt-2 group-hover:scale-110 transition-transform" icon="solar:chat-square-call-linear"></iconify-icon>
<div>
<span className="font-serif text-4xl md:text-5xl text-[#B60303] group-hover:text-black transition-colors">N</span>
<span className="font-serif text-2xl text-black ml-2 tracking-tight">— Narrativa</span>
</div>
</div>
<div className="md:w-2/3">
<h4 className="text-lg font-medium mb-3 text-black">Arquétipo e Brand Persona<br/>Storytelling Estratégico e Tom de Voz</h4>
<p className="text-[#515151] font-light leading-relaxed">Construímos a forma como a marca se expressa, se diferencia e se conecta com clareza e consistência.</p>
</div>
</div>

<div className="py-10 border-b border-neutral-200 flex flex-col md:flex-row gap-6 md:gap-12 group hover:bg-[#F5F0E8] transition-colors -mx-6 px-6 cursor-default">
<div className="md:w-1/3 flex items-start gap-4">
<iconify-icon className="text-2xl text-[#B60303] mt-2 group-hover:scale-110 transition-transform" icon="solar:magic-stick-3-linear"></iconify-icon>
<div>
<span className="font-serif text-4xl md:text-5xl text-[#B60303] group-hover:text-black transition-colors">S</span>
<span className="font-serif text-2xl text-black ml-2 tracking-tight">— Significado</span>
</div>
</div>
<div className="md:w-2/3">
<h4 className="text-lg font-medium mb-3 text-black">Guia Estético da Marca</h4>
<p className="text-[#515151] font-light leading-relaxed">Traduzimos o posicionamento em identidade visual e percepção, garantindo coerência em todos os pontos de contato.</p>
</div>
</div>

<div className="py-10 border-b border-neutral-200 flex flex-col md:flex-row gap-6 md:gap-12 group hover:bg-[#F5F0E8] transition-colors -mx-6 px-6 cursor-default">
<div className="md:w-1/3 flex items-start gap-4">
<iconify-icon className="text-2xl text-[#B60303] mt-2 group-hover:scale-110 transition-transform" icon="solar:rocket-linear"></iconify-icon>
<div>
<span className="font-serif text-4xl md:text-5xl text-[#B60303] group-hover:text-black transition-colors">E</span>
<span className="font-serif text-2xl text-black ml-2 tracking-tight">— Execução</span>
</div>
</div>
<div className="md:w-2/3">
<h4 className="text-lg font-medium mb-3 text-black">Calendário de Conteúdo<br/>Consultoria Comercial<br/>Otimização e Métricas</h4>
<p className="text-[#515151] font-light leading-relaxed">Transformamos estratégia em ação com direção, acompanhamento e ajustes contínuos.</p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="btn-primary" href="#servicos">Quero conhecer os serviços</a>
</div>
</div>
</section>

<section className="bg-[#F5F0E8] py-24 md:py-32 px-6" id="servicos">
<div className="max-w-7xl mx-auto">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-16 text-center text-black">Escolha o caminho certo para o seu momento.</h2>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20 auto-rows-fr">

<div className="bg-white p-8 md:p-10 border border-neutral-200 hover:border-black transition-colors md:col-span-2 flex flex-col justify-between group">
<iconify-icon className="text-4xl text-[#B60303] mb-6 group-hover:scale-110 transition-transform origin-left" icon="solar:lightbulb-minimalistic-linear"></iconify-icon>
<div>
<h3 className="font-serif text-2xl mb-3 text-black tracking-tight">Consultoria Sense</h3>
<p className="text-sm font-medium mb-2 text-[#515151]">Diagnóstico e direcionamento completo.</p>
<p className="text-sm font-light text-[#515151] leading-relaxed">Você sai com clareza sobre o que comunicar, como se posicionar e como estruturar conteúdos com consistência e intenção para alcançar sua audiência.</p>
</div>
</div>

<div className="border border-neutral-200 overflow-hidden relative group hidden md:block min-h-[250px]">
<img alt="Consultoria visual" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="bg-white p-8 border border-neutral-200 hover:border-black transition-colors flex flex-col justify-between group">
<iconify-icon className="text-3xl text-[#B60303] mb-6 group-hover:scale-110 transition-transform origin-left" icon="solar:smartphone-update-linear"></iconify-icon>
<div>
<h3 className="font-serif text-xl mb-3 text-black tracking-tight">Gestão de Social Media</h3>
<p className="text-sm font-light text-[#515151] leading-relaxed">Estratégia, criação e execução do seu perfil com alinhamento total de marca.</p>
</div>
</div>

<div className="bg-white p-8 border border-neutral-200 hover:border-black transition-colors flex flex-col justify-between group">
<iconify-icon className="text-3xl text-[#B60303] mb-6 group-hover:scale-110 transition-transform origin-left" icon="solar:flag-linear"></iconify-icon>
<div>
<h3 className="font-serif text-xl mb-3 text-black tracking-tight">Campanhas de Lançamento</h3>
<p className="text-sm font-light text-[#515151] leading-relaxed">Estruturamos campanhas para momentos estratégicos, do conceito à execução.</p>
</div>
</div>

<div className="bg-white p-8 border border-neutral-200 hover:border-black transition-colors flex flex-col justify-between group">
<iconify-icon className="text-3xl text-[#B60303] mb-6 group-hover:scale-110 transition-transform origin-left" icon="solar:pen-new-square-linear"></iconify-icon>
<div>
<h3 className="font-serif text-xl mb-3 text-black tracking-tight">Identidade Visual</h3>
<p className="text-sm font-light text-[#515151] leading-relaxed">Construção visual da sua marca com coerência estética e posicionamento intencional.</p>
</div>
</div>

<div className="border border-neutral-200 overflow-hidden relative group md:col-span-2 hidden md:block min-h-[250px]">
<img alt="Arquitetura Minimalista" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#836556]/10"></div>
</div>

<div className="bg-white p-8 md:p-10 border border-neutral-200 hover:border-black transition-colors md:col-span-2 flex flex-col justify-between group">
<iconify-icon className="text-4xl text-[#B60303] mb-6 group-hover:scale-110 transition-transform origin-left" icon="solar:chart-square-linear"></iconify-icon>
<div>
<h3 className="font-serif text-2xl mb-3 text-black tracking-tight">Análise de Perfil</h3>
<p className="text-sm font-medium mb-2 text-[#515151]">Diagnóstico estratégico digital.</p>
<p className="text-sm font-light text-[#515151] leading-relaxed">Você descobre o que está funcionando, o que está travando e onde estão as oportunidades de posicionamento que ainda não foram aproveitadas pela sua marca.</p>
</div>
</div>

<div className="bg-white p-8 md:p-10 border border-neutral-200 hover:border-black transition-colors md:col-span-2 flex flex-col justify-between group">
<iconify-icon className="text-4xl text-[#B60303] mb-6 group-hover:scale-110 transition-transform origin-left" icon="solar:camera-linear"></iconify-icon>
<div>
<h3 className="font-serif text-2xl mb-3 text-black tracking-tight">Story Maker</h3>
<p className="text-sm font-medium mb-2 text-[#515151]">Cobertura em tempo real.</p>
<p className="text-sm font-light text-[#515151] leading-relaxed">Criamos stories alinhados ao posicionamento em seus eventos, garantindo presença, conexão e consistência estética enquanto as coisas acontecem.</p>
</div>
</div>
</div>
<div className="text-center bg-white p-12 border border-neutral-200 max-w-3xl mx-auto flex flex-col items-center">
<iconify-icon className="text-3xl text-[#515151] mb-4" icon="solar:chat-line-linear"></iconify-icon>
<p className="text-lg text-black mb-6">Não sabe qual serviço faz mais sentido para o seu momento?<br/>Fale com a equipe Sense.</p>
<a className="btn-primary" href="#contato">Quero falar com a equipe Sense</a>
</div>
</div>
</section>

<section className="bg-black text-white py-24 md:py-32 px-6" id="lab">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-8">Não sabe por onde começar? O Sense Lab é o seu primeiro passo.</h2>
<p className="text-neutral-400 font-light text-base md:text-lg leading-relaxed mb-6">
                    Em 3 aulas gravadas, você aprende a Metodologia Sense e constrói um plano estratégico claro e aplicável para organizar seu marketing com consistência.
                </p>
<div className="bg-[#111111] border border-neutral-800 p-8 mb-10">
<h4 className="uppercase text-xs tracking-widest text-[#836556] mb-6 flex items-center gap-2">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon> O que está incluído
                    </h4>
<ul className="space-y-5 text-sm font-light text-neutral-300">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#B60303] text-xl mt-0.5" icon="solar:video-library-linear" strokeWidth="1.5"></iconify-icon>
<span><strong className="text-white font-medium">3 Aulas Gravadas:</strong> A Metodologia Sense completa e aplicável.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#B60303] text-xl mt-0.5" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<span><strong className="text-white font-medium">Plano Estratégico:</strong> Você sai das aulas com uma estratégia construída para a sua realidade.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#B60303] text-xl mt-0.5" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
<span><strong className="text-white font-medium">Visão Comercial:</strong> Como conectar marketing e vendas para converter mais.</span>
</li>
</ul>
</div>
<div className="flex flex-col sm:flex-row items-center gap-6">
<a className="btn-primary w-full sm:w-auto text-center" href="#">Quero acessar o Sense Lab</a>
<div className="text-neutral-400 text-xs text-center sm:text-left">
<p className="text-white font-medium">Por R$600 ou em até 12x no cartão.</p>
<p>Garantia incondicional de 7 dias.</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 h-full">

<div className="col-span-2 bg-[#111111] border border-neutral-800 p-4 rounded-sm shadow-2xl flex flex-col relative overflow-hidden group min-h-[220px]">
<div className="flex gap-2 mb-4 border-b border-neutral-800 pb-4 relative z-10">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
<img alt="Aulas bg" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:opacity-30 transition-opacity" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="flex-grow flex flex-col items-center justify-center relative z-10">
<iconify-icon className="text-6xl text-white opacity-80 group-hover:scale-110 transition-transform cursor-pointer drop-shadow-lg" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="mt-4 flex gap-2 relative z-10">
<div className="h-1 bg-[#B60303] w-1/3 rounded"></div>
<div className="h-1 bg-neutral-800 w-2/3 rounded"></div>
</div>
</div>

<div className="bg-[#1a1a1a] border border-neutral-800 p-6 flex flex-col justify-center items-center text-center group">
<iconify-icon className="text-3xl text-[#B60303] mb-3 group-hover:-translate-y-1 transition-transform" icon="solar:whatsapp-linear"></iconify-icon>
<span className="text-white text-sm font-medium">Suporte Direto</span>
<span className="text-neutral-500 text-xs mt-1">30 dias via WhatsApp</span>
</div>

<div className="bg-[#836556] bg-opacity-20 border border-[#836556]/30 p-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
<iconify-icon className="text-3xl text-[#836556] mb-3 relative z-10" icon="solar:bolt-linear"></iconify-icon>
<span className="text-white text-sm font-medium relative z-10">Acesso Imediato</span>
<span className="text-[#836556] text-xs mt-1 relative z-10">Assista no seu ritmo</span>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 md:py-32 px-6">
<div className="max-w-7xl mx-auto text-center">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-16 text-black">O que dizem quem já passou pela Sense.</h2>
<div className="w-full max-w-4xl mx-auto bg-neutral-50 border border-neutral-200 p-12 md:p-16 relative">
<iconify-icon className="absolute top-8 left-8 text-5xl text-neutral-200 opacity-50" icon="solar:quote-right-bold-duotone"></iconify-icon>
<div className="relative z-10 flex flex-col items-center">
<iconify-icon className="text-4xl text-[#B60303] mb-6" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg md:text-xl text-[#515151] font-light leading-relaxed mb-8 italic">
                        "O espaço aqui está reservado para os depoimentos reais de nossos clientes. A prioridade é apresentar prints de resultados, vídeos ou textos que demonstrem o impacto da metodologia na prática."
                    </p>
<div className="flex items-center gap-1 text-[#B60303] mb-2">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs uppercase tracking-widest font-serif text-black">Cliente Sense</span>
</div>
</div>
</div>
</section>

<section className="bg-[#B60303] text-white py-32 md:py-40 px-6 text-center relative overflow-hidden" id="contato">
<div className="absolute inset-0 opacity-10">
<img alt="Textura bg" className="w-full h-full object-cover mix-blend-multiply" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-4xl mx-auto relative z-10">
<iconify-icon className="text-5xl mb-8 opacity-80" icon="solar:rocket-2-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="font-serif text-5xl md:text-6xl tracking-tight mb-8">O próximo passo do seu negócio começa com a estratégia certa.</h2>
<p className="text-lg md:text-xl font-light opacity-90 mb-12">
                Você pode contratar a agência e ter a equipe Sense cuidando do seu marketing com método e acompanhamento próximo.
            </p>
<a className="btn-white" href="#">Quero falar com a equipe Sense</a>
</div>
</section>

<section className="bg-[#F5F0E8] py-24 md:py-32 px-6">
<div className="max-w-4xl mx-auto">
<div className="flex items-center gap-4 mb-12">
<iconify-icon className="text-4xl text-[#B60303]" icon="solar:question-circle-linear"></iconify-icon>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-black">Dúvidas frequentes</h2>
</div>
<div className="space-y-0">

<div className="border-t border-black py-8 group cursor-pointer">
<div className="flex justify-between items-center mb-3">
<h3 className="text-lg font-medium text-black group-hover:text-[#B60303] transition-colors">A Sense atende apenas moda e saúde?</h3>
<iconify-icon className="text-xl text-neutral-400 group-hover:text-[#B60303] transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<p className="text-[#515151] font-light leading-relaxed pr-8">Não. Esses são os segmentos com maior concentração na nossa base de clientes, mas a Metodologia Sense foi construída para qualquer negócio que queira crescer com posicionamento claro e estratégia real.</p>
</div>

<div className="border-t border-black py-8 group cursor-pointer">
<div className="flex justify-between items-center mb-3">
<h3 className="text-lg font-medium text-black group-hover:text-[#B60303] transition-colors">Qual a diferença entre contratar a agência e fazer o Sense Lab?</h3>
<iconify-icon className="text-xl text-neutral-400 group-hover:text-[#B60303] transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<p className="text-[#515151] font-light leading-relaxed pr-8">Na agência, a Sense executa junto com você: estratégia, conteúdo e acompanhamento contínuo. No Sense Lab, você aprende o método e aplica no seu próprio negócio, com suporte de 30 dias para tirar dúvidas.</p>
</div>

<div className="border-t border-black py-8 group cursor-pointer">
<div className="flex justify-between items-center mb-3">
<h3 className="text-lg font-medium text-black group-hover:text-[#B60303] transition-colors">Por onde começo se não sei qual serviço é o certo para mim?</h3>
<iconify-icon className="text-xl text-neutral-400 group-hover:text-[#B60303] transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<p className="text-[#515151] font-light leading-relaxed pr-8">Fale com a equipe Sense. O primeiro passo é entender o momento do seu negócio e indicar o caminho mais adequado.</p>
</div>

<div className="border-t border-black py-8 group cursor-pointer">
<div className="flex justify-between items-center mb-3">
<h3 className="text-lg font-medium text-black group-hover:text-[#B60303] transition-colors">O Sense Lab funciona para quem está começando do zero?</h3>
<iconify-icon className="text-xl text-neutral-400 group-hover:text-[#B60303] transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<p className="text-[#515151] font-light leading-relaxed pr-8">Sim. Se você ainda não tem clientes ou está nos primeiros passos, o método te ajuda a construir a base estratégica certa desde o início.</p>
</div>

<div className="border-t border-black py-8 group cursor-pointer">
<div className="flex justify-between items-center mb-3">
<h3 className="text-lg font-medium text-black group-hover:text-[#B60303] transition-colors">Vocês atendem fora do interior de SP?</h3>
<iconify-icon className="text-xl text-neutral-400 group-hover:text-[#B60303] transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<p className="text-[#515151] font-light leading-relaxed pr-8">Sim. Atendemos clientes em diferentes estados do Brasil e também no exterior.</p>
</div>
</div>
<div className="border-t border-black w-full mt-0"></div>
</div>
</section>

<footer className="bg-black text-white py-12 px-6 text-center">
<div className="flex justify-center items-center gap-2 text-base opacity-50 font-serif mb-4">
<span>☽</span><span>◯</span><span>☾</span>
</div>
<p className="text-xs uppercase tracking-widest text-neutral-500 font-serif">Sense Marketing</p>
</footer>

    </>
  );
}
