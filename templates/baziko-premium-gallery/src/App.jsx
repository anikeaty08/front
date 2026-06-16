import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
},
colors: {
premium: {
DEFAULT: '#D4C5B9', // Main Accent
hover: '#A89B90',   // Darker Beige
light: '#EBE3DD'
},
taupe: '#A89B90',       // Secondary Accent
offwhite: '#FEFDFB',    // Page BG
surface: '#F9F7F5',     // Block BG
dark: '#1A1A1A',        // Main Text
grey: {
light: '#E8E8E8',   // Borders
mid: '#999999',     // Secondary Text
dark: '#7F7F7F'     // Light Text
},
success: '#6B9E64',
error: '#C54E4E'
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      (function() {
        function initMegaMenu() {
          const aura = document.getElementById('mega-menu-aura');
          const inner = document.getElementById('mega-menu-inner');
          if (!aura || !inner) return;

          const triggers = inner.querySelectorAll('.mobile-nav-trigger');
          const wrappers = inner.querySelectorAll('.mobile-accordion-wrapper');
          const actionBtns = inner.querySelectorAll('.mobile-accordion-action');
          const targets = ['/', '#about-us-parallax', '/gallery', '#faq-section', 'footer'];

          function closeMenuAndNavigate(idx) {
            aura.classList.add('invisible', 'opacity-0');
            inner.classList.add('scale-95', 'opacity-0');

            setTimeout(() => {
              const target = targets[idx];
              if (!target) return;

              if (target === '/') {
                if (typeof router === 'function') router('/');
                else window.location.href = '/';
              } else if (target === '/gallery') {
                if (typeof router === 'function') router('/galereya');
                else window.location.href = '/gallery';
              } else if (target === 'footer') {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
              } else {
                const targetEl = document.querySelector(target);
                if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 400);
          }

          triggers.forEach((trigger, idx) => {
            // Clean up old listeners to prevent stacking
            const newTrigger = trigger.cloneNode(true);
            trigger.parentNode.replaceChild(newTrigger, trigger);

            newTrigger.addEventListener('click', (e) => {
              e.preventDefault();
              e.stopPropagation();

              if (window.innerWidth <= 768) {
                const isOpen = wrappers[idx].classList.contains('is-open');

                // Close all other accordions
                wrappers.forEach(w => w.classList.remove('is-open'));

                // Open clicked if it wasn't already open
                if (!isOpen) {
                  wrappers[idx].classList.add('is-open');
                }
              } else {
                // Desktop directly navigates
                closeMenuAndNavigate(idx);
              }
            });
          });

          actionBtns.forEach((btn, idx) => {
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);

            newBtn.addEventListener('click', (e) => {
              e.preventDefault();
              e.stopPropagation();
              closeMenuAndNavigate(idx);
            });
          });
        }

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initMegaMenu);
        } else {
          initMegaMenu();
        }

        window.addEventListener('resize', () => {
          if (window.innerWidth > 768) {
             const wrappers = document.querySelectorAll('#mega-menu-inner .mobile-accordion-wrapper');
             wrappers.forEach(w => w.classList.remove('is-open'));
          }
        });
      })();
    


        (function() {
            // Logic to move this section immediately after the hero-section
            const moveSection = () => {
                const section = document.getElementById('about-us-parallax');
                const hero = document.getElementById('hero-section');
                if (section && hero && hero.nextElementSibling !== section) {
                    hero.insertAdjacentElement('afterend', section);
                }
            };

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', moveSection);
            } else {
                moveSection();
            }

            // Existing Parallax Logic
            const initParallax = () => {
                const section = document.getElementById('about-us-parallax');
                if (!section) return;
                
                const wrappers = section.querySelectorAll('.parallax-image-premium');
                let ticking = false;

                const updateParallax = () => {
                    const rect = section.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    
                    // Only calculate if section is somewhere in the viewport
                    if (rect.bottom < 0 || rect.top > windowHeight) return;
                    
                    const scrollCenterY = windowHeight / 2;
                    const sectionCenterY = rect.top + (rect.height / 2);
                    const distanceFromCenter = sectionCenterY - scrollCenterY;
                    
                    wrappers.forEach(wrapper => {
                        const speed = parseFloat(wrapper.getAttribute('data-speed') || 0.1);
                        const fadeSpeed = parseFloat(wrapper.getAttribute('data-fade-speed') || 1);
                        
                        // Parallax Shift
                        const yPos = distanceFromCenter * speed;
                        
                        // Dynamic Opacity (disappears when scrolling away from center)
                        const maxDist = (windowHeight * 0.7) / fadeSpeed;
                        let opacity = 1 - (Math.abs(distanceFromCenter) / maxDist);
                        opacity = Math.max(0, Math.min(1, opacity));
                        
                        // Premium blur and scale effects during fade
                        const blurVal = (1 - opacity) * 8;
                        const scaleVal = 1 + (1 - opacity) * 0.05;
                        
                        wrapper.style.transform = `translate3d(0, ${yPos}px, 0) scale(${scaleVal})`;
                        wrapper.style.opacity = opacity.toFixed(3);
                        wrapper.style.filter = `blur(${blurVal.toFixed(1)}px)`;
                    });
                };

                window.addEventListener('scroll', () => {
                    if (!ticking) {
                        window.requestAnimationFrame(() => {
                            updateParallax();
                            ticking = false;
                        });
                        ticking = true;
                    }
                }, { passive: true });
                
                // Initial update on load
                setTimeout(updateParallax, 50);
            };

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initParallax);
            } else {
                initParallax();
            }
        })();
    


    (function () {
      if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
    })();
  


    (function () {
      function ensureLucide() {
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
          window.lucide.createIcons();
          return;
        }
        if (!document.getElementById('lucide-script')) {
          var s = document.createElement('script');
          s.id = 'lucide-script';
          s.src = 'https://unpkg.com/lucide@latest/dist/umd/lucide.min.js';
          s.onload = function(){ if(window.lucide) window.lucide.createIcons(); };
          document.head.appendChild(s);
        }
      }
      ensureLucide();
    })();
  


        // Simple Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
            document.body.classList.toggle('overflow-hidden');
        }

        // Mock Router Functionality (For prototype UX)
        function router(path) {
            console.log('Navigated to: ' + path);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // In a real app, this would hide/show respective page-sections.
        }

        // About Us Parallax Scroll Effect
        window.addEventListener('scroll', () => {
            const parallaxImages = document.querySelectorAll('.parallax-bg');
            const scrolled = window.pageYOffset;
            
            parallaxImages.forEach(img => {
                // Get the data-speed attribute (negative numbers reverse direction)
                const speed = img.getAttribute('data-speed') || 0.1;
                const yPos = -(scrolled * speed);
                img.style.transform = `translateY(${yPos}px)`;
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed z-50 border-grey-light bg-[#FEFDFB]/95 w-full border-b top-0 backdrop-blur-md">
<div className="flex h-20 max-w-[1400px] mr-auto ml-auto pr-6 pl-6 relative items-center justify-between">
<style>
    @media (max-width: 768px) {
      /* Smooth, expensive accordion animation using CSS Grid */
      #mega-menu-inner .mobile-accordion-wrapper {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.6s cubic-bezier(0.25, 1, 0.5, 1);
      }
      #mega-menu-inner .mobile-accordion-wrapper.is-open {
        grid-template-rows: 1fr;
      }
      #mega-menu-inner .mobile-accordion-inner {
        overflow: hidden;
      }
      
      /* Image reveal animation */
      #mega-menu-inner .mobile-accordion-img {
        width: 100%;
        height: 220px;
        object-fit: cover;
        border-radius: 8px;
        margin-top: 1rem;
        transform: scale(0.95);
        opacity: 0;
        transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1) 0.1s, opacity 0.6s ease 0.1s;
      }
      #mega-menu-inner .mobile-accordion-wrapper.is-open .mobile-accordion-img {
        transform: scale(1);
        opacity: 1;
      }
      
      /* Clear, prominent mobile close button */
      #mega-menu-aura .mobile-close-btn {
        top: 1.5rem !important;
        right: 1.5rem !important;
        width: 52px !important;
        height: 52px !important;
        background-color: #1A1A1A !important;
        color: #ffffff !important;
        border-radius: 50% !important;
        box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3) !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 0 !important;
      }
      #mega-menu-aura .mobile-close-btn svg {
        width: 28px !important;
        height: 28px !important;
        stroke-width: 1.5 !important;
      }
      
      /* Adjust mobile layout space */
      #mega-menu-inner .mega-menu-giant-text {
        display: none !important;
      }
      #mega-menu-inner .mobile-nav-container {
        padding-top: 6rem !important;
        padding-bottom: 2rem !important;
        justify-content: flex-start !important;
        overflow-y: auto !important;
        height: 100% !important;
      }
      #mega-menu-inner .mobile-nav-container::-webkit-scrollbar {
        display: none;
      }
    }
  </style>

<a className="flex items-center gap-3 group cursor-pointer z-50 relative" href="#" onclick="router('/')">
<div className="flex items-center gap-3">
<img alt="BAZIKO logo" className="w-8 h-8 object-contain" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b231e0e-3915-4023-8bf1-06641ea8e493_320w.png" style={{width: '2.56rem', height: '2.56rem'}}/>
<div className="flex flex-col">
<span className="text-dark leading-none text-xl font-normal tracking-tight">BAZIKO</span>
<span className="text-xs font-light text-taupe tracking-widest uppercase mt-0.5">Premium</span>
</div>
</div>
</a>

<nav className="hidden md:flex z-40 flex-1 min-w-0 pr-6 pl-6 relative justify-center">
<div className="flex items-center gap-4 lg:gap-6">
<a className="text-dark/60 hover:text-dark transition-colors whitespace-nowrap text-sm font-light tracking-tight font-manrope" href="/" onclick="router('/'); return false;">Главная</a>
<a className="text-dark/60 hover:text-dark transition-colors whitespace-nowrap text-sm font-light tracking-tight font-manrope" href="/#about-us-parallax" onclick="document.querySelector('#about-us-parallax')?.scrollIntoView({behavior:'smooth'}); return false;">О нас</a>
<a className="text-dark/60 hover:text-dark transition-colors whitespace-nowrap text-sm font-light tracking-tight font-manrope" href="/gallery" onclick="router('/galereya'); return false;">Галерея</a>
<a className="text-dark/60 hover:text-dark transition-colors text-sm font-light tracking-tight font-manrope whitespace-nowrap" href="#faq-section" onclick="document.querySelector('#faq-section')?.scrollIntoView({behavior:'smooth'}); return false;">FAQ</a>
<a className="text-dark/60 hover:text-dark transition-colors whitespace-nowrap text-sm font-light tracking-tight font-manrope" href="#footer" id="#contact" onclick="document.querySelector('footer')?.scrollIntoView({behavior:'smooth', block:'start'}); return false;">Контакты</a>
</div>

</nav>

<div className="flex items-center gap-3 md:gap-4 z-50 relative">

<a className="hidden md:flex items-center gap-2 uppercase transition hover:bg-premium-hover text-dark whitespace-nowrap text-xs font-medium tracking-widest rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="https://wa.me/996998154550?text=Здравствуйте%20🤝%20Хотим%20обсудить%20пошив%20нашей%20коллекции" rel="noopener noreferrer" target="_blank">
<span className="font-manrope cursor-pointer" onclick="window.location.href='https://wa.me/996998154550?text=Здравствуйте%20🤝%20Хотим%20обсудить%20пошив%20нашей%20коллекции.'" role="button">Связаться</span>
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>

<button aria-label="Открыть меню" className="flex items-center gap-2 text-dark hover:text-premium transition-colors" onclick="document.getElementById('mega-menu-aura').classList.remove('invisible', 'opacity-0'); document.getElementById('mega-menu-inner').classList.remove('scale-95', 'opacity-0');">
<svg className="lucide lucide-menu" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><line className="" x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>

<div className="fixed z-[100] md:p-12 transition-all duration-500 ease-out flex bg-[#C9B5AA] opacity-0 invisible pt-4 pr-4 pb-4 pl-4 top-0 right-0 bottom-0 left-0 items-center justify-center" id="mega-menu-aura">

<button aria-label="Закрыть меню" className="absolute top-6 md:top-8 z-[110] text-dark hover:text-white transition-colors p-2 cursor-pointer right-6 md:right-8 mobile-close-btn" onclick="document.getElementById('mega-menu-aura').classList.add('invisible', 'opacity-0'); document.getElementById('mega-menu-inner').classList.add('scale-95', 'opacity-0');">
<svg className="lucide lucide-x" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>

<div className="w-full h-full max-w-[1200px] max-h-[85vh] relative flex flex-col md:flex-row shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] scale-95 opacity-0 bg-white overflow-hidden" id="mega-menu-inner">

