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
colors: {
pizza: {
black: '#0A0A0A',
yellow: '#FFD600',
}
},
fontFamily: {
display: ['Bebas Neue', 'sans-serif'],
sans: ['Inter', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- 1. Hero Text Reveal Animation ---
            const heroTitle = document.getElementById('hero-title');
            const words = ["FRESH.", "FAST.", "FIRED", "UP."];
            
            words.forEach((word, wordIndex) => {
                const wordSpan = document.createElement('span');
                wordSpan.className = 'inline-flex overflow-hidden';
                
                const suffix = wordIndex < words.length - 1 ? '\u00A0' : '';

                [...word, suffix].forEach((char, charIndex) => {
                    const charSpan = document.createElement('span');
                    if (char === '\u00A0') {
                        charSpan.innerHTML = '&nbsp;';
                    } else {
                        charSpan.textContent = char;
                    }
                    charSpan.className = 'reveal-letter';
                    const delay = (wordIndex * 0.2) + (charIndex * 0.05);
                    charSpan.style.transitionDelay = `${delay}s`;
                    wordSpan.appendChild(charSpan);
                });
                
                heroTitle.appendChild(wordSpan);
            });

            setTimeout(() => {
                document.querySelectorAll('.reveal-letter').forEach(el => {
                    el.classList.add('revealed');
                });
            }, 100);

            // --- 2. Manifesto Highlight on Scroll ---
            const manifestoText = document.getElementById('manifesto-text');
            const manifestoWords = manifestoText.innerText.split(' ');
            manifestoText.innerHTML = '';
            
            manifestoWords.forEach(word => {
                const span = document.createElement('span');
                span.textContent = word + ' ';
                span.className = 'manifesto-word';
                manifestoText.appendChild(span);
            });

            const wordElements = document.querySelectorAll('.manifesto-word');
            
            window.addEventListener('scroll', () => {
                const rect = manifestoText.getBoundingClientRect();
                const viewHeight = window.innerHeight;
                
                // Calculate progress through the section
                if(rect.top < viewHeight && rect.bottom > 0) {
                    const scrollProgress = 1 - (rect.bottom / (viewHeight + rect.height));
                    // Highlight words based on progress
                    const highlightIndex = Math.floor(scrollProgress * wordElements.length * 1.5);
                    
                    wordElements.forEach((el, index) => {
                        if(index < highlightIndex) {
                            el.classList.add('highlight');
                        } else {
                            el.classList.remove('highlight');
                        }
                    });
                }
            });

            // --- 3. Navbar Slide on Scroll ---
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    navbar.classList.remove('-translate-y-full');
                } else {
                    navbar.classList.add('-translate-y-full');
                }
            });


            // --- 4. Intersection Observer for Scroll Animations ---
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        
                        const line = entry.target.querySelector('.scroll-line');
                        if(line) {
                            line.style.transform = 'scaleX(1)';
                        }
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.scroll-reveal').forEach(el => {
                observer.observe(el);
            });


            // --- 5. Populate Pizza Carousel (High Contrast) ---
            const pizzas = [
                { name: "Margherita", ingredients: "Mozzarella, sauce tomate authentique, basilic frais", prices: "J 8,50€ · S 15€ · F 20€", emoji: "🍕" },
                { name: "Végétarienne", ingredients: "Mozza, champignons, olives, poivrons, tomates cerises", prices: "J 9,50€ · S 16€ · F 22€", emoji: "🌿" },
                { name: "Texas", ingredients: "Mozza, viande hachée, chorizo, oignons rouges", prices: "J 10€ · S 17€ · F 24€", emoji: "🥩" },
                { name: "4 Fromages", ingredients: "Mozza, Bleu, Brie, Chèvre, Parmesan affiné", prices: "J 10,50€ · S 18€ · F 25€", emoji: "🧀" },
                { name: "Mexicaine", ingredients: "Mozza, merguez, viande hachée, poivrons, piment", prices: "J 10€ · S 17€ · F 24€", emoji: "🌶️" },
                { name: "Chicken", ingredients: "Mozza, poulet rôti, pomme de terre, oignons", prices: "J 9,50€ · S 16€ · F 23€", emoji: "🍗" }
            ];

            const container = document.getElementById('pizza-container');

            pizzas.forEach((pizza, index) => {
                const delay = index * 0.1;
                const card = document.createElement('div');
                // High contrast card: Black background, strictly no grey
                card.className = `w-[85vw] sm:w-[22rem] shrink-0 snap-center bg-pizza-black rounded-[2rem] p-8 card-glow scroll-reveal flex flex-col group`;
                card.style.transitionDelay = `${delay}s`;
                
                card.innerHTML = `
                    <div class="text-7xl mb-6 text-center drop-shadow-2xl pizza-emoji-hover origin-bottom select-none">
                        ${pizza.emoji}
                    </div>
                    <h3 class="font-display text-4xl text-pizza-yellow tracking-tighter mb-3 uppercase">${pizza.name}</h3>
                    <p class="text-white text-sm font-light leading-relaxed mb-8 line-clamp-2 min-h-[2.5rem]">
                        ${pizza.ingredients}
                    </p>
                    <div class="mt-auto flex flex-col gap-4">
                        <div class="inline-flex justify-center items-center px-4 py-3 rounded-full bg-white text-pizza-black text-xs font-semibold tracking-wide w-full">
                            ${pizza.prices}
                        </div>
                        <button class="w-full bg-pizza-yellow text-pizza-black py-4 rounded-full text-sm font-medium tracking-wide hover:bg-white transition-colors btn-glow">
                            Commander
                        </button>
                    </div>
                `;
                
                container.appendChild(card);
                observer.observe(card);
            });
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-500 -translate-y-full bg-pizza-yellow/90 backdrop-blur-md border-b border-pizza-black/10 py-4" id="navbar">
<div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
<a className="font-display text-2xl tracking-tighter text-pizza-black" href="#">
                PIZZA<span className="text-white drop-shadow-md">SLICE</span>
