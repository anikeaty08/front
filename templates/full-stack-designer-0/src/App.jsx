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
            // 1. Initial Curtain & Hero Animation
            const curtain = document.getElementById('curtain');
            const svgContainer = document.getElementById('svg-container');
            
            setTimeout(() => {
                curtain.classList.add('curtain-active');
                setTimeout(() => { 
                    if(svgContainer) svgContainer.classList.add('draw-active'); 
                }, 800);
            }, 500);

            // 2. MENU TOGGLE LOGIC
            const menuOverlay = document.getElementById('menu-overlay');
            const openMenuBtn = document.getElementById('open-menu');
            const closeMenuBtn = document.getElementById('close-menu');

            function toggleMenu() {
                menuOverlay.classList.toggle('menu-open');
                if (menuOverlay.classList.contains('menu-open')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            }
            
            // Expose function for inline onclick
            window.closeMenu = function() {
                menuOverlay.classList.remove('menu-open');
                document.body.style.overflow = '';
            }

            if(openMenuBtn) openMenuBtn.addEventListener('click', toggleMenu);
            if(closeMenuBtn) closeMenuBtn.addEventListener('click', toggleMenu);

            // 3. Timeline Animation Logic
            const processSection = document.getElementById('process');
            const timelineProgress = document.getElementById('timeline-progress');
            const steps = document.querySelectorAll('.timeline-step');
            const track = document.getElementById('timeline-track');

            function updateTimeline() {
                if (!processSection || !timelineProgress || !track) return;

                const rect = track.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                const viewportCenter = windowHeight / 2;
                const distFromTop = viewportCenter - rect.top;
                const totalHeight = rect.height;

                let percentage = (distFromTop / totalHeight) * 100;
                percentage = Math.max(0, Math.min(percentage, 100));
                
                timelineProgress.style.height = `${percentage}%`;

                steps.forEach((step) => {
                    const dot = step.querySelector('.timeline-dot');
                    const inner = step.querySelector('.dot-inner');
                    const stepRect = step.getBoundingClientRect();
                    
                    if (stepRect.top < viewportCenter) {
                        dot.style.borderColor = '#fff';
                        dot.style.backgroundColor = '#fff';
                        dot.style.boxShadow = '0 0 15px rgba(255,255,255,0.6)';
                        inner.style.backgroundColor = '#000';
                    } else {
                        dot.style.borderColor = '#262626';
                        dot.style.backgroundColor = '#000';
                        dot.style.boxShadow = 'none';
                        inner.style.backgroundColor = '#525252';
                    }
                });
            }

            window.addEventListener('scroll', updateTimeline);
            window.addEventListener('resize', updateTimeline);

            // 4. Spotlight Effect (Enhanced for Glass Cards)
            const grid = document.getElementById('spotlight-grid');
            const cards = document.querySelectorAll('.spotlight-card');

            if (grid) {
                grid.addEventListener('mousemove', (e) => {
                    cards.forEach((card) => {
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;

                        // Used for internal spotlight glow if needed via CSS variables
                        card.style.setProperty('--mouse-x', `${x}px`);
                        card.style.setProperty('--mouse-y', `${y}px`);
                    });
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-0"></div>

<div className="glow-blob bg-blue-600 w-[500px] h-[500px] -top-20 -right-20 animate-pulse" style={{animationDuration: '10s'}}></div>

<div className="glow-blob bg-fuchsia-600 w-[600px] h-[600px] -bottom-40 -left-20 opacity-20"></div>

<div className="glow-blob bg-cyan-500 w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"></div>
</div>

<div className="fixed inset-0 z-[100] flex w-full h-full pointer-events-none" id="curtain">
<div className="panel w-1/5 h-full bg-neutral-950 border-r border-neutral-900" style={{-I: '0'}}></div>
<div className="panel w-1/5 h-full bg-neutral-950 border-r border-neutral-900" style={{-I: '1'}}></div>
<div className="panel w-1/5 h-full bg-neutral-950 border-r border-neutral-900" style={{-I: '2'}}></div>
<div className="panel w-1/5 h-full bg-neutral-950 border-r border-neutral-900" style={{-I: '3'}}></div>
<div className="panel w-1/5 h-full bg-neutral-950" style={{-I: '4'}}></div>
</div>

<div className="fixed inset-0 z-[90] bg-[#080808] flex flex-col" id="menu-overlay">
<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neutral-800/40 via-[#050505] to-[#050505]"></div>
</div>
<div className="relative z-10 w-full px-6 py-6 flex justify-between items-center border-b border-neutral-900">
<div className="uppercase tracking-tighter text-sm font-medium text-white">AM—Studio</div>
<button className="text-white hover:text-neutral-400 transition-colors" id="close-menu">
<span className="iconify w-8 h-8" data-icon="lucide:x" data-width="32"></span>
</button>
</div>
<div className="relative z-10 flex flex-col md:flex-row flex-1 w-full max-w-7xl mx-auto p-6 md:p-12 items-center">
<div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 md:space-y-8 pl-4 md:pl-0">
<a className="menu-link block text-5xl md:text-7xl font-medium text-neutral-400 hover:text-white transition-all hover:translate-x-4 cursor-pointer" href="#work" onclick="closeMenu()" style={{transitionDelay: '100ms'}}>Work</a>
<a className="menu-link block text-5xl md:text-7xl font-medium text-neutral-400 hover:text-white transition-all hover:translate-x-4 cursor-pointer" href="#process" onclick="closeMenu()" style={{transitionDelay: '200ms'}}>Process</a>
<a className="menu-link block text-5xl md:text-7xl font-medium text-neutral-400 hover:text-white transition-all hover:translate-x-4 cursor-pointer" href="#stack" onclick="closeMenu()" style={{transitionDelay: '300ms'}}>Stack</a>
<a className="menu-link block text-5xl md:text-7xl font-medium text-neutral-400 hover:text-white transition-all hover:translate-x-4 cursor-pointer" href="#contact" onclick="closeMenu()" style={{transitionDelay: '400ms'}}>Contact</a>
</div>
<div className="hidden md:flex w-1/2 h-full items-center justify-center p-8 menu-link" style={{transitionDelay: '500ms'}}>
<div className="relative w-full aspect-square max-h-[500px] overflow-hidden rounded-lg group">
<img alt="Abstract Art" className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Latest Project</p>
<p className="text-xl font-medium">Neon Horizons</p>
</div>
</div>
</div>
</div>
<div className="relative z-10 px-6 py-6 border-t border-neutral-900 flex justify-between items-center text-xs text-neutral-500">
<span>Based in San Francisco</span>
<div className="flex gap-4">
<a className="hover:text-white" href="#">Twitter</a>
<a className="hover:text-white" href="#">LinkedIn</a>
<a className="hover:text-white" href="#">Instagram</a>
</div>
</div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
<div className="uppercase tracking-tighter text-sm font-medium">AM—Studio</div>
<button className="group flex items-center gap-2 text-xs font-normal tracking-wide text-neutral-300 hover:text-white transition-colors" id="open-menu">
<span className="uppercase">Menu</span>
<div className="space-y-1">
<span className="block w-5 h-px bg-current group-hover:w-6 transition-all"></span>
<span className="block w-5 h-px bg-current group-hover:w-4 transition-all ml-auto"></span>
</div>
</button>
</nav>
<main className="relative w-full z-10">

<section className="sticky-slide bg-transparent flex flex-col justify-center items-center relative">
<div className="relative z-10 text-center max-w-4xl px-4">
<div className="w-32 h-32 mx-auto mb-8 text-white opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" id="svg-container">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 100">
<path className="path stroke-current" d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z M50 5 L50 50 M50 50 L90 75 M50 50 L10 75" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6">
                    Full Stack <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 via-neutral-600 to-neutral-400">Visionary.</span>
</h1>
<p className="text-base md:text-lg text-neutral-400 max-w-lg mx-auto font-light leading-relaxed">
                    Crafting digital experiences with pixel-perfect precision and robust architecture.
                </p>
</div>
</section>

<section className="sticky-slide bg-[#050505] z-10 flex flex-col pt-24 px-4 md:px-12 border-t border-white/5" id="work">
<div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto w-full h-full flex flex-col relative z-10">
<header className="flex justify-between items-end mb-12 border-b border-neutral-800 pb-4">
<h2 className="text-2xl font-normal tracking-tight text-white">Selected Work</h2>
<span className="text-xs text-neutral-500 font-mono">01 — 03</span>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full pb-20 overflow-y-auto no-scrollbar">
<article className="glass rounded-xl p-6 group cursor-pointer hover:border-blue-500/30 transition-colors flex flex-col h-80 justify-between relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start relative z-10">
<div className="p-2 bg-neutral-900 rounded-lg border border-neutral-800 text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.2)]">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
</div>
</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-white mb-1 group-hover:translate-x-1 transition-transform">Nova Finance</h3>
<p className="text-xs text-neutral-500">Real-time asset tracking dashboard.</p>
</div>
</article>
<article className="glass rounded-xl p-6 group cursor-pointer hover:border-purple-500/30 transition-colors flex flex-col h-80 justify-between relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start relative z-10">
<div className="p-2 bg-neutral-900 rounded-lg border border-neutral-800 text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-colors shadow-[0_0_15px_rgba(168,85,247,0.2)]">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-white mb-1 group-hover:translate-x-1 transition-transform">Bolt API</h3>
<p className="text-xs text-neutral-500">High-performance infrastructure.</p>
</div>
</article>
<article className="glass rounded-xl p-6 group cursor-pointer hover:border-fuchsia-500/30 transition-colors flex flex-col h-80 justify-between relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start relative z-10">
<div className="p-2 bg-neutral-900 rounded-lg border border-neutral-800 text-fuchsia-400 group-hover:text-white group-hover:bg-fuchsia-600 transition-colors shadow-[0_0_15px_rgba(217,70,239,0.2)]">
<span className="iconify" data-icon="lucide:image" data-width="20"></span>
</div>
</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-white mb-1 group-hover:translate-x-1 transition-transform">Pixel Genius</h3>
<p className="text-xs text-neutral-500">AI-powered generation tools.</p>
</div>
</article>
</div>
</div>
</section>

<section className="sticky-slide bg-[#050505] z-20 flex flex-col justify-center px-4 md:px-12 relative overflow-hidden" id="stack">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-neutral-800/40 to-transparent rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-4xl mx-auto w-full relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">Technical Stack</h2>
<p className="text-sm text-neutral-500 mt-2">Core technologies &amp; tools.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="group flex flex-col items-center justify-center p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/80 transition-all duration-300 hover:border-white/50 cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
<span className="iconify w-8 h-8 text-neutral-500 group-hover:text-white transition-colors duration-300" data-icon="simple-icons:nextdotjs"></span>
<span className="mt-3 text-xs font-medium text-neutral-500 group-hover:text-white transition-colors">Next.js 14</span>
</div>
<div className="group flex flex-col items-center justify-center p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/80 transition-all duration-300 hover:border-[#61DAFB]/50 cursor-pointer hover:shadow-[0_0_20px_rgba(97,218,251,0.2)]">
<span className="iconify w-8 h-8 text-neutral-500 group-hover:text-[#61DAFB] transition-colors duration-300" data-icon="simple-icons:react"></span>
<span className="mt-3 text-xs font-medium text-neutral-500 group-hover:text-white transition-colors">React</span>
</div>
<div className="group flex flex-col items-center justify-center p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/80 transition-all duration-300 hover:border-[#3178C6]/50 cursor-pointer hover:shadow-[0_0_20px_rgba(49,120,198,0.2)]">
<span className="iconify w-8 h-8 text-neutral-500 group-hover:text-[#3178C6] transition-colors duration-300" data-icon="simple-icons:typescript"></span>
<span className="mt-3 text-xs font-medium text-neutral-500 group-hover:text-white transition-colors">TypeScript</span>
</div>
<div className="group flex flex-col items-center justify-center p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/80 transition-all duration-300 hover:border-[#06B6D4]/50 cursor-pointer hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
<span className="iconify w-8 h-8 text-neutral-500 group-hover:text-[#06B6D4] transition-colors duration-300" data-icon="simple-icons:tailwindcss"></span>
<span className="mt-3 text-xs font-medium text-neutral-500 group-hover:text-white transition-colors">Tailwind</span>
</div>
<div className="group flex flex-col items-center justify-center p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/80 transition-all duration-300 hover:border-[#339933]/50 cursor-pointer hover:shadow-[0_0_20px_rgba(51,153,51,0.2)]">
<span className="iconify w-8 h-8 text-neutral-500 group-hover:text-[#339933] transition-colors duration-300" data-icon="simple-icons:nodedotjs"></span>
<span className="mt-3 text-xs font-medium text-neutral-500 group-hover:text-white transition-colors">Node.js</span>
</div>
<div className="group flex flex-col items-center justify-center p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/80 transition-all duration-300 hover:border-[#336791]/50 cursor-pointer hover:shadow-[0_0_20px_rgba(51,103,145,0.2)]">
<span className="iconify w-8 h-8 text-neutral-500 group-hover:text-[#336791] transition-colors duration-300" data-icon="simple-icons:postgresql"></span>
<span className="mt-3 text-xs font-medium text-neutral-500 group-hover:text-white transition-colors">PostgreSQL</span>
</div>
<div className="group flex flex-col items-center justify-center p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/80 transition-all duration-300 hover:border-[#DEA584]/50 cursor-pointer hover:shadow-[0_0_20px_rgba(222,165,132,0.2)]">
<span className="iconify w-8 h-8 text-neutral-500 group-hover:text-[#DEA584] transition-colors duration-300" data-icon="simple-icons:rust"></span>
<span className="mt-3 text-xs font-medium text-neutral-500 group-hover:text-white transition-colors">Rust</span>
</div>
<div className="group flex flex-col items-center justify-center p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/80 transition-all duration-300 hover:border-[#2496ED]/50 cursor-pointer hover:shadow-[0_0_20px_rgba(36,150,237,0.2)]">
<span className="iconify w-8 h-8 text-neutral-500 group-hover:text-[#2496ED] transition-colors duration-300" data-icon="simple-icons:docker"></span>
<span className="mt-3 text-xs font-medium text-neutral-500 group-hover:text-white transition-colors">Docker</span>
</div>
</div>
</div>
</section>

<section className="relative z-30 bg-[#050505] py-32 px-4 md:px-12 border-t border-neutral-900">
<div className="max-w-4xl mx-auto relative">
<div className="absolute -left-20 top-0 w-40 h-40 bg-purple-600/10 blur-[50px] rounded-full pointer-events-none"></div>
<h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-12 relative z-10">Experience</h2>
<div className="space-y-0 relative z-10">
<div className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-neutral-900 hover:bg-neutral-900/30 transition-colors px-2 cursor-pointer">
<div className="mb-2 md:mb-0">
<h3 className="text-white font-medium group-hover:text-purple-400 transition-colors">Senior Engineer</h3>
<span className="text-neutral-500 text-sm">Vercel (Contract)</span>
</div>
<div className="text-right">
<span className="text-neutral-500 font-mono text-xs">2023 — Present</span>
</div>
</div>
<div className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-neutral-900 hover:bg-neutral-900/30 transition-colors px-2 cursor-pointer">
<div className="mb-2 md:mb-0">
<h3 className="text-white font-medium group-hover:text-blue-400 transition-colors">Lead Developer</h3>
<span className="text-neutral-500 text-sm">Linear Systems</span>
</div>
<div className="text-right">
<span className="text-neutral-500 font-mono text-xs">2021 — 2023</span>
</div>
</div>
<div className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-neutral-900 hover:bg-neutral-900/30 transition-colors px-2 cursor-pointer">
<div className="mb-2 md:mb-0">
<h3 className="text-white font-medium group-hover:text-cyan-400 transition-colors">Frontend Architect</h3>
<span className="text-neutral-500 text-sm">Stripe (Incubation)</span>
</div>
<div className="text-right">
<span className="text-neutral-500 font-mono text-xs">2019 — 2021</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-30 bg-neutral-950 py-24 px-4 md:px-12 border-t border-neutral-900">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-900 border border-neutral-900">
<div className="bg-black p-12 hover:bg-neutral-950 transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 blur-[40px] rounded-full group-hover:bg-blue-500/20 transition-colors"></div>
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-neutral-800 group-hover:border-blue-500/30 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
<span className="iconify text-neutral-400 group-hover:text-blue-400 transition-colors" data-icon="lucide:pen-tool" data-width="18"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Product Design</h3>
<p className="text-base text-neutral-500 leading-relaxed">UI/UX design that focuses on clarity and conversion. I build design systems that scale.</p>
</div>
<div className="bg-black p-12 hover:bg-neutral-950 transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 blur-[40px] rounded-full group-hover:bg-purple-500/20 transition-colors"></div>
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-neutral-800 group-hover:border-purple-500/30 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]">
<span className="iconify text-neutral-400 group-hover:text-purple-400 transition-colors" data-icon="lucide:code-2" data-width="18"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Engineering</h3>
<p className="text-base text-neutral-500 leading-relaxed">Full-stack development using modern frameworks. Fast, secure, and maintainable.</p>
</div>
<div className="bg-black p-12 hover:bg-neutral-950 transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 blur-[40px] rounded-full group-hover:bg-emerald-500/20 transition-colors"></div>
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-neutral-800 group-hover:border-emerald-500/30 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
<span className="iconify text-neutral-400 group-hover:text-emerald-400 transition-colors" data-icon="lucide:cpu" data-width="18"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">System Architecture</h3>
<p className="text-base text-neutral-500 leading-relaxed">Database design and scalable cloud infrastructure setup. High traffic readiness.</p>
</div>
<div className="bg-black p-12 hover:bg-neutral-950 transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/10 blur-[40px] rounded-full group-hover:bg-orange-500/20 transition-colors"></div>
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-neutral-800 group-hover:border-orange-500/30 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]">
<span className="iconify text-neutral-400 group-hover:text-orange-400 transition-colors" data-icon="lucide:bar-chart-3" data-width="18"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">SEO &amp; Performance</h3>
<p className="text-base text-neutral-500 leading-relaxed">Technical SEO and Core Web Vitals optimization to ensure instant load times.</p>
</div>
</div>
</div>
</section>

<section className="relative z-30 bg-black py-32 px-4 md:px-12 border-t border-neutral-900 overflow-hidden" id="process">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-3xl font-medium tracking-tight text-white">The Methodology</h2>
<p className="text-sm text-neutral-500 mt-2">Iterative perfection.</p>
</div>
<div className="relative grid grid-cols-[50px_1fr] md:grid-cols-[100px_1fr] gap-8">
<div className="relative h-full">
<div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-neutral-900" id="timeline-track"></div>
<div className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-fuchsia-500 h-0 transition-all duration-75 ease-linear shadow-[0_0_10px_rgba(168,85,247,0.5)]" id="timeline-progress"></div>
</div>
<div className="space-y-32 pb-32">
<div className="timeline-step relative">
<div className="absolute -left-[61px] md:-left-[111px] top-2 w-[21px] h-[21px] bg-black border border-neutral-800 rounded-full flex items-center justify-center z-10 transition-all duration-300 timeline-dot">
<div className="w-1.5 h-1.5 bg-neutral-600 rounded-full transition-colors duration-300 dot-inner"></div>
</div>
<span className="text-xs font-mono text-blue-500 mb-2 block tracking-wider">01 / Strategy</span>
<h3 className="text-xl text-white font-medium mb-3">Discovery &amp; Research</h3>
<p className="text-base text-neutral-500 leading-relaxed max-w-lg">We begin by deconstructing the problem. Analyzing market fit, user personas, and technical constraints.</p>
</div>
<div className="timeline-step relative">
<div className="absolute -left-[61px] md:-left-[111px] top-2 w-[21px] h-[21px] bg-black border border-neutral-800 rounded-full flex items-center justify-center z-10 transition-all duration-300 timeline-dot">
<div className="w-1.5 h-1.5 bg-neutral-600 rounded-full transition-colors duration-300 dot-inner"></div>
</div>
<span className="text-xs font-mono text-purple-500 mb-2 block tracking-wider">02 / Design</span>
<h3 className="text-xl text-white font-medium mb-3">Prototyping &amp; UX</h3>
<p className="text-base text-neutral-500 leading-relaxed max-w-lg">High-fidelity visual design. We create interactive prototypes to validate flows before coding.</p>
</div>
<div className="timeline-step relative">
<div className="absolute -left-[61px] md:-left-[111px] top-2 w-[21px] h-[21px] bg-black border border-neutral-800 rounded-full flex items-center justify-center z-10 transition-all duration-300 timeline-dot">
<div className="w-1.5 h-1.5 bg-neutral-600 rounded-full transition-colors duration-300 dot-inner"></div>
</div>
<span className="text-xs font-mono text-fuchsia-500 mb-2 block tracking-wider">03 / Build</span>
<h3 className="text-xl text-white font-medium mb-3">Development</h3>
<p className="text-base text-neutral-500 leading-relaxed max-w-lg">Clean, typed, and tested code. Implementing the design with pixel-perfect precision.</p>
</div>
<div className="timeline-step relative">
<div className="absolute -left-[61px] md:-left-[111px] top-2 w-[21px] h-[21px] bg-black border border-neutral-800 rounded-full flex items-center justify-center z-10 transition-all duration-300 timeline-dot">
<div className="w-1.5 h-1.5 bg-neutral-600 rounded-full transition-colors duration-300 dot-inner"></div>
</div>
<span className="text-xs font-mono text-neutral-400 mb-2 block tracking-wider">04 / Deploy</span>
<h3 className="text-xl text-white font-medium mb-3">Launch &amp; Scale</h3>
<p className="text-base text-neutral-500 leading-relaxed max-w-lg">Deployment to global edge networks. Setting up analytics and monitoring.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-30 py-32 px-4 md:px-12 border-t border-neutral-900 overflow-hidden min-h-[90vh] flex items-center justify-center" id="philosophy">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover opacity-30 grayscale contrast-125" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-white-lines-2826-large.mp4" type="video/mp4"/>

<div className="w-full h-full bg-neutral-900"></div>
</video>

<div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/60 to-[#050505] z-10"></div>
<div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-10"></div>
</div>
<div className="max-w-7xl mx-auto relative z-20 w-full perspective-container">
<div className="text-center mb-24">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6 mix-blend-overlay">Design Philosophy</h2>
<p className="text-neutral-400 max-w-md mx-auto text-base">Principles that guide every pixel and line of code.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full" id="spotlight-grid">

<div className="spotlight-card card-3d group relative h-96 rounded-3xl bg-white/[0.03] border border-white/20 backdrop-blur-xl p-8 flex flex-col justify-between overflow-hidden hover:bg-white/[0.06] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 blur-[50px] rounded-full group-hover:bg-white/10 transition-colors"></div>
<div className="relative z-10">
<span className="iconify text-white/80 w-10 h-10 mb-6 stroke-1" data-icon="lucide:minus"></span>
</div>
<div className="relative z-10">
<h3 className="text-2xl text-white font-medium mb-4 tracking-tight">Minimalism</h3>
<p className="text-sm text-neutral-300 leading-relaxed font-light">Reducing complexity to focus on what matters. Every element serves a specific purpose, removing the noise to amplify the signal.</p>
</div>
</div>

<div className="spotlight-card card-3d group relative h-96 rounded-3xl bg-white/[0.03] border border-white/20 backdrop-blur-xl p-8 flex flex-col justify-between overflow-hidden hover:bg-white/[0.06] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 blur-[50px] rounded-full group-hover:bg-white/10 transition-colors"></div>
<div className="relative z-10">
<span className="iconify text-white/80 w-10 h-10 mb-6 stroke-1" data-icon="lucide:maximize"></span>
</div>
<div className="relative z-10">
<h3 className="text-2xl text-white font-medium mb-4 tracking-tight">Scalability</h3>
<p className="text-sm text-neutral-300 leading-relaxed font-light">Systems designed to grow without friction. We build future-proof codebases that adapt to changing requirements effortlessly.</p>
</div>
</div>

<div className="spotlight-card card-3d group relative h-96 rounded-3xl bg-white/[0.03] border border-white/20 backdrop-blur-xl p-8 flex flex-col justify-between overflow-hidden hover:bg-white/[0.06] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 blur-[50px] rounded-full group-hover:bg-white/10 transition-colors"></div>
<div className="relative z-10">
<span className="iconify text-white/80 w-10 h-10 mb-6 stroke-1" data-icon="lucide:activity"></span>
</div>
<div className="relative z-10">
<h3 className="text-2xl text-white font-medium mb-4 tracking-tight">Performance</h3>
<p className="text-sm text-neutral-300 leading-relaxed font-light">Speed is a feature. Optimizing every byte for instant load times, ensuring a seamless experience for every user globally.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-30 bg-black pt-24 pb-12 px-4 border-t border-neutral-900" id="contact">
<div className="max-w-lg mx-auto">
<div className="glass-solid p-8 md:p-12 rounded-2xl shadow-2xl shadow-purple-900/10 border border-neutral-800 relative overflow-hidden">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/20 blur-[50px] rounded-full pointer-events-none"></div>
<div className="mb-8 text-center relative z-10">
<h2 className="text-2xl font-medium tracking-tight text-white mb-2">Start a project</h2>
<p className="text-xs text-neutral-400">Available for freelance and full-time opportunities.</p>
</div>
<form className="space-y-4 relative z-10">
<div className="space-y-1">
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-all focus:ring-1 focus:ring-neutral-700" placeholder="you@company.com" type="email"/>
</div>
<div className="space-y-1">
<textarea className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-all resize-none focus:ring-1 focus:ring-neutral-700" placeholder="Tell me about your project..." rows="3"></textarea>
</div>
<button className="w-full bg-white hover:bg-neutral-200 text-black font-medium text-xs py-3 rounded-lg transition-colors flex justify-center items-center gap-2" type="button">
                            Send Message <span className="iconify" data-icon="lucide:send" data-width="14"></span>
</button>
</form>
</div>
<div className="mt-12 text-center text-xs text-neutral-600 flex justify-between items-center px-2">
<span>© 2024 Alex Morgan</span>
<div className="flex gap-4 opacity-50">
<span className="iconify hover:text-white transition-colors cursor-pointer" data-icon="lucide:twitter" data-width="14"></span>
<span className="iconify hover:text-white transition-colors cursor-pointer" data-icon="lucide:github" data-width="14"></span>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
