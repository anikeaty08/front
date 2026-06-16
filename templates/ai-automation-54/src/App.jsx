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
display: ['Plus Jakarta Sans', 'sans-serif'],
},
colors: {
brand: {
dark: '#050505',
gray: '#0A0A0A',
accent: '#3b82f6',
violet: '#8b5cf6',
}
},
animation: {
'blob': 'blob 7s infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'shimmer': 'shimmer 2s linear infinite',
'spotlight': 'spotlight 2s ease .75s 1 forwards',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
shimmer: {
'from': { backgroundPosition: '0 0' },
'to': { backgroundPosition: '-200% 0' }
},
spotlight: {
'0%': { opacity: 0, transform: 'translate(-72%, -62%) scale(0.5)' },
'100%': { opacity: 1, transform: 'translate(-50%,-40%) scale(1)' },
}
}
}
}
}



      // Simple Intersection Observer for scroll animations
      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.1
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.reveal').forEach(el => {
              observer.observe(el);
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold text-xs group-hover:scale-105 transition-transform">
            SU
          </div>
<span className="font-display font-semibold tracking-tight text-sm text-white/90 group-hover:text-white transition-colors">
            SUFYAN URAIZEE
          </span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-white transition-colors" href="#projects">
            Work
          </a>
<a className="hover:text-white transition-colors" href="#pricing">
            Pricing
          </a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex text-sm font-medium text-white hover:text-blue-400 transition-colors" href="#contact">
            Contact
          </a>
<button className="shiny-cta text-xs" onclick="document.getElementById('contact').scrollIntoView()">
<span>Book a Call</span>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 bg-grid -z-10"></div>
<div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
<div className="absolute top-0 -right-4 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-medium tracking-wide mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
          ACCEPTING NEW PROJECTS
        </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] animate-fade-in-up text-5xl font-semibold text-white tracking-tight font-display mb-8" style={{animationDelay: '0.1s'}}>
          SUFYAN
        </h1>
<p className="md:text-xl leading-relaxed animate-fade-in-up text-lg text-neutral-400 max-w-2xl mr-auto mb-10 ml-auto" style={{animationDelay: '0.2s'}}>
          Helping founders launch faster, convert better, and automate smarter
          through premium web design and custom AI workflows.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
<button className="shiny-cta" onclick="document.getElementById('contact').scrollIntoView()">
<span className="flex items-center gap-2">Book a Free Call</span>
</button>
<a className="hover:text-white hover:bg-white/5 transition-all flex items-center gap-2 hover:border-white/10 font-medium text-neutral-300 border-transparent border rounded-full pt-3 pr-8 pb-3 pl-8" href="#projects">
            View My Work
          </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 animate-bounce">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevrons-down" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m7 6l5 5l5-5M7 13l5 5l5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</section>

<section className="py-24 px-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
<div className="">
<h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4">
              How I Can Help
            </h2>
<p className="text-neutral-400 max-w-md">
              Bridging the gap between beautiful design and intelligent
              automation.
            </p>
</div>
<div className="h-px bg-white/10 flex-grow md:mx-8"></div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl glass-card-hover group reveal">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/20 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-square" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3 font-display">
              Strategic Consultations
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Clear direction before execution. We map out your digital
              infrastructure to ensure every tool and pixel serves a business
              goal.
            </p>
</div>

<div className="glass-panel p-8 rounded-2xl glass-card-hover group reveal" style={{transitionDelay: '0.1s'}}>
<div className="w-12 h-12 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-6 group-hover:bg-violet-500/20 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-template" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="7" rx="1" width="18" x="3" y="3"></rect>
<rect height="7" rx="1" width="9" x="3" y="14"></rect>
<rect height="7" rx="1" width="5" x="16" y="14"></rect>
</g>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3 font-display">
              UI/UX Design
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Conversion-focused, modern interfaces built on Figma and developed
              for speed. Clean aesthetics that build trust instantly.
            </p>
</div>

