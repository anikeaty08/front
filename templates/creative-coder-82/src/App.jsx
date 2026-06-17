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



        // Simple Custom Cursor Logic
        const cursorDot = document.getElementById('cursor-dot');
        const cursorCircle = document.getElementById('cursor-circle');
        
        // Only activate custom cursor on non-touch devices
        if (window.matchMedia("(pointer: fine)").matches) {
            document.addEventListener('mousemove', (e) => {
                const posX = e.clientX;
                const posY = e.clientY;

                // Update dot position instantly
                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;

                // Update circle position with slight delay (handled by CSS transition usually, but can be forced here)
                cursorCircle.style.left = `${posX}px`;
                cursorCircle.style.top = `${posY}px`;
            });
        }
    
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
      

<div className="cursor-dot hidden md:block" id="cursor-dot"></div>
<div className="cursor-circle hidden md:block" id="cursor-circle"></div>

<nav className="fixed top-0 w-full z-50 px-4 py-6 mix-blend-difference text-white">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<a className="text-2xl font-semibold tracking-tighter uppercase z-50" href="#">J/D.</a>
<div className="hidden md:flex gap-8 text-sm font-medium tracking-tight">
<a className="hover:underline decoration-2 underline-offset-4" href="#work">Work</a>
<a className="hover:underline decoration-2 underline-offset-4" href="#about">About</a>
<a className="hover:underline decoration-2 underline-offset-4" href="#contact">Contact</a>
</div>
<button className="bg-white text-black px-5 py-2 rounded-full font-medium text-sm hover:scale-105 transition-transform duration-300">
                Let's Talk
            </button>
</div>
</nav>

<header className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
<div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#FDE047] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#F9A8D4] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/2 w-80 h-80 bg-[#2563EB] rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob animation-delay-4000"></div>
</div>
<div className="max-w-7xl w-full px-4 md:px-8 relative z-10 flex flex-col justify-center">
<div className="space-y-[-1rem] md:space-y-[-3rem] w-full">

<div className="flex items-center gap-4">
<h1 className="text-[12vw] leading-none font-bold tracking-tighter text-slate-900 transform hover:skew-x-3 transition-transform duration-500 cursor-default">
                        CREATIVE
                    </h1>
<div className="hidden md:flex h-16 w-32 bg-[#2563EB] rounded-full items-center justify-center rotate-6 neo-shadow-sm">
<iconify-icon className="text-white text-4xl" icon="solar:code-circle-linear"></iconify-icon>
</div>
</div>

<div className="flex items-center justify-end gap-4 w-full">
<div className="hidden md:flex h-20 w-20 bg-[#F9A8D4] rounded-full items-center justify-center -rotate-12 neo-shadow-sm">
<iconify-icon className="text-black text-4xl" icon="solar:figma-file-linear"></iconify-icon>
</div>
<h1 className="text-[12vw] leading-none font-bold tracking-tighter text-slate-900 text-right transform hover:-skew-x-3 transition-transform duration-500 cursor-default">
                        CODER
                    </h1>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6">
<span className="text-xl md:text-3xl font-medium font-[Space_Grotesk] bg-black text-white px-4 py-1 rounded-full -rotate-2">
                        &amp;
                    </span>
<h1 className="text-[10vw] md:text-[8vw] leading-none font-semibold tracking-tighter text-slate-900 text-outline hover:text-[#2563EB] transition-colors duration-300">
                        PROBLEM SOLVER
                    </h1>
</div>
</div>
<p className="mt-12 text-lg md:text-xl max-w-lg font-medium leading-relaxed tracking-tight text-slate-700">
                Front-end developer crafting digital experiences with a blend of pixel-perfect design and clean code. Based in the digital cloud.
            </p>
<div className="mt-10 flex gap-4">
<a className="px-8 py-4 bg-[#FDE047] border-2 border-black text-black font-bold text-lg rounded-xl neo-shadow hover:translate-y-1 hover:shadow-none transition-all duration-200" href="#work">
                    View Projects
                </a>
