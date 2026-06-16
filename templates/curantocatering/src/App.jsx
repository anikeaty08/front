import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
deepRed: "#A83730",
rust: "#904A3F",
olive: "#8F9561",
teal: "#3D5A5B",
sand: "#DBB08A",
beige: "#D7C4AE",
cream: "#F9F7F2",
},
letterSpacing: {
ultra: "0.25em",
},
},
},
};





         const menuBtn = document.getElementById('menu-toggle');
         const mobileMenu = document.getElementById('mobile-menu');
         const mobileLinks = document.querySelectorAll('.mobile-link');
         const x = document.getElementByClassName('group bg-neutral-900');
         console.log('x:::', x)

         // Toggle menu on button click
         menuBtn.addEventListener('click', () => {
             mobileMenu.classList.toggle('hidden');
         });
         
         // Close menu and scroll when a link is clicked
         mobileLinks.forEach(link => {
             link.addEventListener('click', (e) => {
                 e.preventDefault(); // Prevent default anchor jump

                 const targetId = link.getAttribute('href');
                 const targetSection = document.querySelector(targetId);

                 if (targetSection) {

                     // Smooth scroll to the section
                     targetSection.scrollIntoView({
                         behavior: 'smooth',
                         block: 'start'
                     });
                     // Close the menu
                     setTimeout(mobileMenu.classList.add('hidden'), 200)
                 }
             });
         });

      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 left-0 transition-all duration-300 bg-cream/90 backdrop-blur-sm border-b border-beige/30">
<div className="flex z-50 w-full mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">
<a className="text-deepRed uppercase text-xl tracking-ultra font-logo-primary" href="#"> Curanto
            </a>
<div className="hidden md:flex space-x-12 text-xs font-medium tracking-widest uppercase text-teal/80">
<a className="hover:text-deepRed transition-colors" href="#raices">Raíces</a>
<a className="hover:text-deepRed transition-colors" href="#valores"> Valores </a>
<a className="hover:text-deepRed transition-colors" href="#experiencia"> Experiencia </a>
<a className="hover:text-deepRed transition-colors" href="#menues"> Menúes </a>
<a className="hover:text-deepRed transition-colors" href="#tienda">Tienda</a>
<a className="hover:text-deepRed transition-colors" href="#contacto"> Contacto </a>
</div>

</div>

<div className="hidden absolute top-full left-0 w-full bg-cream border-b border-beige/30 shadow-xl transition-all duration-300 md:hidden z-40" id="mobile-menu">
<div className="flex flex-col text-center pt-8 pr-8 pb-8 pl-8 space-y-8">
<a className="mobile-link uppercase text-teal/80 hover:text-deepRed transition-colors text-sm tracking-[0.2em]" href="#raices">Raíces</a>
<a className="mobile-link uppercase text-teal/80 hover:text-deepRed transition-colors text-sm tracking-[0.2em]" href="#valores">Valores</a>
<a className="mobile-link text-sm uppercase tracking-[0.2em] text-teal/80 hover:text-deepRed transition-colors" href="#experiencia">Experiencia</a>
<a className="mobile-link text-sm uppercase tracking-[0.2em] text-teal/80 hover:text-deepRed transition-colors" href="#menues">Menúes</a>
<a className="mobile-link text-sm uppercase tracking-[0.2em] text-teal/80 hover:text-deepRed transition-colors" href="#tienda">Tienda</a>
<a className="mobile-link text-sm uppercase tracking-[0.2em] text-deepRed font-semibold hover:text-rust transition-colors" href="#contacto">Contacto</a>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<iframe allow="autoplay; encrypted-media" allowfullscreen="" className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none brightness-[0.4]" frameborder="0" src="https://www.youtube.com/embed/nTLRqQrgwtA?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=nTLRqQrgwtA&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1" title="Background Video"></iframe>
<div className="bg-gradient-to-t from-teal/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 text-center max-w-5xl mt-16 px-4 relative">
<h1 className="text-cream md:text-7xl lg:text-8xl leading-[1.1] uppercase text-5xl tracking-ultra font-logo-primary mb-16">
               Curanto <br/>
