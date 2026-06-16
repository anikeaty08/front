import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
primary: {
400: '#22d3ee', // Cyan
500: '#06b6d4',
600: '#2563eb', // Blue
900: '#1e3a8a',
}
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'border-spin': 'border-spin 3s linear infinite', // Ensure this matches keyframes
},
keyframes: {
'border-spin': {
'0%': { '--gradient-angle': '0deg' },
'100%': { '--gradient-angle': '360deg' }
}
}
}
}
}



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


        // Icons
        lucide.createIcons();

        // --- Typewriter Effect ---
        const phrases = ["AI", "Automatyzacji", "Biznesu", "Obsługi Klienta"];
        const typeEl = document.getElementById("typewriter-text");
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function typeEffect() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                typeEl.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50; 
            } else {
                typeEl.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                typeSpeed = 2000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 500;
            }

            setTimeout(typeEffect, typeSpeed);
        }
        typeEffect();


        // --- Fixed Slider Logic (Smooth Continuous Scroll) ---
        const sliderContainer = document.getElementById('slider-container');
        const slideLeftBtn = document.getElementById('slide-left');
        const slideRightBtn = document.getElementById('slide-right');
        
        let scrollAmount = 0;
        let isHovered = false;
        const baseSpeed = 0.8; // Constant slow speed

        // Manual Controls (accelerate movement significantly)
        slideLeftBtn.addEventListener('click', () => {
             sliderContainer.scrollBy({ left: -300, behavior: 'smooth' });
        });

        slideRightBtn.addEventListener('click', () => {
             sliderContainer.scrollBy({ left: 300, behavior: 'smooth' });
        });
        
        // Pause on hover
        sliderContainer.addEventListener('mouseenter', () => isHovered = true);
        sliderContainer.addEventListener('mouseleave', () => isHovered = false);

        function smoothScrollLoop() {
            if (!isHovered) {
                // If we reached the end, snap back to start (or typically you clone elements for infinite loop, 
                // but for simple fix we reset)
                if (sliderContainer.scrollLeft >= (sliderContainer.scrollWidth - sliderContainer.clientWidth - 1)) {
                     sliderContainer.scrollLeft = 0;
                } else {
                     sliderContainer.scrollLeft += baseSpeed;
                }
            }
            requestAnimationFrame(smoothScrollLoop);
        }
        
        // Start loop
        requestAnimationFrame(smoothScrollLoop);


        // --- Process Flow Animation Logic ---
        const steps = document.querySelectorAll('.process-step');
        let currentStep = 1;
        const totalSteps = 3;
        
        const svgNodes = {
            1: { bg: document.querySelector('.node-bg-1'), icon: document.querySelector('.node-icon-1'), group: document.querySelector('.node-1'), path: document.querySelector('.flow-path-1') },
            2: { bg: document.querySelector('.node-bg-2'), icon: document.querySelector('.node-icon-2'), group: document.querySelector('.node-2'), path: document.querySelector('.flow-path-2') },
            3: { bg: document.querySelector('.node-bg-3'), icon: document.querySelector('.node-icon-3'), group: document.querySelector('.node-3'), path: document.querySelector('.flow-path-3') },
            4: { bg: document.querySelector('.node-bg-4'), icon: document.querySelector('.node-icon-4'), group: document.querySelector('.node-4') }
        };

        function activateStep(stepNum) {
            steps.forEach(s => {
                const sNum = parseInt(s.dataset.step);
                const circle = s.querySelector('div');
                
                if (sNum === stepNum) {
                    s.classList.remove('opacity-40');
                    s.classList.add('opacity-100');
                    circle.classList.add('bg-blue-500/20', 'text-blue-500', 'border-blue-500/30');
                    circle.classList.remove('bg-zinc-800', 'text-zinc-400', 'border-white/10');
                } else {
                    s.classList.add('opacity-40');
                    s.classList.remove('opacity-100');
                    circle.classList.remove('bg-blue-500/20', 'text-blue-500', 'border-blue-500/30');
                    circle.classList.add('bg-zinc-800', 'text-zinc-400', 'border-white/10');
                }
            });

            // Reset SVGs
            Object.values(svgNodes).forEach(n => {
                n.group.setAttribute('opacity', '0.4');
                n.bg.setAttribute('stroke', '#333');
                n.bg.setAttribute('fill', '#1e1e1e');
                if(n.path) n.path.setAttribute('stroke', '#333');
            });

            if (stepNum >= 1) {
                svgNodes[1].group.setAttribute('opacity', '1');
                svgNodes[1].bg.setAttribute('stroke', '#2563eb');
                svgNodes[1].path.setAttribute('stroke', '#2563eb');
            }
            if (stepNum >= 2) {
                svgNodes[2].group.setAttribute('opacity', '1');
                svgNodes[2].bg.setAttribute('stroke', '#2563eb');
                svgNodes[2].bg.setAttribute('fill', '#1e3a8a');
                svgNodes[2].path.setAttribute('stroke', '#2563eb');
            }
            if (stepNum >= 3) {
                svgNodes[3].group.setAttribute('opacity', '1');
                svgNodes[3].bg.setAttribute('stroke', '#2563eb');
                svgNodes[3].path.setAttribute('stroke', '#2563eb');
                svgNodes[4].group.setAttribute('opacity', '1');
                svgNodes[4].bg.setAttribute('stroke', '#22d3ee');
            }
        }

        setInterval(() => {
            currentStep = currentStep >= totalSteps ? 1 : currentStep + 1;
            activateStep(currentStep);
        }, 3000);
        
        steps.forEach(step => {
            step.addEventListener('click', () => {
                currentStep = parseInt(step.dataset.step);
                activateStep(currentStep);
            });
        });

        activateStep(1);


        // --- Standard Utilities ---
        const cards = document.querySelectorAll('.flashlight-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
            observer.observe(element);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-80" data-us-project="X0ErZR3QhPzMHfKgBbJJ" style={{filter: 'contrast(1.2)'}}></div>


<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/30">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-5 h-5 bg-zinc-800 rounded-sm flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<span className="text-sm font-semibold text-white tracking-tighter font-geist">Pixel Minds</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors font-geist" href="#offer">Oferta</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors font-geist" href="#how">Proces</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors font-geist" href="#results">Wyniki</a>
</div>
<div className="flex items-center gap-4">
<a className="hover:bg-zinc-200 transition-colors flex items-center gap-2 text-xs font-semibold text-black font-geist bg-white rounded-full pt-2 pr-4 pb-2 pl-4" href="#contact">Darmowa Konsultacja</a>
</div>
</div>
</nav>
<main className="z-10 pt-32 relative">

<section className="max-w-6xl mx-auto px-6 mb-20 md:mb-32 relative z-10">
<div className="flex flex-col items-center text-center justify-center py-12">
<div className="max-w-3xl relative z-10 flex flex-col items-center">
<div className="inline-flex border-zinc-800 text-[10px] uppercase reveal-on-scroll is-visible text-cyan-400 tracking-widest font-mono border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 items-center bg-zinc-900/50 backdrop-blur-md font-geist">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                        Automatyzacja 2.0
                    </div>
<h1 className="text-5xl md:text-7xl tracking-tight text-white mb-8 leading-[1.1] reveal-on-scroll is-visible min-h-[160px] md:min-h-[220px] font-playfair font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Twój głos w świecie <br/>
<span className="text-zinc-500">
<span className="text-blue-500 font-playfair font-medium" id="typewriter-text" style={{transition: 'outline 0.1s ease-in-out'}}>A</span><span className="cursor-blink text-blue-500 font-playfair font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>_</span>
</span>
</h1>
<p className="md:text-xl leading-relaxed reveal-on-scroll is-visible text-lg font-light text-zinc-300 max-w-xl mb-10 text-shadow-sm mx-auto font-geist">
                        Wdrażamy inteligentnych agentów głosowych dla MŚP. Odbierają telefony, umawiają spotkania i sprzedają. 24/7. Bez chorobowego.
                    </p>
<div className="flex flex-col sm:flex-row gap-6 reveal-on-scroll is-visible items-center justify-center">

<div className="inline-block bg-transparent">
<button className="shiny-cta focus:outline-none" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
<span className="font-geist">
                                    Sprawdź Ile Zaoszczędzisz
                                    <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</button>
</div>
<button className="text-zinc-400 hover:text-white px-4 py-4 text-sm font-medium flex items-center gap-2 transition-colors mt-1 font-geist">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
                            Posłuchaj Próbki
                        </button>
</div>

<div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-12 w-full reveal-on-scroll is-visible">
<div>
<div className="text-2xl text-white tracking-tight font-playfair font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>24/7</div>
<div className="text-xs text-zinc-400 uppercase tracking-wide mt-1 font-geist">Dostępność</div>
</div>
<div>
<div className="text-2xl text-white tracking-tight font-playfair font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>0zł</div>
<div className="text-xs text-zinc-400 uppercase tracking-wide mt-1 font-geist">Koszt Rekrutacji</div>
</div>
<div>
<div className="text-2xl text-white tracking-tight font-playfair font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>&lt;1s</div>
<div className="text-xs text-zinc-400 uppercase tracking-wide mt-1 font-geist">Czas Reakcji</div>
</div>
<div>
<div className="text-2xl text-white tracking-tight font-playfair font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>∞</div>
<div className="text-xs text-zinc-400 uppercase tracking-wide mt-1 font-geist">Skalowalność</div>
</div>
</div>
</div>
</div>
</section>

<section className="solid-section border-y overflow-hidden reveal-on-scroll border-white/5 py-10 is-visible">
<p className="text-center text-[10px] text-zinc-600 mb-8 uppercase tracking-widest font-mono font-geist">
                Automatyzujemy polski biznes
            </p>
<div className="relative w-full flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
<div className="marquee-track">
<span className="text-sm font-medium text-zinc-500 flex gap-2 items-center font-mono uppercase tracking-tight font-geist">
<svg className="w-4 h-4 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 21l18 0"></path><path d="M5 21l0 -14l8 -4l8 4l0 14"></path><path d="M10 21l0 -4"></path><path d="M14 21l0 -4"></path></svg>
                        Nieruchomości
                    </span>
<span className="text-sm font-medium text-zinc-500 flex gap-2 items-center font-mono uppercase tracking-tight font-geist">
<svg className="w-4 h-4 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                        Medycyna Estetyczna
                    </span>
<span className="text-sm font-medium text-zinc-500 flex gap-2 items-center font-mono uppercase tracking-tight font-geist">
<svg className="w-4 h-4 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        Agencje Rekrutacyjne
                    </span>
<span className="text-sm font-medium text-zinc-500 flex gap-2 items-center font-mono uppercase tracking-tight font-geist">
<svg className="w-4 h-4 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>
                        E-Commerce
                    </span>
</div>
<div aria-hidden="true" className="marquee-track">
<span className="text-sm font-medium text-zinc-500 flex gap-2 items-center font-mono uppercase tracking-tight font-geist">
<svg className="w-4 h-4 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 21l18 0"></path><path d="M5 21l0 -14l8 -4l8 4l0 14"></path><path d="M10 21l0 -4"></path><path d="M14 21l0 -4"></path></svg>
                        Nieruchomości
                    </span>
<span className="text-sm font-medium text-zinc-500 flex gap-2 items-center font-mono uppercase tracking-tight font-geist">
<svg className="w-4 h-4 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                        Medycyna Estetyczna
                    </span>
<span className="text-sm font-medium text-zinc-500 flex gap-2 items-center font-mono uppercase tracking-tight font-geist">
<svg className="w-4 h-4 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        Agencje Rekrutacyjne
                    </span>
<span className="text-sm font-medium text-zinc-500 flex gap-2 items-center font-mono uppercase tracking-tight font-geist">
<svg className="w-4 h-4 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>
                        E-Commerce
                    </span>
</div>
</div>
</section>

<section className="glass-section py-24 reveal-on-scroll is-visible" id="offer">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative">
<div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-900 to-transparent"></div>
<span className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4 block font-geist">Problem vs Rozwiązanie</span>
<h2 className="text-3xl md:text-4xl text-white mb-6 tracking-tight font-playfair font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>Przestań Tracić Klientów.</h2>
<p className="text-zinc-300 mb-6 leading-relaxed font-geist">
                            Jeśli nie odbierasz telefonu, klient dzwoni do konkurencji. To prosta matematyka.
                            Człowiek ma limity. Potrzebuje snu, choruje, ma gorsze dni.
                        </p>
<p className="text-zinc-300 mb-8 leading-relaxed font-geist">
                            Nasi Agenci Głosowi AI skalują się w nieskończoność. Mogą rozmawiać z 500 klientami jednocześnie, zawsze z tym samym entuzjazmem, realizując Twój cel biznesowy.
                        </p>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-lg bg-black/40 border border-white/5 hover:border-blue-500/30 transition-colors backdrop-blur-sm">
<div className="p-2 bg-black rounded-md border border-white/10 text-blue-500">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-white font-geist">Inbound (Przychodzące)</div>
<div className="text-xs text-zinc-500 font-geist">Recepcja, umawianie wizyt, FAQ, status zamówienia.</div>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg bg-black/40 border border-white/5 hover:border-blue-500/30 transition-colors backdrop-blur-sm">
<div className="p-2 bg-black rounded-md border border-white/10 text-blue-500">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-white font-geist">Outbound (Wychodzące)</div>
<div className="text-xs text-zinc-500 font-geist">Potwierdzanie wizyt, odzyskiwanie koszyków, cold calling.</div>
</div>
</div>
</div>
</div>

<div className="relative h-[500px] w-full bg-black/60 rounded-xl border border-white/10 overflow-hidden flex flex-col items-center justify-center group shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
<div className="flex items-center justify-center gap-[4px] h-32 w-full px-12">
<div className="eq-bar" style={{animationDuration: '0.8s', animationDelay: '0s'}}></div>
<div className="eq-bar" style={{animationDuration: '1.1s', animationDelay: '0.2s'}}></div>
<div className="eq-bar" style={{animationDuration: '0.9s', animationDelay: '0.1s'}}></div>
<div className="eq-bar" style={{animationDuration: '1.3s', animationDelay: '0.4s'}}></div>
<div className="eq-bar" style={{animationDuration: '0.7s', animationDelay: '0.3s'}}></div>
<div className="eq-bar bg-blue-500" style={{animationDuration: '1.5s', animationDelay: '0s', width: '8px', opacity: '1'}}></div>
<div className="eq-bar bg-blue-500" style={{animationDuration: '1.2s', animationDelay: '0.2s', width: '8px', opacity: '1'}}></div>
<div className="eq-bar bg-blue-500" style={{animationDuration: '1.4s', animationDelay: '0.1s', width: '8px', opacity: '1'}}></div>
<div className="eq-bar" style={{animationDuration: '0.8s', animationDelay: '0.3s'}}></div>
<div className="eq-bar" style={{animationDuration: '1.0s', animationDelay: '0.5s'}}></div>
<div className="eq-bar" style={{animationDuration: '0.9s', animationDelay: '0.2s'}}></div>
</div>
<div className="mt-8 px-6 py-2 rounded-full border border-white/10 bg-black/50 backdrop-blur text-xs font-mono text-zinc-300 flex items-center gap-2 z-10 font-geist">
<div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                            Nagrywanie Rozmowy...
                        </div>
</div>
</div>
</div>
</section>

<section className="reveal-on-scroll is-visible z-10 pt-24 pb-24 relative" id="sample">
<div className="max-w-5xl mx-auto px-6">

<div className="rounded-2xl form-box-highlight overflow-hidden relative backdrop-blur-md">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 pr-10 pb-10 pl-10 gap-x-8 gap-y-8 items-center">
<div className="md:col-span-1">
<span className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-3 block font-geist">Szybki Test</span>
<h3 className="text-2xl text-white mb-3 font-playfair font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>Zamów Próbkę</h3>
<p className="text-zinc-300 text-sm leading-relaxed font-geist">
                                Zostaw namiary. Nasz AI Agent zadzwoni do Ciebie w ciągu minuty, aby zaprezentować swoje możliwości.
                            </p>
</div>
<div className="md:col-span-2">
<form className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-4 gap-y-4" onsubmit="event.preventDefault(); alert('Próbka zamówiona!');">
<div>
<label className="sr-only font-geist">Imię</label>
<input className="w-full px-4 py-3 rounded-lg text-sm text-white form-input placeholder-zinc-400" placeholder="Twoje Imię" type="text"/>
</div>
<div className="">
<label className="sr-only font-geist">Email</label>
<input className="w-full px-4 py-3 rounded-lg text-sm text-white form-input placeholder-zinc-400" placeholder="Email służbowy" type="email"/>
</div>
<div className="md:col-span-2 flex flex-col md:flex-row gap-4 gap-x-4 gap-y-4">
<input className="form-input placeholder-zinc-400 flex-grow text-sm text-white w-full rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="Numer Telefonu" type="tel"/><button className="shiny-cta whitespace-nowrap pr-8 pl-8" type="submit">
<span className="font-geist">Zamów</span>
</button>
</div>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="solid-section py-24 reveal-on-scroll is-visible">
<div className="max-w-6xl mx-auto px-6">
<div className="rounded-2xl bg-zinc-900/30 border border-white/10 overflow-hidden relative">
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="p-10 md:p-14 flex flex-col justify-center border-r border-white/5">
<span className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4 block font-geist">Proces działania</span>
<h2 className="text-2xl text-white mb-8 font-playfair font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>Jak to działa w praktyce?</h2>
<div className="space-y-6" id="process-steps">

<div className="process-step group flex gap-4 transition-opacity duration-300 cursor-pointer opacity-100" data-step="1">
<div className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs border shrink-0 bg-blue-500/20 text-blue-500 border-blue-500/30 font-geist">1</div>
<div>
<h4 className="text-white font-medium text-sm font-geist">Klient dzwoni lub zostawia lead</h4>
<p className="text-zinc-500 text-xs mt-1 leading-relaxed font-geist">Interakcja na stronie lub połączenie telefoniczne inicjuje proces.</p>
</div>
</div>

<div className="process-step group flex gap-4 hover:opacity-100 transition-opacity duration-300 cursor-pointer opacity-40" data-step="2">
<div className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs border shrink-0 bg-zinc-800 text-zinc-400 border-white/10 font-geist">2</div>
<div>
<h4 className="text-white font-medium text-sm font-geist">Agent AI przeprowadza wywiad</h4>
<p className="text-zinc-500 text-xs mt-1 leading-relaxed font-geist">Weryfikuje potrzeby, sprawdza dostępność w kalendarzu i odpowiada na pytania.</p>
</div>
</div>

<div className="process-step group flex gap-4 hover:opacity-100 transition-opacity duration-300 cursor-pointer opacity-40" data-step="3">
<div className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs border shrink-0 bg-zinc-800 text-zinc-400 border-white/10 font-geist">3</div>
<div>
<h4 className="text-white font-medium text-sm font-geist">Zapis w CRM &amp; Notyfikacja</h4>
<p className="text-zinc-500 text-xs mt-1 leading-relaxed font-geist">Dane trafiają do Hubspot/Pipedrive. Zespół sprzedaży otrzymuje powiadomienie na Slack.</p>
</div>
</div>
</div>
</div>

<div className="bg-black/50 relative min-h-[400px] flex items-center justify-center p-8">
<div className="relative w-full max-w-sm aspect-square">
<svg className="w-[384px] h-[384px]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{width: '384px', height: '384px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
<path className="flow-path-1" d="M50 150 L 120 150" stroke="#2563eb" strokeWidth="2"></path>
<path className="flow-path-2" d="M180 150 L 250 150" stroke="#333" strokeWidth="2"></path>
<path className="flow-path-3" d="M150 180 L 150 250" stroke="#333" strokeWidth="2"></path>
<g className="node-1 transition-all duration-500" opacity="1">
<circle className="node-bg-1" cx="50" cy="150" fill="#1e1e1e" r="30" stroke="#2563eb" strokeWidth="2"></circle>
<path className="node-icon-1" d="M50 140c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z" fill="#555"></path>
<text className="font-geist" fill="#555" fontFamily="monospace" fontSize="10" text-anchor="middle" x="50" y="200">LEAD</text>
</g>
<g className="node-2 transition-all duration-500" opacity="0.4">
<circle className="node-bg-2" cx="150" cy="150" fill="#1e1e1e" r="35" stroke="#333" strokeWidth="2"></circle>
<path className="node-icon-2" d="M140 140h20v20h-20z" fill="#555"></path>
<text className="font-geist" fill="#555" fontFamily="monospace" fontSize="10" text-anchor="middle" x="150" y="110">AI AGENT</text>
</g>
<g className="node-3 transition-all duration-500" opacity="0.4">
<circle className="node-bg-3" cx="250" cy="150" fill="#1e1e1e" r="30" stroke="#333" strokeWidth="2"></circle>
<rect className="node-icon-3" fill="#555" height="30" rx="2" width="30" x="235" y="135"></rect>
<text className="font-geist" fill="#555" fontFamily="monospace" fontSize="10" text-anchor="middle" x="250" y="200">CRM</text>
</g>
<g className="node-4 transition-all duration-500" opacity="0.4">
<circle className="node-bg-4" cx="150" cy="250" fill="#1e1e1e" r="25" stroke="#333" strokeWidth="2"></circle>
<path className="node-icon-4" d="M145 240l5 10 5-10" stroke="#555" strokeWidth="2"></path>
<text className="font-geist" fill="#555" fontFamily="monospace" fontSize="10" text-anchor="middle" x="150" y="290">SALES</text>
</g>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="glass-section py-24 reveal-on-scroll is-visible" id="how">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-blue-500 font-mono text-xs uppercase tracking-widest font-geist">Model Współpracy</span>
<h2 className="text-3xl text-white mt-4 mb-4 font-playfair font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>Proste zasady gry.</h2>
<p className="text-zinc-300 max-w-xl mx-auto font-geist">Wybierz model, który pasuje do etapu rozwoju Twojej firmy. Żadnych ukrytych kosztów.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="flashlight-card group p-10 rounded-xl border border-white/10 bg-black/40 hover:bg-black/60 flex flex-col backdrop-blur-sm">
<div className="w-12 h-12 rounded-lg bg-zinc-800 border border-white/5 flex items-center justify-center mb-6 text-white group-hover:text-blue-500 group-hover:border-blue-500/30 transition-colors">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2 font-mono font-geist">Wdrożenie Projektowe</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-grow font-geist">
                            Budujemy dedykowanego asystenta, integrujemy go z Twoim CRM (Hubspot, Salesforce, Pipedrive) i oddajemy klucze.
                        </p>
<div className="space-y-4 pt-6 border-t border-white/5 font-mono text-xs">
<div className="flex justify-between text-zinc-400">
<span className="font-geist">Płatność</span>
<span className="text-white font-geist">Jednorazowa</span>
</div>
<div className="flex justify-between text-zinc-400">
<span className="font-geist">Własność</span>
<span className="text-white font-geist">100% Twoje</span>
</div>
</div>
</div>

<div className="flashlight-card group p-10 rounded-xl border border-blue-900/20 bg-gradient-to-b from-blue-900/10 to-transparent hover:bg-blue-900/20 relative overflow-hidden flex flex-col backdrop-blur-sm">
<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/20 to-transparent blur-2xl"></div>
<div className="w-12 h-12 rounded-lg bg-zinc-800 border border-white/5 flex items-center justify-center mb-6 text-white group-hover:text-blue-500 group-hover:border-blue-500/30 transition-colors">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2 font-mono font-geist">Abonament (AaaS)</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-grow font-geist">
                            Agent as a Service. My zarządzamy infrastrukturą, optymalizujemy rozmowy i dbamy o ciągłość działania.
                        </p>
<div className="space-y-4 pt-6 border-t border-white/5 font-mono text-xs">
<div className="flex justify-between text-zinc-400">
<span className="font-geist">Opłata miesięczna</span>
<span className="text-blue-400 font-geist">Indywidualna</span>
</div>
<div className="flex justify-between text-zinc-400">
<span className="font-geist">Wsparcie</span>
<span className="text-white font-geist">Priorytetowe</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="solid-section py-24 reveal-on-scroll is-visible" id="results">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<span className="text-blue-500 font-mono text-xs uppercase tracking-widest font-geist">Studia Przypadku</span>
<h2 className="text-3xl text-white mt-4 font-playfair font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>Biznes lubi konkrety.</h2>
</div>

<div className="flex gap-2 mt-4 md:mt-0">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-20" id="slide-left">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-20" id="slide-right">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-hidden px-6 max-w-6xl mx-auto whitespace-nowrap" id="slider-container">

<div className="min-w-[350px] md:min-w-[400px] bg-zinc-900/30 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors flex flex-col relative whitespace-normal">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-black border border-white/10 flex items-center justify-center text-white">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path><rect height="7" rx="1" width="7" x="3" y="14"></rect><circle cx="17.5" cy="17.5" r="3.5"></circle></svg>
</div>
<span className="px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[10px] font-mono uppercase text-zinc-500 tracking-wider font-geist">Klinika</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3 font-geist">Recepcja Stomatologiczna</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-10 font-geist">
                        Automatyczne odbieranie telefonów po godzinach pracy i w weekendy. Integracja z kalendarzem ZnanyLekarz.
                    </p>
<div className="mt-auto pt-6 border-t border-white/5">
<div className="text-[10px] text-blue-500 font-mono uppercase tracking-widest mb-1 font-geist">Wynik</div>
<div className="text-base font-mono text-white font-geist">+20% Więcej Wizyt / msc</div>
</div>
</div>

<div className="min-w-[350px] md:min-w-[400px] bg-zinc-900/30 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors flex flex-col relative whitespace-normal">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-black border border-white/10 flex items-center justify-center text-white">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 21l18 0"></path><path d="M5 21l0 -14l8 -4l8 4l0 14"></path></svg>
</div>
<span className="px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[10px] font-mono uppercase text-zinc-500 tracking-wider font-geist">Nieruchomości</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3 font-geist">Kwalifikacja Leadów</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-10 font-geist">
                        Oddzwanianie do leadów z Facebook Ads w ciągu 30 sekund. Wstępna ankieta i umawianie spotkania z agentem.
                    </p>
<div className="mt-auto pt-6 border-t border-white/5">
<div className="text-[10px] text-blue-500 font-mono uppercase tracking-widest mb-1 font-geist">Wynik</div>
<div className="text-base font-mono text-white font-geist">Oszczędność 40h Agenta</div>
</div>
</div>

<div className="min-w-[350px] md:min-w-[400px] bg-zinc-900/30 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors flex flex-col relative whitespace-normal">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-black border border-white/10 flex items-center justify-center text-white">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
</div>
<span className="px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[10px] font-mono uppercase text-zinc-500 tracking-wider font-geist">E-Commerce</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3 font-geist">Odzyskiwanie Koszyków</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-10 font-geist">
                        Telefon do klienta, który nie dokończył zakupu z pytaniem o powód i ofertą rabatu.
                    </p>
<div className="mt-auto pt-6 border-t border-white/5">
<div className="text-[10px] text-blue-500 font-mono uppercase tracking-widest mb-1 font-geist">Wynik</div>
<div className="text-base font-mono text-white font-geist">15% Odzyskanych Sprzedaży</div>
</div>
</div>

<div className="min-w-[350px] md:min-w-[400px] bg-zinc-900/30 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors flex flex-col relative whitespace-normal">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-black border border-white/10 flex items-center justify-center text-white">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<span className="px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[10px] font-mono uppercase text-zinc-500 tracking-wider font-geist">Logistyka</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3 font-geist">Status Dostawy</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-10 font-geist">
                        Automatyczna infolinia dla kierowców i klientów sprawdzających status paczek.
                    </p>
<div className="mt-auto pt-6 border-t border-white/5">
<div className="text-[10px] text-blue-500 font-mono uppercase tracking-widest mb-1 font-geist">Wynik</div>
<div className="text-base font-mono text-white font-geist">-70% Telefonów do Biura</div>
</div>
</div>

<div className="min-w-[350px] md:min-w-[400px] bg-zinc-900/30 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors flex flex-col relative whitespace-normal">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-black border border-white/10 flex items-center justify-center text-white">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>
</div>
<span className="px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[10px] font-mono uppercase text-zinc-500 tracking-wider font-geist">Obsługa</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3 font-geist">Helpdesk IT</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-10 font-geist">
                        Pierwsza linia wsparcia. Reset haseł, tworzenie ticketów w Jira, podstawowa diagnostyka.
                    </p>
<div className="mt-auto pt-6 border-t border-white/5">
<div className="text-[10px] text-blue-500 font-mono uppercase tracking-widest mb-1 font-geist">Wynik</div>
<div className="text-base font-mono text-white font-geist">Natychmiastowa Pomoc</div>
</div>
</div>
</div>
</section>

<section className="glass-section py-24 reveal-on-scroll is-visible" id="contact">
<div className="max-w-4xl mx-auto px-6">
<div className="relative form-box-highlight rounded-2xl p-1">
<div className="overflow-hidden md:p-12 bg-slate-950/30 rounded-xl px-8 py-8 relative backdrop-blur-md">
<div className="text-center mb-10">
<h2 className="text-3xl text-white mb-4 font-playfair font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>Bezpłatny Audyt Procesów.</h2>
<p className="text-zinc-300 max-w-lg mx-auto text-sm leading-relaxed font-geist">
                                Poświęć nam 30 minut. Pokażemy Ci, gdzie tracisz pieniądze i jak to naprawić jednym wdrożeniem. Nawet jeśli nas nie zatrudnisz, wyjdziesz z gotowym planem.
                            </p>
</div>
<form className="space-y-4 max-w-md mx-auto relative z-10" onsubmit="event.preventDefault(); alert('Dziękujemy za zgłoszenie! Skontaktujemy się wkrótce.');">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="sr-only font-geist">Imię</label>
<input className="w-full px-4 py-3 rounded-lg text-sm text-white form-input placeholder-zinc-400" placeholder="Imię" type="text"/>
</div>
<div>
<label className="sr-only font-geist">Firma</label>
<input className="w-full px-4 py-3 rounded-lg text-sm text-white form-input placeholder-zinc-400" placeholder="Nazwa Firmy" type="text"/>
</div>
</div>
<div className="">
<label className="sr-only font-geist">Email Firmowy</label>
<input className="w-full px-4 py-3 rounded-lg text-sm text-white form-input placeholder-zinc-400" placeholder="Email służbowy" type="email"/>
</div>
<div>
<label className="sr-only font-geist">Telefon</label>
<input className="w-full px-4 py-3 rounded-lg text-sm text-white form-input placeholder-zinc-400" placeholder="Numer telefonu" type="tel"/>
</div>

<button className="shiny-cta w-full justify-center" type="submit">
<span className="justify-center font-geist">
                                    Umów Strategię
                                    <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</span>
</button>
<p className="text-center text-[10px] text-zinc-500 mt-4 font-geist">Limit: 5 nowych klientów w tym miesiącu.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="max-w-6xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs font-mono relative z-10 bg-black">
<div className="flex items-center gap-6 mb-4 md:mb-0">
<span className="font-geist">© 2024 PIXEL MINDS</span>
<a className="hover:text-white transition-colors font-geist" href="#">Prywatność</a>
<a className="hover:text-white transition-colors font-geist" href="#">Regulamin</a>
</div>
<div className="flex items-center gap-4">
<span className="font-geist">Warszawa, PL</span>
<div className="w-1 h-1 bg-zinc-700 rounded-full"></div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
<span className="text-cyan-500 font-geist">Systemy Aktywne</span>
</div>
</div>
</footer>
</main>

<grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration>
    </>
  );
}
