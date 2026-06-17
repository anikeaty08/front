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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
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
      

<header className="w-full bg-slate-50 py-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
<div className="flex items-center gap-1 font-semibold text-[#4F46E5] tracking-widest uppercase text-sm">
                Loovi <span className="mx-2 text-slate-300">-</span> Seguros
            </div>
</div>
</header>

<section className="bg-slate-50 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="bg-[#4F46E5] rounded-[2rem] px-8 md:px-16 pt-12 md:pt-0 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-xl shadow-indigo-500/20">

<div className="absolute inset-x-0 bottom-1/4 h-[1px] bg-white/20 z-0 hidden md:block">
<div className="absolute right-1/4 -top-1 w-2 h-2 rounded-full bg-cyan-300"></div>
</div>

<div className="z-10 w-full md:w-[45%] py-10 md:py-24">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                        O seguro de carro<br/>mais rápido do Brasil!
                    </h1>
<p className="text-lg text-indigo-100 mb-10 font-medium">
                        Completo e 100% digital
                    </p>
<a className="inline-flex items-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-emerald-400 hover:scale-[1.02]" href="#">
                        Cotar agora <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="z-10 w-full md:w-1/2 flex justify-end items-end h-full pt-10 md:pt-0">
<img alt="Homem sorrindo" className="w-full max-w-md h-[400px] md:h-[500px] object-cover object-top rounded-t-[2rem] md:rounded-t-none md:rounded-tl-[3rem] shadow-2xl relative z-10 mix-blend-luminosity opacity-90" src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{maskImage: 'linear-gradient(to top, transparent 0%, black 20%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%)'}}/>

<div className="absolute bottom-12 right-12 z-20 text-right hidden md:block text-white/90">
<p className="text-xs font-medium uppercase tracking-widest mb-1 opacity-70">Neymar</p>
<p className="text-4xl font-semibold tracking-tight leading-none opacity-20">MENINO<br/>DA<br/>LOOVI.</p>
</div>
</div>
</div>

<div className="absolute -bottom-6 left-10 md:left-24 bg-white rounded-full shadow-lg p-2 pr-8 flex items-center gap-4 border border-slate-100">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 shrink-0">
<i className="w-5 h-5" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<p className="text-xs text-slate-500 leading-snug">
                    Seguro garantido pela<br/>
<span className="font-medium text-slate-800">LTI Seguros, autorizada SUSEP</span>
</p>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative">
<div className="max-w-3xl mx-auto px-6">
<div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-14 relative z-10">
<div className="mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-slate-800 mb-2">Coberturas</h2>
<p className="text-sm text-slate-500">Seguros garantidos pela LTI Seguros S.A, uma empresa do Grupo Loovi</p>
</div>
<div className="flex flex-col">
<div className="flex items-center justify-between py-5 border-b border-slate-100 cursor-pointer group">
<div className="flex items-center gap-4">
<i className="w-6 h-6 text-[#10B981]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg font-medium text-slate-700 group-hover:text-[#4F46E5] transition-colors">Furto e Roubo</span>
</div>
<i className="w-5 h-5 text-slate-400 group-hover:text-[#4F46E5] transition-colors" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="flex items-center justify-between py-5 border-b border-slate-100 cursor-pointer group">
<div className="flex items-center gap-4">
<i className="w-6 h-6 text-[#10B981]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg font-medium text-slate-700 group-hover:text-[#4F46E5] transition-colors">Assistência 24h</span>
</div>
<i className="w-5 h-5 text-slate-400 group-hover:text-[#4F46E5] transition-colors" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="flex items-center justify-between py-5 border-b border-slate-100 cursor-pointer group">
<div className="flex items-center gap-4">
<i className="w-6 h-6 text-[#10B981]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg font-medium text-slate-700 group-hover:text-[#4F46E5] transition-colors">Carro Reserva</span>
</div>
<i className="w-5 h-5 text-slate-400 group-hover:text-[#4F46E5] transition-colors" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="flex items-center justify-between py-5 border-b border-slate-100 cursor-pointer group">
<div className="flex items-center gap-4">
<i className="w-6 h-6 text-[#10B981]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg font-medium text-slate-700 group-hover:text-[#4F46E5] transition-colors">Colisão</span>
</div>
<i className="w-5 h-5 text-slate-400 group-hover:text-[#4F46E5] transition-colors" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="flex items-center justify-between py-5 border-b border-slate-100 cursor-pointer group">
<div className="flex items-center gap-4">
<i className="w-6 h-6 text-[#10B981]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg font-medium text-slate-700 group-hover:text-[#4F46E5] transition-colors">Terceiros</span>
</div>
<i className="w-5 h-5 text-slate-400 group-hover:text-[#4F46E5] transition-colors" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="flex items-center justify-between py-5 border-b border-slate-100 cursor-pointer group">
<div className="flex items-center gap-4">
<i className="w-6 h-6 text-[#10B981]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg font-medium text-slate-700 group-hover:text-[#4F46E5] transition-colors">APP</span>
</div>
<i className="w-5 h-5 text-slate-400 group-hover:text-[#4F46E5] transition-colors" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="flex items-center justify-between py-5 border-slate-100 cursor-pointer group">
<div className="flex items-center gap-4">
<i className="w-6 h-6 text-[#10B981]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg font-medium text-slate-700 group-hover:text-[#4F46E5] transition-colors">Vidros Completo</span>
</div>
<i className="w-5 h-5 text-slate-400 group-hover:text-[#4F46E5] transition-colors" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="mt-12 text-center">
<button className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full font-medium hover:bg-indigo-700 transition-colors inline-flex items-center gap-2">
                        Cotar agora <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#EEF2FF] relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-[#EEF2FF] opacity-50 z-0"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-800 mb-12 leading-[1.15]">
                        Por que a Loovi<br/>está conquistando<br/>o Brasil?
                    </h2>
