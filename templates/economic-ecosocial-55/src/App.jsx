import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
colors: {
micayla: {
500: '#6EC1E4',
600: '#61CE70',
}
}
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
  


    // Initialize Lucide icons
    lucide.createIcons();

    // Button hover effect
    function btnMove(e) {
      const r = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty('--x', (e.clientX - r.left) + 'px');
      e.currentTarget.style.setProperty('--y', (e.clientY - r.top) + 'px');
    }

    // Scroll reveal animations
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all scroll-fade elements
    document.querySelectorAll('.scroll-fade').forEach(el => {
      observer.observe(el);
    });

    // FAQ Accordion functionality
    document.querySelectorAll('[data-faq-toggle]').forEach(button => {
      button.addEventListener('click', () => {
        const faqItem = button.closest('.faq-item');
        const content = faqItem.querySelector('.faq-content');
        const icon = button.querySelector('[data-lucide="chevron-down"]');
        const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
        
        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
          const otherContent = item.querySelector('.faq-content');
          const otherIcon = item.querySelector('[data-lucide="chevron-down"]');
          if (item !== faqItem) {
            otherContent.style.maxHeight = '0px';
            otherIcon?.classList.remove('rotate-180');
          }
        });
        
        // Toggle current item
        if (isOpen) {
          content.style.maxHeight = '0px';
          icon?.classList.remove('rotate-180');
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
          icon?.classList.add('rotate-180');
        }
      });
    });

    // Open first FAQ by default
    setTimeout(() => {
      const firstFaq = document.querySelector('[data-faq-toggle]');
      if (firstFaq) {
        const content = firstFaq.closest('.faq-item').querySelector('.faq-content');
        const icon = firstFaq.querySelector('[data-lucide="chevron-down"]');
        content.style.maxHeight = content.scrollHeight + 'px';
        icon?.classList.add('rotate-180');
      }
    }, 500);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Cursor glow effect styles
    const style = document.createElement('style');
    style.textContent = `
      .cursor-glow-btn .glow {
        opacity: var(--o, 0);
        transition: opacity .25s ease;
        background: radial-gradient(140px 90px at var(--x, 50%) var(--y, 50%), rgba(97,206,112,.28), rgba(97,206,112,.14) 35%, rgba(97,206,112,.06) 55%, transparent 70%), radial-gradient(40px 28px at var(--x, 50%) var(--y, 50%), rgba(97,206,112,.55), transparent 70%);
      }
      @media (prefers-reduced-motion: reduce) {
        .cursor-glow-btn .glow { transition: none; }
      }
    `;
    document.head.appendChild(style);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="4gq2Yrv2p0bIa0hdLPQx"></div>

</div></div>

<div className="fixed inset-0 -z-10">

<div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900/50 to-neutral-950" style={{}}></div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/20 to-neutral-950" style={{}}></div>

<div className="pointer-events-none absolute inset-0" style={{backgroundImage: 'url(\'https://uploads-ssl.webflow.com/5f6d66c5f1e4a5f0c1b3b1a1/63a4d9b4b4c7d418f9ed2c73_noise.png\')', opacity: '0.3'}}></div>
</div>

<header className="fixed top-0 inset-x-0 z-40 transition animate-[slideInBlur_0.8s_ease-out_0.2s_forwards] border-b blur-sm backdrop-blur translate-y-[-20px] bg-neutral-950/40 border-white/10" style={{}}>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="supports-[backdrop-filter]:bg-neutral-900/30 border-0 rounded-none mt-4 backdrop-blur-none" style={{}}>
<div className="flex sm:px-6 pt-0 pr-4 pb-3 pl-4 items-center justify-between">

<a className="flex items-center gap-2" href="#">

<div className="h-6 w-6 rounded bg-gradient-to-br to-amber-500 from-amber-400" style={{}}></div>
<span className="text-sm font-bold tracking-tight text-neutral-200" style={{}}>MicAyla</span>
</a>

