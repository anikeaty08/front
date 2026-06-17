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



      document.addEventListener('DOMContentLoaded', () => {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Enhanced reveal animations with stagger
        const revealEls = document.querySelectorAll('[data-reveal]');
        if (prefersReduced) {
          revealEls.forEach(el => {
            el.classList.remove('opacity-0','translate-y-6','blur-sm');
            el.classList.add('opacity-100','translate-y-0','blur-0');
            el.style.transitionDelay = '0ms';
          });
        } else {
          const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const el = entry.target;
                el.classList.add('opacity-100','translate-y-0','blur-0');
                el.classList.remove('opacity-0','translate-y-6','blur-sm');
                io.unobserve(el);
              }
            });
          }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });
          revealEls.forEach(el => io.observe(el));
        }

        // Enhanced parallax with 3D transforms
        const parallaxEls = document.querySelectorAll('[data-parallax]');
        if (!prefersReduced && parallaxEls.length) {
          let ticking = false;
          const update = () => {
            const vh = window.innerHeight;
            parallaxEls.forEach(el => {
              const speed = parseFloat(el.getAttribute('data-parallax')) || 0.08;
              const rect = el.getBoundingClientRect();
              const center = rect.top + rect.height / 2 - vh / 2;
              const translateY = -center * speed;
              const rotateX = Math.min(Math.max(-center * speed * 0.01, -2), 2);
              el.style.transform = `translate3d(0, ${translateY}px, 0) rotateX(${rotateX}deg)`;
              el.style.willChange = 'transform';
            });
            ticking = false;
          };
          const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(update);
          };
          update();
          window.addEventListener('scroll', onScroll, { passive: true });
          window.addEventListener('resize', onScroll);
        }

        // 3D depth effect on mouse movement
        const threeDElements = document.querySelectorAll('[data-3d-depth]');
        if (!prefersReduced && threeDElements.length) {
          let mouseX = 0, mouseY = 0;
          document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
            
            threeDElements.forEach(el => {
              const depth = parseFloat(el.getAttribute('data-3d-depth')) || 0.5;
              const translateX = mouseX * depth * 10;
              const translateY = mouseY * depth * 10;
              const rotateY = mouseX * depth * 3;
              const rotateX = -mouseY * depth * 3;
              el.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
          });
        }

        // Floating animation for glassmorphism elements
        const floatingEls = document.querySelectorAll('[data-float]');
        floatingEls.forEach((el, index) => {
          if (!prefersReduced) {
            el.style.animation = `float-${(index % 3) + 1} ${3 + index * 0.5}s ease-in-out infinite`;
          }
        });

        // Enhanced scroll-triggered rotation for 3D elements
        const rotateEls = document.querySelectorAll('[data-scroll-rotate]');
        if (!prefersReduced && rotateEls.length) {
          let rotationTicking = false;
          const updateRotation = () => {
            const scrollY = window.scrollY;
            rotateEls.forEach(el => {
              const rotation = scrollY * 0.05;
              el.style.transform = `rotateY(${rotation}deg) rotateX(${Math.sin(scrollY * 0.001) * 5}deg)`;
            });
            rotationTicking = false;
          };
          const onScrollRotate = () => {
            if (rotationTicking) return;
            rotationTicking = true;
            requestAnimationFrame(updateRotation);
          };
          window.addEventListener('scroll', onScrollRotate, { passive: true });
        }

        // Interactive nodes in the demo section
        const nodes = document.querySelectorAll('[data-node]');
        nodes.forEach(node => {
          node.addEventListener('mouseenter', () => {
            node.style.transform = 'scale(1.5)';
            node.style.filter = 'brightness(1.5)';
          });
          node.addEventListener('mouseleave', () => {
            node.style.transform = 'scale(1)';
            node.style.filter = 'brightness(1)';
          });
        });

        // Enhanced CTA section 3D effect
        const ctaSection = document.querySelector('[data-cta-3d]');
        if (ctaSection && !prefersReduced) {
          ctaSection.addEventListener('mousemove', (e) => {
            const rect = ctaSection.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
            ctaSection.style.transform = `perspective(1000px) rotateY(${x * 0.5}deg) rotateX(${-y * 0.5}deg)`;
          });
          ctaSection.addEventListener('mouseleave', () => {
            ctaSection.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
          });
        }
      });

      // Custom CSS animations for floating elements
      const style = document.createElement('style');
      style.textContent = `
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-10px) translateX(5px) rotate(120deg); }
          66% { transform: translateY(5px) translateX(-5px) rotate(240deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-15px) translateX(-8px) rotate(180deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-8px) translateX(8px) rotate(90deg); }
          50% { transform: translateY(-12px) translateX(-4px) rotate(180deg); }
          75% { transform: translateY(-4px) translateX(-8px) rotate(270deg); }
        }
        .perspective-1000 { perspective: 1000px; }
        .hover\\:rotateY-2:hover { transform: rotateY(2deg); }
        .scrollbar-thin { scrollbar-width: thin; }
        .scrollbar-track-transparent { scrollbar-color: transparent transparent; }
        .scrollbar-thumb-white\\/10 { scrollbar-color: rgba(255,255,255,0.1) transparent; }
      `;
      document.head.appendChild(style);
    
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
      

<div className="fixed inset-0 -z-50 overflow-hidden perspective-[1000px]">

<div className="absolute -inset-[30%] bg-[radial-gradient(80%_80%_at_70%_20%,rgba(0,240,255,0.15),transparent),radial-gradient(60%_70%_at_20%_80%,rgba(79,70,229,0.18),transparent),radial-gradient(40%_40%_at_50%_50%,rgba(0,240,255,0.12),transparent)] transform-gpu" data-parallax="0.03" style={{transform: 'translate3d(0px, -0.0135928px, 0px) rotateX(-0.000135928deg)', willChange: 'transform'}}></div>

<div className="pointer-events-none absolute inset-0 transform-gpu perspective-[800px]" data-parallax="0.12" style={{transform: 'translate3d(0px, -0.0499893px, 0px) rotateX(-0.000499893deg)', willChange: 'transform'}}>

