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
      

<nav className="fixed top-0 w-full z-50 bg-emerald-950/95 backdrop-blur-md border-b border-emerald-900 transition-all duration-300 shadow-lg shadow-emerald-950/20">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<a className="flex items-center gap-1 group" href="index.html">
<div className="relative mr-1 transition-transform group-hover:scale-105 duration-300">
<svg className="lucide lucide-leaf fill-emerald-900 stroke-[1.5] transform w-[40px] h-[40px] -rotate-12" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(220, 235, 52)', width: '40px', height: '40px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<div className="flex items-center leading-none text-white select-none">
<span className="text-5xl font-bold tracking-tighter mr-1.5">PE</span>
<div className="flex flex-col justify-center h-full gap-0.5">
<span className="text-sm font-bold tracking-widest uppercase text-emerald-50">Controle</span>
<span className="text-sm font-bold tracking-widest uppercase text-emerald-50">de Pragas</span>
</div>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-emerald-100/80 hover:text-white transition-colors" href="index.html">Início</a>
<a className="text-sm font-medium text-white transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-px after:bg-[#dceb34]" href="#">Institucional</a>
<a className="text-sm font-medium text-emerald-100/80 hover:text-white transition-colors" href="index.html#services">Serviços</a>
<a className="text-sm font-medium text-emerald-100/80 hover:text-white transition-colors" href="#contact">Contato</a>
</div>

<div className="hidden md:block">
<a className="inline-flex items-center gap-2 hover:bg-[#cddc29] transition-all hover:shadow-[#dceb34]/20 hover:-translate-y-0.5 text-sm font-semibold text-emerald-950 bg-[#dceb34] rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm" href="#contact">
                    Solicitar Orçamento
                    <svg className="lucide lucide-arrow-right w-4 h-4 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<button className="md:hidden text-emerald-50">
<svg className="lucide lucide-menu w-7 h-7 stroke-[1.5]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<main className="flex-grow pt-32 pb-24">

<div className="max-w-7xl mx-auto px-6 mb-16">
<div className="border-b border-slate-200 pb-6">
<h1 className="text-4xl font-bold tracking-tight text-slate-900 uppercase">Institucional</h1>
<div className="h-1.5 w-24 bg-[#dceb34] mt-4 rounded-full"></div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

<div>
<h2 className="text-2xl font-semibold text-slate-900 mb-8 uppercase tracking-tight flex items-center gap-3">
                        Nossa História
                    </h2>
<div className="prose prose-slate text-slate-600 leading-relaxed text-lg space-y-6">
<p>
                            A <strong className="text-emerald-700">PE CONTROLE DE PRAGAS</strong> é uma empresa que vem atuando exclusivamente como prestadora de serviços em controle de pragas urbanas e limpeza de reservatórios de água.
                        </p>
<p>
                            Especializada neste ramo de atividade, conta com profissionais treinados, capacitados, registrados e licenciados por órgãos competentes de fiscalização. Nossa trajetória é marcada pelo compromisso com a saúde ambiental e a satisfação de nossos clientes.
                        </p>
</div>
</div>

<div className="space-y-5">

<div className="bg-[#dceb34] p-6 rounded-2xl shadow-lg shadow-[#dceb34]/10 hover:translate-y-[-2px] transition-transform duration-300">
<div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
<span className="font-bold text-emerald-950 uppercase text-sm tracking-wider min-w-[80px] pt-0.5">Missão:</span>
<p className="text-emerald-950 text-sm font-medium leading-relaxed">Ser reconhecida por todos os clientes internos e externos buscando superação e melhorias em seus processos de prestação de serviços e atendimento.</p>
</div>
</div>

<div className="bg-[#dceb34] p-6 rounded-2xl shadow-lg shadow-[#dceb34]/10 hover:translate-y-[-2px] transition-transform duration-300">
<div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
<span className="font-bold text-emerald-950 uppercase text-sm tracking-wider min-w-[80px] pt-0.5">Visão:</span>
<p className="text-emerald-950 text-sm font-medium leading-relaxed">Ser referência em qualidade na prestação de serviço e atendimento ao colaborador no setor de prestador de serviço.</p>
</div>
</div>

<div className="bg-[#dceb34] p-6 rounded-2xl shadow-lg shadow-[#dceb34]/10 hover:translate-y-[-2px] transition-transform duration-300">
<div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
<span className="font-bold text-emerald-950 uppercase text-sm tracking-wider min-w-[80px] pt-0.5">Valores:</span>
<p className="text-emerald-950 text-sm font-medium leading-relaxed">A ética e transparência, respeito ao homem e ao meio ambiente, colaborando e tornando clientes e fornecedores fidelizados.</p>
</div>
</div>
</div>
</div>

<div className="mt-32">
<div className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-[16/9] lg:aspect-[2/1] flex items-center justify-center min-h-[500px]">

<svg className="w-full h-full max-w-[600px] drop-shadow-xl" viewbox="0 0 600 600">
<defs>
<filter height="140%" id="shadow" width="140%" x="-20%" y="-20%">
<fedropshadow dx="2" dy="2" flood-opacity="0.1" stddeviation="3"></fedropshadow>
</filter>
</defs>

