import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Intersection Observer for Subtle Reveal Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((element) => {
            observer.observe(element);
        });

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        // Dynamic Gallery Logic
        let galleryImages = [];
        let currentGalleryIndex = 0;

        document.addEventListener('DOMContentLoaded', () => {
            const triggers = document.querySelectorAll('.lightbox-trigger');
            triggers.forEach((trigger, index) => {
                const img = trigger.querySelector('img');
                galleryImages.push(img.src);
                trigger.addEventListener('click', () => openLightbox(index));
            });
        });

        function openLightbox(index) {
            currentGalleryIndex = index;
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            
            lightboxImg.src = galleryImages[currentGalleryIndex];
            
            lightbox.classList.remove('hidden');
            lightbox.classList.add('flex');
            document.body.classList.add('overflow-hidden');
            
            // Fade in
            requestAnimationFrame(() => {
                lightbox.classList.remove('opacity-0');
                lightbox.classList.add('opacity-100');
            });
        }

        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            
            lightbox.classList.remove('opacity-100');
            lightbox.classList.add('opacity-0');
            document.body.classList.remove('overflow-hidden');
            
            setTimeout(() => {
                lightbox.classList.remove('flex');
                lightbox.classList.add('hidden');
                document.getElementById('lightbox-img').src = '';
            }, 300); 
        }

        function prevImage(e) {
            if (e) e.stopPropagation();
            currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
            document.getElementById('lightbox-img').src = galleryImages[currentGalleryIndex];
        }

        function nextImage(e) {
            if (e) e.stopPropagation();
            currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
            document.getElementById('lightbox-img').src = galleryImages[currentGalleryIndex];
        }

        document.addEventListener('keydown', (e) => {
            const lightbox = document.getElementById('lightbox');
            if (!lightbox.classList.contains('hidden')) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowLeft') prevImage(null);
                if (e.key === 'ArrowRight') nextImage(null);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-stone-50 min-h-screen transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] bg-white w-full" id="page-wrapper">

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-stone-200/50 shadow-sm" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16 lg:h-20">

<a className="flex items-center gap-2.5 group" href="#">
<div className="w-8 h-8 rounded-lg bg-emerald-800 flex items-center justify-center text-white transform group-hover:rotate-6 transition-transform duration-500">
<iconify-icon height="18" icon="solar:leaf-linear" width="18"></iconify-icon>
</div>
<span className="text-2xl font-light tracking-tight text-stone-900">Zelený klenot</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-light text-stone-600 hover:text-stone-900 transition-colors" href="#o-nas">O nás</a>
<a className="text-sm font-light text-stone-600 hover:text-stone-900 transition-colors" href="#sluzby">Služby</a>
<a className="text-sm font-light text-stone-600 hover:text-stone-900 transition-colors" href="#ukazky">Ukázky</a>
<a className="text-sm font-light text-stone-600 hover:text-stone-900 transition-colors" href="#kontakt">Kontakt</a>
</div>

<div className="hidden md:block">
<a className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-light text-white bg-emerald-800 hover:bg-emerald-900 transition-colors duration-300 shadow-sm" href="#kontakt">
                            Konzultace zdarma
                        </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-stone-600 hover:text-stone-900 focus:outline-none transition-colors flex items-center justify-center" onclick="toggleMobileMenu()">
<iconify-icon height="26" icon="solar:hamburger-menu-linear" width="26"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white/95 backdrop-blur-md border-t border-stone-100 absolute w-full z-40" id="mobile-menu">
<div className="px-6 py-6 space-y-5 shadow-xl">
<a className="block text-lg font-light tracking-tight text-stone-700 hover:text-stone-900" href="#o-nas" onclick="toggleMobileMenu()">O nás</a>
<a className="block text-lg font-light tracking-tight text-stone-700 hover:text-stone-900" href="#sluzby" onclick="toggleMobileMenu()">Služby</a>
<a className="block text-lg font-light tracking-tight text-stone-700 hover:text-stone-900" href="#ukazky" onclick="toggleMobileMenu()">Ukázky</a>
<a className="block text-lg font-light tracking-tight text-stone-700 hover:text-stone-900" href="#kontakt" onclick="toggleMobileMenu()">Kontakt</a>
<a className="block w-full text-center px-5 py-3 mt-4 rounded-xl text-base font-light tracking-tight text-white bg-emerald-800 shadow-sm" href="#kontakt" onclick="toggleMobileMenu()">
                        Konzultace zdarma
                    </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-28 lg:pt-40 lg:pb-40 overflow-hidden min-h-[85vh] flex items-center">

<div className="absolute inset-0 z-0">
<img alt="Krásná zelená zahrada" className="object-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05c7ce89-b9e3-4d1e-a838-e53be92db1f5_3840w.png"/>
<div className="bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-transparent absolute inset-0"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full reveal is-visible">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
<span className="text-sm text-white font-light">Zakázkové realizace zahrad</span>
</div>
<h1 className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.15] mb-6">
                        Proměňte svou zahradu v dokonalou oázu.
                    </h1>
