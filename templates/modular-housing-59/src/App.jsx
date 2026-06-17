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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-100 bg-white/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-zinc-900 flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-white rounded-sm"></div>
</div>
                MAYU
            </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium">
<a className="hover:text-zinc-900 transition-colors" href="#about">
<span data-lang="pt">Sobre</span><span data-lang="en">About</span>
</a>
<a className="hover:text-zinc-900 transition-colors" href="#services">
<span data-lang="pt">Modelos</span><span data-lang="en">Models</span>
</a>
<a className="hover:text-zinc-900 transition-colors" href="#process">
<span data-lang="pt">Processo</span><span data-lang="en">Process</span>
</a>
</div>
<div className="flex items-center gap-3">
<button className="text-[10px] font-semibold border border-zinc-200 rounded-md px-2 py-1 hover:bg-zinc-50 transition-colors flex items-center gap-1" onclick="toggleLang()">
<span className="text-zinc-900">PT</span>
<span className="text-zinc-300">/</span>
<span className="text-zinc-400">EN</span>
</button>
<a className="hidden md:block bg-zinc-900 text-white text-xs font-medium px-4 py-1.5 rounded-full hover:bg-zinc-800 transition-all" href="#contact">
<span data-lang="pt">Contato</span><span data-lang="en">Contact</span>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="animate-in" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-[10px] font-medium text-zinc-600 mb-6">
<span className="w-1 h-1 rounded-full bg-zinc-400 animate-pulse"></span>
<span data-lang="pt">Nova Coleção 2024</span><span data-lang="en">New 2024 Collection</span>
</div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-zinc-900 leading-[1.1] mb-6">
<span data-lang="pt">Casas que <span className="text-zinc-400">evoluem</span> com você.</span>
<span data-lang="en">Homes that <span className="text-zinc-400">evolve</span> with you.</span>
</h1>
<p className="text-base text-zinc-500 max-w-md leading-relaxed mb-8">
<span data-lang="pt">Design arquitetônico de alto padrão com entrega em tempo recorde. Construímos o seu refúgio modular com precisão industrial e alma artesanal.</span>
<span data-lang="en">High-end architectural design delivered in record time. We build your modular sanctuary with industrial precision and artisanal soul.</span>
</p>
<div className="flex flex-wrap gap-3">
<a className="bg-zinc-900 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-zinc-800 transition-all flex items-center gap-2" href="#services">
<span data-lang="pt">Explorar modelos</span><span data-lang="en">Explore models</span>
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="bg-white border border-zinc-200 text-zinc-900 text-sm font-medium px-6 py-2.5 rounded-full hover:bg-zinc-50 transition-all" href="#contact">
<span data-lang="pt">Consultoria grátis</span><span data-lang="en">Free consultation</span>
</a>
</div>
</div>
<div className="relative animate-in" style={{animationDelay: '0.3s'}}>
<div className="aspect-[5/4] rounded-2xl overflow-hidden shadow-sm border border-zinc-200">
<img alt="Modular Home" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
</div>
<div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl border border-zinc-100 shadow-xl hidden md:flex items-center gap-3">
<div className="w-10 h-10 bg-zinc-50 rounded-lg flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:home-2-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-[10px] uppercase tracking-widest font-semibold text-zinc-400">Eficiência</p>
<p className="text-xs font-semibold text-zinc-900">Classe A++ Certified</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-zinc-100 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12">
<div className="space-y-3">
<iconify-icon className="text-zinc-900" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-zinc-900">Eco-Conscious</h3>
<p className="text-xs leading-relaxed">Redução de 60% no desperdício de materiais em comparação à alvenaria.</p>
</div>
<div className="space-y-3">
<iconify-icon className="text-zinc-900" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-zinc-900">Agilidade</h3>
<p className="text-xs leading-relaxed">Do projeto à chave na mão em menos de 12 semanas garantidas por contrato.</p>
</div>
<div className="space-y-3">
<iconify-icon className="text-zinc-900" icon="solar:maximize-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-zinc-900">Escalável</h3>
<p className="text-xs leading-relaxed">Adicione módulos conforme sua família ou necessidade de espaço cresce.</p>
</div>
<div className="space-y-3">
<iconify-icon className="text-zinc-900" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-zinc-900">Durabilidade</h3>
<p className="text-xs leading-relaxed">Estrutura em aço galvanizado com garantia estrutural de 25 anos.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-3">
<span data-lang="pt">Nossos Modelos</span><span data-lang="en">Our Models</span>
</h2>
<p className="text-sm max-w-sm">Estruturas modulares pensadas para o conforto térmico e integração com a natureza.</p>
</div>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors">
<iconify-icon icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors">
<iconify-icon icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group cursor-pointer">
<div className="aspect-[16/11] rounded-xl overflow-hidden border border-zinc-100 mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold text-zinc-900">MAYU One</h3>
<p className="text-xs">Studio • 42m²</p>
</div>
<p className="text-xs font-medium text-zinc-900">€ 64.000</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[16/11] rounded-xl overflow-hidden border border-zinc-100 mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold text-zinc-900">MAYU Family</h3>
<p className="text-xs">2 Bedrooms • 85m²</p>
</div>
<p className="text-xs font-medium text-zinc-900">€ 112.000</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[16/11] rounded-xl overflow-hidden border border-zinc-100 mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold text-zinc-900">MAYU Villa</h3>
<p className="text-xs">3 Bedrooms • 140m²</p>
</div>
<p className="text-xs font-medium text-zinc-900">€ 185.000</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-zinc-400" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-xl mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">A jornada para sua nova casa.</h2>
<p className="text-sm leading-relaxed">Um processo simplificado, eliminando burocracias e imprevistos comuns da construção tradicional.</p>
</div>
<div className="grid md:grid-cols-4 gap-8">
<div className="space-y-4">
<div className="text-xs font-medium text-zinc-500">01</div>
<h3 className="text-sm font-semibold text-white">Configuração</h3>
<p className="text-xs leading-relaxed">Escolha o modelo base e personalize acabamentos, revestimentos e tecnologia smart-home.</p>
</div>
<div className="space-y-4">
<div className="text-xs font-medium text-zinc-500">02</div>
<h3 className="text-sm font-semibold text-white">Fabricação</h3>
<p className="text-xs leading-relaxed">Construção off-site em ambiente controlado, garantindo precisão milimétrica e zero umidade.</p>
</div>
<div className="space-y-4">
<div className="text-xs font-medium text-zinc-500">03</div>
<h3 className="text-sm font-semibold text-white">Logística</h3>
<p className="text-xs leading-relaxed">Os módulos são transportados prontos para o terreno, incluindo janelas e instalações elétricas.</p>
</div>
<div className="space-y-4">
<div className="text-xs font-medium text-zinc-500">04</div>
<h3 className="text-sm font-semibold text-white">Assemblagem</h3>
<p className="text-xs leading-relaxed">Montagem final e conexões em 48 horas. Sua casa pronta para morar no terceiro dia.</p>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1 relative">
<div className="aspect-square rounded-2xl bg-zinc-100 overflow-hidden border border-zinc-200">
<img className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1558444479-c84851830622?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="absolute -top-6 -right-6 w-32 h-32 bg-white/50 backdrop-blur-md rounded-full border border-zinc-100 flex flex-col items-center justify-center text-center p-4">
<iconify-icon className="text-zinc-900 mb-1" icon="solar:sun-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="text-[9px] font-semibold text-zinc-900 uppercase tracking-tighter">Energy Self-Sufficient</p>
</div>
</div>
<div className="order-1 lg:order-2 space-y-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-6">
<span data-lang="pt">Compromisso com o Amanhã</span>
<span data-lang="en">Commitment to Tomorrow</span>
</h2>
<p className="text-sm leading-relaxed max-w-md">Não construímos apenas casas; criamos ecossistemas autônomos que respeitam o meio ambiente e integram tecnologia de ponta para sua conveniência.</p>
</div>
<div className="space-y-8">
<div className="flex gap-6">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-900" icon="solar:water-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 mb-1 uppercase tracking-wider">Water Management</h4>
<p className="text-xs leading-relaxed">Sistemas integrados de filtragem e reaproveitamento de águas pluviais para irrigação e sanitários.</p>
</div>
</div>
<div className="flex gap-6">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-900" icon="solar:smart-home-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 mb-1 uppercase tracking-wider">Passive Cooling</h4>
<p className="text-xs leading-relaxed">Design inteligente que utiliza ventilação cruzada natural, reduzindo o uso de climatização em 45%.</p>
</div>
</div>
<div className="flex gap-6">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-900" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 mb-1 uppercase tracking-wider">Smart Grid Ready</h4>
<p className="text-xs leading-relaxed">Preparado para painéis fotovoltaicos e baterias de armazenamento doméstico de última geração.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12">
<div className="space-y-4">
<div className="flex gap-1">
<iconify-icon className="text-zinc-900" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<iconify-icon className="text-zinc-900" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<iconify-icon className="text-zinc-900" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<iconify-icon className="text-zinc-900" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<iconify-icon className="text-zinc-900" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</div>
<p className="text-sm text-zinc-900 italic leading-relaxed">"O nível de acabamento superou minhas expectativas. A casa é extremamente silenciosa e mantém a temperatura perfeita."</p>
<div className="text-xs font-semibold text-zinc-400">— Ricardo Santos, Porto</div>
</div>
<div className="space-y-4">
<div className="flex gap-1">
<iconify-icon className="text-zinc-900" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<iconify-icon className="text-zinc-900" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<iconify-icon className="text-zinc-900" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<iconify-icon className="text-zinc-900" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<iconify-icon className="text-zinc-900" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</div>
<p className="text-sm text-zinc-900 italic leading-relaxed">"Poder expandir meu escritório com um novo módulo foi o que me fez escolher a MAYU. Praticidade incomparável."</p>
<div className="text-xs font-semibold text-zinc-400">— Elena M., Lisboa</div>
</div>
<div className="space-y-4">
<div className="flex gap-1">
<iconify-icon className="text-zinc-900" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<iconify-icon className="text-zinc-900" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<iconify-icon className="text-zinc-900" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<iconify-icon className="text-zinc-900" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<iconify-icon className="text-zinc-900" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</div>
<p className="text-sm text-zinc-900 italic leading-relaxed">"O processo de licenciamento foi muito mais simples do que eu imaginava com o suporte técnico da equipe."</p>
<div className="text-xs font-semibold text-zinc-400">— Thomas Weber, Algarve</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="contact">
<div className="max-w-4xl mx-auto">
<div className="bg-white border border-zinc-100 rounded-3xl shadow-sm overflow-hidden flex flex-col md:flex-row">
<div className="flex-1 p-8 md:p-12">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2">Inicie seu projeto</h2>
<p className="text-xs mb-8">Nossa equipe entrará em contato em até 24h úteis.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="bg-zinc-50 border border-zinc-100 rounded-lg px-4 py-2.5 text-xs focus:outline-none focus:border-zinc-300 w-full transition-all" placeholder="Nome" type="text"/>
<input className="bg-zinc-50 border border-zinc-100 rounded-lg px-4 py-2.5 text-xs focus:outline-none focus:border-zinc-300 w-full transition-all" placeholder="Email" type="email"/>
</div>
<select className="bg-zinc-50 border border-zinc-100 rounded-lg px-4 py-2.5 text-xs focus:outline-none focus:border-zinc-300 w-full transition-all appearance-none">
<option>Interesse em: MAYU One</option>
<option>Interesse em: MAYU Family</option>
<option>Interesse em: MAYU Villa</option>
<option>Projeto sob medida</option>
</select>
<textarea className="bg-zinc-50 border border-zinc-100 rounded-lg px-4 py-2.5 text-xs focus:outline-none focus:border-zinc-300 w-full transition-all" placeholder="Como podemos ajudar?" rows="4"></textarea>
<button className="bg-zinc-900 text-white text-xs font-medium px-8 py-3 rounded-full hover:bg-zinc-800 transition-all w-full">Solicitar orçamento</button>
</form>
</div>
<div className="md:w-72 bg-zinc-50 p-8 md:p-12 border-l border-zinc-100 space-y-8">
<div>
<p className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-2">Showroom</p>
<p className="text-xs text-zinc-900">Rua da Arquitetura, 404<br/>Matosinhos, Porto</p>
</div>
<div>
<p className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-2">Connect</p>
<div className="flex flex-col gap-2 text-xs text-zinc-900">
<a className="hover:underline" href="#">Instagram</a>
<a className="hover:underline" href="#">LinkedIn</a>
<a className="hover:underline" href="#">WhatsApp</a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-zinc-100 bg-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-zinc-900 rounded flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
</div>
<span className="text-xs font-semibold tracking-tighter text-zinc-900">MAYU</span>
</div>
<p className="text-[10px] text-zinc-400">© 2024 MAYU Modular. Built for the future of living.</p>
<div className="flex gap-6">
<a className="text-[10px] font-medium hover:text-zinc-900" href="#">Privacidade</a>
<a className="text-[10px] font-medium hover:text-zinc-900" href="#">Termos</a>
</div>
</div>
</footer>


    </>
  );
}
