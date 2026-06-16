import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-enter-active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-trigger').forEach(el => {
            observer.observe(el);
        });

        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');

        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 150)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('text-white', 'font-semibold');
                link.classList.add('text-white/70');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.remove('text-white/70');
                    link.classList.add('text-white', 'font-semibold');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-noise"></div>
<header className="fixed top-0 w-full z-40 border-b border-white/20 bg-white/10 backdrop-blur-xl shadow-sm shadow-black/5">
<div className="px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-3 group cursor-pointer shrink-0">
<div className="relative w-8 h-8 border border-white/40 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-pink-600 transition-colors duration-500">
<i className="w-4 h-4" data-lucide="droplet" strokeWidth="1.5"></i>
</div>
<span className="font-medium tracking-tight uppercase text-base group-hover:text-white/80 transition-colors duration-300">Tres Gotas</span>
</div>
<nav className="w-full md:w-auto overflow-x-auto no-scrollbar">
<ul className="flex items-center gap-6 text-base font-normal uppercase tracking-widest px-2 pb-2 md:pb-0">
<li><a className="hover:text-white/70 transition-colors whitespace-nowrap" href="#promociones">Promos</a></li>
<li><a className="hover:text-white/70 transition-colors whitespace-nowrap" href="#quesadillas">Quesadillas</a></li>
<li><a className="hover:text-white/70 transition-colors whitespace-nowrap" href="#sopes">Sopes</a></li>
<li><a className="hover:text-white/70 transition-colors whitespace-nowrap" href="#tostadas">Tostadas</a></li>
<li><a className="hover:text-white/70 transition-colors whitespace-nowrap" href="#bebidas">Bebidas</a></li>
</ul>
</nav>
<button className="hidden md:flex items-center gap-2 bg-black/20 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white hover:text-pink-600 transition-all duration-300 group shrink-0">
<i className="w-4 h-4" data-lucide="shopping-cart" strokeWidth="1.5"></i>
<span className="text-sm font-normal uppercase tracking-widest">Pedir</span>
</button>
</div>
</header>
<main className="relative z-10 px-6 lg:px-12 pt-40 pb-24 max-w-7xl mx-auto space-y-32">
<section className="scroll-trigger fade-enter" id="promociones">
<div className="mb-10 flex items-end justify-between">
<div>
<p className="font-mono text-sm mb-3 text-white/80 uppercase tracking-widest font-medium">Ofertas Estrella</p>
<h2 className="font-['Anton'] text-6xl lg:text-8xl uppercase tracking-tight leading-none text-white drop-shadow-sm">
                        Promociones
                    </h2>
</div>
<i className="w-12 h-12 text-white/50 hidden md:block" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-2 transition-transform duration-500 flex flex-col shadow-2xl">
<div className="h-56 relative bg-black/40 border-b border-white/10 overflow-hidden">
<img alt="Combo Mega" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<span className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 text-sm font-semibold uppercase tracking-widest rounded-full shadow-lg shadow-orange-500/30">Para Compartir</span>
</div>
<div className="p-6 flex-grow flex flex-col justify-between">
<div>
<h3 className="font-['Anton'] text-5xl uppercase tracking-tight text-white mb-4 leading-none">Combo Mega</h3>
<p className="font-medium text-white/90 text-lg leading-snug tracking-tight">10 Quesadillas + 2 Aguas Frescas (1 litro c/u)</p>
</div>
<div className="mt-8 flex justify-between items-end border-t border-white/10 pt-4">
<span className="text-sm font-medium uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">Pedir</span>
<span className="font-['Anton'] text-4xl tracking-tight text-white">$249</span>
</div>
</div>
</div>