<a className="px-8 py-4 bg-white border-2 border-black text-black font-bold text-lg rounded-xl neo-shadow hover:translate-y-1 hover:shadow-none transition-all duration-200 flex items-center gap-2" href="#">
<iconify-icon icon="solar:download-linear" width="24"></iconify-icon>
                    CV
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
<iconify-icon className="text-4xl text-slate-400" icon="solar:mouse-circle-linear"></iconify-icon>
</div>
</header>

<div className="w-full bg-black py-4 overflow-hidden border-y-4 border-black rotate-1 scale-105 z-20 relative my-12">
<div className="whitespace-nowrap flex animate-marquee">
<span className="text-3xl md:text-5xl font-bold text-[#FDE047] mx-8 tracking-tighter font-[Syne]">JAVASCRIPT</span>
<span className="text-3xl md:text-5xl font-bold text-white mx-8 tracking-tighter font-[Syne]">•</span>
<span className="text-3xl md:text-5xl font-bold text-[#F9A8D4] mx-8 tracking-tighter font-[Syne]">REACT</span>
<span className="text-3xl md:text-5xl font-bold text-white mx-8 tracking-tighter font-[Syne]">•</span>
<span className="text-3xl md:text-5xl font-bold text-[#2563EB] mx-8 tracking-tighter font-[Syne]">TAILWIND</span>
<span className="text-3xl md:text-5xl font-bold text-white mx-8 tracking-tighter font-[Syne]">•</span>
<span className="text-3xl md:text-5xl font-bold text-[#FDE047] mx-8 tracking-tighter font-[Syne]">INTERACTION</span>
<span className="text-3xl md:text-5xl font-bold text-white mx-8 tracking-tighter font-[Syne]">•</span>
<span className="text-3xl md:text-5xl font-bold text-[#F9A8D4] mx-8 tracking-tighter font-[Syne]">UI/UX</span>
<span className="text-3xl md:text-5xl font-bold text-white mx-8 tracking-tighter font-[Syne]">•</span>
<span className="text-3xl md:text-5xl font-bold text-[#FDE047] mx-8 tracking-tighter font-[Syne]">JAVASCRIPT</span>
<span className="text-3xl md:text-5xl font-bold text-white mx-8 tracking-tighter font-[Syne]">•</span>
<span className="text-3xl md:text-5xl font-bold text-[#F9A8D4] mx-8 tracking-tighter font-[Syne]">REACT</span>
<span className="text-3xl md:text-5xl font-bold text-white mx-8 tracking-tighter font-[Syne]">•</span>
</div>
</div>

<section className="py-24 px-4 bg-white relative" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row items-end justify-between mb-20">
<h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900">
                    SELECTED <br/> <span className="text-[#2563EB]">WORKS</span>
</h2>
<p className="text-lg font-medium text-slate-500 max-w-sm mt-6 md:mt-0 text-right">
                    A collection of digital products, prototypes, and experiments.
                </p>
</div>

<div className="flex flex-col gap-32">

<div className="project-card group relative w-full md:w-10/12 mx-auto">

<div className="absolute inset-0 bg-[#FDE047] rounded-3xl border-2 border-black transform rotate-2 group-hover:rotate-6 transition-transform duration-500 z-0"></div>

<div className="relative bg-white rounded-3xl border-2 border-black p-4 md:p-8 z-10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div className="aspect-video bg-stone-100 rounded-xl overflow-hidden border border-stone-200 relative group-hover:scale-[1.02] transition-transform duration-500">

<div className="w-full h-full bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center">
<div className="w-3/4 h-3/4 bg-white shadow-lg rounded-lg border border-stone-100 p-4 space-y-3">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="h-8 w-1/3 bg-stone-100 rounded"></div>
<div className="grid grid-cols-3 gap-2">
<div className="h-24 bg-blue-100 rounded"></div>
<div className="h-24 bg-pink-100 rounded"></div>
<div className="h-24 bg-purple-100 rounded"></div>
</div>
</div>
</div>
</div>
<div className="space-y-6 px-2">
<div>
<div className="flex gap-2 mb-4">
<span className="px-3 py-1 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full">E-Commerce</span>
<span className="px-3 py-1 bg-transparent border border-black text-black text-xs font-semibold uppercase tracking-wider rounded-full">2023</span>
</div>
<h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">NEO SHOP</h3>
<p className="text-slate-600 text-lg leading-relaxed">
                                        A brutalist e-commerce template focused on high contrast and bold typography to drive conversions.
                                    </p>
