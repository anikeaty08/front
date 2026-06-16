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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            const canvas = document.getElementById('kinetic-canvas');
            if(!canvas) return;
            const ctx = canvas.getContext('2d');

            let width, height;
            let lines = [];
            const spacing = 26; // Vertical distance between lines
            const resolution = 20; // Horizontal distance between control points

            const mouse = {
                x: -1000,
                y: -1000,
                targetX: -1000,
                targetY: -1000,
                radius: 350,
                strength: 180
            };

            function init() {
                width = canvas.parentElement.clientWidth;
                height = canvas.parentElement.clientHeight;
                canvas.width = width * window.devicePixelRatio;
                canvas.height = height * window.devicePixelRatio;
                ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

                lines = [];
                const rows = Math.ceil(height / spacing);
                const cols = Math.ceil(width / resolution);

                // Create the strictly parallel horizontal lines and their points
                for (let i = -1; i <= rows + 1; i++) {
                    const points = [];
                    for (let j = -1; j <= cols + 1; j++) {
                        points.push({
                            baseX: j * resolution,
                            baseY: i * spacing,
                            x: j * resolution,
                            y: i * spacing,
                            vy: 0
                        });
                    }
                    lines.push(points);
                }
            }

            window.addEventListener('resize', init);
            
            window.addEventListener('mousemove', (e) => {
                const rect = canvas.getBoundingClientRect();
                mouse.targetX = e.clientX - rect.left;
                mouse.targetY = e.clientY - rect.top;
            });
            
            window.addEventListener('mouseleave', () => {
                mouse.targetX = -1000;
                mouse.targetY = -1000;
            });

            function animate() {
                ctx.clearRect(0, 0, width, height);

                // Smoothly interpolate mouse position for a fluid magnetic effect
                mouse.x += (mouse.targetX - mouse.x) * 0.1;
                mouse.y += (mouse.targetY - mouse.y) * 0.1;

                ctx.lineWidth = 1;
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';

                for (let i = 0; i < lines.length; i++) {
                    const points = lines[i];
                    
                    // 1. Calculate physics for each point to create the topographic bend
                    for (let j = 0; j < points.length; j++) {
                        const p = points[j];
                        
                        let dx = p.baseX - mouse.x;
                        let dy = p.baseY - mouse.y;
                        let dist = Math.sqrt(dx * dx + dy * dy);
                        let targetY = p.baseY;

                        if (dist < mouse.radius) {
                            // Quadratic falloff for smooth bundling
                            let force = Math.pow(1 - dist / mouse.radius, 2);
                            let angle = Math.atan2(dy, dx);
                            // Pure Y repulsion creates perfectly parallel waveforms
                            targetY += Math.sin(angle) * force * mouse.strength;
                        }

                        // Spring back to parallel state
                        p.vy += (targetY - p.y) * 0.12; // stiffness
                        p.vy *= 0.75; // damping (friction)
                        p.y += p.vy;
                    }

                    // 2. Render utilizing perfect Bezier Curves for clean Swiss structure
                    ctx.beginPath();
                    ctx.moveTo(points[0].x, points[0].y);

                    for (let j = 0; j < points.length - 1; j++) {
                        const p0 = points[j];
                        const p1 = points[j + 1];
                        
                        // Calculate control points for zero-slope horizontal tangents
                        const cp1x = p0.x + (p1.x - p0.x) * 0.5;
                        const cp1y = p0.y;
                        const cp2x = p0.x + (p1.x - p0.x) * 0.5;
                        const cp2y = p1.y;
                        
                        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p1.x, p1.y);
                    }
                    ctx.stroke();
                }

                requestAnimationFrame(animate);
            }

            init();
            animate();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-[100] noise-bg opacity-40 mix-blend-overlay"></div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-transform duration-500">
<div className="glass-panel border border-white/5 rounded-full p-1.5 flex items-center gap-2 w-full max-w-xl shadow-2xl transition-all duration-300 hover:border-white/10 hover:bg-white/[0.02]">

