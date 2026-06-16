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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


      (function () {
        const el = document.getElementById('hero-typing-word');
        if (!el) return;

        const words = ['smarter', 'faster', 'clearer', 'on-brand'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
          const word = words[wordIndex % words.length];

          if (isDeleting) {
            charIndex--;
          } else {
            charIndex++;
          }

          el.textContent = word.substring(0, charIndex);

          let delay = isDeleting ? 60 : 110;

          if (!isDeleting && charIndex === word.length) {
            // pause at full word
            delay = 1400;
            isDeleting = true;
          } else if (isDeleting && charIndex === 0) {
            // move to next word
            isDeleting = false;
            wordIndex++;
            delay = 400;
          }

          setTimeout(type, delay);
        }

        // start with empty text so it types in
        el.textContent = '';
        type();
      })();
    


          (function() {
              // Internal logic for independent smooth animation
              const wrapper = document.getElementById('timeline-wrapper');
              const progressBar = document.getElementById('timeline-progress-bar');
              const steps = wrapper ? wrapper.querySelectorAll('.timeline-step') : [];

              function onScroll() {
                  if (!wrapper) return;

                  // 1. Progress Bar Logic
                  const rect = wrapper.getBoundingClientRect();
                  const viewportHeight = window.innerHeight;

                  // Start filling when container top hits 60% of viewport height
                  const startThreshold = viewportHeight * 0.6;
                  // Calculate how many pixels the container has moved past the threshold
                  let scrollDist = startThreshold - rect.top;

                  // Max height is the full height of the container
                  const maxHeight = wrapper.offsetHeight;

                  // Clamp and set height
                  let height = Math.max(0, Math.min(maxHeight, scrollDist));

                  // Extend height slightly so it passes the last dot comfortably if scrolled enough
                  if (height > 0) height += 40;

                  progressBar.style.height = `${height}px`;

                  // 2. Step Activation Logic
                  steps.forEach(step => {
                      const stepRect = step.getBoundingClientRect();
                      const stepTop = stepRect.top;

                      // Activate step when its top crosses the 75% viewport line
                      const triggerPoint = viewportHeight * 0.75;

                      const title = step.querySelector('.step-title');
                      const desc = step.querySelector('.step-desc');
                      const marker = step.querySelector('.step-marker');
                      const fill = step.querySelector('.step-fill');
                      const glow = step.querySelector('.step-glow');
                      const card = step.querySelector('.step-card');

                      if (stepTop < triggerPoint) {
                          // ACTIVE STATE
                          if (title) {
                              title.classList.remove('text-neutral-50');
                              title.classList.add('text-white');
                          }
                          if (desc) {
                              desc.classList.remove('text-neutral-400');
                              desc.classList.add('text-neutral-200');
                          }
                          if (marker) {
                              marker.classList.remove('border-neutral-700', 'bg-neutral-900');
                              marker.classList.add('border-orange-500', 'bg-orange-900');
                          }
                          if (fill) fill.classList.remove('opacity-0');
                          if (glow) glow.classList.remove('opacity-0');

                          if (card) {
                              card.classList.remove('opacity-0', 'translate-y-12', 'scale-95');
                              card.classList.add('opacity-100', 'translate-y-0', 'scale-100');
                          }
                      } else {
                          // INACTIVE STATE (Reversible)
                          if (title) {
                              title.classList.add('text-neutral-50');
                              title.classList.remove('text-white');
                          }
                          if (desc) {
                              title.classList.add('text-neutral-400');
                              title.classList.remove('text-neutral-200');
                          }
                          if (marker) {
                              marker.classList.add('border-neutral-700', 'bg-neutral-900');
                              marker.classList.remove('border-orange-500', 'bg-orange-900');
                          }
                          if (fill) fill.classList.add('opacity-0');
                          if (glow) glow.classList.add('opacity-0');

                          if (card) {
                              card.classList.add('opacity-0', 'translate-y-12', 'scale-95');
                              card.classList.remove('opacity-100', 'translate-y-0', 'scale-100');
                          }
                      }
                  });
              }

              window.addEventListener('scroll', onScroll, { passive: true });
              window.addEventListener('resize', onScroll);
              // Trigger once on load
              onScroll();
          })();
        


        // Fade-in cards + highlight timeline markers on scroll
      const rows = document.querySelectorAll('[data-step-row]');
      const markers = document.querySelectorAll('[data-step-marker]');

      function setActiveStep(step) {
        markers.forEach((marker) => {
          const isActive = marker.dataset.stepMarker === step;
          if (isActive) {
            marker.classList.add(
              'bg-orange-500',
              'border-orange-500',
              'shadow-[0_0_0_6px_rgba(249,115,22,0.15)]'
            );
            marker.classList.remove('bg-neutral-900', 'border-neutral-700');
          } else {
            marker.classList.remove(
              'bg-orange-500',
              'border-orange-500',
              'shadow-[0_0_0_6px_rgba(249,115,22,0.15)]'
            );
            marker.classList.add('bg-neutral-900', 'border-neutral-700');
          }
        });
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const row = entry.target;
              const card = row.querySelector('.step-card');
              const step = row.getAttribute('data-step-row');

              if (card) {
                card.classList.add('opacity-100', 'translate-y-0');
              }
              if (step) {
                setActiveStep(step);
              }
            }
          });
        },
        { threshold: 0.45 }
      );

      rows.forEach((row) => observer.observe(row));

      // Initial active state
      setActiveStep('1');
    


      (function () {
        const section = document.querySelector('#lenora-advantage');
        if (!section) return;

        function updateState() {
          const rect = section.getBoundingClientRect();
          const vh = window.innerHeight || document.documentElement.clientHeight;

          // progress: 0 when section just enters, 1 when almost out
          const start = vh * 0.75;
          const end = -vh * 0.25;
          const total = start - end;
          const clampedTop = Math.min(start, Math.max(end, rect.top));
          const progress = 1 - (clampedTop - end) / total;

          if (progress > 0.05) {
            section.classList.add('is-visible');
          }

          let stateClass = 'state-1';
          if (progress < 0.33) {
            stateClass = 'state-1';
          } else if (progress < 0.66) {
            stateClass = 'state-2';
          } else {
            stateClass = 'state-3';
          }

          section.classList.remove('state-1', 'state-2', 'state-3');
          section.classList.add(stateClass);
        }

        window.addEventListener('scroll', updateState, { passive: true });
        window.addEventListener('load', updateState);
        window.addEventListener('resize', updateState);
      })();
    


      // Billing toggle + sliding prices
      (function () {
        const section = document.getElementById('pricing');
        if (!section) return;

        const toggles = section.querySelectorAll('.billing-toggle');
        const labels = section.querySelectorAll('.billing-label');
        const priceStacks = section.querySelectorAll('.price-stack');

        function setBilling(mode) {
          // 1) Update toggle button visuals
          toggles.forEach((btn) => {
            const isActive = btn.dataset.billingToggle === mode;

            if (isActive) {
              btn.classList.add(
                'bg-orange-500',
                'text-black',
                'font-medium',
                'shadow-[0_0_0_1px_rgba(248,250,252,0.1)]'
              );
              btn.classList.remove('text-neutral-300/80');
            } else {
              btn.classList.remove(
                'bg-orange-500',
                'text-black',
                'font-medium',
                'shadow-[0_0_0_1px_rgba(248,250,252,0.1)]'
              );
              btn.classList.add('text-neutral-300/80');
            }
          });

          // 2) Slide prices (0% = monthly, -50% = yearly)
          const offset = mode === 'monthly' ? '0%' : '-50%';
          priceStacks.forEach((stack) => {
            stack.style.transform = `translateY(${offset})`;
          });

          // 3) Update small "Billed monthly/yearly" labels
          labels.forEach((el) => {
            el.textContent = mode === 'monthly' ? 'monthly' : 'yearly';
          });
        }

        // Click handlers
        toggles.forEach((btn) => {
          btn.addEventListener('click', () => {
            setBilling(btn.dataset.billingToggle);
          });
        });

        // Default state
        setBilling('monthly');
      })();
    


      // Simple typing effect for the hero
      document.addEventListener('DOMContentLoaded', () => {
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.remove('opacity-0', 'translate-y-10');
                  }
              });
          }, { threshold: 0.1 });

          document.querySelectorAll('.animate-fade-up').forEach(el => observer.observe(el));

          // SCROLL STACK ANIMATION LOGIC
          const section = document.querySelector('#pain-points');
          const card1 = document.querySelector('#card-1');
          const card2 = document.querySelector('#card-2');
          const card3 = document.querySelector('#card-3');

          // Set initial rotation for card 1 (slight tilt like image)
          card1.style.transform = 'scale(1) rotate(-2deg)';

          window.addEventListener('scroll', () => {
              const rect = section.getBoundingClientRect();
              const viewportHeight = window.innerHeight;

              // Calculate how much we've scrolled into the section (0 to 1)
              // The section has a spacer div of 250vh, so we have space to scroll
              let progress = Math.min(1, Math.max(0, -rect.top / (rect.height - viewportHeight)));

              // Card 1 Logic:
              // As progress goes 0 -> 0.4, it scales down slightly and gets dimmer
              if (progress < 0.4) {
                  const scale = 1 - (progress * 0.15); // Goes down to 0.94
                  const opacity = 1 - (progress * 0.5);
                  card1.style.transform = `scale(${scale}) rotate(-2deg)`;
                  card1.style.filter = `brightness(${1 - progress})`;
              } else {
                  card1.style.transform = `scale(0.94) rotate(-2deg)`;
                  card1.style.filter = `brightness(0.6)`;
              }

              // Card 2 Logic:
              // Enters from 0.1 to 0.5
              if (progress > 0.1) {
                  const p2 = Math.min(1, Math.max(0, (progress - 0.1) / 0.4)); // Normalized 0-1 for this card
                  const translateY = (1 - p2) * 120; // 120% down to 0%
                  const scale = 0.9 + (p2 * 0.1); // 0.9 to 1

                  if (p2 < 1) {
                       // Entering
                      card2.style.transform = `translateY(${translateY}%) scale(${scale}) rotate(2deg)`;
                      card2.style.opacity = p2;
                  } else {
                      // Fully in place, now acting as background for card 3
                      // As progress goes 0.5 -> 0.9
                      if (progress > 0.5) {
                          const p2Exit = Math.min(1, (progress - 0.5) / 0.4);
                          const exitScale = 1 - (p2Exit * 0.05); // Goes down slightly
                          card2.style.transform = `translateY(0%) scale(${exitScale}) rotate(2deg)`;
                          card2.style.filter = `brightness(${1 - (p2Exit * 0.4)})`;
                      }
                  }
              } else {
                  card2.style.transform = `translateY(120%)`;
                  card2.style.opacity = 0;
              }

              // Card 3 Logic:
              // Enters from 0.5 to 0.9
              if (progress > 0.5) {
                  const p3 = Math.min(1, Math.max(0, (progress - 0.5) / 0.4));
                  const translateY = (1 - p3) * 120;
                  const scale = 0.9 + (p3 * 0.1);

                  card3.style.transform = `translateY(${translateY}%) scale(${scale}) rotate(-1deg)`;
                  card3.style.opacity = p3;
              } else {
                  card3.style.transform = `translateY(120%)`;
                  card3.style.opacity = 0;
              }
          });
      });
    


      const revealObserver=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&e.target.classList.add("active")}))}),{threshold:.1,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll(".reveal").forEach((e=>revealObserver.observe(e)));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="uFY4IYPs2LU8fWm96Im2"></div>

</div></div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
<div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] mix-blend-screen opacity-30"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neutral-800 to-black border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition-colors">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
</div>
<span className="text-base tracking-tight text-white font-medium">
              Lexora
            </span>
