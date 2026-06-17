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
sans: ['Nunito', 'sans-serif'],
},
colors: {
beige: '#E6D19A',
coral: '#E35D5B',
brown: '#5A2A22',
pink: '#D97B93',
yellow: '#F2C66D',
},
boxShadow: {
'soft': '0 20px 40px -15px rgba(90, 42, 34, 0.08)',
'glow': '0 0 40px -10px rgba(227, 93, 91, 0.4)',
},
borderRadius: {
'4xl': '2rem',
'5xl': '3rem',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300 shadow-soft">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex cursor-pointer gap-x-3 items-center group" onclick="window.scrollTo(0,0)">
<div className="w-10 h-10 rounded-2xl bg-coral flex items-center justify-center text-white shadow-glow group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:home-heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xl font-semibold text-brown tracking-tight">AAPV</span>
</div>

<div className="hidden md:flex items-center space-x-10">
<a className="text-sm font-medium text-brown/70 transition-all hover:text-coral hover:-translate-y-0.5" href="#sobre">Sobre Nós</a>
<a className="text-sm font-medium text-brown/70 transition-all hover:text-coral hover:-translate-y-0.5" href="#campanhas">Campanhas</a>
<a className="text-sm font-medium text-brown/70 transition-all hover:text-coral hover:-translate-y-0.5" href="#impacto">Impacto</a>
<a className="text-sm font-medium text-brown/70 transition-all hover:text-coral hover:-translate-y-0.5" href="#contactos">Contactos</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full shadow-glow text-sm font-medium bg-coral hover:bg-coral/90 hover:scale-105 transition-all duration-300 text-white" href="#doar">
                        Doar Agora
                        <iconify-icon className="ml-2 text-base" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</a>

<button className="md:hidden p-2 rounded-2xl hover:text-coral focus:outline-none text-brown/60 bg-white shadow-soft transition-colors">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-40 pb-32 lg:pt-52 lg:pb-40 overflow-hidden bg-beige">

<div className="absolute top-10 left-10 w-72 h-72 blob-1 bg-pink/40 blur-2xl opacity-60 animate-float z-0"></div>
<div className="absolute bottom-10 right-10 w-96 h-96 blob-2 bg-yellow/50 blur-3xl opacity-60 animate-float-delayed z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/40 blur-3xl opacity-80 z-0"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm text-coral text-xs font-semibold mb-8 shadow-sm border border-white/40">
<span className="w-2 h-2 rounded-full bg-coral animate-pulse"></span>
                    Associação Sem Fins Lucrativos
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-8 leading-[1.1] text-brown">
                    Criamos laços para <br className="hidden sm:block"/>
<span className="text-coral relative inline-block">
                        ajudar quem mais precisa
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow opacity-60" preserveaspectratio="none" viewbox="0 0 100 20"><path d="M0 10 Q 50 20 100 10" fill="transparent" stroke="currentColor" strokeLinecap="round" strokeWidth="6"></path></svg>
</span>
</h1>
<p className="text-xl md:text-2xl text-brown/70 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                    Juntos construímos um abrigo para a vida. Um espaço de amor, conforto e dignidade para idosos e famílias da nossa comunidade.
                </p>
<div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full shadow-glow text-lg font-medium transition-all duration-300 text-white bg-coral hover:bg-coral/90 hover:scale-105 hover:-translate-y-1" href="#doar">
                        Fazer uma doação
                        <iconify-icon className="ml-2 text-xl" icon="solar:hand-heart-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 border-2 border-transparent bg-white/60 hover:bg-white text-brown shadow-soft hover:-translate-y-1 hover:border-yellow/50 backdrop-blur-sm" href="#sobre">
                        Conhecer a nossa casa
                    </a>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
<div className="rounded-5xl overflow-hidden shadow-soft aspect-[21/9] bg-white p-2">
<img alt="Mãos dadas num gesto de carinho e apoio" className="w-full h-full object-cover rounded-[2.5rem] filter brightness-105 opacity-90" src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
</div>
</div>

<section className="py-32 bg-white relative overflow-hidden" id="sobre">

<div className="absolute top-0 right-0 w-64 h-64 blob-3 bg-beige/40 blur-2xl -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1 relative">
<div className="grid grid-cols-2 gap-6">
<img alt="Apoio a idosos" className="rounded-4xl w-full h-72 object-cover shadow-soft mt-12 hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<img alt="Apoio a crianças" className="rounded-4xl w-full h-72 object-cover shadow-soft mb-12 hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full bg-beige/30 blur-xl"></div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink/10 text-coral text-xs font-semibold mb-6">
<iconify-icon className="text-base" icon="solar:stars-linear"></iconify-icon>
                        A Nossa Essência
                    </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-brown leading-tight">Um colo seguro para construir o futuro.</h2>
<p className="text-lg mb-6 leading-relaxed text-brown/70 font-medium">
                        Fundada em 2017, a Associação Abrigo Para a Vida nasceu do amor pelo próximo e da vontade de não deixar ninguém para trás. O nosso <strong>grande sonho é a construção de um lar de idosos</strong> que seja uma verdadeira casa de família.
                    </p>
<p className="text-lg mb-10 leading-relaxed text-brown/70 font-medium">
                        Enquanto construímos esse sonho, espalhamos abraços em forma de ajuda diária. Entregamos equipamentos médicos, apoio social e, acima de tudo, companhia a quem se sente sozinho.
                    </p>
<div className="grid grid-cols-2 gap-8 pt-8 border-t-2 border-beige/50">
<div className="bg-beige/20 p-6 rounded-3xl">
<div className="text-4xl font-semibold text-coral tracking-tight mb-2">2017</div>
<div className="text-base font-medium text-brown/60">O ano em que o sonho nasceu</div>
</div>
<div className="bg-yellow/10 p-6 rounded-3xl">
<div className="text-4xl font-semibold text-yellow tracking-tight mb-2">Centenas</div>
<div className="text-base font-medium text-brown/60">De sorrisos recuperados</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-beige relative" id="campanhas">
<div className="absolute top-20 left-10 w-32 h-32 blob-1 bg-white/40 blur-xl"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-brown">Causas do Coração</h2>
<p className="text-lg text-brown/70 font-medium">Conheça as histórias reais de quem precisa do nosso abraço hoje. Cada pequeno gesto transforma uma vida.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

<div className="group flex flex-col rounded-5xl bg-white p-4 shadow-soft hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
<div className="h-56 rounded-4xl overflow-hidden relative mb-6">
<img alt="Senhor idoso" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold bg-white/80 text-coral shadow-sm">Mais Urgente</div>
</div>
<div className="px-4 pb-4 flex flex-col flex-grow">
<div className="flex justify-between items-center mb-4">
<h3 className="text-2xl font-semibold tracking-tight text-brown">Senhor António</h3>
<span className="text-sm font-semibold text-pink bg-pink/10 px-3 py-1 rounded-full">78 anos</span>
</div>
<p className="text-base text-brown/70 mb-8 flex-grow line-clamp-3 font-medium">O Sr. António vive isolado e perdeu recentemente a mobilidade. Precisamos da sua ajuda para lhe oferecer uma cadeira de rodas elétrica.</p>
<div className="mb-8 p-4 rounded-3xl bg-beige/20 border border-beige/50">
<div className="text-xs font-semibold mb-2 uppercase tracking-widest text-brown/50">Ajudar com</div>
<span className="inline-flex items-center text-sm font-semibold text-coral">
<iconify-icon className="mr-2 text-xl" icon="solar:wheelchair-linear"></iconify-icon> Cadeira de Rodas
                            </span>
</div>
<a className="w-full inline-flex justify-center items-center px-6 py-3.5 rounded-full text-base font-semibold transition-all duration-300 bg-beige/30 hover:bg-coral hover:text-white text-brown" href="#doar">
                            Doar com amor
                        </a>
</div>
</div>

<div className="group flex flex-col rounded-5xl bg-white p-4 shadow-soft hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
<div className="h-56 rounded-4xl overflow-hidden relative mb-6">
<img alt="Criança sorrindo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="px-4 pb-4 flex flex-col flex-grow">
<div className="flex justify-between items-center mb-4">
<h3 className="text-2xl font-semibold tracking-tight text-brown">A Doce Beatriz</h3>
<span className="text-sm font-semibold text-pink bg-pink/10 px-3 py-1 rounded-full">8 anos</span>
</div>
<p className="text-base text-brown/70 mb-8 flex-grow line-clamp-3 font-medium">A Beatriz precisa de fisioterapia intensiva semanal para aprender a andar. A família não tem meios para suportar os custos de forma contínua.</p>
<div className="mb-8 p-4 rounded-3xl bg-beige/20 border border-beige/50">
<div className="text-xs font-semibold mb-2 uppercase tracking-widest text-brown/50">Ajudar com</div>
<span className="inline-flex items-center text-sm font-semibold text-yellow">
<iconify-icon className="mr-2 text-xl" icon="solar:medical-kit-linear"></iconify-icon> Terapias Semanais
                            </span>
</div>
<a className="w-full inline-flex justify-center items-center px-6 py-3.5 rounded-full text-base font-semibold transition-all duration-300 bg-beige/30 hover:bg-coral hover:text-white text-brown" href="#doar">
                            Apoiar a Beatriz
                        </a>
</div>
</div>

<div className="group flex flex-col rounded-5xl bg-white p-4 shadow-soft hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
<div className="h-56 rounded-4xl overflow-hidden flex items-center justify-center bg-coral/5 relative mb-6">
<div className="absolute inset-0 blob-2 bg-pink/10 m-8 animate-float"></div>
<iconify-icon className="text-7xl text-coral relative z-10" icon="solar:home-smile-linear"></iconify-icon>
</div>
<div className="px-4 pb-4 flex flex-col flex-grow">
<div className="flex justify-between items-center mb-4">
<h3 className="text-2xl font-semibold tracking-tight text-brown">O Nosso Lar</h3>
<span className="text-sm font-semibold text-yellow bg-yellow/20 px-3 py-1 rounded-full">O Grande Sonho</span>
</div>
<p className="text-base text-brown/70 mb-8 flex-grow line-clamp-3 font-medium">A nossa grande missão desde 2017: angariar fundos para a construção de um lar de idosos modelo, cheio de luz, jardim e muito carinho.</p>
<div className="mb-8 p-4 rounded-3xl bg-beige/20 border border-beige/50">
<div className="w-full rounded-full h-2 mb-3 bg-white border border-beige/50">
<div className="bg-coral h-full rounded-full relative" style={{width: '15%'}}>
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-coral shadow-sm"></div>
</div>
</div>
<div className="text-sm font-semibold text-brown/60 flex justify-between">
<span>Fase de Projeto</span>
<span className="text-coral">15%</span>
</div>
</div>
<a className="w-full inline-flex justify-center items-center px-6 py-3.5 bg-coral hover:bg-coral/90 hover:scale-105 rounded-full text-base font-semibold transition-all duration-300 shadow-glow text-white" href="#doar">
                            Ajudar a construir
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-coral text-white" id="doar">

<div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-white/10 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] blob-3 bg-pink/20 blur-3xl translate-y-1/3 -translate-x-1/4"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-20">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-md mb-6 shadow-sm">
<iconify-icon className="text-3xl text-white" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Abrace a nossa causa.</h2>
<p className="text-xl max-w-2xl mx-auto text-white/90 font-medium">O seu gesto, por mais pequeno que pareça, é gigante para quem o recebe. Toda a ajuda chega a quem precisa.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="backdrop-blur-md bg-white/10 p-10 rounded-5xl text-center transition-all duration-300 hover:bg-white/20 border border-white/20 hover:-translate-y-2 hover:shadow-2xl">
<div className="w-16 h-16 mx-auto rounded-3xl flex items-center justify-center mb-6 bg-white text-coral shadow-sm">
<iconify-icon className="text-3xl" icon="solar:smartphone-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">MBWay Solidário</h3>
<p className="text-base mb-8 text-white/80 font-medium">Um gesto simples e rápido através do seu telemóvel.</p>
<div className="text-2xl font-bold tracking-tight text-brown py-4 rounded-3xl select-all bg-beige shadow-inner">
                        912 345 678
                    </div>
