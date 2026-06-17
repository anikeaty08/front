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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Calculator functionality
        function formatCurrency(number) {
            return new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK', maximumFractionDigits: 0 }).format(number);
        }

        function calculateTotal() {
            const pricePerNight = parseInt(document.getElementById('seasonSelect').value);
            const nights = parseInt(document.getElementById('nightsInput').value) || 0;
            const shortTermFeeNotice = document.getElementById('shortTermFeeNotice');
            
            let total = pricePerNight * nights;
            let hasShortTermFee = false;

            if (nights > 0 && nights <= 3) {
                total += 3200;
                hasShortTermFee = true;
            }

            document.getElementById('totalPriceDisplay').innerHTML = formatCurrency(total).replace('Kč', '&nbsp;Kč');
            
            if (hasShortTermFee) {
                shortTermFeeNotice.style.display = 'block';
            } else {
                shortTermFeeNotice.style.display = 'none';
            }
        }

        // Initialize calculator
        calculateTotal();

        // Lightbox Gallery functionality
        let lightboxImages = [];
        let currentImageIndex = 0;
        const modal = document.getElementById('galleryModal');
        const modalImage = document.getElementById('modalImage');
        const lightboxCounter = document.getElementById('lightboxCounter');

        window.addEventListener('DOMContentLoaded', () => {
            const images = document.querySelectorAll('#galerie .group img');
            images.forEach(img => {
                lightboxImages.push(img.src);
            });
        });

        function openGallery(imageSrc) {
            currentImageIndex = lightboxImages.indexOf(imageSrc);
            if (currentImageIndex === -1) currentImageIndex = 0;
            
            updateLightboxContent();
            
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.classList.add('modal-open');
            
            void modal.offsetWidth;
            
            modal.classList.remove('opacity-0');
            modalImage.classList.remove('scale-95');
            modalImage.classList.add('scale-100');
        }

        function updateLightboxContent() {
            modalImage.src = lightboxImages[currentImageIndex];
            lightboxCounter.textContent = `${currentImageIndex + 1} / ${lightboxImages.length}`;
        }

        function nextImage(e) {
            if(e) e.stopPropagation();
            currentImageIndex = (currentImageIndex + 1) % lightboxImages.length;
            updateLightboxContent();
        }

        function prevImage(e) {
            if(e) e.stopPropagation();
            currentImageIndex = (currentImageIndex - 1 + lightboxImages.length) % lightboxImages.length;
            updateLightboxContent();
        }

        function closeGallery() {
            modal.classList.add('opacity-0');
            modalImage.classList.remove('scale-100');
            modalImage.classList.add('scale-95');
            document.body.classList.remove('modal-open');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }, 300);
        }

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeGallery();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (!modal.classList.contains('hidden')) {
                if (e.key === 'Escape') closeGallery();
                if (e.key === 'ArrowRight') nextImage();
                if (e.key === 'ArrowLeft') prevImage();
            }
        });

        // Reviews Slider Logic
        document.addEventListener('DOMContentLoaded', () => {
            const track = document.getElementById('reviews-track');
            if (!track) return;
            
            const originalCards = Array.from(track.children);
            
            // Naklonování prvků pro efekt nekonečného scrollování
            originalCards.forEach(card => {
                const clone = card.cloneNode(true);
                clone.setAttribute('aria-hidden', 'true');
                track.appendChild(clone);
            });

            let currentSlideIndex = 0;
            let slideInterval;

            function updateSlider() {
                const cardWidth = track.children[0].offsetWidth;
                const gap = 24; // Tailwind gap-6 odpovídá 24px
                const distanceToMove = cardWidth + gap;
                
                track.style.transition = 'transform 0.5s ease-in-out';
                track.style.transform = `translateX(-${currentSlideIndex * distanceToMove}px)`;

                // Pokud jsme projeli všechny původní karty, přeskočíme potichu na začátek
                if (currentSlideIndex >= originalCards.length) {
                    setTimeout(() => {
                        track.style.transition = 'none';
                        currentSlideIndex = 0;
                        track.style.transform = `translateX(0)`;
                    }, 500); // 500ms musí odpovídat CSS transition
                }
            }

            function triggerNextSlide() {
                currentSlideIndex++;
                updateSlider();
            }

            function startSlide() {
                slideInterval = setInterval(triggerNextSlide, 4000); // Každé 4 sekundy poskočí
            }

            function stopSlide() {
                clearInterval(slideInterval);
            }

            // Přepočet velikosti při změně okna aby se to nerozbilo
            window.addEventListener('resize', () => {
                track.style.transition = 'none';
                const cardWidth = track.children[0].offsetWidth;
                const distanceToMove = cardWidth + 24;
                track.style.transform = `translateX(-${currentSlideIndex * distanceToMove}px)`;
            });

            // Zastavení při najetí myší nebo na mobilu při dotyku
            track.addEventListener('mouseenter', stopSlide);
            track.addEventListener('mouseleave', startSlide);
            track.addEventListener('touchstart', stopSlide, {passive: true});
            track.addEventListener('touchend', startSlide, {passive: true});

            startSlide();
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
      

<nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-slate-900/90 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-6">
<div className="flex h-16 items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-white transition hover:text-emerald-400" href="#">
                    na4kolech.cz
                </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#specifikace">Specifikace</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#vybaveni">Výbava</a>
<a className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition" href="#galerie">Galerie</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#hodnoceni">Hodnocení</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#cenik">Ceník</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#podminky">Podmínky</a>
</div>
<a className="hidden md:flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 transition hover:bg-emerald-50" href="https://calendar.app.google/FagK76a2ku5RS4hr5" target="_blank">
<span>Rezervovat</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-900 pt-16">
<img alt="Camping v přírodě" className="absolute inset-0 h-full w-full object-cover opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54935f29-e9de-4861-98de-7dfadc1b3a63_1600w.png"/>
<div className="bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 sm:pb-32 sm:pt-48 text-center max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative">
<div className="mx-auto max-w-4xl">
<div className="mb-8 flex justify-center flex-wrap gap-2">
<span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-sm">
                        Model 2022
                    </span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm">
                        Chrudim
                    </span>
</div>
<h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                    Carado A461.<br/>Komfort pro celou rodinu.
                </h1>
<p className="mt-6 text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
                    Plně vybavený domov na kolech pro 6 osob. S výkonným solárním systémem, obrovskou lednicí a nezávislým topením. Vaše svoboda začíná zde.
                </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 sm:w-auto" href="https://calendar.app.google/FagK76a2ku5RS4hr5" target="_blank">
<iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
                        Zkontrolovat termín
                    </a>
<a className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10 sm:w-auto" href="#specifikace">
                        Technické parametry
                    </a>
</div>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
<iconify-icon icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>
</header>

<section className="bg-white border-slate-200 border-b pt-4 pb-4">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
<div className="flex flex-col items-center justify-center gap-3 text-center md:items-start md:text-left">
<iconify-icon className="text-emerald-600" icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
<div>
<p className="text-xl font-semibold tracking-tight text-slate-900">6 Osob</p>
<p className="text-xs text-slate-500">Jízda i spaní</p>
</div>
</div>
<div className="flex flex-col gap-3 md:items-start md:text-left text-center items-center justify-center">
<iconify-icon className="text-emerald-600" icon="solar:calendar-linear" width="28"></iconify-icon>
<div>
<p className="text-xl font-semibold tracking-tight text-slate-900">Rok 2022</p>
<p className="text-xs text-slate-500">Nový, spolehlivý vůz</p>
</div>
</div>
<div className="flex flex-col items-center justify-center gap-3 text-center md:items-start md:text-left">
<iconify-icon className="text-emerald-600" icon="solar:ruler-angular-linear" width="28"></iconify-icon>
<div>
<p className="text-xl font-semibold tracking-tight text-slate-900">Prostorný vůz</p>
<p className="text-xs text-slate-500">Velká kuchyň, koupelna a WC</p>
</div>
</div>
<div className="flex flex-col items-center justify-center gap-3 text-center md:items-start md:text-left">
<iconify-icon className="text-emerald-600" icon="solar:bolt-circle-linear" width="28"></iconify-icon>
<div>
<p className="text-xl font-semibold tracking-tight text-slate-900">Off-grid</p>
<p className="text-xs text-slate-500">400Wp Solár + LiFePO4</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-slate-900 overflow-hidden" id="specifikace">
<img alt="Carado A461 exteriér" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a969254b-8cbe-492d-9e13-7b180f2ce5db_3840w.png"/>
<div className="lg:via-slate-950/50 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 mx-auto max-w-7xl px-6">
<div className="grid lg:grid-cols-2">
<div className="pr-0 lg:pr-12">
<div className="mb-12">
<span className="text-emerald-400 font-medium tracking-tight">Detailní přehled</span>
<h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Technické specifikace</h2>
<p className="mt-4 text-slate-400">Všechny důležité parametry vozu přehledně na jednom místě.</p>
</div>
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
<div className="group rounded-2xl border border-white/10 bg-slate-900/40 p-5 backdrop-blur-md transition hover:bg-slate-900/60 hover:border-white/20">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-emerald-400" icon="solar:transmission-circle-linear" width="20"></iconify-icon>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Převodovka</span>
</div>
<p className="text-lg font-medium text-white">Manuální (6 st.)</p>
</div>
<div className="group rounded-2xl border border-white/10 bg-slate-900/40 p-5 backdrop-blur-md transition hover:bg-slate-900/60 hover:border-white/20">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-emerald-400" icon="solar:gas-station-linear" width="20"></iconify-icon>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Palivo</span>
</div>
<p className="text-lg font-medium text-white">Nafta (Diesel)</p>
</div>
<div className="group rounded-2xl border border-white/10 bg-slate-900/40 p-5 backdrop-blur-md transition hover:bg-slate-900/60 hover:border-white/20">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-emerald-400" icon="solar:wheel-angle-linear" width="20"></iconify-icon>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Pohon</span>
</div>
<p className="text-lg font-medium text-white">Přední náprava</p>
</div>
<div className="group rounded-2xl border border-white/10 bg-slate-900/40 p-5 backdrop-blur-md transition hover:bg-slate-900/60 hover:border-white/20">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-emerald-400" icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Rozměry</span>
</div>
<p className="text-lg font-medium text-white">7,20 x 2,32 x 3,17 m</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="vybaveni">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="md:w-2/3 mb-16">
<span className="text-emerald-600 font-medium tracking-tight">Nadstandardní výbava</span>
<h2 className="sm:text-4xl text-3xl font-semibold text-slate-900 tracking-tight mt-2">Dům na kolech bez kompromisů.</h2>
<p className="text-lg text-slate-500 mt-4">Vůz je navržen tak, aby poskytoval maximální pohodlí na každé vaší cestě.</p>
</div>
<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
<div className="group relative overflow-hidden transition bg-slate-50 ring-slate-900/5 ring-1 rounded-3xl p-8 hover:shadow-xl hover:shadow-slate-200/50 flex flex-col">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
<iconify-icon icon="solar:chef-hat-linear" width="26"></iconify-icon>
</div>
<h3 className="mb-4 text-xl font-semibold tracking-tight text-slate-900">Obrovský prostor v kuchyni</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                        Prostorná kuchyňská linka nabízí velkorysou pracovní plochu pro přípravu vašich oblíbených jídel na cestách. Součástí je nadstandardně velká absorpční lednice s objemem 167 litrů a odděleným mrazákem, která bez problémů pojme zásoby pro celou rodinu na několik dní. Pro milovníky vaření a pečení nechybí ani plnohodnotná plynová trouba se třemi hořáky. Vaření na cestách tak bude naprosto bez kompromisů, ať už se nacházíte kdekoliv v přírodě.
                    </p>
</div>
<div className="group relative overflow-hidden rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-900/5 transition hover:shadow-xl hover:shadow-slate-200/50 flex flex-col">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
<iconify-icon icon="solar:sun-fog-linear" width="26"></iconify-icon>
</div>
<h3 className="mb-4 text-xl font-semibold tracking-tight text-slate-900">Klima &amp; Topení</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                        Nezávisle na počasí venku si uvnitř vždy snadno udržíte ideální teplotu. Během horkých letních měsíců oceníte výkonnou klimatizaci, která spolehlivě a rychle ochladí celý obytný prostor. V zimě se naopak můžete spolehnout na efektivní plynové topení Truma s rozfukem teplého vzduchu rovnoměrně do všech částí vozu. Vůz je navíc nadstandardně izolován, což zaručuje bezproblémový teplotní komfort a zamezuje únikům tepla po celý rok.
                    </p>
</div>
<div className="group relative overflow-hidden rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-900/5 transition hover:shadow-xl hover:shadow-slate-200/50 flex flex-col">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
<iconify-icon icon="solar:battery-charge-linear" width="26"></iconify-icon>
</div>
<h3 className="mb-4 text-xl font-semibold tracking-tight text-slate-900">Energie</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                        Díky výkonnému solárnímu systému o kapacitě 400 Wp jste naprosto nezávislí na elektrických přípojkách v předražených kempech. Získanou energii spolehlivě uchovává špičková lithiová baterie LiFePO4 s obrovskou kapacitou 320 Ah, která bez problémů pokryje spotřebu všech zařízení naráz. Můžete tak bez obav kempovat takzvaně na divoko mimo civilizaci i mnoho dní po sobě. Integrovaný silný měnič napětí vám navíc umožní kdykoliv využívat standardní 230V zásuvky pro fén, kávovar nebo notebook.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 pt-24 pb-24" id="galerie">

<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 md:w-2/3">
<span className="text-emerald-400 font-medium tracking-tight">Fotodokumentace</span>
<h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Galerie vozu</h2>
<p className="mt-4 text-lg text-slate-400">Prohlédněte si detailně interiér, exteriér a doplňky.</p>
</div>
<div className="grid grid-cols-1 gap-12 lg:grid-cols-3">

<div className="flex flex-col gap-6">
<div className="flex items-center gap-3 border-b border-white/10 pb-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-emerald-400">
<iconify-icon icon="solar:sofa-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Obytný prostor</h3>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="group relative aspect-square rounded-xl bg-slate-800 ring-1 ring-white/10 cursor-pointer overflow-hidden" onclick="openGallery('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c62861bc-6080-42eb-9ee4-95feefbc3714_800w.png')">
<img alt="Obytný prostor 1" className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c62861bc-6080-42eb-9ee4-95feefbc3714_800w.png"/>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white border border-white/20">
<iconify-icon icon="solar:maximize-square-minimalistic-linear" width="16"></iconify-icon> Zobrazit
                                </span>
</div>
</div>
<div className="group relative aspect-square rounded-xl bg-slate-800 ring-1 ring-white/10 cursor-pointer overflow-hidden" onclick="openGallery('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c2558f34-3233-4629-8337-7d82d17b5cd9_800w.png')">
<img alt="Obytný prostor 2" className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c2558f34-3233-4629-8337-7d82d17b5cd9_800w.png"/>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white border border-white/20">
<iconify-icon icon="solar:maximize-square-minimalistic-linear" width="16"></iconify-icon> Zobrazit
                                </span>
</div>
</div>
<div className="group relative aspect-square rounded-xl bg-slate-800 ring-1 ring-white/10 cursor-pointer overflow-hidden" onclick="openGallery('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21fc1850-5389-492c-ba0b-dc24d1432208_800w.png')">
<img alt="Obytný prostor 3" className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21fc1850-5389-492c-ba0b-dc24d1432208_800w.png"/>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white border border-white/20">
<iconify-icon icon="solar:maximize-square-minimalistic-linear" width="16"></iconify-icon> Zobrazit
                                </span>
</div>
</div>
<div className="group relative aspect-square rounded-xl bg-slate-800 ring-1 ring-white/10 cursor-pointer overflow-hidden" onclick="openGallery('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/324263f6-ef07-4bf4-9c81-ff719640bcfd_800w.jpg')">
<img alt="Obytný prostor 4" className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/324263f6-ef07-4bf4-9c81-ff719640bcfd_800w.jpg"/>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white border border-white/20">
<iconify-icon icon="solar:maximize-square-minimalistic-linear" width="16"></iconify-icon> Zobrazit
                                </span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="flex items-center gap-3 border-b border-white/10 pb-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-blue-400">
<iconify-icon icon="solar:bus-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Vozidlo zvenčí</h3>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="group relative aspect-square rounded-xl bg-slate-800 ring-1 ring-white/10 cursor-pointer overflow-hidden" onclick="openGallery('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a969254b-8cbe-492d-9e13-7b180f2ce5db_3840w.png')">
<img alt="Exteriér 1" className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1c1f5a2-1fad-4aee-9394-9a18f880a4b8_800w.jpg"/>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white border border-white/20">
<iconify-icon icon="solar:maximize-square-minimalistic-linear" width="16"></iconify-icon> Zobrazit
                                </span>
</div>
</div>
<div className="group relative aspect-square rounded-xl bg-slate-800 ring-1 ring-white/10 cursor-pointer overflow-hidden" onclick="openGallery('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a969254b-8cbe-492d-9e13-7b180f2ce5db_3840w.png')">
<img alt="Exteriér 2" className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fdda2ed5-2011-4c76-9402-92410aed59c6_800w.jpg"/>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white border border-white/20">
<iconify-icon icon="solar:maximize-square-minimalistic-linear" width="16"></iconify-icon> Zobrazit
                                </span>
</div>
</div>
<div className="group relative aspect-square rounded-xl bg-slate-800 ring-1 ring-white/10 cursor-pointer overflow-hidden" onclick="openGallery('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a969254b-8cbe-492d-9e13-7b180f2ce5db_3840w.png')">
<img alt="Exteriér 3" className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/02e81ed6-a214-4416-adf5-b4721beb863a_800w.jpg"/>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white border border-white/20">
<iconify-icon icon="solar:maximize-square-minimalistic-linear" width="16"></iconify-icon> Zobrazit
                                </span>
</div>
</div>
<div className="group relative aspect-square rounded-xl bg-slate-800 ring-1 ring-white/10 cursor-pointer overflow-hidden" onclick="openGallery('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a969254b-8cbe-492d-9e13-7b180f2ce5db_3840w.png')">
<img alt="Exteriér 4" className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b6028f18-3ec5-4c6f-a0e5-83cf51298fb2_800w.jpg"/>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white border border-white/20">
<iconify-icon icon="solar:maximize-square-minimalistic-linear" width="16"></iconify-icon> Zobrazit
                                </span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="flex items-center gap-3 border-b border-white/10 pb-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-amber-400">
<iconify-icon icon="solar:backpack-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Vybavení a detaily</h3>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="group relative aspect-square rounded-xl bg-slate-800 ring-1 ring-white/10 cursor-pointer overflow-hidden" onclick="openGallery('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c2558f34-3233-4629-8337-7d82d17b5cd9_1600w.png')">
<img alt="Vybavení 1" className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/85acdc9e-deab-4cce-bd3b-de8e3920680f_800w.jpg"/>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white border border-white/20">
<iconify-icon icon="solar:maximize-square-minimalistic-linear" width="16"></iconify-icon> Zobrazit
                                </span>
</div>
</div>
<div className="group relative aspect-square rounded-xl bg-slate-800 ring-1 ring-white/10 cursor-pointer overflow-hidden" onclick="openGallery('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c2558f34-3233-4629-8337-7d82d17b5cd9_1600w.png')">
<img alt="Vybavení 2" className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a474cd81-b79b-43ae-98d2-bf9f6bf2a2f7_800w.jpg"/>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white border border-white/20">
<iconify-icon icon="solar:maximize-square-minimalistic-linear" width="16"></iconify-icon> Zobrazit
                                </span>
</div>
</div>
<div className="group relative aspect-square rounded-xl bg-slate-800 ring-1 ring-white/10 cursor-pointer overflow-hidden" onclick="openGallery('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c2558f34-3233-4629-8337-7d82d17b5cd9_1600w.png')">
<img alt="Vybavení 3" className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e46776c1-ce71-4ed0-b48a-90f6dfdb8eba_800w.jpg"/>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white border border-white/20">
<iconify-icon icon="solar:maximize-square-minimalistic-linear" width="16"></iconify-icon> Zobrazit
                                </span>
</div>
</div>
<div className="group relative aspect-square rounded-xl bg-slate-800 ring-1 ring-white/10 cursor-pointer overflow-hidden" onclick="openGallery('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c2558f34-3233-4629-8337-7d82d17b5cd9_1600w.png')">
<img alt="Vybavení 4" className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e2eb9b0-44e0-45ce-9f82-d21ba3b34983_800w.jpg"/>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white border border-white/20">
<iconify-icon icon="solar:maximize-square-minimalistic-linear" width="16"></iconify-icon> Zobrazit
                                </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 pt-24 pb-24 border-b border-slate-200" id="hodnoceni">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div className="md:w-2/3">
<span className="text-emerald-600 font-medium tracking-tight">Hodnocení zákazníků</span>
<h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Co o nás říkají cestovatelé</h2>
<p className="mt-4 text-lg text-slate-500">Přečtěte si reálné zkušenosti našich klientů, kteří si vůz zapůjčili přes portál bezKempu.</p>
</div>
<a className="group hidden md:flex shrink-0 items-center gap-2 rounded-full bg-white border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900 shadow-sm" href="https://www.bezkempu.cz/pujcovna-karavanu/1038" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-emerald-500" icon="solar:star-fall-linear" width="18"></iconify-icon>
                    Ověřené recenze bezKempu
                    <iconify-icon className="text-slate-400 group-hover:text-slate-600 transition" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>

<div className="overflow-hidden w-full relative">
<div className="flex gap-6 pb-4" id="reviews-track">

<div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333333%-16px)] flex-none">
<div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col">
<div className="flex items-center gap-1 mb-6 text-emerald-500">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 leading-relaxed text-sm mb-8 flex-1">
                                "Top obytný vůz, skvělá domluva, vše rychlé a bez problémů!"
                            </p>
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 font-semibold text-sm">
                                    M
                                </div>
