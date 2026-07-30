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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


    const section = document.querySelector('section');
    const backs = section.querySelectorAll('.absolute.inset-0');
    section.addEventListener('mousemove', (e) => {
      const r = section.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      backs[0].style.transform = `scale(0.95) translate(${x * -8}px, ${y * -8 - 24}px)`;
      backs[1].style.transform = `scale(0.98) translate(${x * -5}px, ${y * -5 - 12}px)`;
    });
    section.addEventListener('mouseleave', () => {
      backs[0].style.transform = 'scale(0.95) translate(0px, -24px)';
      backs[1].style.transform = 'scale(0.98) translate(0px, -12px)';
    });
  


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

    // Pricing toggle functionality
    (function() {
      const monthlyBtn = document.getElementById('monthly-btn');
      const yearlyBtn = document.getElementById('yearly-btn');
      const slider = document.getElementById('slider-indicator');
      
      const starterPrice = document.getElementById('starter-price');
      const proPrice = document.getElementById('pro-price');
      
      let currentSelection = 'monthly';
      
      function updateSlider(selection) {
        if (selection === 'monthly') {
          slider.style.width = monthlyBtn.offsetWidth + 'px';
          slider.style.transform = 'translateX(0)';
          monthlyBtn.classList.add('text-slate-200');
          monthlyBtn.classList.remove('text-slate-300');
          yearlyBtn.classList.add('text-slate-300');
          yearlyBtn.classList.remove('text-slate-200');
          
          if (starterPrice) starterPrice.textContent = '$0';
          if (proPrice) proPrice.textContent = '$299';
        } else {
          const monthlyWidth = monthlyBtn.offsetWidth;
          slider.style.width = yearlyBtn.offsetWidth + 'px';
          slider.style.transform = `translateX(${monthlyWidth + 8}px)`;
          yearlyBtn.classList.add('text-slate-200');
          yearlyBtn.classList.remove('text-slate-300');
          monthlyBtn.classList.add('text-slate-300');
          monthlyBtn.classList.remove('text-slate-200');
          
          if (starterPrice) starterPrice.textContent = '$0';
          if (proPrice) proPrice.textContent = '$239';
        }
        currentSelection = selection;
      }
      
      monthlyBtn?.addEventListener('click', () => {
        if (currentSelection !== 'monthly') updateSlider('monthly');
      });
      
      yearlyBtn?.addEventListener('click', () => {
        if (currentSelection !== 'yearly') updateSlider('yearly');
      });
      
      setTimeout(() => updateSlider('monthly'), 100);
    })();

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
        background: radial-gradient(140px 90px at var(--x, 50%) var(--y, 50%), rgba(255,255,255,.28), rgba(255,255,255,.14) 35%, rgba(255,255,255,.06) 55%, transparent 70%), radial-gradient(40px 28px at var(--x, 50%) var(--y, 50%), rgba(255,255,255,.55), transparent 70%);
      }
      @media (prefers-reduced-motion: reduce) {
        .cursor-glow-btn .glow { transition: none; }
      }
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
      <div className="aura-background-component top-0 w-full h-screen -z-10 absolute"><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="4gq2Yrv2p0bIa0hdLPQx"></div>

</div></div>

<div className="fixed inset-0 -z-10">

<div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900/50 to-neutral-950"></div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/20 to-neutral-950"></div>

<div className="pointer-events-none absolute inset-0" style={{backgroundImage: `url('https://uploads-ssl.webflow.com/5f6d66c5f1e4a5f0c1b3b1a1/63a4d9b4b4c7d418f9ed2c73_noise.png')`, opacity: `0.3`}}></div>
</div>

<header className="fixed top-0 inset-x-0 z-40 transition animate-[slideInBlur_0.8s_ease-out_0.2s_forwards] bg-neutral-950/40 border-white/10 border-b blur-sm backdrop-blur translate-y-[-20px]">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="supports-[backdrop-filter]:bg-neutral-900/30 border-0 rounded-none mt-4 backdrop-blur-none">
<div className="flex sm:px-6 pt-0 pr-4 pb-3 pl-4 items-center justify-between">

<a className="flex items-center gap-2" href="#">
<span className="text-sm font-bold text-neutral-200 tracking-tight" style={{}}>NeuralFlow</span>
</a>

<nav className="hidden md:flex gap-8 flex sm:px-6 bg-neutral-900/40 border-[#ffffff]/10 border rounded-full pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<a className="transition hover:text-neutral-100 text-sm font-normal text-neutral-300/80" href="#process" style={{}}>Process</a>
<a className="text-sm font-normal transition text-neutral-300/80 hover:text-neutral-100" href="#clients" style={{}}>Clients</a>
<a className="text-sm font-normal transition text-neutral-300/80 hover:text-neutral-100" href="#pricing" style={{}}>Pricing</a>
<a className="text-sm font-normal transition text-neutral-300/80 hover:text-neutral-100" href="#faq" style={{}}>FAQ</a>
<a className="text-sm font-normal transition text-neutral-300/80 hover:text-neutral-100" href="#contact" style={{}}>Contact</a>
</nav>

<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] transition border-white/10 bg-neutral-900/60 text-neutral-100 hover:bg-neutral-800/60" href="#contact" style={{}}>
<svg className="lucide lucide-rocket h-4 w-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
              Start Free Trial
            </a>
<button className="inline-flex md:hidden items-center justify-center h-9 w-9 rounded-full border border-white/10 bg-neutral-900/60 hover:bg-neutral-800/60">
<svg className="lucide lucide-menu h-5 w-5 text-neutral-200" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>
</div>
</header>

<main className="relative">
<section className="max-w-7xl sm:pt-44 md:pt-48 md:pb-32 mr-auto ml-auto pt-40 pr-6 pb-24 pl-6">
<div className="flex flex-col text-center space-y-6 items-center">

<div className="relative animate-[scaleInBlur_1.2s_ease-out_0.6s_forwards] mb-8 blur-lg scale-50">
<div className="absolute -inset-8 bg-[radial-gradient(closest-side,rgba(120,120,255,0.18),transparent)] blur-2xl"></div>
<div className="relative h-14 w-14 ring-1 shadow-[0_0_40px_-10px_rgba(120,120,255,0.4),inset_0_1px_0_0_rgba(255,255,255,0.06)] flex ring-white/10 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/af757665-5346-4907-89cf-3b2b013be82e_320w.jpg)] bg-cover rounded-2xl items-center justify-center">
</div>
</div>

