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
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
'blob': 'blob 10s infinite',
'scan': 'scan 8s linear infinite',
'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'slide-up-delayed':
'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(30px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
scan: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' },
},
},
},
},
};



      // --- 1. THEME TOGGLE LOGIC ---
      const themeBtn = document.getElementById('theme-toggle');
      const html = document.getElementById('html-root');

      // Check local storage or system preference
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }

      themeBtn.addEventListener('click', () => {
        if (html.classList.contains('dark')) {
          html.classList.remove('dark');
          localStorage.theme = 'light';
        } else {
          html.classList.add('dark');
          localStorage.theme = 'dark';
        }
      });

      // --- 2. SPOTLIGHT & MOUSE TRACKING ---
      document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        // Update CSS variables for the spotlight effect
        document.body.style.setProperty('--mouse-x', `${x}px`);
        document.body.style.setProperty('--mouse-y', `${y}px`);

        // Parallax effect for chaos items in the app section
        const chaosItems = document.querySelectorAll('.chaos-item');
        chaosItems.forEach(item => {
          const speed = 0.03;
          const rect = item.getBoundingClientRect();
          // Calculate distance from center of item
          const itemX = rect.left + rect.width / 2;
          const itemY = rect.top + rect.height / 2;

          // Apply gentle movement away from mouse
          const moveX = (x - itemX) * speed * -1;
          const moveY = (y - itemY) * speed * -1;

          // We modify the custom properties used in CSS if needed,
          // or apply transform directly. Here we use simple transform
          // preserving the original idle animation is tricky via JS override
          // so we'll stick to CSS vars or skip complex JS parallax to keep CSS clean.
        });
      });

      // --- 3. TYPEWRITER EFFECT ---
      const words = ["plumbers", "electricians", "HVAC", "landscapers", "builders", "roofers"];
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      const typeSpeed = 100;
      const deleteSpeed = 50;
      const pauseTime = 2000;
      const typeElement = document.getElementById('typewriter-text');
      const cursorElement = document.getElementById('cursor');

      function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
          typeElement.textContent = currentWord.substring(0, charIndex - 1);
          charIndex--;
        } else {
          typeElement.textContent = currentWord.substring(0, charIndex + 1);
          charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
          isDeleting = true;
          cursorElement.classList.add('cursor-blink');
          setTimeout(type, pauseTime);
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          cursorElement.classList.remove('cursor-blink');
          setTimeout(type, 500);
        } else {
          cursorElement.classList.remove('cursor-blink');
          setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
        }
      }

      // Start typewriter on load
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(type, 1000);
      });

      // --- 4. MODAL LOGIC ---
      const modal = document.getElementById('audit-modal');
      const modalContent = document.getElementById('audit-modal-content');

      function openAuditModal() {
        modal.classList.remove('hidden');
        // Small delay to allow display:block to apply before opacity transition
        setTimeout(() => {
          modalContent.classList.remove('scale-95', 'opacity-0');
          modalContent.classList.add('scale-100', 'opacity-100');
        }, 10);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      }

      function closeAuditModal() {
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');

        setTimeout(() => {
          modal.classList.add('hidden');
          document.body.style.overflow = ''; // Restore scrolling
        }, 300); // Match transition duration
      }

      // Close on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
          closeAuditModal();
        }
      });

      // --- 5. INTERSECTION OBSERVER FOR ANIMATIONS ---
      // Triggers 'emphasized' class on the word "Sell" when scrolled into view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            document.getElementById('word-sell').classList.add('emphasized');
          }
        });
      }, { threshold: 0.5 });

      observer.observe(document.querySelector('h1'));
    


      let currentStep = 1;
      const totalSteps = 5;

      function updateModalUI() {
        const steps = document.querySelectorAll('.form-step');
        const progressBar = document.getElementById('audit-progress');
        const backBtn = document.getElementById('btn-back');
        const nextBtn = document.getElementById('btn-next');
        const indicator = document.getElementById('step-indicator');
        const footer = document.getElementById('audit-footer');

        if (currentStep === 'success') {
          steps.forEach(el => el.classList.add('hidden'));
          document.querySelector('[data-step="success"]').classList.remove('hidden');
          if(footer) footer.style.display = 'none';
          if(progressBar) progressBar.style.width = '100%';
          return;
        }

        steps.forEach(el => {
          if (el.dataset.step == currentStep) {
            el.classList.remove('hidden');
          } else {
            el.classList.add('hidden');
          }
        });

        if(progressBar) progressBar.style.width = `${(currentStep / totalSteps) * 100}%`;

        if(footer) footer.style.display = 'flex';

        if (backBtn) {
          if (currentStep === 1) backBtn.classList.add('hidden');
          else backBtn.classList.remove('hidden');
        }

        if (nextBtn) {
          if (currentStep === totalSteps) {
            nextBtn.innerHTML = 'Submit Audit <iconify-icon icon="lucide:check" width="14"></iconify-icon>';
          } else {
            nextBtn.innerHTML = 'Next Step <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>';
          }
        }

        if (indicator) indicator.textContent = `Step ${currentStep} of ${totalSteps}`;
      }

      function nextStep() {
        const currentStepEl = document.querySelector(`.form-step[data-step="${currentStep}"]`);
        const inputs = currentStepEl.querySelectorAll('input[required], textarea[required]');
        let valid = true;
        inputs.forEach(input => {
          if (!input.value.trim()) {
            valid = false;
            input.classList.add('border-red-500', 'ring-1', 'ring-red-500');
            input.addEventListener('input', () => input.classList.remove('border-red-500', 'ring-1', 'ring-red-500'), {once:true});
          }
        });

        if (currentStep === 2) {
           const rev = currentStepEl.querySelector('input[name="revenue"]:checked');
           if (!rev) {
             valid = false;
             alert('Please select a revenue range.');
           }
        }

        if (!valid) return;

        if (currentStep < totalSteps) {
          currentStep++;
          updateModalUI();
        } else {
          currentStep = 'success';
          updateModalUI();
        }
      }

      function prevStep() {
        if (currentStep > 1) {
          currentStep--;
          updateModalUI();
        }
      }

      // Overwrite openAuditModal to reset form
      window.originalOpenAuditModal = window.openAuditModal;
      window.openAuditModal = function() {
          currentStep = 1;
          if(typeof updateModalUI === 'function') updateModalUI();
          if(window.originalOpenAuditModal) window.originalOpenAuditModal();
      }
    


      document.addEventListener('DOMContentLoaded', () => {
              const dashboard = document.querySelector('.dashboard-ui');
              if (!dashboard) return;

              // Optimization: Hint browser for transform changes
              dashboard.style.willChange = 'transform';
              // Override CSS transition to allow smooth JS interpolation for transform, while keeping box-shadow
              dashboard.style.transition = 'box-shadow 0.5s ease, border-color 0.3s ease';

              // Initial state matches the "idle" state (smaller)
              let currentScale = 0.92;
              let currentRot = 20;
              let targetScale = 0.92;
              let targetRot = 20;
              let isHovered = false;

              dashboard.addEventListener('mouseenter', () => isHovered = true);
              dashboard.addEventListener('mouseleave', () => isHovered = false);

              const loop = () => {
                // Reduced Motion Check
                if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                   // Capped at 1.0 for accessibility/simplicity
                   dashboard.style.transform = 'rotateX(20deg) scale(1)';
                   requestAnimationFrame(loop);
                   return;
                }

                const rect = dashboard.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                const centerY = rect.top + rect.height / 2;
                const viewportCenter = viewportHeight / 2;

                // Distance from center (0 = centered)
                const dist = Math.abs(centerY - viewportCenter);
                // Active range: approx 65% of viewport height (smooth entry/exit)
                const range = viewportHeight * 0.65;

                let progress = 1 - (dist / range);
                progress = Math.max(0, Math.min(1, progress));

                // Smooth easing (Quad ease out)
                const p = progress * (2 - progress);

                // Target Calculations
                // Scale: Starts smaller (0.92) -> Grows to normal (1.00)
                // Range 0.92 to 1.00
                const minScale = 0.92;
                const maxScale = 1.00;
                const baseScale = minScale + ((maxScale - minScale) * p);

                // Hover forces max scale (1.00)
                targetScale = isHovered ? maxScale : baseScale;

                // Rotation: 20deg (idle) -> 5deg (active/center)
                // Keeps the dashboard facing the user when focused
                const baseRot = 20 - (15 * p);
                targetRot = isHovered ? 5 : baseRot;

                // Lerp for cinematic smoothing (0.08 factor)
                currentScale += (targetScale - currentScale) * 0.08;
                currentRot += (targetRot - currentRot) * 0.08;

                // Apply Transform
                dashboard.style.transform = `rotateX(${currentRot.toFixed(2)}deg) scale(${currentScale.toFixed(3)})`;

                requestAnimationFrame(loop);
              };

              loop();
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-blue-50/60 dark:bg-[#030610] transition-colors duration-500">

<div className="ambient-glow">
<div className="glow-blob bg-blue-600/50 dark:bg-blue-600/40 w-[600px] h-[600px] top-[-20%] left-[-10%] mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
<div className="glow-blob bg-blue-600/50 dark:bg-blue-700/40 w-[500px] h-[500px] top-[40%] right-[-10%] mix-blend-multiply dark:mix-blend-screen animate-blob" style={{animationDelay: '2s'}}></div>
<div className="glow-blob bg-blue-500/50 dark:bg-blue-600/40 w-[400px] h-[400px] bottom-[-10%] left-[20%] mix-blend-multiply dark:mix-blend-screen animate-blob" style={{animationDelay: '4s'}}></div>
</div>

<div className="spotlight-overlay"></div>

<div aria-hidden="true" className="laser-beam-container fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="energy-streak layer-far" style={{left: '2%', animationDuration: '13s', animationDelay: '-2s', '--streak-opacity': '0.08'}}></div>
<div className="energy-streak layer-far hidden md:block" style={{left: '15%', animationDuration: '15s', animationDelay: '-10s', '--streak-opacity': '0.1'}}></div>
<div className="energy-streak layer-mid" style={{left: '22%', animationDuration: '8s', animationDelay: '-5s', '--streak-opacity': '0.18'}}></div>
<div className="energy-streak layer-mid" style={{left: '35%', animationDuration: '10s', animationDelay: '-1s', '--streak-opacity': '0.2'}}></div>
<div className="energy-streak layer-near star hidden md:block" style={{left: '42%', animationDuration: '4s', animationDelay: '-3s', '--streak-opacity': '0.5'}}></div>
<div className="energy-streak layer-far" style={{left: '50%', animationDuration: '14s', animationDelay: '-12s', '--streak-opacity': '0.09'}}></div>
<div className="energy-streak layer-mid" style={{left: '60%', animationDuration: '8s', animationDelay: '-8s', '--streak-opacity': '0.19'}}></div>
<div className="energy-streak layer-near" style={{left: '68%', animationDuration: '5s', animationDelay: '-4s', '--streak-opacity': '0.4'}}></div>
<div className="energy-streak layer-far hidden md:block" style={{left: '75%', animationDuration: '15s', animationDelay: '-6s', '--streak-opacity': '0.1'}}></div>
<div className="energy-streak layer-mid" style={{left: '82%', animationDuration: '9s', animationDelay: '-9s', '--streak-opacity': '0.22'}}></div>
<div className="energy-streak layer-mid" style={{left: '90%', animationDuration: '7s', animationDelay: '-2s', '--streak-opacity': '0.25'}}></div>
<div className="energy-streak layer-far hidden md:block" style={{left: '96%', animationDuration: '17s', animationDelay: '-10s', '--streak-opacity': '0.08'}}></div>
</div>

<div className="tech-grid bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]"></div>

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent via-blue-500/50"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 border-b bg-white/70 dark:bg-[#020204]/70 backdrop-blur-xl border-slate-200 dark:border-white/5 transition-all duration-300 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#020204]/60">
<a className="flex items-center gap-2 cursor-pointer group" href="#" onclick="window.scrollTo(0,0); return false;">
<div className="relative flex items-center justify-center w-9 h-9 transition-transform group-active:scale-95 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-blue-500/20 dark:to-emerald-500/20 rounded-lg border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
<iconify-icon className="text-blue-600 dark:text-blue-400" icon="lucide:layers" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm tracking-tight font-bold text-slate-900 dark:text-white leading-none">
            SORA
          </span>
<span className="text-[9px] tracking-widest text-blue-600 dark:text-blue-400 uppercase font-mono mt-0.5">
            Business Solutions
          </span>
</div>
</a>
<div className="hidden md:flex items-center gap-1 p-1 rounded-full border backdrop-blur-md bg-slate-100/50 dark:bg-white/5 border-slate-200 dark:border-white/5">
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5" href="#home">
          Home
        </a>
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5" href="#services">
          Systems
        </a>
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5" href="#app">
          Sora App
        </a>
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5" href="#method">
          Method
        </a>
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5" href="#pricing">
          Pricing
        </a>
</div>
<div className="flex items-center gap-3">

<button aria-label="Toggle Theme" className="group theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-md border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0a0c] text-slate-600 dark:text-slate-400 hover:border-blue-500/50 hover:text-blue-500 transition-all shadow-sm dark:shadow-none" id="theme-toggle">
<iconify-icon className="absolute transition-transform duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 dark:opacity-0" icon="lucide:moon" id="theme-icon-moon" width="16"></iconify-icon>
<iconify-icon className="absolute transition-transform duration-500 rotate-90 scale-0 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100" icon="lucide:sun" id="theme-icon-sun" width="16"></iconify-icon>
</button>
<button className="group relative text-xs font-semibold bg-white dark:bg-[#0a0a0c] border px-5 py-2 rounded-md transition-all overflow-hidden hover:border-blue-500/50 shadow-sm dark:shadow-[0_0_0_1px_rgba(0,0,0,0)] dark:hover:shadow-[0_0_0_1px_rgba(59,130,246,0.2)] text-slate-900 dark:text-white border-slate-200 dark:border-white/10 active:scale-95" onclick="openAuditModal()">
<span className="btn-content-slide">
<span className="btn-text-original">
<span className="md:hidden">Free Audit</span>
<span className="hidden md:inline">Free Growth Audit</span>
</span>
<span className="btn-text-hover text-blue-600 dark:text-blue-300">
              Book Audit →
            </span>
</span>
</button>
</div>
</nav>

<main className="min-h-screen flex flex-col overflow-hidden z-10 w-full pt-32 pb-20 relative items-center" id="home">

<div className="z-20 text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 dark:bg-blue-500/5 text-[11px] font-medium mb-6 animate-fade-in shadow-[0_0_20px_rgba(59,130,246,0.15)] text-blue-700 dark:text-blue-300 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span>Sora Business Solutions</span>
</div>
<h1 className="flex flex-col items-center text-center z-20 mt-2 mb-10">
<span className="block text-5xl md:text-8xl font-extrabold tracking-tighter text-slate-900 dark:text-white leading-[0.95] animate-slide-up bg-clip-text text-transparent bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-white dark:to-white/80 drop-shadow-sm pb-2 md:pb-3">
            Automate.
            <span className="sell-word text-slate-900 dark:text-white" id="word-sell">
              Sell
            </span>
            . Scale.
          </span>
<span className="block h-[1.1em] text-4xl md:text-7xl font-serif italic font-light text-slate-500 dark:text-slate-400/90 tracking-tight mt-1 md:-mt-2 opacity-100 min-h-[1.1em]">
            service businesses:
            <span id="typewriter-text"></span>
<span className="cursor-blink inline-block w-[2px] md:w-[3px] h-[0.85em] bg-blue-500/80 dark:bg-blue-400/80 ml-1 align-baseline rounded-full relative top-[2px]" id="cursor"></span>
</span>
</h1>
<p className="leading-relaxed text-base max-w-2xl mx-auto mb-10 font-light text-slate-600 dark:text-slate-400 relative z-20 animate-slide-up-delayed opacity-0" style={{animationDelay: '2.2s'}}>
          Sora builds the
          <span className="text-slate-900 dark:text-white font-medium">
            infrastructure
          </span>
          that captures, qualifies, and converts leads automatically. Stop
          chasing work and start growing your business.
        </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-5 relative z-20 animate-slide-up-delayed opacity-0" style={{animationDelay: '2.3s'}}>
<div className="btn-glow-border group cursor-pointer w-full md:w-auto shadow-lg shadow-blue-500/10 dark:shadow-none">
<button className="relative z-10 w-full md:w-auto block px-8 py-3.5 bg-slate-900 dark:bg-[#0a0a0c] text-sm font-semibold rounded-[5px] transition-all hover:bg-slate-800 dark:hover:bg-[#121215] active:bg-black dark:active:bg-[#16161a] text-white" onclick="openAuditModal()">
<span className="btn-content-slide">
<span className="btn-text-original">Book Free Audit</span>
<span className="btn-text-hover text-blue-300">
                  Start Scaling Now
                </span>
</span>
</button>
</div>
<button className="group flex transition-all md:w-auto text-sm font-medium bg-white/80 dark:bg-[#0a0a0b] w-full border border-slate-200 dark:border-transparent rounded-md pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center justify-center hover:text-slate-900 dark:hover:text-white text-slate-500 dark:text-slate-400 active:scale-95 shadow-sm dark:shadow-none backdrop-blur-sm" onclick="document.getElementById('app').scrollIntoView({behavior: 'smooth'})">
<iconify-icon className="text-slate-400 dark:text-slate-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" icon="lucide:layout-grid" width="16"></iconify-icon>
<span className="border-b border-transparent group-hover:border-slate-500 transition-all">
              See the Sora System
            </span>
</button>
</div>
</div>

<div className="dashboard-container w-full max-w-6xl z-20 mx-auto px-4 relative animate-slide-up-delayed opacity-0 mt-[120px]" style={{animationDelay: '0.5s'}}>
<div className="dashboard-ui relative w-full rounded-xl bg-white dark:bg-[#0a0a0c] overflow-hidden">
<style>
            @keyframes flowBeam {
              0% { transform: translateX(-100%); opacity: 0; }
              50% { opacity: 1; }
              100% { transform: translateX(100%); opacity: 0; }
            }
            @keyframes flowBeamVertical {
              0% { transform: translateY(-100%); opacity: 0; }
              50% { opacity: 1; }
              100% { transform: translateY(100%); opacity: 0; }
            }
            .animate-flow-beam {
              animation: flowBeam 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            }
            .animate-flow-beam-vertical {
              animation: flowBeamVertical 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            }
          </style>

<div className="h-9 border-b bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/5 flex items-center px-4 justify-between select-none">
<div className="flex gap-1.5 opacity-60">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20"></div>
</div>
<div className="text-[10px] font-mono text-slate-400 dark:text-slate-500 tracking-widest uppercase flex items-center gap-2">
<iconify-icon icon="lucide:activity" width="12"></iconify-icon>
              Revenue_Motion_v2
            </div>
<div className="w-10"></div>
</div>

<div className="relative p-6 md:p-10 min-h-[420px] flex flex-col justify-center bg-slate-50/50 dark:bg-[#030304] overflow-hidden">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, var(--dot-color, #cbd5e1) 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: '0.5'}}></div>
<style>
              html.dark .absolute[style*="background-image"] { --dot-color: #262626; }
            </style>

<div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-8 md:gap-4">

<div className="flex-1 flex flex-col items-center group">

<div className="mb-4 transform transition-all duration-500 md:group-hover:-translate-y-1">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-sm">
<span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">
                      Leads Captured
                    </span>
<span className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                      128
                    </span>
</div>
</div>

<div className="relative w-full max-w-[240px] p-px rounded-xl bg-gradient-to-b from-slate-200 to-slate-100 dark:from-white/10 dark:to-white/5 shadow-lg transition-transform md:group-hover:scale-105 duration-300">
<div className="bg-white dark:bg-[#0e0e10] rounded-[11px] p-5 relative overflow-hidden h-full flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-500/10 flex items-center justify-center mb-3 text-red-500 dark:text-red-400 border border-red-100 dark:border-red-500/20">
<iconify-icon icon="lucide:phone-missed" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                      Inbound Lead Missed
                    </h3>
<p className="text-[10px] text-slate-500 dark:text-slate-400 leading-snug">
                      Call, SMS, or web inquiry received but not answered
                      instantly.
                    </p>
</div>
</div>
</div>

<div className="hidden md:flex flex-col justify-center flex-1 mx-2 relative h-12">

<div className="h-[2px] w-full bg-slate-200 dark:bg-white/10 relative overflow-hidden rounded-full">
<div className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-flow-beam" style={{left: '-50%'}}></div>
</div>
</div>

<div className="md:hidden h-12 w-[2px] bg-slate-200 dark:bg-white/10 mx-auto relative overflow-hidden rounded-full">
<div className="absolute left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-flow-beam-vertical w-full" style={{top: '-50%'}}></div>
</div>

<div className="flex-[1.4] flex flex-col items-center z-20 group">

<div className="mb-5 transform transition-all duration-500 md:group-hover:-translate-y-1">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-500/30 shadow-sm shadow-blue-500/10 backdrop-blur-sm">
<span className="text-[9px] uppercase tracking-wider text-blue-600 dark:text-blue-300 font-bold">
                      Response Time
                    </span>
<span className="text-xs font-mono font-bold text-blue-700 dark:text-blue-200">
                      0:12s
                    </span>
</div>
</div>

<div className="relative w-full max-w-[320px] p-[1px] rounded-2xl bg-gradient-to-br from-blue-300 via-blue-500 to-indigo-600 shadow-[0_0_50px_-10px_rgba(59,130,246,0.25)] transition-transform md:group-hover:scale-105 duration-300">
<div className="bg-white dark:bg-[#0a0a0c] rounded-[15px] p-6 relative overflow-hidden h-full">

<div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 blur-3xl pointer-events-none"></div>
<div className="flex items-center gap-4 mb-5 border-b border-slate-100 dark:border-white/5 pb-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 shrink-0">
<iconify-icon icon="lucide:bot" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                          Sora Receptionist
                        </h3>
<p className="text-[10px] text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wide">
                          AI Automation Hub
                        </p>
</div>
</div>

<div className="space-y-2.5">
<div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_#3b82f6]"></div>
<span className="text-[11px] font-medium text-slate-700 dark:text-slate-200">
                          Replies instantly (24/7)
                        </span>
</div>
<div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_#3b82f6]"></div>
<span className="text-[11px] font-medium text-slate-700 dark:text-slate-200">
                          Qualifies lead intent
                        </span>
</div>
<div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_#3b82f6]"></div>
<span className="text-[11px] font-medium text-slate-700 dark:text-slate-200">
                          Auto-follows up
                        </span>
</div>
</div>
</div>
</div>
</div>

<div className="hidden md:flex flex-col justify-center flex-1 mx-2 relative h-12">
<div className="h-[2px] w-full bg-slate-200 dark:bg-white/10 relative overflow-hidden rounded-full">
<div className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-flow-beam" style={{left: '-50%', animationDelay: '1s'}}></div>
</div>
</div>

<div className="md:hidden h-12 w-[2px] bg-slate-200 dark:bg-white/10 mx-auto relative overflow-hidden rounded-full">
<div className="absolute left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-emerald-500 to-transparent animate-flow-beam-vertical w-full" style={{top: '-50%', animationDelay: '1s'}}></div>
</div>

<div className="flex-1 flex flex-col items-center group">

<div className="mb-4 transform transition-all duration-500 md:group-hover:-translate-y-1">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-500/30 shadow-sm backdrop-blur-sm">
<span className="text-[9px] uppercase tracking-wider text-emerald-600 dark:text-emerald-300 font-bold">
                      Jobs Quoted
                    </span>
<span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-200">
                      $84.2k
                    </span>
</div>
</div>

<div className="relative w-full max-w-[240px] p-px rounded-xl bg-gradient-to-b from-emerald-400 to-emerald-600 shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)] transition-transform md:group-hover:scale-105 duration-300">
<div className="bg-white dark:bg-[#0e0e10] rounded-[11px] p-5 relative overflow-hidden h-full flex flex-col items-center text-center">
<div className="absolute inset-0 bg-emerald-500/5 pointer-events-none"></div>
<div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center mb-3 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
<iconify-icon icon="lucide:check-circle-2" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                      Job Booked Automatically
                    </h3>
<p className="text-[10px] text-emerald-700 dark:text-emerald-400/80 font-medium leading-snug">
                      Added to calendar &amp; CRM. Quote sent.
                    </p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-4 left-0 right-0 text-center">
<div className="inline-flex items-center gap-2 text-[10px] text-slate-400 dark:text-slate-600 font-mono uppercase tracking-widest opacity-60">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                System Active
              </div>
</div>
</div>
</div>
</div>
<div className="horizon-ring border border-slate-200 dark:border-white/5 shadow-[0_-40px_100px_-20px_rgba(59,130,246,0.1),inset_0_20px_100px_-20px_rgba(16,185,129,0.05)] dark:shadow-[0_-40px_100px_-20px_rgba(59,130,246,0.2),inset_0_20px_100px_-20px_rgba(16,185,129,0.1)]"></div>
</main>

<section className="relative py-24 bg-transparent overflow-hidden border-t border-slate-200 dark:border-white/5" id="method">
<div className="absolute inset-0 bg-slate-50/10 dark:bg-[#020204]/70 -z-10 transition-colors duration-500"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-slate-900 dark:text-white tracking-tight font-serif mb-4">
            The Sora System
          </h2>
<p className="text-slate-600 dark:text-slate-400">
            A proven 3-step framework to scale service businesses.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-xl border border-slate-200 dark:border-white/5 bg-white/70 dark:bg-white/[0.02] hover:border-slate-300 dark:hover:bg-white/[0.04] transition-all relative group backdrop-blur-sm shadow-sm dark:shadow-none">
<div className="text-5xl font-bold text-slate-100 dark:text-white/5 absolute right-4 top-4 group-hover:text-blue-500/10 transition-colors">
              01
            </div>
<div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
<iconify-icon icon="lucide:search" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-slate-900 dark:text-white font-medium mb-3">
              Audit &amp; Strategy
            </h3>
<p className="text-sm text-slate-600 dark:text-slate-500 leading-relaxed">
              We analyze your entire customer journey. We identify where you are
              leaking leads and find the highest-ROI automation opportunities.
            </p>
</div>

<div className="p-8 rounded-xl border border-slate-200 dark:border-white/5 bg-white/70 dark:bg-white/[0.02] hover:border-slate-300 dark:hover:bg-white/[0.04] transition-all relative group backdrop-blur-sm shadow-sm dark:shadow-none">
<div className="text-5xl font-bold text-slate-100 dark:text-white/5 absolute right-4 top-4 group-hover:text-emerald-500/10 transition-colors">
              02
            </div>
<div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20">
<iconify-icon icon="lucide:cpu" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-slate-900 dark:text-white font-medium mb-3">
              Build &amp; Automate
            </h3>
<p className="text-sm text-slate-600 dark:text-slate-500 leading-relaxed">
              We deploy the Sora Operating System. We set up your AI reception,
              CRM, and workflow automations tailored to your specific trade.
            </p>
</div>

<div className="p-8 rounded-xl border border-slate-200 dark:border-white/5 bg-white/70 dark:bg-white/[0.02] hover:border-slate-300 dark:hover:bg-white/[0.04] transition-all relative group backdrop-blur-sm shadow-sm dark:shadow-none">
<div className="text-5xl font-bold text-slate-100 dark:text-white/5 absolute right-4 top-4 group-hover:text-orange-500/10 transition-colors">
              03
            </div>
<div className="w-12 h-12 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-orange-500/20">
<iconify-icon icon="lucide:rocket" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-slate-900 dark:text-white font-medium mb-3">
              Optimise &amp; Scale
            </h3>
<p className="text-sm text-slate-600 dark:text-slate-500 leading-relaxed">
              We don't leave you hanging. We refine the AI's performance, train
              your team on the app, and support your growth to 7-figures and
              beyond.
            </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-transparent border-slate-200 dark:border-white/5 border-t pt-32 pb-32 relative" id="services">
<div className="absolute inset-0 bg-slate-50/20 dark:bg-[#020204]/70 -z-10 transition-colors duration-500"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-20 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 font-serif text-slate-900 dark:text-white">
            Built for
            <span className="font-serif text-blue-600 dark:text-blue-400">
              real-world outcomes.
            </span>
</h2>
<p className="text-lg leading-relaxed font-light text-slate-600 dark:text-slate-400">
            We don't just "do AI". We implement complete business operating
            systems that handle your reception, sales, and admin.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 relative z-10">

<div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-[#050505]/80 p-8 shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:border-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:-translate-y-1 focus:shadow-2xl backdrop-blur-sm md:col-span-2 lg:col-span-6 lg:row-span-2" tabindex="0">
<div className="absolute top-10 right-10 z-0 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 hidden lg:flex items-center gap-2 select-none pointer-events-none">
<div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
<iconify-icon icon="lucide:phone" width="14"></iconify-icon>
</div>
<div className="w-3 h-0.5 bg-blue-200 dark:bg-blue-800/50"></div>
<div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
<iconify-icon icon="lucide:message-square" width="14"></iconify-icon>
</div>
<div className="w-3 h-0.5 bg-blue-200 dark:bg-blue-800/50"></div>
<div className="w-8 h-8 rounded-lg bg-blue-600 dark:bg-blue-500 border border-blue-600 dark:border-blue-500 flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="lucide:calendar-check" width="14"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-center gap-4 mb-8">
<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 transition-colors duration-300 dark:border-blue-500/10 dark:bg-blue-500/5 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 shadow-sm">
<iconify-icon icon="lucide:phone-call" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 dark:text-white">
                  AI Lead Reception
                </h3>
</div>
<p className="mb-8 text-base leading-relaxed text-slate-600 dark:text-slate-400 flex-1">
                Never miss a job because you were on a ladder. Our AI handles
                calls, SMS, and web forms 24/7. It qualifies leads, answers
                questions, and books appointments directly into your calendar.
              </p>
<div className="grid grid-cols-2 gap-3 mt-auto">
<div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition-colors dark:border-white/5 dark:bg-white/[0.02] dark:text-slate-300 group-hover:border-blue-200 dark:group-hover:border-blue-500/20">
                  Missed Call Textback
                </div>
<div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition-colors dark:border-white/5 dark:bg-white/[0.02] dark:text-slate-300 group-hover:border-blue-200 dark:group-hover:border-blue-500/20">
<div className="absolute top-8 right-8 z-0 opacity-40 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
<div className="flex items-end gap-1.5 h-10">
<div className="w-2.5 bg-emerald-200/50 dark:bg-emerald-500/20 rounded-t-sm h-[30%]"></div>
<div className="w-2.5 bg-emerald-300/50 dark:bg-emerald-500/40 rounded-t-sm h-[50%]"></div>
<div className="w-2.5 bg-emerald-400/50 dark:bg-emerald-500/60 rounded-t-sm h-[70%]"></div>
<div className="w-2.5 bg-emerald-500 dark:bg-emerald-500 rounded-t-sm h-[100%] shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
</div>
</div>
                  Instant Quotes
                </div>
<div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition-colors dark:border-white/5 dark:bg-white/[0.02] dark:text-slate-300 group-hover:border-blue-200 dark:group-hover:border-blue-500/20">
<div className="absolute top-8 right-8 z-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-cyan-400/50 dark:bg-cyan-500/50"></div>
<div className="w-6 h-px bg-cyan-200 dark:bg-cyan-800"></div>
<div className="w-2 h-2 rounded-full bg-cyan-500/80 dark:bg-cyan-400/80 shadow-[0_0_5px_rgba(6,182,212,0.4)]"></div>
<div className="w-6 h-px bg-cyan-200 dark:bg-cyan-800"></div>
<div className="w-2 h-2 rounded-full bg-cyan-400/50 dark:bg-cyan-500/50"></div>
</div>
</div>
                  Calendar Booking
                </div>
<div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition-colors dark:border-white/5 dark:bg-white/[0.02] dark:text-slate-300 group-hover:border-blue-200 dark:group-hover:border-blue-500/20">
<div className="absolute top-8 right-8 z-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
<div className="w-14 h-10 border border-purple-200 dark:border-purple-500/30 rounded bg-purple-50/50 dark:bg-purple-900/10 flex flex-col p-1 gap-1">
<div className="w-full h-1.5 bg-purple-200 dark:bg-purple-500/40 rounded-sm"></div>
<div className="flex gap-1 h-full">
<div className="w-full h-full bg-purple-100 dark:bg-purple-500/20 rounded-sm"></div>
</div>
</div>
</div>
                  Google Review AI
                </div>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-[#050505]/80 p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:-translate-y-1 focus:shadow-xl backdrop-blur-sm md:col-span-2 lg:col-span-6" tabindex="0">
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-center gap-4 mb-6">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-600 transition-colors duration-300 dark:border-emerald-500/10 dark:bg-emerald-500/5 dark:text-emerald-400 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 shadow-sm">
<iconify-icon icon="lucide:bar-chart-3" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 dark:text-white">
                  CRM &amp; Sales Automation
                </h3>
</div>
<p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400 flex-1">
                Stop using spreadsheets. We build visual pipelines that track
                every dollar. Automate follow-ups so no lead goes cold.
              </p>
<div className="flex items-center gap-6 opacity-80 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 mt-auto">
<div className="flex flex-col gap-1">
<span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
                    PIPELINE VALUE
                  </span>
<span className="font-mono text-lg text-slate-900 dark:text-white">
                    $142,500
                  </span>
</div>
<div className="h-8 w-px bg-slate-200 dark:bg-white/10"></div>
<div className="flex flex-col gap-1">
<span className="font-mono text-[10px] text-slate-500 dark:text-slate-400">
                    CONVERSION
                  </span>
<span className="font-mono text-lg text-slate-900 dark:text-white">
                    28%
                  </span>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-[#050505]/80 p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:-translate-y-1 focus:shadow-xl backdrop-blur-sm md:col-span-2 lg:col-span-6" tabindex="0">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.08),transparent_50%)]"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-center gap-4 mb-6">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-100 bg-cyan-50 text-cyan-600 transition-colors duration-300 dark:border-white/10 dark:bg-white/5 dark:text-cyan-400 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-500/20 shadow-sm">
<iconify-icon icon="lucide:network" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 dark:text-white">
                  Total Integration
                </h3>
</div>
<p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400 flex-1">
                We connect your world. Ads to Website → Website to CRM → CRM to
                Invoicing (Xero/Quickbooks). Eliminating manual admin data entry
                entirely.
              </p>
<div className="inline-flex items-center gap-2 text-xs font-medium text-cyan-600 transition-colors hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300 mt-auto">
                Audit your workflow
                <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-[#050505]/80 p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:-translate-y-1 focus:shadow-xl backdrop-blur-sm md:col-span-1 lg:col-span-3" tabindex="0">
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-center gap-4 mb-6">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-100 bg-purple-50 text-purple-600 transition-colors duration-300 dark:border-white/10 dark:bg-white/5 dark:text-purple-400 group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 shadow-sm">
<iconify-icon icon="lucide:layout" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 dark:text-white">
                  Websites
                </h3>
</div>
<p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 flex-1">
                High-conversion sites designed to turn visitors into booked
                jobs. Mobile-optimized for trades.
              </p>
</div>
</div>

<div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-[#050505]/80 p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-orange-500/30 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:-translate-y-1 focus:shadow-xl backdrop-blur-sm md:col-span-1 lg:col-span-3" tabindex="0">
<div className="absolute top-8 right-8 z-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
<div className="relative w-8 h-8">
<svg className="text-orange-400/80 dark:text-orange-500/80 absolute inset-0 w-full h-full" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
</div>
</div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-center gap-4 mb-6">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-100 bg-orange-50 text-orange-600 transition-colors duration-300 dark:border-white/10 dark:bg-white/5 dark:text-orange-400 group-hover:bg-orange-100 dark:group-hover:bg-orange-500/20 shadow-sm">
<iconify-icon icon="lucide:trending-up" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 dark:text-white">
                  Growth Ops
                </h3>
</div>
<p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 flex-1">
                Funnels, ads management, and reputation management to keep the
                leads flowing.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-12 md:py-24 bg-transparent border-t border-slate-200 dark:border-white/5 overflow-hidden" id="app">

<div className="absolute inset-0 bg-blue-50/10 dark:bg-[#020204]/70 -z-10 transition-colors duration-500"></div>
<div aria-hidden="true" className="hidden md:block absolute inset-0 z-0 pointer-events-none chaos-container md:overflow-hidden" id="chaos-container">

<div className="chaos-item jitter" style={{marginLeft: '-320px', marginTop: '-240px', '--mx': '-20px', '--my': '-20px', animationDelay: '0s'}}>
<div className="flex items-center gap-3 px-5 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-full shadow-lg border border-white/50 dark:border-white/10">
<div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
<iconify-icon className="text-slate-600 dark:text-slate-400" icon="lucide:mail" width="20"></iconify-icon>
<span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              New Inquiry
            </span>
</div>
</div>
<div className="chaos-item idle" style={{marginLeft: '-380px', marginTop: '-40px', '--mx': '-40px', '--my': '10px', animationDelay: '0.2s'}}>
<div className="p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-3xl shadow-xl border border-slate-200/50 dark:border-white/10">
<iconify-icon icon="logos:whatsapp-icon" width="26"></iconify-icon>
</div>
</div>
<div className="chaos-item idle" style={{marginLeft: '-300px', marginTop: '160px', '--mx': '-15px', '--my': '30px', animationDelay: '0.5s'}}>
<div className="flex items-center gap-3 px-5 py-2.5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-xl shadow-lg border border-red-100 dark:border-red-500/20">
<iconify-icon className="text-red-500" icon="lucide:phone-missed" width="20"></iconify-icon>
<span className="text-xs font-mono text-slate-500">0412...</span>
</div>
</div>
<div className="chaos-item jitter" style={{marginLeft: '-220px', marginTop: '300px', '--mx': '-30px', '--my': '20px', animationDelay: '0.1s'}}>
<div className="flex items-center gap-3 px-4 py-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full shadow-lg border border-blue-100 dark:border-blue-500/20">
<iconify-icon icon="logos:messenger" width="22"></iconify-icon>
<div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
</div>
</div>
<div className="chaos-item idle" style={{marginLeft: '-120px', marginTop: '-340px', '--mx': '-10px', '--my': '-30px', animationDelay: '1.2s'}}>
<div className="w-12 h-12 flex items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-full shadow border border-slate-100 dark:border-white/10">
<iconify-icon className="text-slate-400" icon="lucide:message-square" width="20"></iconify-icon>
</div>
</div>

<div className="chaos-item idle" style={{marginLeft: '320px', marginTop: '-220px', '--mx': '20px', '--my': '-25px', animationDelay: '0.7s'}}>
<div className="flex items-center gap-3 px-5 py-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200 dark:border-white/10">
<iconify-icon className="text-orange-500" icon="lucide:calendar" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Booking Req
            </span>
</div>
</div>
<div className="chaos-item jitter" style={{marginLeft: '380px', marginTop: '-20px', '--mx': '15px', '--my': '5px', animationDelay: '0.3s'}}>
<div className="p-3.5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-full shadow-lg border border-pink-100 dark:border-pink-500/20">
<iconify-icon icon="skill-icons:instagram" width="24"></iconify-icon>
</div>
</div>
<div className="chaos-item idle" style={{marginLeft: '300px', marginTop: '180px', '--mx': '40px', '--my': '15px', animationDelay: '0.9s'}}>
<div className="flex flex-col gap-1.5 p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-xl shadow-lg border border-slate-200 dark:border-white/10">
<div className="h-1.5 w-16 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
<div className="h-1.5 w-11 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
</div>
</div>
<div className="chaos-item idle" style={{marginLeft: '220px', marginTop: '320px', '--mx': '25px', '--my': '40px', animationDelay: '1.5s'}}>
<div className="flex items-center gap-3 px-5 py-2.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full shadow-md border border-slate-100 dark:border-white/10">
<div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
<span className="text-xs text-slate-500">Lead #291</span>
</div>
</div>
<div className="chaos-item jitter" style={{marginLeft: '100px', marginTop: '-310px', '--mx': '50px', '--my': '-10px', animationDelay: '0.4s'}}>
<div className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
<iconify-icon className="text-blue-500" icon="lucide:at-sign" width="18"></iconify-icon>
</div>
</div>
</div>
<div className="z-10 flex flex-col max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center">

<div className="text-center mb-10 md:mb-20 max-w-3xl">
<span className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-6 block">
            The Sora Solution
          </span>
<h2 className="md:text-6xl text-4xl font-medium text-slate-900 dark:text-white tracking-tight mb-6">
            Every Conversation.
            <span className="text-blue-500">One Inbox.</span>
            Total Control.
          </h2>
<p className="text-slate-600 dark:text-slate-400 text-lg font-light max-w-xl mx-auto">
            CRM, Messages, Pipeline, Tasks, Automations — Unified.
          </p>
</div>

<div className="relative w-auto max-w-[90vw] md:max-w-[360px] md:w-full h-[70vh] md:h-auto aspect-[9/19.5] md:aspect-auto perspective-dramatic mx-auto group phone-wrapper-trigger">

<div className="absolute inset-0 z-[-1] rounded-[3rem] bg-blue-500/0 transition-all duration-700 ease-out group-hover:bg-blue-400/10 dark:group-hover:bg-blue-500/10 scale-95 group-hover:scale-110 blur-2xl md:blur-3xl"></div>

<div className="phone-pulse-ring absolute inset-[-10px] z-[-1] rounded-[3.2rem] border-2 border-blue-500/50 pointer-events-none"></div>

<div className="absolute top-32 -left-12 md:-left-24 w-52 h-64 bg-white/95 dark:bg-[#0a0a0c]/90 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-2xl dark:shadow-blue-900/10 z-0 transform -rotate-6 origin-bottom-right transition-all duration-300 ease-out hover:-translate-x-12 hover:scale-105 hover:opacity-100 focus:-translate-x-12 focus:scale-105 focus:opacity-100 opacity-90 border border-slate-100 dark:border-white/10 group/card motion-reduce:transition-opacity motion-reduce:hover:translate-x-0 motion-reduce:hover:transform-none hidden md:block" tabindex="0">
<div className="p-5 h-full flex flex-col">

<div className="flex items-center gap-3 mb-4">
<div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 shadow-sm border border-emerald-100 dark:border-emerald-500/20">
<iconify-icon icon="lucide:trending-up" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-bold text-slate-900 dark:text-white leading-none">
                    Monthly Revenue
                  </span>
<span className="text-[9px] text-slate-500 dark:text-slate-400 mt-1 font-medium tracking-tight">
                    Consistent growth
                  </span>
</div>
</div>

<div className="flex-1 relative w-full flex items-end pb-1">

<div className="absolute inset-0 flex flex-col justify-between py-2 opacity-[0.08] pointer-events-none">
<div className="w-full h-px bg-slate-900 dark:bg-white"></div>
<div className="w-full h-px bg-slate-900 dark:bg-white"></div>
<div className="w-full h-px bg-slate-900 dark:bg-white"></div>
<div className="w-full h-px bg-slate-900 dark:bg-white"></div>
</div>

<svg className="w-full h-28 overflow-visible z-10" preserveaspectratio="none" viewbox="0 0 100 40">
<defs>
<lineargradient id="revenueGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10b981" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#10b981" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,35 C15,32 25,25 40,22 C55,19 65,26 75,15 C85,6 92,8 100,2" fill="none" stroke="#10b981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<path d="M0,35 C15,32 25,25 40,22 C55,19 65,26 75,15 C85,6 92,8 100,2 V40 H0 Z" fill="url(#revenueGradient)" stroke="none"></path>
<circle className="fill-white dark:fill-[#0a0a0c] stroke-emerald-500 stroke-2" cx="100" cy="2" r="3.5"></circle>
</svg>
</div>
</div>
</div>

<div className="absolute top-48 -right-12 md:-right-24 w-52 h-64 bg-white/95 dark:bg-[#0a0a0c]/90 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-2xl dark:shadow-blue-900/10 z-0 transform rotate-6 origin-bottom-left transition-all duration-300 ease-out hover:translate-x-12 hover:scale-105 hover:opacity-100 focus:translate-x-12 focus:scale-105 focus:opacity-100 opacity-90 border border-slate-100 dark:border-white/10 group/card motion-reduce:transition-opacity motion-reduce:hover:translate-x-0 motion-reduce:hover:transform-none hidden md:block" tabindex="0">
<div className="p-5 h-full flex flex-col">

<div className="flex flex-row-reverse items-center gap-3 mb-4 text-right">
<div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 shadow-sm border border-blue-100 dark:border-blue-500/20">
<iconify-icon icon="lucide:calendar" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-bold text-slate-900 dark:text-white leading-none">
                    Booked Calendar
                  </span>
<span className="text-[9px] text-slate-500 dark:text-slate-400 mt-1 font-medium tracking-tight">
                    Jobs confirmed
                  </span>
</div>
</div>

<div className="flex-1 w-full grid grid-cols-4 gap-2 opacity-90 content-start">
<div className="aspect-square rounded-md bg-slate-100 dark:bg-white/5"></div>
<div className="aspect-square rounded-md bg-slate-100 dark:bg-white/5"></div>
<div className="col-span-2 aspect-auto rounded-md bg-blue-500 shadow-md shadow-blue-500/20 flex items-center justify-center">
<span className="text-[10px] font-bold text-white">Booked</span>
</div>
<div className="aspect-square rounded-md bg-slate-100 dark:bg-white/5"></div>
<div className="col-span-2 aspect-auto rounded-md bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-500/20"></div>
<div className="aspect-square rounded-md bg-slate-100 dark:bg-white/5"></div>
<div className="aspect-square rounded-md bg-slate-100 dark:bg-white/5"></div>
<div className="aspect-square rounded-md bg-slate-100 dark:bg-white/5"></div>
<div className="col-span-2 aspect-auto rounded-md bg-blue-500 shadow-md shadow-blue-500/20 flex items-center justify-center">
<iconify-icon className="text-white w-3 h-3" icon="lucide:check"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="relative z-10 bg-white rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-[8px] border-[#1c1c1e] overflow-hidden w-full h-full md:h-[720px] shadow-2xl flex flex-col ring-1 ring-black/5 dark:ring-white/10">
<div className="absolute top-0 inset-x-0 h-8 bg-transparent z-50 flex justify-center pointer-events-none">
<div className="w-28 h-7 bg-[#1c1c1e] rounded-b-2xl"></div>
</div>
<div className="pt-14 pb-2 px-6 bg-white flex items-center justify-between border-b border-transparent">
<div className="flex items-center gap-2">
<div className="text-blue-600">
<iconify-icon icon="lucide:layers" width="22"></iconify-icon>
</div>
<span className="font-bold text-slate-900 tracking-tight text-lg">
                  SORA
                </span>
</div>
<button className="text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon className="" icon="lucide:search" width="20"></iconify-icon>
</button>
</div>
<div className="flex items-center px-6 border-b border-slate-100 bg-white pt-2">
<div className="pb-3 border-b-[2.5px] border-blue-600 text-blue-600 text-sm font-semibold cursor-pointer mr-6 transition-colors">
                Inbox
              </div>
<div className="pb-3 border-b-[2.5px] border-transparent text-slate-400 text-sm font-medium cursor-pointer hover:text-slate-600 mr-6 transition-colors">
                CRM
              </div>
<div className="pb-3 border-b-[2.5px] border-transparent text-slate-400 text-sm font-medium cursor-pointer hover:text-slate-600 mr-6 transition-colors">
                Calendar
              </div>
<div className="pb-3 border-b-[2.5px] border-transparent text-slate-400 text-sm font-medium cursor-pointer hover:text-slate-600 transition-colors">
                Tasks
              </div>
</div>
<div className="flex-1 overflow-y-auto bg-slate-50/50 p-4 space-y-3 no-scrollbar scroll-smooth">
<div className="bg-white p-4 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-slate-100 flex items-center gap-3.5 hover:shadow-md transition-shadow cursor-pointer group">
<div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm border border-emerald-200/50">
                  R
                </div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<span className="font-semibold text-slate-900 text-[15px]">
                      Rick
                    </span>
<iconify-icon className="opacity-80 group-hover:opacity-100 transition-opacity" icon="logos:whatsapp-icon" width="16"></iconify-icon>
</div>
<p className="text-[13px] text-slate-500 truncate group-hover:text-slate-700 transition-colors">
                    Yep lock it in 👍
                  </p>
</div>
</div>
<div className="bg-white p-4 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-slate-100 flex items-center gap-3.5 hover:shadow-md transition-shadow cursor-pointer group">
<div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold text-sm border border-orange-200/50">
                  C
                </div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<span className="font-semibold text-slate-900 text-[15px]">
                      Clark
                    </span>
<iconify-icon className="opacity-80 group-hover:opacity-100 transition-opacity" icon="skill-icons:instagram" width="16"></iconify-icon>
</div>
<p className="text-[13px] text-slate-500 truncate group-hover:text-slate-700 transition-colors">
                    Deposit paid just now...
                  </p>
</div>
</div>
<div className="bg-white p-4 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-slate-100 flex items-center gap-3.5 hover:shadow-md transition-shadow cursor-pointer group">
<div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm border border-blue-200/50">
                  C
                </div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<span className="font-semibold text-slate-900 text-[15px]">
                      Christine
                    </span>
<iconify-icon className="opacity-80 group-hover:opacity-100 transition-opacity" icon="logos:messenger" width="16"></iconify-icon>
</div>
<p className="text-[13px] text-slate-500 truncate group-hover:text-slate-700 transition-colors">
                    Great — when can you start?
                  </p>
</div>
</div>
<div className="bg-white p-4 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-slate-100 flex items-center gap-3.5 hover:shadow-md transition-shadow cursor-pointer group">
<div className="w-11 h-11 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 font-bold text-sm border border-rose-200/50">
                  T
                </div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<span className="font-semibold text-slate-900 text-[15px]">
                      Tammy
                    </span>
<iconify-icon className="opacity-80 group-hover:opacity-100 transition-opacity" icon="logos:google-gmail" width="16"></iconify-icon>
</div>
<p className="text-[13px] text-slate-500 truncate group-hover:text-slate-700 transition-colors">
                    Thursday works for us...
                  </p>
</div>
</div>
<div className="bg-white p-4 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-slate-100 flex items-center gap-3.5 hover:shadow-md transition-shadow cursor-pointer group">
<div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm border border-blue-200/50">
                  M
                </div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<span className="font-semibold text-slate-900 text-[15px]">
                      Michael
                    </span>
<iconify-icon className="opacity-80 group-hover:opacity-100 transition-opacity" icon="logos:linkedin-icon" width="16"></iconify-icon>
</div>
<p className="text-[13px] text-slate-500 truncate group-hover:text-slate-700 transition-colors">
                    Can you send the contract?
                  </p>
</div>
</div>
</div>
<div className="h-[88px] bg-white border-t border-slate-100 px-6 pb-4 flex items-center justify-between relative z-20">
<button className="flex flex-col items-center gap-1.5 text-blue-600 w-12 hover:bg-slate-50/50 rounded-lg py-1 transition-colors">
<iconify-icon icon="lucide:inbox" width="22"></iconify-icon>
<span className="text-[10px] font-semibold">Inbox</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-700 w-12 hover:bg-slate-50/50 rounded-lg py-1 transition-colors">
<iconify-icon icon="lucide:users" width="22"></iconify-icon>
<span className="text-[10px] font-medium">CRM</span>
</button>
<div className="absolute left-1/2 -top-6 -translate-x-1/2">
<button className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all">
<iconify-icon icon="lucide:plus" width="28"></iconify-icon>
</button>
</div>
<button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-700 w-12 hover:bg-slate-50/50 rounded-lg py-1 transition-colors">
<iconify-icon icon="lucide:check-square" width="22"></iconify-icon>
<span className="text-[10px] font-medium">Tasks</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-700 w-12 hover:bg-slate-50/50 rounded-lg py-1 transition-colors">
<iconify-icon icon="lucide:settings" width="22"></iconify-icon>
<span className="text-[10px] font-medium">Auto</span>
</button>
</div>
<div className="absolute bottom-2 left-0 right-0 flex justify-center z-30 pointer-events-none">
<div className="w-32 h-1 bg-slate-200/80 rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-transparent border-t border-slate-200 dark:border-white/5" id="pricing">
<div className="absolute inset-0 bg-slate-50/10 dark:bg-[#020204]/70 -z-10 transition-colors duration-500"></div>
<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<div className="energy-streak layer-mid" style={{left: '16.66%', animationDuration: '14s', animationDelay: '-4s', '--streak-color': 'rgba(180,140,100,0.5)', '--streak-opacity': '0.2'}}></div>
<div className="energy-streak layer-near star hidden md:block" style={{left: '20%', animationDuration: '8s', animationDelay: '-1s', '--streak-color': 'rgba(210,180,140,0.6)', '--streak-opacity': '0.5'}}></div>
<div className="energy-streak layer-mid" style={{left: '50%', animationDuration: '16s', animationDelay: '-8s', '--streak-color': 'rgba(148,163,184,0.5)', '--streak-opacity': '0.2'}}></div>
<div className="energy-streak layer-far hidden md:block" style={{left: '45%', animationDuration: '25s', animationDelay: '-15s', '--streak-color': 'rgba(148,163,184,0.3)', '--streak-opacity': '0.1'}}></div>
<div className="energy-streak layer-mid" style={{left: '83.33%', animationDuration: '15s', animationDelay: '-2s', '--streak-color': 'rgba(234,179,8,0.5)', '--streak-opacity': '0.2'}}></div>
<div className="energy-streak layer-near hidden md:block" style={{left: '88%', animationDuration: '9s', animationDelay: '-5s', '--streak-color': 'rgba(250,204,21,0.5)', '--streak-opacity': '0.4'}}></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-slate-900 dark:text-white tracking-tight font-serif mb-4">
            Simple, transparent pricing.
          </h2>
<p className="text-slate-600 dark:text-slate-400">
            Choose the scale that fits your business.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch group/pricing">

<div className="group relative flex flex-col h-full rounded-2xl p-[3px] transition-all duration-300 ease-out outline-none bg-gradient-to-br from-[#eaddcf] via-[#a88b70] to-[#785e45] hover:scale-[1.05] focus:scale-[1.05] hover:z-10 focus:z-10 hover:shadow-[0_0_40px_-10px_rgba(168,139,112,0.3)] focus:shadow-[0_0_40px_-10px_rgba(168,139,112,0.3)] md:group-hover/pricing:opacity-90 md:hover:!opacity-100 md:focus:!opacity-100" tabindex="0">

<div className="h-full w-full rounded-xl flex flex-col p-8 relative overflow-hidden backdrop-blur-sm bg-gradient-to-b from-[#fdfbf7] to-[#f5f0e6] dark:from-[#292524] dark:to-[#0c0a09] ring-1 ring-inset ring-white/40 dark:ring-white/5">
<div className="mb-6">
<h3 className="text-xl font-bold text-[#785e45] dark:text-[#d6c3b0] mb-2 flex items-center gap-2">
                  Foundation
                  
<span className="w-2 h-2 rounded-full bg-[#a88b70] shadow-[0_0_8px_#a88b70]"></span>
</h3>
<p className="text-xs font-medium text-[#8f7459] dark:text-[#a88b70] h-8 leading-snug">
                  For businesses getting systems in place fast.
                </p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    $500
                  </span>
<span className="text-sm text-slate-500 font-medium">
                    /mo AUD
                  </span>
</div>
<div className="text-xs text-[#a88b70] dark:text-[#8f7459] mt-2 font-mono">
                  + $1,000 Setup
                </div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-[#a88b70] shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>CRM setup</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-[#a88b70] shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>SMS follow-ups &amp; text back</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-[#a88b70] shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Ads + landing page</span>
</li>
</ul>

<button className="w-full py-3 rounded-lg text-white font-medium text-sm transition-all duration-300 shadow-md bg-gradient-to-r from-[#8f7459] to-[#785e45] hover:from-[#a88b70] hover:to-[#8f7459] shadow-[#785e45]/20" onclick="openAuditModal()">
                Get Started
              </button>
</div>
</div>

<div className="group relative flex flex-col h-full rounded-2xl p-[3px] transition-all duration-300 ease-out outline-none bg-gradient-to-br from-[#e2e8f0] via-[#94a3b8] to-[#475569] hover:scale-[1.05] focus:scale-[1.05] hover:z-10 focus:z-10 hover:shadow-[0_0_40px_-10px_rgba(148,163,184,0.3)] focus:shadow-[0_0_40px_-10px_rgba(148,163,184,0.3)] md:group-hover/pricing:opacity-90 md:hover:!opacity-100 md:focus:!opacity-100" tabindex="0">
<div className="h-full w-full rounded-xl flex flex-col p-8 relative overflow-hidden backdrop-blur-sm bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] dark:from-[#0f172a] dark:to-[#020617] ring-1 ring-inset ring-white/40 dark:ring-white/5">
<div className="mb-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold text-[#334155] dark:text-[#e2e8f0] flex items-center gap-2">
                    Growth
                    
<span className="w-2 h-2 rounded-full bg-[#94a3b8] shadow-[0_0_8px_#94a3b8]"></span>
</h3>
<span className="text-[9px] font-bold uppercase tracking-wider text-slate-600 dark:text-white bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 px-2 py-0.5 rounded-full">
                    Recommended
                  </span>
</div>
<p className="text-xs font-medium text-slate-600 dark:text-slate-400 h-8 leading-snug">
                  For businesses ready for predictable monthly revenue.
                </p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    $1,600
                  </span>
<span className="text-sm text-slate-500 font-medium">
                    /mo AUD
                  </span>
</div>
<div className="text-xs text-slate-500/80 dark:text-slate-400/60 mt-2 font-mono">
                  + $2,000 Setup
                </div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-slate-500 dark:text-slate-400 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Full automation (SMS + Email)</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-slate-500 dark:text-slate-400 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Smart lead routing</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-slate-500 dark:text-slate-400 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Enhanced ads &amp; tracking</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-slate-500 dark:text-slate-400 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Reviews &amp; social proof system</span>
</li>
</ul>

<button className="w-full py-3 rounded-lg text-white font-medium text-sm transition-all duration-300 shadow-md bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 shadow-slate-900/10" onclick="openAuditModal()">
                Book a Free Audit
              </button>
</div>
</div>

<div className="group relative flex flex-col h-full rounded-2xl p-[3px] transition-all duration-300 ease-out outline-none bg-gradient-to-br from-[#fde047] via-[#ca8a04] to-[#854d0e] hover:scale-[1.05] focus:scale-[1.05] hover:z-10 focus:z-10 hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.3)] focus:shadow-[0_0_40px_-10px_rgba(234,179,8,0.3)] md:group-hover/pricing:opacity-90 md:hover:!opacity-100 md:focus:!opacity-100" tabindex="0">
<div className="h-full w-full rounded-xl flex flex-col p-8 relative overflow-hidden backdrop-blur-sm bg-gradient-to-b from-[#fefce8] to-[#fef9c3] dark:from-[#422006] dark:to-[#0c0a09] ring-1 ring-inset ring-white/40 dark:ring-white/5">
<div className="mb-6">
<h3 className="text-xl font-bold text-[#854d0e] dark:text-[#fde047] mb-2 flex items-center gap-2">
                  Enterprise
                  
<span className="w-2 h-2 rounded-full bg-[#ca8a04] shadow-[0_0_8px_#ca8a04]"></span>
</h3>
<p className="text-xs font-medium text-yellow-800/70 dark:text-yellow-200/60 h-8 leading-snug">
                  For businesses scaling without adding staff.
                </p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    $2,000
                  </span>
<span className="text-sm text-slate-500 font-medium">
                    /mo AUD
                  </span>
</div>
<div className="text-xs text-yellow-800/60 dark:text-yellow-400/60 mt-2 font-mono">
                  + $3,000 Setup
                </div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-yellow-600 dark:text-yellow-500 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>AI receptionist &amp; setter</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-yellow-600 dark:text-yellow-500 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Multi-location systems</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-yellow-600 dark:text-yellow-500 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Advanced automations</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-yellow-600 dark:text-yellow-500 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Authority &amp; content engine</span>
</li>
</ul>

<button className="w-full py-3 rounded-lg text-white font-medium text-sm transition-all duration-300 shadow-md bg-gradient-to-r from-yellow-700 to-yellow-800 hover:from-yellow-600 hover:to-yellow-700 shadow-yellow-900/10" onclick="openAuditModal()">
                Talk to Us
              </button>
</div>
</div>
</div>
<div className="text-center mt-12">
<p className="text-xs text-slate-400 dark:text-slate-600 font-medium">
            Built for service businesses. Scales with you.
          </p>
</div>
</div>
</section>

<section className="overflow-hidden bg-transparent w-full border-slate-200 dark:border-white/5 border-t py-12 relative" id="cta">
<div className="absolute inset-0 bg-slate-50/10 dark:bg-[#020204]/70 -z-10 transition-colors duration-500"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-white mb-6">
          Ready to scale?
        </h2>
<button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all font-medium mb-12 shadow-lg shadow-blue-500/20 active:scale-95" onclick="openAuditModal()">
          Book Free Growth Audit
          <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>

<div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400 items-center justify-between">
<div>
<a className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors mr-6" href="mailto:hello@sorasolutions.com">
              hello@sorasolutions.com
            </a>
</div>
<div className="flex gap-4">
<a className="hover:text-slate-900 dark:hover:text-white" href="#">
              Privacy Policy
            </a>
<a className="hover:text-slate-900 dark:hover:text-white" href="#">
              Terms
            </a>
</div>
</div>
<div className="text-center text-xs text-slate-500 dark:text-slate-600 mt-6">
          © 2024 Sora Business Solutions. All rights reserved.
        </div>
</div>
</section>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4" id="audit-modal">

<div className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm transition-opacity" onclick="closeAuditModal()"></div>

<div className="relative w-full max-w-2xl bg-white dark:bg-[#0c0c0e] rounded-2xl shadow-2xl shadow-blue-500/10 border border-slate-200 dark:border-white/10 overflow-hidden transform transition-all duration-300 scale-95 opacity-0 flex flex-col max-h-[90vh]" id="audit-modal-content">

<div className="px-6 py-4 border-b border-slate-100 dark:border-white/5 flex items-center justify-between bg-slate-50/50 dark:bg-white/[0.02] shrink-0">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
<iconify-icon icon="lucide:bar-chart-3" width="16"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 dark:text-white">
              Growth Audit Request
            </h3>
</div>
<button className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors" onclick="closeAuditModal()">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</button>
</div>

<div className="w-full bg-slate-100 dark:bg-white/5 h-1 shrink-0">
<div className="bg-blue-600 h-1 transition-all duration-300 ease-out" id="audit-progress" style={{width: '20%'}}></div>
</div>

<div className="p-6 overflow-y-auto custom-scrollbar flex-1 relative">
<form id="multi-step-form" onsubmit="event.preventDefault();">

<div className="form-step transition-all duration-300" data-step="1">
<div className="mb-6">
<h4 className="text-lg font-medium text-slate-900 dark:text-white mb-1">
                  Let’s start with the basics
                </h4>
<p className="text-sm text-slate-500 dark:text-slate-400">
                  This helps us understand your business at a high level.
                </p>
</div>
<div className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Business Name
                    <span className="text-red-500">*</span>
</label>
<input className="w-full px-3 py-2.5 bg-slate-50 dark:bg-[#151518] border border-slate-200 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="e.g. Smith Electrical Services Pty Ltd" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Industry / Services
                    <span className="text-red-500">*</span>
</label>
<input className="w-full px-3 py-2.5 bg-slate-50 dark:bg-[#151518] border border-slate-200 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="e.g. Residential &amp; commercial electrical work" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Service Area
                    <span className="text-red-500">*</span>
</label>
<input className="w-full px-3 py-2.5 bg-slate-50 dark:bg-[#151518] border border-slate-200 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="e.g. Sydney metro, Newcastle" required="" type="text"/>
</div>
</div>
</div>

<div className="form-step hidden transition-all duration-300" data-step="2">
<div className="mb-6">
<h4 className="text-lg font-medium text-slate-900 dark:text-white mb-1">
                  Where you’re at vs where you want to go
                </h4>
<p className="text-sm text-slate-500 dark:text-slate-400">
                  We use this to map realistic growth opportunities.
                </p>
</div>
<div className="space-y-5">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Current Monthly Revenue
                    <span className="text-red-500">*</span>
</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-white/10 cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors has-[:checked]:border-blue-500/50 has-[:checked]:bg-blue-50/50 dark:has-[:checked]:bg-blue-500/10">
<input className="text-blue-600 focus:ring-blue-500 bg-slate-100 border-slate-300 dark:bg-[#151518] dark:border-white/20" name="revenue" type="radio" value="Under 10k"/>
<span className="text-sm text-slate-700 dark:text-slate-300">
                        Under $10,000
                      </span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-white/10 cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors has-[:checked]:border-blue-500/50 has-[:checked]:bg-blue-50/50 dark:has-[:checked]:bg-blue-500/10">
<input className="text-blue-600 focus:ring-blue-500 bg-slate-100 border-slate-300 dark:bg-[#151518] dark:border-white/20" name="revenue" type="radio" value="10k-30k"/>
<span className="text-sm text-slate-700 dark:text-slate-300">
                        $10k – $30k
                      </span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-white/10 cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors has-[:checked]:border-blue-500/50 has-[:checked]:bg-blue-50/50 dark:has-[:checked]:bg-blue-500/10">
<input className="text-blue-600 focus:ring-blue-500 bg-slate-100 border-slate-300 dark:bg-[#151518] dark:border-white/20" name="revenue" type="radio" value="30k-75k"/>
<span className="text-sm text-slate-700 dark:text-slate-300">
                        $30k – $75k
                      </span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-white/10 cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors has-[:checked]:border-blue-500/50 has-[:checked]:bg-blue-50/50 dark:has-[:checked]:bg-blue-500/10">
<input className="text-blue-600 focus:ring-blue-500 bg-slate-100 border-slate-300 dark:bg-[#151518] dark:border-white/20" name="revenue" type="radio" value="75k-150k"/>
<span className="text-sm text-slate-700 dark:text-slate-300">
                        $75k – $150k
                      </span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-white/10 cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors sm:col-span-2 has-[:checked]:border-blue-500/50 has-[:checked]:bg-blue-50/50 dark:has-[:checked]:bg-blue-500/10">
<input className="text-blue-600 focus:ring-blue-500 bg-slate-100 border-slate-300 dark:bg-[#151518] dark:border-white/20" name="revenue" type="radio" value="150k+"/>
<span className="text-sm text-slate-700 dark:text-slate-300">
                        $150,000+
                      </span>
</label>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Target Monthly Revenue (6-12 mo)
                    <span className="text-red-500">*</span>
</label>
<input className="w-full px-3 py-2.5 bg-slate-50 dark:bg-[#151518] border border-slate-200 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="e.g. $60,000 per month" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Average Job Value
                  </label>
<input className="w-full px-3 py-2.5 bg-slate-50 dark:bg-[#151518] border border-slate-200 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="e.g. $1,200 per job" type="text"/>
</div>
</div>
</div>

<div className="form-step hidden transition-all duration-300" data-step="3">
<div className="mb-6">
<h4 className="text-lg font-medium text-slate-900 dark:text-white mb-1">
                  Who you want more of
                </h4>
<p className="text-sm text-slate-500 dark:text-slate-400">
                  This determines how we position your brand and offers.
                </p>
</div>
<div className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Ideal Client Description
                    <span className="text-red-500">*</span>
</label>
<textarea className="w-full px-3 py-2.5 bg-slate-50 dark:bg-[#151518] border border-slate-200 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="Homeowners and builders who value quality..." required="" rows="3"></textarea>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Why Clients Choose You
                    <span className="text-red-500">*</span>
</label>
<textarea className="w-full px-3 py-2.5 bg-slate-50 dark:bg-[#151518] border border-slate-200 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="Fast response, upfront pricing..." required="" rows="3"></textarea>
</div>
</div>
</div>

<div className="form-step hidden transition-all duration-300" data-step="4">
<div className="mb-6">
<h4 className="text-lg font-medium text-slate-900 dark:text-white mb-1">
                  How leads currently flow
                </h4>
<p className="text-sm text-slate-500 dark:text-slate-400">
                  This shows us where money is leaking.
                </p>
</div>
<div className="space-y-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Lead Sources
                  </label>
<div className="grid grid-cols-2 gap-2">
<label className="flex items-center gap-2">
<input className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:bg-[#151518] dark:border-white/20" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-400">
                        Google Search
                      </span>
</label>
<label className="flex items-center gap-2">
<input className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:bg-[#151518] dark:border-white/20" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-400">
                        Social Media
                      </span>
</label>
<label className="flex items-center gap-2">
<input className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:bg-[#151518] dark:border-white/20" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-400">
                        Referrals
                      </span>
</label>
<label className="flex items-center gap-2">
<input className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:bg-[#151518] dark:border-white/20" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-400">
                        Marketplaces
                      </span>
</label>
<label className="flex items-center gap-2">
<input className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:bg-[#151518] dark:border-white/20" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-400">
                        Paid Ads
                      </span>
</label>
<label className="flex items-center gap-2">
<input className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:bg-[#151518] dark:border-white/20" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-400">
                        Walk-ins
                      </span>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Booking Method
                  </label>
<div className="grid grid-cols-2 gap-2">
<label className="flex items-center gap-2">
<input className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:bg-[#151518] dark:border-white/20" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-400">
                        Phone Calls
                      </span>
</label>
<label className="flex items-center gap-2">
<input className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:bg-[#151518] dark:border-white/20" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-400">
                        SMS / DMs
                      </span>
</label>
<label className="flex items-center gap-2">
<input className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:bg-[#151518] dark:border-white/20" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-400">
                        Web Forms
                      </span>
</label>
<label className="flex items-center gap-2">
<input className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:bg-[#151518] dark:border-white/20" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-400">
                        Online Calendar
                      </span>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Follow-Up System
                  </label>
<div className="flex flex-col gap-2">
<label className="flex items-center gap-2">
<input className="text-blue-600 focus:ring-blue-500 bg-slate-100 border-slate-300 dark:bg-[#151518] dark:border-white/20" name="followup" type="radio"/>
<span className="text-sm text-slate-600 dark:text-slate-400">
                        No follow-up
                      </span>
</label>
<label className="flex items-center gap-2">
<input className="text-blue-600 focus:ring-blue-500 bg-slate-100 border-slate-300 dark:bg-[#151518] dark:border-white/20" name="followup" type="radio"/>
<span className="text-sm text-slate-600 dark:text-slate-400">
                        Manual SMS / Email
                      </span>
</label>
<label className="flex items-center gap-2">
<input className="text-blue-600 focus:ring-blue-500 bg-slate-100 border-slate-300 dark:bg-[#151518] dark:border-white/20" name="followup" type="radio"/>
<span className="text-sm text-slate-600 dark:text-slate-400">
                        Automated System
                      </span>
</label>
</div>
</div>
</div>
</div>

<div className="form-step hidden transition-all duration-300" data-step="5">
<div className="mb-6">
<h4 className="text-lg font-medium text-slate-900 dark:text-white mb-1">
                  Final step
                </h4>
<p className="text-sm text-slate-500 dark:text-slate-400">
                  This helps us tailor the audit recommendations.
                </p>
</div>
<div className="space-y-5">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Digital Assets
                  </label>
<div className="grid grid-cols-2 gap-2">
<label className="flex items-center gap-2">
<input className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:bg-[#151518] dark:border-white/20" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-400">
                        Logo
                      </span>
</label>
<label className="flex items-center gap-2">
<input className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:bg-[#151518] dark:border-white/20" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-400">
                        Professional Website
                      </span>
</label>
<label className="flex items-center gap-2">
<input className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:bg-[#151518] dark:border-white/20" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-400">
                        Brand Fonts/Colors
                      </span>
</label>
<label className="flex items-center gap-2">
<input className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:bg-[#151518] dark:border-white/20" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-400">
                        Website Generates Leads
                      </span>
</label>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Website URL
                  </label>
<input className="w-full px-3 py-2.5 bg-slate-50 dark:bg-[#151518] border border-slate-200 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="https://..." type="url"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    What does success look like in 12 months?
                    <span className="text-red-500">*</span>
</label>
<textarea className="w-full px-3 py-2.5 bg-slate-50 dark:bg-[#151518] border border-slate-200 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="Consistent leads, fewer missed calls..." required="" rows="3"></textarea>
</div>
</div>
</div>

<div className="form-step hidden transition-all duration-300 text-center py-10" data-step="success">
<div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
<iconify-icon icon="lucide:check" width="32"></iconify-icon>
</div>
<h4 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
                Audit Request Submitted
              </h4>
<p className="text-slate-600 dark:text-slate-400 max-w-sm mx-auto mb-8 leading-relaxed">
                Our team will review your responses and identify where revenue,
                leads, and time are being lost. You’ll be contacted shortly with
                next steps.
              </p>
<p className="text-xs text-slate-400 mb-8">
                No spam. No obligation. Real recommendations.
              </p>
<button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all shadow-lg shadow-blue-500/20 active:scale-95" onclick="closeAuditModal()" type="button">
                Close Window
              </button>
</div>
</form>
</div>

<div className="px-6 py-4 border-t border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] flex justify-between shrink-0" id="audit-footer">
<button className="hidden px-4 py-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1" id="btn-back" onclick="prevStep()" type="button">
<iconify-icon icon="lucide:arrow-left" width="14"></iconify-icon>
            Back
          </button>
<div className="flex items-center gap-4 ml-auto">
<span className="text-xs font-medium text-slate-400" id="step-indicator">
              Step 1 of 5
            </span>
<button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg shadow-lg shadow-blue-500/20 transition-all active:scale-95 flex items-center gap-2" id="btn-next" onclick="nextStep()" type="button">
              Next Step
              <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>





    </>
  );
}