<div className="glass-panel p-8 rounded-2xl glass-card-hover group reveal" style={{transitionDelay: '0.2s'}}>
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500/20 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:cpu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path>
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="8" rx="1" width="8" x="8" y="8"></rect>
</g>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3 font-display">
              AI Automation
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Custom n8n workflows and AI agents that handle lead gen, customer
              support, and data entry while you focus on strategy.
            </p>
</div>
</div>
</div>
</section>
<section className="py-12 px-6 relative reveal">
<div className="max-w-7xl mx-auto">
<div className="w-full h-[500px] glass-panel bg-black/40 relative overflow-hidden rounded-2xl border border-white/10 ring-1 ring-white/5 group">

<div className="pointer-events-none absolute -top-40 left-0 md:left-60 md:-top-20 z-0">
<svg className="animate-spotlight w-[138%] lg:w-[84%] h-[169%] opacity-0" fill="none" viewbox="0 0 3787 2842" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter)">
<ellipse cx="1924.71" cy="273.501" fill="white" fillOpacity="0.21" rx="1924.71" ry="273.501" transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"></ellipse>
</g>
<defs>
<filter colorinterpolationfilters="sRGB" filterunits="userSpaceOnUse" height="2840.26" id="filter" width="3785.16" x="0.860352" y="0.838989">
<feflood flood-opacity="0" result="BackgroundImageFix"></feflood>
<feblend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feblend>
<fegaussianblur result="effect1_foregroundBlur_1065_8" stddeviation="151"></fegaussianblur>
</filter>
</defs>
</svg>
</div>
<div className="flex flex-col md:flex-row h-full relative z-10">

<div className="flex-1 p-8 md:p-16 flex flex-col justify-center pointer-events-none">
<h2 className="text-4xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-display mb-6 tracking-tight">
                Interactive 3D
              </h2>
<p className="text-neutral-400 max-w-lg text-lg leading-relaxed">
                Bring your UI to life with beautiful 3D scenes. Create immersive
                experiences that capture attention and enhance your design.
              </p>
</div>

<div className="flex-1 relative h-full w-full min-h-[300px]">
<spline-viewer className="w-full h-full" url="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"></spline-viewer>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900/20 border-y border-white/5" id="projects">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-16 text-center reveal">
          Recent Deployments
        </h2>
<div className="grid lg:grid-cols-3 gap-8">

<div className="glass-panel rounded-2xl overflow-hidden group reveal">
<div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_800w.jpg')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105 transform"></div>
<div className="relative z-10 bg-black/60 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
<span className="text-xs font-medium text-white tracking-wide">
                  LEAD GEN SYSTEM
                </span>
</div>
</div>
<div className="p-8">
<h3 className="text-xl font-semibold font-display mb-2">
                n8n Lead Scraper
              </h3>
<p className="text-sm text-neutral-400 mb-6">
                Automated B2B lead scraping, enrichment via Clay, and
                personalized outreach sequence.
              </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 bg-white/5 rounded text-[10px] uppercase tracking-wider text-neutral-400 border border-white/5">
                  n8n
                </span>
<span className="px-2 py-1 bg-white/5 rounded text-[10px] uppercase tracking-wider text-neutral-400 border border-white/5">
                  Clay
                </span>
<span className="px-2 py-1 bg-white/5 rounded text-[10px] uppercase tracking-wider text-neutral-400 border border-white/5">
                  OpenAI
                </span>
</div>
<div className="flex items-center gap-2 text-xs text-green-400 font-medium">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11l3 3L22 4"></path>
</g>
</svg>
<span>Saved 20hr/week</span>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl overflow-hidden group reveal" style={{transitionDelay: '0.1s'}}>
<div className="h-48 bg-gradient-to-br from-blue-900/20 to-violet-900/20 flex items-center justify-center relative overflow-hidden">

<div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent opacity-50"></div>
<div className="relative z-10 bg-black/60 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
<span className="text-xs font-medium text-white tracking-wide">
                  VOICE AGENT
                </span>
</div>
</div>
<div className="p-8">
<h3 className="text-xl font-semibold font-display mb-2">
                GenAI Receptionist
              </h3>