<div className="absolute top-[10%] left-[5%] w-2 h-2 bg-cyan-400/90 rounded-full blur-[0.5px] animate-ping shadow-[0_0_25px_rgba(34,211,238,0.8)]" data-3d-depth="0.8" style={{transform: 'translate3d(-1.90816px, -7.98384px, 0px) rotateX(2.39515deg) rotateY(-0.572449deg)'}}></div>
<div className="absolute top-[18%] left-[25%] w-1.5 h-1.5 bg-cyan-300/80 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.6)]" data-3d-depth="0.6" style={{transform: 'translate3d(-1.43112px, -5.98788px, 0px) rotateX(1.79636deg) rotateY(-0.429337deg)'}}></div>
<div className="absolute top-[22%] right-[18%] w-2 h-2 bg-cyan-300/90 rounded-full blur-[0.5px] animate-pulse shadow-[0_0_30px_rgba(34,211,238,0.7)]" data-3d-depth="0.9" style={{transform: 'translate3d(-2.14668px, -8.98182px, 0px) rotateX(2.69455deg) rotateY(-0.644005deg)'}}></div>

<div className="absolute top-[48%] left-[12%] w-1 h-1 bg-cyan-200/70 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.5)]" data-3d-depth="0.4" style={{transform: 'translate3d(-0.954082px, -3.99192px, 0px) rotateX(1.19758deg) rotateY(-0.286224deg)'}}></div>
<div className="absolute top-[58%] left-[45%] w-1.5 h-1.5 bg-cyan-400/80 rounded-full animate-bounce shadow-[0_0_22px_rgba(34,211,238,0.6)]" data-3d-depth="0.7" style={{transform: 'translate3d(-1.66964px, -6.98586px, 0px) rotateX(2.09576deg) rotateY(-0.500893deg)'}}></div>

<div className="absolute bottom-[12%] left-[20%] w-1 h-1 bg-cyan-300/60 rounded-full blur-[0.5px] shadow-[0_0_12px_rgba(34,211,238,0.4)]" data-3d-depth="0.3" style={{transform: 'translate3d(-0.715561px, -2.99394px, 0px) rotateX(0.898182deg) rotateY(-0.214668deg)'}}></div>
<div className="absolute bottom-[18%] right-[25%] w-1 h-1 bg-cyan-200/50 rounded-full animate-ping shadow-[0_0_10px_rgba(34,211,238,0.3)]" data-3d-depth="0.2" style={{transform: 'translate3d(-0.477041px, -1.99596px, 0px) rotateX(0.598788deg) rotateY(-0.143112deg)'}}></div>
</div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30 transform-gpu" data-parallax="0.05" style={{transform: 'translate3d(0px, -0.0222318px, 0px) rotateX(-0.000222318deg)', transformOrigin: 'center bottom', willChange: 'transform'}}></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08)_1px,transparent_1px),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:120px_120px,140px_140px] opacity-50 mix-blend-screen bg-fixed transform-gpu" data-parallax="0.02" style={{transform: 'translate3d(0px, -0.00915055px, 0px) rotateX(-9.15055e-05deg)', willChange: 'transform'}}></div>
</div>

<header className="relative z-50">
<div className="mx-auto max-w-7xl px-6 pt-6">
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-2xl backdrop-saturate-150 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] ring-1 ring-white/[0.05] transition-all duration-700 ease-out transform-gpu opacity-100 translate-y-0 blur-0 hover:bg-white/[0.04] hover:border-white/20" data-reveal="" style={{transitionDelay: '80ms'}}>
<div className="flex items-center gap-3">
<div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-cyan-500/10 backdrop-blur-sm ring-1 ring-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
<span className="text-cyan-200 text-lg tracking-tight" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif'}}>NL</span>
</div>
<span className="text-slate-100/95 text-sm sm:text-base tracking-tight" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif'}}>NeuroLink OS</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-slate-300/80 hover:text-cyan-200 transition-all duration-300 hover:scale-105" href="#features">Features</a>
<a className="text-slate-300/80 hover:text-cyan-200 transition-all duration-300 hover:scale-105" href="#demo">Demo</a>
<a className="text-slate-300/80 hover:text-cyan-200 transition-all duration-300 hover:scale-105" href="#testimonials">Stories</a>
<a className="text-slate-300/80 hover:text-cyan-200 transition-all duration-300 hover:scale-105" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm px-4 py-2 text-sm text-slate-200 hover:border-cyan-400/40 hover:text-cyan-100 hover:bg-white/[0.05] transition-all duration-300 hover:scale-105" href="#pricing">Pricing</a>
<a className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-cyan-400/20 to-cyan-500/10 backdrop-blur-sm px-4 py-2 text-sm text-cyan-200 ring-1 ring-cyan-400/30 hover:from-cyan-400/25 hover:to-cyan-500/15 hover:ring-cyan-300/50 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.2)]" href="#cta">
<span>Request Access</span>
<svg className="h-4 w-4 stroke-cyan-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</header>

<section className="relative z-10">
<div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 lg:pb-40">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="relative">
<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-xl px-3 py-1.5 text-xs text-cyan-200/90 ring-1 ring-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-700 ease-out transform-gpu opacity-100 translate-y-0 blur-0 hover:bg-white/[0.06] hover:scale-105" data-reveal="" style={{transitionDelay: '40ms'}}>
<svg className="h-3.5 w-3.5 stroke-cyan-300 animate-pulse" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"></path>
</svg>
<span className="tracking-tight">AI-native enterprise OS</span>
</div>
<h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white transition-all duration-1000 ease-out transform-gpu opacity-100 translate-y-0 blur-0" data-reveal="" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', fontWeight: '600', transitionDelay: '100ms', textShadow: '0 0 40px rgba(34,211,238,0.1)'}}>
              Work Beyond Human Limits.
            </h1>
<p className="mt-4 max-w-xl text-slate-300/95 text-base sm:text-lg transition-all duration-1000 ease-out transform-gpu opacity-100 translate-y-0 blur-0" data-reveal="" style={{transitionDelay: '160ms'}}>
              NeuroLink OS is the first operating system where humans and AI collaborate seamlessly.
            </p>
<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-1000 ease-out transform-gpu opacity-100 translate-y-0 blur-0" data-reveal="" style={{transitionDelay: '220ms'}}>
<a className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-cyan-500/25 to-cyan-400/15 backdrop-blur-sm px-6 py-3 text-cyan-100 ring-1 ring-cyan-400/50 hover:from-cyan-500/30 hover:to-cyan-400/20 hover:ring-cyan-300/70 transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.2)] hover:shadow-[0_0_50px_rgba(34,211,238,0.3)] hover:scale-105" href="#cta">
<span className="text-base">Request Early Access</span>
<svg className="h-5 w-5 stroke-cyan-100 transition-transform group-hover:translate-x-1" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"></path>
</svg>
</a>
<a className="inline-flex items-center gap-2 text-slate-300/80 hover:text-cyan-100 transition-all duration-300 hover:scale-105" href="#demo">
<span className="underline decoration-cyan-400/40 decoration-2 underline-offset-4">Watch the demo</span>
<svg className="h-4 w-4 stroke-cyan-200" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 6v12l10-6z"></path>
</svg>
</a>
</div>
</div>