<p className="text-xl lg:text-2xl tracking-tight text-stone-200 mb-10 leading-relaxed font-extralight max-w-xl">
                        Kompletní realizace a údržba zahrad. Od úvodního návrhu až po pravidelnou péči o váš trávník a zeleň.
                    </p>
<div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
<a className="group inline-flex items-center justify-center px-6 py-3.5 rounded-full text-base sm:text-lg font-light tracking-tight text-stone-900 bg-white hover:bg-emerald-800 hover:text-white transition-all duration-300 ease-out hover:shadow-xl hover:shadow-emerald-900/30 hover:-translate-y-0.5" href="#kontakt">
                            Chci krásnou zahradu
                            <iconify-icon className="ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<div className="flex items-center gap-2.5 text-stone-300">
<iconify-icon className="text-emerald-400" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-base font-extralight">Nezávazný návrh zdarma</span>
</div>
</div>

<div className="mt-14 flex items-center gap-5 reveal is-visible" style={{transitionDelay: '200ms'}}>
<div className="flex items-center gap-1 text-emerald-400">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<div className="w-px h-5 bg-white/20"></div>
<p className="text-sm md:text-base font-light tracking-tight text-stone-300 m-0">
                            Důvěřuje nám více než <span className="text-white font-normal">150 rodin</span>
</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white relative z-20 -mt-12 lg:-mt-16 rounded-t-[2.5rem] lg:rounded-t-[3rem] shadow-[0_-8px_30px_rgba(0,0,0,0.04)]" id="o-nas">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-3xl mb-14 lg:mb-20 reveal is-visible">
<span className="text-emerald-800 font-normal tracking-widest text-sm uppercase mb-3 block">O nás</span>
<h2 className="text-4xl lg:text-5xl font-light tracking-tight text-stone-900 mb-5">Tvoříme zahrady, které žijí s vámi</h2>
<p className="text-lg lg:text-xl text-stone-600 font-extralight leading-relaxed max-w-2xl tracking-tight">
                        Náš přístup je založen na dlouholetých zkušenostech a respektu k přírodě. Nejsme jen realizátoři, jsme vaši partneři při budování a udržování dokonalého venkovního prostoru.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 reveal" style={{transitionDelay: '100ms'}}>
