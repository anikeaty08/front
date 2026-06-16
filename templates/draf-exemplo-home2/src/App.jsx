import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



{
"@context": "https://schema.org",
"@type": "ProfessionalService",
"name": "DRAF Arquitectos / Alma Turquesa, Lda.",
"image": "https://draf.pt/logo.png",
"@id": "https://draf.pt",
"url": "https://draf.pt",
"telephone": "+351 296 382 553",
"address": {
"@type": "PostalAddress",
"streetAddress": "Rua das Laranjeiras, 31 fração A",
"addressLocality": "Ponta Delgada",
"addressRegion": "Ilha de São Miguel, Açores",
"postalCode": "9504-536",
"addressCountry": "PT"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 37.7394,
"longitude": -25.6687
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // State
        let currentTheme = 'arq'; // 'arq' or 'studio'
        
        // Elements
        const toggleContainer = document.getElementById('ecosystem-toggle');
        const sections = document.querySelectorAll('.page-section');
        const navItems = document.querySelectorAll('.nav-item');

        // Theme Toggle Logic
        toggleContainer.addEventListener('click', () => {
            if (currentTheme === 'arq') {
                setThemeState('studio');
            } else {
                setThemeState('arq');
            }
        });

        function setThemeState(theme) {
            currentTheme = theme;
            if (theme === 'studio') {
                document.body.classList.add('theme-studio');
                // If on a page that doesn't make sense in studio mode, redirect to studio hub
                const activePage = document.querySelector('.page-section.active').id;
                if(activePage === 'page-home') navigate('studio');
            } else {
                document.body.classList.remove('theme-studio');
                const activePage = document.querySelector('.page-section.active').id;
                if(activePage === 'page-studio') navigate('home');
            }
        }

        // Navigation Logic (SPA)
        function navigate(pageId) {
            // Hide all sections
            sections.forEach(sec => {
                sec.classList.remove('active');
            });
            
            // Show target section
            const target = document.getElementById(`page-${pageId}`);
            if (target) {
                target.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            // Sync theme with page context if needed (e.g., forcing theme when directly navigating)
            if (pageId === 'studio' && currentTheme !== 'studio') {
                setThemeState('studio');
            } else if (pageId === 'home' && currentTheme !== 'arq') {
                setThemeState('arq');
            }
        }

        // Initialize state based on URL hash (simple routing)
        window.addEventListener('load', () => {
            const hash = window.location.hash.replace('#', '');
            if (['home', 'method', 'services', 'projects', 'studio', 'about', 'contact'].includes(hash)) {
                navigate(hash);
            } else {
                navigate('home');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 w-full z-50 bg-theme-nav border-b border-theme transition-colors duration-400">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex-shrink-0 cursor-pointer" onclick="navigate('home')">
<span className="font-serif text-xl tracking-tight font-medium">DRAF</span>
</div>

<div className="hidden sm:flex ml-8">
<div className="toggle-container w-48" id="ecosystem-toggle">
<div className="toggle-pill"></div>
<span className="toggle-label arq">Arquitectos</span>
<span className="toggle-label studio">Studio</span>
</div>
</div>

<nav className="hidden md:flex space-x-6 ml-auto mr-6 text-sm" id="main-nav">
<button className="nav-item hover:text-theme-accent transition-colors" id="nav-projects" onclick="navigate('projects')">Projectos</button>
<button className="nav-item hover:text-theme-accent transition-colors" id="nav-services" onclick="navigate('services')">Serviços</button>
<button className="nav-item hover:text-theme-accent transition-colors" id="nav-method" onclick="navigate('method')">Método</button>
<button className="nav-item hover:text-theme-accent transition-colors" id="nav-studio" onclick="navigate('studio')">DRAF Studio</button>
<button className="nav-item hover:text-theme-accent transition-colors" id="nav-about" onclick="navigate('about')">Sobre Nós</button>
<button className="nav-item hover:text-theme-accent transition-colors" id="nav-contact" onclick="navigate('contact')">Contactos</button>
</nav>

<div className="flex items-center space-x-4">
<button className="text-xs font-medium text-theme-muted hover:text-theme-main transition-colors">PT <span className="opacity-50 font-light">| EN</span></button>
<button aria-label="Menu" className="md:hidden text-theme-main p-1">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<main className="flex-grow pt-16" id="app-content">

<section className="page-section active pb-24" id="page-home">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-16">
<div className="max-w-3xl">
<h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-6">
                        Desenhamos espaços e objectos com rigor técnico e sensibilidade material.
                    </h1>
<p className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed mb-8">
                        Baseados em Ponta Delgada, Açores. O nosso ecossistema integra arquitectura, design de interiores, sustentabilidade e produção artesanal in-house para criar ambientes coerentes e duradouros.
                    </p>
<button className="inline-flex items-center space-x-2 text-sm font-medium border-b border-theme pb-1 hover:text-theme-accent hover:border-theme-accent transition-colors" onclick="navigate('method')">
<span>Conhecer o nosso método</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer" onclick="navigate('projects')">
<div className="aspect-[4/3] bg-theme-surface overflow-hidden rounded-sm relative">
<img alt="Arquitectura" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="font-serif text-xl tracking-tight mb-1">DRAF Arquitectos</h3>
<p className="text-sm text-theme-muted">Projectos de Arquitectura, Reabilitação e Interiores.</p>
</div>
<iconify-icon className="text-theme-muted group-hover:text-theme-main transition-colors" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer" onclick="setThemeState('studio')">
<div className="aspect-[4/3] bg-theme-surface overflow-hidden rounded-sm relative">
<img alt="Cerâmica" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="font-serif text-xl tracking-tight mb-1">DRAF Studio / Alma Turquesa</h3>
<p className="text-sm text-theme-muted">Cerâmica artesanal, carpintaria e colecções Montessori.</p>
</div>
<iconify-icon className="text-theme-muted group-hover:text-theme-main transition-colors" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="page-section py-24" id="page-method">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16 border-b border-theme pb-8">
<span className="text-xs uppercase tracking-widest text-theme-muted mb-4 block">O Nosso Método</span>
<h1 className="font-serif text-3xl sm:text-4xl tracking-tight mb-6">Uma abordagem transversal, guiada pela evidência e sensibilidade ao lugar.</h1>
<p className="text-theme-muted leading-relaxed">
                        Acreditamos que a qualidade arquitectónica advém de um processo estruturado. Desde a viabilidade inicial até à pormenorização da carpintaria, garantimos um acompanhamento próximo, integrando a sustentabilidade (nZEB) como princípio basilar e não como acessório.
                    </p>
</div>
<div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-theme-surface">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-theme bg-theme-base text-xs font-medium shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">01</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-theme-surface p-6 rounded-sm">
<h3 className="font-serif text-lg tracking-tight mb-2">Consultoria Estratégica &amp; Viabilidade</h3>
<p className="text-sm text-theme-muted">Análise do local, levantamento regulamentar, apoio a incentivos e definição do programa preliminar.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-theme bg-theme-base text-xs font-medium shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">02</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-theme-surface p-6 rounded-sm">
<h3 className="font-serif text-lg tracking-tight mb-2">Estudo Prévio &amp; Licenciamento</h3>
<p className="text-sm text-theme-muted">Desenvolvimento conceptual, modelação 3D, integração de especialidades e submissão às entidades competentes.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-theme bg-theme-base text-xs font-medium shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">03</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-theme-surface p-6 rounded-sm">
<h3 className="font-serif text-lg tracking-tight mb-2">Projecto de Execução</h3>
<p className="text-sm text-theme-muted">Pormenorização construtiva, cadernos de encargos, mapa de quantidades e design de interiores detalhado.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-theme bg-theme-base text-xs font-medium shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">04</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-theme-surface p-6 rounded-sm">
<h3 className="font-serif text-lg tracking-tight mb-2">Acompanhamento de Obra &amp; Studio</h3>
<p className="text-sm text-theme-muted">Assistência técnica em obra e produção in-house de peças cerâmicas e mobiliário à medida.</p>
</div>
</div>
</div>
</div>
</section>

<section className="page-section py-24" id="page-services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 className="font-serif text-3xl sm:text-4xl tracking-tight mb-12 text-center">Áreas de Actuação</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="border border-theme bg-theme-base p-8 hover:bg-theme-surface transition-colors rounded-sm flex flex-col h-full">
<iconify-icon className="mb-6 text-theme-muted" icon="solar:home-angle-linear" width="32"></iconify-icon>
<h3 className="font-serif text-xl tracking-tight mb-3">Arquitectura e Urbanismo</h3>
<p className="text-sm text-theme-muted mb-6 flex-grow">Desde a habitação unifamiliar a complexos hoteleiros. Desenvolvemos projectos com forte identidade local e integração paisagística nos Açores.</p>
<ul className="text-xs text-theme-muted space-y-2">
<li className="flex items-center"><iconify-icon className="mr-2" icon="solar:check-circle-linear"></iconify-icon> Habitação &amp; Turismo</li>
<li className="flex items-center"><iconify-icon className="mr-2" icon="solar:check-circle-linear"></iconify-icon> Espaços de Trabalho</li>
</ul>
</div>

<div className="border border-theme bg-theme-base p-8 hover:bg-theme-surface transition-colors rounded-sm flex flex-col h-full">
<iconify-icon className="mb-6 text-theme-muted" icon="solar:buildings-linear" width="32"></iconify-icon>
<h3 className="font-serif text-xl tracking-tight mb-3">Reabilitação</h3>
<p className="text-sm text-theme-muted mb-6 flex-grow">Diagnóstico estrutural e patológico. Preservação do património edificado adaptado às exigências de conforto contemporâneas.</p>
<ul className="text-xs text-theme-muted space-y-2">
<li className="flex items-center"><iconify-icon className="mr-2" icon="solar:check-circle-linear"></iconify-icon> Conservação</li>
<li className="flex items-center"><iconify-icon className="mr-2" icon="solar:check-circle-linear"></iconify-icon> Adaptação de Uso</li>
</ul>
</div>

<div className="border border-theme bg-theme-base p-8 hover:bg-theme-surface transition-colors rounded-sm flex flex-col h-full">
<iconify-icon className="mb-6 text-theme-muted" icon="solar:armchair-linear" width="32"></iconify-icon>
<h3 className="font-serif text-xl tracking-tight mb-3">Design de Interiores</h3>
<p className="text-sm text-theme-muted mb-6 flex-grow">Concepção de ambientes holísticos. Lighting design, curadoria de arte e desenho de mobiliário bespoke produzido pelo nosso Studio.</p>
</div>

<div className="border border-theme bg-theme-base p-8 hover:bg-theme-surface transition-colors rounded-sm flex flex-col h-full">
<iconify-icon className="mb-6 text-theme-muted" icon="solar:leaf-linear" width="32"></iconify-icon>
<h3 className="font-serif text-xl tracking-tight mb-3">Consultoria de Construção Sustentável</h3>
<p className="text-sm text-theme-muted mb-6 flex-grow">Abordagem matricial para edifícios de necessidades quase nulas (nZEB). Optimização passiva, materiais locais e eficiência hídrica/energética.</p>
</div>

<div className="border border-theme bg-theme-base p-8 hover:bg-theme-surface transition-colors rounded-sm flex flex-col h-full lg:col-span-2">
<div className="md:flex gap-8 h-full">
<div className="md:w-1/2">
<iconify-icon className="mb-6 text-theme-muted" icon="solar:chart-square-linear" width="32"></iconify-icon>
<h3 className="font-serif text-xl tracking-tight mb-3">Consultoria Estratégica &amp; Engenharias</h3>
<p className="text-sm text-theme-muted mb-6">Apoio ao investimento imobiliário e turístico nos Açores. Coordenação integral de especialidades para garantir a coerência do projecto de arquitectura.</p>
</div>
<div className="md:w-1/2 bg-theme-surface p-6 rounded-sm flex flex-col justify-center">
<p className="text-sm italic text-theme-muted">"A integração de todas as disciplinas num único pólo criativo permite-nos controlar a qualidade, os custos e os prazos, eliminando as fricções habituais do processo construtivo."</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section py-16" id="page-projects">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div>
<h1 className="font-serif text-3xl sm:text-4xl tracking-tight mb-4">Projectos</h1>
<p className="text-theme-muted text-sm max-w-lg">Obras seleccionadas. A nossa prática foca-se na escala humana e no detalhe material.</p>
</div>

<div className="mt-6 md:mt-0 flex flex-wrap gap-2">
<button className="px-3 py-1 text-xs font-medium border border-theme rounded-full bg-theme-main">Todos</button>
<button className="px-3 py-1 text-xs font-medium border border-theme rounded-full text-theme-muted hover:text-theme-main transition-colors">Turismo</button>
<button className="px-3 py-1 text-xs font-medium border border-theme rounded-full text-theme-muted hover:text-theme-main transition-colors">Reabilitação</button>
<button className="px-3 py-1 text-xs font-medium border border-theme rounded-full text-theme-muted hover:text-theme-main transition-colors">Interiores</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="aspect-[4/5] bg-theme-surface overflow-hidden mb-4 relative">
<img alt="Casa nas Laranjeiras" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&amp;w=1374&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h2 className="font-serif text-lg tracking-tight">Casa nas Laranjeiras</h2>
<p className="text-xs text-theme-muted mt-1">Reabilitação • Ponta Delgada</p>
</div>
</div>
</article>

<article className="group cursor-pointer">
<div className="aspect-[4/5] bg-theme-surface overflow-hidden mb-4 relative">
<img alt="Boutique Hotel Furnas" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h2 className="font-serif text-lg tracking-tight">Eco-Hotel Sete Cidades</h2>
<p className="text-xs text-theme-muted mt-1">Turismo &amp; Interiores • São Miguel</p>
</div>
</div>
</article>

<article className="group cursor-pointer">
<div className="aspect-[4/5] bg-theme-surface overflow-hidden mb-4 relative">
<img alt="Clínica Médica" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&amp;w=1374&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h2 className="font-serif text-lg tracking-tight">Clínica Avenida</h2>
<p className="text-xs text-theme-muted mt-1">Espaços de Saúde • Açores</p>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="page-section py-0" id="page-studio">

<div className="bg-theme-surface pt-24 pb-16 border-b border-theme">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<span className="text-xs uppercase tracking-widest text-theme-muted mb-4 block">Alma Turquesa, Lda.</span>
<h1 className="font-serif text-4xl sm:text-5xl tracking-tight mb-6">Laboratório de Matéria e Forma</h1>
<p className="text-sm sm:text-base text-theme-muted max-w-2xl mx-auto leading-relaxed">
                        O DRAF Studio é o nosso espaço de experimentação física. Desenvolvemos peças de cerâmica utilitária e decorativa, mobiliário à medida e a nossa exclusiva Colecção Montessori. Produção manual, local e de pequena escala.
                    </p>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="flex flex-col sm:flex-row justify-between items-center mb-10 border-b border-theme pb-4">
<h2 className="font-serif text-2xl tracking-tight mb-4 sm:mb-0">Catálogo de Referência</h2>

<div className="flex space-x-4 text-sm">
<button className="text-theme-main font-medium border-b border-theme-main">Todos</button>
<button className="text-theme-muted hover:text-theme-main transition-colors">Cerâmica</button>
<button className="text-theme-muted hover:text-theme-main transition-colors">Carpintaria</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">

<div className="group">
<div className="aspect-square bg-theme-surface overflow-hidden mb-3 relative rounded-sm">
<img alt="Jarra Vulcão" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-sm font-medium">Jarra Vulcão</h3>
<p className="text-xs text-theme-muted mb-2">Grés texturado • 25cm</p>
<button className="text-xs text-theme-accent hover:underline transition-colors">Solicitar encomenda</button>
</div>

<div className="group">
<div className="aspect-square bg-theme-surface overflow-hidden mb-3 relative rounded-sm">
<img alt="Cadeira Lounge" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-sm font-medium">Cadeira Lounge "Ilhéu"</h3>
<p className="text-xs text-theme-muted mb-2">Criptoméria e linho</p>
<button className="text-xs text-theme-accent hover:underline transition-colors">Solicitar encomenda</button>
</div>

<div className="group">
<div className="aspect-square bg-theme-surface overflow-hidden mb-3 relative rounded-sm">
<img alt="Torre de Aprendizagem" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="text-sm font-medium">Torre Montessori</h3>
<p className="text-xs text-theme-muted mb-2">Contraplacado de Bétula</p>
<button className="text-xs text-theme-accent hover:underline transition-colors">Solicitar encomenda</button>
</div>

<div className="group">
<div className="aspect-square bg-theme-surface overflow-hidden mb-3 relative rounded-sm flex items-center justify-center p-6 text-center border border-dashed border-theme">
<div className="text-theme-muted">
<iconify-icon className="mb-2 mx-auto" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
<span className="text-sm block">Peça à medida</span>
</div>
</div>
<h3 className="text-sm font-medium">Design Bespoke</h3>
<p className="text-xs text-theme-muted mb-2">Desenvolvimento personalizado</p>
<button className="text-xs text-theme-accent hover:underline transition-colors">Preencher formulário</button>
</div>
</div>

<div className="mt-24 max-w-2xl mx-auto bg-theme-surface p-8 rounded-sm border border-theme">
<h3 className="font-serif text-2xl tracking-tight mb-2">Encomenda Personalizada</h3>
<p className="text-sm text-theme-muted mb-6">Descreva o que procura. Entraremos em contacto para discutir materiais, dimensões e orçamentação.</p>
<form className="space-y-4 text-sm">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs text-theme-muted mb-1">Nome</label>
<input className="w-full bg-theme-base border border-theme rounded-sm px-3 py-2 focus:outline-none focus:ring-1 ring-theme-accent transition-shadow" type="text"/>
</div>
<div>
<label className="block text-xs text-theme-muted mb-1">Email</label>
<input className="w-full bg-theme-base border border-theme rounded-sm px-3 py-2 focus:outline-none focus:ring-1 ring-theme-accent transition-shadow" type="email"/>
</div>
</div>
<div>
<label className="block text-xs text-theme-muted mb-1">Tipo de Peça</label>
<div className="relative">
<select className="w-full bg-theme-base border border-theme rounded-sm px-3 py-2 appearance-none focus:outline-none focus:ring-1 ring-theme-accent text-theme-main">
<option>Cerâmica Utilitária</option>
<option>Cerâmica Decorativa</option>
<option>Mobiliário</option>
<option>Colecção Montessori</option>
<option>Outro (Bespoke)</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-theme-muted pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs text-theme-muted mb-1">Descrição &amp; Dimensões Estimadas</label>
<textarea className="w-full bg-theme-base border border-theme rounded-sm px-3 py-2 focus:outline-none focus:ring-1 ring-theme-accent transition-shadow" rows="3"></textarea>
</div>
<div className="flex items-center space-x-2 pt-2">
<input className="custom-checkbox" id="terms" type="checkbox"/>
<label className="text-xs text-theme-muted" htmlFor="terms">Compreendo que se trata de uma produção artesanal sujeita a prazos específicos.</label>
</div>
<button className="mt-4 bg-theme-cta w-full py-2.5 rounded-sm font-medium hover:opacity-90 transition-opacity" type="button">Enviar Pedido</button>
</form>
</div>
</div>
</section>

<section className="page-section py-24" id="page-about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h1 className="font-serif text-3xl sm:text-4xl tracking-tight mb-6">Sobre a DRAF</h1>
<div className="space-y-4 text-theme-muted text-sm leading-relaxed">
<p>Fundada em 2016, a DRAF iniciou a sua jornada focada em projectos de reabilitação e interiores. Em 2022, a transferência definitiva para Ponta Delgada, na Ilha de São Miguel, marcou o início de uma nova fase: a criação de um estúdio multidisciplinar com fortes raízes locais.</p>
<p>Operamos através de duas frentes interligadas: a DRAF Arquitectos, dedicada à prestação de serviços de arquitectura, engenharia e consultoria; e a Alma Turquesa, Lda. (DRAF Studio), vocacionada para a produção artesanal, cerâmica e design de produto.</p>
<p>Esta dualidade permite-nos oferecer aos nossos clientes soluções chave-na-mão, desde o planeamento territorial até à textura da chávena de café sobre a mesa desenhada à medida.</p>
</div>
</div>
<div className="grid gap-8">

<div className="flex gap-4 p-6 bg-theme-surface rounded-sm border border-theme">
<div className="w-16 h-16 rounded-full bg-theme-tint overflow-hidden shrink-0 border border-theme">
<div className="w-full h-full flex items-center justify-center text-theme-muted font-serif">DR</div>
</div>
<div>
<h3 className="font-serif text-lg tracking-tight">Daniel Rego</h3>
<p className="text-xs text-theme-muted mb-2">Arquitecto Cofundador</p>
<p className="text-xs text-theme-muted leading-relaxed">Com vasta experiência em reabilitação e coordenação de especialidades, foca a sua prática na eficiência construtiva e consultoria estratégica em processos de licenciamento complexos nos Açores.</p>
</div>
</div>

<div className="flex gap-4 p-6 bg-theme-surface rounded-sm border border-theme">
<div className="w-16 h-16 rounded-full bg-theme-tint overflow-hidden shrink-0 border border-theme">
<div className="w-full h-full flex items-center justify-center text-theme-muted font-serif">AF</div>
</div>
<div>
<h3 className="font-serif text-lg tracking-tight">Ana Fernandes</h3>
<p className="text-xs text-theme-muted mb-2">Arquitecta Cofundadora &amp; Ceramista</p>
<p className="text-xs text-theme-muted leading-relaxed">Une a arquitectura ao design de interiores e à produção artesanal. A sua investigação centra-se na materialidade, ergonomia (design Montessori) e sustentabilidade dos espaços interiores.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section py-24" id="page-contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h1 className="font-serif text-3xl sm:text-4xl tracking-tight mb-6">Contactos</h1>
<p className="text-sm text-theme-muted mb-12 max-w-md">O nosso estúdio opera a partir de Ponta Delgada. Recebemos visitas para reuniões de projecto ou para conhecer o DRAF Studio mediante marcação prévia.</p>
<div className="space-y-8">
<div className="flex items-start">
<iconify-icon className="mr-4 text-theme-muted mt-0.5" icon="solar:map-point-linear" width="24"></iconify-icon>
<div>
<h4 className="text-sm font-medium mb-1">Morada</h4>
<address className="text-sm text-theme-muted not-italic">
                                        Rua das Laranjeiras, 31 fração A<br/>
                                        9504-536 Ponta Delgada<br/>
                                        Ilha de São Miguel, Açores, Portugal
                                    </address>
</div>
</div>
<div className="flex items-start">
<iconify-icon className="mr-4 text-theme-muted mt-0.5" icon="solar:phone-linear" width="24"></iconify-icon>
<div>
<h4 className="text-sm font-medium mb-1">Telefone</h4>
<p className="text-sm text-theme-muted"><a className="hover:text-theme-main transition-colors" href="tel:+351296382553">+351 296 382 553</a></p>
<p className="text-xs text-theme-muted mt-1 opacity-70">Dias úteis, 09:30 - 18:00 (Hora Açores)</p>
</div>
</div>
<div className="flex items-start">
<iconify-icon className="mr-4 text-theme-muted mt-0.5" icon="solar:letter-linear" width="24"></iconify-icon>
<div>
<h4 className="text-sm font-medium mb-1">Emails</h4>
<p className="text-sm text-theme-muted">Arquitectura: <a className="hover:text-theme-main transition-colors" href="mailto:geral@draf.pt">geral@draf.pt</a></p>
<p className="text-sm text-theme-muted">Studio/Encomendas: <a className="hover:text-theme-main transition-colors" href="mailto:studio@draf.pt">studio@draf.pt</a></p>
</div>
</div>
</div>
</div>

<div className="bg-theme-surface border border-theme p-2 rounded-sm h-[400px] lg:h-auto w-full relative">
<div className="absolute inset-0 m-2 bg-theme-tint flex flex-col items-center justify-center text-theme-muted transition-colors">
<iconify-icon className="mb-2 opacity-50" icon="solar:map-linear" width="48"></iconify-icon>
<span className="text-xs">Integração Google Maps: Ponta Delgada, Açores</span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-theme-surface border-t border-theme py-12 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-theme-muted">
<div className="mb-4 md:mb-0 text-center md:text-left">
                    © 2024 DRAF Arquitectos / Alma Turquesa, Lda.<br/>
<span className="opacity-70">Ponta Delgada, Ilha de São Miguel, Açores.</span>
</div>
<div className="flex flex-wrap justify-center gap-4">
<a className="hover:text-theme-main transition-colors" href="#">Política de Privacidade</a>
<a className="hover:text-theme-main transition-colors" href="#">Termos e Condições</a>
<a className="hover:text-theme-main transition-colors" href="#">Política de Cookies</a>
<a className="hover:text-theme-main transition-colors" href="https://www.livroreclamacoes.pt/" rel="noopener" target="_blank">Livro de Reclamações</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
