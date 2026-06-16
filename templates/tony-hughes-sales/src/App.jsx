import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.addEventListener('DOMContentLoaded', () => {
      // Reveal Animation Logic
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const revealElements = document.querySelectorAll('.reveal-item');

      if (prefersReducedMotion) {
        revealElements.forEach(el => el.classList.add('is-visible'));
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

      revealElements.forEach(el => observer.observe(el));
    });

    // Simple FAQ Accordion Logic
    window.toggleFaq = function(btn) {
      const container = btn.closest('.space-y-1'); // specific to this layout
      const currentGroup = btn.closest('.group');
      const currentGrid = currentGroup.querySelector('.grid');
      const currentIcon = btn.querySelector('.faq-icon');

      const isOpen = currentGrid.classList.contains('grid-rows-[1fr]');

      // Close all others
      container.querySelectorAll('.group').forEach(group => {
        group.querySelector('.grid').classList.remove('grid-rows-[1fr]');
        group.querySelector('.grid').classList.add('grid-rows-[0fr]');
        const icon = group.querySelector('.faq-icon');
        if(icon) icon.classList.remove('rotate-45', 'text-blue-400');
      });

      // Toggle current
      if (!isOpen) {
        currentGrid.classList.remove('grid-rows-[0fr]');
        currentGrid.classList.add('grid-rows-[1fr]');
        currentIcon.classList.add('rotate-45', 'text-blue-400');
      }
    };
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 opacity-[0.04] pointer-events-none z-0 mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E\')'}}></div>
<div className="fixed top-[-10%] left-1/4 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0 animate-pulse" style={{animationDuration: '8s'}}></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-teal-600/10 blur-[100px] rounded-full pointer-events-none z-0 animate-pulse" style={{animationDuration: '12s'}}></div>
<div className="z-10 w-full relative">

<nav className="sticky top-0 z-50 bg-[#030303]/80 backdrop-blur-md border-b border-zinc-800/50">
<div className="max-w-[1200px] mx-auto px-6 py-5 flex items-center justify-between">
<div className="flex-shrink-0 flex items-center gap-2 text-xl tracking-tight font-normal text-white">
          Sales IQ
          <div className="h-6 px-2 bg-blue-500/10 border border-blue-500/30 rounded flex items-center justify-center">
<span className="text-xs font-medium text-blue-400 tracking-wide uppercase">Global</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-zinc-400">
<a className="hover:text-blue-400 transition-colors" href="#">Tony Hughes</a>
<a className="hover:text-blue-400 transition-colors" href="#">Methodology</a>
<a className="hover:text-blue-400 transition-colors" href="#">Leadership</a>
</div>
<div className="flex items-center gap-4">
<a className="flex items-center justify-center px-5 py-2 bg-blue-600/10 text-blue-400 border border-blue-500/30 rounded-full text-sm font-light hover:bg-blue-600/20 shadow-[0_0_15px_rgba(37,99,235,0.15)] transition-all" href="#book">
            Book a Call
          </a>
</div>
</div>
</nav>

<section className="max-w-[1000px] mx-auto pt-24 pb-20 px-6 text-center relative">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-700/50 mb-8 backdrop-blur-md">
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-500"></span>
</span>
<span className="text-xs font-light text-teal-300 tracking-wide uppercase">Modern B2B Selling</span>
</div>
<h1 className="text-5xl md:text-7xl font-extralight tracking-tight leading-[1.1] mb-6 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.05)]">
        Elevate Your B2B
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 italic font-light pr-2">Sales Performance</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-extralight leading-relaxed reveal-item">
        Tony Hughes helps sales leaders and teams implement modern selling strategies that generate stronger pipeline, deeper customer engagement, and sustainable revenue growth.
      </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 reveal-item">