<span className="text-rust normal-case md:text-5xl lg:text-7xl text-4xl italic font-script tracking-tight"> Catering de fuegos </span>
</h1>
<p className="text-sand md:text-xl text-lg font-light tracking-wide font-body opacity-90 max-w-2xl mx-auto mb-10">Una propuesta diferente para tu evento</p>
<div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8">
<a className="group relative px-10 py-4 border border-sand text-sand uppercase text-xs tracking-[0.2em] overflow-hidden hover:text-teal transition-colors duration-300" href="#contacto">
<span className="relative z-10 font-semibold"> Diseña tu experiencia </span>
<div className="absolute inset-0 bg-sand transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out -z-0">
</div>
</a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
<iconify-icon icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>
</header>

<section className="md:py-32 pt-24 pb-24 px-6 relative" id="raices">
<div className="absolute top-0 right-0 w-1/3 h-full bg-beige/10 pointer-events-none"></div>
<div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
<div className="relative order-2 md:order-1">
<img alt="Chef Hernán cooking" className="hover:grayscale-0 transition-all duration-1000 ease-out shadow-teal/20 w-full h-[600px] object-cover shadow-2xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/19cbb25f-a432-4737-ab6e-2d2008ce779d_800w.jpg"/>
<div className="absolute -bottom-8 -right-8 bg-teal text-cream p-8 max-w-xs shadow-xl hidden md:block">
<p className="leading-relaxed text-xl italic font-heading scale-100">
                     "Curanto nace de mi deseo por compartir las cosas que más me gustan: cocinar con fuego
                     y al aire libre"
                  </p>
</div>
</div>
<div className="space-y-8 order-1 md:order-2">
<div className="flex gap-4 items-center">
<span className="h-px w-12 bg-deepRed"></span>
<span className="text-deepRed uppercase text-xs font-semibold tracking-widest"> Sobre Nosotros </span>
</div>
<h2 className="md:text-5xl text-teal leading-tight text-4xl font-heading">Nuestras Raíces</h2>
<p className="text-teal/70 leading-relaxed text-lg font-light">Luego de realizar formaciones y estar muchos años al frente de diferentes cocinas, entre ollas y fogones, decidí emprender el viaje de formar mi propio catering especializado en técnicas con el fuego.</p>
<p className="text-teal/70 leading-relaxed text-lg font-light">
                  Cada vez que encendemos nuestros fuegos, sus aromas y sonidos nos trasladan sin escalas a
                  nuestra niñez,
                  nuestras
                  raíces en Argentina, las cuales queremos compartir con todos vostros.
               </p>
<div className="pt-4">
<p className="text-rust text-2xl font-script -rotate-2">Hernán</p>
</div>
</div>
</div>
</section>
<section className="border-teal/10 border-b pt-24 pb-24 px-6 bg-beige/40" id="valores">
<div className="text-center max-w-4xl mx-auto">
<div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
<span className="text-deepRed uppercase text-lg font-bold tracking-widest"> Tradición </span>
<span className="hidden md:block h-1 w-1 rounded-full bg-teal/30"></span>
<span className="text-deepRed uppercase text-lg font-bold tracking-widest"> Autenticidad </span>
<span className="hidden md:block h-1 w-1 rounded-full bg-teal/30"></span>
<span className="font-bold tracking-widest text-deepRed text-lg uppercase"> Compromiso </span>
</div>
<h2 className="md:text-4xl leading-tight text-3xl text-teal font-heading mb-6 pt-6">
               "Nos gusta la naturaleza y compartir.
               <br/>
               Mantenemos las tradiciones y hacemos que los clientes sean parte de la experiencia."
            </h2>
</div>
</section>
<section className="pt-24 pb-24" id="experiencia">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-20">
<span className="text-deepRed uppercase text-xs font-bold tracking-widest tracking-[0.2em]">
               Servicios Exclusivos
               </span>
<h2 className="font-heading text-4xl md:text-5xl text-teal leading-tight uppercase">
                  La propuesta <br/>
<span className="italic font-script text-rust normal-case tracking-normal">Curanto</span>
</h2>
</div>
<div className="space-y-32">
<div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center group">
<div className="order-2 md:order-1 space-y-6">
<h3 className="font-heading text-2xl text-teal uppercase tracking-wider">Cocina en vivo</h3>
<p className="text-teal/70 leading-relaxed text-lg font-light">
                        Elaboramos el menú al momento con productos frescos y materia prima de alta calidad.
                        Contamos con
                        parrillas de
                        diseño exclusivo y personal cualificado para ofrecer una experiencia visual y
                        gastronómica de 360º.
                     </p>
