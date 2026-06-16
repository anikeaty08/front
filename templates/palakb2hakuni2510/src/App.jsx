import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/70 border-b border-zinc-100">
<div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-zinc-900 font-geist" href="#">
          JD
        </a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-indigo-600 transition-colors font-geist" href="#work">
            Work
          </a>
<a className="text-sm font-medium text-zinc-500 hover:text-indigo-600 transition-colors font-geist" href="#experience">
            Experience
          </a>
<a className="text-sm font-medium text-zinc-500 hover:text-indigo-600 transition-colors font-geist" href="#about">
            About
          </a>
</nav>
<a className="inline-flex items-center justify-center h-8 px-4 rounded-md bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 font-geist" href="mailto:hello@example.com">
          Get in touch
        </a>
</div>
</header>

<main className="flex-grow w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-12">

<section className="md:py-32 flex flex-col gap-6 pt-24 pb-24 gap-x-6 gap-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 w-fit">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-zinc-600 font-geist">
            Available for new opportunities
          </span>
</div>
<h1 className="md:text-6xl leading-[1.1] text-4xl text-zinc-900 tracking-tight font-space-grotesk">
          Crafting interfaces that are
          <br className="hidden md:block text-zinc-400"/>
<span className="bg-clip-text text-transparent font-space-grotesk bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500">clear, focused, and intuitive.</span>
</h1>
<p className="md:text-lg leading-relaxed text-base text-zinc-500 font-geist max-w-2xl mt-2">I'm a Product Designer specializing in building scalable design systems, streamlining complex workflows, and elevating the end-to-end user experience for early-stage startups and enterprise teams.</p>
<div className="flex items-center gap-4 mt-4">
<a className="inline-flex items-center gap-2 h-10 px-5 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors font-geist" href="#work">
            View work
            <iconify-icon icon="solar:arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</a>
<div className="flex items-center gap-3 ml-2 text-zinc-400">
<a aria-label="Twitter" className="hover:text-indigo-600 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:link-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a aria-label="Dribbble" className="hover:text-indigo-600 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-zinc-100 scroll-mt-16" id="work">
<div className="flex items-center justify-between mb-10">
<h2 className="text-2xl tracking-tight text-zinc-900 font-space-grotesk">
            Selected Work
          </h2>
<a className="text-sm font-medium text-zinc-500 hover:text-indigo-600 transition-colors inline-flex items-center gap-1 font-geist" href="#">
            View all
            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">

<a className="group block" href="#">
<div className="aspect-[4/3] rounded-xl bg-zinc-50 border border-zinc-200 overflow-hidden relative mb-5 p-6 flex flex-col gap-4 transition-transform duration-500 group-hover:-translate-y-1">

<div className="flex items-center justify-between border-b border-zinc-200 pb-3">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-zinc-200 rounded-sm"></div>
<div className="w-20 h-2 bg-zinc-200 rounded-full"></div>
</div>
<div className="w-6 h-6 bg-zinc-200 rounded-full"></div>
</div>
<div className="flex gap-4 h-full">
<div className="w-1/4 h-full bg-white border border-zinc-200 rounded-lg hidden sm:flex flex-col gap-2 p-3 shadow-sm">
<div className="w-full h-2 bg-zinc-100 rounded-full mb-2"></div>
<div className="w-3/4 h-2 bg-zinc-100 rounded-full"></div>
<div className="w-5/6 h-2 bg-zinc-100 rounded-full"></div>
<div className="w-full h-2 bg-zinc-100 rounded-full"></div>
</div>
<div className="flex-1 flex flex-col gap-4">
<div className="h-24 bg-white border border-zinc-200 rounded-lg shadow-sm p-4 flex flex-col justify-end">
<div className="w-full flex items-end gap-1 h-12">
<div className="flex-1 bg-zinc-100 rounded-t-sm h-[30%]"></div>
<div className="flex-1 bg-zinc-100 rounded-t-sm h-[60%]"></div>
<div className="flex-1 bg-zinc-200 rounded-t-sm h-[45%]"></div>
<div className="flex-1 bg-indigo-500 rounded-t-sm h-[90%]"></div>
<div className="flex-1 bg-indigo-300 rounded-t-sm h-[70%]"></div>
<div className="flex-1 bg-zinc-100 rounded-t-sm h-[50%]"></div>
</div>
</div>
<div className="flex-1 bg-white border border-zinc-200 rounded-lg shadow-sm p-4">
<div className="w-1/3 h-2 bg-zinc-200 rounded-full mb-4"></div>
<div className="space-y-2">
<div className="w-full h-8 bg-zinc-50 rounded-md border border-zinc-100"></div>
<div className="w-full h-8 bg-zinc-50 rounded-md border border-zinc-100"></div>
</div>
</div>
</div>
</div>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2 font-geist">
                Fintech Analytics Platform
                <iconify-icon className="text-zinc-400 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" icon="solar:arrow-up-right-linear" strokeWidth="1.5"></iconify-icon>
