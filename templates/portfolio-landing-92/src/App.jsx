import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Parallax Effect for Background
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const blob1 = document.getElementById('blob1');
            const blob2 = document.getElementById('blob2');
            const blob3 = document.getElementById('blob3');

            if(blob1) blob1.style.transform = `translateY(${scrollY * 0.2}px)`;
            if(blob2) blob2.style.transform = `translateY(${scrollY * 0.15}px)`;
            if(blob3) blob3.style.transform = `translateY(${scrollY * -0.1}px)`;
        });

        // Intersection Observer for Reveal on Scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-element').forEach((el) => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" id="blob1"></div>
<div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" id="blob2"></div>
<div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" id="blob3"></div>
</div>

<main className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 md:py-24">

<header className="flex justify-between items-center mb-24 reveal-element">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-white font-serif italic">
                    E
                </div>
<span className="text-sm font-medium tracking-wide text-neutral-500 uppercase">Elias Vane</span>
</div>
<nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-600">
<a className="hover:text-black transition-colors" href="#">Work</a>
<a className="hover:text-black transition-colors" href="#">About</a>
<a className="hover:text-black transition-colors" href="#">Contact</a>
</nav>
<button className="md:hidden text-neutral-800">
<span className="iconify text-2xl" data-icon="solar:hamburger-menu-duotone-bold"></span>
</button>
</header>

<section className="mb-32 flex flex-col items-center text-center">
<div className="reveal-element">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-xs font-medium text-neutral-500 mb-6 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                    Available for projects
                </span>
</div>
<h1 className="font-serif font-extralight text-5xl md:text-7xl lg:text-8xl tracking-tighter text-neutral-900 mb-8 leading-[1.1] reveal-element delay-100">
                Crafting digital <br/> <i className="font-light italic text-neutral-500/80">experiences</i> with soul.
            </h1>
<p className="font-sans text-base md:text-lg text-neutral-500 max-w-xl mx-auto leading-relaxed reveal-element delay-200">
                Specialized in interface design and motion interactions. Creating intuitive software that feels natural, fluid, and human.
            </p>
<div className="mt-10 flex gap-4 reveal-element delay-300">
<button className="group relative px-6 py-3 rounded-full bg-neutral-900 text-white text-sm font-medium overflow-hidden transition-transform active:scale-95 shadow-lg shadow-neutral-900/20">
<span className="relative z-10 flex items-center gap-2">
                        View Selected Work
                        <span className="iconify text-lg group-hover:translate-y-0.5 transition-transform" data-icon="solar:arrow-down-linear"></span>
</span>
</button>
</div>

<div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 reveal-element delay-500">
<span className="iconify text-3xl md:text-4xl" data-icon="simple-icons:vercel"></span>
<span className="iconify text-3xl md:text-4xl" data-icon="simple-icons:linear"></span>
<span className="iconify text-3xl md:text-4xl" data-icon="simple-icons:stripe"></span>
<span className="iconify text-3xl md:text-4xl" data-icon="simple-icons:notion"></span>
<span className="iconify text-3xl md:text-4xl" data-icon="simple-icons:framer"></span>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 auto-rows-fr">

<article className="group relative aspect-square glass-card rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between overflow-hidden transition-transform duration-500 hover:scale-[1.02] cursor-pointer reveal-element">
<div className="relative z-10 flex justify-between items-start">
<div>
<h3 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-neutral-900 mb-2">Chronos</h3>
<p className="text-sm text-neutral-500 font-medium tracking-wide">PRODUCTIVITY SUITE</p>
</div>
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-neutral-900 group-hover:rotate-45 transition-transform duration-500">
<span className="iconify text-xl" data-icon="solar:arrow-right-up-outline"></span>
</div>
</div>
<div className="absolute inset-0 z-0 flex items-center justify-center translate-y-24 group-hover:translate-y-12 transition-transform duration-700 ease-out">

