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



  (function() {

    // --- PROGRESS BAR ---
    const progressBar = document.getElementById('progress-bar');
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = pct + '%';
    }
    window.addEventListener('scroll', updateProgress, { passive: true });

    // --- NAVBAR SCROLL ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('nav-scrolled', window.scrollY > 30);
    }, { passive: true });

    // --- MOBILE MENU ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu    = document.getElementById('mobile-menu');
    const menuIcon      = document.getElementById('menu-icon');
    let menuOpen = false;
    mobileMenuBtn.addEventListener('click', () => {
      menuOpen = !menuOpen;
      mobileMenu.classList.toggle('hidden', !menuOpen);
      menuIcon.setAttribute('icon', menuOpen ? 'solar:close-linear' : 'solar:hamburger-menu-linear');
      mobileMenuBtn.setAttribute('aria-expanded', menuOpen);
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuOpen = false;
        mobileMenu.classList.add('hidden');
        menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // --- HERO FORM TOGGLE (MOBILE) ---
    const formToggleBtn     = document.getElementById('form-toggle-btn');
    const heroFormWrapper   = document.getElementById('hero-form-wrapper');
    const formToggleIcon    = document.getElementById('form-toggle-icon');
    if (formToggleBtn) {
      formToggleBtn.addEventListener('click', () => {
        const isOpen = heroFormWrapper.classList.toggle('show');
        formToggleBtn.setAttribute('aria-expanded', isOpen);
        formToggleIcon.style.transform = isOpen ? 'rotate(180deg)' : '';
      });
    }

    // --- REVEAL ON SCROLL ---
    const revealEls = document.querySelectorAll('.reveal');
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => revealObs.observe(el));

    // --- ANIMATED STAT NUMBERS ---
    function animateNumber(el, target, duration) {
      const start = performance.now();
      const update = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        el.textContent = Math.round(ease * target).toLocaleString('it-IT');
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    }
    const statObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target;
          animateNumber(el, parseInt(el.dataset.target), 1800);
          statObs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.stat-number').forEach(el => statObs.observe(el));

    // --- TOAST ---
    function showToast(msg) {
      const toast = document.getElementById('toast');
      const toastMsg = document.getElementById('toast-msg');
      toastMsg.textContent = msg;
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
      toast.style.pointerEvents = 'auto';
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(-12px)';
        toast.style.pointerEvents = 'none';
      }, 3500);
    }

    // --- HERO LEAD FORM ---
    const heroLeadForm = document.getElementById('hero-lead-form');
    const heroSubmitBtn = document.getElementById('hero-submit-btn');
    if (heroLeadForm) {
      heroLeadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fname = heroLeadForm.querySelector('[name="fname"]').value.trim();
        const email = heroLeadForm.querySelector('[name="email"]').value.trim();
        if (!fname || !email || !email.includes('@')) {
          showToast('Compila tutti i campi obbligatori.');
          return;
        }
        heroSubmitBtn.innerHTML = '<iconify-icon icon="solar:check-circle-bold" width="16" class="text-white"></iconify-icon> Guida in arrivo!';
        heroSubmitBtn.disabled = true;
        heroSubmitBtn.classList.add('opacity-70');
        showToast('✓ Perfetto! La guida ti è stata inviata via email.');
        setTimeout(() => {
          heroLeadForm.reset();
          heroSubmitBtn.innerHTML = '<iconify-icon icon="solar:download-linear" width="15" style="stroke-width:1.5;"></iconify-icon> Scarica Gratis la Guida';
          heroSubmitBtn.disabled = false;
          heroSubmitBtn.classList.remove('opacity-70');
        }, 4000);
      });
    }

    // --- PRODUCT FILTER ---
    const filterPills = document.querySelectorAll('.filter-pill input[type="radio"]');
    const productCards = document.querySelectorAll('#products-grid .product-card');
    const productCount = document.getElementById('product-count');
    filterPills.forEach(radio => {
      radio.addEventListener('change', () => {
        const val = radio.value;
        let visible = 0;
        productCards.forEach(card => {
          const cat = card.dataset.cat;
          const show = (val === 'all' || cat === val);
          card.style.display = show ? '' : 'none';
          if (show) visible++;
        });
        productCount.textContent = visible + (visible === 1 ? ' impianto' : ' impianti');
      });
    });

    // --- PRODUCT DETAIL MODAL ---
    const modal         = document.getElementById('lead-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalClose    = document.getElementById('modal-close');
    const modalImg      = document.getElementById('modal-img');
    const modalName     = document.getElementById('modal-name');
    const modalCapacity = document.getElementById('modal-capacity');
    const modalDesc     = document.getElementById('modal-desc');
    const modalBadge    = document.getElementById('modal-badge');
    const modalLink     = document.getElementById('modal-product-link');

    function openModal(card) {
      modalImg.src = card.dataset.img;
      modalImg.alt = card.dataset.name;
      modalName.textContent = card.dataset.name;
      modalCapacity.textContent = 'Capacità: ' + card.dataset.capacity;
      modalDesc.textContent = card.dataset.desc;
      if (card.dataset.badge) {
        modalBadge.textContent = card.dataset.badge;
        modalBadge.style.background = card.dataset.badgeColor || '#116432';
        modalBadge.classList.remove('hidden');
      } else {
        modalBadge.classList.add('hidden');
      }
      modalLink.href = card.dataset.url || '#';
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => { modal.style.opacity = '1'; });
    }

    function closeModal() {
      modal.style.opacity = '0';
      setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }, 280);
    }

    document.querySelectorAll('.open-modal').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(btn.closest('[data-cat]'));
      });
    });
    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => openModal(card));
    });
    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

    // --- MODAL LEAD FORM ---
    const modalLeadForm   = document.getElementById('modal-lead-form');
    const modalSubmitBtn  = document.getElementById('modal-submit-btn');
    if (modalLeadForm) {
      modalLeadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name  = modalLeadForm.querySelector('[name="name"]').value.trim();
        const email = modalLeadForm.querySelector('[name="email"]').value.trim();
        if (!name || !email || !email.includes('@')) {
          showToast('Compila nome e email per continuare.');
          return;
        }
        modalSubmitBtn.innerHTML = '<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon> Richiesta Inviata!';
        modalSubmitBtn.disabled = true;
        modalSubmitBtn.classList.add('opacity-70');
        showToast('✓ Richiesta inviata! Ti contatteremo entro 24h.');
        setTimeout(() => {
          closeModal();
          modalLeadForm.reset();
          modalSubmitBtn.innerHTML = '<iconify-icon icon="solar:letter-linear" width="15" style="stroke-width:1.5;"></iconify-icon> Richiedi Informazioni';
          modalSubmitBtn.disabled = false;
          modalSubmitBtn.classList.remove('opacity-70');
        }, 2500);
      });
    }

    // --- ACADEMY TABS ---
    const academyTabs = document.querySelectorAll('.academy-tab');
    const coursesGrid = document.getElementById('academy-courses-grid');
    academyTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        academyTabs.forEach(t => {
          t.classList.remove('active', 'bg-white', 'text-[#0d0d0b]', 'border-white');
          t.classList.add('text-white/40', 'border-white/15');
        });
        tab.classList.add('active', 'bg-white', 'text-[#0d0d0b]', 'border-white');
        tab.classList.remove('text-white/40', 'border-white/15');
        const activeTab = tab.dataset.tab;
        coursesGrid.querySelectorAll('[data-course-cat]').forEach(card => {
          card.style.display = (activeTab === 'all' || card.dataset.courseCat === activeTab) ? '' : 'none';
        });
      });
    });
    // Init tabs styling
    academyTabs.forEach(t => {
      if (t.classList.contains('active')) {
        t.classList.add('bg-white', 'text-[#0d0d0b]', 'border-white');
      } else {
        t.classList.add('text-white/40', 'border-white/15');
      }
    });

    // --- ROI CALCULATOR ---
    const roiKg     = document.getElementById('roi-kg');
    const roiPrice  = document.getElementById('roi-price');
    const roiMargin = document.getElementById('roi-margin');
    const roiKgVal     = document.getElementById('roi-kg-val');
    const roiPriceVal  = document.getElementById('roi-price-val');
    const roiMarginVal = document.getElementById('roi-margin-val');
    const roiRevenue   = document.getElementById('roi-revenue');
    const roiProfit    = document.getElementById('roi-profit');
    const roiMonths    = document.getElementById('roi-months');

    function updateROI() {
      const kg     = parseInt(roiKg.value);
      const price  = parseInt(roiPrice.value);
      const margin = parseInt(roiMargin.value);
      roiKgVal.textContent    = kg + ' kg';
      roiPriceVal.textContent = '€ ' + price;
      roiMarginVal.textContent = margin + '%';
      // Update slider fill
      function setSliderPct(slider) {
        const min = parseInt(slider.min), max = parseInt(slider.max), val = parseInt(slider.value);
        const pct = ((val - min) / (max - min)) * 100;
        slider.style.setProperty('--pct', pct + '%');
      }
      setSliderPct(roiKg);
      setSliderPct(roiPrice);
      setSliderPct(roiMargin);
      const weeklyRevenue  = kg * price;
      const monthlyRevenue = weeklyRevenue * 4.3;
      const monthlyProfit  = monthlyRevenue * (margin / 100);
      const avgInvestment  = 8000;
      const roiMonthsVal   = monthlyProfit > 0 ? Math.max(1, Math.round(avgInvestment / monthlyProfit)) : '—';
      roiRevenue.textContent = '€ ' + monthlyRevenue.toLocaleString('it-IT', { maximumFractionDigits: 0 });
      roiProfit.textContent  = '€ ' + monthlyProfit.toLocaleString('it-IT', { maximumFractionDigits: 0 });
      roiMonths.innerHTML    = typeof roiMonthsVal === 'number'
        ? roiMonthsVal + ' <span class="text-xl font-light text-white/40">mesi</span>'
        : '—';
    }
    if (roiKg) {
      [roiKg, roiPrice, roiMargin].forEach(s => s.addEventListener('input', updateROI));
      updateROI();
    }

    // --- FAQ ACCORDION ---
    document.querySelectorAll('.faq-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const item    = btn.closest('.faq-item');
        const content = item.querySelector('.faq-content');
        const icon    = btn.querySelector('.faq-icon');
        const isOpen  = !content.classList.contains('hidden');
        // Close all
        document.querySelectorAll('.faq-item').forEach(i => {
          i.querySelector('.faq-content').classList.add('hidden');
          i.querySelector('.faq-icon').style.transform = '';
        });
        if (!isOpen) {
          content.classList.remove('hidden');
          icon.style.transform = 'rotate(180deg)';
        }
      });
    });

    // --- CONFIG FORM ---
    const configForm      = document.getElementById('config-form');
    const configSubmitBtn = document.getElementById('config-submit-btn');
    if (configForm) {
      configForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fname   = configForm.querySelector('[name="fname"]').value.trim();
        const email   = configForm.querySelector('[name="email"]').value.trim();
        const privacy = configForm.querySelector('[name="privacy"]').checked;
        if (!fname || !email || !email.includes('@')) {
          showToast('Compila nome e email per continuare.');
          return;
        }
        if (!privacy) {
          showToast('Accetta la Privacy Policy per procedere.');
          return;
        }
        configSubmitBtn.innerHTML = '<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon> Proposta Inviata!';
        configSubmitBtn.disabled = true;
        configSubmitBtn.classList.add('opacity-70');
        showToast('✓ Perfetto! Un esperto ti contatterà entro 24h.');
        setTimeout(() => {
          configForm.reset();
          configSubmitBtn.innerHTML = '<iconify-icon icon="solar:letter-linear" width="15" style="stroke-width:1.5;"></iconify-icon> Richiedi la Tua Proposta Gratuita';
          configSubmitBtn.disabled = false;
          configSubmitBtn.classList.remove('opacity-70');
        }, 4000);
      });
    }

    // --- CLOSE MOBILE MENU ON OUTSIDE CLICK ---
    document.addEventListener('click', (e) => {
      if (menuOpen && !navbar.contains(e.target)) {
        menuOpen = false;
        mobileMenu.classList.add('hidden');
        menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });

  })();
  
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
      

<div id="progress-bar"></div>

<div className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 bg-[#0d0d0b] border border-[#116432]/40 rounded-full px-5 py-3 shadow-2xl opacity-0 pointer-events-none -translate-y-4" id="toast" style={{transition: 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1)'}}>
<span className="w-2 h-2 rounded-full bg-[#116432] flex-shrink-0"></span>
<p className="text-xs font-light text-white whitespace-nowrap" id="toast-msg"></p>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0d0d0b]/75 backdrop-blur-2xl border-b border-white/[0.06]" id="navbar">
<div className="max-w-[1400px] mx-auto px-5 md:px-10 h-16 flex items-center justify-between gap-6">
<a aria-label="Stagionello Home" className="flex-shrink-0" href="/">
<svg className="logo-stagionello logo-stagionello-light" fill="none" viewbox="0 0 220 52" xmlns="http://www.w3.org/2000/svg">
<text className="logo-main-text" fontFamily="Georgia, 'Times New Roman', serif" fontSize="36" font-style={{}} font-weight="700" x="0" y="34">Stagionello</text>
<text className="logo-registered" fontFamily="Arial, sans-serif" fontSize="11" font-weight="400" x="214" y="14">®</text>
<rect className="logo-flag-green" height="4" width="24" x="0" y="38"></rect>
<rect className="logo-flag-white" height="4" width="24" x="24" y="38"></rect>
<rect className="logo-flag-red" height="4" width="24" x="48" y="38"></rect>
<text className="logo-subtitle" fontFamily="Arial, Helvetica, sans-serif" fontSize="6.5" font-weight="400" letter-spacing="2.2" x="0" y="50">WE SEE TRADITION IN YOUR FUTURE</text>
</svg>
</a>
<div className="hidden md:flex items-center gap-1">
<a className="text-sm font-light text-white/55 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-all" href="/stagionello-meat-curing-device/">Macchine</a>
<a className="text-sm font-light text-white/55 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-all" href="/frollatura-della-carne-il-dry-aging-e-le-soluzioni-tecnologiche/">Il Metodo</a>
<a className="text-sm font-light text-white/55 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-all" href="/corsi-di-formazione/">Academy</a>
<a className="text-sm font-light text-white/55 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-all" href="/magazine/">Magazine</a>
</div>
<div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
<a className="inline-flex items-center gap-1.5 border border-white/15 hover:border-white/40 text-white text-xs font-normal tracking-widest uppercase py-2.5 px-4 rounded-full transition-all hover:bg-white/[0.06]" href="#guida">
<iconify-icon icon="solar:download-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
          Guida Gratuita
        </a>
