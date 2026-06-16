import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
bg: '#030303',
magma: {
50: '#fff7ed',
100: '#ffedd5',
200: '#fed7aa',
300: '#fdba74',
400: '#fb923c',
500: '#f97316',
600: '#ea580c',
700: '#c2410c',
800: '#9a3412',
900: '#7c2d12',
glow: '#FF5900',
}
},
animation: {
'marquee': 'marquee 60s linear infinite',
'float': 'float 8s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'cursor-blink': 'cursorBlink 1s step-end infinite',
'shimmer': 'shimmer 2.5s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
cursorBlink: {
'0%, 100%': { opacity: '1' },
'50%': { opacity: '0' },
},
shimmer: {
'0%': { backgroundPosition: '200% 0' },
'100%': { backgroundPosition: '-200% 0' }
}
},
backgroundImage: {
'noise': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\" opacity=\"0.05\"/%3E%3C/svg%3E')",
}
}
}
}



      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

      function playKeystrokeSound() {
          if (audioCtx.state === 'suspended') return; // Browser requires interaction first usually
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();

          // Noise-like short click
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(800, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.05);

          gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);

          osc.connect(gain);
          gain.connect(audioCtx.destination);

          osc.start();
          osc.stop(audioCtx.currentTime + 0.05);
      }

      function playClickSound() {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.type = 'sine';
          osc.frequency.setValueAtTime(800, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.1);
          gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.1);
      }
      function playHoverSound() {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(200, audioCtx.currentTime);
          gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
          gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.03);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.03);
      }
      function playSuccessSound() {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.type = 'sine';
          osc.frequency.setValueAtTime(400, audioCtx.currentTime);
          osc.frequency.linearRampToValueAtTime(800, audioCtx.currentTime + 0.1);
          gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
          gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.4);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.4);
      }
    


      document.addEventListener('DOMContentLoaded', () => {
          // --- SOUND & INTERACTION LOGIC ---
          document.body.addEventListener('click', () => {
              if (audioCtx.state === 'suspended') {
                  audioCtx.resume();
              }
          }, { once: true });

          const interactButtons = document.querySelectorAll('.interact-button');
          interactButtons.forEach(btn => {
              btn.addEventListener('mouseenter', () => playHoverSound());
              btn.addEventListener('click', () => playClickSound());
          });

          // Burst Buttons (Reward Effect)
          document.querySelectorAll('.burst-button').forEach(btn => {
              btn.addEventListener('click', (e) => {
                  playSuccessSound();
                  createParticles(e.clientX, e.clientY);
              });
          });

          function createParticles(x, y) {
              const particleCount = 12;
              const colors = ['#f97316', '#ea580c', '#ffffff'];

              for (let i = 0; i < particleCount; i++) {
                  const particle = document.createElement('div');
                  particle.classList.add('particle');

                  const size = Math.random() * 6 + 2;
                  const color = colors[Math.floor(Math.random() * colors.length)];

                  particle.style.width = `${size}px`;
                  particle.style.height = `${size}px`;
                  particle.style.background = color;
                  particle.style.left = `${x}px`;
                  particle.style.top = `${y}px`;

                  const destX = (Math.random() - 0.5) * 100;
                  const destY = (Math.random() - 0.5) * 100;

                  particle.animate([
                      { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                      { transform: `translate(${destX}px, ${destY}px) scale(0)`, opacity: 0 }
                  ], {
                      duration: 800 + Math.random() * 400,
                      easing: 'cubic-bezier(0, .9, .57, 1)'
                  });

                  document.body.appendChild(particle);
                  setTimeout(() => particle.remove(), 1200);
              }
          }

          // --- INTRO SEQUENCE (PRESERVED) ---
          const typewriterElement = document.getElementById('intro-typewriter');
          const introContainer = document.getElementById('intro-container');
          const introBtn = document.getElementById('intro-btn');
          const ghostCursor = document.getElementById('ghost-cursor');
          const introOverlay = document.getElementById('intro-overlay');
          const mainWrapper = document.getElementById('main-wrapper');
          const textToType = "Gerar ecossistema de alta conversão...";

          setTimeout(() => {
              introContainer.classList.remove('opacity-0', 'scale-90');
              introContainer.classList.add('opacity-100', 'scale-100');
          }, 100);

          let charIndex = 0;
          function typeWriter() {
              if (charIndex < textToType.length) {
                  typewriterElement.textContent += textToType.charAt(charIndex);
                  playKeystrokeSound(); // Add sound here
                  charIndex++;
                  setTimeout(typeWriter, 30 + Math.random() * 40);
              } else {
                  setTimeout(moveCursorFromCorner, 200);
              }
          }
          setTimeout(typeWriter, 500);

          function moveCursorFromCorner() {
              const btnRect = introBtn.getBoundingClientRect();
              const x = btnRect.left + (btnRect.width / 2) - 4;
              const y = btnRect.top + (btnRect.height / 2);

              ghostCursor.style.transform = `translate(${x}px, ${y}px)`;
              const cursorSvg = ghostCursor.querySelector('svg');
              cursorSvg.style.transform = "rotate(-10deg)";
              cursorSvg.style.transition = "transform 1s ease-out";

              setTimeout(() => {
                  cursorSvg.style.transform = "scale(0.85) rotate(-10deg)";
                  cursorSvg.style.transition = "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)";

                  introBtn.style.transform = "scale(0.9)";
                  introBtn.style.boxShadow = "0 0 40px #ea580c";
                  playClickSound(); // Sound on intro click

                  setTimeout(() => {
                      cursorSvg.style.transform = "scale(1) rotate(0deg)";
                      setTimeout(triggerTransition, 200);
                  }, 150);
              }, 1200);
          }

          function triggerTransition() {
              introOverlay.style.opacity = "0";
              setTimeout(() => {
                  introOverlay.style.display = 'none';
                  mainWrapper.classList.add('loaded');
                  initObservers();
                  initMicroInteractions();
              }, 800);
          }

          function initObservers() {
              // Number Counters
              const counters = document.querySelectorAll('.counter');
              const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -10% 0px' };

              const observer = new IntersectionObserver((entries) => {
                  entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                          entry.target.classList.add('visible');
                          if (entry.target.classList.contains('counter')) {
                             const target = +entry.target.getAttribute('data-target');
                             animateValue(entry.target, 0, target, 2000);
                          }
                      }
                  });
              }, observerOptions);

              document.querySelectorAll('.reveal-blur, .reveal-text, .counter').forEach(el => observer.observe(el));
          }

          function animateValue(obj, start, end, duration) {
              let startTimestamp = null;
              const step = (timestamp) => {
                  if (!startTimestamp) startTimestamp = timestamp;
                  const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                  obj.innerHTML = "+" + Math.floor(progress * (end - start) + start) + (end > 1000 ? " Mil" : "");
                  if (progress < 1) {
                      window.requestAnimationFrame(step);
                  }
              };
              window.requestAnimationFrame(step);
          }

          function initMicroInteractions() {
              const spotlightGroups = document.querySelectorAll('.spotlight-group');
              spotlightGroups.forEach(group => {
                  group.addEventListener('mousemove', (e) => {
                      const rect = group.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      group.style.setProperty('--mouse-x', `${x}px`);
                      group.style.setProperty('--mouse-y', `${y}px`);
                  });
              });

              document.querySelectorAll('.tilt-element').forEach(card => {
                  card.addEventListener('mousemove', (e) => {
                      const rect = card.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;
                      const rotateX = ((y - centerY) / centerY) * -5;
                      const rotateY = ((x - centerX) / centerX) * 5;
                      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                  });
                  card.addEventListener('mouseleave', () => {
                      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
                  });
              });
          }

          const details = document.querySelectorAll("details");
          details.forEach((targetDetail) => {
              targetDetail.addEventListener("click", () => {
                  details.forEach((detail) => {
                      if (detail !== targetDetail) detail.removeAttribute("open");
                  });
                  playClickSound();
              });
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      



<div className="bg-noise"></div>
<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="volumetric-glow top-[-20%] left-[20%] animate-float"></div>
<div className="volumetric-glow bottom-[-10%] right-[10%] animate-float" style={{animationDelay: '-4s', background: 'radial-gradient(circle, rgba(124, 45, 18, 0.15) 0%, transparent 70%)'}}></div>
</div>

<div id="intro-overlay">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImgridIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-20 mask-image-radial-gradient"></div>
<div className="relative z-10 w-full max-w-lg px-6 opacity-0 scale-90 transition-all duration-700 ease-out" id="intro-container">
<div className="intro-input-glass rounded-2xl p-2 flex items-center gap-3 relative overflow-hidden group">
<div className="w-10 h-10 rounded-xl bg-magma-500/10 flex items-center justify-center shrink-0 border border-magma-500/20 shadow-[0_0_15px_rgba(234,88,12,0.2)]">
<span className="iconify text-magma-500 animate-pulse-slow" data-icon="lucide:sparkles" data-width="20"></span>
</div>
<div className="flex-1 font-mono text-sm md:text-base text-magma-100 h-6 flex items-center overflow-hidden whitespace-nowrap">
<span id="intro-typewriter"></span>
<span className="animate-cursor-blink w-2 h-5 bg-magma-500 ml-1 inline-block align-middle"></span>
</div>
<div className="w-10 h-10 rounded-full bg-magma-600 flex items-center justify-center text-white shadow-lg shadow-magma-600/30 transition-transform duration-200" id="intro-btn">
<span className="iconify" data-icon="lucide:arrow-up" data-width="20"></span>
</div>
</div>
<div className="mt-4 flex justify-between items-center px-2 opacity-50 text-[10px] font-mono text-slate-500">
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:cpu" data-width="12"></span>
            AI Model: Magma-V2
          </div>
<div>waiting for prompt...</div>
</div>
</div>
<div id="ghost-cursor">
<svg className="drop-shadow-[0_0_15px_rgba(255,89,0,0.6)]" fill="none" height="36" viewbox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4 L14 31 L18.5 20.5 L29 16 L4 4 Z" fill="#030303" stroke="#FF5900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</div>
</div>

<div id="main-wrapper">

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#030303]/70 backdrop-blur-md supports-[backdrop-filter]:bg-[#030303]/40">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer interact-button">
<img alt="Figma Make" className="h-8 w-auto object-contain" src="https://placehold.co/150x40/030303/FFFFFF?text=FIGMA+MAKE"/>
</div>
<a className="interact-button btn-physics hidden md:flex px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest hover:bg-magma-600 hover:border-magma-500 transition-all hover:shadow-[0_0_25px_-5px_rgba(255,89,0,0.5)] overflow-hidden group relative" href="#join">
<span className="relative z-10">Começar Agora</span>
<div className="absolute inset-0 bg-magma-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
</a>
</div>
</nav>

<header className="relative pt-28 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden min-h-screen flex flex-col items-center justify-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-magma-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-0"></div>
<div className="animate-float reveal-blur mb-10 md:mb-12 relative z-10 w-full max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-500">
<div className="glass-premium rounded-xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(234,88,12,0.15)]">
<div className="bg-black/40 border-b border-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-white/10 border border-white/5"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 border border-white/5"></div>
</div>
<div className="text-[9px] font-mono text-magma-400 uppercase tracking-widest flex items-center gap-2">
<span className="iconify animate-pulse" data-icon="lucide:sparkles" data-width="10"></span>
                PROMPT GEN
              </div>
</div>
<div className="p-4 md:p-6 font-mono text-xs md:text-sm leading-relaxed text-slate-400">
<span className="text-magma-500">Prompt:</span>
              Crie uma Landing Page futurista, estilo cyberpunk minimalista, com
              tons de dark magma, glassmorphism e tipografia sans-serif larga.
              <span className="inline-block w-1.5 h-4 bg-magma-500 animate-pulse ml-1 align-middle shadow-[0_0_10px_#ea580c]"></span>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto text-center relative z-10">
<div className="reveal-blur inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-magma-500/20 bg-magma-900/5 mb-6 md:mb-8 backdrop-blur-sm shadow-[0_0_20px_-5px_rgba(234,88,12,0.2)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-magma-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-magma-500 box-shadow-[0_0_10px_#ea580c]"></span>
</span>
<span className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-magma-200">
              Nova Profissão: Designer com IA
            </span>
</div>
<h1 className="text-4xl md:text-7xl lg:text-9xl font-display font-medium text-white tracking-tighter leading-[1] md:leading-[0.95] mb-6 md:mb-8 drop-shadow-2xl reveal-blur text-balance">
            Digite um Prompt. Gere um Site.
            <span className="bg-gradient-to-b from-white via-magma-200 to-magma-500 bg-clip-text text-transparent font-semibold">
              Receba o PIX.
            </span>
</h1>
<p className="reveal-blur text-slate-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 md:mb-12 font-light tracking-wide">
            O
            <strong className="text-white font-medium">Figma Make</strong>
            transforma comandos de texto em Landing Pages High-End de R$
            2.000,00.
          </p>
<div className="reveal-blur flex flex-col md:flex-row items-center justify-center gap-6">

<a className="interact-button burst-button btn-physics btn-shimmer group relative px-10 py-4 rounded-full text-white overflow-hidden shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] transition-all duration-300 border border-white/20" href="#join">
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
<div className="relative z-10 flex items-center gap-3 text-xs font-bold tracking-[0.15em] uppercase">
                Quero Começar Agora
                <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</div>
</a>
<div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
<span className="iconify" data-icon="lucide:lock" data-width="12"></span>
              Acesso vitalício
            </div>
</div>
</div>
<div className="reveal-blur max-w-5xl mx-auto mt-16 md:mt-24 w-full relative group perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-b from-magma-600/30 to-transparent rounded-3xl blur-3xl opacity-30 group-hover:opacity-60 transition duration-700"></div>
<div className="interact-button tilt-element relative rounded-2xl border border-white/10 bg-[#080808] overflow-hidden shadow-2xl aspect-video flex flex-col items-center justify-center group cursor-pointer transition-transform duration-100 ease-out">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1 bg-magma-600/90 backdrop-blur rounded border border-white/10 text-[9px] font-bold text-white uppercase tracking-widest shadow-[0_0_20px_rgba(234,88,12,0.4)]">
              Documentário
            </div>
<div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-left">
<h3 className="text-white font-display font-bold text-lg md:text-3xl mb-1 tracking-tight">
                Como faturamos R$ 280k
              </h3>
<p className="text-slate-400 text-[10px] md:text-xs font-mono tracking-wide">
                REVELANDO A ESTRUTURA COMPLETA
              </p>
</div>
<div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative z-10 shadow-2xl">
<div className="absolute inset-0 rounded-full border border-magma-500/30 animate-pulse"></div>
<div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-magma-600 flex items-center justify-center shadow-[0_0_30px_rgba(234,88,12,0.8)]">
<span className="iconify text-white ml-1" data-icon="lucide:play" data-width="20"></span>
</div>
</div>
<div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-700"></div>
</div>
</div>
</header>

<div className="border-y border-white/5 bg-black/40 backdrop-blur-sm py-4 md:py-5 overflow-hidden relative">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10"></div>
<div className="flex w-full overflow-hidden">
<div className="flex gap-16 animate-marquee whitespace-nowrap items-center opacity-80 min-w-full shrink-0 pr-16">
<span className="flex items-center gap-4 text-xs font-display font-bold text-magma-500 uppercase tracking-[0.2em]">
<span className="iconify" data-icon="lucide:zap"></span>
              Figma Make
            </span>
<span className="flex items-center gap-4 text-xs font-display font-bold text-white/20 uppercase tracking-[0.2em]">
<span className="iconify" data-icon="lucide:bot"></span>
              AI Revolution
            </span>
<span className="flex items-center gap-4 text-xs font-display font-bold text-magma-500 uppercase tracking-[0.2em]">
<span className="iconify" data-icon="lucide:flame"></span>
              Figma Core
            </span>
<span className="flex items-center gap-4 text-xs font-display font-bold text-white/20 uppercase tracking-[0.2em]">
<span className="iconify" data-icon="lucide:zap"></span>
              Figma Make
            </span>
<span className="flex items-center gap-4 text-xs font-display font-bold text-magma-500 uppercase tracking-[0.2em]">
<span className="iconify" data-icon="lucide:bot"></span>
              AI Revolution
            </span>
</div>
<div aria-hidden="true" className="flex gap-16 animate-marquee whitespace-nowrap items-center opacity-80 min-w-full shrink-0 pr-16">
<span className="flex items-center gap-4 text-xs font-display font-bold text-magma-500 uppercase tracking-[0.2em]">
<span className="iconify" data-icon="lucide:zap"></span>
              Figma Make
            </span>
<span className="flex items-center gap-4 text-xs font-display font-bold text-white/20 uppercase tracking-[0.2em]">
<span className="iconify" data-icon="lucide:bot"></span>
              AI Revolution
            </span>
<span className="flex items-center gap-4 text-xs font-display font-bold text-magma-500 uppercase tracking-[0.2em]">
<span className="iconify" data-icon="lucide:flame"></span>
              Figma Core
            </span>
<span className="flex items-center gap-4 text-xs font-display font-bold text-white/20 uppercase tracking-[0.2em]">
<span className="iconify" data-icon="lucide:zap"></span>
              Figma Make
            </span>
<span className="flex items-center gap-4 text-xs font-display font-bold text-magma-500 uppercase tracking-[0.2em]">
<span className="iconify" data-icon="lucide:bot"></span>
              AI Revolution
            </span>
</div>
</div>
</div>

<section className="py-24 md:py-40 px-6 relative">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-gradient-to-b from-magma-900/5 to-transparent blur-3xl pointer-events-none"></div>
<div className="max-w-3xl mx-auto relative z-10">
<div className="reveal-blur glass-premium rounded-3xl p-8 md:p-16 text-center relative overflow-hidden group">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-magma-600/10 blur-[80px] rounded-full group-hover:bg-magma-600/20 transition-colors duration-700"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="text-magma-500 mb-6 md:mb-8 p-4 rounded-full bg-magma-900/10 border border-magma-500/20 shadow-[0_0_30px_-5px_rgba(234,88,12,0.3)]">
<span className="iconify" data-icon="lucide:triangle-alert" data-width="32"></span>
</div>
<h2 className="text-2xl md:text-4xl font-display font-medium text-white leading-tight mb-6 md:mb-8 tracking-tight text-balance">
                "Essas operações já rodam com alguns
                <span className="text-magma-500 px-1 relative">
<span className="relative z-10">guruzinhos</span>
<span className="absolute bottom-1 left-0 w-full h-2 bg-magma-900/30 -skew-x-12 z-0"></span>
</span>
                da internet..."
              </h2>
<p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xl font-light">
                Eles não querem que você saiba, mas a verdade é que eles não
                perdem tempo desenhando botão por botão.
              </p>
<div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent my-4"></div>
<p className="text-xs md:text-sm text-slate-300 tracking-wide">
<strong className="text-white font-semibold">A boa notícia?</strong>
                Agora VOCÊ pode aplicar essa mesma estratégia na ferramenta mais
                utilizada do mundo, o
                <strong className="text-magma-400 font-semibold">Figma</strong>
                .
              </p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
<div className="text-center mb-12 md:mb-20 reveal-blur">
<div className="inline-block px-3 py-1 mb-4 rounded-full border border-magma-500/20 bg-magma-900/10 text-[9px] font-bold text-magma-400 uppercase tracking-[0.2em] backdrop-blur-md">
            Resultados Reais
          </div>
<h2 className="text-3xl md:text-6xl font-display font-medium text-white tracking-tighter">
            Feito em minutos.
            <br className="md:hidden"/>
<span className="text-magma-500">Vendido por milhares.</span>
</h2>
<p className="text-slate-500 text-xs md:text-sm mt-6 max-w-lg mx-auto leading-relaxed">
            Estes são exemplos reais do nível de qualidade "Awwwards" que você
            vai entregar. Sem templates prontos, sem cara de site barato.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="spotlight-group interact-button group aspect-[3/4] rounded-2xl bg-[#080808] border border-white/5 cursor-pointer tilt-element">
<div className="spotlight-border"></div>
<div className="relative h-full w-full overflow-hidden rounded-2xl z-10">
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition duration-700 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2015&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="text-[9px] font-bold text-magma-500 uppercase tracking-widest mb-2">
                  Alta Conversão
                </div>
<h3 className="text-xl font-display font-bold text-white">
                  Landing Page SaaS
                </h3>
</div>
<div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur border border-white/10 px-2.5 py-1 rounded text-[9px] text-white flex items-center gap-1.5 font-mono">
<span className="iconify" data-icon="lucide:clock" data-width="10"></span>
                15 MIN
              </div>
</div>
</div>

<div className="spotlight-group interact-button group aspect-[3/4] rounded-2xl bg-[#080808] border border-white/5 cursor-pointer tilt-element">
<div className="spotlight-border"></div>
<div className="relative h-full w-full overflow-hidden rounded-2xl z-10">
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition duration-700 scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="text-[9px] font-bold text-magma-400 uppercase tracking-widest mb-2">
                  Dark Mode
                </div>
<h3 className="text-xl font-display font-bold text-white">
                  Portal de Cursos
                </h3>
</div>
</div>
</div>

<div className="spotlight-group interact-button group aspect-[3/4] rounded-2xl bg-[#080808] border border-white/5 cursor-pointer tilt-element">
<div className="spotlight-border"></div>
<div className="relative h-full w-full overflow-hidden rounded-2xl z-10">
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition duration-700 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="text-[9px] font-bold text-magma-500 uppercase tracking-widest mb-2">
                  Vendas
                </div>
<h3 className="text-xl font-display font-bold text-white">
                  E-commerce Tech
                </h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 md:mb-24 reveal-blur">
<div className="inline-block px-3 py-1 mb-4 rounded-full bg-magma-600 text-white text-[9px] font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(234,88,12,0.4)]">
              O Método Figma Core
            </div>
<h2 className="text-3xl md:text-6xl font-display font-medium text-white tracking-tighter text-balance">
              Você não está atrasado. Você só usa o
              <span className="text-magma-500 line-through decoration-magma-500/50 decoration-2 decoration-wavy">
                método antigo
              </span>
              .
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">

<div className="spotlight-group reveal-blur rounded-3xl p-8 flex flex-col justify-between border border-white/5 md:row-span-2 bg-[#050505] hover:bg-[#080808] transition-colors interact-button">
<div className="spotlight-border"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-magma-500 mb-6 shadow-inner">
<span className="iconify" data-icon="lucide:bot" data-width="24"></span>
</div>
<div>
<h3 className="text-white font-display font-bold text-xl mb-3">
                    Sua "Agência" de IA
                  </h3>
<p className="text-xs text-slate-400 leading-relaxed mb-8">
                    Imagine ter um designer sênior trabalhando 24h por dia para
                    você. A IA gera a estrutura, você finaliza e vende.
                  </p>
<div className="h-40 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 relative overflow-hidden group-hover:border-white/10 transition-colors">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_rgba(234,88,12,0.15),transparent)]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<span className="iconify text-white/10 animate-pulse-slow" data-icon="lucide:cpu" data-width="64"></span>
</div>
</div>
</div>
</div>
</div>

