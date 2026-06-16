import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Scroll Reveal Logic
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((element) => {
                observer.observe(element);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-7 h-7 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
<svg className="w-full h-full" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" fill="#000000" r="50"></circle>
<path d="M30 55 C 20 45, 30 35, 40 45 L 60 65 C 70 75, 80 65, 70 55 L 45 35" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="9"></path>
</svg>
</div>
<span className="tracking-tight font-medium text-base text-zinc-900 uppercase">Maestria Nômade</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#solucao">Solução</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#sistema-pm">Sistema PM</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#incluso">Conteúdo</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#faq">FAQ</a>
</div>
<a className="text-xs font-medium px-4 py-2 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-700 hover:bg-zinc-100 transition-all flex items-center gap-2 group" href="#cta">
                Acessar Sistema
                <iconify-icon className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</nav>
<main className="relative z-10 pt-32">

<section className="max-w-6xl mx-auto px-6 text-center pt-16 pb-24 relative reveal">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] max-w-4xl pointer-events-none -z-10" style={{background: 'radial-gradient(circle at 50% 0%, rgba(0, 0, 0, 0.04) 0%, transparent 60%)'}}></div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-xs font-normal text-zinc-700 mb-8 backdrop-blur-sm shadow-sm hover:border-zinc-300 transition-colors cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-900 animate-pulse shadow-[0_0_8px_rgba(0,0,0,0.8)]"></span>
                Evolução Gamificada em Notion
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-500 mb-6 leading-[1.1] max-w-4xl mx-auto">
                Você não precisa de mais motivação. <br className="hidden md:block"/> Você precisa de um <span className="text-zinc-900">sistema.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-3 font-light leading-relaxed">
                Transforme sua rotina em progresso visível com um sistema de organização pessoal, hábitos, metas e evolução gamificada.
            </p>
<p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto mb-10 font-normal">
                O Maestria Nômade transforma consistência em PM — Pontos de Maestria.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-zinc-900 text-white text-base font-medium hover:bg-black hover:scale-[1.02] shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.2)] transition-all gap-2 group" href="#cta">
                    Quero começar minha Maestria
                    <iconify-icon className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" icon="solar:rocket-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white border border-zinc-200 text-zinc-700 text-base font-normal hover:bg-zinc-50 hover:border-zinc-300 transition-all gap-2 shadow-sm group" href="#solucao">
                    Ver o que vem dentro
                    <iconify-icon className="w-5 h-5 text-zinc-400 group-hover:text-zinc-700 transition-colors" icon="solar:eye-linear"></iconify-icon>
</a>
</div>
<p className="text-xs font-normal text-zinc-400 flex items-center justify-center gap-2">
<iconify-icon className="w-4 h-4 text-zinc-400" icon="solar:shield-check-linear"></iconify-icon>
                Acesso completo por R$ 95,00
            </p>

<div className="mt-24 relative mx-auto max-w-5xl rounded-2xl border border-zinc-200/60 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)] overflow-hidden animate-float">

<div className="h-10 border-b border-zinc-100 flex items-center px-4 justify-between bg-zinc-50">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-200"></div>
<div className="w-3 h-3 rounded-full bg-zinc-200"></div>
<div className="w-3 h-3 rounded-full bg-zinc-200"></div>
</div>
<div className="text-xs text-zinc-400 font-normal tracking-tight flex items-center gap-2">
<iconify-icon className="w-3 h-3" icon="solar:lock-keyhole-linear"></iconify-icon>
                        maestria-workspace.notion.site
                    </div>
<div className="w-12"></div>
</div>

<div className="flex h-[400px] md:h-[600px] relative bg-white">

<div className="w-48 md:w-64 border-r border-zinc-100 bg-zinc-50/50 p-5 hidden sm:flex flex-col gap-6">
<div className="flex items-center gap-3 group cursor-default">
<div className="w-8 h-8 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 shadow-sm transition-colors group-hover:border-zinc-300 group-hover:text-zinc-900">
<iconify-icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div className="h-3 w-20 bg-zinc-200 rounded"></div>
</div>
<div className="space-y-2 mt-4">
<div className="h-8 w-full bg-white rounded-md flex items-center px-3 gap-3 border border-zinc-200 shadow-sm text-zinc-900 group cursor-pointer">
<iconify-icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" icon="solar:widget-linear"></iconify-icon>
<div className="h-2 w-16 bg-zinc-300 rounded"></div>
</div>
<div className="h-8 w-full rounded-md flex items-center px-3 gap-3 hover:bg-zinc-100/50 transition-colors group cursor-pointer">
<iconify-icon className="w-4 h-4 text-zinc-400 transition-all duration-300 group-hover:text-zinc-900 group-hover:scale-110 group-hover:rotate-12" icon="solar:target-linear"></iconify-icon>
<div className="h-2 w-24 bg-zinc-200 rounded"></div>
</div>
<div className="h-8 w-full rounded-md flex items-center px-3 gap-3 hover:bg-zinc-100/50 transition-colors group cursor-pointer">
<iconify-icon className="w-4 h-4 text-zinc-400 transition-all duration-300 group-hover:text-zinc-900 group-hover:scale-110 group-hover:-rotate-12" icon="solar:calendar-linear"></iconify-icon>
<div className="h-2 w-14 bg-zinc-200 rounded"></div>
</div>
</div>

