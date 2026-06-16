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



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- 1. Background Column Clip Animation ---
            const bgGrid = document.getElementById('bg-grid');
            const colCount = 12; // Mobile/Desktop adjust as needed
            
            for(let i=0; i<colCount; i++){
                const col = document.createElement('div');
                col.className = 'flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col';
                // Stagger delay based on column index
                col.style.transitionDelay = `${i * 0.1}s`;
                bgGrid.appendChild(col);
            }
            
            // Trigger bg animation slightly after load
            setTimeout(() => {
                document.querySelectorAll('.bg-col').forEach(col => col.classList.add('active'));
            }, 100);


            // --- 2. Vertical Text Clip (Letter by Letter) ---
            const verticalTextContainer = document.getElementById('vertical-clip');
            const verticalText = "SYSTEM_ONLINE";
            verticalTextContainer.innerHTML = verticalText.split('').map((char, i) => 
                `<span class="char-drop" style="animation-delay: ${1.0 + (i * 0.05)}s">${char === ' ' ? '&nbsp;' : char}</span>`
            ).join('');


            // --- 3. Hero Heading Word-by-Word Animation (Scroll + Load) ---
            const heading = document.getElementById('hero-heading');
            const headingText = "Animate when in view: fade in, slide in, blur in.";
            
            // Split into words, wrapped in spans
            heading.innerHTML = headingText.split(' ').map((word, i) => {
                return `<span class="inline-block transition-all duration-[1800ms] ease-in-out opacity-0 translate-y-8 blur-md word-anim" style="transition-delay: ${200 + (i * 100)}ms">${word}&nbsp;</span>`
            }).join('');

            const observerOptions = { threshold: 0.1 };
            
            const animateInObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Animate Words
                        if(entry.target.id === 'hero-heading'){
                            const words = entry.target.querySelectorAll('.word-anim');
                            words.forEach(w => {
                                w.classList.remove('opacity-0', 'translate-y-8', 'blur-md');
                                w.classList.add('opacity-100', 'translate-y-0', 'blur-0');
                            });
                        }
                        // Animate Generic Elements
                        else if(entry.target.classList.contains('fade-in-element') || entry.target.classList.contains('scroll-reveal')) {
                            entry.target.classList.remove('opacity-0', 'translate-y-4', 'blur-sm');
                            entry.target.classList.add('opacity-100', 'translate-y-0', 'blur-0');
                        }
                        
                        // Stop observing once animated
                        animateInObserver.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            animateInObserver.observe(heading);
            document.querySelectorAll('.fade-in-element').forEach(el => animateInObserver.observe(el));
            
            // Generic scroll reveal for other sections
            document.querySelectorAll('.scroll-reveal').forEach(el => {
                el.classList.add('opacity-0', 'translate-y-8', 'blur-sm', 'transition-all', 'duration-[1200ms]', 'ease-in-out');
                animateInObserver.observe(el);
            });


            // --- 4. Flashlight Effect ---
            const gridContainer = document.getElementById('flashlight-grid');
            
            gridContainer.addEventListener('mousemove', (e) => {
                const cards = document.querySelectorAll('.flashlight-card');
                cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--x', `${x}px`);
                    card.style.setProperty('--y', `${y}px`);
                });
            });


            // --- 5. Content Switching (3D Cards) ---
            const cards = document.querySelectorAll('.switch-card');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            let activeIndex = 0;

            function updateCards() {
                cards.forEach((card, index) => {
                    // Reset styles
                    card.style.opacity = '0';
                    card.style.zIndex = '0';
                    card.style.transform = 'scale(0.9) translateY(20px)';
                    card.style.pointerEvents = 'none';

                    if (index === activeIndex) {
                        // Active Card
                        card.style.opacity = '1';
                        card.style.zIndex = '30';
                        card.style.transform = 'scale(1) translateY(0)';
                        card.style.pointerEvents = 'auto';
                    } else if (index === (activeIndex + 1) % cards.length) {
                        // Next Card (Behind)
                        card.style.opacity = '0.4';
                        card.style.zIndex = '20';
                        card.style.transform = 'scale(0.95) translateY(10px)';
                    } else {
                        // Previous/Other (Hidden further back)
                         card.style.opacity = '0';
                         card.style.zIndex = '10';
                         card.style.transform = 'scale(0.9) translateY(20px)';
                    }
                });
            }

            nextBtn.addEventListener('click', () => {
                activeIndex = (activeIndex + 1) % cards.length;
                updateCards();
            });

            prevBtn.addEventListener('click', () => {
                activeIndex = (activeIndex - 1 + cards.length) % cards.length;
                updateCards();
            });

            // Initialize cards
            updateCards();

        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 flex w-full h-full pointer-events-none opacity-20" id="bg-grid">

