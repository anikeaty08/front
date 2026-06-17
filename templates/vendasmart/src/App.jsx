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
sans: ['"Montserrat"', 'sans-serif'],
},
colors: {
background: '#ffffff',
title: '#050614',
text: '#050614',
subtle: '#F0F0F0',
accent: '#050614',
},
animation: {
'float-1': 'float 6s ease-in-out infinite',
'float-2': 'float 7s ease-in-out 1s infinite',
'float-3': 'float 5s ease-in-out 2s infinite',
'orbit': 'spin 20s linear infinite',
'orbit-reverse': 'spin 25s linear infinite reverse',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'shine': 'shine 8s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
shine: {
'0%': { backgroundPosition: '200% center' },
'100%': { backgroundPosition: '-200% center' },
}
}
}
}
}



      lucide.createIcons();
    
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
      

<nav className="fixed flex border-subtle z-50 bg-white/90 h-16 md:h-20 border-b top-0 right-0 left-0 backdrop-blur-md items-center transition-all">
<div className="flex w-full max-w-7xl mr-auto ml-auto pr-4 pl-4 md:pr-6 md:pl-6 items-center justify-between">

<a className="flex items-center gap-2 select-none" href="#">

<div className="flex text-lg font-medium text-white w-7 h-7 md:w-8 md:h-8 rounded-lg items-center justify-center">
            VS
          </div>
<span className="text-title text-base md:text-lg font-medium tracking-tight">
            Venda Smart
          </span>
</a>

<a className="inline-flex bg-title text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[10px] md:text-xs font-medium hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-gray-200" href="#agendamento">
          Agendar<span className="hidden md:inline"> Reunião</span>
</a>
</div>
</nav>
<main className="pt-16 md:pt-20">

<section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden px-4 md:px-6 py-12 md:py-20">
<div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="space-y-6 md:space-y-8 z-10 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-subtle/50 text-title border border-gray-100 mx-auto lg:mx-0">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
</span>
<span className="text-[10px] font-medium uppercase tracking-widest">
                Soluções em IA
              </span>
</div>

<h1 className="text-4xl md:text-5xl lg:text-7xl leading-[1.1] cursor-default font-medium text-[#050614] tracking-tight font-ibm-serif">
  Aqui mensagens
  <br className=""/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#050614] from-35% via-[#9ca3af] via-50% to-[#050614] to-65% bg-[length:200%_auto] animate-shine" style={{animationDuration: '4s', animationTimingFunction: 'linear'}}>
    se tornam clientes.
  </span>
</h1>
<div className="space-y-6">
<p className="text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                Lote a agenda do seu negócio toda semana com uma
                <span className="emphasis">inteligência artificial sob medida</span>
                .
              </p>

<div className="flex flex-col gap-3 items-center lg:items-start">
<div className="flex items-center gap-3 text-sm font-normal text-gray-700">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-black" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>IA Humanizada</span>
</div>
<div className="flex items-center gap-3 text-sm font-normal text-gray-700">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-black" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Solução Personalizada</span>
</div>
<div className="flex items-center gap-3 text-sm font-normal text-gray-700">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-black" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Acompanhamento Individual</span>
</div>
</div>
</div>
<div className="pt-4">
<a className="inline-flex items-center justify-center gap-2 bg-title text-white px-8 py-4 rounded-full text-sm font-medium shadow-xl hover:-translate-y-1 transition-all duration-300 w-full md:w-auto" href="#agendamento">
                Começar Agora
                <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>


<div className="flex md:h-[600px] w-full h-[400px] relative items-center justify-center">

<div className="bg-gradient-to-tr from-gray-100 to-transparent opacity-60 rounded-full absolute top-0 right-0 bottom-0 left-0 blur-3xl"></div>

<div className="z-10 flex flex-col gap-4 md:gap-6 w-full max-w-md relative gap-x-6 gap-y-6">

<div className="flex gap-4 animate-float-1 self-end bg-white w-[90%] md:w-[85%] border-gray-100 border rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] items-center">
<div className="flex flex-shrink-0 text-blue-600 bg-blue-50 w-10 h-10 md:w-12 md:h-12 rounded-xl items-center justify-center">
<iconify-icon className="md:w-6 md:h-6" icon="logos:google-calendar" width="20"></iconify-icon>
</div>
<div className="">
<p className="text-[10px] md:text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">
                    Nova Reunião
                  </p>
