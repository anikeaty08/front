import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Icons
        lucide.createIcons({
            strokeWidth: 1.5
        });

        // Counter Animation Logic
        document.addEventListener("DOMContentLoaded", () => {
            const countElements = document.querySelectorAll('.stat-counter');
            
            const animateValue = (obj, start, end, duration, prefix, suffix) => {
                let startTimestamp = null;
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    // Ease out quadratic function for smoother deceleration
                    const easeOutProgress = progress * (2 - progress);
                    obj.innerHTML = prefix + Math.floor(easeOutProgress * (end - start) + start) + suffix;
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                };
                window.requestAnimationFrame(step);
            }

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        const target = parseInt(el.getAttribute('data-target'), 10);
                        const prefix = el.getAttribute('data-prefix') || '';
                        const suffix = el.getAttribute('data-suffix') || '';
                        
                        animateValue(el, 0, target, 2000, prefix, suffix);
                        observer.unobserve(el);
                    }
                });
            }, observerOptions);

            countElements.forEach(el => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="relative min-h-[100svh] flex flex-col bg-[#050A15]">
<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="Conference Audience" className="w-full h-full object-cover object-center opacity-80" src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#040A1A] via-[#040A1A]/95 to-[#040A1A]/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-90"></div>
<div className="absolute inset-0 bg-[#08122D]/40 mix-blend-color"></div>
</div>
<nav className="relative z-50 w-full pt-8 pb-4">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
<div className="flex items-baseline gap-2">
<span className="text-white text-2xl font-medium tracking-tight">blueprintt</span>
<span className="text-white/60 text-xs font-light tracking-widest uppercase">Apresenta:</span>
</div>
<div className="hidden lg:flex items-center gap-8 text-base font-light text-white/90">
<a className="hover:text-white transition-colors" href="#sobre">Sobre</a>
<a className="hover:text-white transition-colors" href="#palestrantes">Palestrantes</a>
<a className="hover:text-white transition-colors" href="#programacao">Programação</a>
<a className="hover:text-white transition-colors" href="#patrocinadores">Patrocinadores</a>
<a className="hover:text-white transition-colors" href="#local">Local</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="hidden md:flex">
<button className="flex items-center gap-2 border border-[#2B75D6] text-[#4A90E2] hover:bg-[#2B75D6]/10 px-7 py-3 rounded-lg text-sm font-normal uppercase tracking-wider transition-all">
                        Baixe a programação
                        <i className="w-4 h-4" data-lucide="download"></i>
</button>
</div>
<button className="lg:hidden text-white p-2">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>
<div className="relative z-10 flex-grow flex flex-col justify-center max-w-7xl mx-auto px-6 w-full pt-16 pb-32">
<div className="max-w-4xl">
<div className="flex items-center gap-3 mb-8">
<div className="flex flex-col text-white font-normal text-sm tracking-widest uppercase leading-snug">
<span>Software</span>
<span>Engineering</span>
<span>Leadership Summit</span>
</div>
<div className="flex items-center">
<div className="w-9 h-9 bg-[#38BDF8] skew-x-[-15deg] flex items-center justify-center mr-[-2px] relative z-10 border-r border-[#040A1A]/20">
<i className="w-5 h-5 text-white skew-x-[15deg]" data-lucide="chevron-left"></i>
</div>
<div className="w-9 h-9 bg-[#A855F7] skew-x-[-15deg] flex items-center justify-center">
<i className="w-5 h-5 text-white skew-x-[15deg]" data-lucide="chevron-right"></i>
</div>
</div>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white leading-[1.1] mb-6">
                    Orquestre a Inovação:<br/>Liderança em Engenharia<br/>de Software
                </h1>
<p className="text-xl text-slate-300 leading-relaxed max-w-xl font-light mb-12">
                    Junte-se aos líderes de engenharia das principais organizações para explorar práticas validadas, antecipar mudanças críticas e construir conexões estratégicas em ambiente exclusivo.
                </p>
<div className="led-wrapper shadow-2xl">
<div className="led-content flex flex-col sm:flex-row items-center gap-8 p-3 pr-3 sm:pr-3">
<div className="flex items-center gap-5 pl-4 py-3 sm:py-2">
<div className="w-14 h-14 bg-[#A3D0FF] rounded-2xl flex items-center justify-center flex-shrink-0">
<i className="w-7 h-7 text-[#1E3A8A]" data-lucide="calendar-days"></i>
</div>
<div className="flex flex-col gap-0.5 pr-2">
<span className="text-[#89C5FE] text-base font-normal tracking-wide">28 E 29 DE NOVEMBRO, 2024</span>
<span className="text-slate-200 text-base font-light">Grand Estanplaza Berrini - São Paulo,SP</span>
</div>
</div>
<button className="w-full sm:w-auto bg-[#3B82F6] hover:bg-[#2563EB] text-white px-10 py-5 sm:py-4 rounded-xl text-sm font-normal uppercase tracking-wider flex items-center justify-center gap-2.5 transition-colors">
                            Baixe a programação
                            <i className="w-5 h-5" data-lucide="download"></i>
</button>
</div>
</div>
<div className="mt-24 flex flex-wrap items-center gap-y-10 gap-x-16">
<div className="flex flex-col gap-2">
<span className="stat-counter text-white text-5xl font-medium tracking-tight" data-prefix="+" data-suffix="K" data-target="100">0</span>
<span className="text-slate-300 text-base font-light">Lideranças conectadas</span>
</div>
<div className="hidden sm:block w-px h-16 bg-[#38BDF8]/30"></div>
<div className="flex flex-col gap-2">
<span className="stat-counter text-white text-5xl font-medium tracking-tight" data-prefix="+" data-suffix="h" data-target="10">0</span>
<span className="text-slate-300 text-base font-light">Horas estratégicas</span>
</div>
<div className="hidden sm:block w-px h-16 bg-[#38BDF8]/30"></div>
<div className="flex flex-col gap-2">
<span className="stat-counter text-white text-5xl font-medium tracking-tight" data-prefix="+" data-target="15">0</span>
<span className="text-slate-300 text-base font-light">Casos práticos</span>
</div>
</div>
</div>
</div>
<div className="absolute bottom-12 right-6 lg:right-12 flex items-center gap-4 z-20">
<div className="flex -space-x-3">
<div className="w-12 h-12 rounded-full bg-[#38BDF8] flex items-center justify-center border-[3px] border-[#040A1A] relative z-10 shadow-lg">
<i className="w-5 h-5 text-[#040A1A]" data-lucide="building"></i>
</div>
<div className="w-12 h-12 rounded-full bg-[#A855F7] flex items-center justify-center border-[3px] border-[#040A1A] shadow-lg">
<i className="w-5 h-5 text-white" data-lucide="laptop"></i>
</div>
</div>
<div className="flex flex-col">
<span className="text-white text-sm font-normal uppercase tracking-widest leading-tight">Ingressos</span>
<span className="text-white text-sm font-normal uppercase tracking-widest leading-tight">Presenciais e virtuais</span>
</div>
</div>
</header>
<section className="py-24 relative z-10" id="programacao">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16">
<span className="text-purple-400 text-sm font-normal tracking-widest uppercase mb-4">Metodologia</span>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-6">Explore práticas de organizações líderes</h2>
<div className="inline-flex bg-[#121827] border border-white/5 p-1 rounded-xl mb-8">
<button className="px-7 py-3 text-base font-normal text-white bg-white/5 rounded-lg border border-white/10 shadow-sm transition-all">Pilar 01</button>
<button className="px-7 py-3 text-base font-light text-slate-400 hover:text-slate-200 transition-colors">Pilar 02</button>
<button className="px-7 py-3 text-base font-light text-slate-400 hover:text-slate-200 transition-colors">Pilar 03</button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group bg-[#121827]/50 border border-white/5 hover:border-purple-500/30 rounded-2xl p-8 transition-all duration-300 hover:bg-[#121827]">
<div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="file-text"></i>
</div>
<h3 className="text-xl font-normal text-white tracking-tight mb-3">Otimização Fiscal em um Cenário de Mudanças</h3>
<p className="text-base text-slate-400 font-light leading-relaxed mb-8">
                        Explorar práticas e estratégias que ajudam a otimizar a carga tributária e alinhar o planejamento fiscal com objetivos organizacionais.
                    </p>
<a className="inline-flex items-center gap-2 text-base font-normal text-white group-hover:text-purple-400 transition-colors mt-auto" href="#">
                        Saiba mais
                        <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="group bg-[#121827]/50 border border-white/5 hover:border-cyan-500/30 rounded-2xl p-8 transition-all duration-300 hover:bg-[#121827]">
<div className="w-12 h-12 bg-cyan-500/10 text-cyan-400 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-normal text-white tracking-tight mb-3">Governança e Riscos em Operações</h3>
<p className="text-base text-slate-400 font-light leading-relaxed mb-8">
                        Desenvolver uma estrutura de governança robusta para minimizar riscos e assegurar compliance diante de fiscalizações rigorosas.
                    </p>
<a className="inline-flex items-center gap-2 text-base font-normal text-white group-hover:text-cyan-400 transition-colors mt-auto" href="#">
                        Saiba mais
                        <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="group bg-[#121827]/50 border border-white/5 hover:border-purple-500/30 rounded-2xl p-8 transition-all duration-300 hover:bg-[#121827]">
<div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-normal text-white tracking-tight mb-3">Conformidade e Desafios Regulatórios</h3>
<p className="text-base text-slate-400 font-light leading-relaxed mb-8">
                        Acesse casos práticos e lições aprendidas diretamente com executivos que lideram transformações bem-sucedidas no mercado.
                    </p>
<a className="inline-flex items-center gap-2 text-base font-normal text-white group-hover:text-purple-400 transition-colors mt-auto" href="#">
                        Saiba mais
                        <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#080B13] relative overflow-hidden z-10" id="sobre">
<div className="glow-effect top-1/4 left-[-300px] bg-[radial-gradient(circle,rgba(90,50,230,0.08)_0%,rgba(0,0,0,0)_70%)]"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="aspect-[4/5] bg-gradient-to-b from-[#1A2235] to-[#0B0F19] border border-white/10 rounded-2xl relative overflow-hidden shadow-2xl flex items-center justify-center">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
<i className="w-32 h-32 text-white/5" data-lucide="users"></i>
<div className="absolute top-10 right-10 w-32 h-32 bg-purple-500/20 blur-2xl rounded-full"></div>
<div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-500/10 blur-2xl rounded-full"></div>
</div>
</div>
<div className="order-1 lg:order-2 flex flex-col gap-8 relative z-10">
<div>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-6">Porque participar? Ouça seus pares</h2>
<p className="text-lg text-slate-400 font-light leading-relaxed">
                        A Blueprintt não vende consultorias ou soluções, garantindo que o conteúdo seja imparcial e focado exclusivamente em práticas que atendam às necessidades reais dos participantes.
                    </p>
</div>
<ul className="flex flex-col gap-6 mt-4">
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4" data-lucide="check-circle"></i>
</div>
<div>
<h4 className="text-white font-normal tracking-tight text-lg mb-1">Programação Estratégica</h4>
<p className="text-base text-slate-400 font-light">Desenvolvida com base em insights diretos do mercado, abordando os desafios mais críticos.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4" data-lucide="check-circle"></i>
</div>
<div>
<h4 className="text-white font-normal tracking-tight text-lg mb-1">Interação Direta e Microfone Aberto</h4>
<p className="text-base text-slate-400 font-light">Você assume o protagonismo. Dialogue diretamente com palestrantes e pares.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4" data-lucide="check-circle"></i>
</div>
<div>
<h4 className="text-white font-normal tracking-tight text-lg mb-1">Ambiente Exclusivo</h4>
<p className="text-base text-slate-400 font-light">Vagas limitadas e público qualificado, proporcionamos um espaço colaborativo e intimista.</p>
</div>
</li>
</ul>
</div>
</div>
</section>
<section className="py-24 border-b border-white/5 relative z-10">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-base font-normal tracking-widest text-slate-500 uppercase mb-8">Principais Cargos Presentes</h2>
<div className="flex flex-wrap justify-center gap-3">
<span className="px-5 py-3 bg-[#1A2235] border border-white/10 rounded-lg text-base text-slate-300 flex items-center gap-2">
<i className="w-4 h-4 text-purple-400" data-lucide="check-circle"></i>
                    Mobile Software Engineer
                </span>
<span className="px-5 py-3 bg-[#1A2235] border border-white/10 rounded-lg text-base text-slate-300 flex items-center gap-2">
<i className="w-4 h-4 text-purple-400" data-lucide="check-circle"></i>
                    Machine Learning Engineer
                </span>
<span className="px-5 py-3 bg-[#1A2235] border border-white/10 rounded-lg text-base text-slate-300 flex items-center gap-2">
<i className="w-4 h-4 text-cyan-400" data-lucide="check-circle"></i>
                    Director of Software Engineering
                </span>
<span className="px-5 py-3 bg-[#1A2235] border border-white/10 rounded-lg text-base text-slate-300 flex items-center gap-2">
<i className="w-4 h-4 text-purple-400" data-lucide="check-circle"></i>
                    Embedded Software Engineer
                </span>
<span className="px-5 py-3 bg-[#1A2235] border border-white/10 rounded-lg text-base text-slate-300 flex items-center gap-2">
<i className="w-4 h-4 text-cyan-400" data-lucide="check-circle"></i>
                    Site Reliability Engineer (SRE)
                </span>
</div>
</div>
</section>
<section className="py-24 relative z-10" id="palestrantes">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16">
<span className="text-cyan-400 text-sm font-normal tracking-widest uppercase mb-4">Especialistas</span>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white max-w-2xl">Palestrantes Selecionados.<br/>Práticas Comprovadas.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group flex flex-col bg-[#121827]/40 border border-white/5 rounded-2xl overflow-hidden hover:bg-[#121827] transition-colors">
<div className="aspect-square bg-slate-800 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-slate-800 flex items-end p-4">
<i className="w-10 h-10 text-white/20" data-lucide="user"></i>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h4 className="text-white font-normal tracking-tight text-xl mb-1">Fernanda Campos</h4>
<p className="text-base text-slate-400 font-light mb-4">M&amp;A Manager</p>
<div className="mt-auto pt-4 border-t border-white/5">
<p className="text-sm font-normal tracking-widest text-slate-500 uppercase">Rede Mater Dei</p>
</div>
</div>
</div>
<div className="group flex flex-col bg-[#121827]/40 border border-white/5 rounded-2xl overflow-hidden hover:bg-[#121827] transition-colors">
<div className="aspect-square bg-slate-800 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/40 to-slate-800 flex items-end p-4">
<i className="w-10 h-10 text-white/20" data-lucide="user"></i>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h4 className="text-white font-normal tracking-tight text-xl mb-1">Filipe Bodenmuller</h4>
<p className="text-base text-slate-400 font-light mb-4">Chief Strategy Officer</p>
<div className="mt-auto pt-4 border-t border-white/5">
<p className="text-sm font-normal tracking-widest text-slate-500 uppercase">Sinqia</p>
</div>
</div>
</div>
<div className="group flex flex-col bg-[#121827]/40 border border-white/5 rounded-2xl overflow-hidden hover:bg-[#121827] transition-colors">
<div className="aspect-square bg-slate-800 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-slate-800 flex items-end p-4">
<i className="w-10 h-10 text-white/20" data-lucide="user"></i>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h4 className="text-white font-normal tracking-tight text-xl mb-1">Patricia Rios</h4>
<p className="text-base text-slate-400 font-light mb-4">Head of Software Eng.</p>
<div className="mt-auto pt-4 border-t border-white/5">
<p className="text-sm font-normal tracking-widest text-slate-500 uppercase">Blau Farmacêutica</p>
</div>
</div>
</div>
<div className="group flex flex-col bg-[#121827]/40 border border-white/5 rounded-2xl overflow-hidden hover:bg-[#121827] transition-colors">
<div className="aspect-square bg-slate-800 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/40 to-slate-800 flex items-end p-4">
<i className="w-10 h-10 text-white/20" data-lucide="user"></i>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h4 className="text-white font-normal tracking-tight text-xl mb-1">André Fonseca</h4>
<p className="text-base text-slate-400 font-light mb-4">Managing Director</p>
<div className="mt-auto pt-4 border-t border-white/5">
<p className="text-sm font-normal tracking-widest text-slate-500 uppercase">Empresa Tech</p>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-base font-normal text-white transition-colors" href="#">
                    Ver todos os palestrantes
                </a>
</div>
</div>
</section>
<section className="py-24 border-y border-white/5 bg-[#080B13] relative z-10" id="patrocinadores">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-4">O ecossistema de melhores práticas</h2>
<p className="text-lg text-slate-400 font-light max-w-2xl">
                        Impulsionamos líderes e especialistas com práticas das principais organizações do Brasil e do mundo, potencializando decisões.
                    </p>
</div>
<a className="inline-flex items-center gap-2 text-base font-normal text-purple-400 hover:text-purple-300 transition-colors whitespace-nowrap" href="#">
                    Seja um patrocinador
                    <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="space-y-16">
<div>
<h3 className="text-sm font-normal tracking-widest text-slate-500 uppercase mb-6 flex items-center gap-4">
                        Patrocínio Master
                        <span className="h-px bg-white/5 flex-1"></span>
</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="h-32 bg-[#121827] border border-white/5 rounded-2xl flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
<span className="text-2xl font-medium tracking-tight text-white">ALGAR</span>
</div>
<div className="h-32 bg-[#121827] border border-white/5 rounded-2xl flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
<span className="text-2xl font-medium tracking-tight text-white">MERCADO LIVRE</span>
</div>
</div>
</div>
<div>
<h3 className="text-sm font-normal tracking-widest text-slate-500 uppercase mb-6 flex items-center gap-4">
                        Patrocínio Diamante
                        <span className="h-px bg-white/5 flex-1"></span>
</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="h-24 bg-[#121827] border border-white/5 rounded-xl flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
<span className="text-lg font-medium tracking-tight text-white">STONE</span>
</div>
<div className="h-24 bg-[#121827] border border-white/5 rounded-xl flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
<span className="text-lg font-medium tracking-tight text-white">LOGO</span>
</div>
<div className="h-24 bg-[#121827] border border-white/5 rounded-xl flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
<span className="text-lg font-medium tracking-tight text-white">COMPANY</span>
</div>
<div className="h-24 bg-[#121827] border border-white/5 rounded-xl flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
<span className="text-lg font-medium tracking-tight text-white">BRAND</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 relative overflow-hidden z-10" id="local">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative h-[400px] bg-[#121827] border border-white/5 rounded-2xl overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PG1hdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDIwaDQwTTIwIDB2NDAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')]"></div>
<div className="relative z-10 text-center">
<div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(120,56,229,0.5)]">
<i className="w-8 h-8 text-white" data-lucide="map-pin"></i>
</div>
</div>
</div>
<div className="order-1 lg:order-2 flex flex-col gap-8">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white">O ponto de encontro das decisões estratégicas</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-slate-300">
<i className="w-5 h-5" data-lucide="calendar"></i>
</div>
<div>
<p className="text-white font-normal tracking-tight text-lg mb-1">12 e 13 de Dezembro 2024</p>
<p className="text-base text-slate-400 font-light">Horário: 09:00 às 21:00</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-slate-300">
<i className="w-5 h-5" data-lucide="building"></i>
</div>
<div>
<p className="text-white font-normal tracking-tight text-lg mb-1">Grand Mercure Itaim</p>
<p className="text-base text-slate-400 font-light">São Paulo, SP</p>
<a className="inline-flex items-center gap-1 text-base text-purple-400 hover:text-purple-300 transition-colors mt-2 underline underline-offset-4" href="#">
                                Ver no maps
                                <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 border-t border-white/5 bg-[#080B13] relative z-10" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-purple-400 text-sm font-normal tracking-widest uppercase mb-4 block">FAQ</span>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white">Perguntas frequentes</h2>
</div>
<div className="space-y-4">
<div className="bg-[#121827] border border-white/10 rounded-xl p-6">
<div className="flex items-center justify-between cursor-pointer">
<h4 className="text-lg font-normal tracking-tight text-white">Quais são os formatos de ingresso?</h4>
<i className="w-5 h-5 text-purple-400" data-lucide="minus-circle"></i>
</div>
<p className="text-base text-slate-400 font-light mt-4 leading-relaxed pr-8">
                        Lorem ipsum dolor sit amet consectetur. Et mollis a quis blandit condimentum arcu condimentum nibh. Natoque commodo vitae ornare.
                    </p>
</div>
<div className="bg-transparent border border-white/5 hover:border-white/10 rounded-xl p-6 transition-colors cursor-pointer flex items-center justify-between">
<h4 className="text-lg font-normal tracking-tight text-slate-300">Como funciona o acesso virtual?</h4>
<i className="w-5 h-5 text-slate-500" data-lucide="plus-circle"></i>
</div>
<div className="bg-transparent border border-white/5 hover:border-white/10 rounded-xl p-6 transition-colors cursor-pointer flex items-center justify-between">
<h4 className="text-lg font-normal tracking-tight text-slate-300">É possível transferir meu ingresso?</h4>
<i className="w-5 h-5 text-slate-500" data-lucide="plus-circle"></i>
</div>
<div className="bg-transparent border border-white/5 hover:border-white/10 rounded-xl p-6 transition-colors cursor-pointer flex items-center justify-between">
<h4 className="text-lg font-normal tracking-tight text-slate-300">Haverá certificado de participação?</h4>
<i className="w-5 h-5 text-slate-500" data-lucide="plus-circle"></i>
</div>
</div>
</div>
</section>
<footer className="bg-[#0B0F19] border-t border-white/5 pt-24 pb-12 relative z-10 overflow-hidden">
<div className="glow-effect bottom-[-200px] right-[-100px] bg-[radial-gradient(circle,rgba(118,228,232,0.1)_0%,rgba(0,0,0,0)_70%)]"></div>
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center mb-24 relative z-10">
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white mb-6">
                Leve os insights dos grandes<br/>líderes com você.
            </h2>
<p className="text-xl text-slate-400 font-light mb-10 max-w-2xl">
                Uma conferência imperdível. Um ano de inteligência de mercado garantido. Cadastre-se e seja o primeiro a receber novidades.
            </p>
<form className="flex flex-col sm:flex-row w-full max-w-md gap-3">
<div className="relative flex-1">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="w-5 h-5 text-slate-500" data-lucide="mail"></i>
</div>
<input className="w-full bg-[#1A2235] border border-white/10 text-white text-base rounded-xl pl-11 pr-4 py-4 focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-500" placeholder="Digite seu e-mail" type="email"/>
</div>
<button className="bg-white text-slate-900 hover:bg-slate-200 px-7 py-4 rounded-xl font-normal text-base transition-colors whitespace-nowrap" type="submit">
                    Inscrever-se
                </button>
</form>
</div>
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5 relative z-10">
<div className="flex items-center gap-2">
<span className="text-white font-normal tracking-widest text-sm uppercase">Blueprintt</span>
</div>
<p className="text-base text-slate-500 font-light">
                Copyright © Blueprintt 2025. Todos os direitos reservados.
            </p>
<div className="flex items-center gap-4 text-slate-400">
<a className="hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="presentation"></i>
</a>
<a className="hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="camera"></i>
</a>
</div>
</div>
</footer>


    </>
  );
}
