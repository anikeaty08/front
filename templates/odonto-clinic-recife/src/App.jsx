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
colors: {
torreao: {
red: '#BF4646',
beige: '#EDDCC6',
light: '#FFF4EA',
teal: '#7EACB5',
dark: '#2C2A29'
}
},
fontFamily: {
sans: ['Manrope', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
letterSpacing: {
tightest: '-.05em',
}
}
}
}



        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('nav-scrolled');
            } else {
                navbar.classList.remove('nav-scrolled');
            }
        });

        // Hero Tooth Animation (Floating & Breathing)
        gsap.to("#hero-tooth", {
            y: 20,
            duration: 3,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
        });

        gsap.to("#hero-tooth", {
            scale: 1.05,
            duration: 4,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 1
        });

        // Floating Parallax Elements in Hero
        document.querySelectorAll('.float-element').forEach((el, index) => {
            gsap.to(el, {
                y: -30,
                duration: 2 + index,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                delay: index * 0.5
            });
        });

        // Reveal Animations on Scroll
        const revealElements = document.querySelectorAll('.reveal-scroll');
        revealElements.forEach(element => {
            gsap.fromTo(element, 
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    delay: element.dataset.delay || 0
                }
            );
        });

        // Hero Reveal
        const heroElements = document.querySelectorAll('.reveal-hero');
        gsap.fromTo(heroElements,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.2
            }
        );

        // Parallax Background Effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxBgs = document.querySelectorAll('.parallax-bg');
            parallaxBgs.forEach(bg => {
                const speed = bg.dataset.speed;
                bg.style.transform = `translateY(${scrolled * speed}px)`;
            });
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
      

<nav className="fixed w-full top-0 z-50 transition-all duration-500 ease-out py-8 px-6 lg:px-12 flex justify-between items-center" id="navbar">

<a className="relative group z-50" href="#">
<span className="font-serif text-2xl tracking-tighter uppercase font-medium text-torreao-red">Torreão</span>
<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-torreao-red transition-all duration-300 group-hover:w-full"></span>
</a>

<div className="hidden md:flex items-center space-x-10">
<a className="text-sm font-medium tracking-wide hover:text-torreao-red transition-colors duration-300" href="#about">A Clínica</a>
<a className="text-sm font-medium tracking-wide hover:text-torreao-red transition-colors duration-300" href="#treatments">Tratamentos</a>
<a className="text-sm font-medium tracking-wide hover:text-torreao-red transition-colors duration-300" href="#testimonials">Histórias</a>
</div>

<div className="flex items-center gap-6">
<a className="hidden md:flex items-center gap-2 bg-torreao-dark text-torreao-light px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide hover:bg-torreao-red transition-colors duration-300 group" href="#contact">
<span>Marcar Consulta</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<button className="md:hidden text-2xl text-torreao-dark">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-torreao-beige/30 rounded-full blur-[100px] parallax-bg" data-speed="0.05"></div>
<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-torreao-teal/10 rounded-full blur-[80px] parallax-bg" data-speed="-0.05"></div>
</div>
<div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full">

<div className="order-2 lg:order-1 flex flex-col items-start space-y-8 max-w-2xl reveal-hero">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-torreao-red/20 bg-white/40 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-torreao-red"></span>
<span className="text-xs uppercase tracking-widest font-semibold text-torreao-red">Cuidado Dentário Premium</span>
</div>
<h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] tracking-tight text-torreao-dark">
                    Refinando a <br/>
<span className="italic text-torreao-red font-normal">Arte</span> de Sorrir.
                </h1>
<p className="text-lg text-gray-600 leading-relaxed max-w-md text-balance">
                    Experiencie a medicina dentária de classe mundial onde a precisão estética encontra o luxo médico moderno. A sua jornada para um sorriso impecável começa no Torreão.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="flex items-center justify-center gap-3 bg-torreao-red text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-torreao-dark transition-all duration-300 shadow-lg shadow-torreao-red/20 hover:shadow-xl hover:-translate-y-1" href="#contact">
                        Agendar Consulta
                    </a>
<a className="flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold border border-torreao-dark/10 hover:border-torreao-dark transition-all duration-300" href="#about">
                        Explorar Clínica
                    </a>
