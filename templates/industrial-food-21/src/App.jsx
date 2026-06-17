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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.addEventListener('DOMContentLoaded', () => {
      
      // --- 1. TOAST NOTIFICATION UTILITY ---
      const toast = document.getElementById('toast');
      const toastMsg = document.getElementById('toast-msg');
      let toastTimeout;
      
      const showToast = (message) => {
        toastMsg.textContent = message;
        toast.classList.remove('opacity-0', '-translate-y-4', 'pointer-events-none');
        
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
          toast.classList.add('opacity-0', '-translate-y-4', 'pointer-events-none');
        }, 3000);
      };

      // --- 2. PROGRESS BAR & STICKY NAV ---
      const navbar = document.getElementById('navbar');
      const progressBar = document.getElementById('progress-bar');
      
      window.addEventListener('scroll', () => {
        // Scroll progress
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
        
        // Sticky Nav styling
        if (winScroll > 50) {
          navbar.classList.add('nav-scrolled', 'py-1');
        } else {
          navbar.classList.remove('nav-scrolled', 'py-1');
        }
      });

      // --- 3. REVEAL ANIMATIONS (Intersection Observer) ---
      const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
      
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

      // --- 4. STATS COUNTER ANIMATION ---
      const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
              current += step;
              if (current < target) {
                entry.target.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
              } else {
                entry.target.textContent = target;
              }
            };
            
            updateCounter();
            statsObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      
      document.querySelectorAll('.stat-number').forEach(stat => statsObserver.observe(stat));

      // --- 5. MOBILE MENU TOGGLE ---
      const menuBtn = document.getElementById('mobile-menu-btn');
      const menu = document.getElementById('mobile-menu');
      const menuBackdrop = document.getElementById('mobile-menu-backdrop');
      const menuIcon = document.getElementById('menu-icon');
      
      const toggleMenu = () => {
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !isExpanded);
        
        if (!isExpanded) {
          menu.classList.remove('hidden');
          menuBackdrop.classList.remove('hidden');
          menuIcon.setAttribute('icon', 'solar:close-linear');
        } else {
          menu.classList.add('hidden');
          menuBackdrop.classList.add('hidden');
          menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
        }
      };
      
      menuBtn.addEventListener('click', toggleMenu);
      menuBackdrop.addEventListener('click', toggleMenu);
      menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
        if (menuBtn.getAttribute('aria-expanded') === 'true') toggleMenu();
      }));

      // --- 6. HERO FORM TOGGLE (MOBILE) ---
      const formToggleBtn = document.getElementById('form-toggle-btn');
      const formWrapper = document.getElementById('hero-form-wrapper');
      const formToggleIcon = document.getElementById('form-toggle-icon');
      
      if (formToggleBtn && formWrapper) {
        formToggleBtn.addEventListener('click', () => {
          const isExpanded = formToggleBtn.getAttribute('aria-expanded') === 'true';
          formToggleBtn.setAttribute('aria-expanded', !isExpanded);
          formWrapper.classList.toggle('show');
          if (!isExpanded) {
            formToggleIcon.classList.add('rotate-180');
          } else {
            formToggleIcon.classList.remove('rotate-180');
          }
        });
      }

      // --- 7. PRODUCT FILTERING ---
      const filterRadios = document.querySelectorAll('input[name="cat"]');
      const productCards = document.querySelectorAll('.product-card');
      const productCount = document.getElementById('product-count');
      
      filterRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
          const filter = e.target.value;
          let count = 0;
          
          productCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-cat') === filter) {
              card.style.display = 'flex';
              setTimeout(() => card.style.opacity = '1', 50);
              count++;
            } else {
              card.style.opacity = '0';
              setTimeout(() => card.style.display = 'none', 300);
            }
          });
          
          if(productCount) {
             productCount.textContent = count === 1 ? '1 impianto' : `${count} impianti`;
          }
        });
      });

      // --- 8. ACADEMY TAB FILTERING ---
      const academyTabs = document.querySelectorAll('.academy-tab');
      const courseCards = document.querySelectorAll('.course-card');
      
      academyTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          // Update active states visually
          academyTabs.forEach(t => {
            t.classList.remove('bg-[#116432]', 'text-white', 'border-[#116432]');
            t.classList.add('bg-white', 'text-neutral-700', 'border-neutral-300');
          });
          tab.classList.remove('bg-white', 'text-neutral-700', 'border-neutral-300');
          tab.classList.add('bg-[#116432]', 'text-white', 'border-[#116432]');
          
          const filter = tab.getAttribute('data-tab');
          
          courseCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-course-cat') === filter) {
              card.style.display = 'flex';
              setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 50);
            } else {
              card.style.opacity = '0';
              card.style.transform = 'translateY(10px)';
              setTimeout(() => card.style.display = 'none', 300);
            }
          });
        });
      });

      // --- 9. PRODUCT MODAL ---
      const modal = document.getElementById('lead-modal');
      const modalBackdrop = document.getElementById('modal-backdrop');
      const modalClose = document.getElementById('modal-close');
      const openModalBtns = document.querySelectorAll('.open-modal, .product-card');
      
      // Modal Data Elements
      const mImg = document.getElementById('modal-img');
      const mBadge = document.getElementById('modal-badge');
      const mName = document.getElementById('modal-name');
      const mCap = document.getElementById('modal-capacity');
      const mDesc = document.getElementById('modal-desc');
      const mLink = document.getElementById('modal-product-link');
      
      const openModal = (card) => {
        // Populate modal data dynamically based on the clicked card's data attributes
        mImg.src = card.getAttribute('data-img');
        mName.textContent = card.getAttribute('data-name');
        mCap.textContent = 'Capacità: ' + card.getAttribute('data-capacity');
        mDesc.textContent = card.getAttribute('data-desc');
        mLink.href = card.getAttribute('data-url');
        
        const badgeText = card.getAttribute('data-badge');
        const badgeColor = card.getAttribute('data-badge-color');
        if (badgeText) {
          mBadge.textContent = badgeText;
          mBadge.style.backgroundColor = badgeColor;
          mBadge.style.display = 'inline-block';
        } else {
          mBadge.style.display = 'none';
        }
        
        // Show modal and disable background scroll
        document.body.style.overflow = 'hidden';
        modal.classList.remove('hidden');
        
        // Short timeout allows block rendering before opacity animation triggers
        setTimeout(() => {
          modal.style.opacity = '1';
        }, 10);
      };
      
      const closeModal = () => {
        modal.style.opacity = '0';
        setTimeout(() => {
          modal.classList.add('hidden');
          document.body.style.overflow = '';
        }, 300); // Wait for CSS transition
      };
      
      openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          // Exclude click if the target is specifically a direct link element inside the card
          if(e.target.closest('a') && !e.target.closest('.open-modal')) return;
          const card = e.currentTarget.closest('.product-card') || e.currentTarget;
          openModal(card);
        });
      });
      
      modalClose.addEventListener('click', closeModal);
      modalBackdrop.addEventListener('click', closeModal);

      // --- 10. ROI CALCULATOR ---
      const capSlider = document.getElementById('calc-cap');
      const priceSlider = document.getElementById('calc-price');
      const capVal = document.getElementById('calc-cap-val');
      const priceVal = document.getElementById('calc-price-val');
      const revOutput = document.getElementById('calc-revenue');
      
      const updateROI = () => {
        if(!capSlider || !priceSlider) return;
        const cap = parseInt(capSlider.value);
        const price = parseInt(priceSlider.value);
        
        capVal.textContent = cap + ' kg';
        priceVal.textContent = price + ' €';
        
        // Simplistic formula for frontend demonstration (Capacity * Price)
        const revenue = cap * price;
        
        // Format as Currency
        revOutput.textContent = '€ ' + revenue.toLocaleString('it-IT');
        
        // Dynamic slider background fill using CSS variable '--pct'
        const updateSliderBg = (slider) => {
          const val = (slider.value - slider.min) / (slider.max - slider.min) * 100;
          slider.style.setProperty('--pct', val + '%');
        };
        
        updateSliderBg(capSlider);
        updateSliderBg(priceSlider);
      };
      
      if(capSlider) capSlider.addEventListener('input', updateROI);
      if(priceSlider) priceSlider.addEventListener('input', updateROI);
      // Initialize layout backgrounds
      updateROI();

      // --- 11. FORM SUBMISSION HANDLERS ---
      const handleFormSubmit = (e, successMessage) => {
        e.preventDefault();
        const btn = e.target.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        
        // Loading State
        btn.innerHTML = '<iconify-icon icon="line-md:loading-loop" width="16"></iconify-icon> Elaborazione...';
        btn.style.opacity = '0.8';
        btn.style.pointerEvents = 'none';
        
        // Simulate API Processing Delay
        setTimeout(() => {
          showToast(successMessage);
          e.target.reset();
          
          // Reset Button State
          btn.innerHTML = originalText;
          btn.style.opacity = '1';
          btn.style.pointerEvents = 'auto';
          
          // Close modal if a form inside a modal was submitted
          if(modal && !modal.classList.contains('hidden')) {
            closeModal();
          }
        }, 1200);
      };

      document.getElementById('hero-lead-form')?.addEventListener('submit', (e) => handleFormSubmit(e, 'Guida inviata con successo alla tua email!'));
      document.getElementById('modal-lead-form')?.addEventListener('submit', (e) => handleFormSubmit(e, 'Richiesta inviata. Ti contatteremo a breve.'));
      document.getElementById('footer-lead-form')?.addEventListener('submit', (e) => handleFormSubmit(e, 'Preventivo richiesto! Riceverai una mail di conferma.'));

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
      

<div id="progress-bar" style={{width: '0%'}}></div>

<div className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 bg-white border border-neutral-200 rounded-full px-5 py-3 shadow-xl opacity-0 pointer-events-none -translate-y-4" id="toast">
<span className="w-2 h-2 rounded-full bg-[#116432] flex-shrink-0"></span>
<p className="text-xs font-normal text-[#0d0d0b] whitespace-nowrap" id="toast-msg"></p>
</div>