</div>

<div className="backdrop-blur-md bg-white p-10 rounded-5xl text-center transition-all duration-300 transform md:-translate-y-6 shadow-2xl relative border-4 border-white">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow text-brown text-xs font-bold px-4 py-2 rounded-full shadow-sm uppercase tracking-wider">
                        Mais Utilizado
                    </div>
<div className="w-16 h-16 mx-auto rounded-3xl flex items-center justify-center mb-6 bg-coral/10 text-coral">
<iconify-icon className="text-3xl" icon="solar:card-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 text-brown">Transferência</h3>
<p className="text-base mb-8 text-brown/70 font-medium">Apoie diretamente a conta da associação para as grandes missões.</p>
<div className="text-sm font-bold tracking-wider text-coral py-4 rounded-3xl select-all break-all px-2 bg-coral/5 border border-coral/10">
                        PT50 0000 0000 0000 0000 0000 0
                    </div>
</div>

<div className="backdrop-blur-md bg-white/10 p-10 rounded-5xl text-center transition-all duration-300 hover:bg-white/20 border border-white/20 hover:-translate-y-2 hover:shadow-2xl">
<div className="w-16 h-16 mx-auto rounded-3xl flex items-center justify-center mb-6 bg-white text-coral shadow-sm">
<iconify-icon className="text-3xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Dar o seu tempo</h3>
<p className="text-base mb-8 text-white/80 font-medium">Junte-se à nossa família de voluntários e espalhe sorrisos.</p>
<a className="inline-flex justify-center items-center w-full px-6 py-4 rounded-full text-base font-semibold transition-all duration-300 bg-white text-coral hover:scale-105 shadow-sm" href="#contactos">
                        Quero ser Voluntário
                    </a>
