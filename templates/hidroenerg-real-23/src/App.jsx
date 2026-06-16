import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Init Icons
        lucide.createIcons();

        // 1. Text Reveals & Blur Animations
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-text, .reveal-blur').forEach(el => observer.observe(el));

        // 2. Parallax Effect (Mouse + Scroll)
        document.addEventListener('mousemove', (e) => {
            const layers = document.querySelectorAll('.parallax-layer');
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;
            
            layers.forEach(layer => {
                const speed = layer.getAttribute('data-speed') || 0.05;
                layer.style.transform = `translateX(${x * speed}px) translateY(${y * speed}px) scale(1.1)`;
            });
        });

        // 3. Horizontal Scroll Snap Indicator (Optional UX enhancement)
        const scrollContainer = document.querySelector('.horizontal-snap');
        if(scrollContainer) {
            scrollContainer.addEventListener('wheel', (evt) => {
                // Map vertical scroll to horizontal in desktop view if needed
                if (window.innerWidth >= 1024) {
                    evt.preventDefault();
                    scrollContainer.scrollLeft += evt.deltaY;
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-layer"></div>

<nav className="fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12 mix-blend-difference text-white">
<div className="flex justify-between items-center">
<a className="text-xl font-bold tracking-tighter uppercase" href="#">Hidroenergo<span className="text-indigo-400">.</span></a>
<div className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-widest opacity-80">
<a className="hover:text-indigo-400 transition-colors" href="#">Projekti</a>
<a className="hover:text-indigo-400 transition-colors" href="#">O nama</a>
<a className="hover:text-indigo-400 transition-colors" href="#">Novosti</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium uppercase tracking-widest hover:text-indigo-400 transition-colors group" href="#contact">
                Zakazi Sastanak
                <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
<button className="md:hidden">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

<div className="aurora-container">
<div className="aurora-blob blob-1"></div>
<div className="aurora-blob blob-2"></div>
<div className="aurora-blob blob-3"></div>
</div>

<div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
<img className="w-full h-full object-cover grayscale scale-110 parallax-layer" data-speed="0.05" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50 z-10"></div>

<div className="relative z-20 container mx-auto px-6 text-center flex flex-col items-center">

<div className="glass-panel px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-8 reveal-blur">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]"></span>
<span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-emerald-100">Prodaja u toku</span>
</div>

<h1 className="text-7xl md:text-9xl font-semibold tracking-tighter text-white mb-6 leading-[0.9] text-glow overflow-hidden">
<span className="block reveal-text delay-100">Ada Perla</span>
</h1>
<p className="text-lg md:text-xl text-white/60 font-light max-w-xl mx-auto mb-10 reveal-blur delay-300">
                Biser vaše budućnosti. Savremeni dizajn susreće bezvremensku udobnost u srcu grada.
            </p>
<div className="flex flex-col sm:flex-row gap-4 items-center reveal-blur delay-500">
<a className="px-8 py-4 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-indigo-50 transition-colors" href="#">
                    Pogledaj stanove
                </a>
<a className="px-8 py-4 glass-panel text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center gap-2" href="#">
<i className="w-3 h-3 fill-current" data-lucide="play"></i> Video prezentacija
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] uppercase tracking-widest">Scroll</span>
<div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
</div>
</section>

<section className="relative py-12 border-y border-white/5 bg-[#050505] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none"></div>
<div className="marquee-track opacity-70 hover:opacity-100 transition-opacity duration-500">

<div className="flex items-center gap-16 whitespace-nowrap">
<span className="text-6xl font-thin text-white/20">/</span>
<div className="flex flex-col">
<span className="text-3xl font-medium text-white">15 Godina</span>
<span className="text-xs uppercase tracking-widest text-indigo-400">Iskustva</span>
</div>
<span className="text-6xl font-thin text-white/20">/</span>
<div className="flex flex-col">
<span className="text-3xl font-medium text-white">400+</span>
<span className="text-xs uppercase tracking-widest text-indigo-400">Zadovoljnih kupaca</span>
</div>
<span className="text-6xl font-thin text-white/20">/</span>
<div className="flex flex-col">
<span className="text-3xl font-medium text-white">7 Objekata</span>
<span className="text-xs uppercase tracking-widest text-indigo-400">Izgrađeno</span>
</div>
<span className="text-6xl font-thin text-white/20">/</span>
<div className="flex flex-col">
<span className="text-3xl font-medium text-white">Siguran Dom</span>
<span className="text-xs uppercase tracking-widest text-indigo-400">Kvalitet</span>
</div>
</div>

<div aria-hidden="true" className="flex items-center gap-16 whitespace-nowrap">
<span className="text-6xl font-thin text-white/20">/</span>
<div className="flex flex-col">
<span className="text-3xl font-medium text-white">15 Godina</span>
<span className="text-xs uppercase tracking-widest text-indigo-400">Iskustva</span>
</div>
<span className="text-6xl font-thin text-white/20">/</span>
<div className="flex flex-col">
<span className="text-3xl font-medium text-white">400+</span>
<span className="text-xs uppercase tracking-widest text-indigo-400">Zadovoljnih kupaca</span>
</div>
<span className="text-6xl font-thin text-white/20">/</span>
<div className="flex flex-col">
<span className="text-3xl font-medium text-white">7 Objekata</span>
<span className="text-xs uppercase tracking-widest text-indigo-400">Izgrađeno</span>
</div>
<span className="text-6xl font-thin text-white/20">/</span>
<div className="flex flex-col">
<span className="text-3xl font-medium text-white">Siguran Dom</span>
<span className="text-xs uppercase tracking-widest text-indigo-400">Kvalitet</span>
</div>
</div>
</div>
</section>

<section className="relative w-full h-auto lg:h-[100vh] bg-[#080808]">
<div className="lg:absolute inset-0 flex flex-col lg:flex-row overflow-x-auto no-scrollbar horizontal-snap">

<div className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left z-30 pointer-events-none">
<span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Aktuelni Projekti — Scroll →</span>
</div>

<article className="w-full lg:min-w-[85vw] h-[80vh] lg:h-full snap-item relative flex items-center justify-center p-6 lg:p-24 group border-r border-white/5">

<div className="absolute inset-0 overflow-hidden opacity-20 transition-opacity duration-1000 group-hover:opacity-40">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/50 blur-[120px] rounded-full"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl relative z-10 items-center">
<div className="order-2 lg:order-1 space-y-8">
<div>
<span className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-2 block">Blok 51, Ada</span>
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6">Ada Perla</h2>
<div className="h-px w-24 bg-gradient-to-r from-indigo-500 to-transparent mb-6"></div>
<p className="text-lg text-white/60 font-light leading-relaxed max-w-md">
                                 Savremeni stambeno-poslovni objekat. Obuhvata 66 stanova, jedan veliki poslovni prostor i 41 parking mjesto.
                             </p>
</div>

<div className="flex flex-wrap gap-3">
<div className="glass-panel px-5 py-3 rounded-xl cursor-pointer hover:bg-white/10 transition-colors group/pill">
<div className="text-xs text-white/50 uppercase tracking-wide mb-1">Dvosobni</div>
<div className="text-white font-medium">45 - 60 m²</div>
</div>
<div className="glass-panel px-5 py-3 rounded-xl cursor-pointer hover:bg-white/10 transition-colors group/pill">
<div className="text-xs text-white/50 uppercase tracking-wide mb-1">Trosobni</div>
<div className="text-white font-medium">65 - 90 m²</div>
</div>
</div>
<a className="inline-flex items-center gap-3 text-white border-b border-white/30 pb-1 hover:border-white transition-all text-sm uppercase tracking-widest" href="#">
                            Detalji projekta <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="order-1 lg:order-2 relative aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&amp;w=1984&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 glass-panel px-4 py-2 rounded-lg backdrop-blur-md">
<span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Novo u ponudi</span>
</div>
</div>
</div>
</article>

<article className="w-full lg:min-w-[85vw] h-[80vh] lg:h-full snap-item relative flex items-center justify-center p-6 lg:p-24 group">

<div className="absolute inset-0 overflow-hidden opacity-20 transition-opacity duration-1000 group-hover:opacity-40">
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/50 blur-[120px] rounded-full"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl relative z-10 items-center">
<div className="order-2 lg:order-1 relative aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 right-6 glass-panel px-4 py-2 rounded-lg backdrop-blur-md">
<span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">U izgradnji</span>
</div>
</div>
<div className="order-1 lg:order-2 space-y-8 lg:pl-12">
<div>
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6">Ada Vista</h2>
<div className="h-px w-24 bg-gradient-to-r from-purple-500 to-transparent mb-6"></div>
<p className="text-lg text-white/60 font-light leading-relaxed max-w-md">
                                Moderan stambeno-poslovni kompleks. Podignite kvalitet stanovanja na novi nivo sa 64 pažljivo projektovane jedinice.
                             </p>
</div>

<div className="flex flex-wrap gap-3">
<div className="glass-panel px-5 py-3 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">
<div className="text-xs text-white/50 uppercase tracking-wide mb-1">Jednosobni</div>
<div className="text-white font-medium">35 - 45 m²</div>
</div>
<div className="glass-panel px-5 py-3 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">
<div className="text-xs text-white/50 uppercase tracking-wide mb-1">Penthouse</div>
<div className="text-white font-medium">100+ m²</div>
</div>
</div>
<a className="inline-flex items-center gap-3 text-white border-b border-white/30 pb-1 hover:border-white transition-all text-sm uppercase tracking-widest" href="#">
                            Saznaj više <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>
</div>
</section>

<section className="relative py-32 bg-[#030303]">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
<div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-2">Završeni projekti</h2>
<p className="text-white/40 font-light">Kvalitet koji traje godinama.</p>
</div>
<div className="flex gap-4 mt-8 md:mt-0">
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"><i className="w-5 h-5" data-lucide="arrow-left"></i></button>
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"><i className="w-5 h-5" data-lucide="arrow-right"></i></button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[600px]">

<div className="lg:col-span-8 relative rounded-3xl overflow-hidden group border border-white/5">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 z-20">
<div className="text-xs font-mono text-white/50 mb-2">ZAVRŠENO 2022</div>
<h3 className="text-4xl font-medium text-white mb-4">Blok 51</h3>
<div className="flex items-center gap-2 text-sm text-white/80 cursor-pointer group-hover:text-white group-hover:underline decoration-1 underline-offset-4">
                            Pregled galerije <i className="w-4 h-4" data-lucide="maximize-2"></i>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
<i className="w-8 h-8 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-4 overflow-y-auto no-scrollbar h-full">

<div className="group/item flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all cursor-pointer">
<div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 transition" src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center">
<h4 className="text-white font-medium mb-1">Naselje Nova Varoš</h4>
<span className="text-xs text-white/40">Završeno 2021</span>
</div>
</div>

<div className="group/item flex gap-4 p-4 rounded-2xl bg-transparent hover:bg-white/10 border border-transparent hover:border-white/5 transition-all cursor-pointer">
<div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 transition" src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center">
<h4 className="text-white font-medium mb-1">Hanioti</h4>
<span className="text-xs text-white/40">Završeno 2020</span>
</div>
</div>

<div className="group/item flex gap-4 p-4 rounded-2xl bg-transparent hover:bg-white/10 border border-transparent hover:border-white/5 transition-all cursor-pointer">
<div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 transition" src="https://images.unsplash.com/photo-1481253127861-534498168948?q=80&amp;w=1973&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center">
<h4 className="text-white font-medium mb-1">Objekat A2</h4>
<span className="text-xs text-white/40">Završeno 2019</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden bg-[#050505]">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/20 blur-[150px] rounded-full pointer-events-none"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-4 sticky top-32 h-fit">
<span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-6 block">Iskustva</span>
<h2 className="text-4xl lg:text-5xl font-medium text-white mb-12 tracking-tight">
                        Povjerenje izgrađeno na kvalitetu.
                    </h2>
<div className="border-t border-white/10 pt-8">
<div className="text-8xl font-thin text-white tracking-tighter mb-2">4.82</div>
<div className="flex text-amber-400 gap-1 mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-white/50 text-sm">Na osnovu 400+ zadovoljnih porodica.</p>
</div>
</div>

<div className="lg:col-span-8 flex flex-col gap-8">

<div className="glass-panel p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-500 border border-white/5 relative group">
<div className="absolute top-10 right-10 opacity-20 group-hover:opacity-50 transition-opacity">
<i className="w-12 h-12 text-white" data-lucide="quote"></i>
</div>
<p className="text-xl text-white/90 font-light leading-relaxed mb-8 relative z-10">
                            "Kad smo tražili stan, bilo nam je najbitnije da je dobro izolovan jer ne volimo buku. Ada 3 je savršena. Kvalitet gradnje se vidi odmah."
                        </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">MN</div>
<div>
<h4 className="text-white font-medium">Marija Nikolić</h4>
<span className="text-white/40 text-xs uppercase tracking-wider">Ada 3</span>
</div>
</div>
</div>

<div className="glass-panel p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-500 border border-white/5 relative group md:ml-12">
<div className="absolute top-10 right-10 opacity-20 group-hover:opacity-50 transition-opacity">
<i className="w-12 h-12 text-white" data-lucide="quote"></i>
</div>
<p className="text-xl text-white/90 font-light leading-relaxed mb-8 relative z-10">
                            "Htjeli smo da budemo blizu centra, ali da imamo mir. Hanioti je ispašao savršen za to. Kupio sam stan u izgradnji i sve je ispoštovano."
                        </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">JK</div>
<div>
<h4 className="text-white font-medium">Jelena Kovačević</h4>
<span className="text-white/40 text-xs uppercase tracking-wider">Hanioti</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] border-t border-white/5">
<div className="container mx-auto px-6">
<div className="flex justify-between items-end mb-16">
<h2 className="text-5xl font-medium text-white tracking-tight">Novosti</h2>
<a className="text-white/60 hover:text-white text-sm font-medium transition-colors flex items-center gap-2" href="#">
                    Arhiva <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<article className="lg:col-span-2 group cursor-pointer">
<div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-black/50 backdrop-blur px-3 py-1 rounded text-xs font-mono text-white border border-white/10">
                            9 SEP 2025
                        </div>
</div>
<h3 className="text-2xl md:text-3xl font-medium text-white mb-3 group-hover:text-indigo-400 transition-colors">
                        Lamela 4 u Bloku 51 – Završena i spremna za useljenje
                    </h3>
<p className="text-white/50 font-light leading-relaxed max-w-2xl">
                        Svi radovi na eksterijeru i enterijeru su uspešno okončani. Tehnički prijem je zakazan za sledeću nedelju, nakon čega kreće useljenje.
                    </p>
</article>

<div className="flex flex-col gap-6 lg:border-l lg:border-white/10 lg:pl-8">

<article className="group cursor-pointer">
<span className="text-xs font-mono text-indigo-400 mb-2 block">06 AVG 2025</span>
<h4 className="text-lg font-medium text-white mb-2 group-hover:text-white/70 transition-colors">Izvještaj Sa Gradilišta – Avgust 2025</h4>
<div className="w-full h-px bg-white/10 mt-6 group-last:hidden"></div>
</article>

<article className="group cursor-pointer">
<span className="text-xs font-mono text-indigo-400 mb-2 block">02 JUN 2025</span>
<h4 className="text-lg font-medium text-white mb-2 group-hover:text-white/70 transition-colors">Radovi Na Objektu "Ada Vista" Napreduju Planiranom Dinamikom</h4>
<div className="w-full h-px bg-white/10 mt-6 group-last:hidden"></div>
</article>

<article className="group cursor-pointer">
<span className="text-xs font-mono text-indigo-400 mb-2 block">27 FEB 2025</span>
<h4 className="text-lg font-medium text-white mb-2 group-hover:text-white/70 transition-colors">Počela Izgradnja Stambenog Kompleksa Ada Vista</h4>
<div className="w-full h-px bg-white/10 mt-6 group-last:hidden"></div>
</article>
</div>
</div>
</div>
</section>

<section className="relative py-32 flex items-center justify-center overflow-hidden" id="contact">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-[400px] h-[400px] bg-indigo-600/30 blur-[150px] rounded-full animate-pulse"></div>
</div>
<div className="relative z-10 text-center max-w-4xl px-6">
<span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur mb-8 text-xs font-semibold tracking-wide text-indigo-300">
                Prodajni Tim
            </span>
<h2 className="text-5xl md:text-8xl font-medium tracking-tighter text-white mb-8 text-glow">
                Zakažite sastanak.
            </h2>
<p className="text-xl text-white/50 font-light mb-12 max-w-2xl mx-auto">
                Rezervišite termin i saznajte sve što vas zanima o našim trenutnim projektima i uslovima kupovine.
            </p>
<div className="flex flex-col sm:flex-row gap-6 justify-center">
<a className="px-10 py-5 bg-white text-black rounded-full text-sm font-bold hover:scale-105 transition-transform flex items-center justify-center gap-3" href="tel:+38766466466">
<i className="w-4 h-4" data-lucide="phone"></i>
                    +387 66 466 466
                </a>
<a className="px-10 py-5 glass-panel text-white rounded-full text-sm font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-3" href="mailto:prodaja@hidroenergo.com">
<i className="w-4 h-4" data-lucide="mail"></i>
                    prodaja@hidroenergo.com
                </a>
</div>
</div>
</section>

<footer className="bg-[#020202] border-t border-white/5 pt-20 pb-10">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-1">
<a className="text-lg font-bold tracking-tighter uppercase text-white mb-6 block" href="#">Hidroenergo.</a>
<p className="text-white/40 text-sm leading-relaxed mb-6">
                        Vidovdanska 2, Banja Luka.<br/>Izgradnja modernih domova za savremeni život.
                    </p>
<div className="flex gap-4 text-white/40">
<a className="hover:text-white transition" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="hover:text-white transition" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="hover:text-white transition" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Navigacija</h4>
<ul className="space-y-3 text-sm text-white/40">
<li><a className="hover:text-white transition" href="#">Početna</a></li>
<li><a className="hover:text-white transition" href="#">O nama</a></li>
<li><a className="hover:text-white transition" href="#">Projekti</a></li>
<li><a className="hover:text-white transition" href="#">Novosti</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Kontakt</h4>
<ul className="space-y-3 text-sm text-white/40">
<li>prodaja@hidroenergo.com</li>
<li>+387 66 466 466</li>
<li className="pt-4 text-white/20 text-xs uppercase tracking-wider">Radno Vrijeme</li>
<li>Pon - Pet: 08:00 - 16:00</li>
<li>Subota: 09:00 - 14:00</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Legal</h4>
<ul className="space-y-3 text-sm text-white/40">
<li><a className="hover:text-white transition" href="#">Politika privatnosti</a></li>
<li><a className="hover:text-white transition" href="#">Uslovi korišćenja</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/20 font-mono">
<p>© 2025 Hidroenergo doo.</p>
<p>Designed with Aurora System.</p>
</div>
</div>
</footer>


    </>
  );
}