<div className="mt-auto p-4 border border-zinc-200 rounded-xl bg-white shadow-sm relative overflow-hidden group hover:border-zinc-300 transition-colors cursor-default">
<div className="absolute inset-0 bg-zinc-100/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between relative z-10 mb-2">
<div className="text-xs font-medium tracking-tight text-zinc-900 uppercase">Status Global</div>
<iconify-icon className="w-4 h-4 text-zinc-900 transform transition-transform duration-700 group-hover:rotate-180 group-hover:scale-125" icon="solar:stars-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-0.5 relative z-10">
<div className="text-xs text-zinc-500 transition-colors group-hover:text-zinc-700">Nível 15</div>
<div className="text-lg font-medium text-zinc-900 tracking-tight">3.450 PM</div>
</div>
<div className="mt-3 h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden relative z-10">
<div className="h-full w-[70%] bg-zinc-900 rounded-full relative overflow-hidden">
<div className="absolute inset-0 bg-white/20 w-full animate-[pulse_2s_ease-in-out_infinite]"></div>
</div>
</div>
</div>
</div>

<div className="flex-1 p-6 md:p-10 relative overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-zinc-100 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
<div className="flex justify-between items-end mb-8 relative z-10 border-b border-zinc-100 pb-6">
<div>
<div className="text-xs font-medium text-zinc-900 mb-2 uppercase tracking-widest">Dashboard</div>
<div className="h-6 w-48 bg-zinc-200 rounded"></div>
</div>
<div className="hidden md:flex gap-3">
<div className="h-8 w-24 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center gap-2 px-3 hover:border-zinc-300 transition-colors cursor-pointer group">
<div className="w-2 h-2 rounded-full bg-zinc-900 group-hover:scale-125 transition-transform duration-300"></div>
<div className="h-2 w-10 bg-zinc-200 rounded"></div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

<div className="col-span-1 md:col-span-2 border border-zinc-200 bg-white shadow-sm rounded-2xl p-6 hover:shadow-md transition-shadow">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-2 group cursor-pointer">
<iconify-icon className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 group-hover:rotate-180 transition-all duration-500" icon="solar:refresh-linear"></iconify-icon>
<div className="h-3 w-24 bg-zinc-200 rounded"></div>
</div>
<div className="px-2 py-1 rounded bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-900 transition-colors hover:bg-zinc-200 cursor-default">+25 PM Hoje</div>
</div>
<div className="space-y-3">
<div className="h-12 w-full bg-zinc-50 rounded-xl border border-zinc-100 flex items-center px-4 gap-4 group cursor-pointer hover:border-zinc-200 transition-colors">
<div className="w-5 h-5 rounded border-2 border-zinc-300 bg-zinc-100 flex items-center justify-center transition-colors group-hover:border-zinc-400">
<iconify-icon className="w-3 h-3 text-zinc-900 scale-100 transition-transform duration-300 group-hover:scale-125" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="h-2 w-32 bg-zinc-300 rounded"></div>
</div>
<div className="h-12 w-full bg-zinc-50 rounded-xl border border-zinc-100 flex items-center px-4 gap-4 group cursor-pointer hover:border-zinc-200 transition-colors">
<div className="w-5 h-5 rounded border-2 border-zinc-300 bg-transparent transition-colors group-hover:border-zinc-400"></div>
<div className="h-2 w-24 bg-zinc-200 rounded"></div>
</div>
</div>
</div>

<div className="border border-zinc-200 bg-white shadow-sm rounded-2xl p-6 flex flex-col group hover:shadow-md hover:border-zinc-300 transition-all cursor-default">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="w-4 h-4 text-zinc-900 spring-icon-rotate" icon="solar:fire-linear"></iconify-icon>
<div className="h-3 w-16 bg-zinc-200 rounded"></div>
</div>
<div className="flex-1 flex items-center justify-center flex-col gap-3">
<div className="text-4xl font-medium tracking-tighter text-zinc-900 transition-transform duration-300 group-hover:scale-110">12</div>
<div className="text-xs text-zinc-400 uppercase tracking-widest font-normal">Dias Seguidos</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-zinc-100 bg-zinc-50/50">
<div className="max-w-6xl mx-auto">
<div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-16 reveal">
<div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-6 shadow-sm text-zinc-900">
<iconify-icon className="w-6 h-6" icon="solar:close-circle-linear"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-zinc-900">A maioria das pessoas não falha por falta de vontade.<br className="hidden md:block"/> Falha por falta de sistema.</h2>
<p className="text-lg md:text-xl text-zinc-500 font-light leading-relaxed">
                        Muita gente quer mudar de vida, ser mais disciplinada e evoluir. Mas vive perdida, sem clareza, sem direção e sem constância. Depender de motivação é instável. Um sistema muda isso.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 reveal" style={{transitionDelay: '100ms'}}>