<div className="h-9 w-9 rounded-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/10 shrink-0 shadow-inner">
<iconify-icon className="text-white" height="18" icon="solar:infinity-linear" width="18"></iconify-icon>
</div>

<div className="flex-1 flex justify-center items-center gap-1">
<a className="px-4 py-2 text-xs font-medium text-white bg-white/5 rounded-full transition-all" href="#">Studio</a>
<a className="px-4 py-2 text-xs font-normal text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300" href="#">Expertise</a>
<a className="px-4 py-2 text-xs font-normal text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300" href="#">Results</a>
</div>

<a className="px-4 py-2 rounded-full bg-white text-black flex items-center gap-2 group cursor-pointer hover:bg-zinc-200 transition-colors" href="#">
<span className="text-xs font-medium tracking-wide">Let's Talk</span>
</a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">

<canvas className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]" id="kinetic-canvas"></canvas>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
<div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-sm">
<span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
<span className="text-xs font-medium tracking-wide text-zinc-300">Available for new partnerships</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tighter leading-[1.05]">
                    Engineered for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600">measurable growth.</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 leading-relaxed font-normal max-w-lg">
                    We bridge the gap between high-end aesthetic and ruthless performance. Websites designed to captivate, built to convert, and structured to scale.
                </p>
<div className="flex flex-wrap gap-4 pt-2">
<button className="px-6 py-3.5 bg-white text-black text-xs font-medium tracking-wide rounded-lg hover:bg-zinc-100 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
                        View Case Studies
                    </button>
<button className="px-6 py-3.5 border border-white/10 text-white text-xs font-medium tracking-wide rounded-lg hover:bg-white/5 hover:border-white/20 transition-all duration-300">
                        Our Framework
                    </button>
</div>
</div>

<div className="relative group lg:ml-auto w-full max-w-md animate-[float_6s_ease-in-out_infinite]">

<div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

<div className="relative glass-card rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">

<div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-white/[0.02]">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="text-xs font-medium text-zinc-500 tracking-tight">Q3 Performance Metrics</div>
</div>

<div className="p-6 space-y-8 bg-[#0A0A0C]/80">

<div className="flex justify-between items-end">
<div>
<div className="text-xs font-medium tracking-wide text-zinc-400 mb-2">Conversion Rate</div>
<div className="text-4xl font-medium tracking-tighter text-white flex items-end gap-2">
                                    4.8%
                                    <span className="text-xs font-normal text-green-400 flex items-center pb-1">
<iconify-icon height="14" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
                                        +1.2%
                                    </span>
</div>
</div>
<div className="h-12 w-24 flex items-end gap-1.5 opacity-80">
<div className="w-full bg-white/5 rounded-sm relative"><div className="absolute bottom-0 w-full bg-zinc-600 rounded-sm h-[40%] transition-all duration-1000 group-hover:h-[50%]"></div></div>
<div className="w-full bg-white/5 rounded-sm relative"><div className="absolute bottom-0 w-full bg-zinc-600 rounded-sm h-[30%] transition-all duration-1000 group-hover:h-[45%]"></div></div>
<div className="w-full bg-white/5 rounded-sm relative"><div className="absolute bottom-0 w-full bg-blue-500 rounded-sm h-[60%] transition-all duration-1000 group-hover:h-[85%] shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div></div>
</div>
</div>

