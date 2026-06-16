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
        


            const heroCta = document.querySelector('#hero button');
                    if (heroCta) {
                      heroCta.addEventListener('click', () => {
                        const spotlight = document.createElement('div');
                        spotlight.className =
                          'pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.18),transparent_55%)] opacity-0 transition-opacity duration-500';
                        document.body.appendChild(spotlight);
                        requestAnimationFrame(() => (spotlight.style.opacity = '1'));
                        setTimeout(() => {
                          spotlight.style.opacity = '0';
                          setTimeout(() => spotlight.remove(), 600);
                        }, 400);
                      });
                    }
          


    // OmnixAI Services Section JS
            // - Fades stat cards up on scroll
            // - Animates all numbers in the section when it enters view

            document.addEventListener("DOMContentLoaded", () => {
              const section = document.querySelector("#omnixai-services");
              if (!section) return;

              const statCards = section.querySelectorAll(".stat-card");
              const numbers = section.querySelectorAll(".stat-number");

              // Prepare initial styles for cards and numbers
              statCards.forEach(card => {
                card.style.opacity = "0";
                card.style.transform = "translateY(20px)";
              });

              numbers.forEach(num => {
                const target = parseFloat(num.dataset.target || "0");
                const suffix = num.dataset.suffix || "";
                num.textContent = `0${suffix}`;
                num.dataset.animated = "false";
              });

              // Helper: animate a single number element
              function animateNumber(el, duration = 1400) {
                if (el.dataset.animated === "true") return;

                const target = parseFloat(el.dataset.target || "0");
                const suffix = el.dataset.suffix || "";
                let start = null;

                const easeOutQuad = t => t * (2 - t);

                function step(timestamp) {
                  if (!start) start = timestamp;
                  const progress = Math.min((timestamp - start) / duration, 1);
                  const eased = easeOutQuad(progress);

                  const current = Math.floor(eased * target);
                  el.textContent = `${current}${suffix}`;

                  if (progress < 1) {
                    window.requestAnimationFrame(step);
                  } else {
                    el.textContent = `${target}${suffix}`;
                    el.dataset.animated = "true";
                  }
                }

                window.requestAnimationFrame(step);
              }

              // Observer: triggers when the section is in view
              const observer = new IntersectionObserver(
                entries => {
                  entries.forEach(entry => {
                    if (!entry.isIntersecting) return;

                    // Fade up stat cards
                    statCards.forEach(card => {
                      card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
                      card.style.opacity = "1";
                      card.style.transform = "translateY(0)";
                    });

                    // Animate numbers
                    numbers.forEach((num, index) => {
                      const delay = 150 * index;
                      setTimeout(() => {
                        animateNumber(num, 1300 + index * 120);
                      }, delay);
                    });

                    // Only run once
                    observer.unobserve(section);
                  });
                },
                {
                  threshold: 0.3,
                }
              );

              observer.observe(section);
            });
  


          const featureCards = document.querySelectorAll('#feature article');
          featureCards.forEach((card) => {
            card.addEventListener('mouseenter', () => {
              card.style.transform = 'translateY(-2px)';
            });
            card.addEventListener('mouseleave', () => {
              card.style.transform = 'translateY(0)';
            });
          });
        


          document.addEventListener("DOMContentLoaded", () => {
            const stepButtons = Array.from(
              document.querySelectorAll("#process-steps [data-step]")
            );
            const panels = Array.from(
              document.querySelectorAll("[data-step-panel]")
            );
            if (!stepButtons.length || !panels.length) return;

            function setActiveStep(stepId) {
              stepButtons.forEach((btn) => {
                const isActive = btn.dataset.step === stepId;
                btn.classList.toggle("is-active", isActive);
              });

              panels.forEach((panel) => {
                const match = panel.dataset.stepPanel === stepId;
                panel.classList.toggle("hidden", !match);
              });
            }

            stepButtons.forEach((btn) => {
              btn.addEventListener("click", () => {
                setActiveStep(btn.dataset.step);
              });
            });

            // default active step
            setActiveStep("2");
          });
        


    (function() {
        const track = document.getElementById('cards-track');
        if(!track) return;
        
        const cards = Array.from(track.querySelectorAll('.testimonial-card'));
        const totalCards = cards.length;
        
        // Slight rotations to create a "messy stack" look
        const rotations = [-2, 2, -1.5, 1.5];
        
        function handleScroll() {
            const rect = track.getBoundingClientRect();
            const viewHeight = window.innerHeight;
            
            // We want the animation to play out as the track scrolls through the viewport.
            // Start: When the top of the track hits the top of the viewport (or slightly before)
            // End: When the bottom of the track hits the bottom of the viewport
            
            // Calculate scroll progress relative to the track container height
            const scrollDist = -rect.top; 
            const scrollableHeight = rect.height - viewHeight + 200; // +200 buffer
            
            let progress = scrollDist / scrollableHeight; 
            // Clamp progress between 0 and 1
            progress = Math.max(0, Math.min(1, progress));

            // We have N cards. We want them to transition in sequence.
            // Use 30% segment for each new card entry to allow overlap
            const segment = 0.28; 
            
            cards.forEach((card, i) => {
                if (i === 0) {
                    // Base card logic:
                    // It fades out and pushes back as the scroll progresses past 0
                    // But stays visible as the "bottom" of the stack for a while
                    const fadeP = Math.min(1, progress * 1.5); // fades faster
                    const scale = 1 - (progress * 0.1); 
                    const y = progress * 40; 
                    const rot = rotations[0] * (1 - progress);
                    
                    card.style.transform = `translateY(${y}px) scale(${scale}) rotate(${rot}deg)`;
                    // Don't fade completely, just dim
                    card.style.opacity = 1 - (progress * 0.6);
                    card.style.zIndex = 10;
                    card.style.filter = `brightness(${1 - progress * 0.5}) blur(${progress * 2}px)`;
                } else {
                    // Incoming cards logic:
                    // Trigger point for this card
                    const triggerStart = (i - 1) * segment;
                    const triggerEnd = triggerStart + segment + 0.1;
                    
                    let localP = (progress - triggerStart) / (triggerEnd - triggerStart);
                    localP = Math.max(0, Math.min(1, localP));
                    
                    // Ease the transition
                    const ease = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                    const p = ease(localP);
                    
                    // Determine if THIS card is being covered by the NEXT one
                    const nextTrigger = i * segment;
                    let retreatP = 0;
                    if (progress > nextTrigger) {
                         retreatP = (progress - nextTrigger) / segment;
                         retreatP = Math.max(0, Math.min(1, retreatP));
                    }
                    
                    // Entry Animation (coming from bottom)
                    const startY = 120; // px down
                    const startScale = 0.9;
                    const startRot = rotations[i] * 2;
                    
                    // Active State (fully visible)
                    const activeY = 0;
                    const activeScale = 1;
                    const activeRot = rotations[i];
                    
                    // Retreat Animation (going back/dimming)
                    const retreatY = 30; // push down slightly
                    const retreatScale = 0.95;
                    
                    // Interpolate
                    // 1. Entry Phase
                    let currentY = startY - ((startY - activeY) * p);
                    let currentScale = startScale + ((activeScale - startScale) * p);
                    let currentRot = startRot - ((startRot - activeRot) * p);
                    let currentOpacity = p;
                    
                    // 2. Retreat Phase (additive)
                    if (retreatP > 0) {
                        currentY += (retreatY * retreatP);
                        currentScale -= ((activeScale - retreatScale) * retreatP);
                        currentOpacity -= (retreatP * 0.6); // Fade but keep visible
                        card.style.filter = `brightness(${1 - retreatP * 0.5}) blur(${retreatP * 2}px)`;
                    } else {
                        card.style.filter = `brightness(1) blur(0px)`;
                    }
                    
                    card.style.transform = `translateY(${currentY}px) scale(${currentScale}) rotate(${currentRot}deg)`;
                    card.style.opacity = currentOpacity;
                    card.style.zIndex = 10 + i;
                    
                    // Glow effect for the active card
                    if (p > 0.8 && retreatP < 0.2) {
                        card.style.boxShadow = '0 25px 60px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(16, 185, 129, 0.2)';
                        card.style.borderColor = 'rgba(52, 211, 153, 0.5)';
                    } else {
                        card.style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.5)';
                        card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    }
                }
            });
        }

        window.addEventListener('scroll', () => requestAnimationFrame(handleScroll));
        window.addEventListener('resize', handleScroll);
        
        // Initial call to set positions
        handleScroll();
    })();
  


      // OmnixAI bouncing tags, like the canvas ball loop but for DOM elements
      document.addEventListener("DOMContentLoaded", () => {
        const field = document.querySelector(".suitable-card .tags-field");
        if (!field) return;

        const rectField = field.getBoundingClientRect();
        const chips = Array.from(field.querySelectorAll(".tag-chip"));

        const states = chips.map(chip => {
          const chipRect = chip.getBoundingClientRect();

          // initial position from inline style (left/top), fallback to offset
          const baseLeft =
            parseFloat(chip.style.left || chip.offsetLeft || 0);
          const baseTop =
            parseFloat(chip.style.top || chip.offsetTop || 0);

          // random directions & speed
          const speedX = (Math.random() * 0.8 + 0.3) * (Math.random() < 0.5 ? -1 : 1);
      const speedY = (Math.random() * 0.8 + 0.3) * (Math.random() < 0.5 ? -1 : 1);


          const rotation = parseFloat(chip.dataset.rotation || "0");

          return {
            el: chip,
            x: baseLeft,
            y: baseTop,
            w: chipRect.width,
            h: chipRect.height,
            vx: speedX,
            vy: speedY,
            rotation
          };
        });

        function loop() {
          const fieldRect = field.getBoundingClientRect();
          const maxX = fieldRect.width;
          const maxY = fieldRect.height;

          states.forEach(s => {
            s.x += s.vx;
            s.y += s.vy;

            // bounce on vertical walls
            if (s.x < 0) {
              s.x = 0;
              s.vx *= -1;
            } else if (s.x + s.w > maxX) {
              s.x = maxX - s.w;
              s.vx *= -1;
            }

            // bounce on horizontal walls
            if (s.y < 0) {
              s.y = 0;
              s.vy *= -1;
            } else if (s.y + s.h > maxY) {
              s.y = maxY - s.h;
              s.vy *= -1;
            }

            s.el.style.left = s.x + "px";
            s.el.style.top = s.y + "px";
            s.el.style.transform = `rotate(${s.rotation}deg)`;
          });

          requestAnimationFrame(loop);
        }

        requestAnimationFrame(loop);
      });
    


      document.addEventListener("DOMContentLoaded", () => {
        const section = document.getElementById("process");
        const steps = document.querySelectorAll(".process-step");
        const progress = document.getElementById("processProgress");
        const card = document.getElementById("processContent");
        const title = document.getElementById("processTitle");
        const text = document.getElementById("processText");

        const data = {
          1: {
            title: "Discovery & Alignment",
            text: "We start by understanding your goals, workflows, and constraints. Together we identify the highest-impact opportunities where AI can move the needle for your team."
          },
          2: {
            title: "Design the Right Solution",
            text: "We design a tailored strategy—AI copilot, automation engine, or analytics layer—mapping data flows, user journeys, and guardrails around your existing stack."
          },
          3: {
            title: "Build, Test & Refine",
            text: "We develop your AI workflows, plug into your tools, and iterate quickly with real data. Each cycle improves speed, reliability, and quality of outcomes."
          },
          4: {
            title: "Launch, Learn, and Optimize",
            text: "Once live, we monitor adoption and impact. From there we refine prompts, UX, and logic so your AI system keeps getting smarter and your team keeps getting faster."
          }
        };

        function setActiveStep(stepId) {
          // highlight step
          steps.forEach(s => s.classList.toggle("active", s.dataset.step === stepId));

          // animate progress bar (0%, 33%, 66%, 100%)
          const idx = parseInt(stepId, 10) - 1;
          const percent = idx === 0 ? 0 : idx * 33.33;
          progress.style.width = percent + "%";

          // animate card swap
          card.classList.remove("animate-swap"); // restart animation
          void card.offsetWidth;                 // force reflow
          card.classList.add("animate-swap");

          // fade content inside card
          title.style.opacity = 0;
          text.style.opacity = 0;

          setTimeout(() => {
            title.textContent = data[stepId].title;
            text.textContent = data[stepId].text;
            title.style.opacity = 1;
            text.style.opacity = 1;
          }, 180);
        }

        steps.forEach(step => {
          step.addEventListener("click", () => {
            setActiveStep(step.dataset.step);
          });
        });

        // Scroll trigger for the whole section
        if ("IntersectionObserver" in window) {
          const observer = new IntersectionObserver(
            entries => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  section.classList.add("in-view");
                  // animate to default step once in view
                  setActiveStep("4"); // or "1" if you want to start at 1
                  observer.disconnect();
                }
              });
            },
            { threshold: 0.25 }
          );
          observer.observe(section);
        } else {
          // Fallback: just show it
          section.classList.add("in-view");
          setActiveStep("4");
        }
      });
    


      document.addEventListener("DOMContentLoaded", () => {
        const section = document.querySelector("#testimonials");
        if (!section) return;

        const cards = Array.from(section.querySelectorAll(".testimonial-item"));
        if (!cards.length) return;

        // Base z-index so lower cards naturally sit above previous ones
        cards.forEach((card, index) => {
          card.style.zIndex = 10 + index;
        });

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;

              // Remove state from all, then set on the one in view
              cards.forEach((card) => card.classList.remove("is-active"));
              entry.target.classList.add("is-active");
            });
          },
          {
            threshold: 0.5,
            // Focus on the middle viewport band, so it swaps nicely as you scroll
            rootMargin: "-15% 0px -45% 0px",
          }
        );

        cards.forEach((card) => observer.observe(card));
      });
    


  const card = document.querySelector('.tilt-card');

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // tilt angle
    const rotateY = ((centerX - x) / centerX) * 10;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  });

  // Smooth transition reset
  card.style.transition = "transform 0.25s ease";



  (function () {
    const container = document.getElementById('hero-media');
    const card = document.querySelector('.draggable-card');
    if (!container || !card) return;

    let dragging = false;
    let startX = 0;
    let startY = 0;
    let cardStartX = 0;
    let cardStartY = 0;

    card.style.transition = 'transform 0.15s ease-out';

    card.addEventListener('pointerdown', (e) => {
      dragging = true;
      card.setPointerCapture(e.pointerId);

      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();

      startX = e.clientX;
      startY = e.clientY;

      cardStartX = cardRect.left - containerRect.left;
      cardStartY = cardRect.top - containerRect.top;

      // remove right/bottom so left/top control the position
      card.style.right = 'auto';
      card.style.bottom = 'auto';
    });

    card.addEventListener('pointermove', (e) => {
      if (!dragging) return;

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();

      let newX = cardStartX + dx;
      let newY = cardStartY + dy;

      const maxX = containerRect.width - cardRect.width;
      const maxY = containerRect.height - cardRect.height;

      if (newX < 0) newX = 0;
      if (newY < 0) newY = 0;
      if (newX > maxX) newX = maxX;
      if (newY > maxY) newY = maxY;

      card.style.left = `${newX}px`;
      card.style.top = `${newY}px`;
    });

    function stopDrag(e) {
      if (!dragging) return;
      dragging = false;
      try { card.releasePointerCapture(e.pointerId); } catch (_) {}
    }

    card.addEventListener('pointerup', stopDrag);
    card.addEventListener('pointercancel', stopDrag);
  })();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="aura-background-component top-0 w-full h-screen -z-10 fixed" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="EET25BiXxR2StNXZvAzF"></div>

