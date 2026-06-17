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



tailwind = {
darkMode: 'class'
}



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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Initial theme check
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      htmlElement.classList.add('dark');
    }

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        localStorage.theme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
      });
    }

    // Scroll Reveal Intersection Observer
    document.addEventListener('DOMContentLoaded', () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
      
      // Pricing Toggle Logic
      const pricingToggle = document.getElementById('pricing-toggle');
      const pricingKnob = document.getElementById('pricing-knob');
      const billingLabel = document.getElementById('billing-label');
      const priceValue = document.getElementById('price-value');
      let isYearly = false;

      if(pricingToggle && pricingKnob && billingLabel && priceValue) {
        pricingToggle.addEventListener('click', () => {
          isYearly = !isYearly;
          if (isYearly) {
            pricingKnob.classList.replace('translate-x-[4px]', 'translate-x-[18px]');
            billingLabel.textContent = 'Annuel';
            priceValue.textContent = priceValue.getAttribute('data-yearly');
          } else {
            pricingKnob.classList.replace('translate-x-[18px]', 'translate-x-[4px]');
            billingLabel.textContent = 'Mensuel';
            priceValue.textContent = priceValue.getAttribute('data-monthly');
          }
        });
      }
    });

    // Testimonials Logic
    (function () {
      const prevBtn = document.getElementById("tPrev");
      const nextBtn = document.getElementById("tNext");
      const avatarEl = document.getElementById("tAvatar");
      const quoteEl = document.getElementById("tQuote");
      const nameEl = document.getElementById("tName");
      const roleEl = document.getElementById("tRole");
      const dotsEl = document.getElementById("tDots");

      if (!prevBtn || !nextBtn || !avatarEl || !quoteEl || !nameEl || !roleEl || !dotsEl) return;

      const testimonials = [
        {
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
          quote: "\"Depuis l'intégration de l'IA, nos temps de réponse sont passés de 45 minutes à 2 secondes. Les avis voyageurs n'ont jamais été aussi bons.\"",
          name: "Sophie Martin",
          role: "Gérante, Conciergerie Parisienne (150 lots)"
        },
        {
          avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
          quote: "\"Le bot gère 80% des messages la nuit. Je me réveille le matin et tout est déjà réglé avec les voyageurs. Un vrai game changer.\"",
          name: "Thomas Dubois",
          role: "Co-fondateur, StayTech"
        },
        {
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
          quote: "\"L'intégration avec notre PMS s'est faite en 10 minutes. L'IA a lu nos livrets d'accueil et était prête à répondre immédiatement.\"",
          name: "Julie Lefevre",
          role: "Operations Manager, Sud Loc"
        }
      ];

      let index = 0;

      function animateSwap() {
        const targets = [avatarEl, quoteEl, nameEl, roleEl, dotsEl];
        targets.forEach((el) => {
          el.style.transition = "opacity 200ms ease, transform 200ms ease";
          el.style.opacity = "0";
          el.style.transform = "translateY(5px)";
        });

        window.setTimeout(() => {
          render();
          targets.forEach((el) => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          });
        }, 220);
      }

      function renderDots() {
        dotsEl.innerHTML = "";
        testimonials.forEach((_, i) => {
          const b = document.createElement("button");
          b.type = "button";
          b.className = "h-2 rounded-full transition-all duration-300 " + (i === index ? "w-8 bg-gray-900 dark:bg-white" : "w-2 bg-gray-300 dark:bg-zinc-700 hover:bg-gray-400 dark:hover:bg-zinc-600");
          b.addEventListener("click", () => {
            if (i === index) return;
            index = i;
            animateSwap();
          });
          dotsEl.appendChild(b);
        });
      }

      function render() {
        const t = testimonials[index];
        avatarEl.src = t.avatar;
        quoteEl.textContent = t.quote;
        nameEl.textContent = t.name;
        roleEl.textContent = t.role;
        renderDots();
      }

      function next() {
        index = (index + 1) % testimonials.length;
        animateSwap();
      }
      function prev() {
        index = (index - 1 + testimonials.length) % testimonials.length;
        animateSwap();
      }

      nextBtn.addEventListener("click", next);
      prevBtn.addEventListener("click", prev);
      render();
    })();
  
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
      

<nav className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
<div className="sm:h-20 flex h-16 max-w-[1440px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="flex-shrink-0">
<a className="text-xl sm:text-2xl font-semibold tracking-tighter text-gray-900 dark:text-white flex items-center gap-1 transition-colors" href="#">
          Concierge<span className="text-indigo-600 dark:text-indigo-400">_</span>
