import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
                if (mobileMenuOpen) closeMobileMenu();
                else openMobileMenu();
            }

            menuToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                toggleMobileMenu();
            });

            menuLinks.forEach(function(link) {
                link.addEventListener('click', function() { closeMobileMenu(); });
            });

            document.addEventListener('click', function(e) {
                if (!mobileMenuOpen) return;
                if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) closeMobileMenu();
            });
        })();

        // Mobile sticky bar logic
        (function() {
            var stickyBar = document.getElementById('mobile-sticky-bar');
            var heroSection = document.getElementById('hero-section');
            var footer = document.querySelector('footer');
            var callBtn = document.getElementById('sticky-call-btn');
            
            function checkScroll() {
                if (heroSection && stickyBar) {
                    var heroBottom = heroSection.getBoundingClientRect().bottom;
                    if (heroBottom <= 0) stickyBar.classList.add('visible');
                    else stickyBar.classList.remove('visible');
                }

                if (footer && callBtn) {
                    var footerTop = footer.getBoundingClientRect().top;
                    var windowHeight = window.innerHeight;
                    
                    if (footerTop < windowHeight) {
                        callBtn.classList.add('ring-1', 'ring-white/25');
                    } else {
                        callBtn.classList.remove('ring-1', 'ring-white/25');
                    }
                }
            }

            window.addEventListener('scroll', checkScroll, { passive: true });
            window.addEventListener('resize', checkScroll, { passive: true });
            checkScroll();
        })();

        // Gallery & Lightbox logic
        (function() {
            var galleryImages = [];
            var currentIndex = 0;
            var lightbox = document.getElementById('lightbox');
            var lightboxImg = document.getElementById('lightbox-img');
            var lightboxCaption = document.getElementById('lightbox-caption');
            var lightboxClose = document.getElementById('lightbox-close');
            var lightboxPrev = document.getElementById('lightbox-prev');
            var lightboxNext = document.getElementById('lightbox-next');
            var isOpen = false;

            var buttons = document.querySelectorAll('#gallery-grid .gallery-item');
            buttons.forEach(function(btn, index) {
                var src = btn.getAttribute('data-src') || '';
                var label = btn.getAttribute('data-label') || '';
                
                var imgEl = btn.querySelector('img');
                if (imgEl && imgEl.src && (!src || !src.match(/\.(jpg|jpeg|png|webp|gif)$/i))) {
                    if(!src) src = imgEl.src;
                }
                
                galleryImages.push({
                    src: src,
                    label: label
                });
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    openLightbox(index);
                });
            });

            function openLightbox(index) {
                currentIndex = index;
                updateImage();
                lightbox.style.display = 'flex';
                void lightbox.offsetWidth;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
                isOpen = true;
            }

            function closeLightbox() {
                lightbox.classList.remove('active');
                isOpen = false;
                setTimeout(function() {
                    lightbox.style.display = 'none';
                    lightboxImg.src = '';
                    document.body.style.overflow = '';
                }, 300);
            }

            function updateImage() {
                var item = galleryImages[currentIndex];
                if (item) {
                    lightboxImg.src = item.src;
                    lightboxImg.alt = item.label;
                    lightboxCaption.textContent = item.label;
                }
            }

            function showPrev() {
                currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
                updateImage();
            }

            function showNext() {
                currentIndex = (currentIndex + 1) % galleryImages.length;
                updateImage();
            }

            lightboxClose.addEventListener('click', function(e) { e.preventDefault(); e.stopPropagation(); closeLightbox(); });
            lightboxPrev.addEventListener('click', function(e) { e.preventDefault(); e.stopPropagation(); showPrev(); });
            lightboxNext.addEventListener('click', function(e) { e.preventDefault(); e.stopPropagation(); showNext(); });

            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox || e.target === lightbox.querySelector('.relative')) closeLightbox();
            });

            lightboxImg.addEventListener('click', function(e) { e.stopPropagation(); });

            document.addEventListener('keydown', function(e) {
                if (!isOpen) return;
                if (e.key === 'Escape') closeLightbox();
                else if (e.key === 'ArrowLeft') showPrev();
                else if (e.key === 'ArrowRight') showNext();
            });
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center">
<a className="flex flex-col group" href="#">
<span className="leading-none group-hover:text-orange-600 transition-colors text-xl font-semibold text-slate-900 tracking-tighter">
                            Dominik Mader
                        </span>
<span className="uppercase group-hover:text-slate-700 transition-colors text-xs font-normal text-slate-500 tracking-wide mt-0.5">
                            Voda – Topení – Plyn
                        </span>
