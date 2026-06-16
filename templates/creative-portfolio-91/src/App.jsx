import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -100px 0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>
<div className="grid-background"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[800px] bg-[#C6A75E] rounded-full mix-blend-screen filter blur-[250px] opacity-[0.015] pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-40 bg-[#050505]/70 backdrop-blur-2xl border-b border-white/[0.02] reveal-load" style={{animationDelay: '0.8s'}}>
<div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
<a className="text-xs font-light tracking-[0.2em] hover:text-[#C6A75E] transition-colors duration-700 uppercase" href="#home">EK</a>
<div className="hidden md:flex gap-16 text-[0.65rem] font-light tracking-[0.15em] uppercase text-neutral-500">
<a className="hover:text-[#F5F5F5] transition-colors duration-700" href="#work">Work</a>
<a className="hover:text-[#F5F5F5] transition-colors duration-700" href="#about">About</a>
<a className="hover:text-[#C6A75E] transition-colors duration-700" href="#contact">Contact</a>
</div>
<button className="md:hidden text-neutral-500 hover:text-[#C6A75E] transition-colors duration-700">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="min-h-screen flex items-center pt-20 px-8 relative z-10" id="home">
<div className="max-w-7xl mx-auto w-full flex flex-col items-start justify-center">
<h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-extralight tracking-tighter text-[#F5F5F5] max-w-6xl leading-[1.1]">
<span className="block reveal-load" style={{animationDelay: '0.1s'}}>building digital</span>
<span className="block reveal-load" style={{animationDelay: '0.3s'}}>systems with <span className="glow-underline text-[#C6A75E] italic font-light pr-2">clarity</span></span>
</h1>
<div className="mt-20 flex items-center gap-8 reveal-load" style={{animationDelay: '0.6s'}}>
<a className="group flex items-center gap-4 text-xs font-light tracking-widest uppercase text-neutral-400 hover:text-[#C6A75E] transition-colors duration-700" href="#work">
                    explore work
                    <span className="w-12 h-px bg-neutral-700 group-hover:bg-[#C6A75E] group-hover:w-16 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"></span>
</a>
</div>
</div>
</section>

<section className="py-12 border-y border-white/[0.02] relative z-10 bg-[#050505]/50 backdrop-blur-md reveal">
<div className="max-w-7xl mx-auto px-8 text-center">
<p className="text-[0.65rem] md:text-xs tracking-[0.25em] uppercase text-neutral-500 font-extralight">websites, systems and brands designed to scale</p>
</div>
</section>

<section className="py-48 px-8 relative z-10">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-16">
<div className="group reveal cursor-default">
<div className="mb-10 w-10 h-10 rounded-full border border-white/[0.05] flex items-center justify-center group-hover:border-[#C6A75E]/30 group-hover:bg-[#C6A75E]/[0.02] transition-luxury">
<iconify-icon className="text-xl text-neutral-500 group-hover:text-[#C6A75E] transition-colors duration-700" icon="solar:laptop-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-lg font-light tracking-tight mb-4 text-[#F5F5F5]">websites</h3>
<p className="text-sm text-neutral-500 font-extralight leading-relaxed">high-performing, minimal, conversion-focused.</p>
</div>
<div className="group reveal cursor-default" style={{transitionDelay: '0.1s'}}>
<div className="mb-10 w-10 h-10 rounded-full border border-white/[0.05] flex items-center justify-center group-hover:border-[#C6A75E]/30 group-hover:bg-[#C6A75E]/[0.02] transition-luxury">
<iconify-icon className="text-xl text-neutral-500 group-hover:text-[#C6A75E] transition-colors duration-700" icon="solar:cpu-linear"></iconify-icon>
</div>
<h3 className="text-lg font-light tracking-tight mb-4 text-[#F5F5F5]">systems</h3>
<p className="text-sm text-neutral-500 font-extralight leading-relaxed">automation, workflows, digital infrastructure.</p>
</div>
<div className="group reveal cursor-default" style={{transitionDelay: '0.2s'}}>
<div className="mb-10 w-10 h-10 rounded-full border border-white/[0.05] flex items-center justify-center group-hover:border-[#C6A75E]/30 group-hover:bg-[#C6A75E]/[0.02] transition-luxury">
<iconify-icon className="text-xl text-neutral-500 group-hover:text-[#C6A75E] transition-colors duration-700" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-light tracking-tight mb-4 text-[#F5F5F5]">branding</h3>
<p className="text-sm text-neutral-500 font-extralight leading-relaxed">identity, direction, clarity.</p>
</div>
</div>
</section>

<section className="py-24 px-8 border-t border-white/[0.02] bg-[#0A0A0A]/30 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 reveal">
<div className="border-l border-white/[0.05] pl-6">
<span className="block text-[#C6A75E] text-sm mb-2 font-light">15+</span>
<span className="text-neutral-500 text-xs font-extralight tracking-wide">projects delivered</span>
</div>
<div className="border-l border-white/[0.05] pl-6">
<span className="block text-[#F5F5F5] text-sm mb-2 font-light">Focus</span>
<span className="text-neutral-500 text-xs font-extralight tracking-wide">web, systems, automation</span>
</div>
<div className="border-l border-white/[0.05] pl-6">
<span className="block text-[#F5F5F5] text-sm mb-2 font-light">Background</span>
<span className="text-neutral-500 text-xs font-extralight tracking-wide">hospitality &amp; operations</span>
</div>
<div className="border-l border-white/[0.05] pl-6">
<span className="block text-[#F5F5F5] text-sm mb-2 font-light">Current</span>
<span className="text-neutral-500 text-xs font-extralight tracking-wide">building Peak Clarity Point</span>
</div>
</div>
</div>
</section>

<section className="py-48 px-8 relative z-10" id="work">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">

<div className="group cursor-pointer reveal flex flex-col gap-8">
<div className="aspect-[4/3] bg-[#0A0A0A] rounded-sm overflow-hidden relative border border-white/[0.02] transition-luxury group-hover:border-[#C6A75E]/30 group-hover:shadow-[0_0_50px_rgba(198,167,94,0.08)] group-hover:-translate-y-3">
<div className="absolute inset-0 bg-gradient-to-br from-[#C6A75E]/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-luxury"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-30 transition-luxury group-hover:scale-105">
<iconify-icon className="text-6xl text-neutral-400 group-hover:text-[#C6A75E] transition-colors duration-1000" icon="solar:chart-linear"></iconify-icon>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl md:text-2xl font-light tracking-tight text-[#F5F5F5] group-hover:text-[#C6A75E] transition-colors duration-700">Peak Clarity Point</h3>
<span className="text-[0.6rem] uppercase tracking-widest text-[#C6A75E] border border-[#C6A75E]/20 px-4 py-1.5 rounded-full group-hover:bg-[#C6A75E]/5 transition-luxury">system</span>
</div>
<p className="text-sm text-neutral-500 font-extralight">revenue intelligence platform</p>
</div>
</div>

<div className="group cursor-pointer reveal flex flex-col gap-8 md:mt-32" style={{transitionDelay: '0.1s'}}>
<div className="aspect-[4/3] bg-[#0A0A0A] rounded-sm overflow-hidden relative border border-white/[0.02] transition-luxury group-hover:border-[#C6A75E]/30 group-hover:shadow-[0_0_50px_rgba(198,167,94,0.08)] group-hover:-translate-y-3">
<div className="absolute inset-0 bg-gradient-to-tr from-[#C6A75E]/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-luxury"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-30 transition-luxury group-hover:scale-105">
<iconify-icon className="text-6xl text-neutral-400 group-hover:text-[#C6A75E] transition-colors duration-1000" icon="solar:layers-linear"></iconify-icon>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl md:text-2xl font-light tracking-tight text-[#F5F5F5] group-hover:text-[#C6A75E] transition-colors duration-700">Studio Archetype</h3>
<span className="text-[0.6rem] uppercase tracking-widest text-[#C6A75E] border border-[#C6A75E]/20 px-4 py-1.5 rounded-full group-hover:bg-[#C6A75E]/5 transition-luxury">web</span>
</div>
<p className="text-sm text-neutral-500 font-extralight">high-conversion landing experience</p>
</div>
</div>

<div className="group cursor-pointer reveal flex flex-col gap-8">
<div className="aspect-[4/3] bg-[#0A0A0A] rounded-sm overflow-hidden relative border border-white/[0.02] transition-luxury group-hover:border-[#C6A75E]/30 group-hover:shadow-[0_0_50px_rgba(198,167,94,0.08)] group-hover:-translate-y-3">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,167,94,0.015)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-luxury"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-30 transition-luxury group-hover:scale-105">
<iconify-icon className="text-6xl text-neutral-400 group-hover:text-[#C6A75E] transition-colors duration-1000" icon="solar:link-circle-linear"></iconify-icon>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl md:text-2xl font-light tracking-tight text-[#F5F5F5] group-hover:text-[#C6A75E] transition-colors duration-700">Flow Operations</h3>
<span className="text-[0.6rem] uppercase tracking-widest text-[#C6A75E] border border-[#C6A75E]/20 px-4 py-1.5 rounded-full group-hover:bg-[#C6A75E]/5 transition-luxury">automation</span>
</div>
<p className="text-sm text-neutral-500 font-extralight">lead handling &amp; backend workflow</p>
</div>
</div>

<div className="group cursor-pointer reveal flex flex-col gap-8 md:mt-32" style={{transitionDelay: '0.1s'}}>
<div className="aspect-[4/3] bg-[#0A0A0A] rounded-sm overflow-hidden relative border border-white/[0.02] transition-luxury group-hover:border-[#C6A75E]/30 group-hover:shadow-[0_0_50px_rgba(198,167,94,0.08)] group-hover:-translate-y-3">
<div className="absolute right-0 bottom-0 w-64 h-64 bg-[#C6A75E]/[0.01] rounded-tl-full transition-luxury group-hover:scale-110 group-hover:bg-[#C6A75E]/[0.03] origin-bottom-right"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-30 transition-luxury group-hover:scale-105">
<iconify-icon className="text-6xl text-neutral-400 group-hover:text-[#C6A75E] transition-colors duration-1000" icon="solar:palette-linear"></iconify-icon>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl md:text-2xl font-light tracking-tight text-[#F5F5F5] group-hover:text-[#C6A75E] transition-colors duration-700">Maison Identity</h3>
<span className="text-[0.6rem] uppercase tracking-widest text-[#C6A75E] border border-[#C6A75E]/20 px-4 py-1.5 rounded-full group-hover:bg-[#C6A75E]/5 transition-luxury">brand</span>
</div>
<p className="text-sm text-neutral-500 font-extralight">full visual system and direction</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-48 px-8 border-t border-white/[0.02] bg-gradient-to-b from-[#080808] to-[#050505] relative z-10" id="about">
<div className="max-w-4xl mx-auto text-center reveal">
<h2 className="text-2xl md:text-4xl lg:text-5xl text-[#F5F5F5] font-extralight leading-[1.3] tracking-tight mb-16">
                I build digital systems, brands and websites with a focus on <span className="text-[#C6A75E] font-light italic">clarity, performance</span> and long-term value.
            </h2>
<div className="w-px h-24 bg-gradient-to-b from-[#C6A75E]/40 to-transparent mx-auto mb-16"></div>
<p className="text-sm md:text-base text-neutral-400 font-extralight leading-loose max-w-2xl mx-auto">
                My approach is defined by absolute discipline, simplicity, and an unwavering focus on execution. I believe that true luxury in the digital space lies in the complete absence of friction.
            </p>
</div>
</section>

<section className="py-56 px-8 relative z-10 overflow-hidden border-t border-white/[0.02]" id="contact">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C6A75E] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.03] pointer-events-none"></div>
<div className="max-w-3xl mx-auto flex flex-col items-center text-center relative z-10 reveal">
<h2 className="text-4xl md:text-6xl font-extralight tracking-tighter mb-16 text-[#F5F5F5]">building something serious?</h2>
<a className="relative inline-flex items-center justify-center px-12 py-5 overflow-hidden font-light tracking-[0.1em] text-xs uppercase group rounded-sm border border-[#C6A75E]/30 text-[#C6A75E] transition-luxury hover:shadow-[0_0_40px_rgba(198,167,94,0.15)] bg-[#050505]" href="mailto:hello@edoardokelada.com">
<span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#C6A75E]/0 via-[#C6A75E]/5 to-[#C6A75E]/10 opacity-0 group-hover:opacity-100 transition-luxury"></span>
<span className="relative flex items-center gap-4 text-[#F5F5F5] group-hover:text-[#C6A75E] transition-colors duration-700">
                    start a project 
                    <iconify-icon className="text-lg group-hover:translate-x-2 transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)]" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
</section>

<footer className="py-12 px-8 border-t border-white/[0.02] bg-[#050505] relative z-10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-[0.65rem] font-light text-neutral-600 uppercase tracking-[0.2em]">
                © 2024 Edoardo Kelada
            </div>
<div className="flex gap-12 text-[0.65rem] font-light uppercase tracking-[0.2em] text-neutral-500">
<a className="hover:text-[#C6A75E] transition-colors duration-700" href="#">Email</a>
<a className="hover:text-[#C6A75E] transition-colors duration-700" href="#">Instagram</a>
<a className="hover:text-[#C6A75E] transition-colors duration-700" href="#">LinkedIn</a>
</div>
</div>
</footer>



    </>
  );
}
