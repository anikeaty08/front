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
sans: ['"Inter"', 'sans-serif'],
display: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
brand: {
DEFAULT: '#12375B', // Dominant Blue
50: '#eef6ff',
100: '#dbeafe',
400: '#3D628B',
500: '#12375B',
600: '#0f2d4a',
900: '#081828',
950: '#020617',
},
accent: {
DEFAULT: '#F78B1F', // Orange
400: '#fb923c',
500: '#F78B1F',
600: '#ea580c',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'scroll': 'scroll 40s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: 0, transform: 'translateY(20px)' },
'100%': { opacity: 1, transform: 'translateY(0)' },
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



      const menuBtn = document.querySelector('button.md\\:hidden');
      menuBtn.addEventListener('click', () => {
         // Placeholder for mobile menu logic
         alert("Ouverture du menu mobile (à implémenter)");
      });
    


      document.addEventListener('DOMContentLoaded', () => {
          const observer = new IntersectionObserver((entries, obs) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('is-visible');
                      obs.unobserve(entry.target);
                  }
              });
          }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

          const lines = document.querySelectorAll('#problem-cascade .cascade-line');
          lines.forEach((line, index) => {
              line.style.transitionDelay = (index * 120) + 'ms';
              observer.observe(line);
          });
      });
    


      const words = ['virales', 'performantes', 'gagnantes'];
          let currentWordIndex = 0;
          let currentCharIndex = 0;
          let isDeleting = false;
          const typingSpeed = 100;
          const deletingSpeed = 50;
          const pauseBetweenWords = 2000;
    
          const wordElement = document.getElementById('rotatingWord');
    
          function typeWriter() {
            const currentWord = words[currentWordIndex];
            
            if (isDeleting) {
              wordElement.textContent = currentWord.substring(0, currentCharIndex - 1);
              currentCharIndex--;
              
              if (currentCharIndex === 0) {
                isDeleting = false;
                currentWordIndex = (currentWordIndex + 1) % words.length;
                setTimeout(typeWriter, 500);
                return;
              }
            } else {
              wordElement.textContent = currentWord.substring(0, currentCharIndex + 1);
              currentCharIndex++;
              
              if (currentCharIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(typeWriter, pauseBetweenWords);
                return;
              }
            }
            
            const speed = isDeleting ? deletingSpeed : typingSpeed;
            setTimeout(typeWriter, speed);
          }
    
          setTimeout(typeWriter, 1000);
    
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
      

<nav className="fixed top-0 w-full z-20 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="logo-wrapper" href="#">
<img alt="Adsvantage Scale" className="logo-img" src="https://d1yei2z3i6k35z.cloudfront.net/15072689/697060efb5ad8_CopiedeLogoAS-transparent-BleuandOrange.png"/>
</a>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all active:scale-95 border bg-white text-brand-950 hover:bg-slate-200 border-white" href="#audit">
            Audit Stratégique
          </a>

<button className="md:hidden p-2 text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex flex-col h-auto pt-36 pr-6 pb-20 pl-6 relative justify-center">

<video autoplay="" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" loop="" muted="" playsinline="">
<source src="https://raw.githubusercontent.com/MAME-webmarketing/Website/f5ac29857d346a4f4455c9421758ee96832582cd/hero-background.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-black/1 z-0 pointer-events-none"></div>
<div className="max-w-5xl mx-auto text-center relative z-10">

<h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 leading-[1.05] text-white">
<span className="prompt-rage-text prompt-delay-1 font-inter">On scale votre marque</span>
<span className="prompt-rage-text prompt-delay-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white">par la créa et l'IA marketing.</span>
</h1>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '1000ms'}}>
<a className="w-full sm:w-auto px-8 py-4 bg-accent-500 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(247,139,31,0.4)] flex items-center justify-center gap-2 hover:bg-accent-600 text-white" href="#audit">
            Réserver un audit stratégique offert
            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>

<div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-400 font-medium animate-fade-in-up" style={{animationDelay: '1100ms'}}>
</div>
</div>
</section>

<section className="py-20 px-6 border-y border-white/5 bg-brand-950/80 backdrop-blur-sm">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
      Nous créons des publicités
      <span className="rotating-word" id="rotatingWord" style={{color: '#F78B1F', display: 'inline-block', minWidth: '20px', position: 'relative'}}>virale</span>
      pour
      <br/>