</a>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors" href="#produit">Produit</a>
<a className="text-sm font-medium text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors" href="#avantages">Avantages</a>
<a className="text-sm font-medium text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors" href="#temoignages">Témoignages</a>
<a className="text-sm font-medium text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors" href="#tarifs">Tarifs</a>
</div>

<div className="flex items-center gap-3 sm:gap-4">

<button aria-label="Toggle Dark Mode" className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors" id="theme-toggle">
<iconify-icon className="dark:hidden text-lg" icon="solar:moon-linear"></iconify-icon>
<iconify-icon className="hidden dark:block text-lg" icon="solar:sun-linear"></iconify-icon>
</button>
<a className="hidden sm:block text-sm font-medium text-gray-600 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white transition-colors" href="#">
          Connexion
        </a>
<a className="bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-zinc-200 text-white dark:text-gray-900 px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm active:scale-95 flex items-center gap-2" href="#">
          Réserver une démo
        </a>
</div>
</div>
</nav>

<main className="sm:px-6 max-w-[1440px] mr-auto ml-auto pt-4 pb-20">

<div className="relative w-full rounded-[32px] sm:rounded-[48px] h-[750px] sm:h-[680px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(79,70,229,0.1)] ring-1 ring-gray-200/50 dark:ring-white/10 isolate group mx-4 sm:mx-0 w-[calc(100%-2rem)] sm:w-full transition-all duration-300">

<div className="absolute inset-0 z-0 bg-[#F8FAFC] dark:bg-zinc-950 overflow-hidden transition-colors duration-300">
<div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-b from-indigo-200 dark:from-indigo-900/40 via-blue-100 dark:via-blue-900/20 to-transparent blur-[100px] opacity-60 animate-float-slow mix-blend-multiply dark:mix-blend-screen"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-violet-200 dark:from-violet-900/40 via-indigo-100 dark:via-indigo-900/20 to-sky-100 dark:to-sky-900/10 blur-[90px] opacity-50 animate-float-medium mix-blend-multiply dark:mix-blend-screen"></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNDQkQ1RTEiIGZpbGwtb3BhY2l0eT0iMC41Ii8+PC9zdmc+')] opacity-40 dark:opacity-10"></div>
</div>

<div className="flex flex-col lg:flex-row sm:px-12 md:px-20 w-full h-full z-10 pr-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-center justify-between">

<div className="flex flex-col justify-center items-start max-w-2xl lg:max-w-xl z-20 pt-20 lg:pt-0">
<div className="animate-fade-in-up">
<div className="inline-flex items-center gap-2 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-gray-200/60 dark:border-white/10 rounded-full px-3 py-1.5 mb-6 shadow-sm transition-colors duration-300">
<iconify-icon className="text-indigo-600 dark:text-indigo-400 text-sm" icon="solar:stars-linear"></iconify-icon>
<span className="text-xs font-semibold text-gray-700 dark:text-zinc-300 tracking-wide uppercase">
                IA Spécialisée Conciergerie
              </span>
</div>
</div>
<h1 className="animate-fade-in-up delay-100 sm:text-6xl md:text-7xl leading-[1.1] dark:text-white transition-colors text-5xl font-semibold text-gray-900 tracking-tighter mb-6">
            L'assistant IA de vos 
            <span className="text-indigo-600 dark:text-indigo-400 relative inline-block transition-colors">
              locations
              <span className="absolute inset-x-0 bottom-2 h-3 bg-indigo-200/40 dark:bg-indigo-500/20 -z-10 rounded-sm"></span>
</span>
            courte durée.
          </h1>
<p className="animate-fade-in-up delay-200 text-lg sm:text-xl text-gray-600 dark:text-zinc-400 leading-relaxed max-w-lg font-normal mb-10 transition-colors">
            Automatisez vos échanges, répondez à toute heure et gagnez des heures précieuses chaque jour. Le bot qui s'occupe de vos voyageurs.
          </p>
<div className="animate-fade-in-up delay-300 flex flex-wrap gap-4">
<a className="group inline-flex items-center justify-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3.5 rounded-full font-medium text-base shadow-lg shadow-gray-900/10 dark:shadow-none transition-all hover:bg-gray-800 dark:hover:bg-zinc-200 hover:-translate-y-0.5 active:scale-95" href="#">
<span className="">Démarrer l'essai gratuit</span>
<iconify-icon className="text-xl transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-white/60 dark:bg-zinc-900/60 hover:bg-white dark:hover:bg-zinc-800 backdrop-blur-md border border-gray-200 dark:border-white/10 text-gray-700 dark:text-zinc-300 px-6 py-3.5 rounded-full font-medium text-base transition-all shadow-sm" href="#">
<iconify-icon className="text-xl text-gray-500 dark:text-zinc-400" icon="solar:play-circle-linear"></iconify-icon>
              Voir en action
            </a>
