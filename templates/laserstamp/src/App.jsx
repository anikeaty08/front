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



          function router(pageId) {
                  document.querySelectorAll('[id^="page-"]').forEach(el => {
                      el.classList.add('hidden');
                      el.classList.remove('block');
                  });
                  const target = document.getElementById(`page-${pageId}`);
                  if (target) {
                      target.classList.remove('hidden');
                      target.classList.add('block');
                      window.scrollTo(0, 0);
                  }
                  document.querySelectorAll('.dock-item').forEach(btn => {
                      const isActive = btn.dataset.page === pageId;
                      const dot = btn.querySelector('.active-dot');
                      if (isActive) {
                          btn.classList.add('text-white');
                          btn.classList.remove('text-neutral-500');
                          if (dot) dot.classList.remove('hidden');
                      } else {
                          btn.classList.remove('text-white');
                          btn.classList.add('text-neutral-500');
                          if (dot) dot.classList.add('hidden');
                      }
                  });
                  const bcContainer = document.getElementById('breadcrumbs-container');
                  const bcCurrent = document.getElementById('breadcrumb-current');
                  if (bcContainer && bcCurrent) {
                      if (pageId === 'home') {
                          bcContainer.classList.add('opacity-0');
                          setTimeout(() => bcContainer.classList.add('hidden'), 500);
                      } else {
                          bcContainer.classList.remove('hidden');
                          void bcContainer.offsetWidth;
                          bcContainer.classList.remove('opacity-0');
                          const titles = { 'milling': 'Фрезерування', 'engraving': 'Гравіювання', 'vectorization': 'Векторизація', 'gallery': 'Галерея' };
                          bcCurrent.textContent = titles[pageId] || '';
                      }
                  }
              }

              const slider = document.getElementById('slider-block');
              const mask = document.getElementById('slider-mask');
              const knob = document.getElementById('slider-knob');
              let isDown = false;

              function updateSliderImageWidth() {
                if (slider && mask) {
                  const img = mask.querySelector('img');
                  if (img) img.style.width = slider.offsetWidth + 'px';
                }
              }

              if(slider) {
                  window.addEventListener('resize', updateSliderImageWidth);
                  // Initial sync
                  updateSliderImageWidth();

                  slider.addEventListener('mousedown', () => isDown = true);
                  slider.addEventListener('mouseup', () => isDown = false);
                  slider.addEventListener('mouseleave', () => isDown = false);
                  slider.addEventListener('mousemove', (e) => {
                      if (!isDown) return;
                      e.preventDefault();
                      moveSlider(e.clientX);
                  });
                  slider.addEventListener('touchstart', (e) => { isDown = true; }, {passive: true});
                  slider.addEventListener('touchend', () => isDown = false);
                  slider.addEventListener('touchmove', (e) => {
                      if (!isDown) return;
                      moveSlider(e.touches[0].clientX);
                  }, {passive: true});

                  function moveSlider(clientX) {
                      const rect = slider.getBoundingClientRect();
                      const x = clientX - rect.left;
                      const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100);
                      mask.style.width = `${percent}%`;
                      knob.style.left = `${percent}%`;
                  }
              }

              function toggleMobileMenu() {
                const menu = document.getElementById('mobile-menu');
                const backdrop = document.getElementById('mobile-backdrop');
                const isOpen = !menu.classList.contains('translate-x-full');
                if (isOpen) {
                  menu.classList.add('translate-x-full');
                  backdrop.classList.add('opacity-0');
                  setTimeout(() => backdrop.classList.add('hidden'), 300);
                } else {
                  backdrop.classList.remove('hidden');
                  void backdrop.offsetWidth;
                  backdrop.classList.remove('opacity-0');
                  menu.classList.remove('translate-x-full');
                }
              }
              function moveDockBg(element) {
                const bg = document.getElementById('dock-bg');
                if (!bg || !element) return;
                bg.style.opacity = '1';
                const parentRect = element.parentElement.getBoundingClientRect();
                const rect = element.getBoundingClientRect();
                const left = rect.left - parentRect.left;
                const width = rect.width;
                bg.style.width = `${width}px`;
                bg.style.transform = `translateX(${left}px)`;
              }
              function resetDockBg() {
                const bg = document.getElementById('dock-bg');
                if (bg) { bg.style.opacity = '0'; }
              }

              (function() {
                const laserGlow = document.getElementById('laser-glow');
                if (!laserGlow) return;
                let mouseX = window.innerWidth / 2;
                let mouseY = window.innerHeight / 2;
                let currentX = mouseX;
                let currentY = mouseY;
                document.addEventListener('mousemove', (e) => {
                  mouseX = e.clientX;
                  mouseY = e.clientY;
                  if (laserGlow.style.opacity !== '1') { laserGlow.style.opacity = '1'; }
                });
                function animate() {
                  const ease = 0.12;
                  currentX += (mouseX - currentX) * ease;
                  currentY += (mouseY - currentY) * ease;
                  const x = currentX - 400;
                  const y = currentY - 400;
                  laserGlow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
                  requestAnimationFrame(animate);
                }
                animate();
              })();
               function openLightbox(elementOrSrc) {
                  const lb = document.getElementById("lightbox");
                  const img = document.getElementById("lightbox-img");
                  const caption = document.getElementById("lightbox-caption");

                  let src, alt;
                  if (elementOrSrc && elementOrSrc.tagName === 'IMG') {
                     src = elementOrSrc.src;
                     alt = elementOrSrc.alt;
                  } else if (typeof elementOrSrc === 'string') {
                     src = elementOrSrc;
                     alt = '';
                  } else {
                     return;
                  }

                  img.src = src;

                  if (alt && alt.trim()) {
                      caption.textContent = alt;
                      caption.classList.remove('opacity-0', 'translate-y-4');
                  } else {
                      caption.classList.add('opacity-0', 'translate-y-4');
                  }

                  lb.classList.remove("hidden");
                  void lb.offsetWidth;
                  lb.classList.remove("opacity-0");

                  setTimeout(() => {
                       img.classList.remove("scale-95", "opacity-0");
                       img.classList.add("scale-100", "opacity-100");
                  }, 50);
              }

              function closeLightbox() {
                  const lb = document.getElementById("lightbox");
                  const img = document.getElementById("lightbox-img");
                  const caption = document.getElementById("lightbox-caption");

                  lb.classList.add("opacity-0");
                  img.classList.remove("scale-100", "opacity-100");
                  img.classList.add("scale-95", "opacity-0");
                  caption.classList.add('opacity-0', 'translate-y-4');

                  setTimeout(() => {
                    lb.classList.add("hidden");
                    img.src = "";
                  }, 300);
              }

              document.addEventListener('keydown', (e) => {
                  if(document.getElementById("lightbox").classList.contains("hidden")) return;
                  if(e.key === "Escape") closeLightbox();
              });

              (function() {
                  const images = document.querySelectorAll('main img');
                  images.forEach(img => {
                      if (img.closest('#slider-block')) return;
                      if (img.closest('footer')) return;
                      img.classList.add('cursor-zoom-in');
                      img.removeAttribute('onclick');
                      img.addEventListener('click', (e) => {
                          e.stopPropagation();
                          openLightbox(e.target);
                      });
                  });
              })();

              function updateCalculator() {
                const qtyEl = document.getElementById('qty-slider');
                const chainEl = document.getElementById('opt-chain');
                const silencerEl = document.getElementById('opt-silencer');
                if(!qtyEl || !chainEl || !silencerEl) return;

                let qty = parseInt(qtyEl.value);
                let base = 60;
                let tier = '1-10 шт';
                if(qty > 10) { base = 55; tier = '11-30 шт'; }
                if(qty > 30) { base = 50; tier = '31-99 шт'; }
                if(qty > 99) { base = 45; tier = '100+ шт'; }

                let extra = 0;
                if(chainEl.checked) extra += 40;
                if(silencerEl.checked) extra += 20;

                document.getElementById('price-display').innerText = base + ' ₴';
                document.getElementById('qty-display').innerText = qty;
                document.getElementById('tier-display').innerText = tier;

                let total = (base + extra) * qty;
                document.getElementById('total-display').innerText = total + ' ₴';
                document.getElementById('advance-display').innerText = Math.ceil(total / 2) + ' ₴';
              }
              // Initial call
              setTimeout(updateCalculator, 100);

              function openCalculator() {
                const modal = document.getElementById('calculator-modal');
                const content = document.getElementById('calculator-content');
                if(!modal || !content) return;
                modal.classList.remove('hidden');
                void modal.offsetWidth;
                modal.classList.remove('opacity-0');
                content.classList.remove('scale-95');
                content.classList.add('scale-100');
                if(typeof updateCalculator === 'function') updateCalculator();
              }
              function closeCalculator() {
                const modal = document.getElementById('calculator-modal');
                const content = document.getElementById('calculator-content');
                if(!modal || !content) return;
                modal.classList.add('opacity-0');
                content.classList.remove('scale-100');
                content.classList.add('scale-95');
                setTimeout(() => { modal.classList.add('hidden'); }, 300);
              }

          function openAssortment() {
              const modal = document.getElementById('assortment-modal');
              const content = document.getElementById('assortment-content');
              if(!modal || !content) return;
              modal.classList.remove('hidden');
              void modal.offsetWidth;
              modal.classList.remove('opacity-0');
              content.classList.remove('scale-95');
              content.classList.add('scale-100');
          }
          function closeAssortment() {
              const modal = document.getElementById('assortment-modal');
              const content = document.getElementById('assortment-content');
              if(!modal || !content) return;
              modal.classList.add('opacity-0');
              content.classList.remove('scale-100');
              content.classList.add('scale-95');
              setTimeout(() => { modal.classList.add('hidden'); }, 300);
          }

          function openContactModal() {
            const modal = document.getElementById('contact-modal');
            const content = document.getElementById('contact-content');
            if(!modal || !content) return;
            modal.classList.remove('hidden');
            void modal.offsetWidth;
            modal.classList.remove('opacity-0');
            content.classList.remove('scale-95');
            content.classList.add('scale-100');
          }
          function closeContactModal() {
            const modal = document.getElementById('contact-modal');
            const content = document.getElementById('contact-content');
            if(!modal || !content) return;
            modal.classList.add('opacity-0');
            content.classList.remove('scale-100');
            content.classList.add('scale-95');
            setTimeout(() => { modal.classList.add('hidden'); }, 300);
          }

          function openPricingModal() {
            const modal = document.getElementById('pricing-modal');
            const content = document.getElementById('pricing-content');
            if(modal && content) {
              modal.classList.remove('hidden');
              void modal.offsetWidth;
              modal.classList.remove('opacity-0');
              content.classList.remove('scale-95');
              content.classList.add('scale-100');
            }
          }
          function closePricingModal() {
            const modal = document.getElementById('pricing-modal');
            const content = document.getElementById('pricing-content');
            if(modal && content) {
              modal.classList.add('opacity-0');
              content.classList.remove('scale-100');
              content.classList.add('scale-95');
              setTimeout(() => modal.classList.add('hidden'), 300);
            }
          }

              function openBrandingCalculator() {
                const modal = document.getElementById('branding-calculator-modal');
                const content = document.getElementById('branding-calculator-content');
                if (modal && content) {
                  modal.classList.remove('hidden');
                  void modal.offsetWidth;
                  modal.classList.remove('opacity-0');
                  content.classList.remove('scale-95');
                  content.classList.add('scale-100');
                }
              }

              function closeBrandingCalculator() {
                const modal = document.getElementById('branding-calculator-modal');
                const content = document.getElementById('branding-calculator-content');
                if (modal && content) {
                  modal.classList.add('opacity-0');
                  content.classList.remove('scale-100');
                  content.classList.add('scale-95');
                  setTimeout(() => modal.classList.add('hidden'), 300);
                }
              }

              function calculateBrandingPrice() {
              const wInput = document.getElementById('bc-width');
              const hInput = document.getElementById('bc-height');
              const areaDisplay = document.getElementById('bc-area');
              const priceDisplay = document.getElementById('bc-price');

              if (!wInput || !hInput || !areaDisplay || !priceDisplay) return;

              const w = parseFloat(wInput.value) || 0;
              const h = parseFloat(hInput.value) || 0;
              const areaCm2 = (w * h) / 100;

              areaDisplay.textContent = areaCm2.toFixed(2) + ' см²';

              if (areaCm2 === 0) {
              priceDisplay.textContent = '0 ₴';
              return;
              }

              // 1. Отримуємо елементи та поточний вибір

              const ironEl = document.getElementById('option-iron');
              const noneRadio = document.querySelector('input[name="attachment"][value="none"]');
              const selected = document.querySelector('input[name="attachment"]:checked');

              // 2. Функція для візуального блокування
              const setOptionState = (element, isDisabled) => {
              if (isDisabled) {
              element.classList.add('opacity-30', 'pointer-events-none', 'grayscale-[0.5]');
              element.querySelector('input').disabled = true;
              } else {
              element.classList.remove('opacity-30', 'pointer-events-none', 'grayscale-[0.5]');
              element.querySelector('input').disabled = false;
              }
              };

              // 3. Перевірка індивідуальних лімітів

              const isIronDisabled = areaCm2 > 20;


              setOptionState(ironEl, isIronDisabled);

              // 4. Авто-скидання вибору, якщо він став недоступним
              if (selected) {

              if (selected.value === 'iron' && isIronDisabled) noneRadio.checked = true;
              }

              // 5. Прайс-лист кліше
              let basePrice = 0;
              if (areaCm2 <= 4) basePrice=340; else if (areaCm2 <=6) basePrice=510; else if (areaCm2 <=10) basePrice=550; else if
                (areaCm2 <=15) basePrice=680; else if (areaCm2 <=20) basePrice=760; else if (areaCm2 <=25) basePrice=890; else if
                (areaCm2 <=30) basePrice=1010; else if (areaCm2 <=35) basePrice=1100; else if (areaCm2 <=40) basePrice=1220; else if
                (areaCm2 <=45) basePrice=1350; else if (areaCm2 <=50) basePrice=1480; else if (areaCm2 <=60) basePrice=1640; else if
                (areaCm2 <=70) basePrice=1770; else if (areaCm2 <=80) basePrice=1860; else if (areaCm2 <=90) basePrice=1900; else if
                (areaCm2 <=100) basePrice=2070; else { priceDisplay.textContent='Індивідуально' ; return; } // 6. Розрахунок фінальної вартості
                let totalPrice=basePrice;
                const finalSelection=document.querySelector('input[name="attachment" ]:checked');
                if (finalSelection) { if (finalSelection.value==='press' ) totalPrice +=100; else if (finalSelection.value==='handle'
                ) totalPrice +=250; else if (finalSelection.value==='iron' ) totalPrice +=500; } priceDisplay.textContent=totalPrice
                + ' ₴' ;
                }
                function router(pageId) {
              document.querySelectorAll('[id^="page-"]').forEach(el => {
                  el.classList.add('hidden');
                  el.classList.remove('block');
              });
              const target = document.getElementById(`page-${pageId}`);
              if (target) {
                  target.classList.remove('hidden');
                  target.classList.add('block');
                  window.scrollTo(0, 0);
              }
              document.querySelectorAll('.dock-item').forEach(btn => {
                  const isActive = btn.dataset.page === pageId;
                  const dot = btn.querySelector('.active-dot');
                  if (isActive) {
                      btn.classList.add('text-white');
                      btn.classList.remove('text-neutral-500');
                      if (dot) dot.classList.remove('hidden');
                  } else {
                      btn.classList.remove('text-white');
                      btn.classList.add('text-neutral-500');
                      if (dot) dot.classList.add('hidden');
                  }
              });
              const bcContainer = document.getElementById('breadcrumbs-container');
              const bcCurrent = document.getElementById('breadcrumb-current');
              if (bcContainer && bcCurrent) {
                  if (pageId === 'home') {
                      bcContainer.classList.add('opacity-0');
                      setTimeout(() => bcContainer.classList.add('hidden'), 500);
                  } else {
                      bcContainer.classList.remove('hidden');
                      void bcContainer.offsetWidth;
                      bcContainer.classList.remove('opacity-0');
                      const titles = { 'milling': 'Фрезерування', 'engraving': 'Гравіювання', 'vectorization': 'Векторизація', 'gallery': 'Галерея' };
                      bcCurrent.textContent = titles[pageId] || '';
                  }
              }
          }
        


      function moveDockBg(e){const t=document.getElementById("dock-bg");if(t&&e){t.style.opacity="1";t.style.width=`${e.offsetWidth}px`;t.style.transform=`translateX(${e.offsetLeft}px)`}}
    


      var galleryImages = []; var galleryIndex = 0; window.openLightbox = function(elementOrSrc) { const lb = document.getElementById("lightbox"); const img = document.getElementById("lightbox-img"); const caption = document.getElementById("lightbox-caption"); const prevBtn = document.getElementById("lb-prev"); const nextBtn = document.getElementById("lb-next"); galleryImages = []; galleryIndex = 0; let src = ""; let alt = ""; if (elementOrSrc instanceof Element) { let target = elementOrSrc; if(target.tagName !== 'IMG') target = target.querySelector('img'); if(target) { src = target.src; alt = target.alt; if(target.dataset.gallery) { const group = target.dataset.gallery; const all = document.querySelectorAll(`img[data-gallery="${group}"]`); galleryImages = Array.from(all).map(el => ({ src: el.src, alt: el.alt })); galleryIndex = galleryImages.findIndex(item => item.src === src); } } } else if (typeof elementOrSrc === 'string') { src = elementOrSrc; } if (galleryImages.length > 1) { if(prevBtn) prevBtn.classList.remove('hidden'); if(nextBtn) nextBtn.classList.remove('hidden'); } else { if(prevBtn) prevBtn.classList.add('hidden'); if(nextBtn) nextBtn.classList.add('hidden'); } showLightboxImage(src, alt); lb.classList.remove("hidden"); void lb.offsetWidth; lb.classList.remove("opacity-0"); }; window.showLightboxImage = function(src, alt) { const img = document.getElementById("lightbox-img"); const caption = document.getElementById("lightbox-caption"); img.classList.remove("scale-100", "opacity-100"); img.classList.add("scale-95", "opacity-0"); caption.classList.add('opacity-0', 'translate-y-4'); setTimeout(() => { img.src = src; img.onload = () => { img.classList.remove("scale-95", "opacity-0"); img.classList.add("scale-100", "opacity-100"); if (alt && alt.trim()) { caption.textContent = alt; caption.classList.remove('opacity-0', 'translate-y-4'); } }; }, 200); }; window.changeImage = function(dir) { if (galleryImages.length <= 1) return; galleryIndex = (galleryIndex + dir + galleryImages.length) % galleryImages.length; const item = galleryImages[galleryIndex]; showLightboxImage(item.src, item.alt); };
    


      function openGalleryGrid(category){const modal=document.getElementById('gallery-grid-modal');const container=document.getElementById('gallery-grid-content');const title=document.getElementById('gallery-grid-title');if(!modal||!container)return;const titles={'leather':'Кліше для шкіри','airbag':'SRS Airbag','engraving':'Гравіювання','branding':'Брендування'};if(title)title.textContent=titles[category]||'Галерея';container.innerHTML='';const images=document.querySelectorAll(`img[data-gallery="${category}"]`);const sources=new Set();images.forEach(img=>{if(sources.has(img.src))return;sources.add(img.src);const wrapper=document.createElement('div');wrapper.className='aspect-square rounded-xl overflow-hidden border border-white/10 bg-neutral-900 relative group cursor-pointer';wrapper.onclick=()=>openLightbox(img.src);const newImg=document.createElement('img');newImg.src=img.src;newImg.alt=img.alt;newImg.className='w-full h-full object-cover transition duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100';wrapper.appendChild(newImg);container.appendChild(wrapper)});modal.classList.remove('hidden');void modal.offsetWidth;modal.classList.remove('opacity-0');document.body.style.overflow='hidden'}function closeGalleryGrid(){const modal=document.getElementById('gallery-grid-modal');if(!modal)return;modal.classList.add('opacity-0');setTimeout(()=>{modal.classList.add('hidden');document.body.style.overflow=''},300)}
    
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
      
