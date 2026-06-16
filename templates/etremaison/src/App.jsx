import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize Icons
      lucide.createIcons();

      // Intersection Observer for Fade-in effects
      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.1
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                      observer.unobserve(entry.target); 
                  }
              });
          }, observerOptions);

          const revealElements = document.querySelectorAll('.reveal');
          revealElements.forEach(el => observer.observe(el));
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-stone-900/10 border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="text-stone-100 font-serif-text text-xl italic font-medium tracking-tight">
          Être &amp; Maison
        </div>
<div className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-stone-200 font-medium">
<a className="hover:text-white transition-colors" href="#fonctionnalites">Services</a>
<a className="hover:text-white transition-colors" href="#galerie">Réalisations</a>
<a className="hover:text-white transition-colors" href="#equipe">L'Équipe</a>
</div>
<button className="hidden md:flex bg-stone-100 text-stone-900 px-5 py-2 rounded-full text-xs font-semibold tracking-wide hover:bg-white transition-colors">
          Consultation Gratuite
        </button>

<button className="md:hidden text-stone-100">
<svg className="lucide lucide-menu w-6 h-6 stroke-[1.5]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center text-center py-8 z-10">
<div className="absolute inset-0 -z-10 bg-stone-900">
<img alt="Interior Design" className="w-full h-full object-cover opacity-60 animate-ken-burns" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-transparent to-stone-900/80"></div>
</div>
<div className="flex flex-col max-w-4xl mt-16 pr-4 pl-4 items-center justify-center">
<span className="text-stone-200 text-xs tracking-[0.2em] uppercase font-medium mb-6 reveal active border border-white/30 px-3 py-1 rounded-full backdrop-blur-md shadow-sm">
          Design &amp; Bien-être
        </span>
<h1 className="md:text-8xl leading-[0.9] reveal delay-100 active text-6xl font-medium italic text-white tracking-tighter font-serif-text drop-shadow-lg mb-6">
          Votre maison,<br className=""/>
          votre sanctuaire.
        </h1>
<p className="text-white text-lg md:text-xl font-light tracking-wide max-w-xl reveal delay-200 mb-10 leading-relaxed active drop-shadow-md text-shadow-sm">
          Nous transformons votre espace de vie pour allier esthétique intemporelle et sécurité invisible.
        </p>
<a className="group relative inline-flex items-center justify-center px-8 py-4 bg-stone-100 text-stone-900 rounded-full overflow-hidden transition-transform hover:scale-105 reveal delay-300 active shadow-lg hover:shadow-xl" href="#contact">
<span className="relative text-sm font-semibold tracking-wide z-10">Réserver une consultation gratuite</span>
<div className="absolute inset-0 bg-white/50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
</a>
</div>
</section>


<section className="overflow-hidden bg-[#F5F4F0] pt-32 pr-6 pb-32 pl-6 relative" id="fonctionnalites">
<div className="max-w-7xl mx-auto relative z-10">

<div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 reveal">
<div className="max-w-2xl">
<span className="inline-block py-1 px-3 rounded-full bg-stone-200/50 border border-stone-300/50 text-xs font-semibold tracking-widest uppercase text-stone-600 mb-6 backdrop-blur-sm">Notre Expertise</span>
<h2 className="font-serif-display text-4xl md:text-6xl text-stone-900 leading-[0.95] tracking-tight">
                    L'harmonie entre<span className="italic text-stone-500 font-serif-text">esthétique</span> et autonomie.
                </h2>
</div>
<p className="text-stone-500 text-sm font-light leading-relaxed max-w-xs border-l border-stone-300 pl-6 hidden md:block">
                Une méthodologie unique qui fusionne l'exigence du design d'intérieur avec la rigueur clinique de l'ergothérapie.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-white p-10 rounded-[2rem] border border-stone-200/60 shadow-[0_2px_10px_-4px_rgba(28,25,23,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(28,25,23,0.1)] transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden reveal delay-100">
