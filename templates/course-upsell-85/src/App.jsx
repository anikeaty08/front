import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener("DOMContentLoaded", () => {
          // Animacja cząsteczek
          const particlesContainer = document.querySelector('.background-particles');
          if (particlesContainer && window.innerWidth >= 768) {
              const particleCount = 40;
              for (let i = 0; i < particleCount; i++) {
                  const particle = document.createElement('div');
                  particle.classList.add('particle');

                  const size = Math.random() * 2 + 1;
                  const left = Math.random() * 98;
                  const duration = Math.random() * 20 + 20;
                  const delay = Math.random() * -duration;
                  const opacity = Math.random() * 0.2 + 0.1;
                  const driftX = (Math.random() - 0.5) * 40;

                  particle.style.width = `${size}px`;
                  particle.style.height = `${size}px`;
                  particle.style.left = `${left}%`;
                  particle.style.bottom = `-10%`;
                  particle.style.animationDuration = `${duration}s`;
                  particle.style.animationDelay = `${delay}s`;
                  particle.style.setProperty('--max-opacity', opacity);
                  particle.style.setProperty('--drift-x', `${driftX}px`);

                  particlesContainer.appendChild(particle);
              }
          }
      });
    


      const initIcons = setInterval(() => {
        if (window.lucide) {
          lucide.createIcons();
          clearInterval(initIcons);
        }
      }, 200);
    


      document.addEventListener('DOMContentLoaded', () => {
        const videoWrapper = document.getElementById('video-wrapper');
        const videoContainer = document.getElementById('video-container');
        const closeBtn = document.getElementById('close-sticky-video');
        let isStickyClosed = false;
        let isSticky = false;

        if (videoWrapper && videoContainer && closeBtn) {
          window.addEventListener('scroll', () => {
            if (window.innerWidth < 1024) {
              if (isSticky) {
                isSticky = false;
                videoContainer.classList.remove('sticky-video-active');
                closeBtn.classList.add('hidden');
              }
              return;
            }
            if (isStickyClosed) return;

            const rect = videoWrapper.getBoundingClientRect();
            if (rect.bottom < 0 && !isSticky) {
              isSticky = true;
              videoContainer.classList.add('sticky-video-active');
              closeBtn.classList.remove('hidden');
            } else if (rect.bottom >= 0 && isSticky) {
              isSticky = false;
              videoContainer.classList.remove('sticky-video-active');
              closeBtn.classList.add('hidden');
            }
          }, { passive: true });

          closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            isStickyClosed = true;
            isSticky = false;
            videoContainer.classList.remove('sticky-video-active');
            closeBtn.classList.add('hidden');
          });
        }
      });
    


      window.addEventListener('load', function() {
        if (window._wq) {
          window._wq.push({ id: "_all", onReady: function(video) {
            console.log("Wideo gotowe do odtworzenia");
          }});
        }
      });
    


      function openLightbox(src) {
        const lightbox = document.getElementById('image-lightbox');
        const img = document.getElementById('lightbox-img');
        if (lightbox && img) {
          img.src = src;
          lightbox.classList.remove('opacity-0', 'pointer-events-none');
          lightbox.classList.add('opacity-100', 'pointer-events-auto');
          setTimeout(() => img.classList.remove('scale-95'), 50);
        }
      }

      function closeLightbox(e) {
        if (e) e.stopPropagation();
        const lightbox = document.getElementById('image-lightbox');
        const img = document.getElementById('lightbox-img');
        if (lightbox && img) {
          lightbox.classList.remove('opacity-100', 'pointer-events-auto');
          lightbox.classList.add('opacity-0', 'pointer-events-none');
          img.classList.add('scale-95');
          setTimeout(() => { img.src = ''; }, 300);
        }
      }

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
      });
    


      document.addEventListener('DOMContentLoaded', () => {
          const tabBtns = document.querySelectorAll('.nav-tab-btn');
          const sliderBg = document.getElementById('nav-slider-bg');
          let isClickScrolling = false;
          let scrollTimeout;

          function updateSliderPosition(btn, animate = true) {
              if (!sliderBg || !btn) return;
              const rect = btn.getBoundingClientRect();
              const parentRect = btn.parentElement.getBoundingClientRect();
              const parentScrollLeft = btn.parentElement.scrollLeft;
              const offsetLeft = rect.left - parentRect.left + parentScrollLeft;

              if (animate) {
                  sliderBg.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), width 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
              } else {
                  sliderBg.style.transition = 'none';
              }

              sliderBg.style.transform = `translateX(${offsetLeft}px)`;
              sliderBg.style.width = `${rect.width}px`;
          }

          function setActiveTab(targetId, animate = true) {
              const activeBtn = Array.from(tabBtns).find(b => b.getAttribute('data-target') === targetId);
              if (!activeBtn) return;

              tabBtns.forEach(b => {
                  b.classList.remove('text-white');
                  b.classList.add('text-zinc-400');
                  b.setAttribute('aria-selected', 'false');
              });
              activeBtn.classList.remove('text-zinc-400');
              activeBtn.classList.add('text-white');
              activeBtn.setAttribute('aria-selected', 'true');
              updateSliderPosition(activeBtn, animate);
          }

          if (tabBtns.length > 0) {
              setTimeout(() => updateSliderPosition(tabBtns[0], false), 50);
              window.addEventListener('load', () => updateSliderPosition(tabBtns[0], false));
          }

          tabBtns.forEach(btn => {
              btn.addEventListener('click', (e) => {
                  e.preventDefault();
                  isClickScrolling = true;

                  const targetId = btn.getAttribute('data-target');
                  setActiveTab(targetId, true);

                  const targetEl = document.getElementById(targetId);
                  if (targetEl) {
                      targetEl.scrollIntoView({ behavior: 'smooth' });

                      if (scrollTimeout) clearTimeout(scrollTimeout);

                      scrollTimeout = setTimeout(() => {
                          isClickScrolling = false;
                      }, 1000);
                  }
              });
          });

          window.addEventListener('resize', () => {
              const activeBtn = document.querySelector('.nav-tab-btn[aria-selected="true"]');
              if (activeBtn) updateSliderPosition(activeBtn, false);
          });

          const container = document.querySelector('.nav-tab-btn')?.parentElement;
          if (container) {
              container.addEventListener('scroll', () => {
                  const activeBtn = document.querySelector('.nav-tab-btn[aria-selected="true"]');
                  if (activeBtn) updateSliderPosition(activeBtn, false);
              }, { passive: true });
          }

          const sectionIds = Array.from(tabBtns).map(btn => btn.getAttribute('data-target'));
          const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

          const observerOptions = {
              root: null,
              rootMargin: '-25% 0px -45% 0px',
              threshold: 0
          };

          const observer = new IntersectionObserver((entries) => {
              if (isClickScrolling) return;

              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      setActiveTab(entry.target.id, true);
                  }
              });
          }, observerOptions);

          sections.forEach(section => observer.observe(section));

          window.addEventListener('scroll', () => {
              if (isClickScrolling) return;

              if (sections.length > 0) {
                  const firstSectionRect = sections[0].getBoundingClientRect();
                  if (firstSectionRect.top > window.innerHeight * 0.3) {
                      setActiveTab(sections[0].id, true);
                  }
              }
          }, { passive: true });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="background-particles" style={{position: 'fixed', top: '0', left: '0', width: '100%', height: '100dvh', zIndex: '-1', pointerEvents: 'none', overflow: 'hidden'}}></div>