</div>
</div>

<div className="order-1 lg:order-2 flex justify-center items-center relative h-[50vh] lg:h-auto reveal-hero">

<svg className="w-64 h-64 lg:w-96 lg:h-96 drop-shadow-2xl tooth-glow text-white fill-current" id="hero-tooth" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="toothGradient" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#FFFFFF', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#F5EBE0', stopOpacity: '1'}}></stop>
</lineargradient>
<filter id="glass">
<fegaussianblur in="SourceGraphic" result="blur" stddeviation="1"></fegaussianblur>
<fecolormatrix in="blur" mode="matrix" result="glass" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"></fecolormatrix>
</filter>
</defs>
<path className="" d="M65,45 C50,45 35,60 35,85 C35,120 55,165 75,180 C85,188 115,188 125,180 C145,165 165,120 165,85 C165,60 150,45 135,45 C120,45 110,60 100,70 C90,60 80,45 65,45 Z" fill="url(#toothGradient)" stroke="#EDDCC6" strokeWidth="0.5"></path>
<path d="M70,55 Q85,80 100,85 Q115,80 130,55" fill="none" opacity="0.5" stroke="#EDDCC6" strokeWidth="1"></path>
</svg>

<div className="absolute top-10 right-10 p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-white float-element" data-speed="2">
<iconify-icon className="text-3xl text-torreao-teal" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="absolute bottom-10 left-10 p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-white float-element" data-speed="1.5">
<iconify-icon className="text-3xl text-torreao-red" icon="solar:star-shine-linear"></iconify-icon>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
<span className="text-[10px] uppercase tracking-widest">Rolar</span>
<iconify-icon icon="solar:arrow-down-linear"></iconify-icon>
</div>
</header>

<section className="py-24 lg:py-32 bg-white relative" id="about">
<div className="container mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-5 relative">
<div className="relative rounded-t-full rounded-b-lg overflow-hidden h-[600px] w-full reveal-scroll">
<div className="absolute inset-0 bg-torreao-beige/20 mix-blend-multiply z-10"></div>

<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"></div>
</div>

<div className="absolute -bottom-10 -right-6 lg:-right-10 bg-torreao-light p-8 rounded-lg shadow-xl max-w-xs border border-torreao-beige z-20 reveal-scroll" data-delay="0.2">
<p className="font-serif text-4xl text-torreao-red mb-1">15+</p>
<p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Anos de Excelência</p>
</div>
</div>

<div className="lg:col-span-7 lg:pl-10 pt-10">
<div className="space-y-8 reveal-scroll">
<h2 className="font-serif text-4xl lg:text-5xl text-torreao-dark leading-tight">
                            Onde a ciência encontra a <br/>
<span className="text-torreao-teal italic">sofisticação.</span>
</h2>
<div className="h-px w-24 bg-torreao-red/30"></div>
<p className="text-lg text-gray-600 leading-relaxed text-balance">
                            Fundada nos princípios de integridade e perfeição estética, a Torreão não é apenas uma clínica — é um santuário para a saúde oral. Utilizamos tecnologia europeia de ponta combinada com uma abordagem humana para oferecer tratamentos tão confortáveis quanto transformadores.
                        </p>
<div className="grid sm:grid-cols-2 gap-8 pt-6">
<div className="group">
<iconify-icon className="text-4xl text-torreao-red mb-4 group-hover:scale-110 transition-transform duration-300" icon="solar:medical-kit-linear"></iconify-icon>
<h3 className="text-lg font-serif font-medium mb-2">Cirurgia Avançada</h3>
<p className="text-sm text-gray-500 leading-relaxed">Procedimentos minimamente invasivos com precisão microscópica 3D.</p>
</div>
<div className="group">
<iconify-icon className="text-4xl text-torreao-teal mb-4 group-hover:scale-110 transition-transform duration-300" icon="solar:palette-linear"></iconify-icon>
<h3 className="text-lg font-serif font-medium mb-2">Design Estético</h3>
<p className="text-sm text-gray-500 leading-relaxed">Design digital do sorriso adaptado à sua estrutura facial única.</p>
</div>
</div>
<div className="pt-8">
<a className="inline-flex items-center text-torreao-dark font-medium border-b border-torreao-dark/30 hover:border-torreao-red hover:text-torreao-red pb-1 transition-colors" href="#">
                                Descubra a Nossa Filosofia
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-torreao-light relative overflow-hidden" id="treatments">