<div className="spotlight-group reveal-blur md:col-span-2 rounded-3xl p-8 flex items-center relative overflow-hidden group border border-white/5 bg-[#050505] interact-button">
<div className="spotlight-border"></div>
<div className="relative z-10 max-w-[60%] md:max-w-[50%]">
<h3 className="text-white font-display font-bold text-xl mb-3">
                  Acabamento Visual de Verdade
                </h3>
<p className="text-xs text-slate-400 leading-relaxed mb-4">
                  IA sozinha faz coisas genéricas. Nós ensinamos o "Toque de
                  Midas" no Figma que transforma um layout comum em uma página
                  de R$ 2.000.
                </p>
</div>
<div className="absolute right-[-30px] top-8 w-[180px] md:w-[280px] h-[320px] bg-[#0A0A0C] border border-white/10 rounded-xl shadow-2xl rotate-[-6deg] group-hover:rotate-0 group-hover:translate-x-[-10px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
<div className="p-3 border-b border-white/5 flex gap-2">
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<div className="p-4 space-y-4">
<div className="h-2 w-1/2 bg-white/10 rounded animate-pulse"></div>
<div className="h-24 w-full bg-magma-900/10 rounded border border-magma-500/20 shadow-[0_0_20px_-5px_rgba(234,88,12,0.1)]"></div>
<div className="flex gap-2">
<div className="h-8 w-full bg-white/5 rounded"></div>
<div className="h-8 w-full bg-white/5 rounded"></div>
</div>
</div>
</div>
</div>

