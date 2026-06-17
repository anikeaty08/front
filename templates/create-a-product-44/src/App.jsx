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



            (function() {
                // Scope logic to this specific section using closest() to avoid global ID conflicts
                const section = document.currentScript.closest('section');
                if (!section) return;

                const slidesContainer = section.querySelector('[data-carousel-slides]');
                const indicatorsContainer = section.querySelector('[data-carousel-indicators]');
                
                if (!slidesContainer || !indicatorsContainer) return;

                const slides = slidesContainer.querySelectorAll('img');
                const dots = indicatorsContainer.querySelectorAll('button');
                const totalSlides = slides.length;
                let currentSlide = 0;
                let slideInterval;
                const intervalTime = 3500; // 3.5 seconds

                function showSlide(index) {
                    // Normalize index
                    if (index >= totalSlides) index = 0;
                    if (index < 0) index = totalSlides - 1;

                    // Update Images
                    slides.forEach((slide, i) => {
                        if (i === index) {
                            slide.classList.remove('opacity-0', 'z-0');
                            slide.classList.add('opacity-100', 'z-10');
                        } else {
                            slide.classList.remove('opacity-100', 'z-10');
                            slide.classList.add('opacity-0', 'z-0');
                        }
                    });

                    // Update Indicators
                    dots.forEach((dot, i) => {
                        if (i === index) {
                            dot.className = 'h-1.5 rounded-full transition-all duration-300 w-8 bg-white opacity-100 hover:bg-white/90 cursor-pointer';
                        } else {
                            dot.className = 'h-1.5 rounded-full transition-all duration-300 w-4 bg-white/40 hover:bg-white/80 cursor-pointer';
                        }
                    });

                    currentSlide = index;
                }

                function nextSlide() {
                    showSlide(currentSlide + 1);
                }

                function startCarousel() {
                    if (slideInterval) clearInterval(slideInterval);
                    slideInterval = setInterval(nextSlide, intervalTime);
                }

                function resetInterval() {
                    clearInterval(slideInterval);
                    startCarousel();
                }

                // Event Listeners for Dots
                dots.forEach((dot, index) => {
                    dot.addEventListener('click', (e) => {
                        e.preventDefault();
                        showSlide(index);
                        resetInterval();
                    });
                });

                // Initialize
                startCarousel();
            })();
        


        window.handleVariantUpdate = function(el, index) {
            const group = el.closest('.group');
            const images = group.querySelectorAll('.aspect-square img');
            
            images.forEach((img, i) => {
                if (i === index) {
                    img.classList.remove('opacity-0', 'z-0');
                    img.classList.add('opacity-100', 'z-10');
                } else {
                    img.classList.remove('opacity-100', 'z-10');
                    img.classList.add('opacity-0', 'z-0');
                }
            });

            const variants = el.parentElement.children;
            Array.from(variants).forEach(v => {
                v.classList.remove('ring-1', 'ring-offset-2', 'ring-slate-950');
                v.classList.add('ring-0', 'hover:ring-1', 'hover:ring-offset-2', 'hover:ring-neutral-300');
                v.removeAttribute('data-active');
            });
            
            el.classList.remove('ring-0', 'hover:ring-1', 'hover:ring-offset-2', 'hover:ring-neutral-300');
            el.classList.add('ring-1', 'ring-offset-2', 'ring-slate-950');
            el.setAttribute('data-active', 'true');
        };
        
        window.restoreVariantState = function(productContainer) {
            const activeVariant = productContainer.querySelector('[data-active="true"]');
            if (activeVariant) {
                const index = Array.from(activeVariant.parentElement.children).indexOf(activeVariant);
                const images = productContainer.querySelectorAll('.aspect-square img');
                images.forEach((img, i) => {
                    if (i === index) {
                        img.classList.remove('opacity-0', 'z-0');
                        img.classList.add('opacity-100', 'z-10');
                    } else {
                        img.classList.remove('opacity-100', 'z-10');
                        img.classList.add('opacity-0', 'z-0');
                    }
                });
            }
        };
    


