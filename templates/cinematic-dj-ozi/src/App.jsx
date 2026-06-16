import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const fadeElements = document.querySelectorAll('.fade-up');
            fadeElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="grain-overlay"></div>

<nav className="fixed z-50 flex pr-4 pl-4 top-6 right-0 left-0 justify-center">
<div className="flex gap-12 shadow-black/50 transition-all duration-300 hover:border-white/20 bg-black/70 border-white/10 border rounded-full pt-4 pr-6 pb-4 pl-6 shadow-2xl backdrop-blur-xl gap-x-12 gap-y-12 items-center justify-between">
<a className="uppercase flex items-center gap-1 text-lg font-bold text-white tracking-tighter" href="#">DJ.OZI</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-neutral-400">
<a className="hover:text-white transition-colors" href="#vision">O Mnie</a>
<a className="hover:text-white transition-colors" href="#portfolio">Usługi</a>
<a className="hover:text-white transition-colors" href="#services">Atrakcje</a>
<a className="hover:text-white transition-colors" href="#galeria">Galeria</a>
</div>
<a className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white text-black hover:bg-neutral-200 transition-transform hover:scale-110" href="#contact">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<button className="md:hidden text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<header className="overflow-hidden flex flex-col w-full h-[110vh] relative items-center justify-center">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<video autoplay="" className="w-full h-full object-cover opacity-50 scale-105" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&amp;w=3450&amp;auto=format&amp;fit=crop">
<source src="https://videos.pexels.com/video-files/5824571/5824571-hd_1920_1080_24fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-black/30"></div>
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 fade-up visible">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
</span>
<span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-300">DJ / Konferansjer</span>
</div>
<h1 className="md:text-8xl lg:text-9xl leading-[0.9] fade-up text-6xl font-semibold text-white tracking-tighter mb-8 visible">Wymarzony dzień<br/> <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">niezapomniana noc</span></h1>
<p className="md:text-xl leading-relaxed fade-up text-lg font-light text-neutral-400 max-w-2xl mr-auto mb-10 ml-auto visible">Ekskluzywna oprawa muzyczna i wizualna wesel. Nowoczesne podejście, brak przaśnych zabaw, tylko czysta klasa i pełen parkiet do samego rana.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-up visible">
<a className="group relative px-8 py-4 bg-white text-black text-sm font-semibold tracking-wide overflow-hidden rounded-sm transition-all hover:pr-10" href="#portfolio">
<span className="z-10 relative">Skontaktuj się</span>
<div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
<svg aria-hidden="true" className="iconify absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 iconify--lucide w-[12px] h-[12px]" data-icon="lucide:play" data-icon-replaced="true" data-icon-set="lucide" data-lucide="arrow-up-right" data-width="12" fill="none" height="12" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '12px', height: '12px'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="group hover:bg-white/5 transition-all text-sm font-medium text-white tracking-wide border-white/10 border rounded-sm pt-4 pr-8 pb-4 pl-8 backdrop-blur-sm" href="#contact">Oferta</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent"></div>
</div>
</header>

<div className="w-full bg-neutral-900/30 border-y border-white/5 py-6 overflow-hidden relative z-20 backdrop-blur-sm">
<div className="flex whitespace-nowrap w-[200%] animate-scroll hover:[animation-play-state:paused]">
<div className="flex items-center gap-12 mx-6">
<span className="text-4xl font-bold uppercase tracking-tighter text-white/10">Cinematography</span>
<span className="text-red-600 text-xl">•</span>
<span className="uppercase [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)] text-4xl font-bold text-white/10 tracking-tighter">Direction
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            </span>
<span className="text-red-600 text-xl">•</span>
<span className="text-4xl font-bold uppercase tracking-tighter text-white/10">Post-Production</span>
<span className="text-red-600 text-xl">•</span>
<span className="text-4xl font-bold uppercase tracking-tighter text-white/10">Color Grading</span>
<span className="text-red-600 text-xl">•</span>
<span className="text-4xl font-bold uppercase tracking-tighter text-white/10">Sound Design</span>
<span className="text-red-600 text-xl">•</span>
</div>
<div className="flex items-center gap-12 mx-6">
<span className="text-4xl font-bold uppercase tracking-tighter text-white/10">Cinematography</span>
<span className="text-red-600 text-xl">•</span>
<span className="text-4xl font-bold uppercase tracking-tighter text-white/10">Direction</span>
<span className="text-red-600 text-xl">•</span>
<span className="text-4xl font-bold uppercase tracking-tighter text-white/10">Post-Production</span>
<span className="text-red-600 text-xl">•</span>
<span className="text-4xl font-bold uppercase tracking-tighter text-white/10">Color Grading</span>
<span className="text-red-600 text-xl">•</span>
<span className="text-4xl font-bold uppercase tracking-tighter text-white/10">Sound Design</span>
<span className="text-red-600 text-xl">•</span>
</div>
</div>
</div>