<span style={{color: '#F78B1F'}}>vendre et générer du profit.</span>
<br/><br/>
      Pas pour faire jolies.
    </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

</div>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<div className="p-8 rounded-2xl border hover:border-brand-500/30 transition-colors bg-white/5 border-white/5">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white/10 text-white">
<iconify-icon icon="solar:chart-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 text-white">
                Performance &gt; Esthétique
            </h3>
<p className="leading-relaxed text-sm text-slate-400">
                On n’optimise pas pour "faire joli" ou plaire à l'égo. On optimise
                pour vendre. Point final.
            </p>
</div>

<div className="p-8 rounded-2xl border hover:border-brand-500/30 transition-colors bg-white/5 border-white/5">
<div className="w-12 h-12 rounded-xl bg-accent-500/20 text-accent-500 flex items-center justify-center mb-6">
<iconify-icon icon="solar:videocamera-record-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 text-white">
                Créatifs IA Qualité Studio
            </h3>
<p className="leading-relaxed text-sm text-slate-400">
                Qualité studio sans délais interminables ni coûts absurdes. Chaque
                créa est pensée dès la conception pour être performante.
            </p>
</div>
</div>

<section className="py-24 px-6 relative overflow-hidden bg-brand-950" id="problem-cascade">
<div className="max-w-7xl mx-auto relative z-10">
<div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-10">
<div className="w-full max-w-3xl mx-auto">

<h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 leading-tight text-white">
              Pourquoi vos pubs Meta ne scalent pas.
            </h2>

<div className="space-y-4 text-lg leading-relaxed">
<p className="cascade-line font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-200" style={{transitionDelay: '0ms'}}>
                Le football, il a changé.
              </p>
<p className="cascade-line text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-400" style={{transitionDelay: '120ms'}}>
                Ces derniers mois, Meta a accéléré ses systèmes de sélection, de
                diffusion et de compréhension créative.
              </p>
<p className="cascade-line text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-400" style={{transitionDelay: '240ms'}}>
                Les leviers pilotés par l’IA se sont multipliés.
              </p>
<p className="cascade-line text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-400" style={{transitionDelay: '360ms'}}>
                Les approches d’acquisition utilisées en 2025 ne sont déjà plus
                suffisantes.
              </p>
<p className="cascade-line text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-400" style={{transitionDelay: '480ms'}}>
                La performance ne repose plus uniquement sur le media buying.
              </p>
<p className="cascade-line text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-400" style={{transitionDelay: '600ms'}}>
                Elle repose sur la capacité à produire des créas premium et
                virales, avec un message clair.
              </p>
<p className="cascade-line text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-400" style={{transitionDelay: '720ms'}}>
                Alignées avec les nouveaux standards algorithmiques.
              </p>
<p className="cascade-line font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-200" style={{transitionDelay: '840ms'}}>
                L’IA content est désormais au cœur de la performance sur Meta.
              </p>
</div>
<p></p>
</div>
<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="glass-card p-6 rounded-2xl border-l-4 border-l-red-500/50">
<div className="mb-4 flex justify-between text-red-400">
<iconify-icon icon="solar:gallery-remove-linear" width="32"></iconify-icon>
<span className="text-xs font-mono opacity-50">ERR_01</span>
</div>
<h3 className="font-bold mb-2 text-white">
                Des créas "jolies" mais inefficaces
              </h3>
<p className="text-sm text-slate-400">
                Visuellement agréables mais sans hook psychologique. Résultat :
                scroll immédiat.
              </p>
</div>

<div className="glass-card p-6 rounded-2xl border-l-4 border-l-red-500/50">
<div className="mb-4 flex justify-between text-red-400">
<iconify-icon icon="solar:hourglass-line-linear" width="32"></iconify-icon>
<span className="text-xs font-mono opacity-50">ERR_02</span>
</div>
<h3 className="font-bold mb-2 text-white">
                Délais de production lents
              </h3>
<p className="text-sm text-slate-400">
                3 semaines pour 2 vidéos ? La trend est déjà morte avant que
                vous ne lanciez.
              </p>
