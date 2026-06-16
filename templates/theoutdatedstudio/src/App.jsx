import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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



        lucide.createIcons();

        // --- Feature 1: Functional Copy Email Button ---
        function copyEmail(btn) {
            const email = "studio@vistora.com";
            navigator.clipboard.writeText(email).then(() => {
                const textSpan = btn.querySelector('.btn-text');
                const icon = btn.querySelector('.copy-icon');
                const originalText = textSpan.innerText;
                
                // Visual feedback
                textSpan.innerText = "Copied!";
                textSpan.classList.add('text-emerald-500');
                btn.classList.add('border-emerald-200', 'bg-emerald-50');
                
                setTimeout(() => {
                    textSpan.innerText = originalText;
                    textSpan.classList.remove('text-emerald-500');
                    btn.classList.remove('border-emerald-200', 'bg-emerald-50');
                }, 2000);
            });
        }

        // --- Feature 2: Project Filtering System ---
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projects = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update buttons
                filterBtns.forEach(b => {
                    b.classList.remove('bg-gray-900', 'text-white');
                    b.classList.add('text-gray-500');
                });
                btn.classList.remove('text-gray-500');
                btn.classList.add('bg-gray-900', 'text-white');

                // Filter items
                const category = btn.getAttribute('data-filter');
                projects.forEach(project => {
                    if (category === 'all' || project.getAttribute('data-category') === category) {
                        project.style.display = 'block';
                        // Add slight animation
                        project.animate([
                            { opacity: 0, transform: 'translateY(10px)' },
                            { opacity: 1, transform: 'translateY(0)' }
                        ], { duration: 300, fill: 'forwards' });
                    } else {
                        project.style.display = 'none';
                    }
                });
            });
        });

        // --- Feature 3: Spotlight Hover Effect ---
        const spotlightCards = document.querySelectorAll('.spotlight-card');
        spotlightCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // --- Feature 4: Live UTC Clock ---
        function updateClock() {
            const now = new Date();
            const timeString = now.toUTCString().split(' ')[4].substring(0, 5);
            document.getElementById('clock').innerText = `${timeString} UTC`;
        }
        setInterval(updateClock, 1000);
        updateClock();

        // --- Feature 5: Scroll Spy Navigation ---
        const sections = document.querySelectorAll('div[id]');
        const navLinks = document.querySelectorAll('.nav-item');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - 300)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('bg-gray-900', 'text-white');
                link.classList.add('hover:text-gray-900', 'hover:bg-gray-100'); 
                if (link.getAttribute('data-target') === current) {
                    link.classList.remove('hover:text-gray-900', 'hover:bg-gray-100');
                    link.classList.add('bg-gray-900', 'text-white');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 animate-fade-up">
<nav className="glass-nav border border-gray-200/60 rounded-full pl-6 pr-2 py-2 flex items-center gap-8 shadow-sm hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300">
<a className="group flex items-center gap-2 text-sm text-gray-900 hover:text-rose-600 transition-colors" href="#">
<span className="text-2xl font-bold tracking-tight font-serif">Outdated</span>
</a>
<div className="hidden md:flex items-center gap-1 text-sm font-montserrat font-medium text-gray-500" id="nav-links">
<a className="px-4 py-2 rounded-full transition-all nav-item" data-target="work" href="#work">Selected Work</a>
<a className="px-4 py-2 rounded-full transition-all nav-item" data-target="about" href="#about">Studio</a>
<a className="transition-all nav-item rounded-full pt-2 pr-4 pb-2 pl-4" data-target="toolkit" href="#toolkit">Toolkit</a>
</div>
<div className="flex items-center gap-3">
<div className="hidden lg:block h-4 w-px bg-gray-200"></div>
<div className="hidden lg:block text-xs font-mono text-gray-400 w-16" id="clock">13:41 UTC</div>
<a className="group bg-gray-900 text-white text-xs tracking-wide uppercase px-5 py-3 rounded-full hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-600/30 transition-all duration-300 flex items-center gap-2 font-montserrat font-bold" href="#contact">
                    Book Studio
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</nav>
</div>

<main className="max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6">

<div className="bg-white rounded-[2.5rem] p-8 md:p-14 lg:p-16 shadow-[0_2px_40px_-10px_rgba(0,0,0,0.02)] border border-gray-100 relative overflow-hidden group transition-all duration-700 hover:shadow-[0_20px_80px_-20px_rgba(225,29,72,0.1)]">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

<div className="lg:col-span-7 flex flex-col justify-center">
<div className="animate-fade-up delay-100 w-fit inline-flex items-center gap-3 bg-gray-50/80 backdrop-blur border border-gray-100 text-gray-600 px-3 py-1.5 rounded-full shadow-sm hover:border-rose-200 hover:bg-white transition-all cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-[10px] font-bold tracking-widest uppercase font-montserrat text-gray-500">Open for Commissions</span>
</div>
<h1 className="animate-fade-up delay-200 md:text-7xl lg:text-[5.5rem] leading-[0.9] text-6xl text-gray-900 tracking-tighter mt-8 mb-8">
<span className="serif-font font-light italic text-gray-400" style={{}}>Shaping</span> <br/>
                        Visual 
                        <span className="inline-block relative" style={{}}>Narratives <svg className="absolute w-full h-3 -bottom-1 left-0 text-rose-500 opacity-80" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
</svg></span>
</h1>
<p className="animate-fade-up delay-300 text-lg text-gray-500 leading-relaxed max-w-lg mb-10 font-montserrat font-medium">
                        I specialize in <span className="text-gray-900 font-semibold underline decoration-rose-200 decoration-2 underline-offset-2">Brand Identity</span> and <span className="text-gray-900 font-semibold underline decoration-orange-200 decoration-2 underline-offset-2">Editorial Design</span>, creating timeless systems that communicate without words.
                    </p>
<div className="animate-fade-up delay-500 flex flex-wrap gap-4 items-center">
<a className="bg-gray-900 text-white pl-8 pr-6 py-4 rounded-full text-sm hover:bg-rose-600 hover:shadow-xl hover:shadow-rose-600/20 transition-all duration-300 flex items-center gap-3 font-montserrat font-semibold group/btn" href="#work">
                            View Portfolio
                            <div className="bg-white/10 rounded-full p-1 group-hover/btn:bg-white/20 transition-colors">
<svg className="w-3 h-3 group-hover/btn:-rotate-45 transition-transform duration-300" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</a>

<button className="bg-white border border-gray-200 text-gray-600 px-6 py-4 rounded-full text-sm hover:border-gray-300 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 font-montserrat font-semibold flex items-center gap-2 group/copy" onclick="copyEmail(this)">
<span className="btn-text">Copy Email</span>
<svg className="w-3.5 h-3.5 text-gray-400 group-hover/copy:text-rose-500 transition-colors copy-icon" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect>
<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
</svg>
</button>
</div>
</div>

<div className="lg:col-span-5 relative h-[500px] w-full animate-slide-in delay-300 perspective-1000">
<div className="relative h-full w-full bg-gray-50 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 z-10 group/image transition-transform duration-700 hover:rotate-y-6 hover:rotate-x-3 transform-gpu preserve-3d">

<img alt="Print Design Mockups" className="w-full h-full object-cover opacity-90 transition-all duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-white/50 w-56 animate-bounce" style={{animationDuration: '4s'}}>
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-orange-100 rounded-lg text-orange-600">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Latest Release</div>
<div className="text-xs font-bold text-gray-900">Typeface: Neue Vistora</div>
</div>
</div>
<div className="flex items-center gap-1 mt-2">
<span className="h-6 w-6 rounded-full bg-gray-900 flex items-center justify-center text-white text-[10px]">Aa</span>
<span className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 font-serif italic text-[10px]">Gg</span>
<span className="h-6 w-6 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold text-[10px]">24</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full py-16 mt-4 overflow-hidden marquee-mask relative group">
<div className="flex w-fit animate-infinite-scroll group-hover:[animation-play-state:paused]">

<div className="flex items-center gap-20 px-10">
<span className="text-2xl font-instrument font-medium italic text-gray-300 hover:text-gray-900 transition-colors cursor-pointer">Vogue</span>
<span className="text-2xl font-instrument font-medium italic text-gray-300 hover:text-gray-900 transition-colors cursor-pointer">Aesop</span>
<span className="text-2xl font-instrument font-medium italic text-gray-300 hover:text-gray-900 transition-colors cursor-pointer">Kinfolk</span>
<span className="text-2xl font-instrument font-medium italic text-gray-300 hover:text-gray-900 transition-colors cursor-pointer">MoMA</span>
<span className="text-2xl font-instrument font-medium italic text-gray-300 hover:text-gray-900 transition-colors cursor-pointer">Acne Studios</span>
<span className="text-2xl font-instrument font-medium italic text-gray-300 hover:text-gray-900 transition-colors cursor-pointer">Monotype</span>
<span className="text-2xl font-instrument font-medium italic text-gray-300 hover:text-gray-900 transition-colors cursor-pointer">Herman Miller</span>

<span className="text-2xl font-instrument font-medium italic text-gray-300 hover:text-gray-900 transition-colors cursor-pointer">Vogue</span>
<span className="text-2xl font-instrument font-medium italic text-gray-300 hover:text-gray-900 transition-colors cursor-pointer">Aesop</span>
<span className="text-2xl font-instrument font-medium italic text-gray-300 hover:text-gray-900 transition-colors cursor-pointer">Kinfolk</span>
<span className="text-2xl font-instrument font-medium italic text-gray-300 hover:text-gray-900 transition-colors cursor-pointer">MoMA</span>
<span className="text-2xl font-instrument font-medium italic text-gray-300 hover:text-gray-900 transition-colors cursor-pointer">Acne Studios</span>
<span className="text-2xl font-instrument font-medium italic text-gray-300 hover:text-gray-900 transition-colors cursor-pointer">Monotype</span>
<span className="text-2xl font-instrument font-medium italic text-gray-300 hover:text-gray-900 transition-colors cursor-pointer">Herman Miller</span>
</div>
</div>
</div>

<div className="py-24 scroll-mt-24" id="work">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="">
<h2 className="text-4xl md:text-5xl tracking-tight text-gray-900 font-montserrat font-semibold mb-4">
                        Curated Work
                    </h2>
<p className="text-gray-500 font-montserrat font-medium">A selection of identities, print, and digital experiences.</p>
</div>

<div className="flex bg-white p-1.5 rounded-full border border-gray-200 shadow-sm">
<button className="filter-btn active px-5 py-2 rounded-full text-xs font-bold font-montserrat transition-all bg-gray-900 text-white" data-filter="all">All</button>
<button className="filter-btn px-5 py-2 rounded-full text-xs font-bold font-montserrat text-gray-500 hover:bg-gray-50 transition-all" data-filter="branding">Identity</button>
<button className="filter-btn px-5 py-2 rounded-full text-xs font-bold font-montserrat text-gray-500 hover:bg-gray-50 transition-all" data-filter="print">Editorial</button>
</div>
</div>
<div className="flex flex-col gap-8 max-w-5xl mx-auto relative" id="project-container">

<div className="project-card group sticky top-24 spotlight-card bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500" data-category="branding" style={{-MouseX: '877px', -MouseY: '140px'}}>
<div className="relative z-10">
<div className="flex justify-between items-start mb-12">
<div className="flex gap-2">
<span className="text-[10px] font-bold tracking-wider uppercase font-montserrat bg-stone-100 text-stone-600 px-3 py-1.5 rounded-full">
                                    Rebranding
                                </span>
</div>
<a className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-gray-900 text-white p-3 rounded-full hover:bg-stone-600" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><line x1="7" x2="17" y1="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
</a>
</div>
<div className="grid md:grid-cols-2 gap-12 items-end">
<div className="">
<h3 className="text-3xl text-gray-900 mb-4 font-montserrat font-bold group-hover:text-stone-500 transition-colors">
                                    Lumina Gallery
                                </h3>
<p className="text-gray-500 mb-6 font-montserrat text-sm leading-relaxed">
                                    A contemporary identity system for a modern art space. Focusing on negative space and swiss-style typography to let the art breathe.
                                </p>
<div className="flex gap-3 text-xs font-semibold text-gray-400 font-mono">
<span className="">01. Logo Design</span>
<span>02. Art Direction</span>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm group-hover:scale-105 transition-transform duration-500 origin-bottom-right">

<img alt="Preview" className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>

<div className="project-card group sticky top-32 spotlight-card bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500" data-category="print" style={{-MouseX: '889px', -MouseY: '86px'}}>
<div className="relative z-10">
<div className="flex justify-between items-start mb-12">
<div className="flex gap-2">
<span className="text-[10px] font-bold tracking-wider uppercase font-montserrat bg-rose-50 text-rose-600 px-3 py-1.5 rounded-full">
                                    Editorial
                                </span>
</div>
<a className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-gray-900 text-white p-3 rounded-full hover:bg-rose-600" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><line x1="7" x2="17" y1="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
</a>
</div>
<div className="grid md:grid-cols-2 gap-12 items-end">
<div className="">
<h3 className="text-3xl text-gray-900 mb-4 font-montserrat font-bold group-hover:text-rose-600 transition-colors">
                                    Archive No. 4
                                </h3>
<p className="text-gray-500 mb-6 font-montserrat text-sm leading-relaxed">
                                    Layout design and typesetting for a limited edition fashion anthology. Exploring experimental grids and serif pairing.
                                </p>
<div className="flex gap-3 text-xs font-semibold text-gray-400 font-mono">
<span className="">01. InDesign</span>
<span>02. Typesetting</span>
<span>03. Print</span>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm group-hover:scale-105 transition-transform duration-500 origin-bottom-right">

<img alt="Preview" className="group-hover:opacity-100 transition-opacity opacity-90 w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1440be31-3f57-4646-bc4b-a7e839d858e4_1600w.webp"/>
</div>
</div>
</div>
</div>

<div className="project-card group sticky top-40 spotlight-card bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500" data-category="branding" style={{-MouseX: '903px', -MouseY: '5px'}}>
<div className="relative z-10">
<div className="flex justify-between items-start mb-12">
<div className="flex gap-2">
<span className="text-[10px] font-bold tracking-wider uppercase font-montserrat bg-orange-50 text-orange-600 px-3 py-1.5 rounded-full">
                                    Packaging
                                </span>
</div>
<a className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-gray-900 text-white p-3 rounded-full hover:bg-orange-500" href="#">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><line x1="7" x2="17" y1="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
</a>
</div>
<div className="grid md:grid-cols-2 gap-12 items-end">
<div className="">
<h3 className="text-3xl text-gray-900 mb-4 font-montserrat font-bold group-hover:text-orange-500 transition-colors">
                                    Solis Organics
                                </h3>
<p className="text-gray-500 mb-6 font-montserrat text-sm leading-relaxed">
                                    Sustainable packaging design system using embossed textures and earthly color palettes. Winner of the 2024 Pentaward.
                                </p>
<div className="flex gap-3 text-xs font-semibold text-gray-400 font-mono">
<span>01. Packaging</span>
<span>02. 3D Render</span>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm group-hover:scale-105 transition-transform duration-500 origin-bottom-right">

<img alt="Preview" className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="py-24 grid lg:grid-cols-2 gap-20 items-center scroll-mt-24" id="about">

<div className="order-2 lg:order-1">
<h2 className="text-4xl md:text-5xl mb-12 tracking-tight text-gray-900 font-montserrat font-semibold">
                    The Person Behind <br/> The <span className="text-rose-500 italic font-serif">Process</span>
</h2>
<div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
<p className="font-montserrat">
                        Hi, I'm <span className="font-semibold text-gray-900" style={{}}>Sam</span>. I translate core values into visual language.
                    </p>
<p className="font-montserrat">
                        My philosophy is simple: <span className="italic text-gray-800">Design is intelligence made visible.</span> I move beyond trends to create robust identity systems that stand the test of time, blending precise grid systems with expressive typography.
                    </p>

<div className="flex gap-12 pt-8 border-t border-gray-100 mt-8">
<div>
<div className="text-3xl font-bold text-gray-900 font-montserrat">8+</div>
<div className="text-xs text-gray-400 uppercase tracking-widest font-semibold mt-1">Years Exp</div>
</div>
<div>
<div className="text-3xl font-bold text-gray-900 font-montserrat">60+</div>
<div className="text-xs text-gray-400 uppercase tracking-widest font-semibold mt-1">Brand Guides</div>
</div>
<div>
<div className="text-3xl font-bold text-gray-900 font-montserrat">12</div>
<div className="text-xs text-gray-400 uppercase tracking-widest font-semibold mt-1">Awards</div>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative h-[500px] flex items-center justify-center group/polaroid cursor-crosshair">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-100/40 via-white to-transparent rounded-full filter blur-3xl opacity-60 animate-pulse"></div>

<div className="absolute w-64 bg-white p-3 pb-8 shadow-[0_10px_30px_rgba(0,0,0,0.1)] -rotate-6 z-10 rounded hover:rotate-0 hover:z-30 hover:scale-110 transition-all duration-500 ease-out border border-gray-100">
<img alt="Process" className="w-full h-64 object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1626785774583-ea261e96f054?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<p className="absolute bottom-2 left-3 font-instrument italic text-gray-400 text-sm">Sketching</p>
</div>

<div className="absolute w-64 bg-white p-3 pb-8 shadow-[0_10px_30px_rgba(0,0,0,0.1)] rotate-6 z-20 rounded hover:rotate-0 hover:z-30 hover:scale-110 transition-all duration-500 ease-out border border-gray-100">
<img alt="Print" className="w-full h-64 object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<p className="absolute bottom-2 left-3 font-instrument italic text-gray-400 text-sm">Typography</p>
</div>

<div className="absolute z-40 bg-gray-900 text-white w-16 h-16 flex items-center justify-center rounded-full font-bold text-xs rotate-12 shadow-lg border-2 border-white pointer-events-none">
                    Hello!
                </div>
</div>
</div>

<div className="py-24 border-t border-gray-200 scroll-mt-24" id="toolkit">
<h2 className="text-4xl md:text-5xl text-center mb-16 tracking-tight text-gray-900 font-montserrat font-semibold">
                Creative Toolkit
            </h2>
<div className="grid md:grid-cols-2 gap-6">

<div className="spotlight-card group bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 shadow-sm transition-all h-full flex flex-col justify-between" style={{-MouseX: '497px', -MouseY: '231px'}}>
<div className="relative z-10">
<div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-gray-900 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="text-xl font-bold font-montserrat text-gray-900 mb-2">Visual Design</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-6">Expert command of vector illustration, photo manipulation, and print layout.</p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-2 py-1 bg-gray-50 text-gray-600 text-[11px] font-bold uppercase rounded border border-gray-100">Illustrator</span>
<span className="px-2 py-1 bg-gray-50 text-gray-600 text-[11px] font-bold uppercase rounded border border-gray-100">Photoshop</span>
<span className="px-2 py-1 bg-gray-50 text-gray-600 text-[11px] font-bold uppercase rounded border border-gray-100">InDesign</span>
</div>
</div>
</div>

<div className="spotlight-card group bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 shadow-sm transition-all h-full flex flex-col justify-between">
<div className="relative z-10">
<div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-gray-900 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3V2"></path><path d="M5 10a7 7 0 0 0 14 0"></path><path d="M12 10v12"></path></svg>
</div>
<h3 className="text-xl font-bold font-montserrat text-gray-900 mb-2">Motion &amp; 3D</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-6">Bringing brands to life through kinetic typography and product rendering.</p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-2 py-1 bg-gray-50 text-gray-600 text-[11px] font-bold uppercase rounded border border-gray-100">After Effects</span>
<span className="px-2 py-1 bg-gray-50 text-gray-600 text-[11px] font-bold uppercase rounded border border-gray-100">Blender</span>
<span className="px-2 py-1 bg-gray-50 text-gray-600 text-[11px] font-bold uppercase rounded border border-gray-100">Cinema 4D</span>
<span className="px-2 py-1 bg-gray-50 text-gray-600 text-[11px] font-bold uppercase rounded border border-gray-100">Rive</span>
</div>
</div>
</div>
</div>
</div>

<div className="py-20 bg-gray-900 rounded-[3rem] text-center relative overflow-hidden group" id="contact">

<div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-gray-900 opacity-30 w-full h-full absolute top-0 left-0"></div>
<div className="relative z-10 px-6">
<h2 className="text-3xl md:text-5xl mb-6 tracking-tight text-white font-montserrat font-bold">
                    Ready to define your <br/> <span className="text-rose-500">legacy?</span>
</h2>
<p className="text-gray-400 text-base mb-10 max-w-xl mx-auto font-montserrat">
                    Accepting new brand identity commissions for Q4 2025.
                </p>

<div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm p-1.5 pl-5 rounded-full flex items-center border border-white/10 focus-within:border-rose-500/50 focus-within:bg-white/15 transition-all">
<input className="bg-transparent border-none outline-none text-white w-full placeholder-gray-400 font-montserrat text-sm" placeholder="enter your email..." type="email"/>
<button className="bg-white text-gray-900 hover:bg-rose-500 hover:text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors">
                        Inquire
                    </button>
</div>
<div className="flex justify-center gap-8 mt-16 text-gray-400 text-xs font-bold uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#">Behance</a>
<a className="hover:text-white transition-colors" href="#">Dribbble</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
<p className="text-gray-600 text-xs mt-8 font-montserrat">© 2025 Vistora Studio. All Rights Reserved.</p>
</div>
</div>
</main>


    </>
  );
}