<a className="w-full sm:w-auto px-8 py-3.5 bg-blue-600/10 text-blue-400 border border-blue-500/30 rounded-full text-base font-light shadow-[0_0_15px_rgba(37,99,235,0.15)] hover:bg-blue-600/20 transition-all" href="#book">
          Book a Sales Strategy Call
        </a>
</div>

<div className="w-full max-w-4xl mx-auto aspect-video rounded-2xl bg-zinc-900/40 border border-zinc-800 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden flex items-center justify-center group reveal-item">
<div className="absolute inset-0 placeholder-pattern z-0 opacity-50"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-teal-900/10 z-10"></div>
<div className="relative z-20 flex flex-col items-center gap-4 text-zinc-500 group-hover:text-blue-400 transition-colors duration-500">
<div className="w-16 h-16 rounded-full bg-zinc-950/80 border border-zinc-700 flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-500">
<iconify-icon className="text-2xl ml-1 text-zinc-400 group-hover:text-blue-400 transition-colors duration-500" icon="solar:play-bold"></iconify-icon>
</div>
<span className="text-sm font-light tracking-widest uppercase">Video Placeholder</span>
<span className="text-xs font-extralight text-zinc-600 tracking-wide">Watch Tony Explain Modern B2B Selling</span>
</div>
</div>
</section>

<div className="w-full h-px relative overflow-hidden max-w-[1200px] mx-auto">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
</div>

<section className="py-20 px-6 max-w-[1200px] mx-auto text-center">
<p className="text-xs font-light tracking-widest uppercase text-zinc-500 mb-8 reveal-item">
        Organizations and sales leaders influenced by Tony Hughes’ work
      </p>

<div className="w-full max-w-5xl mx-auto h-32 rounded-xl bg-zinc-900/30 border border-zinc-800/50 relative overflow-hidden flex items-center justify-center reveal-item">
<div className="absolute inset-0 placeholder-pattern opacity-30"></div>
<div className="relative flex flex-col items-center gap-2 text-zinc-600">
<iconify-icon className="text-2xl" icon="solar:gallery-wide-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] font-light tracking-widest uppercase">Client Logos Placeholder</span>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-[1200px] mx-auto relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16 reveal-item">
<h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-white mb-4">
          Why Many B2B Sales Teams
          <br className="hidden md:block"/>
<span className="text-zinc-400">Struggle to Grow Pipeline</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 reveal-item">
<div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-900/60 hover:border-blue-500/20 transition-all duration-300 group flex flex-col">
<div className="w-10 h-10 rounded-lg bg-blue-950/50 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:chart-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-light text-zinc-200 mb-3 tracking-tight">Weak Pipeline Generation</h3>
<p className="text-sm text-zinc-500 font-extralight leading-relaxed">Sales teams struggle to consistently create new opportunities in a noisy, highly competitive digital environment.</p>
</div>
<div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-900/60 hover:border-teal-500/20 transition-all duration-300 group flex flex-col">
<div className="w-10 h-10 rounded-lg bg-teal-950/50 border border-teal-500/20 flex items-center justify-center mb-6 text-teal-400 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:tag-price-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-light text-zinc-200 mb-3 tracking-tight">Transactional Selling</h3>
<p className="text-sm text-zinc-500 font-extralight leading-relaxed">Conversations focus prematurely on price and features instead of uncovering business impact and communicating true value.</p>
</div>
<div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-900/60 hover:border-teal-500/20 transition-all duration-300 group flex flex-col">
<div className="w-10 h-10 rounded-lg bg-teal-950/50 border border-teal-500/20 flex items-center justify-center mb-6 text-teal-400 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-light text-zinc-200 mb-3 tracking-tight">Outdated Sales Techniques</h3>
<p className="text-sm text-zinc-500 font-extralight leading-relaxed">Traditional approaches fail to resonate with modern, highly-educated buyers who demand strategic insights over pitches.</p>
</div>
<div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-900/60 hover:border-blue-500/20 transition-all duration-300 group flex flex-col">
<div className="w-10 h-10 rounded-lg bg-blue-950/50 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-light text-zinc-200 mb-3 tracking-tight">Limited Sales Leadership</h3>
<p className="text-sm text-zinc-500 font-extralight leading-relaxed">Without strong, coaching-focused leadership, teams struggle to perform consistently and adapt to market shifts.</p>
</div>
</div>
</section>