</div>

<div className="glass-card p-6 rounded-2xl border-l-4 border-l-red-500/50">
<div className="mb-4 flex justify-between text-red-400">
<iconify-icon icon="solar:test-tube-linear" width="32"></iconify-icon>
<span className="text-xs font-mono opacity-50">ERR_03</span>
</div>
<h3 className="font-bold mb-2 text-white">Tests créatifs limités</h3>
<p className="text-sm text-slate-400">
                Vous ne testez pas assez d'angles. L'algorithme Meta a besoin de
                volume pour apprendre.
              </p>
</div>

<div className="glass-card p-6 rounded-2xl border-l-4 border-l-red-500/50">
<div className="mb-4 flex justify-between text-red-400">
<iconify-icon icon="solar:flame-linear" width="32"></iconify-icon>
<span className="text-xs font-mono opacity-50">ERR_04</span>
</div>
<h3 className="font-bold mb-2 text-white">
                Budget brûlé sans learning
              </h3>
<p className="text-sm text-slate-400">
                Dépenser sans méthode rigoureuse, c'est comme jouer au casino.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-y bg-brand-900 border-white/5">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-8 text-white">
          Media × Créa × IA =
          <span className="text-accent-500">Avantage Injuste.</span>
</h2>
<p className="text-xl leading-relaxed font-medium mb-12 text-slate-300">
          Nous ne sommes pas une agence créative. Nous sommes une agence de
          performance qui utilise l’IA pour produire de meilleures ads, plus
          vite.
        </p>
<div className="flex flex-wrap justify-center gap-4 text-left">
<div className="flex items-center gap-3 px-6 py-4 rounded-xl border bg-brand-950/50 border-white/5">
<iconify-icon className="text-blue-400" icon="solar:layers-minimalistic-bold" width="24"></iconify-icon>
<span className="font-semibold text-white">Media Buying Structuré</span>
</div>
<div className="flex items-center gap-3 px-6 py-4 rounded-xl border bg-brand-950/50 border-white/5">
<iconify-icon className="text-blue-400" icon="solar:graph-new-up-bold" width="24"></iconify-icon>
<span className="font-semibold text-white">
              Stratégie Orientée Conversion
            </span>
</div>
<div className="flex items-center gap-3 px-6 py-4 rounded-xl border bg-brand-950/50 border-white/5">
<iconify-icon className="text-accent-500" icon="solar:cpu-bolt-bold" width="24"></iconify-icon>
<span className="font-semibold text-white">Production IA Premium</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative bg-brand-950">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 text-accent-500 text-xs font-bold uppercase tracking-wider mb-4 border border-accent-500/20">
            Proprietary Technology
          </div>
<h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-4 text-white">
            IAds Studio
          </h2>
<p className="text-lg text-slate-400">
            Pas un générateur de vidéos. Un pipeline créatif complet.
            <span className="text-white">Peu de créas. Très travaillées.</span>
</p>
</div>

<div className="relative mt-20">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-500 to-transparent -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative z-10">

<div className="flex flex-col items-center group">
<div className="w-16 h-16 rounded-2xl border border-brand-500/50 flex items-center justify-center mb-4 shadow-lg group-hover:border-accent-500 transition-colors bg-gradient-to-br bg-brand-950 text-white shadow-brand-900/50 from-brand-900 to-black">
<iconify-icon icon="solar:lightbulb-bolt-linear" width="30"></iconify-icon>
</div>
<div className="text-center">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                  Step 01
                </div>
<h4 className="font-bold text-sm text-white">
                  Idéation &amp; Angles
                </h4>
</div>
</div>

<div className="flex flex-col items-center group">
<div className="w-16 h-16 rounded-2xl border border-brand-500/50 flex items-center justify-center mb-4 shadow-lg group-hover:border-accent-500 transition-colors bg-gradient-to-br bg-brand-950 text-white shadow-brand-900/50 from-brand-900 to-black">
<iconify-icon icon="solar:document-text-linear" width="30"></iconify-icon>
</div>
<div className="text-center">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                  Step 02
                </div>
<h4 className="font-bold text-sm text-white">
                  Script &amp; Concept
                </h4>
</div>
</div>

