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
addUtilities({..rotateXUtilities,..rotateYUtilities,..rotateZUtilities,..perspectiveUtilities,..transformStyleUtilities,
});
}
]
};



(function(){const once=true;if(!window.__inViewIO){window.__inViewIO=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add("animate");if(once)window.__inViewIO.unobserve(entry.target)}})},{threshold:0.15,rootMargin:"0px 0px -10% 0px"})}window.initInViewAnimations=function(selector=".animate-on-scroll"){document.querySelectorAll(selector).forEach((el)=>{window.__inViewIO.observe(el)})};document.addEventListener("DOMContentLoaded",()=>initInViewAnimations())})();



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


    (function() {
      // Configuration & Data
      const data = {
        'moda': [
          { company: 'Kalua', result: '12 dias de inventário para apenas 3 horas', image: 'https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&q=80' },
          { company: 'Alto Giro', result: '+150% de aumento na produtividade operacional', image: 'https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=800&q=80' },
          { company: 'Declaus', result: 'Ganho expressivo de agilidade no picking', image: 'https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=800&q=80' }
        ],
        'varejo': [
          { company: 'Havan', result: 'Controle total entre unidades e acuracidade', image: 'https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&q=80' },
          { company: 'Dept. Store', result: 'Redução de ruptura e reposição rápida', image: 'https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=800&q=80' },
          { company: 'Megastore', result: 'Gestão de estoque em tempo real', image: 'https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=800&q=80' }
        ],
        'logistica': [
          { company: 'Sanlu', result: 'Atingiu marca de erro zero na expedição', image: 'https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=800&q=80' },
          { company: 'Vendemmia', result: 'Fim da falta e excesso de estoque', image: 'https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&q=80' },
          { company: 'LogiFast', result: 'Rastreabilidade total da cadeia', image: 'https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=800&q=80' }
        ]
      };

      let currentTab = 'moda';
      let currentIndex = 0;

      // Tab Switching Logic
      window.switchTab = function(tab) {
        if(currentTab === tab) return;
        currentTab = tab;
        currentIndex = 0;
        updateTabsUI();
        animateTransition();
      };

      // Carousel Rotation Logic
      window.rotateCarousel = function(direction) {
        const items = data[currentTab];
        currentIndex = (currentIndex + direction + items.length) % items.length;
        renderCarousel();
      };

      function updateTabsUI() {
        ['moda', 'varejo', 'logistica'].forEach(t => {
          const btn = document.getElementById('tab-' + t);
          if (t === currentTab) {
            btn.className = "relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-out bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.3)] transform scale-105";
          } else {
            btn.className = "relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-out text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent";
          }
        });
      }

      function animateTransition() {
        const container = document.getElementById('carousel-cards-container');
        container.style.opacity = '0';
        container.style.transform = 'scale(0.95)';
        setTimeout(() => {
          renderCarousel();
          container.style.transition = 'all 0.4s cubic-bezier(0.2,0.8,0.2,1)';
          container.style.opacity = '1';
          container.style.transform = 'scale(1)';
        }, 200);
      }

      function renderCarousel() {
        const container = document.getElementById('carousel-cards-container');
        const dotsContainer = document.getElementById('carousel-dots');
        const items = data[currentTab];
        
        container.innerHTML = '';
        dotsContainer.innerHTML = '';

        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        const nextIndex = (currentIndex + 1) % items.length;
        
        const createCardHTML = (item, position) => {
          let wrapperClass = "absolute transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col group cursor-pointer";
          let styles = "";
          let contentStyles = "";
          
          if (position === 'center') {
            styles = "width: 340px; height: 480px; z-index: 30; opacity: 1; transform: translateX(0) scale(1); cursor: default;";
            contentStyles = "shadow-[0_0_50px_rgba(0,0,0,0.5)] border-white/20";
            // Desktop size override
            wrapperClass += " lg:w-[420px] lg:h-[520px]"; 
          } else if (position === 'left') {
            styles = "width: 340px; height: 480px; z-index: 10; opacity: 0.4; transform: translateX(-60%) scale(0.9) rotateY(15deg); filter: grayscale(100%) brightness(0.7);";
            wrapperClass += " hidden md:flex lg:w-[420px] lg:h-[520px]";
          } else if (position === 'right') {
            styles = "width: 340px; height: 480px; z-index: 10; opacity: 0.4; transform: translateX(60%) scale(0.9) rotateY(-15deg); filter: grayscale(100%) brightness(0.7);";
            wrapperClass += " hidden md:flex lg:w-[420px] lg:h-[520px]";
          }

          const onClick = position === 'left' ? 'window.rotateCarousel(-1)' : (position === 'right' ? 'window.rotateCarousel(1)' : '');
          const logoInitial = item.company.charAt(0);

          return `
            <div onclick="${onClick}" class="${wrapperClass}" style="${styles}">
              <div class="w-full h-full bg-[#111] rounded-2xl overflow-hidden border border-white/10 ${contentStyles} relative hover:border-white/20 transition-colors">
                
                <!-- Top Image / Placeholder -->
                <div class="h-[55%] w-full bg-neutral-800/50 relative overflow-hidden group-hover:bg-neutral-800 transition-colors duration-500">
                  <div class="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
                    <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-2xl font-bold text-white/40 shadow-inner backdrop-blur-sm">
                      ${logoInitial}
                    </div>
                    <span class="text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-500">Logo Placeholder</span>
                  </div>
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay transition-transform duration-700 group-hover:scale-110" alt="${item.company}">
                  <div class="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
                </div>

                <!-- Bottom Content -->
                <div class="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full pointer-events-none">
                  <div class="relative z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span class="text-xs font-bold uppercase tracking-widest text-yellow-500 mb-2 block border-l-2 border-yellow-500 pl-3">${item.company}</span>
                    <h3 class="text-xl lg:text-2xl text-white font-medium leading-tight tracking-tight mb-4 group-hover:text-white transition-colors">${item.result}</h3>
                    
                    <div class="w-full h-px bg-white/10 mt-4 mb-4 group-hover:bg-white/20 transition-colors"></div>
                    
                    <div class="flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <span class="text-xs text-neutral-400 font-medium uppercase tracking-wider">Ver case completo</span>
                      <div class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right text-yellow-500"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          `;
        };

        // Render Cards: Left, Right, then Center (z-index naturally stacks, but strict ordering helps)
        container.innerHTML += createCardHTML(items[prevIndex], 'left');
        container.innerHTML += createCardHTML(items[nextIndex], 'right');
        container.innerHTML += createCardHTML(items[currentIndex], 'center');

        // Render Dots
        items.forEach((_, idx) => {
          const isActive = idx === currentIndex;
          dotsContainer.innerHTML += `
            <button onclick="currentIndex = ${idx}; renderCarousel();" 
              class="h-1.5 rounded-full transition-all duration-500 ${isActive ? 'bg-yellow-500 w-8' : 'bg-white/20 hover:bg-white/40 w-1.5'}">
            </button>
          `;
        });
      }

      // Initial Call
      renderCarousel();
    })();
  


            (function() { const el = document.querySelector('[data-element-id="aura-emiq2b4jk13uahztg"]'); if(el) { // Use a rootMargin that only activates when the element is in the middle of the screen const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { el.classList.add('is-active'); } else { el.classList.remove('is-active'); } }); }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 }); observer.observe(el); } })();
          


    (function() {
      // Logic to emulate Framer Motion sticky scaling
      const cards = document.querySelectorAll('.sticky-card');
      const container = document.getElementById('sticky-faq-container');
      
      function updateScales() {
        if(!cards.length) return;
        
        cards.forEach((card, index) => {
          // Calculate if the card is "sticking"
          const rect = card.getBoundingClientRect();
          const nextCard = cards[index + 1];
          
          if (nextCard) {
             const nextRect = nextCard.getBoundingClientRect();
             // Distance between this card's top and the next card's top
             const dist = nextRect.top - rect.top;
             // If distance is small (overlapping), scale down the current card
             // Max separation is roughly margin-bottom + height difference
             const maxDist = 200; // approximation of when overlap starts affecting visually
             
             if (dist < maxDist && dist > 0) {
               // Scale from 1 to 0.95 based on how close the next card is
               const scale = 0.95 + (0.05 * (dist / maxDist));
               const opacity = 0.5 + (0.5 * (dist / maxDist));
               card.style.transform = `scale(${Math.min(1, Math.max(0.9, scale))})`;
               card.style.filter = `brightness(${Math.min(1, Math.max(0.5, opacity))})`;
             } else if (dist <= 0) {
                // Completely covered
                card.style.transform = `scale(0.9)`;
                card.style.filter = `brightness(0.5)`;
             } else {
               // Not covered
               card.style.transform = `scale(1)`;
               card.style.filter = `brightness(1)`;
             }
          }
        });
      }

      window.addEventListener('scroll', updateScales, { passive: true });
      window.addEventListener('resize', updateScales);
      // Initial call
      updateScales();
    })();
  


      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); let currentStep = 1; function activateStep(step) { if (step === currentStep) return; // Update UI for Steps List const prevStep = currentStep; currentStep = step; updateStepStyles(prevStep, step); // Update Stack Visuals updateCardStack(step); } function updateCardStack(activeId) { const cards = [1, 2, 3]; cards.forEach(id => { const card = document.getElementById(`card-${id}`); if (id === activeId) { // Active Card: Front, Opaque, Full Scale card.style.transform = 'translateY(0px) scale(1)'; card.style.zIndex = '30'; card.style.opacity = '1'; } else { // Calculate offset logic for non-active cards // Simple approach: Push others back based on distance from active or just stack them // If we want a consistent stack: // If active is 1: 2 is middle, 3 is back // If active is 2: 3 is middle, 1 is back (or vice versa depending on rotation logic) // Let's do a "Rotate" feel: Previous moves to bottom, Next moves to middle. let position = 0; // 0 = active (handled above), 1 = middle, 2 = bottom // Determine stack order relative to active // logic: (id - activeId + 3) % 3 // If active=1: id=2 is (2-1+3)%3 = 1 (middle). id=3 is (3-1+3)%3 = 2 (bottom). // If active=2: id=3 is (3-2+3)%3 = 1 (middle). id=1 is (1-2+3)%3 = 2 (bottom). const relativePos = (id - activeId + 3) % 3; if (relativePos === 1) { // Middle of stack card.style.transform = 'translateY(12px) scale(0.95)'; card.style.zIndex = '20'; card.style.opacity = '0.6'; } else { // Bottom of stack card.style.transform = 'translateY(24px) scale(0.9)'; card.style.zIndex = '10'; card.style.opacity = '0.4'; } } }); } function updateStepStyles(prev, next) { // Reset Previous const prevStepEl = document.getElementById(`step-${prev}`); const prevBadge = document.getElementById(`badge-${prev}`); const prevText = document.getElementById(`text-${prev}`); const prevIcon = document.getElementById(`icon-${prev}`); prevStepEl.className = "step-item flex items-center gap-4 p-2 rounded-lg hover:bg-white/5 border border-transparent transition-all duration-300 cursor-pointer group"; prevBadge.className = "w-6 h-6 rounded-full bg-transparent flex items-center justify-center text-[10px] font-bold text-gray-500 group-hover:text-orange-400 transition-colors duration-300"; prevText.className = "text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300"; prevIcon.classList.add('opacity-0', 'text-gray-600'); prevIcon.classList.remove('opacity-100', 'text-orange-500'); // Add hover logic for icon visibility via group-hover classes in HTML, just reset base state here // Set Active const nextStepEl = document.getElementById(`step-${next}`); const nextBadge = document.getElementById(`badge-${next}`); const nextText = document.getElementById(`text-${next}`); const nextIcon = document.getElementById(`icon-${next}`); nextStepEl.className = "step-item flex items-center gap-4 p-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md translate-x-[-10px] shadow-xl cursor-pointer transition-all duration-300"; nextBadge.className = "w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-[10px] font-bold text-black shadow-lg shadow-orange-500/20 transition-colors duration-300"; nextText.className = "text-sm font-medium text-white transition-colors duration-300"; nextIcon.classList.remove('opacity-0', 'text-gray-600'); nextIcon.classList.add('opacity-100', 'text-orange-500'); }
    
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
      

<div className="aura-background-component fixed -z-10 mix-blend-screen w-full h-screen top-0 hue-rotate-90 brightness-150" data-alpha-mask="80" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div>
</div>

<div className="fixed z-0 top-0 right-0 bottom-0 left-0">
<img alt="Landscape" className="bg-center opacity-90 mix-blend-luminosity w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/299a0319-be9a-44ce-ac7d-0d964c01bb09_3840w.jpg"/>
<div className="bg-gradient-to-b from-[#050505]/90 via-[#050505]/60 to-[#050505] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce36c24e-6ad4-4e31-a25a-ac7be9130579_3840w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0">
</div>
</div>

<div className="fixed z-0 pointer-events-none flex opacity-60 w-full max-w-7xl border-white/5 border-r mr-auto ml-auto top-0 right-0 bottom-0 left-0">

<div className="flex-1 border-l border-white/5 h-full relative overflow-hidden">
<span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">
          01
        </span>
</div>

<div className="flex-1 border-l border-white/5 h-full relative overflow-hidden">
<div className="absolute top-0 -left-[1px] w-[1px] h-64 bg-gradient-to-b from-transparent via-orange-500/60 to-transparent animate-beam-1" style={{}}></div>
<span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">
          02
        </span>
</div>
<span className="absolute bottom-8 text-orange-500/30 text-xs font-mono" style={{}}>
          03
        </span>
</div>

<div className="flex-1 border-l border-white/5 h-full relative overflow-hidden">
<div className="absolute top-0 -left-[1px] w-[1px] h-48 bg-gradient-to-b from-transparent via-orange-500/60 to-transparent animate-beam-3" style={{}}></div>
<span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">
          04
        </span>
</div>

<div className="flex-1 border-l border-white/5 h-full relative overflow-hidden">
<span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">
          05
        </span>
</div>

<div className="flex-1 flex flex-col w-full max-w-7xl mr-auto ml-auto relative">

<nav className="flex md:px-10 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.1s_both] animate pt-8 pr-6 pb-8 pl-6 items-center justify-between">
<div className="flex gap-3 group cursor-pointer gap-x-3 gap-y-3 items-center">
<div className="flex items-center h-16">
<img alt="iTAG Logo" className="w-auto h-10" src="https://itagtecnologia.com.br/wp-content/uploads/2025/02/logo-itag-branco-768x214.webp"/>
</div>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors text-sm font-medium text-neutral-400" href="#" style={{}}>
</a>
<button className="button-custom scale-95 relative group overflow-hidden" type="button">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>

<div className="absolute inset-0 rounded-full z-[1] pointer-events-none" style={{WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '2px'}}>
<div className="absolute inset-[-100%] w-[300%] h-[300%] left-[-100%] top-[-100%] animate-[spin_2s_linear_infinite]" style={{background: 'conic-gradient(from 0deg, transparent 0deg, transparent 300deg, #FFFF00 360deg)'}}></div>
</div>
<span className="inner cursor-pointer" onclick="window.location.href='https://www.itagtecnologia.com.br'" role="button">Site Oficial</span>
</button>
</div>
</nav>

<div className="flex-1 grid grid-cols-1 lg:grid-cols-12 pt-20 pb-10 items-center">

<div className="col-span-1 lg:col-span-6 md:pl-10 lg:pt-0 flex flex-col pt-0 pl-10 justify-center">
<div className="inline-flex gap-2 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.1s_both] animate text-orange-500 mb-8 gap-x-2 gap-y-2 items-center" style={{}}>
<span className="uppercase text-xs font-bold text-orange-500/80 tracking-widest" style={{}}></span>
</div>
<h1 className="md:text-6xl text-5xl font-bold text-white tracking-tight font-inter mb-6" style={{}}>
<span className="blur-word" style={{animationDelay: '0s'}}>iTAG</span>
<span className="blur-word" style={{animationDelay: '0.2s'}}>
              Tecnologia
            </span>
<span className="md:text-3xl block text-2xl font-medium mt-2 blur-word text-orange-500" style={{animationDelay: '0.4s'}}>
              Automação RFID Inteligente
            </span>
</h1>
<p className="leading-relaxed animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.35s_both] animate text-lg font-medium text-white/60 max-w-lg">
      Automatize o estoque da sua empresa com
      <span className="font-bold drop-shadow-[0_0_6px_rgba(255,255,100,0.8)] bg-gradient-to-br from-white/10 to-white/0 bg-clip-text text-transparent" style={{}}>
    RFID + Solução 360° iTAG
  </span>, rastreabilidade inteligente do recebimento à expedição.
    </p>
<p className="leading-relaxed animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.35s_both] animate text-lg font-medium text-white/60 max-w-lg my-10">
      Um ecossistema completo conectando hardware, software e inteligência
      de dados para transformar sua operação logística e de varejo.
      <span className="font-bold drop-shadow-[0_0_6px_rgba(255,255,100,0.8)] bg-gradient-to-br from-white/10 to-white/0 bg-clip-text text-transparent" style={{}}>
    Inventário 20x mais rápido com 99.9% de precisão.
  </span>
</p>
<div className="flex flex-wrap animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.5s_both] animate mt-10 gap-x-6 gap-y-6 items-center justify-start">
<a className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_10px_rgba(249,115,22,0.45)] bg-gradient-to-b from-white/20 via-white/0 to-white/5 rounded-full relative shadow-[0_0_25px_rgba(249,115,22,0.3),0_8px_40px_rgba(249,115,22,0.15)]" href="#">

<div className="absolute inset-0 overflow-hidden rounded-full">
<div className="absolute inset-[-100%] w-[300%] h-[300%] left-[-100%] top-[-100%] animate-[spin_3s_linear_infinite]" style={{background: 'conic-gradient(from 0deg, transparent 0deg, transparent 80deg, rgba(253,186,116,0.8) 180deg, transparent 280deg, transparent 360deg)'}}>
</div>
</div>

<div className="absolute inset-[1px] rounded-full backdrop-blur-xl z-0 bg-neutral-950/90" style={{}}></div>

<div className="z-10 flex gap-3 sm:w-auto overflow-hidden text-sm font-medium text-white w-full rounded-full pt-3 pr-5 pb-3 pl-4 relative gap-x-3 gap-y-3 items-center justify-center">

<div className="relative z-20 w-7 h-7 rounded-full bg-gradient-to-b flex items-center justify-center shadow-lg ring-1 ring-white/20 group-hover:scale-110 transition-transform duration-300 from-orange-400 to-orange-600 shadow-orange-500/30" style={{}}>
<svg className="lucide lucide-sparkles fill-white w-[14px] h-[14px]" data-icon-replaced="true" data-icon-set="solar" data-solar="phone-calling-outline" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '14px', height: '14px'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M4.718 3.092c1.226-1.291 3.254-1.05 4.268.384l1.26 1.784c.811 1.147.743 2.74-.225 3.76l-.245.257l-.002.006c-.013.036-.045.152-.013.372c.067.455.418 1.381 1.846 2.884c1.432 1.508 2.3 1.863 2.703 1.929a.6.6 0 0 0 .294-.007l.408-.43c.874-.92 2.236-1.101 3.335-.469l1.91 1.1c1.633.94 2.013 3.239.708 4.613l-1.42 1.495c-.443.467-1.048.866-1.795.94c-1.824.18-6.049-.055-10.478-4.719c-4.134-4.351-4.919-8.136-5.018-9.985l.666-.036l-.666.036c-.049-.914.358-1.697.894-2.262zm3.043 1.25c-.512-.724-1.433-.768-1.956-.217l-1.57 1.652c-.33.35-.505.75-.483 1.149c.08 1.51.731 4.952 4.607 9.032c4.064 4.28 7.809 4.4 9.244 4.259c.283-.028.575-.186.854-.48l1.42-1.495c.614-.646.453-1.808-.368-2.28l-1.91-1.1c-.513-.295-1.114-.204-1.499.202l-.456.48l-.527-.501c.527.5.527.501.526.502l-.001.001l-.003.004l-.007.006l-.014.014a1 1 0 0 1-.136.112c-.08.056-.186.119-.321.172c-.276.109-.64.167-1.091.094c-.878-.142-2.028-.773-3.55-2.376c-1.528-1.608-2.113-2.807-2.243-3.7c-.067-.454-.014-.817.084-1.092a1.6 1.6 0 0 1 .23-.427l.03-.037l.014-.015l.006-.007l.003-.003l.002-.001s0-.002.533.503l-.532-.505l.287-.302c.445-.469.51-1.263.088-1.86z" fill="#ffffff" fill-rule="evenodd"></path><path className="" d="M13.26 1.88a.75.75 0 0 1 .861-.62c.025.005.107.02.15.03q.129.027.352.09c.297.087.712.23 1.21.458c.996.457 2.321 1.256 3.697 2.631c1.376 1.376 2.175 2.702 2.632 3.698c.228.498.37.912.457 1.21a6 6 0 0 1 .113.454l.005.031a.765.765 0 0 1-.617.878a.75.75 0 0 1-.86-.617a3 3 0 0 0-.081-.327a7.4 7.4 0 0 0-.38-1.004c-.39-.85-1.092-2.024-2.33-3.262s-2.411-1.939-3.262-2.329a7.4 7.4 0 0 0-1.003-.38a6 6 0 0 0-.318-.08a.76.76 0 0 1-.626-.861" fill="#ffffff"></path><path clip-rule="evenodd" d="M13.486 5.33a.75.75 0 0 1 .927-.516l-.206.721l.207-.72h.002l.004.001l.007.002l.02.007q.023.006.057.019q.067.023.177.07c.145.062.344.158.589.303c.49.29 1.157.77 1.942 1.556c.785.785 1.267 1.453 1.556 1.942c.145.245.241.444.304.59a3 3 0 0 1 .089.233l.006.02l.002.008l.001.003v.002l-.72.207l.721-.206a.75.75 0 0 1-1.44.422l-.003-.01l-.035-.088a4 4 0 0 0-.216-.417c-.223-.376-.625-.946-1.325-1.646s-1.27-1.102-1.646-1.325a4 4 0 0 0-.504-.25l-.01-.004a.75.75 0 0 1-.506-.925" fill="#ffffff" fill-rule="evenodd"></path></svg>
</div>

<span className="whitespace-nowrap group-hover:text-white transition-colors z-10 text-base font-medium text-white/95 tracking-tight relative">Agendar demonstração</span>

<span className="inline-flex items-center justify-center z-10 bg-white/10 w-6 h-6 rounded-full ml-1 relative group-hover:translate-x-0.5 transition-transform text-white/80 group-hover:text-white">
<svg className="lucide lucide-arrow-right w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</div>
</a>
<div className="flex items-center gap-2 text-xs font-medium text-neutral-500" style={{}}></div>
</div>
</div>

<div className="col-span-1 flex flex-col z-10 md:pr-10 lg:col-span-6 lg:pl-0 lg:pr-0 lg:pt-0 h-full pt-10 pr-5 pb-10 pl-5 relative items-end justify-center">

<div className="overflow-hidden group lg:mr-0 bg-[#0a0a0a]/50 w-full max-w-xl max-h-full border-white/10 border rounded-2xl mr-0 ml-0 pt-2.5 pr-2.5 pb-2.5 pl-2.5 relative shadow-2xl">

<div className="relative w-full aspect-[4/3] md:aspect-video rounded-xl overflow-hidden bg-neutral-900 border border-white/5" style={{}}>

<div className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-100 scale-100 z-20" id="slide-vehicle">
<img alt="Fahrzeuge" className="hover:scale-105 transition-transform duration-1000 opacity-100 w-full h-full object-cover" src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="bg-gradient-to-t from-black/90 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="flex items-center gap-2 mb-2"></div>
</div>
</div>

<div className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-0 scale-105 pointer-events-none z-10" id="slide-room">
<img alt="Unterrichtsräume" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=2070"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500 text-white uppercase tracking-wider" style={{}}>
                      Campus
                    </span>
<span className="text-[10px] font-medium text-white/60 tracking-wide uppercase">
                      Theorie &amp; Praxis
                    </span>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-1" style={{}}>
              Smarte Räume
            </h3>
<p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed" style={{}}>
              Interaktiver Theorieunterricht in klimatisierten Räumen mit
              modernster Smartboard-Technik.
            </p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-2 mt-2.5">

<button className="flex gap-3 transition-all duration-300 hover:bg-white/5 group text-left bg-white/10 border-white/10 border rounded-lg pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center" id="tab-vehicle-btn" onclick=" document.getElementById('slide-vehicle').classList.remove('opacity-0','scale-105','pointer-events-none','z-10'); document.getElementById('slide-vehicle').classList.add('opacity-100','scale-100','z-20'); document.getElementById('slide-room').classList.add('opacity-0','scale-105','pointer-events-none','z-10'); document.getElementById('slide-room').classList.remove('opacity-100','scale-100','z-20'); // Tab Styles this.classList.add('bg-white/10','border-white/10'); this.classList.remove('bg-transparent','border-transparent'); document.getElementById('tab-room-btn').classList.remove('bg-white/10','border-white/10'); document.getElementById('tab-room-btn').classList.add('bg-transparent','border-transparent'); // Icon Styles this.querySelector('.icon-bg').classList.add('bg-orange-500','text-black'); this.querySelector('.icon-bg').classList.remove('bg-neutral-800','text-neutral-400'); document.getElementById('tab-room-btn').querySelector('.icon-bg').classList.remove('bg-blue-500','text-white'); document.getElementById('tab-room-btn').querySelector('.icon-bg').classList.add('bg-neutral-800','text-neutral-400'); // Text Styles this.querySelector('.text-main').classList.add('text-white'); this.querySelector('.text-main').classList.remove('text-neutral-400'); document.getElementById('tab-room-btn').querySelector('.text-main').classList.remove('text-white'); document.getElementById('tab-room-btn').querySelector('.text-main').classList.add('text-neutral-400'); " style={{}}>
<div className="icon-bg w-8 h-8 rounded-full text-black flex items-center justify-center transition-all duration-300 shadow-lg group-hover:scale-105 bg-orange-500" style={{}}>
<svg className="lucide lucide-network lucide-car-front w-[14px] h-[14px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="network" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" style={{color: 'rgb(0, 0, 0)', width: '14px', height: '14px'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path className="" d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-main text-xs font-semibold text-white tracking-wide transition-colors" style={{}}>
                    Hardware
                  </span>
<span className="text-[10px] font-medium text-neutral-500 tracking-wider uppercase" style={{}}>
                    Antenas &amp; Leitores
                  </span>
</div>
</button>

<button className="flex gap-3 transition-all duration-300 hover:bg-white/5 group text-left bg-transparent border-transparent border rounded-lg pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center" id="tab-room-btn" onclick=" document.getElementById('slide-room').classList.remove('opacity-0','scale-105','pointer-events-none','z-10'); document.getElementById('slide-room').classList.add('opacity-100','scale-100','z-20'); document.getElementById('slide-vehicle').classList.add('opacity-0','scale-105','pointer-events-none','z-10'); document.getElementById('slide-vehicle').classList.remove('opacity-100','scale-100','z-20'); // Tab Styles this.classList.add('bg-white/10','border-white/10'); this.classList.remove('bg-transparent','border-transparent'); document.getElementById('tab-vehicle-btn').classList.remove('bg-white/10','border-white/10'); document.getElementById('tab-vehicle-btn').classList.add('bg-transparent','border-transparent'); // Icon Styles this.querySelector('.icon-bg').classList.add('bg-blue-500','text-white'); this.querySelector('.icon-bg').classList.remove('bg-neutral-800','text-neutral-400'); document.getElementById('tab-vehicle-btn').querySelector('.icon-bg').classList.remove('bg-orange-500','text-black'); document.getElementById('tab-vehicle-btn').querySelector('.icon-bg').classList.add('bg-neutral-800','text-neutral-400'); // Text Styles this.querySelector('.text-main').classList.add('text-white'); this.querySelector('.text-main').classList.remove('text-neutral-400'); document.getElementById('tab-vehicle-btn').querySelector('.text-main').classList.remove('text-white'); document.getElementById('tab-vehicle-btn').querySelector('.text-main').classList.add('text-neutral-400'); ">
<div className="icon-bg flex transition-all duration-300 group-hover:scale-105 text-neutral-400 bg-neutral-800 w-8 h-8 border-white/5 border rounded-full shadow-lg items-center justify-center">
<svg className="lucide lucide-trello lucide-armchair w-[14px] h-[14px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="trello" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" style={{color: 'rgb(163, 163, 163)', width: '14px', height: '14px'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect className="" height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><rect height="9" width="3" x="7" y="7"></rect><rect height="5" width="3" x="14" y="7"></rect></svg>
</div>
<div className="flex flex-col">
<span className="text-main transition-colors text-xs font-semibold text-neutral-400 tracking-wide" style={{}}>
                    Software
                  </span>
<span className="text-[10px] font-medium text-neutral-500 tracking-wider uppercase" style={{}}>
                    Dashboard &amp; App
                  </span>
</div>
</button>
</div>
</div>
</div>
</div>

</div>
<div className="flex flex-col md:px-10 lg:pt-20 lg:pb-20 w-full max-w-7xl z-10 border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative gap-x-1 gap-y-1">

<div className="flex flex-col animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.3s_both] z-20 text-center mb-16 relative gap-x-1 gap-y-1 items-center">
<div className="-translate-x-1/2 -translate-y-1/2 blur-[100px] -z-10 pointer-events-none bg-orange-500/10 w-[120%] h-[120%] rounded-full absolute top-1/2 left-1/2 gap-x-2 gap-y-2">
</div>
<span className="inline-flex gap-2 uppercase gap-x-2 gap-y-2 items-center text-xs font-semibold text-orange-500 tracking-widest bg-orange-500/10 border-orange-500 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 shadow-[4px_4px_6px_rgba(0,_0,_0,_0.049),_9.6px_9.6px_7.6px_rgba(0,_0,_0,_0.069),_18px_18px_14.3px_rgba(0,_0,_0,_0.086),_32px_32px_25.6px_rgba(0,_0,_0,_0.103),_60px_60px_47.8px_rgba(0,_0,_0,_0.123),_143px_143px_114.3px_rgba(0,_0,_0,_0.172)]">
<span className="w-1.5 h-1.5 rounded-full animate-pulse bg-orange-500" style={{}}></span>
    CASES DE SUCESSO
    </span>
<h2 className="lg:text-6xl text-3xl font-semibold text-white tracking-tighter mb-10">
      Resultados que Falam por Si
    </h2>

<div className="flex flex-col flex-wrap [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)] md:flex-row md:rounded-full md:max-w-none bg-neutral-900/80 w-50 z-20 pointer-events-auto border-white/10 border-2 rounded-[2rem] pt-2 pr-2 pb-2 pl-2 relative shadow-2xl backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center">
<button className="w-full md:w-auto transition-all duration-300 ease-out hover:scale-105 text-sm font-medium text-black rounded-full py-2.5 px-6 relative shadow-[0_0_20px_rgba(234,179,8,0.3)] bg-orange-500" id="tab-moda" onclick="window.switchTab('moda')">
    Moda &amp; Confecção
  </button>
<button className="w-full md:w-auto transition-all duration-300 ease-out hover:text-white hover:bg-white/5 text-sm font-medium text-neutral-400 border-transparent border rounded-full py-2.5 px-6 relative" id="tab-varejo" onclick="window.switchTab('varejo')">
    Varejo Grande Escala
  </button>
<button className="w-full md:w-auto relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-out text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent" id="tab-logistica" onclick="window.switchTab('logistica')">
    Logística &amp; CD
  </button>
</div>
</div>

<div className="flex overflow-visible animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.4s_both] w-full h-[550px] relative gap-x-1 gap-y-1 items-center justify-center">

<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-40 flex justify-between px-2 md:px-0 lg:-mx-16 pointer-events-none">
<button className="w-12 h-12 rounded-full border border-white/10 bg-neutral-900/80 hover:text-black transition-all duration-300 backdrop-blur-md flex items-center justify-center text-white pointer-events-auto shadow-2xl group cursor-pointer transform hover:scale-110 hover:bg-orange-500 hover:border-orange-500" onclick="window.rotateCarousel(-1)" style={{}}>
<svg className="lucide lucide-arrow-left group-hover:-translate-x-0.5 transition-transform w-[24px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '24px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-12 h-12 rounded-full border border-white/10 bg-neutral-900/80 hover:text-black transition-all duration-300 backdrop-blur-md flex items-center justify-center text-white pointer-events-auto shadow-2xl group cursor-pointer transform hover:scale-110 hover:bg-orange-500 hover:border-orange-500" onclick="window.rotateCarousel(1)" style={{}}>
<svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="flex transform-style-preserve-3d h-full max-w-5xl relative perspective-distant items-center justify-center" id="carousel-cards-container">
<div className="absolute transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col group cursor-pointer hidden md:flex lg:w-[420px] lg:h-[520px]" onclick="window.rotateCarousel(-1)" style={{width: '340px', height: '480px', zIndex: '10', opacity: '0.4', transform: 'translateX(-60%) scale(0.9) rotateY(15deg)', filter: 'grayscale(100%) brightness(0.7)'}}>
<div className="w-full h-full bg-[#111] rounded-2xl overflow-hidden border border-white/10 relative hover:border-white/20 transition-colors">

<div className="h-[55%] w-full bg-neutral-800/50 relative overflow-hidden group-hover:bg-neutral-800 transition-colors duration-500">
<div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
<div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-2xl font-bold text-white/40 shadow-inner backdrop-blur-sm">
                      D
                    </div>
<span className="text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-500">Logo Placeholder</span>
</div>
<img alt="Declaus" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
</div>

<div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full pointer-events-none">
<div className="relative z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-xs font-bold uppercase tracking-widest mb-2 block border-l-2 pl-3 text-orange-500 border-orange-500">Declaus</span>
<h3 className="text-xl lg:text-2xl text-white font-medium leading-tight tracking-tight mb-4 group-hover:text-white transition-colors">Ganho expressivo de agilidade no picking</h3>
<div className="w-full h-px bg-white/10 mt-4 mb-4 group-hover:bg-white/20 transition-colors"></div>
<div className="flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-xs text-neutral-400 font-medium uppercase tracking-wider">Ver case completo</span>
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
<svg className="lucide lucide-arrow-up-right text-orange-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col group cursor-pointer hidden md:flex lg:w-[420px] lg:h-[520px]" onclick="window.rotateCarousel(1)" style={{width: '340px', height: '480px', zIndex: '10', opacity: '0.4', transform: 'translateX(60%) scale(0.9) rotateY(-15deg)', filter: 'grayscale(100%) brightness(0.7)'}}>
<div className="w-full h-full bg-[#111] rounded-2xl overflow-hidden border border-white/10 relative hover:border-white/20 transition-colors">

<div className="h-[55%] w-full bg-neutral-800/50 relative overflow-hidden group-hover:bg-neutral-800 transition-colors duration-500">
<div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
<div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-2xl font-bold text-white/40 shadow-inner backdrop-blur-sm">
                      A
                    </div>
<span className="text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-500">Logo Placeholder</span>
</div>
<img alt="Alto Giro" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
</div>

<div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full pointer-events-none">
<div className="relative z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-xs font-bold uppercase tracking-widest mb-2 block border-l-2 pl-3 text-orange-500 border-orange-500">Alto Giro</span>
<h3 className="text-xl lg:text-2xl text-white font-medium leading-tight tracking-tight mb-4 group-hover:text-white transition-colors">+150% de aumento na produtividade operacional</h3>
<div className="w-full h-px bg-white/10 mt-4 mb-4 group-hover:bg-white/20 transition-colors"></div>
<div className="flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-xs text-neutral-400 font-medium uppercase tracking-wider">Ver case completo</span>
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
<svg className="lucide lucide-arrow-up-right text-orange-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col group cursor-pointer lg:w-[420px] lg:h-[520px]" onclick="" style={{width: '340px', height: '480px', zIndex: '30', opacity: '1', transform: 'translateX(0) scale(1)', cursor: 'default'}}>
<div className="w-full h-full bg-[#111] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] border-white/20 relative hover:border-white/20 transition-colors">

<div className="h-[55%] w-full bg-neutral-800/50 relative overflow-hidden group-hover:bg-neutral-800 transition-colors duration-500">
<div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
<div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-2xl font-bold text-white/40 shadow-inner backdrop-blur-sm">
                      K
                    </div>
<span className="text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-500">Logo Placeholder</span>
</div>
<img alt="Kalua" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
</div>

<div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full pointer-events-none">
<div className="relative z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-xs font-bold uppercase tracking-widest mb-2 block border-l-2 pl-3 text-orange-500 border-orange-500">Kalua</span>
<h3 className="text-xl lg:text-2xl text-white font-medium leading-tight tracking-tight mb-4 group-hover:text-white transition-colors">12 dias de inventário para apenas 3 horas</h3>
<div className="w-full h-px bg-white/10 mt-4 mb-4 group-hover:bg-white/20 transition-colors"></div>
<div className="flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-xs text-neutral-400 font-medium uppercase tracking-wider">Ver case completo</span>
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
<svg className="lucide lucide-arrow-up-right text-orange-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex gap-3 z-30 mt-4 gap-x-1 gap-y-1 justify-center" id="carousel-dots">
<button className="h-1.5 rounded-full transition-all duration-500 w-8 bg-orange-500" onclick="currentIndex = 0; renderCarousel();">
</button>
<button className="h-1.5 rounded-full transition-all duration-500 bg-white/20 hover:bg-white/40 w-1.5" onclick="currentIndex = 1; renderCarousel();">
</button>
<button className="h-1.5 rounded-full transition-all duration-500 bg-white/20 hover:bg-white/40 w-1.5" onclick="currentIndex = 2; renderCarousel();">
</button>
</div>

</div>
<div className="z-10 md:px-10 lg:pt-20 lg:pb-20 w-full max-w-7xl border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">

<div className="-translate-x-1/2 -translate-y-1/2 blur-[100px] -z-10 pointer-events-none bg-orange-500/5 w-[80%] h-[60%] rounded-full absolute top-1/2 left-1/2" style={{}}></div>

<div className="flex flex-col text-center max-w-3xl mr-auto mb-16 ml-auto items-center">
<div className="inline-flex gap-2 uppercase gap-x-2 gap-y-2 items-center text-xs font-semibold text-orange-500 tracking-widest bg-orange-500/10 border-orange-500 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 shadow-[4px_4px_6px_rgba(0,_0,_0,_0.049),_9.6px_9.6px_7.6px_rgba(0,_0,_0,_0.069),_18px_18px_14.3px_rgba(0,_0,_0,_0.086),_32px_32px_25.6px_rgba(0,_0,_0,_0.103),_60px_60px_47.8px_rgba(0,_0,_0,_0.123),_143px_143px_114.3px_rgba(0,_0,_0,_0.172)]">
<span className="w-1.5 h-1.5 animate-pulse rounded-full bg-orange-500" style={{}}></span>
          Autoridade
        </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white mb-6 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.3s_both]" style={{}}>
          Números que falam
        </h2>
<p className="leading-relaxed animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.4s_both] text-lg text-neutral-400 z-10" style={{}}>
          Resultados comprovados em operações de alta performance.
        </p>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full min-h-[600px] py-10 md:py-20 group perspective-midrange">

<div className="relative w-full max-w-[320px] h-[400px] p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-neutral-900/80 backdrop-blur-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between mb-4 md:mb-0 md:z-10 md:rotate-[-10deg] md:-mr-48 md:group-hover:mr-4 md:group-hover:rotate-0 md:group-hover:translate-y-0 md:translate-y-6 hover:!z-50 hover:!scale-105 group-hover:scale-100 scale-100" style={{}}>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br to-transparent from-orange-500/5 opacity-0 rounded-3xl absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="relative z-10">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border mb-6 shadow-inner bg-orange-500/10 border-orange-500/20 text-orange-500" style={{}}>
<svg className="lucide lucide-zap w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest uppercase rounded-full border text-orange-500 bg-orange-500/5 border-orange-500/10" style={{}}>
        Velocidade
      </div>
<h3 className="text-2xl font-bold text-white leading-tight mb-2" style={{}}>Inventário Instantâneo</h3>
<p className="text-neutral-400 text-sm leading-relaxed" style={{}}>Até 20x mais agilidade na contagem de estoque e
        ativos.</p>
</div>
<div className="relative z-10 pt-6 border-t border-white/5 flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-800 border border-white/10" style={{}}></div>
<div className="w-6 h-6 rounded-full bg-neutral-700 border border-white/10" style={{}}></div>
<div className="w-6 h-6 rounded-full bg-neutral-600 border border-white/10 flex items-center justify-center text-[8px] text-white font-medium" style={{}}>+2k</div>
</div>
<span className="text-xs font-medium text-white/40">Cases Reais</span>
</div>
</div>

<div className="relative w-full max-w-[320px] h-[400px] p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-neutral-900/80 backdrop-blur-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between mb-4 md:mb-0 md:z-20 md:rotate-[-5deg] md:-mr-48 md:group-hover:mr-4 md:group-hover:rotate-0 md:group-hover:translate-y-0 md:translate-y-3 hover:!z-50 hover:!scale-105 group-hover:scale-100 scale-100" style={{}}>
<div className="absolute inset-0 bg-gradient-to-br to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-orange-500/5" style={{}}></div>
<div className="relative z-10">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border mb-6 shadow-inner bg-orange-500/10 border-orange-500/20 text-orange-500" style={{}}>
<svg className="lucide lucide-crosshair w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="22" x2="18" y1="12" y2="12"></line>
<line x1="6" x2="2" y1="12" y2="12"></line>
<line x1="12" x2="12" y1="6" y2="2"></line>
<line x1="12" x2="12" y1="22" y2="18"></line>
</svg>
</div>
<div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest uppercase rounded-full border text-orange-500 bg-orange-500/5 border-orange-500/10" style={{}}>
        Precisão
      </div>
<h3 className="text-2xl font-bold text-white leading-tight mb-2" style={{}}>Conferência Exata</h3>
<p className="text-neutral-400 text-sm leading-relaxed" style={{}}>99,9% de assertividade garantida em todas as
        operações.</p>
</div>
<div className="relative z-10 pt-6 border-t border-white/5 flex items-center justify-between">
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden flex-1 mr-4">
<div className="h-full w-[99.9%] shadow-[0_0_10px_rgba(234,179,8,0.5)] bg-orange-500" style={{}}></div>
</div>
<span className="text-xs font-bold text-orange-500" style={{}}>99.9%</span>
</div>
</div>

<div className="relative w-full max-w-[320px] h-[400px] p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-neutral-900/80 backdrop-blur-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between mb-4 md:mb-0 md:z-30 md:rotate-0 md:-mr-48 md:group-hover:mr-4 md:group-hover:rotate-0 md:group-hover:translate-y-0 md:translate-y-0 hover:!z-50 hover:!scale-105 group-hover:scale-100 scale-100 shadow-[0_0_40px_rgba(234,179,8,0.1)]" style={{}}>
<div className="absolute inset-0 bg-gradient-to-br to-transparent rounded-3xl opacity-100 transition-opacity duration-500 from-orange-500/10" style={{}}></div>
<div className="relative z-10">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border mb-6 shadow-[0_0_15px_rgba(234,179,8,0.2)] bg-orange-500/20 border-orange-500/30 text-orange-500" style={{}}>
<svg className="lucide lucide-eye w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest uppercase rounded-full border text-orange-500 bg-orange-500/5 border-orange-500/10" style={{}}>
        360°
      </div>
<h3 className="text-2xl font-bold text-white leading-tight mb-2" style={{}}>Visibilidade Total</h3>
<p className="text-neutral-400 text-sm leading-relaxed" style={{}}>Monitore cada item em tempo real do recebimento à
        expedição.</p>
</div>
<div className="relative z-10 pt-6 border-t border-white/5 flex items-center justify-between">
<span className="text-xs font-medium text-white/60">Status</span>
<div className="flex items-center gap-1.5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" style={{}}></span>
</span>
<span className="text-xs font-bold text-green-400" style={{}}>Ao Vivo</span>
</div>
</div>
</div>

<div className="relative w-full max-w-[320px] h-[400px] p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-neutral-900/80 backdrop-blur-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between mb-4 md:mb-0 md:z-20 md:rotate-[5deg] md:-mr-48 md:group-hover:mr-4 md:group-hover:rotate-0 md:group-hover:translate-y-0 md:translate-y-3 hover:!z-50 hover:!scale-105 group-hover:scale-100 scale-100" style={{}}>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br to-transparent opacity-0 rounded-3xl absolute top-0 right-0 bottom-0 left-0 from-orange-500/5" style={{}}></div>
<div className="relative z-10">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border mb-6 shadow-inner bg-orange-500/10 border-orange-500/20 text-orange-500" style={{}}>
<svg className="lucide lucide-link w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</svg>
</div>
<div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest uppercase rounded-full border text-orange-500 bg-orange-500/5 border-orange-500/10" style={{}}>
        Conectado
      </div>
<h3 className="text-2xl font-bold text-white leading-tight mb-2" style={{}}>Compatibilidade Total</h3>
<p className="text-neutral-400 text-sm leading-relaxed" style={{}}>Integração nativa com os principais ERPs do mercado.
      </p>
</div>
<div className="flex justify-between items-center transition-all duration-300 z-10 border-white/5 border-t pt-6 relative gap-4">

<svg className="h-5 w-auto fill-current text-white opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer" style={{}} viewbox="0 0 100 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7.7 7.7h6.6v14.6h4.4V7.7h6.6V3.3H7.7v4.4zM29.5 3.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zm0 17.6c-3.6 0-6.6-3-6.6-6.6s3-6.6 6.6-6.6 6.6 3 6.6 6.6-3 6.6-6.6 6.6zM55.8 7.7h-5.9v14.6h-4.4V7.7h-5.9V3.3h16.2v4.4zM62.6 3.3l5.5 13.9 5.5-13.9h4.8L70.3 22.3h-4.4L57.8 3.3h4.8zM92.3 7.7h-7.3l2.2 2.6c1.1 1.3 2.2 2.6 2.2 4.4 0 2.4-2 4.4-4.4 4.4-2 0-3.6-1.3-4.2-3.1h-4.6c.7 4.2 4.4 7.5 8.8 7.5 4.9 0 8.8-3.9 8.8-8.8 0-3.1-1.7-5.9-4.2-7.5l-2.2-1.3h4.9V3.3z">
</path>
</svg>

<svg className="h-6 w-auto fill-current text-white opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer" style={{}} viewbox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
<path d="M29.5 13.2h-3.8v-2.7h10.9v2.7h-3.8v11.9h-3.3V13.2zm-12.7 0h3.5l4.6 11.9h-3.6l-.8-2.5H15.7l-.8 2.5h-3.6l4.5-11.9zm1.1 6.9h2.9l-1.4-4.4-1.5 4.4zm-14.6 1c.7 2.4 3.7 2.4 3.7.3 0-1.9-4.8-1.8-4.8-5.7 0-2.8 2.4-5.2 6-5.2 3.6 0 5.4 2.1 5.5 4.7H10.7c-.3-1.3-1.5-2-2.3-2-1.3 0-2.3.8-2.3 2.1 0 1.8 4.8 1.7 4.8 5.6 0 2.9-2.3 5.4-6 5.4-3.5 0-5.8-2-6.1-5.2h3.5z">
</path>
</svg>

<svg className="fill-current hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer opacity-60 w-[43px] h-[20px]" data-icon-replaced="true" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '43px', height: '20px'}} viewbox="0 0 80 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5.4 0v23.4h14.5v-4.3H9.8V0H5.4zM25.7 3.6c-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9 2.9-1.3 2.9-2.9-1.3-2.9-2.9-2.9zm-2.2 19.8h4.4V9.8h-4.4v13.6zM37.9 9.8v3c1.6-2.1 4-3.4 6.7-3.4 4.8 0 8.7 3.9 8.7 8.7v5.3h-4.4v-5.3c0-2.4-1.9-4.3-4.3-4.3-2.4 0-4.3 1.9-4.3 4.3v5.3h-4.4V9.8h2zM71.7 9.8l-4.9 7.2-4.9-7.2h-5.2l7.5 10.9-7.7 11.2h5.3l5.1-7.4 5 7.4h5.2L69.4 20.7l7.4-10.9h-5.1z"></path>
</svg>

<svg className="h-4 w-auto fill-current text-white opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer" style={{}} viewbox="0 0 130 18" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9 14.8c-.5 0-.9-.4-1.2-1.2-.2-1.2-.2-3.4-.2-4.5 0-1.2.1-3.3.3-4.5.2-.8.6-1.2 1.1-1.2.5 0 .9.4 1.1 1.2.3 1.2.3 3.3.3 4.5 0 1.2-.1 3.4-.3 4.5-.2.8-.6 1.2-1.1 1.2m0-13.8c-2.6 0-4.3 2-4.7 5.3-.2 1.5-.2 4.9 0 6.4.4 3.3 2.1 5.3 4.7 5.3 2.5 0 4.2-2 4.7-5.3.2-1.5.2-4.9 0-6.4-.5-3.3-2.2-5.3-4.7-5.3m21.8 13.5h-2.1l-1.9-3.4c-.6-1.1-1.3-1.4-2.7-1.4h-1.2v4.8h-3.4v-13h6c2.9 0 4.8 1.2 4.8 4.6 0 2.2-.9 3.6-2.6 4.2l3.1 4.2zm-7.9-7h2c1.1 0 1.8-.4 1.8-1.7 0-1.4-.7-1.7-1.8-1.7h-2v3.4zm16.5-6.5h-3.5l-4.7 13.5h3.6l.7-2.4h4.4l.7 2.4h3.6l-4.8-13.5zm-3 8.3 1.4-4.8 1.4 4.8h-2.8zm11.9-4.1c-.8-2.6-2.5-4.2-5.4-4.2-3.2 0-5.4 2.3-5.4 6.7 0 4.5 2.1 6.8 5.4 6.8 3.1 0 4.7-1.8 5.2-4.1h-3.5c-.2.8-.7 1.3-1.8 1.3-1.3 0-2-.9-2-3.9 0-2.8.6-3.8 2-3.8 1 0 1.6.5 1.7 1.2h3.8zm3.3 9.3h6.6v-2.8h-3.2v-10.7h-3.4v13.5zm16 0v-2.8h-4v-2.4h3.6v-2.8h-3.6v-2.1h3.9v-2.8h-7.3v12.9h7.4z">
</path>
</svg>
</div>
</div>

<div className="relative w-full max-w-[320px] h-[400px] p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-neutral-900/80 backdrop-blur-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between mb-4 md:mb-0 md:z-10 md:rotate-[10deg] md:group-hover:rotate-0 md:group-hover:translate-y-0 md:translate-y-6 hover:!z-50 hover:!scale-105 group-hover:scale-100 scale-100" style={{}}>
<div className="absolute inset-0 bg-gradient-to-br to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-orange-500/5" style={{}}></div>
<div className="relative z-10">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border mb-6 shadow-inner bg-orange-500/10 border-orange-500/20 text-orange-500" style={{}}>
<svg className="lucide lucide-trending-up w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
</div>
<div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest uppercase rounded-full border text-orange-500 bg-orange-500/5 border-orange-500/10" style={{}}>
        Eficiência
      </div>
<h3 className="text-2xl font-bold text-white leading-tight mb-2" style={{}}>Proteção de Receita</h3>
<p className="text-neutral-400 text-sm leading-relaxed" style={{}}>Elimine custos invisíveis, furtos e erros
        operacionais.</p>
</div>
<div className="relative z-10 pt-6 border-t border-white/5">
<div className="flex items-end justify-between mb-1">
<span className="text-xs text-neutral-400" style={{}}>ROI Esperado</span>
<span className="text-sm font-bold text-green-400" style={{}}>Imediato</span>
</div>
<div className="w-full h-1 bg-gradient-to-r from-transparent via-green-500/50 to-green-400 rounded-full" style={{}}>
</div>
</div>
</div>
</div>
</div>
<div className="z-10 w-full max-w-7xl border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative md:px-10 lg:pt-20 lg:pb-20">

<div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-8">
<div className="max-w-3xl">
<div className="inline-flex gap-2 uppercase gap-x-2 gap-y-2 items-center text-xs font-semibold text-orange-500 tracking-widest bg-orange-500/10 border-orange-500 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 shadow-[4px_4px_6px_rgba(0,_0,_0,_0.049),_9.6px_9.6px_7.6px_rgba(0,_0,_0,_0.069),_18px_18px_14.3px_rgba(0,_0,_0,_0.086),_32px_32px_25.6px_rgba(0,_0,_0,_0.103),_60px_60px_47.8px_rgba(0,_0,_0,_0.123),_143px_143px_114.3px_rgba(0,_0,_0,_0.172)]">
<span className="w-1.5 h-1.5 rounded-full animate-pulse bg-orange-500" style={{}}></span>
            Processo
          </div>
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-white animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.3s_both] mb-6" style={{}}>
            Solução 360°
          </h2>
<p className="text-lg text-neutral-400 max-w-xl animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.4s_both]" style={{}}>
            Um ecossistema completo conectando hardware, software e
            inteligência.
          </p>
</div>
</div>

<div className="flex flex-col w-full max-w-5xl mx-auto relative">

<div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b via-white/10 to-transparent md:left-8 from-orange-500" style={{}}></div>

<div className="relative pl-20 md:pl-28 py-4 group animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.5s_both]">

<div className="absolute left-0 top-4 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center z-10 group-hover:border-orange-500/50 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all duration-300" style={{}}>
<span className="font-bold text-lg md:text-xl text-orange-500" style={{}}>01</span>
</div>

<div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-all duration-300 hover:border-white/10 cursor-default">
<h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3 tracking-tight" style={{}}>
              TAG (Identifica)
            </h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-2xl" style={{}}>
              Etiquetas inteligentes aplicadas a cada item, garantindo
              identidade única e rastreabilidade.
            </p>
</div>
</div>

<div className="relative pl-20 md:pl-28 py-4 group animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.6s_both]">
<div className="absolute left-0 top-4 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center z-10 group-hover:border-orange-500/50 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all duration-300" style={{}}>
<span className="text-neutral-500 group-hover:text-orange-500 transition-colors font-bold text-lg md:text-xl" style={{}}>
              02
            </span>
</div>
<div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-all duration-300 hover:border-white/10 cursor-default">
<h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3 tracking-tight" style={{}}>
              ANTENA (Coleta)
            </h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-2xl" style={{}}>
              Leitura massiva e automática de milhares de itens em segundos com
              portais RFID de alta performance.
            </p>
</div>
</div>

<div className="md:pl-28 group animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.7s_both] pt-4 pb-4 pl-20 relative">
<div className="absolute left-0 top-4 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center z-10 group-hover:border-orange-500/50 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] group-[.is-active]:border-orange-500/50 group-[.is-active]:shadow-[0_0_30px_rgba(249,115,22,0.4)] group-[.is-active]:bg-orange-500/10 group-[.is-active]:scale-110 transition-all duration-500 ease-out" style={{}}>
<span className="text-neutral-500 group-hover:text-orange-500 group-[.is-active]:text-orange-500 transition-colors font-bold text-lg md:text-xl" style={{}}>
              03
            </span>
</div>
<div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-all duration-300 hover:border-white/10 cursor-default group-[.is-active]:bg-white/[0.07] group-[.is-active]:border-white/10">
<h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3 tracking-tight" style={{}}>
              SOFTWARE (Interpreta)
            </h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-2xl" style={{}}>
              Middleware poderoso que processa dados em tempo real e se integra
              nativamente ao seu ERP.
            </p>
</div>

</div>

<div className="relative pl-20 md:pl-28 py-4 group animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.8s_both]">
<div className="absolute left-0 top-4 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center z-10 group-hover:border-orange-500/50 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all duration-300" style={{}}>
<span className="text-neutral-500 group-hover:text-orange-500 transition-colors font-bold text-lg md:text-xl" style={{}}>
              04
            </span>
</div>
<div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-all duration-300 hover:border-white/10 cursor-default">
<h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3 tracking-tight" style={{}}>
              DASHBOARD (Gestão)
            </h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-2xl" style={{}}>
              Visibilidade total da operação com KPIs em tempo real para tomada
              de decisão assertiva.
            </p>
</div>
</div>

<div className="relative pl-20 md:pl-28 py-4 group animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.9s_both]">
<div className="absolute left-0 top-4 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-orange-500 flex items-center justify-center z-10 shadow-[0_0_30px_rgba(249,115,22,0.4)] scale-110 to-orange-600" style={{}}>
<svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24">
<circle className="" cx="12" cy="8" r="7"></circle>
<polyline className="" points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
</svg>
</div>
<div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-300 cursor-default relative overflow-hidden" style={{}}>
<div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{}}></div>
<h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3 relative z-10 tracking-tight" style={{}}>
              SUPORTE (Evolução)
            </h3>
<p className="text-neutral-300 text-sm leading-relaxed max-w-2xl relative z-10" style={{}}>
              Consultoria e acompanhamento contínuo para garantir a máxima
              performance da sua automação.
            </p>
</div>
</div>
</div>
</div><div className="z-10 md:px-10 lg:pt-20 lg:pb-20 w-full max-w-7xl border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">

<div className="flex flex-col gap-16 z-10 w-full pt-5 pb-5 relative gap-x-16 gap-y-16">

<div className="max-w-4xl pr-4 animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.1s_both]">
<div className="inline-flex gap-2 uppercase gap-x-2 gap-y-2 items-center text-xs font-semibold text-orange-500 tracking-widest bg-orange-500/10 border-orange-500 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 shadow-[4px_4px_6px_rgba(0,_0,_0,_0.049),_9.6px_9.6px_7.6px_rgba(0,_0,_0,_0.069),_18px_18px_14.3px_rgba(0,_0,_0,_0.086),_32px_32px_25.6px_rgba(0,_0,_0,_0.103),_60px_60px_47.8px_rgba(0,_0,_0,_0.123),_143px_143px_114.3px_rgba(0,_0,_0,_0.172)]">
<span className="w-1.5 h-1.5 rounded-full animate-pulse bg-orange-500" style={{}}></span>
            Casos de Sucesso
        </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white mb-6" style={{}}>
            Quem opera com alto volume, velocidade e precisão, <span className="text-orange-500" style={{}}>opera com iTAG.</span>
</h2>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed" style={{}}>
            Da indústria ao varejo de grande escala, nossas soluções RFID movem operações que precisam de controle absoluto.
        </p>
</div>

<div className="group w-full relative grayscale-0 invert-0" style={{maskImage: 'linear-gradient(190deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(190deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="md:px-0 w-full max-w-6xl mr-auto ml-auto pt-4 pr-4 pb-12 pl-4">
<div className="ring-1 ring-white/10 bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-orange-500/20 rounded-3xl backdrop-blur-sm overflow-hidden shadow-2xl to-orange-500/10" style={{}}>

<div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10" style={{}}>

<div className="hover:bg-white/5 transition-all duration-300 cursor-pointer relative group text-center p-8 md:p-10">
<div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1 group-hover:text-neutral-900 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(234,179,8,0.3)] bg-orange-500/10 ring-orange-500/20 text-orange-500 group-hover:bg-orange-500" style={{}}>
<svg className="lucide lucide-scissors h-7 w-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="3"></circle>
<circle cx="6" cy="18" r="3"></circle>
<line x1="20" x2="8.12" y1="4" y2="15.88"></line>
<line x1="14.47" x2="20" y1="14.48" y2="20"></line>
<line x1="8.12" x2="12" y1="8.12" y2="12"></line>
</svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2" style={{}}>Kalua</h3>
<p className="text-[10px] font-bold uppercase tracking-widest mb-3 opacity-80 text-orange-500" style={{}}>Moda e
                        Confecção</p>
<p className="text-sm text-neutral-400 leading-relaxed font-light" style={{}}>Inventário de 12 dias caiu para 3
                        horas com Tags + Dashboard Integrado.</p>
</div>

<div className="hover:bg-white/5 transition-all duration-300 cursor-pointer relative group text-center p-8 md:p-10">
<div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1 group-hover:text-neutral-900 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(234,179,8,0.3)] bg-orange-500/10 ring-orange-500/20 text-orange-500 group-hover:bg-orange-500" style={{}}>
<svg className="lucide lucide-zap h-7 w-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2" style={{}}>Alto Giro</h3>
<p className="text-[10px] font-bold uppercase tracking-widest mb-3 opacity-80 text-orange-500" style={{}}>Moda
                        Fitness</p>
<p className="text-sm text-neutral-400 leading-relaxed font-light" style={{}}>+150% de produtividade e redução
                        drástica de perdas com fluxo contínuo.</p>
</div>

<div className="hover:bg-white/5 transition-all duration-300 cursor-pointer relative group text-center p-8 md:p-10">
<div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1 group-hover:text-neutral-900 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(234,179,8,0.3)] bg-orange-500/10 ring-orange-500/20 text-orange-500 group-hover:bg-orange-500" style={{}}>
<svg className="lucide lucide-layers h-7 w-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z">
</path>
<path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
<path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2" style={{}}>Declaus</h3>
<p className="text-[10px] font-bold uppercase tracking-widest mb-3 opacity-80 text-orange-500" style={{}}>Confecção
                    </p>
