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



        (function() {
            const track = document.getElementById('process-timeline-track');
            const steps = document.querySelectorAll('.process-step');
            const desktopBar = document.getElementById('line-progress-desktop');
            const mobileBar = document.getElementById('line-progress-mobile');

            function onScroll() {
                if(!track) return;
                const rect = track.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Desktop Horizontal Logic
                const startY = windowHeight * 0.8;
                const endY = windowHeight * 0.2;
                let progress = (startY - rect.top) / (startY - endY);
                progress = Math.max(0, Math.min(1, progress));

                if(desktopBar) desktopBar.style.width = (progress * 100) + '%';

                // Mobile Vertical Logic
                const triggerPoint = windowHeight * 0.6;
                let mobileProgress = (triggerPoint - rect.top) / rect.height;
                mobileProgress = Math.max(0, Math.min(1, mobileProgress));
                if(mobileBar) mobileBar.style.height = (mobileProgress * 100) + '%';

                // Node Activation
                const isMobile = window.innerWidth < 768;

                steps.forEach((step, index) => {
                    const node = step.querySelector('.process-node');
                    const content = step.querySelector('.process-content');
                    let active = false;

                    if(isMobile) {
                        const nodeRect = node.getBoundingClientRect();
                        if(nodeRect.top < triggerPoint) active = true;
                    } else {
                        // Activate sequentially as bar fills (0.22 creates a nice staggering)
                        const threshold = index * 0.22;
                        if(progress > threshold) active = true;
                    }

                    if(active) {
                        node.classList.add('active');
                        content.classList.add('active');
                    } else {
                        node.classList.remove('active');
                        content.classList.remove('active');
                    }
                });
            }

            window.addEventListener('scroll', onScroll, { passive: true });
            window.addEventListener('resize', onScroll);
            onScroll();
        })();
      


      // Flashlight Effect
      document.addEventListener('mousemove', (e) => {
          const cards = document.querySelectorAll('.flashlight-card');
          cards.forEach(card => {
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              card.style.setProperty('--mouse-x', `${x}px`);
              card.style.setProperty('--mouse-y', `${y}px`);
          });
      });

      // Intersection Observer
      const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('is-visible');
                  if(entry.target.querySelector('h2') && entry.target.querySelector('h2').innerText.includes('Proceso')) {
                       const processLine = document.getElementById('process-line');
                       if(processLine) processLine.style.width = '100%';
                  }
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);
      document.querySelectorAll('.reveal-element').forEach(el => observer.observe(el));

      window.addEventListener('scroll', () => {
          const processSection = document.querySelector('section:nth-of-type(4)');
          if(processSection) {
              const rect = processSection.getBoundingClientRect();
              const windowHeight = window.innerHeight;
              if(rect.top < windowHeight && rect.bottom > 0) {
                   const percentage = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height/2) * 100, 0), 100);
                   const line = document.getElementById('process-line');
                   if(line) line.style.width = `${percentage}%`;
              }
          }
      });

      /* --- 3D COVERFLOW LOGIC --- */
      const container = document.getElementById('carousel-container');
      const cards = Array.from(document.querySelectorAll('.coverflow-card'));
      let activeIndex = 0;
      let intervalId;
      const AUTO_DELAY = 2500;

      function updateCarousel() {
        cards.forEach((card, index) => {
          let offset = (index - activeIndex) % cards.length;
          if (offset < 0) offset += cards.length;
          if (offset > cards.length / 2) offset -= cards.length;

          if (offset === 0) {
            card.style.transform = 'translateZ(150px) scale(1) rotateY(0deg)';
            card.style.zIndex = 10;
            card.style.opacity = 1;
            card.style.filter = 'blur(0)';
            card.style.boxShadow = '0 20px 50px -10px rgba(30, 107, 255, 0.4)';
            card.style.borderColor = '#1E6BFF';
          } else if (offset === -1) {
            card.style.transform = 'translateX(-70%) translateZ(-250px) rotateY(35deg)';
            card.style.zIndex = 5;
            card.style.opacity = 0.3;
            card.style.filter = 'blur(4px)';
            card.style.boxShadow = 'none';
            card.style.borderColor = 'rgba(255,255,255,0.1)';
          } else if (offset === 1) {
            card.style.transform = 'translateX(70%) translateZ(-250px) rotateY(-35deg)';
            card.style.zIndex = 5;
            card.style.opacity = 0.3;
            card.style.filter = 'blur(4px)';
            card.style.boxShadow = 'none';
            card.style.borderColor = 'rgba(255,255,255,0.1)';
          } else {
            const dir = offset > 0 ? 1 : -1;
            card.style.transform = `translateX(${dir * 120}%) translateZ(-500px) rotateY(${dir * 45}deg)`;
            card.style.zIndex = 0;
            card.style.opacity = 0;
            card.style.filter = 'blur(8px)';
            card.style.boxShadow = 'none';
            card.style.borderColor = 'transparent';
          }
        });
      }

      function next() {
        activeIndex = (activeIndex + 1) % cards.length;
        updateCarousel();
      }

      function startAuto() {
        clearInterval(intervalId);
        intervalId = setInterval(next, AUTO_DELAY);
      }

      if (container && cards.length > 0) {
        cards.forEach((card, i) => {
          card.addEventListener('click', () => {
            activeIndex = i;
            updateCarousel();
            startAuto();
          });
        });
        container.addEventListener('mouseenter', () => clearInterval(intervalId));
        container.addEventListener('mouseleave', startAuto);
        updateCarousel();
        startAuto();
      }
    


      (function() {
        const modal = document.getElementById('premium-booking-modal');
        const card = document.getElementById('premium-modal-card');
        const closeBtn = document.getElementById('premium-modal-close');

        // Select all buttons containing 'Agenda'
        const triggers = Array.from(document.querySelectorAll('button')).filter(btn =>
            btn.textContent && btn.textContent.toLowerCase().includes('agenda')
        );

        function openModal() {
            modal.style.opacity = '1';
            modal.style.visibility = 'visible';
            modal.style.pointerEvents = 'auto';
            // Premium elastic pop effect
            card.style.transform = 'scale(1) translateY(0)';
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.style.opacity = '0';
            modal.style.visibility = 'hidden';
            modal.style.pointerEvents = 'none';
            // Reset to initial state
            card.style.transform = 'scale(0.94) translateY(10px)';
            document.body.style.overflow = '';
        }

        triggers.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
            });
        });

        if(closeBtn) closeBtn.addEventListener('click', closeModal);

        // Close on backdrop click
        if(modal) modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
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
      
