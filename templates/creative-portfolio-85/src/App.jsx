import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const dock = document.getElementById('bottom-dock');
        const heroSection = document.querySelector('header');
        let dockVisible = false;

        function handleDockVisibility() {
            if(!heroSection) return;
            const heroBottom = heroSection.getBoundingClientRect().bottom;
            const scrollThreshold = window.innerHeight * 0.6;
            const shouldShow = heroBottom < scrollThreshold;

            if (shouldShow && !dockVisible) {
                dock.classList.remove('dock-hidden');
                dock.classList.add('dock-visible');
                dockVisible = true;
            } else if (!shouldShow && dockVisible) {
                dock.classList.remove('dock-visible');
                dock.classList.add('dock-hidden');
                dockVisible = false;
            }
        }
        window.addEventListener('scroll', handleDockVisibility, { passive: true });
        setTimeout(handleDockVisibility, 500);

        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-enter-active');
                }
            });
        }, { threshold: 0.1 });

        function showPortfolioDetail(event, el) {
            // Prevent standard navigation to ensure SPA transition takes over
            event.preventDefault();
            
            const title = el.querySelector('[data-cms-bind="Title"]').innerText;
            const category = el.querySelector('[data-cms-bind="Category"]').innerText;
            const coverSrc = el.querySelector('[data-cms-bind="Cover"]').src;
            
            const galleryEl = el.querySelector('[data-cms-bind="Gallery"]');
            // Extract up to 8 images, falling back to cover image if not enough provided
            const galleryImages = galleryEl && galleryEl.dataset.images ? galleryEl.dataset.images.split(',') : [coverSrc, coverSrc, coverSrc, coverSrc, coverSrc, coverSrc, coverSrc, coverSrc];

            document.getElementById('tpl-title').innerText = title;
            document.getElementById('tpl-category').innerText = category;
            document.getElementById('tpl-cover').src = coverSrc;
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="transition-opacity duration-500" id="main-content">

<header className="min-h-screen flex flex-col overflow-hidden z-10 w-full relative justify-between">
<img alt="Hero Background" className="absolute inset-0 w-full h-full object-cover -z-20 anim-hero-bg" src="https://res.cloudinary.com/dhhkjblr4/image/upload/v1772660497/Moje_Luha_medium_enbmks.jpg?w=800&amp;q=80"/>
<div className="-z-10 bg-gradient-to-b from-white/90 via-transparent to-[#121212] absolute top-0 right-0 bottom-0 left-0">
</div>

<nav className="z-50 anim-nav flex w-full py-6 md:py-8 lg:py-10 px-6 relative items-center">

<div className="flex-1 flex z-10 items-center justify-start">
<div className="hidden lg:flex items-center gap-8">
<a className="flex items-center gap-1.5 text-sm font-medium text-[#121212] hover:opacity-70 transition-opacity" href="#">Home</a>
<a className="flex items-center gap-1.5 text-sm font-medium text-[#121212] hover:opacity-70 transition-opacity" href="#about">O mně</a>
<a className="flex items-center gap-1.5 hover:opacity-70 transition-opacity text-sm font-medium text-[#121212]" href="#services">Služby</a>
<a className="flex items-center gap-1.5 hover:opacity-70 transition-opacity text-sm font-medium text-[#121212]" href="#work">Portfolio</a>
</div>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex justify-center">
<a className="group flex items-center flex-shrink-0 transition-transform duration-300 hover:scale-105" href="#">
<img alt="Brand Logo" className="md:h-[48px] lg:h-[72px] w-auto h-[36px] object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b51597c3-9a26-49a5-8e34-a668a71c1f5f_1600w.png"/>
</a>
</div>

<div className="flex-1 flex items-center justify-end z-10">
<a className="flex items-center gap-3 hover:border-[#121212]/40 transition-all text-sm font-medium text-[#121212] bg-white/10 border-[#121212]/20 border rounded-full pt-1.5 pr-5 pb-1.5 pl-1.5 backdrop-blur-sm" href="#contact">
<span className="flex items-center justify-center w-7 h-7 bg-[#121212] text-white rounded-full">
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</span>
          Probrat váš projekt
        </a>
</div>
</nav>

<div className="md:pb-32 anim-hero-text z-20 text-center w-full pr-6 pb-20 pl-6 relative">
<h1 className="md:text-8xl lg:text-[7rem] leading-[1.05] text-6xl font-semibold text-white tracking-tight drop-shadow-lg">
        Namíchám vám<br/>grafiku na míru</h1>
<p className="leading-relaxed md:mt-8 md:text-xl text-lg font-normal text-white/90 max-w-3xl mt-6 mr-auto ml-auto drop-shadow-md">
  Pomáhám značkám vytvořit a převést vizuální styl do praxe — od identity přes tiskoviny až po online vizuály.</p>
</div>
</header>

<div className="fixed bottom-6 left-0 w-full px-4 md:px-8 z-50 flex justify-center dock-transition pointer-events-none opacity-0" id="bottom-dock">
</div>

<section className="md:px-12 bg-[#121212] max-w-[1400px] mt-0 mr-auto ml-auto pt-24 pr-6 pb-32 pl-6" id="services">
<div className="flex flex-col md:flex-row mb-20 gap-x-6 gap-y-6 items-end justify-between">
<div className="">
<span className="uppercase block text-base font-medium text-[#BE185D] tracking-widest mb-3">Služby</span>
<h2 className="md:text-6xl text-5xl font-semibold text-white tracking-tight" style={{lineHeight: '1.2 !important'}}>
          Co pro vaši značku<br/>
  navrhnu a zrealizuji
        </h2>
<p className="leading-relaxed text-xl text-neutral-400 max-w-2xl">Navrhuji a převádím vizuální styl do
          konkrétních výstupů pro tisk, online i produktovou komunikaci.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="group relative h-[540px] w-full overflow-hidden rounded-[2rem] bg-[#181818] border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50">
<div className="absolute inset-0 bg-[#181818]">
<img alt="Firemní identita" className="w-full h-full object-cover opacity-20 grayscale transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105" src="https://res.cloudinary.com/dhhkjblr4/image/upload/v1772660612/FI_szsajk.jpg?w=800&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-[#181818]/60 to-transparent transition-all duration-500 group-hover:via-transparent group-hover:to-black/10">
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="flex flex-col z-20 pt-10 pr-10 pb-10 pl-10 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-center pt-10">
<div className="flex transition-all duration-500 group-hover:bg-[#BE185D] group-hover:border-[#BE185D] group-hover:text-white text-[#BE185D] bg-white/5 w-16 h-16 border-white/10 border rounded-2xl backdrop-blur-sm items-center justify-center">
<iconify-icon className="" height="32" icon="solar:layers-linear" width="32"></iconify-icon>
</div>
</div>
<div className="transform transition-transform duration-500 group-hover:translate-y-0">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">Brand identita</h3>
<p className="leading-relaxed group-hover:text-white group-hover:opacity-100 transition-colors text-base font-normal text-neutral-400 opacity-90">
              Navrhuji vizuální identitu značky od loga přes barvy a typografii až po celkový styl komunikace.
              Vytvářím značky, které působí profesionálně, jednotně a zapamatovatelně.</p>
</div>
</div>
</div>
<div className="group relative h-[540px] w-full overflow-hidden rounded-[2rem] bg-[#181818] border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50">
<div className="absolute inset-0 bg-[#181818]">
<img alt="Logo design" className="w-full h-full object-cover opacity-20 grayscale transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105" src="https://res.cloudinary.com/dhhkjblr4/image/upload/v1772663208/6781985afb6ea1e484bac332_Coffee_adviser_y7cs0s.jpg?w=800&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-[#181818]/60 to-transparent transition-all duration-500 group-hover:via-transparent group-hover:to-black/10">
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="flex flex-col z-20 pt-10 pr-10 pb-10 pl-10 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-center pt-10">
<div className="flex transition-all duration-500 group-hover:bg-[#BE185D] group-hover:border-[#BE185D] group-hover:text-white text-[#BE185D] bg-white/5 w-16 h-16 border-white/10 border rounded-2xl backdrop-blur-sm items-center justify-center">
<iconify-icon className="" height="32" icon="solar:ruler-pen-linear" width="32"></iconify-icon>
</div>
</div>
<div className="transform transition-transform duration-500 group-hover:translate-y-0">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">Tiskoviny a sazba</h3>
<p className="leading-relaxed group-hover:text-white group-hover:opacity-100 transition-colors text-base font-normal text-neutral-400 opacity-90">
              Navrhuji tiskoviny od vizitek a letáků až po katalogy, brožury a publikace. Důraz kladu na
              typografii, přehlednost a kvalitní výstup.</p>
</div>
</div>
</div>
<div className="group relative h-[540px] w-full overflow-hidden rounded-[2rem] bg-[#181818] border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50">
<div className="absolute inset-0 bg-[#181818]">
<img alt="Tiskoviny" className="w-full h-full object-cover opacity-20 grayscale transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105" src="https://res.cloudinary.com/dhhkjblr4/image/upload/v1775763749/donvita_yf2lsw.jpg?w=800&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-[#181818]/60 to-transparent transition-all duration-500 group-hover:via-transparent group-hover:to-black/10">
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="absolute inset-0 flex flex-col justify-between p-10 z-20">
<div className="flex justify-center pt-10">
<div className="flex transition-all duration-500 group-hover:bg-[#BE185D] group-hover:border-[#BE185D] group-hover:text-white text-[#BE185D] bg-white/5 w-16 h-16 border-white/10 border rounded-2xl backdrop-blur-sm items-center justify-center">
<iconify-icon height="32" icon="solar:file-text-linear" width="32"></iconify-icon>
</div>
</div>
<div className="transform transition-transform duration-500 group-hover:translate-y-0">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">Obalový design</h3>
<p className="leading-relaxed group-hover:text-white group-hover:opacity-100 transition-colors text-base font-normal text-neutral-400 opacity-90">
              Vytvářím obaly a produktové materiály, které pomáhají značce zaujmout a odlišit se. Spojuji
              vizuální nápad s funkčností a reálným použitím.</p>
</div>
</div>
</div>
<div className="group relative h-[540px] w-full overflow-hidden rounded-[2rem] bg-[#181818] border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50">
<div className="absolute inset-0 bg-[#181818]">
<img alt="PPC Bannery" className="w-full h-full object-cover opacity-20 grayscale transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105" src="https://res.cloudinary.com/dhhkjblr4/image/upload/v1775763749/bannery_d1rkqb.jpg?w=800&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-[#181818]/60 to-transparent transition-all duration-500 group-hover:via-transparent group-hover:to-black/10">
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="flex flex-col z-20 pt-10 pr-10 pb-10 pl-10 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex pt-10 justify-center">
<div className="flex transition-all duration-500 group-hover:bg-[#BE185D] group-hover:border-[#BE185D] group-hover:text-white text-[#BE185D] bg-white/5 w-16 h-16 border-white/10 border rounded-2xl backdrop-blur-sm items-center justify-center">
<svg className="lucide lucide-mouse-pointer-click" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.1 12 6"></path><path d="m5.1 8-2.9-1.2"></path><path d="m21.3 11.2-2.7-1.5"></path><path d="M12 12 8.3 22.3l-2.7-5.5L1 14.1l11-3.7z"></path><path d="m15 15 7 7"></path></svg>
</div>
</div>
<div className="transform transition-transform duration-500 group-hover:translate-y-0">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">Online bannery a kampaně</h3>
<p className="leading-relaxed group-hover:text-white group-hover:opacity-100 transition-colors text-base font-normal text-neutral-400 opacity-90">
              Tvořím reklamní bannery pro online kampaně, PPC i sociální sítě. Vizuály navrhuji tak, aby
              zaujaly a zapadly do komunikace značky.</p>
</div>
</div>
</div>
<div className="group relative h-[540px] w-full overflow-hidden rounded-[2rem] bg-[#181818] border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50">
<div className="absolute inset-0 bg-[#181818]">
<img alt="Fotoprodukce" className="w-full h-full object-cover opacity-20 grayscale transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105" src="https://res.cloudinary.com/dhhkjblr4/image/upload/v1772660627/Fotoprodukce_ghzu8h.jpg?w=800&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-[#181818]/60 to-transparent transition-all duration-500 group-hover:via-transparent group-hover:to-black/10">
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="absolute inset-0 flex flex-col justify-between p-10 z-20">
<div className="flex justify-center pt-10">
<div className="flex transition-all duration-500 group-hover:bg-[#BE185D] group-hover:border-[#BE185D] group-hover:text-white text-[#BE185D] bg-white/5 w-16 h-16 border-white/10 border rounded-2xl backdrop-blur-sm items-center justify-center">
<iconify-icon className="" height="32" icon="solar:camera-linear" width="32"></iconify-icon>
</div>
</div>
<div className="transform transition-transform duration-500 group-hover:translate-y-0">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">Produktová a lifestyle fotografie
            </h3>
<p className="leading-relaxed group-hover:text-white group-hover:opacity-100 transition-colors text-base font-normal text-neutral-400 opacity-90">
              Fotím produkty tak, aby vynikla jejich kvalita, detail i atmosféra značky. Výsledné fotografie
              jsou vhodné pro e-shopy, kampaně i sociální sítě.</p>
</div>
</div>
</div>
<div className="group relative h-[540px] w-full overflow-hidden rounded-[2rem] bg-[#181818] border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50">
<div className="absolute inset-0 bg-[#181818]">
<img alt="AI Art" className="w-full h-full object-cover opacity-20 grayscale transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105" src="https://res.cloudinary.com/dhhkjblr4/image/upload/v1772661536/freepik__a-highly-technical-photo-of-a-combat-helicopter-in__89098_a9snic.jpg?w=800&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-[#181818]/60 to-transparent transition-all duration-500 group-hover:via-transparent group-hover:to-black/10">
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="absolute inset-0 flex flex-col justify-between p-10 z-20">
<div className="flex justify-center pt-10">
<div className="flex transition-all duration-500 group-hover:bg-[#BE185D] group-hover:border-[#BE185D] group-hover:text-white text-[#BE185D] bg-white/5 w-16 h-16 border-white/10 border rounded-2xl backdrop-blur-sm items-center justify-center">
<iconify-icon height="32" icon="solar:stars-minimalistic-linear" width="32"></iconify-icon>
</div>
</div>
<div className="transform transition-transform duration-500 group-hover:translate-y-0">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">Kreativní vizuály / AI vizuály
            </h3>
<p className="leading-relaxed group-hover:text-white group-hover:opacity-100 transition-colors text-base font-normal text-neutral-400 opacity-90">
              Navrhuji vizuály pro kampaně, produkty a online komunikaci značky. Od výrazné grafiky po
              originální koncepty a AI generované obrazy, které podporují styl značky i její sdělení.</p>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 bg-[#121212] z-30 border-white/5 rounded-t-[3rem] border-t pt-32 pr-6 pb-32 pl-6 relative" id="work">
<div className="max-w-[1400px] mr-auto ml-auto">
<div className="flex flex-col md:flex-row md:items-end mb-20 gap-x-8 gap-y-8 justify-between">
<div className="max-w-2xl">
<span className="inline-flex items-center gap-2 uppercase text-xs font-medium text-[#BE185D] tracking-widest bg-white/5 border-white/10 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#BE185D]"></span>
        VYBRANÉ PROJEKTY
      </span>
<h2 className="md:text-6xl text-5xl font-semibold text-white tracking-tight" style={{lineHeight: '1.2 !important'}}>
        Ukázky práce, kde<br/>
        vizuál funguje v praxi.
      </h2>
</div>
<div className="hidden md:block">
<a className="group flex items-center gap-3 text-neutral-400 hover:text-white transition-colors" href="#">
<span className="uppercase text-sm font-medium tracking-wider">Všechny projekty</span>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
<iconify-icon className="transform group-hover:rotate-45 transition-transform duration-300" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-6 gap-y-6">

<a className="group block relative w-full aspect-[5/4] md:aspect-[4/3] rounded-[2rem] overflow-hidden bg-neutral-900 cursor-pointer border border-white/5" href="/mojeluha">
<img alt="MojeLuha" className="transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:opacity-100 opacity-80 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://res.cloudinary.com/dhhkjblr4/image/upload/v1772660497/Moje_Luha_medium_enbmks.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white/90 text-xs font-medium border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
<iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
<span>Zobrazit detail</span>
</div>
<div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-auto md:min-w-[320px] p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-20 pointer-events-none">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-semibold text-[#BE185D] uppercase tracking-wider">Brand identita</span>
<iconify-icon className="text-white opacity-50" icon="solar:maximize-linear" width="16"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight">MojeLuha</h3>
</div>
<div className="absolute bottom-8 left-8 md:hidden z-20 pointer-events-none">
<h3 className="text-2xl font-semibold text-white tracking-tight">MojeLuha</h3>
<p className="text-sm text-neutral-300">Brand identita</p>
</div>
</a>

<a className="group block relative w-full aspect-[5/4] md:aspect-[4/3] rounded-[2rem] overflow-hidden bg-neutral-900 cursor-pointer border border-white/5" href="/bennon">
<img alt="Bennon" className="transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:opacity-100 opacity-80 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://res.cloudinary.com/dhhkjblr4/image/upload/v1775313521/anticut_e9h47q.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white/90 text-xs font-medium border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
<iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
<span>Zobrazit detail</span>
</div>
<div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-auto md:min-w-[320px] p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] delay-75 z-20 pointer-events-none">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-semibold text-[#BE185D] uppercase tracking-wider">Vizuální komunikace</span>
<iconify-icon className="text-white opacity-50" icon="solar:maximize-linear" width="16"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight">Bennon</h3>
</div>
<div className="absolute bottom-8 left-8 md:hidden z-20 pointer-events-none">
<h3 className="text-2xl font-semibold text-white tracking-tight">Bennon</h3>
<p className="text-sm text-neutral-300">Vizuální komunikace</p>
</div>
</a>

<a className="hidden group block relative w-full aspect-[5/4] md:aspect-[4/3] rounded-[2rem] overflow-hidden bg-neutral-900 cursor-pointer border border-white/5" href="#">
<img alt="Hidden Project 3" className="transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:opacity-100 opacity-80 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=1600&amp;q=80"/>
</a>

<a className="hidden group block relative w-full aspect-[5/4] md:aspect-[4/3] rounded-[2rem] overflow-hidden bg-neutral-900 cursor-pointer border border-white/5" href="#">
<img alt="Hidden Project 4" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=1600&amp;q=80"/>
</a>
</div>
<div className="mt-20 flex justify-center md:hidden">
<button className="border border-neutral-700 text-neutral-300 hover:text-[#121212] hover:bg-white hover:border-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300">
      Zobrazit všechny projekty
    </button>
</div>
</div>
</section>

<section className="md:px-12 bg-[#121212] max-w-7xl border-white/5 border-t mr-auto ml-auto pt-32 pr-6 pb-32 pl-6" id="about">
<div className="flex flex-col lg:flex-row gap-20 gap-x-20 gap-y-20 items-center">
<div className="lg:w-1/2 w-full relative">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative z-10">
<img alt="Portrét" className="hover:grayscale-0 transition-all duration-700 w-full h-full object-cover grayscale" src="https://res.cloudinary.com/dhhkjblr4/image/upload/v1776199750/portret_4_lkhaqe.png?w=800&amp;q=80"/>
</div>
<div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#BE185D]/10 rounded-full blur-3xl -z-10"></div>
</div>
<div className="lg:w-1/2">
<h2 className="md:text-5xl text-4xl font-semibold text-white tracking-tight mb-8" style={{lineHeight: '1.2 !important'}}>
  Nejsem jen grafik. Pomáhám značkám působit profesionálně.
</h2>
<div className="space-y-6 text-xl text-neutral-400 leading-relaxed font-light">
<p className="">Jmenuji se Martin Zdráhal a stojím za projektem MartiniDesign.</p>
<p className="">Věnuji se grafickému designu, vizuální identitě značek<br/> a produktové fotografii. Nejvíce mě baví navrhovat vizuální styl, který značce dává řád, zvyšuje její důvěryhodnost<br/> a funguje v praxi napříč tiskem i online prostředím.</p>
<p className="">Ve své práci propojuji zkušenosti z grafiky, typografie, sazby, tiskovin a focení. MartiniDesign
            je moje osobní studio, kde spojuji kreativitu, detail a cit pro vizuální komunikaci.</p>
<p className="">Pokud hledáte partnera pro vizuální stránku své značky, rád si poslechnu víc o vašem projektu.</p>
</div>
<ul className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-10">
<li className="flex items-start gap-4">
<span className="text-2xl md:text-4xl font-semibold text-[#BE185D] tracking-tight mt-1 md:mt-0">•</span>
<span className="text-2xl md:text-4xl font-semibold text-[#BE185D] tracking-tight leading-snug">zkušenosti z agenturního<br/> i firemního prostředí</span>
</li>
<li className="flex items-start gap-4">
<span className="text-2xl md:text-4xl font-semibold text-[#BE185D] tracking-tight mt-1 md:mt-0">•</span>
<span className="md:text-4xl leading-snug text-2xl font-semibold text-[#BE185D] tracking-tight">přesah do tisku, online<br/> i fotografie</span>
</li>
<li className="flex items-start gap-4">
<span className="text-2xl md:text-4xl font-semibold text-[#BE185D] tracking-tight mt-1 md:mt-0">•</span>
<span className="text-2xl md:text-4xl font-semibold text-[#BE185D] tracking-tight leading-snug">spolupráce na reálných značkách</span>
</li>
</ul>
</div>
</div>
</section>

<div className="w-full pt-15 pr-6 pb-15 pl-6">
<div className="text-center">
<h2 className="md:text-5xl text-4xl font-semibold text-white tracking-tight mb-12" style={{lineHeight: '1.2 !important'}}>
      Značky, pro které jsem tvořil
    </h2>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 mt-10 mb-10 gap-x-6 gap-y-6 items-center justify-items-center">
<a className="inline-flex items-center justify-center h-[100px] w-[150px] bg-center mix-blend-screen bg-cover rounded bg-[url(https://res.cloudinary.com/dhhkjblr4/image/upload/v1776194944/dialect_cubmkm.png?w=800&amp;q=80)]" href="#"></a><a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[210px] h-[100px] bg-[url(https://res.cloudinary.com/dhhkjblr4/image/upload/v1776180472/ola_wpayzn.png?w=800&amp;q=80)] bg-cover rounded" href="#"></a><a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[230px] h-[100px] bg-[url(https://res.cloudinary.com/dhhkjblr4/image/upload/v1776180342/white_benon_yucoo4.png?w=800&amp;q=80)] bg-cover rounded" href="#"></a><a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[190px] h-[120px] bg-[url(https://res.cloudinary.com/dhhkjblr4/image/upload/v1776180400/ML_logo_vyska_bila_x3uonm.png?w=800&amp;q=80)] bg-cover rounded" href="#"></a><a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[100px] bg-cover rounded bg-[url(https://res.cloudinary.com/dhhkjblr4/image/upload/v1776194351/donvita_bah6iu.png?w=800&amp;q=80)]" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[330px] h-[100px] bg-[url(https://res.cloudinary.com/dhhkjblr4/image/upload/v1776200426/domia_n9r6qo.png?w=800&amp;q=80)] bg-cover rounded" href="#"></a>
</div>
</div>

<footer className="md:px-12 text-neutral-200 bg-[#121212] border-white/5 border-t pt-32 pr-6 pb-12 pl-6" id="contact">
<div className="text-center max-w-4xl mr-auto ml-auto">
<h2 className="md:text-7xl text-5xl font-semibold text-white tracking-tight mb-8">Máte projekt?</h2>
<p className="md:text-2xl leading-relaxed text-xl font-light text-neutral-400 max-w-2xl mr-auto mb-14 ml-auto">Napište
    mi a probereme, jak může vaše značka působit profesionálněji v praxi. Osobně u kávy nebo online.</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-24">
<a className="md:w-auto hover:bg-[#9D174D] transition-all shadow-[#BE185D]/20 hover:-translate-y-1 text-lg font-semibold text-white bg-[#BE185D] w-full rounded-2xl pt-5 pr-10 pb-5 pl-10 shadow-lg" href="mailto:martinzdr36@gmail.com">martinzdr36@gmail.com</a>
<a className="md:w-auto hover:bg-neutral-800 transition-all text-lg font-semibold text-white bg-[#1A1A1A] w-full border-neutral-800 border rounded-2xl pt-5 pr-10 pb-5 pl-10" href="tel:+420737190132">+420
      737 190 132</a>
</div>
<div className="flex flex-col md:flex-row text-sm font-medium text-neutral-500 border-neutral-800/50 border-t pt-12 items-center justify-between">
<p>© 2024 Moje Studio. Všechna práva vyhrazena.</p>
<div className="flex justify-center gap-6 my-6 md:my-0">
<a className="hover:text-neutral-300 transition-colors" href="https://www.instagram.com/martinidesign.cz/"><svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="solar" data-solar="camera-linear" height="20" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeWidth="1.5">
<circle className="" cx="12" cy="13" r="3"></circle>
<path className="" d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z"></path>
<path className="" d="M19 10h-1" strokeLinecap="round"></path>
</g>
</svg></a>
<a className="hover:text-neutral-300 transition-colors" href="www.linkedin.com/in/martin-zdráhal-013a41100"><iconify-icon className="" height="20" icon="solar:link-linear" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon></a>
<a className="hover:text-neutral-300 transition-colors" href="#"></a>
</div>
<div className="flex gap-6">
<a className="hover:text-neutral-300 transition-colors" href="#">Ochrana soukromí</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Podmínky</a>
</div>
</div>
</div>
</footer>
</div>

<div className="hidden absolute inset-0 z-[100] min-h-screen bg-[#121212] w-full text-neutral-200 transition-opacity duration-500 pb-0" id="cms-detail-template">

<div className="fixed top-6 left-6 md:top-10 md:left-10 z-[110] pointer-events-none">
<button className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-[#1A1A1A]/80 hover:bg-white text-white hover:text-black border border-white/10 backdrop-blur-md transition-all duration-300 shadow-2xl group" onclick="hidePortfolioDetail()">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
</div>

<div className="max-w-[1400px] mx-auto px-6 pt-24 md:pt-32 pb-12 md:pb-16 tpl-reveal">
<div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-[#181818] border border-white/5 relative">
<img alt="Project Cover" className="w-full h-full object-cover" data-cms-bind="Cover" id="tpl-cover" src=""/>
</div>
</div>

<div className="max-w-[1400px] mx-auto px-6 pb-24 md:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 tpl-reveal">
<div className="lg:col-span-7 flex flex-col justify-start">
<span className="text-xs font-semibold text-[#BE185D] uppercase tracking-widest mb-6" data-cms-bind="Category" id="tpl-category"></span>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.05] mb-8" data-cms-bind="Title" id="tpl-title"></h1>
<p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed max-w-2xl">
                A comprehensive visual identity and design system crafted to reflect the brand's premium positioning. The project encompasses brand strategy, print collateral, packaging, and digital application.
            </p>
</div>
<div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6 pt-2">
<div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-center backdrop-blur-sm">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-3">Client</span>
<span className="text-base md:text-lg font-medium text-white">Lumiere Studio</span>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-center backdrop-blur-sm">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-3">Services</span>
<span className="text-base md:text-lg font-medium text-white">Art Direction</span>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-center backdrop-blur-sm">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-3">Year</span>
<span className="text-base md:text-lg font-medium text-white">2024</span>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-center backdrop-blur-sm">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-3">Outputs</span>
<span className="text-base md:text-lg font-medium text-white">Print &amp; Identity</span>
</div>
</div>
</div>

<div className="max-w-[1400px] mx-auto px-6 pb-24 md:pb-40 space-y-20 md:space-y-32 tpl-reveal">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
<div className="md:col-span-4 lg:col-span-3">
<h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Brief</h3>
</div>
<div className="md:col-span-8 lg:col-span-7">
<p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
                    The client required a complete visual overhaul to align their aesthetic with the high-end nature of their products. The previous branding lacked cohesion and failed to stand out in a saturated market. The goal was to establish a sophisticated, timeless identity that communicates trust, quality, and craftsmanship.
                </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
<div className="md:col-span-4 lg:col-span-3">
<h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Solution</h3>
</div>
<div className="md:col-span-8 lg:col-span-7">
<p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
                    We designed a minimalist yet robust visual system centered around custom typography and a refined color palette. The logotype was crafted for perfect legibility across both large-scale print and small-scale digital applications. The design language was intentionally kept pure and uncluttered to let the product photography take center stage.
                </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
<div className="md:col-span-4 lg:col-span-3">
<h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Outcome</h3>
</div>
<div className="md:col-span-8 lg:col-span-7">
<p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
                    The resulting identity elevates the brand's perception, providing a consistent and highly professional look across all touchpoints. From premium tactile packaging to a seamless digital presence, the new visual foundation has positioned the client perfectly for their target demographic.
                </p>
</div>
</div>
</div>

<div className="max-w-[1400px] mx-auto px-6 pb-24 md:pb-32 tpl-reveal">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6" data-cms-bind="Gallery">

<div className="md:col-span-12 aspect-[16/9] md:aspect-[21/9] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#181818] border border-white/5 group relative">
<img alt="Brand Identity Detail" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02] opacity-90 group-hover:opacity-100" id="tpl-gal-1" src=""/>
</div>

<div className="md:col-span-12 lg:col-span-6 aspect-[4/5] md:aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#181818] border border-white/5 group relative">
<img alt="Print Materials" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100" id="tpl-gal-2" src=""/>
</div>
<div className="md:col-span-12 lg:col-span-6 aspect-[4/5] md:aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#181818] border border-white/5 group relative">
<img alt="Typography Detail" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100" id="tpl-gal-3" src=""/>
</div>

<div className="md:col-span-12 aspect-[16/9] md:aspect-[21/9] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#181818] border border-white/5 group relative">
<img alt="Packaging Presentation" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02] opacity-90 group-hover:opacity-100" id="tpl-gal-4" src=""/>
</div>

<div className="md:col-span-12 lg:col-span-7 aspect-[4/5] md:aspect-[4/3] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#181818] border border-white/5 group relative">
<img alt="Stationery Setup" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100" id="tpl-gal-5" src=""/>
</div>
<div className="md:col-span-12 lg:col-span-5 aspect-[4/5] md:aspect-[4/3] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#181818] border border-white/5 group relative">
<img alt="Color Palette" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100" id="tpl-gal-6" src=""/>
</div>

<div className="md:col-span-12 lg:col-span-5 aspect-[4/5] md:aspect-[4/3] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#181818] border border-white/5 group relative">
<img alt="Logo Details" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100" id="tpl-gal-7" src=""/>
</div>
<div className="md:col-span-12 lg:col-span-7 aspect-[4/5] md:aspect-[4/3] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#181818] border border-white/5 group relative">
<img alt="Digital Application" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100" id="tpl-gal-8" src=""/>
</div>
</div>
</div>

<div className="max-w-[1400px] mx-auto px-6 pb-32 md:pb-48 tpl-reveal">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-white/5 pt-16 md:pt-20 items-start">
<div className="md:col-span-4 lg:col-span-3">
<h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Deliverables</h3>
</div>
<div className="md:col-span-8 lg:col-span-9">
<ul className="flex flex-wrap gap-3 md:gap-4">
<li className="px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-white/10 text-neutral-300 text-sm tracking-wide bg-white/[0.02] backdrop-blur-sm">Logo / Identity</li>
<li className="px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-white/10 text-neutral-300 text-sm tracking-wide bg-white/[0.02] backdrop-blur-sm">Print Materials</li>
<li className="px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-white/10 text-neutral-300 text-sm tracking-wide bg-white/[0.02] backdrop-blur-sm">Banners &amp; Digital Assets</li>
</ul>
</div>
</div>
</div>

<div className="border-t border-white/5 bg-[#0A0A0A]">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
<div className="py-16 md:py-24 px-6 md:px-16 flex flex-col justify-center cursor-pointer hover:bg-white/[0.02] transition-colors group" onclick="hidePortfolioDetail()">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-4 flex items-center gap-3">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear" width="16"></iconify-icon>
                    Back to Portfolio
                </span>
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight">View All Projects</h3>
</div>
<div className="py-16 md:py-24 px-6 md:px-16 flex flex-col justify-center md:items-end md:text-right cursor-pointer hover:bg-white/[0.02] transition-colors group" onclick="hidePortfolioDetail()">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-4 flex items-center justify-end gap-3">
                    Next Project
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Next Case Study</h3>
</div>
</div>
</div>
</div>



    </>
  );
}
