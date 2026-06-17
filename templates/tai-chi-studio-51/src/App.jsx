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



        lucide.createIcons();

        // -------------------------
        // GSAP ANIMATION LOGIC (EXISTING)
        // -------------------------
        gsap.registerPlugin(ScrollTrigger);

        function splitTextForReveal(element) {
            const text = element.textContent.trim();
            const words = text.split(' ');
            element.textContent = ''; 
            words.forEach(word => {
                const wrapper = document.createElement('span');
                wrapper.classList.add('word-wrapper');
                const inner = document.createElement('span');
                inner.classList.add('word-inner');
                inner.textContent = word + '\u00A0'; 
                wrapper.appendChild(inner);
                element.appendChild(wrapper);
            });
        }
        
        const revealElements = document.querySelectorAll('.reveal-text');
        revealElements.forEach(element => {
            splitTextForReveal(element);
            const innerWords = element.querySelectorAll('.word-inner');
            gsap.to(innerWords, {
                y: 0,
                duration: 1.2,
                stagger: 0.05,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%", 
                    toggleActions: "play none none reverse" 
                }
            });
        });

        gsap.to("#hero-bg", {
            yPercent: 30, 
            ease: "none",
            scrollTrigger: {
                trigger: "#hero-section",
                start: "top top",
                end: "bottom top",
                scrub: true 
            }
        });

        // -------------------------
        // SLIDER LOGIC
        // -------------------------
        const container = document.getElementById('testimonial-container');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if(container && nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                container.scrollBy({ left: container.clientWidth * 0.7, behavior: 'smooth' });
            });
            prevBtn.addEventListener('click', () => {
                container.scrollBy({ left: -(container.clientWidth * 0.7), behavior: 'smooth' });
            });
        }

        // -------------------------
        // NEW FUNCTIONALITY
        // -------------------------

        // 1. Interactive Classes (Switch Content)
        const classItems = document.querySelectorAll('.class-item');
        const displayImage = document.getElementById('class-display-image');
        const displayTitle = document.getElementById('class-display-title');
        const displayTag = document.getElementById('class-display-tag');

        classItems.forEach(item => {
            item.addEventListener('click', () => {
                // Reset styles
                classItems.forEach(i => {
                    i.classList.remove('bg-white', 'shadow-sm', 'border-stone-100');
                    i.classList.add('hover:bg-white', 'border-transparent', 'hover:border-stone-100');
                    i.querySelector('.number-badge').classList.remove('bg-stone-100', 'text-stone-500');
                    i.querySelector('.number-badge').classList.add('text-stone-400');
                    
                    // Hide description & button for inactive items
                    const desc = i.querySelector('.item-desc');
                    if(desc) desc.style.display = 'none'; // simple toggle for visual
                    const btn = i.querySelector('button');
                    if(btn) btn.parentElement.style.opacity = '0';
                });

                // Active style
                item.classList.remove('hover:bg-white', 'border-transparent', 'hover:border-stone-100');
                item.classList.add('bg-white', 'shadow-sm', 'border-stone-100');
                item.querySelector('.number-badge').classList.remove('text-stone-400');
                item.querySelector('.number-badge').classList.add('bg-stone-100', 'text-stone-500');

                // Update Display Data
                const newImage = item.getAttribute('data-image');
                const newTitle = item.getAttribute('data-title');
                const newTag = item.getAttribute('data-tag');

                // Fade out image, swap, fade in
                displayImage.style.opacity = '0';
                setTimeout(() => {
                    displayImage.src = newImage;
                    displayTitle.textContent = newTitle;
                    displayTag.textContent = newTag;
                    displayImage.style.opacity = '1';
                }, 300);
            });
        });

        // 2. FAQ Accordion
        const faqToggles = document.querySelectorAll('.toggle-faq');
        faqToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const content = toggle.parentElement.querySelector('.faq-content');
                const icon = toggle.querySelector('.icon-container iconify-icon');
                
                // Close others
                document.querySelectorAll('.faq-content').forEach(c => {
                    if(c !== content) {
                        c.style.maxHeight = null;
                        c.classList.remove('active');
                        // reset icon (simplified)
                    }
                });

                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    content.classList.remove('active');
                    icon.setAttribute('icon', 'solar:add-linear');
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    content.classList.add('active');
                    icon.setAttribute('icon', 'solar:minus-linear');
                }
            });
        });

        // 3. Mobile Menu Toggle
        const openMenu = document.getElementById('open-menu');
        const closeMenu = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            mobileMenu.classList.toggle('translate-x-full');
            document.body.classList.toggle('overflow-hidden');
        }

        if(openMenu) openMenu.addEventListener('click', toggleMenu);
        if(closeMenu) closeMenu.addEventListener('click', toggleMenu);
        mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

    
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
      