<div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-xl border-t border-neutral-200/60 z-[45] pb-safe shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.1)]">
<a className="flex w-full justify-center items-center gap-2 bg-[#116432] text-white text-xs font-semibold tracking-widest uppercase py-4 rounded-xl shadow-lg active:scale-95 transition-transform" href="#preventivo">
      Richiedi Preventivo
      <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-2xl border-b border-black/[0.04]" id="navbar">
<div className="max-w-[1400px] mx-auto px-5 md:px-10 h-16 flex items-center justify-between gap-6 relative z-50">
<a aria-label="Stagionello Home" className="flex-shrink-0" href="/">
<svg className="logo-stagionello logo-stagionello-dark" fill="none" viewbox="0 0 220 52" xmlns="http://www.w3.org/2000/svg">
<text className="logo-main-text" fontFamily="Georgia, 'Times New Roman', serif" fontSize="36" font-style={{}} font-weight="600" x="0" y="34">Stagionello</text>
<text className="logo-registered" fontFamily="Arial, sans-serif" fontSize="11" font-weight="400" x="214" y="14">®</text>
<rect className="logo-flag-green" height="4" width="24" x="0" y="38"></rect>
<rect className="logo-flag-white" height="4" width="24" x="24" y="38"></rect>
<rect className="logo-flag-red" height="4" width="24" x="48" y="38"></rect>
<text className="logo-subtitle" fontFamily="Arial, Helvetica, sans-serif" fontSize="6.5" font-weight="400" letter-spacing="2.2" x="0" y="50">WE SEE TRADITION IN YOUR FUTURE</text>
</svg>
</a>
<nav className="hidden md:flex items-center gap-1">
<a className="text-sm font-normal text-neutral-700 hover:text-[#0d0d0b] px-3 py-2 rounded-lg hover:bg-black/[0.03] transition-all" href="#soluzioni">Sistemi</a>
<a className="text-sm font-normal text-neutral-700 hover:text-[#0d0d0b] px-3 py-2 rounded-lg hover:bg-black/[0.03] transition-all" href="#metodo">Il Metodo</a>
<a className="text-sm font-normal text-neutral-700 hover:text-[#0d0d0b] px-3 py-2 rounded-lg hover:bg-black/[0.03] transition-all" href="#academy">Academy</a>
<a className="text-sm font-normal text-neutral-700 hover:text-[#0d0d0b] px-3 py-2 rounded-lg hover:bg-black/[0.03] transition-all" href="#roi">Calcola ROI</a>
</nav>
<div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
<a className="inline-flex items-center gap-1.5 border border-neutral-300 hover:border-neutral-400 text-neutral-800 text-xs font-semibold tracking-widest uppercase py-2.5 px-4 rounded-full transition-all hover:bg-neutral-50" href="#guida">
<iconify-icon icon="solar:download-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
          Guida Gratuita
        </a>
<a className="inline-flex items-center gap-1.5 bg-[#116432] hover:bg-[#147a3b] text-white text-xs font-semibold tracking-widest uppercase py-2.5 px-5 rounded-full transition-all hover:shadow-[0_0_18px_rgba(17,100,50,0.25)] active:scale-95" href="#preventivo">
          Preventivo
          <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
<button aria-controls="mobile-menu" aria-expanded="false" aria-label="Menu" className="flex md:hidden w-9 h-9 items-center justify-center rounded-lg text-neutral-800 hover:bg-black/5 transition-all flex-shrink-0" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" id="menu-icon" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
</div>

<div className="hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity" id="mobile-menu-backdrop"></div>

<div className="hidden fixed top-16 left-0 right-0 z-50 border-t border-black/5 bg-white px-5 pt-6 pb-8 shadow-2xl" id="mobile-menu">
<nav className="flex flex-col gap-1 mb-6">
<a className="text-sm font-normal text-neutral-700 hover:text-[#0d0d0b] px-3 py-2.5 rounded-xl hover:bg-black/5 transition-all" href="#soluzioni">Sistemi</a>
<a className="text-sm font-normal text-neutral-700 hover:text-[#0d0d0b] px-3 py-2.5 rounded-xl hover:bg-black/5 transition-all" href="#metodo">Il Metodo</a>
<a className="text-sm font-normal text-neutral-700 hover:text-[#0d0d0b] px-3 py-2.5 rounded-xl hover:bg-black/5 transition-all" href="#academy">Academy</a>
<a className="text-sm font-normal text-neutral-700 hover:text-[#0d0d0b] px-3 py-2.5 rounded-xl hover:bg-black/5 transition-all" href="#roi">Calcola ROI</a>
</nav>
<div className="flex flex-col gap-2.5 pt-4 border-t border-neutral-100">
<a className="inline-flex justify-center items-center gap-2 border border-neutral-200 text-[#0d0d0b] text-xs font-semibold tracking-widest uppercase py-3.5 rounded-xl text-center hover:bg-neutral-50 transition-all" href="#guida">
<iconify-icon icon="solar:download-linear" width="15"></iconify-icon>
          Scarica Guida
        </a>
<a className="inline-flex justify-center items-center gap-2 bg-[#116432] hover:bg-[#147a3b] text-white text-xs font-semibold tracking-widest uppercase py-3.5 rounded-xl text-center transition-all" href="#preventivo">
          Richiedi Preventivo
        </a>
</div>
</div>
</header>

<main>

<section className="relative w-full min-h-screen flex items-center overflow-hidden pt-16" id="hero">
<div className="hero-bg absolute inset-0 z-0"></div>
<div className="relative z-20 max-w-[1400px] w-full mx-auto px-5 md:px-10 py-20 lg:py-28">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

<div className="">
<div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-neutral-200 shadow-sm mb-8 opacity-0 animate-[fadeInUp_0.9s_ease-out_0.1s_forwards]">
<span className="w-2 h-2 rounded-full bg-[#116432] dot-pulse flex-shrink-0"></span>
<p className="text-xs font-medium tracking-[0.14em] uppercase text-[#116432]">Cuomo Method® — Brevetto Europeo</p>
</div>
<h1 className="font-['Syne'] font-semibold text-5xl md:text-6xl lg:text-7xl leading-[0.93] tracking-tight text-[#0d0d0b]">
<span className="block opacity-0 animate-[fadeInUp_0.9s_ease-out_0.15s_forwards] text-gradient-gold">Frollatura,</span>
<span className="block opacity-0 animate-[fadeInUp_0.9s_ease-out_0.25s_forwards] text-neutral-800">salumi,</span>
<span className="block opacity-0 animate-[fadeInUp_0.9s_ease-out_0.35s_forwards] text-neutral-500">pesce.</span>
</h1>
<p className="mt-8 text-base md:text-lg font-normal text-neutral-700 max-w-lg leading-relaxed opacity-0 animate-[fadeInUp_0.9s_ease-out_0.45s_forwards]">
              L'unico impianto al mondo a pH controllato. Soluzioni brevettate <strong className="text-[#0d0d0b] font-medium">da 100 kg a 7.000 kg</strong>. Il riferimento globale per il tuo business.
            </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-10 opacity-0 animate-[fadeInUp_0.9s_ease-out_0.55s_forwards]">
<a className="inline-flex justify-center items-center gap-2 bg-[#116432] hover:bg-[#147a3b] text-white text-xs font-semibold tracking-widest uppercase py-4 px-7 rounded-full transition-all hover:shadow-lg active:scale-[0.98]" href="#soluzioni">
                Scopri gli Impianti
                <iconify-icon icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 text-xs font-semibold tracking-widest uppercase text-neutral-800 py-4 px-7 rounded-full bg-white border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 transition-all shadow-sm" href="#guida">
<iconify-icon icon="solar:download-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
                Guida Gratuita
              </a>
</div>
<div className="mt-12 flex flex-wrap items-center gap-5 opacity-0 animate-[fadeInUp_0.9s_ease-out_0.65s_forwards]">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#116432]" icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-neutral-700">Brevetto EU</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#116432]" icon="solar:global-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-neutral-700">120+ Paesi</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#116432]" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-neutral-700">HACCP Integrato</span>
</div>
</div>
</div>