<p className="text-sm text-neutral-400 leading-relaxed font-light" style={{}}>Velocidade operacional ampliada e
                        separação consistente com RFID no picking.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">

<div className="hover:bg-white/5 transition-all duration-300 cursor-pointer relative group text-center p-8 md:p-10">
<div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1 group-hover:text-neutral-900 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(234,179,8,0.3)] bg-orange-500/10 ring-orange-500/20 text-orange-500 group-hover:bg-orange-500" style={{}}>
<svg className="lucide lucide-shopping-cart h-7 w-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="21" r="1"></circle>
<circle cx="19" cy="21" r="1"></circle>
<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12">
</path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2" style={{}}>Havan</h3>
<p className="text-[10px] font-bold uppercase tracking-widest mb-3 opacity-80 text-orange-500" style={{}}>Varejo de
                        Grande Escala</p>
<p className="text-sm text-neutral-400 leading-relaxed font-light" style={{}}>Controle total entre unidades e
                        redução de erros de transferência.</p>
</div>

<div className="hover:bg-white/5 transition-all duration-300 cursor-pointer relative group text-center p-8 md:p-10">
<div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1 group-hover:text-neutral-900 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(234,179,8,0.3)] bg-orange-500/10 ring-orange-500/20 text-orange-500 group-hover:bg-orange-500" style={{}}>
<svg className="lucide lucide-truck h-7 w-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"></path>
<path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"></path>
<circle cx="7" cy="18" r="2"></circle>
<path d="M15 18H9"></path>
<circle cx="17" cy="18" r="2"></circle>
</svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2" style={{}}>Sanlu</h3>
<p className="text-[10px] font-bold uppercase tracking-widest mb-3 opacity-80 text-orange-500" style={{}}>
                        Distribuição</p>
