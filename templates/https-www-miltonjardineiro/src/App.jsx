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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-stone-200 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse" href="#">
<span className="self-center text-lg font-medium tracking-tight text-emerald-950">MILTON JARDINEIRO<span className="text-emerald-600">.</span></span>
</a>
<div className="flex items-center md:order-2 space-x-3 md:space-x-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-white bg-emerald-700 hover:bg-emerald-800 px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-emerald-200/50" href="https://wa.me/5517992738151" target="_blank">
<iconify-icon icon="solar:chat-round-line" width="18"></iconify-icon>
                    Orçamento WhatsApp
                </a>
<button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-stone-500 rounded-lg md:hidden hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-200" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
<li className=""><a aria-current="page" className="block py-2 px-3 text-emerald-900 bg-emerald-50 md:bg-transparent md:text-emerald-700 md:p-0 rounded" href="#">Início</a></li>
<li><a className="block py-2 px-3 text-stone-600 hover:text-emerald-700 md:p-0 transition-colors" href="#services">Serviços</a></li>
<li><a className="block py-2 px-3 text-stone-600 hover:text-emerald-700 md:p-0 transition-colors" href="#about">Sobre</a></li>
<li><a className="block py-2 px-3 text-stone-600 hover:text-emerald-700 md:p-0 transition-colors" href="#contact">Contato</a></li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Atendendo São José do Rio Preto e Região
                    </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tighter text-emerald-950 leading-[1.1]">
                        Cuidamos do seu <br/>
<span className="text-emerald-600/90">espaço verde.</span>
</h1>
<p className="text-lg text-stone-500 max-w-lg leading-relaxed">
                        Comprometimento com a perfeição. Poda de árvores, limpeza de terrenos e manutenção completa de jardins residenciais e comerciais.
                    </p>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-100 transition-all shadow-sm shadow-emerald-200" href="https://wa.me/5517992738151" target="_blank">
                            Falar no WhatsApp
                        </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-stone-700 bg-white border border-stone-200 rounded-lg hover:bg-stone-50 hover:border-stone-300 focus:ring-4 focus:ring-stone-100 transition-all" href="#services">
                            Nossos Serviços
                        </a>
</div>
</div>

<div className="relative lg:h-[600px] w-full bg-stone-100 rounded-3xl overflow-hidden shadow-2xl shadow-stone-200/50">

<img alt="Jardineiro profissional trabalhando" className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm">
<div className="flex items-center gap-3">
<div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-emerald-950 uppercase tracking-wider">Qualidade Garantida</p>
<p className="text-xs text-stone-500">Desde 2000 transformando ambientes.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-20 pb-20" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-4 mb-12 gap-x-4 gap-y-4 items-end justify-between">
<div className="">
<h2 className="text-3xl font-medium tracking-tight text-emerald-950 mb-3">Nossos Serviços</h2>
<p className="text-stone-500 text-sm max-w-md">Soluções completas para manter seu imóvel e jardim impecáveis.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group relative flex flex-col bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300">
<div className="relative aspect-[4/5] bg-stone-50 rounded-t-2xl overflow-hidden">

<img alt="Manutenção de Jardim" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c04e7df1-6c48-4aac-b57e-6f48c28841dc_800w.jpg"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-emerald-900 text-[10px] font-semibold px-2 py-1 rounded-md uppercase tracking-wider">Residencial</div>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="text-lg font-medium text-stone-900">Manutenção de Jardins</h3>
<p className="text-xs text-stone-500 mb-4 mt-1">Corte de grama, adubação e controle de pragas para manter seu jardim saudável.</p>
</div>
</div>

<div className="group relative flex flex-col bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300">
<div className="relative aspect-[4/5] bg-stone-50 rounded-t-2xl overflow-hidden">

<img alt="Poda de Árvores" className="group-hover:scale-105 transition-transform duration-500 bg-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/279ddfc2-4d51-4c6f-8fdd-2de0f020df6d_800w.png"/>
</div>
<div className="flex flex-col flex-grow pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-medium text-stone-900">Poda de Árvores</h3>
<p className="text-xs text-stone-500 mb-4 mt-1">Poda estética, de limpeza e corte de coqueiros com remoção total de resíduos.</p>
</div>
</div>

<div className="group relative flex flex-col bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300">
<div className="relative aspect-[4/5] bg-stone-50 rounded-t-2xl overflow-hidden">

<img alt="Limpeza de Terreno" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/181d0da0-57a9-4d2e-94d9-40773aad939a_800w.png"/>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="text-lg font-medium text-stone-900">Limpeza de Terrenos</h3>
<p className="text-xs text-stone-500 mb-4 mt-1">Roçada de lotes, remoção de mato alto e limpeza para construção ou venda.</p>
</div>
</div>

<div className="group relative flex flex-col bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300">
<div className="relative aspect-[4/5] bg-stone-50 rounded-t-2xl overflow-hidden">

