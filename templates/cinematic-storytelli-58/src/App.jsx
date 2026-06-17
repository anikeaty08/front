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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<div className="grain-overlay"></div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="backdrop-blur-md bg-[#0F1C2E]/80 border border-[#F5F2EA]/10 rounded-full px-8 py-4 flex items-center justify-between gap-12 shadow-2xl transition-all duration-300">
<a className="text-lg font-serif tracking-widest text-[#F5F2EA] flex items-center gap-2" href="#">
                SILLAGE<span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-[#F5F2EA]/60">
<a className="hover:text-[#C5A059] transition-colors" href="#universes">Univers</a>
<a className="hover:text-[#C5A059] transition-colors" href="#philosophy">Philosophie</a>
<a className="hover:text-[#C5A059] transition-colors" href="#journal">Journal</a>
<a className="hover:text-[#C5A059] transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[#C5A059] text-[#0F1C2E] hover:bg-[#F5F2EA] transition-transform hover:scale-105" href="#contact">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<button className="md:hidden text-[#F5F2EA]">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover opacity-40 scale-105" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1499364615650-ec387206b7ee?q=80&amp;w=2574&amp;auto=format&amp;fit=crop">

<source src="https://videos.pexels.com/video-files/3866164/3866164-hd_1920_1080_24fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-[#0F1C2E]/30 to-black/40"></div>
</div>
<div className="relative z-20 text-center px-6 max-w-6xl mx-auto mt-10">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#F5F2EA]/10 bg-[#F5F2EA]/5 backdrop-blur-sm mb-10 fade-up" style={{transitionDelay: '0.1s'}}>
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C5A059]"></span>
</span>
<span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#F5F2EA]/80">Capturing Essence</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight text-[#F5F2EA] leading-[1.1] mb-8 fade-up" style={{transitionDelay: '0.2s'}}>
                TRACE YOUR <br/>
<span className="text-[#C5A059]">LEGEND.</span>
</h1>
<p className="text-lg md:text-xl text-[#F5F2EA]/70 font-light max-w-2xl mx-auto leading-relaxed mb-12 fade-up" style={{transitionDelay: '0.3s'}}>
                Dans un monde où tout s'efface, Sillage capture l'essence des hommes, des familles et des lieux pour en laisser une empreinte indélébile.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 fade-up" style={{transitionDelay: '0.4s'}}>
<a className="group relative px-10 py-4 bg-[#C5A059] text-[#0F1C2E] text-xs font-semibold tracking-widest uppercase overflow-hidden rounded-sm transition-all hover:bg-[#D4B372]" href="#universes">
                    Explorer les Univers
                </a>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40 animate-pulse">
<div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#C5A059] to-transparent"></div>
</div>
</header>

<div className="w-full bg-[#0F1C2E] border-y border-[#F5F2EA]/5 py-8 overflow-hidden relative z-20">
<div className="flex whitespace-nowrap w-[200%] animate-scroll">
<div className="flex items-center gap-16 mx-8 text-[#F5F2EA]/20 font-serif text-3xl tracking-widest uppercase">
<span>Héritage</span>
<span className="text-[#C5A059]">•</span>
<span>Transmission</span>
<span className="text-[#C5A059]">•</span>
<span>Mémoire</span>
<span className="text-[#C5A059]">•</span>
<span>Cinéma</span>
<span className="text-[#C5A059]">•</span>
<span>Intemporel</span>
<span className="text-[#C5A059]">•</span>
<span>Héritage</span>
<span className="text-[#C5A059]">•</span>
<span>Transmission</span>
<span className="text-[#C5A059]">•</span>
</div>
<div className="flex items-center gap-16 mx-8 text-[#F5F2EA]/20 font-serif text-3xl tracking-widest uppercase">
<span>Héritage</span>
<span className="text-[#C5A059]">•</span>
<span>Transmission</span>
<span className="text-[#C5A059]">•</span>
<span>Mémoire</span>
<span className="text-[#C5A059]">•</span>
<span>Cinéma</span>
<span className="text-[#C5A059]">•</span>
<span>Intemporel</span>
<span className="text-[#C5A059]">•</span>
<span>Héritage</span>
<span className="text-[#C5A059]">•</span>
<span>Transmission</span>
<span className="text-[#C5A059]">•</span>
</div>
</div>
</div>

