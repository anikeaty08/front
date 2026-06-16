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

        // 1. Mouse Spotlight & Light Effect
        const cards = document.querySelectorAll(".spotlight-card");
        const mouseLight = document.getElementById("mouse-light");
        
        document.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            
            // Move global ambient light
            mouseLight.style.left = `${clientX}px`;
            mouseLight.style.top = `${clientY}px`;

            // Update cards
            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = clientX - rect.left;
                const y = clientY - rect.top;
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        });

        // 2. Animated Counter
        const animateCounters = () => {
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const duration = 2000; 
                const increment = target / (duration / 16); 

                let current = 0;
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        if(target > 100000) {
                            counter.innerText = '$' + Math.ceil(current).toLocaleString('en-US') + '.00';
                        } else {
                            counter.innerText = Math.ceil(current).toLocaleString('en-US');
                        }
                        requestAnimationFrame(updateCounter);
                    } else {
                        if(target > 100000) {
                            counter.innerText = '$' + target.toLocaleString('en-US') + '.00';
                        } else {
                            counter.innerText = target.toLocaleString('en-US');
                        }
                    }
                };
                updateCounter();
            });
        };

        // 3. Text Reveal & Trigger Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                    if(entry.target.classList.contains('counter')) animateCounters();
                    
                    const dashboard = document.querySelector('.slide-up-reveal');
                    if(dashboard && entry.target.contains(dashboard)) {
                        dashboard.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
                        dashboard.style.opacity = '1';
                        dashboard.style.transform = 'perspective(1000px) rotateX(0deg) translateY(0)';
                        setTimeout(animateCounters, 500);
                    }
                }
            });
        }, { threshold: 0.1 });

        // Process Text for Reveal
        document.querySelectorAll('.reveal-text').forEach(element => {
            const text = element.innerText;
            element.innerHTML = text.split(/(\s+)/).map(word => 
                word.trim() === "" ? word : `<span class="word-wrapper"><span class="word-inner">${word}</span></span>`
            ).join('');
            observer.observe(element);
        });
        
        // Observe Dashboard container
        const dashContainer = document.querySelector('.perspective-1000');
        if(dashContainer) observer.observe(dashContainer);

        // 4. Simple Particle System
        const canvas = document.getElementById('particles-canvas');
        const ctx = canvas.getContext('2d');
        let particles = [];
        
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }
            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            for (let i = 0; i < 50; i++) particles.push(new Particle());
        }
        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animateParticles);
        }
        initParticles();
        animateParticles();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="mouse-light" id="mouse-light" style={{left: '38px', top: '99px'}}></div>

<nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 px-4 transition-all duration-300" id="navbar">
<div className="w-full max-w-6xl rounded-2xl border border-white/5 bg-black/60 backdrop-blur-xl px-6 py-4 flex justify-between items-center shadow-lg shadow-black/20 hover:border-white/10 transition-colors">
<a className="text-xl font-semibold tracking-tighter text-white select-none hover:opacity-80 transition-opacity" href="#">
                datastudio.
            </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Integrations</a>
<a className="hover:text-white transition-colors" href="#">Enterprise</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Changelog</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Log in</a>
<div className="button-wrap relative z-10 rounded-full bg-transparent">
<button className="glass-button all-unset cursor-pointer relative rounded-full pointer-events-auto z-30 outline-none focus:outline-none">
<span className="button-text relative block select-none font-medium text-xs text-white tracking-tight px-4 py-2">
                            Get Access
                        </span>
</button>
</div>
<button className="md:hidden text-white">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<header className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">

<canvas height="612" id="particles-canvas" width="926"></canvas>

<div className="grain-overlay fixed inset-0 z-0"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] orb-gradient z-0"></div>
<div className="relative z-10 px-6 max-w-7xl mx-auto text-center flex flex-col items-center">

<div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:scale-105 transition-all cursor-pointer group">
<span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)] group-hover:animate-pulse"></span>
<span className="text-xs font-medium text-indigo-200 tracking-wide uppercase">Datastudio 2.0 is live</span>
<svg className="lucide lucide-arrow-right w-3 h-3 text-white/50 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>