<div className="reveal-blur bg-magma-600 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group shadow-[0_0_40px_-10px_rgba(234,88,12,0.3)] interact-button cursor-pointer">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
<div className="absolute top-0 right-0 p-8 opacity-10 text-black transform group-hover:scale-150 transition-transform duration-700 rotate-12">
<span className="iconify" data-icon="lucide:zap" data-width="120"></span>
</div>
<h3 className="text-white font-display font-bold text-xl relative z-10 tracking-tight">
                Velocidade Absurda
              </h3>
<div className="relative z-10">
<p className="text-[11px] text-white/90 font-medium leading-relaxed mb-4 tracking-wide">
                  Método desenhado para velocidade. Assista hoje, aplique
                  amanhã. Publique em um clique.
                </p>
</div>
</div>

<div className="spotlight-group reveal-blur rounded-3xl p-8 flex flex-col justify-between border border-white/5 bg-[#050505] interact-button">
<div className="spotlight-border"></div>
<div className="relative z-10">
<h3 className="text-white font-display font-bold text-xl mb-3">
                  Mercado Inexplorado
                </h3>
<p className="text-xs text-slate-400 leading-relaxed">
                  Enquanto todos brigam no Photoshop e Canva, você nada de
                  braçada com Figma + IA.
                </p>