<div className="group p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md hover:border-zinc-300 transition-all">
<iconify-icon className="w-6 h-6 text-zinc-400 mb-4 spring-icon" icon="solar:graph-down-linear"></iconify-icon>
<h3 className="text-base font-medium tracking-tight mb-2 text-zinc-900">Falta de consistência</h3>
<p className="text-base text-zinc-500 font-light">Começa empolgado e desiste logo por não ver avanço ou não ter rastreabilidade.</p>
</div>
<div className="group p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md hover:border-zinc-300 transition-all">
<iconify-icon className="w-6 h-6 text-zinc-400 mb-4 spring-icon" icon="solar:layers-minimalistic-linear"></iconify-icon>
<h3 className="text-base font-medium tracking-tight mb-2 text-zinc-900">Vida desorganizada</h3>
<p className="text-base text-zinc-500 font-light">Tarefas e ideias espalhadas em vários lugares, gerando caos mental e paralisia.</p>
</div>
<div className="group p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md hover:border-zinc-300 transition-all">
<iconify-icon className="w-6 h-6 text-zinc-400 mb-4 spring-icon" icon="solar:target-linear"></iconify-icon>
<h3 className="text-base font-medium tracking-tight mb-2 text-zinc-900">Metas confusas</h3>
<p className="text-base text-zinc-500 font-light">Objetivos abstratos sem planos de ação diários. O sonho fica apenas no papel.</p>
</div>
<div className="group p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md hover:border-zinc-300 transition-all">
<iconify-icon className="w-6 h-6 text-zinc-400 mb-4 spring-icon-rotate" icon="solar:ghost-linear"></iconify-icon>
<h3 className="text-base font-medium tracking-tight mb-2 text-zinc-900">Sensação de estagnação</h3>
<p className="text-base text-zinc-500 font-light">A sensação frustrante de que os meses passam e você não saiu do mesmo lugar.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative bg-white border-t border-zinc-100" id="solucao">
<div className="max-w-6xl mx-auto">
<div className="mb-16 reveal flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-2xl">
<span className="text-zinc-900 text-xs font-medium tracking-widest uppercase mb-3 block">A Solução</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-zinc-900">Conheça o Maestria Nômade</h2>
<p className="text-zinc-500 text-lg font-light leading-relaxed">Um sistema pensado para organizar sua vida, estruturar sua evolução e transformar esforço em progresso visível.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
<div className="p-8 rounded-3xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:shadow-md transition-all duration-300 group reveal" style={{transitionDelay: '100ms'}}>
<div className="w-10 h-10 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-100 mb-6 group-hover:border-zinc-300 group-hover:bg-zinc-100 transition-colors text-zinc-400">
<iconify-icon className="w-5 h-5 spring-icon-rotate" icon="solar:flag-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-2 text-zinc-900">Metas organizadas</h3>
<p className="text-base text-zinc-500 font-light leading-relaxed">Quebre grandes ambições em marcos menores e acionáveis. Saiba exatamente o que fazer.</p>
</div>
<div className="p-8 rounded-3xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:shadow-md transition-all duration-300 group reveal" style={{transitionDelay: '200ms'}}>
<div className="w-10 h-10 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-100 mb-6 group-hover:border-zinc-300 group-hover:bg-zinc-100 transition-colors text-zinc-400">
<iconify-icon className="w-5 h-5 spring-icon" icon="solar:repeat-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-2 text-zinc-900">Hábitos acompanhados</h3>
<p className="text-base text-zinc-500 font-light leading-relaxed">Tracker inteligente para forjar disciplina inabalável e manter sequências diárias.</p>
</div>
<div className="p-8 rounded-3xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:shadow-md transition-all duration-300 group reveal" style={{transitionDelay: '300ms'}}>
<div className="w-10 h-10 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-100 mb-6 group-hover:border-zinc-300 group-hover:bg-zinc-100 transition-colors text-zinc-400">
<iconify-icon className="w-5 h-5 spring-icon" icon="solar:calendar-add-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-2 text-zinc-900">Rotina estruturada</h3>
<p className="text-base text-zinc-500 font-light leading-relaxed">Planejamento intencional dos seus dias. Elimine a ansiedade da desorganização.</p>
</div>
<div className="p-8 rounded-3xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:shadow-md transition-all duration-300 group reveal" style={{transitionDelay: '100ms'}}>
<div className="w-10 h-10 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-100 mb-6 group-hover:border-zinc-300 group-hover:bg-zinc-100 transition-colors text-zinc-400">
<iconify-icon className="w-5 h-5 spring-icon" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-2 text-zinc-900">Progresso visual</h3>
<p className="text-base text-zinc-500 font-light leading-relaxed">Dashboards limpos que mostram seu avanço real, substituindo achismos por dados.</p>
</div>
<div className="p-8 rounded-3xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:shadow-md transition-all duration-300 group reveal" style={{transitionDelay: '200ms'}}>
<div className="w-10 h-10 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-100 mb-6 group-hover:border-zinc-300 group-hover:bg-zinc-100 transition-colors text-zinc-400">
<iconify-icon className="w-5 h-5 spring-icon" icon="solar:eye-scan-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-2 text-zinc-900">Clareza pessoal</h3>
<p className="text-base text-zinc-500 font-light leading-relaxed">Uma base centralizada para sua vida. Libere espaço mental transferindo tudo para o sistema.</p>
</div>