</div>
<div className="order-1 md:order-2">
<div className="aspect-[16/9] overflow-hidden shadow-sm bg-stone-100">
<img alt="Cocina en vivo" className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2c4f9134-13a3-4303-88af-4ae7b7484eb8_1600w.jpg"/>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center group">
<div className="aspect-[16/9] overflow-hidden shadow-sm bg-stone-100">
<img alt="Flexibilidad geográfica" className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57eba1ae-3266-4f3c-8107-0a8a1fa0eb87_1600w.png"/>
</div>
<div className="space-y-6">
<h3 className="font-heading text-2xl text-teal uppercase tracking-wider">Flexibilidad
                        geográfica
                     </h3>
<p className="text-teal/70 leading-relaxed text-lg font-light">
                        Operamos en toda España y nuestra infraestructura es totalmente independiente: no
                        necesitamos cocina
                        tradicional
                        ni instalaciones previas. Diseñamos la solución gastronómica adaptada al entorno.
                     </p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center group">
<div className="order-2 md:order-1 space-y-6">
<h3 className="font-heading text-2xl text-teal uppercase tracking-wider">Team building y
                        eventos especiales
                     </h3>
<p className="text-teal/70 leading-relaxed text-lg font-light">
                        Adaptamos nuestro servicio para diferentes tipos de eventos como bodas, particulares y sector corporativo,
                        jornadas de Team Building y experiencias de formación en técnicas de fuego y brasa. Una propuesta
                        diferente y
                        personalizada para empresas que buscan autenticidad y excelencia técnica.
                     </p>
</div>
<div className="order-1 md:order-2">
<div className="aspect-[16/9] overflow-hidden shadow-sm bg-stone-100">
<img alt="Eventos especiales" className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34e2f2a7-2c3e-4a8b-acad-eb5ddb45ce59_1600w.jpg"/>
</div>
</div>
</div>
<div className="border-teal/5 border-t pt-12 pb-12 bg-white">
<div className="max-w-4xl mx-auto text-center space-y-8">
<span className="text-deepRed uppercase text-xs font-bold tracking-widest tracking-[0.2em]">
                     Proyectos a medida
                     </span>
<h3 className="md:text-4xl text-teal uppercase text-3xl font-heading">Diseñemos
                        vuestra experiencia
                     </h3>
<p className="text-teal/70 leading-relaxed text-lg font-light max-w-2xl mx-auto">
                        Entendemos cada evento como una pieza única. Disponemos de una amplia carta de
                        productos y técnicas que
                        adaptamos según vuestras sugerencias y las necesidades del entorno. Nuestra
                        prioridad es crear una
                        propuesta
                        gastronómica que refleje vuestra identidad.
                     </p>
<div className="pt-8">
<a className="group relative inline-block px-12 py-5 bg-teal text-cream uppercase text-xs tracking-[0.2em] overflow-hidden transition-colors duration-300" href="#contacto">
<span className="relative z-10 font-semibold">Personaliza tu evento</span>
<div className="absolute inset-0 bg-deepRed transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out -z-0">
</div>
</a>
<p className="text-[12px] text-deepRed uppercase italic tracking-widest mt-4">
                           — Consultoría personalizada sin compromiso —
                        </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="pt-12 pb-12 bg-cream" id="menues">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<span className="text-deepRed uppercase block text-xs font-bold tracking-[0.2em] mb-2">Inspiración Gastronómica</span>
<h3 className="text-teal uppercase text-3xl font-heading">nuestros Menúes sugeridos</h3>
<p className="text-teal/70 leading-relaxed text-lg font-light">
                  Tres propuestas de fuego diseñadas para diferentes tipos de eventos. Todos los menús son personalizables.
               </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<article className="bg-white border border-teal/10 overflow-hidden hover:shadow-xl transition-all duration-500 group">

<div className="relative h-48 overflow-hidden">
<img alt="Menú Origen" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2c4f9134-13a3-4303-88af-4ae7b7484eb8_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-teal/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-end justify-between">
<div>
<h4 className="font-heading text-2xl text-white uppercase tracking-wide">Origen</h4>
<p className="text-sand text-sm font-light mt-1">Clásico, equilibrado y muy accesible</p>
</div>
<div className="bg-cream/90 backdrop-blur-sm px-2 py-1 text-[9px] tracking-[0.2em] uppercase font-bold text-teal">
                              Tradicional
                           </div>
