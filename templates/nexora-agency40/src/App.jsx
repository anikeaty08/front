import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
// Find elements with .animate-reveal within the section
const reveals = entry.target.querySelectorAll('.animate-reveal');
reveals.forEach(el => el.classList.add('reveal-active'));
// Also trigger if the target itself has the class
if (entry.target.classList.contains('animate-reveal')) {
entry.target.classList.add('reveal-active');
}
// Stop observing once revealed
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
document.querySelectorAll("section, footer, .animate-reveal").forEach((el) => observer.observe(el));
});



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
      

<nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200/50">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center transition-transform group-hover:rotate-90">
<iconify-icon icon="solar:code-square-linear" width="18"></iconify-icon>
</div>
<span className="text-base font-semibold text-zinc-900 tracking-tighter font-sans">Nexora</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors font-sans" href="#work">Work</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors font-sans" href="#agency">Agency</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors font-sans" href="#insights">Insights</a>
</div>
<a className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-wide transition-all flex items-center gap-2 rounded-sm font-sans" href="#contact">
      Inquire
      <iconify-icon icon="solar:arrow-right-bold-duotone" width="14"></iconify-icon>
</a>
</nav>

<section className="min-h-screen flex bg-zinc-50 border-zinc-200 border-b pt-24 items-center relative" id="hero">
<div className="container mx-auto px-8 relative">
<div className="grid lg:grid-cols-12 gap-12 pb-12 items-end">
<div className="animate-reveal lg:col-span-8 reveal-active">
<span className="inline-block py-1 px-3 border border-zinc-300 rounded-full text-xs font-mono uppercase tracking-widest text-zinc-600 mb-6 bg-white shadow-sm font-sans">
            01 // EST. 2024
          </span>
<h1 className="leading-[0.9] md:text-7xl lg:text-8xl text-6xl text-zinc-900 mb-8 font-manrope tracking-tighter font-medium">
            Elevating <br/>Modern <br/>
<span className="text-zinc-400 font-display font-normal tracking-tighter">Commerce.</span>
</h1>
</div>
<div className="lg:col-span-4 lg:mb-4 animate-reveal delay-200 reveal-active">
<p className="leading-relaxed text-base text-zinc-600 text-left max-w-sm mb-8 lg:absolute lg:bottom-40 font-sans">
            A refined digital marketplace built for brands that value performance and precision.
          </p>

<div className="flex gap-4 justify-end lg:justify-end">
<a aria-label="Scroll Down" className="flex hover:bg-zinc-900 hover:text-white transition-all hover:border-zinc-900 w-14 h-14 border-zinc-300 border rounded-full items-center justify-center text-zinc-900 bg-white shadow-sm group" href="#philosophy">
<iconify-icon className="animate-bounce-slow" icon="solar:arrow-down-bold-duotone" width="24"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="aspect-[21/9] overflow-hidden animate-reveal delay-300 bg-zinc-200 w-full relative rounded-sm shadow-lg reveal-active">
<img alt="Abstract architectural detail" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 flex items-center gap-3 border border-zinc-100 shadow-sm rounded-sm">
<div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
<span className="text-xs font-mono uppercase text-zinc-800 font-sans">Global — Release v2.4</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-emerald-950 text-emerald-50 border-b border-white/5" id="philosophy">
<div className="container mx-auto px-8">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div className="sticky top-32 animate-reveal">
<span className="text-emerald-400 font-mono text-xs mb-4 block tracking-widest font-sans">02 // APPROACH</span>
<h2 className="leading-none md:text-6xl text-5xl text-white mb-8 font-manrope tracking-tighter font-medium">
            Premium Products.<br/>Seamless Experience.
          </h2>
<div className="h-px w-24 bg-emerald-800 mb-8"></div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded border border-emerald-800/60 bg-emerald-900/20 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:code-circle-bold-duotone" width="24"></iconify-icon>
</div>
<div className="w-12 h-12 rounded border border-emerald-800/60 bg-emerald-900/20 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:cpu-bold-duotone" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="animate-reveal delay-100 space-y-12">
<p className="text-xl text-emerald-100/90 leading-relaxed font-manrope tracking-tighter font-medium">
            Software should not simply exist, but evolve with its users. Our approach merges robust architecture with
            intuitive interfaces, using modern frameworks and clean design principles to create products that scale.
          </p>