<div className="flex items-start gap-5">
<div className="shrink-0 mt-1 text-emerald-800 flex items-center justify-center">
<iconify-icon height="26" icon="solar:leaf-linear" width="26"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-light tracking-tight text-stone-900 mb-2">Odbornost a praxe</h3>
<p className="text-base lg:text-lg font-extralight text-stone-600 leading-relaxed">Více než 10 let praxe s péčí o zeleň. Známe potřeby rostlin do nejmenšího detailu v každém ročním období, takže se vyhnete zbytečným chybám a nákladům.</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="shrink-0 mt-1 text-emerald-800 flex items-center justify-center">
<iconify-icon height="26" icon="solar:clock-circle-linear" width="26"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-light tracking-tight text-stone-900 mb-2">Spolehlivost bez výmluv</h3>
<p className="text-base lg:text-lg font-extralight text-stone-600 leading-relaxed">Zakládáme si na absolutní transparentnosti. Striktně dodržujeme sjednané termíny i předem schválené rozpočty. Co si dohodneme, to platí.</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="shrink-0 mt-1 text-emerald-800 flex items-center justify-center">
<iconify-icon height="26" icon="solar:shield-check-linear" width="26"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-light tracking-tight text-stone-900 mb-2">Komplexní péče od A do Z</h3>
<p className="text-base lg:text-lg font-extralight text-stone-600 leading-relaxed">Řešíme vše od hrubých terénních úprav, přes instalaci automatické závlahy, až po finální výsadbu a dlouhodobou garanční péči.</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="shrink-0 mt-1 text-emerald-800 flex items-center justify-center">
<iconify-icon height="26" icon="solar:home-2-linear" width="26"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-light tracking-tight text-stone-900 mb-2">Respekt k vašemu stylu</h3>
<p className="text-base lg:text-lg font-extralight text-stone-600 leading-relaxed">Každá zahrada je unikátní. Nenutíme vám univerzální řešení, ale navrhujeme design přesně na míru vaší rodině a lokálním podmínkám.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-stone-50 border-t border-stone-200/50" id="sluzby">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-3xl mb-14 lg:mb-20 reveal">
<span className="text-emerald-800 font-normal tracking-widest text-sm uppercase mb-3 block">Naše služby</span>
<h2 className="text-4xl lg:text-5xl font-light tracking-tight text-stone-900 mb-5">Vše pro vaši vysněnou zahradu</h2>
<p className="text-lg lg:text-xl font-extralight text-stone-600 max-w-2xl leading-relaxed tracking-tight">Nenabízíme jen hodiny práce, ale především výsledky. Vyberte si úroveň péče, která nejlépe odpovídá vašim představám o dokonalém domově.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 reveal" style={{transitionDelay: '150ms'}}>

<div className="group bg-white rounded-2xl p-8 border border-stone-200/75 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-100 text-emerald-700 flex items-center justify-center mb-6 group-hover:bg-emerald-50 group-hover:scale-105 transition-all duration-300">
<iconify-icon height="24" icon="solar:medal-ribbon-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight text-stone-900 mb-3">Zahrada bez starostí</h3>
<p className="text-sm font-light text-stone-500 leading-relaxed">Vy odpočíváte, my se staráme. Pravidelné sečení, hnojení, vertikutace a citlivé zazimování pro neustále dokonalý vzhled.</p>
</div>

<div className="group bg-white rounded-2xl p-8 border border-stone-200/75 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-100 text-emerald-700 flex items-center justify-center mb-6 group-hover:bg-emerald-50 group-hover:scale-105 transition-all duration-300">
<iconify-icon height="24" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight text-stone-900 mb-3">Proměna na klíč</h3>
<p className="text-sm font-light text-stone-500 leading-relaxed">Převezmeme vaši vizi a postaráme se o kompletní proces. Od hrubých výkopů až po zasazení poslední okrasné květiny.</p>
</div>

<div className="group bg-white rounded-2xl p-8 border border-stone-200/75 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-100 text-emerald-700 flex items-center justify-center mb-6 group-hover:bg-emerald-50 group-hover:scale-105 transition-all duration-300">
<iconify-icon height="24" icon="solar:scissors-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight text-stone-900 mb-3">Zdravé a vitální stromy</h3>
<p className="text-sm font-light text-stone-500 leading-relaxed">Profesionální arboristický řez a tvarování. Vaše dřeviny a živé ploty získají správný tvar, zdraví a bohatou úrodu.</p>
</div>