<div className="rounded-xl bg-white/[0.02] border border-white/5 p-4 h-28 overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-8 pointer-events-none bg-gradient-to-b from-[#0A0A0C] to-transparent z-10"></div>
<div className="absolute bottom-0 left-0 w-full h-8 pointer-events-none bg-gradient-to-t from-[#0A0A0C] to-transparent z-10"></div>
<div className="space-y-3" style={{animation: 'ticker 6s linear infinite'}}>
<div className="flex items-center gap-3 text-xs font-normal text-zinc-400">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
<span>New enterprise lead captured</span>
<span className="ml-auto text-zinc-600">Just now</span>
</div>
<div className="flex items-center gap-3 text-xs font-normal text-zinc-400">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<span>Checkout flow completed</span>
<span className="ml-auto text-zinc-600">2m ago</span>
</div>
<div className="flex items-center gap-3 text-xs font-normal text-zinc-400">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
<span>Newsletter subscriber added</span>
<span className="ml-auto text-zinc-600">5m ago</span>
</div>

<div className="flex items-center gap-3 text-xs font-normal text-zinc-400">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
<span>New enterprise lead captured</span>
<span className="ml-auto text-zinc-600">Just now</span>
</div>
<div className="flex items-center gap-3 text-xs font-normal text-zinc-400">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<span>Checkout flow completed</span>
<span className="ml-auto text-zinc-600">2m ago</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01] py-12">
<div className="container mx-auto px-6 text-center">
<p className="text-xs font-medium tracking-wide text-zinc-500 mb-8">Trusted by scaling teams at leading companies</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-white" height="20" icon="simple-icons:vercel" width="20"></iconify-icon>
<span className="text-lg font-medium tracking-tight text-white">Vercel</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-white" height="20" icon="simple-icons:linear" width="20"></iconify-icon>
<span className="text-lg font-medium tracking-tight text-white">Linear</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-white" height="20" icon="simple-icons:raycast" width="20"></iconify-icon>
<span className="text-lg font-medium tracking-tight text-white">Raycast</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-white" height="20" icon="simple-icons:stripe" width="20"></iconify-icon>
<span className="text-lg font-medium tracking-tight text-white">Stripe</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="container mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="order-2 lg:order-1 relative group perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-tr from-zinc-800 to-zinc-900 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
<div className="relative glass-card rounded-2xl overflow-hidden shadow-2xl">
<div className="flex items-center px-5 py-4 border-b border-white/5 bg-white/[0.02]">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
</div>
<div className="ml-4 text-xs text-zinc-500 font-mono tracking-tight">conversion_engine.ts</div>
</div>
<div className="p-6 font-mono text-sm leading-loose overflow-x-auto no-scrollbar bg-[#0A0A0C]">
<div className="flex"><span className="text-zinc-700 w-8 select-none">1</span><span className="text-zinc-400">import</span><span className="text-zinc-300 ml-2">{ optimizeJourney }</span><span className="text-zinc-400 ml-2">from</span><span className="text-green-300 ml-2">'@vertex/core'</span><span className="text-zinc-500">;</span></div>
<div className="flex"><span className="text-zinc-700 w-8 select-none">2</span></div>
<div className="flex"><span className="text-zinc-700 w-8 select-none">3</span><span className="text-blue-400">export const</span><span className="text-zinc-300 ml-2">scaleBusiness</span><span className="text-zinc-400 ml-2">=</span><span className="text-purple-400 ml-2">async</span><span className="text-zinc-300 ml-1">(user)</span><span className="text-purple-400 ml-2">=&gt;</span><span className="text-zinc-300 ml-2">{</span></div>
<div className="flex"><span className="text-zinc-700 w-8 select-none">4</span><span className="text-zinc-600 ml-4">// Remove friction points</span></div>
<div className="flex group-hover:bg-white/[0.02] transition-colors rounded"><span className="text-zinc-700 w-8 select-none">5</span><span className="text-purple-400 ml-4">await</span><span className="text-blue-300 ml-2">optimizeJourney</span><span className="text-zinc-300">({</span></div>
<div className="flex group-hover:bg-white/[0.02] transition-colors rounded"><span className="text-zinc-700 w-8 select-none">6</span><span className="text-zinc-300 ml-8">loadTime:</span><span className="text-yellow-300 ml-2">'&lt; 0.1s'</span><span className="text-zinc-300">,</span></div>
<div className="flex group-hover:bg-white/[0.02] transition-colors rounded"><span className="text-zinc-700 w-8 select-none">7</span><span className="text-zinc-300 ml-8">design:</span><span className="text-yellow-300 ml-2">'Premium'</span><span className="text-zinc-300">,</span></div>
<div className="flex group-hover:bg-white/[0.02] transition-colors rounded"><span className="text-zinc-700 w-8 select-none">8</span><span className="text-zinc-300 ml-8">copy:</span><span className="text-yellow-300 ml-2">'Benefit-Driven'</span></div>
<div className="flex"><span className="text-zinc-700 w-8 select-none">9</span><span className="text-zinc-300 ml-4">});</span></div>
<div className="flex"><span className="text-zinc-700 w-8 select-none">10</span></div>
<div className="flex"><span className="text-zinc-700 w-8 select-none">11</span><span className="text-purple-400 ml-4">return</span><span className="text-zinc-300 ml-2">{</span><span className="text-zinc-300 ml-2">revenue:</span><span className="text-green-400 ml-2">'Increased'</span><span className="text-zinc-300">};</span></div>
<div className="flex"><span className="text-zinc-700 w-8 select-none">12</span><span className="text-zinc-300">}</span><span className="animate-[blink_1s_step-end_infinite] ml-1 inline-block w-2 h-4 bg-zinc-400 align-middle"></span></div>
</div>
</div>
<div className="absolute -bottom-6 -right-6 glass-card px-6 py-4 rounded-xl shadow-2xl border border-white/10 flex items-center gap-4 bg-[#0A0A0C]/90">
<div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
<iconify-icon className="text-green-400" height="20" icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-zinc-400 tracking-wide">Average Uplift</div>
<div className="text-xl font-medium tracking-tight text-white">+40% Conversion</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 space-y-8">
<div className="space-y-4">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter leading-tight">
                            Stop losing customers to <br className="hidden md:block"/>
