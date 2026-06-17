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



(function () {
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



  // Initialize icons
  lucide.createIcons();

  // Set year
  document.getElementById('y').textContent = new Date().getFullYear();

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
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[420px]" data-alpha-mask="80" style={{filter: 'saturate(0.6) hue-rotate(0deg) opacity:0.15', background: 'radial-gradient(1200px 420px at 50% -10%, #0166b6 10%, transparent 60%)', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<header className="sticky top-0 z-40 backdrop-blur supports-backdrop-blur:bg-white/70 bg-white/85 border-b border-neutral-200 [animation:fadeSlideIn_0.8s_ease-out_0s_both]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<nav className="hidden md:flex items-center gap-6 text-sm" style={{color: '#0166b6'}}>
<a className="hover:opacity-80 transition font-geist" href="http://www.mvxquimica.com.br">HOME</a>
<a className="hover:opacity-80 transition font-geist" href="http://www.mvxquimica.com.br/institucional.htm">EMPRESA</a>
<a className="hover:opacity-80 transition font-geist" href="#clientes">CLIENTES</a>
<a className="hover:opacity-80 transition font-geist" href="#servicos">SERVIÇOS</a>
<a className="hover:opacity-80 transition font-geist" href="#videos">VÍDEOS</a>
<a className="hover:opacity-80 transition font-geist" href="#trabalhe">TRABALHE CONOSCO</a>
<a className="hover:opacity-80 transition font-geist" href="http://www.mvxquimica.com.br/contato.htm">CONTATO</a>
</nav>

<a className="flex items-center gap-3" href="http://www.mvxquimica.com.br">
<img alt="MVX Química" className="h-7 w-auto rounded-md border border-neutral-200 object-cover" src="default" style={{}}/>
<span className="text-xl sm:text-2xl tracking-tight font-playfair font-medium" style={{color: '#0166b6'}}>MVX Química</span>
</a>

<div className="flex items-center gap-3">
<button aria-label="Pesquisar" className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full border bg-white text-neutral-600 transition" style={{borderColor: '#c8c7cc'}}>
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-sm font-geist">Pesquisar</span>
</button>
<a className="p-2 rounded-full border bg-white text-neutral-600 hover:text-neutral-900 transition" href="tel:+551144012706" style={{borderColor: '#c8c7cc'}}>
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</a>
<a className="p-2 rounded-full border bg-white text-neutral-600 hover:text-neutral-900 transition" href="mailto:mvxquimica@mvxquimica.com.br" style={{borderColor: '#c8c7cc'}}>
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
<button className="md:hidden p-2 rounded-full border bg-white text-neutral-600 hover:text-neutral-900" style={{borderColor: '#c8c7cc'}}>
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
<div className="grid lg:grid-cols-12 gap-8 items-stretch">
<div className="lg:col-span-12 [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<h1 className="text-[13vw] leading-[0.8] sm:text-[9rem] md:text-[10rem] lg:text-[11rem] tracking-tight font-playfair font-medium" style={{color: '#0166b6'}}>MVX</h1>
</div>
<div className="lg:col-span-12 grid lg:grid-cols-12 gap-8">
<div className="lg:col-span-8 rounded-3xl overflow-hidden relative [animation:fadeSlideIn_1s_ease-out_0.2s_both] border" style={{borderColor: '#c8c7cc'}}>
<img alt="Banner Industrial MVX Química" className="w-full h-[300px] sm:h-[420px] object-cover" src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1600&amp;q=80" style={{}}/>
<div className="sm:p-6 flex pt-4 pr-4 pb-4 pl-4 absolute right-0 bottom-0 left-0 items-end justify-between">
<div className="hidden sm:flex items-center gap-2">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white hover:opacity-90 transition text-sm font-geist" href="http://www.mvxquimica.com.br/contato.htm" style={{backgroundColor: '#0166b6'}}>
                Solicitar cotação
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition font-geist" href="#produtos" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>
                Linha de produtos (A–Z)
              </a>
</div>
</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:right-4 sm:translate-x-0">
<div className="flex items-center gap-2 bg-white/85 backdrop-blur rounded-full px-2 py-2 shadow">
<span className="px-3 py-1.5 text-xs rounded-full text-white font-geist" style={{backgroundColor: '#0166b6'}}>Qualidade</span>
<span className="px-3 py-1.5 text-xs rounded-full font-geist" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>Logística</span>
<span className="px-3 py-1.5 text-xs rounded-full font-geist" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>Atendimento</span>
<span className="px-3 py-1.5 text-xs rounded-full font-geist" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>Conformidade</span>
</div>
</div>
</div>
<div className="lg:col-span-4 rounded-3xl bg-white border p-5 sm:p-6 flex flex-col justify-between [animation:fadeSlideIn_1s_ease-out_0.3s_both]" style={{borderColor: '#c8c7cc'}}>
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-playfair font-medium" style={{color: '#0166b6'}}>Distribuição de Matéria-Prima Química</h2>
<p className="mt-2 text-sm text-neutral-700 font-geist">Eficiência na cadeia de suprimentos, qualidade assegurada e atendimento consultivo para indústrias de diferentes segmentos.</p>
</div>
<div className="mt-5 grid grid-cols-2 gap-4">
<div className="rounded-2xl overflow-hidden border" style={{borderColor: '#c8c7cc'}}>
<img alt="Produto em destaque" className="w-full h-28 object-cover" src="https://images.unsplash.com/photo-1725404343886-a111bc5555c1?w=320&amp;q=80" style={{}}/>
<div className="p-3">
<p className="text-sm font-medium font-geist">Ácido Fosfórico Alimentício 85%</p>
<p className="text-xs text-neutral-600 font-geist">Linha alimentícia • Pronta entrega</p>
</div>
</div>
<div className="rounded-2xl overflow-hidden border" style={{borderColor: '#c8c7cc'}}>
<img alt="Produto em destaque" className="w-full h-28 object-cover" src="https://images.unsplash.com/photo-1617155093730-a8bf47be792d?w=320&amp;q=80" style={{}}/>
<div className="p-3">
<p className="text-sm font-medium font-geist">Soda Cáustica Escamas</p>
<p className="text-xs text-neutral-600 font-geist">Tratamento de águas • Logística ágil</p>
</div>
</div>
</div>
<div className="mt-4">
<a className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white hover:opacity-90 transition text-sm font-geist" href="#servicos" style={{backgroundColor: '#0166b6'}}>
              Conheça nossos serviços
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-10 sm:mt-16" id="empresa">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl border bg-white p-6 sm:p-8 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll animate" style={{borderColor: '#c8c7cc'}}>
<div className="flex items-start gap-4">
<div className="h-12 w-12 rounded-xl flex items-center justify-center" style={{backgroundColor: '#0166b6'}}>
<svg className="lucide lucide-flask-round" data-lucide="flask-round" fill="none" height="28" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v6.292a7 7 0 1 0 4 0V2"></path><path d="M5 15h14"></path><path d="M8.5 2h7"></path></svg>
</div>
<div>
<h3 className="text-2xl sm:text-3xl tracking-tight font-playfair font-medium" style={{color: '#0166b6'}}>Sobre a MVX Química</h3>
<p className="mt-2 text-sm text-neutral-700 font-geist">Atuamos em Química Industrial e Distribuição de Matéria-Prima Química com foco em eficiência operacional, qualidade dos insumos e atendimento próximo ao cliente.</p>
<div className="mt-4 grid sm:grid-cols-3 gap-4">
<div className="rounded-xl border p-4 bg-white" style={{borderColor: '#c8c7cc'}}>
<p className="text-sm font-semibold font-geist" style={{color: '#0166b6'}}>Qualidade e Conformidade</p>
<p className="text-sm text-neutral-700 font-geist">Produtos com procedência, controles por lote e conformidade regulatória.</p>
</div>
<div className="rounded-xl border p-4 bg-white" style={{borderColor: '#c8c7cc'}}>
<p className="text-sm font-semibold font-geist" style={{color: '#0166b6'}}>Logística Eficiente</p>
<p className="text-sm text-neutral-700 font-geist">Estoque, fracionamento e entregas programadas para otimizar seu processo.</p>
</div>
<div className="rounded-xl border p-4 bg-white" style={{borderColor: '#c8c7cc'}}>
<p className="text-sm font-semibold font-geist" style={{color: '#0166b6'}}>Atendimento Consultivo</p>
<p className="text-sm text-neutral-700 font-geist">Equipe dedicada para entender suas necessidades e indicar as melhores soluções.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-10 sm:mt-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll animate">
<div className="flex items-center gap-3">
<span className="text-sm text-neutral-600 font-geist">Acesso rápido</span>
<div className="flex items-center gap-2 flex-wrap">

<a className="px-3 py-1.5 rounded-full text-sm font-geist text-white" href="#A" style={{backgroundColor: '#0166b6'}}>A</a>
<a className="px-3 py-1.5 rounded-full text-sm font-geist" href="#B" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>B</a>
<a className="px-3 py-1.5 rounded-full text-sm font-geist" href="#C" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>C</a>
<a className="px-3 py-1.5 rounded-full text-sm font-geist" href="#D" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>D</a>
<a className="px-3 py-1.5 rounded-full text-sm font-geist" href="#E" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>E</a>
<a className="px-3 py-1.5 rounded-full text-sm font-geist" href="#F" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>F</a>
<a className="px-3 py-1.5 rounded-full text-sm font-geist" href="#G" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>G</a>
<a className="px-3 py-1.5 rounded-full text-sm font-geist" href="#H" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>H</a>
<a className="px-3 py-1.5 rounded-full text-sm font-geist" href="#I" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>I</a>
<a className="px-3 py-1.5 rounded-full text-sm font-geist" href="#L" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>L</a>
<a className="px-3 py-1.5 rounded-full text-sm font-geist" href="#M" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>M</a>
<a className="px-3 py-1.5 rounded-full text-sm font-geist" href="#N" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>N</a>
<a className="px-3 py-1.5 rounded-full text-sm font-geist" href="#O" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>O</a>
<a className="px-3 py-1.5 rounded-full text-sm font-geist" href="#P" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>P</a>
<a className="px-3 py-1.5 rounded-full text-sm font-geist" href="#Q" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>Q</a>
<a className="px-3 py-1.5 rounded-full text-sm font-geist" href="#S" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>S</a>
<a className="px-3 py-1.5 rounded-full text-sm font-geist" href="#T" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>T</a>
<a className="px-3 py-1.5 rounded-full text-sm font-geist" href="#U" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>U</a>
<a className="px-3 py-1.5 rounded-full text-sm font-geist" href="#V" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>V</a>
<a className="px-3 py-1.5 rounded-full text-sm font-geist" href="#X" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>X</a>
</div>
</div>
<div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full border bg-white text-neutral-600 w-64" style={{borderColor: '#c8c7cc'}}>
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full bg-transparent outline-none text-sm placeholder:text-neutral-400" placeholder="Buscar produto" type="text"/>
</div>
</div>
</div>
</section>

<section className="sm:mt-8 mt-8" id="produtos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl tracking-tight font-playfair font-medium [animation:fadeSlideIn_1s_ease-out_0.1s_both]" style={{color: '#0166b6'}}>Linha de Produtos</h2>
<p className="mt-2 text-sm text-neutral-700 font-geist">Lista alfabética completa de matérias-primas.</p>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6">

<article className="group rounded-3xl overflow-hidden border bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll animate" id="A" style={{borderColor: '#c8c7cc'}}>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{color: '#0166b6'}}>A</h3>
</div>
<p className="mt-2 text-sm text-neutral-700 font-geist">Acetato de Butila, Acetato de Etila, Acetato de Etilglicol, Acetona, Ácido Acético Glacial, Ácido Clorídrico (Ácido Muriático), Ácido Fosfórico Industrial 74%, Ácido Fosfórico Alimentício 85%, Ácido Oxálico, Antiespumantes para tratamento de águas, Ácido Sulfúrico, Águarrás (Vegetal e Mineral), Álcool de Cereais, Álcool Butílico (Butanol), Álcool Etílico Anidro 99%, Álcool Etílico Hidratado 96%, Álcool Isopropílico (Isopropanol), Amida 60, Antiespumante à base de silicone.</p>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.12s_both] animate-on-scroll animate" id="B" style={{borderColor: '#c8c7cc'}}>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{color: '#0166b6'}}>B</h3>
<p className="mt-2 text-sm text-neutral-700 font-geist">Bicarbonato de Sódio, Bórax Decahidratado, Bórax Pentahidratado.</p>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.14s_both] animate-on-scroll animate" id="C" style={{borderColor: '#c8c7cc'}}>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{color: '#0166b6'}}>C</h3>
<p className="mt-2 text-sm text-neutral-700 font-geist">Carbonato de Bário, Carbonato de Cálcio, Carbonato de Sódio (Barrilha), Caulim, Cloreto de Cálcio, Cloreto de Magnésio, Cloreto de Potássio, Cloreto de Sódio (Sal), Cloreto Férrico, Cloreto de Zinco, Cloro Granulado, Cloro Líquido, Clorofórmio, Clorito de Sódio, Copolímero Acrílico.</p>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.16s_both] animate-on-scroll animate" id="D" style={{borderColor: '#c8c7cc'}}>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{color: '#0166b6'}}>D</h3>
<p className="mt-2 text-sm text-neutral-700 font-geist">Dicloro Isocianurato de Sódio, Dióxido de Titânio.</p>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.18s_both] animate-on-scroll animate" id="E" style={{borderColor: '#c8c7cc'}}>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{color: '#0166b6'}}>E</h3>
<p className="mt-2 text-sm text-neutral-700 font-geist">EDTA, Enxofre, Espessantes, Estearato de Cálcio, Estearato de Zinco.</p>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll animate" id="F" style={{borderColor: '#c8c7cc'}}>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{color: '#0166b6'}}>F</h3>
<p className="mt-2 text-sm text-neutral-700 font-geist">Fosfato Bicálcico, Fosfato Tricálcico, Fosfato Tricálcico.</p>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.22s_both] animate-on-scroll animate" id="G" style={{borderColor: '#c8c7cc'}}>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{color: '#0166b6'}}>G</h3>
<p className="mt-2 text-sm text-neutral-700 font-geist">Glicerina, Glicol, Goma Xantana.</p>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.24s_both] animate-on-scroll animate" id="H" style={{borderColor: '#c8c7cc'}}>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{color: '#0166b6'}}>H</h3>
<p className="mt-2 text-sm text-neutral-700 font-geist">Hipoclorito de Cálcio, Hipoclorito de Sódio.</p>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.26s_both] animate-on-scroll animate" id="I" style={{borderColor: '#c8c7cc'}}>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{color: '#0166b6'}}>I</h3>
<p className="mt-2 text-sm text-neutral-700 font-geist">Inibidores de Corrosão.</p>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.28s_both] animate-on-scroll" id="L" style={{borderColor: '#c8c7cc'}}>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{color: '#0166b6'}}>L</h3>
<p className="mt-2 text-sm text-neutral-700 font-geist">Lauril Éter Sulfato de Sódio, Lixívia.</p>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll" id="M" style={{borderColor: '#c8c7cc'}}>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{color: '#0166b6'}}>M</h3>
<p className="mt-2 text-sm text-neutral-700 font-geist">Metabisulfito de Sódio, Metanol, Metil Etil Cetona (MEK), Monocloramina.</p>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.32s_both] animate-on-scroll" id="N" style={{borderColor: '#c8c7cc'}}>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{color: '#0166b6'}}>N</h3>
<p className="mt-2 text-sm text-neutral-700 font-geist">Nitrato de Sódio.</p>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.34s_both] animate-on-scroll" id="O" style={{borderColor: '#c8c7cc'}}>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{color: '#0166b6'}}>O</h3>
<p className="mt-2 text-sm text-neutral-700 font-geist">Óleo de Mamona, Óleo de Soja Epoxidado.</p>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.36s_both] animate-on-scroll" id="P" style={{borderColor: '#c8c7cc'}}>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{color: '#0166b6'}}>P</h3>
<p className="mt-2 text-sm text-neutral-700 font-geist">Peróxido de Hidrogênio (Água Oxigenada), Persulfato de Amônio, Persulfato de Potássio, Persulfato de Sódio, Policloreto de Alumínio (PAC), Polímeros, Polímeros para tratamento de águas, Polifosfato de Sódio, Polipropileno Glicol, Propileno Glicol.</p>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.38s_both] animate-on-scroll" id="Q" style={{borderColor: '#c8c7cc'}}>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{color: '#0166b6'}}>Q</h3>
<p className="mt-2 text-sm text-neutral-700 font-geist">Quaternário de Amônio.</p>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll" id="S" style={{borderColor: '#c8c7cc'}}>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{color: '#0166b6'}}>S</h3>
<p className="mt-2 text-sm text-neutral-700 font-geist">Silicato de Sódio, Soda Cáustica Líquida, Soda Cáustica Escamas, Sulfato de Alumínio Pó, Sulfato de Bário, Sulfato de Cobre, Sulfato de Magnésio, Sulfato de Sódio Anidro, Sulfato de Zinco.</p>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.42s_both] animate-on-scroll" id="T" style={{borderColor: '#c8c7cc'}}>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{color: '#0166b6'}}>T</h3>
<p className="mt-2 text-sm text-neutral-700 font-geist">Talco Industrial, Toluol, Tricloroetileno, Trietanolamina, Tripolifosfato de Sódio.</p>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.44s_both] animate-on-scroll" id="U" style={{borderColor: '#c8c7cc'}}>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{color: '#0166b6'}}>U</h3>
<p className="mt-2 text-sm text-neutral-700 font-geist">Ureia Técnica.</p>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.46s_both] animate-on-scroll" id="V" style={{borderColor: '#c8c7cc'}}>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{color: '#0166b6'}}>V</h3>
<p className="mt-2 text-sm text-neutral-700 font-geist">Vaselina Branca Líquida, Vaselina Branca Sólida.</p>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.48s_both] animate-on-scroll" id="X" style={{borderColor: '#c8c7cc'}}>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{color: '#0166b6'}}>X</h3>
<p className="mt-2 text-sm text-neutral-700 font-geist">Xilol.</p>
</div>
</article>
</div>
</div>
</section>

