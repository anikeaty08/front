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
      

<nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference">
<a className="text-xl font-medium tracking-tighter uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400" href="#">
            B&amp;M
        </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-light text-neutral-300 hover:text-indigo-400 transition-colors duration-300" href="#work">Work</a>
<a className="text-sm font-light text-neutral-300 hover:text-indigo-400 transition-colors duration-300" href="#agency">Agency</a>
<a className="text-sm font-light text-neutral-300 hover:text-indigo-400 transition-colors duration-300" href="#expertise">Expertise</a>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-pink-400 transition-colors duration-300" href="#contact">
                Let's Talk
                <iconify-icon height="16" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<button className="md:hidden text-white hover:text-indigo-400 transition-colors flex items-center justify-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="flex-grow pt-32 md:pt-48 pb-24 px-6 md:px-12 flex flex-col justify-end min-h-screen border-b border-neutral-800/50 relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-indigo-900/20 to-transparent blur-3xl rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

<div className="absolute top-1/4 right-0 md:right-1/4 w-[500px] h-[500px] opacity-10 pointer-events-none text-indigo-200 animate-[spin_60s_linear_infinite] mix-blend-screen hidden md:block">
<svg fill="none" stroke="currentColor" strokeWidth="0.3" viewbox="0 0 200 200">
<circle cx="100" cy="100" r="90"></circle>
<circle cx="100" cy="100" r="70"></circle>
<circle cx="100" cy="100" r="50" stroke-dasharray="2 4"></circle>
<polygon points="100 10 178 55 178 145 100 190 22 145 22 55"></polygon>
<polygon points="100 30 161 65 161 135 100 170 39 135 39 65"></polygon>
<line x1="10" x2="190" y1="100" y2="100"></line>
<line x1="100" x2="100" y1="10" y2="190"></line>
<line x1="36.36" x2="163.64" y1="36.36" y2="163.64"></line>
<line x1="36.36" x2="163.64" y1="163.64" y2="36.36"></line>
</svg>
</div>
<div className="max-w-7xl mx-auto w-full relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
<div className="lg:col-span-9">
<h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tighter leading-[0.9] uppercase">
                        Crafting<br/>
                        Digital<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Excellence</span>
</h1>
</div>
<div className="lg:col-span-3 flex flex-col gap-6 pb-2 lg:pb-4">
<p className="text-base md:text-lg font-light text-neutral-400 leading-relaxed">
                        We are a strategic design and technology agency building brand experiences that define tomorrow.
                    </p>
<a className="inline-flex items-center gap-3 text-sm font-medium hover:text-indigo-400 transition-colors duration-300 group w-fit" href="#work">
                        Explore our work
                        <span className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center group-hover:bg-indigo-500 group-hover:border-indigo-500 group-hover:text-white transition-all duration-300">
<iconify-icon height="16" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</span>
</a>
</div>
</div>
</div>
</main>

<section className="py-24 px-6 md:px-12 border-b border-neutral-800/50" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight">Selected Work</h2>
<span className="text-sm font-light text-neutral-500 hidden md:block">(04 Projects)</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

<a className="group block" href="#">
<div className="relative overflow-hidden aspect-[4/3] bg-neutral-900 mb-6 rounded-sm">
<div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
<img alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" style={{objectPosition: 'center'}}/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-2 group-hover:text-indigo-100 transition-colors">Aura Platform</h3>
<p className="text-sm font-light text-indigo-400">Fintech / Web Application</p>
</div>
<iconify-icon className="text-neutral-500 group-hover:text-indigo-400 transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" height="24" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
</a>

<a className="group block md:mt-24" href="#">
<div className="relative overflow-hidden aspect-[4/3] bg-neutral-900 mb-6 rounded-sm">
<div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
<img alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" style={{objectPosition: 'center'}}/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-2 group-hover:text-pink-100 transition-colors">Lumina Health</h3>
<p className="text-sm font-light text-pink-400">Brand Identity / Digital Experience</p>
</div>
<iconify-icon className="text-neutral-500 group-hover:text-pink-400 transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" height="24" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
</a>

