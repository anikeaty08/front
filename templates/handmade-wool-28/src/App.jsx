import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
petroleum: '#0e3a47', // Primary Luxury Tone
petroleumLight: '#2c5661',
aquaSoft: '#d6e4e3', // Secondary subtle accent
ivory: '#fdfcf8', // Warm off-white background
sand: '#f3f1eb', // Light sand
stoneText: '#334155', // Deep blue-gray text
borderSubtle: 'rgba(14, 58, 71, 0.08)' // Ultra subtle borders
},
fontFamily: {
serif: ['"Cormorant Garamond"', 'serif'], // Body
display: ['"Playfair Display"', 'serif'], // Headlines
},
letterSpacing: {
'editorial': '0.05em',
'title': '0.02em',
},
transitionDuration: {
'400': '400ms',
'800': '800ms',
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Intersection Observer for Scroll Reveal + Blur Effect
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15 // Trigger when 15% of element is visible
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-blur');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-ivory/95 backdrop-blur-sm border-b border-borderSubtle transition-all duration-700">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

<nav className="hidden md:flex items-center gap-10 text-lg font-medium tracking-wide text-stoneText/80">

<div className="group relative h-20 flex items-center">
<a className="hover:text-petroleum transition-colors duration-500 cursor-pointer py-2" href="#shop">Shop</a>

<div className="absolute top-full left-0 w-64 bg-ivory border border-borderSubtle shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 p-6 flex flex-col gap-3 z-50">
<a className="block text-lg hover:text-petroleum hover:translate-x-1 transition-all duration-300" href="#">Bolsas</a>
<a className="block text-lg hover:text-petroleum hover:translate-x-1 transition-all duration-300" href="#">Roupas de Banho</a>
<a className="block text-lg hover:text-petroleum hover:translate-x-1 transition-all duration-300" href="#">Vestidos</a>
<a className="block text-lg hover:text-petroleum hover:translate-x-1 transition-all duration-300" href="#">Acessórios</a>
<div className="h-px bg-borderSubtle w-full my-1"></div>
<a className="block text-lg italic text-petroleum/80 hover:text-petroleum" href="#">Peças Artesanais</a>
</div>
</div>
<a className="hover:text-petroleum transition-colors duration-500" href="#collections">Coleções</a>
<a className="hover:text-petroleum transition-colors duration-500" href="#atelier">Ateliê</a>
</nav>

<div className="absolute left-1/2 transform -translate-x-1/2 text-center">
<a className="font-display text-3xl md:text-4xl tracking-tight text-petroleum" href="#">mileart</a>
</div>

<div className="flex items-center gap-6 md:gap-8">
<nav className="hidden md:flex items-center gap-6 text-lg font-medium tracking-wide text-stoneText/80 mr-4">
<a className="hover:text-petroleum transition-colors duration-500" href="#about">Sobre</a>
<a className="hover:text-petroleum transition-colors duration-500" href="#contact">Contato</a>
</nav>

<div className="search-wrapper flex items-center justify-end relative group">
<input className="search-input w-0 group-hover:w-48 bg-transparent border-b border-transparent group-hover:border-petroleum/30 focus:outline-none text-right px-2 py-1 text-petroleum transition-all duration-700 ease-out font-serif text-lg" placeholder="Buscar no ateliê…" type="text"/>
<button className="text-stoneText hover:text-petroleum transition-colors duration-300 pl-2">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
</button>
</div>

<a className="hidden md:block text-stoneText hover:text-petroleum transition-colors duration-300" href="#">
<i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i>
</a>

<div className="relative group h-20 flex items-center">
<a className="text-stoneText hover:text-petroleum transition-colors relative block py-2" href="#">
<i className="w-5 h-5" data-lucide="shopping-bag" strokeWidth="1.5"></i>
<span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-petroleum rounded-full"></span>
</a>

<div className="absolute top-full right-0 w-80 bg-ivory border border-borderSubtle shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 p-6 z-50">
<div className="flex gap-4 mb-4 pb-4 border-b border-borderSubtle">
<img alt="Thumbnail" className="w-16 h-20 object-cover rounded-sm" src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col justify-center">
<span className="font-display text-lg text-petroleum leading-none mb-1">Bolsa de Tricô</span>
<span className="text-stone-500 text-sm italic">Areia Natural</span>
<span className="text-stoneText mt-1">1 x R$ 450,00</span>
</div>
</div>
<div className="flex justify-between items-center mb-4 text-lg font-display">
<span>Subtotal</span>
<span>R$ 450,00</span>
</div>
<button className="w-full py-2.5 bg-petroleum text-ivory border border-petroleum text-sm tracking-widest uppercase hover:bg-petroleumLight transition-colors duration-300">Finalizar Compra</button>
</div>
</div>

<button className="md:hidden text-stoneText hover:text-petroleum">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>

<section className="relative w-full h-[80vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">

<div className="absolute inset-0 parallax-bg z-0" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1628147879590-f20367252819?q=80&amp'}}></div>

<div className="absolute inset-0 bg-gradient-to-b from-petroleum/10 via-ivory/20 to-ivory/90 z-0 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-ivory/20 z-0"></div>
<div className="relative z-10 max-w-4xl mx-auto mt-12">
<h1 className="reveal-blur font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-petroleum mb-6 font-light leading-none">
                Arte feita à mão, <br/> <span className="italic font-normal">com tempo e intenção</span>
</h1>
<p className="reveal-blur text-xl md:text-2xl text-stoneText/90 font-light mb-12 max-w-xl mx-auto leading-relaxed" style={{transitionDelay: '200ms'}}>
                Peças autorais em lã que unem delicadeza, elegância e autenticidade.
            </p>
<div className="reveal-blur flex flex-col md:flex-row gap-8 justify-center items-center" style={{transitionDelay: '400ms'}}>
<a className="group relative px-10 py-3 overflow-hidden border border-petroleum text-petroleum transition-all duration-500 hover:bg-petroleum" href="#collections">
<span className="relative z-10 font-medium tracking-widest text-sm uppercase group-hover:text-ivory transition-colors duration-500">Explorar Coleções</span>
</a>
<a className="group text-stone-600 hover:text-petroleum transition-colors duration-300 flex items-center gap-2" href="#atelier">
<span className="font-serif text-lg italic border-b border-transparent group-hover:border-petroleum/30 pb-0.5">Conheça o ateliê</span>
<i className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-ivory px-6 md:px-12" id="collections">
<div className="max-w-screen-2xl mx-auto space-y-32">

<div className="reveal-blur grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="relative w-full h-[600px] overflow-hidden group rounded-sm">
<img alt="Bolsas de Tricô" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&amp;w=1676&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-petroleum/5 mix-blend-multiply"></div>
</div>
<div className="text-center md:text-left">
<span className="block text-stone-400 tracking-widest text-xs uppercase mb-6">Coleção Manual</span>
<h2 className="font-display text-5xl md:text-6xl text-petroleum mb-6 tracking-tight">Bolsas de Tricô</h2>
<p className="text-xl text-stoneText leading-relaxed mb-10 max-w-md mx-auto md:ml-0 font-light">
                        Estruturas macias e texturas orgânicas. Cada ponto conta uma história de paciência e elegância natural.
                    </p>
<a className="inline-block border-b border-petroleum text-petroleum pb-1 text-xl italic hover:text-petroleumLight transition-colors" href="#">Ver mais</a>
</div>
</div>

<div className="reveal-blur grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="order-2 md:order-1 text-center md:text-right">
<span className="block text-stone-400 tracking-widest text-xs uppercase mb-6">Verão Atemporal</span>
<h2 className="font-display text-5xl md:text-6xl text-petroleum mb-6 tracking-tight">Roupas de Banho</h2>
<p className="text-xl text-stoneText leading-relaxed mb-10 max-w-md mx-auto md:ml-auto md:mr-0 font-light">
                        Crochê delicado para dias de sol. Modelagens que abraçam o corpo com sofisticação e leveza.
                    </p>
<a className="inline-block border-b border-petroleum text-petroleum pb-1 text-xl italic hover:text-petroleumLight transition-colors" href="#">Ver mais</a>
</div>
<div className="order-1 md:order-2 relative w-full h-[600px] overflow-hidden group rounded-sm">
<img alt="Roupas de Banho Artesanais" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&amp;w=1770&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-petroleum/5 mix-blend-multiply"></div>
</div>
</div>

<div className="reveal-blur grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="relative w-full h-[600px] overflow-hidden group rounded-sm">
<img alt="Vestidos em Lã" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=1770&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-petroleum/5 mix-blend-multiply"></div>
</div>
<div className="text-center md:text-left">
<span className="block text-stone-400 tracking-widest text-xs uppercase mb-6">Inverno Elegante</span>
<h2 className="font-display text-5xl md:text-6xl text-petroleum mb-6 tracking-tight">Vestidos em Lã</h2>
<p className="text-xl text-stoneText leading-relaxed mb-10 max-w-md mx-auto md:ml-0 font-light">
                        O abraço quente da lã em silhuetas femininas e fluídas. Conforto que se veste como luxo.
                    </p>
<a className="inline-block border-b border-petroleum text-petroleum pb-1 text-xl italic hover:text-petroleumLight transition-colors" href="#">Ver mais</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50/50 px-6 md:px-12 border-t border-borderSubtle" id="shop">
<div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-16">

<aside className="w-full lg:w-64 flex-shrink-0 reveal-blur">
<h3 className="font-display text-2xl text-petroleum mb-8">Filtros</h3>
<div className="space-y-8 text-lg">
<div>
<h4 className="font-serif font-medium text-stoneText mb-3">Categorias</h4>
<ul className="space-y-2 text-stone-500 text-base">
<li className="hover:text-petroleum cursor-pointer transition-colors">Todos</li>
<li className="hover:text-petroleum cursor-pointer transition-colors">Bolsas</li>
<li className="hover:text-petroleum cursor-pointer transition-colors">Vestidos</li>
<li className="hover:text-petroleum cursor-pointer transition-colors">Acessórios</li>
</ul>
</div>
<div className="w-full h-px bg-borderSubtle"></div>
<div>
<h4 className="font-serif font-medium text-stoneText mb-3">Cores</h4>
<div className="flex gap-2">
<span className="w-5 h-5 rounded-full bg-[#2c3e50] cursor-pointer ring-1 ring-offset-2 ring-transparent hover:ring-stone-300"></span>
<span className="w-5 h-5 rounded-full bg-[#f5f5dc] cursor-pointer ring-1 ring-offset-2 ring-transparent hover:ring-stone-300"></span>
<span className="w-5 h-5 rounded-full bg-[#d2b48c] cursor-pointer ring-1 ring-offset-2 ring-transparent hover:ring-stone-300"></span>
</div>
</div>
</div>
</aside>

<div className="flex-1">
<div className="flex justify-between items-end mb-10 reveal-blur">
<h2 className="font-display text-3xl md:text-4xl text-petroleum">Destaques do Ateliê</h2>
<span className="text-stone-400 italic font-serif">Mostrando 3 de 12 peças</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-16">

<article className="reveal-blur group flex flex-col">
<div className="relative w-full aspect-[4/5] bg-ivory overflow-hidden rounded-sm border-[0.5px] border-borderSubtle">

<img alt="Suéter de Lã Merino" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?q=80&amp;w=1665&amp;auto=format&amp;fit=crop"/>

<button className="absolute top-4 right-4 p-2 text-stoneText/70 hover:text-red-800 transition-colors bg-ivory/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 duration-500">
<i className="w-4 h-4" data-lucide="heart" strokeWidth="1.5"></i>
</button>
</div>
<div className="mt-6 flex flex-col items-start space-y-1">
<h3 className="font-display text-xl text-stoneText tracking-tight group-hover:text-petroleum transition-colors">Suéter Trama Aberta</h3>
<p className="text-petroleum text-lg font-medium">R$ 680,00</p>

<div className="flex gap-2 pt-2">
<span className="w-2.5 h-2.5 rounded-full bg-[#f3f1eb] border border-stone-200"></span>
<span className="w-2.5 h-2.5 rounded-full bg-[#8b7e74]"></span>
</div>
</div>

<div className="mt-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
<button className="flex-1 py-2 border border-borderSubtle text-stoneText text-xs uppercase tracking-widest hover:border-petroleum hover:text-petroleum transition-colors">Adicionar</button>
<button className="flex-1 py-2 bg-petroleum text-ivory border border-petroleum text-xs uppercase tracking-widest hover:bg-petroleumLight transition-colors">Comprar</button>
</div>
</article>

<article className="reveal-blur group flex flex-col" style={{transitionDelay: '100ms'}}>
<div className="relative w-full aspect-[4/5] bg-ivory overflow-hidden rounded-sm border-[0.5px] border-borderSubtle">
<img alt="Cardigan Longo" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&amp;w=1770&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-4 right-4 p-2 text-stoneText/70 hover:text-red-800 transition-colors bg-ivory/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 duration-500">
<i className="w-4 h-4" data-lucide="heart" strokeWidth="1.5"></i>
</button>
</div>
<div className="mt-6 flex flex-col items-start space-y-1">
<h3 className="font-display text-xl text-stoneText tracking-tight group-hover:text-petroleum transition-colors">Cardigan Silhouette</h3>
<p className="text-petroleum text-lg font-medium">R$ 890,00</p>
<div className="flex gap-2 pt-2">
<span className="w-2.5 h-2.5 rounded-full bg-[#4a4a4a]"></span>
</div>
</div>
<div className="mt-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
<button className="flex-1 py-2 border border-borderSubtle text-stoneText text-xs uppercase tracking-widest hover:border-petroleum hover:text-petroleum transition-colors">Adicionar</button>
<button className="flex-1 py-2 bg-petroleum text-ivory border border-petroleum text-xs uppercase tracking-widest hover:bg-petroleumLight transition-colors">Comprar</button>
</div>
</article>

<article className="reveal-blur group flex flex-col" style={{transitionDelay: '200ms'}}>
<div className="relative w-full aspect-[4/5] bg-ivory overflow-hidden rounded-sm border-[0.5px] border-borderSubtle">
<img alt="Vestido em Lã" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-4 right-4 p-2 text-stoneText/70 hover:text-red-800 transition-colors bg-ivory/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 duration-500">
<i className="w-4 h-4" data-lucide="heart" strokeWidth="1.5"></i>
</button>
</div>
<div className="mt-6 flex flex-col items-start space-y-1">
<h3 className="font-display text-xl text-stoneText tracking-tight group-hover:text-petroleum transition-colors">Vestido Midi Lã Pura</h3>
<p className="text-petroleum text-lg font-medium">R$ 1.120,00</p>
<div className="flex gap-2 pt-2">
<span className="w-2.5 h-2.5 rounded-full bg-[#fffdd0] border border-stone-200"></span>
<span className="w-2.5 h-2.5 rounded-full bg-[#967bb6]"></span>
</div>
</div>
<div className="mt-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
<button className="flex-1 py-2 border border-borderSubtle text-stoneText text-xs uppercase tracking-widest hover:border-petroleum hover:text-petroleum transition-colors">Adicionar</button>
<button className="flex-1 py-2 bg-petroleum text-ivory border border-petroleum text-xs uppercase tracking-widest hover:bg-petroleumLight transition-colors">Comprar</button>
</div>
</article>
</div>

<div className="mt-24 flex justify-center items-center gap-8 reveal-blur">
<span className="text-stone-300 cursor-not-allowed font-serif text-lg">Anterior</span>
<div className="flex items-center gap-6">
<span className="text-petroleum border-b border-petroleum pb-0.5 px-1">1</span>
<span className="text-stone-400 hover:text-petroleum cursor-pointer transition-colors px-1">2</span>
<span className="text-stone-400 hover:text-petroleum cursor-pointer transition-colors px-1">3</span>
</div>
<span className="text-stone-500 hover:text-petroleum cursor-pointer font-serif text-lg transition-colors">Próxima</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-ivory px-6 text-center relative overflow-hidden" id="atelier">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-petroleum/10 to-transparent"></div>
<div className="max-w-3xl mx-auto reveal-blur">
<span className="text-petroleum text-lg font-serif italic mb-6 block tracking-widest">O Processo</span>
<h2 className="font-display text-4xl md:text-5xl text-petroleum mb-10 leading-tight tracking-tight">
                Em um mundo de pressa, <br/> escolhemos a pausa.
            </h2>
<p className="text-xl text-stoneText leading-loose font-light">
                Cada peça mileart nasce no ateliê, guiada pelo toque das mãos e pelo respeito à matéria-prima. Acreditamos que a verdadeira sofisticação reside no tempo dedicado a criar algo único. Não seguimos tendências; criamos heranças.
            </p>
<div className="mt-12 flex justify-center gap-2">
<div className="w-1 h-1 rounded-full bg-petroleum/40"></div>
<div className="w-1 h-1 rounded-full bg-petroleum/40"></div>
<div className="w-1 h-1 rounded-full bg-petroleum/40"></div>
</div>
</div>
</section>

<section className="py-24 bg-sand/20 px-6">
<div className="max-w-4xl mx-auto text-center reveal-blur">
<div className="mb-10">
<i className="w-6 h-6 mx-auto text-aquaSoft fill-current opacity-70" data-lucide="quote"></i>
</div>
<p className="font-display text-3xl md:text-4xl text-petroleum leading-snug italic mb-10">
                "Há uma dignidade silenciosa nas peças mileart. Elas não gritam por atenção, mas todos perguntam. Sinto que estou vestindo arte."
            </p>
<div className="text-stone-500 font-medium tracking-widest text-xs uppercase">Mariana S. — Cliente Verificada</div>
</div>
</section>

<section className="py-32 bg-ivory border-t border-borderSubtle">
<div className="max-w-xl mx-auto px-6 text-center reveal-blur">
<h2 className="font-display text-3xl text-petroleum mb-4">Círculo mileart</h2>
<p className="text-stoneText mb-12 leading-relaxed font-light text-lg">Receba lançamentos exclusivos e convites para o ateliê.</p>
<form className="flex flex-col md:flex-row gap-6 items-end">
<div className="w-full text-left group relative">
<label className="sr-only" htmlFor="email">Endereço de e-mail</label>
<input className="w-full bg-transparent border-b border-stone-300 py-3 text-petroleum placeholder-stone-400 focus:outline-none focus:border-petroleum transition-colors text-lg font-serif" id="email" placeholder="Seu e-mail" type="email"/>
</div>
<button className="w-full md:w-auto px-10 py-3 bg-petroleum text-ivory hover:bg-petroleumLight transition-colors text-xs tracking-widest uppercase" type="submit">Inscrever-se</button>
</form>
</div>
</section>

<footer className="bg-ivory pt-24 pb-12 border-t border-borderSubtle">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">

<div className="max-w-xs">
<a className="font-display text-3xl text-petroleum tracking-tight mb-6 block" href="#">mileart</a>
<p className="text-stone-500 leading-relaxed text-lg font-light">
                        Exclusividade artesanal para a mulher moderna. Feito à mão com alma e precisão no Brasil.
                    </p>
</div>

<div className="flex flex-wrap gap-16 md:gap-24">
<div>
<h4 className="font-display text-xl text-petroleum mb-6">Explorar</h4>
<ul className="space-y-4 text-stoneText font-light">
<li><a className="hover:text-petroleum transition-colors" href="#">Shop</a></li>
<li><a className="hover:text-petroleum transition-colors" href="#">Novidades</a></li>
<li><a className="hover:text-petroleum transition-colors" href="#">O Ateliê</a></li>
</ul>
</div>
<div>
<h4 className="font-display text-xl text-petroleum mb-6">Ajuda</h4>
<ul className="space-y-4 text-stoneText font-light">
<li><a className="hover:text-petroleum transition-colors" href="#">Fale Conosco</a></li>
<li><a className="hover:text-petroleum transition-colors" href="#">Envios e Devoluções</a></li>
<li><a className="hover:text-petroleum transition-colors" href="#">Guia de Tamanhos</a></li>
</ul>
</div>
<div>
<h4 className="font-display text-xl text-petroleum mb-6">Social</h4>
<ul className="space-y-4 text-stoneText font-light">
<li><a className="hover:text-petroleum transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-petroleum transition-colors" href="#">Pinterest</a></li>
</ul>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-borderSubtle text-stone-400 text-sm font-light">
<p>© 2024 mileart. Todos os direitos reservados.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-petroleum transition-colors" href="#">Privacidade</a>
<a className="hover:text-petroleum transition-colors" href="#">Termos</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
