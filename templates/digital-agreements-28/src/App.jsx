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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Open Sans', 'sans-serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
700: '#44403c',
800: '#292524',
900: '#1c1917',
950: '#0c0a09',
},
blue: {
500: '#3b82f6',
600: '#2563eb',
}
},
animation: {
'spin-slow': 'spin 12s linear infinite',
'marquee': 'marquee 25s linear infinite',
'beam': 'beam 2s linear infinite',
'sonar': 'sonar 2s cubic-bezier(0, 0, 0.2, 1) infinite',
'fade-in': 'fadeIn 0.5s ease-out forwards',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
beam: {
'0%, 100%': { opacity: '0' },
'50%': { opacity: '1' },
},
sonar: {
'0%': { transform: 'scale(0.9)', opacity: '0.8' },
'100%': { transform: 'scale(2)', opacity: '0' },
},
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // --- Navigation / Routing Logic ---
        function route(pageId) {
            // Hide all views
            document.querySelectorAll('.page-view').forEach(view => {
                view.classList.remove('active');
            });
            
            // Show target view
            const target = document.getElementById('view-' + pageId);
            if(target) {
                target.classList.add('active');
                
                // Refresh animations for the new view
                ScrollTrigger.refresh();
                
                // Specific animation trigger for views that were hidden
                if(pageId === 'how-it-works' || pageId === 'about' || pageId === 'pricing') {
                    // Simple re-trigger of CSS animations by reflow
                    target.style.animation = 'none';
                    target.offsetHeight; /* trigger reflow */
                    target.style.animation = null; 
                }
            }

            // Update Nav State
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('data-target') === pageId) {
                    link.classList.add('active');
                }
            });

            // Close Mobile Menu if open
            document.getElementById('mobile-menu').classList.add('hidden');

            // Scroll to top
            window.scrollTo(0, 0);
        }

        function toggleMobileMenu() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        }

        // --- Accordion Logic ---
        function toggleAccordion(button) {
            const item = button.parentElement;
            const content = item.querySelector('.accordion-content');
            
            // Close others
            document.querySelectorAll('.accordion-item').forEach(acc => {
                if(acc !== item) {
                    acc.classList.remove('active');
                    acc.querySelector('.accordion-content').style.maxHeight = null;
                }
            });

            item.classList.toggle('active');
            
            // GSAP/CSS Logic for smoothness is handled by class toggle, 
            // but we ensure max-height is set for transition
            if (item.classList.contains('active')) {
                // Approximate max height or calculate it
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        }

        // --- GSAP Animations (Re-used from Home) ---
        gsap.registerPlugin(ScrollTrigger);

        function initAnimations() {
            document.querySelectorAll('.split-reveal').forEach(el => {
                const text = el.innerText;
                const words = text.split(' ').filter(w => w.trim() !== '');
                el.innerHTML = '';
                
                words.forEach(word => {
                    const wrapper = document.createElement('span');
                    wrapper.className = 'inline-block overflow-hidden align-bottom mr-[0.25em]'; 
                    const span = document.createElement('span');
                    span.className = 'inline-block translate-y-full';
                    span.textContent = word;
                    wrapper.appendChild(span);
                    el.appendChild(wrapper);
                });

                gsap.to(el.querySelectorAll('span > span'), {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    },
                    y: 0,
                    duration: 1,
                    stagger: 0.05,
                    ease: "power4.out"
                });
            });

            gsap.to(".parallax-bg", {
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true
                },
                y: 200,
                ease: "none"
            });
        }

        initAnimations();

        // --- 3D Card Carousel Logic ---
        const cards = [
            document.getElementById('card-1'),
            document.getElementById('card-2'),
            document.getElementById('card-3')
        ];
        
        if (cards[0]) { // Check if cards exist (Home view)
            let currentIndex = 0;

            function updateCards() {
                cards.forEach((card, index) => {
                    card.style.transform = '';
                    card.style.zIndex = '';
                    card.style.opacity = '';
                    card.style.filter = '';

                    let position = (index - currentIndex + cards.length) % cards.length;

                    if (position === 0) {
                        card.style.zIndex = '30';
                        card.style.transform = 'translate3d(0, 0, 0) scale(1)';
                        card.style.opacity = '1';
                        card.style.filter = 'blur(0px)';
                    } else if (position === 1) {
                        card.style.zIndex = '20';
                        card.style.transform = 'translate3d(40px, -10px, -50px) scale(0.9) rotateY(-5deg)';
                        card.style.opacity = '0.7';
                        card.style.filter = 'blur(1px)';
                    } else {
                        card.style.zIndex = '10';
                        card.style.transform = 'translate3d(-40px, -20px, -100px) scale(0.8) rotateY(5deg)';
                        card.style.opacity = '0.5';
                        card.style.filter = 'blur(2px)';
                    }
                });
            }

            updateCards();

            document.getElementById('nextBtn')?.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % cards.length;
                updateCards();
            });

            document.getElementById('prevBtn')?.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + cards.length) % cards.length;
                updateCards();
            });

            setInterval(() => {
                currentIndex = (currentIndex + 1) % cards.length;
                updateCards();
            }, 4000);
        }
        
        // Initial Nav State
        route('home');

    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-stone-200/50 dark:border-stone-800/50 bg-stone-100/80 dark:bg-stone-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#" onclick="route('home')">