</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">
              Features
            </a>
<a className="hover:text-white transition-colors" href="#workflow">
              Workflow
            </a>
<a className="hover:text-white transition-colors" href="#pricing">
              Pricing
            </a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-neutral-300 hover:text-white transition-colors" href="#">
            Log in
          </a>
<a className="h-9 px-4 rounded-full bg-white text-black text-sm flex items-center gap-2 hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] font-medium" href="#">
<span>Start writing</span>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</nav>

<section className="lg:pt-40 lg:pb-32 overflow-hidden z-10 pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-16 gap-x-16 gap-y-16 items-center">

<div className="flex-1 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-300 text-xs font-medium mb-8 reveal active">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="">Lexora 2.0 · New drafting engine</span>
</div>

<div className="min-h-[7rem] sm:min-h-[8rem] lg:min-h-[9rem]">
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.1] text-white mb-8 font-normal reveal delay-100 active">
                Write
                <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600">
<span className="inline-block border-r border-orange-400 pr-1 mr-1 min-w-[5ch]" id="hero-typing-word">smarte</span>
                  with Lexora.
                </span>
</h1>
</div>
<p className="text-lg text-neutral-400 mb-10 max-w-lg leading-relaxed reveal delay-200 active">
              Turn rough ideas into polished copy in seconds. Lexora understands
              your brand voice, keeps context across drafts, and helps you
              publish on schedule instead of staring at a blank page.
            </p>
<div className="flex flex-wrap items-center gap-4 reveal delay-300 active">
<button className="group shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 overflow-hidden font-medium text-orange-900 bg-gradient-to-r from-[#FFEBB1] to-[#FFC438] rounded-xl pt-4 pr-8 pb-4 pl-8 relative shadow-lg" style={{boxShadow: '0 15px 33px -12px rgba(255,162,42,0.9), inset 0 4px 6.3px rgba(252,220,134,1), inset 0 -5px 6.3px rgba(255,162,38,1)', borderRadius: '9999px'}}>
<div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
<span className="relative flex items-center gap-2">
                            Start Free Trial
                            <svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path className="" d="m21.854 2.147-10.94 10.939"></path></svg>
</span>
</button>
<button className="h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm">
<svg className="" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
                Watch demo
              </button>
</div>
<div className="mt-12 flex items-center gap-4 text-sm text-neutral-500 reveal delay-500 active">
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full border-2 border-black grayscale opacity-70 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90ec73f0-6fd3-4d0c-922c-fcc592c983df_320w.webp"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-black grayscale opacity-70 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2dbcdf02-39a2-4c13-95f7-3118cc995fa0_320w.webp"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-black grayscale opacity-70 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e3e1091-f8e8-4022-a02a-fa37a35c59a5_320w.jpg" style={{}}/>
</div>
<p className="">Trusted by 10,000+ content teams</p>
</div>
</div>

<div className="flex-1 delay-200 w-full relative perspective-1000 reveal delay-300 active">

<div className="relative z-10 glass-panel rounded-2xl p-1 shadow-2xl transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-transform duration-700 ease-out">
<div className="bg-neutral-900 rounded-xl overflow-hidden border border-white/5 flex flex-col h-[480px]">

<div className="flex bg-black/50 h-10 border-white/5 border-b pr-4 pl-4 items-center justify-between shrink-0 z-20 relative">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs font-mono text-neutral-500">
                    newsletter_weekly.md
                  </div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
<span className="text-[10px] text-neutral-600 uppercase tracking-widest font-semibold">
                      Saved
                    </span>
</div>
</div>

<div className="p-8 overflow-y-auto font-mono text-sm leading-loose relative h-full scroll-smooth">
<div className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none"></div>
<p className="text-neutral-500 mb-4"># Launching Lexora 2.0</p>
<p className="text-neutral-300 mb-8">
                    Great writing doesn’t start from scratch. With Lexora, your
                    past campaigns, tone, and structure all live in one
                    intelligent workspace. Every new piece of content feels
                    consistent, on-brand, and ready to ship.
                  </p>
<p className="text-neutral-500 mb-4">## The Problem</p>
<p className="text-neutral-300 mb-8">
                    Content teams are drowning in Google Docs, Slack threads,
                    and endless revision cycles. We realized that the tool
                    shouldn't just be a blank page—it should be a partner that
                    knows your context. When you write "Our mission," Lexora
                    knows exactly what that means.
                  </p>

<div className="float-right ml-4 mb-4 w-64 glass-panel rounded-lg p-4 border border-orange-500/30 shadow-lg shadow-orange-900/20 relative z-10 bg-neutral-900/90 backdrop-blur-md">
<div className="flex items-center gap-2 mb-2 text-orange-300 text-xs font-medium uppercase tracking-wider">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
                      Suggestion
                    </div>
<p className="text-xs text-neutral-300 mb-3">
                      Want a sharper hook? Try:
                    </p>
<p className="text-xs text-white bg-white/5 p-2 rounded border border-white/10 mb-3 leading-relaxed">
                      “Your next campaign shouldn’t start from a blank page—it
                      should start from everything that already works.”
                    </p>
