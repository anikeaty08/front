import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // 1. Loading Sequence
    window.addEventListener('load', () => {
      const loader = document.getElementById('loader');
      setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';
        setTimeout(() => loader.remove(), 1200);
      }, 800);
    });

    // 2. High-End Dual Cursor System
    const cursorDot = document.getElementById('cursorDot');
    const cursorGlow = document.getElementById('cursorGlow');
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let dotPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let glowPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function renderCursor() {
      // Lerp for smooth trailing (fast for dot, slow for glow)
      dotPos.x += (mouse.x - dotPos.x) * 0.3;
      dotPos.y += (mouse.y - dotPos.y) * 0.3;
      glowPos.x += (mouse.x - glowPos.x) * 0.08;
      glowPos.y += (mouse.y - glowPos.y) * 0.08;

      cursorDot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%)`;
      cursorGlow.style.transform = `translate3d(${glowPos.x}px, ${glowPos.y}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(renderCursor);
    }
    renderCursor();

    // Cursor Hover States
    document.querySelectorAll('.cursor-hover').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursorDot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%) scale(0)`;
        cursorGlow.classList.add('scale-150', 'bg-[#FF7A00]/60');
      });
      el.addEventListener('mouseleave', () => {
        cursorDot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%) scale(1)`;
        cursorGlow.classList.remove('scale-150', 'bg-[#FF7A00]/60');
      });
    });

    // 3. Cinematic Scroll Parallax (Background + Elements)
    const parallaxElements = document.querySelectorAll('[data-speed]');
    let scrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
      requestAnimationFrame(() => {
        parallaxElements.forEach(el => {
          const speed = parseFloat(el.getAttribute('data-speed'));
          const yPos = -(scrollY * speed);
          // Combine mouse offset with scroll for backgrounds
          if(el.id.includes('bgBlob')) {
             const xPos = (mouse.x - window.innerWidth/2) * speed * 0.5;
             el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
          } else {
             el.style.transform = `translate3d(0, ${yPos}px, 0)`;
          }
        });
        
        // Header Blur on Scroll
        const header = document.getElementById('header');
        if(scrollY > 50) {
          header.classList.add('bg-[#0A0A0A]/70');
          header.classList.remove('bg-[#0A0A0A]/40');
        } else {
          header.classList.add('bg-[#0A0A0A]/40');
          header.classList.remove('bg-[#0A0A0A]/70');
        }
      });
    }, { passive: true });

    // 4. Apple-style Text & Element Reveals
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          
          // Trigger staggered text lines if applicable
          const lines = entry.target.querySelectorAll('.line-block');
          if(lines.length > 0) {
            lines.forEach((line, index) => {
              setTimeout(() => {
                line.style.opacity = '1';
                line.style.transform = 'translateY(0) rotateX(0)';
                line.style.filter = 'blur(0)';
              }, index * 150);
            });
          }
          revealObserver.unobserve(entry.target); // Reveal once
        }
      });
    }, observerOptions);

    // Setup Text Lines
    document.querySelectorAll('.reveal-lines').forEach(el => {
      const text = el.textContent.trim();
      // Split by words to ensure safe wrapping, wrap in line-blocks
      const words = text.split(' ');
      const chunks = [];
      while (words.length) chunks.push(words.splice(0, 3).join(' ')); // group 3 words per block for smoother flow
      el.innerHTML = chunks.map(chunk => `<span class="line-block mr-2">${chunk}</span>`).join('');
      revealObserver.observe(el);
    });

    document.querySelectorAll('.reveal').forEach(el => {
      if(!el.classList.contains('reveal-lines')) {
         revealObserver.observe(el);
      }
    });

    // 5. 3D Tilt Interaction (Cards)
    document.querySelectorAll('.tilt-card').forEach(card => {
      const content = card.querySelector('.tilt-content');
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate minimal rotation (-3 to 3 degrees)
        const rotateX = ((y - centerY) / centerY) * -3;
        const rotateY = ((x - centerX) / centerX) * 3;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
        if(content) content.style.transform = `translateZ(20px)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        if(content) content.style.transform = `translateZ(0)`;
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<div className="fixed inset-0 z-[9999] pointer-events-none hidden md:block mix-blend-screen">
<div className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-transform duration-200" id="cursorDot"></div>
<div className="absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF7A00]/40 blur-xl transition-all duration-500 ease-out" id="cursorGlow"></div>
</div>

<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
<div className="absolute -top-24 -left-16 h-[32rem] w-[32rem] rounded-full opacity-20 blur-[100px]" data-speed="0.05" id="bgBlob1" style={{background: 'radial-gradient(circle, rgba(255,90,0,0.4) 0%, rgba(255,42,42,0.15) 50%, transparent 100%)'}}></div>
<div className="absolute top-[40%] right-[-10rem] h-[28rem] w-[28rem] rounded-full opacity-[0.12] blur-[100px]" data-speed="-0.03" id="bgBlob2" style={{background: 'radial-gradient(circle, rgba(255,184,0,0.3) 0%, rgba(201,28,28,0.15) 50%, transparent 100%)'}}></div>
<div className="absolute bottom-[-10rem] left-[20%] h-[24rem] w-[24rem] rounded-full opacity-10 blur-[100px]" data-speed="0.08" id="bgBlob3" style={{background: 'radial-gradient(circle, rgba(255,42,42,0.2) 0%, transparent 100%)'}}></div>
<div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/80 to-[#0A0A0A]"></div>
</div>
<header className="fixed w-full top-0 z-50 border-b border-white/5 bg-[#0A0A0A]/40 backdrop-blur-2xl transition-all duration-500" id="header">
<div className="flex lg:px-8 max-w-7xl mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 items-center justify-between">
<a className="cursor-hover text-xl font-medium tracking-tight text-white transition-transform hover:scale-105" href="#">MarketSpark</a>
<nav className="hidden items-center gap-10 md:flex">
<a className="cursor-hover uppercase transition duration-300 hover:text-white text-xs font-normal text-white/60 tracking-[0.1em]" href="#services">Services</a>
<a className="cursor-hover text-xs font-normal uppercase tracking-[0.1em] text-white/60 transition duration-300 hover:text-white" href="#process">Strategy</a>
<a className="cursor-hover text-xs font-normal uppercase tracking-[0.1em] text-white/60 transition duration-300 hover:text-white" href="#portfolio">Work</a>
<a className="cursor-hover text-xs font-normal uppercase tracking-[0.1em] text-white/60 transition duration-300 hover:text-white" href="#dashboard">Metrics</a>
</nav>
<a className="cursor-hover group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-normal text-white transition duration-300 hover:border-white/20 hover:bg-white/10" href="#contact">
<span className="relative z-10">Start Project</span>
<div className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-r from-[#FF5A00] to-[#FF2A2A] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"></div>
</a>
</div>
</header>
<main className="">
<section className="relative min-h-[100vh] pt-24 flex items-center overflow-hidden">
<div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-32">
<div className="max-w-3xl z-10">
<div className="reveal mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#111111]/60 px-4 py-2 text-xs font-normal text-white/80 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF7A00] opacity-75"></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF7A00]"></span>
</span>
            Accelerating digital growth
          </div>
<h1 className="reveal-lines text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"><span className="line-block mr-2">Get more customers.Grow</span><span className="line-block mr-2" style={{filter: 'blur(0px)'}}>your businessonline.</span></h1>
<p className="reveal mt-8 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            We are a full-service agency helping brands increase sales using modern internet platforms. Data-driven campaigns meet cinematic design to scale your business.
          </p>
<div className="reveal mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
<a className="cursor-hover group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-4 text-sm font-normal text-white transition duration-500 hover:scale-[1.02]" href="#services" style={{background: 'linear-gradient(90deg, #FF5A00 0%, #FF2A2A 100%)', boxShadow: '0 0 3rem rgba(255,90,0,0.3)'}}>
<span className="relative z-10">View our services</span>
<iconify-icon className="relative z-10 transition-transform duration-500 group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
<div className="absolute inset-0 -z-10 translate-y-full bg-black/20 transition-transform duration-500 group-hover:translate-y-0"></div>
</a>
</div>
</div>
<div className="reveal relative hidden lg:block z-10 perspective-[2000px]">

<div className="tilt-card relative h-[36rem] w-full rounded-[2.5rem] border border-white/10 bg-[#111111]/40 backdrop-blur-2xl p-6 overflow-hidden" data-speed="0.08">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-50"></div>
<div className="tilt-content relative h-full w-full rounded-[2rem] border border-white/5 bg-[#0A0A0A] p-6 shadow-2xl flex flex-col justify-between overflow-hidden">
<div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-[#FF7A00]/20 blur-[80px]"></div>
<div className="flex justify-between items-center border-b border-white/5 pb-4">
<div className="text-xs uppercase tracking-[0.2em] text-white/40">Market Analytics</div>
<div className="flex gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-white/20"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white/20"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white/20"></span>
</div>
</div>
<div className="flex-1 mt-8 space-y-6">

<div className="relative h-24 w-full">
<svg className="h-full w-full overflow-visible stroke-[#FF5A00] stroke-[0.5] fill-none drop-shadow-[0_0_10px_rgba(255,90,0,0.5)]" viewbox="0 0 100 40">
<path className="dash-anim" d="M0 40 Q 15 30, 25 35 T 50 15 T 75 20 T 100 0" strokeLinecap="round"></path>
</svg>
<div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#FF5A00]/10 to-transparent clip-path-chart"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="rounded-2xl bg-white/[0.02] p-4 border border-white/[0.05]">
<div className="text-xs text-white/40 mb-1">Organic Traffic</div>
<div className="text-2xl font-medium tracking-tight text-white">+240%</div>
</div>
<div className="rounded-2xl bg-white/[0.02] p-4 border border-white/[0.05]">
<div className="text-xs text-white/40 mb-1">Lead Generation</div>
<div className="text-2xl font-medium tracking-tight text-white">4.8x</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center overflow-hidden px-6 py-24 lg:px-8 border-y border-white/[0.03]" id="process">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,90,0,0.03)_0%,transparent_70%)]"></div>
<div className="reveal text-center mb-16 relative z-20">
<div className="text-xs font-normal uppercase tracking-[0.2em] text-[#FF5A00]">The Growth Engine</div>
<h2 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl">Continuous intelligence flow.</h2>
<p className="mt-4 text-sm text-white/50 max-w-md mx-auto">We process raw market data, brand strategy, and performance metrics to output highly scalable campaigns.</p>
</div>
<div className="reveal relative flex h-[28rem] w-full max-w-5xl items-center justify-center">

<div className="absolute left-0 top-0 flex h-full w-1/3 flex-col justify-center gap-12 pr-12 hidden md:flex">
<div className="relative flex items-center justify-end">
<span className="absolute -left-4 text-xs tracking-tight text-white/40">Market Data</span>
<div className="h-[1px] w-full bg-gradient-to-r from-transparent to-white/10 relative overflow-hidden">
<div className="particle-in absolute h-[1px] w-12 bg-gradient-to-r from-transparent via-[#FF2A2A] to-transparent shadow-[0_0_10px_#FF2A2A]" style={{animationDelay: '0s'}}></div>
</div>
</div>
<div className="relative flex items-center justify-end">
<span className="absolute -left-4 text-xs tracking-tight text-white/40">Competitor Intel</span>
<div className="h-[1px] w-full bg-gradient-to-r from-transparent to-white/10 relative overflow-hidden">
<div className="particle-in absolute h-[1px] w-16 bg-gradient-to-r from-transparent via-[#FFB800] to-transparent shadow-[0_0_10px_#FFB800]" style={{animationDelay: '0.8s'}}></div>
</div>
</div>
<div className="relative flex items-center justify-end">
<span className="absolute -left-4 text-xs tracking-tight text-white/40">Consumer Behavior</span>
<div className="h-[1px] w-full bg-gradient-to-r from-transparent to-white/10 relative overflow-hidden">
<div className="particle-in absolute h-[1px] w-10 bg-gradient-to-r from-transparent via-[#FF5A00] to-transparent shadow-[0_0_10px_#FF5A00]" style={{animationDelay: '1.5s'}}></div>
</div>
</div>
</div>

<div className="relative z-10 flex h-48 w-48 items-center justify-center">
<div className="energy-ring-1 absolute h-[220%] w-[220%] rounded-full border border-white/[0.05] border-t-[#FF5A00]/30 border-b-[#FF5A00]/30 mix-blend-screen"></div>
<div className="energy-ring-2 absolute h-[170%] w-[170%] rounded-full border border-white/[0.08] border-r-[#FFB800]/40 border-l-[#FFB800]/40 mix-blend-screen"></div>
<div className="energy-core relative flex h-32 w-32 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-xl">
<div className="h-16 w-16 rounded-full bg-gradient-to-tr from-[#FF5A00] to-[#FFB800] blur-[4px] mix-blend-screen"></div>
<div className="absolute h-8 w-8 rounded-full bg-white blur-[2px] opacity-80"></div>
</div>
</div>

<div className="absolute right-0 top-0 flex h-full w-1/3 flex-col justify-center gap-12 pl-12 hidden md:flex">
<div className="relative flex items-center justify-start">
<div className="h-[1px] w-full bg-gradient-to-l from-transparent to-white/10 relative overflow-hidden">
<div className="particle-out absolute h-[1px] w-20 bg-gradient-to-l from-transparent via-[#FFB800] to-transparent shadow-[0_0_15px_#FFB800]" style={{animationDelay: '0.4s'}}></div>
</div>
<span className="absolute -right-4 text-xs tracking-tight text-white/40 whitespace-nowrap">Qualified Leads</span>
</div>
<div className="relative flex items-center justify-start">
<div className="h-[1px] w-full bg-gradient-to-l from-transparent to-white/10 relative overflow-hidden">
<div className="particle-out absolute h-[1px] w-16 bg-gradient-to-l from-transparent via-[#FF5A00] to-transparent shadow-[0_0_15px_#FF5A00]" style={{animationDelay: '1.2s'}}></div>
</div>
<span className="absolute -right-4 text-xs tracking-tight text-white/40 whitespace-nowrap">Increased Sales</span>
</div>
<div className="relative flex items-center justify-start">
<div className="h-[1px] w-full bg-gradient-to-l from-transparent to-white/10 relative overflow-hidden">
<div className="particle-out absolute h-[1px] w-24 bg-gradient-to-l from-transparent via-[#FF2A2A] to-transparent shadow-[0_0_15px_#FF2A2A]" style={{animationDelay: '2.1s'}}></div>
</div>
<span className="absolute -right-4 text-xs tracking-tight text-white/40 whitespace-nowrap">Market Dominance</span>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-32 lg:px-8" id="services">
<div className="mb-16 max-w-3xl">
<div className="reveal text-xs uppercase tracking-[0.2em] text-white/40">Full-Stack Expertise</div>
<h2 className="reveal-lines mt-6 text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl"><span className="line-block mr-2">Everything you needto</span><span className="line-block mr-2">dominate yourmarket.</span></h2>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="tilt-card cursor-hover reveal group rounded-[2rem] border border-white/[0.08] bg-[#0E0E0E]/80 p-8 backdrop-blur-md transition-all delay-[0ms]">
<div className="tilt-content flex flex-col h-full">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors group-hover:bg-[#FF7A00]/10 group-hover:border-[#FF7A00]/30">
<iconify-icon className="text-white transition-colors group-hover:text-[#FF7A00]" height="24" icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">SEO Optimization</h3>
<p className="mt-4 text-sm leading-relaxed text-white/50 flex-grow">Improve your website ranking on Google and get free organic traffic through precise keywords, authoritative backlinks, and technical SEO.</p>
</div>
</div>

<div className="tilt-card cursor-hover reveal group rounded-[2rem] border border-white/[0.08] bg-[#0E0E0E]/80 p-8 backdrop-blur-md transition-all delay-[100ms]">
<div className="tilt-content flex flex-col h-full">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors group-hover:bg-[#FFB800]/10 group-hover:border-[#FFB800]/30">
<iconify-icon className="text-white transition-colors group-hover:text-[#FFB800]" height="24" icon="solar:mouse-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">Paid Ads (PPC)</h3>
<p className="mt-4 text-sm leading-relaxed text-white/50 flex-grow">Run highly targeted campaigns on Google, Meta, and YouTube. Pay only for clicks to generate fast results, qualified traffic, and direct sales.</p>
</div>
</div>

<div className="tilt-card cursor-hover reveal group rounded-[2rem] border border-white/[0.08] bg-[#0E0E0E]/80 p-8 backdrop-blur-md transition-all delay-[200ms]">
<div className="tilt-content flex flex-col h-full">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors group-hover:bg-[#FF2A2A]/10 group-hover:border-[#FF2A2A]/30">
<iconify-icon className="text-white transition-colors group-hover:text-[#FF2A2A]" height="24" icon="solar:smartphone-update-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">Social Media</h3>
<p className="mt-4 text-sm leading-relaxed text-white/50 flex-grow">Manage Instagram, LinkedIn, and Facebook profiles. Create engaging posts and cinematic reels to build immense brand awareness.</p>
</div>
</div>

<div className="tilt-card cursor-hover reveal group rounded-[2rem] border border-white/[0.08] bg-[#0E0E0E]/80 p-8 backdrop-blur-md transition-all delay-[0ms]">
<div className="tilt-content flex flex-col h-full">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors group-hover:bg-[#FF7A00]/10 group-hover:border-[#FF7A00]/30">
<iconify-icon className="text-white transition-colors group-hover:text-[#FF7A00]" height="24" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">Content Marketing</h3>
<p className="mt-4 text-sm leading-relaxed text-white/50 flex-grow">Content is king. We produce premium blogs, videos, and infographics engineered to continually educate and attract high-value customers.</p>
</div>
</div>

<div className="tilt-card cursor-hover reveal group rounded-[2rem] border border-white/[0.08] bg-[#0E0E0E]/80 p-8 backdrop-blur-md transition-all delay-[100ms]">
<div className="tilt-content flex flex-col h-full">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors group-hover:bg-[#FFB800]/10 group-hover:border-[#FFB800]/30">
<iconify-icon className="text-white transition-colors group-hover:text-[#FFB800]" height="24" icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">Email Marketing</h3>
<p className="mt-4 text-sm leading-relaxed text-white/50 flex-grow">Deploy automated promotional campaigns and strategic follow-ups to nurture leads, build long-term relationships, and secure repeat business.</p>
</div>
</div>

<div className="tilt-card cursor-hover reveal group rounded-[2rem] border border-white/[0.08] bg-[#0E0E0E]/80 p-8 backdrop-blur-md transition-all delay-[200ms]">
<div className="tilt-content flex flex-col h-full">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors group-hover:bg-[#FF2A2A]/10 group-hover:border-[#FF2A2A]/30">
<iconify-icon className="text-white transition-colors group-hover:text-[#FF2A2A]" height="24" icon="solar:monitor-smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">Web Design &amp; Dev</h3>
<p className="mt-4 text-sm leading-relaxed text-white/50 flex-grow">Create stunning, lightning-fast, mobile-friendly business websites and landing pages that serve as the perfect first impression.</p>
</div>
</div>

<div className="tilt-card cursor-hover reveal group rounded-[2rem] border border-white/[0.08] bg-[#0E0E0E]/80 p-8 backdrop-blur-md transition-all delay-[0ms]">
<div className="tilt-content flex flex-col h-full">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors group-hover:bg-[#FF7A00]/10 group-hover:border-[#FF7A00]/30">
<iconify-icon className="text-white transition-colors group-hover:text-[#FF7A00]" height="24" icon="solar:star-fall-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">Branding &amp; Strategy</h3>
<p className="mt-4 text-sm leading-relaxed text-white/50 flex-grow">From distinct logo design to full brand identity development and comprehensive marketing planning to solidify your market position.</p>
</div>
</div>

<div className="tilt-card cursor-hover reveal group rounded-[2rem] border border-white/[0.08] bg-[#0E0E0E]/80 p-8 backdrop-blur-md transition-all delay-[100ms]">
<div className="tilt-content flex flex-col h-full">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors group-hover:bg-[#FFB800]/10 group-hover:border-[#FFB800]/30">
<iconify-icon className="text-white transition-colors group-hover:text-[#FFB800]" height="24" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">Analytics &amp; Reporting</h3>
<p className="mt-4 text-sm leading-relaxed text-white/50 flex-grow">Track traffic, sales, and leads in real-time. We continuously improve and optimize campaigns based on actionable, transparent data.</p>
</div>
</div>

<div className="tilt-card cursor-hover reveal group rounded-[2rem] border border-white/[0.08] bg-[#0E0E0E]/80 p-8 backdrop-blur-md transition-all delay-[200ms]">
<div className="tilt-content flex flex-col h-full">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors group-hover:bg-[#FF2A2A]/10 group-hover:border-[#FF2A2A]/30">
<iconify-icon className="text-white transition-colors group-hover:text-[#FF2A2A]" height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">Online Reputation</h3>
<p className="mt-4 text-sm leading-relaxed text-white/50 flex-grow">Actively manage reviews and ratings to safeguard and improve your brand image online. Essential for building trust and credibility.</p>
</div>
</div>

<div className="tilt-card cursor-hover reveal group rounded-[2rem] border border-white/[0.08] bg-[#0E0E0E]/80 p-8 backdrop-blur-md transition-all delay-[0ms]">
<div className="tilt-content flex flex-col h-full">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors group-hover:bg-[#FF7A00]/10 group-hover:border-[#FF7A00]/30">
<iconify-icon className="text-white transition-colors group-hover:text-[#FF7A00]" height="24" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">Influencer Marketing</h3>
<p className="mt-4 text-sm leading-relaxed text-white/50 flex-grow">Promote your products through strategic influencers, collaborations, and partnerships to exponentially increase your targeted reach.</p>
</div>
</div>

<div className="tilt-card cursor-hover reveal group rounded-[2rem] border border-white/[0.08] bg-[#0E0E0E]/80 p-8 backdrop-blur-md transition-all delay-[100ms]">
<div className="tilt-content flex flex-col h-full">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors group-hover:bg-[#FFB800]/10 group-hover:border-[#FFB800]/30">
<iconify-icon className="text-white transition-colors group-hover:text-[#FFB800]" height="24" icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">Performance Marketing</h3>
<p className="mt-4 text-sm leading-relaxed text-white/50 flex-grow">A strictly data-driven, ROI-based approach focused entirely on generating measurable results, qualified leads, and immediate sales.</p>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-32 lg:px-8 border-t border-white/[0.03]" id="portfolio">
<div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
<div className="max-w-3xl">
<div className="reveal text-xs uppercase tracking-[0.2em] text-white/40">Proven Results</div>
<h2 className="reveal-lines mt-6 text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl"><span className="line-block mr-2">Crafted for impact.</span></h2>
</div>
</div>
<div className="grid gap-8 lg:grid-cols-2">

<div className="tilt-card cursor-hover reveal group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] p-2 aspect-[4/3]">
<div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
<div className="absolute inset-0 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110" style={{background: 'linear-gradient(135deg, rgba(255,90,0,0.15), transparent 50%), #161616'}}>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)]" style={{backgroundSize: '20px 20px'}}></div>
<div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-transform duration-[1.5s] group-hover:scale-150"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
<div className="text-xs uppercase tracking-wider text-white/50 mb-2 transition-opacity duration-500 opacity-0 group-hover:opacity-100">Performance Ads + Web Dev</div>
<h3 className="text-2xl font-medium tracking-tight text-white">E-Commerce Scale</h3>
</div>
</div>
</div>

<div className="tilt-card cursor-hover reveal group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] p-2 aspect-[4/3] lg:translate-y-24">
<div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
<div className="absolute inset-0 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110" style={{background: 'linear-gradient(135deg, rgba(255,184,0,0.12), transparent 60%), #141414'}}>
<div className="absolute right-0 bottom-0 h-full w-2/3 border-l border-t border-white/[0.03] bg-white/[0.01] rounded-tl-3xl backdrop-blur-sm transition-transform duration-[1.5s] group-hover:translate-x-4 group-hover:translate-y-4"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
<div className="text-xs uppercase tracking-wider text-white/50 mb-2 transition-opacity duration-500 opacity-0 group-hover:opacity-100">SEO + Brand Strategy</div>
<h3 className="text-2xl font-medium tracking-tight text-white">B2B SaaS Growth</h3>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-32 lg:px-8 mt-12 lg:mt-32" id="dashboard">
<div className="mb-16 max-w-3xl">
<div className="reveal text-xs uppercase tracking-[0.2em] text-[#FFB800]">Performance Reporting</div>
<h2 className="reveal-lines mt-6 text-4xl font-medium tracking-tight text-white sm:text-5xl"><span className="line-block mr-2">Diagnostic Workspace.</span></h2>
</div>
<div className="reveal tilt-card rounded-[2.5rem] border border-white/10 bg-[#111111]/60 p-2 backdrop-blur-2xl">
<div className="rounded-[2rem] border border-white/5 bg-[#0A0A0A] p-8 lg:p-12 overflow-hidden relative">

<div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFB800]/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-white/5 pb-8 mb-8">
<div>
<div className="text-sm font-normal tracking-tight text-white">Live ROI Dashboard</div>
<div className="mt-1 text-xs text-white/40">Track your campaign performance in real-time.</div>
</div>
<button className="cursor-hover group relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-normal text-white transition hover:border-[#FFB800]/30 hover:bg-white/10">
<span className="relative z-10 flex items-center gap-2">
                Generate Report
                <iconify-icon height="16" icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
</span>
</button>
</div>
<div className="grid gap-8 lg:grid-cols-3">

<div className="group relative rounded-2xl border border-white/[0.04] bg-[#141414] p-6 transition-colors hover:bg-[#181818]">
<div className="text-xs uppercase tracking-widest text-white/40 mb-4">Traffic Growth</div>
<div className="flex items-end gap-3">
<span className="text-4xl font-medium tracking-tighter text-white">84</span>
<span className="text-xs text-[#FFB800] mb-1">% MoM</span>
</div>
<div className="mt-6 h-1 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-[84%] bg-gradient-to-r from-[#FF5A00] to-[#FFB800] rounded-full transform origin-left transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] scale-x-0 group-hover:scale-x-100"></div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/[0.04] bg-[#141414] p-6 transition-colors hover:bg-[#181818]">
<div className="text-xs uppercase tracking-widest text-white/40 mb-4">Conversion Rate</div>
<div className="flex items-end gap-3">
<span className="text-4xl font-medium tracking-tighter text-white">4.2</span>
<span className="text-xs text-[#FF7A00] mb-1">% Avg</span>
</div>
<div className="mt-6 h-1 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-[65%] bg-gradient-to-r from-[#FF2A2A] to-[#FF7A00] rounded-full transform origin-left transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] scale-x-0 group-hover:scale-x-100"></div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/[0.04] bg-[#141414] p-6 transition-colors hover:bg-[#181818]">
<div className="text-xs uppercase tracking-widest text-white/40 mb-4">Cost Per Lead</div>
<div className="flex items-end gap-3">
<span className="text-4xl font-medium tracking-tighter text-white">12</span>
<span className="text-xs text-[#2A2A2A] mb-1 line-through border border-white/10 px-1 rounded bg-white/5">$28</span>
</div>
<div className="mt-6 h-1 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-[40%] bg-[#FF2A2A] rounded-full transform origin-left transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] scale-x-0 group-hover:scale-x-100"></div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-5xl px-6 py-32 text-center lg:px-8" id="cta">
<div className="reveal tilt-card relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#111111]/80 px-8 py-24 backdrop-blur-2xl">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,90,0,0.15),transparent_60%)]"></div>
<div className="tilt-content relative z-10 mx-auto max-w-2xl">
<div className="text-xs uppercase tracking-[0.2em] text-[#FF7A00] mb-6">Simple Summary</div>
<h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">Ready to get more customers and grow online?</h2>
<p className="text-sm text-white/60 mb-10">Increase sales using internet platforms with our complete digital marketing systems.</p>
<a className="cursor-hover group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-normal text-black transition duration-500 hover:scale-[1.02]" href="#contact">
<span className="relative z-10">Start the conversation</span>
<iconify-icon className="relative z-10 transition-transform duration-500 group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
<div className="absolute inset-0 -z-10 translate-y-full bg-orange-200 transition-transform duration-500 group-hover:translate-y-0"></div>
</a>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 bg-black" id="contact">
<div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
<div className="grid gap-12 lg:grid-cols-2">
<div>
<a className="cursor-hover text-2xl font-medium tracking-tight text-white" href="#">MarketSpark</a>
<p className="mt-6 max-w-sm text-sm leading-relaxed text-white/50">Engineering premium digital systems. We help businesses grow online with ROI-focused marketing strategies.</p>
</div>
<div className="grid gap-8 grid-cols-2 sm:grid-cols-3">
<div>
<div className="text-xs uppercase tracking-[0.2em] text-white/30 mb-6">Index</div>
<div className="flex flex-col gap-4">
<a className="cursor-hover text-sm tracking-tight text-white/60 transition hover:text-white" href="#services">Services</a>
<a className="cursor-hover text-sm tracking-tight text-white/60 transition hover:text-white" href="#process">Strategy</a>
<a className="cursor-hover text-sm tracking-tight text-white/60 transition hover:text-white" href="#portfolio">Work</a>
</div>
</div>
<div>
<div className="text-xs uppercase tracking-[0.2em] text-white/30 mb-6">Connect</div>
<div className="flex flex-col gap-4">
<a className="cursor-hover text-sm tracking-tight text-white/60 transition hover:text-white" href="#">Instagram</a>
<a className="cursor-hover text-sm tracking-tight text-white/60 transition hover:text-white" href="#">LinkedIn</a>
<a className="cursor-hover text-sm tracking-tight text-white/60 transition hover:text-white" href="#">Facebook</a>
</div>
</div>
<div className="col-span-2 sm:col-span-1">
<div className="text-xs uppercase tracking-[0.2em] text-white/30 mb-6">Contact</div>
<div className="flex flex-col gap-4">
<a className="cursor-hover text-sm tracking-tight text-white/60 transition hover:text-white" href="mailto:info@marketspark.com">info@marketspark.com</a>
<a className="cursor-hover text-sm tracking-tight text-white/60 transition hover:text-white" href="tel:7090888855">7090888855</a>
<a className="cursor-hover text-sm tracking-tight text-white/60 transition hover:text-white" href="https://marketspark.com">marketspark.com</a>
</div>
</div>
</div>
</div>
<div className="mt-20 flex flex-col sm:flex-row justify-between items-center border-t border-white/5 pt-8 text-xs text-white/30">
<p>© 2026 MarketSpark.</p>
<p className="mt-2 sm:mt-0">All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
