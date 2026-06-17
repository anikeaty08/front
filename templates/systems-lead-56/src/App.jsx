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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');
            const links = document.querySelectorAll('.mobile-link');
            const icon = btn.querySelector('iconify-icon');

            function toggleMenu() {
                menu.classList.toggle('hidden');
                if (menu.classList.contains('hidden')) {
                    icon.setAttribute('icon', 'solar:hamburger-menu-linear');
                } else {
                    icon.setAttribute('icon', 'solar:close-linear');
                }
            }

            btn.addEventListener('click', toggleMenu);
            
            links.forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.add('hidden');
                    icon.setAttribute('icon', 'solar:hamburger-menu-linear');
                });
            });
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
      

<header className="fixed top-0 w-full z-50 bg-[#F8F9FA]/90 backdrop-blur-md border-b border-[#E5E7EB]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<a aria-label="Home" className="font-['DM_Mono'] font-medium text-lg tracking-tighter" href="#">GSB</a>

<nav className="hidden md:flex space-x-8">
<a className="text-xs font-['DM_Mono'] text-[#6B7280] hover:text-[#1A1A2E] transition-colors tracking-wide uppercase" href="#about">About</a>
<a className="text-xs font-['DM_Mono'] text-[#6B7280] hover:text-[#1A1A2E] transition-colors tracking-wide uppercase" href="#work">Work</a>
<a className="text-xs font-['DM_Mono'] text-[#6B7280] hover:text-[#1A1A2E] transition-colors tracking-wide uppercase" href="#experience">Experience</a>
<a className="text-xs font-['DM_Mono'] text-[#6B7280] hover:text-[#1A1A2E] transition-colors tracking-wide uppercase" href="#contact">Contact</a>
</nav>

