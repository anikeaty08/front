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



        // Intersection Observer for Reveal Animations
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
      

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-6">
<div className="flex items-center gap-3 text-white tracking-tight font-medium text-sm">
<span className="opacity-90">The CMO Agency</span>
<span className="text-white/20">/</span>
<span className="opacity-90">livv</span>
</div>
</div>
<div className="hidden md:flex items-center gap-2">
<div className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-medium tracking-wider uppercase text-white/60">
                    Confidential
                </div>
</div>
</div>
</header>

<main className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-white/5">
<div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none"></div>
<div className="max-w-4xl mx-auto relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70 mb-8 reveal">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Strategic Collaboration Opportunity
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-8 reveal" style={{transitionDelay: '100ms'}}>
                Partnership <span className="text-white/40">Proposal</span>
</h1>
<p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed reveal" style={{transitionDelay: '200ms'}}>
                Execution, systems, and infrastructure to support scalable growth.
                Combining the strategic power of <span className="text-white">The CMO Agency</span> with the technical precision of <span className="text-white">livv</span>.
            </p>
</div>
</main>

<section className="py-24 px-6 border-b border-white/5 bg-[#080808]">
<div className="max-w-3xl mx-auto text-center reveal">
<h2 className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-8">Shared Vision</h2>
<blockquote className="text-2xl md:text-3xl font-medium text-white leading-tight mb-8">
                “The best results happen when strategy and execution are tightly aligned.”
            </blockquote>
<p className="text-white/60 text-lg">
                We believe sustainable growth comes from clear strategy, strong execution, and systems that scale with demand.
            </p>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 relative">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Where The CMO Agency Leads</h2>
<p className="text-white/50 max-w-md">Your strategic foundation is the engine behind client growth.</p>
</div>
<iconify-icon className="text-white/20 text-4xl" icon="solar:crown-star-linear"></iconify-icon>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl card-hover transition-colors duration-300 reveal" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-white text-3xl mb-6" icon="solar:telescope-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Strategy &amp; Positioning</h3>
<p className="text-sm leading-relaxed text-white/50">Defining market stance, brand messaging, and long-term growth roadmaps.</p>
</div>

<div className="glass-panel p-8 rounded-xl card-hover transition-colors duration-300 reveal" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-white text-3xl mb-6" icon="solar:graph-up-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Demand Generation</h3>
<p className="text-sm leading-relaxed text-white/50">Performance marketing, funnel optimization, and driving measurable leads.</p>
</div>