</a>
<a className="bg-pizza-black text-pizza-yellow px-6 py-2 rounded-full text-xs font-medium tracking-wide hover:bg-neutral-800 transition-colors btn-glow" href="#menu">
                Commander
            </a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">

<div className="absolute inset-0 pointer-events-none z-0 opacity-20">

<div className="absolute top-1/4 left-[10%] w-0 h-0 border-l-[3rem] border-l-transparent border-r-[3rem] border-r-transparent border-b-[5rem] border-pizza-black rotate-12 shape-float-1"></div>

<div className="absolute bottom-1/3 right-[15%] w-32 h-32 rounded-full border-4 border-pizza-black border-dashed shape-float-2"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-white/20 rounded-full blur-[100px]"></div>
</div>
<div className="relative z-10 max-w-screen-xl mx-auto px-6 w-full flex flex-col items-center text-center">
<h1 className="font-display text-7xl md:text-9xl tracking-tighter leading-none mb-6 flex flex-wrap justify-center gap-x-4 gap-y-2 uppercase text-pizza-black" id="hero-title">

</h1>
<p className="text-pizza-black font-medium text-base md:text-lg max-w-lg mb-12 scroll-reveal" style={{transitionDelay: '0.6s'}}>
                Livraison chaude en 30 min — Ingrédients frais chaque jour.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto scroll-reveal" style={{transitionDelay: '0.8s'}}>
<a className="group relative flex items-center justify-center gap-2 bg-pizza-black text-pizza-yellow px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all btn-glow overflow-hidden" href="#menu">
<span className="relative z-10 flex items-center gap-2">
<span className="text-lg group-hover:animate-[spin_1s_ease-in-out]">🍕</span> Commander maintenant
                    </span>
</a>
<a className="flex items-center justify-center px-8 py-4 rounded-full border-2 border-pizza-black text-pizza-black text-sm font-medium tracking-wide hover:bg-pizza-black hover:text-pizza-yellow transition-all" href="#menu">
                    Voir le menu
                </a>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-pizza-black animate-bounce scroll-reveal" style={{transitionDelay: '1s'}}>
<iconify-icon icon="solar:arrow-down-linear" strokeWidth="2" width="24"></iconify-icon>
</div>
</div>
</section>

<div className="w-full bg-pizza-black py-4 overflow-hidden flex border-y border-pizza-black">
<div className="flex whitespace-nowrap animate-marquee-content text-pizza-yellow font-medium text-xs tracking-wide uppercase">

<span className="mx-8 flex items-center gap-2"><iconify-icon icon="solar:fire-linear" width="18"></iconify-icon> Ingrédients frais</span>
<span className="mx-8 flex items-center gap-2"><iconify-icon icon="solar:bolt-linear" width="18"></iconify-icon> Livraison en 30 min</span>
<span className="mx-8 flex items-center gap-2"><iconify-icon icon="solar:cheese-linear" width="18"></iconify-icon> Vraie mozzarella</span>
<span className="mx-8 flex items-center gap-2"><iconify-icon icon="solar:heart-linear" width="18"></iconify-icon> Fait maison chaque jour</span>

