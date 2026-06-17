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



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- Sticky Navbar Setup ---
            const navbar = document.getElementById('navbar');
            const handleScroll = () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-[#05050a]/90', 'border-white/20');
                    navbar.classList.remove('bg-white/5', 'border-white/10');
                } else {
                    navbar.classList.remove('bg-[#05050a]/90', 'border-white/20');
                    navbar.classList.add('bg-white/5', 'border-white/10');
                }
            };
            window.addEventListener('scroll', handleScroll);
            handleScroll();

            // --- Mobile Menu Toggle ---
            const menuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });

            // --- Scroll Animations (Intersection Observer) ---
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach(el => observer.observe(el));

            // --- FAQ Accordion Logic ---
            const faqButtons = document.querySelectorAll('.faq-button');
            faqButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const content = button.nextElementSibling;
                    const icon = button.querySelector('.icon-container');
                    
                    // Toggle current FAQ
                    content.classList.toggle('hidden');
                    
                    // Rotate icon state
                    if (content.classList.contains('hidden')) {
                        icon.style.transform = 'rotate(0deg)';
                    } else {
                        icon.style.transform = 'rotate(180deg)';
                    }
                });
            });

            // --- Form Submission Simulation ---
            const contactForm = document.getElementById('contactForm');
            const formSuccess = document.getElementById('formSuccess');

            if(contactForm) {
                contactForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    
                    const submitBtn = contactForm.querySelector('button[type="submit"]');
                    const originalText = submitBtn.innerHTML;
                    
                    // Loading state
                    submitBtn.innerHTML = `<iconify-icon icon="lucide:loader-2" width="20" class="animate-spin flex-shrink-0" style="stroke-width: 1.5;"></iconify-icon> <span class="ml-2">Enviando solicitud...</span>`;
                    submitBtn.disabled = true;
                    submitBtn.classList.add('opacity-80', 'cursor-not-allowed');

                    // Simulate network request (1.5s)
                    setTimeout(() => {
                        contactForm.reset();
                        
                        // Restore button
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        submitBtn.classList.remove('opacity-80', 'cursor-not-allowed');
                        
                        // Show success message
                        formSuccess.classList.remove('hidden');
                        formSuccess.classList.add('animate-on-scroll', 'is-visible');
                        
                        // Hide success message after 5 seconds
                        setTimeout(() => {
                            formSuccess.classList.add('hidden');
                            formSuccess.classList.remove('animate-on-scroll', 'is-visible');
                        }, 5000);
                    }, 1500);
                });
            }
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
      

<header className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[1200px] z-50 transition-all duration-300 rounded-full border backdrop-blur-md shadow-lg" id="navbar">
<div className="px-6 py-3.5 flex justify-between items-center relative w-full">

<a className="flex items-center gap-3 text-white font-display font-normal text-xl tracking-tight z-20" href="#">
<div className="w-8 h-8 rounded-full bg-[#6366f1] flex items-center justify-center">
<iconify-icon className="text-white flex-shrink-0" icon="lucide:shield-check" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
                AGENTE CENTRAL
            </a>

<nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 z-10">
<a className="px-4 py-1.5 text-base font-normal text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/10" href="#soluciones">Soluciones</a>
<a className="px-4 py-1.5 text-base font-normal text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/10" href="#beneficios">Beneficios</a>
<a className="px-4 py-1.5 text-base font-normal text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/10" href="#app">App</a>
<a className="px-4 py-1.5 text-base font-normal text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/10" href="#faq">FAQ</a>
</nav>

<div className="hidden md:flex items-center gap-6 z-20">
<a className="text-base font-normal text-gray-300 hover:text-white transition-colors" href="#login">Login</a>
<a className="px-5 py-2 text-base font-normal text-white bg-[#6366f1] rounded-full hover:bg-[#4f46e5] shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300" href="#contacto">
                    Agendar Consultoría
                </a>
</div>

