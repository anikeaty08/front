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



        // Custom Cursor Logic
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');

        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Smooth lag effect for outline
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Word Cycler
        const words = document.querySelectorAll('.word-cycler span');
        let currentWordIndex = 0;

        setInterval(() => {
            words[currentWordIndex].classList.remove('active');
            currentWordIndex = (currentWordIndex + 1) % words.length;
            words[currentWordIndex].classList.add('active');
        }, 2000);

        // Skill Bar Animation & Counters on Scroll
        const observerOptions = { threshold: 0.2 };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Skill Bars
                    const bars = entry.target.querySelectorAll('[data-width]');
                    bars.forEach(bar => {
                        bar.style.width = bar.getAttribute('data-width');
                    });

                    // Counters
                    const counters = entry.target.querySelectorAll('.counter');
                    counters.forEach(counter => {
                        const target = +counter.getAttribute('data-target');
                        const speed = 200;
                        const increment = target / speed;
                        
                        const updateCount = () => {
                            const count = +counter.innerText;
                            if(count < target) {
                                counter.innerText = Math.ceil(count + increment);
                                setTimeout(updateCount, 20);
                            } else {
                                counter.innerText = target + "+";
                            }
                        };
                        updateCount();
                    });
                }
            });
        }, observerOptions);

        const skillsSection = document.querySelector('#skills');
        const aboutSection = document.querySelector('#about');
        if(skillsSection) observer.observe(skillsSection);
        if(aboutSection) observer.observe(aboutSection);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="cursor-dot hidden md:block"></div>
<div className="cursor-outline hidden md:block"></div>

<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b border-white/5 bg-black/50" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-xl tracking-tighter font-medium text-white flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-amber-400 to-purple-600 flex items-center justify-center text-black font-bold group-hover:rotate-180 transition-transform duration-500">M</div>
<span className="opacity-90 group-hover:opacity-100 transition-opacity">MOHD SUBHAN</span>
</a>
<div className="hidden md:flex gap-8 text-sm font-medium tracking-tight">
<a className="hover:text-amber-400 transition-colors" href="#about">About</a>
<a className="hover:text-cyan-400 transition-colors" href="#skills">Skills</a>
<a className="hover:text-purple-400 transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-amber-400 transition-colors" href="#services">Services</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-xs font-medium tracking-wide text-black bg-white rounded-full hover:bg-amber-400 transition-colors duration-300" href="#contact">
                Let's Talk
            </a>

<button className="md:hidden text-2xl text-white">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 bg-grid z-0"></div>
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

<div className="absolute right-[10%] top-[20%] w-24 h-24 border border-white/10 rounded-xl backdrop-blur-sm floating hidden lg:block rotate-12"></div>
<div className="absolute left-[10%] bottom-[20%] w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-md floating hidden lg:block" style={{animationDelay: '1s'}}></div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs uppercase tracking-widest text-slate-400">Available for Hire</span>
</div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-white mb-4 leading-none">
<span className="text-shine">Mohd Subhan</span>
</h1>
<div className="text-xl md:text-3xl font-light text-slate-400 mb-8 h-10 flex items-center justify-center gap-2">
<span>I am a</span>
<span className="word-cycler text-white font-normal relative">
<span className="active text-amber-400">Web Designer</span>
<span className="text-cyan-400">Graphic Designer</span>
<span className="text-purple-400">Creative Coder</span>
<span className="text-white">GraphicDesigner.</span>
</span>
</div>
<p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                I design visually powerful, performance-driven digital experiences that blend creativity with modern technology.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="px-8 py-3 bg-white text-black rounded-full font-medium text-sm tracking-wide hover:bg-amber-400 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]" href="#portfolio">
                    View Portfolio
                </a>
<a className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full font-medium text-sm tracking-wide hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm flex items-center gap-2" href="#contact">
                    Hire Me <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
<iconify-icon className="text-3xl text-slate-500" icon="solar:mouse-minimalistic-linear"></iconify-icon>
</div>
</section>

<section className="py-24 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative group perspective">
<div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 to-purple-600/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
<div className="relative bg-slate-900 border border-white/10 rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square transform transition-transform duration-700 hover:rotate-y-6 hover:rotate-x-6 shadow-2xl">

<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>
<img alt="Mohd Subhan" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-8 left-8 z-20">
<div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
<h4 className="text-2xl font-semibold text-white">4+</h4>
<p className="text-xs text-slate-300 uppercase tracking-wide">Years Experience</p>
</div>
<div className="flex gap-2">
<span className="w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-amber-400"><iconify-icon icon="solar:code-circle-linear" width="20"></iconify-icon></span>
<span className="w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-cyan-400"><iconify-icon icon="solar:palette-linear" width="20"></iconify-icon></span>
<span className="w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-purple-400"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></span>
</div>
</div>
</div>
</div>

