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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Instrument Sans"', 'sans-serif'],
},
colors: {
brand: {
black: '#1C1917',     /* Warm Black / Typography Primary */
dark: '#292524',      /* Secondary Dark */
gray: '#78716C',      /* Typography Secondary / Neutral */
light: '#FAFAF9',     /* Background Light / Stone 50 */
accent: '#E7E5E4',    /* Accent Neutral / Stone 200 */
white: '#FFFFFF',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Header Scroll Effect (Glassmorphism)
        const header = document.getElementById('header-translucido');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('glass-nav');
                header.classList.remove('border-transparent');
            } else {
                header.classList.remove('glass-nav');
                header.classList.add('border-transparent');
            }
        });

        // Mobile Menu Logic
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('translate-x-full');
                mobileMenu.classList.add('translate-x-0');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
                menuToggle.innerHTML = '<span class="iconify" data-icon="lucide:x" data-width="24" data-stroke-width="1.5"></span>';
            } else {
                mobileMenu.classList.add('translate-x-full');
                mobileMenu.classList.remove('translate-x-0');
                document.body.style.overflow = 'auto'; // Restore scrolling
                menuToggle.innerHTML = '<span class="iconify" data-icon="lucide:menu" data-width="24" data-stroke-width="1.5"></span>';
            }
        }

        menuToggle.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    
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
      

<header className="fixed transition-all duration-500 z-50 border-b top-0 right-0 left-0" id="header-translucido">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

<a className="group z-50 relative flex items-center gap-2" href="#">
<div className="flex flex-col leading-none">
<span className="text-xl font-bold tracking-tighter text-brand-black uppercase">New Box</span>
<span className="text-[0.65rem] tracking-[0.2em] text-brand-gray uppercase font-medium pl-0.5">Design</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-brand-gray hover:text-brand-black transition-colors" href="#inicio">Início</a>
<a className="text-sm font-medium text-brand-gray hover:text-brand-black transition-colors" href="#sobre">Sobre</a>
<a className="text-sm font-medium text-brand-gray hover:text-brand-black transition-colors" href="#categorias">Categorias</a>
<a className="text-sm font-medium text-brand-gray hover:text-brand-black transition-colors" href="#galeria">Galeria</a>
<a className="px-6 py-2.5 text-xs font-semibold tracking-wide uppercase border border-brand-black rounded-full hover:bg-brand-black hover:text-white transition-all duration-300" href="#contato">
                    Contato
                </a>
</nav>

<button aria-label="Abrir Menu" className="md:hidden z-50 p-2 text-brand-black focus:outline-none" id="menu-toggle">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="fixed inset-0 bg-brand-light/95 backdrop-blur-xl z-40 translate-x-full transition-transform duration-500 flex flex-col justify-center items-center gap-8" id="mobile-menu">
<a className="text-3xl font-light tracking-tight text-brand-black mobile-link hover:opacity-50 transition-opacity" href="#inicio">Início</a>
<a className="text-3xl font-light tracking-tight text-brand-black mobile-link hover:opacity-50 transition-opacity" href="#sobre">Sobre</a>
<a className="text-3xl font-light tracking-tight text-brand-black mobile-link hover:opacity-50 transition-opacity" href="#categorias">Categorias</a>
<a className="text-3xl font-light tracking-tight text-brand-black mobile-link hover:opacity-50 transition-opacity" href="#galeria">Galeria</a>
<a className="text-3xl font-light tracking-tight text-brand-black mobile-link hover:opacity-50 transition-opacity" href="#contato">Contato</a>
</div>
</header>
<main className="">

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="inicio">

<div className="absolute inset-0 z-0">

<img alt="Background Organizer" className="object-center opacity-100 w-full h-full object-cover" src="https://images.unsplash.com/photo-1678097337297-beeb71aad55d?w=3840&amp;q=80"/>

<div className="md:to-transparent bg-gradient-to-r from-[#FAFAF9] via-[#FAFAF9]/90 to-[#FAFAF9]/20 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="md:px-12 grid grid-cols-1 md:grid-cols-12 z-10 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">
<div className="md:col-span-8 animate-fade-in-up space-y-8">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-sm border border-brand-black/5 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-brand-black"></span>
<span className="uppercase text-brand-gray text-xs font-medium tracking-widest">Paula Borges Interiores</span>
</div>
<h1 className="md:text-7xl lg:text-8xl text-brand-black leading-[1.05] text-5xl font-medium tracking-tighter mix-blend-multiply">Organizadores de alto padrão e sob medida.</h1>
<div className="max-w-xl">
<p className="text-lg md:text-xl text-brand-black/80 font-light leading-relaxed">
                            Criados por <strong className="text-brand-black font-medium">Paula Borges</strong>, desenvolvidos com precisão e propósito para transformar a sua rotina através do design.
                        </p>