<div className="flex gap-2">
<button className="flex-1 h-6 rounded bg-orange-500 text-black text-[10px] font-bold hover:bg-orange-400 transition-colors">
                        Accept
                      </button>
<button className="flex-1 h-6 rounded bg-white/5 text-white text-[10px] hover:bg-white/10 transition-colors">
                        Dismiss
                      </button>
</div>
</div>
<p className="text-neutral-500 mb-4">## Core Capabilities</p>
<ul className="text-neutral-300 mb-8 list-none pl-0 space-y-3">
<li className="flex gap-2">
<span className="text-orange-500 font-bold">-</span>
<span className="">
                        Instantly references your last 50 campaigns to maintain
                        continuity.
                      </span>
</li>
<li className="flex gap-2">
<span className="text-orange-500 font-bold">-</span>
<span className="">
                        Automatically flags language that drifts from your
                        established style guide.
                      </span>
</li>
<li className="flex gap-2">
<span className="text-orange-500 font-bold">-</span>
<span className="">
                        Edit with your team and AI agents simultaneously in the
                        same doc.
                      </span>
</li>
</ul>
<p className="text-neutral-500 mb-4">## Q4 Roadmap</p>
<p className="text-neutral-300">
                    We are just getting started. Upcoming releases:

                    <span className="text-neutral-500 text-xs mt-2 block font-mono">
                      [ ] Enterprise API Access [ ] Mobile App (iOS/Android) [ ]
                      Slack Integration [ ] Custom AI Agents
                    </span>
<span className="inline-block w-2 h-4 bg-orange-500 ml-1 animate-pulse align-middle mt-2"></span>
</p>
<div className="h-12"></div>

</div>
</div>
</div>


<div className="-left-10 -top-4 glass-panel shadow-black/60 sm:-left-16 sm:top-4 sm:w-48 [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)] bg-black/30 w-40 z-20 pointer-events-none border-white/10 border rounded-xl px-4 py-3 absolute shadow-lg backdrop-blur-md">
<p className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 mb-1">
                Live workspace
              </p>
<p className="text-xs text-neutral-100 mb-1">Blog calendar · Q2</p>
<p className="text-[11px] text-orange-300 flex items-center gap-1">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                3 teammates editing
              </p>
</div>

<div className="-right-10 glass-panel shadow-orange-900/40 sm:-right-16 sm:bottom-6 sm:w-48 bg-black/30 w-40 z-20 pointer-events-none border-orange-500/30 border rounded-xl px-4 py-3 absolute bottom-4 shadow-lg">
<p className="text-[10px] uppercase tracking-[0.18em] text-orange-400 mb-1">
                This week
              </p>
<p className="text-xl font-semibold text-white leading-tight">27</p>
<p className="text-[11px] text-neutral-400">
                publish-ready pieces shipped with Lexora.
              </p>
</div>

<div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-purple-600 opacity-20 blur-3xl -z-10 rounded-full"></div>
</div>
</div>
</div>
</section>



<section className="border-y overflow-hidden bg-black/30 border-white/5 pt-10 pb-10" style={{maskImage: 'linear-gradient(90deg, transparent, black 55%, black 55%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 55%, black 55%, transparent)'}}>
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-neutral-500 uppercase tracking-widest mb-8">
          Powering world-class editorial teams
        </p>
<div className="relative flex overflow-x-hidden group">
<div className="animate-marquee whitespace-nowrap flex gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-semibold tracking-tight">ACME Corp</span>
<span className="text-xl font-bold tracking-tighter italic">
              Veridian
            </span>
<span className="text-xl font-black tracking-tight">KYBER</span>
<span className="text-xl font-medium tracking-wide">Lumina.ai</span>
<span className="text-xl font-bold font-serif">Vogue</span>
<span className="text-xl font-semibold tracking-tight">Stripe</span>
<span className="text-xl font-bold tracking-tighter italic">
              Linear
            </span>
<span className="text-xl font-black tracking-tight">Raycast</span>

<span className="text-xl font-semibold tracking-tight">ACME Corp</span>
<span className="text-xl font-bold tracking-tighter italic">
              Veridian
            </span>
<span className="text-xl font-black tracking-tight">KYBER</span>
<span className="text-xl font-medium tracking-wide">Lumina.ai</span>
</div>
<style>
            .animate-marquee { animation: marquee 25s linear infinite; }
            @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          </style>
</div>
</div>
</section>

<section className="relative z-20 bg-black" id="pain-points">
<div className="sticky flex flex-col overflow-hidden w-full h-screen pt-20 pr-12 pb-20 pl-12 top-0 items-center justify-center min-h-[600px]">

<div className="text-center mb-12 relative z-10 transition-opacity duration-300" id="pain-header">
<h2 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight tracking-tight">
            We understand
            <br/>
<span className="text-neutral-400">your pain</span>
</h2>
</div>

<div className="card-stack-wrapper md:h-[500px] w-full h-[480px] max-w-sm py-1 relative">

<div className="stack-card absolute inset-0 rounded-3xl p-8 md:p-12 flex flex-col justify-between border border-white/10 bg-[#111] shadow-2xl" id="card-1" style={{transform: 'scale(1) rotate(-2deg)', filter: 'brightness(1)'}}>
<div className="relative">
<svg className="text-neutral-600 mb-6 opacity-50" fill="currentColor" height="40" viewbox="0 0 24 24" width="40">
<path className="" d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.017C7.91243 16 7.017 16.8954 7.017 18V21H0V18C0 11.3726 5.37258 6 12 6V0H11C4.37258 0 0 5.37258 0 12V21H14.017ZM24.017 21L24.017 18C24.017 16.8954 23.1216 16 22.017 16H19.017C17.9124 16 17.017 16.8954 17.017 18V21H10V18C10 11.3726 15.3726 6 22 6V0H23C29.6274 0 34 5.37258 34 12V21H24.017Z"></path>
</svg>
<p className="text-3xl md:text-4xl font-serif text-white leading-tight">
                "I don't have time to write."
              </p>
<p className="mt-6 text-neutral-500 text-lg leading-relaxed">
                Hours get lost to drafting instead of moving the business ahead.
              </p>
</div>
<div>
<div className="text-xs font-bold tracking-widest text-white uppercase mb-1">
                Bambang
              </div>
<div className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">
                Social Media Manager
              </div>
</div>
</div>

<div className="stack-card absolute inset-0 rounded-3xl p-8 md:p-12 flex flex-col justify-between border border-white/10 bg-[#111] shadow-2xl translate-y-[120%] opacity-0" id="card-2" style={{transform: 'translateY(120%)', opacity: '0', filter: 'brightness(0.6)'}}>
<div className="relative">
<svg className="text-neutral-600 mb-6 opacity-50" fill="currentColor" height="40" viewbox="0 0 24 24" width="40">
<path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.017C7.91243 16 7.017 16.8954 7.017 18V21H0V18C0 11.3726 5.37258 6 12 6V0H11C4.37258 0 0 5.37258 0 12V21H14.017ZM24.017 21L24.017 18C24.017 16.8954 23.1216 16 22.017 16H19.017C17.9124 16 17.017 16.8954 17.017 18V21H10V18C10 11.3726 15.3726 6 22 6V0H23C29.6274 0 34 5.37258 34 12V21H24.017Z"></path>
</svg>
<p className="text-3xl md:text-4xl font-serif text-white leading-tight">
                "I spend more time fixing than writing."
              </p>
<p className="mt-6 text-neutral-500 text-lg leading-relaxed">
                Editing messy drafts kills the creative flow entirely.
              </p>
</div>
<div>
<div className="text-xs font-bold tracking-widest text-white uppercase mb-1">
                Sarah
              </div>
<div className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">
                Content Lead
              </div>
</div>
</div>

<div className="stack-card absolute inset-0 rounded-3xl p-8 md:p-12 flex flex-col justify-between border border-white/10 bg-[#111] shadow-2xl translate-y-[120%] opacity-0" id="card-3" style={{transform: 'translateY(120%)', opacity: '0'}}>
<div className="relative">
<svg className="text-neutral-600 mb-6 opacity-50" fill="currentColor" height="40" viewbox="0 0 24 24" width="40">
<path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.017C7.91243 16 7.017 16.8954 7.017 18V21H0V18C0 11.3726 5.37258 6 12 6V0H11C4.37258 0 0 5.37258 0 12V21H14.017ZM24.017 21L24.017 18C24.017 16.8954 23.1216 16 22.017 16H19.017C17.9124 16 17.017 16.8954 17.017 18V21H10V18C10 11.3726 15.3726 6 22 6V0H23C29.6274 0 34 5.37258 34 12V21H24.017Z"></path>
</svg>
<p className="text-3xl md:text-4xl font-serif text-white leading-tight">
                "My content sounds robotic."
              </p>