<div className="overflow-hidden">
<p className="text-sm font-semibold text-slate-900 truncate">Miroslav</p>
<p className="text-xs text-slate-500 truncate">16.7. - 30.7.2025</p>
</div>
</div>
</div>
</div>

<div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333333%-16px)] flex-none">
<div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col">
<div className="flex items-center gap-1 mb-6 text-emerald-500">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 leading-relaxed text-sm mb-8 flex-1">
                                "Skvělé auto, skvělý majitel. V autě nechybí nic pro jakoukoli situaci na cestě (od kempovacího vybavení až po sadu nářadí na opravu čehokoli). Komfort ve všech směrech."
                            </p>
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 font-semibold text-sm">
                                    F
                                </div>
<div className="overflow-hidden">
<p className="text-sm font-semibold text-slate-900 truncate">Filip</p>
<p className="text-xs text-slate-500 truncate">2.7. - 6.7.2025</p>
</div>
</div>
</div>
</div>

<div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333333%-16px)] flex-none">
<div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col">
<div className="flex items-center gap-1 mb-6 text-emerald-500">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 leading-relaxed text-sm mb-8 flex-1">
                                "Perfektní domluva s majitelem, výborný stav vozu, lidský přístup."
                            </p>
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 font-semibold text-sm">
                                    J
                                </div>
