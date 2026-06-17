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



      // Service category filtering
      const serviceButtons = document.querySelectorAll('.filter-category-btn');
      const serviceCards = document.querySelectorAll('.service-card');

      serviceButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.getAttribute('data-filter');
          serviceButtons.forEach(b => {
            b.classList.remove('border-[#d9ccc0]', 'bg-white', 'text-[#6b5c52]');
            b.classList.add('border-transparent', 'bg-transparent', 'text-[#8c7a6a]');
          });
          btn.classList.add('border-[#d9ccc0]', 'bg-white', 'text-[#6b5c52]');
          btn.classList.remove('border-transparent', 'bg-transparent', 'text-[#8c7a6a]');

          serviceCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || filter === category) {
              card.classList.remove('hidden');
            } else {
              card.classList.add('hidden');
            }
          });
        });
      });

      // Gallery filtering
      const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
      const galleryItems = document.querySelectorAll('.gallery-item');

      galleryFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.getAttribute('data-gallery-filter');
          galleryFilterBtns.forEach(b => {
            b.classList.remove('border-[#d9ccc0]', 'bg-white', 'text-[#6b5c52]');
            b.classList.add('border-transparent', 'bg-transparent', 'text-[#8c7a6a]');
          });
          btn.classList.add('border-[#d9ccc0]', 'bg-white', 'text-[#6b5c52]');
          btn.classList.remove('border-transparent', 'bg-transparent', 'text-[#8c7a6a]');

          galleryItems.forEach(item => {
            const category = item.getAttribute('data-gallery-category');
            if (filter === 'all' || filter === category) {
              item.classList.remove('hidden');
            } else {
              item.classList.add('hidden');
            }
          });
        });
      });

      // Lightbox
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');

      function openLightbox(src) {
        lightboxImg.src = src;
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }

      function closeLightbox() {
        lightbox.classList.add('hidden');
        lightboxImg.src = '';
        document.body.style.overflow = '';
      }

      galleryItems.forEach(item => {
        item.addEventListener('click', () => {
          const src = item.getAttribute('data-gallery-src');
          if (src) openLightbox(src);
        });
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
          closeLightbox();
        }
      });

      // Testimonials slider
      const track = document.getElementById('reviews-track');
      const prevBtn = document.getElementById('prev-review');
      const nextBtn = document.getElementById('next-review');
      const indexLabel = document.getElementById('review-index');
      const slides = track ? track.children.length : 0;
      let currentIndex = 0;

      function updateSlider() {
        if (!track) return;
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
        if (indexLabel) indexLabel.textContent = currentIndex + 1;
      }

      if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + slides) % slides;
          updateSlider();
        });

        nextBtn.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % slides;
          updateSlider();
        });

        // Auto-advance
        setInterval(() => {
          currentIndex = (currentIndex + 1) % slides;
          updateSlider();
        }, 9000);
      }
    
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
      

<div className="min-h-screen flex flex-col" style={{background: 'radial-gradient(circle at top left, #fdf6f2 0, #f7f4f1 45%, #f3eee9 80%)'}}>

<header className="sticky top-0 z-40 backdrop-blur-xl bg-[#f7f4f1]/80 border-b border-[#e0d6cc]">
<div className="max-w-6xl mx-auto px-4 lg:px-6 flex items-center justify-between h-16 lg:h-20">

<a aria-label="Maison Lumière" className="flex items-center gap-2 group" href="#hero">
<div className="h-9 w-9 rounded-full border border-[#d5c1a3] bg-[#f5ede4] flex items-center justify-center text-xs tracking-[0.22em] font-medium text-[#b8925b] group-hover:bg-[#f1e4d4] transition">
            ML
          </div>
