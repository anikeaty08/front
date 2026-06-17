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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
next: {
blue: '#061342',
lightBlue: '#1a2b6b',
yellow: '#FFB800',
accent: '#F59E0B',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        // 1. Initialize Icons
        lucide.createIcons();

        // 2. Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 100;
            
            revealElements.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Trigger once on load

        // 3. Number Counter Animation
        const counters = document.querySelectorAll('.counter');
        let hasAnimated = false;

        const animateCounters = () => {
            const statsSection = document.querySelector('.counter')?.closest('section');
            if (!statsSection) return;
            
            const sectionTop = statsSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100 && !hasAnimated) {
                hasAnimated = true;
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const increment = target / 50; 
                    
                    const updateCounter = () => {
                        const c = +counter.innerText;
                        if(c < target) {
                            counter.innerText = Math.ceil(c + increment);
                            setTimeout(updateCounter, 30);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCounter();
                });
            }
        };
        window.addEventListener('scroll', animateCounters);
    


        import createGlobe from 'https://cdn.skypack.dev/cobe';

        const canvas = document.getElementById("cobe");
        if(canvas) {
            let phi = 0;
            let width = 0;
            
            // Interaction variables
            let pointerInteractionMovement = 0;
            let pointerInteraction = false;
            
            const onResize = () => width = canvas.offsetWidth;
            window.addEventListener('resize', onResize);
            onResize();

            const globe = createGlobe(canvas, {
                devicePixelRatio: 2,
                width: 1200, // Render at high res
                height: 1200,
                phi: 0,
                theta: 0.3,
                dark: 0,
                diffuse: 1.2,
                mapSamples: 16000,
                mapBrightness: 6,
                baseColor: [1, 1, 1],
                markerColor: [1, 0.72, 0], // Next Yellow
                glowColor: [0.9, 0.9, 0.95],
                opacity: 1,
                markers: [
                    { location: [48.8566, 2.3522], size: 0.08 }, // Paris
                    { location: [40.7128, -74.0060], size: 0.05 }, // NY
                    { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo
                    { location: [51.5074, -0.1278], size: 0.05 }, // London
                    { location: [1.3521, 103.8198], size: 0.05 }, // Singapore
                ],
                onRender: (state) => {
                    // Auto rotation + User drag
                    if (!pointerInteraction) {
                        phi += 0.003;
                    }
                    state.phi = phi + pointerInteractionMovement;
                    state.width = width * 2;
                    state.height = width * 2;
                },
            });

            // Mouse Interaction Logic
            canvas.addEventListener('mousedown', (e) => {
                pointerInteraction = true;
                canvas.style.cursor = 'grabbing';
                const mouseX = e.clientX;
                const onMouseMove = (event) => {
                    pointerInteractionMovement = (event.clientX - mouseX) * 0.005;
                };
                const onMouseUp = () => {
                    pointerInteraction = false;
                    canvas.style.cursor = 'grab';
                    phi += pointerInteractionMovement;
                    pointerInteractionMovement = 0;
                    window.removeEventListener('mousemove', onMouseMove);
                    window.removeEventListener('mouseup', onMouseUp);
                };
                window.addEventListener('mousemove', onMouseMove);
                window.addEventListener('mouseup', onMouseUp);
            });
            
            // Touch Interaction
            canvas.addEventListener('touchstart', (e) => {
                pointerInteraction = true;
                const touchX = e.touches[0].clientX;
                const onTouchMove = (event) => {
                    pointerInteractionMovement = (event.touches[0].clientX - touchX) * 0.005;
                };
                const onTouchEnd = () => {
                    pointerInteraction = false;
                    phi += pointerInteractionMovement;
                    pointerInteractionMovement = 0;
                    window.removeEventListener('touchmove', onTouchMove);
                    window.removeEventListener('touchend', onTouchEnd);
                };
                window.addEventListener('touchmove', onTouchMove);
                window.addEventListener('touchend', onTouchEnd);
            });
        }
    
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
      

<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300" id="navbar">
<div className="bg-white/90 backdrop-blur-md border-b border-slate-100 flex justify-between items-center h-16 md:h-20 px-4 md:px-12 max-w-[1600px] mx-auto relative">

<div className="absolute top-0 left-0 h-full w-[200px] bg-next-blue skew-x-[20deg] origin-top-left -ml-10 hidden md:block group overflow-hidden">
<div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
</div>
<a className="relative z-10 flex items-center gap-1 group" href="#">
<span className="text-next-blue md:text-white text-2xl font-bold tracking-tighter transition-colors">NEXT<span className="font-light">2i</span></span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-next-blue transition-colors flex items-center gap-1 group" href="#">
                    Nos Expertises 
                    <i className="w-3 h-3 group-hover:rotate-90 transition-transform" data-lucide="plus"></i>
</a>
<a className="hover:text-next-blue transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-next-yellow after:transition-all hover:after:w-full" href="#">Entreprise</a>
<a className="hover:text-next-blue transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-next-yellow after:transition-all hover:after:w-full" href="#">Jobs</a>
<a className="hover:text-next-blue transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-next-yellow after:transition-all hover:after:w-full" href="#">Blogs</a>
<a className="hover:text-next-blue transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-next-yellow after:transition-all hover:after:w-full" href="#">Contact</a>
</div>
<a className="bg-next-blue text-white text-xs font-medium px-5 py-2.5 rounded hover:bg-blue-800 transition-all shadow-lg hover:shadow-next-blue/50 transform hover:-translate-y-0.5 active:translate-y-0" href="#">
                Portail Support
            </a>
</div>
</nav>

<header className="relative bg-next-blue pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden group">

<div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse-slow"></div>
<svg className="w-full h-full animate-[spin_60s_linear_infinite] origin-center scale-150 opacity-20" viewbox="0 0 100 100">
<path d="M50 50 L100 0 M50 50 L100 100 M50 50 L0 100 M50 50 L0 0" stroke="white" strokeWidth="0.1"></path>
</svg>
</div>
<div className="container mx-auto px-6 md:px-12 relative z-10">
<div className="max-w-4xl reveal active">
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                    Votre IT ne devrait jamais être votre problème le plus urgent
                </h1>
<p className="text-lg md:text-xl text-blue-100 font-light max-w-2xl mb-10 leading-relaxed opacity-90">
                    21 ans qu'on fait tourner l'IT de PME et ETI pendant qu'elles se concentrent sur leur croissance.
                </p>
<div className="space-y-2 mb-16 text-blue-50 text-sm font-medium">
<div className="flex items-center gap-2 transform transition-transform hover:translate-x-2">
<i className="text-next-yellow w-5 h-5" data-lucide="corner-down-right"></i>
<span>Infrastructure qui tient.</span>
</div>
<div className="flex items-center gap-2 transform transition-transform hover:translate-x-2 delay-75">
<i className="text-next-yellow w-5 h-5" data-lucide="corner-down-right"></i>
<span>Sécurité qui protège.</span>
</div>
<div className="flex items-center gap-2 transform transition-transform hover:translate-x-2 delay-100">
<i className="text-next-yellow w-5 h-5" data-lucide="corner-down-right"></i>
<span>Support qui répond.</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 right-0 left-0 w-full z-20">
<div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-end justify-between gap-8">

<div className="flex group cursor-pointer hover:scale-105 transition-transform duration-300 origin-left">
<div className="bg-next-blue border border-blue-500/30 pl-6 pr-12 py-4 flex items-center gap-4 relative overflow-hidden rounded-l-lg shadow-2xl shadow-blue-900/50">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
<span className="text-next-yellow font-semibold text-xl tracking-tight group-hover:text-white transition-colors">Audit gratuit de votre IT</span>
</div>
<div className="flex">
<div className="bg-white h-full w-8 -ml-4 z-10 skew-x-[20deg] border-r-4 border-next-blue"></div>
<div className="bg-white h-full w-4 -ml-2 z-0 skew-x-[20deg] opacity-50"></div>
</div>
<div className="flex items-center text-white ml-2 animate-bounce flex-col justify-center">
<i className="w-6 h-6" data-lucide="arrow-right"></i>
</div>
</div>

<div className="flex gap-8 md:gap-12 text-white reveal delay-200">
<div className="hover:-translate-y-1 transition-transform cursor-default">
<div className="text-3xl font-semibold text-next-yellow tracking-tighter flex"><span className="counter" data-target="21">0</span></div>
<div className="text-xs text-blue-300 uppercase tracking-wide">ans d'expertise</div>
</div>
<div className="hover:-translate-y-1 transition-transform cursor-default delay-75">
<div className="text-3xl font-semibold text-next-yellow tracking-tighter flex">+<span className="counter" data-target="50">0</span></div>
<div className="text-xs text-blue-300 uppercase tracking-wide">collaborateurs</div>
</div>
<div className="hover:-translate-y-1 transition-transform cursor-default delay-100">
<div className="text-3xl font-semibold text-next-yellow tracking-tighter flex">+<span className="counter" data-target="60">0</span></div>
<div className="text-xs text-blue-300 uppercase tracking-wide">clients actifs</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white relative overflow-hidden">
<div className="container mx-auto px-6 md:px-12 relative z-10">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">
                        Si votre IT vous empêche de dormir, <br/>vous n'êtes pas seul.
                    </h2>
<p className="text-slate-600 text-lg leading-relaxed">
                        Les infrastructures complexes créent des points de friction invisibles jusqu'à ce qu'il soit trop tard. Nous transformons cette complexité en avantage concurrentiel.
                    </p>
</div>

<div className="flex flex-col gap-2 relative reveal delay-200">

<div className="relative group cursor-default">
<div className="bg-next-blue text-white py-4 px-6 pr-12 clip-diagonal-tag w-full md:w-[95%] ml-auto flex items-center gap-3 transition-all duration-300 group-hover:-translate-x-4 group-hover:bg-blue-900">
<i className="w-5 h-5 text-next-yellow group-hover:rotate-45 transition-transform" data-lucide="arrow-up-right"></i>
<span className="font-medium text-sm">"Notre DSI est débordé et on embauche pas"</span>
</div>
</div>

<div className="relative group cursor-default">
<div className="bg-next-yellow text-next-blue py-4 px-6 pr-12 clip-diagonal-tag w-full md:w-[100%] ml-auto flex items-center gap-3 transition-all duration-300 group-hover:-translate-x-4 shadow-xl z-10 scale-105">
<i className="w-5 h-5 text-next-blue" data-lucide="alert-circle"></i>
<span className="font-semibold text-sm">"La cybersécurité, on ne sait pas par où commencer"</span>
</div>
</div>

<div className="relative group cursor-default">
<div className="bg-next-blue text-white py-4 px-6 pr-12 clip-diagonal-tag w-full md:w-[98%] ml-auto flex items-center gap-3 transition-all duration-300 group-hover:-translate-x-4 group-hover:bg-blue-900">
<i className="w-5 h-5 text-next-yellow" data-lucide="clock"></i>
<span className="font-medium text-sm">"On ne peut pas se permettre une panne"</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-slate-50 border-y border-slate-200">
<div className="container mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 reveal">
<div>
<span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 block">Nos Solutions</span>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
                        On reprend votre IT en main.<br/>
                        Complètement.<br/>
                        Proprement.
                    </h2>
</div>
<p className="max-w-md text-slate-600 text-sm leading-relaxed">
                    Pas de consultant qui débarque avec un PowerPoint. Une équipe qui prend les manettes, règle les problèmes, et dort avec un téléphone à côté du lit.
                </p>
</div>
</div>
</section>

<section className="py-12 bg-white overflow-hidden">
<div className="container mx-auto px-6 md:px-12 relative">

<div className="flex justify-end gap-2 mb-6">
<button className="p-2 rounded-full border border-slate-200 hover:border-next-blue text-slate-400 hover:text-next-blue transition-all hover:scale-110"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<button className="p-2 rounded-full border border-slate-200 hover:border-next-blue text-slate-400 hover:text-next-blue transition-all hover:scale-110"><i className="w-5 h-5" data-lucide="chevron-right"></i></button>
</div>
<div className="flex gap-6 overflow-x-auto pb-12 snap-x hide-scrollbar" id="service-carousel">

<div className="min-w-[300px] md:min-w-[380px] h-[420px] bg-gradient-to-br from-next-blue to-[#0A1A5C] text-white p-8 flex flex-col justify-between group snap-start cursor-pointer hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 rounded-sm hover:-translate-y-2 reveal">
<div>
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-next-yellow group-hover:text-next-blue transition-colors duration-500">
<i className="w-6 h-6" data-lucide="server"></i>
</div>
<h3 className="text-2xl font-semibold mb-2">Infogérance</h3>
<p className="text-blue-200 font-medium mb-4">Votre IT, notre responsabilité</p>
<p className="text-xs text-blue-300 leading-relaxed border-t border-blue-800 pt-4 group-hover:text-white transition-colors">
                            On ne "conseille" pas. <strong>On gère</strong>. Supervision 24/7, maintenance proactive, support réactif.
                        </p>
</div>
<div className="flex justify-end">
<span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity mr-2 flex items-center">Découvrir</span>
<i className="w-8 h-8 text-next-yellow transform group-hover:translate-x-2 transition-transform" data-lucide="chevron-right"></i>
</div>
</div>

<div className="min-w-[300px] md:min-w-[380px] h-[420px] bg-gradient-to-br from-[#0f1d53] to-[#0A1A5C] text-white p-8 flex flex-col justify-between group snap-start cursor-pointer hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 rounded-sm hover:-translate-y-2 reveal delay-100">
<div>
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-next-yellow group-hover:text-next-blue transition-colors duration-500">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-2xl font-semibold mb-2">Cybersécurité</h3>
<p className="text-blue-200 font-medium mb-4">Dormez tranquille. On surveille.</p>
<p className="text-xs text-blue-300 leading-relaxed border-t border-blue-800 pt-4 group-hover:text-white transition-colors">
                            SOC, détection d'intrusion, audits de vulnérabilité, mise en conformité NIS2.
                        </p>
</div>
<div className="flex justify-end">
<i className="w-8 h-8 text-next-yellow transform group-hover:translate-x-2 transition-transform" data-lucide="chevron-right"></i>
</div>
</div>

<div className="min-w-[300px] md:min-w-[380px] h-[420px] bg-gradient-to-br from-[#0f1d53] to-[#0A1A5C] text-white p-8 flex flex-col justify-between group snap-start cursor-pointer hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 rounded-sm hover:-translate-y-2 reveal delay-200">
<div>
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-next-yellow group-hover:text-next-blue transition-colors duration-500">
<i className="w-6 h-6" data-lucide="cloud"></i>
</div>
<h3 className="text-2xl font-semibold mb-2">Cloud &amp; Infra</h3>
<p className="text-blue-200 font-medium mb-4">Une infra qui scale</p>
<p className="text-xs text-blue-300 leading-relaxed border-t border-blue-800 pt-4 group-hover:text-white transition-colors">
                            Infrastructure Cloud évolutive, auto-réparatrice et <strong>30% moins chère</strong>.
                        </p>
</div>
<div className="flex justify-end">
<i className="w-8 h-8 text-next-yellow transform group-hover:translate-x-2 transition-transform" data-lucide="chevron-right"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="container mx-auto px-6 md:px-12">
<div className="flex justify-between items-end mb-12 reveal">
<h2 className="text-2xl font-medium text-slate-900">Des chiffres qui parlent.</h2>
<a className="bg-black text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 hover:bg-slate-800 transition-all hover:gap-4" href="#">
                    Savoir plus <i className="w-3 h-3" data-lucide="chevron-right"></i>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-slate-200 pt-12">
<div className="group reveal">
<div className="text-5xl font-semibold text-next-blue tracking-tighter mb-4 group-hover:scale-110 origin-left transition-transform duration-300 flex items-baseline"><span className="counter" data-target="70">0</span>%</div>
<p className="text-xs text-slate-500 leading-relaxed">Des grandes entreprises ont engagé une transformation numérique.</p>
</div>
<div className="group reveal delay-100">
<div className="text-5xl font-semibold text-next-blue tracking-tighter mb-4 group-hover:scale-110 origin-left transition-transform duration-300 flex items-baseline"><span className="counter" data-target="85">0</span>%</div>
<p className="text-xs text-slate-500 leading-relaxed">Des collaborateurs ont besoin d'une meilleure appropriation des outils.</p>
</div>
<div className="group reveal delay-200">
<div className="text-5xl font-semibold text-next-blue tracking-tighter mb-4 group-hover:scale-110 origin-left transition-transform duration-300 flex items-baseline">+<span className="counter" data-target="650">0</span></div>
<p className="text-xs text-slate-500 leading-relaxed">Risques de cyberattaques accrues cette année.</p>
</div>
<div className="group reveal delay-300">
<div className="text-5xl font-semibold text-next-blue tracking-tighter mb-4 group-hover:scale-110 origin-left transition-transform duration-300">24/7</div>
<p className="text-xs text-slate-500 leading-relaxed">Disponibilité de nos techniciens basés en France.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="container mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-24">
<div className="sticky top-24 reveal">
<h2 className="text-3xl font-medium text-slate-900 mb-4">NEXT2i en 3 mots :</h2>
<p className="text-2xl font-semibold text-next-blue tracking-tight mb-8">
                        Expertise. Réactivité. Responsabilité.
                    </p>
<div className="h-1 w-20 bg-gradient-to-r from-next-blue to-next-yellow mb-8 animate-pulse"></div>
<p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-sm">
                        Avec 20 ans d'expérience, on a vu à peu près tous les scénarios catastrophes qu'une PME peut rencontrer.
                    </p>
<a className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-xs font-medium hover:bg-slate-800 transition-all hover:scale-105 group" href="#">
<i className="w-4 h-4 text-next-yellow group-hover:translate-x-1 transition-transform" data-lucide="chevron-right"></i> Demander un audit gratuit
                    </a>
</div>

<div className="grid gap-4">

<div className="bg-next-blue text-white p-6 rounded-sm shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer reveal group">
<div className="w-8 h-8 rounded-full bg-white/10 mb-4 flex items-center justify-center group-hover:bg-next-yellow group-hover:text-next-blue transition-colors">1</div>
<h4 className="font-medium mb-8 text-sm">On réduit votre risque opérationnel</h4>
<div className="text-xs text-blue-200 mt-auto">Redondance, sauvegardes, plan de reprise. Le truc ennuyeux mais vital.</div>
</div>

<div className="grid grid-cols-2 gap-4 translate-x-4 md:translate-x-8">
<div className="bg-next-yellow p-6 rounded-sm shadow-xl flex flex-col justify-between h-48 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-next-blue cursor-pointer reveal delay-100 group">
<div className="w-8 h-8 rounded-full bg-black/10 mb-4 flex items-center justify-center group-hover:bg-next-blue group-hover:text-white transition-colors">2</div>
<h4 className="font-semibold text-sm">On parle budget, pas features</h4>
<div className="text-xs font-medium mt-auto">Coûts prévisibles, ROI mesurable.</div>
</div>
<div className="bg-next-blue text-white p-6 rounded-sm shadow-xl flex flex-col justify-between h-48 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer reveal delay-200 group">
<div className="w-8 h-8 rounded-full bg-white/10 mb-4 flex items-center justify-center group-hover:bg-next-yellow group-hover:text-next-blue transition-colors">3</div>
<h4 className="font-medium text-sm">Votre métier avant tout</h4>
<div className="text-xs text-blue-200 mt-auto">Manufacturing, services, retail... on s'adapte.</div>
</div>
</div>

<div className="bg-next-blue text-white p-6 rounded-sm shadow-xl hover:-translate-y-2 transition-all duration-300 translate-x-4 md:translate-x-8 mt-[-1rem] z-10 border-t border-white/10 cursor-pointer reveal delay-300 group">
<div className="w-8 h-8 rounded-full bg-white/10 mb-4 flex items-center justify-center group-hover:bg-next-yellow group-hover:text-next-blue transition-colors">4</div>
<h4 className="font-medium mb-8 text-sm">Support Réactif</h4>
<div className="text-xs text-blue-200 mt-auto">Bureau 24h/7, intervention en 2h/4h selon la criticité.</div>
</div>
</div>
</div>

<div className="text-center mb-24 reveal">
<h3 className="text-slate-500 font-medium text-sm uppercase tracking-widest mb-10">Nos Partenaires</h3>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-60">

<span className="text-2xl font-bold text-slate-400 hover:text-next-blue transition-colors cursor-pointer hover:scale-110 transform duration-300">Microsoft</span>
<span className="text-2xl font-bold text-slate-400 hover:text-next-blue transition-colors cursor-pointer hover:scale-110 transform duration-300">AWS</span>
<span className="text-2xl font-bold text-slate-400 hover:text-next-blue transition-colors cursor-pointer hover:scale-110 transform duration-300">Dell</span>
<span className="text-2xl font-bold text-slate-400 hover:text-next-blue transition-colors cursor-pointer hover:scale-110 transform duration-300">Veeam</span>
<span className="text-2xl font-bold text-slate-400 hover:text-next-blue transition-colors cursor-pointer hover:scale-110 transform duration-300">Cisco</span>
</div>
</div>

<h3 className="text-2xl font-semibold mb-8 flex items-center gap-2 reveal">
<i className="w-6 h-6 text-next-yellow" data-lucide="layout-grid"></i> Nos domaines d'intervention
            </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200 bg-slate-200 reveal">

<div className="bg-white p-8 h-[300px] flex flex-col justify-end relative group overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-efc535b5c479?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"></div>
<div className="absolute inset-0 bg-gradient-to-t from-next-blue/90 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
<div className="relative z-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform">
<div className="text-lg font-medium mb-2">1. Optimisation</div>
<p className="text-xs text-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Optimisation de votre système informatique, virtualisation, maintenance informatique.</p>
</div>
</div>

<div className="bg-black text-white p-8 h-[300px] flex flex-col justify-between relative group hover:bg-slate-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute right-0 top-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity"><i className="text-white" data-lucide="arrow-up-right"></i></div>
<div className="text-lg font-medium relative z-10">2. Hébergement</div>
<p className="text-xs text-slate-400 group-hover:text-white transition-colors relative z-10">IaaS, BaaS, DaaS, SaaS : Hébergement hautement sécurisé.</p>
<div className="absolute -right-10 -bottom-10 w-32 h-32 bg-next-yellow/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
</div>

<div className="bg-white p-8 h-[300px] flex flex-col justify-between relative group cursor-pointer hover:bg-slate-50 transition-colors">
<div className="text-lg font-medium text-slate-900 group-hover:text-next-blue transition-colors">4. Déploiement</div>
<p className="text-xs text-slate-600">Déploiement de réseau, installation de matériel et logiciels.</p>
<div className="flex justify-between mt-4">
<i className="w-8 h-8 text-next-yellow group-hover:scale-125 transition-transform" data-lucide="arrow-up-right"></i>
</div>
</div>

<div className="bg-white h-[300px] relative overflow-hidden col-span-1 md:col-span-2 group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-next-yellow/90 mix-blend-multiply transition-opacity group-hover:opacity-80"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="border border-black px-6 py-2 uppercase font-bold tracking-widest text-black bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">Voir les projets</span>
</div>
</div>

<div className="bg-next-blue text-white p-8 h-[300px] flex flex-col justify-end relative hover:bg-blue-900 transition-colors group cursor-pointer overflow-hidden">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-next-yellow/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
<div className="text-lg font-medium mb-2 relative z-10">3. Sécurité</div>
<p className="text-xs text-blue-200 group-hover:text-white transition-colors relative z-10">SOC, VOC, MDR : Protection de données et de l'infrastructure.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
<div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center relative z-10">
<div className="w-full md:w-1/2 z-10 reveal">
<span className="text-next-yellow font-bold text-sm tracking-widest uppercase mb-2 block">Worldwide Support</span>
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">
                    Votre IT sous contrôle, <br/>partout dans le monde.
                </h2>
<p className="text-slate-600 text-sm leading-relaxed max-w-md mb-8">
                    Notre centre d'opération surveille vos actifs en temps réel. Interagissez avec le globe pour voir notre couverture réseau.
                </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 group cursor-pointer hover:bg-white p-3 rounded-lg transition-colors border border-transparent hover:border-slate-100 hover:shadow-sm">
<div className="w-10 h-10 rounded-full bg-next-blue/10 flex items-center justify-center text-next-blue group-hover:bg-next-blue group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<div>
<div className="font-semibold text-slate-900">Monitoring Actif</div>
<div className="text-xs text-slate-500">Détection d'anomalies <span className="text-green-500 font-bold ml-1 animate-pulse">● Live</span></div>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-block bg-next-blue text-white font-medium text-lg px-8 py-4 rounded-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all transform skew-x-[-10deg] group overflow-hidden relative" href="#">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
<span className="block skew-x-[10deg] flex items-center gap-3">
                            Démarrer l'audit <i className="w-5 h-5" data-lucide="arrow-right"></i>
</span>
</a>
</div>
</div>

<div className="w-full md:w-1/2 h-[600px] relative flex items-center justify-center mt-12 md:mt-0 cursor-move" id="globe-container">
<div className="absolute inset-0 bg-radial-gradient from-blue-500/5 to-transparent rounded-full blur-3xl transform scale-75"></div>
<canvas className="drop-shadow-2xl" height="1200" id="cobe" style={{width: '600px', height: '600px', maxWidth: '100%', aspectRatio: '1'}} width="1200"></canvas>
</div>
</div>
</section>

<footer className="bg-next-blue text-white pt-20 pb-10 border-t-4 border-next-yellow">
<div className="container mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-blue-800 pb-16">

<div className="md:col-span-1">
<span className="text-white text-3xl font-bold tracking-tighter block mb-6">NEXT<span className="font-light">2i</span></span>
<div className="relative max-w-xs group">
<input className="w-full bg-white text-slate-800 text-sm py-3 px-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-next-yellow transition-all" placeholder="Email professionnel" type="email"/>
<button className="absolute right-0 top-0 h-full bg-next-yellow text-next-blue px-3 flex items-center justify-center rounded-r-sm clip-chevron hover:bg-yellow-400 transition-colors hover:px-5 group-hover:shadow-lg">
<i className="w-4 h-4" data-lucide="send"></i>
</button>
</div>
</div>

<div>
<h4 className="font-semibold text-sm mb-6 text-next-yellow">Navigation</h4>
<ul className="space-y-3 text-sm text-blue-200">
<li><a className="hover:text-white hover:pl-2 transition-all block" href="#">Accueil</a></li>
<li><a className="hover:text-white hover:pl-2 transition-all block" href="#">Expertises</a></li>
<li><a className="hover:text-white hover:pl-2 transition-all block" href="#">A propos</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm mb-6 text-next-yellow">Contact</h4>
<p className="text-sm text-blue-200 leading-relaxed hover:text-white transition-colors cursor-pointer">
                        68 Boulevard de Port-Royal,<br/>
                        75005 Paris, France
                    </p>
<p className="text-sm text-blue-200 mt-4 font-mono hover:text-white transition-colors cursor-pointer">+33 1 48 49 98 00</p>
</div>
<div>
<h4 className="font-semibold text-sm mb-6 text-next-yellow">Suivez-nous</h4>
<div className="flex gap-4">
<a className="bg-blue-900/50 p-2 rounded-full hover:bg-next-yellow hover:text-next-blue transition-all hover:scale-110" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="bg-blue-900/50 p-2 rounded-full hover:bg-next-yellow hover:text-next-blue transition-all hover:scale-110" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="bg-blue-900/50 p-2 rounded-full hover:bg-next-yellow hover:text-next-blue transition-all hover:scale-110" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-blue-400">
<p>@2026 NEXT2i. All Rights Reserved.</p>
</div>
</div>
</footer>





    </>
  );
}