<div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-orange-100 to-rose-100 shadow-2xl rotate-[-6deg] group-hover:rotate-[-3deg] transition-transform duration-700 border border-white/40 flex flex-col p-4 gap-3">
<div className="h-4 w-1/3 bg-white/60 rounded-full"></div>
<div className="h-24 w-full bg-white/40 rounded-xl"></div>
<div className="h-8 w-2/3 bg-white/50 rounded-lg"></div>
<div className="mt-auto flex gap-2">
<div className="h-8 w-8 rounded-full bg-orange-300/50"></div>
<div className="h-8 w-8 rounded-full bg-rose-300/50"></div>
</div>
</div>
</div>
<div className="relative z-10 mt-auto">
<div className="flex gap-2">
<span className="px-3 py-1 rounded-full bg-white/40 text-xs font-medium text-neutral-600 backdrop-blur-sm">iOS</span>
<span className="px-3 py-1 rounded-full bg-white/40 text-xs font-medium text-neutral-600 backdrop-blur-sm">Strategy</span>
</div>
</div>
</article>

<article className="group relative aspect-square glass-card rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between overflow-hidden transition-transform duration-500 hover:scale-[1.02] cursor-pointer reveal-element delay-100">
<div className="relative z-10 flex justify-between items-start">
<div>
<h3 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-neutral-900 mb-2">Lumina</h3>
<p className="text-sm text-neutral-500 font-medium tracking-wide">HOME AUTOMATION</p>
</div>
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-neutral-900 group-hover:rotate-45 transition-transform duration-500">
<span className="iconify text-xl" data-icon="solar:arrow-right-up-outline"></span>
</div>
</div>
<div className="absolute inset-0 z-0 flex items-center justify-center translate-y-24 group-hover:translate-y-12 transition-transform duration-700 ease-out">
<div className="w-64 h-64 rounded-[2rem] bg-neutral-900 shadow-2xl rotate-[3deg] group-hover:rotate-[0deg] transition-transform duration-700 border border-white/10 flex items-center justify-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-neutral-800 to-neutral-900"></div>
<div className="w-32 h-32 rounded-full bg-blue-500/20 blur-xl absolute"></div>
<span className="iconify text-white/90 text-6xl relative z-10" data-icon="solar:smart-home-angle-bold-duotone"></span>
</div>
</div>
<div className="relative z-10 mt-auto">
<div className="flex gap-2">
<span className="px-3 py-1 rounded-full bg-white/40 text-xs font-medium text-neutral-600 backdrop-blur-sm">Design System</span>
<span className="px-3 py-1 rounded-full bg-white/40 text-xs font-medium text-neutral-600 backdrop-blur-sm">UX</span>
</div>
</div>
</article>

<article className="group relative aspect-square glass-card rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between overflow-hidden transition-transform duration-500 hover:scale-[1.02] cursor-pointer reveal-element">
<div className="relative z-10 flex justify-between items-start">
<div>
<h3 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-neutral-900 mb-2">Botanica</h3>
<p className="text-sm text-neutral-500 font-medium tracking-wide">ECOMMERCE</p>
</div>
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-neutral-900 group-hover:rotate-45 transition-transform duration-500">
<span className="iconify text-xl" data-icon="solar:arrow-right-up-outline"></span>
</div>
</div>
<div className="absolute inset-0 z-0 flex items-center justify-center translate-y-20 group-hover:translate-y-10 transition-transform duration-700 ease-out">
<div className="w-56 h-72 rounded-2xl bg-stone-100 shadow-2xl rotate-[-3deg] group-hover:rotate-[-6deg] transition-transform duration-700 border border-stone-200 overflow-hidden">
<div className="h-2/3 bg-stone-200 flex items-center justify-center">
<span className="iconify text-stone-400 text-6xl" data-icon="solar:leaf-bold-duotone"></span>
</div>
<div className="p-4 bg-white h-1/3">
<div className="h-2 w-16 bg-stone-200 rounded mb-2"></div>
<div className="h-2 w-24 bg-stone-100 rounded"></div>
</div>
</div>
</div>
<div className="relative z-10 mt-auto">
<div className="flex gap-2">
<span className="px-3 py-1 rounded-full bg-white/40 text-xs font-medium text-neutral-600 backdrop-blur-sm">Branding</span>
<span className="px-3 py-1 rounded-full bg-white/40 text-xs font-medium text-neutral-600 backdrop-blur-sm">Web</span>
</div>
</div>
</article>