<div className="grid grid-cols-2 gap-4">
<div className="p-6 bg-emerald-900/40 border border-emerald-800/50 hover:bg-emerald-800/50 transition-colors rounded-sm">
<span className="text-3xl block mb-2 text-white font-manrope tracking-tighter font-medium">99.9%</span>
<span className="text-xs text-emerald-400 font-mono uppercase font-sans">Performance Score</span>
</div>
<div className="p-6 bg-emerald-900/40 border border-emerald-800/50 hover:bg-emerald-800/50 transition-colors rounded-sm">
<span className="text-3xl block mb-2 text-white font-manrope tracking-tighter font-medium">50+</span>
<span className="text-xs text-emerald-400 font-mono uppercase font-sans">Projects Shipped</span>
</div>
</div>
<div className="relative overflow-hidden rounded-sm">
<img alt="Abstract network visualization" className="aspect-video opacity-40 mix-blend-overlay w-full object-cover grayscale hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-zinc-100" id="work">
<div className="container mx-auto px-8">
<div className="flex justify-between items-end mb-16 animate-reveal">
<div>
<span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2 font-sans">03 // Work</span>
<h2 className="text-4xl text-zinc-900 font-manrope tracking-tighter font-medium">Selected Works</h2>
</div>
<a className="text-sm font-medium border-b border-zinc-900 pb-0.5 hover:text-zinc-600 hover:border-zinc-600 transition-colors font-sans" href="#">View
          Archive</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 animate-reveal delay-200 bg-zinc-100 border border-zinc-100">

<a className="group relative aspect-[4/5] bg-white overflow-hidden cursor-pointer block" href="#">
<span className="absolute top-6 right-6 z-10 text-xs font-mono text-zinc-900 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-sm shadow-sm border border-zinc-100 font-sans">01</span>
<img alt="Fintech Dashboard Interface" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-black/20 opacity-0 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/95 backdrop-blur-md border-t border-zinc-100">
<h3 className="text-lg font-medium text-zinc-900 font-sans">Fintech Dashboard</h3>
<p className="text-xs text-zinc-500 font-mono mt-1 font-sans">React &amp; Node.js</p>
</div>
</a>

<a className="group relative aspect-[4/5] bg-white overflow-hidden cursor-pointer block" href="#">
<span className="absolute top-6 right-6 z-10 text-xs font-mono text-zinc-900 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-sm shadow-sm border border-zinc-100 font-sans">02</span>
<img alt="E-commerce Platform Layout" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-black/20 opacity-0 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/95 backdrop-blur-md border-t border-zinc-100">
<h3 className="text-lg font-medium text-zinc-900 font-sans">E-commerce Platform</h3>
<p className="text-xs text-zinc-500 font-mono mt-1 font-sans">Next.js &amp; Stripe</p>
</div>
</a>

<a className="group relative aspect-[4/5] bg-white overflow-hidden cursor-pointer block" href="#">
<span className="absolute top-6 right-6 z-10 text-xs font-mono text-zinc-900 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-sm shadow-sm border border-zinc-100 font-sans">03</span>
<img alt="Marketing Site Architecture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/95 backdrop-blur-md border-t border-zinc-100">
<h3 className="text-lg font-medium text-zinc-900 font-sans">Marketing Site</h3>
<p className="text-xs text-zinc-500 font-mono mt-1 font-sans">Tailwind &amp; Framer Motion</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-b border-zinc-200" id="agency">
<div className="container mx-auto px-8">
<span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-12 animate-reveal font-sans">04 // Process</span>
<div className="grid md:grid-cols-3 gap-8">

<div className="border-l border-zinc-300 pl-6 py-2 animate-reveal delay-100">
<span className="text-4xl text-zinc-300 mb-4 block font-manrope tracking-tighter font-medium">01</span>
<h3 className="text-xl text-zinc-900 mb-3 font-manrope tracking-tighter font-medium">Discovery</h3>
<p className="text-sm text-zinc-600 leading-relaxed font-sans">
            We begin with deep contextual analysis, understanding your user base, technical constraints, and product
            aspirations.
          </p>
</div>

<div className="border-l border-zinc-300 pl-6 py-2 animate-reveal delay-200">
<span className="text-4xl text-zinc-300 mb-4 block font-manrope tracking-tighter font-medium">02</span>
<h3 className="text-xl text-zinc-900 mb-3 font-manrope tracking-tighter font-medium">Development</h3>
<p className="text-sm text-zinc-600 leading-relaxed font-sans">
            Iterative prototyping and clean architecture. We refine the codebase until it perfectly balances aesthetic
            and utility.
          </p>
</div>