<div className="mb-6 opacity-0 translate-y-4 blur-sm animate-[slideInBlur_0.8s_ease-out_0.8s_forwards]">
<span className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] border-white/10 bg-neutral-900/50 text-neutral-300" style={{}}>
<span className="h-1.5 w-1.5 rounded-full shadow-[0_0_0_3px_rgba(16,185,129,0.15)] bg-emerald-400/80"></span>
            AI-Powered Business Intelligence
          </span>
</div>

<h1 className="max-w-4xl text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[0.95] text-transparent bg-clip-text bg-gradient-to-b font-semibold opacity-0 translate-y-8 blur-sm animate-[slideInBlur_1s_ease-out_1s_forwards] from-neutral-100 via-neutral-200 to-neutral-400/90">
<span className="block" style={{}}>Transform Your</span>
<span className="block">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-400/80" style={{}}>Business Operations</span>
<span className="bg-clip-text italic font-['Playfair_Display']" style={{}}>Intelligently</span>
</span>
</h1>

<p className="max-w-2xl sm:text-lg animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] text-base text-neutral-300/80 opacity-0 mt-6 blur-sm translate-y-6" style={{}}>
          Harness the power of AI to streamline workflows, optimize performance, and unlock intelligent automation across every touchpoint of your business ecosystem.
        </p>

<div className="overflow-hidden pt-8 pr-8 pb-8 pl-8">
<div className="relative inline-block group">
<button className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] relative z-10 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-[transform] duration-150 ease-out active:scale-[0.98] text-white bg-neutral-900/60 border-white/20 border rounded-xl pt-3 pr-6 pb-3 pl-6" onMouseEnter={(e) => { e.currentTarget.style.setProperty('--o','1') }} onMouseLeave={(e) => { e.currentTarget.style.setProperty('--o','0') }} onMouseMove={(e) => { btnMove(event) }} style={{'--x': `199.8125px`, '--y': `7.5px`, '--o': `0`}}>
<span className="relative z-10 inline-flex items-center gap-2 font-semibold" style={{}}>Book A Free Call<svg className="h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path className="" d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg></span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0"></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10" style={{transform: `scale(0.95) translate(0px, -24px)`}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: `radial-gradient(60% 100% at 50% 50%, rgba(255,255,255,.55), rgba(255,255,255,.28) 35%, transparent 70%)`, filter: `blur(10px) saturate(120%)`}}></span>
</div>
</div>

<div className="mt-14 flex items-center gap-6 opacity-0 translate-y-4 blur-sm animate-[slideInBlur_0.8s_ease-out_1.6s_forwards] text-neutral-400">
<a className="group" href="#">
<svg className="lucide lucide-linkedin h-5 w-5 group-hover:text-neutral-200 transition" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="group" href="#">
<svg className="lucide lucide-github h-5 w-5 group-hover:text-neutral-200 transition" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="group" href="#">
<svg className="lucide lucide-youtube h-5 w-5 group-hover:text-neutral-200 transition" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
</div>
</section>
</main>

<section className="w-full max-w-7xl sm:px-6 lg:px-8 md:py-20 mr-auto ml-auto pt-14 pr-4 pb-14 pl-4" id="process">

<div className="flex mt-6 mb-6 items-center justify-center scroll-fade visible">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full pt-1 pr-3 pb-1 pl-3 text-slate-300/80 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all" style={{}}>
<svg className="lucide lucide-waypoints h-3.5 w-3.5 text-cyan-300" data-lucide="waypoints" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="4.5" r="2.5"></circle><path d="m10.2 6.3-3.9 3.9"></path><circle cx="4.5" cy="12" r="2.5"></circle><path d="M7 12h10"></path><circle cx="19.5" cy="12" r="2.5"></circle><path d="m13.8 17.7 3.9-3.9"></path><circle cx="12" cy="19.5" r="2.5"></circle></svg>
        How We Transform Your Business
      </span>
</div>

<div className="max-w-3xl scroll-fade scroll-fade-delay text-center mr-auto ml-auto visible">
<h1 className="md:text-6xl text-4xl font-semibold tracking-tight text-slate-50" style={{}}>
        Our Proven & <span className="bg-clip-text italic font-['Playfair_Display'] bg-gradient-to-r from-slate-200 via-cyan-300 to-indigo-300" style={{}}>Intelligent</span> Approach
      </h1>
<p className="md:text-lg text-base text-slate-400 mt-4" style={{}}>From analysis to implementation everything you need to automate, optimize, and scale your operations.</p>
</div>

<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

<article className="relative overflow-hidden rounded-2xl ring-1 p-6 md:p-8 min-h-[20rem] md:min-h-[22rem] scroll-fade scroll-fade-delay-2 bg-white/5 ring-white/10 hover:bg-white/[0.08] hover:ring-white/20 transition-all group visible">
<div className="absolute inset-0 bg-gradient-to-br via-transparent to-transparent from-white/5"></div>
<div className="absolute -top-12 -right-10 h-48 w-48 rounded-full blur-2xl bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-all"></div>

<div className="grid gap-3 sm:gap-4">

<div className="flex items-center justify-between rounded-xl border px-4 py-3 backdrop-blur-sm border-white/10 bg-black/30 hover:bg-black/40 transition-all">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 bg-gradient-to-br from-slate-400/20 to-slate-600/10 ring-white/10 ring-1 rounded-lg items-center justify-center">
<svg className="lucide lucide-mail w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<p className="text-sm font-medium text-slate-200" style={{}}>Email automation</p>
<p className="text-xs text-slate-400" style={{}}>Smart personalization & timing</p>
</div>
</div>
<button className="relative h-6 w-10 transition-all duration-300 hover:bg-cyan-500/60 bg-cyan-500/40 ring-cyan-400/40 ring-1 rounded-full">
<span className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full transition-all duration-300 translate-x-4 bg-white/90"></span>
</button>
</div>

<div className="flex items-center justify-between rounded-xl border px-4 py-3 backdrop-blur-sm border-white/10 bg-black/30 hover:bg-black/40 transition-all">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 bg-gradient-to-br from-slate-400/20 to-slate-600/10 ring-white/10 ring-1 rounded-lg items-center justify-center">
<svg className="lucide lucide-users w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="">
<p className="text-sm font-medium text-slate-200" style={{}}>Customer journey mapping</p>
<p className="text-xs text-slate-400" style={{}}>AI-driven experience optimization</p>
</div>
</div>
<button className="relative h-6 w-10 transition-all duration-300 hover:bg-cyan-500/60 bg-cyan-500/40 ring-cyan-400/40 ring-1 rounded-full">
<span className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full transition-all duration-300 translate-x-4 bg-white/90"></span>
</button>
</div>