</div>
<div className="pt-4 flex flex-col sm:flex-row gap-4">
<a className="group inline-flex items-center justify-center gap-3 bg-brand-black text-white px-8 py-4 rounded-full transition-all duration-300 hover:bg-brand-dark hover:shadow-lg" href="#sobre">
<span className="text-sm font-medium tracking-wide">Conheça a New Box Design</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" style={{color: 'white'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="secao-paula py-24 md:py-32 bg-white border-t border-brand-black/5" id="sobre">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">

<div className="relative order-2 lg:order-1 group">
<div className="aspect-[3/4] rounded-sm overflow-hidden bg-brand-accent relative">

<img alt="Paula Borges - Fundadora da New Box Design" className="transition-transform duration-1000 group-hover:scale-105 filter group-hover:grayscale-0 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7c0e76b2-c5cc-415e-bdcf-1efd3d110376_1600w.png"/>

<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
<p className="text-white font-medium text-lg tracking-tight">Paula Borges</p>
<p className="text-white/80 text-sm font-light">Founder &amp; Creative Director</p>
</div>
</div>

<div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-brand-black/20 z-0"></div>
<div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-brand-black/20 z-0"></div>
</div>

<div className="order-1 lg:order-2 space-y-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-brand-black">
                            A essência da organização.
                        </h2>
<div className="space-y-6 text-brand-gray text-lg font-light leading-relaxed">
<p className="">
                                A <strong className="text-brand-black font-normal">New Box Design</strong> nasceu do olhar apurado de Paula Borges, que acredita que a organização não é apenas sobre esconder objetos, mas sobre criar ambientes que respiram e inspiram.
                            </p>
<p className="">
                                Cada peça é desenhada sob medida para elevar a estética do seu ambiente, unindo funcionalidade premium e materiais de altíssima qualidade como acrílico, madeiras nobres e veludo. O luxo está nos detalhes, na suavidade do toque e na tranquilidade visual que nossos organizadores proporcionam.
                            </p>
</div>
<div className="grid grid-cols-2 gap-8 pt-6 border-t border-brand-black/10">
<div className="">
<h3 className="text-3xl font-medium text-brand-black tracking-tight">100%</h3>
<p className="text-sm text-brand-gray mt-1">Personalização</p>
</div>
<div>
<h3 className="text-3xl font-medium text-brand-black tracking-tight">Premium</h3>
<p className="text-sm text-brand-gray mt-1">Materiais</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-light border-y border-brand-black/5" id="diferenciais">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-brand-black/10">

<div className="pt-8 md:pt-0 md:pr-8 space-y-4">
<div className="w-10 h-10 flex items-center justify-center text-brand-black mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:drafting-compass" data-strokeWidth="1.2" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m12.99 6.74l1.93 3.44M19.136 12a10 10 0 0 1-14.271 0M21 21l-2.16-3.84M3 21l8.02-14.26"></path><circle cx="12" cy="5" r="2"></circle></g></svg>
</div>
<h3 className="text-xl font-medium tracking-tight text-brand-black">Design Exclusivo</h3>
<p className="text-brand-gray font-light leading-relaxed">
                            Projetos desenhados do zero para atender as dimensões exatas e a estética do seu mobiliário existente.
                        </p>
</div>

<div className="pt-8 md:pt-0 md:px-8 space-y-4">
<div className="w-10 h-10 flex items-center justify-center text-brand-black mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gem" data-strokeWidth="1.2" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path></g></svg>
</div>
<h3 className="text-xl font-medium tracking-tight text-brand-black">Acabamento de Luxo</h3>
<p className="text-brand-gray font-light leading-relaxed">
                            Uso de veludo italiano, acrílico cristal de alta densidade e divisórias precisas sem emendas visíveis.
                        </p>
</div>

<div className="pt-8 md:pt-0 md:pl-8 space-y-4">
<div className="w-10 h-10 flex items-center justify-center text-brand-black mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:scaling" data-strokeWidth="1.2" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M14 15H9v-5m7-7h5v5m0-5L9 15"></path></g></svg>
</div>
<h3 className="text-xl font-medium tracking-tight text-brand-black">Funcionalidade</h3>
<p className="text-brand-gray font-light leading-relaxed">
                            Soluções inteligentes que otimizam o espaço e protegem seus itens mais preciosos com elegância.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="categorias">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-brand-black mb-4">Nossas Coleções</h2>
<p className="text-brand-gray font-light text-lg">Organização setorizada para cada necessidade do seu lar.</p>
</div>
<div>
<a className="inline-flex items-center text-sm font-medium text-brand-black border-b border-brand-black pb-1 hover:opacity-70 transition-opacity" href="#contato">
                            Solicitar catálogo completo
                        </a>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