<div className="border-l border-zinc-300 pl-6 py-2 animate-reveal delay-300">
<span className="text-4xl text-zinc-300 mb-4 block font-manrope tracking-tighter font-medium">03</span>
<h3 className="text-xl text-zinc-900 mb-3 font-manrope tracking-tighter font-medium">Deployment</h3>
<p className="text-sm text-zinc-600 leading-relaxed font-sans">
            Precise execution and continuous delivery. We oversee infrastructure to ensure the final release remains
            uncompromised.
          </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#E5E2DC] text-stone-900 border-t border-stone-200">
<div className="container mx-auto px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative animate-reveal">
<div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-stone-400/50"></div>
<img alt="Code on screen" className="w-full grayscale contrast-125 shadow-xl" src="https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-stone-400/50"></div>
</div>
<div className="order-1 lg:order-2 animate-reveal delay-100">
<span className="text-xs font-mono text-stone-500 uppercase tracking-widest block mb-4 font-sans">05 // Stack</span>
<h2 className="text-4xl mb-6 text-stone-900 font-manrope tracking-tighter font-medium">Modern Architecture</h2>
<p className="text-stone-700 leading-relaxed mb-8 font-sans">
            We believe in the power of modern tooling. The frameworks we select celebrate structural integrity, blazing
            fast speeds, and flawless developer experience.
          </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 border-b border-stone-300/60 pb-3">
<iconify-icon className="text-stone-800 text-xl" icon="solar:pen-new-square-bold-duotone"></iconify-icon>
<span className="text-sm font-medium font-sans">React &amp; Next.js</span>
</li>
<li className="flex items-center gap-3 border-b border-stone-300/60 pb-3">
<iconify-icon className="text-stone-800 text-xl" icon="solar:layers-minimalistic-bold-duotone"></iconify-icon>
<span className="text-sm font-medium font-sans">Tailwind CSS</span>
</li>
<li className="flex items-center gap-3 border-b border-stone-300/60 pb-3">
<iconify-icon className="text-stone-800 text-xl" icon="solar:database-bold-duotone"></iconify-icon>
<span className="text-sm font-medium font-sans">TypeScript &amp; Node</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white">
<div className="container mx-auto px-8">
<div className="flex justify-between items-center mb-16 animate-reveal">
<h2 className="text-3xl font-manrope tracking-tighter font-medium">Recognition</h2>
<span className="text-xs font-mono text-zinc-500 font-sans">06 // RECOGNITION</span>
</div>
<div className="border-t border-zinc-800 animate-reveal delay-100">

<div className="group py-6 flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors cursor-default">
<div className="flex items-center gap-6">
<span className="text-zinc-500 font-mono text-sm font-sans">2023</span>
<h3 className="text-xl group-hover:pl-4 transition-all duration-300 font-manrope tracking-tighter font-medium">
              Site
              of the Day</h3>
</div>
<span className="text-sm text-zinc-400 mt-2 md:mt-0 font-sans">Awwwards</span>
</div>

<div className="group py-6 flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors cursor-default">
<div className="flex items-center gap-6">
<span className="text-zinc-500 font-mono text-sm font-sans">2022</span>
<h3 className="text-xl group-hover:pl-4 transition-all duration-300 font-manrope tracking-tighter font-medium">
              Best
              E-commerce</h3>
</div>
<span className="text-sm text-zinc-400 mt-2 md:mt-0 font-sans">Webby Awards</span>
</div>

<div className="group py-6 flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors cursor-default">
<div className="flex items-center gap-6">
<span className="text-zinc-500 font-mono text-sm font-sans">2021</span>
<h3 className="text-xl group-hover:pl-4 transition-all duration-300 font-manrope tracking-tighter font-medium">
              Developer Award</h3>
</div>
<span className="text-sm text-zinc-400 mt-2 md:mt-0 font-sans">CSS Design Awards</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-orange-50/50 border-t border-b border-orange-100/50" id="insights">
<div className="container mx-auto px-8">
<span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-12 animate-reveal font-sans">07 // Insights</span>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-reveal delay-100">

<a className="flex flex-col gap-4 group cursor-pointer" href="#">
<div className="aspect-[16/9] bg-zinc-200 overflow-hidden w-full rounded-sm">
<img alt="Abstract design pattern" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1505567745926-ba89000d255a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-xs font-mono text-zinc-500 uppercase font-sans">Oct 12, 2023</span>
<h3 className="text-lg font-medium text-zinc-900 mt-1 group-hover:underline decoration-1 underline-offset-4 leading-tight font-sans">
              The Future of Web Design
            </h3>
</div>
</a>