<div className="space-y-8">
<div className="inline-block px-3 py-1 rounded border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs tracking-widest uppercase">About Me</div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">Crafting Digital <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-600">Masterpieces</span></h2>
<p className="text-slate-400 leading-relaxed font-light text-lg">
                        I am a passionate creative professional based in <span className="text-white font-normal">Miranpur Katra, Shahjahanpur</span>. My expertise lies at the intersection of design and code. I don't just build websites; I create immersive digital environments that tell a story.
                    </p>
<p className="text-slate-400 leading-relaxed font-light text-lg">
                        With a deep focus on clean UI, powerful branding, and user-centric design, I help brands stand out in the noisy digital landscape.
                    </p>
<div className="grid grid-cols-2 gap-6 pt-4">
<div className="p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors">
<h3 className="text-3xl font-semibold text-white mb-1 counter" data-target="150">0</h3>
<p className="text-xs text-slate-500 uppercase tracking-wider">Projects Completed</p>
</div>
<div className="p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors">
<h3 className="text-3xl font-semibold text-white mb-1 counter" data-target="50">0</h3>
<p className="text-xs text-slate-500 uppercase tracking-wider">Happy Clients</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative overflow-hidden" id="skills">
<div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Technical <span className="text-purple-400">Arsenal</span></h2>
<p className="text-slate-500 max-w-lg mx-auto">Tools and technologies I use to bring ideas to life.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 bg-slate-900/50 border border-white/5 rounded-2xl hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<iconify-icon className="text-4xl text-purple-400 group-hover:scale-110 transition-transform duration-500" icon="solar:monitor-smartphone-linear"></iconify-icon>
<span className="text-sm font-mono text-slate-500">95%</span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Web Design &amp; Dev</h3>
<p className="text-sm text-slate-500 mb-4">HTML, CSS, JavaScript, Tailwind</p>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 w-[0%]" data-width="95%" style={{transition: 'width 1.5s ease-out'}}></div>
</div>
</div>
</div>

<div className="group relative p-8 bg-slate-900/50 border border-white/5 rounded-2xl hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2">
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<iconify-icon className="text-4xl text-cyan-400 group-hover:scale-110 transition-transform duration-500" icon="solar:figma-file-linear"></iconify-icon>
<span className="text-sm font-mono text-slate-500">90%</span>
</div>
<h3 className="text-xl font-medium text-white mb-2">UI/UX Design</h3>
<p className="text-sm text-slate-500 mb-4">Figma, Wireframing, Prototyping</p>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-cyan-500 w-[0%]" data-width="90%" style={{transition: 'width 1.5s ease-out'}}></div>
</div>
</div>
</div>

<div className="group relative p-8 bg-slate-900/50 border border-white/5 rounded-2xl hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<iconify-icon className="text-4xl text-blue-400 group-hover:scale-110 transition-transform duration-500" icon="solar:gallery-edit-linear"></iconify-icon>
<span className="text-sm font-mono text-slate-500">98%</span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Graphic Design</h3>
<p className="text-sm text-slate-500 mb-4">Photoshop, CorelDRAW Expert</p>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[0%]" data-width="98%" style={{transition: 'width 1.5s ease-out'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Services</h2>
<p className="text-slate-500 mt-2">What I can do for you</p>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon></button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="flex overflow-x-auto gap-6 px-6 pb-8 snap-x scrollbar-hide no-scrollbar" style={{WebkitOverflowScrolling: 'touch'}}>

<div className="snap-center shrink-0 w-80 md:w-96 p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl hover:border-amber-400/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-amber-400/10 rounded-lg flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:laptop-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Website Design</h3>
<p className="text-slate-400 text-sm leading-relaxed">Modern, responsive, and performance-optimized websites tailored to your brand identity.</p>
</div>

<div className="snap-center shrink-0 w-80 md:w-96 p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl hover:border-cyan-400/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:tag-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Business Branding</h3>
<p className="text-slate-400 text-sm leading-relaxed">Complete visual identity design including logos, typography, and brand guidelines.</p>
</div>

<div className="snap-center shrink-0 w-80 md:w-96 p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl hover:border-purple-400/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:sticker-smile-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Social Media Graphics</h3>
<p className="text-slate-400 text-sm leading-relaxed">Engaging visuals for Instagram, LinkedIn, and Facebook to boost audience interaction.</p>
</div>