</div>
</div>

<div className="hidden lg:flex z-10 w-1/2 h-full relative perspective-[1600px] items-center justify-center">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-[500px] h-[500px] rounded-full border border-indigo-200/40 dark:border-indigo-500/20 animate-[spin_40s_linear_infinite] relative">
<div className="absolute top-0 left-1/2 w-3 h-3 bg-indigo-400 dark:bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.6)] blur-[1px]">
</div>
</div>
</div>

<div className="relative w-[340px] h-[540px] animate-float-showcase group transform-style-3d">

<div className="relative w-full h-full transition-transform duration-700 ease-out transform-style-3d rotate-y-[-10deg] rotate-x-[5deg] group-hover:rotate-y-[0deg] group-hover:rotate-x-[0deg]">

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-300 to-purple-200 dark:from-indigo-500/30 dark:to-purple-500/30 rounded-[40px] opacity-40 -z-10 translate-z-[-30px] translate-x-[15px] translate-y-[15px] blur-xl transition-colors duration-300">
</div>

<div className="absolute inset-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-[40px] border border-white dark:border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden transition-colors duration-300">

<div className="dark:bg-zinc-900/90 dark:border-white/5 flex gap-4 z-20 transition-colors duration-300 bg-white/90 h-20 border-green-50 border-b pt-4 pr-6 pl-6 backdrop-blur gap-x-4 gap-y-4 items-center">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
<iconify-icon className="text-xl" icon="solar:smart-home-linear"></iconify-icon>
</div>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white dark:border-zinc-900 rounded-full transition-colors duration-300">
</div>
</div>
<div className="">
<h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-tight transition-colors">Concierge
              IA</h3>
<p className="text-xs text-gray-500 dark:text-zinc-400 font-medium transition-colors">Répond instantanément</p>
</div>
</div>

<div className="flex-1 flex flex-col overflow-hidden dark:bg-zinc-950/50 transition-colors duration-300 bg-[#fef6f1] border-green-50 pt-5 pr-5 pb-5 pl-5 gap-x-4 gap-y-4">
<div className="dark:text-zinc-500 transition-colors text-xs font-medium text-slate-600 text-center mb-2">
            Aujourd'hui, 14:30</div>

<div className="flex flex-col gap-1 items-start">
<span className="text-xs text-gray-500 dark:text-zinc-400 ml-2 transition-colors">Voyageur (Airbnb)</span>
<div className="dark:bg-zinc-800 dark:border-white/5 dark:text-zinc-300 dark:shadow-none leading-relaxed transition-colors duration-300 text-sm text-slate-950 bg-green-100 max-w-[85%] border-gray-100 border rounded-2xl pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm">
              Bonjour, est-ce qu'on peut arriver vers 21h ce soir ? Et quel est le code wifi ?
            </div>
</div>

<div className="flex flex-col gap-1 mt-2 relative gap-x-1 gap-y-1 items-end">
<span className="dark:text-indigo-400 flex items-center gap-1 transition-colors text-xs font-medium text-emerald-600 mr-2">
<iconify-icon className="" icon="solar:bolt-linear"></iconify-icon> IA Assistant
                    </span>
<div className="dark:bg-white dark:text-gray-900 dark:shadow-none leading-relaxed transition-colors duration-300 text-sm text-stone-900 bg-[#ffffff] max-w-[90%] rounded-2xl pt-2.5 pr-4 pb-2.5 pl-4 shadow-md">Bonjour ! Aucun problème pour 21h, l'arrivée se fait en autonomie grâce à la boîte à clés. Le code wifi est :<br/><br/><span className="dark:bg-black/10 transition-colors font-mono bg-slate-300/20 rounded pr-1 pl-1">AppartPremium24</span><br/></div>
</div>
</div>