<div bis_size='{"x":875,"y":230,"w":800,"h":800,"abs_x":875,"abs_y":273}' className="fixed top-0 left-0 w-[800px] h-[800px] rounded-full pointer-events-none z-[5] mix-blend-screen opacity-0 transition-opacity duration-500 ease-out will-change-transform" id="laser-glow" style={{background: 'radial-gradient(circle, rgba(220, 38, 38, 0.15) 0%, rgba(0, 0, 0, 0) 70%)', filter: 'blur(60px)', transform: 'translate3d(875px, 230.5px, 0px)', opacity: '1'}}></div>

<nav bis_size='{"x":985,"y":24,"w":563,"h":50,"abs_x":985,"abs_y":67}' className="fixed -translate-x-1/2 hidden z-50 bg-black/50 border-white/5 border rounded-full absolute top-6 left-1/2 backdrop-blur-sm items-center pl-1 pt-1 pr-1 pb-1 md:flex" onmouseleave="resetDockBg()">
<div bis_size='{"x":995,"y":31,"w":96,"h":36,"abs_x":995,"abs_y":74}' className="absolute h-[calc(100%-12px)] top-1.5 bg-[#1F1F1F] rounded-full transition-all duration-300 ease-[cubic-bezier(0.2,0,0.2,1)] opacity-0 pointer-events-none z-0 left-0" id="dock-bg" style={{opacity: '0', width: '96.4375px', transform: 'translateX(5px)'}}></div>
<button bis_size='{"x":990,"y":29,"w":96,"h":40,"abs_x":990,"abs_y":72}' className="dock-item transition-colors duration-200 flex text-sm font-medium rounded-full pt-2.5 pr-5 pb-2.5 pl-5 relative items-center justify-center text-white z-0" data-page="home" onclick="router('home')" onmouseenter="moveDockBg(this)">
<span bis_size='{"x":1010,"y":39,"w":56,"h":20,"abs_x":1010,"abs_y":82}' className="">
          Головна
        </span>
<span bis_size='{"x":1037,"y":69,"w":4,"h":4,"abs_x":1037,"abs_y":112}' className="active-dot absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_5px_white]"></span>
</button>
<button bis_size='{"x":1087,"y":29,"w":140,"h":40,"abs_x":1087,"abs_y":72}' className="dock-item hover:text-white transition-colors duration-200 z-10 text-sm font-medium text-neutral-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 relative" data-page="milling" onclick="router('milling')" onmouseenter="moveDockBg(this)">
<span bis_size='{"x":1107,"y":40,"w":100,"h":17,"abs_x":1107,"abs_y":83}' className="" style={{}}>
          Фрезерування
        </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="active-dot hidden absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_5px_white]"></span>
</button>
<button bis_size='{"x":1228,"y":29,"w":128,"h":40,"abs_x":1228,"abs_y":72}' className="dock-item hover:text-white transition-colors duration-200 z-10 text-sm font-medium text-neutral-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 relative" data-page="engraving" onclick="router('engraving')" onmouseenter="moveDockBg(this)">
<span bis_size='{"x":1248,"y":40,"w":88,"h":17,"abs_x":1248,"abs_y":83}' className="" style={{}}>
          Гравіювання
        </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="active-dot hidden absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_5px_white]"></span>
</button>
<button bis_size='{"x":1356,"y":29,"w":91,"h":40,"abs_x":1356,"abs_y":72}' className="dock-item z-10 hover:text-white transition-colors duration-200 text-sm font-medium text-neutral-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 relative" data-page="vectorization" onclick="router('vectorization')" onmouseenter="moveDockBg(this)">
<span bis_size='{"x":1376,"y":40,"w":51,"h":17,"abs_x":1376,"abs_y":83}' className="" style={{}}>
          Дизайн
        </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="active-dot hidden absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_5px_white]"></span>
</button>
<button bis_size='{"x":1447,"y":29,"w":96,"h":40,"abs_x":1447,"abs_y":72}' className="dock-item hover:text-white transition-colors duration-200 text-sm font-medium z-10 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 relative text-neutral-500" data-page="gallery" onclick="router('gallery')" onmouseenter="moveDockBg(this)">
<span bis_size='{"x":1467,"y":40,"w":56,"h":17,"abs_x":1467,"abs_y":83}' className="" style={{}}>
          Галерея
        </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="active-dot absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_5px_white] hidden"></span>
</button>
</nav>

<header bis_size='{"x":0,"y":0,"w":2535,"h":96,"abs_x":0,"abs_y":43}' className="fixed w-full z-40 top-0 pointer-events-none">
<div bis_size='{"x":627,"y":0,"w":1280,"h":96,"abs_x":627,"abs_y":43}' className="flex pointer-events-auto h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<button bis_size='{"x":651,"y":23,"w":186,"h":50,"abs_x":651,"abs_y":66}' className="flex gap-3 group bg-black/20 border-white/5 border rounded-full pt-0 pr-3 pb-0 pl-3 backdrop-blur-sm gap-x-3 gap-y-3 items-center" onclick="router('home')">
<img alt="Laser Stamp Co" bis_size='{"x":664,"y":24,"w":160,"h":48,"abs_x":664,"abs_y":67}' className="aspect-[10/3] group-hover:opacity-100 transition opacity-90 w-auto h-12 object-contain rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f0b0144-42e9-4a63-b8f6-06b2899c7ed4_320w.png" style={{}}/>
</button>

<div bis_size='{"x":1652,"y":29,"w":231,"h":38,"abs_x":1652,"abs_y":72}' className="flex gap-4 gap-x-4 gap-y-4 items-center">
<button bis_size='{"x":1652,"y":29,"w":84,"h":38,"abs_x":1652,"abs_y":72}' className="hidden md:flex items-center gap-2 px-4 py-2.5 backdrop-blur-sm bg-black/20 border-white/5 border rounded-full hover:border-white/30 hover:bg-white/10 transition text-xs font-bold group">
<span bis_size='{"x":1669,"y":40,"w":17,"h":16,"abs_x":1669,"abs_y":83}' className="text-white">
              UA
            </span>
<span bis_size='{"x":1694,"y":42,"w":1,"h":12,"abs_x":1694,"abs_y":85}' className="w-px h-3 bg-white/10 group-hover:bg-white/30 transition"></span>
<span bis_size='{"x":1703,"y":40,"w":16,"h":16,"abs_x":1703,"abs_y":83}' className="text-neutral-500 hover:text-white transition">
              EN
            </span>
</button>

<button bis_size='{"x":1752,"y":30,"w":130,"h":36,"abs_x":1752,"abs_y":73}' className="bg-white hover:bg-neutral-200 text-black text-xs font-bold px-5 py-2.5 rounded-full transition shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center gap-2" onclick="openContactModal()">
<span bis_size='{"x":1772,"y":40,"w":70,"h":16,"abs_x":1772,"abs_y":83}' className="">
              ЗАМОВИТИ
            </span>
<iconify-icon bis_size='{"x":1851,"y":42,"w":12,"h":12,"abs_x":1851,"abs_y":85}' className="text-red-600" icon="lucide:arrow-right" strokeWidth="2.5"></iconify-icon>
</button>

<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="md:hidden flex hover:text-red-500 transition hover:bg-white/10 text-white w-10 h-10 rounded-full items-center justify-center" onclick="toggleMobileMenu()">
<svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="menu" height="24" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="" d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</header>

<div bis_size='{"x":24,"y":96,"w":85,"h":30,"abs_x":24,"abs_y":139}' className="fixed z-30 md:block transition-opacity duration-500 top-24 left-6" id="breadcrumbs-container">
<div bis_size='{"x":24,"y":96,"w":85,"h":30,"abs_x":24,"abs_y":139}' className="flex text-xs text-neutral-600 bg-black/50 border-white/5 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center">
<span bis_size='{"x":37,"y":103,"w":33,"h":16,"abs_x":37,"abs_y":146}' className="cursor-pointer hover:text-white transition" onclick="router('home')">
          Home
        </span>