<div className="relative flex items-center justify-center size-8 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg shadow-sm group-hover:border-blue-500/50 transition-colors">
<iconify-icon className="text-blue-500 text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<span className="font-heading font-bold text-lg tracking-tighter text-stone-900 dark:text-white">middleman</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500 dark:text-stone-400">
<button className="nav-link hover:text-stone-900 dark:hover:text-white transition-colors" data-target="home" onclick="route('home')">Home</button>
<button className="nav-link hover:text-stone-900 dark:hover:text-white transition-colors" data-target="how-it-works" onclick="route('how-it-works')">How it Works</button>
<button className="nav-link hover:text-stone-900 dark:hover:text-white transition-colors" data-target="about" onclick="route('about')">About</button>
<button className="nav-link hover:text-stone-900 dark:hover:text-white transition-colors" data-target="pricing" onclick="route('pricing')">Pricing</button>
<button className="nav-link hover:text-stone-900 dark:hover:text-white transition-colors" data-target="contact" onclick="route('contact')">Contact</button>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:block text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white px-3 py-2 transition-colors">Sign In</button>
<button className="bg-stone-900 dark:bg-white text-white dark:text-stone-950 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm hover:opacity-90 transition-opacity">Get Started</button>

<button className="md:hidden text-stone-600 dark:text-stone-400 text-xl" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 p-4 absolute w-full left-0 top-16 shadow-xl flex-col gap-4" id="mobile-menu">
<button className="text-left text-sm font-medium text-stone-600 dark:text-stone-300" onclick="route('home')">Home</button>
<button className="text-left text-sm font-medium text-stone-600 dark:text-stone-300" onclick="route('how-it-works')">How it Works</button>
<button className="text-left text-sm font-medium text-stone-600 dark:text-stone-300" onclick="route('about')">About</button>
<button className="text-left text-sm font-medium text-stone-600 dark:text-stone-300" onclick="route('pricing')">Pricing</button>
<button className="text-left text-sm font-medium text-stone-600 dark:text-stone-300" onclick="route('contact')">Contact</button>
</div>
</nav>


<main className="page-view active" id="view-home">

<section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 md:px-6 overflow-hidden">
<div className="absolute inset-0 z-0 bg-grid opacity-60 parallax-bg" data-speed="0.2"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-100/50 to-stone-100 dark:via-stone-950/50 dark:to-stone-950 z-0 pointer-events-none"></div>
<div className="relative z-10 w-full max-w-6xl bg-white/40 dark:bg-stone-900/40 backdrop-blur-xl border border-stone-200 dark:border-stone-800 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl shadow-stone-200/50 dark:shadow-black/50 overflow-hidden">
<div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] pointer-events-none animate-spin-slow"></div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 animate-slide-in opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                            v1.0 Public Beta
                        </div>
<h1 className="font-heading font-semibold text-5xl md:text-6xl lg:text-7xl tracking-tight text-stone-900 dark:text-white leading-[1.1] split-reveal">
                            The Neutral Ground for Digital Agreements.
                        </h1>