<div className="flex items-center justify-between rounded-xl border px-4 py-3 backdrop-blur-sm border-white/10 bg-white/5 hover:bg-white/[0.08] transition-all">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 bg-gradient-to-br from-slate-400/20 to-slate-600/10 ring-white/10 ring-1 rounded-lg items-center justify-center">
<svg className="lucide lucide-credit-card h-4 w-4 text-slate-300/70" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="">
<p className="text-sm font-medium text-slate-300/80" style={{}}>Advanced analytics</p>
<p className="text-xs text-slate-500" style={{}}>Real-time performance insights</p>
</div>
</div>
<button className="relative h-6 w-10 rounded-full ring-1 cursor-not-allowed bg-white/10 ring-white/10" disabled>
<span className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white/40"></span>
</button>
</div>
</div>

<div className="mt-6 md:mt-10 max-w-md">
<h3 className="text-lg md:text-xl font-semibold tracking-tight text-slate-100" style={{}}>Smart Process Automation</h3>
<p className="mt-1 text-sm text-slate-400" style={{}}>
            Transform manual workflows into intelligent processes that learn, adapt, and continuously improve performance.
          </p>
</div>
</article>

<article className="relative overflow-hidden min-h-[20rem] md:min-h-[22rem] scroll-fade scroll-fade-delay-3 hover:bg-white/[0.08] hover:ring-white/20 transition-all group bg-white/5 ring-white/10 ring-1 rounded-2xl pt-0 pr-0 pb-0 pl-0 visible">
<div className="absolute inset-0 group-hover:bg-[radial-gradient(40%_40%_at_50%_50%,rgba(99,102,241,0.30),transparent_60%)] transition-all"></div>
<div className="p-6 md:p-8">
<h3 className="text-lg md:text-xl font-semibold tracking-tight text-slate-100" style={{}}>AI Workflow Orchestration</h3>
<p className="mt-1 text-sm max-w-lg text-slate-400" style={{}}>
            Orchestrate complex business processes with AI that understands context, predicts outcomes, and makes intelligent decisions across your entire technology ecosystem.
          </p>
</div>

<div className="pointer-events-none overflow-visible absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(59,130,246,0.25),transparent_60%)] blur-2xl">
</div>

<div className="relative h-72 sm:h-80 md:h-[22rem] overflow-visible">

<div className="absolute inset-0"></div>

<div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

<div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/20 animate-pulse" style={{animationDelay: `0s`}}></div>

<div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-pulse" style={{animationDelay: `.6s`}}></div>

<div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-pulse" style={{animationDelay: `1.2s`}}></div>

<div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-pulse" style={{animationDelay: `1.8s`}}></div>
<div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-pulse" style={{animationDelay: `2.4s`}}></div>
<div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/15 animate-pulse" style={{animationDelay: `3s`}}></div>
</div>