<p className="mt-6 text-neutral-500 text-lg leading-relaxed">
                Generic AI output damages our brand voice and trust.
              </p>
</div>
<div className="">
<div className="text-xs font-bold tracking-widest text-white uppercase mb-1">
                Marcus
              </div>
<div className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">
                Founder
              </div>
</div>
</div>
</div>
</div>

<div className="h-[250vh]"></div>
</section>

<section className="py-32 relative bg-black" id="features">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-20 max-w-2xl">
<h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">
            Everything you need to
            <br/>
            create masterpiece.
          </h2>
<p className="text-lg text-neutral-400">
            Powerful features wrapped in a beautiful interface, designed to keep
            you in the flow state.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[minmax(320px,auto)]">

<div className="md:col-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group flex flex-col border border-white/10 bg-[#0A0A0A] reveal">
<div className="relative z-10 flex flex-col h-full">
<h3 className="text-2xl font-normal font-serif text-white mb-2 tracking-tight">
                Content Generator
              </h3>
<p className="text-sm text-neutral-400 mb-8 font-light">
                Create blogs, emails, or articles in seconds.
              </p>

<div className="mt-auto relative rounded-xl border border-white/10 bg-neutral-900/50 overflow-hidden shadow-2xl">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
</div>
<div className="p-4 space-y-3">
<div className="flex justify-between text-[10px] text-neutral-500 uppercase tracking-widest font-medium">
<span>Content Ideas</span>
<span>Type</span>
</div>
<div className="flex justify-between items-center text-xs text-neutral-400 py-2 border-b border-white/5">
<span>15 Best AI Writing tools...</span>
<span className="px-2 py-0.5 rounded bg-white/5">Blog</span>
</div>
<div className="flex justify-between items-center text-xs text-white py-2 bg-white/5 -mx-4 px-4 border-l-2 border-orange-500">
<span>20 Best AI Writing tools...</span>
<span className="px-2 py-0.5 rounded bg-white/10">
                      Blog post
                    </span>
</div>
<div className="flex justify-between items-center text-xs text-neutral-400 py-2 border-b border-white/5 opacity-50">
<span>How to scale content...</span>
<span className="px-2 py-0.5 rounded bg-white/5">Email</span>
</div>
</div>

<div className="absolute bottom-6 right-6 z-20">
<button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded-full text-xs font-medium shadow-lg shadow-orange-900/40 transition-all hover:scale-105 active:scale-95 group-hover:animate-pulse">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
                    Generate content
                  </button>
</div>
</div>
</div>

<div className="absolute top-0 right-0 w-[200px] h-[200px] bg-orange-500/10 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>

<div className="md:col-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group flex flex-col border border-white/10 bg-[#0A0A0A] reveal delay-100">
<h3 className="text-2xl font-normal font-serif text-white mb-2 tracking-tight">
              Ad Copy Creator
            </h3>
<p className="text-sm text-neutral-400 mb-8 font-light">
              Write headlines that sell like crazy.
            </p>

<div className="relative mt-auto h-48 w-full perspective-near">

<div className="absolute bottom-0 left-4 right-4 h-32 bg-neutral-800 rounded-xl border border-white/5 opacity-40 transform translate-y-4 scale-95 transition-transform duration-500 group-hover:translate-y-6"></div>

<div className="absolute bottom-0 left-2 right-2 h-32 bg-neutral-800 rounded-xl border border-white/5 opacity-70 transform translate-y-2 scale-[0.98] transition-transform duration-500 group-hover:translate-y-3"></div>

<div className="absolute bottom-0 inset-x-0 h-auto min-h-[140px] bg-[#111] rounded-xl border border-white/10 p-5 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 z-10 flex flex-col gap-3">
<div className="text-[10px] text-orange-400 font-medium uppercase tracking-widest">
                  Option 1
                </div>
<h4 className="text-lg font-medium text-white leading-tight">
                  From Idea to Publish in Minutes
                </h4>
<p className="text-xs text-neutral-500 leading-relaxed">
                  Lexora helps you create SEO-ready content faster than ever
                  before.
                </p>
<div className="mt-2 h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-orange-500 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group flex flex-col border border-white/10 bg-[#0A0A0A] reveal delay-200">
<h3 className="text-2xl font-normal font-serif text-white mb-2 tracking-tight">
              Tone Control
            </h3>
<p className="text-sm text-neutral-400 mb-8 font-light">
              Adjust your writing style with one click.
            </p>
<div className="relative flex-1 bg-neutral-900/50 rounded-2xl border border-white/5 p-6 flex items-center justify-center overflow-hidden">

<div className="w-full max-w-[200px] space-y-1 relative">

<div className="absolute left-0 top-0 w-full h-[36px] bg-white/5 rounded-lg border border-white/10 transition-all duration-300 ease-out transform translate-y-0 group-hover:translate-y-[36px]"></div>

<div className="relative z-10 flex items-center justify-between px-3 h-[36px] cursor-pointer group/item">
<span className="text-sm font-medium text-white">Casual</span>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)] opacity-100 group-hover:opacity-0 transition-opacity"></div>
</div>
<div className="relative z-10 flex items-center justify-between px-3 h-[36px] cursor-pointer group/item opacity-50 hover:opacity-100 transition-opacity">
<span className="text-sm font-medium text-white">
                    Professional
                  </span>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)] opacity-0 group-hover:opacity-100 transition-opacity delay-75"></div>
</div>
<div className="relative z-10 flex items-center justify-between px-3 h-[36px] cursor-pointertext-sm font-medium text-white">
                  Playful
                </div>
</div>

<div className="absolute -right-12 top-1/2 -translate-y-1/2 w-24 h-48 bg-gradient-to-l from-black via-transparent to-transparent z-20 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
</div>
</div>

<div className="md:col-span-3 glass-panel rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-between border border-white/10 bg-[#0A0A0A] min-h-[360px] reveal">
<div className="relative z-10">
<h3 className="text-2xl font-normal font-serif text-white mb-2 tracking-tight">
                Team Collaboration
              </h3>
<p className="text-sm text-neutral-400 font-light">
                Work with your team, share drafts, and speed up approvals.
              </p>
</div>

<div className="absolute inset-0 top-28 px-8 opacity-40 select-none pointer-events-none overflow-hidden">
<p className="text-2xl font-serif text-neutral-700 leading-relaxed">
                Why Writing Feels So Hard...

                <span className="bg-orange-900/30 text-orange-700/50">
                  Content is
                </span>
</p>
</div>

<div className="relative z-20 mt-auto ml-auto w-full max-w-sm bg-[#151515] border border-white/10 rounded-xl p-4 shadow-2xl transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
<div className="flex gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-neutral-700 flex-shrink-0 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80" src="https://i.pravatar.cc/150?u=bondan"/>
</div>
<div className="">
<div className="text-xs font-semibold text-white mb-0.5">
                    Bondan
                  </div>
<div className="text-xs text-neutral-400 leading-snug">
                    I think we can go with this direction. It feels more
                    authentic to the brand voice.
                  </div>
</div>
</div>
<div className="flex gap-2 pl-11">
<button className="px-3 py-1.5 text-[10px] font-medium text-neutral-400 hover:text-white border border-white/10 hover:border-white/20 rounded-md transition-colors bg-white/5">
                  Reply
                </button>
<button className="px-3 py-1.5 text-[10px] font-medium text-white bg-orange-600 hover:bg-orange-500 rounded-md transition-colors flex items-center gap-1.5 shadow-lg shadow-orange-900/20">
<svg fill="none" height="10" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="10">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                  Approve
                </button>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-900/10 to-transparent pointer-events-none"></div>
</div>

<div className="md:col-span-3 glass-panel rounded-3xl p-8 relative overflow-hidden group flex flex-col border border-white/10 bg-[#0A0A0A] min-h-[360px] reveal delay-100">
<div className="relative z-10">
<h3 className="text-2xl font-normal font-serif text-white mb-2 tracking-tight">
                Contextual Intelligence
              </h3>
<p className="text-sm text-neutral-400 font-light">
                Generate headlines and descriptions that convert.
              </p>