<iconify-icon bis_size='{"x":78,"y":106,"w":10,"h":10,"abs_x":78,"abs_y":149}' className="" icon="lucide:chevron-right" width="10"></iconify-icon>
<span bis_size='{"x":96,"y":111,"w":0,"h":0,"abs_x":96,"abs_y":154}' className="font-medium text-red-500" id="breadcrumb-current"></span>
</div>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm hidden opacity-0 transition-opacity duration-300 md:hidden" id="mobile-backdrop" onclick="toggleMobileMenu()"></div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="fixed top-0 right-0 z-[100] h-full w-[280px] bg-[#0a0a0a] border-l border-white/10 transform translate-x-full transition-transform duration-300 md:hidden flex flex-col shadow-2xl" id="mobile-menu">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="h-20 flex items-center justify-between px-6 border-b border-white/10">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="font-bold text-white text-lg tracking-tight">
          МЕНЮ
        </span>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-400 hover:text-white transition" onclick="toggleMobileMenu()">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:x" width="24"></iconify-icon>
</button>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center justify-between px-4 py-3 rounded-lg border border-white/10 bg-white/5 mb-2">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm font-bold text-white">
            Мова
          </span>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex gap-1">
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="bg-red-600 text-white px-3 py-1.5 rounded text-xs font-bold shadow-[0_0_10px_rgba(220,38,38,0.5)]">
              UA
            </button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-400 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded text-xs font-bold transition">
              EN
            </button>
</div>
</div>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-left px-4 py-3 rounded-lg text-sm font-bold text-white hover:bg-white/5 transition uppercase tracking-wide" onclick="router('home'); toggleMobileMenu()">
          Головна
        </button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-left px-4 py-3 rounded-lg text-sm font-bold text-neutral-400 hover:text-red-500 hover:bg-white/5 transition uppercase tracking-wide" onclick="router('milling'); toggleMobileMenu()">
          Фрезерування
        </button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-left px-4 py-3 rounded-lg text-sm font-bold text-neutral-400 hover:text-red-500 hover:bg-white/5 transition uppercase tracking-wide" onclick="router('engraving'); toggleMobileMenu()">
          Гравіювання
        </button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-left px-4 py-3 rounded-lg text-sm font-bold text-neutral-400 hover:text-red-500 hover:bg-white/5 transition uppercase tracking-wide" onclick="router('vectorization'); toggleMobileMenu()">
          Векторизація
        </button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-left px-4 py-3 rounded-lg text-sm font-bold text-neutral-400 hover:text-red-500 hover:bg-white/5 transition uppercase tracking-wide" onclick="router('gallery'); toggleMobileMenu()">
          Галерея
        </button>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="p-6 border-t border-white/10 bg-neutral-950">
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition mb-6 shadow-[0_0_15px_rgba(220,38,38,0.4)] uppercase text-xs tracking-wider" onclick="openPricingModal()">
          Розрахувати вартість
        </button>
</div>
</div>

<main bis_size='{"x":0,"y":0,"w":2535,"h":5496,"abs_x":0,"abs_y":43}' className="">

<div bis_size='{"x":0,"y":0,"w":2535,"h":5496,"abs_x":0,"abs_y":43}' className="fade-in block" id="page-home">

<section bis_size='{"x":0,"y":0,"w":2535,"h":1261,"abs_x":0,"abs_y":43}' className="hero-gradient min-h-[100dvh] flex flex-col text-white z-0 pt-32 pb-32 relative items-center justify-center">
<div bis_size='{"x":907,"y":272,"w":720,"h":716,"abs_x":907,"abs_y":315}' className="text-center max-w-4xl z-10 mx-auto px-6 relative">
<div bis_size='{"x":1174,"y":274,"w":185,"h":26,"abs_x":1174,"abs_y":317}' className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-900/10 text-xs font-medium text-red-400 mb-6 backdrop-blur-sm">
<span bis_size='{"x":1187,"y":284,"w":6,"h":6,"abs_x":1187,"abs_y":327}' className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              Приймаємо замовлення
            </div>
<h1 bis_size='{"x":931,"y":324,"w":672,"h":120,"abs_x":931,"abs_y":367}' className="md:text-6xl leading-tight text-4xl font-semibold tracking-tight mb-4">
              Професійні кліше
              <br bis_size='{"x":1518,"y":318,"w":0,"h":72,"abs_x":1518,"abs_y":361}'/>
              та гравіювання
            </h1>
<p bis_size='{"x":931,"y":460,"w":672,"h":56,"abs_x":931,"abs_y":503}' className="md:text-xl text-lg font-light text-neutral-400 max-w-2xl mr-auto mb-6 ml-auto">
              Від одиничних логотипів на шкірі до серійного промислового
              маркування. Точність до мікрона.
            </p>
<div bis_size='{"x":931,"y":540,"w":672,"h":46,"abs_x":931,"abs_y":583}' className="flex flex-col sm:flex-row gap-4 mb-6 gap-x-4 gap-y-4 items-center justify-center">
<button bis_size='{"x":1064,"y":541,"w":171,"h":44,"abs_x":1064,"abs_y":584}' className="sm:w-auto hover:bg-red-700 transition flex text-sm font-semibold text-white bg-red-600 w-full rounded-lg pt-3 pr-6 pb-3 pl-6 shadow-[0_0_20px_rgba(220,38,38,0.3)] gap-x-2 gap-y-2 items-center justify-center" onclick="openPricingModal()">
                Переглянути ціни
              </button>
<button bis_size='{"x":1252,"y":540,"w":217,"h":46,"abs_x":1252,"abs_y":583}' className="sm:w-auto hover:bg-white/5 transition text-sm font-medium text-white w-full border-white/10 border rounded-lg pt-3 pr-6 pb-3 pl-6 backdrop-blur-sm" onclick="router('gallery')">
                Відвідати галерею робіт
              </button>
</div>

<div bis_size='{"x":931,"y":610,"w":672,"h":378,"abs_x":931,"abs_y":653}' className="relative w-full max-w-5xl mx-auto z-20 group">

<div bis_size='{"x":927,"y":606,"w":680,"h":386,"abs_x":927,"abs_y":649}' className="absolute -inset-1 bg-gradient-to-r from-red-600/30 to-red-900/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>

<div bis_size='{"x":931,"y":610,"w":672,"h":378,"abs_x":931,"abs_y":653}' className="relative rounded-xl overflow-hidden border border-white/10 bg-black shadow-2xl aspect-video">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" bis_chainid="4" bis_depth="1" bis_id="fr_ovz11b244jdhikiv1zo1x4" bis_size='{"x":932,"y":611,"w":670,"h":376,"abs_x":932,"abs_y":654}' className="absolute top-0 left-0 w-full h-full" frameborder="0" src="https://www.youtube.com/embed/FWXDGf5KJJc?rel=0&amp;modestbranding=1" title="Laser Stamp Co Promo"></iframe>
</div>
</div>
</div>
<div bis_size='{"x":1255,"y":1199,"w":24,"h":30,"abs_x":1255,"abs_y":1242}' className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-neutral-500">
<iconify-icon bis_size='{"x":1255,"y":1199,"w":24,"h":24,"abs_x":1255,"abs_y":1242}' icon="lucide:arrow-down" width="24"></iconify-icon>
</div>
</section>

<section bis_size='{"x":0,"y":1261,"w":2535,"h":1261,"abs_x":0,"abs_y":1304}' className="z-10 min-h-[100dvh] flex flex-col bg-neutral-950 border-white/10 border-t pt-32 pb-32 relative shadow-[0_-50px_100px_rgba(0,0,0,0.7)] justify-center">
<div bis_size='{"x":627,"y":1497,"w":1280,"h":790,"abs_x":627,"abs_y":1540}' className="max-w-7xl mx-auto px-6 w-full">
<h2 bis_size='{"x":651,"y":1497,"w":1232,"h":36,"abs_x":651,"abs_y":1540}' className="text-3xl font-semibold text-center mb-12 text-white">
              Оберіть технологію
            </h2>
<div bis_size='{"x":651,"y":1581,"w":1232,"h":658,"abs_x":651,"abs_y":1624}' className="grid md:grid-cols-2 gap-8 mb-12">

<div bis_size='{"x":651,"y":1581,"w":600,"h":658,"abs_x":651,"abs_y":1624}' className="p-8 rounded-2xl border border-white/10 bg-black/50 hover:border-red-500/50 transition group cursor-pointer" onclick="router('milling')">
<div bis_size='{"x":684,"y":1614,"w":534,"h":400,"abs_x":684,"abs_y":1657}' className="w-full aspect-[4/3] h-auto rounded-lg overflow-hidden mb-6 relative group-hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-500 border border-white/10">
<img alt="Кліше з кріпленнями для фіксаціїї на термопресі" bis_size='{"x":685,"y":1615,"w":532,"h":398,"abs_x":685,"abs_y":1658}' className="hover:scale-110 transition duration-700 cursor-zoom-in w-full h-full object-cover" src="https://i.ibb.co/jPYK13Gj/fraser.jpg"/>
</div>
<h3 bis_size='{"x":684,"y":2038,"w":534,"h":28,"abs_x":684,"abs_y":2081}' className="group-hover:text-red-500 transition text-xl font-semibold text-white tracking-tight mb-2">
                  Фрезерування
                </h3>
<p bis_size='{"x":684,"y":2074,"w":534,"h":45,"abs_x":684,"abs_y":2117}' className="text-neutral-500 text-sm leading-relaxed mb-4">
                  Ідеальні для для тиснення натуральної шкіри, вінілів, картону,
                  воску, сургуча, пластику, гуми холодним та гарячим способом.
                </p>
<span bis_size='{"x":684,"y":2136,"w":534,"h":16,"abs_x":684,"abs_y":2179}' className="text-xs font-medium text-red-500 flex items-center gap-1">
                  Детальніше
                  <iconify-icon bis_size='{"x":759,"y":2138,"w":12,"h":12,"abs_x":759,"abs_y":2181}' icon="lucide:arrow-right" width="12"></iconify-icon>
</span>
</div>

<div bis_size='{"x":1283,"y":1581,"w":600,"h":658,"abs_x":1283,"abs_y":1624}' className="p-8 rounded-2xl border border-white/10 bg-black/50 hover:border-red-500/50 transition group cursor-pointer" onclick="router('engraving')">
<div bis_size='{"x":1316,"y":1614,"w":534,"h":400,"abs_x":1316,"abs_y":1657}' className="w-full aspect-[4/3] h-auto rounded-lg overflow-hidden mb-6 relative group-hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-500 border border-white/10">
<img alt="Laser Engraving" bis_size='{"x":1317,"y":1615,"w":532,"h":398,"abs_x":1317,"abs_y":1658}' className="hover:scale-110 transition duration-700 cursor-zoom-in w-full h-full object-cover" src="https://i.ibb.co/8hZQXNd/01-lasr.jpg"/>
</div>
<h3 bis_size='{"x":1316,"y":2038,"w":534,"h":28,"abs_x":1316,"abs_y":2081}' className="text-xl font-semibold tracking-tight mb-2 text-white group-hover:text-red-500 transition">
                  Лазерне Гравіювання
                </h3>
<p bis_size='{"x":1316,"y":2074,"w":534,"h":45,"abs_x":1316,"abs_y":2117}' className="text-neutral-500 text-sm leading-relaxed mb-4">
                  Нанесення будь яких векторних, так і растрових зображень
                  Інформаційні панелі та ударні штампи
                </p>
<p bis_size='{"x":1316,"y":2136,"w":534,"h":0,"abs_x":1316,"abs_y":2179}'></p>
<div bis_size='{"x":1316,"y":2136,"w":534,"h":70,"abs_x":1316,"abs_y":2179}' className="mt-4 p-4 rounded-lg bg-black/80 border border-white/10 flex items-start gap-3">
<div bis_size='{"x":1333,"y":2153,"w":24,"h":32,"abs_x":1333,"abs_y":2196}' className="shrink-0 bg-neutral-800 rounded p-1">
<iconify-icon bis_size='{"x":1337,"y":2159,"w":16,"h":16,"abs_x":1337,"abs_y":2202}' className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
</div>
<div bis_size='{"x":1369,"y":2153,"w":396,"h":36,"abs_x":1369,"abs_y":2196}' className="">
<h4 bis_size='{"x":1369,"y":2153,"w":396,"h":16,"abs_x":1369,"abs_y":2196}' className="text-xs font-semibold text-white uppercase tracking-wide mb-1">
                      Top Product: Армійські жетони
                    </h4>
<p bis_size='{"x":1369,"y":2173,"w":396,"h":16,"abs_x":1369,"abs_y":2216}' className="text-xs text-neutral-500">
                      Виготовлення за 24 години. Незмивне нанесення групи крові
                      та ID.
                    </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":2522,"w":2535,"h":1713,"abs_x":0,"abs_y":2565}' className="z-20 min-h-[100dvh] bg-neutral-900 border-white/10 border-t pt-32 pb-32 relative shadow-[0_-50px_100px_rgba(0,0,0,0.7)]">
<div bis_size='{"x":627,"y":2651,"w":1280,"h":880,"abs_x":627,"abs_y":2694}' className="max-w-7xl mx-auto px-6 w-full mb-32">
<h2 bis_size='{"x":651,"y":2651,"w":1232,"h":32,"abs_x":651,"abs_y":2694}' className="text-2xl font-semibold tracking-tight mb-10 text-white">
              Усі послуги
            </h2>
<div bis_size='{"x":651,"y":2723,"w":1232,"h":808,"abs_x":651,"abs_y":2766}' className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

<div bis_size='{"x":651,"y":2723,"w":394,"h":392,"abs_x":651,"abs_y":2766}' className="group rounded-lg border border-white/10 bg-black hover:border-red-500/50 transition overflow-hidden">
<div bis_size='{"x":652,"y":2724,"w":392,"h":294,"abs_x":652,"abs_y":2767}' className="aspect-[4/3] h-auto overflow-hidden relative border-b border-white/5">
<img alt="Matrix" bis_size='{"x":652,"y":2724,"w":392,"h":293,"abs_x":652,"abs_y":2767}' className="w-full h-full object-cover group-hover:scale-110 transition duration-700 cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<div bis_size='{"x":652,"y":2724,"w":392,"h":293,"abs_x":652,"abs_y":2767}' className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
</div>
<div bis_size='{"x":652,"y":3018,"w":392,"h":80,"abs_x":652,"abs_y":3061}' className="p-5">
<h4 bis_size='{"x":672,"y":3038,"w":352,"h":20,"abs_x":672,"abs_y":3081}' className="font-medium text-sm text-white group-hover:text-red-500 transition">
                    Матриці пуансон
                  </h4>
<p bis_size='{"x":672,"y":3062,"w":352,"h":16,"abs_x":672,"abs_y":3105}' className="text-xs text-neutral-500 mt-1">
                    Для конгревного тиснення на шкірі, папері та картоні.
                  </p>
</div>
</div>

<div bis_size='{"x":1070,"y":2723,"w":394,"h":392,"abs_x":1070,"abs_y":2766}' className="group rounded-lg border border-white/10 bg-black hover:border-red-500/50 transition overflow-hidden">
<div bis_size='{"x":1071,"y":2724,"w":392,"h":294,"abs_x":1071,"abs_y":2767}' className="aspect-[4/3] h-auto overflow-hidden relative border-b border-white/5">
<img alt="Marking" bis_size='{"x":1071,"y":2724,"w":392,"h":293,"abs_x":1071,"abs_y":2767}' className="w-full h-full object-cover group-hover:scale-110 transition duration-700 cursor-zoom-in" src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":1071,"y":2724,"w":392,"h":293,"abs_x":1071,"abs_y":2767}' className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
</div>
<div bis_size='{"x":1071,"y":3018,"w":392,"h":96,"abs_x":1071,"abs_y":3061}' className="p-5">
<h4 bis_size='{"x":1091,"y":3038,"w":352,"h":20,"abs_x":1091,"abs_y":3081}' className="font-medium text-sm text-white group-hover:text-red-500 transition">
                    Промислове маркування
                  </h4>
<p bis_size='{"x":1091,"y":3062,"w":352,"h":32,"abs_x":1091,"abs_y":3105}' className="text-xs text-neutral-500 mt-1">
                    Виготовлення шильд, тех. табличок, нанесення серійних
                    номерів.
                  </p>
</div>
</div>

<div bis_size='{"x":1488,"y":2723,"w":394,"h":392,"abs_x":1488,"abs_y":2766}' className="group rounded-lg border border-white/10 bg-black hover:border-red-500/50 transition overflow-hidden">
<div bis_size='{"x":1489,"y":2724,"w":392,"h":294,"abs_x":1489,"abs_y":2767}' className="aspect-[4/3] h-auto overflow-hidden relative border-b border-white/5">
<img alt="Logo" bis_size='{"x":1489,"y":2724,"w":392,"h":293,"abs_x":1489,"abs_y":2767}' className="w-full h-full object-cover group-hover:scale-110 transition duration-700 cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{}}/>
<div bis_size='{"x":1489,"y":2724,"w":392,"h":293,"abs_x":1489,"abs_y":2767}' className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
</div>
<div bis_size='{"x":1489,"y":3018,"w":392,"h":80,"abs_x":1489,"abs_y":3061}' className="p-5">
<h4 bis_size='{"x":1509,"y":3038,"w":352,"h":20,"abs_x":1509,"abs_y":3081}' className="font-medium text-sm text-white group-hover:text-red-500 transition">
                    Розробка логотипів
                  </h4>
<p bis_size='{"x":1509,"y":3062,"w":352,"h":16,"abs_x":1509,"abs_y":3105}' className="text-xs text-neutral-500 mt-1">
                    Створення унікального дизайну з нуля для вашого бренду.
                  </p>
</div>
</div>

<div bis_size='{"x":651,"y":3139,"w":394,"h":392,"abs_x":651,"abs_y":3182}' className="group rounded-lg border border-white/10 bg-black hover:border-red-500/50 transition overflow-hidden">
<div bis_size='{"x":652,"y":3140,"w":392,"h":294,"abs_x":652,"abs_y":3183}' className="aspect-[4/3] h-auto overflow-hidden relative border-b border-white/5">
<img alt="Airbag" bis_size='{"x":652,"y":3140,"w":392,"h":293,"abs_x":652,"abs_y":3183}' className="w-full h-full object-cover group-hover:scale-110 transition duration-700 cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div bis_size='{"x":652,"y":3140,"w":392,"h":293,"abs_x":652,"abs_y":3183}' className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
</div>
<div bis_size='{"x":652,"y":3434,"w":392,"h":96,"abs_x":652,"abs_y":3477}' className="p-5">
<h4 bis_size='{"x":672,"y":3454,"w":352,"h":20,"abs_x":672,"abs_y":3497}' className="font-medium text-sm text-white group-hover:text-red-500 transition">
                    Системи Airbag
                  </h4>
<p bis_size='{"x":672,"y":3478,"w":352,"h":32,"abs_x":672,"abs_y":3521}' className="text-xs text-neutral-500 mt-1">
                    Відновлення заводського тиснення (значків) на кермі та
                    панелі.
                  </p>
</div>
</div>

<div bis_size='{"x":1070,"y":3139,"w":394,"h":392,"abs_x":1070,"abs_y":3182}' className="group rounded-lg border border-white/10 bg-black hover:border-red-500/50 transition overflow-hidden">
<div bis_size='{"x":1071,"y":3140,"w":392,"h":294,"abs_x":1071,"abs_y":3183}' className="aspect-[4/3] h-auto overflow-hidden relative border-b border-white/5">
<img alt="Jewelry" bis_size='{"x":1071,"y":3140,"w":392,"h":293,"abs_x":1071,"abs_y":3183}' className="w-full h-full object-cover group-hover:scale-110 transition duration-700 cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div bis_size='{"x":1071,"y":3140,"w":392,"h":293,"abs_x":1071,"abs_y":3183}' className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
</div>
<div bis_size='{"x":1071,"y":3435,"w":392,"h":80,"abs_x":1071,"abs_y":3478}' className="p-5">
<h4 bis_size='{"x":1091,"y":3455,"w":352,"h":20,"abs_x":1091,"abs_y":3498}' className="font-medium text-sm text-white group-hover:text-red-500 transition">
                    Ювелірні вироби
                  </h4>
<p bis_size='{"x":1091,"y":3479,"w":352,"h":16,"abs_x":1091,"abs_y":3522}' className="text-xs text-neutral-500 mt-1">
                    Глибоке та поверхневе гравіювання дорогоцінних металів.
                  </p>
</div>
</div>

<div bis_size='{"x":1488,"y":3139,"w":394,"h":392,"abs_x":1488,"abs_y":3182}' className="group rounded-lg border border-white/10 bg-black hover:border-red-500/50 transition overflow-hidden">
<div bis_size='{"x":1489,"y":3140,"w":392,"h":294,"abs_x":1489,"abs_y":3183}' className="aspect-[4/3] h-auto overflow-hidden relative border-b border-white/5">
<img alt="Графічне проектування" bis_size='{"x":1489,"y":3140,"w":392,"h":293,"abs_x":1489,"abs_y":3183}' className="w-full h-full object-cover group-hover:scale-110 transition duration-700 cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div bis_size='{"x":1489,"y":3140,"w":392,"h":293,"abs_x":1489,"abs_y":3183}' className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
</div>
<div bis_size='{"x":1489,"y":3434,"w":392,"h":80,"abs_x":1489,"abs_y":3477}' className="p-5">
<h4 bis_size='{"x":1509,"y":3454,"w":352,"h":20,"abs_x":1509,"abs_y":3497}' className="font-medium text-sm text-white group-hover:text-red-500 transition">
                    Графічне проектування
                  </h4>
<p bis_size='{"x":1509,"y":3478,"w":352,"h":16,"abs_x":1509,"abs_y":3521}' className="text-xs text-neutral-500 mt-1">
                    3D візуалізація макетів перед запуском у виробництво.
                  </p>
</div>
</div>
</div>
</div>

<div bis_size='{"x":627,"y":3659,"w":1280,"h":448,"abs_x":627,"abs_y":3702}' className="max-w-7xl mx-auto px-6 w-full">
<div bis_size='{"x":651,"y":3659,"w":1232,"h":448,"abs_x":651,"abs_y":3702}' className="grid lg:grid-cols-2 gap-12 gap-x-12 gap-y-12 items-center">
<div bis_size='{"x":651,"y":3799,"w":592,"h":169,"abs_x":651,"abs_y":3842}' className="">
<h2 bis_size='{"x":651,"y":3799,"w":592,"h":36,"abs_x":651,"abs_y":3842}' className="text-3xl font-semibold tracking-tight mb-4 text-white">
                  Немає макету?
                  <span bis_size='{"x":879,"y":3799,"w":239,"h":36,"abs_x":879,"abs_y":3842}' className="text-red-500">
                    Це не проблема.
                  </span>
</h2>
<p bis_size='{"x":651,"y":3851,"w":592,"h":45,"abs_x":651,"abs_y":3894}' className="text-neutral-400 text-sm leading-relaxed mb-8">
                  Ми перетворимо будь-яке зображення у формат, який розуміють
                  станки. Від ескізу на серветці до промислового файлу.
                </p>
<button bis_size='{"x":651,"y":3928,"w":216,"h":40,"abs_x":651,"abs_y":3971}' className="bg-white text-black hover:bg-neutral-200 px-6 py-2.5 rounded-md text-sm font-bold transition inline-flex items-center gap-2" onclick="router('vectorization')">
                  Замовити векторизацію
                </button>
</div>
<div bis_size='{"x":1363,"y":3659,"w":448,"h":448,"abs_x":1363,"abs_y":3702}' className="aspect-[4/4] overflow-hidden group select-none cursor-ew-resize bg-black w-full max-w-md border-white/10 border rounded-xl mr-auto ml-auto relative touch-none" id="slider-block">
<div bis_size='{"x":1364,"y":3660,"w":446,"h":446,"abs_x":1364,"abs_y":3703}' className="absolute inset-0 bg-black flex items-center justify-center">
<img alt="Vector Result" bis_size='{"x":1364,"y":3660,"w":446,"h":446,"abs_x":1364,"abs_y":3703}' className="absolute inset-0 w-full h-full object-cover" src="https://i.ibb.co/DDh7QBRM/vector.jpg"/>
<div bis_size='{"x":1364,"y":3660,"w":446,"h":446,"abs_x":1364,"abs_y":3703}' className="absolute inset-0 bg-black/10"></div>
<span bis_size='{"x":1723,"y":4064,"w":70,"h":26,"abs_x":1723,"abs_y":4107}' className="absolute bottom-4 right-4 text-xs font-mono text-red-500 bg-black/90 px-2 py-1 rounded border border-red-500/30 shadow-lg z-20">
                    Векторне
                  </span>
<span bis_size='{"x":1380,"y":4064,"w":70,"h":26,"abs_x":1380,"abs_y":4107}' className="absolute bottom-4 left-4 text-xs font-mono text-white bg-black/50 px-2 py-1 rounded backdrop-blur-md border border-white/10 z-20">
                    Растрове
                  </span>
</div>
<div bis_size='{"x":1364,"y":3660,"w":303,"h":446,"abs_x":1364,"abs_y":3703}' className="absolute inset-0 bg-white overflow-hidden w-1/2 border-r-2 border-red-500" id="slider-mask" style={{width: '68%'}}>
<img alt="Original Raster" bis_size='{"x":1364,"y":3660,"w":448,"h":446,"abs_x":1364,"abs_y":3703}' className="h-full max-w-none object-cover absolute top-0 left-0" src="https://i.ibb.co/7NVP2cpK/rastr.jpg" style={{width: '448px'}}/>
</div>
<div bis_size='{"x":1651,"y":3660,"w":32,"h":446,"abs_x":1651,"abs_y":3703}' className="absolute inset-y-0 left-1/2 w-8 -ml-4 flex items-center justify-center cursor-ew-resize pointer-events-none" id="slider-knob" style={{left: '68%'}}>
<div bis_size='{"x":1651,"y":3867,"w":32,"h":32,"abs_x":1651,"abs_y":3910}' className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.5)]">
<iconify-icon bis_size='{"x":1659,"y":3875,"w":16,"h":16,"abs_x":1659,"abs_y":3918}' icon="lucide:chevrons-left-right" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<div bis_size='{"x":0,"y":4235,"w":2535,"h":1261,"abs_x":0,"abs_y":4278}' className="z-30 min-h-[100dvh] bg-black border-white/10 border-t pt-20 relative shadow-[0_-50px_100px_rgba(0,0,0,0.7)]">
<section bis_size='{"x":755,"y":4316,"w":1024,"h":242,"abs_x":755,"abs_y":4359}' className="px-6 max-w-5xl mx-auto text-center mb-20">
<h2 bis_size='{"x":779,"y":4316,"w":976,"h":32,"abs_x":779,"abs_y":4359}' className="text-2xl font-semibold tracking-tight mb-10 text-white">
              У якому стані ваш файл?
            </h2>