<a className="group block" href="#">
<div className="relative overflow-hidden aspect-[4/3] bg-neutral-900 mb-6 rounded-sm">
<div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
<img alt="Project 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" style={{objectPosition: 'center'}}/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-2 group-hover:text-emerald-100 transition-colors">Kroma Studio</h3>
<p className="text-sm font-light text-emerald-400">E-Commerce / Creative Direction</p>
</div>
<iconify-icon className="text-neutral-500 group-hover:text-emerald-400 transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" height="24" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
</a>

<a className="group block md:mt-24" href="#">
<div className="relative overflow-hidden aspect-[4/3] bg-neutral-900 mb-6 rounded-sm">
<div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
<img alt="Project 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" style={{objectPosition: 'center'}}/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-2 group-hover:text-blue-100 transition-colors">Vanguard Logistics</h3>
<p className="text-sm font-light text-blue-400">Corporate Website / UI System</p>
</div>
<iconify-icon className="text-neutral-500 group-hover:text-blue-400 transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" height="24" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
</a>
</div>
<div className="mt-24 flex justify-center">
<a className="px-8 py-4 border border-neutral-800 rounded-full text-sm font-medium hover:border-indigo-500 hover:bg-indigo-500 hover:text-white transition-all duration-300" href="#">
                    View All Projects
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-b border-neutral-800/50 bg-[#07090f]" id="agency">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">The Collective</h2>
<p className="text-base md:text-lg font-light text-neutral-400 leading-relaxed mb-10 max-w-md">
                        We are a diverse team of thinkers and makers. Blending strategic vision with meticulous execution to deliver products that resonate on a human level.
                    </p>
<div className="flex gap-12">
<div>
<span className="block text-4xl md:text-5xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-1">40+</span>
<span className="text-xs font-light text-neutral-500 uppercase tracking-widest">Specialists</span>
</div>
<div>
<span className="block text-4xl md:text-5xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-1">12</span>
<span className="text-xs font-light text-neutral-500 uppercase tracking-widest">Nationalities</span>
</div>
</div>
</div>
<div className="relative group">
<div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-sm opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-700"></div>
<img alt="Our Team" className="relative w-full aspect-[4/3] object-cover rounded-sm grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-b border-neutral-800/50 bg-[#0a0a0a]" id="expertise">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight sticky top-32">Expertise</h2>
</div>
<div className="lg:col-span-8 flex flex-col w-full">

<div className="group border-t border-neutral-800 py-8 md:py-12 cursor-pointer">
<div className="flex items-center justify-between">
<div className="flex items-center gap-6 md:gap-8">

<div className="hidden sm:flex w-14 h-14 rounded-full border border-neutral-800 items-center justify-center text-neutral-600 group-hover:text-indigo-400 group-hover:border-indigo-400/30 group-hover:scale-110 transition-all duration-500">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="0.75" viewbox="0 0 24 24" width="24">
<rect height="12" transform="rotate(45 9 9)" width="12" x="3" y="3"></rect>
<rect height="12" transform="rotate(45 15 15)" width="12" x="9" y="9"></rect>
<circle cx="12" cy="12" r="2"></circle>
</svg>
</div>
<h3 className="text-2xl md:text-4xl font-medium tracking-tight text-neutral-400 group-hover:text-indigo-100 transition-colors duration-300">Strategy &amp; Branding</h3>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-indigo-400 transition-transform duration-300 group-hover:rotate-45" height="32" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<div className="pl-0 sm:pl-[6.5rem]">
<p className="text-base text-neutral-400 font-light mt-6 max-w-xl hidden group-hover:block animate-[fadeIn_0.3s_ease-in-out]">
                                Positioning, brand architecture, visual identity systems, and brand guidelines that set you apart in a crowded market.
                            </p>
</div>
</div>

<div className="group border-t border-neutral-800 py-8 md:py-12 cursor-pointer">
<div className="flex items-center justify-between">
<div className="flex items-center gap-6 md:gap-8">

<div className="hidden sm:flex w-14 h-14 rounded-full border border-neutral-800 items-center justify-center text-neutral-600 group-hover:text-pink-400 group-hover:border-pink-400/30 group-hover:scale-110 transition-all duration-500">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="0.75" viewbox="0 0 24 24" width="24">
<circle cx="12" cy="12" r="10"></circle>
<ellipse cx="12" cy="12" rx="10" ry="3"></ellipse>
<ellipse cx="12" cy="12" rx="3" ry="10"></ellipse>
<line x1="2" x2="22" y1="12" y2="12"></line>
</svg>
</div>
<h3 className="text-2xl md:text-4xl font-medium tracking-tight text-neutral-400 group-hover:text-indigo-100 transition-colors duration-300">UX/UI Design</h3>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-pink-400 transition-transform duration-300 group-hover:rotate-45" height="32" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<div className="pl-0 sm:pl-[6.5rem]">
<p className="text-base text-neutral-400 font-light mt-6 max-w-xl hidden group-hover:block animate-[fadeIn_0.3s_ease-in-out]">
                                User research, wireframing, prototyping, and high-fidelity interface design focused on conversion and usability.
                            </p>
</div>
</div>

<div className="group border-t border-neutral-800 py-8 md:py-12 cursor-pointer">
<div className="flex items-center justify-between">
<div className="flex items-center gap-6 md:gap-8">

<div className="hidden sm:flex w-14 h-14 rounded-full border border-neutral-800 items-center justify-center text-neutral-600 group-hover:text-emerald-400 group-hover:border-emerald-400/30 group-hover:scale-110 transition-all duration-500">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="0.75" viewbox="0 0 24 24" width="24">
<polygon points="12 2 21 7 21 17 12 22 3 17 3 7"></polygon>
<polygon points="12 6 17 9 17 15 12 18 7 15 7 9"></polygon>
<line x1="12" x2="12" y1="2" y2="6"></line>
<line x1="3" x2="7" y1="7" y2="9"></line>
<line x1="21" x2="17" y1="7" y2="9"></line>
<line x1="3" x2="7" y1="17" y2="15"></line>
<line x1="21" x2="17" y1="17" y2="15"></line>
<line x1="12" x2="12" y1="22" y2="18"></line>
</svg>
</div>
<h3 className="text-2xl md:text-4xl font-medium tracking-tight text-neutral-400 group-hover:text-indigo-100 transition-colors duration-300">Development</h3>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-emerald-400 transition-transform duration-300 group-hover:rotate-45" height="32" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<div className="pl-0 sm:pl-[6.5rem]">
<p className="text-base text-neutral-400 font-light mt-6 max-w-xl hidden group-hover:block animate-[fadeIn_0.3s_ease-in-out]">
                                Front-end and back-end engineering, CMS integration, e-commerce solutions, and custom web applications.
                            </p>
</div>
</div>

<div className="group border-t border-neutral-800 py-8 md:py-12 cursor-pointer border-b">
<div className="flex items-center justify-between">
<div className="flex items-center gap-6 md:gap-8">

<div className="hidden sm:flex w-14 h-14 rounded-full border border-neutral-800 items-center justify-center text-neutral-600 group-hover:text-blue-400 group-hover:border-blue-400/30 group-hover:scale-110 transition-all duration-500">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="0.75" viewbox="0 0 24 24" width="24">
<path d="M2 12C2 12 7 4 12 4C17 4 22 12 22 12C22 12 17 20 12 20C7 20 2 12 2 12Z"></path>
<circle cx="12" cy="12" r="5"></circle>
<circle cx="12" cy="12" r="2"></circle>
<line x1="12" x2="12" y1="4" y2="7"></line>
<line x1="12" x2="12" y1="17" y2="20"></line>
</svg>
</div>
<h3 className="text-2xl md:text-4xl font-medium tracking-tight text-neutral-400 group-hover:text-indigo-100 transition-colors duration-300">Content Creation</h3>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-blue-400 transition-transform duration-300 group-hover:rotate-45" height="32" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<div className="pl-0 sm:pl-[6.5rem]">
<p className="text-base text-neutral-400 font-light mt-6 max-w-xl hidden group-hover:block animate-[fadeIn_0.3s_ease-in-out]">
                                Copywriting, photography, 3D motion graphics, and video production to tell your brand story effectively.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="py-12 border-b border-neutral-800/50 overflow-hidden relative flex items-center bg-[#0a0a0a]">
<div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] opacity-50">
<span className="text-5xl md:text-7xl font-medium tracking-tighter mx-8 uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400" style={{WebkitTextStroke: '1px transparent'}}>Creative Partners</span>
<span className="text-5xl md:text-7xl font-medium tracking-tighter mx-8 uppercase">EST. 2012</span>
<span className="text-5xl md:text-7xl font-medium tracking-tighter mx-8 uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400" style={{WebkitTextStroke: '1px transparent'}}>Award Winning</span>
<span className="text-5xl md:text-7xl font-medium tracking-tighter mx-8 uppercase">Global Reach</span>
<span className="text-5xl md:text-7xl font-medium tracking-tighter mx-8 uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400" style={{WebkitTextStroke: '1px transparent'}}>Creative Partners</span>
<span className="text-5xl md:text-7xl font-medium tracking-tighter mx-8 uppercase">EST. 2012</span>
</div>
<style>
            @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }
        </style>
