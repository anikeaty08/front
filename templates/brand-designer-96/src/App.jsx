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
      
<div className="noise-overlay"></div>

<header className="fixed top-0 w-full z-40 bg-[#fdfdfd]/80 backdrop-blur-xl border-b border-black/5 px-6 py-5 transition-all duration-300">
<div className="max-w-screen-2xl mx-auto flex justify-between items-center">
<a className="font-medium tracking-tighter text-lg uppercase leading-none" href="#">O.D</a>
<nav className="hidden md:flex gap-10 text-sm font-medium tracking-tight text-gray-500">
<a className="hover:text-black transition-colors" href="#work">Work</a>
<a className="hover:text-black transition-colors" href="#about">About</a>
<a className="hover:text-black transition-colors" href="#services">Services</a>
<a className="hover:text-black transition-colors" href="#contact">Contact</a>
</nav>
<button className="md:hidden text-black">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-32 pb-24 px-6 overflow-hidden">

<div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] bg-orange-50 rounded-full blur-[120px] -z-10 mix-blend-multiply"></div>
<div className="absolute bottom-1/4 left-1/4 w-[30vw] h-[30vw] bg-blue-50 rounded-full blur-[100px] -z-10 mix-blend-multiply"></div>
<div className="max-w-screen-2xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6">
<div className="col-span-1 md:col-span-10 md:col-start-2">
<p className="text-xs tracking-widest uppercase text-gray-400 mb-8 animate-reveal">Brand &amp; Visual Identity</p>
<h1 className="text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-tighter leading-[0.85] mb-12 animate-reveal delay-100">
                    Shaping <br/>
<span className="text-gray-300 font-serif-italic font-normal tracking-normal ml-8 md:ml-24">timeless</span><br/>
                    identities.
                </h1>
<div className="flex flex-col md:flex-row gap-8 items-start md:items-center animate-reveal delay-200 mt-16 md:mt-24">
<a className="group flex items-center gap-3 text-sm font-medium uppercase tracking-tight border border-black/10 px-8 py-4 rounded-full hover:bg-[#0f0f0f] hover:text-white transition-all duration-500" href="#work">
                        Explore Work
                        <iconify-icon className="text-lg group-hover:rotate-45 transition-transform duration-500" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
<p className="max-w-xs text-sm text-gray-500 leading-relaxed font-light">
                        Helping forward-thinking visionaries build minimalist brands that command attention. Based in London.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="work">
<div className="max-w-screen-2xl mx-auto">
<div className="flex justify-between items-end mb-20 animate-reveal delay-300">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter">Selected <br/>Projects</h2>
<p className="text-sm text-gray-400 hidden md:block">(2022 — 2024)</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 gap-x-8">

<article className="col-span-1 md:col-span-12 group cursor-pointer">
<div className="relative overflow-hidden bg-gray-100 aspect-[16/9] md:aspect-[21/9] mb-8 rounded-sm">
<img alt="Aura Skincare Packaging" className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-medium tracking-tight mb-2">Aura Botanicals</h3>
<p className="text-sm text-gray-500 font-light">Brand Identity, Packaging Design</p>
</div>
<div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</article>

<article className="col-span-1 md:col-span-6 group cursor-pointer">
<div className="relative overflow-hidden bg-gray-100 aspect-[4/5] mb-8 rounded-sm">
<img alt="Kura Architecture Space" className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium tracking-tight mb-2">Kura Architecture</h3>
<p className="text-sm text-gray-500 font-light">Digital Experience, Typography</p>
</div>
</div>
</article>

<article className="col-span-1 md:col-span-6 md:mt-32 group cursor-pointer">
<div className="relative overflow-hidden bg-gray-100 aspect-[4/5] mb-8 rounded-sm">
<img alt="Lumina Sound Abstract" className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium tracking-tight mb-2">Lumina Sound</h3>
<p className="text-sm text-gray-500 font-light">Art Direction, 3D Motion</p>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white border-y border-black/5" id="about">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="col-span-1 md:col-span-5 mb-12 md:mb-0">
<div className="aspect-square bg-gray-100 w-full max-w-lg overflow-hidden md:rounded-tr-full md:rounded-bl-full rounded-sm">
<img alt="Designer Portrait" className="w-full h-full object-cover grayscale opacity-90 mix-blend-luminosity" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="col-span-1 md:col-span-6 md:col-start-7">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter leading-tight mb-10">
                    Design is not just what it looks like, it's how it <span className="font-serif-italic text-gray-400">communicates</span>.
                </h2>