<nav className="hidden md:flex gap-8 flex sm:px-6 border-[#ffffff]/10 border rounded-full pt-3 pr-4 pb-3 pl-4 items-center justify-between bg-neutral-900/40" style={{}}>
<a className="transition text-sm font-normal hover:text-neutral-100 text-neutral-300/80" href="#focus-areas" style={{}}>Focus Areas</a>
<a className="text-sm font-normal transition text-neutral-300/80 hover:text-neutral-100" href="#portfolio" style={{}}>Portfolio</a>
<a className="text-sm font-normal transition text-neutral-300/80 hover:text-neutral-100" href="#services" style={{}}>Project Controls</a>
<a className="text-sm font-normal transition text-neutral-300/80 hover:text-neutral-100" href="#about" style={{}}>About</a>
<a className="text-sm font-normal transition text-neutral-300/80 hover:text-neutral-100" href="#contact" style={{}}>Contact</a>
</nav>

<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] transition border-white/10 bg-neutral-900/60 text-neutral-100 hover:bg-neutral-800/60" href="#contact" style={{}}>
<svg className="lucide lucide-handshake h-4 w-4" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
              Partner With Us
            </a>
<button className="inline-flex md:hidden items-center justify-center h-9 w-9 rounded-full border border-white/10 bg-neutral-900/60 hover:bg-neutral-800/60" style={{}}>
<svg className="lucide lucide-menu h-5 w-5 text-neutral-200" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</div>
</header>

<main className="relative">
<section className="sm:pt-44 md:pt-48 md:pb-32 max-w-7xl mr-auto ml-auto pt-40 pr-6 pb-24 pl-6">
<div className="flex flex-col text-center space-y-6 items-center">

<div className="relative animate-[scaleInBlur_1.2s_ease-out_0.6s_forwards] mb-8 blur-lg scale-50">
<div className="absolute -inset-8 bg-[radial-gradient(closest-side,rgba(97,206,112,0.18),transparent)] blur-2xl"></div>
<div className="relative h-14 w-14 ring-1 shadow-[0_0_40px_-10px_rgba(97,206,112,0.4),inset_0_1px_0_0_rgba(255,255,255,0.06)] flex bg-[url(https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&amp;w=320&amp;auto=format&amp;fit=crop)] bg-cover rounded-2xl items-center justify-center ring-white/10">
</div>
</div>

<div className="mb-6 opacity-0 translate-y-4 blur-sm animate-[slideInBlur_0.8s_ease-out_0.8s_forwards]">
<span className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] border-white/10 bg-neutral-900/50 text-neutral-300" style={{}}>
<span className="h-1.5 w-1.5 rounded-full shadow-[0_0_0_3px_rgba(97,206,112,0.15)] bg-amber-400/80" style={{}}></span>
            Asset Management &amp; Empowerment
          </span>
</div>

<h1 className="max-w-4xl text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[0.95] text-transparent bg-clip-text bg-gradient-to-b font-semibold opacity-0 translate-y-8 blur-sm animate-[slideInBlur_1s_ease-out_1s_forwards] from-neutral-100 via-neutral-200 to-neutral-400/90" style={{}}>
<span className="block" style={{}}>Partners in</span>
<span className="block">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-400/80" style={{}}>Economic &amp; Ecosocial</span>
<span className="bg-clip-text italic font-['Playfair_Display'] text-amber-300" style={{}}>Empowerment</span>
</span>
</h1>

<p className="max-w-2xl sm:text-lg animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] text-base opacity-0 mt-6 blur-sm translate-y-6 text-neutral-300/80" style={{}}>
          We aim to approach every development with a commitment to sustainability. Utilizing bespoke technologies, methodologies, and financial resources to add real and lasting value for our partners and the communities we serve.
        </p>

<div className="overflow-hidden pt-8 pr-8 pb-8 pl-8">
<div className="relative inline-block group">
<button className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] relative z-10 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-[transform] duration-150 ease-out active:scale-[0.98] border rounded-xl pt-3 pr-6 pb-3 pl-6 text-white bg-neutral-900/60 border-white/20" onmouseenter="this.style.setProperty('--o','1')" onmouseleave="this.style.setProperty('--o','0')" onmousemove="btnMove(event)" style={{-X: '115.875px', -Y: '49.5px', -O: '0'}}>
<span className="relative z-10 inline-flex items-center gap-2 font-semibold" style={{}}>View Our Portfolio<svg className="h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path className="" d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg></span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0 via-amber-400" style={{}}></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10" style={{transform: 'scale(0.95) translate(0px, -24px)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(97,206,112,.55), rgba(97,206,112,.28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>