<div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col active" style={{}}></div><div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col active" style={{}}></div><div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col active" style={{}}></div><div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col active" style={{}}></div><div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col active" style={{}}></div><div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col active" style={{}}></div><div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col active" style={{}}></div><div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col active" style={{}}></div><div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col active" style={{}}></div><div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col active" style={{}}></div><div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col active" style={{}}></div><div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col active" style={{}}></div><div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col" style={{transitionDelay: '0s'}}></div><div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col" style={{transitionDelay: '0.1s'}}></div><div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col" style={{transitionDelay: '0.2s'}}></div><div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col" style={{transitionDelay: '0.3s'}}></div><div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col" style={{transitionDelay: '0.4s'}}></div><div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col" style={{transitionDelay: '0.5s'}}></div><div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col" style={{transitionDelay: '0.6s'}}></div><div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col" style={{transitionDelay: '0.7s'}}></div><div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col" style={{transitionDelay: '0.8s'}}></div><div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col" style={{transitionDelay: '0.9s'}}></div><div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col" style={{transitionDelay: '1s'}}></div><div className="flex-1 border-r border-stone-800/30 bg-stone-900/10 h-full bg-col" style={{transitionDelay: '1.1s'}}></div></div>

<nav className="fixed top-0 w-full z-50 border-b border-orange-800 bg-stone-900/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg tracking-tighter font-semibold text-white" href="#">LOGO</a>
<div className="flex items-center gap-6">
<a className="text-sm text-stone-400 hover:text-white transition-colors duration-200" href="#">Product</a>
<a className="text-sm text-stone-400 hover:text-white transition-colors duration-200" href="#">Solutions</a>
<a className="text-sm text-stone-400 hover:text-white transition-colors duration-200" href="#">Pricing</a>

<button className="btn-pill group relative px-4 py-1.5 rounded-full bg-orange-900 overflow-hidden text-sm font-medium text-white border border-orange-800 transition-all hover:bg-orange-800">
<span className="relative z-20">Get Started</span>
<div className="border-beam"></div>
</button>
</div>
</div>
</nav>
<main className="z-10 pt-32 pb-24 relative">

<section className="max-w-5xl mx-auto px-6 mb-32">
<div className="flex flex-col items-start gap-8">

<div className="flex overflow-hidden text-base tracking-widest text-stone-500 uppercase font-medium" id="vertical-clip"><span className="char-drop" style={{animationDelay: '1s'}}>S</span><span className="char-drop" style={{animationDelay: '1.05s'}}>Y</span><span className="char-drop" style={{animationDelay: '1.1s'}}>S</span><span className="char-drop" style={{animationDelay: '1.15s'}}>T</span><span className="char-drop" style={{animationDelay: '1.2s'}}>E</span><span className="char-drop" style={{animationDelay: '1.25s'}}>M</span><span className="char-drop" style={{animationDelay: '1.3s'}}>_</span><span className="char-drop" style={{animationDelay: '1.35s'}}>O</span><span className="char-drop" style={{animationDelay: '1.4s'}}>N</span><span className="char-drop" style={{animationDelay: '1.45s'}}>L</span><span className="char-drop" style={{animationDelay: '1.5s'}}>I</span><span className="char-drop" style={{animationDelay: '1.55s'}}>N</span><span className="char-drop" style={{animationDelay: '1.6s'}}>E</span></div>