</div>
</div>
<div className="min-h-screen text-slate-50">

<header className="fixed top-0 inset-x-0 z-40 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-neutral-950/40">
<div className="flex gap-4 sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 gap-x-4 gap-y-4 items-center justify-between">

<div className="flex items-center gap-3">
<div className="flex bg-center mix-blend-overlay w-32 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/779bdf46-0c67-4bf9-a9fa-b208a3e9d5ba_1600w.png)] bg-cover rounded-xl hue-rotate-60 items-center justify-center">
<span className="icon-[solar--atom-bold-duotone] text-base text-slate-950"></span>
</div>
<div className="flex flex-col">
</div>
</div>

<nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 sm:flex">
<a className="transition hover:text-emerald-400" href="#hero">Home</a>
<a className="transition hover:text-emerald-400" href="#feature">Platform</a>
<a className="transition hover:text-emerald-400" href="#testimonial">Stories</a>
<a className="transition hover:text-emerald-400" href="#pricing">Plans</a>
<a className="transition hover:text-emerald-400" href="#footer">Company</a>
</nav>

<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<button className="apple-pill-button relative inline-flex flex-none items-center gap-2 rounded-full bg-white text-sm font-semibold text-slate-900 px-6 py-2.5 shadow-lg transition-all duration-300 ease-out overflow-visible">
<span className="relative z-10">Start trial</span>
<svg className="relative z-10 transition-transform duration-300 ease-out" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7l9.2 9.2M17 7v10H7"></path></svg>

<div className="absolute inset-0 rounded-full bg-white opacity-0 blur-xl transition-all duration-300 ease-out" style={{transform: 'translateY(4px)'}}></div>
</button>
<style>
    .apple-pill-button {
      box-shadow:
        0 2px 8px rgba(0, 0, 0, 0.08),
        0 1px 2px rgba(0, 0, 0, 0.04);
      transform: translateY(0px);
    }

    .apple-pill-button:hover {
      transform: translateY(-2px);
      box-shadow:
        0 4px 12px rgba(0, 0, 0, 0.12),
        0 2px 4px rgba(0, 0, 0, 0.06);
      animation: microBounce 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    .apple-pill-button:hover>div {
      opacity: 0.3;
      transform: translateY(2px);
      filter: blur(12px);
    }

    .apple-pill-button:hover svg {
      transform: translate(2px, -2px);
    }

    .apple-pill-button:active {
      transform: translateY(-1px) scale(0.98);
      transition-duration: 0.1s;
    }

    @keyframes microBounce {
      0% {
        transform: translateY(0px);
      }

      40% {
        transform: translateY(-3px);
      }

      60% {
        transform: translateY(-1.5px);
      }

      100% {
        transform: translateY(-2px);
      }
    }
  </style>
</div>
</div>
</header>
<section className="overflow-visible min-h-screen flex flex-col sm:px-8 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-16 pl-4 relative justify-center" id="hero">

<div className="pointer-events-none absolute inset-0 opacity-40">
<div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.22),transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),transparent_55%)]">
</div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.9)_1px,transparent_1px)] bg-[size:4rem_4rem]">
</div>
</div>