<div bis_size='{"x":779,"y":4388,"w":976,"h":170,"abs_x":779,"abs_y":4431}' className="grid md:grid-cols-3 gap-4">
<button bis_size='{"x":779,"y":4388,"w":314,"h":170,"abs_x":779,"abs_y":4431}' className="p-6 rounded-xl border border-white/10 bg-neutral-900 hover:border-red-500 hover:bg-neutral-800 transition group text-left" onclick="openContactModal()">
<div bis_size='{"x":804,"y":4413,"w":32,"h":32,"abs_x":804,"abs_y":4456}' className="w-8 h-8 rounded-full bg-red-900/20 text-red-500 flex items-center justify-center mb-4">
<iconify-icon bis_size='{"x":812,"y":4421,"w":16,"h":16,"abs_x":812,"abs_y":4464}' icon="lucide:check" width="16"></iconify-icon>
</div>
<h4 bis_size='{"x":804,"y":4461,"w":264,"h":20,"abs_x":804,"abs_y":4504}' className="font-medium text-white text-sm mb-1">
                  Готовий вектор
                </h4>
<p bis_size='{"x":804,"y":4485,"w":264,"h":16,"abs_x":804,"abs_y":4528}' className="text-xs text-neutral-500">
                  Формати CDR, AI, EPS
                </p>
<div bis_size='{"x":804,"y":4517,"w":264,"h":16,"abs_x":804,"abs_y":4560}' className="mt-4 text-xs font-medium text-red-500 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Завантажити
                  <iconify-icon bis_size='{"x":886,"y":4520,"w":10,"h":10,"abs_x":886,"abs_y":4563}' icon="lucide:arrow-right" width="10"></iconify-icon>
</div>
</button>
<button bis_size='{"x":1110,"y":4388,"w":314,"h":170,"abs_x":1110,"abs_y":4431}' className="p-6 rounded-xl border border-white/10 bg-neutral-900 hover:border-red-500 hover:bg-neutral-800 transition group text-left" onclick="router('vectorization')">
<div bis_size='{"x":1135,"y":4413,"w":32,"h":32,"abs_x":1135,"abs_y":4456}' className="w-8 h-8 rounded-full bg-white/5 text-white flex items-center justify-center mb-4">
<iconify-icon bis_size='{"x":1143,"y":4421,"w":16,"h":16,"abs_x":1143,"abs_y":4464}' icon="lucide:image" width="16"></iconify-icon>
</div>
<h4 bis_size='{"x":1135,"y":4461,"w":264,"h":20,"abs_x":1135,"abs_y":4504}' className="font-medium text-white text-sm mb-1">
                  Картинка / Фото
                </h4>
<p bis_size='{"x":1135,"y":4485,"w":264,"h":16,"abs_x":1135,"abs_y":4528}' className="text-xs text-neutral-500">
                  Потрібна векторизація
                </p>
<div bis_size='{"x":1135,"y":4517,"w":264,"h":16,"abs_x":1135,"abs_y":4560}' className="mt-4 text-xs font-medium text-white flex items-center gap-1 group-hover:gap-2 transition-all">
                  Перейти до дизайну
                  <iconify-icon bis_size='{"x":1259,"y":4520,"w":10,"h":10,"abs_x":1259,"abs_y":4563}' icon="lucide:arrow-right" width="10"></iconify-icon>
</div>
</button>
<button bis_size='{"x":1440,"y":4388,"w":314,"h":170,"abs_x":1440,"abs_y":4431}' className="p-6 rounded-xl border border-white/10 bg-neutral-900 hover:border-red-500 hover:bg-neutral-800 transition group text-left">
<div bis_size='{"x":1465,"y":4413,"w":32,"h":32,"abs_x":1465,"abs_y":4456}' className="w-8 h-8 rounded-full bg-white/5 text-white flex items-center justify-center mb-4">
<iconify-icon bis_size='{"x":1473,"y":4421,"w":16,"h":16,"abs_x":1473,"abs_y":4464}' icon="lucide:help-circle" width="16"></iconify-icon>
</div>
<h4 bis_size='{"x":1465,"y":4461,"w":264,"h":20,"abs_x":1465,"abs_y":4504}' className="font-medium text-white text-sm mb-1">
                  Потрібна допомога
                </h4>
<p bis_size='{"x":1465,"y":4485,"w":264,"h":16,"abs_x":1465,"abs_y":4528}' className="text-xs text-neutral-500">
                  Я не знаю параметрів
                </p>
<div bis_size='{"x":1465,"y":4517,"w":264,"h":16,"abs_x":1465,"abs_y":4560}' className="mt-4 text-xs font-medium text-white flex items-center gap-1 group-hover:gap-2 transition-all">
                  Відкрити чат
                  <iconify-icon bis_size='{"x":1545,"y":4520,"w":10,"h":10,"abs_x":1545,"abs_y":4563}' icon="lucide:message-circle" width="10"></iconify-icon>
</div>
</button>
</div>
</section>
<footer bis_size='{"x":0,"y":4638,"w":2535,"h":358,"abs_x":0,"abs_y":4681}' className="bg-neutral-950 border-white/10 border-t pt-16 pb-8">
<div bis_size='{"x":627,"y":4703,"w":1280,"h":261,"abs_x":627,"abs_y":4746}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":651,"y":4703,"w":1232,"h":156,"abs_x":651,"abs_y":4746}' className="grid md:grid-cols-2 gap-12 mb-12">
<div bis_size='{"x":651,"y":4703,"w":592,"h":156,"abs_x":651,"abs_y":4746}' className="">
<div bis_size='{"x":651,"y":4703,"w":592,"h":48,"abs_x":651,"abs_y":4746}' className="flex items-center gap-2 mb-6">
<img alt="Laser Stamp Co" bis_size='{"x":651,"y":4703,"w":160,"h":48,"abs_x":651,"abs_y":4746}' className="aspect-[10/3] group-hover:opacity-100 transition opacity-90 w-auto h-12 object-contain rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f0b0144-42e9-4a63-b8f6-06b2899c7ed4_320w.png" style={{}}/>
<span bis_size='{"x":819,"y":4727,"w":0,"h":0,"abs_x":819,"abs_y":4770}' className="uppercase text-sm font-semibold text-white tracking-tight"></span>
</div>
<p bis_size='{"x":651,"y":4775,"w":592,"h":40,"abs_x":651,"abs_y":4818}' className="text-sm text-neutral-500 mb-6">
                    Вільно звертайтесь по будь-якому питанню в наші соціальні
                    мережі. Вироби надсилаємо з міста Черкаси.
                  </p>
<a bis_size='{"x":651,"y":4839,"w":592,"h":20,"abs_x":651,"abs_y":4882}' className="text-sm font-medium text-white hover:text-red-500 transition flex items-center gap-2" href="mailto:laser.stamp.co@gmail.com">
<iconify-icon bis_size='{"x":651,"y":4841,"w":16,"h":16,"abs_x":651,"abs_y":4884}' icon="lucide:mail" width="16"></iconify-icon>
                    laser.stamp.co@gmail.com
                  </a>