<div className="flex flex-col gap-4">
<div className="bg-white rounded-full py-4 px-6 shadow-sm border border-slate-100 flex items-center gap-4 transition-transform hover:-translate-y-1">
<div className="bg-indigo-100 text-[#4F46E5] rounded-full p-1.5 shrink-0">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-base text-slate-700 font-medium leading-tight">Pagamento mês a mês, sem comprometer seu limite, igual Netflix</span>
</div>
<div className="bg-white rounded-full py-4 px-6 shadow-sm border border-slate-100 flex items-center gap-4 transition-transform hover:-translate-y-1">
<div className="bg-indigo-100 text-[#4F46E5] rounded-full p-1.5 shrink-0">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-base text-slate-700 font-medium leading-tight">Sem análise de perfil do condutor. Não importamos com quem vai dirigir e nem onde mora, o valor não muda</span>
</div>
<div className="bg-white rounded-full py-4 px-6 shadow-sm border border-slate-100 flex items-center gap-4 transition-transform hover:-translate-y-1">
<div className="bg-indigo-100 text-[#4F46E5] rounded-full p-1.5 shrink-0">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-base text-slate-700 font-medium leading-tight">Aceitamos carros a partir de 1986</span>
</div>
<div className="bg-white rounded-full py-4 px-6 shadow-sm border border-slate-100 flex items-center gap-4 transition-transform hover:-translate-y-1">
<div className="bg-indigo-100 text-[#4F46E5] rounded-full p-1.5 shrink-0">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-base text-slate-700 font-medium leading-tight">100% FIPE para táxi e carro de app em caso de acidente</span>
</div>
<div className="bg-white rounded-full py-4 px-6 shadow-sm border border-slate-100 flex items-center gap-4 transition-transform hover:-translate-y-1">
<div className="bg-indigo-100 text-[#4F46E5] rounded-full p-1.5 shrink-0">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-base text-slate-700 font-medium leading-tight">Aceitamos carros híbridos e elétricos</span>
</div>
<div className="bg-white rounded-full py-4 px-6 shadow-sm border border-slate-100 flex items-center gap-4 transition-transform hover:-translate-y-1">
<div className="bg-indigo-100 text-[#4F46E5] rounded-full p-1.5 shrink-0">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-base text-slate-700 font-medium leading-tight">Aceitamos carros modificados e de leilão</span>
</div>
</div>
<button className="mt-12 bg-[#4F46E5] text-white px-8 py-3.5 rounded-full font-medium hover:bg-indigo-700 transition-colors inline-flex items-center gap-2 shadow-lg shadow-indigo-500/30">
                        Cotar agora <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="rounded-3xl overflow-hidden relative h-[200px] shadow-lg">
<img alt="Renato Cariani" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
<span className="absolute bottom-5 left-5 text-white font-medium text-sm leading-tight">Renato<br/>Cariani</span>
</div>
<div className="rounded-3xl overflow-hidden relative h-[200px] shadow-lg">
<img alt="Whindersson Nunes" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
<span className="absolute bottom-5 left-5 text-white font-medium text-sm leading-tight">Whindersson<br/>Nunes</span>
</div>
<div className="rounded-3xl overflow-hidden relative h-[200px] shadow-lg">
<img alt="Celso Portiolli" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
<span className="absolute bottom-5 left-5 text-white font-medium text-sm leading-tight">Celso<br/>Portiolli</span>
</div>
<div className="flex items-center justify-center p-6 pl-8">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#4F46E5] leading-tight">
                            O seguro<br/>mais querido<br/>dos<br/>influencers
                        </h3>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-slate-900 overflow-hidden">