</div>

<section className="pt-32 pb-12 px-6 md:px-12 flex flex-col justify-between flex-grow relative overflow-hidden" id="contact">

<div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-pink-900/10 to-transparent blur-3xl rounded-full pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>
<div className="max-w-7xl mx-auto w-full mb-24 text-center md:text-left relative z-10">
<h2 className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tighter mb-8 leading-tight">
                Have an idea?<br/>
<a className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 hover:opacity-80 transition-opacity duration-300 underline decoration-pink-500/50 underline-offset-8" href="mailto:hello@agency.com">Let's build it.</a>
</h2>
<div className="mt-16 max-w-md mx-auto md:mx-0">
<p className="text-sm font-light text-neutral-400 mb-4">Subscribe to our newsletter</p>
<div className="relative flex items-center border-b border-neutral-700 pb-2 focus-within:border-indigo-400 transition-colors duration-300">
<input className="w-full bg-transparent outline-none text-sm font-light placeholder:text-neutral-600 text-white" placeholder="Email address" type="email"/>
<button className="absolute right-0 text-neutral-400 hover:text-indigo-400 transition-colors">
<iconify-icon height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</div>
</div>
<footer className="max-w-7xl mx-auto w-full pt-12 border-t border-neutral-800/50 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
<div className="col-span-1 md:col-span-2">
<a className="text-xl font-medium tracking-tighter uppercase inline-block mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400" href="#">B&amp;M</a>
<p className="text-xs font-light text-neutral-500 max-w-xs">
                    Independent digital agency creating cohesive brands and digital platforms.
                </p>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-medium text-neutral-400 tracking-wider uppercase mb-2">Socials</span>
<a className="text-sm font-light text-neutral-300 hover:text-indigo-400 transition-colors w-fit" href="#">Instagram</a>
<a className="text-sm font-light text-neutral-300 hover:text-pink-400 transition-colors w-fit" href="#">Twitter / X</a>
<a className="text-sm font-light text-neutral-300 hover:text-blue-400 transition-colors w-fit" href="#">LinkedIn</a>
<a className="text-sm font-light text-neutral-300 hover:text-emerald-400 transition-colors w-fit" href="#">Behance</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-medium text-neutral-400 tracking-wider uppercase mb-2">Offices</span>
<p className="text-sm font-light text-neutral-300">
                    Wenceslas Square 1<br/>
                    110 00 Prague 1<br/>
                    Czech Republic
                </p>
</div>
<div className="col-span-1 md:col-span-4 mt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-xs font-light text-neutral-600 gap-4">
<p>© 2024 Agency. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>
</section>

    </>
  );
}