<div className="overflow-hidden">
<p className="text-sm font-semibold text-slate-900 truncate">Jakub</p>
<p className="text-xs text-slate-500 truncate">27.6. - 1.7.2025</p>
</div>
</div>
</div>
</div>

<div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333333%-16px)] flex-none">
<div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col">
<div className="flex items-center gap-1 mb-6 text-emerald-500">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 leading-relaxed text-sm mb-8 flex-1">
                                "Skvělá domluva, karavan byl perfektně připravený a čistý. Solární panely fungovaly na jedničku, takže jsme nemuseli vůbec řešit přípojky v kempech. Určitě doporučuji!"
                            </p>
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 font-semibold text-sm">
                                    JN
                                </div>
<div className="overflow-hidden">
<p className="text-sm font-semibold text-slate-900 truncate">Jan N.</p>
<p className="text-xs text-slate-500 truncate">Ověřený pronájem</p>
</div>
</div>
</div>
</div>

<div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333333%-16px)] flex-none">
<div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col">
<div className="flex items-center gap-1 mb-6 text-emerald-500">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 leading-relaxed text-sm mb-8 flex-1">
                                "Vše proběhlo naprosto v pořádku. Obytné auto je prostorné, nadstandardně vybavené a jízda byla velmi pohodlná. Majitel nám před odjezdem vše detailně vysvětlil a byl vždy na příjmu."
                            </p>
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 font-semibold text-sm">
                                    PS
                                </div>
