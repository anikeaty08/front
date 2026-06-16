import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Init Icons
        lucide.createIcons();

        // 1. Mobile Menu Toggle
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            const iconMenu = document.getElementById('icon-menu');
            const iconClose = document.getElementById('icon-close');
            
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                menu.classList.add('flex');
                iconMenu.classList.add('hidden');
                iconClose.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; 
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
                iconMenu.classList.remove('hidden');
                iconClose.classList.add('hidden');
                document.body.style.overflow = 'auto'; 
            }
        }

        // 2. Carousel Logic
        let currentSlide = 0;
        function moveCarousel(direction) {
            const track = document.getElementById('carousel-track');
            const slides = track.children;
            const totalSlides = slides.length;
            
            currentSlide = currentSlide + direction;
            
            if (currentSlide < 0) {
                currentSlide = totalSlides - 1;
            } else if (currentSlide >= totalSlides) {
                currentSlide = 0;
            }
            
            const translateX = -(currentSlide * 100);
            track.style.transform = `translateX(${translateX}%)`;
        }

        // 3. Form Tabs
        function switchTab(tab) {
            const formGeneral = document.getElementById('form-general');
            const formBecas = document.getElementById('form-becas');
            const btnGeneral = document.getElementById('tab-general');
            const btnBecas = document.getElementById('tab-becas');

            if (tab === 'general') {
                formGeneral.classList.remove('hidden');
                formBecas.classList.add('hidden');
                btnGeneral.classList.add('bg-white', 'text-gray-900', 'shadow-sm');
                btnGeneral.classList.remove('text-gray-500');
                btnBecas.classList.remove('bg-white', 'text-gray-900', 'shadow-sm');
                btnBecas.classList.add('text-gray-500');
            } else {
                formGeneral.classList.add('hidden');
                formBecas.classList.remove('hidden');
                btnBecas.classList.add('bg-white', 'text-gray-900', 'shadow-sm');
                btnBecas.classList.remove('text-gray-500');
                btnGeneral.classList.remove('bg-white', 'text-gray-900', 'shadow-sm');
                btnGeneral.classList.add('text-gray-500');
            }
        }

        // 4. Scroll Reveal
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
                observer.observe(el);
            });
        });

        // 5. WhatsApp Toast Logic
        function handleWhatsappClick(e) {
            const toast = document.getElementById('wa-toast');
            toast.classList.remove('-translate-y-[200%]');
            toast.classList.add('translate-y-0');
            setTimeout(() => {
                toast.classList.add('-translate-y-[200%]');
                toast.classList.remove('translate-y-0');
            }, 4000);
        }

        // 6. Navbar Shadow
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-md');
            } else {
                nav.classList.remove('shadow-md');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-24 right-1/2 translate-x-1/2 sm:right-6 sm:translate-x-0 z-[70] bg-white border border-gray-200 shadow-xl rounded-xl p-4 flex items-center gap-3 transform -translate-y-[200%] transition-transform duration-500 max-w-xs w-full" id="wa-toast">
<div className="bg-[#25D366]/10 p-2 rounded-full text-[#25D366]">
<svg className="lucide lucide-message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
</div>
<div>
<p className="text-sm font-bold text-gray-800">¡Hola!</p>
<p className="text-xs text-gray-600">Muchas gracias por tu mensaje. Te responderé lo antes posible.</p>
</div>
</div>

<a aria-label="Chat en WhatsApp" className="fixed bottom-24 right-6 sm:bottom-8 sm:right-8 z-50 bg-[#25D366] p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 group text-white border-2 border-white" href="#" onclick="handleWhatsappClick(event)">
<span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none bg-white text-gray-800 font-sans hidden sm:block">Escribinos</span>
<svg className="lucide lucide-message-circle w-7 h-7" data-lucide="message-circle" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>

<header className="fixed top-0 w-full z-40 transition-all duration-300 backdrop-blur-md border-b bg-white/90 border-gray-100" id="navbar">
<div className="flex h-20 max-w-7xl mx-auto px-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-9 h-9 bg-[#D87744] rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform text-white shadow-sm">
<svg className="lucide lucide-palette w-5 h-5" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<span className="font-serif font-semibold text-xl tracking-tight text-gray-900">El Patio de los Colores</span>
</a>
<nav className="hidden lg:flex items-center gap-8">
<a className="hover:text-[#D87744] transition-colors text-sm font-medium text-gray-600" href="#servicios">Nuestro espacio</a>
<a className="hover:text-[#D87744] transition-colors text-sm font-medium text-gray-600" href="#metodologia">Qué hacemos</a>
<a className="text-sm font-medium hover:text-[#D87744] transition-colors text-gray-600" href="#bio">Bio</a>
<a className="text-sm font-medium hover:text-[#D87744] transition-colors text-gray-600" href="#familias">Familias</a>
<a className="hover:bg-[#c26538] transition-all hover:scale-105 shadow-[#D87744]/20 text-sm font-semibold text-white bg-[#D87744] rounded-lg pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm" href="#contacto">Consultar por Arteterapia</a>
</nav>
<button aria-label="Menu" className="lg:hidden hover:text-[#D87744] text-gray-700 transition-transform duration-200" id="menu-btn" onclick="toggleMenu()">
<svg className="w-7 h-7" fill="none" height="24" id="icon-menu" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
<svg className="w-7 h-7 hidden" fill="none" height="24" id="icon-close" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="hidden absolute top-20 left-0 w-full border-b p-6 flex-col gap-6 shadow-xl lg:hidden bg-white/95 backdrop-blur-xl border-gray-100 h-screen sm:h-auto" id="mobile-menu">
<a className="text-xl font-medium text-gray-800" href="#servicios" onclick="toggleMenu()">Servicios</a>
<a className="text-xl font-medium text-gray-800" href="#metodologia" onclick="toggleMenu()">Metodología</a>
<a className="text-xl font-medium text-gray-800" href="#bio" onclick="toggleMenu()">Bio</a>
<a className="text-xl font-medium text-gray-800" href="#familias" onclick="toggleMenu()">Recursos</a>
<a className="text-xl font-semibold text-[#D87744]" href="#contacto" onclick="toggleMenu()">Consultar ahora</a>
</div>
</header>
<main className="">

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-36 pb-20 relative bg-white">

<svg className="splatter top-20 left-10 w-64 h-64 text-[#D87744]" fill="currentColor" viewbox="0 0 200 200"><path d="M45.7,33.8c-7.3,9.5-23.4,12.7-29.3,25.6C9.6,74.9,19.3,96.5,29.9,114c9.1,15,22.3,28.8,38.5,33.5c17.5,5.1,36.5-4,49.8-16.1c11.9-10.8,19.7-27.4,18.4-43.5c-1.2-14.7-12.8-26.6-24.8-35.9c-12.2-9.5-24.6-20.7-39.9-21.8C61.4,29.3,52.2,25.3,45.7,33.8z"></path></svg>
<svg className="splatter bottom-0 right-0 w-96 h-96 text-[#E6A83C] opacity-[0.05]" fill="currentColor" viewbox="0 0 200 200"><path d="M38.1,59.3c5.3-15.1,23.3-21.6,37.8-27.1c16.3-6.2,33.9-8.4,49.8-1.5c16.5,7.1,27.5,23.1,34.4,39.6c6.2,14.8,11.3,31.5,5.4,46.5c-5.4,13.7-21.3,21.6-35.3,26.5c-14.7,5.1-30.8,4.2-44.8-2.6c-13.8-6.7-24.3-19.3-30.3-33.5C49.3,92.6,33.4,72.7,38.1,59.3z"></path></svg>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 order-2 lg:order-1 text-center lg:text-left reveal-on-scroll is-visible">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7A9B76]/10 text-[#556e52] border border-[#7A9B76]/20">
<svg className="lucide lucide-heart-handshake" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
<span className="text-xs font-semibold uppercase tracking-wider">Becas disponibles 2024</span>
</div>
<h1 className="leading-[1.05] lg:text-7xl flex flex-col gap-1 text-5xl font-bold text-gray-900 tracking-tight font-display">
<span className="">Arte que transforma,</span><span className="text-[#D87744] font-display">sana </span><span className="" style={{}}>y conecta</span>
</h1>
<p className="text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed text-gray-600 font-sans">
                            Arteterapia y talleres artísticos para todas las edades. Materiales accesibles y libertad creativa en un ambiente cuidado.
                        </p>

<div className="flex flex-col sm:flex-row gap-4 lg:justify-start gap-x-4 gap-y-4 justify-center">
<a className="inline-flex items-center justify-center gap-2 bg-[#D87744] hover:bg-[#c26538] text-base font-semibold py-3.5 px-8 rounded-xl transition-all hover:scale-105 shadow-md shadow-[#D87744]/25 text-white" href="#contacto">
                                Consultar por Arteterapia
                            </a>
<a className="inline-flex items-center justify-center gap-2 text-gray-900 border border-gray-200 text-base font-semibold py-3.5 px-8 rounded-xl transition-all bg-white hover:bg-[#7A9B76]/10 hover:border-[#7A9B76] hover:text-[#556e52]" href="#servicios">
                                Ver Propuestas
                            </a>
</div>
</div>
<div className="order-1 lg:order-2 relative group reveal-on-scroll is-visible">
<div className="relative overflow-hidden rounded-[2rem] shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700 aspect-[4/3] lg:aspect-square">
<div className="absolute inset-0 bg-[#D87744]/10 z-10 mix-blend-multiply pointer-events-none"></div>
<img alt="Textura de arte textil y pintura" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1459908676235-d5f02a50184b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -left-6 p-4 rounded-xl shadow-lg flex items-center gap-3 z-20 hidden sm:flex bg-white/95 backdrop-blur border border-gray-100">
<div className="bg-[#E6A83C]/20 p-2.5 rounded-lg text-[#E6A83C]">
<svg className="lucide lucide-sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path></svg>
</div>
<div>
<p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Experiencia</p>
<p className="text-sm font-bold text-gray-900">+20 años enseñando</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-px bg-[#D87744]/20"></div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative" id="servicios">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<h2 className="text-4xl font-semibold text-gray-900 tracking-tight font-display mb-4">Nuestro Espacio</h2>
<p className="text-gray-600 font-sans text-lg">Propuestas diseñadas para potenciar la expresión y el bienestar emocional.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-on-scroll">

<div className="md:col-span-2 bg-[#D87744]/5 border border-[#D87744]/20 rounded-3xl p-8 md:p-12 relative overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-300">
<div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="space-y-5 max-w-xl">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#D87744] text-white shadow-lg shadow-[#D87744]/20">
<svg className="lucide lucide-palette" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h3 className="text-3xl text-gray-900 font-display font-semibold">Arteterapia Individual</h3>
<p className="leading-relaxed text-lg text-gray-700 font-sans">
                                Sesiones terapéuticas personalizadas usando el arte como puente hacia la expresión. Un espacio seguro para adolescentes y adultos donde la palabra no es el único recurso.
                            </p>
<div className="flex flex-wrap gap-4 text-sm font-medium pt-2 text-gray-800">
<span className="flex items-center gap-1.5 font-sans px-3 py-1 bg-white rounded-full border border-[#D87744]/20"><svg className="text-[#D87744]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg> Presencial</span>
<span className="flex items-center gap-1.5 font-sans px-3 py-1 bg-white rounded-full border border-[#D87744]/20"><svg className="text-[#D87744]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg> Personalizado</span>
</div>
</div>
<a className="bg-[#D87744] hover:bg-[#c26538] text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 shadow-md w-full md:w-auto text-center font-sans" href="#contacto">
                            Solicitar Información
                        </a>
</div>
</div>

<div className="border rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all group bg-white border-gray-100 flex flex-col">
<div className="bg-[#5B9AA9]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-[#5B9AA9]">
<svg className="lucide lucide-users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-2xl mb-3 text-gray-900 font-display font-semibold">Talleres de Arte</h3>
<p className="mb-6 flex-grow text-gray-600 font-sans leading-relaxed">
                        Clases estructuradas pero abiertas a la exploración. Collage textil, grabado, libros de artista y más.
                    </p>
<a className="inline-flex items-center text-[#5B9AA9] font-semibold hover:gap-3 transition-all font-sans group-hover:text-[#4a7e8b]" href="#contacto">
                        Ver Horarios <svg className="ml-1" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</a>
</div>

<div className="bg-[#7A9B76]/10 border border-[#7A9B76]/20 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all flex flex-col">
<div className="bg-[#7A9B76] w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white">
<svg className="lucide lucide-gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
</div>
<h3 className="text-2xl mb-3 text-gray-900 font-display font-semibold">Becas Disponibles</h3>
<p className="mb-6 text-gray-700 font-sans leading-relaxed flex-grow">
                        Espacio gratuito anual para personas con necesidades especiales y bajos recursos. El arte es un derecho.
                    </p>
<button className="inline-flex items-center text-[#556e52] font-semibold hover:gap-3 transition-all font-sans" onclick="switchTab('becas'); document.getElementById('contacto').scrollIntoView({behavior: 'smooth'})">
                        Aplicar a Beca <svg className="ml-1" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</button>
</div>
</div>
</section>

<section className="border-y bg-[#F9FAFB] border-gray-100 pt-12 pb-32" id="metodologia">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<h2 className="text-3xl mb-4 text-gray-900 font-display font-semibold">Qué hacemos en el taller</h2>
<p className="text-gray-600 font-sans text-lg">Un enfoque único que combina técnica y libertad.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-on-scroll">

<div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#E6A83C] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#E6A83C]/10">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 text-[#E6A83C] bg-orange-50 group-hover:bg-[#E6A83C] group-hover:text-white transition-colors">
<svg className="lucide lucide-lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E6A83C] transition-colors font-display">Propuestas Estructuradas</h4>
<p className="text-sm leading-relaxed text-gray-600 font-sans">Consignas claras que funcionan como disparador, brindando contención y a la vez total libertad.</p>
</div>

<div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#7A9B76] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7A9B76]/10">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 text-[#7A9B76] bg-green-50 group-hover:bg-[#7A9B76] group-hover:text-white transition-colors">
<svg className="lucide lucide-recycle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16-3 3 3 3"></path><path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path><path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path></svg>
</div>
<h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#7A9B76] transition-colors font-display">Materiales Accesibles</h4>
<p className="text-sm leading-relaxed text-gray-600 font-sans">Trabajamos con telas, cartones, elementos naturales y reciclados. Lo cotidiano se transforma en obra.</p>
</div>

<div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#5B9AA9] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#5B9AA9]/10">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 text-[#5B9AA9] bg-cyan-50 group-hover:bg-[#5B9AA9] group-hover:text-white transition-colors">
<svg className="lucide lucide-sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5B9AA9] transition-colors font-display">Singularidad</h4>
<p className="text-sm leading-relaxed text-gray-600 font-sans">Respeto absoluto por los tiempos. Las devoluciones se ajustan al ritmo emocional de cada alumno.</p>
</div>
</div>
</div>
</section>

<section className="bg-white pt-16 pb-32 relative" id="bio">
<div className="max-w-5xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="md:p-12 flex flex-col md:flex-row gap-12 reveal-on-scroll bg-gray-50/50 border-stone-300 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-sm gap-x-12 gap-y-12 items-center">
<div className="w-full md:w-1/3 flex justify-center">
<div className="relative w-48 h-48 md:w-56 md:h-56">
<div className="absolute inset-0 rounded-full border-2 border-dashed border-[#D87744] animate-[spin_12s_linear_infinite]"></div>
<div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
<img alt="Marisa Iglesias" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1fa0590d-b105-4551-a89a-12092e5394a2_800w.jpg"/>
</div>
</div>
</div>
<div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
<div className="">
<h2 className="text-3xl mb-2 text-gray-900 font-display font-semibold">Marisa Iglesias</h2>
<p className="uppercase text-sm font-medium text-[#D87744] tracking-wide border-orange-500">Psicóloga Social | Arte Terapeuta | Docente</p>
</div>
<p className="leading-relaxed text-gray-600 font-sans text-lg">
                            "Mi trabajo nace del deseo profundo de compartir el arte como espacio de encuentro, expresión y transformación. Coordino El Patio de los Colores, donde conviven niños, adolescentes y adultos con distintas singularidades."
                        </p>
<div className="pt-6 border-t border-gray-200">
<h4 className="text-sm font-semibold mb-3 text-gray-900 font-sans">Trayectoria destacada:</h4>
<div className="flex flex-wrap gap-2 justify-center md:justify-start">
<span className="text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-700 font-sans">Hospital de Día Borda</span>
<span className="text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-700 font-sans">Hospital de Niños P. Elizalde</span>
<span className="text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-700 font-sans">Taller Particular</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-px bg-[#D87744]/20"></div>
</section>

<section className="overflow-hidden max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<h2 className="reveal-on-scroll text-4xl font-semibold text-gray-900 tracking-tight font-display text-center mb-12">Historias de Arteterapia</h2>
<div className="relative rounded-3xl overflow-hidden bg-[#FFF8F4] border border-[#D87744]/10 shadow-lg reveal-on-scroll">

<div className="flex transition-transform duration-700 ease-in-out h-auto" id="carousel-track">

<div className="min-w-full grid lg:grid-cols-2">
<div className="p-10 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
<div className="inline-block px-3 py-1 bg-white text-[#D87744] border border-[#D87744]/20 text-xs font-bold uppercase tracking-wider rounded-full mb-6 w-fit font-sans">Infancia</div>
<h3 className="text-3xl text-gray-900 mb-6 font-display font-semibold">Cuando las palabras no alcanzan</h3>
<p className="leading-relaxed text-lg text-gray-600 mb-6">
                                Mateo (8 años) llegó al taller con un silencio profundo. Le costaba comunicar lo que sentía y se frustraba en el colegio. A través del collage y la pintura, encontró un lenguaje nuevo. 
                            </p>
<p className="leading-relaxed text-lg text-gray-600 mb-6">Hoy, Mateo que ha mejorado notablemente la relación con sus pares. El arte es su puente.</p>
<div className="flex items-center gap-2 text-[#D87744] font-medium font-sans italic">
<span>— Historia de Mateo</span>
</div>
</div>
<div className="h-64 lg:h-auto order-1 lg:order-2 bg-gray-100">
<img alt="Niño pintando" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1749448490874-91d4d3ab9ac3?w=1600&amp;q=80"/>
</div>
</div>

<div className="min-w-full grid lg:grid-cols-2">
<div className="p-10 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
<div className="inline-block px-3 py-1 bg-white text-[#5B9AA9] border border-[#5B9AA9]/20 text-xs font-bold uppercase tracking-wider rounded-full mb-6 w-fit font-sans">Adultos</div>
<h3 className="text-3xl text-gray-900 mb-6 font-display font-semibold">Reconectar con el ser</h3>
<p className="text-gray-600 text-lg leading-relaxed mb-6 font-sans">
                                Ana atravesaba un momento de mucha angustia y desorganización psíquica. El lienzo en blanco la aterraba. Comenzamos trabajando con materiales textiles, suaves, que permitían unir, coser y reparar.
                            </p>
<p className="text-gray-600 text-lg leading-relaxed mb-6 font-sans">
                                La metáfora de 'remendar' la tela le permitió, poco a poco, comenzar a hilar su propia historia. El taller se convirtió en su ancla semanal.
                            </p>
<div className="flex items-center gap-2 text-[#5B9AA9] font-medium font-sans italic">
<span>— Historia de Ana</span>
</div>
</div>
<div className="h-64 lg:h-auto order-1 lg:order-2 bg-gray-100">
<img alt="Mujer pintando" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&amp;w=2090&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="min-w-full grid lg:grid-cols-2">
<div className="p-10 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
<div className="inline-block px-3 py-1 bg-white text-[#7A9B76] border border-[#7A9B76]/20 text-xs font-bold uppercase tracking-wider rounded-full mb-6 w-fit font-sans">Institucional</div>
<h3 className="text-3xl text-gray-900 mb-6 font-display font-semibold">Hospital Borda: Libros de Artista</h3>
<p className="text-gray-600 text-lg leading-relaxed mb-6 font-sans">
                                Durante los talleres en el Hospital de Día, implementamos la creación de "Libros de Artista". Cada paciente construyó su propio libro con cartones y retazos, un objeto tangible que guardaba su identidad.
                            </p>
<p className="text-gray-600 text-lg leading-relaxed mb-6 font-sans">
                                Esta técnica de expresión textil permitió que muchos pacientes, aislados en su mundo interno, pudieran compartir una narrativa visual con el grupo.
                            </p>
<div className="flex items-center gap-2 text-[#7A9B76] font-medium font-sans italic">
<span>— Proyecto Institucional</span>
</div>
</div>
<div className="h-64 lg:h-auto order-1 lg:order-2 bg-gray-100">
<img alt="Arte textil" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 flex gap-2 z-10">
<button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-800 border border-gray-100" onclick="moveCarousel(-1)">
<svg className="lucide lucide-arrow-left" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-800 border border-gray-100" onclick="moveCarousel(1)">
<svg className="lucide lucide-arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6">
<div className="w-full h-px bg-[#D87744]/20"></div>
</div>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="galeria">
<h2 className="text-4xl mb-12 tracking-tight text-center text-gray-900 font-display font-semibold reveal-on-scroll">
    Creaciones del Taller</h2>
<div className="columns-1 md:columns-2 lg:columns-3 reveal-on-scroll space-y-6 gap-x-6 gap-y-6">
<div className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group">
<img alt="Obra de arte colorido" className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
</div>
<div className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group">
<img alt="Detalle de pinceles" className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&amp;w=1780&amp;auto=format&amp;fit=crop"/>
</div>
<div className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group">
<img alt="Textura textil" className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group">
<img alt="Manos trabajando" className="group-hover:scale-110 transition-transform duration-700 w-full h-auto object-cover" src="https://images.unsplash.com/photo-1761403942462-04b8b97f1fe9?w=800&amp;q=80"/>
</div>
<div className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group">
<img alt="Obra collage" className="group-hover:scale-110 transition-transform duration-700 w-full h-auto object-cover" src="https://images.unsplash.com/photo-1708795921259-263a5e973acb?w=800&amp;q=80"/>
</div>
<div className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group">
<img alt="Taller grupal" className="group-hover:scale-110 transition-transform duration-700 w-full h-auto object-cover" src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group">
<img alt="Acuarelas" className="group-hover:scale-110 transition-transform duration-700 w-full h-auto object-cover" src="https://images.unsplash.com/photo-1708795921226-53dab04e7f0a?w=800&amp;q=80"/>
</div>
<div className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group">
<img alt="Materiales" className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=500&amp;auto=format&amp;fit=crop"/>
</div>
<div className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group">
<img alt="Manos pintando" className="group-hover:scale-110 transition-transform duration-700 w-full h-auto object-cover" src="https://images.unsplash.com/photo-1550264078-539a8f118b32?w=800&amp;q=80"/>
</div>

<div className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group">
<img alt="Detalle de pinceles" className="group-hover:scale-110 transition-transform duration-700 w-full h-auto object-cover" src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&amp;w=1780&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<div className="w-full bg-[#F9FAFB] border-y border-gray-100" id="resenas">
<section className="max-w-7xl mx-auto pt-16 pr-6 pb-40 pl-6">
<h2 className="text-4xl mb-12 tracking-tight text-center text-gray-900 font-display font-semibold reveal-on-scroll">Lo que dicen las familias</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-on-scroll">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#D87744]/30 transition-colors">
<div className="flex gap-1 text-[#E6A83C] mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-gray-600 mb-6 italic font-sans">"El cambio en Sofía ha sido increíble. Encontró en el taller un lugar donde ser ella misma sin presiones. Marisa tiene una calidez única."</p>
<div className="font-semibold text-gray-900 font-sans">— Laura M. <span className="text-gray-400 font-normal text-sm ml-1 font-sans">(Mamá de Sofía, 10 años)</span></div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#D87744]/30 transition-colors">
<div className="flex gap-1 text-[#E6A83C] mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-gray-600 mb-6 italic font-sans">"Buscábamos arteterapia seria y contenida. El profesionalismo de Marisa nos dio mucha seguridad desde la primera entrevista."</p>
<div className="font-semibold text-gray-900 font-sans">— Carlos R. <span className="text-gray-400 font-normal text-sm ml-1 font-sans">(Papá de Tomás)</span></div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#D87744]/30 transition-colors">
<div className="flex gap-1 text-[#E6A83C] mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-gray-600 mb-6 italic font-sans">"Como adulto, volver a conectar con el juego y los materiales fue sanador. Es mi momento favorito de la semana."</p>
<div className="font-semibold text-gray-900 font-sans">— Mariana V. <span className="text-gray-400 font-normal text-sm ml-1 font-sans">(Alumna de Taller)</span></div>
</div>
</div>
</section>
</div>

<section className="bg-gradient-to-r from-[#FDFbf7] to-[#fff] border-gray-100 border-b pt-16 pb-28">
<div className="reveal-on-scroll text-center max-w-5xl mr-auto ml-auto pr-6 pl-6">
<div className="inline-block p-3 rounded-full text-[#E1306C] mb-4 bg-pink-50">
<svg className="lucide lucide-instagram w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
<h2 className="cursor-pointer text-3xl font-semibold text-gray-900 font-display mb-2" onclick="window.location.href='/@elpatiodeloscolorestaller'" role="button">@elpatiodeloscolorestaller</h2>
<p className="text-gray-500 mb-8 font-sans">Seguinos para ver el día a día del taller.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<a className="aspect-square relative group overflow-hidden rounded-lg" href="https://instagram.com" target="_blank">
<img alt="Insta Post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
</a>
<a className="aspect-square relative group overflow-hidden rounded-lg" href="https://instagram.com" target="_blank">
<img alt="Insta Post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=400&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
</a>
<a className="aspect-square relative group overflow-hidden rounded-lg" href="https://instagram.com" target="_blank">
<img alt="Insta Post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
</a>
<a className="aspect-square relative group overflow-hidden rounded-lg" href="https://instagram.com" target="_blank">
<img alt="Insta Post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
</a>
</div>
<a className="inline-flex items-center gap-2 font-medium hover:text-[#E1306C] transition-colors border-b hover:border-[#E1306C] pb-0.5 text-gray-900 border-gray-300 font-sans" href="https://instagram.com" target="_blank">
                    Ver perfil completo <svg className="lucide lucide-external-link" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6" id="contacto">
<div className="text-center mb-10 reveal-on-scroll">
<h2 className="text-4xl mb-4 text-gray-900 font-display font-semibold">Contactanos</h2>
<p className="text-gray-600 font-sans text-lg">¿Tenés dudas o querés inscribirte? Completá el formulario.</p>
</div>

<div className="flex justify-center mb-8 p-1.5 rounded-xl w-fit mx-auto bg-gray-100 reveal-on-scroll">
<button className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm bg-white text-gray-900 font-sans" id="tab-general" onclick="switchTab('general')">
                    Consulta General
                </button>
<button className="px-6 py-2.5 rounded-lg text-sm font-semibold text-gray-500 transition-all hover:text-gray-900 font-sans" id="tab-becas" onclick="switchTab('becas')">
                    Aplicar a Beca
                </button>
</div>
<div className="p-8 md:p-10 rounded-3xl shadow-lg border relative bg-white border-gray-100 reveal-on-scroll">

<form className="space-y-6" id="form-general">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-semibold text-gray-700 font-sans">Nombre Completo *</label>
<input className="w-full px-4 py-3 rounded-xl border focus:border-[#D87744] focus:ring-4 focus:ring-[#D87744]/10 outline-none transition-all border-gray-200" placeholder="Tu nombre" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-gray-700 font-sans">Edad del Interesado</label>
<input className="w-full px-4 py-3 rounded-xl border focus:border-[#D87744] focus:ring-4 focus:ring-[#D87744]/10 outline-none transition-all border-gray-200" placeholder="Ej: 15" type="number"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-semibold text-gray-700 font-sans">Email *</label>
<input className="w-full px-4 py-3 rounded-xl border focus:border-[#D87744] focus:ring-4 focus:ring-[#D87744]/10 outline-none transition-all border-gray-200" placeholder="tu@email.com" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-gray-700 font-sans">Teléfono *</label>
<input className="w-full px-4 py-3 rounded-xl border focus:border-[#D87744] focus:ring-4 focus:ring-[#D87744]/10 outline-none transition-all border-gray-200" placeholder="Cod. área + número" required="" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-gray-700 font-sans">Servicio de Interés</label>
<select className="w-full px-4 py-3 rounded-xl border focus:border-[#D87744] focus:ring-4 focus:ring-[#D87744]/10 outline-none transition-all border-gray-200 bg-white">
<option className="font-sans">Arteterapia Individual</option>
<option className="font-sans">Taller Grupal Niños/Adolescentes</option>
<option className="font-sans">Consulta General</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-gray-700 font-sans">Mensaje</label>
<textarea className="w-full px-4 py-3 rounded-xl border focus:border-[#D87744] focus:ring-4 focus:ring-[#D87744]/10 outline-none transition-all border-gray-200" placeholder="¿Cómo podemos ayudarte?" rows="4"></textarea>
</div>
<button className="w-full bg-[#D87744] hover:bg-[#c26538] font-bold py-4 rounded-xl transition-transform active:scale-[0.98] shadow-md text-white font-sans" type="submit">
                        Enviar Consulta
                    </button>
</form>

<form className="space-y-6 hidden" id="form-becas">
<div className="bg-[#7A9B76]/10 p-5 rounded-xl mb-6 border border-[#7A9B76]/20 flex gap-3">
<svg className="text-[#556e52] shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<p className="text-sm text-[#556e52] font-sans">Ofrecemos un espacio de taller gratuito anual para aquellas familias que más lo necesitan. Por favor, detallanos tu situación.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-semibold text-gray-700 font-sans">Nombre del Postulante *</label>
<input className="w-full px-4 py-3 rounded-xl border focus:border-[#7A9B76] focus:ring-4 focus:ring-[#7A9B76]/10 outline-none transition-all border-gray-200" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-gray-700 font-sans">Edad *</label>
<input className="w-full px-4 py-3 rounded-xl border focus:border-[#7A9B76] focus:ring-4 focus:ring-[#7A9B76]/10 outline-none transition-all border-gray-200" required="" type="number"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-gray-700 font-sans">Nombre del Responsable *</label>
<input className="w-full px-4 py-3 rounded-xl border focus:border-[#7A9B76] focus:ring-4 focus:ring-[#7A9B76]/10 outline-none transition-all border-gray-200" required="" type="text"/>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-semibold text-gray-700 font-sans">Email *</label>
<input className="w-full px-4 py-3 rounded-xl border focus:border-[#7A9B76] focus:ring-4 focus:ring-[#7A9B76]/10 outline-none transition-all border-gray-200" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-gray-700 font-sans">Teléfono *</label>
<input className="w-full px-4 py-3 rounded-xl border focus:border-[#7A9B76] focus:ring-4 focus:ring-[#7A9B76]/10 outline-none transition-all border-gray-200" required="" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-gray-700 font-sans">Situación / Necesidad *</label>
<textarea className="w-full px-4 py-3 rounded-xl border focus:border-[#7A9B76] focus:ring-4 focus:ring-[#7A9B76]/10 outline-none transition-all border-gray-200" placeholder="Contanos brevemente por qué solicitás la beca..." required="" rows="4"></textarea>
</div>
<button className="w-full bg-[#7A9B76] hover:bg-[#688565] font-bold py-4 rounded-xl transition-transform active:scale-[0.98] shadow-md text-white font-sans" type="submit">
                        Enviar Aplicación
                    </button>
</form>
</div>
</section>

<section className="bg-gray-50 border-gray-100 border-t pt-32 pb-32" id="familias">
<div className="max-w-4xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-10 reveal-on-scroll">
<h3 className="text-2xl font-bold text-gray-900 font-display">Espacio para Familias</h3>
<p className="text-sm text-gray-500 font-sans mt-2">Documentación y accesos rápidos para alumnos inscriptos</p>
</div>
<div className="grid sm:grid-cols-3 gap-4 reveal-on-scroll">
<a className="flex flex-col items-center justify-center bg-white p-6 rounded-xl border border-gray-200 hover:border-[#D87744] hover:shadow-md transition-all group text-center h-full" href="#">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 mb-3 group-hover:bg-[#D87744]/10 group-hover:text-[#D87744] transition-colors">
<svg className="lucide lucide-file-text" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg>
</div>
<span className="font-semibold text-gray-900 text-sm font-sans">Ficha de Inscripción</span>
<span className="text-xs text-gray-400 mt-1 font-sans">Descargar PDF</span>
</a>
<a className="flex flex-col items-center justify-center bg-white p-6 rounded-xl border border-gray-200 hover:border-[#D87744] hover:shadow-md transition-all group text-center h-full" href="#">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 mb-3 group-hover:bg-[#D87744]/10 group-hover:text-[#D87744] transition-colors">
<svg className="lucide lucide-camera" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<span className="font-semibold text-gray-900 text-sm font-sans">Permiso de Fotos</span>
<span className="text-xs text-gray-400 mt-1 font-sans">Completar Online</span>
</a>
<a className="flex flex-col items-center justify-center bg-white p-6 rounded-xl border border-gray-200 hover:border-[#D87744] hover:shadow-md transition-all group text-center h-full" href="#">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 mb-3 group-hover:bg-[#D87744]/10 group-hover:text-[#D87744] transition-colors">
<svg className="lucide lucide-star" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="font-semibold text-gray-900 text-sm font-sans">Dejanos tu Reseña</span>
<span className="text-xs text-gray-400 mt-1 font-sans">Google Form</span>
</a>
</div>
</div>
</section>
</main>

<footer className="pt-20 pb-10 bg-gray-900 text-white border-t border-gray-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 mb-16">

<div className="space-y-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-[#D87744] rounded-full flex items-center justify-center text-white">
<svg className="lucide lucide-palette w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<span className="font-serif font-semibold text-xl tracking-tight font-sans">El Patio de los Colores</span>
</div>
<p className="text-sm leading-relaxed max-w-xs text-gray-400 font-sans">
                        Un espacio donde el arte se convierte en herramienta de transformación y encuentro.
                    </p>
<div className="text-sm text-gray-400">
<p className="font-medium text-white font-sans">Marisa Iglesias</p>
<p className="font-sans">Psicóloga Social &amp; Arte Terapeuta</p>
</div>
</div>

<div className="md:pl-10">
<h4 className="font-semibold mb-6 text-white font-sans">Explorar</h4>
<ul className="space-y-4 text-sm text-gray-400">
<li className=""><a className="hover:text-[#D87744] transition-colors font-sans" href="#servicios">Arteterapia Individual</a></li>
<li className=""><a className="hover:text-[#D87744] transition-colors font-sans" href="#servicios">Talleres Grupales</a></li>
<li><a className="hover:text-[#D87744] transition-colors font-sans" href="#bio">Sobre Marisa</a></li>
<li><a className="hover:text-[#D87744] transition-colors font-sans" href="#" onclick="switchTab('becas'); document.getElementById('contacto').scrollIntoView()">Programa de Becas</a></li>
</ul>
</div>

<div className="">
<h4 className="font-semibold mb-6 text-white font-sans">Contacto</h4>
<ul className="space-y-4 text-sm text-gray-400">
<li className="flex items-start gap-3">
<svg className="lucide lucide-mail w-5 h-5 text-[#D87744] mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<a className="transition-colors hover:text-white font-sans" href="mailto:tallerelpatiodeloscolores@gmail.com">tallerelpatiodeloscolores@gmail.com</a>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-message-circle w-5 h-5 text-[#D87744] mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
<a className="font-sans hover:text-white transition-colors" href="https://wa.me/5491136440015?text=Hola!%20Me%20interesar%C3%ADa%20saber%20m%C3%A1s%20sobre%20los%20talleres.%20Por%20favor%20escribime." target="_blank">Consultar vía WhatsApp</a>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-instagram w-5 h-5 text-[#D87744] mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<a className="transition-colors hover:text-white" href="https://www.instagram.com/elpatiodeloscolorestaller/" target="_blank">@elpatiodeloscolorestaller</a>
</li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 border-gray-800">
<p className="font-sans">© 2026 El Patio de los Colores. Todos los derechos reservados.</p>
<div className="flex items-center gap-1 font-sans">
                    Hecho con 
                    <svg className="lucide lucide-heart mx-0.5" fill="none" height="16" stroke="#D87744" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                    por Estudio76
                </div>
</div>
</div>
</footer>



    </>
  );
}