<div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900 hover:shadow-lg transition-all duration-300 group relative overflow-hidden reveal shadow-md" style={{transitionDelay: '300ms'}}>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0%,transparent_70%)] pointer-events-none"></div>
<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/10 mb-6 relative z-10 text-white backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
<iconify-icon className="w-5 h-5 text-white animate-pulse" icon="solar:cup-star-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-2 text-white relative z-10">Sistema PM — Pontos de Maestria</h3>
<p className="text-base text-zinc-300 font-light leading-relaxed relative z-10">O coração do sistema. Ganhe pontos ao executar ações e suba de nível na vida real. Gamificação que gera constância.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden bg-white border-y border-zinc-100" id="sistema-pm">
<div className="absolute inset-0 pointer-events-none opacity-40" style={{background: 'radial-gradient(circle at 50% 0%, rgba(0, 0, 0, 0.03) 0%, transparent 60%)'}}></div>
<div className="max-w-5xl mx-auto relative z-10">
<div className="text-center mb-20 reveal">
<span className="text-zinc-900 text-xs font-medium tracking-widest uppercase mb-4 block">O Diferencial</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6">Transforme esforço em progresso visível.</h2>
<p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        No Maestria Nômade, sua evolução deixa de ser abstrata. Cada hábito cumprido, meta avançada e ação executada fortalece seu progresso com <span className="text-zinc-900 font-medium">PM — Pontos de Maestria</span>.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="space-y-6 reveal" style={{transitionDelay: '100ms'}}>
<div className="group flex items-start gap-4 p-5 rounded-2xl border border-zinc-200 bg-white shadow-sm hover:bg-zinc-50 hover:border-zinc-300 transition-all cursor-default">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 border border-zinc-200 transition-colors group-hover:bg-zinc-200">
<iconify-icon className="w-5 h-5 text-zinc-400 spring-icon" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium tracking-tight text-zinc-900 mb-1">Cumpriu hábitos → ganha PM</h4>
<p className="text-base text-zinc-500 font-light">Transforme a resistência diária em recompensa imediata alimentando seu placar.</p>
</div>
</div>
<div className="group flex items-start gap-4 p-5 rounded-2xl border border-zinc-200 bg-white shadow-sm hover:bg-zinc-50 hover:border-zinc-300 transition-all cursor-default">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 border border-zinc-200 transition-colors group-hover:bg-zinc-200">
<iconify-icon className="w-5 h-5 text-zinc-400 spring-icon" icon="solar:target-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium tracking-tight text-zinc-900 mb-1">Avançou metas → ganha PM</h4>
<p className="text-base text-zinc-500 font-light">Pequenos passos nos seus projetos são validados e registrados matematicamente.</p>
</div>
</div>
<div className="group flex items-start gap-4 p-5 rounded-2xl border border-zinc-200 bg-white shadow-sm hover:bg-zinc-50 hover:border-zinc-300 transition-all cursor-default">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 border border-zinc-200 transition-colors group-hover:bg-zinc-200">
<iconify-icon className="w-5 h-5 text-zinc-400 spring-icon" icon="solar:arrow-up-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium tracking-tight text-zinc-900 mb-1">Evoluiu na rotina → acumula progresso</h4>
<p className="text-base text-zinc-500 font-light">O sistema armazena seu histórico para provar a você mesmo o quanto você avançou.</p>
</div>
</div>
<div className="pt-2 pl-2">
<span className="text-base font-medium text-zinc-800 border-b border-zinc-200 pb-1">Quanto mais consistência, mais maestria.</span>
</div>
</div>

<div className="relative flex justify-center items-center reveal group" style={{transitionDelay: '200ms'}}>
<div className="absolute w-[300px] h-[300px] bg-zinc-100 rounded-full blur-[80px] transition-all duration-700 group-hover:bg-zinc-200"></div>
<div className="relative w-full max-w-sm rounded-3xl border border-zinc-200 bg-white/90 backdrop-blur-xl p-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-transform duration-500 hover:scale-[1.02]">
<div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center animate-[spin_20s_linear_infinite]">
<svg className="w-full h-full" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" fill="#000000" r="50"></circle>
<path d="M30 55 C 20 45, 30 35, 40 45 L 60 65 C 70 75, 80 65, 70 55 L 45 35" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="9"></path>
</svg>
</div>
<div className="inline-flex items-center justify-center w-40 h-40 rounded-full border-[6px] border-zinc-100 mb-6 shadow-sm relative">