<img alt="Pessoa no carro" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity" src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row justify-between items-center gap-16">

<div className="w-full lg:w-1/2">
<p className="text-xs font-semibold tracking-widest text-[#E0E7FF] uppercase mb-4 opacity-80">
                        Um seguro diferente de tudo
                    </p>
<h2 className="text-4xl lg:text-6xl font-semibold tracking-tight text-white mb-10 leading-tight">
                        Ative em minutos
                    </h2>
<button className="bg-[#E0E7FF] text-[#4F46E5] px-8 py-3.5 rounded-full font-medium inline-flex items-center gap-2 hover:bg-white transition-colors">
                        Cotar agora <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-6 justify-start lg:justify-end">
<div className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center min-w-[180px] shadow-2xl">
<div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center text-[#4F46E5] mb-6">
<i className="w-6 h-6" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<span className="text-4xl font-semibold text-slate-800 tracking-tight">27</span>
<span className="text-xs text-slate-500 mt-2 font-medium">estados atendidos no<br/>Brasil</span>
</div>
<div className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center min-w-[180px] shadow-2xl">
<div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center text-purple-500 mb-6">
<i className="w-6 h-6" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<span className="text-4xl font-semibold text-slate-800 tracking-tight">+4.000</span>
<span className="text-xs text-slate-500 mt-2 font-medium">cidades atendidas</span>
</div>
</div>
</div>

<div className="mt-32">
<div className="flex items-center gap-4 w-full mb-8">
<span className="text-white font-bold tracking-widest text-lg">LO</span>
<div className="h-[1px] flex-grow bg-gradient-to-r from-cyan-400 to-purple-500 opacity-60"></div>
<span className="text-white font-bold tracking-widest text-lg">OVI</span>
</div>
<div className="flex flex-col md:flex-row items-center gap-8 text-white/90">
<div className="flex items-center gap-8">
<span className="font-semibold text-2xl tracking-tighter">Uber</span>
<span className="font-semibold text-xl tracking-wide">GNV</span>
<div className="bg-white text-slate-900 rounded p-1 px-2 font-bold text-lg leading-none">99 <span className="text-[10px] block text-center mt-0.5">TÁXI</span></div>
<span className="font-semibold text-xl tracking-widest uppercase">Táxi</span>
</div>
<span className="text-lg font-medium opacity-80 md:ml-4">Aceitamos Uber, Táxi e carros com GNV</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#4F46E5] relative overflow-hidden">

<div className="absolute inset-0 z-0 opacity-20 pointer-events-none hidden lg:block">
<svg className="w-full h-full object-cover" fill="none" viewbox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg">
<path d="M-100 200 C 300 200, 400 350, 700 350 C 1000 350, 1100 150, 1500 150" fill="none" stroke="#00F0FF" strokeLinecap="round" strokeWidth="2"></path>
<circle cx="700" cy="350" fill="#00F0FF" r="4"></circle>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-3 gap-16 items-center">

<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-8 leading-[1.15]">
                        Já nascemos<br/>digitais!
                    </h2>
<p className="text-indigo-100 text-lg mb-12 font-medium leading-relaxed">
                        Fazemos parte da geração de empresas de tecnologia, como a Netflix, Uber, e Airbnb, que oferecem mais benefícios por preços menores.
                    </p>
<div className="flex gap-8 items-center text-white/60">
<i className="w-10 h-10" data-lucide="credit-card" strokeWidth="1.5"></i>
<i className="w-10 h-10" data-lucide="cloud" strokeWidth="1.5"></i>
<i className="w-10 h-10" data-lucide="database" strokeWidth="1.5"></i>
</div>
</div>

<div className="flex justify-center relative">

<div className="w-[280px] h-[580px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl relative border-4 border-slate-800 z-10">
<div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">

<div className="bg-indigo-50 h-full w-full p-6 flex flex-col">
<div className="w-20 h-6 bg-slate-200 rounded-full mb-6"></div>
<div className="w-full h-32 bg-blue-500 rounded-2xl mb-4"></div>
<div className="w-3/4 h-4 bg-slate-200 rounded mb-2"></div>
<div className="w-1/2 h-4 bg-slate-200 rounded mb-8"></div>
<div className="grid grid-cols-2 gap-4">
<div className="h-24 bg-white rounded-xl shadow-sm border border-slate-100"></div>
<div className="h-24 bg-white rounded-xl shadow-sm border border-slate-100"></div>
<div className="h-24 bg-white rounded-xl shadow-sm border border-slate-100"></div>
<div className="h-24 bg-white rounded-xl shadow-sm border border-slate-100"></div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-10 w-48 h-48 bg-slate-900 rounded-full opacity-50 blur-xl -z-10"></div>
</div>

<div className="flex justify-center lg:justify-end">
<div className="bg-white rounded-[2rem] p-10 max-w-sm text-center shadow-2xl w-full">
<div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center text-purple-500 mx-auto mb-6">
<i className="w-6 h-6" data-lucide="headphones" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-800 mb-3 leading-tight">
                            Faça sua cotação<br/>agora mesmo!
                        </h3>
<p className="text-sm text-slate-500 mb-8 font-medium">Contrate em 5 minutos!</p>
<button className="w-full bg-[#4F46E5] text-white px-6 py-3.5 rounded-full font-medium hover:bg-indigo-700 transition-colors">
                            Cotar agora <i className="w-4 h-4 inline ml-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div>
<p className="text-sm font-semibold text-[#4F46E5] mb-3 uppercase tracking-wider">Loovi Seguro Auto</p>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-800 mb-12">
                        Perguntas frequentes
                    </h2>
<div className="flex flex-col border-t border-slate-200">
<div className="py-6 border-b border-slate-200 flex justify-between items-center cursor-pointer group">
<span className="text-lg font-medium text-slate-700 group-hover:text-[#4F46E5] transition-colors pr-8">Quem somos?</span>
<i className="w-5 h-5 text-slate-400 shrink-0 group-hover:text-[#4F46E5] transition-colors" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="py-6 border-b border-slate-200 flex justify-between items-center cursor-pointer group">
<span className="text-lg font-medium text-slate-700 group-hover:text-[#4F46E5] transition-colors pr-8">Quais tipos de veículos a Loovi aceita?</span>
<i className="w-5 h-5 text-slate-400 shrink-0 group-hover:text-[#4F46E5] transition-colors" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="py-6 border-b border-slate-200 flex justify-between items-center cursor-pointer group">
<span className="text-lg font-medium text-slate-700 group-hover:text-[#4F46E5] transition-colors pr-8">A Loovi está em todo o Brasil?</span>
<i className="w-5 h-5 text-slate-400 shrink-0 group-hover:text-[#4F46E5] transition-colors" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="py-6 border-b border-slate-200 flex justify-between items-center cursor-pointer group">
<span className="text-lg font-medium text-slate-700 group-hover:text-[#4F46E5] transition-colors pr-8">Seguro mesmo ou proteção veicular?</span>
<i className="w-5 h-5 text-slate-400 shrink-0 group-hover:text-[#4F46E5] transition-colors" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="py-6 border-b border-slate-200 flex justify-between items-center cursor-pointer group">
<span className="text-lg font-medium text-slate-700 group-hover:text-[#4F46E5] transition-colors pr-8">A Loovi está registrada na SUSEP?</span>
<i className="w-5 h-5 text-slate-400 shrink-0 group-hover:text-[#4F46E5] transition-colors" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="py-6 border-b border-slate-200 flex justify-between items-center cursor-pointer group">
<span className="text-lg font-medium text-slate-700 group-hover:text-[#4F46E5] transition-colors pr-8">Qual o valor da franquia?</span>
<i className="w-5 h-5 text-slate-400 shrink-0 group-hover:text-[#4F46E5] transition-colors" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="py-6 border-b border-slate-200 flex justify-between items-center cursor-pointer group">
<span className="text-lg font-medium text-slate-700 group-hover:text-[#4F46E5] transition-colors pr-8">Quero falar com um executivo de vendas.</span>
<i className="w-5 h-5 text-slate-400 shrink-0 group-hover:text-[#4F46E5] transition-colors" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
<button className="mt-12 bg-[#4F46E5] text-white px-8 py-3.5 rounded-full font-medium hover:bg-indigo-700 transition-colors inline-flex items-center gap-2">
                        Cotar agora <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="relative flex justify-center h-[600px] mt-10 lg:mt-0">
<div className="w-full max-w-[400px] bg-gradient-to-tr from-[#D8B4FE] to-[#C4B5FD] rounded-[3rem] overflow-hidden relative shadow-2xl">

<img alt="Suporte" className="absolute bottom-0 w-full h-[85%] object-cover object-top mix-blend-luminosity opacity-80" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{maskImage: 'linear-gradient(to top, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)'}}/>