<div className="flex flex-col items-center group">
<div className="w-16 h-16 rounded-2xl border border-brand-500/50 flex items-center justify-center text-accent-500 mb-4 shadow-lg group-hover:scale-110 transition-transform bg-gradient-to-br ring-1 ring-accent-500/30 bg-brand-950 shadow-brand-900/50 from-brand-900 to-black">
<iconify-icon icon="solar:magic-stick-3-bold" width="30"></iconify-icon>
</div>
<div className="text-center">
<div className="text-xs text-accent-500 uppercase tracking-wider mb-1">
                  Core
                </div>
<h4 className="font-bold text-sm text-white">Génération IA</h4>
<p className="text-[10px] text-slate-500">Img / Video / 3D</p>
</div>
</div>

<div className="flex flex-col items-center group">
<div className="w-16 h-16 rounded-2xl border border-brand-500/50 flex items-center justify-center mb-4 shadow-lg group-hover:border-accent-500 transition-colors bg-gradient-to-br bg-brand-950 text-white shadow-brand-900/50 from-brand-900 to-black">
<iconify-icon icon="solar:tuning-linear" width="30"></iconify-icon>
</div>
<div className="text-center">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                  Step 04
                </div>
<h4 className="font-bold text-sm text-white">
                  Post-Prod &amp; Audio
                </h4>
</div>
</div>

<div className="flex flex-col items-center group">
<div className="w-16 h-16 rounded-2xl border border-green-500/30 flex items-center justify-center mb-4 shadow-lg bg-gradient-to-br bg-brand-950 text-green-400 shadow-brand-900/50 from-brand-900 to-black">
<iconify-icon icon="solar:rocket-2-bold" width="30"></iconify-icon>
</div>
<div className="text-center">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                  Result
                </div>
<h4 className="font-bold text-sm text-white">Ready to Scale</h4>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t bg-brand-950/30 border-white/5">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">

<div className="p-8 md:p-12 md:rounded-l-3xl border md:border-r-0 relative overflow-hidden bg-white/5 border-white/5">
<h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-400">
<iconify-icon className="text-red-500" icon="solar:close-circle-bold"></iconify-icon>
              Agences Classiques
            </h3>
<ul className="space-y-6">
<li className="flex items-start gap-4 text-slate-400">
<iconify-icon className="mt-1 flex-shrink-0 text-slate-600" icon="solar:close-square-linear"></iconify-icon>
<span>Belles pubs qui ne vendent pas (vanity metrics)</span>
</li>
<li className="flex items-start gap-4 text-slate-400">
<iconify-icon className="mt-1 flex-shrink-0 text-slate-600" icon="solar:close-square-linear"></iconify-icon>
<span>3 semaines d'attente pour 2 créas</span>
</li>
<li className="flex items-start gap-4 text-slate-400">
<iconify-icon className="mt-1 flex-shrink-0 text-slate-600" icon="solar:close-square-linear"></iconify-icon>
<span>Coûts de production studio élevés</span>
</li>
<li className="flex items-start gap-4 text-slate-400">
<iconify-icon className="mt-1 flex-shrink-0 text-slate-600" icon="solar:close-square-linear"></iconify-icon>
<span>Pensent "Branding" avant Performance</span>
</li>
</ul>
</div>

<div className="p-8 md:p-12 md:rounded-3xl bg-brand-500/10 border border-brand-500/50 relative overflow-hidden shadow-2xl shadow-brand-900/50">
<div className="absolute inset-0 bg-gradient-to-b from-brand-500/10 to-transparent pointer-events-none"></div>
<h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10 text-white">
<iconify-icon className="text-accent-500" icon="solar:check-circle-bold"></iconify-icon>
              Adsvantage Scale
            </h3>
<ul className="space-y-6 relative z-10">
<li className="flex items-start gap-4 font-medium text-white">
<iconify-icon className="mt-1 flex-shrink-0 text-accent-500" icon="solar:check-square-bold"></iconify-icon>
<span>Winning Ads orientées profit net</span>
</li>
<li className="flex items-start gap-4 font-medium text-white">
<iconify-icon className="mt-1 flex-shrink-0 text-accent-500" icon="solar:check-square-bold"></iconify-icon>
<span>Qualité studio en 48h grâce à l'IA</span>
</li>
<li className="flex items-start gap-4 font-medium text-white">
<iconify-icon className="mt-1 flex-shrink-0 text-accent-500" icon="solar:check-square-bold"></iconify-icon>
<span>Coûts de production inclus &amp; optimisés</span>
</li>
<li className="flex items-start gap-4 font-medium text-white">
<iconify-icon className="mt-1 flex-shrink-0 text-accent-500" icon="solar:check-square-bold"></iconify-icon>
<span>Performance First, Ego Last</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-brand-950">

