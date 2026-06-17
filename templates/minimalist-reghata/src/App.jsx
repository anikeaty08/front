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
      

<div className="bg-zinc-900 text-zinc-100 text-xs py-2 overflow-hidden relative">
<div className="flex animate-marquee whitespace-nowrap justify-center gap-8 md:gap-16">
<span className="tracking-wide">GANHE 10% OFF NA PRIMEIRA COMPRA</span>
<span className="tracking-wide hidden md:inline">FRETE GRÁTIS PARA TODO BRASIL</span>
<span className="tracking-wide hidden lg:inline">PARCELAMENTO EM ATÉ 6X</span>
</div>
</div>

<header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-200">
<div className="max-w-[1440px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

<button className="md:hidden p-2 -ml-2 text-zinc-600">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>

<nav className="hidden md:flex gap-6 text-xs tracking-wider text-zinc-500 font-medium">
<a className="hover:text-zinc-900 transition-colors" href="#">HOME</a>
<a className="hover:text-zinc-900 transition-colors" href="#">NOVA COLEÇÃO</a>
<a className="hover:text-zinc-900 transition-colors" href="#">MASCULINO</a>
<a className="hover:text-zinc-900 transition-colors" href="#">FEMININO</a>
</nav>

<a className="absolute left-1/2 -translate-x-1/2 flex items-center" href="#">
<span className="text-xl font-semibold tracking-tighter uppercase">REGHATA</span>
</a>