<div className="absolute top-16 right-8 bg-white p-4 rounded-full shadow-lg text-[#4F46E5] animate-bounce">
<i className="w-6 h-6" data-lucide="headphones" strokeWidth="1.5"></i>
</div>
<div className="absolute top-1/3 left-6 bg-[#4F46E5] text-white p-5 rounded-full shadow-xl">
<i className="w-6 h-6" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div className="absolute bottom-24 right-16 bg-[#D8B4FE] text-white p-3 rounded-full shadow-md">
<i className="w-5 h-5" data-lucide="message-square" strokeWidth="1.5"></i>
</div>

<div className="absolute top-8 left-1/4 bg-slate-900 text-white p-3 rounded-full shadow-md">
<i className="w-5 h-5" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#18181B] text-slate-400 py-20 text-sm">
<div className="max-w-7xl mx-auto px-6 lg:px-8">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-1">
<div className="flex items-center gap-1 font-semibold text-white tracking-widest uppercase text-xl mb-6">
                        LOOVI <span className="text-[#4F46E5]"></span>
</div>
</div>

<div className="lg:col-span-1">
<h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Canais de Atendimento</h4>
<ul className="space-y-4">
<li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
<i className="w-4 h-4 shrink-0" data-lucide="message-circle"></i>
<span>Atendimento pelo WhatsApp</span>
</li>
<li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
<i className="w-4 h-4 shrink-0" data-lucide="phone"></i>
<span>0800 948 4888 (Assistência 24h)</span>
</li>
<li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
<i className="w-4 h-4 shrink-0" data-lucide="phone"></i>
<span>0800 607 2007 (Furto ou Roubo)</span>
</li>
<li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
<i className="w-4 h-4 shrink-0" data-lucide="phone"></i>
<span>0800 100 4888 (Ouvidoria)</span>
</li>
<li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
<i className="w-4 h-4 shrink-0" data-lucide="phone-call"></i>
<span>4000 1782 (Central de Atendimento)</span>
</li>
</ul>
<div className="mt-8 pt-6 border-t border-slate-800">
<div className="flex items-start gap-3">
<i className="w-4 h-4 shrink-0 mt-0.5 text-slate-500" data-lucide="clock"></i>
<div>
<p className="text-xs text-white mb-1 font-medium">Horário de funcionamento <span className="text-slate-500 font-normal">Central de Atendimento</span></p>
<p className="text-xs">Segunda a sexta: 8h às 18h<br/>Sábado: 8h às 12h</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1 lg:pl-10">
<h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Links Úteis</h4>
<ul className="space-y-4">
<li><a className="hover:text-white transition-colors" href="#">Trabalhe Conosco</a></li>
<li><a className="hover:text-white transition-colors" href="#">Perguntas Frequentes</a></li>
<li><a className="hover:text-white transition-colors" href="#">Política de Privacidade</a></li>
<li>
<p className="text-xs mt-4 leading-relaxed">
<a className="text-[#4F46E5] hover:underline" href="#">Clique aqui</a> para consultar as condições gerais do seguro garantido pela LTI Seguros S.A.
                            </p>