<div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-2 transition-transform duration-500 flex flex-col shadow-2xl">
<div className="h-56 relative bg-black/40 border-b border-white/10 overflow-hidden">
<img alt="Combo Familiar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.unsplash.com/photo-1604467715878-83e57e8bc129?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<span className="absolute bottom-4 left-4 bg-pink-600 text-white px-3 py-1 text-sm font-semibold uppercase tracking-widest rounded-full shadow-lg shadow-pink-600/30">Familiar</span>
</div>
<div className="p-6 flex-grow flex flex-col justify-between">
<div>
<h3 className="font-['Anton'] text-5xl uppercase tracking-tight text-white mb-4 leading-none">Combo Familiar</h3>
<p className="font-medium text-white/90 text-lg leading-snug tracking-tight">10 Quesadillas + 1 Coca-Cola (1.3 litros)</p>
</div>
<div className="mt-8 flex justify-between items-end border-t border-white/10 pt-4">
<span className="text-sm font-medium uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">Pedir</span>
<span className="font-['Anton'] text-4xl tracking-tight text-white">$249</span>
</div>
</div>
</div>

<div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-2 transition-transform duration-500 flex flex-col shadow-2xl">
<div className="h-56 relative bg-black/40 border-b border-white/10 overflow-hidden">
<img alt="Cuarteto Mix" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<span className="absolute bottom-4 left-4 bg-blue-500 text-white px-3 py-1 text-sm font-semibold uppercase tracking-widest rounded-full shadow-lg shadow-blue-500/30">Favorito</span>
</div>
<div className="p-6 flex-grow flex flex-col justify-between">
<div>
<h3 className="font-['Anton'] text-5xl uppercase tracking-tight text-white mb-4 leading-none">Cuarteto Mix</h3>
<p className="font-medium text-white/90 text-lg leading-snug tracking-tight">4 Quesadillas (1 Chicharrón, 1 Papa con Chorizo, 2 Queso) + 1 Agua (500 ml)</p>
</div>
<div className="mt-8 flex justify-between items-end border-t border-white/10 pt-4">
<span className="text-sm font-medium uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">Pedir</span>
<span className="font-['Anton'] text-4xl tracking-tight text-white">$110</span>
</div>
</div>
</div>

<div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-2 transition-transform duration-500 flex flex-col shadow-2xl">
<div className="h-56 relative bg-black/40 border-b border-white/10 overflow-hidden">
<img alt="Dúo Especial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.unsplash.com/photo-1585238341267-1cb01e4db606?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<span className="absolute bottom-4 left-4 bg-purple-500 text-white px-3 py-1 text-sm font-semibold uppercase tracking-widest rounded-full shadow-lg shadow-purple-500/30">Especial</span>
</div>
<div className="p-6 flex-grow flex flex-col justify-between">
<div>
<h3 className="font-['Anton'] text-5xl uppercase tracking-tight text-white mb-4 leading-none">Dúo Especial</h3>
<p className="font-medium text-white/90 text-lg leading-snug tracking-tight">2 Quesadillas de Especialidad (Pastor o Asada) + 1 Agua (500 ml)</p>
</div>
<div className="mt-8 flex justify-between items-end border-t border-white/10 pt-4">
<span className="text-sm font-medium uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">Pedir</span>
<span className="font-['Anton'] text-4xl tracking-tight text-white">$99</span>
</div>
</div>
</div>

<div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-2 transition-transform duration-500 flex flex-col shadow-2xl">
<div className="h-56 relative bg-black/40 border-b border-white/10 overflow-hidden">
<img alt="Trío Clásico" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.unsplash.com/photo-1625938146369-adc83368bda7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<span className="absolute bottom-4 left-4 bg-emerald-500 text-white px-3 py-1 text-sm font-semibold uppercase tracking-widest rounded-full shadow-lg shadow-emerald-500/30">Clásico</span>
</div>
<div className="p-6 flex-grow flex flex-col justify-between">
<div>
<h3 className="font-['Anton'] text-5xl uppercase tracking-tight text-white mb-4 leading-none">Trío Clásico</h3>
<p className="font-medium text-white/90 text-lg leading-snug tracking-tight">3 Quesadillas + 1 Coca-Cola (355 ml)</p>
</div>
<div className="mt-8 flex justify-between items-end border-t border-white/10 pt-4">
<span className="text-sm font-medium uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">Pedir</span>
<span className="font-['Anton'] text-4xl tracking-tight text-white">$89</span>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-trigger fade-enter" id="quesadillas">
<h2 className="font-['Anton'] text-5xl lg:text-7xl uppercase tracking-tight leading-none text-white mb-8 border-b border-white/20 pb-6">
                Quesadillas
            </h2>