<article className="group relative aspect-square glass-card rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between overflow-hidden transition-transform duration-500 hover:scale-[1.02] cursor-pointer reveal-element delay-100">
<div className="relative z-10 flex justify-between items-start">
<div>
<h3 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-neutral-900 mb-2">Apex</h3>
<p className="text-sm text-neutral-500 font-medium tracking-wide">FINTECH DASHBOARD</p>
</div>
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-neutral-900 group-hover:rotate-45 transition-transform duration-500">
<span className="iconify text-xl" data-icon="solar:arrow-right-up-outline"></span>
</div>
</div>
<div className="absolute inset-0 z-0 flex items-center justify-center translate-y-16 group-hover:translate-y-8 transition-transform duration-700 ease-out">
<div className="w-72 h-48 rounded-xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rotate-[2deg] group-hover:rotate-[5deg] transition-transform duration-700 border border-neutral-100 p-4 flex flex-col gap-3">
<div className="flex justify-between items-center">
<div className="h-8 w-8 rounded-full bg-indigo-50 flex items-center justify-center">
<span className="iconify text-indigo-500" data-icon="solar:chart-2-bold-duotone"></span>
</div>
<div className="h-2 w-8 bg-neutral-100 rounded"></div>
</div>
<div className="flex gap-2 mt-2 items-end h-full pb-2">
<div className="w-1/4 h-[40%] bg-indigo-50 rounded-t-sm"></div>
<div className="w-1/4 h-[70%] bg-indigo-100 rounded-t-sm"></div>
<div className="w-1/4 h-[50%] bg-indigo-50 rounded-t-sm"></div>
<div className="w-1/4 h-[85%] bg-indigo-500 rounded-t-sm"></div>
</div>
</div>
</div>
<div className="relative z-10 mt-auto">
<div className="flex gap-2">
<span className="px-3 py-1 rounded-full bg-white/40 text-xs font-medium text-neutral-600 backdrop-blur-sm">SaaS</span>
<span className="px-3 py-1 rounded-full bg-white/40 text-xs font-medium text-neutral-600 backdrop-blur-sm">Frontend</span>
</div>
</div>
</article>
</section>

<section className="mt-32 mb-20 reveal-element">
<div className="glass-card rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/40 pointer-events-none"></div>
<h2 className="font-serif text-4xl md:text-6xl font-extralight tracking-tight text-neutral-900 mb-6 relative z-10">Let's create the extraordinary.</h2>
<p className="font-sans text-neutral-500 max-w-lg mx-auto mb-10 text-base md:text-lg relative z-10">
                    Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
<a className="relative z-10 inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full font-medium transition-all hover:scale-105 hover:shadow-xl" href="mailto:hello@example.com">
<span className="iconify text-xl" data-icon="solar:letter-bold-duotone"></span>
                    Get in touch
                </a>
</div>
</section>

<footer className="flex flex-col md:flex-row justify-between items-center gap-6 py-10 border-t border-neutral-200/60 reveal-element">
<div className="text-sm text-neutral-400 font-medium">
                © 2024 Elias Vane. All Rights Reserved.
            </div>
<div className="flex gap-6">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<span className="iconify text-xl" data-icon="simple-icons:twitter"></span>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<span className="iconify text-xl" data-icon="simple-icons:dribbble"></span>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<span className="iconify text-xl" data-icon="simple-icons:linkedin"></span>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<span className="iconify text-xl" data-icon="simple-icons:instagram"></span>
</a>
</div>
</footer>
</main>


    </>
  );
}