<div className="absolute top-0 right-0 w-1/3 h-full border-l border-torreao-beige/50 opacity-30 pointer-events-none"></div>
<div className="container mx-auto px-6 lg:px-12 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-scroll">
<div>
<span className="text-xs font-semibold tracking-widest text-torreao-red uppercase mb-3 block">Especialidade</span>
<h2 className="font-serif text-4xl lg:text-5xl text-torreao-dark">Tratamentos Exclusivos</h2>
</div>
<div className="hidden md:block">
<a className="text-sm font-medium flex items-center gap-2 group" href="#">
                        Ver todos os procedimentos
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8">

<div className="group bg-white p-8 lg:p-10 rounded-xl shadow-sm hover:shadow-2xl hover:shadow-torreao-beige/50 transition-all duration-500 border border-transparent hover:border-torreao-beige relative top-0 hover:-top-2 reveal-scroll">
<div className="w-14 h-14 rounded-full bg-torreao-light flex items-center justify-center mb-8 group-hover:bg-torreao-red group-hover:text-white transition-colors duration-500">
<iconify-icon className="text-3xl" icon="solar:smile-circle-linear"></iconify-icon>
</div>
<h3 className="font-serif text-2xl mb-3 text-torreao-dark">Ortodontia</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-6">Alinhadores invisíveis e correção de precisão para uma função e estética perfeitamente equilibradas.</p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-xs text-gray-600">
<iconify-icon className="text-torreao-teal" icon="solar:check-circle-linear"></iconify-icon> Invisalign®
                        </li>
<li className="flex items-center gap-2 text-xs text-gray-600">
<iconify-icon className="text-torreao-teal" icon="solar:check-circle-linear"></iconify-icon> Aparelhos Cerâmicos
                        </li>
</ul>
<span className="absolute bottom-8 right-8 text-torreao-beige group-hover:text-torreao-red transition-colors">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</div>

<div className="group bg-white p-8 lg:p-10 rounded-xl shadow-sm hover:shadow-2xl hover:shadow-torreao-beige/50 transition-all duration-500 border border-transparent hover:border-torreao-beige relative top-0 hover:-top-2 reveal-scroll" data-delay="0.1">
<div className="w-14 h-14 rounded-full bg-torreao-light flex items-center justify-center mb-8 group-hover:bg-torreao-red group-hover:text-white transition-colors duration-500">
<iconify-icon className="text-3xl" icon="solar:star-shine-linear"></iconify-icon>
</div>
<h3 className="font-serif text-2xl mb-3 text-torreao-dark">Implantologia</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-6">Restaurando a função completa com implantes de titânio suíço e coroas de aspeto natural.</p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-xs text-gray-600">
<iconify-icon className="text-torreao-teal" icon="solar:check-circle-linear"></iconify-icon> Implantes Unitários
                        </li>
<li className="flex items-center gap-2 text-xs text-gray-600">
<iconify-icon className="text-torreao-teal" icon="solar:check-circle-linear"></iconify-icon> Reabilitação Total
                        </li>
</ul>
<span className="absolute bottom-8 right-8 text-torreao-beige group-hover:text-torreao-red transition-colors">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</div>

<div className="group bg-white p-8 lg:p-10 rounded-xl shadow-sm hover:shadow-2xl hover:shadow-torreao-beige/50 transition-all duration-500 border border-transparent hover:border-torreao-beige relative top-0 hover:-top-2 reveal-scroll" data-delay="0.2">
<div className="w-14 h-14 rounded-full bg-torreao-light flex items-center justify-center mb-8 group-hover:bg-torreao-red group-hover:text-white transition-colors duration-500">
<iconify-icon className="text-3xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="font-serif text-2xl mb-3 text-torreao-dark">Design do Sorriso</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-6">Facetas de cerâmica e tratamentos de branqueamento para alcançar o sorriso luminoso que merece.</p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-xs text-gray-600">
<iconify-icon className="text-torreao-teal" icon="solar:check-circle-linear"></iconify-icon> Facetas de Porcelana
                        </li>