<div className="mb-12 bg-gradient-to-r from-blue-900 to-indigo-900 border border-blue-400/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl relative overflow-hidden">
<div className="absolute inset-0 bg-noise opacity-20"></div>
<div className="relative z-10 flex items-center gap-5">
<div className="w-14 h-14 rounded-full bg-blue-500/20 border border-blue-400/50 flex items-center justify-center text-blue-300 shrink-0">
<i className="w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-['Anton'] text-3xl md:text-4xl uppercase tracking-tight text-white">¡Pídelas con Masa Azul!</h4>
<p className="text-blue-200 text-base font-normal mt-1 tracking-tight">Dale un toque auténtico y delicioso a tu orden.</p>
</div>
</div>
<span className="relative z-10 bg-blue-500 text-white px-5 py-2.5 text-sm font-semibold uppercase tracking-widest rounded-full whitespace-nowrap">+ $5 MXN</span>
</div>
<div className="space-y-12">

<div>
<h3 className="text-base font-medium uppercase tracking-widest text-white/70 mb-6 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="utensils" strokeWidth="1.5"></i> Guisados Tradicionales 
                        <span className="text-white bg-white/20 px-2.5 py-1 rounded-sm text-xs ml-3">$25 Base</span>
</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Chicharrón prensado</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Tinga de res o pollo</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Rajas poblanas</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Papas con chorizo</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Champiñones</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Cochinita pibil</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Nopalitos con papa</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Picadillo</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Queso</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Chorizo</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div>
<h3 className="text-base font-medium uppercase tracking-widest text-white/70 mb-6 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="flame" strokeWidth="1.5"></i> Guisados Especiales
                    </h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-orange-300 transition-colors">Carne asada</span>
<div className="flex items-center gap-4">
<span className="font-mono text-lg text-orange-300 tracking-tight">$39</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-orange-300 transition-colors">Carne al pastor</span>
<div className="flex items-center gap-4">
<span className="font-mono text-lg text-orange-300 tracking-tight">$39</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-orange-300 transition-colors">Camarón</span>
<div className="flex items-center gap-4">
<span className="font-mono text-lg text-orange-300 tracking-tight">$33</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-orange-300 transition-colors">Barbacoa</span>
<div className="flex items-center gap-4">
<span className="font-mono text-lg text-orange-300 tracking-tight">$45</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-trigger fade-enter" id="sopes">
<h2 className="font-['Anton'] text-5xl lg:text-7xl uppercase tracking-tight leading-none text-white mb-8 border-b border-white/20 pb-6">
                Sopes
            </h2>

<div className="mb-12 bg-gradient-to-r from-blue-900 to-indigo-900 border border-blue-400/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl relative overflow-hidden">
<div className="absolute inset-0 bg-noise opacity-20"></div>
<div className="relative z-10 flex items-center gap-5">
<div className="w-14 h-14 rounded-full bg-blue-500/20 border border-blue-400/50 flex items-center justify-center text-blue-300 shrink-0">
<i className="w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-['Anton'] text-3xl md:text-4xl uppercase tracking-tight text-white">Base de Masa Azul</h4>
<p className="text-blue-200 text-base font-normal mt-1 tracking-tight">Sabor intenso y textura perfecta en tu sope.</p>
</div>
</div>
<span className="relative z-10 bg-blue-500 text-white px-5 py-2.5 text-sm font-semibold uppercase tracking-widest rounded-full whitespace-nowrap">+ $5 MXN</span>
</div>
<div className="space-y-12">

<div>
<h3 className="text-base font-medium uppercase tracking-widest text-white/70 mb-6 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="utensils" strokeWidth="1.5"></i> Guisados Tradicionales 
                        <span className="text-white bg-white/20 px-2.5 py-1 rounded-sm text-xs ml-3">$29 Base</span>