<div className="fixed inset-0 bg-stone-900 z-[60] transform translate-x-full transition-transform duration-300 flex flex-col justify-center items-center text-white gap-8 md:hidden" id="mobile-menu">
<button className="absolute top-6 right-6 p-2" id="close-menu">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<a className="text-2xl font-light mobile-link" href="#filosofia">Filosofía</a>
<a className="text-2xl font-light mobile-link" href="#clases">Clases</a>
<a className="text-2xl font-light mobile-link" href="#maestros">Maestros</a>
<a className="text-2xl font-light mobile-link" href="#faq">Dudas</a>
</div>

<nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center text-white mix-blend-difference">
<div className="flex items-center gap-2 cursor-pointer" onclick="window.scrollTo(0,0)">
<iconify-icon height="28" icon="solar:infinity-linear" width="28"></iconify-icon>
<span className="text-xl font-medium tracking-tighter uppercase">Tao Bilbao</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight bg-stone-900/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
<a className="hover:opacity-70 transition" href="#filosofia">Filosofía</a>
<a className="hover:opacity-70 transition" href="#clases">Clases</a>
<a className="hover:opacity-70 transition" href="#maestros">Maestros</a>
<a className="hover:opacity-70 transition" href="#faq">Dudas</a>
</div>
<div className="flex items-center gap-4">
<button className="bg-white text-stone-950 px-5 py-2.5 rounded-full text-xs font-medium hover:bg-stone-200 transition hidden md:block">
                Área Alumnos
            </button>

<button className="md:hidden text-white" id="open-menu">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full h-screen min-h-[800px] overflow-hidden" id="hero-section">

<div className="absolute inset-0 w-full h-full overflow-hidden">
<img alt="Práctica de Tai Chi en la naturaleza" className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover filter brightness-[0.65] sepia-[0.2] will-change-transform" id="hero-bg" src="https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&amp;w=2869&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col md:px-12 md:pb-24 text-white pr-6 pb-12 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end z-10">
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
<div className="">
<div className="flex items-center gap-2 mb-6 opacity-80">
<div className="w-2 h-2 rounded-full bg-emerald-200 animate-pulse"></div>

<span className="text-xs font-medium tracking-wide uppercase">Bilbao (Abando) • Online</span>
</div>

<h1 className="reveal-text leading-[1.05] md:text-7xl text-5xl tracking-tighter mb-6 font-light">Cultiva la quietud en movimiento.</h1>
</div>
<div className="flex flex-col items-start lg:items-end justify-end gap-8">
<p className="text-lg md:text-xl font-light leading-relaxed max-w-md text-left lg:text-right opacity-90">
                        Una escuela en el corazón de Bilbao dedicada al estudio del Tai Chi Chuan y Qigong como herramientas para la salud.
                    </p>
<a className="group flex items-center gap-3 bg-white text-stone-950 pl-6 pr-2 py-2 rounded-full transition hover:bg-stone-200" href="#clases">
<span className="text-sm font-medium">Clase de Prueba</span>
<div className="w-8 h-8 bg-stone-950 rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition duration-300">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</a>
</div>
</div>
<div className="max-w-7xl mx-auto w-full flex justify-between text-xs font-medium uppercase tracking-widest opacity-50 mt-12 border-t border-white/20 pt-6">
<span>Artes Internas</span>
<span>2024 Tao Center</span>
</div>
</div>
</header>

<section className="px-6 py-24 md:px-12 max-w-[1600px] mx-auto" id="filosofia">
<div className="flex justify-between items-baseline mb-12 border-b border-stone-200 pb-4">
<span className="text-xs text-stone-400 uppercase tracking-widest">/ 01 El Camino</span>
<span className="text-xs text-stone-400 font-mono">[ 01 ]</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-4 relative group overflow-hidden rounded-2xl h-[500px]">
<img alt="Maestro meditando" className="w-full h-full object-cover transition duration-700 group-hover:scale-105 filter grayscale-[0.2]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent flex flex-col justify-end p-8">
<p className="text-white text-lg font-light leading-snug">"El agua suave desgasta la roca dura. La flexibilidad vence a la rigidez."</p>
<div className="flex items-center gap-1 text-[#E0D8C8] mt-4">
<iconify-icon icon="solar:medal-star-linear" width="14"></iconify-icon>
<span className="text-white text-sm font-medium ml-1">Lao Tse</span>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col justify-between h-full gap-8">
<div className="">