</h3>
<p className="text-sm text-zinc-500 mt-1 font-geist">
                Web Application • Product Design
              </p>
</div>
</a>

<a className="group block" href="#">
<div className="aspect-[4/3] rounded-xl bg-zinc-50 border border-zinc-200 overflow-hidden relative mb-5 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-1">

<div className="w-48 h-96 bg-white border-4 border-zinc-200 rounded-[2rem] shadow-sm relative overflow-hidden flex flex-col">
<div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-zinc-200 rounded-full z-10"></div>
<div className="h-48 bg-zinc-100 w-full p-4 pt-12 flex flex-col gap-3">
<div className="w-24 h-4 bg-zinc-200 rounded-full"></div>
<div className="w-full h-24 bg-white rounded-xl shadow-sm border border-zinc-100 mt-auto p-3 flex flex-col justify-between">
<div className="w-8 h-8 bg-purple-200 rounded-full"></div>
<div className="w-1/2 h-2 bg-purple-400 rounded-full"></div>
</div>
</div>
<div className="flex-1 p-4 flex flex-col gap-3">
<div className="w-1/3 h-3 bg-zinc-200 rounded-full mb-1"></div>
<div className="w-full h-12 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center px-3 gap-3">
<div className="w-6 h-6 bg-zinc-200 rounded-full"></div>
<div className="w-1/2 h-2 bg-zinc-200 rounded-full"></div>
</div>
<div className="w-full h-12 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center px-3 gap-3">
<div className="w-6 h-6 bg-zinc-200 rounded-full"></div>
<div className="w-1/3 h-2 bg-zinc-200 rounded-full"></div>
</div>
</div>
</div>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2 font-geist">
                Health &amp; Wellness Tracker
                <iconify-icon className="text-zinc-400 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" icon="solar:arrow-up-right-linear" strokeWidth="1.5"></iconify-icon>
</h3>
<p className="text-sm text-zinc-500 mt-1 font-geist">iOS App • UX/UI Design</p>
</div>
</a>

<a className="group block" href="#">
<div className="aspect-[4/3] rounded-xl bg-zinc-50 border border-zinc-200 overflow-hidden relative mb-5 p-8 flex flex-col justify-center gap-6 transition-transform duration-500 group-hover:-translate-y-1">

<div className="grid grid-cols-4 gap-3">
<div className="aspect-square bg-rose-500 rounded-md"></div>
<div className="aspect-square bg-rose-400 rounded-md"></div>
<div className="aspect-square bg-rose-300 rounded-md"></div>
<div className="aspect-square bg-rose-200 rounded-md"></div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-24 h-8 bg-rose-500 rounded-md"></div>
<div className="w-24 h-8 border border-zinc-300 rounded-md"></div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-6 bg-zinc-200 rounded-full relative">
<div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
</div>
<div className="w-10 h-6 bg-rose-500 rounded-full relative">
<div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
</div>
<div className="w-4 h-4 border border-zinc-300 rounded-sm"></div>
<div className="w-4 h-4 bg-rose-500 rounded-sm flex items-center justify-center">
<iconify-icon className="text-white text-[10px]" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
</div>
<div className="w-full bg-white border border-zinc-200 rounded-md p-4 shadow-sm space-y-2">
<div className="w-1/2 h-3 bg-zinc-200 rounded-full"></div>
<div className="w-full h-2 bg-zinc-100 rounded-full"></div>
<div className="w-3/4 h-2 bg-zinc-100 rounded-full"></div>
</div>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2 font-geist">
                Global Design System
                <iconify-icon className="text-zinc-400 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" icon="solar:arrow-up-right-linear" strokeWidth="1.5"></iconify-icon>