<div className="absolute left-1/2 top-1/2 hidden sm:block" style={{transform: `translate(-50%, -50%) rotate(-20deg) translateX(120px)`}}>
<div className="h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300/80 backdrop-blur-sm flex hover:border-white/20 hover:text-slate-200 transition" style={{transform: `rotate(20deg)`}}>
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
</div>
<div className="absolute left-1/2 top-1/2 hidden md:block" style={{transform: `translate(-50%, -50%) rotate(50deg) translateX(120px)`}}>
<div className="h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300/80 backdrop-blur-sm flex hover:border-white/20 hover:text-slate-200 transition" style={{transform: `rotate(-50deg)`}}>
<svg className="lucide lucide-figma w-[16px] h-[16px]" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `16px`, height: `16px`, color: `rgb(226, 232, 240)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
</div>
</div>
<div className="absolute left-1/2 top-1/2 hidden sm:block" style={{transform: `translate(-50%, -50%) rotate(140deg) translateX(120px)`}}>
<div className="h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300/80 backdrop-blur-sm flex hover:border-white/20 hover:text-slate-200 transition" style={{transform: `rotate(-140deg)`}}>
<svg className="lucide lucide-square-user h-4 w-4" data-lucide="square-user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><circle cx="12" cy="10" r="3"></circle><path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"></path></svg>
</div>
</div>
<div className="absolute left-1/2 top-1/2 hidden md:block" style={{transform: `translate(-50%, -50%) rotate(220deg) translateX(120px)`}}>
<div className="h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300/80 backdrop-blur-sm flex hover:border-white/20 hover:text-slate-200 transition" style={{transform: `rotate(-220deg)`}}>
<svg className="lucide lucide-notebook h-4 w-4" data-lucide="notebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6h4"></path><path d="M2 10h4"></path><path d="M2 14h4"></path><path d="M2 18h4"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect><path d="M16 2v20"></path></svg>
</div>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
<div className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-2xl transition-all duration-500 group-hover:scale-110">
</div>
<div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(2,6,23,0.75)] ring-1 ring-blue-400/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-105 sm:h-32 sm:w-32">
<svg aria-hidden="true" className="md:w-14 md:h-14 w-[36px] h-[36px]" strokeWidth="2" style={{width: `36px`, height: `36px`}} viewBox="0 0 48 48">
<path className="" d="M24 8 L40 36 H8 Z" fill="currentColor"></path>
</svg>
<div className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_40px_6px_rgba(59,130,246,0.25)]">
</div>
</div>
</div>

<div className="absolute left-1/2 top-1/2 hidden sm:block" style={{transform: `translate(-50%, -50%) rotate(270deg) translateX(120px)`}}>
<div className="items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-300/80 backdrop-blur-sm flex hover:border-white/20 hover:text-slate-200 transition" style={{transform: `rotate(-270deg)`}}>
<svg className="lucide lucide-layers h-4 w-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
</div>
</div>
</article>
</div>

<div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

<article className="relative overflow-hidden min-h-[15rem] md:min-h-[16rem] scroll-fade scroll-fade-delay hover:bg-white/[0.08] hover:ring-white/20 transition-all group ring-white/10 ring-1 visible bg-white/5 rounded-2xl pt-0 pr-0 pb-4 pl-0">

<div className="absolute inset-x-[-12px] top-[-8px] bottom-[-8px] bg-white/[0.02] ring-1 ring-white/5 rounded-2xl pointer-events-none opacity-60"></div>

<div className="absolute inset-x-[-6px] top-[-4px] bottom-[-4px] bg-white/[0.03] ring-1 ring-white/8 rounded-2xl pointer-events-none opacity-80"></div>

<div className="relative z-10">
<div className="pt-6 pr-6 pb-6 pl-6">
<h4 className="text-base font-semibold tracking-tight" style={{}}>Business Intelligence Discovery</h4>
<p className="mt-1 text-sm text-slate-400" style={{}}>Uncover hidden patterns and actionable insights across all your data sources with AI-powered analytics.</p>
</div>
<div className="relative overflow-visible pr-6 pl-6">

<div className="pointer-events-none absolute inset-x-8 top-[-12px] bottom-2 bg-gradient-to-b from-white/5 to-transparent/20 opacity-0 mix-blend-normal ring-neutral-50/5 ring-1 rounded-xl blur-none scale-95 invisible"></div>

<div className="pointer-events-none absolute inset-x-6 top-[-6px] bottom-1 blur-[1px] opacity-0 mix-blend-normal ring-1 rounded-xl mt-4 mb-4 scale-[0.97] invisible"></div>

<div className="pointer-events-none absolute inset-x-3 top-0 bottom-0 ring-white/10 ring-1 bg-gradient-to-b from-[#ffffff]/20 to-black/0 rounded-2xl mt-3 mb-3"></div>


<section className="relative max-w-3xl mr-auto ml-auto pt-2 pr-0 pb-0 pl-0">


<div className="shadow-[0_24px_90px_-20px_rgba(0,0,0,0.7)] bg-white/10 border-white/20 border-2 rounded-2xl mt-6 mb-6 backdrop-blur-xl">
<div className="sm:p-6 pt-6 pr-6 pb-6 pl-6 shadow-sm backdrop-blur-none">

<label className="block">
<div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3">

<svg className="h-5 w-5 text-white/70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="7"></circle>
<path d="M21 21l-4.3-4.3"></path>
</svg>
<input className="w-full bg-transparent placeholder:text-white/60 focus:outline-none text-white" placeholder="Discover growth opportunities..." type="text" />
</div>
</label>

<div className="mt-4 space-y-3">
<button className="group flex w-full items-center justify-between rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-left hover:bg-white/20 transition">
<span className="flex items-center gap-3">

<svg className="w-[20px] h-[20px] text-neutral-50" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="2" style={{width: `20px`, height: `20px`}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 17l6-6 4 4 8-8"></path>
</svg>
<span className="text-white" style={{}}>Revenue optimization insights</span>
</span>
<span className="text-sm text-white/70" style={{}}>Analytics</span>
</button>
<button className="group flex w-full items-center justify-between rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-left hover:bg-white/20 transition">
<span className="flex items-center gap-3">

<svg className="w-[20px] h-[20px] text-neutral-50" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="2" style={{width: `20px`, height: `20px`}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="7" r="4"></circle>
<path className="" d="M5.5 21a7.5 7.5 0 0 1 13 0"></path>
</svg>
<span className="text-white" style={{}}>Customer behavior analysis</span>
</span>
<span className="text-sm text-white/70" style={{}}>Reports</span>
</button>
</div>
</div>
</div></section>


</div>
</div></article>

<article className="relative overflow-hidden min-h-[15rem] md:min-h-[16rem] scroll-fade scroll-fade-delay-2 ring-1 rounded-2xl bg-white/5 ring-white/10 hover:bg-white/[0.08] hover:ring-white/20 transition-all group visible">
<div className="flex pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<h4 className="text-base font-semibold tracking-tight" style={{}}>Custom AI Agent Development</h4>
<span className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] border-white/10 bg-white/5 text-slate-300" style={{}}>
<svg className="lucide lucide-cpu h-3.5 w-3.5 text-cyan-300" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
            AI-Powered
          </span>
</div>
<div className="pr-6 pb-6 pl-6">
<div className="relative mt-6 mb-4">
<div className="hover:bg-black/50 transition-all bg-black/60 border-white/10 border rounded-xl pt-3 pr-3 pb-3 pl-3 backdrop-blur">
<div className="flex gap-1 mb-2 items-center">
<span className="h-2.5 w-2.5 rounded-full bg-rose-400/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
</div>
<div className="overflow-x-auto">
<pre className="text-[10px] sm:text-[11px] md:text-[12px] leading-tight sm:leading-5 min-w-max text-slate-300"><code className="" style={{}}># AI Business Automation Agent
class BusinessAgent:
  def __init__(self, business_context):
    self.context = business_context
    self.learning_mode = "adaptive"
    self.optimization_level = "enterprise"

  def analyze_workflow(self, process_data):
    insights = self.ai_analysis(process_data)
    return self.generate_optimizations(insights)

  def execute_automation(self, workflow):
    return self.smart_execution(workflow)

</code></pre>
</div>
</div>
</div>
</div>
</article>

<article className="relative overflow-hidden min-h-[15rem] md:min-h-[16rem] scroll-fade scroll-fade-delay-3 hover:bg-white/[0.08] hover:ring-white/20 transition-all group bg-white/5 ring-white/10 ring-1 rounded-2xl visible">
<div className="absolute inset-0 group-hover:bg-[radial-gradient(50%_50%_at_50%_50%,rgba(59,130,246,0.08),transparent_60%)] transition-all blur-sm"></div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<h4 className="text-base font-semibold tracking-tight text-slate-100" style={{}}>Real-Time Process Monitoring</h4>
<div className="flex items-center gap-1">
<div className="h-2 w-2 rounded-full bg-emerald-400/60 animate-pulse"></div>
<span className="text-xs text-slate-400" style={{}}>Live</span>
</div>
</div>
<p className="text-sm text-slate-400" style={{}}>Monitor intelligent workflows in real-time with advanced analytics and predictive insights.</p>
</div>
<div className="relative mx-auto px-6">
<div className="relative h-40 w-full max-w-sm mx-auto group">

<div className="absolute left-12 top-1/2 h-px w-20 -translate-y-1/2 bg-gradient-to-r from-[#ffffff] to-[#ffffff]/5"></div>
<div className="absolute right-12 top-1/2 h-px w-20 -translate-y-1/2 bg-gradient-to-l from-[#ffffff] to-[#ffffff]/5"></div>

<div className="absolute left-4 top-1/2 -translate-y-1/2">
<div className="h-12 w-12 flex ring-white/10 ring-1 bg-black/40 rounded-full items-center justify-center">
<svg className="lucide lucide-play lucide-message-circle-question w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `24px`, height: `24px`, color: `rgb(203, 213, 225)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-400 whitespace-nowrap" style={{}}>Initiate</div>
</div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 perspective-[1000px]">
<div className="flex h-14 w-14 hover:from-cyan-500/40 hover:to-blue-600/30 transition-all group/node cursor-pointer ring-white-400/50 ring-1 group-hover:rotate-y-10 group-hover:rotate-x-5 duration-700 ease-out transform-style-preserve-3d bg-gradient-to-br from-cyan-500/30 to-blue-600/20 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/11dcbbda-ccca-43b6-9524-e205dbeae5f7_320w.jpg)] bg-cover rounded-full items-center justify-center" style={{transform: `rotateY(0deg) rotateX(0deg)`}}>
</div>
<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-400 whitespace-nowrap" style={{}}>Process</div>
</div>
<div className="absolute right-4 top-1/2 -translate-y-1/2">
<div className="h-12 w-12 flex bg-black/40 ring-white/10 ring-1 rounded-full items-center justify-center">
<svg className="group-hover/node:scale-110 transition-transform w-[20px] h-[20px] text-neutral-50" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-400 whitespace-nowrap" style={{}}>Complete</div>
</div>
</div>
</div>
<div className="px-6 pb-6">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<div className="flex items-center gap-1">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></div>
<span className="text-slate-400" style={{}}>Active: 12</span>
</div>
<div className="flex items-center gap-1">
<div className="h-1.5 w-1.5 rounded-full bg-cyan-400/80"></div>
<span className="text-slate-400" style={{}}>Optimizing: 3</span>
</div>
</div>
<span className="text-slate-500" style={{}}>Updated 30s ago</span>
</div>
</div>
</article>
</div>
</section>