<h1 className="text-6xl md:text-7xl font-normal tracking-tight leading-[1.1] text-white max-w-4xl" id="hero-heading"><span className="inline-block transition-all duration-[1800ms] ease-in-out word-anim opacity-100 translate-y-0 blur-0" style={{transitionDelay: '200ms'}}>Animate </span><span className="inline-block transition-all duration-[1800ms] ease-in-out word-anim opacity-100 translate-y-0 blur-0" style={{transitionDelay: '300ms'}}>when </span><span className="inline-block transition-all duration-[1800ms] ease-in-out word-anim opacity-100 translate-y-0 blur-0" style={{transitionDelay: '400ms'}}>in </span><span className="inline-block transition-all duration-[1800ms] ease-in-out word-anim opacity-100 translate-y-0 blur-0" style={{transitionDelay: '500ms'}}>view: </span><span className="inline-block transition-all duration-[1800ms] ease-in-out word-anim opacity-100 translate-y-0 blur-0" style={{transitionDelay: '600ms'}}>fade </span><span className="inline-block transition-all duration-[1800ms] ease-in-out word-anim opacity-100 translate-y-0 blur-0" style={{transitionDelay: '700ms'}}>in, </span><span className="inline-block transition-all duration-[1800ms] ease-in-out word-anim opacity-100 translate-y-0 blur-0" style={{transitionDelay: '800ms'}}>slide </span><span className="inline-block transition-all duration-[1800ms] ease-in-out word-anim opacity-100 translate-y-0 blur-0" style={{transitionDelay: '900ms'}}>in, </span><span className="inline-block transition-all duration-[1800ms] ease-in-out word-anim opacity-100 translate-y-0 blur-0" style={{transitionDelay: '1000ms'}}>blur </span><span className="inline-block transition-all duration-[1800ms] ease-in-out word-anim opacity-100 translate-y-0 blur-0" style={{transitionDelay: '1100ms'}}>in. </span></h1>
<p className="leading-relaxed fade-in-element transition-all duration-[1800ms] ease-in-out text-lg text-stone-400 opacity-100 max-w-xl blur-0 translate-y-0" style={{}}>Crafting digital experiences that feel instantaneous. Precise engineering meets fluid design for the next generation of web interfaces.</p>
<div className="flex gap-4 mt-4 fade-in-element transition-all duration-[1800ms] ease-in-out delay-200 opacity-100 translate-y-0 blur-0">
<button className="group relative px-6 py-3 rounded-full bg-white text-stone-900 font-medium text-sm overflow-hidden transition-transform active:scale-95">
<span className="relative z-10">Start Building</span>
<div className="absolute inset-0 bg-stone-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
</button>
<button className="px-6 py-3 rounded-full border border-orange-800 text-stone-400 font-medium text-sm hover:text-white hover:border-stone-600 transition-colors">
                        Documentation
                    </button>
</div>
</div>
</section>

<section className="w-full border-y border-orange-800 bg-stone-900/50 py-10 mb-32 relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-stone-900 to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-stone-900 to-transparent z-10"></div>
<div className="flex overflow-hidden w-full mask-image-gradient">
<div className="flex animate-marquee gap-16 min-w-full items-center">

<div className="flex gap-16 items-center shrink-0">
<span className="text-xl font-bold tracking-tight text-stone-500">ACME</span>
<span className="text-xl font-bold tracking-tight text-stone-500">APEX</span>
<span className="text-xl font-bold tracking-tight text-stone-500">BOLT</span>
<span className="text-xl font-bold tracking-tight text-stone-500">CRAFT</span>
<span className="text-xl font-bold tracking-tight text-stone-500">ECHO</span>
<span className="text-xl font-bold tracking-tight text-stone-500">FLUX</span>
<span className="text-xl font-bold tracking-tight text-stone-500">ORBIT</span>
</div>