<p className="text-title text-xs md:text-sm font-medium">
                    Consulta Marcada com Sucesso
                  </p>
<p className="text-[10px] md:text-xs text-gray-500">Amanhã às 14:00h</p>
</div>
</div>

<div className="bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center gap-4 animate-float-2 w-[85%] md:w-[80%]">
<div className="w-10 h-10 md:w-12 md:h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
<iconify-icon className="md:w-6 md:h-6" icon="simple-icons:n8n" width="20"></iconify-icon>
</div>
<div className="">
<p className="text-[10px] md:text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">
                    Status do Lead
                  </p>
<p className="text-xs md:text-sm font-medium text-title">Em negociação</p>
<p className="text-[10px] md:text-xs text-gray-500">IA respondendo agora...</p>
</div>
</div>

<div className="flex gap-4 animate-float-3 self-center bg-white w-[80%] md:w-[70%] border-gray-100 border rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] items-center">
<div className="flex flex-shrink-0 text-green-600 bg-green-50 w-10 h-10 md:w-12 md:h-12 rounded-xl items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 md:w-6 md:h-6" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewbox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M195.368 60.632H60.632v134.736h134.736z" fill="#FFF"></path>
<path d="M195.368 256L256 195.368l-30.316-5.172l-30.316 5.172l-5.533 27.73z" fill="#EA4335"></path>
<path d="M0 195.368v40.421C0 246.956 9.044 256 20.21 256h40.422l6.225-30.316l-6.225-30.316l-33.033-5.172z" fill="#188038"></path>
<path d="M256 60.632V20.21C256 9.044 246.956 0 235.79 0h-40.422q-5.532 22.554-5.533 33.196q0 10.641 5.533 27.436q20.115 5.76 30.316 5.76T256 60.631" fill="#1967D2"></path>
<path d="M256 60.632h-60.632v134.736H256z" fill="#FBBC04"></path>
<path d="M195.368 195.368H60.632V256h134.736z" fill="#34A853"></path>
<path className="" d="M195.368 0H20.211C9.044 0 0 9.044 0 20.21v175.158h60.632V60.632h134.736z" fill="#4285F4"></path>
<path d="M88.27 165.154c-5.036-3.402-8.523-8.37-10.426-14.94l11.689-4.816q1.59 6.063 5.558 9.398c2.627 2.223 5.827 3.318 9.566 3.318q5.734 0 9.852-3.487c2.746-2.324 4.127-5.288 4.127-8.875q0-5.508-4.345-8.994c-2.897-2.324-6.535-3.486-10.88-3.486h-6.754v-11.57h6.063q5.608 0 9.448-3.033c2.56-2.02 3.84-4.783 3.84-8.303c0-3.132-1.145-5.625-3.435-7.494c-2.29-1.87-5.188-2.813-8.708-2.813c-3.436 0-6.164.91-8.185 2.745a16.1 16.1 0 0 0-4.413 6.754l-11.57-4.817c1.532-4.345 4.345-8.185 8.471-11.503s9.398-4.985 15.798-4.985c4.733 0 8.994.91 12.767 2.745c3.772 1.836 6.736 4.379 8.875 7.613c2.14 3.25 3.2 6.888 3.2 10.93c0 4.126-.993 7.613-2.98 10.476s-4.43 5.052-7.327 6.585v.69a22.25 22.25 0 0 1 9.398 7.327c2.442 3.284 3.672 7.208 3.672 11.79c0 4.58-1.163 8.673-3.487 12.26c-2.324 3.588-5.54 6.417-9.617 8.472c-4.092 2.055-8.69 3.1-13.793 3.1c-5.912.016-11.369-1.685-16.405-5.087m71.797-58.005l-12.833 9.28l-6.417-9.734l23.023-16.607h8.825v78.333h-12.598z" fill="#4285F4"></path>
</svg>
</div>
<div className="">
<p className="uppercase text-[10px] md:text-xs font-medium text-gray-400 tracking-wider mb-0.5" style={{}}>
                    Venda Smart
                  </p>
