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
theme: {
extend: {
colors: {
bg: {
DEFAULT: '#050505',
surface: '#121212',
navy: '#001e2f',
card: '#0A0A0A'
},
brand: {
blue: '#0091FF',
gold: '#FFC800',
cyan: '#00E5FF'
},
txt: {
main: '#FFFFFF',
muted: '#A1A1AA',
dim: '#52525B'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
animation: {
'scroll-left': 'scroll-left 30s linear infinite',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
'scroll-left': {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
'float': {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


      // Initialize Lucide Icons
      lucide.createIcons();

      // Scroll Reveal Observer
      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = {
              threshold: 0.1,
              rootMargin: "0px 0px -50px 0px"
          };

          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('is-visible');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          const revealElements = document.querySelectorAll('.reveal-on-scroll');
          revealElements.forEach(el => observer.observe(el));
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 brightness-75" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="1bY8o6HVTI1oxJxuCJEG"></div>

</div>

<nav className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<a className="block hover:opacity-80 transition-opacity" href="#">


<img alt="SVEA Freelance Logo" className="h-10 w-auto object-contain" src="https://placehold.co/160x50/000000/0091FF?text=SVEA+Freelance"/>
</a>
<div className="hidden md:flex items-center gap-8 text-base text-txt-muted">
<a className="hover:text-brand-blue transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-brand-blue transition-colors" href="#process">
            Process
          </a>
<a className="hover:text-brand-blue transition-colors" href="#testimonials">
            Reviews
          </a>
<a className="bg-white text-black px-6 py-2.5 rounded-full font-medium hover:bg-brand-gold hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]" href="#booking">
            Start Project
          </a>
</div>
<button className="md:hidden text-white hover:text-brand-gold transition-colors">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 overflow-hidden">

<div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none animate-pulse-slow"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-5xl mx-auto space-y-10 reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-sm font-medium tracking-wide backdrop-blur-md hover:border-brand-cyan/50 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
</span>
          ACCEPTING Q4 PROJECTS
        </div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white leading-[0.95]">
          Tech-First
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-cyan to-white">
            Freelance Partner
          </span>
</h1>
<p className="text-xl md:text-2xl text-txt-muted max-w-2xl mx-auto font-light leading-relaxed">
          Elite development and growth infrastructure for modern brands.
          <br className="hidden md:block"/>
          We build what agencies can't, faster than in-house teams.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mt-8">
<a className="group w-full sm:w-auto bg-brand-blue text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-brand-blue/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,145,255,0.3)] hover:shadow-[0_0_50px_rgba(0,145,255,0.5)]" href="#booking">
            Book Strategy Call
            <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 rounded-lg font-medium text-white border border-white/10 hover:border-brand-gold hover:text-brand-gold hover:bg-brand-gold/5 transition-all duration-300" href="#services">
            Explore Services
          </a>
</div>

<div className="pt-12 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/5 w-full max-w-4xl mx-auto mt-12 bg-white/5 rounded-2xl py-8 backdrop-blur-sm">
<div className="text-center">
<p className="text-4xl font-semibold text-white tracking-tight">100+</p>
<p className="text-sm text-txt-muted uppercase tracking-wider font-medium mt-1">
              Customers
            </p>
</div>
<div className="text-center">
<p className="text-4xl font-semibold text-brand-gold tracking-tight">
              $50M+
            </p>
<p className="text-sm text-txt-muted uppercase tracking-wider font-medium mt-1">
              Revenue Generated
            </p>
</div>
<div className="text-center">
<p className="text-4xl font-semibold text-brand-cyan tracking-tight">
              4.9/5
            </p>
<p className="text-sm text-txt-muted uppercase tracking-wider font-medium mt-1">
              Avg. Rating
            </p>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/20 hover:text-white transition-colors cursor-pointer">
<i className="w-6 h-6" data-lucide="chevrons-down" strokeWidth="1.5"></i>
</div>
</section>


<section className="py-12 border-y border-white/5 bg-bg-surface overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-r from-bg-surface via-transparent to-bg-surface z-10 pointer-events-none"></div>
<div className="flex w-max animate-scroll-left">

<div className="flex gap-16 items-center px-8">
<div className="flex items-center gap-3 text-[#635BFF] group">
<i className="w-8 h-8" data-lucide="credit-card" strokeWidth="1.5"></i>
<span className="text-2xl font-semibold tracking-tight text-white group-hover:text-[#635BFF] transition-colors">
              Stripe
            </span>
</div>
<div className="flex items-center gap-3 text-[#95BF47] group">
<i className="w-8 h-8" data-lucide="shopping-bag" strokeWidth="1.5"></i>
<span className="text-2xl font-semibold tracking-tight text-white group-hover:text-[#95BF47] transition-colors">
              Shopify
            </span>
</div>
<div className="flex items-center gap-3 text-[#F24E1E] group">
<i className="w-8 h-8" data-lucide="palette" strokeWidth="1.5"></i>
<span className="text-2xl font-semibold tracking-tight text-white group-hover:text-[#F24E1E] transition-colors">
              Figma
            </span>
</div>
<div className="flex items-center gap-3 text-[#146EF5] group">
<i className="w-8 h-8" data-lucide="layers" strokeWidth="1.5"></i>
<span className="text-2xl font-semibold tracking-tight text-white group-hover:text-[#146EF5] transition-colors">
              Webflow
            </span>
</div>
<div className="flex items-center gap-3 text-[#0055FF] group">
<i className="w-8 h-8" data-lucide="layout" strokeWidth="1.5"></i>
<span className="text-2xl font-semibold tracking-tight text-white group-hover:text-[#0055FF] transition-colors">
              Framer
            </span>
</div>
<div className="flex items-center gap-3 text-[#10A37F] group">
<i className="w-8 h-8" data-lucide="bot" strokeWidth="1.5"></i>
<span className="text-2xl font-semibold tracking-tight text-white group-hover:text-[#10A37F] transition-colors">
              OpenAI
            </span>
</div>
<div className="flex items-center gap-3 text-white group">
<i className="w-8 h-8" data-lucide="file-text" strokeWidth="1.5"></i>
<span className="text-2xl font-semibold tracking-tight text-white group-hover:text-txt-muted transition-colors">
              Notion
            </span>
</div>
</div>

<div aria-hidden="true" className="flex gap-16 items-center px-8">
<div className="flex items-center gap-3 text-[#635BFF] group">
<i className="w-8 h-8" data-lucide="credit-card" strokeWidth="1.5"></i>
<span className="text-2xl font-semibold tracking-tight text-white group-hover:text-[#635BFF] transition-colors">
              Stripe
            </span>
</div>
<div className="flex items-center gap-3 text-[#95BF47] group">
<i className="w-8 h-8" data-lucide="shopping-bag" strokeWidth="1.5"></i>
<span className="text-2xl font-semibold tracking-tight text-white group-hover:text-[#95BF47] transition-colors">
              Shopify
            </span>
</div>
<div className="flex items-center gap-3 text-[#F24E1E] group">
<i className="w-8 h-8" data-lucide="palette" strokeWidth="1.5"></i>
<span className="text-2xl font-semibold tracking-tight text-white group-hover:text-[#F24E1E] transition-colors">
              Figma
            </span>
</div>
<div className="flex items-center gap-3 text-[#146EF5] group">
<i className="w-8 h-8" data-lucide="layers" strokeWidth="1.5"></i>
<span className="text-2xl font-semibold tracking-tight text-white group-hover:text-[#146EF5] transition-colors">
              Webflow
            </span>
</div>
<div className="flex items-center gap-3 text-[#0055FF] group">
<i className="w-8 h-8" data-lucide="layout" strokeWidth="1.5"></i>
<span className="text-2xl font-semibold tracking-tight text-white group-hover:text-[#0055FF] transition-colors">
              Framer
            </span>
</div>
<div className="flex items-center gap-3 text-[#10A37F] group">
<i className="w-8 h-8" data-lucide="bot" strokeWidth="1.5"></i>
<span className="text-2xl font-semibold tracking-tight text-white group-hover:text-[#10A37F] transition-colors">
              OpenAI
            </span>
</div>
<div className="flex items-center gap-3 text-white group">
<i className="w-8 h-8" data-lucide="file-text" strokeWidth="1.5"></i>
<span className="text-2xl font-semibold tracking-tight text-white group-hover:text-txt-muted transition-colors">
              Notion
            </span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-bg relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
<div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
              Our Expertise
            </h2>
<p className="text-xl text-txt-muted max-w-lg">
              Hover over a card to see the technical details.
            </p>
</div>
<div className="hidden md:block text-right">
<p className="text-base text-brand-gold font-medium uppercase tracking-wider">
              Tech Stack
            </p>
<p className="text-sm text-txt-dim mt-1">Updated Q4 2023</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group h-80 perspective-1000 reveal-on-scroll">
<div className="relative h-full w-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">

<div className="absolute inset-0 backface-hidden bg-bg-surface border border-white/5 rounded-2xl p-8 flex flex-col justify-between hover:border-brand-blue/50 transition-colors">
<div>
<div className="w-14 h-14 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-6 text-brand-blue border border-brand-blue/20">
<i className="w-7 h-7" data-lucide="bot" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium text-white">AI Automation</h3>
</div>
<div className="flex justify-between items-center text-base text-txt-muted">
<span>Learn more</span>
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>

<div className="absolute inset-0 h-full w-full rounded-2xl bg-brand-blue/10 border border-brand-blue/50 p-8 text-white rotate-y-180 backface-hidden backdrop-blur-3xl flex flex-col justify-center">
<h4 className="text-lg font-semibold mb-4 text-brand-blue">
                  Capabilities
                </h4>
<ul className="space-y-3 text-base text-txt-muted mb-6">
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                    Custom GPT Assistants
                  </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                    Auto-Reply Bots
                  </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                    Data Scraping
                  </li>
</ul>
<a className="block w-full text-center bg-white text-black py-3 rounded font-semibold text-sm hover:bg-brand-blue hover:text-white transition-colors" href="#booking">
                  Select Service
                </a>
</div>
</div>
</div>

<div className="group h-80 perspective-1000 reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="relative h-full w-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">

<div className="absolute inset-0 backface-hidden bg-bg-surface border border-white/5 rounded-2xl p-8 flex flex-col justify-between hover:border-brand-gold/50 transition-colors">
<div>
<div className="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-6 text-brand-gold border border-brand-gold/20">
<i className="w-7 h-7" data-lucide="shopping-cart" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium text-white">E-commerce</h3>
</div>
<div className="flex justify-between items-center text-base text-txt-muted">
<span>Learn more</span>
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>

<div className="absolute inset-0 h-full w-full rounded-2xl bg-brand-gold/10 border border-brand-gold/50 p-8 text-white rotate-y-180 backface-hidden backdrop-blur-3xl flex flex-col justify-center">
<h4 className="text-lg font-semibold mb-4 text-brand-gold">
                  Capabilities
                </h4>
<ul className="space-y-3 text-base text-txt-muted mb-6">
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                    Shopify Liquid Dev
                  </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                    Headless Commerce
                  </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                    Conversion CRO
                  </li>
</ul>
<a className="block w-full text-center bg-white text-black py-3 rounded font-semibold text-sm hover:bg-brand-gold hover:text-black transition-colors" href="#booking">
                  Select Service
                </a>
</div>
</div>
</div>

<div className="group h-80 perspective-1000 reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="relative h-full w-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">

<div className="absolute inset-0 backface-hidden bg-bg-surface border border-white/5 rounded-2xl p-8 flex flex-col justify-between hover:border-brand-cyan/50 transition-colors">
<div>
<div className="w-14 h-14 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-6 text-brand-cyan border border-brand-cyan/20">
<i className="w-7 h-7" data-lucide="layout-grid" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium text-white">Web Design</h3>
</div>
<div className="flex justify-between items-center text-base text-txt-muted">
<span>Learn more</span>
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>

<div className="absolute inset-0 h-full w-full rounded-2xl bg-brand-cyan/10 border border-brand-cyan/50 p-8 text-white rotate-y-180 backface-hidden backdrop-blur-3xl flex flex-col justify-center">
<h4 className="text-lg font-semibold mb-4 text-brand-cyan">
                  Capabilities
                </h4>
<ul className="space-y-3 text-base text-txt-muted mb-6">
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></div>
                    Figma to React
                  </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></div>
                    Framer Motion
                  </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></div>
                    Landing Pages
                  </li>
</ul>
<a className="block w-full text-center bg-white text-black py-3 rounded font-semibold text-sm hover:bg-brand-cyan hover:text-black transition-colors" href="#booking">
                  Select Service
                </a>
</div>
</div>
</div>

<div className="group h-80 perspective-1000 reveal-on-scroll" style={{transitionDelay: '0ms'}}>
<div className="relative h-full w-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">

<div className="absolute inset-0 backface-hidden bg-bg-surface border border-white/5 rounded-2xl p-8 flex flex-col justify-between hover:border-brand-gold/50 transition-colors">
<div>
<div className="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-6 text-brand-gold border border-brand-gold/20">
<i className="w-7 h-7" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium text-white">
                    Growth &amp; Ads
                  </h3>
</div>
<div className="flex justify-between items-center text-base text-txt-muted">
<span>Learn more</span>
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>

<div className="absolute inset-0 h-full w-full rounded-2xl bg-brand-gold/10 border border-brand-gold/50 p-8 text-white rotate-y-180 backface-hidden backdrop-blur-3xl flex flex-col justify-center">
<h4 className="text-lg font-semibold mb-4 text-brand-gold">
                  Capabilities
                </h4>
<ul className="space-y-3 text-base text-txt-muted mb-6">
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                    Paid Social (Meta/TT)
                  </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                    Google PPC
                  </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                    Analytics Setup
                  </li>
</ul>
<a className="block w-full text-center bg-white text-black py-3 rounded font-semibold text-sm hover:bg-brand-gold hover:text-black transition-colors" href="#booking">
                  Select Service
                </a>
</div>
</div>
</div>

<div className="group h-80 perspective-1000 reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="relative h-full w-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">

<div className="absolute inset-0 backface-hidden bg-bg-surface border border-white/5 rounded-2xl p-8 flex flex-col justify-between hover:border-brand-cyan/50 transition-colors">
<div>
<div className="w-14 h-14 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-6 text-brand-cyan border border-brand-cyan/20">
<i className="w-7 h-7" data-lucide="headset" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium text-white">
                    24/7 Receptionist
                  </h3>
</div>
<div className="flex justify-between items-center text-base text-txt-muted">
<span>Learn more</span>
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>

<div className="absolute inset-0 h-full w-full rounded-2xl bg-brand-cyan/10 border border-brand-cyan/50 p-8 text-white rotate-y-180 backface-hidden backdrop-blur-3xl flex flex-col justify-center">
<h4 className="text-lg font-semibold mb-4 text-brand-cyan">
                  Capabilities
                </h4>
<ul className="space-y-3 text-base text-txt-muted mb-6">
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></div>
                    Human-like Voice
                  </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></div>
                    Call Routing
                  </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></div>
                    Appointment Booking
                  </li>
</ul>
<a className="block w-full text-center bg-white text-black py-3 rounded font-semibold text-sm hover:bg-brand-cyan hover:text-black transition-colors" href="#booking">
                  Select Service
                </a>
</div>
</div>
</div>

<div className="group h-80 perspective-1000 reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="relative h-full w-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">

<div className="absolute inset-0 backface-hidden bg-bg-surface border border-white/5 rounded-2xl p-8 flex flex-col justify-between hover:border-brand-blue/50 transition-colors">
<div>
<div className="w-14 h-14 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-6 text-brand-blue border border-brand-blue/20">
<i className="w-7 h-7" data-lucide="pen-tool" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium text-white">Content</h3>
</div>
<div className="flex justify-between items-center text-base text-txt-muted">
<span>Learn more</span>
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>

<div className="absolute inset-0 h-full w-full rounded-2xl bg-brand-blue/10 border border-brand-blue/50 p-8 text-white rotate-y-180 backface-hidden backdrop-blur-3xl flex flex-col justify-center">
<h4 className="text-lg font-semibold mb-4 text-brand-blue">
                  Capabilities
                </h4>
<ul className="space-y-3 text-base text-txt-muted mb-6">
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                    Email Flows
                  </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                    Sales Copy
                  </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                    UGC Creative
                  </li>
</ul>
<a className="block w-full text-center bg-white text-black py-3 rounded font-semibold text-sm hover:bg-brand-blue hover:text-white transition-colors" href="#booking">
                  Select Service
                </a>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-bg border-t border-white/5 relative overflow-hidden" id="process">
<div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            How We Work
          </h2>
<p className="text-xl text-txt-muted max-w-2xl mx-auto">
            A streamlined workflow designed for speed and transparency.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="relative group reveal-on-scroll">
<div className="w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="search" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">1. Discovery</h3>
<p className="text-txt-muted text-base">
              We audit your current setup and identify high-leverage
              opportunities for growth.
            </p>
</div>

<div className="relative group reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="w-16 h-16 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="map" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">2. Strategy</h3>
<p className="text-txt-muted text-base">
              We design a custom roadmap focusing on quick wins and scalable
              foundations.
            </p>
</div>

<div className="relative group reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="w-16 h-16 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="code-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">3. Build</h3>
<p className="text-txt-muted text-base">
              Rapid development sprints with weekly updates. You see progress in
              real-time.
            </p>
</div>

<div className="relative group reveal-on-scroll" style={{transitionDelay: '300ms'}}>
<div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="rocket" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">4. Launch</h3>
<p className="text-txt-muted text-base">
              Deployment, final testing, and handover. We ensure everything runs
              perfectly.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bg-surface relative border-y border-white/5" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Results Speak Louder
          </h2>
<p className="text-xl text-txt-muted">
            Join 100+ founders who scaled with SVEA.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-bg p-8 rounded-2xl border border-white/5 relative group hover:border-brand-blue/30 transition-all duration-300 reveal-on-scroll">
<div className="absolute -top-4 right-8 text-6xl text-white/5 font-serif group-hover:text-brand-blue/10 transition-colors">
              "
            </div>
<div className="flex items-center gap-1 mb-6 text-brand-gold">
<i className="w-4 h-4 fill-brand-gold" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-brand-gold" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-brand-gold" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-brand-gold" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-brand-gold" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-txt-muted font-light mb-8 leading-relaxed text-base">
              "SVEA transformed our e-commerce strategy. They built a custom
              chatbot that handles 60% of our support tickets and optimized our
              Shopify store for speed. Our conversion rate increased by 22%."
            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-blue to-brand-cyan p-[1px]">
<img alt="JD" className="rounded-full w-full h-full" src="https://ui-avatars.com/api/?name=Johan+Dahlberg&amp;background=000&amp;color=fff"/>
</div>
<div>
<div className="text-white font-medium text-base">
                  Johan Dahlberg
                </div>
<div className="text-txt-dim text-sm">Founder, Nord Living</div>
</div>
</div>
</div>

<div className="bg-bg p-8 rounded-2xl border border-white/5 relative group hover:border-brand-gold/30 transition-all duration-300 reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="absolute -top-4 right-8 text-6xl text-white/5 font-serif group-hover:text-brand-gold/10 transition-colors">
              "
            </div>
<div className="flex items-center gap-1 mb-6 text-brand-gold">
<i className="w-4 h-4 fill-brand-gold" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-brand-gold" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-brand-gold" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-brand-gold" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-brand-gold" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-txt-muted font-light mb-8 leading-relaxed text-base">
              "The speed is unmatched. We needed a landing page for our Series A
              announcement in 3 days. SVEA delivered a Framer site that blew our
              investors away. Truly a tech-first partner."
            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-gold to-orange-500 p-[1px]">
<img alt="SJ" className="rounded-full w-full h-full" src="https://ui-avatars.com/api/?name=Sarah+Jenks&amp;background=000&amp;color=fff"/>
</div>
<div>
<div className="text-white font-medium text-base">Sarah Jenks</div>
<div className="text-txt-dim text-sm">CMO, TechFlow</div>
</div>
</div>
</div>

<div className="bg-bg p-8 rounded-2xl border border-white/5 relative group hover:border-brand-cyan/30 transition-all duration-300 reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="absolute -top-4 right-8 text-6xl text-white/5 font-serif group-hover:text-brand-cyan/10 transition-colors">
              "
            </div>
<div className="flex items-center gap-1 mb-6 text-brand-gold">
<i className="w-4 h-4 fill-brand-gold" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-brand-gold" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-brand-gold" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-brand-gold" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-brand-gold" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-txt-muted font-light mb-8 leading-relaxed text-base">
              "Finally, a freelance agency that understands code. They didn't
              just run ads; they fixed our tracking pixels and set up
              server-side tagging. ROAS went up 3x in month one."
            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-cyan to-brand-blue p-[1px]">
<img alt="MC" className="rounded-full w-full h-full" src="https://ui-avatars.com/api/?name=Marcus+Chen&amp;background=000&amp;color=fff"/>
</div>
<div>
<div className="text-white font-medium text-base">Marcus Chen</div>
<div className="text-txt-dim text-sm">
                  Head of Growth, DropScale
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="booking">

<div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 blur-[100px] pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start reveal-on-scroll">

<div className="space-y-8">
<div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
              Ready to
              <span className="text-brand-gold">Scale?</span>
</h2>
<p className="text-txt-muted text-xl font-light leading-relaxed">
              Tell us about your project and we’ll match you with the right
              specialist from SVEA Freelance. No strings attached.
            </p>
<div className="flex flex-col gap-4 mt-8 mb-4">
<div className="flex items-center gap-4">
<div className="rounded-full bg-brand-gold/10 p-1.5">
<i className="w-4 h-4 text-brand-gold" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="text-base text-white font-medium">
                  Top 1% Vetted Talent
                </span>
</div>
<div className="flex items-center gap-4">
<div className="rounded-full bg-brand-gold/10 p-1.5">
<i className="w-4 h-4 text-brand-gold" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="text-base text-white font-medium">
                  Delivery in Days, Not Months
                </span>
</div>
<div className="flex items-center gap-4">
<div className="rounded-full bg-brand-gold/10 p-1.5">
<i className="w-4 h-4 text-brand-gold" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="text-base text-white font-medium">
                  Zero Management Overhead
                </span>
</div>
</div>
</div>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 text-txt-muted group cursor-pointer hover:text-white transition-colors">
<div className="bg-bg-surface p-3 rounded-xl border border-white/10 group-hover:border-brand-blue/50 transition-colors">
<i className="w-6 h-6 text-brand-blue" data-lucide="video" strokeWidth="1.5"></i>
</div>
<span className="text-lg">Google Meet / Zoom</span>
</div>
<div className="flex items-center gap-4 text-txt-muted group cursor-pointer hover:text-white transition-colors">
<div className="bg-bg-surface p-3 rounded-xl border border-white/10 group-hover:border-brand-gold/50 transition-colors">
<i className="w-6 h-6 text-brand-gold" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<span className="text-lg">30 Minutes Strategy Session</span>
</div>
</div>
<div className="pt-6">
<div className="flex -space-x-3">
<img alt="Team" className="w-12 h-12 rounded-full border-2 border-bg" src="https://ui-avatars.com/api/?name=A&amp;background=111&amp;color=fff"/>
<img alt="Team" className="w-12 h-12 rounded-full border-2 border-bg" src="https://ui-avatars.com/api/?name=B&amp;background=111&amp;color=fff"/>
<img alt="Team" className="w-12 h-12 rounded-full border-2 border-bg" src="https://ui-avatars.com/api/?name=C&amp;background=111&amp;color=fff"/>
<div className="w-12 h-12 rounded-full border-2 border-bg bg-bg-surface flex items-center justify-center text-sm font-bold text-white">
                +50
              </div>
</div>
<p className="text-base text-txt-dim mt-3">
              Expert developers available today.
            </p>
</div>
</div>

<div className="bg-bg-surface border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl relative">

<div className="absolute -inset-1 bg-gradient-to-r from-brand-gold via-brand-blue to-brand-cyan rounded-2xl opacity-20 blur-lg -z-10 animate-pulse"></div>
<h3 className="text-2xl font-medium text-white mb-8">
            Schedule your call
          </h3>
<form action="https://formsubmit.co/svea.freelance@gmail.com" className="space-y-6" enctype="multipart/form-data" method="POST">
<input name="_subject" type="hidden" value="New Project Inquiry"/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-txt-muted uppercase tracking-wider font-semibold">
                  Name
                </label>
<input className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3.5 text-white text-base focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all placeholder:text-white/20" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-txt-muted uppercase tracking-wider font-semibold">
                  Email
                </label>
<input className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3.5 text-white text-base focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all placeholder:text-white/20" name="email" placeholder="john@company.com" required="" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-txt-muted uppercase tracking-wider font-semibold">
                Project Type
              </label>
<div className="relative">
<select className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3.5 text-white text-base focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all appearance-none" name="project_type">
<option>AI Automation &amp; Chatbots</option>
<option>E-commerce / Shopify</option>
<option>Paid Ads Strategy</option>
<option>24/7 Receptionist</option>
<option>Other</option>
</select>
<i className="absolute right-4 top-4 w-5 h-5 text-white/50 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-txt-muted uppercase tracking-wider font-semibold">
                Message
              </label>
<textarea className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3.5 text-white text-base focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all placeholder:text-white/20" name="message" placeholder="Briefly describe your goals..." rows="3"></textarea>
</div>
<button className="group w-full bg-brand-blue text-white font-bold text-sm uppercase tracking-wide py-4 rounded-lg mt-4 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:-translate-y-1" type="submit">
              Confirm Meeting Request
            </button>
<div className="flex justify-center items-center gap-2 pt-2 opacity-50">
<i className="w-3 h-3 text-txt-muted" data-lucide="lock" strokeWidth="1.5"></i>
<p className="text-xs text-center text-txt-muted">
                Secure SSL Connection
              </p>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-bg border-t border-white/10 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
<div className="max-w-sm">

<a className="block hover:opacity-80 transition-opacity mb-6" href="#">
<img alt="SVEA Freelance Logo" className="h-10 w-auto object-contain" src="https://placehold.co/160x50/000000/0091FF?text=SVEA+Freelance"/>
</a>
<p className="text-txt-muted text-base font-light">
              Empowering startups with elite tech talent. We build, automate,
              and scale the future of your business.
            </p>
</div>
<div className="flex gap-16 text-base text-txt-muted">
<ul className="space-y-4">
<li className="font-medium text-white mb-2">Services</li>
<li>
<a className="hover:text-brand-blue transition-colors" href="#">
                  AI &amp; Auto
                </a>
</li>
<li>
<a className="hover:text-brand-blue transition-colors" href="#">
                  Shopify
                </a>
</li>
</ul>
<ul className="space-y-4">
<li className="font-medium text-white mb-2">Company</li>
<li>
<a className="hover:text-brand-blue transition-colors" href="#">
                  About
                </a>
</li>
<li>
<a className="hover:text-brand-blue transition-colors" href="#">
                  Careers
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-txt-dim">
<p>© 2023 SVEA Freelance. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