<img alt="Paisagismo" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0bfebf20-2ade-48fc-90d5-54fdbdb58318_800w.png"/>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="text-lg font-medium text-stone-900">Paisagismo</h3>
<p className="text-xs text-stone-500 mb-4 mt-1">Plantio, reformulação de canteiros e criação de ambientes verdes harmoniosos.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-50 border-t border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight text-emerald-950 mb-3">Serviços Complementares</h2>
<p className="text-stone-500 text-sm max-w-md">Cuidados essenciais para a estrutura e higiene do seu imóvel.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group block bg-white rounded-xl p-6 border border-stone-200/60 hover:border-emerald-500/30 hover:shadow-md transition-all">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-emerald-50 rounded-lg text-emerald-700">
<iconify-icon height="24" icon="solar:water-drops-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-bold uppercase tracking-wide text-amber-600 bg-amber-50 px-2 py-1 rounded">Importante</span>
</div>
<h3 className="text-base font-medium text-stone-900 mb-1">Limpeza de Calhas</h3>
<p className="text-xs text-stone-500 line-clamp-3">Evite infiltrações e danos estruturais. Removemos folhas e sujeira acumulada para garantir o fluxo da água.</p>
</div>

<div className="group block bg-white rounded-xl p-6 border border-stone-200/60 hover:border-emerald-500/30 hover:shadow-md transition-all">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-blue-50 rounded-lg text-blue-700">
<iconify-icon height="24" icon="solar:bath-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-bold uppercase tracking-wide text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Saúde</span>
</div>
<h3 className="text-base font-medium text-stone-900 mb-1">Caixa D'água</h3>
<p className="text-xs text-stone-500 line-clamp-3">Higienização completa para garantir a qualidade da água da sua família. Recomendado a cada 6 meses.</p>
</div>

<div className="group block bg-white rounded-xl p-6 border border-stone-200/60 hover:border-emerald-500/30 hover:shadow-md transition-all">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-stone-100 rounded-lg text-stone-700">
<iconify-icon height="24" icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-base font-medium text-stone-900 mb-1">Adubação</h3>
<p className="text-xs text-stone-500 line-clamp-3">Nutrição correta para o solo, garantindo que suas plantas cresçam fortes e vibrantes.</p>
</div>

<div className="group block bg-white rounded-xl p-6 border border-stone-200/60 hover:border-emerald-500/30 hover:shadow-md transition-all">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-orange-50 rounded-lg text-orange-700">
<iconify-icon height="24" icon="solar:scissors-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-base font-medium text-stone-900 mb-1">Corte de Grama</h3>
<p className="text-xs text-stone-500 line-clamp-3">Gramados uniformes e bem cuidados. Utilizamos equipamentos profissionais para um acabamento perfeito.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-emerald-900 text-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">Por que escolher Milton Jardineiro?</h2>
<p className="text-emerald-200/80 max-w-2xl mx-auto text-sm">Profissionalismo e dedicação em cada detalhe do seu projeto.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-emerald-800/50">

<div className="px-6 pt-8 md:pt-0">
<div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-800 text-emerald-300 mb-6">
<iconify-icon height="24" icon="solar:medal-ribbon-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Experiência</h3>
<p className="text-emerald-200/70 text-sm leading-relaxed">
                        Atuando desde 2000, temos o know-how necessário para lidar com qualquer tipo de vegetação e terreno com segurança.
                    </p>
</div>

<div className="px-6 pt-8 md:pt-0">
<div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-800 text-emerald-300 mb-6">
<iconify-icon height="24" icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Agilidade</h3>
<p className="text-emerald-200/70 text-sm leading-relaxed">
                        Atendimento rápido e eficiente. Horário flexível (24h) para emergências ou conveniência do cliente.
                    </p>
</div>

<div className="px-6 pt-8 md:pt-0">
<div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-800 text-emerald-300 mb-6">
<iconify-icon height="24" icon="solar:settings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Equipamento Profissional</h3>
<p className="text-emerald-200/70 text-sm leading-relaxed">
                        Utilizamos ferramentas adequadas e modernas para garantir um serviço limpo, rápido e com acabamento superior.
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<span className="text-lg font-medium tracking-tight text-emerald-900">MILTON JARDINEIRO.</span>
<p className="mt-4 text-xs text-stone-500 leading-relaxed">
                        Rua B, 175 – Estância Santa Clara<br/>
                        São José do Rio Preto – SP<br/>
                        CEP 15051-665
                    </p>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Serviços</h4>
<ul className="space-y-3 text-xs text-stone-500">
<li><a className="hover:text-emerald-700 transition-colors" href="#">Jardinagem</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Poda de Árvores</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Limpeza de Terrenos</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Limpeza de Calhas</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Cidades Atendidas</h4>
<ul className="space-y-3 text-xs text-stone-500">
<li><a className="hover:text-emerald-700 transition-colors" href="#">São José do Rio Preto</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Mirassol</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Bady Bassitt</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Cedral e Ipiguá</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Contato</h4>
<ul className="space-y-3 text-xs text-stone-500">
<li className="flex items-center gap-2">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                            (17) 99273-8151 (WhatsApp)
                        </li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                            (17) 98114-4233
                        </li>
<li className="mt-4">
<a className="bg-emerald-700 text-white px-4 py-2 rounded-md text-xs font-medium hover:bg-emerald-800 transition-colors inline-block" href="https://wa.me/5517992738151">
                                Chamar no WhatsApp
                            </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-400">© 2024 Milton Jardineiro RP. Todos os direitos reservados.</p>
<div className="flex gap-6 text-stone-400">
<a className="hover:text-emerald-700 transition-colors" href="#"><iconify-icon height="18" icon="solar:instagram-linear" width="18"></iconify-icon></a>
<a className="hover:text-emerald-700 transition-colors" href="#"><iconify-icon height="18" icon="solar:facebook-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