<div className="mt-14 flex items-center gap-8 opacity-0 translate-y-4 blur-sm animate-[slideInBlur_0.8s_ease-out_1.6s_forwards] text-neutral-400" style={{}}>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-amber-500" style={{}}></span>
<span className="text-sm font-medium tracking-wide">U.S.</span>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-amber-500" style={{}}></span>
<span className="text-sm font-medium tracking-wide">Africa</span>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-amber-500" style={{}}></span>
<span className="text-sm font-medium tracking-wide">Caribbean</span>
</div>
</div>
</div>
</section>
</main>

<section className="w-full max-w-7xl sm:px-6 lg:px-8 md:py-20 mr-auto ml-auto pt-14 pr-4 pb-14 pl-4" id="focus-areas">

<div className="flex mt-6 mb-6 items-center justify-center scroll-fade visible">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full pt-1 pr-3 pb-1 pl-3 transition-all text-slate-300/80 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20" style={{}}>
<svg className="lucide lucide-waypoints h-3.5 w-3.5 text-amber-300" data-lucide="waypoints" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="4.5" r="2.5"></circle><path d="m10.2 6.3-3.9 3.9"></path><circle cx="4.5" cy="12" r="2.5"></circle><path d="M7 12h10"></path><circle cx="19.5" cy="12" r="2.5"></circle><path d="m13.8 17.7 3.9-3.9"></path><circle cx="12" cy="19.5" r="2.5"></circle></svg>
        Our Focus Areas
      </span>
</div>

<div className="max-w-3xl scroll-fade scroll-fade-delay text-center mr-auto ml-auto visible">
<h1 className="md:text-6xl text-4xl font-semibold tracking-tight text-slate-50" style={{}}>
        Sustainable <span className="bg-clip-text italic font-['Playfair_Display'] bg-gradient-to-r from-slate-200 to-amber-300 via-amber-300" style={{}}>Development</span>
</h1>
<p className="md:text-lg text-base mt-4 text-slate-400" style={{}}>Adding lasting value through innovation in Energy, Infrastructure, Finance, and Education.</p>
</div>

<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

<article className="relative overflow-hidden rounded-2xl ring-1 p-6 md:p-8 min-h-[20rem] md:min-h-[22rem] scroll-fade scroll-fade-delay-2 hover:bg-white/[0.08] transition-all group visible bg-white/5 ring-white/10 hover:ring-white/20">
<div className="absolute inset-0 bg-gradient-to-br via-transparent to-transparent from-amber-500/5" style={{}}></div>
<div className="absolute -top-12 -right-10 h-48 w-48 rounded-full blur-2xl transition-all group-hover:bg-amber-400/20 bg-amber-400/10" style={{}}></div>

<div className="flex h-12 w-12 bg-gradient-to-br ring-1 rounded-xl items-center justify-center mb-6 ring-white/10 from-amber-400/20 to-amber-600/10" style={{}}>
<svg className="lucide lucide-zap h-6 w-6 text-amber-200" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>

<div className="max-w-md relative z-10">
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-100" style={{}}>Energy Transition</h3>
<p className="mt-3 text-sm md:text-base text-slate-400" style={{}}>
            Supporting both ends of the transition spectrum through innovation. We invest in cleaner energy solutions while optimizing existing assets for efficiency.
          </p>
</div>

<div className="absolute bottom-0 right-0 w-full h-32 bg-[url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&amp;w=600&amp;auto=format&amp;fit=crop')] bg-cover bg-bottom opacity-20 mix-blend-overlay"></div>
</article>