</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Chicharrón prensado</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Tinga de res o pollo</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Rajas poblanas</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Papas con chorizo</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Champiñones</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Cochinita pibil</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Nopalitos con papa</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Picadillo</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Queso</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Chorizo</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div>
<h3 className="text-base font-medium uppercase tracking-widest text-white/70 mb-6 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="flame" strokeWidth="1.5"></i> Guisados Especiales
                    </h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-orange-300 transition-colors">Carne asada</span>
<div className="flex items-center gap-4">
<span className="font-mono text-lg text-orange-300 tracking-tight">$42</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-orange-300 transition-colors">Carne al pastor</span>
<div className="flex items-center gap-4">
<span className="font-mono text-lg text-orange-300 tracking-tight">$42</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-orange-300 transition-colors">Camarón</span>
<div className="flex items-center gap-4">
<span className="font-mono text-lg text-orange-300 tracking-tight">$35</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-orange-300 transition-colors">Barbacoa</span>
<div className="flex items-center gap-4">
<span className="font-mono text-lg text-orange-300 tracking-tight">$45</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-trigger fade-enter" id="tostadas">
<h2 className="font-['Anton'] text-5xl lg:text-7xl uppercase tracking-tight leading-none text-white mb-12 border-b border-white/20 pb-6">
                Tostadas
            </h2>
<div className="space-y-12">

<div>
<h3 className="text-base font-medium uppercase tracking-widest text-white/70 mb-6 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="utensils" strokeWidth="1.5"></i> Guisados Tradicionales 
                        <span className="text-white bg-white/20 px-2.5 py-1 rounded-sm text-xs ml-3">$28 Base</span>
</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Chicharrón prensado</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Tinga de res o pollo</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Rajas poblanas</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Papas con chorizo</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Champiñones</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Cochinita pibil</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Nopalitos con papa</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Picadillo</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Queso</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-pink-300 transition-colors">Chorizo</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div>
<h3 className="text-base font-medium uppercase tracking-widest text-white/70 mb-6 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="flame" strokeWidth="1.5"></i> Guisados Especiales
                    </h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-orange-300 transition-colors">Carne asada</span>
<div className="flex items-center gap-4">
<span className="font-mono text-lg text-orange-300 tracking-tight">$42</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-orange-300 transition-colors">Carne al pastor</span>
<div className="flex items-center gap-4">
<span className="font-mono text-lg text-orange-300 tracking-tight">$42</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-orange-300 transition-colors">Camarón</span>
<div className="flex items-center gap-4">
<span className="font-mono text-lg text-orange-300 tracking-tight">$35</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
</div>
<div className="bg-black/20 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group">
<span className="font-medium tracking-tight text-2xl group-hover:text-orange-300 transition-colors">Barbacoa</span>
<div className="flex items-center gap-4">
<span className="font-mono text-lg text-orange-300 tracking-tight">$45</span>
<i className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" data-lucide="plus-circle" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-trigger fade-enter" id="bebidas">
<h2 className="font-['Anton'] text-5xl lg:text-7xl uppercase tracking-tight leading-none text-white mb-8 border-b border-white/20 pb-6">
                Bebidas &amp; Extras
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-black/20 border border-white/10 backdrop-blur-md p-8 rounded-2xl">
<h3 className="font-['Anton'] text-4xl uppercase tracking-tight text-white mb-8 flex items-center gap-3">
<i className="w-8 h-8 text-orange-400" data-lucide="chef-hat" strokeWidth="1.5"></i> Extras
                    </h3>