<div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-b pb-16 border-white/10">
<div className="text-center">
<div className="text-4xl md:text-5xl font-display font-bold mb-2 text-white">
              +8M€
            </div>
<div className="text-slate-500 font-medium">Dépensés sur Meta</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-display font-bold mb-2 text-white">
              +60
            </div>
<div className="text-slate-500 font-medium">Marques accompagnées</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-display font-bold mb-2 text-white">
              100+
            </div>
<div className="text-slate-500 font-medium">Concepts testés / mois</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="glass-card p-8 rounded-3xl relative group">
<div className="inline-block bg-green-500/20 px-3 py-1 rounded text-xs font-bold mb-6 text-green-400">
              ECOMMERCE
            </div>
<h3 className="text-2xl font-bold mb-4 text-white">
              ROAS ×3.2 grâce à la Créa IA
            </h3>
<p className="mb-8 text-slate-400">
              Pour cette marque de cosmétique, nous avons remplacé les shootings
              coûteux par des générations IA produits. Coût de production divisé
              par 5, ROAS multiplié par 3.
            </p>
<div className="flex items-end gap-2 font-bold text-white">
<span className="text-4xl">4.5</span>
<span className="text-sm text-slate-500 mb-2">ROAS Moyen</span>
</div>
</div>

<div className="glass-card p-8 rounded-3xl relative group">
<div className="inline-block bg-blue-500/20 px-3 py-1 rounded text-xs font-bold mb-6 text-blue-400">
              LEAD GEN
            </div>
<h3 className="text-2xl font-bold mb-4 text-white">
              10 angles gagnants en 14 jours
            </h3>
<p className="mb-8 text-slate-400">
              Testing agressif de variations de hooks générés par IA.
              Identification rapide des axes qui diminuent le CPL de 40%.
            </p>
<div className="flex items-end gap-2 font-bold text-white">
<span className="text-4xl">-40%</span>
<span className="text-sm text-slate-500 mb-2">sur le CPL</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto bg-brand-950">
<h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-12 text-center text-white">
        Questions Fréquentes
      </h2>
<div className="space-y-4">
<details className="group glass-card rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold transition-colors text-white hover:bg-white/5">
            L’IA remplace-t-elle une équipe créa ?
            <span className="transition group-open:rotate-180 text-accent-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm leading-relaxed text-slate-400">
            Non, elle la supercharge. Nos directeurs artistiques et motion
            designers utilisent l'IA pour aller 10x plus vite et explorer des
            directions visuelles impossibles auparavant. L'humain garde la
            stratégie, l'IA gère l'exécution.
          </div>
</details>
<details className="group glass-card rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold transition-colors text-white hover:bg-white/5">
            Combien de créas produisez-vous par mois ?
            <span className="transition group-open:rotate-180 text-accent-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm leading-relaxed text-slate-400">
            Nous ne vendons pas au "kilo" mais à la performance. Cependant,
            notre volume de test est massif : nous lançons généralement 4 à 8
            nouveaux angles par semaine (20-30 variations/mois) pour trouver les
            winners.
          </div>
</details>
<details className="group glass-card rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold transition-colors text-white hover:bg-white/5">
            Garantissez-vous les résultats ?
            <span className="transition group-open:rotate-180 text-accent-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm leading-relaxed text-slate-400">
            Personne ne peut garantir le marché. Mais nous garantissons le
            process : si ça ne performe pas, nous coupons et itérons
            immédiatement. Nous sommes une agence de performance, notre but est
            votre profit.
          </div>
