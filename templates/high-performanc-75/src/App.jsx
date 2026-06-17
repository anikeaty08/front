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



        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            });
        });
    
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600 opacity-[0.04] blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-400 opacity-[0.04] blur-[120px]"></div>
</div>

<header className="fixed top-0 w-full z-50 bg-[#030712]/40 backdrop-blur-xl border-b border-white/10 shadow-[inset_0_-1px_0_rgba(255,255,255,0.02)]">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl md:text-2xl font-bold tracking-tight uppercase flex items-center gap-2" href="#">
<iconify-icon className="text-blue-500" height="24" icon="solar:bolt-linear" width="24"></iconify-icon>
                High<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Perf</span>
</a>
<nav className="hidden md:flex gap-8 text-sm font-normal tracking-wide uppercase text-slate-400">
<a className="hover:text-white transition-colors" href="#sobre">Sobre</a>
<a className="hover:text-white transition-colors" href="#equipamentos">Infraestrutura</a>
<a className="hover:text-white transition-colors" href="#planos">Planos</a>
<a className="hover:text-white transition-colors" href="#coaches">Coaches</a>
</nav>
<div className="hidden md:block">
<a className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] text-sm font-normal text-white hover:bg-white/[0.08] transition-all" href="#contato">
                    Área do Aluno
                </a>
</div>
<button className="md:hidden text-white flex items-center justify-center">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</header>

<section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#030712] via-[#0B1121] to-[#06152B]"></div>
<div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
<div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#030712] via-transparent to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-16 py-16">
<div className="flex-1 text-center md:text-left fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-400/20 text-xs font-normal text-cyan-300 mb-8 uppercase tracking-widest shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    Exclusividade &amp; Performance
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-[0.95] mb-6">
                    Alta <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-400">Performance</span><br/>
                    Começa Aqui.
                </h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto md:mx-0 mb-10 font-light leading-relaxed">
                    Transforme disciplina em resultado real. Um ambiente premium com tecnologia de ponta e metodologia avançada para elevar seu nível.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
<a className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-normal hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all" href="#planos">
                        Agendar Visita Gratuita
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] text-white font-normal hover:bg-white/[0.08] transition-all gap-2" href="#contato">
                        Falar com Especialista
                        <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="flex-1 relative hidden lg:block fade-in delay-2">