<div className="flex items-center gap-4 text-zinc-600">
<a className="hidden md:block hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="hidden md:block hover:text-zinc-900 transition-colors" href="#" title="Favoritos">
<iconify-icon icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="hover:text-zinc-900 transition-colors" href="#" title="Conta">
<iconify-icon icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="relative hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:bag-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="absolute -top-1 -right-1.5 bg-zinc-900 text-white text-[10px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-medium">0</span>
</a>
</div>
</div>
</header>

<main className="flex-grow">

<section className="relative w-full h-[60vh] md:h-[80vh] bg-zinc-100 flex items-center justify-center overflow-hidden">
<img alt="Nova Coleção" className="absolute inset-0 w-full h-full object-cover object-top opacity-90" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
<div className="w-2 h-2 rounded-full bg-white"></div>
<div className="w-2 h-2 rounded-full bg-white/40"></div>
<div className="w-2 h-2 rounded-full bg-white/40"></div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-4 md:px-8 py-16 md:py-24">
<div className="flex items-end justify-between mb-8">
<h2 className="text-xl md:text-2xl tracking-tight font-medium uppercase text-zinc-900">
<span className="text-zinc-400 font-normal">NOVIDADES |</span> MINIMALIST IS EVERYTHING
                </h2>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-colors"><iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon></button>
<button className="w-10 h-10 border border-zinc-200 flex items-center justify-center text-zinc-900 transition-colors"><iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

<a className="group flex flex-col gap-3" href="#">
<div className="relative aspect-[3/4] bg-zinc-100 overflow-hidden">
<img alt="Look 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</a>

<a className="group flex flex-col gap-3" href="#">
<div className="relative aspect-[3/4] bg-zinc-100 overflow-hidden">
<img alt="Look 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
</a>

<a className="group flex flex-col gap-3 hidden md:flex" href="#">
<div className="relative aspect-[3/4] bg-zinc-100 overflow-hidden">
<img alt="Look 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
</a>

<a className="group flex flex-col gap-3 hidden md:flex" href="#">
<div className="relative aspect-[3/4] bg-zinc-100 overflow-hidden">
<img alt="Look 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
</a>
</div>
</section>

<div className="border-y border-zinc-100 py-6 md:py-8 overflow-hidden bg-zinc-50/50">
<div className="flex overflow-x-auto no-scrollbar max-w-[1440px] mx-auto px-4 md:px-8 gap-8 md:gap-16 items-center snap-x">
<div className="flex items-center gap-3 snap-start shrink-0">
<iconify-icon className="text-zinc-400" icon="solar:card-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="text-sm tracking-wide"><span className="font-medium text-zinc-900">PARCELAMENTO</span> <span className="text-zinc-500">em até 6x</span></p>
</div>
<div className="flex items-center gap-3 snap-start shrink-0">
<iconify-icon className="text-zinc-400" icon="solar:gift-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="text-sm tracking-wide"><span className="font-medium text-zinc-900">BRINDE EXCLUSIVO</span> <span className="text-zinc-500">em compras</span></p>
</div>
<div className="flex items-center gap-3 snap-start shrink-0">
<iconify-icon className="text-zinc-400" icon="solar:refresh-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="text-sm tracking-wide"><span className="font-medium text-zinc-900">TROCA FÁCIL</span> <span className="text-zinc-500">primeira grátis</span></p>
</div>
<div className="flex items-center gap-3 snap-start shrink-0">
<iconify-icon className="text-zinc-400" icon="solar:tag-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="text-sm tracking-wide"><span className="font-medium text-zinc-900">10% OFF</span> <span className="text-zinc-500">na primeira compra</span></p>
</div>
<div className="flex items-center gap-3 snap-start shrink-0">
<iconify-icon className="text-zinc-400" icon="solar:box-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="text-sm tracking-wide"><span className="font-medium text-zinc-900">FRETE GRÁTIS</span> <span className="text-zinc-500">todo Brasil</span></p>
</div>
</div>
</div>

<section className="max-w-[1440px] mx-auto px-4 md:px-8 py-16 md:py-24">
<div className="flex items-end justify-between mb-8">
<h2 className="text-xl md:text-2xl tracking-tight font-medium uppercase text-zinc-900">
<span className="text-zinc-400 font-normal">WHTE |</span> MAIS VENDIDOS
                </h2>
<a className="text-sm text-zinc-500 hover:text-zinc-900 font-medium tracking-wide border-b border-transparent hover:border-zinc-900 transition-all hidden md:block" href="#">Ver todos</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 md:gap-8">

<div className="group flex flex-col">
<a className="relative aspect-[3/4] bg-zinc-100 overflow-hidden mb-4 block" href="#">
<img alt="Regata Nadador" className="w-full h-full object-cover object-top mix-blend-multiply" src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</a>
<div className="flex flex-col flex-grow">
<h3 className="text-sm text-zinc-900 leading-snug"><a href="#">Regata Nadador Canelada Off White | WHTE</a></h3>
<p className="text-xs text-zinc-400 mt-1 mb-3">FREGRGR02AREIAW</p>
<div className="mt-auto">
<p className="text-sm font-medium">R$ 189,00</p>
<p className="text-xs text-zinc-500 mt-0.5">6x R$ 31,50 sem juros</p>
</div>
<button className="mt-4 w-full border border-zinc-200 py-3 text-xs uppercase tracking-widest text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors font-medium">Comprar</button>
</div>
</div>

<div className="group flex flex-col">
<a className="relative aspect-[3/4] bg-zinc-100 overflow-hidden mb-4 block" href="#">
<img alt="Camiseta Cropped" className="w-full h-full object-cover object-top mix-blend-multiply" src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</a>
<div className="flex flex-col flex-grow">
<h3 className="text-sm text-zinc-900 leading-snug"><a href="#">Camiseta Cropped PIMA com Logo | WHTE</a></h3>
<p className="text-xs text-zinc-400 mt-1 mb-3">FCAMCSGR02PIMAW</p>
<div className="mt-auto">
<p className="text-sm font-medium">R$ 220,00</p>
<p className="text-xs text-zinc-500 mt-0.5">6x R$ 36,67 sem juros</p>
</div>
<button className="mt-4 w-full border border-zinc-200 py-3 text-xs uppercase tracking-widest text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors font-medium">Comprar</button>
</div>
</div>

<div className="group flex flex-col hidden md:flex">
<a className="relative aspect-[3/4] bg-zinc-100 overflow-hidden mb-4 block" href="#">
<img alt="Regata Slim" className="w-full h-full object-cover object-top mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</a>
<div className="flex flex-col flex-grow">
<h3 className="text-sm text-zinc-900 leading-snug"><a href="#">Regata Nadador Canelada Slim Fit | WHTE</a></h3>
<p className="text-xs text-zinc-400 mt-1 mb-3">FREGSGU01CUPUIW</p>
<div className="mt-auto">
<p className="text-sm font-medium">R$ 189,00</p>
<p className="text-xs text-zinc-500 mt-0.5">6x R$ 31,50 sem juros</p>
</div>
<button className="mt-4 w-full border border-zinc-200 py-3 text-xs uppercase tracking-widest text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors font-medium">Comprar</button>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="text-sm text-zinc-500 hover:text-zinc-900 font-medium tracking-wide inline-block border-b border-zinc-300 pb-0.5" href="#">Ver todos</a>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-4 md:px-8 pb-16 md:pb-24">
<div className="aspect-[21/9] md:aspect-[3/1] bg-zinc-100 relative overflow-hidden flex items-center justify-center">
<img alt="Fragrância" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-black/10"></div>
<div className="relative z-10 text-center text-white p-8">
<h2 className="text-2xl md:text-4xl font-medium tracking-tight uppercase mb-4 drop-shadow-md">Fragrância Exclusiva</h2>
<a className="inline-block bg-white text-zinc-900 text-xs font-medium tracking-widest uppercase px-8 py-3 hover:bg-zinc-100 transition-colors" href="#">Descobrir</a>
</div>
</div>
</section>

<section className="bg-zinc-50 py-16 md:py-24 border-y border-zinc-100">
<div className="max-w-2xl mx-auto px-4 text-center">
<div className="text-xl font-semibold tracking-tighter uppercase mb-6 text-zinc-900">REGHATA</div>
<p className="text-base md:text-lg text-zinc-600 mb-6 font-medium leading-relaxed">Bem-vindo ao universo REGHATA, onde estilo e qualidade se unem para criar uma experiência única de moda.</p>
<p className="text-sm md:text-base text-zinc-500 leading-relaxed">Minimalismo elevado, luxo inteligente, sem o preço de grife. A Reghata é mais do que apenas roupas; é uma expressão de personalidade, elegância e conforto com uma linha completa de produtos essenciais.</p>
</div>
</section>

<section className="max-w-xl mx-auto px-4 py-16 md:py-24">
<div className="text-center mb-10">
<h2 className="text-lg font-medium tracking-tight text-zinc-900 mb-2 uppercase">Cadastre-se na nossa newsletter</h2>
<p className="text-sm text-zinc-500">Inscreva-se para receber atualizações sobre as últimas coleções e novidades.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<input className="w-full border-b border-zinc-300 py-3 text-sm text-zinc-900 placeholder-zinc-400 bg-transparent focus:outline-none focus:border-zinc-900 transition-colors rounded-none" placeholder="Nome" type="text"/>
<input className="w-full border-b border-zinc-300 py-3 text-sm text-zinc-900 placeholder-zinc-400 bg-transparent focus:outline-none focus:border-zinc-900 transition-colors rounded-none" placeholder="E-mail" type="email"/>
</div>
<input className="w-full border-b border-zinc-300 py-3 text-sm text-zinc-900 placeholder-zinc-400 bg-transparent focus:outline-none focus:border-zinc-900 transition-colors rounded-none" placeholder="Seu número" type="tel"/>
<div className="flex items-center gap-3 pt-2">
<div className="relative flex items-center justify-center w-4 h-4 shrink-0">
<input className="custom-checkbox absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer" id="terms" type="checkbox"/>
<div className="checkbox-bg absolute inset-0 border border-zinc-300 rounded-[2px] transition-colors pointer-events-none flex items-center justify-center">
<iconify-icon className="checkbox-icon text-white opacity-0 transition-opacity" icon="solar:check-linear" style={{strokeWidth: '2'}} width="12"></iconify-icon>
</div>
</div>
<label className="text-xs text-zinc-500 cursor-pointer" htmlFor="terms">Ao enviar você concorda com os termos de envios.*</label>
</div>
<button className="w-full bg-zinc-900 text-white text-xs font-medium tracking-widest uppercase py-4 hover:bg-zinc-800 transition-colors mt-4" type="button">Cadastrar</button>
</form>
</section>
</main>

<footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-[1440px] mx-auto px-4 md:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-16">

<div>
<h3 className="text-xs font-semibold tracking-widest text-zinc-900 uppercase mb-5">Sobre</h3>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Quem Somos</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Perguntas Frequentes</a></li>
</ul>
</div>

<div>
<h3 className="text-xs font-semibold tracking-widest text-zinc-900 uppercase mb-5">Meus Dados</h3>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Minha Conta</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Meus Pedidos</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Lista de Desejos</a></li>
</ul>
</div>

<div>
<h3 className="text-xs font-semibold tracking-widest text-zinc-900 uppercase mb-5">Políticas</h3>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Troca e Devolução</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Entrega e Frete</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Pagamento</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Privacidade</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Termos de Uso</a></li>
</ul>
</div>

<div>
<h3 className="text-xs font-semibold tracking-widest text-zinc-900 uppercase mb-5">Contato</h3>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Fale Conosco</a></li>
<li><a className="hover:text-zinc-900 transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:phone-linear" width="16"></iconify-icon> (11) 99490-2353</a></li>
<li><a className="text-zinc-900 font-medium hover:underline" href="mailto:contato@reghata.com.br">contato@reghata.com.br</a></li>
</ul>
<div className="flex gap-4 mt-6">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-200 gap-6">
<div className="text-[10px] md:text-xs text-zinc-400 text-center md:text-left leading-relaxed">
                    2023 REGHATA. All rights reserved | CNPJ: 52.438.409/0001-98<br/>
<span className="mt-1 block">A Reghata utiliza cookies de acordo com nossa política de privacidade.</span>
</div>
<div className="flex items-center gap-4 text-zinc-300">
<iconify-icon icon="solar:lock-password-linear" style={{strokeWidth: '1'}} width="24"></iconify-icon>
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1'}} width="24"></iconify-icon>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 bg-zinc-900 text-white p-3 rounded-full shadow-lg hover:scale-105 transition-transform z-50 flex items-center justify-center" href="#">
<iconify-icon icon="solar:phone-linear" width="24"></iconify-icon>
</a>

    </>
  );
}