</div>
<div bis_size='{"x":1291,"y":4703,"w":592,"h":156,"abs_x":1291,"abs_y":4746}' className="flex flex-col md:items-end justify-center">
<div bis_size='{"x":1731,"y":4761,"w":152,"h":40,"abs_x":1731,"abs_y":4804}' className="flex gap-4">
<a bis_size='{"x":1731,"y":4761,"w":40,"h":40,"abs_x":1731,"abs_y":4804}' className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition" href="https://www.instagram.com/laser.stamp.co" target="_blank">
<iconify-icon bis_size='{"x":1742,"y":4772,"w":18,"h":18,"abs_x":1742,"abs_y":4815}' icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a bis_size='{"x":1787,"y":4761,"w":40,"h":40,"abs_x":1787,"abs_y":4804}' className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition" href="https://t.me/laser_stamps_co" target="_blank">
<iconify-icon bis_size='{"x":1798,"y":4772,"w":18,"h":18,"abs_x":1798,"abs_y":4815}' icon="lucide:send" width="18"></iconify-icon>
</a>
<a bis_size='{"x":1843,"y":4761,"w":40,"h":40,"abs_x":1843,"abs_y":4804}' className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-blue-700 hover:border-blue-700 transition" href="https://www.facebook.com/laser.ck.ua" target="_blank">
<iconify-icon bis_size='{"x":1854,"y":4772,"w":18,"h":18,"abs_x":1854,"abs_y":4815}' icon="lucide:facebook" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
<div bis_size='{"x":651,"y":4907,"w":1232,"h":57,"abs_x":651,"abs_y":4950}' className="md:text-left text-center border-white/10 border-t pt-8">
<span bis_size='{"x":651,"y":4946,"w":263,"h":15,"abs_x":651,"abs_y":4989}' className="text-xs text-neutral-600">
                  © 2025 Laser Stamp Co. Усі права захищено.
                </span>
</div>
</div>
</footer>
</div>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="fade-in hidden" id="page-milling">

<section bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="relative min-h-[100dvh] flex flex-col z-0 bg-neutral-900 pt-40 pb-20">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-center mb-16">
<h1 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
                Сфери Застосування
              </h1>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
                Високоточні магнієві кліше для будь-яких завдань. Від
                відновлення салонів авто до брендування шкіряних виробів.
              </p>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex flex-col gap-12 w-full">

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="rounded-3xl bg-black/50 border border-white/5 hover:border-red-500/30 transition group grid lg:grid-cols-2 gap-8 items-center p-6 md:p-8">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex flex-col h-full justify-center">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-4 mb-6">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-12 h-12 rounded-full bg-red-900/20 text-red-500 flex items-center justify-center shrink-0">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:car" width="24"></iconify-icon>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
<h3 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-2xl font-bold text-white">
                        Автомобільна
                      </h3>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm text-neutral-500">
                        Airbag, кермо, салон
                      </p>
</div>
</div>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-400 mb-8 leading-relaxed">
                    Відновлення заводського тиснення (значків) на кермі та
                    панелі. Висока точність відповідності оригіналам для
                    професійної реставрації салону авто.
                  </p>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="mt-auto">
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-lg font-medium text-white mb-4">
                      Вартість кліше від
                      <span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-red-500">
                        200 грн
                      </span>
                      до
                      <span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-red-500">
                        500 грн
                      </span>
</p>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition shadow-[0_0_15px_rgba(220,38,38,0.4)] flex items-center gap-2 w-full sm:w-auto justify-center" onclick="openAssortment()">
                      Переглянути асортимент
                      <iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:grid" width="18"></iconify-icon>
</button>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="grid grid-cols-2 gap-3">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="aspect-[4/3] overflow-hidden rounded-lg relative">
<img alt="Car Interior" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500 cursor-zoom-in" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="aspect-[4/3] overflow-hidden rounded-lg relative">
<img alt="Airbag Stamp" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500 cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="aspect-[4/3] overflow-hidden rounded-lg relative">
<img alt="Steering Wheel" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500 cursor-zoom-in" src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="aspect-[4/3] overflow-hidden rounded-lg relative">
<img alt="SRS Detail" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500 cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{}}/>
</div>
</div>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="p-8 rounded-3xl bg-black/50 border border-white/5 hover:border-red-500/30 transition group grid lg:grid-cols-2 gap-8 items-center p-6 md:p-8">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex flex-col h-full justify-center order-2 lg:order-1">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-4 mb-6">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-12 h-12 rounded-full bg-white/5 text-white flex items-center justify-center shrink-0">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:briefcase" width="24"></iconify-icon>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
<h3 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-2xl font-bold text-white">
                        Брендування
                      </h3>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm text-neutral-500">
                        Логотипи, гаманці, крафт
                      </p>
</div>
</div>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-400 leading-relaxed">
                    Індивідуальні кліше для тиснення вашого логотипу на шкірі,
                    дереві, картоні та інших матеріалах. Створення унікального
                    стилю для вашої продукції.
                  </p>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="mt-6">
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-lg font-medium text-white mb-4">
                      Вартість: від
                      <span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-red-500">
                        340 грн
                      </span>
</p>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition shadow-[0_0_15px_rgba(220,38,38,0.4)] flex items-center gap-2 w-full sm:w-auto justify-center mb-3" onclick="openBrandingCalculator()">
                      Розрахувати вартість
                      <iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:calculator" width="18"></iconify-icon>
</button>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xs text-neutral-500">
                      *Ціна індивідуальна, залежить від площі та складності.
                    </p>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="grid grid-cols-2 gap-3 order-1 lg:order-2">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="aspect-[4/3] overflow-hidden rounded-lg relative">
<img alt="Stamp" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500 cursor-zoom-in" src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="aspect-[4/3] overflow-hidden rounded-lg relative">
<img alt="Milling" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500 cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="aspect-[4/3] overflow-hidden rounded-lg relative">
<img alt="Press" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500 cursor-zoom-in" src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="aspect-[4/3] overflow-hidden rounded-lg relative">
<img alt="Handle" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500 cursor-zoom-in" src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="mt-12 text-center animate-bounce text-neutral-600">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:arrow-down" width="24"></iconify-icon>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="relative min-h-[100dvh] flex flex-col z-10 bg-neutral-900 border-t border-white/10 shadow-[0_-50px_100px_rgba(0,0,0,0.7)] pt-32 pb-20">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-center mb-16">
<h2 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-4xl font-semibold text-white mb-4">
                Опції кріплення
              </h2>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-400">
                Підберемо зручний формат під ваше обладнання або ручне
                використання.
              </p>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="grid md:grid-cols-3 gap-6">

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-black cursor-pointer">
<img alt="Press" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition duration-700 cursor-zoom-in" src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end transition-transform duration-500 group-hover:translate-y-full">
<h3 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition">
                    Під прес
                  </h3>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm text-neutral-400">
                    Плоска основа для термопресу. Фіксація на термоскотч або
                    клей.
                  </p>
</div>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-black cursor-pointer">
<img alt="Handle" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition duration-700 cursor-zoom-in" src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end transition-transform duration-500 group-hover:translate-y-full">
<h3 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition">
                    З Рукояткою
                  </h3>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm text-neutral-400">
                    Дерев'яний тримач для ручного відбитка (холодне
                    тиснення/удар).
                  </p>
</div>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-black cursor-pointer">
<img alt="Soldering" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition duration-700 cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{}}/>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end transition-transform duration-500 group-hover:translate-y-full">
<h3 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition">
                    Під тремопрес або ручний паяльник
                  </h3>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm text-neutral-400">
                    Адаптер з різьбою M4, M6, M8 або індивідуальний шток під
                    ваше кліше.
                  </p>
</div>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="mt-12 text-center">
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-full transition shadow-[0_0_20px_rgba(220,38,38,0.4)] uppercase text-sm tracking-wider" onclick="openBrandingCalculator()">
                Розрахувати вартість кліше
              </button>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="relative min-h-[100dvh] flex flex-col z-20 bg-black border-t border-white/10 shadow-[0_-50px_100px_rgba(0,0,0,0.7)] pt-32 pb-20">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="grid lg:grid-cols-2 gap-16 items-center">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
<h2 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-4xl md:text-5xl font-semibold text-white mb-8">
                  Технічні переваги
                </h2>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="space-y-6 text-neutral-400 text-lg leading-relaxed">
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
                    Ми використовуємо механічне фрезерування на станках з ЧПК,
                    що забезпечує ідеальний профіль "плеча" (конусність) для
                    чіткого відбитка.
                  </p>
<ul bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="space-y-6 mt-8">
<li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex gap-4 items-start">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-8 h-8 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:check" width="16"></iconify-icon>
</span>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
                          Легке виймання кліше з матеріалу без деформації країв
                          відбитка.
                        </span>
</div>
</li>
<li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex gap-4 items-start">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-8 h-8 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:maximize" width="16"></iconify-icon>
</span>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
                          Стандарт 2-3 мм, можливе заглиблення до 5 мм для
                          товстої шкіри.
                        </span>
</div>
</li>
<li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex gap-4 items-start">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-8 h-8 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:flame" width="16"></iconify-icon>
</span>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
                          Магнієвий сплав витримує понад 5000 циклів гарячого
                          тиснення (до 200°C).
                        </span>
</div>
</li>
</ul>
</div>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="bg-neutral-900 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-red-500/30 transition">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute top-0 right-0 p-32 bg-red-600/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-red-600/10 transition duration-700"></div>
<h3 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-red-500" icon="lucide:file-check"></iconify-icon>
                  Вимоги до макету
                </h3>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="space-y-2 mb-8">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-300">
                      Формат
                    </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="font-mono text-red-400 bg-red-900/10 px-2 py-1 rounded text-xs">
                      CDR, AI, EPS
                    </span>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-300">
                      Масштаб
                    </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="font-mono text-white text-sm">
                      1:1
                    </span>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-300">
                      Мінімальна лінія
                    </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="font-mono text-white text-sm">
                      0.2 мм
                    </span>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-300">
                      Шрифти
                    </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xs text-neutral-400 text-right">
                      Тільки в кривих (Curves)
                    </span>
</div>
</div>
<img alt="Приклад макету" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full h-60 object-cover rounded-xl border border-white/10 shadow-lg opacity-80 hover:opacity-100 transition-opacity duration-500 cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</div>
</section>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="fade-in hidden pt-24 bg-neutral-900" id="page-engraving">
<section className="relative min-h-[100dvh] flex flex-col z-0 bg-neutral-900 pt-32 pb-20">
<div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center">
<div className="text-center mb-16">
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
                Ювелірна точність лазера
              </h1>
<p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
                Маркування металу, сувенірів, шильд. Текст висотою від 0.5 мм.
              </p>
</div>
<div className="flex flex-col gap-12 w-full">

<section className="py-16 px-6 md:p-12 rounded-3xl bg-black border border-white/10 transition-all duration-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.2)] hover:border-red-500/50 relative overflow-hidden group w-full">
<h2 className="text-3xl font-semibold text-white mb-8">
                  Галерея застосування
                </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="group/img relative aspect-square rounded-lg bg-neutral-900 border border-white/10 overflow-hidden cursor-pointer" onclick="openLightbox(this.querySelector('img').src)">
<img alt="Промислове маркування" className="w-full h-full object-cover group-hover/img:scale-110 transition duration-700 opacity-60 group-hover/img:opacity-100 cursor-zoom-in" src="https://images.unsplash.com/photo-1635350736475-c8cef4b21906?q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 p-4 w-full pointer-events-none">
<div className="flex items-center gap-2 mb-1 text-white group-hover/img:text-red-500 transition-colors">
<iconify-icon icon="lucide:factory" width="16"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">
                          Промисловість
                        </span>
</div>
<p className="text-[10px] text-neutral-400">
                        Технічні шильди, панелі
                      </p>
</div>
</div>
<div className="group/img relative aspect-square rounded-lg bg-neutral-900 border border-white/10 overflow-hidden cursor-pointer" onclick="openLightbox(this.querySelector('img').src)">
<img alt="Бізнес сувеніри" className="w-full h-full object-cover group-hover/img:scale-110 transition duration-700 opacity-60 group-hover/img:opacity-100 cursor-zoom-in" src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 p-4 w-full pointer-events-none">
<div className="flex items-center gap-2 mb-1 text-white group-hover/img:text-red-500 transition-colors">
<iconify-icon icon="lucide:briefcase" width="16"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">
                          Бізнес
                        </span>
</div>
<p className="text-[10px] text-neutral-400">
                        Ручки, флешки, візитниці
                      </p>
</div>
</div>
<div className="group/img relative aspect-square rounded-lg bg-neutral-900 border border-white/10 overflow-hidden cursor-pointer" onclick="openLightbox(this.querySelector('img').src)">
<img alt="Ювелірне гравіювання" className="w-full h-full object-cover group-hover/img:scale-110 transition duration-700 opacity-60 group-hover/img:opacity-100 cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 p-4 w-full pointer-events-none">
<div className="flex items-center gap-2 mb-1 text-white group-hover/img:text-red-500 transition-colors">
<iconify-icon icon="lucide:gem" width="16"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">
                          Ювелірка
                        </span>
</div>
<p className="text-[10px] text-neutral-400">
                        Каблучки, кулони, годинники
                      </p>
</div>
</div>
<div className="group/img relative aspect-square rounded-lg bg-neutral-900 border border-white/10 overflow-hidden cursor-pointer" onclick="openLightbox(this.querySelector('img').src)">
<img alt="3D Гравіювання" className="w-full h-full object-cover group-hover/img:scale-110 transition duration-700 opacity-60 group-hover/img:opacity-100 cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 p-4 w-full pointer-events-none">
<div className="flex items-center gap-2 mb-1 text-white group-hover/img:text-red-500 transition-colors">
<iconify-icon icon="lucide:layers" width="16"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">
                          3D Гравіювання
                        </span>
</div>
<p className="text-[10px] text-neutral-400">
                        Глибоке рельєфне нанесення
                      </p>
</div>
</div>
</div>
</section>

<section className="p-0 rounded-3xl bg-black border border-white/10 transition-all duration-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.2)] hover:border-red-500/50 relative overflow-hidden group w-full flex flex-col md:flex-row">
<div className="bg-neutral-900/50 md:w-1/3 min-h-[300px] relative group/img overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
<img alt="Армійський жетон" className="w-full h-full object-cover opacity-80 group-hover/img:opacity-100 transition duration-500 cursor-zoom-in scale-100 group-hover/img:scale-105" src="https://images.unsplash.com/photo-1611095973763-414019e72400?q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-[0_0_10px_rgba(220,38,38,0.5)] z-10 pointer-events-none">
                    Top Seller
                  </div>
</div>
<div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
<h2 className="text-3xl font-semibold text-white mb-4">
                    Жетон армійський
                  </h2>
<p className="text-neutral-400 mb-8 max-w-lg leading-relaxed">
                    Нова компактна версія військового жетону. Може бути
                    розломана на дві половини. Обсяги постачання – 300 шт/доба.
                  </p>
<div className="grid sm:grid-cols-2 gap-8 mb-8">
<div>
<h4 className="text-xs font-bold text-white uppercase tracking-wide mb-3">
                        Технічні дані
                      </h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li className="flex justify-between border-b border-white/5 pb-1">
<span>Матеріал</span>
<span className="font-medium text-white">
                            Нержавіюча сталь (матова)
                          </span>
</li>
<li className="flex justify-between border-b border-white/5 pb-1">
<span>Розмір</span>
<span className="font-medium text-white">
                            50.0 х 29.0 х 1.0 мм
                          </span>
</li>
<li className="flex justify-between border-b border-white/5 pb-1">
<span>Глибина</span>
<span className="font-medium text-white">0.05 мм</span>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-white uppercase tracking-wide mb-3">
                        Інформація на жетоні
                      </h4>
