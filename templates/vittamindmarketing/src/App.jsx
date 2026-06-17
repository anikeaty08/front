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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Inter"', 'sans-serif'],
display: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
medical: {
50: '#f2fcf8',
100: '#e3f8ef',
200: '#cbf2e0',
300: '#a6e6cb',
400: '#75d3b1',
500: '#4db693',
600: '#359678',
700: '#2d7862',
800: '#286050',
900: '#234f43',
950: '#0f2e27',
},
onyx: {
800: '#1f1f1f',
900: '#121212',
950: '#0a0a0a',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        lucide.createIcons();

        // Reveal Animation Logic
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
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
      

<nav className="fixed top-0 w-full z-50 mix-blend-difference text-white py-6 px-6 md:px-12 flex justify-between items-center pointer-events-none">
<div className="font-display font-bold text-xl tracking-tighter pointer-events-auto cursor-default">
            Vitta<span className="font-light text-white/70">MIND</span>
</div>
<a className="pointer-events-auto text-xs font-medium border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm" href="#diagnostico">
            Agendar Diagnóstico
        </a>
</nav>

<section className="min-h-screen relative flex flex-col justify-center items-center px-6 overflow-hidden bg-onyx-950">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-medical-900/20 blur-[120px] animate-pulse-slow"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-slate-800/20 blur-[100px]"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10 pt-20">
<h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white mb-8 leading-[1.1] reveal active">
                Transforme Sua Prática Médica em uma Marca com <span className="text-medical-400 italic">Autoridade</span> e Resultado
            </h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed reveal delay-100">
                Consultoria estratégica completa para médicos que querem atrair os pacientes certos, crescer com clareza e construir um negócio lucrativo — sem depender de agências tradicionais.
            </p>
<div className="flex flex-col items-center gap-4 reveal delay-200">
<a className="group relative inline-flex items-center gap-3 px-8 py-4 bg-medical-600 text-white rounded-lg overflow-hidden transition-all duration-300 hover:bg-medical-500 hover:shadow-[0_0_40px_-10px_rgba(53,150,120,0.5)]" href="#diagnostico">
<span className="relative font-medium tracking-tight">Quero Fazer Meu Diagnóstico Estratégico Gratuito</span>
<i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
<span className="text-xs text-slate-500 font-medium tracking-wide uppercase">
                    Sessão de 60 minutos para identificar suas maiores oportunidades de crescimento
                </span>
</div>
</div>
</section>

<section className="py-24 bg-onyx-950 border-t border-white/5 relative">
<div className="max-w-6xl mx-auto px-6">
<div className="max-w-2xl mb-16 reveal">
<h2 className="font-display text-3xl md:text-4xl text-white font-medium tracking-tight mb-4">
                    Você é um Excelente Médico, Mas Isso Não é Suficiente Para Crescer
                </h2>
<p className="text-slate-400 text-lg">
                    Se você sente que está preso nestes desafios, você não está sozinho:
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="lg:col-span-2 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-medical-500/30 transition-colors group reveal">
<div className="mb-6 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
<i className="w-5 h-5" data-lucide="calendar-x"></i>
</div>
<h3 className="text-xl font-display font-medium text-white mb-3">Agenda vazia ou com pacientes que não valorizam seu trabalho</h3>
<p className="text-slate-400 leading-relaxed font-light text-sm">
                        Você atende qualquer perfil, aceita qualquer caso, mas não consegue cobrar o que realmente vale — e a agenda não reflete a qualidade do seu atendimento.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-medical-500/30 transition-colors group reveal delay-75">
<div className="mb-6 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
<i className="w-5 h-5" data-lucide="smartphone-off"></i>
</div>
<h3 className="text-lg font-display font-medium text-white mb-3">Presença digital confusa e sem conversão</h3>
<p className="text-slate-400 leading-relaxed font-light text-sm">
                        Você posta conteúdo, investe em redes sociais, mas não gera autoridade, não atrai pacientes qualificados e não sabe medir o retorno.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-medical-500/30 transition-colors group reveal delay-100">
<div className="mb-6 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
<i className="w-5 h-5" data-lucide="trending-down"></i>
</div>
<h3 className="text-lg font-display font-medium text-white mb-3">Dependência de indicações e imprevisibilidade</h3>
<p className="text-slate-400 leading-relaxed font-light text-sm">
                        Seu consultório vive de boca a boca. Quando as indicações caem, a receita despenca — e você não tem controle sobre isso.
                    </p>
</div>

<div className="lg:col-span-2 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-medical-500/30 transition-colors group reveal delay-150">
<div className="mb-6 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
<i className="w-5 h-5" data-lucide="dollar-sign"></i>
</div>
<h3 className="text-xl font-display font-medium text-white mb-3">Dificuldade em precificar e vender seus serviços</h3>
<p className="text-slate-400 leading-relaxed font-light text-sm">
                        Você não tem clareza sobre quanto cobrar, como apresentar suas ofertas ou como conduzir uma conversa de vendas sem parecer "comercial demais".
                    </p>
</div>

<div className="lg:col-span-3 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-medical-500/30 transition-colors group reveal delay-200">
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<div>
<h3 className="text-xl font-display font-medium text-white mb-2">Falta de tempo para tocar o negócio</h3>
<p className="text-slate-400 leading-relaxed font-light text-sm">
                                Você passa o dia atendendo, mas não tem estratégia, não documenta processos e sente que está sempre apagando incêndios.
                            </p>
</div>
</div>
</div>
</div>
<div className="mt-16 p-8 border-l-2 border-medical-500 bg-white/5 reveal">
<h4 className="text-white font-medium mb-4 text-lg">A verdade é dura, mas libertadora:</h4>
<p className="text-slate-400 font-light leading-relaxed">
                    Ser um bom médico não garante um consultório bem-sucedido. Você precisa de posicionamento claro, ofertas estruturadas e uma máquina de atração e conversão que funcione — mesmo quando você está atendendo.
                </p>
</div>
</div>
</section>

<section className="py-32 bg-stone-50 text-slate-900">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 items-start">
<div className="md:w-1/3 reveal sticky top-32">
<div className="w-12 h-1 bg-medical-600 mb-8"></div>
<h2 className="font-display text-4xl font-medium tracking-tight mb-6 text-slate-900">
                        Não Vendemos Pacotes. Construímos Soluções.
                    </h2>
</div>
<div className="md:w-2/3 space-y-8 reveal delay-100">
<h3 className="text-xl md:text-2xl font-light text-slate-600 leading-relaxed">
                        A VittaMIND nasceu da união entre vivência médica e inteligência estratégica. Não somos uma agência tradicional — somos especialistas em transformar médicos em marcas fortes, com presença ética, relevante e orientada a resultado.
                    </h3>
<div className="h-px w-full bg-slate-200"></div>
<p className="text-slate-500 leading-relaxed">
                        Cada estratégia começa com uma análise profunda do seu cenário. Entregamos posicionamento, funil e conteúdo baseados no que realmente faz sentido <strong>para o seu momento</strong>.
                    </p>
<p className="text-slate-500 leading-relaxed">
                        Trabalhamos lado a lado com você para construir autoridade, atrair os pacientes certos e crescer com clareza.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-200">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Quem Está Por Trás da VittaMIND</h2>
<p className="text-slate-500 font-light">Uma dupla que une experiência clínica real com visão estratégica de alto nível.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="group bg-stone-50 border border-stone-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300 reveal">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 overflow-hidden">

<i className="w-8 h-8" data-lucide="user"></i>
</div>
<div>
<h3 className="font-display text-lg font-semibold text-slate-900">Gustavo Resende</h3>
<p className="text-xs font-medium uppercase tracking-wider text-medical-600 mt-1">Médico Empreendedor | Cofundador VittaMIND</p>
</div>
</div>
<p className="text-sm text-slate-600 mb-6 font-light">
                        Casado com a Ana Júlia. Sócio fundador da Clínica Vivace. Experiência na criação e gestão de negócios no setor da saúde, com ênfase em excelência de marca.
                    </p>
<blockquote className="pl-4 border-l-2 border-medical-200 text-slate-800 italic text-sm font-medium leading-relaxed">
                        "Minha missão é impulsionar o crescimento de profissionais e clínicas médicas através de estratégias que unem branding, marketing de performance e visão comercial inteligente."
                    </blockquote>
</div>

<div className="group bg-stone-50 border border-stone-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300 reveal delay-100">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 overflow-hidden">

<i className="w-8 h-8" data-lucide="user"></i>
</div>
<div>
<h3 className="font-display text-lg font-semibold text-slate-900">Leandro Cassulli</h3>
<p className="text-xs font-medium uppercase tracking-wider text-medical-600 mt-1">Estrategista de Marca | Fundador Renew Group</p>
</div>
</div>
<p className="text-sm text-slate-600 mb-6 font-light">
                        Casado com a Sophia, pai da Maya. Empresário e estrategista de marca com experiência em posicionamento de marcas digitais com foco em performance e valor percebido.
                    </p>
<blockquote className="pl-4 border-l-2 border-medical-200 text-slate-800 italic text-sm font-medium leading-relaxed">
                        "Minha missão é transformar negócios em marcas fortes e estratégicas, unindo clareza, design de alto impacto e foco em resultados reais."
                    </blockquote>
</div>
</div>
</div>
</section>

<section className="py-24 bg-medical-950 text-white overflow-hidden relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-medical-800/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="mb-16 reveal max-w-2xl">
<span className="text-medical-400 font-mono text-xs uppercase tracking-widest mb-3 block">Metodologia Exclusiva</span>
<h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight mb-6">
                    Como Transformamos Sua Prática Médica
                </h2>
<p className="text-white/60 font-light text-lg">
                    Nossa metodologia <strong>M.I.N.D.</strong> guia cada etapa do seu crescimento:
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden shadow-2xl">

<div className="bg-medical-900/40 p-10 hover:bg-medical-900/60 transition-all duration-300 group relative overflow-hidden reveal">
<span className="absolute -right-4 -bottom-8 text-[150px] font-display font-bold text-white/5 group-hover:text-white/10 transition-colors select-none">M</span>
<h3 className="text-2xl font-display font-medium text-medical-300 mb-4 relative z-10">M — Mentoria</h3>
<p className="text-white/70 font-light leading-relaxed relative z-10">Sessões estratégicas semanais + suporte contínuo para decisões críticas.</p>
</div>

<div className="bg-medical-900/40 p-10 hover:bg-medical-900/60 transition-all duration-300 group relative overflow-hidden reveal delay-75">
<span className="absolute -right-4 -bottom-8 text-[150px] font-display font-bold text-white/5 group-hover:text-white/10 transition-colors select-none">I</span>
<h3 className="text-2xl font-display font-medium text-medical-300 mb-4 relative z-10">I — Identidade</h3>
<p className="text-white/70 font-light leading-relaxed relative z-10">Definição do seu posicionamento, proposta de valor e narrativa de marca.</p>
</div>

<div className="bg-medical-900/40 p-10 hover:bg-medical-900/60 transition-all duration-300 group relative overflow-hidden reveal delay-100">
<span className="absolute -right-4 -bottom-8 text-[150px] font-display font-bold text-white/5 group-hover:text-white/10 transition-colors select-none">N</span>
<h3 className="text-2xl font-display font-medium text-medical-300 mb-4 relative z-10">N — Negócio</h3>
<p className="text-white/70 font-light leading-relaxed relative z-10">Estruturação de produtos, precificação e modelo de monetização.</p>
</div>

<div className="bg-medical-900/40 p-10 hover:bg-medical-900/60 transition-all duration-300 group relative overflow-hidden reveal delay-150">
<span className="absolute -right-4 -bottom-8 text-[150px] font-display font-bold text-white/5 group-hover:text-white/10 transition-colors select-none">D</span>
<h3 className="text-2xl font-display font-medium text-medical-300 mb-4 relative z-10">D — Diferenciação</h3>
<p className="text-white/70 font-light leading-relaxed relative z-10">Construção de autoridade e presença digital que te destaca da concorrência.</p>
</div>
</div>
<div className="mt-16 text-center reveal delay-200">
<p className="text-xl text-white font-medium mb-8">E aplicamos tudo isso através do Método MVP:</p>
<div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
<div className="flex items-center gap-3 text-white/80">
<i className="text-medical-400" data-lucide="check-circle-2"></i>
<span><strong>Marketing</strong> que atrai pacientes qualificados</span>
</div>
<div className="flex items-center gap-3 text-white/80">
<i className="text-medical-400" data-lucide="check-circle-2"></i>
<span><strong>Vendas</strong> consultivas que convertem</span>
</div>
<div className="flex items-center gap-3 text-white/80">
<i className="text-medical-400" data-lucide="check-circle-2"></i>
<span><strong>Produtos</strong> estruturados e escaláveis</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-20 reveal">
<h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">As 7 Fases da Transformação VittaMIND</h2>
<p className="text-slate-500 font-light">Um sistema completo, testado e comprovado para levar você do zero ao consultório estruturado e lucrativo.</p>
</div>
<div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-stone-50 bg-slate-900 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10 text-sm font-bold">0</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-medical-500/50 transition-colors">
<h3 className="font-display text-lg font-bold text-slate-900 mb-2">Fase 0: Diagnóstico Completo</h3>
<p className="text-sm text-slate-500 mb-3 font-light">Mapeamento de 10 pilares do seu negócio: identidade, posicionamento, oferta, público-alvo, autoridade, marketing, metas, estrutura, investimento e autoavaliação.</p>
<p className="text-xs font-semibold text-medical-700 bg-medical-50 inline-block px-2 py-1 rounded">Entrega: Relatório completo + definição de KPIs e metas claras para 90 e 180 dias.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-stone-50 bg-slate-900 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10 text-sm font-bold">1</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-medical-500/50 transition-colors">
<h3 className="font-display text-lg font-bold text-slate-900 mb-2">Fase 1: Posicionamento Premium</h3>
<p className="text-sm text-slate-500 mb-3 font-light">Definição precisa de quem você atende, por que escolhem você e como sua marca comunica valor.</p>
<p className="text-xs font-semibold text-medical-700 bg-medical-50 inline-block px-2 py-1 rounded">Entrega: ICP, promessa transformacional, arquétipo, oferta principal e mensagens-base.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-stone-50 bg-slate-900 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10 text-sm font-bold">2</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-medical-500/50 transition-colors">
<h3 className="font-display text-lg font-bold text-slate-900 mb-2">Fase 2: Produtos &amp; Precificação</h3>
<p className="text-sm text-slate-500 mb-3 font-light">Transformação da sua expertise clínica em produtos claros, com precificação estratégica e escada de valor.</p>
<p className="text-xs font-semibold text-medical-700 bg-medical-50 inline-block px-2 py-1 rounded">Entrega: Catálogo 3-5 ofertas, preços, políticas e materiais.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-stone-50 bg-slate-900 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10 text-sm font-bold">3</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-medical-500/50 transition-colors">
<h3 className="font-display text-lg font-bold text-slate-900 mb-2">Fase 3: Máquina de Vendas</h3>
<p className="text-sm text-slate-500 mb-3 font-light">Criação de um funil de conversão padronizado, com scripts e abordagem consultiva (sem soar "vendedor").</p>
<p className="text-xs font-semibold text-medical-700 bg-medical-50 inline-block px-2 py-1 rounded">Entrega: Mapa do funil, scripts (SPIN/NEPQ), matriz de objeções e CRM.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-stone-50 bg-slate-900 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10 text-sm font-bold">4</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-medical-500/50 transition-colors">
<h3 className="font-display text-lg font-bold text-slate-900 mb-2">Fase 4: Marketing que Atrai</h3>
<p className="text-sm text-slate-500 mb-3 font-light">Construção de autoridade através de conteúdo estratégico, parcerias e provas sociais contínuas.</p>
<p className="text-xs font-semibold text-medical-700 bg-medical-50 inline-block px-2 py-1 rounded">Entrega: Pilares 80/20, roteiros "assinatura", ativos digitais e parcerias.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-stone-50 bg-slate-900 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10 text-sm font-bold">5</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-medical-500/50 transition-colors">
<h3 className="font-display text-lg font-bold text-slate-900 mb-2">Fase 5: Treinamento da Secretária</h3>
<p className="text-sm text-slate-500 mb-3 font-light">Transformação da recepção em motor de conversão, com experiência premium e vendas consultivas.</p>
<p className="text-xs font-semibold text-medical-700 bg-medical-50 inline-block px-2 py-1 rounded">Entrega: Rotina, scripts, follow-ups, métricas e role-plays.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-stone-50 bg-slate-900 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10 text-sm font-bold">6</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-medical-500/50 transition-colors">
<h3 className="font-display text-lg font-bold text-slate-900 mb-2">Fase 6: Implantação (PDCA)</h3>
<p className="text-sm text-slate-500 mb-3 font-light">Execução de 1-2 produtos estrela com ciclo de melhoria contínua (Plan, Do, Check, Act).</p>
<p className="text-xs font-semibold text-medical-700 bg-medical-50 inline-block px-2 py-1 rounded">Entrega: Previsibilidade, aprendizado rápido e ajustes baseados em dados.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-stone-50 bg-medical-600 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10 text-sm font-bold">7</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-medical-50 p-6 rounded-xl shadow-sm border border-medical-100">
<h3 className="font-display text-lg font-bold text-slate-900 mb-2">Fase 7: Escala &amp; Consolidação</h3>
<p className="text-sm text-slate-500 mb-3 font-light">Otimização de preço, programa de indicações, eventos, cross-sell responsável e documentação final para autonomia.</p>
<p className="text-xs font-semibold text-medical-800 bg-white inline-block px-2 py-1 rounded border border-medical-100">Entrega: Negócio estruturado, escalável e pronto para crescer.</p>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col md:flex-row border-y border-stone-200">

<div className="md:w-1/2 bg-medical-950 text-white p-16 md:p-24 border-b md:border-b-0 md:border-r border-white/10">
<h2 className="font-display text-2xl font-medium tracking-tight mb-8">A VittaMIND é Para Você Se...</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5"><i className="w-3.5 h-3.5" data-lucide="check"></i></div>
<span className="text-stone-300 font-light text-sm leading-relaxed">Você é médico(a) com consultório próprio ou em fase de estruturação</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5"><i className="w-3.5 h-3.5" data-lucide="check"></i></div>
<span className="text-stone-300 font-light text-sm leading-relaxed">Quer construir uma marca forte e ser reconhecido como autoridade na sua área</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5"><i className="w-3.5 h-3.5" data-lucide="check"></i></div>
<span className="text-stone-300 font-light text-sm leading-relaxed">Deseja atrair pacientes que valorizam seu trabalho (e pagar o preço justo)</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5"><i className="w-3.5 h-3.5" data-lucide="check"></i></div>
<span className="text-stone-300 font-light text-sm leading-relaxed">Está cansado de depender só de indicações ou de agências que não entendem a medicina</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5"><i className="w-3.5 h-3.5" data-lucide="check"></i></div>
<span className="text-stone-300 font-light text-sm leading-relaxed">Busca crescimento estruturado, com estratégia clara e resultados mensuráveis</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5"><i className="w-3.5 h-3.5" data-lucide="check"></i></div>
<span className="text-stone-300 font-light text-sm leading-relaxed">Está disposto a investir tempo e recursos para construir um negócio de longo prazo</span>
</li>
</ul>
</div>

<div className="md:w-1/2 bg-stone-100 text-slate-900 p-16 md:p-24">
<h2 className="font-display text-2xl font-medium tracking-tight mb-8 text-slate-900">A VittaMIND NÃO é Para Você Se...</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5"><i className="w-3.5 h-3.5" data-lucide="x"></i></div>
<span className="text-slate-600 font-light text-sm leading-relaxed">Você busca resultado instantâneo ou "fórmula mágica" sem esforço</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5"><i className="w-3.5 h-3.5" data-lucide="x"></i></div>
<span className="text-slate-600 font-light text-sm leading-relaxed">Não está disposto a se envolver ativamente no processo estratégico</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5"><i className="w-3.5 h-3.5" data-lucide="x"></i></div>
<span className="text-slate-600 font-light text-sm leading-relaxed">Quer apenas "postar nas redes" sem estruturar o negócio por trás</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5"><i className="w-3.5 h-3.5" data-lucide="x"></i></div>
<span className="text-slate-600 font-light text-sm leading-relaxed">Não tem interesse em construir autoridade de forma ética e sustentável</span>
</li>
</ul>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="font-display text-3xl font-medium tracking-tight mb-4 text-slate-900">Médicos Que Já Transformaram Suas Práticas</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 bg-stone-50 rounded-xl border border-stone-100 reveal">
<div className="text-medical-600 mb-4"><i className="w-8 h-8 fill-current opacity-20" data-lucide="quote"></i></div>
<p className="text-slate-600 font-light text-sm leading-relaxed mb-6">"Antes da VittaMIND, eu atendia qualquer perfil de paciente e tinha dificuldade em cobrar o que meu trabalho valia. Hoje, tenho clareza total do meu posicionamento, minha agenda está preenchida com pacientes ideais e minha receita triplicou em 6 meses."</p>
<div className="font-medium text-slate-900 text-sm">— Dra. [Nome], [Especialidade], [Cidade]</div>
</div>

<div className="p-8 bg-stone-50 rounded-xl border border-stone-100 reveal delay-75">
<div className="text-medical-600 mb-4"><i className="w-8 h-8 fill-current opacity-20" data-lucide="quote"></i></div>
<p className="text-slate-600 font-light text-sm leading-relaxed mb-6">"O diferencial da VittaMIND é que eles entendem a realidade do médico empreendedor. Não é só marketing — é estratégia de negócio de verdade. Hoje eu tenho previsibilidade, processos claros e minha secretária vende melhor que eu."</p>
<div className="font-medium text-slate-900 text-sm">— Dr. [Nome], [Especialidade], [Cidade]</div>
</div>

<div className="p-8 bg-stone-50 rounded-xl border border-stone-100 reveal delay-100">
<div className="text-medical-600 mb-4"><i className="w-8 h-8 fill-current opacity-20" data-lucide="quote"></i></div>
<p className="text-slate-600 font-light text-sm leading-relaxed mb-6">"Eu estava travado na precificação e com medo de perder pacientes se cobrasse mais. A VittaMIND me ajudou a reestruturar minhas ofertas, comunicar valor de forma clara e hoje eu cobro 3x mais — com a mesma qualidade de atendimento."</p>
<div className="font-medium text-slate-900 text-sm">— Dr. [Nome], [Especialidade], [Cidade]</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-onyx-950 text-white border-y border-white/5">
<div className="max-w-6xl mx-auto px-6">
<h2 className="font-display text-3xl font-medium tracking-tight mb-16 text-center">Por Que a VittaMIND é Diferente de Qualquer Agência</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="group p-6 rounded-lg hover:bg-white/5 transition-colors reveal">
<div className="w-12 h-12 bg-medical-900 rounded-lg flex items-center justify-center text-medical-400 mb-4 group-hover:scale-110 transition-transform">1</div>
<h3 className="font-display text-lg font-medium mb-2">Vivência Real na Medicina</h3>
<p className="text-stone-400 text-sm font-light leading-relaxed">Não somos marqueteiros que estudaram saúde em um fim de semana. Gustavo é médico empreendedor que construiu e gerencia clínica própria. Entendemos suas dores porque já vivemos elas.</p>
</div>
<div className="group p-6 rounded-lg hover:bg-white/5 transition-colors reveal delay-75">
<div className="w-12 h-12 bg-medical-900 rounded-lg flex items-center justify-center text-medical-400 mb-4 group-hover:scale-110 transition-transform">2</div>
<h3 className="font-display text-lg font-medium mb-2">Estratégia Antes de Execução</h3>
<p className="text-stone-400 text-sm font-light leading-relaxed">Não começamos criando posts bonitos. Começamos estruturando seu negócio: posicionamento, ofertas, precificação, funil. Marketing vem depois — e só funciona quando a base está sólida.</p>
</div>
<div className="group p-6 rounded-lg hover:bg-white/5 transition-colors reveal delay-100">
<div className="w-12 h-12 bg-medical-900 rounded-lg flex items-center justify-center text-medical-400 mb-4 group-hover:scale-110 transition-transform">3</div>
<h3 className="font-display text-lg font-medium mb-2">Personalização Total</h3>
<p className="text-stone-400 text-sm font-light leading-relaxed">Não vendemos pacotes prontos. Cada médico tem um momento, um mercado, um objetivo. Construímos a solução sob medida para o SEU cenário.</p>
</div>
<div className="group p-6 rounded-lg hover:bg-white/5 transition-colors reveal delay-150">
<div className="w-12 h-12 bg-medical-900 rounded-lg flex items-center justify-center text-medical-400 mb-4 group-hover:scale-110 transition-transform">4</div>
<h3 className="font-display text-lg font-medium mb-2">Foco em Resultado, Não em Vaidade</h3>
<p className="text-stone-400 text-sm font-light leading-relaxed">Não medimos sucesso por curtidas ou seguidores. Medimos por agendamentos qualificados, conversão em consultas, ticket médio e receita previsível.</p>
</div>
<div className="group p-6 rounded-lg hover:bg-white/5 transition-colors reveal delay-200">
<div className="w-12 h-12 bg-medical-900 rounded-lg flex items-center justify-center text-medical-400 mb-4 group-hover:scale-110 transition-transform">5</div>
<h3 className="font-display text-lg font-medium mb-2">Acompanhamento Semanal + Suporte</h3>
<p className="text-stone-400 text-sm font-light leading-relaxed">Você não fica sozinho. Sessões estratégicas toda semana + suporte para decisões críticas sempre que precisar.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50">
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-display text-3xl font-medium tracking-tight mb-12 text-slate-900 text-center">Perguntas Frequentes</h2>
<div className="space-y-4">
<details className="group bg-white border border-slate-200 rounded-lg open:shadow-md transition-all duration-300 reveal cursor-pointer">
<summary className="flex items-center justify-between p-6 font-medium text-slate-900 select-none">
                        "Quanto tempo leva para ver resultados?"
                        <i className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 font-light leading-relaxed">
                        Depende do seu ponto de partida, mas a maioria dos médicos começa a ver mudanças claras nas primeiras 4-6 semanas (posicionamento definido, ofertas estruturadas, primeiros ajustes no funil). Resultados financeiros consistentes costumam aparecer entre 90-120 dias.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-lg open:shadow-md transition-all duration-300 reveal cursor-pointer">
<summary className="flex items-center justify-between p-6 font-medium text-slate-900 select-none">
                        "Eu preciso parar de atender para fazer a mentoria?"
                        <i className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 font-light leading-relaxed">
                        Não. As sessões estratégicas são semanais (30-60 min) e organizadas conforme sua agenda. O trabalho é dividido entre sessões de alinhamento, execução da sua equipe (ou nossa) e checkpoints rápidos.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-lg open:shadow-md transition-all duration-300 reveal cursor-pointer">
<summary className="flex items-center justify-between p-6 font-medium text-slate-900 select-none">
                        "Vocês criam o conteúdo para mim ou eu preciso gravar?"
                        <i className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 font-light leading-relaxed">
                        Você grava (afinal, é sua autoridade que está sendo construída), mas nós criamos toda a estratégia, roteiros, pilares de conteúdo e direcionamento. Você só precisa aparecer e entregar o conhecimento clínico — o resto é com a gente.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-lg open:shadow-md transition-all duration-300 reveal cursor-pointer">
<summary className="flex items-center justify-between p-6 font-medium text-slate-900 select-none">
                        "Qual o investimento?"
                        <i className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 font-light leading-relaxed">
                        O investimento varia conforme o escopo e o momento do seu negócio. Após o diagnóstico estratégico (gratuito), apresentamos uma proposta personalizada. Não trabalhamos com mensalidades baixas — trabalhamos com transformação real.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-lg open:shadow-md transition-all duration-300 reveal cursor-pointer">
<summary className="flex items-center justify-between p-6 font-medium text-slate-900 select-none">
                        "Vocês garantem resultado?"
                        <i className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 font-light leading-relaxed">
                        Garantimos entrega de estratégia, execução e acompanhamento. Resultado depende também do seu comprometimento e da aplicação do que construímos juntos. Mas se você se dedica, os números aparecem.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-lg open:shadow-md transition-all duration-300 reveal cursor-pointer">
<summary className="flex items-center justify-between p-6 font-medium text-slate-900 select-none">
                        "E se eu já trabalho com uma agência?"
                        <i className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 font-light leading-relaxed">
                        Ótimo. Podemos trabalhar em paralelo (nós cuidamos da estratégia e gestão, eles executam a operação) ou podemos assumir tudo. O importante é ter clareza de papéis e responsabilidades.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-onyx-950 text-white relative overflow-hidden" id="diagnostico">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-16">
<div className="md:w-1/2">
<h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-6">
                    Pronto Para Transformar Sua Prática Médica em uma Marca de Autoridade?
                </h2>
<h3 className="text-xl text-medical-400 mb-8 font-light">
                    Agende agora seu <strong>Diagnóstico Estratégico Gratuito</strong> e descubra as maiores oportunidades de crescimento do seu consultório.
                </h3>
<div className="space-y-4 mb-8 text-stone-300 text-sm font-light">
<p>Em 60 minutos, vamos mapear:</p>
<ul className="space-y-2 pl-4 border-l border-medical-800">
<li>- Seu posicionamento atual e gaps de clareza</li>
<li>- Oportunidades de monetização que você está deixando passar</li>
<li>- Primeiros passos para estruturar seu crescimento</li>
</ul>
</div>
<p className="font-medium text-white mb-8">Sem compromisso. Sem enrolação. Apenas clareza e direção.</p>
<div className="p-4 bg-white/5 rounded border border-white/10 text-xs text-stone-400 italic">
                    Atendemos apenas 8 médicos por trimestre para garantir acompanhamento de excelência. As vagas para o próximo ciclo abrem em [data].
                </div>
</div>
<div className="md:w-1/2">
<form className="bg-white p-8 rounded-2xl shadow-2xl text-slate-900">
<h3 className="font-display text-xl font-bold mb-6 text-center">Quero Agendar Meu Diagnóstico Gratuito</h3>
<div className="space-y-4">
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">Nome completo</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-3 text-sm focus:outline-none focus:border-medical-500 focus:ring-1 focus:ring-medical-500 transition-all" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">E-mail</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-3 text-sm focus:outline-none focus:border-medical-500 focus:ring-1 focus:ring-medical-500 transition-all" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">WhatsApp</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-3 text-sm focus:outline-none focus:border-medical-500 focus:ring-1 focus:ring-medical-500 transition-all" type="tel"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">Especialidade</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-3 text-sm focus:outline-none focus:border-medical-500 focus:ring-1 focus:ring-medical-500 transition-all" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">Cidade/Estado</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-3 text-sm focus:outline-none focus:border-medical-500 focus:ring-1 focus:ring-medical-500 transition-all" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">Maior desafio atual</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-3 text-sm focus:outline-none focus:border-medical-500 focus:ring-1 focus:ring-medical-500 transition-all resize-none" rows="3"></textarea>
</div>
<button className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-all duration-300 shadow-lg mt-2" type="button">
                            Solicitar Meu Diagnóstico Gratuito
                        </button>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-onyx-950 text-stone-500 py-12 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<div className="font-display font-bold text-white text-lg tracking-tighter mb-2">Vitta<span className="font-light text-white/70">MIND</span></div>
<p className="text-xs font-light">Transformamos médicos em marcas com autoridade e resultado.</p>
</div>
<div className="text-sm font-light text-center md:text-right space-y-1">
<p>WhatsApp: [número]</p>
<p>E-mail: [email]</p>
<p>Instagram: @vittamind</p>
</div>
</div>
<div className="text-center mt-12 text-[10px] uppercase tracking-widest text-stone-700">
            © 2024 VittaMIND. Todos os direitos reservados.
        </div>
</footer>


    </>
  );
}
