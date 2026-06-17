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



        // Language Switcher Logic
        function toggleLang() {
            const body = document.body;
            if (body.classList.contains('lang-pt')) {
                body.classList.remove('lang-pt');
                body.classList.add('lang-en');
                document.documentElement.lang = 'en';
            } else {
                body.classList.remove('lang-en');
                body.classList.add('lang-pt');
                document.documentElement.lang = 'pt';
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
      

<nav className="fixed top-0 w-full z-50 border-b border-stone-200/60 bg-stone-50/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tighter text-zinc-900 flex items-center gap-2" href="#">
<span className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center rounded-lg text-xs font-bold">M</span>
                MAYU
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#about">
<span data-lang="pt">Sobre</span><span data-lang="en">About</span>
</a>
<a className="hover:text-zinc-900 transition-colors" href="#services">
<span data-lang="pt">Casas</span><span data-lang="en">Homes</span>
</a>
<a className="hover:text-zinc-900 transition-colors" href="#process">
<span data-lang="pt">Processo</span><span data-lang="en">Process</span>
</a>
<a className="hover:text-zinc-900 transition-colors" href="#gallery">
<span data-lang="pt">Galeria</span><span data-lang="en">Gallery</span>
</a>
</div>

<div className="flex items-center gap-4">

<button className="text-xs font-semibold tracking-tight border border-zinc-200 rounded-md px-2 py-1 hover:bg-zinc-100 transition-colors" onclick="toggleLang()">
<span className="text-zinc-900">PT</span> <span className="text-zinc-300">|</span> <span className="text-zinc-400 hover:text-zinc-900">EN</span>
</button>
<a className="hidden md:flex bg-zinc-900 text-stone-50 text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-all hover:shadow-lg hover:shadow-zinc-200" href="#contact">
<span data-lang="pt">Contactar</span><span data-lang="en">Contact</span>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 fade-in-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-medium text-zinc-600">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span data-lang="pt">Construção Sustentável &amp; Rápida</span>
<span data-lang="en">Sustainable &amp; Rapid Construction</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-zinc-900 leading-[1.1]">
<span data-lang="pt">O futuro da habitação é <span className="text-zinc-400">modular</span>.</span>
<span data-lang="en">The future of living is <span className="text-zinc-400">modular</span>.</span>
</h1>
<p className="text-lg text-zinc-500 max-w-md leading-relaxed">
<span data-lang="pt">Soluções habitacionais pré-fabricadas que unem design minimalista, eficiência energética e conforto absoluto. A sua casa de sonho, pronta em semanas.</span>
<span data-lang="en">Prefabricated housing solutions combining minimalist design, energy efficiency, and absolute comfort. Your dream home, ready in weeks.</span>
</p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="flex items-center justify-center gap-2 bg-zinc-900 text-stone-50 px-6 py-3 rounded-full font-medium hover:bg-zinc-800 transition-all" href="#services">
<span data-lang="pt">Ver modelos</span><span data-lang="en">See models</span>
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
<a className="flex items-center justify-center gap-2 bg-white border border-zinc-200 text-zinc-900 px-6 py-3 rounded-full font-medium hover:bg-stone-50 transition-all" href="#contact">
<span data-lang="pt">Pedir orçamento</span><span data-lang="en">Request quote</span>
</a>
</div>
</div>
<div className="relative fade-in-up" style={{animationDelay: '0.3s'}}>
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-stone-200">
<img alt="Casa Modular MAYU" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl border border-stone-100 shadow-xl hidden lg:block">
<div className="flex items-center gap-4">
<div className="p-3 bg-stone-100 rounded-lg">
<iconify-icon className="text-zinc-900" icon="lucide:home" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">Status</p>
<p className="text-sm font-semibold text-zinc-900">
<span data-lang="pt">Pronta a habitar</span>
<span data-lang="en">Ready to move in</span>
</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-6">
<span data-lang="pt">Redefinimos a construção.</span>
<span data-lang="en">Redefining construction.</span>
</h2>
<div className="space-y-6 text-zinc-500 leading-relaxed">
<p>
<span data-lang="pt">Na MAYU, acreditamos que a qualidade de vida começa no espaço que habitamos. Somos uma empresa dedicada a soluções modulares que respeitam o meio ambiente sem comprometer a estética ou a durabilidade.</span>
<span data-lang="en">At MAYU, we believe quality of life begins in the space we inhabit. We are dedicated to modular solutions that respect the environment without compromising aesthetics or durability.</span>
</p>
<p>
<span data-lang="pt">A nossa missão é entregar casas chave-na-mão com rapidez recorde, utilizando materiais premium e processos de fabrico controlados que eliminam os imprevistos da construção tradicional.</span>
<span data-lang="en">Our mission is to deliver turnkey homes with record speed, using premium materials and controlled manufacturing processes that eliminate the uncertainties of traditional construction.</span>
</p>
</div>
<div className="grid grid-cols-2 gap-8 mt-10">
<div>
<iconify-icon className="text-zinc-900 mb-3" icon="lucide:leaf" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-zinc-900 mb-1">
<span data-lang="pt">Sustentabilidade</span><span data-lang="en">Sustainability</span>
</h3>
<p className="text-xs text-zinc-500">
<span data-lang="pt">Materiais ecológicos e eficiência A+.</span>
<span data-lang="en">Eco-materials and A+ efficiency.</span>
</p>
</div>
<div>
<iconify-icon className="text-zinc-900 mb-3" icon="lucide:clock" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-zinc-900 mb-1">
<span data-lang="pt">Rapidez</span><span data-lang="en">Speed</span>
</h3>
<p className="text-xs text-zinc-500">
<span data-lang="pt">Construção 3x mais rápida.</span>
<span data-lang="en">3x faster construction.</span>
</p>
</div>
<div>
<iconify-icon className="text-zinc-900 mb-3" icon="lucide:maximize" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-zinc-900 mb-1">
<span data-lang="pt">Flexibilidade</span><span data-lang="en">Flexibility</span>
</h3>
<p className="text-xs text-zinc-500">
<span data-lang="pt">Design adaptável ao terreno.</span>
<span data-lang="en">Design adaptable to terrain.</span>
</p>
</div>
<div>
<iconify-icon className="text-zinc-900 mb-3" icon="lucide:shield-check" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-zinc-900 mb-1">
<span data-lang="pt">Garantia</span><span data-lang="en">Warranty</span>
</h3>
<p className="text-xs text-zinc-500">
<span data-lang="pt">Qualidade certificada.</span>
<span data-lang="en">Certified quality.</span>
</p>
</div>
</div>
</div>
<div className="h-full min-h-[400px] rounded-2xl overflow-hidden relative group">
<img alt="Interior MAYU" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-2">
<span data-lang="pt">Modelos &amp; Serviços</span>
<span data-lang="en">Models &amp; Services</span>
</h2>
<p className="text-zinc-500 max-w-lg">
<span data-lang="pt">Explore a nossa coleção de espaços desenhados para a vida moderna.</span>
<span data-lang="en">Explore our collection of spaces designed for modern living.</span>
</p>
</div>
<a className="text-sm font-medium text-zinc-900 border-b border-zinc-300 pb-0.5 hover:border-zinc-900 transition-all" href="#contact">
<span data-lang="pt">Personalizar projeto →</span>
<span data-lang="en">Customize project →</span>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:shadow-xl transition-all duration-300">
<div className="aspect-[16/10] overflow-hidden">
<img alt="T1 Compact" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-zinc-900">Model T1</h3>
<span className="text-xs font-medium bg-stone-100 px-2 py-1 rounded text-zinc-600">35m²</span>
</div>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">
<span data-lang="pt">Compacto e funcional. Ideal para tiny-house, estúdio de jardim ou alojamento local.</span>
<span data-lang="en">Compact and functional. Ideal for tiny-house, garden studio or guest accommodation.</span>
</p>
<ul className="text-xs text-zinc-400 space-y-1 mb-6">
<li className="flex items-center gap-2"><iconify-icon icon="lucide:check"></iconify-icon> 1 Quarto / Bedroom</li>
<li className="flex items-center gap-2"><iconify-icon icon="lucide:check"></iconify-icon> Kitchenette</li>
</ul>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:shadow-xl transition-all duration-300">
<div className="aspect-[16/10] overflow-hidden">
<img alt="T2 Family" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-zinc-900">Model T2</h3>
<span className="text-xs font-medium bg-stone-100 px-2 py-1 rounded text-zinc-600">75m²</span>
</div>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">
<span data-lang="pt">O equilíbrio perfeito para casais ou pequenas famílias. Sala ampla em open-space.</span>
<span data-lang="en">The perfect balance for couples or small families. Large open-space living room.</span>
</p>
<ul className="text-xs text-zinc-400 space-y-1 mb-6">
<li className="flex items-center gap-2"><iconify-icon icon="lucide:check"></iconify-icon> 2 Quartos / Bedrooms</li>
<li className="flex items-center gap-2"><iconify-icon icon="lucide:check"></iconify-icon> Deck Exterior</li>
</ul>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:shadow-xl transition-all duration-300">
<div className="aspect-[16/10] overflow-hidden">
<img alt="T3 Villa" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-zinc-900">Model T3 Villa</h3>
<span className="text-xs font-medium bg-stone-100 px-2 py-1 rounded text-zinc-600">120m²</span>
</div>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">
<span data-lang="pt">Moradia permanente espaçosa. Acabamentos de luxo e integração total com a paisagem.</span>
<span data-lang="en">Spacious permanent residence. Luxury finishes and total integration with the landscape.</span>
</p>
<ul className="text-xs text-zinc-400 space-y-1 mb-6">
<li className="flex items-center gap-2"><iconify-icon icon="lucide:check"></iconify-icon> Suite Master</li>
<li className="flex items-center gap-2"><iconify-icon icon="lucide:check"></iconify-icon> Smart Home</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase mb-2 block">
<span data-lang="pt">Como funciona</span><span data-lang="en">How it works</span>
</span>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
<span data-lang="pt">Da ideia à chave na mão</span>
<span data-lang="en">From idea to turnkey</span>
</h2>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-stone-100 -z-10"></div>

<div className="relative pt-4">
<div className="w-16 h-16 bg-white border border-stone-200 rounded-xl flex items-center justify-center mb-6 shadow-sm mx-auto md:mx-0">
<iconify-icon className="text-zinc-800" icon="lucide:message-square" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">01. Briefing</h3>
<p className="text-sm text-zinc-500">
<span data-lang="pt">Escolha do modelo e definição das necessidades.</span>
<span data-lang="en">Model selection and needs definition.</span>
</p>
</div>

<div className="relative pt-4">
<div className="w-16 h-16 bg-white border border-stone-200 rounded-xl flex items-center justify-center mb-6 shadow-sm mx-auto md:mx-0">
<iconify-icon className="text-zinc-800" icon="lucide:pen-tool" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">02. Design</h3>
<p className="text-sm text-zinc-500">
<span data-lang="pt">Personalização dos acabamentos e layout.</span>
<span data-lang="en">Customization of finishes and layout.</span>
</p>
</div>

<div className="relative pt-4">
<div className="w-16 h-16 bg-white border border-stone-200 rounded-xl flex items-center justify-center mb-6 shadow-sm mx-auto md:mx-0">
<iconify-icon className="text-zinc-800" icon="lucide:hammer" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">03. Fabrico</h3>
<p className="text-sm text-zinc-500">
<span data-lang="pt">Construção off-site em ambiente controlado.</span>
<span data-lang="en">Off-site construction in controlled environment.</span>
</p>
</div>

<div className="relative pt-4">
<div className="w-16 h-16 bg-zinc-900 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-zinc-200 mx-auto md:mx-0">
<iconify-icon icon="lucide:key" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">04. Entrega</h3>
<p className="text-sm text-zinc-500">
<span data-lang="pt">Transporte, instalação e entrega final.</span>
<span data-lang="en">Transport, installation and final handover.</span>
</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="gallery">
<div className="max-w-7xl mx-auto px-6 mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Portfolio</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 h-[800px] md:h-[500px] w-full gap-2 px-2">
<div className="md:col-span-2 relative group overflow-hidden rounded-lg">
<img alt="Casa na Floresta" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
<p className="text-xs font-semibold text-zinc-900">Eco Lodge, Gerês</p>
</div>
</div>
<div className="relative group overflow-hidden rounded-lg">
<img alt="Interior Moderno" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="relative group overflow-hidden rounded-lg">
<img alt="Detalhes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="relative group overflow-hidden rounded-lg">
<img alt="Escritório" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1481253127861-534498168948?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="md:col-span-3 relative group overflow-hidden rounded-lg">
<img alt="Casa de Praia" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
<p className="text-xs font-semibold text-zinc-900">Beach House, Comporta</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-stone-100">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-12 text-center">
<span data-lang="pt">O que dizem os nossos clientes</span>
<span data-lang="en">What our clients say</span>
</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 bg-stone-50 rounded-2xl border border-stone-100">
<div className="flex gap-1 text-zinc-400 mb-4">
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">
<span data-lang="pt">"Impressionante a rapidez. Em 3 meses tínhamos a nossa casa de férias pronta. O isolamento térmico é fantástico."</span>
<span data-lang="en">"Impressive speed. In 3 months we had our vacation home ready. Thermal insulation is fantastic."</span>
</p>
<div>
<p className="text-sm font-semibold text-zinc-900">Ana &amp; Ricardo</p>
<p className="text-xs text-zinc-400">Coimbra, PT</p>
</div>
</div>
<div className="p-8 bg-stone-50 rounded-2xl border border-stone-100">
<div className="flex gap-1 text-zinc-400 mb-4">
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">
<span data-lang="pt">"Profissionalismo do início ao fim. A MAYU tratou de tudo. O design minimalista é exatamente o que procurávamos."</span>
<span data-lang="en">"Professionalism from start to finish. MAYU handled everything. The minimalist design is exactly what we were looking for."</span>
</p>
<div>
<p className="text-sm font-semibold text-zinc-900">Thomas Miller</p>
<p className="text-xs text-zinc-400">Algarve, PT</p>
</div>
</div>
<div className="p-8 bg-stone-50 rounded-2xl border border-stone-100">
<div className="flex gap-1 text-zinc-400 mb-4">
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">
<span data-lang="pt">"Excelente relação qualidade-preço. A solução modular permitiu-nos ter uma casa maior do que o orçamento inicial previa."</span>
<span data-lang="en">"Excellent value for money. The modular solution allowed us to have a bigger house than the initial budget predicted."</span>
</p>
<div>
<p className="text-sm font-semibold text-zinc-900">Sofia M.</p>
<p className="text-xs text-zinc-400">Porto, PT</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100" id="contact">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-white rounded-2xl shadow-xl shadow-stone-200 overflow-hidden border border-stone-200">
<div className="grid md:grid-cols-2">
<div className="p-8 md:p-12">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2">
<span data-lang="pt">Fale connosco</span>
<span data-lang="en">Get in touch</span>
</h2>
<p className="text-sm text-zinc-500 mb-8">
<span data-lang="pt">Preencha o formulário para um orçamento gratuito ou visita ao showroom.</span>
<span data-lang="en">Fill out the form for a free quote or showroom visit.</span>
</p>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">
<span data-lang="pt">Nome</span><span data-lang="en">Name</span>
</label>
<input className="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Email</label>
<input className="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">
<span data-lang="pt">Mensagem</span><span data-lang="en">Message</span>
</label>
<textarea className="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all" rows="4"></textarea>
</div>
<button className="w-full bg-zinc-900 text-white font-medium py-2.5 rounded-lg hover:bg-zinc-800 transition-all" type="button">
<span data-lang="pt">Enviar Pedido</span><span data-lang="en">Send Request</span>
</button>
</form>
</div>
<div className="bg-zinc-900 p-8 md:p-12 flex flex-col justify-between text-stone-300">
<div className="space-y-6">
<h3 className="text-white font-semibold">MAYU Headquarters</h3>
<div className="flex items-start gap-4">
<iconify-icon className="mt-1" icon="lucide:map-pin" width="18"></iconify-icon>
<p className="text-sm">
                                    Av. da Boavista, Porto<br/>
                                    Portugal
                                </p>
</div>
<div className="flex items-center gap-4">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
<p className="text-sm">hello@mayu-modular.com</p>
</div>
<div className="flex items-center gap-4">
<iconify-icon icon="lucide:phone" width="18"></iconify-icon>
<p className="text-sm">+351 222 000 000</p>
</div>
</div>
<div className="mt-12">
<p className="text-xs text-zinc-500 uppercase tracking-wider mb-4">Social</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="w-6 h-6 bg-zinc-900 text-white flex items-center justify-center rounded text-[10px] font-bold">M</span>
<span className="text-sm font-semibold text-zinc-900 tracking-tight">MAYU</span>
</div>
<p className="text-xs text-zinc-400">
                © 2023 MAYU Modular Solutions. 
                <span data-lang="pt">Todos os direitos reservados.</span>
<span data-lang="en">All rights reserved.</span>
</p>
<div className="flex gap-6 text-xs font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms</a>
</div>
</div>
</footer>


    </>
  );
}
