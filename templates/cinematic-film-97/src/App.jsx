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

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="backdrop-blur-xl bg-white/70 border border-black/10 rounded-full px-6 py-4 flex items-center justify-between gap-12 shadow-2xl shadow-black/5 transition-all duration-300 hover:border-black/20">
<a className="flex items-center" href="#">
<img alt="resona Logo" className="h-5 md:h-6 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/337eb9d9-c0a8-495e-bcef-03b0cd5a0a69_800w.png"/>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-neutral-500">
<a className="hover:text-black transition-colors" href="#vision">Vision</a>
<a className="hover:text-black transition-colors" href="#portfolio">Arbeiten</a>
<a className="hover:text-black transition-colors" href="#services">Leistungen</a>
<a className="hover:text-black transition-colors" href="#contact">Kontakt</a>
</div>
<a className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-black text-white hover:bg-neutral-800 transition-transform hover:scale-110" href="#contact">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</a>
<button className="md:hidden text-black">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
</div>
</nav>

<header className="relative w-full h-[110vh] overflow-hidden flex flex-col items-center justify-center">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover opacity-40 scale-105" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&amp;w=3450&amp;auto=format&amp;fit=crop">
<source src="https://videos.pexels.com/video-files/5824571/5824571-hd_1920_1080_24fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-[#f8f9fa] via-[#f8f9fa]/80 to-white/10"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#f8f9fa_110%)]"></div>
</div>
<div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-black/5 backdrop-blur-sm mb-8 fade-up" style={{transitionDelay: '0.1s'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
</span>
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600">Internationale Filmproduktion</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-black leading-[0.9] mb-8 fade-up" style={{transitionDelay: '0.2s'}}>
                Bilder, die <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-black to-neutral-400">nachklingen.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-600 font-light max-w-2xl mx-auto leading-relaxed mb-10 fade-up" style={{transitionDelay: '0.3s'}}>
                Wir produzieren erstklassige filmische Erlebnisse für Marken, Künstler und Visionäre, die es wagen, aufzufallen.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-up" style={{transitionDelay: '0.4s'}}>
<a className="group relative px-8 py-4 bg-black text-white text-sm font-semibold tracking-wide overflow-hidden rounded-sm transition-all hover:pr-10" href="#portfolio">
<span className="relative z-10">Showreel ansehen</span>
<div className="absolute inset-0 bg-neutral-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
<span className="iconify absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10" data-icon="lucide:play" data-width="12"></span>
</a>
<a className="group px-8 py-4 border border-black/10 text-black text-sm font-semibold tracking-wide hover:bg-black/5 transition-all rounded-sm backdrop-blur-sm" href="#contact">
                    Projekt starten
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
<div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-black to-transparent"></div>
</div>
</header>

<div className="w-full bg-black/5 border-y border-black/5 py-6 overflow-hidden relative z-20 backdrop-blur-sm">
<div className="flex whitespace-nowrap w-[200%] animate-scroll hover:[animation-play-state:paused]">
<div className="flex items-center gap-12 mx-6">
<span className="text-4xl font-bold uppercase tracking-tighter text-black/10">Kameraarbeit</span>
<span className="text-red-600 text-xl">•</span>
<span className="text-4xl font-bold uppercase tracking-tighter text-black/10">Regie</span>
<span className="text-red-600 text-xl">•</span>
<span className="text-4xl font-bold uppercase tracking-tighter text-black/10">Postproduktion</span>
<span className="text-red-600 text-xl">•</span>
<span className="text-4xl font-bold uppercase tracking-tighter text-black/10">Color Grading</span>
<span className="text-red-600 text-xl">•</span>
<span className="text-4xl font-bold uppercase tracking-tighter text-black/10">Sound Design</span>
<span className="text-red-600 text-xl">•</span>
</div>
<div className="flex items-center gap-12 mx-6">
<span className="text-4xl font-bold uppercase tracking-tighter text-black/10">Kameraarbeit</span>
<span className="text-red-600 text-xl">•</span>
<span className="text-4xl font-bold uppercase tracking-tighter text-black/10">Regie</span>
<span className="text-red-600 text-xl">•</span>
<span className="text-4xl font-bold uppercase tracking-tighter text-black/10">Postproduktion</span>
<span className="text-red-600 text-xl">•</span>
<span className="text-4xl font-bold uppercase tracking-tighter text-black/10">Color Grading</span>
<span className="text-red-600 text-xl">•</span>
<span className="text-4xl font-bold uppercase tracking-tighter text-black/10">Sound Design</span>
<span className="text-red-600 text-xl">•</span>
</div>
</div>
</div>

<section className="py-32 relative" id="vision">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-5 fade-up sticky top-32">
<span className="text-red-600 font-mono text-xs uppercase tracking-widest mb-4 block">01 / Die Vision</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-black mb-8 leading-[1.1]">
                        Wir fangen nicht nur Momente ein. <br/><span className="text-neutral-400">Wir erschaffen Emotionen.</span>