</a>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm font-normal text-slate-600">
<a className="hover:text-orange-600 transition-colors" href="#sluzby">Služby</a>
<a className="hover:text-orange-600 transition-colors" href="#reference">Ukázky práce</a>
<a className="hover:text-orange-600 transition-colors" href="#recenze">Recenze</a>
<a className="hover:text-orange-600 transition-colors" href="#o-nas">O mně</a>
<a className="hover:text-orange-600 transition-colors" href="#kontakt">Kontakt</a>
</div>
<div className="hidden md:flex items-center">
<a className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-normal rounded-lg hover:bg-slate-800 transition-all shadow-sm hover:shadow-md ring-1 ring-slate-900" href="tel:733301009">
<iconify-icon height="16" icon="lucide:phone" strokeWidth="1.5" width="16"></iconify-icon>
                        733 301 009
                    </a>
</div>
<div className="flex md:hidden">
<button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none" id="mobile-menu-toggle" type="button">
<iconify-icon height="24" icon="lucide:menu" id="hamburger-icon-open" strokeWidth="1.5" width="24"></iconify-icon>
<iconify-icon height="24" icon="lucide:x-circle" id="hamburger-icon-close" strokeWidth="1.5" style={{display: 'none'}} width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="md:hidden border-t border-slate-100 bg-white absolute w-full left-0 shadow-lg" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-1">
<a className="mobile-menu-link block px-3 py-3 text-base font-normal text-slate-600 hover:text-orange-600 hover:bg-slate-50 rounded-lg" href="#sluzby">Služby</a>
<a className="mobile-menu-link block px-3 py-3 text-base font-normal text-slate-600 hover:text-orange-600 hover:bg-slate-50 rounded-lg" href="#reference">Ukázky práce</a>
<a className="mobile-menu-link block px-3 py-3 text-base font-normal text-slate-600 hover:text-orange-600 hover:bg-slate-50 rounded-lg" href="#recenze">Recenze</a>
<a className="mobile-menu-link block px-3 py-3 text-base font-normal text-slate-600 hover:text-orange-600 hover:bg-slate-50 rounded-lg" href="#o-nas">O mně</a>
<a className="mobile-menu-link block px-3 py-3 text-base font-normal text-slate-600 hover:text-orange-600 hover:bg-slate-50 rounded-lg" href="#kontakt">Kontakt</a>
</div>
</div>
</nav>

<section className="lg:pt-40 lg:pb-32 overflow-hidden pt-32 pb-20 relative" id="hero-section">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
<div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 mix-blend-multiply"></div>
<div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30 mix-blend-multiply"></div>
</div>
<div className="sm:px-6 lg:px-8 text-center max-w-7xl z-10 mr-auto ml-auto pr-4 pl-4 relative">
<div className="inline-flex text-xs font-normal text-emerald-700 bg-emerald-50 border-emerald-200 border rounded-full mb-8 pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm gap-x-2 gap-y-2 items-center">Aktuálně přijímám nové zakázky</div>
<h1 className="leading-[1.1] md:text-6xl text-4xl font-medium text-slate-900 tracking-tight mb-6">
                Dominik Mader<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-600">Voda – Topení – Plyn</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-slate-500 max-w-2xl mr-auto mb-10 ml-auto">
                Nabízím instalatérské práce od drobných oprav až po kompletní montáže. Ke každé zakázce přistupuji individuálně s důrazem na kvalitu odvedené práce.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-3 bg-slate-900 text-white font-normal rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group" href="tel:733301009">
<iconify-icon className="group-hover:scale-110 transition-transform" height="20" icon="lucide:phone" strokeWidth="1.5" width="20"></iconify-icon>
                    Zavolejte: 733 301 009
                </a>
<a className="sm:w-auto inline-flex justify-center items-center gap-2 hover:bg-slate-50 hover:border-slate-300 transition-all group font-normal text-slate-700 bg-white w-full border-slate-200 border rounded-xl pt-3 pr-8 pb-3 pl-8" href="#sluzby">Moje služby</a>
</div>