<span className="text-zinc-500">average experiences.</span>
</h2>
<p className="text-lg text-zinc-400 leading-relaxed max-w-md font-normal">
                            Your website is your most valuable sales asset. We transform static pages into high-performance engines that build trust, articulate value, and drive action.
                        </p>
</div>
<ul className="space-y-4 pt-4 border-t border-white/5">
<li className="flex items-start gap-3">
<div className="mt-0.5 p-1 rounded-full bg-white/5 border border-white/10">
<iconify-icon className="text-white" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Strategic Architecture</h4>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">Layouts engineered based on user psychology and data, not just aesthetics.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 p-1 rounded-full bg-white/5 border border-white/10">
<iconify-icon className="text-white" height="16" icon="solar:bolt-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Zero-Friction Interactions</h4>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">Silky smooth animations that guide the eye without slowing down the journey.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050506] relative border-y border-white/5">
<div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4">Proven Outcomes</h2>
<p className="text-base text-zinc-400 max-w-sm">We don't just ship beautiful sites. We ship results that impact the bottom line.</p>
</div>
<a className="inline-flex items-center gap-2 text-xs font-medium text-white hover:text-zinc-300 transition-colors pb-1 border-b border-white/20 hover:border-white" href="#">
                View full archive
                <iconify-icon height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
<div className="container mx-auto px-6">
<div className="grid md:grid-cols-2 gap-6 lg:gap-8">

