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
sans: ['Inter', 'sans-serif'],
display: ['Poppins', 'sans-serif'],
},
colors: {
brand: {
green: '#10B981',
blue: '#1E40AF',
orange: '#F97316',
orangeHover: '#EA580C',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="bg-brand-green p-1.5 rounded-lg">
<iconify-icon className="text-white text-xl" icon="lucide:trophy"></iconify-icon>
</div>
<span className="font-display font-semibold text-xl tracking-tighter text-gray-900">ARENA<span className="text-brand-green">SOCIETY</span></span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors" href="#beneficios">Benefícios</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors" href="#galeria">Galeria</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors" href="#horarios">Horários</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors" href="#contato">Contato</a>
</div>

<div className="hidden md:block">
<a className="bg-brand-orange hover:bg-brand-orangeHover text-white text-sm font-medium py-2.5 px-6 rounded-full transition-transform hover:scale-105 shadow-md shadow-orange-500/20 flex items-center gap-2" href="#reserva">
<span>Reservar</span>
<iconify-icon className="text-lg" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-gray-600 hover:text-gray-900 focus:outline-none">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Campo de Futebol Society" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="absolute inset-0 bg-gray-900/50 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">

<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
</span>
<span className="text-xs font-medium text-white tracking-wide uppercase">Quadras Cobertas Disponíveis</span>
</div>

<h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-6 text-shadow animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                Reserve Sua Quadra de<br className="hidden md:block"/> Futebol Society
            </h1>
<p className="font-light text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Campo sintético de alta qualidade para seus jogos e eventos esportivos. Infraestrutura profissional para o seu melhor desempenho.
            </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
<a className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orangeHover text-white font-semibold py-4 px-8 rounded-lg shadow-lg shadow-orange-500/30 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 text-base" href="#reserva">
<iconify-icon icon="lucide:calendar-check" width="20"></iconify-icon>
                    Reservar Agora
                </a>
<a className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium py-3.5 px-8 rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 text-base" href="#horarios">
                    Ver Horários
                </a>
</div>
</div>
</section>

<section className="py-20 md:py-24 bg-white relative" id="beneficios">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-display font-semibold text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">Por que escolher nossa arena?</h2>
<p className="text-gray-500 max-w-2xl mx-auto">Oferecemos a melhor experiência para sua partida com estrutura de ponta.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors duration-300">
<iconify-icon className="text-brand-green text-3xl group-hover:text-white transition-colors duration-300" icon="lucide:land-plot" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl text-gray-900 mb-3">Campo Sintético Premium</h3>
<p className="text-gray-500 leading-relaxed text-sm">Grama sintética de última geração com amortecimento de borracha para melhor desempenho e menos impacto.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors duration-300">
<iconify-icon className="text-brand-green text-3xl group-hover:text-white transition-colors duration-300" icon="lucide:umbrella" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl text-gray-900 mb-3">Quadras Cobertas</h3>
<p className="text-gray-500 leading-relaxed text-sm">Jogue com chuva ou sol. Nossa cobertura de alta tecnologia garante ventilação e proteção total.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors duration-300">
<iconify-icon className="text-brand-green text-3xl group-hover:text-white transition-colors duration-300" icon="lucide:shower-head" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl text-gray-900 mb-3">Infraestrutura Completa</h3>
<p className="text-gray-500 leading-relaxed text-sm">Vestiários higienizados, chuveiros quentes, estacionamento seguro e área de churrasco.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

<div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
<div className="relative h-64 overflow-hidden">
<img alt="Peladas e Rachas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute top-4 left-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Mais Popular</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="font-display font-semibold text-2xl text-gray-900 mb-2">Peladas e Rachas</h3>
<p className="text-gray-500 text-sm mb-6">Ideal para seu grupo de amigos. Alugue por hora avulsa ou mensal.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center text-sm text-gray-600">
<iconify-icon className="text-brand-green mr-2" icon="lucide:check"></iconify-icon> De 10 a 14 jogadores
                            </li>
<li className="flex items-center text-sm text-gray-600">
<iconify-icon className="text-brand-green mr-2" icon="lucide:check"></iconify-icon> Bola e coletes inclusos
                            </li>
<li className="flex items-center text-sm text-gray-600">
<iconify-icon className="text-brand-green mr-2" icon="lucide:check"></iconify-icon> Iluminação LED profissional
                            </li>
</ul>
<button className="w-full py-3 border border-gray-200 text-gray-700 font-medium rounded-lg hover:border-brand-green hover:text-brand-green transition-colors">
                            Consultar Valores
                        </button>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
<div className="relative h-64 overflow-hidden">
<img alt="Eventos Esportivos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="font-display font-semibold text-2xl text-gray-900 mb-2">Eventos Esportivos</h3>
<p className="text-gray-500 text-sm mb-6">Campeonatos, torneios, aniversários e confraternizações de empresa.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center text-sm text-gray-600">
<iconify-icon className="text-brand-green mr-2" icon="lucide:check"></iconify-icon> Pacotes de horas especiais
                            </li>
<li className="flex items-center text-sm text-gray-600">
<iconify-icon className="text-brand-green mr-2" icon="lucide:check"></iconify-icon> Arbitragem opcional
                            </li>
<li className="flex items-center text-sm text-gray-600">
<iconify-icon className="text-brand-green mr-2" icon="lucide:check"></iconify-icon> Acesso à área de churrasqueira
                            </li>
</ul>
<button className="w-full py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
                            Solicitar Orçamento
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="font-display font-semibold text-3xl md:text-4xl text-gray-900 tracking-tight">Como Reservar</h2>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-gray-200 via-brand-green to-gray-200 -z-10"></div>

<div className="md:hidden absolute top-12 bottom-12 left-1/2 w-0.5 bg-gray-200 -translate-x-1/2 -z-10"></div>

<div className="relative flex flex-col items-center text-center group bg-white md:bg-transparent py-4 md:py-0">
<div className="w-24 h-24 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center mb-6 shadow-sm group-hover:border-brand-green transition-colors duration-300">
<span className="absolute -top-2 -right-2 w-8 h-8 bg-brand-orange text-white text-sm font-bold flex items-center justify-center rounded-full">01</span>
<iconify-icon className="text-3xl text-gray-700 group-hover:text-brand-green transition-colors" icon="lucide:calendar-search"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl text-gray-900 mb-2">Escolha Data e Horário</h3>
<p className="text-gray-500 text-sm max-w-xs">Confira a disponibilidade em tempo real e escolha o melhor período.</p>
</div>

<div className="relative flex flex-col items-center text-center group bg-white md:bg-transparent py-4 md:py-0">
<div className="w-24 h-24 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center mb-6 shadow-sm group-hover:border-brand-green transition-colors duration-300">
<span className="absolute -top-2 -right-2 w-8 h-8 bg-brand-orange text-white text-sm font-bold flex items-center justify-center rounded-full">02</span>
<iconify-icon className="text-3xl text-gray-700 group-hover:text-brand-green transition-colors" icon="lucide:message-circle"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl text-gray-900 mb-2">Confirme no WhatsApp</h3>
<p className="text-gray-500 text-sm max-w-xs">Fale direto com nossa equipe para garantir sua reserva instantaneamente.</p>
</div>

<div className="relative flex flex-col items-center text-center group bg-white md:bg-transparent py-4 md:py-0">
<div className="w-24 h-24 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center mb-6 shadow-sm group-hover:border-brand-green transition-colors duration-300">
<span className="absolute -top-2 -right-2 w-8 h-8 bg-brand-orange text-white text-sm font-bold flex items-center justify-center rounded-full">03</span>
<iconify-icon className="text-3xl text-gray-700 group-hover:text-brand-green transition-colors" icon="lucide:dribbble"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl text-gray-900 mb-2">Chegue e Jogue</h3>
<p className="text-gray-500 text-sm max-w-xs">Tudo pronto para seu jogo. Vestiários limpos e bola no centro do campo.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-900 text-white" id="galeria">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight mb-2">Nossas Instalações</h2>
<p className="text-gray-400">Estrutura de padrão profissional.</p>
</div>
<a className="hidden md:flex items-center text-brand-green hover:text-white transition-colors text-sm font-medium" href="#">
                    Ver todas as fotos <iconify-icon className="ml-2" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
<img alt="Vista aérea" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white font-medium">Vista Panorâmica</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
<img alt="Jogo a noite" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white font-medium">Iluminação Noturna</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
<img alt="Vestiário" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white font-medium">Vestiários Modernos</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
<img alt="Área de convivência" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1624880357913-a8539238245b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white font-medium">Área de Convivência</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
<img alt="Grama" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white font-medium">Grama Sintética</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
<img alt="Estacionamento" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white font-medium">Estacionamento Privativo</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-display font-semibold text-3xl text-center text-gray-900 mb-12">O que dizem os jogadores</h2>
<div className="flex overflow-x-auto snap-x-mandatory no-scrollbar gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0">

<div className="flex-shrink-0 w-[85vw] sm:w-[400px] bg-white p-8 rounded-2xl shadow-sm border border-gray-100 snap-center">
<div className="flex items-center gap-4 mb-6">
<div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
<img alt="Avatar" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div>
<h4 className="font-semibold text-gray-900 text-sm">Carlos Mendes</h4>
<div className="flex text-yellow-400 text-xs mt-0.5">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
</div>
</div>
<p className="text-gray-600 text-sm italic">"Melhor quadra da região! Campo impecável e ótimo atendimento. Jogamos toda semana aqui."</p>
</div>

<div className="flex-shrink-0 w-[85vw] sm:w-[400px] bg-white p-8 rounded-2xl shadow-sm border border-gray-100 snap-center">
<div className="flex items-center gap-4 mb-6">
<div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
<img alt="Avatar" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div>
<h4 className="font-semibold text-gray-900 text-sm">Ricardo Oliveira</h4>
<div className="flex text-yellow-400 text-xs mt-0.5">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
</div>
</div>
<p className="text-gray-600 text-sm italic">"Fizemos nosso torneio da empresa aqui. Estrutura top e pessoal muito atencioso!"</p>
</div>

<div className="flex-shrink-0 w-[85vw] sm:w-[400px] bg-white p-8 rounded-2xl shadow-sm border border-gray-100 snap-center">
<div className="flex items-center gap-4 mb-6">
<div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
<img alt="Avatar" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<h4 className="font-semibold text-gray-900 text-sm">Fernando Santos</h4>
<div className="flex text-yellow-400 text-xs mt-0.5">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
</div>
</div>
<p className="text-gray-600 text-sm italic">"Quadra coberta salvou nossos rachas de quinta. Não paramos mais por causa de chuva!"</p>
</div>
</div>

<div className="flex justify-center gap-2 mt-4">
<div className="h-2 w-2 rounded-full bg-brand-green"></div>
<div className="h-2 w-2 rounded-full bg-gray-300"></div>
<div className="h-2 w-2 rounded-full bg-gray-300"></div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="horarios">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="font-display font-semibold text-3xl md:text-4xl text-gray-900 tracking-tight">Horários Disponíveis</h2>
</div>
<div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
<div className="grid grid-cols-2 bg-gray-50 border-b border-gray-200 p-4 font-semibold text-gray-700 text-sm uppercase tracking-wider">
<div>Período</div>
<div className="text-right">Valor</div>
</div>
<div className="divide-y divide-gray-100">
<div className="grid grid-cols-2 p-6 hover:bg-gray-50 transition-colors">
<div className="flex flex-col">
<span className="font-medium text-gray-900">Manhã</span>
<span className="text-xs text-gray-500">06h às 12h</span>
</div>
<div className="flex items-center justify-end text-brand-green font-medium">Consulte valores</div>
</div>
<div className="grid grid-cols-2 p-6 hover:bg-gray-50 transition-colors">
<div className="flex flex-col">
<span className="font-medium text-gray-900">Tarde</span>
<span className="text-xs text-gray-500">12h às 18h</span>
</div>
<div className="flex items-center justify-end text-brand-green font-medium">Consulte valores</div>
</div>
<div className="grid grid-cols-2 p-6 hover:bg-gray-50 transition-colors">
<div className="flex flex-col">
<span className="font-medium text-gray-900">Noite</span>
<span className="text-xs text-gray-500">18h às 23h</span>
</div>
<div className="flex items-center justify-end text-brand-green font-medium">Consulte valores</div>
</div>
</div>
<div className="bg-amber-50 p-4 flex items-start gap-3 border-t border-amber-100">
<iconify-icon className="text-amber-500 text-lg flex-shrink-0 mt-0.5" icon="lucide:lightbulb"></iconify-icon>
<p className="text-sm text-amber-800 font-medium">Pacotes promocionais disponíveis para mensalistas com contrato.</p>
</div>
</div>
<div className="mt-8 text-center">
<button className="text-gray-600 hover:text-brand-green font-medium text-sm underline underline-offset-4 transition-colors">
                    Solicitar Tabela Completa em PDF
                </button>
</div>
</div>
</section>

<section className="py-20 bg-gray-50" id="contato">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

<div className="flex flex-col h-full min-h-[400px]">
<div className="flex-1 bg-gray-200 rounded-2xl overflow-hidden relative shadow-md">
<iframe allowfullscreen="" className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.579668487778!2d-49.255!3d-16.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQwJzQ4LjAiUyA0OcKwMTUnMTguMCJX!5e0!3m2!1sen!2sbr!4v1620000000000!5m2!1sen!2sbr" style={{border: '0'}} width="100%"></iframe>
</div>
<div className="mt-4 flex items-start gap-3">
<iconify-icon className="text-brand-orange mt-1" icon="lucide:map-pin"></iconify-icon>
<p className="text-gray-600 text-sm">Rua Exemplo, 123 - Setor Bueno - Goiânia/GO</p>
</div>
</div>

<div className="flex flex-col justify-center">
<div className="mb-8">
<iconify-icon className="text-brand-green text-5xl mb-6" icon="lucide:message-circle"></iconify-icon>
<h2 className="font-display font-semibold text-3xl text-gray-900 mb-2">Fale Conosco</h2>
<p className="text-gray-500">Tire suas dúvidas ou agende agora mesmo.</p>
</div>
<div className="space-y-8">
<div>
<p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">WhatsApp / Telefone</p>
<p className="text-3xl font-display font-semibold text-gray-900">(62) 99999-9999</p>
</div>
<div>
<p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Horário de Funcionamento</p>
<p className="text-lg text-gray-900">Seg a Dom: 6h às 23h</p>
</div>
<div>
<p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Email</p>
<a className="text-lg text-brand-green hover:underline" href="mailto:contato@quadrassociety.com.br">contato@quadrassociety.com.br</a>
</div>
<a className="inline-flex items-center justify-center w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg shadow-green-500/30 transition-all hover:scale-105 gap-3" href="https://wa.me/5562999999999" target="_blank">
<iconify-icon icon="lucide:message-circle" width="24"></iconify-icon>
                            Abrir WhatsApp
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-green text-center relative overflow-hidden" id="reserva">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="relative z-10 max-w-4xl mx-auto px-4">
<h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 tracking-tight">Pronto Para Seu Próximo Jogo?</h2>
<p className="text-emerald-50 text-lg mb-10 max-w-2xl mx-auto">Não deixe para última hora. Reserve agora e garanta o melhor horário para sua equipe.</p>
<a className="inline-flex items-center bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-lg py-5 px-10 rounded-full shadow-xl shadow-orange-900/20 transition-all hover:scale-105 hover:-translate-y-1" href="https://wa.me/5562999999999">
                Reservar Via WhatsApp
            </a>
<div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12 text-emerald-100 text-sm font-medium">
<span className="flex items-center"><iconify-icon className="mr-2" icon="lucide:check-circle-2"></iconify-icon> Resposta Rápida</span>
<span className="flex items-center"><iconify-icon className="mr-2" icon="lucide:check-circle-2"></iconify-icon> Sem Burocracia</span>
<span className="flex items-center"><iconify-icon className="mr-2" icon="lucide:check-circle-2"></iconify-icon> Confirmação Imediata</span>
</div>
</div>
</section>

<footer className="bg-gray-900 text-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-gray-800 pb-12">

<div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-brand-green text-xl" icon="lucide:trophy"></iconify-icon>
<span className="font-display font-semibold text-xl tracking-tighter">ARENA<span className="text-brand-green">SOCIETY</span></span>
</div>
<p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Quadras de futebol society com a melhor estrutura da região. Grama sintética premium, vestiários modernos e área de lazer completa.
                    </p>
</div>

<div>
<h4 className="font-display font-semibold text-lg mb-6">Links Rápidos</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-brand-green transition-colors" href="#">Início</a></li>
<li><a className="hover:text-brand-green transition-colors" href="#horarios">Horários e Preços</a></li>
<li><a className="hover:text-brand-green transition-colors" href="#galeria">Galeria de Fotos</a></li>
<li><a className="hover:text-brand-green transition-colors" href="#contato">Localização</a></li>
</ul>
</div>

<div>
<h4 className="font-display font-semibold text-lg mb-6">Siga-nos</h4>
<div className="flex gap-4">
<a className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-green transition-all hover:-translate-y-1" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
<a className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all hover:-translate-y-1" href="#">
<iconify-icon icon="lucide:facebook" width="20"></iconify-icon>
</a>
<a className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-all hover:-translate-y-1" href="#">
<iconify-icon icon="lucide:message-circle" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
<p>© 2025 Quadras Society. Todos os direitos reservados.</p>
<p>Design moderno e funcional.</p>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl shadow-green-500/40 hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center animate-pulse-slow" href="https://wa.me/5562999999999" target="_blank">
<iconify-icon height="28" icon="lucide:message-circle" width="28"></iconify-icon>
</a>



    </>
  );
}