<p className="text-title text-xs md:text-sm font-medium" style={{}}>
                    Cliente Agendado amanhã 9h
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-subtle md:py-32 md:px-6 bg-white border-t pt-16 pr-4 pb-16 pl-4">
<div className="max-w-7xl mx-auto">
<div className="mb-12 md:mb-20 text-center md:text-left">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-title mb-4">
              O caminho para lotar a agenda
            </h2>
</div>
<div className="grid gap-6 md:gap-8">

<div className="group sticky top-20 md:top-24 bg-white border border-gray-100 p-6 md:p-12 rounded-3xl shadow-sm transition-all duration-500 hover:shadow-xl hover:border-gray-200 hover:-translate-y-1">
<div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center justify-between">
<div className="">
<span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">
                    Passo 01
                  </span>
<h3 className="text-xl md:text-2xl font-medium text-title mb-2">Reunião</h3>
<p className="text-sm md:text-base text-gray-600 font-light max-w-xl">
                    Agende uma reunião &amp; nos conte sobre seu negócio.
                    Entendemos seus gargalos.
                  </p>
</div>
<div className="hidden md:flex w-12 h-12 rounded-full border border-gray-200 items-center justify-center group-hover:bg-title group-hover:text-white transition-colors">
<svg aria-hidden="true" className="lucide lucide-arrow-down w-5 h-5" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</div>
</div>

<div className="group sticky top-24 md:top-32 bg-white border border-gray-100 p-6 md:p-12 rounded-3xl shadow-sm transition-all duration-500 hover:shadow-xl hover:border-gray-200 hover:-translate-y-1">
<div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center justify-between">
<div className="">
<span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">
                    Passo 02
                  </span>
<h3 className="text-xl md:text-2xl font-medium text-title mb-2">
                    Desenvolvimento
                  </h3>
<p className="text-sm md:text-base text-gray-600 font-light max-w-xl">
                    Vamos
                    <span className="emphasis">desenvolver &amp; implementar</span>
                    uma solução IA personalizada no seu negócio.
                  </p>
</div>
<div className="hidden md:flex w-12 h-12 rounded-full border border-gray-200 items-center justify-center group-hover:bg-title group-hover:text-white transition-colors">
<svg aria-hidden="true" className="lucide lucide-code-2 w-5 h-5" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
</div>
</div>

<div className="group sticky top-28 md:top-40 bg-white border border-gray-100 p-6 md:p-12 rounded-3xl shadow-sm transition-all duration-500 hover:shadow-xl hover:border-gray-200 hover:-translate-y-1">
<div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center justify-between">
<div className="">
<span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">
                    Passo 03
                  </span>
<h3 className="text-xl md:text-2xl font-medium text-title mb-2">
                    Acompanhamento
                  </h3>
<p className="text-sm md:text-base text-gray-600 font-light max-w-xl">
                    Com a IA fazendo agendamentos, o acompanhamos para gerar
                    cada vez mais resultados.
                  </p>
</div>
<div className="hidden md:flex w-12 h-12 rounded-full border border-gray-200 items-center justify-center group-hover:bg-title group-hover:text-white transition-colors">
<svg aria-hidden="true" className="lucide lucide-trending-up w-5 h-5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-8 md:px-6 py-6 px-4 relative">
<div className="flex z-20 md:px-6 md:py-16 bg-[#F5F3F4] w-full py-10 px-4 relative items-center justify-center rounded-3xl">
<div className="z-30 cursor-default border-dashed transition-all duration-500 hover:-translate-y-1 hover:border-gray-300 hover:shadow-2xl md:rounded-[40px] md:p-10 text-center bg-white w-full max-w-5xl border-gray-200 border rounded-3xl p-6 relative shadow-xl">
<p className="font-dm-sans text-lg font-light leading-relaxed tracking-tight text-gray-600 md:text-2xl lg:text-3xl">
        "Acreditamos que cada negócio vive uma realidade e por isso desenvolvemos uma
        <span className="font-instrument-serif font-normal italic text-gray-900">
          solução personalizada
        </span>
        para que cada um gere resultados fora da curva. E assim como a solução, o investimento também é personalizado — com planos a partir de
        <span className="border-b border-gray-300 pb-0.5 font-medium text-gray-900">
          R$2000/mês
        </span>."
      </p>
</div>
</div>
</section>

<section className="py-16 md:py-32 px-4 md:px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">

<div className="">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6 text-title text-center lg:text-left">
              Agenda Cheia,
              <span className="text-gray-400 font-light">Sem preocupação.</span>
