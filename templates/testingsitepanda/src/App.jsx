import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
indigo: { 500: '#6366f1' },
zinc: { 850: '#1f1f22', 950: '#09090b' }
},
fontFamily: {
mono: ['"Space Mono"', 'monospace'],
sans: ['"Inter"', 'sans-serif'],
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
},
animation: {
'marquee': 'marquee 25s linear infinite',
'beam': 'beam 2s linear infinite',
'sonar': 'sonar 2s cubic-bezier(0, 0, 0.2, 1) infinite',
'spin-slow': 'spin 8s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
beam: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' },
},
sonar: {
'0%': { transform: 'scale(1)', opacity: '0.5' },
'100%': { transform: 'scale(3)', opacity: '0' },
}
}
}
}
}



        // GSAP Animations
        document.addEventListener('DOMContentLoaded', () => {
            gsap.registerPlugin(ScrollTrigger);

            // Function to wrap words in spans for stagger effect
            const splitText = (selector) => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => {
                    const text = el.innerText;
                    el.innerHTML = text.split(' ').map(word => `<span class="inline-block overflow-hidden"><span class="inline-block translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">${word}&nbsp;</span></span>`).join('');
                });
            };

            // Apply split text
            splitText('.word-reveal-1');
            splitText('.word-reveal-2');
            splitText('.word-reveal-3');

            // Animate on load for Phone 2 (Hero)
            const heroSpans = document.querySelectorAll('.word-reveal-2 span span');
            gsap.to(heroSpans, {
                y: '0%',
                duration: 1,
                stagger: 0.05,
                ease: "power4.out",
                delay: 0.5
            });

            // Mock ScrollTrigger inside containers
            // Since we have overflow-y-auto, we can't use standard ScrollTrigger on body
            // We'll just animate the others with a simple delay for the demo to simulate "in view"
            
            const animateSection = (selector, delay) => {
                const spans = document.querySelectorAll(`${selector} span span`);
                gsap.to(spans, {
                    y: '0%',
                    duration: 1,
                    stagger: 0.05,
                    ease: "power4.out",
                    delay: delay
                });
            };

            animateSection('.word-reveal-1', 1.2);
            animateSection('.word-reveal-3', 1.5);

            // Flashlight Effect
            const cards = document.querySelectorAll('.flashlight-card');
            
            document.addEventListener('mousemove', (e) => {
                cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    card.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.15), rgba(24, 24, 27, 0.6) 40%)`;
                });
            });

            // Carousel Logic (Simple Implementation)
            const projects = document.querySelectorAll('.project-card');
            let currentProject = 0;
            
            // Loop through projects animation
            setInterval(() => {
                projects.forEach((p, i) => {
                    if (i === currentProject) {
                        p.classList.remove('opacity-60');
                        p.classList.add('opacity-100');
                    } else {
                        p.classList.remove('opacity-100');
                        p.classList.add('opacity-60');
                    }
                });
                currentProject = (currentProject + 1) % projects.length;
            }, 3000);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flex items-center gap-12 transform-style-3d scale-[0.85] md:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">

<div className="iphone-shadow relative w-[393px] h-[852px] bg-zinc-950 rounded-[55px] border-[8px] border-zinc-900 overflow-hidden ring-1 ring-white/10 group/phone1 transform -rotate-y-6 hover:rotate-0 transition-all duration-500">
<div className="dynamic-island"></div>

<div className="absolute top-0 w-full h-24 bg-zinc-950/80 backdrop-blur-md z-40 border-b border-white/5 flex items-end pb-4 px-6 justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-500 text-2xl" icon="solar:folder-with-files-duotone"></iconify-icon>
<span className="font-bold text-white tracking-tighter">PROJECTS</span>
</div>
<div className="text-xs text-zinc-500">01 / 03</div>
</div>

<div className="h-full overflow-y-auto no-scrollbar pt-28 px-5 pb-24 scroll-container-1">
<div className="mb-8">
<h2 className="text-3xl font-bold text-white mb-2 word-reveal-1">Featured Work</h2>
<p className="text-sm text-zinc-400 word-reveal-1">Ecosystems engineered for scale.</p>
</div>

<div className="relative min-h-[400px]">

<div className="absolute left-0 top-0 bottom-0 w-[1px] bg-zinc-800 overflow-hidden">
<div className="w-full h-20 bg-gradient-to-b from-transparent via-indigo-500 to-transparent animate-beam"></div>
</div>

<div className="project-card pl-6 mb-8 relative group cursor-pointer">
<div className="text-[100px] absolute -right-4 -top-10 font-bold text-white/5 pointer-events-none select-none">01</div>
<div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-6 flashlight-card transition-all duration-300 hover:scale-[1.02]">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400">
<iconify-icon icon="solar:shield-check-duotone" width="32"></iconify-icon>
</div>
<iconify-icon className="text-zinc-500" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-2">Sentinel Core</h3>
<p className="text-xs text-zinc-400 mb-4 leading-relaxed">Enterprise Discord bot handling 500k+ users with AI-driven moderation and transcript logging.</p>
<div className="flex gap-2">
<span className="text-[10px] bg-white/5 border border-white/5 px-2 py-1 rounded-full text-zinc-300">TypeScript</span>
<span className="text-[10px] bg-white/5 border border-white/5 px-2 py-1 rounded-full text-zinc-300">Redis</span>
</div>
</div>
</div>

<div className="project-card pl-6 mb-8 relative group cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
<div className="text-[100px] absolute -right-4 -top-10 font-bold text-white/5 pointer-events-none select-none">02</div>
<div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-6 flashlight-card">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400">
<iconify-icon icon="solar:box-minimalistic-duotone" width="32"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-bold text-white mb-2">SkyBlock Engine</h3>
<p className="text-xs text-zinc-400 mb-4 leading-relaxed">Custom Java core for island generation and economy balancing.</p>
<div className="flex gap-2">
<span className="text-[10px] bg-white/5 border border-white/5 px-2 py-1 rounded-full text-zinc-300">Java</span>
<span className="text-[10px] bg-white/5 border border-white/5 px-2 py-1 rounded-full text-zinc-300">PaperMC</span>
</div>
</div>
</div>
</div>

<div className="flex justify-between items-center mt-4 px-2">
<button className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-indigo-500/50 transition-all">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-indigo-500/50 transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="iphone-shadow relative w-[393px] h-[852px] bg-zinc-950 rounded-[55px] border-[8px] border-zinc-900 overflow-hidden ring-1 ring-indigo-500/30 z-20 hover:scale-[1.02] transition-transform duration-500">
<div className="dynamic-island"></div>

<div className="absolute top-0 w-full h-24 z-40 flex items-end justify-between px-6 pb-4">
<div className="flex items-center gap-1">
<iconify-icon className="text-white text-xl" icon="solar:code-square-linear"></iconify-icon>
<span className="font-bold text-lg text-white tracking-tighter">PA_SYS</span>
</div>
<div className="h-8 w-8 rounded-full bg-zinc-800 overflow-hidden border border-white/10">
<img alt="Profile" className="h-full w-full object-cover" src="https://i.pravatar.cc/150?u=pukar"/>
</div>
</div>

<div className="h-full overflow-y-auto no-scrollbar relative pt-32 px-6 scroll-container-2">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8 border-gradient">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest">Available</span>
</div>

<h1 className="text-4xl font-bold text-white leading-tight tracking-tight mb-6 word-reveal-2">
                    SCALABLE<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white">SYSTEMS</span><br/>
                    ENGINEER
                </h1>
<p className="text-base text-zinc-400 leading-relaxed mb-10 word-reveal-2">
                    I build high-performance plugins and automated infrastructure for Minecraft &amp; Discord communities.
                </p>

<div className="flex flex-col gap-4 mb-16 word-reveal-2">
<button className="group relative w-full h-14 bg-white rounded-full overflow-hidden flex items-center justify-center gap-2 transition-transform active:scale-95">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-200 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
<span className="text-black font-bold tracking-tight z-10">Start Project</span>
<iconify-icon className="text-black text-lg z-10 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full h-14 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center gap-2 hover:bg-zinc-800 hover:border-zinc-700 transition-colors">
<iconify-icon className="text-white text-lg" icon="solar:chat-line-linear"></iconify-icon>
<span className="text-white font-medium">Contact Me</span>
</button>
</div>

<div className="absolute left-0 w-full overflow-hidden py-6 bg-zinc-900/30 border-y border-white/5 backdrop-blur-sm">
<div className="flex w-[200%] animate-marquee gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<iconify-icon icon="simple-icons:nasa" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:spacex" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:uber" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:visa" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:grab" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:nvidia" width="32"></iconify-icon>

<iconify-icon icon="simple-icons:nasa" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:spacex" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:uber" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:visa" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:grab" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:nvidia" width="32"></iconify-icon>
</div>
</div>

<div className="mt-28 grid grid-cols-2 gap-4">
<div className="bg-zinc-900/50 p-4 rounded-2xl border border-white/5">
<div className="text-2xl font-bold text-white">4yr+</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500">Experience</div>
</div>
<div className="bg-zinc-900/50 p-4 rounded-2xl border border-white/5">
<div className="text-2xl font-bold text-white">99%</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500">Uptime</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none z-30"></div>
</div>

<div className="iphone-shadow relative w-[393px] h-[852px] bg-zinc-950 rounded-[55px] border-[8px] border-zinc-900 overflow-hidden ring-1 ring-white/10 transform rotate-y-6 hover:rotate-0 transition-all duration-500">
<div className="dynamic-island"></div>

<div className="absolute top-0 w-full h-24 bg-zinc-950/80 backdrop-blur-md z-40 border-b border-white/5 flex items-end pb-4 px-6 justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-500 text-2xl" icon="solar:layers-minimalistic-duotone"></iconify-icon>
<span className="font-bold text-white tracking-tighter">STACK</span>
</div>
<div className="text-xs text-zinc-500">03 / 03</div>
</div>

<div className="h-full overflow-y-auto no-scrollbar pt-28 px-5 pb-24 scroll-container-3">

<div className="relative mb-12">
<h2 className="text-2xl font-bold text-white mb-6 word-reveal-3">Technologies</h2>
<div className="space-y-4 relative">

<svg className="absolute left-[19px] top-4 bottom-4 w-4 h-full pointer-events-none z-0" style={{overflow: 'visible'}}>
<path d="M 1 0 V 200" stroke="#27272a" stroke-dasharray="4 4" strokeWidth="2"></path>
</svg>

<div className="relative z-10 flex items-center gap-4 bg-zinc-900/80 p-3 rounded-xl border border-white/5 hover:border-indigo-500/50 transition-colors">
<div className="h-10 w-10 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-xl" icon="simple-icons:java"></iconify-icon>
</div>
<div>
<div className="font-bold text-sm text-white">Java &amp; Kotlin</div>
<div className="text-[10px] text-zinc-500">Backend Core</div>
</div>
</div>

<div className="relative z-10 flex items-center gap-4 bg-zinc-900/80 p-3 rounded-xl border border-white/5 hover:border-indigo-500/50 transition-colors translate-x-4">
<div className="h-10 w-10 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-indigo-400 text-xl" icon="simple-icons:discord"></iconify-icon>
</div>
<div>
<div className="font-bold text-sm text-white">Discord.js</div>
<div className="text-[10px] text-zinc-500">Bot Infrastructure</div>
</div>
</div>

<div className="relative z-10 flex items-center gap-4 bg-zinc-900/80 p-3 rounded-xl border border-white/5 hover:border-indigo-500/50 transition-colors">
<div className="h-10 w-10 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-400 text-xl" icon="simple-icons:docker"></iconify-icon>
</div>
<div>
<div className="font-bold text-sm text-white">Docker</div>
<div className="text-[10px] text-zinc-500">Containerization</div>
</div>
</div>
</div>
</div>

<div className="mb-12">
<h2 className="text-xl font-bold text-white mb-6 word-reveal-3">Client Trust</h2>
<div className="relative bg-zinc-900/30 p-6 rounded-3xl border border-white/5 text-center">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full p-1 bg-zinc-950 border border-white/10">
<img className="h-full w-full rounded-full object-cover" src="https://i.pravatar.cc/150?u=client1"/>
</div>
<div className="mt-4 mb-2">
<div className="flex justify-center text-indigo-400 text-xs gap-1 mb-2">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xs text-zinc-300 italic">"Pukar optimized our entire network. The custom plugins handle 300+ players flawlessly."</p>
</div>
<div className="text-[10px] font-bold text-white uppercase">Alex M. <span className="text-zinc-600">|</span> MineCorp</div>
</div>
</div>

<div className="bg-gradient-to-b from-indigo-900/20 to-indigo-900/5 p-6 rounded-3xl border border-indigo-500/20 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-500/10 animate-pulse"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-indigo-500 rounded-full animate-sonar"></div>
<div className="relative z-10">
<h3 className="text-lg font-bold text-white mb-2">Ready to scale?</h3>
<p className="text-xs text-indigo-200 mb-4">Let's discuss your infrastructure.</p>
<a className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-bold rounded-full transition-colors" href="#">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
                            Email Me
                        </a>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