<div className="flex flex-wrap items-center justify-center gap-3 mt-8">
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-normal text-slate-500 shadow-sm">
<iconify-icon className="text-orange-500" height="14" icon="lucide:map-pin" strokeWidth="1.5" width="14"></iconify-icon>
                    Vítkov a okolí
                </div>
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-normal text-slate-500 shadow-sm">
<iconify-icon className="text-orange-500" height="14" icon="lucide:clipboard-check" strokeWidth="1.5" width="14"></iconify-icon>
                    Kvalitní provedení
                </div>
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-normal text-slate-500 shadow-sm">
<iconify-icon className="text-orange-500" height="14" icon="lucide:home" strokeWidth="1.5" width="14"></iconify-icon>
                    Osobní přístup
                </div>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight">Proč zvolit právě mě?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="hover-card flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
<iconify-icon height="24" icon="lucide:users" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-slate-900 mb-2">Osobní přístup</h3>
<p className="text-sm text-slate-500 leading-relaxed">Ke každé zakázce přistupuji individuálně a hledám nejlepší řešení pro zákazníka.</p>
</div>
<div className="hover-card flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4">
<iconify-icon height="24" icon="lucide:box" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-slate-900 mb-2">Kvalita práce</h3>
<p className="text-sm text-slate-500 leading-relaxed">Důraz na kvalitu odvedené práce a použití ověřených materiálů.</p>
</div>
<div className="hover-card flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
<iconify-icon height="24" icon="lucide:award" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-slate-900 mb-2">Přímo se mnou</h3>
<p className="leading-relaxed text-sm text-slate-500">Jsem OSVČ, komunikujete přímo se mnou. Zaručuji spolehlivost a férové jednání.</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-24" id="sluzby">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Nabízené služby</h2>
<p className="text-lg text-slate-500 max-w-2xl font-light">Poskytuji odborné řemeslné práce ve Vítkově a okolí. Specializuji se na vodu, topení a plyn.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="hover-card group p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="lucide:droplet" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-4">Vodoinstalační práce</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-orange-500 mt-0.5 shrink-0" height="16" icon="lucide:check-circle" strokeWidth="1.5" width="16"></iconify-icon>
<span>Instalatérské práce</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-orange-500 mt-0.5 shrink-0" height="16" icon="lucide:check-circle" strokeWidth="1.5" width="16"></iconify-icon>
<span>Drobné opravy</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-orange-500 mt-0.5 shrink-0" height="16" icon="lucide:check-circle" strokeWidth="1.5" width="16"></iconify-icon>
<span>Kompletní montáže</span>
</li>
</ul>
</div>
<div className="hover-card group p-8 bg-white rounded-2xl border border-slate-200 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="lucide:thermometer" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-4">Topenářské práce</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-orange-500 mt-0.5 shrink-0" height="16" icon="lucide:check-circle" strokeWidth="1.5" width="16"></iconify-icon>
<span>Montáže topných systémů</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-orange-500 mt-0.5 shrink-0" height="16" icon="lucide:check-circle" strokeWidth="1.5" width="16"></iconify-icon>
<span>Instalace radiátorů</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-orange-500 mt-0.5 shrink-0" height="16" icon="lucide:check-circle" strokeWidth="1.5" width="16"></iconify-icon>
<span>Opravy topení</span>
</li>
</ul>
</div>
<div className="hover-card group p-8 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="lucide:flame" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-4">Plynoinstalační práce</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-orange-500 mt-0.5 shrink-0" height="16" icon="lucide:check-circle" strokeWidth="1.5" width="16"></iconify-icon>
<span>Rozvody plynu</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-orange-500 mt-0.5 shrink-0" height="16" icon="lucide:check-circle" strokeWidth="1.5" width="16"></iconify-icon>
<span>Montáže plynových zařízení</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-orange-500 mt-0.5 shrink-0" height="16" icon="lucide:check-circle" strokeWidth="1.5" width="16"></iconify-icon>
<span>Plynoinstalatérské práce</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-slate-950 pt-24 pb-24 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950/0 to-transparent opacity-60 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight mb-4 drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]">
                Hledáte spolehlivého instalatéra? <br className="hidden sm:block"/> Ozvěte se mi.
            </h2>
<p className="text-lg text-slate-400 mb-16 font-light max-w-2xl mx-auto leading-relaxed">
                Zavolejte mi nebo napište e-mail. Rád s vámi proberu vaši zakázku a domluvíme se na termínu.
            </p>