<button aria-label="Toggle menu" className="md:hidden text-[#1A1A2E] flex items-center" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden border-t border-[#E5E7EB] bg-[#F8F9FA]" id="mobile-menu">
<nav className="flex flex-col px-4 pt-2 pb-4 space-y-4">
<a className="mobile-link text-sm font-['DM_Mono'] text-[#6B7280] hover:text-[#1A1A2E] uppercase tracking-wide pt-2" href="#about">About</a>
<a className="mobile-link text-sm font-['DM_Mono'] text-[#6B7280] hover:text-[#1A1A2E] uppercase tracking-wide" href="#work">Work</a>
<a className="mobile-link text-sm font-['DM_Mono'] text-[#6B7280] hover:text-[#1A1A2E] uppercase tracking-wide" href="#experience">Experience</a>
<a className="mobile-link text-sm font-['DM_Mono'] text-[#6B7280] hover:text-[#1A1A2E] uppercase tracking-wide" href="#contact">Contact</a>
</nav>
</div>
</header>
<main className="pt-16">

<section className="py-20 md:py-32 border-b border-[#E5E7EB]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-3 pt-2">
<span className="text-xs font-['DM_Mono'] text-[#6B7280] tracking-wider uppercase">00 / System Init</span>
</div>
<div className="md:col-span-9">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-['DM_Mono'] font-medium tracking-tight leading-[1.1] mb-6 max-w-4xl">
                            Building the systems that make execution repeatable.
                        </h1>
<p className="text-lg md:text-xl text-[#6B7280] font-light max-w-2xl leading-relaxed mb-10">
                            Product lead who embeds AI and operational discipline into how teams actually work.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-[#1A1A2E] text-white px-6 py-3 text-sm font-medium hover:bg-[#2563EB] transition-colors w-full sm:w-auto" href="#work">
                                See My Work
                                <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 border border-[#E5E7EB] text-[#1A1A2E] px-6 py-3 text-sm font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto" href="#">
                                Download CV
                                <iconify-icon height="16" icon="solar:document-text-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-b border-[#E5E7EB] bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-3 pt-1">
<span className="text-xs font-['DM_Mono'] text-[#6B7280] tracking-wider uppercase">01 / Outputs</span>
</div>
<div className="md:col-span-9">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
<div className="border-l border-[#E5E7EB] pl-6">
<p className="text-4xl md:text-5xl font-['DM_Mono'] font-medium tracking-tight text-[#1A1A2E] mb-3">28%</p>
<p className="text-sm text-[#6B7280] font-light leading-relaxed">Reduction in manual work hours (vs. 25% target)</p>
</div>
<div className="border-l border-[#E5E7EB] pl-6">
<p className="text-4xl md:text-5xl font-['DM_Mono'] font-medium tracking-tight text-[#1A1A2E] mb-3">35%</p>
<p className="text-sm text-[#6B7280] font-light leading-relaxed">Reduction in operational costs</p>
</div>
<div className="border-l border-[#E5E7EB] pl-6">
<p className="text-4xl md:text-5xl font-['DM_Mono'] font-medium tracking-tight text-[#1A1A2E] mb-3">10+</p>
<p className="text-sm text-[#6B7280] font-light leading-relaxed">Active AI use cases scaled (from 3)</p>
</div>
<div className="border-l border-[#E5E7EB] pl-6">
<p className="text-4xl md:text-5xl font-['DM_Mono'] font-medium tracking-tight text-[#1A1A2E] mb-3">85%</p>
<p className="text-sm text-[#6B7280] font-light leading-relaxed">Of student base reached as AI Learning Assistant MAU</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-b border-[#E5E7EB]" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
<div className="md:col-span-3 pt-1">
<span className="text-xs font-['DM_Mono'] text-[#6B7280] tracking-wider uppercase">02 / Identity</span>
</div>
<div className="md:col-span-6">
<div className="space-y-6 text-base md:text-lg text-[#1A1A2E] font-light leading-relaxed">
<p>I'm Gandhi Surya Buana, a Product Lead based in Surabaya, Indonesia. My work sits at the intersection of AI product management and operational efficiency — I design the processes, ownership structures, and alignment rituals that turn one-off initiatives into repeatable systems.</p>
<p>At RevoU, I co-owned an AI-embedded product roadmap with the CEO and VP of Product, led an operational simplification program that exceeded both its cost and hours targets, and scaled an AI Learning Assistant from 3 to 10+ active use cases while reaching 85% of the student MAU base.</p>
<p>I work best when there's a complex, multi-domain problem that needs structured thinking before anyone writes a line of code or a single OKR.</p>
</div>
</div>
<div className="md:col-span-3">
<img alt="Gandhi Surya Buana" className="w-full aspect-[3/4] object-cover grayscale opacity-90 border border-[#E5E7EB]" loading="lazy" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-b border-[#E5E7EB] bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-3 pt-1">
<span className="text-xs font-['DM_Mono'] text-[#6B7280] tracking-wider uppercase">03 / Inventory</span>
</div>
<div className="md:col-span-9">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-12">

<div>
<h3 className="text-xs font-['DM_Mono'] text-[#6B7280] uppercase tracking-widest mb-6 pb-2 border-b border-[#E5E7EB]">Methodology</h3>
<ul className="space-y-3 text-sm font-light text-[#1A1A2E]">
<li>Process mapping &amp; root cause analysis</li>
<li>OKR-driven roadmap alignment</li>
<li>AI use case design &amp; scoping</li>
<li>Cross-functional alignment rituals</li>
<li>Prioritization frameworks</li>
<li>Data-informed iteration</li>
<li>Workflow redesign &amp; automation</li>
<li>KPI design &amp; tracking</li>
</ul>
</div>

<div>
<h3 className="text-xs font-['DM_Mono'] text-[#6B7280] uppercase tracking-widest mb-6 pb-2 border-b border-[#E5E7EB]">Tools</h3>
<ul className="space-y-3 text-sm font-light text-[#1A1A2E]">
<li>Notion</li>
<li>Linear</li>
<li>Miro</li>
<li>Figma</li>
<li>Google Analytics</li>
<li>Mixpanel</li>
<li>SQL</li>
<li>Looker / Data Studio</li>
</ul>
</div>

<div>
<h3 className="text-xs font-['DM_Mono'] text-[#6B7280] uppercase tracking-widest mb-6 pb-2 border-b border-[#E5E7EB]">Domain Expertise</h3>
<ul className="space-y-3 text-sm font-light text-[#1A1A2E]">
<li>AI product management</li>
<li>Operational efficiency</li>
<li>Product-led systems design</li>
<li>EdTech and learning products</li>
<li>Cross-functional leadership</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-b border-[#E5E7EB]" id="experience">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-3 pt-1">
<span className="text-xs font-['DM_Mono'] text-[#6B7280] tracking-wider uppercase">04 / Ledger</span>
</div>
<div className="md:col-span-9">
<div className="group border-l border-[#E5E7EB] pl-6 relative">

<div className="absolute w-2 h-2 bg-[#1A1A2E] rounded-full -left-[4.5px] top-2"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-3">
<h3 className="text-lg font-['DM_Mono'] font-medium tracking-tight text-[#1A1A2E]">Product Lead @ RevoU</h3>
<span className="text-xs font-['DM_Mono'] text-[#6B7280]">Oct 2024 – Jun 2025</span>
</div>
<p className="text-sm md:text-base font-light text-[#1A1A2E] leading-relaxed max-w-3xl">
                                Co-designed AI-embedded product roadmap with CEO and VP of Product; led operational simplification that cut costs 35% and manual hours 28%; scaled AI Learning Assistant from 3 to 10+ active use cases at 85% student MAU.
                            </p>
</div>
</div>
</div>
</div>
</section>

<article className="py-16 md:py-24 border-b border-[#E5E7EB] bg-white" id="work">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
<div className="md:col-span-3 pt-1">
<span className="text-xs font-['DM_Mono'] text-[#6B7280] tracking-wider uppercase">05 / Case Study</span>
</div>
<div className="md:col-span-9">
<h2 className="text-2xl md:text-3xl font-['DM_Mono'] font-medium tracking-tight text-[#1A1A2E] leading-snug mb-6 max-w-4xl">
                            Co-designed AI roadmap with CEO and VP, turning ad hoc work into structured execution across teams.
                        </h2>
<div className="flex flex-wrap gap-2 mb-10">
<span className="text-[10px] font-['DM_Mono'] uppercase tracking-wider text-[#6B7280] border border-[#E5E7EB] px-2 py-1 bg-[#F8F9FA]">AI Product Management</span>
<span className="text-[10px] font-['DM_Mono'] uppercase tracking-wider text-[#6B7280] border border-[#E5E7EB] px-2 py-1 bg-[#F8F9FA]">OKR-Driven Alignment</span>
<span className="text-[10px] font-['DM_Mono'] uppercase tracking-wider text-[#6B7280] border border-[#E5E7EB] px-2 py-1 bg-[#F8F9FA]">Cross-Functional Roadmapping</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="md:col-span-1 border-t border-[#E5E7EB] pt-4">
<span className="text-xs font-['DM_Mono'] text-[#6B7280] uppercase tracking-wider block mb-2">Context</span>
</div>
<div className="md:col-span-3 md:border-t md:border-[#E5E7EB] pt-4 -mt-8 md:mt-0">
<p className="text-sm font-light text-[#1A1A2E] leading-relaxed">
                                    RevoU was running several parallel AI, analytics, and systems initiatives — but without shared ownership structures or a common sequencing logic, teams were pulling in different directions. The risk wasn't a lack of ideas; it was execution churn caused by misaligned priorities and no shared language for tradeoffs. The roadmap needed to work across product, engineering, and business functions simultaneously.
                                </p>
</div>
<div className="md:col-span-1 border-t border-[#E5E7EB] pt-4">
<span className="text-xs font-['DM_Mono'] text-[#6B7280] uppercase tracking-wider block mb-2">Action</span>
</div>
<div className="md:col-span-3 md:border-t md:border-[#E5E7EB] pt-4 -mt-8 md:mt-0">
<p className="text-sm font-light text-[#1A1A2E] leading-relaxed">
                                    I partnered directly with the CEO and VP of Product to co-design an AI-embedded product roadmap — starting with alignment before sequencing. We established a shared prioritization framework that could hold across domains: AI, analytics, and operational systems. I then built and facilitated cross-functional alignment rituals — structured touchpoints that kept ownership clear and reduced the need for ad hoc escalations. Tradeoffs between speed and structural completeness were explicit, not implied.
                                </p>
</div>
<div className="md:col-span-1 border-t border-[#E5E7EB] pt-4">
<span className="text-xs font-['DM_Mono'] text-[#6B7280] uppercase tracking-wider block mb-2">Result</span>
</div>
<div className="md:col-span-3 md:border-t md:border-[#E5E7EB] pt-4 -mt-8 md:mt-0">
<p className="text-sm font-light text-[#1A1A2E] leading-relaxed mb-6">
                                    The organization moved from ad hoc, initiative-level efforts to a coordinated roadmap with defined ownership and sequencing across three domains. Cross-functional teams had a shared execution reference they could act from — reducing downstream re-planning and misalignment across the product cycle.
                                </p>
<div className="bg-[#F8F9FA] border-l-2 border-[#1A1A2E] p-5">
<span className="text-xs font-['DM_Mono'] text-[#6B7280] uppercase tracking-wider block mb-2">Key Takeaway</span>
<p className="text-sm font-medium text-[#1A1A2E]">
                                        Executive alignment isn't a precondition to starting — it's the first deliverable; complex multi-domain roadmaps need shared language before shared execution.
                                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="w-full h-64 md:h-96 bg-[#F8F9FA] border border-[#E5E7EB] relative overflow-hidden group flex items-center justify-center">
<img alt="Structured planning system flat lay" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 mix-blend-multiply" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A2E]/10 to-transparent"></div>
</div>
</div>
</article>

<article className="py-16 md:py-24 border-b border-[#E5E7EB]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
<div className="md:col-span-3 pt-1">
<span className="text-xs font-['DM_Mono'] text-[#6B7280] tracking-wider uppercase">06 / Case Study</span>
</div>
<div className="md:col-span-9">
<div className="flex items-center gap-4 mb-4">
<span className="bg-[#1A1A2E] text-white text-xs font-['DM_Mono'] px-3 py-1">-35% Costs</span>
</div>
<h2 className="text-2xl md:text-3xl font-['DM_Mono'] font-medium tracking-tight text-[#1A1A2E] leading-snug mb-6 max-w-4xl">
                            Operational simplification cut work hours 28% and costs 35%, both exceeding targets.
                        </h2>
<div className="flex flex-wrap gap-2 mb-10">
<span className="text-[10px] font-['DM_Mono'] uppercase tracking-wider text-[#6B7280] border border-[#E5E7EB] px-2 py-1 bg-white">Operational Efficiency</span>
<span className="text-[10px] font-['DM_Mono'] uppercase tracking-wider text-[#6B7280] border border-[#E5E7EB] px-2 py-1 bg-white">Process Mapping</span>
<span className="text-[10px] font-['DM_Mono'] uppercase tracking-wider text-[#6B7280] border border-[#E5E7EB] px-2 py-1 bg-white">Workflow Redesign</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="md:col-span-1 border-t border-[#E5E7EB] pt-4">
<span className="text-xs font-['DM_Mono'] text-[#6B7280] uppercase tracking-wider block mb-2">Context</span>
</div>
<div className="md:col-span-3 md:border-t md:border-[#E5E7EB] pt-4 -mt-8 md:mt-0">
<p className="text-sm font-light text-[#1A1A2E] leading-relaxed">
                                    The operations team was absorbing a recurring load of manual work that was growing with the business — without a corresponding headcount increase to absorb it. The target was a 25% reduction in manual work hours and meaningful cost savings, but the existing approach had been to optimize individual tasks in isolation rather than examine the system producing the friction. That approach was hitting its ceiling.
                                </p>
</div>
<div className="md:col-span-1 border-t border-[#E5E7EB] pt-4">
<span className="text-xs font-['DM_Mono'] text-[#6B7280] uppercase tracking-wider block mb-2">Action</span>
</div>
<div className="md:col-span-3 md:border-t md:border-[#E5E7EB] pt-4 -mt-8 md:mt-0">
<p className="text-sm font-light text-[#1A1A2E] leading-relaxed">
                                    I led a structured operational simplification program anchored in process mapping and root cause analysis — tracing recurring friction points back to their origin rather than treating each symptom separately. From that mapping, I identified automation opportunities and redesigned workflows to eliminate the friction at the source. KPI tracking was set up before changes went live so impact could be attributed clearly, not estimated after the fact. Prioritization followed the compounding logic: remove recurring friction first, then optimize what remains.
                                </p>
</div>
<div className="md:col-span-1 border-t border-[#E5E7EB] pt-4">
<span className="text-xs font-['DM_Mono'] text-[#6B7280] uppercase tracking-wider block mb-2">Result</span>
</div>
<div className="md:col-span-3 md:border-t md:border-[#E5E7EB] pt-4 -mt-8 md:mt-0">
<p className="text-sm font-light text-[#1A1A2E] leading-relaxed mb-6">
                                    Manual work hours dropped 28% against a 25% target. Operational costs fell 35%. Team capacity freed by these changes was redirected to higher-impact initiatives without any headcount additions — a direct structural gain, not just a cost line item.
                                </p>
<div className="bg-white border border-[#E5E7EB] border-l-2 border-l-[#2563EB] p-5">
<span className="text-xs font-['DM_Mono'] text-[#6B7280] uppercase tracking-wider block mb-2">Key Takeaway</span>
<p className="text-sm font-medium text-[#1A1A2E]">
                                        Efficiency compounds when you remove recurring friction at the source — optimizing isolated tasks in isolation misses the system-level gains that only become visible when you map the whole process.
                                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="w-full h-64 md:h-96 bg-white border border-[#E5E7EB] relative overflow-hidden flex items-center justify-center">
<img alt="Workflow data geometric representation" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 mix-blend-multiply" loading="lazy" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F8F9FA]/50"></div>
</div>
</div>
</article>

<section className="py-20 md:py-32 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-3 pt-2">
<span className="text-xs font-['DM_Mono'] text-[#6B7280] tracking-wider uppercase">07 / Connect</span>
</div>
<div className="md:col-span-9">
<h2 className="text-3xl md:text-5xl font-['DM_Mono'] font-medium tracking-tight text-[#1A1A2E] mb-6">
                            Let's build systems that hold up.
                        </h2>
<p className="text-base md:text-lg text-[#6B7280] font-light max-w-2xl leading-relaxed mb-10">
                            If you're working on a product, ops, or growth challenge that needs structure before momentum, I'd like to hear about it. Reach out directly or connect on LinkedIn.
                        </p>
<div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
<a className="inline-flex items-center justify-center gap-2 bg-[#2563EB] text-white px-8 py-4 text-sm font-medium hover:bg-[#1d4ed8] transition-colors" href="mailto:surya191199@gmail.com">
                                Email Me
                                <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<div className="flex flex-col space-y-2">
<a className="text-sm font-['DM_Mono'] text-[#1A1A2E] hover:text-[#2563EB] transition-colors" href="mailto:surya191199@gmail.com">surya191199@gmail.com</a>
<a className="text-sm font-['DM_Mono'] text-[#6B7280] hover:text-[#1A1A2E] transition-colors underline decoration-[#E5E7EB] underline-offset-4" href="https://www.linkedin.com/in/gandhisuryab/" rel="noopener noreferrer" target="_blank">linkedin.com/in/gandhisuryab/</a>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="py-8 border-t border-[#E5E7EB] bg-[#F8F9FA]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
<span className="text-xs font-['DM_Mono'] text-[#6B7280]">© 2024 Gandhi Surya Buana.</span>
<span className="text-xs font-['DM_Mono'] text-[#6B7280]">Systems Ledger v1.0</span>
</div>
</footer>



    </>
  );
}