<div className="group bg-white rounded-2xl p-8 border border-stone-200/75 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-100 text-emerald-700 flex items-center justify-center mb-6 group-hover:bg-emerald-50 group-hover:scale-105 transition-all duration-300">
<iconify-icon height="24" icon="solar:waterdrop-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight text-stone-900 mb-3">Dokonalý zelený koberec</h3>
<p className="text-sm font-light text-stone-500 leading-relaxed">Založení reprezentativního trávníku. Rychlý efekt díky kobercům nebo pečlivý výsev pro maximální odolnost a dlouhověkost.</p>
</div>
</div>
</div>
</section>

<section className="pb-20 lg:pb-28 bg-stone-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="bg-emerald-800 rounded-[2rem] p-8 lg:p-12 xl:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 reveal shadow-[0_15px_30px_-10px_rgba(6,78,59,0.2)]">

<div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-emerald-600 rounded-full blur-[80px] opacity-50 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-emerald-950 rounded-full blur-[80px] opacity-50 pointer-events-none"></div>
<div className="relative z-10 max-w-2xl text-center lg:text-left">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-400/20 text-red-100 text-sm font-normal mb-5 border border-red-400/30">
<iconify-icon height="14" icon="solar:clock-circle-linear" width="14"></iconify-icon>
                            Omezená kapacita na jaro
                        </div>
<h2 className="text-3xl lg:text-4xl font-light tracking-tight text-white mb-4">
                            Nečekejte na poslední chvíli, termíny se rychle plní
                        </h2>
<p className="text-lg lg:text-xl text-emerald-100/90 mb-0 font-extralight leading-relaxed tracking-tight">
                            Zajistěte si svůj termín realizace ještě dnes. Získáte od nás bezplatný návrh i přesnou cenovou kalkulaci a budete mít jistotu, že si v létě užijete dokonalou zahradu.
                        </p>
</div>
<div className="relative z-10 shrink-0 flex flex-col items-center lg:items-end gap-5">
<a className="inline-flex items-center justify-center px-7 py-4 rounded-full text-base sm:text-lg font-light tracking-tight text-emerald-900 bg-white hover:bg-stone-50 transition-all duration-300 shadow-lg hover:-translate-y-0.5" href="#kontakt">
                            Ověřit volné termíny
                            <iconify-icon className="ml-2.5" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<div className="flex items-center gap-3 text-emerald-200 text-base font-extralight">
<span className="flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:shield-check-linear" width="16"></iconify-icon>
                                Nezávazně
                            </span>
<span className="w-1 h-1 rounded-full bg-emerald-500/50"></span>
<span className="flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:wallet-linear" width="16"></iconify-icon>
                                Zcela zdarma
                            </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white border-t border-stone-200/50" id="ukazky">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20 reveal">
<span className="text-emerald-800 font-normal tracking-widest text-sm uppercase mb-3 block">Ukázky práce</span>
<h2 className="text-4xl lg:text-5xl font-light tracking-tight text-stone-900 mb-5">Naše práce mluví za nás</h2>
<p className="text-lg lg:text-xl font-extralight tracking-tight text-stone-600">Podívejte se na skutečnou proměnu, kterou dokážeme v zahradách vytvořit. Rozdíl před a po je často k nepoznání.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 mb-12 lg:mb-16 max-w-6xl mx-auto reveal" style={{transitionDelay: '100ms'}}>

<div className="relative rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden group border border-stone-100">
<div className="absolute top-5 left-5 z-20 px-5 py-2.5 bg-stone-900/80 backdrop-blur-md rounded-full text-white text-sm lg:text-base font-light shadow-sm flex items-center gap-2">
<iconify-icon className="text-stone-300" height="18" icon="solar:sad-circle-linear" width="18"></iconify-icon>
                            Před úpravou
                        </div>
<img alt="Zahrada před úpravou" className="aspect-[4/3] grayscale-[0.1] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/75248d6d-d2d5-428d-88b8-b89866f34cad_1600w.webp"/>
</div>

<div className="relative rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden group border border-stone-100">
<div className="absolute top-5 right-5 z-20 px-5 py-2.5 bg-emerald-800/90 backdrop-blur-md rounded-full text-white text-sm lg:text-base font-light shadow-sm flex items-center gap-2">
                            Po realizaci
                            <iconify-icon className="text-emerald-200" height="18" icon="solar:stars-linear" width="18"></iconify-icon>