<li className="flex items-center gap-2 text-xs text-gray-600">
<iconify-icon className="text-torreao-teal" icon="solar:check-circle-linear"></iconify-icon> Branqueamento a Laser
                        </li>
</ul>
<span className="absolute bottom-8 right-8 text-torreao-beige group-hover:text-torreao-red transition-colors">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white relative" id="testimonials">
<div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
<iconify-icon className="text-6xl text-torreao-beige mb-8 opacity-50 reveal-scroll" icon="solar:quote-up-linear"></iconify-icon>
<div className="reveal-scroll">
<h2 className="font-serif text-3xl lg:text-5xl leading-tight text-torreao-dark mb-10">
                    "O nível de cuidado na Torreão é inigualável. Parece menos uma clínica e mais um retiro de bem-estar de luxo. Os resultados superaram as minhas expectativas mais altas."
                </h2>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full overflow-hidden border-2 border-torreao-beige p-1 mb-4">
<img alt="Paciente" className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<p className="font-serif font-medium text-lg text-torreao-dark">Elena V.</p>
<p className="text-xs text-torreao-red uppercase tracking-widest mt-1">Paciente de Implantologia</p>
</div>
</div>

<div className="mt-16 flex justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 reveal-scroll">

<span className="font-serif text-xl font-bold tracking-widest">VOGUE</span>
<span className="font-serif text-xl font-bold tracking-widest">ELLE</span>
<span className="font-serif text-xl font-bold tracking-widest">HARPER'S</span>
</div>
</div>
</section>

<footer className="bg-torreao-dark text-white pt-24 pb-12 relative overflow-hidden" id="contact">
<div className="container mx-auto px-6 lg:px-12 relative z-10">
<div className="grid lg:grid-cols-4 gap-12 lg:gap-20 mb-20 border-b border-white/10 pb-16">

<div className="lg:col-span-1">
<span className="font-serif text-3xl tracking-tighter uppercase mb-6 block">Torreão</span>
<p className="text-white/60 text-sm leading-relaxed mb-6">
                        Redefinindo o padrão de atendimento dentário com precisão, elegância e integridade.
                    </p>
<div className="flex gap-4 gap-x-4 gap-y-4">
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-torreao-red hover:border-torreao-red transition-all" href="#">
<iconify-icon icon="solar:camera-linear"></iconify-icon>
</a>
<a className="flex items-center justify-center hover:bg-torreao-red hover:border-torreao-red transition-all w-10 h-10 border-white/20 border rounded-full" href="#">
<iconify-icon className="" icon="brandico:facebook" width="14"></iconify-icon>
</a>
<a className="flex items-center justify-center hover:bg-torreao-red hover:border-torreao-red transition-all w-10 h-10 border-white/20 border rounded-full" href="#">
<iconify-icon className="" height="28" icon="lucide:instagram" style={{color: 'rgb(255, 255, 255)'}} width="14"></iconify-icon>
</a></div>
</div>

<div className="">
<h4 className="text-sm font-semibold uppercase tracking-widest text-torreao-beige mb-6">A Clínica</h4>
<ul className="space-y-4 text-sm text-white/70">
<li className=""><a className="hover:text-white transition-colors" href="#">A Nossa História</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Especialistas</a></li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-semibold uppercase tracking-widest text-torreao-beige mb-6">Tratamentos</h4>
<ul className="space-y-4 text-sm text-white/70">
<li className=""><a className="hover:text-white transition-colors" href="#">Facetas Estéticas</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Implantes Dentários</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold uppercase tracking-widest text-torreao-beige mb-6">Visite-nos</h4>
<p className="text-sm text-white/70 mb-2">Av. da Liberdade, 102</p>
<p className="text-sm text-white/70 mb-6">Lisboa, Portugal</p>
<a className="block text-xl font-serif mb-1 hover:text-torreao-beige transition-colors" href="tel:+123456789">+351 210 000 000</a>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="mailto:contact@torreao.com">contact@torreao.com</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/30 uppercase tracking-wider">
<p>© 2023 Clínica Dentária Torreão. Todos os direitos reservados.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacidade</a>
<a className="hover:text-white" href="#">Termos</a>
</div>
</div>
</div>
</footer>





    </>
  );
}