</div>
<div className="relative flex-1 flex items-center justify-center mt-8">

<div className="w-full max-w-md relative">
<p className="text-3xl md:text-4xl font-serif text-neutral-700 leading-tight">
                  Start from scratch, or let AI handle the heavy lifting.
                  <span className="relative inline-block text-white">
                    That's where Lexora comes in.
                    
<span className="absolute inset-0 bg-orange-500/20 -skew-y-1 -z-10 rounded"></span>

<span className="absolute -right-0.5 top-0 bottom-0 w-0.5 bg-orange-500 animate-[pulse_1s_infinite]"></span>

</span>
</p>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-bottom">
<div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-3 shadow-xl flex items-center gap-3">
<div className="w-6 h-6 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
</div>
<span className="text-xs font-medium text-neutral-300">
                      This is exactly what Lexora was built for.
                    </span>
</div>

<div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1.5 border-4 border-transparent border-t-[#1a1a1a]"></div>
</div>
<p></p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-black text-white py-24 md:py-32">
<div className="max-w-6xl mx-auto px-6 lg:px-8">

<p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange-400 mb-4">
          How it works
        </p>
<h2 className="text-3xl md:text-5xl font-semibold leading-tight text-neutral-50">
          The clear path from idea to publish with Lexora
        </h2>
</div>

<div className="lg:px-8 md:mt-20 max-w-6xl mt-16 mr-auto ml-auto pr-6 pl-6 relative" id="timeline-wrapper">

<div className="pointer-events-none absolute left-6 md:left-8 top-0 bottom-0 w-px bg-neutral-800/50"></div>

<div className="pointer-events-none absolute left-6 md:left-8 top-0 w-px bg-gradient-to-b from-orange-500 via-orange-500 to-orange-400 h-0 transition-[height] duration-75 ease-linear shadow-[0_0_15px_rgba(249,115,22,0.6)] z-10" id="timeline-progress-bar" style={{height: '0px'}}></div>
<div className="space-y-24 md:space-y-32 pb-12">

<div className="timeline-step flex flex-col md:flex-row items-start gap-12 md:gap-16 group" data-step-row="1">

<div className="relative w-full md:w-[260px] pl-12 md:pl-16">

<div className="step-marker-wrapper absolute top-2 left-6 md:left-8 -translate-x-1/2 z-20">
<div className="step-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-orange-500/30 transition-opacity duration-500 blur-sm opacity-0"></div>
<div className="step-marker h-4 w-4 rounded-[4px] border transition-all duration-300 relative overflow-hidden bg-orange-500 shadow-[0_0_0_6px_rgba(249,115,22,0.15)]" data-step-marker="1">
<div className="absolute inset-0 bg-orange-500 transition-opacity duration-300 step-fill opacity-0"></div>
</div>
</div>
<h3 className="step-title text-2xl md:text-3xl font-semibold mb-2 transition-colors duration-300 tracking-tight text-neutral-400 text-neutral-50">
                Give Lexora a prompt
              </h3>
<p className="step-desc text-sm md:text-base max-w-xs transition-colors duration-300">
                Describe your idea in plain language – no complex brief or
                outline required.
              </p>
</div>

<div className="step-card transition-all duration-700 ease-out flex-1 origin-top-left opacity-0 translate-y-12 scale-95">
<div className="rounded-[32px] border border-neutral-800 bg-neutral-900/80 shadow-[0_24px_80px_rgba(0,0,0,0.75)] overflow-hidden group-hover:border-neutral-700 transition-colors duration-500">
<div className="p-8 md:p-10">
<div className="rounded-2xl bg-neutral-950 border border-neutral-800 px-6 py-5 flex items-center justify-between">
<p className="text-sm md:text-base text-neutral-200">
                      “Write a LinkedIn post about launching our new AI content
                      tool, Lexora.”
                    </p>
<button className="ml-4 shrink-0 rounded-full bg-orange-500 px-4 py-2 text-xs md:text-sm font-semibold text-black hover:bg-orange-400 hover:scale-105 transition-all">
                      Generate
                    </button>
</div>
</div>
</div>
</div>
</div>

<div className="timeline-step flex flex-col md:flex-row items-start gap-12 md:gap-16 group" data-step-row="2">
<div className="relative w-full md:w-[260px] pl-12 md:pl-16">
<div className="step-marker-wrapper absolute top-2 left-6 md:left-8 -translate-x-1/2 z-20">
<div className="step-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-orange-500/30 transition-opacity duration-500 blur-sm opacity-0"></div>
<div className="step-marker h-4 w-4 rounded-[4px] border transition-all duration-300 relative overflow-hidden border-neutral-700 bg-neutral-900" data-step-marker="2">
<div className="absolute inset-0 bg-orange-500 transition-opacity duration-300 step-fill opacity-0"></div>
</div>
</div>
<h3 className="step-title text-2xl md:text-3xl font-semibold mb-2 transition-colors duration-300 tracking-tight text-neutral-400 text-neutral-50">
                Generate a smart draft
              </h3>
<p className="step-desc text-sm md:text-base max-w-xs transition-colors duration-300">
                Lexora turns your prompt into a clean, structured draft in just
                a few seconds.
              </p>
</div>
<div className="step-card transition-all duration-700 ease-out flex-1 origin-top-left opacity-0 translate-y-12 scale-95">
<div className="rounded-[32px] border border-neutral-800 bg-neutral-900/80 shadow-[0_24px_80px_rgba(0,0,0,0.75)] overflow-hidden group-hover:border-neutral-700 transition-colors duration-500">
<div className="p-8 md:p-10">
<p className="text-sm font-medium text-orange-400 mb-3">
                    Draft generated by Lexora
                  </p>
<h4 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">
                    Launching Lexora: Your new AI writing partner
                  </h4>
<p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                    Creating consistent content shouldn’t mean staring at a
                    blank page. With Lexora, you can turn a simple idea into a
                    polished first draft in seconds.
                  </p>
</div>
</div>
</div>
</div>

<div className="timeline-step flex flex-col md:flex-row items-start gap-12 md:gap-16 group" data-step-row="3">
<div className="relative w-full md:w-[260px] pl-12 md:pl-16">
<div className="step-marker-wrapper absolute top-2 left-6 md:left-8 -translate-x-1/2 z-20">
<div className="step-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-orange-500/30 transition-opacity duration-500 blur-sm opacity-0"></div>
<div className="step-marker h-4 w-4 rounded-[4px] border transition-all duration-300 relative overflow-hidden border-neutral-700 bg-neutral-900" data-step-marker="3">
<div className="absolute inset-0 bg-orange-500 transition-opacity duration-300 step-fill opacity-0"></div>
</div>
</div>
<h3 className="step-title text-2xl md:text-3xl font-semibold mb-2 transition-colors duration-300 tracking-tight text-neutral-400 text-neutral-50">
                Refine with AI edits
              </h3>
<p className="step-desc text-sm md:text-base max-w-xs transition-colors duration-300">
                Highlight any sentence to change tone, improve clarity, or
                adjust the length.
              </p>
</div>
<div className="step-card transition-all duration-700 ease-out flex-1 origin-top-left opacity-0 translate-y-12 scale-95">
<div className="relative rounded-[32px] border border-neutral-800 bg-neutral-900/80 shadow-[0_24px_80px_rgba(0,0,0,0.75)] overflow-visible group-hover:border-neutral-700 transition-colors duration-500">
<div className="p-8 md:p-10">
<div className="inline-block rounded-md bg-orange-500/80 px-3 py-1.5 text-sm font-medium text-black mb-6">
                    You’ve got a solid idea – Lexora makes it sound sharp and
                    clear.
                  </div>

<div className="absolute right-8 top-22 w-64 rounded-2xl bg-neutral-950/95 border border-neutral-800 p-4 text-xs text-neutral-200 shadow-2xl transition-transform hover:scale-105 duration-300">
<div className="mb-3 rounded-md bg-neutral-900/80 px-3 py-2 text-[11px] text-neutral-500">
                      Search action…
                    </div>
<ul className="space-y-2 text-[12px]">
<li className="flex items-center justify-between text-neutral-300">
<span>Change tone</span>
</li>
<li className="flex items-center justify-between text-orange-400">
<span className="">Improve copy</span>
<span className="text-[10px]">↗</span>
</li>
<li className="flex items-center justify-between text-neutral-300">
<span className="">Adjust length</span>
</li>
</ul>
</div>
<p className="text-sm md:text-base text-neutral-300 max-w-xl">
                    Instead of rewriting everything yourself, use Lexora’s smart
                    actions to fine-tune your draft.
                  </p>
</div>
</div>
</div>
</div>

<div className="timeline-step flex flex-col md:flex-row items-start gap-12 md:gap-16 group" data-step-row="4">
<div className="relative w-full md:w-[260px] pl-12 md:pl-16">
<div className="step-marker-wrapper absolute top-2 left-6 md:left-8 -translate-x-1/2 z-20">
<div className="step-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-orange-500/30 transition-opacity duration-500 blur-sm opacity-0"></div>
<div className="step-marker h-4 w-4 rounded-[4px] border transition-all duration-300 relative overflow-hidden border-neutral-700 bg-neutral-900" data-step-marker="4">
<div className="absolute inset-0 bg-orange-500 transition-opacity duration-300 step-fill opacity-0"></div>
</div>
</div>
<h3 className="step-title text-2xl md:text-3xl font-semibold mb-2 transition-colors duration-300 tracking-tight text-neutral-400 text-neutral-50">
                Publish anywhere
              </h3>
<p className="step-desc text-sm md:text-base max-w-xs transition-colors duration-300">
                Share your finished content to any platform with a single click
                or copy.
              </p>
</div>
<div className="step-card transition-all duration-700 ease-out flex-1 origin-top-left opacity-0 translate-y-12 scale-95">
<div className="rounded-[32px] border border-neutral-800 bg-neutral-900/80 shadow-[0_24px_80px_rgba(0,0,0,0.75)] overflow-hidden group-hover:border-neutral-700 transition-colors duration-500">
<div className="p-8 md:p-10">
<div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-neutral-950 border border-neutral-800 px-6 py-5">
<div className="">
<p className="text-sm font-semibold text-neutral-100 mb-1">
                        Ready to go live
                      </p>
<p className="text-xs md:text-sm text-neutral-400">
                        Export to your CMS, copy to clipboard...
                      </p>
</div>
<button className="rounded-full bg-orange-500 px-6 py-2.5 text-xs md:text-sm font-semibold text-black hover:bg-orange-400 transition-colors">
                      Publish
                    </button>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</section>


<section className="relative bg-black text-white py-24 md:py-32 overflow-hidden" id="lenora-advantage">
<div className="max-w-5xl mx-auto px-6 text-center mb-14 md:mb-20">
<h2 className="text-3xl md:text-5xl font-semibold leading-tight text-neutral-50">
          Our unfair advantage
        </h2>
</div>
<div className="max-w-6xl mx-auto px-6 md:px-10" style={{perspective: '1600px'}}>
<div className="relative h-[420px] md:h-[520px] flex items-center justify-center gap-10 md:gap-16">

<div className="adv-card adv-card-left w-[260px] sm:w-[300px] md:w-[340px] h-[340px] md:h-[380px]">
<div className="adv-card-inner">

<div className="adv-card-face adv-card-front rounded-[32px] bg-neutral-900 border border-neutral-800 flex items-center justify-center shadow-[0_28px_90px_rgba(0,0,0,0.85)]">
<p className="text-xl md:text-2xl font-medium tracking-wide text-neutral-100">
                  Other AI Writer
                </p>
</div>

<div className="adv-card-face adv-card-back rounded-[32px] bg-black/90 border border-neutral-800 flex flex-col shadow-[0_28px_90px_rgba(0,0,0,0.85)]">
<div className="h-full w-full rounded-[32px] bg-gradient-to-br from-neutral-900/90 to-black/80 p-7 md:p-8">
<h3 className="text-lg md:text-xl font-semibold mb-5">
                    Other AI Writer
                  </h3>
<ul className="space-y-3 text-xs md:text-sm text-neutral-300">
<li className="flex gap-2">
<span className="mt-1 text-neutral-500">✕</span>
<span>
                        Robotic, generic copy that still needs heavy editing.
                      </span>
</li>
<li className="flex gap-2">
<span className="mt-1 text-neutral-500">✕</span>
<span>
                        Little understanding of your brand voice or audience.
                      </span>
</li>
<li className="flex gap-2">
<span className="mt-1 text-neutral-500">✕</span>
<span>
                        One-size-fits-all templates and rigid prompts.
                      </span>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="adv-card adv-card-right w-[260px] sm:w-[300px] md:w-[340px] h-[340px] md:h-[380px]">
<div className="adv-card-inner">

<div className="adv-card-face adv-card-front rounded-[32px] bg-[#f97316] border border-[#fb923c] flex items-center justify-center shadow-[0_28px_90px_rgba(249,115,22,0.55)]">
<p className="text-xl md:text-2xl font-medium tracking-wide text-white">
                  Lenora
                  <span className="align-super text-xs">™</span>
</p>
</div>

<div className="adv-card-face adv-card-back rounded-[32px] bg-gradient-to-br from-orange-500/15 via-orange-500/5 to-black/95 border border-orange-500/70 flex flex-col shadow-[0_28px_90px_rgba(249,115,22,0.55)]">
<div className="h-full w-full rounded-[32px] bg-gradient-to-br from-orange-500/10 via-black/60 to-black/90 p-7 md:p-8">
<h3 className="text-lg md:text-xl font-semibold mb-5">
                    Lenora
                    <span className="align-super text-xs">™</span>
</h3>
<ul className="space-y-3 text-xs md:text-sm text-neutral-100">
<li className="flex gap-2">
<span className="mt-1 text-orange-400">✔</span>
<span>
                        Content that sounds like your brand, not a bot.
                      </span>
</li>
<li className="flex gap-2">
<span className="mt-1 text-orange-400">✔</span>
<span>
                        Context-aware drafts that learn from previous content.
                      </span>
</li>
<li className="flex gap-2">
<span className="mt-1 text-orange-400">✔</span>
<span>
                        Presets for blogs, emails, and social posts in one
                        place.
                      </span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<style>
      /* Base cards */
      #lenora-advantage .adv-card {
        position: relative;
        opacity: 0;
        transition: opacity 500ms ease-out;
      }

      #lenora-advantage.is-visible .adv-card {
        opacity: 1;
      }

      #lenora-advantage .adv-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: transform 900ms cubic-bezier(0.19, 1, 0.22, 1);
      }

      #lenora-advantage .adv-card-face {
        position: absolute;
        inset: 0;
        backface-visibility: hidden;
      }

      #lenora-advantage .adv-card-back {
        transform: rotateY(180deg);
      }

      /* --- STATE 1: initial, both front faces, tilted inward --- */
      #lenora-advantage.state-1 .adv-card-left .adv-card-inner {
        transform: rotateZ(-6deg) rotateY(-18deg) translateY(0);
      }

      #lenora-advantage.state-1 .adv-card-right .adv-card-inner {
        transform: rotateZ(6deg) rotateY(18deg) translateY(0);
      }

      /* --- STATE 2: spread apart, stronger 3D angle --- */
      #lenora-advantage.state-2 .adv-card-left .adv-card-inner {
        transform: translateX(-40px) rotateY(40deg) rotateZ(-4deg);
      }

      #lenora-advantage.state-2 .adv-card-right .adv-card-inner {
        transform: translateX(40px) rotateY(-40deg) rotateZ(4deg);
      }

      /* --- STATE 3: flip to backs (detailed comparison) --- */
      #lenora-advantage.state-3 .adv-card-left .adv-card-inner,
      #lenora-advantage.state-3 .adv-card-right .adv-card-inner {
        transform: rotateY(180deg);
      }
    </style>