</div>
</div>
</div>

<div className="p-6 space-y-5">

<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-beige/30 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-rust"></span>
<span className="text-[10px] uppercase tracking-wider text-teal/80 font-semibold">Ideal para grupos grandes</span>
</div>

<div>
<h5 className="text-[11px] uppercase tracking-[0.15em] font-bold text-deepRed mb-3 border-b border-teal/10 pb-1">
                           Entrantes</h5>
<ul className="space-y-2 text-[13px] text-teal/70 leading-relaxed">
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Chorizo criollo y morcilla</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Provolone con tomate seco y especias</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Ensalada de cabra con higos de temporada</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Ensalada verde y escalivada tradicional</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Tablas de embutidos</span>
</li>
</ul>
</div>

<div>
<h5 className="text-[11px] uppercase tracking-[0.15em] font-bold text-deepRed mb-3 border-b border-teal/10 pb-1">
                           Segundos</h5>
<ul className="space-y-2 text-[13px] text-teal/70 leading-relaxed">
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Tira de asado</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Secreto de cerdo ahumado Km0</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Colita de cuadril argentina</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Lubina o salmón papillote</span>
</li>
</ul>
</div>

<div>
<h5 className="text-[11px] uppercase tracking-[0.15em] font-bold text-deepRed mb-3 border-b border-teal/10 pb-1">
                           Postres</h5>
<ul className="space-y-2 text-[13px] text-teal/70 leading-relaxed">
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Pastel de queso "top"</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Brownie sin gluten</span>
</li>
</ul>
</div>

<div className="pt-4 border-t border-teal/10">
<p className="text-[11px] text-teal/50 italic leading-relaxed">
                           Pan de campo, chimichurri, montaje de parrillas y desplazamiento incluidos.
                        </p>
</div>
</div>
</article>

<article className="bg-white border border-teal/10 overflow-hidden hover:shadow-xl transition-all duration-500 group">
<div className="relative h-48 overflow-hidden">
<img alt="Menú Ritual Curanto" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-teal/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-end justify-between">
<div>
<h4 className="font-heading text-2xl text-white uppercase tracking-wide">Ritual Curanto</h4>
<p className="text-sand text-sm font-light mt-1">Experiencia completa con platos de autor</p>
</div>
<div className="bg-cream/90 backdrop-blur-sm px-2 py-1 text-[9px] tracking-[0.2em] uppercase font-bold text-teal">
                              Popular
                           </div>
</div>
</div>
</div>
<div className="p-6 space-y-5">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-beige/30 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-rust"></span>
<span className="text-[10px] uppercase tracking-wider text-teal/80 font-semibold">Para celebraciones especiales</span>
</div>
<div>
<h5 className="text-[11px] uppercase tracking-[0.15em] font-bold text-deepRed mb-3 border-b border-teal/10 pb-1">
                           Entrantes</h5>
<ul className="space-y-2 text-[13px] text-teal/70 leading-relaxed">
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Arroz a la leña (de mar, carrillera o butifarra)</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Mollejas</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Ensalada de canónigos, aguacate y langostino</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Ensalada de rúcula, parmesano y peras</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Empanadillas de calamar</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Salteado de setas con ajo y perejil</span>
</li>
</ul>
</div>
<div>
<h5 className="text-[11px] uppercase tracking-[0.15em] font-bold text-deepRed mb-3 border-b border-teal/10 pb-1">
                           Segundos</h5>
<ul className="space-y-2 text-[13px] text-teal/70 leading-relaxed">
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Solomillo</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Piezas enteras (cordero, cochinillo o costillar)</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Bacalao a la estaca</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Turbot</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Nebraska, Wagyu y chuletones Premium (consultar)</span>
</li>
</ul>
</div>
<div>
<h5 className="text-[11px] uppercase tracking-[0.15em] font-bold text-deepRed mb-3 border-b border-teal/10 pb-1">
                           Acompañamientos &amp; Postres</h5>
