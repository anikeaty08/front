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
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
extend: {
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
colors: {
forest: {
950: '#021210',
900: '#062c26',
800: '#0f453d',
},
amber: {
300: '#fcd34d',
400: '#fbbf24',
500: '#f59e0b',
600: '#d97706',
},
},
animation: {
'float': 'float 8s ease-in-out infinite',
'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'shimmer': 'shimmer 2.5s infinite',
'blink': 'blink 1s step-end infinite',
'paw-walk': 'paw-walk 4s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-15px)' },
},
shimmer: {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(100%)' },
},
blink: {
'0%, 100%': { opacity: '1' },
'50%': { opacity: '0' },
},
'paw-walk': {
'0%': { opacity: '0', transform: 'scale(0.8)' },
'15%': { opacity: '1', transform: 'scale(1)' },
'35%': { opacity: '0', transform: 'scale(0.95)' },
'100%': { opacity: '0' }
}
}
}
}
}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        // Initialize Icons
        lucide.createIcons();

        // Theme Toggle Logic
        const themeToggle = document.getElementById('themeToggle');
        const html = document.documentElement;
        
        // Initial Theme Check
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }

        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
        });

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm', 'bg-white/90', 'dark:bg-forest-950/90');
                nav.classList.remove('bg-white/80', 'dark:bg-forest-950/80');
            } else {
                nav.classList.remove('shadow-sm', 'bg-white/90', 'dark:bg-forest-950/90');
                nav.classList.add('bg-white/80', 'dark:bg-forest-950/80');
            }
        });

        // Intersection Observer for Reveal Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Animal Selector Logic
        const animalBtns = document.querySelectorAll('#animal-selector button');
        animalBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Reset all
                animalBtns.forEach(b => {
                    b.classList.remove('border-amber-500', 'bg-amber-50/50', 'dark:bg-amber-500/10', 'text-amber-600', 'dark:text-amber-400', 'ring-1', 'ring-amber-500');
                    b.classList.add('border-slate-200', 'dark:border-white/10', 'bg-white/50', 'dark:bg-white/5');
                    
                    const icon = b.querySelector('i');
                    icon.classList.remove('text-amber-600', 'dark:text-amber-400');
                    icon.classList.add('text-slate-400');
                    
                    const text = b.querySelector('span');
                    text.classList.remove('text-amber-600', 'dark:text-amber-400');
                    text.classList.add('text-slate-600', 'dark:text-slate-300');
                });

                // Set Active
                btn.classList.remove('border-slate-200', 'dark:border-white/10', 'bg-white/50', 'dark:bg-white/5');
                btn.classList.add('border-amber-500', 'bg-amber-50/50', 'dark:bg-amber-500/10', 'text-amber-600', 'dark:text-amber-400', 'ring-1', 'ring-amber-500');
                
                const activeIcon = btn.querySelector('i');
                activeIcon.classList.remove('text-slate-400');
                activeIcon.classList.add('text-amber-600', 'dark:text-amber-400');
                
                const activeText = btn.querySelector('span');
                activeText.classList.remove('text-slate-600', 'dark:text-slate-300');
            });
        });

        // Typewriter Effect Logic
        const words = ["mit Herz", "aus Leidenschaft", "für Eltville", "für Ihre Lieblinge"];
        const typewriterElement = document.getElementById('typewriter-text');
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function typeWriter() {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50; // Faster deleting
            } else {
                typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100; // Normal typing
            }

            if (!isDeleting && charIndex === currentWord.length) {
                // Finished typing word, wait before deleting
                isDeleting = true;
                typeSpeed = 2000; // Pause at end of word
            } else if (isDeleting && charIndex === 0) {
                // Finished deleting, move to next word
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500; // Pause before typing new word
            }

            setTimeout(typeWriter, typeSpeed);
        }

        // Start typewriter when DOM loads
        document.addEventListener('DOMContentLoaded', () => {
             // Small delay to let initial render settle
            setTimeout(typeWriter, 1000);
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qF3qXhdiOxdUeQYH8wCK"></div>
</div>

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-emerald-500/5 rounded-full blur-[120px] dark:bg-emerald-500/10 transition-colors duration-1000"></div>
<div className="absolute top-[20%] right-[0%] w-[50%] h-[50%] bg-amber-500/5 rounded-full blur-[100px] dark:bg-amber-500/10 transition-colors duration-1000"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-t from-white via-white/50 to-transparent dark:from-forest-950 dark:via-forest-950/50 dark:to-transparent z-10 transition-colors duration-1000"></div>
</div>

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

<div className="absolute inset-0 opacity-40 dark:opacity-20 text-slate-300 dark:text-slate-600">
<div className="absolute bottom-[10%] left-[5%] -rotate-12 animate-paw-walk" style={{animationDelay: '0s'}}>
<i className="w-20 h-20 fill-current" data-lucide="paw-print"></i>
</div>
<div className="absolute bottom-[20%] left-[15%] rotate-12 animate-paw-walk" style={{animationDelay: '0.5s'}}>
<i className="w-20 h-20 fill-current" data-lucide="paw-print"></i>
</div>
<div className="absolute bottom-[30%] left-[25%] -rotate-12 animate-paw-walk" style={{animationDelay: '1.0s'}}>
<i className="w-20 h-20 fill-current" data-lucide="paw-print"></i>
</div>
<div className="absolute bottom-[40%] left-[35%] rotate-12 animate-paw-walk" style={{animationDelay: '1.5s'}}>
<i className="w-20 h-20 fill-current" data-lucide="paw-print"></i>
</div>
<div className="absolute bottom-[50%] left-[45%] -rotate-12 animate-paw-walk" style={{animationDelay: '2.0s'}}>
<i className="w-20 h-20 fill-current" data-lucide="paw-print"></i>
</div>
<div className="absolute bottom-[60%] left-[55%] rotate-12 animate-paw-walk" style={{animationDelay: '2.5s'}}>
<i className="w-20 h-20 fill-current" data-lucide="paw-print"></i>
</div>
<div className="absolute bottom-[70%] left-[65%] -rotate-12 animate-paw-walk" style={{animationDelay: '3.0s'}}>
<i className="w-20 h-20 fill-current" data-lucide="paw-print"></i>
</div>
</div>

<div className="absolute inset-0 opacity-30 dark:opacity-15 text-amber-300/50 dark:text-amber-500/30">
<div className="absolute bottom-[15%] right-[25%] -rotate-[30deg] animate-paw-walk" style={{animationDelay: '1.2s'}}>
<i className="w-16 h-16 fill-current" data-lucide="paw-print"></i>
</div>
<div className="absolute bottom-[28%] right-[20%] -rotate-[10deg] animate-paw-walk" style={{animationDelay: '1.7s'}}>
<i className="w-16 h-16 fill-current" data-lucide="paw-print"></i>
</div>
<div className="absolute bottom-[41%] right-[15%] -rotate-[30deg] animate-paw-walk" style={{animationDelay: '2.2s'}}>
<i className="w-16 h-16 fill-current" data-lucide="paw-print"></i>
</div>
<div className="absolute bottom-[54%] right-[10%] -rotate-[10deg] animate-paw-walk" style={{animationDelay: '2.7s'}}>
<i className="w-16 h-16 fill-current" data-lucide="paw-print"></i>
</div>
</div>

<div className="absolute inset-0 opacity-20 dark:opacity-10 text-emerald-400 dark:text-emerald-600 hidden xl:block">
<div className="absolute top-[20%] left-[10%] rotate-[15deg] animate-paw-walk" style={{animationDelay: '0.8s'}}>
<i className="w-24 h-24 fill-current" data-lucide="paw-print"></i>
</div>
<div className="absolute top-[35%] left-[5%] -rotate-[15deg] animate-paw-walk" style={{animationDelay: '1.6s'}}>
<i className="w-24 h-24 fill-current" data-lucide="paw-print"></i>
</div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 transition-all duration-700 border-b border-transparent bg-white/80 dark:bg-forest-950/80 backdrop-blur-md" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-forest-800 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-500 ease-out">
<i className="w-5 h-5" data-lucide="paw-print" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight text-slate-900 dark:text-white leading-none">Tierzentrum <span className="text-amber-500">Rheingau</span></span>
<span className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">Mila Darschin</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium uppercase tracking-wide text-slate-500 hover:text-amber-500 dark:text-slate-400 dark:hover:text-amber-400 transition-colors duration-300" href="#services">Leistungen</a>
<a className="text-xs font-medium uppercase tracking-wide text-slate-500 hover:text-amber-500 dark:text-slate-400 dark:hover:text-amber-400 transition-colors duration-300" href="#about">Praxis</a>
<a className="text-xs font-medium uppercase tracking-wide text-slate-500 hover:text-amber-500 dark:text-slate-400 dark:hover:text-amber-400 transition-colors duration-300" href="#booking">Termin</a>
<a className="text-xs font-medium uppercase tracking-wide text-slate-500 hover:text-amber-500 dark:text-slate-400 dark:hover:text-amber-400 transition-colors duration-300" href="#contact">Kontakt</a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/5 transition-colors duration-300" id="themeToggle">
<i className="w-4 h-4 hidden dark:block" data-lucide="sun"></i>
<i className="w-4 h-4 block dark:hidden" data-lucide="moon"></i>
</button>
<a className="hidden sm:flex px-5 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-forest-950 text-xs font-medium tracking-wide hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-500 ease-out items-center gap-2" href="#booking">
<span>Termin buchen</span>
<i className="w-3.5 h-3.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden z-10">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 reveal relative z-20">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-[11px] font-medium uppercase tracking-widest">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                    Jetzt in Eltville
                </div>
<h1 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-medium tracking-tight text-slate-900 dark:text-white leading-[1.1]">
<span>Tierärztin <span className="text-slate-900 dark:text-white inline-block min-w-[2ch]" id="typewriter-text"></span><span className="animate-blink text-amber-500 font-light">|</span></span><br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-400 dark:from-emerald-400 dark:to-teal-300">Mila Darschin</span>
</h1>
<p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-lg font-light leading-relaxed">
                    Kompetente Tiermedizin mit Herz und Verstand. Wir nehmen uns Zeit für die individuelle Betreuung Ihres Lieblings in entspannter Atmosphäre.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="group relative px-8 py-4 rounded-full bg-amber-500 text-white text-sm font-medium tracking-wide overflow-hidden shadow-xl shadow-amber-500/20 transition-all duration-500 ease-out hover:shadow-amber-500/40 hover:-translate-y-0.5" href="#booking">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
<span className="relative flex items-center gap-2">
                            Termin vereinbaren 
                            <i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i>
</span>
</a>
<a className="px-8 py-4 rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-500 ease-out text-slate-700 dark:text-slate-300 text-sm font-medium tracking-wide flex items-center gap-2" href="tel:+491773128318">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i> Notfall anrufen
                    </a>
</div>
<div className="flex items-center gap-6 pt-8 border-t border-slate-200 dark:border-white/5">
<div>
<div className="flex text-amber-500 mb-2 gap-0.5">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="0"></i>
</div>
<p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Top bewertet auf Google</p>
</div>
<div className="h-8 w-px bg-slate-200 dark:bg-white/10"></div>
<div>
<p className="text-xs text-slate-500 dark:text-slate-400 font-medium"><span className="text-slate-900 dark:text-white font-semibold">15+ Jahre</span> Erfahrung</p>
</div>
</div>
</div>

<div className="relative reveal delay-200 z-10 lg:h-[640px] flex items-center justify-center">

<div className="absolute top-1/4 right-0 w-72 h-72 bg-amber-500/20 rounded-full blur-[90px] animate-pulse-slow"></div>
<div className="absolute bottom-1/4 left-0 w-72 h-72 bg-emerald-500/20 rounded-full blur-[90px]"></div>

<div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-full rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl animate-float">
<div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent z-10"></div>
<img alt="Glücklicher Hund" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 z-20 shadow-lg">
<div>
<p className="text-amber-400 text-[10px] font-semibold uppercase tracking-widest mb-2">Öffnungszeiten</p>
<ul className="text-white text-xs space-y-1 font-medium opacity-90">
<li className="flex justify-between w-48 max-w-full"><span>Mo, Fr:</span> <span>09:30 - 17:30</span></li>
<li className="flex justify-between w-48 max-w-full"><span>Di, Mi:</span> <span>07:30 - 17:30</span></li>
<li className="flex justify-between w-48 max-w-full"><span>Do:</span> <span>15:00 - 20:00</span></li>
</ul>
</div>

<div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
<i className="w-5 h-5" data-lucide="clock" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<h2 className="text-3xl lg:text-4xl font-serif font-medium tracking-tight mb-4 text-slate-900 dark:text-white">Umfassende Versorgung</h2>
<p className="text-base text-slate-600 dark:text-slate-400 font-light">Für Hunde, Katzen und Heimtiere. Wir bieten das volle Spektrum moderner Tiermedizin mit modernster Ausstattung.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 glass-card-hover cursor-pointer reveal">
<div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-700 ease-out">
<i className="w-6 h-6" data-lucide="stethoscope" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium mb-3 text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Allgemeine Untersuchung</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">Ganzheitliche Checks für Hunde, Katzen und Heimtiere. Wir nehmen uns Zeit, um Krankheiten frühzeitig zu erkennen.</p>
</div>

<div className="group p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 glass-card-hover cursor-pointer reveal delay-200">
<div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-700 ease-out">
<i className="w-6 h-6" data-lucide="syringe" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Impfungen &amp; Prophylaxe</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">Individuelle Impfpläne nach neuesten Standards und Beratung zu Parasitenprophylaxe für ein langes Leben.</p>
</div>

<div className="group p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 glass-card-hover cursor-pointer reveal delay-300">
<div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-700 ease-out">
<i className="w-6 h-6" data-lucide="microscope" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium mb-3 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Labor &amp; Diagnostik</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">Sofortlabor, Ultraschall und digitales Röntgen. Schnelle Ergebnisse für eine gezielte Behandlung.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="booking">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-emerald-500/10 to-amber-500/10 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-start">

<div className="flex-1 space-y-8 reveal lg:sticky lg:top-32">
<h2 className="text-4xl lg:text-5xl font-serif font-medium tracking-tight text-slate-900 dark:text-white">
                        Ihr Termin bei <br/> <span className="text-amber-500">Mila Darschin.</span>
</h2>
<p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                        Vereinbaren Sie Ihren Termin bequem online. Für Notfälle oder kurzfristige Anfragen sind wir telefonisch erreichbar.
                    </p>
<div className="flex items-center gap-5 p-6 rounded-2xl bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm">
<div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">Telefonische Terminvergabe</p>
<a className="text-xl font-medium text-slate-900 dark:text-white hover:text-amber-500 transition-colors tracking-tight" href="tel:+491773128318">+49 177 / 312 83 18</a>
</div>
</div>
</div>

<div className="flex-1 w-full reveal delay-200">
<div className="relative rounded-[2rem] p-8 lg:p-10 bg-white dark:bg-forest-900/40 border border-slate-200 dark:border-white/10 shadow-2xl backdrop-blur-xl">
<form className="space-y-8">

<div>
<label className="block text-[11px] font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">Welches Tier?</label>
<div className="grid grid-cols-3 gap-4" id="animal-selector">
<button className="group relative flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-amber-500 bg-amber-50/50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 ring-1 ring-amber-500 transition-all duration-300" type="button">
<i className="w-6 h-6" data-lucide="dog" strokeWidth="1.5"></i>
<span className="text-xs font-medium">Hund</span>
</button>
<button className="group relative flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:border-amber-400 hover:bg-amber-50/30 dark:hover:bg-amber-500/5 transition-all duration-300" type="button">
<i className="w-6 h-6 text-slate-400 group-hover:text-amber-500 transition-colors" data-lucide="cat" strokeWidth="1.5"></i>
<span className="text-xs font-medium text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">Katze</span>
</button>
<button className="group relative flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:border-amber-400 hover:bg-amber-50/30 dark:hover:bg-amber-500/5 transition-all duration-300" type="button">
<i className="w-6 h-6 text-slate-400 group-hover:text-amber-500 transition-colors" data-lucide="rabbit" strokeWidth="1.5"></i>
<span className="text-xs font-medium text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">Andere</span>
</button>
</div>
</div>

<div className="space-y-6">
<div>
<label className="block text-[11px] font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">Grund des Besuchs</label>
<select className="w-full bg-slate-50 dark:bg-forest-950/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all cursor-pointer">
<option>Allgemeine Untersuchung</option>
<option>Impfung</option>
<option>Beratung</option>
<option>Notfall / Akut</option>
</select>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-[11px] font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">Datum</label>
<input className="w-full bg-slate-50 dark:bg-forest-950/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all" type="date"/>
</div>
<div>
<label className="block text-[11px] font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">Zeitfenster</label>
<select className="w-full bg-slate-50 dark:bg-forest-950/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all">
<option>Vormittags</option>
<option>Nachmittags</option>
<option>Abends (Do)</option>
</select>
</div>
</div>
</div>

<button className="w-full py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-forest-950 text-sm font-medium tracking-wide shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 mt-4 group" type="button">
                                Anfrage absenden 
                                <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="send" strokeWidth="1.5"></i>
</button>
<p className="text-center text-xs text-slate-400 font-light">Wir bestätigen Ihren Termin per E-Mail.</p>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white dark:bg-forest-950 border-t border-slate-200 dark:border-white/5 pt-20 pb-10 relative z-10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-12 gap-12 lg:gap-16 mb-16">

<div className="md:col-span-4">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="paw-print" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-serif font-medium text-slate-900 dark:text-white">Tierzentrum Rheingau</span>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed font-light">
                        Inhaberin: Tierärztin Mila Darschin.<br/>
                        Moderne Tiermedizin für Eltville und Umgebung. <br/>
                        Wir sind für Sie und Ihr Tier da.
                    </p>
<div className="flex gap-3">
<a className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all duration-300" href="mailto:info@tierarzt-rheingau.de">
<i className="w-4 h-4" data-lucide="mail" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all duration-300" href="tel:+491773128318">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300" href="#">
<i className="w-4 h-4" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="md:col-span-8 grid sm:grid-cols-3 gap-8">
<div>
<h4 className="text-sm font-medium text-slate-900 dark:text-white mb-6">Kontakt</h4>
<ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400 font-light">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-amber-500 shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>Rohrbergstr. 23<br/>65343 Eltville</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-amber-500 shrink-0" data-lucide="phone" strokeWidth="1.5"></i>
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="tel:+491773128318">+49 177 / 312 83 18</a>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-amber-500 shrink-0" data-lucide="mail" strokeWidth="1.5"></i>
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="mailto:info@tierarzt-rheingau.de">info@tierarzt-rheingau.de</a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 dark:text-white mb-6">Sprechzeiten</h4>
<ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400 font-light">
<li className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2">
<span>Montag</span>
<span className="text-slate-800 dark:text-slate-300 font-medium">09:30–17:30</span>
</li>
<li className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2">
<span>Dienstag</span>
<span className="text-slate-800 dark:text-slate-300 font-medium">07:30–17:30</span>
</li>
<li className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2">
<span>Mittwoch</span>
<span className="text-slate-800 dark:text-slate-300 font-medium">07:30–17:30</span>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 dark:text-white mb-6">Rechtliches</h4>
<div className="text-[11px] text-slate-500 dark:text-slate-500 space-y-2 leading-relaxed font-light">
<p className="font-medium text-slate-600 dark:text-slate-400">Landestierärztekammer Hessen</p>
<p>Postfach 1409, 65527 Niedernhausen</p>
<div className="w-10 h-px bg-slate-200 dark:bg-white/10 my-2"></div>
<p>Berufsbezeichnung: Tierarzt</p>
<p>Es gelten die Regelungen der Berufsordnung der LTK-Hessen.</p>
</div>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-light">
<p>© 2023 Tierzentrum Rheingau - Mila Darschin.</p>
<div className="flex gap-8">
<a className="hover:text-amber-500 transition-colors" href="#">Impressum</a>
<a className="hover:text-amber-500 transition-colors" href="#">Datenschutz</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