</div>
<img alt="Zahrada po úpravě" className="aspect-[4/3] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a7ab631-9375-4de5-bd06-0cb734f590f8_1600w.webp"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 max-w-6xl mx-auto reveal" style={{transitionDelay: '200ms'}}>

<div className="relative group rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden cursor-zoom-in transition-all duration-500 border border-stone-100 lightbox-trigger">
<img alt="Ukázka práce 1" className="aspect-square transition-transform duration-700 group-hover:scale-[1.02] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7d978e5-2c60-4435-a6f8-fd211ea9fcd4_800w.jpg"/>
<div className="group-hover:bg-stone-900/10 transition-colors duration-500 flex bg-stone-900/0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" height="28" icon="solar:maximize-square-minimalistic-linear" width="28"></iconify-icon>
</div>
</div>

<div className="relative group rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden cursor-zoom-in transition-all duration-500 border border-stone-100 lightbox-trigger">
<img alt="Ukázka práce 2" className="aspect-square transition-transform duration-700 group-hover:scale-[1.02] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96f7a28d-6c51-42ba-8132-8ff95ed18118_800w.jpg"/>
<div className="group-hover:bg-stone-900/10 transition-colors duration-500 flex bg-stone-900/0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" height="28" icon="solar:maximize-square-minimalistic-linear" width="28"></iconify-icon>
</div>
</div>

<div className="relative group rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden cursor-zoom-in transition-all duration-500 border border-stone-100 lightbox-trigger">
<img alt="Ukázka práce 3" className="aspect-square transition-transform duration-700 group-hover:scale-[1.02] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/396de3ea-2056-4792-929d-fdffed9f0873_800w.jpg"/>
<div className="group-hover:bg-stone-900/10 transition-colors duration-500 flex bg-stone-900/0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" height="28" icon="solar:maximize-square-minimalistic-linear" width="28"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 text-white bg-zinc-950" id="hodnoceni">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="lg:mb-20 text-center mb-14 reveal">
<div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-5 text-sm lg:text-base font-light text-emerald-400">
<iconify-icon height="18" icon="solar:verified-check-linear" width="18"></iconify-icon>
                        Ověřené recenze od reálných zákazníků
                    </div>
<h2 className="text-4xl lg:text-5xl font-light tracking-tight">Co říkají rodiny, kterým už pomáháme</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 reveal" style={{transitionDelay: '150ms'}}>

<div className="bg-white/5 border border-white/5 rounded-[1.5rem] lg:rounded-[2rem] p-7 md:p-8 flex flex-col justify-between hover:bg-white/10 transition-colors duration-500">
<div>
<div className="flex items-center gap-1 text-emerald-400 mb-6">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-lg lg:text-xl font-extralight tracking-tight text-stone-300 leading-relaxed mb-8">
                                "Zelený klenot nám doslova zachránil trávník. Po letech marného boje s mechem máme konečně hustý zelený koberec. Skvělá domluva a naprostá profesionalita."
                            </p>
</div>
<div>
<p className="text-lg font-light text-white mb-0.5">Jana M.</p>
<p className="text-base font-extralight text-stone-500">Rodinný dům, Říčany</p>
</div>
</div>

<div className="bg-white/5 border border-white/5 rounded-[1.5rem] lg:rounded-[2rem] p-7 md:p-8 flex flex-col justify-between hover:bg-white/10 transition-colors duration-500">
<div>
<div className="flex items-center gap-1 text-emerald-400 mb-6">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-lg lg:text-xl font-extralight tracking-tight text-stone-300 leading-relaxed mb-8">
                                "Nechali jsme si navrhnout a zrealizovat zahradu od nuly. Výsledek absolutně předčil naše očekávání. Celý tým Zeleného klenotu můžu vřele doporučit."
                            </p>