<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
</div>

<section className="relative flex items-center justify-center text-center w-full bg-zinc-950 md:pt-16 pb-24 min-h-[95dvh] z-[100] pt-8">
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<img alt="Tło" className="w-full h-full object-cover opacity-40 md:hidden" src="https://i.postimg.cc/vZwd5KVD/Uniform-Portrait-Background.jpg"/>
<img alt="Tło" className="hidden md:block w-full h-full object-cover opacity-40" src="https://i.postimg.cc/kMZDmVNH/Pricing-Page-Backdrop-4.jpg"/>
<div className="absolute inset-0 bg-zinc-950/60"></div>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[900px] h-[500px] bg-zinc-950/60 blur-[100px] rounded-full pointer-events-none z-0"></div>
<div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center">

<div className="space-y-6 max-w-5xl w-full relative mx-auto text-center mb-12 flex flex-col items-center pt-8">

<div className="inline-flex p-1.5 bg-zinc-900/80 backdrop-blur-xl rounded-full border border-zinc-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-[max-content] fixed top-6 left-1/2 -translate-x-1/2 z-[200] max-w-[95vw] overflow-x-auto hide-scrollbar">
<div className="absolute top-1.5 bottom-1.5 left-0 bg-emerald-500 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0 shadow-[0_0_20px_-3px_rgba(16,185,129,0.4)]" id="nav-slider-bg"></div>
<button aria-selected="true" className="nav-tab-btn relative z-10 px-5 sm:px-8 py-2.5 text-xs sm:text-sm font-medium text-white transition-colors duration-300" data-target="sekcja-kursy">
              Kursy
            </button>