<ol className="list-decimal list-inside space-y-1 text-xs text-neutral-500">
<li>Прізвище Ім'я По-батькові</li>
<li>Код ІПН</li>
<li>Група крові</li>
<li>ЗСУ (Герб) або інше</li>
</ol>
<p className="text-[10px] text-neutral-600 mt-2">
                        *Дзеркальне дублювання на звороті
                      </p>
</div>
</div>
<button className="w-full bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-white font-bold py-4 rounded-xl transition flex items-center justify-between px-6 group/btn" onclick="openCalculator()">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.4)] group-hover/btn:scale-110 transition">
<iconify-icon icon="lucide:calculator" width="24"></iconify-icon>
</div>
<div className="text-left">
<span className="block text-base font-bold text-white">
                          Розрахувати вартість
                        </span>
<span className="block text-xs text-neutral-400 group-hover/btn:text-neutral-300 transition">
                          Калькулятор ціни та комплектації
                        </span>
</div>
</div>
<div className="bg-white/10 rounded-full p-2 group-hover/btn:bg-white/20 transition">
<iconify-icon className="text-neutral-300 group-hover/btn:text-white" icon="lucide:chevron-right" width="20"></iconify-icon>
</div>
</button>
</div>
</section>

<section className="py-16 px-6 md:p-12 rounded-3xl bg-black border border-white/10 transition-all duration-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.2)] hover:border-red-500/50 relative overflow-hidden group w-full">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-semibold text-white mb-6">
                      Таблиці та шкали
                    </h2>
<p className="text-neutral-400 mb-8 leading-relaxed">
                      Інформаційні, технологічні шильди, бейджики, бірки, шкали,
                      бренди, вимірювальні прилади, штрих-коди, QR коди.
                      Нанесення як векторних, так і растрових зображень.
                    </p>
<div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
<ul className="space-y-3 text-sm text-neutral-400">
<li className="flex justify-between items-center">
<span className="flex items-center gap-2">
<iconify-icon className="text-red-500" icon="lucide:check"></iconify-icon>
                            Мінімальна лінія
                          </span>
<span className="text-white font-mono">0.08 мм</span>
</li>
<li className="flex justify-between items-center">
<span className="flex items-center gap-2">
<iconify-icon className="text-red-500" icon="lucide:check"></iconify-icon>
                            Серійні номери
                          </span>
<span className="text-white">Наскрізна нумерація</span>
</li>
<li className="flex justify-between items-center pt-2 border-t border-white/5">
<span className="text-white font-medium">
                            Вартість замовлення
                          </span>
<span className="text-white font-bold">від 500 грн</span>
</li>
</ul>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<img className="rounded-xl h-48 w-full object-cover border border-white/10 cursor-zoom-in" onclick="openLightbox(this.src)" src="https://images.unsplash.com/photo-1635350736475-c8cef4b21906?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img className="rounded-xl h-48 w-full object-cover border border-white/10 cursor-zoom-in" onclick="openLightbox(this.src)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-16 px-6 md:p-12 rounded-3xl bg-black border border-white/10 transition-all duration-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.2)] hover:border-red-500/50 relative overflow-hidden group w-full">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
<img className="rounded-xl h-48 w-full object-cover border border-white/10 cursor-zoom-in bg-white/5" onclick="openLightbox(this.src)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f0b0144-42e9-4a63-b8f6-06b2899c7ed4_320w.png"/>
<img className="rounded-xl h-48 w-full object-cover border border-white/10 cursor-zoom-in" onclick="openLightbox(this.src)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl font-semibold text-white mb-6">
                      Ударні клейма
                    </h2>
<p className="text-neutral-400 mb-8 leading-relaxed">
                      Використовується для клеймування деревини, металів. Ударна
                      частина проходить процес загартування для підвищеної
                      стійкості. Висока деталізація відбитків завдяки лазеру.
                    </p>
<div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
<ul className="space-y-3 text-sm text-neutral-400">
<li className="flex justify-between items-center">
<span className="flex items-center gap-2">
<iconify-icon className="text-red-500" icon="lucide:check"></iconify-icon>
                            Глибина
                          </span>
<span className="text-white font-mono">до 1.5 мм</span>
</li>
<li className="flex justify-between items-center">
<span className="flex items-center gap-2">
<iconify-icon className="text-red-500" icon="lucide:check"></iconify-icon>
                            Стійкість
                          </span>
<span className="text-white">Загартована сталь</span>
</li>
<li className="flex justify-between items-center pt-2 border-t border-white/5">
<span className="text-white font-medium">Вартість</span>
<span className="text-white font-bold">від 400 грн</span>
</li>
</ul>
</div>
</div>
</div>
</section>
</div>
</div>
</section>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="fade-in hidden pt-24 bg-neutral-900" id="page-vectorization">
<section bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="relative min-h-[100dvh] flex flex-col z-0 bg-neutral-900 pt-32 pb-20">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-center mb-16">
<h1 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
                Векторизація та Дизайн
              </h1>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
                Професійна підготовка макетів для виробництва. Від відновлення
                старих логотипів до створення нових за допомогою штучного
                інтелекту.
              </p>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex flex-col gap-12 w-full">

<section bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="py-16 px-6 md:p-12 rounded-3xl bg-black border border-white/10 transition-all duration-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.2)] hover:border-red-500/50 relative overflow-hidden group w-full">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="max-w-7xl mx-auto">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="grid lg:grid-cols-2 gap-16 items-start mb-12">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-900/10 text-xs font-medium text-red-400 mb-6">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                        Популярна послуга
                      </div>
<h2 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-3xl font-semibold text-white mb-6">
                        Векторизація растрової фотографії
                      </h2>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-400 mb-6 leading-relaxed">
                        Перетворення неякісних зображень, фотографій, скан-копій
                        або ескізів від руки у чистий векторний формат (криві),
                        необхідний для кліше та гравіювання.
                      </p>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="bg-neutral-900/50 rounded-xl p-6 border border-white/5">
<h4 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm font-bold text-white mb-3 flex items-center gap-2">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-400" icon="lucide:image"></iconify-icon>
                          Приклади вхідних файлів:
                        </h4>
<ul bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-sm text-neutral-500">
<li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-2">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-1 h-1 bg-red-500 rounded-full"></span>
                            Фото логотипу на візитці
                          </li>
<li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-2">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-1 h-1 bg-red-500 rounded-full"></span>
                            Ескіз на серветці/папері
                          </li>
<li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-2">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-1 h-1 bg-red-500 rounded-full"></span>
                            Скріншот з екрану
                          </li>
</ul>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="relative pt-4">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute left-4 top-4 bottom-4 w-px bg-white/10"></div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="space-y-10 relative">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex gap-6 group">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="relative z-10 w-8 h-8 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center shrink-0 group-hover:border-white transition">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xs font-mono text-neutral-500 group-hover:text-white">
                              1
                            </span>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
<h4 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-white font-medium">
                              Зображення замовника
                            </h4>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm text-neutral-500 mt-1">
                              Ви надсилаєте нам вихідне фото, скан або малюнок.
                            </p>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex gap-6 group">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="relative z-10 w-8 h-8 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center shrink-0 group-hover:border-white transition">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xs font-mono text-neutral-500 group-hover:text-white">
                              2
                            </span>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
<h4 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-white font-medium">
                              Результат векторизації
                            </h4>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm text-neutral-500 mt-1">
                              Ручне відмальовування контурів для максимальної
                              точності.
                            </p>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex gap-6 group">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="relative z-10 w-8 h-8 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center shrink-0 group-hover:border-white transition">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xs font-mono text-neutral-500 group-hover:text-white">
                              3
                            </span>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
<h4 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-white font-medium">
                              Макет візуалізації
                            </h4>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm text-neutral-500 mt-1">
                              Демонстрація та погодження вигляду.
                            </p>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex gap-6 group">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="relative z-10 w-8 h-8 rounded-full bg-red-600 border border-red-500 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(220,38,38,0.5)]">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-white" icon="lucide:check" width="14"></iconify-icon>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
<h4 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-white font-medium">
                              Готовий виріб
                            </h4>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm text-neutral-500 mt-1">
                              Векторний файл готовий до запуску на станку.
                            </p>
</div>
</div>
</div>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full mb-10">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="relative group">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="aspect-square rounded-lg border border-white/10 bg-black overflow-hidden relative">
<img alt="Source" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition grayscale cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f0b0144-42e9-4a63-b8f6-06b2899c7ed4_320w.png" style={{}}/>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm border border-white/10 text-[10px] text-white px-2 py-1 rounded-full">
                              Скан
                            </span>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-6 h-6 bg-neutral-900 rounded-full border border-white/20 text-neutral-500 shadow-xl">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="relative group">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="aspect-square rounded-lg border border-white/10 bg-black overflow-hidden relative">
<img alt="Process" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm border border-white/10 text-[10px] text-white px-2 py-1 rounded-full">
                              Контур
                            </span>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-6 h-6 bg-neutral-900 rounded-full border border-white/20 text-neutral-500 shadow-xl">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="relative group">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="aspect-square rounded-lg border border-white/10 bg-black overflow-hidden relative">
<img alt="Vector" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm border border-white/10 text-[10px] text-white px-2 py-1 rounded-full">
                              Вектор
                            </span>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-6 h-6 bg-neutral-900 rounded-full border border-white/20 text-neutral-500 shadow-xl">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="relative group">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="aspect-square rounded-lg border border-white/10 bg-black overflow-hidden relative">
<img alt="Result" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{}}/>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm border border-white/10 text-[10px] text-white px-2 py-1 rounded-full">
                              Кліше
                            </span>
</div>
</div>
</div>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center justify-between bg-neutral-900/50 border border-white/10 rounded-xl p-6 hover:border-red-500 transition duration-300">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="block text-xs text-neutral-500 mb-1">
                        Вартість послуги
                      </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-2xl font-bold text-white">
                        від 200 грн
                      </span>
</div>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="bg-white hover:bg-neutral-200 text-black px-6 py-3 rounded-lg text-sm font-bold transition flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]" onclick="openContactModal()">
                      Замовити векторизацію
                      <iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="py-16 px-6 md:p-12 rounded-3xl bg-black border border-white/10 transition-all duration-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.2)] hover:border-red-500/50 relative overflow-hidden group w-full">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full">
<h2 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-3xl font-semibold text-white mb-4">
                    Створення логотипу за допомогою ШІ
                  </h2>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-400 mb-8 leading-relaxed">
                    Кейс з матрицею: від генерації ідеї до фізичного відбитка.
                    Повний цикл створення унікального брендингу.
                  </p>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="grid md:grid-cols-3 gap-8 mb-12">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex gap-4">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="mt-1 w-10 h-10 rounded-lg bg-purple-900/20 border border-purple-500/30 flex items-center justify-center shrink-0 text-purple-400">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:sparkles" width="20"></iconify-icon>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
<h4 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-white font-bold text-sm mb-1 uppercase tracking-wide">
                          Логотип згенерований ШІ
                        </h4>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm text-neutral-400 leading-relaxed">
                          AI створює кілька варіантів логотипу під запит (назва,
                          стиль, 3D/метал), після чого обраний варіант спрощують
                          до чистого монохромного знаку під штамп.
                        </p>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex gap-4">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="mt-1 w-10 h-10 rounded-lg bg-blue-900/20 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:binary" width="20"></iconify-icon>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
<h4 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-white font-bold text-sm mb-1 uppercase tracking-wide">
                          Програмування матриці
                        </h4>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm text-neutral-400 leading-relaxed">
                          Логотип переводять у вектор, задають глибину рельєфу
                          та дзеркальне відображення, готуючи файл для ЧПУ чи
                          лазерного гравіювання металевої матриці.
                        </p>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex gap-4">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="mt-1 w-10 h-10 rounded-lg bg-red-900/20 border border-red-500/30 flex items-center justify-center shrink-0 text-red-400">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:stamp" width="20"></iconify-icon>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
<h4 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-white font-bold text-sm mb-1 uppercase tracking-wide">
                          Фінальний відбиток
                        </h4>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm text-neutral-400 leading-relaxed">
                          Матрицю ставлять у прес і підбирають тиск та
                          температуру, щоб отримати чіткий рельєфний відтиск
                          логотипу на шкірі чи іншому матеріалі.
                        </p>
</div>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="mb-12">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="grid md:grid-cols-3 gap-6 mb-6">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="relative group">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-black relative">
<img alt="AI Generation" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-700 cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-purple-300 border border-purple-500/30">
                            AI GEN
                          </div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute -right-7 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-8 h-8 bg-neutral-900 rounded-full border border-white/20 text-neutral-500 shadow-xl">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="relative group">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-black relative">
<img alt="Matrix Programming" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-700 cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-blue-300 border border-blue-500/30">
                            MATRIX
                          </div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute -right-7 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-8 h-8 bg-neutral-900 rounded-full border border-white/20 text-neutral-500 shadow-xl">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="relative group">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-black relative">
<img alt="Final Result" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-700 cursor-zoom-in" src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&amp;w=400"/>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-red-300 border border-red-500/30">
                            STAMP
                          </div>
</div>
</div>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center justify-between bg-neutral-900/50 border border-white/10 rounded-xl p-6 hover:border-red-500 transition duration-300">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="block text-xs text-neutral-500 mb-1">
                        Вартість послуги
                      </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-2xl font-bold text-white">
                        від 400 грн
                      </span>
</div>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="bg-white hover:bg-neutral-200 text-black px-6 py-3 rounded-lg text-sm font-bold transition flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]" onclick="openContactModal()">
                      Обговорити проект
                      <iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</section>
</div>
</div>
</section>
</div>

<div className="fade-in hidden pt-24 bg-neutral-900" id="page-gallery">
<section className="relative min-h-[100dvh] flex flex-col z-0 bg-neutral-900 pt-32 pb-20">
<div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center">
<div className="text-center mb-16">
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
                Галерея Робіт
              </h1>
<p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
                Візуалізація якості та точності. Реальні фотографії готових
                замовлень.
              </p>