<p className="text-sm text-neutral-400 leading-relaxed font-light" style={{}}>Erro ZERO na expedição após
                        implementação de validação automática.</p>
</div>

<div className="hover:bg-white/5 transition-all duration-300 cursor-pointer relative group text-center p-8 md:p-10">
<div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1 group-hover:text-neutral-900 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(234,179,8,0.3)] bg-orange-500/10 ring-orange-500/20 text-orange-500 group-hover:bg-orange-500" style={{}}>
<svg className="lucide lucide-package-check h-7 w-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16 16 2 2 4-4"></path>
<path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14">
</path>
<path d="m3.3 7 8.7 5 8.7-5"></path>
<path d="M12 22V12"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2" style={{}}>Vendemmia</h3>
<p className="text-[10px] font-bold uppercase tracking-widest mb-3 opacity-80 text-orange-500" style={{}}>Logística
                    </p>
<p className="text-sm text-neutral-400 leading-relaxed font-light" style={{}}>Fim da falta ou excesso de estoque.
                        Decisão baseada em dados reais.</p>
</div>
</div>
</div>

<div className="text-center mt-16">
<a className="relative inline-flex group isolate rounded-full overflow-hidden p-[2px] transition-all duration-300 hover:scale-105 shadow-[0_0_20px_-5px_rgba(234,179,8,0.5)] hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.7)]" href="#contato">