</div>
<div className="relative z-10 w-full h-1 bg-white/10 mt-6 rounded-full overflow-hidden">
<div className="h-full bg-magma-500 w-[85%] shadow-[0_0_10px_#ea580c]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 relative border-t border-white/5 bg-[#030303]">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">

<div className="reveal-blur order-last lg:order-first relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-magma-600/20 blur-[100px] rounded-full"></div>
<div className="relative rounded-3xl border border-white/10 bg-[#050505] p-2 md:p-3 shadow-2xl tilt-element">
<div className="relative rounded-2xl bg-[#080808] border border-white/5 overflow-hidden p-6 md:p-10 flex flex-col gap-6 aspect-[5/4] md:aspect-[4/3]">

<div className="w-full h-16 rounded bg-white/5 border border-white/5 flex items-center justify-center">
<span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                    Headline + VSL
                  </span>
</div>

<div className="w-3/4 h-2 rounded-full bg-white/5 mx-auto"></div>
<div className="grid grid-cols-3 gap-4 flex-1">
<div className="bg-white/5 rounded border border-white/5"></div>
<div className="bg-white/5 rounded border border-white/5"></div>
<div className="bg-white/5 rounded border border-white/5"></div>
</div>

<div className="w-full h-12 rounded bg-magma-900/10 border border-magma-500/20 flex items-center justify-center">
<span className="text-[10px] font-bold text-magma-500 uppercase tracking-[0.2em]">
                    Offer &amp; CTA
                  </span>