<ul className="space-y-2 text-[13px] text-teal/70 leading-relaxed">
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Patatas y boniatos asados</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Parrillada de verduras</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Piña asada con helado de coco, lima y Malibú</span>
</li>
</ul>
</div>
<div className="pt-4 border-t border-teal/10">
<p className="text-[11px] text-teal/50 italic leading-relaxed">
                           Adaptable a menús vegetarianos y celíacos bajo reserva previa.
                        </p>
</div>
</div>
</article>

<article className="bg-white border border-teal/10 overflow-hidden hover:shadow-xl transition-all duration-500 group">
<div className="relative h-48 overflow-hidden">
<img alt="Menú Fuego de Autor" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34e2f2a7-2c3e-4a8b-acad-eb5ddb45ce59_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-teal/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-end justify-between">
<div>
<h4 className="font-heading text-2xl text-white uppercase tracking-wide">Fuego de Autor</h4>
<p className="text-sand text-sm font-light mt-1">Versión creativa con guiños argentinos e italianos
                              </p>
</div>
<div className="bg-cream/90 backdrop-blur-sm px-2 py-1 text-[9px] tracking-[0.2em] uppercase font-bold text-teal">
                              Premium
                           </div>
</div>
</div>
</div>
<div className="p-6 space-y-5">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-beige/30 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-rust"></span>
<span className="text-[10px] uppercase tracking-wider text-teal/80 font-semibold">Perfecto para eventos gastro</span>
</div>
<div>
<h5 className="text-[11px] uppercase tracking-[0.15em] font-bold text-deepRed mb-3 border-b border-teal/10 pb-1">
                           Entrantes</h5>
<ul className="space-y-2 text-[13px] text-teal/70 leading-relaxed">
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Empanadilla de carne cortada a cuchillo o humita</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Corazón de alcachofa confitada con salsa romesco</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Ensalada de col ahumada y cítricos</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Ensalada xatonada con bacalao fresco ahumado</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Vitel toné</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Tomate seco Curanto con boquerones</span>
</li>
</ul>
</div>
<div>
<h5 className="text-[11px] uppercase tracking-[0.15em] font-bold text-deepRed mb-3 border-b border-teal/10 pb-1">
                           Segundos</h5>
<ul className="space-y-2 text-[13px] text-teal/70 leading-relaxed">
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Bife de chorizo argentino al asador</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Entraña premium de Girona</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Entrecotte argentino</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Rape (pieza 500 g aprox.)</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Tataki de atún (200 g aprox.)</span>
</li>
</ul>
</div>
<div>
<h5 className="text-[11px] uppercase tracking-[0.15em] font-bold text-deepRed mb-3 border-b border-teal/10 pb-1">
                           Acompañamientos &amp; Postres</h5>
<ul className="space-y-2 text-[13px] text-teal/70 leading-relaxed">
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Patatas y boniatos asados o fritas</span>
</li>
<li className="flex items-start gap-2">
<span className="text-rust mt-0.5 text-xs">•</span>
<span>Tiramisú artesanal, receta italiana</span>
</li>
</ul>
</div>
<div className="pt-4 border-t border-teal/10">
<p className="text-[11px] text-teal/50 italic leading-relaxed">
                           Ideal para cenas más largas, maridajes y showcooking alrededor del fuego.
                        </p>
</div>
</div>
</article>
</div>
</div>
</section>
<section className="bg-[#F2EDE7] pt-24 pb-24" id="partners">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 items-start">
<div className="md:w-1/3 space-y-6">
<span className="text-deepRed uppercase block text-xs font-bold tracking-[0.2em] mb-2">Ecosistema Curanto</span>
<h2 className="font-heading text-4xl text-teal uppercase leading-tight">
                     Gestión <br/>
                     de la Experiencia
                  </h2>
<p className="text-teal leading-relaxed text-lg font-normal">
                     Nos enfocamos en la maestría del fuego. Para los servicios de sala y logística, os conectamos con los
                     mejores
                     especialistas del sector.
                  </p>
</div>
<div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
<div className="border-rust border-t-4 pt-8 pr-8 pb-8 pl-8 shadow-sm">
<h4 className="font-heading text-lg text-teal uppercase mb-3">Mobiliario y Menaje</h4>
<p className="text-teal/80 text-sm leading-relaxed mb-4">
                        Vajilla, cubertería, cristalería y montajes de sala completos para banquetes o aperitivos.
                     </p>