<a className="inline-flex items-center gap-1.5 bg-[#116432] hover:bg-[#147a3b] text-white text-xs font-normal tracking-widest uppercase py-2.5 px-5 rounded-full transition-all hover:shadow-[0_0_18px_rgba(17,100,50,0.45)] active:scale-95" href="#configura">
          Configura
          <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
<button aria-label="Menu" className="flex md:hidden w-9 h-9 items-center justify-center rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all flex-shrink-0" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" id="menu-icon" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
</div>
<div className="hidden border-t border-white/5 bg-[#0d0d0b]/98 backdrop-blur-2xl px-5 pt-6 pb-8" id="mobile-menu">
<div className="flex flex-col gap-1 mb-6">
<a className="text-sm font-light text-white/70 hover:text-white px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all" href="/stagionello-meat-curing-device/">Macchine</a>
<a className="text-sm font-light text-white/70 hover:text-white px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all" href="/frollatura-della-carne-il-dry-aging-e-le-soluzioni-tecnologiche/">Il Metodo</a>
<a className="text-sm font-light text-white/70 hover:text-white px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all" href="/corsi-di-formazione/">Academy</a>
<a className="text-sm font-light text-white/70 hover:text-white px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all" href="/magazine/">Magazine</a>
</div>
<div className="flex flex-col gap-2.5 pt-4 border-t border-white/[0.07]">
<a className="inline-flex justify-center items-center gap-2 border border-white/15 text-white text-xs font-normal tracking-widest uppercase py-3.5 rounded-xl text-center hover:bg-white/5 transition-all" href="#guida">
<iconify-icon icon="solar:download-linear" width="15"></iconify-icon>
          Scarica Guida
        </a>
<a className="inline-flex justify-center items-center gap-2 bg-[#116432] hover:bg-[#147a3b] text-white text-xs font-normal tracking-widest uppercase py-3.5 rounded-xl text-center transition-all" href="#configura">
          Configura Impianto
        </a>
</div>
</div>
</nav>

<section className="relative w-full min-h-screen flex items-center overflow-hidden pt-16" id="hero">
<div className="hero-bg absolute inset-0 z-0"></div>
<div className="ambient-glow ambient-glow-1"></div>
<div className="ambient-glow ambient-glow-2"></div>
<div className="absolute inset-0 opacity-[0.025] z-10 pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.75%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E\')'}}></div>
<div className="relative z-20 max-w-[1400px] w-full mx-auto px-5 md:px-10 py-20 lg:py-28">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

<div>
<div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.09] border border-white/[0.15] backdrop-blur-md mb-8 opacity-0 animate-[fadeInUp_0.9s_ease-out_0.1s_forwards]">
<span className="w-2 h-2 rounded-full bg-[#116432] dot-pulse flex-shrink-0"></span>
<p className="text-[11px] font-normal tracking-[0.14em] uppercase text-white/90">Cuomo Method® — Brevetto Europeo EP2548449</p>
</div>
<h1 className="font-['Syne'] font-bold text-[clamp(2.8rem,6.5vw,5.5rem)] leading-[0.93] tracking-tight text-white">
<span className="block opacity-0 animate-[fadeInUp_0.9s_ease-out_0.15s_forwards] text-gradient-gold">Frollatura,</span>
<span className="block opacity-0 animate-[fadeInUp_0.9s_ease-out_0.25s_forwards] text-white/70">salumi,</span>
<span className="block opacity-0 animate-[fadeInUp_0.9s_ease-out_0.35s_forwards] text-white/50">pesce.</span>
</h1>
<p className="mt-8 text-base md:text-[1.05rem] font-light text-white/60 max-w-lg leading-relaxed opacity-0 animate-[fadeInUp_0.9s_ease-out_0.45s_forwards]">
            L'unico impianto al mondo a pH controllato. Soluzioni brevettate <strong className="text-white font-medium">da 100 kg a 7.000 kg</strong>. Il riferimento globale per il tuo business.
          </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-10 opacity-0 animate-[fadeInUp_0.9s_ease-out_0.55s_forwards]">
<a className="inline-flex justify-center items-center gap-2 bg-[#f5f2ec] hover:bg-white text-[#0d0d0b] text-xs font-normal tracking-widest uppercase py-4 px-7 rounded-full transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-black/20" href="#soluzioni">
              Scegli il tuo settore
              <iconify-icon icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 text-xs font-normal tracking-widest uppercase text-white py-4 px-7 rounded-full border border-white/15 hover:border-white/40 hover:bg-white/[0.06] transition-all" href="#guida">
<iconify-icon icon="solar:download-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
              Guida Gratuita
            </a>
</div>
<div className="mt-12 flex flex-wrap items-center gap-5 opacity-0 animate-[fadeInUp_0.9s_ease-out_0.65s_forwards]">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#116432]" icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-light text-white/45">Brevetto Europeo</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#116432]" icon="solar:global-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-light text-white/45">120+ Paesi</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#116432]" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-light text-white/45">HACCP Integrato</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#116432]" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-light text-white/45">Made in Italy</span>
</div>
</div>
</div>

<div className="opacity-0 animate-[fadeInUp_0.9s_ease-out_0.4s_forwards]" id="guida">
<div className="glass-panel-dark rounded-[2rem] overflow-hidden relative">
<div className="absolute -top-24 -right-24 w-48 h-48 bg-[#116432]/20 blur-3xl rounded-full pointer-events-none"></div>
<button aria-controls="hero-form-wrapper" aria-expanded="false" className="md:hidden w-full flex items-center justify-between px-7 py-5 gap-4" id="form-toggle-btn">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-xl bg-[#116432]/20 border border-[#116432]/25 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-[#116432]" icon="solar:book-2-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
</div>
<div className="text-left">
<p className="text-xs font-normal text-white leading-tight">Scarica la Guida Gratuita</p>
<p className="text-[10px] text-white/40 font-light">70 pagine — 12.000+ download</p>
</div>
</div>
<div className="w-7 h-7 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300" id="form-toggle-icon">
<iconify-icon className="text-white/60" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
</button>
<div className="hidden md:block" id="hero-form-wrapper">
<div className="px-7 pb-7 md:p-9 md:pt-9">
<div className="hidden md:flex items-center gap-3 mb-5">
<div className="w-9 h-9 rounded-xl bg-[#116432]/20 border border-[#116432]/25 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-[#116432]" icon="solar:book-2-linear" style={{strokeWidth: '1.5'}} width="17"></iconify-icon>
</div>
<div>
<p className="text-[10px] font-normal uppercase tracking-widest text-white/45">Risorsa Gratuita</p>
<p className="text-xs text-white/70 font-light">12.000+ professionisti nel mondo</p>
</div>
</div>
<h2 className="font-['Syne'] font-bold text-2xl md:text-[1.65rem] tracking-tight text-white mb-2">La Guida Completa alla Frollatura</h2>
<p className="text-sm font-light text-white/45 mb-7 leading-relaxed">70+ pagine su dry-aging, pH, HACCP e come scegliere l'impianto giusto per la tua attività.</p>
<form className="flex flex-col gap-3.5" id="hero-lead-form" novalidate="">
<div className="grid grid-cols-2 gap-3.5">
<div>
<label className="block text-[10px] font-normal uppercase tracking-widest text-white/35 mb-1.5">Nome *</label>
<input className="w-full bg-white/[0.07] border border-white/[0.1] text-sm text-white px-4 py-3 rounded-xl outline-none focus:border-[#116432]/80 focus:ring-2 focus:ring-[#116432]/20 transition-all placeholder:text-white/20" name="fname" placeholder="Mario" required="" type="text"/>
</div>
<div>
<label className="block text-[10px] font-normal uppercase tracking-widest text-white/35 mb-1.5">Cognome *</label>
<input className="w-full bg-white/[0.07] border border-white/[0.1] text-sm text-white px-4 py-3 rounded-xl outline-none focus:border-[#116432]/80 focus:ring-2 focus:ring-[#116432]/20 transition-all placeholder:text-white/20" name="lname" placeholder="Rossi" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-[10px] font-normal uppercase tracking-widest text-white/35 mb-1.5">Email professionale *</label>
<input className="w-full bg-white/[0.07] border border-white/[0.1] text-sm text-white px-4 py-3 rounded-xl outline-none focus:border-[#116432]/80 focus:ring-2 focus:ring-[#116432]/20 transition-all placeholder:text-white/20" name="email" placeholder="email@esempio.com" required="" type="email"/>
</div>
<div>
<label className="block text-[10px] font-normal uppercase tracking-widest text-white/35 mb-1.5">Professione</label>
<div className="relative">
<select className="w-full bg-white/[0.07] border border-white/[0.1] text-sm text-white/75 px-4 py-3 rounded-xl outline-none focus:border-[#116432]/80 focus:ring-2 focus:ring-[#116432]/20 transition-all cursor-pointer" name="role">
<option className="bg-[#1a1a18] text-white" disabled="" selected="" value="">Seleziona il settore</option>
<option className="bg-[#1a1a18] text-white" value="macellaio">Macelleria / Salumeria</option>
<option className="bg-[#1a1a18] text-white" value="ristorante">Ristorante / Hotel</option>
<option className="bg-[#1a1a18] text-white" value="gdo">GDO / Supermercato</option>
<option className="bg-[#1a1a18] text-white" value="distributore">Distributore / Rivenditore</option>
<option className="bg-[#1a1a18] text-white" value="altro">Altro</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
</div>
</div>
<button className="w-full bg-[#116432] hover:bg-[#147a3b] text-white text-xs font-normal tracking-widest uppercase py-4 rounded-xl transition-all hover:shadow-[0_0_24px_rgba(17,100,50,0.5)] active:scale-[0.99] flex items-center justify-center gap-2 mt-1" id="hero-submit-btn" type="submit">
<iconify-icon icon="solar:download-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
                    Scarica Gratis la Guida
                  </button>
<div className="flex items-center justify-center gap-2 mt-1">
<iconify-icon className="text-white/50" icon="solar:lock-password-linear" width="12"></iconify-icon>
<p className="text-[10px] text-center text-white/50 font-light">Dati sicuri. Privacy Policy EU.</p>
</div>
<div className="flex justify-center items-center gap-1 mt-0.5">
<iconify-icon className="text-[#c4993a]" icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon className="text-[#c4993a]" icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon className="text-[#c4993a]" icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon className="text-[#c4993a]" icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon className="text-[#c4993a]" icon="solar:star-bold" width="10"></iconify-icon>
<span className="text-[9px] text-white/50 ml-1">Scelto da 12.000+ professionisti</span>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-9 left-5 md:left-10 z-20 flex flex-col items-center gap-2">
<div className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent scroll-line"></div>
</div>

<div className="absolute bottom-9 right-5 md:right-10 z-20">
<div className="flex items-center gap-2.5 bg-white/[0.07] backdrop-blur-md border border-white/[0.1] rounded-full px-3.5 py-2">
<a className="flex items-center gap-1.5 text-xs font-normal text-white" href="/">
<img alt="IT" className="w-4 h-auto rounded-sm" loading="lazy" src="https://www.stagionello.com/wp-content/themes/stagionellostore/assets/images/flag-it.svg"/> IT
        </a>
<span className="w-[1px] h-3 bg-white/20"></span>
<a className="flex items-center gap-1.5 text-xs font-light text-white/38 hover:text-white transition-colors" href="/en/">
<img alt="EN" className="w-4 h-auto rounded-sm opacity-40" loading="lazy" src="https://www.stagionello.com/wp-content/themes/stagionellostore/assets/images/flag-en.svg"/> EN
        </a>
</div>
</div>
</section>

<section className="border-y border-white/[0.06] bg-[#0d0d0b] relative z-20" id="stats">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.06]">
<div className="p-8 md:p-12 text-center group hover:bg-white/[0.02] transition-colors cursor-default">
<div className="font-['Syne'] font-bold text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight text-[#f5f2ec] mb-2 flex justify-center items-baseline gap-1">
<span className="stat-number" data-target="3500">0</span><span className="text-2xl text-[#116432]">+</span>
</div>
<div className="text-[10px] font-normal uppercase tracking-[0.15em] text-white/35 mt-1">Impianti installati</div>
</div>
<div className="p-8 md:p-12 text-center group hover:bg-white/[0.02] transition-colors cursor-default">
<div className="font-['Syne'] font-bold text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight text-[#f5f2ec] mb-2 flex justify-center items-baseline gap-0.5">
<span className="text-2xl text-[#116432]">+</span><span className="stat-number" data-target="40">0</span><span className="text-2xl text-[#116432]">%</span>
</div>
<div className="text-[10px] font-normal uppercase tracking-[0.15em] text-white/35 mt-1">Margine medio clienti</div>
</div>
<div className="p-8 md:p-12 text-center group hover:bg-white/[0.02] transition-colors cursor-default">
<div className="font-['Syne'] font-bold text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight text-[#f5f2ec] mb-2 flex justify-center items-baseline gap-1">
<span className="stat-number" data-target="120">0</span><span className="text-2xl text-[#116432]">+</span>
</div>
<div className="text-[10px] font-normal uppercase tracking-[0.15em] text-white/35 mt-1">Paesi nel mondo</div>
</div>
<div className="p-8 md:p-12 text-center group hover:bg-white/[0.02] transition-colors cursor-default">
<div className="font-['Syne'] font-bold text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight text-[#f5f2ec] mb-2 flex justify-center items-baseline gap-1">
<span className="stat-number" data-target="6">0</span><span className="text-base font-light text-white/40 ml-1">mesi</span>
</div>
<div className="text-[10px] font-normal uppercase tracking-[0.15em] text-white/35 mt-1">Ritorno sull'investimento</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0d0d0b] text-[#f5f2ec] py-20 border-b border-white/[0.06] relative z-20" id="vantaggi">
<div className="max-w-[1400px] mx-auto px-5 md:px-10">
<div className="text-center mb-16">
<p className="reveal text-[10px] font-normal tracking-[0.18em] uppercase text-[#116432] mb-3">Vantaggi per il tuo business</p>
<h2 className="reveal font-['Syne'] font-bold text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight text-white leading-tight max-w-3xl mx-auto">
          Non è solo tecnologia. È un moltiplicatore di profitti per la tua attività.
        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