</div>
<div>
<p className="text-lg font-light text-white mb-0.5">Petr K.</p>
<p className="text-base font-extralight text-stone-500">Novostavba, Beroun</p>
</div>
</div>

<div className="bg-white/5 border border-white/5 rounded-[1.5rem] lg:rounded-[2rem] p-7 md:p-8 flex flex-col justify-between hover:bg-white/10 transition-colors duration-500">
<div>
<div className="flex items-center gap-1 text-emerald-400 mb-6">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-lg lg:text-xl font-extralight tracking-tight text-stone-300 leading-relaxed mb-8">
                                "Oceňuji pravidelnou údržbu. Každý měsíc přijedou, vše ostříhají, posekají, odvezou odpad a já se o nic nemusím starat. Konečně si zahradu jen užíváme."
                            </p>
</div>
<div>
<p className="text-lg font-light text-white mb-0.5">Rodina Novotných</p>
<p className="text-base font-extralight text-stone-500">Pravidelná údržba</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white" id="kontakt">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-14 lg:mb-20 reveal">
<span className="text-emerald-800 font-normal tracking-widest text-sm uppercase mb-3 block">Kontakt</span>
<h2 className="text-4xl lg:text-5xl font-light tracking-tight text-stone-900 mb-5">Vdechněte své zahradě nový život</h2>
<p className="text-lg lg:text-xl font-extralight tracking-tight text-stone-600 max-w-2xl leading-relaxed">Stačí vyplnit krátký formulář nebo nám zavolat. Ozveme se vám zpět do 24 hodin a domluvíme se na dalším postupu – bez závazků a zdarma.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 reveal" style={{transitionDelay: '150ms'}}>

<div className="lg:col-span-2 flex flex-col gap-10">
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-emerald-800 shrink-0">
<iconify-icon height="22" icon="solar:phone-linear" width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-light text-stone-500 mb-1">Zavolejte nám</p>
<a className="text-xl lg:text-2xl font-light tracking-tight text-stone-900 hover:text-emerald-800 transition-colors" href="tel:+420987654321">+420 987 654 321</a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-emerald-800 shrink-0">
<iconify-icon height="22" icon="solar:letter-linear" width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-light text-stone-500 mb-1">Napište nám e-mail</p>
<a className="text-xl lg:text-2xl font-light tracking-tight text-stone-900 hover:text-emerald-800 transition-colors" href="mailto:ahoj@zelenyklenot.cz">ahoj@zelenyklenot.cz</a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-emerald-800 shrink-0">
<iconify-icon height="22" icon="solar:map-point-linear" width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-light text-stone-500 mb-1">Naše působnost</p>
<p className="text-xl lg:text-2xl font-light tracking-tight text-stone-900 mb-2">Praha a okolí do 50 km</p>
<p className="text-base font-light text-stone-500 leading-relaxed max-w-sm">
                                        Pravidelně jezdíme do lokalit: <strong className="font-normal text-stone-800">Říčany, Kladno, Beroun, Černošice, Brandýs n. Labem, Jesenice, Hostivice</strong> a další.
                                    </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3">