<section className="w-full max-w-7xl sm:px-6 lg:px-8 md:py-20 mr-auto ml-auto pt-14 pr-4 pb-14 pl-4" id="clients">

<div className="flex items-center justify-center scroll-fade visible">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full px-3 py-1 text-slate-300/80 bg-white/5 border-white/10" style={{}}>
<svg className="lucide lucide-users h-3.5 w-3.5 text-cyan-300" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
        Client Success Stories
      </span>
</div>

<div className="max-w-3xl text-center mt-6 mr-auto ml-auto scroll-fade scroll-fade-delay visible">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-50" style={{}}>
        Transformative Results That <span className="bg-clip-text italic font-['Playfair_Display'] bg-gradient-to-r from-slate-200 via-cyan-300 to-indigo-300" style={{}}>Inspire</span>
</h1>
<p className="mt-4 text-base md:text-lg text-slate-400" style={{}}>
        Discover how leading businesses achieve extraordinary results through intelligent automation
      </p>
</div>

<div className="relative group mt-12 scroll-fade scroll-fade-delay-2 visible">

<div className="pointer-events-none absolute inset-x-6 -top-24 h-[14rem] md:h-[16rem] shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[0.96] group-hover:blur-sm group-hover:brightness-50 ring-white/10 ring-1 bg-neutral-900/25 opacity-20 border-white/10 border rounded-2xl blur-none backdrop-blur-sm brightness-100" style={{animation: `float-gentle-back 6s ease-in-out infinite`}}>
<div className="flex md:px-5 opacity-80 border-white/10 border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="inline-flex gap-2 text-slate-300 opacity-80 items-center">
<div className="flex h-6 w-6 ring-1 rounded-lg items-center justify-center bg-black/40 ring-white/10">
<svg className="lucide lucide-user w-[14px] h-[14px] text-slate-300" data-lucide="user" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full ring-1 bg-white/20 ring-white/10"></span>
<span className="h-2 w-2 rounded-full ring-1 bg-white/20 ring-white/10"></span>
<span className="h-2 w-2 rounded-full ring-1 bg-white/20 ring-white/10"></span>
</div>
</div>
</div>
<div className="pointer-events-none absolute inset-x-4 -top-16 h-[14.5rem] md:h-[17rem] shadow-[0_6px_25px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out group-hover:-translate-y-4 group-hover:scale-[0.98] group-hover:blur-sm group-hover:brightness-50 ring-white/10 ring-1 bg-neutral-900/35 opacity-60 border-white/10 border rounded-2xl blur-none backdrop-blur-sm brightness-100" style={{animation: `float-gentle-middle 6s ease-in-out infinite 2s`}}>
<div className="flex md:px-5 border-white/10 border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="inline-flex gap-2 text-slate-300 items-center">
<div className="flex h-6 w-6 ring-1 rounded-lg items-center justify-center bg-black/40 ring-white/10">
<svg className="lucide lucide-user w-[14px] h-[14px] text-slate-300" data-lucide="user" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full ring-1 bg-white/20 ring-white/10"></span>
<span className="h-2 w-2 rounded-full ring-1 bg-white/20 ring-white/10"></span>
<span className="h-2 w-2 rounded-full ring-1 bg-white/20 ring-white/10"></span>
</div>
</div>
</div>

<div className="relative z-10 transition-all duration-500 ease-out group-hover:-translate-y-6 group-hover:scale-[1.03] group-hover:brightness-110 group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)] bg-neutral-900/60 border-white/10 border ring-white/10 ring-1 rounded-2xl mt-40 mb-40 backdrop-blur-xl">
<div className="flex md:px-5 border-white/10 border-b pt-3 pr-4 pb-3 pl-4 backdrop-blur-sm items-center justify-between">
<div className="inline-flex gap-2 text-slate-300 items-center">
<div className="flex h-6 w-6 bg-black/60 ring-white/20 ring-1 rounded-lg items-center justify-center backdrop-blur">
<svg className="lucide lucide-building-2 w-[14px] h-[14px] text-slate-300" data-lucide="building-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</div>
</div>
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full ring-1 bg-emerald-400/80 ring-emerald-400/20"></span>
<span className="h-2 w-2 rounded-full ring-1 bg-cyan-400/80 ring-cyan-400/20"></span>
<span className="h-2 w-2 rounded-full ring-1 bg-blue-400/80 ring-blue-400/20"></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:p-8 bg-gradient-to-br from-white/[0.05] to-white/[0.02] pt-5 pr-5 pb-5 pl-5 backdrop-blur-md">

<div className="space-y-6">
<h3 className="md:text-3xl text-2xl font-semibold tracking-tight text-slate-100" style={{}}>TechCorp's Digital Transformation</h3>
<p className="mt-2 text-sm md:text-base text-slate-400" style={{}}>
              Sarah Chen, CTO at TechCorp, leveraged our AI automation platform to revolutionize their customer support operations. By implementing intelligent chatbots and predictive analytics, they reduced response times by 75% and increased customer satisfaction scores while cutting operational costs significantly.
            </p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