<div className="glass-panel p-8 rounded-xl card-hover transition-colors duration-300 reveal" style={{transitionDelay: '300ms'}}>
<iconify-icon className="text-white text-3xl mb-6" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Growth Partnerships</h3>
<p className="text-sm leading-relaxed text-white/50">Long-term client advisory, ensuring brand consistency and scalable success.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 bg-[#080808]">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-16">
<div className="reveal">
<h2 className="text-3xl font-medium text-white tracking-tight mb-8">Our Technical Capabilities</h2>
<p className="text-white/50 mb-8">Building the infrastructure that powers modern marketing engines.</p>
<div className="space-y-8">
<div>
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-white text-xl" icon="solar:laptop-linear"></iconify-icon>
<h3 className="text-white font-medium">Web &amp; Digital Products</h3>
</div>
<ul className="space-y-3 pl-8">
<li className="flex items-center gap-3 text-sm text-white/60">
<div className="w-1 h-1 bg-white/40 rounded-full"></div> High-performance Headless CMS (Next.js / Sanity)
                                </li>
<li className="flex items-center gap-3 text-sm text-white/60">
<div className="w-1 h-1 bg-white/40 rounded-full"></div> Conversion-focused Landing Page Systems
                                </li>
<li className="flex items-center gap-3 text-sm text-white/60">
<div className="w-1 h-1 bg-white/40 rounded-full"></div> Scalable E-commerce Architecture
                                </li>
<li className="flex items-center gap-3 text-sm text-white/60">
<div className="w-1 h-1 bg-white/40 rounded-full"></div> Interactive Microsites &amp; Campaigns
                                </li>
</ul>
</div>
</div>
</div>
<div className="reveal" style={{transitionDelay: '200ms'}}>
<div className="h-full flex flex-col justify-center">
<div className="space-y-8 mt-12 md:mt-0">
<div>
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-white text-xl" icon="solar:settings-linear"></iconify-icon>
<h3 className="text-white font-medium">Systems &amp; Automation</h3>
</div>
<ul className="space-y-3 pl-8">
<li className="flex items-center gap-3 text-sm text-white/60">
<div className="w-1 h-1 bg-white/40 rounded-full"></div> Workflow Automation
                                    </li>
<li className="flex items-center gap-3 text-sm text-white/60">
<div className="w-1 h-1 bg-white/40 rounded-full"></div> CRM Integration &amp; Data Hygiene
                                    </li>
<li className="flex items-center gap-3 text-sm text-white/60">
<div className="w-1 h-1 bg-white/40 rounded-full"></div> Custom Client Portals &amp; Dashboards
                                    </li>
<li className="flex items-center gap-3 text-sm text-white/60">
<div className="w-1 h-1 bg-white/40 rounded-full"></div> Automated Reporting &amp; Analytics Layers
                                    </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 relative overflow-hidden">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="mb-16 reveal">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Bridging Strategy &amp; Execution</h2>
<p className="text-white/50">How our technical capabilities directly support your core service pillars.</p>
</div>
<div className="space-y-4">

<div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-12 items-center p-6 rounded-lg border border-white/5 bg-white/[0.02] reveal">
<div>
<div className="text-xs uppercase tracking-wider text-white/30 mb-2 font-medium">Strategy Focus</div>
<h4 className="text-white font-medium mb-1">Brand Positioning &amp; Messaging</h4>
<p className="text-sm text-white/50">Defining the voice and visual identity.</p>
</div>
<div className="flex justify-center rotate-90 md:rotate-0">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-white/60" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
<div>
<div className="text-xs uppercase tracking-wider text-emerald-400/50 mb-2 font-medium">Execution Support</div>
<h4 className="text-white font-medium mb-1">Pixel-Perfect Design Implementation</h4>
<p className="text-sm text-white/50">Ensuring brand guidelines are code-enforced.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-12 items-center p-6 rounded-lg border border-white/5 bg-white/[0.02] reveal" style={{transitionDelay: '100ms'}}>
<div>
<div className="text-xs uppercase tracking-wider text-white/30 mb-2 font-medium">Strategy Focus</div>
<h4 className="text-white font-medium mb-1">Demand Generation &amp; Campaigns</h4>
<p className="text-sm text-white/50">Driving traffic and leads.</p>
</div>
<div className="flex justify-center rotate-90 md:rotate-0">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-white/60" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
<div>
<div className="text-xs uppercase tracking-wider text-emerald-400/50 mb-2 font-medium">Execution Support</div>
<h4 className="text-white font-medium mb-1">Scalable Landing Page Systems</h4>
<p className="text-sm text-white/50">Rapid deployment without dev bottlenecks.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-12 items-center p-6 rounded-lg border border-white/5 bg-white/[0.02] reveal" style={{transitionDelay: '200ms'}}>
<div>
<div className="text-xs uppercase tracking-wider text-white/30 mb-2 font-medium">Strategy Focus</div>
<h4 className="text-white font-medium mb-1">Marketing Operations</h4>
<p className="text-sm text-white/50">Managing funnels and data.</p>
</div>
<div className="flex justify-center rotate-90 md:rotate-0">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-white/60" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
<div>
<div className="text-xs uppercase tracking-wider text-emerald-400/50 mb-2 font-medium">Execution Support</div>
<h4 className="text-white font-medium mb-1">Integrated Automation Layers</h4>
<p className="text-sm text-white/50">Connecting tools for seamless data flow.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 bg-[#080808]">
<div className="max-w-7xl mx-auto">
<div className="mb-12 reveal">
<h2 className="text-3xl font-medium text-white tracking-tight">Synergy &amp; Systems</h2>
<p className="text-white/50 mt-2">Internal tools, websites, and automation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

<div className="md:col-span-2 glass-panel p-8 rounded-xl border border-white/10 relative overflow-hidden group reveal">
<div className="relative z-10">
<iconify-icon className="text-white text-3xl mb-4" icon="solar:widget-5-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Internal Systems</h3>
<p className="text-sm text-white/50 max-w-sm mb-6">We design and build internal tools that support delivery. Campaign dashboards, client management systems, and reporting layers.</p>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<li className="flex items-center text-xs text-white/70">
<iconify-icon className="mr-2" icon="solar:check-circle-linear"></iconify-icon> Cleaner delivery
                            </li>
<li className="flex items-center text-xs text-white/70">
<iconify-icon className="mr-2" icon="solar:check-circle-linear"></iconify-icon> Better decision-making
                            </li>
</ul>
</div>
<div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
</div>

<div className="glass-panel p-8 rounded-xl border border-white/10 relative group reveal" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-white text-3xl mb-4" icon="solar:bolt-circle-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Automation &amp; Ops</h3>
<p className="text-sm text-white/50 mb-4">We implement automation across internal workflows and data syncing.</p>
<div className="mt-auto pt-4 border-t border-white/5">
<div className="text-xs font-medium text-white">The Result:</div>
<div className="text-xs text-white/50">More focus on strategy, less on manual ops.</div>
</div>
</div>

<div className="md:col-span-3 glass-panel p-8 rounded-xl border border-white/10 reveal" style={{transitionDelay: '200ms'}}>
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-white text-3xl" icon="solar:monitor-smartphone-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white">Growth-Focused Websites</h3>
</div>
<div className="grid grid-cols-2 gap-8">
<div>
<div className="text-xs uppercase tracking-wider text-white/30 mb-3 font-medium">You Define</div>
<ul className="space-y-2">
<li className="text-sm text-white/70">Positioning &amp; Messaging</li>
<li className="text-sm text-white/70">Funnel Logic</li>
</ul>
</div>
<div>
<div className="text-xs uppercase tracking-wider text-emerald-400/50 mb-3 font-medium">We Deliver</div>
<ul className="space-y-2">
<li className="text-sm text-white/70">Conversion-focused Design</li>
<li className="text-sm text-white/70">Modular Development</li>
<li className="text-sm text-white/70">SEO-Ready Structures</li>
</ul>
</div>
</div>
</div>
<div className="h-32 md:h-full w-full rounded-lg bg-white/5 border border-white/5 flex items-center justify-center relative overflow-hidden">

<div className="absolute inset-0 flex flex-col gap-2 p-4 opacity-30">
<div className="w-3/4 h-2 bg-white/20 rounded"></div>
<div className="w-1/2 h-2 bg-white/20 rounded"></div>
<div className="w-full h-2 bg-white/10 rounded mt-4"></div>
<div className="w-full h-2 bg-white/10 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-16">

<div className="reveal">
<h2 className="text-2xl font-medium text-white tracking-tight mb-8">Value for The CMO Agency</h2>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1"><iconify-icon className="text-emerald-400" icon="solar:verified-check-linear"></iconify-icon></div>
<span className="text-white/80">Deliver more without increasing headcount</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1"><iconify-icon className="text-emerald-400" icon="solar:verified-check-linear"></iconify-icon></div>
<span className="text-white/80">Strengthen retainers with technical depth</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1"><iconify-icon className="text-emerald-400" icon="solar:verified-check-linear"></iconify-icon></div>
<span className="text-white/80">Improve speed-to-market for clients</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1"><iconify-icon className="text-emerald-400" icon="solar:verified-check-linear"></iconify-icon></div>
<span className="text-white/80">Reduce execution risk</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1"><iconify-icon className="text-emerald-400" icon="solar:verified-check-linear"></iconify-icon></div>
<span className="text-white/80">Scale delivery while maintaining quality</span>
</li>
</ul>
</div>

<div className="reveal" style={{transitionDelay: '200ms'}}>
<h2 className="text-2xl font-medium text-white tracking-tight mb-8">Pricing Strategy</h2>
<div className="space-y-4">
<div className="p-5 rounded-lg border border-white/10 bg-white/[0.02]">
<div className="flex justify-between items-center mb-2">
<h3 className="text-white font-medium">Better Margins</h3>
<iconify-icon className="text-white/40" icon="solar:chart-square-linear"></iconify-icon>
</div>
<p className="text-sm text-white/50">Increase profitability on existing and new retainers.</p>
</div>
<div className="p-5 rounded-lg border border-white/10 bg-white/[0.02]">
<div className="flex justify-between items-center mb-2">
<h3 className="text-white font-medium">Pricing Flexibility</h3>
<iconify-icon className="text-white/40" icon="solar:tag-price-linear"></iconify-icon>
</div>
<p className="text-sm text-white/50">Compete more effectively on high-stakes projects.</p>
</div>
<div className="p-5 rounded-lg border border-white/10 bg-white/[0.02]">
<div className="flex justify-between items-center mb-2">
<h3 className="text-white font-medium">No Overhead</h3>
<iconify-icon className="text-white/40" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<p className="text-sm text-white/50">Scale delivery without the cost of internal hiring.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 border-b border-white/5 bg-[#080808]">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 reveal">
<div className="px-4 text-center">
<div className="text-3xl font-medium text-white mb-2 tracking-tighter">2018</div>
<div className="text-sm text-white/40 font-medium uppercase tracking-wide mb-2">Founded</div>
<p className="text-sm text-white/50">Years of refined processes and proven outcomes.</p>
</div>
<div className="px-4 text-center pt-8 md:pt-0">
<div className="text-3xl font-medium text-white mb-2 tracking-tighter">Global</div>
<div className="text-sm text-white/40 font-medium uppercase tracking-wide mb-2">Focus</div>
<p className="text-sm text-white/50">Majority of clients based in the U.S. and Europe.</p>
</div>
<div className="px-4 text-center pt-8 md:pt-0">
<div className="text-3xl font-medium text-white mb-2 tracking-tighter">High</div>
<div className="text-sm text-white/40 font-medium uppercase tracking-wide mb-2">Standards</div>
<p className="text-sm text-white/50">Delivery quality aligned with U.S./EU market expectations.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12 text-center reveal">Collaboration Models</h2>
<div className="grid md:grid-cols-3 gap-6 mb-24">
<div className="p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent reveal">
<div className="bg-[#0A0A0A] p-6 rounded-xl h-full">
<h3 className="text-white font-medium mb-2">White-Label</h3>
<p className="text-sm text-white/50">We act as your internal team, maintaining your brand presence seamlessly.</p>
</div>
</div>
<div className="p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent reveal" style={{transitionDelay: '100ms'}}>
<div className="bg-[#0A0A0A] p-6 rounded-xl h-full">
<h3 className="text-white font-medium mb-2">Strategic Partnership</h3>
<p className="text-sm text-white/50">Combined offerings for large-scale digital transformations.</p>
</div>
</div>
<div className="p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent reveal" style={{transitionDelay: '200ms'}}>
<div className="bg-[#0A0A0A] p-6 rounded-xl h-full">
<h3 className="text-white font-medium mb-2">Retainer / Project</h3>
<p className="text-sm text-white/50">Flexible support from ongoing maintenance to one-off builds.</p>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto reveal">
<h2 className="text-2xl font-medium text-white tracking-tight mb-12 text-center">How We Start</h2>
<div className="relative">
<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10"></div>
<div className="space-y-12">

<div className="relative flex flex-col md:flex-row items-start md:items-center group">
<div className="md:w-1/2 md:text-right md:pr-12 pl-16 md:pl-0">
<h4 className="text-white font-medium">Step 1</h4>
<p className="text-sm text-white/50">Identify a current execution or systems bottleneck.</p>
</div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0A0A0A] border border-white rounded-full z-10"></div>
<div className="md:w-1/2 md:pl-12 hidden md:block"></div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center group">
<div className="md:w-1/2 md:pr-12 hidden md:block"></div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0A0A0A] border border-white/40 rounded-full z-10 group-hover:border-white transition-colors"></div>
<div className="md:w-1/2 md:text-left md:pl-12 pl-16">
<h4 className="text-white font-medium">Step 2</h4>
<p className="text-sm text-white/50">Scope a focused, low-risk collaboration project.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center group">
<div className="md:w-1/2 md:text-right md:pr-12 pl-16 md:pl-0">
<h4 className="text-white font-medium">Step 3</h4>
<p className="text-sm text-white/50">Deliver value quickly and prove the concept.</p>
</div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0A0A0A] border border-white/40 rounded-full z-10 group-hover:border-white transition-colors"></div>
<div className="md:w-1/2 md:pl-12 hidden md:block"></div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center group">
<div className="md:w-1/2 md:pr-12 hidden md:block"></div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0A0A0A] border border-white/40 rounded-full z-10 group-hover:border-white transition-colors"></div>
<div className="md:w-1/2 md:text-left md:pl-12 pl-16">
<h4 className="text-white font-medium">Step 4</h4>
<p className="text-sm text-white/50">Scale the partnership as trust and ROI grow.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-32 px-6 text-center">
<div className="reveal">
<h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-8">Together, We Scale.</h2>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-lg text-white/60 mb-12">
<span>You lead growth strategy.</span>
<span className="hidden md:inline text-white/20">|</span>
<span>We build the engine.</span>
</div>
<button className="group relative px-8 py-4 bg-white text-black text-sm font-medium rounded-full overflow-hidden transition-all hover:px-10">
<span className="relative z-10 flex items-center gap-2">
                    Start Conversation
                    <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
<div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
<div className="text-xs text-white/30">Strategic Collaboration Opportunity</div>
<div className="flex gap-4">
<iconify-icon className="text-white/40 hover:text-white cursor-pointer" icon="solar:letter-linear"></iconify-icon>
<iconify-icon className="text-white/40 hover:text-white cursor-pointer" icon="solar:global-linear"></iconify-icon>
</div>
</div>
</div>
</footer>


    </>
  );
}