<section className="pt-32 pb-32 relative" id="vision">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-x-16 gap-y-16 items-start">
<div className="lg:col-span-5 fade-up sticky top-32 visible">
<span className="uppercase block text-xs text-red-500 tracking-widest font-mono mb-4">01 / O mnie</span>
<h2 className="md:text-5xl leading-[1.1] text-4xl font-semibold text-white tracking-tighter mb-8">Pasja do muzyki<br/><span className="text-neutral-500">i tworzenia niezwykłych wspomnień. </span></h2>
<p className="leading-relaxed font-light text-neutral-400 mb-8">Cześć! Jestem Ozi. Od ponad dekady zajmuję się profesjonalną oprawą muzyczną wydarzeń, z czego lwią część stanowią ekskluzywne wesela. Moim celem nie jest po prostu "odtwarzanie muzyki", ale budowanie emocji i sterowanie energią tłumu.

Wyróżnia mnie nowoczesne podejście. Unikam szablonów i przaśnych zabaw, stawiając na elegancję, świetną selekcję muzyczną (od ponadczasowych hitów po nowości klubowe, zawsze dostosowane do gości) oraz nienaganną prezencję.</p>
<div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
<div className="">
<span className="block text-3xl font-bold text-white mb-1">10+</span>
<span className="uppercase text-xs text-neutral-500 tracking-widest">Lat doświadczenia</span>
</div>
<div className="">
<span className="block text-3xl font-bold text-white mb-1">100</span>
<span className="uppercase text-xs text-neutral-500 tracking-widest">Zrealizowanych wesel</span>
</div>
</div>
</div>
<div className="lg:col-span-7 grid gap-6 fade-up visible">
<div className="relative aspect-video group overflow-hidden rounded-sm border border-white/5">
<video autoplay="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg">
<source src="https://videos.pexels.com/video-files/3205647/3205647-hd_1920_1080_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 transition-opacity duration-300">
</div>
<div className="absolute bottom-6 left-6">
<h3 className="text-xl font-medium text-white tracking-tight">Muzyka i słowo na parkiecie</h3>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div className="relative aspect-[4/5] group overflow-hidden rounded-sm border border-white/5">
<img className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 opacity-80 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?q=80&amp;w=2996&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6">
<h3 className="text-xl font-medium text-white tracking-tight">Partnerzy i narzędzia</h3>
</div>
</div>
<div className="relative aspect-[4/5] group overflow-hidden rounded-sm border border-white/5">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-6 left-6">
<h3 className="text-xl font-medium text-white tracking-tight">Światło i atmosfera</h3>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#080808] border-t border-white/5" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end fade-up mb-16 justify-between">
<div>
<span className="text-red-500 font-mono text-xs uppercase tracking-widest mb-2 block">02 / Usługi</span>
<h2 className="text-4xl font-semibold tracking-tighter text-white">Każdy element gra swoją rolę w całości</h2>
</div>
<div className="flex items-center gap-6 mt-6 md:mt-0">
<button className="text-white text-sm font-medium border-b border-red-500 pb-1">All</button>
<button className="text-neutral-500 text-sm font-medium hover:text-white transition-colors pb-1">Commercial</button>
<button className="text-neutral-500 text-sm font-medium hover:text-white transition-colors pb-1">Music Video</button>
<button className="text-neutral-500 text-sm font-medium hover:text-white transition-colors pb-1">Documentary</button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm border border-white/5 fade-up">
<video autoplay="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg">
<source src="https://videos.pexels.com/video-files/3015511/3015511-hd_1920_1080_24fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-white border border-white/10">2023</span>
<svg aria-hidden="true" className="iconify text-white rotate-45 group-hover:rotate-0 transition-transform duration-500 iconify--lucide" data-icon="lucide:arrow-up-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-red-500 text-xs font-mono uppercase tracking-widest mb-2">Automotive</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Apex Velocity</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm border border-white/5 fade-up">
<video autoplay="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg">
<source src="https://videos.pexels.com/video-files/4057317/4057317-hd_1920_1080_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-white border border-white/10">2024</span>
<svg aria-hidden="true" className="iconify text-white rotate-45 group-hover:rotate-0 transition-transform duration-500 iconify--lucide" data-icon="lucide:arrow-up-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-red-500 text-xs font-mono uppercase tracking-widest mb-2">Music Video</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Neon Nights</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm border border-white/5 fade-up">
<video autoplay="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&amp;w=2874&amp;auto=format&amp;fit=crop">
<source src="https://videos.pexels.com/video-files/3205915/3205915-hd_1920_1080_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-white border border-white/10">2023</span>
<svg aria-hidden="true" className="iconify text-white rotate-45 group-hover:rotate-0 transition-transform duration-500 iconify--lucide" data-icon="lucide:arrow-up-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-red-500 text-xs font-mono uppercase tracking-widest mb-2">Fashion</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Vogue Noir</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm border border-white/5 fade-up">
<video autoplay="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&amp;w=2788&amp;auto=format&amp;fit=crop">
<source src="https://videos.pexels.com/video-files/3752535/3752535-hd_1920_1080_24fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-white border border-white/10">2023</span>
<svg aria-hidden="true" className="iconify text-white rotate-45 group-hover:rotate-0 transition-transform duration-500 iconify--lucide" data-icon="lucide:arrow-up-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-red-500 text-xs font-mono uppercase tracking-widest mb-2">Experimental</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Chromatic Echo</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm border border-white/5 fade-up">
<video autoplay="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=2942&amp;auto=format&amp;fit=crop">
<source src="https://videos.pexels.com/video-files/853870/853870-hd_1920_1080_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-white border border-white/10">2024</span>
<svg aria-hidden="true" className="iconify text-white rotate-45 group-hover:rotate-0 transition-transform duration-500 iconify--lucide" data-icon="lucide:arrow-up-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-red-500 text-xs font-mono uppercase tracking-widest mb-2">Documentary</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Terra Firma</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm border border-white/5 fade-up">
<video autoplay="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2940&amp;auto=format&amp;fit=crop">
<source src="https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-white border border-white/10">2023</span>
<svg aria-hidden="true" className="iconify text-white rotate-45 group-hover:rotate-0 transition-transform duration-500 iconify--lucide" data-icon="lucide:arrow-up-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-red-500 text-xs font-mono uppercase tracking-widest mb-2">Tech</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Quantum Leap</h3>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center fade-up">
<a className="inline-flex items-center justify-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors uppercase tracking-widest group" href="#">
                    View Full Archive
                    <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="services">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 fade-up">