<div className="relative h-[440px] sm:h-[520px] lg:h-[560px] transition-all duration-1000 ease-out transform-gpu opacity-100 translate-y-0 blur-0 perspective-[1000px]" data-reveal="" style={{transitionDelay: '180ms'}}>
<div className="absolute inset-0 animate-pulse bg-gradient-to-b from-cyan-500/15 to-indigo-600/10 rounded-3xl blur-3xl" id="aura-emek9vmso"></div>

<div className="absolute inset-0 grid place-items-center transform-gpu" data-scroll-rotate="" id="aura-emek9vvt2">
<div className="relative h-[380px] w-[380px] sm:h-[440px] sm:w-[440px] hover:scale-105 transition-transform duration-700">
<div className="absolute inset-0 rounded-full bg-cyan-400/15 blur-3xl animate-pulse"></div>

<svg className="absolute inset-0 m-auto h-full w-full animate-spin hover:animate-none transition-all duration-500" fill="none" style={{animationDuration: '20s'}} viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<defs>
</defs>

<circle cx="100" cy="100" filter="url(#glow)" opacity="0.7" r="85" stroke="url(#wireGrad)" strokeWidth="0.8"></circle>
<circle cx="100" cy="100" opacity="0.6" r="80" stroke="#67e8f9" strokeWidth="0.6"></circle>

<ellipse cx="100" cy="100" filter="url(#glow)" opacity="0.5" rx="76" ry="20" stroke="url(#wireGrad)" strokeWidth="0.6"></ellipse>
<ellipse cx="100" cy="100" opacity="0.4" rx="68" ry="35" stroke="#67e8f9" strokeWidth="0.5"></ellipse>
<ellipse cx="100" cy="100" opacity="0.3" rx="55" ry="48" stroke="#67e8f9" strokeWidth="0.5"></ellipse>
<ellipse cx="100" cy="100" opacity="0.25" rx="35" ry="62" stroke="#67e8f9" strokeWidth="0.4"></ellipse>

<path d="M100 15c25 0 40 38 40 85s-15 85-40 85" filter="url(#glow)" opacity="0.4" stroke="url(#wireGrad)" strokeWidth="0.6"></path>
<path d="M100 15c-25 0-40 38-40 85s15 85 40 85" opacity="0.35" stroke="#67e8f9" strokeWidth="0.5"></path>
<path d="M100 20c15 0 25 36 25 80s-10 80-25 80" opacity="0.3" stroke="#67e8f9" strokeWidth="0.4"></path>
<path d="M100 20c-15 0-25 36-25 80s10 80 25 80" opacity="0.3" stroke="#67e8f9" strokeWidth="0.4"></path>
</svg>

<svg className="absolute inset-0 m-auto h-full w-full animate-spin" fill="none" style={{animationDuration: '15s', animationDirection: 'reverse'}} viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<circle cx="100" cy="100" opacity="0.3" r="92" stroke="#22d3ee" stroke-dasharray="5,10" strokeWidth="0.3"></circle>
<circle cx="100" cy="100" opacity="0.25" r="65" stroke="#0891b2" stroke-dasharray="8,15" strokeWidth="0.3"></circle>
</svg>

<div className="absolute inset-0 animate-spin" style={{animationDuration: '25s'}}>
<div className="absolute left-1/2 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-300 to-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.9)] hover:shadow-[0_0_35px_rgba(34,211,238,1)] transition-all duration-300 hover:scale-125 cursor-pointer"></div>
<div className="absolute right-4 top-1/3 h-2 w-2 rounded-full bg-gradient-to-br from-cyan-200 to-cyan-300 animate-ping shadow-[0_0_20px_rgba(34,211,238,0.7)]"></div>
<div className="absolute left-6 bottom-1/3 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan-200 to-cyan-400 animate-pulse shadow-[0_0_22px_rgba(34,211,238,0.8)] hover:scale-125 transition-transform cursor-pointer"></div>
<div className="absolute bottom-8 right-1/3 h-2 w-2 rounded-full bg-gradient-to-br from-indigo-300 to-cyan-300 animate-bounce shadow-[0_0_18px_rgba(79,70,229,0.6)]"></div>
</div>
</div>
</div>

<div className="absolute -bottom-4 right-2 flex flex-col gap-3" id="aura-emek9v8xo">
<div className="backdrop-saturate-150 ring-1 ring-white/[0.15] hover:ring-cyan-400/40 hover:bg-white/[0.12] transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(34,211,238,0.15)] hover:scale-105 cursor-pointer border-white/10 border rounded-2xl pt-3 pr-4 pb-3 pl-4 backdrop-blur-2xl" id="aura-emek9voq1">
<div className="flex gap-2 text-xs text-slate-200/95 items-center">
<svg className="h-4 w-4 stroke-cyan-300 animate-pulse" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 8V4m-7 8h14M5 8h14v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8Z"></path><path d="M8 13h.01M16 13h.01"></path>
</svg>
      Live AI co-pilot active
    </div>
<div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-full animate-pulse"></div>
</div>
</div>
<div className="ring-1 ring-white/10 hover:ring-cyan-400/30 transition-all duration-300 hover:scale-105 cursor-pointer rounded-2xl pt-2 pr-3 pb-2 pl-3 backdrop-blur-xl">
<div className="flex items-center gap-2 text-[10px] text-cyan-200/80">
<div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping"></div>
      Neural sync: 98.7%
    </div>
</div>
</div>
</div>
</div>
</div>
<div className="mx-auto max-w-7xl px-6">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
</div>
</section>

<section className="relative z-10" id="features">
<div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
<div className="mb-10 flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight text-white opacity-0 translate-y-6 blur-sm transition-all duration-1000 ease-out transform-gpu" data-reveal="" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', fontWeight: '600', transitionDelay: '0ms', textShadow: '0 0 30px rgba(34,211,238,0.1)'}}>
              Core Systems
            </h2>
<p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base opacity-0 translate-y-6 blur-sm transition-all duration-1000 ease-out transform-gpu" data-reveal="" style={{transitionDelay: '80ms'}}>
              A neural substrate for collaboration, automation, and security at planetary scale.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-[1000px]">