<div className="w-full h-px relative overflow-hidden max-w-[1200px] mx-auto">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent"></div>
</div>

<section className="py-24 px-6 max-w-[1200px] mx-auto relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 reveal-item">
<h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-white mb-10 leading-[1.2]">
            Why Sales Leaders Learn From
            <span className="block text-blue-400 italic">Tony Hughes</span>
</h2>
<ul className="space-y-8">
<li className="flex items-start gap-4 group">
<div className="w-8 h-8 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center shrink-0 mt-1 text-zinc-500 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
<iconify-icon className="text-sm" icon="solar:laptop-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-light text-zinc-200 mb-1">Modern Selling Expertise</h4>
<p className="text-sm text-zinc-500 font-extralight leading-relaxed">Helping organisations adapt to today’s digital buyer environment and shifting procurement landscapes.</p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="w-8 h-8 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center shrink-0 mt-1 text-zinc-500 group-hover:text-teal-400 group-hover:border-teal-500/30 transition-colors">
<iconify-icon className="text-sm" icon="solar:diamond-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-light text-zinc-200 mb-1">Value-Based Selling</h4>
<p className="text-sm text-zinc-500 font-extralight leading-relaxed">Focus on communicating measurable business value instead of competing defensively on price.</p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="w-8 h-8 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center shrink-0 mt-1 text-zinc-500 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
<iconify-icon className="text-sm" icon="solar:user-speak-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-light text-zinc-200 mb-1">Sales Leadership Development</h4>
<p className="text-sm text-zinc-500 font-extralight leading-relaxed">Equipping managers and leaders to drive performance, accountability, and coaching across their teams.</p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="w-8 h-8 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center shrink-0 mt-1 text-zinc-500 group-hover:text-teal-400 group-hover:border-teal-500/30 transition-colors">
<iconify-icon className="text-sm" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-light text-zinc-200 mb-1">Global B2B Experience</h4>
<p className="text-sm text-zinc-500 font-extralight leading-relaxed">Working with leading organizations globally to strengthen pipeline health and executive-level client engagement.</p>
</div>
</li>
</ul>
</div>
<div className="order-1 lg:order-2 h-[500px] rounded-2xl bg-zinc-900/30 border border-zinc-800 relative overflow-hidden flex flex-col items-center justify-center reveal-item group">
<div className="absolute inset-0 placeholder-pattern opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/80"></div>
<div className="relative z-10 flex flex-col items-center gap-3 text-zinc-600 group-hover:text-zinc-400 transition-colors duration-500">
<iconify-icon className="text-4xl" icon="solar:user-id-linear"></iconify-icon>
<span className="text-xs font-light tracking-widest uppercase">Image Placeholder</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-950/50 border-y border-zinc-800/50 relative z-10">
<div className="max-w-[800px] mx-auto text-center reveal-item">
<h2 className="text-2xl md:text-3xl font-extralight tracking-tight text-white leading-relaxed mb-12">
          "Sales leaders around the world follow Tony Hughes’ insights on modern B2B selling and value-based engagement."
        </h2>

<div className="w-full max-w-2xl mx-auto h-48 rounded-xl bg-zinc-900/50 border border-zinc-800 relative overflow-hidden flex flex-col items-center justify-center group hover:border-blue-500/20 transition-colors">
<div className="absolute inset-0 placeholder-pattern opacity-30"></div>
<div className="relative z-10 flex flex-col items-center gap-2 text-zinc-600 group-hover:text-blue-500/50 transition-colors">
<iconify-icon className="text-3xl" icon="solar:chat-round-like-linear"></iconify-icon>
<span className="text-[10px] font-light tracking-widest uppercase text-center max-w-[200px]">Client feedback and leadership insights placeholder</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-[1000px] mx-auto relative z-10">
<div className="text-center mb-20 reveal-item">
<h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-white mb-4">
          How Sales IQ Global
          <br className="hidden md:block"/>
