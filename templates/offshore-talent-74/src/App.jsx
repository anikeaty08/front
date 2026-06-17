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



        // Mobile Menu Logic
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // FAQ Logic
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('iconify-icon');
            
            content.classList.toggle('hidden');
            if (content.classList.contains('hidden')) {
                icon.setAttribute('icon', 'solar:add-circle-linear');
            } else {
                icon.setAttribute('icon', 'solar:minus-circle-linear');
            }
        }

        // Slider Logic
        const slider = document.getElementById('slider');
        const slideLeft = document.getElementById('slideLeft');
        const slideRight = document.getElementById('slideRight');

        slideLeft.addEventListener('click', () => {
            slider.scrollBy({ left: -350, behavior: 'smooth' });
        });

        slideRight.addEventListener('click', () => {
            slider.scrollBy({ left: 350, behavior: 'smooth' });
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight text-white flex items-center gap-2" href="#">
<span className="tracking-widest uppercase text-sm">Enlighten Schola</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#roles">Talent</a>
<a className="hover:text-white transition-colors" href="#resources">Resources</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex h-9 items-center justify-center rounded-full bg-white px-4 text-xs font-medium text-zinc-950 transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-900" href="#contact">
                    Book a Call
                </a>

<button className="md:hidden text-white" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden absolute top-16 left-0 w-full bg-zinc-950 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden" id="mobile-menu">
<a className="text-zinc-400 hover:text-white" href="#about">About</a>
<a className="text-zinc-400 hover:text-white" href="#process">Process</a>
<a className="text-zinc-400 hover:text-white" href="#roles">Talent</a>
<a className="text-zinc-400 hover:text-white" href="#contact">Book a Call</a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950/0 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl">
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-[1.1] mb-6">
                    Build offshore teams that <span className="text-zinc-400">feel local.</span><br/>
                    Without the chaos.
                </h1>
<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mb-10">
                    Enlighten Schola helps tech startups and software companies hire top offshore talent with zero guesswork. We handle hiring, vetting, compliance, and management — so you get execution, not overhead.
                </p>
<div className="flex flex-wrap gap-4">
<a className="h-12 inline-flex items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200" href="#contact">
                        Book a 30-Minute Strategy Call
                    </a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">

<div className="glass-panel rounded-xl p-6 hover:bg-zinc-900/50 transition duration-300">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium tracking-tight mb-2">Your Embedded Offshore Talent Partner</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Full-time offshore professionals working inside your team — Slack, standups, and delivery — without agency bloat or hiring risk.</p>
</div>

<div className="glass-panel rounded-xl p-6 hover:bg-zinc-900/50 transition duration-300">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium tracking-tight mb-2">$105k saved. Scaled in 6 months.</h3>
<p className="text-sm text-zinc-400 leading-relaxed">A SaaS startup embedded three offshore engineers to build, launch, and scale their product — from MVP to 23k+ daily transactions.</p>
</div>

<div className="glass-panel rounded-xl p-6 hover:bg-zinc-900/50 transition duration-300">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="solar:filter-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium tracking-tight mb-2">300 applications. 1 hire.</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Our multi-layer vetting funnel ensures only the top 1% of talent reaches your interview — saving time, money, and hiring mistakes.</p>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 py-12 bg-zinc-900/30">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-8">Trusted by fast-growing teams</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-semibold tracking-tight text-white flex items-center gap-2"><iconify-icon icon="solar:planet-linear"></iconify-icon> Huly</span>
<span className="text-xl font-semibold tracking-tight text-white flex items-center gap-2"><iconify-icon icon="solar:atom-linear"></iconify-icon> OptiWise</span>
<span className="text-xl font-semibold tracking-tight text-white flex items-center gap-2"><iconify-icon icon="solar:waterdrops-linear"></iconify-icon> Cerulean</span>
<span className="text-xl font-semibold tracking-tight text-white flex items-center gap-2"><iconify-icon icon="solar:washing-machine-linear"></iconify-icon> WashIQ</span>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Offshore hiring shouldn’t feel risky or disconnected.</h2>
</div>
<div>
<p className="text-zinc-400 leading-relaxed mb-6">
                        Enlighten Schola started three years ago with a simple belief. What began as a small talent experiment evolved into a structured system that helps global startups build reliable, high-performing teams.
                    </p>
<p className="text-zinc-400 leading-relaxed">
                        Today, we focus on solving the real problems founders face: bad hires, communication gaps, and lost runway — by designing offshore teams that actually work.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">How We De-Risk Offshore Hiring</h2>
<p className="text-lg text-zinc-400">We didn’t remove risk with promises. We removed it with process.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="glass-panel p-8 rounded-2xl col-span-1 md:col-span-2">
<div className="mb-6 text-white"><iconify-icon icon="solar:shield-check-linear" width="32"></iconify-icon></div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Trust &amp; Transparency</h3>
<p className="text-zinc-400 text-sm">Weekly timesheets and direct daily communication. No black boxes.</p>
</div>

<div className="glass-panel p-8 rounded-2xl">
<div className="mb-6 text-white"><iconify-icon icon="solar:medal-ribbon-linear" width="32"></iconify-icon></div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Hiring Quality</h3>
<p className="text-zinc-400 text-sm">Top 5% vetted talent. One hire per 300 applications.</p>
</div>

<div className="glass-panel p-8 rounded-2xl">
<div className="mb-6 text-white"><iconify-icon icon="solar:hand-shake-linear" width="32"></iconify-icon></div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Reliability Guarantee</h3>
<p className="text-zinc-400 text-sm">Background verification plus free replacement if expectations aren’t met.</p>
</div>

<div className="glass-panel p-8 rounded-2xl col-span-1 md:col-span-2">
<div className="mb-6 text-white"><iconify-icon icon="solar:user-id-linear" width="32"></iconify-icon></div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Dedicated Management</h3>
<p className="text-zinc-400 text-sm">A Client Success Manager ensures delivery, alignment, and accountability.</p>
</div>

<div className="glass-panel p-8 rounded-2xl">
<div className="mb-6 text-white"><iconify-icon icon="solar:document-add-linear" width="32"></iconify-icon></div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Compliance &amp; IP Safety</h3>
<p className="text-zinc-400 text-sm">NDA, IP protection, payroll, infrastructure, and local compliance handled end-to-end.</p>
</div>

<div className="glass-panel p-8 rounded-2xl col-span-1 md:col-span-3 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div>
<div className="mb-4 text-white"><iconify-icon icon="solar:chat-square-check-linear" width="32"></iconify-icon></div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Culture &amp; Professionalism</h3>
<p className="text-zinc-400 text-sm max-w-xl">Continuous training in communication and workplace etiquette to ensure seamless integration.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20 border-y border-white/5" id="process">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-16 text-center">How It Works</h2>
<div className="relative max-w-4xl mx-auto">
<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2 hidden md:block"></div>

<div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
<div className="md:w-1/2 md:text-right md:pr-12">
<h3 className="text-xl text-white font-medium tracking-tight">Share Your Requirement</h3>
<p className="text-zinc-400 text-sm mt-2">Tell us what role you need and what you’re building. No lengthy JDs required.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center -translate-x-0 md:-translate-x-1/2 text-white z-10">
<span className="text-xs font-medium">1</span>
</div>
<div className="md:w-1/2 md:pl-12 pl-12"></div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
<div className="md:w-1/2 md:text-right md:pr-12 hidden md:block"></div>
<div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center -translate-x-0 md:-translate-x-1/2 text-white z-10">
<span className="text-xs font-medium">2</span>
</div>
<div className="md:w-1/2 md:pl-12 pl-12">
<h3 className="text-xl text-white font-medium tracking-tight">We Source &amp; Screen</h3>
<p className="text-zinc-400 text-sm mt-2">We handle outreach, screening, and shortlisting.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
<div className="md:w-1/2 md:text-right md:pr-12">
<h3 className="text-xl text-white font-medium tracking-tight">You Interview, We Vet</h3>
<p className="text-zinc-400 text-sm mt-2">You meet only candidates who’ve already cleared technical and background checks.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center -translate-x-0 md:-translate-x-1/2 text-white z-10">
<span className="text-xs font-medium">3</span>
</div>
<div className="md:w-1/2 md:pl-12 hidden md:block"></div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
<div className="md:w-1/2 md:text-right md:pr-12 hidden md:block"></div>
<div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center -translate-x-0 md:-translate-x-1/2 text-white z-10">
<span className="text-xs font-medium">4</span>
</div>
<div className="md:w-1/2 md:pl-12 pl-12">
<h3 className="text-xl text-white font-medium tracking-tight">Onboarding &amp; Compliance</h3>
<p className="text-zinc-400 text-sm mt-2">Contracts, payroll, infrastructure, and access setup — done by us.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center gap-8">
<div className="md:w-1/2 md:text-right md:pr-12">
<h3 className="text-xl text-white font-medium tracking-tight">Talent Joins Your Team</h3>
<p className="text-zinc-400 text-sm mt-2">Daily standups, Slack communication, overlapping work hours — just like an internal hire.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-white border border-white flex items-center justify-center -translate-x-0 md:-translate-x-1/2 text-black z-10">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
<div className="md:w-1/2 md:pl-12 hidden md:block"></div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="glass-panel border border-zinc-800 rounded-3xl overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-zinc-800">
<div className="flex items-center gap-2 mb-6 text-zinc-400">
<iconify-icon icon="solar:washing-machine-linear" width="20"></iconify-icon>
<span className="text-xs font-medium tracking-wider uppercase">Case Study: WashIQ</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">From MVP to scale in 6 months — without burning runway</h2>
<p className="text-zinc-400 leading-relaxed mb-6">
                            A SaaS founder needed to validate an idea, ship fast, and scale without hiring locally. By onboarding offshore full-stack and DevOps talent through Enlighten Schola, they built a stable product, scaled infrastructure, and supported 23k+ daily transactions — all while saving over $100k in engineering costs.
                        </p>
</div>
<div className="bg-zinc-900/50 p-8 md:p-12 flex flex-col justify-center">
<h3 className="text-white font-medium mb-6">Outcomes</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-1" icon="solar:bolt-circle-bold" width="20"></iconify-icon>
<span className="text-zinc-300">MVP shipped faster</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-1" icon="solar:graph-up-bold" width="20"></iconify-icon>
<span className="text-zinc-300">Scalable system built incrementally</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-1" icon="solar:server-square-bold" width="20"></iconify-icon>
<span className="text-zinc-300">Zero downtime during growth</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-1" icon="solar:wallet-money-bold" width="20"></iconify-icon>
<span className="text-zinc-300">$105k saved compared to local hiring</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/10" id="roles">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Roles We Can Fill</h2>
<p className="text-zinc-400 mb-12">Primarily focused on SaaS startups, software companies, and tech-driven teams.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div>
<div className="h-px w-10 bg-white mb-6"></div>
<h3 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:code-circle-linear"></iconify-icon> Engineering &amp; Tech
                    </h3>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div> AI Engineer</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div> Senior Full-Stack Engineer</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div> Associate Full-Stack Engineer</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div> Mobile App Developer</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div> DevOps Engineer</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div> AI Consultant</li>
</ul>
</div>

<div>
<div className="h-px w-10 bg-white mb-6"></div>
<h3 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:cart-large-linear"></iconify-icon> Sales &amp; Marketing
                    </h3>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div> SDR</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div> Digital Marketer</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div> Lead Generation Specialist</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div> Social Media Manager</li>
</ul>
</div>

<div>
<div className="h-px w-10 bg-white mb-6"></div>
<h3 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:settings-linear"></iconify-icon> Operations &amp; Support
                    </h3>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div> Operations Assistant</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div> Video Editor</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div> Graphic Designer</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div> Customer Support Executive</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Use Cases</h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-white hover:bg-zinc-800 transition" id="slideLeft"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon></button>
<button className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-white hover:bg-zinc-800 transition" id="slideRight"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto no-scrollbar px-6 max-w-7xl mx-auto scroll-smooth snap-x" id="slider">

<div className="min-w-[300px] md:min-w-[350px] snap-center glass-panel p-8 rounded-2xl flex flex-col justify-between h-[320px]">
<div>
<iconify-icon className="text-white mb-4" icon="solar:magic-stick-3-linear" width="28"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Build an AI POC</h3>
<p className="text-sm text-zinc-400">Launch proof-of-concepts or production AI features with AI engineers.</p>
</div>
<a className="text-sm text-white flex items-center gap-1 hover:gap-2 transition-all" href="#contact">Know the pricing <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="min-w-[300px] md:min-w-[350px] snap-center glass-panel p-8 rounded-2xl flex flex-col justify-between h-[320px]">
<div>
<iconify-icon className="text-white mb-4" icon="solar:rocket-2-linear" width="28"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Scale Your MVP</h3>
<p className="text-sm text-zinc-400">Turn early traction into a full product using full-stack teams.</p>
</div>
<a className="text-sm text-white flex items-center gap-1 hover:gap-2 transition-all" href="#contact">Know the pricing <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="min-w-[300px] md:min-w-[350px] snap-center glass-panel p-8 rounded-2xl flex flex-col justify-between h-[320px]">
<div>
<iconify-icon className="text-white mb-4" icon="solar:cloud-storage-linear" width="28"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Optimize Infrastructure</h3>
<p className="text-sm text-zinc-400">Reduce cloud costs and improve reliability with DevOps talent.</p>
</div>
<a className="text-sm text-white flex items-center gap-1 hover:gap-2 transition-all" href="#contact">Know the pricing <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="min-w-[300px] md:min-w-[350px] snap-center glass-panel p-8 rounded-2xl flex flex-col justify-between h-[320px]">
<div>
<iconify-icon className="text-white mb-4" icon="solar:smartphone-linear" width="28"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Ship Mobile Apps</h3>
<p className="text-sm text-zinc-400">Build and launch iOS and Android apps faster.</p>
</div>
<a className="text-sm text-white flex items-center gap-1 hover:gap-2 transition-all" href="#contact">Know the pricing <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="min-w-[300px] md:min-w-[350px] snap-center glass-panel p-8 rounded-2xl flex flex-col justify-between h-[320px]">
<div>
<iconify-icon className="text-white mb-4" icon="solar:call-chat-linear" width="28"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Scale Outbound Sales</h3>
<p className="text-sm text-zinc-400">Book qualified meetings with dedicated SDRs.</p>
</div>
<a className="text-sm text-white flex items-center gap-1 hover:gap-2 transition-all" href="#contact">Know the pricing <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="min-w-[300px] md:min-w-[350px] snap-center glass-panel p-8 rounded-2xl flex flex-col justify-between h-[320px]">
<div>
<iconify-icon className="text-white mb-4" icon="solar:pie-chart-linear" width="28"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Run Performance Marketing</h3>
<p className="text-sm text-zinc-400">Execute PPC, SEO, and growth campaigns without agency overhead.</p>
</div>
<a className="text-sm text-white flex items-center gap-1 hover:gap-2 transition-all" href="#contact">Know the pricing <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="min-w-[300px] md:min-w-[350px] snap-center glass-panel p-8 rounded-2xl flex flex-col justify-between h-[320px]">
<div>
<iconify-icon className="text-white mb-4" icon="solar:file-check-linear" width="28"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Streamline Operations</h3>
<p className="text-sm text-zinc-400">Offload admin and backend work so founders focus on growth.</p>
</div>
<a className="text-sm text-white flex items-center gap-1 hover:gap-2 transition-all" href="#contact">Know the pricing <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div>
<div className="text-white mb-4"><iconify-icon icon="solar:quote-up-square-linear" width="32"></iconify-icon></div>
<p className="text-zinc-300 mb-6 text-lg leading-relaxed">“They felt like part of our office from day one. We never felt like we were outsourcing.”</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-white">S</div>
<div>
<p className="text-white text-sm font-medium">Sajit R.</p>
<p className="text-zinc-500 text-xs">CTO</p>
</div>
</div>
</div>

<div>
<div className="text-white mb-4"><iconify-icon icon="solar:quote-up-square-linear" width="32"></iconify-icon></div>
<p className="text-zinc-300 mb-6 text-lg leading-relaxed">“We saved over $100k, but the real win was speed. We shipped three times faster.”</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-white">R</div>
<div>
<p className="text-white text-sm font-medium">Rahul M.</p>
<p className="text-zinc-500 text-xs">Founder</p>
</div>
</div>
</div>

<div>
<div className="text-white mb-4"><iconify-icon icon="solar:quote-up-square-linear" width="32"></iconify-icon></div>
<p className="text-zinc-300 mb-6 text-lg leading-relaxed">“The vetting process was real. Our DevOps engineer fixed critical issues in week one.”</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-white">D</div>
<div>
<p className="text-white text-sm font-medium">Deepak N.</p>
<p className="text-zinc-500 text-xs">VP Engineering</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-white mb-12 text-center">FAQs</h2>
<div className="space-y-4">

<div className="border-b border-white/10 pb-4">
<button className="w-full flex items-center justify-between text-left py-2 text-white hover:text-zinc-300 transition-colors" onclick="toggleFaq(this)">
<span className="font-medium">Are the engineers full-time and dedicated?</span>
<iconify-icon className="transform transition-transform duration-300 text-zinc-500" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="hidden text-zinc-400 text-sm mt-2 leading-relaxed pb-2">
                        Yes. Every hire works full-time and exclusively with your team.
                    </div>
</div>
<div className="border-b border-white/10 pb-4">
<button className="w-full flex items-center justify-between text-left py-2 text-white hover:text-zinc-300 transition-colors" onclick="toggleFaq(this)">
<span className="font-medium">Who handles sourcing and vetting?</span>
<iconify-icon className="transform transition-transform duration-300 text-zinc-500" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="hidden text-zinc-400 text-sm mt-2 leading-relaxed pb-2">
                        We do — screening, technical evaluation, background checks, and culture fit.
                    </div>
</div>
<div className="border-b border-white/10 pb-4">
<button className="w-full flex items-center justify-between text-left py-2 text-white hover:text-zinc-300 transition-colors" onclick="toggleFaq(this)">
<span className="font-medium">Will they feel like internal employees?</span>
<iconify-icon className="transform transition-transform duration-300 text-zinc-500" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="hidden text-zinc-400 text-sm mt-2 leading-relaxed pb-2">
                        Yes. They work inside your tools, meetings, and workflows.
                    </div>
</div>
<div className="border-b border-white/10 pb-4">
<button className="w-full flex items-center justify-between text-left py-2 text-white hover:text-zinc-300 transition-colors" onclick="toggleFaq(this)">
<span className="font-medium">What are the contract terms?</span>
<iconify-icon className="transform transition-transform duration-300 text-zinc-500" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="hidden text-zinc-400 text-sm mt-2 leading-relaxed pb-2">
                        Start with 90 days, then move to month-to-month. No long-term lock-ins.
                    </div>
</div>
<div className="border-b border-white/10 pb-4">
<button className="w-full flex items-center justify-between text-left py-2 text-white hover:text-zinc-300 transition-colors" onclick="toggleFaq(this)">
<span className="font-medium">What do you need from us to start?</span>
<iconify-icon className="transform transition-transform duration-300 text-zinc-500" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="hidden text-zinc-400 text-sm mt-2 leading-relaxed pb-2">
                        A clear role and context. We handle everything else.
                    </div>
</div>
<div className="border-b border-white/10 pb-4">
<button className="w-full flex items-center justify-between text-left py-2 text-white hover:text-zinc-300 transition-colors" onclick="toggleFaq(this)">
<span className="font-medium">How do you manage time zones?</span>
<iconify-icon className="transform transition-transform duration-300 text-zinc-500" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="hidden text-zinc-400 text-sm mt-2 leading-relaxed pb-2">
                         We ensure 4–6 hours of overlap with your core working hours.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950/50 to-zinc-950 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Let’s talk about your team.</h2>
<p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">Book 30 minutes to discuss your hiring needs and see if offshore talent makes sense for you — no sales pitch, just clarity.</p>
<a className="h-14 inline-flex items-center justify-center rounded-full bg-white px-10 text-base font-medium text-zinc-950 transition hover:bg-zinc-200" href="#">
                Book a Call
            </a>
</div>
</section>

<footer className="border-t border-white/10 py-12 bg-zinc-950 text-sm">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="max-w-xs">
<span className="text-white font-medium tracking-wide block mb-2">Enlighten Schola</span>
<p className="text-zinc-500 leading-relaxed">Helping tech startups and software companies build high-performing offshore teams — without agency overhead.</p>
</div>
<div className="flex flex-wrap gap-8 text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#roles">Talent</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#resources">Resources</a>
<a className="hover:text-white transition-colors" href="#contact">Book a Call</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 text-zinc-600 text-xs">
            © 2026 Enlighten Schola. All rights reserved.
        </div>
</footer>


    </>
  );
}
