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



        // Initialize GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Hero initial animations
        const tl = gsap.timeline();
        tl.from(".reveal-item", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.2
        });

        // Scroll reveals for sections
        gsap.utils.toArray('.reveal-up').forEach(element => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            });
        });

        // Subtle parallax on background abstract visual
        gsap.to(".accent-glow", {
            scrollTrigger: {
                trigger: ".accent-glow",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            },
            y: -50,
            rotate: -2
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
      

<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-6 glass-panel border-b-0 border-t-0 border-x-0">
<div className="text-xl font-medium logo-tracking uppercase">SHOWVIK DAS</div>
<div className="hidden md:flex gap-8 text-xs uppercase widest-tracking font-light text-neutral-400">
<a className="hover:text-white transition-colors duration-300" href="#about">About</a>
<a className="hover:text-white transition-colors duration-300" href="#expertise">Expertise</a>
<a className="hover:text-white transition-colors duration-300" href="#experience">Experience</a>
<a className="hover:text-white transition-colors duration-300" href="#projects">Projects</a>
<a className="hover:text-white transition-colors duration-300" href="#education">Education</a>
</div>
<a className="text-xs uppercase widest-tracking font-light border border-neutral-800 px-4 py-2 rounded-full hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300" href="mailto:dasshowvik84@gmail.com">
            Contact
        </a>
</nav>

<section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
<div className="absolute inset-0 bg-grid pointer-events-none z-0"></div>

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1 w-full">
<div className="reveal-item flex items-center gap-3 mb-8">
<div className="h-px w-8 bg-cyan-500/50"></div>
<span className="text-xs uppercase widest-tracking accent-text font-light">OSP Design Engineer</span>
</div>
<h1 className="reveal-item text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[1.1] mb-8">
                    ARCHITECTING<br/>
<span className="text-neutral-500">FIBER</span> NETWORKS.
                </h1>
<p className="reveal-item text-sm md:text-base font-light text-neutral-400 leading-relaxed max-w-xl mb-12">
                    Specializing in HLD/LLD fiber design, FTTx network architecture, and large-scale AutoCAD deployments. Engineering structural foundations for high-speed connectivity across multiple jurisdictions.
                </p>
<div className="reveal-item flex flex-col sm:flex-row gap-4">
<a className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black text-xs uppercase widest-tracking font-medium hover:bg-neutral-200 transition-colors" href="#projects">
                        View Projects
                        <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="flex items-center justify-center gap-2 px-6 py-3 border border-neutral-800 text-xs uppercase widest-tracking font-light hover:border-neutral-600 transition-colors" href="https://www.linkedin.com/in/showvik-das/" target="_blank">
                        LinkedIn Profile
                        <iconify-icon height="16" icon="solar:user-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="reveal-item hidden lg:block relative w-[400px] h-[500px] glass-panel rounded-2xl p-4 accent-glow transform rotate-2 hover:rotate-0 transition-transform duration-700">
<img alt="Architecture Structure" className="w-full h-full object-cover rounded-xl opacity-60 grayscale mix-blend-screen" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=1931&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border border-cyan-500/20 rounded-2xl m-8"></div>
<div className="absolute bottom-8 left-8 right-8 p-4 glass-panel border-t border-white/10 rounded-lg">
<div className="flex justify-between items-center text-xs font-light text-neutral-400 font-mono">
<span>DWG_SET_01.dwg</span>
<span>SCALE: 1/4" = 1'-0"</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-t border-neutral-900 relative" id="about">
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col lg:flex-row gap-16 items-center">

<div className="w-full lg:w-2/5 reveal-up order-2 lg:order-1">
<div className="relative w-full aspect-[4/5] max-w-sm mx-auto lg:mx-0 glass-panel p-3 rounded-2xl accent-glow group">
<img alt="Showvik Das - OSP Design Engineer" className="w-full h-full object-cover rounded-xl grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e07b9941-9f11-4bd3-a4f2-fd8f27a5892b_800w.jpg"/>

<div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyan-500/50 -translate-x-2 -translate-y-2 opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-cyan-500/50 translate-x-2 translate-y-2 opacity-50 group-hover:opacity-100 transition-opacity"></div>

<div className="absolute bottom-6 left-6 right-6 p-4 glass-panel border-t border-white/10 rounded-lg backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="flex justify-between items-center text-xs font-light text-neutral-300 font-mono">
<span>ID_PROFILE: SD</span>
<span className="text-cyan-400 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span> ONLINE
                                </span>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-3/5 order-1 lg:order-2">
<h2 className="text-xs uppercase widest-tracking text-neutral-500 mb-4 reveal-up">01 / The Engineer</h2>
<h3 className="text-3xl md:text-5xl font-light tracking-tight mb-8 reveal-up">ABOUT ME</h3>
<div className="space-y-6 text-sm md:text-base font-light text-neutral-400 leading-relaxed max-w-2xl">
<p className="reveal-up">
                            I’m <span className="text-white font-normal">Showvik Das</span>, an OSP Design Engineer with over 2 years of experience in designing fiber optic networks. I specialize in AutoCAD, GIS integration, and creating construction-ready designs for both aerial and underground systems.
                        </p>
<p className="reveal-up">
                            I’ve worked on large-scale projects exceeding <span className="text-white font-normal">$2.8M</span>, focusing on permitting, BOM preparation, and as-built documentation. I'm passionate about optimizing workflows and have developed several AutoCAD LISP scripts to streamline OSP design processes.
                        </p>
<p className="reveal-up">
                            I’m always eager to contribute to projects that shape the future of telecommunications infrastructure, ensuring robust, efficient, and reliable connections from the central office to the end user.
                        </p>
</div>
<d <="" div="">
</d></div>
</div>
</div></section>

<section className="py-24 px-6 md:px-12 lg:px-24 border-t border-neutral-900 relative" id="expertise">
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
<div>
<h2 className="text-xs uppercase widest-tracking text-neutral-500 mb-4 reveal-up">02 / Technical Arsenal</h2>
<h3 className="text-3xl md:text-5xl font-light tracking-tight reveal-up">CORE EXPERTISE</h3>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="glass-panel p-8 md:p-10 group hover:border-cyan-500/30 transition-colors duration-500 reveal-up">
<iconify-icon className="text-3xl accent-text mb-8" icon="solar:ruler-pen-linear"></iconify-icon>
<h4 className="text-lg font-normal tracking-tight mb-4 group-hover:text-white transition-colors">OSP Design &amp; Tools</h4>
<p className="text-sm font-light text-neutral-400 leading-relaxed">
                        Expertise in AutoCAD, FTTx network architecture, splice matrix development, HLD/LLD fiber design, and Route Optimization.
                    </p>
</div>

<div className="glass-panel p-8 md:p-10 group hover:border-cyan-500/30 transition-colors duration-500 reveal-up">
<iconify-icon className="text-3xl accent-text mb-8" icon="solar:shield-check-linear"></iconify-icon>
<h4 className="text-lg font-normal tracking-tight mb-4 group-hover:text-white transition-colors">Standards &amp; Permitting</h4>
<p className="text-sm font-light text-neutral-400 leading-relaxed">
                        Ensuring NESC compliance, DOT &amp; TCP standards adherence, ROW coordination, utility easement review, and creating permit-ready designs.
                    </p>
</div>

<div className="glass-panel p-8 md:p-10 group hover:border-cyan-500/30 transition-colors duration-500 reveal-up">
<iconify-icon className="text-3xl accent-text mb-8" icon="solar:document-text-linear"></iconify-icon>
<h4 className="text-lg font-normal tracking-tight mb-4 group-hover:text-white transition-colors">Engineering Outputs</h4>
<p className="text-sm font-light text-neutral-400 leading-relaxed">
                        Generating comprehensive Bills of Materials (BOMs), splice diagrams, as-built drawings, construction permit packages, cost estimates, and QA/QC records.
                    </p>
</div>

<div className="glass-panel p-8 md:p-10 group hover:border-cyan-500/30 transition-colors duration-500 reveal-up">
<iconify-icon className="text-3xl accent-text mb-8" icon="solar:code-square-linear"></iconify-icon>
<h4 className="text-lg font-normal tracking-tight mb-4 group-hover:text-white transition-colors">Automation &amp; Data</h4>
<p className="text-sm font-light text-neutral-400 leading-relaxed">
                        Utilizing Python, AutoLISP, Power BI, MS Access, and advanced Excel (lookups, pivot tables, VBA) to streamline drafting and reporting workflows.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-t border-neutral-900" id="experience">
<div className="max-w-5xl mx-auto">
<h2 className="text-xs uppercase widest-tracking text-neutral-500 mb-4 reveal-up">03 / Professional Journey</h2>
<h3 className="text-3xl md:text-5xl font-light tracking-tight mb-20 reveal-up">EXPERIENCE</h3>
<div className="space-y-24">

<div className="relative pl-8 md:pl-0 reveal-up">
<div className="hidden md:block absolute left-[30%] top-0 bottom-0 w-px bg-neutral-800"></div>
<div className="hidden md:block absolute left-[30%] top-2 w-2 h-2 -ml-[3.5px] rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
<div className="flex flex-col md:flex-row gap-8 md:gap-16">
<div className="md:w-[30%] md:pr-12 md:text-right flex-shrink-0">
<h4 className="text-lg font-medium tracking-tight text-white mb-1">OSP Design Engineer</h4>
<div className="text-sm font-light text-cyan-400 mb-2">Skarion</div>
<div className="text-xs uppercase widest-tracking text-neutral-500">Aug 2024 – Present</div>
</div>
<div className="md:w-[70%]">
<ul className="space-y-4 text-sm font-light text-neutral-400 leading-relaxed">
<li className="flex gap-3">
<iconify-icon className="text-neutral-600 mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Prepared detailed Bills of Materials (BOMs), calculating fiber quantities, conduit runs, and components with controlled contingencies, supporting $2.8M+ in project cost planning.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-neutral-600 mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Led AutoCAD-based design efforts for large-scale XGS-PON fiber builds exceeding 400,000 feet, producing construction-ready drawings across multiple jurisdictions.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-neutral-600 mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Assembled and submitted 50+ permit-ready design packages, incorporating ROW exhibits, alignment plans, and regulatory documentation to meet county and DOT requirements.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-neutral-600 mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Executed design layouts for underground and aerial plant, including duct bank geometry, bore pit details, and pole attachment clearances per NESC guidelines.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-neutral-600 mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Created and maintained splice documentation for F1–F4 network segments, defining splitter locations, fiber continuity, and port assignments.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-neutral-600 mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Supported phased rollout of a residential fiber network serving 500+ households, delivering complete HLD/LLD plan sets across 40+ route-miles (1:32 splitter architecture).</span>
</li>
</ul>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-0 reveal-up">
<div className="hidden md:block absolute left-[30%] top-0 bottom-0 w-px bg-neutral-800"></div>
<div className="hidden md:block absolute left-[30%] top-2 w-2 h-2 -ml-[3.5px] rounded-full border-2 border-neutral-600 bg-[#0a0a0a]"></div>
<div className="flex flex-col md:flex-row gap-8 md:gap-16">
<div className="md:w-[30%] md:pr-12 md:text-right flex-shrink-0">
<h4 className="text-lg font-medium tracking-tight text-white mb-1">AutoCAD Drafter</h4>
<div className="text-sm font-light text-cyan-400 mb-2">Skarion</div>
<div className="text-xs uppercase widest-tracking text-neutral-500">May 2024 – Aug 2024</div>
</div>
<div className="md:w-[70%]">
<ul className="space-y-4 text-sm font-light text-neutral-400 leading-relaxed">
<li className="flex gap-3">
<iconify-icon className="text-neutral-600 mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Created detailed designs for underground and aerial fiber routes, laying out conduit runs, handhole locations, and right-of-way clearances for distribution and backbone networks.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-neutral-600 mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Developed and maintained drafting standards, templates, and SOPs to improve workflow efficiency and keep project deliverables consistent.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-neutral-600 mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Improved CAD basemaps by adding geo-referenced mapping tools, making route planning easier and speeding up drafting work.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-neutral-600 mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Performed thorough QA/QC checks on drawings, reviewing layer organization, alignment precision, and permitting criteria to ensure technical accuracy.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-neutral-600 mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Worked closely with project managers and OSP engineers to resolve field issues, update redlines and keep as-built drawings accurate.</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 border-t border-neutral-900 relative" id="projects">
<div className="max-w-7xl mx-auto relative z-10">
<h2 className="text-xs uppercase widest-tracking text-neutral-500 mb-4 reveal-up">04 / Featured Work</h2>
<h3 className="text-3xl md:text-5xl font-light tracking-tight mb-16 reveal-up">PROJECTS</h3>

<div className="mb-24">
<div className="flex items-center gap-4 mb-8 reveal-up">
<div className="h-px w-8 bg-neutral-800"></div>
<h4 className="text-xl md:text-2xl font-light tracking-tight text-white uppercase">Design Works</h4>
</div>
<div className="flex flex-col gap-8">

<div className="glass-panel p-8 md:p-12 reveal-up group hover:border-cyan-500/30 transition-colors duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
<iconify-icon className="text-8xl text-cyan-500" icon="solar:routing-2-linear"></iconify-icon>
</div>
<div className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative z-10">
<div className="lg:w-1/3 flex-shrink-0">
<h4 className="text-2xl font-normal tracking-tight mb-1 text-white">Fiber Layout (HLD)</h4>
<div className="text-sm font-light text-cyan-400 mb-8">Austin, TX</div>
<div className="space-y-6">
<div>
<span className="text-neutral-500 block text-xs uppercase widest-tracking mb-1">Project Type</span>
<span className="text-sm font-light text-neutral-300">High-Level Design (HLD)</span>
</div>
<div>
<span className="text-neutral-500 block text-xs uppercase widest-tracking mb-1">Role</span>
<span className="text-sm font-light text-neutral-300">OSP Design Engineer</span>
</div>
<div>
<span className="text-neutral-500 block text-xs uppercase widest-tracking mb-3">Tools Used</span>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 border border-neutral-800 rounded-md text-xs font-light text-neutral-400 bg-black/50">AutoCAD</span>
<span className="px-3 py-1.5 border border-neutral-800 rounded-md text-xs font-light text-neutral-400 bg-black/50">GIS</span>
<span className="px-3 py-1.5 border border-neutral-800 rounded-md text-xs font-light text-neutral-400 bg-black/50">NESC Compliance</span>
</div>
</div>
</div>
</div>
<div className="lg:w-2/3 flex flex-col justify-center">
<div className="h-px w-full bg-neutral-800/50 mb-8 lg:hidden"></div>
<ul className="space-y-4 text-sm font-light text-neutral-400 leading-relaxed">
<li className="flex gap-3">
<iconify-icon className="text-cyan-500/50 mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Led the high-level design (HLD) for a large-scale fiber optic network in Austin, TX, covering 40+ route miles for a residential fiber network serving 500+ households.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-cyan-500/50 mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Produced construction-ready drawings for both aerial and underground infrastructure, including duct bank geometry, handhole placements, and pole attachment clearances, ensuring full compliance with NESC guidelines and local permitting requirements.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-cyan-500/50 mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Delivered comprehensive HLD/LLD plan sets for the entire 1:32 splitter architecture design, mapping out fiber routes, splicing locations, and network segment connections across the city’s infrastructure.</span>
</li>
</ul>
</div>
</div>
</div>

<div className="glass-panel p-8 md:p-12 reveal-up group hover:border-cyan-500/30 transition-colors duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
<iconify-icon className="text-8xl text-cyan-500" icon="solar:map-linear"></iconify-icon>
</div>
<div className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative z-10">
<div className="lg:w-1/3 flex-shrink-0">
<h4 className="text-2xl font-normal tracking-tight mb-1 text-white">Fiber Layout (LLD)</h4>
<div className="text-sm font-light text-cyan-400 mb-8">Austin, TX</div>
<div className="space-y-6">
<div>
<span className="text-neutral-500 block text-xs uppercase widest-tracking mb-1">Project Type</span>
<span className="text-sm font-light text-neutral-300">Low-Level Design (LLD)</span>
</div>
<div>
<span className="text-neutral-500 block text-xs uppercase widest-tracking mb-1">Role</span>
<span className="text-sm font-light text-neutral-300">OSP Design Engineer</span>
</div>
<div>
<span className="text-neutral-500 block text-xs uppercase widest-tracking mb-3">Tools Used</span>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 border border-neutral-800 rounded-md text-xs font-light text-neutral-400 bg-black/50">AutoCAD</span>
<span className="px-3 py-1.5 border border-neutral-800 rounded-md text-xs font-light text-neutral-400 bg-black/50">GIS</span>
<span className="px-3 py-1.5 border border-neutral-800 rounded-md text-xs font-light text-neutral-400 bg-black/50">MicroStation</span>
<span className="px-3 py-1.5 border border-neutral-800 rounded-md text-xs font-light text-neutral-400 bg-black/50">Splice Matrix</span>
</div>
</div>
</div>
</div>
<div className="lg:w-2/3 flex flex-col justify-center">
<div className="h-px w-full bg-neutral-800/50 mb-8 lg:hidden"></div>
<ul className="space-y-4 text-sm font-light text-neutral-400 leading-relaxed">
<li className="flex gap-3">
<iconify-icon className="text-cyan-500/50 mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Developed the low-level design (LLD) for fiber optic network routing in Austin, TX, ensuring the final layout met fiber continuity requirements and customer connectivity needs.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-cyan-500/50 mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Produced detailed drawings for conduit runs, splice points, and fiber placement while collaborating closely with construction teams to resolve any field issues and incorporate last-minute changes.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-cyan-500/50 mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Managed the creation and maintenance of splice documentation for F1–F4 network segments, providing fiber port assignments and splitter locations critical for successful network installation and expansion.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-cyan-500/50 mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Regularly communicated with stakeholders to address design adjustments, ensuring the LLD adhered to all technical standards and client specifications.</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-4 mb-8 reveal-up">
<div className="h-px w-8 bg-neutral-800"></div>
<h4 className="text-xl md:text-2xl font-light tracking-tight text-white uppercase">Workflow Automations</h4>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="glass-panel p-8 reveal-up group hover:border-cyan-500/30 transition-colors duration-500 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<h5 className="text-lg font-medium text-white tracking-tight">Auto_Road_Dimension Creator</h5>
<iconify-icon className="text-2xl text-cyan-500/50" icon="solar:ruler-cross-pen-linear"></iconify-icon>
</div>
<p className="text-sm font-light text-neutral-400 mb-6 leading-relaxed">
                                Automated the creation of 6 clean, associative, aligned dimensions perpendicular to a road centerline at specified stations for infrastructure projects. Measures real-world distances between Edge of Pavement (EOP), Right-of-Way (ROW), and conduits on layers such as <span className="text-cyan-400/80 font-mono text-xs">P_CONDUIT</span> and <span className="text-cyan-400/80 font-mono text-xs">P_CONDUIT_PARALLEL</span>.
                            </p>
</div>
<div className="bg-black/40 border border-neutral-800/80 p-4 rounded-lg">
<span className="block text-xs uppercase widest-tracking text-neutral-500 mb-3">Workflow</span>
<div className="flex items-center gap-2 flex-wrap text-xs font-light text-neutral-300">
<span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded">Load file</span>
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded">Run command</span>
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded">Select source dimension</span>
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded">Select centerline</span>
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded">Click road sides</span>
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-cyan-400">Automatic dimensions</span>
</div>
</div>
</div>

<div className="glass-panel p-8 reveal-up group hover:border-cyan-500/30 transition-colors duration-500 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<h5 className="text-lg font-medium text-white tracking-tight">Auto_Block_Rotator</h5>
<iconify-icon className="text-2xl text-cyan-500/50" icon="solar:refresh-circle-linear"></iconify-icon>
</div>
<p className="text-sm font-light text-neutral-400 mb-6 leading-relaxed">
                                A simple and efficient tool to rotate blocks 180° around their insertion point without needing to select a base point or angle. Ideal for quickly flipping symbols such as trees, lights, signs, etc., enhancing drafting efficiency.
                            </p>
</div>
<div className="bg-black/40 border border-neutral-800/80 p-4 rounded-lg">
<span className="block text-xs uppercase widest-tracking text-neutral-500 mb-3">Workflow</span>
<div className="flex items-center gap-2 flex-wrap text-xs font-light text-neutral-300">
<span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded">Load file</span>
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded">Run command</span>
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded">Select block</span>
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-cyan-400">Instantly rotates</span>
</div>
</div>
</div>

<div className="glass-panel p-8 reveal-up group hover:border-cyan-500/30 transition-colors duration-500 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<h5 className="text-lg font-medium text-white tracking-tight">Parallel Conduit</h5>
<iconify-icon className="text-2xl text-cyan-500/50" icon="solar:slider-vertical-linear"></iconify-icon>
</div>
<p className="text-sm font-light text-neutral-400 mb-6 leading-relaxed">
                                Offsets lines/polylines/arcs by 3.0 units to create parallel conduit runs. Automatically places the new parallel object on the <span className="text-cyan-400/80 font-mono text-xs">P_CONDUIT_PARALLEL</span> layer, allowing for quick creation of side-by-side conduits.
                            </p>
</div>
<div className="bg-black/40 border border-neutral-800/80 p-4 rounded-lg">
<span className="block text-xs uppercase widest-tracking text-neutral-500 mb-3">Workflow</span>
<div className="flex items-center gap-2 flex-wrap text-xs font-light text-neutral-300">
<span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded">Load file</span>
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded">Run command</span>
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded">Select conduit</span>
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded">Pick side to offset</span>
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-cyan-400">Repeat as needed</span>
</div>
</div>
</div>

<div className="glass-panel p-8 reveal-up group hover:border-cyan-500/30 transition-colors duration-500 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<h5 className="text-lg font-medium text-white tracking-tight">Conduit</h5>
<iconify-icon className="text-2xl text-cyan-500/50" icon="solar:routing-3-linear"></iconify-icon>
</div>
<p className="text-sm font-light text-neutral-400 mb-6 leading-relaxed">
                                Offsets selected lines/polylines/arcs by 10.0 units, specifically for fiber conduit routing. Automatically sets the new objects on layer <span className="text-cyan-400/80 font-mono text-xs">48 FOC</span> with linetype scale adjusted to 25.0.
                            </p>
</div>
<div className="bg-black/40 border border-neutral-800/80 p-4 rounded-lg">
<span className="block text-xs uppercase widest-tracking text-neutral-500 mb-3">Workflow</span>
<div className="flex items-center gap-2 flex-wrap text-xs font-light text-neutral-300">
<span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded">Load file</span>
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded">Run command</span>
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded">Select objects</span>
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded">Pick side to offset</span>
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-cyan-400">Objects offset</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-t border-neutral-900 relative overflow-hidden" id="education">

<div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
<iconify-icon icon="solar:cpu-bolt-linear" style={{fontSize: '400px'}}></iconify-icon>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<h2 className="text-xs uppercase widest-tracking text-neutral-500 mb-4 reveal-up">05 / Academic Foundation</h2>
<h3 className="text-3xl md:text-5xl font-light tracking-tight mb-16 reveal-up">EDUCATION</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="glass-panel p-8 reveal-up border-l-2 border-l-cyan-500/50 bg-[#050505]/50">
<div className="text-xs uppercase widest-tracking text-neutral-500 mb-2">Aug 2022 - May 2024</div>
<h4 className="text-xl font-normal tracking-tight mb-2">Master of Science in Computer Science</h4>
<p className="text-sm font-light text-neutral-400">New Mexico Institute of Mining and Technology</p>
</div>

<div className="glass-panel p-8 reveal-up border-l-2 border-l-neutral-800 hover:border-l-cyan-500/30 transition-colors bg-[#050505]/50">
<div className="text-xs uppercase widest-tracking text-neutral-500 mb-2">Aug 2018 - May 2022</div>
<h4 className="text-xl font-normal tracking-tight mb-2">Bachelor of Science in Computer Science</h4>
<p className="text-sm font-light text-neutral-400">The University of Texas at Arlington</p>
</div>
</div>
</div>
</section>

<footer className="py-16 px-6 md:px-12 lg:px-24 bg-black border-t border-neutral-900 text-center md:text-left">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
<div className="reveal-up">
<h2 className="text-2xl font-medium tracking-tighter mb-2">SHOWVIK DAS</h2>
<p className="text-xs font-light text-neutral-500 max-w-xs mx-auto md:mx-0">
                    Engineering reliable, scalable, and compliant fiber optic infrastructures.
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-8 text-sm font-light text-neutral-400 reveal-up">
<div className="flex flex-col gap-2 items-center md:items-start">
<span className="text-xs uppercase widest-tracking text-neutral-600 mb-1">Contact</span>
<a className="hover:text-cyan-400 transition-colors flex items-center gap-2" href="mailto:dasshowvik84@gmail.com">
<iconify-icon icon="solar:letter-linear"></iconify-icon> dasshowvik84@gmail.com
                    </a>
<a className="hover:text-cyan-400 transition-colors flex items-center gap-2" href="tel:2146001766">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> (214)-600-1766
                    </a>
</div>
<div className="flex flex-col gap-2 items-center md:items-start">
<span className="text-xs uppercase widest-tracking text-neutral-600 mb-1">Location &amp; Social</span>
<span className="flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Albuquerque, NM
                    </span>
<a className="hover:text-cyan-400 transition-colors flex items-center gap-2" href="https://www.linkedin.com/in/showvik-das/" target="_blank">
<iconify-icon icon="solar:link-linear"></iconify-icon> LinkedIn
                    </a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-neutral-900 flex justify-between items-center text-xs text-neutral-600 font-light reveal-up">
<p>© 2024 Showvik Das.</p>
<p>Designed for Structure.</p>
</div>
</footer>


    </>
  );
}