</div>
<div className="flex flex-wrap gap-2 text-sm font-medium text-slate-500 font-mono">
<span>[Next.js]</span>
<span>[Stripe]</span>
<span>[Zustand]</span>
</div>
<button className="flex items-center gap-2 text-xl font-bold underline decoration-2 underline-offset-4 hover:text-[#2563EB] transition-colors">
                                    Visit Site <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="2"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="project-card group relative w-full md:w-10/12 mx-auto">
<div className="absolute inset-0 bg-[#F9A8D4] rounded-3xl border-2 border-black transform -rotate-1 group-hover:-rotate-3 transition-transform duration-500 z-0"></div>
<div className="relative bg-white rounded-3xl border-2 border-black p-4 md:p-8 z-10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div className="order-2 md:order-1 space-y-6 px-2">
<div>
<div className="flex gap-2 mb-4">
<span className="px-3 py-1 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full">SaaS</span>
<span className="px-3 py-1 bg-transparent border border-black text-black text-xs font-semibold uppercase tracking-wider rounded-full">2024</span>
</div>
<h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">TASK FLOW</h3>
<p className="text-slate-600 text-lg leading-relaxed">
                                        Productivity dashboard with drag-and-drop interactions and real-time collaboration features.
                                    </p>
</div>
<div className="flex flex-wrap gap-2 text-sm font-medium text-slate-500 font-mono">
<span>[React]</span>
<span>[Firebase]</span>
<span>[Tailwind]</span>
</div>
<button className="flex items-center gap-2 text-xl font-bold underline decoration-2 underline-offset-4 hover:text-[#F9A8D4] transition-colors">
                                    Case Study <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="2"></iconify-icon>
</button>
</div>
<div className="order-1 md:order-2 aspect-video bg-stone-100 rounded-xl overflow-hidden border border-stone-200 relative group-hover:scale-[1.02] transition-transform duration-500">

<div className="w-full h-full bg-gradient-to-bl from-pink-100 to-blue-50 flex items-center justify-center p-6">
<div className="w-full h-full bg-white border-2 border-black rounded-lg p-3 flex gap-4">
<div className="w-16 h-full bg-stone-100 rounded border border-stone-300"></div>
<div className="flex-1 space-y-2">
<div className="h-8 w-1/2 bg-stone-100 rounded mb-4"></div>
<div className="h-16 w-full bg-[#F9A8D4] rounded border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
<div className="h-16 w-full bg-[#FDE047] rounded border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="project-card group relative w-full md:w-10/12 mx-auto">
<div className="absolute inset-0 bg-[#2563EB] rounded-3xl border-2 border-black transform rotate-1 group-hover:rotate-3 transition-transform duration-500 z-0"></div>
<div className="relative bg-white rounded-3xl border-2 border-black p-4 md:p-8 z-10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div className="aspect-video bg-stone-100 rounded-xl overflow-hidden border border-stone-200 relative group-hover:scale-[1.02] transition-transform duration-500">
<div className="w-full h-full bg-[#2563EB] flex items-center justify-center relative overflow-hidden">
<div className="absolute w-40 h-40 bg-white rounded-full blur-2xl top-0 left-0 opacity-20"></div>
<div className="text-white text-6xl font-bold font-[Syne]">API</div>
</div>
</div>
<div className="space-y-6 px-2">
<div>
<div className="flex gap-2 mb-4">
<span className="px-3 py-1 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full">Dev Tools</span>
<span className="px-3 py-1 bg-transparent border border-black text-black text-xs font-semibold uppercase tracking-wider rounded-full">2023</span>
</div>
<h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">DOCS GEN</h3>
<p className="text-slate-600 text-lg leading-relaxed">
                                        Automated documentation generator for REST APIs with a beautiful, dark-mode default UI.
                                    </p>