<div className="overflow-hidden">
<p className="text-sm font-semibold text-slate-900 truncate">Petra S.</p>
<p className="text-xs text-slate-500 truncate">Ověřený pronájem</p>
</div>
</div>
</div>
</div>

<div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333333%-16px)] flex-none">
<div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col">
<div className="flex items-center gap-1 mb-6 text-emerald-500">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 leading-relaxed text-sm mb-8 flex-1">
                                "Náš první výlet obytňákem a díky tomuto autu určitě ne poslední. Oceňuji velkou lednici a nezávislé topení v chladnějších nocích. Férové jednání a super přístup od začátku do konce."
                            </p>
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 font-semibold text-sm">
                                    TM
                                </div>
<div className="overflow-hidden">
<p className="text-sm font-semibold text-slate-900 truncate">Tomáš M.</p>
<p className="text-xs text-slate-500 truncate">Ověřený pronájem</p>
</div>
</div>
</div>
</div>

<div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333333%-16px)] flex-none">
<div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col">
<div className="flex items-center gap-1 mb-6 text-emerald-500">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 leading-relaxed text-sm mb-8 flex-1">
                                "Skvělý zážitek pro celou rodinu, auto bylo perfektně čisté a voňavé. Velké plus za podrobné vysvětlení všeho ze strany majitele před odjezdem."
                            </p>
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 font-semibold text-sm">
                                    AK
                                </div>