<section className="mt-16 sm:mt-24" id="servicos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl tracking-tight font-playfair font-medium [animation:fadeSlideIn_1s_ease-out_0.1s_both]" style={{color: '#0166b6'}}>Serviços</h2>
<div className="mt-6 grid lg:grid-cols-12 gap-6">
<div className="lg:col-span-7 rounded-3xl overflow-hidden bg-neutral-100 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll border" style={{borderColor: '#c8c7cc'}}>
<img alt="Logística e Armazenagem" className="w-full h-[420px] object-cover" src="https://images.unsplash.com/photo-1707135720210-eafd5343e093?w=1600&amp;q=80" style={{}}/>
</div>
<div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
<div className="rounded-3xl overflow-hidden border [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll bg-white" style={{borderColor: '#c8c7cc'}}>
<img alt="Fracionamento" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1682304670211-c0fbd729108e?w=1600&amp;q=80" style={{}}/>
<div className="p-5">
<p className="text-sm font-semibold font-geist" style={{color: '#0166b6'}}>Fracionamento e Envase</p>
<p className="text-sm text-neutral-700 font-geist">Atendimento em diferentes volumes, com rastreabilidade e segurança.</p>
</div>
</div>
<div className="rounded-3xl overflow-hidden border [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll bg-white" style={{borderColor: '#c8c7cc'}}>
<img alt="Atendimento Técnico" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=1600&amp;q=80" style={{}}/>
<div className="p-5">
<p className="text-sm font-semibold font-geist" style={{color: '#0166b6'}}>Atendimento e Suporte</p>
<p className="text-sm text-neutral-700 font-geist">Equipe dedicada para especificação, amostras e apoio ao desenvolvimento.</p>
</div>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-full text-xs text-white font-geist" style={{backgroundColor: '#0166b6'}}>Tratamento de Águas</span>
<span className="px-3 py-1.5 rounded-full text-xs font-geist" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>Solventes</span>
<span className="px-3 py-1.5 rounded-full text-xs font-geist" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>Aditivos</span>
<span className="px-3 py-1.5 rounded-full text-xs font-geist" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>Polímeros</span>
<span className="px-3 py-1.5 rounded-full text-xs font-geist" style={{backgroundColor: '#c8c7cc', color: '#0a0a0a'}}>Linha Alimentícia</span>
</div>
<div className="hidden sm:flex items-center gap-2">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white hover:opacity-90 transition text-sm font-geist" href="http://www.mvxquimica.com.br/contato.htm" style={{backgroundColor: '#0166b6'}}>
          Fale conosco
          <svg className="lucide lucide-message-square w-4 h-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="mt-16 sm:mt-24" id="clientes">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl border bg-white p-6 sm:p-8 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll" style={{borderColor: '#c8c7cc'}}>