<div className="group relative md:col-span-2 lg:col-span-1 h-[500px] rounded-2xl overflow-hidden glass-card cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent z-10"></div>
<div className="absolute inset-0 bg-zinc-900 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center overflow-hidden">
<div className="absolute w-[150%] h-[150%] bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
<div className="w-3/4 h-3/4 rounded-xl border border-white/10 bg-[#050506] shadow-2xl flex flex-col">
<div className="h-10 border-b border-white/5 flex items-center px-4"><div className="w-16 h-2 rounded-full bg-white/10"></div></div>
<div className="flex-1 p-6 flex gap-4">
<div className="w-1/3 h-full rounded bg-white/5"></div>
<div className="flex-1 space-y-4">
<div className="w-full h-24 rounded bg-blue-500/10 border border-blue-500/20"></div>
<div className="w-3/4 h-4 rounded bg-white/5"></div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 transition-transform duration-500 group-hover:-translate-y-2">
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-3 py-1 text-xs font-medium border border-white/10 rounded-full text-zinc-300 bg-black/50 backdrop-blur-md">Fintech Platform</span>
</div>
<h3 className="text-3xl font-medium text-white tracking-tight mb-2">Nexus Banking</h3>
<p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">Redesigned onboarding flow resulting in a 45% increase in account creations.</p>
</div>
</div>

<div className="group relative h-[500px] rounded-2xl overflow-hidden glass-card cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent z-10"></div>
<div className="absolute inset-0 bg-zinc-900 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
<div className="absolute w-[150%] h-[150%] bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]"></div>
<iconify-icon className="text-white/10 group-hover:text-purple-400/30 transition-colors duration-500" height="80" icon="solar:box-minimalistic-linear" width="80"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 transition-transform duration-500 group-hover:-translate-y-2">
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-3 py-1 text-xs font-medium border border-white/10 rounded-full text-zinc-300 bg-black/50 backdrop-blur-md">SaaS</span>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Aura Analytics</h3>
<p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">Reduced churn by 18% through a simpler, data-focused dashboard UX.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0C]">
<div className="container mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 relative">
<div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
<div className="hidden md:block absolute top-0 bottom-0 left-2/3 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
<div className="text-center md:text-left md:pl-6 group">
<div className="text-5xl md:text-6xl font-medium tracking-tighter text-white mb-4 group-hover:text-blue-400 transition-colors duration-500">$150M<span className="text-blue-500">+</span></div>
<div className="text-sm font-medium tracking-wide text-zinc-300 mb-2">Client Revenue Generated</div>
<p className="text-xs text-zinc-500 font-normal leading-relaxed">Direct attribution from optimized conversion funnels and refreshed architectures.</p>
</div>
<div className="text-center md:text-left md:pl-12 group">
<div className="text-5xl md:text-6xl font-medium tracking-tighter text-white mb-4 group-hover:text-white transition-colors duration-500">0.8s</div>
<div className="text-sm font-medium tracking-wide text-zinc-300 mb-2">Average Load Time</div>
<p className="text-xs text-zinc-500 font-normal leading-relaxed">Lightning-fast delivery ensuring zero drop-off from frustrated users.</p>
</div>
<div className="text-center md:text-left md:pl-12 group flex flex-col items-center md:items-start">
<div className="relative w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-500">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-zinc-800" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="4"></circle>
<circle className="text-green-400 transition-all duration-1000" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" stroke-dasharray="175.9" stroke-dashoffset="3.5" strokeWidth="4"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center text-lg text-white font-medium tracking-tight">98</div>
</div>
<div className="text-sm font-medium tracking-wide text-zinc-300 mb-2">Performance Score</div>
<p className="text-xs text-zinc-500 font-normal leading-relaxed">Consistently hitting top-tier Lighthouse scores across all client deployments.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="container mx-auto px-6 text-center max-w-5xl">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4">Transparent Investment</h2>
<p className="text-base text-zinc-400 max-w-xl mx-auto mb-16 font-normal">No hidden fees or scope creep. Predictable pricing for teams that need to move fast and scale aggressively.</p>
<div className="grid md:grid-cols-2 gap-8 text-left">

