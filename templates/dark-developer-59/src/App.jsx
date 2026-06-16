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
            
            // Global Cursor Glow
            const glow = document.getElementById('cursor-glow');
            document.addEventListener('mousemove', (e) => {
                requestAnimationFrame(() => {
                    glow.style.left = `${e.clientX}px`;
                    glow.style.top = `${e.clientY}px`;
                });
            });

            // Reusable function to map mouse position to 3D rotation
            const init3DCard = (card, maxRotateX, maxRotateY, scale, glareStrength) => {
                const inner = card.querySelector('.relative');
                const glare = card.querySelector('.glare');
                
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    // Calculate rotation percentages (-1 to 1)
                    const percentX = (x - centerX) / centerX;
                    const percentY = (y - centerY) / centerY;
                    
                    const rotateX = percentY * -maxRotateX;
                    const rotateY = percentX * maxRotateY;
                    
                    // Apply heavy transform
                    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
                    
                    // Glare Effect mapping
                    if(glare) {
                        glare.style.opacity = glareStrength;
                        glare.style.left = `${(x / rect.width) * 100}%`;
                        glare.style.top = `${(y / rect.height) * 100}%`;
                        glare.style.transform = `translate(-50%, -50%)`;
                    }
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                    if(glare) {
                        glare.style.opacity = '0';
                    }
                });
            };

            // Initialize standard tilt cards (Skills section)
            document.querySelectorAll('.tilt-card').forEach(card => {
                init3DCard(card, 15, 15, 1.05, 0.4);
            });

            // Initialize the Mega 3D Contact Card (Extreme reaction)
            const megaCard = document.getElementById('mega-card');
            if(megaCard) {
                init3DCard(megaCard, 25, 25, 1.08, 0.6);
            }

            // Spotlight hover effect for Project Cards
            document.querySelectorAll('.project-card').forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none -z-10 transition-transform duration-75 ease-out transform -translate-x-1/2 -translate-y-1/2" id="cursor-glow"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-white/[0.01] blur-[120px] rounded-full pointer-events-none -z-20"></div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#050505]/70 border-b border-white/5">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-white flex items-center gap-2 relative group" href="#">
<span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300">ON</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#skills">Skills</a>
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
<a className="hover:text-white transition-colors" href="#experience">Experience</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-black bg-white rounded-md hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)]" href="#connect">
                Connect
            </a>
<button className="md:hidden text-neutral-400 hover:text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>
<main className="flex-grow pt-32 pb-24 relative z-0">

<section className="max-w-6xl mx-auto px-6 pt-12 pb-24 flex flex-col items-center text-center relative perspective-1000">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-300 mb-8 backdrop-blur-sm animate-float">
<span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
                Seeking Technical Internship
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter holo-text mb-6 max-w-4xl leading-tight transform hover:scale-105 transition-transform duration-500">
                Building intelligent solutions through data &amp; code.
            </h1>
<p className="text-base md:text-lg text-neutral-400 max-w-2xl mb-10 font-light leading-relaxed">
                Hi, I'm <span className="text-white font-medium">Om Navale</span>. A first-year B.Tech student in Artificial Intelligence &amp; Data Science, passionate about web development, problem-solving, and AI-driven applications.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-black bg-white rounded-lg hover:bg-neutral-200 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]" href="#projects">
                    View Projects
                </a>
<a className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors" href="#connect">
<iconify-icon height="18" icon="solar:user-circle-linear" width="18"></iconify-icon>
                    Contact Me
                </a>
</div>

<div className="flex items-center gap-6 mt-16 text-neutral-500">
<a aria-label="LinkedIn" className="hover:text-white transition-colors hover:scale-125 transform duration-300" href="#"><iconify-icon height="24" icon="solar:buildings-linear" width="24"></iconify-icon></a>
<a aria-label="GitHub" className="hover:text-white transition-colors hover:scale-125 transform duration-300" href="#"><iconify-icon height="24" icon="solar:code-circle-linear" width="24"></iconify-icon></a>
<a aria-label="Email" className="hover:text-white transition-colors hover:scale-125 transform duration-300" href="mailto:omnavale9860@gmail.com"><iconify-icon height="24" icon="solar:letter-linear" width="24"></iconify-icon></a>
</div>
</section>