<div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-2xl backdrop-saturate-150 p-6 ring-1 ring-white/[0.08] hover:bg-white/[0.08] hover:ring-cyan-400/40 hover:border-white/25 transition-all duration-500 opacity-0 translate-y-6 blur-sm transform-gpu hover:scale-105 hover:rotateY-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]" data-reveal="" style={{transitionDelay: '0ms', transformStyle: 'preserve-3d'}}>
<div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-400/15 to-cyan-500/10 blur-3xl group-hover:from-cyan-400/25 group-hover:to-cyan-500/15 transition-all duration-500"></div>
<div className="relative z-10">
<div className="flex items-center gap-3">
<div className="p-2 rounded-xl bg-gradient-to-br from-cyan-400/20 to-cyan-500/10 backdrop-blur-sm ring-1 ring-cyan-400/30">
<svg className="h-6 w-6 stroke-cyan-300" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8a3 3 0 0 0-6 0v.5A2.5 2.5 0 0 0 5 14v0a3 3 0 0 0 3 3h1"></path>
<path d="M12 8a3 3 0 0 1 6 0v.5A2.5 2.5 0 0 1 19 14v0a3 3 0 0 1-3 3h-1"></path>
<path d="M12 7v14"></path>
</svg>
</div>
<h3 className="text-lg tracking-tight text-white" style={{fontWeight: '600'}}>Neural Collaboration</h3>
</div>
<p className="mt-3 text-sm text-slate-300/95">
                Real-time AI assistants woven into your workflows, augmenting teams with instant context and action.
              </p>
<div className="mt-6 flex items-center gap-2 text-cyan-200 text-sm group-hover:text-cyan-100 transition-colors">
<span>Explore</span>
<svg className="h-4 w-4 stroke-cyan-200 transition-all duration-300 group-hover:translate-x-1 group-hover:stroke-cyan-100" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-2xl backdrop-saturate-150 p-6 ring-1 ring-white/[0.08] hover:bg-white/[0.08] hover:ring-cyan-400/40 hover:border-white/25 transition-all duration-500 opacity-0 translate-y-6 blur-sm transform-gpu hover:scale-105 hover:rotateY-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgba(79,70,229,0.15)]" data-reveal="" style={{transitionDelay: '80ms', transformStyle: 'preserve-3d'}}>
<div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/15 to-purple-500/10 blur-3xl group-hover:from-indigo-500/25 group-hover:to-purple-500/15 transition-all duration-500"></div>
<div className="relative z-10">
<div className="flex items-center gap-3">
<div className="p-2 rounded-xl bg-gradient-to-br from-indigo-400/20 to-purple-500/10 backdrop-blur-sm ring-1 ring-indigo-400/30">
<svg className="h-6 w-6 stroke-indigo-300" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"></path>
</svg>
</div>
<h3 className="text-lg tracking-tight text-white" style={{fontWeight: '600'}}>Predictive Automation</h3>
</div>
<p className="mt-3 text-sm text-slate-300/95">
                Tasks executed before you even think about them—anticipatory systems that learn and act.
              </p>
<div className="mt-6 flex items-center gap-2 text-indigo-200 text-sm group-hover:text-indigo-100 transition-colors">
<span>Explore</span>
<svg className="h-4 w-4 stroke-indigo-200 transition-all duration-300 group-hover:translate-x-1 group-hover:stroke-indigo-100" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-2xl backdrop-saturate-150 p-6 ring-1 ring-white/[0.08] hover:bg-white/[0.08] hover:ring-cyan-400/40 hover:border-white/25 transition-all duration-500 opacity-0 translate-y-6 blur-sm transform-gpu hover:scale-105 hover:rotateY-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]" data-reveal="" style={{transitionDelay: '160ms', transformStyle: 'preserve-3d'}}>
<div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-400/15 to-blue-500/10 blur-3xl group-hover:from-cyan-400/25 group-hover:to-blue-500/15 transition-all duration-500"></div>
<div className="relative z-10">
<div className="flex items-center gap-3">
<div className="p-2 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/10 backdrop-blur-sm ring-1 ring-cyan-400/30">
<svg className="h-6 w-6 stroke-cyan-300" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
</div>
<h3 className="text-lg tracking-tight text-white" style={{fontWeight: '600'}}>Quantum Security</h3>
</div>
<p className="mt-3 text-sm text-slate-300/95">
                Unbreakable, AI-driven encryption with post-quantum readiness built-in.
              </p>
<div className="mt-6 flex items-center gap-2 text-cyan-200 text-sm group-hover:text-cyan-100 transition-colors">
<span>Explore</span>
<svg className="h-4 w-4 stroke-cyan-200 transition-all duration-300 group-hover:translate-x-1 group-hover:stroke-cyan-100" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
<div className="mx-auto max-w-7xl px-6">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
</div>
</section>

<section className="relative z-10" id="demo">
<div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
<div className="mb-8 flex items-center justify-between">
<h2 className="text-2xl sm:text-3xl tracking-tight text-white opacity-0 translate-y-6 blur-sm transition-all duration-1000 ease-out transform-gpu" data-reveal="" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', fontWeight: '600', transitionDelay: '0ms', textShadow: '0 0 30px rgba(34,211,238,0.1)'}}>
            Adaptive Workflow Demo
          </h2>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
<span className="text-xs text-green-300/90 rounded-full border border-green-400/30 px-3 py-1 bg-green-400/10 backdrop-blur-sm">Live Preview</span>
</div>
</div>
<div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.02] backdrop-blur-3xl backdrop-saturate-200 ring-1 ring-white/[0.08] opacity-0 translate-y-6 blur-sm transition-all duration-1000 ease-out transform-gpu shadow-[0_20px_80px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_100px_rgba(34,211,238,0.1)]" data-reveal="" style={{transitionDelay: '80ms'}}>

<div className="absolute left-4 top-4 z-10">
<div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-cyan-400/10 backdrop-blur-xl px-4 py-2 text-xs text-cyan-200 ring-1 ring-cyan-400/30 border border-white/10 opacity-0 translate-y-6 blur-sm transition-all duration-1000 ease-out transform-gpu shadow-[0_0_30px_rgba(34,211,238,0.2)]" data-reveal="" style={{transitionDelay: '140ms'}}>
<svg className="h-3.5 w-3.5 stroke-cyan-300 animate-pulse" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3 6 12H2"></path></svg>
              Neural adaptation in progress...
              <div className="h-1 w-16 bg-white/10 rounded-full overflow-hidden ml-2">