<div className="group relative aspect-square bg-brand-light overflow-hidden rounded-sm cursor-pointer">
<img alt="Talheres" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1676976527022-fdd058e44410?w=800&amp;q=80"/>
<div className="group-hover:bg-black/30 transition-colors bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white text-lg font-medium tracking-tight">Talheres</p>
</div>
</div>

<div className="group relative aspect-square bg-brand-light overflow-hidden rounded-sm cursor-pointer">
<img alt="Jóias" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1528797664208-e5a8c0b98881?w=800&amp;q=80"/>
<div className="group-hover:bg-black/30 transition-colors bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white text-lg font-medium tracking-tight">Jóias</p>
</div>
</div>

<div className="group relative aspect-square bg-brand-light overflow-hidden rounded-sm cursor-pointer">
<img alt="Acrílicos e Madeira" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white text-lg font-medium tracking-tight">Acrílicos &amp; Madeira</p>
</div>
</div>

<div className="group relative aspect-square bg-brand-light overflow-hidden rounded-sm cursor-pointer">
<img alt="Caixas" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white text-lg font-medium tracking-tight">Caixas</p>
</div>
</div>

<div className="group relative aspect-square bg-brand-light overflow-hidden rounded-sm cursor-pointer">
<img alt="Bandejas" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white text-lg font-medium tracking-tight">Bandejas</p>
</div>
</div>

<div className="group relative aspect-square bg-brand-light overflow-hidden rounded-sm cursor-pointer">
<img alt="Gavetas" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1620619767323-b95a89183081?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white text-lg font-medium tracking-tight">Gavetas</p>
</div>
</div>

<div className="group relative aspect-square bg-brand-light overflow-hidden rounded-sm cursor-pointer">
<img alt="Tapetes" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white text-lg font-medium tracking-tight">Tapetes</p>
</div>
</div>

<div className="group relative aspect-square bg-brand-black flex items-center justify-center rounded-sm cursor-pointer">
<div className="text-center p-6">
<svg aria-hidden="true" className="iconify mx-auto mb-2 text-white/80 iconify--lucide" data-icon="lucide:plus" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-white text-lg font-medium tracking-tight">Diversos</p>
<p className="text-white/50 text-xs mt-1 font-light">Projetos Especiais</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-light" id="galeria">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-16 space-y-4">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-brand-black">Galeria de Projetos</h2>
<p className="text-brand-gray font-light max-w-2xl mx-auto">
                        Detalhes minuciosos que compõem a excelência da New Box Design.
                    </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[350px]">

<div className="md:col-span-2 md:row-span-1 rounded-sm overflow-hidden relative group">
<img alt="Projeto Residencial" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
</div>

<div className="md:col-span-1 md:row-span-1 rounded-sm overflow-hidden relative group">
<img alt="Detalhe Organizador" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="md:col-span-1 md:row-span-1 rounded-sm overflow-hidden relative group">
<img alt="Gaveta Closet" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="md:col-span-2 md:row-span-1 rounded-sm overflow-hidden relative group">
<img alt="Projeto Cozinha" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="cta-final py-24 md:py-32 bg-brand-black text-brand-white relative overflow-hidden" id="contato">
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6">Transforme seu espaço.</h2>
<p className="text-brand-gray text-lg font-light mb-12 max-w-xl mx-auto">
                    Entre em contato para um orçamento exclusivo. Estamos prontos para criar a solução perfeita para você.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5">
<a className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-brand-black px-8 py-4 rounded-full font-medium tracking-wide hover:bg-brand-gray hover:text-white transition-all duration-300" href="https://wa.me/" target="_blank">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Fale no WhatsApp
                    </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-white/10 transition-all duration-300" href="mailto:contato@newboxdesign.com.br">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
                        Enviar E-mail
                    </a>
</div>
<div className="mt-20 pt-12 border-t border-white/10 flex flex-col items-center gap-6">
<p className="text-brand-gray text-sm">Siga-nos nas redes sociais</p>
<div className="flex items-center gap-8 text-white">
<a className="hover:text-brand-gray transition-colors hover:scale-110 duration-300" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="hover:text-brand-gray transition-colors hover:scale-110 duration-300" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-brand-black border-t border-white/5 py-8">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs text-brand-gray gap-4">
<div className="flex items-center gap-2">
<span className="font-bold text-white uppercase tracking-tight">New Box Design</span>
<span>© 2024. Todos os direitos reservados.</span>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Termos de Uso</a>
<a className="hover:text-white transition-colors" href="#">Política de Privacidade</a>
</div>
</div>
</footer>



    </>
  );
}