<button aria-label="Abrir menú" className="md:hidden text-white p-2 focus:outline-none z-20" id="mobile-menu-btn">
<iconify-icon icon="lucide:menu" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-[calc(100%+0.5rem)] left-0 w-full bg-[#050505]/95 border border-white/10 rounded-3xl shadow-2xl md:hidden backdrop-blur-xl overflow-hidden" id="mobile-menu">
<div className="flex flex-col px-6 py-6 space-y-4">
<a className="mobile-link text-lg font-normal text-gray-300 hover:text-white" href="#soluciones">Soluciones</a>
<a className="mobile-link text-lg font-normal text-gray-300 hover:text-white" href="#beneficios">Beneficios</a>
<a className="mobile-link text-lg font-normal text-gray-300 hover:text-white" href="#app">App</a>
<a className="mobile-link text-lg font-normal text-gray-300 hover:text-white" href="#faq">FAQ</a>
<a className="mobile-link inline-flex justify-center px-5 py-3 text-base font-normal text-white bg-[#6366f1] rounded-xl w-full mt-4" href="#contacto">
                    Agendar Consultoría
                </a>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative min-h-screen bg-[#05050a] flex items-center pt-32 pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Edificio protegido de noche" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-r from-[#05050a] via-[#05050a]/90 to-transparent w-full"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-transparent to-transparent"></div>
<div className="bg-black/30 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between h-full gap-12 pt-10 lg:pt-0">

<div className="w-full lg:w-[55%] animate-on-scroll is-visible">

<p className="text-gray-300 text-base md:text-lg font-normal mb-4 tracking-wide">
                        Agente Central - Elevando los estándares de seguridad.
                    </p>

<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-white mb-6 font-display leading-[1.1]">
                        Seguridad Inteligente<br/>para Edificios
                    </h1>

<p className="text-xl md:text-2xl text-gray-300 font-thin mb-10 leading-relaxed max-w-xl">
                        Vigilancia activa 24/7. Diseñamos e instalamos tecnología de control de accesos y telepresencia a medida, para que nunca pierdas la tranquilidad.
                    </p>

<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 text-lg font-normal text-white bg-[#6366f1] rounded-lg hover:bg-[#4f46e5] transition-all duration-300 flex items-center justify-center gap-2" href="#contacto">
                            Agendar Consultoría
                            <iconify-icon icon="lucide:arrow-up-right" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 text-lg font-normal text-[#0A0A0A] bg-white rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2" href="#soluciones">
                            Ver soluciones
                            <iconify-icon icon="lucide:arrow-up-right" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>

<div className="w-full lg:w-[45%] flex justify-center lg:justify-end animate-on-scroll delay-100 hidden md:flex relative z-10">

<div className="absolute top-1/2 right-4 -translate-y-1/2 w-[280px] h-[550px] bg-[#6366f1]/20 rounded-full blur-[80px] pointer-events-none"></div>

<div className="relative w-[280px] h-[580px] bg-[#09090b] rounded-[2.5rem] border-[6px] border-[#18181b] shadow-2xl flex flex-col items-center pt-8 pb-8 transform transition-transform duration-700 hover:scale-[1.02] bg-gradient-to-b from-white/[0.03] to-transparent overflow-hidden">

<div className="w-24 h-7 bg-black rounded-full mb-6 flex items-center justify-center gap-3 border border-white/5 shadow-inner">
<div className="w-3 h-3 rounded-full bg-blue-900/50 flex items-center justify-center relative">
<div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_#60a5fa]"></div>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-red-500/80 shadow-[0_0_4px_#ef4444] animate-pulse"></div>
</div>

<div className="w-[88%] h-[260px] bg-[#111] rounded-2xl border border-white/10 overflow-hidden relative mb-6 shadow-lg">
<img alt="Operador de Agente Central" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/20"></div>
<div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444] animate-pulse"></div>
<span className="text-white text-[9px] tracking-widest uppercase font-normal">REC</span>
</div>
<div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md px-2 py-1 rounded-md text-[10px] text-white/90 font-normal border border-white/10 tracking-wider">
                                14:23
                            </div>
<div className="absolute bottom-4 left-0 right-0 px-4 text-center">
<span className="text-white text-sm font-medium tracking-wide drop-shadow-md">Central Operativa</span>
<p className="text-green-400 text-[10px] uppercase tracking-wider mt-0.5 flex items-center justify-center gap-1">
<iconify-icon icon="lucide:mic" style={{strokeWidth: '2'}} width="10"></iconify-icon>
                                    Operador Activo
                                </p>
</div>
</div>

<div className="text-center mb-5 w-full px-6 flex flex-col items-center">
<p className="text-white text-xs font-normal tracking-wide uppercase mb-3">Escanee su QR de acceso</p>

<div className="relative w-20 h-20">
<div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#6366f1] rounded-tl-lg"></div>
<div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#6366f1] rounded-tr-lg"></div>
<div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#6366f1] rounded-bl-lg"></div>
<div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#6366f1] rounded-br-lg"></div>
<iconify-icon className="text-white/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" icon="lucide:qr-code" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>

<div className="absolute top-0 left-1 right-1 h-[2px] bg-[#6366f1] shadow-[0_0_8px_#6366f1] animate-scan z-10"></div>
</div>
</div>

<div className="mt-auto w-full px-8 flex items-center justify-between">

<div className="flex gap-1.5">
<div className="w-1.5 h-10 bg-white/10 rounded-full"></div>
<div className="w-1.5 h-10 bg-white/10 rounded-full"></div>
<div className="w-1.5 h-10 bg-white/10 rounded-full"></div>
<div className="w-1.5 h-10 bg-white/10 rounded-full"></div>
</div>

<div className="flex flex-col items-center gap-1">
<button className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center group relative overflow-hidden transition-all duration-300 hover:bg-red-500/20 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
<iconify-icon className="text-red-500 relative z-10" icon="lucide:bell" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<div className="absolute inset-1.5 rounded-full border border-red-500/20 group-hover:border-red-500/40"></div>
</button>
<span className="text-red-500/70 text-[9px] uppercase tracking-widest font-normal">S.O.S</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-6 lg:bottom-12 lg:left-12 z-20 animate-on-scroll delay-200 hidden sm:block is-visible">
<div className="group relative overflow-hidden rounded-xl w-[260px] h-[140px] cursor-pointer shadow-2xl bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all duration-300">
<img alt="Operador de monitoreo" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="flex flex-col pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex items-start justify-between">
<span className="text-white font-normal text-base max-w-[120px] leading-snug drop-shadow-md">
                                El modelo de<br/>Agente Central
                            </span>
<div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-white/40 transition-colors">
<iconify-icon className="text-white" icon="lucide:play" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
<span className="text-sm text-gray-300 font-thin group-hover:text-white transition-colors">
                            Ver Video
                        </span>
</div>
</div>
</div>
</section>

<section className="py-10 bg-[#05050a] overflow-hidden flex flex-col items-center justify-center relative z-20 border-b border-white/5 shadow-[inset_0_0_80px_rgba(0,0,0,0.8)]">

<div className="absolute inset-y-0 left-0 w-24 md:w-56 bg-gradient-to-r from-[#05050a] to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-24 md:w-56 bg-gradient-to-l from-[#05050a] to-transparent z-10 pointer-events-none"></div>
<div className="flex w-full relative">

<div className="animate-marquee flex w-max">

<div className="flex gap-4 pr-4 gap-x-4 gap-y-4 items-center flex-nowrap">
<div className="flex items-center gap-3 px-6 h-[52px] flex-shrink-0 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors cursor-default backdrop-blur-sm">
<iconify-icon className="text-[#8b5cf6]" icon="solar:videocamera-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="font-display text-base font-normal tracking-wide text-gray-300 whitespace-nowrap">Telepresencia 24/7</span>
</div>
<div className="flex items-center gap-3 px-6 h-[52px] flex-shrink-0 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors cursor-default backdrop-blur-sm">
<iconify-icon className="text-[#3b82f6]" icon="solar:lock-keyhole-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="font-display text-base font-normal tracking-wide text-gray-300 whitespace-nowrap">Control de Accesos</span>
</div>
<div className="flex items-center gap-3 px-6 h-[52px] flex-shrink-0 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors cursor-default backdrop-blur-sm">
<iconify-icon className="text-[#ec4899]" icon="solar:smartphone-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="font-display text-base font-normal tracking-wide text-gray-300 whitespace-nowrap">App para Residentes</span>
</div>
<div className="flex items-center gap-3 px-6 h-[52px] flex-shrink-0 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors cursor-default backdrop-blur-sm">
<iconify-icon className="text-[#14b8a6]" icon="solar:monitor-smartphone-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="font-display text-base font-normal tracking-wide text-gray-300 whitespace-nowrap">Tótem Interactivo</span>
</div>
<div className="flex items-center gap-3 px-6 h-[52px] flex-shrink-0 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors cursor-default backdrop-blur-sm">
<iconify-icon className="text-[#f59e0b]" icon="solar:eye-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="font-display text-base font-normal tracking-wide text-gray-300 whitespace-nowrap">Monitoreo Proactivo</span>
</div>
<div className="flex items-center gap-3 px-6 h-[52px] flex-shrink-0 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors cursor-default backdrop-blur-sm">
<iconify-icon className="text-[#ef4444]" icon="solar:shield-warning-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="font-display text-base font-normal tracking-wide text-gray-300 whitespace-nowrap">Respuesta Inmediata</span>
</div>
<div className="flex items-center gap-3 px-6 h-[52px] flex-shrink-0 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors cursor-default backdrop-blur-sm">
<iconify-icon className="text-[#10b981]" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="font-display text-base font-normal tracking-wide text-gray-300 whitespace-nowrap">Reducción de Costos</span>
</div>
<div className="flex items-center gap-3 px-6 h-[52px] flex-shrink-0 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors cursor-default backdrop-blur-sm">
<iconify-icon className="text-[#6366f1]" icon="solar:history-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="font-display text-base font-normal tracking-wide text-gray-300 whitespace-nowrap">Registro en la Nube</span>
</div>
</div>

<div className="flex items-center gap-4 pr-4">
<div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors cursor-default backdrop-blur-sm">
<iconify-icon className="text-[#8b5cf6]" icon="solar:videocamera-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="font-display text-base font-normal tracking-wide text-gray-300">Telepresencia 24/7</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors cursor-default backdrop-blur-sm">
<iconify-icon className="text-[#3b82f6]" icon="solar:lock-keyhole-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="font-display text-base font-normal tracking-wide text-gray-300">Control de Accesos</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors cursor-default backdrop-blur-sm">
<iconify-icon className="text-[#ec4899]" icon="solar:smartphone-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="font-display text-base font-normal tracking-wide text-gray-300">App para Residentes</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors cursor-default backdrop-blur-sm">
<iconify-icon className="text-[#14b8a6]" icon="solar:monitor-smartphone-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="font-display text-base font-normal tracking-wide text-gray-300">Tótem Interactivo</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors cursor-default backdrop-blur-sm">
<iconify-icon className="text-[#f59e0b]" icon="solar:eye-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="font-display text-base font-normal tracking-wide text-gray-300">Monitoreo Proactivo</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors cursor-default backdrop-blur-sm">
<iconify-icon className="text-[#ef4444]" icon="solar:shield-warning-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="font-display text-base font-normal tracking-wide text-gray-300">Respuesta Inmediata</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors cursor-default backdrop-blur-sm">
<iconify-icon className="text-[#10b981]" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="font-display text-base font-normal tracking-wide text-gray-300">Reducción de Costos</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors cursor-default backdrop-blur-sm">
<iconify-icon className="text-[#6366f1]" icon="solar:history-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="font-display text-base font-normal tracking-wide text-gray-300">Registro en la Nube</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-gray-100 relative z-30">
<div className="max-w-[1200px] mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
<h2 className="font-display text-3xl lg:text-4xl font-medium tracking-tight text-[#0B1F3A] mb-4">
                        El sistema de seguridad tradicional ya no es suficiente
                    </h2>
<p className="text-xl text-gray-600 font-thin">
                        Depender solo de cámaras pasivas o guardias presenciales genera puntos ciegos, altos costos y falsa sensación de protección.
                    </p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 animate-on-scroll">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-red-400" icon="lucide:x-circle" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<h3 className="font-display text-2xl font-normal tracking-tight text-gray-500">Vigilancia Tradicional</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-lg text-gray-500">
<iconify-icon className="mt-1 opacity-50 flex-shrink-0" icon="lucide:minus-circle" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                                Costos operativos elevadísimos y en aumento.
                            </li>
<li className="flex items-start gap-3 text-lg text-gray-500">
<iconify-icon className="mt-1 opacity-50 flex-shrink-0" icon="lucide:minus-circle" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                                Cámaras pasivas: solo sirven para ver qué pasó después del incidente.
                            </li>
<li className="flex items-start gap-3 text-lg text-gray-500">
<iconify-icon className="mt-1 opacity-50 flex-shrink-0" icon="lucide:minus-circle" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                                Puntos ciegos y errores humanos por fatiga.
                            </li>
</ul>
</div>

<div className="p-8 rounded-3xl bg-[#05050a] text-white shadow-xl relative overflow-hidden animate-on-scroll delay-100">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-[#6366f1]/20 rounded-full blur-3xl"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-[#8b5cf6]" icon="lucide:check-circle" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<h3 className="font-display text-2xl font-normal tracking-tight text-white">Modelo Agente Central</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-lg text-gray-300">
<iconify-icon className="mt-1 text-[#8b5cf6] flex-shrink-0" icon="lucide:check-square" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                                    Reducción de hasta un 50% en las expensas.
                                </li>
<li className="flex items-start gap-3 text-lg text-gray-300">
<iconify-icon className="mt-1 text-[#8b5cf6] flex-shrink-0" icon="lucide:check-square" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                                    Intervención activa en tiempo real: prevenimos antes que ocurra.
                                </li>
<li className="flex items-start gap-3 text-lg text-gray-300">
<iconify-icon className="mt-1 text-[#8b5cf6] flex-shrink-0" icon="lucide:check-square" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                                    Tecnología + Monitoreo Humano 24/7 sin distracciones.
                                </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="soluciones">
<div className="max-w-[1200px] mx-auto px-6 lg:px-8">
<div className="mb-16 animate-on-scroll">
<h2 className="font-display text-3xl lg:text-4xl font-medium tracking-tight text-[#0B1F3A] mb-4">
                        Un ecosistema de seguridad total
                    </h2>
<p className="text-xl text-gray-600 font-thin max-w-2xl">
                        Combinamos hardware avanzado, software de gestión y operadores capacitados para crear una barrera impenetrable en tu edificio.
                    </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group p-8 bg-white border border-gray-100 rounded-3xl hover:border-gray-300 hover:shadow-lg transition-all duration-300 animate-on-scroll">
<div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gray-700 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300">
<iconify-icon icon="lucide:users" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-normal tracking-tight text-[#0B1F3A] mb-3">Telepresencia Activa</h3>
<p className="text-lg text-gray-500 leading-relaxed font-thin">
                            Seguridad con presencia humana en tiempo real a través de video bidireccional, disuadiendo intrusiones instantáneamente.
                        </p>
</div>
<div className="group p-8 bg-white border border-gray-100 rounded-3xl hover:border-gray-300 hover:shadow-lg transition-all duration-300 animate-on-scroll delay-100">
<div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gray-700 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300">
<iconify-icon icon="lucide:building-2" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-normal tracking-tight text-[#0B1F3A] mb-3">Tótem Inteligente</h3>
<p className="text-lg text-gray-500 leading-relaxed font-thin">
                            Punto de control físico en el hall con pantalla HD, comunicación directa a central, sirena y botón de pánico integrado.
                        </p>
</div>
<div className="group p-8 bg-white border border-gray-100 rounded-3xl hover:border-gray-300 hover:shadow-lg transition-all duration-300 animate-on-scroll delay-200">
<div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gray-700 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300">
<iconify-icon icon="lucide:eye" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-normal tracking-tight text-[#0B1F3A] mb-3">Monitoreo 24/7</h3>
<p className="text-lg text-gray-500 leading-relaxed font-thin">
                            Vigilancia constante desde nuestra base operativa. Los operadores detectan actividad inusual y actúan según protocolos.
                        </p>
</div>
<div className="group p-8 bg-white border border-gray-100 rounded-3xl hover:border-gray-300 hover:shadow-lg transition-all duration-300 animate-on-scroll">
<div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gray-700 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300">
<iconify-icon icon="lucide:scan-face" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-normal tracking-tight text-[#0B1F3A] mb-3">Control de Accesos</h3>
<p className="text-lg text-gray-500 leading-relaxed font-thin">
                            Gestión de ingresos segura mediante biometría facial, llaves magnéticas encriptadas y apertura remota para visitas.
                        </p>
</div>
<div className="group p-8 bg-white border border-gray-100 rounded-3xl hover:border-gray-300 hover:shadow-lg transition-all duration-300 animate-on-scroll delay-100">
<div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gray-700 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300">
<iconify-icon icon="lucide:smartphone" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-normal tracking-tight text-[#0B1F3A] mb-3">App para Residentes</h3>
<p className="text-lg text-gray-500 leading-relaxed font-thin">
                            Toda la seguridad en el celular. Ver cámaras del hall en vivo, emitir pases de visita y botón de emergencia personal.
                        </p>
</div>
<div className="group p-8 bg-white border border-gray-100 rounded-3xl hover:border-gray-300 hover:shadow-lg transition-all duration-300 animate-on-scroll delay-200">
<div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gray-700 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300">
<iconify-icon icon="lucide:clipboard-check" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-normal tracking-tight text-[#0B1F3A] mb-3">Consultoría Inicial</h3>
<p className="text-lg text-gray-500 leading-relaxed font-thin">
                            Análisis técnico gratuito de las vulnerabilidades actuales de tu edificio para diseñar el sistema ideal a medida.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#05050a] overflow-hidden relative border-t border-white/5" id="app">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6366f1]/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">

<div className="text-center max-w-2xl mx-auto mb-20 animate-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
<iconify-icon className="text-[#a78bfa]" icon="lucide:smartphone" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm font-normal text-gray-300 tracking-wide uppercase">App Exclusiva</span>
</div>
<h2 className="font-display text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6">
                        El control de tu edificio,<br/>alrededor tuyo
                    </h2>
<p className="text-xl text-gray-400 font-thin leading-relaxed">
                        Descubrí todas las herramientas diseñadas para darte tranquilidad y transparencia, integradas directamente en tu dispositivo móvil.
                    </p>
</div>

<div className="grid lg:grid-cols-3 gap-8 lg:gap-4 items-center">

<div className="space-y-6 lg:space-y-12 order-2 lg:order-1 flex flex-col items-center lg:items-end z-20 animate-on-scroll delay-100">

<div className="relative group cursor-pointer w-full max-w-sm">
<div className="p-4 rounded-3xl transition-all duration-300 flex flex-row lg:flex-row-reverse items-center gap-5 hover:bg-white/[0.04] border border-transparent hover:border-white/5">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#6366f1]/20 group-hover:border-[#6366f1]/40 transition-all duration-300 shadow-lg">
<iconify-icon className="text-[#a78bfa]" icon="lucide:video" style={{strokeWidth: '1.5'}} width="26"></iconify-icon>
</div>
<h4 className="text-white font-normal text-xl tracking-tight text-left lg:text-right group-hover:text-[#a78bfa] transition-colors">Cámaras en vivo</h4>
</div>
<div className="absolute z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out bottom-full mb-4 left-1/2 -translate-x-1/2 w-[280px] origin-bottom lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto lg:mb-0 lg:right-[calc(100%+1rem)] lg:left-auto lg:translate-x-0 lg:origin-right scale-95 group-hover:scale-100 bg-[#111113]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 pointer-events-none">
<h5 className="text-white font-normal mb-3 text-lg">Vigilancia en tiempo real</h5>
<p className="text-base text-gray-400 font-thin leading-relaxed">Acceso instantáneo a las cámaras de áreas comunes (hall, cochera, pasillos) para verificar quién entra o sale en cualquier momento.</p>
</div>
</div>

<div className="relative group cursor-pointer w-full max-w-sm">
<div className="p-4 rounded-3xl transition-all duration-300 flex flex-row lg:flex-row-reverse items-center gap-5 hover:bg-white/[0.04] border border-transparent hover:border-white/5">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#6366f1]/20 group-hover:border-[#6366f1]/40 transition-all duration-300 shadow-lg">
<iconify-icon className="text-[#a78bfa]" icon="lucide:qr-code" style={{strokeWidth: '1.5'}} width="26"></iconify-icon>
</div>
<h4 className="text-white font-normal text-xl tracking-tight text-left lg:text-right group-hover:text-[#a78bfa] transition-colors">Gestión de Visitas</h4>
</div>
<div className="absolute z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out bottom-full mb-4 left-1/2 -translate-x-1/2 w-[280px] origin-bottom lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto lg:mb-0 lg:right-[calc(100%+1rem)] lg:left-auto lg:translate-x-0 lg:origin-right scale-95 group-hover:scale-100 bg-[#111113]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 pointer-events-none">
<h5 className="text-white font-normal mb-3 text-lg">Accesos sin demoras</h5>
<p className="text-base text-gray-400 font-thin leading-relaxed">Generá códigos QR temporales para familiares, amigos o delivery. Control total sobre quién ingresa a tu hogar de forma segura.</p>
</div>
</div>
</div>

<div className="order-1 lg:order-2 flex justify-center animate-on-scroll relative z-10 py-8 lg:py-0">
<div className="relative w-[280px] h-[580px] bg-[#0B1F3A] rounded-[44px] border-[8px] border-[#18181b] shadow-2xl overflow-hidden flex flex-col group transform transition-transform duration-700 hover:scale-[1.02]">

<div className="bg-[#0B1F3A] w-full pt-4 pb-1 px-5 flex justify-between items-center z-10 text-white/90 text-xs font-normal font-sans tracking-wide">
<span>11:33</span>
<div className="flex items-center gap-1.5">
<iconify-icon icon="lucide:wifi" style={{strokeWidth: '2'}} width="14"></iconify-icon>
<iconify-icon icon="lucide:signal" style={{strokeWidth: '2'}} width="14"></iconify-icon>
<iconify-icon icon="lucide:battery-medium" style={{strokeWidth: '2'}} width="16"></iconify-icon>
</div>
</div>

<div className="bg-[#0B1F3A] text-white px-4 pb-4 pt-1 flex items-center gap-4 z-10">
<iconify-icon icon="lucide:arrow-left" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="font-normal text-lg tracking-tight">Cámaras</span>
</div>

<div className="flex-grow bg-white p-1 overflow-hidden">
<div className="grid grid-cols-2 grid-rows-3 gap-1 h-full">
<div className="w-full h-full relative bg-gray-100 rounded-sm overflow-hidden">
<img alt="Cámara 1" className="w-full h-full object-cover grayscale-[20%]" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full h-full relative bg-gray-100 rounded-sm overflow-hidden">
<img alt="Cámara 2" className="w-full h-full object-cover grayscale-[20%]" src="https://images.unsplash.com/photo-1574950578143-858c6fc58922?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full h-full relative bg-gray-100 rounded-sm overflow-hidden">
<img alt="Cámara 3" className="w-full h-full object-cover grayscale-[20%]" src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full h-full relative bg-gray-100 rounded-sm overflow-hidden">
<img alt="Cámara 4" className="w-full h-full object-cover grayscale-[20%]" src="https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full h-full relative bg-gray-100 rounded-sm overflow-hidden">
<img alt="Cámara 5" className="w-full h-full object-cover grayscale-[20%]" src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full h-full relative bg-gray-100 rounded-sm overflow-hidden">
<img alt="Cámara 6" className="w-full h-full object-cover grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>

<div className="bg-[#0B1F3A] pt-3 pb-8 px-1 flex justify-around items-center z-10 border-t border-white/5">
<div className="flex flex-col items-center gap-1 w-[20%] text-white/50 hover:text-white/80 transition-colors cursor-pointer">
<iconify-icon icon="lucide:home" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="text-xs font-normal tracking-tight truncate w-full text-center">Inicio</span>
</div>
<div className="flex flex-col items-center gap-1 w-[20%] text-white/50 hover:text-white/80 transition-colors cursor-pointer">
<iconify-icon icon="lucide:alert-circle" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="text-xs font-normal tracking-tight truncate w-full text-center">Alertas</span>
</div>
<div className="flex flex-col items-center gap-1 w-[20%] text-white/50 hover:text-white/80 transition-colors cursor-pointer">
<iconify-icon icon="lucide:siren" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="text-xs font-normal tracking-tight truncate w-full text-center">Emergencia</span>
</div>
<div className="flex flex-col items-center gap-1 w-[20%] text-white/50 hover:text-white/80 transition-colors cursor-pointer">
<iconify-icon icon="lucide:message-square" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="text-xs font-normal tracking-tight truncate w-full text-center">Mensaje</span>
</div>
<div className="flex flex-col items-center gap-1 w-[20%] text-white cursor-pointer relative">
<iconify-icon icon="lucide:video" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="text-xs font-normal tracking-tight truncate w-full text-center">Cámara</span>
</div>
</div>
</div>
</div>

<div className="space-y-6 lg:space-y-12 order-3 flex flex-col items-center lg:items-start z-20 animate-on-scroll delay-200">

<div className="relative group cursor-pointer w-full max-w-sm">
<div className="p-4 rounded-3xl transition-all duration-300 flex items-center gap-5 hover:bg-white/[0.04] border border-transparent hover:border-white/5">
<div className="w-14 h-14 rounded-2xl bg-red-500/5 border border-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/10 transition-all duration-300 shadow-lg">
<iconify-icon className="text-red-400" icon="lucide:alert-triangle" style={{strokeWidth: '1.5'}} width="26"></iconify-icon>
</div>
<h4 className="text-white font-normal text-xl tracking-tight group-hover:text-red-400 transition-colors">Botón S.O.S</h4>
</div>
<div className="absolute z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out bottom-full mb-4 left-1/2 -translate-x-1/2 w-[280px] origin-bottom lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto lg:mb-0 lg:left-[calc(100%+1rem)] lg:translate-x-0 lg:origin-left scale-95 group-hover:scale-100 bg-[#111113]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 pointer-events-none">
<h5 className="text-white font-normal mb-3 text-lg text-red-400">Respuesta inmediata</h5>
<p className="text-base text-gray-400 font-thin leading-relaxed">Conexión directa y silenciosa con nuestra central operativa ante emergencias. Envío de alerta con ubicación precisa dentro del complejo.</p>
</div>
</div>

<div className="relative group cursor-pointer w-full max-w-sm">
<div className="p-4 rounded-3xl transition-all duration-300 flex items-center gap-5 hover:bg-white/[0.04] border border-transparent hover:border-white/5">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#6366f1]/20 group-hover:border-[#6366f1]/40 transition-all duration-300 shadow-lg">
<iconify-icon className="text-[#a78bfa]" icon="lucide:clipboard-list" style={{strokeWidth: '1.5'}} width="26"></iconify-icon>
</div>
<h4 className="text-white font-normal text-xl tracking-tight group-hover:text-[#a78bfa] transition-colors">Avisos del Consorcio</h4>
</div>
<div className="absolute z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out bottom-full mb-4 left-1/2 -translate-x-1/2 w-[280px] origin-bottom lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto lg:mb-0 lg:left-[calc(100%+1rem)] lg:translate-x-0 lg:origin-left scale-95 group-hover:scale-100 bg-[#111113]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 pointer-events-none">
<h5 className="text-white font-normal mb-3 text-lg">Comunicación fluida</h5>
<p className="text-base text-gray-400 font-thin leading-relaxed">Recibí notificaciones importantes de la administración, novedades, cortes de servicio o asambleas centralizadas en un solo lugar.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-gray-100">
<div className="max-w-[1200px] mx-auto px-6 lg:px-8">
<div className="text-center mb-16 animate-on-scroll">
<h2 className="font-display text-3xl lg:text-4xl font-medium tracking-tight text-[#0B1F3A] mb-4">
                        Consorcios que ya dieron el salto tecnológico
                    </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 animate-on-scroll">
<div className="flex gap-1 mb-6 text-yellow-400">
<iconify-icon className="fill-current" icon="lucide:star" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<p className="text-lg text-gray-700 font-thin leading-relaxed mb-8">
                            "Los vecinos estaban reacios al cambio, pero al primer mes notaron la diferencia. Bajamos casi un 40% los costos de expensas relacionados a seguridad y ahora realmente sentimos que el edificio está protegido."
                        </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-display font-normal text-lg tracking-tight">JP</div>
<div>
<div className="text-lg font-normal tracking-tight text-[#0B1F3A]">Juan Pérez</div>
<div className="text-base text-gray-500">Administrador, CABA</div>
</div>
</div>
</div>
<div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 animate-on-scroll delay-100 hidden md:block">
<div className="flex gap-1 mb-6 text-yellow-400">
<iconify-icon className="fill-current" icon="lucide:star" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<p className="text-lg text-gray-700 font-thin leading-relaxed mb-8">
                            "Teníamos problemas con ingresos no autorizados en la cochera. Desde que instalamos el tótem y el acceso biométrico, esos incidentes bajaron a cero. Es una tranquilidad llegar de noche."
                        </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-display font-normal text-lg tracking-tight">MR</div>
<div>
<div className="text-lg font-normal tracking-tight text-[#0B1F3A]">María Rodríguez</div>
<div className="text-base text-gray-500">Consejo, Palermo</div>
</div>
</div>
</div>
<div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 animate-on-scroll delay-200 hidden lg:block">
<div className="flex gap-1 mb-6 text-yellow-400">
<iconify-icon className="fill-current" icon="lucide:star" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<p className="text-lg text-gray-700 font-thin leading-relaxed mb-8">
                            "El proceso de instalación fue rápido y profesional. La app es súper intuitiva, hasta la gente mayor del edificio la usa para dar acceso a sus familiares sin problemas. Una inversión excelente."
                        </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-display font-normal text-lg tracking-tight">CF</div>
<div>
<div className="text-lg font-normal tracking-tight text-[#0B1F3A]">Carlos Ferrari</div>
<div className="text-base text-gray-500">Propietario, Belgrano</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 animate-on-scroll">
<h2 className="font-display text-3xl lg:text-4xl font-medium tracking-tight text-[#0B1F3A] mb-4">
                        Preguntas Frecuentes
                    </h2>
<p className="text-xl text-gray-500 font-thin">Resolvemos las dudas más comunes sobre la transición a seguridad inteligente.</p>
</div>
<div className="space-y-4 animate-on-scroll">
<div className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
<button className="faq-button w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50 transition-colors group">
<span className="font-display text-xl font-normal tracking-tight text-[#0A0A0A]">¿El sistema reemplaza completamente al guardia presencial?</span>
<div className="transition-transform duration-300 icon-container">
<iconify-icon className="text-gray-400" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</button>
<div className="faq-content hidden px-6 pb-6">
<p className="text-lg text-gray-600 font-thin leading-relaxed">
                                Sí. Nuestro sistema está diseñado para brindar mayor cobertura y control que un guardia presencial, sin puntos ciegos ni distracciones, reduciendo significativamente el costo operativo. En casos de grandes complejos, puede complementarse con rondas físicas, pero para el control de accesos y vigilancia perimetral, la telepresencia es más eficiente.
                            </p>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
<button className="faq-button w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50 transition-colors group">
<span className="font-display text-xl font-normal tracking-tight text-[#0A0A0A]">¿Es seguro depender de la tecnología si se corta la luz o internet?</span>
<div className="transition-transform duration-300 icon-container">
<iconify-icon className="text-gray-400" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</button>
<div className="faq-content hidden px-6 pb-6">
<p className="text-lg text-gray-600 font-thin leading-relaxed">
                                Absolutamente. Nuestras instalaciones incluyen sistemas UPS (baterías de respaldo) que garantizan el funcionamiento continuo ante cortes de energía. Además, contamos con conectividad redundante (múltiples redes de internet) para asegurar que el tótem y las cámaras nunca pierdan conexión con nuestra central.
                            </p>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
<button className="faq-button w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50 transition-colors group">
<span className="font-display text-xl font-normal tracking-tight text-[#0A0A0A]">¿Qué pasa ante una emergencia real o intento de intrusión?</span>
<div className="transition-transform duration-300 icon-container">
<iconify-icon className="text-gray-400" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</button>
<div className="faq-content hidden px-6 pb-6">
<p className="text-lg text-gray-600 font-thin leading-relaxed">
                                Al detectar una anomalía, el operador interviene de inmediato por el sistema de audio disuasivo del tótem. Si la amenaza persiste, se activa un protocolo estricto: se da aviso inmediato a la policía (911), se activan sirenas locales y se notifica al administrador y a los vecinos afectados, todo en cuestión de segundos.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden border-t border-gray-100" id="contacto">
<div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-bl from-gray-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none"></div>
<div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
<div className="bg-[#05050a] rounded-[48px] p-10 md:p-16 flex flex-col lg:flex-row gap-16 items-center shadow-2xl overflow-hidden relative">
<div className="absolute -right-40 -top-40 w-96 h-96 bg-[#6366f1]/20 rounded-full blur-[100px]"></div>
<div className="lg:w-1/2 relative z-10 animate-on-scroll">
<h2 className="font-display text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
                            Da el primer paso hacia un edificio más seguro
                        </h2>
<p className="text-xl text-gray-400 font-thin mb-10 max-w-lg">
                            Agendá una consultoría técnica gratuita. Evaluaremos las vulnerabilidades de tu consorcio y diseñaremos una propuesta a medida, sin compromiso.
                        </p>
<div className="space-y-5 mb-10">
<div className="flex items-center gap-4 text-lg text-gray-300">
<iconify-icon className="text-[#8b5cf6]" icon="lucide:check-circle" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
                                Relevamiento técnico in-situ
                            </div>
<div className="flex items-center gap-4 text-lg text-gray-300">
<iconify-icon className="text-[#8b5cf6]" icon="lucide:check-circle" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
                                Análisis de costos vs. ahorro proyectado
                            </div>
<div className="flex items-center gap-4 text-lg text-gray-300">
<iconify-icon className="text-[#8b5cf6]" icon="lucide:check-circle" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
                                Presentación formal para asamblea
                            </div>
</div>
<div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-white/10">
<a className="flex items-center gap-3 text-lg text-white hover:text-[#a78bfa] transition-colors" href="mailto:info@agentecentral.com">
<iconify-icon className="text-gray-400" icon="lucide:mail" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                                info@agentecentral.com
                            </a>
<a className="flex items-center gap-3 text-lg text-white hover:text-[#a78bfa] transition-colors" href="tel:01149412664">
<iconify-icon className="text-gray-400" icon="lucide:phone" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                                (011) 4941-2664
                            </a>
</div>
</div>
<div className="lg:w-1/2 w-full relative z-10 animate-on-scroll delay-100">
<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-10 shadow-xl">
<h3 className="font-display text-3xl font-normal text-white mb-8 tracking-tight">Solicitar consultoría</h3>
<form className="space-y-5" id="contactForm">
<div>
<label className="sr-only" htmlFor="name">Nombre completo</label>
<input className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/50 focus:border-transparent transition-all" id="name" placeholder="Nombre completo o Consorcio" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-5">
<div>
<label className="sr-only" htmlFor="phone">Teléfono</label>
<input className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/50 focus:border-transparent transition-all" id="phone" placeholder="Teléfono" required="" type="tel"/>
</div>
<div>
<label className="sr-only" htmlFor="email">Email</label>
<input className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/50 focus:border-transparent transition-all" id="email" placeholder="Email" required="" type="email"/>
</div>
</div>
<div>
<label className="sr-only" htmlFor="message">Mensaje o consulta</label>
<textarea className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/50 focus:border-transparent transition-all resize-none" id="message" placeholder="Contanos brevemente sobre tu edificio..." rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-normal text-white bg-white/10 border border-white/20 rounded-2xl hover:bg-[#6366f1] hover:border-[#6366f1] transition-all duration-300" type="submit">
                                    Enviar solicitud
                                </button>
<div className="hidden mt-4 p-4 bg-green-500/10 text-green-400 text-base rounded-2xl border border-green-500/20 flex items-center gap-3" id="formSuccess">
<iconify-icon className="flex-shrink-0" icon="lucide:check-circle" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                                    Mensaje enviado correctamente. Nos pondremos en contacto a la brevedad.
                                </div>
</form>
<div className="mt-8 flex items-center justify-center">
<span className="text-sm text-gray-500 uppercase tracking-widest font-normal">O comunicate por</span>
</div>
<a className="mt-5 w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-normal text-white bg-transparent border border-white/10 rounded-2xl hover:bg-[#25D366]/10 hover:border-[#25D366]/30 hover:text-[#25D366] transition-all duration-300" href="#" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="lucide:message-circle" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                                Escribinos por WhatsApp
                            </a>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white pt-20 pb-10">
<div className="max-w-[1200px] mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-3 text-[#0A0A0A] font-display font-normal text-xl tracking-tight mb-6" href="#">
<div className="w-8 h-8 rounded-lg bg-[#6366f1] flex items-center justify-center">
<iconify-icon className="text-white flex-shrink-0" icon="lucide:shield-check" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
                        AGENTE CENTRAL
                    </a>
<p className="text-base text-gray-500 font-thin leading-relaxed max-w-sm mb-8">
                        Soluciones avanzadas de seguridad inteligente por telepresencia para consorcios, barrios privados y empresas en Argentina.
                    </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#6366f1] hover:text-white hover:border-[#6366f1] transition-all" href="#">
<iconify-icon icon="lucide:external-link" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#6366f1] hover:text-white hover:border-[#6366f1] transition-all" href="#">
<iconify-icon icon="lucide:external-link" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
</div>
</div>
<div className="">
<h4 className="font-display font-normal text-lg text-[#0A0A0A] tracking-tight mb-6">Contacto</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-base text-gray-500 font-thin">
<iconify-icon className="mt-1 text-gray-400" icon="lucide:map-pin" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                            Los Patos 2650, CABA<br/>Argentina
                        </li>
<li className="flex items-center gap-3 text-base text-gray-500 font-thin">
<iconify-icon className="text-gray-400" icon="lucide:phone" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                            (011) 4941-2664
                        </li>
<li className="flex items-center gap-3 text-base text-gray-500 font-thin">
<iconify-icon className="text-gray-400" icon="lucide:mail" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                            info@agentecentral.com
                        </li>
</ul>
</div>
<div>
<h4 className="font-display font-normal text-lg text-[#0A0A0A] tracking-tight mb-6">Legal</h4>
<ul className="space-y-4">
<li><a className="text-base text-gray-500 font-thin hover:text-[#6366f1] transition-colors" href="#">Términos y Condiciones</a></li>
<li><a className="text-base text-gray-500 font-thin hover:text-[#6366f1] transition-colors" href="#">Política de Privacidad</a></li>
<li><a className="text-base text-gray-500 font-thin hover:text-[#6366f1] transition-colors" href="#">Protocolos de Seguridad</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-gray-400 font-thin uppercase tracking-wider">
                    © 2024 Agente Central. Todos los derechos reservados.
                </p>
<div className="flex items-center gap-2 text-sm text-gray-400 font-thin">
<iconify-icon icon="lucide:shield-check" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                    Tecnología y Monitoreo Seguro
                </div>
</div>
</div>
</footer>



    </>
  );
}