<div className="h-full w-3/4 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-full animate-pulse"></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4">

<aside className="col-span-1 border-r border-white/15 bg-white/[0.02] backdrop-blur-xl p-4 lg:p-6 opacity-0 translate-y-6 blur-sm transition-all duration-1000 ease-out transform-gpu" data-reveal="" style={{transitionDelay: '120ms'}}>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded-xl bg-gradient-to-br from-cyan-400/20 to-cyan-500/10 backdrop-blur-sm ring-1 ring-cyan-400/30">
<svg className="h-5 w-5 stroke-cyan-300" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4m0 12v4M2 12h4m12 0h4M7 7l3 3m4 4 3 3m0-10-3 3m-4 4-3 3"></path></svg>
</div>
<span className="text-sm text-slate-300">Neural Workflows</span>
</div>
<ul className="space-y-3">
<li className="group flex items-center justify-between rounded-2xl px-4 py-3 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm ring-1 ring-white/15 border border-white/10 hover:ring-cyan-400/40 hover:from-cyan-400/10 hover:to-cyan-500/[0.02] transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
<span className="text-sm text-slate-200">Sales Intel AI</span>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
<span className="text-[10px] text-green-300/90 bg-green-400/10 px-2 py-1 rounded-full">Auto</span>
</div>
</li>
<li className="group flex items-center justify-between rounded-2xl px-4 py-3 backdrop-blur-sm hover:bg-white/[0.04] hover:ring-1 hover:ring-white/10 transition-all duration-300 hover:scale-105">
<span className="text-sm text-slate-300/90">Incident Triage</span>
<span className="text-[10px] text-slate-400 bg-slate-500/10 px-2 py-1 rounded-full">Manual</span>
</li>
<li className="group flex items-center justify-between rounded-2xl px-4 py-3 backdrop-blur-sm hover:bg-white/[0.04] hover:ring-1 hover:ring-white/10 transition-all duration-300 hover:scale-105">
<span className="text-sm text-slate-300/90">Supply Chain Sync</span>
<span className="text-[10px] text-slate-400 bg-slate-500/10 px-2 py-1 rounded-full">Manual</span>
</li>
<li className="group flex items-center justify-between rounded-2xl px-4 py-3 backdrop-blur-sm hover:bg-white/[0.04] hover:ring-1 hover:ring-white/10 transition-all duration-300 hover:scale-105">
<span className="text-sm text-slate-300/90">Research Brief</span>
<span className="text-[10px] text-slate-400 bg-slate-500/10 px-2 py-1 rounded-full">Manual</span>
</li>
</ul>
<div className="mt-8 rounded-2xl bg-gradient-to-br from-cyan-400/15 to-cyan-500/5 backdrop-blur-xl p-4 ring-1 ring-cyan-400/30 border border-white/10 shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] transition-all duration-300">
<div className="flex items-center gap-2 text-xs text-cyan-100 mb-3">
<svg className="h-4 w-4 stroke-cyan-200 animate-spin" fill="none" strokeWidth="1.5" style={{animationDuration: '3s'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"></path></svg>
                  Neural Adaptation Active
                </div>
<div className="space-y-2">
<div className="h-1.5 w-full overflow-hidden rounded-full bg-cyan-500/20">
<div className="h-full w-4/5 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-200 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
</div>
<div className="text-[10px] text-cyan-200/80">Learning patterns: 847 interactions</div>
</div>
</div>
</aside>

<div className="col-span-3 p-4 lg:p-8 opacity-0 translate-y-6 blur-sm transition-all duration-1000 ease-out transform-gpu" data-reveal="" style={{transitionDelay: '160ms'}}>

<div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4 mb-8">
<div className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-4 opacity-0 translate-y-6 blur-sm transition-all duration-1000 ease-out transform-gpu hover:scale-105 hover:from-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.1)]" data-reveal="" style={{transitionDelay: '0ms'}}>
<p className="text-xs text-slate-400 mb-2">Productivity Gain</p>
<p className="text-2xl tracking-tight text-white mb-3" style={{fontFamily: 'Space Grotesk', fontWeight: '600', textShadow: '0 0 20px rgba(34,211,238,0.3)'}}>+212%</p>
<div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-4/5 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.5)] animate-pulse"></div>
</div>
</div>
<div className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-4 opacity-0 translate-y-6 blur-sm transition-all duration-1000 ease-out transform-gpu hover:scale-105 hover:from-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.1)]" data-reveal="" style={{transitionDelay: '80ms'}}>
<p className="text-xs text-slate-400 mb-2">Tasks Automated</p>
<p className="text-2xl tracking-tight text-white mb-3" style={{fontFamily: 'Space Grotesk', fontWeight: '600', textShadow: '0 0 20px rgba(79,70,229,0.3)'}}>78%</p>
<div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-3/4 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 shadow-[0_0_10px_rgba(79,70,229,0.5)] animate-pulse"></div>
</div>
</div>
<div className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-4 opacity-0 translate-y-6 blur-sm transition-all duration-1000 ease-out transform-gpu hover:scale-105 hover:from-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.1)]" data-reveal="" style={{transitionDelay: '160ms'}}>
<p className="text-xs text-slate-400 mb-2">Incidents Reduced</p>
<p className="text-2xl tracking-tight text-white mb-3" style={{fontFamily: 'Space Grotesk', fontWeight: '600', textShadow: '0 0 20px rgba(16,185,129,0.3)'}}>-64%</p>
<div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-2/5 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse"></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="col-span-2 rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.01] backdrop-blur-2xl p-6 opacity-0 translate-y-6 blur-sm transition-all duration-1000 ease-out transform-gpu shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_80px_rgba(34,211,238,0.1)]" data-reveal="" style={{transitionDelay: '0ms'}}>
<div className="flex items-center justify-between mb-6">
<p className="text-sm text-slate-300">Neural Workflow Visualization</p>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
<span className="text-xs text-cyan-200/90">Real-time adaptation</span>
</div>
</div>
<div className="relative h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/20 backdrop-blur-sm">

