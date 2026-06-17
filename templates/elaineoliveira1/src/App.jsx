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
      

<div className="text-xs font-medium text-white tracking-wide text-center bg-stone-500 py-2">
<span className="opacity-90">Não se abandone, cultive sua autoestima!
</span>
<a className="underline hover:text-white transition-colors duration-300 text-[#97E45D] ml-2" href="#book">Casos reais →</a>
</div>

<nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/80 border-b border-gray-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="flex text-black bg-[#97E45D] w-8 h-8 rounded-lg items-center justify-center">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="solar" data-solar="dna-linear" height="20" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="m11.848 12.152l.198.069c3.26 1.122 7.184.049 9.954-2.721m-10.152 2.652l-.558-.191C8.248 10.913 4.585 11.915 2 14.5m9.848-2.348l-.069-.198C10.657 8.694 11.73 4.77 14.5 2m-2.652 10.152l.191.558c1.048 3.041.046 6.705-2.539 9.29M6.765 11.843l5.078 5.079m.001-10.157l5.078 5.078M4 13l3.5 3.5m12.278-5.61l-3.5-3.5M9.305 18.191l1.587 1.587m3.695-14.191L13 4" fill="none" stroke="#000000" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</div>
<a className="leading-none text-lg font-bold text-gray-900 tracking-tight" href="#">Dra. Elaine Oliveira | Tricologista</a>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="hover:text-black transition-colors text-sm font-medium text-gray-600" href="/#tratamentos">Tratamentos</a>
<a className="hover:text-black transition-colors text-sm font-medium text-gray-600" href="/#equipe">Equipe</a>
<a className="hover:text-black transition-colors text-sm font-medium text-gray-600" href="/#sobrenos">Sobre nós</a>
<a className="hover:text-black transition-colors text-sm font-medium text-gray-600" href="/#location">Localização</a>
<a className="group relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-black transition-all duration-200 bg-[#97E45D] border border-transparent rounded-full hover:bg-[#86cf50] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#97E45D]" href="#contact">
<span className="">Agendamento</span>
<iconify-icon className="ml-1 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-gray-600 hover:text-black focus:outline-none p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="lg:pt-24 lg:pb-28 overflow-hidden bg-white pt-16 pb-20 relative">

<div className="-translate-y-12 bg-[#97E45D]/10 opacity-50 w-96 h-96 rounded-full absolute top-0 right-0 blur-3xl translate-x-12"></div>
<div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
<div className="sm:px-6 lg:px-8 z-10 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="flex flex-col lg:flex-row lg:gap-20 gap-x-12 gap-y-12 items-center">
<div className="lg:w-1/2 lg:text-center text-center w-full">
<div className="inline-flex text-xs font-medium text-gray-600 text-center bg-gray-100 border-gray-200 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 gap-x-12 gap-y-2 items-end">Pioneira no tratamento de queda capilar em Mogi das Cruzes desde 2003</div>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-bold text-gray-900 tracking-tight text-center mb-6">
            Tratamentos para queda capilar <span className="relative whitespace-nowrap">
<span className="z-10 relative">"Tricologia"</span>
<span className="absolute bottom-1 left-0 w-full h-3 bg-[#97E45D]/40 -z-10 rotate-1"></span>
</span>
</h1>
<p className="lg:mx-0 leading-relaxed text-lg text-gray-600 text-center max-w-xl mr-auto mb-8 ml-auto">Equipamentos e ativos de última geração: tecnologia, medicamentos e conhecimento científico aplicados com base no que há de mais moderno e inovador atualmente em tratamentos na queda de cabelo e patologias na área da tricologia</p>
<div className="flex flex-col sm:flex-row gap-4 lg:justify-start gap-x-4 gap-y-4 items-center justify-center">
<a className="sm:w-auto inline-flex items-center justify-center transition-all duration-200 hover:shadow-lg hover:shadow-[#97E45D]/30 hover:-translate-y-0.5 text-base font-semibold text-black bg-[#97E45D] w-full border-transparent border rounded-lg pt-3 pr-6 pb-3 pl-6" href="#contact">Faça
                seu agendamento</a>
<a className="sm:w-auto inline-flex items-center justify-center transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 text-base font-semibold text-gray-900 bg-white w-full border-gray-200 border rounded-lg pt-3 pr-6 pb-3 pl-6" href="/tel:+5511999417293">11
                99941 7293</a>
</div>