<span className="text-zinc-400">Improves Sales Performance</span>
</h2>
</div>
<div className="relative max-w-3xl mx-auto reveal-item">

<div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-px bg-zinc-800 md:-translate-x-1/2 z-0"></div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 group">
<div className="md:w-1/2 md:pr-12 md:text-right pl-16 md:pl-0 w-full relative">
<div className="absolute left-[-39px] md:left-auto md:right-[-41px] top-1 w-8 h-8 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center z-20 group-hover:border-blue-500/50 transition-colors">
<div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-blue-400 transition-colors shadow-[0_0_10px_rgba(37,99,235,0)] group-hover:shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
</div>
<div className="text-xs font-light text-blue-400 tracking-widest uppercase mb-2">Step 1</div>
<h3 className="text-lg font-light text-zinc-200 mb-2">Assess Sales Strategy</h3>
<p className="text-sm text-zinc-500 font-extralight leading-relaxed">Identify structural gaps in pipeline generation workflows, messaging alignment, and current value selling capabilities.</p>
</div>
<div className="md:w-1/2 hidden md:block pl-12"></div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 group">
<div className="md:w-1/2 hidden md:block pr-12"></div>
<div className="md:w-1/2 md:pl-12 pl-16 w-full relative">
<div className="absolute left-[-39px] md:left-[-17px] top-1 w-8 h-8 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center z-20 group-hover:border-teal-500/50 transition-colors">
<div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-teal-400 transition-colors shadow-[0_0_10px_rgba(20,184,166,0)] group-hover:shadow-[0_0_10px_rgba(20,184,166,0.8)]"></div>
</div>
<div className="text-xs font-light text-teal-400 tracking-widest uppercase mb-2">Step 2</div>
<h3 className="text-lg font-light text-zinc-200 mb-2">Implement Modern Selling Frameworks</h3>
<p className="text-sm text-zinc-500 font-extralight leading-relaxed">Develop and deploy strategies perfectly aligned with the buying behaviors and expectations of today’s B2B landscape.</p>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 group">
<div className="md:w-1/2 md:pr-12 md:text-right pl-16 md:pl-0 w-full relative">
<div className="absolute left-[-39px] md:left-auto md:right-[-41px] top-1 w-8 h-8 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center z-20 group-hover:border-blue-500/50 transition-colors">
<div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-blue-400 transition-colors shadow-[0_0_10px_rgba(37,99,235,0)] group-hover:shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
</div>
<div className="text-xs font-light text-blue-400 tracking-widest uppercase mb-2">Step 3</div>
<h3 className="text-lg font-light text-zinc-200 mb-2">Strengthen Sales Leadership</h3>
<p className="text-sm text-zinc-500 font-extralight leading-relaxed">Equip sales leaders with the frameworks to coach effectively, manage accountability, and drive sustainable long-term performance.</p>
</div>
<div className="md:w-1/2 hidden md:block pl-12"></div>
</div>
</div>
<div className="mt-20 text-center reveal-item">
<a className="inline-flex px-8 py-3 bg-zinc-900 border border-zinc-700 text-zinc-300 rounded-full text-sm font-light hover:bg-zinc-800 hover:text-white hover:border-blue-500/30 transition-all" href="#book">
          Strengthen Your Sales Strategy
        </a>
</div>
</section>