<div className="absolute left-8 top-12 h-3 w-3 rounded-full bg-gradient-to-br from-cyan-300 to-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] animate-pulse hover:scale-125 transition-transform cursor-pointer" data-node="input"></div>
<div className="absolute left-1/3 top-1/3 h-3 w-3 rounded-full bg-gradient-to-br from-indigo-300 to-purple-400 shadow-[0_0_20px_rgba(79,70,229,0.8)] animate-pulse hover:scale-125 transition-transform cursor-pointer" data-node="process"></div>
<div className="absolute right-16 top-16 h-3 w-3 rounded-full bg-gradient-to-br from-green-300 to-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.8)] animate-pulse hover:scale-125 transition-transform cursor-pointer" data-node="output"></div>
<div className="absolute right-1/4 bottom-8 h-3 w-3 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 shadow-[0_0_20px_rgba(245,158,11,0.8)] animate-pulse hover:scale-125 transition-transform cursor-pointer" data-node="feedback"></div>

<svg className="absolute inset-0 w-full h-full" fill="none" viewbox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<defs>
</defs>
<path d="M50 60 Q200 30, 300 100 T560 50" filter="url(#connectionGlow)" opacity="0.8" stroke="url(#connectionGrad)" strokeWidth="2">
<animate attributename="stroke-dasharray" dur="4s" repeatcount="indefinite" values="0,1000;1000,0;0,1000"></animate>
</path>
<path d="M80 160 Q220 220, 340 140 T520 220" filter="url(#connectionGlow)" opacity="0.8" stroke="url(#connectionGrad)" strokeWidth="2">
<animate attributename="stroke-dasharray" dur="3s" repeatcount="indefinite" values="1000,0;0,1000;1000,0"></animate>
</path>
<path d="M200 80 Q300 50, 460 80" filter="url(#connectionGlow)" opacity="0.8" stroke="url(#connectionGrad)" strokeWidth="2">
<animate attributename="stroke-dasharray" dur="2.5s" repeatcount="indefinite" values="0,500;500,0;0,500"></animate>
</path>
</svg>

<div className="absolute top-20 left-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
<div className="absolute top-32 left-40 w-1 h-1 bg-indigo-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
<div className="absolute bottom-20 right-20 w-1 h-1 bg-green-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
</div>
</div>
<div className="rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.01] backdrop-blur-2xl p-6 opacity-0 translate-y-6 blur-sm transition-all duration-1000 ease-out transform-gpu shadow-[0_20px_60px_rgba(0,0,0,0.15)]" data-reveal="" style={{transitionDelay: '80ms'}}>
<div className="flex items-center justify-between mb-6">
<p className="text-sm text-slate-300">AI Assistant Actions</p>
<span className="text-[10px] text-slate-400 bg-slate-500/10 px-2 py-1 rounded-full">0.18s avg</span>
</div>
<div className="space-y-3 max-h-48 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.08] to-white/[0.02] backdrop-blur-sm px-3 py-3 hover:from-white/[0.12] transition-all duration-300 hover:scale-105">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
<span className="text-sm text-slate-200">Summarized 48 emails</span>
</div>
<span className="text-[10px] text-green-300/90 bg-green-400/10 px-2 py-1 rounded-full">Auto</span>
</div>
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.08] to-white/[0.02] backdrop-blur-sm px-3 py-3 hover:from-white/[0.12] transition-all duration-300 hover:scale-105">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>
<span className="text-sm text-slate-200">Routed P1 incident</span>
</div>
<span className="text-[10px] text-cyan-300/90 bg-cyan-400/10 px-2 py-1 rounded-full">Auto</span>
</div>
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.08] to-white/[0.02] backdrop-blur-sm px-3 py-3 hover:from-white/[0.12] transition-all duration-300 hover:scale-105">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></div>
<span className="text-sm text-slate-200">Generated QBR brief</span>
</div>
<span className="text-[10px] text-indigo-300/90 bg-indigo-400/10 px-2 py-1 rounded-full">Auto</span>
</div>
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.08] to-white/[0.02] backdrop-blur-sm px-3 py-3 hover:from-white/[0.12] transition-all duration-300 hover:scale-105">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-purple-400 animate-pulse"></div>
<span className="text-sm text-slate-200">Synced supplier ETA</span>
</div>
<span className="text-[10px] text-purple-300/90 bg-purple-400/10 px-2 py-1 rounded-full">Auto</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-6 text-center">
<p className="text-xs text-slate-500">Interactive demo with real-time neural adaptation simulation</p>
</div>
</div>
</div>
<div className="mx-auto max-w-7xl px-6">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
</div>
</section>

<section className="relative z-10" id="testimonials">
<div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
<div className="mb-10">
<h2 className="text-2xl sm:text-3xl tracking-tight text-white opacity-0 translate-y-6 blur-sm transition-all duration-1000 ease-out transform-gpu" data-reveal="" style={{fontFamily: 'Space Grotesk', fontWeight: '600', transitionDelay: '0ms', textShadow: '0 0 30px rgba(34,211,238,0.1)'}}>Trusted by pioneers</h2>
<p className="mt-2 text-slate-400 text-sm sm:text-base opacity-0 translate-y-6 blur-sm transition-all duration-1000 ease-out transform-gpu" data-reveal="" style={{transitionDelay: '80ms'}}>From research labs to global networks, teams elevate output with NeuroLink.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-3xl ring-1 ring-cyan-400/20 border border-white/15 bg-white/[0.03] backdrop-blur-2xl backdrop-saturate-150 p-6 hover:ring-cyan-400/40 hover:bg-white/[0.06] transition-all duration-500 opacity-0 translate-y-6 blur-sm transform-gpu hover:scale-105 shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_80px_rgba(34,211,238,0.15)]" data-reveal="" style={{transitionDelay: '0ms'}}>
<div className="absolute inset-0 opacity-30 bg-gradient-to-br from-cyan-400/25 to-indigo-600/15"></div>
<div className="relative flex items-center gap-3 mb-4">
<img alt="Founder portrait" className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20 shadow-[0_0_20px_rgba(34,211,238,0.3)]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<p className="text-sm text-white font-medium">Ari K.</p>
<p className="text-xs text-slate-400">Founder, NeuralForge</p>
</div>
</div>
<p className="relative text-slate-300 text-sm leading-relaxed">
              "Our org-wide productivity tripled in 6 weeks. It feels like the system anticipates every move."
            </p>
