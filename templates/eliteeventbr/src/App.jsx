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



        // Slideshow Logic
        const slides = document.querySelectorAll('.slide-image');
        const indicator = document.getElementById('slide-indicator');
        let currentSlide = 0;

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
            indicator.textContent = `0${currentSlide + 1} — 0${slides.length}`;
        }
        setInterval(nextSlide, 5000);

        // Accordion Logic
        function toggleAccordion(element) {
            const content = element.querySelector('.accordion-content');
            const icon = element.querySelector('.accordion-icon');
            const allContents = document.querySelectorAll('.accordion-content');
            
            // Close others
            allContents.forEach(el => {
                if (el !== content) el.classList.remove('open');
            });
            
            // Toggle current
            content.classList.toggle('open');
            
            // Icon rotation
            if(content.classList.contains('open')) {
                icon.style.transform = "rotate(45deg)";
            } else {
                icon.style.transform = "rotate(0deg)";
            }
        }

        // Initialize Observer for Fade Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-enter-active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.scroll-trigger').forEach(el => observer.observe(el));
    
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
      

<div className="bg-noise"></div>

<header className="fixed top-0 w-full z-40 backdrop-blur-sm border-b border-white/5 bg-[#050505]/80 px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-3 group cursor-pointer">

<div className="relative w-11 h-11 rounded bg-white flex items-center justify-center shrink-0 shadow-lg shadow-white/5 overflow-hidden">
<img alt="EliteEventBR" className="w-full h-full object-contain p-1" src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none'%3E%3Crect width='100' height='100' fill='white'/%3E%3Cpath d='M25 25 H65 L60 35 H35 V45 H55 L50 55 H35 V75 H25 V25 Z M65 25 H85 L65 75 H55 L70 35 H60 L65 25 Z' fill='%23C5A059'/%3E%3Ctext x='50' y='60' fontFamily='Arial, sans-serif' font-weight='bold' fontSize='40' fill='%23C5A059' text-anchor='middle' style={{display: 'none'}}%3EEV%3C/text%3E%3C/svg%3E"/>
</div>
<span className="font-semibold tracking-tight text-white text-sm uppercase group-hover:text-slate-200 transition-colors">EliteEventBR</span>
</div>
<a className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-all duration-300" href="mailto:eliteeventbr@gmail.com">
<iconify-icon icon="solar:letter-linear" style={{fontSize: '16px'}}></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wide">Get Quote</span>
</a>
</header>

<main className="grid grid-cols-1 lg:grid-cols-2 min-h-screen pt-20">

<div className="relative pt-12 pb-12 px-6 lg:px-12 flex flex-col border-r border-white/10 z-10 bg-[#050505]">
<div className="mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-slate-400 mb-6 uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Available for Booking
                </div>
<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                    Events managed <br/> <span className="text-slate-500">flawlessly.</span>
</h1>
<p className="text-lg text-slate-400 max-w-md leading-relaxed">
                    Cleaning, organizing, guest support, and bartending. We speak English, Portuguese, and Spanish.
                </p>
</div>
<div className="space-y-2 mt-auto">

<div className="group border-t border-white/10 py-6 cursor-pointer" onclick="toggleAccordion(this)">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-medium text-white tracking-tight group-hover:text-slate-300 transition-colors">
                            About Us
                        </h2>
<iconify-icon className="text-slate-500 transition-transform duration-300 group-hover:text-white accordion-icon" icon="solar:add-circle-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<div className="accordion-content open"> 
<div className="accordion-inner pt-6 text-slate-400 text-sm leading-relaxed max-w-lg">
<p className="mb-4">EliteEventBR — Multilingual Event Support You Can Trust</p>
<p className="mb-4">We are an experienced event‑services team with a strong history of successful events and highly satisfied clients. Our work includes cleaning, organizing, guest support, and full event assistance to ensure everything runs smoothly and without issues.</p>
<p className="mb-4">When needed, we also provide bartender services, giving you one reliable team for all your event needs.</p>
<p>We communicate fluently in Spanish, English, and Portuguese, making the entire process easy and stress‑free.</p>
</div>
</div>
</div>