<div className="flex gap-16 items-center shrink-0">
<span className="text-xl font-bold tracking-tight text-stone-500">ACME</span>
<span className="text-xl font-bold tracking-tight text-stone-500">APEX</span>
<span className="text-xl font-bold tracking-tight text-stone-500">BOLT</span>
<span className="text-xl font-bold tracking-tight text-stone-500">CRAFT</span>
<span className="text-xl font-bold tracking-tight text-stone-500">ECHO</span>
<span className="text-xl font-bold tracking-tight text-stone-500">FLUX</span>
<span className="text-xl font-bold tracking-tight text-stone-500">ORBIT</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="mb-16">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-4 scroll-reveal translate-y-8 transition-all duration-[1200ms] ease-in-out opacity-100 translate-y-0 blur-0">Intelligent Grid</h2>
<p className="text-lg text-stone-400 scroll-reveal delay-100 translate-y-8 transition-all duration-[1200ms] ease-in-out opacity-100 translate-y-0 blur-0">Illuminate insights with a hover-responsive interface.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative group/grid" id="flashlight-grid">

<div className="flashlight-card relative h-80 rounded-xl bg-stone-900 border border-orange-800 overflow-hidden p-8 flex flex-col justify-end group hover:border-orange-700/50 transition-colors">

<div className="glow absolute inset-0 opacity-0 group-hover/grid:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.06), transparent 40%)'}}></div>
<div className="border-glow absolute inset-0 opacity-0 group-hover/grid:opacity-100 transition-opacity duration-500 pointer-events-none z-10" style={{background: 'radial-gradient(400px circle at var(--x) var(--y), rgba(255,255,255,0.15), transparent 40%)', maskImage: 'linear-gradient(black, black), linear-gradient(black, black)', maskClip: 'content-box, border-box', maskComposite: 'exclude', padding: '1px'}}></div>
<iconify-icon className="text-stone-500 mb-auto" icon="solar:code-circle-linear" width="40"></iconify-icon>
<h3 className="text-xl text-white mb-2 font-medium tracking-tight">Optimized Code</h3>
<p className="text-sm text-stone-400 leading-relaxed">Engineered for maximum performance with minimal overhead using modern standards.</p>
</div>

<div className="flashlight-card relative h-80 rounded-xl bg-stone-900 border border-orange-800 overflow-hidden p-8 flex flex-col justify-end group hover:border-orange-700/50 transition-colors">
<div className="glow absolute inset-0 opacity-0 group-hover/grid:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.06), transparent 40%)'}}></div>
<div className="border-glow absolute inset-0 opacity-0 group-hover/grid:opacity-100 transition-opacity duration-500 pointer-events-none z-10" style={{background: 'radial-gradient(400px circle at var(--x) var(--y), rgba(255,255,255,0.15), transparent 40%)', maskImage: 'linear-gradient(black, black), linear-gradient(black, black)', maskClip: 'content-box, border-box', maskComposite: 'exclude', padding: '1px'}}></div>
<iconify-icon className="text-stone-500 mb-auto" icon="solar:graph-up-linear" width="40"></iconify-icon>
<h3 className="text-xl text-white mb-2 font-medium tracking-tight">Real-time Analytics</h3>
<p className="text-sm text-stone-400 leading-relaxed">Visualize data streams instantly with our high-fidelity rendering engine.</p>
</div>

<div className="flashlight-card relative h-80 rounded-xl bg-stone-900 border border-orange-800 overflow-hidden p-8 flex flex-col justify-end group hover:border-orange-700/50 transition-colors">
<div className="glow absolute inset-0 opacity-0 group-hover/grid:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.06), transparent 40%)'}}></div>
<div className="border-glow absolute inset-0 opacity-0 group-hover/grid:opacity-100 transition-opacity duration-500 pointer-events-none z-10" style={{background: 'radial-gradient(400px circle at var(--x) var(--y), rgba(255,255,255,0.15), transparent 40%)', maskImage: 'linear-gradient(black, black), linear-gradient(black, black)', maskClip: 'content-box, border-box', maskComposite: 'exclude', padding: '1px'}}></div>
<iconify-icon className="text-stone-500 mb-auto" icon="solar:shield-check-linear" width="40"></iconify-icon>
<h3 className="text-xl text-white mb-2 font-medium tracking-tight">Secure by Design</h3>
<p className="text-sm text-stone-400 leading-relaxed">Enterprise-grade security protocols embedded directly into the core infrastructure.</p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32 flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/3">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-6 scroll-reveal translate-y-8 transition-all duration-[1200ms] ease-in-out opacity-0 blur-sm">Workflow Evolution</h2>
<p className="text-stone-400 mb-8 scroll-reveal delay-100 translate-y-8 transition-all duration-[1200ms] ease-in-out opacity-0 blur-sm">Cycle through the stages of development with fluid transitions.</p>
<div className="flex gap-4 scroll-reveal delay-200 translate-y-8 transition-all duration-[1200ms] ease-in-out opacity-0 blur-sm">
<button className="w-12 h-12 rounded-full border border-orange-800 flex items-center justify-center text-white hover:bg-orange-800 transition-colors" id="prev-btn">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-orange-800 flex items-center justify-center text-white hover:bg-orange-800 transition-colors" id="next-btn">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
</div>
<div className="w-full md:w-2/3 perspective-[1200px] h-[400px] relative flex items-center justify-center">