</div>
<div className="mb-20">
<div className="flex flex-wrap items-center justify-between mb-8 pl-4 border-l-4 border-red-600 gap-4">
<h2 className="text-2xl font-bold text-white">Кліше для шкіри</h2>
<button className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition text-xs font-medium text-neutral-400 hover:text-white uppercase tracking-wider" onclick="openGalleryGrid('leather')">
<iconify-icon icon="lucide:grid-3x3" width="16"></iconify-icon>
<span>Всі фото</span>
</button>
</div>
<div className="marquee-wrapper">
<div className="marquee-track marquee-left">
<img alt="Магнієве кліше" className="gallery-img" data-gallery="leather" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Відбиток на шкірі" className="gallery-img" data-gallery="leather" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&amp;w=600"/>
<img alt="Деталізація" className="gallery-img" data-gallery="leather" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Гаряче тиснення" className="gallery-img" data-gallery="leather" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&amp;w=400"/>
<img alt="Магнієве кліше" className="gallery-img" data-gallery="leather" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Відбиток на шкірі" className="gallery-img" data-gallery="leather" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&amp;w=600"/>
<img alt="Деталізація" className="gallery-img" data-gallery="leather" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Гаряче тиснення" className="gallery-img" data-gallery="leather" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&amp;w=400"/>
<img alt="Магнієве кліше" className="gallery-img" data-gallery="leather" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Відбиток на шкірі" className="gallery-img" data-gallery="leather" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&amp;w=600"/>
<img alt="Деталізація" className="gallery-img" data-gallery="leather" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Гаряче тиснення" className="gallery-img" data-gallery="leather" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&amp;w=400"/>
<img alt="Магнієве кліше" className="gallery-img" data-gallery="leather" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Відбиток на шкірі" className="gallery-img" data-gallery="leather" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&amp;w=600"/>
<img alt="Деталізація" className="gallery-img" data-gallery="leather" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Гаряче тиснення" className="gallery-img" data-gallery="leather" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&amp;w=400"/>
</div>
</div>
</div>
<div className="mb-20">
<div className="flex flex-wrap items-center justify-between mb-8 pl-4 border-l-4 border-red-600 gap-4">
<h2 className="text-2xl font-bold text-white">SRS Airbag</h2>
<button className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition text-xs font-medium text-neutral-400 hover:text-white uppercase tracking-wider" onclick="openGalleryGrid('airbag')">
<iconify-icon icon="lucide:grid-3x3" width="16"></iconify-icon>
<span>Всі фото</span>
</button>
</div>
<div className="marquee-wrapper">
<div className="marquee-track marquee-right">
<img alt="Відновлення Airbag" className="gallery-img" data-gallery="airbag" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img alt="Horn значок" className="gallery-img bg-white/5" data-gallery="airbag" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f0b0144-42e9-4a63-b8f6-06b2899c7ed4_320w.png"/>
<img alt="Салон авто" className="gallery-img" data-gallery="airbag" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&amp;w=600"/>
<img alt="Тиснення SRS" className="gallery-img" data-gallery="airbag" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Відновлення Airbag" className="gallery-img" data-gallery="airbag" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img alt="Horn значок" className="gallery-img bg-white/5" data-gallery="airbag" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f0b0144-42e9-4a63-b8f6-06b2899c7ed4_320w.png"/>
<img alt="Салон авто" className="gallery-img" data-gallery="airbag" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&amp;w=600"/>
<img alt="Тиснення SRS" className="gallery-img" data-gallery="airbag" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Відновлення Airbag" className="gallery-img" data-gallery="airbag" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img alt="Horn значок" className="gallery-img bg-white/5" data-gallery="airbag" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f0b0144-42e9-4a63-b8f6-06b2899c7ed4_320w.png"/>
<img alt="Салон авто" className="gallery-img" data-gallery="airbag" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&amp;w=600"/>
<img alt="Тиснення SRS" className="gallery-img" data-gallery="airbag" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Відновлення Airbag" className="gallery-img" data-gallery="airbag" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img alt="Horn значок" className="gallery-img bg-white/5" data-gallery="airbag" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f0b0144-42e9-4a63-b8f6-06b2899c7ed4_320w.png"/>
<img alt="Салон авто" className="gallery-img" data-gallery="airbag" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&amp;w=600"/>
<img alt="Тиснення SRS" className="gallery-img" data-gallery="airbag" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
<div className="mb-20">
<div className="flex flex-wrap items-center justify-between mb-8 pl-4 border-l-4 border-red-600 gap-4">
<h2 className="text-2xl font-bold text-white">Гравіювання</h2>
<button className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition text-xs font-medium text-neutral-400 hover:text-white uppercase tracking-wider" onclick="openGalleryGrid('engraving')">
<iconify-icon icon="lucide:grid-3x3" width="16"></iconify-icon>
<span>Всі фото</span>
</button>
</div>
<div className="marquee-wrapper">
<div className="marquee-track marquee-left">
<img alt="Ювелірне гравіювання" className="gallery-img" data-gallery="engraving" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<img alt="Промислове маркування" className="gallery-img" data-gallery="engraving" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1635350736475-c8cef4b21906?q=80&amp;w=600"/>
<img alt="Жетони" className="gallery-img" data-gallery="engraving" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1611095973763-414019e72400?q=80&amp;w=800"/>
<img alt="Метал" className="gallery-img" data-gallery="engraving" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Ювелірне гравіювання" className="gallery-img" data-gallery="engraving" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<img alt="Промислове маркування" className="gallery-img" data-gallery="engraving" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1635350736475-c8cef4b21906?q=80&amp;w=600"/>
<img alt="Жетони" className="gallery-img" data-gallery="engraving" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1611095973763-414019e72400?q=80&amp;w=800"/>
<img alt="Метал" className="gallery-img" data-gallery="engraving" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Ювелірне гравіювання" className="gallery-img" data-gallery="engraving" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<img alt="Промислове маркування" className="gallery-img" data-gallery="engraving" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1635350736475-c8cef4b21906?q=80&amp;w=600"/>
<img alt="Жетони" className="gallery-img" data-gallery="engraving" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1611095973763-414019e72400?q=80&amp;w=800"/>
<img alt="Метал" className="gallery-img" data-gallery="engraving" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Ювелірне гравіювання" className="gallery-img" data-gallery="engraving" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<img alt="Промислове маркування" className="gallery-img" data-gallery="engraving" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1635350736475-c8cef4b21906?q=80&amp;w=600"/>
<img alt="Жетони" className="gallery-img" data-gallery="engraving" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1611095973763-414019e72400?q=80&amp;w=800"/>
<img alt="Метал" className="gallery-img" data-gallery="engraving" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
<div className="mb-20">
<div className="flex flex-wrap items-center justify-between mb-8 pl-4 border-l-4 border-red-600 gap-4">
<h2 className="text-2xl font-bold text-white">Брендування</h2>
<button className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition text-xs font-medium text-neutral-400 hover:text-white uppercase tracking-wider" onclick="openGalleryGrid('branding')">
<iconify-icon icon="lucide:grid-3x3" width="16"></iconify-icon>
<span>Всі фото</span>
</button>
</div>
<div className="marquee-wrapper">
<div className="marquee-track marquee-right">
<img alt="Дизайн та Візуалізація" className="gallery-img" data-gallery="branding" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<img alt="Рукоятка для штампа" className="gallery-img" data-gallery="branding" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&amp;w=400"/>
<img alt="Логотипи" className="gallery-img bg-white/5" data-gallery="branding" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f0b0144-42e9-4a63-b8f6-06b2899c7ed4_320w.png"/>
<img alt="Тиснення логотипу" className="gallery-img" data-gallery="branding" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&amp;w=600"/>
<img alt="Дизайн та Візуалізація" className="gallery-img" data-gallery="branding" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<img alt="Рукоятка для штампа" className="gallery-img" data-gallery="branding" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&amp;w=400"/>
<img alt="Логотипи" className="gallery-img bg-white/5" data-gallery="branding" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f0b0144-42e9-4a63-b8f6-06b2899c7ed4_320w.png"/>
<img alt="Тиснення логотипу" className="gallery-img" data-gallery="branding" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&amp;w=600"/>
<img alt="Дизайн та Візуалізація" className="gallery-img" data-gallery="branding" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<img alt="Рукоятка для штампа" className="gallery-img" data-gallery="branding" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&amp;w=400"/>
<img alt="Логотипи" className="gallery-img bg-white/5" data-gallery="branding" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f0b0144-42e9-4a63-b8f6-06b2899c7ed4_320w.png"/>
<img alt="Тиснення логотипу" className="gallery-img" data-gallery="branding" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&amp;w=600"/>
<img alt="Дизайн та Візуалізація" className="gallery-img" data-gallery="branding" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<img alt="Рукоятка для штампа" className="gallery-img" data-gallery="branding" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&amp;w=400"/>
<img alt="Логотипи" className="gallery-img bg-white/5" data-gallery="branding" onclick="openLightbox(this)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f0b0144-42e9-4a63-b8f6-06b2899c7ed4_320w.png"/>
<img alt="Тиснення логотипу" className="gallery-img" data-gallery="branding" onclick="openLightbox(this)" src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&amp;w=600"/>
</div>
</div>
</div>
<div className="mt-20 text-center">
<div className="inline-flex flex-col items-center gap-4">
<p className="text-neutral-500">Більше робіт в нашому Instagram</p>
<a className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full transition-all duration-300" href="https://www.instagram.com/laser.stamp.co" target="_blank">
<div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(219,39,119,0.4)]">
<iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
</div>
<span className="font-bold text-white">@laser.stamp.co</span>
<iconify-icon className="text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
</div>
</section>
</div>
</main>


<div className="fixed inset-0 bg-black/95 hidden flex items-center justify-center backdrop-blur-md opacity-0 transition-all duration-500 select-none z-[200]" id="lightbox" onclick="closeLightbox()">
<button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[120]" onclick="closeLightbox()">
<iconify-icon icon="lucide:x" width="40"></iconify-icon>
</button>
<button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition p-3 bg-black/50 rounded-full z-[120] hover:bg-red-600 hover:text-white hidden" id="lb-prev" onclick="event.stopPropagation(); changeImage(-1)">
<iconify-icon icon="lucide:chevron-left" width="32"></iconify-icon>
</button>
<img className="max-w-[95vw] max-h-[95vh] w-auto h-auto rounded-sm shadow-2xl object-contain scale-95 opacity-0 transition-all duration-300 ease-out" id="lightbox-img" onclick="event.stopPropagation()" src=""/>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full text-white text-sm font-medium tracking-wide max-w-[90vw] text-center z-[110] transition-all duration-300 pointer-events-none shadow-2xl opacity-0 translate-y-4" id="lightbox-caption"></div>
<button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition p-3 bg-black/50 rounded-full z-[120] hover:bg-red-600 hover:text-white hidden" id="lb-next" onclick="event.stopPropagation(); changeImage(1)">
<iconify-icon icon="lucide:chevron-right" width="32"></iconify-icon>
</button>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm hidden flex items-center justify-center opacity-0 transition-all duration-300" id="calculator-modal" onclick="closeCalculator()">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="bg-neutral-950 border border-white/10 rounded-2xl w-full max-w-lg mx-4 relative overflow-hidden shadow-2xl scale-95 transition-all duration-300" id="calculator-content" onclick="event.stopPropagation()">
<button className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-neutral-500 hover:text-white z-20 bg-black/50 rounded-full backdrop-blur-md transition-colors" onclick="closeCalculator()">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</button>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="p-6 md:p-8 relative">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute top-0 right-0 p-32 bg-red-900/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="relative z-10">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex flex-wrap justify-between items-start mb-6 gap-4 pr-8">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-2 mb-1">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xs font-medium text-green-400">
                    В наявності
                  </span>
</div>
<h3 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xl font-semibold text-white">
                  Калькулятор
                </h3>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm text-neutral-500">
                  Оберіть кількість та комплектацію
                </p>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-right">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-3xl font-semibold text-white tracking-tight" id="price-display">
                  60 ₴
                </div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xs text-neutral-500">
                  за 1 шт.
                </div>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="mb-8">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex justify-between text-sm mb-3">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-white font-medium">
                  Кількість:
                  <span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-red-500" id="qty-display">
                    1
                  </span>
                  шт.
                </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-500 text-xs font-mono bg-white/5 px-2 py-0.5 rounded border border-white/5" id="tier-display">
                  1-10 шт
                </span>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="relative w-full h-8 flex items-center">
<input bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-600 hover:accent-red-500 transition-all z-20 relative" id="qty-slider" max="200" min="1" oninput="updateCalculator()" type="range" value="1"/>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute w-full flex justify-between px-2 text-[10px] text-neutral-600 pointer-events-none top-4 mt-2">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
                    1
                  </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
                    100
                  </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
                    200
                  </span>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="grid grid-cols-4 gap-1 mt-6 text-center">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="bg-white/5 rounded p-1 border border-white/5">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-[10px] text-neutral-500">
                    1-10
                  </div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xs font-bold text-white">
                    60 ₴
                  </div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="bg-white/5 rounded p-1 border border-white/5">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-[10px] text-neutral-500">
                    11-30
                  </div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xs font-bold text-white">
                    55 ₴
                  </div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="bg-white/5 rounded p-1 border border-white/5">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-[10px] text-neutral-500">
                    31-99
                  </div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xs font-bold text-white">
                    50 ₴
                  </div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="bg-white/5 rounded p-1 border border-white/5">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-[10px] text-neutral-500">
                    100+
                  </div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xs font-bold text-white">
                    45 ₴
                  </div>
</div>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="space-y-3 mb-8">
<label bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/5 cursor-pointer hover:bg-white/10 transition group/option select-none">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="relative flex items-center">
<input bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="peer sr-only" id="opt-chain" onchange="updateCalculator()" type="checkbox"/>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-5 h-5 border-2 border-neutral-600 rounded peer-checked:bg-red-600 peer-checked:border-red-600 transition flex items-center justify-center">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-white text-[12px] opacity-0 peer-checked:opacity-100" icon="lucide:check" strokeWidth="3"></iconify-icon>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex-1">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm text-white font-medium block">
                    Ланцюжок та скоба
                  </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xs text-neutral-500">
                    Нержавіюча сталь
                  </span>
</div>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm font-semibold text-neutral-400 group-hover/option:text-white transition">
                  +40 ₴
                </span>
</label>
<label bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/5 cursor-pointer hover:bg-white/10 transition group/option select-none">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="relative flex items-center">
<input bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="peer sr-only" id="opt-silencer" onchange="updateCalculator()" type="checkbox"/>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-5 h-5 border-2 border-neutral-600 rounded peer-checked:bg-red-600 peer-checked:border-red-600 transition flex items-center justify-center">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-white text-[12px] opacity-0 peer-checked:opacity-100" icon="lucide:check" strokeWidth="3"></iconify-icon>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex-1">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm text-white font-medium block">
                    Гумовий бампер
                  </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xs text-neutral-500">
                    Глушник (чорний)
                  </span>
</div>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm font-semibold text-neutral-400 group-hover/option:text-white transition">
                  +20 ₴
                </span>
</label>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="pt-6 border-t border-white/10">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex justify-between items-end mb-2">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-400 text-sm">
                  Загальна вартість:
                </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-3xl font-semibold text-white tracking-tight" id="total-display">
                  60 ₴
                </span>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex justify-between items-center mb-6 bg-red-900/10 p-2 rounded border border-red-500/10">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-400 text-xs">
                  Авансовий платіж (50%):
                </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-red-400 font-mono text-sm font-bold" id="advance-display">
                  30 ₴
                </span>
</div>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full bg-white hover:bg-neutral-200 text-black font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
                  Замовити зараз
                </span>
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-lg" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm hidden flex items-center justify-center opacity-0 transition-all duration-300" id="assortment-modal" onclick="closeAssortment()">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="bg-neutral-950 border border-white/10 rounded-2xl w-full max-w-4xl mx-4 relative overflow-hidden shadow-2xl scale-95 transition-all duration-300 flex flex-col max-h-[90vh]" id="assortment-content" onclick="event.stopPropagation()">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="p-6 border-b border-white/10 flex justify-between items-center bg-neutral-900">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-3">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-red-500" icon="lucide:layout-grid" width="24"></iconify-icon>
<h3 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xl font-bold text-white">
              Асортимент Кліше (Airbag)
            </h3>
</div>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-neutral-500 transition hover:bg-white/10 hover:text-white" onclick="closeAssortment()">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:x" width="20"></iconify-icon>
</button>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="overflow-y-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="bg-black/50 border border-white/5 rounded-xl p-4 hover:border-red-500/50 transition group flex flex-col">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="aspect-square rounded-lg bg-neutral-900 mb-4 overflow-hidden relative">
<img alt="AIRBAG" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full h-full object-cover group-hover:scale-110 transition duration-500 cursor-zoom-in" onclick="event.stopPropagation(); openLightbox('https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&amp;w=1200')" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<h4 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-white font-bold mb-auto">
              AIRBAG
            </h4>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="mt-3 pt-3 border-t border-white/5 flex justify-between items-center">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xs text-neutral-500">
                Ціна
              </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-red-500 font-bold">
                350 грн
              </span>