<div className="snap-center shrink-0 w-80 md:w-96 p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl hover:border-pink-400/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-pink-400/10 rounded-lg flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:bill-list-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Poster &amp; Banner Design</h3>
<p className="text-slate-400 text-sm leading-relaxed">High-quality print and digital poster designs for events, products, and marketing.</p>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="portfolio">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<h2 className="text-4xl font-medium text-white tracking-tight mb-2">Selected <span className="text-amber-400">Works</span></h2>
<p className="text-slate-500">A curation of my best digital projects.</p>
</div>
<div className="flex gap-4 mt-6 md:mt-0 text-sm text-slate-400">
<span className="text-white border-b border-amber-400 pb-1 cursor-pointer">All</span>
<span className="hover:text-white cursor-pointer transition-colors">Web</span>
<span className="hover:text-white cursor-pointer transition-colors">Branding</span>
<span className="hover:text-white cursor-pointer transition-colors">UI Concepts</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative rounded-2xl overflow-hidden cursor-pointer h-96">
<img alt="Project" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2426&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex flex-col justify-center items-center p-6 text-center">
<h3 className="text-2xl font-medium text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">E-Commerce Redesign</h3>
<p className="text-slate-300 text-sm mt-2 mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Web Design • UX</p>
<button className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-amber-400 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">View Project</button>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer h-96 lg:col-span-2">
<img alt="Project" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2725&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex flex-col justify-center items-center p-6 text-center">
<h3 className="text-2xl font-medium text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Fintech Dashboard</h3>
<p className="text-slate-300 text-sm mt-2 mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">UI Design • Prototyping</p>
<button className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-cyan-400 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">View Project</button>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer h-96">
<img alt="Project" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex flex-col justify-center items-center p-6 text-center">
<h3 className="text-2xl font-medium text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Brand Identity</h3>
<p className="text-slate-300 text-sm mt-2 mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Graphic Design</p>
<button className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-purple-400 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">View Project</button>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer h-96">
<img alt="Project" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex flex-col justify-center items-center p-6 text-center">
<h3 className="text-2xl font-medium text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Retro Poster Series</h3>
<p className="text-slate-300 text-sm mt-2 mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Art Direction</p>
<button className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-pink-400 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">View Project</button>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer h-96">
<img alt="Project" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex flex-col justify-center items-center p-6 text-center">
<h3 className="text-2xl font-medium text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Corporate Portfolio</h3>
<p className="text-slate-300 text-sm mt-2 mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Web Development</p>
<button className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-blue-400 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">View Project</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-transparent to-slate-900/30">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12">Client <span className="text-cyan-400">Stories</span></h2>
<div className="relative p-8 md:p-12 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl hover:shadow-[0_0_50px_rgba(34,211,238,0.1)] transition-shadow duration-500">
<iconify-icon className="text-5xl text-white/10 absolute top-8 left-8" icon="solar:quote-up-square-linear"></iconify-icon>
<div className="relative z-10">
<p className="text-lg md:text-xl text-slate-300 font-light italic leading-relaxed mb-8">
                        "Mohd Subhan transformed our digital presence completely. The attention to detail, smooth animations, and the premium feel of the design were exactly what we needed. Highly recommended for anyone looking for top-tier work."
                    </p>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-700 overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<h4 className="text-white font-medium text-sm">Arjun Sharma</h4>
<p className="text-xs text-slate-500">CEO, TechFlow</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">
<div className="absolute -left-20 top-20 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px]"></div>
<div className="absolute -right-20 bottom-20 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px]"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">Start a <span className="text-purple-400">Project</span></h2>
<p className="text-slate-400">Interested in working together? Let's discuss your idea.</p>
</div>
<form className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-slate-400 uppercase tracking-wider ml-1">Name</label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-400 uppercase tracking-wider ml-1">Email</label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-400 uppercase tracking-wider ml-1">Message</label>
<textarea className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300" placeholder="Tell me about your project..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-purple-900/20 relative overflow-hidden group" type="button">
<span className="relative z-10">Send Message</span>
<div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
</button>
</form>
<div className="flex justify-center gap-8 mt-12">
<a className="text-slate-400 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all transform hover:-translate-y-1" href="#">
<iconify-icon className="text-2xl" icon="solar:brands-instagram-linear"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all transform hover:-translate-y-1" href="#">
<iconify-icon className="text-2xl" icon="solar:brands-linkedin-linear"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all transform hover:-translate-y-1" href="#">
<iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center font-bold text-xs">M</div>
<span className="text-white font-medium tracking-tight">Mohd Subhan</span>
</div>
<p className="text-slate-500 text-sm">© 2026 Mohd Subhan | Designed with Creativity &amp; Code</p>
<div className="flex gap-6 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</footer>



    </>
  );
}