<section className="py-24 px-6 max-w-[1200px] mx-auto bg-zinc-950/30 border border-zinc-800/50 rounded-3xl relative z-10 reveal-item">
<div className="text-center mb-16">
<h2 className="text-xs font-light tracking-widest uppercase text-zinc-500 mb-2">What's Included</h2>
<div className="text-2xl font-extralight text-zinc-300 tracking-tight">Core Focus Areas</div>
</div>
<div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
<div className="px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900/50 flex items-center gap-3 text-sm font-light text-zinc-300 hover:border-blue-500/30 transition-colors cursor-default">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500/80"></div>
          Modern B2B Sales Training
        </div>
<div className="px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900/50 flex items-center gap-3 text-sm font-light text-zinc-300 hover:border-teal-500/30 transition-colors cursor-default">
<div className="w-1.5 h-1.5 rounded-full bg-teal-500/80"></div>
          Value-Based Selling Frameworks
        </div>
<div className="px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900/50 flex items-center gap-3 text-sm font-light text-zinc-300 hover:border-blue-500/30 transition-colors cursor-default">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500/80"></div>
          Pipeline Development Strategy
        </div>
<div className="px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900/50 flex items-center gap-3 text-sm font-light text-zinc-300 hover:border-teal-500/30 transition-colors cursor-default">
<div className="w-1.5 h-1.5 rounded-full bg-teal-500/80"></div>
          Sales Leadership Coaching
        </div>
<div className="px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900/50 flex items-center gap-3 text-sm font-light text-zinc-300 hover:border-blue-500/30 transition-colors cursor-default">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500/80"></div>
          Digital Selling Strategies
        </div>
</div>
</section>

<section className="py-32 px-6 max-w-[1000px] mx-auto relative z-10">
<div className="flex flex-col md:flex-row gap-16 items-center reveal-item">

<div className="w-full md:w-2/5 aspect-[4/5] rounded-2xl bg-zinc-900/30 border border-zinc-800 relative overflow-hidden flex flex-col items-center justify-center group">
<div className="absolute inset-0 placeholder-pattern opacity-40"></div>
<div className="relative z-10 flex flex-col items-center gap-3 text-zinc-600">
<iconify-icon className="text-5xl" icon="solar:user-circle-linear"></iconify-icon>
<span className="text-[10px] font-light tracking-widest uppercase">Tony Hughes Image</span>
</div>
</div>
<div className="w-full md:w-3/5">
<h2 className="text-3xl font-extralight tracking-tight text-white mb-6">Hi, I’m Tony Hughes.</h2>
<div className="space-y-6 text-base text-zinc-400 font-light leading-relaxed">
<p>
              Through Sales IQ Global, I help organisations strengthen pipeline, implement modern selling strategies, and develop high-performing sales teams.
            </p>
<p>
              My goal is simple: help sales leaders and teams engage customers more effectively and create sustainable revenue growth in an increasingly complex B2B environment.
            </p>
</div>
<div className="mt-10">
<a className="inline-flex items-center gap-2 text-sm text-blue-400 font-light hover:text-blue-300 transition-colors group" href="#book">
              Work with Tony
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<div className="w-full h-px relative overflow-hidden max-w-[800px] mx-auto">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent"></div>
</div>

<section className="py-24 px-6 max-w-[800px] mx-auto relative z-10">
<div className="text-center mb-16 reveal-item">
<h2 className="text-3xl font-extralight tracking-tight text-white mb-4">Frequently Asked Questions</h2>
</div>
<div className="space-y-1 reveal-item">
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4 focus:outline-none" onclick="window.toggleFaq(this)">
<span className="text-base font-light text-zinc-300 group-hover:text-blue-400 transition-colors duration-300">Who is this designed for?</span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-blue-400 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-sm text-zinc-500 font-light leading-relaxed pr-8">
                B2B sales leaders and teams seeking stronger pipeline and deeper customer engagement.
              </p>
</div>
</div>
</div>
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4 focus:outline-none" onclick="window.toggleFaq(this)">
<span className="text-base font-light text-zinc-300 group-hover:text-blue-400 transition-colors duration-300">Is this sales training or consulting?</span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-blue-400 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-sm text-zinc-500 font-light leading-relaxed pr-8">
                Both — combining strategic insight with practical, tactical execution for teams.
              </p>
