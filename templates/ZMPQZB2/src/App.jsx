import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) { lucide.createIcons(); }
        // Bento hover frame accent
        document.querySelectorAll('.bento-item').forEach((card) => {
          card.addEventListener('mouseenter', () => {
            const frame = card.querySelector('.bento-hover-frame');
            if (frame) frame.style.boxShadow = 'inset 0 0 0 1px rgba(235,165,0,0.45)';
          });
          card.addEventListener('mouseleave', () => {
            const frame = card.querySelector('.bento-hover-frame');
            if (frame) frame.style.boxShadow = 'inset 0 0 0 0px rgba(235,165,0,0)';
          });
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-4 left-0 right-0 z-50">
<div className="mx-auto max-w-7xl px-4">
<div className="h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-between px-3">
<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-400/20 grid place-items-center">
<span className="text-amber-400 text-[11px] tracking-tight font-semibold">GS</span>
</div>
<span className="text-[15px] tracking-tight font-medium">Grids Studios</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
<div className="hidden md:flex items-center gap-2">
<a className="px-4 py-2 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 text-sm transition-all" href="#contact">Work With Us</a>
<a className="px-4 py-2 rounded-full bg-white text-black text-sm hover:bg-white/90 transition-all" href="#portfolio">View Portfolio</a>
</div>
<button aria-label="Open menu" className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors">
<i className="w-5 h-5 text-white/80" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>

<section className="pt-36 pb-24 relative overflow-hidden grid-lines" id="hero">

<div aria-hidden="true" className="absolute inset-0 -z-10" style="
             background:
               radial-gradient(1200px 600px at 50% -10%, rgba(235,165,0,0.10), transparent 55%),
               repeating-linear-gradient(to right, rgba(255,255,255,0.04) 0 1px, transparent 1px 120px),
               repeating-linear-gradient(to bottom, rgba(255,255,255,0.04) 0 1px, transparent 1px 120px);
             mask-image: radial-gradient(1000px 600px at 50% 0%, black 60%, transparent 100%);
           ">
</div>
<div className="mx-auto max-w-7xl px-4">
<div className="max-w-3xl">
<p className="text-[13px] text-white/60 mb-6 hero-subhead" style={{opacity: '0', animation: 'fadeIn 0.9s ease forwards', animationDelay: '.15s'}}>
            Dark canvas. Precision grids. Cinematic motion.
          </p>
<h1 className="hero-title sf-pro-display tracking-tight font-light text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent" style={{opacity: '0', animation: 'slideUp .9s ease forwards', animationDelay: '.25s'}}>
            Building Brands. Creating Legacies.
          </h1>
<p className="mt-6 text-lg text-white/70 max-w-2xl hero-subhead" style={{opacity: '0', animation: 'slideUp .9s ease forwards', animationDelay: '.4s'}}>
            We design beyond limits — crafting timeless visuals, experiences, and stories that leave an impact.
          </p>
<div className="mt-10 flex flex-col sm:flex-row gap-3">
<a className="cta-primary inline-flex items-center justify-center rounded-[32px] px-6 py-3 bg-white text-black text-[15px] font-medium hover:bg-white/90 transition-all hover:-translate-y-0.5" href="#contact" style={{opacity: '0', animation: 'fadeIn .9s ease forwards', animationDelay: '.55s'}}>
              Work With Us
              <i className="ml-2 w-[18px] h-[18px]" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="cta-secondary inline-flex items-center justify-center rounded-[32px] px-6 py-3 border border-white/15 hover:border-white/25 hover:bg-white/5 text-[15px] font-medium transition-all hover:-translate-y-0.5" href="#portfolio" style={{opacity: '0', animation: 'fadeIn .9s ease forwards', animationDelay: '.65s'}}>
              View Portfolio
              <i className="ml-2 w-[18px] h-[18px]" data-lucide="play" strokeWidth="1.5"></i>
</a>
</div>
<p aria-label="Faint glowing grid pattern forming a subtle framework behind content." className="mt-6 text-xs text-white/40">
            Faint glowing grid pattern forming a subtle framework behind content.
          </p>
</div>
</div>
</section>

<section className="py-24 relative" id="approach">
<div className="absolute inset-y-0 left-1/2 -translate-x-1/2 pointer-events-none grid-spine" style={{width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.12), transparent)'}}>
</div>
<div className="mx-auto max-w-7xl px-4">
<div className="max-w-3xl">
<p className="text-[12px] uppercase tracking-wider text-white/50 mb-3" style={{opacity: '0', animation: 'fadeIn .8s ease forwards', animationDelay: '.1s'}}>
            Our Approach
          </p>
<h2 className="text-4xl sm:text-5xl tracking-tight font-light" style={{opacity: '0', animation: 'slideUp .9s ease forwards', animationDelay: '.2s'}}>
            Not your regular agency.
          </h2>
<p className="mt-5 text-[18px] text-white/70" style={{opacity: '0', animation: 'fadeIn .9s ease forwards', animationDelay: '.3s'}}>
            We blend craft, research, and cinematic design to build work that endures. Every layout is structured on a grid — a visual language we use to connect ideas and guide attention. From strategy to handoff, our process is deliberate, measurable, and human.
          </p>
</div>
<div className="mt-12 grid md:grid-cols-3 gap-6">
<div className="pillar rounded-2xl border border-white/10 bg-white/5 hover:bg-white/7.5 transition-colors p-6">
<div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 grid place-items-center mb-4">
<i className="w-5 h-5" data-lucide="ruler" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Precision Systems</h3>
<p className="text-white/60 mt-2">Grids, rhythm, and hierarchy that scale across touchpoints.</p>
</div>
<div className="pillar rounded-2xl border border-white/10 bg-white/5 hover:bg-white/7.5 transition-colors p-6">
<div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 grid place-items-center mb-4">
<i className="w-5 h-5" data-lucide="clapperboard" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Story-First Design</h3>
<p className="text-white/60 mt-2">Clarity, emotion, and meaning — not just visuals.</p>
</div>
<div className="pillar rounded-2xl border border-white/10 bg-white/5 hover:bg-white/7.5 transition-colors p-6">
<div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 grid place-items-center mb-4">
<i className="w-5 h-5" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Professional Polish</h3>
<p className="text-white/60 mt-2">Standards inspired by Keanu Visuals (content) and Pixelpoint (web).</p>
</div>
</div>
<a className="inline-flex items-center gap-2 text-[15px] mt-8 text-amber-400 hover:text-amber-300 transition-colors" href="#services">
          See How We Work
          <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="absolute inset-0 -z-10" style="
            background:
              radial-gradient(800px 400px at 80% 20%, rgba(0,191,166,0.12), transparent 60%),
              repeating-linear-gradient(to right, rgba(255,255,255,0.035) 0 1px, transparent 1px 120px),
              repeating-linear-gradient(to bottom, rgba(255,255,255,0.035) 0 1px, transparent 1px 120px);
           ">
</div>
<div className="mx-auto max-w-7xl px-4">
<div className="max-w-3xl">
<p className="text-[12px] uppercase tracking-wider text-white/50 mb-3">Services</p>
<h2 className="text-4xl sm:text-5xl tracking-tight font-light">From idea to impact.</h2>
<p className="mt-4 text-[18px] text-white/70">Four specialties, one goal — design that endures.</p>
</div>
<div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">

<div className="hidden lg:block absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none grid-connector" style={{height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)'}}></div>
<div className="service-card rounded-2xl border border-white/10 bg-[#0B0B0B] hover:bg-white/5 transition-all p-6">
<div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 grid place-items-center mb-4">
<i className="w-5 h-5" data-lucide="badge-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Branding</h3>
<p className="text-white/60 mt-2">We craft timeless brand systems that tell stories and scale.</p>
<p className="text-white/50 text-sm mt-4">Logo &amp; Identity • Brand Strategy &amp; Guidelines • Packaging &amp; Marketing Assets</p>
</div>
<div className="service-card rounded-2xl border border-white/10 bg-[#0B0B0B] hover:bg-white/5 transition-all p-6">
<div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 grid place-items-center mb-4">
<i className="w-5 h-5" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">UI/UX Design</h3>
<p className="text-white/60 mt-2">Product-first interfaces that feel effortless and convert.</p>
<p className="text-white/50 text-sm mt-4">Websites &amp; Apps • Wireframing &amp; Prototyping • Interaction &amp; Experience Design</p>
</div>
<div className="service-card rounded-2xl border border-white/10 bg-[#0B0B0B] hover:bg-white/5 transition-all p-6">
<div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 grid place-items-center mb-4">
<i className="w-5 h-5" data-lucide="film" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Motion Design</h3>
<p className="text-white/60 mt-2">Cinematic motion that reveals personality and clarifies story.</p>
<p className="text-white/50 text-sm mt-4">Explainers • Product Animations • Launch/Ad Intros</p>
</div>
<div className="service-card rounded-2xl border border-white/10 bg-[#0B0B0B] hover:bg-white/5 transition-all p-6">
<div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 grid place-items-center mb-4">
<i className="w-5 h-5" data-lucide="megaphone" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Content Creation</h3>
<p className="text-white/60 mt-2">Strategic visuals &amp; narratives for every platform.</p>
<p className="text-white/50 text-sm mt-4">Social Content • Campaign Design &amp; Storyboarding • Video &amp; Photo Direction</p>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 hover:bg-white/5 transition-colors" href="#services">
            Explore Services
            <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-24" id="portfolio">
<div className="mx-auto max-w-7xl px-4">
<div className="max-w-3xl">
<p className="text-[12px] uppercase tracking-wider text-white/50 mb-3">Selected Work</p>
<h2 className="text-4xl sm:text-5xl tracking-tight font-light">Systems that breathe.</h2>
<p className="mt-4 text-[18px] text-white/70">Bento grids, carousels, and focused case pages showing how structure and story work together.</p>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group relative overflow-hidden rounded-2xl border border-white/10 bento-item" href="#case-template">
<div className="absolute inset-0 bento-hover-frame pointer-events-none" style={{boxShadow: 'inset 0 0 0 0px rgba(235,165,0,0.0)', transition: 'box-shadow .3s ease'}}></div>
<img alt="Grid Commerce — E-commerce design system &amp; brand refresh" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-5 bg-[#0B0B0B]">
<h3 className="font-semibold tracking-tight">Grid Commerce</h3>
<p className="text-white/60 text-sm">E-commerce design system &amp; brand refresh</p>
<div className="mt-3 flex items-center text-[13px] text-amber-400 group-hover:text-amber-300 transition-colors">
                View case →
              </div>
</div>
</a>
<a className="group relative overflow-hidden rounded-2xl border border-white/10 bento-item" href="#case-template">
<div className="absolute inset-0 bento-hover-frame" style={{boxShadow: 'inset 0 0 0 0px rgba(235,165,0,0.0)', transition: 'box-shadow .3s ease'}}></div>
<img alt="FlowPay — Investment app UI/UX with motion prototypes" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-5 bg-[#0B0B0B]">
<h3 className="font-semibold tracking-tight">FlowPay</h3>
<p className="text-white/60 text-sm">Investment app UI/UX with motion prototypes</p>
<div className="mt-3 text-[13px] text-amber-400 group-hover:text-amber-300">View case →</div>
</div>
</a>
<a className="group relative overflow-hidden rounded-2xl border border-white/10 bento-item" href="#case-template">
<div className="absolute inset-0 bento-hover-frame" style={{boxShadow: 'inset 0 0 0 0px rgba(235,165,0,0.0)', transition: 'box-shadow .3s ease'}}></div>
<img alt="NeuralNest — AI SaaS hero redesign with interactive dashboard" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-5 bg-[#0B0B0B]">
<h3 className="font-semibold tracking-tight">NeuralNest</h3>
<p className="text-white/60 text-sm">AI SaaS hero redesign with interactive dashboard</p>
<div className="mt-3 text-[13px] text-amber-400 group-hover:text-amber-300">View case →</div>
</div>
</a>
<a className="group relative overflow-hidden rounded-2xl border border-white/10 bento-item" href="#case-template">
<div className="absolute inset-0 bento-hover-frame" style={{boxShadow: 'inset 0 0 0 0px rgba(235,165,0,0.0)', transition: 'box-shadow .3s ease'}}></div>
<img alt="Cardra — Gen Z fintech card visuals &amp; content series" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-5 bg-[#0B0B0B]">
<h3 className="font-semibold tracking-tight">Cardra</h3>
<p className="text-white/60 text-sm">Gen Z fintech card visuals &amp; content series</p>
<div className="mt-3 text-[13px] text-amber-400 group-hover:text-amber-300">View case →</div>
</div>
</a>
<a className="group relative overflow-hidden rounded-2xl border border-white/10 bento-item" href="#case-template">
<div className="absolute inset-0 bento-hover-frame" style={{boxShadow: 'inset 0 0 0 0px rgba(235,165,0,0.0)', transition: 'box-shadow .3s ease'}}></div>
<img alt="Health Guru — Minimalist brand system + landing experience" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-5 bg-[#0B0B0B]">
<h3 className="font-semibold tracking-tight">Health Guru</h3>
<p className="text-white/60 text-sm">Minimalist brand system + landing experience</p>
<div className="mt-3 text-[13px] text-amber-400 group-hover:text-amber-300">View case →</div>
</div>
</a>
<a className="group relative overflow-hidden rounded-2xl border border-white/10 bento-item" href="#case-template">
<div className="absolute inset-0 bento-hover-frame" style={{boxShadow: 'inset 0 0 0 0px rgba(235,165,0,0.0)', transition: 'box-shadow .3s ease'}}></div>
<img alt="Zobo Co. — Fun packaging &amp; social rollout" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-5 bg-[#0B0B0B]">
<h3 className="font-semibold tracking-tight">Zobo Co.</h3>
<p className="text-white/60 text-sm">Fun packaging &amp; social rollout</p>
<div className="mt-3 text-[13px] text-amber-400 group-hover:text-amber-300">View case →</div>
</div>
</a>
</div>
<div className="mt-10">
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 hover:bg-white/5 transition-colors" href="#portfolio">
            See Case Studies
            <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-24" id="testimonials">
<div className="mx-auto max-w-7xl px-4">
<div className="max-w-3xl">
<p className="text-[12px] uppercase tracking-wider text-white/50 mb-3">Testimonials</p>
<h2 className="text-4xl sm:text-5xl tracking-tight font-light">Partners in progress.</h2>
</div>
<div className="mt-12 grid md:grid-cols-3 gap-6">
<div className="testi-card rounded-2xl border border-white/10 bg-[#0B0B0B] p-6 hover:bg-white/5 transition-colors">
<p className="text-white/80">“Grids Studios turned our idea into a movement — expertly executed.”</p>
<p className="text-white/50 text-sm mt-4">— Sarah M.</p>
</div>
<div className="testi-card rounded-2xl border border-white/10 bg-[#0B0B0B] p-6 hover:bg-white/5 transition-colors">
<p className="text-white/80">“Their pixel care and storytelling changed our conversion trajectory.”</p>
<p className="text-white/50 text-sm mt-4">— James A.</p>
</div>
<div className="testi-card rounded-2xl border border-white/10 bg-[#0B0B0B] p-6 hover:bg-white/5 transition-colors">
<p className="text-white/80">“A creative partner that raises the bar every time.”</p>
<p className="text-white/50 text-sm mt-4">— Linda O.</p>
</div>
</div>
<div className="mt-10">
<a className="line-link inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 hover:bg-white/5 transition-colors" href="#contact">
            More Feedback
            <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-24 relative" id="about">
<div className="absolute inset-0 -z-10" style="
             background:
               radial-gradient(900px 450px at 20% 20%, rgba(235,165,0,0.10), transparent 60%),
               repeating-linear-gradient(to right, rgba(255,255,255,0.035) 0 1px, transparent 1px 120px),
               repeating-linear-gradient(to bottom, rgba(255,255,255,0.035) 0 1px, transparent 1px 120px);
           ">
</div>
<div className="mx-auto max-w-7xl px-4">
<div className="max-w-3xl">
<p className="text-[12px] uppercase tracking-wider text-white/50 mb-3">About</p>
<h2 className="text-4xl sm:text-5xl tracking-tight font-light">A team of 4 crafting professional standards.</h2>
<p className="mt-4 text-[18px] text-white/70">We’re a small, focused team driven by collaboration, innovation, and legacy-focused design.</p>
</div>
<div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="team-card relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0B]">
<div className="grid-overlay absolute inset-0 pointer-events-none" style={{background: 'repeating-linear-gradient(to right, rgba(255,255,255,0.05) 0 1px, transparent 1px 80px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.05) 0 1px, transparent 1px 80px)', opacity: '.06'}}></div>
<img alt="Graphics Designer — Craft and visual systems" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<h3 className="font-semibold tracking-tight">Graphics Designer</h3>
<p className="text-white/60 text-sm mt-1">Craft and visual systems.</p>
</div>
</div>
<div className="team-card relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0B]">
<div className="grid-overlay absolute inset-0 pointer-events-none" style={{background: 'repeating-linear-gradient(to right, rgba(255,255,255,0.05) 0 1px, transparent 1px 80px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.05) 0 1px, transparent 1px 80px)', opacity: '.06'}}></div>
<img alt="Graphic / Product &amp; Brand Designer / Content Creator" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<h3 className="font-semibold tracking-tight">Graphic / Product &amp; Brand Designer / Content Creator</h3>
<p className="text-white/60 text-sm mt-1">Strategy, identity, and content.</p>
</div>
</div>
<div className="team-card relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0B]">
<div className="grid-overlay absolute inset-0 pointer-events-none" style={{background: 'repeating-linear-gradient(to right, rgba(255,255,255,0.05) 0 1px, transparent 1px 80px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.05) 0 1px, transparent 1px 80px)', opacity: '.06'}}></div>
<img alt="Social Media Manager / Videographer / Content Creator" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<h3 className="font-semibold tracking-tight">Social Media Manager / Videographer / Content Creator</h3>
<p className="text-white/60 text-sm mt-1">Distribution and motion.</p>
</div>
</div>
<div className="team-card relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0B]">
<div className="grid-overlay absolute inset-0 pointer-events-none" style={{background: 'repeating-linear-gradient(to right, rgba(255,255,255,0.05) 0 1px, transparent 1px 80px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.05) 0 1px, transparent 1px 80px)', opacity: '.06'}}></div>
<img alt="Videographer — Cinematic capture and post" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<h3 className="font-semibold tracking-tight">Videographer</h3>
<p className="text-white/60 text-sm mt-1">Cinematic capture and post.</p>
</div>
</div>
</div>
<p className="mt-10 text-white/60">Curious by default. Not limited by what we know. Always shaping how things are done.</p>
<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 hover:bg-white/5 transition-colors" href="#about">
            Meet the Team
            <i className="w-4 h-4" data-lucide="users" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-24" id="contact">
<div className="mx-auto max-w-5xl px-4">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 md:p-16 backdrop-blur-xl cta-converge" style={{opacity: '0', animation: 'blurIn .9s ease forwards', animationDelay: '.15s'}}>
<h2 className="text-4xl sm:text-5xl tracking-tight font-light">Let’s work together to design your legacy.</h2>
<p className="mt-4 text-[18px] text-white/70">Tell us about your goals — we’ll build the system that gets you there.</p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center rounded-[32px] px-6 py-3 bg-white text-black text-[15px] font-medium hover:bg-white/90 transition-all hover:-translate-y-0.5 grid-focus" href="mailto:hello@gridsstudios.com">
              Start a Project
              <i className="ml-2 w-[18px] h-[18px]" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="inline-flex items-center justify-center rounded-[32px] px-6 py-3 border border-white/15 hover:border-white/25 hover:bg-white/5 text-[15px] font-medium transition-all" href="mailto:hello@gridsstudios.com">
              hello@gridsstudios.com
              <i className="ml-2 w-[18px] h-[18px]" data-lucide="mail" strokeWidth="1.5"></i>
</a>
</div>
<p className="mt-4 text-xs text-white/50">We respond within 24–48 hours. Your info stays private.</p>

<div className="pointer-events-none absolute inset-0 -z-10" style="background:
                 radial-gradient(1000px 500px at 90% -20%, rgba(235,165,0,0.12), transparent 60%),
                 repeating-linear-gradient(to right, rgba(255,255,255,0.05) 0 1px, transparent 1px 120px),
                 repeating-linear-gradient(to bottom, rgba(255,255,255,0.05) 0 1px, transparent 1px 120px);">
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-14">
<div className="mx-auto max-w-7xl px-4">
<div className="grid md:grid-cols-5 gap-10">
<div className="md:col-span-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-400/20 grid place-items-center">
<span className="text-amber-400 text-[11px] tracking-tight font-semibold">GS</span>
</div>
<span className="text-[15px] tracking-tight font-medium">Grids Studios</span>
</div>
<p className="text-white/60 mt-4 max-w-md">Design Beyond Limits.</p>
<div className="mt-6 flex gap-3">
<a aria-label="Twitter" className="p-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a aria-label="GitHub" className="p-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="github" strokeWidth="1.5"></i>
</a>
<a aria-label="LinkedIn" className="p-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight mb-4">Quick links</h4>
<ul className="space-y-2 text-white/70 text-sm">
<li><a className="hover:text-white" href="#services">Services</a></li>
<li><a className="hover:text-white" href="#portfolio">Portfolio</a></li>
<li><a className="hover:text-white" href="#about">About</a></li>
<li><a className="hover:text-white" href="#contact">Contact</a></li>
</ul>
</div>
<div className="md:col-span-2">
<div className="rounded-2xl border border-white/10 p-4 bg-[#0B0B0B]">
<p className="text-white/70 text-sm">© Grids Studios. All rights reserved.</p>
<div className="mt-3 flex gap-4 text-xs text-white/50">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Security</a>
</div>
</div>
</div>
</div>
</div>
</footer>

<section className="py-24 border-t border-white/10" id="case-template">
<div className="mx-auto max-w-5xl px-4">
<div className="mb-10">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Case Study Template</h2>
<p className="text-white/60 mt-2">Duplicate this structure per project — perfect for case pages.</p>
</div>
<div className="grid gap-6">

<div className="rounded-2xl border border-white/10 bg-[#0B0B0B] p-6">
<h3 className="text-xl font-semibold tracking-tight">Project Title: <span className="font-medium text-white/80">[Project Name]</span></h3>
<p className="text-white/70 mt-2">One-liner: [What it is + outcome in one sentence]</p>
<p className="text-white/50 text-sm mt-1">Example: Investment app redesign that lifted onboarding conversions by 24%.</p>
<p className="text-white/60 text-sm mt-3">Tags: Branding / UI/UX / Motion / Content (choose)</p>
<div className="mt-4 rounded-xl border border-white/10 overflow-hidden">
<img alt="Hero Visual: Key screen/brand panel with subtle grid overlay" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm text-white/70">
<div>↑ [metric]%</div>
<div>↓ [metric]%</div>
<div>Time to launch: [X weeks]</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0B0B0B] p-6">
<h4 className="text-lg font-semibold tracking-tight">Overview</h4>
<div className="mt-3 grid md:grid-cols-3 gap-4 text-white/70">
<div><span className="text-white/60">Client / Context:</span> [Company, market, product stage]</div>
<div><span className="text-white/60">Problem:</span> [What wasn’t working + opportunity]</div>
<div><span className="text-white/60">Outcome:</span> [What we shipped + measurable impact or qualitative result]</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0B0B0B] p-6">
<h4 className="text-lg font-semibold tracking-tight">Goals &amp; Success Criteria</h4>
<ul className="mt-3 space-y-2 text-white/70">
<li>Goal 1: [e.g., Clarify brand positioning]</li>
<li>Goal 2: [e.g., Improve trial-to-paid conversion]</li>
<li>Success Metrics: [e.g., +20% signups, +15% retention, NPS +10]</li>
</ul>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0B0B0B] p-6">
<h4 className="text-lg font-semibold tracking-tight">Role, Team, Timeline</h4>
<div className="mt-3 grid md:grid-cols-4 gap-4 text-white/70">
<div><span className="text-white/60">Our Role:</span> [Brand/UX/Motion/Content mix]</div>
<div><span className="text-white/60">Team:</span> Graphics Designer; Designer/Brand/Content; Social/Vid/Content; Videographer</div>
<div><span className="text-white/60">Timeline:</span> [Start → End, e.g., 6 weeks]</div>
<div><span className="text-white/60">Scope:</span> [MVP / Full launch / Iteration]</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0B0B0B] p-6">
<h4 className="text-lg font-semibold tracking-tight">Constraints</h4>
<p className="mt-2 text-white/70">[Budget/time/platform/brand legacy/tech stack constraints]</p>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0B0B0B] p-6">
<h4 className="text-lg font-semibold tracking-tight">Research &amp; Insights</h4>
<p className="mt-2 text-white/70">Methods: [Stakeholder interviews, analytics review, competitor scan, UX audits]</p>
<ul className="mt-3 list-disc list-inside text-white/70 space-y-1">
<li>[Insight]</li>
<li>[Insight]</li>
<li>[Insight]</li>
</ul>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0B0B0B] p-6">
<h4 className="text-lg font-semibold tracking-tight">Strategy</h4>
<div className="mt-3 grid md:grid-cols-3 gap-4 text-white/70">
<div><span className="text-white/60">Positioning:</span> [The story we decided to tell]</div>
<div><span className="text-white/60">Information Architecture:</span> [How we structured content and flows]</div>
<div><span className="text-white/60">Content Strategy:</span> [Narrative pillars, voice &amp; tone]</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0B0B0B] p-6">
<h4 className="text-lg font-semibold tracking-tight">Design System</h4>
<div className="mt-3 grid md:grid-cols-2 gap-4 text-white/70">
<div>
<p><span className="text-white/60">Typography:</span> [Families, roles, scale]</p>
<p className="mt-2"><span className="text-white/60">Color:</span> [Core palette + accents; dark theme usage]</p>
<p className="mt-2"><span className="text-white/60">Components:</span> [Cards, nav, forms, CTAs, states]</p>
</div>
<div>
<p><span className="text-white/60">Grid:</span> [Column count, baseline grid, spacing rhythm]</p>
<p className="mt-2"><span className="text-white/60">Accessibility:</span> [Contrast, states, reduced-motion handling]</p>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0B0B0B] p-6">
<h4 className="text-lg font-semibold tracking-tight">Grid-Lines Narrative (Signature)</h4>
<p className="mt-2 text-white/70">
              We used precise grid lines to connect story beats — guiding attention between sections and framing key moments.
              Hover and scroll states brighten surrounding lines, visually “snapping” to the current focus.
            </p>
<p className="mt-2 text-white/60 text-sm">
              Implementation notes: SVG lines layered behind content; micro-parallax with ScrollTrigger; hover frame on cards; reduced-motion uses fades.
            </p>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0B0B0B] p-6">