<div className="absolute inset-0 bg-neutral-900/10 rounded-full" style={{}}></div>

<div className="absolute inset-[-100%] w-[300%] h-[300%] -left-[100%] -top-[100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_85%,#fef08a_100%)]">
</div>

<div className="relative w-full h-full rounded-full px-8 py-4 flex items-center justify-center z-10 border border-black/5 bg-gradient-to-br from-orange-400 to-orange-600" style={{}}>
<span className="uppercase text-sm font-semibold text-neutral-900 tracking-wide" style={{}}>Quero uma proposta para minha operação</span>
<svg className="ml-2 group-hover:translate-x-1 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</a>
</div>
</div>
</div>
</div>

<div className="flex flex-col w-full max-w-5xl mx-auto relative">

<div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b via-white/10 to-transparent md:left-8 from-orange-500" style={{}}></div>





</div>
</div><div className="md:px-10 lg:pt-20 lg:pb-20 w-full max-w-7xl z-10 border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative" id="sticky-faq-container">

<div className="flex flex-col md:flex-row justify-between md:items-end mb-24 gap-8 relative z-20">
<div className="max-w-3xl">
<div className="inline-flex gap-2 uppercase gap-x-2 gap-y-2 items-center text-xs font-semibold text-orange-500 tracking-widest bg-orange-500/10 border-orange-500 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 shadow-[4px_4px_6px_rgba(0,_0,_0,_0.049),_9.6px_9.6px_7.6px_rgba(0,_0,_0,_0.069),_18px_18px_14.3px_rgba(0,_0,_0,_0.086),_32px_32px_25.6px_rgba(0,_0,_0,_0.103),_60px_60px_47.8px_rgba(0,_0,_0,_0.123),_143px_143px_114.3px_rgba(0,_0,_0,_0.172)]">
<span className="w-1.5 h-1.5 rounded-full animate-pulse bg-orange-500" style={{}}></span>
        FAQ
      </div>
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-white mb-6" style={{}}>
        Dúvidas Frequentes
      </h2>