<section className="py-32 relative bg-[#0F1C2E]" id="universes">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 fade-up">
<span className="text-[#C5A059] font-mono text-[10px] uppercase tracking-[0.3em] mb-4 block">Votre Histoire, Votre Sillage</span>
<h2 className="text-4xl md:text-5xl font-serif text-[#F5F2EA]">Choisissez votre univers</h2>
</div>
<div className="grid lg:grid-cols-3 gap-8 h-auto lg:h-[70vh]">

<a className="group relative block overflow-hidden rounded-sm border border-[#F5F2EA]/10 h-[500px] lg:h-full fade-up" href="#heritage">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-[#0F1C2E]/50 to-transparent opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-full p-10 flex flex-col items-center text-center z-10 transition-transform duration-500 group-hover:-translate-y-4">
<iconify-icon className="text-[#C5A059] mb-4 opacity-80" icon="solar:heart-angle-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-3xl font-serif text-[#F5F2EA] mb-2">Héritage</h3>
<div className="w-8 h-[1px] bg-[#C5A059] mb-4"></div>
<p className="text-sm font-light text-[#F5F2EA]/70 max-w-xs">Pour les familles. Transmettre l'histoire d'une vie aux générations futures.</p>
<span className="mt-6 text-[#C5A059] text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">Découvrir l'offre</span>
</div>
</a>

<a className="group relative block overflow-hidden rounded-sm border border-[#F5F2EA]/10 h-[500px] lg:h-full fade-up" href="#corporate" style={{transitionDelay: '0.1s'}}>
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2301&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-[#0F1C2E]/50 to-transparent opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-full p-10 flex flex-col items-center text-center z-10 transition-transform duration-500 group-hover:-translate-y-4">
<iconify-icon className="text-[#C5A059] mb-4 opacity-80" icon="solar:buildings-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-3xl font-serif text-[#F5F2EA] mb-2">Corporate</h3>
<div className="w-8 h-[1px] bg-[#C5A059] mb-4"></div>
<p className="text-sm font-light text-[#F5F2EA]/70 max-w-xs">Pour les Maisons. L'histoire de votre entreprise est votre meilleur actif.</p>
<span className="mt-6 text-[#C5A059] text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">Valoriser votre ADN</span>
</div>
</a>

<a className="group relative block overflow-hidden rounded-sm border border-[#F5F2EA]/10 h-[500px] lg:h-full fade-up" href="#portfolio" style={{transitionDelay: '0.2s'}}>
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-[#0F1C2E]/50 to-transparent opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-full p-10 flex flex-col items-center text-center z-10 transition-transform duration-500 group-hover:-translate-y-4">
<iconify-icon className="text-[#C5A059] mb-4 opacity-80" icon="solar:camera-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-3xl font-serif text-[#F5F2EA] mb-2">Lifestyle</h3>
<div className="w-8 h-[1px] bg-[#C5A059] mb-4"></div>
<p className="text-sm font-light text-[#F5F2EA]/70 max-w-xs">Travel &amp; Art. Une signature visuelle aventurière et esthétique.</p>
<span className="mt-6 text-[#C5A059] text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">Voir le portfolio</span>
</div>
</a>
</div>
</div>
</section>

<section className="py-32 relative border-t border-[#F5F2EA]/5" id="philosophy">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="fade-up relative">

<div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-[#C5A059]/30"></div>
<div className="relative aspect-[4/5] rounded-sm overflow-hidden">
<img alt="Filmmaker" className="w-full h-full object-cover grayscale opacity-90" src="https://images.unsplash.com/photo-1533512930330-4ac257c86793?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-[#C5A059]/30"></div>
</div>
<div className="fade-up">
<span className="text-[#C5A059] font-mono text-[10px] uppercase tracking-[0.3em] mb-6 block">01 / La Vision</span>
<h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#F5F2EA] mb-8 leading-tight">
                        Architecte de Mémoire <br/>
<span className="text-[#F5F2EA]/50">&amp; Réalisateur</span>
</h2>
<p className="text-[#F5F2EA]/80 font-light leading-relaxed mb-8 text-lg">
                        "La mémoire s'efface en deux générations. Nous la rendons éternelle."
                    </p>
<p className="text-[#F5F2EA]/60 font-light leading-relaxed mb-10">
                        Dans un monde où tout s'efface, je capture l'essence des hommes et des lieux. Mon approche mélange le documentaire intime et la cinématographie grand format. Pas de mise en scène forcée, juste la beauté du réel sublimée par la lumière.
                    </p>
<div className="flex gap-12 border-t border-[#F5F2EA]/10 pt-8">
<div>
<span className="block text-3xl font-serif text-[#C5A059] mb-1">50+</span>
<span className="text-[10px] text-[#F5F2EA]/50 uppercase tracking-widest">Héritages sauvés</span>
</div>
<div>
<span className="block text-3xl font-serif text-[#C5A059] mb-1">10</span>
<span className="text-[10px] text-[#F5F2EA]/50 uppercase tracking-widest">Pays explorés</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0a1420]" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 fade-up">
<div>
<span className="text-[#C5A059] font-mono text-[10px] uppercase tracking-[0.3em] mb-2 block">02 / Portfolio</span>
<h2 className="text-4xl font-serif tracking-tight text-[#F5F2EA]">Lifestyle &amp; Travel</h2>
</div>
<div className="flex items-center gap-8 mt-6 md:mt-0">
<button className="text-[#C5A059] text-xs uppercase tracking-widest border-b border-[#C5A059] pb-1">All</button>
<button className="text-[#F5F2EA]/40 text-xs uppercase tracking-widest hover:text-[#F5F2EA] transition-colors pb-1">Underwater</button>
<button className="text-[#F5F2EA]/40 text-xs uppercase tracking-widest hover:text-[#F5F2EA] transition-colors pb-1">Safari</button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer fade-up">
<img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-8 left-8">
<p className="text-[#C5A059] text-[10px] font-mono uppercase tracking-widest mb-2">Deep Ocean</p>
<h3 className="text-2xl font-serif text-[#F5F2EA]">Abysses</h3>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer fade-up" style={{transitionDelay: '0.1s'}}>
<img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&amp;w=2936&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-8 left-8">
<p className="text-[#C5A059] text-[10px] font-mono uppercase tracking-widest mb-2">Safari</p>
<h3 className="text-2xl font-serif text-[#F5F2EA]">Tanzania</h3>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer fade-up" style={{transitionDelay: '0.2s'}}>
<img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-8 left-8">
<p className="text-[#C5A059] text-[10px] font-mono uppercase tracking-widest mb-2">Luxury Hotel</p>
<h3 className="text-2xl font-serif text-[#F5F2EA]">The Palace</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-0 border border-[#F5F2EA]/10 bg-[#0F1C2E]">

<div className="group p-16 border-b md:border-b-0 md:border-r border-[#F5F2EA]/10 hover:bg-[#F5F2EA]/[0.02] transition-colors fade-up">
<div className="w-12 h-12 bg-[#0F1C2E] rounded-full flex items-center justify-center mb-8 border border-[#C5A059]/30 group-hover:border-[#C5A059] transition-colors">
<iconify-icon className="text-[#C5A059]" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif text-[#F5F2EA] mb-4">L'Héritage Familial</h3>
<p className="text-sm text-[#F5F2EA]/60 leading-relaxed mb-8">
                        Biographies vidéo et capsules temporelles. Nous organisons une "Co-Interview" unique entre générations pour capturer la complicité et les souvenirs.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-xs text-[#F5F2EA]/80 uppercase tracking-wide">
<iconify-icon className="text-[#C5A059]" icon="solar:check-circle-linear"></iconify-icon> Interview Guidée
                        </li>
<li className="flex items-center gap-3 text-xs text-[#F5F2EA]/80 uppercase tracking-wide">
<iconify-icon className="text-[#C5A059]" icon="solar:check-circle-linear"></iconify-icon> Archives Numérisées
                        </li>
<li className="flex items-center gap-3 text-xs text-[#F5F2EA]/80 uppercase tracking-wide">
<iconify-icon className="text-[#C5A059]" icon="solar:check-circle-linear"></iconify-icon> Qualité Cinéma
                        </li>
</ul>
<a className="inline-block text-[#C5A059] text-xs font-bold uppercase tracking-widest border-b border-[#C5A059]/30 pb-1 hover:border-[#C5A059]" href="#">En savoir plus</a>
</div>

<div className="group p-16 hover:bg-[#F5F2EA]/[0.02] transition-colors fade-up" style={{transitionDelay: '0.1s'}}>
<div className="w-12 h-12 bg-[#0F1C2E] rounded-full flex items-center justify-center mb-8 border border-[#C5A059]/30 group-hover:border-[#C5A059] transition-colors">
<iconify-icon className="text-[#C5A059]" icon="solar:case-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif text-[#F5F2EA] mb-4">Corporate Legacy</h3>
<p className="text-sm text-[#F5F2EA]/60 leading-relaxed mb-8">
                        Films d'anniversaire d'entreprise et portraits de fondateurs. Transformez votre histoire et vos valeurs en un actif marketing puissant et luxueux.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-xs text-[#F5F2EA]/80 uppercase tracking-wide">
<iconify-icon className="text-[#C5A059]" icon="solar:check-circle-linear"></iconify-icon> Brand Heritage
                        </li>
<li className="flex items-center gap-3 text-xs text-[#F5F2EA]/80 uppercase tracking-wide">
<iconify-icon className="text-[#C5A059]" icon="solar:check-circle-linear"></iconify-icon> Founder's Portrait
                        </li>
<li className="flex items-center gap-3 text-xs text-[#F5F2EA]/80 uppercase tracking-wide">
<iconify-icon className="text-[#C5A059]" icon="solar:check-circle-linear"></iconify-icon> Brand Content Luxe
                        </li>
</ul>
<a className="inline-block text-[#C5A059] text-xs font-bold uppercase tracking-widest border-b border-[#C5A059]/30 pb-1 hover:border-[#C5A059]" href="#">Discuter d'un projet</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-[#F5F2EA]/5" id="journal">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12 fade-up">
<h2 className="text-3xl font-serif text-[#F5F2EA]">Le Journal</h2>
<a className="text-[#C5A059] text-xs uppercase tracking-widest hover:text-[#F5F2EA]" href="#">Lire tout</a>
</div>
<div className="grid md:grid-cols-3 gap-8">
<article className="group cursor-pointer fade-up">
<div className="overflow-hidden mb-6 aspect-video rounded-sm">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-[#C5A059] text-[10px] uppercase tracking-widest block mb-2">Conseil</span>
<h3 className="text-lg font-serif text-[#F5F2EA] group-hover:text-[#C5A059] transition-colors">5 questions à poser à vos grands-parents</h3>
</article>
<article className="group cursor-pointer fade-up" style={{transitionDelay: '0.1s'}}>
<div className="overflow-hidden mb-6 aspect-video rounded-sm">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-[#C5A059] text-[10px] uppercase tracking-widest block mb-2">Business</span>
<h3 className="text-lg font-serif text-[#F5F2EA] group-hover:text-[#C5A059] transition-colors">Pourquoi le Storytelling est la clé du Luxe</h3>
</article>
<article className="group cursor-pointer fade-up" style={{transitionDelay: '0.2s'}}>
<div className="overflow-hidden mb-6 aspect-video rounded-sm">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=2942&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-[#C5A059] text-[10px] uppercase tracking-widest block mb-2">Backstage</span>
<h3 className="text-lg font-serif text-[#F5F2EA] group-hover:text-[#C5A059] transition-colors">Dans les coulisses de mon tournage au Laos</h3>
</article>
</div>
</div>
</section>

<section className="py-32 relative bg-[#0a1420] border-t border-[#F5F2EA]/5" id="contact">
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 fade-up">
<h2 className="text-5xl md:text-6xl font-serif text-[#F5F2EA] mb-6">
                    Laisser une trace.
                </h2>
<p className="text-[#F5F2EA]/60 font-light text-lg">
                    Discutons de votre projet, qu'il soit familial, corporate ou artistique.
                </p>
</div>
<div className="bg-[#0F1C2E] p-12 border border-[#F5F2EA]/10 rounded-sm shadow-2xl fade-up">
<form className="space-y-10">
<div className="grid md:grid-cols-2 gap-10">
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-[#F5F2EA]/20 py-3 text-[#F5F2EA] focus:outline-none focus:border-[#C5A059] transition-colors placeholder-transparent" id="name" placeholder="Nom" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs text-[#C5A059] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#F5F2EA]/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#C5A059]" htmlFor="name">Votre Nom</label>
</div>
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-[#F5F2EA]/20 py-3 text-[#F5F2EA] focus:outline-none focus:border-[#C5A059] transition-colors placeholder-transparent" id="email" placeholder="Email" type="email"/>
<label className="absolute left-0 -top-3.5 text-xs text-[#C5A059] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#F5F2EA]/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#C5A059]" htmlFor="email">Email</label>
</div>
</div>
<div className="group relative">
<select className="peer w-full bg-transparent border-b border-[#F5F2EA]/20 py-3 text-[#F5F2EA] focus:outline-none focus:border-[#C5A059] transition-colors appearance-none" id="project">
<option className="bg-[#0F1C2E]" disabled="" selected="" value="">Type de projet</option>
<option className="bg-[#0F1C2E]" value="heritage">Héritage Familial</option>
<option className="bg-[#0F1C2E]" value="corporate">Corporate / Marque</option>
<option className="bg-[#0F1C2E]" value="collab">Collaboration / Autre</option>
</select>
<iconify-icon className="absolute right-0 top-3 text-[#F5F2EA]/40 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="group relative">
<textarea className="peer w-full bg-transparent border-b border-[#F5F2EA]/20 py-3 text-[#F5F2EA] focus:outline-none focus:border-[#C5A059] transition-colors placeholder-transparent resize-none" id="message" placeholder="Message" rows="3"></textarea>
<label className="absolute left-0 -top-3.5 text-xs text-[#C5A059] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#F5F2EA]/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#C5A059]" htmlFor="message">Parlez-nous de votre projet...</label>
</div>
<div className="text-center pt-6">
<button className="px-12 py-4 bg-[#C5A059] text-[#0F1C2E] font-semibold uppercase tracking-widest hover:bg-[#D4B372] transition-all inline-flex items-center gap-3 group rounded-sm">
                            Envoyer
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:plain-3-linear" width="18"></iconify-icon>
</button>
</div>
</form>
</div>
<div className="mt-16 flex justify-center gap-10 text-[#F5F2EA]/60">
<a className="hover:text-[#C5A059] transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="24"></iconify-icon></a>
<a className="hover:text-[#C5A059] transition-colors" href="#"><iconify-icon icon="brands:instagram" width="24"></iconify-icon></a>
<a className="hover:text-[#C5A059] transition-colors" href="#"><iconify-icon icon="brands:linkedin" width="24"></iconify-icon></a>
</div>
</div>
</section>

<footer className="bg-[#050b14] py-12 border-t border-[#F5F2EA]/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<a className="text-xl font-serif tracking-widest uppercase text-[#F5F2EA] flex items-center gap-2" href="#">
                AGENCE SILLAGE<span className="text-[#C5A059]">.</span>
</a>
<div className="text-[#F5F2EA]/40 text-[10px] uppercase tracking-widest flex gap-6">
<a className="hover:text-[#F5F2EA]" href="#">Mentions Légales</a>
<a className="hover:text-[#F5F2EA]" href="#">CGV</a>
</div>
</div>
</footer>


    </>
  );
}