</h2>
<p className="text-neutral-600 font-light leading-relaxed mb-8">
                        Jedes Bild ist eine Entscheidung. Jeder Schnitt ein Herzschlag. Bei resona agieren wir an der Schnittstelle von roher Emotion und technischer Präzision. Unsere Filme sind so konzipiert, dass sie im Gedächtnis bleiben, lange nachdem der Bildschirm schwarz wird.
                    </p>
<div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/10">
<div>
<span className="block text-3xl font-bold text-black mb-1">50+</span>
<span className="text-xs text-neutral-500 font-semibold uppercase tracking-widest">Projekte realisiert</span>
</div>
<div>
<span className="block text-3xl font-bold text-black mb-1">12</span>
<span className="text-xs text-neutral-500 font-semibold uppercase tracking-widest">Internationale Awards</span>
</div>
</div>
</div>
<div className="lg:col-span-7 grid gap-6 fade-up">
<div className="relative aspect-video group overflow-hidden rounded-sm border border-black/5">
<video autoplay="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg">
<source src="https://videos.pexels.com/video-files/3205647/3205647-hd_1920_1080_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-xl font-medium text-white tracking-tight">Erzählerische Tiefe</h3>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div className="relative aspect-[4/5] group overflow-hidden rounded-sm border border-black/5">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?q=80&amp;w=2996&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-xl font-medium text-white tracking-tight">Lichtsetzung</h3>
</div>
</div>
<div className="relative aspect-[4/5] group overflow-hidden rounded-sm border border-black/5">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1585647347384-2593bc35786b?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-xl font-medium text-white tracking-tight">Bildkomposition</h3>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-t border-black/5" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 fade-up">
<div>
<span className="text-red-600 font-mono text-xs uppercase tracking-widest mb-2 block">02 / Portfolio</span>
<h2 className="text-4xl font-semibold tracking-tighter text-black">Ausgewählte Arbeiten</h2>
</div>
<div className="flex items-center gap-6 mt-6 md:mt-0">
<button className="text-black text-sm font-semibold border-b border-red-600 pb-1">Alle</button>
<button className="text-neutral-500 text-sm font-semibold hover:text-black transition-colors pb-1">Werbung</button>
<button className="text-neutral-500 text-sm font-semibold hover:text-black transition-colors pb-1">Musikvideo</button>
<button className="text-neutral-500 text-sm font-semibold hover:text-black transition-colors pb-1">Dokumentation</button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm border border-black/5 fade-up">
<video autoplay="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg">
<source src="https://videos.pexels.com/video-files/3015511/3015511-hd_1920_1080_24fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-semibold uppercase tracking-widest text-white border border-white/20">2023</span>
<span className="iconify text-white rotate-45 group-hover:rotate-0 transition-transform duration-500" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-red-500 text-xs font-mono font-semibold uppercase tracking-widest mb-2">Automobil</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Apex Velocity</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm border border-black/5 fade-up" style={{transitionDelay: '0.1s'}}>
<video autoplay="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg">
<source src="https://videos.pexels.com/video-files/4057317/4057317-hd_1920_1080_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-semibold uppercase tracking-widest text-white border border-white/20">2024</span>
<span className="iconify text-white rotate-45 group-hover:rotate-0 transition-transform duration-500" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-red-500 text-xs font-mono font-semibold uppercase tracking-widest mb-2">Musikvideo</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Neon Nights</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm border border-black/5 fade-up" style={{transitionDelay: '0.2s'}}>
<video autoplay="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&amp;w=2874&amp;auto=format&amp;fit=crop">
<source src="https://videos.pexels.com/video-files/3205915/3205915-hd_1920_1080_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-semibold uppercase tracking-widest text-white border border-white/20">2023</span>
<span className="iconify text-white rotate-45 group-hover:rotate-0 transition-transform duration-500" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-red-500 text-xs font-mono font-semibold uppercase tracking-widest mb-2">Mode</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Vogue Noir</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm border border-black/5 fade-up">
<video autoplay="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&amp;w=2788&amp;auto=format&amp;fit=crop">
<source src="https://videos.pexels.com/video-files/3752535/3752535-hd_1920_1080_24fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-semibold uppercase tracking-widest text-white border border-white/20">2023</span>
<span className="iconify text-white rotate-45 group-hover:rotate-0 transition-transform duration-500" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-red-500 text-xs font-mono font-semibold uppercase tracking-widest mb-2">Experimentell</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Chromatic Echo</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm border border-black/5 fade-up" style={{transitionDelay: '0.1s'}}>
<video autoplay="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=2942&amp;auto=format&amp;fit=crop">
<source src="https://videos.pexels.com/video-files/853870/853870-hd_1920_1080_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-semibold uppercase tracking-widest text-white border border-white/20">2024</span>
<span className="iconify text-white rotate-45 group-hover:rotate-0 transition-transform duration-500" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-red-500 text-xs font-mono font-semibold uppercase tracking-widest mb-2">Dokumentation</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Terra Firma</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm border border-black/5 fade-up" style={{transitionDelay: '0.2s'}}>
<video autoplay="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2940&amp;auto=format&amp;fit=crop">
<source src="https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-semibold uppercase tracking-widest text-white border border-white/20">2023</span>
<span className="iconify text-white rotate-45 group-hover:rotate-0 transition-transform duration-500" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-red-500 text-xs font-mono font-semibold uppercase tracking-widest mb-2">Technologie</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Quantum Leap</h3>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center fade-up">
<a className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-neutral-500 hover:text-black transition-colors uppercase tracking-widest group" href="#">
                    Gesamtes Archiv ansehen
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="services">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 fade-up">
<span className="text-red-600 font-mono text-xs uppercase tracking-widest mb-2 block">03 / Expertise</span>
<h2 className="text-4xl font-semibold tracking-tighter text-black">Produktionsleistungen</h2>
</div>