<div className="absolute inset-[-6px] rounded-full border-[6px] border-transparent border-t-zinc-900 border-r-zinc-400 animate-spin-slow"></div>
<div className="absolute inset-2 rounded-full border border-zinc-200 bg-white flex flex-col items-center justify-center shadow-inner">
<span className="text-xs text-zinc-400 font-medium tracking-widest uppercase mb-1">Nível</span>
<span className="text-4xl font-medium tracking-tighter text-zinc-900 transition-transform duration-300 group-hover:scale-110">12</span>
</div>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-1">4.250 PM</h3>
<p className="text-xs text-zinc-500 font-normal">Pontos Totais Acumulados</p>
<div className="mt-8 pt-6 border-t border-zinc-100">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 transition-colors group-hover:bg-zinc-100 group-hover:border-zinc-300">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span>
                                    Meta Diária Atingida
                                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50/50">
<div className="max-w-5xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16 text-zinc-900 reveal">O que você desenvolve com o Maestria Nômade</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 reveal" style={{transitionDelay: '100ms'}}>
<div className="flex flex-col items-center group cursor-default">
<div className="w-12 h-12 mb-4 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:border-zinc-300 shadow-sm transition-all duration-300">
<iconify-icon className="w-6 h-6 spring-icon" icon="solar:shield-star-linear"></iconify-icon>
</div>
<h4 className="text-base md:text-lg font-medium tracking-tight text-zinc-800 transition-colors group-hover:text-zinc-900">Disciplina</h4>
</div>
<div className="flex flex-col items-center group cursor-default">
<div className="w-12 h-12 mb-4 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:border-zinc-300 shadow-sm transition-all duration-300">
<iconify-icon className="w-6 h-6 spring-icon" icon="solar:eye-scan-linear"></iconify-icon>
</div>
<h4 className="text-base md:text-lg font-medium tracking-tight text-zinc-800 transition-colors group-hover:text-zinc-900">Clareza</h4>
</div>
<div className="flex flex-col items-center group cursor-default">
<div className="w-12 h-12 mb-4 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:border-zinc-300 shadow-sm transition-all duration-300">
<iconify-icon className="w-6 h-6 spring-icon-rotate" icon="solar:history-linear"></iconify-icon>
</div>
<h4 className="text-base md:text-lg font-medium tracking-tight text-zinc-800 transition-colors group-hover:text-zinc-900">Consistência</h4>
</div>
<div className="flex flex-col items-center group cursor-default">
<div className="w-12 h-12 mb-4 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:border-zinc-300 shadow-sm transition-all duration-300">
<iconify-icon className="w-6 h-6 spring-icon" icon="solar:lock-password-linear"></iconify-icon>
</div>
<h4 className="text-base md:text-lg font-medium tracking-tight text-zinc-800 transition-colors group-hover:text-zinc-900">Autocontrole</h4>
</div>
<div className="flex flex-col items-center group cursor-default">
<div className="w-12 h-12 mb-4 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:border-zinc-300 shadow-sm transition-all duration-300">
<iconify-icon className="w-6 h-6 spring-icon" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<h4 className="text-base md:text-lg font-medium tracking-tight text-zinc-800 transition-colors group-hover:text-zinc-900">Organização</h4>
</div>
<div className="flex flex-col items-center group cursor-default">
<div className="w-12 h-12 mb-4 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:border-zinc-300 shadow-sm transition-all duration-300">
<iconify-icon className="w-6 h-6 spring-icon-rotate" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h4 className="text-base md:text-lg font-medium tracking-tight text-zinc-800 transition-colors group-hover:text-zinc-900">Progresso real</h4>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-zinc-100 bg-white" id="incluso">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12 text-center text-zinc-900 reveal">O que você recebe</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal" style={{transitionDelay: '100ms'}}>
<div className="group flex items-center gap-4 p-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 shadow-sm transition-all cursor-default">
<iconify-icon className="w-5 h-5 text-zinc-400 shrink-0 spring-icon" icon="solar:monitor-linear"></iconify-icon>
<span className="text-base font-normal text-zinc-700 transition-colors group-hover:text-zinc-900">Dashboard Principal</span>
</div>
<div className="group flex items-center gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-black shadow-sm transition-all cursor-default">
<iconify-icon className="w-5 h-5 text-white shrink-0 spring-icon-rotate" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-base font-medium text-white">Sistema PM — Pontos de Maestria</span>
</div>
<div className="group flex items-center gap-4 p-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 shadow-sm transition-all cursor-default">
<iconify-icon className="w-5 h-5 text-zinc-400 shrink-0 spring-icon" icon="solar:target-linear"></iconify-icon>
<span className="text-base font-normal text-zinc-700 transition-colors group-hover:text-zinc-900">Gestão de Metas</span>
</div>
<div className="group flex items-center gap-4 p-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 shadow-sm transition-all cursor-default">
<iconify-icon className="w-5 h-5 text-zinc-400 shrink-0 spring-icon-rotate" icon="solar:round-transfer-linear"></iconify-icon>
<span className="text-base font-normal text-zinc-700 transition-colors group-hover:text-zinc-900">Tracker de Hábitos</span>
</div>
<div className="group flex items-center gap-4 p-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 shadow-sm transition-all cursor-default">
<iconify-icon className="w-5 h-5 text-zinc-400 shrink-0 spring-icon" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-base font-normal text-zinc-700 transition-colors group-hover:text-zinc-900">Planejamento de Rotina</span>
</div>
<div className="group flex items-center gap-4 p-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 shadow-sm transition-all cursor-default">
<iconify-icon className="w-5 h-5 text-zinc-400 shrink-0 spring-icon" icon="solar:book-bookmark-linear"></iconify-icon>
<span className="text-base font-normal text-zinc-700 transition-colors group-hover:text-zinc-900">Central de Estudos</span>
</div>
<div className="group flex items-center gap-4 p-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 shadow-sm transition-all cursor-default">
<iconify-icon className="w-5 h-5 text-zinc-400 shrink-0 spring-icon-rotate" icon="solar:dumbbell-linear"></iconify-icon>
<span className="text-base font-normal text-zinc-700 transition-colors group-hover:text-zinc-900">Log de Treinos</span>
</div>
<div className="group flex items-center gap-4 p-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 shadow-sm transition-all cursor-default">
<iconify-icon className="w-5 h-5 text-zinc-400 shrink-0 spring-icon" icon="solar:wallet-linear"></iconify-icon>
<span className="text-base font-normal text-zinc-700 transition-colors group-hover:text-zinc-900">Controle de Finanças</span>
</div>
<div className="group flex items-center gap-4 p-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 shadow-sm transition-all cursor-default">
<iconify-icon className="w-5 h-5 text-zinc-400 shrink-0 spring-icon" icon="solar:folder-with-files-linear"></iconify-icon>
<span className="text-base font-normal text-zinc-700 transition-colors group-hover:text-zinc-900">Projetos Ativos</span>
</div>
<div className="group flex items-center gap-4 p-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 shadow-sm transition-all cursor-default">
<iconify-icon className="w-5 h-5 text-zinc-400 shrink-0 spring-icon" icon="solar:chart-2-linear"></iconify-icon>
<span className="text-base font-normal text-zinc-700 transition-colors group-hover:text-zinc-900">Área de Progresso Visual</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-zinc-50 border border-zinc-200 rounded-3xl p-8 md:p-12 reveal shadow-lg group">
<div className="md:w-1/2">
<div className="w-12 h-12 bg-zinc-200 rounded-full flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
<iconify-icon className="w-6 h-6 text-zinc-900" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h2 className="text-3xl font-medium tracking-tight mb-4 text-zinc-900 leading-tight">Para quem quer parar de apenas tentar e começar a evoluir de verdade.</h2>
<p className="text-zinc-500 text-lg font-light">Feito para pessoas que querem assumir o controle da própria vida.</p>
</div>
<div className="md:w-1/2 w-full">
<ul className="space-y-5">
<li className="flex items-center gap-4 group/item cursor-default">
<div className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center shrink-0 transition-colors group-hover/item:bg-zinc-900 group-hover/item:text-white">
<iconify-icon className="w-3 h-3 text-zinc-900 group-hover/item:text-white transition-colors" icon="solar:bolt-linear"></iconify-icon>
</div>
<span className="text-base md:text-lg font-normal text-zinc-700 transition-colors group-hover/item:text-zinc-900">Estudantes, Criadores e Empreendedores</span>
</li>
<li className="flex items-center gap-4 group/item cursor-default">
<div className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center shrink-0 transition-colors group-hover/item:bg-zinc-900 group-hover/item:text-white">
<iconify-icon className="w-3 h-3 text-zinc-900 group-hover/item:text-white transition-colors" icon="solar:bolt-linear"></iconify-icon>
</div>
<span className="text-base md:text-lg font-normal text-zinc-700 transition-colors group-hover/item:text-zinc-900">Quem busca organizar a vida de vez</span>
</li>
<li className="flex items-center gap-4 group/item cursor-default">
<div className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center shrink-0 transition-colors group-hover/item:bg-zinc-900 group-hover/item:text-white">
<iconify-icon className="w-3 h-3 text-zinc-900 group-hover/item:text-white transition-colors" icon="solar:bolt-linear"></iconify-icon>
</div>
<span className="text-base md:text-lg font-normal text-zinc-700 transition-colors group-hover/item:text-zinc-900">Quem vive começando e parando projetos</span>
</li>
<li className="flex items-center gap-4 group/item cursor-default">
<div className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center shrink-0 transition-colors group-hover/item:bg-zinc-900 group-hover/item:text-white">
<iconify-icon className="w-3 h-3 text-zinc-900 group-hover/item:text-white transition-colors" icon="solar:bolt-linear"></iconify-icon>
</div>
<span className="text-base md:text-lg font-normal text-zinc-700 transition-colors group-hover/item:text-zinc-900">Pessoas focadas em desenvolvimento pessoal</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-32 px-6 border-y border-zinc-100 bg-zinc-50 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0%,transparent_100%)]"></div>
<div className="max-w-4xl mx-auto text-center reveal relative z-10">
<h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-zinc-900 mb-6 leading-[1.1]">
                    Consistência não é dom.<br/><span className="text-zinc-900">É sistema.</span>