<button aria-selected="false" className="nav-tab-btn relative z-10 px-5 sm:px-8 py-2.5 text-xs sm:text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-zinc-200" data-target="sekcja-faktura">
              Faktura
            </button>
<button aria-selected="false" className="nav-tab-btn relative z-10 px-5 sm:px-8 py-2.5 text-xs sm:text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-zinc-200" data-target="sekcja-spolecznosc">
              Społeczność
            </button>
</div>
<h1 className="text-4xl sm:text-5xl md:text-[56px] lg:text-6xl font-medium tracking-tight text-white leading-[1.1] drop-shadow-2xl max-w-5xl mx-auto text-balance mt-20 sm:mt-24">
            Onboarding - precyzyjna instrukcja jak zalogować się na platformę
          </h1>
<p className="text-lg sm:text-xl md:text-2xl text-zinc-400 font-normal tracking-tight leading-relaxed max-w-3xl mx-auto">
            Jak korzystać z materiałów, jak dołączyć do społeczności, jak pobrać
            fakturę i wiele więcej
          </p>
</div>

<div className="w-full max-w-4xl aspect-video mx-auto mb-12 relative z-50 min-h-[200px]" id="video-wrapper">
<div className="w-full h-full rounded-3xl overflow-hidden shadow-[0_0_50px_-15px_rgba(16,185,129,0.15)] border border-zinc-800/60 bg-zinc-900/40 relative group aspect-video min-h-[200px]" id="video-container">
<button className="hidden absolute top-2 right-2 z-[60] w-8 h-8 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#00FF7F] transition-colors shadow-lg cursor-pointer" id="close-sticky-video">
<iconify-icon className="text-lg" icon="lucide:x"></iconify-icon>
</button>
<iframe allowfullscreen="" allowtransparency="true" className="wistia_embed absolute top-0 left-0 w-full h-full aspect-video" frameborder="0" mozallowfullscreen="" msallowfullscreen="" name="wistia_embed" oallowfullscreen="" scrolling="no" src="https://fast.wistia.net/embed/iframe/wbobzcmwsn?videoFoam=true&amp;playerColor=10b981" title="Wistia video player" webkitallowfullscreen=""></iframe>
</div>
</div>
</div>
</section>

<section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-24 space-y-32">

<div className="flex flex-col w-full gap-24 lg:gap-32 scroll-mt-24" id="sekcja-kursy">

<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full">
<div className="flex-1 space-y-6 w-full">
<div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-emerald-400 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]">
<iconify-icon className="text-2xl" icon="solar:user-id-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white">
              Jak zalogować się do zakupionych materiałów?
            </h2>
<div className="space-y-4 text-zinc-400 text-lg">
<p className="leading-relaxed">
                Dostęp do większości zakupionych materiałów otrzymujesz
                natychmiast. W niektórych specyficznych sytuacjach przy zakupie
                większych pakietów część dostępów wysyłamy ręcznie.
              </p>
<ul className="space-y-4 mt-6">
<li className="flex items-start gap-4">
<span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-medium mt-0.5">
                    1
                  </span>