<div className="overflow-hidden">
<p className="text-sm font-semibold text-slate-900 truncate">Alena K.</p>
<p className="text-xs text-slate-500 truncate">Ověřený pronájem</p>
</div>
</div>
</div>
</div>

<div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333333%-16px)] flex-none">
<div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col">
<div className="flex items-center gap-1 mb-6 text-emerald-500">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 leading-relaxed text-sm mb-8 flex-1">
                                "Velká spokojenost. Solární panely jsou pecka, nezávislost k nezaplacení. Celý týden jsme kempovali na divoko a nepotřebovali jsme elektrickou přípojku."
                            </p>
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 font-semibold text-sm">
                                    MD
                                </div>
<div className="overflow-hidden">
<p className="text-sm font-semibold text-slate-900 truncate">Martin D.</p>
<p className="text-xs text-slate-500 truncate">Ověřený pronájem</p>
</div>
</div>
</div>
</div>

<div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333333%-16px)] flex-none">
<div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col">
<div className="flex items-center gap-1 mb-6 text-emerald-500">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 leading-relaxed text-sm mb-8 flex-1">
                                "Všechno fungovalo jak mělo. Ocenili jsme hlavně prostornou kuchyň a velkou lednici s mrazákem, do které se bez problému vešlo jídlo na několik dní."
                            </p>
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 font-semibold text-sm">
                                    LV
                                </div>