<div className="bg-grid-container h-screen top-[50vh]">
<div className="bg-grid-moving"></div>
</div>

<section className="max-w-6xl mx-auto px-6 py-24 relative perspective-1000 z-10" id="skills">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Core Competencies</h2>
<p className="text-sm text-neutral-400 max-w-lg">Foundational skills acquired through academic training, hackathons, and self-driven projects.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="tilt-card group relative p-px rounded-2xl bg-gradient-to-b from-white/20 to-transparent preserve-3d cursor-crosshair">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
<div className="relative h-full bg-[#050505]/80 backdrop-blur-md rounded-2xl p-8 flex flex-col items-start transition-all duration-200 border border-white/5 preserve-3d shadow-xl">
<div className="glare-container"><div className="glare"></div></div>
<div className="translate-z-mid w-full flex flex-col h-full preserve-3d">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white mb-6 translate-z-high shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all">
<iconify-icon height="24" icon="solar:monitor-smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3 translate-z-high group-hover:text-white transition-colors">Web Development</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed translate-z-mid">Building responsive, mobile-first interfaces using modern utility-based styling frameworks.</p>
<div className="flex flex-wrap gap-2 mt-auto translate-z-high">
<span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-xs text-white shadow-sm">HTML5</span>
<span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-xs text-white shadow-sm">CSS3</span>
<span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-xs text-white shadow-sm">Tailwind CSS</span>
</div>
</div>
</div>
</div>

<div className="tilt-card group relative p-px rounded-2xl bg-gradient-to-b from-white/20 to-transparent preserve-3d cursor-crosshair">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
<div className="relative h-full bg-[#050505]/80 backdrop-blur-md rounded-2xl p-8 flex flex-col items-start transition-all duration-200 border border-white/5 preserve-3d shadow-xl">
<div className="glare-container"><div className="glare"></div></div>
<div className="translate-z-mid w-full flex flex-col h-full preserve-3d">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white mb-6 translate-z-high shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all">
<iconify-icon height="24" icon="solar:database-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3 translate-z-high">Programming &amp; Data</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed translate-z-mid">Writing foundational logic, algorithms, and handling structured data for analytical tasks.</p>
<div className="flex flex-wrap gap-2 mt-auto translate-z-high">
<span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-xs text-white shadow-sm">Python</span>
<span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-xs text-white shadow-sm">C++</span>
<span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-xs text-white shadow-sm">SQL</span>
</div>
</div>
</div>
</div>

<div className="tilt-card group relative p-px rounded-2xl bg-gradient-to-b from-white/20 to-transparent preserve-3d cursor-crosshair">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
<div className="relative h-full bg-[#050505]/80 backdrop-blur-md rounded-2xl p-8 flex flex-col items-start transition-all duration-200 border border-white/5 preserve-3d shadow-xl">
<div className="glare-container"><div className="glare"></div></div>
<div className="translate-z-mid w-full flex flex-col h-full preserve-3d">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white mb-6 translate-z-high shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all">
<iconify-icon height="24" icon="solar:cpu-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3 translate-z-high">Problem Solving</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed translate-z-mid">Logical debugging, structured thinking under pressure, and effective use of AI-assisted tools.</p>
<div className="flex flex-wrap gap-2 mt-auto translate-z-high">
<span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-xs text-white shadow-sm">Debugging</span>
<span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-xs text-white shadow-sm">AI Prompting</span>
<span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-xs text-white shadow-sm">Team Collab</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24 relative z-10" id="projects">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Featured Projects</h2>
<p className="text-sm text-neutral-400 max-w-lg">A selection of technical builds, focusing on data visualization, problem-solving, and scalable web solutions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="project-card group relative p-px rounded-2xl bg-white/5 overflow-hidden">
<div className="relative h-full bg-[#050505]/90 backdrop-blur-xl rounded-2xl p-6 flex flex-col transition-all duration-300 border border-white/5 z-10">
<div className="w-full h-48 rounded-xl bg-gradient-to-br from-neutral-900 to-[#050505] border border-white/5 mb-6 relative overflow-hidden flex items-center justify-center group-hover:border-white/20 transition-colors duration-500">
<div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_10%,_transparent_60%)] group-hover:scale-150 transition-transform duration-700 ease-out"></div>
<iconify-icon className="text-neutral-700 group-hover:text-white/80 transition-colors duration-500 relative z-10" height="48" icon="solar:chart-square-linear" width="48"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-3">
<h3 className="text-xl font-medium tracking-tight text-white group-hover:text-white transition-colors">Data Analytics Dashboard</h3>
<a aria-label="View Project" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/20 transition-all" href="#">
<iconify-icon height="18" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
</div>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed flex-grow">Interactive Tableau dashboards built to classify datasets and visualize key forensic technology insights for business decision-making simulations.</p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300">Tableau</span>
<span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300">Excel</span>
<span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300">Data Modeling</span>
</div>
</div>
</div>