<span className="text-red-500 font-mono text-xs uppercase tracking-widest mb-2 block">03 / Atrakcje</span>
<h2 className="text-4xl font-semibold tracking-tighter text-white">Dla Twojego Wesela</h2>
</div>

<div className="grid md:grid-cols-3 gap-0 border border-white/10 bg-black">

<div className="group hover-border-glow p-10 border-r border-b border-white/10 hover:bg-white/[0.02] transition-colors fade-up">
<div className="w-12 h-12 bg-neutral-900 rounded-sm flex items-center justify-center mb-8 border border-white/5 group-hover:border-red-500/50 transition-colors">
<svg aria-hidden="true" className="iconify text-neutral-300 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:film" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18M3 7.5h4M3 12h18M3 16.5h4M17 3v18m0-13.5h4m-4 9h4"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Fotobudka</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Concept development, scriptwriting, and storyboarding. We lay the foundation for visual excellence.</p>
</div>

<div className="group hover-border-glow p-10 border-r border-b border-white/10 hover:bg-white/[0.02] transition-colors fade-up">
<div className="w-12 h-12 bg-neutral-900 rounded-sm flex items-center justify-center mb-8 border border-white/5 group-hover:border-red-500/50 transition-colors">
<svg aria-hidden="true" className="iconify text-neutral-300 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:video" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></g></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Fontanna Iskier</h3>
<p className="text-sm text-neutral-400 leading-relaxed">High-end cinematography, directing, and on-set management using state-of-the-art cinema gear.</p>
</div>

<div className="group hover-border-glow p-10 border-b border-white/10 hover:bg-white/[0.02] transition-colors fade-up">
<div className="w-12 h-12 bg-neutral-900 rounded-sm flex items-center justify-center mb-8 border border-white/5 group-hover:border-red-500/50 transition-colors">
<svg aria-hidden="true" className="iconify text-neutral-300 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:scissors" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12L12 12m8-8L8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8L20 20"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Niski Dym</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Editing, VFX, and sound mixing. We sculpt the raw footage into a polished narrative.</p>
</div>

<div className="group hover-border-glow p-10 border-r border-white/10 hover:bg-white/[0.02] transition-colors fade-up">
<div className="w-12 h-12 bg-neutral-900 rounded-sm flex items-center justify-center mb-8 border border-white/5 group-hover:border-red-500/50 transition-colors">
<svg aria-hidden="true" className="iconify text-neutral-300 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:palette" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></g></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Biały Miś</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Defining mood and tone through expert color science. Davinci Resolve certified workflow.</p>
</div>