</h2>
<p className="text-gray-600 mb-10 max-w-md font-light leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
              Ao invés de sobrecarregar a secretária, nossa IA vai ficar
              responsável por lotar o seu negócio com clientes todo mês.
            </p>
<div className="space-y-6">
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-subtle flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
<svg aria-hidden="true" className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<span className="text-sm font-medium">Agendamento 24h/dia</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-subtle flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
<svg aria-hidden="true" className="lucide lucide-briefcase w-5 h-5" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<span className="text-sm font-medium">Comercial Eficiente</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-subtle flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
<svg aria-hidden="true" className="lucide lucide-bot w-5 h-5" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<span className="text-sm font-medium">
                  IA que até parece Humano
                </span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-subtle flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
<svg aria-hidden="true" className="lucide lucide-refresh-ccw w-5 h-5" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
</div>
<span className="text-sm font-medium">Follow Up Automático</span>
</div>
</div>
<div className="mt-12 text-center lg:text-left">
<a className="hover:opacity-70 transition-opacity text-sm font-semibold border-black border-b pb-1" href="#agendamento" style={{}}>Agendar reunião -&gt;</a>
</div>
</div>


<div className="relative flex items-center justify-center h-[400px] md:h-[500px] w-full orbit-container transform scale-[0.65] md:scale-100 origin-center">

<div className="z-20 w-24 h-24 bg-title rounded-full flex items-center justify-center shadow-2xl relative">
<span className="text-white text-3xl font-bold">V</span>
<div className="absolute inset-0 rounded-full animate-pulse-slow border border-gray-500 opacity-20"></div>
</div>

<div className="absolute w-[280px] h-[280px] border border-gray-200 rounded-full animate-orbit-reverse">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border border-gray-100">
<iconify-icon icon="logos:google-calendar" width="20"></iconify-icon>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-2 rounded-full shadow-lg border border-gray-100">
<iconify-icon icon="logos:whatsapp-icon" width="20"></iconify-icon>
</div>
</div>

<div className="animate-orbit w-[450px] h-[450px] border border-gray-100 rounded-full absolute z-30 flex items-center justify-center" style={{boxShadow: '0 0 80px -20px rgba(0,0,0,0.05)'}}>

<div className="absolute inset-8 rounded-full border border-dashed border-gray-200/50"></div>

<div className="absolute z-50 w-32 h-32 bg-white rounded-full shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)] flex items-center justify-center p-7 border border-gray-50" style={{animation: 'spin 20s linear infinite reverse'}}>
<img alt="Venda Smart Logo" className="opacity-90 mix-blend-multiply w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9417b722-e12d-44b9-9bd2-51d5714c1121_320w.png" style={{filter: 'contrast(1.05)'}}/>
</div>

<div className="absolute -top-5 left-1/2 -translate-x-1/2">
<div className="bg-white p-3.5 rounded-2xl shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center justify-center backdrop-blur-sm transition-transform hover:scale-105" style={{animation: 'spin 20s linear infinite reverse'}}>
<iconify-icon className="text-[#EA4B71]" icon="simple-icons:n8n" width="26"></iconify-icon>
</div>
</div>

<div className="absolute bottom-[14%] right-[6%]">
<div className="bg-white p-3.5 rounded-2xl shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center justify-center backdrop-blur-sm transition-transform hover:scale-105" style={{animation: 'spin 20s linear infinite reverse'}}>
<iconify-icon className="text-[#3ECF8E]" icon="simple-icons:supabase" width="26"></iconify-icon>
</div>
</div>

<div className="absolute bottom-[14%] left-[6%]">
<div className="bg-white p-3.5 rounded-2xl shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center justify-center backdrop-blur-sm transition-transform hover:scale-105" style={{animation: 'spin 20s linear infinite reverse'}}>
<iconify-icon icon="logos:google-drive" width="26"></iconify-icon>
</div>
</div>

<div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
<div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-32 px-4 md:px-6 bg-subtle/30">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">

<div className="order-2 md:order-1">
<span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6 block">
              | Por trás do Venda Smart
            </span>