<div className="overflow-hidden">
<p className="text-sm font-semibold text-slate-900 truncate">Lucie V.</p>
<p className="text-xs text-slate-500 truncate">Ověřený pronájem</p>
</div>
</div>
</div>
</div>

<div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333333%-16px)] flex-none">
<div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col">
<div className="flex items-center gap-1 mb-6 text-emerald-500">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 leading-relaxed text-sm mb-8 flex-1">
                                "Komunikace na jedničku, auto v perfektním stavu a skvěle vybavené. Rozhodně si půjčíme znovu, doporučuji všem milovníkům kempování."
                            </p>
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 font-semibold text-sm">
                                    PR
                                </div>
<div className="overflow-hidden">
<p className="text-sm font-semibold text-slate-900 truncate">Pavel R.</p>
<p className="text-xs text-slate-500 truncate">Ověřený pronájem</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-10 flex justify-center md:hidden">
<a className="group flex items-center gap-2 rounded-full bg-white border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900 shadow-sm w-full justify-center" href="https://www.bezkempu.cz/pujcovna-karavanu/1038" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-emerald-500" icon="solar:star-fall-linear" width="18"></iconify-icon>
                    Ověřené recenze
                    <iconify-icon className="text-slate-400 group-hover:text-slate-600 transition" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24 border-b border-slate-200" id="cenik">