<div className="flex flex-col leading-tight">
<span className="font-medium tracking-[0.18em] text-[11px] text-[#7b5a35] uppercase">Maison</span>
<span className="font-medium tracking-[0.24em] text-[10px] text-[#b8925b] uppercase">Lumière</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8 text-[13px] font-normal text-[#6e6460]">
<a className="hover:text-[#b98960] transition-colors" href="#oferta">Oferta</a>
<a className="hover:text-[#b98960] transition-colors" href="#galeria">Galeria</a>
<a className="hover:text-[#b98960] transition-colors" href="#opinie">Opinie</a>
<a className="hover:text-[#b98960] transition-colors" href="#blog">Blog</a>
<a className="hover:text-[#b98960] transition-colors" href="#rezerwacja">Rezerwacja</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden md:inline-flex text-[12px] px-3 py-1.5 rounded-full border border-[#d8cec2] text-[#6b5c4e] hover:border-[#b8925b] hover:text-[#b8925b] transition-colors">
            Menu zabiegów
          </button>

<button className="inline-flex transition overflow-hidden group text-xs md:text-sm font-medium rounded-full pt-2.5 pr-4 md:pt-3 md:pr-5 pb-2.5 pl-4 md:pb-3 md:pl-5 relative gap-x-2 items-center text-white" onclick="document.getElementById('rezerwacja').scrollIntoView({behavior:'smooth'});" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 40px rgba(67, 46, 24, 0.35), inset 0 1px 0 rgba(255,255,255,0.35)';" onmouseover="this.style.transform='translateY(-1px)'; this.style.boxShadow='0 14px 55px rgba(68,42,16,0.6), inset 0 1px 0 rgba(255,255,255,0.6), 0 0 0 1px rgba(236, 214, 170, 0.6)';" style={{background: 'linear-gradient(135deg, #b8895e 0%, #e0c39a 35%, #c39b6a 70%, #aa7a4a 100%)', border: '1px solid rgba(255, 255, 255, 0.35)', boxShadow: '0 10px 40px rgba(67, 46, 24, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.35)', transition: '0.5s cubic-bezier(0.4, 0, 0.2, 1)', transform: 'translateY(0px)', height: '46px', scale: '1'}}>
<div className="loader" style={{position: 'absolute', top: '0', left: '0', height: '100%', width: '100%', zIndex: '1', backgroundColor: 'transparent', mask: 'repeating-linear-gradient(90deg, transparent 0, transparent 10px, black 11px, black 13px)', WebkitMask: 'repeating-linear-gradient(90deg, transparent 0, transparent 10px, black 11px, black 13px)', opacity: '0.9'}}>
<div style={{content: '\'\'', position: 'absolute', top: '0', left: '0', width: '130%', height: '100%', backgroundImage: 'radial-gradient(circle at 50% 50%, #fff4d6 0%, transparent 55%), radial-gradient(circle at 45% 45%, #ffe1a1 0%, transparent 55%), radial-gradient(circle at 55% 55%, #f6d18b 0%, transparent 55%), radial-gradient(circle at 45% 55%, #f5c67a 0%, transparent 55%), radial-gradient(circle at 55% 45%, #f9e2b1 0%, transparent 55%)', mask: 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 15%, black 25%)', WebkitMask: 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 15%, black 25%)', animation: 'transform-animation 3s infinite alternate, opacity-animation 6s infinite', animationTimingFunction: 'cubic-bezier(0.6, 0.8, 0.5, 1)', filter: 'drop-shadow(0 0 12px rgba(255, 241, 196, 0.7))'}}>
</div>
</div>
<span style={{position: 'relative', zIndex: '2', fontFamily: '\'Inter\', sans-serif', fontSize: '0.85rem', fontWeight: '500', userSelect: 'none', display: 'flex', gap: '0.3rem', alignItems: 'center'}}>
<span className="loader-letter" style={{display: 'inline-block'}}>Zarezerwuj</span>
<span className="loader-letter" style={{display: 'inline-block'}}>wizytę</span>
</span>
</button>
</div>
</div>
</header>

<main className="flex-1" id="hero">
<section className="relative min-h-[82vh] md:min-h-[88vh] flex items-center">

<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
<div className="w-[120%] h-[120%] bg-cover bg-center md:bg-[center_right]" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&amp', transform: 'translate3d(0,0,0)'}}></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#f7f4f1] via-[#f7f4f1]/90 to-[#f7f4f1]/10"></div>
</div>
<div className="lg:px-6 md:py-16 grid md:grid-cols-[1.3fr,1fr] gap-10 max-w-6xl mr-auto ml-auto pt-10 pr-4 pb-10 pl-4 gap-x-10 gap-y-10 items-center">

<div className="space-y-7">
<p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-[#8c7a6a]">
<span className="h-[1px] w-5 bg-[#c8b6a6]"></span> Luksusowy salon urody
            </p>
<h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] leading-[1.05] tracking-tight font-medium text-[#30221c]" style={{fontFamily: '\'Playfair Display\', serif'}}>
              Subtelny luksus, który
              <span className="relative inline-flex">
                podkreśla
                <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[1.5px] bg-gradient-to-r from-[#c7a173] via-[#e2c9a4] to-[#c29660] rounded-full opacity-70"></span>
</span>
              Twoje piękno.
            </h1>
<p className="text-[14px] md:text-[15px] leading-relaxed text-[#6a5d55] max-w-xl">
              Maison Lumière to przestrzeń, w której rytuały pielęgnacyjne stają się doświadczeniem. Połączenie dermatologicznej precyzji, kunsztu makijażu i holistycznych rytuałów SPA – w kameralnej, butikowej atmosferze.
            </p>
<div className="flex flex-wrap items-center gap-4">
<button className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium text-[#30221c] bg-[#f7ebe0] border border-[#e3d2c2] hover:bg-[#f3e0d0] hover:border-[#d7c2af] transition-colors" onclick="document.getElementById('rezerwacja').scrollIntoView({behavior:'smooth'});">
                Umów pierwszą konsultację
                <svg className="w-3.5 h-3.5 text-[#b68a5a] group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m13 6 6 6-6 6"></path>
</svg>
</button>
<button className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-normal text-[#6a5d55] border border-transparent hover:border-[#d8c6b2] transition-colors hover:bg-white/60" onclick="document.getElementById('galeria').scrollIntoView({behavior:'smooth'});">
                Zobacz efekty zabiegów
              </button>
</div>
<div className="flex flex-wrap gap-6 items-center pt-4 border-t border-[#e3d8cc] max-w-xl">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-[#f0e3d7] flex items-center justify-center text-[11px] tracking-[0.16em] text-[#b8925b] font-medium">
                  4.9
                </div>
<div className="text-[12px] leading-snug text-[#74655a]">
                  Ponad <span className="font-medium text-[#403127]">1 200</span> zadowolonych Klientek
                  <span className="block text-[#a0958b]">opinie w Google &amp; Booksy</span>
</div>
</div>
<div className="flex -space-x-2">
<img alt="Klientka 1" className="h-8 w-8 rounded-full border object-cover border-white" loading="lazy" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<img alt="Klientka 2" className="h-8 w-8 rounded-full border object-cover border-white" loading="lazy" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=200&amp;q=80" style={{filter: 'hue-rotate(25deg)'}}/>
<img alt="Klientka 3" className="h-8 w-8 rounded-full border object-cover border-white" loading="lazy" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
</div>
</div>

<div className="hidden md:flex justify-end">
<div className="relative hover:shadow-xl transition-all duration-500 group rounded-2xl pt-5 pr-5 pb-5 pl-5 w-full max-w-sm border border-[#eadbc9] bg-[#fbf4ed] hover:bg-white/35" style={{boxShadow: '0 22px 45px rgba(79, 57, 36, 0.18)'}}>

<div style={{overflow: 'hidden', pointerEvents: 'none', position: 'absolute', zIndex: '-10', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 'calc(100% + 2px)', height: 'calc(100% + 2px)', borderRadius: '1rem', background: 'radial-gradient(circle at 0 0, rgba(255,255,255,0.9), transparent 65%)'}}>
<div style={{content: '\'\'', pointerEvents: 'none', position: 'fixed', zIndex: '200', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(0deg)', transformOrigin: 'left', width: '200%', height: '7rem', backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(239,224,199,0.9) 30%, rgba(219,192,145,0.9) 50%, rgba(255,255,255,0) 100%)', animation: 'rotate 14s linear infinite'}}>
</div>
</div>
<div className="flex items-center justify-between mb-5">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="h-10 w-10 rounded-xl border border-[#e1cfba] bg-gradient-to-br from-[#f7e7d4] to-[#f3dbc4] flex items-center justify-center">

<svg fill="none" height="22" stroke="#b68a5a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
</div>
<div className="">
<h3 className="text-[18px] font-medium tracking-tight text-[#3a2820]" style={{fontFamily: '\'Playfair Display\', serif'}}>Rytuał Lumière</h3>
<p className="text-[11px] text-[#8e7b6c]">
                      Autorski zabieg rozświetlający
                    </p>
</div>
</div>
<span className="text-[11px] px-2 py-1 rounded-full bg-[#f2e3d3] text-[#8c6c45] border border-[#e1cdb5]">Najczęściej wybierany</span>
</div>
<div className="mb-4">
<div className="flex gap-2 gap-x-2 gap-y-2 items-baseline">
<span className="text-2xl font-medium tracking-tight text-[#3a2820]">420 zł</span>
<span className="text-[11px] text-[#99897e]">/ 90 min</span>
</div>
<p className="text-[12px] text-[#7a6b61] mt-1">
                  Dogłębne nawilżenie, rozświetlenie i relaksujący masaż twarzy z wykorzystaniem kwarcu różowego.
                </p>
</div>
<ul className="space-y-2 text-[12px] text-[#60534a]">
<li className="flex items-start gap-2.5">
<div className="flex items-center justify-center w-4 h-4 rounded-full bg-[#c8a06e]">
<svg fill="none" height="10" stroke="#f7f4f1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
                  Konsultacja z kosmetologiem przed zabiegiem
                </li>
<li className="flex items-start gap-2.5">
<div className="flex items-center justify-center w-4 h-4 rounded-full bg-[#c8a06e]">
<svg fill="none" height="10" stroke="#f7f4f1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
                  Personalizowana pielęgnacja domowa po zabiegu
                </li>
<li className="flex items-start gap-2.5">
<div className="flex items-center justify-center w-4 h-4 rounded-full bg-[#c8a06e]">
<svg fill="none" height="10" stroke="#f7f4f1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
                  Serwowane prosecco lub herbata kwiatowa
                </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-18 border-t border-[#e2d4c7] bg-[#f9f5f1]/90" id="oferta">
<div className="max-w-6xl mx-auto px-4 lg:px-6">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
<div className="">
<p className="text-[11px] uppercase tracking-[0.26em] text-[#8c7a6a] mb-2">Oferta</p>
<h2 className="text-2xl md:text-[28px] tracking-tight font-medium text-[#30221c]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Pielęgnacja skrojona na miarę Twojej skóry
              </h2>
<p className="text-[13px] md:text-[14px] text-[#74665e] max-w-xl mt-2">
                Odkryj spersonalizowane programy pielęgnacyjne, rytuały SPA i makijaż, który podkreśla Twoją naturalną urodę – bez efektu maski.
              </p>
</div>

<div aria-label="Kategorie usług" className="flex flex-wrap gap-2 text-[11px]">
<button className="px-3 py-1.5 rounded-full border border-[#d9ccc0] text-[#6b5c52] hover:border-[#b8925b] hover:text-[#b8925b] transition-colors filter-category-btn bg-white" data-filter="all">
                Wszystkie
              </button>
<button className="px-3 py-1.5 rounded-full border border-transparent bg-transparent text-[#8c7a6a] hover:border-[#d9ccc0] transition-colors filter-category-btn hover:bg-white/70" data-filter="skin">
                Pielęgnacja skóry
              </button>
<button className="px-3 py-1.5 rounded-full border border-transparent bg-transparent text-[#8c7a6a] hover:border-[#d9ccc0] transition-colors filter-category-btn hover:bg-white/70" data-filter="makeup">
                Makijaż
              </button>
<button className="px-3 py-1.5 rounded-full border border-transparent bg-transparent text-[#8c7a6a] hover:border-[#d9ccc0] transition-colors filter-category-btn hover:bg-white/70" data-filter="spa">
                Zabiegi SPA
              </button>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3">

<article className="group service-card" data-category="skin">
<div className="relative overflow-hidden rounded-2xl border border-[#e3d4c6] shadow-sm hover:shadow-lg transition-shadow bg-white/90">
<div className="overflow-hidden">
<img alt="Pielęgnacja skóry twarzy" className="h-40 w-full object-cover transform group-hover:scale-[1.05] transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-4 md:p-5 space-y-3">
<span className="inline-flex text-[10px] uppercase tracking-[0.2em] text-[#b8925b] px-2 py-1 rounded-full bg-[#f7ecdf] border border-[#e5d0bd]">
                    Pielęgnacja skóry
                  </span>
<h3 className="text-[17px] tracking-tight font-medium text-[#30221c]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Terapia Glow Balance
                  </h3>
<p className="text-[13px] leading-relaxed text-[#74675f]">
                    Delikatne złuszczanie kwasami, intensywne nawilżenie i łagodząca maska algowa – idealne przed ważnym wyjściem.
                  </p>
<div className="flex items-center justify-between pt-1">
<span className="text-[13px] text-[#7a6858]">60 min • 290 zł</span>
<button className="text-[11px] inline-flex items-center gap-1 text-[#b98960] hover:text-[#a56f48]">
                      Szczegóły
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m13 6 6 6-6 6"></path>
</svg>
</button>
</div>
</div>
</div>
</article>
<article className="group service-card" data-category="makeup">
<div className="relative overflow-hidden rounded-2xl border border-[#e3d4c6] shadow-sm hover:shadow-lg transition-shadow bg-white/90">
<div className="overflow-hidden">
<img alt="Makijaż ślubny" className="h-40 w-full object-cover transform group-hover:scale-[1.05] transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-4 md:p-5 space-y-3">
<span className="inline-flex text-[10px] uppercase tracking-[0.2em] text-[#b8925b] px-2 py-1 rounded-full bg-[#f7ecdf] border border-[#e5d0bd]">
                    Makijaż
                  </span>
<h3 className="text-[17px] tracking-tight font-medium text-[#30221c]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Makijaż ślubny Couture
                  </h3>
<p className="text-[13px] leading-relaxed text-[#74675f]">
                    Trwały makijaż z techniką „second skin”, odporny na emocje i światła fleszy, z indywidualnie dobraną paletą kolorów.
                  </p>
<div className="flex items-center justify-between pt-1">
<span className="text-[13px] text-[#7a6858]">120 min • 650 zł</span>
<button className="text-[11px] inline-flex items-center gap-1 text-[#b98960] hover:text-[#a56f48]">
                      Szczegóły
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m13 6 6 6-6 6"></path>
</svg>
</button>
</div>
</div>
</div>
</article>
<article className="group service-card" data-category="spa">
<div className="relative overflow-hidden rounded-2xl border border-[#e3d4c6] shadow-sm hover:shadow-lg transition-shadow bg-white/90">
<div className="overflow-hidden">
<img alt="Rytuał SPA" className="h-40 w-full object-cover transform group-hover:scale-[1.05] transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-4 md:p-5 space-y-3">
<span className="inline-flex text-[10px] uppercase tracking-[0.2em] text-[#b8925b] px-2 py-1 rounded-full bg-[#f7ecdf] border border-[#e5d0bd]">
                    Zabiegi SPA
                  </span>
<h3 className="text-[17px] tracking-tight font-medium text-[#30221c]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Rytuał Jedwabne Spa
                  </h3>
<p className="text-[13px] leading-relaxed text-[#74675f]">
                    Peeling całego ciała, masaż aromaterapeutyczny i otulający kompres – dla głębokiego odprężenia i aksamitnej skóry.
                  </p>
<div className="flex items-center justify-between pt-1">
<span className="text-[13px] text-[#7a6858]">120 min • 540 zł</span>
<button className="text-[11px] inline-flex items-center gap-1 text-[#b98960] hover:text-[#a56f48]">
                      Szczegóły
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m13 6 6 6-6 6"></path>
</svg>
</button>
</div>
</div>
</div>
</article>
<article className="group service-card" data-category="skin">
<div className="relative overflow-hidden rounded-2xl border border-[#e3d4c6] shadow-sm hover:shadow-lg transition-shadow bg-white/90">
<div className="overflow-hidden">
<img alt="Anti-aging" className="h-40 w-full object-cover transform group-hover:scale-[1.05] transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{filter: 'saturate(1.1) contrast(1.05)'}}/>
</div>
<div className="p-4 md:p-5 space-y-3">
<span className="inline-flex text-[10px] uppercase tracking-[0.2em] text-[#b8925b] px-2 py-1 rounded-full bg-[#f7ecdf] border border-[#e5d0bd]">
                    Pielęgnacja skóry
                  </span>
<h3 className="text-[17px] tracking-tight font-medium text-[#30221c]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Anti-Ageing Sculpt Lift
                  </h3>
<p className="text-[13px] leading-relaxed text-[#74675f]">
                    Zaawansowany zabieg odmładzający z masażem kobido i techniką drenażu limfatycznego, wsparty mezoterapią bezigłową.
                  </p>
<div className="flex items-center justify-between pt-1">
<span className="text-[13px] text-[#7a6858]">90 min • 460 zł</span>
<button className="text-[11px] inline-flex items-center gap-1 text-[#b98960] hover:text-[#a56f48]">
                      Szczegóły
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m13 6 6 6-6 6"></path>
</svg>
</button>
</div>
</div>
</div>
</article>
<article className="group service-card" data-category="makeup">
<div className="relative overflow-hidden rounded-2xl border border-[#e3d4c6] shadow-sm hover:shadow-lg transition-shadow bg-white/90">
<div className="overflow-hidden">
<img alt="Makijaż wieczorowy" className="h-40 w-full object-cover transform group-hover:scale-[1.05] transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{filter: 'contrast(1.08)'}}/>
</div>
<div className="p-4 md:p-5 space-y-3">
<span className="inline-flex text-[10px] uppercase tracking-[0.2em] text-[#b8925b] px-2 py-1 rounded-full bg-[#f7ecdf] border border-[#e5d0bd]">
                    Makijaż
                  </span>
<h3 className="text-[17px] tracking-tight font-medium text-[#30221c]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Makijaż wieczorowy Luminescent
                  </h3>
<p className="text-[13px] leading-relaxed text-[#74675f]">
                    Zmysłowy makijaż z akcentem na spojrzenie, idealny na gale, sesje zdjęciowe i wyjątkowe kolacje.
                  </p>
<div className="flex items-center justify-between pt-1">
<span className="text-[13px] text-[#7a6858]">90 min • 380 zł</span>
<button className="text-[11px] inline-flex items-center gap-1 text-[#b98960] hover:text-[#a56f48]">
                      Szczegóły
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m13 6 6 6-6 6"></path>
</svg>
</button>
</div>
</div>
</div>
</article>
<article className="group service-card" data-category="spa">
<div className="relative overflow-hidden rounded-2xl border border-[#e3d4c6] shadow-sm hover:shadow-lg transition-shadow bg-white/90">
<div className="overflow-hidden">
<img alt="Rytuał spa dla dwojga" className="h-40 w-full object-cover transform group-hover:scale-[1.05] transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-4 md:p-5 space-y-3">
<span className="inline-flex text-[10px] uppercase tracking-[0.2em] text-[#b8925b] px-2 py-1 rounded-full bg-[#f7ecdf] border border-[#e5d0bd]">
                    Zabiegi SPA
                  </span>
<h3 className="text-[17px] tracking-tight font-medium text-[#30221c]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Rytuał Duo Harmony
                  </h3>
<p className="text-[13px] leading-relaxed text-[#74675f]">
                    Synchronizowany masaż dla dwojga w prywatnym apartamencie SPA z aromatyczną kąpielą stóp.
                  </p>
<div className="flex items-center justify-between pt-1">
<span className="text-[13px] text-[#7a6858]">2 x 75 min • 820 zł</span>
<button className="text-[11px] inline-flex items-center gap-1 text-[#b98960] hover:text-[#a56f48]">
                      Szczegóły
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m13 6 6 6-6 6"></path>
</svg>
</button>
</div>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-14 md:py-18 border-t border-[#e2d4c7] bg-[#f7f2ec]" id="galeria">
<div className="max-w-6xl mx-auto px-4 lg:px-6">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
<div>
<p className="text-[11px] uppercase tracking-[0.26em] text-[#8c7a6a] mb-2">Galeria</p>
<h2 className="text-2xl md:text-[28px] tracking-tight font-medium text-[#30221c]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Efekty naszych rytuałów
              </h2>
<p className="text-[13px] md:text-[14px] text-[#74665e] max-w-xl mt-2">
                Przed i po, detale makijażu, architektura brwi i atmosfera salonu – zobacz, czego możesz się spodziewać.
              </p>
</div>
<div aria-label="Filtry galerii" className="flex flex-wrap gap-2 text-[11px]">
<button className="px-3 py-1.5 rounded-full border border-[#d9ccc0] text-[#6b5c52] hover:border-[#b8925b] hover:text-[#b8925b] transition-colors gallery-filter-btn bg-white" data-gallery-filter="all">
                Wszystko
              </button>
<button className="px-3 py-1.5 rounded-full border border-transparent bg-transparent text-[#8c7a6a] hover:border-[#d9ccc0] transition-colors gallery-filter-btn hover:bg-white/70" data-gallery-filter="faces">
                Twarz
              </button>
<button className="px-3 py-1.5 rounded-full border border-transparent bg-transparent text-[#8c7a6a] hover:border-[#d9ccc0] transition-colors gallery-filter-btn hover:bg-white/70" data-gallery-filter="details">
                Detale
              </button>
<button className="px-3 py-1.5 rounded-full border border-transparent bg-transparent text-[#8c7a6a] hover:border-[#d9ccc0] transition-colors gallery-filter-btn hover:bg-white/70" data-gallery-filter="spa">
                Atmosfera SPA
              </button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">

<button className="relative rounded-2xl overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a06e] gallery-item" data-gallery-category="faces" data-gallery-src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;w=1200&amp;q=80">
<img alt="Makijaż glamour" className="h-40 md:h-44 w-full object-cover transform group-hover:scale-[1.06] transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity from-black/40 via-black/5"></div>
<span className="absolute bottom-2 left-2 text-[11px] tracking-[0.16em] uppercase text-white/90">
                Makijaż glamour
              </span>
</button>
<button className="relative rounded-2xl overflow-hidden group gallery-item" data-gallery-category="details" data-gallery-src="https://images.unsplash.com/photo-1532920080872-82a7a180d1a5?auto=format&amp;fit=crop&amp;w=1200&amp;q=80">
<img alt="Detale makijażu" className="h-40 md:h-44 w-full object-cover transform group-hover:scale-[1.06] transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity from-black/40 via-black/5"></div>
<span className="absolute bottom-2 left-2 text-[11px] tracking-[0.16em] uppercase text-white/90">
                Detale
              </span>
</button>
<button className="relative rounded-2xl overflow-hidden group gallery-item" data-gallery-category="spa" data-gallery-src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&amp;fit=crop&amp;w=1200&amp;q=80">
<img alt="Strefa SPA" className="h-40 md:h-44 w-full object-cover transform group-hover:scale-[1.06] transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity from-black/40 via-black/5"></div>
<span className="absolute bottom-2 left-2 text-[11px] tracking-[0.16em] uppercase text-white/90">
                Strefa spa
              </span>
</button>
<button className="relative rounded-2xl overflow-hidden group gallery-item" data-gallery-category="faces" data-gallery-src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&amp;fit=crop&amp;w=1200&amp;q=80">
<img alt="Pielęgnacja twarzy" className="h-40 md:h-44 w-full object-cover transform group-hover:scale-[1.06] transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity from-black/40 via-black/5"></div>
<span className="absolute bottom-2 left-2 text-[11px] tracking-[0.16em] uppercase text-white/90">
                Pielęgnacja
              </span>
</button>
<button className="relative rounded-2xl overflow-hidden group gallery-item" data-gallery-category="details" data-gallery-src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=1200&amp;q=80">
<img alt="Usta i kontur" className="h-40 md:h-44 w-full object-cover transform group-hover:scale-[1.06] transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity from-black/40 via-black/5"></div>
<span className="absolute bottom-2 left-2 text-[11px] tracking-[0.16em] uppercase text-white/90">
                Usta
              </span>
</button>
<button className="relative rounded-2xl overflow-hidden group gallery-item" data-gallery-category="faces" data-gallery-src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&amp;fit=crop&amp;w=1200&amp;q=80">
<img alt="Makijaż dzienny" className="h-40 md:h-44 w-full object-cover transform group-hover:scale-[1.06] transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity from-black/40 via-black/5"></div>
<span className="absolute bottom-2 left-2 text-[11px] tracking-[0.16em] uppercase text-white/90">
                Dzienny
              </span>
</button>
<button className="relative rounded-2xl overflow-hidden group gallery-item" data-gallery-category="spa" data-gallery-src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&amp;fit=crop&amp;w=1200&amp;q=80">
<img alt="Relaks w spa" className="h-40 md:h-44 w-full object-cover transform group-hover:scale-[1.06] transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity from-black/40 via-black/5"></div>
<span className="absolute bottom-2 left-2 text-[11px] tracking-[0.16em] uppercase text-white/90">
                Relaks
              </span>
</button>
<button className="relative rounded-2xl overflow-hidden group gallery-item" data-gallery-category="details" data-gallery-src="https://images.unsplash.com/photo-1556227690-d9602108c773?auto=format&amp;fit=crop&amp;w=1200&amp;q=80">
<img alt="Brwi i rzęsy" className="h-40 md:h-44 w-full object-cover transform group-hover:scale-[1.06] transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity from-black/40 via-black/5"></div>
<span className="absolute bottom-2 left-2 text-[11px] tracking-[0.16em] uppercase text-white/90">
                Brwi &amp; rzęsy
              </span>
</button>
</div>
</div>

<div aria-modal="true" className="fixed inset-0 z-50 hidden items-center justify-center backdrop-blur-sm px-4 bg-black/60" id="lightbox" role="dialog">
<button aria-label="Zamknij podgląd" className="absolute inset-0 cursor-default" onclick="closeLightbox()"></button>
<div className="relative max-w-3xl w-full">
<div className="bg-[#141010]/90 rounded-2xl overflow-hidden border shadow-2xl border-white/10">
<div className="flex justify-end p-3">
<button aria-label="Zamknij" className="inline-flex items-center justify-center w-8 h-8 rounded-full focus-visible:ring-2 focus-visible:ring-[#f5d3a3] bg-white/5 text-white hover:bg-white/10" onclick="closeLightbox()">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<div className="px-4 pb-4">
<img alt="Podgląd zdjęcia" className="w-full max-h-[70vh] object-cover rounded-xl" id="lightbox-img" src=""/>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-18 border-t border-[#e2d4c7] bg-[#f8f3ee]" id="opinie">
<div className="max-w-6xl mx-auto px-4 lg:px-6">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
<div>
<p className="text-[11px] uppercase tracking-[0.26em] text-[#8c7a6a] mb-2">Opinie</p>
<h2 className="text-2xl md:text-[28px] tracking-tight font-medium text-[#30221c]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Głosy naszych Klientek
              </h2>
<p className="text-[13px] md:text-[14px] text-[#74665e] max-w-xl mt-2">
                Dziękujemy za zaufanie – każde spotkanie to dla nas osobista historia. Oto kilka z nich.
              </p>
</div>
<div className="flex items-center gap-2 text-[12px] text-[#8c7a6a]">
<div className="flex items-center gap-1">
<span className="text-[18px] text-[#c8a06e]">★</span>
<span className="font-medium text-[#5e4b3e]">4.9/5</span>
</div>
<span className="h-4 w-px bg-[#decfbe]"></span>
<span>Średnia ocen z ostatnich 12 miesięcy</span>
</div>
</div>
<div className="relative">

<div className="overflow-hidden">
<div className="flex gap-4 transition-transform duration-500" id="reviews-track">

<article className="min-w-full md:min-w-[60%] lg:min-w-[45%] md:px-7 md:py-7 max-w-[700px] border-[#e2d6cb] border rounded-2xl pt-6 pr-5 pb-6 pl-5 shadow-sm bg-white/80">
<div className="flex items-center gap-3 mb-4">
<img alt="Portret klientki" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
<div className="flex flex-col">
<span className="text-[13px] font-medium text-[#3a2820]">Katarzyna, 32</span>
<span className="text-[11px] text-[#978a7f]">Makijaż ślubny &amp; pielęgnacja</span>
</div>
<div className="ml-auto flex items-center gap-0.5">
<span className="text-[13px] text-[#c8a06e]">★</span>
<span className="text-[13px] text-[#c8a06e]">★</span>
<span className="text-[13px] text-[#c8a06e]">★</span>
<span className="text-[13px] text-[#c8a06e]">★</span>
<span className="text-[13px] text-[#c8a06e]">★</span>
</div>
</div>
<p className="text-[13px] leading-relaxed text-[#6a5d55]">
                    „To jedyne miejsce, w którym poczułam się jak na planie sesji okładkowej, a jednocześnie totalnie sobą.
                    Makijaż wytrzymał wzruszenia, tańce i upał. Pielęgnacja przed ślubem zrobiła ogromną różnicę – zdjęcia są bajką.”
                  </p>
</article>

<article className="min-w-full md:min-w-[60%] lg:min-w-[45%] max-w-[700px] border border-[#e2d6cb] rounded-2xl px-5 py-6 md:px-7 md:py-7 shadow-sm bg-white/80">
<div className="flex items-center gap-3 mb-4">
<img alt="Klientka spa" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
<div className="flex flex-col">
<span className="text-[13px] font-medium text-[#3a2820]">Magda, 41</span>
<span className="text-[11px] text-[#978a7f]">Rytuał SPA &amp; kobido</span>
</div>
<div className="ml-auto flex items-center gap-0.5">
<span className="text-[13px] text-[#c8a06e]">★</span>
<span className="text-[13px] text-[#c8a06e]">★</span>
<span className="text-[13px] text-[#c8a06e]">★</span>
<span className="text-[13px] text-[#c8a06e]">★</span>
<span className="text-[13px] text-[#c8a06e]">★</span>
</div>
</div>
<p className="text-[13px] leading-relaxed text-[#6a5d55]">
                    „Rytuał Lumière połączony z masażem kobido to mój comiesięczny reset. Skóra wygląda młodziej, a ja wychodzę
                    z zupełnie innym poziomem energii. Doceniam też dyskrecję i kameralność miejsca.”
                  </p>
</article>

<article className="min-w-full md:min-w-[60%] lg:min-w-[45%] max-w-[700px] border border-[#e2d6cb] rounded-2xl px-5 py-6 md:px-7 md:py-7 shadow-sm bg-white/80">
<div className="flex items-center gap-3 mb-4">
<img alt="Klient" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
<div className="flex flex-col">
<span className="text-[13px] font-medium text-[#3a2820]">Michał, 37</span>
<span className="text-[11px] text-[#978a7f]">Pielęgnacja męska</span>
</div>
<div className="ml-auto flex items-center gap-0.5">
<span className="text-[13px] text-[#c8a06e]">★</span>
<span className="text-[13px] text-[#c8a06e]">★</span>
<span className="text-[13px] text-[#c8a06e]">★</span>
<span className="text-[13px] text-[#c8a06e]">★</span>
<span className="text-[13px] text-[#c8a06e]">★</span>
</div>
</div>
<p className="text-[13px] leading-relaxed text-[#6a5d55]">
                    „Minimalistyczne, bardzo estetyczne miejsce bez zbędnego przepychu. Konkretnie, profesjonalnie, a efekty
                    po kuracji anti-age są realnie zauważalne. W końcu ktoś rozumie potrzeby męskiej skóry.”
                  </p>
</article>
</div>
</div>

<div className="mt-5 flex items-center justify-between">
<div className="flex items-center gap-2">
<button aria-label="Poprzednia opinia" className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#d5c6b8] text-[#7a6858] hover:bg-[#f4e7da] hover:border-[#c3ac94] focus-visible:ring-2 focus-visible:ring-[#c8a06e] bg-white" id="prev-review">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button aria-label="Następna opinia" className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#d5c6b8] text-[#7a6858] hover:bg-[#f4e7da] hover:border-[#c3ac94] focus-visible:ring-2 focus-visible:ring-[#c8a06e] bg-white" id="next-review">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
<div className="flex items-center gap-1.5 text-[11px] text-[#8c7a6a]">
<span id="review-index">1</span>
<span className="text-[#c0b2a3]">/</span>
<span>3</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-18 border-t border-[#e2d4c7] bg-[#f7f4f1]" id="blog">
<div className="max-w-6xl mx-auto px-4 lg:px-6">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
<div>
<p className="text-[11px] uppercase tracking-[0.26em] text-[#8c7a6a] mb-2">Blog</p>
<h2 className="text-2xl md:text-[28px] tracking-tight font-medium text-[#30221c]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Nowinki z świata beauty
              </h2>
<p className="text-[13px] md:text-[14px] text-[#74665e] max-w-xl mt-2">
                Kuratorujemy trendy, składniki aktywne i rytuały, które naprawdę działają – bez marketingowego szumu.
              </p>
</div>
<button className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-full border border-[#d9ccc0] text-[#6b5c52] hover:border-[#b8925b] hover:text-[#b8925b] transition-colors bg-white">
              Zobacz wszystkie wpisy
            </button>
</div>
<div className="grid gap-6 md:grid-cols-3">
<article className="group rounded-2xl border border-[#e3d4c6] overflow-hidden hover:shadow-md transition-shadow bg-white/90">
<div className="overflow-hidden">
<img alt="Skin cycling" className="h-40 w-full object-cover transform group-hover:scale-[1.05] transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div className="p-4 md:p-5 space-y-2.5">
<p className="text-[11px] text-[#a29183] uppercase tracking-[0.18em]">Pielęgnacja • 6 min czytania</p>
<h3 className="text-[16px] tracking-tight font-medium text-[#30221c] group-hover:text-[#b98960] transition-colors" style={{fontFamily: '\'Playfair Display\', serif'}}>
                  Skin cycling – jak ułożyć plan na 4 noce bez podrażnień
                </h3>
<p className="text-[13px] text-[#73665d]">
                  Wyjaśniamy, jak bezpiecznie wprowadzić retinoidy, kwasy i noc regeneracyjną, by skóra była świetlista, a nie podrażniona.
                </p>
</div>
</article>
<article className="group rounded-2xl border border-[#e3d4c6] overflow-hidden hover:shadow-md transition-shadow bg-white/90">
<div className="overflow-hidden">
<img alt="Trendy makijażu" className="h-40 w-full object-cover transform group-hover:scale-[1.05] transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-4 md:p-5 space-y-2.5">
<p className="text-[11px] text-[#a29183] uppercase tracking-[0.18em]">Makijaż • 4 min czytania</p>
<h3 className="text-[16px] tracking-tight font-medium text-[#30221c] group-hover:text-[#b98960] transition-colors" style={{fontFamily: '\'Playfair Display\', serif'}}>
                  Soft glow zamiast ciężkiego konturowania – makijaż 2025
                </h3>
<p className="text-[13px] text-[#73665d]">
                  Naturalne światło, podkreślona tekstura skóry i subtelne rozświetlenie – jak osiągnąć efekt „better skin, not more makeup”.
                </p>
</div>
</article>
<article className="group rounded-2xl border border-[#e3d4c6] overflow-hidden hover:shadow-md transition-shadow bg-white/90">
<div className="overflow-hidden">
<img alt="Rytuały spa w domu" className="h-40 w-full object-cover transform group-hover:scale-[1.05] transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div className="p-4 md:p-5 space-y-2.5">
<p className="text-[11px] text-[#a29183] uppercase tracking-[0.18em]">SPA • 5 min czytania</p>
<h3 className="text-[16px] tracking-tight font-medium text-[#30221c] group-hover:text-[#b98960] transition-colors" style={{fontFamily: '\'Playfair Display\', serif'}}>
                  Mikro-rytuały spa w domu, które naprawdę obniżają stres
                </h3>
<p className="text-[13px] text-[#73665d]">
                  Proste, pięciominutowe rytuały wieczorne i poranne, które możesz wykonywać między wizytami w salonie.
                </p>
</div>
</article>
</div>
</div>
</section>

<section className="py-14 md:py-18 border-t border-[#e2d4c7] bg-[#f6f1eb]" id="rezerwacja">
<div className="max-w-6xl mx-auto px-4 lg:px-6">
<div className="grid gap-10 md:grid-cols-[1.1fr,1fr] items-start">
<div>
<p className="text-[11px] uppercase tracking-[0.26em] text-[#8c7a6a] mb-2">Rezerwacja</p>
<h2 className="text-2xl md:text-[28px] tracking-tight font-medium text-[#30221c]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Zarezerwuj swój rytuał
              </h2>
<p className="text-[13px] md:text-[14px] text-[#74665e] max-w-xl mt-2 mb-5">
                Wybierz usługę, dogodny termin i preferowaną stylistkę. Potwierdzenie otrzymasz mailowo oraz SMS-em.
              </p>
<form className="space-y-5 border border-[#e2d4c7] rounded-2xl p-4 md:p-6 shadow-sm bg-white/80">

<div className="grid md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="block text-[12px] font-medium text-[#4b3a30]" htmlFor="service">Kategoria zabiegu</label>
<div className="relative">
<select className="w-full text-[13px] rounded-xl border border-[#ddcdbf] bg-[#fbf7f2] px-3 py-2 pr-8 text-[#4f4036] focus:outline-none focus:ring-2 focus:ring-[#c8a06e] focus:border-[#c8a06e] appearance-none" id="service">
<option>Pielęgnacja skóry</option>
<option>Makijaż</option>
<option>Zabiegi SPA</option>
<option>Pielęgnacja męska</option>
</select>
<svg className="w-3.5 h-3.5 text-[#9f8e80] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-[12px] font-medium text-[#4b3a30]" htmlFor="treatment">Konkretny zabieg</label>
<input className="w-full text-[13px] rounded-xl border border-[#ddcdbf] bg-[#fbf7f2] px-3 py-2 text-[#4f4036] placeholder:text-[#b2a498] focus:outline-none focus:ring-2 focus:ring-[#c8a06e] focus:border-[#c8a06e]" id="treatment" placeholder="np. Rytuał Lumière, Makijaż ślubny" type="text"/>
</div>
</div>

<div className="grid md:grid-cols-[1.1fr,0.9fr] gap-4">
<div className="space-y-1.5">
<label className="block text-[12px] font-medium text-[#4b3a30]" htmlFor="date">Preferowana data</label>
<div className="relative">
<input className="w-full text-[13px] rounded-xl border border-[#ddcdbf] bg-[#fbf7f2] px-3 py-2 text-[#4f4036] focus:outline-none focus:ring-2 focus:ring-[#c8a06e] focus:border-[#c8a06e]" id="date" type="date"/>

<svg className="w-4 h-4 text-[#9f8e80] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-[12px] font-medium text-[#4b3a30]" htmlFor="time">Przedział godzinowy</label>
<div className="relative">
<select className="w-full text-[13px] rounded-xl border border-[#ddcdbf] bg-[#fbf7f2] px-3 py-2 pr-8 text-[#4f4036] focus:outline-none focus:ring-2 focus:ring-[#c8a06e] focus:border-[#c8a06e] appearance-none" id="time">
<option>Poranek (9:00–12:00)</option>
<option>Popołudnie (12:00–16:00)</option>
<option>Wieczór (16:00–20:00)</option>
</select>
<svg className="w-3.5 h-3.5 text-[#9f8e80] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="block text-[12px] font-medium text-[#4b3a30]" htmlFor="expert">Preferowana ekspertka</label>
<div className="relative">
<select className="w-full text-[13px] rounded-xl border border-[#ddcdbf] bg-[#fbf7f2] px-3 py-2 pr-8 text-[#4f4036] focus:outline-none focus:ring-2 focus:ring-[#c8a06e] focus:border-[#c8a06e] appearance-none" id="expert">
<option>Bez preferencji</option>
<option>Anna – kosmetologia &amp; anti-age</option>
<option>Julia – makijaż &amp; brwi</option>
<option>Klara – masaż &amp; SPA</option>
</select>
<svg className="w-3.5 h-3.5 text-[#9f8e80] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-[12px] font-medium text-[#4b3a30]">Forma kontaktu</label>
<div className="flex gap-2 text-[12px]">
<label className="flex-1 inline-flex items-center gap-1.5 rounded-full border border-[#ddcdbf] px-3 py-1.5 bg-[#fbf7f2] cursor-pointer hover:border-[#c8a06e]">
<input checked="" className="accent-[#c8a06e]" name="contact" type="radio"/>
<span>Telefon</span>
</label>
<label className="flex-1 inline-flex items-center gap-1.5 rounded-full border border-[#ddcdbf] px-3 py-1.5 bg-[#fbf7f2] cursor-pointer hover:border-[#c8a06e]">
<input className="accent-[#c8a06e]" name="contact" type="radio"/>
<span>E-mail</span>
</label>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="block text-[12px] font-medium text-[#4b3a30]" htmlFor="name">Imię i nazwisko</label>
<input className="w-full text-[13px] rounded-xl border border-[#ddcdbf] bg-[#fbf7f2] px-3 py-2 text-[#4f4036] placeholder:text-[#b2a498] focus:outline-none focus:ring-2 focus:ring-[#c8a06e] focus:border-[#c8a06e]" id="name" placeholder="np. Aleksandra Kowalska" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-[12px] font-medium text-[#4b3a30]" htmlFor="phone">Numer telefonu</label>
<input className="w-full text-[13px] rounded-xl border border-[#ddcdbf] bg-[#fbf7f2] px-3 py-2 text-[#4f4036] placeholder:text-[#b2a498] focus:outline-none focus:ring-2 focus:ring-[#c8a06e] focus:border-[#c8a06e]" id="phone" placeholder="+48 600 000 000" type="tel"/>
</div>
</div>

<div className="space-y-1.5">
<label className="block text-[12px] font-medium text-[#4b3a30]" htmlFor="message">Dodatkowe informacje</label>
<textarea className="w-full text-[13px] rounded-xl border border-[#ddcdbf] bg-[#fbf7f2] px-3 py-2 text-[#4f4036] placeholder:text-[#b2a498] focus:outline-none focus:ring-2 focus:ring-[#c8a06e] focus:border-[#c8a06e]" id="message" placeholder="Np. przeciwwskazania, ulubione produkty, termin alternatywny" rows="3"></textarea>
</div>

<div className="space-y-3">
<label className="flex items-start gap-2 text-[11px] text-[#7d6f65] cursor-pointer">
<input checked="" className="mt-0.5 accent-[#c8a06e]" type="checkbox"/>
<span>
                      Wyrażam zgodę na kontakt w celu potwierdzenia terminu oraz przetwarzanie danych zgodnie z
                      <a className="underline decoration-[#c8a06e] decoration-1 underline-offset-2 hover:text-[#b98960]" href="#">Polityką Prywatności</a>.
                    </span>
</label>
<label className="flex items-start gap-2 text-[11px] text-[#7d6f65] cursor-pointer">
<input className="mt-0.5 accent-[#c8a06e]" type="checkbox"/>
<span>
                      Chcę otrzymywać informacje o nowościach i limitowanych pakietach zabiegowych (max 1–2 razy w miesiącu).
                    </span>
</label>
</div>

<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-2">
<button className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-medium bg-[#b98960] border border-[#b98960] hover:bg-[#a6724b] hover:border-[#a6724b] focus-visible:ring-2 focus-visible:ring-[#e4c59a] shadow-md hover:shadow-lg transition-colors text-white" type="submit">
                    Potwierdź rezerwację
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m13 6 6 6-6 6"></path>
</svg>
</button>
<p className="text-[11px] text-[#8f8177]">
                    Aktualizacja dostępności terminów w czasie rzeczywistym. Brak przedpłaty przy pierwszej wizycie.
                  </p>
</div>
</form>
</div>

<aside className="space-y-4">
<div className="rounded-2xl border border-[#e2d4c7] p-4 md:p-5 shadow-sm bg-white/80">
<div className="flex items-center justify-between mb-3">
<div>
<p className="text-[11px] uppercase tracking-[0.2em] text-[#8c7a6a]">Dostępność</p>
<h3 className="text-[16px] tracking-tight font-medium text-[#30221c]" style={{fontFamily: '\'Playfair Display\', serif'}}>Kalendarz salonu</h3>
</div>
<div className="inline-flex items-center gap-1 rounded-full border border-[#ddcdbf] px-2 py-1 text-[11px] text-[#7a6858] bg-[#fbf7f2]">
<span className="w-2 h-2 rounded-full bg-neutral-400"></span> Wysoka dostępność
                  </div>
</div>
<div className="grid grid-cols-7 gap-1 text-[10px] text-center text-[#7a6a61]">
<span className="py-1 text-[10px] font-medium">Pn</span>
<span className="py-1 text-[10px] font-medium">Wt</span>
<span className="py-1 text-[10px] font-medium">Śr</span>
<span className="py-1 text-[10px] font-medium">Cz</span>
<span className="py-1 text-[10px] font-medium">Pt</span>
<span className="py-1 text-[10px] font-medium">So</span>
<span className="py-1 text-[10px] font-medium">Nd</span>

<span className="py-1 text-[#c6b9ac]">1</span>
<span className="py-1 text-[#c6b9ac]">2</span>
<span className="py-1 text-[#7a6a61]">3</span>
<span className="py-1 text-[#7a6a61]">4</span>
<span className="py-1 text-[#7a6a61]">5</span>
<span className="py-1 text-[#7a6a61]">6</span>
<span className="py-1 text-[#7a6a61]">7</span>
<span className="py-1 text-[#7a6a61]">8</span>
<span className="py-1 text-[#7a6a61]">9</span>
<span className="py-1 text-[#7a6a61]">10</span>
<span className="py-1 text-[#7a6a61]">11</span>
<button className="py-1 text-[#3a2820] rounded-full bg-[#f4e0cf] border border-[#d6bca5]">12</button>
<span className="py-1 text-[#7a6a61]">13</span>
<span className="py-1 text-[#7a6a61]">14</span>
<span className="py-1 text-[#7a6a61]">15</span>
<span className="py-1 text-[#7a6a61]">16</span>
<span className="py-1 text-[#7a6a61]">17</span>
<span className="py-1 text-[#7a6a61]">18</span>
<span className="py-1 text-[#7a6a61]">19</span>
<span className="py-1 text-[#7a6a61]">20</span>
<span className="py-1 text-[#7a6a61]">21</span>
<span className="py-1 text-[#7a6a61]">22</span>
<span className="py-1 text-[#7a6a61]">23</span>
<span className="py-1 text-[#7a6a61]">24</span>
<span className="py-1 text-[#7a6a61]">25</span>
<span className="py-1 text-[#7a6a61]">26</span>
<span className="py-1 text-[#7a6a61]">27</span>
<span className="py-1 text-[#7a6a61]">28</span>
</div>
<div className="mt-4 space-y-2 text-[11px] text-[#8f8177]">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-neutral-400"></span>
<span>Dostępne godziny 9:00–20:00</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-400"></span>
<span>Ostatnie miejsca w popularnych godzinach</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-blue-300"></span>
<span>Lista rezerwowa / brak dostępności</span>
</div>
</div>
</div>
<div className="rounded-2xl border border-[#e2d4c7] bg-[#fbf6f0] p-4 text-[12px] text-[#7f7066] space-y-2">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-[#c8a06e]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="17 8 12 3 7 8"></polyline>
<line x1="12" x2="12" y1="3" y2="15"></line>
</svg>
<span className="font-medium text-[#4b3a30]">Ekskluzywne godziny VIP</span>
</div>
<p>Zarezerwuj rytuał przed otwarciem lub po zamknięciu salonu – zapewniamy pełną prywatność. Zapytaj o dostępne opcje w formularzu.</p>
</div>
</aside>
</div>
</div>
</section>
</main>

<footer className="border-t border-[#e2d4c7] bg-[#f5eee7]">
<div className="max-w-6xl mx-auto px-4 lg:px-6 py-8 md:py-10">
<div className="grid md:grid-cols-[1.2fr,1fr,1fr] gap-6 text-[12px] text-[#7a6b61]">
<div className="space-y-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full border border-[#d5c1a3] bg-[#f5ede4] flex items-center justify-center text-[10px] tracking-[0.22em] font-medium text-[#b8925b]">
                ML
              </div>
<div className="flex flex-col leading-tight">
<span className="font-medium tracking-[0.18em] text-[10px] text-[#7b5a35] uppercase">Maison</span>
<span className="font-medium tracking-[0.24em] text-[9px] text-[#b8925b] uppercase">Lumière</span>
</div>
</div>
<p className="max-w-xs">
              Luksusowy, butikowy salon urody w sercu miasta. Tworzymy subtelne, dopracowane wrażenia – od pierwszej wiadomości po wyjście z gabinetu.
            </p>
</div>
<div className="space-y-2">
<h4 className="text-[12px] font-medium text-[#4b3a30] uppercase tracking-[0.16em]">Kontakt</h4>
<p>ul. Mokotowska 12<br/>00-000 Warszawa</p>
<p>
<a className="hover:text-[#b98960]" href="tel:+48600000000">+48 600 000 000</a><br/>
<a className="hover:text-[#b98960]" href="mailto:kontakt@maisonlumiere.pl">kontakt@maisonlumiere.pl</a>
</p>
</div>
<div className="space-y-2">
<h4 className="text-[12px] font-medium text-[#4b3a30] uppercase tracking-[0.16em]">Godziny otwarcia</h4>
<p>Pon–Pt: 9:00–20:00<br/>Sobota: 9:00–18:00<br/>Niedziela: wg rezerwacji indywidualnych</p>
<div className="flex gap-3 pt-1">
<button className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-[#d5c6b8] text-[#7a6858] bg-[#f9f2eb] hover:bg-[#f0e4d8]">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.64L18 10h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</button>
<button className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-[#d5c6b8] text-[#7a6858] bg-[#f9f2eb] hover:bg-[#f0e4d8]">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0z"></path>
<path d="M20 21a6 6 0 0 0-12 0"></path>
</svg>
</button>
<button className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-[#d5c6b8] text-[#7a6858] bg-[#f9f2eb] hover:bg-[#f0e4d8]">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12.08V12A10 10 0 1 0 12.04 22"></path>
<path d="M22 4 12 14.01l-3-3"></path>
</svg>
</button>
</div>
</div>
</div>
<div className="border-t border-[#e2d4c7] mt-4 pt-4 pb-6">
<div className="max-w-6xl mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-[#9e9186]">
<p>© 2025 Maison Lumière. Wszystkie prawa zastrzeżone.</p>
<div className="flex items-center gap-4">
<a className="hover:text-[#b98960]" href="#">Polityka prywatności</a>
<a className="hover:text-[#b98960]" href="#">Regulamin</a>
<a className="hover:text-[#b98960]" href="#">Cookies</a>
</div>
</div>
</div>
</div></footer>
</div>

<style>
      @keyframes transform-animation {
        0% {
          transform: translate(-45%);
        }
        100% {
          transform: translate(45%);
        }
      }
      @keyframes opacity-animation {
        0%, 100% {
          opacity: 0;
        }
        15% {
          opacity: 1;
        }
        65% {
          opacity: 0;
        }
      }
      @keyframes rotate {
        to {
          transform: translate(-50%, -50%) rotate(360deg);
        }
      }
    </style>



    </>
  );
}