</div>
</div>
</div>
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4 focus:outline-none" onclick="window.toggleFaq(this)">
<span className="text-base font-light text-zinc-300 group-hover:text-blue-400 transition-colors duration-300">Does this work for experienced sales teams?</span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-blue-400 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-sm text-zinc-500 font-light leading-relaxed pr-8">
                Yes. The focus is on modern selling strategies and advanced leadership development, elevating even veteran performers.
              </p>
</div>
</div>
</div>
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4 focus:outline-none" onclick="window.toggleFaq(this)">
<span className="text-base font-light text-zinc-300 group-hover:text-blue-400 transition-colors duration-300">What makes Tony’s approach different?</span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-blue-400 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-sm text-zinc-500 font-light leading-relaxed pr-8">
                A highly modern B2B approach focused intensely on value-based selling rather than traditional pitching.
              </p>
</div>
</div>
</div>
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4 focus:outline-none" onclick="window.toggleFaq(this)">
<span className="text-base font-light text-zinc-300 group-hover:text-blue-400 transition-colors duration-300">How do we get started?</span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-blue-400 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-sm text-zinc-500 font-light leading-relaxed pr-8">
                Simply book a strategy call using the calendar below to discuss your current challenges and goals.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-24 relative z-10" id="book">
<div className="bg-zinc-900/40 rounded-[2rem] border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] flex flex-col lg:flex-row overflow-hidden backdrop-blur-sm relative reveal-item">

<div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-teal-900/5 pointer-events-none"></div>

<div className="p-10 lg:p-16 flex-1 flex flex-col justify-center text-center lg:text-left items-center lg:items-start relative z-10">
<h2 className="text-3xl md:text-4xl tracking-tight text-white mb-4 font-extralight">
            Transform Your B2B
            <br/>
<span className="text-blue-400 italic font-light">Sales Strategy</span>
</h2>
<p className="text-sm text-zinc-400 font-light mb-8 max-w-sm leading-relaxed mx-auto lg:mx-0">
            Book a conversation with Tony Hughes to explore how Sales IQ Global can strengthen your pipeline and sales performance.
          </p>
<button className="px-8 py-3 bg-blue-600 text-white rounded-full text-sm font-light hover:bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all">
            Book My Call
          </button>
</div>

<div className="flex-1 min-h-[400px] bg-zinc-950/80 border-t lg:border-t-0 lg:border-l border-zinc-800 relative flex items-center justify-center p-8">
<div className="absolute inset-0 placeholder-pattern opacity-20"></div>
<div className="w-full max-w-sm h-full max-h-[400px] rounded-xl border border-zinc-800 bg-[#050505] shadow-[0_0_30px_rgba(0,0,0,0.8)] relative z-10 flex flex-col items-center justify-center gap-3 group overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-blue-500/30"></div>
<iconify-icon className="text-4xl text-zinc-600 group-hover:text-blue-400 transition-colors" icon="solar:calendar-mark-linear"></iconify-icon>
<span className="text-xs font-light tracking-widest uppercase text-zinc-500 group-hover:text-zinc-400 transition-colors">Calendly Placeholder</span>
<div className="mt-4 px-4 py-1.5 border border-zinc-800 rounded text-[10px] text-zinc-600">Select a Date &amp; Time</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-900 pt-16 pb-12 relative z-10 text-center">
<div className="text-lg font-light text-zinc-300 tracking-tight mb-2">
        Sales IQ Global
      </div>
<p className="text-xs text-zinc-600 font-light mb-8">Elevating B2B Sales Performance</p>
<div className="text-[10px] text-zinc-700 uppercase tracking-widest font-light">
        © 2024 Sales IQ Global. All rights reserved.
      </div>
</footer>
</div>


    </>
  );
}
