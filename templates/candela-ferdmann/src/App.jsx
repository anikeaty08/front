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



        lucide.createIcons();
        
        // Language Toggle
        function toggleLanguage() {
            document.body.classList.toggle('english-mode');
        }

        // Accordion Toggle
        function toggleAccordion(element) {
            const item = element.parentElement;
            const content = item.querySelector('.accordion-content');
            
            // Close others (optional, remove if you want multiple open)
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        }

        // Cart Toggle
        function toggleCart() {
            const drawer = document.getElementById('cart-drawer');
            const overlay = document.getElementById('cart-overlay');
            const isOpen = drawer.classList.contains('open');
            
            if (isOpen) {
                drawer.classList.remove('open');
                overlay.classList.remove('open');
                document.body.style.overflow = '';
            } else {
                drawer.classList.add('open');
                overlay.classList.add('open');
                document.body.style.overflow = 'hidden';
            }
        }

        // Scroll Animation
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.masonry-item').forEach(item => {
                observer.observe(item);
            });
        });

        // Lightbox Logic
        let currentIndex = 0;
        const images = document.querySelectorAll('.gallery-img');
        const captions = document.querySelectorAll('.masonry-item p');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');

        function openLightbox(index) {
            currentIndex = index;
            updateLightboxImage();
            lightbox.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; 
        }

        function closeLightbox() {
            lightbox.classList.add('hidden');
            document.body.style.overflow = ''; 
        }

        function changeImage(direction) {
            currentIndex = (currentIndex + direction + images.length) % images.length;
            updateLightboxImage();
        }

        function updateLightboxImage() {
            lightboxImg.src = images[currentIndex].src.replace('&w=800', '&w=1600'); 
            const currentCaptionEl = captions[currentIndex];
            if(currentCaptionEl) {
                const isEnglish = document.body.classList.contains('english-mode');
                const text = isEnglish ? 
                    currentCaptionEl.querySelector('.lang-en')?.innerText : 
                    currentCaptionEl.querySelector('.lang-es')?.innerText;
                lightboxCaption.innerText = text || "";
            }
        }

        document.addEventListener('keydown', (e) => {
            if (lightbox.classList.contains('hidden')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') changeImage(-1);
            if (e.key === 'ArrowRight') changeImage(1);
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
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
      

<nav className="fixed transition-all duration-300 z-40 bg-[#fcfbf9]/95 border-stone-100 border-b pt-6 pb-6 top-0 right-0 left-0 backdrop-blur-sm">
<div className="md:px-12 flex max-w-[1800px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="group z-50" href="#">
<h1 className="text-lg tracking-tight font-semibold text-stone-900 uppercase">
                    Candela Ferdmann
                </h1>
</a>

<div className="hidden md:flex text-[11px] uppercase font-semibold text-stone-500 tracking-[0.2em] space-x-8 items-center">
<a className="hover:text-stone-900 transition-colors" href="#about">
<span className="lang-es">Bio</span><span className="lang-en">Bio</span>
</a>
<a className="hover:text-stone-900 transition-colors" href="#mentorship">
<span className="lang-es">Mentorías</span><span className="lang-en">Mentorships</span>
</a>
<a className="hover:text-stone-900 transition-colors" href="#workshops">
<span className="lang-es">Talleres</span><span className="lang-en">Workshops</span>
</a>
<a className="hover:text-stone-900 transition-colors" href="#faq">
<span className="lang-es">FAQ</span><span className="lang-en">FAQ</span>
</a>
<a className="hover:text-stone-900 transition-colors" href="#contact">
<span className="lang-es">Contacto</span><span className="lang-en">Contact</span>
</a>
</div>

<div className="flex items-center gap-6 z-50">

<div className="flex items-center gap-3 cursor-pointer select-none group" onclick="toggleLanguage()">
<span className="text-[10px] font-bold text-stone-400 group-hover:text-stone-600 transition-colors tracking-wider">ES</span>
<div className="transition-colors duration-300 group-hover:bg-stone-300 bg-stone-200 w-8 h-4 rounded-full relative shadow-inner">
<div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-transform duration-300" id="toggle-dot"></div>
</div>
<span className="text-[10px] group-hover:text-stone-600 transition-colors font-bold text-stone-400 tracking-wider">EN</span>
</div>

<button className="relative text-stone-800 hover:text-rose-500 transition-colors group" onclick="toggleCart()">
<svg className="lucide lucide-shopping-bag w-5 h-5 stroke-[1.5]" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[9px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">2</span>
</button>

<button className="md:hidden text-stone-800 hover:text-stone-500 transition-colors" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg className="lucide lucide-menu w-6 h-6 stroke-[1.5]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="hidden md:hidden absolute top-full left-0 w-full bg-[#fcfbf9] border-t border-stone-100 p-6 flex flex-col space-y-6 text-center text-sm font-medium shadow-lg h-screen" id="mobile-menu">
<a className="text-stone-600 hover:text-stone-900" href="#work"><span className="lang-es">Trabajos</span><span className="lang-en">Work</span></a>
<a className="text-stone-600 hover:text-stone-900" href="#about"><span className="lang-es">Bio</span><span className="lang-en">Bio</span></a>
<a className="text-stone-600 hover:text-stone-900" href="#mentorship"><span className="lang-es">Mentorías</span><span className="lang-en">Mentorships</span></a>
<a className="text-stone-600 hover:text-stone-900" href="#workshops"><span className="lang-es">Cursos</span><span className="lang-en">Workshops</span></a>
<a className="text-stone-600 hover:text-stone-900" href="#contact"><span className="lang-es">Contacto</span><span className="lang-en">Contact</span></a>
</div>
</nav>

<div className="fixed inset-0 bg-stone-900/20 backdrop-blur-[2px] z-50" id="cart-overlay" onclick="toggleCart()"></div>

<aside className="fixed top-0 right-0 h-screen w-full sm:w-[400px] bg-white z-[60] shadow-2xl transform translate-x-full border-l border-stone-100 flex flex-col" id="cart-drawer">

<div className="p-6 border-b border-stone-100 flex justify-between items-center bg-[#fcfbf9]">
<h2 className="text-xs uppercase font-bold tracking-[0.2em] text-stone-900">
<span className="lang-es">Tu Carrito (2)</span><span className="lang-en">Your Cart (2)</span>
</h2>
<button className="text-stone-400 hover:text-stone-900 transition-colors" onclick="toggleCart()">
<svg className="lucide lucide-x w-5 h-5 stroke-[1.5]" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6">

<div className="flex gap-4">
<div className="w-20 h-24 bg-stone-100 rounded-[2px] overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b37780e0-ff81-4a8b-8077-b72e76cc6f6b_800w.png"/>
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<h3 className="text-sm font-semibold text-stone-900 font-serif leading-tight mb-1">Workshop Collage Digital</h3>
<p className="text-xs text-stone-500">Online • Ago 2024</p>
</div>
<div className="flex justify-between items-end">
<span className="text-xs font-medium underline text-stone-400 cursor-pointer hover:text-stone-900">Eliminar</span>
<span className="text-sm font-bold text-stone-900">$45.00</span>
</div>
</div>
</div>

<div className="flex gap-4">
<div className="w-20 h-24 bg-stone-100 rounded-[2px] overflow-hidden flex-shrink-0">
<div className="w-full h-full flex items-center justify-center bg-[#f2f0eb]">
<svg className="lucide lucide-sparkles w-6 h-6 text-stone-400 stroke-[1]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<h3 className="text-sm font-semibold text-stone-900 font-serif leading-tight mb-1">Mentoría 1:1 (Sesión)</h3>
<p className="text-xs text-stone-500">1 Hora • Zoom</p>
</div>
<div className="flex justify-between items-end">
<span className="text-xs font-medium underline text-stone-400 cursor-pointer hover:text-stone-900">Eliminar</span>
<span className="text-sm font-bold text-stone-900">$60.00</span>
</div>
</div>
</div>
</div>

<div className="p-6 border-t border-stone-100 bg-[#fcfbf9]">
<div className="flex justify-between items-center mb-6">
<span className="text-xs uppercase font-bold tracking-widest text-stone-500">Subtotal</span>
<span className="text-lg font-bold text-stone-900 serif-title">$105.00</span>
</div>
<button className="w-full bg-stone-900 hover:bg-stone-800 text-white py-4 rounded-[2px] transition-colors flex items-center justify-center gap-2 group">
<span className="text-[11px] font-bold tracking-[0.15em] uppercase"><span className="lang-es">Checkout</span><span className="lang-en">Checkout</span></span>
<svg className="lucide lucide-arrow-right w-4 h-4 stroke-[1.5] group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</aside>

<main className="min-h-screen md:px-12 md:pb-12 max-w-[1800px] mr-auto ml-auto pt-32 pr-6 pb-24 pl-6" id="work">
<div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 gap-x-4 gap-y-4">

<div className="masonry-item group relative w-full inline-block visible">
<div className="relative overflow-hidden rounded-[2px] cursor-zoom-in aspect-[3/4]" onclick="openLightbox(0)">
<img alt="Illustration" className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out gallery-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f10382e-4629-4edb-a416-d79f0dcb9479_800w.png"/>
</div>
<div className="mt-2 flex justify-between items-baseline pb-2 transition-all">
<p className="text-[11px] text-stone-900 font-bold uppercase tracking-wide">
<span className="lang-es">Proyecto personal — Collage digital</span>
<span className="lang-en">Bologna 2016 — Collage</span>
</p>
</div>
</div>
<div className="masonry-item group relative w-full inline-block visible">
<div className="relative overflow-hidden rounded-[2px] cursor-zoom-in aspect-square" onclick="openLightbox(1)">
<img alt="Illustration" className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out gallery-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b37780e0-ff81-4a8b-8077-b72e76cc6f6b_800w.png"/>
</div>
<div className="mt-2 flex justify-between items-baseline pb-2 transition-all">
<p className="text-[11px] text-stone-900 font-bold uppercase tracking-wide">
<span className="lang-es">Proyecto personal  — tecnica mixta</span>
<span className="lang-en">Forest — Indian Ink</span>
</p>
</div>
</div>
<div className="masonry-item group relative w-full inline-block visible">
<div className="relative overflow-hidden rounded-[2px] cursor-zoom-in aspect-[2/3]" onclick="openLightbox(2)">
<img alt="Illustration" className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out gallery-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/89555010-dbb4-444b-912e-6a1a876f8172_800w.png"/>
</div>
<div className="mt-2 flex justify-between items-baseline pb-2 transition-all">
<p className="text-[11px] text-stone-900 font-bold uppercase tracking-wide">
<span className="lang-es">Ilustración personailzada — técnica mixta</span>
<span className="lang-en">Memories — Mixed Media</span>
</p>
</div>
</div>
<div className="masonry-item group relative w-full inline-block visible">
<div className="relative overflow-hidden rounded-[2px] cursor-zoom-in aspect-[4/3]" onclick="openLightbox(3)">
<img alt="Illustration" className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out gallery-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1bc4c81d-bed4-4e20-b320-906bb4e55387_800w.png"/>
</div>
<div className="mt-2 flex justify-between items-baseline pb-2 transition-all">
<p className="text-[11px] text-stone-900 font-bold uppercase tracking-wide">
<span className="lang-es">Silent Book — Digital</span>
<span className="lang-en">Silent Book — Digital</span>
</p>
</div>
</div>
<div className="masonry-item group relative w-full inline-block visible">
<div className="relative overflow-hidden rounded-[2px] cursor-zoom-in aspect-[3/4]" onclick="openLightbox(4)">
<img alt="Illustration" className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out gallery-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/931ec52d-5488-46b5-b3dd-5d041329a55f_800w.jpg"/>
</div>
<div className="mt-2 flex justify-between items-baseline pb-2 transition-all">
<p className="text-[11px] text-stone-900 font-bold uppercase tracking-wide">
<span className="lang-es" style={{}}>Bombo — collage</span>
<span className="lang-en">Birds — Watercolor</span>
</p>
</div>
</div>
<div className="masonry-item group relative w-full inline-block visible">
<div className="relative overflow-hidden rounded-[2px] cursor-zoom-in aspect-square" onclick="openLightbox(5)">
<img alt="Illustration" className="grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out gallery-img w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/445cfc31-e2ca-4bdf-b0fb-4a2c3f2a047b_800w.png"/>
</div>
<div className="flex transition-all mt-2 pb-2 items-baseline justify-between">
<p className="text-[11px] text-stone-900 font-bold uppercase tracking-wide">
<span className="lang-es">Ilustración personailzada — técnica mixta</span>
<span className="lang-en">Winter — Collage</span>
</p>
</div>
</div>
<div className="masonry-item group relative w-full inline-block visible">
<div className="relative overflow-hidden rounded-[2px] cursor-zoom-in aspect-[3/5]" onclick="openLightbox(6)">
<img alt="Illustration" className="grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out gallery-img w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bda59e4d-a1db-4d7f-be1f-1c0b1bc23c1a_800w.png"/>
</div>
<div className="flex transition-all mt-2 pb-2 items-baseline justify-between">
<p className="text-[11px] text-stone-900 font-bold uppercase tracking-wide">
<span className="lang-es">Proyecto personal — Collage digital</span>
<span className="lang-en">Botanicals — Pencil</span>
</p>
</div>
</div>
<div className="masonry-item group relative w-full inline-block visible">
<div className="relative overflow-hidden rounded-[2px] cursor-zoom-in aspect-[4/3]" onclick="openLightbox(7)">
<img alt="Illustration" className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out gallery-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/912ef7b6-0adb-4a42-b4c7-470a2ff6afa6_800w.png"/>
</div>
<div className="mt-2 flex justify-between items-baseline pb-2 transition-all">
<p className="text-[11px] text-stone-900 font-bold uppercase tracking-wide">
<span className="lang-es">Proyecto personal — Técnica mixta</span>
<span className="lang-en">Editorial — Digital</span>
</p>
</div>
</div>
<div className="masonry-item group relative w-full inline-block visible">
<div className="relative overflow-hidden rounded-[2px] cursor-zoom-in aspect-square" onclick="openLightbox(8)">
<img alt="Illustration" className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out gallery-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cdf688da-6892-407f-95d0-1d1664f7e371_800w.png"/>
</div>
<div className="mt-2 flex justify-between items-baseline pb-2 transition-all">
<p className="text-[11px] text-stone-900 font-bold uppercase tracking-wide">
<span className="lang-es">Proyecto personal — collage</span>
<span className="lang-en">Characters — Sketch</span>
</p>
</div>
</div>
<div className="masonry-item group relative w-full inline-block visible">
<div className="relative overflow-hidden rounded-[2px] cursor-zoom-in aspect-[3/4]" onclick="openLightbox(9)">
<img alt="Illustration" className="grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out gallery-img w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/27fee490-8611-4f5c-af99-11f700381bb1_800w.png"/>
</div>
<div className="mt-2 flex justify-between items-baseline pb-2 transition-all">
<p className="text-[11px] text-stone-900 font-bold uppercase tracking-wide">
<span className="lang-es">bologna 2016 — tecnica mixta</span>
<span className="lang-en">Nocturne — Ink</span>
</p>
</div>
</div>
<div className="masonry-item group relative w-full inline-block visible">
<div className="relative overflow-hidden rounded-[2px] cursor-zoom-in aspect-[16/9]" onclick="openLightbox(10)">
<img alt="Illustration" className="grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out gallery-img w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1bc4c81d-bed4-4e20-b320-906bb4e55387_800w.png"/>
</div>
<div className="flex transition-all mt-2 pb-2 items-baseline justify-between">
<p className="text-[11px] text-stone-900 font-bold uppercase tracking-wide">
<span className="lang-es">Proyecto personal — tecnica mixta</span>
<span className="lang-en">Landscape — Digital</span>
</p>
</div>
</div>
<div className="masonry-item group relative w-full inline-block visible">
<div className="relative overflow-hidden rounded-[2px] cursor-zoom-in aspect-[2/3]" onclick="openLightbox(11)">
<img alt="Illustration" className="grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out gallery-img w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ae8f893-d365-47b4-b09f-4142f740f1dc_800w.jpg"/>
</div>
<div className="mt-2 flex justify-between items-baseline pb-2 transition-all">
<p className="text-[11px] text-stone-900 font-bold uppercase tracking-wide">
<span className="lang-es">bombo — ilustración de libro infantil</span>
<span className="lang-en">Portrait — Painted Photo</span>
</p>
</div>
</div>
</div>
</main>

<section className="bg-white border-stone-100 border-t pt-20 pb-20" id="about">
<div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
<h3 className="uppercase text-xs font-bold text-stone-400 tracking-[0.2em] text-center mb-16">
<span className="lang-es">Sobre Mí</span><span className="lang-en">About Me</span>
</h3>
<div className="flex flex-col md:flex-row items-start gap-12 md:gap-24">

<div className="w-full md:w-5/12 sticky top-24">
<div className="aspect-[3/4] bg-stone-100 rounded-[2px] overflow-hidden relative group">
<img alt="Candela Ferdmann" className="transition-all hover:grayscale-0 duration-700 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5a585a85-95c5-4651-8438-6cb5386b996f_800w.png"/>
</div>
</div>

<div className="md:w-7/12 w-full pt-4">
<div className="text-base md:text-lg font-light text-stone-700 leading-relaxed space-y-6">
<div className="lang-es space-y-6">
<h2 className="text-3xl font-normal text-stone-900 mb-6 serif-title tracking-tight">Hola, soy Candela.</h2>
<p className="text-stone-600">Soy Licenciada en Artes Visuales e Ilustradora en Buenos Aires. Mi trabajo explora la sutil relación entre la naturaleza, la infancia y la memoria, utilizando técnicas mixtas y digitales.</p>
<p className="text-stone-600">Además de mi trabajo editorial, me apasiona la enseñanza. , buscando desbloquear la creatividad a través del juego y la experimentación.</p>
<p className="text-stone-600">Si buscás potenciar tu carrera artística o querés aprender una nueva técnica, te invito a charlar.</p>
</div>
<div className="lang-en space-y-6">
<h2 className="text-3xl font-normal text-stone-900 mb-6 serif-title tracking-tight">Hi, I'm Candela.</h2>
<p className="text-stone-600">I am a Visual Arts graduate and Illustrator based in Buenos Aires. My work explores the subtle relationship between nature, childhood, and memory, using both mixed media and digital techniques.</p>
<p className="text-stone-600">Beyond editorial work, I am passionate about teaching. , aiming to unlock creativity through play and experimentation.</p>
<p className="text-stone-600">Whether you want to boost your artistic career or learn a new technique, I invite you to connect.</p>
</div>
</div>

<div className="mt-12 flex flex-col sm:flex-row gap-5">
<a className="flex items-center justify-center gap-3 px-8 py-3.5 bg-stone-900 hover:bg-stone-700 text-white rounded-[2px] transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 group" href="https://calendly.com" target="_blank">
<svg className="lucide lucide-calendar-check w-4 h-4 stroke-[1.5] text-stone-300 group-hover:text-white transition-colors" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
<span className="text-[11px] font-bold tracking-widest uppercase"><span className="lang-es">Reservar Charla</span><span className="lang-en">Book a Call</span></span>
</a>
<a className="flex items-center justify-center gap-3 px-8 py-3.5 bg-white border border-stone-200 hover:border-stone-400 text-stone-900 rounded-[2px] transition-all duration-300 hover:bg-stone-50 group" href="https://instagram.com" target="_blank">
<svg className="lucide lucide-instagram w-4 h-4 stroke-[1.5] text-stone-400 group-hover:text-rose-500 transition-colors" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<span className="text-[11px] font-bold tracking-widest uppercase"><span className="lang-es">Seguir en Instagram</span><span className="lang-en">Follow on Instagram</span></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#f2f0eb] pt-20 pb-20 border-y border-stone-200/50" id="mentorship">
<div className="max-w-4xl mx-auto px-6 md:px-12 text-center w-full">
<div className="inline-flex items-center justify-center p-3 mb-6 bg-white rounded-full shadow-sm">
<svg className="lucide lucide-sparkles w-5 h-5 text-yellow-600 stroke-[1.5]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h2 className="text-2xl md:text-3xl font-medium text-stone-900 mb-6 serif-title tracking-tight">
<span className="lang-es">Mentorías 1:1 para Ilustradores</span>
<span className="lang-en">1:1 Mentorships for Illustrators</span>
</h2>
<p className="text-stone-600 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
<span className="lang-es">Un espacio personalizado para aprender sobre el oficio, contestar dudas y aprender lo que necesites para tu carrera. Revisamos tu portfolio, desbloqueamos procesos creativos o preparamos tu próximo proyecto editorial.</span>
<span className="lang-en">A personalized space to learn about the trade, answer questions, and learn whatever you need for your career. We review your portfolio, unlock creative processes, or prepare your next editorial project.</span>
</p>
<a className="inline-flex items-center gap-2 text-stone-900 border-b border-stone-800 pb-1 hover:text-stone-600 hover:border-stone-400 transition-all" href="https://calendly.com">
<span className="text-xs font-bold uppercase tracking-[0.15em]"><span className="lang-es">Ver horarios disponibles</span><span className="lang-en">Check available times</span></span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

<section className="bg-[#fcfbf9] pt-20 pb-20" id="workshops">
<div className="md:px-12 max-w-[1800px] mr-auto ml-auto pr-6 pl-6 w-full">
<h3 className="text-xs tracking-[0.2em] font-bold text-stone-400 uppercase mb-16 text-center">
<span className="lang-es">Cursos &amp; Talleres</span><span className="lang-en">Workshops</span>
</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-500 bg-white border border-stone-100 rounded-[2px] p-8 flex flex-col justify-between h-full">
<div className="absolute top-4 right-4 bg-rose-50 text-rose-600 px-2 py-1 rounded-[2px] border border-rose-100">
<span className="text-[9px] font-bold uppercase tracking-wider block">
<span className="lang-es">2 Lugares</span><span className="lang-en">2 Spots</span>
</span>
</div>
<div>
<div className="mb-6 text-stone-400 group-hover:text-rose-400 transition-colors">
<svg className="lucide lucide-flower w-8 h-8 stroke-[1]" data-lucide="flower" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"></path><path d="M12 7.5V9"></path><path d="M7.5 12H9"></path><path d="M16.5 12H15"></path><path d="M12 16.5V15"></path><path d="m8 8 1.88 1.88"></path><path d="M14.12 9.88 16 8"></path><path d="m8 16 1.88-1.88"></path><path d="M14.12 14.12 16 16"></path></svg>
</div>
<span className="text-[10px] uppercase block font-bold text-stone-400 tracking-widest mb-3">Online</span>
<h4 className="text-lg font-medium text-stone-900 mb-3 serif-title tracking-tight">
<span className="lang-es">Collage digital</span><span className="lang-en">Digital Collage</span>
</h4>
<p className="leading-relaxed text-sm text-stone-600 mb-6 font-light">
<span className="lang-es">Idear, escanear, recortar y jugar. Nivel inicial.</span>
<span className="lang-en">Ideate, scann, cut and play. Beginner level.</span>
</p>
</div>
<button className="text-left inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-stone-900 opacity-60 group-hover:opacity-100 transition-all">
<span className="lang-es">Agregar al carrito</span><span className="lang-en">Add to cart</span> <svg className="lucide lucide-plus w-3 h-3 ml-2" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>

<div className="group relative hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-500 bg-white border border-stone-100 rounded-[2px] p-8 flex flex-col justify-between h-full">
<div>
<div className="mb-6 text-stone-400 group-hover:text-amber-400 transition-colors">
<svg className="lucide lucide-scissors w-8 h-8 stroke-[1]" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</div>
<span className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-3 block">Buenos Aires</span>
<h4 className="text-lg font-medium text-stone-900 mb-3 serif-title tracking-tight">
<span className="lang-es">Collage &amp; Papel</span><span className="lang-en">Collage &amp; Paper</span>
</h4>
<p className="leading-relaxed text-sm text-stone-600 mb-6 font-light">
<span className="lang-es">Exploración de texturas, recorte y composición manual.</span>
<span className="lang-en">Exploration of textures, cutting and manual composition.</span>
</p>
</div>
<button className="text-left inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-stone-900 opacity-60 group-hover:opacity-100 transition-all">
<span className="lang-es">Agregar al carrito</span><span className="lang-en">Add to cart</span> <svg className="lucide lucide-plus w-3 h-3 ml-2" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>

<div className="group relative hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-500 bg-white border border-stone-100 rounded-[2px] p-8 flex flex-col justify-between h-full">
<div className="absolute top-4 right-4 bg-emerald-50 text-emerald-600 px-2 py-1 rounded-[2px] border border-emerald-100">
<span className="text-[9px] font-bold uppercase tracking-wider block">
<span className="lang-es">5 Cupos</span><span className="lang-en">5 Seats</span>
</span>
</div>
<div>
<div className="group-hover:text-emerald-400 transition-colors text-stone-400 mb-6">
<svg className="lucide lucide-pencil w-8 h-8 stroke-[1]" data-lucide="pencil" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
</div>
<span className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-3 block">Online</span>
<h4 className="text-lg font-medium text-stone-900 mb-3 serif-title tracking-tight">
<span className="lang-es">Ilustración de Libros</span><span className="lang-en">Book Illustration</span>
</h4>
<p className="leading-relaxed text-sm text-stone-600 mb-6 font-light">
<span className="lang-es">Del texto a la imagen. Desarrollo de personajes y narrativa.</span>
<span className="lang-en">From text to image. Character development and narrative.</span>
</p>
</div>
<button className="text-left inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-stone-900 opacity-60 group-hover:opacity-100 transition-all">
<span className="lang-es">Agregar al carrito</span><span className="lang-en">Add to cart</span> <svg className="lucide lucide-plus w-3 h-3 ml-2" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>

<div className="group relative hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-500 bg-white border border-stone-100 rounded-[2px] p-8 flex flex-col justify-between h-full">
<div>
<div className="mb-6 text-stone-400 group-hover:text-blue-400 transition-colors">
<svg className="lucide lucide-palette w-8 h-8 stroke-[1]" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<span className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-3 block">Workshop</span>
<h4 className="text-lg font-medium text-stone-900 mb-3 serif-title tracking-tight">
<span className="lang-es">Teoría del Color</span><span className="lang-en">Color Theory</span>
</h4>
<p className="leading-relaxed text-sm text-stone-600 mb-6 font-light">
<span className="lang-es">Paletas limitadas y expresión a través del color.</span>
<span className="lang-en">Limited palettes and expression through color.</span>
</p>
</div>
<button className="text-left inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-stone-900 opacity-60 group-hover:opacity-100 transition-all">
<span className="lang-es">Agregar al carrito</span><span className="lang-en">Add to cart</span> <svg className="lucide lucide-plus w-3 h-3 ml-2" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
</section>

<section className="bg-stone-50 border-t border-stone-200 py-20" id="faq">
<div className="max-w-2xl mx-auto px-6">
<h3 className="text-xs tracking-[0.2em] font-bold text-stone-400 uppercase mb-12 text-center">
<span className="lang-es">Preguntas Frecuentes</span><span className="lang-en">FAQ</span>
</h3>
<div className="space-y-0 border-t border-stone-200">

<div className="accordion-item group border-b border-stone-200">
<button className="w-full py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<h4 className="text-base font-medium text-stone-900">
<span className="lang-es">¿Cómo funcionan las mentorías?</span>
<span className="lang-en">How do mentorships work?</span>
</h4>
<div className="accordion-icon text-stone-400 group-hover:text-stone-900 transition-all duration-300">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</button>
<div className="accordion-content">
<div className="pb-6 text-sm text-stone-600 font-light leading-relaxed">
<span className="lang-es">La primera llamada es de 30 minutos y es <strong>sin costo</strong> para conocernos y evaluar tus necesidades. Después trabajamos con encuentros semanales o quincenales según tu proyecto.</span>
<span className="lang-en">The first call is 30 minutes long and is <strong>free of charge</strong> to meet and assess your needs. Afterwards, we work with weekly or bi-weekly meetings depending on your project.</span>
</div>
</div>
</div>

<div className="accordion-item group border-b border-stone-200">
<button className="w-full py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<h4 className="text-base font-medium text-stone-900">
<span className="lang-es">¿Los talleres online quedan grabados?</span>
<span className="lang-en">Are online workshops recorded?</span>
</h4>
<div className="accordion-icon text-stone-400 group-hover:text-stone-900 transition-all duration-300">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</button>
<div className="accordion-content">
<div className="pb-6 text-sm text-stone-600 font-light leading-relaxed">
<span className="lang-es">Sí, todos los talleres online se graban y se envían al finalizar la sesión. Tenés acceso a la grabación por <strong>1 año</strong> para verla las veces que quieras y practicar a tu ritmo.</span>
<span className="lang-en">Yes, all online workshops are recorded and sent after the session ends. You have access to the recording for <strong>1 year</strong> to watch it as many times as you like and practice at your own pace.</span>
</div>
</div>
</div>

<div className="accordion-item group border-b border-stone-200">
<button className="w-full py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<h4 className="text-base font-medium text-stone-900">
<span className="lang-es">¿Qué medios de pago aceptan?</span>
<span className="lang-en">What payment methods do you accept?</span>
</h4>
<div className="accordion-icon text-stone-400 group-hover:text-stone-900 transition-all duration-300">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</button>
<div className="accordion-content">
<div className="pb-6 text-sm text-stone-600 font-light leading-relaxed">
<span className="lang-es">Desde Argentina aceptamos Mercado Pago y Transferencia Bancaria. Para alumnos internacionales utilizamos PayPal o Stripe. Los precios se convierten automáticamente al finalizar la compra.</span>
<span className="lang-en">From Argentina we accept Mercado Pago and Bank Transfer. For international students we use PayPal or Stripe. Prices are automatically converted at checkout.</span>
</div>
</div>
</div>

<div className="accordion-item group border-b border-stone-200">
<button className="w-full py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<h4 className="text-base font-medium text-stone-900">
<span className="lang-es">Soy principiante, ¿puedo anotarme?</span>
<span className="lang-en">I'm a beginner, can I join?</span>
</h4>
<div className="accordion-icon text-stone-400 group-hover:text-stone-900 transition-all duration-300">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</button>
<div className="accordion-content">
<div className="pb-6 text-sm text-stone-600 font-light leading-relaxed">
<span className="lang-es">¡Por supuesto! La mayoría de los cursos, especialmente "Collage Digital" y "Teoría del Color", están diseñados para empezar desde cero. No hace falta saber dibujar, solo ganas de experimentar.</span>
<span className="lang-en">Of course! Most courses, especially "Digital Collage" and "Color Theory", are designed to start from scratch. You don't need to know how to draw, just be willing to experiment.</span>
</div>
</div>
</div>

<div className="accordion-item group border-b border-stone-200">
<button className="w-full py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<h4 className="text-base font-medium text-stone-900">
<span className="lang-es">¿Entregan certificado?</span>
<span className="lang-en">Do you provide a certificate?</span>
</h4>
<div className="accordion-icon text-stone-400 group-hover:text-stone-900 transition-all duration-300">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</button>
<div className="accordion-content">
<div className="pb-6 text-sm text-stone-600 font-light leading-relaxed">
<span className="lang-es">Sí, al finalizar el curso y entregar el proyecto final, te enviamos un certificado digital de participación a tu correo electrónico.</span>
<span className="lang-en">Yes, upon completion of the course and submission of the final project, we will send a digital certificate of participation to your email.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-t border-stone-100 pt-20 pb-20" id="contact">
<div className="max-w-xl mx-auto px-6">
<h3 className="text-xs tracking-[0.2em] font-bold text-stone-400 uppercase mb-8 text-center">
<span className="lang-es">Contacto</span><span className="lang-en">Get in Touch</span>
</h3>
<p className="text-xl md:text-2xl font-normal text-stone-800 text-center mb-12 serif-title tracking-tight">
<span className="lang-es">¿Creamos algo juntos? <br/>Me encantaría escuchar tu propuesta.</span>
<span className="lang-en">Let's create something together. <br/>I'd love to hear your proposal.</span>
</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-[#fcfbf9] rounded-[2px] border border-stone-200 px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-800 focus:ring-0 focus:bg-white transition-all font-normal text-sm" placeholder="Nombre / Name" type="text"/>
<input className="w-full bg-[#fcfbf9] rounded-[2px] border border-stone-200 px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-800 focus:ring-0 focus:bg-white transition-all font-normal text-sm" placeholder="Email" type="email"/>
</div>
<textarea className="w-full bg-[#fcfbf9] rounded-[2px] border border-stone-200 px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-800 focus:ring-0 focus:bg-white transition-all font-normal text-sm resize-none" placeholder="Contame tu idea... / Tell me your idea..." rows="4"></textarea>
<div className="pt-4 text-center">
<button className="inline-block w-full px-12 py-4 bg-stone-900 hover:bg-stone-800 text-white rounded-[2px] transition-all duration-300" type="submit">
<span className="text-[11px] font-bold tracking-[0.15em] uppercase"><span className="lang-es">Enviar Mensaje</span><span className="lang-en">Send Message</span></span>
</button>
</div>
</form>
</div>
</section>

<footer className="text-stone-200 bg-[#1a1918] pt-16 pb-16 border-t border-stone-800">
<div className="max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-8">
<a className="hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest" href="https://instagram.com" target="_blank">Instagram</a>
<a className="hover:text-white transition-colors text-[10px] uppercase font-bold tracking-widest" href="mailto:candelaferdmann@gmail.com.ar">Email</a>
</div>
<p className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">© 2026 Candela Ferdmann</p>
</div>
</footer>

<div className="fixed inset-0 z-50 bg-[#1a1918]/95 backdrop-blur-sm hidden flex items-center justify-center p-4" id="lightbox">

<button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50" onclick="closeLightbox()">
<svg className="lucide lucide-x w-8 h-8 stroke-1" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>

<button className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors p-4 hidden md:block z-50" onclick="changeImage(-1)">
<svg className="lucide lucide-chevron-left w-10 h-10 stroke-1" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>

<div className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center">
<img alt="Full view" className="max-w-full max-h-[80vh] object-contain shadow-2xl rounded-sm" id="lightbox-img" src=""/>
<p className="text-stone-400 text-xs tracking-wider mt-4 font-light uppercase" id="lightbox-caption"></p>
</div>

<button className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors p-4 hidden md:block z-50" onclick="changeImage(1)">
<svg className="lucide lucide-chevron-right w-10 h-10 stroke-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>


    </>
  );
}
