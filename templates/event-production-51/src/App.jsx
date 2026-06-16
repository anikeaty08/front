import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
display: ['Syne', 'sans-serif'],
},
colors: {
dark: '#050505',
light: '#EAEAEA',
accent: '#3B82F6' // Subtle blue for tech feel
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        // --- SETUP ---
        gsap.registerPlugin(ScrollTrigger);

        // --- LENIS SMOOTH SCROLL ---
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // --- CUSTOM CURSOR ---
        const cursor = document.querySelector('.custom-cursor');
        
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
        });

        document.querySelectorAll('a, button, .service-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursor, { scale: 3, backgroundColor: 'white', mixBlendMode: 'difference', duration: 0.3 });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(cursor, { scale: 1, backgroundColor: 'transparent', mixBlendMode: 'difference', duration: 0.3 });
            });
        });

        // --- LOADER & INTRO ---
        window.addEventListener('load', () => {
            const tl = gsap.timeline();
            
            // Loader Animation
            tl.to('.loader-text', {
                y: 0,
                duration: 1,
                ease: 'power4.out',
                delay: 0.2
            })
            .to('.loader-text', {
                y: "-100%",
                duration: 0.8,
                ease: 'power4.in',
                delay: 0.5
            })
            .to('#loader', {
                height: 0,
                duration: 1,
                ease: 'power4.inOut'
            })
            .to('body', { opacity: 1, duration: 0.1 }, "-=1") // Show body content
            
            // Hero Animations
            .to('.hero-title', {
                y: 0,
                stagger: 0.1,
                duration: 1.5,
                ease: 'power4.out'
            }, "-=0.5")
            .to('.hero-sub', {
                y: 0,
                duration: 1,
                ease: 'power2.out'
            }, "-=1")
            .to('.hero-fade', {
                opacity: 1,
                duration: 1
            }, "-=0.5");
        });

        // --- SCROLL ANIMATIONS ---
        
        // Split Text Reveal
        const splitText = document.querySelector('.split-reveal');
        if(splitText) {
            const text = splitText.textContent;
            splitText.innerHTML = '';
            text.split(' ').forEach(word => {
                const span = document.createElement('span');
                span.innerHTML = `<span class="inline-block translate-y-full opacity-0 reveal-word">${word}&nbsp;</span>`;
                span.className = 'inline-block overflow-hidden align-top';
                splitText.appendChild(span);
            });
            
            gsap.to('.reveal-word', {
                y: 0,
                opacity: 1,
                stagger: 0.02,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.split-reveal',
                    start: 'top 80%',
                }
            });
        }

        // Service Cards Stacking Effect
        const cards = gsap.utils.toArray('.service-card');
        cards.forEach((card, i) => {
            const inner = card.querySelector('div'); // The inner card container
            
            gsap.fromTo(inner, 
                { scale: 1 }, 
                { 
                    scale: 0.9, 
                    opacity: 0.5,
                    scrollTrigger: {
                        trigger: card,
                        start: "top top", 
                        end: "bottom top", 
                        scrub: true,
                        // Don't apply to the last card
                        endTrigger: cards[i+1] ? cards[i+1] : null 
                    } 
                }
            );
        });

        // Parallax Images
        gsap.utils.toArray('.img-mask img').forEach(img => {
            gsap.to(img, {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        });

        // Counter Animation
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            gsap.to(counter, {
                innerText: target,
                duration: 2,
                snap: { innerText: 1 },
                scrollTrigger: {
                    trigger: counter,
                    start: "top 85%",
                    once: true
                }
            });
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="custom-cursor hidden md:block"></div>

<div className="fixed inset-0 z-50 bg-black flex items-center justify-center" id="loader">
<div className="text-white font-display text-4xl md:text-6xl tracking-tight overflow-hidden">
<span className="block translate-y-full loader-text">NOVATION</span>
</div>
</div>

<nav className="fixed top-0 left-0 w-full z-40 p-6 md:p-10 flex justify-between items-center mix-blend-difference text-white">
<a className="font-display font-semibold text-xl tracking-tight uppercase group" href="#">
            Novation<span className="text-white/50">.Event</span>
</a>
<div className="hidden md:flex gap-12 text-xs font-semibold uppercase tracking-widest">
<a className="hover:opacity-50 transition-opacity" href="#expertise">Expertise</a>
<a className="hover:opacity-50 transition-opacity" href="#projets">Projets</a>
<a className="hover:opacity-50 transition-opacity" href="#studio">Le Studio</a>
</div>
<button className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all">
<span>Contact</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</nav>

<header className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-grid">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-40"></div>
<div className="z-10 text-center px-4">
<div className="overflow-hidden mb-2">
<p className="hero-sub text-xs md:text-sm uppercase tracking-[0.4em] text-white/60 translate-y-full">Prestataire Technique Événementiel</p>
</div>
<h1 className="font-display text-[13vw] leading-[0.85] font-medium tracking-tight uppercase mix-blend-overlay">
<div className="overflow-hidden"><span className="block translate-y-full hero-title">Lumière</span></div>
<div className="overflow-hidden"><span className="block translate-y-full hero-title text-white/20">&amp;</span></div>
<div className="overflow-hidden"><span className="block translate-y-full hero-title">Sonorité</span></div>
</h1>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 hero-fade">
<span className="text-[10px] uppercase tracking-widest">Scroll</span>
<div className="h-12 w-[1px] bg-gradient-to-b from-white to-transparent"></div>
</div>

<div className="absolute inset-0 -z-10">
<video autoplay="" className="w-full h-full object-cover opacity-20 grayscale brightness-50" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-lights-in-a-dark-concert-hall-4164-large.mp4" type="video/mp4"/>
</video>
</div>
</header>

<section className="py-32 px-6 md:px-12 max-w-7xl mx-auto" id="studio">
<div className="grid md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<span className="block w-2 h-2 bg-white mb-6 rounded-full"></span>
<h2 className="font-display text-2xl md:text-3xl font-medium leading-tight">
                    Nous transformons<br/>l'éphémère en<br/><span className="text-white/40">inoubliable.</span>
</h2>
</div>
<div className="md:col-span-8">
<p className="text-xl md:text-3xl leading-relaxed font-light text-white/80 split-reveal">
                    Spécialistes de la technique événementielle, nous orchestrons la lumière, le son et la vidéo pour sublimer vos espaces. De la conception scénographique à la réalisation technique, Novation Event est votre partenaire pour créer des expériences immersives.
                </p>
<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
<div>
<div className="text-3xl font-display mb-2 counter" data-target="150">0</div>
<div className="text-xs uppercase tracking-widest text-white/40">Événements / An</div>
</div>
<div>
<div className="text-3xl font-display mb-2 counter" data-target="12">0</div>
<div className="text-xs uppercase tracking-widest text-white/40">Années d'expertise</div>
</div>
<div>
<div className="text-3xl font-display mb-2 counter" data-target="4">0</div>
<div className="text-xs uppercase tracking-widest text-white/40">Pôles d'expertise</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative pb-32" id="expertise">
<div className="px-6 md:px-12 mb-20">
<h2 className="text-[8vw] font-display leading-none tracking-tight opacity-10 uppercase">Expertise</h2>
</div>
<div className="max-w-[1600px] mx-auto px-4">

<div className="sticky top-20 min-h-screen py-10 service-card">
<div className="bg-[#0f0f0f] border border-white/5 rounded-none md:rounded-3xl overflow-hidden h-[80vh] flex flex-col md:flex-row relative group">
<div className="p-8 md:p-16 md:w-1/2 flex flex-col justify-between z-10 bg-[#0f0f0f]/90 backdrop-blur-sm">
<div>
<span className="inline-block px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-widest mb-6">01 — Technique</span>
<h3 className="font-display text-4xl md:text-6xl mb-6">Sonorisation</h3>
<p className="text-white/60 font-light leading-relaxed max-w-md">
                                Une acoustique maîtrisée pour chaque espace. Du système de diffusion linéaire aux configurations complexes pour concerts et conférences, nous garantissons une clarté absolue.
                            </p>
<ul className="mt-8 space-y-2 text-sm text-white/40 font-mono">
<li className="flex items-center gap-2"><iconify-icon icon="solar:microphone-3-linear"></iconify-icon> Line Array Systems</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:soundwave-square-linear"></iconify-icon> Mixage Numérique</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:music-note-linear"></iconify-icon> Distribution Audio</li>
</ul>
</div>
<button className="mt-10 w-max text-xs uppercase tracking-widest border-b border-white hover:border-transparent transition-colors pb-1">En savoir plus</button>
</div>
<div className="absolute inset-0 md:relative md:w-1/2 h-full">
<img alt="Sound" className="w-full h-full object-cover opacity-40 md:opacity-100 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="sticky top-24 min-h-screen py-10 service-card">
<div className="bg-[#141414] border border-white/5 rounded-none md:rounded-3xl overflow-hidden h-[80vh] flex flex-col md:flex-row relative group shadow-2xl shadow-black">
<div className="p-8 md:p-16 md:w-1/2 flex flex-col justify-between z-10 bg-[#141414]/90 backdrop-blur-sm">
<div>
<span className="inline-block px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-widest mb-6">02 — Ambiance</span>
<h3 className="font-display text-4xl md:text-6xl mb-6">Mise en Lumière</h3>
<p className="text-white/60 font-light leading-relaxed max-w-md">
                                Création d'atmosphères visuelles. De l'éclairage architectural à la programmation de shows dynamiques, la lumière sculpte votre événement.
                            </p>
<ul className="mt-8 space-y-2 text-sm text-white/40 font-mono">
<li className="flex items-center gap-2"><iconify-icon icon="solar:lightbulb-bolt-linear"></iconify-icon> Lyres &amp; Automatiques</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:sun-2-linear"></iconify-icon> Éclairage Architectural</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:programming-linear"></iconify-icon> Design Lumière</li>
</ul>
</div>
<button className="mt-10 w-max text-xs uppercase tracking-widest border-b border-white hover:border-transparent transition-colors pb-1">En savoir plus</button>
</div>
<div className="absolute inset-0 md:relative md:w-1/2 h-full">
<img alt="Light" className="w-full h-full object-cover opacity-40 md:opacity-100 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="sticky top-28 min-h-screen py-10 service-card">
<div className="bg-[#1a1a1a] border border-white/5 rounded-none md:rounded-3xl overflow-hidden h-[80vh] flex flex-col md:flex-row relative group shadow-2xl shadow-black">
<div className="p-8 md:p-16 md:w-1/2 flex flex-col justify-between z-10 bg-[#1a1a1a]/90 backdrop-blur-sm">
<div>
<span className="inline-block px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-widest mb-6">03 — Structure &amp; Vidéo</span>
<h3 className="font-display text-4xl md:text-6xl mb-6">Scénographie</h3>
<p className="text-white/60 font-light leading-relaxed max-w-md">
                                L'ossature de votre projet. Structures scéniques sécurisées et diffusion vidéo haute résolution (Murs LED, Mapping) pour un impact visuel total.
                            </p>
<ul className="mt-8 space-y-2 text-sm text-white/40 font-mono">
<li className="flex items-center gap-2"><iconify-icon icon="solar:monitor-camera-linear"></iconify-icon> Murs LED &amp; Projection</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:layers-minimalistic-linear"></iconify-icon> Structures Truss</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:ruler-pen-linear"></iconify-icon> Scènes Modulaires</li>
</ul>
</div>
<button className="mt-10 w-max text-xs uppercase tracking-widest border-b border-white hover:border-transparent transition-colors pb-1">En savoir plus</button>
</div>
<div className="absolute inset-0 md:relative md:w-1/2 h-full">
<img alt="Stage" className="w-full h-full object-cover opacity-40 md:opacity-100 transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-white text-black rounded-t-[3rem] relative z-20" id="projets">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<div>
<p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Portfolio</p>
<h2 className="font-display text-4xl md:text-6xl font-semibold">Réalisations<br/>Récentes</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest hover:text-gray-600 transition-colors" href="#">
                Voir tous les projets <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

<div className="group cursor-pointer">
<div className="img-mask aspect-[4/3] w-full bg-gray-100 mb-6">
<img alt="Fashion Show" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex justify-between items-start border-b border-black/10 pb-4 group-hover:border-black transition-colors">
<div>
<h3 className="font-display text-xl md:text-2xl mb-1">Neon Fashion Week</h3>
<p className="text-xs uppercase tracking-widest text-gray-500">Paris • Lumière &amp; Son</p>
</div>
<span className="text-xs font-mono border border-black/20 px-2 py-1 rounded-full">2023</span>
</div>
</div>

<div className="group cursor-pointer md:mt-20">
<div className="img-mask aspect-[4/3] w-full bg-gray-100 mb-6">
<img alt="Corporate Event" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex justify-between items-start border-b border-black/10 pb-4 group-hover:border-black transition-colors">
<div>
<h3 className="font-display text-xl md:text-2xl mb-1">Tech Summit Global</h3>
<p className="text-xs uppercase tracking-widest text-gray-500">Lyon • Full Technique</p>
</div>
<span className="text-xs font-mono border border-black/20 px-2 py-1 rounded-full">2023</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="img-mask aspect-[4/3] w-full bg-gray-100 mb-6">
<img alt="Concert" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start border-b border-black/10 pb-4 group-hover:border-black transition-colors">
<div>
<h3 className="font-display text-xl md:text-2xl mb-1">Open Air Festival</h3>
<p className="text-xs uppercase tracking-widest text-gray-500">Marseille • Scène &amp; Son</p>
</div>
<span className="text-xs font-mono border border-black/20 px-2 py-1 rounded-full">2024</span>
</div>
</div>

<div className="group cursor-pointer md:mt-20">
<div className="img-mask aspect-[4/3] w-full bg-gray-100 mb-6">
<img alt="Gala" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start border-b border-black/10 pb-4 group-hover:border-black transition-colors">
<div>
<h3 className="font-display text-xl md:text-2xl mb-1">Gala Prestige</h3>
<p className="text-xs uppercase tracking-widest text-gray-500">Monaco • Ambiance</p>
</div>
<span className="text-xs font-mono border border-black/20 px-2 py-1 rounded-full">2024</span>
</div>
</div>
</div>
</section>

<footer className="relative bg-[#050505] text-white pt-32 pb-10 px-6 md:px-12 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-20 mb-32">
<div>
<h2 className="font-display text-5xl md:text-7xl font-semibold leading-none mb-8">
                        Parlons de<br/>votre projet.
                    </h2>
<a className="inline-flex items-center gap-4 text-xl md:text-2xl border-b border-white/20 pb-2 hover:text-gray-400 hover:border-white transition-all" href="mailto:contact@novation-event.com">
                        contact@novation-event.com
                        <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col justify-end">
<div className="grid grid-cols-2 gap-8 text-sm text-white/60">
<div>
<p className="text-white font-semibold mb-4 uppercase tracking-widest text-xs">Adresse</p>
<p>12 Rue de l'Industrie</p>
<p>75000 Paris, France</p>
</div>
<div>
<p className="text-white font-semibold mb-4 uppercase tracking-widest text-xs">Social</p>
<div className="flex flex-col gap-2">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Facebook</a>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/30">
<p>© 2024 Novation Event. Tous droits réservés.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Mentions Légales</a>
<a className="hover:text-white" href="#">Confidentialité</a>
</div>
</div>
<div className="mt-20">
<h1 className="text-[18vw] leading-none font-display font-bold text-center opacity-5 select-none pointer-events-none tracking-tighter text-white">NOVATION</h1>
</div>
</div>
</footer>


    </>
  );
}