<div className="relative w-full max-w-md mx-auto aspect-[4/5] bg-white/[0.02] backdrop-blur-2xl rounded-3xl border border-white/10 shadow-[0_16px_64px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] p-6 flex flex-col justify-end overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent"></div>
<div className="relative z-10 space-y-4">
<div className="flex items-center justify-between">
<span className="text-sm font-normal text-slate-300">Treino de Hoje</span>
<iconify-icon className="text-white" height="24" icon="solar:menu-dots-circle-linear" width="24"></iconify-icon>
</div>
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
<div className="h-full w-[75%] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full relative">
<div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/30 blur-[2px]"></div>
</div>
</div>
<h3 className="text-3xl font-medium tracking-tight uppercase text-white shadow-sm">Força Total</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-y border-white/5 relative z-10 bg-[#030712]/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
<div className="pt-8 md:pt-0">
<p className="text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">+5.000</p>
<p className="text-sm uppercase tracking-widest text-slate-500 font-normal">Alunos Ativos</p>
</div>
<div className="pt-8 md:pt-0">
<p className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-2">92%</p>
<p className="text-sm uppercase tracking-widest text-slate-500 font-normal">Frequência Média</p>
</div>
<div className="pt-8 md:pt-0">
<p className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-2">+10</p>
<p className="text-sm uppercase tracking-widest text-slate-500 font-normal">Anos de Experiência</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="sobre">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-sm font-normal uppercase tracking-widest text-blue-500">O Conceito</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight uppercase leading-tight">
                    Redefinindo o <br/> <span className="text-slate-500">padrão de treino.</span>
</h3>
<div className="space-y-6 text-lg text-slate-400 font-light leading-relaxed">
<p>
                        Somos uma academia premium focada em performance real. Não acreditamos em promessas vazias, mas na combinação exata entre tecnologia de precisão, metodologia validada e acompanhamento profissional obstinado.
                    </p>
<p>
                        Nosso ambiente foi milimetricamente projetado com iluminação cênica, acústica imersiva e equipamentos selecionados para elevar seu foco e entregar resultados consistentes, dia após dia.
                    </p>
</div>
</div>
<div className="relative h-[500px] rounded-3xl overflow-hidden group">
<div className="absolute inset-0 bg-[#0B1121] z-0"></div>
<img alt="Ambiente da academia" className="absolute w-full h-full object-cover z-10 opacity-50 group-hover:opacity-70 transition-opacity duration-700 mix-blend-luminosity" src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-[#030712]/80 z-20"></div>
<div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl z-30"></div>
</div>
</div>
</section>

<section className="py-24 bg-[#050B14] relative" id="equipamentos">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 space-y-4">
<h2 className="text-sm font-normal uppercase tracking-widest text-cyan-400">Infraestrutura Premium</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight uppercase">Equipamentos de Elite</h3>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-300 group">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-cyan-400" height="24" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium tracking-tight uppercase mb-3">Cardio Avançado</h4>
<p className="text-slate-400 text-lg font-light">Esteiras e elípticos com simulação virtual e painéis interativos.</p>
</div>

<div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-300 group">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-blue-500" height="24" icon="solar:dumbbell-large-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium tracking-tight uppercase mb-3">Peso Livre</h4>
<p className="text-slate-400 text-lg font-light">Área espaçosa com halteres calibrados e plataformas de LPO absorventes.</p>
</div>

<div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-300 group">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-sky-400" height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium tracking-tight uppercase mb-3">Máquinas Importadas</h4>
<p className="text-slate-400 text-lg font-light">Biomecânica perfeita para isolamento muscular seguro e eficiente.</p>
</div>

<div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-300 group">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-indigo-400" height="24" icon="solar:fire-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium tracking-tight uppercase mb-3">Zona Funcional</h4>
<p className="text-slate-400 text-lg font-light">Espaço dedicado a movimentos integrados, pliometria e mobilidade.</p>
</div>

<div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-300 group lg:col-span-2">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-blue-400" height="24" icon="solar:waterdrops-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium tracking-tight uppercase mb-3">Recovery Center</h4>
<p className="text-slate-400 text-lg font-light">Recuperação otimizada com crioterapia, liberação miofascial assistida e infraestrutura de vestiários padrão luxo.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative h-[600px] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-white/10">
<div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-[#030712] z-10 mix-blend-multiply"></div>
<img alt="Metodologia" className="absolute w-full h-full object-cover z-0 grayscale opacity-60" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col justify-end p-10 z-20">
<div className="bg-[#030712]/50 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] rounded-2xl p-6">
<p className="text-sm uppercase tracking-widest text-cyan-400 font-normal mb-2">Métrica Chave</p>
<p className="text-2xl font-medium tracking-tight text-white">Evolução Mensurável em 100% dos alunos no 1º trimestre.</p>
</div>
</div>
</div>
<div className="space-y-12 order-1 lg:order-2">
<div>
<h2 className="text-sm font-normal uppercase tracking-widest text-sky-400 mb-4">O Sistema</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight uppercase">Protocolo <br/> de Treinamento</h3>
</div>
<div className="space-y-8">
<div className="flex gap-6">
<div className="shrink-0 w-10 h-10 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center text-blue-400 font-medium text-sm">01</div>
<div>
<h4 className="text-xl font-medium tracking-tight mb-2">Avaliação Biomecânica</h4>
<p className="text-slate-400 text-lg font-light">Mapeamento completo de assimetrias, mobilidade e composição corporal.</p>
</div>
</div>
<div className="flex gap-6">
<div className="shrink-0 w-10 h-10 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center text-cyan-400 font-medium text-sm">02</div>
<div>
<h4 className="text-xl font-medium tracking-tight mb-2">Planejamento Científico</h4>
<p className="text-slate-400 text-lg font-light">Periodização individualizada baseada em dados, adaptada aos seus objetivos reais.</p>
</div>
</div>
<div className="flex gap-6">
<div className="shrink-0 w-10 h-10 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center text-sky-400 font-medium text-sm">03</div>
<div>
<h4 className="text-xl font-medium tracking-tight mb-2">Acompanhamento Contínuo</h4>
<p className="text-slate-400 text-lg font-light">Ajustes dinâmicos de carga e volume a cada microciclo por nossos especialistas.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050B14] relative" id="planos">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 space-y-4">
<h2 className="text-sm font-normal uppercase tracking-widest text-blue-500">Assinaturas</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight uppercase">Escolha seu Nível</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] rounded-3xl p-8 flex flex-col">
<h4 className="text-2xl font-medium tracking-tight mb-2">Livre</h4>
<p className="text-slate-400 text-lg font-light mb-8 h-12">Para quem já domina sua rotina de treino.</p>
<div className="mb-8">
<span className="text-4xl font-bold tracking-tight text-white">R$290</span><span className="text-slate-500 text-lg">/mês</span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-slate-300 text-lg font-light">
<iconify-icon className="text-cyan-400 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Acesso a toda área de musculação
                        </li>
<li className="flex items-center gap-3 text-slate-300 text-lg font-light">
<iconify-icon className="text-cyan-400 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Zona cardio e peso livre
                        </li>
<li className="flex items-center gap-3 text-slate-300 text-lg font-light">
<iconify-icon className="text-cyan-400 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Vestiários premium
                        </li>
</ul>
<a className="w-full inline-flex justify-center items-center h-12 rounded-full border border-white/10 bg-white/[0.03] text-white font-normal hover:bg-white/[0.08] transition-colors" href="#">Selecionar</a>
</div>

<div className="bg-blue-900/10 backdrop-blur-2xl border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] rounded-3xl p-8 flex flex-col relative md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-xs font-medium uppercase tracking-widest text-white shadow-md">
                        Mais Escolhido
                    </div>
<h4 className="text-2xl font-medium tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Elite</h4>
<p className="text-slate-400 text-lg font-light mb-8 h-12">Alta performance com suporte estratégico.</p>
<div className="mb-8">
<span className="text-4xl font-bold tracking-tight text-white">R$450</span><span className="text-slate-500 text-lg">/mês</span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-slate-300 text-lg font-light">
<iconify-icon className="text-blue-400 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Tudo do plano Livre
                        </li>
<li className="flex items-center gap-3 text-slate-300 text-lg font-light">
<iconify-icon className="text-blue-400 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Avaliação física bimestral
                        </li>
<li className="flex items-center gap-3 text-slate-300 text-lg font-light">
<iconify-icon className="text-blue-400 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Montagem e ajuste de treino
                        </li>
<li className="flex items-center gap-3 text-slate-300 text-lg font-light">
<iconify-icon className="text-blue-400 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Acesso às aulas de mobilidade
                        </li>
</ul>
<a className="w-full inline-flex justify-center items-center h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-normal hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all" href="#">Começar Agora</a>
</div>

<div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] rounded-3xl p-8 flex flex-col">
<h4 className="text-2xl font-medium tracking-tight mb-2">Personal</h4>
<p className="text-slate-400 text-lg font-light mb-8 h-12">Mentoria 1-1 para resultados extremos.</p>
<div className="mb-8">
<span className="text-4xl font-bold tracking-tight text-white">R$1.200</span><span className="text-slate-500 text-lg">/mês</span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-slate-300 text-lg font-light">
<iconify-icon className="text-cyan-400 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Treino 100% acompanhado
                        </li>
<li className="flex items-center gap-3 text-slate-300 text-lg font-light">
<iconify-icon className="text-cyan-400 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Recovery center liberado
                        </li>
<li className="flex items-center gap-3 text-slate-300 text-lg font-light">
<iconify-icon className="text-cyan-400 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Agendamento flexível
                        </li>
</ul>
<a className="w-full inline-flex justify-center items-center h-12 rounded-full border border-white/10 bg-white/[0.03] text-white font-normal hover:bg-white/[0.08] transition-colors" href="#">Falar com Consultor</a>
</div>
</div>
</div>
</section>

<section className="py-24" id="coaches">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="space-y-4 max-w-xl">
<h2 className="text-sm font-normal uppercase tracking-widest text-cyan-400">O Time</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight uppercase">Mentes por trás <br/> da performance</h3>
</div>
<a className="text-sm font-normal text-slate-400 hover:text-white uppercase flex items-center gap-2 transition-colors" href="#">
                    Ver todos
                    <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#0B1121]">
<img alt="Coach" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-90 mix-blend-luminosity" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<p className="text-cyan-400 text-sm font-normal uppercase tracking-widest mb-1">Head Coach</p>
<h4 className="text-xl font-medium tracking-tight text-white uppercase">Marcus Silva</h4>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#0B1121]">
<img alt="Coach" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-90 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<p className="text-blue-400 text-sm font-normal uppercase tracking-widest mb-1">Especialista LPO</p>
<h4 className="text-xl font-medium tracking-tight text-white uppercase">Sarah Costa</h4>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#0B1121]">
<img alt="Coach" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-90 mix-blend-luminosity" src="https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<p className="text-sky-400 text-sm font-normal uppercase tracking-widest mb-1">Biomecânica</p>
<h4 className="text-xl font-medium tracking-tight text-white uppercase">Rafael Mendes</h4>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#0B1121]">
<img alt="Coach" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-90 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<p className="text-indigo-400 text-sm font-normal uppercase tracking-widest mb-1">Fisiologia</p>
<h4 className="text-xl font-medium tracking-tight text-white uppercase">Elena Torres</h4>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050B14]">
<div className="max-w-3xl mx-auto px-6">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight uppercase text-center mb-12">Perguntas Comuns</h3>
<div className="space-y-4 border-t border-white/5 pt-4">
<details className="group bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/5 overflow-hidden open:border-blue-500/30 open:bg-white/[0.04] transition-all">
<summary className="flex justify-between items-center font-normal cursor-pointer list-none p-6 text-lg hover:text-blue-400 transition-colors">
<span>Como funciona o processo de matrícula?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-500" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 text-lg font-light p-6 pt-0 leading-relaxed">
                        A matrícula pode ser feita online ou presencialmente. Recomendamos agendar uma visita gratuita para conhecer a infraestrutura e passar por uma breve entrevista com nossos consultores para definir o melhor plano para você.
                    </div>