<p className="font-sans text-lg text-stone-600 dark:text-stone-400 max-w-xl mx-auto lg:mx-0 leading-relaxed split-reveal">
                            Create, approve, and verify agreements between two parties. Structured security without the complexity.
                        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4 animate-slide-in opacity-0" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
<button className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transform hover:-translate-y-0.5" onclick="route('pricing')">
                                Start Agreement
                                <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700 px-6 py-3.5 rounded-xl font-semibold transition-all hover:border-stone-300 dark:hover:border-stone-600" onclick="route('how-it-works')">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
                                See how it works
                            </button>
</div>
</div>

<div className="relative h-[400px] w-full flex items-center justify-center perspective-1000 animate-slide-in opacity-0" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-64 h-64 rounded-full border border-blue-500/20 animate-sonar"></div>
<div className="w-64 h-64 rounded-full border border-blue-500/20 animate-sonar" style={{animationDelay: '1s'}}></div>
</div>
<div className="relative w-72 h-96 preserve-3d" id="card-carousel">
<div className="card-stack-item absolute inset-0 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-xl p-6 flex flex-col justify-between" id="card-1">
<div className="flex justify-between items-start">
<div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-500">
<iconify-icon className="text-xl" icon="solar:document-add-linear"></iconify-icon>
</div>
<span className="text-xs font-mono text-stone-400">#AG-2024-01</span>
</div>
<div className="space-y-3">
<div className="h-2 w-1/3 bg-stone-100 dark:bg-stone-700 rounded-full"></div>
<div className="h-2 w-full bg-stone-100 dark:bg-stone-700 rounded-full"></div>
<div className="h-2 w-2/3 bg-stone-100 dark:bg-stone-700 rounded-full"></div>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-stone-100 dark:border-stone-700">
<div className="flex -space-x-2">
<div className="size-8 rounded-full bg-stone-200 border-2 border-white dark:border-stone-800"></div>
<div className="size-8 rounded-full bg-blue-100 border-2 border-white dark:border-stone-800 flex items-center justify-center text-[10px] font-bold text-blue-600">You</div>
</div>
<span className="text-xs text-stone-500">Drafting</span>
</div>
</div>
<div className="card-stack-item absolute inset-0 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-xl p-6 flex flex-col justify-between" id="card-2">
<div className="flex justify-between items-start">
<div className="size-10 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-500">
<iconify-icon className="text-xl" icon="solar:verified-check-linear"></iconify-icon>
</div>
<span className="text-xs font-mono text-stone-400">#AG-2024-89</span>
</div>
<div className="space-y-3">
<div className="h-2 w-1/2 bg-stone-100 dark:bg-stone-700 rounded-full"></div>
<div className="h-2 w-3/4 bg-stone-100 dark:bg-stone-700 rounded-full"></div>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-stone-100 dark:border-stone-700">
<span className="px-2 py-1 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-xs font-bold">Signed</span>
</div>
</div>
<div className="card-stack-item absolute inset-0 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-xl p-6 flex flex-col justify-between" id="card-3">
<div className="flex justify-between items-start">
<div className="size-10 rounded-full bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-500">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<span className="text-xs font-mono text-stone-400">#AG-2024-44</span>
</div>
<div className="space-y-4 text-center py-4">
<p className="text-sm text-stone-600 dark:text-stone-300">Pending Approval</p>
<div className="w-full bg-stone-100 dark:bg-stone-700 h-1.5 rounded-full overflow-hidden">
<div className="bg-purple-500 h-full w-2/3"></div>
</div>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-stone-100 dark:border-stone-700">
<span className="text-xs text-stone-500">Expires in 2 days</span>
</div>
</div>
</div>
<div className="absolute bottom-[-40px] flex gap-4">
<button className="p-2 rounded-full border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors text-stone-500" id="prevBtn">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="p-2 rounded-full border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors text-stone-500" id="nextBtn">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 overflow-hidden relative">
<div className="absolute inset-0 z-10 mask-fade-sides pointer-events-none"></div>
<p className="text-center text-sm font-semibold text-stone-400 uppercase tracking-widest mb-8">Trusted by forward-thinking teams</p>
<div className="flex gap-12 w-max animate-marquee opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex gap-12 items-center text-2xl font-heading font-bold text-stone-800 dark:text-stone-200">
<span>ACME Corp</span>
<span>StarkInd</span>
<span>WayneEnt</span>
<span>Cyberdyne</span>
<span>Globex</span>
<span>Umbrella</span>
<span>Massive</span>
<span>Hooli</span>
<span>ACME Corp</span>
<span>StarkInd</span>
<span>WayneEnt</span>
<span>Cyberdyne</span>
<span>Globex</span>
<span>Umbrella</span>
<span>Massive</span>
<span>Hooli</span>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="font-heading font-semibold text-3xl md:text-4xl text-stone-900 dark:text-white tracking-tight mb-4 split-reveal">
                    Structure out of Chaos.
                </h2>