<div className="grid md:grid-cols-3 gap-0 border border-black/10 bg-white">

<div className="group hover-border-glow p-10 border-r border-b border-black/10 hover:bg-black/[0.02] transition-colors fade-up">
<div className="w-12 h-12 bg-[#f8f9fa] rounded-sm flex items-center justify-center mb-8 border border-black/5 group-hover:border-red-500/30 transition-colors">
<span className="iconify text-neutral-600 group-hover:text-red-600 transition-colors" data-icon="lucide:film" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-black mb-3">Pre-Produktion</h3>
<p className="text-sm text-neutral-600 leading-relaxed">Konzeptentwicklung, Drehbuchentwicklung und Storyboarding. Wir legen den Grundstein für visuelle Exzellenz.</p>
</div>

<div className="group hover-border-glow p-10 border-r border-b border-black/10 hover:bg-black/[0.02] transition-colors fade-up" style={{transitionDelay: '0.1s'}}>
<div className="w-12 h-12 bg-[#f8f9fa] rounded-sm flex items-center justify-center mb-8 border border-black/5 group-hover:border-red-500/30 transition-colors">
<span className="iconify text-neutral-600 group-hover:text-red-600 transition-colors" data-icon="lucide:video" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-black mb-3">Produktion</h3>
<p className="text-sm text-neutral-600 leading-relaxed">High-End-Kameraarbeit, Regie und Set-Management mit modernstem Kino-Equipment.</p>
</div>

<div className="group hover-border-glow p-10 border-b border-black/10 hover:bg-black/[0.02] transition-colors fade-up" style={{transitionDelay: '0.2s'}}>
<div className="w-12 h-12 bg-[#f8f9fa] rounded-sm flex items-center justify-center mb-8 border border-black/5 group-hover:border-red-500/30 transition-colors">
<span className="iconify text-neutral-600 group-hover:text-red-600 transition-colors" data-icon="lucide:scissors" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-black mb-3">Postproduktion</h3>
<p className="text-sm text-neutral-600 leading-relaxed">Schnitt, VFX und Tonmischung. Wir formen das Rohmaterial zu einer perfekten Erzählung.</p>
</div>

<div className="group hover-border-glow p-10 border-r border-black/10 hover:bg-black/[0.02] transition-colors fade-up">
<div className="w-12 h-12 bg-[#f8f9fa] rounded-sm flex items-center justify-center mb-8 border border-black/5 group-hover:border-red-500/30 transition-colors">
<span className="iconify text-neutral-600 group-hover:text-red-600 transition-colors" data-icon="lucide:palette" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-black mb-3">Color Grading</h3>
<p className="text-sm text-neutral-600 leading-relaxed">Farbgebung, die Stimmung und Tonalität definiert. Zertifizierter DaVinci Resolve Workflow.</p>
</div>

<div className="group hover-border-glow p-10 border-r border-black/10 hover:bg-black/[0.02] transition-colors fade-up" style={{transitionDelay: '0.1s'}}>
<div className="w-12 h-12 bg-[#f8f9fa] rounded-sm flex items-center justify-center mb-8 border border-black/5 group-hover:border-red-500/30 transition-colors">
<span className="iconify text-neutral-600 group-hover:text-red-600 transition-colors" data-icon="lucide:music-2" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-black mb-3">Sound Design</h3>
<p className="text-sm text-neutral-600 leading-relaxed">Immersive Klanglandschaften, die die emotionale Wirkung verstärken. Komposition und SFX.</p>
</div>

