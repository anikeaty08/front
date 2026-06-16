import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // --- SETUP ---
        gsap.registerPlugin(ScrollTrigger);

        // --- ICONS ---
        lucide.createIcons();

        // --- LENIS SCROLL ---
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

        // --- TEXT SPLITTER UTILITY ---
        function splitTextToWords(element) {
            const text = element.innerText;
            const words = text.split(' ');
            element.innerHTML = '';
            words.forEach(word => {
                const wordWrap = document.createElement('span');
                wordWrap.classList.add('word-wrap');
                wordWrap.innerHTML = `<span class="word-inner">${word}&nbsp;</span>`;
                element.appendChild(wordWrap);
            });
        }

        // Apply split to all elements with class .split-animate
        document.querySelectorAll('.split-animate').forEach(el => {
            splitTextToWords(el);
        });

        // --- LOADER ---
        const loadTl = gsap.timeline({
            onComplete: () => {
                document.body.style.opacity = 1;
                initSite();
            }
        });

        loadTl.to('.loader-bar', { width: '100%', duration: 1.5, ease: 'power2.inOut' })
              .to('.loader-text', { y: -50, opacity: 0, duration: 0.5 })
              .to('.loader', { yPercent: -100, duration: 1, ease: 'power4.inOut' });

        function initSite() {
            // Hero Animations
            gsap.to('.hero-text span', { 
                y: 0, 
                stagger: 0.1, 
                duration: 1.5, 
                ease: 'power4.out' 
            });
            gsap.to('.hero-fade', { opacity: 1, duration: 1, delay: 0.5 });
            
            // Hero Parallax
            gsap.to('.hero-img', {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero-img',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });

            // --- TEXT REVEAL ON SCROLL ---
            const splitElements = document.querySelectorAll('.split-animate');
            splitElements.forEach(el => {
                const words = el.querySelectorAll('.word-inner');
                gsap.to(words, {
                    y: "0%",
                    duration: 1,
                    ease: "power3.out",
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%", 
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // --- CARD STACK ANIMATION ---
            const cards = gsap.utils.toArray('.card-item');
            
            cards.forEach((card, i) => {
                const nextCard = cards[i+1];
                if (nextCard) {
                    gsap.to(card.querySelector('.card-inner'), {
                        scale: 0.9,
                        opacity: 0.4, 
                        ease: "none",
                        scrollTrigger: {
                            trigger: nextCard,
                            start: "top bottom", 
                            end: "top 10vh",    
                            scrub: true
                        }
                    });
                }
            });

            // --- PEACE OF MIND SECTION ANIMATION ---
            const processSection = document.querySelector('.process-section');
            if (processSection) {
                // Left side fade in staggering
                gsap.from('.process-fade', {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.process-text-group',
                        start: "top 75%",
                    }
                });

                // Card Entrance
                gsap.from('.process-card', {
                    y: 100,
                    opacity: 0,
                    rotationX: 10,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.process-card',
                        start: "top 85%",
                    }
                });

                // Timeline Animation
                const timelineTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.process-card',
                        start: "top 60%",
                    }
                });

                timelineTl.from('.timeline-line', { scaleY: 0, duration: 1, ease: "power2.inOut" })
                          .from('.timeline-item', { opacity: 0, x: 20, stagger: 0.3, duration: 0.8, ease: "power2.out" }, "-=0.5");
            }

            // --- DASHBOARD SECTION ANIMATION ---
            const dashSection = document.querySelector('.dashboard-section');
            if (dashSection) {
                const dashTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.dashboard-section',
                        start: "top 60%",
                    }
                });

                dashTl.from('.dash-header', { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" })
                      .from('.dash-ui-card', { 
                          y: 60, 
                          opacity: 0, 
                          rotationX: 15,
                          scale: 0.9,
                          duration: 1, 
                          ease: "power3.out" 
                      }, "-=0.4")
                      .from('.dash-feature-left', { x: -30, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.8")
                      .from('.dash-feature-right', { x: 30, opacity: 0, stagger: 0.1, duration: 0.8 }, "<");
                
                // Animate progress bars when card is in view
                gsap.utils.toArray('.progress-animate').forEach(bar => {
                    gsap.to(bar, {
                        width: bar.getAttribute('data-width'),
                        duration: 1.5,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: '.dash-ui-card',
                            start: "top 70%"
                        }
                    });
                });
            }

            // --- NEW UNIFY SECTION ANIMATION ---
            const unifySection = document.querySelector('.unify-section');
            if(unifySection) {
                // Stagger in top cards
                gsap.from('.unify-card', {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '.unify-section',
                        start: "top 70%"
                    }
                });

                // Main card slide up
                gsap.to('.unify-main-card', {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.unify-main-card',
                        start: "top 80%"
                    }
                });
            }

            // Footer Parallax Effect
            gsap.from('.footer-sticky > div', {
                y: 100,
                opacity: 0.5,
                scale: 0.9,
                scrollTrigger: {
                    trigger: '.footer-sticky',
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: true
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>

<div className="loader">
<div className="loader-text">AETHEREAL</div>
<div className="loader-bar"></div>
</div>

<nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
<div className="display font-semibold text-xl tracking-tighter">AETHEREAL</div>
<div className="hidden md:flex gap-10 text-xs uppercase tracking-widest">
<a className="hover:text-gray-300 transition-colors" href="#">Work</a>
<a className="hover:text-gray-300 transition-colors" href="#">Studio</a>
<a className="hover:text-gray-300 transition-colors" href="#">Contact</a>
</div>
<div className="md:hidden">MENU</div>
</nav>

<div className="wrapper">

<section className="h-screen relative flex items-center justify-center overflow-hidden">
<img alt="Hero" className="absolute inset-0 w-full h-full object-cover brightness-75 hero-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp"/>

<div className="relative z-10 text-center text-white mix-blend-difference">
<h1 className="display text-[12vw] leading-none hero-text overflow-hidden">
<span className="block translate-y-full">CONCRETE</span>
</h1>
<h1 className="display text-[12vw] leading-none hero-text overflow-hidden">
<span className="block translate-y-full">DREAMS</span>
</h1>

<p className="mt-8 text-sm uppercase tracking-[0.5em] opacity-0 hero-fade mix-blend-difference">Future Architecture</p>
</div>
</section>

<section className="py-32 px-6 md:px-20 grid md:grid-cols-2 gap-16 max-w-[1800px] mx-auto bg-[var(--c-bg)]">
<div>
<h2 className="display text-4xl md:text-5xl leading-tight split-animate">
                    Structure as <br/><span className="text-[var(--c-accent)]">sculpture.</span>
</h2>
</div>
<div className="text-xl font-light leading-relaxed text-gray-700">
<p className="mb-8 split-animate">We believe that architecture is frozen music. Our studio specializes in brutalist forms softened by biophilic integration. We create spaces that do not just shelter, but inspire.</p>
<div className="h-px w-full bg-black/10 my-8"></div>
<div className="flex gap-12 text-sm uppercase tracking-widest split-animate">
<div>Est. 2024</div>
<div>Tokyo / London</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-white relative z-20">
<div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="order-2 lg:order-1">

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[11px] font-medium tracking-wide uppercase mb-8">
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="sparkles"></i>
                        Spring bookings now open
                     </div>

<h2 className="text-6xl md:text-[5.5rem] leading-[0.95] mb-8 font-serif tracking-tight">
<span className="block text-gray-900 font-normal">Make room for</span>
<span className="block text-gray-400 italic">better living.</span>
</h2>

<p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-lg mb-10">
                        Comprehensive home renovations, additions, and custom builds. We handle the complexity so you can enjoy the transformation.
                     </p>

<div className="flex flex-wrap gap-4 mb-16">
<button className="px-8 py-4 bg-[#1A1A1A] text-white rounded-full text-sm font-medium hover:bg-black hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2">
                            Get an Estimate <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full text-sm font-medium hover:border-gray-900 hover:bg-gray-50 transition-all duration-300">
                            View Gallery
                        </button>
</div>

<div className="h-px w-full bg-gray-100 mb-8"></div>

<div className="flex items-center gap-6">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-[#E5E5E5] border-2 border-white flex items-center justify-center text-[10px] text-gray-500 font-semibold tracking-tighter">JD</div>
<div className="w-10 h-10 rounded-full bg-[#999] border-2 border-white flex items-center justify-center text-[10px] text-white font-semibold tracking-tighter">AS</div>
<div className="w-10 h-10 rounded-full bg-[#F0F0F0] border-2 border-white flex items-center justify-center text-[10px] text-gray-400 font-semibold tracking-tighter">+</div>
</div>
<div>
<div className="flex gap-1 mb-1.5">
<i className="w-3.5 h-3.5 text-orange-400 fill-transparent" data-lucide="star"></i>
<i className="w-3.5 h-3.5 text-orange-400 fill-transparent" data-lucide="star"></i>
<i className="w-3.5 h-3.5 text-orange-400 fill-transparent" data-lucide="star"></i>
<i className="w-3.5 h-3.5 text-orange-400 fill-transparent" data-lucide="star"></i>
<i className="w-3.5 h-3.5 text-orange-400 fill-transparent" data-lucide="star"></i>
</div>
<div className="text-xs text-gray-500 font-medium">
                                Rated 5.0 by 500+ homeowners.
                            </div>
</div>
</div>
</div>

<div className="relative order-1 lg:order-2">
<div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] md:h-[650px] w-full relative group">
<img alt="Interior" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-[340px] bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/20 animate-float transform hover:-translate-y-1 transition-transform duration-300">
<div className="flex items-start gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 shrink-0">
<i className="w-5 h-5" data-lucide="check"></i>
</div>
<div>
<div className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-1">Project Update</div>
<div className="text-lg font-medium text-gray-900 leading-none">Final Walkthrough</div>
</div>
</div>

<div className="relative h-1.5 w-full bg-gray-100 rounded-full mb-3 overflow-hidden">
<div className="absolute left-0 top-0 h-full bg-green-500 rounded-full w-[0%] animate-progress-fill" style={{width: '85%', transition: 'width 1.5s ease-out'}}></div>
</div>
<div className="flex justify-between text-[10px] text-gray-400 font-medium uppercase tracking-wide">
<span>Permits</span>
<span>Build</span>
<span className="text-gray-900">Complete</span>
</div>
</div>
</div>
</div>
</section>

<section className="stack-section">
<div className="text-center mb-20 px-6">
<div className="text-xs uppercase tracking-widest mb-4 opacity-50">Selected Works</div>
<h2 className="display text-5xl md:text-7xl">RECENT PROJECTS</h2>
</div>
<div className="stack-container">

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-[var(--c-bg)] opacity-30">01</div>
<h3 className="text-3xl font-semibold">THE VOID HOUSE</h3>
<p className="text-sm mt-4 opacity-70 uppercase tracking-widest">Kyoto, Japan</p>
</div>
<div className="text-gray-400 font-light">
                                A minimal concrete residence focused on negative space and light manipulation. Designed for meditation and silence.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-colors">View Project</button>
</div>
<div className="card-img-wrap">
<img alt="Project 1" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-[var(--c-bg)] opacity-30">02</div>
<h3 className="text-3xl font-semibold">MOSS BUNKER</h3>
<p className="text-sm mt-4 opacity-70 uppercase tracking-widest">Berlin, Germany</p>
</div>
<div className="text-gray-400 font-light">
                                Adaptive reuse of a WWII bunker into a sustainable vertical farm and living space.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-colors">View Project</button>
</div>
<div className="card-img-wrap">
<img alt="Project 2" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-[var(--c-bg)] opacity-30">03</div>
<h3 className="text-3xl font-semibold">SKY CLIFF</h3>
<p className="text-sm mt-4 opacity-70 uppercase tracking-widest">Reykjavik, Iceland</p>
</div>
<div className="text-gray-400 font-light">
                                A glass and steel structure cantilevered over the volcanic landscape, blending danger with luxury.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-colors">View Project</button>
</div>
<div className="card-img-wrap">
<img alt="Project 3" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa5ed4de-1a7e-4bb7-b0ea-1a4c511663df_1600w.webp"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 bg-[#121212] text-white relative overflow-hidden process-section">

<div className="absolute inset-0 hex-pattern opacity-10"></div>

<div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2"></div>
<div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="process-text-group">

<div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-[#1a1a1a] text-[10px] uppercase tracking-widest text-gray-300 w-max mb-10 process-fade">
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="shield-check"></i>
<span className="font-medium">Licensed, Bonded, Insured</span>
</div>

<h2 className="text-5xl md:text-7xl leading-[1.05] mb-8 process-fade">
<span className="serif block">Peace of mind is</span>
<span className="serif italic text-gray-500 block">part of the plan.</span>
</h2>

<p className="text-xl md:text-2xl text-gray-400 font-light max-w-lg mb-16 leading-relaxed process-fade">
                            We've replaced the chaos of traditional contracting with a tech-forward, organized approach.
                        </p>

<div className="space-y-10">

<div className="flex gap-6 group process-fade">
<div className="w-14 h-14 rounded-full border border-white/10 bg-[#1a1a1a] flex items-center justify-center shrink-0 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/5 transition-all duration-500">
<i className="w-5 h-5 text-emerald-500" data-lucide="check"></i>
</div>
<div>
<h4 className="text-xl font-medium mb-2 group-hover:text-emerald-400 transition-colors">Fixed Price Contracts</h4>
<p className="text-base text-gray-500 font-light leading-relaxed">No surprise costs. The price we quote is the price you pay.</p>
</div>
</div>

<div className="flex gap-6 group process-fade">
<div className="w-14 h-14 rounded-full border border-white/10 bg-[#1a1a1a] flex items-center justify-center shrink-0 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/5 transition-all duration-500">
<i className="w-5 h-5 text-emerald-500" data-lucide="user"></i>
</div>
<div>
<h4 className="text-xl font-medium mb-2 group-hover:text-emerald-400 transition-colors">Dedicated Project Manager</h4>
<p className="text-base text-gray-500 font-light leading-relaxed">One point of contact. No chasing down subcontractors.</p>
</div>
</div>

<div className="flex gap-6 group process-fade">
<div className="w-14 h-14 rounded-full border border-white/10 bg-[#1a1a1a] flex items-center justify-center shrink-0 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/5 transition-all duration-500">
<i className="w-5 h-5 text-emerald-500" data-lucide="clock"></i>
</div>
<div>
<h4 className="text-xl font-medium mb-2 group-hover:text-emerald-400 transition-colors">On-Time Guarantee</h4>
<p className="text-base text-gray-500 font-light leading-relaxed">We set a schedule and stick to it, with penalties if we're late.</p>
</div>
</div>
</div>
</div>

<div className="relative perspective-1000">

<div className="bg-[#1C1C1C] rounded-3xl border border-white/5 p-8 md:p-12 relative overflow-hidden process-card shadow-2xl transform hover:border-white/10 transition-colors duration-500">

<div className="flex justify-between items-start mb-16 border-b border-white/5 pb-8">
<div>
<h3 className="text-xl font-medium mb-1 tracking-tight">Client Portal</h3>
<p className="text-sm text-gray-500 font-light">Live view of The Larson Residence</p>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/10 rounded-full">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[11px] text-emerald-500 font-medium tracking-wide">On Track</span>
</div>
</div>

<div className="relative pl-4 space-y-12">

<div className="absolute left-[23px] top-2 bottom-6 w-px bg-white/5 timeline-line origin-top"></div>

<div className="relative flex gap-8 opacity-40 timeline-item">

<div className="w-3 h-3 rounded-full bg-gray-600 relative z-10 mt-2 ml-[2px]"></div>
<div>
<h4 className="text-lg font-medium line-through decoration-gray-600">Demolition &amp; Prep</h4>
<p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Completed Oct 12</p>
</div>
</div>

<div className="relative flex gap-8 timeline-item">

<div className="w-5 h-5 rounded-full border-[2px] border-emerald-500 bg-[#1C1C1C] relative z-10 mt-1.5 -ml-[3px] shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Rough Installation</h4>
<p className="text-sm text-gray-400 mb-5 leading-relaxed max-w-xs font-light">Plumbing and electrical rough-in passing inspection today.</p>

<div className="group/file flex items-center gap-3 bg-[#252525] border border-white/5 rounded-lg p-3 w-max hover:bg-[#2A2A2A] hover:border-white/10 transition-all cursor-pointer">
<div className="w-8 h-8 rounded bg-red-500/10 flex items-center justify-center text-red-400 group-hover/file:bg-red-500/20 transition-colors">
<i className="w-4 h-4" data-lucide="file-text"></i>
</div>
<div className="pr-2">
<div className="text-[11px] text-gray-200 font-medium">Inspection_Report.pdf</div>
</div>
</div>
</div>
</div>

<div className="relative flex gap-8 opacity-30 timeline-item">
<div className="w-3 h-3 rounded-full bg-gray-700 relative z-10 mt-2 ml-[2px]"></div>
<div>
<h4 className="text-lg font-medium">Finishes</h4>
<p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Scheduled for Nov 01</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#080808] text-white relative overflow-hidden dashboard-section" id="dashboard">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-teal-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px]"></div>
</div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">

<div className="mb-24 dash-header">
<div className="text-[10px] uppercase tracking-[0.2em] text-teal-500 mb-4 font-semibold">Larau OS Interface</div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 leading-tight">
                        See build, budget, <br/>and schedule
                    </h2>
<p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
                        Track weekly momentum across trades, inspections, and selections — know exactly when to approve, pause, or renegotiate.
                    </p>
</div>
<div className="grid lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-3 space-y-16 hidden lg:block">
<div className="dash-feature-left group">
<i className="w-6 h-6 text-gray-400 mb-4 group-hover:text-teal-400 transition-colors" data-lucide="activity"></i>
<h4 className="text-sm font-medium text-gray-200 mb-2">Know when to push</h4>
<p className="text-sm text-gray-500 leading-relaxed">Daily signals highlight risk zones before delays cascade.</p>
</div>
<div className="dash-feature-left group">
<i className="w-6 h-6 text-gray-400 mb-4 group-hover:text-teal-400 transition-colors" data-lucide="trending-up"></i>
<h4 className="text-sm font-medium text-gray-200 mb-2">Trend lines, no noise</h4>
<p className="text-sm text-gray-500 leading-relaxed">Selections, budget, and schedule unify into a single trajectory.</p>
</div>
</div>

<div className="lg:col-span-6 dash-ui-wrapper perspective-1000">
<div className="bg-[#141414] border border-white/5 rounded-3xl p-6 shadow-2xl relative overflow-hidden group dash-ui-card hover:border-white/10 transition-colors duration-500">

<div className="flex justify-between items-center mb-8">
<div className="font-medium text-sm text-gray-300">Build Dashboard</div>
<div className="flex items-center gap-2 px-2 py-1 bg-green-500/10 rounded-full border border-green-500/10">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] font-medium text-green-500 uppercase tracking-wide">Live</span>
</div>
</div>

<div className="bg-[#1A1A1A] rounded-xl p-5 border border-white/5 mb-4 relative overflow-hidden">
<div className="flex justify-between items-start mb-1">
<div className="text-xs text-gray-500 font-medium mb-2">Today's focus</div>
<div className="flex items-center gap-1.5 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="clock"></i> Due in 2d
                                    </div>
</div>
<div className="text-lg font-medium text-white mb-4">Approve stone veneer package</div>

<div className="h-1.5 w-full bg-white/5 rounded-full mb-3 overflow-hidden">
<div className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 w-0 progress-animate" data-width="65%"></div>
</div>
<div className="flex justify-between text-[10px] text-gray-500 uppercase tracking-wide">
<span>Specs 4/6 complete</span>
<span>Vendor hold: 48 hrs</span>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-4">

<div className="bg-[#1A1A1A] rounded-xl p-5 border border-white/5">
<div className="flex justify-between items-start mb-4">
<div className="text-xs text-gray-500">Weekly progress</div>
<i className="w-3.5 h-3.5 text-gray-600" data-lucide="calendar"></i>
</div>
<div className="text-2xl font-semibold mb-1">76%</div>
<div className="text-[10px] text-gray-500 mb-3">Schedule alignment</div>
<div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-0 progress-animate" data-width="76%"></div>
</div>
</div>

<div className="bg-[#1A1A1A] rounded-xl p-5 border border-white/5">
<div className="flex justify-between items-start mb-4">
<div className="text-xs text-gray-500">Budget health</div>
<i className="w-3.5 h-3.5 text-gray-600" data-lucide="wallet"></i>
</div>
<div className="text-2xl font-semibold mb-1">2.3%</div>
<div className="text-[10px] text-gray-500 mb-3">Variance YTD • $142k contingency</div>
<div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-0 progress-animate" data-width="85%"></div>
</div>
</div>
</div>

<div className="bg-[#1A1A1A] rounded-xl p-5 border border-white/5">
<div className="flex justify-between text-xs text-gray-500 mb-4">
<span>This week</span>
<span>Mon—Sun</span>
</div>
<div className="space-y-4">

<div className="flex items-center justify-between group/item cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2"></i>
</div>
<span className="text-sm text-gray-300 group-hover/item:text-white transition-colors">Framing inspection passed</span>
</div>
<span className="text-xs text-gray-600">14:26</span>
</div>

<div className="flex items-center justify-between group/item cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
<i className="w-3.5 h-3.5" data-lucide="file-check"></i>
</div>
<span className="text-sm text-gray-300 group-hover/item:text-white transition-colors">Cabinet drawings v3 uploaded</span>
</div>
<span className="text-xs text-gray-600">09:10</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 space-y-16 lg:pl-8">

<div className="block lg:hidden space-y-16">
<div className="dash-feature-right group">
<i className="w-6 h-6 text-gray-400 mb-4 group-hover:text-teal-400 transition-colors" data-lucide="activity"></i>
<h4 className="text-sm font-medium text-gray-200 mb-2">Know when to push</h4>
<p className="text-sm text-gray-500 leading-relaxed">Daily signals highlight risk zones before delays cascade.</p>
</div>
<div className="dash-feature-right group">
<i className="w-6 h-6 text-gray-400 mb-4 group-hover:text-teal-400 transition-colors" data-lucide="trending-up"></i>
<h4 className="text-sm font-medium text-gray-200 mb-2">Trend lines, no noise</h4>
<p className="text-sm text-gray-500 leading-relaxed">Selections, budget, and schedule unify into a single trajectory.</p>
</div>
</div>

<div className="dash-feature-right group">
<i className="w-6 h-6 text-gray-400 mb-4 group-hover:text-teal-400 transition-colors" data-lucide="shield"></i>
<h4 className="text-sm font-medium text-gray-200 mb-2">Built-in version control</h4>
<p className="text-sm text-gray-500 leading-relaxed">Rollback to any prior decision or specification with one click.</p>
</div>
<div className="dash-feature-right group">
<i className="w-6 h-6 text-gray-400 mb-4 group-hover:text-teal-400 transition-colors" data-lucide="message-square"></i>
<h4 className="text-sm font-medium text-gray-200 mb-2">Direct team chat</h4>
<p className="text-sm text-gray-500 leading-relaxed">Ask questions, approve changes, or flag issues without leaving the portal.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[var(--c-bg)] relative z-20 unify-section">
<div className="max-w-[1400px] mx-auto">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

<div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 unify-card">
<i className="w-6 h-6 text-gray-700 mb-4" data-lucide="calendar-clock"></i>
<h3 className="text-base font-semibold mb-3 tracking-tight">Adaptive Scheduling</h3>
<p className="text-sm text-gray-500 leading-relaxed">Build phases adjust in real time to inspections and site conditions.</p>
</div>

<div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 unify-card">
<i className="w-6 h-6 text-gray-700 mb-4" data-lucide="piggy-bank"></i>
<h3 className="text-base font-semibold mb-3 tracking-tight">Budget Guardrails</h3>
<p className="text-sm text-gray-500 leading-relaxed">Know when to invest or save — guided by smart cost bands.</p>
</div>

<div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 unify-card">
<i className="w-6 h-6 text-gray-700 mb-4" data-lucide="layout-dashboard"></i>
<h3 className="text-base font-semibold mb-3 tracking-tight">All-in-One Oversight</h3>
<p className="text-sm text-gray-500 leading-relaxed">Design, build, selections, and warranty tracked together.</p>
</div>

<div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 unify-card">
<i className="w-6 h-6 text-gray-700 mb-4" data-lucide="shield-check"></i>
<h3 className="text-base font-semibold mb-3 tracking-tight">Rest-Easy Warranty</h3>
<p className="text-sm text-gray-500 leading-relaxed">2-year craftsmanship + 10-year structural coverage.</p>
</div>
</div>

<div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px] unify-main-card opacity-0 translate-y-20">

<div className="p-8 md:p-16 lg:w-[45%] flex flex-col justify-between">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-8 text-gray-900">
                                We unify design, engineering, and construction into one adaptive plan — no delays, no guesswork.
                            </h2>
<p className="text-lg text-gray-500 font-light leading-relaxed mb-10">
                                AetherLink™, our client portal, keeps every decision, drawing, and schedule connected so your home moves forward smoothly from concept to keys.
                            </p>
<div className="flex flex-wrap gap-4 mb-16">
<button className="px-8 py-4 bg-[#121212] text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                                    Get a Proposal
                                </button>
<button className="px-8 py-4 bg-transparent border border-gray-200 text-gray-900 text-sm font-medium rounded-lg hover:border-gray-900 transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="layout"></i>
                                    See Our Process
                                </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-gray-100">
<div>
<div className="text-3xl font-bold text-gray-900 mb-1">286</div>
<div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Custom Homes</div>
</div>
<div>
<div className="text-3xl font-bold text-gray-900 mb-1">9.8 mo</div>
<div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Avg Build Time</div>
</div>
<div>
<div className="text-3xl font-bold text-gray-900 mb-1">98.7%</div>
<div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Referral Rate</div>
</div>
</div>
</div>

<div className="lg:w-[55%] relative h-[400px] lg:h-auto bg-gray-100">
<img alt="Modern Architecture" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-40 bg-[#E3E1DC] text-center flex flex-col items-center justify-center relative z-10">
<h2 className="display text-3xl md:text-5xl mb-8">Designing for Eternity</h2>
<div className="max-w-xl text-gray-600 font-light mb-12 leading-relaxed">
                Our philosophy is rooted in the belief that buildings should age, not deteriorate. We use materials that develop a patina, recording the passage of time.
            </div>
<div className="h-16 w-px bg-black/20"></div>
</section>
</div>


<footer className="footer-sticky">
<div className="relative z-10 text-center">
<div className="text-xs uppercase tracking-[0.3em] mb-4 text-gray-500">Have a project?</div>
<a className="display text-[8vw] leading-none hover:text-gray-400 transition-colors" href="mailto:hello@aethereal.com">
                LET'S TALK
            </a>
<div className="flex justify-center gap-8 mt-12 text-sm uppercase tracking-widest text-gray-400">
<a className="hover:text-white" href="#">Instagram</a>
<a className="hover:text-white" href="#">LinkedIn</a>
<a className="hover:text-white" href="#">Behance</a>
</div>
<div className="mt-20 text-[10px] text-gray-700">
                © 2025 AETHEREAL ARCHITECTURE
            </div>
</div>

<img className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp"/>
</footer>


    </>
  );
}