</div>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="bg-black/50 border border-white/5 rounded-xl p-4 hover:border-red-500/50 transition group flex flex-col">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="aspect-square rounded-lg bg-neutral-900 mb-4 overflow-hidden relative">
<img alt="SRS AIRBAG" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full h-full object-cover group-hover:scale-110 transition duration-500 cursor-zoom-in" onclick="event.stopPropagation(); openLightbox('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&amp;w=1200')" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
</div>
<h4 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-white font-bold mb-auto leading-tight">
              SRS AIRBAG
            </h4>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="mt-3 pt-3 border-t border-white/5 flex justify-between items-center">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xs text-neutral-500">
                Ціна
              </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-red-500 font-bold">
                500 грн
              </span>
</div>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="bg-black/50 border border-white/5 rounded-xl p-4 hover:border-red-500/50 transition group flex flex-col">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="aspect-square rounded-lg bg-neutral-900 mb-4 overflow-hidden relative">
<img alt="SRS AIRBAG" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full h-full object-cover group-hover:scale-110 transition duration-500 cursor-zoom-in" onclick="event.stopPropagation(); openLightbox('https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&amp;w=1200')" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h4 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-white font-bold mb-auto">
              SRS AIRBAG
            </h4>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="mt-3 pt-3 border-t border-white/5 flex justify-between items-center">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xs text-neutral-500">
                Ціна
              </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-red-500 font-bold">
                500 грн
              </span>
</div>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="bg-black/50 border border-white/5 rounded-xl p-4 hover:border-red-500/50 transition group flex flex-col">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="aspect-square rounded-lg bg-neutral-900 mb-4 overflow-hidden relative">
<img alt="Horn" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full h-full object-cover group-hover:scale-110 transition duration-500 cursor-zoom-in opacity-40 hover:opacity-100" onclick="event.stopPropagation(); openLightbox('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg')" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f0b0144-42e9-4a63-b8f6-06b2899c7ed4_320w.png" style={{}}/>
</div>
<h4 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-white font-bold mb-auto">
              AIRBAG HORN
            </h4>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="mt-3 pt-3 border-t border-white/5 flex justify-between items-center">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xs text-neutral-500">
                Ціна
              </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-red-500 font-bold">
                200 грн
              </span>
</div>
</div>
</div>
</div>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm hidden flex items-center justify-center opacity-0 transition-all duration-300" id="contact-modal" onclick="closeContactModal()">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="bg-neutral-950 border border-white/10 rounded-2xl w-full max-w-sm mx-4 relative overflow-hidden shadow-2xl scale-95 transition-all duration-300" id="contact-content" onclick="event.stopPropagation()">
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute top-4 right-4 text-neutral-500 hover:text-white z-20 p-2 bg-black/50 rounded-full backdrop-blur-md" onclick="closeContactModal()">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:x" width="20"></iconify-icon>
</button>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="p-6 md:p-8 text-center">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-12 h-12 rounded-full bg-white/5 mx-auto flex items-center justify-center mb-4 text-white">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:phone" width="24"></iconify-icon>
</div>
<h3 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xl font-bold text-white mb-2">
            Оформити замовлення
          </h3>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm text-neutral-400 mb-8">
            Оберіть зручний для вас спосіб
          </p>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="space-y-3">
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-4 p-4 rounded-xl bg-blue-600/10 border border-blue-600/20 hover:bg-blue-600/20 hover:border-blue-600/40 transition group" href="https://t.me/laser_stamps_co" target="_blank">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:message-circle" width="20"></iconify-icon>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-left">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="block text-sm font-bold text-white">
                  Менеджер Telegram
                </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="block text-xs text-blue-200/70">
                  Консультація та замовлення
                </span>
</div>
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="ml-auto text-blue-500 group-hover:translate-x-1 transition" icon="lucide:arrow-right"></iconify-icon>
</a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-4 p-4 rounded-xl bg-neutral-800/50 border border-white/10 hover:bg-neutral-800 hover:border-white/20 transition group" href="https://t.me/LaserStampBot" target="_blank">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-10 h-10 rounded-full bg-neutral-700 text-white flex items-center justify-center">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:bot" width="20"></iconify-icon>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-left">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="block text-sm font-bold text-white">
                  Telegram Бот
                </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="block text-xs text-neutral-400">
                  Якщо знаєте параметри
                </span>
</div>
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="ml-auto text-neutral-500 group-hover:translate-x-1 transition" icon="lucide:arrow-right"></iconify-icon>
</a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-4 p-4 rounded-xl bg-pink-600/10 border border-pink-600/20 hover:bg-pink-600/20 hover:border-pink-600/40 transition group" href="https://www.instagram.com/laser.stamp.co" target="_blank">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center shadow-[0_0_15px_rgba(219,39,119,0.4)]">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:instagram" width="20"></iconify-icon>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-left">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="block text-sm font-bold text-white">
                  Instagram Direct
                </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="block text-xs text-pink-200/70">
                  Фото та запитання
                </span>
</div>
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="ml-auto text-pink-500 group-hover:translate-x-1 transition" icon="lucide:arrow-right"></iconify-icon>
</a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-4 p-4 rounded-xl bg-teal-600/10 border border-teal-600/20 hover:bg-teal-600/20 hover:border-teal-600/40 transition group" href="https://www.olx.ua/uk/list/user/1r8gT/" target="_blank">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center shadow-[0_0_15px_rgba(13,148,136,0.4)]">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:shopping-bag" width="20"></iconify-icon>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-left">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="block text-sm font-bold text-white">
                  OLX Магазин
                </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="block text-xs text-teal-200/70">
                  Каталог товарів
                </span>
</div>
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="ml-auto text-teal-500 group-hover:translate-x-1 transition" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm hidden flex items-center justify-center opacity-0 transition-all duration-300" id="pricing-modal" onclick="closePricingModal()">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="bg-neutral-950 border border-white/10 rounded-2xl w-full max-w-2xl mx-4 relative overflow-hidden shadow-2xl scale-95 transition-all duration-300 flex flex-col max-h-[90vh]" id="pricing-content" onclick="event.stopPropagation()">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="p-6 border-b border-white/10 flex justify-between items-center bg-neutral-900">
<h3 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xl font-bold text-white">
            Прайс-лист послуг
          </h3>
<button className="w-10 h-10 flex items-center justify-center text-neutral-500 hover:text-white transition bg-white/5 hover:bg-white/10 rounded-full" onclick="closePricingModal()">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</button>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="p-6 overflow-y-auto space-y-8">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
<h4 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-red-500 font-semibold mb-4 text-sm uppercase tracking-wider">
              Кліше та Брендування
            </h4>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="grid md:grid-cols-2 gap-4">
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full text-left bg-white/5 rounded-lg p-4 border border-white/5 flex justify-between items-center hover:bg-white/10 hover:border-red-500/50 transition group" onclick="router('milling'); closePricingModal()">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-2">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-white font-medium group-hover:text-red-500 transition">
                    SRS AIRBAG
                  </span>
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" icon="lucide:arrow-up-right" width="14"></iconify-icon>
</span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-400 text-sm">
                  від 200 грн
                </span>
</button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full text-left bg-white/5 rounded-lg p-4 border border-white/5 flex justify-between items-center hover:bg-white/10 hover:border-red-500/50 transition group" onclick="router('milling'); closePricingModal()">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-2">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-white font-medium group-hover:text-red-500 transition">
                    Фрезерування
                  </span>
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" icon="lucide:arrow-up-right" width="14"></iconify-icon>
</span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-400 text-sm">
                  від 340 грн
                </span>
</button>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
<h4 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-red-500 font-semibold mb-4 text-sm uppercase tracking-wider">
              Гравіювання
            </h4>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="grid md:grid-cols-2 gap-4">
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full text-left bg-white/5 rounded-lg p-4 border border-white/5 flex justify-between items-center hover:bg-white/10 hover:border-red-500/50 transition group" onclick="router('engraving'); closePricingModal()">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-2">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-white font-medium group-hover:text-red-500 transition">
                    Армійські жетони
                  </span>
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" icon="lucide:arrow-up-right" width="14"></iconify-icon>
</span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-400 text-sm">
                  60-45 грн/шт
                </span>
</button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full text-left bg-white/5 rounded-lg p-4 border border-white/5 flex justify-between items-center hover:bg-white/10 hover:border-red-500/50 transition group" onclick="router('engraving'); closePricingModal()">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-2">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-white font-medium group-hover:text-red-500 transition">
                    Таблиці та шкали
                  </span>
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" icon="lucide:arrow-up-right" width="14"></iconify-icon>
</span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-400 text-sm">
                  мін. від 500 грн
                </span>
</button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full text-left bg-white/5 rounded-lg p-4 border border-white/5 flex justify-between items-center hover:bg-white/10 hover:border-red-500/50 transition group" onclick="router('engraving'); closePricingModal()">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-2">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-white font-medium group-hover:text-red-500 transition">
                    Ударні клейма
                  </span>
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" icon="lucide:arrow-up-right" width="14"></iconify-icon>
</span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-400 text-sm">
                  від 400 грн
                </span>
</button>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
<h4 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-red-500 font-semibold mb-4 text-sm uppercase tracking-wider">
              Дизайн
            </h4>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="grid md:grid-cols-2 gap-4">
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full text-left bg-white/5 rounded-lg p-4 border border-white/5 flex justify-between items-center hover:bg-white/10 hover:border-red-500/50 transition group" onclick="router('vectorization'); closePricingModal()">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-2">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-white font-medium group-hover:text-red-500 transition">
                    Векторизація
                  </span>
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" icon="lucide:arrow-up-right" width="14"></iconify-icon>
</span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-400 text-sm">
                  від 200 грн
                </span>
</button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full text-left bg-white/5 rounded-lg p-4 border border-white/5 flex justify-between items-center hover:bg-white/10 hover:border-red-500/50 transition group" onclick="router('vectorization'); closePricingModal()">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-2">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-white font-medium group-hover:text-red-500 transition">
                    ШІ дизайн
                  </span>
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" icon="lucide:arrow-up-right" width="14"></iconify-icon>
</span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-neutral-400 text-sm">
                  від 400 грн
                </span>
</button>
</div>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="p-6 border-t border-white/10 bg-neutral-900/50">
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition" onclick="closePricingModal(); openContactModal()">
            Замовити
          </button>
</div>
</div>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm hidden flex items-center justify-center opacity-0 transition-all duration-300" id="branding-calculator-modal" onclick="closeBrandingCalculator()">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="bg-neutral-950 border border-white/10 rounded-2xl w-full max-w-md mx-4 relative overflow-hidden shadow-2xl scale-95 transition-all duration-300" id="branding-calculator-content" onclick="event.stopPropagation()">
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute top-4 right-4 text-neutral-500 hover:text-white z-20 p-2 bg-black/50 rounded-full backdrop-blur-md" onclick="closeBrandingCalculator()">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:x" width="20"></iconify-icon>
</button>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="p-6 md:p-8">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-3 mb-6">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-10 h-10 rounded-full bg-red-900/20 text-red-500 flex items-center justify-center">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' icon="lucide:calculator" width="20"></iconify-icon>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
<h3 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xl font-bold text-white">
                Калькулятор
              </h3>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xs text-neutral-500">
                Розрахунок вартості за розміром
              </p>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="space-y-4 mb-6">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="grid grid-cols-2 gap-4">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
<label bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="block text-xs text-neutral-400 mb-1.5 ml-1">
                  Ширина (мм)
                </label>
<input bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none transition text-center font-mono" id="bc-width" oninput="calculateBrandingPrice()" placeholder="0" type="number"/>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>
<label bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="block text-xs text-neutral-400 mb-1.5 ml-1">
                  Висота (мм)
                </label>
<input bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none transition text-center font-mono" id="bc-height" oninput="calculateBrandingPrice()" placeholder="0" type="number"/>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="bg-white/5 rounded-xl p-4 border border-white/5">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex justify-between items-center mb-2">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm text-neutral-400">
                  Площа кліше:
                </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-white font-mono" id="bc-area">
                  0 см²
                </span>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex justify-between items-end border-t border-white/10 pt-3">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm text-neutral-400">
                  Орієнтовна вартість:
                </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-2xl font-bold text-red-500" id="bc-price">
                  0 ₴
                </span>
</div>
</div>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="space-y-2 mb-6" id="bc-options-container">

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="space-y-2 mb-6" id="bc-options-container">

<label bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/5 cursor-pointer hover:bg-white/10 transition group/option select-none">
<input bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' checked="" className="peer sr-only" name="attachment" onchange="calculateBrandingPrice()" type="radio" value="none"/>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-5 h-5 border-2 border-neutral-600 rounded-full peer-checked:bg-red-600 peer-checked:border-red-600 transition flex items-center justify-center">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex-1">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm text-white font-medium block">
                    Тільки кліше
                  </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xs text-neutral-500">
                    Без додаткових кріплень
                  </span>
</div>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm font-semibold text-neutral-400 group-hover/option:text-white transition">
                  +0 ₴
                </span>
</label>

<label bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/5 cursor-pointer hover:bg-white/10 transition group/option select-none">
<input bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="peer sr-only" name="attachment" onchange="calculateBrandingPrice()" type="radio" value="press"/>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-5 h-5 border-2 border-neutral-600 rounded-full peer-checked:bg-red-600 peer-checked:border-red-600 transition flex items-center justify-center">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex-1">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm text-white font-medium block">
                    Кріплення під термопрес
                  </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xs text-neutral-500">
                    З доддатковим перехідником
                  </span>
</div>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm font-semibold text-neutral-400 group-hover/option:text-white transition">
                  +100 ₴
                </span>
</label>

<label bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/5 cursor-pointer hover:bg-white/10 transition group/option select-none" id="option-handle">
<input bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="peer sr-only" name="attachment" onchange="calculateBrandingPrice()" type="radio" value="handle"/>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-5 h-5 border-2 border-neutral-600 rounded-full peer-checked:bg-red-600 peer-checked:border-red-600 transition flex items-center justify-center">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex-1">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm text-white font-medium block">
                    Ручка
                  </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xs text-neutral-500">
                    Рекомендовано для невеликих розмірів
                  </span>
</div>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm font-semibold text-neutral-400 group-hover/option:text-white transition">
                  +250 ₴
                </span>
</label>

<label bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/5 cursor-pointer hover:bg-white/10 transition group/option select-none" id="option-iron">
<input bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="peer sr-only" name="attachment" onchange="calculateBrandingPrice()" type="radio" value="iron"/>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-5 h-5 border-2 border-neutral-600 rounded-full peer-checked:bg-red-600 peer-checked:border-red-600 transition flex items-center justify-center">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex-1">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm text-white font-medium block">
                    Ручний паяльник
                  </span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-xs text-neutral-500">
                    Доступно для кліше до 20 см²
                  </span>
</div>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="text-sm font-semibold text-neutral-400 group-hover/option:text-white transition">
                  +500 ₴
                </span>
</label>
</div>
</div>
</div>


</div>
</div>


<div className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-md hidden opacity-0 transition-all duration-300 overflow-y-auto" id="gallery-grid-modal">
<div className="min-h-screen px-6 py-12 flex flex-col items-center">
<button className="fixed top-6 right-6 z-[160] w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition border border-white/10" onclick="closeGalleryGrid()">
<iconify-icon icon="lucide:x" width="24"></iconify-icon>
</button>
<div className="w-full max-w-7xl">
<div className="flex items-center justify-center mb-10 relative">
<h3 className="text-3xl font-bold text-white" id="gallery-grid-title">
              Галерея
            </h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-20" id="gallery-grid-content">

</div>
</div>
</div>
</div>


    </>
  );
}