<p className="text-lg text-neutral-400 max-w-xl" style={{}}>
        Respostas diretas sobre implementação, custos e tecnologia RFID.
      </p>
</div>
</div>

<div className="w-full max-w-4xl mr-auto ml-auto pb-20 relative">

<div className="sticky-card sticky top-32 mb-8 transform-gpu transition-all duration-500 ease-out will-change-transform z-10" style={{transform: 'scale(1)', filter: 'brightness(1)'}}>
<div className="md:p-10 overflow-hidden hover:rotate-0 transition-transform duration-500 group bg-neutral-900 opacity-70 w-full border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl -rotate-1" style={{}}>

<div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-1/3 bg-gradient-to-l to-transparent pointer-events-none from-orange-500/20 via-orange-500/5" style={{}}></div>

<div className="absolute top-6 right-6 p-2 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 text-orange-500" style={{}}>
<svg className="lucide lucide-radio w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path><circle cx="12" cy="12" r="2"></circle><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path></svg>
</div>
<div className="relative z-10 pr-12">
<h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight" style={{}}>RFID substitui código de barras?</h3>
<p className="text-neutral-400 text-lg leading-relaxed" style={{}}>Não necessariamente. RFID é coleta massiva sem visão direta. Para alto volume e rastreabilidade, traz ganho real. Para pequenas operações, código de barras serve.</p>
</div>
</div>
</div>

