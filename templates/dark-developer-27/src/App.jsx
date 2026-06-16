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



        // Initialize Icons
        lucide.createIcons();

        // Mouse Move Effect for Flashlight (Optimized)
        const container = document.getElementById('main-container');
        
        container.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                const x = e.clientX;
                const y = e.clientY;
                document.documentElement.style.setProperty('--cursor-x', `${x}px`);
                document.documentElement.style.setProperty('--cursor-y', `${y}px`);
            });
        });

        // Simple observer for fading in elements
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-play');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-text').forEach((el) => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0">
<div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
</div>

<div className="flex gap-10 items-center justify-center z-10 scale-[0.85] lg:scale-100 transition-transform duration-500">

<div className="w-[393px] h-[852px] bg-neutral-900 rounded-[55px] border-[8px] border-neutral-800 relative overflow-hidden iphone-shadow flex flex-col shrink-0 flashlight-card group">
<div className="flashlight-border"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-[35px] w-[120px] bg-black rounded-b-3xl z-50 flex justify-center items-center">
<div className="w-16 h-4 bg-neutral-900/50 rounded-full"></div>
</div>

<div className="absolute inset-0 bg-grid-3d opacity-30 z-0 pointer-events-none"></div>

<div className="relative z-10 h-full flex flex-col p-8 pt-16">

<div className="flex justify-between items-center mb-12 reveal-text" style={{animationDelay: '0.1s'}}>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center">
<span className="font-mono font-bold text-xs text-white">AN</span>
</div>
<span className="font-mono text-sm tracking-tight text-neutral-400">AHMAD.DEV</span>
</div>
<i className="w-6 h-6 text-neutral-400" data-lucide="menu"></i>
</div>

<div className="flex flex-col gap-2 mb-8">
<h1 className="font-mono-heading font-semibold text-5xl leading-[1.1] tracking-tighter text-white">
<span className="reveal-text inline-block" style={{animationDelay: '0.2s'}}>Crafting</span>
<span className="reveal-text inline-block text-blue-500" style={{animationDelay: '0.3s'}}>Digital</span>
<span className="reveal-text inline-block" style={{animationDelay: '0.4s'}}>Reality</span>
</h1>
</div>

<p className="text-lg text-neutral-400 leading-relaxed mb-10 reveal-text" style={{animationDelay: '0.5s'}}>
                    Fullstack Developer specializing in Next.js 16, TypeScript, and high-performance immersive web applications.
                </p>

<div className="grid grid-cols-2 gap-4 mb-10 reveal-text" style={{animationDelay: '0.6s'}}>
<div className="p-4 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 backdrop-blur-md">
<span className="block text-3xl font-mono-heading font-semibold text-white mb-1">5+</span>
<span className="text-sm text-neutral-500">Years Exp.</span>
</div>
<div className="p-4 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 backdrop-blur-md">
<span className="block text-3xl font-mono-heading font-semibold text-white mb-1">40+</span>
<span className="text-sm text-neutral-500">Projects</span>
</div>
</div>

<div className="mt-auto reveal-text" style={{animationDelay: '0.7s'}}>
<button className="w-full relative overflow-hidden group bg-white text-black py-5 rounded-full font-medium text-lg tracking-tight animate-shiny sonar-effect">
<span className="relative z-10 flex items-center justify-center gap-2">
                            Explore Work <i className="w-5 h-5" data-lucide="arrow-right"></i>
</span>
</button>
</div>
</div>
</div>

<div className="w-[393px] h-[852px] bg-neutral-900 rounded-[55px] border-[8px] border-neutral-800 relative overflow-hidden iphone-shadow flex flex-col shrink-0 flashlight-card">
<div className="flashlight-border"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-[35px] w-[120px] bg-black rounded-b-3xl z-50"></div>

<div className="h-full overflow-y-auto no-scrollbar scroll-smooth snap-y snap-mandatory">

<div className="h-full w-full relative flex flex-col p-6 pt-16 snap-start shrink-0">
<div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>
<div className="text-center mb-8 reveal-text" style={{animationDelay: '0.2s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            FEATURED PROJECT
                        </div>
<h2 className="font-mono-heading font-semibold text-5xl tracking-tighter text-white mb-2">Aura</h2>
<p className="text-lg text-neutral-400">Clutter-free communication.</p>
</div>

<div className="flex-1 relative w-full perspective-1000">
<div className="relative w-full h-[380px] bg-neutral-800/30 rounded-3xl border border-neutral-700/50 overflow-hidden backdrop-blur-sm p-4 flex flex-col gap-4 float-animation shadow-2xl">

<div className="self-start max-w-[80%] bg-neutral-700/50 rounded-2xl rounded-tl-none p-3 backdrop-blur-md">
<p className="text-sm text-neutral-200">Have you seen the new Aura update?</p>
</div>

<div className="self-end max-w-[80%] bg-blue-600 rounded-2xl rounded-tr-none p-3 shadow-lg shadow-blue-900/20">
<p className="text-sm text-white">It's incredibly fast. The clutter is gone.</p>
</div>

<div className="self-start max-w-[60%] bg-neutral-700/50 rounded-2xl p-3 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-white flex items-center justify-center"><i className="w-3 h-3 text-black fill-current" data-lucide="play"></i></div>
<div className="flex gap-0.5 items-end h-4">
<div className="w-1 h-2 bg-blue-400 rounded-full animate-pulse"></div>
<div className="w-1 h-4 bg-blue-400 rounded-full animate-pulse delay-75"></div>
<div className="w-1 h-3 bg-blue-400 rounded-full animate-pulse delay-100"></div>
<div className="w-1 h-2 bg-blue-400 rounded-full animate-pulse"></div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-2 bg-neutral-950 border border-neutral-800 p-2 rounded-xl flex gap-3 shadow-xl rotate-3">
<i className="text-yellow-400 w-5 h-5" data-lucide="zap"></i>
<i className="text-green-400 w-5 h-5" data-lucide="shield"></i>
</div>
</div>
<div className="mt-12 flex justify-center">
<div className="animate-bounce text-neutral-600">
<i className="w-6 h-6" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="h-[300px] w-full bg-neutral-900 border-t border-neutral-800 flex flex-col justify-center snap-center relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-neutral-900 to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-neutral-900 to-transparent z-10"></div>
<h3 className="text-center font-mono text-neutral-500 text-sm mb-8 tracking-widest uppercase">Built With</h3>
<div className="flex overflow-hidden whitespace-nowrap mask-linear-gradient">
<div className="flex animate-marquee items-center gap-8 pr-8">
<span className="text-3xl font-semibold text-neutral-300">Next.js 16</span>
<span className="text-3xl font-semibold text-neutral-700">•</span>
<span className="text-3xl font-semibold text-neutral-300">Socket.io</span>
<span className="text-3xl font-semibold text-neutral-700">•</span>
<span className="text-3xl font-semibold text-neutral-300">MongoDB</span>
<span className="text-3xl font-semibold text-neutral-700">•</span>
<span className="text-3xl font-semibold text-neutral-300">Tailwind</span>
<span className="text-3xl font-semibold text-neutral-700">•</span>
<span className="text-3xl font-semibold text-neutral-300">Redis</span>
<span className="text-3xl font-semibold text-neutral-700">•</span>

<span className="text-3xl font-semibold text-neutral-300">Next.js 16</span>
<span className="text-3xl font-semibold text-neutral-700">•</span>
<span className="text-3xl font-semibold text-neutral-300">Socket.io</span>
<span className="text-3xl font-semibold text-neutral-700">•</span>
<span className="text-3xl font-semibold text-neutral-300">MongoDB</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 bg-neutral-800/80 backdrop-blur-xl p-2 rounded-full border border-neutral-700 z-50">
<button className="p-2 rounded-full hover:bg-white/10 transition-colors"><i className="w-5 h-5 text-white" data-lucide="chevron-left"></i></button>
<button className="p-2 rounded-full hover:bg-white/10 transition-colors"><i className="w-5 h-5 text-white" data-lucide="chevron-right"></i></button>
</div>
</div>

<div className="w-[393px] h-[852px] bg-neutral-900 rounded-[55px] border-[8px] border-neutral-800 relative overflow-hidden iphone-shadow flex flex-col shrink-0 flashlight-card">
<div className="flashlight-border"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-[35px] w-[120px] bg-black rounded-b-3xl z-50"></div>

<div className="h-[35%] w-full bg-neutral-800/30 border-b border-neutral-800 flex items-center justify-center relative overflow-hidden">

<div className="absolute w-[400px] h-[400px] border border-neutral-700/30 rounded-full flex items-center justify-center animate-spin" style={{animationDuration: '20s'}}>
<div className="w-[250px] h-[250px] border border-neutral-700/40 rounded-full flex items-center justify-center">
<div className="w-[100px] h-[100px] bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
</div>
<div className="absolute top-0 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
</div>
<div className="z-10 text-center">
<h2 className="font-mono-heading font-semibold text-3xl text-white tracking-tight">Capabilities</h2>
<p className="text-sm text-neutral-400 mt-2">Core Tech Stack</p>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar p-6 bg-neutral-900">
<div className="space-y-6">

<div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-neutral-800 transition-colors border border-transparent hover:border-neutral-700 cursor-default">
<div className="mt-1 p-2 bg-neutral-800 rounded-lg group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors text-neutral-400">
<i className="w-6 h-6" data-lucide="layout-template"></i>
</div>
<div>
<h4 className="text-xl font-semibold text-white mb-1">Frontend Architecture</h4>
<p className="text-neutral-400 text-sm leading-relaxed">Expertise in Next.js 16 (App Router), React Server Components, and complex state management.</p>
</div>
</div>
<div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-neutral-800 transition-colors border border-transparent hover:border-neutral-700 cursor-default">
<div className="mt-1 p-2 bg-neutral-800 rounded-lg group-hover:bg-green-500/20 group-hover:text-green-400 transition-colors text-neutral-400">
<i className="w-6 h-6" data-lucide="server"></i>
</div>
<div>
<h4 className="text-xl font-semibold text-white mb-1">Backend Systems</h4>
<p className="text-neutral-400 text-sm leading-relaxed">Scalable Node.js &amp; Express APIs, Socket.io for real-time events, and MongoDB aggregations.</p>
</div>
</div>
<div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-neutral-800 transition-colors border border-transparent hover:border-neutral-700 cursor-default">
<div className="mt-1 p-2 bg-neutral-800 rounded-lg group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors text-neutral-400">
<i className="w-6 h-6" data-lucide="palette"></i>
</div>
<div>
<h4 className="text-xl font-semibold text-white mb-1">UI Engineering</h4>
<p className="text-neutral-400 text-sm leading-relaxed">Tailwind v4 mastery, Framer Motion animations, and pixel-perfect design implementation.</p>
</div>
</div>

<div className="mt-12 pt-8 border-t border-neutral-800">
<h3 className="font-mono-heading text-2xl font-semibold text-white mb-4">Let's build together.</h3>
<form className="space-y-4" onsubmit="event.preventDefault()">
<input className="w-full bg-neutral-800 border border-neutral-700 text-white p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors placeholder:text-neutral-500" placeholder="email@example.com" type="email"/>
<button className="w-full bg-white text-black font-semibold py-4 rounded-xl hover:bg-neutral-200 transition-colors">
                                Send Message
                            </button>
</form>
</div>
<div className="h-10"></div> 
</div>
</div>
</div>
</div>


    </>
  );
}