<div className="space-y-6 text-gray-600 font-light leading-relaxed text-sm md:text-base">
<p className="">
                Sei como é frustrante receber centenas de mensagens por mês e
                poucos virarem venda. Quando trabalhei como gestor de tráfego
                sofri exatamente com isso...
              </p>
<p className="text-title font-medium">
                Mas vou te contar um segredo, o seu negócio não precisa de mais
                leads para lotar a agenda e sim de um comercial eficaz.
              </p>
<p className="">
                Depois de estudar vendas e inteligência artificial na
                <span className="emphasis">
                  1° Formação de IA Business da América Latina
                </span>
                , eu ajudo empresas que fazem agendamentos com clientes a
                crescerem com inteligência artificial.
              </p>
<p className="">
                Se o seu negócio recebe muitas mensagens e quer vender mais,
                será um prazer te ajudar.
              </p>
</div>
<div className="mt-10 pt-8 border-t border-gray-200">
<p className="font-medium text-lg text-title">Igor Chagas</p>
<p className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                Founder Venda Smart
              </p>
</div>
</div>

<div className="order-1 md:order-2 relative group">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
<img alt="Igor Chagas" className="hover:grayscale-0 transition-all duration-700 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5400119b-fb4e-4c6e-bd37-8ae304f8b5b7_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="bg-white py-16 md:py-32 px-4 md:px-6" id="agendamento">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

<div className="sticky top-24 md:top-32">
<h2 className="text-3xl md:text-4xl lg:text-6xl font-medium tracking-tight mb-6 md:mb-8 text-title">
              Seu Negócio Lotado
              <br/>
<span className="text-gray-300">Toda Semana</span>
</h2>
<p className="text-gray-500 text-base md:text-lg font-light mb-8 md:mb-10 max-w-md">
              Agende uma reunião e vamos mostrar a solução ideal para o seu
              negócio vender mais.
            </p>
<div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
<div className="flex items-center gap-3 mb-2">
<svg aria-hidden="true" className="lucide lucide-message-circle-dashed lucide-video w-[20px] h-[20px]" data-lucide="message-circle-dashed" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(5, 6, 20)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"></path><path d="M13.9 21.818a10 10 0 0 1-3.8 0"></path><path d="M17.609 3.72a10 10 0 0 1 2.69 2.7"></path><path d="M2.182 13.9a10 10 0 0 1 0-3.8"></path><path d="M20.28 17.61a10 10 0 0 1-2.7 2.69"></path><path d="M21.818 10.1a10 10 0 0 1 0 3.8"></path><path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"></path><path d="m6.163 21.117-2.906.85a1 1 0 0 1-1.236-1.169l.965-2.98"></path></svg>
<h4 className="text-title font-medium" style={{}}>
                  Confirmação da Reunião
                </h4>
</div>
<p className="text-sm font-light text-gray-500 pl-8" style={{}}>
                Assim que você confirmar um horário, iremos entrar em contato
                pelo WhatsApp para confirmar a reunião.
              </p>
</div>
</div>

<div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden min-h-[500px] md:min-h-[700px]">

<div className="calendly-inline-widget" data-processed="true" data-url="https://calendly.com/igorchagasruivo2005/reuniao-individual" style={{position: 'relative', minWidth: '320px', height: '700px'}}>
<div className="calendly-spinner">
<div className="calendly-bounce1"></div>
<div className="calendly-bounce2"></div>
<div className="calendly-bounce3"></div>
</div>
<iframe className="" frameborder="0" height="100%" src="https://calendly.com/igorchagasruivo2005/reuniao-individual?embed_domain=&amp;embed_type=Inline" title="Select a Date &amp; Time - Calendly" width="100%"></iframe>
</div>


</div>
</div>
</section>

<section className="border-subtle bg-white border-t py-16 md:py-32 px-4 md:px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl md:text-3xl font-medium mb-12 md:mb-16 text-center tracking-tight text-title">
            Perguntas Frequentes
          </h2>
<div className="space-y-4">
<details className="group bg-white border-b border-gray-100 pb-4">
<summary className="flex justify-between items-center py-4 cursor-pointer select-none">
<span className="font-medium text-base md:text-lg text-title pr-4">
                  Para quem é o Venda Smart?
                </span>