<div className="dark:border-white/5 dark:bg-zinc-900 flex gap-3 transition-colors duration-300 bg-white h-16 border-gray-100 border-t pr-4 pl-4 gap-x-3 gap-y-3 items-center">
<div className="flex-1 h-10 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center px-4 transition-colors duration-300">
<span className="text-sm text-gray-400 dark:text-zinc-500 transition-colors">Automatisation active...</span>
</div>
<div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
<iconify-icon className="text-xl" icon="solar:microphone-linear"></iconify-icon>
</div>
</div>
</div>
<div className="-left-12 dark:bg-zinc-900/90 dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] dark:border-white/10 flex translate-z-[40px] transition-all duration-500 group-hover:translate-z-[60px] -translate-x-16 -translate-y-1 bg-stone-950 border-gray-100 border rounded-2xl pt-3 pr-4 pb-3 pl-3 absolute top-20 shadow-md backdrop-blur-sm gap-x-3 gap-y-3 items-center">
<div className="dark:bg-emerald-500/20 flex dark:text-emerald-400 transition-colors duration-300 text-emerald-600 bg-emerald-100 w-8 h-8 rounded-full items-center justify-center">
<iconify-icon className="" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex flex-col transition-colors">
<span className="dark:text-white text-xs font-semibold text-slate-100">Temps sauvé</span>
<span className="dark:text-zinc-400 text-xs text-slate-100">12 mins / réservation</span>
</div>
</div>

</div>
</div>
</div>
</div>
</div>

<div className="mt-20 sm:mt-32 px-4 sm:px-6" id="avantages">
<div className="flex flex-col md:flex-row md:items-end gap-6 reveal-on-scroll border-transparent border-b mb-12 gap-x-6 gap-y-6 justify-between">
<div className="max-w-2xl">
<h2 className="md:text-4xl dark:text-white transition-colors text-3xl font-semibold text-gray-900 tracking-tight">Pourquoi utiliser une IA ?</h2>
<p className="text-lg text-gray-500 dark:text-zinc-400 mt-3 font-normal leading-relaxed transition-colors">
            Concentrez-vous sur le développement de votre parc, on s'occupe des locataires.
          </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="group cursor-default reveal-on-scroll delay-100 h-full">
<div className="relative w-full aspect-[4/3] bg-[#F4F4F5] dark:bg-zinc-900/40 rounded-[32px] overflow-hidden mb-6 p-8 flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-1">
<div className="dark:bg-zinc-800 dark:border-white/5 flex dark:text-white dark:shadow-none transition-colors text-gray-900 bg-white w-24 h-24 border-transparent border rounded-2xl shadow-sm items-center justify-center">
<iconify-icon className="text-2xl" height="40" icon="solar:moon-stars-linear" style={{color: 'rgb(17, 24, 39)'}} width="40"></iconify-icon>
</div>
<div className="absolute bottom-[-10%] right-[-10%] w-48 h-48 bg-indigo-200/50 dark:bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-300/50 dark:group-hover:bg-indigo-500/20 transition-colors"></div>
<div className="mt-auto relative z-10 transition-colors">
<h3 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight mb-2">Répond à toute heure</h3>
<p className="text-base font-normal text-gray-600 dark:text-zinc-400 leading-relaxed">
                Vos voyageurs arrivent tard ? Le bot gère les instructions d'arrivée 24h/24 et 7j/7, sans vous réveiller.
              </p>
</div>
</div>
</div>

<div className="group cursor-default reveal-on-scroll delay-200 h-full">
<div className="relative w-full aspect-[4/3] bg-[#EEF2FF] dark:bg-indigo-900/10 rounded-[32px] overflow-hidden mb-6 p-8 flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-1">
<div className="dark:bg-zinc-800 dark:border-white/5 flex dark:text-indigo-400 dark:shadow-none transition-colors text-indigo-600 bg-white w-24 h-24 border-transparent border rounded-2xl shadow-sm items-center justify-center">
<iconify-icon className="text-2xl" height="40" icon="solar:stopwatch-linear" style={{color: 'rgb(79, 70, 229)'}} width="40"></iconify-icon>
</div>
<div className="absolute bottom-[-10%] right-[-10%] w-48 h-48 bg-blue-200/50 dark:bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-300/50 dark:group-hover:bg-blue-500/20 transition-colors"></div>
<div className="mt-auto relative z-10 transition-colors">
<h3 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight mb-2">Gain de temps massif</h3>
<p className="text-base font-normal text-gray-600 dark:text-zinc-400 leading-relaxed">
                Fini les messages répétitifs (code porte, wifi, poubelles). L'IA répond instantanément aux questions fréquentes.
              </p>
</div>
</div>
</div>