</div>
<div className="group relative overflow-hidden rounded-3xl ring-1 ring-cyan-400/20 border border-white/15 bg-white/[0.03] backdrop-blur-2xl backdrop-saturate-150 p-6 hover:ring-cyan-400/40 hover:bg-white/[0.06] transition-all duration-500 opacity-0 translate-y-6 blur-sm transform-gpu hover:scale-105 shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_80px_rgba(79,70,229,0.15)]" data-reveal="" style={{transitionDelay: '80ms'}}>
<div className="absolute inset-0 opacity-30 bg-gradient-to-br from-indigo-400/25 to-purple-600/15"></div>
<div className="relative flex items-center gap-3 mb-4">
<img alt="Researcher portrait" className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20 shadow-[0_0_20px_rgba(79,70,229,0.3)]" src="https://images.unsplash.com/photo-1616531770192-6eaea74c2456?q=80&amp;w=720&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-white font-medium">Dr. Mina S.</p>
<p className="text-xs text-slate-400">AI Research Lead</p>
</div>
</div>
<p className="relative text-slate-300 text-sm leading-relaxed">
              "NeuroLink merges human intent with machine precision. It's the missing layer we've been searching for."
            </p>
</div>
<div className="group relative overflow-hidden rounded-3xl ring-1 ring-cyan-400/20 border border-white/15 bg-white/[0.03] backdrop-blur-2xl backdrop-saturate-150 p-6 hover:ring-cyan-400/40 hover:bg-white/[0.06] transition-all duration-500 opacity-0 translate-y-6 blur-sm transform-gpu hover:scale-105 shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_80px_rgba(34,211,238,0.15)]" data-reveal="" style={{transitionDelay: '160ms'}}>
<div className="absolute inset-0 opacity-30 bg-gradient-to-br from-cyan-400/25 to-blue-600/15"></div>
<div className="relative flex items-center gap-3 mb-4">
<img alt="CTO portrait" className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20 shadow-[0_0_20px_rgba(34,211,238,0.3)]" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=720&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-white font-medium">Jun R.</p>
<p className="text-xs text-slate-400">CTO, Orbital Cloud</p>
</div>
</div>
<p className="relative text-slate-300 text-sm leading-relaxed">
              "Security and speed without compromise. This is how enterprises will operate in the next decade."
            </p>
</div>
</div>
</div>
<div className="mx-auto max-w-7xl px-6">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
</div>
</section>

<section className="relative z-10" id="pricing">
<div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
<div className="mb-10 text-center">
<h2 className="text-2xl sm:text-3xl tracking-tight text-white opacity-0 translate-y-6 blur-sm transition-all duration-1000 ease-out transform-gpu" data-reveal="" style={{fontFamily: 'Space Grotesk', fontWeight: '600', transitionDelay: '0ms', textShadow: '0 0 30px rgba(34,211,238,0.1)'}}>Choose your trajectory</h2>
<p className="mt-2 text-slate-400 text-sm sm:text-base opacity-0 translate-y-6 blur-sm transition-all duration-1000 ease-out transform-gpu" data-reveal="" style={{transitionDelay: '80ms'}}>Simple, scalable tiers with enterprise foundations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-[1000px]">

<div className="relative rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-2xl backdrop-saturate-150 p-6 ring-1 ring-white/[0.08] hover:ring-cyan-400/40 hover:bg-white/[0.06] transition-all duration-500 opacity-0 translate-y-6 blur-sm transform-gpu hover:scale-105 hover:rotateY-2 shadow-[0_20px_60px_rgba(0,0,0,0.15)]" data-reveal="" style={{transitionDelay: '0ms', transformStyle: 'preserve-3d'}}>
<div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
<div className="relative">
<h3 className="text-lg tracking-tight text-white mb-2" style={{fontWeight: '600'}}>Starter</h3>
<p className="text-sm text-slate-400 mb-6">Teams exploring AI-native workflows.</p>
<div className="mb-6">
<div className="flex items-baseline gap-1 mb-4">
<span className="text-3xl tracking-tight text-white" style={{fontFamily: 'Space Grotesk', fontWeight: '600', textShadow: '0 0 20px rgba(34,211,238,0.2)'}}>$49</span>
<span className="text-xs text-slate-400">/user/month</span>
</div>
<ul className="space-y-3 text-sm text-slate-300/95">
<li className="flex items-center gap-3">
<svg className="h-4 w-4 stroke-cyan-300 flex-shrink-0" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11L4 12"></path></svg>
                    Core AI assistants &amp; workflow integration
                  </li>
<li className="flex items-center gap-3">
<svg className="h-4 w-4 stroke-cyan-300 flex-shrink-0" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11L4 12"></path></svg>
                    Standard automation templates
                  </li>
<li className="flex items-center gap-3">
<svg className="h-4 w-4 stroke-cyan-300 flex-shrink-0" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11L4 12"></path></svg>
                    Basic security &amp; compliance suite
                  </li>
</ul>
</div>
<a className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm px-4 py-3 text-sm text-slate-200 hover:text-cyan-100 hover:border-cyan-400/40 hover:bg-white/[0.08] transition-all duration-300 hover:scale-105" href="#cta">
                Claim Your Future
              </a>
</div>
</div>

<div className="relative rounded-3xl border border-cyan-400/40 bg-gradient-to-br from-cyan-500/15 to-cyan-400/5 backdrop-blur-2xl backdrop-saturate-150 p-6 ring-1 ring-cyan-400/30 shadow-[0_0_60px_rgba(34,211,238,0.2)] opacity-0 translate-y-6 blur-sm transition-all duration-500 transform-gpu hover:scale-105 hover:rotateY-2 hover:shadow-[0_0_80px_rgba(34,211,238,0.25)]" data-reveal="" style={{transitionDelay: '80ms', transformStyle: 'preserve-3d'}}>
<div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-cyan-400/30 to-cyan-500/20 backdrop-blur-sm px-3 py-1 text-[10px] text-cyan-100 ring-1 ring-cyan-400/40 border border-white/20">Most Popular</div>
<div className="relative">
<h3 className="text-lg tracking-tight text-white mb-2" style={{fontWeight: '600'}}>Enterprise</h3>
<p className="text-sm text-cyan-100/90 mb-6">Scale across divisions with full governance.</p>
<div className="mb-6">
<div className="flex items-baseline gap-1 mb-4">
<span className="text-3xl tracking-tight text-white" style={{fontFamily: 'Space Grotesk', fontWeight: '600', textShadow: '0 0 20px rgba(34,211,238,0.3)'}}>$149</span>
<span className="text-xs text-cyan-100/80">/user/month</span>
</div>
<ul className="space-y-3 text-sm text-cyan-100/95">
<li className="flex items-center gap-3">
<svg className="h-4 w-4 stroke-cyan-200 flex-shrink-0" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11L4 12"></path></svg>
                    Advanced assistants &amp; neural orchestration
                  </li>