<p className="text-stone-600 dark:text-stone-400 text-lg split-reveal">
                    Middleman provides the essential primitives for agreements, stripped of legal jargon and complexity.
                </p>
</div>
<div className="grid md:grid-cols-3 border-l border-t border-stone-200 dark:border-stone-800 relative">
<div className="absolute left-1/3 top-0 h-full w-[1px] bg-stone-200 dark:bg-stone-800 hidden md:block overflow-hidden"><div className="beam-line beam-move"></div></div>
<div className="absolute left-2/3 top-0 h-full w-[1px] bg-stone-200 dark:bg-stone-800 hidden md:block overflow-hidden"><div className="beam-line beam-move" style={{animationDelay: '1s'}}></div></div>
<div className="group p-8 border-r border-b border-stone-200 dark:border-stone-800 relative overflow-hidden bg-stone-50/50 dark:bg-stone-900/50 hover:bg-white dark:hover:bg-stone-900 transition-colors">
<div className="size-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-xl text-stone-900 dark:text-white mb-2">Smart Drafting</h3>
<p className="text-stone-600 dark:text-stone-400 leading-relaxed">Create structured agreements using standardized templates. No ambiguity.</p>
</div>
<div className="group p-8 border-r border-b border-stone-200 dark:border-stone-800 relative overflow-hidden bg-stone-50/50 dark:bg-stone-900/50 hover:bg-white dark:hover:bg-stone-900 transition-colors">
<div className="size-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:user-check-linear"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-xl text-stone-900 dark:text-white mb-2">Two-Party Verify</h3>
<p className="text-stone-600 dark:text-stone-400 leading-relaxed">Both parties must cryptographically sign off on the exact same version.</p>
</div>
<div className="group p-8 border-r border-b border-stone-200 dark:border-stone-800 relative overflow-hidden bg-stone-50/50 dark:bg-stone-900/50 hover:bg-white dark:hover:bg-stone-900 transition-colors">
<div className="size-12 rounded-lg bg-orange-100 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:archive-linear"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-xl text-stone-900 dark:text-white mb-2">Instant Retrieval</h3>
<p className="text-stone-600 dark:text-stone-400 leading-relaxed">Access your history anytime. Powerful search filters by date or agreement type.</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto bg-stone-50 dark:bg-stone-900/50 rounded-3xl mb-12">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="font-heading font-semibold text-3xl md:text-4xl text-stone-900 dark:text-white tracking-tight">
                        Bank-grade Security. <br/>
<span className="text-stone-400">Neutral Ground.</span>
</h2>
<p className="text-stone-600 dark:text-stone-400">We prioritize the integrity of your agreements above all else.</p>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<iconify-icon className="text-2xl text-blue-500 mt-1" icon="solar:shield-check-linear"></iconify-icon>
<div>
<h4 className="font-semibold text-stone-900 dark:text-white">Immutability</h4>
<p className="text-stone-500 dark:text-stone-400 text-sm mt-1">Once signed, agreements cannot be altered without breaking the cryptographic seal.</p>
</div>
</div>
</div>
<button className="text-blue-600 hover:text-blue-500 font-semibold inline-flex items-center gap-1" onclick="route('how-it-works')">
                        Learn how we protect you <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="relative bg-stone-900 rounded-3xl p-8 shadow-2xl overflow-hidden">