<div className="w-full md:w-[45%] h-full relative flex bg-white z-20">

<div className="hidden md:flex w-16 h-full flex-col justify-end items-center pb-16 relative shrink-0 border-r border-grey-light/40">
<div className="flex flex-col gap-16 -rotate-90 absolute bottom-32 whitespace-nowrap transform origin-center text-[10px] font-manrope font-medium tracking-widest text-dark/40 uppercase">
<a className="hover:text-dark transition-colors" href="#">Twitter</a>
<a className="hover:text-dark transition-colors" href="#">Instagram</a>
<a className="hover:text-dark transition-colors" href="#">Facebook</a>
</div>
</div>

<div className="flex flex-col justify-center pl-8 pr-8 md:pl-16 md:pr-12 w-full relative z-20 h-full mobile-nav-container">
<nav className="flex flex-col w-full relative z-40">

<div className="flex flex-col w-full border-b border-grey-light/30">
<a className="flex items-center justify-between w-full py-5 group/lnk mobile-nav-trigger" data-fixed="true" href="/">
<span className="text-sm font-manrope font-medium uppercase tracking-widest text-dark group-hover/lnk:text-premium transition-colors">Главная</span>
<div className="flex items-center gap-4 opacity-0 group-hover/lnk:opacity-100 transition-opacity">
<span className="w-4 h-[1.5px] bg-dark"></span>
<span className="text-[10px] font-manrope font-medium text-dark">01</span>
</div>
</a>
<div className="mobile-accordion-wrapper md:hidden">
<div className="mobile-accordion-inner">
<img alt="Главная" className="mobile-accordion-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5102adb-a0f6-4f63-9278-bb77331d9751_800w.jpg"/>
<button className="mobile-accordion-action mt-4 mb-4 flex items-center gap-2 text-xs font-manrope font-medium uppercase tracking-widest text-dark hover:text-premium transition-colors pb-1 border-b border-dark/20 hover:border-premium">
                    Перейти
                    <svg className="lucide lucide-arrow-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="flex flex-col w-full border-b border-grey-light/30">
<a className="flex items-center justify-between w-full py-5 group/lnk mobile-nav-trigger" data-fixed="true" href="#about-us-parallax">
<span className="text-sm font-manrope font-medium uppercase tracking-widest text-dark group-hover/lnk:text-premium transition-colors">О нас</span>
<div className="flex items-center gap-4 opacity-0 group-hover/lnk:opacity-100 transition-opacity">
<span className="w-4 h-[1.5px] bg-dark"></span>
<span className="text-[10px] font-manrope font-medium text-dark">02</span>
</div>
</a>
<div className="mobile-accordion-wrapper md:hidden">
<div className="mobile-accordion-inner">
<img alt="О нас" className="mobile-accordion-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7ea47c9-a11a-4d4a-a5fe-e41cc6604a00_800w.jpg"/>
<button className="mobile-accordion-action mt-4 mb-4 flex items-center gap-2 text-xs font-manrope font-medium uppercase tracking-widest text-dark hover:text-premium transition-colors pb-1 border-b border-dark/20 hover:border-premium">
                    Узнать больше
                    <svg className="lucide lucide-arrow-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="flex flex-col w-full border-b border-grey-light/30">
<a className="flex items-center justify-between w-full py-5 group/lnk mobile-nav-trigger" data-fixed="true" href="/gallery">
<span className="text-sm font-manrope font-medium uppercase tracking-widest text-dark group-hover/lnk:text-premium transition-colors">Галерея</span>
<div className="flex items-center gap-4 opacity-0 group-hover/lnk:opacity-100 transition-opacity">
<span className="w-4 h-[1.5px] bg-dark"></span>
<span className="text-[10px] font-manrope font-medium text-dark">03</span>
</div>
</a>
<div className="mobile-accordion-wrapper md:hidden">
<div className="mobile-accordion-inner">
<img alt="Галерея" className="mobile-accordion-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0220fa5c-a2c1-4438-b157-e54a8b232534_800w.jpg"/>
<button className="mobile-accordion-action mt-4 mb-4 flex items-center gap-2 text-xs font-manrope font-medium uppercase tracking-widest text-dark hover:text-premium transition-colors pb-1 border-b border-dark/20 hover:border-premium">
                    Смотреть коллекции
                    <svg className="lucide lucide-arrow-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="flex flex-col w-full border-b border-grey-light/30">
<a className="flex items-center justify-between w-full py-5 group/lnk mobile-nav-trigger" data-fixed="true" href="#faq-section">
<span className="text-sm font-manrope font-medium uppercase tracking-widest text-dark group-hover/lnk:text-premium transition-colors">FAQ</span>
<div className="flex items-center gap-4 opacity-0 group-hover/lnk:opacity-100 transition-opacity">
<span className="w-4 h-[1.5px] bg-dark"></span>
<span className="text-[10px] font-manrope font-medium text-dark">04</span>
</div>
</a>
<div className="mobile-accordion-wrapper md:hidden">
<div className="mobile-accordion-inner">
<img alt="FAQ" className="mobile-accordion-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5772aefb-3e51-4622-8399-df91ed8c1a91_800w.png"/>
<button className="mobile-accordion-action mt-4 mb-4 flex items-center gap-2 text-xs font-manrope font-medium uppercase tracking-widest text-dark hover:text-premium transition-colors pb-1 border-b border-dark/20 hover:border-premium">
                    Частые вопросы
                    <svg className="lucide lucide-arrow-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="flex flex-col w-full last:border-0">
<a className="flex items-center justify-between w-full py-5 group/lnk mobile-nav-trigger" data-fixed="true" href="#footer">
<span className="text-sm font-manrope font-medium uppercase tracking-widest text-dark group-hover/lnk:text-premium transition-colors">Контакты</span>
<div className="flex items-center gap-4 opacity-0 group-hover/lnk:opacity-100 transition-opacity">
<span className="w-4 h-[1.5px] bg-dark"></span>
<span className="text-[10px] font-manrope font-medium text-dark">05</span>
</div>
</a>
<div className="mobile-accordion-wrapper md:hidden">
<div className="mobile-accordion-inner">
<img alt="Контакты" className="mobile-accordion-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/55ca9304-ac13-4bfc-b92f-7042beb9d1ac_800w.jpg"/>
<button className="mobile-accordion-action mt-4 mb-4 flex items-center gap-2 text-xs font-manrope font-medium uppercase tracking-widest text-dark hover:text-premium transition-colors pb-1 border-b border-dark/20 hover:border-premium">
                    Связаться с нами
                    <svg className="lucide lucide-arrow-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<div className="absolute bottom-8 left-8 md:bottom-12 md:left-16 z-40 max-w-[18rem] hidden md:block">
<p className="text-xs font-manrope font-normal text-dark/60 leading-relaxed">
              Выберите раздел — меню закроется и страница плавно прокрутится к нужному блоку.
            </p>
</div>
</div>
</div>

<div className="hidden md:block w-[55%] h-full relative z-10 bg-[#f8f6f5]">
<div className="absolute left-8 top-1/2 -translate-y-1/2 w-[45%] h-[75%] z-20 shadow-2xl bg-white p-2 transition-transform duration-700 hover:scale-105 cursor-pointer">
<img alt="Collection Preview" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5102adb-a0f6-4f63-9278-bb77331d9751_800w.jpg"/>
</div>
<div className="absolute right-0 top-0 w-[65%] h-full z-10">
<img alt="Fashion Editorial" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0220fa5c-a2c1-4438-b157-e54a8b232534_800w.jpg"/>
<div className="absolute inset-0 bg-dark/10"></div>
</div>
</div>

<div className="absolute flex justify-center pointer-events-none px-4 mix-blend-multiply bottom-0 left-0 right-0 items-end pb-6 md:pb-10 z-10 mega-menu-giant-text" style={{height: 'auto', top: 'auto'}}>
<h2 className="font-manrope font-medium uppercase tracking-tighter text-dark leading-none text-center select-none opacity-90 drop-shadow-sm text-[11vw] md:text-[6vw]">
          BAZIKO PREMIUM
        </h2>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-offwhite z-50 hidden flex-col pt-24 px-6 gap-6 overflow-y-auto" id="mobileMenu">
<button className="absolute top-6 right-6 text-dark" onclick="toggleMobileMenu()"><iconify-icon height="24" icon="lucide:x" width="24"></iconify-icon></button>
<a className="text-xl font-light border-b border-grey-light pb-4" href="#" onclick="router('/'); toggleMobileMenu()">Главная</a>
<a className="text-xl font-light border-b border-grey-light pb-4" href="#" onclick="router('/zhenskiye-rubashki'); toggleMobileMenu()">Женские рубашки</a>
<a className="text-xl font-light border-b border-grey-light pb-4" href="#" onclick="router('/muzhskiye-rubashki'); toggleMobileMenu()">Мужские рубашки</a>
<a className="text-xl font-light border-b border-grey-light pb-4" href="#" onclick="router('/individualnyy-poshiv-rubashek'); toggleMobileMenu()">Индивидуальный пошив</a>
<a className="text-xl font-light border-b border-grey-light pb-4" href="#" onclick="router('/poshiv-po-lekalám-klienta'); toggleMobileMenu()">По лекалам (B2B)</a>
<a className="text-xl font-light border-b border-grey-light pb-4" href="#" onclick="router('/optovyy-poshiv-odezhdy-bishkek'); toggleMobileMenu()">Оптовый пошив</a>
<a className="text-xl font-light border-b border-grey-light pb-4" href="#" onclick="router('/protsess-raboty'); toggleMobileMenu()">Процесс</a>
<a className="text-xl font-light border-b border-grey-light pb-4" href="#" onclick="router('/o-nas'); toggleMobileMenu()">О нас</a>
<a className="text-xl font-light border-b border-grey-light pb-4" href="#" onclick="router('/blog'); toggleMobileMenu()">Блог</a>
<a className="text-xl font-light border-b border-grey-light pb-4" href="#" onclick="router('/kontakty'); toggleMobileMenu()">Контакты</a>
</div>
</header>

<main className="pt-20 min-h-screen">

<div className="page-section active" id="page-home">

<section className="overflow-hidden w-full h-screen relative" id="hero-section">

<img alt="Baziko Premium Fashion" className="object-top z-10 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17c60e6b-c3ce-4b24-9535-d6f786574fe0_3840w.jpg"/>

<div className="flex flex-col z-30 text-center bg-black/40 pr-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<style>
        #hero-section > div.z-20.absolute.bottom-0 { display: none !important; }
    </style>
<div className="z-30 bg-white/10 border-white/20 border rounded-full mb-4 pt-1 pr-3 pb-1 pl-3 backdrop-blur-md mt-24 md:mt-40">
<span className="text-[9px] uppercase font-semibold text-white tracking-[0.15em] font-montserrat">Производим одежду с 2010 года</span>
</div>
<h1 className="mb-6 font-montserrat text-7xl font-extrabold uppercase tracking-tighter text-white drop-shadow-2xl md:text-8xl -multi">
        Baziko Premium
    </h1>
<p className="leading-relaxed md:text-2xl text-xl font-medium text-white/90 font-manrope max-w-4xl mb-12 drop-shadow-lg -multi">Премиальные коллекции в ритме вашего бизнеса. Полный цикл производства одежды от идеи до партии</p>
<a className="group flex items-center gap-3 transition-all duration-300 hover:bg-white/20 hover:border-white/40 -multi bg-white/10 border-white/20 border rounded-sm pt-5 pr-10 pb-5 pl-10 relative backdrop-blur-md" href="/gallery">
<span className="uppercase text-xs font-bold text-white tracking-[0.2em] font-montserrat">Смотреть каталог</span>
<svg className="lucide lucide-arrow-right text-white transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="z-20 flex flex-col text-center w-full pr-6 pb-16 pl-6 absolute bottom-0 left-0 items-center justify-end">

<p className="md:text-lg antialiased text-base font-medium text-white tracking-wide font-manrope max-w-2xl mb-8 drop-shadow-md"></p>

<a className="group relative flex items-center gap-3 px-8 py-4 bg-transparent border border-white text-white rounded-sm transition-all duration-300 hover:bg-white hover:text-dark" href="#production-types">
<span className="text-xs font-bold uppercase tracking-widest">Посмотреть каталог</span>

<svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover:-translate-x-1 group-hover:-rotate-12" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</section><section className="min-h-screen overflow-hidden flex border-grey-light w-full border-b relative items-center justify-center" id="about-us-parallax">

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] right-[-10%] w-[60%] h-[120%] bg-premium/30 rotate-12 blur-3xl rounded-[100px]"></div>
<div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[80%] bg-[#EBE3DD]/40 -rotate-12 blur-3xl rounded-[100px]"></div>
</div>

<div className="absolute inset-0 pointer-events-none">

<div className="absolute top-[10%] left-[-5%] sm:left-[2%] lg:left-[5%] w-[240px] sm:w-[300px] lg:w-[380px] parallax-image-premium pointer-events-auto z-10" data-fade-speed="1.2" data-speed="0.25" style={{willChange: 'transform, opacity, filter'}}>
<img alt="Fabric" className="aspect-[4/3] transition-transform duration-700 hover:scale-105 w-full object-cover rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e7101072-876c-48de-b277-fd7c0dbd75dd_800w.png"/>
</div>

<div className="lg:left-[10%] sm:w-[260px] lg:w-[320px] hidden sm:block parallax-image-premium pointer-events-auto z-10 w-[200px] absolute bottom-[5%] left-[5%]" data-fade-speed="1.5" data-speed="-0.15" style={{willChange: 'transform, opacity, filter'}}>
<img alt="Process" className="aspect-[16/9] transition-transform duration-700 hover:scale-105 w-full object-cover rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7ea47c9-a11a-4d4a-a5fe-e41cc6604a00_800w.jpg"/>
</div>

<div className="absolute top-[35%] right-[-10%] sm:right-[2%] lg:right-[5%] w-[220px] sm:w-[300px] lg:w-[360px] parallax-image-premium pointer-events-auto z-30" data-fade-speed="1.3" data-speed="0.1" style={{willChange: 'transform, opacity, filter'}}>
<img alt="Production" className="w-full aspect-square object-cover rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-transform duration-700 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0220fa5c-a2c1-4438-b157-e54a8b232534_800w.jpg"/>
</div>
</div>

<div className="relative z-20 text-center flex flex-col items-center px-4 sm:px-6 max-w-5xl mx-auto py-32 mt-10 md:mt-0 pointer-events-none">
<h2 className="font-oswald text-[9vw] sm:text-5xl md:text-6xl lg:text-[76px] uppercase tracking-tighter leading-[1.05] text-dark mb-8 drop-shadow-xl [text-shadow:0_0_30px_#F9F7F5]">
<span className="font-light block mb-1">Добро пожаловать в</span>
<span className="font-light block mb-2">Baziko Premium.</span>
<span className="font-semibold block">Искусство создания</span>
<span className="font-semibold block text-premium drop-shadow-none">идеальной одежды</span>
</h2>
<p className="md:text-base lg:text-lg text-dark leading-relaxed text-sm font-normal font-manrope max-w-2xl pointer-events-auto border-white/60 border rounded-2xl mb-10 pt-6 pr-6 pb-6 pl-6 shadow-sm backdrop-blur-md">Baziko Premium— это не просто швейный цех. Это автоматизированный конвейер для вашего бизнеса. Именно поэтому нашими постоянными партнерами стали:
Топ-селлеры маркетплейсов (WB, Ozon): Которые устали от человеческого фактора, кривых строчек и задержек. У нас машины кроят миллиметр в миллиметр.

Российские фабрики и бренды одежды: Которые делегируют нам сверх-объемы, когда их собственные мощности уже не справляются.

Крупные оптовики из СНГ: Которые ценят стабильность, прозрачность и готовую легальную логистику.</p>
<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto pointer-events-auto">
<button className="sm:w-auto sm:text-sm uppercase hover:bg-premium hover:text-dark transition-all duration-300 shadow-dark/20 cursor-pointer text-xs font-semibold text-white tracking-widest font-space-mono bg-[#4A3728] w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-xl" onclick="router('/kontakty');window.location.href='https://wa.me/996998154550?text=Здравствуйте%20🤝%20Хотим%20обсудить%20пошив%20нашей%20коллекции.'" role="button">
                Присоединяйтесь к нам
            </button>
<a className="sm:w-auto border-dark text-dark sm:text-sm uppercase hover:bg-dark hover:text-white transition-all duration-300 text-xs font-semibold tracking-widest font-space-mono text-center w-full border rounded-full pt-4 pr-8 pb-4 pl-8 backdrop-blur-sm" href="https://wa.me/996998154550?text=Здравствуйте%20🤝%20Хотим%20обсудить%20пошив%20нашей%20коллекции." rel="noopener noreferrer" target="_blank">
                Узнать больше
            </a>
</div>
</div>

</section>

<section className="w-full relative bg-dark overflow-hidden" id="video-gallery">

<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">

<div className="hidden md:block group aspect-[9/16] overflow-hidden cursor-pointer bg-zinc-900 w-full border-white/10 border-r relative">

<div className="hidden md:flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<video autoplay="" className="hidden md:block w-full h-full object-cover z-20 absolute top-0 right-0 bottom-0 left-0" loop="" muted="" playsinline="" src="https://pub-b2098c594208457a9a738e4773a4f74e.r2.dev/Fashion_model_in_elegant_casual_style__blue_oversized_shirt%2C_beige_midi_skirt%2C_sunglasses._She_poses_seed3512116558.mp4"></video>
</div>

<div className="flex z-20 w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0 items-end justify-between">
<div className="">
<span className="block text-[10px] uppercase font-medium text-white/60 tracking-widest mb-2"></span>
<h3 className="hidden md:block text-2xl font-light italic text-white tracking-wide font-serif"></h3>
</div>
<span className="text-xs font-bold text-white/80 border border-white/20 px-2 py-1 rounded backdrop-blur-sm">00:45</span>
</div>
</div>

<div className="hidden md:block group aspect-[9/16] overflow-hidden cursor-pointer bg-zinc-800 w-full border-white/10 border-r relative">

<img alt="Manufacturing Process" className="transition-transform duration-300 ease-out group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
<div className="hidden md:flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<video autoplay="" className="hidden md:block w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" loop="" muted="" playsinline="" src="https://pub-e8a0f4ba0f00465f983485516cedfb04.r2.dev/Woman_in_green_dress_gracefully_walks_from_left_side_towards___seated_man%2C_embraces_him_warmly._Both_seed1442053222.mp4"></video>
</div>
<div className="flex z-20 w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0 items-end justify-between">
<div className="">
<span className="block text-[10px] uppercase font-medium text-white/60 tracking-widest mb-2"></span>
<h3 className="text-2xl font-light italic text-white tracking-wide font-serif"></h3>
</div>
</div>
</div>

<div className="group relative w-full aspect-[9/16] bg-zinc-900 overflow-hidden cursor-pointer">

<img alt="Lookbook 2024" className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0220fa5c-a2c1-4438-b157-e54a8b232534_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
<div className="flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<video autoplay="" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" loop="" muted="" playsinline="" src="https://pub-50958590c68b4cbeb89ccde57ab7b9e5.r2.dev/Fashion_model_in_elegant_casual_style__blue_oversized_shirt%2C_beige_midi_skirt%2C_sunglasses._She_poses_seed333857552.mp4"></video>
</div>
<div className="flex z-20 w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0 items-end justify-between">
<div className="">
<span className="block text-[10px] uppercase font-medium text-white/60 tracking-widest mb-2"></span>
<h3 className="text-2xl font-light italic text-white tracking-wide font-serif"></h3>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#F5F5F5] text-[#1A1A1A] font-sans" id="services-excellence">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-full border-[#D1D1D1] border-t border-l mr-auto ml-auto">

<div className="lg:col-span-1 lg:row-span-2 border-r border-b border-[#D1D1D1] relative group h-[500px] lg:h-auto overflow-hidden">
<img alt="Lab Assistant Perfect Fit" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba81c016-5855-4ea0-8c45-fc4f9909b0c2_800w.jpg"/>
<div className="bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-white text-3xl font-semibold uppercase tracking-tight leading-tight font-oswald">100% ГАРАНТИЯ ИДЕАЛЬНОЙ ПОСАДКИ</h3>
</div>
</div>

<div className="lg:col-span-2 md:p-12 flex flex-col group overflow-hidden text-white bg-[#4A3728] border-[#D1D1D1] border-r border-b pt-8 pr-8 pb-8 pl-8 relative justify-between">

<div className="blur-[80px] -translate-y-1/2 group-hover:bg-white/10 transition-colors duration-700 bg-white/5 w-64 h-64 rounded-full absolute top-0 right-0 translate-x-1/2"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-6 text-white">
<div className="w-2 h-2 bg-white rounded-full"></div>
<span className="text-xs font-mono uppercase tracking-widest">ИННОВАЦИИ</span>
</div>
<h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-tight mb-6 font-oswald text-white">ТЕХНОЛОГИЧЕСКОЕ ПРЕВОСХОДСТВО</h3>
<p className="text-white font-light text-lg leading-relaxed max-w-md">
          150+ автоматизированных станков. Точность до 0,1 мм. Минимизация человеческого фактора для стабильного премиум-качества.
        </p>
</div>
<div className="relative z-10 mt-12 flex justify-end">
<iconify-icon className="text-white/40 group-hover:text-white group-hover:rotate-90 transition-all duration-500" height="32" icon="lucide:cpu" width="32"></iconify-icon>
</div>
</div>

<div className="lg:col-span-1 border-r border-b border-[#D1D1D1] p-8 md:p-12 flex flex-col bg-[#F5F5F5] hover:bg-white transition-colors duration-500 group">
<span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1A1A]/40 mb-auto group-hover:text-[#1A1A1A] transition-colors">01 / КАТЕГОРИИ</span>
<div className="mt-8">
<h3 className="text-xl font-semibold uppercase tracking-[0.1em] mb-4 font-oswald">УСЛУГИ: МУЖСКАЯ ОДЕЖДА</h3>
<p className="text-[#1A1A1A]/70 font-light text-sm leading-relaxed">
          Рубашки премиум-класса, casual-группы и классический пошив с инженерной точностью.
        </p>
</div>
<div className="mt-8 pt-8 border-t border-[#D1D1D1] group-hover:border-[#1A1A1A] transition-colors">
<iconify-icon className="text-[#1A1A1A]" height="20" icon="lucide:shirt" width="20"></iconify-icon>
</div>
</div>

<div className="lg:col-span-1 border-r border-b border-[#D1D1D1] relative group h-[300px] lg:h-auto overflow-hidden">
<img alt="Precision Seam Detail" className="transition-transform duration-1000 group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5772aefb-3e51-4622-8399-df91ed8c1a91_800w.png"/>
<div className="group-hover:bg-transparent transition-colors duration-500 bg-[#1A1A1A]/10 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="lg:col-span-1 border-r border-b border-[#D1D1D1] p-8 md:p-12 flex flex-col bg-[#F5F5F5] hover:bg-white transition-colors duration-500 group">
<span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1A1A]/40 mb-auto group-hover:text-[#1A1A1A] transition-colors">02 / КАТЕГОРИИ</span>
<div className="mt-8">
<h3 className="text-xl font-semibold uppercase tracking-[0.1em] mb-4 font-oswald">УСЛУГИ: ЖЕНСКАЯ ОДЕЖДА</h3>
<p className="text-[#1A1A1A]/70 font-light text-sm leading-relaxed">
          Сложные ткани, премиальный трикотаж и блузы. От 400 единиц на модель.
        </p>
</div>
<div className="mt-8 pt-8 border-t border-[#D1D1D1] group-hover:border-[#1A1A1A] transition-colors">
<iconify-icon className="text-[#1A1A1A]" height="20" icon="lucide:scissors" width="20"></iconify-icon>
</div>
</div>

<div className="lg:col-span-1 md:p-12 flex flex-col hover:bg-[#4A3728] hover:text-white transition-colors duration-500 group cursor-default bg-[#F5F5F5] border-[#D1D1D1] border-r border-b pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<div className="text-center">
<span className="block text-xs font-mono uppercase tracking-widest opacity-60 mb-2">МИНИМАЛЬНЫЙ ЗАКАЗ</span>
<h3 className="text-4xl font-semibold uppercase tracking-tight font-oswald mb-2">400-500</h3>
<span className="block text-sm font-medium uppercase tracking-[0.2em]">ШТ / НА МОДЕЛЬ</span>
</div>
</div>

<div className="lg:col-span-4 border-r border-b border-[#D1D1D1] p-8 md:p-16 bg-[#F5F5F5] hover:bg-white transition-colors duration-500 relative overflow-hidden group">
<div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#D1D1D1]/10 to-transparent pointer-events-none"></div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-12 relative z-10">
<div className="md:w-1/3">
<h3 className="text-3xl md:text-4xl font-semibold uppercase tracking-tight font-oswald mb-2">ПРОИЗВОДСТВЕННЫЕ МОЩНОСТИ</h3>
<div className="h-1 w-20 bg-[#1A1A1A] mt-4 group-hover:w-full transition-all duration-700 ease-out"></div>
</div>
<div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="">
<h4 className="text-lg font-semibold uppercase tracking-wide mb-2">ОБЪЕМ</h4>
<p className="text-[#1A1A1A]/70 font-light text-sm leading-relaxed">40 000 единиц в месяц — мощности для крупного ритейла.</p>
</div>
<div className="">
<h4 className="text-lg font-semibold uppercase tracking-wide mb-2">СКОРОСТЬ</h4>
<p className="text-[#1A1A1A]/70 font-light text-sm leading-relaxed">7 дней на стандартные партии благодаря оптимизированным процессам.</p>
</div>
<div className="">
<h4 className="text-lg font-semibold uppercase tracking-wide mb-2">ЭКСПОРТ</h4>
<p className="text-[#1A1A1A]/70 font-light text-sm leading-relaxed">Полный пакет документов (ЕАЭС) и логистическая поддержка.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-grey-light overflow-hidden bg-[#FEFDFB] pt-32 pb-32 relative" id="production-types">
<div className="max-w-[1400px] mx-auto px-6 relative z-10">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
<div className="max-w-2xl">
<span className="text-premium text-xs font-bold tracking-[0.2em] uppercase mb-4 block font-manrope">Ассортимент</span>
<h2 className="text-5xl md:text-7xl font-light text-dark leading-none tracking-[0.05em] font-oswald uppercase">
                    Что мы шьем
                </h2>
</div>
<div className="max-w-sm text-left md:text-right">
<p className="text-grey-dark text-base font-light tracking-wide font-manrope leading-relaxed">
                    Производственные возможности и ассортимент для оптовых заказов BAZIKO PREMIUM.
                </p>
</div>
</div>

<div className="flex flex-col lg:flex-row h-[700px] gap-0 border border-grey-light bg-white">

<div className="group relative flex-1 hover:flex-[2] border-b lg:border-b-0 lg:border-r border-grey-light last:border-0 overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">

<div className="absolute inset-0 z-0">
<img alt="Women's Collection" className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out scale-110 group-hover:scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5102adb-a0f6-4f63-9278-bb77331d9751_800w.jpg"/>
<div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>

<div className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500 group-hover:opacity-0 bg-surface group-hover:bg-transparent">
<span className="text-6xl font-oswald font-light text-grey-light/50 absolute top-6 right-6">01</span>
<h3 className="text-2xl font-oswald font-normal text-dark uppercase tracking-wide lg:-rotate-90 lg:origin-bottom-left lg:translate-x-8 lg:-translate-y-8 whitespace-nowrap">
                        Женская коллекция
                    </h3>
</div>

<div className="absolute inset-0 z-10 p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-700 delay-100">
<div className="border-l-2 border-premium pl-6 backdrop-blur-md bg-dark/10 p-6 max-w-lg">
<span className="text-premium text-xs font-bold tracking-[0.2em] uppercase mb-2 block font-manrope">01 / BAZIKO WOMAN</span>
<h3 className="text-4xl font-oswald font-medium text-white uppercase tracking-tight mb-4">Рубашки и Блузки</h3>
<p className="text-white/90 text-sm font-manrope font-light leading-relaxed max-w-sm">
                            Сложный крой, премиальный хлопок и шелк. Разработка лекал любой сложности. От 500 единиц.
                        </p>
</div>
</div>
</div>

<div className="group relative flex-1 hover:flex-[2] border-b lg:border-b-0 lg:border-r border-grey-light last:border-0 overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">

<div className="absolute inset-0 z-0">
<img alt="Men's Collection" className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out scale-110 group-hover:scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e17a529-f60c-49be-8487-d9a6d6d07de6_800w.png"/>
<div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>
<div className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500 group-hover:opacity-0 bg-surface group-hover:bg-transparent">
<span className="text-6xl font-oswald font-light text-grey-light/50 absolute top-6 right-6">02</span>
<h3 className="text-2xl font-oswald font-normal text-dark uppercase tracking-wide lg:-rotate-90 lg:origin-bottom-left lg:translate-x-8 lg:-translate-y-8 whitespace-nowrap">
                        Мужская коллекция
                    </h3>
</div>
<div className="absolute inset-0 z-10 p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-700 delay-100">
<div className="border-l-2 border-premium pl-6 backdrop-blur-md bg-dark/10 p-6 max-w-lg">
<span className="text-premium text-xs font-bold tracking-[0.2em] uppercase mb-2 block font-manrope">02 / BAZIKO MAN</span>
<h3 className="text-4xl font-oswald font-medium text-white uppercase tracking-tight mb-4">Мужские сорочки</h3>
<p className="text-white/90 text-sm font-manrope font-light leading-relaxed max-w-sm">
                            Классика и casual. Идеальная посадка воротника и манжет. Технология Non-Iron.
                        </p>
</div>
</div>
</div>

<div className="group relative flex-1 hover:flex-[2] border-b lg:border-b-0 lg:border-r border-grey-light last:border-0 overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">

<div className="absolute inset-0 z-0">
<img alt="Kids Collection" className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out scale-110 group-hover:scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed72aa6d-906a-40a9-8cb5-aa76a6bc5e9d_800w.jpg"/>
<div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>
<div className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500 group-hover:opacity-0 bg-surface group-hover:bg-transparent">
<span className="text-6xl font-oswald font-light text-grey-light/50 absolute top-6 right-6">03</span>
<h3 className="text-2xl font-oswald font-normal text-dark uppercase tracking-wide lg:-rotate-90 lg:origin-bottom-left lg:translate-x-8 lg:-translate-y-8 whitespace-nowrap">
                        Детская одежда
                    </h3>
</div>
<div className="absolute inset-0 z-10 p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-700 delay-100">
<div className="border-l-2 border-premium pl-6 backdrop-blur-md bg-dark/10 p-6 max-w-lg">
<span className="text-premium text-xs font-bold tracking-[0.2em] uppercase mb-2 block font-manrope">03 / BAZIKO KIDS</span>
<h3 className="text-4xl font-oswald font-medium text-white uppercase tracking-tight mb-4">Детские рубашки</h3>
<p className="text-white/90 text-sm font-manrope font-light leading-relaxed max-w-sm">
                            Натуральные гипоаллергенные ткани. Прочные швы. Школьная форма и праздничные модели.
                        </p>
</div>
</div>
</div>

<div className="group relative flex-1 hover:flex-[2] border-b lg:border-b-0 lg:border-r border-grey-light last:border-0 overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
<div className="absolute inset-0 z-0">
<img alt="Dresses" className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out scale-110 group-hover:scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8ac61966-f86a-4e76-aa7d-321aa2573b0a_800w.jpg"/>
<div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>
<div className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500 group-hover:opacity-0 bg-surface group-hover:bg-transparent">
<span className="text-6xl font-oswald font-light text-grey-light/50 absolute top-6 right-6">04</span>
<h3 className="text-2xl font-oswald font-normal text-dark uppercase tracking-wide lg:-rotate-90 lg:origin-bottom-left lg:translate-x-8 lg:-translate-y-8 whitespace-nowrap">
                        Платья и Блузки
                    </h3>
</div>
<div className="absolute inset-0 z-10 p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-700 delay-100">
<div className="border-l-2 border-premium pl-6 backdrop-blur-md bg-dark/10 p-6 max-w-lg">
<span className="text-premium text-xs font-bold tracking-[0.2em] uppercase mb-2 block font-manrope">04 / BAZIKO ATELIER</span>
<h3 className="text-4xl font-oswald font-medium text-white uppercase tracking-tight mb-4">Индивидуальные заказы</h3>
<p className="text-white/90 text-sm font-manrope font-light leading-relaxed max-w-sm">
                            Работа по вашим эскизам. Помощь в подборе тканей. Эксклюзивное качество пошива.
                        </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden z-10 bg-white w-full mt-32 pt-20 pb-20 relative" id="perspective-gallery">
<style>
        @keyframes mobileCarouselSpin {
            0% { transform: rotateY(0deg); }
            100% { transform: rotateY(-360deg); }
        }
        @keyframes cardFocus {
            0%, 100% {
                transform: scale(1.2);
                opacity: 1;
                filter: blur(0px);
            }
            16.66%, 83.33% {
                transform: scale(0.8);
                opacity: 0.6;
                filter: blur(2px);
            }
            50% {
                transform: scale(0.6);
                opacity: 0.2;
                filter: blur(4px);
            }
        }
        .mobile-carousel-container:hover .mobile-carousel-track,
        .mobile-carousel-container:active .mobile-carousel-track,
        .mobile-carousel-container:hover .carousel-card-inner,
        .mobile-carousel-container:active .carousel-card-inner {
            animation-play-state: paused !important;
        }
        .mobile-carousel-track {
            animation: mobileCarouselSpin 20s linear infinite;
            transform-style: preserve-3d;
        }
        .carousel-card-inner {
            animation: cardFocus 20s linear infinite;
            width: 100%;
            height: 100%;
            will-change: transform, opacity, filter;
        }
    </style>
<div className="max-w-[1400px] mr-auto ml-auto pr-6 pl-6">

<div className="text-center mb-12">
<span className="text-xs font-semibold tracking-[0.3em] text-dark/40 uppercase font-manrope">BAZIKO PREMIUM</span>
</div>

<div className="hidden lg:flex justify-center items-center gap-6 h-[600px] w-full" style={{perspective: '1200px'}}>

<div className="group relative w-1/3 h-full bg-grey-light transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] transform preserve-3d cursor-pointer hover:z-20 shadow-2xl hover:[transform:rotateY(0deg)_scale(1.05)]" style={{transform: 'rotateY(20deg) scale(0.95)'}}>
<img alt="Fashion Texture" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="group-hover:bg-dark/10 transition-colors duration-700 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba4c0113-9263-49f6-8bac-0e8260854083_800w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<button className="-translate-x-1/2 -translate-y-1/2 text-dark group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-100 cursor-pointer text-xs font-light tracking-widest font-manrope bg-white opacity-0 rounded pt-3 pr-8 pb-3 pl-8 absolute top-1/2 left-1/2 scale-90" onclick="router('/galereya'); return false;window.location.href='/gallery'" role="button">
                     В ГАЛЕРЕЮ
                 </button>
</div>

<div className="group relative w-1/3 h-full bg-grey-light transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] transform preserve-3d cursor-pointer hover:z-20 shadow-2xl hover:[transform:rotateY(0deg)_scale(1.05)]" style={{transform: 'rotateY(20deg) scale(0.95)'}}>
<img alt="Industrial Minimal" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0220fa5c-a2c1-4438-b157-e54a8b232534_800w.jpg"/>
<div className="group-hover:bg-dark/10 transition-colors duration-700 absolute top-0 right-0 bottom-0 left-0"></div>
<button className="-translate-x-1/2 -translate-y-1/2 text-dark group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-100 cursor-pointer text-xs font-light tracking-widest font-manrope bg-white opacity-0 rounded pt-3 pr-8 pb-3 pl-8 absolute top-1/2 left-1/2 scale-90" onclick="router('/galereya'); return false;window.location.href='/gallery'" role="button">
                     В ГАЛЕРЕЮ
                 </button>
</div>

<div className="group relative w-1/3 h-full bg-grey-light transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] transform preserve-3d cursor-pointer hover:z-20 shadow-2xl hover:[transform:rotateY(0deg)_scale(1.05)]" style={{transform: 'rotateY(20deg) scale(0.95)'}}>
<img alt="Fashion Details" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-dark/10 transition-colors duration-700 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba81c016-5855-4ea0-8c45-fc4f9909b0c2_800w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<button className="-translate-x-1/2 -translate-y-1/2 text-dark group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-100 cursor-pointer text-xs font-light tracking-widest font-manrope bg-white opacity-0 rounded pt-3 pr-8 pb-3 pl-8 absolute top-1/2 left-1/2 scale-90" onclick="router('/galereya'); return false;window.location.href='/gallery'" role="button">
                     В ГАЛЕРЕЮ
                 </button>
</div>
</div>

<div className="lg:hidden mobile-carousel-container flex overflow-hidden touch-pan-y w-full h-[500px] relative items-center justify-center" style={{perspective: '1200px', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)'}}>
<style>
        @keyframes mobileCarouselSpin3D {
            0% { transform: rotateY(0deg); }
            100% { transform: rotateY(-360deg); }
        }
        .track-3d {
            animation: mobileCarouselSpin3D 15s linear infinite;
            transform-style: preserve-3d;
        }
        .track-3d:hover, .track-3d:active {
            animation-play-state: paused;
        }
    </style>
<div className="track-3d relative w-[220px] h-[320px]">

<div className="absolute inset-0" style={{transformStyle: 'preserve-3d'}}>
<div className="w-full h-full rounded-sm shadow-2xl overflow-hidden bg-grey-light relative group">
<img alt="Fashion Texture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/45"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 bg-dark/10"></div>
<button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur text-dark text-[10px] font-semibold tracking-widest px-6 py-3 rounded shadow-lg font-manrope whitespace-nowrap opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" onclick="router('/galereya'); return false;">
                    В ГАЛЕРЕЮ
                </button>
</div>
</div>

<div className="absolute inset-0" style={{transformStyle: 'preserve-3d'}}>
<div className="w-full h-full rounded-sm shadow-2xl overflow-hidden bg-grey-light relative group">
<img alt="Industrial Minimal" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/45"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 bg-dark/10"></div>
<button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur text-dark text-[10px] font-semibold tracking-widest px-6 py-3 rounded shadow-lg font-manrope whitespace-nowrap opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" onclick="router('/galereya'); return false;">
                    В ГАЛЕРЕЮ
                </button>
</div>
</div>

<div className="absolute inset-0" style={{transformStyle: 'preserve-3d'}}>
<div className="w-full h-full rounded-sm shadow-2xl overflow-hidden bg-grey-light relative group">
<img alt="Fashion Details" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a9a18e30-7444-4e5c-9714-f55c1ac4508a_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/45"></div>
<div className="group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur text-dark text-[10px] font-semibold tracking-widest px-6 py-3 rounded shadow-lg font-manrope whitespace-nowrap opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" onclick="router('/galereya'); return false;">
                    В ГАЛЕРЕЮ
                </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full bg-dark overflow-clip" id="categories-gallery">

<div className="w-full relative">

<div className="sticky top-0 z-10 w-full h-screen bg-[#FEFDFB] flex flex-col md:flex-row border-b border-dark/10 overflow-hidden">

<div className="md:w-1/2 md:h-full flex flex-col md:p-12 lg:p-16 md:border-b-0 md:border-r border-dark w-full h-1/2 border-b pt-6 pr-6 pb-6 pl-6 relative justify-between">

<div className="flex justify-between items-start w-full">
<div className="flex flex-col gap-2">
<span className="font-space-mono text-[10px] uppercase tracking-widest text-grey-dark">( 01 — 03 )</span>
<h3 className="font-oswald text-xl font-medium uppercase tracking-tight text-dark">BAZIKO PREMIUM</h3>
</div>
<span className="font-space-mono text-[10px] uppercase tracking-widest text-dark border border-dark px-3 py-1 rounded-full">New Season</span>
</div>

<div className="flex flex-col gap-6 md:pt-0 mt-auto mb-auto pt-8 gap-x-6 gap-y-6">
<h2 className="relative z-10 w-full break-words font-oswald text-5xl font-medium uppercase leading-[0.85] tracking-tighter text-dark md:text-6xl lg:text-7xl xl:text-8xl">
        Женская <span className="text-premium">Коллекция</span>
</h2>
<p className="font-manrope text-base md:text-lg text-grey-dark max-w-md font-light leading-relaxed">
        Искусство создания женской одежды. От элегантных блуз до сложных конструктивных решений. Премиальные ткани и безупречная посадка.
    </p>

<div className="flex gap-8 border-dark/10 w-full max-w-md border-t pt-4 gap-x-8 gap-y-8 items-center -mt-6 relative z-20">
<a className="group flex items-center justify-between w-full" href="/gallery">
<span className="uppercase text-dark transition-colors group-hover:text-premium text-xs font-bold tracking-widest font-space-mono" style={{display: 'inline-flex', alignItems: 'center', gap: '0.75rem'}}>Смотреть каталог</span>
<div className="flex border-dark transition-all duration-300 group-hover:bg-dark group-hover:text-white w-10 h-10 border rounded-full items-center justify-center">
<svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover:-rotate-45" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</div>
</a>
</div>

<button className="group flex items-center gap-4 w-full md:w-auto justify-between md:justify-start mt-2">
</button>
</div>

<div className="flex md:pt-8 border-dark/10 md:mt-0 w-full border-t mt-auto pt-6 items-center justify-between hidden"></div>
</div>

<div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group bg-grey-light">
<img alt="Womens Collection" className="transition-transform duration-1000 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5102adb-a0f6-4f63-9278-bb77331d9751_1600w.jpg"/>

<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
<div className="bg-white/95 backdrop-blur-sm p-4 border border-dark/10 max-w-xs shadow-lg">
<p className="font-manrope text-xs text-dark leading-relaxed">
<span className="font-bold block mb-1 tracking-widest uppercase text-[10px]">Ткани</span>
                            Шелк, Египетский хлопок, Вискоза. Разработка лекал по эскизам.
                        </p>
</div>
</div>
</div>
</div>

<div className="sticky top-0 z-20 w-full h-screen bg-[#F5F5F5] flex flex-col md:flex-row border-t border-b border-dark overflow-hidden shadow-2xl shadow-black/5">

<div className="md:w-1/2 md:h-full flex flex-col md:p-12 lg:p-16 md:border-b-0 md:border-r border-dark w-full h-1/2 border-b pt-6 pr-6 pb-6 pl-6 relative justify-between">

<div className="flex justify-between items-start w-full">
<div className="flex flex-col gap-2 min-w-0">
<span className="font-space-mono text-[10px] uppercase tracking-widest text-grey-dark whitespace-nowrap">( 02 — 03 )</span>
<h3 className="font-oswald text-xl font-medium uppercase tracking-tight text-dark break-words">BAZIKO PREMIUM</h3>
</div>
</div>

<div className="flex flex-col gap-6 mt-auto mb-auto pt-8 md:pt-0 min-w-0">
<h2 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-medium uppercase leading-[0.85] tracking-tighter text-dark break-words">
                        Мужская <span className="text-[#857262]">Линия</span>
</h2>
<p className="font-manrope text-base md:text-lg text-grey-dark max-w-md font-light leading-relaxed break-words">
                        Строгая классика и современный casual. Сорочки, которые подчеркивают статус. Идеальная геометрия лекал и долговечность в каждой строчке.
                    </p>
</div>

<div className="flex items-center justify-between w-full pt-6 md:pt-8 border-t border-dark/10 mt-auto md:mt-0 gap-4 min-w-0">
<span className="font-space-mono text-[10px] uppercase tracking-widest text-grey-dark hidden md:block whitespace-nowrap">Сделано в Бишкеке</span>
<button className="group flex md:w-auto md:justify-start min-w-0 cursor-pointer w-full gap-x-4 gap-y-4 items-center justify-between" onclick="window.location.href='/gallery'" role="button">
<span className="font-space-mono text-xs font-bold uppercase tracking-widest text-dark group-hover:text-[#857262] transition-colors break-words">Смотреть каталог</span>
<div className="border-dark flex group-hover:bg-dark group-hover:text-white transition-all duration-300 shrink-0 w-10 h-10 border rounded-full items-center justify-center">
<svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover:-rotate-45" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</div>
</button>
</div>
</div>

<div className="md:w-1/2 md:h-full overflow-hidden group w-full h-1/2 relative">
<img 034ba1a1-90e4-48ed-b274-8217cefabb07_1600w.jpg"="" alt="Mens Collection" assets="" className="transition-transform duration-1000 group-hover:scale-105 object-top w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" datairqrkdgbmvpwutwuwj.supabase.co="" object="" public="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5ac18d6-5f21-4fd2-8774-8ff960dd283e_1600w.jpg" storage="" v1=""/>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
<div className="bg-white/95 backdrop-blur-sm p-4 border border-dark/10 max-w-xs shadow-lg">
<p className="font-manrope text-xs text-dark leading-relaxed">
<span className="font-bold block mb-1 tracking-widest uppercase text-[10px]">Технологии</span>
                            Non-Iron, Проклеенные швы, Усиленные воротники.
                        </p>
</div>
</div>
</div>
</div>

<div className="sticky top-0 z-30 w-full h-screen bg-[#EBE3DD] flex flex-col md:flex-row border-t border-dark overflow-hidden shadow-2xl shadow-black/10">

<div className="md:w-1/2 md:h-full flex flex-col md:p-12 lg:p-16 md:border-b-0 md:border-r border-dark w-full h-1/2 border-b pt-6 pr-6 pb-6 pl-6 relative justify-between">

<div className="flex justify-between items-start w-full min-w-0 gap-4">
<div className="flex flex-col gap-2 min-w-0">
<span className="font-space-mono text-[10px] uppercase tracking-widest text-grey-dark whitespace-nowrap">( 03 — 03 )</span>
<h3 className="font-oswald text-xl font-medium uppercase tracking-tight text-dark break-words">BAZIKO PREMIUM</h3>
</div>
</div>

<div className="flex flex-col gap-6 mt-auto mb-auto pt-8 md:pt-0 min-w-0">
<h2 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-medium uppercase leading-[0.85] tracking-tighter text-dark break-words max-w-full">
                        Детская <span className="text-white drop-shadow-sm">Одежда</span>
</h2>
<p className="font-manrope text-base md:text-lg text-grey-dark max-w-md font-light leading-relaxed break-words">
                        Безопасные материалы и комфорт для активных движений. Школьная форма и повседневный стиль, которые нравятся детям и родителям.
                    </p>
</div>

<div className="flex items-center justify-between w-full pt-6 md:pt-8 border-t border-dark/10 mt-auto md:mt-0 gap-4 min-w-0">
<span className="font-space-mono text-[10px] uppercase tracking-widest text-grey-dark hidden md:block whitespace-nowrap">Сделано в Бишкеке</span>
<button className="group flex md:w-auto md:justify-start min-w-0 cursor-pointer w-full gap-x-4 gap-y-4 items-center justify-between" onclick="window.location.href='/gallery'" role="button">
<span className="font-space-mono text-xs font-bold uppercase tracking-widest text-dark group-hover:text-white transition-colors break-words">Смотреть каталог</span>
<div className="border-dark flex group-hover:bg-dark group-hover:text-white transition-all duration-300 shrink-0 w-10 h-10 border rounded-full items-center justify-center">
<svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover:-rotate-45" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</div>
</button>
</div>
</div>

<div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group bg-grey-light">
<img alt="Kids Collection" className="transition-transform duration-1000 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed72aa6d-906a-40a9-8cb5-aa76a6bc5e9d_1600w.jpg"/>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
<div className="bg-white/95 backdrop-blur-sm p-4 border border-dark/10 max-w-xs shadow-lg">
<p className="font-manrope text-xs text-dark leading-relaxed">
<span className="font-bold block mb-1 tracking-widest uppercase text-[10px]">Материалы</span>
                            Гипоаллергенный хлопок, Soft-touch трикотаж. Прочные швы.
                        </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-y border-grey-light pt-24 pb-24" id="process-timeline">
<div className="max-w-[1200px] mr-auto ml-auto pr-6 pl-6">

<div className="text-center mb-16 md:mb-24">
<h2 className="md:text-5xl text-dark text-4xl font-light tracking-tight mb-4">7 шагов к идеальному
                заказу</h2>
<p className="text-grey-dark text-lg font-light tracking-wide">Путь от первой встречи до готового изделия</p>
</div>

<div className="relative mb-20">

<div className="hidden lg:block z-0 bg-gradient-to-r from-premium via-[#C9B5AA] to-taupe opacity-30 w-full h-[3px] rounded-sm absolute top-[45px] left-0">
</div>

<div className="flex flex-col lg:flex-row justify-between relative z-10 gap-8 lg:gap-0">

</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-dark -mt-8 border-t border-l">

<div className="group relative bg-white border-r border-b border-dark h-full overflow-hidden cursor-pointer">

<div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
<img alt="Consultation" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-500 group-hover:grayscale-0" src="https://bazikostyle.com/wp-content/uploads/2024/04/IMG_2094-%E2%80%94-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-dark/30 transition-opacity duration-500 group-hover:opacity-0">
</div>
</div>

<div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
<div className="flex items-center gap-3 mb-2">
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-white/80">( 01 / 07 )</span>
<div className="h-px w-8 bg-white/60"></div>
</div>
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter text-white">
                        Консультация</h3>
<div className="mt-4 flex items-center gap-2 text-white/80">
<iconify-icon height="16" icon="lucide:arrow-up-right" width="16"></iconify-icon>
<span className="text-[10px] font-space-mono uppercase tracking-widest">Подробнее</span>
</div>
</div>

<div className="relative z-20 h-full bg-white p-6 md:p-8 flex flex-col opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
<div className="flex justify-between items-start border-b border-dark pb-4 mb-8">
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-dark/60">( 01 / 07 )</span>
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-dark">30-60 МИНУТ</span>
</div>
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter mb-6 text-dark text-premium transition-colors">
                        Консультация</h3>
<p className="font-manrope text-sm leading-relaxed text-grey-dark mb-10 flex-grow max-w-xs">Первый шаг —
                        это диалог. Мы встречаемся онлайн или в студии, чтобы понять ваши потребности.</p>
<div className="mt-auto pt-6 border-t border-dashed border-dark/30">
<ul className="space-y-2 font-space-mono text-[10px] uppercase tracking-wide text-dark">
<li className="flex items-center gap-3">
<span className="text-premium font-semibold text-sm">+</span> Образ жизни и стиль
                            </li>
<li className="flex items-center gap-3">
<span className="text-premium font-semibold text-sm">+</span> Предпочтения по цвету
                            </li>
</ul>
</div>
</div>
</div>

<div className="group relative bg-white border-r border-b border-dark p-6 md:p-8 flex flex-col h-full hover:bg-[#fafafa] transition-colors duration-300">
<div className="flex justify-between items-start border-b border-dark pb-4 mb-8">
<span className="font-space-mono text-[10px] font-bold uppercase tracking-widest text-dark/60">( 02 / 07 )</span>
<span className="font-space-mono text-[10px] font-bold uppercase tracking-widest text-dark">1-2 ДНЯ</span>
</div>
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter mb-6 text-dark group-hover:text-premium transition-colors">
                    ВыборТкани</h3>
<p className="font-manrope text-sm leading-relaxed text-grey-dark mb-10 flex-grow max-w-xs">Тактильный выбор
                    из каталога премиальных тканей Италии и Турции.</p>
<div className="mt-auto pt-6 border-t border-dashed border-dark/30">
<ul className="space-y-2 font-space-mono text-[10px] uppercase tracking-wide text-dark">
<li className="flex items-center gap-3"><span className="text-premium font-bold text-sm">+</span> Хлопок
                            100% (Egyptian)</li>
<li className="flex items-center gap-3"><span className="text-premium font-bold text-sm">+</span> Лён
                            100% для лета</li>
</ul>
</div>
</div>

<div className="group relative bg-white border-r border-b border-dark h-full overflow-hidden cursor-pointer">

<div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
<img alt="Снятие Мерок" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-500 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-dark/30 transition-opacity duration-500 group-hover:opacity-0">
</div>
</div>

<div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
<div className="flex items-center gap-3 mb-2">
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-white/80">( 03 / 07 )</span>
<div className="h-px w-8 bg-white/60"></div>
</div>
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter text-white">
                        СнятиеМерок</h3>
<div className="mt-4 flex items-center gap-2 text-white/80">
<iconify-icon height="16" icon="lucide:arrow-up-right" width="16"></iconify-icon>
<span className="text-[10px] font-space-mono uppercase tracking-widest">Подробнее</span>
</div>
</div>

<div className="relative z-20 h-full bg-white p-6 md:p-8 flex flex-col opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
<div className="flex justify-between items-start border-b border-dark pb-4 mb-8">
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-dark/60">( 03 / 07 )</span>
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-dark">2-3 ДНЯ</span>
</div>
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter mb-6 text-dark group-hover:text-premium transition-colors">
                        СнятиеМерок</h3>
<p className="font-manrope text-sm leading-relaxed text-grey-dark mb-10 flex-grow max-w-xs">
                        Профессиональный портной снимает более 15 параметров для идеальной посадки.</p>
<div className="mt-auto pt-6 border-t border-dashed border-dark/30">
<ul className="space-y-2 font-space-mono text-[10px] uppercase tracking-wide text-dark">
<li className="flex items-center gap-3"><span className="text-premium font-bold text-sm">+</span>
                                Учет осанки</li>
<li className="flex items-center gap-3"><span className="text-premium font-bold text-sm">+</span>
                                Обхваты и длины</li>
</ul>
</div>
</div>
</div>

<div className="group relative bg-white border-r border-b border-dark p-6 md:p-8 flex flex-col h-full hover:bg-[#fafafa] transition-colors duration-300">
<div className="flex justify-between items-start border-b border-dark pb-4 mb-8">
<span className="font-space-mono text-[10px] font-bold uppercase tracking-widest text-dark/60">( 04 / 07 )</span>
<span className="font-space-mono text-[10px] font-bold uppercase tracking-widest text-dark">2-3 ДНЯ</span>
</div>
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter mb-6 text-dark group-hover:text-premium transition-colors">
                    ДизайнПроекта</h3>
<p className="font-manrope text-sm leading-relaxed text-grey-dark mb-10 flex-grow max-w-xs">Создание
                    технической спецификации и выбор визуальных деталей.</p>
<div className="mt-auto pt-6 border-t border-dashed border-dark/30">
<ul className="space-y-2 font-space-mono text-[10px] uppercase tracking-wide text-dark">
<li className="flex items-center gap-3"><span className="text-premium font-bold text-sm">+</span> Форма
                            воротника</li>
<li className="flex items-center gap-3"><span className="text-premium font-bold text-sm">+</span>
                            Манжеты и пуговицы</li>
</ul>
</div>
</div>

<div className="group relative bg-white border-r border-b border-dark h-full overflow-hidden cursor-pointer">

<div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
<img alt="Fitting Mockup" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-500 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-dark/30 transition-opacity duration-500 group-hover:opacity-0">
</div>
</div>

<div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
<div className="flex items-center gap-3 mb-2">
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-white/80">( 05 / 07 )</span>
<div className="h-px w-8 bg-white/60"></div>
</div>
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter text-white">
                        ПримеркаМакета</h3>
<div className="mt-4 flex items-center gap-2 text-white/80">
<iconify-icon height="16" icon="lucide:arrow-up-right" width="16"></iconify-icon>
<span className="text-[10px] font-space-mono uppercase tracking-widest">Подробнее</span>
</div>
</div>

<div className="relative z-20 h-full bg-white p-6 md:p-8 flex flex-col opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
<div className="flex justify-between items-start border-b border-dark pb-4 mb-8">
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-dark/60">( 05 / 07 )</span>
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-dark">5-7 ДНЕЙ</span>
</div>
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter mb-6 text-dark group-hover:text-premium transition-colors">
                        ПримеркаМакета</h3>
<p className="font-manrope text-sm leading-relaxed text-grey-dark mb-10 flex-grow max-w-xs">Пошив
                        чернового
                        макета (toile) для проверки лекал на вашей фигуре.</p>
<div className="border-dashed border-dark/30 border-t mt-auto pt-6">
<form action="https://api.web3forms.com/submit" className="space-y-4" method="POST">
<input name="access_key" type="hidden" value="9808ec0d-106a-4f6f-891e-9dc07a4175f8"/>
<input name="subject" type="hidden" value="Заявка с сайта BAZIKO PREMIUM"/>
<input name="from_name" type="hidden" value="BAZIKO PREMIUM — Форма заявки"/>
<input className="hidden" name="botcheck" style={{display: 'none'}} type="checkbox"/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="group/input">
<label className="font-space-mono text-[10px] uppercase tracking-widest text-dark/60 mb-2 block group-focus-within/input:text-dark transition-colors">Ваше имя</label>
<input className="w-full bg-white border border-dark p-3 text-sm font-manrope placeholder:text-dark/20 focus:outline-none focus:ring-1 focus:ring-dark focus:border-dark transition-all" name="name" placeholder="Иван Петров" required="" type="text"/>
</div>
<div className="group/input">
<label className="font-space-mono text-[10px] uppercase tracking-widest text-dark/60 mb-2 block group-focus-within/input:text-dark transition-colors">Email</label>
<input className="w-full bg-white border border-dark p-3 text-sm font-manrope placeholder:text-dark/20 focus:outline-none focus:ring-1 focus:ring-dark focus:border-dark transition-all" name="email" placeholder="name@company.com" required="" type="email"/>
</div>
</div>
<div className="group/input">
<label className="font-space-mono text-[10px] uppercase tracking-widest text-dark/60 mb-2 block group-focus-within/input:text-dark transition-colors">Сообщение</label>
<textarea className="w-full bg-white border border-dark p-3 text-sm font-manrope placeholder:text-dark/20 focus:outline-none focus:ring-1 focus:ring-dark focus:border-dark transition-all" name="message" placeholder="Коротко опишите задачу: тип изделий, тираж, сроки, материалы..." required="" rows="4"></textarea>
</div>
<button className="w-full bg-dark text-white font-space-mono text-xs font-bold uppercase tracking-widest py-4 hover:bg-premium hover:text-dark transition-all duration-300 mt-2 flex items-center justify-center gap-3 group/btn" type="submit">
<span className="">Отправить</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 group-hover/btn:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-[10px] text-grey-dark text-center mt-2 font-manrope">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
</form>

</div>
</div>
</div>

<div className="group relative bg-white border-r border-b border-dark p-6 md:p-8 flex flex-col h-full hover:bg-[#fafafa] transition-colors duration-300">
<div className="flex justify-between items-start border-b border-dark pb-4 mb-8">
<span className="font-space-mono text-[10px] font-bold uppercase tracking-widest text-dark/60">( 06 / 07 )</span>
<span className="font-space-mono text-[10px] font-bold uppercase tracking-widest text-dark">3-5 ДНЕЙ</span>
</div>
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter mb-6 text-dark group-hover:text-premium transition-colors">
                    КоррекцииЛекал</h3>
<p className="font-manrope text-sm leading-relaxed text-grey-dark mb-10 flex-grow max-w-xs">Внесение
                    изменений в лекала и конструкцию после примерки.</p>
<div className="mt-auto pt-6 border-t border-dashed border-dark/30">
<ul className="space-y-2 font-space-mono text-[10px] uppercase tracking-wide text-dark">
<li className="flex items-center gap-3"><span className="text-premium font-bold text-sm">+</span> Точная
                            подгонка</li>
<li className="flex items-center gap-3"><span className="text-premium font-bold text-sm">+</span>
                            Повторная проверка</li>
</ul>
</div>
</div>

<div className="group relative bg-white border-r border-b border-dark h-full overflow-hidden cursor-pointer">

<div className="z-0 transition-transform duration-700 group-hover:scale-105 absolute top-0 right-0 bottom-0 left-0">
<img alt="Shipping" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-500 group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/55ca9304-ac13-4bfc-b92f-7042beb9d1ac_800w.jpg"/>
<div className="absolute inset-0 bg-dark/30 transition-opacity duration-500 group-hover:opacity-0">
</div>
</div>

<div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
<div className="flex items-center gap-3 mb-2">
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-white/80">( 07 / 07 )</span>
<div className="h-px w-8 bg-white/60"></div>
</div>
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter text-white">
                        Отправка</h3>
<div className="mt-4 flex items-center gap-2 text-white/80">
<iconify-icon height="16" icon="lucide:arrow-up-right" width="16"></iconify-icon>
<span className="text-[10px] font-space-mono uppercase tracking-widest">Подробнее</span>
</div>
</div>

<div className="z-20 md:p-8 flex flex-col group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out bg-white opacity-0 h-full pt-6 pr-6 pb-6 pl-6 relative translate-y-8">
<div className="flex border-dark z-20 border-b mb-8 pb-4 items-start justify-between">
<span className="text-[10px] uppercase text-dark/60 font-semibold tracking-widest font-space-mono">( 07 / 07 )</span>
<span className="text-[10px] uppercase text-dark font-semibold tracking-widest font-space-mono">1-2 ДНЯ</span>
</div>
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter mb-6 text-dark group-hover:text-premium transition-colors">
                        Отправка</h3>
<p className="leading-relaxed text-grey-dark flex-grow text-sm font-manrope max-w-xs mb-10">
                        Финальная подготовка, упаковка в фирменный кейс и передача курьеру.</p>
<div className="mt-auto pt-6 border-t border-dashed border-dark/30">
<ul className="space-y-2 font-space-mono text-[10px] uppercase tracking-wide text-dark">
<li className="flex items-center gap-3"><span className="text-premium font-bold text-sm">+</span>
                                Фирменная упаковка</li>
<li className="flex items-center gap-3"><span className="text-premium font-bold text-sm">+</span>
                                Инструкции по уходу</li>
</ul>
</div>
</div>
</div>

<div className="group relative bg-white border-r border-b border-dark p-6 md:p-8 flex flex-col h-full lg:col-span-2">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-dark pb-4 mb-8 gap-4">
<div className="flex items-center gap-4">
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-dark/60">( + )</span>
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-dark">РАСЧЕТ СТОИМОСТИ</span>
</div>
<div className="flex items-center gap-2 text-premium">
<iconify-icon height="16" icon="lucide:calculator" width="16"></iconify-icon>
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest">Индивидуально</span>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-full">
<div className="lg:w-1/2 flex flex-col justify-center">
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter mb-6 text-dark">
                            Узнайте стоимость <span className="text-grey-dark">Вашего проекта</span>
</h3>
<p className="font-manrope text-sm leading-relaxed text-grey-dark max-w-md">
                            Заполните форму, и мы свяжемся с вами для детального расчета стоимости и сроков пошива.
                            Консультация бесплатна.
                        </p>
</div>
<div className="lg:w-1/2">
<form className="flex flex-col gap-4 h-full gap-x-4 gap-y-4 justify-center">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="group/input">
<label className="font-space-mono text-[10px] uppercase tracking-widest text-dark/60 mb-2 block group-focus-within/input:text-dark transition-colors">Ваше имя</label>
<input className="w-full bg-white border border-dark p-3 text-sm font-manrope placeholder:text-dark/20 focus:outline-none focus:ring-1 focus:ring-dark focus:border-dark transition-all" placeholder="Иван Петров" type="text"/>
</div>
<div className="group/input">
<label className="font-space-mono text-[10px] uppercase tracking-widest text-dark/60 mb-2 block group-focus-within/input:text-dark transition-colors">Телефон</label>
<input className="w-full bg-white border border-dark p-3 text-sm font-manrope placeholder:text-dark/20 focus:outline-none focus:ring-1 focus:ring-dark focus:border-dark transition-all" placeholder="+7 (___) ___-__-__" type="tel"/>
</div>
</div>
<button className="w-full bg-dark text-white font-space-mono text-xs font-bold uppercase tracking-widest py-4 hover:bg-premium hover:text-dark transition-all duration-300 mt-2 flex items-center justify-center gap-3 group/btn" type="button">
<span className="">Рассчитать стоимость</span>
<iconify-icon className="group-hover/btn:translate-x-1 transition-transform" height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<p className="text-[10px] text-grey-dark text-center mt-2 font-manrope">Нажимая кнопку, вы
                                соглашаетесь с политикой конфиденциальности</p>
</form>
</div>
</div>
</div>
</div> 
</div> 
</section>


<div className="flex flex-col w-full pt-16 md:pt-24 pb-2 px-3 relative max-w-[1400px] mx-auto">

<div className="w-full mb-4 md:mb-6">
<h2 className="font-oswald text-4xl font-medium uppercase tracking-tighter text-dark leading-[1.05] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-stone-400 to-stone-600 md:text-5xl lg:text-6xl bg-clip-text text-transparent">
      Автоматизированное<br className="hidden md:block"/> швейное производство
    </h2>
</div>

<div className="hidden fixed inset-0 z-[120] bg-black/80 backdrop-blur-sm items-center justify-center p-4" id="ytInlineFullscreen-aura-emmae5crcy90orll" style={{display: 'none'}}>
<div className="w-full max-w-5xl relative">
<button aria-label="Закрыть полноэкранный просмотр" className="absolute -top-3 -right-3 w-10 h-10 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white" onclick="(function(){var m=document.getElementById('ytInlineFullscreen-aura-emmae5crcy90orll'); if(m){m.classList.add('hidden'); m.style.display='none';} var f=document.getElementById('ytInlineFullscreenFrame-aura-emmae5crcy90orll'); if(f){f.src='https://www.youtube.com/embed/umS5ydjKUK0?autoplay=0&amp;mute=1&amp;controls=1&amp;modestbranding=1&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1';}})();" type="button">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
<div className="w-full aspect-video overflow-hidden rounded-xl border border-white/20 bg-black">
<iframe allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" id="ytInlineFullscreenFrame-aura-emmae5crcy90orll" src="https://www.youtube.com/embed/umS5ydjKUK0?autoplay=0&amp;mute=1&amp;controls=1&amp;modestbranding=1&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1" title="YouTube video (fullscreen)"></iframe>
</div>
</div>
</div>

<div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:w-[360px] md:w-[420px] z-[110]" id="ytInlineMiniPlaque-aura-emmae5crcy90orll">
<div className="overflow-hidden border-grey-light shadow-black/10 border rounded-xl relative shadow-xl">
<button aria-label="Закрыть видео" className="z-20 hover:bg-white/20 transition-colors flex text-white bg-white/10 w-9 h-9 border-white/10 border rounded-lg absolute top-2 right-2 items-center justify-center" onclick="(function(){var p=document.getElementById('ytInlineMiniPlaque-aura-emmae5crcy90orll'); if(p){p.classList.add('hidden'); p.style.display='none';} var m=document.getElementById('ytInlineMiniFrame-aura-emmae5crcy90orll'); if(m){m.src='https://www.youtube.com/embed/umS5ydjKUK0?autoplay=0&amp;mute=1&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1';}})();" type="button">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
<a aria-label="Написать в WhatsApp" className="fixed sm:bottom-8 sm:right-8 z-[100] flex items-center justify-center shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a] text-white bg-[#25D366] w-14 h-14 rounded-full right-6 bottom-24 shadow-xl" href="https://wa.me/996557154550?text=Здравствуйте,%20пишу%20из%20сайта%20Baziko%20Premium" rel="noopener noreferrer" style={{bottom: 'calc(6.5rem + 25px)'}} target="_blank">
<svg aria-hidden="true" className="w-8 h-8 text-white" fill="currentColor" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20.52 3.48A11.88 11.88 0 0 0 12.06 0C5.52 0 .24 5.28.24 11.82c0 2.08.56 4.12 1.62 5.92L0 24l6.44-1.68a11.78 11.78 0 0 0 5.62 1.44h.01c6.54 0 11.82-5.28 11.82-11.82 0-3.16-1.23-6.13-3.37-8.46ZM12.06 21.78h-.01c-1.9 0-3.77-.51-5.41-1.47l-.39-.23-3.82 1 1.02-3.73-.25-.38a9.82 9.82 0 0 1-1.5-5.24C1.7 6.4 6.7 1.4 12.06 1.4c2.63 0 5.1 1.02 6.96 2.88a9.79 9.79 0 0 1 2.88 6.95c0 5.36-5 10.55-9.84 10.55Zm5.7-7.35c-.31-.15-1.82-.9-2.1-1-.28-.1-.48-.15-.68.15-.2.31-.78 1-.95 1.2-.18.2-.35.23-.66.08-.31-.15-1.3-.48-2.48-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.13-.63.14-.14.31-.35.46-.53.15-.18.2-.31.31-.51.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.24-.58-.48-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.311.05 1.03-1.05 2.5 0 1.47 1.08 2.89 1.23 3.09.15.2 2.12 3.24 5.13 4.54.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.82-.74 2.08-1.46.26-.72.26-1.33.18-1.46-.08-.13-.28-.2-.58-.35Z"></path>
</svg>
</a><button aria-label="Открыть видео на весь экран" className="block text-left w-full" onclick="(function(){var m=document.getElementById('ytInlineFullscreen-aura-emmae5crcy90orll'); if(m){m.classList.remove('hidden'); m.style.display='flex';} var f=document.getElementById('ytInlineFullscreenFrame-aura-emmae5crcy90orll'); if(f){f.src='https://www.youtube.com/embed/umS5ydjKUK0?autoplay=1&amp;mute=1&amp;controls=1&amp;modestbranding=1&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1';}})();" type="button">
</button>
</div>
</div>

<div className="w-full md:w-1/2 overflow-hidden rounded-xl border border-grey-light bg-dark hidden">
<div className="w-full aspect-video">
<iframe allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/umS5ydjKUK0?autoplay=1&amp;mute=1&amp;controls=1&amp;modestbranding=1&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1" title="YouTube video"></iframe>
</div>
</div>
<div className="flex-1 flex flex-col justify-between gap-3 pr-1 pl-1 md:pr-2 md:pl-2 hidden">
<div className="flex items-start justify-between gap-4">
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="text-[10px] uppercase tracking-widest font-semibold text-premium font-space-mono">Видео</span>
<span className="text-[10px] uppercase tracking-widest font-normal text-dark/50 font-space-mono">YouTube</span>
</div>
<h3 className="mt-2 text-lg md:text-xl font-medium tracking-tight font-manrope text-dark truncate">BAZIKO PREMIUM</h3>
<p className="mt-1 text-xs md:text-sm font-normal text-grey-dark font-manrope line-clamp-2">
          Презентация / процесс / производство — смотрите видео прямо здесь.
        </p>
</div>
<button aria-label="Закрыть" className="shrink-0 w-10 h-10 rounded-xl border border-grey-light bg-white hover:bg-surface transition-colors flex items-center justify-center text-dark" onclick="document.getElementById('ytPlaque').classList.add('hidden');" type="button">
<iconify-icon height="22" icon="solar:close-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
</div>
<div className="flex items-center justify-between gap-3">
<a className="inline-flex items-center gap-2 uppercase transition hover:bg-premium-hover bg-premium text-dark whitespace-nowrap text-xs font-semibold tracking-widest rounded-full pt-2.5 pr-4 pb-2.5 pl-4 font-manrope" href="https://youtu.be/umS5ydjKUK0" rel="noopener noreferrer" target="_blank">
        Открыть в YouTube
        <iconify-icon height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<span className="text-[10px] uppercase tracking-widest font-normal text-dark/50 font-space-mono hidden sm:block">
        autoplay включен (mute)
      </span>
</div>
</div>

</div><div className="flex flex-col md:flex-row gap-3 md:gap-4 pt-3 pr-3 pb-3 pl-3 relative gap-x-3 gap-y-3 items-stretch">

<div className="w-full md:w-1/2 overflow-hidden rounded-xl border border-grey-light bg-dark">
<div className="w-full aspect-video">
<iframe allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/umS5ydjKUK0?autoplay=1&amp;mute=1&amp;controls=1&amp;modestbranding=1&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1" title="YouTube video">
</iframe>
</div>
</div>

<div className="flex-1 flex flex-col gap-3 md:pr-2 md:pl-2 pr-1 pl-1 gap-x-3 gap-y-3 justify-between">
<div className="flex items-start justify-between gap-4">
<div className="min-w-0">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<span className="text-[10px] uppercase tracking-widest font-semibold text-premium font-space-mono">Видео</span>
<span className="text-[10px] uppercase text-dark/50 font-normal tracking-widest font-space-mono">ПРОИЗВОДСТВА</span>
</div>
<h3 className="md:text-xl text-dark text-lg font-medium tracking-tight font-manrope mt-2 leading-tight">Baziko Style: Автоматизированный пошив для лидеров рынка</h3>
<p className="md:text-sm text-grey-dark leading-relaxed text-xs font-normal font-manrope mt-1">Человеческий фактор сведен к нулю, скорость увеличена втрое! 

Мы отшиваем партии премиум-качества для:
 Селлеров Wildberries и Ozon, нацеленных на рост выкупов.
Крупных брендов и фабрик РФ, которым нужен надежный аутсорс.
 Партнеров из СНГ, ценящих точные сроки и масштабируемость.</p>
<div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
<div className="rounded-xl border border-grey-light bg-white px-3 py-2">
<div className="text-[10px] uppercase tracking-widest font-normal text-dark/50 font-space-mono">Ассортимент</div>
<div className="mt-1 text-xs md:text-sm font-normal text-dark font-manrope">
              Рубашки, блузки, платья, жакеты
            </div>
</div>
<div className="rounded-xl border border-grey-light bg-white px-3 py-2">
<div className="text-[10px] uppercase tracking-widest font-normal text-dark/50 font-space-mono">Формат работы</div>
<div className="mt-1 text-xs md:text-sm font-normal text-dark font-manrope">
              Собственный бренд · крупные партии · аутсорсинг
            </div>
</div>
</div>
<p className="mt-3 text-xs md:text-sm font-normal text-grey-dark font-manrope leading-relaxed">
          Берём в работу большие заказы и обеспечиваем стабильное качество, сроки и прозрачную коммуникацию для вашего бренда.
        </p>
</div>
</div>
<div className="flex items-center justify-between gap-3">
<a className="inline-flex items-center gap-2 uppercase transition hover:bg-premium-hover text-dark whitespace-nowrap text-xs font-semibold tracking-widest font-manrope rounded-full pt-2.5 pr-4 pb-2.5 pl-4" href="https://wa.me/996998154550?text=Здравствуйте%20🤝%20Хотим%20обсудить%20пошив%20нашей%20коллекции." rel="noopener noreferrer" target="_blank">КОНСУЛЬТАЦИЯ </a>
<span className="text-[10px] uppercase text-dark/50 hidden sm:block font-normal tracking-widest font-space-mono"></span>
</div>
</div>
</div><section className="md:py-32 border-grey-light bg-[#FEFDFB] border-b pt-24 pb-24" id="faq-section">
<div className="max-w-[1000px] mr-auto ml-auto pr-6 pl-6">

<div className="text-center mb-16 md:mb-24">
<span className="text-[11px] uppercase text-premium block font-bold tracking-[0.3em] font-space-mono mb-4">FAQ</span>
<h2 className="font-oswald text-4xl md:text-6xl font-medium uppercase tracking-tight text-dark">Частые вопросы</h2>
</div>

<div className="space-y-4">

<details className="group bg-surface border border-grey-light p-6 md:p-8 cursor-pointer open:bg-white transition-colors duration-300">
<summary className="flex justify-between items-center font-oswald text-xl md:text-2xl uppercase tracking-wide text-dark list-none [&amp;::-webkit-details-marker]:hidden">
<span className="">Каковы минимальные объемы заказа (MOQ)?</span>
<span className="relative w-8 h-8 md:w-9 md:h-9 shrink-0">
<span className="absolute inset-0 flex items-center justify-center text-premium">
<span className="absolute w-[18px] md:w-[20px] h-[1.5px] bg-current transition-transform duration-300 ease-out group-hover:rotate-90 group-open:rotate-45"></span>
<span className="absolute w-[18px] md:w-[20px] h-[1.5px] bg-current rotate-90 transition-transform duration-300 ease-out group-hover:-rotate-90 group-open:rotate-45"></span>
</span>
</span>
</summary>
<div className="mt-6 font-manrope text-sm md:text-base text-grey-dark leading-relaxed border-t border-grey-light pt-6">
                    Минимальный заказ для оптового производства составляет от 400-500 единиц на одну модель (включая размерный ряд). Для индивидуального пошива в нашем ателье мы работаем от 1 изделия.
                </div>
</details>

<details className="group bg-surface border border-grey-light p-6 md:p-8 cursor-pointer open:bg-white transition-colors duration-300">
<summary className="flex justify-between items-center font-oswald text-xl md:text-2xl uppercase tracking-wide text-dark list-none [&amp;::-webkit-details-marker]:hidden">
<span className="">Предоставляете ли вы сертификаты на продукцию?</span>
<span className="relative w-8 h-8 md:w-9 md:h-9 shrink-0">
<span className="absolute inset-0 flex items-center justify-center text-premium">
<span className="absolute w-[18px] md:w-[20px] h-[1.5px] bg-current transition-transform duration-300 ease-out group-hover:rotate-90 group-open:rotate-45"></span>
<span className="absolute w-[18px] md:w-[20px] h-[1.5px] bg-current rotate-90 transition-transform duration-300 ease-out group-hover:-rotate-90 group-open:rotate-45"></span>
</span>
</span>
</summary>
<div className="mt-6 font-manrope text-sm md:text-base text-grey-dark leading-relaxed border-t border-grey-light pt-6">
                    Да, мы предоставляем полный пакет закрывающих документов и сертификатов соответствия стандартам ЕАЭС. Вся продукция легальна и готова к реализации в крупных ритейл-сетях и на маркетплейсах.
                </div>
</details>

<details className="group bg-surface border border-grey-light p-6 md:p-8 cursor-pointer open:bg-white transition-colors duration-300">
<summary className="flex justify-between items-center font-oswald text-xl md:text-2xl uppercase tracking-wide text-dark list-none [&amp;::-webkit-details-marker]:hidden">
<span className="">Можете ли вы разработать лекала по фото?</span>
<span className="relative w-8 h-8 md:w-9 md:h-9 shrink-0">
<span className="absolute inset-0 flex items-center justify-center text-premium">
<span className="absolute w-[18px] md:w-[20px] h-[1.5px] bg-current transition-transform duration-300 ease-out group-hover:rotate-90 group-open:rotate-45"></span>
<span className="absolute w-[18px] md:w-[20px] h-[1.5px] bg-current rotate-90 transition-transform duration-300 ease-out group-hover:-rotate-90 group-open:rotate-45"></span>
</span>
</span>
</summary>
<div className="mt-6 font-manrope text-sm md:text-base text-grey-dark leading-relaxed border-t border-grey-light pt-6">
                    Наш конструкторский отдел может воссоздать точные лекала по фотографии, эскизу или готовому референсу (образцу) от клиента. Мы отшиваем черновой макет (toile) для утверждения посадки перед запуском партии.
                </div>
</details>

<details className="group bg-surface border border-grey-light p-6 md:p-8 cursor-pointer open:bg-white transition-colors duration-300">
<summary className="flex justify-between items-center font-oswald text-xl md:text-2xl uppercase tracking-wide text-dark list-none [&amp;::-webkit-details-marker]:hidden">
<span className="">Как осуществляется доставка?</span>
<span className="relative w-8 h-8 md:w-9 md:h-9 shrink-0">
<span className="absolute inset-0 flex items-center justify-center text-premium">
<span className="absolute w-[18px] md:w-[20px] h-[1.5px] bg-current transition-transform duration-300 ease-out group-hover:rotate-90 group-open:rotate-45"></span>
<span className="absolute w-[18px] md:w-[20px] h-[1.5px] bg-current rotate-90 transition-transform duration-300 ease-out group-hover:-rotate-90 group-open:rotate-45"></span>
</span>
</span>
</summary>
<div className="mt-6 font-manrope text-sm md:text-base text-grey-dark leading-relaxed border-t border-grey-light pt-6">
                    Мы сотрудничаем с надежными логистическими компаниями. Отправка оптовых партий осуществляется транспортными компаниями по СНГ (от 3 до 14 дней в зависимости от региона). Индивидуальные заказы отправляются экспресс-доставкой до двери.
                </div>
</details>
</div>
</div>
</section>
</div> 
</main>

<footer className="relative bg-[#181311] overflow-hidden flex flex-col items-center pt-32 pb-8 border-t border-white/5 w-full min-h-[800px]">

<div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_top_center,rgba(212,197,185,0.08)_0%,transparent_70%)] z-10 pointer-events-none"></div>

<div className="pointer-events-none absolute inset-0 z-40 w-full h-full opacity-30 mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<div className="relative z-30 flex flex-col items-center text-center px-6 mb-24 w-full">
<h2 className="md:text-5xl lg:text-6xl text-3xl font-normal text-white tracking-tight font-manrope mb-2">Готовы создать историю</h2>
<h2 className="md:text-5xl lg:text-6xl bg-clip-text text-lg font-semibold text-transparent tracking-tight font-manrope bg-gradient-to-br from-white/100 via-white/50 to-white/100">КОТОРАЯ ВАС ВЫДЕЛИТ &amp; УВЕЛИЧИТ ВАШИ ПРОДАЖИ НА МАРКЕТПЛЕЙСАХ?</h2>
<a className="flex items-center justify-center gap-3 hover:bg-white hover:text-[#181311] transition-all duration-300 group text-sm text-white font-manrope border-white/20 border rounded-full mt-10 pt-3.5 pr-8 pb-3.5 pl-8" href="https://wa.me/996557154550?text=Здравствуйте,%20пишу%20из%20сайт%20по%20пошиву%20одежды" rel="noopener noreferrer" target="_blank">
<span className="">Связаться с нами</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" height="16" icon="lucide:chevron-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-sm text-white/50 font-manrope w-full max-w-[1400px] z-30 border-white/10 border-t border-b mr-auto mb-8 ml-auto pt-12 pr-6 pb-12 pl-6 relative gap-x-12 gap-y-12" id="#contact">

<div className="flex flex-col gap-4">
<h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-2">Меню</h4>
<a className="hover:text-white transition-colors w-fit" href="#">Галерея</a>
<a className="hover:text-white transition-colors w-fit" href="#about-us-parallax" onclick="document.querySelector('#about-us-parallax')?.scrollIntoView({behavior:'smooth'}); return false;">О нас</a>
<a className="hover:text-white transition-colors w-fit" href="/production-types">Услуги</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-2">Социальные сети</h4>
<a className="hover:text-white transition-colors w-fit" href="https://www.instagram.com/baziko.premium?igsh=MXdqa3doOHU4MDdpaA==">Instagram</a>
<a className="hover:text-white transition-colors w-fit" href="https://t.me/bazikopremium">Telegram</a>
<a className="hover:text-white transition-colors w-fit" href="https://wa.me/996557154550?text=Здравствуйте,%20пишу%20из%20сайт%20по%20пошиву%20одежды" rel="noopener noreferrer" target="_blank">WhatsApp</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-2">Связь с нами</h4>
<a className="hover:text-white transition-colors w-fit" href="mailto:bazikokg@gmail.com">bazikokg@gmail.com</a>
<div className="flex flex-col gap-2 mt-2">
<span className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Отдел продаж</span>
<a className="hover:text-white transition-colors w-fit" href="tel:+996500048555">+996 500 048 555</a>
<a className="hover:text-white transition-colors w-fit" href="tel:+996995154550">+996 995 154 550</a>
<a className="hover:text-white transition-colors w-fit" href="tel:+996557154550">+996 557 154 550</a>
</div>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-2">Адрес</h4>
<p className="leading-relaxed text-white/60">
                Кыргызстан, Бишкек<br/>
<span className="block mt-2">ул. Асаналиева 96 — 1 фабрика</span>
<span className="block mt-1">ул. Абдыкадырова 101 — 2 фабрика</span>
</p>
</div>
</div>

<div className="flex-grow flex overflow-hidden min-h-[400px] md:min-h-[500px] w-full relative items-center justify-center">
<style>
            @keyframes premiumSpin3D {
                0% { transform: rotateX(15deg) rotateY(0deg) rotateZ(5deg); }
                100% { transform: rotateX(15deg) rotateY(360deg) rotateZ(5deg); }
            }
            @keyframes luxuriousShimmer {
                0% { background-position: 200% center; }
                100% { background-position: -200% center; }
            }
            .volumetric-layer {
                position: absolute;
                inset: 0;
                width: 100%;
                height: 100%;
                object-fit: contain;
                will-change: transform;
            }
        </style>

<div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-90" style={{perspective: '1200px'}}>
<div className="relative w-[250px] h-[250px] md:w-[500px] md:h-[500px]" style={{transformStyle: 'preserve-3d', animation: 'premiumSpin3D 20s infinite linear'}}>

<img alt="" className="volumetric-layer drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b231e0e-3915-4023-8bf1-06641ea8e493_320w.png" style={{filter: 'brightness(0.1) blur(2px)'}}/>
<img alt="" className="volumetric-layer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b231e0e-3915-4023-8bf1-06641ea8e493_320w.png" style={{filter: 'brightness(0.2)'}}/>
<img alt="" className="volumetric-layer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b231e0e-3915-4023-8bf1-06641ea8e493_320w.png" style={{filter: 'brightness(0.3)'}}/>
<img alt="" className="volumetric-layer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b231e0e-3915-4023-8bf1-06641ea8e493_320w.png" style={{filter: 'brightness(0.4)'}}/>
<img alt="" className="volumetric-layer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b231e0e-3915-4023-8bf1-06641ea8e493_320w.png" style={{filter: 'brightness(0.5)'}}/>
<img alt="" className="volumetric-layer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b231e0e-3915-4023-8bf1-06641ea8e493_320w.png" style={{filter: 'brightness(0.6)'}}/>
<img alt="" className="volumetric-layer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b231e0e-3915-4023-8bf1-06641ea8e493_320w.png" style={{filter: 'brightness(0.7)'}}/>
<img alt="" className="volumetric-layer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b231e0e-3915-4023-8bf1-06641ea8e493_320w.png" style={{filter: 'brightness(0.8)'}}/>
<img alt="" className="volumetric-layer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b231e0e-3915-4023-8bf1-06641ea8e493_320w.png" style={{filter: 'brightness(0.9)'}}/>
<img alt="BAZIKO Logo Front" className="volumetric-layer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b231e0e-3915-4023-8bf1-06641ea8e493_320w.png" style={{filter: 'brightness(1) drop-shadow(rgba(212, 197, 185, 0.4) 0px 0px 15px)'}}/>
</div>
</div>

<h1 className="relative z-20 text-[18vw] leading-[0.85] font-manrope font-semibold uppercase tracking-tighter text-transparent bg-clip-text text-center select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] w-full px-4" style="
                background-image: linear-gradient(
                    -75deg,
                    #A89B90 10%,
                    #ffffff 30%,
                    #D4C5B9 50%,
                    #ffffff 70%,
                    #A89B90 90%
                );
                background-size: 200% auto;
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
                animation: luxuriousShimmer 6s linear infinite;
            ">
            BAZIKO<br/>PREMIUM
        </h1>
</div>

<div className="relative z-30 w-full max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-end mt-4 pb-4">
<span className="md:mb-0 text-xs text-white/40 tracking-wide font-manrope mb-4">© 2026 BAZIKO PREMIUM. Все права защищены.</span>
<div className="flex gap-6 font-manrope text-xs text-white/40 tracking-wide">
<a className="hover:text-white transition-colors" href="#">Политика конфиденциальности</a>
</div>
</div>
</footer>



    </>
  );
}