<section className="overflow-visible flex flex-col min-h-[800px] md:pb-44 md:pt-44 text-white bg-black mt-0 mb-0 pt-0 pb-0 relative items-center justify-center" id="lexora-integrations" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 0%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 0%, transparent)'}}>

<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_60%)]"></div>

<div className="absolute flex items-center justify-center animate-[spin_60s_linear_infinite] w-[320px] h-[320px] md:w-[700px] md:h-[700px] pointer-events-none">

<div className="absolute inset-0 rotate-0">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-0">
<div className="w-16 h-16 md:w-24 md:h-24 bg-[#0F0F0F] border border-white/10 rounded-full flex items-center justify-center shadow-2xl animate-[spin_60s_linear_infinite_reverse]">
<svg className="lucide lucide-layers text-neutral-500 w-6 h-6 md:w-8 md:h-8" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
<path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
<path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
</svg>
</div>
</div>
</div>

<div className="absolute inset-0 rotate-[30deg]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[30deg]">
<div className="w-16 h-16 md:w-24 md:h-24 bg-[#0F0F0F] border border-white/10 rounded-full flex items-center justify-center shadow-2xl animate-[spin_60s_linear_infinite_reverse]">
<svg className="lucide lucide-zap text-neutral-500 w-6 h-6 md:w-8 md:h-8" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
</div>
</div>