<div className="glass-card rounded-2xl p-8 hover:bg-white/[0.02] transition-colors duration-300 flex flex-col">
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Growth Partner</h3>
<p className="text-sm text-zinc-500 mb-8">For early-stage startups needing a premium foundation.</p>
<div className="text-4xl font-medium tracking-tighter text-white mb-8">$6,500<span className="text-base font-normal text-zinc-600 tracking-normal">/mo</span></div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Dedicated UI/UX Design</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Front-end Development (React/Next.js)</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Weekly Iteration Sprints</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Basic SEO Optimization</span>
</li>
</ul>
<button className="w-full py-4 rounded-xl border border-white/10 text-sm font-medium text-white hover:bg-white/5 transition-colors">Start Trial</button>
</div>

<div className="relative glass-card rounded-2xl p-8 flex flex-col border-white/20 shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-2xl font-medium text-white tracking-tight">Scale Engine</h3>
<span className="px-3 py-1 bg-white text-black text-xs font-medium rounded-full">Popular</span>
</div>
<p className="text-sm text-zinc-500 mb-8">For scaling teams needing full-stack architecture.</p>
<div className="text-4xl font-medium tracking-tighter text-white mb-8">$12,000<span className="text-base font-normal text-zinc-600 tracking-normal">/mo</span></div>
<ul className="space-y-4 mb-10 flex-1 relative z-10">
<li className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-white shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Everything in Growth Partner</span>
</li>
<li className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-white shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Complex Web App Architecture</span>
</li>
<li className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-white shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Backend &amp; Database Integration</span>
</li>
<li className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-white shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Priority 24/7 Support Channel</span>
</li>
</ul>
<button className="w-full py-4 rounded-xl bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors relative z-10 shadow-lg shadow-white/10">Secure Your Spot</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0C]">
<div className="container mx-auto px-6 max-w-3xl">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-12 text-center">Questions? We have answers.</h2>
<div className="space-y-2">
<details className="group bg-white/[0.01] border border-white/5 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="list-none cursor-pointer p-6 flex items-center justify-between outline-none">
<span className="text-base font-medium text-white tracking-tight group-hover:text-zinc-300 transition-colors">How fast can we launch?</span>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon className="text-white" height="16" icon="solar:add-linear" width="16"></iconify-icon>
</div>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 font-normal leading-relaxed border-t border-white/5 pt-4 mt-2">
                        Most high-impact landing pages and standard websites are launched within 4-6 weeks. Complex web applications or large-scale eCommerce platforms typically require 8-12 weeks to ensure flawless execution and optimization.
                    </div>
</details>
<details className="group bg-white/[0.01] border border-white/5 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="list-none cursor-pointer p-6 flex items-center justify-between outline-none">
<span className="text-base font-medium text-white tracking-tight group-hover:text-zinc-300 transition-colors">Do you build the backend too?</span>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon className="text-white" height="16" icon="solar:add-linear" width="16"></iconify-icon>
</div>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 font-normal leading-relaxed border-t border-white/5 pt-4 mt-2">
                        Yes. We are a full-stack capability team. While we excel in front-end design, we frequently build robust backends using Node.js, Python, Supabase, and Postgres to ensure your product scales securely.
                    </div>
</details>
<details className="group bg-white/[0.01] border border-white/5 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="list-none cursor-pointer p-6 flex items-center justify-between outline-none">
<span className="text-base font-medium text-white tracking-tight group-hover:text-zinc-300 transition-colors">What if I don't like the design?</span>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon className="text-white" height="16" icon="solar:add-linear" width="16"></iconify-icon>
</div>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 font-normal leading-relaxed border-t border-white/5 pt-4 mt-2">
                        We work in weekly iterative sprints. You are involved at every milestone. Because we build systematically based on wireframes and your continuous feedback, surprises are eliminated, ensuring the final result exceeds expectations.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 flex justify-center relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none"></div>