</details>
<details className="group bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/5 overflow-hidden open:border-blue-500/30 open:bg-white/[0.04] transition-all">
<summary className="flex justify-between items-center font-normal cursor-pointer list-none p-6 text-lg hover:text-cyan-400 transition-colors">
<span>Preciso fazer avaliação física antes de treinar?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-500" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 text-lg font-light p-6 pt-0 leading-relaxed">
                        Para os planos Elite e Personal, a avaliação é obrigatória e está inclusa. Para o plano Livre, é opcional, porém altamente recomendada para garantirmos a prescrição correta do seu treinamento.
                    </div>
</details>
<details className="group bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/5 overflow-hidden open:border-blue-500/30 open:bg-white/[0.04] transition-all">
<summary className="flex justify-between items-center font-normal cursor-pointer list-none p-6 text-lg hover:text-sky-400 transition-colors">
<span>Existe fidelidade ou posso cancelar quando quiser?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-500" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 text-lg font-light p-6 pt-0 leading-relaxed">
                        Nossos planos padrão são mensais com renovação automática, sem taxa de cancelamento mediante aviso prévio de 15 dias. Planos anuais possuem condições especiais.
                    </div>
</details>
<details className="group bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/5 overflow-hidden open:border-blue-500/30 open:bg-white/[0.04] transition-all">
<summary className="flex justify-between items-center font-normal cursor-pointer list-none p-6 text-lg hover:text-blue-500 transition-colors">
<span>Como funciona o acompanhamento no plano Elite?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-500" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 text-lg font-light p-6 pt-0 leading-relaxed">
                        No plano Elite, você tem acesso ao nosso aplicativo exclusivo onde seu treino é atualizado. Além disso, nossos professores de salão são proativos e farão correções e orientações constantes durante sua permanência na academia.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden text-center">