<svg aria-hidden="true" className="lucide lucide-plus w-5 h-5 text-gray-400 transition-transform group-open:rotate-45 flex-shrink-0" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
<div className="pt-4 text-gray-600 font-light leading-relaxed text-sm md:text-base">
                Nós ajudamos empresas B2C que fazem agendamento com o cliente,
                como clínicas, hospitais, salões de beleza, agências e
                escritórios. Se o seu negócio fatura no mínimo R$30 mil/mês e
                recebe muitas mensagens no WhatsApp que acabam sendo ignoradas,
                podemos ajudar.
              </div>
</details>
<details className="group bg-white border-b border-gray-100 pb-4">
<summary className="flex justify-between items-center py-4 cursor-pointer select-none">
<span className="font-medium text-base md:text-lg text-title pr-4">
                  Como funciona o investimento?
                </span>
<svg aria-hidden="true" className="lucide lucide-plus w-5 h-5 text-gray-400 transition-transform group-open:rotate-45 flex-shrink-0" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
<div className="pt-4 text-gray-600 font-light leading-relaxed text-sm md:text-base">
                Assim como desenvolvemos uma solução personalizada para cada
                negócio, o investimento é personalizado para que ambas as partes
                tenham lucro - começando com planos a partir de R$2000/mês.
              </div>
</details>
<details className="group bg-white border-b border-gray-100 pb-4">
<summary className="flex justify-between items-center py-4 cursor-pointer select-none">
<span className="font-medium text-base md:text-lg text-title pr-4">
                  Existe garantia?
                </span>
<svg aria-hidden="true" className="lucide lucide-plus w-5 h-5 text-gray-400 transition-transform group-open:rotate-45 flex-shrink-0" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
<div className="pt-4 text-gray-600 font-light leading-relaxed text-sm md:text-base">
                Sim. Após assinarmos o contrato, por lei, você tem 7 dias de
                garantia incondicional.
              </div>
</details>
<details className="group bg-white border-b border-gray-100 pb-4">
<summary className="flex justify-between items-center py-4 cursor-pointer select-none">
<span className="font-medium text-base md:text-lg text-title pr-4">
                  Como funciona a reunião?
                </span>
<svg aria-hidden="true" className="lucide lucide-plus w-5 h-5 text-gray-400 transition-transform group-open:rotate-45 flex-shrink-0" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
<div className="pt-4 text-gray-600 font-light leading-relaxed text-sm md:text-base">
                A reunião serve para entendermos a situação atual do seu negócio
                para desenvolvermos a melhor solução. Após a reunião e contrato
                fechado, iremos implementar a solução.
              </div>
</details>
<details className="group bg-white border-b border-gray-100 pb-4">
<summary className="flex cursor-pointer select-none pt-4 pb-4 items-center justify-between">
<span className="font-medium text-base md:text-lg text-title pr-4">
                  A IA vai estar integrada no WhatsApp?
                </span>
<svg aria-hidden="true" className="lucide lucide-plus w-5 h-5 text-gray-400 transition-transform group-open:rotate-45 flex-shrink-0" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
<div className="pt-4 text-gray-600 font-light leading-relaxed text-sm md:text-base">
                Sim, a IA vai atuar como um vendedor profissional dentro do
                WhatsApp da sua empresa, atuando como um qualificador que faz
                agendamentos 24 horas por dia.
              </div>
</details>
</div>
</div>
</section>
</main>

<footer className="text-center bg-white border-gray-100 border-t py-12 md:py-20">
<div className="flex flex-col text-center max-w-7xl mr-auto ml-auto items-center justify-center px-4">
<div className="mb-8 flex flex-col items-center gap-4">
<div className="w-10 h-10 bg-title text-white flex items-center justify-center rounded-xl font-medium text-xl">
            V
          </div>
<span className="text-title text-2xl font-medium tracking-tight font-serif">
            Venda Smart
          </span>
</div>
<div className="flex gap-8 text-center mb-10 gap-x-8 gap-y-8">
<a className="hover:text-black transition-colors text-gray-400" href="/#"></a>
<a className="text-gray-400 hover:text-black transition-colors" href="#"></a>
<a className="text-gray-400 hover:text-black transition-colors" href="mailto:contato@vendasmart.com"></a>
</div>
<p className="text-[10px] uppercase text-gray-400 tracking-widest" style={{}}>
          © 2026 Venda Smart IA Solutions. All rights reserved.
        </p>
</div>
</footer>



    </>
  );
}