<h2 className="reveal-text text-3xl tracking-tight text-stone-900 leading-tight mb-8 font-light">" No es solo un ejercicio físico, es una meditación dinámica que restaura el flujo vital. "</h2>
<p className="text-stone-500 text-base leading-relaxed">Nuestra metodología fusiona la tradición clásica del estilo Yang con la biomecánica moderna para una práctica segura y profunda.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex-1 flex flex-col justify-end relative overflow-hidden group">
<img alt="Detalle manos" className="absolute inset-0 w-full h-full object-cover opacity-90 transition duration-700 group-hover:scale-105 filter sepia-[0.3]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex items-center justify-between">
<p className="text-stone-500 text-sm max-w-[200px]">Linaje Tradicional</p>
<button className="bg-stone-900 text-white pl-5 pr-2 py-2 rounded-full flex items-center gap-2 hover:bg-stone-800 transition">
<span className="text-xs font-medium">Conocer el Linaje</span>
<div className="bg-white text-black rounded-full p-1">
<iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
</button>
</div>
</div>

<div className="lg:col-span-4 bg-[#4A4E46] rounded-2xl p-8 flex flex-col justify-between min-h-[500px] relative overflow-hidden text-[#E0D8C8]">

<div className="absolute top-0 right-0 p-8 opacity-10 text-white">
<iconify-icon height="120" icon="solar:heart-pulse-linear" width="120"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-[#E0D8C8] rounded-full animate-pulse"></div>
<span className="text-xs font-medium uppercase tracking-wide">Bienestar Integral</span>
</div>
<div>
<h3 className="text-6xl tracking-tighter text-white mb-2 font-light">45min</h3>
<p className="text-[#E0D8C8] text-sm opacity-80 mb-8">Tiempo diario recomendado para notar cambios en el sistema nervioso.</p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-full bg-white/10 h-10 rounded-full overflow-hidden flex items-center px-4 relative">
<span className="relative z-10 text-xs font-medium text-white">Reducción Estrés</span>
<div className="absolute left-0 top-0 h-full bg-[#E0D8C8]/20 w-[92%]"></div>
</div>
<span className="text-sm font-medium text-white">92%</span>
</div>
<div className="flex items-center gap-3">
<div className="w-full bg-white/10 h-10 rounded-full overflow-hidden flex items-center px-4 relative">
<span className="relative z-10 text-xs font-medium text-white">Equilibrio &amp; Postura</span>
<div className="absolute left-0 top-0 h-full bg-[#E0D8C8]/20 w-[85%]"></div>
</div>
<span className="text-sm font-medium text-white">85%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full overflow-hidden border-y border-stone-200 bg-white py-12 relative flex items-center justify-center" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<style>
        @keyframes scroll-loop {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-scroll-infinite {
            animation: scroll-loop 40s linear infinite;
        }
        .animate-scroll-infinite:hover {
            animation-play-state: paused;
        }
    </style>
<div className="flex w-max animate-scroll-infinite items-center">

<div className="flex items-center gap-20 px-10 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 ease-out text-stone-800">
<iconify-icon height="56" icon="simple-icons:mindinsight" width="56"></iconify-icon>
<iconify-icon height="56" icon="simple-icons:gaana" width="56"></iconify-icon>
<iconify-icon height="56" icon="simple-icons:headspace" width="56"></iconify-icon>
<iconify-icon height="64" icon="mdi:yoga" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:applehealth" width="64"></iconify-icon>
<iconify-icon height="56" icon="simple-icons:whoop" width="56"></iconify-icon>
<iconify-icon height="56" icon="simple-icons:oura" width="56"></iconify-icon>
<iconify-icon height="56" icon="simple-icons:calm" width="56"></iconify-icon>
</div>

<div className="flex items-center gap-20 px-10 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 ease-out text-stone-800">
<iconify-icon height="56" icon="simple-icons:mindinsight" width="56"></iconify-icon>
<iconify-icon height="56" icon="simple-icons:gaana" width="56"></iconify-icon>
<iconify-icon height="56" icon="simple-icons:headspace" width="56"></iconify-icon>
<iconify-icon height="64" icon="mdi:yoga" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:applehealth" width="64"></iconify-icon>
<iconify-icon height="56" icon="simple-icons:whoop" width="56"></iconify-icon>
<iconify-icon height="56" icon="simple-icons:oura" width="56"></iconify-icon>
<iconify-icon height="56" icon="simple-icons:calm" width="56"></iconify-icon>
</div>
</div>
</div>

<section className="px-6 py-24 md:px-12 max-w-[1600px] mx-auto" id="maestros">
<div className="bg-[#4A4E46] rounded-[40px] p-8 md:p-16 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
<iconify-icon height="400" icon="solar:wind-linear" width="400"></iconify-icon>
</div>
<div className="flex justify-between items-baseline mb-12 border-b border-white/10 pb-4 relative z-10">
<span className="text-xs text-[#E0D8C8]/60 uppercase tracking-widest">/ 02 Práctica</span>
<span className="text-xs text-[#E0D8C8]/60 font-mono">[ 02 ]</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">

<div className="flex flex-col justify-between order-2 lg:order-1 gap-12">
<div className="">
<div className="flex items-start justify-between gap-6">
<h2 className="text-4xl lg:text-5xl tracking-tight text-white mb-8 max-w-md font-light">
                            Tradición milenaria, salud contemporánea.
                        </h2>
<div className="border border-[#E0D8C8]/20 rounded-full p-2 hidden lg:block shrink-0">
<iconify-icon className="text-[#E0D8C8]" height="24" icon="solar:lotus-linear" width="24"></iconify-icon>
</div>
</div>
<div className="flex flex-wrap gap-3 mb-8">
<span className="px-4 py-2 rounded-full border border-[#E0D8C8]/20 text-xs font-medium text-[#E0D8C8] hover:bg-[#E0D8C8] hover:text-[#3C3832] transition cursor-pointer">Estilo Yang</span>
<span className="px-4 py-2 rounded-full border border-[#E0D8C8]/20 text-xs font-medium text-[#E0D8C8] hover:bg-[#E0D8C8] hover:text-[#3C3832] transition cursor-pointer">Qigong Médico</span>
<span className="px-4 py-2 rounded-full border border-[#E0D8C8]/20 text-xs font-medium text-[#E0D8C8] hover:bg-[#E0D8C8] hover:text-[#3C3832] transition cursor-pointer">Meditación Taoísta</span>
<span className="px-4 py-2 rounded-full border border-[#E0D8C8]/20 text-xs font-medium text-[#E0D8C8] hover:bg-[#E0D8C8] hover:text-[#3C3832] transition cursor-pointer">Tui Na</span>
<span className="px-4 py-2 rounded-full border border-[#E0D8C8]/20 text-xs font-medium text-[#E0D8C8] hover:bg-[#E0D8C8] hover:text-[#3C3832] transition cursor-pointer">Espada Tai Chi</span>
</div>
</div>
<div className="bg-[#3e423a] border border-white/5 rounded-2xl p-6 flex gap-6 items-center">
<img alt="Maestro" className="w-20 h-20 rounded-xl object-cover grayscale opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="">
<h4 className="text-lg font-medium text-white">Maestro Iñaki Chen</h4>
<div className="flex items-center gap-2 mb-2">
<span className="text-xs text-white/50">Director Técnico</span>
</div>
<p className="text-sm text-white/70 max-w-xs mb-4">"Buscamos la armonía entre el cuerpo, la respiración y la mente."</p>
<button className="bg-[#E0D8C8] text-[#3C3832] pl-4 pr-1 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium w-max hover:bg-white transition">
                            Agendar Visita
                            <div className="bg-[#3C3832] text-[#E0D8C8] rounded-full p-1">
<iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
</button>
</div>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden h-[500px] lg:h-[600px] group order-1 lg:order-2">
<img alt="Práctica suave" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>

<div className="absolute top-6 right-6 bg-[#3e423a]/90 backdrop-blur-md p-5 rounded-2xl shadow-xl w-72 border border-white/10">
<div className="flex justify-between items-end mb-4 border-b border-white/10 pb-2">
<div className="">
<span className="text-[10px] uppercase text-[#E0D8C8]/60 font-bold tracking-wider">Estado de Flujo</span>
<div className="text-2xl tracking-tight font-light text-white">Qi <span className="text-xs text-white/40 font-normal">Balance</span></div>
</div>
<div className="text-right">
<span className="text-[10px] uppercase text-[#E0D8C8]/60 font-bold tracking-wider">Calma</span>
<div className="text-2xl tracking-tight font-light text-white">Alta <span className="text-xs text-white/40 font-normal"></span></div>
</div>
</div>
<div className="flex justify-between gap-1 h-10 items-end">
<div className="h-[40%] w-2 bg-white/10 rounded-full"></div>
<div className="h-[50%] w-2 bg-white/10 rounded-full"></div>
<div className="h-[45%] w-2 bg-white/10 rounded-full"></div>
<div className="h-[60%] w-2 bg-white/10 rounded-full"></div>
<div className="h-[90%] w-2 bg-[#E0D8C8] rounded-full shadow-[0_0_10px_rgba(224,216,200,0.5)]"></div>
<div className="h-[70%] w-2 bg-white/10 rounded-full"></div>
<div className="h-[65%] w-2 bg-white/10 rounded-full"></div>
<div className="h-[60%] w-2 bg-white/10 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 bg-stone-50 max-w-[1600px] border-stone-100 border rounded-[40px] mt-12 mr-auto mb-12 ml-auto pt-24 pr-6 pb-24 pl-6" id="clases">
<div className="flex justify-between items-baseline mb-16">
<div className="">
<span className="text-xs text-stone-400 uppercase tracking-widest block mb-4">/ 03 Clases</span>
<h2 className="text-4xl md:text-5xl tracking-tight text-stone-900 max-w-lg font-light">
                    Planes de entrenamiento personal.
                 </h2>
</div>
<div className="hidden lg:block">
<p className="text-sm text-stone-500 max-w-xs text-right">Horarios flexibles en Abando, adaptados a ti.</p>
<span className="text-xs text-stone-400 font-mono block text-right mt-2">[ 03 ]</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="relative rounded-3xl overflow-hidden h-[700px] shadow-lg transition-all duration-500">
<img alt="Clase grupal" className="w-full h-full object-cover grayscale-[0.2] transition-opacity duration-300" id="class-display-image" src="https://images.unsplash.com/photo-1524863479829-916d8e77f114?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 right-8 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 backdrop-blur-sm bg-white/95">
<div className="flex justify-between items-start mb-4">
<div className="">
<p className="text-xs text-stone-500 uppercase font-medium" id="class-display-tag">Plan Recomendado</p>
<h3 className="text-3xl tracking-tight text-stone-900 font-light" id="class-display-title">Tai Chi Estilo Yang</h3>
</div>
<div className="bg-stone-900 text-white text-[10px] uppercase font-bold tracking-wide px-3 py-1.5 rounded">
                            Bilbao Centro
                        </div>
</div>
<div className="w-full h-1 bg-stone-100 rounded-full mb-4 overflow-hidden">
<div className="w-[70%] bg-[#4A4E46] h-full"></div>
</div>
<div className="flex justify-between text-xs text-stone-500 font-medium">
<div className="flex items-center gap-1">
<iconify-icon className="text-[#4A4E46]" icon="solar:check-circle-linear"></iconify-icon>
<span>Clases presenciales</span>
</div>
<div className="flex items-center gap-1">
<iconify-icon className="text-[#4A4E46]" icon="solar:check-circle-linear"></iconify-icon>
<span>Talleres fin de semana</span>
</div>
<div className="flex items-center gap-1">
<iconify-icon className="text-[#4A4E46]" icon="solar:check-circle-linear"></iconify-icon>
<span>Acceso Online</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-2" id="classes-list">


<div className="class-item group p-8 rounded-2xl bg-white shadow-sm border border-stone-100 transition cursor-pointer" data-desc="La forma más popular y accesible. Movimientos largos, suaves y continuos que mejoran la circulación, el equilibrio y calman la mente." data-image="https://images.unsplash.com/photo-1524863479829-916d8e77f114?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" data-tag="Nivel Iniciación" data-title="Tai Chi Estilo Yang">
<div className="flex items-start gap-6">
<div className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-xs font-mono text-stone-500 number-badge bg-stone-100">01</div>
<div className="flex-1">
<h3 className="text-2xl tracking-tight text-stone-900 mb-2 font-light group-hover:text-[#4A4E46] transition">Tai Chi Estilo Yang</h3>
<p className="text-stone-500 text-base font-light leading-relaxed mb-4 item-desc">
                                La forma más popular y accesible. Movimientos largos, suaves y continuos.
                            </p>
<div className="flex items-center justify-between opacity-100 transition-opacity">
<button className="text-[#4A4E46] text-xs font-medium border-b border-[#4A4E46] pb-0.5 hover:opacity-70">Ver detalles</button>
</div>
</div>
</div>
</div>

<div className="class-item group p-8 rounded-2xl hover:bg-white border border-transparent hover:border-stone-100 transition cursor-pointer" data-desc="Ejercicios respiratorios y estáticos coordinados con la atención mental para fortalecer los órganos internos y aumentar la vitalidad." data-image="https://images.unsplash.com/photo-1518310952931-b1de32eac88b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" data-tag="Salud Integral" data-title="Qigong 5 Elementos">
<div className="flex items-center gap-6 opacity-60 group-hover:opacity-100 transition">
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-xs font-mono text-stone-400 group-hover:border-stone-400 group-hover:text-stone-600 number-badge">02</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-stone-900">Qigong de los 5 Elementos</h3>
</div>
</div>
</div>

<div className="class-item group p-8 rounded-2xl hover:bg-white border border-transparent hover:border-stone-100 transition cursor-pointer" data-desc="Práctica avanzada que extiende la energía (Qi) a través de la hoja. Requiere precisión, foco y una conexión profunda cuerpo-mente." data-image="https://images.unsplash.com/photo-1588753239247-c6b22b64731f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" data-tag="Nivel Avanzado" data-title="Tai Chi con Espada">
<div className="flex items-center gap-6 opacity-60 group-hover:opacity-100 transition">
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-xs font-mono text-stone-400 group-hover:border-stone-400 group-hover:text-stone-600 number-badge">03</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-stone-900">Tai Chi con Espada</h3>
</div>
</div>
</div>

<div className="class-item group p-8 rounded-2xl hover:bg-white border border-transparent hover:border-stone-100 transition cursor-pointer" data-desc="Técnicas de 'Sentarse en el Olvido' (Zuowang) y Alquimia Interna para cultivar el espíritu y calmar las emociones." data-image="https://images.unsplash.com/photo-1599447421405-075c1554d31b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" data-tag="Mente y Espíritu" data-title="Meditación Taoísta">
<div className="flex items-center gap-6 opacity-60 group-hover:opacity-100 transition">
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-xs font-mono text-stone-400 group-hover:border-stone-400 group-hover:text-stone-600 number-badge">04</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-stone-900">Meditación Taoísta</h3>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 md:px-12 max-w-[1600px] mx-auto">
<div className="flex justify-between items-baseline mb-8 border-b border-stone-200 pb-4">
<span className="text-xs text-stone-400 uppercase tracking-widest">/ 04 Tienda</span>
<span className="text-xs text-stone-400 font-mono">[ 04 ]</span>
</div>
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<h2 className="text-4xl tracking-tight text-stone-900 max-w-lg font-light">
                Elementos seleccionados para tu práctica.
            </h2>
<div className="flex gap-2">
<button className="px-4 py-1.5 bg-stone-900 text-white rounded-full text-xs font-medium hover:bg-stone-700 transition">Todo</button>
<button className="px-4 py-1.5 border border-stone-200 text-stone-600 rounded-full text-xs font-medium hover:border-stone-400 transition">Ropa</button>
<button className="px-4 py-1.5 border border-stone-200 text-stone-600 rounded-full text-xs font-medium hover:border-stone-400 transition">Té &amp; Incienso</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 overflow-hidden group flex flex-col bg-stone-100 bg-[url(https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&amp;w=1978&amp;auto=format&amp;fit=crop)] bg-cover bg-center rounded-3xl pt-10 pr-10 pb-10 pl-10 relative justify-between cursor-pointer">
<div className="relative z-10">
<span className="px-3 py-1 bg-white/80 backdrop-blur text-stone-900 text-[10px] font-bold uppercase tracking-wider rounded border border-stone-200">Bestseller</span>
<h3 className="text-4xl text-stone-900 mt-6 mb-2 font-light">Juego de Té Gongfu</h3>
<p className="text-stone-800 max-w-sm font-medium">Cerámica artesanal para la ceremonia del té post-práctica.</p>
</div>
<div className="relative z-10 flex justify-between items-end">
<div className="text-2xl text-stone-900 font-light">85€</div>
<button className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-stone-200 hover:scale-110 transition shadow-sm">
<iconify-icon icon="solar:bag-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="md:col-span-1 bg-[#D6E0CC] rounded-3xl p-6 relative group overflow-hidden flex flex-col justify-between cursor-pointer hover:shadow-lg transition">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="w-16 h-16 bg-[#4A4E46] rounded-full flex items-center justify-center text-white mb-4">
<iconify-icon icon="solar:t-shirt-linear" width="32"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-medium text-[#4A4E46]">Traje de Seda</h4>
<p className="text-xs text-[#4A4E46]/70 mt-1">Corte tradicional</p>
</div>
<div className="mt-4 flex justify-between items-center border-t border-[#4A4E46]/10 pt-4">
<span className="font-medium text-[#4A4E46]">120€</span>
<span className="text-[10px] uppercase tracking-wide text-[#4A4E46]/60">Unisex</span>
</div>
</div>

<div className="md:col-span-1 bg-white border border-stone-200 rounded-3xl p-6 relative group overflow-hidden flex flex-col justify-between cursor-pointer hover:shadow-lg transition">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center text-stone-400 mb-4">
<iconify-icon icon="solar:sofa-linear" width="32"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-stone-900">Zafu Meditación</h4>
<p className="text-xs text-stone-500 mt-1">Relleno de trigo sarraceno</p>
</div>
<div className="mt-4 flex justify-between items-center border-t border-stone-100 pt-4">
<span className="font-medium text-stone-900">45€</span>
<span className="text-[10px] uppercase tracking-wide text-stone-400">Orgánico</span>
</div>
</div>

<div className="md:col-span-2 bg-[#4A4E46] rounded-3xl p-8 flex items-center justify-between text-white relative overflow-hidden group cursor-pointer hover:bg-[#3d4039] transition">
<div className="relative z-10 max-w-[60%]">
<h4 className="text-2xl mb-2 font-light">Kit Iniciación</h4>
<p className="text-sm text-white/60 mb-6">Uniforme básico, zapatillas y guía de formas.</p>
<button className="text-xs font-medium border-b border-white pb-0.5 hover:text-[#E0D8C8] hover:border-[#E0D8C8] transition">Ver Pack</button>
</div>
<div className="absolute right-0 bottom-0 h-full w-1/3 bg-gradient-to-l from-white/10 to-transparent"></div>
<div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 transition duration-500">
<span className="text-lg font-medium">95€</span>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 md:px-12 max-w-[1600px] mx-auto">
<div className="bg-[#4A4E46] rounded-[40px] p-8 md:p-16 text-white relative overflow-hidden">
<div className="flex justify-between items-start mb-12 relative z-10">
<div className="">
<span className="text-xs text-white/50 uppercase tracking-widest block mb-4">/ 05 Comunidad</span>
<h2 className="text-3xl md:text-5xl tracking-tight max-w-lg leading-tight font-light">
                        Voces de Bilbao.
                    </h2>
</div>
<div className="flex gap-2">
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#4A4E46] transition duration-300" id="prevBtn">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#4A4E46] transition duration-300" id="nextBtn">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex overflow-x-auto gap-6 pb-4 snap-x hide-scrollbar scroll-smooth" id="testimonial-container">

<div className="min-w-[100%] md:min-w-[80%] lg:min-w-[70%] snap-center">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#3e423a] rounded-3xl p-6 lg:p-0 overflow-hidden">
<div className="lg:col-span-4 h-64 lg:h-auto relative">
<img alt="Estudiante" className="w-full h-full object-cover rounded-2xl lg:rounded-none lg:rounded-l-3xl opacity-90 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="lg:col-span-8 flex flex-col justify-center lg:py-12 lg:pr-12">
<iconify-icon className="mb-6 opacity-30 text-[#E0D8C8]" height="40" icon="solar:quote-up-bold" width="40"></iconify-icon>
<blockquote className="text-xl md:text-3xl leading-snug tracking-tight mb-8 font-light">
                                 "Llegué a Abando buscando flexibilidad física y encontré una paz mental que no sabía que existía. El maestro Iñaki es excepcional."
                             </blockquote>
<div className="flex items-center gap-4">
<div>
<div className="font-medium text-lg text-[#E0D8C8]">Ana García</div>
<div className="text-xs uppercase tracking-wider opacity-60">Arquitecta, 42 años</div>
</div>
</div>
</div>
</div>
</div>

<div className="min-w-[100%] md:min-w-[80%] lg:min-w-[70%] snap-center">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#3e423a] rounded-3xl p-6 lg:p-0 overflow-hidden">
<div className="lg:col-span-4 h-64 lg:h-auto relative">
<img alt="Estudiante" className="lg:rounded-none lg:rounded-l-3xl opacity-90 w-full h-full object-cover rounded-2xl grayscale" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp;w=1999&amp;auto=format&amp;fit=crop"/>
</div>
<div className="lg:col-span-8 flex flex-col justify-center lg:py-12 lg:pr-12">
<iconify-icon className="mb-6 opacity-30 text-[#E0D8C8]" height="40" icon="solar:quote-up-bold" width="40"></iconify-icon>
<blockquote className="text-xl md:text-3xl leading-snug tracking-tight mb-8 font-light">
                                 "El Qigong ha transformado mi salud. Mis dolores de espalda han desaparecido. Un oasis en el centro de Bilbao."
                             </blockquote>
<div className="flex items-center gap-4">
<div className="">
<div className="font-medium text-lg text-[#E0D8C8]">Mikel Torres</div>
<div className="text-xs uppercase tracking-wider opacity-60">Jubilado, 68 años</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 md:px-12 max-w-[1600px] mx-auto border-b border-stone-200" id="faq">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<span className="text-xs text-stone-400 uppercase tracking-widest block mb-4">/ 06 Dudas</span>
<h2 className="text-4xl md:text-5xl tracking-tight text-stone-900 mb-12 font-light">
                    Preguntas Frecuentes
                </h2>
<div className="mb-12">
<div className="flex justify-between items-end mb-2">
<span className="text-[10px] uppercase font-bold text-stone-400">Cupo Clase Matutina</span>
<span className="text-[10px] font-bold text-stone-400">95% Lleno</span>
</div>
<div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-[#4A4E46] w-[95%] h-full"></div>
</div>
</div>
<button className="bg-stone-900 text-white pl-6 pr-2 py-3 rounded-full flex items-center gap-4 hover:bg-stone-800 transition w-full md:w-auto justify-between md:justify-start" onclick="document.getElementById('footer').scrollIntoView({behavior: 'smooth'})">
<span className="text-sm font-medium">Contactar Escuela</span>
<div className="bg-white text-black rounded-full p-1.5">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</button>
</div>
<div className="lg:col-span-8 space-y-6">

<div className="border-b border-stone-200 pb-6 faq-item">
<div className="flex justify-between items-center cursor-pointer group toggle-faq">
<h3 className="text-xl text-stone-500 group-hover:text-stone-900 transition font-light">¿Necesito experiencia previa o flexibilidad?</h3>
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:border-stone-900 group-hover:text-stone-900 transition icon-container">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</div>
</div>
<div className="faq-content text-stone-400 text-sm leading-relaxed max-w-2xl mt-4">
<p>No, en absoluto. Nuestras clases están diseñadas para todos los niveles y edades. La flexibilidad es una consecuencia de la práctica, no un requisito previo. Cada estudiante avanza a su propio ritmo.</p>
</div>
</div>

<div className="border-b border-stone-200 pb-6 faq-item">
<div className="flex justify-between items-center cursor-pointer group toggle-faq">
<h3 className="text-xl text-stone-500 group-hover:text-stone-900 transition font-light">¿Cómo es una clase de prueba?</h3>
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:border-stone-900 group-hover:text-stone-900 transition icon-container">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</div>
</div>
<div className="faq-content text-stone-400 text-sm leading-relaxed max-w-2xl mt-4">
<p>Dura 60 minutos. Comenzamos con calentamiento articular (Qigong), seguimos con pasos básicos y finalizamos con una meditación breve. Ropa cómoda es todo lo que necesitas.</p>
</div>
</div>

<div className="border-b border-stone-200 pb-6 faq-item">
<div className="flex justify-between items-center cursor-pointer group toggle-faq">
<h3 className="text-xl text-stone-500 group-hover:text-stone-900 transition font-light">¿Hay límite de edad para practicar?</h3>
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:border-stone-900 group-hover:text-stone-900 transition icon-container">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</div>
</div>
<div className="faq-content text-stone-400 text-sm leading-relaxed max-w-2xl mt-4">
<p>El Tai Chi y Qigong son adecuados para todas las edades. Tenemos grupos específicos para tercera edad y grupos generales. Consulta nuestros horarios para ver qué clase se adapta mejor a ti.</p>
</div>
</div>

<div className="border-b border-stone-200 pb-6 faq-item">
<div className="flex justify-between items-center cursor-pointer group toggle-faq">
<h3 className="text-xl text-stone-500 group-hover:text-stone-900 transition font-light">¿Dónde están ubicados exactamente?</h3>
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:border-stone-900 group-hover:text-stone-900 transition icon-container">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</div>
</div>
<div className="faq-content text-stone-400 text-sm leading-relaxed max-w-2xl mt-4">
<p>Estamos en Alameda de Urquijo, en el barrio de Abando, muy cerca de la estación de Metro Moyua. Facilidad de acceso y zona tranquila.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#4A4E46] text-white px-6 py-24 md:px-12" id="footer">
<div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-24">
<div className="lg:col-span-1">
<h2 className="text-2xl tracking-tight mb-8 font-light">Equilibrio para vivir.</h2>
<button className="bg-[#E0D8C8] text-[#4A4E46] pl-6 pr-2 py-2 rounded-full flex items-center gap-4 hover:bg-white transition group">
<span className="text-sm font-medium">Inscribirse Ahora</span>
<div className="bg-[#4A4E46] text-[#E0D8C8] rounded-full p-1.5 group-hover:rotate-45 transition duration-300">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</button>
</div>
<div className="grid grid-cols-2 lg:col-span-3 gap-8 text-[10px] uppercase tracking-widest text-[#E0D8C8]/60">
<div className="space-y-8">
<div className="">
<span className="block mb-4 text-[#E0D8C8]">Horario Centro</span>
<div className="text-white normal-case text-sm font-light">08:00 AM - 09:30 PM</div>
</div>
<div>
<span className="block mb-4 text-[#E0D8C8]">Contacto</span>
<div className="text-white normal-case text-sm font-light block">(+34) 944 123 456</div>
<div className="text-white normal-case text-sm font-light block">info@taobilbao.eus</div>
</div>
</div>
<div className="space-y-8">
<div>
<span className="block mb-4 text-[#E0D8C8]">Ubicación</span>
<div className="text-white normal-case text-sm font-light mb-4">
                            Alameda de Urquijo 14,<br/>48008 Bilbao (Abando)
                        </div>
</div>
<div className="pt-8">
<span className="block mb-4 text-[#E0D8C8]">Síguenos</span>
<div className="flex gap-2">
<a className="w-8 h-8 flex items-center justify-center rounded border border-[#E0D8C8]/20 text-white hover:bg-[#E0D8C8] hover:text-[#4A4E46] transition" href="#">
<iconify-icon icon="simple-icons:instagram"></iconify-icon>
</a>
<a className="w-8 h-8 flex items-center justify-center rounded border border-[#E0D8C8]/20 text-white hover:bg-[#E0D8C8] hover:text-[#4A4E46] transition" href="#">
<iconify-icon icon="simple-icons:facebook"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="max-w-[1600px] mx-auto mt-24 pt-8 border-t border-[#E0D8C8]/20 flex flex-col md:flex-row justify-between text-[10px] text-[#E0D8C8]/60 tracking-wider uppercase">
<div className="flex gap-6 mb-4 md:mb-0">
<a className="hover:text-white transition" href="#">Código Ético</a>
<a className="hover:text-white transition" href="#">Prensa</a>
</div>
<div className="flex gap-6">
<span>© 2024 Tao Center Bilbao.</span>
<a className="hover:text-white transition" href="#">Privacidad</a>
<a className="hover:text-white transition" href="#">Legal</a>
</div>
</div>
</footer>


    </>
  );
}