<div className="z-10 grid gap-10 lg:grid-cols-2 lg:items-center relative gap-x-10 gap-y-10">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-black/40 px-3 py-1 text-xs font-medium text-emerald-200/90 shadow shadow-emerald-500/30 backdrop-blur">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 ring-2 ring-emerald-400/50"></span>
          Real-time automation engine · v2.8
        </div>
<div className="space-y-4">
<h1 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-slate-50 tracking-tight">
            Welcome to
            <span className="text-emerald-400">OmnixAI</span>
</h1>
<p className="text-2xl italic text-slate-300 tracking-tight">
            Built for the New Era of Automation.
          </p>
</div>
<p className="text-lg text-slate-300 max-w-xl">
          We help brands accelerate growth with autonomous AI systems
          engineered for speed, clarity, and impact.
        </p>
<div className="flex flex-wrap items-center gap-4">

<button className="btn-particles group relative inline-flex items-center gap-3 rounded-full bg-slate-900/80 border border-emerald-400/20 px-6 py-2 text-sm font-semibold text-slate-100 shadow-[0_0_28px_rgba(16,185,129,0.35)] shadow-inner backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:border-emerald-400/50" style={{animation: 'border-flow 2s linear infinite'}}>
<span className="pointer-events-none absolute inset-0 rounded-full bg-emerald-500/10 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
<span className="pointer-events-none absolute inset-0 rounded-full border border-emerald-400/40" style={{animation: 'border-glow 2s ease-in-out infinite'}}></span>
<span className="">Launch OmnixAI</span>
<span className="icon-[solar--alt-arrow-right-bold-duotone] text-lg text-emerald-300 transition-transform duration-300 group-hover:translate-x-1"></span>
<span className="particle"></span>
<span className="particle"></span>
<span className="particle"></span>
<span className="particle"></span>
<span className="particle"></span>
<span className="particle"></span>
<style>
                    @keyframes border-flow {
                      0% { border-color: rgba(52, 211, 153, 0.2); box-shadow: inset 0 0 20px rgba(16, 185, 129, 0.2), 0 0 28px rgba(16, 185, 129, 0.35); }
                      50% { border-color: rgba(52, 211, 153, 0.6); box-shadow: inset 0 0 30px rgba(16, 185, 129, 0.4), 0 0 40px rgba(16, 185, 129, 0.55); }
                      100% { border-color: rgba(52, 211, 153, 0.2); box-shadow: inset 0 0 20px rgba(16, 185, 129, 0.2), 0 0 28px rgba(16, 185, 129, 0.35); }
                    }
                    @keyframes border-glow {
                      0%, 100% { opacity: 0.3; filter: blur(1px); }
                      50% { opacity: 0.8; filter: blur(2px); }
                    }
                    @keyframes scan-line {
                      0% { top: 0%; opacity: 0; }
                      15% { opacity: 1; }
                      85% { opacity: 1; }
                      100% { top: 100%; opacity: 0; }
                    }
                    @keyframes float-slow {
                      0%, 100% { transform: translateY(0px); }
                      50% { transform: translateY(-10px); }
                    }
                  </style>
</button>

<a className="inline-flex items-center gap-2 hover:text-white hover:bg-white/10 transition sm:text-base text-sm font-medium text-white/80 bg-white/5 rounded-full ring-white/10 ring-1 pt-2 pr-5 pb-2 pl-5 backdrop-blur-md" href="#">
<svg className="lucide lucide-play h-5 w-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z">
</path>
</svg>
            See it in action
          </a>
</div>
</div>

<div className="flex lg:mt-0 mt-10 relative items-center justify-center">

<div className="absolute -left-4 lg:-left-12 top-16 z-30 hidden lg:block animate-[float-slow_5s_ease-in-out_infinite]" style={{animationDelay: '0.5s'}}>
<div className="group flex flex-col gap-2 rounded-2xl border border-emerald-500/20 bg-slate-900/80 backdrop-blur-xl p-3 shadow-2xl shadow-emerald-900/20 transition-all hover:border-emerald-500/40">
<div className="flex items-center gap-3">
<div className="flex -space-x-2 overflow-hidden">
<img alt="Agent 1" className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90ec73f0-6fd3-4d0c-922c-fcc592c983df_320w.webp"/>
<img alt="Agent 2" className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/986db8ed-1c5d-42fb-8c1d-4b3716d2e317_320w.jpg"/>
</div>
<div>
<div className="text-xs font-medium text-slate-200">Agents Active</div>
<div className="flex items-center gap-1.5">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-mono text-emerald-400">Optimizing...</span>
</div>
</div>
</div>
</div>
</div>