<div className="group hover-border-glow p-10 border-r border-white/10 hover:bg-white/[0.02] transition-colors fade-up">
<div className="w-12 h-12 bg-neutral-900 rounded-sm flex items-center justify-center mb-8 border border-white/5 group-hover:border-red-500/50 transition-colors">
<svg aria-hidden="true" className="iconify text-neutral-300 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:music-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="8" cy="18" r="4"></circle><path d="M12 18V2l7 4"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Transport Gości</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Immersive audio landscapes that heighten emotional impact. Composition and SFX.</p>
</div>

<div className="group hover-border-glow p-10 hover:bg-white/[0.02] transition-colors fade-up">
<div className="w-12 h-12 bg-neutral-900 rounded-sm flex items-center justify-center mb-8 border border-white/5 group-hover:border-red-500/50 transition-colors">
<svg aria-hidden="true" className="iconify text-neutral-300 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:monitor-play" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56zM12 17v4m-4 0h8"></path><rect height="14" rx="2" width="20" x="2" y="3"></rect></g></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Feature 6</h3>
<p className="text-sm text-neutral-400 leading-relaxed">2D and 3D animation to explain complex concepts or add flair to your visual identity.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808]" id="galeria">
<div className="max-w-7xl mx-auto px-6 mb-12 fade-up">
<span className="text-red-500 font-mono text-xs uppercase tracking-widest mb-2 block">04 / Galeria</span>
<h2 className="text-3xl font-semibold tracking-tighter text-white">Momenty, które pamiętam najlepiej</h2>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
<div className="col-span-2 row-span-2 relative group overflow-hidden rounded-sm fade-up">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] text-white uppercase tracking-widest border border-white/10">Set Life</div>
</div>
<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-sm fade-up">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="col-span-1 row-span-2 relative group overflow-hidden rounded-sm fade-up">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-sm fade-up">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-32 relative bg-neutral-950 border-t border-white/5 overflow-hidden" id="contact">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 relative z-10">
<div className="fade-up">
<h2 className="md:text-7xl text-6xl font-semibold text-white tracking-tighter mb-8">
                    Stwórzmy razem <br/>
<span className="text-neutral-600">cos niezwykłego.</span>
</h2>
<p className="text-neutral-400 text-lg font-light mb-12 max-w-md">
                    Powiedz mi o swoim weselu i planach
                </p>
<div className="space-y-8">
<a className="group flex items-center gap-6 text-white hover:text-red-500 transition-colors" href="mailto:hello@kabovelo.com">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-500 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div>
<span className="block text-xs text-neutral-500 uppercase tracking-widest mb-1">Email</span>
<span className="text-xl font-medium">oskar.lakomy1515@gmail.com</span>
</div>
</a>
<a className="group flex items-center gap-6 text-white hover:text-red-500 transition-colors" href="#">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-500 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</div>
<div>
<span className="block text-xs text-neutral-500 uppercase tracking-widest mb-1">Obserwuj</span>
<span className="text-xl font-medium">@dj.oskar</span>
</div>
</a>
</div>
</div>
<div className="bg-neutral-900/30 p-10 border border-white/10 rounded-sm backdrop-blur-sm fade-up">
<form className="space-y-8">
<div className="grid md:grid-cols-2 gap-8">
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:outline-none focus:border-red-500 transition-colors placeholder-transparent" id="name" placeholder="Name" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-500" htmlFor="name">Imię</label>
</div>
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:outline-none focus:border-red-500 transition-colors placeholder-transparent" id="email" placeholder="Email" type="email"/>
<label className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-500" htmlFor="email">Email</label>
</div>
</div>
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:outline-none focus:border-red-500 transition-colors placeholder-transparent" id="budget" placeholder="Budget" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-500" htmlFor="budget">Miejsce wesela</label>
</div>
<div className="group relative">
<textarea className="peer w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:outline-none focus:border-red-500 transition-colors placeholder-transparent resize-none" id="message" placeholder="Message" rows="4"></textarea>
<label className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-500" htmlFor="message">Wiadomość </label>
</div>
<button className="w-full py-5 bg-white text-black font-semibold uppercase tracking-widest hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 group">
                        Wyślij
                        <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-black py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<a className="text-xl font-bold tracking-tighter uppercase text-white flex items-center gap-1" href="#">
                Dj.OZI<span className="text-red-600">.</span>
</a>
<p className="text-neutral-600 text-xs">© DJ.Ozi Design &amp; Development by Maro Drabik</p>
</div>
</footer>



    </>
  );
}