</h3>
<p className="text-sm text-zinc-500 mt-1 font-geist">
                Design Ops • Component Library
              </p>
</div>
</a>

<a className="group block" href="#">
<div className="aspect-[4/3] rounded-xl bg-zinc-50 border border-zinc-200 overflow-hidden relative mb-5 p-6 flex flex-col items-center justify-center transition-transform duration-500 group-hover:-translate-y-1">

<div className="w-full max-w-sm h-full bg-white border border-zinc-200 rounded-lg shadow-sm flex flex-col overflow-hidden">
<div className="h-8 border-b border-zinc-100 flex items-center justify-between px-3">
<div className="w-12 h-2 bg-zinc-200 rounded-full"></div>
<div className="flex gap-2">
<div className="w-6 h-1.5 bg-zinc-100 rounded-full"></div>
<div className="w-6 h-1.5 bg-zinc-100 rounded-full"></div>
</div>
</div>
<div className="flex-1 p-6 flex flex-col items-center text-center gap-4 mt-4">
<div className="w-12 h-12 bg-blue-100 rounded-xl mb-2"></div>
<div className="w-3/4 h-4 bg-blue-500 rounded-full"></div>
<div className="w-full h-2 bg-zinc-200 rounded-full"></div>
<div className="w-5/6 h-2 bg-zinc-200 rounded-full"></div>
<div className="w-24 h-6 bg-blue-600 rounded-full mt-2"></div>
</div>
</div>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2 font-geist">
                SaaS Marketing Site
                <iconify-icon className="text-zinc-400 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" icon="solar:arrow-up-right-linear" strokeWidth="1.5"></iconify-icon>
</h3>
<p className="text-sm text-zinc-500 mt-1 font-geist">Web Design • Prototyping</p>
</div>
</a>
</div>
</section>

<section className="py-16 md:py-24 border-t border-zinc-100 scroll-mt-16" id="experience">
<div className="flex flex-col md:flex-row gap-12 md:gap-24">
<div className="md:w-1/3">
<h2 className="text-2xl tracking-tight text-zinc-900 sticky top-24 font-space-grotesk">
              Experience
            </h2>
</div>
<div className="md:w-2/3 flex flex-col gap-10">

<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 group">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-zinc-300 transition-colors">
<iconify-icon className="text-blue-500 text-lg" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 font-geist">
                    Staff Product Designer
                  </h3>
<p className="text-sm text-zinc-500 mt-1 font-geist">Acme Corp</p>
<p className="text-sm text-zinc-500 mt-3 leading-relaxed max-w-lg font-geist">
                    Leading design for the core billing platform. Established a
                    new design system used by 40+ engineers. Improved conversion
                    rate by 15% through streamlined checkout flows.
                  </p>
</div>
</div>
<span className="text-xs font-medium text-zinc-400 sm:mt-1 ml-14 sm:ml-0 font-geist">
                2021 — Present
              </span>
</div>

<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 group">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-zinc-300 transition-colors">
<iconify-icon className="text-purple-500 text-lg" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 font-geist">
                    Senior UI/UX Designer
                  </h3>
<p className="text-sm text-zinc-500 mt-1 font-geist">Startup Inc.</p>
<p className="text-sm text-zinc-500 mt-3 leading-relaxed max-w-lg font-geist">
                    First designer hire. Owned end-to-end product design from
                    initial wireframes to high-fidelity prototypes. Conducted
                    weekly user testing sessions.
                  </p>