<div className="group border-t border-white/10 py-6 cursor-pointer" onclick="toggleAccordion(this)">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-medium text-white tracking-tight group-hover:text-slate-300 transition-colors">
                            Sobre Nós
                        </h2>
<iconify-icon className="text-slate-500 transition-transform duration-300 group-hover:text-white accordion-icon" icon="solar:add-circle-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<div className="accordion-content">
<div className="accordion-inner pt-6 text-slate-400 text-sm leading-relaxed max-w-lg">
<p className="mb-4">EliteEventBR — Suporte Multilíngue para Eventos em que Você Pode Confiar</p>
<p className="mb-4">Somos uma equipe experiente em serviços para eventos, com um histórico sólido de trabalhos realizados e clientes extremamente satisfeitos. Atuamos na limpeza, organização, apoio aos convidados e assistência completa para garantir que o seu evento aconteça de forma tranquila e sem nenhum problema.</p>
<p className="mb-4">Quando necessário, também oferecemos serviço de bartender, proporcionando uma equipe única e confiável para todas as necessidades do seu evento.</p>
<p>Falamos fluentemente espanhol, inglês e português, facilitando toda a comunicação e tornando o processo muito mais simples.</p>
</div>
</div>
</div>

<div className="group border-t border-white/10 py-6 cursor-pointer" onclick="toggleAccordion(this)">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-medium text-white tracking-tight group-hover:text-slate-300 transition-colors">
                            Services
                        </h2>