<div className="project-card group relative p-px rounded-2xl bg-white/5 overflow-hidden">
<div className="relative h-full bg-[#050505]/90 backdrop-blur-xl rounded-2xl p-6 flex flex-col transition-all duration-300 border border-white/5 z-10">
<div className="w-full h-48 rounded-xl bg-gradient-to-bl from-neutral-900 to-[#050505] border border-white/5 mb-6 relative overflow-hidden flex items-center justify-center group-hover:border-white/20 transition-colors duration-500">
<div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_10%,_transparent_60%)] group-hover:scale-150 transition-transform duration-700 ease-out"></div>
<iconify-icon className="text-neutral-700 group-hover:text-white/80 transition-colors duration-500 relative z-10" height="48" icon="solar:code-square-linear" width="48"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-3">
<h3 className="text-xl font-medium tracking-tight text-white group-hover:text-white transition-colors">Portfolio Architecture</h3>
<a aria-label="View Source" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/20 transition-all" href="#">
<iconify-icon height="18" icon="solar:code-circle-linear" width="18"></iconify-icon>
</a>
</div>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed flex-grow">A highly optimized, single-page application integrating advanced CSS mathematics, 3D transform logic, and responsive utility classes.</p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300">HTML5</span>
<span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300">Tailwind CSS</span>
<span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300">Vanilla JS</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24 relative z-10" id="experience">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="preserve-3d hover:translate-z-mid transition-transform duration-500">
<h2 className="text-2xl font-medium tracking-tight text-white mb-8 flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="solar:case-linear"></iconify-icon> Experience
                    </h2>
<div className="relative border-l border-white/10 pl-8 ml-3 space-y-12">
<div className="relative group">
<span className="absolute -left-[37px] top-1 w-2 h-2 rounded-full bg-white ring-4 ring-[#050505] group-hover:scale-150 transition-transform shadow-[0_0_10px_white]"></span>
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
<h3 className="text-base font-medium text-white">Data Analytics Job Simulation</h3>
<span className="text-xs text-neutral-500 font-medium tracking-wide">FEB 2026</span>
</div>
<p className="text-sm text-neutral-400 mb-4">Deloitte Australia (Forage)</p>
<ul className="space-y-3">
<li className="text-sm text-neutral-400 flex items-start gap-3">
<iconify-icon className="mt-0.5 text-neutral-600 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Conducted data analytics and forensic technology simulations, classifying datasets and drawing business conclusions using Excel.</span>
</li>
<li className="text-sm text-neutral-400 flex items-start gap-3">
<iconify-icon className="mt-0.5 text-neutral-600 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Developed interactive Tableau dashboards to visualize insights, demonstrating data-driven decision-making skills.</span>
</li>
</ul>
</div>
</div>
</div>

<div className="preserve-3d hover:translate-z-mid transition-transform duration-500">
<h2 className="text-2xl font-medium tracking-tight text-white mb-8 flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="solar:diploma-linear"></iconify-icon> Education &amp; Achievements
                    </h2>