<span className="leading-relaxed">
                    Aby zalogować się do zakupionych produktów musisz zalogować
                    się na
                    <a className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition-colors font-medium" href="https://www.easy.tools/pl" rel="noopener noreferrer" target="_blank">
                      https://www.easy.tools/pl
                    </a>
                    . Jeśli masz już konto w “easy” na tym emailu to logujesz
                    się na stronie. Jeśli to twój pierwszy zakup przez tą
                    platformę to na email podany podczas płatności zostały Ci
                    wysłane hasła do logowania.
                  </span>
</li>
<li className="flex items-start gap-4">
<span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-medium mt-0.5">
                    2
                  </span>
<span className="leading-relaxed">
                    Po przejściu na stronę kliknij zaloguj i wpisz właściwy
                    login, oraz hasło. Możesz skorzystać z opcji “Zaloguj się
                    Automatycznie” po kliknięciu w przycisk znajdujący się w
                    wiadomości email, która przychodzi natychmiast po zakupie.
                    Możesz też kliknąć w przycisk w tej sekcji. Kliknij
                    ”zaloguj” i wybierz opcję ”magiczny link”. Dzięki temu na
                    Twój adres email przyjdzie link do automatycznego logowania.
                    Ważne, żeby to był ten sam email, który podano podczas
                    realizacji zamówienia.
                  </span>
</li>
</ul>
</div>
</div>
<div className="flex-1 w-full relative group">
<div className="absolute inset-0 bg-emerald-500/5 blur-[80px] rounded-full transition-opacity duration-700 group-hover:opacity-100 opacity-70"></div>
<div className="relative bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden min-h-[360px] flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-1">
<div className="w-full max-w-sm bg-zinc-950 rounded-2xl border border-zinc-800/80 p-8 shadow-2xl relative z-10 flex flex-col gap-6">
<div className="w-14 h-14 bg-emerald-500/10 rounded-2xl mx-auto flex items-center justify-center border border-emerald-500/20 shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]">
<iconify-icon className="text-emerald-400 text-3xl" icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
</div>
<div className="text-center space-y-1">
<div className="h-4 w-32 bg-zinc-800 rounded mx-auto"></div>
<div className="h-3 w-48 bg-zinc-800/50 rounded mx-auto mt-2"></div>
</div>
<div className="space-y-4 w-full mt-2">
<div className="h-12 w-full bg-zinc-900/80 border border-zinc-800 rounded-xl flex items-center px-4 gap-3">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:letter-linear"></iconify-icon>
<div className="h-3 w-24 bg-zinc-700/50 rounded"></div>
</div>
<div className="h-12 w-full bg-zinc-900/80 border border-zinc-800 rounded-xl flex items-center px-4 gap-3">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:lock-password-linear"></iconify-icon>
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
</div>
</div>
<div className="h-12 w-full bg-emerald-500 rounded-xl mt-4 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
<div className="h-3.5 w-16 bg-white/90 rounded"></div>
</div>
</div>
</div>
<div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-[40px] pointer-events-none"></div>
<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-zinc-500/10 rounded-full blur-[40px] pointer-events-none"></div>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 w-full">
<div className="flex-1 space-y-6 w-full">
<div className="space-y-4 text-zinc-400 text-lg">
<ul className="space-y-4">
<li className="flex items-start gap-4">
<span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-medium mt-0.5">
                    3
                  </span>
<span className="leading-relaxed">
                    Jeśli zamiast opcji magiczny link klikniesz w hasło to
                    system pozwoli Ci się zalogować używając hasła i loginu,
                    który również otrzymujesz automatycznie przy pierwszym
                    zakupie na platformie Easytools.
                  </span>
</li>
<li className="flex items-start gap-4">
<span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-medium mt-0.5">
                    4
                  </span>