<span className="text-[10px] text-rust uppercase font-bold tracking-widest">— Colaboradores Externos (no incluido)</span>
</div>
<div className="bg-cream p-8 shadow-sm border-t-4 border-rust">
<h4 className="font-heading text-lg text-teal uppercase mb-3">Personal de Servicio</h4>
<p className="text-teal/80 text-sm leading-relaxed mb-4">
                        Equipo de camareros, servicio de sala y logística para el montaje y desmontaje del evento.
                     </p>
<span className="text-[10px] text-rust uppercase font-bold tracking-widest">— Colaboradores Externos (no incluido)</span>
</div>
<div className="sm:col-span-2 bg-teal p-8 text-cream flex flex-col md:flex-row justify-between items-center gap-6">
<div className="max-w-md">
<h4 className="text-beige uppercase text-xl font-heading mb-2">¿Necesitáis una solución integral?</h4>
<p className="text-cream/80 text-sm font-light">Si requerís estos servicios, os facilitaremos el contacto con nuestros partners para que la coordinación sea fluida y profesional.</p>
</div>
<a className="whitespace-nowrap px-8 py-4 border border-beige text-beige hover:bg-beige hover:text-teal transition-all uppercase text-xs font-bold tracking-widest" href="#contacto">
                     Consultar Partners
                     </a>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24 px-6 relative" id="tienda">
<div className="absolute inset-0 bg-grain opacity-40 pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-teal/10 pb-8">
<div className="">
<h2 className="font-heading text-deepRed text-4xl md:text-5xl mb-2">CURANTO EN CASA</h2>
<p className="font-serif text-teal italic text-lg">Lleva la experiencia a tu hogar</p>
</div>
<a className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-teal hover:text-rust transition-colors mt-6 md:mt-0" href="#">
                  Ir a la Tienda
                  <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="h-80 bg-stone-200 overflow-hidden relative mb-4">
<img alt="Conservas" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b6205ce-5e68-4e70-8c6e-5a0f35ba73f8_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 px-3 py-1 text-[10px] tracking-widest uppercase">
                        Disponible pronto
                     </div>
</div>
<h3 className="text-deepRed text-bold text-sm font-bold uppercase">Conservas Artesanales</h3>
<p className="text-sm text-teal/60 font-light mt-1">Sabores de la tierra en frasco.</p>
</div>

<div className="group cursor-pointer">
<div className="h-80 bg-stone-200 overflow-hidden relative mb-4">
<img alt="Meat Packs" className="group-hover:scale-105 transition duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67ffa950-5cae-4b45-9bb6-72f42a1748cd_1600w.jpg"/>
</div>
<h3 className="text-deepRed text-bold text-sm font-bold uppercase">Packs de Carnes</h3>
<p className="text-sm text-teal/60 font-light mt-1">Selección premium para tu parrilla.</p>
</div>

<div className="group cursor-pointer">
<div className="h-80 bg-stone-200 overflow-hidden relative mb-4">
<img alt="Grills" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf4f96cb-ea0e-43de-96a3-d7812b4f1f61_1600w.jpg"/>
</div>
<h3 className="text-deepRed text-bold text-sm font-bold uppercase">Equipamiento</h3>
<p className="text-sm text-teal/60 font-light mt-1">Hierro y fuego profesional.</p>
</div>
</div>
<div className="mt-12 text-center md:hidden">
<a className="inline-block px-8 py-3 border border-teal text-teal text-xs uppercase tracking-widest" href="#">
               Ir a la Tienda
               </a>
</div>
</div>
</section>

<section className="py-24 bg-teal text-cream relative" id="contacto">
<div className="absolute inset-0 bg-grain opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
<div className="space-y-8">
<h2 className="md:text-6xl text-beige text-5xl font-heading">
                  DISEÑA TU
                  <br/>
                  EXPERIENCIA
               </h2>
<div className="space-y-6 pt-8 border-t border-white/10 mt-8">
<div className="flex items-center gap-4 text-sm tracking-widest uppercase text-sand">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
                     info@grupocuranto.com
                  </div>
<div className="flex items-center gap-4 text-sm tracking-widest uppercase text-sand">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
                     605 97 16 94
                  </div>