<h2 className="text-3xl sm:text-4xl tracking-tight font-playfair font-medium" style={{color: '#0166b6'}}>Clientes</h2>
<p className="mt-2 text-sm text-neutral-700 font-geist">Atendemos indústrias de saneamento, alimentos e bebidas, químico-plástico, cosméticos, têxtil, entre outras. Entregas programadas e SLA definidos garantem previsibilidade e eficiência.</p>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="flex text-xs text-neutral-500 bg-white h-20 border rounded-xl items-center justify-center" style={{borderColor: '#c8c7cc'}}>Logo Cliente</div>
<div className="h-20 rounded-xl border bg-white flex items-center justify-center text-xs text-neutral-500" style={{borderColor: '#c8c7cc'}}>Logo Cliente</div>
<div className="h-20 rounded-xl border bg-white flex items-center justify-center text-xs text-neutral-500" style={{borderColor: '#c8c7cc'}}>Logo Cliente</div>
<div className="h-20 rounded-xl border bg-white flex items-center justify-center text-xs text-neutral-500" style={{borderColor: '#c8c7cc'}}>Logo Cliente</div>
</div>
</div>
</div>
</section>

<section className="mt-16 sm:mt-24" id="videos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl tracking-tight font-playfair font-medium [animation:fadeSlideIn_1s_ease-out_0.1s_both]" style={{color: '#0166b6'}}>Vídeos</h2>
<div className="mt-6 grid sm:grid-cols-2 gap-6">
<div className="rounded-2xl overflow-hidden border bg-white [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll" style={{borderColor: '#c8c7cc'}}>
<div className="aspect-video bg-neutral-100 flex items-center justify-center">
<img alt="Vídeo Institucional" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1554475901-e2ce1a3f857e?w=1600&amp;q=80" style={{}}/>
</div>
<div className="p-4">
<p className="text-sm font-semibold font-geist" style={{color: '#0166b6'}}>Institucional MVX</p>
<p className="text-sm text-neutral-700 font-geist">Conheça nossa estrutura, processos e diferenciais competitivos.</p>
</div>
</div>
<div className="rounded-2xl overflow-hidden border bg-white [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll" style={{borderColor: '#c8c7cc'}}>
<div className="aspect-video bg-neutral-100 flex items-center justify-center">
<img alt="Linha de Produtos" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1562411053-c9ac630a5934?w=1600&amp;q=80" style={{}}/>
</div>
<div className="p-4">
<p className="text-sm font-semibold font-geist" style={{color: '#0166b6'}}>Linha de Produtos (A–Z)</p>
<p className="text-sm text-neutral-700 font-geist">Visão geral da nossa cobertura de matérias-primas e aplicações.</p>
</div>
</div>
</div>
</div>
</section>