<div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap justify-center lg:justify-start gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<iconify-icon className="" icon="solar:shield-check-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Eficiência</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="" icon="solar:heart-angle-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Ambientes confortáveis</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Diagnósticos precisos</span>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 relative group">

<div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
<img alt="Modern Dental Clinic Interior" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/584e5744-a029-40ee-a108-aed97b530ff8_1600w.jpg"/>
</div>

<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 max-w-xs">
<div className="flex items-start gap-3">
<div className="p-2 bg-[#97E45D]/20 rounded-lg text-green-700">
<iconify-icon className="" height="24" icon="solar:smile-circle-linear" style={{color: 'rgb(21, 128, 61)'}} width="24"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-bold text-gray-900">Problemas com calvície? Desânimo?</p>
<p className="text-xs text-gray-500 mt-1">Tenho a solução</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-gray-50 border-gray-200 pt-20 pb-20" id="services">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">Cuidados capilares de alto nível: diagnóstico e tratamentos personalizados.</h2>
<p className="text-gray-600">Tratamento especializado para queda de cabelo e patologias do couro cabeludo com diagnóstico clínico preciso, protocolos personalizados e tecnologias modernas para estimular o crescimento e fortalecer os fios com foco em resultados reais. Venha nos conhecer!</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="group hover:shadow-xl hover:shadow-gray-200/50 hover:border-[#97E45D] transition-all duration-300 bg-white border-gray-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#97E45D] transition-colors duration-300">
<iconify-icon className="text-gray-900" height="24" icon="solar:syringe-outline" style={{color: 'rgb(17, 24, 39)'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-3">Injetáveis</h3>
<p className="leading-relaxed text-sm text-gray-600 text-justify mb-4">O que são injetáveis?                                              São tratamentos em que se utilizam protocolos injetáveis personalizados que entregam ativos diretamente no couro cabeludo, potencializando a nutrição dos folículos e auxiliando no controle da queda, no fortalecimento dos fios e na recuperação de áreas com queda capilar.</p>
<a className="inline-flex items-center hover:text-[#7ab848] text-sm font-medium text-gray-900" href="#">Veja resultados</a>
</div>

<div className="group hover:shadow-xl hover:shadow-gray-200/50 hover:border-[#97E45D] transition-all duration-300 bg-white border-gray-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#97E45D] transition-colors duration-300">
<iconify-icon className="text-gray-900" icon="solar:star-shine-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-3">Mesoterapia &amp; MMP</h3>
<p className="leading-relaxed text-sm text-gray-600 text-justify mb-4">O que são Mesoterapia &amp; MMP? São tratamentos de microinfusão de ativos (Mesoterapia e Microagulhamento com Drug Delivery – MMP) que estimulam a circulação local, promovem a regeneração tecidual e aumentam a absorção de nutrientes essenciais para o tratamento da queda capilar e crescimento saudável dos cabelos.</p>
<a className="inline-flex items-center hover:text-[#7ab848] text-sm font-medium text-gray-900" href="#">Veja resultados</a>
</div>

<div className="group hover:shadow-xl hover:shadow-gray-200/50 hover:border-[#97E45D] transition-all duration-300 bg-white border-gray-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#97E45D] transition-colors duration-300">
<iconify-icon className="text-gray-900" height="24" icon="solar:lightbulb-minimalistic-outline" style={{color: 'rgb(17, 24, 39)'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-3">Fototerapia: LED &amp; Laser</h3><p className="leading-relaxed text-sm text-gray-600 text-justify mb-4">O que são Fototerapia: LED &amp; Laser? São tratamentos com luz de baixa intensidade (LED e Laser) que ativa o metabolismo celular, melhorando a oxigenação do couro cabeludo e estimulando os folículos, contribuindo para redução da queda e aumento da densidade capilar.</p>
<a className="inline-flex items-center hover:text-[#7ab848] text-sm font-medium text-gray-900" href="#">Veja resultados</a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:border-[#97E45D] transition-all duration-300">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#97E45D] transition-colors duration-300">
<iconify-icon className="text-gray-900" height="24" icon="solar:bolt-linear" style={{color: 'rgb(17, 24, 39)'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-3">Eletroterapia</h3>
<p className="leading-relaxed text-sm text-gray-600 text-justify mb-4">O que é Eletroterapia? São tratamentos com aplicações de correntes terapêuticas que auxiliam na revitalização do couro cabeludo, estimulam a circulação sanguínea e favorecem a absorção de ativos, sendo indicada no tratamento de diversas disfunções capilares.
</p>
<a className="inline-flex items-center hover:text-[#7ab848] text-sm font-medium text-gray-900" href="#">Veja resultados</a>
</div>

<div className="group hover:shadow-xl hover:shadow-gray-200/50 hover:border-[#97E45D] transition-all duration-300 bg-white border-gray-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#97E45D] transition-colors duration-300">
<iconify-icon className="text-gray-900" height="24" icon="solar:sort-vertical-linear" style={{color: 'rgb(17, 24, 39)'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-3">Vacuoterapia</h3>
<p className="leading-relaxed text-sm text-gray-600 text-justify mb-4">O que é Vacuoterapia? É um tratamento que utiliza sucção controlada para estimular a circulação local e promover desintoxicação do couro cabeludo, auxiliando na oxigenação dos tecidos e no fortalecimento dos fios tratando queda capilar.
</p>
<a className="inline-flex items-center hover:text-[#7ab848] text-sm font-medium text-gray-900" href="#">Veja resultados</a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:border-[#97E45D] transition-all duration-300">
<div className="flex group-hover:bg-[#97E45D] transition-colors duration-300 bg-gray-50 w-12 h-12 rounded-xl mb-6 items-center justify-center">
<iconify-icon className="text-gray-900" icon="solar:screws-linear" width="24"></iconify-icon>
<iconify-icon className="text-gray-900" height="24" icon="solar:water-outline" style={{color: 'rgb(17, 24, 39)'}} width="24"></iconify-icon></div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-3">Ozônioterapia (Vapor)</h3>
<p className="leading-relaxed text-sm text-gray-600 text-justify mb-4">O que é Ozonioterapia? É um tratamento com vapor ozonizado que possui ação bactericida, fungicida e anti-inflamatória, ideal para tratar patologia e equilibrar o couro cabeludo, criando um ambiente saudável para a saúde e crescimento capilar.</p>
<a className="inline-flex items-center hover:text-[#7ab848] text-sm font-medium text-gray-900" href="#">Veja resultados</a>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-gray-600 pt-20 pb-20 relative" id="membership">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#97E45D] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row gap-x-12 gap-y-12 items-center justify-between">
<div className="lg:w-1/2">
<div className="inline-block text-base font-semibold text-[#97E45D] tracking-wide bg-[#97E45D]/10 border-[#97E45D]/30 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3">PREOCUPADO(A) COM VALORES?</div>
<h2 className="sm:text-4xl text-3xl font-bold text-center mb-6">PARCELAMOS EM ATÉ  10X O PACOTE DE TRATAMENTO!</h2>
<p className="text-lg text-gray-400 text-justify max-w-md mb-8">Obtenha excelentes resultados e um grande desconto com nosso pacote de tratamento. São 10 sessões + um brinde incrível de uma sessão extra gratuita somando 11 sessões de tratamento ao fechar o pacote de 10 sessões agendando pelo link a seguir:</p>
<ul className="space-y-4 mb-8">
<li className="flex gap-3 gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-[#97E45D]" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-gray-300">Atendimento com especialista</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#97E45D]" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-gray-300">Entrega de resultados</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#97E45D]" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-gray-300">Ambientes confortáveis e agradáveis</span>
</li>
</ul>
<a className="inline-flex items-center justify-center transition-all duration-200 hover:bg-white hover:text-black text-base font-semibold text-black bg-[#97E45D] rounded-lg pt-3 pr-6 pb-3 pl-6" href="#">Confira!</a>
</div>
<div className="lg:w-5/12">
<div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
<div className="-top-4 -right-4 text-sm font-bold text-black bg-[#97E45D] rounded-full pt-1 pr-3 pb-1 pl-3 absolute">PACOTE COM 10 SESSÕES</div>
<h3 className="text-4xl font-semibold mb-2">Ganhe uma sessão</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-2xl font-bold text-white">Equivale a 10% a mais de tratamento</span>
<span className="text-gray-500">/ month</span>
</div>
<div className="h-px w-full bg-white/10 mb-6"></div>
<p className="text-sm text-gray-400 mb-6">Perfeito para quem quer economizar e ampliar resultados</p>
<button className="hover:bg-white hover:text-black transition-all duration-200 text-sm font-medium w-full border-white/20 border rounded-lg pt-2.5 pb-2.5">Quero agendar!</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-20 pb-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">
<div className="relative">
<div className="grid grid-cols-2 relative gap-x-4 gap-y-4">
<img alt="Happy Patient" className="w-full h-64 object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/87c30ad0-1d04-48bf-b4f1-eb8720042d59_800w.jpg"/>
<img alt="Dentist at work" className="w-full h-64 object-cover rounded-2xl relative bottom-8 translate-y-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c98ecb99-18f2-4c02-9c91-598260ab34d3_800w.jpg"/>
</div>
</div>
<div className="">
<iconify-icon className="text-[#97E45D] mb-6" icon="solar:quote-up-linear" width="48"></iconify-icon>
<h3 className="text-2xl font-bold text-gray-900 tracking-tight text-justify mb-6">"Fui até Elaine com muitas falas e cabelo muito ralo, graça a ela estou amando meu cabelo ,minha autoestima voltou ,resultado veio super rápido ,dinheiro mais bem gasto da minha vida 🙏🏼"</h3>
<div className="flex items-center gap-4">
<div className="">
<p className="font-semibold text-gray-900">Andreza Alves</p>
<p className="text-sm text-gray-500">Paciente desde 2025</p>
</div>
<div className="h-8 w-px bg-gray-200"></div>
<div className="flex text-[#97E45D]">
<iconify-icon className="" height="18" icon="solar:star-bold" style={{color: 'rgb(253, 224, 71)'}} width="18"></iconify-icon>
<iconify-icon className="" height="18" icon="solar:star-bold" style={{color: 'rgb(250, 204, 21)'}} width="18"></iconify-icon>
<iconify-icon className="" height="18" icon="solar:star-bold" style={{color: 'rgb(250, 204, 21)'}} width="18"></iconify-icon>
<iconify-icon className="" height="18" icon="solar:star-bold" style={{color: 'rgb(250, 204, 21)'}} width="18"></iconify-icon>
<iconify-icon className="" height="18" icon="solar:star-bold" style={{color: 'rgb(250, 204, 21)'}} width="18"></iconify-icon>
</div>
</div>
<div className="mt-8">
<a className="hover:text-black transition-colors flex items-center gap-1 text-sm font-semibold text-blue-900" href="#">Leia mais avaliações no Google</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 pt-20 pb-20" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="p-8 lg:p-12">
<h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Entre em contato</h2>
<p className="text-gray-600 mb-8">Preencha o formulário abaixo ou ligue para agendar sua consulta.</p>
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="">
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">Nome completo</label>
<input className="block w-full rounded-lg border-gray-300 bg-gray-50 focus:border-[#97E45D] focus:ring-[#97E45D] sm:text-sm py-3 px-4 outline-none transition-all" id="name" placeholder="Jane Doe" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">Telefone</label>
<input className="block w-full rounded-lg border-gray-300 bg-gray-50 focus:border-[#97E45D] focus:ring-[#97E45D] sm:text-sm py-3 px-4 outline-none transition-all" id="phone" placeholder="07700 900000" type="tel"/>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Endereço de e-mail</label>
<input className="block w-full rounded-lg border-gray-300 bg-gray-50 focus:border-[#97E45D] focus:ring-[#97E45D] sm:text-sm py-3 px-4 outline-none transition-all" id="email" placeholder="jane@example.com" type="email"/>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-700 mb-3">Serviços de interesse</label>
<div className="flex flex-wrap gap-4 gap-x-4 gap-y-4">
<label className="inline-flex items-center cursor-pointer">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-sm text-gray-600 ml-2">Queda capilar</span>
</label>
<label className="inline-flex items-center cursor-pointer">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-sm text-gray-600 ml-2">Patologia do couro cabeludo</span>
</label>
<label className="inline-flex items-center cursor-pointer">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-sm text-gray-600 ml-2">Emergência</span>
</label>
<label className="inline-flex items-center cursor-pointer">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-sm text-gray-600 ml-2">Outros</span>
</label>
</div>
</div>
<button className="inline-flex transition-all duration-200 hover:shadow-lg hover:brightness-105 text-base font-semibold text-black bg-[#97E45D] w-full rounded-lg pt-3 pr-6 pb-3 pl-6 items-center justify-center" type="submit">Enviar Messagem</button>
</form>
</div>
<div className="bg-gray-100 relative min-h-[400px]">

<div className="absolute inset-0 bg-gray-300">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2346.777934448532!2d-1.5435986841366914!3d53.99166998011933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487953ea6a4225d3%3A0x6b8f3e0988012678!2s12%20Cambridge%20Cres%2C%20Harrogate%20HG1%201PE%2C%20UK!5e0!3m2!1sen!2suk!4v1677685628532!5m2!1sen!2suk" style={{border: '0', filter: 'grayscale(100%)'}} width="100%"></iframe>
</div>
<div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
<h4 className="font-bold text-gray-900 mb-2">Localização</h4>
<div className="flex items-start gap-3 mb-3">
<iconify-icon className="text-gray-500 mt-1" icon="solar:map-point-linear" width="18"></iconify-icon>
<p className="text-sm text-gray-600">R. Cap. Francisco de Almeida, 32 - Salas 01 e 02 - Braz Cubas, Mogi das Cruzes - SP, 08740-300</p>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-500" icon="solar:phone-linear" width="18"></iconify-icon>
<a className="hover:text-[#7ab848] text-sm font-medium text-gray-900" href="/tel:+5511999417293">11 99941 7293</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="text-gray-400 bg-[#0a0a0a] border-white/10 border-t pt-12 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex gap-2 mb-4 items-center">
<div className="flex text-black bg-[#97E45D] w-6 h-6 rounded items-center justify-center">
<svg className="w-[14px] h-[14px]" data-icon-set="solar" data-solar="dna-outline" height="14" style={{color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M15.03 1.47a.75.75 0 0 1 0 1.06q-.624.626-1.12 1.32l1.207 1.207a.75.75 0 0 1-1.06 1.06l-.948-.948q-.316.622-.535 1.266l4.879 4.878a1 1 0 0 1 .096.118a10 10 0 0 0 1.207-.502L15.748 7.92a.75.75 0 1 1 1.06-1.06l3.276 3.275q.73-.512 1.386-1.166a.75.75 0 1 1 1.06 1.06c-2.622 2.623-6.264 3.854-9.556 3.213c.75 3.175-.4 6.744-2.944 9.287a.75.75 0 1 1-1.06-1.06a10 10 0 0 0 1.158-1.395l-1.354-1.353a.75.75 0 1 1 1.061-1.06l1.063 1.062q.279-.606.463-1.228l-.048-.044L6.5 12.64q-.66.195-1.302.499l2.831 2.83a.75.75 0 0 1-1.06 1.062l-3.112-3.113q-.7.488-1.328 1.112a.75.75 0 0 1-1.06-1.06c2.543-2.544 6.112-3.693 9.287-2.944c-.64-3.292.59-6.934 3.213-9.556a.75.75 0 0 1 1.06 0m.82 10.362l-3.68-3.682c-.159 1.17-.073 2.334.271 3.412c1.078.344 2.242.43 3.412.271m-4.52 1.122c.299.867.413 1.8.353 2.747l-3.384-3.384c.947-.06 1.88.054 2.747.353l.212.072z" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
<span className="font-bold text-white tracking-tight">Dra. Elaine Oliveira | Tricologista e Biomédica Esteta</span>
</div>
<p className="leading-relaxed text-sm mb-6">"O hospital da saúde e tratamento dos seus cabelos"</p>
</div>
<div className="">
<h4 className="font-semibold text-white mb-4">Links rápidos</h4>
<ul className="space-y-2 text-sm">
<li className=""><a className="hover:text-[#97E45D] transition-colors" href="#">Home</a></li>
<li className=""><a className="hover:text-[#97E45D] transition-colors" href="#">Sobre nós</a></li>
<li className=""><a className="hover:text-[#97E45D] transition-colors" href="#">Localização</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold text-white mb-4">Serviços</h4>
<ul className="space-y-2 text-sm">
<li className=""><a className="hover:text-[#97E45D] transition-colors" href="#">Tratamento de queda capilar</a></li>
<li className=""><a className="hover:text-[#97E45D] transition-colors" href="#">Tratamento de patologias</a></li>
<li className=""><a className="hover:text-[#97E45D] transition-colors" href="#">Tratamento pós transplante</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold text-white mb-4">Contato direto</h4>
<div className="flex gap-4 mb-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="24"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="24"></iconify-icon>
</a>
</div>
<p className="text-xs">Cabelo caindo? Ligue imediatamente.<br/> <span className="font-medium text-white">11 99941 7293</span></p>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p className="">© 2026 Dra Elaine Oliveira Clinic. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Política de Privacidade</a>
<a className="hover:text-white transition-colors" href="#">Termos de Serviço</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