<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-16 lg:grid-cols-2 lg:items-start gap-x-16 gap-y-16">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Transparentní ceník.</h2>
<p className="mt-4 text-lg text-slate-500">Žádné skryté poplatky. Cena zahrnuje plné vybavení i pojištění.</p>
<div className="mt-10 space-y-6">
<div className="flex items-center justify-between border-b border-slate-100 pb-4">
<div>
<h3 className="font-medium text-slate-900">Zimní</h3>
<p className="text-xs text-slate-500">Leden - Březen</p>
</div>
<div className="text-right">
<span className="block text-xl font-bold tracking-tight text-slate-900">3 000 Kč</span>
<span className="text-xs text-slate-500">/ noc</span>
</div>
</div>
<div className="flex items-center justify-between border-b border-slate-100 pb-4">
<div>
<h3 className="font-medium text-slate-900">Jaro</h3>
<p className="text-xs text-slate-500">Duben - Červen</p>
</div>
<div className="text-right">
<span className="block text-xl font-bold tracking-tight text-slate-900">3 200 Kč</span>
<span className="text-xs text-slate-500">/ noc</span>
</div>
</div>
<div className="flex items-center justify-between border-b border-slate-100 pb-4">
<div>
<h3 className="font-medium text-slate-900">Léto</h3>
<p className="text-xs text-slate-500">Červenec - Září</p>
</div>
<div className="text-right">
<span className="block text-xl font-bold tracking-tight text-slate-900">3 500 Kč</span>
<span className="text-xs text-slate-500">/ noc</span>
</div>
</div>
<div className="flex items-center justify-between border-b border-slate-100 pb-4">
<div>
<h3 className="font-medium text-slate-900">Podzim &amp; Zima</h3>
<p className="text-xs text-slate-500">Říjen - Prosinec</p>
</div>
<div className="text-right">
<span className="block text-xl font-bold tracking-tight text-slate-900">3 000 Kč</span>
<span className="text-xs text-slate-500">/ noc</span>
</div>
</div>
</div>
<div className="mt-8 flex flex-col gap-3">
<div className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-500 mt-0.5" icon="solar:info-circle-linear" width="18"></iconify-icon>
<span>Při pronájmu na 3 a méně dnů je účtován navíc fixní poplatek 3 200 Kč.</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Havarijní pojištění (spoluúčast 10%)</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Dálniční známka ČR</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Limit nájezdu 300 km / den (nad limit 5 Kč/km)</span>
</div>
</div>
</div>

<div className="relative">
<div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
<div className="mb-6 flex items-center justify-between">
<span className="font-semibold text-slate-900">Kalkulace pronájmu</span>
<iconify-icon className="text-slate-400" icon="solar:calculator-minimalistic-linear" width="24"></iconify-icon>
</div>
<form className="space-y-5" id="rentalCalculator" onsubmit="return false;">
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500">Termín cesty</label>
<div className="relative">
<select className="w-full appearance-none rounded-xl border-slate-200 bg-white p-3 pr-10 text-sm font-medium text-slate-900 shadow-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" id="seasonSelect" onchange="calculateTotal()">
<option value="3000">Leden - Březen (3 000 Kč)</option>
<option value="3200">Duben - Červen (3 200 Kč)</option>
<option selected="" value="3500">Červenec - Září (3 500 Kč)</option>
<option value="3000">Říjen - Prosinec (3 000 Kč)</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500">Počet nocí</label>
<div className="relative">
<input className="w-full rounded-xl border-slate-200 bg-white p-3 text-sm font-medium text-slate-900 shadow-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" id="nightsInput" max="60" min="1" oninput="calculateTotal()" type="number" value="3"/>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400 text-xs">
                                        Dny
                                    </div>
</div>
</div>
<div className="rounded-lg bg-blue-50 p-3 text-xs text-blue-700 leading-relaxed">
                                Minimální délka pronájmu v měsíci únoru: 3 dny 
                                <a className="underline underline-offset-2 ml-1 text-blue-800 font-medium" href="#" onclick="alert('Kalendář s obsazeností bude brzy doplněn.'); return false;">(zobrazit další měsíce)</a>
</div>
<div className="my-6 h-px w-full bg-slate-200"></div>
<div className="flex items-end justify-between">
<div>
<p className="text-sm font-medium text-slate-500">Celková cena</p>
<p className="text-xs text-slate-400 mt-1">Vratná kauce při převzetí 25 000,-</p>
</div>
<div className="text-right">
<span className="text-3xl font-bold tracking-tight text-slate-900" id="totalPriceDisplay">13 700 Kč</span>
<span className="block text-[10px] font-medium text-amber-600 mt-1 uppercase tracking-wider" id="shortTermFeeNotice">+ Poplatek 3 200 Kč (krátký termín)</span>
</div>
</div>
<a className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20" href="https://calendar.app.google/FagK76a2ku5RS4hr5" target="_blank">
<span>Přejít k rezervaci</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 pt-24 pb-24" id="podminky">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-12">
<span className="text-emerald-600 font-medium tracking-tight">Rezervace a storno</span>
<h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Platba a storno podmínky</h2>
<p className="mt-4 text-lg text-slate-500 max-w-2xl">
                    Platební údaje obdržíte po schválení rezervace. Průměrná doba do odpovědi je 0 minut. V poslední době schváleno 100% rezervací.
                </p>
