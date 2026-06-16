import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.getElementById('year').textContent = new Date().getFullYear();

    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('is-scrolled', window.scrollY > 40);
    }, { passive: true });

    const revealEls = document.querySelectorAll('.reveal, .stagger-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="nav" id="nav">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
<a className="font-outfit text-[1.125rem] font-medium tracking-tight flex items-center gap-2 text-white" href="#">
<iconify-icon icon="solar:pen-new-round-linear" strokeWidth="1.5"></iconify-icon>
            Maahi Studio
        </a>
<div className="hidden md:flex items-center gap-8 text-[0.875rem] text-gray-400">
<a className="transition-colors hover:text-white" href="#about">About</a>
<a className="transition-colors hover:text-white" href="#services">Services</a>
<a className="transition-colors hover:text-white" href="#portfolio">Portfolio</a>
</div>
<div>
<a className="btn btn-ghost text-[0.8125rem] font-normal" href="mailto:hello@maahidesign.com">
                Let's Talk
            </a>
</div>
</div>
</nav>
<main className="">

<section className="min-h-screen flex flex-col overflow-hidden pt-32 pb-20 relative rotate-x-10 items-center justify-center" style={{background: 'var(--grad-bg)'}}>
<div className="absolute inset-0 bg-gradient-to-b from-transparent pointer-events-none via-black/50 to-black"></div>
<div className="reveal is-visible text-center max-w-4xl z-10 mr-auto ml-auto pr-6 pl-6 relative invert-0">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[0.75rem] mb-8 font-normal tracking-wide uppercase bg-white/5 border-white/10 text-gray-300">
<span className="w-1.5 h-1.5 rounded-full animate-pulse bg-white/60"></span>
                Available for freelance projects
            </div>
<h1 className="text-[clamp(2.5rem,7vw,5rem)] text-gradient font-light tracking-tight mb-6 rotate-y-10">
                Shaping visual<br/><span className="font-medium font-playfair text-justify">identities that last.</span>
</h1>
<p className="text-[1rem] md:text-[1.125rem] max-w-xl mx-auto mb-10 leading-relaxed text-gray-400">
                Minimal, modern, and impactful graphic design by Maahi Design Studio. Elevating brands through thoughtful aesthetics and precise execution.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="btn btn-primary text-[0.875rem] sm:w-auto justify-center font-medium w-full" href="mailto:hello@maahidesign.com">
                    Hire Me
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="btn btn-ghost text-[0.875rem] w-full sm:w-auto justify-center" href="#portfolio">
                    View Work
                </a>
</div>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
<span className="text-[0.625rem] uppercase tracking-widest">Scroll</span>
<div className="w-[1px] h-8 bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-slate-400 via-slate-600 to-slate-400"></div>
</div>
</section>

<section className="md:py-32 border-white/5 border-t pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-[2rem] md:text-[3rem] font-light tracking-tight mb-6">
                        Hi, I'm Maahi.<br/>A passionate <span className="text-gradient font-normal">creative designer.</span>
</h2>
<p className="mb-6 leading-relaxed text-gray-400">
                        With an eye for minimalist aesthetics and a deep understanding of visual hierarchy, I help brands communicate their core values through clean, modern, and timeless design.
                    </p>
<p className="leading-relaxed text-gray-400">
                        Whether it's crafting a logo from scratch or building a cohesive social media presence, my approach is always strategy-first, ensuring every pixel serves a purpose.
                    </p>
</div>
<div className="relative reveal delay-100">
<div className="aspect-square rounded-2xl overflow-hidden border relative group border-white/10">
<div className="absolute inset-0 bg-gradient-to-tr to-transparent opacity-50 z-10 from-white/10"></div>
<img alt="Abstract Design Workspace" className="w-full h-full object-cover filter grayscale opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative bg-[#030303] border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24 reveal">
<span className="text-[0.75rem] font-mono tracking-widest uppercase text-gray-500 mb-4 block">Expertise</span>
<h2 className="text-[2rem] md:text-[3rem] font-light tracking-tight">Services focused on<br/><span className="text-gradient font-normal">brand elevation.</span></h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-up">

<div className="glass-card p-8 reveal-child">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center text-[1.5rem] mb-6 bg-white/5 border-white/10 text-white">
<iconify-icon icon="solar:pen-new-round-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-[1.125rem] font-normal mb-3 tracking-tight">Logo Design</h3>
<p className="text-[0.875rem] leading-relaxed text-gray-400">Distinctive and scalable marks that serve as the foundation of your brand identity.</p>
</div>

<div className="glass-card p-8 reveal-child">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center text-[1.5rem] mb-6 bg-white/5 border-white/10 text-white">
<iconify-icon icon="solar:star-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-[1.125rem] font-normal mb-3 tracking-tight">Branding</h3>
<p className="text-[0.875rem] leading-relaxed text-gray-400">Comprehensive visual systems including typography, color palettes, and guidelines.</p>
</div>

<div className="glass-card p-8 reveal-child">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center text-[1.5rem] mb-6 bg-white/5 border-white/10 text-white">
<iconify-icon icon="solar:hashtag-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-[1.125rem] font-normal mb-3 tracking-tight">Social Media</h3>
<p className="text-[0.875rem] leading-relaxed text-gray-400">Engaging templates and graphics tailored for maximum impact across social platforms.</p>
</div>

<div className="glass-card p-8 reveal-child">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center text-[1.5rem] mb-6 bg-white/5 border-white/10 text-white">
<iconify-icon icon="solar:video-frame-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-[1.125rem] font-normal mb-3 tracking-tight">Thumbnail Design</h3>
<p className="text-[0.875rem] leading-relaxed text-gray-400">High-conversion, custom thumbnails optimized for CTR on YouTube and video networks.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative border-t border-white/5" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 reveal gap-6">
<div>
<span className="text-[0.75rem] font-mono tracking-widest uppercase text-gray-500 mb-4 block">Selected Works</span>
<h2 className="text-[2rem] md:text-[3rem] font-light tracking-tight">Recent <span className="text-gradient font-normal">Projects</span></h2>
</div>
<a className="btn btn-ghost text-[0.8125rem]" href="#">View Full Archive</a>
</div>
<div className="grid md:grid-cols-2 gap-8 stagger-up">

<div className="group cursor-pointer reveal-child">
<div className="aspect-[4/3] rounded-2xl overflow-hidden border relative mb-5 bg-white/5 border-white/10">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center bg-black/20">
<span className="w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center border transform scale-90 group-hover:scale-100 transition-transform bg-white/10 border-white/20 text-white">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<img alt="Lumina Branding" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center justify-between px-2">
<h3 className="text-[1.25rem] font-normal tracking-tight">Lumina Skincare</h3>
<span className="text-[0.75rem] text-gray-500 border rounded-full px-3 py-1 border-white/10">Brand Identity</span>
</div>
</div>

<div className="group cursor-pointer reveal-child md:mt-16">
<div className="aspect-[4/3] rounded-2xl overflow-hidden border relative mb-5 bg-white/5 border-white/10">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center bg-black/20">
<span className="w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center border transform scale-90 group-hover:scale-100 transition-transform bg-white/10 border-white/20 text-white">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<img alt="Vertex Logo" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center justify-between px-2">
<h3 className="text-[1.25rem] font-normal tracking-tight">Vertex Capital</h3>
<span className="text-[0.75rem] text-gray-500 border rounded-full px-3 py-1 border-white/10">Logo Design</span>
</div>
</div>

<div className="group cursor-pointer reveal-child">
<div className="aspect-[4/3] rounded-2xl overflow-hidden border relative mb-5 bg-white/5 border-white/10">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center bg-black/20">
<span className="w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center border transform scale-90 group-hover:scale-100 transition-transform bg-white/10 border-white/20 text-white">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<img alt="Social Media Campaign" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center justify-between px-2">
<h3 className="text-[1.25rem] font-normal tracking-tight">Aura Campaign</h3>
<span className="text-[0.75rem] text-gray-500 border rounded-full px-3 py-1 border-white/10">Social Media</span>
</div>
</div>

<div className="group cursor-pointer reveal-child md:mt-16">
<div className="aspect-[4/3] rounded-2xl overflow-hidden border relative mb-5 bg-white/5 border-white/10">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center bg-black/20">
<span className="w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center border transform scale-90 group-hover:scale-100 transition-transform bg-white/10 border-white/20 text-white">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<img alt="Abstract App Brand" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center justify-between px-2">
<h3 className="text-[1.25rem] font-normal tracking-tight">Nexus App</h3>
<span className="text-[0.75rem] text-gray-500 border rounded-full px-3 py-1 border-white/10">Visual Identity</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative bg-[#030303] border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 md:gap-24">
<div className="reveal">
<h2 className="text-[2.5rem] md:text-[4rem] font-light tracking-tight mb-6 leading-[1.05]">
                        Let's build<br/><span className="text-gradient font-medium">something great.</span>
</h2>
<p className="mb-12 max-w-md text-[1rem] text-gray-400">
                        Ready to start your next project? Drop me a message and let's discuss how we can bring your vision to life.
                    </p>
<div className="flex flex-col gap-6">
<a className="flex items-center gap-4 transition-colors group w-fit text-gray-300 hover:text-white" href="mailto:hello@maahidesign.com">
<div className="w-10 h-10 rounded-full border flex items-center justify-center group-hover:border-white/30 transition-colors border-white/10 bg-white/5">
<iconify-icon className="text-[1.25rem]" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-mono text-[0.875rem]">hello@maahidesign.com</span>
</a>
<a className="flex items-center gap-4 transition-colors group w-fit text-gray-300 hover:text-white" href="tel:+1234567890">
<div className="w-10 h-10 rounded-full border flex items-center justify-center group-hover:border-white/30 transition-colors border-white/10 bg-white/5">
<iconify-icon className="text-[1.25rem]" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-mono text-[0.875rem]">+1 (234) 567-890</span>
</a>
</div>
</div>
<div className="reveal delay-100">
<div className="glass-card p-8 md:p-10">
<form className="flex flex-col gap-8">
<div className="relative">
<input className="custom-input text-[0.875rem]" id="name" placeholder="Your Name" required="" type="text"/>
</div>
<div className="relative">
<input className="custom-input text-[0.875rem]" id="email" placeholder="Email Address" required="" type="email"/>
</div>
<div className="relative">
<select className="custom-input text-[0.875rem] appearance-none bg-transparent cursor-pointer">
<option className="text-gray-500 bg-black" disabled="" selected="" value="">Select Service</option>
<option className="bg-black text-white" value="logo">Logo Design</option>
<option className="bg-black text-white" value="brand">Branding</option>
<option className="bg-black text-white" value="social">Social Media</option>
<option className="bg-black text-white" value="other">Other</option>
</select>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative">
<textarea className="custom-input text-[0.875rem] resize-none" id="message" placeholder="Project Details" required="" rows="4"></textarea>
</div>
<button className="btn btn-primary w-full justify-center mt-4" type="button">
                                Send Message
                            </button>
</form>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="py-8 border-t relative z-10 border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="font-outfit text-[1rem] font-medium tracking-tight flex items-center gap-2 text-white">
<iconify-icon icon="solar:pen-new-round-linear" strokeWidth="1.5"></iconify-icon>
            Maahi Studio
        </div>
<div className="text-[0.75rem] text-gray-500">
            © <span id="year">2026</span> Maahi Design Studio. All rights reserved.
        </div>
<div className="flex items-center gap-4 text-gray-400">
<a className="transition-colors hover:text-white" href="#"><iconify-icon className="text-[1.25rem]" icon="solar:minimalistic-magnifer-linear"></iconify-icon></a>
<a className="transition-colors hover:text-white" href="#"><iconify-icon className="text-[1.25rem]" icon="solar:camera-linear"></iconify-icon></a>
<a className="transition-colors hover:text-white" href="#"><iconify-icon className="text-[1.25rem]" icon="solar:link-linear"></iconify-icon></a>
</div>
</div>
</footer>


    </>
  );
}