<div className="flex items-center gap-2 mb-6">
<div className="size-3 rounded-full bg-red-500"></div>
<div className="size-3 rounded-full bg-yellow-500"></div>
<div className="size-3 rounded-full bg-green-500"></div>
</div>
<div className="font-mono text-sm text-stone-400 space-y-2">
<p><span className="text-blue-400">const</span> agreement = {</p>
<p className="pl-4">id: <span className="text-emerald-400">"ag_8823_secure"</span>,</p>
<p className="pl-4">status: <span className="text-emerald-400">"LOCKED"</span>,</p>
<p className="pl-4">hash: <span className="text-orange-400">"0x7f83b1..."</span>,</p>
<p className="pl-4">timestamp: <span className="text-blue-400">1715423891</span></p>
<p>}</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 text-center">
<h2 className="font-heading font-semibold text-4xl md:text-5xl text-stone-900 dark:text-white tracking-tight mb-6">
                Ready to seal the deal?
            </h2>
<div className="flex justify-center gap-4">
<button className="bg-stone-900 dark:bg-white text-white dark:text-stone-950 px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity" onclick="route('pricing')">
                    View Pricing
                </button>
</div>
</section>
</main>

<main className="page-view" id="view-how-it-works">
<section className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
<h1 className="font-heading font-semibold text-4xl md:text-5xl text-stone-900 dark:text-white mb-6 animate-fade-in">Complexity, simplified.</h1>
<p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
                We've broken down the legal process into four immutable steps. No expensive lawyers, just clarity.
            </p>
</section>

<section className="py-12 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 bg-stone-50 dark:bg-stone-900 p-8 rounded-2xl border border-stone-200 dark:border-stone-800">
<div className="space-y-4">
<div className="h-4 w-1/3 bg-stone-200 dark:bg-stone-800 rounded"></div>
<div className="h-8 w-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded p-2 text-xs text-stone-400 font-mono">Scope of work: Website redesign...</div>
<div className="h-8 w-2/3 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded p-2 text-xs text-stone-400 font-mono">Payment: $5,000 upon completion...</div>
</div>
</div>
<div className="order-1 md:order-2 space-y-4">
<div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center font-bold text-xl">1</div>
<h3 className="text-2xl font-bold text-stone-900 dark:text-white">Structured Drafting</h3>
<p className="text-stone-600 dark:text-stone-400">Define the terms using our modular block system. Input specific deliverables, deadlines, and payment terms without the fluff.</p>
</div>
</div>
</section>

<section className="py-12 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-4">
<div className="size-12 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center font-bold text-xl">2</div>
<h3 className="text-2xl font-bold text-stone-900 dark:text-white">Secure Invite</h3>
<p className="text-stone-600 dark:text-stone-400">Send a unique, encrypted link to the counterparty. They access the draft in a read-only environment until they verify their identity.</p>
</div>
<div className="bg-stone-50 dark:bg-stone-900 p-8 rounded-2xl border border-stone-200 dark:border-stone-800 flex items-center justify-center">
<div className="bg-white dark:bg-stone-800 px-6 py-4 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 flex items-center gap-3">
<iconify-icon className="text-purple-500 text-xl" icon="solar:link-circle-linear"></iconify-icon>
<span className="text-sm font-mono text-stone-500">middleman.com/ag/8x92...</span>
<button className="text-xs bg-stone-100 dark:bg-stone-700 px-2 py-1 rounded">Copy</button>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 bg-stone-50 dark:bg-stone-900 p-8 rounded-2xl border border-stone-200 dark:border-stone-800 relative">
<div className="absolute top-6 right-6 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-3 py-1 rounded-full text-xs font-medium">Suggestion</div>
<p className="text-stone-500 dark:text-stone-400 text-sm line-through">Payment in 30 days</p>
<p className="text-stone-900 dark:text-white text-sm font-medium">Payment in 15 days</p>
</div>
<div className="order-1 md:order-2 space-y-4">
<div className="size-12 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center font-bold text-xl">3</div>
<h3 className="text-2xl font-bold text-stone-900 dark:text-white">Versioned Negotiation</h3>
<p className="text-stone-600 dark:text-stone-400">Comments are threaded directly on specific clauses. Changes create new versions automatically, preserving the history of the deal.</p>
</div>
</div>
</section>