<h1 className="reveal-text text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tighter font-medium text-white mb-8 max-w-5xl mx-auto reveal-active"><span className="word-wrapper"><span className="word-inner">Turn</span></span> <span className="word-wrapper"><span className="word-inner">complex</span></span> <span className="word-wrapper"><span className="word-inner">metrics</span></span>
<span className="word-wrapper"><span className="word-inner">into</span></span> <span className="word-wrapper"><span className="word-inner">instant</span></span> <span className="word-wrapper"><span className="word-inner">momentum.</span></span></h1>

<p className="reveal-text text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10 font-light reveal-active"><span className="word-wrapper"><span className="word-inner">A</span></span> <span className="word-wrapper"><span className="word-inner">next</span></span> <span className="word-wrapper"><span className="word-inner">generation</span></span> <span className="word-wrapper"><span className="word-inner">analytics</span></span> <span className="word-wrapper"><span className="word-inner">SaaS</span></span> <span className="word-wrapper"><span className="word-inner">platform</span></span> <span className="word-wrapper"><span className="word-inner">helping</span></span> <span className="word-wrapper"><span className="word-inner">growing</span></span> <span className="word-wrapper"><span className="word-inner">startups</span></span> <span className="word-wrapper"><span className="word-inner">and</span></span> <span className="word-wrapper"><span className="word-inner">digital</span></span> <span className="word-wrapper"><span className="word-inner">agencies</span></span> <span className="word-wrapper"><span className="word-inner">make</span></span> <span className="word-wrapper"><span className="word-inner">smarter,</span></span> <span className="word-wrapper"><span className="word-inner">faster</span></span> <span className="word-wrapper"><span className="word-inner">decisions.</span></span></p>

<div className="flex flex-col md:flex-row items-center gap-6 mb-20">
<div className="button-wrap relative z-10 rounded-full bg-transparent scale-110 hover:scale-115 transition-transform">
<button className="glass-button all-unset cursor-pointer relative rounded-full pointer-events-auto z-30 outline-none focus:outline-none">
<span className="button-text relative block select-none font-medium text-sm text-white tracking-tight px-8 py-3.5">
                            Start free trial
                        </span>
</button>
</div>
<div className="flex -space-x-2 items-center group cursor-pointer">
<div className="w-8 h-8 rounded-full border border-black bg-neutral-800 flex items-center justify-center text-[10px] text-white transition-transform group-hover:translate-x-1">JD</div>
<div className="w-8 h-8 rounded-full border border-black bg-neutral-700 flex items-center justify-center text-[10px] text-white transition-transform group-hover:translate-x-1">AS</div>
<div className="w-8 h-8 rounded-full border border-black bg-neutral-600 flex items-center justify-center text-[10px] text-white transition-transform group-hover:translate-x-1">MK</div>
<span className="pl-4 text-xs text-neutral-500 font-medium group-hover:text-white transition-colors">Trusted by 2,000+ teams</span>
</div>
</div>

