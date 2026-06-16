import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Outfit', 'sans-serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });
        
        revealElements.forEach(el => revealObserver.observe(el));

        // Dark/Light Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const html = document.documentElement;
        
        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
        });

        // Language Toggle (PT/EN)
        const langToggle = document.getElementById('langToggle');
        const currentLangText = document.getElementById('currentLang');
        let currentLang = 'pt';

        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            currentLangText.textContent = currentLang.toUpperCase();
            
            document.querySelectorAll('[data-pt]').forEach(el => {
                el.textContent = el.getAttribute(`data-${currentLang}`);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-glow"></div>

<nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-xl border-b border-neutral-200 dark:border-white/5 transition-colors duration-500">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="font-heading text-neutral-950 dark:text-neutral-50 font-semibold tracking-tighter text-lg flex items-center gap-2" href="#">
<span className="bg-neutral-900 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-950 px-2 py-0.5 rounded-md text-sm transition-colors duration-500">AC</span>
                Ana Carolina
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500 dark:text-neutral-400">
<a className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors" data-en="Journey" data-pt="Trajetória" href="#sobre">Trajetória</a>
<a className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors" data-en="Projects" data-pt="Projetos" href="#projetos">Projetos</a>
<a className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors" data-en="Expertise" data-pt="Expertise" href="#skills">Expertise</a>
</div>
<div className="flex items-center gap-4">

<button className="flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-neutral-500 hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors" id="langToggle">
<iconify-icon className="text-base" icon="solar:global-linear"></iconify-icon>
<span id="currentLang">PT</span>
</button>
<div className="w-px h-4 bg-neutral-300 dark:bg-neutral-800 transition-colors duration-500"></div>

<button className="relative inline-flex h-6 w-11 items-center rounded-full bg-neutral-200 dark:bg-neutral-800 transition-colors duration-300 focus:outline-none" id="themeToggle">
<span className="sr-only">Toggle theme</span>
<span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 translate-x-1 dark:translate-x-6 shadow-sm flex items-center justify-center" id="themeToggleIndicator">
<iconify-icon className="text-[10px] text-amber-500 block dark:hidden" icon="solar:sun-bold"></iconify-icon>
<iconify-icon className="text-[10px] text-indigo-500 hidden dark:block" icon="solar:moon-bold"></iconify-icon>
</span>
</button>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-white dark:text-neutral-50 bg-neutral-950 dark:bg-white/10 hover:bg-neutral-800 dark:hover:bg-white/20 border border-transparent dark:border-white/10 px-5 py-2.5 rounded-full transition-all font-medium" data-en="Let's Talk" data-pt="Vamos conversar" href="#contato">
                    Vamos conversar
                </a>
</div>
</div>
</nav>

<section className="max-w-7xl mx-auto px-6 pt-40 pb-24 md:pt-52 md:pb-32 flex flex-col items-center text-center reveal">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-semibold mb-8 tracking-widest uppercase">
<iconify-icon icon="solar:star-fall-bold-duotone"></iconify-icon>
<span data-en="Design that drives results" data-pt="Design que gera resultados">Design que gera resultados</span>
</div>
<h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-neutral-950 dark:text-neutral-50 mb-8 leading-[1.05] max-w-5xl">
<span data-en="Strategic Design." data-pt="Design Estratégico.">Design Estratégico.</span><br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-400 dark:from-neutral-50 dark:via-neutral-300 dark:to-neutral-600" data-en="Scalable Architecture." data-pt="Arquitetura Escalável.">Arquitetura Escalável.</span>
</h1>
<p className="text-lg md:text-xl font-light text-neutral-600 dark:text-neutral-400 leading-relaxed mb-12 max-w-3xl mx-auto" data-en="Bridging the empathy of user-centric design with the robustness of software engineering to build high-impact, low-cognitive-load digital products." data-pt="Unindo a empatia do design centrado no usuário com a robustez da engenharia de software para construir produtos digitais de alto impacto e baixa carga cognitiva.">
            Unindo a empatia do design centrado no usuário com a robustez da engenharia de software para construir produtos digitais de alto impacto e baixa carga cognitiva.
        </p>
<div className="flex flex-wrap items-center justify-center gap-4">
<a className="inline-flex items-center gap-2 bg-rose-600 dark:bg-neutral-50 text-white dark:text-neutral-950 px-8 py-4 rounded-full text-sm font-semibold hover:bg-rose-700 dark:hover:bg-neutral-200 transition-colors shadow-lg shadow-rose-600/20 dark:shadow-white/10" href="#projetos">
<span data-en="Explore Projects" data-pt="Explorar Projetos">Explorar Projetos</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 reveal" id="skills">
<div className="text-center mb-16">
<h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 mb-4" data-en="Technical Arsenal" data-pt="Arsenal Técnico">Arsenal Técnico</h2>
<p className="text-neutral-500 dark:text-neutral-400 font-light max-w-2xl mx-auto" data-en="Tools and technologies I use to turn complexity into elegant solutions. Hover to understand each one." data-pt="Ferramentas e tecnologias que utilizo para transformar complexidade em soluções elegantes. Passe o mouse para entender cada uma.">
                Ferramentas e tecnologias que utilizo para transformar complexidade em soluções elegantes. Passe o mouse para entender cada uma.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<div className="bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-white/5 rounded-3xl p-8 shadow-xl shadow-neutral-200/50 dark:shadow-none transition-colors duration-500">
<div className="flex items-center gap-3 mb-8 pb-4 border-b border-neutral-100 dark:border-white/5">
<div className="w-10 h-10 rounded-full bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center text-rose-600 dark:text-rose-400">
<iconify-icon className="text-xl" icon="solar:pen-new-round-linear"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-medium text-neutral-950 dark:text-neutral-50 tracking-tight" data-en="Design &amp; Experience" data-pt="Design &amp; Experiência">Design &amp; Experiência</h3>
</div>
<div className="flex flex-wrap gap-3">

<div className="group relative cursor-help">
<span className="inline-block px-4 py-2 rounded-xl text-sm font-medium bg-neutral-100 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 transition-colors hover:border-rose-300 dark:hover:border-rose-500/50">UX/UI Design</span>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3 bg-neutral-950 dark:bg-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 shadow-2xl tooltip-arrow" style={{-TwProseBody: 'var(--tw-colors-neutral-950)'}}>
<p className="text-xs text-neutral-50 dark:text-neutral-900 text-center leading-relaxed" data-en="Planning how the user feels and interacts with the app, ensuring ease of use and aesthetics." data-pt="Planejamento de como o usuário se sente e interage com o aplicativo, garantindo facilidade e beleza.">Planejamento de como o usuário se sente e interage com o aplicativo, garantindo facilidade e beleza.</p>
</div>
</div>

<div className="group relative cursor-help">
<span className="inline-block px-4 py-2 rounded-xl text-sm font-medium bg-neutral-100 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 transition-colors hover:border-rose-300 dark:hover:border-rose-500/50">Figma</span>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3 bg-neutral-950 dark:bg-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 shadow-2xl tooltip-arrow" style={{-TwProseBody: 'var(--tw-colors-neutral-950)'}}>
<p className="text-xs text-neutral-50 dark:text-neutral-900 text-center leading-relaxed" data-en="Professional tool where I draw the screens before they are programmed." data-pt="Ferramenta profissional onde desenho as telas antes de começarem a ser programadas.">Ferramenta profissional onde desenho as telas antes de começarem a ser programadas.</p>
</div>
</div>

<div className="group relative cursor-help">
<span className="inline-block px-4 py-2 rounded-xl text-sm font-medium bg-neutral-100 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 transition-colors hover:border-rose-300 dark:hover:border-rose-500/50">Acessibilidade</span>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3 bg-neutral-950 dark:bg-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 shadow-2xl tooltip-arrow" style={{-TwProseBody: 'var(--tw-colors-neutral-950)'}}>
<p className="text-xs text-neutral-50 dark:text-neutral-900 text-center leading-relaxed" data-en="Practices to ensure the system can be used by anyone, regardless of visual or motor limitations." data-pt="Práticas para garantir que o sistema possa ser usado por qualquer pessoa, independente de limitações visuais ou motoras.">Práticas para garantir que o sistema possa ser usado por qualquer pessoa, independente de limitações visuais ou motoras.</p>
</div>
</div>
</div>
</div>

<div className="bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-white/5 rounded-3xl p-8 shadow-xl shadow-neutral-200/50 dark:shadow-none transition-colors duration-500 md:translate-y-6">
<div className="flex items-center gap-3 mb-8 pb-4 border-b border-neutral-100 dark:border-white/5">
<div className="w-10 h-10 rounded-full bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center text-rose-600 dark:text-rose-400">
<iconify-icon className="text-xl" icon="solar:monitor-smartphone-linear"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-medium text-neutral-950 dark:text-neutral-50 tracking-tight" data-en="Front-end &amp; Visual" data-pt="Front-end &amp; Visual">Front-end &amp; Visual</h3>
</div>
<div className="flex flex-wrap gap-3">
<div className="group relative cursor-help">
<span className="inline-block px-4 py-2 rounded-xl text-sm font-medium bg-neutral-100 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 transition-colors hover:border-rose-300 dark:hover:border-rose-500/50">React / Next.js</span>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3 bg-neutral-950 dark:bg-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 shadow-2xl tooltip-arrow">
<p className="text-xs text-neutral-50 dark:text-neutral-900 text-center leading-relaxed" data-en="Modern technologies to build the visual part of the site quickly and interactively." data-pt="Tecnologias modernas para construir a parte visual do site de forma rápida e interativa.">Tecnologias modernas para construir a parte visual do site de forma rápida e interativa.</p>
</div>
</div>
<div className="group relative cursor-help">
<span className="inline-block px-4 py-2 rounded-xl text-sm font-medium bg-neutral-100 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 transition-colors hover:border-rose-300 dark:hover:border-rose-500/50">Tailwind CSS</span>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3 bg-neutral-950 dark:bg-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 shadow-2xl tooltip-arrow">
<p className="text-xs text-neutral-50 dark:text-neutral-900 text-center leading-relaxed" data-en="Tool that allows styling and coloring the site in an incredibly flexible and standardized way." data-pt="Ferramenta que permite estilizar e colorir o site de maneira incrivelmente flexível e padronizada.">Ferramenta que permite estilizar e colorir o site de maneira incrivelmente flexível e padronizada.</p>
</div>
</div>
<div className="group relative cursor-help">
<span className="inline-block px-4 py-2 rounded-xl text-sm font-medium bg-neutral-100 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 transition-colors hover:border-rose-300 dark:hover:border-rose-500/50">TypeScript</span>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3 bg-neutral-950 dark:bg-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 shadow-2xl tooltip-arrow">
<p className="text-xs text-neutral-50 dark:text-neutral-900 text-center leading-relaxed" data-en="Language that adds strict rules to the code, preventing errors even before the site goes live." data-pt="Linguagem que adiciona regras rígidas ao código, evitando erros antes mesmo do site ir ao ar.">Linguagem que adiciona regras rígidas ao código, evitando erros antes mesmo do site ir ao ar.</p>
</div>
</div>
</div>
</div>

<div className="bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-white/5 rounded-3xl p-8 shadow-xl shadow-neutral-200/50 dark:shadow-none transition-colors duration-500">
<div className="flex items-center gap-3 mb-8 pb-4 border-b border-neutral-100 dark:border-white/5">
<div className="w-10 h-10 rounded-full bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center text-rose-600 dark:text-rose-400">
<iconify-icon className="text-xl" icon="solar:server-square-linear"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-medium text-neutral-950 dark:text-neutral-50 tracking-tight" data-en="Logic &amp; Back-end" data-pt="Lógica &amp; Back-end">Lógica &amp; Back-end</h3>
</div>
<div className="flex flex-wrap gap-3">
<div className="group relative cursor-help">
<span className="inline-block px-4 py-2 rounded-xl text-sm font-medium bg-neutral-100 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 transition-colors hover:border-rose-300 dark:hover:border-rose-500/50">Node.js / Java</span>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3 bg-neutral-950 dark:bg-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 shadow-2xl tooltip-arrow">
<p className="text-xs text-neutral-50 dark:text-neutral-900 text-center leading-relaxed" data-en="The engine behind the site, responsible for processing business rules and complex information." data-pt="O motor por trás do site, responsável por processar regras de negócio e informações complexas.">O motor por trás do site, responsável por processar regras de negócio e informações complexas.</p>
</div>
</div>
<div className="group relative cursor-help">
<span className="inline-block px-4 py-2 rounded-xl text-sm font-medium bg-neutral-100 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 transition-colors hover:border-rose-300 dark:hover:border-rose-500/50">API REST</span>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3 bg-neutral-950 dark:bg-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 shadow-2xl tooltip-arrow">
<p className="text-xs text-neutral-50 dark:text-neutral-900 text-center leading-relaxed" data-en="Communication bridge that allows the visual site to converse securely with the database." data-pt="Ponte de comunicação que permite que o site visual converse com o banco de dados com segurança.">Ponte de comunicação que permite que o site visual converse com o banco de dados com segurança.</p>
</div>
</div>
<div className="group relative cursor-help">
<span className="inline-block px-4 py-2 rounded-xl text-sm font-medium bg-neutral-100 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 transition-colors hover:border-rose-300 dark:hover:border-rose-500/50">Bancos de Dados</span>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3 bg-neutral-950 dark:bg-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 shadow-2xl tooltip-arrow">
<p className="text-xs text-neutral-50 dark:text-neutral-900 text-center leading-relaxed" data-en="Where all information, such as registrations and history, is securely stored." data-pt="Onde todas as informações, como cadastros e histórico, são guardadas de forma segura.">Onde todas as informações, como cadastros e histórico, são guardadas de forma segura.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-neutral-200 dark:border-white/5 bg-neutral-100/50 dark:bg-neutral-950/50 transition-colors duration-500 overflow-hidden reveal" id="projetos">
<div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between md:items-end gap-4">
<div>
<h2 className="font-heading text-4xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 mb-3" data-en="Success Cases" data-pt="Cases de Sucesso">Cases de Sucesso</h2>
<p className="text-neutral-500 dark:text-neutral-400 font-light" data-en="The perfect intersection between form, function, and clean code." data-pt="A intersecção perfeita entre forma, função e código limpo.">A intersecção perfeita entre forma, função e código limpo.</p>
</div>
<div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 dark:text-neutral-500 uppercase tracking-widest bg-white dark:bg-neutral-900 px-4 py-2 rounded-full border border-neutral-200 dark:border-white/5 w-fit">
<span data-en="Infinite Scroll" data-pt="Scroll Infinito">Scroll Infinito</span> <iconify-icon className="text-sm" icon="solar:infinity-linear"></iconify-icon>
</div>
</div>
<div className="relative w-full overflow-hidden">

<div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-neutral-100/50 dark:from-neutral-950/50 to-transparent z-10"></div>
<div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-neutral-100/50 dark:from-neutral-950/50 to-transparent z-10"></div>
<div className="animate-marquee gap-6 py-4">

<div className="flex gap-6 pl-6">

<div className="w-[380px] bg-white dark:bg-neutral-900/60 rounded-3xl p-8 flex flex-col justify-between border border-neutral-200 dark:border-white/5 shadow-lg shadow-neutral-200/40 dark:shadow-none hover:border-rose-400 dark:hover:border-rose-500/40 transition-colors shrink-0">
<div>
<div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-neutral-950 border border-rose-100 dark:border-neutral-800 flex items-center justify-center text-rose-600 dark:text-rose-400 mb-8">
<iconify-icon className="text-3xl" icon="solar:heart-pulse-bold-duotone"></iconify-icon>
</div>
<h3 className="font-heading text-2xl font-semibold text-neutral-950 dark:text-neutral-50 mb-3 tracking-tight">CASI Saúde</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed mb-8" data-en="Geriatric clinical management system prioritizing accessibility and visual clarity for the elderly." data-pt="Sistema de gestão clínica geriátrica priorizando acessibilidade e clareza visual para a terceira idade.">
                                Sistema de gestão clínica geriátrica priorizando acessibilidade e clareza visual para a terceira idade.
                            </p>
</div>
<div className="flex flex-wrap gap-2">
<span className="text-xs px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 font-medium">UX/UI</span>
<span className="text-xs px-3 py-1.5 rounded-lg bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-500/20 font-medium">Acessibilidade</span>
</div>
</div>

<div className="w-[380px] bg-white dark:bg-neutral-900/60 rounded-3xl p-8 flex flex-col justify-between border border-neutral-200 dark:border-white/5 shadow-lg shadow-neutral-200/40 dark:shadow-none hover:border-rose-400 dark:hover:border-rose-500/40 transition-colors shrink-0">
<div>
<div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-neutral-950 border border-indigo-100 dark:border-neutral-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-8">
<iconify-icon className="text-3xl" icon="solar:map-point-bold-duotone"></iconify-icon>
</div>
<h3 className="font-heading text-2xl font-semibold text-neutral-950 dark:text-neutral-50 mb-3 tracking-tight">TourAi</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed mb-8" data-en="Intelligent platform with generative AI to architect hyper-personalized travel itineraries." data-pt="Plataforma inteligente com IA generativa para arquitetar roteiros de viagem hiper-personalizados.">
                                Plataforma inteligente com IA generativa para arquitetar roteiros de viagem hiper-personalizados.
                            </p>
</div>
<div className="flex flex-wrap gap-2">
<span className="text-xs px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 font-medium">React &amp; Next</span>
<span className="text-xs px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 font-medium">IA Generativa</span>
</div>
</div>

<div className="w-[380px] bg-white dark:bg-neutral-900/60 rounded-3xl p-8 flex flex-col justify-between border border-neutral-200 dark:border-white/5 shadow-lg shadow-neutral-200/40 dark:shadow-none hover:border-rose-400 dark:hover:border-rose-500/40 transition-colors shrink-0">
<div>
<div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-neutral-950 border border-emerald-100 dark:border-neutral-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-8">
<iconify-icon className="text-3xl" icon="solar:stethoscope-bold-duotone"></iconify-icon>
</div>
<h3 className="font-heading text-2xl font-semibold text-neutral-950 dark:text-neutral-50 mb-3 tracking-tight">SAPSSense UTI</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed mb-8" data-en="Medical decision support integrating AI into the SAPS III model for ICU scenario prediction." data-pt="Apoio à decisão médica integrando IA ao modelo SAPS III para predição de cenários em UTIs.">
                                Apoio à decisão médica integrando IA ao modelo SAPS III para predição de cenários em UTIs.
                            </p>
</div>
<div className="flex flex-wrap gap-2">
<span className="text-xs px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 font-medium">Python &amp; Flask</span>
<span className="text-xs px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 font-medium">Machine Learning</span>
</div>
</div>
</div>

<div className="flex gap-6 pl-6 pr-6">

<div className="w-[380px] bg-white dark:bg-neutral-900/60 rounded-3xl p-8 flex flex-col justify-between border border-neutral-200 dark:border-white/5 shadow-lg shadow-neutral-200/40 dark:shadow-none hover:border-rose-400 dark:hover:border-rose-500/40 transition-colors shrink-0">
<div>
<div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-neutral-950 border border-rose-100 dark:border-neutral-800 flex items-center justify-center text-rose-600 dark:text-rose-400 mb-8">
<iconify-icon className="text-3xl" icon="solar:heart-pulse-bold-duotone"></iconify-icon>
</div>
<h3 className="font-heading text-2xl font-semibold text-neutral-950 dark:text-neutral-50 mb-3 tracking-tight">CASI Saúde</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed mb-8" data-en="Geriatric clinical management system prioritizing accessibility and visual clarity for the elderly." data-pt="Sistema de gestão clínica geriátrica priorizando acessibilidade e clareza visual para a terceira idade.">
                                Sistema de gestão clínica geriátrica priorizando acessibilidade e clareza visual para a terceira idade.
                            </p>
</div>
<div className="flex flex-wrap gap-2">
<span className="text-xs px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 font-medium">UX/UI</span>
<span className="text-xs px-3 py-1.5 rounded-lg bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-500/20 font-medium">Acessibilidade</span>
</div>
</div>

<div className="w-[380px] bg-white dark:bg-neutral-900/60 rounded-3xl p-8 flex flex-col justify-between border border-neutral-200 dark:border-white/5 shadow-lg shadow-neutral-200/40 dark:shadow-none hover:border-rose-400 dark:hover:border-rose-500/40 transition-colors shrink-0">
<div>
<div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-neutral-950 border border-indigo-100 dark:border-neutral-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-8">
<iconify-icon className="text-3xl" icon="solar:map-point-bold-duotone"></iconify-icon>
</div>
<h3 className="font-heading text-2xl font-semibold text-neutral-950 dark:text-neutral-50 mb-3 tracking-tight">TourAi</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed mb-8" data-en="Intelligent platform with generative AI to architect hyper-personalized travel itineraries." data-pt="Plataforma inteligente com IA generativa para arquitetar roteiros de viagem hiper-personalizados.">
                                Plataforma inteligente com IA generativa para arquitetar roteiros de viagem hiper-personalizados.
                            </p>
</div>
<div className="flex flex-wrap gap-2">
<span className="text-xs px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 font-medium">React &amp; Next</span>
<span className="text-xs px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 font-medium">IA Generativa</span>
</div>
</div>

<div className="w-[380px] bg-white dark:bg-neutral-900/60 rounded-3xl p-8 flex flex-col justify-between border border-neutral-200 dark:border-white/5 shadow-lg shadow-neutral-200/40 dark:shadow-none hover:border-rose-400 dark:hover:border-rose-500/40 transition-colors shrink-0">
<div>
<div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-neutral-950 border border-emerald-100 dark:border-neutral-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-8">
<iconify-icon className="text-3xl" icon="solar:stethoscope-bold-duotone"></iconify-icon>
</div>
<h3 className="font-heading text-2xl font-semibold text-neutral-950 dark:text-neutral-50 mb-3 tracking-tight">SAPSSense UTI</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed mb-8" data-en="Medical decision support integrating AI into the SAPS III model for ICU scenario prediction." data-pt="Apoio à decisão médica integrando IA ao modelo SAPS III para predição de cenários em UTIs.">
                                Apoio à decisão médica integrando IA ao modelo SAPS III para predição de cenários em UTIs.
                            </p>
</div>
<div className="flex flex-wrap gap-2">
<span className="text-xs px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 font-medium">Python &amp; Flask</span>
<span className="text-xs px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 font-medium">Machine Learning</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-24 reveal" id="sobre">
<div className="text-center mb-16">
<h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 mb-4" data-en="Professional Journey" data-pt="Trajetória Profissional">Trajetória Profissional</h2>
<p className="text-neutral-500 dark:text-neutral-400 font-light" data-en="Constant evolution uniting design and code." data-pt="Constante evolução unindo design e código.">Constante evolução unindo design e código.</p>
</div>
<div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-4 md:ml-0 md:border-l-0">

<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 transform -translate-x-1/2"></div>
<div className="space-y-16">

<div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center group">
<div className="hidden md:block w-5/12 text-right pr-12">
<span className="text-rose-600 dark:text-rose-400 text-sm font-semibold tracking-widest uppercase">2025 - Atual</span>
</div>
<div className="absolute left-[-5px] md:left-1/2 w-3 h-3 rounded-full bg-rose-500 ring-4 ring-rose-50 dark:ring-rose-500/20 transform md:-translate-x-1/2 mt-1.5 md:mt-0 z-10 transition-transform group-hover:scale-125"></div>
<div className="md:w-5/12 pl-8 md:pl-12 w-full">
<div className="md:hidden text-rose-600 dark:text-rose-400 text-xs font-semibold tracking-widest uppercase mb-2">2025 - Atual</div>
<h3 className="font-heading text-2xl font-semibold text-neutral-950 dark:text-neutral-50 mb-1 tracking-tight">UX/UI Designer</h3>
<h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3">1Gov • Saúde Pública</h4>
<p className="text-sm font-light text-neutral-600 dark:text-neutral-400 leading-relaxed" data-en="Creating technological solutions for public health, focusing on extreme accessibility and inclusive interfaces for high-pressure environments." data-pt="Criação de soluções tecnológicas para saúde pública, focando em acessibilidade extrema e interfaces inclusivas para ambientes de alta pressão.">
                            Criação de soluções tecnológicas para saúde pública, focando em acessibilidade extrema e interfaces inclusivas para ambientes de alta pressão.
                        </p>
</div>
</div>

<div className="relative flex flex-col md:flex-row-reverse md:justify-between items-start md:items-center group">
<div className="hidden md:block w-5/12 text-left pl-12">
<span className="text-neutral-400 dark:text-neutral-500 text-sm font-semibold tracking-widest uppercase">2022 - 2026</span>
</div>
<div className="absolute left-[-5px] md:left-1/2 w-3 h-3 rounded-full bg-neutral-300 dark:bg-neutral-700 ring-4 ring-white dark:ring-[#0a0a0a] border border-neutral-200 dark:border-neutral-600 transform md:-translate-x-1/2 mt-1.5 md:mt-0 z-10 transition-all group-hover:bg-rose-400"></div>
<div className="md:w-5/12 pl-8 md:pr-12 w-full text-left md:text-right">
<div className="md:hidden text-neutral-400 dark:text-neutral-500 text-xs font-semibold tracking-widest uppercase mb-2">2022 - 2026</div>
<h3 className="font-heading text-2xl font-semibold text-neutral-950 dark:text-neutral-50 mb-1 tracking-tight">UX/UI &amp; Dev</h3>
<h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3">Datavence</h4>
<p className="text-sm font-light text-neutral-600 dark:text-neutral-400 leading-relaxed" data-en="Architecture of scalable systems and complex analytical dashboards for the political sector, translating difficult data into clear visuals." data-pt="Arquitetura de sistemas escaláveis e dashboards analíticos complexos para o setor político, traduzindo dados difíceis em visuais claros.">
                            Arquitetura de sistemas escaláveis e dashboards analíticos complexos para o setor político, traduzindo dados difíceis em visuais claros.
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 dark:border-white/5 pt-20 pb-10 bg-white dark:bg-transparent transition-colors duration-500 reveal" id="contato">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-950 dark:text-neutral-50 mb-6">
<span data-en="Ready for the" data-pt="Pronto para o">Pronto para o</span> <span className="text-rose-600 dark:text-rose-400" data-en="next level?" data-pt="próximo nível?">próximo nível?</span>
</h2>
<p className="text-lg text-neutral-500 dark:text-neutral-400 font-light mb-12 max-w-xl mx-auto" data-en="Whether to discuss clean architecture or interface design, my inbox is always open." data-pt="Seja para discutir arquitetura limpa ou design de interfaces, minha caixa de entrada está sempre aberta.">
                Seja para discutir arquitetura limpa ou design de interfaces, minha caixa de entrada está sempre aberta.
            </p>
<div className="flex justify-center gap-4 mb-20">
<a className="bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 hover:bg-neutral-200 dark:hover:bg-neutral-800 w-12 h-12 rounded-full flex items-center justify-center transition-colors" href="mailto:anaaraujo.dev@gmail.com">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
<a className="bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 hover:bg-neutral-200 dark:hover:bg-neutral-800 w-12 h-12 rounded-full flex items-center justify-center transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</a>
<a className="bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 hover:bg-neutral-200 dark:hover:bg-neutral-800 w-12 h-12 rounded-full flex items-center justify-center transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:code-circle-linear"></iconify-icon>
</a>
</div>
<div className="text-xs font-medium text-neutral-400 dark:text-neutral-600 uppercase tracking-widest flex items-center justify-center gap-2">
<span>AC</span> • <span data-en="Design and Code" data-pt="Design e Código">Design e Código</span> • 2026
            </div>
</div>
</footer>



    </>
  );
}