<li className="flex items-center gap-3">
<svg className="h-4 w-4 stroke-cyan-200 flex-shrink-0" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11L4 12"></path></svg>
                    Predictive automation engine
                  </li>
<li className="flex items-center gap-3">
<svg className="h-4 w-4 stroke-cyan-200 flex-shrink-0" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11L4 12"></path></svg>
                    Enterprise governance, SSO &amp; audit trails
                  </li>
</ul>
</div>
<a className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500/25 to-cyan-400/15 backdrop-blur-sm px-4 py-3 text-sm text-cyan-100 ring-1 ring-cyan-400/40 hover:from-cyan-500/30 hover:to-cyan-400/20 hover:ring-cyan-300/60 transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(34,211,238,0.2)]" href="#cta">
                Claim Your Future
              </a>
</div>
</div>

<div className="relative rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-2xl backdrop-saturate-150 p-6 ring-1 ring-white/[0.08] hover:ring-cyan-400/40 hover:bg-white/[0.06] transition-all duration-500 opacity-0 translate-y-6 blur-sm transform-gpu hover:scale-105 hover:rotateY-2 shadow-[0_20px_60px_rgba(0,0,0,0.15)]" data-reveal="" style={{transitionDelay: '160ms', transformStyle: 'preserve-3d'}}>
<div className="relative">
<h3 className="text-lg tracking-tight text-white mb-2" style={{fontWeight: '600'}}>Quantum</h3>
<p className="text-sm text-slate-400 mb-6">Maximum assurance, zero-compromise performance.</p>
<div className="mb-6">
<div className="flex items-baseline gap-1 mb-4">
<span className="text-3xl tracking-tight text-white" style={{fontFamily: 'Space Grotesk', fontWeight: '600', textShadow: '0 0 20px rgba(34,211,238,0.2)'}}>Contact</span>
</div>
<ul className="space-y-3 text-sm text-slate-300/95">
<li className="flex items-center gap-3">
<svg className="h-4 w-4 stroke-cyan-300 flex-shrink-0" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11L4 12"></path></svg>
                    Post‑quantum cryptography implementation
                  </li>
<li className="flex items-center gap-3">
<svg className="h-4 w-4 stroke-cyan-300 flex-shrink-0" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11L4 12"></path></svg>
                    Air‑gap deployment &amp; custom infrastructure
                  </li>
<li className="flex items-center gap-3">
<svg className="h-4 w-4 stroke-cyan-300 flex-shrink-0" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11L4 12"></path></svg>
                    Hardware security modules &amp; trust roots
                  </li>
</ul>
</div>
<a className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm px-4 py-3 text-sm text-slate-200 hover:text-cyan-100 hover:border-cyan-400/40 hover:bg-white/[0.08] transition-all duration-300 hover:scale-105" href="#cta">
                Claim Your Future
              </a>
</div>
</div>
</div>
</div>
<div className="mx-auto max-w-7xl px-6">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
</div>
</section>

<section className="relative z-10" id="cta">
<div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28 overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-3xl backdrop-saturate-200 shadow-[0_40px_120px_rgba(0,0,0,0.25)]" data-cta-3d="">

<div className="pointer-events-none absolute -inset-4 bg-[radial-gradient(40%_50%_at_30%_30%,rgba(34,211,238,0.15),transparent),radial-gradient(30%_40%_at_80%_60%,rgba(99,102,241,0.15),transparent),radial-gradient(20%_30%_at_50%_80%,rgba(34,211,238,0.12),transparent)] blur-3xl transform-gpu" data-parallax="0.08" style={{transform: 'translate3d(0px, -232.088px, 0px) rotateX(-2deg)', willChange: 'transform'}}></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.08)_1px,transparent_1px),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06)_1px,transparent_1px),radial-gradient(circle_at_40%_90%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:140px_140px,160px_160px,120px_120px] opacity-50 bg-fixed transform-gpu" data-parallax="0.04" style={{transform: 'translate3d(0px, -120.453px, 0px) rotateX(-1.20453deg)', willChange: 'transform'}}></div>

<div className="absolute top-10 left-10 w-2 h-2 bg-gradient-to-br from-cyan-300 to-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)] animate-float-1"></div>
<div className="absolute top-20 right-16 w-1.5 h-1.5 bg-gradient-to-br from-indigo-300 to-purple-400 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.6)] animate-float-2"></div>
<div className="absolute bottom-16 left-20 w-2.5 h-2.5 bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-full shadow-[0_0_25px_rgba(34,211,238,0.7)] animate-float-3"></div>
<div className="relative text-center opacity-0 translate-y-6 blur-sm transition-all duration-1000 ease-out transform-gpu" data-reveal="" style={{transitionDelay: '0ms'}}>
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-4" style={{fontFamily: 'Space Grotesk', fontWeight: '600', textShadow: '0 0 40px rgba(34,211,238,0.2)'}}>
            Step Into Tomorrow.
          </h2>
<p className="text-slate-300/95 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg mb-8 leading-relaxed">
            Orchestrate your enterprise with seamless human–AI synergy, quantum-grade security, and planetary-scale automation.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500/25 to-cyan-400/15 backdrop-blur-xl px-8 py-4 text-cyan-100 ring-1 ring-cyan-400/40 border border-white/20 hover:from-cyan-500/30 hover:to-cyan-400/20 hover:ring-cyan-300/60 transition-all duration-300 shadow-[0_0_50px_rgba(34,211,238,0.25)] hover:shadow-[0_0_70px_rgba(34,211,238,0.35)] hover:scale-105 text-base" href="#">
<span>Get Early Access Now</span>
<svg className="h-5 w-5 stroke-cyan-100 transition-all duration-300 group-hover:translate-x-1" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center gap-2 text-slate-300/80 hover:text-cyan-100 transition-all duration-300 hover:scale-105" href="#demo">
<span className="underline decoration-cyan-400/40 decoration-2 underline-offset-4">Schedule a demo</span>
<svg className="h-4 w-4 stroke-cyan-200" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></path>
</svg>
</a>
</div>
</div>
</div>
<div className="mx-auto max-w-7xl px-6 py-8">
<div className="text-center text-xs text-slate-500 opacity-0 translate-y-6 blur-sm transition-all duration-1000 ease-out transform-gpu" data-reveal="" style={{transitionDelay: '80ms'}}>
          © <span className="tracking-tight">NeuroLink OS</span> — Built for the age of human–AI collaboration.
        </div>
</div>
</section>



    </>
  );
}