</div>
<div className="pt-8">
<a className="inline-flex items-center gap-3 bg-white/10 px-6 py-4 hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20" href="https://calendly.com/curantocatering/catering">
<iconify-icon className="text-xl text-sand" icon="solar:calendar-linear"></iconify-icon>
<span className="text-xs uppercase tracking-[0.2em]"> Agenda una videollamada </span>
</a>
<p className="text-[10px] text-white/40 mt-3 ml-1 uppercase tracking-wider">Vía Calendly</p>
</div>
</div>

<div className="bg-cream p-10 md:p-12 text-teal relative">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-deepRed to-rust"></div>
<h3 className="font-heading text-2xl mb-8">Formulario de Evento</h3>
<form className="space-y-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-teal/60 font-semibold"> Nombre y Apellido </label>
<input className="w-full bg-transparent border-b border-teal/20 py-2 text-teal focus:border-rust focus:outline-none transition-colors rounded-none placeholder-teal/20" placeholder="Tu nombre completo" type="text"/>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-teal/60 font-semibold">
                        Correo Electrónico
                        </label>
<input className="w-full bg-transparent border-b border-teal/20 py-2 text-teal focus:border-rust focus:outline-none transition-colors rounded-none placeholder-teal/20" placeholder="ejemplo@correo.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-teal/60 font-semibold"> Teléfono Móvil </label>
<input className="w-full bg-transparent border-b border-teal/20 py-2 text-teal focus:border-rust focus:outline-none transition-colors rounded-none placeholder-teal/20" placeholder="+34 ..." type="tel"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-teal/60 font-semibold"> Fecha del Evento </label>
<input className="w-full bg-transparent border-b border-teal/20 py-2 text-teal focus:border-rust focus:outline-none transition-colors rounded-none" type="date"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-teal/60 font-semibold">
                        Cantidad de Invitados
                        </label>
<input className="w-full bg-transparent border-b border-teal/20 py-2 text-teal focus:border-rust focus:outline-none transition-colors rounded-none placeholder-teal/20" placeholder="Aprox." type="number"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-teal/60 font-semibold"> Lugar del Evento </label>
<input className="w-full bg-transparent border-b border-teal/20 py-2 text-teal focus:border-rust focus:outline-none transition-colors rounded-none placeholder-teal/20" placeholder="Ciudad o Finca" type="text"/>
</div>
<div className="space-y-4 pt-2">
<label className="text-xs uppercase tracking-widest text-teal/60 font-semibold block">
                     Tipo de Evento
                     </label>
<div className="flex flex-wrap gap-6">
<label className="flex items-center gap-3 cursor-pointer group">
<input type="checkbox"/>
<span className="text-sm font-light group-hover:text-rust transition-colors"> Boda </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="" type="checkbox"/>
<span className="text-sm font-light group-hover:text-rust transition-colors"> Corporativo </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="" type="checkbox"/>
<span className="text-sm font-light group-hover:text-rust transition-colors"> Cumpleaños </span>
</label>
</div>
</div>
<div className="pt-6">
<button className="w-full bg-teal text-beige py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-deepRed hover:text-white transition-colors duration-500" type="button">
                     Enviar Solicitud
                     </button>
</div>
<p className="text-[10px] text-center text-teal/40 mt-4">
                     Al enviar, recibirás un enlace para agendar una reunión personalizada.
                  </p>
</form>
</div>
</div>
</section>

<footer className="bg-teal text-cream/40 py-12 border-t border-white/10 text-center">
<div className="max-w-7xl mx-auto px-6 space-y-8">
<div className="text-white uppercase text-lg tracking-ultra font-logo-primary">Curanto Catering</div>
<div className="flex justify-center gap-8 text-xs tracking-widest uppercase">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Facebook</a>
</div>
<div className="flex justify-center gap-6 text-[10px] tracking-widest uppercase opacity-60">
<span style={{}}>Partners:</span>
<a className="hover:text-white transition-colors" href="#"> Les Cabres d'en Peyu </a>
<span className="text-white/20">•</span>
<a className="hover:text-white transition-colors" href="#">La Fonda</a>
</div>
<p className="text-[10px] tracking-widest uppercase pt-4">
               © 2024 Curanto Catering. Todos los derechos reservados.
            </p>
</div>
</footer>


    </>
  );
}
