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



        // ===== GALLERY / LIGHTBOX LOGIC =====
        // FIX: Use the same Supabase image URLs and matching captions from the gallery cards
        var galleryImages = [
            { src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b46fcab3-1e58-4907-aaa9-43cbcaf524a0_800w.jpg', caption: 'Podlahové vytápění' },
            { src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/723d3a90-1a5b-4d2e-88f3-74e0bcb0c0d0_800w.jpg', caption: 'Instalace odpadů' },
            { src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2db871c-17b2-417f-bfc2-1d75a5ecd56c_800w.jpg', caption: 'Rozvody kanalizace' },
            { src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2bb91ccc-2a37-4f03-9c6d-8e9847cb7ef7_800w.jpg', caption: 'Montáž závěsného WC' }
        ];
        var currentImageIndex = 0;
        var lightbox = document.getElementById('lightbox');
        var lightboxImg = document.getElementById('lightbox-img');
        var lightboxCaption = document.getElementById('lightbox-caption');
        var lightboxCounter = document.getElementById('lightbox-counter');

        function showImage(index) {
            currentImageIndex = index;
            if (currentImageIndex < 0) currentImageIndex = galleryImages.length - 1;
            if (currentImageIndex >= galleryImages.length) currentImageIndex = 0;
            lightboxImg.src = galleryImages[currentImageIndex].src;
            lightboxImg.alt = galleryImages[currentImageIndex].caption;
            lightboxCaption.textContent = galleryImages[currentImageIndex].caption;
            lightboxCounter.textContent = (currentImageIndex + 1) + ' / ' + galleryImages.length;
        }

        function openLightbox(index) {
            showImage(index);
            lightbox.classList.add('lightbox-open');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            lightbox.classList.remove('lightbox-open');
            document.body.style.overflow = '';
        }

        function closeLightboxOnBg(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        }

        function prevImage(e) {
            e.stopPropagation();
            showImage(currentImageIndex - 1);
        }

        function nextImage(e) {
            e.stopPropagation();
            showImage(currentImageIndex + 1);
        }

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (!lightbox.classList.contains('lightbox-open')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showImage(currentImageIndex - 1);
            if (e.key === 'ArrowRight') showImage(currentImageIndex + 1);
        });

        // Mobile menu logic
        (function() {
            var mobileMenuOpen = false;
            var mobileMenu = document.getElementById('mobile-menu');
            var menuToggle = document.getElementById('mobile-menu-toggle');
            var iconOpen = document.getElementById('hamburger-icon-open');
            var iconClose = document.getElementById('hamburger-icon-close');
            var menuLinks = document.querySelectorAll('.mobile-menu-link');

            function openMobileMenu() {
                mobileMenuOpen = true;
                mobileMenu.classList.add('menu-open');
                iconOpen.style.display = 'none';
                iconClose.style.display = 'block';
            }

            function closeMobileMenu() {
                mobileMenuOpen = false;
                mobileMenu.classList.remove('menu-open');
                iconOpen.style.display = 'block';
                iconClose.style.display = 'none';
            }

            function toggleMobileMenu() {
                if (mobileMenuOpen) {
                    closeMobileMenu();
                } else {
                    openMobileMenu();
                }
            }

            menuToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                toggleMobileMenu();
            });

            menuLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    closeMobileMenu();
                });
            });

            document.addEventListener('click', function(e) {
                if (!mobileMenuOpen) return;
                if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                    closeMobileMenu();
                }
            });
        })();

        // Mobile sticky bar logic
        (function() {
            var stickyBar = document.getElementById('mobile-sticky-bar');
            var heroSection = document.getElementById('hero-section');
            
            function checkScroll() {
                if (!heroSection || !stickyBar) return;
                var heroBottom = heroSection.getBoundingClientRect().bottom;
                if (heroBottom <= 0) {
                    stickyBar.classList.add('visible');
                } else {
                    stickyBar.classList.remove('visible');
                }
            }

            window.addEventListener('scroll', checkScroll, { passive: true });
            window.addEventListener('resize', checkScroll, { passive: true });
            checkScroll();
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
      

<nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center">
<a className="flex flex-col group" href="#">
<span className="leading-none group-hover:text-blue-600 transition-colors text-xl font-semibold text-slate-900 tracking-tighter">
                            Lukáš Plášil
                        </span>
<span className="uppercase text-xs font-normal text-slate-500 tracking-wide mt-1">
                            Voda – Topení – Odpady
                        </span>
</a>
</div>
<div className="hidden md:flex items-center space-x-8 text-[15px] font-normal text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#sluzby">Služby</a>
<a className="hover:text-slate-900 transition-colors" href="#ukazky">Ukázky</a>
<a className="hover:text-slate-900 transition-colors" href="#o-mne">O mně</a>
<a className="hover:text-slate-900 transition-colors" href="#recenze">Recenze</a>
<a className="hover:text-slate-900 transition-colors" href="#kontakt">Kontakt</a>
</div>
<div className="hidden md:flex items-center">
<a className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-normal rounded-lg hover:bg-slate-800 transition-all shadow-sm ring-1 ring-slate-900 group" href="tel:735293695">
<iconify-icon className="text-lg text-slate-300 group-hover:text-white transition-colors" icon="solar:phone-calling-linear"></iconify-icon>
<span>735 293 695</span>
</a>
</div>
<div className="flex md:hidden">
<button className="p-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors focus:outline-none" id="mobile-menu-toggle" type="button">
<span id="hamburger-icon-open">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</span>
<span id="hamburger-icon-close" style={{display: 'none'}}>
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</span>
</button>
</div>
</div>
</div>

<div className="md:hidden bg-white w-full border-t border-slate-100" id="mobile-menu">
<div className="px-4 py-4 space-y-1">
<a className="mobile-menu-link block px-4 py-3 text-lg font-normal text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg" href="#sluzby">Služby</a>
<a className="mobile-menu-link block px-4 py-3 text-lg font-normal text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg" href="#ukazky">Ukázky</a>
<a className="mobile-menu-link block px-4 py-3 text-lg font-normal text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg" href="#o-mne">O mně</a>
<a className="mobile-menu-link block px-4 py-3 text-lg font-normal text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg" href="#recenze">Recenze</a>
<a className="mobile-menu-link block px-4 py-3 text-lg font-normal text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg" href="#kontakt">Kontakt</a>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative" id="hero-section">

<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
<div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 translate-y-24 -translate-x-24 w-[600px] h-[600px] bg-cyan-50/50 rounded-full blur-[120px] pointer-events-none"></div>
<div className="sm:px-6 lg:px-8 text-center max-w-7xl z-10 mr-auto ml-auto pr-4 pl-4 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-normal mb-8 shadow-sm hover:border-blue-200 hover:text-blue-600 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Instalatér – voda, topení, odpady
            </div>
<h1 className="text-4xl sm:text-5xl md:text-7xl font-medium text-slate-900 tracking-tight mb-6 leading-[1.1]">
                Profesionální instalatér<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">pro váš dům i byt</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
                Specializuji se na kompletní rozvody vody, podlahové topení a montáž odpadů. Nabízím technicky přesné řešení pro novostavby i rekonstrukce.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2.5 px-8 py-3.5 bg-slate-900 text-white font-normal rounded-xl hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-lg shadow-slate-900/10 group" href="tel:735293695">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:phone-calling-linear"></iconify-icon>
<span className="">Zavolat: 735 293 695</span>
</a>
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2.5 px-8 py-3.5 bg-white text-slate-700 border border-slate-200 font-normal rounded-xl hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all shadow-sm" href="#sluzby">
<span className="">Moje práce</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-12 md:mt-16 text-slate-500 text-sm font-normal">
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-blue-500" icon="solar:map-point-linear"></iconify-icon>
                    Nová Paka a okolí
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-blue-500" icon="solar:shield-check-linear"></iconify-icon>
                    Tlakové zkoušky
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-blue-500" icon="solar:clock-circle-linear"></iconify-icon>
                    Dodržení termínů
                </div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Proč si vybrat mě?</h2>
<p className="text-lg text-slate-500">Stavím na odbornosti, precizním provedení a osobním přístupu ke každé zakázce.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:user-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Samostatný instalatér</h3>
<p className="text-slate-500 leading-relaxed">
                        Komunikujete přímo se mnou. Zaručuji individuální přístup a řešení na míru bez zbytečných prostředníků.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:medal-star-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Odborné řešení</h3>
<p className="text-slate-500 leading-relaxed">
                        Kladu důraz na funkčnost celého systému. Každou zakázku dokončuji tlakovou zkouškou pro vaši jistotu.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:clipboard-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Spolehlivost</h3>
<p className="text-slate-500 leading-relaxed">
                        Dodržuji domluvené termíny a rozpočet. Precizní práce a pořádek na stavbě jsou pro mě samozřejmostí.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-white border-slate-200 border-t pt-24 pb-24" id="sluzby">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<span className="uppercase block text-sm font-normal text-blue-600 tracking-wider mb-2">Moje práce</span>
<h2 className="md:text-4xl text-3xl font-medium text-slate-900 tracking-tight mb-4">Nabízené služby</h2>
<p className="text-lg text-slate-500">Realizuji kompletní systémy vody, topení a odpadů od přípravy až po kompletaci.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 bg-slate-50/50 hover:bg-white">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-6 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-2xl" icon="solar:waterdrops-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Rozvody vody</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-slate-600 text-base">
<iconify-icon className="text-xl text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Kompletní rozvody v novostavbách</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<iconify-icon className="text-xl text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Sekání drážek a příprava ve zdivu</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<iconify-icon className="text-xl text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Příprava pro kuchyně a koupelny</span>
</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 bg-slate-50/50 hover:bg-white">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-6 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-2xl" icon="solar:flame-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Vytápění</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-slate-600 text-base">
<iconify-icon className="text-xl text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Podlahové vytápění (systémové desky)</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<iconify-icon className="text-xl text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Instalace a dopojení radiátorů</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<iconify-icon className="text-xl text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Příprava topných okruhů</span>
</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 bg-slate-50/50 hover:bg-white">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-6 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-2xl" icon="solar:trash-bin-trash-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Odpady a kanalizace</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-slate-600 text-base">
<iconify-icon className="text-xl text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Kompletní rozvody HT potrubí</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<iconify-icon className="text-xl text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Svislé i vodorovné odpadní větve</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<iconify-icon className="text-xl text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Napojení kanalizace</span>
</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 bg-slate-50/50 hover:bg-white">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-6 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-2xl" icon="solar:bath-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Sanitární technika</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-slate-600 text-base">
<iconify-icon className="text-xl text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Montáž závěsných WC (Geberit)</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<iconify-icon className="text-xl text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Napojení umyvadel, baterií a sprch</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<iconify-icon className="text-xl text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Příprava koupelen před obkladem</span>
</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 bg-slate-50/50 hover:bg-white">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-6 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-2xl" icon="solar:home-2-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Rekonstrukce</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-slate-600 text-base">
<iconify-icon className="text-xl text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Výměna starých rozvodů vody</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<iconify-icon className="text-xl text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Rekonstrukce odpadních větví</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<iconify-icon className="text-xl text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Úprava topných okruhů</span>
</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 bg-slate-50/50 hover:bg-white">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-6 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Funkčnost a zkoušky</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-slate-600 text-base">
<iconify-icon className="text-xl text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Tlakové zkoušky po dokončení</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<iconify-icon className="text-xl text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Kontrola těsnosti spojů</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<iconify-icon className="text-xl text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Precizní začištění</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
<div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
<h2 className="md:text-5xl text-3xl font-medium text-slate-900 tracking-tight mb-6">Plánujete novou koupelnu<br/>nebo potřebujete topení?</h2>
<p className="text-xl text-slate-500 mb-12 font-normal max-w-2xl mx-auto">
                Kontaktujte mě. Rád s vámi proberu váš projekt, navrhnu technické řešení a připravím nabídku.
            </p>
<div className="flex justify-center">
<a className="group relative bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-1 min-w-[340px]" href="tel:735293695">
<div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-wide text-slate-400 uppercase mb-2">Zavolejte mi</span>
<span className="text-2xl font-medium text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">735 293 695</span>
</a>
</div>
</div>
</section>

<section className="bg-white border-t border-slate-200 py-24" id="ukazky">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Ukázky práce</h2>
<p className="text-lg text-slate-500">Prohlédněte si některé z realizací.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="gallery-card group relative cursor-pointer rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100" onclick="openLightbox(0)">
<img alt="Podlahové vytápění" className="gallery-img w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b46fcab3-1e58-4907-aaa9-43cbcaf524a0_800w.jpg"/>
<div className="gallery-overlay flex flex-col bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
</div>
</div>
<p className="text-base font-normal text-white">Podlahové vytápění</p>
</div>
</div>

<div className="gallery-card group relative cursor-pointer rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100" onclick="openLightbox(1)">
<img alt="Instalace odpadů" className="gallery-img w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/723d3a90-1a5b-4d2e-88f3-74e0bcb0c0d0_800w.jpg"/>
<div className="gallery-overlay flex flex-col bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
</div>
</div>
<p className="text-base font-normal text-white">Instalace odpadů</p>
</div>
</div>

<div className="gallery-card group relative cursor-pointer rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100" onclick="openLightbox(2)">
<img alt="Rozvody kanalizace" className="gallery-img w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2db871c-17b2-417f-bfc2-1d75a5ecd56c_800w.jpg"/>
<div className="gallery-overlay flex flex-col bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
</div>
</div>
<p className="text-base font-normal text-white">Rozvody kanalizace</p>
</div>
</div>

<div className="gallery-card group relative cursor-pointer rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100" onclick="openLightbox(3)">
<img alt="Montáž závěsného WC" className="gallery-img w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2bb91ccc-2a37-4f03-9c6d-8e9847cb7ef7_800w.jpg"/>
<div className="gallery-overlay flex flex-col bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
</div>
</div>
<p className="text-base font-normal text-white">Montáž závěsného WC</p>
</div>
</div>
</div>
</div>
</section>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm" id="lightbox" onclick="closeLightboxOnBg(event)">
<button className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors" onclick="closeLightbox()">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>

<button className="absolute left-4 md:left-8 z-50 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors" onclick="prevImage(event)">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>

<button className="absolute right-4 md:right-8 z-50 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors" onclick="nextImage(event)">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div className="max-w-5xl w-full mx-4 flex flex-col items-center" id="lightbox-image">
<img alt="" className="max-h-[80vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain" id="lightbox-img" src=""/>
<p className="text-white/80 text-base font-normal mt-5 text-center" id="lightbox-caption"></p>
<p className="text-white/40 text-sm font-normal mt-2" id="lightbox-counter"></p>
</div>
</div>

<section className="bg-white border-t border-slate-200 py-24" id="o-mne">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full blur-xl z-0 opacity-60"></div>
<div className="relative z-10 bg-white p-10 rounded-2xl border border-slate-200 shadow-sm">
<iconify-icon className="text-5xl text-slate-100 absolute top-8 right-8 rotate-12" icon="solar:quote-up-linear"></iconify-icon>
<h3 className="text-2xl font-medium text-slate-900 mb-6">O mně</h3>
<p className="leading-relaxed text-lg font-normal text-slate-600 mb-6">Jmenuji se <span className="font-medium text-slate-900">Lukáš Plášil</span> a pracuji jako samostatný instalatér.</p>
<p className="leading-relaxed text-lg font-normal text-slate-600 mb-8">
                            Zakládám si na individuálním přístupu ke každému zákazníkovi. Nabízím důraz na odborné řešení celého okruhu, ať už jde o vodu, topení nebo odpady. Precizní provedení, dodržení termínů a zakázky dokončené tlakovou zkouškou jsou pro mě standardem.
                        </p>
<div className="flex items-center gap-4 pt-6 border-t border-slate-100">
<div className="">
<p className="text-slate-900 font-medium text-sm">Lukáš Plášil</p>
<p className="text-slate-500 text-xs">Instalatér</p>
</div>
</div>
</div>
</div>
<div className="">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-8">Hodnoty mé práce</h2>
<div className="space-y-8">
<div className="flex gap-5">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="">
<h4 className="font-normal text-slate-900 text-lg mb-1">Kvalitní materiály</h4>
<p className="text-slate-500 leading-relaxed text-base">Používám pouze ověřené materiály pro rozvody vody i topení, které zaručují dlouhou životnost.</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div className="">
<h4 className="font-normal text-slate-900 text-lg mb-1">Dodržení termínů</h4>
<p className="text-slate-500 leading-relaxed text-base">Vážím si vašeho času. Práce provádím v dohodnutých termínech bez zbytečných průtahů.</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl" icon="solar:star-linear"></iconify-icon>
</div>
<div className="">
<h4 className="font-normal text-slate-900 text-lg mb-1">Preciznost</h4>
<p className="text-slate-500 leading-relaxed text-base">Dbám na technicky přesné provedení a čistotu práce. Výsledkem je funkční a spolehlivý systém.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-t border-slate-200 py-24" id="recenze">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Recenze zákazníků</h2>
<p className="text-lg text-slate-500">Zpětná vazba od klientů, kterým jsem realizoval nové rozvody a topení.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-[#F8FAFC] p-8 rounded-[32px] border border-transparent hover:border-slate-100 transition-colors">
<div className="flex mb-4 gap-x-4 gap-y-4 items-center">
<div className="w-12 h-12 rounded-full bg-[#E2E8F0] flex items-center justify-center text-slate-600 font-medium text-sm tracking-wide shrink-0">
                            VK
                        </div>
<div className="flex flex-col">
<h3 className="font-semibold text-slate-900 leading-tight">Vojtěch Karásek</h3>
</div>
</div>
<div className="flex items-center gap-3 mb-4">
<div className="flex gap-0.5 text-orange-400">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-slate-400 text-xs">před 2 týdny</span>
</div>
<p className="text-slate-600 leading-relaxed text-[15px]">
                        "Naprostá spokojenost. Lukáš mě realizoval kompletní rozvody topení s radiátory do garáže... V první řadě chválím odbornost, zamyšlení nad celým okruhem aby vše správně fungovalo. Práce proběhla v danném termínu, precizně, zakončena tlakovou zkouškou... Vše funguje naprosto v pořádku.. mohu doporučit, na čem jsme se dohodli to platilo, děkuji za realizaci."
                    </p>
</div>

<div className="bg-[#F8FAFC] p-8 rounded-[32px] border border-transparent hover:border-slate-100 transition-colors">
<div className="flex gap-4 mb-4 gap-x-4 gap-y-4 items-center">
<div className="w-12 h-12 rounded-full bg-[#E2E8F0] flex items-center justify-center text-slate-600 font-medium text-sm tracking-wide shrink-0">
                            KJ
                        </div>
<div className="flex flex-col">
<h3 className="leading-tight font-semibold text-slate-900">Kateřina Jeriová</h3>
</div>
</div>
<div className="flex items-center gap-3 mb-4">
<div className="flex gap-0.5 text-orange-400">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-slate-400 text-xs">před týdnem</span>
</div>
<p className="text-slate-600 leading-relaxed text-[15px]">
                        "Naprosto profesionální přístup. Ochota řešit situace rychlosti blesku 😊 a výborná komunikace. Míle ráda doporučuji 👍 ..."
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-white border-t border-slate-200 py-24" id="kontakt">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
<div className="">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-3">Kontaktujte mě</h2>
<p className="text-lg text-slate-500 mb-10">Potřebujete instalatéra? Zavolejte mi a domluvíme se na prohlídce.</p>
<div className="space-y-6">
<a className="flex items-center gap-5 p-5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all group bg-white" href="tel:735293695">
<div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center border border-slate-100 shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 mb-1 uppercase tracking-wider font-semibold">Telefon</p>
<p className="text-xl font-medium text-slate-900 group-hover:text-blue-600 transition-colors">735 293 695</p>
</div>
</a>
</div>
<div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
<h3 className="font-medium text-slate-900 mb-6 flex items-center gap-2 text-lg">
<iconify-icon className="text-xl text-blue-500" icon="solar:info-circle-linear"></iconify-icon>
                            Údaje o firmě
                        </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 text-sm text-slate-600">
<div className="">
<p className="mb-1 text-slate-400 text-xs uppercase tracking-wider font-medium">Jméno</p>
<p className="font-medium text-slate-900 text-base">Lukáš Plášil</p>
</div>
<div className="">
<p className="mb-1 text-slate-400 text-xs uppercase tracking-wider font-medium">Profese</p>
<p className="font-medium text-slate-900 text-base">Instalatér – voda, topení, odpady</p>
</div>
<div className="">
<p className="mb-1 text-slate-400 text-xs uppercase tracking-wider font-medium">Lokalita</p>
<p className="text-base font-medium text-slate-900">Nová Paka a okolí</p>
</div>
</div>
</div>
</div>
<div className="h-[400px] lg:h-auto bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-200 shadow-inner">
<iframe allowfullscreen="" className="absolute inset-0" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=Nová+Paka,+Czech+Republic&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{border: '0'}} width="100%"></iframe>
<div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-xl border border-slate-200 shadow-lg max-w-xs">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="font-medium text-slate-900 text-sm">Oblast působnosti</p>
<p className="text-xs text-slate-500 mt-0.5">Nová Paka a okolí</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white text-slate-500 py-16 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="">
<a className="flex flex-col group text-center md:text-left" href="#">
<span className="leading-none text-xl font-medium text-slate-900 tracking-tight">
                            Lukáš Plášil
                        </span>
<span className="text-sm font-normal text-slate-500 mt-2">
                            Voda – Topení – Odpady
                        </span>
</a>
</div>
<div className="flex gap-4">
</div>
</div>
<div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-400">
<p className="">© 2026 Lukáš Plášil. Všechna práva vyhrazena.</p>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-white/80 backdrop-blur-md border-t border-slate-200 p-4 pb-8 flex gap-3" id="mobile-sticky-bar">
<a className="flex-1 bg-slate-900 text-white font-medium py-3.5 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform" href="tel:735293695">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
            Zavolat
        </a>
</div>


    </>
  );
}
