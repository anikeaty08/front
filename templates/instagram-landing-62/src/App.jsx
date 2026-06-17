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



document.addEventListener('DOMContentLoaded', () => {
const cards = ['pricing-hobby', 'pricing-pro', 'pricing-ent'];
function updateState(selectedId) {
cards.forEach(id => {
const card = document.getElementById(id);
if (!card) return;
const isSelected = id === selectedId;
if (isSelected) {
card.classList.add('scale-[1.02]', 'shadow-2xl', 'z-10', 'ring-1', 'ring-obsidian/5', 'opacity-100');
card.classList.remove('scale-[0.98]', 'opacity-60', 'hover:shadow-xl');
if (id !== 'pricing-pro') {
card.classList.add('border-obsidian');
card.classList.remove('border-border');
}
} else {
card.classList.remove('scale-[1.02]', 'shadow-2xl', 'z-10', 'border-obsidian', 'ring-1', 'ring-obsidian/5', 'opacity-100');
card.classList.add('border-border', 'opacity-60', 'scale-[0.98]');
}
});
}
cards.forEach(id => {
const card = document.getElementById(id);
if (card) {
card.addEventListener('click', () => updateState(id));
card.addEventListener('keydown', (e) => {
if (e.key === 'Enter' || e.key === ' ') {
e.preventDefault();
updateState(id);
}
});
card.addEventListener('mouseenter', () => {
if (card.classList.contains('opacity-60')) {
card.classList.remove('opacity-60');
card.classList.add('opacity-90');
}
});
card.addEventListener('mouseleave', () => {
const isSelected = card.classList.contains('z-10');
if (!isSelected) {
card.classList.remove('opacity-90');
card.classList.add('opacity-60');
}
});
}
});
updateState('pricing-pro');
});



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
display: ['"Plus Jakarta Sans"', 'sans-serif'],
mono: ['"JetBrains Mono"', 'monospace'],
},
colors: {
canvas: '#FAFAFA',
surface: '#FFFFFF',
obsidian: '#111111',
charcoal: '#333333',
subtle: '#737373',
border: '#E5E5E5',
accent: '#252525',
primary: '#000000',
},
letterSpacing: {
tight: '-0.02em',
tighter: '-0.04em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



          (function(){const section=document.getElementById('decision-lifecycle');const header=document.getElementById('lifecycle-header');const line=document.getElementById('lifecycle-line');const steps=section.querySelectorAll('.lifecycle-step');function handleScroll(){if(!section)return;const rect=section.getBoundingClientRect();const viewH=window.innerHeight;const travelDistance=rect.height-viewH;const scrolled=-rect.top;let progress=scrolled/travelDistance;progress=Math.max(0,Math.min(1,progress));if(progress>0.02)header.style.opacity='1';else header.style.opacity='0';line.style.height=(progress*100)+'%';steps.forEach(step=>{const t=parseFloat(step.dataset.threshold);if(progress>=t){if(progress<t+0.15){step.classList.add('active');step.classList.replace('opacity-30','opacity-100');step.style.transform='scale(1.05)';}else{step.classList.add('active');step.classList.replace('opacity-30','opacity-50');step.style.transform='scale(1)';}}else{step.classList.remove('active');step.classList.replace('opacity-100','opacity-30');step.classList.replace('opacity-50','opacity-30');step.style.transform='scale(1)';}});};window.addEventListener('scroll',handleScroll,{passive:true});handleScroll();})();
        


              (function() {
                const grid = document.getElementById('def-grid');
                const line = document.getElementById('def-line-fill');
                const steps = grid.querySelectorAll('.def-step');

                steps.forEach(s => s.classList.add('def-inactive'));

                function activateStep(index) {
                  const percentage = index === 0 ? 0 : (index / (steps.length - 1)) * 100;
                  line.style.width = percentage + '%';

                  steps.forEach((step, i) => {
                    if (i === index) {
                      step.classList.add('def-active');
                      step.classList.remove('def-inactive');
                    } else {
                      step.classList.remove('def-active');
                      step.classList.add('def-inactive');
                    }
                  });
                }

                const observer = new IntersectionObserver((entries) => {
                  if (entries[0].isIntersecting) {
                    let current = 0;
                    activateStep(0);

                    const interval = setInterval(() => {
                      current++;
                      if (current >= steps.length) {
                        clearInterval(interval);
                      } else {
                        activateStep(current);
                      }
                    }, 900);

                    observer.disconnect();
                  }
                }, { threshold: 0.5 });

                observer.observe(grid);

                steps.forEach((step, i) => {
                  step.addEventListener('mouseenter', () => activateStep(i));
                });
              })();
            


      lucide.createIcons();

      const stats = [
        [
          { val: "100%", lbl: "Crédibilité" },
          { val: "Zéro", lbl: "Perte de temps" },
          { val: "Image", lbl: "Maîtrisée" }
        ],
        [
          { val: "Pro", lbl: "Design sur-mesure" },
          { val: "Clair", lbl: "Message percutant" },
          { val: "Fort", lbl: "Impact client" }
        ],
        [
          { val: "Zéro", lbl: "Stress de création" },
          { val: "100%", lbl: "Prêt à publier" },
          { val: "Régulier", lbl: "Présence active" }
        ]
      ];

      (function() {
        const container = document.getElementById('testimonial-container');
        const prevBtn = document.getElementById('testimonial-prev');
        const nextBtn = document.getElementById('testimonial-next');

        if(!container || !prevBtn || !nextBtn) return;

        const slides = container.querySelectorAll('[data-index]');
        let currentIndex = 0;
        const maxIndex = slides.length - 1;

        function updateState(isInit) {
          slides.forEach(slide => {
            const idx = parseInt(slide.dataset.index);
            if (idx === currentIndex) {
              slide.classList.remove('opacity-0', 'pointer-events-none');
              slide.classList.add('opacity-100');
            } else {
              slide.classList.remove('opacity-100');
              slide.classList.add('opacity-0', 'pointer-events-none');
            }
          });

          prevBtn.disabled = currentIndex === 0;
          nextBtn.disabled = currentIndex === maxIndex;

          const data = stats[currentIndex];
          for(let i=0; i<3; i++) {
            const val = document.getElementById('t-stat-val-' + i);
            const lbl = document.getElementById('t-stat-lbl-' + i);
            if(val && lbl) {
              if(!isInit) {
                val.classList.add('opacity-0', '-translate-y-2');
                lbl.classList.add('opacity-0');
                setTimeout(() => {
                  val.textContent = data[i].val;
                  lbl.textContent = data[i].lbl;
                  val.classList.remove('opacity-0', '-translate-y-2');
                  lbl.classList.remove('opacity-0');
                }, 300);
              } else {
                val.textContent = data[i].val;
                lbl.textContent = data[i].lbl;
              }
            }
          }
        }

        prevBtn.addEventListener('click', () => {
          if (currentIndex > 0) {
            currentIndex--;
            updateState();
          }
        });

        nextBtn.addEventListener('click', () => {
          if (currentIndex < maxIndex) {
            currentIndex++;
            updateState();
          }
        });

        updateState(true);
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
      

<div className="fixed inset-0 z-0 technical-grid pointer-events-none"></div>
<div className="fixed inset-0 z-0 opacity-100" id="canvas-container"></div>

<header className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-5 md:px-12 flex justify-between items-center backdrop-blur-md border-b border-border/50 transition-all duration-300">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-obsidian text-white flex items-center justify-center rounded-sm">
<svg className="lucide lucide-circle-dashed w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1 2.182a10 10 0 0 1 3.8 0"></path>
<path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"></path>
<path d="M21.817 10.1a10 10 0 0 1 0 3.8"></path>
<path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"></path>
<path d="M13.9 21.817a10 10 0 0 1-3.8 0"></path>
<path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"></path>
<path d="M2.182 13.9a10 10 0 0 1 0-3.8"></path>
<path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"></path>
</svg>
</div>
<span className="font-sans text-sm font-bold tracking-tight text-obsidian">
          STUDIO EXPERT
        </span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#">
          Notre Approche
        </a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#">
          Services
        </a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#">
          Cas Clients
        </a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#">
          Le Studio
        </a>
</nav>
<div className="flex items-center gap-5">
<a className="hidden md:block font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#">
          Espace Client
        </a>
<button className="group relative isolate overflow-hidden bg-obsidian text-white text-xs font-semibold px-6 py-2.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.04] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.25)] hover:ring-white/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-obsidian/20 focus:ring-offset-1">
<div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent z-10"></div>
<span className="relative z-20">Premier Échange</span>
</button>
</div>
</header>

<div className="z-10 flex flex-col w-full relative">

<section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-32 pb-20 gap-16">
<div className="max-w-2xl space-y-10 relative z-10">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-border/60 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="font-sans text-[11px] font-medium text-subtle tracking-tight">
                Accompagnement exclusif cabinets &amp; experts
              </span>
</div>
<h1 className="md:text-6xl lg:text-7xl text-obsidian leading-[1] text-5xl font-semibold tracking-tighter font-sans">Votre cabinet est sérieux.<br/> <span className="text-subtle">Vos compétences sont réelles.</span></h1>
<p className="text-subtle leading-relaxed text-base md:text-lg font-sans max-w-lg">Mais votre Instagram ne le reflète pas toujours.<br/><br/>
Aujourd’hui, quand un dirigeant découvre votre cabinet, il ne se contente plus d’un nom ou d’une recommandation. Il regarde votre site, votre Instagram, et en quelques secondes, il se fait une opinion. S’il n’inspire pas confiance immédiatement, vous perdez des opportunités.</p>
</div>
<div className="flex flex-wrap items-center gap-4">
<button className="group relative isolate overflow-hidden bg-obsidian text-white text-sm font-semibold px-8 py-3.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)] hover:ring-white/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-obsidian/20 focus:ring-offset-2 flex items-center gap-2">
<div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0 pointer-events-none"></div>
<span className="z-10 relative">Structurer mon Instagram</span>
<svg className="lucide lucide-arrow-right relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<button className="text-obsidian border-border transition-all duration-300 ease-out hover:bg-gray-50 hover:border-obsidian/40 hover:text-black hover:shadow-md active:scale-[0.97] active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-obsidian/10 focus:ring-offset-2 text-sm font-medium bg-white border rounded pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm">Voir l'approche</button>
</div>
</div>

<div className="relative w-full max-w-lg aspect-square lg:aspect-[4/3] flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-canvas via-white to-canvas opacity-50 blur-3xl"></div>
<div className="premium-card w-full h-full p-6 relative overflow-hidden rounded-xl">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-obsidian to-transparent"></div>

<div className="h-full w-full flex flex-col">
<div className="flex justify-between items-center mb-8 border-b border-border/50 pb-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-border"></div>
<span className="text-[10px] uppercase tracking-wider font-semibold text-subtle">
                    Impact de l'image perçue
                  </span>
</div>
<div className="flex gap-2">
<span className="w-12 h-1.5 rounded-full bg-border/50"></span>
</div>
</div>
<div className="flex-1 relative">

<svg className="w-[462px] h-[346px]" data-icon-replaced="true" strokeWidth="2" style={{width: '462px', height: '346px', color: 'rgb(17, 17, 17)'}} viewbox="0 0 400 300">
<style>
                    .signal-path { stroke-dasharray: 60 400; stroke-dashoffset: 60; animation: signal-flow 6s linear infinite; }
                    @keyframes signal-flow { 0% { stroke-dashoffset: 60; opacity: 0; } 5% { opacity: 1; } 90% { stroke-dashoffset: -360; opacity: 1; } 95% { opacity: 0; } 100% { stroke-dashoffset: -360; opacity: 0; } }
                    .node-context { animation: pulse-context 6s infinite ease-out; transform-origin: 50px 150px; }
                    @keyframes pulse-context { 0% { transform: scale(1); fill: #111; } 5% { transform: scale(1.4); fill: #000; } 15% { transform: scale(1); fill: #111; } }
                    .node-assumptions { animation: pulse-assumptions 6s infinite ease-out; transform-origin: 190px 80px; }
                    @keyframes pulse-assumptions { 25% { stroke-width: 1.5; transform: scale(1); } 30% { stroke-width: 2.5; transform: scale(1.05); stroke: #000; } 40% { stroke-width: 1.5; transform: scale(1); stroke: #111; } }
                    .node-evidence { animation: pulse-evidence 6s infinite ease-out; transform-origin: 280px 120px; }
                    @keyframes pulse-evidence { 55% { stroke-width: 1.5; transform: scale(1); } 60% { stroke-width: 2.5; transform: scale(1.05); stroke: #000; } 70% { stroke-width: 1.5; transform: scale(1); stroke: #111; } }
                    .node-outcome { animation: pulse-outcome 6s infinite ease-out; transform-origin: 320px 150px; }
                    @keyframes pulse-outcome { 85% { transform: scale(1); fill: #111; } 90% { transform: scale(1.25); fill: #000; } 100% { transform: scale(1); fill: #111; } }
                    .outcome-check { stroke-dasharray: 12; stroke-dashoffset: 12; animation: check-draw 6s linear infinite; }
                    @keyframes check-draw { 0%, 88% { stroke-dashoffset: 12; opacity: 0; } 92% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: 0; opacity: 0; } }
                  </style>

<path d="M50,150 C100,150 100,80 150,80" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M50,150 C100,150 100,220 150,220" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M150,80 C200,80 200,120 250,120" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M150,220 C200,220 200,180 250,180" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M250,120 L320,150" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M250,180 L320,150" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>

<path className="signal-path" d="M50,150 C100,150 100,80 150,80 C200,80 200,120 250,120 L320,150" fill="none" stroke="#111" strokeLinecap="round" strokeWidth="2.5"></path>

<circle className="node-context" cx="50" cy="150" fill="#111" r="6"></circle>
<text className="" fill="#111" fontFamily='"Plus Jakarta Sans", sans-serif' fontSize="10" font-weight="600" text-anchor="middle" x="50" y="175">
                    Expertise
                  </text>
<rect className="node-assumptions" fill="white" height="20" rx="4" stroke="#111" strokeWidth="1.5" width="80" x="150" y="70"></rect>
<text className="" dy="1" fill="#111" fontFamily='"Plus Jakarta Sans", sans-serif' fontSize="9" font-weight="600" text-anchor="middle" x="190" y="83">
                    Ligne Éditoriale
                  </text>
<rect fill="white" height="20" rx="4" stroke="#E5E5E5" width="80" x="150" y="210"></rect>
<rect fill="#F5F5F7" height="20" rx="4" width="60" x="250" y="170"></rect>
<rect className="node-evidence" fill="white" height="20" rx="4" stroke="#111" strokeWidth="1.5" width="60" x="250" y="110"></rect>
<text dy="1" fill="#111" fontFamily='"Plus Jakarta Sans", sans-serif' fontSize="9" font-weight="600" text-anchor="middle" x="280" y="123">
                    Design Pro
                  </text>
<circle className="node-outcome" cx="320" cy="150" fill="#111" r="12"></circle>
<path className="outcome-check" d="M316 150l3 3 5-5" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<text fill="#111" fontFamily='"Plus Jakarta Sans", sans-serif' fontSize="10" font-weight="600" text-anchor="middle" x="320" y="178">
                    Confiance
                  </text>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-obsidian text-white text-[10px] font-medium px-3 py-1.5 rounded shadow-xl">
                  Crédibilité Perçue : 100%
                </div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-border/60 py-16 bg-white">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
<p className="text-xs font-semibold text-obsidian whitespace-nowrap md:w-auto w-full text-center md:text-left">
            DES PROFESSIONNELS NOUS FONT DÉJÀ CONFIANCE
          </p>
<div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-8 opacity-60 hover:opacity-100 transition-opacity duration-500">

<span className="font-sans text-lg font-bold text-obsidian tracking-tight">
              CABINET MOREL
            </span>
<span className="font-sans text-lg font-bold text-obsidian tracking-tight">
              Expertis&amp;Co
            </span>
<span className="font-sans text-lg font-bold text-obsidian tracking-tight">
              Axiome
            </span>
<span className="font-sans text-lg font-bold text-obsidian tracking-tight">
              Nova Compta
            </span>
<span className="font-sans text-lg font-bold text-obsidian tracking-tight">
              FiduSud
            </span>
</div>
</div>
</section>
<section className="relative w-full bg-canvas border-b border-border/60" id="decision-lifecycle" style={{height: '400vh'}}>
<div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
<div className="max-w-4xl w-full px-6 md:px-12 relative z-10 flex flex-col items-center h-full py-20">
<div className="text-center mb-12 shrink-0 opacity-0 transition-opacity duration-700" id="lifecycle-header">
<h2 className="font-sans text-2xl md:text-3xl font-semibold text-obsidian tracking-tight mb-3">
                Le parcours de vos prospects
              </h2>
<p className="text-subtle text-sm max-w-md mx-auto">
                De la découverte jusqu'à la prise de contact.
              </p>
</div>
<div className="relative w-full max-w-2xl flex-1 flex flex-col justify-center my-auto">
<div className="absolute left-1/2 top-4 bottom-4 w-px bg-border/60 -translate-x-1/2"></div>
<div className="absolute left-1/2 top-4 w-px bg-obsidian -translate-x-1/2 transition-all duration-75 ease-linear h-0 max-h-[calc(100%-2rem)]" id="lifecycle-line" style={{height: '0%'}}></div>
<div className="space-y-16 py-8 relative">
<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.1">
<div className="w-[42%] text-right pr-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      01 Contexte
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      La Découverte
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      Un dirigeant entend parler de vous.
                    </p>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<div className="bg-white border border-border p-3 rounded shadow-sm inline-block">
<div className="flex items-center gap-2">
<svg className="text-subtle" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
<path d="M12 17h.01"></path>
</svg>
<span className="text-xs font-medium text-obsidian">
                          "Connaissez-vous un bon expert-comptable ?"
                        </span>
</div>
</div>
</div>
</div>
<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.25">
<div className="w-[42%] text-right pr-8">
<div className="bg-white border border-border p-3 rounded shadow-sm inline-block text-left">
<span className="text-[10px] text-subtle block mb-1">
                        Recherche en ligne
                      </span>
<span className="text-xs font-medium text-obsidian">
                        Il tape votre nom sur Google et Instagram.
                      </span>
</div>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      02 Action
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      La Vérification
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      Il évalue votre image de marque.
                    </p>
</div>
</div>
<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.4">
<div className="w-[42%] text-right pr-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      03 Analyse
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      L'Impression
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      Un compte peu clair sème le doute.
                    </p>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<div className="bg-white border border-border p-3 rounded shadow-sm inline-flex items-center gap-3">
<div className="w-8 h-8 bg-slate-50 rounded flex items-center justify-center border border-border/50">
<svg className="text-subtle" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="m19 9-5 5-4-4-3 3"></path>
</svg>
</div>
<div>
<div className="text-[10px] text-subtle">
                          Analyse visuelle
                        </div>
<div className="text-xs font-bold text-obsidian">
                          Manque de régularité
                        </div>
</div>
</div>
</div>
</div>
<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.55">
<div className="w-[42%] text-right pr-8">
<div className="bg-white border border-border p-3 rounded shadow-sm inline-block max-w-[200px] text-left">
<div className="flex gap-1 mb-1">
<div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-border"></div>
<div className="w-1.5 h-1.5 rounded-full bg-border"></div>
</div>
<span className="text-xs font-medium text-obsidian">
                        Hésitation. Le professionnalisme perçu est impacté.
                      </span>
</div>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      04 Conséquence
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      L'Hésitation
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      Pas de doute sur vous, mais sur la forme.
                    </p>
</div>
</div>
<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.7">
<div className="w-[42%] text-right pr-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      05 Résultat Actuel
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      L'Opportunité Perdue
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      Le prospect choisit un cabinet à l'image plus rassurante.
                    </p>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white border border-border text-obsidian text-xs font-semibold shadow-sm">
<span>Abandon</span>
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</span>
</div>
</div>
<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.85">
<div className="w-[42%] text-right pr-8">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-obsidian text-white text-xs font-semibold shadow-lg shadow-obsidian/20">
<span>Contact Établi</span>
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</span>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      06 Notre Solution
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      Une Présence Crédible
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      Un Instagram qui rassure instantanément.
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>

</section>
<section className="py-32 px-6 md:px-12 lg:px-20">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-xl">
<h2 className="font-sans text-4xl md:text-5xl font-semibold text-obsidian tracking-tight mb-6 leading-[1.1]">
                Crédibilité et régularité.
                <span className="text-subtle block">Pas de buzz inutile.</span>
</h2>
<p className="text-subtle text-lg leading-relaxed">
                J’aide les cabinets comptables à construire une présence alignée avec la qualité réelle de leur travail. L’objectif n’est pas d’être “très visible”, mais d’être immédiatement crédible.
              </p>
</div>
<a className="pb-1 border-b border-obsidian text-sm font-medium hover:opacity-70 transition-opacity mb-2" href="#">
              Découvrir les formats
            </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 p-10 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="max-w-md">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
<svg className="lucide lucide-palette" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle>
<circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle>
<circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle>
<circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle>
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.836-.437-1.124-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold text-obsidian mb-3">
                      Identité visuelle sobre
                    </h3>
<p className="text-subtle leading-relaxed">
                      Une direction artistique professionnelle pour inspirer confiance dès le premier regard. Exit les modèles pré-faits vus partout.
                    </p>
</div>
<div className="hidden lg:block">
<div className="px-3 py-1 bg-canvas border border-border rounded text-[10px] font-mono text-subtle uppercase tracking-wider group-hover:text-obsidian group-hover:border-obsidian/30 transition-colors">
                      Design Pro
                    </div>
</div>
</div>

<div className="mt-12 h-32 w-full relative flex items-center border-t border-border/40 pt-6 overflow-hidden">
<svg className="w-full h-full" preserveaspectratio="xMidYMid meet" viewbox="0 0 600 100">
<defs>
<marker id="arrow-head" markerheight="4" markerwidth="4" orient="auto" refx="2" refy="2">
<path d="M0,0 L4,2 L0,4" fill="#111"></path>
</marker>
</defs>
<path d="M20,50 C100,50 120,20 200,20 C280,20 300,80 380,80 C460,80 480,50 560,50" fill="none" stroke="#E5E5E5" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path className="transition-all duration-[1500ms] ease-in-out group-hover:stroke-dashoffset-0" d="M20,50 C100,50 120,20 200,20 C280,20 300,80 380,80 C460,80 480,50 560,50" fill="none" marker-end="url(#arrow-head)" stroke="#111" stroke-dasharray="600" stroke-dashoffset="600" strokeWidth="1.5"></path>
<g className="transition-all duration-500 delay-0 opacity-100 group-hover:scale-110 origin-center">
<circle cx="20" cy="50" fill="#111" r="4"></circle>
<text className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300" text-anchor="middle" x="20" y="70">
                        CABINET
                      </text>
</g>
<g className="transition-all duration-500 delay-[400ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
<circle cx="200" cy="20" fill="#fff" r="4" stroke="#111" strokeWidth="1.5"></circle>
<text className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300" text-anchor="middle" x="200" y="40">
                        CHARTE
                      </text>
</g>
<g className="transition-all duration-500 delay-[800ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
<circle cx="380" cy="80" fill="#fff" r="4" stroke="#111" strokeWidth="1.5"></circle>
<text className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300" text-anchor="middle" x="380" y="100">
                        DESIGN
                      </text>
</g>
<g className="transition-all duration-500 delay-[1200ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
<circle cx="560" cy="50" fill="#111" r="4"></circle>
<text className="text-[8px] font-mono fill-obsidian font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300" text-anchor="middle" x="560" y="70">
                        IMAGE PRO
                      </text>
</g>
</svg>
</div>
</div>
</div>

<div className="md:col-span-4 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500 flex flex-col">
<div className="p-10 relative z-10 flex flex-col h-full">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
<svg className="lucide lucide-book-open-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z"></path>
<path d="m16 12 2 2 4-4"></path>
<path d="M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-obsidian mb-3">
                  Ligne éditoriale
                </h3>
<p className="text-sm text-subtle leading-relaxed mb-8">
                  Une approche pédagogique et structurée pour expliquer, rassurer et valoriser votre expertise comptable.
                </p>

<div className="mt-auto relative w-full h-32 flex flex-col justify-end items-center">
<div className="absolute w-[80%] h-12 bg-border/30 border border-border rounded-t-md top-4 scale-90 opacity-0 group-hover:opacity-100 group-hover:top-0 transition-all duration-500 ease-out"></div>
<div className="absolute w-[90%] h-12 bg-canvas border border-border rounded-t-md top-8 scale-95 opacity-50 group-hover:opacity-80 group-hover:top-6 transition-all duration-500 ease-out delay-75"></div>
<div className="relative w-full h-16 bg-white border border-border rounded shadow-sm flex items-center px-4 gap-4 z-10 transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:shadow-md">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] font-bold text-obsidian uppercase tracking-wide">
                          Post Prêt à Publier
                        </span>
<span className="text-[10px] font-mono text-subtle">
                          Semaine 1
                        </span>
</div>
<div className="h-1 w-full bg-canvas rounded overflow-hidden">
<div className="h-full w-full bg-obsidian/20"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-12 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500">
<div className="p-10 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 max-w-lg">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
<svg className="lucide lucide-layers" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
<polyline points="2 12 12 17 22 12"></polyline>
<polyline points="2 17 12 22 22 17"></polyline>
</svg>
</div>
<h3 className="text-xl font-semibold text-obsidian mb-2">
                    Des formats adaptés
                  </h3>
<p className="text-subtle leading-relaxed">
                    Posts textuels, carrousels explicatifs ou reels simples. Des contenus pensés pour être compris par des dirigeants d'entreprises, avec une qualité irréprochable.
                  </p>
</div>

<div className="flex-1 w-full flex items-center justify-center gap-6 h-32 relative">

<div className="flex flex-col gap-2 relative">
<div className="w-10 h-12 bg-white border border-border shadow-sm rounded-sm flex items-center justify-center transition-all duration-700 ease-in-out group-hover:translate-x-12 group-hover:opacity-0 group-hover:scale-50">
<div className="w-4 h-0.5 bg-subtle/20"></div>
</div>
<div className="w-10 h-12 bg-white border border-border shadow-sm rounded-sm flex items-center justify-center absolute top-2 left-2 transition-all duration-700 ease-in-out delay-100 group-hover:translate-x-10 group-hover:opacity-0 group-hover:scale-50">
<div className="w-4 h-0.5 bg-subtle/20"></div>
</div>
</div>

<div className="w-16 h-16 rounded-full border border-dashed border-border flex items-center justify-center relative">
<div className="absolute inset-0 rounded-full border-t border-obsidian transparent animate-spin [animation-duration:3s] opacity-0 group-hover:opacity-100"></div>
<svg className="text-subtle group-hover:text-obsidian transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 12"></path>
<path d="M3 3v9h9"></path>
</svg>
</div>

<div className="w-24 h-32 bg-white border border-border shadow-lg rounded-sm p-4 space-y-3 transition-all duration-500 group-hover:shadow-xl group-hover:scale-105">
<div className="w-6 h-6 rounded bg-obsidian/5"></div>
<div className="space-y-1.5">
<div className="h-1.5 w-full bg-obsidian/10 rounded overflow-hidden">
<div className="h-full w-0 bg-obsidian group-hover:w-full transition-all duration-700 delay-300 ease-out"></div>
</div>
<div className="h-1.5 w-3/4 bg-obsidian/10 rounded overflow-hidden">
<div className="h-full w-0 bg-obsidian group-hover:w-full transition-all duration-700 delay-500 ease-out"></div>
</div>
<div className="h-1.5 w-5/6 bg-obsidian/10 rounded overflow-hidden">
<div className="h-full w-0 bg-obsidian group-hover:w-full transition-all duration-700 delay-700 ease-out"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-20 border-b border-border/60 bg-canvas">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
<div className="max-w-2xl">
<h2 className="font-sans text-3xl font-semibold text-obsidian tracking-tight mb-4">
                Ce que je mets en place pour votre cabinet
              </h2>
<p className="font-sans text-subtle text-base leading-relaxed">
                Une méthode de A à Z pour garantir une présence professionnelle, régulière et rassurante. Sans vous faire perdre de temps.
              </p>
</div>
</div>
<div className="relative w-full">
<style>
              .def-active .def-num { border-color: #111; color: #111; background-color: #fff; transform: scale(1.1); box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
              .def-inactive .def-content { opacity: 0.4; filter: grayscale(100%); }
              .def-active .def-content { opacity: 1; filter: grayscale(0%); transform: translateY(0); }
              .def-step { transition: opacity 0.5s ease; }
            </style>
<div className="absolute top-[1.125rem] left-0 right-0 h-px bg-border/60 hidden lg:block z-0">
<div className="h-full bg-obsidian w-0 transition-all duration-700 ease-in-out" id="def-line-fill"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-12 relative z-10" id="def-grid">

<div className="def-step group flex flex-col gap-4 def-inactive" data-index="0">
<div className="flex items-center gap-4">
<div className="def-num w-9 h-9 bg-white border border-border rounded flex items-center justify-center text-[10px] font-mono font-medium text-subtle shadow-sm transition-all duration-500 z-10">
                    01
                  </div>
<div className="h-px flex-1 bg-border/60 lg:hidden"></div>
</div>
<div className="def-content transition-all duration-500">
<h3 className="font-sans text-sm font-semibold text-obsidian mb-1.5">
                    Analyse du Cabinet
                  </h3>
<p className="text-xs text-subtle leading-relaxed">
                    Comprendre votre ADN, vos expertises et les attentes de vos clients idéaux.
                  </p>
</div>
</div>

<div className="def-step group flex flex-col gap-4 def-inactive" data-index="1">
<div className="flex items-center gap-4">
<div className="def-num w-9 h-9 bg-white border border-border rounded flex items-center justify-center text-[10px] font-mono font-medium text-subtle shadow-sm transition-all duration-500 z-10">
                    02
                  </div>
<div className="h-px flex-1 bg-border/60 lg:hidden"></div>
</div>
<div className="def-content transition-all duration-500">
<h3 className="font-sans text-sm font-semibold text-obsidian mb-1.5">
                    Charte Graphique
                  </h3>
<p className="text-xs text-subtle leading-relaxed">
                    Création d'une identité visuelle sobre, statutaire et professionnelle pour vos posts.
                  </p>
</div>
</div>

<div className="def-step group flex flex-col gap-4 def-inactive" data-index="2">
<div className="flex items-center gap-4">
<div className="def-num w-9 h-9 bg-white border border-border rounded flex items-center justify-center text-[10px] font-mono font-medium text-subtle shadow-sm transition-all duration-500 z-10">
                    03
                  </div>
<div className="h-px flex-1 bg-border/60 lg:hidden"></div>
</div>
<div className="def-content transition-all duration-500">
<h3 className="font-sans text-sm font-semibold text-obsidian mb-1.5">
                    Ligne Éditoriale
                  </h3>
<p className="text-xs text-subtle leading-relaxed">
                    Définition des thématiques pour valoriser votre expertise sans jargonnage.
                  </p>
</div>
</div>

<div className="def-step group flex flex-col gap-4 def-inactive" data-index="3">
<div className="flex items-center gap-4">
<div className="def-num w-9 h-9 bg-white border border-border rounded flex items-center justify-center text-[10px] font-mono font-medium text-subtle shadow-sm transition-all duration-500 z-10">
                    04
                  </div>
<div className="h-px flex-1 bg-border/60 lg:hidden"></div>
</div>
<div className="def-content transition-all duration-500">
<h3 className="font-sans text-sm font-semibold text-obsidian mb-1.5">
                    Création Contenus
                  </h3>
<p className="text-xs text-subtle leading-relaxed">
                    Rédaction et design de posts, carrousels clairs et prêts à l'emploi.
                  </p>
</div>
</div>

<div className="def-step group flex flex-col gap-4 def-inactive" data-index="4">
<div className="flex items-center gap-4">
<div className="def-num w-9 h-9 bg-white border border-border rounded flex items-center justify-center text-[10px] font-mono font-medium text-subtle shadow-sm transition-all duration-500 z-10">
                    05
                  </div>
<div className="h-px flex-1 bg-border/60 lg:hidden"></div>
</div>
<div className="def-content transition-all duration-500">
<h3 className="font-sans text-sm font-semibold text-obsidian mb-1.5">
                    Calendrier de Post
                  </h3>
<p className="text-xs text-subtle leading-relaxed">
                    Une publication régulière et maîtrisée, gérée sans mobiliser votre temps précieux.
                  </p>
</div>
</div>

<div className="def-step group flex flex-col gap-4 def-inactive" data-index="5">
<div className="flex items-center gap-4">
<div className="def-num w-9 h-9 bg-white border border-border rounded flex items-center justify-center text-[10px] font-mono font-medium text-subtle shadow-sm transition-all duration-500 z-10">
                    06
                  </div>
<div className="h-px flex-1 bg-border/60 lg:hidden"></div>
</div>
<div className="def-content transition-all duration-500">
<h3 className="font-sans text-sm font-semibold text-obsidian mb-1.5">
                    Confiance Renforcée
                  </h3>
<p className="text-xs text-subtle leading-relaxed">
                    Vos prospects sont rassurés sur votre professionnalisme avant même le premier appel.
                  </p>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="py-32 bg-obsidian text-white relative overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<div className="relative w-full">
<div className="relative w-full" id="testimonial-container" style={{display: 'grid', gridTemplateAreas: '\'stack\''}}>

<div className="transition-all duration-700 ease-in-out opacity-100 flex flex-col justify-center" data-index="0" style={{gridArea: 'stack'}}>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-8 leading-tight">
                      "Nous avons modernisé notre image sans tomber dans le marketing agressif. Nos prospects sont rassurés avant même le premier échange."
                    </h2>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-sm">
                        JD
                      </div>
<div>
<div className="font-medium text-white">Julien D.</div>
<div className="text-sm text-white/50">
                          Expert-Comptable Associé
                        </div>
</div>
</div>
</div>

<div className="transition-all duration-700 ease-in-out opacity-0 pointer-events-none flex flex-col justify-center" data-index="1" style={{gridArea: 'stack'}}>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-8 leading-tight">
                      "L'objectif n'était pas d'être une star des réseaux, mais d'être crédible. C'est exactement ce que nous avons obtenu. Une image nette et pro."
                    </h2>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-sm">
                        ML
                      </div>
<div>
<div className="font-medium text-white">Marie L.</div>
<div className="text-sm text-white/50">
                          Dirigeante de Cabinet
                        </div>
</div>
</div>
</div>

<div className="transition-all duration-700 ease-in-out opacity-0 pointer-events-none flex flex-col justify-center" data-index="2" style={{gridArea: 'stack'}}>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-8 leading-tight">
                      "Je n'ai plus à me soucier de quoi publier. Tout est prêt, professionnel et reflète parfaitement le sérieux et les compétences de notre cabinet."
                    </h2>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-sm">
                        TP
                      </div>
<div>
<div className="font-medium text-white">Thomas P.</div>
<div className="text-sm text-white/50">Fondateur</div>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3 mt-10">
<button aria-label="Previous testimonial" className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed" disabled="" id="testimonial-prev">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12H5"></path>
<path d="M12 19l-7-7 7-7"></path>
</svg>
</button>
<button aria-label="Next testimonial" className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed" id="testimonial-next">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div>
<div className="flex flex-row md:flex-col justify-between gap-6 md:gap-0 md:space-y-12 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-16">
<div>
<div className="text-3xl font-bold mb-1 transition-all duration-300 ease-out transform" id="t-stat-val-0">100%</div>
<div className="text-sm text-white/50 transition-opacity duration-300 ease-out" id="t-stat-lbl-0">Crédibilité</div>
</div>
<div>
<div className="text-3xl font-bold mb-1 transition-all duration-300 ease-out transform" id="t-stat-val-1">Zéro</div>
<div className="text-sm text-white/50 transition-opacity duration-300 ease-out" id="t-stat-lbl-1">Perte de temps</div>
</div>
<div>
<div className="text-3xl font-bold mb-1 transition-all duration-300 ease-out transform" id="t-stat-val-2">Image</div>
<div className="text-sm text-white/50 transition-opacity duration-300 ease-out" id="t-stat-lbl-2">Maîtrisée</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-20 border-b border-border">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-sans text-3xl md:text-4xl font-semibold text-obsidian tracking-tight mb-4">
              Des offres adaptées à votre cabinet
            </h2>
<p className="text-subtle text-base">
              Bâtissez une présence solide. Selon vos besoins et votre rythme.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="pricing-grid">

<div className="pricing-card group relative p-8 rounded-xl border border-border bg-white flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-obsidian/30 focus:outline-none focus:ring-2 focus:ring-obsidian focus:ring-offset-2 pricing-transition opacity-60 scale-[0.98]" id="pricing-hobby" role="button" tabindex="0">
<div className="absolute inset-0 rounded-xl bg-gradient-to-b from-obsidian/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="mb-4 relative z-10">
<span className="font-semibold text-obsidian transition-colors group-[.selected]:text-black">
                  Lancement
                </span>
</div>
<div className="mb-4 flex items-baseline gap-1 relative z-10">
<span className="text-3xl font-semibold text-obsidian">Sur devis</span>
</div>
<p className="text-sm text-subtle mb-8 leading-relaxed relative z-10">
                Pour démarrer avec une présence professionnelle, une charte définie et les bases de votre communication.
              </p>
<ul className="space-y-4 mb-8 flex-1 relative z-10">
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  Création de votre charte visuelle
                </li>
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  Templates de posts réutilisables
                </li>
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  Ligne éditoriale de base
                </li>
</ul>
<button className="w-full py-3 rounded-lg border border-border text-xs font-semibold text-obsidian bg-white transition-all duration-300 ease-out hover:scale-[1.03] hover:border-obsidian hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] active:scale-[0.97] active:duration-100 relative z-10">
                En savoir plus
              </button>
</div>

<div className="pricing-card group relative p-8 rounded-xl bg-obsidian text-white shadow-xl shadow-obsidian/20 flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-obsidian scale-[1.02] z-10 pricing-transition shadow-2xl ring-1 ring-obsidian/5 opacity-100" id="pricing-pro" role="button" tabindex="0">
<div className="mb-4">
<span className="font-semibold">Accompagnement</span>
</div>
<div className="mb-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold">Mensuel</span>
</div>
<p className="text-sm text-white/60 mb-8 leading-relaxed">
                Pour les cabinets qui veulent une vraie stratégie de contenu régulière et prête à publier.
              </p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-white/80">
<span className="text-white">✓</span>
                  Création de contenus mensuels
                </li>
<li className="flex gap-3 text-sm text-white/80">
<span className="text-white">✓</span>
                  Formats carrousels et posts
                </li>
<li className="flex gap-3 text-sm text-white/80">
<span className="text-white">✓</span>
                  Validation simple et rapide
                </li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-obsidian text-xs font-semibold transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-[0.97] active:duration-100 relative z-10">
                Prendre rendez-vous
              </button>
</div>

<div className="pricing-card group relative p-8 rounded-xl border border-border bg-white flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-obsidian/30 focus:outline-none focus:ring-2 focus:ring-obsidian focus:ring-offset-2 pricing-transition opacity-60 scale-[0.98]" id="pricing-ent" role="button" tabindex="0">
<div className="absolute inset-0 rounded-xl bg-gradient-to-b from-obsidian/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="mb-4 relative z-10">
<span className="font-semibold text-obsidian">Délégation totale</span>
</div>
<div className="mb-4 flex items-baseline gap-1 relative z-10">
<span className="text-3xl font-semibold text-obsidian">Sur-mesure</span>
</div>
<p className="text-sm text-subtle mb-8 leading-relaxed relative z-10">
                Pour les structures souhaitant externaliser 100% de leur communication sur les réseaux sociaux.
              </p>
<ul className="space-y-4 mb-8 flex-1 relative z-10">
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  Gestion complète du compte
                </li>
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  Interaction et modération
                </li>
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  Reporting de visibilité
                </li>
</ul>
<button className="w-full py-3 rounded-lg border border-border text-xs font-semibold text-obsidian bg-white transition-all duration-300 ease-out hover:scale-[1.03] hover:border-obsidian hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] active:scale-[0.97] active:duration-100 relative z-10">
                Nous contacter
              </button>
</div>
</div>
</div>
</section>

<footer className="bg-white py-20 px-6 md:px-12 lg:px-20">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-xs space-y-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-obsidian rounded-sm"></div>
<span className="font-bold text-sm tracking-tight text-obsidian">
                STUDIO EXPERT
              </span>
</div>
<p className="text-xs text-subtle leading-relaxed">
              Une présence Instagram crédible, cohérente et régulière. Exclusivement pour les cabinets comptables et experts-comptables.
            </p>
<div className="text-[10px] text-border">
              © 2024 Studio Expert. Tous droits réservés.
            </div>
</div>
<div className="flex gap-16">
<div className="space-y-4">
<h4 className="text-xs font-bold text-obsidian">Solutions</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><a className="hover:text-obsidian" href="#">Offre Mensuelle</a></li>
<li><a className="hover:text-obsidian" href="#">Identité Visuelle</a></li>
<li><a className="hover:text-obsidian" href="#">Délégation</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-bold text-obsidian">Agence</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><a className="hover:text-obsidian" href="#">Notre approche</a></li>
<li><a className="hover:text-obsidian" href="#">Cas clients</a></li>
<li><a className="hover:text-obsidian" href="#">Contact</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-bold text-obsidian">Réseaux</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><a className="hover:text-obsidian" href="#">Instagram</a></li>
<li><a className="hover:text-obsidian" href="#">LinkedIn</a></li>
</ul>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