</div>
</div>
<div className="mt-16 text-center text-sm flex flex-col sm:flex-row items-center justify-center gap-3 text-white/80 font-medium bg-white/10 max-w-2xl mx-auto py-4 px-6 rounded-full border border-white/20 backdrop-blur-sm">
<iconify-icon className="text-xl text-yellow" icon="solar:shield-check-linear"></iconify-icon>
                Associação registada. Emitimos recibos de donativo para efeitos fiscais.
            </div>
</div>
</section>

<section className="py-32 bg-white relative" id="impacto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow/20 text-brown text-xs font-semibold mb-6">
<iconify-icon className="text-base" icon="solar:sun-linear"></iconify-icon>
                        Transparência
                    </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-brown">O amor a acontecer.</h2>
<p className="text-lg text-brown/70 font-medium">Veja os sorrisos que ajudou a criar. A sua confiança é o alicerce do nosso trabalho comunitário.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="flex flex-col sm:flex-row gap-8 p-6 rounded-4xl bg-beige/10 hover:bg-beige/20 transition-colors duration-300 border border-beige/30 group">
<div className="w-full sm:w-56 h-56 sm:h-auto rounded-3xl overflow-hidden flex-shrink-0 relative">
<img alt="Entrega de cadeira" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="py-4 flex flex-col justify-center">
<span className="text-sm font-semibold mb-3 text-coral">12 de Outubro, 2023</span>
<h3 className="text-2xl font-semibold tracking-tight mb-3 text-brown">Uma noite mais tranquila</h3>
<p className="text-base text-brown/70 mb-6 line-clamp-2 font-medium">Graças aos donativos do último mês, entregamos uma cama articulada à Dona Maria, trazendo alívio e conforto ao seu dia a dia.</p>
<a className="text-base font-bold text-coral hover:text-coral/80 inline-flex items-center group-hover:translate-x-2 transition-transform" href="#">
                            Ler história completa <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-8 p-6 rounded-4xl bg-beige/10 hover:bg-beige/20 transition-colors duration-300 border border-beige/30 group">