</div>
<div className="flex flex-wrap gap-2 text-sm font-medium text-slate-500 font-mono">
<span>[Node.js]</span>
<span>[Vue]</span>
<span>[GraphQL]</span>
</div>
<button className="flex items-center gap-2 text-xl font-bold underline decoration-2 underline-offset-4 hover:text-[#2563EB] transition-colors">
                                    View on Github <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="2"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FFFDF5] relative overflow-hidden">

<div className="absolute right-0 top-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute left-0 bottom-1/4 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="max-w-7xl mx-auto px-4 relative z-10">
<h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-center mb-16">
                MY <span className="relative inline-block px-4">
<span className="absolute inset-0 bg-[#FDE047] -skew-y-2 transform -z-10 border-2 border-black neo-shadow-sm"></span>
                    PLAYGROUND
                </span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 bg-white border-2 border-black rounded-2xl hover:bg-[#F9A8D4] transition-colors duration-300 group neo-shadow-sm hover:neo-shadow cursor-default">
<iconify-icon className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300" icon="solar:pallete-2-linear"></iconify-icon>
<h3 className="text-2xl font-bold font-[Syne] mb-2">Creative UI</h3>
<p className="text-sm font-medium opacity-80">Designing interfaces that are not just functional but memorable. Playing with typography, layout, and motion.</p>
</div>
<div className="p-8 bg-white border-2 border-black rounded-2xl hover:bg-[#FDE047] transition-colors duration-300 group neo-shadow-sm hover:neo-shadow cursor-default">
<iconify-icon className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300" icon="solar:code-square-linear"></iconify-icon>
<h3 className="text-2xl font-bold font-[Syne] mb-2">Frontend Dev</h3>
<p className="text-sm font-medium opacity-80">Writing clean, semantic, and accessible code. Expert in React, Vue, and modern CSS architectures.</p>
</div>
<div className="p-8 bg-white border-2 border-black rounded-2xl hover:bg-[#2563EB] hover:text-white transition-colors duration-300 group neo-shadow-sm hover:neo-shadow cursor-default">
<iconify-icon className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300" icon="solar:rocket-2-linear"></iconify-icon>
<h3 className="text-2xl font-bold font-[Syne] mb-2">Performance</h3>
<p className="text-sm font-medium opacity-80">Optimizing core web vitals and ensuring buttery smooth 60fps animations across devices.</p>
</div>
</div>
</div>
</section>

<footer className="bg-black text-[#FFFDF5] pt-20 pb-10 px-4 rounded-t-[3rem] relative overflow-hidden mt-12" id="contact">
<div className="max-w-7xl mx-auto flex flex-col items-center text-center">
<div className="mb-4">
<span className="px-4 py-2 border border-[#FFFDF5] rounded-full text-xs font-mono uppercase tracking-widest">Available for hire</span>
</div>
<h2 className="text-[12vw] leading-[0.9] font-bold tracking-tighter font-[Syne] mb-8 hover:text-[#FDE047] transition-colors duration-300 cursor-pointer">
                LET'S TALK
            </h2>
<p className="max-w-md text-lg text-gray-400 mb-12">
                Have an idea? Let's build something squishy and awesome together.
            </p>
<a className="inline-flex items-center gap-3 px-8 py-4 bg-[#2563EB] text-white font-bold text-xl rounded-full hover:scale-110 hover:bg-[#F9A8D4] hover:text-black transition-all duration-300" href="mailto:hello@creative.dev">
                hello@creative.dev
                <iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon>
</a>
<div className="w-full h-px bg-gray-800 my-16"></div>
<div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-gray-500">
<p>© 2024 Creative Coder. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Github</a>
<a className="hover:text-white transition-colors" href="#">Dribbble</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
