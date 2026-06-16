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



        // --- Aura Cursor Logic ---
        const cursorDot = document.getElementById('cursor-dot');
        const cursorCircle = document.getElementById('cursor-circle');
        const interactiveElements = document.querySelectorAll('.interactive-target');
        
        let mouseX = 0;
        let mouseY = 0;
        let circleX = 0;
        let circleY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Dot follows instantly
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });

        // Smooth follower animation
        function animateCursor() {
            const speed = 0.15; // Delay factor
            
            circleX += (mouseX - circleX) * speed;
            circleY += (mouseY - circleY) * speed;
            
            cursorCircle.style.left = circleX + 'px';
            cursorCircle.style.top = circleY + 'px';
            
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Interactive States
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                document.body.classList.add('hovering');
            });
            el.addEventListener('mouseleave', () => {
                document.body.classList.remove('hovering');
            });
        });

        // --- Tilt Effect for Cards ---
        const cards = document.querySelectorAll('.tilt-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
                const rotateY = ((x - centerX) / centerX) * 10;
                
                const inner = card.querySelector('.tilt-inner');
                inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            
            card.addEventListener('mouseleave', () => {
                const inner = card.querySelector('.tilt-inner');
                inner.style.transform = `rotateX(0) rotateY(0)`;
            });
        });

        // --- Intersection Observer for Reveals ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

        document.querySelectorAll('.blur-reveal').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="cursor-dot"></div>
<div id="cursor-circle"></div>

<div className="mesh-bg"></div>
<div className="code-overlay"></div>

<nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 backdrop-blur-md bg-[#050507]/80">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-bold tracking-tight text-white interactive-target" href="#">
                STATUS<span className="text-cyan-400">200</span>
</a>
<div className="hidden md:flex space-x-10 text-xs font-medium uppercase tracking-widest text-zinc-400">
<a className="hover:text-white transition-colors interactive-target" href="#capabilities">Capabilities</a>
<a className="hover:text-white transition-colors interactive-target" href="#mindset">Mindset</a>
<a className="hover:text-white transition-colors interactive-target" href="#contact">Terminal</a>
</div>
<a className="hidden md:flex items-center space-x-2 border border-white/10 bg-white/5 px-4 py-2 rounded text-xs font-semibold tracking-wide text-white hover:bg-white/10 transition-all interactive-target" href="#contact">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
<span>INITIATE</span>
</a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
<div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

<div className="absolute top-0 left-10 md:left-20 opacity-20 hidden lg:block blur-reveal delay-300">
<pre className="font-mono text-[10px] text-cyan-500 text-left">
class Reality extends Virtual {
  constructor() {
    super();
    this.limit = null;
  }
}
                </pre>
</div>
<div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-10 blur-reveal">
<span className="font-mono text-[10px] text-cyan-400">v2.0.4 BUILD STABLE</span>
<span className="w-px h-3 bg-white/20"></span>
<span className="text-[10px] uppercase tracking-widest text-zinc-400">System Online</span>
</div>
<h1 className="blur-reveal text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] mb-8 text-white">
                CODING <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">THE FUTURE</span>
</h1>
<p className="blur-reveal max-w-2xl mx-auto text-base md:text-lg text-zinc-400 font-light leading-relaxed mb-12">
                We don't just build software; we engineer digital dominance. 
                Full-stack architectures designed for scale, speed, and infinite uptime.
            </p>
<div className="blur-reveal flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
<a className="interactive-target group relative px-8 py-4 bg-white text-black text-sm font-bold tracking-tight rounded hover:bg-zinc-200 transition-colors" href="#contact">
                    Initialize Project
                </a>
<a className="interactive-target flex items-center space-x-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#capabilities">
<span>View Protocols</span>
<iconify-icon icon="lucide:arrow-down-right" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
<span className="text-[10px] uppercase tracking-widest">Scroll</span>
<div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
</div>
</section>

<section className="py-32 px-6 relative z-10 border-t border-white/5 bg-[#050507]" id="capabilities">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 blur-reveal">
<div>
<h2 className="text-sm font-mono text-cyan-500 mb-2">01 / CAPABILITIES</h2>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">Proof of Work</h3>
</div>
<p className="text-zinc-500 max-w-md text-right mt-4 md:mt-0">
                    Deploying military-grade infrastructure for commercial applications.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="tilt-card group h-[400px] w-full interactive-target blur-reveal">
<div className="tilt-inner relative h-full w-full bg-[#0A0A0C] border border-white/5 hover:border-cyan-500/50 transition-all duration-300 rounded-xl p-8 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<iconify-icon className="text-zinc-500 group-hover:text-cyan-400 transition-colors mb-6" icon="lucide:layers" width="32"></iconify-icon>
<h4 className="text-xl font-medium text-white mb-2">Full-Stack Architecture</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                                Robust, scalable backends coupled with fluid, reactive frontends. We build systems that handle millions of requests without blinking.
                            </p>
</div>
<div className="relative z-10">
<div className="flex space-x-2 mb-4">
<span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-400">React</span>
<span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-400">Node</span>
<span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-400">AWS</span>
</div>
<div className="w-full h-px bg-white/10 group-hover:bg-cyan-500/50 transition-colors"></div>
</div>
</div>
</div>

<div className="tilt-card group h-[400px] w-full interactive-target blur-reveal delay-100">
<div className="tilt-inner relative h-full w-full bg-[#0A0A0C] border border-white/5 hover:border-purple-500/50 transition-all duration-300 rounded-xl p-8 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<iconify-icon className="text-zinc-500 group-hover:text-purple-400 transition-colors mb-6" icon="lucide:brain-circuit" width="32"></iconify-icon>
<h4 className="text-xl font-medium text-white mb-2">Neural AI Integration</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                                Custom LLMs and autonomous agents that automate complex workflows. Replacing manual operations with intelligent code.
                            </p>
</div>
<div className="relative z-10">
<div className="flex space-x-2 mb-4">
<span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-400">OpenAI</span>
<span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-400">Python</span>
<span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-400">Vector DB</span>
</div>
<div className="w-full h-px bg-white/10 group-hover:bg-purple-500/50 transition-colors"></div>
</div>
</div>
</div>

<div className="tilt-card group h-[400px] w-full interactive-target blur-reveal delay-200">
<div className="tilt-inner relative h-full w-full bg-[#0A0A0C] border border-white/5 hover:border-emerald-500/50 transition-all duration-300 rounded-xl p-8 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<iconify-icon className="text-zinc-500 group-hover:text-emerald-400 transition-colors mb-6" icon="lucide:bar-chart-big" width="32"></iconify-icon>
<h4 className="text-xl font-medium text-white mb-2">Algorithmic SEO</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                                Data-driven optimization strategies. We reverse-engineer search algorithms to place your brand at the absolute top.
                            </p>
</div>
<div className="relative z-10">
<div className="flex space-x-2 mb-4">
<span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-400">Technical</span>
<span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-400">Schema</span>
<span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-400">Analytics</span>
</div>
<div className="w-full h-px bg-white/10 group-hover:bg-emerald-500/50 transition-colors"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10 bg-[#050507]" id="mindset">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative h-[500px] w-full flex items-center justify-center bg-zinc-900/20 border border-white/5 rounded-2xl overflow-hidden blur-reveal">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="scene perspective-1000 w-64 h-64">
<div className="wireframe-cube w-full h-full relative">

<div className="absolute inset-0 border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm" style={{transform: 'translateZ(128px)'}}></div>
<div className="absolute inset-0 border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm" style={{transform: 'rotateY(90deg) translateZ(128px)'}}></div>
<div className="absolute inset-0 border border-blue-500/30 bg-blue-500/5 backdrop-blur-sm" style={{transform: 'rotateY(180deg) translateZ(128px)'}}></div>
<div className="absolute inset-0 border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm" style={{transform: 'rotateY(-90deg) translateZ(128px)'}}></div>
<div className="absolute inset-0 border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm" style={{transform: 'rotateX(90deg) translateZ(128px)'}}></div>
<div className="absolute inset-0 border border-blue-500/30 bg-blue-500/5 backdrop-blur-sm" style={{transform: 'rotateX(-90deg) translateZ(128px)'}}></div>

<div className="absolute inset-0 m-auto w-32 h-32 bg-white/10 shadow-[0_0_50px_rgba(0,240,255,0.4)] rounded-full animate-pulse"></div>
</div>
</div>
</div>

<div className="space-y-10 blur-reveal delay-100">
<div>
<h2 className="text-sm font-mono text-cyan-500 mb-2">02 / ABOUT US</h2>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">The Architect's Mindset</h3>
<p className="text-zinc-400 leading-relaxed font-light">
                            We operate at the intersection of creativity and logic. While others use templates, we write the source code. Our philosophy is simple: efficiency is beauty, and performance is the only metric that matters. 
                        </p>
</div>

<div>
<h4 className="text-sm font-mono text-zinc-500 mb-4 uppercase tracking-widest">Core Stack</h4>
<div className="grid grid-cols-4 gap-3">
<div className="tech-item interactive-target aspect-square flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-lg transition-all duration-300">
<iconify-icon className="text-zinc-400 mb-2" icon="lucide:file-code-2" width="20"></iconify-icon>
<span className="text-[10px] text-zinc-500">Next</span>
</div>
<div className="tech-item interactive-target aspect-square flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-lg transition-all duration-300">
<iconify-icon className="text-zinc-400 mb-2" icon="lucide:database" width="20"></iconify-icon>
<span className="text-[10px] text-zinc-500">SQL</span>
</div>
<div className="tech-item interactive-target aspect-square flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-lg transition-all duration-300">
<iconify-icon className="text-zinc-400 mb-2" icon="lucide:server" width="20"></iconify-icon>
<span className="text-[10px] text-zinc-500">AWS</span>
</div>
<div className="tech-item interactive-target aspect-square flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-lg transition-all duration-300">
<iconify-icon className="text-zinc-400 mb-2" icon="lucide:boxes" width="20"></iconify-icon>
<span className="text-[10px] text-zinc-500">Docker</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 relative z-10 border-t border-white/5">
<div className="max-w-7xl mx-auto text-center blur-reveal">
<h2 className="text-sm font-mono text-cyan-500 mb-2">03 / INVESTMENT</h2>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-10">Select Protocol</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
<div className="p-8 border border-white/10 rounded-2xl bg-[#08080A] text-left hover:border-cyan-500/30 transition-colors interactive-target">
<h4 className="text-xl font-medium text-white">Growth</h4>
<p className="text-3xl font-bold text-white mt-2">Rs. 25k<span className="text-sm text-zinc-500 font-normal">/mo</span></p>
<ul className="mt-6 space-y-3 text-sm text-zinc-400">
<li className="flex items-center"><iconify-icon className="text-cyan-500 mr-2" icon="lucide:check"></iconify-icon> Web Maintenance</li>
<li className="flex items-center"><iconify-icon className="text-cyan-500 mr-2" icon="lucide:check"></iconify-icon> Basic SEO</li>
</ul>
</div>
<div className="p-8 border border-cyan-500/30 rounded-2xl bg-[#08080A] text-left shadow-[0_0_30px_rgba(0,240,255,0.1)] interactive-target">
<h4 className="text-xl font-medium text-white">Scale</h4>
<p className="text-3xl font-bold text-white mt-2">Rs. 65k<span className="text-sm text-zinc-500 font-normal">/mo</span></p>
<ul className="mt-6 space-y-3 text-sm text-zinc-400">
<li className="flex items-center"><iconify-icon className="text-cyan-500 mr-2" icon="lucide:check"></iconify-icon> Full Stack Development</li>
<li className="flex items-center"><iconify-icon className="text-cyan-500 mr-2" icon="lucide:check"></iconify-icon> Custom AI Agents</li>
<li className="flex items-center"><iconify-icon className="text-cyan-500 mr-2" icon="lucide:check"></iconify-icon> Priority Support</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10 bg-[#050507]" id="contact">
<div className="max-w-3xl mx-auto blur-reveal">
<h2 className="text-center text-sm font-mono text-cyan-500 mb-8">04 / TERMINAL</h2>
<div className="w-full bg-[#020203] rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">

<div className="bg-[#111] px-4 py-2 flex items-center space-x-2 border-b border-white/5">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
<span className="ml-4 text-[10px] font-mono text-zinc-500">root@status200:~/project-brief</span>
</div>

<div className="p-6 md:p-10 font-mono text-sm">
<div className="mb-6 text-zinc-400">
<span className="text-green-500">➜</span> <span className="text-cyan-400">~</span> initialize_contact_sequence.sh
                        <br/>
<span className="text-zinc-600">&gt; Loading secure channel...</span>
<br/>
<span className="text-zinc-600">&gt; Ready. Please input project parameters.</span>
</div>
<form className="space-y-6">
<div className="group">
<label className="block text-xs text-zinc-500 mb-1">VAR: CLIENT_EMAIL</label>
<input className="interactive-target w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder-zinc-700" placeholder="enter_email_address" type="email"/>
</div>
<div className="group">
<label className="block text-xs text-zinc-500 mb-1">VAR: PROJECT_SCOPE</label>
<select className="interactive-target w-full bg-[#020203] border-b border-white/10 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors cursor-none">
<option>Full_Stack_Development</option>
<option>AI_Automation</option>
<option>SEO_Optimization</option>
<option>Consultancy</option>
</select>
</div>
<div className="group">
<label className="block text-xs text-zinc-500 mb-1">VAR: BRIEF_DETAILS</label>
<textarea className="interactive-target w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder-zinc-700 resize-none" placeholder="// Describe your objectives here..." rows="3"></textarea>
</div>
<div className="pt-4">
<button className="interactive-target btn-neon group w-full bg-white/5 border border-cyan-500/30 text-cyan-400 py-3 rounded hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all flex items-center justify-center space-x-2" type="button">
<span>EXECUTE_SEND</span>
<span className="terminal-cursor"></span>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020203] py-12 px-6 relative z-10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600">
<div className="flex flex-col mb-4 md:mb-0">
<span className="font-bold text-white tracking-tight">STATUS200</span>
<span className="font-mono text-xs mt-1">System Version 24.11.0</span>
</div>
<div className="flex space-x-8">
<a className="hover:text-cyan-400 transition-colors interactive-target" href="#">GitHub</a>
<a className="hover:text-cyan-400 transition-colors interactive-target" href="#">Twitter</a>
<a className="hover:text-cyan-400 transition-colors interactive-target" href="#">LinkedIn</a>
</div>
</div>
</footer>


    </>
  );
}