<div className="w-full max-w-lg px-6 relative z-10">
<div className="glass-card rounded-2xl p-8 md:p-10 shadow-2xl">
<div className="mb-8">
<h2 className="text-3xl font-medium text-white tracking-tighter mb-2">Ready to scale?</h2>
<p className="text-sm text-zinc-400 font-normal">Tell us about your goals. We'll get back to you within 24 hours with a plan.</p>
</div>
<form className="space-y-6">
<div className="group">
<input className="w-full bg-transparent border-b border-white/10 py-3 text-base text-white focus:outline-none focus:border-white transition-colors placeholder-zinc-600" placeholder="Your Name" type="text"/>
</div>
<div className="group">
<input className="w-full bg-transparent border-b border-white/10 py-3 text-base text-white focus:outline-none focus:border-white transition-colors placeholder-zinc-600" placeholder="Work Email" type="email"/>
</div>
<div className="group">
<textarea className="w-full bg-transparent border-b border-white/10 py-3 text-base text-white focus:outline-none focus:border-white transition-colors placeholder-zinc-600 resize-none" placeholder="What are you looking to build?" rows="3"></textarea>
</div>
<button className="w-full mt-4 py-4 rounded-xl bg-white text-black text-sm font-medium tracking-wide hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" type="button">
                        Send Inquiry
                        <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<section className="py-16 border-y border-white/5 bg-[#050506]">
<div className="container mx-auto px-6">
<div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-50 hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-white hover:scale-110 transition-transform cursor-pointer" height="36" icon="simple-icons:webflow" width="36"></iconify-icon>
<iconify-icon className="text-white hover:scale-110 transition-transform cursor-pointer" height="36" icon="simple-icons:shopify" width="36"></iconify-icon>
<iconify-icon className="text-white hover:scale-110 transition-transform cursor-pointer" height="32" icon="simple-icons:framer" width="32"></iconify-icon>
<iconify-icon className="text-white hover:scale-110 transition-transform cursor-pointer" height="36" icon="simple-icons:supabase" width="36"></iconify-icon>
<iconify-icon className="text-white hover:scale-110 transition-transform cursor-pointer" height="36" icon="simple-icons:react" width="36"></iconify-icon>
</div>
</div>
</section>

<footer className="bg-[#020202] pt-0 pb-12">
<a className="block w-full py-24 md:py-32 bg-[#0A0A0C] hover:bg-white text-center transition-colors duration-700 group relative overflow-hidden" href="#">
<span className="text-5xl md:text-8xl lg:text-9xl font-medium text-white group-hover:text-black tracking-tighter opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.02] inline-block">START GROWING</span>
</a>
<div className="container mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/5 pt-12">
<div className="col-span-1 md:col-span-4">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-white" height="24" icon="solar:infinity-linear" width="24"></iconify-icon>
<span className="text-lg font-medium text-white tracking-tight">Vertex Studio</span>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-zinc-400 tracking-wide">Accepting new clients</span>
</div>
<p className="text-xs text-zinc-600 mt-6 max-w-xs">Crafting digital experiences that merge premium aesthetics with uncompromising performance.</p>
</div>
<div className="col-span-1 md:col-span-2 md:col-start-7 flex flex-col gap-4">
<span className="text-xs font-medium text-white tracking-wide mb-2">Navigation</span>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Work</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Services</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="col-span-1 md:col-span-2 flex flex-col gap-4">
<span className="text-xs font-medium text-white tracking-wide mb-2">Social</span>
<a className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-2" href="#">Twitter <iconify-icon height="14" icon="solar:arrow-right-up-linear" width="14"></iconify-icon></a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-2" href="#">LinkedIn <iconify-icon height="14" icon="solar:arrow-right-up-linear" width="14"></iconify-icon></a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-2" href="#">Dribbble <iconify-icon height="14" icon="solar:arrow-right-up-linear" width="14"></iconify-icon></a>
</div>
<div className="col-span-1 md:col-span-2 flex flex-col gap-4">
<span className="text-xs font-medium text-white tracking-wide mb-2">Legal</span>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Terms of Service</a>
<div className="mt-auto pt-4 text-xs text-zinc-700">© 2024 Vertex Studio</div>
</div>
</div>
</footer>



    </>
  );
}