<div className="rounded-xl border px-5 py-4 bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30 transition-all backdrop-blur-sm">
<div className="md:text-3xl text-2xl font-semibold text-neutral-50 tracking-tight" style={{}}>75%</div>
<p className="mt-1 text-sm text-slate-400" style={{}}>faster response times</p>
</div>
<div className="border rounded-xl pt-4 pr-5 pb-4 pl-5 bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30 transition-all backdrop-blur-sm">
<div className="md:text-3xl text-2xl font-semibold text-neutral-50 tracking-tight" style={{}}>60%</div>
<p className="mt-1 text-sm text-slate-400" style={{}}>cost reduction</p>
</div>
</div>

<div className="rounded-xl border px-5 py-4 bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30 transition-all backdrop-blur-sm">
<div className="md:text-3xl text-2xl font-semibold text-neutral-50 tracking-tight" style={{}}>4.8/5</div>
<p className="mt-1 text-sm text-slate-400" style={{}}>customer satisfaction score</p>
</div>
</div>

<div className="flex items-center justify-center">
<div className="w-full max-w-lg rounded-xl overflow-hidden border bg-white/10 border-white/20 hover:border-white/30 transition-all backdrop-blur-sm">
<img alt="Business professional using AI automation dashboard" className="w-full h-80 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/be34e0e0-bfda-49c7-b231-b353206dd7a2_3840w.jpg" />
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl sm:px-6 lg:px-8 md:py-20 opacity-100 mr-auto ml-auto pt-14 pr-4 pb-14 pl-4">

<div className="flex items-center justify-center scroll-fade visible">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full px-3 py-1 text-slate-300/80 bg-white/5 border-white/10" style={{}}>
<svg className="lucide lucide-badge h-3.5 w-3.5 text-cyan-300" data-lucide="badge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path></svg>
        Flexible Investment Plans
      </span>
</div>

<div className="max-w-3xl text-center mx-auto mt-6 scroll-fade scroll-fade-delay visible">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-50" style={{}}>
        Choose Your <span className="bg-clip-text italic font-['Playfair_Display'] bg-gradient-to-r from-slate-200 via-cyan-300 to-indigo-300" style={{}}>Growth</span> Plan
      </h1>
<p className="mt-4 text-base md:text-lg text-slate-400" style={{}}>
        Scalable solutions designed to grow with your business ambitions
      </p>
</div>

<div className="flex mt-6 items-center justify-center scroll-fade scroll-fade-delay-2 visible">
<div className="inline-flex items-center gap-2 rounded-xl border p-1 border-white/10 bg-white/5 relative">
<div className="absolute top-1 left-1 h-[calc(100%-8px)] bg-black/40 ring-1 ring-white/10 rounded-lg transition-all duration-300 ease-out" id="slider-indicator" style={{width: `87px`, transform: `translateX(0px)`}}></div>
<button className="px-4 py-2 text-xs sm:text-sm rounded-lg tracking-wide relative z-10 transition-colors duration-200 text-slate-200" id="monthly-btn" style={{}} type="button">Monthly</button>
<button className="sm:text-sm hover:text-slate-200 relative z-10 transition-colors duration-200 text-xs text-slate-300 tracking-wide rounded-lg pt-2 pr-4 pb-2 pl-4" id="yearly-btn" style={{}} type="button">Yearly</button>
<span className="px-3 py-2 text-[11px] rounded-lg inline-flex items-center gap-1 bg-white/5 text-slate-300 relative z-10" style={{}}>
<svg className="lucide lucide-percent h-3.5 w-3.5 text-cyan-300" data-lucide="percent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
          Save 20%
        </span>
</div>
</div>

<div className="grid gap-8 lg:grid-cols-3 mt-12 mr-auto ml-auto max-w-7xl scroll-fade scroll-fade-delay-3 visible">

<div className="card-top glass-effect w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_30px_rgba(103,232,249,0.15)] hover:ring-1 hover:ring-cyan-300/20 bg-gradient-to-r from-white/15 to-white/5 rounded-[1.2em]" style={{backdropFilter: `blur(16px)`}}>
<div className="absolute inset-0 border-white/20 border rounded-[1.2em]" style={{maskImage: `linear-gradient(135deg, white, transparent 60%)`}}></div>
<div className="relative pt-8 pr-8 pb-8 pl-8">
<div className="relative">
<h3 className="text-xl font-semibold tracking-tight" style={{}}>Starter</h3>
<p className="mt-2 text-sm text-neutral-400" style={{}}>Perfect for small businesses and startups</p>
<div className="mt-6 flex items-baseline gap-2">
<span className="text-3xl tracking-tighter transition-all duration-200" id="starter-price" style={{}}>$0</span>
<span className="text-sm text-neutral-400" style={{}}>/month</span>
</div>
<ul className="mt-8 space-y-3 text-sm">
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-300" style={{}}>5 automation workflows</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-300" style={{}}>Basic AI analytics</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-300" style={{}}>Email support</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-300" style={{}}>Community access</span>
</li>
</ul>
<button className="mt-8 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white hover:bg-white/10 transition" style={{}}>
              Get Started Free
            </button>
</div>
</div>
</div>

<div className="card-top w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ring-1 ring-cyan-400/30 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 rounded-[1.2em] hover:shadow-[0_0_40px_rgba(103,232,249,0.25)] hover:ring-cyan-400/50" style={{backdropFilter: `blur(16px)`}}>
<div className="relative pt-8 pr-8 pb-8 pl-8">
<div className="relative">
<h3 className="text-xl font-semibold tracking-tight" style={{}}>Professional</h3>
<p className="mt-2 text-sm text-neutral-400" style={{}}>For growing teams and advanced automation</p>
<div className="mt-6 flex items-baseline gap-2">
<span className="text-3xl tracking-tighter transition-all duration-200" id="pro-price" style={{}}>$299</span>
<span className="text-sm text-neutral-400" style={{}}>/month</span>
</div>
<ul className="mt-8 space-y-3 text-sm">
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-300" style={{}}>Unlimited workflows</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-300" style={{}}>Advanced AI insights & predictions</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-300" style={{}}>Priority support & onboarding</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-300" style={{}}>Custom integrations</span>
</li>
</ul>
<button className="w-full hover:brightness-95 transition text-sm font-semibold text-neutral-900 bg-gradient-to-br from-cyan-300 to-indigo-300 rounded-xl mt-8 pt-3 pr-4 pb-3 pl-4" style={{}}>
              Start 14-Day Trial
            </button>