<div className="sticky-card sticky top-36 mb-8 transform-gpu transition-all duration-500 ease-out will-change-transform z-20" style={{transform: 'scale(1)', filter: 'brightness(1)'}}>
<div className="md:p-10 overflow-hidden hover:rotate-0 transition-transform duration-500 group bg-neutral-900 opacity-70 w-full border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl rotate-1" style={{}}>

<div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-1/3 bg-gradient-to-l to-transparent pointer-events-none from-orange-500/20 via-orange-500/5" style={{}}></div>

<div className="absolute top-6 right-6 p-2 text-white opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 group-hover:text-orange-500" style={{}}>
<svg className="lucide lucide-rocket w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.1 4-1 4-1s.38 2.38-1 4z"></path><path d="M15 12h5s-.55 3.03-2 4c-1.62 1.1-4 1-4 1s-.38-2.38 1-4z"></path></svg>
</div>
<div className="relative z-10 pr-12">
<h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight" style={{}}>Começar pequeno?</h3>
<p className="text-neutral-400 text-lg leading-relaxed" style={{}}>Sim. Projetos piloto (inventário/expedição) validam o ganho rápido. Depois escala-se por fases.</p>
</div>
</div>
</div>

<div className="sticky-card sticky top-40 mb-8 transform-gpu transition-all duration-500 ease-out will-change-transform z-30" style={{transform: 'scale(1)', filter: 'brightness(1)'}}>
<div className="md:p-10 overflow-hidden hover:rotate-0 transition-transform duration-500 group bg-neutral-900 opacity-70 w-full border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl -rotate-2" style={{}}>