(function() {
    try {
        const section = document.currentScript.closest('section');
        const container = section.querySelector('[data-scroll-container]');
        const prevBtn = section.querySelector('[data-scroll-prev]');
        const nextBtn = section.querySelector('[data-scroll-next]');
        
        if (!container || !prevBtn || !nextBtn) return;
        
        // Use card width (roughly 400px + gap) for scroll amount
        const scrollAmount = 424; 

        prevBtn.addEventListener('click', () => {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    } catch(e) {
        console.error('Scroll initialization failed', e);
    }
})();



    (function() {
        const section = document.querySelector('[data-element-id="aura-emjz6hxt8hfal6fk"]');
        if (!section) return;

        const container = section.querySelector('#reviews-container');
        const prevBtn = section.querySelector('#review-prev');
        const nextBtn = section.querySelector('#review-next');
        const progressBar = section.querySelector('#review-progress');
        
        // Scroll amount equal to card width + gap
        const scrollAmount = 384; 

        function updateProgress() {
            if (!container || !progressBar) return;
            // Calculate progress 0 to 1
            const maxScroll = container.scrollWidth - container.clientWidth;
            if (maxScroll <= 0) return;
            
            const percentage = container.scrollLeft / maxScroll;
            
            // The bar has a fixed width of 40%, so it can move from 0% to 60% left
            const maxLeft = 60; 
            const newLeft = percentage * maxLeft;
            
            progressBar.style.left = `${Math.min(maxLeft, Math.max(0, newLeft))}%`;
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
        }

        if (container) {
            container.addEventListener('scroll', () => {
                window.requestAnimationFrame(updateProgress);
            });
            // Initial update
            updateProgress();
            
            // Update on resize
            window.addEventListener('resize', updateProgress);
        }
    })();
    


        lucide.createIcons();
    
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
      

<div className="text-sm font-normal text-white text-center bg-[#1a3c34] pt-2.5 pr-4 pb-2.5 pl-4" style={{}}>
<p className="">Livraison gratuite dès 899 $ d'achat en ligne. <span className="underline decoration-1 underline-offset-2 cursor-pointer opacity-90 hover:opacity-100">Plus de détails ici*</span></p>
</div>

<header className="sticky top-0 z-50 bg-[#e8e4dc]/95 backdrop-blur-sm border-b border-[#dcd8d0]" style={{}}>
<div className="flex h-24 max-w-[1600px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="flex-shrink-0">
<a className="border border-black px-5 py-2 inline-block" href="#">
<span className="text-xl tracking-[0.2em] font-medium text-black uppercase">Lusine</span>
</a>
</div>

<nav className="hidden xl:flex items-center gap-8 text-[15px] font-normal">
<div className="group relative flex items-center gap-1 cursor-pointer">
<span className="">Pièces</span>
<svg className="lucide lucide-chevron-down w-3 h-3 opacity-60" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="group relative flex items-center gap-1 cursor-pointer">
<span className="">Assises</span>
<svg className="lucide lucide-chevron-down w-3 h-3 opacity-60" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="group relative flex items-center gap-1 cursor-pointer">
<span className="">Tables</span>
<svg className="lucide lucide-chevron-down w-3 h-3 opacity-60" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="group relative flex items-center gap-1 cursor-pointer">
<span className="">Lits</span>
<svg className="lucide lucide-chevron-down w-3 h-3 opacity-60" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="group relative flex items-center gap-1 cursor-pointer">
<span className="">Déco</span>
<svg className="lucide lucide-chevron-down w-3 h-3 opacity-60" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="group relative flex items-center gap-1 cursor-pointer text-[#a85f3f]">
<span className="">Soldes d'après Noël</span>
<svg className="lucide lucide-chevron-down w-3 h-3 opacity-60" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</nav>

<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-1 text-sm font-medium cursor-pointer">
                    FR <svg className="lucide lucide-chevron-down w-3 h-3 opacity-60" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<button className="p-1 hover:opacity-70 transition-opacity">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
<button className="p-1 hover:opacity-70 transition-opacity">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="p-1 hover:opacity-70 transition-opacity relative">
<svg className="lucide lucide-shopping-bag w-5 h-5" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute -top-1 -right-1 bg-[#1a3c34] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
</button>
<button className="xl:hidden p-1">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>


<section className="w-full relative">
<div className="aspect-[2/3] md:aspect-[3/2] lg:aspect-[16/6] overflow-hidden group bg-neutral-900 w-full relative">

<div className="w-full h-full absolute top-0 right-0 bottom-0 left-0" data-carousel-slides="">
<img alt="Delano Collection" className="transition-opacity duration-1000 ease-in-out w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fc1a2dc8-4cfa-4b65-958b-8e8c74efc6eb_3840w.jpg" style={{}}/>
<img alt="Modern Interior" className="transition-opacity duration-1000 ease-in-out w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/be12b233-5a94-46e1-b71b-9df6c54519d5_3840w.jpg"/>
<img alt="Cozy Living" className="transition-opacity duration-1000 ease-in-out w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e15a0f3-7f1a-4a39-bd51-2fe39c2f7e61_3840w.jpg"/>
<img alt="Minimalist Space" className="transition-opacity duration-1000 ease-in-out w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab31d7c2-e213-4d25-9979-fa4ed98210bc_3840w.jpg"/>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-20 pointer-events-none"></div>

<div className="z-30 flex flex-col md:p-16 pointer-events-none text-white pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-start justify-end">
<div className="pointer-events-auto transform transition-transform duration-700 max-w-md translate-y-0">
<h2 className="md:text-3xl text-3xl text-white tracking-tight font-serif mb-3 drop-shadow-md -translate-x-6 translate-y-8">Collection Delano</h2>
<p className="leading-relaxed md:text-base -translate-x-6 text-sm font-medium text-slate-100 opacity-90 mb-8 drop-shadow-sm translate-y-6">Un modulaire pensé pour évoluer avec votre quotidien</p>
<button className="uppercase hover:bg-white/90 transition-colors -translate-x-3 -translate-x-4 text-xs font-semibold text-[#1a1a1a] tracking-widest bg-white rounded-full pt-2 pr-2 pb-2 pl-2 -translate-x-6 translate-y-2">
                    Configurez le vôtre
                </button>
</div>
</div>

<div className="flex z-40 absolute right-8 bottom-8 translate-x-4 scale-90 gap-x-3 gap-y-3" data-carousel-indicators="">
<button aria-label="Slide 1" className="h-1.5 rounded-full transition-all duration-300 w-4 bg-white/40 hover:bg-white/80 cursor-pointer"></button>
<button aria-label="Slide 2" className="h-1.5 rounded-full transition-all duration-300 w-4 bg-white/40 hover:bg-white/80 cursor-pointer"></button>
<button aria-label="Slide 3" className="h-1.5 rounded-full transition-all duration-300 w-8 bg-white opacity-100 hover:bg-white/90 cursor-pointer"></button>
<button aria-label="Slide 4" className="h-1.5 rounded-full transition-all duration-300 w-4 bg-white/40 hover:bg-white/80 cursor-pointer"></button>
</div>


</div>
</section>

<section className="md:pb-12 md:pt-20 md:pl-10 md:pr-10 bg-slate-50 pt-6 pr-5 pb-6 pl-5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="space-y-8 order-last lg:order-first">
<h2 className="serif leading-[1.1] md:text-3xl text-2xl text-[#1a1a1a] tracking-tight font-serif -translate-y-12">La collection Delano</h2>
<p className="leading-relaxed md:text-lg text-base font-light text-neutral-600 max-w-xl -translate-y-16">La collection Delano est pensée pour accompagner la vraie vie, avec un confort enveloppant, une modularité intuitive et une grande liberté d’adaptation au quotidien. Chaque configuration s’intègre naturellement à votre espace et évolue avec vos besoins, pour créer un salon à la fois élégant, fonctionnel et durable.</p>
<button className="group flex uppercase hover:text-[#8a4a2f] transition-colors gap-2 text-sm font-medium text-[#a85f3f] tracking-wide border-[#a85f3f] border-b pb-1 -translate-y-16 gap-x-2 gap-y-2 items-center">
                Magasinez Delano
            </button>
</div>

<div className="aspect-[4/3] w-full relative group cursor-pointer bg-neutral-200 rounded-3xl overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-xl">

<img alt="Video cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 overflow-hidden rounded-3xl"><video autoplay="" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" loop="" muted="" playsinline="" src="https://khezjineirmnudkxmzxw.supabase.co/storage/v1/object/public/videos/0104(1).mp4"></video>
</div>
</div>
</div>
</section>

<section className="bg-white border-[#dcd8d0] border-t pt-0 pb-0 px-5 md:pl-10 md:pr-0 scale-100">
<div className="flex flex-col md:flex-row w-full mt-12 mb-10 gap-y-6 items-end justify-between">
<div className="w-full md:w-auto">
<p className="text-xs font-semibold text-neutral-500 tracking-widest uppercase mb-3">Choisissez votre configuration dès aujourd'hui</p>
<h3 className="serif md:text-6xl text-4xl text-slate-950 tracking-tight">Magasinez la collection Delano</h3>
</div>
<div className="hidden md:flex gap-3">
<button className="w-12 h-12 rounded-full bg-[#f4f1eb] hover:bg-[#e8e4dc] flex items-center justify-center transition-colors text-[#1a1a1a]" data-scroll-prev="">
<svg className="lucide lucide-chevron-left w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(26, 26, 26)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="hover:bg-[#e8e4dc] flex transition-colors text-[#1a1a1a] bg-[#f4f1eb] w-12 h-12 rounded-full items-center justify-center" data-scroll-next="">
<svg className="lucide lucide-chevron-right w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(26, 26, 26)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="grid grid-cols-2 gap-x-3 gap-y-10 w-full pb-6 md:flex md:overflow-x-auto md:no-scrollbar md:snap-x md:snap-mandatory md:pr-12 md:gap-x-6" data-scroll-container="">


<div className="w-full md:w-[400px] md:flex-shrink-0 md:snap-start group cursor-pointer" onmouseleave="restoreVariantState(this)">
<div className="aspect-square overflow-hidden bg-[#f6f5f3] rounded-3xl mb-4 relative"><img alt="Sectionnel Delano 4 sièges - Beige" className="transition-opacity duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de615810-2477-4b2a-a46f-bbb9871b0fc5_800w.png"/><img alt="Sectionnel Delano 4 sièges - Gris Foncé" className="transition-opacity duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a0e6b631-6f2b-4831-bfc9-da0b7c1aa0b4_800w.png"/><img alt="Sectionnel Delano 4 sièges - Brun" className="transition-opacity duration-500 group-hover:scale-105 w-full h-full object-cover bg-center absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67524c65-f0e1-4509-b6c9-f6573c56e3e9_800w.png"/><img alt="Sectionnel Delano 4 sièges - Gris Clair" className="transition-opacity duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/403fda00-0cd3-4262-99d1-abecb78ad1a4_1600w.png"/></div>
<div className="flex flex-col md:flex-row mb-3 items-start md:items-baseline md:justify-between gap-1 md:gap-0">
<h4 className="text-base font-medium text-slate-950">Sectionnel Delano 4 sièges</h4>
<p className="text-base font-light text-neutral-500">$1795</p>
</div>
<div className="flex translate-x-1 gap-x-2 gap-y-2"><div className="cursor-pointer transition-all bg-[#b6a593] w-6 h-6 border-neutral-200 border rounded" onclick="handleVariantUpdate(this, 0)" onmouseenter="handleVariantUpdate(this, 0)"></div><div className="cursor-pointer transition-all bg-[#63645e] w-6 h-6 border-neutral-200 border rounded" onclick="handleVariantUpdate(this, 1)" onmouseenter="handleVariantUpdate(this, 1)"></div><div className="cursor-pointer transition-all bg-[#78593d] w-6 h-6 border-neutral-200 border rounded" onclick="handleVariantUpdate(this, 2)" onmouseenter="handleVariantUpdate(this, 2)"></div><div className="cursor-pointer transition-all bg-[#bbbcb6] w-6 h-6 border-neutral-200 border rounded" data-active="true" onclick="handleVariantUpdate(this, 3)" onmouseenter="handleVariantUpdate(this, 3)"></div></div>
</div>

<div className="w-full md:w-[400px] md:flex-shrink-0 md:snap-start group cursor-pointer" onmouseleave="restoreVariantState(this)">
<div className="aspect-square bg-[#f6f5f3] rounded-3xl overflow-hidden relative mb-4"><div className="text-[10px] uppercase z-20 font-semibold text-neutral-600 tracking-wider bg-white rounded-sm pt-1 pr-3 pb-1 pl-3 absolute top-5 left-5 shadow-sm" style={{}}>Nouveau</div><img alt="Divan Delano 2 sièges - Beige" className="transition-opacity duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3dbfc928-8e5d-4a33-8aa1-fa71675a1470_800w.png"/><img alt="Divan Delano 2 sièges - Gris Foncé" className="transition-opacity duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4fc40d48-4d5e-4a0b-acdb-c2a8446764dd_800w.png"/><img alt="Divan Delano 2 sièges - Brun" className="transition-opacity duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6964ccd4-74b1-43cf-9e23-4b8b7b5714a4_800w.png"/><img alt="Divan Delano 2 sièges - Gris Clair" className="transition-opacity duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0426ab99-c948-40b3-a373-10ec8267647c_800w.png"/></div>
<div className="flex flex-col md:flex-row mb-3 items-start md:items-baseline md:justify-between gap-1 md:gap-0">
<h4 className="text-base font-medium text-slate-950">Divan Delano 2 sièges</h4>
<p className="text-base font-light text-neutral-500">$1300</p>
</div>
<div className="flex translate-x-1 gap-x-2 gap-y-2"><div className="cursor-pointer transition-all bg-[#b6a593] w-6 h-6 border-neutral-200 border rounded" onclick="handleVariantUpdate(this, 0)" onmouseenter="handleVariantUpdate(this, 0)"></div><div className="cursor-pointer transition-all bg-[#63645e] w-6 h-6 border-neutral-200 border rounded" onclick="handleVariantUpdate(this, 1)" onmouseenter="handleVariantUpdate(this, 1)"></div><div className="cursor-pointer transition-all bg-[#78593d] w-6 h-6 border-neutral-200 border rounded" onclick="handleVariantUpdate(this, 2)" onmouseenter="handleVariantUpdate(this, 2)"></div><div className="cursor-pointer transition-all bg-[#bbbcb6] w-6 h-6 border-neutral-200 border rounded" data-active="true" onclick="handleVariantUpdate(this, 3)" onmouseenter="handleVariantUpdate(this, 3)"></div></div>
</div>

<div className="w-full md:w-[400px] md:flex-shrink-0 md:snap-start group cursor-pointer" onmouseleave="restoreVariantState(this)">
<div className="aspect-square bg-[#f6f5f3] rounded-3xl overflow-hidden relative mb-4"><div className="text-[10px] uppercase font-semibold text-neutral-600 tracking-wider bg-white z-20 rounded-sm px-3 py-1 absolute top-5 left-5 shadow-sm">Nouveau</div><img alt="Divan Delano 3 sièges - Beige" className="transition-opacity duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb4a28ea-dfc1-4c82-a8c0-b0f9c9eb6ee4_1600w.png"/><img alt="Divan Delano 3 sièges - Gris Foncé" className="transition-opacity duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5485560a-749d-4b79-b4f2-5fb1321b600b_800w.png"/><img alt="Divan Delano 3 sièges - Brun" className="transition-opacity duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d669b05-829b-4883-a46e-3bb041b05437_800w.png"/><img alt="Divan Delano 3 sièges - Gris Clair" className="transition-opacity duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2a297d97-2655-4a9d-b367-b609696c0486_800w.png"/></div>
<div className="flex flex-col md:flex-row mb-3 items-start md:items-baseline md:justify-between gap-1 md:gap-0">
<h4 className="text-base font-medium text-slate-950">Divan Delano 3 sièges</h4>
<p className="text-base font-light text-neutral-500">$2780</p>
</div>
<div className="flex translate-x-1 gap-x-2 gap-y-2"><div className="cursor-pointer transition-all bg-[#b6a593] w-6 h-6 border-neutral-200 border rounded" onclick="handleVariantUpdate(this, 0)" onmouseenter="handleVariantUpdate(this, 0)"></div><div className="cursor-pointer transition-all bg-[#63645e] w-6 h-6 border-neutral-200 border rounded" onclick="handleVariantUpdate(this, 1)" onmouseenter="handleVariantUpdate(this, 1)"></div><div className="cursor-pointer transition-all bg-[#78593d] w-6 h-6 border-neutral-200 border rounded" onclick="handleVariantUpdate(this, 2)" onmouseenter="handleVariantUpdate(this, 2)"></div><div className="cursor-pointer transition-all bg-[#bbbcb6] w-6 h-6 border-neutral-200 border rounded" data-active="true" onclick="handleVariantUpdate(this, 3)" onmouseenter="handleVariantUpdate(this, 3)"></div></div>
</div>

<div className="w-full md:w-[400px] md:flex-shrink-0 md:snap-start group cursor-pointer" onmouseleave="restoreVariantState(this)">
<div className="aspect-square bg-[#f6f5f3] rounded-3xl overflow-hidden relative mb-4"><img alt="Sectionnel Delano 4 sièges, avec Ottoman - Beige" className="transition-opacity duration-500 group-hover:scale-105 z-10 opacity-100 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e13e04e-3d35-48d5-ba31-e2efa6d16c49_1600w.png"/><img alt="Sectionnel Delano 4 sièges, avec Ottoman - Gris Foncé" className="transition-opacity duration-500 z-0 group-hover:scale-105 opacity-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1134aef-6b12-4962-bbca-3a021f7468cd_800w.png"/><img alt="Sectionnel Delano 4 sièges, avec Ottoman - Brun" className="transition-opacity duration-500 z-0 group-hover:scale-105 opacity-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/afa105de-d74c-446f-a27e-43f84db1ed1f_800w.png"/><img alt="Sectionnel Delano 4 sièges, avec Ottoman - Gris Clair" className="transition-opacity duration-500 group-hover:scale-105 opacity-0 w-full h-full object-cover z-10 absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/10d80426-2997-41be-9f1b-f567459cac63_800w.png"/></div>
<div className="flex flex-col md:flex-row mb-3 items-start md:items-baseline md:justify-between gap-1 md:gap-0">
<h4 className="text-base font-medium text-slate-950">Sectionnel Delano 4 sièges, avec Ottoman</h4>
<p className="text-base font-light text-neutral-500">$3490</p>
</div>
<div className="flex translate-x-1 gap-x-2 gap-y-2"><div className="cursor-pointer transition-all bg-[#b6a593] w-6 h-6 border-neutral-200 border rounded ring-1 ring-offset-2 ring-slate-950" data-active="true" onclick="handleVariantUpdate(this, 0)" onmouseenter="handleVariantUpdate(this, 0)"></div><div className="cursor-pointer transition-all bg-[#63645e] w-6 h-6 border-neutral-200 border rounded ring-0 hover:ring-1 hover:ring-offset-2 hover:ring-neutral-300" onclick="handleVariantUpdate(this, 1)" onmouseenter="handleVariantUpdate(this, 1)"></div><div className="cursor-pointer transition-all bg-[#78593d] w-6 h-6 border-neutral-200 border rounded ring-0 hover:ring-1 hover:ring-offset-2 hover:ring-neutral-300" onclick="handleVariantUpdate(this, 2)" onmouseenter="handleVariantUpdate(this, 2)"></div><div className="cursor-pointer transition-all bg-[#bbbcb6] w-6 h-6 border-neutral-200 border rounded ring-0 hover:ring-1 hover:ring-offset-2 hover:ring-neutral-300" onclick="handleVariantUpdate(this, 3)" onmouseenter="handleVariantUpdate(this, 3)"></div></div>
</div>

<div className="hidden md:block w-12 shrink-0"></div>
</div>

</section>

<section className="bg-center md:pl-10 md:pr-10 md:pt-12 bg-white pt-12 pr-10 pb-16 pl-10">
<div className="text-center w-full" style={{}}>

<div className="text-center mb-12 md:mb-16">
<h2 className="md:text-5xl text-3xl text-slate-950 tracking-tight font-serif text-left">Caractéristiques de signature redéfinies</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 gap-x-4 gap-y-4">

<div className="flex flex-col gap-4 md:gap-6">

<div className="relative group rounded-2xl overflow-hidden aspect-square w-full bg-neutral-100">
<img alt="Doux comme un nuage" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00cffbbc-5f5f-41cd-b76b-e4ad31059c1a_1600w.jpg"/>
<div className="bg-gradient-to-b from-black/30 via-transparent to-black/10 absolute top-0 right-0 bottom-0 left-0"></div>
<span className="absolute top-6 left-6 text-white font-normal text-lg md:text-xl drop-shadow-md">Doux comme un nuage</span>
<button className="absolute bottom-5 right-5 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-neutral-100 transition-colors cursor-pointer group/btn">
<svg className="text-[#0f2d4a] group-hover/btn:scale-110 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>

<div className="relative group rounded-2xl overflow-hidden aspect-[3/2] w-full bg-neutral-100">
<img alt="Entièrement modulable" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b57bba11-4818-4f4e-8d44-5e09032f2a66_1600w.jpg"/>
<div className="bg-center bg-gradient-to-b from-black/30 via-transparent to-black/10 absolute top-0 right-0 bottom-0 left-0"></div>
<span className="md:text-xl text-lg font-normal text-white pr-12 absolute top-6 left-6 drop-shadow-md">Évolue avec vous</span>
<button className="absolute bottom-5 right-5 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-neutral-100 transition-colors cursor-pointer group/btn">
<svg className="text-[#0f2d4a] group-hover/btn:scale-110 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="flex flex-col gap-4 md:gap-6">

<div className="group overflow-hidden aspect-[3/2] bg-neutral-100 w-full rounded-2xl relative">
<img alt="Housses amovibles" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c313dff0-6087-44f4-b6de-f0d46bf3d856_1600w.jpg"/>
<div className="bg-center bg-gradient-to-b from-black/30 via-transparent to-black/10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c313dff0-6087-44f4-b6de-f0d46bf3d856_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<span className="md:text-xl text-lg font-normal text-white absolute top-6 left-6 drop-shadow-md">S’adapte à votre rythme</span>
<button className="absolute bottom-5 right-5 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-neutral-100 transition-colors cursor-pointer group/btn">
<svg className="text-[#0f2d4a] group-hover/btn:scale-110 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>

<div className="relative group rounded-2xl overflow-hidden aspect-square w-full bg-neutral-100">
<img alt="Ottoman avec rangement" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de7819a6-daab-4c98-8d3b-c0031a87458e_1600w.jpg"/>
<div className="bg-center bg-gradient-to-b from-black/30 via-transparent to-black/10 absolute top-0 right-0 bottom-0 left-0"></div>
<span className="md:text-xl text-lg font-normal text-white absolute top-6 left-6 drop-shadow-md">Fait pour le quotidien réel</span>
<button className="absolute bottom-5 right-5 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-neutral-100 transition-colors cursor-pointer group/btn">
<svg className="text-[#0f2d4a] group-hover/btn:scale-110 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white w-full pt-12 pb-12 pl-10">

<div className="text-center mb-16 max-w-[1600px] mx-auto px-6">
<h3 className="md:text-5xl text-4xl text-[#1a1a1a] tracking-tight font-serif mb-3">Nos clients nous aiment</h3>
<p className="text-sm font-medium text-neutral-500">à partir de 18 avis</p>
</div>

<div className="flex overflow-x-auto pb-8 px-6 gap-6 snap-x snap-mandatory no-scrollbar scroll-smooth w-full items-stretch" id="reviews-container" style={{scrollbarWidth: 'none'}}>

<div className="min-w-[300px] md:min-w-[360px] snap-center p-6 rounded-xl border border-neutral-200 bg-white flex flex-col items-center text-center">
<div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-neutral-100">
<img alt="Sofa en cuir" className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0b24a935-6446-4d49-bacd-867f6080aa45_800w.jpg"/>
</div>
<div className="flex gap-1 text-yellow-400 mb-5">
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-sm text-neutral-600 leading-relaxed mb-8 px-2 flex-grow">"Je l'ai depuis maintenant 4 ans, je l'hydrate 2 fois par année et il reste vraiment beau. On l'adore!"</p>
<div className="mt-auto text-sm font-semibold text-neutral-900">Francois Nicolas F.</div>
</div>

<div className="min-w-[300px] md:min-w-[360px] snap-center p-6 rounded-xl border border-neutral-200 bg-white flex flex-col items-center text-center">
<div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-neutral-100">
<img alt="Modulaire Maverick" className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e0af6796-d369-4cc5-9abf-d005d1ebe03c_800w.jpg"/>
</div>
<div className="flex gap-1 text-yellow-400 mb-5">
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-sm text-neutral-600 leading-relaxed mb-8 px-2 flex-grow">"J'ai le modulaire Maverick chez moi depuis plusieurs années et je l'adore! Il ajoute une touche chaleureuse."</p>
<div className="mt-auto text-sm font-semibold text-neutral-900">Cynthia F.</div>
</div>

<div className="min-w-[300px] md:min-w-[360px] snap-center flex flex-col text-center bg-white border-neutral-200 border rounded-xl pt-6 pr-6 pb-6 pl-6 items-center">
<div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-neutral-100">
<img alt="Sofa Delano" className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91067631-01a8-472f-8ecc-a10067196245_800w.jpg"/>
</div>
<div className="flex gap-1 text-yellow-400 mb-5">
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-sm text-neutral-600 leading-relaxed mb-8 px-2 flex-grow">"J'adore mon Delano. La qualité du tissu est impressionnante et il est encore plus confortable qu'en photo."</p>
<div className="mt-auto text-sm font-semibold text-neutral-900">Annie-Kim C.</div>
</div>

<div className="min-w-[300px] md:min-w-[360px] snap-center p-6 rounded-xl border border-neutral-200 bg-white flex flex-col items-center text-center">
<div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-neutral-100">
<img alt="Table distinctive" className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2bb9dc28-818c-4aa1-9524-892175864688_800w.jpg"/>
</div>
<div className="flex gap-1 text-yellow-400 mb-5">
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-sm text-neutral-600 leading-relaxed mb-8 px-2 flex-grow">"Je cherchais une table distinctive qui s'agencerait bien au style rustique de ma maison. Parfaite!"</p>
<div className="mt-auto text-sm font-semibold text-neutral-900">Cynthia F.</div>
</div>

<div className="min-w-[300px] md:min-w-[360px] snap-center p-6 rounded-xl border border-neutral-200 bg-white flex flex-col items-center text-center">
<div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-neutral-100">
<img alt="Maverick 3 morceaux" className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92a0414d-a123-45ab-ac4a-21833d6e1337_800w.jpg"/>
</div>
<div className="flex gap-1 text-yellow-400 mb-5">
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-sm text-neutral-600 leading-relaxed mb-8 px-2 flex-grow">"J'ai eu un Maverick 3 morceaux pendant plusieurs années. Je l'aimais tellement que je l'ai racheté!"</p>
<div className="mt-auto text-sm font-semibold text-neutral-900">Liliane N.</div>
</div>
</div>


</section>

<footer className="text-[#e8e4dc] bg-slate-950 pt-16 pr-6 pb-16 pl-6">
<div className="flex flex-col md:flex-row gap-8 max-w-[1600px] mr-auto ml-auto gap-x-8 gap-y-8 items-center justify-between">
<span className="text-2xl tracking-[0.2em] font-medium uppercase border border-[#e8e4dc] px-4 py-1">Lusine</span>
<div className="flex gap-8 text-sm opacity-80">
<a className="hover:opacity-100" href="#">À propos</a>
<a className="hover:opacity-100" href="#">Contact</a>
<a className="hover:opacity-100" href="#">Mentions Légales</a>
</div>
<div className="text-sm opacity-60">
                © 2024 Lusine. Tous droits réservés.
            </div>
</div>
</footer>


    </>
  );
}
