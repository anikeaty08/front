import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
selene: {
bg: '#050505',
card: '#0A0A0A',
border: '#1F1F1F',
text: '#A1A1AA',
heading: '#EDEDED',
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-selene-bg/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-xl flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
                SELENE
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#sobre">Sobre</a>
<a className="hover:text-white transition-colors" href="#produtos">Produtos</a>
<a className="hover:text-white transition-colors" href="#engenharia">Engenharia</a>
<a className="text-white border border-white/10 bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition-colors" href="#contato">Falar com a Selene</a>
</div>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-white/80 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Software, Hardware &amp; Inteligência Artificial
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-selene-heading mb-8 leading-[1.1]">
                    Engenharia de produtos para <span className="text-white/40">contextos críticos.</span>
</h1>
<p className="text-lg md:text-xl text-selene-text max-w-2xl leading-relaxed mb-10 font-light">
                    Da saúde à educação, do esporte à engenharia regulatória, transformamos ideias complexas em soluções reais, seguras e escaláveis.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group" href="#contato">
                        Falar com a Selene
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 border border-white/10 text-white font-medium rounded-full hover:bg-white/5 transition-all flex items-center justify-center" href="#atuacao">
                        Conhecer atuações
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="sobre">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 md:gap-24">
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white leading-tight">
                        Uma casa de produtos.<br/>
<span className="text-selene-text">Não apenas uma fábrica de software.</span>
</h2>
</div>
<div className="space-y-8">
<p className="text-lg font-light leading-relaxed">
                        A Selene nasce da prática e do campo. Somos uma casa de produtos de tecnologia que une software, hardware e inteligência artificial para resolver problemas reais, em ambientes onde engenharia, pessoas e normas caminham juntas.
                    </p>
<p className="text-base text-selene-text leading-relaxed">
                        Criamos produtos próprios e atuamos como parceiros de desenvolvimento para empresas que precisam estruturar, validar, certificar e escalar soluções tecnológicas com responsabilidade técnica e visão de longo prazo.
                    </p>
<ul className="space-y-3 mt-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-1 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm">Do conceito ao produto em operação</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-1 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm">Integração real entre software, hardware e IA</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-1 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm">Atuação em saúde, educação, esportes e engenharia</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-1 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm">Vivência em ambientes regulados e certificações</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-selene-card/50 relative" id="atuacao">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<span className="text-xs font-mono text-white/50 uppercase tracking-wider">Onde Atuamos</span>
<h2 className="text-3xl font-medium text-white tracking-tight mt-4">Tecnologia encontrando a vida real</h2>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="group relative overflow-hidden bg-selene-bg border border-selene-border rounded-2xl p-8 md:p-12 hover:border-white/20 transition-all duration-500">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon height="64" icon="solar:football-linear" width="64"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Selene Sports • DataFut</h3>
<p className="text-sm text-emerald-400 mb-6 font-mono">Dados &amp; Performance</p>
<p className="text-selene-text leading-relaxed">
                            Desenvolvemos plataformas que transformam dados em leitura de jogo, engajamento e vantagem competitiva para profissionais, clubes e apaixonados pelo esporte.
                        </p>
</div>
</div>

<div className="group relative overflow-hidden bg-selene-bg border border-selene-border rounded-2xl p-8 md:p-12 hover:border-white/20 transition-all duration-500">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon height="64" icon="solar:settings-minimalistic-linear" width="64"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Selene Engenharia &amp; Certificação</h3>
<p className="text-sm text-blue-400 mb-6 font-mono">Crítico &amp; Regulatório</p>
<p className="text-selene-text leading-relaxed">
                            Apoiamos empresas na jornada de projetar, testar e certificar equipamentos e sistemas, integrando requisitos técnicos, normativos e de mercado desde o início.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="produtos">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-mono text-white/50 uppercase tracking-wider">Produtos da Casa</span>
<h2 className="text-3xl font-medium text-white tracking-tight mt-4 mb-4">Produtos que evoluem no mundo real</h2>
<p className="text-selene-text">Criamos e mantemos produtos próprios que refletem nossa visão de engenharia, design e uso prático.</p>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="bg-selene-card border border-selene-border rounded-2xl p-8 flex flex-col hover:bg-white/[0.02] transition-colors">
<div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6">
<iconify-icon icon="solar:heart-pulse-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Selene Fit</h3>
<p className="text-sm text-selene-text leading-relaxed mb-6 flex-grow">
                        Plataforma para nutricionistas e profissionais da saúde. União de ciência, dados e experiência do paciente para planos personalizados e integração com dados metabólicos.
                    </p>
<div className="flex items-center gap-2 text-xs font-mono text-white/40 pt-6 border-t border-white/5">
<span>SAÚDE</span>
<span className="w-1 h-1 bg-white/20 rounded-full"></span>
<span>METABOLISMO</span>
</div>
</div>

<div className="bg-selene-card border border-selene-border rounded-2xl p-8 flex flex-col hover:bg-white/[0.02] transition-colors">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6">
<iconify-icon icon="solar:book-bookmark-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Selene Bloom</h3>
<p className="text-sm text-selene-text leading-relaxed mb-6 flex-grow">
                        Sistema para escolas infantis organizarem a rotina escolar de forma simples e humana. Gestão de alunos, turmas e comunicação com famílias em uma única plataforma.
                    </p>
<div className="flex items-center gap-2 text-xs font-mono text-white/40 pt-6 border-t border-white/5">
<span>EDUCAÇÃO</span>
<span className="w-1 h-1 bg-white/20 rounded-full"></span>
<span>GESTÃO</span>
</div>
</div>

<div className="bg-selene-card border border-selene-border rounded-2xl p-8 flex flex-col hover:bg-white/[0.02] transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6">
<iconify-icon icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">DataFut</h3>
<p className="text-sm text-selene-text leading-relaxed mb-6 flex-grow">
                        Plataforma para transformar dados de futebol em entendimento qualificado. Estatísticas e experiências digitais para quem vive o jogo dentro e fora do campo.
                    </p>
<div className="flex items-center gap-2 text-xs font-mono text-white/40 pt-6 border-t border-white/5">
<span>ESPORTES</span>
<span className="w-1 h-1 bg-white/20 rounded-full"></span>
<span>ANALYTICS</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<span className="text-xs font-mono text-white/50 uppercase tracking-wider">Como Trabalhamos</span>
<h2 className="text-3xl font-medium text-white tracking-tight mt-4 mb-6">Parceria de produto,<br/>não apenas entrega técnica.</h2>
<p className="text-selene-text leading-relaxed mb-8">
                        Entramos como parceiros de engenharia. Nosso trabalho cobre todo o ciclo, da visão inicial ao produto validado e pronto para escalar.
                    </p>
</div>
<div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">

<div className="p-6 border border-white/10 rounded-xl bg-selene-bg">
<span className="text-xs font-mono text-white/30 mb-4 block">01</span>
<h4 className="text-white font-medium mb-2">Entendimento</h4>
<p className="text-sm text-selene-text">Mapeamos contexto, restrições técnicas, regulatórias e objetivos de negócio.</p>
</div>

<div className="p-6 border border-white/10 rounded-xl bg-selene-bg">
<span className="text-xs font-mono text-white/30 mb-4 block">02</span>
<h4 className="text-white font-medium mb-2">Desenho</h4>
<p className="text-sm text-selene-text">Arquitetura de software, hardware, IA e integrações, considerando viabilidade.</p>
</div>

<div className="p-6 border border-white/10 rounded-xl bg-selene-bg">
<span className="text-xs font-mono text-white/30 mb-4 block">03</span>
<h4 className="text-white font-medium mb-2">Construção</h4>
<p className="text-sm text-selene-text">Desenvolvimento, testes, pilotos e ajustes baseados em uso real.</p>
</div>

<div className="p-6 border border-white/10 rounded-xl bg-selene-bg">
<span className="text-xs font-mono text-white/30 mb-4 block">04</span>
<h4 className="text-white font-medium mb-2">Escala</h4>
<p className="text-sm text-selene-text">Apoio técnico, documentação, certificações e preparação para o crescimento.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="engenharia">
<div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 mb-6">
<iconify-icon className="text-white" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-xs font-mono text-white uppercase tracking-wider">Crítico e Regulado</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Engenharia e regulatório caminham juntos.</h2>
<p className="text-selene-text leading-relaxed mb-8">
                        Desenvolvimento de equipamentos médicos, firmware, software embarcado e plataformas de dados, com atenção constante às normas técnicas e exigências regulatórias.
                    </p>
<div className="p-6 bg-white/5 border-l-2 border-white/20 rounded-r-xl">
<p className="text-white italic font-light">
                            "Nosso foco é garantir que o seu produto não seja apenas tecnicamente sólido, mas também aprovado, seguro e pronto para operar no mundo real."
                        </p>
</div>
</div>
<div>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 border border-white/10 rounded-xl bg-selene-card hover:border-white/20 transition-colors">
<iconify-icon className="text-white shrink-0 mt-1" icon="solar:document-add-linear" width="20"></iconify-icon>
<div>
<h4 className="text-white text-sm font-medium mb-1">Normas e Conformidade</h4>
<p className="text-xs text-selene-text">Projetos com exigências de INMETRO, ANVISA e normas específicas.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 border border-white/10 rounded-xl bg-selene-card hover:border-white/20 transition-colors">
<iconify-icon className="text-white shrink-0 mt-1" icon="solar:monitor-camera-linear" width="20"></iconify-icon>
<div>
<h4 className="text-white text-sm font-medium mb-1">Dispositivos Médicos</h4>
<p className="text-xs text-selene-text">Análise metabólica, espirometria, ventilometria e correlatos.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 border border-white/10 rounded-xl bg-selene-card hover:border-white/20 transition-colors">
<iconify-icon className="text-white shrink-0 mt-1" icon="solar:test-tube-minimalistic-linear" width="20"></iconify-icon>
<div>
<h4 className="text-white text-sm font-medium mb-1">Certificação</h4>
<p className="text-xs text-selene-text">Suporte em documentação técnica, ensaios e laboratórios.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<span className="text-xs font-mono text-white/50 uppercase tracking-wider">Quem Somos</span>
<h2 className="text-3xl font-medium text-white tracking-tight mt-4 mb-16">Pessoas que vivem a tecnologia na prática.</h2>
<div className="max-w-3xl mx-auto bg-selene-card border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="flex flex-col items-center">
<div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-2xl font-medium text-white mb-6 border border-white/10">
                        SN
                    </div>
<h3 className="text-xl font-medium text-white mb-1">Sergio Nascimento</h3>
<p className="text-sm font-mono text-white/50 mb-6">Builder &amp; Engenheiro de Produtos</p>
<p className="text-selene-text leading-relaxed max-w-lg mx-auto mb-8">
                        Experiência em desenvolvimento de equipamentos médicos, plataformas digitais, IA aplicada e processos completos de certificação. Liderando uma rede de parceiros técnicos, designers e desenvolvedores.
                    </p>
<p className="text-white font-medium text-sm">
                        Aqui, cada projeto é tratado como produto. E cada produto, como responsabilidade.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02]" id="contato">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 md:gap-24">