<ul className="space-y-5">
<li className="flex justify-between items-center border-b border-white/10 pb-3">
<span className="font-normal text-lg tracking-tight">Tortilla</span>
<span className="font-mono text-lg text-orange-300">$10</span>
</li>
<li className="flex justify-between items-center border-b border-white/10 pb-3">
<span className="font-normal text-lg tracking-tight">Guisado tradicional</span>
<span className="font-mono text-lg text-orange-300">$15</span>
</li>
<li className="flex justify-between items-center border-b border-white/10 pb-3">
<span className="font-normal text-lg tracking-tight">Guisado especial</span>
<span className="font-mono text-lg text-orange-300">$20</span>
</li>
<li className="flex justify-between items-center border-b border-white/10 pb-3">
<span className="font-normal text-lg tracking-tight">Queso</span>
<span className="font-mono text-lg text-orange-300">$7</span>
</li>
</ul>
</div>

<div className="bg-black/20 border border-white/10 backdrop-blur-md p-8 rounded-2xl">
<h3 className="font-['Anton'] text-4xl uppercase tracking-tight text-white mb-8 flex items-center gap-3">
<i className="w-8 h-8 text-pink-400" data-lucide="glass-water" strokeWidth="1.5"></i> Aguas Frescas
                    </h3>
<ul className="space-y-5">
<li className="flex justify-between items-center border-b border-white/10 pb-3">
<span className="font-normal text-lg tracking-tight">500 ml</span>
<span className="font-mono text-lg text-pink-300">$25</span>
</li>
<li className="flex justify-between items-center border-b border-white/10 pb-3">
<span className="font-normal text-lg tracking-tight">1 Litro</span>
<span className="font-mono text-lg text-pink-300">$39</span>
</li>
</ul>
</div>

<div className="bg-black/20 border border-white/10 backdrop-blur-md p-8 rounded-2xl">
<h3 className="font-['Anton'] text-4xl uppercase tracking-tight text-white mb-8 flex items-center gap-3">
<i className="w-8 h-8 text-rose-400" data-lucide="cup-soda" strokeWidth="1.5"></i> Refrescos
                    </h3>
<ul className="space-y-5">
<li className="flex justify-between items-center border-b border-white/10 pb-3">
<span className="font-normal text-lg tracking-tight">PET / 600 ml</span>
<span className="font-mono text-lg text-rose-300">$39</span>
</li>
<li className="flex justify-between items-center border-b border-white/10 pb-3">
<span className="font-normal text-lg tracking-tight">Vidrio / 355 ml</span>
<span className="font-mono text-lg text-rose-300">$29</span>
</li>
</ul>
</div>
</div>
</section>
</main>

<footer className="bg-[#2a0a12] text-white pt-24 pb-12 px-6 lg:px-12 border-t border-white/10 relative overflow-hidden mt-12">
<div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 relative z-10 max-w-7xl mx-auto">
<div className="col-span-1 md:col-span-2">
<h2 className="font-['Anton'] text-6xl lg:text-8xl uppercase leading-none mb-6 text-white tracking-tight">
                    ¿Listo para <br/><span className="text-pink-500">Ordenar?</span>
</h2>
<div className="flex gap-4 mt-8">
<button className="bg-white text-black px-8 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-colors duration-300 rounded-sm">Pedir Online</button>
<button className="border border-white/20 text-white px-8 py-3 text-sm font-semibold uppercase tracking-widest hover:border-pink-500 hover:text-pink-500 transition-colors duration-300 rounded-sm">Ver Ubicación</button>
</div>
</div>
<div className="col-span-1 flex flex-col justify-end">
<div className="space-y-4 font-normal text-stone-400 text-lg">
<p className="text-white text-2xl font-['Anton'] uppercase tracking-tight">Tres Gotas</p>
<p>Av. Oaxaca 123,<br/>Roma Norte, CDMX</p>
<p className="hover:text-orange-500 transition-colors cursor-pointer">pedidos@tresgotas.mx</p>
<p>+52 (55) 1234-5678</p>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 text-xs font-normal text-stone-500 uppercase tracking-widest relative z-10 max-w-7xl mx-auto">
<p>© 2024 Tres Gotas. Todos los derechos reservados.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacidad</a>
<a className="hover:text-white transition-colors" href="#">Términos</a>
</div>
</div>
</footer>


    </>
  );
}
