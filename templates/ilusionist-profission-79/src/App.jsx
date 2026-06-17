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



{
"@context": "https://schema.org",
"@type": "Person",
"name": "Marco Pereira",
"jobTitle": "Ilusionista Profissional",
"url": "https://www.marcopereira.pt",
"image": "https://www.marcopereira.pt/assets/marco-pereira-ilusionista.jpg",
"description": "Ilusionista profissional em Portugal especializado em magia close-up, mentalismo e espetáculos de palco para eventos corporativos e casamentos.",
"address": {
"@type": "PostalAddress",
"addressCountry": "Portugal"
},
"sameAs": [
"https://www.facebook.com/marcopereirailusionista",
"https://www.instagram.com/marcopereiragic",
"https://www.linkedin.com/in/marcopereira"
]
}



{
"@context": "https://schema.org",
"@type": "ProfessionalService",
"name": "Marco Pereira Ilusionismo",
"image": "https://www.marcopereira.pt/assets/logo.png",
"telephone": "+351 910 000 000",
"url": "https://www.marcopereira.pt",
"address": {
"@type": "PostalAddress",
"addressCountry": "PT",
"addressRegion": "Lisboa"
},
"priceRange": "$$$",
"aggregateRating": {
"@type": "AggregateRating",
"ratingValue": "5.0",
"reviewCount": "124"
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
      

<header className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-widest text-zinc-100 hover:text-white transition-colors uppercase flex items-center gap-2" href="/">
<span className="w-8 h-8 rounded-full border border-amber-500/30 flex items-center justify-center bg-amber-500/5 text-amber-500">
            M
          </span>
          Marco Pereira
        </a>
<nav className="hidden md:flex gap-8 text-sm font-medium">
<a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#sobre">
            Sobre
          </a>
<a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#servicos">
            Serviços
          </a>
<a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#portfolio">
            Portfolio
          </a>
<a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#testemunhos">
            Testemunhos
          </a>
</nav>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-zinc-950 bg-zinc-100 rounded hover:bg-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#contactos">
          Contactar
        </a>

<button aria-label="Menu" className="md:hidden text-zinc-300">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>
<main>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-900/20 rounded-full blur-[128px] opacity-40"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[128px] opacity-30"></div>
<img alt="Marco Pereira Ilusionista em palco com cartas" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay grayscale" src="https://images.unsplash.com/photo-1534068590799-09895a701e3e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/90 to-zinc-950"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-zinc-100 leading-[1.1] tracking-tight drop-shadow-2xl">
            Marco Pereira
            <br/>
<span className="text-zinc-500 text-4xl md:text-6xl italic font-normal">
              Ilusionista Profissional
            </span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Transforme o seu evento numa experiência inesquecível. Magia de alto
            nível para eventos corporativos, casamentos e celebrações exclusivas
            em
            <span className="text-zinc-200">Portugal</span>
            .
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-zinc-100 text-zinc-950 text-sm font-semibold rounded hover:bg-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2" href="#contactos">
              Solicitar Orçamento
              <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-zinc-700 text-zinc-300 text-sm font-medium rounded hover:bg-zinc-900 hover:border-zinc-500 transition-all flex items-center justify-center gap-2" href="#portfolio">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
              Ver Atuações
            </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] uppercase tracking-widest">Scroll</span>
<iconify-icon icon="solar:mouse-linear" width="20"></iconify-icon>
</div>
</section>

<section className="py-24 md:py-32 relative border-t border-zinc-900" id="sobre">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 tracking-tight">
                Sobre o Ilusionista
                <br/>
<span className="text-amber-600/80 italic font-serif">
                  Marco Pereira
                </span>
</h2>
<div className="space-y-6 text-zinc-400 font-light leading-relaxed text-justify">
<p>
                  Com mais de uma década de experiência a encantar audiências de
                  norte a sul de Portugal, Marco Pereira não é apenas um mágico,
                  é um criador de momentos impossíveis. A sua abordagem ao
                  ilusionismo combina psicologia, destreza manual e uma presença
                  de palco magnética.
                </p>
<p>
                  Especializado em
                  <strong>magia para eventos corporativos</strong>
                  e entretenimento sofisticado para
                  <strong>casamentos</strong>
                  , Marco adapta cada performance ao perfil do público,
                  garantindo que cada convidado viva uma experiência única e
                  pessoal.
                </p>
<p>
                  Membro de prestigiadas associações de ilusionismo, o seu
                  estilo foge aos clichés tradicionais, apresentando um
                  espetáculo moderno, elegante e memorável.
                </p>
</div>
<div className="grid grid-cols-3 gap-8 pt-4 border-t border-zinc-800/50">
<div>
<div className="text-3xl font-serif text-zinc-100 mb-1">12+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">
                    Anos de Exp.
                  </div>
</div>
<div>
<div className="text-3xl font-serif text-zinc-100 mb-1">500+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">
                    Eventos
                  </div>
</div>
<div>
<div className="text-3xl font-serif text-zinc-100 mb-1">100%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">
                    Satisfação
                  </div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-violet-900/20 blur-3xl -z-10"></div>
<img alt="Marco Pereira Mágico Profissional em atuação" className="rounded-lg shadow-2xl border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-[4/5]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30" id="servicos">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
<h2 className="text-3xl md:text-5xl font-semibold text-zinc-100 tracking-tight">
              Serviços de Magia
            </h2>
<p className="text-zinc-400 font-light">
              Soluções de entretenimento premium adaptadas à dimensão e natureza
              do seu evento.
            </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="glass-panel p-8 rounded-xl hover:border-amber-900/50 transition-all group">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-100 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:briefcase-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-100 mb-3">
                Magia Corporativa
              </h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Quebra-gelo perfeito para cocktails, jantares de gala e
                lançamentos de produtos. O ilusionismo como ferramenta de
                marketing e networking empresarial.
              </p>
<ul className="space-y-2 text-xs text-zinc-500">
<li className="flex items-center gap-2">
<iconify-icon className="text-amber-700" icon="solar:check-circle-linear"></iconify-icon>
                  Team Building
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-amber-700" icon="solar:check-circle-linear"></iconify-icon>
                  Lançamento de Marcas
                </li>
</ul>
</article>

<article className="glass-panel p-8 rounded-xl border-amber-900/20 hover:border-amber-600/40 transition-all group relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-600/10 to-transparent"></div>
<div className="w-12 h-12 rounded-lg bg-amber-900/10 border border-amber-900/30 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-100 mb-3">Casamentos</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Adicione um toque de magia ao seu dia especial. Entretenimento
                elegante durante o cocktail ou entre pratos que surpreende
                famílias e amigos.
              </p>
<ul className="space-y-2 text-xs text-zinc-500">
<li className="flex items-center gap-2">
<iconify-icon className="text-amber-700" icon="solar:check-circle-linear"></iconify-icon>
                  Receção aos convidados
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-amber-700" icon="solar:check-circle-linear"></iconify-icon>
                  Magia de proximidade
                </li>
</ul>
</article>

<article className="glass-panel p-8 rounded-xl hover:border-amber-900/50 transition-all group">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-100 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-100 mb-3">
                Close-up Magic
              </h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Magia que acontece literalmente nas mãos dos espetadores. Ideal
                para festas privadas, restaurantes e eventos onde a interação é
                fundamental.
              </p>
<ul className="space-y-2 text-xs text-zinc-500">
<li className="flex items-center gap-2">
<iconify-icon className="text-amber-700" icon="solar:check-circle-linear"></iconify-icon>
                  Alta interação
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-amber-700" icon="solar:check-circle-linear"></iconify-icon>
                  Sem necessidade de palco
                </li>
</ul>
</article>

<article className="glass-panel p-8 rounded-xl hover:border-amber-900/50 transition-all group">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-100 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:star-fall-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-100 mb-3">
                Espetáculo de Palco
              </h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Um show completo para grandes audiências. Ilusões visuais,
                mentalismo e participação do público num formato estruturado e
                impactante.
              </p>
</article>

<article className="glass-panel p-8 rounded-xl hover:border-amber-900/50 transition-all group">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-100 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:brain-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-100 mb-3">Mentalismo</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Leitura de mentes, previsões e influência psicológica. Uma
                performance intelectual e misteriosa para públicos exigentes.
              </p>
</article>

<article className="glass-panel p-8 rounded-xl hover:border-amber-900/50 transition-all group flex flex-col justify-center items-center text-center border-dashed border-zinc-800">
<h3 className="text-xl font-medium text-zinc-100 mb-3">
                Personalizado
              </h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Tem uma ideia específica? Criamos ilusões à medida para revelar
                a sua mensagem.
              </p>
<a className="text-amber-500 text-sm hover:underline" href="#contactos">
                Fale connosco →
              </a>
</article>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 tracking-tight mb-2">
                Portfolio de Espetáculos
              </h2>
<p className="text-zinc-500 text-sm">
                Momentos capturados em eventos por todo o país.
              </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">

<div className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-lg">
<img alt="Marco Pereira espetáculo de magia em palco Lisboa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<p className="text-white font-medium">Gala Corporativa, Lisboa</p>
</div>
</div>

<div className="relative group overflow-hidden rounded-lg">
<img alt="Magia com cartas close-up" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0" loading="lazy" src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative group overflow-hidden rounded-lg">
<img alt="Reação do público magia casamento" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>

<div className="relative group overflow-hidden rounded-lg">
<img alt="Evento privado Porto ilusionismo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0" loading="lazy" src="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative group overflow-hidden rounded-lg">
<img alt="Ilusionista em evento empresarial" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20" id="testemunhos">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 tracking-tight text-center mb-16">
            O que dizem os clientes
          </h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass-panel p-8 rounded-xl flex flex-col" itemscope="" itemtype="https://schema.org/Review">
<div className="flex gap-1 text-amber-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm leading-relaxed italic mb-6 flex-grow">
                "Contratámos o Marco para o nosso jantar de Natal da empresa e
                foi absolutamente fantástico. Conseguiu captar a atenção de
                todos e criar um ambiente de mistério e diversão. Recomendo
                vivamente!"
              </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 font-serif">
                  AS
                </div>
<div itemprop="author" itemscope="" itemtype="https://schema.org/Person">
<p className="text-sm font-medium text-zinc-100" itemprop="name">
                    Ana Silva
                  </p>
<p className="text-xs text-zinc-500">
                    Diretora de Marketing, Lisboa
                  </p>
</div>
</div>
<meta content="Espetáculo Corporativo" itemprop="itemReviewed"/>
</div>

<div className="glass-panel p-8 rounded-xl flex flex-col border-amber-900/20" itemscope="" itemtype="https://schema.org/Review">
<div className="flex gap-1 text-amber-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm leading-relaxed italic mb-6 flex-grow">
                "O ponto alto do nosso casamento! Os convidados não paravam de
                falar sobre os truques de close-up durante o cocktail.
                Profissionalismo e elegância pura."
              </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 font-serif">
                  RC
                </div>
<div itemprop="author" itemscope="" itemtype="https://schema.org/Person">
<p className="text-sm font-medium text-zinc-100" itemprop="name">
                    Ricardo Costa
                  </p>
<p className="text-xs text-zinc-500">Casamento, Porto</p>
</div>
</div>
<meta content="Ilusionismo para Casamento" itemprop="itemReviewed"/>
</div>

<div className="glass-panel p-8 rounded-xl flex flex-col" itemscope="" itemtype="https://schema.org/Review">
<div className="flex gap-1 text-amber-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm leading-relaxed italic mb-6 flex-grow">
                "Uma experiência de mentalismo incrível. Deixou a nossa equipa
                perplexa. O Marco é um verdadeiro artista."
              </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 font-serif">
                  MM
                </div>
<div itemprop="author" itemscope="" itemtype="https://schema.org/Person">
<p className="text-sm font-medium text-zinc-100" itemprop="name">
                    Miguel Martins
                  </p>
<p className="text-xs text-zinc-500">Evento Tech, Algarve</p>
</div>
</div>
<meta content="Mentalismo" itemprop="itemReviewed"/>
</div>
</div>
</div>
</section>


<section className="py-24 relative overflow-hidden" id="contactos">

<div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-violet-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 space-y-4">
<h2 className="text-3xl md:text-5xl font-semibold text-zinc-100 tracking-tight">
              Contacte o Ilusionista
            </h2>
<p className="text-zinc-400 font-light max-w-xl mx-auto">
              Pronto para trazer magia ao seu evento? Preencha o formulário para
              verificar disponibilidade e receber um orçamento personalizado.
            </p>
</div>
<form className="space-y-6 bg-zinc-900/50 p-8 md:p-12 rounded-2xl border border-zinc-800 backdrop-blur-sm">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider" htmlFor="name">
                  Nome Completo
                </label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-zinc-200 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/50 transition-all placeholder-zinc-700" id="name" name="name" placeholder="Ex: João Santos" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider" htmlFor="email">
                  Email
                </label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-zinc-200 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/50 transition-all placeholder-zinc-700" id="email" name="email" placeholder="joao@exemplo.com" type="email"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider" htmlFor="date">
                  Data do Evento
                </label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-zinc-200 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/50 transition-all [color-scheme:dark]" id="date" name="date" type="date"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider" htmlFor="type">
                  Tipo de Evento
                </label>
<div className="relative">
<select className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-zinc-200 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/50 transition-all appearance-none cursor-pointer" id="type" name="type">
<option disabled="" selected="" value="">
                      Selecione uma opção
                    </option>
<option value="corporativo">Evento Corporativo</option>
<option value="casamento">Casamento</option>
<option value="privado">Festa Privada</option>
<option value="outro">Outro</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider" htmlFor="message">
                Mensagem
              </label>
<textarea className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-zinc-200 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/50 transition-all placeholder-zinc-700 resize-none" id="message" name="message" placeholder="Conte-me mais sobre o evento, número de convidados, localização..." rows="4"></textarea>
</div>
<button className="w-full bg-zinc-100 text-zinc-950 font-semibold py-4 rounded hover:bg-white transition-all shadow-lg shadow-white/5 flex items-center justify-center gap-2 group" type="submit">
              Enviar Pedido de Orçamento
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:plain-3-linear"></iconify-icon>
</button>
<p className="text-center text-xs text-zinc-600 mt-4">
              Responderemos num prazo máximo de 24 horas.
            </p>
</form>

<div className="mt-16 grid md:grid-cols-3 gap-8 text-center md:text-left border-t border-zinc-800 pt-8">
<div className="flex flex-col items-center md:items-start">
<iconify-icon className="text-amber-600 mb-3 text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
<span className="text-xs text-zinc-500 uppercase mb-1">Telefone</span>
<a className="text-zinc-200 hover:text-white transition-colors" href="tel:+351910000000">
                +351 910 000 000
              </a>
</div>
<div className="flex flex-col items-center md:items-start">
<iconify-icon className="text-amber-600 mb-3 text-2xl" icon="solar:letter-linear"></iconify-icon>
<span className="text-xs text-zinc-500 uppercase mb-1">Email</span>
<a className="text-zinc-200 hover:text-white transition-colors" href="mailto:info@marcopereira.pt">
                info@marcopereira.pt
              </a>
</div>
<div className="flex flex-col items-center md:items-start">
<iconify-icon className="text-amber-600 mb-3 text-2xl" icon="solar:share-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-500 uppercase mb-1">Social</span>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-zinc-900 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-zinc-100 mb-8 tracking-tight">
            Blog &amp; Novidades
          </h2>
<div className="grid md:grid-cols-2 gap-8">
<article className="flex gap-4 group cursor-pointer">
<div className="w-24 h-24 bg-zinc-900 rounded overflow-hidden flex-shrink-0">
<img alt="Blog post thumb" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div>
<span className="text-xs text-amber-600 font-medium">
                  Out 12, 2023
                </span>
<h3 className="text-zinc-200 font-medium leading-tight my-1 group-hover:text-amber-500 transition-colors">
                  Porquê contratar um ilusionista para o seu casamento?
                </h3>
<p className="text-xs text-zinc-500 line-clamp-2">
                  Descubra como a magia close-up pode transformar os tempos
                  mortos do seu copo d'água em momentos...
                </p>
</div>
</article>
<article className="flex gap-4 group cursor-pointer">
<div className="w-24 h-24 bg-zinc-900 rounded overflow-hidden flex-shrink-0">
<img alt="Blog post thumb" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1592659762303-90081d34b277?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-xs text-amber-600 font-medium">
                  Set 28, 2023
                </span>
<h3 className="text-zinc-200 font-medium leading-tight my-1 group-hover:text-amber-500 transition-colors">
                  Mentalismo vs Magia Tradicional: As diferenças
                </h3>
<p className="text-xs text-zinc-500 line-clamp-2">
                  Entenda as nuances psicológicas do mentalismo e porque é a
                  escolha ideal para eventos corporativos.
                </p>
</div>
</article>
</div>
</div>
</section>
</main>

<footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div>
<h4 className="text-lg font-serif text-zinc-100 mb-2">Marco Pereira</h4>
<p className="text-zinc-500 text-sm max-w-xs">
              Ilusionismo profissional, sofisticado e memorável para os seus
              eventos em Portugal.
            </p>
</div>
<nav className="flex flex-wrap gap-6 text-sm text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="#sobre">
              Sobre
            </a>
<a className="hover:text-zinc-100 transition-colors" href="#servicos">
              Serviços
            </a>
<a className="hover:text-zinc-100 transition-colors" href="#portfolio">
              Portfolio
            </a>
<a className="hover:text-zinc-100 transition-colors" href="#contactos">
              Contactos
            </a>
<a className="hover:text-zinc-100 transition-colors" href="#">
              Política de Privacidade
            </a>
</nav>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 text-xs text-zinc-600">
<p>
            © 2024 Marco Pereira Ilusionista. Todos os direitos reservados.
          </p>
<div className="mt-4 md:mt-0 flex items-center gap-2">
<span>Designed with Magic</span>
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