<div className="space-y-6 text-gray-500 text-base font-light leading-relaxed max-w-xl">
<p>With a foundation in editorial design and a passion for digital interfaces, I craft logical, aesthetic, and highly functional brand experiences.</p>
<p>My approach removes the unnecessary, focusing on core messaging and meticulous craftsmanship. The result is design that feels inevitable, blending strategy with an uncompromising aesthetic vision.</p>
</div>
<div className="mt-12 flex items-center gap-6">
<div className="flex flex-col">
<span className="text-3xl font-medium tracking-tighter text-black">12+</span>
<span className="text-xs tracking-widest uppercase text-gray-400 mt-1">Years Exp.</span>
</div>
<div className="w-px h-12 bg-black/10"></div>
<div className="flex flex-col">
<span className="text-3xl font-medium tracking-tighter text-black">40+</span>
<span className="text-xs tracking-widest uppercase text-gray-400 mt-1">Brands Built</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="services">
<div className="max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
<div className="col-span-1 md:col-span-4 mb-16 md:mb-0">
<h2 className="text-xs tracking-widest uppercase text-gray-400 md:sticky md:top-32">Expertise</h2>
</div>
<div className="col-span-1 md:col-span-8">

<div className="group border-t border-black/10 py-10 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-black/5 transition-colors duration-500 -mx-6 px-6 cursor-default">
<div className="flex items-center gap-6 mb-4 md:mb-0 group-hover:translate-x-4 transition-transform duration-500">
<span className="text-sm font-light text-gray-400">01</span>
<h3 className="text-3xl md:text-5xl font-medium tracking-tighter">Brand Strategy</h3>
</div>
<p className="text-sm text-gray-500 font-light max-w-xs md:text-right">Defining core purpose, positioning, and architectural narrative.</p>
</div>

<div className="group border-t border-black/10 py-10 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-black/5 transition-colors duration-500 -mx-6 px-6 cursor-default">
<div className="flex items-center gap-6 mb-4 md:mb-0 group-hover:translate-x-4 transition-transform duration-500">
<span className="text-sm font-light text-gray-400">02</span>
<h3 className="text-3xl md:text-5xl font-medium tracking-tighter">Visual Identity</h3>
</div>
<p className="text-sm text-gray-500 font-light max-w-xs md:text-right">Logos, typography systems, palettes, and cohesive guidelines.</p>
</div>

<div className="group border-t border-b border-black/10 py-10 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-black/5 transition-colors duration-500 -mx-6 px-6 cursor-default">
<div className="flex items-center gap-6 mb-4 md:mb-0 group-hover:translate-x-4 transition-transform duration-500">
<span className="text-sm font-light text-gray-400">03</span>
<h3 className="text-3xl md:text-5xl font-medium tracking-tighter">Digital Design</h3>
</div>
<p className="text-sm text-gray-500 font-light max-w-xs md:text-right">Immersive websites, app interfaces, and fluid interactions.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0f0f0f] text-white">
<div className="max-w-4xl mx-auto text-center">
<iconify-icon className="text-4xl text-white/20 mb-8" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-2xl md:text-4xl font-medium tracking-tight leading-snug mb-12">
                "An exceptional eye for detail. The branding elevated our market presence instantly, striking the perfect balance between modern minimalism and timeless elegance."
            </h3>
<p className="text-sm tracking-widest uppercase text-white/60 font-medium">Sarah Jenkins</p>
<p className="text-xs text-white/40 mt-1 font-light">Founder, Aura Botanicals</p>
</div>
</section>

<footer className="bg-[#0f0f0f] text-white pt-24 pb-8 px-6 relative overflow-hidden rounded-t-3xl md:rounded-t-[4rem] -mt-8 z-20" id="contact">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-screen-2xl mx-auto relative z-10">
<div className="text-center mb-32 mt-12">
<p className="text-xs tracking-widest uppercase text-white/40 mb-6">Have a project in mind?</p>
<a className="group relative inline-block text-5xl md:text-8xl lg:text-[11rem] font-medium tracking-tighter hover:text-white/80 transition-colors leading-none" href="mailto:hello@example.com">
                    Let's Talk
                    <span className="absolute -bottom-4 left-0 w-0 h-1 bg-white transition-all duration-500 group-hover:w-full"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/10 pt-12 text-sm text-white/50 font-light">
<div className="col-span-1 md:col-span-3">
<p className="mb-4 text-white font-medium tracking-tight">Social</p>
<ul className="flex flex-col gap-3">
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#">Instagram <iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#">Twitter <iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#">Behance <iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
</ul>
</div>
<div className="col-span-1 md:col-span-3">
<p className="mb-4 text-white font-medium tracking-tight">Studio</p>
<p className="leading-relaxed">74 Creative District<br/>London, UK<br/>E1 6AN</p>
</div>
<div className="col-span-1 md:col-span-6 md:text-right flex flex-col justify-end">
<p>© 2024 Oliver Design.</p>
<p>Crafted with precision.</p>
</div>
</div>
</div>
</footer>

    </>
  );
}