<div className="tilt-card relative w-full max-w-md sm:max-w-lg lg:max-w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[16/10] rounded-[3rem] overflow-hidden shadow-xl bg-neutral-50/10 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] border border-emerald-400/20" style={{transition: 'transform 0.25s', transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'}}>

<div className="absolute inset-0 rounded-[3rem] bg-[conic-gradient(from_120deg_at_50%_50%,#22c55e,#0ea5e9,#22c55e,#a855f7,#22c55e)] opacity-60 blur-3xl">
</div>

<div className="sm:inset-4 lg:inset-6 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00cebdd2-fa5a-476a-854f-4d10dca762e9_800w.jpg)] bg-cover rounded-[2rem] absolute top-3 right-3 bottom-3 left-3 shadow-[0_0_80px_rgba(16,185,129,0.65)]">
</div>

<div className="pointer-events-none absolute inset-4 lg:inset-6 flex flex-col justify-between p-4 lg:p-6">

<div className="flex justify-between w-full opacity-60">
<div className="w-12 h-12 border-t-2 border-l-2 border-emerald-400/70 rounded-tl-2xl"></div>
<div className="w-12 h-12 border-t-2 border-r-2 border-emerald-400/70 rounded-tr-2xl"></div>
</div>

<div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[2rem]">
<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_rgba(52,211,153,0.8)] animate-[scan-line_3s_linear_infinite]"></div>
</div>

<div className="flex justify-between w-full items-end z-10">
<div className="w-12 h-12 border-b-2 border-l-2 border-emerald-400/60 rounded-bl-2xl opacity-60"></div>

<div className="mb-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-emerald-500/30 text-[11px] tracking-wider font-mono text-emerald-300 flex items-center gap-2 shadow-lg">
<svg className="w-3 h-3 animate-spin text-emerald-400" fill="none" viewbox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path></svg>
                 SYSTEM ONLINE
              </div>
<div className="w-12 h-12 border-b-2 border-r-2 border-emerald-400/60 rounded-br-2xl opacity-60"></div>
</div>
</div>

<div className="pointer-events-none absolute inset-0 rounded-[3rem] border border-emerald-300/40"></div>
</div>

<div className="draggable-card cursor-grab active:cursor-grabbing select-none sm:max-w-sm sm:p-5 bg-slate-700/50 w-full max-w-xs border-emerald-500/30 border rounded-3xl pt-4 pr-4 pb-4 pl-4 absolute top-2/3 right-4 shadow-lg backdrop-blur-md [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]" id="info-card">
<div className="sm:h-40 overflow-hidden flex bg-neutral-950/80 w-full h-32 rounded-2xl relative items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>

<div className="relative z-10 flex items-center justify-center px-6 py-3 rounded-2xl bg-gradient-to-b from-neutral-800 via-neutral-900 to-black shadow-emerald-500/40 shadow-md border border-neutral-700/80">
<span className="text-base sm:text-lg tracking-tight font-medium text-neutral-100">Loading</span>
</div>

<div className="pointer-events-none absolute inset-x-4 flex flex-col justify-between h-24 sm:h-28">

<div className="relative h-0.5 bg-neutral-800">
<div className="absolute inset-x-10 h-0.5 bg-neutral-800"></div>
<div className="absolute left-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neutral-900"></div>
<div className="absolute right-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neutral-900"></div>

<div className="absolute left-3 top-0 h-0.5 w-8 bg-gradient-to-r from-fuchsia-400 to-sky-400 rounded-full animate-[bus-move-left_2.6s_linear_infinite]"></div>

<div className="absolute right-3 top-0 h-0.5 w-8 bg-gradient-to-r from-sky-400 to-fuchsia-400 rounded-full animate-[bus-move-right_2.6s_linear_infinite]"></div>
</div>

<div className="relative h-0.5 bg-neutral-800">
<div className="absolute inset-x-10 h-0.5 bg-neutral-800"></div>
<div className="absolute left-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neutral-900"></div>
<div className="absolute right-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neutral-900"></div>

<div className="absolute left-5 top-0 h-0.5 w-8 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full animate-[bus-move-left_3s_linear_infinite]"></div>

<div className="absolute right-5 top-0 h-0.5 w-8 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full animate-[bus-move-right_3s_linear_infinite]"></div>
</div>

<div className="relative h-0.5 bg-neutral-800">
<div className="absolute inset-x-10 h-0.5 bg-neutral-800"></div>
<div className="absolute left-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neutral-900"></div>
<div className="absolute right-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neutral-900"></div>

<div className="absolute left-7 top-0 h-0.5 w-8 bg-gradient-to-r from-yellow-300 to-emerald-400 rounded-full animate-[bus-move-left_3.4s_linear_infinite]"></div>

<div className="absolute right-7 top-0 h-0.5 w-8 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full animate-[bus-move-right_3.4s_linear_infinite]"></div>
</div>
</div>

<div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -ml-16 flex flex-col justify-between h-20 sm:h-24">
<div className="w-2 h-1.5 rounded-full bg-neutral-600 shadow-inner"></div>
<div className="w-2 h-1.5 rounded-full bg-neutral-600 shadow-inner"></div>
<div className="w-2 h-1.5 rounded-full bg-neutral-600 shadow-inner"></div>
</div>

<div className="pointer-events-none absolute left-1/2 -translate-x-1/2 ml-16 flex flex-col justify-between h-20 sm:h-24">
<div className="w-2 h-1.5 rounded-full bg-neutral-600 shadow-inner"></div>
<div className="w-2 h-1.5 rounded-full bg-neutral-600 shadow-inner"></div>
<div className="w-2 h-1.5 rounded-full bg-neutral-600 shadow-inner"></div>
</div>
<style>
              @keyframes bus-move-left {
                0% { transform: translateX(0); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateX(110%); opacity: 0; }
              }
              @keyframes bus-move-right {
                0% { transform: translateX(0); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateX(-110%); opacity: 0; }
              }
            </style>
</div>
</div>
</div>
</div>
</section>
</div>

<section className="fade-in fade-in-delay-4 sm:pt-2 sm:pb-2 z-10 mt-0 pt-8 pb-8 relative items-center" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12"></div>

<div className="overflow-hidden relative" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>

<div className="z-10 pointer-events-none bg-gradient-to-r from-black via-black/80 to-transparent w-20 absolute top-0 bottom-0 left-0" style={{visibility: 'hidden'}}></div>

<div className="ticker-track flex pt-2 pb-2 gap-x-16 gap-y-16 items-center">

<div className="flex shrink-0 gap-x-20 gap-y-16 items-center">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-3xl font-bold tracking-tighter font-bricolage">
                        TechFlow
                      </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-3xl font-bold tracking-tighter font-bricolage">
                        Nexus Labs
                      </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-3xl font-bold tracking-tighter font-bricolage">
                        DataSync
                      </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-3xl font-bold tracking-tighter font-bricolage">
                        VisionCorp
                      </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-3xl font-bold tracking-tighter font-bricolage">
                        CloudBase
                      </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-3xl font-bold tracking-tighter font-bricolage">
                        InnovateTech
                      </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter">
                        FlowState
                      </span>
</div>
</div>

<div className="flex items-center gap-16 shrink-0">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">
                        TechFlow
                      </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter font-bricolage">
                        Nexus Labs
                      </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-merriweather">
                        DataSync
                      </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif">
                        VisionCorp
                      </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-playfair">
                        CloudBase
                      </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">
                        InnovateTech
                      </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter">
                        FlowState
                      </span>
</div>
</div>
</div>
</div>
</div>
<style className="">
              @keyframes ticker {
                  0% {
                      transform: translateX(0);
                  }

                  100% {
                      transform: translateX(-100%);
                  }
              }

              .ticker-track {
                  animation: ticker 40s linear infinite;
                  width: calc(200% + 16px);
              }

              .ticker-track:hover {
                  animation-play-state: paused;
              }
            </style>
</section>



<section className="text-white bg-neutral-950 pt-24 pb-24 relative" id="omnixai-services">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<h2 className="text-3xl md:text-4xl font-semibold leading-tight text-center max-w-4xl mx-auto">
      From
      <span className="text-emerald-400">intelligent automation</span>
      to cutting-edge AI,
      <em className="font-medium">our solutions unlock tomorrow.</em>
</h2>
<div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="relative">
<div className="service-card relative overflow-hidden rounded-3xl bg-[#0f2a22] shadow-xl">
<img alt="AI Visual" className="w-full h-full object-cover rounded-3xl hue-rotate-0 saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8b37b54b-5b36-4082-9d67-b78a411b0aa3_800w.webp"/>

<div className="stripes-overlay absolute inset-0 pointer-events-none"></div>

<div className="absolute bottom-6 left-8">
<p className="stat-number text-4xl font-bold md:text-7xl" data-animated="false" data-suffix="K+" data-target="32">0K+</p>
<p className="text-lg opacity-80">Completed Deployments</p>
</div>
</div>
</div>

<div className="flex flex-col gap-8">
<p className="leading-relaxed text-lg text-neutral-300">
          We build intelligent systems that help companies operate
          faster, automate safely, and scale to their full potential
          using AI-driven workflows.
        </p>
<div className="grid grid-cols-2 gap-6">

<div className="stat-card bg-white/5 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-md backdrop-blur-xl" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.4s, transform 0.4s', position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<p className="stat-number text-4xl font-bold" data-animated="false" data-suffix="K+" data-target="480">0K+</p>
<p className="mt-2 text-neutral-400 text-sm">
              Businesses empowered
            </p>
</div>

<div className="stat-card bg-white/5 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-md backdrop-blur-xl" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.4s, transform 0.4s', position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<p className="stat-number text-4xl font-bold" data-animated="false" data-suffix="+" data-target="47">0+</p>
<p className="mt-2 text-neutral-400 text-sm">
              Global recognitions
            </p>
</div>
</div>

<button className="relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-sky-400 p-[1px] text-base font-semibold shadow-xl shadow-emerald-500/40 w-fit">
<span className="inline-flex items-center gap-3 bg-neutral-50 rounded-full px-7 py-3 text-neutral-900">
                    Start with OmnixAI
                    <span className="icon-[solar--alt-arrow-right-bold-duotone] text-xl text-emerald-500"></span>
</span>
</button>
</div>
</div>
</div>

</section>


<section className="text-slate-50 py-24 relative" id="omnixai-offerings">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<div className="mb-12 max-w-3xl">
<h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
                What We
                <span className="text-emerald-400">Offer</span>
                – AI systems that solve real work, not just look futuristic.
              </h2>
<p className="mt-4 text-sm sm:text-base text-neutral-400">
                OmnixAI connects automation, data, and creative intelligence
                into one platform so teams can ship faster, stay safe, and scale
                what actually works.
              </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(230px,auto)] gap-x-6 gap-y-6">

<article className="group flex flex-col shadow-black/40 bg-neutral-900/80 rounded-3xl pt-5 pr-5 pb-5 pl-5 relative shadow-xl justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '24px'}}>

<div className="space-y-3">
<div className="flex items-center gap-2">
<span className="h-7 w-7 rounded-full bg-emerald-500/80 flex items-center justify-center text-xs font-bold">
                      OA
                    </span>
<div className="h-2.5 flex-1 rounded-full bg-neutral-800 overflow-hidden">
<div className="h-full w-2/3 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400"></div>
</div>
</div>
<div className="h-2.5 rounded-full bg-neutral-800 w-11/12"></div>
<div className="h-2.5 rounded-full bg-neutral-800 w-3/4"></div>
<div className="mt-2 flex items-center gap-2 rounded-full border border-emerald-500/40 bg-neutral-900 px-3 py-1.5">
<div className="h-1.5 flex-1 rounded-full bg-emerald-500/60 animate-pulse"></div>
<span className="text-[10px] uppercase tracking-[0.15em] text-emerald-300">
                      Running
                    </span>
</div>
</div>

<div className="mt-5">
<h3 className="text-lg font-semibold">Autonomous Workflows</h3>
<p className="mt-1 text-sm text-neutral-400">
                    Orchestrate agents, tasks, and approvals so complex
                    workflows run in the background while your team focuses on
                    high-value work.
                  </p>
</div>
</article>

<article className="policy-card group flex flex-col shadow-black/40 bg-neutral-900/80 border-white/5 border rounded-3xl pt-5 pr-5 pb-5 pl-5 relative shadow-xl justify-between">

<div className="policy-visual overflow-hidden bg-neutral-950 h-28 rounded-2xl relative shadow">

<div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{}}></div>

<div className="policy-logo-field">

<div className="policy-logo-lane policy-logo-lane--top">

<div className="policy-logo-chip">
<svg fill="currentColor" height="20" width="20">
<path d="M13 3h3V0h-3c-2.76 0-5 2.24-5 5v3H5v3h3v9h3v-9h3l1-3h-4V5c0-.55.45-1 1-1z"></path>
</svg>
</div>

<div className="policy-logo-chip">
<svg fill="currentColor" height="22" viewbox="0 0 24 24" width="22">
<path d="M10 15.5l6-3.5-6-3.5v7z"></path>
<path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.2-.9C15.7 5 12 5 12 5s-3.7 0-6.8.2c-.5.1-1.4.1-2.2.9-.6.6-.8 2-.8 2S2 9.6 2 11.3v1.4c0 1.7.2 3.3.2 3.3s.2 1.4.8 2c.8.8 1.9.8 2.4.9 1.8.2 7.6.3 7.6.3s3.7 0 6.8-.2c.5-.1 1.4-.1 2.2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.4C22 9.6 21.8 8 21.8 8z"></path>
</svg>
</div>

<div className="policy-logo-chip">
<svg fill="currentColor" height="20" viewbox="0 0 24 24" width="20">
<path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 2c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm4.8-3.5c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.5-1-1-1z"></path>
</svg>
</div>

<div className="policy-logo-chip">
<svg fill="currentColor" height="20" viewbox="0 0 24 24" width="20">
<path d="M12 1L7 4v6L2 13l5 3v6l5 3 5-3v-6l5-3-5-3V4z"></path>
</svg>
</div>

<div className="policy-logo-chip">
<svg fill="currentColor" height="20" viewbox="0 0 24 24" width="20">
<path d="M4 4l7.5 8L4 20h3l5.5-6 5.5 6H22l-7.5-8L22 4h-3l-5.5 6L8 4z"></path>
</svg>
</div>