<a className="flex flex-col gap-4 group cursor-pointer" href="#">
<div className="aspect-[16/9] bg-zinc-200 overflow-hidden w-full rounded-sm">
<img alt="Laptop workspace" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-xs font-mono text-zinc-500 uppercase font-sans">Sep 08, 2023</span>
<h3 className="text-lg font-medium text-zinc-900 mt-1 group-hover:underline decoration-1 underline-offset-4 leading-tight font-sans">
              Minimalism in UI/UX
            </h3>
</div>
</a>

<a className="flex flex-col gap-4 group cursor-pointer" href="#">
<div className="aspect-[16/9] bg-zinc-200 overflow-hidden w-full rounded-sm">
<img alt="Team meeting" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-xs font-mono text-zinc-500 uppercase font-sans">Aug 22, 2023</span>
<h3 className="text-lg font-medium text-zinc-900 mt-1 group-hover:underline decoration-1 underline-offset-4 leading-tight font-sans">
              Interview with Lead Engineer
            </h3>
</div>
</a>
</div>
</div>
</section>

<section className="bg-neutral-950 text-white relative overflow-hidden">

<div className="absolute inset-0 z-0" id="ctaBg">
<img alt="" className="w-full h-full object-cover opacity-5 grayscale scale-110" id="ctaBgImg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a098692d-2e01-4f27-a9d5-bfd3e1d97adc_1600w.jpg"/>
</div>
<div className="relative z-10 max-w-[1400px] mx-auto px-8 py-32">
<p className="tag-pill mb-8" style={{borderColor: '#404040', color: '#737373'}}>Let's work together</p>
<h2 className="serif reveal-text" style={{fontFamily: '\'DM Serif Display\',serif', fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: '0.9', letterSpacing: '-0.03em'}}>
        Let's Connect<br/><em>There</em></h2>
<div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
<p className="text-base text-neutral-400 max-w-sm leading-relaxed reveal-fade">Ready to bring your next product to
          life? Drop a line and let's build something exceptional together.</p>
<button className="flex items-center gap-3 bg-white text-neutral-900 rounded-full px-7 py-4 text-sm font-semibold hover:bg-neutral-100 transition-all duration-300 shrink-0 reveal-fade group">
<div className="flex items-center justify-center w-7 h-7 bg-neutral-900 rounded-full group-hover:bg-neutral-700 transition-colors">
<iconify-icon className="text-white" height="16" icon="solar:double-alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
          Hire Me Now
        </button>
</div>
</div>
</section>

<footer className="bg-neutral-950 border-t border-neutral-800 text-white">
<div className="max-w-[1400px] mx-auto px-8 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
<div className="col-span-2">
<a className="flex items-center gap-2 text-sm font-semibold tracking-tighter text-white mb-4" href="#">
<iconify-icon height="18" icon="solar:atom-linear" width="18"></iconify-icon>
<span className="">No</span>
</a>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs">UI/UX Designer &amp; Brand Strategist creating
          impactful visual experiences for global companies.</p>
<div className="flex items-center gap-3 mt-6">
<a className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors" href="#">
<iconify-icon className="text-white" height="14" icon="simple-icons:twitter" width="14"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors" href="#">
<iconify-icon className="text-white" height="14" icon="simple-icons:instagram" width="14"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors" href="#">
<iconify-icon className="text-white" height="14" icon="simple-icons:youtube" width="14"></iconify-icon>
</a>
</div>
</div>
<div className="">
<p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-5">Address</p>
<p className="leading-relaxed text-sm text-neutral-500">123 Creative Blvd<br/>San Francisco, CA<br/>United States 94103
        </p>
</div>
<div>
<p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-5">Email</p>
<p className="text-sm text-neutral-500 leading-relaxed">hello@nexora.io<br/>work@nexora.io</p>
</div>
<div className="">
<p className="uppercase text-xs font-semibold text-neutral-400 tracking-wider mb-5">Phone</p>
<p className="text-sm text-neutral-500 leading-relaxed"><br/><a className="" href="tel:+1 (415) 800 2302">+95
            78990999</a></p>
<div className="grid grid-cols-2 gap-x-6 gap-y-2.5 mt-7">
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Homepage</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">About Us</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Tools</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Featured</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Templates</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</div>
<div className="max-w-[1400px] mx-auto px-8 pb-8 border-t border-neutral-800 pt-7 flex items-center justify-between">
<p className="text-xs text-neutral-600">All rights reserved © Nexora 2025</p>
<p className="text-xs text-neutral-600">Designed with intent.</p>
</div>
</footer>

    </>
  );
}