</h2>
<p className="text-xl md:text-2xl text-zinc-500 font-normal tracking-tight max-w-2xl mx-auto">
                    O Maestria Nômade foi criado para transformar confusão em direção, intenção em ação e esforço em progresso visível.
                </p>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden bg-white" id="cta">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(circle at 50% 100%, rgba(0, 0, 0, 0.03) 0%, transparent 60%)'}}></div>
<div className="max-w-2xl mx-auto text-center relative z-10 p-10 md:p-16 rounded-[2rem] border border-zinc-200 bg-white/80 backdrop-blur-xl shadow-2xl reveal group/cta">
<div className="w-16 h-16 mx-auto bg-zinc-100 rounded-2xl flex items-center justify-center mb-8 border border-zinc-200 shadow-sm transition-transform duration-500 group-hover/cta:-translate-y-2">
<iconify-icon className="w-8 h-8 text-zinc-900 animate-[pulse_3s_ease-in-out_infinite]" icon="solar:crown-linear"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-8">Comece sua jornada de Maestria hoje.</h2>
<div className="flex flex-col items-center gap-4 mb-10 border-y border-zinc-100 py-8">
<div className="flex items-center gap-3 text-base font-normal text-zinc-600">
<iconify-icon className="w-5 h-5 text-zinc-900" icon="solar:check-circle-linear"></iconify-icon>
                        Acesso ao sistema completo no Notion
                    </div>