<div className="w-full sm:w-56 h-56 sm:h-auto rounded-3xl overflow-hidden flex-shrink-0 relative">
<img alt="Evento solidário" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="py-4 flex flex-col justify-center">
<span className="text-sm font-semibold mb-3 text-yellow">28 de Setembro, 2023</span>
<h3 className="text-2xl font-semibold tracking-tight mb-3 text-brown">A magia da Feira Solidária</h3>
<p className="text-base text-brown/70 mb-6 line-clamp-2 font-medium">A nossa feira de outono juntou famílias, sorrisos e angariou fundos preciosos para o Fundo de Construção do nosso Lar.</p>
<a className="text-base font-bold text-coral hover:text-coral/80 inline-flex items-center group-hover:translate-x-2 transition-transform" href="#">
                            Ver galeria de fotos <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-beige relative overflow-hidden">
<div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_100%)]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<h2 className="sr-only">O que dizem as famílias</h2>
<div className="relative">
<iconify-icon className="absolute -top-12 left-1/2 -translate-x-1/2 text-8xl z-0 text-white/60" icon="solar:quote-left-bold-duotone"></iconify-icon>
<div className="relative z-10 max-w-4xl mx-auto text-center mt-12">
<p className="text-2xl md:text-4xl font-semibold leading-relaxed mb-12 text-brown tracking-tight">
                        "Eles chegaram num momento de total escuridão. Não só nos deram a cadeira que o meu menino precisava, como nos trouxeram esperança e um ombro amigo."
                    </p>