<iconify-icon className="text-slate-500 transition-transform duration-300 group-hover:text-white accordion-icon" icon="solar:add-circle-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<div className="accordion-content">
<div className="accordion-inner pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 rounded bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
<iconify-icon className="text-white mb-2" icon="solar:wineglass-linear" style={{fontSize: '24px'}}></iconify-icon>
<h3 className="text-white font-medium text-sm mb-1">Bartender</h3>
<p className="text-xs text-slate-500">Professional drink service</p>
</div>
<div className="p-4 rounded bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
<iconify-icon className="text-white mb-2" icon="solar:broom-linear" style={{fontSize: '24px'}}></iconify-icon>
<h3 className="text-white font-medium text-sm mb-1">Cleaning</h3>
<p className="text-xs text-slate-500">Pre &amp; post event cleanup</p>
</div>
<div className="p-4 rounded bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
<iconify-icon className="text-white mb-2" icon="solar:users-group-rounded-linear" style={{fontSize: '24px'}}></iconify-icon>
<h3 className="text-white font-medium text-sm mb-1">Guest Support</h3>
<p className="text-xs text-slate-500">Crowd management &amp; help</p>
</div>
<div className="p-4 rounded bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
<iconify-icon className="text-white mb-2" icon="solar:clipboard-check-linear" style={{fontSize: '24px'}}></iconify-icon>
<h3 className="text-white font-medium text-sm mb-1">Organizing</h3>
<p className="text-xs text-slate-500">Smooth logistics execution</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative h-[50vh] lg:h-auto overflow-hidden bg-[#0a0a0a]">

<div className="absolute inset-0 w-full h-full" id="slideshow-container">


<img alt="Team preparing charcuterie" className="slide-image active opacity-80 mix-blend-normal" onerror="this.src='https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&amp;w=1000&amp;auto=format&amp;fit=crop'" src="assets/charcuterie-team.jpg"/>

<img alt="Event Organization" className="slide-image opacity-60 mix-blend-screen" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<img alt="Venue Setup" className="slide-image opacity-60 mix-blend-screen" src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90"></div>

<div className="absolute bottom-12 left-6 lg:left-12 z-20">
<div className="flex items-center gap-4 mb-4 text-white/50 text-xs uppercase tracking-widest font-mono">
<span id="slide-indicator">01 — 03</span>
</div>
<h2 className="text-4xl lg:text-6xl font-medium text-white tracking-tight max-w-sm leading-none">
                    Seamless<br/>Execution.
                </h2>
</div>
</div>
</main>

<section className="relative bg-[#080808] text-white py-24 border-t border-white/10 overflow-hidden">
<div className="px-6 lg:px-12 mb-12 flex items-end justify-between fade-enter scroll-trigger">
<div>
<p className="font-mono text-xs mb-3 text-slate-500 uppercase tracking-widest font-medium">Why Choose Us</p>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight leading-none">
                    Reliable.<br/>Professional.
                </h2>
</div>
<div className="hidden lg:flex gap-2 text-slate-500">
<iconify-icon icon="solar:arrow-left-linear" style={{fontSize: '24px'}}></iconify-icon>
<iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
</div>

<div className="flex overflow-x-auto gap-6 px-6 lg:px-12 pb-12 no-scrollbar snap-x snap-mandatory fade-enter scroll-trigger delay-100">

<div className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-pointer bg-[#0e0e0e] border border-white/5 p-1 rounded-lg">
<div className="aspect-[4/3] overflow-hidden relative rounded bg-black">

<img className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" onerror="this.src='https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&amp;w=1000&amp;auto=format&amp;fit=crop'" src="assets/charcuterie-team.jpg"/>
<div className="absolute top-4 left-4 backdrop-blur-md bg-black/50 border border-white/10 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wide rounded">Professional</div>
</div>
<div className="p-6">
<h3 className="text-2xl font-medium tracking-tight text-white">Event Support</h3>
<p className="text-slate-500 text-sm mt-2 leading-relaxed">From charcuterie preparation to event breakdown, we ensure the logistics of your event are handled with precision.</p>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-pointer bg-[#0e0e0e] border border-white/5 p-1 rounded-lg">
<div className="aspect-[4/3] overflow-hidden relative rounded bg-black">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 backdrop-blur-md bg-black/50 border border-white/10 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wide rounded">Service</div>
</div>
<div className="p-6">
<h3 className="text-2xl font-medium tracking-tight text-white">Bartender Services</h3>
<p className="text-slate-500 text-sm mt-2 leading-relaxed">Experienced staff to serve your guests with style. Cocktails, wine, and full bar service.</p>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-pointer bg-[#0e0e0e] border border-white/5 p-1 rounded-lg">
<div className="aspect-[4/3] overflow-hidden relative rounded bg-black">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-4 left-4 backdrop-blur-md bg-black/50 border border-white/10 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wide rounded">Quality</div>
</div>
<div className="p-6">
<h3 className="text-2xl font-medium tracking-tight text-white">Cleaning &amp; Organizing</h3>
<p className="text-slate-500 text-sm mt-2 leading-relaxed">Leave the mess to us. We maintain cleanliness throughout and after the event.</p>
</div>
</div>
</div>
</section>

<footer className="bg-black text-white pt-20 pb-12 px-6 lg:px-12 border-t border-white/10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 fade-enter scroll-trigger">
<div>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight leading-none mb-6">
                    Ready to plan<br/>your event?
                </h2>
<div className="flex flex-col sm:flex-row gap-4 mt-8">
<a className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wide hover:bg-slate-200 transition-colors duration-300" href="mailto:eliteeventbr@gmail.com">
                        Email Us
                     </a>
<a className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition-colors duration-300" href="https://instagram.com/eliteeventbr">
<iconify-icon icon="solar:camera-linear" style={{fontSize: '18px'}}></iconify-icon>
                        @EliteEventBR
                     </a>
</div>
</div>
<div className="flex flex-col justify-end md:items-end">
<div className="space-y-2 text-right">
<p className="text-white text-lg font-medium">EliteEventBR</p>
<p className="text-slate-500 text-sm">Serving your events with excellence.</p>
<a className="block text-slate-400 hover:text-white transition-colors text-sm" href="mailto:eliteeventbr@gmail.com">eliteeventbr@gmail.com</a>
<div className="flex gap-2 justify-end mt-4 text-xs font-mono text-slate-600 uppercase">
<span>EN</span>
<span>•</span>
<span>PT</span>
<span>•</span>
<span>ES</span>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-[10px] font-medium text-slate-600 uppercase tracking-widest">
<p>© 2024 EliteEventBR. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<span>Multilingual Support</span>
</div>
</div>
</footer>


    </>
  );
}