<article className="relative overflow-hidden min-h-[20rem] md:min-h-[22rem] scroll-fade scroll-fade-delay-3 hover:bg-white/[0.08] transition-all group ring-1 rounded-2xl pt-0 pr-0 pb-0 pl-0 visible hover:ring-white/20 bg-white/5 ring-white/10">
<div className="absolute inset-0 group-hover:bg-[radial-gradient(40%_40%_at_50%_50%,rgba(97,206,112,0.15),transparent_60%)] transition-all"></div>
<div className="p-6 md:p-8 z-10 relative">
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-100" style={{}}>Global Reach</h3>
<p className="mt-1 text-sm max-w-lg text-slate-400" style={{}}>
            Executing complex projects across diverse geographies with a focus on local impact and global standards.
          </p>
</div>

<div className="pointer-events-none overflow-visible absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(97,206,112,0.25),transparent_60%)] blur-2xl">
</div>

<div className="relative h-72 sm:h-80 md:h-[22rem] overflow-visible">

<div className="absolute inset-0"></div>

<div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

<div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border animate-pulse border-amber-400/20" style={{animationDelay: '0s'}}></div>

<div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border animate-pulse border-white/10" style={{animationDelay: '.6s'}}></div>

<div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border animate-pulse border-white/10" style={{animationDelay: '1.2s'}}></div>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
<div className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(97,206,112,0.25),transparent_60%)] blur-2xl transition-all duration-500 group-hover:scale-110">
</div>
<div className="relative flex h-28 w-28 items-center justify-center rounded-full border shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(2,6,23,0.75)] ring-1 backdrop-blur-md transition-transform duration-300 group-hover:scale-105 sm:h-32 sm:w-32 border-white/10 bg-slate-900/70 ring-amber-400/20" style={{}}>
<svg className="lucide lucide-globe text-amber-200" data-lucide="globe" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{}} viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<div className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_40px_6px_rgba(97,206,112,0.25)]">
</div>
</div>
</div>
</div>
</article>
</div>

<div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

<article className="relative overflow-hidden min-h-[15rem] md:min-h-[16rem] scroll-fade scroll-fade-delay hover:bg-white/[0.08] transition-all group ring-1 visible rounded-2xl p-6 hover:ring-white/20 ring-white/10 bg-white/5">
<div className="flex h-10 w-10 ring-1 rounded-lg items-center justify-center mb-4 bg-white/5 ring-white/10">
<svg className="lucide lucide-leaf h-5 w-5 text-amber-300" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<h4 className="text-lg font-semibold tracking-tight text-white" style={{}}>Eco Friendly Builds</h4>
<p className="mt-2 text-sm text-slate-400" style={{}}>Rapid development, reduced carbon footprint, made to last. We prioritize materials and methods that respect the environment.</p>

<div className="absolute bottom-0 right-0 w-32 h-32 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&amp;w=300')] bg-cover opacity-10 rounded-tl-3xl"></div>
</article>

<article className="relative overflow-hidden min-h-[15rem] md:min-h-[16rem] scroll-fade scroll-fade-delay-2 ring-1 rounded-2xl hover:bg-white/[0.08] transition-all group visible p-6 bg-white/5 ring-white/10 hover:ring-white/20">
<div className="flex h-10 w-10 ring-1 rounded-lg items-center justify-center mb-4 bg-white/5 ring-white/10">
<svg className="lucide lucide-bar-chart-3 h-5 w-5 text-amber-300" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h4 className="text-lg font-semibold tracking-tight text-white" style={{}}>Finance &amp; Controls</h4>
<p className="mt-2 text-sm text-slate-400" style={{}}>Engineering successful project outcomes through precise cost control, forecasting, and risk management.</p>

<div className="absolute bottom-4 right-4 p-2 rounded border backdrop-blur-sm bg-black/40 border-white/5">
<div className="flex gap-1 mb-1"><span className="h-1.5 w-1.5 rounded-full bg-amber-500" style={{}}></span><span className="h-1.5 w-1.5 rounded-full bg-amber-500" style={{}}></span></div>
<div className="h-1 w-12 rounded mb-1 bg-white/10"></div>
<div className="h-1 w-8 rounded bg-white/10"></div>
</div>
</article>