<div className="w-full max-w-6xl mx-auto perspective-1000 relative">
<div className="floating-dashboard relative rounded-xl bg-neutral-900/50 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-sm p-1 ring-1 ring-white/5 opacity-0 slide-up-reveal" style={{transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateX(0deg) translateY(0px)', transition: '1s cubic-bezier(0.16, 1, 0.3, 1)', opacity: '1'}}>

<div className="h-10 border-b border-white/5 bg-neutral-900/80 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 hover:bg-red-500 transition-colors"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 hover:bg-yellow-500 transition-colors"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 hover:bg-green-500 transition-colors"></div>
</div>
<div className="mx-auto w-1/4 h-5 bg-white/5 rounded flex items-center justify-center text-[10px] text-neutral-600 tracking-tight cursor-default hover:text-neutral-400 transition-colors">datastudio.app/dashboard</div>
</div>

<div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-neutral-950/80">

<div className="space-y-6">
<div className="spotlight-card p-5 rounded-lg space-y-4 hover:bg-white/[0.03] transition-colors" style={{-MouseX: '-15px', -MouseY: '-556px'}}>
<div className="flex justify-between items-center text-xs text-neutral-400">
<span>Total Revenue</span>
<svg className="lucide lucide-dollar-sign w-3.5 h-3.5" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<div className="text-3xl font-medium tracking-tight text-white counter" data-target="124500">$996.00</div>
<div className="text-xs text-green-400 flex items-center gap-1">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> +12.5% vs last month
                                </div>
</div>
<div className="spotlight-card p-5 rounded-lg h-40 flex items-end justify-between gap-2" style={{-MouseX: '-15px', -MouseY: '-722px'}}>
<div className="w-full bg-indigo-500/20 h-[40%] rounded-sm hover:bg-indigo-500/40 transition-all hover:scale-y-110 origin-bottom bar-animate" style={{animationDelay: '0.1s'}}></div>
<div className="w-full bg-indigo-500/20 h-[60%] rounded-sm hover:bg-indigo-500/40 transition-all hover:scale-y-110 origin-bottom bar-animate" style={{animationDelay: '0.2s'}}></div>
<div className="w-full bg-indigo-500/20 h-[30%] rounded-sm hover:bg-indigo-500/40 transition-all hover:scale-y-110 origin-bottom bar-animate" style={{animationDelay: '0.3s'}}></div>
<div className="w-full bg-indigo-500 h-[75%] rounded-sm shadow-[0_0_15px_rgba(99,102,241,0.5)] bar-animate" style={{animationDelay: '0.4s'}}></div>
<div className="w-full bg-indigo-500/20 h-[50%] rounded-sm hover:bg-indigo-500/40 transition-all hover:scale-y-110 origin-bottom bar-animate" style={{animationDelay: '0.5s'}}></div>
</div>
</div>

<div className="md:col-span-2 spotlight-card rounded-lg p-5 flex flex-col" style={{-MouseX: '-294.328125px', -MouseY: '-556px'}}>
<div className="flex justify-between items-center mb-6">
<h3 className="text-xs font-medium text-neutral-200">Live Traffic</h3>
<div className="flex gap-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[10px] text-neutral-400 uppercase tracking-wider">Real-time</span>
</div>
</div>
<div className="flex-1 flex items-end gap-1 border-b border-white/5 pb-2 relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<svg className="w-full h-full overflow-visible preserve-3d" viewbox="0 0 100 40">
<defs>
<lineargradient id="lineGradient" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#6366f1" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#a855f7"></stop>
</lineargradient>
</defs>
<path className="chart-path" d="M0 35 Q 10 30, 20 32 T 40 25 T 60 15 T 80 20 T 100 5" fill="none" stroke="url(#lineGradient)" strokeLinecap="round" strokeWidth="0.8"></path>
<path d="M0 35 L 100 35" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="2 2" strokeWidth="0.2"></path>
</svg>

</div>
<div className="mt-4 flex gap-4 overflow-x-auto no-scrollbar">
<div className="flex-shrink-0 p-3 rounded bg-white/5 w-32 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
<div className="text-[10px] text-neutral-400 mb-1 uppercase tracking-wider">Active Users</div>
<div className="font-medium text-sm counter" data-target="2401">20</div>
</div>
<div className="flex-shrink-0 p-3 rounded bg-white/5 w-32 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
<div className="text-[10px] text-neutral-400 mb-1 uppercase tracking-wider">Avg. Session</div>
<div className="font-medium text-sm">4m 32s</div>
</div>
<div className="flex-shrink-0 p-3 rounded bg-white/5 w-32 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
<div className="text-[10px] text-neutral-400 mb-1 uppercase tracking-wider">Bounce Rate</div>
<div className="font-medium text-sm">24%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-12 border-y border-white/5 bg-black/50 relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 mb-6 text-center">
<p className="text-xs font-medium text-neutral-500 tracking-wide uppercase">Powering data teams at</p>
</div>
<div className="marquee-container w-full overflow-hidden relative">
<div className="marquee-content flex gap-12 w-max items-center">

<span className="text-xl font-bold tracking-tight text-white/30 hover:text-white transition-colors cursor-default flex items-center gap-2"><svg className="lucide lucide-triangle w-5 h-5" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> Vercel</span>
<span className="text-xl font-bold tracking-tight text-white/30 hover:text-white transition-colors cursor-default flex items-center gap-2"><svg className="lucide lucide-box w-5 h-5" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> Dropbox</span>
<span className="text-xl font-bold tracking-tight text-white/30 hover:text-white transition-colors cursor-default flex items-center gap-2"><svg className="lucide lucide-circle w-5 h-5" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> Linear</span>
<span className="text-xl font-bold tracking-tight text-white/30 hover:text-white transition-colors cursor-default flex items-center gap-2"><svg className="lucide lucide-hexagon w-5 h-5" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> Raycast</span>
<span className="text-xl font-bold tracking-tight text-white/30 hover:text-white transition-colors cursor-default flex items-center gap-2"><svg className="lucide lucide-square w-5 h-5" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg> Notion</span>
<span className="text-xl font-bold tracking-tight text-white/30 hover:text-white transition-colors cursor-default flex items-center gap-2"><svg className="lucide lucide-diamond w-5 h-5" data-lucide="diamond" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg> Sketch</span>
<span className="text-xl font-bold tracking-tight text-white/30 hover:text-white transition-colors cursor-default flex items-center gap-2"><svg className="lucide lucide-slack w-5 h-5" data-lucide="slack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="1.5" width="3" x="13" y="2"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect height="8" rx="1.5" width="3" x="8" y="14"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect height="3" rx="1.5" width="8" x="14" y="13"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect height="3" rx="1.5" width="8" x="2" y="8"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></svg> Slack</span>
<span className="text-xl font-bold tracking-tight text-white/30 hover:text-white transition-colors cursor-default flex items-center gap-2"><svg className="lucide lucide-cloud w-5 h-5" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg> Supabase</span>

<span className="text-xl font-bold tracking-tight text-white/30 hover:text-white transition-colors cursor-default flex items-center gap-2"><svg className="lucide lucide-triangle w-5 h-5" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> Vercel</span>
<span className="text-xl font-bold tracking-tight text-white/30 hover:text-white transition-colors cursor-default flex items-center gap-2"><svg className="lucide lucide-box w-5 h-5" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> Dropbox</span>
<span className="text-xl font-bold tracking-tight text-white/30 hover:text-white transition-colors cursor-default flex items-center gap-2"><svg className="lucide lucide-circle w-5 h-5" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> Linear</span>
<span className="text-xl font-bold tracking-tight text-white/30 hover:text-white transition-colors cursor-default flex items-center gap-2"><svg className="lucide lucide-hexagon w-5 h-5" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> Raycast</span>
<span className="text-xl font-bold tracking-tight text-white/30 hover:text-white transition-colors cursor-default flex items-center gap-2"><svg className="lucide lucide-square w-5 h-5" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg> Notion</span>
<span className="text-xl font-bold tracking-tight text-white/30 hover:text-white transition-colors cursor-default flex items-center gap-2"><svg className="lucide lucide-diamond w-5 h-5" data-lucide="diamond" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg> Sketch</span>
<span className="text-xl font-bold tracking-tight text-white/30 hover:text-white transition-colors cursor-default flex items-center gap-2"><svg className="lucide lucide-slack w-5 h-5" data-lucide="slack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="1.5" width="3" x="13" y="2"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect height="8" rx="1.5" width="3" x="8" y="14"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect height="3" rx="1.5" width="8" x="14" y="13"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect height="3" rx="1.5" width="8" x="2" y="8"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></svg> Slack</span>
<span className="text-xl font-bold tracking-tight text-white/30 hover:text-white transition-colors cursor-default flex items-center gap-2"><svg className="lucide lucide-cloud w-5 h-5" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg> Supabase</span>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 relative z-10 max-w-[1400px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="max-w-2xl">
<p className="text-indigo-400 font-medium mb-4 tracking-tight text-sm">Unified Intelligence</p>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter leading-tight text-white reveal-text"><span className="word-wrapper"><span className="word-inner">Everything</span></span> <span className="word-wrapper"><span className="word-inner">you</span></span> <span className="word-wrapper"><span className="word-inner">need</span></span> <span className="word-wrapper"><span className="word-inner">to</span></span>
<span className="word-wrapper"><span className="word-inner">understand</span></span> <span className="word-wrapper"><span className="word-inner">your</span></span> <span className="word-wrapper"><span className="word-inner">growth.</span></span></h2>
</div>
<div className="mt-8 md:mt-0">
<button className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm border border-white/10 rounded-full px-4 py-2 hover:bg-white/5 hover:border-white/20">
                    View all features <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="spotlight-card p-8 rounded-xl group transition-colors duration-500" style={{-MouseX: '-10px', -MouseY: '-1492.0625px'}}>
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Instant Momentum</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                    Connect your data sources in seconds. Our platform automatically normalizes and structures your metrics for immediate analysis.
                </p>
</div>

<div className="spotlight-card p-8 rounded-xl group transition-colors duration-500" style={{-MouseX: '-292.65625px', -MouseY: '-1492.0625px'}}>
<div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">AI Insights</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                    Don't just see the numbers, understand the why. Our generative AI analyzes trends and anomalies to provide recommendations.
                </p>
</div>

<div className="spotlight-card p-8 rounded-xl group transition-colors duration-500" style={{-MouseX: '-575.328125px', -MouseY: '-1492.0625px'}}>
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
<svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Unified View</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                    Break down silos. View marketing, sales, and product data side-by-side to understand the full customer journey.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 relative border-t border-white/5">

<div className="absolute inset-0 z-0 opacity-20" style={{backgroundSize: '30px 30px', backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)'}}></div>
<div className="max-w-[1200px] mx-auto relative z-10">
<div className="mb-12 text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">Built for scale</h2>
<p className="text-neutral-400 text-sm max-w-lg mx-auto">Engineered to handle millions of events per second with sub-millisecond latency.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="spotlight-card md:col-span-2 md:row-span-2 rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative group" style={{-MouseX: '-10px', -MouseY: '-2112.8125px'}}>
<div className="relative z-10">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-white border border-white/10 group-hover:bg-white/10 transition-colors"><svg className="lucide lucide-database w-5 h-5" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg></div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Real-time Sync Engine</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Our proprietary sync engine connects directly to your Postgres or Snowflake production databases without affecting performance.</p>
</div>
<div className="mt-8 relative h-40 w-full bg-neutral-900/50 rounded-lg border border-white/5 overflow-hidden flex items-center justify-center shadow-inner">

<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 h-full w-full animate-[scan_3s_ease-in-out_infinite] translate-y-[-100%]"></div>
<div className="absolute inset-0 flex items-center justify-center gap-12 opacity-40">
<div className="w-px h-full bg-white/10"></div>
<div className="w-px h-full bg-white/10"></div>
<div className="w-px h-full bg-white/10"></div>
<div className="w-px h-full bg-white/10"></div>
</div>
<div className="w-3/4 h-1/2 border border-indigo-500/30 bg-indigo-500/10 rounded backdrop-blur-md relative z-10 flex items-center justify-center">
<div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
<span className="text-[10px] font-mono text-indigo-300">SYNC_ACTIVE</span>
</div>
</div>
</div>

<div className="spotlight-card md:col-span-2 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden group" style={{-MouseX: '-430px', -MouseY: '-2112.8125px'}}>
<div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-green-500/5 to-transparent transition-opacity opacity-50 group-hover:opacity-100"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-4 text-white border border-white/10"><svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg></div>
<span className="text-xs font-mono text-green-400 bg-green-400/10 px-2 py-1 rounded border border-green-400/20 shadow-[0_0_10px_rgba(74,222,128,0.2)]">SOC2 Type II</span>
</div>
<div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Enterprise Grade Security</h3>
<p className="text-xs text-neutral-400">End-to-end encryption with granular role-based access control.</p>
</div>
</div>
</div>

<div className="spotlight-card rounded-2xl p-6 flex flex-col justify-between group" style={{-MouseX: '-430px', -MouseY: '-2420.8125px'}}>
<div className="text-3xl font-medium text-white tracking-tighter group-hover:scale-110 transition-transform origin-left">99.99%</div>
<div>
<h3 className="text-sm font-medium text-neutral-200 mt-2">Uptime SLA</h3>
<p className="text-xs text-neutral-500 mt-1">Guaranteed reliability.</p>
</div>
</div>

<div className="spotlight-card rounded-2xl p-6 flex flex-col justify-between group" style={{-MouseX: '-640px', -MouseY: '-2420.8125px'}}>
<div className="text-3xl font-medium text-white tracking-tighter flex items-center gap-2 group-hover:text-yellow-200 transition-colors"><svg className="lucide lucide-zap w-6 h-6 text-yellow-400 fill-yellow-400/20 group-hover:fill-yellow-400 transition-colors" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> 40ms</div>
<div>
<h3 className="text-sm font-medium text-neutral-200 mt-2">Global Latency</h3>
<p className="text-xs text-neutral-500 mt-1">Edge network deployed.</p>
</div>
</div>
</div>
</div>
</section>
<style>
        @keyframes scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }
    </style>

<section className="sm:py-24 pt-16 pb-16 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-900/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="mb-12 text-center relative z-10">
<p className="text-xs uppercase text-indigo-400 tracking-widest mb-2 font-medium">Featured Reviews</p>
<h2 className="text-3xl sm:text-4xl tracking-tighter font-medium text-white">Trusted by modern teams</h2>
</div>
<div className="flex sm:py-20 z-10 pt-12 pb-12 relative items-center justify-center" style={{minHeight: '450px'}}>
<div className="flex items-center justify-center relative w-full">

<div className="glass-panel p-6 rounded-xl w-[340px] h-[340px] bg-neutral-900/80 border border-white/5 absolute -translate-x-48 scale-90 blur-[2px] hover:blur-0 hover:z-20 hover:scale-100 transition-all duration-500 cursor-pointer shadow-2xl">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/10 mb-4"><svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></div>
<p className="text-sm leading-relaxed text-neutral-300 mb-4 font-light">Datastudio completely transformed how we track our KPIs. The unified dashboard saved us hours of manual reporting every week.</p>
<div className="pt-3 border-t border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] font-bold">AR</div>
<div><div className="text-xs font-medium text-white">Alex Rivera</div><div className="text-xs text-neutral-500">CEO, GrowthLabs</div></div>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-xl w-[340px] h-[340px] bg-neutral-800 border border-white/10 relative z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-all duration-500">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/10 mb-4"><svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></div>
<p className="text-sm leading-relaxed text-neutral-200 mb-4 font-light">The AI insights are scary good. It predicted our churn spike two weeks before it happened, allowing us to take action immediately.</p>
<div className="pt-3 border-t border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-bold">NP</div>
<div><div className="text-xs font-medium text-white">Nina Patel</div><div className="text-xs text-neutral-500">Director, PixelCraft</div></div>
</div>
<div className="flex items-center gap-1"><svg className="lucide lucide-star w-3 h-3 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><span className="text-xs font-medium text-white">5.0</span></div>
</div>
</div>

<div className="glass-panel p-6 rounded-xl w-[340px] h-[340px] bg-neutral-900/80 border border-white/5 absolute translate-x-48 scale-90 blur-[2px] hover:blur-0 hover:z-20 hover:scale-100 transition-all duration-500 cursor-pointer shadow-2xl">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/10 mb-4"><svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></div>
<p className="text-sm leading-relaxed text-neutral-300 mb-4 font-light">Exceptional design and functionality. It connects to all our tools—Stripe, HubSpot, GA4—seamlessly.</p>
<div className="pt-3 border-t border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold">MW</div>
<div><div className="text-xs font-medium text-white">Marcus Webb</div><div className="text-xs text-neutral-500">VP Product, Velocity</div></div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="md:px-12 overflow-hidden text-white bg-black border-white/5 border-t pt-24 pr-6 pb-6 pl-6 relative">
<div className="flex flex-col md:flex-row justify-between items-start mb-32 md:mb-48 max-w-[1400px] mx-auto z-10 relative">
<div className="mb-12 md:mb-0">
<h3 className="reveal-text text-3xl md:text-5xl tracking-tighter mb-8 font-medium"><span className="word-wrapper"><span className="word-inner">Ready</span></span> <span className="word-wrapper"><span className="word-inner">to</span></span> <span className="word-wrapper"><span className="word-inner">build</span></span> <span className="word-wrapper"><span className="word-inner">momentum?</span></span></h3>
<div className="button-wrap relative z-10 rounded-full bg-transparent w-fit">
<button className="glass-button all-unset cursor-pointer relative rounded-full pointer-events-auto z-30 outline-none focus:outline-none">
<span className="button-text relative block select-none font-medium text-sm text-white tracking-tight px-6 py-3">
                            Get Started Now
                        </span>
</button>
</div>
</div>
<div className="flex gap-16 md:gap-32 text-sm text-neutral-400 font-medium leading-loose">
<ul className="space-y-2">
<li><span className="text-white font-semibold mb-2 block">Platform</span></li>
<li><a className="hover:text-white transition-colors" href="#">Analytics</a></li>
<li><a className="hover:text-white transition-colors" href="#">Forecasting</a></li>
</ul>
<ul className="space-y-2">
<li><span className="text-white font-semibold mb-2 block">Company</span></li>
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Customers</a></li>
</ul>
</div>
</div>
<div className="w-full flex justify-center items-end opacity-20 pointer-events-none select-none">
<h1 className="text-[18vw] leading-[0.7] tracking-tighter font-semibold text-white/5 mix-blend-overlay">Datastudio.</h1>
</div>
</footer>


    </>
  );
}