<div className="flex items-center gap-3 text-base font-normal text-zinc-600">
<iconify-icon className="w-5 h-5 text-zinc-900" icon="solar:check-circle-linear"></iconify-icon>
                        Entrega digital e acesso imediato
                    </div>
<div className="flex items-center gap-3 text-base font-normal text-zinc-600">
<iconify-icon className="w-5 h-5 text-zinc-900" icon="solar:check-circle-linear"></iconify-icon>
                        Pagamento único, sem mensalidades
                    </div>
</div>
<div className="mb-8 flex flex-col items-center">
<span className="text-base font-normal text-zinc-400 line-through mb-1">De R$ 197,00 por</span>
<span className="text-6xl font-medium tracking-tighter text-zinc-900">R$ 95,00</span>
</div>
<button className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 rounded-full bg-zinc-900 text-white text-base md:text-lg font-medium hover:scale-[1.02] hover:bg-black shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.2)] transition-all gap-2 group">
                    Quero acessar por R$ 95,00
                    <iconify-icon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-400">
<iconify-icon className="w-4 h-4" icon="solar:shield-check-linear"></iconify-icon>
                    Pagamento 100% seguro
                </div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto border-t border-zinc-100 reveal" id="faq">
<h2 className="text-3xl font-medium tracking-tight mb-12 text-center text-zinc-900">Perguntas Frequentes</h2>
<div className="space-y-4">
<details className="group border border-zinc-200 bg-white shadow-sm rounded-2xl p-5 hover:bg-zinc-50 transition-colors">
<summary className="flex justify-between items-center font-normal cursor-pointer list-none text-lg tracking-tight text-zinc-800 hover:text-zinc-900 transition-colors">
                        Preciso saber usar Notion?
                        <span className="transition duration-300 group-open:rotate-45 text-zinc-400 group-hover:text-zinc-900">
<iconify-icon className="w-5 h-5" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<p className="text-zinc-600 mt-4 text-base font-light leading-relaxed border-t border-zinc-100 pt-4">Não. O sistema já vem pronto para uso. Ele é intuitivo e desenhado de forma simples para que qualquer iniciante consiga operar sem dificuldades.</p>
</details>
<details className="group border border-zinc-200 bg-white shadow-sm rounded-2xl p-5 hover:bg-zinc-50 transition-colors">
<summary className="flex justify-between items-center font-normal cursor-pointer list-none text-lg tracking-tight text-zinc-800 hover:text-zinc-900 transition-colors">
                        Funciona no celular?
                        <span className="transition duration-300 group-open:rotate-45 text-zinc-400 group-hover:text-zinc-900">