<span className="mx-8 flex items-center gap-2"><iconify-icon icon="solar:fire-linear" width="18"></iconify-icon> Ingrédients frais</span>
<span className="mx-8 flex items-center gap-2"><iconify-icon icon="solar:bolt-linear" width="18"></iconify-icon> Livraison en 30 min</span>
<span className="mx-8 flex items-center gap-2"><iconify-icon icon="solar:cheese-linear" width="18"></iconify-icon> Vraie mozzarella</span>
<span className="mx-8 flex items-center gap-2"><iconify-icon icon="solar:heart-linear" width="18"></iconify-icon> Fait maison chaque jour</span>
</div>
</div>

<section className="py-32 relative border-b border-pizza-black/10">
<div className="max-w-screen-lg mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pizza-black text-pizza-yellow mb-10 mx-auto" style={{animation: 'pulse-ring 2s infinite'}}>
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h2 className="font-display text-5xl md:text-8xl tracking-tighter leading-none text-pizza-black" id="manifesto-text">
                L'esprit de la pizza. Sans compromis. Une pâte maturée 72 heures. Des tomates gorgées de soleil. Une cuisson brûlante.
            </h2>
</div>
</section>

<section className="py-32 relative" id="menu">
<div className="max-w-screen-xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6 scroll-reveal">
<h2 className="font-display text-5xl md:text-7xl tracking-tighter inline-block relative text-pizza-black leading-none m-0">
                NOS SIGNATURES
                <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-pizza-black origin-left scale-x-0 transition-transform duration-1000 scroll-line"></div>
</h2>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-pizza-black text-pizza-black hover:bg-pizza-black hover:text-pizza-yellow transition-all text-sm font-medium" href="#">
                Voir plus <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>

<div className="w-full overflow-x-auto snap-x snap-mandatory no-scrollbar pb-20 pt-8 px-6 md:px-0">
<div className="flex gap-6 md:gap-8 w-max md:px-[calc((100vw-80rem)/2)]" id="pizza-container">

</div>
</div>
</section>

<section className="py-24 bg-pizza-black text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pizza-yellow/[0.05] via-transparent to-transparent"></div>
<div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
<div className="flex flex-col items-start scroll-reveal">
<div className="w-14 h-14 rounded-full bg-pizza-yellow text-pizza-black flex items-center justify-center mb-6 transform transition-transform hover:scale-110 hover:rotate-12 duration-300">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="font-display text-3xl tracking-tighter mb-3">Frais chaque matin</h3>
<p className="text-white text-sm font-light leading-relaxed">
                    Nos ingrédients sont sélectionnés quotidiennement pour garantir un goût authentique et puissant à chaque bouchée.
                </p>
</div>
<div className="flex flex-col items-start scroll-reveal" style={{transitionDelay: '0.1s'}}>
<div className="w-14 h-14 rounded-full bg-pizza-yellow text-pizza-black flex items-center justify-center mb-6 transform transition-transform hover:scale-110 hover:rotate-12 duration-300">
<iconify-icon icon="solar:routing-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="font-display text-3xl tracking-tighter mb-3">Livraison express</h3>
<p className="text-white text-sm font-light leading-relaxed">
                    Vos pizzas arrivent brûlantes chez vous en moins de 30 minutes. Le chrono est lancé, on ne plaisante pas avec la faim.
                </p>
</div>
<div className="flex flex-col items-start scroll-reveal" style={{transitionDelay: '0.2s'}}>
<div className="w-14 h-14 rounded-full bg-pizza-yellow text-pizza-black flex items-center justify-center mb-6 transform transition-transform hover:scale-110 hover:rotate-12 duration-300">
<iconify-icon icon="solar:flame-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="font-display text-3xl tracking-tighter mb-3">Feu de bois</h3>
<p className="text-white text-sm font-light leading-relaxed">
                    Une croûte alvéolée et croustillante, cuite à la perfection dans nos fours traditionnels à très haute température.
                </p>
</div>
</div>
</section>

<footer className="bg-pizza-black border-t border-white/10 pt-16 pb-8">
<div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="font-display text-3xl tracking-tighter text-white">
                PIZZA<span className="text-pizza-yellow">SLICE</span>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-pizza-yellow hover:text-pizza-black hover:border-pizza-yellow transition-all" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-pizza-yellow hover:text-pizza-black hover:border-pizza-yellow transition-all" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
<div className="text-white/50 text-xs font-light">
                © 2023 Pizza Slice. Faux site pour démo.
            </div>
</div>
</footer>



    </>
  );
}