<div className="relative w-full h-full" id="card-stack">


<div className="switch-card absolute inset-0 w-full h-full bg-orange-900 border border-orange-800 rounded-2xl p-10 flex flex-col justify-between shadow-2xl z-30 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-bottom" data-index="0" style={{opacity: '1', zIndex: '30', transform: 'scale(1) translateY(0px)', pointerEvents: 'auto'}}>
<div className="flex justify-between items-start">
<div className="p-3 bg-stone-800 rounded-lg inline-flex">
<iconify-icon className="text-white" icon="solar:layers-minimalistic-linear" width="28"></iconify-icon>
</div>
<span className="text-xs font-mono text-stone-500">01 / DESIGN</span>
</div>
<div>
<h3 className="text-2xl text-white mb-3 font-medium">Atomic Design Systems</h3>
<p className="text-stone-400">Build consistent interfaces with a library of reusable components.</p>
</div>
<div className="h-32 w-full bg-gradient-to-br from-stone-800 to-transparent rounded-lg mt-4 border border-white/5"></div>
</div>

<div className="switch-card absolute inset-0 w-full h-full bg-orange-900 border border-orange-800 rounded-2xl p-10 flex flex-col justify-between shadow-2xl z-20 opacity-0 scale-95 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-bottom" data-index="1" style={{pointerEvents: 'none', opacity: '0.4', zIndex: '20', transform: 'scale(0.95) translateY(10px)'}}>
<div className="flex justify-between items-start">
<div className="p-3 bg-stone-800 rounded-lg inline-flex">
<iconify-icon className="text-white" icon="solar:widget-linear" width="28"></iconify-icon>
</div>
<span className="text-xs font-mono text-stone-500">02 / DEVELOP</span>
</div>
<div>
<h3 className="text-2xl text-white mb-3 font-medium">Component Architecture</h3>
<p className="text-stone-400">Rapidly assemble complex layouts using our intuitive API.</p>
</div>
<div className="h-32 w-full rounded-lg mt-4 border border-white/5 bg-gradient-to-br from-white/10 via-white/0 to-white/10"></div>
</div>

<div className="switch-card absolute inset-0 w-full h-full bg-orange-900 border border-orange-800 rounded-2xl p-10 flex flex-col justify-between shadow-2xl z-10 opacity-0 scale-90 translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-bottom" data-index="2" style={{pointerEvents: 'none', opacity: '0', zIndex: '10', transform: 'scale(0.9) translateY(20px)'}}>
<div className="flex justify-between items-start">
<div className="p-3 bg-stone-800 rounded-lg inline-flex">
<iconify-icon className="text-white" icon="solar:rocket-linear" width="28"></iconify-icon>
</div>
<span className="text-xs font-mono text-stone-500">03 / DEPLOY</span>
</div>
<div>
<h3 className="text-2xl text-white mb-3 font-medium">Global Edge Network</h3>
<p className="text-stone-400">Push to production instantly with zero-configuration deployments.</p>
</div>
<div className="h-32 w-full bg-gradient-to-br from-stone-800 to-transparent rounded-lg mt-4 border border-white/5"></div>
</div>
</div>
</div>
</section>