<div className="policy-logo-chip">
<svg fill="currentColor" height="20" width="20">
<path d="M13 3h3V0h-3c-2.76 0-5 2.24-5 5v3H5v3h3v9h3v-9h3l1-3h-4V5c0-.55.45-1 1-1z"></path>
</svg>
</div>
</div>

<div className="policy-logo-lane policy-logo-lane--bottom">

<div className="policy-logo-chip">
<svg fill="currentColor" height="20" width="20">
<path d="M4 3a2 2 0 110 4 2 2 0 010-4zm1 5H3v12h2V8zm4 0H7v12h2v-6c0-1.7 1.3-3 3-3s3 1.3 3 3v6h2v-7c0-2.8-2.2-5-5-5-1.2 0-2.3.4-3 1z"></path>
</svg>
</div>

<div className="policy-logo-chip">
<svg fill="currentColor" height="20" viewbox="0 0 24 24" width="20">
<path d="M20 8.6a5.4 5.4 0 01-4-4v-.4h-3v12a3 3 0 11-3-3c.5 0 1 .1 1.4.3V10a6 6 0 105 5.9V9.4a8 8 0 003 1.2V8.6z"></path>
</svg>
</div>

<div className="policy-logo-chip">
<svg fill="currentColor" height="22" viewbox="0 0 24 24" width="22">
<path d="M21.8 12.2c0-.7-.1-1.4-.2-2H12v4h5.6c-.3 1.3-1 2.4-2.2 3.1v2.6h3.5c2.1-1.9 3.3-4.7 3.3-7.7z"></path>
<path d="M12 22c2.9 0 5.4-1 7.2-2.7l-3.5-2.6c-.9.6-2.2 1-3.7 1a6.5 6.5 0 01-6.1-4.2H2.2v2.7A10 10 0 0012 22z"></path>
<path d="M5.9 13.5A6.5 6.5 0 016.1 10c0-.8.1-1.5.4-2.2V5H2.2A10 10 0 002 10a10 10 0 003.9 7.5l2.8-2z"></path>
<path d="M12 4c1.6 0 3 .6 4 1.7l3-3A10 10 0 002 5l3.8 2.8A6.5 6.5 0 0112 4z"></path>
</svg>
</div>

<div className="policy-logo-chip">
<svg fill="currentColor" height="20" width="20">
<path d="M4 3a2 2 0 110 4 2 2 0 010-4zm1 5H3v12h2V8zm4 0H7v12h2v-6c0-1.7 1.3-3 3-3s3 1.3 3 3v6h2v-7c0-2.8-2.2-5-5-5-1.2 0-2.3.4-3 1z"></path>
</svg>
</div>
</div>
</div>

<div className="policy-glass flex z-10 h-full relative items-center justify-center">
<div className="inline-flex flex-col bg-neutral-50/10 border-emerald-400/30 border rounded-2xl px-8 py-3 backdrop-blur-md items-center">
<p className="text-2xl font-semibold text-emerald-200">
                        100%
                      </p>
<p className="mt-1 text-[11px] tracking-[0.22em] uppercase text-emerald-100">
                        Data transparency
                      </p>
</div>
</div>
</div>

<div className="mt-5">
<h3 className="text-lg font-semibold">
                    Compliance &amp; Guardrails
                  </h3>
<p className="mt-1 text-sm text-neutral-400">
                    Enforce policies, redaction, and access rules automatically
                    so your AI systems stay aligned with security and compliance
                    requirements.
                  </p>
</div>
</article>

<article className="suitable-card group row-span-2 flex flex-col shadow-black/40 text-slate-50 bg-neutral-900/80 rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-xl [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<header className="">
<h3 className="text-xl font-semibold">We are suitable for</h3>
<div className="h-px bg-emerald-100/20 w-full mt-4"></div>
</header>

<div className="tags-field flex-1 overflow-hidden bg-gradient-to-b from-black/95 to-black rounded-3xl mt-6 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '24px', maskImage: 'linear-gradient(180deg, transparent, black 45%, black 50%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 45%, black 50%, transparent)'}}>
<span className="tag-chip inline-flex items-center justify-center rounded-full backdrop-blur-xl border border-emerald-200/80 bg-emerald-400/25 px-6 py-2 text-sm font-medium text-emerald-50 absolute" data-rotation="-18" style={{left: '12px', top: '32px'}}>
                    AI product teams
                  </span>
<span className="tag-chip inline-flex items-center justify-center rounded-full backdrop-blur-xl border border-emerald-200/80 bg-emerald-400/25 px-5 py-2 text-xs font-semibold text-emerald-50 absolute" data-rotation="-32" style={{left: '140px', top: '40px'}}>
                    Early-stage SaaS
                  </span>
<span className="tag-chip inline-flex items-center justify-center rounded-full backdrop-blur-xl border border-emerald-200/80 bg-emerald-400/25 px-6 py-2 text-sm font-medium text-emerald-50 absolute" data-rotation="-10" style={{left: '40px', top: '96px'}}>
                    Growth &amp; lifecycle
                  </span>
<span className="tag-chip inline-flex items-center justify-center rounded-full backdrop-blur-xl border border-emerald-200/80 bg-emerald-400/25 px-6 py-2 text-sm font-medium text-emerald-50 absolute" data-rotation="-4" style={{left: '24px', top: '156px'}}>
                    Ops &amp; RevOps
                  </span>
<span className="tag-chip inline-flex items-center justify-center rounded-full backdrop-blur-xl border border-emerald-200/80 bg-emerald-400/25 px-6 py-2 text-sm font-medium text-emerald-50 absolute" data-rotation="-20" style={{left: '120px', top: '200px'}}>
                    Innovation labs
                  </span>
<span className="tag-chip inline-flex items-center justify-center rounded-full backdrop-blur-xl border border-emerald-200/80 bg-emerald-400/25 px-5 py-2 text-xs font-semibold text-emerald-50 absolute" data-rotation="-26" style={{left: '190px', top: '260px'}}>
                    Support leaders
                  </span>
</div>
</article>



<article className="group flex flex-col shadow-black/40 bg-neutral-900/90 rounded-3xl pt-5 pr-5 pb-5 pl-5 relative shadow-xl justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '24px'}}>

<div className="bg-neutral-950 rounded-2xl mb-6 pt-7 pr-4 pb-4 pl-4 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '16px'}}>

<div className="pointer-events-none">
<div className="absolute inset-x-6 top-1 h-9 rounded-2xl bg-neutral-900/50"></div>
<div className="absolute inset-x-5 top-3 h-9 rounded-2xl bg-neutral-900/60"></div>
<div className="absolute inset-x-4 top-5 h-9 rounded-2xl bg-neutral-900/80"></div>
</div>

<div className="flex bg-neutral-900 z-10 rounded-2xl mb-4 pt-3 pr-4 pb-3 pl-4 relative items-center justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-[url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=200')] bg-cover bg-center"></div>
<div className="">
<p className="text-sm font-medium">Jordan Lee</p>
<p className="text-[11px] text-neutral-400">
                          Revenue Ops · B2B SaaS
                        </p>
</div>
</div>
<span className="rounded-full bg-emerald-500/15 px-3 py-1 text-[10px] text-emerald-300 border border-emerald-400/60">
                      Fit: 92%
                    </span>
</div>

<div className="relative z-10 flex items-center gap-3 rounded-full border border-emerald-400/70 bg-black/80 px-3 py-2">
<div className="h-2 flex-1 rounded-full bg-neutral-800 overflow-hidden">
<div className="h-full w-3/4 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-sky-400"></div>
</div>
<button className="rounded-full bg-neutral-200 px-3 py-1 text-[10px] font-semibold text-neutral-900 hover:bg-white transition-colors">
                      Generate leads
                    </button>
</div>
</div>

<div className="">
<h3 className="text-lg font-semibold">
                    Lead &amp; Pipeline Intelligence
                  </h3>
<p className="mt-1 text-sm text-neutral-400">
                    Score, route, and enrich leads automatically so your teams
                    talk to the right people at the right moment—without manual
                    triage.
                  </p>
</div>
</article>

<article className="ai-chart-card group flex flex-col shadow-black/40 bg-neutral-900/80 rounded-3xl pt-5 pr-5 pb-5 pl-5 relative shadow-xl justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '24px'}}>

<div className="ai-chart-panel mb-4 h-32 rounded-2xl relative overflow-hidden bg-neutral-950">