<div className="absolute inset-0 rotate-[60deg]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[60deg]">
<div className="w-16 h-16 md:w-24 md:h-24 bg-[#0F0F0F] border border-white/10 rounded-full flex items-center justify-center shadow-2xl animate-[spin_60s_linear_infinite_reverse]">
<svg className="lucide lucide-triangle text-neutral-500 w-6 h-6 md:w-8 md:h-8" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
</svg>
</div>
</div>
</div>

<div className="absolute inset-0 rotate-[90deg]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[90deg]">
<div className="w-16 h-16 md:w-24 md:h-24 bg-[#0F0F0F] border border-white/10 rounded-full flex items-center justify-center shadow-2xl animate-[spin_60s_linear_infinite_reverse]">
<svg className="lucide lucide-activity text-neutral-500 w-6 h-6 md:w-8 md:h-8" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
</div>
</div>

<div className="absolute inset-0 rotate-[120deg]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[120deg]">
<div className="w-16 h-16 md:w-24 md:h-24 bg-[#0F0F0F] border border-white/10 rounded-full flex items-center justify-center shadow-2xl animate-[spin_60s_linear_infinite_reverse]">
<svg className="lucide lucide-command text-neutral-500 w-6 h-6 md:w-8 md:h-8" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
</svg>
</div>
</div>
</div>

<div className="absolute inset-0 rotate-[150deg]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[150deg]">
<div className="w-16 h-16 md:w-24 md:h-24 bg-[#0F0F0F] border border-white/10 rounded-full flex items-center justify-center shadow-2xl animate-[spin_60s_linear_infinite_reverse]">
<svg className="lucide lucide-cloud text-neutral-500 w-6 h-6 md:w-8 md:h-8" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19"></path>
<path d="M20 19a3 3 0 1 0-6-6"></path>
<path d="M4 19a5 5 0 1 1 9-9"></path>
</svg>
</div>
</div>
</div>

<div className="absolute inset-0 rotate-180">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-180">
<div className="w-16 h-16 md:w-24 md:h-24 bg-[#0F0F0F] border border-white/10 rounded-full flex items-center justify-center shadow-2xl animate-[spin_60s_linear_infinite_reverse]">
<svg className="lucide lucide-box text-neutral-500 w-6 h-6 md:w-8 md:h-8" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
<path d="m3.3 7 8.7 5 8.7-5"></path>
<path d="M12 22v-9"></path>
</svg>
</div>
</div>
</div>

<div className="absolute inset-0 rotate-[210deg]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[210deg]">
<div className="w-16 h-16 md:w-24 md:h-24 bg-[#0F0F0F] border border-white/10 rounded-full flex items-center justify-center shadow-2xl animate-[spin_60s_linear_infinite_reverse]">
<svg className="lucide lucide-code text-neutral-500 w-6 h-6 md:w-8 md:h-8" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 18 22 12 16 6"></polyline>
<polyline points="8 6 2 12 8 18"></polyline>
</svg>
</div>
</div>
</div>

<div className="absolute inset-0 rotate-[240deg]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[240deg]">
<div className="w-16 h-16 md:w-24 md:h-24 bg-[#0F0F0F] border border-white/10 rounded-full flex items-center justify-center shadow-2xl animate-[spin_60s_linear_infinite_reverse]">
<svg className="lucide lucide-hexagon text-neutral-500 w-6 h-6 md:w-8 md:h-8" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
</div>
</div>
</div>

<div className="absolute inset-0 rotate-[270deg]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[270deg]">
<div className="w-16 h-16 md:w-24 md:h-24 bg-[#0F0F0F] border border-white/10 rounded-full flex items-center justify-center shadow-2xl animate-[spin_60s_linear_infinite_reverse]">
<svg className="lucide lucide-globe text-neutral-500 w-6 h-6 md:w-8 md:h-8" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
</div>
</div>
</div>

<div className="absolute inset-0 rotate-[300deg]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[300deg]">
<div className="w-16 h-16 md:w-24 md:h-24 bg-[#0F0F0F] border border-white/10 rounded-full flex items-center justify-center shadow-2xl animate-[spin_60s_linear_infinite_reverse]">
<svg className="lucide lucide-link text-neutral-500 w-6 h-6 md:w-8 md:h-8" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</svg>
</div>
</div>
</div>

<div className="absolute inset-0 rotate-[330deg]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[330deg]">
<div className="w-16 h-16 md:w-24 md:h-24 bg-[#0F0F0F] border border-white/10 rounded-full flex items-center justify-center shadow-2xl animate-[spin_60s_linear_infinite_reverse]">
<svg className="lucide lucide-cpu text-neutral-500 w-6 h-6 md:w-8 md:h-8" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="6" rx="1" width="6" x="9" y="9"></rect>
<path d="M15 2v2"></path>
<path d="M15 20v2"></path>
<path d="M2 15h2"></path>
<path d="M2 9h2"></path>
<path d="M20 15h2"></path>
<path d="M20 9h2"></path>
<path d="M9 2v2"></path>
<path d="M9 20v2"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="z-10 text-center max-w-3xl mr-auto ml-auto pr-6 pl-6 relative">
<h2 className="text-4xl md:text-6xl font-serif font-medium text-white leading-[1.1] tracking-tight">
          Seamless AI integration with your favorite tools
        </h2>
</div>
</section>
<style>
      /* Slow orbit animation */
      #lexora-integrations .orbit {
        position: relative;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        animation: orbit-rotate 40s linear infinite;
      }

      @keyframes orbit-rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      #lexora-integrations .orbit-item {
        position: absolute;
        top: 50%;
        left: 50%;
        /* radius of circle; tweak for spacing */
        --radius: min(18vh, 11rem);
        transform:
          rotate(var(--angle))
          translateY(calc(-1 * var(--radius)));
      }

      #lexora-integrations .bubble {
        width: clamp(3.5rem, 6vw, 4.75rem);
        height: clamp(3.5rem, 6vw, 4.75rem);
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: radial-gradient(circle at 30% 20%, #3f3f46, #050505);
        box-shadow:
          0 16px 40px rgba(0, 0, 0, 0.85),
          0 0 0 1px rgba(250, 250, 250, 0.06);
        opacity: 0.9;
      }

      #lexora-integrations .bubble::before {
        /* soft inner ring */
        content: "";
        position: absolute;
        inset: 10%;
        border-radius: inherit;
        border: 1px solid rgba(255, 255, 255, 0.03);
        box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.85);
      }

      #lexora-integrations .bubble-icon {
        position: relative;
        font-size: 1.25rem;
        font-weight: 600;
        color: rgba(243, 244, 246, 0.6);
      }

      /* Keep bubbles upright while orbit rotates */
      #lexora-integrations .orbit-item .bubble {
        transform: rotate(calc(-1 * var(--angle)));
      }

      /* Slight slowdown + pause on hover */
      #lexora-integrations:hover .orbit {
        animation-duration: 70s;
      }

      /* Small screens: slightly smaller radius */
      @media (max-width: 640px) {
        #lexora-integrations .orbit-item {
          --radius: 7.5rem;
        }
      }
    </style>

<section className="md:py-32 text-white bg-black mt-0 mb-0 pt-24 pb-24 relative" id="pricing">
<div className="lg:px-8 max-w-6xl mr-auto ml-auto pr-6 pl-6">

<div className="text-center mb-12 md:mb-16 reveal">
<p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange-400 mb-3">
            #PRICING
          </p>
<h2 className="text-3xl md:text-5xl font-semibold leading-tight text-neutral-50">
            Pricing that grows with your content
          </h2>
<p className="mt-3 text-sm md:text-base text-neutral-400 max-w-2xl mx-auto">
            Start small, scale when your publishing cadence and team grow. Every
            plan includes the Lexora editor and AI engine.
          </p>
</div>

<div className="flex justify-center mb-14">
<div className="inline-flex items-center rounded-full bg-neutral-900/80 border border-neutral-700/70 px-1 py-1 text-sm shadow-[0_18px_60px_rgba(0,0,0,0.85)]">
<button className="billing-toggle rounded-full px-6 py-2 bg-orange-500 text-black font-medium shadow-[0_0_0_1px_rgba(248,250,252,0.1)]" data-billing-toggle="monthly" type="button">
              Monthly
            </button>