</details>
<details className="group glass-card rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold transition-colors text-white hover:bg-white/5">
            Pourquoi ne pas produire en interne ?
            <span className="transition group-open:rotate-180 text-accent-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm leading-relaxed text-slate-400">
            Recruter un Media Buyer + un Motion Designer + payer les outils IA
            vous coûtera 3x le prix de notre retainer, sans bénéficier de notre
            learning curve sur +60 comptes.
          </div>
</details>
</div>
</section>

<section className="py-24 px-6 relative bg-brand-950" id="audit">
<div className="absolute inset-0 bg-gradient-to-t to-transparent pointer-events-none from-brand-900/50"></div>
<div className="max-w-4xl mx-auto glass-card rounded-[2.5rem] p-8 md:p-16 border border-brand-500/30 relative overflow-hidden shadow-2xl">

<div className="absolute -top-24 -left-24 w-64 h-64 bg-accent-500/20 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 text-white">
              Prêt à scaler sans cramer votre budget créa ?
            </h2>
<p className="mb-8 text-slate-400">
              Audit stratégique offert — on vous dit si on peut vous aider (ou
              pas). Réponse franche sous 24h.
            </p>
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-brand-900 bg-slate-700"></div>
<div className="w-10 h-10 rounded-full border-2 border-brand-900 bg-slate-600"></div>
<div className="w-10 h-10 rounded-full border-2 bg-slate-500 border-brand-900"></div>
</div>
<div className="text-sm text-slate-400">
                Rejoignez +60 marques ambitieuses
              </div>
</div>
</div>
<form className="space-y-4 p-6 rounded-2xl border bg-brand-950/50 border-white/5" data-netlify="true" method="POST" name="contact">
<input name="form-name" type="hidden" value="contact"/>
</form>
<div>
<label className="text-xs font-medium ml-1 text-slate-400">
              Nom Complet
            </label>
<input className="w-full mt-1 border rounded-lg px-4 py-3 placeholder-slate-600 focus:outline-none focus:border-accent-500 transition-colors bg-brand-900 border-white/10 text-white" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="text-xs font-medium ml-1 text-slate-400">
              Email Professionnel
            </label>
<input className="w-full mt-1 border rounded-lg px-4 py-3 placeholder-slate-600 focus:outline-none focus:border-accent-500 transition-colors bg-brand-900 border-white/10 text-white" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="text-xs font-medium ml-1 text-slate-400">
              Budget Mensuel Meta Ads
            </label>
<select className="w-full mt-1 border rounded-lg px-4 py-3 focus:outline-none focus:border-accent-500 transition-colors appearance-none bg-brand-900 border-white/10 text-slate-300">
<option disabled="" selected="" value="">Sélectionner...</option>
<option value="&lt;10k">Moins de 10k€ / mois</option>
<option value="10-30k">10k€ - 30k€ / mois</option>
<option value="30k+">30k€ + / mois</option>
</select>
</div>
<div>
<label className="text-xs font-medium ml-1 text-slate-400">
              Objectif Principal
            </label>
<input className="w-full mt-1 border rounded-lg px-4 py-3 placeholder-slate-600 focus:outline-none focus:border-accent-500 transition-colors bg-brand-900 border-white/10 text-white" placeholder="Ex: Scaler le ROAS à 4.0" type="text"/>
</div>
<button className="w-full bg-accent-500 font-bold py-4 rounded-lg transition-all shadow-lg shadow-accent-500/20 flex items-center justify-center gap-2 mt-2 hover:bg-accent-600 text-white" type="button">
            Obtenir mon audit
            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="border-t py-12 px-6 text-center md:text-left border-white/5 bg-brand-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-center md:justify-start gap-2">
<div className="w-6 h-6 rounded bg-accent-500 flex items-center justify-center text-xs text-white">
<iconify-icon icon="solar:graph-new-up-bold" width="14"></iconify-icon>
</div>
<span className="font-display font-bold uppercase tracking-tight text-white">
              Adsvantage Scale
            </span>
</div>
<p className="text-slate-500 text-sm">
            Des Meta Ads qui scalent.
            <br/>
            Des créatifs IA qui convertissent.
          </p>
</div>
<div className="text-xs text-center md:text-right text-slate-600">
<p>© 2026 Adsvantage Scale LP.</p>
<p>Meta Ads × Créa IA × Performance</p>
</div>
</div>
</footer>






    </>
  );
}