<div className="group cursor-default reveal-on-scroll delay-300 h-full">
<div className="relative w-full aspect-[4/3] bg-[#F4F4F5] dark:bg-emerald-900/10 rounded-[32px] overflow-hidden mb-6 p-8 flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-1">
<div className="dark:bg-zinc-800 dark:border-white/5 flex dark:text-white dark:shadow-none transition-colors text-gray-900 bg-white w-24 h-24 border-transparent border rounded-2xl shadow-sm items-center justify-center">
<iconify-icon className="text-2xl" height="40" icon="solar:global-linear" style={{color: 'rgb(17, 24, 39)'}} width="40"></iconify-icon>
</div>
<div className="absolute bottom-[-10%] right-[-10%] w-48 h-48 bg-emerald-200/40 dark:bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-300/50 dark:group-hover:bg-emerald-500/20 transition-colors"></div>
<div className="mt-auto relative z-10 transition-colors">
<h3 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight mb-2">100% Multilingue</h3>
<p className="text-base font-normal text-gray-600 dark:text-zinc-400 leading-relaxed">
                Détecte la langue du voyageur et discute naturellement en plus de 30 langues. Zéro barrière linguistique.
              </p>
</div>
</div>
</div>
</div>
</div>

<div className="sm:mt-32 sm:px-6 mt-24 pr-4 pl-4" id="produit">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal-on-scroll">
<div className="max-w-xl transition-colors">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 dark:text-white leading-[1.05]">
            Une conciergerie <br className="hidden sm:block"/>augmentée
          </h2>
<p className="text-lg text-gray-500 dark:text-zinc-400 mt-4 font-normal leading-relaxed">
            Notre plateforme s'intègre à votre flux de travail existant pour automatiser la gestion sans perdre en humanité.
          </p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[600px] h-auto gap-x-6 gap-y-6">

<div className="lg:col-span-7 lg:h-full group overflow-hidden h-[450px] rounded-[40px] relative reveal-on-scroll delay-100 bg-gray-100 dark:bg-zinc-900 transition-colors">
<img alt="Intérieur appartement" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
<div className="flex flex-col sm:p-12 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
<div className="inline-flex gap-2 text-xs font-semibold text-indigo-950 tracking-wide bg-amber-50 border rounded-full mb-4 pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-none gap-x-2 gap-y-2 items-center">
<iconify-icon className="" icon="solar:route-linear"></iconify-icon>
                Check-in / Check-out Autonome
              </div>
<h3 className="text-3xl sm:text-5xl font-semibold text-white tracking-tighter mb-2 leading-tight">
                Guide vos voyageurs <br/>pas à pas.
              </h3>
<p className="group-hover:opacity-100 transition-opacity delay-100 duration-500 text-lg font-normal text-white/80 opacity-0 max-w-md mt-2">
                L'IA envoie pro-activement les livrets d'accueil, les codes d'accès et s'assure que le départ s'est bien passé.
              </p>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6 h-full">

<div className="flex-1 min-h-[250px] lg:h-auto group overflow-hidden dark:bg-zinc-900/40 dark:border-white/5 transition-colors reveal-on-scroll delay-200 flex flex-col bg-indigo-50 border-gray-100 border rounded-[40px] pt-8 pr-8 pb-8 pl-8 relative justify-end">
<div className="dark:bg-zinc-800 flex dark:text-white transition-colors text-gray-900 bg-[#ffffff] w-24 h-24 rounded-full absolute top-8 right-8 shadow-sm items-center justify-center">
<iconify-icon className="text-xl" icon="solar:link-linear"></iconify-icon>
</div>
<div className="flex gap-3 dark:opacity-20 transition-opacity opacity-40 w-full absolute top-1/4 left-8 gap-x-3 gap-y-3 items-center">
<div className="dark:bg-zinc-600 transition-colors bg-indigo-300 w-10 h-10 rounded-xl"></div>
<div className="flex-1 h-0.5 bg-gradient-to-r from-gray-300 dark:from-zinc-600 to-transparent transition-colors"></div>
</div>
<div className="relative z-10 transition-colors">
<span className="dark:text-indigo-400 uppercase block text-base font-semibold text-indigo-600 tracking-wide mb-1">Intégrations</span>
<h3 className="dark:text-white text-2xl font-semibold text-gray-900 tracking-tight">
                Connecté à vos outils
              </h3>
<p className="dark:text-zinc-400 leading-relaxed text-sm font-normal text-slate-900 mt-2">
                Synchronisation avec vos PMS (Beds24, Guesty, Smoobu) et plateformes (Airbnb, Booking).
              </p>
</div>
</div>