</div>
<div className="grid gap-8 lg:grid-cols-2">

<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
<iconify-icon icon="solar:calendar-mark-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Postup rezervace</h3>
</div>
<ul className="space-y-4 text-sm text-slate-600 leading-relaxed">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-1 shrink-0" icon="solar:check-read-linear" width="18"></iconify-icon>
<span>Žádost o rezervaci vytvoříte volbou požadovaného termínu a stiskem tlačítka "rezervovat".</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-1 shrink-0" icon="solar:check-read-linear" width="18"></iconify-icon>
<span>Po vytvoření žádosti o rezervaci je možné se s majitelem dále domluvit na konkrétních podmínkách pronájmu.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-1 shrink-0" icon="solar:check-read-linear" width="18"></iconify-icon>
<span>Následně majitel potvrdí rezervaci a vy obdržíte platební údaje, platbu je nutné provést do 2 pracovních dní od potvrzení rezervace majitelem.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-1 shrink-0" icon="solar:check-read-linear" width="18"></iconify-icon>
<span>V případě, že termín pronájmu začíná za více než 30 dní, platí se nejprve 50% záloha, zbytek je nutné uhradit nejpozději 30 dní před začátkem pronájmu (v obou případech obdržíte zavčas platební údaje emailem).</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-1 shrink-0" icon="solar:check-read-linear" width="18"></iconify-icon>
<span>Pokud rezervace začíná dříve než za 31 dní, hradí se rovnou celá částka.</span>
</li>
</ul>
</div>

<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
<iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Storno</h3>
</div>
<ul className="space-y-4 text-sm text-slate-600 leading-relaxed">
<li className="flex items-start gap-3">
<iconify-icon className="text-rose-400 mt-1 shrink-0" icon="solar:close-circle-linear" width="18"></iconify-icon>
<span><strong>Storno nejpozději 31 před začátkem pronájmu</strong> – storno poplatek činí 50 % (propadá záloha).</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-rose-400 mt-1 shrink-0" icon="solar:close-circle-linear" width="18"></iconify-icon>
<span><strong>Storno 30 dní a méně před začátkem pronájmu</strong> – storno poplatek činí 100 %.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-1 shrink-0" icon="solar:refresh-circle-linear" width="18"></iconify-icon>
<span><strong>Do 2 dní od vytvoření rezervace</strong> (a zároveň více než 30 dní před začátkem pronájmu) – vracíme zaplacenou zálohu (bez administrativního poplatku).</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1 shrink-0" icon="solar:calendar-mark-linear" width="18"></iconify-icon>
<span><strong>Změna termínu</strong> po dohodě obou stran je možná kdykoli zdarma.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 py-12 border-t border-white/10">
<div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-sm text-slate-500">© 2024 na4kolech.cz. Všechna práva vyhrazena.</p>
<div className="flex items-center gap-6">
<a className="text-sm font-medium text-slate-400 hover:text-white transition" href="https://www.instagram.com/na4kolech.cz/" rel="noopener noreferrer" target="_blank">
                    Instagram
                </a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition" href="https://www.facebook.com/profile.php?id=61576089824046" rel="noopener noreferrer" target="_blank">
                    Facebook
                </a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden bg-slate-950/95 p-4 sm:p-8 backdrop-blur-md opacity-0 transition-opacity duration-300 items-center justify-center" id="galleryModal">

<div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex justify-between items-center z-20 pointer-events-none">
<div className="flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium tracking-wide text-white border border-white/10 backdrop-blur-sm pointer-events-auto" id="lightboxCounter">
                1 / 1
            </div>
<button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 border border-white/10 backdrop-blur-sm pointer-events-auto" onclick="closeGallery()">
<iconify-icon icon="solar:close-linear" width="24"></iconify-icon>
</button>
</div>
<button className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 border border-white/10 z-20 backdrop-blur-sm" onclick="prevImage(event)">
<iconify-icon className="sm:w-[28px] sm:h-[28px]" icon="solar:alt-arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 border border-white/10 z-20 backdrop-blur-sm" onclick="nextImage(event)">
<iconify-icon className="sm:w-[28px] sm:h-[28px]" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
</button>
<img alt="Zvětšená fotka" className="max-h-[85vh] max-w-[90vw] sm:max-w-[80vw] rounded-lg object-contain shadow-2xl scale-95 transition-transform duration-300 select-none z-10" id="modalImage" src=""/>
</div>



    </>
  );
}