</div>
</div>
<span className="text-xs font-medium text-zinc-400 sm:mt-1 ml-14 sm:ml-0 font-geist">
                2018 — 2021
              </span>
</div>

<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 group">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-zinc-300 transition-colors">
<iconify-icon className="text-orange-500 text-lg" icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 font-geist">
                    Digital Designer
                  </h3>
<p className="text-sm text-zinc-500 mt-1 font-geist">Creative Agency</p>
</div>
</div>
<span className="text-xs font-medium text-zinc-400 sm:mt-1 ml-14 sm:ml-0 font-geist">
                2015 — 2018
              </span>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-zinc-100 scroll-mt-16" id="about">
<div className="flex flex-col md:flex-row gap-12 md:gap-24">
<div className="md:w-1/3">
<h2 className="text-2xl tracking-tight text-zinc-900 sticky top-24 font-space-grotesk">
              About
            </h2>
</div>
<div className="md:w-2/3 flex flex-col gap-6">
<h3 className="text-xl tracking-tight text-zinc-900 font-space-grotesk">
              Beyond the screen
            </h3>
<p className="text-base text-zinc-500 leading-relaxed max-w-2xl font-geist">
              When I'm not pushing pixels or debating the merits of a 4px vs 8px
              grid, you can usually find me brewing an overly complicated
              pour-over coffee, trying to keep my excessive collection of
              houseplants alive, or exploring the city with a vintage camera.
            </p>
<p className="text-base text-zinc-500 leading-relaxed max-w-2xl font-geist">
              I believe that the best design comes from a place of curiosity and
              empathy. I love diving deep into complex problems and emerging
              with solutions that feel almost invisible because they just work.
            </p>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
<div className="flex flex-col gap-3 p-5 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-colors group">
<iconify-icon className="text-2xl text-rose-500 group-hover:text-rose-600 transition-colors" icon="lucide:camera"></iconify-icon>
<div>
<span className="block text-sm font-medium text-zinc-900 font-geist">
                    Photography
                  </span>
<span className="block text-xs text-zinc-500 mt-0.5 font-geist">
                    Shooting 35mm film
                  </span>
</div>
</div>
<div className="flex flex-col gap-3 p-5 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-colors group">
<iconify-icon className="text-2xl text-amber-500 group-hover:text-amber-600 transition-colors" icon="lucide:coffee"></iconify-icon>
<div>
<span className="block text-sm font-medium text-zinc-900 font-geist">
                    Coffee Snob
                  </span>
<span className="block text-xs text-zinc-500 mt-0.5 font-geist">
                    V60 is the way
                  </span>
</div>
</div>
<div className="flex flex-col gap-3 p-5 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-colors group">
<iconify-icon className="text-2xl text-emerald-500 group-hover:text-emerald-600 transition-colors" icon="lucide:leaf"></iconify-icon>
<div>
<span className="block text-sm font-medium text-zinc-900 font-geist">
                    Plant Parent
                  </span>
<span className="block text-xs text-zinc-500 mt-0.5 font-geist">
                    42 and counting
                  </span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full border-t border-zinc-100 mt-auto bg-zinc-50/50">
<div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="text-lg font-medium tracking-tighter text-zinc-900 font-geist">
            JD
          </span>
<span className="text-xs text-zinc-400 ml-2 font-geist">
            © 2024. All rights reserved.
          </span>
</div>
<div className="flex items-center gap-6">
<a className="text-xs font-medium text-zinc-500 hover:text-indigo-600 transition-colors font-geist" href="#">
            Twitter
          </a>
<a className="text-xs font-medium text-zinc-500 hover:text-indigo-600 transition-colors font-geist" href="#">
            LinkedIn
          </a>
<a className="text-xs font-medium text-zinc-500 hover:text-indigo-600 transition-colors font-geist" href="#">
            Dribbble
          </a>
<a className="text-xs font-medium text-zinc-500 hover:text-indigo-600 transition-colors font-geist" href="#">
            Read CV
          </a>
</div>
</div>
</footer>

    </>
  );
}