<span className="leading-relaxed">
<strong className="text-zinc-200 font-medium">Ważne!</strong>
                    Po zalogowaniu upewnij się, że jesteś na zakładce
                    <strong className="text-zinc-200 font-medium">
                      portal klienta
                    </strong>
                    , a nie portal Twórcy. Portal twórcy służy do sprzedaży
                    swoich własnych produktów, a w portal klienta znajdziesz
                    wszystkie produkty, które udało Ci się zakupić.
                  </span>
</li>
<li className="flex items-start gap-4">
<span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-medium mt-0.5">
                    5
                  </span>
<span className="leading-relaxed">
                    Gdy jesteś zalogowany na portal klienta wybierz produkt do
                    którego chcesz wejść, a następnie kliknij OGLĄDAJ, a
                    automatycznie przekieruje Cię na platformę szkoleniową gdzie
                    znajdziesz wszystkie materiały.
                  </span>
</li>
</ul>
<div className="pt-4 mt-8">
<a className="relative group inline-flex items-center justify-center px-10 py-5 font-semibold text-white transition-all duration-300 rounded-2xl z-10 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)]" href="https://www.easy.tools/pl" rel="noopener noreferrer" target="_blank">
<span className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-400 opacity-90 group-hover:opacity-100 transition-opacity"></span>
<span className="absolute inset-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.25)_0%,transparent_60%)]"></span>
<span className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent rounded-b-2xl pointer-events-none"></span>
<span className="relative flex items-center gap-3 text-lg tracking-wide drop-shadow-md">
                    ZALOGUJ SIĘ
                    <iconify-icon className="text-2xl" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
</div>
</div>
<div className="flex-1 w-full relative group">
<div className="absolute inset-0 bg-emerald-500/5 blur-[80px] rounded-full transition-opacity duration-700 group-hover:opacity-100 opacity-70"></div>
<div className="relative bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden min-h-[360px] flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-1">
<div className="w-full max-w-md bg-zinc-950 rounded-2xl border border-zinc-800/80 p-5 shadow-2xl relative z-10 flex flex-col gap-4">
<div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
<iconify-icon className="text-zinc-400" icon="solar:widget-5-linear"></iconify-icon>
</div>
<div className="h-3.5 w-28 bg-zinc-800 rounded"></div>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50">
<iconify-icon className="text-zinc-400 text-sm" icon="solar:user-rounded-linear"></iconify-icon>
</div>
</div>
<div className="flex gap-4">
<div className="h-2 w-16 bg-emerald-500 rounded"></div>
<div className="h-2 w-16 bg-zinc-800 rounded"></div>
</div>
<div className="grid grid-cols-2 gap-3 mt-1">
<div className="bg-zinc-900/80 border border-zinc-800/80 rounded-xl p-3 flex flex-col gap-3 group-hover:border-emerald-500/30 transition-colors">
<div className="w-full h-20 bg-zinc-800 rounded-lg overflow-hidden relative">
<div className="absolute inset-0 bg-emerald-500/10"></div>
<iconify-icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-400 text-2xl opacity-80" icon="solar:play-circle-bold"></iconify-icon>
</div>
<div className="space-y-1.5">
<div className="h-2.5 w-full bg-zinc-700 rounded"></div>
<div className="h-2 w-2/3 bg-zinc-800 rounded"></div>
</div>
<div className="h-6 w-full bg-zinc-800 rounded mt-auto flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
<div className="h-1.5 w-10 bg-emerald-500/80 rounded"></div>
</div>
</div>
<div className="bg-zinc-900/80 border border-zinc-800/80 rounded-xl p-3 flex flex-col gap-3">
<div className="w-full h-20 bg-zinc-800 rounded-lg"></div>
<div className="space-y-1.5">
<div className="h-2.5 w-5/6 bg-zinc-700 rounded"></div>
<div className="h-2 w-1/2 bg-zinc-800 rounded"></div>
</div>
<div className="h-6 w-full bg-zinc-800 rounded mt-auto flex items-center justify-center">
<div className="h-1.5 w-10 bg-zinc-600 rounded"></div>
</div>
</div>
</div>
</div>
<div className="absolute -top-10 -left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-[40px] pointer-events-none"></div>
</div>
</div>
</div>