<article className="relative overflow-hidden min-h-[15rem] md:min-h-[16rem] scroll-fade scroll-fade-delay-3 hover:bg-white/[0.08] transition-all group ring-1 rounded-2xl visible p-6 hover:ring-white/20 bg-white/5 ring-white/10">
<div className="flex h-10 w-10 ring-1 rounded-lg items-center justify-center mb-4 bg-white/5 ring-white/10">
<svg className="lucide lucide-graduation-cap h-5 w-5 text-indigo-300" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<h4 className="text-lg font-semibold tracking-tight text-white" style={{}}>Training &amp; Certification</h4>
<p className="mt-2 text-sm text-slate-400" style={{}}>Knowledge transfer with an impact on local content. Empowering communities through skill development.</p>
<div className="absolute inset-0 group-hover:bg-[radial-gradient(50%_50%_at_100%_100%,rgba(99,102,241,0.1),transparent_60%)] transition-all pointer-events-none"></div>
</article>
</div>
</section>

<section className="w-full max-w-7xl sm:px-6 lg:px-8 md:py-20 mr-auto ml-auto pt-14 pr-4 pb-14 pl-4" id="portfolio">

<div className="flex items-center justify-center scroll-fade visible">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full px-3 py-1 text-slate-300/80 bg-white/5 border-white/10" style={{}}>
<svg className="lucide lucide-trophy h-3.5 w-3.5 text-amber-300" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
        Rich &amp; Diverse Background
      </span>
</div>

<div className="max-w-3xl text-center mt-6 mr-auto ml-auto scroll-fade scroll-fade-delay visible">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-50" style={{}}>
        Decades of <span className="bg-clip-text italic font-['Playfair_Display'] bg-gradient-to-r from-slate-200 to-amber-300 via-amber-300" style={{}}>Excellence</span>
</h1>
<p className="mt-4 text-base md:text-lg text-slate-400" style={{}}>
        At the core of our DNA lies a track record of successfully executing a wide range of complex projects globally.
      </p>
</div>

<div className="relative group mt-12 scroll-fade scroll-fade-delay-2 visible">

<div className="relative z-10 transition-all duration-500 ease-out group-hover:-translate-y-2 border ring-1 rounded-2xl backdrop-blur-xl overflow-hidden bg-neutral-900/60 border-white/10 ring-white/10" style={{}}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-0">

<div className="relative h-64 md:h-auto min-h-[300px]">
<img alt="Industrial Project" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r to-transparent from-black/80"></div>
</div>

<div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-md">
<div className="inline-flex gap-2 items-center mb-4 text-amber-300" style={{}}>
<span className="text-xs font-bold uppercase tracking-widest">Featured Project</span>
</div>
<h3 className="md:text-3xl text-2xl font-semibold tracking-tight mb-4 text-slate-100" style={{}}>Industrial Modernization</h3>
<p className="text-sm md:text-base mb-6 text-slate-400" style={{}}>
              MicAyla's leadership has overseen major capital projects including plant-wide modernizations, crude processing metallurgical upgrades, and offshore platform optimizations across the Gulf of Mexico and beyond.
            </p>

<div className="grid grid-cols-2 gap-4">
<div className="rounded-xl border px-5 py-4 bg-white/5 border-white/10">
<div className="md:text-2xl text-xl font-semibold tracking-tight text-neutral-50" style={{}}>$10B+</div>
<p className="mt-1 text-xs text-slate-400" style={{}}>Project Experience</p>
</div>
<div className="border rounded-xl pt-4 pr-5 pb-4 pl-5 bg-white/5 border-white/10">
<div className="md:text-2xl text-xl font-semibold tracking-tight text-neutral-50" style={{}}>34+</div>
<p className="mt-1 text-xs text-slate-400" style={{}}>Years Combined Exp.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl sm:px-6 lg:px-8 md:py-20 opacity-100 mr-auto ml-auto pt-14 pr-4 pb-14 pl-4" id="services">

<div className="flex items-center justify-center scroll-fade visible">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full px-3 py-1 text-slate-300/80 bg-white/5 border-white/10" style={{}}>
<svg className="lucide lucide-users h-3.5 w-3.5 text-amber-300" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
        Our Leadership
      </span>
