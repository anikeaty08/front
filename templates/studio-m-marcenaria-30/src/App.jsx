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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between h-20">
<div className="flex items-center gap-2">
<iconify-icon className="text-2xl text-slate-900" icon="solar:box-minimalistic-linear"></iconify-icon>
<span className="text-lg font-semibold tracking-tight">Studio M.</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Início</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#diferenciais">Diferenciais</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#projetos">Projetos</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#contato">Contato</a>
</nav>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors" href="#contato">
                Solicitar Orçamento
            </a>
<button className="md:hidden text-slate-900">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>

<section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 sm:px-12 max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6">
<iconify-icon className="text-sm text-slate-500" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wider">Atendimento em Limeira e Região</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                    Marcenaria de <br className="hidden sm:block"/>
<span className="text-slate-500">alto padrão</span> para <br className="hidden sm:block"/>
                    ambientes únicos.
                </h1>
<p className="mt-6 text-lg text-slate-600 font-normal leading-relaxed max-w-lg">
                    Transformamos seu espaço com móveis planejados que unem design sofisticado, materiais premium e execução impecável. Projetos exclusivos feitos sob medida para o seu estilo de vida.
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors" href="#contato">
                        Falar com um Projetista
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors" href="#projetos">
                        Ver Portfólio
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="flex-1 w-full">
<div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 bg-slate-200">
<img alt="Cozinha planejada moderna" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="diferenciais">
<div className="max-w-7xl mx-auto px-6 sm:px-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
<div>
<div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 mb-6">
<iconify-icon className="text-2xl text-slate-900" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Design Exclusivo</h3>
<p className="text-base text-slate-600 leading-relaxed">Cada projeto é pensado do zero, respeitando a arquitetura do ambiente e as necessidades específicas de cada cliente.</p>
</div>
<div>
<div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 mb-6">
<iconify-icon className="text-2xl text-slate-900" icon="solar:diamond-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Materiais Nobres</h3>
<p className="text-base text-slate-600 leading-relaxed">Trabalhamos apenas com MDF de primeira linha, ferragens com amortecimento e acabamentos que garantem durabilidade.</p>
</div>
<div>
<div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 mb-6">
<iconify-icon className="text-2xl text-slate-900" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Compromisso de Prazo</h3>
<p className="text-base text-slate-600 leading-relaxed">Transparência do início ao fim. Entregamos e montamos seus móveis rigorosamente dentro do cronograma estabelecido.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 sm:px-12" id="projetos">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Nossos Projetos</h2>
<p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto">Conheça um pouco do nosso trabalho e inspire-se para a transformação do seu ambiente.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200 cursor-pointer">
<img alt="Cozinha Minimalista" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<div>
<h4 className="text-white text-xl font-medium tracking-tight mb-1">Cozinhas</h4>
<p className="text-slate-300 text-sm">Funcionalidade e beleza</p>
</div>
</div>
</div>
<div className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200 cursor-pointer">
<img alt="Dormitório Planejado" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<div>
<h4 className="text-white text-xl font-medium tracking-tight mb-1">Dormitórios</h4>
<p className="text-slate-300 text-sm">Conforto sob medida</p>
</div>
</div>
</div>
<div className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200 cursor-pointer sm:hidden lg:block">
<img alt="Sala de Estar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<div>
<h4 className="text-white text-xl font-medium tracking-tight mb-1">Salas e Home Theater</h4>
<p className="text-slate-300 text-sm">Elegância para receber</p>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors" href="#">
                Ver galeria completa
                <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="px-6 sm:px-12 max-w-7xl mx-auto pb-12" id="contato">
<div className="bg-slate-900 rounded-[2.5rem] py-20 px-8 md:px-16 text-center overflow-hidden relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
                    Pronto para transformar sua casa?
                </h2>
<p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
                    Agende uma visita em nossa marcenaria em Limeira ou solicite um orçamento online. Nossa equipe está pronta para dar vida ao seu projeto.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-colors" href="#">
                        Falar no WhatsApp
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white border border-slate-700 rounded-full hover:bg-slate-800 transition-colors" href="#">
                        Enviar um E-mail
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 sm:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-2xl text-slate-900" icon="solar:box-minimalistic-linear"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-slate-900">Studio M.</span>
</div>
<p className="text-sm text-slate-500 max-w-sm">
                        Marcenaria de alto padrão em Limeira. Criando móveis planejados que unem estética, funcionalidade e qualidade duradoura.
                    </p>
</div>
<div>
<h5 className="text-sm font-semibold tracking-tight text-slate-900 mb-4">Contato</h5>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-500">
<iconify-icon className="text-lg shrink-0 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>Rua Exemplo, 123 - Centro<br/>Limeira, SP - 13480-000</span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-500">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
<span>(19) 99999-9999</span>
</li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold tracking-tight text-slate-900 mb-4">Redes Sociais</h5>
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-2xl" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-100">
<p className="text-xs text-slate-500">
                    © 2023 Studio M Marcenaria. Todos os direitos reservados.
                </p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-xs text-slate-500 hover:text-slate-900" href="#">Política de Privacidade</a>
<a className="text-xs text-slate-500 hover:text-slate-900" href="#">Termos de Uso</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