<div className="w-full">
<div className="flex items-center justify-between mb-8 px-2">
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-white flex items-center gap-3">
              Zrzuty ekranu z procesu logowania
              <iconify-icon className="text-emerald-500 animate-pulse hidden sm:block" icon="lucide:arrow-right"></iconify-icon>
</h3>
<p className="text-zinc-500 text-sm hidden sm:block">
              Przesuń, aby zobaczyć więcej
            </p>
</div>
<div className="-mx-4 sm:-mx-6 px-4 sm:px-6">
<div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
<div className="relative group cursor-pointer rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-900/50 shadow-xl flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[400px] h-64 md:h-72 snap-center" onclick="openLightbox(this.querySelector('img').src)">
<img alt="Zrzut logowania 1" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" src="https://i.postimg.cc/5yGPNCvD/Easytools1.jpg"/>
<div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-4xl drop-shadow-md" icon="lucide:zoom-in"></iconify-icon>
</div>
</div>
<div className="relative group cursor-pointer rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-900/50 shadow-xl flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[400px] h-64 md:h-72 snap-center" onclick="openLightbox(this.querySelector('img').src)">
<img alt="Zrzut logowania 2" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" src="https://i.postimg.cc/4xp8sn3q/easytools2.png"/>
<div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-4xl drop-shadow-md" icon="lucide:zoom-in"></iconify-icon>
</div>
</div>
<div className="relative group cursor-pointer rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-900/50 shadow-xl flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[400px] h-64 md:h-72 snap-center" onclick="openLightbox(this.querySelector('img').src)">
<img alt="Zrzut logowania 3" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-4xl drop-shadow-md" icon="lucide:zoom-in"></iconify-icon>
</div>
</div>
<div className="relative group cursor-pointer rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-900/50 shadow-xl flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[400px] h-64 md:h-72 snap-center" onclick="openLightbox(this.querySelector('img').src)">
<img alt="Zrzut logowania 4" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" src="https://i.postimg.cc/C5ZNtxXV/easytools4.png"/>
<div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-4xl drop-shadow-md" icon="lucide:zoom-in"></iconify-icon>
</div>
</div>
<div className="relative group cursor-pointer rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-900/50 shadow-xl flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[400px] h-64 md:h-72 snap-center" onclick="openLightbox(this.querySelector('img').src)">
<img alt="Zrzut logowania 5" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-4xl drop-shadow-md" icon="lucide:zoom-in"></iconify-icon>
</div>
</div>
<div className="relative group cursor-pointer rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-900/50 shadow-xl flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[400px] h-64 md:h-72 snap-center" onclick="openLightbox(this.querySelector('img').src)">
<img alt="Zrzut logowania 6" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" src="https://i.postimg.cc/B6bcLvq3/easytools6.png"/>
<div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-4xl drop-shadow-md" icon="lucide:zoom-in"></iconify-icon>
</div>
</div>
<div className="w-1 sm:w-2 flex-shrink-0"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 scroll-mt-24" id="sekcja-faktura">
<div className="flex-1 space-y-6">
<div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-emerald-400 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]">
<iconify-icon className="text-2xl" icon="solar:document-add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white">
            Jak pobrać fakturę za moje zamówienie?
          </h2>
<div className="space-y-4 text-zinc-400 text-lg">
<p className="leading-relaxed">
              Wszystkie faktury wystawiane są automatycznie na podstawie danych,
              które zostały podane podczas płatności.
            </p>
<ul className="space-y-4 mt-6">
<li className="flex items-start gap-4">
<span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-medium mt-0.5">
                  1
                </span>
<span>
                  Faktura powinna trafić na Twoją skrzynkę email podaną podczas
                  zamówienia w ciągu kilku minut.
                </span>
</li>
<li className="flex items-start gap-4">
<span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-medium mt-0.5">
                  2
                </span>
<span>
                  Faktury są wystawiane za pomocą systemu Fakturownia.
                </span>
</li>
<li className="flex items-start gap-4">
<span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-medium mt-0.5">
                  3
                </span>
