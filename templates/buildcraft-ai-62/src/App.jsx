import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



      document.addEventListener('DOMContentLoaded', () => {
        // Initialize icons
        if (window.lucide && window.lucide.createIcons) {
          window.lucide.createIcons();
        }

        // Mobile menu toggle
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        let menuOpen = false;
        if (menuBtn && mobileMenu) {
          menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            menuOpen = !menuOpen;
            const icon = menuBtn.querySelector('[data-lucide]');
            if (icon) {
              icon.setAttribute('data-lucide', menuOpen ? 'x' : 'menu');
              if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
            }
          });
        }

        // Interactive plan generator
        const urlInput = document.getElementById('urlInput');
        const generateBtn = document.getElementById('generateBtn');
        const planCard = document.getElementById('planCard');

        function domainFromUrl(value) {
          try {
            const u = new URL(value.startsWith('http') ? value : 'https://' + value);
            return u.hostname.replace('www.', '');
          } catch { return null; }
        }

        if (generateBtn && planCard) {
          generateBtn.addEventListener('click', () => {
            const d = domainFromUrl(urlInput.value.trim());
            planCard.classList.remove('hidden');
            // Light personalization
            if (d) {
              const title = planCard.querySelector('.font-medium');
              if (title) title.textContent = `Draft Build Plan for ${d}`;
            }
            // Recreate icons in case DOM changed
            if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
            // Smooth scroll into view
            planCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          });
        }

        // Contact form
        const contactForm = document.getElementById('contactForm');
        const toast = document.getElementById('toast');
        if (contactForm) {
          contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Placeholder submit behavior
            toast.classList.remove('hidden');
            if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
            setTimeout(() => toast.classList.add('hidden'), 3000);
            contactForm.reset();
          });
        }

        // Year
        const yearEl = document.getElementById('year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full -z-10 brightness-75 h-screen"><div className="absolute inset-0 -z-10" data-us-project="eRAhaP1vDDHsWMBlk6WH"></div>
</div>

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/20 blur-[180px] opacity-30"></div>
<div className="absolute -left-24 bottom-0 w-[480px] h-[480px] rounded-full bg-purple-500/10 blur-[140px] opacity-25"></div>
<div className="absolute -right-24 top-1/4 w-[420px] h-[420px] rounded-full bg-pink-500/10 blur-[140px] opacity-25"></div>
</div>

<header className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-black/60">
<div className="flex sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg ring-1 grid place-items-center bg-white/10 ring-white/15 backdrop-blur-md">
<svg className="lucide lucide-blocks text-white/90" data-lucide="blocks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect height="8" rx="1" width="8" x="14" y="2"></rect></svg>
</div>
<span className="text-sm sm:text-base font-medium tracking-tight text-white/90 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Buildcraft AI</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
<a className="transition hover:text-white font-manrope" href="#solutions" style={{transition: 'outline 0.1s ease-in-out'}}>Solutions</a>
<a className="transition hover:text-white font-manrope" href="#industries" style={{transition: 'outline 0.1s ease-in-out'}}>Industries</a>
<a className="transition hover:text-white font-manrope" href="#how-it-works" style={{transition: 'outline 0.1s ease-in-out'}}>How it works</a>
<a className="transition hover:text-white font-manrope" href="#portfolio" style={{transition: 'outline 0.1s ease-in-out'}}>Portfolio</a>
<a className="transition hover:text-white font-manrope" href="#faq" style={{transition: 'outline 0.1s ease-in-out'}}>Resources</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="text-sm transition text-white/70 hover:text-white font-manrope backdrop-blur-md rounded-md px-3 py-2 ring-1 ring-inset ring-white/10 hover:bg-white/5" href="#book" style={{transition: 'outline 0.1s ease-in-out'}}>Contact</a>
<a className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium tracking-tight transition bg-gradient-to-br from-white/20 via-white/10 to-white/5 hover:from-white/30 hover:via-white/20 hover:to-white/10 border-white/20 shadow-sm backdrop-blur-md ring-1 ring-inset ring-white/10 font-manrope" href="#book" style={{transition: 'outline 0.1s ease-in-out'}}>
            Book strategy session
            <svg className="lucide lucide-arrow-right text-white/90" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<button className="md:hidden inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm ring-1 bg-white/10 text-white/80 ring-white/10 hover:bg-white/15 backdrop-blur-md" id="menuBtn">
<svg className="lucide lucide-menu text-white/80" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<span className="font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Menu</span>
</button>
</div>
<div className="hidden md:hidden border-t backdrop-blur border-white/10 bg-black/70" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
<div className="grid gap-2 text-sm">
<a className="rounded-md px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white font-manrope" href="#solutions" style={{transition: 'outline 0.1s ease-in-out'}}>Solutions</a>
<a className="rounded-md px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white font-manrope" href="#industries" style={{transition: 'outline 0.1s ease-in-out'}}>Industries</a>
<a className="rounded-md px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white font-manrope" href="#how-it-works" style={{transition: 'outline 0.1s ease-in-out'}}>How it works</a>
<a className="rounded-md px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white font-manrope" href="#portfolio" style={{transition: 'outline 0.1s ease-in-out'}}>Portfolio</a>
<a className="rounded-md px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white font-manrope" href="#faq" style={{transition: 'outline 0.1s ease-in-out'}}>Resources</a>
<a className="rounded-md mt-2 px-3 py-2 ring-1 bg-gradient-to-br from-white/15 via-white/8 to-white/5 text-white/90 ring-white/15 hover:from-white/25 hover:via-white/15 hover:to-white/10 backdrop-blur-md font-manrope" href="#book" style={{transition: 'outline 0.1s ease-in-out'}}>Book strategy session</a>
</div>
</div>
</div>
</header>

<section className="pt-28 sm:pt-32">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-3xl mr-auto ml-auto">
<div className="inline-flex hover:from-white/15 hover:to-white/5 text-xs text-white/70 font-manrope bg-gradient-to-r from-white/10 to-transparent border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3 shadow-sm backdrop-blur-md gap-x-2 gap-y-2 items-center" style={{transition: 'outline 0.1s ease-in-out'}}>Ship in 4-6 weeks<svg className="lucide lucide-rocket text-white/80" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg></div>
<h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>
            Launch AI chatbots, agents, and fullstack apps — fast
          </h1>
<p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/70 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
            Your integrated technical partner for AI chatbot development, AI automation, RAG systems, analytics, and MLOps.
            We design, build, and integrate end‑to‑end solutions that convert, automate, and scale.
          </p>
<div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm sm:text-base font-medium tracking-tight transition bg-gradient-to-br from-white/20 via-white/10 to-white/5 hover:from-white/30 hover:via-white/20 hover:to-white/10 border-white/20 text-white shadow-sm backdrop-blur-md ring-1 ring-inset ring-white/10 font-manrope" href="#book" style={{transition: 'outline 0.1s ease-in-out'}}>
              Book technical strategy session
              <svg className="lucide lucide-arrow-right text-white/90" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm sm:text-base tracking-tight transition bg-gradient-to-br from-white/5 via-white/0 to-transparent hover:from-white/10 hover:via-white/5 hover:to-transparent border-white/15 text-white/80 hover:text-white shadow-sm backdrop-blur-md ring-1 ring-inset ring-white/10 font-manrope" href="#portfolio" style={{transition: 'outline 0.1s ease-in-out'}}>
              View solutions portfolio
            </a>
</div>

<div className="mt-6 sm:mt-8 max-w-xl mx-auto rounded-2xl border p-3 sm:p-4 backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/15 ring-1 ring-inset ring-white/10 shadow-sm">
<div className="flex items-center gap-2">
<div className="hidden sm:flex items-center justify-center h-9 w-9 rounded-lg ring-1 bg-white/10 ring-white/15 backdrop-blur-md">
<svg className="lucide lucide-bot text-white/80" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<input className="flex-1 sm:text-base placeholder:text-white/40 focus:outline-none ring-inset focus:ring-white/25 ring-white/15 ring-1 text-sm text-white bg-white/5 rounded-lg pt-2 pr-3 pb-2 pl-3 backdrop-blur-md" id="urlInput" placeholder="Paste your URL — we’ll draft an AI assistant &amp; workflow plan"/>
<button className="inline-flex items-center gap-2 rounded-lg border px-3 sm:px-4 py-2 text-sm font-medium tracking-tight transition bg-gradient-to-br from-white/20 via-white/10 to-white/5 hover:from-white/30 hover:via-white/20 hover:to-white/10 border-white/20 text-white shadow-sm backdrop-blur-md ring-1 ring-inset ring-white/10 font-manrope" id="generateBtn" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-wand-2 text-white/90" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
                Generate plan
              </button>
</div>
<div className="hidden mt-3 rounded-lg border p-3 sm:p-4 border-white/15 ring-1 ring-inset ring-white/10 bg-gradient-to-br from-black/40 via-black/30 to-transparent backdrop-blur-md" id="planCard">
<div className="flex items-center justify-between">
<div className="text-sm font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Draft Build Plan</div>
<span className="text-[10px] text-white/60 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Preview</span>
</div>
<ul className="mt-2 space-y-1.5 text-xs text-white/70">
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-message-circle mt-0.5 text-white/60" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                  Custom AI chatbot with site content (RAG) and lead capture
                </li>
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-workflow mt-0.5 text-white/60" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
                  Automation: CRM sync, email/SMS follow‑ups, ticket routing
                </li>
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-server-cog mt-0.5 text-white/60" data-lucide="server-cog" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.852 14.772-.383.923"></path><path d="M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923"></path><path d="m13.148 9.228.383-.923"></path><path d="m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544"></path><path d="m14.772 10.852.923-.383"></path><path d="m14.772 13.148.923.383"></path><path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"></path><path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"></path><path d="M6 18h.01"></path><path d="M6 6h.01"></path><path d="m9.228 10.852-.923-.383"></path><path d="m9.228 13.148-.923.383"></path></svg>
                  Stack: Node/Python, vector DB, MCP tools, 8,000+ integrations
                </li>
</ul>
<div className="mt-3 flex items-center justify-between">
<span className="text-xs text-gray-400 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Est. 2–4 weeks</span>
<a className="text-xs inline-flex items-center gap-1 text-white/80 hover:text-white font-manrope" href="#book" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Get full proposal
                  <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
<div className="rounded-lg border p-3 bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/15 backdrop-blur-md ring-1 ring-inset ring-white/10">
<div className="text-lg sm:text-xl font-semibold tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>250+</div>
<div className="text-xs text-white/60 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>founders &amp; teams</div>
</div>
<div className="rounded-lg border p-3 bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/15 backdrop-blur-md ring-1 ring-inset ring-white/10">
<div className="text-lg sm:text-xl font-semibold tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>8,000+</div>
<div className="text-xs text-white/60 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>integrations via MCP</div>
</div>
<div className="rounded-lg border p-3 bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/15 backdrop-blur-md ring-1 ring-inset ring-white/10">
<div className="text-lg sm:text-xl font-semibold tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>95%</div>
<div className="text-xs text-white/60 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>domain accuracy</div>
</div>
<div className="rounded-lg border p-3 bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/15 backdrop-blur-md ring-1 ring-inset ring-white/10">
<div className="sm:text-xl text-lg font-semibold tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>4–6 weeks</div>
<div className="text-xs text-white/60 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>to production</div>
</div>
</div>
<div className="mt-6 sm:mt-8 flex items-center justify-center gap-6 text-xs sm:text-sm text-white/50">
<span className="font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Trusted by startups across ecommerce, real estate, SaaS, healthcare, and finance</span>
</div>
</div>
</div>
</section>

<section className="mt-20 sm:mt-28" id="solutions">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h2 className="sm:text-3xl lg:text-4xl text-2xl tracking-tight font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>Choose your path</h2>
<p className="mt-2 text-sm sm:text-base text-white/70 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Focused messaging for founders, agencies, and product teams</p>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
<a className="group rounded-2xl border p-5 transition bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-white/15 hover:via-white/10 hover:to-transparent border-white/15 backdrop-blur-md ring-1 ring-inset ring-white/10" href="#portfolio">
<div className="flex items-center justify-between">
<div className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>For Solo Founders</div>
<svg className="lucide lucide-user group-hover:text-white text-white/70" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<p className="mt-2 text-sm text-white/70 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>MVPs, AI chatbots, and first revenue — built fast with fullstack + AI.</p>
<div className="mt-3 inline-flex items-center gap-1 text-xs text-white/80 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
              Explore MVP wins
              <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
<a className="group rounded-2xl border p-5 transition bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-white/15 hover:via-white/10 hover:to-transparent border-white/15 backdrop-blur-md ring-1 ring-inset ring-white/10" href="#portfolio">
<div className="flex items-center justify-between">
<div className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>For Agencies</div>
<svg className="lucide lucide-briefcase group-hover:text-white text-white/70" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<p className="mt-2 text-sm text-white/70 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Add AI to client retainers: automations, analytics, and integrations.</p>
<div className="mt-3 inline-flex items-center gap-1 text-xs text-white/80 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
              See partner examples
              <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
<a className="group rounded-2xl border p-5 transition bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-white/15 hover:via-white/10 hover:to-transparent border-white/15 backdrop-blur-md ring-1 ring-inset ring-white/10" href="#portfolio">
<div className="flex items-center justify-between">
<div className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>For Product Teams</div>
<svg className="lucide lucide-layers group-hover:text-white text-white/70" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<p className="mt-2 text-sm text-white/70 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>RAG, agents with tools, data pipelines, MLOps, and secure infra.</p>
<div className="mt-3 inline-flex items-center gap-1 text-xs text-white/80 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
              Review enterprise builds
              <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
</div>
</div>
</section>

<section className="mt-20 sm:mt-28" id="how-it-works">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>From idea to live in three steps</h2>
<p className="mt-2 text-sm sm:text-base text-white/70 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Clear process that lowers risk and accelerates delivery</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-2xl border p-5 bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/15 backdrop-blur-md ring-1 ring-inset ring-white/10">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg ring-1 grid place-items-center text-sm bg-white/10 ring-white/15 backdrop-blur-md font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>1</div>
<div className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Tell us what to build</div>
</div>
<p className="mt-2 text-sm text-white/70 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>We scope MVP or workflow outcomes, data sources, and integrations.</p>
<ul className="mt-3 space-y-1 text-xs text-white/70">
<li className="flex items-center gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-target" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                Requirements to outcomes mapping
              </li>
<li className="flex items-center gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-plug" data-lucide="plug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>
                Integration plan (8,000+ apps via MCP)
              </li>
</ul>
</div>
<div className="rounded-2xl border p-5 bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/15 backdrop-blur-md ring-1 ring-inset ring-white/10">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg ring-1 grid place-items-center text-sm bg-white/10 ring-white/15 backdrop-blur-md font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>2</div>
<div className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>We architect &amp; integrate</div>
</div>
<p className="mt-2 text-sm text-white/70 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Fullstack + AI build with agents that can use tools and execute functions.</p>
<ul className="mt-3 space-y-1 text-xs text-white/70">
<li className="flex items-center gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-brain-circuit" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
                RAG, tool‑use agents, vector search
              </li>
<li className="flex items-center gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-database" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                ERP/EHR/MLS/Core banking connections
              </li>
</ul>
</div>
<div className="rounded-2xl border p-5 bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/15 backdrop-blur-md ring-1 ring-inset ring-white/10">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg ring-1 grid place-items-center text-sm bg-white/10 ring-white/15 backdrop-blur-md font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>3</div>
<div className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Launch, measure, iterate</div>
</div>
<p className="mt-2 text-sm text-white/70 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>We track ROI (conversion, time saved, spend reduction) and optimize.</p>
<ul className="mt-3 space-y-1 text-xs text-white/70">
<li className="flex items-center gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-chart-line" data-lucide="chart-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
                Experimentation and A/B hooks
              </li>
<li className="flex items-center gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-shield-check" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                Maintenance &amp; SLA options
              </li>
</ul>
</div>
</div>
<div className="mt-8 flex items-center justify-center">
<a className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm sm:text-base font-medium tracking-tight transition bg-gradient-to-br from-white/20 via-white/10 to-white/5 hover:from-white/30 hover:via-white/20 hover:to-white/10 border-white/20 text-white shadow-sm backdrop-blur-md ring-1 ring-inset ring-white/10 font-manrope" href="#book" style={{transition: 'outline 0.1s ease-in-out'}}>
            Get your custom proposal in 2–3 days
            <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="mt-20 sm:mt-28" id="portfolio">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>Buildcraft AI: The Integrated Tech Team Solutions Portfolio</h2>
<p className="mt-2 text-sm sm:text-base text-white/70 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Fullstack, custom AI chatbots, agent workflows, complex integrations — with measurable ROI</p>
</div>

<div className="mt-8">
<div className="flex items-center justify-between">
<h3 className="text-lg sm:text-xl font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Category 1 — MVP &amp; Product Launch</h3>
<span className="text-xs text-white/60 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>2–6 week sprints</span>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="rounded-2xl border p-5 transition bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-white/15 hover:via-white/10 hover:to-transparent border-white/15 backdrop-blur-md ring-1 ring-inset ring-white/10">
<div className="flex items-center justify-between">
<div className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Real Estate / Marketplace</div>
<svg className="lucide lucide-home text-white/70" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<p className="mt-2 text-sm text-white/70 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Challenge: high visitor drop‑off; need instant lead qualification.</p>
<div className="mt-3 rounded-lg border p-3 border-white/15 ring-1 ring-inset ring-white/10 bg-gradient-to-br from-black/40 via-black/30 to-transparent backdrop-blur-md">
<div className="text-xs font-medium tracking-tight text-white/80 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>The Build</div>
<ul className="mt-2 space-y-1.5 text-xs text-white/70">
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-message-square" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg> Intelligent Lead Qualification Agent</li>
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-database" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg> MLS integration + CRM sync</li>
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-gantt-chart" data-lucide="gantt-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 5h12"></path><path d="M4 12h10"></path><path d="M12 19h8"></path></svg> Stack: Node/Python, vector DB, tools</li>
</ul>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-gray-400 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>+654% conversion | $1.2M in 6 months</div>
<a className="text-xs inline-flex items-center gap-1 text-white/80 hover:text-white font-manrope" href="#book" style={{transition: 'outline 0.1s ease-in-out'}}>Book a similar build <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>

<div className="rounded-2xl border p-5 transition bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-white/15 hover:via-white/10 hover:to-transparent border-white/15 backdrop-blur-md ring-1 ring-inset ring-white/10">
<div className="flex items-center justify-between">
<div className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>B2B SaaS Trial Optimization</div>
<svg className="lucide lucide-app-window text-white/70" data-lucide="app-window" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="M10 4v4"></path><path d="M2 8h20"></path><path d="M6 4v4"></path></svg>
</div>
<p className="mt-2 text-sm text-white/70 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Challenge: trial churn; low conversion to paid.</p>
<div className="mt-3 rounded-lg border p-3 border-white/15 ring-1 ring-inset ring-white/10 bg-gradient-to-br from-black/40 via-black/30 to-transparent backdrop-blur-md">
<div className="text-xs font-medium tracking-tight text-white/80 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>The Build</div>
<ul className="mt-2 space-y-1.5 text-xs text-white/70">
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-user-cog" data-lucide="user-cog" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 15H6a4 4 0 0 0-4 4v2"></path><path d="m14.305 16.53.923-.382"></path><path d="m15.228 13.852-.923-.383"></path><path d="m16.852 12.228-.383-.923"></path><path d="m16.852 17.772-.383.924"></path><path d="m19.148 12.228.383-.923"></path><path d="m19.53 18.696-.382-.924"></path><path d="m20.772 13.852.924-.383"></path><path d="m20.772 16.148.924.383"></path><circle cx="18" cy="15" r="3"></circle><circle cx="9" cy="7" r="4"></circle></svg> Personalized Conversion Agent</li>
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-activity" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> Usage analytics &amp; Product API</li>
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-mail-check" data-lucide="mail-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><path d="m16 19 2 2 4-4"></path></svg> Automated churn interventions</li>
</ul>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-gray-400 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>+35% trial→paid | 3× demo bookings</div>
<a className="text-xs inline-flex items-center gap-1 text-white/80 hover:text-white font-manrope" href="#book" style={{transition: 'outline 0.1s ease-in-out'}}>See how <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>

<div className="rounded-2xl border p-5 transition bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-white/15 hover:via-white/10 hover:to-transparent border-white/15 backdrop-blur-md ring-1 ring-inset ring-white/10">
<div className="flex items-center justify-between">
<div className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>E‑commerce / Retail</div>
<svg className="lucide lucide-shopping-bag text-white/70" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
<p className="mt-2 text-sm text-white/70 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Challenge: cart abandonment; weak discovery.</p>
<div className="mt-3 rounded-lg border p-3 border-white/15 ring-1 ring-inset ring-white/10 bg-gradient-to-br from-black/40 via-black/30 to-transparent backdrop-blur-md">
<div className="text-xs font-medium tracking-tight text-white/80 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>The Build</div>
<ul className="mt-2 space-y-1.5 text-xs text-white/70">
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-sparkles" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> AI Personal Shopping Assistant</li>
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-plug" data-lucide="plug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg> Shopify/WooCommerce APIs</li>
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-cpu" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg> Custom recommendations engine</li>
</ul>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-gray-400 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>+40% AOV | −25% abandonment</div>
<a className="text-xs inline-flex items-center gap-1 text-white/80 hover:text-white font-manrope" href="#book" style={{transition: 'outline 0.1s ease-in-out'}}>Start a retail build <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>
</div>
</div>

<div className="mt-10">
<div className="flex items-center justify-between">
<h3 className="text-lg sm:text-xl font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Category 2 — Operational Backbone</h3>
<span className="text-xs text-white/60 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Automation + Integrations</span>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="rounded-2xl border p-5 transition bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-white/15 hover:via-white/10 hover:to-transparent border-white/15 backdrop-blur-md ring-1 ring-inset ring-white/10">
<div className="flex items-center justify-between">
<div className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Manufacturing / Supply Chain</div>
<svg className="lucide lucide-package text-white/70" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<p className="mt-2 text-sm text-white/70 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Challenge: manual order entry; delays &amp; errors.</p>
<div className="mt-3 rounded-lg border p-3 border-white/15 ring-1 ring-inset ring-white/10 bg-gradient-to-br from-black/40 via-black/30 to-transparent backdrop-blur-md">
<div className="text-xs font-medium tracking-tight text-white/80 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>The Build</div>
<ul className="mt-2 space-y-1.5 text-xs text-white/70">
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-workflow" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg> Automated order workflow</li>
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-server" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg> ERP integration (SAP/Oracle)</li>
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-badge-check" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg> 99.5% accuracy</li>
</ul>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-gray-400 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>400 hrs/mo saved | $300K/yr</div>
<a className="text-xs inline-flex items-center gap-1 text-white/80 hover:text-white font-manrope" href="#book" style={{transition: 'outline 0.1s ease-in-out'}}>Automate ops <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>

<div className="rounded-2xl border p-5 transition bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-white/15 hover:via-white/10 hover:to-transparent border-white/15 backdrop-blur-md ring-1 ring-inset ring-white/10">
<div className="flex items-center justify-between">
<div className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Human Resources</div>
<svg className="lucide lucide-users text-white/70" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<p className="mt-2 text-sm text-white/70 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Challenge: repetitive onboarding; policy lookup pain.</p>
<div className="mt-3 rounded-lg border p-3 border-white/15 ring-1 ring-inset ring-white/10 bg-gradient-to-br from-black/40 via-black/30 to-transparent backdrop-blur-md">
<div className="text-xs font-medium tracking-tight text-white/80 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>The Build</div>
<ul className="mt-2 space-y-1.5 text-xs text-white/70">
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-bot" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg> Employee Lifecycle Bot</li>
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-plug-zap" data-lucide="plug-zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path><path d="m2 22 3-3"></path><path d="M7.5 13.5 10 11"></path><path d="M10.5 16.5 13 14"></path><path d="m18 3-4 4h6l-4 4"></path></svg> Workday/BambooHR integrations</li>
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-clock" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> 75% faster onboarding</li>
</ul>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-gray-400 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>200 hrs/mo saved</div>
<a className="text-xs inline-flex items-center gap-1 text-white/80 hover:text-white font-manrope" href="#book" style={{transition: 'outline 0.1s ease-in-out'}}>Upgrade HR ops <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>

<div className="rounded-2xl border p-5 transition bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-white/15 hover:via-white/10 hover:to-transparent border-white/15 backdrop-blur-md ring-1 ring-inset ring-white/10">
<div className="flex items-center justify-between">
<div className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Legal / Compliance</div>
<svg className="lucide lucide-scale text-white/70" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
</div>
<p className="mt-2 text-sm text-white/70 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Challenge: slow intake; time‑intensive review.</p>
<div className="mt-3 rounded-lg border p-3 border-white/15 ring-1 ring-inset ring-white/10 bg-gradient-to-br from-black/40 via-black/30 to-transparent backdrop-blur-md">
<div className="text-xs font-medium tracking-tight text-white/80 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>The Build</div>
<ul className="mt-2 space-y-1.5 text-xs text-white/70">
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-file-text" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Legal Document Processing Agent</li>
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-split" data-lucide="split" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3h5v5"></path><path d="M8 3H3v5"></path><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></path><path d="m15 9 6-6"></path></svg> Automated intake + billing sync</li>
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-rocket" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg> 80% faster processing</li>
</ul>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-gray-400 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>$150K annual gains</div>
<a className="text-xs inline-flex items-center gap-1 text-white/80 hover:text-white font-manrope" href="#book" style={{transition: 'outline 0.1s ease-in-out'}}>Streamline legal <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>
</div>
</div>

<div className="mt-10">
<div className="flex items-center justify-between">
<h3 className="text-lg sm:text-xl font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Category 3 — Enterprise &amp; Specialized</h3>
<span className="text-xs text-white/60 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Security &amp; custom infra</span>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="rounded-2xl border p-5 transition bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-white/15 hover:via-white/10 hover:to-transparent border-white/15 backdrop-blur-md ring-1 ring-inset ring-white/10">
<div className="flex items-center justify-between">
<div className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Healthcare</div>
<svg className="lucide lucide-stethoscope text-white/70" data-lucide="stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg>
</div>
<p className="mt-2 text-sm text-white/70 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>24/7 patient support; strict privacy &amp; compliance.</p>
<div className="mt-3 rounded-lg border p-3 border-white/15 ring-1 ring-inset ring-white/10 bg-gradient-to-br from-black/40 via-black/30 to-transparent backdrop-blur-md">
<div className="text-xs font-medium tracking-tight text-white/80 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>The Build</div>
<ul className="mt-2 space-y-1.5 text-xs text-white/70">
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-shield" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> HIPAA‑compliant patient system</li>
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-hospital" data-lucide="hospital" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M14 9h-4"></path><path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"></path><path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"></path></svg> EHR integrations (Epic, Cerner)</li>
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-calendar-check-2" data-lucide="calendar-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path><path d="M3 10h18"></path><path d="m16 20 2 2 4-4"></path></svg> Appointments + Rx workflows</li>
</ul>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-gray-400 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>−70% call volume | $200K saved</div>
<a className="text-xs inline-flex items-center gap-1 text-white/80 hover:text-white font-manrope" href="#book" style={{transition: 'outline 0.1s ease-in-out'}}>Assess compliance <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>

<div className="rounded-2xl border p-5 transition bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-white/15 hover:via-white/10 hover:to-transparent border-white/15 backdrop-blur-md ring-1 ring-inset ring-white/10">
<div className="flex items-center justify-between">
<div className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Financial Services / Fintech</div>
<svg className="lucide lucide-banknote text-white/70" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
</div>
<p className="mt-2 text-sm text-white/70 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>KYC automation, risk flags, high‑signal client service — securely integrated.</p>
<div className="mt-3 rounded-lg border p-3 border-white/15 ring-1 ring-inset ring-white/10 bg-gradient-to-br from-black/40 via-black/30 to-transparent backdrop-blur-md">
<div className="text-xs font-medium tracking-tight text-white/80 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>The Build</div>
<ul className="mt-2 space-y-1.5 text-xs text-white/70">
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-id-card" data-lucide="id-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10h2"></path><path d="M16 14h2"></path><path d="M6.17 15a3 3 0 0 1 5.66 0"></path><circle cx="9" cy="11" r="2"></circle><rect height="14" rx="2" width="20" x="2" y="5"></rect></svg> KYC/AML Assistant with document parsing</li>
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-link" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> Core integrations (Plaid, Stripe, Temenos)</li>
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-alert-triangle" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg> Risk scoring + alerting workflows</li>
</ul>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-gray-400 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>−60% manual review | 99% capture</div>
<a className="text-xs inline-flex items-center gap-1 text-white/80 hover:text-white font-manrope" href="#book" style={{transition: 'outline 0.1s ease-in-out'}}>Explore finance builds <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>

<div className="rounded-2xl border p-5 transition bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-white/15 hover:via-white/10 hover:to-transparent border-white/15 backdrop-blur-md ring-1 ring-inset ring-white/10">
<div className="flex items-center justify-between">
<div className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>On‑prem / Private Cloud</div>
<svg className="lucide lucide-server-cog text-white/70" data-lucide="server-cog" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.852 14.772-.383.923"></path><path d="M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923"></path><path d="m13.148 9.228.383-.923"></path><path d="m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544"></path><path d="m14.772 10.852.923-.383"></path><path d="m14.772 13.148.923.383"></path><path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"></path><path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"></path><path d="M6 18h.01"></path><path d="M6 6h.01"></path><path d="m9.228 10.852-.923-.383"></path><path d="m9.228 13.148-.923.383"></path></svg>
</div>
<p className="mt-2 text-sm text-white/70 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Self‑hosted RAG and agents with SSO, audit trails, and data residency.</p>
<div className="mt-3 rounded-lg border p-3 border-white/15 ring-1 ring-inset ring-white/10 bg-gradient-to-br from-black/40 via-black/30 to-transparent backdrop-blur-md">
<div className="text-xs font-medium tracking-tight text-white/80 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>The Build</div>
<ul className="mt-2 space-y-1.5 text-xs text-white/70">
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-hard-drive" data-lucide="hard-drive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="2" y1="12" y2="12"></line><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" x2="6.01" y1="16" y2="16"></line><line x1="10" x2="10.01" y1="16" y2="16"></line></svg> Self‑hosted vector DB + embeddings</li>
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-key-round" data-lucide="key-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" fill="currentColor" r=".5"></circle></svg> SAML/OIDC SSO + RBAC</li>
<li className="flex items-start gap-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-file-lock-2" data-lucide="file-lock-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><rect height="5" rx="1" width="8" x="2" y="13"></rect><path d="M8 13v-2a2 2 0 1 0-4 0v2"></path></svg> Audit logs, PII redaction, data residency</li>
</ul>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-gray-400 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Enterprise‑grade controls</div>
<a className="text-xs inline-flex items-center gap-1 text-white/80 hover:text-white font-manrope" href="#book" style={{transition: 'outline 0.1s ease-in-out'}}>Request assessment <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-center">
<a className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm sm:text-base font-medium tracking-tight transition bg-gradient-to-br from-white/20 via-white/10 to-white/5 hover:from-white/30 hover:via-white/20 hover:to-white/10 border-white/20 text-white shadow-sm backdrop-blur-md ring-1 ring-inset ring-white/10 font-manrope" href="#book">
              Get an enterprise proposal
              <svg className="lucide lucide-shield" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="mt-20 sm:mt-28" id="industries">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-montserrat font-medium">Industries we serve</h2>
<p className="mt-2 text-sm sm:text-base text-white/70 font-manrope">We adapt patterns to your domain, systems, and compliance requirements.</p>
</div>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
<div className="rounded-xl border p-3 sm:p-4 bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/15 ring-1 ring-inset ring-white/10 backdrop-blur-md">
<div className="flex items-center gap-2">
<svg className="lucide lucide-shopping-cart text-white/80" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
<span className="text-sm font-medium font-manrope">E‑commerce</span>
</div>
</div>
<div className="rounded-xl border p-3 sm:p-4 bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/15 ring-1 ring-inset ring-white/10 backdrop-blur-md">
<div className="flex items-center gap-2">
<svg className="lucide lucide-home text-white/80" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-sm font-medium font-manrope">Real Estate</span>
</div>
</div>
<div className="rounded-xl border p-3 sm:p-4 bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/15 ring-1 ring-inset ring-white/10 backdrop-blur-md">
<div className="flex items-center gap-2">
<svg className="lucide lucide-app-window text-white/80" data-lucide="app-window" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="M10 4v4"></path><path d="M2 8h20"></path><path d="M6 4v4"></path></svg>
<span className="text-sm font-medium font-manrope">B2B SaaS</span>
</div>
</div>
<div className="rounded-xl border p-3 sm:p-4 bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/15 ring-1 ring-inset ring-white/10 backdrop-blur-md">
<div className="flex items-center gap-2">
<svg className="lucide lucide-stethoscope text-white/80" data-lucide="stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg>
<span className="text-sm font-medium font-manrope">Healthcare</span>
</div>
</div>
<div className="rounded-xl border p-3 sm:p-4 bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/15 ring-1 ring-inset ring-white/10 backdrop-blur-md">
<div className="flex items-center gap-2">
<svg className="lucide lucide-banknote text-white/80" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
<span className="text-sm font-medium font-manrope">Finance</span>
</div>
</div>
<div className="rounded-xl border p-3 sm:p-4 bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/15 ring-1 ring-inset ring-white/10 backdrop-blur-md">
<div className="flex items-center gap-2">
<svg className="lucide lucide-graduation-cap text-white/80" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<span className="text-sm font-medium font-manrope">Education</span>
</div>
</div>
</div>
</div>
</section>

<section className="mt-20 sm:mt-28" id="faq">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-montserrat font-medium">Resources &amp; FAQs</h2>
<p className="mt-2 text-sm sm:text-base text-white/70 font-manrope">Answers to common questions about scope, timeline, cost, and security.</p>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
<details className="group rounded-2xl border p-5 bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/15 ring-1 ring-inset ring-white/10 backdrop-blur-md open:from-white/15 open:via-white/10">
<summary className="flex cursor-pointer items-center justify-between gap-3">
<span className="text-sm font-medium tracking-tight font-manrope">What does a typical 2–6 week engagement include?</span>
<svg className="lucide lucide-chevron-down transition group-open:rotate-180 text-white/70" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="mt-3 text-sm text-white/70 font-manrope">
              Architecture, UI/UX, AI agent/RAG setup, integrations, and analytics. We launch a usable v1 with KPIs and iterate weekly.
            </div>
</details>
<details className="group rounded-2xl border p-5 bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/15 ring-1 ring-inset ring-white/10 backdrop-blur-md">
<summary className="flex cursor-pointer items-center justify-between gap-3">
<span className="text-sm font-medium tracking-tight font-manrope">How do you handle data security and compliance?</span>
<svg className="lucide lucide-chevron-down transition group-open:rotate-180 text-white/70" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="mt-3 text-sm text-white/70 font-manrope">
              Least‑privilege access, encrypted transit/storage, PII redaction, audit logs, and optional private cloud/on‑prem. We align with your internal policies.
            </div>
</details>
<details className="group rounded-2xl border p-5 bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/15 ring-1 ring-inset ring-white/10 backdrop-blur-md">
<summary className="flex cursor-pointer items-center justify-between gap-3">
<span className="text-sm font-medium tracking-tight font-manrope">Which models and stack do you use?</span>
<svg className="lucide lucide-chevron-down transition group-open:rotate-180 text-white/70" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="mt-3 text-sm text-white/70 font-manrope">
              Node/Python services, vector DBs, and best‑fit LLMs with tool use. We support MCP for 8,000+ integrations and can self‑host where needed.
            </div>
</details>
<details className="group rounded-2xl border p-5 bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/15 ring-1 ring-inset ring-white/10 backdrop-blur-md">
<summary className="flex cursor-pointer items-center justify-between gap-3">
<span className="text-sm font-medium tracking-tight font-manrope">What does pricing look like?</span>
<svg className="lucide lucide-chevron-down transition group-open:rotate-180 text-white/70" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="mt-3 text-sm text-white/70 font-manrope">
              Fixed‑scope sprints for MVPs, or monthly retainers for ongoing enhancements. You’ll get a firm quote with milestones after the strategy call.
            </div>
</details>
<details className="group rounded-2xl border p-5 bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/15 ring-1 ring-inset ring-white/10 backdrop-blur-md md:col-span-2">
<summary className="flex cursor-pointer items-center justify-between gap-3">
<span className="text-sm font-medium tracking-tight font-manrope">Who owns the IP?</span>
<svg className="lucide lucide-chevron-down transition group-open:rotate-180 text-white/70" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="mt-3 text-sm text-white/70 font-manrope">
              You do. We transfer code, infra scripts, and documentation at handoff. We can also provide ongoing SLAs.
            </div>
</details>
</div>
</div>
</section>

<section className="mt-20 sm:mt-28" id="book">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="rounded-2xl border p-6 sm:p-7 bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/15 ring-1 ring-inset ring-white/10 backdrop-blur-md">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs shadow-sm backdrop-blur-md border-white/10 bg-gradient-to-r from-white/10 to-transparent text-white/70">
<svg className="lucide lucide-calendar" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Free 30‑minute call
            </div>
<h3 className="mt-3 text-xl sm:text-2xl font-montserrat font-medium tracking-tight">Book your technical strategy session</h3>
<p className="mt-2 text-sm text-white/70 font-manrope">
              We’ll review goals, data sources, and integrations. Expect a tailored plan with timeline, stack, and ROI assumptions in 2–3 days.
            </p>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="flex items-center gap-2"><svg className="lucide lucide-clock text-white/70" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> 2–6 week delivery windows</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-target text-white/70" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg> Outcome‑driven scope</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 text-white/70" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Clear milestones &amp; handoff</li>
</ul>
</div>
<form className="rounded-2xl border p-6 sm:p-7 bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/15 ring-1 ring-inset ring-white/10 backdrop-blur-md" id="contactForm">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="block text-xs text-white/70 font-manrope" htmlFor="name">Full name</label>
<input className="mt-1 w-full bg-white/5 backdrop-blur-md text-sm placeholder:text-white/40 focus:outline-none px-3 py-2 ring-1 ring-inset rounded-lg text-white ring-white/15 focus:ring-white/25" id="name" name="name" placeholder="Alex Founder" required=""/>
</div>
<div>
<label className="block text-xs text-white/70 font-manrope" htmlFor="email">Email</label>
<input className="mt-1 w-full bg-white/5 backdrop-blur-md text-sm placeholder:text-white/40 focus:outline-none px-3 py-2 ring-1 ring-inset rounded-lg text-white ring-white/15 focus:ring-white/25" id="email" name="email" placeholder="alex@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs text-white/70 font-manrope" htmlFor="company">Company</label>
<input className="mt-1 w-full bg-white/5 backdrop-blur-md text-sm placeholder:text-white/40 focus:outline-none px-3 py-2 ring-1 ring-inset rounded-lg text-white ring-white/15 focus:ring-white/25" id="company" name="company" placeholder="Company LLC"/>
</div>
<div>
<label className="block text-xs text-white/70 font-manrope" htmlFor="budget">Budget</label>
<select className="mt-1 w-full bg-white/5 backdrop-blur-md text-sm focus:outline-none px-3 py-2 ring-1 ring-inset rounded-lg text-white ring-white/15 focus:ring-white/25" id="budget" name="budget">
<option className="bg-black">Undisclosed</option>
<option className="bg-black">$10k–$25k</option>
<option className="bg-black">$25k–$60k</option>
<option className="bg-black">$60k+</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="block text-xs text-white/70 font-manrope" htmlFor="goals">Goals</label>
<textarea className="mt-1 w-full bg-white/5 backdrop-blur-md text-sm placeholder:text-white/40 focus:outline-none px-3 py-2 ring-1 ring-inset rounded-lg text-white ring-white/15 focus:ring-white/25" id="goals" name="goals" placeholder="What are you trying to build or automate?" rows="4"></textarea>
</div>
<div className="sm:col-span-2 flex items-center justify-between">
<div className="text-[11px] text-white/60 font-manrope">By submitting, you agree to be contacted about your project.</div>
<button className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium tracking-tight transition bg-gradient-to-br from-white/20 via-white/10 to-white/5 hover:from-white/30 hover:via-white/20 hover:to-white/10 border-white/20 text-white shadow-sm backdrop-blur-md ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-send" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                  Submit request
                </button>
</div>
</div>
</form>
</div>
<div className="mt-6 flex items-center justify-center text-xs text-white/60 font-manrope">
          Prefer to email? <a className="ml-1 text-white/80 hover:text-white underline decoration-white/30 hover:decoration-white" href="mailto:hello@buildcraft.ai">hello@buildcraft.ai</a>
</div>
</div>
</section>

<footer className="mt-20 sm:mt-28 border-t border-white/10 bg-black/40 backdrop-blur-xl">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg ring-1 grid place-items-center bg-white/10 ring-white/15 backdrop-blur-md">
<svg className="lucide lucide-blocks text-white/90" data-lucide="blocks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect height="8" rx="1" width="8" x="14" y="2"></rect></svg>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-white/90 font-manrope">Buildcraft AI</div>
<div className="text-xs text-white/60 font-manrope">Your integrated fullstack AI partner</div>
</div>
</div>
<nav className="grid grid-cols-2 sm:flex gap-3 text-sm text-white/70">
<a className="hover:text-white" href="#solutions">Solutions</a>
<a className="hover:text-white" href="#industries">Industries</a>
<a className="hover:text-white" href="#how-it-works">Process</a>
<a className="hover:text-white" href="#portfolio">Portfolio</a>
<a className="hover:text-white" href="#faq">Resources</a>
<a className="hover:text-white" href="#book">Book</a>
</nav>
<div className="flex items-center gap-3">
<a aria-label="Twitter" className="h-9 w-9 grid place-items-center rounded-lg ring-1 ring-white/15 bg-white/10 hover:bg-white/15" href="#">
<svg className="lucide lucide-twitter text-white/80" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="LinkedIn" className="h-9 w-9 grid place-items-center rounded-lg ring-1 ring-white/15 bg-white/10 hover:bg-white/15" href="#">
<svg className="lucide lucide-linkedin text-white/80" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="GitHub" className="h-9 w-9 grid place-items-center rounded-lg ring-1 ring-white/15 bg-white/10 hover:bg-white/15" href="#">
<svg className="lucide lucide-github text-white/80" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
<div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/60 font-manrope">
<div>© <span id="year">2025</span> Buildcraft AI. All rights reserved.</div>
<div className="flex items-center gap-3">
<a className="hover:text-white" href="#">Privacy</a>
<span className="text-white/30">•</span>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</div>
</footer>

<div className="pointer-events-none fixed bottom-4 right-4 z-[60] hidden" id="toast">
<div className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium tracking-tight bg-gray-500/15 text-gray-200 border-gray-500/25 shadow-sm backdrop-blur-md ring-1 ring-inset ring-gray-500/20">
<svg className="lucide lucide-check" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Thanks! We’ll reach out shortly.</span>
</div>
</div>



    </>
  );
}