<div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-1/3 bg-gradient-to-l to-transparent pointer-events-none from-orange-500/20 via-orange-500/5" style={{}}></div>

<div className="absolute top-6 right-6 p-2 text-white opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 group-hover:text-orange-500" style={{}}>
<svg className="lucide lucide-database w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
</div>
<div className="relative z-10 pr-12">
<h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight" style={{}}>Integração ERP/WMS?</h3>
<p className="text-neutral-400 text-lg leading-relaxed" style={{}}>Via API ou dados estruturados. Alimentamos seu sistema com dados precisos em tempo real.</p>
</div>
</div>
</div>

<div className="sticky-card sticky top-44 mb-8 transform-gpu transition-all duration-500 ease-out will-change-transform z-40" style={{transform: 'scale(1)', filter: 'brightness(1)'}}>
<div className="md:p-10 overflow-hidden hover:rotate-0 transition-transform duration-500 group bg-neutral-900 opacity-70 w-full border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl rotate-2" style={{}}>

<div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-1/3 bg-gradient-to-l to-transparent pointer-events-none from-orange-500/20 via-orange-500/5" style={{}}></div>

<div className="absolute top-6 right-6 p-2 text-white opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 group-hover:text-orange-500" style={{}}>
<svg className="lucide lucide-settings-2 w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</div>
<div className="relative z-10 pr-12">
<h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight" style={{}}>Muda processo interno?</h3>
<p className="text-neutral-400 text-lg leading-relaxed" style={{}}>Pouco. Padroniza recebimento e expedição. Exige disciplina, nós treinamos isso.</p>
</div>
</div>
</div>