<section className="mb-32">
<div className="max-w-7xl mx-auto px-6 mb-12">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white scroll-reveal translate-y-8 transition-all duration-[1200ms] ease-in-out opacity-0 blur-sm">Community Feedback</h2>
</div>
<div className="w-full relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-stone-900 to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-stone-900 to-transparent z-10"></div>
<div className="flex overflow-hidden w-full">
<div className="flex animate-marquee gap-6 min-w-full pb-4">

<div className="w-80 h-48 shrink-0 bg-stone-900 border border-orange-800 rounded-xl p-6 flex flex-col justify-between">
<p className="text-stone-300 text-sm leading-relaxed">"The attention to detail in the animations is simply unparalleled. It feels alive."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-700"></div>
<div className="text-xs"><div className="text-white font-medium">Alex Chen</div><div className="text-stone-500">Frontend Lead</div></div>
</div>
</div>
<div className="w-80 h-48 shrink-0 bg-stone-900 border border-orange-800 rounded-xl p-6 flex flex-col justify-between">
<p className="text-stone-300 text-sm leading-relaxed">"Dark mode implementation that actually respects contrast ratios. Brilliant work."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-700"></div>
<div className="text-xs"><div className="text-white font-medium">Sarah Miller</div><div className="text-stone-500">Product Designer</div></div>
</div>
</div>
<div className="w-80 h-48 shrink-0 bg-stone-900 border border-orange-800 rounded-xl p-6 flex flex-col justify-between">
<p className="text-stone-300 text-sm leading-relaxed">"A masterclass in minimalist design. The performance metrics are off the charts."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-700"></div>
<div className="text-xs"><div className="text-white font-medium">James Ross</div><div className="text-stone-500">CTO</div></div>
</div>
</div>
<div className="w-80 h-48 shrink-0 bg-stone-900 border border-orange-800 rounded-xl p-6 flex flex-col justify-between">
<p className="text-stone-300 text-sm leading-relaxed">"Finally, a UI kit that doesn't feel like everything else. It has soul."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-700"></div>
<div className="text-xs"><div className="text-white font-medium">Elena K.</div><div className="text-stone-500">Developer</div></div>
</div>
</div>

<div className="w-80 h-48 shrink-0 bg-stone-900 border border-orange-800 rounded-xl p-6 flex flex-col justify-between">
<p className="text-stone-300 text-sm leading-relaxed">"The attention to detail in the animations is simply unparalleled. It feels alive."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-700"></div>
<div className="text-xs"><div className="text-white font-medium">Alex Chen</div><div className="text-stone-500">Frontend Lead</div></div>
</div>
</div>
<div className="w-80 h-48 shrink-0 bg-stone-900 border border-orange-800 rounded-xl p-6 flex flex-col justify-between">
<p className="text-stone-300 text-sm leading-relaxed">"Dark mode implementation that actually respects contrast ratios. Brilliant work."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-700"></div>
<div className="text-xs"><div className="text-white font-medium">Sarah Miller</div><div className="text-stone-500">Product Designer</div></div>
</div>
</div>
<div className="w-80 h-48 shrink-0 bg-stone-900 border border-orange-800 rounded-xl p-6 flex flex-col justify-between">
<p className="text-stone-300 text-sm leading-relaxed">"A masterclass in minimalist design. The performance metrics are off the charts."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-700"></div>
<div className="text-xs"><div className="text-white font-medium">James Ross</div><div className="text-stone-500">CTO</div></div>
</div>
</div>
<div className="w-80 h-48 shrink-0 bg-stone-900 border border-orange-800 rounded-xl p-6 flex flex-col justify-between">
<p className="text-stone-300 text-sm leading-relaxed">"Finally, a UI kit that doesn't feel like everything else. It has soul."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-700"></div>
<div className="text-xs"><div className="text-white font-medium">Elena K.</div><div className="text-stone-500">Developer</div></div>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="border-t border-orange-800 py-12 bg-stone-900">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-stone-500 text-xs">
<p>© 2023 Minimalist Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>
</main>


    </>
  );
}