<g transform="translate(300, 300)">


<path d="M-60,-100 A160,160 0 0,1 60,-100 L95,-130 A200,200 0 0,0 -95,-130 Z" fill="#dceb34" stroke="white" strokeWidth="4"></path>
<polygon fill="#dceb34" points="95,-130 60,-100 80,-85" transform="rotate(10, 80, -110)"></polygon> 

<g transform="rotate(90)">
<path d="M-60,-100 A160,160 0 0,1 60,-100 L95,-130 A200,200 0 0,0 -95,-130 Z" fill="#dceb34" stroke="white" strokeWidth="4"></path>
</g>

<g transform="rotate(180)">
<path d="M-60,-100 A160,160 0 0,1 60,-100 L95,-130 A200,200 0 0,0 -95,-130 Z" fill="#dceb34" stroke="white" strokeWidth="4"></path>
</g>

<g transform="rotate(270)">
<path d="M-60,-100 A160,160 0 0,1 60,-100 L95,-130 A200,200 0 0,0 -95,-130 Z" fill="#dceb34" stroke="white" strokeWidth="4"></path>
</g>

<circle className="filter drop-shadow-lg" fill="white" r="115"></circle>
<text className="uppercase" fill="#1a2e05" fontFamily="Inter, sans-serif" fontSize="20" font-weight="800" text-anchor="middle" x="0" y="-10">Satisfazer</text>
<text className="uppercase" fill="#1a2e05" fontFamily="Inter, sans-serif" fontSize="20" font-weight="800" text-anchor="middle" x="0" y="15">Necessidades</text>
<text className="uppercase" fill="#1a2e05" fontFamily="Inter, sans-serif" fontSize="20" font-weight="800" text-anchor="middle" x="0" y="40">dos Clientes</text>


<foreignobject height="60" width="280" x="-140" y="-210">
<div className="flex flex-col items-center justify-center h-full text-center" xmlns="http://www.w3.org/1999/xhtml">
<span className="text-emerald-950 font-bold text-sm uppercase leading-tight">Atender Requisitos<br/>Legais e dos Clientes</span>
</div>
</foreignobject>

<foreignobject height="60" width="160" x="135" y="-30">
<div className="flex flex-col items-center justify-center h-full text-center" xmlns="http://www.w3.org/1999/xhtml">
<span className="text-emerald-950 font-bold text-sm uppercase leading-tight">Colaboradores<br/>Capacitados</span>
</div>
</foreignobject>

<foreignobject height="60" width="200" x="-100" y="150">
<div className="flex flex-col items-center justify-center h-full text-center" xmlns="http://www.w3.org/1999/xhtml">
<span className="text-emerald-950 font-bold text-sm uppercase leading-tight">Processos<br/>Claramente Definidos</span>
</div>
</foreignobject>

<foreignobject height="60" width="160" x="-295" y="-30">
<div className="flex flex-col items-center justify-center h-full text-center" xmlns="http://www.w3.org/1999/xhtml">
<span className="text-emerald-950 font-bold text-sm uppercase leading-tight">Melhoria<br/>Contínua</span>
</div>
</foreignobject>
</g>
</svg>
</div>
</div>
</div>
</main>

<footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 mt-auto" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="space-y-4">
<div className="flex items-center gap-2 text-white">
<div className="bg-emerald-600 p-1 rounded-md">
<svg className="lucide lucide-leaf w-5 h-5 stroke-[1.5]" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<span className="font-semibold text-lg tracking-tight">PE Controle</span>
</div>
<p className="text-sm leading-relaxed text-slate-500">
                        Especialistas em controle de pragas urbanas e higienização de reservatórios com foco em segurança e sustentabilidade.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5 stroke-[1.5]" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5 stroke-[1.5]" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</div>
</div>

<div className="">
<h4 className="text-white font-medium mb-6 text-sm">Empresa</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-emerald-400 transition-colors" href="index.html">Início</a></li>
<li className=""><a className="text-emerald-400 font-medium cursor-default" href="#">Institucional</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Política de Privacidade</a></li>
</ul>
</div>

<div className="">
<h4 className="text-white font-medium mb-6 text-sm">Serviços</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Desratização</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Descupinização</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Desinsetização</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Limpeza de Reservatórios</a></li>
</ul>
</div>

<div className="">
<h4 className="text-white font-medium mb-6 text-sm">Contato</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<svg className="lucide lucide-map-pin w-5 h-5 text-emerald-600 stroke-[1.5] mt-0.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Rua Antonio Porfírio de Santana, 41Bomba do Hemetério, Recife-PE</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-phone w-5 h-5 text-emerald-600 stroke-[1.5]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
<span>(81) 3074-1114</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-mail w-5 h-5 text-emerald-600 stroke-[1.5]" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span>contato@pecontrole.com.br</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2026 PE Controle de Pragas. Todos os direitos reservados.</p>
<div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
<span className="text-xs font-semibold text-slate-500">Desenvolvimento FarosWeb</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
