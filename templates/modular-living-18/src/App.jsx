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



        // Initialize Icons
        lucide.createIcons();

        // Navigation Logic
        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-content').forEach(page => {
                page.classList.add('hidden');
            });
            
            // Show selected page
            const selectedPage = document.getElementById(pageId);
            if(selectedPage) {
                selectedPage.classList.remove('hidden');
                // Re-trigger animation
                selectedPage.classList.remove('page-content');
                void selectedPage.offsetWidth; // trigger reflow
                selectedPage.classList.add('page-content');
            }
            
            // Update Active State on Nav
            document.querySelectorAll('.nav-link').forEach(link => {
                if(link.getAttribute('data-target') === pageId) {
                    link.classList.add('text-stone-900', 'font-semibold');
                    link.classList.remove('text-stone-500');
                } else {
                    link.classList.remove('text-stone-900', 'font-semibold');
                    link.classList.add('text-stone-500');
                }
            });

            // Scroll to top
            window.scrollTo(0,0);
        }

        // Language Logic
        function toggleLang() {
            const body = document.body;
            if (body.classList.contains('lang-pt')) {
                body.classList.remove('lang-pt');
                body.classList.add('lang-en');
            } else {
                body.classList.remove('lang-en');
                body.classList.add('lang-pt');
            }
        }

        // Initialize Home
        document.addEventListener('DOMContentLoaded', () => {
            showPage('casas');
        });
    


        document.querySelectorAll('.case-slider').forEach(slider => {
        const slides = slider.querySelectorAll('.case-slide');
        let current = 0;
    
        if (slides.length <= 1) return;
    
        setInterval(() => {
          slides[current].classList.remove('opacity-100');
          slides[current].classList.add('opacity-0');
    
          current = (current + 1) % slides.length;
    
          slides[current].classList.remove('opacity-0');
          slides[current].classList.add('opacity-100');
        }, 4000); // 4 segundos
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
      

<nav className="fixed bg-stone-50/90 w-full z-50 border-stone-200 border-b top-0 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="cursor-pointer flex items-center gap-3" onclick="showPage('casas')">
<img alt="MAYU Modular Living" className="sm:h-9 hover:opacity-80 transition-opacity w-auto h-8 object-cover" loading="eager" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/73d2d5e3-2d6f-4dd2-aacf-17533062727b_320w.png"/>
<span className="text-xl font-bold tracking-tight text-gray-900 uppercase">
                    MAYU
                </span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
<button className="hover:text-stone-500 transition-colors nav-link active text-stone-900 font-semibold" data-target="casas" onclick="showPage('casas')">
<span className="lang-pt">Casas Tipo</span><span className="lang-en">Type Homes</span>
</button>
<button className="hover:text-stone-500 transition-colors nav-link text-stone-500" data-target="casos" onclick="showPage('casos')">
<span className="lang-pt">Casos &amp; Mood</span><span className="lang-en">Cases &amp; Mood</span>
</button>
<button className="hover:text-stone-500 transition-colors nav-link text-stone-500" data-target="pecas" onclick="showPage('pecas')">
<span className="lang-pt tracking-widest">MAYU Home</span>
<span className="lang-en tracking-widest">MAYU Home</span>
</button>
<button className="hover:text-stone-500 transition-colors nav-link text-stone-500" data-target="contacto" onclick="showPage('contacto')">
<span className="lang-pt">Contacto</span><span className="lang-en">Contact</span>
</button>
</div>

<div className="flex items-center gap-6">
<button className="text-xs font-semibold tracking-widest hover:opacity-60 transition-opacity" onclick="toggleLang()">
<span className="lang-pt">PT <span className="text-stone-400">|</span> EN</span>
<span className="lang-en">EN <span className="text-stone-400">|</span> PT</span>
</button>
<button className="md:hidden" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg aria-hidden="true" className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="hidden md:hidden bg-white border-b border-stone-200 p-6 flex flex-col gap-4 text-sm font-medium" id="mobile-menu">
<button className="text-left" onclick="showPage('casas'); document.getElementById('mobile-menu').classList.add('hidden')">
<span className="lang-pt">Casas Tipo</span><span className="lang-en">Type Homes</span>
</button>
<button className="text-left" onclick="showPage('casos'); document.getElementById('mobile-menu').classList.add('hidden')">
<span className="lang-pt">Casos &amp; Mood</span><span className="lang-en">Cases &amp; Mood</span>
</button>
<button className="text-left" onclick="showPage('pecas'); document.getElementById('mobile-menu').classList.add('hidden')">
<span className="lang-pt">MAYU Home</span>
<span className="lang-en">MAYU Home</span>
</button>
<button className="text-left" onclick="showPage('contacto'); document.getElementById('mobile-menu').classList.add('hidden')">
<span className="lang-pt">Contacto</span><span className="lang-en">Contact</span>
</button>
</div>
</nav>

<div className="pt-20 page-content" id="casas">

<header className="relative h-[85vh] w-full bg-stone-200 overflow-hidden flex items-end pb-20">
<img alt="Mayu Home" className="absolute inset-0 w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5404716d-eb29-4524-bffa-d516daa97870_3840w.jpg"/>
<div className="bg-gradient-to-t from-black/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative max-w-7xl mx-auto px-6 w-full text-white">
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] mb-6 max-w-4xl text-balance">
<span className="lang-pt">Casas modulares desenhadas para viver melhor.</span>
<span className="lang-en">Modular homes designed for better living.</span>
</h1>
<p className="text-lg md:text-xl font-light text-white/90 max-w-xl leading-relaxed">
<span className="lang-pt">Não é pré-fabricado, é arquitetura. Adaptável, sustentável e sem compromissos de conforto.</span>
<span className="lang-en">Not prefab, but architecture. Adaptable, sustainable, and uncompromising on comfort.</span>
</p>
</div>
</header>

<section className="bg-white pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-4">
<h2 className="text-xs font-semibold tracking-widest uppercase text-stone-500 mb-4">
<span className="lang-pt">A nossa abordagem</span>
<span className="lang-en">Our Approach</span>
</h2>
<p className="text-2xl md:text-3xl font-medium tracking-tight leading-snug">
<span className="lang-pt">Criamos espaços que respeitam a natureza e elevam o quotidiano.</span>
<span className="lang-en">We create spaces that respect nature and elevate daily life.</span>
</p>
</div>
<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-600 leading-relaxed">
<div className="">
<p className="lang-pt mb-4">Modular não significa padrão. Na MAYU, cada módulo é um componente de um sistema arquitetónico flexível, desenhado para desempenho energético superior e durabilidade.</p>
<p className="lang-en mb-4">Modular does not mean standard. At MAYU, each module is a component of a flexible architectural system, designed for superior energy performance and durability.</p>
</div>
<div className="">
<p className="lang-pt">O nosso controlo de qualidade é absoluto, com supervisão externa independente. Entregamos chaves na mão, desde o projeto à instalação no terreno.</p>
<p className="lang-en">Our quality control is absolute, with independent external supervision. We deliver turnkey solutions, from design to on-site installation.</p>
</div>
</div>
</div>
</section>

<section className="bg-stone-50 border-stone-200 border-t">

<div className="group border-stone-200 border-b">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[600px]">
<div className="order-2 lg:order-1 lg:p-16 flex flex-col pt-8 pr-8 pb-8 pl-8 justify-center">
<span className="uppercase text-xs font-semibold text-stone-500 tracking-widest mb-2">Tipologia T1</span>
<h3 className="text-3xl font-medium tracking-tight mb-6">Heritage T1</h3>
<p className="text-stone-600 mb-8 leading-relaxed max-w-md">
<span className="lang-pt">Um refúgio compacto perfeito. Ideal para turismo rural ou casa de hóspedes. Materiais nobres e integração total com a paisagem.</span>
<span className="lang-en">A perfect compact refuge. Ideal for rural tourism or a guest house. Noble materials and total integration with the landscape.</span>
</p>
<ul className="space-y-2 text-sm text-stone-500 mb-8">
<li className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> <span className="lang-pt">Uso: Retiro / Turismo</span><span className="lang-en">Use: Retreat / Tourism</span></li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-sun w-4 h-4" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg> <span className="lang-pt">Luz natural abundante</span><span className="lang-en">Abundant natural light</span></li>
</ul>
<button className="self-start text-sm border-b border-stone-900 pb-0.5 hover:text-stone-600 hover:border-stone-600 transition-colors" onclick="showPage('contacto')">
<span className="lang-pt">Saber mais</span><span className="lang-en">Learn more</span>
</button>
</div>
<div className="order-1 lg:order-2 bg-stone-200 overflow-hidden h-64 lg:h-full relative">
<img alt="Heritage T1" className="transition-transform duration-700 group-hover:scale-105 object-[15%_50%] w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8dc1393-2940-46b7-8dcd-be5adfbbb7f7_1600w.jpg"/>
</div>
</div>
</div>

<div className="group border-stone-200 border-b">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[600px]">
<div className="order-1 bg-stone-200 overflow-hidden h-64 lg:h-full relative">
<img alt="Heritage T2" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c2f0d4f0-02e0-4e57-b6f4-833b16e9fc0c_800w.jpg"/>
</div>
<div className="order-2 p-8 lg:p-16 flex flex-col justify-center lg:border-l border-stone-200">
<span className="text-xs font-semibold tracking-widest uppercase text-stone-500 mb-2">Tipologia T2</span>
<h3 className="text-3xl font-medium tracking-tight mb-6">Heritage T2</h3>
<p className="text-stone-600 mb-8 leading-relaxed max-w-md">
<span className="lang-pt">A evolução do clássico. Dois quartos com privacidade separada por uma área social generosa. Perfeito para pequenas famílias.</span>
<span className="lang-en">The evolution of a classic. Two bedrooms with privacy separated by a generous social area. Perfect for small families.</span>
</p>
<button className="self-start text-sm border-b border-stone-900 pb-0.5 hover:text-stone-600 hover:border-stone-600 transition-colors" onclick="showPage('contacto')">
<span className="lang-pt">Saber mais</span><span className="lang-en">Learn more</span>
</button>
</div>
</div>
</div>

<div className="group border-stone-200 border-b">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[600px]">
<div className="order-2 lg:order-1 lg:p-16 flex flex-col pt-8 pr-8 pb-8 pl-8 justify-center">
<span className="text-xs font-semibold tracking-widest uppercase text-stone-500 mb-2">Typology T3</span>
<h3 className="text-3xl font-medium tracking-tight mb-6">Yuen T3</h3>
<p className="leading-relaxed text-stone-600 max-w-md mb-8">
<span className="lang-pt">Inspirada na arquitetura oriental, focada no pátio interior. Uma casa para viver permanentemente com distinção e calma.</span>
<span className="lang-en">Inspired by oriental architecture, focused on the inner courtyard. A home for permanent living with distinction and calm.</span>
</p>
<ul className="space-y-2 text-sm text-stone-500 mb-8">
<li className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> <span className="lang-pt">Uso: Habitação Permanente</span><span className="lang-en">Use: Permanent Home</span></li>
</ul>
<button className="self-start text-sm border-b border-stone-900 pb-0.5 hover:text-stone-600 hover:border-stone-600 transition-colors" onclick="showPage('contacto')">
<span className="lang-pt">Saber mais</span><span className="lang-en">Learn more</span>
</button>
</div>
<div className="order-1 lg:order-2 bg-stone-200 overflow-hidden h-64 lg:h-full relative">
<img alt="Yuen T3" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/629dfc3e-0d99-4437-b00a-02b4552d1868_1600w.jpg"/>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 border-b border-stone-200 mt-24 pb-24">

<div className="group border-b md:border-b-0 md:border-r border-stone-200 p-8 flex flex-col">
<div className="aspect-[4/3] bg-stone-200 mb-6 overflow-hidden relative">
<img alt="Minka T3" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1bcf58d-b299-4364-91f7-61ff907b8fa0_800w.jpg"/>
</div>
<h3 className="text-xl font-medium mb-2">Minka T3</h3>
<p className="text-sm text-stone-600 mb-4 flex-grow">
<span className="lang-pt">Arquitetura vertical, maximizando a área de implantação reduzida.</span>
<span className="lang-en">Vertical architecture, maximizing reduced footprint area.</span>
</p>
<button className="text-xs font-semibold tracking-widest uppercase hover:text-stone-500 text-left" onclick="showPage('contacto')">
<span className="lang-pt">Ver Detalhes</span><span className="lang-en">View Details</span>
</button>
</div>

<div className="group border-b md:border-b-0 md:border-r border-stone-200 p-8 flex flex-col">
<div className="aspect-[4/3] bg-stone-200 mb-6 overflow-hidden relative">
<img alt="Minka T2" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7d68baf-e3af-4187-944f-54e85220071a_800w.jpg"/>
</div>
<h3 className="text-xl font-medium mb-2">Minka T2</h3>
<p className="text-sm text-stone-600 mb-4 flex-grow">
<span className="lang-pt">Versão compacta da linha Minka. Eficiência espacial extrema.</span>
<span className="lang-en">Compact version of the Minka line. Extreme spatial efficiency.</span>
</p>
<button className="text-xs font-semibold tracking-widest uppercase hover:text-stone-500 text-left" onclick="showPage('contacto')">
<span className="lang-pt">Ver Detalhes</span><span className="lang-en">View Details</span>
</button>
</div>

<div className="group p-8 flex flex-col">
<div className="aspect-[4/3] bg-stone-200 mb-6 overflow-hidden relative">
<img alt="Cabins" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f28f8fb-2c49-4e1f-9057-4d90ad680b60_800w.png"/>
</div>
<h3 className="text-xl font-medium mb-2">MAYU Cabins</h3>
<p className="text-sm text-stone-600 mb-4 flex-grow">
<span className="lang-pt">Módulos únicos para estúdio, escritório ou quarto extra.</span>
<span className="lang-en">Single modules for studio, office, or extra room.</span>
</p>
<button className="text-xs font-semibold tracking-widest uppercase hover:text-stone-500 text-left" onclick="showPage('contacto')">
<span className="lang-pt">Ver Detalhes</span><span className="lang-en">View Details</span>
</button>
</div>
</div>
</section>
<section className="py-32 px-6 bg-white border-t border-stone-200">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-center">
<div className="relative group">
<div className="absolute -inset-4 bg-stone-100 rounded-2xl -z-10 transition-transform group-hover:scale-105"></div>
<h2 className="text-xs font-semibold tracking-widest uppercase text-stone-500 mb-6">
<span className="lang-pt">O Nosso Propósito</span><span className="lang-en">Our Purpose</span>
</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900 mb-8">
<span className="lang-pt">Construímos o futuro da habitação.</span>
<span className="lang-en">Building the future of housing.</span>
</h3>
<div className="space-y-8">
<div className="border-l-2 border-stone-900 pl-6">
<p className="text-stone-600 leading-relaxed">
<span className="lang-pt"> Contribuir para a resolução do problema da habitação com casas de alta qualidade, rapidez e sustentabilidade.</span>
<span className="lang-en"> Solve the housing problem by building high-quality modular homes, quickly, and sustainably.</span>
</p>
</div>
<div className="border-l-2 border-stone-300 pl-6">
<p className="text-stone-600 leading-relaxed">
<span className="lang-pt"> Ser referência no sector, apresentando soluções inovadoras com design distinto e impacto positivo no mundo.</span>
<span className="lang-en"> Become a reference in the sector, providing innovative solutions with distinctive design and positive impact.</span>
</p>
</div>
</div>
</div>
<div className="relative h-[400px] overflow-hidden rounded-xl shadow-sm">
<img alt="MAYU Philosophy" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5404716d-eb29-4524-bffa-d516daa97870_1600w.jpg"/>
<div className="bg-stone-900/10 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
<div className="text-center mb-16">
<h2 className="text-xs font-semibold tracking-widest uppercase text-stone-500 mb-2">
<span className="lang-pt">Valores Fundamentais</span>
<span className="lang-en">Core Values</span>
</h2>
<div className="h-1 w-12 bg-stone-900 mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="p-8 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors border border-stone-100">
<div className="w-10 h-10 mb-6 text-stone-800">
<svg fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
</div>
<h4 className="text-lg font-medium mb-3 text-stone-900">
<span className="lang-pt">Qualidade</span>
<span className="lang-en">Quality</span>
</h4>
<p className="text-sm text-stone-600 leading-relaxed">
<span className="lang-pt">Comprometemo-nos a entregar produtos de excelência, onde cada detalhe faz a diferença.</span>
<span className="lang-en">We are committed to delivering excellent products where every detail matters.</span>
</p>
</div>
<div className="p-8 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors border border-stone-100">
<div className="w-10 h-10 mb-6 text-stone-800">
<svg fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
</div>
<h4 className="text-lg font-medium mb-3 text-stone-900">
<span className="lang-pt">Velocidade</span>
<span className="lang-en">Speed</span>
</h4>
<p className="text-sm text-stone-600 leading-relaxed">
<span className="lang-pt">Construímos de forma ágil e eficiente, sem comprometer a qualidade.</span>
<span className="lang-en">We build quickly and efficiently without compromising quality.</span>
</p>
</div>
<div className="p-8 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors border border-stone-100">
<div className="w-10 h-10 mb-6 text-stone-800">
<svg fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
</div>
<h4 className="text-lg font-medium mb-3 text-stone-900">
<span className="lang-pt">Sustentabilidade</span>
<span className="lang-en">Sustainability</span>
</h4>
<p className="text-sm text-stone-600 leading-relaxed">
<span className="lang-pt">Adotamos práticas que respeitam o ambiente, garantindo um futuro mais sustentável.</span>
<span className="lang-en">We embrace practices that respect the environment, ensuring a more sustainable future.</span>
</p>
</div>
<div className="p-8 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors border border-stone-100">
<div className="w-10 h-10 mb-6 text-stone-800">
<svg fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path>
<path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"></path>
</svg>
</div>
<h4 className="text-lg font-medium mb-3 text-stone-900">
<span className="lang-pt">Inovação</span>
<span className="lang-en">Innovation</span>
</h4>
<p className="text-sm text-stone-600 leading-relaxed">
<span className="lang-pt">Enfrentamos desafios com soluções criativas que redefinem o conceito de habitação.</span>
<span className="lang-en">We tackle challenges with creative solutions that redefine the concept of housing.</span>
</p>
</div>
<div className="p-8 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors border border-stone-100">
<div className="w-10 h-10 mb-6 text-stone-800">
<svg fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 16V12M12 8h.01"></path>
</svg>
</div>
<h4 className="text-lg font-medium mb-3 text-stone-900">
<span className="lang-pt">Transparência</span>
<span className="lang-en">Transparency</span>
</h4>
<p className="text-sm text-stone-600 leading-relaxed">
<span className="lang-pt">Atuamos de forma clara e honesta, garantindo confiança em todas as interacções.</span>
<span className="lang-en">We act with clarity and honesty, ensuring trust in every interaction.</span>
</p>
</div>
<div className="p-8 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors border border-stone-100">
<div className="w-10 h-10 mb-6 text-stone-800">
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</svg>
</div>
<h4 className="text-lg font-medium mb-3 text-stone-900">
<span className="lang-pt">Compromisso</span>
<span className="lang-en">Commitment</span>
</h4>
<p className="text-sm text-stone-600 leading-relaxed">
<span className="lang-pt">Dedicamo-nos a resolver as necessidades habitacionais de forma eficaz e duradoura.</span>
<span className="lang-en">We are dedicated to solving housing needs effectively and sustainably.</span>
</p>
</div>
</div>
</div>
</section>

<section className="text-stone-100 bg-[#3F4A3C] pt-24 pr-6 pb-24 pl-6">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">
<span className="lang-pt">Feito à Medida.</span>
<span className="lang-en">Tailor-Made.</span>
</h2>
<p className="text-stone-400 text-lg leading-relaxed mb-10">
<span className="lang-pt">O seu terreno é único, a sua casa também deve ser. Adaptamos layouts, acabamentos e combinamos módulos para criar uma solução exclusiva que responde à topografia e aos seus desejos.</span>
<span className="lang-en">Your land is unique, your home should be too. We adapt layouts, finishes, and combine modules to create an exclusive solution that responds to topography and your desires.</span>
</p>
<button className="bg-white text-stone-900 px-8 py-3 rounded-md text-sm font-semibold hover:bg-stone-200 transition-colors" onclick="showPage('contacto')">
<span className="lang-pt">Falar connosco sobre personalização</span>
<span className="lang-en">Talk to us about custom solutions</span>
</button>
</div>
</section>
</div>

<div className="page-content pt-20 hidden" id="casos">
<header className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
<h1 className="text-5xl md:text-8xl font-medium tracking-tighter text-stone-900 mb-8">
<span className="lang-pt">Casos<br/>&amp; Mood</span>
<span className="lang-en">Cases<br/>&amp; Mood</span>
</h1>
<p className="text-xl text-stone-500 max-w-lg leading-relaxed">
<span className="lang-pt">Uma curadoria de projetos reais e da atmosfera que inspira o universo MAYU. Arquitetura em diálogo com o silêncio.</span>
<span className="lang-en">A curation of real projects and the atmosphere that inspires the MAYU universe. Architecture in dialogue with silence.</span>
</p>
</header>
<section className="px-6 pb-24">
<div className="max-w-7xl mx-auto space-y-32">

<article className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

<div className="md:col-span-4 order-2 md:order-1 space-y-6">
<div className="border-t border-black pt-4">
<span className="block text-xs font-semibold tracking-widest uppercase mb-1">
                        Douro, Portugal
                      </span>
<span className="block text-stone-500 text-sm">
                        Typology: Minka T3
                      </span>
</div>
<h2 className="text-3xl font-medium tracking-tight">
            Vale do Rio
        </h2>
<p className="text-stone-600 leading-relaxed">
<span className="lang-pt">
                        Desafiando o declive acentuado, o sistema modular permitiu uma construção
                        suspensa, minimizando o impacto no solo e maximizando as vistas.
                      </span>
<span className="lang-en">
                        Challenging the steep slope, the modular system allowed for a suspended
                        construction, minimizing ground impact and maximizing views.
                      </span>
</p>
</div>

<div className="case-slider md:col-span-8 order-1 md:order-2 overflow-hidden rounded-sm relative h-[500px]">
<img alt="Vale do Rio 1" className="case-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a9d91f10-cd56-4f2a-904d-1ec0649d610c_3840w.jpg"/>
<img alt="Vale do Rio 2" className="case-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c866ba42-83f1-44d4-9a5c-3cdad860e24c_1600w.jpg"/>
<img alt="Vale do Rio 3" className="case-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6f0bab58-9b47-4a1e-a92e-12939465c79e_1600w.jpg"/>
<img alt="Vale do Rio 4" className="case-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/124152b2-a2bd-465a-af40-07c76e4e689b_1600w.jpg"/>
<img alt="Vale do Rio 5" className="case-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/45cdb102-68f8-4c63-9c4b-4fd8ede22c1d_1600w.jpg"/>
</div>
</article>

<article className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

<div className="case-slider md:col-span-8 overflow-hidden rounded-sm relative h-[500px]">
<img alt="Casa da Pinheira 0" className="case-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1bcf58d-b299-4364-91f7-61ff907b8fa0_3840w.jpg"/>
<img alt="Casa da Pinheira" className="case-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e837940-3769-4662-bf68-589e0fb4b2e3_1600w.jpg"/>
<img alt="Casa da Pinheira 1" className="case-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65287fe1-073c-4685-8957-9fce6bd859dc_1600w.jpg"/>
<img alt="Casa da Pinheira 2" className="case-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/56925095-9c54-45e8-9472-d9e324261294_1600w.jpg"/>
</div>

<div className="md:col-span-4 space-y-6">
<div className="border-t border-black pt-4">
<span className="block text-xs font-semibold tracking-widest uppercase mb-1">
                        Melides, Portugal
                      </span>
<span className="block text-stone-500 text-sm">
                        Typology: Heritage T2 Custom
                      </span>
</div>
<h2 className="text-3xl font-medium tracking-tight">
                            Casa da Pinheira
                        </h2>
<p className="text-stone-600 leading-relaxed">
<span className="lang-pt">
                        Implantada num pinhal denso, esta casa utiliza madeira queimada na fachada
                        para se fundir com as sombras das árvores. Um refúgio de silêncio.
                      </span>
<span className="lang-en">
                        Set in a dense pine forest, this house uses charred timber cladding to blend
                        with the tree shadows. A refuge of silence.
                      </span>
</p>
</div>
</article>

<article className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

<div className="md:col-span-4 order-2 md:order-1 space-y-6">
<div className="border-t border-black pt-4">
<span className="block text-xs font-semibold tracking-widest uppercase mb-1">
                        Douro, Portugal
                      </span>
<span className="block text-stone-500 text-sm">
                        Typology: Minka T3
                      </span>
</div>
<h2 className="text-3xl font-medium tracking-tight">
                            Vale do Rio
                        </h2>
<p className="text-stone-600 leading-relaxed">
<span className="lang-pt">
                        Desafiando o declive acentuado, o sistema modular permitiu uma construção
                        suspensa, minimizando o impacto no solo e maximizando as vistas.
                      </span>
<span className="lang-en">
                        Challenging the steep slope, the modular system allowed for a suspended
                        construction, minimizing ground impact and maximizing views.
                      </span>
</p>
</div>

<div className="case-slider md:col-span-8 order-1 md:order-2 overflow-hidden rounded-sm relative h-[500px]">
<img alt="Vale do Rio 1" className="case-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a9d91f10-cd56-4f2a-904d-1ec0649d610c_3840w.jpg"/>
<img alt="Vale do Rio 2" className="case-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c866ba42-83f1-44d4-9a5c-3cdad860e24c_1600w.jpg"/>
<img alt="Vale do Rio 3" className="case-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6f0bab58-9b47-4a1e-a92e-12939465c79e_1600w.jpg"/>
<img alt="Vale do Rio 4" className="case-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/124152b2-a2bd-465a-af40-07c76e4e689b_1600w.jpg"/>
<img alt="Vale do Rio 5" className="case-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/45cdb102-68f8-4c63-9c4b-4fd8ede22c1d_1600w.jpg"/>
</div>
</article>
</div>
</section>
</div>

<div className="page-content pt-20 hidden" id="pecas">
<header className="py-24 px-6 max-w-7xl mx-auto border-b border-stone-200">
<h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-stone-900 mb-6">
<span className="lang-pt">MAYU Home</span>
<span className="lang-en">MAYU Home</span>
</h1>
<p className="text-lg text-stone-600 max-w-2xl">
<span className="lang-pt">Objetos e mobiliário desenhados com a mesma linguagem, materialidade e ética das casas MAYU.</span>
<span className="lang-en">
              Objects and furniture designed with the same language, materiality, and ethics as MAYU homes.
            </span>
</p>
</header>
<section className="px-6 py-12">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group">
<div className="bg-white rounded-lg overflow-hidden border border-stone-100 shadow-sm aspect-square relative mb-4">
<img alt="Vanity" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5385f464-80d2-41c8-86b6-3213733def3f_1600w.jpg"/>
</div>
<h3 className="text-lg font-medium">Vanity Unit 01</h3>
<p className="text-sm text-stone-500">
<span className="lang-pt">Carvalho maciço e pedra natural.</span>
<span className="lang-en">Solid oak and natural stone.</span>
</p>
</div>

<div className="group">
<div className="bg-white rounded-lg overflow-hidden border border-stone-100 shadow-sm aspect-square relative mb-4">
<img alt="Side Table" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8b92881-1001-43b1-9347-1fbdbe3830b9_3840w.jpg"/>
</div>
<h3 className="text-lg font-medium">Side Table M</h3>
<p className="text-sm text-stone-500">
<span className="lang-pt">Aço lacado texturado. Outdoor.</span>
<span className="lang-en">Textured lacquered steel. Outdoor.</span>
</p>
</div>

<div className="group">
<div className="bg-white rounded-lg overflow-hidden border border-stone-100 shadow-sm aspect-square relative mb-4">
<img alt="Garden Bench" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1274c5e7-a81f-4f04-a299-057197d69587_1600w.jpg"/>
</div>
<h3 className="text-lg font-medium">Bench System</h3>
<p className="text-sm text-stone-500">
<span className="lang-pt">Modular e expansível.</span>
<span className="lang-en">Modular and expandable.</span>
</p>
</div>
</div>
<div className="max-w-7xl mx-auto mt-20 text-center border-t border-stone-200 pt-12">
<h4 className="text-xl font-medium mb-4">
<span className="lang-pt">Não somos uma loja de massas.</span>
<span className="lang-en">We are not a mass-market shop.</span>
</h4>
<p className="text-stone-500 mb-8 max-w-lg mx-auto">
<span className="lang-pt">Cada peça é produzida sob encomenda para garantir desperdício zero e qualidade eterna.</span>
<span className="lang-en">Each piece is made to order to ensure zero waste and eternal quality.</span>
</p>
<button className="inline-block border border-stone-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-stone-900 hover:text-white transition-colors" onclick="showPage('contacto')">
<span className="lang-pt">Pedir peças por medida</span>
<span className="lang-en">Request custom pieces</span>
</button>
</div>
</section>
</div>

<div className="page-content pt-20 hidden" id="contacto">
<div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">

<div className="bg-stone-100 p-8 lg:p-24 flex flex-col justify-between">
<div>
<h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">
<span className="lang-pt">Vamos começar<br/>a conversa.</span>
<span className="lang-en">Let's start<br/>the conversation.</span>
</h1>
<p className="text-lg text-stone-600 mb-12 max-w-md">
<span className="lang-pt">Quer esteja à procura de uma casa pronta a habitar ou de um projeto à medida, estamos aqui para guiar todo o processo.</span>
<span className="lang-en">Whether you are looking for a ready-to-live home or a bespoke project, we are here to guide the entire process.</span>
</p>
</div>
<div className="space-y-8">
<div>
<span className="block text-xs font-semibold tracking-widest uppercase text-stone-500 mb-1">Email</span>
<a className="text-xl font-medium hover:text-stone-600" href="mailto:comercial@mayu.pt">comercial@mayu.pt</a>
</div>
<div>
<span className="block text-xs font-semibold tracking-widest uppercase text-stone-500 mb-1">Studio</span>
<p className="text-lg">Porto, Portugal</p>
</div>
<div>
<span className="block text-xs font-semibold tracking-widest uppercase text-stone-500 mb-1">Area</span>
<p className="text-stone-600">
<span className="lang-pt">Operamos em Portugal e Internacionalmente.</span>
<span className="lang-en">Operations in Portugal &amp; International.</span>
</p>
</div>
</div>
</div>

<div className="bg-white p-8 lg:p-24 flex flex-col justify-center">
<form className="space-y-6 max-w-lg w-full" onsubmit="event.preventDefault(); alert('Message sent / Mensagem enviada');">
<div>
<label className="block text-sm font-medium text-stone-700 mb-2">
<span className="lang-pt">Nome</span><span className="lang-en">Name</span>
</label>
<input className="w-full bg-stone-50 border-0 border-b border-stone-300 focus:border-stone-900 focus:ring-0 px-0 py-2 transition-colors placeholder:text-stone-400" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
<input className="w-full bg-stone-50 border-0 border-b border-stone-300 focus:border-stone-900 focus:ring-0 px-0 py-2 transition-colors" placeholder="email@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-2">
<span className="lang-pt">País</span><span className="lang-en">Country</span>
</label>
<input className="w-full bg-stone-50 border-0 border-b border-stone-300 focus:border-stone-900 focus:ring-0 px-0 py-2 transition-colors" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-2">
<span className="lang-pt">Interesse</span><span className="lang-en">Interest</span>
</label>
<select className="w-full bg-stone-50 border-0 border-b border-stone-300 focus:border-stone-900 focus:ring-0 px-0 py-2 transition-colors text-stone-600">
<option className="lang-pt">Casas Tipo</option><option className="lang-en" style={{display: 'none'}}>Type Homes</option>
<option className="lang-pt">Projeto à Medida</option><option className="lang-en" style={{display: 'none'}}>Tailor Made Project</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-2">
<span className="lang-pt">Mensagem</span><span className="lang-en">Message</span>
</label>
<textarea className="w-full bg-stone-50 border-0 border-b border-stone-300 focus:border-stone-900 focus:ring-0 px-0 py-2 transition-colors resize-none" rows="4"></textarea>
</div>
<button className="w-full bg-[#3F4A3C] text-white py-4 mt-4 rounded-sm font-medium hover:bg-[#2f372c] transition-colors" type="submit">
<span className="lang-pt">Enviar Pedido</span>
<span className="lang-en">Send Request</span>
</button>
<p className="text-xs text-stone-400 text-center mt-4">
<span className="lang-pt">Apoio completo e transparência desde o primeiro dia.</span>
<span className="lang-en">Full support and transparency from day one.</span>
</p>
</form>
</div>
</div>
</div>

<footer className="bg-[#3F4A3C] text-stone-300 py-12 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-2xl font-semibold tracking-tight text-white">MAYU</span>
<div className="flex gap-6 text-sm">
<a className="hover:text-white transition-colors" href="https://www.facebook.com/mayuhomes" rel="noopener noreferrer" target="_blank">
                Facebook
            </a>
<a className="hover:text-white transition-colors" href="https://www.instagram.com/mayuhomes/" rel="noopener noreferrer" target="_blank">
                Instagram
            </a>
<a className="hover:text-white transition-colors" href="https://www.linkedin.com/company/mayuhomes/" rel="noopener noreferrer" target="_blank">
                LinkedIn
            </a>
</div>
<p className="text-xs text-center md:text-right">
            © 2026 MAYU Modular Living.
            <span className="lang-pt">Todos os direitos reservados.</span>
<span className="lang-en">All rights reserved.</span>
</p>
</div>
</footer>



    </>
  );
}