<div className="relative border-l border-white/10 pl-8 ml-3 space-y-12">
<div className="relative group">
<span className="absolute -left-[37px] top-1 w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#050505] group-hover:bg-white group-hover:scale-150 transition-all"></span>
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
<h3 className="text-base font-medium text-white">B.Tech - AI &amp; Data Science</h3>
<span className="text-xs text-neutral-500 font-medium tracking-wide">PRESENT</span>
</div>
<p className="text-sm text-neutral-400 mb-2">Sanjay Godawath University, Kolhapur</p>
<p className="text-xs text-neutral-500">First Year (Pursuing). Concurrent with NIAT Technical Training Program.</p>
</div>
<div className="relative group">
<span className="absolute -left-[37px] top-1 w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#050505] group-hover:bg-white group-hover:scale-150 transition-all"></span>
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
<h3 className="text-base font-medium text-white">2x Hackathon Finalist</h3>
</div>
<p className="text-sm text-neutral-400 mb-2">Selected among top teams for solution approach and problem-solving capability.</p>
<p className="text-xs text-neutral-500">Demonstrated teamwork, adaptability, and structured thinking under time constraints.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-32 perspective-2000 z-20 relative flex justify-center" id="connect">
<div className="mega-tilt w-full max-w-3xl relative p-px rounded-[2rem] bg-gradient-to-b from-white/30 via-white/5 to-transparent preserve-3d cursor-none transition-transform duration-100 ease-out shadow-[0_0_80px_rgba(255,255,255,0.05)] hover:shadow-[0_0_150px_rgba(255,255,255,0.15)] group" id="mega-card">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem]"></div>
<div className="relative w-full bg-[#050505]/60 backdrop-blur-2xl rounded-[2rem] p-12 md:p-20 flex flex-col items-center text-center overflow-hidden border border-white/10 preserve-3d">
<div className="glare-container"><div className="glare bg-gradient-to-tr from-transparent via-white/40 to-transparent"></div></div>
<div className="preserve-3d w-full flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-xs font-medium text-white mb-10 translate-z-high shadow-lg">
<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_#4ade80]"></span>
                            Available for Contact
                        </div>
<h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-12 translate-z-extreme drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]">
                            GET IN TOUCH
                        </h2>
<div className="space-y-8 translate-z-high w-full">
<a className="group/mail block relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white hover:border-white transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]" href="mailto:omnavale9860@gmail.com">
<div className="flex items-center justify-center gap-4 text-white group-hover/mail:text-black transition-colors duration-500">
<iconify-icon className="group-hover/mail:scale-110 transition-transform" height="32" icon="solar:letter-linear" width="32"></iconify-icon>
<span className="text-lg md:text-3xl font-medium tracking-tight break-all">omnavale9860@gmail.com</span>
</div>
</a>
<a className="group/phone block relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white hover:border-white transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]" href="tel:9860830548">
<div className="flex items-center justify-center gap-4 text-white group-hover/mail:text-black group-hover/phone:text-black transition-colors duration-500">
<iconify-icon className="group-hover/phone:scale-110 transition-transform" height="32" icon="solar:phone-calling-linear" width="32"></iconify-icon>
<span className="text-xl md:text-4xl font-semibold tracking-tight">9860830548</span>
</div>
</a>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-[#050505] relative z-20 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-500">© 2024 Om Navale. Based in Kolhapur, Maharashtra.</p>
<div className="flex items-center gap-6 text-xs text-neutral-400 font-medium">
<a className="flex items-center gap-2 hover:text-white transition-colors" href="tel:9860830548"><iconify-icon icon="solar:phone-linear"></iconify-icon> 9860830548</a>
<a className="flex items-center gap-2 hover:text-white transition-colors" href="mailto:omnavale9860@gmail.com"><iconify-icon icon="solar:letter-linear"></iconify-icon> omnavale9860@gmail.com</a>
</div>
</div>
</footer>



    </>
  );
}