<iconify-icon className="w-5 h-5" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<p className="text-zinc-600 mt-4 text-base font-light leading-relaxed border-t border-zinc-100 pt-4">Sim. O layout foi construído pensando na usabilidade tanto para computador quanto para o aplicativo mobile do Notion, garantindo que você gerencie tudo de qualquer lugar.</p>
</details>
<details className="group border border-zinc-200 bg-white shadow-sm rounded-2xl p-5 hover:bg-zinc-50 transition-colors">
<summary className="flex justify-between items-center font-normal cursor-pointer list-none text-lg tracking-tight text-zinc-800 hover:text-zinc-900 transition-colors">
                        O acesso é vitalício?
                        <span className="transition duration-300 group-open:rotate-45 text-zinc-400 group-hover:text-zinc-900">
<iconify-icon className="w-5 h-5" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<p className="text-zinc-600 mt-4 text-base font-light leading-relaxed border-t border-zinc-100 pt-4">Sim! Você paga R$ 95,00 uma única vez e o sistema será seu para sempre, sem mensalidades ou taxas ocultas.</p>
</details>
<details className="group border border-zinc-200 bg-white shadow-sm rounded-2xl p-5 hover:bg-zinc-50 transition-colors">
<summary className="flex justify-between items-center font-normal cursor-pointer list-none text-lg tracking-tight text-zinc-800 hover:text-zinc-900 transition-colors">
                        Como recebo o produto?
                        <span className="transition duration-300 group-open:rotate-45 text-zinc-400 group-hover:text-zinc-900">
<iconify-icon className="w-5 h-5" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<p className="text-zinc-600 mt-4 text-base font-light leading-relaxed border-t border-zinc-100 pt-4">Após a confirmação do pagamento, você receberá um e-mail com o link de acesso imediato para duplicar o Maestria Nômade para a sua própria conta do Notion.</p>
</details>
<details className="group border border-zinc-200 bg-white shadow-sm rounded-2xl p-5 hover:bg-zinc-50 transition-colors">
<summary className="flex justify-between items-center font-normal cursor-pointer list-none text-lg tracking-tight text-zinc-800 hover:text-zinc-900 transition-colors">
                        O que é PM — Pontos de Maestria?
                        <span className="transition duration-300 group-open:rotate-45 text-zinc-400 group-hover:text-zinc-900">
<iconify-icon className="w-5 h-5" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<p className="text-zinc-600 mt-4 text-base font-light leading-relaxed border-t border-zinc-100 pt-4">É o nosso exclusivo sistema de gamificação. Sempre que você conclui um hábito, avança em um projeto ou finaliza metas, o sistema soma pontos automaticamente, mostrando seu nível de evolução real.</p>
</details>
<details className="group border border-zinc-200 bg-white shadow-sm rounded-2xl p-5 hover:bg-zinc-50 transition-colors">
<summary className="flex justify-between items-center font-normal cursor-pointer list-none text-lg tracking-tight text-zinc-800 hover:text-zinc-900 transition-colors">
                        Esse sistema serve para qualquer rotina?
                        <span className="transition duration-300 group-open:rotate-45 text-zinc-400 group-hover:text-zinc-900">
<iconify-icon className="w-5 h-5" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<p className="text-zinc-600 mt-4 text-base font-light leading-relaxed border-t border-zinc-100 pt-4">Sim, o ecossistema é altamente adaptável. Seja você um estudante, empresário, criador ou apenas alguém buscando organizar a vida pessoal, o sistema se molda às suas próprias necessidades.</p>
</details>
</div>
</section>

<footer className="border-t border-zinc-200 pt-16 pb-8 px-6 bg-white">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="flex flex-col items-center md:items-start gap-3">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-6 h-6 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
<svg className="w-full h-full" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" fill="#000000" r="50"></circle>
<path d="M30 55 C 20 45, 30 35, 40 45 L 60 65 C 70 75, 80 65, 70 55 L 45 35" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="9"></path>
</svg>
</div>
<span className="tracking-tight font-medium text-base text-zinc-900 uppercase">MAESTRIA NÔMADE</span>
</div>
<p className="text-xs text-zinc-500 font-normal">Construa sua própria evolução.</p>
</div>
<div className="flex gap-6 text-sm font-normal text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Termos de Uso</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Privacidade</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Suporte</a>
</div>
</div>
<div className="max-w-6xl mx-auto text-center border-t border-zinc-100 pt-8">
<p className="text-base text-zinc-500 font-normal tracking-tight mb-4">
                    "Você não precisa de mais motivação. Você precisa de um sistema."
                </p>
<div className="text-xs text-zinc-400 font-light">
                    © 2024 Maestria Nômade. Todos os direitos reservados.
                </div>
</div>
</footer>
</main>



    </>
  );
}