<section className="mt-20 sm:mt-28" style={{backgroundColor: '#0166b6', color: 'white'}}>
<div className="sm:px-6 lg:px-8 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<h3 className="text-4xl sm:text-6xl tracking-tight [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll font-playfair font-medium">A Eficiência da Matéria Prima</h3>
<p className="mt-4 text-sm/relaxed text-white/80 max-w-xl [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll font-geist">Qualidade, logística e atendimento conectados para impulsionar seus resultados.</p>
<div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
<div className="[animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll bg-white/5 h-40 border rounded-2xl backdrop-blur" style={{borderColor: '#c8c7cc', backgroundImage: 'url(\'https://placehold.co/600x400?text=Imagem\')', backgroundSize: 'cover'}}></div>
<div className="[animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll bg-white/5 h-40 border rounded-2xl backdrop-blur" style={{borderColor: '#c8c7cc', backgroundImage: 'url(\'https://placehold.co/600x400?text=Imagem\')', backgroundSize: 'cover'}}></div>
<div className="[animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll bg-white/5 h-40 border rounded-2xl backdrop-blur" style={{borderColor: '#c8c7cc', backgroundImage: 'url(\'https://placehold.co/600x400?text=Imagem\')', backgroundSize: 'cover'}}></div>
<div className="h-40 rounded-2xl [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll border bg-white/5 backdrop-blur" style={{borderColor: '#c8c7cc', backgroundImage: 'url(\'https://placehold.co/600x400?text=Imagem\')', backgroundSize: 'cover'}}></div>
</div>
<div className="mt-8">
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-neutral-900 hover:bg-white/90 transition text-sm font-geist" href="http://www.mvxquimica.com.br/contato.htm">
        Solicitar cotação
        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="mt-16 sm:mt-24" id="trabalhe">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl overflow-hidden relative [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll border" style={{borderColor: '#c8c7cc'}}>
<img alt="Equipe MVX" className="w-full h-[380px] object-cover" src="https://images.unsplash.com/photo-1532634993-15f421e42ec0?w=2560&amp;q=80" style={{}}/>
<div className="bg-gradient-to-tr from-black/50 via-black/20 to-transparent absolute inset-0"></div>
<div className="absolute left-6 sm:left-10 bottom-8 sm:bottom-12 max-w-lg">
<h4 className="text-3xl sm:text-5xl tracking-tight text-white font-playfair font-medium">Trabalhe Conosco</h4>
<p className="mt-2 text-sm text-neutral-200 font-geist">Venha construir a eficiência da matéria-prima com a gente. Envie seu currículo e faça parte do nosso time.</p>
<div className="mt-5 flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white hover:opacity-90 transition text-sm font-geist" href="http://www.mvxquimica.com.br/contato.htm" style={{backgroundColor: '#0166b6'}}>
            Enviar currículo
            <svg className="lucide lucide-upload w-4 h-4" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
</a>
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 transition text-sm font-geist" href="http://www.mvxquimica.com.br">
            Conhecer a empresa
            <svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-16 sm:mt-24 border-t" style={{borderColor: '#c8c7cc'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="lg:col-span-2">
<p className="text-sm font-semibold tracking-tight font-geist" style={{color: '#0166b6'}}>Contato</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li className="font-geist">Rua Oratório, 3531 - Parque Novo Oratório - Santo André, SP - CEP: 09251-000</li>
<li className="font-geist">(11) 4401-2706</li>
<li className="font-geist">mvxquimica@mvxquimica.com.br</li>
</ul>
</div>
<div>
<p className="text-sm font-semibold tracking-tight font-geist" style={{color: '#0166b6'}}>Embalagens Comercializadas</p>
<p className="mt-3 text-sm text-neutral-700 font-geist">Embalagens Comercializadas: </p>
</div>
<div>
<p className="text-sm font-semibold tracking-tight font-geist" style={{color: '#0166b6'}}>Links</p>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="font-geist hover:underline" href="http://www.mvxquimica.com.br" style={{color: '#0166b6'}}>Página Inicial</a></li>
<li><a className="font-geist hover:underline" href="http://www.mvxquimica.com.br/institucional.htm" style={{color: '#0166b6'}}>Sobre a MVX</a></li>
<li><a className="font-geist hover:underline" href="http://www.mvxquimica.com.br/mapa.htm" style={{color: '#0166b6'}}>Localização</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex items-center justify-between [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<p className="text-sm text-neutral-500 font-geist">© <span className="font-geist" id="y">2025</span> MVX Química</p>
<div className="flex items-center gap-3">
<a className="p-2 rounded-full border hover:bg-neutral-50" href="#" style={{borderColor: '#c8c7cc', color: '#0166b6'}}>
<svg className="lucide lucide-arrow-up w-4 h-4" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