<div className="reveal bg-white/[0.03] border border-white/[0.08] p-8 rounded-3xl hover:bg-white/[0.05] transition-colors">
<div className="w-12 h-12 rounded-2xl bg-[#116432]/20 flex items-center justify-center mb-6 border border-[#116432]/30">
<iconify-icon className="text-[#4ade80]" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-['Syne'] font-bold text-xl text-white mb-3">Aumenta lo scontrino medio</h3>
<p className="text-sm font-light text-white/60 leading-relaxed">Offri prodotti premium altamente richiesti. I clienti sono disposti a pagare fino al 40% in più per carne frollata certificata o salumi artigianali di altissima qualità.</p>
</div>
<div className="reveal reveal-delay-1 bg-white/[0.03] border border-white/[0.08] p-8 rounded-3xl hover:bg-white/[0.05] transition-colors">
<div className="w-12 h-12 rounded-2xl bg-[#116432]/20 flex items-center justify-center mb-6 border border-[#116432]/30">
<iconify-icon className="text-[#4ade80]" icon="solar:shield-warning-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-['Syne'] font-bold text-xl text-white mb-3">Azzera gli scarti e i rischi</h3>
<p className="text-sm font-light text-white/60 leading-relaxed">Il controllo millimetrico del pH e dell'umidità previene la proliferazione batterica anomala. Mai più lotti da buttare. Controllo totale sul calo peso.</p>
</div>
<div className="reveal reveal-delay-2 bg-white/[0.03] border border-white/[0.08] p-8 rounded-3xl hover:bg-white/[0.05] transition-colors">
<div className="w-12 h-12 rounded-2xl bg-[#c4993a]/20 flex items-center justify-center mb-6 border border-[#c4993a]/30">
<iconify-icon className="text-[#c4993a]" icon="solar:star-fall-minimalistic-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-['Syne'] font-bold text-xl text-white mb-3">Distinguiti dalla concorrenza</h3>
<p className="text-sm font-light text-white/60 leading-relaxed">Trasforma il tuo locale con un impianto dal design inconfondibile. Attira una clientela esigente e fidelizzala con un prodotto che i competitor non possono replicare.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#f5f2ec] py-24 md:py-32 rounded-b-[3rem] md:rounded-b-[4.5rem] z-20 relative shadow-[0_32px_80px_rgba(0,0,0,0.2)]">
<div className="max-w-[1400px] mx-auto px-5 md:px-10">
<div className="relative flex justify-center items-center py-8 mb-16 md:mb-24 overflow-hidden w-full select-none">
<span className="frollatura-outline absolute inset-0 flex items-center justify-center whitespace-nowrap text-[clamp(2.8rem,8.8vw,9rem)] leading-none font-bold tracking-tight font-['Syne']">FROLLATURA.</span>
<span className="frollatura-text reveal whitespace-nowrap text-[clamp(2.8rem,8.8vw,9rem)] leading-none font-bold tracking-tight font-['Syne'] relative z-10">FROLLATURA.</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
<div className="reveal group bg-white p-10 rounded-[2rem] border border-neutral-200/50 hover:border-[#116432]/30 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(17,100,50,0.15)] relative overflow-hidden">
<div className="absolute -top-16 -right-16 w-48 h-48 bg-[#116432]/5 rounded-full blur-3xl group-hover:bg-[#116432]/20 transition-colors duration-500"></div>
<div className="w-14 h-14 rounded-2xl bg-[#116432]/5 border border-[#116432]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#116432] group-hover:shadow-[0_10px_20px_rgba(17,100,50,0.3)]">
<iconify-icon className="text-[#116432] group-hover:text-white transition-colors" icon="solar:cpu-bolt-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-['Syne'] font-bold text-xl text-[#0d0d0b] mb-4 tracking-tight relative z-10">Algoritmo Brevettato</h3>
<p className="text-sm font-light text-neutral-500 leading-relaxed relative z-10">Frollatura a pH controllato con algoritmo che adatta i parametri microclimatici in tempo reale.</p>
</div>
<div className="reveal reveal-delay-1 group bg-white p-10 rounded-[2rem] border border-neutral-200/50 hover:border-[#116432]/30 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(17,100,50,0.15)] relative overflow-hidden">
<div className="absolute -top-16 -right-16 w-48 h-48 bg-[#116432]/5 rounded-full blur-3xl group-hover:bg-[#116432]/20 transition-colors duration-500"></div>
<div className="w-14 h-14 rounded-2xl bg-[#116432]/5 border border-[#116432]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#116432] group-hover:shadow-[0_10px_20px_rgba(17,100,50,0.3)]">
<iconify-icon className="text-[#116432] group-hover:text-white transition-colors" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-['Syne'] font-bold text-xl text-[#0d0d0b] mb-4 tracking-tight relative z-10">HACCP Automatico</h3>
<p className="text-sm font-light text-neutral-500 leading-relaxed relative z-10">Validazione HACCP integrata e tracciabilità totale di ogni ciclo di maturazione, pronto per le ispezioni.</p>
</div>
<div className="reveal reveal-delay-2 group bg-white p-10 rounded-[2rem] border border-neutral-200/50 hover:border-[#116432]/30 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(17,100,50,0.15)] relative overflow-hidden">
<div className="absolute -top-16 -right-16 w-48 h-48 bg-[#116432]/5 rounded-full blur-3xl group-hover:bg-[#116432]/20 transition-colors duration-500"></div>
<div className="w-14 h-14 rounded-2xl bg-[#116432]/5 border border-[#116432]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#116432] group-hover:shadow-[0_10px_20px_rgba(17,100,50,0.3)]">
<iconify-icon className="text-[#116432] group-hover:text-white transition-colors" icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-['Syne'] font-bold text-xl text-[#0d0d0b] mb-4 tracking-tight relative z-10">Risultati Riproducibili</h3>
<p className="text-sm font-light text-neutral-500 leading-relaxed relative z-10">Costanza garantita indipendentemente dalla stagione, dal taglio o dall'animale d'origine.</p>
</div>
</div>
<div className="mt-16 text-center reveal reveal-delay-3">
<a className="inline-flex items-center gap-2 text-sm font-normal text-[#116432] hover:text-[#0e5228] transition-all group" href="/frollatura-della-carne-il-dry-aging-e-le-soluzioni-tecnologiche/">
<span className="border-b border-[#116432]/25 group-hover:border-[#116432] pb-0.5 transition-colors">Leggi la guida completa al metodo</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-white py-24 md:py-32 relative z-20" id="soluzioni">
<div className="max-w-[1400px] mx-auto px-5 md:px-10">
<div className="text-center mb-14">
<p className="reveal text-[10px] font-normal tracking-[0.18em] uppercase text-[#116432] mb-3">Da 100 kg a 7.000 kg</p>
<h2 className="reveal font-['Syne'] font-bold text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight text-[#0d0d0b] leading-[1.05]">Soluzioni per ogni scala di business.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="reveal sector-card group relative bg-neutral-50 rounded-[2rem] overflow-hidden border border-neutral-200/60 p-8 flex flex-col hover:bg-[#0d0d0b] transition-colors duration-500 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="sector-img-wrap bg-white group-hover:bg-white/5 transition-colors duration-500 relative z-10">
<img alt="Dry Age 3.0 per Ristoranti" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/11/STG-3.0-compresso.png"/>
</div>
<div className="relative z-10 flex flex-col flex-grow">
<div className="sector-stat-pill group-hover:bg-white/10 group-hover:border-white/15 group-hover:text-white/70 transition-colors">
<iconify-icon icon="solar:chart-bold" width="10"></iconify-icon>
              +30% scontrino medio
            </div>
<span className="inline-block px-3 py-1 rounded-full text-[10px] font-normal uppercase tracking-widest text-[#116432] group-hover:text-white/70 group-hover:bg-white/10 border border-transparent group-hover:border-white/10 mb-3 transition-colors w-fit bg-[#116432]/10">100 – 300 kg</span>
<h3 className="font-['Syne'] font-bold text-2xl text-[#0d0d0b] group-hover:text-white mb-2 transition-colors">Per Ristoranti</h3>
<p className="text-sm font-light text-neutral-500 group-hover:text-white/60 mb-5 transition-colors leading-relaxed">Il Dry Age 3.0 si posiziona <strong className="text-neutral-700 group-hover:text-white/80 font-normal">in vetrina come elemento di scena</strong>: attira clienti premium e giustifica prezzi più alti sulla carta.</p>
<ul className="flex flex-col gap-2 mb-6">
<li className="flex items-center gap-2 text-xs font-light text-neutral-400 group-hover:text-white/50 transition-colors">
<iconify-icon className="text-[#116432] group-hover:text-[#4ade80] flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon>
                Design premium per l'esposizione
              </li>
<li className="flex items-center gap-2 text-xs font-light text-neutral-400 group-hover:text-white/50 transition-colors">
<iconify-icon className="text-[#116432] group-hover:text-[#4ade80] flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon>
                Cicli pronti: nessuna formazione
              </li>
<li className="flex items-center gap-2 text-xs font-light text-neutral-400 group-hover:text-white/50 transition-colors">
<iconify-icon className="text-[#116432] group-hover:text-[#4ade80] flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon>
                HACCP automatico incluso
              </li>
</ul>
<a className="mt-auto inline-flex items-center gap-1.5 text-xs font-normal uppercase tracking-widest text-[#116432] group-hover:text-[#4ade80] transition-colors" href="#configura">
              Configura il tuo <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon>
</a>
</div>
</div>

<div className="reveal reveal-delay-1 sector-card group relative bg-neutral-50 rounded-[2rem] overflow-hidden border border-neutral-200/60 p-8 flex flex-col hover:bg-[#0d0d0b] transition-colors duration-500 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<span className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#C7051B] text-white text-[9px] font-normal uppercase tracking-widest px-3 py-1 rounded-full z-20 shadow-lg whitespace-nowrap">Il più venduto</span>
<div className="sector-img-wrap bg-white group-hover:bg-white/5 transition-colors duration-500 relative z-10 mt-4">
<img alt="Meat Curing Device per Macellerie" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/meat_ombra.png"/>
</div>
<div className="relative z-10 flex flex-col flex-grow">
<div className="sector-stat-pill group-hover:bg-white/10 group-hover:border-white/15 group-hover:text-white/70 transition-colors">
<iconify-icon icon="solar:chart-bold" width="10"></iconify-icon>
              ROI medio in 5 mesi
            </div>
<span className="inline-block px-3 py-1 rounded-full text-[10px] font-normal uppercase tracking-widest text-[#116432] group-hover:text-white/70 group-hover:bg-white/10 border border-transparent group-hover:border-white/10 mb-3 transition-colors w-fit bg-[#116432]/10">300 – 700 kg</span>
<h3 className="font-['Syne'] font-bold text-2xl text-[#0d0d0b] group-hover:text-white mb-2 transition-colors">Macellerie &amp; Salumifici</h3>
<p className="text-sm font-light text-neutral-500 group-hover:text-white/60 mb-5 transition-colors leading-relaxed">Produci carne frollata e salumi artigianali con <strong className="text-neutral-700 group-hover:text-white/80 font-normal">zero scarti e costi di processo ridotti</strong> grazie al calo peso controllato.</p>
<ul className="flex flex-col gap-2 mb-6">
<li className="flex items-center gap-2 text-xs font-light text-neutral-400 group-hover:text-white/50 transition-colors">
<iconify-icon className="text-[#116432] group-hover:text-[#4ade80] flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon>
                Calo peso monitorato in tempo reale
              </li>
<li className="flex items-center gap-2 text-xs font-light text-neutral-400 group-hover:text-white/50 transition-colors">
<iconify-icon className="text-[#116432] group-hover:text-[#4ade80] flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon>
                Fino a 2 ricette simultanee
              </li>
<li className="flex items-center gap-2 text-xs font-light text-neutral-400 group-hover:text-white/50 transition-colors">
<iconify-icon className="text-[#116432] group-hover:text-[#4ade80] flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon>
                Report HACCP scaricabili
              </li>
</ul>
<a className="mt-auto inline-flex items-center gap-1.5 text-xs font-normal uppercase tracking-widest text-[#116432] group-hover:text-[#4ade80] transition-colors" href="#configura">
              Configura il tuo <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon>
</a>
</div>
</div>

<div className="reveal reveal-delay-2 sector-card group relative bg-neutral-50 rounded-[2rem] overflow-hidden border border-neutral-200/60 p-8 flex flex-col hover:bg-[#0d0d0b] transition-colors duration-500 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="sector-img-wrap bg-white group-hover:bg-white/5 transition-colors duration-500 relative z-10">
<img alt="Fish Curing Device per Pescherie" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/fish_ombra.png"/>
</div>
<div className="relative z-10 flex flex-col flex-grow">
<div className="sector-stat-pill group-hover:bg-white/10 group-hover:border-white/15 group-hover:text-white/70 transition-colors">
<iconify-icon icon="solar:chart-bold" width="10"></iconify-icon>
              Prodotto unico sul mercato
            </div>
<span className="inline-block px-3 py-1 rounded-full text-[10px] font-normal uppercase tracking-widest text-[#116432] group-hover:text-white/70 group-hover:bg-white/10 border border-transparent group-hover:border-white/10 mb-3 transition-colors w-fit bg-[#116432]/10">100 – 300 kg</span>
<h3 className="font-['Syne'] font-bold text-2xl text-[#0d0d0b] group-hover:text-white mb-2 transition-colors">Per Pescherie</h3>
<p className="text-sm font-light text-neutral-500 group-hover:text-white/60 mb-5 transition-colors leading-relaxed">Offri pesce stagionato che i tuoi concorrenti <strong className="text-neutral-700 group-hover:text-white/80 font-normal">non sanno nemmeno produrre</strong>. Margini altissimi su un prodotto ancora di nicchia.</p>
<ul className="flex flex-col gap-2 mb-6">
<li className="flex items-center gap-2 text-xs font-light text-neutral-400 group-hover:text-white/50 transition-colors">
<iconify-icon className="text-[#116432] group-hover:text-[#4ade80] flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon>
                Protocolli ittici dedicati
              </li>
<li className="flex items-center gap-2 text-xs font-light text-neutral-400 group-hover:text-white/50 transition-colors">
<iconify-icon className="text-[#116432] group-hover:text-[#4ade80] flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon>
                Controllo microbiologico avanzato
              </li>
<li className="flex items-center gap-2 text-xs font-light text-neutral-400 group-hover:text-white/50 transition-colors">
<iconify-icon className="text-[#116432] group-hover:text-[#4ade80] flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon>
                Compatto: 60×80 cm di ingombro
              </li>
</ul>
<a className="mt-auto inline-flex items-center gap-1.5 text-xs font-normal uppercase tracking-widest text-[#116432] group-hover:text-[#4ade80] transition-colors" href="#configura">
              Configura il tuo <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon>
</a>
</div>
</div>

<div className="reveal reveal-delay-3 sector-card group relative bg-[#0d0d0b] rounded-[2rem] overflow-hidden border border-white/10 p-8 flex flex-col hover:bg-[#116432] hover:border-[#116432]/60 transition-colors duration-500 cursor-pointer">
<div className="sector-img-wrap bg-white/[0.04] group-hover:bg-white/10 transition-colors duration-500 relative z-10">
<img alt="Cella industriale per salumi" className="opacity-90 group-hover:opacity-100 transition-opacity" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/salami_ombra.png"/>
</div>
<div className="relative z-10 flex flex-col flex-grow">
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-normal uppercase tracking-widest text-[#4ade80] border border-[#4ade80]/30 bg-[#4ade80]/10 group-hover:border-white/30 group-hover:text-white group-hover:bg-white/15 mb-3 transition-colors w-fit" style={{letterSpacing: '0.1em'}}>
<iconify-icon icon="solar:chart-bold" width="10"></iconify-icon>
              Su misura fino a 7.000 kg
            </div>
<span className="inline-block px-3 py-1 rounded-full text-[10px] font-normal uppercase tracking-widest text-[#4ade80] border border-[#4ade80]/20 group-hover:border-white/20 group-hover:text-white mb-3 transition-colors w-fit">Cella personalizzata</span>
<h3 className="font-['Syne'] font-bold text-2xl text-white mb-2 transition-colors">Industria Alimentare</h3>
<p className="text-sm font-light text-white/60 group-hover:text-white/80 mb-5 transition-colors leading-relaxed">Standardizzazione e controllo su scala industriale. <strong className="text-white font-normal">Abbatti i costi operativi</strong> con automazione totale del ciclo produttivo.</p>
<ul className="flex flex-col gap-2 mb-6">
<li className="flex items-center gap-2 text-xs font-light text-white/40 group-hover:text-white/60 transition-colors">
<iconify-icon className="text-[#4ade80] group-hover:text-white flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon>
                Progettazione su misura
              </li>
<li className="flex items-center gap-2 text-xs font-light text-white/40 group-hover:text-white/60 transition-colors">
<iconify-icon className="text-[#4ade80] group-hover:text-white flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon>
                Integrazione con linee esistenti
              </li>
<li className="flex items-center gap-2 text-xs font-light text-white/40 group-hover:text-white/60 transition-colors">
<iconify-icon className="text-[#4ade80] group-hover:text-white flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon>
                SLA e assistenza dedicata
              </li>
</ul>
<a className="mt-auto inline-flex items-center gap-1.5 text-xs font-normal uppercase tracking-widest text-white transition-colors" href="#configura">
              Richiedi consulenza <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#f5f2ec] pb-32 pt-8" id="prodotti">
<div className="max-w-[1400px] mx-auto px-5 md:px-10">
<div className="mb-12 md:mb-14 flex flex-col gap-5">
<div>
<p className="reveal text-[10px] font-normal tracking-[0.18em] uppercase text-[#116432] mb-3">I Nostri Impianti</p>
<h2 className="reveal font-['Syne'] font-bold text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight text-[#0d0d0b] leading-[1.05]">Scegli il tuo impianto.</h2>
</div>
<div className="reveal flex flex-wrap gap-2 items-center">
<div className="filter-pill">
<input checked="" id="cat-all" name="cat" type="radio" value="all"/>
<label htmlFor="cat-all">Tutti</label>
</div>
<div className="filter-pill">
<input id="cat-meat" name="cat" type="radio" value="meat"/>
<label htmlFor="cat-meat">Carne</label>
</div>
<div className="filter-pill">
<input id="cat-salami" name="cat" type="radio" value="salami"/>
<label htmlFor="cat-salami">Salumi</label>
</div>
<div className="filter-pill">
<input id="cat-fish" name="cat" type="radio" value="fish"/>
<label htmlFor="cat-fish">Pesce</label>
</div>
<span className="text-[10px] font-light text-neutral-400 ml-1" id="product-count">6 impianti</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" id="products-grid">

<div className="product-card reveal bg-white border border-neutral-200/80 rounded-3xl overflow-hidden flex flex-col cursor-pointer group" data-badge="Bestseller" data-badge-color="#116432" data-capacity="70 kg" data-cat="meat" data-desc="L'impianto d'ingresso per macellerie, ristoranti e piccole attività. Perfetto per iniziare con la frollatura professionale a pH controllato." data-img="https://www.stagionello.com/wp-content/uploads/2023/08/meat_ombra.png" data-name="Meat Curing Device 70" data-price="Su richiesta" data-url="https://www.stagionello.com/stagionello-meat-curing-device/">
<div className="relative bg-neutral-50 flex items-center justify-center overflow-hidden" style={{height: '216px'}}>
<span className="absolute top-4 left-4 bg-[#116432] text-white text-[9px] font-normal uppercase tracking-widest px-2.5 py-1 rounded-full z-10">Bestseller</span>
<img alt="Meat Curing Device 70" className="h-40 w-auto object-contain drop-shadow-xl transition-transform duration-500 ease-out group-hover:scale-105" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/meat_ombra.png"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="text-[9px] font-normal uppercase tracking-[0.15em] text-[#116432] mb-2">Frollatura Carne</span>
<h3 className="font-['Syne'] font-bold text-[1.1rem] tracking-tight text-[#0d0d0b] mb-1 leading-snug">Meat Curing Device 70</h3>
<p className="text-xs font-light text-neutral-400 mb-3">Capacità: 70 kg</p>
<p className="text-sm font-light text-neutral-500 leading-relaxed flex-grow">Ideale per macellerie e ristoranti. Frollatura a pH controllato con cicli completamente automatizzati.</p>
<div className="mt-5 pt-5 border-t border-neutral-100 flex items-center justify-between">
<a className="text-xs font-light text-neutral-400 hover:text-[#116432] transition-colors flex items-center gap-1 group/link" href="https://www.stagionello.com/stagionello-meat-curing-device/" onclick="event.stopPropagation()" target="_blank">
                Scheda prodotto <iconify-icon className="opacity-0 group-hover/link:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</a>
<button className="open-modal inline-flex items-center gap-1.5 text-xs font-normal text-[#116432] hover:text-[#0e5228] transition-colors group/btn bg-[#116432]/[0.07] hover:bg-[#116432]/15 px-3 py-1.5 rounded-full">
                Richiedi info <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="product-card reveal reveal-delay-1 bg-white border border-neutral-200/80 rounded-3xl overflow-hidden flex flex-col cursor-pointer group" data-badge="" data-badge-color="" data-capacity="120 kg" data-cat="meat" data-desc="La soluzione mid-range per volumi superiori. Gestione multizona e report HACCP automatici per ogni ciclo." data-img="https://www.stagionello.com/wp-content/uploads/2023/08/meat_ombra.png" data-name="Meat Curing Device 120" data-price="Su richiesta" data-url="https://www.stagionello.com/stagionello-meat-curing-device/">
<div className="relative bg-neutral-50 flex items-center justify-center overflow-hidden" style={{height: '216px'}}>
<img alt="Meat Curing Device 120" className="h-40 w-auto object-contain drop-shadow-xl transition-transform duration-500 ease-out group-hover:scale-105" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/meat_ombra.png"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="text-[9px] font-normal uppercase tracking-[0.15em] text-[#116432] mb-2">Frollatura Carne</span>
<h3 className="font-['Syne'] font-bold text-[1.1rem] tracking-tight text-[#0d0d0b] mb-1 leading-snug">Meat Curing Device 120</h3>
<p className="text-xs font-light text-neutral-400 mb-3">Capacità: 120 kg</p>
<p className="text-sm font-light text-neutral-500 leading-relaxed flex-grow">Gestione multizona e report HACCP automatici. Ideale per volumi medi e GDO.</p>
<div className="mt-5 pt-5 border-t border-neutral-100 flex items-center justify-between">
<a className="text-xs font-light text-neutral-400 hover:text-[#116432] transition-colors flex items-center gap-1 group/link" href="https://www.stagionello.com/stagionello-meat-curing-device/" onclick="event.stopPropagation()" target="_blank">
                Scheda prodotto <iconify-icon className="opacity-0 group-hover/link:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</a>
<button className="open-modal inline-flex items-center gap-1.5 text-xs font-normal text-[#116432] hover:text-[#0e5228] transition-colors group/btn bg-[#116432]/[0.07] hover:bg-[#116432]/15 px-3 py-1.5 rounded-full">
                Richiedi info <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="product-card reveal reveal-delay-2 bg-[#0d0d0b] border border-[#116432]/25 rounded-3xl overflow-hidden flex flex-col cursor-pointer group" data-badge="Nuova Gen" data-badge-color="#C7051B" data-capacity="200 kg" data-cat="meat" data-desc="La tecnologia definitiva di ultima generazione. Calo peso gestito, maturazione intelligente e design premium per l'esposizione in vetrina." data-img="https://www.stagionello.com/wp-content/uploads/2023/11/STG-3.0-compresso.png" data-name="Dry Age 3.0" data-price="Su richiesta" data-url="https://www.stagionello.com/stagionello-dry-age-3-0/">
<div className="relative bg-[#111110] flex items-center justify-center overflow-hidden" style={{height: '216px'}}>
<span className="absolute top-4 left-4 bg-[#C7051B] text-white text-[9px] font-normal uppercase tracking-widest px-2.5 py-1 rounded-full z-10">Nuova Generazione</span>
<img alt="Dry Age 3.0" className="h-48 w-auto object-contain drop-shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/11/STG-3.0-compresso.png"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="text-[9px] font-normal uppercase tracking-[0.15em] text-[#116432] mb-2">Frollatura Carne</span>
<h3 className="font-['Syne'] font-bold text-[1.1rem] tracking-tight text-white mb-1 leading-snug">Dry Age 3.0</h3>
<p className="text-xs font-light text-white/30 mb-3">Capacità: 200 kg</p>
<p className="text-sm font-light text-white/55 leading-relaxed flex-grow">Tecnologia nuova generazione con design premium per esposizione in vetrina. Il top di gamma.</p>
<div className="mt-5 pt-5 border-t border-white/[0.08] flex items-center justify-between">
<a className="text-xs font-light text-white/30 hover:text-white/70 transition-colors flex items-center gap-1 group/link" href="https://www.stagionello.com/stagionello-dry-age-3-0/" onclick="event.stopPropagation()" target="_blank">
                Scheda prodotto <iconify-icon className="opacity-0 group-hover/link:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</a>
<button className="open-modal inline-flex items-center gap-1.5 text-xs font-normal text-[#4ade80] hover:text-[#86efac] transition-colors group/btn bg-[#4ade80]/10 hover:bg-[#4ade80]/20 px-3 py-1.5 rounded-full">
                Richiedi info <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="product-card reveal bg-white border border-neutral-200/80 rounded-3xl overflow-hidden flex flex-col cursor-pointer group" data-badge="" data-badge-color="" data-capacity="60 kg" data-cat="salami" data-desc="Stagionatura professionale per salumi artigianali. Controllo capillare di pH e umidità per risultati costanti e sicuri." data-img="https://www.stagionello.com/wp-content/uploads/2023/08/salami_ombra.png" data-name="Salami Curing Device 60" data-price="Su richiesta" data-url="https://www.stagionello.com/stagionello-salumi-curing-device/">
<div className="relative bg-neutral-50 flex items-center justify-center overflow-hidden" style={{height: '216px'}}>
<img alt="Salami Curing Device 60" className="h-40 w-auto object-contain drop-shadow-xl transition-transform duration-500 ease-out group-hover:scale-105" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/salami_ombra.png"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="text-[9px] font-normal uppercase tracking-[0.15em] text-[#c4993a] mb-2">Stagionatura Salumi</span>
<h3 className="font-['Syne'] font-bold text-[1.1rem] tracking-tight text-[#0d0d0b] mb-1 leading-snug">Salami Curing Device 60</h3>
<p className="text-xs font-light text-neutral-400 mb-3">Capacità: 60 kg</p>
<p className="text-sm font-light text-neutral-500 leading-relaxed flex-grow">Controllo capillare di pH e umidità. Perfetto per salumerie e piccoli produttori artigianali.</p>
<div className="mt-5 pt-5 border-t border-neutral-100 flex items-center justify-between">
<a className="text-xs font-light text-neutral-400 hover:text-[#c4993a] transition-colors flex items-center gap-1 group/link" href="https://www.stagionello.com/stagionello-salumi-curing-device/" onclick="event.stopPropagation()" target="_blank">
                Scheda prodotto <iconify-icon className="opacity-0 group-hover/link:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</a>
<button className="open-modal inline-flex items-center gap-1.5 text-xs font-normal text-[#116432] hover:text-[#0e5228] transition-colors group/btn bg-[#116432]/[0.07] hover:bg-[#116432]/15 px-3 py-1.5 rounded-full">
                Richiedi info <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="product-card reveal reveal-delay-1 bg-white border border-neutral-200/80 rounded-3xl overflow-hidden flex flex-col cursor-pointer group" data-badge="Pro" data-badge-color="#c4993a" data-capacity="120 kg" data-cat="salami" data-desc="Per produttori di salumi che necessitano di volumi elevati e tracciabilità completa. Multi-programma e multi-zona." data-img="https://www.stagionello.com/wp-content/uploads/2023/08/salami_ombra.png" data-name="Salami Curing Device 120" data-price="Su richiesta" data-url="https://www.stagionello.com/stagionello-salumi-curing-device/">
<div className="relative bg-neutral-50 flex items-center justify-center overflow-hidden" style={{height: '216px'}}>
<span className="absolute top-4 left-4 bg-[#c4993a] text-white text-[9px] font-normal uppercase tracking-widest px-2.5 py-1 rounded-full z-10">Pro</span>
<img alt="Salami Curing Device 120" className="h-40 w-auto object-contain drop-shadow-xl transition-transform duration-500 ease-out group-hover:scale-105" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/salami_ombra.png"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="text-[9px] font-normal uppercase tracking-[0.15em] text-[#c4993a] mb-2">Stagionatura Salumi</span>
<h3 className="font-['Syne'] font-bold text-[1.1rem] tracking-tight text-[#0d0d0b] mb-1 leading-snug">Salami Curing Device 120</h3>
<p className="text-xs font-light text-neutral-400 mb-3">Capacità: 120 kg</p>
<p className="text-sm font-light text-neutral-500 leading-relaxed flex-grow">Multi-programma e multi-zona. Ideale per produttori artigianali e laboratori di trasformazione.</p>
<div className="mt-5 pt-5 border-t border-neutral-100 flex items-center justify-between">
<a className="text-xs font-light text-neutral-400 hover:text-[#c4993a] transition-colors flex items-center gap-1 group/link" href="https://www.stagionello.com/stagionello-salumi-curing-device/" onclick="event.stopPropagation()" target="_blank">
                Scheda prodotto <iconify-icon className="opacity-0 group-hover/link:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</a>
<button className="open-modal inline-flex items-center gap-1.5 text-xs font-normal text-[#116432] hover:text-[#0e5228] transition-colors group/btn bg-[#116432]/[0.07] hover:bg-[#116432]/15 px-3 py-1.5 rounded-full">
                Richiedi info <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="product-card reveal reveal-delay-2 bg-white border border-neutral-200/80 rounded-3xl overflow-hidden flex flex-col cursor-pointer group" data-badge="Innovazione" data-badge-color="#0369a1" data-capacity="30 kg" data-cat="fish" data-desc="Innovazione assoluta per la maturazione ittica. Protocolli HACCP specifici per pesce con controllo microbiologico avanzato." data-img="https://www.stagionello.com/wp-content/uploads/2023/08/fish_ombra.png" data-name="Fish Curing Device" data-price="Su richiesta" data-url="https://www.stagionello.com/stagionello-fish-curing-device/">
<div className="relative bg-neutral-50 flex items-center justify-center overflow-hidden" style={{height: '216px'}}>
<span className="absolute top-4 left-4 bg-[#0369a1] text-white text-[9px] font-normal uppercase tracking-widest px-2.5 py-1 rounded-full z-10">Innovazione</span>
<img alt="Fish Curing Device" className="h-40 w-auto object-contain drop-shadow-xl transition-transform duration-500 ease-out group-hover:scale-105" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/fish_ombra.png"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="text-[9px] font-normal uppercase tracking-[0.15em] text-[#0369a1] mb-2">Maturazione Pesce</span>
<h3 className="font-['Syne'] font-bold text-[1.1rem] tracking-tight text-[#0d0d0b] mb-1 leading-snug">Fish Curing Device</h3>
<p className="text-xs font-light text-neutral-400 mb-3">Capacità: 30 kg</p>
<p className="text-sm font-light text-neutral-500 leading-relaxed flex-grow">Innovazione assoluta per ristoranti di pesce. Protocolli HACCP specifici con controllo microbiologico.</p>
<div className="mt-5 pt-5 border-t border-neutral-100 flex items-center justify-between">
<a className="text-xs font-light text-neutral-400 hover:text-[#0369a1] transition-colors flex items-center gap-1 group/link" href="https://www.stagionello.com/stagionello-fish-curing-device/" onclick="event.stopPropagation()" target="_blank">
                Scheda prodotto <iconify-icon className="opacity-0 group-hover/link:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</a>
<button className="open-modal inline-flex items-center gap-1.5 text-xs font-normal text-[#116432] hover:text-[#0e5228] transition-colors group/btn bg-[#116432]/[0.07] hover:bg-[#116432]/15 px-3 py-1.5 rounded-full">
                Richiedi info <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="mt-10 text-center reveal">
<a className="inline-flex items-center gap-2 bg-[#0d0d0b] hover:bg-[#1a1a18] text-white text-xs font-normal tracking-widest uppercase py-4 px-7 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0" href="#configura">
          Non sai quale scegliere? Configura il tuo impianto
          <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
</div>
</section>

<div className="hidden fixed inset-0 z-[200] flex items-end md:items-center justify-center p-0 md:p-6" id="lead-modal" style={{opacity: '0'}}>
<div className="absolute inset-0 bg-black/65 backdrop-blur-md" id="modal-backdrop"></div>
<div className="relative z-10 bg-white w-full md:max-w-2xl md:rounded-3xl rounded-t-3xl shadow-[0_40px_80px_rgba(0,0,0,0.3)] overflow-hidden max-h-[92vh] overflow-y-auto">
<div className="flex justify-center pt-3 pb-1 md:hidden">
<div className="w-10 h-1 rounded-full bg-neutral-200"></div>
</div>
<button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors z-10" id="modal-close">
<iconify-icon className="text-[#0d0d0b]" icon="solar:close-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="bg-neutral-50 flex flex-col items-center justify-center p-8 gap-5 border-b md:border-b-0 md:border-r border-neutral-100">
<img alt="" className="h-44 w-auto object-contain drop-shadow-xl" id="modal-img" src=""/>
<a className="inline-flex items-center gap-1.5 text-xs font-normal text-[#116432] hover:text-[#0e5228] border border-[#116432]/20 hover:border-[#116432]/50 bg-[#116432]/[0.05] hover:bg-[#116432]/10 rounded-full px-4 py-2 transition-all" href="#" id="modal-product-link" onclick="event.stopPropagation()" target="_blank">
            Visita la pagina prodotto
            <iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon>
</a>
</div>
<div className="p-7 light-form">
<span className="hidden text-[9px] font-normal uppercase tracking-widest px-2.5 py-1 rounded-full text-white mb-3 inline-block" id="modal-badge"></span>
<h3 className="font-['Syne'] font-bold text-xl tracking-tight text-[#0d0d0b] mb-1 mt-2" id="modal-name"></h3>
<p className="text-xs font-light text-neutral-400 mb-2" id="modal-capacity"></p>
<p className="text-sm font-light text-neutral-500 leading-relaxed mb-5" id="modal-desc"></p>
<form className="flex flex-col gap-3.5" id="modal-lead-form" novalidate="">
<div>
<label className="block text-[10px] font-normal uppercase tracking-widest text-neutral-400 mb-1.5">Nome e Cognome *</label>
<input className="w-full bg-neutral-50 border border-neutral-200 text-sm text-[#0d0d0b] px-4 py-3 rounded-xl outline-none focus:border-[#116432] focus:ring-2 focus:ring-[#116432]/10 transition-all placeholder:text-neutral-300" name="name" placeholder="Mario Rossi" required="" type="text"/>
</div>
<div>
<label className="block text-[10px] font-normal uppercase tracking-widest text-neutral-400 mb-1.5">Email *</label>
<input className="w-full bg-neutral-50 border border-neutral-200 text-sm text-[#0d0d0b] px-4 py-3 rounded-xl outline-none focus:border-[#116432] focus:ring-2 focus:ring-[#116432]/10 transition-all placeholder:text-neutral-300" name="email" placeholder="email@esempio.com" required="" type="email"/>
</div>
<div>
<label className="block text-[10px] font-normal uppercase tracking-widest text-neutral-400 mb-1.5">Telefono</label>
<input className="w-full bg-neutral-50 border border-neutral-200 text-sm text-[#0d0d0b] px-4 py-3 rounded-xl outline-none focus:border-[#116432] focus:ring-2 focus:ring-[#116432]/10 transition-all placeholder:text-neutral-300" name="phone" placeholder="+39 000 000 0000" type="tel"/>
</div>
<button className="w-full bg-[#116432] hover:bg-[#147a3b] text-white text-xs font-normal tracking-widest uppercase py-4 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(17,100,50,0.35)] active:scale-[0.99] mt-1 flex items-center justify-center gap-2" id="modal-submit-btn" type="submit">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
              Richiedi Informazioni
            </button>
<p className="text-[10px] text-center text-neutral-300 font-light">Risposta entro 24h. Nessun obbligo.</p>
</form>
</div>
</div>
</div>
</div>

<section className="bg-[#0d0d0b] text-[#f5f2ec] rounded-t-[3rem] md:rounded-t-[4.5rem] -mt-12 relative z-30 overflow-hidden" id="metodo">
<div className="max-w-[1400px] mx-auto px-5 md:px-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start py-24 md:py-32">
<div className="order-2 lg:order-1 hidden lg:block">
<div className="sticky top-28 w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/[0.08]">
<img alt="Alessandro Cuomo" className="w-full h-full object-cover object-top filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-out" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/alessandro-cuomo-2.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0b] via-transparent to-transparent opacity-70"></div>
<div className="absolute bottom-7 left-7 border-l-2 border-[#c4993a] pl-4">
<p className="font-['Syne'] font-semibold text-base text-white mb-0.5">Alessandro Cuomo</p>
<p className="text-xs font-light text-white/45 uppercase tracking-widest">Inventore del Metodo</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2 py-6 md:py-10">
<p className="reveal text-[10px] font-normal tracking-[0.18em] uppercase text-[#c4993a] mb-4">Il Metodo Scientifico</p>
<h2 className="reveal font-['Syne'] font-bold text-4xl md:text-5xl lg:text-[3rem] tracking-tight leading-[1.05] mb-14">
            A pH controllato.<br/><span className="text-white/50">Il Cuomo Method®.</span>
</h2>
<div className="flex flex-col gap-11 border-l border-white/[0.08] pl-10 md:pl-12 relative">
<div className="reveal relative">
<span className="step-circle">01</span>
<h3 className="text-lg font-normal text-white mb-2.5 tracking-tight">Sensori pH attivi 24/7</h3>
<p className="text-sm font-light text-white/55 leading-relaxed">Monitoraggio continuo del pH e dei parametri ambientali tramite sensori industriali ad altissima precisione integrati nella camera.</p>
</div>
<div className="reveal relative">
<span className="step-circle">02</span>
<h3 className="text-lg font-normal text-white mb-2.5 tracking-tight">Algoritmo Auto-Adattivo</h3>
<p className="text-sm font-light text-white/55 leading-relaxed">Il sistema analizza ogni variazione e modifica autonomamente la ricetta per mantenere il microclima ideale, senza intervento manuale.</p>
</div>
<div className="reveal relative">
<span className="step-circle">03</span>
<h3 className="text-lg font-normal text-white mb-2.5 tracking-tight">Validazione HACCP Integrata</h3>
<p className="text-sm font-light text-white/55 leading-relaxed">Ogni ciclo genera automaticamente report e tracciabilità a norma di legge. Pronti per qualsiasi ispezione.</p>
</div>
</div>
<div className="reveal mt-14 p-6 rounded-2xl bg-white/[0.035] border border-white/[0.06]">
<p className="text-base font-light italic text-white/70 leading-relaxed">"Il primo metodo al mondo che combina controllo del calo peso, acidificazione e umidità in un singolo algoritmo brevettato."</p>
<p className="mt-4 text-xs font-light text-white/50 not-italic">— Alessandro Cuomo, Fondatore</p>
</div>
<a className="reveal inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-[#0d0d0b] text-xs font-normal tracking-widest uppercase py-4 px-8 rounded-full mt-10 transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-black/20" href="/frollatura-della-carne-il-dry-aging-e-le-soluzioni-tecnologiche/">
            Approfondisci il Metodo
            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="bg-[#f5f2ec] text-[#0d0d0b] py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[4.5rem] relative z-40 -mt-12 shadow-[0_-20px_50px_rgba(0,0,0,0.15)]" id="recensioni">
<div className="max-w-[1400px] mx-auto px-5 md:px-10">
<div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
<div>
<p className="reveal text-[10px] font-normal tracking-[0.18em] uppercase text-[#116432] mb-3">Storie di Successo</p>
<h2 className="reveal font-['Syne'] font-bold text-4xl md:text-5xl tracking-tight text-[#0d0d0b] leading-[1.05]">
            Scelto dai professionisti<br/>più esigenti.
          </h2>
</div>
<div className="reveal flex gap-2">
<button className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-[#0d0d0b] hover:text-white hover:border-[#0d0d0b] transition-all">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-[#0d0d0b] hover:text-white hover:border-[#0d0d0b] transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="reveal bg-white p-8 md:p-10 rounded-3xl border border-neutral-200/70 shadow-sm hover:shadow-xl transition-shadow relative">
<iconify-icon className="absolute top-8 right-8 text-neutral-100" icon="solar:quote-right-bold" width="40"></iconify-icon>
<div className="flex gap-1 mb-6">
<iconify-icon className="text-[#c4993a]" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-[#c4993a]" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-[#c4993a]" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-[#c4993a]" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-[#c4993a]" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm font-light text-neutral-600 leading-relaxed mb-8 italic">"Da quando ho installato il Meat Curing Device, le vendite della carne frollata sono esplose. La facilità di gestione grazie al controllo del pH mi permette di dormire sonni tranquilli e l'HACCP automatico è una salvezza in caso di controlli."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-neutral-200 overflow-hidden">
<img alt="Cliente" className="w-full h-full object-cover" loading="lazy" src="https://i.pravatar.cc/150?img=11"/>
</div>
<div>
<p className="font-['Syne'] font-bold text-sm text-[#0d0d0b]">Marco D.</p>
<p className="text-[10px] font-normal uppercase tracking-widest text-neutral-400">Titolare Macelleria</p>
</div>
</div>
</div>
<div className="reveal reveal-delay-1 bg-white p-8 md:p-10 rounded-3xl border border-[#116432]/30 shadow-[0_10px_40px_rgba(17,100,50,0.08)] relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[#116432]"></div>
<iconify-icon className="absolute top-8 right-8 text-[#116432]/10" icon="solar:quote-right-bold" width="40"></iconify-icon>
<div className="flex gap-1 mb-6">
<iconify-icon className="text-[#c4993a]" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-[#c4993a]" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-[#c4993a]" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-[#c4993a]" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-[#c4993a]" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm font-light text-neutral-600 leading-relaxed mb-8 italic">"L'investimento nel Dry Age 3.0 si è ripagato in meno di 6 mesi. Lo abbiamo messo in vetrina nel nostro ristorante e attira i clienti da solo. La costanza del risultato, indipendentemente dal taglio di carne, è impressionante."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-neutral-200 overflow-hidden">
<img alt="Cliente" className="w-full h-full object-cover" loading="lazy" src="https://i.pravatar.cc/150?img=68"/>
</div>
<div>
<p className="font-['Syne'] font-bold text-sm text-[#0d0d0b]">Chef Andrea F.</p>
<p className="text-[10px] font-normal uppercase tracking-widest text-neutral-400">Ristorante Steakhouse</p>
</div>
</div>
</div>
<div className="reveal reveal-delay-2 bg-white p-8 md:p-10 rounded-3xl border border-neutral-200/70 shadow-sm hover:shadow-xl transition-shadow relative">
<iconify-icon className="absolute top-8 right-8 text-neutral-100" icon="solar:quote-right-bold" width="40"></iconify-icon>
<div className="flex gap-1 mb-6">
<iconify-icon className="text-[#c4993a]" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-[#c4993a]" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-[#c4993a]" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-[#c4993a]" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-[#c4993a]" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm font-light text-neutral-600 leading-relaxed mb-8 italic">"Cercavamo un sistema per differenziarci nella grande distribuzione. Con l'impianto Stagionello abbiamo creato un angolo premium che ha alzato notevolmente il margine sul reparto carni. Zero scarti e massima sicurezza."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-neutral-200 overflow-hidden">
<img alt="Cliente" className="w-full h-full object-cover" loading="lazy" src="https://i.pravatar.cc/150?img=32"/>
</div>
<div>
<p className="font-['Syne'] font-bold text-sm text-[#0d0d0b]">Elena S.</p>
<p className="text-[10px] font-normal uppercase tracking-widest text-neutral-400">Direttrice Supermercato</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-[#0d0d0b] overflow-hidden border-y border-white/[0.06]" id="academy">
<div className="relative h-[420px] md:h-[500px] flex items-end overflow-hidden">
<img alt="Stagionello Academy" className="absolute inset-0 w-full h-full object-cover object-center opacity-40" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/STG-ACADEMY.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0b] via-[#0d0d0b]/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0b]/70 via-transparent to-transparent"></div>
<div className="relative z-10 max-w-[1400px] w-full mx-auto px-5 md:px-10 pb-12 md:pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
<div>
<img alt="Academy Logo" className="reveal h-10 md:h-12 mb-5 filter invert opacity-90" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/06/stagionello-academy-logo.png"/>
<h2 className="reveal font-['Syne'] font-bold text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight text-white leading-[1.05] mb-3">
            Diventa il riferimento<br/>della tua categoria.
          </h2>
<p className="reveal text-sm md:text-base font-light text-white/55 max-w-xl leading-relaxed">Masterclass, corsi on-demand e certificazioni firmate Alessandro Cuomo. Formazione professionale per chi vuole dominare il dry-aging.</p>
</div>
<div className="reveal flex-shrink-0 flex flex-wrap gap-5 md:flex-col md:items-end md:gap-3">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-[#116432]/25 border border-[#116432]/40 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-[#4ade80]" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
</div>
<div>
<p className="font-['Syne'] font-bold text-lg text-white leading-tight">12.000+</p>
<p className="text-[10px] font-normal uppercase tracking-widest text-white/35">Professionisti formati</p>
</div>
</div>
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-[#c4993a]/20 border border-[#c4993a]/35 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-[#c4993a]" icon="solar:global-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
</div>
<div>
<p className="font-['Syne'] font-bold text-lg text-white leading-tight">68 Paesi</p>
<p className="text-[10px] font-normal uppercase tracking-widest text-white/35">Studenti attivi</p>
</div>
</div>
</div>
</div>
</div>
<div className="max-w-[1400px] mx-auto px-5 md:px-10 pb-20 md:pb-28 -mt-2">
<div className="reveal flex flex-wrap gap-2 mb-10 pt-10 border-t border-white/[0.06]">
<button className="academy-tab active text-[10px] font-normal uppercase tracking-widest px-4 py-2 rounded-full border transition-all" data-tab="all">Tutti i Corsi</button>
<button className="academy-tab text-[10px] font-normal uppercase tracking-widest px-4 py-2 rounded-full border transition-all" data-tab="frollatura">Frollatura</button>
<button className="academy-tab text-[10px] font-normal uppercase tracking-widest px-4 py-2 rounded-full border transition-all" data-tab="salumi">Salumi</button>
<button className="academy-tab text-[10px] font-normal uppercase tracking-widest px-4 py-2 rounded-full border transition-all" data-tab="pesce">Pesce</button>
<button className="academy-tab text-[10px] font-normal uppercase tracking-widest px-4 py-2 rounded-full border transition-all" data-tab="haccp">HACCP</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6" id="academy-courses-grid">

<a className="course-card reveal group relative bg-white/[0.04] border border-white/[0.08] rounded-3xl overflow-hidden flex flex-col" data-course-cat="frollatura" href="/corsi-di-formazione/">
<div className="relative overflow-hidden" style={{height: '188px'}}>
<img alt="Masterclass Frollatura" className="course-thumb w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/MAT-rev-10-slide.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0b]/80 to-transparent"></div>
<div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 bg-[#C7051B] text-white text-[9px] font-normal uppercase tracking-widest px-2.5 py-1.5 rounded-full z-10">
<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0"></span>
              Live disponibile
            </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex items-center gap-2 mb-3">
<span className="inline-flex items-center gap-1 border text-[9px] font-normal uppercase tracking-widest px-2 py-1 rounded-full level-pill-beginner">Base</span>
<span className="text-[9px] font-light text-white/35 uppercase tracking-widest">Frollatura</span>
</div>
<h3 className="font-['Syne'] font-bold text-base text-white mb-2 leading-snug">Masterclass Frollatura Professionale</h3>
<p className="text-xs font-light text-white/45 leading-relaxed mb-4 flex-grow">Tutto ciò che devi sapere sulla frollatura a pH controllato. Dal taglio al risultato finale.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.07]">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-white/30" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon>
<span className="text-[10px] font-light text-white/30">8h · On-demand</span>
</div>
<span className="text-[10px] font-normal text-[#4ade80] flex items-center gap-1">
                Scopri <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="11"></iconify-icon>
</span>
</div>
</div>
</a>

<a className="course-card reveal reveal-delay-1 group relative bg-white/[0.04] border border-white/[0.08] rounded-3xl overflow-hidden flex flex-col" data-course-cat="salumi" href="/corsi-di-formazione/">
<div className="relative overflow-hidden" style={{height: '188px'}}>
<img alt="Corso Salumi Artigianali" className="course-thumb w-full h-full object-cover object-center opacity-60 group-hover:opacity-90 transition-opacity duration-500 scale-110" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/salami_ombra.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0b]/90 via-[#0d0d0b]/30 to-transparent"></div>
<div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 bg-[#c4993a] text-white text-[9px] font-normal uppercase tracking-widest px-2.5 py-1.5 rounded-full z-10">
              Bestseller
            </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex items-center gap-2 mb-3">
<span className="inline-flex items-center gap-1 border text-[9px] font-normal uppercase tracking-widest px-2 py-1 rounded-full level-pill-intermediate">Intermedio</span>
<span className="text-[9px] font-light text-white/35 uppercase tracking-widest">Salumi</span>
</div>
<h3 className="font-['Syne'] font-bold text-base text-white mb-2 leading-snug">Salumi Artigianali di Alta Qualità</h3>
<p className="text-xs font-light text-white/45 leading-relaxed mb-4 flex-grow">Stagionatura, fermentazione e controllo pH per produrre salumi che i clienti non dimenticheranno.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.07]">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-white/30" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon>
<span className="text-[10px] font-light text-white/30">12h · On-demand</span>
</div>
<span className="text-[10px] font-normal text-[#4ade80] flex items-center gap-1">
                Scopri <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="11"></iconify-icon>
</span>
</div>
</div>
</a>

<a className="course-card reveal reveal-delay-2 group relative bg-white/[0.04] border border-white/[0.08] rounded-3xl overflow-hidden flex flex-col" data-course-cat="pesce" href="/corsi-di-formazione/">
<div className="relative overflow-hidden" style={{height: '188px'}}>
<img alt="Corso Maturazione Pesce" className="course-thumb w-full h-full object-cover object-center opacity-60 group-hover:opacity-90 transition-opacity duration-500 scale-110" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/fish_ombra.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0b]/90 via-[#0d0d0b]/30 to-transparent"></div>
<div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 bg-[#0369a1] text-white text-[9px] font-normal uppercase tracking-widest px-2.5 py-1.5 rounded-full z-10">
              Innovazione
            </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex items-center gap-2 mb-3">
<span className="inline-flex items-center gap-1 border text-[9px] font-normal uppercase tracking-widest px-2 py-1 rounded-full level-pill-advanced">Avanzato</span>
<span className="text-[9px] font-light text-white/35 uppercase tracking-widest">Pesce</span>
</div>
<h3 className="font-['Syne'] font-bold text-base text-white mb-2 leading-snug">Maturazione Ittica Avanzata</h3>
<p className="text-xs font-light text-white/45 leading-relaxed mb-4 flex-grow">L'arte della frollatura del pesce: protocolli, sicurezza alimentare e come valorizzare ogni specie.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.07]">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-white/30" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon>
<span className="text-[10px] font-light text-white/30">6h · On-demand</span>
</div>
<span className="text-[10px] font-normal text-[#4ade80] flex items-center gap-1">
                Scopri <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="11"></iconify-icon>
</span>
</div>
</div>
</a>

<a className="course-card reveal reveal-delay-3 group relative bg-white/[0.04] border border-white/[0.08] rounded-3xl overflow-hidden flex flex-col" data-course-cat="haccp" href="/corsi-di-formazione/">
<div className="relative overflow-hidden" style={{height: '188px'}}>
<div className="w-full h-full bg-gradient-to-br from-[#116432]/30 to-[#0d0d0b] flex items-center justify-center">
<iconify-icon className="text-[#116432]/40" icon="solar:shield-check-bold" width="72"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0b]/80 to-transparent"></div>
<div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 bg-[#116432] text-white text-[9px] font-normal uppercase tracking-widest px-2.5 py-1.5 rounded-full z-10">
              Certificato
            </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex items-center gap-2 mb-3">
<span className="inline-flex items-center gap-1 border text-[9px] font-normal uppercase tracking-widest px-2 py-1 rounded-full level-pill-beginner">Base</span>
<span className="text-[9px] font-light text-white/35 uppercase tracking-widest">HACCP</span>
</div>
<h3 className="font-['Syne'] font-bold text-base text-white mb-2 leading-snug">HACCP &amp; Sicurezza Alimentare</h3>
<p className="text-xs font-light text-white/45 leading-relaxed mb-4 flex-grow">Gestisci conformità e ispezioni con fiducia. Certificazione rilasciata al termine del corso.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.07]">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-white/30" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon>
<span className="text-[10px] font-light text-white/30">4h · On-demand</span>
</div>
<span className="text-[10px] font-normal text-[#4ade80] flex items-center gap-1">
                Scopri <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="11"></iconify-icon>
</span>
</div>
</div>
</a>
</div>
<div className="mt-10 text-center reveal">
<a className="inline-flex items-center gap-2 border border-white/15 hover:border-white/40 text-white text-xs font-normal tracking-widest uppercase py-4 px-7 rounded-full transition-all hover:bg-white/[0.06]" href="/corsi-di-formazione/">
          Vedi tutti i corsi Academy
          <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-[#f5f2ec] py-24 md:py-32 relative z-20" id="roi">
<div className="max-w-[1400px] mx-auto px-5 md:px-10">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-14">
<p className="reveal text-[10px] font-normal tracking-[0.18em] uppercase text-[#116432] mb-3">Calcola il tuo ritorno</p>
<h2 className="reveal font-['Syne'] font-bold text-4xl md:text-5xl tracking-tight text-[#0d0d0b] leading-[1.05]">Quanto guadagni con Stagionello?</h2>
<p className="reveal mt-4 text-sm font-light text-neutral-500 max-w-xl mx-auto leading-relaxed">Sposta i cursori e scopri il potenziale di guadagno per la tua attività.</p>
</div>
<div className="reveal bg-[#0d0d0b] rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
<div className="absolute top-0 right-0 w-80 h-80 bg-[#116432]/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
<div className="flex flex-col gap-8">

<div>
<div className="flex justify-between items-baseline mb-3">
<label className="text-[10px] font-normal uppercase tracking-widest text-white/45">Kg frollata/settimana</label>
<span className="font-['Syne'] font-bold text-xl text-white" id="roi-kg-val">50 kg</span>
</div>
<input className="roi-slider" id="roi-kg" max="300" min="10" step="5" style={{'--pct': '14%'}} type="range" value="50"/>
<div className="flex justify-between mt-1.5">
<span className="text-[9px] text-white/20">10 kg</span>
<span className="text-[9px] text-white/20">300 kg</span>
</div>
</div>

<div>
<div className="flex justify-between items-baseline mb-3">
<label className="text-[10px] font-normal uppercase tracking-widest text-white/45">Prezzo al kg (€)</label>
<span className="font-['Syne'] font-bold text-xl text-white" id="roi-price-val">€ 35</span>
</div>
<input className="roi-slider" id="roi-price" max="120" min="15" step="1" style={{'--pct': '16%'}} type="range" value="35"/>
<div className="flex justify-between mt-1.5">
<span className="text-[9px] text-white/20">€ 15</span>
<span className="text-[9px] text-white/20">€ 120</span>
</div>
</div>

<div>
<div className="flex justify-between items-baseline mb-3">
<label className="text-[10px] font-normal uppercase tracking-widest text-white/45">Margine operativo (%)</label>
<span className="font-['Syne'] font-bold text-xl text-white" id="roi-margin-val">35%</span>
</div>
<input className="roi-slider" id="roi-margin" max="70" min="10" step="1" style={{'--pct': '40%'}} type="range" value="35"/>
<div className="flex justify-between mt-1.5">
<span className="text-[9px] text-white/20">10%</span>
<span className="text-[9px] text-white/20">70%</span>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6">
<p className="text-[10px] font-normal uppercase tracking-widest text-white/35 mb-2">Fatturato Mensile Stimato</p>
<p className="font-['Syne'] font-bold text-[2.5rem] text-white leading-none" id="roi-revenue">€ 7.000</p>
</div>
<div className="bg-[#116432]/10 border border-[#116432]/25 rounded-2xl p-6">
<p className="text-[10px] font-normal uppercase tracking-widest text-[#4ade80]/60 mb-2">Profitto Mensile Netto</p>
<p className="font-['Syne'] font-bold text-[2.5rem] text-[#4ade80] leading-none" id="roi-profit">€ 2.450</p>
</div>
<div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
<p className="text-[10px] font-normal uppercase tracking-widest text-white/35 mb-2">ROI stimato in</p>
<p className="font-['Syne'] font-bold text-[2.5rem] text-[#c4993a] leading-none" id="roi-months">5 <span className="text-xl font-light text-white/40">mesi</span></p>
</div>
<p className="text-[10px] text-white/25 font-light leading-relaxed">* Calcolo indicativo basato su dati medi dei nostri clienti. I risultati effettivi possono variare.</p>
</div>
</div>
<div className="mt-10 pt-8 border-t border-white/[0.07] text-center relative z-10">
<a className="inline-flex items-center gap-2 bg-[#116432] hover:bg-[#147a3b] text-white text-xs font-normal tracking-widest uppercase py-4 px-8 rounded-full transition-all hover:shadow-[0_0_24px_rgba(17,100,50,0.5)]" href="#configura">
              Configura il tuo impianto
              <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0d0d0b] border-y border-white/[0.06] py-10 overflow-hidden relative z-20">
<div className="mb-4 text-center">
<p className="text-[9px] font-normal uppercase tracking-[0.2em] text-white/20">Distribuito in oltre 120 paesi — partner e clienti globali</p>
</div>
<div className="overflow-hidden w-full">
<div className="marquee-track">
<div className="flex items-center gap-14 px-7">
<span className="font-['Syne'] font-bold text-sm text-white/15 uppercase tracking-widest whitespace-nowrap">Macellerie Premium</span>
<span className="w-1 h-1 rounded-full bg-white/10 flex-shrink-0"></span>
<span className="font-['Syne'] font-bold text-sm text-white/15 uppercase tracking-widest whitespace-nowrap">Ristoranti Steakhouse</span>
<span className="w-1 h-1 rounded-full bg-white/10 flex-shrink-0"></span>
<span className="font-['Syne'] font-bold text-sm text-white/15 uppercase tracking-widest whitespace-nowrap">GDO Europa</span>
<span className="w-1 h-1 rounded-full bg-white/10 flex-shrink-0"></span>
<span className="font-['Syne'] font-bold text-sm text-white/15 uppercase tracking-widest whitespace-nowrap">Hotel 5 Stelle</span>
<span className="w-1 h-1 rounded-full bg-white/10 flex-shrink-0"></span>
<span className="font-['Syne'] font-bold text-sm text-white/15 uppercase tracking-widest whitespace-nowrap">Salumifici Artigianali</span>
<span className="w-1 h-1 rounded-full bg-white/10 flex-shrink-0"></span>
<span className="font-['Syne'] font-bold text-sm text-white/15 uppercase tracking-widest whitespace-nowrap">Pescherie Premium</span>
<span className="w-1 h-1 rounded-full bg-white/10 flex-shrink-0"></span>
<span className="font-['Syne'] font-bold text-sm text-white/15 uppercase tracking-widest whitespace-nowrap">Industria Alimentare</span>
<span className="w-1 h-1 rounded-full bg-white/10 flex-shrink-0"></span>
<span className="font-['Syne'] font-bold text-sm text-white/15 uppercase tracking-widest whitespace-nowrap">Food Distribution</span>
<span className="w-1 h-1 rounded-full bg-white/10 flex-shrink-0"></span>
</div>
<div aria-hidden="true" className="flex items-center gap-14 px-7">
<span className="font-['Syne'] font-bold text-sm text-white/15 uppercase tracking-widest whitespace-nowrap">Macellerie Premium</span>
<span className="w-1 h-1 rounded-full bg-white/10 flex-shrink-0"></span>
<span className="font-['Syne'] font-bold text-sm text-white/15 uppercase tracking-widest whitespace-nowrap">Ristoranti Steakhouse</span>
<span className="w-1 h-1 rounded-full bg-white/10 flex-shrink-0"></span>
<span className="font-['Syne'] font-bold text-sm text-white/15 uppercase tracking-widest whitespace-nowrap">GDO Europa</span>
<span className="w-1 h-1 rounded-full bg-white/10 flex-shrink-0"></span>
<span className="font-['Syne'] font-bold text-sm text-white/15 uppercase tracking-widest whitespace-nowrap">Hotel 5 Stelle</span>
<span className="w-1 h-1 rounded-full bg-white/10 flex-shrink-0"></span>
<span className="font-['Syne'] font-bold text-sm text-white/15 uppercase tracking-widest whitespace-nowrap">Salumifici Artigianali</span>
<span className="w-1 h-1 rounded-full bg-white/10 flex-shrink-0"></span>
<span className="font-['Syne'] font-bold text-sm text-white/15 uppercase tracking-widest whitespace-nowrap">Pescherie Premium</span>
<span className="w-1 h-1 rounded-full bg-white/10 flex-shrink-0"></span>
<span className="font-['Syne'] font-bold text-sm text-white/15 uppercase tracking-widest whitespace-nowrap">Industria Alimentare</span>
<span className="w-1 h-1 rounded-full bg-white/10 flex-shrink-0"></span>
<span className="font-['Syne'] font-bold text-sm text-white/15 uppercase tracking-widest whitespace-nowrap">Food Distribution</span>
<span className="w-1 h-1 rounded-full bg-white/10 flex-shrink-0"></span>
</div>
</div>
</div>
</section>

<section className="bg-[#0d0d0b] py-24 md:py-32 relative overflow-hidden z-20" id="configura">
<div className="ambient-glow ambient-glow-1" style={{opacity: '0.2'}}></div>
<div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

<div>
<p className="reveal text-[10px] font-normal tracking-[0.18em] uppercase text-[#116432] mb-4">Passo successivo</p>
<h2 className="reveal font-['Syne'] font-bold text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight text-white leading-[1.05] mb-6">
            Configura il tuo impianto.<br/><span className="text-white/40">Senza impegno.</span>
</h2>
<p className="reveal text-base font-light text-white/55 leading-relaxed mb-10 max-w-lg">
            Rispondi a 3 semplici domande e ricevi una proposta personalizzata con il modello più adatto alla tua attività, i costi e il piano di ritorno sull'investimento.
          </p>
<div className="flex flex-col gap-5 reveal">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-2xl bg-[#116432]/15 border border-[#116432]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon className="text-[#4ade80]" icon="solar:chat-square-call-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-normal text-white mb-1">Consulenza Gratuita</h4>
<p className="text-xs font-light text-white/45 leading-relaxed">Un esperto Stagionello ti contatta entro 24h per discutere le tue esigenze specifiche.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-2xl bg-[#116432]/15 border border-[#116432]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon className="text-[#4ade80]" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-normal text-white mb-1">Preventivo Personalizzato</h4>
<p className="text-xs font-light text-white/45 leading-relaxed">Ricevi un preventivo su misura con ROI stimato basato sui tuoi volumi e settore.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-2xl bg-[#c4993a]/15 border border-[#c4993a]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon className="text-[#c4993a]" icon="solar:gift-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-normal text-white mb-1">Demo &amp; Formazione Inclusa</h4>
<p className="text-xs font-light text-white/45 leading-relaxed">Ogni impianto include sessione di formazione e accesso alla Stagionello Academy per 12 mesi.</p>
</div>
</div>
</div>
<div className="reveal mt-10 flex flex-wrap gap-5">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/30" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<a className="text-sm font-light text-white/50 hover:text-white transition-colors" href="tel:+390823000000">+39 0823 000000</a>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-white/30" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<a className="text-sm font-light text-white/50 hover:text-white transition-colors" href="mailto:info@stagionello.com">info@stagionello.com</a>
</div>
</div>
</div>

<div className="reveal">
<div className="glass-panel-dark rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
<div className="absolute -bottom-20 -right-20 w-56 h-56 bg-[#116432]/15 blur-3xl rounded-full pointer-events-none"></div>
<h3 className="font-['Syne'] font-bold text-2xl text-white mb-2 relative z-10">Richiedi la tua proposta</h3>
<p className="text-sm font-light text-white/45 mb-8 relative z-10">Risposta garantita entro 24 ore lavorative.</p>
<form className="flex flex-col gap-4 relative z-10" id="config-form" novalidate="">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-[10px] font-normal uppercase tracking-widest text-white/35 mb-1.5">Nome *</label>
<input className="w-full bg-white/[0.07] border border-white/[0.1] text-sm text-white px-4 py-3 rounded-xl outline-none focus:border-[#116432]/80 focus:ring-2 focus:ring-[#116432]/20 transition-all placeholder:text-white/20" name="fname" placeholder="Mario" required="" type="text"/>
</div>
<div>
<label className="block text-[10px] font-normal uppercase tracking-widest text-white/35 mb-1.5">Cognome *</label>
<input className="w-full bg-white/[0.07] border border-white/[0.1] text-sm text-white px-4 py-3 rounded-xl outline-none focus:border-[#116432]/80 focus:ring-2 focus:ring-[#116432]/20 transition-all placeholder:text-white/20" name="lname" placeholder="Rossi" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-[10px] font-normal uppercase tracking-widest text-white/35 mb-1.5">Email *</label>
<input className="w-full bg-white/[0.07] border border-white/[0.1] text-sm text-white px-4 py-3 rounded-xl outline-none focus:border-[#116432]/80 focus:ring-2 focus:ring-[#116432]/20 transition-all placeholder:text-white/20" name="email" placeholder="email@esempio.com" required="" type="email"/>
</div>
<div>
<label className="block text-[10px] font-normal uppercase tracking-widest text-white/35 mb-1.5">Telefono</label>
<input className="w-full bg-white/[0.07] border border-white/[0.1] text-sm text-white px-4 py-3 rounded-xl outline-none focus:border-[#116432]/80 focus:ring-2 focus:ring-[#116432]/20 transition-all placeholder:text-white/20" name="phone" placeholder="+39 000 000 0000" type="tel"/>
</div>
<div>
<label className="block text-[10px] font-normal uppercase tracking-widest text-white/35 mb-1.5">Settore di attività</label>
<div className="relative">
<select className="w-full bg-white/[0.07] border border-white/[0.1] text-sm text-white/75 px-4 py-3 rounded-xl outline-none focus:border-[#116432]/80 focus:ring-2 focus:ring-[#116432]/20 transition-all cursor-pointer" name="sector">
<option className="bg-[#1a1a18] text-white" disabled="" selected="" value="">Seleziona il tuo settore</option>
<option className="bg-[#1a1a18] text-white" value="macelleria">Macelleria / Salumeria</option>
<option className="bg-[#1a1a18] text-white" value="ristorante">Ristorante / Hotel</option>
<option className="bg-[#1a1a18] text-white" value="pescheria">Pescheria</option>
<option className="bg-[#1a1a18] text-white" value="gdo">GDO / Supermercato</option>
<option className="bg-[#1a1a18] text-white" value="industria">Industria Alimentare</option>
<option className="bg-[#1a1a18] text-white" value="distributore">Distributore / Rivenditore</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
</div>
</div>
<div>
<label className="block text-[10px] font-normal uppercase tracking-widest text-white/35 mb-1.5">Prodotto di interesse</label>
<div className="relative">
<select className="w-full bg-white/[0.07] border border-white/[0.1] text-sm text-white/75 px-4 py-3 rounded-xl outline-none focus:border-[#116432]/80 focus:ring-2 focus:ring-[#116432]/20 transition-all cursor-pointer" name="product">
<option className="bg-[#1a1a18] text-white" disabled="" selected="" value="">Seleziona il prodotto</option>
<option className="bg-[#1a1a18] text-white" value="meat-70">Meat Curing Device 70</option>
<option className="bg-[#1a1a18] text-white" value="meat-120">Meat Curing Device 120</option>
<option className="bg-[#1a1a18] text-white" value="dry-age-3">Dry Age 3.0</option>
<option className="bg-[#1a1a18] text-white" value="salami-60">Salami Curing Device 60</option>
<option className="bg-[#1a1a18] text-white" value="salami-120">Salami Curing Device 120</option>
<option className="bg-[#1a1a18] text-white" value="fish">Fish Curing Device</option>
<option className="bg-[#1a1a18] text-white" value="industriale">Soluzione Industriale</option>
<option className="bg-[#1a1a18] text-white" value="non-so">Non so ancora, voglio una consulenza</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
</div>
</div>
<div>
<label className="block text-[10px] font-normal uppercase tracking-widest text-white/35 mb-1.5">Messaggio (opzionale)</label>
<textarea className="w-full bg-white/[0.07] border border-white/[0.1] text-sm text-white px-4 py-3 rounded-xl outline-none focus:border-[#116432]/80 focus:ring-2 focus:ring-[#116432]/20 transition-all placeholder:text-white/20 resize-none" name="message" placeholder="Descrivici la tua attività e le tue esigenze..." rows="3"></textarea>
</div>
<div className="flex items-start gap-3">
<input className="mt-0.5 w-4 h-4 rounded accent-[#116432] cursor-pointer flex-shrink-0" id="privacy-config" name="privacy" required="" type="checkbox"/>
<label className="text-[10px] font-light text-white/35 leading-relaxed cursor-pointer" htmlFor="privacy-config">Acconsento al trattamento dei dati personali ai sensi del GDPR. <a className="text-white/55 hover:text-white underline transition-colors" href="/privacy">Privacy Policy</a>.</label>
</div>
<button className="w-full bg-[#116432] hover:bg-[#147a3b] text-white text-xs font-normal tracking-widest uppercase py-4 rounded-xl transition-all hover:shadow-[0_0_28px_rgba(17,100,50,0.5)] active:scale-[0.99] flex items-center justify-center gap-2 mt-1" id="config-submit-btn" type="submit">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
                Richiedi la Tua Proposta Gratuita
              </button>
<p className="text-[10px] text-center text-white/25 font-light">Nessun obbligo d'acquisto. Risposta entro 24h.</p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#f5f2ec] py-24 md:py-32 relative z-20" id="magazine">
<div className="max-w-[1400px] mx-auto px-5 md:px-10">
<div className="flex flex-col md:flex-row items-end justify-between mb-14 gap-6">
<div>
<p className="reveal text-[10px] font-normal tracking-[0.18em] uppercase text-[#116432] mb-3">Risorse &amp; Approfondimenti</p>
<h2 className="reveal font-['Syne'] font-bold text-4xl md:text-5xl tracking-tight text-[#0d0d0b] leading-[1.05]">Dal Magazine.</h2>
</div>
<a className="reveal inline-flex items-center gap-2 text-sm font-light text-neutral-500 hover:text-[#116432] transition-colors group" href="/magazine/">
<span className="border-b border-transparent group-hover:border-[#116432]/40 pb-0.5 transition-colors">Tutti gli articoli</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<a className="reveal group cursor-pointer" href="/magazine/">
<div className="rounded-3xl overflow-hidden mb-5" style={{height: '240px'}}>
<img alt="Articolo frollatura" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/MAT-rev-10-slide.jpg"/>
</div>
<span className="inline-block text-[9px] font-normal uppercase tracking-widest text-[#116432] border border-[#116432]/20 bg-[#116432]/5 rounded-full px-3 py-1 mb-3">Frollatura</span>
<h3 className="font-['Syne'] font-bold text-lg text-[#0d0d0b] leading-snug mb-2 group-hover:text-[#116432] transition-colors">Perché il controllo del pH è fondamentale nel dry-aging</h3>
<p className="text-sm font-light text-neutral-500 leading-relaxed">La scienza dietro il Cuomo Method® e perché i metodi tradizionali non bastano più per garantire sicurezza e qualità costante.</p>
<div className="flex items-center gap-2 mt-4">
<span className="text-[10px] font-light text-neutral-400">8 min lettura</span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="text-[10px] font-light text-neutral-400">Alessandro Cuomo</span>
</div>
</a>
<a className="reveal reveal-delay-1 group cursor-pointer" href="/magazine/">
<div className="rounded-3xl overflow-hidden mb-5" style={{height: '240px'}}>
<img alt="Articolo salumi" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/STG-ACADEMY.png"/>
</div>
<span className="inline-block text-[9px] font-normal uppercase tracking-widest text-[#c4993a] border border-[#c4993a]/20 bg-[#c4993a]/5 rounded-full px-3 py-1 mb-3">Salumi &amp; Business</span>
<h3 className="font-['Syne'] font-bold text-lg text-[#0d0d0b] leading-snug mb-2 group-hover:text-[#116432] transition-colors">Come aprire un angolo salumi premium in macelleria</h3>
<p className="text-sm font-light text-neutral-500 leading-relaxed">Guida pratica per trasformare la tua macelleria con una linea di salumi a stagionatura controllata, dal layout al marketing.</p>
<div className="flex items-center gap-2 mt-4">
<span className="text-[10px] font-light text-neutral-400">12 min lettura</span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="text-[10px] font-light text-neutral-400">Redazione</span>
</div>
</a>
<a className="reveal reveal-delay-2 group cursor-pointer" href="/magazine/">
<div className="rounded-3xl overflow-hidden mb-5 bg-[#0d0d0b] flex items-center justify-center" style={{height: '240px'}}>
<img alt="Articolo pesce" className="h-44 w-auto object-contain drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" src="https://www.stagionello.com/wp-content/uploads/2023/08/fish_ombra.png"/>
</div>
<span className="inline-block text-[9px] font-normal uppercase tracking-widest text-[#0369a1] border border-[#0369a1]/20 bg-[#0369a1]/5 rounded-full px-3 py-1 mb-3">Pesce &amp; Innovazione</span>
<h3 className="font-['Syne'] font-bold text-lg text-[#0d0d0b] leading-snug mb-2 group-hover:text-[#116432] transition-colors">Il futuro del pesce è la maturazione: ecco perché</h3>
<p className="text-sm font-light text-neutral-500 leading-relaxed">La maturazione ittica è ancora di nicchia ma la domanda cresce del 35% l'anno. Come posizionarti per primo nel tuo mercato.</p>
<div className="flex items-center gap-2 mt-4">
<span className="text-[10px] font-light text-neutral-400">6 min lettura</span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="text-[10px] font-light text-neutral-400">Alessandro Cuomo</span>
</div>
</a>
</div>
</div>
</section>

<section className="bg-[#0d0d0b] py-24 md:py-32 relative z-20 border-t border-white/[0.06]" id="faq">
<div className="max-w-[1400px] mx-auto px-5 md:px-10">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-14">
<p className="reveal text-[10px] font-normal tracking-[0.18em] uppercase text-[#116432] mb-3">Domande Frequenti</p>
<h2 className="reveal font-['Syne'] font-bold text-4xl md:text-5xl tracking-tight text-white leading-[1.05]">Tutto quello che vuoi sapere.</h2>
</div>
<div className="flex flex-col gap-2" id="faq-list">
<div className="faq-item reveal border border-white/[0.08] rounded-2xl overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<button className="faq-btn w-full flex items-center justify-between px-7 py-5 text-left gap-4">
<span className="text-sm font-normal text-white">Devo avere conoscenze tecniche per usare l'impianto?</span>
<iconify-icon className="text-white/40 flex-shrink-0 faq-icon transition-transform duration-300" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<div className="faq-content hidden px-7 pb-6">
<p className="text-sm font-light text-white/55 leading-relaxed">No. Il sistema è completamente automatizzato grazie all'algoritmo del Cuomo Method®. Ti basta selezionare la ricetta (carne, salume o pesce) e avviare il ciclo. Il software gestisce tutto in autonomia: pH, umidità, temperatura e ventilazione.</p>
</div>
</div>
<div className="faq-item reveal reveal-delay-1 border border-white/[0.08] rounded-2xl overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<button className="faq-btn w-full flex items-center justify-between px-7 py-5 text-left gap-4">
<span className="text-sm font-normal text-white">In quanto tempo si ripaga l'investimento?</span>
<iconify-icon className="text-white/40 flex-shrink-0 faq-icon transition-transform duration-300" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<div className="faq-content hidden px-7 pb-6">
<p className="text-sm font-light text-white/55 leading-relaxed">La media dei nostri clienti raggiunge il pareggio in 5-6 mesi. Con un utilizzo ottimale dell'impianto e posizionamento premium del prodotto, alcuni clienti riferiscono un ROI in meno di 4 mesi. Il calcolatore nella pagina ti mostra una stima basata sui tuoi volumi.</p>
</div>
</div>
<div className="faq-item reveal reveal-delay-2 border border-white/[0.08] rounded-2xl overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<button className="faq-btn w-full flex items-center justify-between px-7 py-5 text-left gap-4">
<span className="text-sm font-normal text-white">L'impianto è conforme alle normative HACCP?</span>
<iconify-icon className="text-white/40 flex-shrink-0 faq-icon transition-transform duration-300" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<div className="faq-content hidden px-7 pb-6">
<p className="text-sm font-light text-white/55 leading-relaxed">Sì, pienamente. Ogni impianto Stagionello integra un sistema HACCP automatizzato che genera report di tracciabilità per ogni ciclo. I dati sono scaricabili in qualsiasi momento e sono pronti per qualsiasi ispezione sanitaria. La validazione HACCP è parte integrante del brevetto.</p>
</div>
</div>
<div className="faq-item reveal reveal-delay-3 border border-white/[0.08] rounded-2xl overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<button className="faq-btn w-full flex items-center justify-between px-7 py-5 text-left gap-4">
<span className="text-sm font-normal text-white">Qual è la differenza con un normale frigorifero per frollatura?</span>
<iconify-icon className="text-white/40 flex-shrink-0 faq-icon transition-transform duration-300" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<div className="faq-content hidden px-7 pb-6">
<p className="text-sm font-light text-white/55 leading-relaxed">Un frigorifero tradizionale controlla solo la temperatura. Stagionello controlla anche pH, umidità relativa, calo peso, ventilazione e acidificazione — tutti contemporaneamente tramite un unico algoritmo brevettato. Questo garantisce sicurezza microbiologica, riproducibilità e nessuno scarto, risultati impossibili da raggiungere con sistemi convenzionali.</p>
</div>
</div>
<div className="faq-item reveal border border-white/[0.08] rounded-2xl overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<button className="faq-btn w-full flex items-center justify-between px-7 py-5 text-left gap-4">
<span className="text-sm font-normal text-white">Che tipo di assistenza post-vendita offrite?</span>
<iconify-icon className="text-white/40 flex-shrink-0 faq-icon transition-transform duration-300" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<div className="faq-content hidden px-7 pb-6">
<p className="text-sm font-light text-white/55 leading-relaxed">Offriamo assistenza telefonica e da remoto, aggiornamenti software inclusi, garanzia biennale sull'hardware e accesso prioritario all'Academy per 12 mesi. Per i clienti enterprise è disponibile un SLA dedicato con tempi di intervento garantiti on-site.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#116432] py-20 md:py-24 relative overflow-hidden z-20">
<div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.75%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E\')'}}></div>
<div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10">
<div className="flex flex-col md:flex-row items-center justify-between gap-10">
<div>
<h2 className="font-['Syne'] font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight text-white leading-[1.05] mb-3">Pronto a fare il salto di qualità?</h2>
<p className="text-base font-light text-white/70 max-w-xl leading-relaxed">Unisciti a 3.500+ professionisti che hanno scelto Stagionello per distinguersi. Inizia con una consulenza gratuita senza impegno.</p>
</div>
<div className="flex flex-col sm:flex-row items-stretch gap-3 flex-shrink-0">
<a className="inline-flex justify-center items-center gap-2 bg-white hover:bg-neutral-100 text-[#116432] text-xs font-bold tracking-widest uppercase py-4 px-8 rounded-full transition-all hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0" href="#configura">
            Configura il tuo impianto
            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-xs font-normal tracking-widest uppercase py-4 px-8 rounded-full border border-white/30 transition-all" href="#guida">
<iconify-icon icon="solar:download-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
            Guida Gratuita
          </a>
</div>
</div>
</div>
</section>

<footer className="bg-[#0d0d0b] border-t border-white/[0.06] pt-20 pb-8 relative z-20">
<div className="max-w-[1400px] mx-auto px-5 md:px-10">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

<div className="lg:col-span-2">
<a className="inline-block mb-6" href="/">
<svg className="logo-stagionello logo-stagionello-light" fill="none" viewbox="0 0 220 52" xmlns="http://www.w3.org/2000/svg">
<text className="logo-main-text" fontFamily="Georgia, 'Times New Roman', serif" fontSize="36" font-style={{}} font-weight="700" x="0" y="34">Stagionello</text>
<text className="logo-registered" fontFamily="Arial, sans-serif" fontSize="11" font-weight="400" x="214" y="14">®</text>
<rect className="logo-flag-green" height="4" width="24" x="0" y="38"></rect>
<rect className="logo-flag-white" height="4" width="24" x="24" y="38"></rect>
<rect className="logo-flag-red" height="4" width="24" x="48" y="38"></rect>
<text className="logo-subtitle" fontFamily="Arial, Helvetica, sans-serif" fontSize="6.5" font-weight="400" letter-spacing="2.2" x="0" y="50">WE SEE TRADITION IN YOUR FUTURE</text>
</svg>
</a>
<p className="text-sm font-light text-white/40 leading-relaxed max-w-xs mb-6">Impianti brevettati per frollatura, maturazione e stagionatura professionale. Made in Italy. Distribuiti in 120+ paesi.</p>
<div className="flex items-center gap-3">
<a className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all" href="https://www.instagram.com/stagionello/" rel="noopener" target="_blank">
<iconify-icon icon="mdi:instagram" width="16"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all" href="https://www.facebook.com/stagionello/" rel="noopener" target="_blank">
<iconify-icon icon="mdi:facebook" width="16"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all" href="https://www.youtube.com/@stagionello" rel="noopener" target="_blank">
<iconify-icon icon="mdi:youtube" width="16"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all" href="https://www.linkedin.com/company/stagionello/" rel="noopener" target="_blank">
<iconify-icon icon="mdi:linkedin" width="16"></iconify-icon>
</a>
</div>
</div>

<div>
<p className="text-[10px] font-normal uppercase tracking-widest text-white/25 mb-5">Prodotti</p>
<ul className="flex flex-col gap-2.5">
<li><a className="text-sm font-light text-white/45 hover:text-white transition-colors" href="/stagionello-meat-curing-device/">Meat Curing Device</a></li>
<li><a className="text-sm font-light text-white/45 hover:text-white transition-colors" href="/stagionello-dry-age-3-0/">Dry Age 3.0</a></li>
<li><a className="text-sm font-light text-white/45 hover:text-white transition-colors" href="/stagionello-salumi-curing-device/">Salami Curing Device</a></li>
<li><a className="text-sm font-light text-white/45 hover:text-white transition-colors" href="/stagionello-fish-curing-device/">Fish Curing Device</a></li>
<li><a className="text-sm font-light text-white/45 hover:text-white transition-colors" href="#configura">Soluzioni Industriali</a></li>
</ul>
</div>

<div>
<p className="text-[10px] font-normal uppercase tracking-widest text-white/25 mb-5">Azienda</p>
<ul className="flex flex-col gap-2.5">
<li><a className="text-sm font-light text-white/45 hover:text-white transition-colors" href="/frollatura-della-carne-il-dry-aging-e-le-soluzioni-tecnologiche/">Il Metodo</a></li>
<li><a className="text-sm font-light text-white/45 hover:text-white transition-colors" href="/corsi-di-formazione/">Academy</a></li>
<li><a className="text-sm font-light text-white/45 hover:text-white transition-colors" href="/magazine/">Magazine</a></li>
<li><a className="text-sm font-light text-white/45 hover:text-white transition-colors" href="/chi-siamo/">Chi Siamo</a></li>
<li><a className="text-sm font-light text-white/45 hover:text-white transition-colors" href="/distributori/">Distributori</a></li>
</ul>
</div>

<div>
<p className="text-[10px] font-normal uppercase tracking-widest text-white/25 mb-5">Contatti</p>
<ul className="flex flex-col gap-3">
<li className="flex items-start gap-2.5">
<iconify-icon className="text-white/25 mt-0.5 flex-shrink-0" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
<span className="text-sm font-light text-white/40 leading-relaxed">Via Nazionale, 12<br/>81020 San Nicola la Strada (CE), Italia</span>
</li>
<li className="flex items-center gap-2.5">
<iconify-icon className="text-white/25 flex-shrink-0" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
<a className="text-sm font-light text-white/40 hover:text-white transition-colors" href="tel:+390823000000">+39 0823 000000</a>
</li>
<li className="flex items-center gap-2.5">
<iconify-icon className="text-white/25 flex-shrink-0" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
<a className="text-sm font-light text-white/40 hover:text-white transition-colors" href="mailto:info@stagionello.com">info@stagionello.com</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[11px] font-light text-white/20 text-center md:text-left">© 2024 Stagionello® — Cuomo Method® — Brevetto Europeo EP2548449. Tutti i diritti riservati.</p>
<div className="flex items-center flex-wrap justify-center gap-4">
<a className="text-[11px] font-light text-white/20 hover:text-white/50 transition-colors" href="/privacy/">Privacy Policy</a>
<a className="text-[11px] font-light text-white/20 hover:text-white/50 transition-colors" href="/cookie/">Cookie Policy</a>
<a className="text-[11px] font-light text-white/20 hover:text-white/50 transition-colors" href="/termini/">Termini d'uso</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0d0d0b]/95 backdrop-blur-xl border-t border-white/[0.08] px-4 pt-3 pb-safe flex items-center gap-2.5">
<a className="flex-1 inline-flex justify-center items-center gap-1.5 border border-white/15 text-white text-[10px] font-normal tracking-widest uppercase py-3.5 rounded-xl transition-all hover:bg-white/5" href="#guida">
<iconify-icon icon="solar:download-linear" width="14"></iconify-icon>
      Guida Gratis
    </a>
<a className="flex-1 inline-flex justify-center items-center gap-1.5 bg-[#116432] hover:bg-[#147a3b] text-white text-[10px] font-normal tracking-widest uppercase py-3.5 rounded-xl transition-all" href="#configura">
      Configura
      <iconify-icon icon="solar:arrow-right-linear" width="13"></iconify-icon>
</a>
</div>



    </>
  );
}
