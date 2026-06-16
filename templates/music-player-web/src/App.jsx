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



        document.addEventListener('DOMContentLoaded', () => {
            // Mobile Menu Toggle
            const menuBtn = document.getElementById('menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');

            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Close mobile menu when a link is clicked
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });

            // Scroll Animation (Intersection Observer)
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // Run once
                    }
                });
            }, observerOptions);

            const animatedElements = document.querySelectorAll('.fade-in-up');
            animatedElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-[-15%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-15%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-600/15 rounded-full blur-[140px] pointer-events-none z-0"></div>

<header className="fixed top-0 w-full z-50 glass-panel border-x-0 border-t-0">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-lg font-semibold tracking-tighter text-white uppercase" href="#">
                AURA
            </a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#product">Premium</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#testimonials">Reviews</a>
</nav>

<div className="hidden md:block">
<a className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors" href="#cta">
                    Get Started
                </a>
</div>

<button className="md:hidden text-neutral-300 hover:text-white transition-colors" id="menu-toggle">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden glass-panel border-t border-white/5 absolute w-full" id="mobile-menu">
<div className="flex flex-col px-6 py-4 gap-4">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#product">Premium</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#testimonials">Reviews</a>
<a className="text-sm font-medium text-white mt-2" href="#cta">Get Started →</a>
</div>
</div>
</header>
<main className="relative z-10">

<section className="min-h-screen flex items-center pt-24 pb-12 px-6 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center w-full">

<div className="fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-medium text-indigo-300 mb-6 border-indigo-500/20">
<iconify-icon height="16" icon="solar:stars-linear" width="16"></iconify-icon>
                        Introducing Aura Spatial Audio
                    </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white leading-[1.1] mb-6">
                        Immerse in sound. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">Without limits.</span>
</h1>
<p className="text-base md:text-lg text-neutral-400 mb-8 max-w-md leading-relaxed">
                        Experience studio-quality fidelity, personalized curation, and seamless playback across all your devices. The future of listening is here.
                    </p>
<div className="flex flex-wrap items-center gap-4">
<a className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10" href="#cta">
                            Start Free Trial
                        </a>
<button className="glass-panel text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
<iconify-icon height="20" icon="solar:play-circle-linear" width="20"></iconify-icon>
                            Listen to Demo
                        </button>
</div>
</div>

<div className="relative fade-in-up lg:ml-auto w-full max-w-md">
<div className="glass-panel rounded-3xl p-6 shadow-2xl relative overflow-hidden transform perspective-1000 rotate-y-[-5deg] rotate-x-[5deg]">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-fuchsia-500/30 rounded-full blur-[60px]"></div>

<div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 mb-8 relative overflow-hidden shadow-inner border border-white/10">
<div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>

<div className="absolute bottom-[-10%] right-[-10%] w-3/4 h-3/4 bg-white/10 rounded-full blur-2xl"></div>
</div>

<div className="flex justify-between items-end mb-6">
<div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-1">Midnight City Skyline</h3>
<p className="text-sm text-neutral-400">Electronic Synthesis</p>
</div>
<button className="text-neutral-400 hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:heart-linear" width="24"></iconify-icon>
</button>
</div>

<div className="mb-2">
<div className="custom-slider-track">
<div className="custom-slider-fill relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-md"></div>
</div>
</div>
</div>
<div className="flex justify-between text-xs text-neutral-500 font-medium mb-8">
<span>1:24</span>
<span>4:05</span>
</div>

<div className="flex justify-center items-center gap-8">
<button className="text-neutral-400 hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:skip-previous-linear" width="24"></iconify-icon>
</button>
<button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black shadow-lg hover:scale-105 transition-transform">
<iconify-icon height="28" icon="solar:play-linear" width="28"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:skip-next-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 fade-in-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Designed for audiophiles.</h2>
<p className="text-base text-neutral-400 max-w-2xl mx-auto">We've engineered every detail to deliver an unparalleled listening experience, from lossless compression to intelligent curation.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel glass-panel-hover rounded-3xl p-8 transition-all duration-300 group fade-in-up">
<div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:soundwave-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Lossless Quality</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Stream up to 24-bit/192kHz audio. Hear every breath, every string, exactly as the artist intended.</p>
</div>

<div className="glass-panel glass-panel-hover rounded-3xl p-8 transition-all duration-300 group fade-in-up" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-2xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 mb-6 border border-fuchsia-500/20 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Smart Curation</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Our AI analyzes your listening habits to generate endless mixes that perfectly match your current mood.</p>
</div>

<div className="glass-panel glass-panel-hover rounded-3xl p-8 transition-all duration-300 group fade-in-up" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:devices-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Seamless Sync</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Start on your phone, continue on your desktop. Perfect synchronization across your entire ecosystem.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-white/[0.01]" id="about">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

<div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden glass-panel fade-in-up group">

<div className="absolute inset-0 bg-[#0a0a0a]"></div>
<div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-indigo-500/30 blur-[80px] rounded-full group-hover:bg-indigo-500/40 transition-colors duration-700"></div>
<div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-fuchsia-500/30 blur-[60px] rounded-full group-hover:bg-fuchsia-500/40 transition-colors duration-700"></div>

<div className="absolute inset-x-6 bottom-6 glass-panel rounded-2xl p-4 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon className="text-white" height="20" icon="solar:music-notes-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Over 100M Tracks</p>
<p className="text-xs text-neutral-400">Available globally</p>
</div>
</div>
</div>

<div className="fade-in-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Curated by experts. <br/>Driven by passion.</h2>
<p className="text-base text-neutral-400 mb-8 leading-relaxed">
                        We built Aura because we believe music shouldn't be compressed into lifeless files. We collaborate directly with artists and sound engineers to deliver a platform that respects the art of sound.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-0.5 flex-shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-neutral-300">Direct-to-artist revenue model ensures fair compensation.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-0.5 flex-shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-neutral-300">Exclusive live sessions and behind-the-scenes content.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-0.5 flex-shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-neutral-300">Zero ad interruptions, even on the base tier.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6" id="product">
<div className="max-w-4xl mx-auto fade-in-up">
<div className="mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Premium benefits.</h2>
<p className="text-base text-neutral-400">Unlock the full potential of your audio setup.</p>
</div>
<div className="glass-panel rounded-3xl p-2 md:p-6 shadow-xl">

<div className="group flex items-center justify-between p-3 md:p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer border-b border-white/5 last:border-0">
<div className="flex items-center gap-4">
<div className="w-8 h-8 flex items-center justify-center text-neutral-500 relative flex-shrink-0">
<span className="group-hover:opacity-0 transition-opacity text-sm font-medium">01</span>
<iconify-icon className="absolute opacity-0 group-hover:opacity-100 transition-opacity text-white" height="20" icon="solar:play-linear" width="20"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-900 to-black flex-shrink-0 border border-white/5"></div>
<div>
<h4 className="text-sm md:text-base font-semibold tracking-tight text-neutral-200 group-hover:text-white transition-colors">High-Res Lossless</h4>
<p className="text-xs text-neutral-500">Up to 24-bit/192kHz audio resolution.</p>
</div>
</div>
<div className="hidden sm:block text-right">
<p className="text-xs text-neutral-400">Included</p>
</div>
<div className="px-2">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" height="20" icon="solar:menu-dots-linear" width="20"></iconify-icon>
</div>
</div>

<div className="group flex items-center justify-between p-3 md:p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer border-b border-white/5 last:border-0">
<div className="flex items-center gap-4">
<div className="w-8 h-8 flex items-center justify-center text-neutral-500 relative flex-shrink-0">
<span className="group-hover:opacity-0 transition-opacity text-sm font-medium">02</span>
<iconify-icon className="absolute opacity-0 group-hover:opacity-100 transition-opacity text-white" height="20" icon="solar:play-linear" width="20"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-fuchsia-900 to-black flex-shrink-0 border border-white/5"></div>
<div>
<h4 className="text-sm md:text-base font-semibold tracking-tight text-neutral-200 group-hover:text-white transition-colors">Spatial Audio</h4>
<p className="text-xs text-neutral-500">Immersive 3D soundscapes with Dolby Atmos.</p>
</div>
</div>
<div className="hidden sm:block text-right">
<p className="text-xs text-neutral-400">Included</p>
</div>
<div className="px-2">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" height="20" icon="solar:menu-dots-linear" width="20"></iconify-icon>
</div>
</div>

<div className="group flex items-center justify-between p-3 md:p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer border-b border-white/5 last:border-0">
<div className="flex items-center gap-4">
<div className="w-8 h-8 flex items-center justify-center text-neutral-500 relative flex-shrink-0">
<span className="group-hover:opacity-0 transition-opacity text-sm font-medium">03</span>
<iconify-icon className="absolute opacity-0 group-hover:opacity-100 transition-opacity text-white" height="20" icon="solar:play-linear" width="20"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-900 to-black flex-shrink-0 border border-white/5"></div>
<div>
<h4 className="text-sm md:text-base font-semibold tracking-tight text-neutral-200 group-hover:text-white transition-colors">Offline Mode</h4>
<p className="text-xs text-neutral-500">Download your entire library for offline listening.</p>
</div>
</div>
<div className="hidden sm:block text-right">
<p className="text-xs text-neutral-400">Included</p>
</div>
<div className="px-2">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" height="20" icon="solar:menu-dots-linear" width="20"></iconify-icon>
</div>
</div>

<div className="group flex items-center justify-between p-3 md:p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer border-b border-white/5 last:border-0">
<div className="flex items-center gap-4">
<div className="w-8 h-8 flex items-center justify-center text-neutral-500 relative flex-shrink-0">
<span className="group-hover:opacity-0 transition-opacity text-sm font-medium">04</span>
<iconify-icon className="absolute opacity-0 group-hover:opacity-100 transition-opacity text-white" height="20" icon="solar:play-linear" width="20"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neutral-800 to-black flex-shrink-0 border border-white/5"></div>
<div>
<h4 className="text-sm md:text-base font-semibold tracking-tight text-neutral-200 group-hover:text-white transition-colors">Exclusive Podcasts</h4>
<p className="text-xs text-neutral-500">Ad-free access to creator originals.</p>
</div>
</div>
<div className="hidden sm:block text-right">
<p className="text-xs text-neutral-400">Included</p>
</div>
<div className="px-2">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" height="20" icon="solar:menu-dots-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="testimonials">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 fade-in-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Hear it from them.</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-6 rounded-2xl fade-in-up">
<div className="flex items-center gap-1 mb-4 text-indigo-400">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 italic mb-6 leading-relaxed">
                            "I've tried every music app out there, but Aura's spatial audio integration makes me feel like I'm sitting right in the studio."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex-shrink-0"></div>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Sarah Jenkins</p>
<p className="text-xs text-neutral-500">Audio Engineer</p>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-2xl fade-in-up" style={{transitionDelay: '100ms'}}>
<div className="flex items-center gap-1 mb-4 text-indigo-400">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 italic mb-6 leading-relaxed">
                            "The minimalist UI is a breath of fresh air. It gets out of the way and just lets the music take center stage."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-fuchsia-500 to-orange-500 flex-shrink-0"></div>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Marcus Chen</p>
<p className="text-xs text-neutral-500">Product Designer</p>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-2xl fade-in-up" style={{transitionDelay: '200ms'}}>
<div className="flex items-center gap-1 mb-4 text-indigo-400">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 italic mb-6 leading-relaxed">
                            "Smart curation actually works. For the first time, a platform recommends indie bands I actually end up loving."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-teal-500 flex-shrink-0"></div>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Elena Rodriguez</p>
<p className="text-xs text-neutral-500">Music Blogger</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="cta">
<div className="max-w-5xl mx-auto fade-in-up">
<div className="relative rounded-[2rem] overflow-hidden border border-white/10 p-12 md:p-20 text-center">

<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-[#050505] to-fuchsia-900/40 z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 to-transparent blur-2xl z-0"></div>
<div className="relative z-10 flex flex-col items-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Ready to elevate your ears?</h2>
<p className="text-base text-neutral-400 mb-10 max-w-lg mx-auto">
                            Join thousands of audiophiles. Try Premium free for 1 month. Cancel anytime.
                        </p>
<button className="bg-white text-black px-8 py-4 rounded-full text-sm font-semibold hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                            Get 1 Month Free
                        </button>
<p className="text-xs text-neutral-500 mt-6">Terms and conditions apply.</p>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 pt-16 pb-8 px-6 bg-[#030303] relative z-10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">

<div className="col-span-2 lg:col-span-2">
<a className="text-xl font-semibold tracking-tighter text-white uppercase block mb-4" href="#">
                        AURA
                    </a>
<p className="text-sm text-neutral-500 max-w-xs mb-6">
                        The high-fidelity platform for those who live and breathe sound.
                    </p>
<div className="flex items-center gap-4 text-neutral-400">
<a className="hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:twitter-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:figma-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold tracking-tight text-white mb-4">Product</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Premium</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Spatial Audio</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Download App</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold tracking-tight text-white mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">For Artists</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold tracking-tight text-white mb-4">Support</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
<p className="text-xs text-neutral-500 mb-4 md:mb-0">© 2024 Aura Audio Inc. All rights reserved.</p>
<div className="flex items-center gap-6">
<span className="text-xs text-neutral-500 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span> Systems Operational
                    </span>
</div>
</div>
</div>
</footer>



    </>
  );
}