<div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6">Vamos falar sobre o seu projeto.</h2>
<p className="text-lg text-selene-text leading-relaxed mb-8">
                        Se você tem uma ideia, um produto em construção ou um desafio técnico que precisa sair do papel, converse com a Selene.
                    </p>
<div className="flex items-center gap-3 text-emerald-400 text-sm font-medium mb-12">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        Disponível para novos desafios
                    </div>
<p className="text-sm font-mono text-white/40 uppercase tracking-wider mb-2">Frase de Segurança</p>
<p className="text-white border-l border-white/20 pl-4 py-1">Uma conversa direta, técnica, prática e sem enrolação.</p>
</div>
<div className="bg-selene-bg border border-white/10 rounded-2xl p-8">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-white/60">Nome</label>
<input className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-white focus:outline-none transition-colors text-sm" placeholder="Seu nome" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-white/60">Empresa</label>
<input className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-white focus:outline-none transition-colors text-sm" placeholder="Sua empresa" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-white/60">Email</label>
<input className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-white focus:outline-none transition-colors text-sm" placeholder="seu@email.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs text-white/60">Como podemos ajudar?</label>
<textarea className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-white focus:outline-none transition-colors text-sm resize-none" placeholder="Descreva brevemente seu desafio..." rows="3"></textarea>
</div>
<div className="pt-4 flex flex-col sm:flex-row gap-4">
<button className="flex-1 bg-white text-black font-medium py-3 rounded text-sm hover:bg-gray-200 transition-colors" type="button">
                                Enviar Mensagem
                            </button>
<button className="flex-1 border border-white/20 text-white font-medium py-3 rounded text-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2" type="button">
<iconify-icon icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
                                WhatsApp
                            </button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<a className="text-white font-medium tracking-tighter text-lg block mb-2" href="#">SELENE</a>
<p className="text-xs text-selene-text">Casa de produtos em Software, Hardware e IA.</p>
</div>
<div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-white/40">
<span>SAÚDE</span>
<span>•</span>
<span>EDUCAÇÃO</span>
<span>•</span>
<span>ESPORTES</span>
<span>•</span>
<span>ENGENHARIA</span>
</div>
<div className="text-xs text-white/20">
                © 2026 Selene Tecnologia.
            </div>
</div>
</footer>

    </>
  );
}