<div className="relative flex-1 min-h-[250px] lg:h-auto group rounded-[40px] overflow-hidden bg-gray-900 dark:bg-zinc-900 reveal-on-scroll delay-300 p-8 flex flex-col justify-end transition-colors">
<div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-indigo-500/30 blur-[60px] rounded-full mix-blend-screen transition-colors duration-500 group-hover:bg-purple-500/40"></div>
<div className="flex text-white bg-white/10 w-24 h-24 border-white/10 border rounded-full absolute top-8 right-8 backdrop-blur-md items-center justify-center">
<iconify-icon className="text-xl" icon="solar:user-speak-linear"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-2xl font-semibold text-white tracking-tight">
                Transfert vers humain
              </h3>
<p className="text-white/60 text-sm mt-2 font-normal leading-relaxed">
                L'IA sait quand elle ne sait pas. En cas d'urgence (fuite d'eau), elle alerte votre équipe immédiatement.
              </p>
</div>
</div>
</div>
</div>
</div>

<div className="sm:px-6 mt-24 pr-4 pl-4">
<div className="w-full h-[400px] md:h-[500px] rounded-[40px] relative overflow-hidden group shadow-lg reveal-on-scroll bg-gray-900 dark:bg-zinc-950 transition-colors">
<img alt="Relax" className="w-full h-full object-cover absolute inset-0 opacity-40 transition-transform duration-700 group-hover:scale-105 mix-blend-overlay grayscale" src="https://images.unsplash.com/photo-1542442828-287217bfb87f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
<div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 w-full max-w-3xl">
<div className="inline-flex items-center gap-2 mb-6 opacity-80">
<iconify-icon className="text-white text-xl" icon="solar:cup-hot-linear"></iconify-icon>
<span className="text-sm font-medium text-white tracking-wide">Reprenez le contrôle</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-semibold text-white tracking-tighter mb-6">
            Divisez par deux le temps passé sur les messages.
          </h2>
<p className="text-lg text-white/70 font-normal max-w-xl mb-8">
            Moins de stress, plus de réservations. Laissez l'IA gérer les 80% de questions répétitives pendant que vous développez votre activité.
          </p>
<div>
<a className="inline-flex items-center gap-2 bg-white dark:bg-zinc-100 text-gray-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 dark:hover:bg-white transition-colors" href="#">
              Calculer mon gain de temps
            </a>
</div>
</div>
</div>
</div>

<div className="mt-24 sm:mt-32 px-4 sm:px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll transition-colors">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
          La technique, simplifiée.
        </h2>
<p className="text-lg text-gray-500 dark:text-zinc-400 mt-4 font-normal leading-relaxed">
          Une mise en place sans friction, pensée pour les gestionnaires, pas pour les développeurs.
        </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
<div className="bg-gray-50 dark:bg-zinc-900/40 border border-gray-100 dark:border-white/5 rounded-[32px] p-8 flex flex-col items-start reveal-on-scroll delay-100 transition-colors">
<div className="w-10 h-10 bg-white dark:bg-zinc-800 shadow-sm dark:shadow-none rounded-full flex items-center justify-center mb-6 text-gray-900 dark:text-white border border-gray-100 dark:border-white/5 transition-colors">
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 dark:text-white tracking-tight mb-2 transition-colors">Entraînement en 1 clic</h3>
<p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed transition-colors">
            Fournissez vos livrets d'accueil PDF ou vos liens Airbnb, l'IA lit tout et apprend instantanément.
          </p>
</div>
<div className="bg-gray-50 dark:bg-zinc-900/40 border border-gray-100 dark:border-white/5 rounded-[32px] p-8 flex flex-col items-start reveal-on-scroll delay-200 transition-colors">
<div className="w-10 h-10 bg-white dark:bg-zinc-800 shadow-sm dark:shadow-none rounded-full flex items-center justify-center mb-6 text-gray-900 dark:text-white border border-gray-100 dark:border-white/5 transition-colors">
<iconify-icon className="text-lg" icon="solar:pallete-2-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 dark:text-white tracking-tight mb-2 transition-colors">Ton personnalisé</h3>
<p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed transition-colors">
            Réglez le ton du bot : professionnel, chaleureux, tutoiement ou vouvoiement. Il s'adapte à votre marque.
          </p>
</div>
<div className="bg-gray-50 dark:bg-zinc-900/40 border border-gray-100 dark:border-white/5 rounded-[32px] p-8 flex flex-col items-start reveal-on-scroll delay-300 transition-colors">
<div className="w-10 h-10 bg-white dark:bg-zinc-800 shadow-sm dark:shadow-none rounded-full flex items-center justify-center mb-6 text-gray-900 dark:text-white border border-gray-100 dark:border-white/5 transition-colors">
<iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 dark:text-white tracking-tight mb-2 transition-colors">Contrôle total</h3>
<p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed transition-colors">
            Consultez l'historique de toutes les conversations. Vous gardez toujours la main sur les échanges.
          </p>
</div>
</div>
</div>

<div className="sm:mt-32 mt-24 px-4 sm:px-6" id="temoignages">
<div className="relative w-full bg-[#FAFAFF] dark:bg-zinc-900/30 rounded-[40px] px-6 py-20 sm:py-28 overflow-hidden reveal-on-scroll border border-gray-100/50 dark:border-white/5 transition-colors" id="testimonial">
<div className="absolute top-8 right-8 flex gap-3 z-10">
<button className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 flex items-center justify-center text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-all shadow-sm" id="tPrev" type="button">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-zinc-200 text-white dark:text-gray-900 flex items-center justify-center transition-all shadow-sm" id="tNext" type="button">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="max-w-4xl mx-auto flex flex-col items-center text-center">
<iconify-icon className="text-4xl text-indigo-200 dark:text-indigo-900/50 mb-8 transition-colors" icon="solar:chat-round-dots-linear"></iconify-icon>
<h2 className="text-3xl sm:text-4xl md:text-5xl leading-[1.1] font-semibold text-gray-900 dark:text-white tracking-tighter mb-10 max-w-3xl min-h-[120px] sm:min-h-[140px] flex items-center justify-center transition-colors" id="tQuote">"Depuis l'intégration de l'IA, nos temps de réponse sont passés de 45 minutes à 2 secondes. Les avis voyageurs n'ont jamais été aussi bons."</h2>
<div className="flex items-center gap-4 mb-16">
<img alt="Avatar" className="w-12 h-12 rounded-full object-cover shadow-sm ring-2 ring-white dark:ring-zinc-800 transition-colors" id="tAvatar" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-left flex flex-col transition-colors">
<span className="text-sm text-gray-900 dark:text-white font-semibold" id="tName">Sophie Martin</span>
<span className="text-xs text-gray-500 dark:text-zinc-400 font-medium" id="tRole">Gérante, Conciergerie Parisienne (150 lots)</span>
</div>
</div>
<div className="flex items-center gap-2 mb-12" id="tDots"><button className="h-2 rounded-full transition-all duration-300 w-8 bg-gray-900 dark:bg-white" type="button"></button><button className="h-2 rounded-full transition-all duration-300 w-2 bg-gray-300 dark:bg-zinc-700 hover:bg-gray-400 dark:hover:bg-zinc-600" type="button"></button><button className="h-2 rounded-full transition-all duration-300 w-2 bg-gray-300 dark:bg-zinc-700 hover:bg-gray-400 dark:hover:bg-zinc-600" type="button"></button></div>
<div className="w-full flex flex-col items-center border-t border-gray-200 dark:border-white/10 pt-10 transition-colors">
<p className="text-xs text-gray-400 dark:text-zinc-500 font-medium uppercase tracking-wider mb-6 transition-colors">
              Ils gèrent des milliers de nuits avec nous
            </p>
<div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 opacity-60 dark:opacity-40 grayscale text-gray-800 dark:text-white font-semibold tracking-tight text-xl transition-colors">
<span>HostMaster</span>
<span>LodgeCare.</span>
<span>BNB_Tech</span>
<span>GUESTLY</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-24 sm:mt-32 px-4 sm:px-6" id="tarifs">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll transition-colors">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Un tarif unique, <br className="sm:hidden"/>sans surprise.
        </h2>
<p className="text-lg text-gray-500 dark:text-zinc-400 mt-4 font-normal leading-relaxed">
          Rentabilisé dès la première heure gagnée. Connectez vos biens et laissez l'IA faire le reste.
        </p>
</div>
<div className="flex justify-center reveal-on-scroll delay-100">

<div className="relative overflow-hidden transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] group cursor-pointer bg-gray-900 dark:bg-zinc-900 border-indigo-500/30 dark:border-indigo-500/20 border rounded-[32px] backdrop-blur-xl w-full max-w-sm">
<div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(120% 120% at 90% 10%, rgba(99,102,241,0.35), rgba(99,102,241,0.15) 40%, rgba(99,102,241,0.06) 60%, transparent 75%)'}}></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 relative z-10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white group-hover:text-indigo-50 transition-colors duration-300">Pro</h3>
<span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium text-indigo-900 bg-indigo-300/95 shadow-[0_0_20px_rgba(99,102,241,0.35)] group-hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all duration-300">Populaire</span>
</div>

<div className="flex items-center gap-2 text-xs text-gray-400">
<span className="uppercase font-medium tracking-wider" id="billing-label">Mensuel</span>
<button className="relative inline-flex h-5 w-9 items-center rounded-full border border-indigo-500/40 bg-indigo-500/20 cursor-pointer transition-colors duration-200 hover:bg-indigo-500/25" id="pricing-toggle" type="button">
<span className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(90deg, rgba(99,102,241,0.45), rgba(129,140,248,0.35))'}}></span>
<span className="z-10 inline-block h-3.5 w-3.5 rounded-full bg-white shadow-sm transition-transform duration-300 translate-x-[4px]" id="pricing-knob"></span>
</button>
</div>
</div>
<p className="mt-5 text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm">Parfait pour les conciergeries</p>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-white text-4xl sm:text-5xl font-semibold tracking-tight group-hover:text-indigo-50 transition-colors duration-300">
<span data-monthly="10€" data-yearly="8€" id="price-value">10€</span>
</span>
<span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm">/mois, par appartement</span>
</div>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 ring-1 ring-indigo-500/30 group-hover:bg-indigo-500/30 group-hover:ring-indigo-500/50 transition-all duration-300">
<iconify-icon className="text-indigo-400" icon="solar:check-linear"></iconify-icon>
</span>
<span className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">Messages illimités 24/7</span>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 ring-1 ring-indigo-500/30 group-hover:bg-indigo-500/30 group-hover:ring-indigo-500/50 transition-all duration-300">
<iconify-icon className="text-indigo-400" icon="solar:check-linear"></iconify-icon>
</span>
<span className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">Traduction +30 langues</span>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 ring-1 ring-indigo-500/30 group-hover:bg-indigo-500/30 group-hover:ring-indigo-500/50 transition-all duration-300">
<iconify-icon className="text-indigo-400" icon="solar:check-linear"></iconify-icon>
</span>
<span className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">Intégration Airbnb &amp; PMS</span>
</li>
</ul>
<button className="mt-8 w-full inline-flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-400 transition-colors shadow-[0_0_20px_rgba(99,102,241,0.3)] group-hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]">
              Démarrer gratuitement
            </button>
</div>
</div>
</div>
</div>

<div className="relative mt-24 sm:mt-32 px-4 sm:px-6">

<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-indigo-500/10 rounded-[44px] sm:rounded-[64px] blur-2xl opacity-50"></div>
<footer className="relative bg-gray-900 dark:bg-zinc-900 rounded-[40px] sm:rounded-[60px] overflow-hidden text-white shadow-2xl reveal-on-scroll transition-colors">
<div className="px-8 py-16 sm:px-16 sm:py-20 relative z-10">
<div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">

<div className="max-w-sm">
<a className="text-2xl font-semibold tracking-tighter text-white flex items-center gap-1 mb-6" href="#">
                Concierge<span className="text-indigo-400">_</span>
</a>
<p className="text-gray-400 text-sm leading-relaxed mb-8 font-normal">
                La solution d'intelligence artificielle conçue spécifiquement pour automatiser les échanges des conciergeries Airbnb et de location courte durée.
              </p>
<div className="flex gap-4">
<a className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-300" href="#">
<iconify-icon icon="solar:minimalistic-twitter-linear"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-300" href="#">
<iconify-icon icon="solar:global-linear"></iconify-icon>
</a>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 gap-10 flex-1">
<div>
<h4 className="font-medium text-white mb-5 text-sm">Produit</h4>
<ul className="space-y-3 text-sm text-gray-400 font-normal">
<li><a className="hover:text-white transition-colors" href="#">Fonctionnalités</a></li>
<li><a className="hover:text-white transition-colors" href="#">Intégrations PMS</a></li>
<li><a className="hover:text-white transition-colors" href="#">Tarifs</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-5 text-sm">Ressources</h4>
<ul className="space-y-3 text-sm text-gray-400 font-normal">
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Guides pratiques</a></li>
<li><a className="hover:text-white transition-colors" href="#">Centre d'aide</a></li>
</ul>
</div>
<div className="col-span-2 sm:col-span-1">
<h4 className="font-medium text-white mb-5 text-sm">Prêt à gagner du temps ?</h4>
<a className="block w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl px-4 py-3 text-sm font-medium transition-colors" href="#">
                  Créer un compte
                </a>
</div>
</div>
</div>

<div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
<p className="text-xs text-gray-500 font-normal">
              © 2024 Concierge_ AI. Tous droits réservés.
            </p>
<div className="flex gap-6 text-xs text-gray-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Mentions légales</a>
<a className="hover:text-white transition-colors" href="#">Confidentialité</a>
</div>
</div>
</div>
</footer>
</div>
</main>


    </>
  );
}
