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



      // 1. STEAM EFFECT
      (function() {
        let throttle = 0;
        document.addEventListener('mousemove', (e) => {
          throttle++;
          if (throttle % 5 !== 0) return;
          const particle = document.createElement('div');
          particle.classList.add('cursor-steam');
          particle.style.left = e.clientX + 'px';
          particle.style.top = e.clientY + 'px';
          document.body.appendChild(particle);
          setTimeout(() => particle.remove(), 1500);
        });
      })();

      document.addEventListener('DOMContentLoaded', () => {
        // 2. YEAR
        const yearEl = document.getElementById('currentYear');
        if (yearEl) yearEl.innerHTML = new Date().getFullYear();

        // 3. MOBILE MENU
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.js-mobile-link');
        const mobileIcon = mobileBtn ? mobileBtn.querySelector('iconify-icon') : null;

        if (mobileBtn && mobileMenu) {
          function toggleMenu() {
            const isOpen = !mobileMenu.classList.contains('max-h-0');
            if (isOpen) {
              mobileMenu.classList.add('max-h-0', 'opacity-0');
              mobileMenu.classList.remove('max-h-screen', 'opacity-100');
              if (mobileIcon) mobileIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
            } else {
              mobileMenu.classList.remove('max-h-0', 'opacity-0');
              mobileMenu.classList.add('max-h-screen', 'opacity-100');
              if (mobileIcon) mobileIcon.setAttribute('icon', 'solar:close-circle-linear');
            }
          }
          mobileBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleMenu(); });
          mobileLinks.forEach(link => { link.addEventListener('click', () => { mobileMenu.classList.add('max-h-0', 'opacity-0'); mobileMenu.classList.remove('max-h-screen', 'opacity-100'); if (mobileIcon) mobileIcon.setAttribute('icon', 'solar:hamburger-menu-linear'); }); });
          document.addEventListener('click', (e) => { if (!mobileMenu.contains(e.target) && !mobileBtn.contains(e.target) && !mobileMenu.classList.contains('max-h-0')) { mobileMenu.classList.add('max-h-0', 'opacity-0'); mobileMenu.classList.remove('max-h-screen', 'opacity-100'); if (mobileIcon) mobileIcon.setAttribute('icon', 'solar:hamburger-menu-linear'); } });
        }

        // 4. BOOKING MODAL
        const bookingModal = document.getElementById('booking-modal');
        const openBookingBtns = document.querySelectorAll('.js-open-modal');
        const closeBookingBtns = document.querySelectorAll('.js-close-modal');

        if (bookingModal) {
          const modalContent = bookingModal.querySelector('div[class*="transform"]');
          function openBooking() { bookingModal.classList.remove('hidden'); requestAnimationFrame(() => { bookingModal.classList.remove('opacity-0'); if (modalContent) { modalContent.classList.remove('scale-95'); modalContent.classList.add('scale-100'); } }); }
          function closeBooking() { bookingModal.classList.add('opacity-0'); if (modalContent) { modalContent.classList.remove('scale-100'); modalContent.classList.add('scale-95'); } setTimeout(() => bookingModal.classList.add('hidden'), 300); }
          openBookingBtns.forEach(btn => btn.addEventListener('click', (e) => { e.preventDefault(); openBooking(); }));
          closeBookingBtns.forEach(btn => btn.addEventListener('click', (e) => { e.preventDefault(); closeBooking(); }));
          bookingModal.addEventListener('click', (e) => { if (e.target === bookingModal) closeBooking(); });
        }

        // 5. GALLERY
        const galleryItems = document.querySelectorAll('.gallery-item');
        if (galleryItems.length > 0) {
            const galleryData = Array.from(galleryItems).map(item => ({ src: item.dataset.src, caption: item.dataset.caption }));
            const scrollContainer = document.getElementById('gallery-scroll-container');
            const scrollLeftBtn = document.getElementById('scroll-left-btn');
            const scrollRightBtn = document.getElementById('scroll-right-btn');
            const gridModal = document.getElementById('gallery-grid-modal');
            const gridContent = document.getElementById('grid-content');
            const openGridBtn = document.getElementById('open-grid-btn');
            const closeGridBtn = document.getElementById('close-grid-btn');
            const lightboxModal = document.getElementById('lightbox-modal');
            const lightboxImg = document.getElementById('lightbox-img');
            const lightboxCaption = document.getElementById('lightbox-caption');
            const closeLightboxBtn = document.getElementById('close-lightbox');
            const prevSlideBtn = document.getElementById('prev-slide');
            const nextSlideBtn = document.getElementById('next-slide');
            let currentIndex = 0;

            if(scrollLeftBtn) scrollLeftBtn.addEventListener('click', () => scrollContainer.scrollBy({ left: -300, behavior: 'smooth' }));
            if(scrollRightBtn) scrollRightBtn.addEventListener('click', () => scrollContainer.scrollBy({ left: 300, behavior: 'smooth' }));
            galleryItems.forEach((item, index) => { item.addEventListener('click', () => openLightbox(index)); });

            if (openGridBtn) {
                openGridBtn.addEventListener('click', () => {
                    if (gridContent && gridContent.innerHTML === '') {
                        galleryData.forEach((data, index) => {
                            const card = document.createElement('div');
                            card.className = 'cursor-pointer group relative overflow-hidden border-2 border-[#5c4033] bg-[#1c1917] aspect-square';
                            card.innerHTML = `<img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter sepia-[0.3] group-hover:sepia-0" loading="lazy"><div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4"><p class="text-[#e8dcc5] text-center font-serif text-sm">${data.caption}</p></div>`;
                            card.addEventListener('click', () => openLightbox(index));
                            gridContent.appendChild(card);
                        });
                    }
                    gridModal.classList.remove('hidden'); setTimeout(() => gridModal.classList.remove('opacity-0'), 10); document.body.style.overflow = 'hidden';
                });
            }
            if (closeGridBtn) { closeGridBtn.addEventListener('click', () => { gridModal.classList.add('opacity-0'); setTimeout(() => { gridModal.classList.add('hidden'); document.body.style.overflow = ''; }, 300); }); }

            function openLightbox(index) { currentIndex = index; updateLightboxContent(); lightboxModal.classList.remove('hidden'); setTimeout(() => lightboxModal.classList.remove('opacity-0'), 10); }
            function updateLightboxContent() { const data = galleryData[currentIndex]; lightboxImg.src = data.src; lightboxCaption.textContent = data.caption; }
            function closeLightbox() { lightboxModal.classList.add('opacity-0'); setTimeout(() => lightboxModal.classList.add('hidden'), 300); }

            if(prevSlideBtn) prevSlideBtn.addEventListener('click', (e) => { e.stopPropagation(); currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length; updateLightboxContent(); });
            if(nextSlideBtn) nextSlideBtn.addEventListener('click', (e) => { e.stopPropagation(); currentIndex = (currentIndex + 1) % galleryData.length; updateLightboxContent(); });
            if(closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
            if(lightboxModal) lightboxModal.addEventListener('click', (e) => { if (e.target === lightboxModal) closeLightbox(); });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && bookingModal && !bookingModal.classList.contains('hidden')) { bookingModal.click(); }
                if (lightboxModal && !lightboxModal.classList.contains('hidden')) {
                    if (e.key === 'Escape') closeLightbox();
                    if (e.key === 'ArrowLeft') prevSlideBtn.click();
                    if (e.key === 'ArrowRight') nextSlideBtn.click();
                }
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
      

<div className="fixed inset-0 pointer-events-none z-0 opacity-20" style={{backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/black-scales.png\')'}}></div>
<div className="fixed -right-64 top-20 w-[600px] h-[600px] opacity-[0.03] pointer-events-none z-0">
<svg className="w-full h-full gear-spin fill-current text-[#8b5a2b]" viewbox="0 0 100 100">
<path d="M50 0 L55 10 L65 10 L68 0 L75 2 L73 12 L82 15 L88 8 L93 13 L87 20 L94 28 L100 25 L100 35 L90 38 L90 48 L100 50 L98 60 L88 58 L82 65 L90 72 L85 78 L75 72 L68 80 L72 90 L62 92 L58 82 L48 82 L45 92 L35 90 L38 80 L30 75 L20 80 L15 75 L22 65 L15 58 L5 62 L0 55 L10 50 L10 40 L0 38 L2 28 L12 30 L18 20 L10 12 L15 8 L25 15 L32 5 L30 -5 Z M50 35 A15 15 0 1 0 50 65 A15 15 0 1 0 50 35 Z"></path>
</svg>
</div>
<div className="fixed -left-48 bottom-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none z-0">
<svg className="w-full h-full gear-spin-rev fill-current text-[#8b5a2b]" viewbox="0 0 100 100">
<path d="M50 0 L55 10 L65 10 L68 0 L75 2 L73 12 L82 15 L88 8 L93 13 L87 20 L94 28 L100 25 L100 35 L90 38 L90 48 L100 50 L98 60 L88 58 L82 65 L90 72 L85 78 L75 72 L68 80 L72 90 L62 92 L58 82 L48 82 L45 92 L35 90 L38 80 L30 75 L20 80 L15 75 L22 65 L15 58 L5 62 L0 55 L10 50 L10 40 L0 38 L2 28 L12 30 L18 20 L10 12 L15 8 L25 15 L32 5 L30 -5 Z M50 35 A15 15 0 1 0 50 65 A15 15 0 1 0 50 35 Z"></path>
</svg>
</div>

<nav className="sticky bg-[#1c1917]/95 w-full z-50 border-[#5c4033] border-b-2 top-0 shadow-2xl backdrop-blur-md">
<div className="w-full h-1 bg-gradient-to-r from-[#78350f] via-[#c2a178] to-[#78350f]"></div>
<div className="flex max-w-7xl mx-auto px-6 py-4 items-center justify-between relative">
<a className="relative block w-auto max-h-12 md:max-h-16 aspect-video group transition-transform hover:scale-105" href="/">
<img alt="Дирижабль Лого" className="w-full h-full object-contain drop-shadow-md" src="https://i.ibb.co/mmsKTvx/logo2.png"/>
</a>
<div className="hidden md:flex items-center gap-8 text-base lg:text-lg font-victorian tracking-widest text-[#a8a29e] absolute left-1/2 -translate-x-1/2">
<a className="hover:text-[#c2a178] transition-colors hover:shadow-[0_2px_0_#8b5a2b] pb-1" href="#services">
            Розваги
          </a>
<a className="hover:text-[#c2a178] transition-colors hover:shadow-[0_2px_0_#8b5a2b] pb-1" href="#pricing">
            Тарифи
          </a>
<a className="hover:text-[#c2a178] transition-colors hover:shadow-[0_2px_0_#8b5a2b] pb-1" href="#gallery">
            Галерея
          </a>
</div>
<div className="hidden lg:flex items-center gap-6">
<div className="flex flex-col items-end text-xs text-[#a8a29e] font-serif italic border-r pr-4 border-[#44403c]">
<a className="flex items-center gap-2 hover:text-[#8b5a2b] transition-colors" href="tel:+380962671412">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
              +380 96 267 1412
            </a>
<span className="flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
              пр. Соборний, 145в
            </span>
</div>
<button className="relative group overflow-hidden bg-gradient-to-b from-[#6b4423] to-[#78350f] text-[#fef3c7] px-6 py-2.5 rounded-sm font-victorian font-bold tracking-wider uppercase border border-[#c2a178] shadow-[0_0_10px_rgba(139,90,43,0.3)] transition-all hover:shadow-[0_0_20px_rgba(139,90,43,0.6)] hover:scale-105 js-open-modal" type="button">
<span className="relative z-10 flex items-center gap-2">
              Квиток
              <iconify-icon icon="solar:ticket-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
</button>
</div>
<button className="md:hidden flex items-center justify-center text-[#8b5a2b] p-2 border border-[#8b5a2b] rounded bg-[#292524]" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
<div className="md:hidden absolute top-full left-0 w-full bg-[#1c1917] border-b-2 border-[#8b5a2b] shadow-2xl overflow-hidden transition-all duration-300 max-h-0 opacity-0 z-40" id="mobile-menu">
<div className="flex flex-col items-center py-8 space-y-6 relative border-t border-[#8b5a2b]/50">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
<a className="relative z-10 text-xl font-victorian text-[#e8dcc5] hover:text-[#c2a178] tracking-[0.2em] uppercase transition-colors hover:scale-105 js-mobile-link" href="#services">
            Розваги
          </a>
<a className="relative z-10 text-xl font-victorian text-[#e8dcc5] hover:text-[#c2a178] tracking-[0.2em] uppercase transition-colors hover:scale-105 js-mobile-link" href="#pricing">
            Тарифи
          </a>
<a className="relative z-10 text-xl font-victorian text-[#e8dcc5] hover:text-[#c2a178] tracking-[0.2em] uppercase transition-colors hover:scale-105 js-mobile-link" href="#gallery">
            Галерея
          </a>
<div className="w-12 h-0.5 bg-[#8b5a2b] relative z-10"></div>
<div className="flex flex-col items-center gap-2 relative z-10">
<a className="flex items-center gap-2 text-[#a8a29e] hover:text-[#8b5a2b] transition-colors font-serif" href="tel:+380962671412">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
              +380 96 267 1412
            </a>
</div>
<button className="relative z-10 px-8 py-3 bg-gradient-to-b from-[#6b4423] to-[#78350f] text-[#fef3c7] font-victorian font-bold tracking-wider uppercase border border-[#c2a178] shadow-[0_0_10px_rgba(139,90,43,0.3)] js-open-modal js-mobile-link active:scale-95 transition-transform" type="button">
<span className="flex items-center gap-2">
              Квиток
              <iconify-icon icon="solar:ticket-linear"></iconify-icon>
</span>
</button>
</div>
</div>
</nav>
<main className="z-10 relative">

<section className="min-h-screen flex flex-col overflow-hidden pt-24 pb-32 relative items-center justify-center">
<div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
<img alt="Old Map" className="sepia w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e595044d-a87d-43ca-8a8a-f8bd67ad8371_3840w.png?w=800&amp;q=80"/>
</div>
<div className="flex flex-col z-10 w-full max-w-7xl mx-auto px-6 relative">
<div className="flex flex-col items-center justify-center w-full z-10">
<div className="flex flex-col space-y-8 items-center relative text-center max-w-4xl mx-auto">
<div className="inline-block text-sm text-[#8b5a2b] tracking-[0.2em] font-victorian bg-[#292524]/80 border-[#8b5a2b] border pt-2 pr-4 pb-2 pl-4 shadow-[0_0_15px_rgba(139,90,43,0.2)]">
                EST. 2015 • ZAPORIZHZHIA
              </div>
<h1 className="text-5xl md:text-7xl font-steampunk text-[#e8dcc5] leading-[1.1] drop-shadow-2xl">
                Тайм-кафе
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8b5a2b] via-[#c2a178] to-[#8b5a2b]">
                  Дирижабль
                </span>
</h1>
<p className="md:text-xl leading-relaxed text-lg text-[#a8a29e] font-serif max-w-2xl">
                Сплачуй лише за час польоту. Ігри, кінозона, кава та солодощі
                вже включені у вартість перебування.
              </p>
<div className="flex flex-wrap gap-4 pt-4 justify-center">
<button className="group relative px-8 py-4 bg-[#78350f] text-[#c2a178] font-victorian font-bold uppercase tracking-widest border-2 border-[#6b4423] shadow-[4px_4px_0_#451a03] active:translate-y-1 active:shadow-none transition-all js-open-modal" type="button">
<div className="rivet rivet-tl"></div>
<div className="rivet rivet-tr"></div>
<div className="rivet rivet-bl"></div>
<div className="rivet rivet-br"></div>
<span className="z-10 flex items-center gap-2 group-hover:text-white relative">
                    Забронювати
                  </span>
</button>
<a className="hover:border-[#8b5a2b] hover:text-[#8b5a2b] transition-all flex items-center gap-2 text-[#a8a29e] font-victorian bg-transparent border-[#57534e] border pt-4 pr-8 pb-4 pl-8" href="#pricing">
                  Прейскурант
                  <iconify-icon icon="solar:tag-price-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-8 bg-[#e8dcc5]" style={{clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)'}}></div>
</section>

<section className="py-24 relative bg-texture-paper text-[#292524]" id="services">
<div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-black/20 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 relative">
<iconify-icon className="text-4xl text-[#6b4423] mb-2 opacity-80" icon="game-icons:steam-blast"></iconify-icon>
<h2 className="md:text-5xl text-4xl text-[#292524] font-steampunk mb-4 drop-shadow-sm">
              Бортове обладнання
            </h2>
<div className="w-24 h-1 bg-[#6b4423] mx-auto rounded-full mb-4"></div>
<p className="text-[#5c4033] max-w-lg mx-auto font-serif italic text-lg">
              Все необхідне для комфортного польоту
            </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="group relative bg-[#f5f5f4] p-6 border-2 border-[#a8a29e] hover:border-[#6b4423] transition-all duration-300 hover:-translate-y-1 shadow-[4px_4px_0_#d6d3d1] hover:shadow-[4px_4px_0_#6b4423]">
<div className="w-14 h-14 rounded-full bg-[#292524] border-2 border-[#8b5a2b] flex items-center justify-center mb-4 text-[#c2a178] group-hover:rotate-12 transition-transform shadow-inner">
<iconify-icon icon="solar:gamepad-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-victorian font-bold mb-2 uppercase tracking-wide">
                PlayStation 4
              </h3>
<p className="text-sm text-[#57534e] leading-snug">
                Телевізори 50" та купа ігор для PS (MK X, FIFA)
              </p>
</div>
<div className="group relative bg-[#f5f5f4] p-6 border-2 border-[#a8a29e] hover:border-[#6b4423] transition-all duration-300 hover:-translate-y-1 shadow-[4px_4px_0_#d6d3d1] hover:shadow-[4px_4px_0_#6b4423]">
<div className="w-14 h-14 rounded-full bg-[#292524] border-2 border-[#8b5a2b] flex items-center justify-center mb-4 text-[#c2a178] group-hover:rotate-12 transition-transform shadow-inner">
<iconify-icon icon="lucide:dices" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-victorian font-bold mb-2 uppercase tracking-wide">
                Настільні ігри
              </h3>
<p className="text-sm text-[#57534e] leading-snug">
                Більш ніж 70 ігор для будь-якої компанії
              </p>
</div>
<div className="group relative bg-[#f5f5f4] p-6 border-2 border-[#a8a29e] hover:border-[#6b4423] transition-all duration-300 hover:-translate-y-1 shadow-[4px_4px_0_#d6d3d1] hover:shadow-[4px_4px_0_#6b4423]">
<div className="w-14 h-14 rounded-full bg-[#292524] border-2 border-[#8b5a2b] flex items-center justify-center mb-4 text-[#c2a178] group-hover:rotate-12 transition-transform shadow-inner">
<iconify-icon icon="solar:videocamera-record-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-victorian font-bold mb-2 uppercase tracking-wide">
                Кінозала
              </h3>
<p className="text-sm text-[#57534e] leading-snug">
                Приватна кімната з проектором для перегляду стрічок
              </p>
</div>
<div className="group relative bg-[#f5f5f4] p-6 border-2 border-[#a8a29e] hover:border-[#6b4423] transition-all duration-300 hover:-translate-y-1 shadow-[4px_4px_0_#d6d3d1] hover:shadow-[4px_4px_0_#6b4423]">
<div className="w-14 h-14 rounded-full bg-[#292524] border-2 border-[#8b5a2b] flex items-center justify-center mb-4 text-[#c2a178] group-hover:rotate-12 transition-transform shadow-inner">
<iconify-icon icon="solar:football-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-victorian font-bold mb-2 uppercase tracking-wide">
                Кікер
              </h3>
<p className="text-sm text-[#57534e] leading-snug">
                Настільний футбол для змагань
              </p>
</div>
<div className="group relative bg-[#f5f5f4] p-6 border-2 border-[#a8a29e] hover:border-[#6b4423] transition-all duration-300 hover:-translate-y-1 shadow-[4px_4px_0_#d6d3d1] hover:shadow-[4px_4px_0_#6b4423]">
<div className="w-14 h-14 rounded-full bg-[#292524] border-2 border-[#8b5a2b] flex items-center justify-center mb-4 text-[#c2a178] group-hover:rotate-12 transition-transform shadow-inner">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-victorian font-bold mb-2 uppercase tracking-wide">
                Коворкінг
              </h3>
<p className="text-sm text-[#57534e] leading-snug">
                Зручні умови під час відключень
              </p>
</div>
<div className="group relative bg-[#f5f5f4] p-6 border-2 border-[#a8a29e] hover:border-[#6b4423] transition-all duration-300 hover:-translate-y-1 shadow-[4px_4px_0_#d6d3d1] hover:shadow-[4px_4px_0_#6b4423]">
<div className="w-14 h-14 rounded-full bg-[#292524] border-2 border-[#8b5a2b] flex items-center justify-center mb-4 text-[#c2a178] group-hover:rotate-12 transition-transform shadow-inner">
<iconify-icon icon="solar:book-bookmark-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-victorian font-bold mb-2 uppercase tracking-wide">
                Бібліотека
              </h3>
<p className="text-sm text-[#57534e] leading-snug">
                Колекція паперових видань у тихій зоні
              </p>
</div>
<div className="group relative bg-[#f5f5f4] p-6 border-2 border-[#a8a29e] hover:border-[#6b4423] transition-all duration-300 hover:-translate-y-1 shadow-[4px_4px_0_#d6d3d1] hover:shadow-[4px_4px_0_#6b4423]">
<div className="w-14 h-14 rounded-full bg-[#292524] border-2 border-[#8b5a2b] flex items-center justify-center mb-4 text-[#c2a178] group-hover:rotate-12 transition-transform shadow-inner">
<iconify-icon icon="solar:confetti-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-victorian font-bold mb-2 uppercase tracking-wide">
                Бенкети
              </h3>
<p className="text-sm text-[#57534e] leading-snug">
                Можна відсвяткувати День народження, корпоратив, тощо
              </p>
</div>
<div className="group relative bg-[#f5f5f4] p-6 border-2 border-[#a8a29e] hover:border-[#6b4423] transition-all duration-300 hover:-translate-y-1 shadow-[4px_4px_0_#d6d3d1] hover:shadow-[4px_4px_0_#6b4423]">
<div className="w-14 h-14 rounded-full bg-[#292524] border-2 border-[#8b5a2b] flex items-center justify-center mb-4 text-[#c2a178] group-hover:rotate-12 transition-transform shadow-inner">
<iconify-icon icon="solar:tea-cup-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-victorian font-bold mb-2 uppercase tracking-wide">
                Безліміт
              </h3>
<p className="text-sm text-[#57534e] leading-snug">
                Гарячі напої та ласощі без обмежень
              </p>
</div>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden bg-[#292524] border-y-4 border-[#44403c]">
<div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="md:w-1/2">
<h2 className="text-4xl md:text-5xl font-steampunk text-[#c2a178] mb-6 drop-shadow-lg">
              У вартість квитка
              <br/>
<span className="text-[#8b5a2b] font-victorian text-3xl md:text-4xl">
                включено все
              </span>
</h2>
<div className="w-full h-px bg-gradient-to-r from-[#8b5a2b] to-transparent mb-8"></div>
<ul className="space-y-4 text-[#d6d3d1]">
<li className="flex items-center gap-4 group">
<div className="w-8 h-8 rounded-full border border-[#8b5a2b] flex items-center justify-center text-[#8b5a2b] group-hover:bg-[#8b5a2b] group-hover:text-[#292524] transition-colors">
<iconify-icon icon="mdi:coffee"></iconify-icon>
</div>
<span className="font-serif text-lg">
                  Кава (еспресо, американо) та колекція чаю
                </span>
</li>
<li className="flex items-center gap-4 group">
<div className="w-8 h-8 rounded-full border border-[#8b5a2b] flex items-center justify-center text-[#8b5a2b] group-hover:bg-[#8b5a2b] group-hover:text-[#292524] transition-colors">
<iconify-icon icon="mingcute:candy-fill"></iconify-icon>
</div>
<span className="font-serif text-lg">
                  Печиво, цукерки та сиропи
                </span>
</li>
<li className="flex items-center gap-4 group">
<div className="w-8 h-8 rounded-full border border-[#8b5a2b] flex items-center justify-center text-[#8b5a2b] group-hover:bg-[#8b5a2b] group-hover:text-[#292524] transition-colors">
<iconify-icon icon="typcn:wi-fi"></iconify-icon>
</div>
<span className="font-serif text-lg">
                  Швидкісний радіозв'язок (Wi-Fi)
                </span>
</li>
</ul>
</div>
<div className="md:w-1/3 relative group">
<div className="absolute -inset-2 bg-[#78350f] rounded-lg rotate-3 blur-sm"></div>
<div className="relative bg-gradient-to-br from-[#c2a178] to-[#6b4423] p-1 rounded-lg shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
<div className="bg-[#292524] p-8 rounded border border-[#c2a178] flex flex-col items-center text-center">
<div className="rivet rivet-tl"></div>
<div className="rivet rivet-tr"></div>
<div className="rivet rivet-bl"></div>
<div className="rivet rivet-br"></div>
<iconify-icon className="text-6xl text-[#8b5a2b] mb-4" icon="material-symbols:android-wifi-3-bar-lock-rounded"></iconify-icon>
<h3 className="text-xl text-[#e8dcc5] font-victorian mb-2 tracking-widest">
                  ПАРОЛЬ ДО МЕРЕЖІ
                </h3>
<div className="h-px w-20 bg-[#57534e] mb-4"></div>
<p className="font-steampunk text-3xl tracking-widest text-[#c2a178] blur-[4px] group-hover:blur-0 transition-all duration-700 cursor-help select-none">
                  privetik
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-[#1a1614] overflow-hidden" id="pricing">
<iconify-icon className="absolute top-10 left-10 text-[20rem] text-[#292524] opacity-50 gear-spin" icon="ph:gear-six"></iconify-icon>
<iconify-icon className="absolute bottom-10 right-10 text-[15rem] text-[#292524] opacity-50 gear-spin-rev" icon="ph:gear-six"></iconify-icon>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl text-[#e8dcc5] mb-4 font-steampunk">
              Тарифи
            </h2>
<p className="text-[#a8a29e] font-serif italic">
              У нас ви сплачуєте лише за час
            </p>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="relative filter drop-shadow-xl transform hover:-translate-y-2 transition-transform">
<div className="bg-[#e8dcc5] p-8 text-[#292524] relative overflow-hidden rounded-sm">
<div className="absolute top-0 left-0 w-full h-2 bg-[url('https://www.transparenttextures.com/patterns/rough-cloth.png')] opacity-20"></div>
<h3 className="font-steampunk text-2xl mb-2 text-center border-b-2 border-[#a8a29e] border-dashed pb-4">
                  Погодинно
                </h3>
<p className="text-xs text-center font-serif italic mb-6 text-[#57534e]">
                  Стандартний квиток
                </p>
<div className="space-y-4 font-serif">
<div className="flex justify-between items-end border-b border-[#d6d3d1] pb-1">
<span>Перші 3 години</span>
<span className="font-bold text-lg">
                      65 ₴
                      <small className="font-normal text-xs">/год</small>
</span>
</div>
<div className="flex justify-between items-end border-b border-[#d6d3d1] pb-1">
<span>Наступні години</span>
<span className="font-bold text-lg">
                      35 ₴
                      <small className="font-normal text-xs">/год</small>
</span>
</div>
<div className="bg-[#d6d3d1]/30 p-3 rounded mt-4 border border-[#a8a29e] text-sm">
<div className="flex justify-between mb-1">
<span>Мін. внесок:</span>
<span className="font-bold">50 ₴</span>
</div>
<div className="flex justify-between text-[#78350f]">
<span>Стоп-чек (max):</span>
<span className="font-bold">300-400 ₴</span>
</div>
</div>
</div>
</div>
<div className="h-4 w-full bg-[#e8dcc5]" style={{clipPath: 'polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0)'}}></div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-[#6b4423] rounded blur opacity-20"></div>
<div className="bg-gradient-to-br from-[#44403c] to-[#1c1917] text-[#e8dcc5] p-1 rounded-lg border border-[#6b4423]">
<div className="border border-[#78350f] p-8 rounded relative" style={{backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/dark-leather.png\')'}}>
<div className="rivet rivet-tl"></div>
<div className="rivet rivet-tr"></div>
<div className="rivet rivet-bl"></div>
<div className="rivet rivet-br"></div>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8b5a2b] text-[#292524] text-xs font-bold px-4 py-1 uppercase rounded-sm border border-[#c2a178] shadow">
                    Капітанський вибір
                  </div>
<h3 className="font-steampunk text-2xl mb-1 text-center text-[#c2a178] mt-2">
                    Оренда Залу
                  </h3>
<p className="text-xs text-center font-victorian text-[#a8a29e] mb-6 tracking-widest">
                    Приватні вечірки
                  </p>
<div className="space-y-6 text-sm">
<div className="bg-[#000000]/30 p-3 rounded border border-[#5c4033]">
<h4 className="text-[#8b5a2b] font-bold mb-2 uppercase text-xs tracking-wider">
                        Весь корабель (40 осіб)
                      </h4>
<div className="flex justify-between mb-1 text-[#d6d3d1]">
<span>Пн-Чт</span>
<span>1000 ₴/год</span>
</div>
<div className="flex justify-between mb-1 text-[#d6d3d1]">
<span>П'ятниця</span>
<span>1500 ₴/год</span>
</div>
<div className="flex justify-between font-bold text-[#c2a178]">
<span>Сб-Нд</span>
<span>2000 ₴/год</span>
</div>
</div>
<div className="bg-[#000000]/30 p-3 rounded border border-[#5c4033]">
<h4 className="text-[#8b5a2b] font-bold mb-2 uppercase text-xs tracking-wider">
                        Мала каюта (25 осіб)
                      </h4>
<div className="flex justify-between mb-1 text-[#d6d3d1]">
<span>Пн-Чт</span>
<span>400 ₴/год</span>
</div>
<div className="flex justify-between mb-1 text-[#d6d3d1]">
<span>П'ятниця</span>
<span>500 ₴/год</span>
</div>
<div className="flex justify-between font-bold text-[#c2a178]">
<span>Сб-Нд</span>
<span>600 ₴/год</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#5c2e0e] p-1 rounded-r-lg rounded-l-lg shadow-2xl relative transform hover:-translate-y-2 transition-transform border-l-4 border-l-[#292524] self-start">
<div className="bg-[#78350f] p-6 rounded-r border-t border-b border-r border-[#92400e] relative text-[#c2a178] flex flex-col justify-center">
<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/black-leather.png\')'}}></div>
<h3 className="font-steampunk text-2xl mb-2 relative z-10 text-center">
                  Абонементи
                </h3>
<p className="text-xs text-center font-victorian text-[#d6d3d1] mb-4 relative z-10">
                  Для почесних членів клубу
                </p>
<div className="space-y-2 relative z-10">
<div className="border-2 border-[#6b4423] p-2 rounded bg-[#451a03]/50 hover:bg-[#451a03] transition-colors cursor-pointer group">
<div className="flex justify-between items-center mb-0.5">
<span className="font-victorian font-bold text-base">
                        10 Днів
                      </span>
<iconify-icon className="text-xl text-[#8b5a2b] group-hover:scale-110 transition-transform" icon="solar:ticket-linear"></iconify-icon>
</div>
<div className="text-xl font-steampunk text-white">1500 ₴</div>
<p className="text-[10px] text-[#a8a29e] uppercase mt-0.5">
                      Безстроковий термін
                    </p>
</div>
<div className="border-2 border-[#6b4423] p-2 rounded bg-[#451a03]/50 hover:bg-[#451a03] transition-colors cursor-pointer group">
<div className="flex justify-between items-center mb-0.5">
<span className="font-victorian font-bold text-base">
                        Місяць
                      </span>
<iconify-icon className="text-xl text-[#8b5a2b] group-hover:scale-110 transition-transform" icon="solar:calendar-linear"></iconify-icon>
</div>
<div className="text-xl font-steampunk text-white">3000 ₴</div>
<p className="text-[10px] text-[#a8a29e] uppercase mt-0.5">
                      30 днів з активації
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1a1614] overflow-hidden relative border-t border-[#44403c]" id="gallery">

<div className="absolute top-0 w-full h-8 bg-[url('https://www.transparenttextures.com/patterns/dashed-line.png')] opacity-30"></div>
<div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between md:items-end gap-6">
<h2 className="text-4xl md:text-5xl text-[#e8dcc5] font-steampunk">
            Фотохроніка
          </h2>
<a className="group relative inline-flex items-center gap-3 px-6 py-3 bg-[#1c1917] border border-[#8b5a2b] text-[#c2a178] font-victorian text-sm font-bold tracking-widest uppercase transition-all shadow-[4px_4px_0_#5c4033] hover:shadow-none hover:translate-y-1 hover:bg-[#292524]" href="https://instagram.com/dirigeable.zp" target="_blank">
<iconify-icon icon="skill-icons:instagram" width="20"></iconify-icon>
<span>Instagram</span>
</a>
</div>

<div className="relative py-8 bg-[#0a0a0a] border-y-8 border-[#292524] shadow-2xl">
<div className="absolute top-2 left-0 w-full h-4 bg-[repeating-linear-gradient(90deg,transparent,transparent_15px,#222_15px,#222_25px)] opacity-50 z-10"></div>
<div className="flex gap-4 md:gap-8 overflow-x-auto px-8 py-4 snap-x snap-mandatory scroll-smooth h-[350px] md:h-[450px] items-center" id="gallery-scroll-container">
<div className="gallery-item w-auto snap-center shrink-0 h-full cursor-pointer transition-transform hover:scale-[1.02]" data-caption="Манчкін — ідеальний вибір для веселої компанії" data-src="https://i.ibb.co/FqKLFxR2/DSC-4559.jpg">
<div className="border-4 border-[#5c4033] bg-[#1c1917] p-2 shadow-lg h-full relative group">
<img className="h-full w-auto object-contain filter grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500" src="https://i.ibb.co/FqKLFxR2/DSC-4559.jpg"/>
<div className="absolute inset-0 bg-[#8b5a2b]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
</div>
<div className="gallery-item w-auto snap-center shrink-0 h-full cursor-pointer transition-transform hover:scale-[1.02]" data-caption="Зона PlayStation: зручні пуфи та великий екран" data-src="https://i.ibb.co/MxT0j35d/DSC-5394.jpg">
<div className="border-4 border-[#5c4033] bg-[#1c1917] p-2 shadow-lg h-full relative group">
<img className="h-full w-auto object-contain filter grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500" src="https://i.ibb.co/MxT0j35d/DSC-5394.jpg"/>
</div>
</div>
<div className="gallery-item w-auto snap-center shrink-0 h-full cursor-pointer transition-transform hover:scale-[1.02]" data-caption="Стімпанк атмосфера: механізми та дирижаблі" data-src="https://i.ibb.co/PZsf2FNR/ZF32-XZHIDSC-4310-jpg.jpg">
<div className="border-4 border-[#5c4033] bg-[#1c1917] p-2 shadow-lg h-full relative group">
<img className="h-full w-auto object-contain filter grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500" src="https://i.ibb.co/PZsf2FNR/ZF32-XZHIDSC-4310-jpg.jpg"/>
</div>
</div>
<div className="gallery-item w-auto snap-center shrink-0 h-full cursor-pointer transition-transform hover:scale-[1.02]" data-caption="Кікер — класика для активного відпочинку" data-src="https://i.ibb.co/Jj7m05z3/HCLURBPPDSC-8032-jpg.jpg">
<div className="border-4 border-[#5c4033] bg-[#1c1917] p-2 shadow-lg h-full relative group">
<img className="h-full w-auto object-contain filter grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500" src="https://i.ibb.co/Jj7m05z3/HCLURBPPDSC-8032-jpg.jpg"/>
</div>
</div>
<div className="gallery-item w-auto snap-center shrink-0 h-full cursor-pointer transition-transform hover:scale-[1.02]" data-caption="Затишні вечори за настільними іграми" data-src="https://i.ibb.co/My37m0sy/DSC-4574.jpg">
<div className="border-4 border-[#5c4033] bg-[#1c1917] p-2 shadow-lg h-full relative group">
<img className="h-full w-auto object-contain filter grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500" src="https://i.ibb.co/My37m0sy/DSC-4574.jpg"/>
</div>
</div>
<div className="gallery-item w-auto snap-center shrink-0 h-full cursor-pointer transition-transform hover:scale-[1.02]" data-caption="Кава-поінт: чай, кава та печиво безліміт" data-src="https://i.ibb.co/SC04vd2/Z7-Q4-GLKGDSC-8054-jpg.jpg">
<div className="border-4 border-[#5c4033] bg-[#1c1917] p-2 shadow-lg h-full relative group">
<img className="h-full w-auto object-contain filter grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500" src="https://i.ibb.co/SC04vd2/Z7-Q4-GLKGDSC-8054-jpg.jpg"/>
</div>
</div>
<div className="gallery-item w-auto snap-center shrink-0 h-full cursor-pointer transition-transform hover:scale-[1.02]" data-caption="Простір для великих компаній та турнірів" data-src="https://i.ibb.co/GQjWqx9g/DSC-4565-1.jpg">
<div className="border-4 border-[#5c4033] bg-[#1c1917] p-2 shadow-lg h-full relative group">
<img className="h-full w-auto object-contain filter grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500" src="https://i.ibb.co/GQjWqx9g/DSC-4565-1.jpg"/>
</div>
</div>
</div>
<button className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#1c1917]/90 text-[#c2a178] p-4 border-r-2 border-[#8b5a2b] hover:bg-[#292524] z-20 hidden md:block" id="scroll-left-btn">
<iconify-icon icon="solar:alt-arrow-left-linear" width="30"></iconify-icon>
</button>
<button className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#1c1917]/90 text-[#c2a178] p-4 border-l-2 border-[#8b5a2b] hover:bg-[#292524] z-20 hidden md:block" id="scroll-right-btn">
<iconify-icon icon="solar:alt-arrow-right-linear" width="30"></iconify-icon>
</button>
<div className="absolute bottom-2 left-0 w-full h-4 bg-[repeating-linear-gradient(90deg,transparent,transparent_15px,#222_15px,#222_25px)] opacity-50 z-10"></div>
</div>
<div className="flex justify-center mt-12">
<button className="group relative px-10 py-4 bg-[#1c1917] text-[#c2a178] font-victorian font-bold tracking-widest uppercase border border-[#8b5a2b] shadow-[4px_4px_0_#5c4033] hover:translate-y-1 hover:shadow-none hover:bg-[#292524] transition-all" id="open-grid-btn">
<span className="relative z-10 flex items-center gap-3">
<iconify-icon icon="solar:gallery-wide-linear" width="24"></iconify-icon>
              Всі фото
            </span>
</button>
</div>
</section>

<section className="py-24 bg-texture-paper relative" id="contact">
<div className="absolute top-0 left-0 w-full h-1 bg-[#6b4423]"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 text-[#292524]">
<div>
<h2 className="text-4xl md:text-5xl mb-8 font-steampunk text-[#292524]">
              Координати
            </h2>
<div className="space-y-8 mb-8">
<div className="flex gap-4 items-start">
<div className="text-[#8b5a2b] text-3xl mt-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h3 className="font-victorian font-bold text-lg">Локація</h3>
<p className="font-serif">пр. Соборний, 145в, Запоріжжя</p>
<p className="text-sm text-[#78350f] italic">
                    орієнтир: Універмаг "Україна"
                  </p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="text-[#8b5a2b] text-3xl mt-1">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<h3 className="font-victorian font-bold text-lg">Зв'язок</h3>
<a className="text-xl font-serif hover:text-[#8b5a2b] transition-colors font-bold block" href="tel:+380962671412">
                    +380 96 267 1412
                  </a>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="text-[#8b5a2b] text-3xl mt-1">
<iconify-icon icon="solar:chat-round-linear"></iconify-icon>
</div>
<div>
<h3 className="font-victorian font-bold text-lg">Соц. мережі</h3>
<div className="flex gap-4 mt-1">
<a className="flex items-center gap-1 hover:text-[#8b5a2b] font-serif font-bold text-[#5c4033]" href="#">
<iconify-icon icon="mingcute:telegram-line"></iconify-icon>
                      Telegram
                    </a>
<a className="flex items-center gap-1 hover:text-[#8b5a2b] font-serif font-bold text-[#5c4033]" href="#">
<iconify-icon icon="mdi:instagram"></iconify-icon>
                      Instagram
                    </a>
<a className="flex items-center gap-1 hover:text-[#8b5a2b] font-serif font-bold text-[#5c4033]" href="https://www.tiktok.com/@dirigeable.zp?_r=1&amp;_t=ZS-93hXZgsmkUh" target="_blank">
<iconify-icon icon="ic:baseline-tiktok"></iconify-icon>
                      TikTok
                    </a>
</div>
</div>
</div>
</div>
<button className="inline-block bg-[#292524] text-[#c2a178] px-10 py-4 font-victorian font-bold tracking-widest border border-[#8b5a2b] shadow-[4px_4px_0_#8b5a2b] hover:translate-y-1 hover:shadow-none transition-all js-open-modal" type="button">
              ВИКЛИКАТИ ЕКІПАЖ
            </button>
</div>
<div className="bg-[#292524] p-4 border-4 border-[#6b4423] shadow-2xl relative">
<div className="rivet rivet-tl"></div>
<div className="rivet rivet-tr"></div>
<div className="rivet rivet-bl"></div>
<div className="rivet rivet-br"></div>
<iframe allowfullscreen="" height="400" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2678.026723237562!2d35.1360000!3d47.8388000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc673dfa85bb03%3A0x7e87b7a4d2a0c6a5!2sSobornyi%20Ave%2C%20145%D0%92%2C%20Zaporizhzhia%2C%20Zaporizhia%20Oblast%2C%20Ukraine%2C%2069000!5e0!3m2!1sen!2sua!4v1700000000000!5m2!1sen!2sua" width="100%"></iframe>
</div>
</div>
</section>
</main>

<footer className="bg-[#0c0a09] text-[#a8a29e] py-16 border-t-4 border-[#5c4033] relative">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#78350f] via-[#6b4423] to-[#78350f]"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
<div>
<img alt="Дирижабль" className="w-32 h-auto mb-4 object-contain opacity-90 drop-shadow-md" src="https://i.ibb.co/mmsKTvx/logo2.png"/>
<p className="font-serif text-sm opacity-80 leading-relaxed max-w-xs">
            Чекаємо вас на борту!
          </p>
</div>
<div>
<h4 className="font-victorian text-[#c2a178] tracking-widest mb-4 border-b border-[#44403c] pb-2 inline-block">
            Розклад роботи
          </h4>
<ul className="font-mono text-sm space-y-2">
<li className="flex justify-between max-w-[200px] text-[#e8dcc5]">
<span>ПН - НД</span>
<span>12:00 - 22:00</span>
</li>
</ul>
</div>
<div>
<h4 className="font-victorian text-[#c2a178] tracking-widest mb-4 border-b border-[#44403c] pb-2 inline-block">
            Навігація
          </h4>
<ul className="font-serif text-sm space-y-2">
<li>
<a className="hover:text-[#8b5a2b] transition-colors" href="#services">
                &gt;&gt; Розваги
              </a>
</li>
<li>
<a className="hover:text-[#8b5a2b] transition-colors" href="#pricing">
                &gt;&gt; Тарифи
              </a>
</li>
<li>
<a className="hover:text-[#8b5a2b] transition-colors" href="#contact">
                &gt;&gt; Контакти
              </a>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-[#292524] text-center md:text-left text-xs font-mono text-[#57534e]">
        ©
        <span id="currentYear"></span>
        Anticafe Dirigeable. All systems nominal.
      </div>
</footer>


<div className="fixed inset-0 z-[100] hidden opacity-0 transition-opacity duration-300" id="booking-modal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm js-close-modal"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6 transform scale-95 transition-transform duration-300">
<div className="relative bg-[#1c1917] border-2 border-[#6b4423] shadow-[0_0_50px_rgba(139,90,43,0.3)]">
<div className="rivet rivet-tl"></div>
<div className="rivet rivet-tr"></div>
<div className="rivet rivet-bl"></div>
<div className="rivet rivet-br"></div>
<div className="bg-[#292524] p-4 border-b border-[#5c4033] flex justify-between items-center">
<h3 className="font-steampunk text-xl text-[#c2a178]">
              Бронювання екіпажу
            </h3>
<button className="text-[#8b5a2b] hover:text-[#e8dcc5] transition-colors js-close-modal">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-6 flex flex-col gap-5 text-center">
<p className="text-[#a8a29e] font-serif text-sm leading-relaxed">
              Оберіть зручний канал зв'язку.
              <br/>
              Для бронювання рекомендуємо Instagram.
            </p>
<a className="relative w-full group overflow-hidden bg-gradient-to-b from-[#6b4423] to-[#78350f] text-[#fef3c7] p-4 rounded-sm font-victorian font-bold tracking-wider uppercase border border-[#c2a178] shadow-[0_0_15px_rgba(139,90,43,0.3)] hover:shadow-[0_0_25px_rgba(139,90,43,0.5)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3" href="https://instagram.com/dirigeable.zp" target="_blank">
<iconify-icon className="text-2xl" icon="skill-icons:instagram"></iconify-icon>
<span className="mt-0.5">Бронювання (Instagram)</span>
</a>
<div className="grid gap-3 relative">
<button className="w-full bg-[#0c0a09] border border-[#5c4033] p-3 rounded flex items-center justify-between hover:border-[#c2a178] hover:bg-[#1c1917] transition-all group" onclick="navigator.clipboard.writeText('+380962671412'); const msg = this.nextElementSibling; msg.classList.remove('opacity-0', 'translate-y-2'); setTimeout(() =&gt; msg.classList.add('opacity-0', 'translate-y-2'), 2000);">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#292524] flex items-center justify-center text-[#8b5a2b] border border-[#44403c]">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div className="flex flex-col items-start">
<span className="text-[10px] text-[#57534e] uppercase tracking-wider font-bold">
                      Телефон
                    </span>
<span className="text-[#e8dcc5] font-serif tracking-wide text-sm">
                      +380 96 267 1412
                    </span>
</div>
</div>
<iconify-icon className="text-base text-[#57534e] group-hover:text-[#c2a178] transition-colors" icon="solar:copy-linear"></iconify-icon>
</button>
<span className="absolute top-0 right-0 -mt-8 mr-2 bg-[#8b5a2b] text-[#fef3c7] text-xs font-bold px-2 py-1 rounded shadow-lg opacity-0 translate-y-2 transition-all duration-300 pointer-events-none z-50">
                Скопійовано!
              </span>
<a className="w-full bg-[#0c0a09] border border-[#5c4033] p-3 rounded flex items-center justify-between hover:border-[#c2a178] hover:bg-[#1c1917] transition-all group" href="https://t.me/diregableZP" target="_blank">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#292524] flex items-center justify-center text-[#8b5a2b] border border-[#44403c]">
<iconify-icon className="text-sm scale-110" icon="logos:telegram"></iconify-icon>
</div>
<div className="flex flex-col items-start">
<span className="text-[10px] text-[#57534e] uppercase tracking-wider font-bold">
                      Спільнота
                    </span>
<span className="text-[#e8dcc5] font-serif text-sm">
                      Чат гравців (Telegram)
                    </span>
</div>
</div>
<iconify-icon className="text-[#57534e] group-hover:text-[#c2a178] transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="w-full bg-[#0c0a09] border border-[#5c4033] p-3 rounded flex items-center justify-between hover:border-[#c2a178] hover:bg-[#1c1917] transition-all group" href="https://maps.app.goo.gl/PsV71kXGpTW1fHYE8" target="_blank">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#292524] flex items-center justify-center text-[#8b5a2b] border border-[#44403c]">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="flex flex-col items-start">
<span className="text-[10px] text-[#57534e] uppercase tracking-wider font-bold">
                      Локація
                    </span>
<span className="text-[#e8dcc5] font-serif text-sm">
                      пр. Соборний, 145в
                    </span>
</div>
</div>
<iconify-icon className="text-[#57534e] group-hover:text-[#c2a178] transition-colors" icon="solar:map-arrow-square-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] bg-[#1a1614]/95 backdrop-blur-md hidden opacity-0 transition-opacity duration-300 overflow-y-auto" id="gallery-grid-modal">
<div className="min-h-screen p-8 flex flex-col items-center">
<button className="absolute top-6 right-6 text-[#c2a178] hover:text-white transition-colors" id="close-grid-btn">
<iconify-icon icon="solar:close-circle-linear" width="48"></iconify-icon>
</button>
<h2 className="text-3xl text-[#c2a178] font-steampunk mb-8 mt-8">
          Архів Дирижабля
        </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full" id="grid-content"></div>
</div>
</div>

<div className="fixed inset-0 z-[70] bg-black/95 hidden opacity-0 transition-opacity duration-300 flex items-center justify-center p-4" id="lightbox-modal">
<button className="absolute top-6 right-6 text-[#c2a178] z-50 hover:scale-110 transition-transform" id="close-lightbox">
<iconify-icon icon="solar:close-circle-linear" width="48"></iconify-icon>
</button>
<button className="absolute left-4 text-[#c2a178] hover:text-white p-2 z-50" id="prev-slide">
<iconify-icon icon="solar:alt-arrow-left-linear" width="48"></iconify-icon>
</button>
<div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
<img alt="Full view" className="max-w-full max-h-[80vh] object-contain border-4 border-[#5c4033] shadow-2xl" id="lightbox-img" src=""/>
<p className="text-[#e8dcc5] font-serif text-center mt-4 text-lg bg-[#1c1917]/80 px-4 py-2 rounded border border-[#5c4033]" id="lightbox-caption"></p>
</div>
<button className="absolute right-4 text-[#c2a178] hover:text-white p-2 z-50" id="next-slide">
<iconify-icon icon="solar:alt-arrow-right-linear" width="48"></iconify-icon>
</button>
</div>


    </>
  );
}