<div className="spline-container top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<iframe frameborder="0" height="100%" src="https://my.spline.design/untitled-UDF59Zyh4GTLMQAG1FfiQvAq/" width="100%"></iframe>
</div>

<nav className="fixed z-50 glass-panel transition-all duration-300 border-white/5 border-b top-0 right-0 left-0" id="navbar">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex gap-x-2 gap-y-2 items-center">
<span className="text-lg font-semibold text-white">OptimizeAI</span>
</div>
<img alt="OptimizeAI Logo" className="order-first transition-transform hover:scale-105 w-8 h-8 object-cover rounded-full ring-white/10 ring-1 shadow-[0_0_15px_-3px_rgba(30,107,255,0.3)] perspective-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e45ebcd7-979c-43f2-9036-0a753565fe52_320w.jpg"/>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group">
<iconify-icon className="text-lg" icon="solar:chat-line-linear"></iconify-icon>
            Cuéntanos tu caso
          </button>
<div className="border-beam-container rounded-full">
<button className="hover:bg-white/10 transition-all flex gap-2 text-sm font-medium text-white bg-white/5 rounded-full pt-2 pr-5 pb-2 pl-5 relative gap-x-2 gap-y-2 items-center">
              Agenda tu llamada
              <iconify-icon className="text-lg" height="18" icon="solar:arrow-right-linear" style={{color: 'rgb(255, 255, 255)'}} width="18"></iconify-icon>