</div>
</div>

<div className="absolute bottom-10 -right-4 md:bottom-12 md:-right-12 z-20 interact-button hover:scale-110 transition-transform">
<div className="w-16 h-16 md:w-24 md:h-24 bg-magma-500 rounded-2xl shadow-[0_0_50px_rgba(234,88,12,0.5)] flex flex-col items-center justify-center gap-1 text-black -rotate-6 border-[3px] border-[#050505]">
<span className="iconify" data-height="20" data-icon="lucide:trending-up" data-width="20"></span>
<span className="font-bold text-[10px] md:text-xs tracking-wider">
                    ROI
                  </span>
</div>
</div>
</div>
</div>

<div className="reveal-blur">
<div className="inline-block px-3 py-1 mb-6 rounded-full border border-magma-500/20 bg-magma-900/10 text-[9px] font-bold text-magma-400 uppercase tracking-[0.2em]">
              Fundamentos Sólidos
            </div>
<h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tighter leading-[1.1] mb-6">
              A IA aperta os botões.
              <br/>
<span className="text-magma-500">Você define a estratégia.</span>
</h2>
<p className="text-slate-400 text-sm leading-relaxed mb-10 font-light">
              Não adianta ter velocidade se você não sabe a direção. No
              <strong className="text-white font-medium">Figma Core</strong>
              , nós pegamos na sua mão e ensinamos a ciência por trás das
              páginas que vendem milhões.
            </p>
<div className="space-y-8">

<div className="flex gap-5 group">
<div className="w-12 h-12 shrink-0 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-magma-500 group-hover:border-magma-500/30 transition-all shadow-inner">
<span className="iconify" data-icon="lucide:layout-template" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-bold text-base mb-2">
                    Estrutura de Conversão
                  </h4>
<p className="text-xs text-slate-500 leading-relaxed font-light">
                    Você vai aprender a anatomia perfeita de uma Landing Page:
                    Headline, VSL, Quebra de Objeções e Oferta Irresistível. Não
                    é "fazer bonitinho", é fazer vender.
                  </p>
</div>
</div>

<div className="flex gap-5 group">
<div className="w-12 h-12 shrink-0 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-magma-500 group-hover:border-magma-500/30 transition-all shadow-inner">
<span className="iconify" data-icon="lucide:navigation" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-bold text-base mb-2">
                    Posicionamento de Mercado
                  </h4>
<p className="text-xs text-slate-500 leading-relaxed font-light">
                    Deixe de ser o "sobrinho do site". Ensinamos como se portar,
                    como negociar e como cobrar caro pelo seu serviço, se
                    posicionando como um parceiro estratégico.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 relative border-t border-white/5 bg-[#030303]">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12 md:mb-20 reveal-blur">
<div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-magma-500 text-black text-[10px] font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(234,88,12,0.4)]">
              Acompanhamento VIP
            </div>
<h2 className="text-3xl md:text-6xl font-display font-medium text-white tracking-tighter mb-6">
              Não é só um curso.
              <br/>