<section className="py-12 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-4">
<div className="size-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center font-bold text-xl">4</div>
<h3 className="text-2xl font-bold text-stone-900 dark:text-white">Cryptographic Seal</h3>
<p className="text-stone-600 dark:text-stone-400">Both parties sign. The document is hashed, timestamped, and locked in the vault. A tamper-proof PDF is generated for both.</p>
</div>
<div className="bg-stone-50 dark:bg-stone-900 p-8 rounded-2xl border border-stone-200 dark:border-stone-800 flex items-center justify-center">
<div className="size-24 rounded-full bg-emerald-100 dark:bg-emerald-900/20 text-emerald-500 flex items-center justify-center">
<iconify-icon className="text-4xl" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto">
<h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<div className="accordion-item border-b border-stone-200 dark:border-stone-800 pb-4">
<button className="w-full flex justify-between items-center text-left font-medium text-stone-900 dark:text-white py-2" onclick="toggleAccordion(this)">
                        Is this legally binding?
                        <iconify-icon className="accordion-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<p className="text-stone-600 dark:text-stone-400 pt-2 pb-4">Yes. Middleman uses standard e-signature laws (ESIGN Act, eIDAS) to ensure all agreements are court-admissible evidence of a contract.</p>
</div>
</div>
<div className="accordion-item border-b border-stone-200 dark:border-stone-800 pb-4">
<button className="w-full flex justify-between items-center text-left font-medium text-stone-900 dark:text-white py-2" onclick="toggleAccordion(this)">
                        Can I edit after signing?
                        <iconify-icon className="accordion-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<p className="text-stone-600 dark:text-stone-400 pt-2 pb-4">No. To ensure integrity, signed documents are immutable. To make changes, you must create a new amendment agreement which references the original.</p>
</div>
</div>
<div className="accordion-item border-b border-stone-200 dark:border-stone-800 pb-4">
<button className="w-full flex justify-between items-center text-left font-medium text-stone-900 dark:text-white py-2" onclick="toggleAccordion(this)">
                        What if there is a dispute?
                        <iconify-icon className="accordion-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<p className="text-stone-600 dark:text-stone-400 pt-2 pb-4">We act as the neutral witness. We provide the audit logs and signed hash to prove exactly what was agreed upon and when.</p>
</div>
</div>
</div>
</section>
<section className="py-20 text-center bg-stone-900 text-white rounded-none md:rounded-3xl max-w-6xl mx-auto mb-12">
<h2 className="text-3xl font-bold mb-6">Start your first agreement today</h2>
<button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-bold" onclick="route('pricing')">View Plans</button>
</section>
</main>

<main className="page-view" id="view-about">
<section className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
<span className="text-blue-600 dark:text-blue-400 font-mono text-sm tracking-widest uppercase mb-4 block">Our Mission</span>
<h1 className="font-heading font-semibold text-4xl md:text-5xl lg:text-6xl text-stone-900 dark:text-white mb-8 animate-fade-in leading-tight">
                To reduce human friction through absolute clarity.
            </h1>
<p className="text-xl text-stone-600 dark:text-stone-400 leading-relaxed animate-fade-in" style={{animationDelay: '0.1s'}}>
                Conflict often arises not from malice, but from misunderstanding. We build tools that remove ambiguity from human cooperation.
            </p>
</section>
<section className="py-16 px-6 bg-white dark:bg-stone-900 border-y border-stone-200 dark:border-stone-800">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
<div>
<h3 className="font-heading text-2xl font-bold text-stone-900 dark:text-white mb-4">The Neutral Witness</h3>
<p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
                        In the physical world, a handshake is a symbol. In the digital world, a handshake is a hash. Middleman exists to be the unbiased third party in every digital interaction. We do not take sides. We do not interpret. We simply record, verify, and secure the truth as agreed upon by both parties.
                    </p>
<p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                        We believe that when expectations are clearly defined and immutably recorded, people are free to focus on the work, not the "what ifs."
                    </p>
</div>
<div className="relative h-64 md:h-auto bg-stone-100 dark:bg-stone-800 rounded-2xl overflow-hidden flex items-center justify-center">