<div className="sticky-card sticky top-48 mb-8 transform-gpu transition-all duration-500 ease-out will-change-transform z-50" style={{transform: 'scale(1)', filter: 'brightness(1)'}}>
<div className="md:p-10 overflow-hidden hover:rotate-0 transition-transform duration-500 group bg-neutral-900 opacity-70 w-full border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl -rotate-1" style={{}}>

<div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-1/3 bg-gradient-to-l to-transparent pointer-events-none from-orange-500/20 via-orange-500/5" style={{}}></div>

<div className="absolute top-6 right-6 p-2 text-white opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 group-hover:text-orange-500" style={{}}>
<svg className="lucide lucide-box w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<div className="relative z-10 pr-12">
<h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight" style={{}}>Qualquer produto?</h3>
<p className="leading-relaxed text-lg text-neutral-400" style={{}}>Depende do material (metal/líquido). Desenhamos a etiqueta certa para cada item.</p>
</div>
</div>
</div>

<div className="sticky-card sticky top-52 mb-8 transform-gpu transition-all duration-500 ease-out will-change-transform z-60" style={{transform: 'scale(1)', filter: 'brightness(1)'}}>
<div className="md:p-10 overflow-hidden hover:rotate-0 transition-transform duration-500 group -multi bg-neutral-900 opacity-70 w-full border-white/10 border rounded-3xl px-8 py-8 relative shadow-2xl rotate-1" style={{}}>

<div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-1/3 bg-gradient-to-l to-transparent pointer-events-none from-orange-500/20 via-orange-500/5" style={{}}></div>

<div className="absolute top-6 right-6 p-2 text-white opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 group-hover:text-orange-500" style={{}}>
<svg className="lucide lucide-zap w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<div className="relative z-10 pr-12">
<h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight" style={{}}>Leitura rápida?</h3>
<p className="text-neutral-400 text-lg leading-relaxed" style={{}}>Muito. 1.500 peças em 3 min. Expedição em 1 passagem. Destrava produtividade.</p>
</div>
</div>
</div>

<div className="sticky-card sticky top-56 mb-8 transform-gpu transition-all duration-500 ease-out will-change-transform z-70">
<div className="md:p-10 overflow-hidden hover:rotate-0 transition-transform duration-500 group -multi bg-neutral-900 opacity-70 w-full border-white/10 border rounded-3xl px-8 py-8 relative shadow-2xl -rotate-1" style={{}}>

<div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-1/3 bg-gradient-to-l to-transparent pointer-events-none from-orange-500/20 via-orange-500/5" style={{}}></div>

<div className="absolute top-6 right-6 p-2 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 text-orange-500" style={{}}>
<svg className="lucide lucide-coins w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</div>
<div className="relative z-10 pr-12">
<h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight" style={{}}>Investimento?</h3>
<p className="text-neutral-400 text-lg leading-relaxed" style={{}}>Depende do volume. O retorno vem na redução de perdas e horas. Sem custos ocultos.</p>
</div>
</div>
</div>
</div>

</div>
<div className="overflow-hidden text-slate-50 w-full border-white/5 border-t relative">

<div className="flex flex-col md:px-10 md:pt-20 z-10 max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative items-center">

<img alt="iTAG Logo" className="w-auto h-20" src="https://itagtecnologia.com.br/wp-content/uploads/2023/04/logoItag.png"/>

<div className="flex gap-8 opacity-95 w-full max-w-6xl mt-20 mb-32 pt-5 pb-5 relative gap-x-8 gap-y-6 items-center">
<div className="h-px bg-gradient-to-r from-transparent via-white/30 to-white/60 flex-1 shadow-[0_1px_2px_rgba(255,255,255,0.1)]">
</div>
<h2 className="uppercase leading-none z-10 text-3xl font-medium text-white tracking-widest font-geist text-center pr-4 pl-4 relative drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
      LÍDER EM RFID NO BRASIL
    </h2>
<div className="h-px bg-gradient-to-l from-transparent via-white/30 to-white/60 flex-1 shadow-[0_1px_2px_rgba(255,255,255,0.1)]">
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:text-left z-20 text-center w-full mb-20 relative gap-x-16 gap-y-16">
<div className="flex flex-col gap-4">
<h3 className="font-bold uppercase tracking-widest text-sm text-orange-500" style={{}}>
        Contato
      </h3>
<p className="text-neutral-300" style={{}}>R. Paraíba, n° 258 - Brás, SP</p>
<p className="text-neutral-300">+55 11 3587-2127</p>
<p className="text-neutral-300">comercial@itagtecnologia.com.br</p>
</div>
<div className="flex flex-col gap-4">
<h3 className="uppercase text-sm font-bold text-orange-500 tracking-widest">
        Soluções
      </h3>
<ul className="space-y-2 text-neutral-300" style={{}}>
<li className="">Varejo Inteligente</li>
<li className="">Indústria 4.0</li>
<li className="">Logística Conectada</li>
</ul>
</div>
<div className="flex flex-col gap-4">
<ul className="space-y-2 text-neutral-300" style={{}}>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row gap-8 text-sm font-medium text-neutral-500 w-full border-white/5 border-t pt-10 gap-x-8 gap-y-8 items-center justify-between">
<p className="hover:text-neutral-300 transition-colors cursor-default text-gray-100">© 2025 iTAG Tecnologia.</p>
<div className="flex flex-wrap gap-6 md:gap-10 gap-x-6 gap-y-6 items-center justify-center">
<a className="hover:text-white transition-colors hover:underline decoration-white/20 underline-offset-4 text-gray-100" href="#">Desenvolvido
        por</a>
<a className="hover:text-white transition-colors hover:underline decoration-white/20 underline-offset-4 text-gray-100 w-20 h-20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6dca5fc8-c3c3-4217-822a-75f579d54777_320w.png)] bg-cover bg-center" href="https://op7franchising.com"></a>
</div>
</div>
</div>
</div>


    </>
  );
}