<p className="text-sm text-neutral-400 mb-6">
                24/7 AI voice agent that answers calls, qualifies leads, and
                syncs appointments to CRM.
              </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 bg-white/5 rounded text-[10px] uppercase tracking-wider text-neutral-400 border border-white/5">
                  Vapi
                </span>
<span className="px-2 py-1 bg-white/5 rounded text-[10px] uppercase tracking-wider text-neutral-400 border border-white/5">
                  Twilio
                </span>
<span className="px-2 py-1 bg-white/5 rounded text-[10px] uppercase tracking-wider text-neutral-400 border border-white/5">
                  Airtable
                </span>
</div>
<div className="flex items-center gap-2 text-xs text-green-400 font-medium">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11l3 3L22 4"></path>
</g>
</svg>
<span>Zero missed calls</span>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl overflow-hidden group reveal" style={{transitionDelay: '0.2s'}}>
<div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-violet-500/30 blur-3xl"></div>
<div className="relative z-10 bg-black/60 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
<span className="text-xs font-medium text-white tracking-wide">
                  CONTENT ENGINE
                </span>
</div>
</div>
<div className="p-8">
<h3 className="text-xl font-semibold font-display mb-2">
                Auto-Blogger
              </h3>
<p className="text-sm text-neutral-400 mb-6">
                End-to-end content system. Research, writing, image generation,
                and SEO formatting on autopilot.
              </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 bg-white/5 rounded text-[10px] uppercase tracking-wider text-neutral-400 border border-white/5">
                  GPT-4
                </span>
<span className="px-2 py-1 bg-white/5 rounded text-[10px] uppercase tracking-wider text-neutral-400 border border-white/5">
                  WordPress API
                </span>
<span className="px-2 py-1 bg-white/5 rounded text-[10px] uppercase tracking-wider text-neutral-400 border border-white/5">
                  Midjourney
                </span>
</div>
<div className="flex items-center gap-2 text-xs text-green-400 font-medium">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11l3 3L22 4"></path>
</g>
</svg>
<span>30+ articles / month</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4">
            Transparent Pricing
          </h2>
<p className="text-neutral-400">
            Invest in clarity and conversion. No hidden fees.
          </p>
</div>
<div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">

<div className="glass-panel p-8 rounded-2xl reveal hover:border-white/20 transition-colors">
<h3 className="text-lg font-medium text-neutral-300">Starter Kit</h3>
<div className="mt-4 mb-6">
<span className="text-3xl font-bold font-display text-white">
                $399
              </span>
<span className="text-neutral-500 text-sm">/one-time</span>
</div>
<p className="text-xs text-neutral-400 mb-8 h-10">
              Perfect for validating ideas quickly with a polished, professional
              look.
            </p>
<a className="flex w-full justify-center items-center py-2.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium mb-8" href="#contact">
              Get Started
            </a>
<ul className="space-y-4 text-sm text-neutral-300">
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-neutral-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Premium Template Design
              </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-neutral-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Up to 3 Pages
              </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-neutral-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Basic SEO Setup
              </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-neutral-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Fully Responsive
              </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-neutral-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Email Support
              </li>
</ul>
</div>

<div className="relative glass-panel p-8 rounded-2xl border-blue-500/30 bg-blue-900/5 reveal" style={{transitionDelay: '0.1s'}}>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full text-[10px] font-bold tracking-wider text-white uppercase shadow-lg">
              Most Popular
            </div>
<h3 className="text-lg font-medium text-white">Premium Build</h3>
<div className="mt-4 mb-6">
<span className="text-xs text-neutral-400 align-top mt-1 inline-block">
                Starting at
              </span>
<span className="text-4xl font-bold font-display text-white">
                $899
              </span>
</div>
<p className="text-xs text-neutral-300 mb-8 h-10">
              Tailored design &amp; advanced tech stack for established
              businesses seeking impact.
            </p>