<span className="text-magma-500">É um ecossistema de lucro.</span>
</h2>
<p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
              A maioria dos cursos te abandona após a compra. Aqui, seu
              resultado é nosso case de sucesso. Você terá suporte próximo para
              garantir que não vai travar.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group p-8 md:p-10 rounded-3xl bg-[#080808] border border-white/5 hover:border-magma-500/20 transition-all duration-300 relative overflow-hidden reveal-blur interact-button">
<div className="absolute inset-0 bg-gradient-to-br from-magma-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-magma-900/10 border border-magma-500/10 flex items-center justify-center text-magma-500 mb-8 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_-5px_rgba(234,88,12,0.1)]">
<span className="iconify" data-icon="lucide:monitor" data-width="24"></span>
</div>
<h3 className="text-xl font-display font-bold text-white mb-4">
                  Análise de Projetos
                </h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                  Não sabe se seu design está bom? Envie para análise e receba
                  feedback detalhado em vídeo dos mentores, apontando exatamente
                  o que melhorar antes de entregar ao cliente.
                </p>
</div>
</div>

<div className="group p-8 md:p-10 rounded-3xl bg-[#080808] border border-white/5 hover:border-magma-500/20 transition-all duration-300 relative overflow-hidden reveal-blur interact-button">
<div className="absolute inset-0 bg-gradient-to-br from-magma-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-magma-900/10 border border-magma-500/10 flex items-center justify-center text-magma-500 mb-8 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_-5px_rgba(234,88,12,0.1)]">
<span className="iconify" data-icon="lucide:users" data-width="24"></span>
</div>
<h3 className="text-xl font-display font-bold text-white mb-4">
                  Plantão de Dúvidas Ao Vivo
                </h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                  Quinzenalmente nos reunimos no Zoom para tirar travas
                  técnicas, discutir negociação com clientes e estratégias de
                  venda. É aqui que o jogo vira.
                </p>
</div>
</div>

<div className="group p-8 md:p-10 rounded-3xl bg-[#080808] border border-white/5 hover:border-magma-500/20 transition-all duration-300 relative overflow-hidden reveal-blur interact-button">
<div className="absolute inset-0 bg-gradient-to-br from-magma-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-magma-900/10 border border-magma-500/10 flex items-center justify-center text-magma-500 mb-8 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_-5px_rgba(234,88,12,0.1)]">
<span className="iconify" data-icon="lucide:dollar-sign" data-width="24"></span>
</div>
<h3 className="text-xl font-display font-bold text-white mb-4">
                  Networking High Ticket
                </h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                  Acesso ao grupo exclusivo de alunos. É lá que rolam parcerias,
                  indicações de projetos que não conseguimos pegar e troca de
                  experiências de campo.
                </p>
</div>
</div>

<div className="group p-8 md:p-10 rounded-3xl bg-[#080808] border border-white/5 hover:border-magma-500/20 transition-all duration-300 relative overflow-hidden reveal-blur interact-button">
<div className="absolute inset-0 bg-gradient-to-br from-magma-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-magma-900/10 border border-magma-500/10 flex items-center justify-center text-magma-500 mb-8 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_-5px_rgba(234,88,12,0.1)]">
<span className="iconify" data-icon="lucide:zap" data-width="24"></span>
</div>
<h3 className="text-xl font-display font-bold text-white mb-4">
                  Banco de Talentos
                </h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                  Os alunos que se destacam entram para o nosso radar.
                  Frequentemente contratamos ou indicamos nossos melhores alunos
                  para projetos reais da nossa agência.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 relative bg-[#030303]">
<div className="max-w-4xl mx-auto">

<div className="mb-12 md:mb-16 reveal-blur">
<h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-4 tracking-tight">
              O Caminho das Pedras
            </h2>
<p className="text-slate-400 text-sm md:text-base font-light">
              Do zero ao avançado. Sem enrolação. Direto ao lucro.
            </p>
</div>

<div className="space-y-4">

<div className="reveal-blur group flex items-start md:items-center gap-6 p-6 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/10 transition-colors interact-button cursor-default">
<div className="shrink-0 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center font-mono font-bold text-magma-500 text-lg">
                1
              </div>
<div>
<h3 className="text-white font-bold text-sm md:text-base uppercase tracking-wide mb-1">
                  Módulo 01: Setup &amp; Mindset
                </h3>
<p className="text-xs md:text-sm text-slate-500 font-light">
                  Configurando sua mentalidade e ambiente de trabalho para alta
                  performance.
                </p>
</div>
</div>

<div className="reveal-blur group flex items-start md:items-center gap-6 p-6 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/10 transition-colors interact-button cursor-default">
<div className="shrink-0 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center font-mono font-bold text-magma-500 text-lg">
                2
              </div>
<div>
<h3 className="text-white font-bold text-sm md:text-base uppercase tracking-wide mb-1">
                  Módulo 02: Figma Core
                </h3>
<p className="text-xs md:text-sm text-slate-500 font-light">
                  Dominando a ferramenta em 1 semana (Auto Layout, Components,
                  Design System).
                </p>
</div>
</div>

<div className="reveal-blur group flex items-start md:items-center gap-6 p-6 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/10 transition-colors interact-button cursor-default">
<div className="shrink-0 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center font-mono font-bold text-magma-500 text-lg">
                3
              </div>
<div>
<h3 className="text-white font-bold text-sm md:text-base uppercase tracking-wide mb-1">
                  Módulo 03: Estrutura de Vendas
                </h3>
<p className="text-xs md:text-sm text-slate-500 font-light">
                  Copywriting, Hierarquia Visual e Psicologia das Cores para
                  converter.
                </p>
</div>
</div>

<div className="reveal-blur relative group flex items-start md:items-center gap-6 p-6 rounded-2xl bg-magma-900/10 border border-magma-500/30 hover:border-magma-500/50 transition-colors overflow-hidden interact-button cursor-default">

<div className="absolute inset-0 bg-magma-600/5 group-hover:bg-magma-600/10 transition-colors"></div>
<div className="absolute -right-10 -top-10 w-32 h-32 bg-magma-500/20 blur-2xl rounded-full pointer-events-none"></div>
<div className="relative z-10 shrink-0 w-12 h-12 rounded-lg bg-magma-500 flex items-center justify-center font-mono font-bold text-black text-lg shadow-[0_0_15px_rgba(234,88,12,0.4)]">
                4
              </div>
<div className="relative z-10">
<h3 className="text-white font-bold text-sm md:text-base uppercase tracking-wide mb-1 flex flex-wrap items-center gap-2">
                  Módulo 04: Figma Make (IA)
                  <span className="px-2 py-0.5 rounded-full bg-magma-500 text-[9px] text-black font-bold tracking-wider">
                    NOVO
                  </span>
</h3>
<p className="text-xs md:text-sm text-magma-100/70 font-light">
                  A mina de ouro. Gerando sites completos com prompts secretos e
                  plugins exclusivos.
                </p>
</div>
</div>

<div className="reveal-blur group flex items-start md:items-center gap-6 p-6 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/10 transition-colors interact-button cursor-default">
<div className="shrink-0 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center font-mono font-bold text-magma-500 text-lg">
                5
              </div>
<div>
<h3 className="text-white font-bold text-sm md:text-base uppercase tracking-wide mb-1">
                  Módulo 05: Mercado &amp; Escala
                </h3>
<p className="text-xs md:text-sm text-slate-500 font-light">
                  Como precificar, onde achar clientes ricos e como fechar
                  contratos.
                </p>
</div>
</div>

<div className="reveal-blur group flex items-start md:items-center gap-6 p-6 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/10 transition-colors interact-button cursor-default">
<div className="shrink-0 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center font-mono font-bold text-magma-500 text-lg">
<span className="iconify" data-icon="lucide:gift" data-width="20"></span>
</div>
<div>
<h3 className="text-white font-bold text-sm md:text-base uppercase tracking-wide mb-1">
                  Bônus: Arsenal Criativo
                </h3>
<p className="text-xs md:text-sm text-slate-500 font-light">
                  Prompts bases para copiar e colar + Lista de Ferramentas
                  Secretas.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 relative bg-black/40 backdrop-blur-sm border-y border-white/5">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-20 items-center">

<div className="reveal-blur grid grid-cols-2 gap-4 h-auto md:h-full min-h-[500px]">

<div className="relative rounded-[2rem] overflow-hidden border border-white/5 group interact-button md:translate-y-8 bg-[#050505]">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10"></div>

<img alt="Foto de João Mateus" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://placehold.co/600x800/080808/ea580c?text=JOAO+(ANEXO+2)"/>
<div className="absolute bottom-6 left-6 z-20">
<div className="text-[10px] text-magma-500 font-bold uppercase tracking-widest mb-1">
                  Co-Founder
                </div>
<h3 className="text-xl font-display font-bold text-white">
                  João Mateus
                </h3>
</div>
</div>

<div className="relative rounded-[2rem] overflow-hidden border border-white/5 group interact-button md:-translate-y-8 bg-[#050505]">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10"></div>

<img alt="Foto de Araújo - Homem de Óculos no Laptop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://placehold.co/600x800/080808/ea580c?text=ARAUJO+(ANEXO+1)"/>
<div className="absolute bottom-6 left-6 z-20">
<div className="text-[10px] text-magma-500 font-bold uppercase tracking-widest mb-1">
                  Co-Founder
                </div>
<h3 className="text-xl font-display font-bold text-white">
                  Araújo
                </h3>
</div>
</div>
</div>
<div className="reveal-blur flex flex-col justify-center">
<div className="inline-block px-4 py-1.5 mb-6 md:mb-8 rounded-full bg-magma-500 text-black text-[9px] font-bold uppercase tracking-[0.2em] w-fit shadow-[0_0_20px_rgba(234,88,12,0.4)]">
              Seus Mentores
            </div>
<h2 className="text-3xl md:text-6xl font-display font-medium text-white tracking-tighter leading-[1] mb-8 text-balance">
              Quem vive o campo de batalha.
            </h2>
<div className="space-y-6 text-sm text-slate-400 leading-relaxed font-light mb-12 border-l border-white/10 pl-6">
<p>
                João Mateus e Araújo não são teóricos de palco. Somos players
                que faturam múltiplos 6 dígitos mensalmente aplicando exatamente
                este framework.
              </p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="interact-button p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-magma-500/20 hover:bg-white/[0.04] transition-all group cursor-default">
<div className="text-3xl md:text-4xl font-display font-bold text-white mb-2 group-hover:text-magma-500 transition-colors counter" data-target="280">
                  +0
                </div>
<div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">
                  Faturados em 7 dias
                </div>
</div>
<div className="interact-button p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-magma-500/20 hover:bg-white/[0.04] transition-all group cursor-default">
<div className="text-3xl md:text-4xl font-display font-bold text-white mb-2 group-hover:text-magma-500 transition-colors counter" data-target="500">
                  +0
                </div>
<div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">
                  Alunos Formados
                </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-magma-600/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-6xl mx-auto">

<div className="relative rounded-[3rem] border border-magma-500/30 bg-[#020101] overflow-hidden p-6 md:p-16 shadow-[0_0_100px_-20px_rgba(234,88,12,0.15)] reveal-blur">
<div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">

<div className="flex flex-col justify-center">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-900/30 border border-red-500/30 text-red-200 text-[10px] font-bold uppercase tracking-[0.1em] mb-6 w-fit backdrop-blur-md">
                  Vagas Limitadas
                </div>

<h2 className="text-3xl md:text-6xl font-display font-bold text-white tracking-tighter leading-[1.1] mb-6">
                  Domine o Figma.
                  <br/>
<span className="text-white">Domine o Mercado.</span>
</h2>

<p className="text-slate-400 text-sm md:text-base leading-relaxed mb-10 max-w-md font-light">
                  Tudo o que você precisa para sair do zero e começar a faturar
                  com design e IA ainda este mês.
                </p>

<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-200 text-sm font-medium">
<span className="iconify text-magma-500 shrink-0" data-icon="lucide:check-circle-2" data-width="20"></span>
                    Curso Completo Figma Core
                  </li>
<li className="flex items-center gap-3 text-slate-200 text-sm font-medium">
<span className="iconify text-magma-500 shrink-0" data-icon="lucide:check-circle-2" data-width="20"></span>
                    Módulo Figma Maker (IA)
                  </li>
<li className="flex items-center gap-3 text-slate-200 text-sm font-medium">
<span className="iconify text-magma-500 shrink-0" data-icon="lucide:check-circle-2" data-width="20"></span>
                    Comunidade de Networking
                  </li>
<li className="flex items-center gap-3 text-slate-200 text-sm font-medium">
<span className="iconify text-magma-500 shrink-0" data-icon="lucide:check-circle-2" data-width="20"></span>
                    Mentoria Exclusiva
                  </li>
<li className="flex items-center gap-3 text-slate-200 text-sm font-medium">
<span className="iconify text-magma-500 shrink-0" data-icon="lucide:check-circle-2" data-width="20"></span>
                    Prompts bases para copiar e colar
                  </li>
<li className="flex items-center gap-3 text-slate-200 text-sm font-medium">
<span className="iconify text-magma-500 shrink-0" data-icon="lucide:check-circle-2" data-width="20"></span>
                    Certificado Oficial
                  </li>
</ul>
</div>

<div className="relative">
<div className="relative rounded-[2.5rem] bg-[#050505] border border-white/10 p-8 md:p-12 text-center shadow-2xl overflow-visible group interact-button hover:border-magma-500/30 transition-colors duration-500">

<div className="absolute -top-6 left-1/2 -translate-x-1/2 px-8 py-3 bg-magma-500 text-[#030303] text-xs font-bold uppercase tracking-[0.2em] rounded-full shadow-[0_0_30px_rgba(234,88,12,0.6)] z-20 whitespace-nowrap">
                    Oferta Especial
                  </div>

<div className="mt-6 mb-10 flex flex-col items-center">
<div className="text-slate-500 text-lg font-mono line-through mb-6 decoration-slate-600">
                      De R$ 497,00
                    </div>
<div className="flex items-center justify-center gap-4">

<div className="flex flex-col items-end justify-center gap-0.5 leading-none">
<span className="text-xl md:text-2xl text-slate-400 font-medium">
                          12x
                        </span>
<span className="text-xl md:text-2xl text-slate-400 font-medium">
                          de
                        </span>
</div>

<div className="flex flex-col items-center justify-center leading-none">
<span className="text-3xl md:text-4xl font-bold text-white mb-1">
                          R$
                        </span>
<span className="text-7xl md:text-8xl font-display font-bold tracking-tighter text-white">
                          14,70
                        </span>
</div>
</div>
<div className="text-slate-400 text-sm mt-6 font-medium">
                      ou R$ 147,00 à vista
                    </div>
</div>

<a className="block w-full py-5 rounded-2xl bg-magma-500 hover:bg-magma-400 text-[#030303] font-bold text-base md:text-lg uppercase tracking-widest shadow-[0_0_30px_-5px_rgba(234,88,12,0.5)] transition-all transform hover:scale-[1.02] active:scale-[0.98] btn-physics mb-10" href="#join">
                    Quero Garantir
                    <br className="hidden md:block"/>
                    Minha Vaga
                  </a>

<div className="pt-8 border-t border-white/5 flex items-center justify-center gap-8 text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-widest">
<div className="flex flex-col md:flex-row items-center gap-2 text-center">
<span className="iconify" data-icon="lucide:lock" data-width="14"></span>
<span>
                        Compra
                        <br className="md:hidden"/>
                        Segura
                      </span>
</div>
<div className="flex flex-col md:flex-row items-center gap-2 text-center">
<span className="iconify" data-icon="lucide:shield-check" data-width="14"></span>
<span>
                        7 Dias de
                        <br className="md:hidden"/>
                        Garantia
                      </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 relative bg-black/40 backdrop-blur-sm border-t border-white/5">
<div className="max-w-3xl mx-auto">

<div className="text-center mb-12 md:mb-20 reveal-blur">
<span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-white text-[9px] font-bold uppercase tracking-[0.2em]">
              DÚVIDAS FREQUENTES
            </span>
<h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">
              Ainda com dúvidas?
            </h2>
</div>

<div className="space-y-4 reveal-blur">

<details className="interact-button group bg-[#080808] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-[#0A0A0A] hover:border-magma-500/20">
<summary className="flex justify-between items-center cursor-pointer p-6 md:p-8 list-none select-none">
<span className="text-sm md:text-base font-medium text-white tracking-wide">
                  Preciso saber programar ou desenhar?
                </span>
<span className="chevron transition-transform duration-300 text-slate-500 group-hover:text-magma-500">
<span className="iconify" data-icon="lucide:plus" data-width="20"></span>
</span>
</summary>
<div className="px-6 md:px-8 pb-8 pt-0 text-sm text-slate-400 leading-relaxed font-light">
                Não. O método é 100% focado em utilizar Inteligência Artificial
                para gerar as estruturas e o Figma para o acabamento. Você não
                precisa de talentos artísticos, apenas seguir o processo passo a
                passo.
              </div>
</details>

<details className="interact-button group bg-[#080808] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-[#0A0A0A] hover:border-magma-500/20">
<summary className="flex justify-between items-center cursor-pointer p-6 md:p-8 list-none select-none">
<span className="text-sm md:text-base font-medium text-white tracking-wide">
                  Como recebo o acesso?
                </span>
<span className="chevron transition-transform duration-300 text-slate-500 group-hover:text-magma-500">
<span className="iconify" data-icon="lucide:plus" data-width="20"></span>
</span>
</summary>
<div className="px-6 md:px-8 pb-8 pt-0 text-sm text-slate-400 leading-relaxed font-light">
                O acesso é enviado automaticamente para o seu e-mail cadastrado
                assim que o pagamento é confirmado. Se for cartão ou PIX, é
                imediato.
              </div>
</details>

<details className="interact-button group bg-[#080808] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-[#0A0A0A] hover:border-magma-500/20">
<summary className="flex justify-between items-center cursor-pointer p-6 md:p-8 list-none select-none">
<span className="text-sm md:text-base font-medium text-white tracking-wide">
                  E se eu não gostar?
                </span>
<span className="chevron transition-transform duration-300 text-slate-500 group-hover:text-magma-500">
<span className="iconify" data-icon="lucide:plus" data-width="20"></span>
</span>
</summary>
<div className="px-6 md:px-8 pb-8 pt-0 text-sm text-slate-400 leading-relaxed font-light">
                Você tem 7 dias de garantia incondicional. Se não gostar da
                didática ou do conteúdo, basta enviar um e-mail e devolvemos
                100% do seu dinheiro. Risco zero.
              </div>
</details>
</div>
</div>
</section>

<footer className="py-8 md:py-12 px-6 border-t border-white/5 bg-[#020101]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
<div className="flex items-center gap-3">
<img alt="Figma Core" className="h-8 w-auto object-contain" src="https://placehold.co/150x40/020101/FFFFFF?text=FIGMA+CORE"/>
</div>
<div className="flex items-center gap-8 text-[11px] text-slate-500 font-medium uppercase tracking-wider">
<a className="interact-button hover:text-white transition-colors" href="#">
              Termos
            </a>
<a className="interact-button hover:text-white transition-colors" href="#">
              Privacidade
            </a>
<a className="interact-button hover:text-white transition-colors" href="#">
              Suporte
            </a>
</div>
<div className="flex items-center gap-2">
<div className="text-[10px] text-slate-700 font-mono">
              © 2024 Figma Core.
            </div>
</div>
</div>
</footer>
</div>



    </>
  );
}