<div className="opacity-0 animate-[fadeInUp_0.9s_ease-out_0.4s_forwards]" id="guida">
<div className="glass-panel-light rounded-[2rem] overflow-hidden relative border-neutral-200/60">
<button aria-controls="hero-form-wrapper" aria-expanded="false" className="md:hidden w-full flex items-center justify-between px-7 py-5 gap-4" id="form-toggle-btn">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-xl bg-[#116432]/10 border border-[#116432]/20 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-[#116432]" icon="solar:book-2-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
</div>
<div className="text-left">
<p className="text-xs font-medium text-[#0d0d0b] leading-tight">Scarica la Guida Gratuita</p>
<p className="text-xs text-neutral-600 font-normal">70 pagine — 12.000+ download</p>
</div>
</div>
<div className="w-7 h-7 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300" id="form-toggle-icon">
<iconify-icon className="text-[#0d0d0b]" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
</button>
<div className="hidden md:block" id="hero-form-wrapper">
<div className="px-7 pb-7 md:p-9 md:pt-9">
<div className="hidden md:flex items-center gap-3 mb-5">
<div className="w-9 h-9 rounded-xl bg-[#116432]/10 border border-[#116432]/20 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-[#116432]" icon="solar:book-2-linear" style={{strokeWidth: '1.5'}} width="17"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium uppercase tracking-widest text-neutral-600">Risorsa Gratuita</p>
<p className="text-xs text-neutral-700 font-normal">12.000+ professionisti nel mondo</p>
</div>
</div>
<h2 className="font-['Syne'] font-semibold text-2xl md:text-3xl tracking-tight text-[#0d0d0b] mb-2">La Guida Completa alla Frollatura</h2>
<p className="text-sm font-normal text-neutral-700 mb-7 leading-relaxed">70+ pagine su dry-aging, pH, HACCP e come scegliere l'impianto giusto per la tua attività.</p>
<form className="flex flex-col gap-3.5" id="hero-lead-form" novalidate="">
<div>
<label className="block text-xs font-medium uppercase tracking-widest text-neutral-600 mb-1.5" htmlFor="fname">Nome e Cognome *</label>
<input className="w-full bg-white/80 backdrop-blur-sm border border-neutral-300 text-sm text-[#0d0d0b] px-4 py-3 rounded-xl outline-none focus:border-[#116432] focus:ring-2 focus:ring-[#116432]/20 transition-all placeholder:text-neutral-400" id="fname" name="fname" placeholder="Mario Rossi" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium uppercase tracking-widest text-neutral-600 mb-1.5" htmlFor="email">Email professionale *</label>
<input className="w-full bg-white/80 backdrop-blur-sm border border-neutral-300 text-sm text-[#0d0d0b] px-4 py-3 rounded-xl outline-none focus:border-[#116432] focus:ring-2 focus:ring-[#116432]/20 transition-all placeholder:text-neutral-400" id="email" name="email" placeholder="email@esempio.com" required="" type="email"/>
</div>
<button className="w-full bg-[#0d0d0b] hover:bg-[#222220] text-white text-xs font-semibold tracking-widest uppercase py-4 rounded-xl transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2 mt-2" id="hero-submit-btn" type="submit">
<iconify-icon icon="solar:download-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
                      Scarica Gratis la Guida
                    </button>
<div className="flex items-center justify-center gap-2 mt-2">
<iconify-icon className="text-neutral-500" icon="solar:lock-password-linear" width="12"></iconify-icon>
<p className="text-xs text-center text-neutral-600 font-normal">Dati sicuri. Privacy Policy EU.</p>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-9 left-5 md:left-10 z-20 flex flex-col items-center gap-2 hidden md:flex">
<div className="w-[1px] h-10 bg-gradient-to-b from-[#116432]/60 to-transparent scroll-line"></div>
</div>

<div className="absolute bottom-9 right-5 md:right-10 z-20 hidden md:block">
<div className="flex items-center gap-2.5 bg-white/60 backdrop-blur-md border border-neutral-300 rounded-full px-3.5 py-2">
<a className="flex items-center gap-1.5 text-xs font-medium text-[#0d0d0b]" href="/">
<img alt="IT" className="w-4 h-auto rounded-sm" loading="lazy" src="https://www.stagionello.com/wp-content/themes/stagionellostore/assets/images/flag-it.svg"/> IT
          </a>
<span className="w-[1px] h-3 bg-neutral-300"></span>
<a className="flex items-center gap-1.5 text-xs font-normal text-neutral-600 hover:text-[#0d0d0b] transition-colors" href="/en/">
<img alt="EN" className="w-4 h-auto rounded-sm opacity-60" loading="lazy" src="https://www.stagionello.com/wp-content/themes/stagionellostore/assets/images/flag-en.svg"/> EN
          </a>
</div>
</div>
</section>

<section className="bg-white border-y border-neutral-200/60 py-6 md:py-8 relative z-20 shadow-sm">
<div className="max-w-[1400px] mx-auto px-5 md:px-10">
<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
<div className="flex items-center gap-2">
<div className="flex items-center gap-0.5 text-[#c4993a]">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-800 ml-1">4.9/5 Media Globale</span>
</div>
<div className="hidden md:block w-px h-8 bg-neutral-300"></div>
<p className="text-xs font-semibold text-neutral-600 uppercase tracking-widest text-center">
            Scelto da <span className="text-[#116432] font-bold">12.000+</span> Macellerie e Ristoranti nel mondo
          </p>
</div>
</div>
</section>

<section className="border-b border-neutral-200/60 bg-white relative z-20" id="stats">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200">
<div className="p-8 md:p-12 text-center group hover:bg-neutral-50 transition-colors cursor-default">
<div className="font-['Syne'] font-semibold text-4xl md:text-5xl tracking-tight text-[#0d0d0b] mb-2 flex justify-center items-baseline gap-1">
<span className="stat-number" data-target="3500">0</span><span className="text-2xl text-[#116432]">+</span>
</div>
<div className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-600 mt-1">Impianti installati</div>
</div>
<div className="p-8 md:p-12 text-center group hover:bg-neutral-50 transition-colors cursor-default">
<div className="font-['Syne'] font-semibold text-4xl md:text-5xl tracking-tight text-[#0d0d0b] mb-2 flex justify-center items-baseline gap-0.5">
<span className="text-2xl text-[#116432]">+</span><span className="stat-number" data-target="40">0</span><span className="text-2xl text-[#116432]">%</span>
</div>
<div className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-600 mt-1">Margine medio clienti</div>
</div>
<div className="p-8 md:p-12 text-center group hover:bg-neutral-50 transition-colors cursor-default">
<div className="font-['Syne'] font-semibold text-4xl md:text-5xl tracking-tight text-[#0d0d0b] mb-2 flex justify-center items-baseline gap-1">
<span className="stat-number" data-target="120">0</span><span className="text-2xl text-[#116432]">+</span>
</div>
<div className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-600 mt-1">Paesi nel mondo</div>
</div>
<div className="p-8 md:p-12 text-center group hover:bg-neutral-50 transition-colors cursor-default">
<div className="font-['Syne'] font-semibold text-4xl md:text-5xl tracking-tight text-[#0d0d0b] mb-2 flex justify-center items-baseline gap-1">
<span className="stat-number" data-target="6">0</span><span className="text-base font-normal text-neutral-600 ml-1">mesi</span>
</div>
<div className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-600 mt-1">Ritorno sull'investimento</div>
</div>
</div>
</div>
</section>

<section className="border-b border-neutral-200/60 z-20 bg-[#f5f2ec] text-[#0d0d0b] pt-20 pb-20 relative" id="vantaggi">
<div className="max-w-[1400px] mx-auto px-5 md:px-10">
<div className="text-center mb-16">
<p className="reveal text-xs font-medium tracking-[0.18em] uppercase text-[#116432] mb-3">Vantaggi per il tuo business</p>
<h2 className="reveal font-['Syne'] font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#0d0d0b] leading-tight max-w-3xl mx-auto">
            Non è solo tecnologia. È un moltiplicatore di profitti per la tua attività.
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
<div className="reveal bg-white border border-neutral-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-2xl bg-[#116432]/10 flex items-center justify-center mb-6 border border-[#116432]/20">
<iconify-icon className="text-[#116432]" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-['Syne'] font-semibold text-xl text-[#0d0d0b] mb-3">Aumenta lo scontrino medio</h3>
<p className="text-sm font-normal text-neutral-700 leading-relaxed">Offri prodotti premium altamente richiesti. I clienti sono disposti a pagare fino al 40% in più per carne frollata certificata o salumi artigianali di altissima qualità.</p>
</div>
<div className="reveal reveal-delay-1 bg-white border border-neutral-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-2xl bg-[#116432]/10 flex items-center justify-center mb-6 border border-[#116432]/20">
<iconify-icon className="text-[#116432]" icon="solar:shield-warning-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-['Syne'] font-semibold text-xl text-[#0d0d0b] mb-3">Azzera gli scarti e i rischi</h3>
<p className="text-sm font-normal text-neutral-700 leading-relaxed">Il controllo millimetrico del pH e dell'umidità previene la proliferazione batterica anomala. Mai più lotti da buttare. Controllo totale sul calo peso.</p>
</div>
<div className="reveal reveal-delay-2 bg-white border border-neutral-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-2xl bg-[#c4993a]/10 flex items-center justify-center mb-6 border border-[#c4993a]/20">
<iconify-icon className="text-[#c4993a]" icon="solar:star-fall-minimalistic-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-['Syne'] font-semibold text-xl text-[#0d0d0b] mb-3">Distinguiti dalla concorrenza</h3>
<p className="text-sm font-normal text-neutral-700 leading-relaxed">Trasforma il tuo locale con un impianto dal design inconfondibile. Attira una clientela esigente e fidelizzala con un prodotto che i competitor non possono replicare.</p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 md:py-32 relative z-20" id="soluzioni">
<div className="md:px-10 max-w-[1400px] mr-auto ml-auto pr-5 pl-5">
<div className="text-center mb-14">
<p className="reveal text-xs font-medium tracking-[0.18em] uppercase text-[#116432] mb-3">Da 100 kg a 7.000 kg</p>
<h2 className="reveal font-['Syne'] font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#0d0d0b] leading-[1.05]">Soluzioni per ogni scala di business.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="reveal sector-card group relative bg-neutral-50 rounded-[2rem] overflow-hidden border border-neutral-200 p-8 flex flex-col hover:bg-white hover:shadow-xl transition-all duration-500 cursor-pointer">
<div className="sector-img-wrap bg-neutral-100 group-hover:bg-neutral-50 transition-colors duration-500 relative z-10">
<img alt="Dry Age 3.0 per Ristoranti" className="" loading="lazy" src="https://www.stagionello.com/wp-content/themes/stagionellostore/assets/miniature-stagionello/meat-curing-device-plug-in.jpg"/>
</div>
<div className="relative z-10 flex flex-col flex-grow">
<div className="sector-stat-pill bg-white group-hover:border-[#116432]/30 transition-colors">
<iconify-icon icon="solar:chart-bold" width="12"></iconify-icon>
<span className="text-xs">+30% scontrino medio</span>
</div>
<span className="inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-widest text-[#116432] border border-[#116432]/10 mb-3 transition-colors w-fit bg-[#116432]/5">100 – 300 kg</span>
<h3 className="font-['Syne'] font-semibold text-2xl text-[#0d0d0b] mb-2 transition-colors">Per Ristoranti</h3>
<p className="text-sm font-normal text-neutral-700 mb-5 transition-colors leading-relaxed">Il Dry Age 3.0 si posiziona <strong className="text-neutral-900 font-medium">in vetrina come elemento di scena</strong>: attira clienti premium e giustifica prezzi più alti sulla carta.</p>
<ul className="flex flex-col gap-2 mb-6">
<li className="flex items-center gap-2 text-xs font-normal text-neutral-600 transition-colors">
<iconify-icon className="text-[#116432] flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                  Design premium per l'esposizione
                </li>
<li className="flex items-center gap-2 text-xs font-normal text-neutral-600 transition-colors">
<iconify-icon className="text-[#116432] flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                  Cicli pronti: nessuna formazione
                </li>
<li className="flex items-center gap-2 text-xs font-normal text-neutral-600 transition-colors">
<iconify-icon className="text-[#116432] flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                  HACCP automatico incluso
                </li>
</ul>
<a className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#116432] hover:text-[#0e5228] transition-colors" href="#preventivo">
                Richiedi Preventivo <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
</div>

<div className="reveal reveal-delay-1 sector-card group relative bg-neutral-50 rounded-[2rem] overflow-hidden border border-neutral-200 p-8 flex flex-col hover:bg-white hover:shadow-xl transition-all duration-500 cursor-pointer">
<span className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#C7051B] text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full z-20 shadow-sm whitespace-nowrap">Il più venduto</span>
<div className="sector-img-wrap bg-neutral-100 group-hover:bg-neutral-50 transition-colors duration-500 relative z-10 mt-4 rounded-xl overflow-hidden">
<img alt="Macellerie e Salumifici" className="" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9bc705a0-ea9b-490c-9ab0-b649ab7bc997_800w.jpg"/>
</div>
<div className="relative z-10 flex flex-col flex-grow">
<div className="sector-stat-pill bg-white group-hover:border-[#116432]/30 transition-colors">
<iconify-icon icon="solar:chart-bold" width="12"></iconify-icon>
<span className="text-xs">ROI medio in 5 mesi</span>
</div>
<span className="inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-widest text-[#116432] border border-[#116432]/10 mb-3 transition-colors w-fit bg-[#116432]/5">300 – 700 kg</span>
<h3 className="font-['Syne'] font-semibold text-2xl text-[#0d0d0b] mb-2 transition-colors">Macellerie &amp; Salumifici</h3>
<p className="text-sm font-normal text-neutral-700 mb-5 transition-colors leading-relaxed">Produci carne frollata e salumi artigianali con <strong className="text-neutral-900 font-medium">zero scarti e costi di processo ridotti</strong> grazie al calo peso controllato.</p>
<ul className="flex flex-col gap-2 mb-6">
<li className="flex items-center gap-2 text-xs font-normal text-neutral-600 transition-colors">
<iconify-icon className="text-[#116432] flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                  Calo peso monitorato
                </li>
<li className="flex items-center gap-2 text-xs font-normal text-neutral-600 transition-colors">
<iconify-icon className="text-[#116432] flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                  Fino a 2 ricette simultanee
                </li>
<li className="flex items-center gap-2 text-xs font-normal text-neutral-600 transition-colors">
<iconify-icon className="text-[#116432] flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                  Report HACCP scaricabili
                </li>
</ul>
<a className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#116432] hover:text-[#0e5228] transition-colors" href="#preventivo">
                Richiedi Preventivo <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
</div>

<div className="reveal reveal-delay-2 sector-card group relative bg-neutral-50 rounded-[2rem] overflow-hidden border border-neutral-200 p-8 flex flex-col hover:bg-white hover:shadow-xl transition-all duration-500 cursor-pointer">
<div className="sector-img-wrap bg-neutral-100 group-hover:bg-neutral-50 transition-colors duration-500 relative z-10 rounded-xl overflow-hidden">
<img alt="Pesciugatore Fish Aging and Curing Cabinet" className="" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c956d258-ff20-4018-a18b-4a097fa136c3_800w.jpg"/>
</div>
<div className="relative z-10 flex flex-col flex-grow">
<div className="sector-stat-pill bg-white group-hover:border-[#116432]/30 transition-colors">
<iconify-icon icon="solar:chart-bold" width="12"></iconify-icon>
<span className="text-xs">Prodotto unico</span>
</div>
<span className="inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-widest text-[#116432] border border-[#116432]/10 mb-3 transition-colors w-fit bg-[#116432]/5">100 – 300 kg</span>
<h3 className="font-['Syne'] font-semibold text-2xl text-[#0d0d0b] mb-2 transition-colors">Per Pescherie</h3>
<p className="text-sm font-normal text-neutral-700 mb-5 transition-colors leading-relaxed">Offri pesce stagionato che i tuoi concorrenti <strong className="text-neutral-900 font-medium">non sanno nemmeno produrre</strong>. Margini altissimi in una nicchia nuova.</p>
<ul className="flex flex-col gap-2 mb-6">
<li className="flex items-center gap-2 text-xs font-normal text-neutral-600 transition-colors">
<iconify-icon className="text-[#116432] flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                  Protocolli ittici dedicati
                </li>
<li className="flex items-center gap-2 text-xs font-normal text-neutral-600 transition-colors">
<iconify-icon className="text-[#116432] flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                  Controllo microbiologico
                </li>
<li className="flex items-center gap-2 text-xs font-normal text-neutral-600 transition-colors">
<iconify-icon className="text-[#116432] flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                  Ingombro min: 60×80 cm
                </li>
</ul>
<a className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#116432] hover:text-[#0e5228] transition-colors" href="#preventivo">
                Richiedi Preventivo <iconify-icon className="" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
</div>

<div className="reveal reveal-delay-3 sector-card group relative bg-[#0d0d0b] rounded-[2rem] overflow-hidden border border-[#222220] p-8 flex flex-col hover:bg-[#116432] hover:border-[#116432]/60 transition-colors duration-500 cursor-pointer">
<div className="sector-img-wrap bg-white/5 group-hover:bg-white/10 transition-colors duration-500 relative z-10 rounded-xl overflow-hidden">
<img alt="Stagionello Industrial Meat Curing Chamber" className="opacity-90 group-hover:opacity-100 transition-opacity" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4b39fb3c-3a84-4712-8912-5c97f74fc01c_800w.png"/>
</div>
<div className="relative z-10 flex flex-col flex-grow">
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-white/90 border border-white/20 bg-white/10 group-hover:border-white/30 group-hover:text-white group-hover:bg-white/15 mb-3 transition-colors w-fit">
<iconify-icon icon="solar:chart-bold" width="12"></iconify-icon>
                Su misura fino a 7.000 kg
              </div>
<span className="inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-widest text-white/80 border border-white/20 mb-3 transition-colors w-fit">Cella personalizzata</span>
<h3 className="font-['Syne'] font-semibold text-2xl text-white mb-2 transition-colors">Industria Alimentare</h3>
<p className="text-sm font-normal text-white/80 group-hover:text-white/90 mb-5 transition-colors leading-relaxed">Standardizzazione e controllo su scala industriale. <strong className="text-white font-medium">Abbatti i costi operativi</strong> con automazione totale del ciclo.</p>
<ul className="flex flex-col gap-2 mb-6">
<li className="flex items-center gap-2 text-xs font-normal text-white/70 group-hover:text-white/80 transition-colors">
<iconify-icon className="text-white flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                  Progettazione su misura
                </li>
<li className="flex items-center gap-2 text-xs font-normal text-white/70 group-hover:text-white/80 transition-colors">
<iconify-icon className="text-white flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                  Integrazione in linea
                </li>
<li className="flex items-center gap-2 text-xs font-normal text-white/70 group-hover:text-white/80 transition-colors">
<iconify-icon className="text-white flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                  SLA e assistenza dedicata
                </li>
</ul>
<a className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-white transition-colors" href="#preventivo">
                Richiedi consulenza <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#f5f2ec] pb-32 pt-8" id="prodotti">
<div className="max-w-[1400px] mx-auto px-5 md:px-10">
<div className="mb-12 md:mb-14 flex flex-col gap-5">
<div className="">
<p className="reveal text-xs font-medium tracking-[0.18em] uppercase text-[#116432] mb-3">I Nostri Impianti</p>
<h2 className="reveal font-['Syne'] font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#0d0d0b] leading-[1.05]">Scegli il tuo impianto.</h2>
</div>
<div className="reveal flex flex-wrap gap-2 items-center">
<div className="filter-pill">
<input checked="" id="cat-all" name="cat" type="radio" value="all"/>
<label htmlFor="cat-all">Tutti</label>
</div>
<div className="filter-pill">
<input id="cat-meat" name="cat" type="radio" value="meat"/>
<label className="" htmlFor="cat-meat">Carne</label>
</div>
<div className="filter-pill">
<input id="cat-salami" name="cat" type="radio" value="salami"/>
<label htmlFor="cat-salami">Salumi</label>
</div>
<div className="filter-pill">
<input id="cat-fish" name="cat" type="radio" value="fish"/>
<label htmlFor="cat-fish">Pesce</label>
</div>
<span className="text-xs font-medium text-neutral-600 ml-1" id="product-count">6 impianti</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" id="products-grid">

<div className="product-card reveal bg-white border border-neutral-200/80 rounded-3xl overflow-hidden flex flex-col cursor-pointer group" data-badge="Bestseller" data-badge-color="#116432" data-capacity="70 kg" data-cat="meat" data-desc="L'impianto d'ingresso per macellerie, ristoranti e piccole attività. Perfetto per iniziare con la frollatura professionale a pH controllato." data-img="https://www.stagionello.com/wp-content/uploads/2023/08/meat_ombra.png" data-name="Meat Curing Device 70" data-price="Su richiesta" data-url="https://www.stagionello.com/stagionello-meat-curing-device/">
<div className="relative bg-neutral-50 flex items-center justify-center overflow-hidden border-b border-neutral-100" style={{height: '216px'}}>
<span className="absolute top-4 left-4 bg-[#116432] text-white text-xs font-medium uppercase tracking-widest px-2.5 py-1 rounded-full z-10">Bestseller</span>
<img alt="Meat Curing Device 70" className="transition-transform duration-500 ease-out group-hover:scale-105 w-auto h-40 object-contain drop-shadow-xl" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="text-xs font-medium uppercase tracking-[0.15em] text-[#116432] mb-2">Frollatura Carne</span>
<h3 className="text-lg leading-snug font-semibold text-[#0d0d0b] tracking-tight font-['Syne'] mb-1">Meat Curing Device 100</h3>
<p className="text-xs font-normal text-neutral-600 mb-3">Capacità: 70 kg</p>
<p className="text-sm font-normal text-neutral-700 leading-relaxed flex-grow">Ideale per macellerie e ristoranti. Frollatura a pH controllato con cicli completamente automatizzati.</p>
<div className="mt-5 pt-5 border-t border-neutral-100 flex items-center justify-between">
<a className="text-xs font-medium text-neutral-600 hover:text-[#116432] transition-colors flex items-center gap-1 group/link" href="https://www.stagionello.com/stagionello-meat-curing-device/" onclick="event.stopPropagation()" target="_blank">
                  Scheda prodotto <iconify-icon className="opacity-0 group-hover/link:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</a>
<button className="open-modal inline-flex items-center gap-1.5 text-xs font-semibold text-[#116432] hover:text-[#0e5228] transition-colors group/btn bg-[#116432]/10 hover:bg-[#116432]/20 px-4 py-2 rounded-full">
                  Richiedi Info <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="product-card reveal reveal-delay-1 bg-white border border-neutral-200/80 rounded-3xl overflow-hidden flex flex-col cursor-pointer group" data-badge="" data-badge-color="" data-capacity="120 kg" data-cat="meat" data-desc="La soluzione mid-range per volumi superiori. Gestione multizona e report HACCP automatici per ogni ciclo." data-img="https://www.stagionello.com/wp-content/uploads/2023/08/meat_ombra.png" data-name="Meat Curing Device 120" data-price="Su richiesta" data-url="https://www.stagionello.com/stagionello-meat-curing-device/">
<div className="relative bg-neutral-50 flex items-center justify-center overflow-hidden border-b border-neutral-100" style={{height: '216px'}}>
<img alt="Meat Curing Device 120" className="h-40 w-auto object-contain drop-shadow-xl transition-transform duration-500 ease-out group-hover:scale-105" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/meat_ombra.png"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="text-xs font-medium uppercase tracking-[0.15em] text-[#116432] mb-2">Frollatura Carne</span>
<h3 className="font-['Syne'] font-semibold text-lg tracking-tight text-[#0d0d0b] mb-1 leading-snug">Meat Curing Device 120</h3>
<p className="text-xs font-normal text-neutral-600 mb-3">Capacità: 120 kg</p>
<p className="text-sm font-normal text-neutral-700 leading-relaxed flex-grow">Gestione multizona e report HACCP automatici. Ideale per volumi medi e GDO.</p>
<div className="mt-5 pt-5 border-t border-neutral-100 flex items-center justify-between">
<a className="text-xs font-medium text-neutral-600 hover:text-[#116432] transition-colors flex items-center gap-1 group/link" href="https://www.stagionello.com/stagionello-meat-curing-device/" onclick="event.stopPropagation()" target="_blank">
                  Scheda prodotto <iconify-icon className="opacity-0 group-hover/link:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</a>
<button className="open-modal inline-flex items-center gap-1.5 text-xs font-semibold text-[#116432] hover:text-[#0e5228] transition-colors group/btn bg-[#116432]/10 hover:bg-[#116432]/20 px-4 py-2 rounded-full">
                  Richiedi Info <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="product-card reveal reveal-delay-2 bg-[#0d0d0b] border border-[#222220] rounded-3xl overflow-hidden flex flex-col cursor-pointer group" data-badge="Nuova Gen" data-badge-color="#C7051B" data-capacity="200 kg" data-cat="meat" data-desc="La tecnologia definitiva di ultima generazione. Calo peso gestito, maturazione intelligente e design premium per l'esposizione in vetrina." data-img="https://www.stagionello.com/wp-content/uploads/2023/11/STG-3.0-compresso.png" data-name="Dry Age 3.0" data-price="Su richiesta" data-url="https://www.stagionello.com/stagionello-dry-age-3-0/">
<div className="relative bg-[#161614] flex items-center justify-center overflow-hidden border-b border-white/5" style={{height: '216px'}}>
<span className="absolute top-4 left-4 bg-[#C7051B] text-white text-xs font-medium uppercase tracking-widest px-2.5 py-1 rounded-full z-10">Nuova Generazione</span>
<img alt="Dry Age 3.0" className="h-48 w-auto object-contain drop-shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/11/STG-3.0-compresso.png"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="text-xs font-medium uppercase tracking-[0.15em] text-[#4ade80] mb-2">Frollatura Carne</span>
<h3 className="font-['Syne'] font-semibold text-lg tracking-tight text-white mb-1 leading-snug">Dry Age 3.0</h3>
<p className="text-xs font-normal text-white/70 mb-3">Capacità: 200 kg</p>
<p className="text-sm font-normal text-white/80 leading-relaxed flex-grow">Tecnologia nuova generazione con design premium per esposizione in vetrina. Il top di gamma.</p>
<div className="mt-5 pt-5 border-t border-white/[0.08] flex items-center justify-between">
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors flex items-center gap-1 group/link" href="https://www.stagionello.com/stagionello-dry-age-3-0/" onclick="event.stopPropagation()" target="_blank">
                  Scheda prodotto <iconify-icon className="opacity-0 group-hover/link:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</a>
<button className="open-modal inline-flex items-center gap-1.5 text-xs font-semibold text-[#4ade80] hover:text-white transition-colors group/btn bg-[#4ade80]/15 hover:bg-[#4ade80]/30 px-4 py-2 rounded-full">
                  Richiedi Info <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="product-card reveal bg-white border border-neutral-200/80 rounded-3xl overflow-hidden flex flex-col cursor-pointer group" data-badge="" data-badge-color="" data-capacity="60 kg" data-cat="salami" data-desc="Stagionatura professionale per salumi artigianali. Controllo capillare di pH e umidità per risultati costanti e sicuri." data-img="https://www.stagionello.com/wp-content/uploads/2023/08/salami_ombra.png" data-name="Salami Curing Device 60" data-price="Su richiesta" data-url="https://www.stagionello.com/stagionello-salumi-curing-device/">
<div className="relative bg-neutral-50 flex items-center justify-center overflow-hidden border-b border-neutral-100" style={{height: '216px'}}>
<img alt="Salami Curing Device 60" className="h-40 w-auto object-contain drop-shadow-xl transition-transform duration-500 ease-out group-hover:scale-105" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/salami_ombra.png"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="text-xs font-medium uppercase tracking-[0.15em] text-[#c4993a] mb-2">Stagionatura Salumi</span>
<h3 className="font-['Syne'] font-semibold text-lg tracking-tight text-[#0d0d0b] mb-1 leading-snug">Salami Curing Device 60</h3>
<p className="text-xs font-normal text-neutral-600 mb-3">Capacità: 60 kg</p>
<p className="text-sm font-normal text-neutral-700 leading-relaxed flex-grow">Controllo capillare di pH e umidità. Perfetto per salumerie e piccoli produttori artigianali.</p>
<div className="mt-5 pt-5 border-t border-neutral-100 flex items-center justify-between">
<a className="text-xs font-medium text-neutral-600 hover:text-[#c4993a] transition-colors flex items-center gap-1 group/link" href="https://www.stagionello.com/stagionello-salumi-curing-device/" onclick="event.stopPropagation()" target="_blank">
                  Scheda prodotto <iconify-icon className="opacity-0 group-hover/link:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</a>
<button className="open-modal inline-flex items-center gap-1.5 text-xs font-semibold text-[#116432] hover:text-[#0e5228] transition-colors group/btn bg-[#116432]/10 hover:bg-[#116432]/20 px-4 py-2 rounded-full">
                  Richiedi Info <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="product-card reveal reveal-delay-1 bg-white border border-neutral-200/80 rounded-3xl overflow-hidden flex flex-col cursor-pointer group" data-badge="Pro" data-badge-color="#c4993a" data-capacity="120 kg" data-cat="salami" data-desc="Per produttori di salumi che necessitano di volumi elevati e tracciabilità completa. Multi-programma e multi-zona." data-img="https://www.stagionello.com/wp-content/uploads/2023/08/salami_ombra.png" data-name="Salami Curing Device 120" data-price="Su richiesta" data-url="https://www.stagionello.com/stagionello-salumi-curing-device/">
<div className="relative bg-neutral-50 flex items-center justify-center overflow-hidden border-b border-neutral-100" style={{height: '216px'}}>
<span className="absolute top-4 left-4 bg-[#c4993a] text-white text-xs font-medium uppercase tracking-widest px-2.5 py-1 rounded-full z-10">Pro</span>
<img alt="Salami Curing Device 120" className="h-40 w-auto object-contain drop-shadow-xl transition-transform duration-500 ease-out group-hover:scale-105" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/salami_ombra.png"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="text-xs font-medium uppercase tracking-[0.15em] text-[#c4993a] mb-2">Stagionatura Salumi</span>
<h3 className="font-['Syne'] font-semibold text-lg tracking-tight text-[#0d0d0b] mb-1 leading-snug">Salami Curing Device 120</h3>
<p className="text-xs font-normal text-neutral-600 mb-3">Capacità: 120 kg</p>
<p className="text-sm font-normal text-neutral-700 leading-relaxed flex-grow">Multi-programma e multi-zona. Ideale per produttori artigianali e laboratori di trasformazione.</p>
<div className="mt-5 pt-5 border-t border-neutral-100 flex items-center justify-between">
<a className="text-xs font-medium text-neutral-600 hover:text-[#c4993a] transition-colors flex items-center gap-1 group/link" href="https://www.stagionello.com/stagionello-salumi-curing-device/" onclick="event.stopPropagation()" target="_blank">
                  Scheda prodotto <iconify-icon className="opacity-0 group-hover/link:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</a>
<button className="open-modal inline-flex items-center gap-1.5 text-xs font-semibold text-[#116432] hover:text-[#0e5228] transition-colors group/btn bg-[#116432]/10 hover:bg-[#116432]/20 px-4 py-2 rounded-full">
                  Richiedi Info <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="product-card reveal reveal-delay-2 bg-white border border-neutral-200/80 rounded-3xl overflow-hidden flex flex-col cursor-pointer group" data-badge="Innovazione" data-badge-color="#0369a1" data-capacity="30 kg" data-cat="fish" data-desc="Innovazione assoluta per la maturazione ittica. Protocolli HACCP specifici per pesce con controllo microbiologico avanzato." data-img="https://www.stagionello.com/wp-content/uploads/2023/08/fish_ombra.png" data-name="Fish Curing Device" data-price="Su richiesta" data-url="https://www.stagionello.com/stagionello-fish-curing-device/">
<div className="relative bg-neutral-50 flex items-center justify-center overflow-hidden border-b border-neutral-100" style={{height: '216px'}}>
<span className="absolute top-4 left-4 bg-[#0369a1] text-white text-xs font-medium uppercase tracking-widest px-2.5 py-1 rounded-full z-10">Innovazione</span>
<img alt="Fish Curing Device" className="h-40 w-auto object-contain drop-shadow-xl transition-transform duration-500 ease-out group-hover:scale-105" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/fish_ombra.png"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="text-xs font-medium uppercase tracking-[0.15em] text-[#0369a1] mb-2">Maturazione Pesce</span>
<h3 className="font-['Syne'] font-semibold text-lg tracking-tight text-[#0d0d0b] mb-1 leading-snug">Fish Curing Device</h3>
<p className="text-xs font-normal text-neutral-600 mb-3">Capacità: 30 kg</p>
<p className="text-sm font-normal text-neutral-700 leading-relaxed flex-grow">Innovazione assoluta per ristoranti di pesce. Protocolli HACCP specifici con controllo microbiologico.</p>
<div className="mt-5 pt-5 border-t border-neutral-100 flex items-center justify-between">
<a className="text-xs font-medium text-neutral-600 hover:text-[#0369a1] transition-colors flex items-center gap-1 group/link" href="https://www.stagionello.com/stagionello-fish-curing-device/" onclick="event.stopPropagation()" target="_blank">
                  Scheda prodotto <iconify-icon className="opacity-0 group-hover/link:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</a>
<button className="open-modal inline-flex items-center gap-1.5 text-xs font-semibold text-[#116432] hover:text-[#0e5228] transition-colors group/btn bg-[#116432]/10 hover:bg-[#116432]/20 px-4 py-2 rounded-full">
                  Richiedi Info <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center reveal">
<a className="inline-flex items-center gap-2 bg-[#0d0d0b] hover:bg-[#222220] text-white text-xs font-semibold tracking-widest uppercase py-4 px-7 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0" href="#preventivo">
            Non sai quale scegliere? Richiedi una consulenza
            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<div className="hidden fixed inset-0 z-[200] flex items-end md:items-center justify-center p-0 md:p-6" id="lead-modal" style={{opacity: '0'}}>
<div className="absolute inset-0 bg-black/40 backdrop-blur-md" id="modal-backdrop"></div>
<div className="relative z-10 bg-white w-full md:max-w-2xl md:rounded-3xl rounded-t-3xl shadow-[0_40px_80px_rgba(0,0,0,0.15)] overflow-hidden max-h-[92vh] overflow-y-auto">
<div className="flex justify-center pt-3 pb-1 md:hidden">
<div className="w-10 h-1 rounded-full bg-neutral-200"></div>
</div>
<button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors z-10" id="modal-close">
<iconify-icon className="text-[#0d0d0b]" icon="solar:close-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="bg-neutral-50 flex flex-col items-center justify-center p-8 gap-5 border-b md:border-b-0 md:border-r border-neutral-100">
<img alt="" className="h-44 w-auto object-contain drop-shadow-xl" id="modal-img" src=""/>
<a className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#116432] hover:text-[#0e5228] border border-[#116432]/20 hover:border-[#116432]/50 bg-[#116432]/5 hover:bg-[#116432]/10 rounded-full px-4 py-2 transition-all" href="#" id="modal-product-link" onclick="event.stopPropagation()" target="_blank">
              Visita la pagina prodotto
              <iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
<div className="p-7">
<span className="hidden text-xs font-medium uppercase tracking-widest px-2.5 py-1 rounded-full text-white mb-3 inline-block" id="modal-badge"></span>
<h3 className="font-['Syne'] font-semibold text-xl tracking-tight text-[#0d0d0b] mb-1 mt-2" id="modal-name"></h3>
<p className="text-xs font-normal text-neutral-600 mb-2" id="modal-capacity"></p>
<p className="text-sm font-normal text-neutral-700 leading-relaxed mb-5" id="modal-desc"></p>
<form className="flex flex-col gap-3.5" id="modal-lead-form" novalidate="">
<div>
<label className="block text-xs font-medium uppercase tracking-widest text-neutral-600 mb-1.5" htmlFor="modal-name-input">Nome e Cognome *</label>
<input className="w-full bg-white border border-neutral-300 text-sm text-[#0d0d0b] px-4 py-3 rounded-xl outline-none focus:border-[#116432] focus:ring-2 focus:ring-[#116432]/20 transition-all placeholder:text-neutral-400" id="modal-name-input" name="name" placeholder="Mario Rossi" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium uppercase tracking-widest text-neutral-600 mb-1.5" htmlFor="modal-email-input">Email *</label>
<input className="w-full bg-white border border-neutral-300 text-sm text-[#0d0d0b] px-4 py-3 rounded-xl outline-none focus:border-[#116432] focus:ring-2 focus:ring-[#116432]/20 transition-all placeholder:text-neutral-400" id="modal-email-input" name="email" placeholder="email@esempio.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium uppercase tracking-widest text-neutral-600 mb-1.5" htmlFor="modal-phone-input">Telefono <span className="lowercase tracking-normal font-light">(opzionale)</span></label>
<input className="w-full bg-white border border-neutral-300 text-sm text-[#0d0d0b] px-4 py-3 rounded-xl outline-none focus:border-[#116432] focus:ring-2 focus:ring-[#116432]/20 transition-all placeholder:text-neutral-400" id="modal-phone-input" name="phone" placeholder="+39 000 000 0000" type="tel"/>
</div>
<button className="w-full bg-[#116432] hover:bg-[#147a3b] text-white text-xs font-semibold tracking-widest uppercase py-4 rounded-xl transition-all shadow-md active:scale-[0.99] mt-2 flex items-center justify-center gap-2" id="modal-submit-btn" type="submit">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Richiedi Informazioni
              </button>
<p className="text-xs text-center text-neutral-500 font-normal">Risposta entro 24h. Nessun obbligo.</p>
</form>
</div>
</div>
</div>
</div>

<section className="bg-white text-[#0d0d0b] border-t border-neutral-200/60 relative z-30 overflow-hidden" id="metodo">
<div className="max-w-[1400px] mx-auto px-5 md:px-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start py-24 md:py-32">
<div className="order-2 lg:order-1 hidden lg:block">
<div className="sticky top-28 w-full aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-100">
<img alt="Alessandro Cuomo" className="w-full h-full object-cover object-top filter grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-out" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/alessandro-cuomo-2.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-7 left-7 border-l-2 border-[#116432] pl-4">
<p className="font-['Syne'] font-semibold text-base text-[#0d0d0b] mb-0.5">Alessandro Cuomo</p>
<p className="text-xs font-normal text-neutral-700 uppercase tracking-widest">Inventore del Metodo</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2 py-6 md:py-10">
<p className="reveal text-xs font-medium tracking-[0.18em] uppercase text-[#116432] mb-4">Il Metodo Scientifico</p>
<h2 className="reveal font-['Syne'] font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-14">
              A pH controllato.<br/><span className="text-neutral-500">Il Cuomo Method®.</span>
</h2>
<div className="flex flex-col gap-11 border-l border-neutral-200 pl-10 md:pl-12 relative">
<div className="reveal relative">
<span className="step-circle">01</span>
<h3 className="text-lg font-semibold text-[#0d0d0b] mb-2.5 tracking-tight">Sensori pH attivi 24/7</h3>
<p className="text-sm font-normal text-neutral-700 leading-relaxed">Monitoraggio continuo del pH e dei parametri ambientali tramite sensori industriali ad altissima precisione integrati nella camera.</p>
</div>
<div className="reveal relative">
<span className="step-circle">02</span>
<h3 className="text-lg font-semibold text-[#0d0d0b] mb-2.5 tracking-tight">Algoritmo Auto-Adattivo</h3>
<p className="text-sm font-normal text-neutral-700 leading-relaxed">Il sistema analizza ogni variazione e modifica autonomamente la ricetta per mantenere il microclima ideale, senza intervento manuale.</p>
</div>
<div className="reveal relative">
<span className="step-circle">03</span>
<h3 className="text-lg font-semibold text-[#0d0d0b] mb-2.5 tracking-tight">Validazione HACCP Integrata</h3>
<p className="text-sm font-normal text-neutral-700 leading-relaxed">Ogni ciclo genera automaticamente report e tracciabilità a norma di legge. Pronti per qualsiasi ispezione.</p>
</div>
</div>
<div className="reveal mt-14 p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
<p className="text-base font-normal italic text-neutral-800 leading-relaxed">"Il primo metodo al mondo che combina controllo del calo peso, acidificazione e umidità in un singolo algoritmo brevettato."</p>
<p className="mt-4 text-xs font-normal text-neutral-600 not-italic">— Alessandro Cuomo, Fondatore</p>
</div>
<a className="reveal inline-flex items-center gap-2 bg-white border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 text-[#0d0d0b] text-xs font-semibold tracking-widest uppercase py-4 px-8 rounded-full mt-10 transition-all shadow-sm" href="/frollatura-della-carne-il-dry-aging-e-le-soluzioni-tecnologiche/">
              Approfondisci il Metodo
              <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="relative bg-[#f5f2ec] overflow-hidden border-t border-neutral-200/60" id="academy">
<div className="relative h-[420px] md:h-[500px] flex items-end overflow-hidden bg-neutral-100">
<img alt="Stagionello Academy" className="absolute inset-0 w-full h-full object-cover object-center opacity-30 mix-blend-multiply" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/STG-ACADEMY.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#f5f2ec] via-[#f5f2ec]/80 to-transparent"></div>
<div className="bg-gradient-to-r from-[#f5f2ec]/90 via-[#f5f2ec]/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 max-w-[1400px] w-full mx-auto px-5 md:px-10 pb-12 md:pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
<div className="">
<img alt="Academy Logo" className="reveal h-10 md:h-12 mb-5 opacity-80" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/06/stagionello-academy-logo.png"/>
<h2 className="reveal leading-[1.05] md:text-5xl lg:text-6xl text-4xl font-semibold text-[#0d0d0b] tracking-tight font-['Syne'] mb-3">
              Diventa il riferimento<br/>della tua categoria.
            </h2>
<p className="reveal text-sm md:text-base font-normal text-neutral-700 max-w-xl leading-relaxed">Masterclass, corsi on-demand e certificazioni firmate Alessandro Cuomo. Formazione professionale per chi vuole dominare il dry-aging.</p>
</div>
<div className="reveal flex-shrink-0 flex flex-wrap gap-5 md:flex-col md:items-end md:gap-3">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center flex-shrink-0 shadow-sm">
<iconify-icon className="text-[#116432]" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<div>
<p className="font-['Syne'] font-semibold text-lg text-[#0d0d0b] leading-tight">12.000+</p>
<p className="text-xs font-medium uppercase tracking-widest text-neutral-600">Professionisti formati</p>
</div>
</div>
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center flex-shrink-0 shadow-sm">
<iconify-icon className="text-[#c4993a]" icon="solar:global-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<div>
<p className="font-['Syne'] font-semibold text-lg text-[#0d0d0b] leading-tight">68 Paesi</p>
<p className="text-xs font-medium uppercase tracking-widest text-neutral-600">Studenti attivi</p>
</div>
</div>
</div>
</div>
</div>
<div className="max-w-[1400px] mx-auto px-5 md:px-10 pb-20 md:pb-28 -mt-2">
<div className="reveal flex flex-wrap gap-2 mb-10 pt-10 border-t border-neutral-200/60">
<button className="academy-tab active text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border transition-all bg-[#116432] text-white border-[#116432] cursor-pointer" data-tab="all">Tutti i Corsi</button>
<button className="academy-tab text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border transition-all text-neutral-700 bg-white border-neutral-300 hover:bg-neutral-50 cursor-pointer" data-tab="frollatura">Frollatura</button>
<button className="academy-tab text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border transition-all text-neutral-700 bg-white border-neutral-300 hover:bg-neutral-50 cursor-pointer" data-tab="salumi">Salumi</button>
<button className="academy-tab text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border transition-all text-neutral-700 bg-white border-neutral-300 hover:bg-neutral-50 cursor-pointer" data-tab="pesce">Pesce</button>
<button className="academy-tab text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border transition-all text-neutral-700 bg-white border-neutral-300 hover:bg-neutral-50 cursor-pointer" data-tab="haccp">HACCP</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6" id="academy-courses-grid">

<a className="course-card reveal group relative bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-col" data-course-cat="frollatura" href="/corsi-di-formazione/">
<div className="relative overflow-hidden" style={{height: '188px'}}>
<img alt="Masterclass Frollatura" className="course-thumb w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/MAT-rev-10-slide.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0b]/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border level-pill-beginner bg-white/10 backdrop-blur-sm border-white/20 text-white">
<iconify-icon icon="solar:play-circle-linear" width="12"></iconify-icon>
                  Base
                </span>
</div>
</div>
<div className="p-5 flex flex-col flex-grow">
<span className="text-xs font-medium uppercase tracking-[0.15em] text-[#116432] mb-2">Frollatura</span>
<h3 className="font-['Syne'] font-semibold text-sm text-[#0d0d0b] mb-2 leading-snug">Masterclass Frollatura Professionale</h3>
<p className="text-xs font-normal text-neutral-700 leading-relaxed flex-grow mb-4">Dal taglio alla vetrina: tutto quello che devi sapere per produrre carne frollata di qualità assoluta.</p>
<div className="flex items-center justify-between pt-3 border-t border-neutral-100">
<div className="flex items-center gap-1.5 text-xs text-neutral-600">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                  4h 30min
                </div>
<span className="text-xs font-semibold uppercase tracking-widest text-[#116432]">Gratis</span>
</div>
</div>
</a>

<a className="course-card reveal reveal-delay-1 group relative bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-col" data-course-cat="salumi" href="/corsi-di-formazione/">
<div className="relative overflow-hidden bg-neutral-100" style={{height: '188px'}}>
<img alt="Corso Salumi" className="course-thumb w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-110" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/salami_ombra.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0b]/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border level-pill-intermediate bg-white/10 backdrop-blur-sm border-white/20 text-white">
<iconify-icon icon="solar:play-circle-linear" width="12"></iconify-icon>
                  Intermedio
                </span>
</div>
</div>
<div className="p-5 flex flex-col flex-grow">
<span className="text-xs font-medium uppercase tracking-[0.15em] text-[#c4993a] mb-2">Salumi</span>
<h3 className="font-['Syne'] font-semibold text-sm text-[#0d0d0b] mb-2 leading-snug">Stagionatura Salumi a pH Controllato</h3>
<p className="text-xs font-normal text-neutral-700 leading-relaxed flex-grow mb-4">Tecniche avanzate di stagionatura per produrre salumi artigianali sicuri, costanti e di alta qualità.</p>
<div className="flex items-center justify-between pt-3 border-t border-neutral-100">
<div className="flex items-center gap-1.5 text-xs text-neutral-600">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                  3h 45min
                </div>
<span className="text-xs font-semibold uppercase tracking-widest text-[#116432]">Gratis</span>
</div>
</div>
</a>

<a className="course-card reveal reveal-delay-2 group relative bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-col" data-course-cat="pesce" href="/corsi-di-formazione/">
<div className="relative overflow-hidden bg-neutral-100" style={{height: '188px'}}>
<img alt="Corso Pesce" className="course-thumb w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-110" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/fish_ombra.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0b]/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border level-pill-advanced bg-white/10 backdrop-blur-sm border-white/20 text-white">
<iconify-icon icon="solar:play-circle-linear" width="12"></iconify-icon>
                  Avanzato
                </span>
</div>
</div>
<div className="p-5 flex flex-col flex-grow">
<span className="text-xs font-medium uppercase tracking-[0.15em] text-[#0369a1] mb-2">Pesce</span>
<h3 className="font-['Syne'] font-semibold text-sm text-[#0d0d0b] mb-2 leading-snug">Maturazione Sicura del Pesce</h3>
<p className="text-xs font-normal text-neutral-700 leading-relaxed flex-grow mb-4">I protocolli HACCP e le tecniche di controllo per servire pesce stagionato in totale sicurezza.</p>
<div className="flex items-center justify-between pt-3 border-t border-neutral-100">
<div className="flex items-center gap-1.5 text-xs text-neutral-600">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                  5h 15min
                </div>
<span className="text-xs font-semibold uppercase tracking-widest text-[#116432]">Gratis</span>
</div>
</div>
</a>

<a className="course-card reveal reveal-delay-3 group relative bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-col" data-course-cat="haccp" href="/corsi-di-formazione/">
<div className="relative overflow-hidden bg-neutral-100" style={{height: '188px'}}>
<img alt="Corso HACCP" className="course-thumb w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-110 mix-blend-multiply" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/STG-ACADEMY.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0b]/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border level-pill-advanced bg-white/10 backdrop-blur-sm border-white/20 text-white">
<iconify-icon icon="solar:play-circle-linear" width="12"></iconify-icon>
                  Certificazione
                </span>
</div>
</div>
<div className="p-5 flex flex-col flex-grow">
<span className="text-xs font-medium uppercase tracking-[0.15em] text-[#C7051B] mb-2">HACCP</span>
<h3 className="font-['Syne'] font-semibold text-sm text-[#0d0d0b] mb-2 leading-snug">Certificazione Ufficiale Cuomo Method®</h3>
<p className="text-xs font-normal text-neutral-700 leading-relaxed flex-grow mb-4">Il percorso completo per ottenere la certificazione di specialista e consulente del metodo.</p>
<div className="flex items-center justify-between pt-3 border-t border-neutral-100">
<div className="flex items-center gap-1.5 text-xs text-neutral-600">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                  12h 00min
                </div>
<span className="text-xs font-semibold uppercase tracking-widest text-[#0d0d0b]">Premium</span>
</div>
</div>
</a>
</div>
<div className="mt-12 text-center reveal">
<a className="inline-flex justify-center items-center gap-2 border border-neutral-300 text-[#0d0d0b] text-xs font-semibold tracking-widest uppercase py-4 px-8 rounded-full hover:bg-neutral-50 hover:border-neutral-400 transition-all shadow-sm" href="/corsi-di-formazione/">
            Scopri tutta l'Academy
            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-[#116432] text-white py-24 md:py-32 relative overflow-hidden" id="roi">
<div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at right, white 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="absolute -top-40 -right-40 w-96 h-96 bg-white/20 blur-[100px] rounded-full"></div>
<div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
<div className="lg:w-1/2 text-center lg:text-left">
<p className="reveal text-xs font-medium tracking-[0.18em] uppercase text-white/70 mb-4">Calcola i profitti</p>
<h2 className="reveal font-['Syne'] font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6">
            Il tuo investimento si ripaga da solo.
          </h2>
<p className="reveal text-sm md:text-base font-normal text-white/90 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10">
            In media, i nostri clienti recuperano il costo dell'impianto in soli <strong className="text-white font-medium">5-6 mesi</strong> grazie al sovrapprezzo applicabile ai prodotti frollati e all'azzeramento degli scarti.
          </p>
<a className="reveal inline-flex items-center gap-2 bg-white text-[#116432] text-xs font-semibold tracking-widest uppercase py-4 px-8 rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1" href="#preventivo">
            Richiedi un Business Plan
            <iconify-icon icon="solar:calculator-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
<div className="lg:w-5/12 w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl reveal reveal-delay-2 text-[#0d0d0b] mx-auto lg:mx-0">
<div className="mb-6 pb-6 border-b border-neutral-200">
<div className="flex justify-between items-end mb-2">
<label className="text-xs font-medium uppercase tracking-widest text-neutral-600" htmlFor="calc-cap">Capacità Impianto</label>
<span className="text-sm font-semibold text-[#116432]" id="calc-cap-val">100 kg</span>
</div>
<input className="roi-slider mt-2" id="calc-cap" max="500" min="50" step="10" type="range" value="100"/>
</div>
<div className="mb-6 pb-6 border-b border-neutral-200">
<div className="flex justify-between items-end mb-2">
<label className="text-xs font-medium uppercase tracking-widest text-neutral-600" htmlFor="calc-price">Prezzo di Vendita (€/kg)</label>
<span className="text-sm font-semibold text-[#116432]" id="calc-price-val">50 €</span>
</div>
<input className="roi-slider mt-2" id="calc-price" max="150" min="20" step="5" type="range" value="50"/>
</div>
<div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-200 mb-6">
<p className="text-xs font-medium uppercase tracking-widest text-neutral-600 mb-1">Ricavo Lordo Mensile Stimato</p>
<p className="font-['Syne'] font-semibold text-3xl text-[#0d0d0b]" id="calc-revenue">€ 5.000</p>
<p className="text-xs text-neutral-500 mt-2">* Stima basata su 1 rotazione completa al mese.</p>
</div>
<a className="w-full bg-[#116432] hover:bg-[#147a3b] text-white text-xs font-semibold tracking-widest uppercase py-4 rounded-xl transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2" href="#preventivo">
            Ottieni preventivo esatto
            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-[#0d0d0b] text-white py-24 border-b border-[#222220]" id="preventivo">
<div className="max-w-[800px] mx-auto px-5 md:px-10 text-center">
<p className="reveal text-xs font-medium tracking-[0.18em] uppercase text-[#4ade80] mb-4">Inizia Oggi</p>
<h2 className="reveal font-['Syne'] font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6">
          Pronto a trasformare la tua attività?
        </h2>
<p className="reveal text-sm md:text-base font-normal text-white/70 mb-10 leading-relaxed">
          Compila il modulo per ricevere un preventivo personalizzato e una consulenza gratuita dai nostri esperti di maturazione.
        </p>
<form className="reveal bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl text-left flex flex-col gap-4" id="footer-lead-form" novalidate="">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium uppercase tracking-widest text-white/60 mb-1.5" htmlFor="footer-fname">Nome *</label>
<input className="w-full bg-white/10 border border-white/20 text-sm text-white px-4 py-3 rounded-xl outline-none focus:border-[#4ade80] focus:ring-2 focus:ring-[#4ade80]/20 transition-all placeholder:text-white/30" id="footer-fname" name="fname" placeholder="Mario Rossi" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium uppercase tracking-widest text-white/60 mb-1.5" htmlFor="footer-email">Email *</label>
<input className="w-full bg-white/10 border border-white/20 text-sm text-white px-4 py-3 rounded-xl outline-none focus:border-[#4ade80] focus:ring-2 focus:ring-[#4ade80]/20 transition-all placeholder:text-white/30" id="footer-email" name="email" placeholder="email@esempio.com" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium uppercase tracking-widest text-white/60 mb-1.5" htmlFor="footer-phone">Telefono *</label>
<input className="w-full bg-white/10 border border-white/20 text-sm text-white px-4 py-3 rounded-xl outline-none focus:border-[#4ade80] focus:ring-2 focus:ring-[#4ade80]/20 transition-all placeholder:text-white/30" id="footer-phone" name="phone" placeholder="+39 000 000 0000" required="" type="tel"/>
</div>
<div className="relative">
<label className="block text-xs font-medium uppercase tracking-widest text-white/60 mb-1.5" htmlFor="footer-business">Tipo di Attività</label>
<div className="relative">
<select className="w-full bg-white/10 border border-white/20 text-sm text-white px-4 py-3 rounded-xl outline-none focus:border-[#4ade80] focus:ring-2 focus:ring-[#4ade80]/20 transition-all appearance-none cursor-pointer" id="footer-business" name="business">
<option className="text-black" value="">Seleziona...</option>
<option className="text-black" value="macelleria">Macelleria</option>
<option className="text-black" value="ristorante">Ristorante</option>
<option className="text-black" value="salumificio">Salumificio</option>
<option className="text-black" value="pescheria">Pescheria</option>
<option className="text-black" value="altro">Altro</option>
</select>
<iconify-icon className="absolute right`-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium uppercase tracking-widest text-white/60 mb-1.5" htmlFor="footer-message">Dettagli Progetto</label>
<textarea className="w-full bg-white/10 border border-white/20 text-sm text-white px-4 py-3 rounded-xl outline-none focus:border-[#4ade80] focus:ring-2 focus:ring-[#4ade80]/20 transition-all placeholder:text-white/30 resize-none" id="footer-message" name="message" placeholder="Di cosa hai bisogno? (Es. Sto aprendo una nuova macelleria...)" rows="3"></textarea>
</div>
<button className="w-full bg-[#4ade80] hover:bg-[#34d399] text-[#0d0d0b] text-sm font-semibold tracking-widest uppercase py-4 rounded-xl transition-all shadow-[0_0_24px_rgba(74,222,128,0.25)] hover:shadow-[0_0_32px_rgba(74,222,128,0.4)] active:scale-[0.99] mt-2 flex items-center justify-center gap-2" id="footer-submit-btn" type="submit">
            Ottieni Preventivo
            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<div className="flex items-center justify-center gap-2 mt-1">
<iconify-icon className="text-[#4ade80]/60" icon="solar:shield-check-linear" width="14"></iconify-icon>
<p className="text-[11px] text-center text-white/40 font-normal">Dati trattati nel rispetto del GDPR. Non inviamo spam.</p>
</div>
</form>
</div>
</section>
</main>

<footer className="bg-[#0d0d0b] text-white/60 pt-16 pb-8 border-t border-white/5 relative z-20">
<div className="max-w-[1400px] mx-auto px-5 md:px-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 mb-16">
<div className="lg:col-span-2">
<svg className="logo-stagionello logo-stagionello-dark mb-6" fill="none" style={{filter: 'brightness(0) invert(1)'}} viewbox="0 0 220 52" xmlns="http://www.w3.org/2000/svg">
<text className="logo-main-text" fontFamily="Georgia, 'Times New Roman', serif" fontSize="36" font-style={{}} font-weight="600" x="0" y="34">Stagionello</text>
<text className="logo-registered" fontFamily="Arial, sans-serif" fontSize="11" font-weight="400" x="214" y="14">®</text>
<rect className="logo-flag-green" height="4" width="24" x="0" y="38"></rect>
<rect className="logo-flag-white" height="4" width="24" x="24" y="38"></rect>
<rect className="logo-flag-red" height="4" width="24" x="48" y="38"></rect>
<text className="logo-subtitle" fontFamily="Arial, Helvetica, sans-serif" fontSize="6.5" font-weight="400" letter-spacing="2.2" x="0" y="50">WE SEE TRADITION IN YOUR FUTURE</text>
</svg>
<p className="text-sm font-normal text-white/60 leading-relaxed mb-6 max-w-sm">
            Impianti brevettati per la frollatura della carne, la maturazione del pesce e la stagionatura dei salumi. Cuomo Method® a pH controllato.
          </p>
<div className="flex items-center gap-3">
<a aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors" href="#">
<iconify-icon icon="ri:facebook-fill" width="18"></iconify-icon>
</a>
<a aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors" href="#">
<iconify-icon icon="ri:instagram-line" width="18"></iconify-icon>
</a>
<a aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors" href="#">
<iconify-icon icon="ri:youtube-fill" width="18"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors" href="#">
<iconify-icon icon="ri:linkedin-fill" width="18"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-5 tracking-wide">Impianti</h4>
<ul className="flex flex-col gap-3">
<li><a className="text-sm hover:text-white transition-colors" href="#prodotti">Frollatura Carne</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#prodotti">Stagionatura Salumi</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#prodotti">Maturazione Pesce</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#soluzioni">Celle Industriali</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#soluzioni">Arredamento Su Misura</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-5 tracking-wide">Azienda</h4>
<ul className="flex flex-col gap-3">
<li><a className="text-sm hover:text-white transition-colors" href="#">Chi Siamo</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#metodo">Il Metodo Cuomo®</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#academy">Stagionello® Academy</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">Rete Vendita Globale</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#preventivo">Contatti</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-5 tracking-wide">Sede Centrale</h4>
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#4ade80] flex-shrink-0 mt-0.5" icon="solar:map-point-linear" width="18"></iconify-icon>
<span className="text-sm leading-relaxed">Arredo Inox S.r.l.<br/>Via E. Fermi, 11<br/>88900 Crotone (KR), Italia</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#4ade80] flex-shrink-0" icon="solar:phone-linear" width="18"></iconify-icon>
<a className="text-sm hover:text-white transition-colors" href="tel:+390962930062">+39 0962 930062</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#4ade80] flex-shrink-0" icon="solar:letter-linear" width="18"></iconify-icon>
<a className="text-sm hover:text-white transition-colors" href="mailto:info@stagionello.com">info@stagionello.com</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 pb-safe">
<p className="text-xs text-white/40">
          © 2024 Arredo Inox S.r.l. - P.IVA 02446520792. Tutti i diritti riservati.<br className="hidden md:inline"/> Stagionello® e Cuomo Method® sono marchi registrati.
        </p>
<div className="flex items-center gap-4">
<a className="text-xs text-white/40 hover:text-white transition-colors" href="#">Privacy Policy</a>
<span className="text-white/20">•</span>
<a className="text-xs text-white/40 hover:text-white transition-colors" href="#">Cookie Policy</a>
<span className="text-white/20">•</span>
<a className="text-xs text-white/40 hover:text-white transition-colors" href="#">Termini di Vendita</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