<button className="w-full shiny-cta flex justify-center items-center mb-8" onclick="document.getElementById('contact').scrollIntoView()">
<span>Book Strategy Call</span>
</button>
<ul className="space-y-4 text-sm text-white">
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-blue-400 iconify--lucide" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11l3 3L22 4"></path>
</g>
</svg>
                100% Custom Design
              </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-blue-400 iconify--lucide" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11l3 3L22 4"></path>
</g>
</svg>
                5+ Pages &amp; CMS
              </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-blue-400 iconify--lucide" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11l3 3L22 4"></path>
</g>
</svg>
                Tech SEO &amp; Speed Opt.
              </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-blue-400 iconify--lucide" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11l3 3L22 4"></path>
</g>
</svg>
                Advanced Animations
              </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-blue-400 iconify--lucide" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11l3 3L22 4"></path>
</g>
</svg>
                WhatsApp &amp; Email Support
              </li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl reveal hover:border-white/20 transition-colors" style={{transitionDelay: '0.2s'}}>
<h3 className="text-lg font-medium text-neutral-300">Custom Quote</h3>
<div className="mt-4 mb-6">
<span className="text-3xl font-bold font-display text-white">
                Variable
              </span>
</div>
<p className="text-xs text-neutral-400 mb-8 h-10">
              Complex automations, full SaaS platforms, or ongoing retainer
              work.
            </p>
<a className="flex w-full justify-center items-center py-2.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium mb-8" href="#contact">
              Contact Me
            </a>
<ul className="space-y-4 text-sm text-neutral-300">
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-neutral-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Complex AI Agents
              </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-neutral-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Full-Stack Development
              </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-neutral-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Database Design
              </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-neutral-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Custom Integrations
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-black to-neutral-900/50 border-white/5 border-t pt-24 pr-6 pb-24 pl-6" id="about">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row items-center gap-16 reveal">
<div className="md:w-1/2 order-2 md:order-1">
<h2 className="text-3xl font-display font-semibold mb-6">
              I focus on speed, clarity, and results.
            </h2>
<p className="text-neutral-400 leading-loose mb-6">
              I’m Sufyan — an AI Automation &amp; Web Specialist helping
              businesses scale through intelligent design and smart systems.
            </p>
<p className="text-neutral-400 leading-loose mb-8">
              The tech landscape is noisy. My job is to filter the signal from
              the noise and build you assets that actually generate revenue, not
              just look pretty. Whether it's saving 20 hours a week with
              automation or doubling conversion rates with a new site, I build
              for ROI.
            </p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
<circle cx="4" cy="4" r="2"></circle>
</g>
</svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:github" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</g>
</svg>
</a>
</div>
</div>
<div className="md:w-1/2 order-1 md:order-2">
<div className="relative w-full aspect-square max-w-sm mx-auto">

<div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-violet-600 rounded-full blur-[80px] opacity-20"></div>

<div className="relative h-full w-full rounded-2xl overflow-hidden bg-neutral-800 border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">

<img alt="Sufyan Uraizee" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/pw/AP1GczPySUKqrLUqM5kbckcqjHINC0g3GqSucwgJeCbPiJAGo6xsu4y4kQC0OrqOlixfRSDiRWLmR88qjxNtdyzaevQjgSGR9rL_TpUYUn0gNcY27qcflZeRGumlTipojurGLSu4_jCODvDcaf06FNVDa0Ry2A=w758-h869-s-no-gm"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black -z-10"></div>
<div className="max-w-2xl mx-auto reveal">
<h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-white mb-8">
          Ready to build something that works while you sleep?
        </h2>
<div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
<button className="shiny-cta">
<span>Book a Call</span>
</button>
<a className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 text-white transition-colors flex items-center justify-center gap-2" href="mailto:hello@sufyanuraizee.com">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</g>
</svg>
            Email Me
          </a>
</div>
<p className="mt-8 text-xs text-neutral-500">
          Response time: &lt; 24 hours
        </p>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black text-center md:text-left">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm text-neutral-500">
          © 2024 Sufyan Uraizee. All rights reserved.
        </div>
<div className="flex gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Email</a>
</div>
</div>
</footer>


    </>
  );
}