<div className="group hover-border-glow p-10 hover:bg-black/[0.02] transition-colors fade-up" style={{transitionDelay: '0.2s'}}>
<div className="w-12 h-12 bg-[#f8f9fa] rounded-sm flex items-center justify-center mb-8 border border-black/5 group-hover:border-red-500/30 transition-colors">
<span className="iconify text-neutral-600 group-hover:text-red-600 transition-colors" data-icon="lucide:monitor-play" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-black mb-3">Motion Graphics</h3>
<p className="text-sm text-neutral-600 leading-relaxed">2D- und 3D-Animationen zur Erklärung komplexer Sachverhalte oder zur Veredelung Ihrer visuellen Identität.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f0f2f5]">
<div className="max-w-7xl mx-auto px-6 mb-12 fade-up">
<span className="text-red-600 font-mono text-xs uppercase tracking-widest mb-2 block">04 / Hinter den Kulissen</span>
<h2 className="text-3xl font-semibold tracking-tighter text-black">Vor Ort</h2>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
<div className="col-span-2 row-span-2 relative group overflow-hidden rounded-sm fade-up">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] font-semibold text-white uppercase tracking-widest border border-white/10">Set-Alltag</div>
</div>
<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-sm fade-up" style={{transitionDelay: '0.1s'}}>
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&amp;w=2918&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 row-span-2 relative group overflow-hidden rounded-sm fade-up" style={{transitionDelay: '0.2s'}}>
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-sm fade-up" style={{transitionDelay: '0.3s'}}>
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-32 relative bg-white border-t border-black/5 overflow-hidden" id="contact">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 relative z-10">
<div className="fade-up">
<h2 className="text-6xl md:text-7xl font-semibold tracking-tighter text-black mb-8">
                    Lassen Sie uns <br/>
<span className="text-neutral-400">Geschichte schreiben.</span>
</h2>
<p className="text-neutral-600 text-lg font-light mb-12 max-w-md">
                    Wir nehmen aktuell neue Projekte an. Kontaktieren Sie uns, um Ihre Vision zu besprechen.
                </p>
<div className="space-y-8">
<a className="group flex items-center gap-6 text-black hover:text-red-600 transition-colors" href="mailto:hello@resona.de">
<div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:border-red-600 transition-colors">
<span className="iconify" data-icon="lucide:mail" data-width="20"></span>
</div>
<div>
<span className="block text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-1">E-Mail schreiben</span>
<span className="text-xl font-medium">hello@resona.de</span>
</div>
</a>
<a className="group flex items-center gap-6 text-black hover:text-red-600 transition-colors" href="#">
<div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:border-red-600 transition-colors">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</div>
<div>
<span className="block text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-1">Folgen Sie uns</span>
<span className="text-xl font-medium">@resona.film</span>
</div>
</a>
</div>
</div>
<div className="bg-[#f8f9fa] p-10 border border-black/10 rounded-sm backdrop-blur-sm fade-up" style={{transitionDelay: '0.2s'}}>
<form className="space-y-8">
<div className="grid md:grid-cols-2 gap-8">
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-neutral-300 py-3 text-black focus:outline-none focus:border-red-600 transition-colors placeholder-transparent" id="name" placeholder="Name" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs font-medium text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-600" htmlFor="name">Name</label>
</div>
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-neutral-300 py-3 text-black focus:outline-none focus:border-red-600 transition-colors placeholder-transparent" id="email" placeholder="E-Mail" type="email"/>
<label className="absolute left-0 -top-3.5 text-xs font-medium text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-600" htmlFor="email">E-Mail</label>
</div>
</div>
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-neutral-300 py-3 text-black focus:outline-none focus:border-red-600 transition-colors placeholder-transparent" id="budget" placeholder="Geschätztes Budget" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs font-medium text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-600" htmlFor="budget">Geschätztes Budget</label>
</div>
<div className="group relative">
<textarea className="peer w-full bg-transparent border-b border-neutral-300 py-3 text-black focus:outline-none focus:border-red-600 transition-colors placeholder-transparent resize-none" id="message" placeholder="Projektdetails" rows="4"></textarea>
<label className="absolute left-0 -top-3.5 text-xs font-medium text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-600" htmlFor="message">Projektdetails</label>
</div>
<button className="w-full py-5 bg-black text-white font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-all flex items-center justify-center gap-3 group">
                        Anfrage senden
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-[#f8f9fa] py-12 border-t border-black/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<a className="flex items-center" href="#">
<img alt="resona Logo" className="h-6 w-auto object-contain grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/337eb9d9-c0a8-495e-bcef-03b0cd5a0a69_800w.png"/>
</a>
<p className="text-neutral-500 text-xs font-medium">© 2024 resona film&amp;medien gmbh. Alle Rechte vorbehalten.</p>
</div>
</footer>



    </>
  );
}