</div>
</div>
</div>

<div className="card-top glass-effect w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-r from-white/15 to-white/5 rounded-[1.2em] hover:shadow-[0_0_30px_rgba(103,232,249,0.15)] hover:ring-1 hover:ring-cyan-300/20" style={{backdropFilter: `blur(16px)`}}>
<div className="absolute inset-0 border-white/20 border rounded-[1.2em]" style={{maskImage: `linear-gradient(135deg, white, transparent 60%)`}}></div>
<div className="relative pt-8 pr-8 pb-8 pl-8">
<div className="relative">
<h3 className="text-xl font-semibold tracking-tight" style={{}}>Enterprise</h3>
<p className="mt-2 text-sm text-neutral-400" style={{}}>Custom solutions for large organizations</p>
<div className="mt-6 flex items-baseline gap-2">
<span className="text-3xl tracking-tighter transition-all duration-200" id="enterprise-price" style={{}}>Custom</span>
</div>
<ul className="mt-8 space-y-3 text-sm">
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-300" style={{}}>White-label solutions</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-300" style={{}}>Dedicated infrastructure</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-300" style={{}}>24/7 dedicated support</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-300" style={{}}>Compliance & security certifications</span>
</li>
</ul>
<button className="mt-8 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white hover:bg-white/10 transition" style={{}}>
              Contact Sales
            </button>
</div>
</div>
</div>
</div>

<div className="card-top glass-effect w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-r from-white/15 to-white/5 rounded-[1.2em] mt-12 mr-auto ml-auto max-w-7xl scroll-fade scroll-fade-delay visible" style={{backdropFilter: `blur(16px)`}}>
<div className="absolute inset-0 border-white/20 border rounded-[1.2em]" style={{maskImage: `linear-gradient(135deg, white, transparent 60%)`}}></div>
<div className="relative max-w-7xl text-center mr-auto ml-auto pt-8 pr-8 pb-8 pl-8">
<h3 className="text-lg font-semibold tracking-tight" style={{}}>Need something more specific?</h3>
<p className="mt-2 text-sm text-neutral-400" style={{}}>Custom AI agent development: Starting at $5,000 • Premium integrations: $150/month per connection</p>
<div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-neutral-500">
<span className="flex items-center gap-2" style={{}}>
<svg className="h-3 w-3 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
            No setup fees
          </span>
<span className="flex items-center gap-2" style={{}}>
<svg className="h-3 w-3 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
            Cancel anytime
          </span>
<span className="flex items-center gap-2" style={{}}>
<svg className="h-3 w-3 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
            30-day money back
          </span>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl sm:px-6 lg:px-8 md:py-20 mr-auto ml-auto pt-14 pr-4 pb-14 pl-4" id="faq">

<div className="flex items-center justify-center scroll-fade visible">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full px-3 py-1 text-slate-300/80 bg-white/5 border-white/10" style={{}}>
<svg className="lucide lucide-help-circle h-3.5 w-3.5 text-cyan-300" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
        Common Questions
      </span>
</div>

<div className="max-w-3xl text-center mx-auto mt-6 scroll-fade scroll-fade-delay visible">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-50" style={{}}>
        Everything You <span className="bg-clip-text italic font-['Playfair_Display'] bg-gradient-to-r from-slate-200 via-cyan-300 to-indigo-300" style={{}}>Need to Know</span>
</h1>
<p className="mt-4 text-base md:text-lg text-slate-400" style={{}}>
        Quick answers to help you get started with confidence
      </p>
</div>

<div className="grid gap-6 lg:grid-cols-2 mt-12">

<div className="relative overflow-hidden rounded-[1.2em] ring-1 ring-white/10 bg-white/5 hover:bg-white/10 hover:ring-white/20 transition-all self-start scroll-fade scroll-fade-delay-2 visible" style={{backdropFilter: `blur(16px)`}}>
<div className="relative p-6 md:p-8 text-center flex flex-col items-center">
<div className="h-12 w-12 flex ring-white/10 ring-1 bg-black/40 rounded-xl items-center justify-center">
<svg className="lucide lucide-message-circle-question h-6 w-6 text-slate-300" data-lucide="message-circle-question" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-100 mt-4" style={{}}>Need Personal Guidance?</h3>
<p className="mt-2 text-sm md:text-base text-slate-400 max-w-md" style={{}}>
            Our AI automation experts are here to help you find the perfect solution for your specific business needs.
          </p>
<a className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white hover:bg-white/10 transition" href="#contact" style={{}}>
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
            Schedule Consultation
          </a>
</div>
</div>

<div className="scroll-fade scroll-fade-delay-3 space-y-4 visible">

<div className="faq-item rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition">
<button className="w-full flex gap-4 focus:outline-none text-left pt-3 pr-4 pb-3 pl-4 items-center justify-between" data-faq-toggle="" type="button">
<span className="text-sm md:text-base text-slate-200 font-medium" style={{}}>How quickly can I see results with your AI automation?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-slate-300 transition-transform duration-300 rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 text-sm text-slate-400 pt-0 pr-4 pb-0 pl-4" style={{maxHeight: `84px`}}>
<div className="pb-6">
              Most clients see initial improvements within the first week of implementation. Our AI algorithms begin optimizing workflows immediately, with significant productivity gains typically visible within 30 days. Full ROI is usually achieved within 3-6 months.
            </div>
</div>
</div>
<div className="faq-item rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition">
<button className="w-full flex gap-4 focus:outline-none text-left pt-3 pr-4 pb-3 pl-4 items-center justify-between" data-faq-toggle="" type="button">
<span className="text-sm md:text-base text-slate-200 font-medium" style={{}}>What makes your AI different from other automation tools?</span>
<svg className="lucide lucide-chevron-down transition-transform duration-300 h-5 w-5 text-slate-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content px-4 pt-0 text-sm text-slate-400 overflow-hidden transition-all duration-300" style={{maxHeight: `0px`}}>
<div className="pb-6">
              Our platform uses advanced machine learning that continuously learns from your business patterns. Unlike static automation tools, our AI adapts and improves over time, providing contextual decision-making and predictive insights that traditional tools simply cannot match.
            </div>