<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
<a className="group relative bg-slate-900/40 border border-slate-800 rounded-3xl p-10 flex flex-col items-center justify-center transition-all duration-300 hover:bg-slate-900 hover:border-slate-700 hover:shadow-2xl hover:shadow-orange-500/5 hover:-translate-y-1" href="tel:733301009">
<div className="w-14 h-14 rounded-2xl bg-slate-800/80 text-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-slate-800 group-hover:text-orange-400 transition-all duration-300 ring-1 ring-white/5">
<iconify-icon height="28" icon="lucide:phone" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<span className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">Zavolejte mi</span>
<span className="group-hover:text-orange-400 transition-colors text-xl font-medium text-white tracking-tight mb-6">733 301 009</span>
<div className="inline-flex px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 text-xs font-normal group-hover:border-slate-600 transition-colors">
                        Dle telefonické domluvy
                    </div>
</a>
<a className="group relative bg-slate-900/40 border border-slate-800 rounded-3xl p-10 flex flex-col items-center justify-center transition-all duration-300 hover:bg-slate-900 hover:border-slate-700 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1" href="mailto:Maderdominik.ins@seznam.cz">
<div className="w-14 h-14 rounded-2xl bg-slate-800/80 text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-slate-800 group-hover:text-blue-400 transition-all duration-300 ring-1 ring-white/5">
<iconify-icon height="28" icon="lucide:mail" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<span className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">Napište mi</span>
<span className="group-hover:text-blue-400 transition-colors break-all text-xl font-medium text-white tracking-tight mb-6">Maderdominik.ins@seznam.cz</span>
<div className="inline-flex px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 text-xs font-normal group-hover:border-slate-600 transition-colors">
                        Odepisuji co nejdříve
                    </div>
</a>
</div>
</div>
</section>

<section className="bg-slate-50 border-slate-200 border-t pt-20 pb-20" id="reference">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<div className="text-center mb-12">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Ukázky práce</h2>
<p className="text-slate-500">Prohlédněte si některé z realizací.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6" id="gallery-grid">

<button className="gallery-item gallery-card rounded-2xl overflow-hidden border border-slate-200 shadow-sm cursor-pointer bg-slate-100 block w-full text-left p-0 m-0 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2" data-label="Instalace plynového kotle" data-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17e513a4-996b-4779-866c-ed432ac5e5a7_800w.jpg" type="button">
<div className="aspect-[4/3] relative bg-slate-200 overflow-hidden">
<img alt="Instalace plynového kotle" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" draggable="false" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17e513a4-996b-4779-866c-ed432ac5e5a7_800w.jpg"/>
<div className="bg-gradient-to-t from-black/60 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="gallery-overlay absolute inset-0 bg-black/20 flex items-center justify-center">
<div className="gallery-zoom-icon w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
<iconify-icon height="24" icon="lucide:zoom-in" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<span className="absolute bottom-0 left-0 right-0 px-5 py-4 text-white text-sm font-normal z-10">Instalace plynového kotle</span>
</div>
</button>

<button className="gallery-item gallery-card rounded-2xl overflow-hidden border border-slate-200 shadow-sm cursor-pointer bg-slate-100 block w-full text-left p-0 m-0 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2" data-label="Montáž radiátorů s měděným potrubím" data-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c99052f-aa96-45d4-bd7d-910aee9ee80d_800w.jpg" type="button">
<div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
<img alt="Montáž radiátorů s měděným potrubím" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" draggable="false" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c99052f-aa96-45d4-bd7d-910aee9ee80d_800w.jpg"/>
<div className="bg-gradient-to-t from-black/60 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="gallery-overlay absolute inset-0 bg-black/20 flex items-center justify-center">
<div className="gallery-zoom-icon w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
<iconify-icon height="24" icon="lucide:zoom-in" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<span className="absolute bottom-0 left-0 right-0 px-5 py-4 text-white text-sm font-normal z-10">Montáž radiátorů s měděným potrubím</span>
</div>
</button>

<button className="gallery-item gallery-card rounded-2xl overflow-hidden border border-slate-200 shadow-sm cursor-pointer bg-slate-100 block w-full text-left p-0 m-0 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2" data-label="Průmyslové potrubní rozvody" data-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/873b099d-21f9-470b-89d0-68b04f4f3469_800w.jpg" type="button">
<div className="aspect-[4/3] relative bg-slate-200 overflow-hidden">
<img alt="Průmyslové potrubní rozvody" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" draggable="false" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/873b099d-21f9-470b-89d0-68b04f4f3469_800w.jpg"/>
<div className="bg-gradient-to-t from-black/60 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="gallery-overlay flex bg-black/20 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="gallery-zoom-icon w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
<iconify-icon className="" height="24" icon="lucide:zoom-in" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<span className="z-10 text-sm font-normal text-white pt-4 pr-5 pb-4 pl-5 absolute right-0 bottom-0 left-0">Průmyslové potrubní rozvody</span>
</div>
</button>
</div>
</div>
</section>