<span>Posiadamy pełną integrację z KSEF.</span>
</li>
</ul>
</div>
</div>
<div className="flex-1 w-full relative group">
<div className="absolute inset-0 bg-emerald-500/5 blur-[80px] rounded-full transition-opacity duration-700 group-hover:opacity-100 opacity-70"></div>
<div className="relative bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden transition-transform duration-500 group-hover:-translate-y-1 cursor-pointer h-full min-h-[300px] sm:min-h-[360px] w-full flex items-center justify-center" onclick="openLightbox(this.querySelector('img').src)">
<img alt="Faktura" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" src="https://i.postimg.cc/ZnY4m1ZK/Branded-Graphic-Restyle.jpg"/>
<div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
<iconify-icon className="text-white text-4xl drop-shadow-md" icon="lucide:zoom-in"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 scroll-mt-24" id="sekcja-spolecznosc">
<div className="flex-1 space-y-6">
<div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-emerald-400 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white">
            Jak dołączyć do społeczności?
          </h2>
<div className="space-y-4 text-zinc-400 text-lg">
<p className="leading-relaxed">
              Dostęp do społeczności Automation Club najczęściej jest
              przyznawany przy zakupie pakietu szkoleń AI Empire. Jeśli masz
              taki produkt kupiony w płatności jednorazowej lub ratalnej to na
              Twoją skrzynkę e-mail niebawem otrzymasz zaproszenie, które
              wysyłam ręcznie.
            </p>
<ul className="space-y-4 mt-6">
<li className="flex items-start gap-4">
<span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-medium mt-0.5">
                  1
                </span>
<span className="leading-relaxed">
                  Szukaj w tytule email:
                  <strong className="text-zinc-200 font-medium">
                    “invited you to join Automation Club” od Tomasz Guzik
                  </strong>
</span>
</li>
<li className="flex items-start gap-4">
<span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-medium mt-0.5">
                  2
                </span>
<span className="leading-relaxed">
                  Kliknij
                  <strong>Join</strong>
                  , aby dołączyć. System poprosi Cię, abyś założył/założyła
                  konto na platformie Skool. Niech nie zmyli Cię ten napis, że
                  platforma jest dodatkowo płatna. Płatna jest tylko dla osób,
                  które nie posiadają pakietu AI Empire. Jeśli należy Ci się
                  dostęp to po założeniu konta dostęp jest w 100% darmowy.
                </span>
</li>
<li className="flex items-start gap-4">
<span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-medium mt-0.5">
                  3
                </span>
<span className="leading-relaxed">
                  Skup się na 2 głównych zakładkach:
                  <br/>
<strong className="text-zinc-200">Classroom</strong>
                  , gdzie znajdują się szkolenia i materiały.
                  <br/>
<strong className="text-zinc-200">Community</strong>
                  , gdzie możesz dodawać posty i śledzić wpisy innych.
                </span>
</li>
</ul>
</div>
</div>
<div className="flex-1 w-full relative group">
<div className="absolute inset-0 bg-emerald-500/5 blur-[80px] rounded-full transition-opacity duration-700 group-hover:opacity-100 opacity-70"></div>
<div className="relative bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden min-h-[360px] flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-1">