</div>

<div className="max-w-3xl text-center mx-auto mt-6 scroll-fade scroll-fade-delay visible">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-50" style={{}}>
        Expertise You Can <span className="bg-clip-text italic font-['Playfair_Display'] bg-gradient-to-r from-slate-200 to-amber-300 via-amber-300" style={{}}>Trust</span>
</h1>
<p className="mt-4 text-base md:text-lg text-slate-400" style={{}}>
        Led by industry veterans with proven track records in the Oil &amp; Gas, Infrastructure, and Commercial sectors.
      </p>
</div>

<div className="grid gap-8 lg:grid-cols-2 mt-12 mr-auto ml-auto max-w-5xl scroll-fade scroll-fade-delay-3 visible">

<div className="card-top glass-effect w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:ring-1 bg-gradient-to-r rounded-[1.2em] from-white/10 to-white/5 hover:ring-amber-400/30" style={{backdropFilter: 'blur(16px)'}}>
<div className="absolute inset-0 border rounded-[1.2em] border-white/20" style={{maskImage: 'linear-gradient(135deg, white, transparent 60%)'}}></div>
<div className="relative pt-8 pr-8 pb-8 pl-8">
<div className="relative">
<h3 className="text-2xl font-semibold tracking-tight text-white" style={{}}>Caroline Alabi</h3>
<p className="mt-1 text-sm font-medium text-amber-300" style={{}}>Project Controls Professional</p>
<p className="mt-4 text-sm leading-relaxed text-neutral-400" style={{}}>
              With over 27 years of experience, including 15 years in Project Controls, Caroline specializes in cost controls for capital programs. Her expertise spans the Gulf of Mexico (GoM) and downstream sectors. Creator of the Estimate to Complete/Estimate at Completion workbook.
            </p>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-amber-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-300" style={{}}>Cost Forecasting &amp; Analysis</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-amber-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-300" style={{}}>WBS &amp; Cashflow Reporting</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-amber-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-300" style={{}}>Award-winning Innovation</span>
</li>
</ul>
</div>
</div>
</div>

<div className="card-top glass-effect w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:ring-1 bg-gradient-to-r rounded-[1.2em] from-white/10 to-white/5 hover:ring-amber-400/30" style={{backdropFilter: 'blur(16px)'}}>
<div className="absolute inset-0 border rounded-[1.2em] border-white/20" style={{maskImage: 'linear-gradient(135deg, white, transparent 60%)'}}></div>
<div className="relative pt-8 pr-8 pb-8 pl-8">
<div className="relative">
<h3 className="text-2xl font-semibold tracking-tight text-white" style={{}}>Tom O'Brien</h3>
<p className="mt-1 text-sm font-medium text-amber-300" style={{}}>Senior Project Manager</p>
<p className="mt-4 text-sm leading-relaxed text-neutral-400" style={{}}>
              Over 34 years of experience in project management and controls across oil &amp; gas, infrastructure, and power sectors. Hands-on expertise in all phases of EPC work, from FEED through execution. SME in Planning, Scheduling, and Risk Analysis.
            </p>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-amber-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-300" style={{}}>Contract Administration</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-amber-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-300" style={{}}>Risk &amp; Claim Mitigation</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-amber-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-300" style={{}}>Primavera P6 Expert</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl sm:px-6 lg:px-8 md:py-20 mr-auto ml-auto pt-14 pr-4 pb-14 pl-4" id="about">

<div className="flex items-center justify-center scroll-fade visible">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full px-3 py-1 text-slate-300/80 bg-white/5 border-white/10" style={{}}>
<svg className="lucide lucide-help-circle h-3.5 w-3.5 text-amber-300" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
        Learn More
      </span>
</div>

<div className="max-w-3xl text-center mx-auto mt-6 scroll-fade scroll-fade-delay visible">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-50" style={{}}>
        About <span className="bg-clip-text italic font-['Playfair_Display'] bg-gradient-to-r from-slate-200 to-amber-300 via-amber-300" style={{}}>MicAyla</span>