</button>
</div>
</div>
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E6BFF]/10 border border-[#1E6BFF]/20 text-[#4DA3FF] text-xs font-semibold tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-[#1E6BFF] animate-pulse"></span>
            DEMO EN VIVO
          </div>
</div>
</div>
</nav>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-[#1E6BFF]/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[4000ms]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-[#0F3D91]/20 rounded-full blur-[100px] mix-blend-screen"></div>
<div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
</div>

<section className="min-h-screen flex flex-col overflow-hidden z-10 pt-20 pr-6 pb-32 pl-6 relative items-center justify-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-30 pointer-events-none">
<div className="w-full h-full bg-gradient-to-r from-transparent via-[#1E6BFF]/20 to-transparent transform -skew-y-12 blur-3xl"></div>
</div>
<div className="text-center max-w-4xl mr-auto ml-auto space-y-8">
<div className="inline-flex gap-2 reveal-element is-visible text-xs font-medium text-[#4DA3FF] bg-white/5 border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1E6BFF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#1E6BFF]"></span>
</span>
          Agencia de Implementación AI
        </div>
<h1 className="md:text-7xl leading-[1.1] text-clip-reveal text-5xl font-semibold text-white tracking-tighter">
<span className="" style={{animationDelay: '0.1s'}}>
            Infraestructura de IA
          </span>
<br/>
<span className="text-gray-400" style={{animationDelay: '0.2s'}}>
            para empresas que buscan
          </span>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4DA3FF] via-white to-[#1E6BFF]" style={{animationDelay: '0.3s'}}>
            Orden y ROI.
          </span>
<br/>
</h1>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed reveal-element is-visible">
          Diseñamos e implementamos sistemas de automatización que eliminan el
          caos operativo y escalan tus ventas. Sin bots genéricos, solo
          ingeniería de negocio.
        </p>
<div className="flex flex-col md:flex-row reveal-element is-visible pt-4 gap-x-4 gap-y-4 items-center justify-center">
<div className="border-beam-container rounded-full">
<button className="relative bg-white text-black hover:bg-[#E2E8F0] hover:scale-[1.02] active:scale-[0.98] text-base font-medium py-3 px-8 rounded-full transition-all shadow-[0_0_40px_rgba(30,107,255,0.35)]">
              Agenda tu llamada
            </button>
</div>
<button className="text-gray-400 hover:text-white text-sm font-medium px-6 py-3 transition-colors flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
            Ver demo en 59s
          </button>
</div>
</div>
</section>

<section className="overflow-hidden z-10 bg-[#050505]/50 border-white/5 border-t pt-24 pb-24 relative backdrop-blur-sm" id="carousel-section">
<div className="max-w-7xl mx-auto relative px-4">

<div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center perspective-container overflow-visible" id="carousel-container">

<div className="coverflow-card group" data-index="0" style={{zIndex: '10', filter: 'blur(0px)', boxShadow: 'rgba(30, 107, 255, 0.4) 0px 20px 50px -10px', borderColor: 'rgb(30, 107, 255)'}}>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#1E6BFF]">
<iconify-icon height="28" icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
              Escalabilidad Sin Caos
            </h3>
<p className="text-gray-400 leading-relaxed text-sm">
              Estructura sólida que permite multiplicar el volumen de clientes
              sin aumentar la carga operativa manual.
            </p>
</div>

<div className="coverflow-card group" data-index="1" style={{zIndex: '5', filter: 'blur(4px)', boxShadow: 'none', borderColor: 'rgba(255, 255, 255, 0.1)'}}>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#1E6BFF]">
<iconify-icon height="28" icon="solar:restart-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
              Recuperación de Ventas
            </h3>
<p className="text-gray-400 leading-relaxed text-sm">
              Reactiva leads antiguos y nutre prospectos automáticamente para
              maximizar el LTV de cada contacto.
            </p>
</div>

<div className="coverflow-card group" data-index="2" style={{zIndex: '0', filter: 'blur(8px)', boxShadow: 'none', borderColor: 'transparent'}}>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#1E6BFF]">
<iconify-icon height="28" icon="solar:cpu-bolt-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
              Automatización Total
            </h3>
<p className="text-gray-400 leading-relaxed text-sm">
              Delega tareas repetitivas a agentes de IA que trabajan 24/7 con
              precisión quirúrgica.
            </p>
</div>

<div className="coverflow-card group" data-index="3" style={{zIndex: '5', filter: 'blur(4px)', boxShadow: 'none', borderColor: 'rgba(255, 255, 255, 0.1)'}}>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#1E6BFF]">
<iconify-icon height="28" icon="solar:shield-check-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
              Seguridad y Datos
            </h3>
<p className="text-gray-400 leading-relaxed text-sm">
              Protocolos de seguridad empresarial para garantizar que tus datos
              y los de tus clientes estén siempre protegidos.
            </p>
</div>
</div>
</div>
</section>

<section className="z-10 pt-32 pr-6 pb-32 pl-6 relative">
<div className="max-w-7xl mr-auto ml-auto">
<div className="reveal-element mb-16">
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tighter mb-4">
            Qué Hacemos
          </h2>
<p className="text-gray-400 max-w-xl">
            Soluciones end-to-end para digitalizar y optimizar tu negocio.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="flashlight-card md:col-span-2 flex flex-col group reveal-element rounded-2xl pt-8 pr-8 pb-8 pl-8 justify-between" style={{'--mouse-x': '899px', '--mouse-y': '966.5px'}}>
<div className="flex items-start justify-between">
<div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-[#1E6BFF]/50 transition-colors">
<iconify-icon className="text-[#4DA3FF] group-hover:scale-110 transition-transform duration-300" height="24" icon="solar:database-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<iconify-icon className="text-2xl text-gray-600 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="">
<h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">
                Centralización de Leads
              </h3>
<p className="text-gray-400">
                Unificamos todas tus fuentes de entrada (Ads, Web, Referidos) en
                una única fuente de verdad, eliminando la dispersión de datos.
              </p>
</div>
<div className="absolute right-0 bottom-0 w-64 h-64 bg-[#1E6BFF]/10 blur-[80px] rounded-full pointer-events-none"></div>
</div>

<div className="flashlight-card rounded-2xl p-8 flex flex-col justify-between group reveal-element" style={{'--mouse-x': '248.3359375px', '--mouse-y': '966.5px'}}>
<div className="flex justify-between items-start">
<div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-[#1E6BFF]/50 transition-colors">
<iconify-icon className="text-[#4DA3FF] group-hover:scale-110 transition-transform duration-300" height="24" icon="solar:settings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="">
<h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">
                CRM Automatizado
              </h3>
<p className="text-gray-400 text-sm">
                Pipelines que se mueven solos. Actualización de estados y tareas
                sin intervención humana.
              </p>
</div>
</div>

<div className="flashlight-card rounded-2xl p-8 flex flex-col justify-between group reveal-element" style={{'--mouse-x': '899px', '--mouse-y': '642.5px'}}>
<div className="flex justify-between items-start">
<div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-[#1E6BFF]/50 transition-colors">
<iconify-icon className="text-[#4DA3FF] group-hover:scale-110 transition-transform duration-300" height="24" icon="solar:eye-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="">
<h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">
                Seguimiento Inteligente
              </h3>
<p className="text-gray-400 text-sm">
                Sistemas que detectan inactividad y lanzan secuencias de
                reactivación personalizadas.
              </p>
</div>
</div>

<div className="flashlight-card md:col-span-2 rounded-2xl p-8 relative overflow-hidden group reveal-element" style={{'--mouse-x': '573.671875px', '--mouse-y': '642.5px'}}>
<div className="absolute inset-0 bg-gradient-to-br from-[#0F3D91]/30 to-black z-0"></div>
<div className="relative z-10 h-full flex flex-col justify-end">
<h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">
                Dashboards de Control
              </h3>
<p className="text-gray-400">
                Visualización de métricas en tiempo real para toma de decisiones
                basada en datos, no en intuición.
              </p>
</div>
<div className="absolute top-8 right-8 p-3 bg-white/5 rounded-lg border border-white/10 z-10">
<iconify-icon className="text-[#4DA3FF] group-hover:scale-110 transition-transform duration-300" height="24" icon="solar:chart-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 bg-gradient-to-b from-transparent to-[#080808] pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<span className="text-[#1E6BFF] font-medium tracking-wide text-sm uppercase flex items-center justify-center gap-2 mb-3">
<iconify-icon height="16" icon="solar:route-linear" width="16"></iconify-icon>
            Roadmap
          </span>
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight">
            Nuestro Proceso
          </h2>
</div>
<div className="relative pb-12" id="process-timeline-track">

<div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-[2px] bg-white/10 rounded-full">
<div className="h-full bg-[#1E6BFF] w-0 shadow-[0_0_20px_rgba(30,107,255,0.8)] rounded-full transition-all duration-75 ease-linear" id="line-progress-desktop"></div>
</div>

<div className="md:hidden absolute left-[2rem] top-0 bottom-12 w-[2px] bg-white/10 rounded-full">
<div className="w-full bg-[#1E6BFF] h-0 shadow-[0_0_20px_rgba(30,107,255,0.8)] rounded-full transition-all duration-75 ease-linear" id="line-progress-mobile"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

<div className="process-step group flex md:flex-col gap-6 md:gap-0 relative">
<div className="process-node shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center text-xl font-bold text-gray-600 transition-all duration-300 md:mb-8 relative z-10">
                01
              </div>
<div className="process-content opacity-0 translate-y-4 md:text-left transition-all duration-500 pt-2 md:pt-0">
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                  🔍 Auditoría
                </h3>
<p className="text-gray-400 text-sm leading-relaxed">
                  Análisis profundo del flujo actual, detección de cuellos de
                  botella y fugas de dinero.
                </p>
</div>
</div>

<div className="process-step group flex md:flex-col gap-6 md:gap-0 relative">
<div className="process-node shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center text-xl font-bold text-gray-600 transition-all duration-300 md:mb-8 relative z-10">
                02
              </div>
<div className="process-content opacity-0 translate-y-4 md:text-left transition-all duration-500 pt-2 md:pt-0">
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                  📐 Diseño
                </h3>
<p className="text-gray-400 text-sm leading-relaxed">
                  Creación de la arquitectura del sistema. Mapa de procesos y
                  lógica de automatización.
                </p>
</div>
</div>

<div className="process-step group flex md:flex-col gap-6 md:gap-0 relative">
<div className="process-node shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center text-xl font-bold text-gray-600 transition-all duration-300 md:mb-8 relative z-10">
                03
              </div>
<div className="process-content opacity-0 translate-y-4 md:text-left transition-all duration-500 pt-2 md:pt-0">
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                  🚀 Implementación
                </h3>
<p className="text-gray-400 text-sm leading-relaxed">
                  Construcción y conexión de herramientas (API, Webhooks, Bases
                  de Datos) sin fricción.
                </p>
</div>
</div>

<div className="process-step group flex md:flex-col gap-6 md:gap-0 relative">
<div className="process-node shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center text-xl font-bold text-gray-600 transition-all duration-300 md:mb-8 relative z-10">
                04
              </div>
<div className="process-content opacity-0 translate-y-4 md:text-left transition-all duration-500 pt-2 md:pt-0">
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                  📈 Optimización
                </h3>
<p className="text-gray-400 text-sm leading-relaxed">
                  Monitorización de resultados, ajustes finos y escala del
                  sistema.
                </p>
</div>
</div>
</div>
</div>
</div>
<style>
        .process-node.active {
            border-color: #1E6BFF;
            color: white;
            box-shadow: 0 0 30px -5px rgba(30,107,255,0.6), inset 0 0 10px rgba(30,107,255,0.2);
            transform: scale(1.1);
            background: #050505;
        }
        .process-content.active {
            opacity: 1;
            transform: translateY(0);
        }
      </style>

</section>

<section className="border-y bg-black/40 border-white/5 pt-24 pb-24 backdrop-blur">
<div className="text-center mb-12 reveal-element">
<h3 className="text-lg font-medium text-gray-400">
          Tecnología que impulsa tu sistema
        </h3>
</div>
<div className="relative flex overflow-hidden w-full mask-gradient">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
<div className="flex animate-marquee whitespace-nowrap gap-16 items-center">

<iconify-icon className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" height="36" icon="logos:openai-icon" width="36"></iconify-icon>
<iconify-icon className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" height="36" icon="logos:google-icon" width="36"></iconify-icon>
<iconify-icon className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" height="36" icon="logos:python" width="36"></iconify-icon>
<iconify-icon className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" height="36" icon="logos:stripe" width="70"></iconify-icon>
<iconify-icon className="text-white grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" height="36" icon="simple-icons:make" width="36"></iconify-icon>
<iconify-icon className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" height="36" icon="logos:hubspot" width="36"></iconify-icon>
<iconify-icon className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" height="36" icon="logos:airtable" width="90"></iconify-icon>
<iconify-icon className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" height="36" icon="logos:anthropic-icon" width="36"></iconify-icon>

<iconify-icon className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" height="36" icon="logos:openai-icon" width="36"></iconify-icon>
<iconify-icon className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" height="36" icon="logos:google-icon" width="36"></iconify-icon>
<iconify-icon className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" height="36" icon="logos:python" width="36"></iconify-icon>
<iconify-icon className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" height="36" icon="logos:stripe" width="70"></iconify-icon>
<iconify-icon className="text-white grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" height="36" icon="simple-icons:make" width="36"></iconify-icon>
<iconify-icon className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" height="36" icon="logos:hubspot" width="36"></iconify-icon>
<iconify-icon className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" height="36" icon="logos:airtable" width="90"></iconify-icon>
<iconify-icon className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" height="36" icon="logos:anthropic-icon" width="36"></iconify-icon>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1E6BFF]/15 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
</div>
<div className="relative z-10 max-w-3xl reveal-element">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-8">
          ¿Listo para poner orden en tu operativa?
        </h2>
<div className="flex flex-col md:flex-row items-center justify-center gap-6">
<div className="border-beam-container rounded-full scale-110">
<button className="relative bg-white text-black hover:bg-[#E2E8F0] text-lg font-semibold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-[0_0_40px_rgba(30,107,255,0.2)]">
              Agenda tu llamada
            </button>
</div>
<div className="flex flex-col items-start gap-2 text-sm text-gray-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#1E6BFF]" icon="solar:check-circle-linear"></iconify-icon>
<span>Auditoría inicial incluida</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#1E6BFF]" icon="solar:check-circle-linear"></iconify-icon>
<span>Sin coste por propuesta</span>
</div>
</div>
</div>
</div>
</section>
<footer className="py-8 border-t border-white/5 text-center text-gray-600 text-sm">
<p>© 2024 OptimizeAI. Todos los derechos reservados.</p>
</footer>

<div aria-hidden="true" className="fixed inset-0 z-[9999] flex items-center justify-center" id="premium-booking-modal" style={{opacity: '0', pointerEvents: 'none', visibility: 'hidden', perspective: '1000px', transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.4s', background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(10px)'}}>
<div className="relative w-[90%] max-w-[1000px] h-[650px] bg-[#050505] rounded-[24px] border border-[#3C82F6]/30 overflow-hidden flex flex-col" id="premium-modal-card" style={{transform: 'scale(0.94) translateY(10px)', transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(60, 130, 246, 0.2)'}}>
<button className="absolute top-5 right-5 z-20 p-2 text-gray-400 hover:text-white bg-black/50 hover:bg-white/20 rounded-full transition-all duration-300 hover:rotate-90 border border-white/10 group" id="premium-modal-close">
<iconify-icon className="group-hover:scale-110 transition-transform" height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<iframe allowfullscreen="" className="w-full h-full border-none" src="https://cal.com/fernando-baeta-f8klm4/reunion-de-30-min?theme=dark"></iframe>
</div>
</div>


    </>
  );
}