<div className="flex items-center justify-center gap-5">
<div className="w-14 h-14 rounded-full flex items-center justify-center text-brown font-bold bg-white shadow-soft text-xl">SF</div>
<div className="text-left">
<div className="text-lg font-bold text-brown">Sara Fernandes</div>
<div className="text-sm font-medium text-brown/60">Mãe apoiada em 2022</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative" id="contactos">
<div className="absolute top-1/2 right-0 w-96 h-96 blob-2 bg-pink/10 blur-3xl -translate-y-1/2"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="rounded-5xl shadow-soft border-4 border-beige/30 overflow-hidden bg-white">
<div className="grid grid-cols-1 lg:grid-cols-5">

<div className="lg:col-span-2 p-10 md:p-14 flex flex-col justify-between relative bg-beige overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full blob-3 bg-white/20 blur-2xl scale-150"></div>
<div className="relative z-10">
<h2 className="text-4xl font-semibold tracking-tight mb-4 text-brown">Fale connosco.</h2>
<p className="mb-12 text-lg text-brown/70 font-medium">Estamos sempre de portas e braços abertos para o receber. Como podemos ajudar hoje?</p>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-coral shadow-sm shrink-0">
<iconify-icon className="text-2xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="pt-1">
<h4 className="text-sm font-bold text-brown/60 uppercase tracking-wider mb-1">A nossa casa</h4>
<p className="text-lg font-semibold text-brown">Rua Corgas 130<br/>4415-939 Seixezelo<br/>Portugal</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-coral shadow-sm shrink-0">
<iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div className="pt-1">
<h4 className="text-sm font-bold text-brown/60 uppercase tracking-wider mb-1">Correio</h4>
<a className="text-lg font-semibold text-brown hover:text-coral transition-colors" href="mailto:geral@abrigoparavida.pt">geral@abrigoparavida.pt</a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-coral shadow-sm shrink-0">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div className="pt-1">
<h4 className="text-sm font-bold text-brown/60 uppercase tracking-wider mb-1">Telefone</h4>
<p className="text-lg font-semibold text-brown">+351 912 345 678</p>
<p className="text-xs font-medium text-brown/50 mt-1">Chamada para rede móvel nacional</p>
</div>
</div>
</div>
</div>
<div className="mt-16 flex gap-4 relative z-10">
<a className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white text-brown hover:bg-coral hover:text-white transition-all duration-300 shadow-sm hover:-translate-y-1" href="#">
<iconify-icon className="text-2xl" icon="solar:facebook-bold"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white text-brown hover:bg-coral hover:text-white transition-all duration-300 shadow-sm hover:-translate-y-1" href="#">
<iconify-icon className="text-2xl" icon="solar:camera-bold"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-3 p-10 md:p-14 bg-white">
<form className="space-y-8" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div>
<label className="block text-sm font-bold mb-3 text-brown" htmlFor="nome">O seu nome</label>
<input className="w-full px-5 py-4 rounded-2xl bg-beige/20 border-none focus:ring-2 focus:ring-coral/50 outline-none transition-all text-base text-brown placeholder-brown/40 font-medium" id="nome" placeholder="Como gosta de ser chamado?" type="text"/>
</div>
<div>
<label className="block text-sm font-bold mb-3 text-brown" htmlFor="email">O seu email</label>
<input className="w-full px-5 py-4 rounded-2xl bg-beige/20 border-none focus:ring-2 focus:ring-coral/50 outline-none transition-all text-base text-brown placeholder-brown/40 font-medium" id="email" placeholder="Para podermos responder" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-bold mb-3 text-brown" htmlFor="assunto">Em que podemos ajudar?</label>
<div className="relative">
<select className="w-full px-5 py-4 rounded-2xl bg-beige/20 border-none focus:ring-2 focus:ring-coral/50 outline-none transition-all text-base appearance-none text-brown font-medium cursor-pointer" id="assunto">
<option>Quero fazer um donativo</option>
<option>Gostava de ser voluntário</option>
<option>Preciso de apoio / ajuda</option>
<option>Outro assunto carinhoso</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none text-brown/50">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-bold mb-3 text-brown" htmlFor="mensagem">A sua mensagem</label>
<textarea className="w-full px-5 py-4 rounded-2xl bg-beige/20 border-none focus:ring-2 focus:ring-coral/50 outline-none transition-all text-base resize-none text-brown placeholder-brown/40 font-medium" id="mensagem" placeholder="Escreva-nos do fundo do coração..." rows="5"></textarea>
</div>
<button className="w-full sm:w-auto px-10 py-4 rounded-full shadow-glow text-lg font-semibold focus:outline-none transition-all duration-300 text-white bg-coral hover:bg-coral/90 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-3" type="submit">
                                Enviar mensagem com amor
                                <iconify-icon className="text-xl" icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 bg-beige border-t-4 border-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