<div className="absolute inset-0 -z-10 bg-[#030712]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 opacity-10 blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-[1.1] mb-8 text-white">
                Seu próximo nível <br/> começa com <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">uma decisão.</span>
</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
<a className="w-full sm:w-auto inline-flex items-center justify-center h-16 px-10 rounded-full bg-white text-[#030712] text-lg font-medium hover:scale-105 transition-transform" href="#planos">
                    Agendar Visita Gratuita
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center h-16 px-10 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] text-white text-lg font-normal hover:bg-white/[0.08] transition-colors" href="#contato">
                    Falar com Especialista
                </a>
</div>
</div>
</section>

<footer className="bg-[#030712] border-t border-white/10 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1 space-y-6">
<a className="text-xl md:text-2xl font-bold tracking-tight uppercase flex items-center gap-2" href="#">
<iconify-icon className="text-blue-500" height="24" icon="solar:bolt-linear" width="24"></iconify-icon>
                        High<span className="text-white">Perf</span>
</a>
<p className="text-slate-500 text-sm leading-relaxed font-light">
                        Transformando disciplina em resultado real através de um ambiente premium e metodologia avançada.
                    </p>
</div>
<div>
<h5 className="text-white font-normal uppercase tracking-widest text-sm mb-6">Navegação</h5>
<ul className="space-y-4 text-sm text-slate-400 font-light">
<li><a className="hover:text-blue-400 transition-colors" href="#sobre">Sobre Nós</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#equipamentos">Infraestrutura</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#planos">Planos e Preços</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#coaches">Nossos Coaches</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-normal uppercase tracking-widest text-sm mb-6">Localização</h5>
<ul className="space-y-4 text-sm text-slate-400 font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-500 shrink-0" height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
<span>Av. das Nações Unidas, 12901<br/>Brooklin Paulista, São Paulo - SP</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-slate-500 shrink-0" height="20" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<span>Seg a Sex: 05h às 23h<br/>Sáb e Dom: 07h às 15h</span>
</li>
</ul>
</div>
<div>
<h5 className="text-white font-normal uppercase tracking-widest text-sm mb-6">Contato</h5>
<ul className="space-y-4 text-sm text-slate-400 font-light">
<li className="flex items-center gap-3">
<iconify-icon className="text-slate-500" height="20" icon="solar:phone-linear" width="20"></iconify-icon>
                            (11) 99999-9999
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-slate-500" height="20" icon="solar:letter-linear" width="20"></iconify-icon>
                            contato@highperf.com
                        </li>
<li className="flex items-center gap-4 mt-6 pt-2">
<a className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/5 flex items-center justify-center hover:bg-blue-500 transition-colors text-white" href="#">
<iconify-icon height="18" icon="solar:camera-linear" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/5 flex items-center justify-center hover:bg-cyan-400 transition-colors text-white" href="#">
<iconify-icon height="18" icon="solar:laptop-linear" width="18"></iconify-icon>
</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-light">
<p>© 2024 Academia High Performance. Todos os direitos reservados.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Termos de Uso</a>
<a className="hover:text-white transition-colors" href="#">Política de Privacidade</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