<button className="billing-toggle rounded-full px-6 py-2 text-neutral-300/80" data-billing-toggle="yearly" type="button">
<span className="mr-2">Yearly</span>
<span className="inline-flex items-center rounded-full bg-orange-500/10 px-2 py-0.5 text-[11px] font-semibold text-orange-400 border border-orange-500/30">
                30% OFF
              </span>
</button>
</div>
</div>

<div className="grid gap-6 md:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_minmax(0,1fr)]">

<div className="rounded-[32px] bg-neutral-950/70 border border-neutral-800 shadow-[0_26px_80px_rgba(0,0,0,0.9)] px-8 py-10 flex flex-col justify-between reveal">
<div>
<h3 className="text-xl mb-2 font-medium">Starter</h3>
<p className="text-sm text-neutral-400 mb-8">
                For independent writers who want Lexora’s help on every draft
                without the team features.
              </p>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<div className="relative h-12 overflow-hidden">
<div className="price-stack flex flex-col transition-transform duration-300 ease-out" data-price-stack="starter" style={{transform: 'translateY(0%)'}}>

<span className="h-12 flex items-center leading-none text-4xl tracking-tight font-medium">
                        $19
                      </span>

<span className="h-12 flex items-center leading-none text-4xl tracking-tight font-medium">
                        $13
                      </span>
</div>
</div>
<span className="text-sm text-neutral-400">/month</span>
</div>
<p className="mt-1 text-xs text-neutral-500">
                  Billed
                  <span className="billing-label">monthly</span>
                  .
                </p>
</div>
</div>
<div className="space-y-6">
<button className="w-full rounded-full bg-neutral-800/80 hover:bg-neutral-700 transition-colors px-6 py-3 text-sm font-medium">
                Get started with Starter
              </button>
<ul className="space-y-2 text-sm text-neutral-300">
<li className="flex items-start gap-2">
<span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-neutral-500"></span>
<span>
                    Lexora editor with AI suggestions on every section.
                  </span>
</li>
<li className="flex items-start gap-2">
<span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-neutral-500"></span>
<span>Up to 8 active projects at a time.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-neutral-500"></span>
<span>25,000 AI-generated words each month.</span>
</li>
</ul>
</div>
</div>

<div className="relative rounded-[32px] bg-gradient-to-b from-orange-500/10 via-orange-500/5 to-black border border-orange-500/70 shadow-[0_30px_110px_rgba(249,115,22,0.6)] px-8 py-10 flex flex-col justify-between overflow-hidden reveal delay-100">
<div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen" style={{backgroundImage: 'radial-gradient(circle at 0 0,rgba(249,115,22,0.16),transparent 55%), radial-gradient(circle at 100% 100%,rgba(249,115,22,0.16),transparent 55%), repeating-linear-gradient(0deg,rgba(249,115,22,0.08),rgba(249,115,22,0.08) 1px,transparent 1px,transparent 3px)'}}></div>
<div className="relative">
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl font-medium">Pro</h3>
<span className="rounded-full border border-orange-500/60 bg-orange-500/15 px-3 py-1 text-[11px] tracking-[0.16em] uppercase text-orange-400 font-medium">
                  Most popular
                </span>
</div>
<p className="text-sm text-neutral-100/80 mb-8">
                Built for content teams that publish often and need shared
                workspaces, approvals, and more control.
              </p>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<div className="relative h-12 overflow-hidden">
<div className="price-stack flex flex-col transition-transform duration-300 ease-out" data-price-stack="pro" style={{transform: 'translateY(0%)'}}>

<span className="h-12 flex items-center leading-none text-4xl tracking-tight font-medium">
                        $49
                      </span>

<span className="h-12 flex items-center leading-none text-4xl tracking-tight font-medium">
                        $39
                      </span>
</div>
</div>
<span className="text-sm text-neutral-400">/month</span>
</div>
<p className="mt-1 text-xs text-neutral-500">
                  Billed
                  <span className="billing-label">monthly</span>
                  , per workspace.
                </p>
</div>
</div>
<div className="relative space-y-6">
<button className="w-full rounded-full bg-orange-500 hover:bg-orange-400 transition-colors px-6 py-3 text-sm font-semibold text-black">
                Upgrade to Pro
              </button>
<ul className="space-y-2 text-sm text-neutral-50/90">
<li className="flex items-start gap-2">
<span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-orange-400"></span>
<span className="">
                    Unlimited projects and brand spaces for your team.
                  </span>
</li>
<li className="flex items-start gap-2">
<span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-orange-400"></span>
<span className="">
                    Up to 100,000 AI-generated words per month.
                  </span>
</li>
<li className="flex items-start gap-2">
<span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-orange-400"></span>
<span className="">
                    Advanced tone controls, templates, and content presets.
                  </span>
</li>
</ul>
</div>
</div>

<div className="rounded-[32px] bg-neutral-950/70 border border-neutral-800 shadow-[0_26px_80px_rgba(0,0,0,0.9)] px-8 py-10 flex flex-col justify-between reveal delay-200">
<div className="">
<h3 className="text-xl mb-2 font-medium">Enterprise</h3>
<p className="text-sm text-neutral-400 mb-8">
                For organizations that need custom workflows, tighter security,
                and a partner on the Lexora side.
              </p>
<div className="mb-6">
<p className="text-3xl md:text-4xl font-semibold tracking-tight mb-1">
                  Contact us
                </p>
<p className="text-xs text-neutral-500">
                  We’ll design a plan that matches your volume, stack, and
                  review process.
                </p>
</div>
</div>
<div className="space-y-6">
<button className="w-full rounded-full bg-neutral-800/80 hover:bg-neutral-700 transition-colors px-6 py-3 text-sm font-medium">
                Talk to sales
              </button>
<ul className="space-y-2 text-sm text-neutral-300">
<li className="flex items-start gap-2">
<span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-neutral-500"></span>
<span className="">
                    Unlimited workspaces, users, and documents.
                  </span>
</li>
<li className="flex items-start gap-2">
<span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-neutral-500"></span>
<span className="">
                    Single sign-on (SSO) and security review.
                  </span>
</li>
<li className="flex items-start gap-2">
<span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-neutral-500"></span>
<span className="">
                    Custom integrations, API access, and SLAs.
                  </span>
</li>
</ul>
</div>
</div>
</div>

<div className="mt-12 flex justify-center">
<button className="hover:bg-neutral-800 md:px-10 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] text-sm font-medium text-neutral-100 bg-neutral-900/90 border-neutral-700 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_20px_70px_rgba(0,0,0,0.85)]">
            View all billing details
          </button>
</div>
</div>
</section>


<footer className="bg-black border-white/10 border-t pt-20 pb-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
<div className="max-w-lg reveal">
<h2 className="text-5xl lg:text-6xl font-serif tracking-tight mb-8">
              Ready to create?
            </h2>
<p className="text-lg text-neutral-400 mb-8">
              Join thousands of writers who have doubled their output with
              Lexora.
            </p>
<div className="flex gap-4">
<button className="group flex transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(255,255,255,0.35)] active:scale-[0.98] overflow-hidden font-medium text-black bg-white h-12 rounded-full pr-8 pl-8 relative shadow-[0_0_30px_rgba(255,255,255,0.15)] gap-x-2 gap-y-2 items-center justify-center">
<span className="absolute inset-0 -translate-x-full group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-neutral-400/20 to-transparent z-0"></span>
<svg className="relative z-10 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:rotate-6" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M12 20h9"></path>
<path className="" d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
</svg>
<span className="z-10 relative">Start 14-day trial</span>
</button>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24 reveal delay-200">
<div className="">
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li>
<a className="hover:text-white transition-colors" href="#">
                    Features
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Integrations
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Pricing
                  </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li>
<a className="hover:text-white transition-colors" href="#">
                    About
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Blog
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Careers
                  </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li>
<a className="hover:text-white transition-colors" href="#">
                    Privacy
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Terms
                  </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                    Security
                  </a>
</li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
<svg className="text-white" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
</div>
<span className="text-sm text-neutral-500">© 2024 Lexora Inc.</span>
</div>
<div className="flex gap-6 text-neutral-500">
<a className="hover:text-white" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="hover:text-white" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a className="hover:text-white" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