<div className="col-span-1 md:col-span-5">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-coral text-white shadow-sm">
<iconify-icon className="text-2xl" icon="solar:home-heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-bold tracking-tight text-2xl text-brown">Abrigo Para a Vida</span>
</div>
<p className="text-base text-brown/70 max-w-sm mb-8 font-medium leading-relaxed">
                        Um projeto feito de pessoas para pessoas. Juntos levamos carinho, dignidade e esperança a quem mais precisa.
                    </p>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 text-sm font-bold text-brown shadow-sm border border-white">
<span className="w-2 h-2 rounded-full bg-coral"></span>
                        NIF: 500 000 000 (Exemplo)
                    </div>
</div>
<div className="col-span-1 md:col-span-3 md:col-start-7">
<h3 className="text-base font-bold uppercase tracking-widest mb-6 text-brown">Família</h3>
<ul className="space-y-4">
<li><a className="text-base font-medium text-brown/70 transition-colors hover:text-coral flex items-center gap-2" href="#sobre"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> A nossa história</a></li>
<li><a className="text-base font-medium text-brown/70 transition-colors hover:text-coral flex items-center gap-2" href="#campanhas"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> Quem ajudamos</a></li>
<li><a className="text-base font-medium text-brown/70 transition-colors hover:text-coral flex items-center gap-2" href="#impacto"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> Sorrisos criados</a></li>
<li><a className="text-base font-bold text-coral hover:text-coral/80 transition-colors flex items-center gap-2" href="#doar"><iconify-icon icon="solar:heart-bold"></iconify-icon> Quero ajudar</a></li>
</ul>
</div>
<div className="col-span-1 md:col-span-3">
<h3 className="text-base font-bold uppercase tracking-widest mb-6 text-brown">Transparência</h3>
<ul className="space-y-4">
<li><a className="text-base font-medium text-brown/70 transition-colors hover:text-coral" href="#">Como cuidamos dos seus dados</a></li>
<li><a className="text-base font-medium text-brown/70 transition-colors hover:text-coral" href="#">Regras da nossa casa</a></li>
<li><a className="text-base font-medium text-brown/70 transition-colors hover:text-coral" href="#">Estatutos oficiais</a></li>
</ul>
</div>
</div>
<div className="border-t-2 border-white/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-sm font-medium text-brown/60">
                    © 2023 Associação Abrigo Para a Vida. Todos os direitos reservados.
                </p>
<div className="flex items-center gap-2 text-sm font-semibold text-brown/60 bg-white/50 px-4 py-2 rounded-full">
                    Feito com muito <iconify-icon className="text-coral text-lg" icon="solar:heart-bold"></iconify-icon> por voluntários.
                </div>
</div>
</div>
</footer>

<div className="sm:hidden fixed bottom-6 right-6 z-50">
<a className="w-16 h-16 bg-coral rounded-full flex items-center justify-center shadow-glow focus:outline-none hover:scale-110 transition-transform text-white border-2 border-white" href="#doar">
<iconify-icon className="text-3xl" icon="solar:hand-heart-linear"></iconify-icon>
</a>
</div>

    </>
  );
}