<div className="space-y-5 relative z-10 w-full mb-2">
<div className="flex items-end gap-3 w-4/5">
<div className="w-10 h-10 rounded-full bg-zinc-800/80 flex-shrink-0 border border-zinc-700/50"></div>
<div className="bg-zinc-800/80 p-5 rounded-2xl rounded-bl-none border border-zinc-700/50">
<div className="w-28 h-2.5 bg-zinc-600 rounded-full mb-3"></div>
<div className="w-40 h-2.5 bg-zinc-700 rounded-full"></div>
</div>
</div>
<div className="flex items-end gap-3 w-4/5 ml-auto flex-row-reverse">
<div className="w-10 h-10 rounded-full bg-emerald-900/30 border border-emerald-500/30 flex-shrink-0 flex items-center justify-center text-emerald-500">
<iconify-icon className="text-xl" icon="solar:user-bold" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-emerald-500/10 p-5 rounded-2xl rounded-br-none border border-emerald-500/20">
<div className="w-24 h-2.5 bg-emerald-400/80 rounded-full mb-3 ml-auto"></div>
<div className="w-36 h-2.5 bg-emerald-500/50 rounded-full ml-auto"></div>
</div>
</div>
<div className="flex items-end gap-3 w-4/5">
<div className="w-10 h-10 rounded-full bg-zinc-800/80 flex-shrink-0 border border-zinc-700/50"></div>
<div className="bg-zinc-800/80 p-5 rounded-2xl rounded-bl-none border border-zinc-700/50">
<div className="w-36 h-2.5 bg-zinc-600 rounded-full mb-3"></div>
<div className="w-20 h-2.5 bg-zinc-700 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-zinc-900/80 via-zinc-900/40 to-transparent z-0"></div>
</div>
</div>
</div>
<div className="w-full max-w-4xl mx-auto p-8 md:p-12 bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80 rounded-[2rem] flex flex-col items-center justify-center gap-8 shadow-2xl text-center relative overflow-hidden !mt-16">
<div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-white max-w-2xl relative z-10 text-balance leading-snug">
          Jeśli masz już założone konto to możesz logować się na społeczność
          błyskawicznie klikając w ten przycisk i klikając log in:
        </h3>
<a className="relative group inline-flex items-center justify-center px-10 py-5 font-semibold text-white transition-all duration-300 rounded-2xl z-10 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)]" href="https://www.skool.com/automation-club-8474/about" rel="noopener noreferrer" target="_blank">
<span className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-400 opacity-90 group-hover:opacity-100 transition-opacity"></span>
<span className="absolute inset-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.25)_0%,transparent_60%)]"></span>
<span className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent rounded-b-2xl pointer-events-none"></span>
<span className="relative flex items-center gap-3 text-lg tracking-wide drop-shadow-md">
            PRZEJDŹ DO SKOOLA
            <iconify-icon className="text-2xl" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
<div className="space-y-8 pt-16 border-t border-zinc-800/50 w-full">
<div className="text-center space-y-4 mb-10">
<h3 className="text-2xl lg:text-3xl font-medium tracking-tight text-white">
            Zrzuty ekranu z procesu logowania do Skool
          </h3>
<p className="text-zinc-400">Kliknij w obrazek, aby go powiększyć.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
<div className="relative group cursor-pointer rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-900/50 shadow-xl h-72 md:h-80" onclick="openLightbox(this.querySelector('img').src)">
<img alt="Skool Zrzut 1" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" src="https://i.postimg.cc/P5x8tRKY/skool1.jpg"/>
<div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-4xl drop-shadow-md" icon="lucide:zoom-in"></iconify-icon>
</div>
</div>
<div className="relative group cursor-pointer rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-900/50 shadow-xl h-72 md:h-80" onclick="openLightbox(this.querySelector('img').src)">
<img alt="Skool Zrzut 2" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" src="https://i.postimg.cc/wM27zXmk/skool2.png"/>
<div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-4xl drop-shadow-md" icon="lucide:zoom-in"></iconify-icon>
</div>
</div>
<div className="relative group cursor-pointer rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-900/50 shadow-xl h-72 md:h-80" onclick="openLightbox(this.querySelector('img').src)">
<img alt="Skool Zrzut 3" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-4xl drop-shadow-md" icon="lucide:zoom-in"></iconify-icon>
</div>
</div>
</div>
</div>
</section>





<div className="fixed inset-0 z-[9999] bg-zinc-950/90 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 flex items-center justify-center p-4" id="image-lightbox" onclick="closeLightbox()">
<button className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors bg-zinc-900/80 p-3 rounded-full border border-zinc-700 backdrop-blur-md cursor-pointer" onclick="closeLightbox(event)">
<iconify-icon className="text-2xl" icon="lucide:x"></iconify-icon>
</button>
<img alt="Powiększenie" className="max-w-full max-h-[90vh] rounded-lg shadow-2xl scale-95 transition-transform duration-300 object-contain" id="lightbox-img" src=""/>
</div>




    </>
  );
}