<div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40">
<div className="h-full w-full" style="
                background:
                  radial-gradient(circle at top, rgba(16,185,129,0.28), transparent 60%),
                  radial-gradient(circle at bottom, rgba(15,23,42,0.95), #020617 80%);
              "></div>
<div className="absolute inset-0 mix-blend-screen" style="
                background-image:
                  linear-gradient(to right, rgba(15,23,42,0.9) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(15,23,42,0.9) 1px, transparent 1px);
                background-size: 24px 24px;
                filter: blur(1px);
              "></div>
</div>

<svg className="ai-chart-svg w-[328px] h-[128px] absolute top-0 right-0 bottom-0 left-0" data-icon-replaced="true" strokeWidth="2" style={{width: '328px', height: '128px', color: 'rgb(248, 250, 252)'}} viewbox="0 0 200 80">
<g className="ai-chart-wave">

<path className="ai-chart-line-base" d="M0 60 C 35 30, 65 50, 95 45 S 155 20, 200 35" fill="none" stroke="rgba(52,211,153,0.6)" strokeWidth="2.2"></path>

<path className="ai-chart-line-glow" d="M0 60 C 35 30, 65 50, 95 45 S 155 20, 200 35" fill="none" stroke="rgba(52,211,153,0.95)" strokeLinecap="round" strokeWidth="3"></path>

<path className="ai-chart-line-spark" d="M0 60 C 35 30, 65 50, 95 45 S 155 20, 200 35" fill="none" stroke="rgba(167,243,208,1)" strokeLinecap="round" strokeWidth="4"></path>
</g>
</svg>

<div className="ai-chart-label absolute bottom-4 left-6 rounded-full bg-black/80 px-3 py-1 text-[10px] text-emerald-300 border border-emerald-500/60">
                    Efficiency +87%
                  </div>
<div className="ai-chart-label absolute top-3 right-5 rounded-full bg-black/80 px-3 py-1 text-[10px] text-emerald-300 border border-emerald-500/50">
                    Growth
                  </div>
<div className="ai-chart-label absolute bottom-2 right-8 rounded-full bg-black/80 px-3 py-1 text-[10px] text-emerald-300 border border-emerald-500/50">
                    Cost –67%
                  </div>
</div>

<div className="">
<h3 className="text-lg font-semibold">AI Consultation</h3>
<p className="mt-1 text-sm text-neutral-400 leading-relaxed">
                    We design tailored AI systems around your business logic,
                    helping you see where efficiency grows, cost drops, and new
                    opportunities appear.
                  </p>
</div>
</article>
</div>
</div>
</section>

<section className="process-section w-full pt-24 pb-32 relative bg-neutral-950 overflow-hidden" id="process">

<div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
<div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="grid lg:grid-cols-2 gap-10 items-end mb-24">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="h-px w-8 bg-emerald-500"></div>
<p className="text-emerald-400 font-mono text-sm tracking-widest uppercase">Process</p>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
          How We <span className="text-emerald-400">Work</span>
<span className="text-neutral-500">From idea to launch.</span>
</h2>
</div>
<p className="text-lg text-neutral-400 leading-relaxed max-w-lg pb-2">
        Our workflow is clear, collaborative, and engineered to ship production-ready AI systems in weeks—not months.
      </p>
</div>

<div className="relative w-full mb-16">

<div className="absolute top-1/2 left-0 w-full -translate-y-1/2 px-8 md:px-10">
<div className="relative w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 to-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.8)] transition-all duration-500 ease-out" id="processProgress" style={{width: '99.99%'}}></div>
</div>
</div>

<div className="relative z-10 flex justify-between items-center w-full" id="process-steps">

<button className="process-step group relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-neutral-900 border border-white/10 text-xl font-medium text-neutral-500 transition-all duration-300" data-step="1">
<span className="relative z-10 group-hover:text-white transition-colors duration-300">01</span>
</button>

<button className="process-step group relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-neutral-900 border border-white/10 text-xl font-medium text-neutral-500 transition-all duration-300" data-step="2">
<span className="relative z-10 group-hover:text-white transition-colors duration-300">02</span>
</button>

<button className="process-step group relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-neutral-900 border border-white/10 text-xl font-medium text-neutral-500 transition-all duration-300" data-step="3">
<span className="relative z-10 group-hover:text-white transition-colors duration-300">03</span>
</button>

<button className="process-step group relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-neutral-900 border border-white/10 text-xl font-medium text-neutral-500 transition-all duration-300" data-step="4">
<span className="relative z-10 group-hover:text-white transition-colors duration-300">04</span>
</button>
</div>
</div>

<div className="process-card group relative w-full rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl transition-all duration-500 hover:border-emerald-500/20" id="processContent">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80')] bg-cover bg-center opacity-30 mix-blend-color-dodge transition-transform duration-700 group-hover:scale-105"></div>

<div className="bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-900/40 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="md:p-14 max-w-4xl z-10 pt-8 pr-8 pb-8 pl-8 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Current Phase
        </div>
<h3 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight transition-all duration-300" id="processTitle" style={{opacity: '1'}}>Launch, Learn, and Optimize</h3>
<p className="text-lg md:text-xl text-neutral-400 leading-relaxed transition-all duration-300 max-w-2xl" id="processText" style={{opacity: '1'}}>Once live, we monitor adoption and impact. From there we refine prompts, UX, and logic so your AI system keeps getting smarter and your team keeps getting faster.</p>
</div>
</div>
</div>
<style>
    /* Hover Glow Effect */
    .process-step:hover {
      border-color: rgba(52, 211, 153, 0.5);
      box-shadow: 0 0 30px -5px rgba(16, 185, 129, 0.4);
      transform: translateY(-2px);
    }
    
    /* Active State (Controlled by existing JS) */
    .process-step.active {
      color: #34d399; /* emerald-400 */
      border-color: #10b981; /* emerald-500 */
      background-color: #0a0a0a; /* neutral-950 */
      box-shadow: 0 0 50px -10px rgba(16, 185, 129, 0.6);
      transform: scale(1.05);
    }
    
    /* Card Swap Animation */
    .process-card.animate-swap #processTitle,
    .process-card.animate-swap #processText {
      animation: content-slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    
    @keyframes content-slide-up {
      from { 
        opacity: 0; 
        transform: translateY(10px); 
      }
      to { 
        opacity: 1; 
        transform: translateY(0); 
      }
    }
  </style>
</section>

<style>
          @layer components {
            .process-step {
              @apply relative inline-flex min-w-[4.5rem] items-center justify-between
                     rounded-xl bg-black/80 px-4 py-2 text-left
                     border border-neutral-800/70
                     transition-colors transition-shadow duration-200;
            }

            .process-step::after {
              content: "";
              position: absolute;
              inset-inline: 0;
              top: -2px;
              height: 2px;
              border-radius: 9999px;
              background: transparent;
              opacity: 0;
              transition: opacity 200ms ease-out;
            }

            .process-step.is-active {
              @apply text-emerald-300 border-emerald-500/70;
              box-shadow:
                0 0 20px rgba(16,185,129,0.45),
                0 10px 30px rgba(0,0,0,0.8);
            }

            .process-step.is-active::after {
              background: linear-gradient(
                to right,
                rgba(52,211,153,0.4),
                rgba(52,211,153,0.9),
                rgba(52,211,153,0.4)
              );
              opacity: 1;
            }

            .process-panel-wrapper {
              @apply relative rounded-[1.75rem] bg-black/80 overflow-hidden;
              box-shadow:
                0 30px 80px rgba(0,0,0,0.85),
                0 0 40px rgba(16,185,129,0.25);
            }

            .process-panel {
              @apply flex min-h-[210px] flex-col items-center justify-center px-6 py-10 text-center;
              background:
                radial-gradient(circle at bottom center, rgba(16,185,129,0.4), rgba(0,0,0,1) 65%);
            }
          }
        </style>




<section className="pt-24 pb-24 relative" id="pricing">
<div className="max-w-6xl mx-auto px-6 lg:px-8">

<div className="text-center max-w-3xl mx-auto mb-14">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
<span className="text-emerald-400">Pricing</span>
                Plans – Flexible options for
                <span className="block mt-1">every stage of your AI journey</span>
</h2>
<p className="mt-4 text-neutral-400 text-sm sm:text-base">
                Start small, experiment fast, and scale into fully autonomous
                workflows as your team grows in confidence.
              </p>
</div>

<div className="grid gap-6 md:grid-cols-3">

<article className="pricing-card flex flex-col bg-gradient-to-br from-white/10 to-white/0 rounded-3xl pt-8 pr-7 pb-8 pl-7 justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '24px'}}>
<div className="">
<p className="text-sm font-semibold text-emerald-300 mb-2">
                    Starter
                  </p>
<p className="text-4xl font-semibold text-white">
                    $0
                    <span className="text-base font-normal text-neutral-400">
                      /project
                    </span>
</p>
<p className="mt-4 text-sm text-neutral-400">
                    Perfect for solo founders or small teams validating their
                    first AI use case.
                  </p>
<ul className="mt-6 space-y-3 text-sm text-neutral-200">
<li className="flex items-start gap-2">
<span className="pricing-dot">
<span className="pricing-dot-inner"></span>
</span>
                      1 AI assistant (pre-trained template)
                    </li>
<li className="flex items-start gap-2">
<span className="pricing-dot">
<span className="pricing-dot-inner"></span>
</span>
                      Up to 2 workflow automations
                    </li>
<li className="flex items-start gap-2">
<span className="pricing-dot">
<span className="pricing-dot-inner"></span>
</span>
                      Basic analytics dashboard
                    </li>
<li className="flex items-start gap-2">
<span className="pricing-dot">
<span className="pricing-dot-inner"></span>
</span>
                      Email support
                    </li>
<li className="flex items-start gap-2">
<span className="pricing-dot">
<span className="pricing-dot-inner"></span>
</span>
                      7-day implementation
                    </li>
</ul>
</div>
<button className="inline-flex shadow-black/40 hover:bg-neutral-100 transition text-sm font-semibold text-neutral-900 bg-white w-full rounded-full mt-8 pt-3 pr-6 pb-3 pl-6 shadow-lg gap-x-4 gap-y-4 items-center justify-center">
<span className="">Start  Project</span>
</button>
</article>

<div className="relative pricing-pulse">
<article className="pricing-card flex flex-col justify-between rounded-3xl bg-gradient-to-b from-emerald-600/35 via-neutral-950 to-neutral-950 border border-emerald-400/60 px-7 py-9 scale-[1.03]">

<div className="-top-5 -translate-x-1/2 shadow-emerald-500/60 flex-none text-xs font-semibold text-neutral-950 bg-emerald-500 max-w-none rounded-full pt-2 pr-6 pb-2 pl-6 absolute left-1/2 shadow">Popular</div>
<div className="mt-2">
<p className="text-sm font-semibold text-emerald-300 mb-2">
                      Growth
                    </p>
<p className="text-4xl font-semibold text-white">
                      $1,890
                      <span className="text-base font-normal text-neutral-300">
                        /project
                      </span>
</p>
<p className="mt-4 text-sm text-neutral-300">
                      Ideal for teams ready to move from experiments to
                      production-grade AI automation.
                    </p>
<ul className="mt-6 space-y-3 text-sm text-neutral-100">
<li className="flex items-start gap-2">
<span className="pricing-dot-solid">
<span className="pricing-dot-inner-solid"></span>
</span>
                        Everything in Starter, plus
                      </li>
<li className="flex items-start gap-2">
<span className="pricing-dot-solid">
<span className="pricing-dot-inner-solid"></span>
</span>
                        3–5 custom AI agents (chat, workflows, copilots)
                      </li>
<li className="flex items-start gap-2">
<span className="pricing-dot-solid">
<span className="pricing-dot-inner-solid"></span>
</span>
                        Advanced routing &amp; business logic
                      </li>
<li className="flex items-start gap-2">
<span className="pricing-dot-solid">
<span className="pricing-dot-inner-solid"></span>
</span>
                        Team dashboard &amp; role-based access
                      </li>
<li className="flex items-start gap-2">
<span className="pricing-dot-solid">
<span className="pricing-dot-inner-solid"></span>
</span>
                        CRM / Slack / Notion integrations
                      </li>
</ul>
</div>
<button className="inline-flex gap-4 shadow-emerald-500/60 hover:bg-emerald-300 transition text-sm font-semibold text-neutral-950 bg-emerald-400 w-full rounded-full mt-8 pt-3 pr-6 pb-3 pl-6 shadow-lg gap-x-4 gap-y-4 items-center justify-center">
<span className="">Start Project</span>
</button>
</article>
</div>

<article className="pricing-card flex flex-col bg-gradient-to-br from-white/10 to-white/0 rounded-3xl pt-8 pr-7 pb-8 pl-7 justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '24px'}}>
<div className="">
<p className="text-sm font-semibold text-emerald-300 mb-2">
                    Enterprise
                  </p>
<p className="text-3xl sm:text-4xl font-semibold text-white">
                    Custom Pricing
                  </p>
<p className="mt-4 text-sm text-neutral-400">
                    For orgs that need deeply integrated, compliance-ready AI
                    &amp; automation across multiple teams.
                  </p>
<ul className="mt-6 space-y-3 text-sm text-neutral-200">
<li className="flex items-start gap-2">
<span className="pricing-dot">
<span className="pricing-dot-inner"></span>
</span>
                      AI + data governance &amp; guardrails
                    </li>
<li className="flex items-start gap-2">
<span className="pricing-dot">
<span className="pricing-dot-inner"></span>
</span>
                      Multi-team automation strategy &amp; roadmap
                    </li>
<li className="flex items-start gap-2">
<span className="pricing-dot">
<span className="pricing-dot-inner"></span>
</span>
                      Private deployments &amp; SSO options
                    </li>
<li className="flex items-start gap-2">
<span className="pricing-dot">
<span className="pricing-dot-inner"></span>
</span>
                      Dedicated success engineer
                    </li>
<li className="flex items-start gap-2">
<span className="pricing-dot">
<span className="pricing-dot-inner"></span>
</span>
                      Priority support &amp; onboarding
                    </li>
</ul>
</div>
<button className="inline-flex shadow-black/40 hover:bg-neutral-100 transition text-sm font-semibold text-neutral-900 bg-white w-full rounded-full mt-8 pt-3 pr-6 pb-3 pl-6 shadow-lg gap-x-4 gap-y-4 items-center justify-center">
<span className="">Talk to Our Team</span>
</button>
</article>
</div>
</div>
</section>

<section className="pt-24 pb-24 relative" id="testimonials">
<div className="lg:px-8 grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] max-w-6xl mr-auto ml-auto pr-6 pl-6 gap-x-16 gap-y-16 items-start">

<div className="lg:sticky lg:top-32 lg:self-start">
<p className="text-sm font-medium tracking-[0.2em] text-emerald-300 uppercase mb-3">
      Testimonials
    </p>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white">
      What Our
      <span className="text-emerald-400">Clients Say</span>
<br/>
<span className="italic font-light text-neutral-400 text-2xl sm:text-3xl block mt-2">
        Real teams. Real outcomes.
      </span>
</h2>
<p className="mt-6 text-base text-neutral-400 max-w-lg leading-relaxed">
      OmnixAI helps product, ops, and marketing teams ship automation faster than they thought possible. Join 4,000+ companies building the future.
    </p>
<button className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/10 pl-6 pr-4 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-105 hover:border-emerald-500/30 shadow-lg shadow-black/20">
      Explore Collections
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 transition-transform group-hover:translate-x-1">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</button>
<div className="mt-12 flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="User" className="h-10 w-10 rounded-full ring-2 ring-neutral-950 object-cover grayscale-[0.3]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/99667665-1a71-4064-bf58-4743bb9e0ebc_320w.webp"/>
<img alt="User" className="h-10 w-10 rounded-full ring-2 ring-neutral-950 object-cover grayscale-[0.3]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca687bcc-f3d6-4ed6-9efe-e0fd4cbe69a9_320w.webp"/>
<img alt="User" className="h-10 w-10 rounded-full ring-2 ring-neutral-950 object-cover grayscale-[0.3]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4bda977-4e02-4ce3-b6d3-1f8a5d3197db_320w.jpg"/>
<div className="h-10 w-10 rounded-full ring-2 ring-neutral-950 bg-neutral-800 flex items-center justify-center text-xs font-medium text-white">+2k</div>
</div>
<div className="text-sm text-neutral-400">
<span className="text-emerald-400 font-medium">4.9/5</span> rating from verified users
        </div>
</div>
</div>

<div className="relative h-[200vh] w-full hidden lg:block" id="cards-track">
<div className="sticky top-32 h-[600px] w-full flex items-center justify-center perspective-midrange">

<article className="testimonial-card absolute w-full max-w-md p-8 rounded-3xl bg-neutral-900/80 border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-300 ease-out origin-center" data-index="0" style={{transform: 'translateY(0px) scale(1) rotate(-2deg)', opacity: '1', zIndex: '10', filter: 'brightness(1) blur(0px)'}}>
<div className="flex items-center gap-4 mb-6">
<div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 p-[1px]">
<img alt="Avatar" className="h-full w-full rounded-full object-cover border-2 border-black" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e34fde51-2eca-4917-a5fd-0df9c185075f_320w.webp"/>
</div>
<div>
<h4 className="text-white font-medium">Elena Rodriguez</h4>
<p className="text-xs text-emerald-400 uppercase tracking-wide font-medium">CTO at Nexus</p>
</div>
<svg className="ml-auto h-5 w-5 text-neutral-600" fill="currentColor" viewbox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
</div>
<p className="text-lg text-neutral-200 leading-relaxed">"OmnixAI cut our triage time by 80%. It's not just automation; it's intelligent routing that feels indistinguishable from our best support agents."</p>
</article>

<article className="testimonial-card absolute w-full max-w-md p-8 rounded-3xl bg-neutral-900/80 border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-300 ease-out origin-center" data-index="1" style={{opacity: '0', transform: 'translateY(120px) scale(0.9) rotate(4deg)', filter: 'brightness(1) blur(0px)', zIndex: '11', boxShadow: 'rgba(0, 0, 0, 0.5) 0px 20px 40px -10px', borderColor: 'rgba(255, 255, 255, 0.1)'}}>
<div className="flex items-center gap-4 mb-6">
<div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 p-[1px]">
<img alt="Avatar" className="h-full w-full rounded-full object-cover border-2 border-black" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe19bff1-1148-4da4-8b25-b0081474f83c_320w.jpg"/>
</div>
<div>
<h4 className="text-white font-medium">Marcus Chen</h4>
<p className="text-xs text-emerald-400 uppercase tracking-wide font-medium">VP Operations</p>
</div>
<svg className="ml-auto h-5 w-5 text-neutral-600" fill="currentColor" viewbox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
</div>
<p className="text-lg text-neutral-200 leading-relaxed">"The most seamless integration we've ever done. We were up and running in days, and the data transparency is unmatched in the industry."</p>
</article>

<article className="testimonial-card absolute w-full max-w-md p-8 rounded-3xl bg-neutral-900/80 border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-300 ease-out origin-center" data-index="2" style={{opacity: '0', transform: 'translateY(120px) scale(0.9) rotate(-3deg)', filter: 'brightness(1) blur(0px)', zIndex: '12', boxShadow: 'rgba(0, 0, 0, 0.5) 0px 20px 40px -10px', borderColor: 'rgba(255, 255, 255, 0.1)'}}>
<div className="flex items-center gap-4 mb-6">
<div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 p-[1px]">
<img alt="Avatar" className="h-full w-full rounded-full object-cover border-2 border-black" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72422903-6952-433c-a8ca-06b4eb7c10cf_800w.jpg"/>
</div>
<div>
<h4 className="text-white font-medium">David Kim</h4>
<p className="text-xs text-emerald-400 uppercase tracking-wide font-medium">Founder, Stacked</p>
</div>
<svg className="ml-auto h-5 w-5 text-neutral-600" fill="currentColor" viewbox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
</div>
<p className="text-lg text-neutral-200 leading-relaxed">"We scaled from 100 to 10,000 daily active users without adding a single support hire. OmnixAI handles the load effortlessly."</p>
</article>

<article className="testimonial-card absolute w-full max-w-md p-8 rounded-3xl bg-neutral-900/80 border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-300 ease-out origin-center" data-index="3" style={{opacity: '0', transform: 'translateY(120px) scale(0.9) rotate(3deg)', filter: 'brightness(1) blur(0px)', zIndex: '13', boxShadow: 'rgba(0, 0, 0, 0.5) 0px 20px 40px -10px', borderColor: 'rgba(255, 255, 255, 0.1)'}}>
<div className="flex items-center gap-4 mb-6">
<div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 p-[1px]">
<img alt="Avatar" className="h-full w-full rounded-full object-cover border-2 border-black" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77c6f444-666a-4bf0-a5d2-eef4ed3dc30a_320w.webp"/>
</div>
<div>
<h4 className="text-white font-medium">Sarah Jenkins</h4>
<p className="text-xs text-emerald-400 uppercase tracking-wide font-medium">Head of Product</p>
</div>
<svg className="ml-auto h-5 w-5 text-neutral-600" fill="currentColor" viewbox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
</div>
<p className="text-lg text-neutral-200 leading-relaxed">"The ROI was immediate. It frees up our team to focus on strategy while OmnixAI handles the repetitive complex tasks."</p>
</article>
</div>
</div>

<div className="block lg:hidden space-y-6">

<div className="p-6 rounded-2xl bg-neutral-900/80 border border-white/10 backdrop-blur-xl">
<div className="flex items-center gap-4 mb-4">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover border border-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ea777f21-df8c-431d-956a-57390ff9e591_1600w.jpg"/>
<div>
<p className="text-white font-medium">Elena Rodriguez</p>
<p className="text-xs text-emerald-400 font-medium">CTO at Nexus</p>
</div>
</div>
<p className="text-neutral-300 text-base leading-relaxed">"OmnixAI cut our triage time by 80%. It's intelligent routing that feels indistinguishable from our best agents."</p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/80 border border-white/10 backdrop-blur-xl">
<div className="flex items-center gap-4 mb-4">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover border border-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d55a6bf-f23c-48c2-8d71-e76bc0290c4e_1600w.webp"/>
<div>
<p className="text-white font-medium">Marcus Chen</p>
<p className="text-xs text-emerald-400 font-medium">VP Operations</p>
</div>
</div>
<p className="text-neutral-300 text-base leading-relaxed">"The most seamless integration we've ever done. Up and running in days with unmatched data transparency."</p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/80 border border-white/10 backdrop-blur-xl">
<div className="flex items-center gap-4 mb-4">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&amp;q=80"/>
<div>
<p className="text-white font-medium">David Kim</p>
<p className="text-xs text-emerald-400 font-medium">Founder, Stacked</p>
</div>
</div>
<p className="text-neutral-300 text-base leading-relaxed">"We scaled from 100 to 10,000 daily active users without adding a single support hire. OmnixAI handles the load effortlessly."</p>
</div>
</div>

</div>
</section>

<footer className="relative mt-24 border-t border-transparent pt-16 pb-12" id="footer" style={{position: 'relative', -BorderGradient: 'linear-gradient(90deg, rgba(16, 185, 129, 0), rgba(16, 185, 129, 0.6), rgba(16, 185, 129, 0))', -BorderRadiusBefore: '0px'}}>
<div className="pointer-events-none absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-emerald-500/10 to-emerald-500/20 blur-2xl"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div className="">
<div className="flex mb-4 gap-x-3 gap-y-3 items-center">
<div className="flex bg-center mix-blend-overlay w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/779bdf46-0c67-4bf9-a9fa-b208a3e9d5ba_1600w.png)] bg-cover rounded-lg shadow-lg invert-0 items-center justify-center">
<span className="icon-[solar--atom-bold-duotone] text-sm text-slate-950"></span>
</div>
<div className="flex bg-center mix-blend-normal w-32 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/779bdf46-0c67-4bf9-a9fa-b208a3e9d5ba_1600w.png)] bg-cover rounded-xl hue-rotate-60 items-center justify-center">
<span className="icon-[solar--atom-bold-duotone] text-base text-slate-950"></span>
</div>
</div>
<p className="text-sm text-neutral-400 max-w-xs">
                  Intelligent automation systems engineered for speed, clarity,
                  and impact.
                </p>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white mb-4">Product</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li className="">
<a className="hover:text-emerald-400 transition" href="#feature">
                      Platform
                    </a>
</li>
<li className="">
<a className="hover:text-emerald-400 transition" href="#process">
                      How it Works
                    </a>
</li>
<li className="">
<a className="hover:text-emerald-400 transition" href="#pricing">
                      Pricing
                    </a>
</li>
<li className="">
<a className="hover:text-emerald-400 transition" href="#testimonials">
                      Testimonials
                    </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li className="">
<a className="hover:text-emerald-400 transition" href="#">
                      About Us
                    </a>
</li>
<li className="">
<a className="hover:text-emerald-400 transition" href="#">
                      Careers
                    </a>
</li>
<li>
<a className="hover:text-emerald-400 transition" href="#">
                      Blog
                    </a>
</li>
<li>
<a className="hover:text-emerald-400 transition" href="#">
                      Contact
                    </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li className="">
<a className="hover:text-emerald-400 transition" href="#">
                      Privacy Policy
                    </a>
</li>
<li className="">
<a className="hover:text-emerald-400 transition" href="#">
                      Terms of Service
                    </a>
</li>
<li className="">
<a className="hover:text-emerald-400 transition" href="#">
                      Cookie Policy
                    </a>
</li>
<li className="">
<a className="hover:text-emerald-400 transition" href="#">
                      Security
                    </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-neutral-400">
                © 2024 OmnixAI. All rights reserved.
              </p>
<div className="flex items-center gap-4">
<a className="text-neutral-400 hover:text-emerald-400 transition" href="#">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" fill="currentColor" height="20" strokeWidth="2" style={{color: 'rgb(52, 211, 153)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20">
<path className="" d="M4 4l7.5 8L4 20h3l5.5-6 5.5 6H22l-7.5-8L22 4h-3l-5.5 6L8 4z"></path>
</svg>
</a>
<a className="text-neutral-400 hover:text-emerald-400 transition" href="#">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="logos" data-logos="instagram-icon" fill="currentColor" height="20" strokeWidth="2" style={{color: 'rgb(52, 211, 153)', width: '20px', height: '20px'}} viewbox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M128 23.064c34.177 0 38.225.13 51.722.745c12.48.57 19.258 2.655 23.769 4.408c5.974 2.322 10.238 5.096 14.717 9.575s7.253 8.743 9.575 14.717c1.753 4.511 3.838 11.289 4.408 23.768c.615 13.498.745 17.546.745 51.723s-.13 38.226-.745 51.723c-.57 12.48-2.655 19.257-4.408 23.768c-2.322 5.974-5.096 10.239-9.575 14.718s-8.743 7.253-14.717 9.574c-4.511 1.753-11.289 3.839-23.769 4.408c-13.495.616-17.543.746-51.722.746s-38.228-.13-51.723-.746c-12.48-.57-19.257-2.655-23.768-4.408c-5.974-2.321-10.239-5.095-14.718-9.574c-4.479-4.48-7.253-8.744-9.574-14.718c-1.753-4.51-3.839-11.288-4.408-23.768c-.616-13.497-.746-17.545-.746-51.723s.13-38.225.746-51.722c.57-12.48 2.655-19.258 4.408-23.769c2.321-5.974 5.095-10.238 9.574-14.717c4.48-4.48 8.744-7.253 14.718-9.575c4.51-1.753 11.288-3.838 23.768-4.408c13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95c-8.418 3.271-15.556 7.648-22.672 14.764S9.991 35.738 6.72 44.155C3.555 52.297 1.392 61.602.77 75.226C.147 88.878 0 93.237 0 128s.147 39.122.77 52.774c.622 13.625 2.785 22.93 5.95 31.071c3.27 8.417 7.647 15.556 14.763 22.672s14.254 11.492 22.672 14.763c8.142 3.165 17.446 5.328 31.07 5.95c13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95c8.418-3.27 15.556-7.647 22.672-14.763s11.493-14.254 14.764-22.672c3.164-8.142 5.328-17.446 5.95-31.07c.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07c-3.271-8.418-7.648-15.556-14.764-22.672S220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0m0 62.27c-36.302 0-65.73 29.43-65.73 65.73s29.428 65.73 65.73 65.73c36.301 0 65.73-29.428 65.73-65.73c0-36.301-29.429-65.73-65.73-65.73m0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667m83.686-110.994c0 8.484-6.876 15.36-15.36 15.36s-15.36-6.876-15.36-15.36s6.877-15.36 15.36-15.36s15.36 6.877 15.36 15.36" fill="#34d399"></path></svg>
</a>
<a className="text-neutral-400 hover:text-emerald-400 transition" href="#">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="logos" data-logos="linkedin-icon" fill="currentColor" height="20" strokeWidth="2" style={{color: 'rgb(52, 211, 153)', width: '20px', height: '20px'}} viewbox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#34d399"></path></svg>
</a>
</div>
</div>
</div>
</footer>






    </>
  );
}
