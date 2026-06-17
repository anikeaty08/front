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
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
brand: {
50: '#FFF8F1',
100: '#FFEBD4',
200: '#FFD1A3',
300: '#FFB371',
400: '#FF9140',
500: '#FF7A1F', // Primary Coral/Orange
600: '#E65D0F',
700: '#CC4608',
800: '#A63608',
900: '#7A2705',
},
neutral: {
50: '#FAFAF9', // Stone 50
100: '#F5F5F4',
200: '#E7E5E4',
800: '#292524',
900: '#1C1917',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        // Simple Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                        entry.target.style.opacity = '1';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Select elements to animate
            const elementsToAnimate = document.querySelectorAll('section > div');
            elementsToAnimate.forEach(el => {
                el.style.opacity = '0'; // Start hidden
                observer.observe(el);
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
      

<header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-neutral-200/50">
<div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-400 to-brand-300 flex items-center justify-center text-white">
<iconify-icon icon="solar:sun-2-bold" width="20"></iconify-icon>
</div>
<span className="text-xl font-bold tracking-tighter text-neutral-900">Soliv</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
<a className="hover:text-brand-600 transition-colors" href="#problema">O Problema</a>
<a className="hover:text-brand-600 transition-colors" href="#como-funciona">Como Funciona</a>
<a className="hover:text-brand-600 transition-colors" href="#diferenciais">Diferenciais</a>
<a className="hover:text-brand-600 transition-colors" href="#depoimentos">Depoimentos</a>
</nav>

<div className="hidden md:flex items-center gap-2 bg-neutral-100 p-1 pl-4 rounded-full border border-neutral-200 focus-within:ring-2 focus-within:ring-brand-200 transition-all">
<iconify-icon className="text-neutral-400" icon="solar:letter-linear"></iconify-icon>
<input className="bg-transparent border-none text-sm outline-none w-48 text-neutral-700 placeholder:text-neutral-400" placeholder="Seu melhor email" type="email"/>
<button className="bg-brand-500 hover:bg-brand-600 text-white text-xs font-semibold py-2 px-4 rounded-full transition-transform active:scale-95 shadow-lg shadow-brand-500/20">
                    Entrar na Waitlist
                </button>
</div>

<button className="md:hidden text-neutral-800">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</header>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-100/40 via-neutral-50/0 to-neutral-50/0 -z-10 pointer-events-none"></div>
<div className="container mx-auto px-4 md:px-6 text-center max-w-5xl">

<div className="inline-flex items-center gap-1.5 bg-white border border-neutral-200 rounded-full py-1.5 px-4 mb-8 shadow-sm animate-fade-in-up">
<div className="flex text-yellow-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs font-semibold text-neutral-700">4.9 - Mais de 50.000 pessoas usando</span>
</div>

<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 mb-6 leading-[1.1] animate-fade-in-up [animation-delay:100ms]">
                Consistência nasce da <span className="text-brand-500">flexibilidade</span>,<br className="hidden md:block"/> não da pressão.
            </h1>
<p className="text-lg md:text-xl text-neutral-600 mb-4 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:200ms]">
                Seu bem-estar que se adapta, ilumina e acompanha todos os ciclos da sua vida.
            </p>
<p className="text-base text-neutral-500 mb-10 max-w-xl mx-auto animate-fade-in-up [animation-delay:300ms]">
                Chega de lutar contra apps que não entendem sua rotina real. A gente aprende com você e se ajusta ao seu dia a dia.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up [animation-delay:400ms]">
<button className="w-full sm:w-auto bg-brand-500 hover:bg-brand-600 text-white font-semibold py-4 px-8 rounded-full shadow-xl shadow-brand-500/25 transition-all hover:-translate-y-1">
                    Baixar grátis agora
                </button>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 text-neutral-600 font-medium py-4 px-8 hover:text-brand-600 transition-colors">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                    Ver como funciona
                </button>
</div>

<div className="relative max-w-sm md:max-w-4xl mx-auto animate-fade-in-up [animation-delay:600ms]">

<div className="relative z-10 bg-white p-2 rounded-[2.5rem] shadow-2xl border-4 border-white/50 ring-1 ring-neutral-900/5 mx-auto w-full md:w-[320px] aspect-[9/19]">
<div className="bg-neutral-50 h-full w-full rounded-[2rem] overflow-hidden relative flex flex-col">

<div className="p-6 pb-2">
<div className="flex justify-between items-center mb-6">
<div>
<div className="text-xs text-neutral-400 font-medium">Bom dia, Ana</div>
<div className="text-lg font-bold text-neutral-800">Sua Energia</div>
</div>
<div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</div>
</div>

<div className="bg-white p-4 rounded-2xl shadow-sm border border-brand-50 mb-4">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-green-50 text-green-600 rounded-lg">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
<span className="text-sm font-semibold text-neutral-800">Almoço Ajustado</span>
</div>
<p className="text-xs text-neutral-500">Detectamos uma reunião às 13h. Sugerimos algo leve às 12:15.</p>
</div>
</div>

<div className="flex-1 bg-white rounded-t-[2rem] p-6 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
<div className="flex justify-between items-end mb-6">
<div className="h-24 w-8 bg-brand-100 rounded-full relative overflow-hidden">
<div className="absolute bottom-0 w-full h-1/2 bg-brand-400"></div>
</div>
<div className="h-32 w-8 bg-brand-100 rounded-full relative overflow-hidden">
<div className="absolute bottom-0 w-full h-3/4 bg-brand-400"></div>
</div>
<div className="h-20 w-8 bg-brand-100 rounded-full relative overflow-hidden">
<div className="absolute bottom-0 w-full h-2/3 bg-brand-400"></div>
</div>
<div className="h-28 w-8 bg-brand-100 rounded-full relative overflow-hidden">
<div className="absolute bottom-0 w-full h-full bg-brand-500"></div>
</div>
<div className="h-16 w-8 bg-brand-100 rounded-full relative overflow-hidden">
<div className="absolute bottom-0 w-full h-1/3 bg-brand-200"></div>
</div>
</div>
<div className="h-14 bg-brand-50 rounded-xl flex items-center gap-3 px-4 mb-4">
<iconify-icon className="text-brand-500" icon="solar:bolt-bold"></iconify-icon>
<div className="flex-1 h-2 bg-brand-200 rounded-full overflow-hidden">
<div className="w-3/4 h-full bg-brand-500"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/4 -left-4 md:-left-12 bg-white p-3 md:p-4 rounded-xl shadow-lg border border-neutral-100 animate-float flex items-center gap-3 max-w-[200px]">
<div className="bg-green-100 p-2 rounded-lg text-green-600 flex-shrink-0">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</div>
<div className="text-xs">
<div className="font-bold text-neutral-800">Reunião detectada</div>
<div className="text-neutral-500">Agenda sincronizada</div>
</div>
</div>
<div className="absolute bottom-1/3 -right-4 md:-right-12 bg-white p-3 md:p-4 rounded-xl shadow-lg border border-neutral-100 animate-float [animation-delay:2s] flex items-center gap-3 max-w-[200px]">
<div className="bg-blue-100 p-2 rounded-lg text-blue-600 flex-shrink-0">
<iconify-icon icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
<div className="text-xs">
<div className="font-bold text-neutral-800">Sem culpa</div>
<div className="text-neutral-500">Flexibilidade ativa</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-white" id="problema">
<div className="container mx-auto px-4 md:px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-4">Não precisa mais baixar apps diferentes.</h2>
<h3 className="text-xl md:text-2xl font-medium text-brand-600 mb-6">Vamos deixar sua rotina como a vida real funciona.</h3>
<p className="text-neutral-600">Sabemos que cada dia é único. Por isso, criamos algo que finalmente respeita o ritmo da sua vida.</p>
</div>

<div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">

<div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 hover:shadow-lg transition-shadow">
<div className="mb-4 text-brand-500">
<iconify-icon icon="solar:clock-circle-linear" width="32"></iconify-icon>
</div>
<p className="text-neutral-500 text-sm mb-3 italic">"Tenho reunião às 12h, mas o app insiste que eu almoce agora."</p>
<hr className="border-neutral-200 mb-3"/>
<p className="text-neutral-900 font-semibold text-base">A gente se adapta à sua agenda real</p>
</div>

<div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 hover:shadow-lg transition-shadow">
<div className="mb-4 text-brand-500">
<iconify-icon icon="solar:scale-linear" width="32"></iconify-icon>
</div>
<p className="text-neutral-500 text-sm mb-3 italic">"Cansado de pesar comida e contar calorias como se fosse um trabalho."</p>
<hr className="border-neutral-200 mb-3"/>
<p className="text-neutral-900 font-semibold text-base">Simplificamos tudo em 3 toques</p>
</div>

<div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 hover:shadow-lg transition-shadow">
<div className="mb-4 text-brand-500">
<iconify-icon icon="solar:heart-broken-linear" width="32"></iconify-icon>
</div>
<p className="text-neutral-500 text-sm mb-3 italic">"Pulei um dia e perdi tudo. A culpa paralisa mais que ajuda."</p>
<hr className="border-neutral-200 mb-3"/>
<p className="text-neutral-900 font-semibold text-base">Celebramos sua jornada, não cobramos perfeição</p>
</div>
</div>
<div className="text-center">
<span className="inline-block py-2 px-4 bg-brand-50 text-brand-700 rounded-full font-medium text-sm">
                    💡 É exatamente por isso que criamos a Soliv
                </span>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-neutral-900 text-white overflow-hidden relative">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-900/20 to-transparent pointer-events-none"></div>
<div className="container mx-auto px-4 md:px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="lg:w-1/2">
<div className="text-brand-400 font-bold text-xs tracking-widest uppercase mb-4">Prazer, somos a Soliv</div>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">Um app que se adapta a você, nos momentos mais corridos e complicados do seu dia.</h2>
<p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                        Somos sua assistente de bem-estar que aprende seus padrões, entende quando a vida vira de cabeça pra baixo e ajusta tudo automaticamente. Sem culpa. Sem rigidez. Só luz.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center text-brand-400">
<iconify-icon icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-lg mb-1">Conectamos com sua agenda</h4>
<p className="text-neutral-400 text-sm">Sugerimos refeições quando você realmente tem tempo.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center text-brand-400">
<iconify-icon icon="solar:brain-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-lg mb-1">Aprendemos com você</h4>
<p className="text-neutral-400 text-sm">Cada pessoa é única, por isso personalizamos tudo.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center text-brand-400">
<iconify-icon icon="solar:bolt-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-lg mb-1">Sem pressão, com progresso</h4>
<p className="text-neutral-400 text-sm">Celebramos sua jornada, não cobramos perfeição.</p>
</div>
</div>
</div>
<div className="mt-10">
<button className="bg-brand-500 hover:bg-brand-600 text-white font-semibold py-4 px-8 rounded-full transition-all hover:scale-105">
                            Começar grátis agora
                        </button>
</div>
</div>

<div className="lg:w-1/2 flex justify-center">
<div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-full border border-neutral-700 flex items-center justify-center">
<div className="absolute inset-4 rounded-full border border-neutral-700/50 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-12 rounded-full border border-neutral-700/30 animate-[spin_15s_linear_infinite_reverse]"></div>

<div className="w-24 h-24 bg-brand-500 rounded-full flex items-center justify-center text-white shadow-[0_0_50px_rgba(255,122,31,0.4)]">
<iconify-icon icon="solar:sun-2-bold" width="48"></iconify-icon>
</div>

<div className="absolute top-10 right-20 bg-neutral-800 py-2 px-4 rounded-full border border-neutral-700 text-xs text-white flex items-center gap-2">
<iconify-icon className="text-brand-400" icon="solar:calendar-linear"></iconify-icon> Agenda
                        </div>
<div className="absolute bottom-20 left-10 bg-neutral-800 py-2 px-4 rounded-full border border-neutral-700 text-xs text-white flex items-center gap-2">
<iconify-icon className="text-brand-400" icon="solar:heart-pulse-linear"></iconify-icon> Saúde
                        </div>
<div className="absolute bottom-10 right-10 bg-neutral-800 py-2 px-4 rounded-full border border-neutral-700 text-xs text-white flex items-center gap-2">
<iconify-icon className="text-brand-400" icon="solar:graph-up-linear"></iconify-icon> Metas
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32" id="como-funciona">
<div className="container mx-auto px-4 md:px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">Como funciona?</h2>
<p className="text-xl text-neutral-600">Três passos pra transformar sua relação com a alimentação.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-200 to-transparent -z-10"></div>

<div className="relative bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 hover:-translate-y-2 transition-transform duration-300">
<div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto md:mx-0 border border-brand-100">01</div>
<h3 className="text-xl font-bold text-neutral-900 mb-3">Conte pra gente sobre você</h3>
<p className="text-neutral-600 text-sm leading-relaxed">Em 2 minutos, conhecemos seu objetivo, suas restrições e sua rotina. Conectamos com sua agenda pra entender quando você realmente tem tempo livre.</p>
</div>

<div className="relative bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 hover:-translate-y-2 transition-transform duration-300">
<div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto md:mx-0 border border-brand-100">02</div>
<h3 className="text-xl font-bold text-neutral-900 mb-3">Tenha seu plano alimentar inteligente</h3>
<p className="text-neutral-600 text-sm leading-relaxed">Já tem nutricionista? Faz upload do seu plano e a gente organiza. Não tem? Criamos um planejamento personalizado baseado no seu objetivo e nas suas preferências.</p>
</div>

<div className="relative bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 hover:-translate-y-2 transition-transform duration-300">
<div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto md:mx-0 border border-brand-100">03</div>
<h3 className="text-xl font-bold text-neutral-900 mb-3">Deixa a gente cuidar do resto</h3>
<p className="text-neutral-600 text-sm leading-relaxed">Você recebe lembretes inteligentes, registra refeições em segundos e acompanha sua evolução. Quando a vida mudar, a gente se adapta automaticamente com você.</p>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-lg font-medium text-neutral-900 mb-6">Pronto pra começar sua jornada?</p>
<button className="bg-neutral-900 hover:bg-neutral-800 text-white font-semibold py-4 px-10 rounded-full shadow-lg transition-all active:scale-95">
                    Baixar grátis
                </button>
<div className="flex items-center justify-center gap-6 mt-6 text-xs text-neutral-500 font-medium">
<span className="flex items-center gap-1"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Sem cartão de crédito</span>
<span className="flex items-center gap-1"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Teste 30 dias grátis</span>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-white" id="diferenciais">
<div className="container mx-auto px-4 md:px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">O que nos torna diferentes?</h2>
<p className="text-xl text-neutral-600">Não somos mais um app de dieta. Somos sua companhia de bem-estar.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-min">

<div className="md:col-span-2 bg-brand-50 p-8 md:p-10 rounded-[2rem] flex flex-col justify-between min-h-[300px] border border-brand-100 relative overflow-hidden group">
<div className="relative z-10">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-500 mb-6 shadow-sm">
<iconify-icon icon="solar:calendar-add-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-neutral-900 mb-3">Nos adaptamos à sua agenda real</h3>
<p className="text-neutral-600 max-w-md">Tem reunião no horário do almoço? A gente detecta e recalcula automaticamente. Você não precisa fazer nada.</p>
</div>
<iconify-icon className="absolute -right-10 -bottom-10 text-brand-100 opacity-50 group-hover:scale-110 transition-transform duration-500" icon="solar:calendar-minimalistic-linear" width="250"></iconify-icon>
</div>

<div className="bg-neutral-50 p-8 rounded-[2rem] border border-neutral-100 hover:border-brand-200 transition-colors">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-neutral-700 mb-6 shadow-sm">
<iconify-icon icon="solar:user-id-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-neutral-900 mb-3">Aprendemos como VOCÊ funciona</h3>
<p className="text-sm text-neutral-600">Não usamos fórmulas genéricas. Observamos seus padrões únicos e evoluímos junto com você.</p>
</div>

<div className="bg-neutral-50 p-8 rounded-[2rem] border border-neutral-100 hover:border-brand-200 transition-colors">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-neutral-700 mb-6 shadow-sm">
<iconify-icon icon="solar:stopwatch-play-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-neutral-900 mb-3">Registro em menos de 10 segundos</h3>
<p className="text-sm text-neutral-600">Sem pesar alimentos. Sem contar calorias. Apenas três toques e pronto.</p>
</div>

<div className="md:col-span-2 bg-neutral-900 p-8 md:p-10 rounded-[2rem] text-white flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
<div className="relative z-10 flex-1">
<div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center text-brand-400 mb-6">
<iconify-icon icon="solar:medal-star-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white mb-3">Motivação, nunca punição</h3>
<p className="text-neutral-400">Celebramos seu progresso, não punimos desvios. Porque consistência vem da flexibilidade.</p>
</div>
<div className="relative z-10 flex-shrink-0">

<div className="flex items-end gap-2 h-24">
<div className="w-4 bg-neutral-800 rounded-t-lg h-10"></div>
<div className="w-4 bg-neutral-800 rounded-t-lg h-14"></div>
<div className="w-4 bg-brand-900 rounded-t-lg h-12"></div>
<div className="w-4 bg-brand-600 rounded-t-lg h-20"></div>
<div className="w-4 bg-brand-500 rounded-t-lg h-24 shadow-[0_0_20px_rgba(255,122,31,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32" id="depoimentos">
<div className="container mx-auto px-4 md:px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">Mais de 50.000 pessoas já transformaram a relação delas com a alimentação.</h2>
<p className="text-xl text-neutral-600">E olha só o que elas têm pra contar:</p>
</div>

<div className="grid md:grid-cols-3 gap-6 mb-16">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col h-full">
<div className="flex text-yellow-400 mb-4 text-sm gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-700 text-lg mb-6 flex-grow">"Finalmente consigo manter meu planejamento mesmo com reuniões que mudam toda hora. Vocês se ajustam comigo, não contra mim."</p>
<div className="border-t border-neutral-100 pt-4">
<div className="font-bold text-neutral-900">Mariana S.</div>
<div className="text-xs text-neutral-500 mb-2">Gerente de Marketing, São Paulo</div>
<div className="text-xs font-semibold text-brand-600 bg-brand-50 py-1 px-2 rounded-md inline-block">87% de adesão em 60 dias</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col h-full">
<div className="flex text-yellow-400 mb-4 text-sm gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-700 text-lg mb-6 flex-grow">"Meu nutricionista ama os relatórios de vocês. Consigo mostrar exatamente como foi minha semana. Simples assim."</p>
<div className="border-t border-neutral-100 pt-4">
<div className="font-bold text-neutral-900">Ricardo M.</div>
<div className="text-xs text-neutral-500 mb-2">Desenvolvedor, Rio de Janeiro</div>
<div className="text-xs font-semibold text-green-600 bg-green-50 py-1 px-2 rounded-md inline-block">+15kg de massa muscular em 6 meses</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col h-full">
<div className="flex text-yellow-400 mb-4 text-sm gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-700 text-lg mb-6 flex-grow">"Com dois filhos, eu precisava de algo que não me tomasse tempo. Vocês são perfeitos: rápidos, inteligentes e acolhedores."</p>
<div className="border-t border-neutral-100 pt-4">
<div className="font-bold text-neutral-900">Juliana R.</div>
<div className="text-xs text-neutral-500 mb-2">Empreendedora, Belo Horizonte</div>
<div className="text-xs font-semibold text-blue-600 bg-blue-50 py-1 px-2 rounded-md inline-block">-12kg perdidos de forma saudável</div>
</div>
</div>
</div>

<div className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-neutral-200 pt-12">
<div className="text-center">
<div className="text-3xl font-bold text-neutral-900">+50.000</div>
<div className="text-sm text-neutral-500">Pessoas usando</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-neutral-900">4.9<span className="text-yellow-400 text-xl ml-1">★</span></div>
<div className="text-sm text-neutral-500">Avaliação média</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-neutral-900">87%</div>
<div className="text-sm text-neutral-500">Adesão média</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-neutral-900">30 dias</div>
<div className="text-sm text-neutral-500">Teste grátis</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-neutral-900 text-white overflow-hidden">
<div className="container mx-auto px-4 md:px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Design que inspira. Interface que simplifica.</h2>
<p className="text-xl text-neutral-400">Fizemos cada detalhe pensando em tornar seu dia mais leve e energético.</p>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
<div className="col-span-1 bg-neutral-800 p-4 rounded-xl flex flex-col items-center justify-center aspect-square hover:bg-neutral-700 transition-colors cursor-pointer group">
<iconify-icon className="mb-2 text-brand-400 group-hover:scale-110 transition-transform" icon="solar:calendar-date-linear" width="32"></iconify-icon>
<span className="text-xs font-medium text-center">Integração com calendário</span>
</div>
<div className="col-span-1 bg-neutral-800 p-4 rounded-xl flex flex-col items-center justify-center aspect-square hover:bg-neutral-700 transition-colors cursor-pointer group">
<iconify-icon className="mb-2 text-brand-400 group-hover:scale-110 transition-transform" icon="solar:magic-stick-3-linear" width="32"></iconify-icon>
<span className="text-xs font-medium text-center">IA personalizada</span>
</div>
<div className="col-span-1 bg-neutral-800 p-4 rounded-xl flex flex-col items-center justify-center aspect-square hover:bg-neutral-700 transition-colors cursor-pointer group">
<iconify-icon className="mb-2 text-brand-400 group-hover:scale-110 transition-transform" icon="solar:graph-new-linear" width="32"></iconify-icon>
<span className="text-xs font-medium text-center">Relatórios visuais</span>
</div>
<div className="col-span-1 bg-neutral-800 p-4 rounded-xl flex flex-col items-center justify-center aspect-square hover:bg-neutral-700 transition-colors cursor-pointer group">
<iconify-icon className="mb-2 text-brand-400 group-hover:scale-110 transition-transform" icon="solar:camera-linear" width="32"></iconify-icon>
<span className="text-xs font-medium text-center">Reconhecimento de alimentos</span>
</div>
<div className="col-span-1 bg-neutral-800 p-4 rounded-xl flex flex-col items-center justify-center aspect-square hover:bg-neutral-700 transition-colors cursor-pointer group">
<iconify-icon className="mb-2 text-brand-400 group-hover:scale-110 transition-transform" icon="solar:bell-linear" width="32"></iconify-icon>
<span className="text-xs font-medium text-center">Lembretes inteligentes</span>
</div>
<div className="col-span-1 bg-neutral-800 p-4 rounded-xl flex flex-col items-center justify-center aspect-square hover:bg-neutral-700 transition-colors cursor-pointer group">
<iconify-icon className="mb-2 text-brand-400 group-hover:scale-110 transition-transform" icon="solar:stethoscope-linear" width="32"></iconify-icon>
<span className="text-xs font-medium text-center">Conexão com nutricionistas</span>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-gradient-to-b from-brand-50 to-white">
<div className="container mx-auto px-4 md:px-6 text-center">
<h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-6">Consistência nasce da flexibilidade.<br/>Não da pressão.</h2>
<h3 className="text-xl md:text-2xl font-medium text-brand-600 mb-6">Baixe grátis agora e descubra como o bem-estar pode ser leve, natural e energizante.</h3>
<p className="text-neutral-600 mb-10">Junte-se a mais de 50.000 pessoas que já transformaram a relação delas com a alimentação.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">

<button className="flex items-center gap-3 bg-neutral-900 text-white px-6 py-3 rounded-xl hover:bg-neutral-800 transition-all w-full sm:w-auto">
<iconify-icon icon="ic:baseline-apple" width="28"></iconify-icon>
<div className="text-left">
<div className="text-[10px] leading-tight">Baixar para</div>
<div className="font-bold text-sm">iOS</div>
</div>
</button>

<button className="flex items-center gap-3 bg-neutral-900 text-white px-6 py-3 rounded-xl hover:bg-neutral-800 transition-all w-full sm:w-auto">
<iconify-icon icon="ic:baseline-android" width="28"></iconify-icon>
<div className="text-left">
<div className="text-[10px] leading-tight">Baixar para</div>
<div className="font-bold text-sm">Android</div>
</div>
</button>
</div>
<div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-500">
<span className="flex items-center gap-1"><iconify-icon className="text-brand-500" icon="solar:check-circle-bold"></iconify-icon> Gratuito para sempre</span>
<span className="flex items-center gap-1"><iconify-icon className="text-brand-500" icon="solar:check-circle-bold"></iconify-icon> Sem cartão de crédito</span>
<span className="flex items-center gap-1"><iconify-icon className="text-brand-500" icon="solar:check-circle-bold"></iconify-icon> 30 dias de recursos premium grátis</span>
</div>
</div>
</section>

<footer className="bg-neutral-50 pt-20 pb-10 border-t border-neutral-200">
<div className="container mx-auto px-4 md:px-6">
<div className="grid md:grid-cols-3 gap-12 mb-16">

<div>
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-white">
<iconify-icon icon="solar:sun-2-bold" width="20"></iconify-icon>
</div>
<span className="text-xl font-bold tracking-tighter text-neutral-900">Soliv</span>
</a>
<p className="text-neutral-500 text-sm mb-4 leading-relaxed">Seu bem-estar que se adapta, ilumina e acompanha todos os ciclos da sua vida.<br/>Mais luz, menos peso.</p>
<div className="flex gap-4 text-neutral-400">
<a className="hover:text-brand-500 transition-colors" href="#"><iconify-icon icon="ri:instagram-line" width="24"></iconify-icon></a>
<a className="hover:text-brand-500 transition-colors" href="#"><iconify-icon icon="ri:tiktok-line" width="24"></iconify-icon></a>
<a className="hover:text-brand-500 transition-colors" href="#"><iconify-icon icon="ri:youtube-line" width="24"></iconify-icon></a>
<a className="hover:text-brand-500 transition-colors" href="#"><iconify-icon icon="ri:linkedin-line" width="24"></iconify-icon></a>
</div>
</div>

<div className="md:pl-10">
<div className="grid grid-cols-2 gap-4 text-sm font-medium text-neutral-600">
<a className="hover:text-brand-600 transition-colors" href="#">Sobre nós</a>
<a className="hover:text-brand-600 transition-colors" href="#">Carreiras</a>
<a className="hover:text-brand-600 transition-colors" href="#">Como funciona</a>
<a className="hover:text-brand-600 transition-colors" href="#">Para nutricionistas</a>
<a className="hover:text-brand-600 transition-colors" href="#">Blog</a>
<a className="hover:text-brand-600 transition-colors" href="#">Contato</a>
<a className="hover:text-brand-600 transition-colors" href="#">Ajuda</a>
</div>
</div>

<div>
<div className="flex gap-2 mb-6">
<button className="bg-neutral-900 text-white p-2 rounded-lg hover:bg-neutral-800 transition-colors"><iconify-icon icon="ic:baseline-apple" width="24"></iconify-icon></button>
<button className="bg-neutral-900 text-white p-2 rounded-lg hover:bg-neutral-800 transition-colors"><iconify-icon icon="ic:baseline-android" width="24"></iconify-icon></button>
</div>
<label className="block text-sm font-bold text-neutral-900 mb-2">Newsletter</label>
<div className="flex gap-2">
<input className="flex-1 bg-white border border-neutral-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-brand-300" placeholder="Receba dicas de bem-estar" type="email"/>
<button className="bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">Inscrever</button>
</div>
</div>
</div>
<div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
<div>© 2025 Soliv. Todos os direitos reservados.</div>
<div className="flex gap-6">
<a className="hover:text-neutral-600" href="#">Termos de Uso</a>
<a className="hover:text-neutral-600" href="#">Política de Privacidade</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-40 md:left-1/2 md:bottom-8 md:-translate-x-1/2 md:right-auto animate-fade-in-up [animation-delay:2000ms]">
<button className="bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg shadow-brand-500/30 flex items-center gap-2 transition-transform hover:-translate-y-1">
            Baixar grátis <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>


    </>
  );
}