<h4 className="text-lg font-semibold tracking-tight">UI/UX Highlights</h4>
<ul className="mt-3 list-disc list-inside text-white/70 space-y-1">
<li>Flow 1: [e.g., Onboarding: fewer steps, clearer benefits]</li>
<li>Flow 2: [e.g., Dashboard: surfaced essentials, progressive disclosure]</li>
<li>Interactions: [Micro-animations, empty states, tooltips]</li>
</ul>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0B0B0B] p-6">
<h4 className="text-lg font-semibold tracking-tight">Motion Design</h4>
<p className="mt-2 text-white/70">Purpose: [Explain what motion communicates here — clarity, delight, hierarchy]</p>
<p className="mt-2 text-white/70">Shots: [Explainer, product loop, launch teaser]</p>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0B0B0B] p-6">
<h4 className="text-lg font-semibold tracking-tight">Content Creation</h4>
<p className="mt-2 text-white/70">Deliverables: [Social set, campaign key visuals, storyboards]</p>
<p className="mt-2 text-white/70">Distribution: [Channels + cadence]</p>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0B0B0B] p-6">
<h4 className="text-lg font-semibold tracking-tight">Results</h4>
<div className="mt-3 grid md:grid-cols-2 gap-4 text-white/70">
<div>Metrics: [Before/After; % changes]</div>
<div>Qualitative: [Customer quotes, stakeholder feedback]</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0B0B0B] p-6">
<h4 className="text-lg font-semibold tracking-tight">Gallery</h4>
<p className="text-white/60 text-sm mt-1">6–10 frames: Brand panels, UI screens, motion stills, social samples</p>
<div className="mt-4 grid md:grid-cols-3 gap-3">
<img alt="Gallery sample 1" className="rounded-lg border border-white/10 h-40 w-full object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Gallery sample 2" className="rounded-lg border border-white/10 h-40 w-full object-cover" src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Gallery sample 3" className="rounded-lg border border-white/10 h-40 w-full object-cover" src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-white/60 text-sm mt-3">Captions: [What changed + why it matters]</p>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0B0B0B] p-6">
<h4 className="text-lg font-semibold tracking-tight">Process Snapshot (Timeline)</h4>
<ul className="mt-3 grid md:grid-cols-3 gap-2 text-white/70">
<li>Week 1–2: Discovery &amp; Strategy</li>
<li>Week 3–4: Design System &amp; Prototyping</li>
<li>Week 5: Content &amp; Motion</li>
<li>Week 6: QA, Handoff, Launch</li>
</ul>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0B0B0B] p-6">
<h4 className="text-lg font-semibold tracking-tight">Tools &amp; Handoff</h4>
<p className="mt-2 text-white/70">Tools: Figma, After Effects / Premiere, Notion, Framer/React (handoff)</p>
<p className="mt-2 text-white/70">Dev Notes: Component names, tokens, asset specs, performance tips</p>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0B0B0B] p-6">
<h4 className="text-lg font-semibold tracking-tight">Testimonial (Optional)</h4>
<p className="mt-2 text-white/80">“The systemized approach and polish transformed our brand experience.” — [Name, Title].</p>
</div>
</div>
</div>
</section>


    </>
  );
}