<section className="bg-white pt-20 pb-20 border-t border-slate-100" id="recenze">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Recenze zákazníků</h2>
<p className="text-slate-500">Co o mé práci říkají klienti.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="review-card bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-medium text-sm">KV</div>
<div>
<p className="font-medium text-slate-900 leading-tight">Kamil Vaněk</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-slate-400">10 hodnocení</span>
</div>
</div>
</div>
<div className="flex items-center gap-1 mb-2 text-orange-400">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<span className="text-xs text-slate-400 font-normal ml-2">22. října 2025</span>
</div>
<p className="text-slate-600 mb-4 font-light leading-relaxed text-sm">
                        Odborně i řemeslně zdatný vodař, velmi seriózní jednání, rychlé provedení a slušná cena. Mohu jen doporučit...
                    </p>
<div className="mt-auto pt-4 flex items-center gap-2 text-xs text-slate-700 font-medium">
<div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
<iconify-icon height="14" icon="lucide:smile" width="14"></iconify-icon>
</div>
                        Cena, Termíny, Kvalita, Komunikace
                    </div>
</div>

<div className="review-card bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-medium text-sm">OW</div>
<div>
<p className="font-medium text-slate-900 leading-tight">Oldřich Wolf</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-slate-400">4 hodnocení</span>
</div>
</div>
</div>
<div className="flex items-center gap-1 mb-2 text-orange-400">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<span className="text-xs text-slate-400 font-normal ml-2">30. srpna 2025</span>
</div>
<p className="text-slate-600 mb-4 font-light leading-relaxed text-sm">
                        Velká spokojenost s odvedenou prací.Pan Dominik Mader co slíbil to dodržel a cena za práci je velmi solidní.
                    </p>
</div>

<div className="review-card bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-medium text-sm">JŠ</div>
<div>
<p className="font-medium text-slate-900 leading-tight">Jiří Šamárek</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-slate-400">1 hodnocení</span>
</div>
</div>
</div>
<div className="flex items-center gap-1 mb-2 text-orange-400">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<span className="text-xs text-slate-400 font-normal ml-2">24. listopadu 2025</span>
</div>
<p className="text-slate-600 mb-4 font-light leading-relaxed text-sm">
                        Kvalitně odvedená oprava , a přijatelná cena.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-white pt-20 pb-20" id="o-nas">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full opacity-50 z-0"></div>
<div className="hover-card-subtle relative z-10 bg-slate-50 p-8 rounded-3xl border border-slate-100">
<h3 className="text-xl font-medium text-slate-900 mb-4">O mně</h3>
<p className="text-slate-600 leading-relaxed mb-6 font-light">
                            Jmenuji se Dominik Mader a nabízím odborné instalatérské práce. Působím lokálně ve Vítkově a okolí. Zakládám si na poctivě odvedené práci a slušném jednání.
                        </p>
<p className="text-slate-600 leading-relaxed mb-6 font-light">
                            Ať už řešíte drobnou opravu kohoutku, rekonstrukci koupelny nebo kompletní montáž topení v rodinném domě, přistupuji ke každé zakázce zodpovědně.
                        </p>