</h1>
<p className="mt-4 text-base md:text-lg text-slate-400" style={{}}>
        Founded in 2015, we are dedicated to driving success in the U.S., Africa, and the Caribbean.
      </p>
</div>

<div className="grid gap-6 lg:grid-cols-2 mt-12">

<div className="relative overflow-hidden rounded-[1.2em] ring-1 transition-all self-start scroll-fade scroll-fade-delay-2 visible ring-white/10 bg-white/5 hover:bg-white/10 hover:ring-white/20" style={{backdropFilter: 'blur(16px)'}}>
<div className="relative p-6 md:p-8 text-center flex flex-col items-center">
<div className="h-12 w-12 flex ring-1 rounded-xl items-center justify-center ring-white/10 bg-black/40">
<svg className="lucide lucide-map-pin h-6 w-6 text-amber-300" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mt-4 text-slate-100" style={{}}>Headquartered in Houston</h3>
<p className="mt-2 text-sm md:text-base max-w-md text-slate-400" style={{}}>
            2200 Post Oak Blvd, Suite 1000<br/>Houston, TX 77056
          </p>
<a className="mt-6 inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition border-white/10 bg-white/5 text-white hover:bg-white/10" href="mailto:info@micayla.global" style={{}}>
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
            Contact Us
          </a>
</div>
</div>

<div className="scroll-fade scroll-fade-delay-3 space-y-4 visible">

<div className="faq-item rounded-xl border transition border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20">
<button className="w-full flex gap-4 focus:outline-none text-left pt-3 pr-4 pb-3 pl-4 items-center justify-between" data-faq-toggle="" type="button">
<span className="text-sm md:text-base font-medium text-slate-200" style={{}}>What is your mission?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 transition-transform duration-300 rotate-180 text-slate-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 text-sm pt-0 pr-4 pb-0 pl-4 text-slate-400" style={{maxHeight: '84px'}}>
<div className="pb-6">
              We aim to approach every development with a commitment to sustainability, utilizing bespoke technologies and financial resources to add real and lasting value for our partners and communities.
            </div>
</div>
</div>
<div className="faq-item rounded-xl border transition border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20">
<button className="w-full flex gap-4 focus:outline-none text-left pt-3 pr-4 pb-3 pl-4 items-center justify-between" data-faq-toggle="" type="button">
<span className="text-sm md:text-base font-medium text-slate-200" style={{}}>Where do you operate?</span>
<svg className="lucide lucide-chevron-down transition-transform duration-300 h-5 w-5 text-slate-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content px-4 pt-0 text-sm overflow-hidden transition-all duration-300 text-slate-400" style={{maxHeight: '0px'}}>
<div className="pb-6">
              MicAyla is currently active in projects across the United States, Africa, and the Caribbean region, focusing on diverse sectors including Oil &amp; Gas and Infrastructure.
            </div>
</div>
</div>
<div className="faq-item rounded-xl border transition border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20">
<button className="w-full flex gap-4 focus:outline-none text-left pt-3 pr-4 pb-3 pl-4 items-center justify-between" data-faq-toggle="" type="button">
<span className="text-sm md:text-base font-medium text-slate-200" style={{}}>What sectors do you service?</span>
<svg className="lucide lucide-chevron-down transition-transform duration-300 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(203, 213, 225)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content px-4 pt-0 text-sm overflow-hidden transition-all duration-300 text-slate-400" style={{maxHeight: '0px'}}>
<div className="pb-6">
              Our expertise covers Oil and Gas, Infrastructure, Buildings, Power, and Petrochemical industries. We also have a strong focus on Energy Transition and Eco-Friendly Builds.
            </div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl sm:px-6 lg:px-8 md:py-20 mr-auto ml-auto pt-14 pr-4 pb-14 pl-4" id="contact">
<div className="relative scroll-fade pt-20 visible">
<div className="flex items-center justify-center">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full px-3 py-1 text-slate-300/80 bg-white/5 border-white/10" style={{}}>
<svg className="lucide lucide-rocket h-3.5 w-3.5 text-amber-300" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
          Start Your Transformation
        </span>