<div className="bg-white rounded-[1.5rem] lg:rounded-3xl border border-stone-200/80 p-6 sm:p-10 shadow-sm">
<form className="space-y-6">
<div>
<label className="block text-sm font-normal text-stone-900 mb-2" htmlFor="name">Jméno a příjmení</label>
<input className="w-full px-5 py-3.5 bg-stone-50 border border-stone-200 rounded-xl text-base font-light text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-800 focus:border-emerald-800 transition-all placeholder:text-stone-400" id="name" name="name" placeholder="Jan Novák" required="" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-normal text-stone-900 mb-2" htmlFor="phone">Telefon</label>
<input className="w-full px-5 py-3.5 bg-stone-50 border border-stone-200 rounded-xl text-base font-light text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-800 focus:border-emerald-800 transition-all placeholder:text-stone-400" id="phone" name="phone" placeholder="+420 123 456 789" required="" type="tel"/>
</div>
<div>
<label className="block text-sm font-normal text-stone-900 mb-2" htmlFor="email">E-mail</label>
<input className="w-full px-5 py-3.5 bg-stone-50 border border-stone-200 rounded-xl text-base font-light text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-800 focus:border-emerald-800 transition-all placeholder:text-stone-400" id="email" name="email" placeholder="jan@email.cz" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-normal text-stone-900 mb-2" htmlFor="message">S čím potřebujete pomoci?</label>
<textarea className="w-full px-5 py-3.5 bg-stone-50 border border-stone-200 rounded-xl text-base font-light text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-800 focus:border-emerald-800 transition-all placeholder:text-stone-400 resize-none" id="message" name="message" placeholder="Krátce popište vaši představu nebo aktuální stav zahrady..." rows="4"></textarea>
</div>
<button className="w-full py-4 px-6 bg-emerald-800 hover:bg-emerald-900 text-white text-base font-light tracking-tight rounded-xl transition-all duration-300 flex justify-center items-center gap-2.5 group mt-4 shadow-sm" type="button">
                                    Zjistit možnosti a cenu (Zdarma)
                                    <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" height="18" icon="solar:plain-linear" width="18"></iconify-icon>
</button>
<div className="flex items-center justify-center gap-2 mt-5 text-sm font-light text-stone-500 text-center">
<iconify-icon className="text-emerald-600" height="16" icon="solar:shield-check-linear" width="16"></iconify-icon>
<span>Žádný spam. Jen rychlá a férová domluva do 24 hodin.</span>
</div>
</form>
</div>
</div>
</div>

<div className="w-full h-64 sm:h-80 lg:h-96 bg-stone-100 rounded-[1.5rem] lg:rounded-3xl overflow-hidden border border-stone-200 mt-12 lg:mt-16 relative reveal">
<iframe allowfullscreen="" className="absolute inset-0" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d327820.7628889391!2d14.180234190209482!3d50.05966964263628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2sPrague!5e0!3m2!1sen!2scz!4v1700000000000!5m2!1sen!2scz" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</section>

<footer className="py-12 border-t border-stone-200 bg-stone-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center gap-4 reveal">
<div className="flex items-center gap-2 text-emerald-800">
<iconify-icon height="22" icon="solar:leaf-linear" width="22"></iconify-icon>
<span className="text-xl font-light tracking-tight">Zelený klenot</span>
</div>
<p className="text-base font-light text-stone-500 text-center">
                    Copyright © 2026 Zelený klenot - Zahradnické práce.<br className="md:hidden"/> Vytvořeno s láskou k přírodě.
                </p>
</div>
</footer>
</div> 

<div className="fixed inset-0 z-[100] hidden opacity-0 transition-opacity duration-300 items-center justify-center p-4 md:p-10" id="lightbox" onclick="closeLightbox()">

<div className="absolute inset-0 bg-stone-950/90 backdrop-blur-sm pointer-events-none transition-opacity duration-500"></div>

<button className="absolute left-4 md:left-10 z-10 text-white/50 hover:text-white transition-colors p-3 flex items-center justify-center bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-md" onclick="prevImage(event)">
<iconify-icon height="28" icon="solar:arrow-left-linear" width="28"></iconify-icon>
</button>

<button className="absolute right-4 md:right-10 z-10 text-white/50 hover:text-white transition-colors p-3 flex items-center justify-center bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-md" onclick="nextImage(event)">
<iconify-icon height="28" icon="solar:arrow-right-linear" width="28"></iconify-icon>
</button>

<button className="absolute top-6 right-6 md:top-10 md:right-10 z-10 text-white/50 hover:text-white transition-colors p-3 flex items-center justify-center bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-md" onclick="closeLightbox()">
<iconify-icon height="28" icon="solar:close-circle-linear" width="28"></iconify-icon>
</button>
<img alt="Zvětšený obrázek" className="relative z-10 max-w-full max-h-[85vh] object-contain drop-shadow-2xl rounded-lg" id="lightbox-img" onclick="event.stopPropagation()" src=""/>
</div>



    </>
  );
}