</li>
</ul>
</div>

<div className="lg:col-span-1 flex justify-start lg:justify-end items-start pt-8 lg:pt-0">
<div className="flex gap-5">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="youtube" strokeWidth="1.5"></i>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="border-t border-slate-800 pt-8 flex flex-col items-center text-[10px] leading-relaxed text-slate-500 text-center md:text-left">
<p>
                    A LTI Seguros S.A., CNPJ 47.009.254/0001-83, é participante da 2ª edição do Sandbox Regulatório da SUSEP, tendo seu plano de seguros registrado sob o nº <a className="underline hover:text-slate-300" href="#">15414.640023/2022-55</a>. O Sandbox Regulatório é um ambiente experimental da SUSEP que permite testar novas soluções para o mercado de seguros sob supervisão regulatória, incentivando inovação com segurança e conformidade. Os produtos e serviços são realizados mediante autorização em caráter experimental, tendo sido dispensados de determinados requisitos regulatórios da SUSEP. A CW Technology Ltda., inscrita no CNPJ sob o nº 34.504.287/0001-08, com sede na Rua Queluzita, nº 34, Sala 1801, Bloco 02, Bairro Dom Joaquim, Município de Belo Horizonte, Estado de Minas Gerais, CEP 31170-611, atua como corretora de seguros independente (registro <a className="underline hover:text-slate-300" href="#">212111162</a>) e parceira comercial da LTI Seguros S.A., sendo responsável pela comercialização dos seguros sob este regime.
                </p>
</div>
</div>
</footer>


    </>
  );
}