<div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-stone-100/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-16 h-16 rounded-2xl bg-[#F5F4F0] border border-stone-200 flex items-center justify-center mb-8 group-hover:bg-stone-900 group-hover:border-stone-900 group-hover:scale-110 transition-all duration-500">
<svg className="lucide lucide-pen-tool w-7 h-7 text-stone-900 group-hover:text-white transition-colors duration-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path className="" d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="font-serif-display text-3xl text-stone-900 mb-4 group-hover:tracking-wide transition-all duration-500">Design Sur-Mesure</h3>
<p className="text-stone-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                        Des intérieurs uniques conçus pour refléter votre personnalité tout en anticipant vos besoins futurs.
                    </p>
<div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-stone-900 pt-6 border-t border-stone-100 group-hover:border-stone-200 transition-colors duration-500">
<span>Découvrir</span>
<div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center group-hover:translate-x-2 group-hover:bg-stone-900 group-hover:text-white transition-all duration-300">
<svg className="lucide lucide-arrow-right" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="group relative bg-white p-10 rounded-[2rem] border border-stone-200/60 shadow-[0_2px_10px_-4px_rgba(28,25,23,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(28,25,23,0.1)] transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden reveal delay-200">
<div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-stone-100/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-16 h-16 rounded-2xl bg-[#F5F4F0] border border-stone-200 flex items-center justify-center mb-8 group-hover:bg-stone-900 group-hover:border-stone-900 group-hover:scale-110 transition-all duration-500">
<svg className="lucide lucide-heart-handshake w-7 h-7 text-stone-900 group-hover:text-white transition-colors duration-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<h3 className="font-serif-display text-3xl text-stone-900 mb-4 group-hover:tracking-wide transition-all duration-500">Expertise Médicale</h3>
<p className="text-stone-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                         Une analyse clinique de vos habitudes pour une sécurité domestique sans compromis médical.
                    </p>
<div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-stone-900 pt-6 border-t border-stone-100 group-hover:border-stone-200 transition-colors duration-500">
<span>En savoir plus</span>
<div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center group-hover:translate-x-2 group-hover:bg-stone-900 group-hover:text-white transition-all duration-300">
<svg className="lucide lucide-arrow-right" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="group relative bg-white p-10 rounded-[2rem] border border-stone-200/60 shadow-[0_2px_10px_-4px_rgba(28,25,23,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(28,25,23,0.1)] transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden reveal delay-300">
<div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-stone-100/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-16 h-16 rounded-2xl bg-[#F5F4F0] border border-stone-200 flex items-center justify-center mb-8 group-hover:bg-stone-900 group-hover:border-stone-900 group-hover:scale-110 transition-all duration-500">
<svg className="lucide lucide-sparkles w-7 h-7 text-stone-900 group-hover:text-white transition-colors duration-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="font-serif-display text-3xl text-stone-900 mb-4 group-hover:tracking-wide transition-all duration-500">Esthétique &amp; Accessible</h3>
<p className="text-stone-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                        Des solutions d'adaptation invisibles qui subliment votre intérieur au lieu de le médicaliser.
                    </p>
<div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-stone-900 pt-6 border-t border-stone-100 group-hover:border-stone-200 transition-colors duration-500">
<span>Voir les projets</span>
<div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center group-hover:translate-x-2 group-hover:bg-stone-900 group-hover:text-white transition-all duration-300">
<svg className="lucide lucide-arrow-right" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="md:px-12 flex flex-col md:flex-row gap-16 overflow-hidden bg-stone-100 pt-24 pr-6 pb-24 pl-6 gap-x-16 gap-y-16 items-center">
<div className="w-full md:w-1/2 reveal">
<div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
<img alt="Ergonomic Detail" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg">
<p className="text-xs uppercase tracking-widest font-semibold text-stone-800">Détail : Barres d'appui intégrées</p>
</div>
</div>
</div>
<div className="w-full md:w-1/2 space-y-8 reveal delay-100">
<span className="text-xs font-semibold tracking-widest uppercase text-stone-500 border-b border-stone-300 pb-1 inline-block">Notre Différence</span>
<h2 className="font-serif-text text-5xl md:text-6xl text-stone-900 tracking-tight leading-none">
                Au-delà du beau,
                <span className="italic text-stone-500">le fonctionnel.</span>
</h2>
<p className="text-stone-600 text-lg font-light leading-relaxed">
                L'ergothérapie n'est pas une option, c'est le fondement de notre approche. Contrairement aux décorateurs classiques, nous analysons la biomécanique de vos mouvements pour créer des espaces qui facilitent chaque geste du quotidien, réduisant la fatigue et prévenant les chutes, sans jamais sacrifier l'élégance.
            </p>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-3 text-stone-700 font-medium">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-stone-400 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                    Circulation fluide et intuitive
                </li>
<li className="flex items-center gap-3 text-stone-700 font-medium">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-stone-400 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                    Éclairage adapté à la vision
                </li>
<li className="flex items-center gap-3 text-stone-700 font-medium">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-stone-400 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                    Matériaux antidérapants et luxueux
                </li>
</ul>
</div>
</section>

<section className="py-24 bg-[#F5F4F0] border-t border-stone-200" id="galerie">
<div className="px-6 md:px-12 mb-16 text-center reveal">
<h2 className="font-serif-display text-4xl md:text-5xl text-stone-900 mb-4">Métamorphoses</h2>
<p className="text-stone-500 italic font-serif-text">Le pouvoir du design adapté</p>
</div>
<div className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-12 snap-x snap-mandatory no-scrollbar">

<div className="min-w-[85vw] md:min-w-[45vw] snap-center flex flex-col gap-4 reveal">
<div className="grid grid-cols-2 gap-2 h-[400px]">
<div className="relative group overflow-hidden rounded-l-2xl">
<img alt="Before" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-stone-900/80 text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded">Avant</span>
</div>
<div className="relative group overflow-hidden rounded-r-2xl">
<img alt="After" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="absolute top-4 right-4 bg-white/90 text-stone-900 text-[10px] uppercase tracking-widest px-2 py-1 rounded shadow-sm">Après</span>
</div>
</div>
<div className="flex justify-between items-end px-2">
<div>
<h4 className="font-serif-text text-xl text-stone-900">Salle de Bain Master</h4>
<p className="text-stone-500 text-xs">Projet Résidence Mont-Royal</p>
</div>
<svg className="lucide lucide-arrow-right w-5 h-5 text-stone-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[45vw] snap-center flex flex-col gap-4 reveal delay-100">
<div className="grid grid-cols-2 gap-2 h-[400px]">
<div className="relative group overflow-hidden rounded-l-2xl">
<img alt="Before" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<span className="absolute top-4 left-4 bg-stone-900/80 text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded">Avant</span>
</div>
<div className="relative group overflow-hidden rounded-r-2xl">
<img alt="After" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 right-4 bg-white/90 text-stone-900 text-[10px] uppercase tracking-widest px-2 py-1 rounded shadow-sm">Après</span>
</div>
</div>
<div className="flex justify-between items-end px-2">
<div>
<h4 className="font-serif-text text-xl text-stone-900">Cuisine Ergonomique</h4>
<p className="text-stone-500 text-xs">Projet Loft St-Henri</p>
</div>
<svg className="lucide lucide-arrow-right w-5 h-5 text-stone-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-[#F5F4F0] overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-serif-display text-4xl mb-16 text-center reveal">Histoires de Vie</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700 reveal">
<div className="flex gap-1 mb-4 text-stone-400">
<svg className="lucide lucide-star w-4 h-4 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="font-serif-text italic text-lg leading-relaxed mb-6 opacity-90">
                        "Je pensais devoir déménager. Grâce à Julie, ma maison est non seulement plus sûre, mais elle n'a jamais été aussi belle."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-stone-600 overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-widest">Martine D.</p>
<p className="text-[10px] text-stone-500">72 ans, Bordeaux</p>
</div>
</div>
</div>

<div className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700 reveal delay-100">
<div className="flex gap-1 mb-4 text-stone-400">
<svg className="lucide lucide-star w-4 h-4 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="font-serif-text italic text-lg leading-relaxed mb-6 opacity-90">
                        "L'approche d'ergothérapeute change tout. Chaque détail a un sens. Une rénovation intelligente pour mes parents."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-stone-600 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-widest">Thomas L.</p>
<p className="text-[10px] text-stone-500">45 ans, Paris</p>
</div>
</div>
</div>

<div className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700 reveal delay-200">
<div className="flex gap-1 mb-4 text-stone-400">
<svg className="lucide lucide-star w-4 h-4 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="font-serif-text italic text-lg leading-relaxed mb-6 opacity-90">
                        "Un service clé en main rassurant. Le résultat est bluffant, on ne soupçonne pas les aménagements PMR."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-stone-600 overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-widest">Sophie M.</p>
<p className="text-[10px] text-stone-500">68 ans, Lyon</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#EBE9E4]">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16 reveal">
<h3 className="font-serif-display text-4xl md:text-5xl text-stone-900 mb-2">Le Processus</h3>
<p className="text-stone-500 italic font-serif-text">Simple, clair et humain</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="relative flex flex-col items-center text-center reveal">
<div className="w-12 h-12 rounded-full bg-stone-900 text-[#EBE9E4] flex items-center justify-center font-serif-display text-xl mb-4 z-10">1</div>
<div className="absolute top-6 left-1/2 w-full h-px bg-stone-300 hidden md:block -z-0"></div>
<h4 className="font-bold text-sm uppercase tracking-widest text-stone-800 mb-2">Contact</h4>
<p className="text-xs text-stone-500 leading-relaxed px-2">Premier échange pour définir vos attentes.</p>
</div>

<div className="relative flex flex-col items-center text-center reveal delay-100">
<div className="w-12 h-12 rounded-full bg-white border border-stone-300 text-stone-900 flex items-center justify-center font-serif-display text-xl mb-4 z-10">2</div>
<div className="absolute top-6 left-1/2 w-full h-px bg-stone-300 hidden md:block -z-0"></div>
<h4 className="font-bold text-sm uppercase tracking-widest text-stone-800 mb-2">Évaluation</h4>
<p className="text-xs text-stone-500 leading-relaxed px-2">Audit complet de votre domicile et besoins.</p>
</div>

<div className="relative flex flex-col items-center text-center reveal delay-200">
<div className="w-12 h-12 rounded-full bg-white border border-stone-300 text-stone-900 flex items-center justify-center font-serif-display text-xl mb-4 z-10">3</div>
<div className="absolute top-6 left-1/2 w-full h-px bg-stone-300 hidden md:block -z-0"></div>
<h4 className="font-bold text-sm uppercase tracking-widest text-stone-800 mb-2">Conception</h4>
<p className="text-xs text-stone-500 leading-relaxed px-2">Plans 3D et sélection des matériaux.</p>
</div>

<div className="relative flex flex-col items-center text-center reveal delay-300">
<div className="w-12 h-12 rounded-full bg-white border border-stone-300 text-stone-900 flex items-center justify-center font-serif-display text-xl mb-4 z-10">4</div>
<h4 className="font-bold text-sm uppercase tracking-widest text-stone-800 mb-2">Réalisation</h4>
<p className="text-xs text-stone-500 leading-relaxed px-2">Suivi de chantier jusqu'à la livraison.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-stone-200 flex justify-center items-center" id="contact">
<div className="w-full max-w-lg bg-[#F5F4F0] rounded-3xl shadow-2xl overflow-hidden reveal">
<div className="bg-stone-900 p-6 flex justify-between items-center text-stone-100">
<span className="uppercase tracking-widest text-xs font-semibold">Carte d'embarquement</span>
<svg className="lucide lucide-plane w-5 h-5 stroke-[1.5]" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>
<div className="p-10 text-center">
<p className="font-serif-text italic text-2xl text-stone-800 mb-2">Votre futur commence ici.</p>
<p className="text-stone-500 text-sm mb-8">Ne laissez pas votre environnement limiter votre vie.</p>
<button className="w-full py-4 bg-stone-900 text-white font-medium rounded-xl hover:bg-stone-800 transition-colors flex justify-center items-center gap-3 group shadow-lg">
<span>Réserver une consultation gratuite</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-[10px] text-stone-400 mt-4 uppercase tracking-wider">Sans engagement • Durée : 30 min</p>
</div>

<div className="relative h-4 bg-[#F5F4F0]">
<div className="absolute bottom-0 w-full border-b-2 border-dashed border-stone-300"></div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-stone-900 text-stone-200 border-t border-stone-800">
<div className="max-w-2xl mx-auto text-center reveal">
<svg className="lucide lucide-mail-open w-8 h-8 mx-auto mb-4 stroke-[1] text-stone-400" data-lucide="mail-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path></svg>
<h3 className="font-serif-display text-3xl md:text-4xl mb-2 text-stone-50">L'Art du Bien-Vieillir</h3>
<p className="text-stone-400 text-sm mb-8 font-light">Recevez nos conseils d'experts et inspirations design directement dans votre boîte mail.</p>
<form className="flex flex-col md:flex-row gap-2">
<input className="flex-grow bg-stone-800 border border-stone-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-stone-500 placeholder-stone-500 text-sm font-light" placeholder="Votre adresse email" type="email"/>
<button className="bg-stone-100 text-stone-900 px-6 py-3 rounded-lg font-medium text-sm hover:bg-white transition-colors" type="button">S'inscrire</button>
</form>
</div>
</section>

<section className="py-24 px-6 bg-[#F5F4F0] max-w-3xl mx-auto">
<h2 className="font-serif-display text-4xl text-center mb-12 text-stone-900 reveal">Questions Fréquentes</h2>
<div className="space-y-4 reveal delay-100">

<details className="group bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center p-6 font-medium text-stone-800">
                    Comment se déroule la première consultation ?
                    <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-stone-400 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-stone-500 font-light leading-relaxed">
                    C'est un échange visio ou téléphonique de 30 minutes pour comprendre vos besoins et voir si notre accompagnement correspond à vos attentes. C'est gratuit et sans engagement.
                </div>
</details>

<details className="group bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center p-6 font-medium text-stone-800">
                    Intervenez-vous partout en France ?
                    <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-stone-400 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-stone-500 font-light leading-relaxed">
                    Oui, nous travaillons à distance pour la conception et avons un réseau d'artisans partenaires dans les grandes métropoles pour la réalisation.
                </div>
</details>

<details className="group bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center p-6 font-medium text-stone-800">
                    Est-ce éligible aux aides (MaPrimeAdapt') ?
                    <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-stone-400 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-stone-500 font-light leading-relaxed">
                    Absolument. En tant qu'ergothérapeutes diplômés, nos préconisations s'intègrent parfaitement dans les dossiers de demande de financement.
                </div>
</details>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white flex flex-col md:flex-row items-center gap-12" id="equipe">
<div className="w-full md:w-1/3 reveal">
<div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-stone-100 p-2 bg-[#F5F4F0]">
<img alt="Julie Portrait" className="w-full h-full object-cover grayscale contrast-125" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="w-full md:w-2/3 space-y-6 reveal delay-100">
<p className="text-xs font-semibold tracking-widest uppercase text-stone-500">La Fondatrice</p>
<h2 className="font-serif-display text-5xl text-stone-900">Julie Delacour</h2>
<p className="font-serif-text italic text-xl text-stone-600">Designer d'intérieur &amp; Ergothérapeute D.E.</p>
<p className="text-stone-600 font-light leading-relaxed max-w-xl">
                "J'ai fondé Être &amp; Maison avec une conviction simple : personne ne devrait avoir à choisir entre la sécurité et la beauté. Après 10 ans en milieu hospitalier, j'ai voulu apporter mon expertise médicale au cœur de foyers chaleureux et design."
            </p>
<div className="pt-4">
<img alt="Signature" className="h-12 opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
</div>
</section>

<section className="text-center bg-[#F5F4F0] pt-24 pr-6 pb-24 pl-6">
<div className="max-w-3xl mx-auto reveal">
<svg className="lucide lucide-quote w-8 h-8 text-stone-300 mx-auto mb-6 fill-stone-300 stroke-none" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<h2 className="font-serif-text text-3xl md:text-4xl text-stone-800 leading-tight mb-6">
                Notre mission est d'accompagner chaque étape de votre vie avec dignité et élégance, en faisant de votre habitat votre meilleur allié santé.
            </h2>
<div className="w-24 h-px bg-stone-300 mx-auto mt-8"></div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-16 px-6 border-t border-stone-800">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm font-light">
<div className="md:col-span-1 space-y-4">
<h4 className="text-stone-100 font-serif-text text-xl italic">Être &amp; Maison</h4>
<p className="leading-relaxed">Design accessible pour<br/>une vie sans limites.</p>
</div>
<div>
<h5 className="text-stone-100 uppercase tracking-widest text-xs font-semibold mb-4">Navigation</h5>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Accueil</a></li>
<li><a className="hover:text-white transition-colors" href="#fonctionnalites">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#galerie">Projets</a></li>
</ul>
</div>
<div>
<h5 className="text-stone-100 uppercase tracking-widest text-xs font-semibold mb-4">Légal</h5>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Mentions Légales</a></li>
<li><a className="hover:text-white transition-colors" href="#">Politique de Confidentialité</a></li>
<li><a className="hover:text-white transition-colors" href="#">CGV</a></li>
</ul>
</div>
<div>
<h5 className="text-stone-100 uppercase tracking-widest text-xs font-semibold mb-4">Social</h5>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5 stroke-[1.5]" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5 stroke-[1.5]" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5 stroke-[1.5]" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 text-center text-xs text-stone-600 uppercase tracking-widest">
        © 2024 Être &amp; Maison. Tous droits réservés.
      </div>
</footer>


    </>
  );
}
