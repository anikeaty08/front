import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');


document.write(new Date().getFullYear())


        document.addEventListener("DOMContentLoaded", () => {
            const loadingState = document.getElementById('loading-state');
            const profileContent = document.getElementById('profile-content');
            const fadeElements = document.querySelectorAll('.fade-in-element');

            // Simulate fetching and parsing data
            setTimeout(() => {
                loadingState.style.display = 'none';
                profileContent.classList.remove('hidden');
                
                // Trigger initial container visibility
                setTimeout(() => {
                    profileContent.classList.remove('opacity-0');
                    profileContent.classList.add('opacity-100');
                    
                    // Staggered micro-animation fade ins
                    fadeElements.forEach(el => {
                        el.classList.remove('translate-y-4', 'opacity-0');
                    });
                }, 50);

            }, 1200);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none" style={{background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(10,10,10,0) 70%)'}}></div>

<div className="max-w-4xl mx-auto w-full px-6 py-12 md:py-24 flex-grow flex flex-col gap-16 relative z-10">

<header className="flex justify-between items-center">
<a className="text-base font-medium tracking-tighter text-neutral-200 hover:text-white transition-colors duration-300" href="#">MH</a>
<nav className="flex items-center gap-6 text-sm font-medium">
<a className="group flex items-center gap-2 hover:text-neutral-100 transition-all duration-300" href="https://www.linkedin.com/in/mirzahussain14" rel="noopener noreferrer" target="_blank">
<span className="relative overflow-hidden">
<span className="block group-hover:-translate-y-full transition-transform duration-300 ease-in-out">LinkedIn</span>
<span className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out text-neutral-100">LinkedIn</span>
</span>
<iconify-icon className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</nav>
</header>

<div className="flex flex-col gap-12 animate-pulse" id="loading-state" style={{display: 'none'}}>
<div className="flex flex-col gap-4 pt-8 max-w-2xl">
<div className="h-6 w-32 bg-neutral-900 rounded-full"></div>
<div className="h-12 w-full bg-neutral-900 rounded-lg"></div>
<div className="h-12 w-3/4 bg-neutral-900 rounded-lg"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="col-span-1 md:col-span-2 h-48 bg-neutral-900 rounded-2xl"></div>
<div className="col-span-1 h-48 bg-neutral-900 rounded-2xl"></div>
</div>
</div>

<div className="opacity-0" id="profile-content">

<section className="flex flex-col gap-6 pt-4 max-w-2xl transform translate-y-4 transition-all duration-700 ease-out fade-in-element">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800/60 bg-neutral-900/20 text-xs font-medium text-neutral-300 w-fit backdrop-blur-sm shadow-sm">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span>Google UX Certified</span>
</div>
<div className="flex flex-col gap-3">
<h1 className="text-3xl md:text-5xl font-medium tracking-tight text-neutral-50 leading-[1.1]">
                        Conversion-Focused UI/UX Designer for SaaS &amp; eCommerce.
                    </h1>
</div>
<p className="text-sm md:text-base leading-relaxed text-neutral-400 max-w-xl">
                    I design clean, high-converting digital experiences that reduce drop-offs and turn visitors into users. No guesswork. Just user-focused, data-driven design.
                </p>
<div className="flex items-center gap-4 mt-4">
<a className="group relative overflow-hidden flex items-center gap-2 bg-neutral-100 text-neutral-950 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" href="https://www.linkedin.com/in/mirzahussain14" rel="noopener noreferrer" target="_blank">
<span className="group-hover:opacity-100 transition-opacity duration-300 bg-white opacity-0 absolute top-0 right-0 bottom-0 left-0"></span>
<iconify-icon className="relative z-10" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="relative z-10">Hire Me</span>
</a>
<a className="group flex items-center gap-2 bg-transparent border border-neutral-800 text-neutral-300 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-900/50 hover:border-neutral-700 hover:text-neutral-100 transition-all duration-300 active:scale-[0.98]" href="#services">
<span className="">View Expertise</span>
<iconify-icon className="group-hover:translate-y-0.5 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
</div>
</section>

<section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-min" id="services">

<div className="col-span-1 md:col-span-2 p-6 md:p-8 rounded-2xl border border-neutral-800/40 bg-[#0c0c0c] hover:bg-neutral-900/40 hover:border-neutral-700/50 transition-all duration-500 group fade-in-element delay-100 translate-y-4 opacity-0">
<h3 className="text-lg font-medium tracking-tight text-neutral-100 flex items-center gap-2 mb-6">
<iconify-icon className="text-neutral-500" icon="solar:layers-minimalistic-linear"></iconify-icon>
                        What I can help you with
                    </h3>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<li className="flex items-start gap-3 text-sm text-neutral-400 group/item cursor-default p-2 -ml-2 rounded-lg hover:bg-neutral-800/30 transition-colors">
<iconify-icon className="text-neutral-600 group-hover/item:text-neutral-200 transition-colors mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="group-hover/item:text-neutral-200 group-hover/item:translate-x-1 transition-all duration-300">SaaS &amp; Dashboard UI/UX</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400 group/item cursor-default p-2 -ml-2 rounded-lg hover:bg-neutral-800/30 transition-colors">
<iconify-icon className="text-neutral-600 group-hover/item:text-neutral-200 transition-colors mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="group-hover/item:text-neutral-200 group-hover/item:translate-x-1 transition-all duration-300">Landing Pages that convert</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400 group/item cursor-default p-2 -ml-2 rounded-lg hover:bg-neutral-800/30 transition-colors">
<iconify-icon className="text-neutral-600 group-hover/item:text-neutral-200 transition-colors mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="group-hover/item:text-neutral-200 group-hover/item:translate-x-1 transition-all duration-300">Website &amp; Mobile App Design</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400 group/item cursor-default p-2 -ml-2 rounded-lg hover:bg-neutral-800/30 transition-colors">
<iconify-icon className="text-neutral-600 group-hover/item:text-neutral-200 transition-colors mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="group-hover/item:text-neutral-200 group-hover/item:translate-x-1 transition-all duration-300">UX Audits &amp; Redesigns</span>
</li>
</ul>
</div>

<div className="col-span-1 p-6 md:p-8 rounded-2xl border border-neutral-800/40 bg-[#0c0c0c] hover:bg-neutral-900/40 hover:border-neutral-700/50 transition-all duration-500 flex flex-col justify-between group fade-in-element delay-200 translate-y-4 opacity-0 relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-neutral-800/20 rounded-full blur-2xl group-hover:bg-neutral-700/30 transition-colors duration-500"></div>
<div className="relative z-10">
<iconify-icon className="text-2xl text-neutral-500 mb-4 group-hover:text-neutral-300 transition-colors duration-300" icon="solar:chart-square-linear"></iconify-icon>
<h3 className="text-4xl font-medium tracking-tight text-neutral-50 mb-1 group-hover:scale-105 origin-left transition-transform duration-500">4+</h3>
<p className="text-sm text-neutral-400">Years of Experience</p>
</div>
<p className="text-xs text-neutral-500 mt-6 leading-relaxed relative z-10">Helping startups and businesses improve usability and simplify complex flows.</p>
</div>

<div className="col-span-1 md:col-span-3 p-6 md:p-8 rounded-2xl border border-neutral-800/40 bg-[#0c0c0c] hover:border-neutral-700/50 transition-all duration-500 group fade-in-element delay-300 translate-y-4 opacity-0">
<h3 className="text-lg font-medium tracking-tight text-neutral-100 flex items-center gap-2 mb-6">
<iconify-icon className="text-neutral-500" icon="solar:refresh-circle-linear"></iconify-icon>
                        My Approach
                    </h3>
<div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full relative">

<div className="hidden md:block absolute top-1/2 left-4 right-4 h-px bg-neutral-800 -translate-y-1/2 z-0"></div>

<div className="relative z-10 w-full md:w-auto bg-[#0c0c0c] px-4 py-3 rounded-xl border border-neutral-800/60 hover:border-neutral-500 hover:bg-neutral-900/50 transition-all duration-300 group/step cursor-default">
<div className="flex flex-col items-center gap-1 text-center">
<span className="text-xs font-medium text-neutral-600 group-hover/step:text-neutral-400 transition-colors">01</span>
<span className="text-sm font-medium text-neutral-300 group-hover/step:text-neutral-50 transition-colors">Research</span>
</div>
</div>
<iconify-icon className="md:hidden text-neutral-700" icon="solar:alt-arrow-right-linear"></iconify-icon>

<div className="relative z-10 w-full md:w-auto bg-[#0c0c0c] px-4 py-3 rounded-xl border border-neutral-800/60 hover:border-neutral-500 hover:bg-neutral-900/50 transition-all duration-300 group/step cursor-default">
<div className="flex flex-col items-center gap-1 text-center">
<span className="text-xs font-medium text-neutral-600 group-hover/step:text-neutral-400 transition-colors">02</span>
<span className="text-sm font-medium text-neutral-300 group-hover/step:text-neutral-50 transition-colors">Structure</span>
</div>
</div>
<iconify-icon className="md:hidden text-neutral-700" icon="solar:alt-arrow-right-linear"></iconify-icon>

<div className="relative z-10 w-full md:w-auto bg-[#0c0c0c] px-4 py-3 rounded-xl border border-neutral-800/60 hover:border-neutral-500 hover:bg-neutral-900/50 transition-all duration-300 group/step cursor-default">
<div className="flex flex-col items-center gap-1 text-center">
<span className="text-xs font-medium text-neutral-600 group-hover/step:text-neutral-400 transition-colors">03</span>
<span className="text-sm font-medium text-neutral-300 group-hover/step:text-neutral-50 transition-colors">Design</span>
</div>
</div>
<iconify-icon className="md:hidden text-neutral-700" icon="solar:alt-arrow-right-linear"></iconify-icon>

<div className="relative z-10 w-full md:w-auto bg-[#0c0c0c] px-4 py-3 rounded-xl border border-neutral-800/60 hover:border-neutral-500 hover:bg-neutral-900/50 transition-all duration-300 group/step cursor-default">
<div className="flex flex-col items-center gap-1 text-center">
<span className="text-xs font-medium text-neutral-600 group-hover/step:text-neutral-400 transition-colors">04</span>
<span className="text-sm font-medium text-neutral-300 group-hover/step:text-neutral-50 transition-colors">Test</span>
</div>
</div>
<iconify-icon className="md:hidden text-neutral-700" icon="solar:alt-arrow-right-linear"></iconify-icon>

<div className="relative z-10 w-full md:w-auto bg-[#0c0c0c] px-4 py-3 rounded-xl border border-neutral-800/60 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300 group/step cursor-default">
<div className="flex flex-col items-center gap-1 text-center">
<span className="text-xs font-medium text-emerald-600/50 group-hover/step:text-emerald-500 transition-colors">05</span>
<span className="text-sm font-medium text-neutral-300 group-hover/step:text-emerald-50 transition-colors">Refine</span>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 p-6 rounded-2xl border border-neutral-800/40 bg-[#0c0c0c] hover:bg-neutral-900/40 hover:border-neutral-700/50 transition-all duration-500 fade-in-element delay-400 translate-y-4 opacity-0">
<h3 className="text-sm font-medium text-neutral-400 mb-4 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:buildings-linear"></iconify-icon>
                        Industry Background
                    </h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-md bg-neutral-900/50 border border-neutral-800/50 text-xs font-medium text-neutral-300 hover:bg-neutral-800 hover:text-neutral-100 transition-all cursor-default">SaaS</span>
<span className="px-3 py-1.5 rounded-md bg-neutral-900/50 border border-neutral-800/50 text-xs font-medium text-neutral-300 hover:bg-neutral-800 hover:text-neutral-100 transition-all cursor-default">FinTech</span>
<span className="px-3 py-1.5 rounded-md bg-neutral-900/50 border border-neutral-800/50 text-xs font-medium text-neutral-300 hover:bg-neutral-800 hover:text-neutral-100 transition-all cursor-default">EdTech</span>
<span className="px-3 py-1.5 rounded-md bg-neutral-900/50 border border-neutral-800/50 text-xs font-medium text-neutral-300 hover:bg-neutral-800 hover:text-neutral-100 transition-all cursor-default">eCommerce</span>
</div>
</div>

<div className="col-span-1 p-6 rounded-2xl border border-neutral-800/40 bg-[#0c0c0c] hover:bg-neutral-900/40 hover:border-neutral-700/50 transition-all duration-500 fade-in-element delay-400 translate-y-4 opacity-0 flex flex-col justify-center items-center text-center group">
<h3 className="text-sm font-medium text-neutral-400 mb-4">Core Tools</h3>
<div className="flex items-center gap-4">
<div className="flex flex-col items-center gap-2 group/tool">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover/tool:scale-110 group-hover/tool:border-neutral-600 transition-all duration-300">
<iconify-icon className="text-neutral-400 group-hover/tool:text-neutral-100 transition-colors" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<span className="text-xs text-neutral-500">Figma</span>
</div>
<div className="flex flex-col items-center gap-2 group/tool">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover/tool:scale-110 group-hover/tool:border-neutral-600 transition-all duration-300">
<iconify-icon className="text-neutral-400 group-hover/tool:text-neutral-100 transition-colors" icon="solar:notes-minimalistic-linear"></iconify-icon>
</div>
<span className="text-xs text-neutral-500">Miro</span>
</div>
</div>
</div>
</section>
</div>

<footer className="mt-8 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-neutral-600">
<p>© 2026 Mirza Hussain. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-neutral-300 transition-colors flex items-center gap-1.5 group" href="https://www.linkedin.com/in/mirzahussain14" rel="noopener noreferrer" target="_blank">
<iconify-icon className="group-hover:-translate-y-0.5 transition-transform duration-300" icon="solar:linkedin-linear"></iconify-icon>
                    LinkedIn
                </a>
</div>
</footer>
</div>


    </>
  );
}