</div>
</div>
<div className="faq-item rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition">
<button className="w-full flex gap-4 focus:outline-none text-left pt-3 pr-4 pb-3 pl-4 items-center justify-between" data-faq-toggle="" type="button">
<span className="text-sm md:text-base text-slate-200 font-medium" style={{}}>Is my business data secure with your platform?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-slate-300 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content px-4 pt-0 text-sm text-slate-400 overflow-hidden transition-all duration-300" style={{maxHeight: `0px`}}>
<div className="pb-6">
              Absolutely. We maintain enterprise-grade security with SOC 2 Type II compliance, end-to-end encryption, and GDPR compliance. Your data is encrypted at rest and in transit using AES-256 encryption. We never access or store sensitive business data without explicit permission.
            </div>
</div>
</div>
<div className="faq-item rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition">
<button className="w-full flex gap-4 focus:outline-none text-left pt-3 pr-4 pb-3 pl-4 items-center justify-between" data-faq-toggle="" type="button">
<span className="text-sm md:text-base text-slate-200 font-medium" style={{}}>Can I integrate this with my existing business tools?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-slate-300 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content px-4 pt-0 text-sm text-slate-400 overflow-hidden transition-all duration-300" style={{maxHeight: `0px`}}>
<div className="pb-6">
              Yes, we support 500+ popular integrations including CRM systems, project management tools, communication platforms, and accounting software. Our RESTful API also enables custom integrations, and our team can help build specific connections for enterprise clients.
            </div>
</div>
</div>
<div className="faq-item rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition">
<button className="w-full flex gap-4 focus:outline-none text-left pt-3 pr-4 pb-3 pl-4 items-center justify-between" data-faq-toggle="" type="button">
<span className="text-sm md:text-base text-slate-200 font-medium" style={{}}>What level of support do you provide?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-slate-300 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content px-4 pt-0 text-sm text-slate-400 overflow-hidden transition-all duration-300" style={{maxHeight: `0px`}}>
<div className="pb-6">
              We provide comprehensive support including detailed documentation, video tutorials, community forums, and email support for all plans. Professional users get priority support with guaranteed response times, while Enterprise customers receive 24/7 dedicated support with assigned success managers.
            </div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl sm:px-6 lg:px-8 md:py-20 mr-auto ml-auto pt-14 pr-4 pb-14 pl-4">
<div className="relative scroll-fade pt-20 visible">
<div className="flex items-center justify-center">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full px-3 py-1 text-slate-300/80 bg-white/5 border-white/10" style={{}}>
<svg className="lucide lucide-rocket h-3.5 w-3.5 text-cyan-300" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
          Start Your Transformation
        </span>
</div>
<div className="max-w-3xl text-center mx-auto mt-6 scroll-fade scroll-fade-delay visible">
<h2 className="md:text-6xl text-4xl font-semibold text-slate-50 tracking-tight" style={{}}>Ready to Transform</h2>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-50 mt-1" style={{}}>
          Your <span className="bg-clip-text italic font-['Playfair_Display'] bg-gradient-to-r from-slate-200 via-cyan-300 to-indigo-300" style={{}}>Business Operations?</span>
</h2>
<p className="mt-4 text-base md:text-lg text-slate-400" style={{}}>
          Book a personalized consultation and discover how AI can revolutionize your workflows
        </p>

<div className="relative inline-block group mt-6 scroll-fade scroll-fade-delay-2 visible">
<button className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] relative z-10 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-[transform] duration-150 ease-out active:scale-[0.98] text-white bg-neutral-900/60 border-white/20 border rounded-xl pt-3 pr-6 pb-3 pl-6" onMouseEnter={(e) => { e.currentTarget.style.setProperty('--o','1') }} onMouseLeave={(e) => { e.currentTarget.style.setProperty('--o','0') }} onMouseMove={(e) => { btnMove(event) }} style={{'--x': `4.8125px`, '--y': `34px`, '--o': `0`}}>
<span className="relative z-10 inline-flex items-center gap-2 font-semibold" style={{}}>Book A Free Call<svg className="h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg></span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0"></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10" style={{transform: `scale(0.95) translate(0px, -24px)`}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 -translate-x-1/2 h-6 w-52 rounded-full opacity-70 group-hover:opacity-100 transition-opacity" style={{background: `radial-gradient(60% 100% at 50% 50%, rgba(255,255,255,.45), rgba(255,255,255,.22) 35%, transparent 70%)`, filter: `blur(10px) saturate(120%)`}}></span>
</div>

<div className="mt-8 flex items-center justify-center gap-6 text-slate-400 scroll-fade scroll-fade-delay-3 visible">
<a className="group hover:text-slate-200 transition flex items-center gap-2" href="mailto:hello@neuralflow.ai" style={{}}>
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
            hello@neuralflow.ai
          </a>
<span className="h-4 w-px bg-white/10"></span>
<a className="group hover:text-slate-200 transition flex items-center gap-2" href="tel:+1234567890" style={{}}>
<svg className="lucide lucide-phone h-4 w-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
            (555) 123-4567
          </a>
</div>

<div className="relative mt-14">
<div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-6">
<span className="block mx-auto w-80 h-10 rounded-full bg-white/20 blur-2xl opacity-70"></span>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</div>
</div>

<footer className="pt-10 scroll-fade visible">
<div className="flex gap-4 flex-wrap items-center justify-between">

<a className="inline-flex items-center gap-2" href="#">
<span className="text-sm font-bold text-neutral-200 tracking-tight" style={{}}>NeuralFlow</span>
</a>

<div className="flex items-center gap-4 text-slate-400">
<a className="hover:text-slate-200 transition" href="#">
<svg className="lucide lucide-linkedin h-5 w-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="hover:text-slate-200 transition" href="#">
<svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="hover:text-slate-200 transition" href="#">
<svg className="lucide lucide-github h-5 w-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>

<nav className="flex flex-wrap gap-6 text-sm text-slate-400 mt-6">
<a className="hover:text-slate-200 transition" href="#process" style={{}}>Process</a>
<a className="hover:text-slate-200 transition" href="#clients" style={{}}>Clients</a>
<a className="hover:text-slate-200 transition" href="#pricing" style={{}}>Pricing</a>
<a className="hover:text-slate-200 transition" href="#faq" style={{}}>FAQ</a>
<a className="hover:text-slate-200 transition" href="#contact" style={{}}>Contact</a>
<a className="hover:text-slate-200 transition" href="#" style={{}}>Privacy</a>
<a className="hover:text-slate-200 transition" href="#" style={{}}>Terms</a>
</nav>

<div className="mt-8 flex items-center justify-between text-xs text-slate-500 flex-wrap gap-4">
<span style={{}}>© 2025 NeuralFlow. All rights reserved.</span>
<span style={{}}>Powered by Advanced AI Technology</span>
</div>
</footer>
</section>



    </>
  );
}