</div>
<div className="max-w-3xl text-center mx-auto mt-6 scroll-fade scroll-fade-delay visible">
<h2 className="md:text-6xl text-4xl font-semibold tracking-tight text-slate-50" style={{}}>Ready to Empower</h2>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mt-1 text-slate-50" style={{}}>
          Your <span className="bg-clip-text italic font-['Playfair_Display'] bg-gradient-to-r from-slate-200 to-amber-300 via-amber-300" style={{}}>Project?</span>
</h2>
<p className="mt-4 text-base md:text-lg text-slate-400" style={{}}>
          Connect with us to discuss how MicAyla can bring sustainable value to your asset management needs.
        </p>

<div className="relative inline-block group mt-6 scroll-fade scroll-fade-delay-2 visible">
<a className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] relative z-10 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-[transform] duration-150 ease-out active:scale-[0.98] border rounded-xl pt-3 pr-6 pb-3 pl-6 inline-flex text-white bg-neutral-900/60 border-white/20" href="mailto:info@micayla.global" onmouseenter="this.style.setProperty('--o','1')" onmouseleave="this.style.setProperty('--o','0')" onmousemove="btnMove(event)" style={{-X: '4.8125px', -Y: '34px', -O: '0'}}>
<span className="relative z-10 inline-flex items-center gap-2 font-semibold" style={{}}>Partner With Us<svg className="h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg></span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0 via-amber-400" style={{}}></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10" style={{transform: 'scale(0.95) translate(0px, -24px)'}}></span>
</a>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 -translate-x-1/2 h-6 w-52 rounded-full opacity-70 group-hover:opacity-100 transition-opacity" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(97,206,112,.45), rgba(97,206,112,.22) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>

<div className="mt-8 flex items-center justify-center gap-6 scroll-fade scroll-fade-delay-3 visible text-slate-400" style={{}}>
<a className="group transition flex items-center gap-2 hover:text-slate-200" href="mailto:info@micayla.global" style={{}}>
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
            info@micayla.global
          </a>
<span className="h-4 w-px bg-white/10"></span>
<a className="group transition flex items-center gap-2 hover:text-slate-200" href="tel:+17137305038" style={{}}>
<svg className="lucide lucide-phone h-4 w-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
            +1 (713) 730-5038
          </a>
</div>

<div className="relative mt-14">
<div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-6">
<span className="block mx-auto w-80 h-10 rounded-full blur-2xl opacity-70 bg-amber-400/20" style={{}}></span>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent to-transparent via-white/10"></div>
</div>
</div>
</div>

<footer className="pt-10 scroll-fade visible">
<div className="flex gap-4 flex-wrap items-center justify-between">

<a className="inline-flex items-center gap-2" href="#">
<div className="h-5 w-5 rounded bg-gradient-to-br to-amber-500 from-amber-400" style={{}}></div>
<span className="text-sm font-bold tracking-tight text-neutral-200" style={{}}>MicAyla</span>
</a>

<div className="flex items-center gap-4 text-slate-400" style={{}}>
<a className="transition hover:text-slate-200" href="#" style={{}}>
<svg className="lucide lucide-linkedin h-5 w-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>

<nav className="flex flex-wrap gap-6 text-sm mt-6 text-slate-400" style={{}}>
<a className="transition hover:text-slate-200" href="#focus-areas" style={{}}>Focus Areas</a>
<a className="transition hover:text-slate-200" href="#portfolio" style={{}}>Portfolio</a>
<a className="transition hover:text-slate-200" href="#about" style={{}}>About Us</a>
<a className="transition hover:text-slate-200" href="#contact" style={{}}>Contact</a>
<a className="transition hover:text-slate-200" href="#" style={{}}>Privacy Policy</a>
</nav>

<div className="mt-8 flex items-center justify-between text-xs text-slate-500 flex-wrap gap-4" style={{}}>
<span style={{}}>© 2025 MicAyla Inc. All rights reserved.</span>
<span style={{}}>2200 Post Oak Blvd, Suite 1000, Houston, TX 77056</span>
</div>
</footer>
</section>



    </>
  );
}
