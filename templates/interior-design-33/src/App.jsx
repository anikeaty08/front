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



      // Initialize Lucide Icons
      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });

      // Simple Tailwind Marquee Animation Config (Injected for preview, usually in tailwind.config.js, but requested to avoid config files. Using a quick style tag injection for the animation keyframes to keep it single file and standard HTML/CSS without relying on external config).
      const style = document.createElement('style');
      style.innerHTML = `
          @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-100%); }
          }
          .animate-marquee {
              animation: marquee 25s linear infinite;
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
      

<section className="relative min-h-screen flex flex-col justify-between p-6 md:p-12 overflow-hidden text-zinc-50">

<div className="absolute inset-0 z-0">
<img alt="Modern Remodeled Living Space" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="absolute inset-0 bg-zinc-950/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-transparent to-zinc-950/80"></div>
</div>

<header className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full">
<div className="flex-1">
<a className="text-xl md:text-2xl font-medium tracking-tight uppercase" href="#">
            BuildorasHome
          </a>
</div>
<div className="hidden md:flex flex-1 justify-center gap-12 text-sm text-zinc-200">
<div className="flex flex-col gap-1">
<span>New York, NY</span>
<span className="text-zinc-400">123 Design Avenue</span>
</div>
<div className="flex flex-col gap-1">
<a className="hover:text-white transition-colors" href="mailto:hello@buildorashome.com">
              hello@buildorashome.com
            </a>
<a className="hover:text-white transition-colors" href="tel:+15551234567">
              +1 (555) 123-4567
            </a>
</div>
</div>
<div className="flex-1 flex justify-end items-center gap-4">
<span className="hidden md:block text-sm">Start a Project</span>
<button className="bg-white text-zinc-950 rounded-full p-3 hover:scale-105 transition-transform flex items-center justify-center">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</header>

<div className="relative z-10 flex flex-col justify-end pb-12 w-full max-w-7xl mx-auto pt-40">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
<div className="lg:col-span-8 flex flex-col gap-6">
<div className="flex items-center gap-4 text-sm text-zinc-300">
<i className="w-5 h-5" data-lucide="award"></i>
<span>
                Excellence in Remodeling
                <br/>
                Since 2014
              </span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-[7rem] font-medium tracking-tight leading-[0.9]">
              Transforming Houses
              <br/>
              into
              <span className="text-zinc-300 italic">Dream Homes</span>
</h1>
</div>
<div className="lg:col-span-4 flex flex-col gap-6 lg:pb-8 text-sm text-zinc-300">
<div className="flex flex-col gap-2 border-l border-zinc-500/30 pl-4">
<span className="text-white">Comprehensive Services</span>
<span>Full-scale Renovation</span>
<span>Interior Redesign</span>
<span>Structural Additions</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto mt-12">
<div className="flex flex-col gap-16 md:gap-24">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
<h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-zinc-900 max-w-3xl">
            Bringing structural integrity and refined aesthetics to every square
            foot.
          </h2>
<span className="text-sm font-medium uppercase tracking-widest text-zinc-500 pb-2 border-b border-zinc-900">
            Established 2014
          </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200 border-y border-zinc-200">
<div className="flex flex-col gap-2 py-8 md:py-12 md:px-8 first:md:pl-0 last:md:pr-0">
<span className="text-6xl md:text-7xl font-medium tracking-tight">
              10
              <span className="text-zinc-400">+</span>
</span>
<span className="text-sm font-medium text-zinc-900 uppercase tracking-widest mt-4">
              Years Expertise
            </span>
<span className="text-sm text-zinc-500">Mastering the craft</span>
</div>
<div className="flex flex-col gap-2 py-8 md:py-12 md:px-8">
<span className="text-6xl md:text-7xl font-medium tracking-tight">
              450
            </span>
<span className="text-sm font-medium text-zinc-900 uppercase tracking-widest mt-4">
              Completed
            </span>
<span className="text-sm text-zinc-500">Across the region</span>
</div>
<div className="flex flex-col gap-2 py-8 md:py-12 md:px-8">
<span className="text-6xl md:text-7xl font-medium tracking-tight">
              280
            </span>
<span className="text-sm font-medium text-zinc-900 uppercase tracking-widest mt-4">
              Happy Clients
            </span>
<span className="text-sm text-zinc-500">Living the dream</span>
</div>
<div className="flex flex-col gap-2 py-8 md:py-12 md:px-8 first:md:pl-0 last:md:pr-0">
<span className="text-6xl md:text-7xl font-medium tracking-tight">
              15
            </span>
<span className="text-sm font-medium text-zinc-900 uppercase tracking-widest mt-4">
              Active Builds
            </span>
<span className="text-sm text-zinc-500">In progress</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-24">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 pb-8">
<h2 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900">
            Selected Works
          </h2>
<span className="text-sm font-medium uppercase tracking-widest text-zinc-500">
            2022 — 2024
          </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12 items-center">
<div className="md:col-span-7 flex flex-col gap-6 group cursor-pointer">
<div className="overflow-hidden bg-zinc-100 aspect-[4/3] rounded-sm">
<img alt="Project" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex justify-between items-start border-t border-zinc-200 pt-4">
<div>
<h3 className="text-2xl font-medium tracking-tight">
                  The Heritage Revival
                </h3>
<span className="text-sm text-zinc-500 block mt-1">
                  Brooklyn, NY
                </span>
</div>
<span className="text-xs uppercase tracking-widest font-medium text-zinc-900">
                Residential
              </span>
</div>
</div>
<div className="md:col-span-4 md:col-start-9 flex flex-col gap-6 group cursor-pointer mt-12 md:mt-48">
<div className="overflow-hidden bg-zinc-100 aspect-[3/4] rounded-sm">
<img alt="Project" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex justify-between items-start border-t border-zinc-200 pt-4">
<div>
<h3 className="text-xl font-medium tracking-tight">
                  Minimalist Haven
                </h3>
<span className="text-sm text-zinc-500 block mt-1">Austin, TX</span>
</div>
<span className="text-xs uppercase tracking-widest font-medium text-zinc-900">
                Interior
              </span>
</div>
</div>
<div className="md:col-span-8 md:col-start-3 flex flex-col gap-6 group cursor-pointer mt-12 md:mt-24">
<div className="overflow-hidden bg-zinc-100 aspect-video rounded-sm">
<img alt="Project" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex justify-between items-start border-t border-zinc-200 pt-4">
<div>
<h3 className="text-3xl font-medium tracking-tight">
                  Coastal Retreat
                </h3>
<span className="text-sm text-zinc-500 block mt-1">Malibu, CA</span>
</div>
<span className="text-xs uppercase tracking-widest font-medium text-zinc-900">
                Architecture
              </span>
</div>
</div>
</div>
<div className="flex justify-center mt-12">
<button className="border border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors px-8 py-4 rounded-full text-sm font-medium uppercase tracking-widest">
            View Complete Archive
          </button>
</div>
</div>
</section>

<section className="py-32 bg-zinc-50 text-zinc-900 border-y border-zinc-200">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col gap-4 mb-24 max-w-3xl">
<span className="text-sm font-medium uppercase tracking-widest text-zinc-500">
            Methodology
          </span>
<h2 className="text-5xl md:text-7xl font-medium tracking-tight">
            How we bring your vision to life.
          </h2>
</div>
<div className="flex flex-col divide-y divide-zinc-200 border-t border-zinc-200">
<div className="py-12 flex flex-col md:flex-row gap-8 md:gap-24 group hover:bg-white transition-colors -mx-6 px-6 md:-mx-12 md:px-12 cursor-default">
<span className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-300 group-hover:text-zinc-900 transition-colors w-24">
              01
            </span>
<div className="flex-1 flex flex-col gap-4">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight">
                Consultation &amp; Scope
              </h3>
<p className="text-lg text-zinc-500 max-w-2xl">
                Initial meetings to understand your vision, assess the site, and
                define the technical and aesthetic requirements of the remodel.
              </p>
</div>
<div className="hidden md:block w-48 h-32 overflow-hidden rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
<img alt="Step 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&amp;w=400&amp;q=80"/>
</div>
</div>
<div className="py-12 flex flex-col md:flex-row gap-8 md:gap-24 group hover:bg-white transition-colors -mx-6 px-6 md:-mx-12 md:px-12 cursor-default">
<span className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-300 group-hover:text-zinc-900 transition-colors w-24">
              02
            </span>
<div className="flex-1 flex flex-col gap-4">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight">
                Architectural Drafting
              </h3>
<p className="text-lg text-zinc-500 max-w-2xl">
                Creation of detailed floor plans, elevations, and structural
                schematics required for permits and construction.
              </p>
</div>
<div className="hidden md:block w-48 h-32 overflow-hidden rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
<img alt="Step 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&amp;w=400&amp;q=80"/>
</div>
</div>
<div className="py-12 flex flex-col md:flex-row gap-8 md:gap-24 group hover:bg-white transition-colors -mx-6 px-6 md:-mx-12 md:px-12 cursor-default">
<span className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-300 group-hover:text-zinc-900 transition-colors w-24">
              03
            </span>
<div className="flex-1 flex flex-col gap-4">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight">
                Design Engineering
              </h3>
<p className="text-lg text-zinc-500 max-w-2xl">
                Finalizing material selections, custom cabinetry, lighting
                layouts, and producing 3D visualizations for approval.
              </p>
</div>
<div className="hidden md:block w-48 h-32 overflow-hidden rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
<img alt="Step 3" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&amp;w=400&amp;q=80"/>
</div>
</div>
<div className="py-12 flex flex-col md:flex-row gap-8 md:gap-24 group hover:bg-white transition-colors -mx-6 px-6 md:-mx-12 md:px-12 cursor-default">
<span className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-300 group-hover:text-zinc-900 transition-colors w-24">
              04
            </span>
<div className="flex-1 flex flex-col gap-4">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight">
                Construction &amp; Build
              </h3>
<p className="text-lg text-zinc-500 max-w-2xl">
                Our skilled craftsmen execute the plans with rigorous quality
                control, managing timelines and site safety.
              </p>
</div>
<div className="hidden md:block w-48 h-32 overflow-hidden rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
<img alt="Step 4" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
<div className="lg:col-span-1 flex flex-col gap-6">
<span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Who Works For You
          </span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900">
            The Experts
            <br/>
            Behind the
            <br/>
            Build.
          </h2>
<p className="text-lg text-zinc-500 mt-4">
            A dedicated team of architects, project managers, and master
            builders turning blueprints into reality.
          </p>
</div>
<div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">

<div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden group bg-zinc-100">
<img alt="Lead Architect" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 text-white">
<h4 className="text-xl font-medium">David Sterling</h4>
<p className="text-sm text-zinc-300">Principal Architect</p>
</div>
</div>
<div className="relative rounded-xl overflow-hidden group bg-zinc-100">
<img alt="Team" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4 text-white">
<h4 className="text-lg font-medium">Sarah Jenkins</h4>
<p className="text-xs text-zinc-300">Lead Designer</p>
</div>
</div>
<div className="relative rounded-xl overflow-hidden group bg-zinc-100">
<img alt="Team" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4 text-white">
<h4 className="text-lg font-medium">Marcus Chen</h4>
<p className="text-xs text-zinc-300">Project Manager</p>
</div>
</div>
<div className="relative rounded-xl overflow-hidden group bg-zinc-100">
<img alt="Team" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4 text-white">
<h4 className="text-lg font-medium">Elena Rostova</h4>
<p className="text-xs text-zinc-300">Site Supervisor</p>
</div>
</div>
<div className="relative rounded-xl overflow-hidden bg-zinc-900 text-white flex flex-col items-center justify-center p-6 text-center">
<span className="text-5xl font-medium tracking-tight mb-2">24+</span>
<span className="text-base text-zinc-400">
              Specialized
              <br/>
              Contractors
            </span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-100 border-t border-zinc-200">
<div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4 flex flex-col gap-4">
<span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            You Might Ask Us
          </span>
<h2 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900">
            FAQ:
          </h2>
</div>
<div className="md:col-span-8 flex flex-col divide-y divide-zinc-300 border-t border-zinc-300">
<details className="group py-6 cursor-pointer" open="">
<summary className="flex justify-between items-center font-medium text-xl list-none focus:outline-none">
              What remodeling services do you provide?
              <span className="transition-transform duration-300 group-open:rotate-45">
<i className="w-6 h-6 text-zinc-400" data-lucide="plus"></i>
</span>
</summary>
<p className="text-lg text-zinc-600 mt-4 pr-12 leading-relaxed">
              We handle full-scale home renovations, including kitchen and
              bathroom remodeling, structural additions, basement finishing, and
              complete interior overhauls. We manage the entire process from
              permits to final paint.
            </p>
</details>
<details className="group py-6 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-xl list-none focus:outline-none text-zinc-700 hover:text-zinc-900 transition-colors">
              How long does a typical renovation project take?
              <span className="transition-transform duration-300 group-open:rotate-45">
<i className="w-6 h-6 text-zinc-400" data-lucide="plus"></i>
</span>
</summary>
<p className="text-lg text-zinc-600 mt-4 pr-12 leading-relaxed">
              Timelines vary greatly based on scope. A bathroom might take 3-5
              weeks, a full kitchen 6-10 weeks, and a whole-house remodel
              several months. We provide a detailed schedule during the
              estimation phase.
            </p>
</details>
<details className="group py-6 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-xl list-none focus:outline-none text-zinc-700 hover:text-zinc-900 transition-colors">
              Do you handle building permits and regulations?
              <span className="transition-transform duration-300 group-open:rotate-45">
<i className="w-6 h-6 text-zinc-400" data-lucide="plus"></i>
</span>
</summary>
<p className="text-lg text-zinc-600 mt-4 pr-12 leading-relaxed">
              Yes, our team handles all necessary architectural drawings,
              structural engineering approvals, and municipal permitting
              required for your specific project location.
            </p>
</details>
<details className="group py-6 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-xl list-none focus:outline-none text-zinc-700 hover:text-zinc-900 transition-colors">
              How is the project budget determined and managed?
              <span className="transition-transform duration-300 group-open:rotate-45">
<i className="w-6 h-6 text-zinc-400" data-lucide="plus"></i>
</span>
</summary>
<p className="text-lg text-zinc-600 mt-4 pr-12 leading-relaxed">
              We provide a transparent, line-item estimate before any work
              begins. Any changes to scope during construction are handled via
              formal change orders so you always know exactly where your budget
              stands.
            </p>
</details>
<div className="pt-8 flex justify-between items-center text-zinc-500 text-sm">
<span>If you want to know anything else:</span>
<a className="font-medium text-zinc-900 flex items-center gap-2 hover:underline" href="#">
              Ask your Question
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 pt-12 overflow-hidden flex flex-col">

<div className="flex whitespace-nowrap text-zinc-400 text-2xl font-medium tracking-tight py-6 border-y border-zinc-800">
<div className="animate-marquee inline-block">
          Complimentary Initial Consultation ++ Structural Guarantee on All
          Builds ++ Concept to Reality ++ Premium Material Selection ++
          Complimentary Initial Consultation ++
        </div>

<div aria-hidden="true" className="animate-marquee inline-block ml-4">
          Complimentary Initial Consultation ++ Structural Guarantee on All
          Builds ++ Concept to Reality ++ Premium Material Selection ++
          Complimentary Initial Consultation ++
        </div>
</div>

<div className="relative h-[60vh] md:h-[80vh] w-full mt-12">
<img alt="Remodeled Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-zinc-950/30"></div>
<div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white max-w-5xl mx-auto">
<span className="text-sm font-medium uppercase tracking-widest text-zinc-300 mb-6">
            Crafting Environments That Inspire
          </span>
<h2 className="text-5xl md:text-8xl lg:text-[7rem] font-medium tracking-tight leading-[0.9]">
            It's time to Build
            <br/>
            your
            <span className="italic text-zinc-300">Dream Space</span>
</h2>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 md:px-12 bg-white">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-3 flex flex-col justify-between">
<div>
<span className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4 block">
              Client Perspectives
            </span>
<p className="text-base text-zinc-600">
              The words of our clients let us know we are building the right
              things.
            </p>
</div>
<div className="flex items-center gap-4 mt-12">
<img alt="Morgan Dufresne" className="w-14 h-14 rounded-full object-cover border border-zinc-200" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div className="flex flex-col">
<span className="font-medium text-zinc-900">Morgan Dufresne</span>
<span className="text-sm text-zinc-500">Homeowner, Brooklyn</span>
</div>
</div>
</div>
<div className="lg:col-span-9 flex flex-col gap-8 border-l border-zinc-200 pl-8 lg:pl-16">
<i className="w-12 h-12 text-zinc-300 fill-zinc-300" data-lucide="quote"></i>
<blockquote className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 leading-tight">
            From the structural changes to the final finishes, the team turned
            our outdated house into a stunning, highly functional modern home.
            We couldn't be happier with the execution!
          </blockquote>
<p className="text-xl text-zinc-500 max-w-3xl">
            We wanted an open-concept layout that still felt cozy. BuildorasHome
            delivered a bright, structurally sound space with smart design
            solutions, perfectly tailored to our family's needs.
          </p>
<div className="flex gap-3 mt-8">
<button className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-zinc-50 transition-colors">
<i className="w-4 h-4 text-zinc-600" data-lucide="arrow-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-zinc-50 transition-colors">
<i className="w-4 h-4 text-zinc-600" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-100">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-zinc-900 mb-12 text-center md:text-left">
          Advantages:
        </h2>
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 md:h-[800px]">

<div className="md:col-span-2 md:row-span-1 bg-white rounded-2xl p-8 flex items-center justify-center relative overflow-hidden group border border-zinc-200">
<div className="flex items-center justify-between w-full text-zinc-400 text-sm uppercase tracking-widest absolute px-8 top-1/2 -translate-y-1/2">
<span>Expertise</span>
<span>Quality</span>
</div>
<span className="text-3xl md:text-4xl font-medium tracking-tight z-10 bg-white px-4 uppercase">
              BuildorasHome
            </span>
</div>

<div className="md:col-span-2 md:row-span-2 bg-zinc-200 rounded-2xl relative overflow-hidden group">
<img alt="Design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-2xl font-medium tracking-tight">
                Structural Integrity
              </h3>
<p className="text-sm text-zinc-300 mt-1">
                Built to last generations.
              </p>
</div>
</div>

<div className="md:col-span-1 md:row-span-2 bg-zinc-900 rounded-2xl p-6 relative overflow-hidden text-white flex flex-col justify-between group">
<div className="flex justify-between items-start text-zinc-400">
<i className="w-6 h-6" data-lucide="hard-hat"></i>
</div>
<div>
<span className="text-6xl font-medium tracking-tight block mb-2">
                450
                <span className="text-3xl text-zinc-500">+</span>
</span>
<span className="text-lg text-zinc-300 leading-tight block">
                Projects
                <br/>
                Successfully Built
              </span>
</div>

<div className="absolute -bottom-10 -right-10 flex gap-2 opacity-40 group-hover:opacity-60 transition-opacity">
<img className="w-24 h-32 object-cover rounded shadow-lg transform -rotate-6" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<img className="w-24 h-32 object-cover rounded shadow-lg transform rotate-3 mt-4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col justify-center">
<i className="w-6 h-6 text-zinc-400 mb-4" data-lucide="sparkles"></i>
<h3 className="text-xl font-medium tracking-tight text-zinc-900">
              Serious Attention
              <br/>
              to Detail
            </h3>
</div>

<div className="md:col-span-2 md:row-span-1 bg-zinc-200 rounded-2xl relative overflow-hidden group">
<img alt="Materials" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-xl font-medium tracking-tight">
                Premium Materials
              </h3>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 bg-zinc-200 rounded-2xl relative overflow-hidden group">
<img alt="Process" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-zinc-950/40 mix-blend-multiply"></div>
<div className="absolute inset-0 flex items-center justify-center text-white p-4 text-center">
<h3 className="text-xl font-medium tracking-tight">
                Client-Oriented
                <br/>
                Approach
              </h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col gap-2 mb-16">
<span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            How We Create
          </span>
<h2 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900">
            We are:
          </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
<div className="md:col-span-5 flex flex-col gap-8">
<img alt="Planning" className="rounded-lg w-full aspect-[4/3] object-cover" src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="pl-8 md:pl-16 border-l border-zinc-200">
<p className="text-lg text-zinc-600 leading-relaxed">
                Our process is alive — adapting to the unique structural needs
                of your home, refining the layout, and growing with your vision.
                Always focused on the foundation.
              </p>
</div>
</div>
<div className="md:col-span-3 flex flex-col gap-12 mt-12 md:mt-0">
<div className="px-6">
<p className="text-base text-zinc-600">
                The team works like master craftsmen, turning outdated spaces
                into functional narratives you'll love living in.
              </p>
</div>
<img alt="Blueprint" className="rounded-lg w-full aspect-square object-cover ml-auto md:-mr-12 relative z-10 shadow-xl" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="md:col-span-4 flex flex-col gap-8">
<img alt="Working" className="rounded-lg w-full aspect-[3/4] object-cover mt-12 md:mt-24" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="pr-8">
<p className="text-base text-zinc-600">
                Like architects with a blank canvas, we transform raw structures
                into living works of art and utility.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-t border-zinc-200">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between md:items-end mb-16 border-b border-zinc-200 pb-8 gap-6">
<h2 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900">
            Journal
          </h2>
<a className="hidden md:flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-zinc-900 hover:text-zinc-500 transition-colors" href="#">
            Read All Articles
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
<article className="flex flex-col gap-6 group cursor-pointer">
<div className="overflow-hidden aspect-[4/3] rounded-sm bg-zinc-100">
<img alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex flex-col gap-3">
<div className="flex gap-4 text-xs font-medium uppercase tracking-widest text-zinc-500">
<span>Design</span>
<span>•</span>
<span>Oct 12, 2024</span>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors">
                The Resurgence of Natural Stone in Modern Kitchens
              </h3>
</div>
</article>
<article className="flex flex-col gap-6 group cursor-pointer">
<div className="overflow-hidden aspect-[4/3] rounded-sm bg-zinc-100">
<img alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex flex-col gap-3">
<div className="flex gap-4 text-xs font-medium uppercase tracking-widest text-zinc-500">
<span>Architecture</span>
<span>•</span>
<span>Sep 28, 2024</span>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors">
                Maximizing Natural Light Through Structural Changes
              </h3>
</div>
</article>
<article className="flex flex-col gap-6 group cursor-pointer">
<div className="overflow-hidden aspect-[4/3] rounded-sm bg-zinc-100">
<img alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex flex-col gap-3">
<div className="flex gap-4 text-xs font-medium uppercase tracking-widest text-zinc-500">
<span>Guides</span>
<span>•</span>
<span>Aug 15, 2024</span>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors">
                A Comprehensive Guide to Historic Home Renovation
              </h3>
</div>
</article>
</div>
<a className="mt-12 flex md:hidden items-center justify-center gap-2 text-sm font-medium uppercase tracking-widest text-zinc-900 border border-zinc-900 py-4 rounded-full" href="#">
          Read All Articles
        </a>
</div>
</section>


    </>
  );
}