<div className="flex items-center gap-3 mt-8">
<div className="h-px bg-slate-200 flex-1"></div>
<span className="text-slate-400 text-sm font-normal">Dominik Mader, majitel</span>
</div>
</div>
</div>
<div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-6">Hodnoty, na kterých stavím</h2>
<div className="space-y-4">
<div className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
<iconify-icon height="24" icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 text-lg">Kvalita a záruka</h4>
<p className="text-slate-500 font-light mt-1">Používám pouze ověřené materiály a postupy.</p>
</div>
</div>
<div className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon height="24" icon="lucide:clock" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 text-lg">Spolehlivost</h4>
<p className="text-slate-500 font-light mt-1">Dodržuji dohodnuté termíny a ceny.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 border-slate-200 border-t pt-20 pb-20" id="kontakt">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-2">Kontakt</h2>
<p className="text-slate-500 mb-8">Potřebujete instalatéra? Zavolejte mi, domluvíme se.</p>
<div className="space-y-6">
<a className="contact-card flex items-center gap-4 p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-orange-300 hover:shadow-md transition-all group" href="tel:733301009">
<div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="lucide:phone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm text-slate-500 mb-1">Zavolejte mi</p>
<p className="text-2xl font-medium text-slate-900 group-hover:text-orange-600 transition-colors">733 301 009</p>
</div>
</a>
<a className="contact-card flex items-center gap-4 p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group" href="mailto:Maderdominik.ins@seznam.cz">
<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="lucide:mail" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm text-slate-500 mb-1">Napište email</p>
<p className="text-xl font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Maderdominik.ins@seznam.cz</p>
</div>
</a>
</div>
<div className="hover-card-subtle mt-8 p-6 bg-slate-100 rounded-xl border border-slate-200/60">
<h3 className="font-normal text-slate-900 mb-3">Fakturační údaje</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600">
<div>
<p><span className="font-medium text-slate-800">Název:</span> Dominik Mader</p>
<p><span className="font-medium text-slate-800">Sídlo:</span> Vítkov, Klokočov 41</p>
<p><span className="font-medium text-slate-800">PSČ:</span> 747 47</p>
</div>
<div>
<p><span className="font-medium text-slate-800">IČ:</span> 19573774</p>
</div>
</div>
</div>
</div>
<div className="h-full min-h-[400px] bg-slate-200 rounded-2xl overflow-hidden relative border border-slate-300">
<iframe allowfullscreen="" className="absolute inset-0" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=Klokočov+41,+747+47+Vítkov&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{border: '0'}} width="100%"></iframe>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-xl border border-slate-200 shadow-lg max-w-xs">
<p className="font-normal text-slate-900 text-sm flex items-center gap-2">
<iconify-icon className="text-orange-500" height="16" icon="lucide:map-pin" width="16"></iconify-icon>
                            Klokočov 41, 747 47 Vítkov
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 pt-12 pb-40 md:py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center">
<a className="flex flex-col group" href="#">
<span className="leading-none group-hover:text-orange-500 transition-colors text-xl font-medium text-slate-100 tracking-tight">
                            Dominik Mader
                        </span>
<span className="uppercase group-hover:text-slate-400 transition-colors text-xs font-normal text-slate-500 tracking-wide mt-0.5">
                            Voda – Topení – Plyn
                        </span>
</a>
</div>
<div className="text-sm">© 2024 Dominik Mader. Všechna práva vyhrazena.</div>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full z-50 md:hidden pointer-events-none" id="mobile-sticky-bar" style={{paddingBottom: 'env(safe-area-inset-bottom)'}}>
<div className="flex items-center gap-3 px-4 pb-6 pt-4 pointer-events-auto">
<a className="flex-1 bg-slate-900 text-white font-medium text-lg py-4 px-6 rounded-2xl shadow-xl shadow-slate-900/20 flex items-center justify-center gap-3 active:scale-[0.98] transition-transform transition-all duration-300" href="tel:733301009" id="sticky-call-btn">
<iconify-icon height="24" icon="lucide:phone" strokeWidth="2" width="24"></iconify-icon>
                Zavolat
            </a>
<a className="bg-white text-slate-900 border border-slate-200 py-4 px-5 rounded-2xl shadow-xl shadow-slate-900/5 flex items-center justify-center active:scale-[0.98] transition-transform" href="mailto:Maderdominik.ins@seznam.cz">
<iconify-icon height="24" icon="lucide:mail" strokeWidth="1.5" width="24"></iconify-icon>
</a>
</div>
</div>

<div className="fixed inset-0 z-[100] lightbox-overlay bg-black/80 backdrop-blur-md flex items-center justify-center p-4" id="lightbox" style={{display: 'none'}}>
<div className="relative w-full max-w-5xl h-full flex items-center justify-center">
<button className="absolute top-2 right-2 md:top-4 md:right-4 z-10 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white bg-black/30 hover:bg-black/50 rounded-full backdrop-blur-sm transition-all cursor-pointer" id="lightbox-close" type="button">
<iconify-icon height="24" icon="lucide:x-circle" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="absolute left-2 md:left-4 z-10 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white bg-black/30 hover:bg-black/50 rounded-full backdrop-blur-sm transition-all cursor-pointer" id="lightbox-prev" type="button">
<iconify-icon height="24" icon="lucide:arrow-left" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="absolute right-2 md:right-4 z-10 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white bg-black/30 hover:bg-black/50 rounded-full backdrop-blur-sm transition-all cursor-pointer" id="lightbox-next" type="button">
<iconify-icon height="24" icon="lucide:arrow-right" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<img alt="" className="lightbox-image max-h-[85vh] max-w-full w-auto object-contain rounded-lg shadow-2xl select-none" draggable="false" id="lightbox-img" src=""/>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full" id="lightbox-caption"></div>
</div>
</div>


    </>
  );
}