<div className="w-32 h-1 bg-stone-300 dark:bg-stone-600 rounded-full"></div>
<div className="absolute w-8 h-8 bg-stone-900 dark:bg-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
</div>
</div>
</section>
<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-4">Why we exist</h2>
<p className="text-stone-600 dark:text-stone-400">The modern workforce is decentralized and dynamic. Trust is harder to establish.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-6 bg-stone-50 dark:bg-stone-900 rounded-xl">
<iconify-icon className="text-3xl text-stone-700 dark:text-stone-300 mb-4" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h4 className="font-bold text-stone-900 dark:text-white mb-2">For Freelancers</h4>
<p className="text-sm text-stone-500 dark:text-stone-400">Stop chasing payments due to "scope creep." Define it once, get signed, get paid.</p>
</div>
<div className="p-6 bg-stone-50 dark:bg-stone-900 rounded-xl">
<iconify-icon className="text-3xl text-stone-700 dark:text-stone-300 mb-4" icon="solar:case-round-linear"></iconify-icon>
<h4 className="font-bold text-stone-900 dark:text-white mb-2">For Agencies</h4>
<p className="text-sm text-stone-500 dark:text-stone-400">Manage hundreds of contractor agreements in a single, searchable dashboard.</p>
</div>
<div className="p-6 bg-stone-50 dark:bg-stone-900 rounded-xl">
<iconify-icon className="text-3xl text-stone-700 dark:text-stone-300 mb-4" icon="solar:global-linear"></iconify-icon>
<h4 className="font-bold text-stone-900 dark:text-white mb-2">For Everyone</h4>
<p className="text-sm text-stone-500 dark:text-stone-400">A universal standard for "we agree." No lawyer fees required for basic safety.</p>
</div>
</div>
</section>
<section className="py-24 px-6 bg-stone-900 text-white text-center">
<div className="max-w-2xl mx-auto">
<iconify-icon className="text-5xl text-blue-500 mb-6" icon="solar:shield-check-linear"></iconify-icon>
<h2 className="text-3xl font-bold mb-4">Our Trust Pledge</h2>
<p className="text-stone-400 mb-8">We utilize zero-knowledge principles where possible. Your data is encrypted at rest and in transit. We are a US-based company compliant with GDPR and CCPA.</p>
</div>
</section>
</main>

<main className="page-view" id="view-pricing">
<section className="pt-32 pb-12 px-6 text-center">
<h1 className="font-heading font-semibold text-4xl md:text-5xl text-stone-900 dark:text-white mb-4 animate-fade-in">Fair pricing for fair play.</h1>
<p className="text-stone-600 dark:text-stone-400 animate-fade-in" style={{animationDelay: '0.1s'}}>Choose the level of protection that suits your workflow.</p>
</section>
<section className="py-12 px-6 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-3 gap-8">

<div className="bg-white dark:bg-stone-900 p-8 rounded-2xl border border-stone-200 dark:border-stone-800 flex flex-col animate-fade-in" style={{animationDelay: '0.2s'}}>
<h3 className="text-lg font-medium text-stone-500 dark:text-stone-400">Starter</h3>
<div className="my-4 flex items-baseline">
<span className="text-4xl font-bold text-stone-900 dark:text-white">$0</span>
<span className="text-stone-500 ml-2">/month</span>
</div>
<p className="text-sm text-stone-500 mb-6">Perfect for occasional agreements.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-stone-700 dark:text-stone-300">
<iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            3 Agreements per month
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-700 dark:text-stone-300">
<iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Basic Templates
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-700 dark:text-stone-300">
<iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Standard PDF Export
                        </li>
</ul>
<button className="w-full py-3 border border-stone-200 dark:border-stone-700 rounded-xl font-semibold text-stone-900 dark:text-white hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">Start for Free</button>
</div>

<div className="bg-stone-900 dark:bg-white p-8 rounded-2xl border border-stone-900 dark:border-white shadow-xl flex flex-col relative animate-fade-in" style={{animationDelay: '0.3s'}}>
<div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
<h3 className="text-lg font-medium text-stone-400 dark:text-stone-600">Pro</h3>
<div className="my-4 flex items-baseline">
<span className="text-4xl font-bold text-white dark:text-stone-900">$12</span>
<span className="text-stone-500 ml-2">/month</span>
</div>
<p className="text-sm text-stone-400 dark:text-stone-600 mb-6">For freelancers and power users.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-stone-200 dark:text-stone-800">
<iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            Unlimited Agreements
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-200 dark:text-stone-800">
<iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            Custom Branding
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-200 dark:text-stone-800">
<iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            Biometric Verification
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-200 dark:text-stone-800">
<iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            API Access (Read Only)
                        </li>
</ul>
<button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-colors">Get Pro</button>
</div>

<div className="bg-white dark:bg-stone-900 p-8 rounded-2xl border border-stone-200 dark:border-stone-800 flex flex-col animate-fade-in" style={{animationDelay: '0.4s'}}>
<h3 className="text-lg font-medium text-stone-500 dark:text-stone-400">Team</h3>
<div className="my-4 flex items-baseline">
<span className="text-4xl font-bold text-stone-900 dark:text-white">$49</span>
<span className="text-stone-500 ml-2">/month</span>
</div>
<p className="text-sm text-stone-500 mb-6">For agencies and small firms.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-stone-700 dark:text-stone-300">
<iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            5 Team Seats
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-700 dark:text-stone-300">
<iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Unified Billing
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-700 dark:text-stone-300">
<iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Audit Log Export
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-700 dark:text-stone-300">
<iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Priority Support
                        </li>
</ul>
<button className="w-full py-3 border border-stone-200 dark:border-stone-700 rounded-xl font-semibold text-stone-900 dark:text-white hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">Contact Sales</button>
</div>
</div>
</section>
</main>

<main className="page-view" id="view-contact">
<section className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16">

<div className="animate-fade-in">
<h1 className="font-heading font-semibold text-4xl text-stone-900 dark:text-white mb-6">We're here to help.</h1>
<p className="text-stone-600 dark:text-stone-400 mb-12 leading-relaxed">
                        Whether you have questions about security, pricing, or just want to suggest a new feature, our team is ready to listen.
                    </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="size-12 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-900 dark:text-white">
<iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-stone-900 dark:text-white">Email</h4>
<p className="text-stone-500 dark:text-stone-400 text-sm">support@middleman.com</p>
</div>
</div>
<div className="flex gap-4">
<div className="size-12 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-900 dark:text-white">
<iconify-icon className="text-2xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-stone-900 dark:text-white">Office</h4>
<p className="text-stone-500 dark:text-stone-400 text-sm">1200 Neutral Ave, Suite 400<br/>San Francisco, CA 94103</p>
</div>
</div>
</div>
</div>

<div className="bg-white dark:bg-stone-900 p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm animate-fade-in" style={{animationDelay: '0.2s'}}>
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Message sent (simulated).');">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700 dark:text-stone-300">First Name</label>
<input className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700 dark:text-stone-300">Last Name</label>
<input className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700 dark:text-stone-300">Email</label>
<input className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700 dark:text-stone-300">Message</label>
<textarea className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" rows="4"></textarea>
</div>
<button className="w-full bg-stone-900 dark:bg-white text-white dark:text-stone-950 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity" type="submit">Send Message</button>
</form>
</div>
</div>
</section>
</main>

<footer className="py-12 px-6 border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 text-sm">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-blue-500 text-xl" icon="solar:shield-check-linear"></iconify-icon>
<span className="font-heading font-bold tracking-tighter text-stone-900 dark:text-white">middleman</span>
</div>
<p className="text-stone-500 max-w-xs">The neutral third-party platform for structured, verifiable digital agreements.</p>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-bold text-stone-900 dark:text-white">Product</h4>
<button className="text-left text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors" onclick="route('how-it-works')">How it works</button>
<button className="text-left text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors" onclick="route('pricing')">Pricing</button>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-bold text-stone-900 dark:text-white">Company</h4>
<button className="text-left text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors" onclick="route('about')">About</button>
<button className="text-left text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors" onclick="route('contact')">Contact</button>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-bold text-stone-900 dark:text-white">Legal</h4>
<a className="text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-100 dark:border-stone-900">
<p className="text-stone-400">© 2024 Middleman Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<iconify-icon className="text-stone-400 hover:text-stone-900 dark:hover:text-white cursor-pointer text-xl" icon="solar:brand-twitter-linear"></iconify-icon>
<iconify-icon className="text-stone-400 hover:text-stone-900 dark:hover:text-white cursor-pointer text-xl" icon="solar:brand-github-linear"></iconify-icon>
</div>
</div>
</footer>



    </>
  );
}
