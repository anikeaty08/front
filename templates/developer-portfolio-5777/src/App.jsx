import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Spotlight Effect Logic ---
        const spotlight = document.querySelector('.spotlight');
        const cards = document.querySelectorAll('.card-spotlight');

        // Track mouse globally for the background
        window.addEventListener('mousemove', e => {
            const x = e.clientX;
            const y = e.clientY;
            
            // Update CSS variables for the global spotlight
            document.documentElement.style.setProperty('--cursor-x', `${x}px`);
            document.documentElement.style.setProperty('--cursor-y', `${y}px`);

            // Update individual card spotlights
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // --- GSAP Animations ---
        gsap.registerPlugin(ScrollTrigger);

        // Hero Stagger
        gsap.from("h1, p, button, .animate-fade-in-up", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out"
        });

        // Bento Grid Entry
        gsap.from(".glass-card", {
            scrollTrigger: {
                trigger: "#projects",
                start: "top 80%"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.2)"
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="spotlight fixed inset-0 pointer-events-none z-0"></div>

<div className="fixed inset-0 bg-grid z-0 opacity-40"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-white rounded-md flex items-center justify-center">
<span className="text-black font-bold text-xs">A</span>
</div>
<span className="text-sm font-medium text-white/80">AlexDev</span>
</div>
<div className="hidden sm:flex items-center gap-6 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
<a className="hover:text-white transition-colors" href="#stack">Stack</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>
<a className="text-xs font-medium bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-full border border-white/5 transition-colors flex items-center gap-2" href="mailto:hello@example.com">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
                Hire Me
            </a>
</div>
</nav>
<main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20">

<section className="flex flex-col items-center text-center mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="text-[10px] uppercase tracking-wider text-zinc-400">Available for freelance</span>
<span className="iconify text-emerald-500" data-icon="lucide:sparkles" data-width="12"></span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-6 pb-2">
                Designing the<br/>future of web.
            </h1>
<p className="text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
                I craft high-performance digital experiences with a focus on motion, interaction, and minimal aesthetics.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="group relative px-6 py-3 bg-white text-black rounded-full font-medium text-sm overflow-hidden">
<div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="relative z-10 flex items-center gap-2">
                        View Projects
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</span>
</button>
<button className="px-6 py-3 border border-white/10 text-white rounded-full font-medium text-sm hover:bg-white/5 transition-colors flex items-center gap-2">
<span className="iconify text-zinc-400" data-icon="lucide:github" data-width="16"></span>
                    GitHub
                </button>
</div>
</section>

<section className="mb-32 w-screen relative left-[50%] -translate-x-[50%] overflow-hidden mask-gradient-x">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
<div className="flex w-max gap-16 py-8 animate-marquee opacity-50 hover:opacity-100 transition-opacity duration-500">

<div className="flex items-center gap-2 text-zinc-400 font-medium"><span className="iconify text-2xl" data-icon="logos:react"></span> React</div>
<div className="flex items-center gap-2 text-zinc-400 font-medium"><span className="iconify text-2xl text-white" data-icon="simple-icons:nextdotjs"></span> Next.js</div>
<div className="flex items-center gap-2 text-zinc-400 font-medium"><span className="iconify text-2xl text-sky-400" data-icon="simple-icons:tailwindcss"></span> Tailwind</div>
<div className="flex items-center gap-2 text-zinc-400 font-medium"><span className="iconify text-2xl text-blue-500" data-icon="simple-icons:typescript"></span> TypeScript</div>
<div className="flex items-center gap-2 text-zinc-400 font-medium"><span className="iconify text-2xl text-orange-500" data-icon="simple-icons:supabase"></span> Supabase</div>
<div className="flex items-center gap-2 text-zinc-400 font-medium"><span className="iconify text-2xl text-pink-500" data-icon="simple-icons:framer"></span> Motion</div>
<div className="flex items-center gap-2 text-zinc-400 font-medium"><span className="iconify text-2xl text-green-500" data-icon="simple-icons:nodedotjs"></span> Node.js</div>
<div className="flex items-center gap-2 text-zinc-400 font-medium"><span className="iconify text-2xl text-white" data-icon="simple-icons:prisma"></span> Prisma</div>

<div className="flex items-center gap-2 text-zinc-400 font-medium"><span className="iconify text-2xl" data-icon="logos:react"></span> React</div>
<div className="flex items-center gap-2 text-zinc-400 font-medium"><span className="iconify text-2xl text-white" data-icon="simple-icons:nextdotjs"></span> Next.js</div>
<div className="flex items-center gap-2 text-zinc-400 font-medium"><span className="iconify text-2xl text-sky-400" data-icon="simple-icons:tailwindcss"></span> Tailwind</div>
<div className="flex items-center gap-2 text-zinc-400 font-medium"><span className="iconify text-2xl text-blue-500" data-icon="simple-icons:typescript"></span> TypeScript</div>
<div className="flex items-center gap-2 text-zinc-400 font-medium"><span className="iconify text-2xl text-orange-500" data-icon="simple-icons:supabase"></span> Supabase</div>
<div className="flex items-center gap-2 text-zinc-400 font-medium"><span className="iconify text-2xl text-pink-500" data-icon="simple-icons:framer"></span> Motion</div>
<div className="flex items-center gap-2 text-zinc-400 font-medium"><span className="iconify text-2xl text-green-500" data-icon="simple-icons:nodedotjs"></span> Node.js</div>
<div className="flex items-center gap-2 text-zinc-400 font-medium"><span className="iconify text-2xl text-white" data-icon="simple-icons:prisma"></span> Prisma</div>
</div>
</section>

<section className="mb-32" id="projects">
<div className="flex items-end justify-between mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-white">Selected Work</h2>
<a className="text-xs font-medium text-zinc-500 hover:text-white transition-colors" href="#">View All →</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 group relative rounded-xl overflow-hidden glass-card card-spotlight p-1">
<div className="relative w-full h-full bg-black/40 rounded-lg overflow-hidden">

<div className="absolute inset-x-8 top-8 bottom-0 bg-zinc-900 rounded-t-lg border-x border-t border-white/10 shadow-2xl transition-transform duration-500 group-hover:translate-y-2">
<div className="h-8 border-b border-white/5 flex items-center gap-2 px-3">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="p-6">
<div className="w-full h-32 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded border border-white/5 mb-4 animate-pulse"></div>
<div className="w-2/3 h-4 bg-white/5 rounded"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
<h3 className="text-xl font-medium text-white mb-1">Nexus Dashboard</h3>
<p className="text-sm text-zinc-400">A high-performance analytics platform for SaaS.</p>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 relative rounded-xl overflow-hidden glass-card card-spotlight group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-6 flex flex-col justify-between h-full">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</div>
<div>
<h3 className="text-sm font-medium text-white">Twitter / X</h3>
<p className="text-xs text-zinc-500 mt-1">@alex_builds</p>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 relative rounded-xl overflow-hidden glass-card card-spotlight">

<div className="absolute inset-0 opacity-40 mix-blend-overlay">
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<pattern height="20" id="grid" patternunits="userSpaceOnUse" width="20">
<path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>
</pattern>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span>
</div>
<div className="absolute bottom-6 left-6">
<h3 className="text-sm font-medium text-white">San Francisco</h3>
<p className="text-xs text-zinc-500 mt-1">PST (UTC-8)</p>
</div>
</div>

<div className="md:col-span-1 md:row-span-2 relative rounded-xl overflow-hidden glass-card card-spotlight group">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>

<div className="absolute inset-0 bg-zinc-900 group-hover:scale-105 transition-transform duration-700">
<div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-30 animate-spin-slow" style={{background: 'conic-gradient(from 0deg, transparent, #ec4899, transparent, #8b5cf6, transparent)'}}></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 z-20">
<div className="flex gap-2 mb-3">
<span className="text-[10px] border border-white/20 px-2 py-0.5 rounded text-white/80">Design System</span>
</div>
<h3 className="text-lg font-medium text-white mb-1">Mono UI</h3>
<p className="text-xs text-zinc-400">Component library for React.</p>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 relative rounded-xl overflow-hidden glass-card card-spotlight flex items-center justify-between p-6 group">
<div>
<h3 className="text-base font-medium text-white">Open Source</h3>
<p className="text-sm text-zinc-500 mt-1">Contributing to the ecosystem.</p>
</div>
<div className="flex gap-6 text-center">
<div>
<div className="text-xl font-mono text-white">1.2k</div>
<div className="text-[10px] uppercase text-zinc-600 tracking-wider">Commits</div>
</div>
<div>
<div className="text-xl font-mono text-white">450</div>
<div className="text-[10px] uppercase text-zinc-600 tracking-wider">Stars</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid md:grid-cols-2 gap-16 items-start" id="about">
<div>
<h2 className="text-xl font-semibold text-white mb-6">Experience</h2>
<div className="space-y-8 relative">

<div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-white/10"></div>

<div className="relative pl-8 group">
<div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border border-white/20 bg-black group-hover:border-white transition-colors"></div>
<h3 className="text-white font-medium">Senior Frontend Engineer</h3>
<div className="text-sm text-zinc-500 mb-2">Vercel · 2022 - Present</div>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Leading the core platform team, improving dashboard performance by 40%. Implemented the new design system using Next.js 14 and Tailwind.
                        </p>
</div>

<div className="relative pl-8 group">
<div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border border-white/20 bg-black group-hover:border-white transition-colors"></div>
<h3 className="text-white font-medium">Product Designer</h3>
<div className="text-sm text-zinc-500 mb-2">Linear · 2020 - 2022</div>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Designed interaction patterns for the issue tracking engine. Focused on keyboard-first navigation and micro-interactions.
                        </p>
</div>
</div>
</div>
<div className="glass-card rounded-xl p-8 border border-white/10 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
<h2 className="text-xl font-semibold text-white mb-4">Let's Connect</h2>
<p className="text-zinc-400 text-sm mb-6">
                    I'm currently available for freelance projects and open to full-time opportunities. If you have a project that needs some creative direction, let's talk.
                </p>
<form className="space-y-4">
<div>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all placeholder:text-zinc-600" placeholder="email@example.com" type="email"/>
</div>
<div>
<textarea className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all placeholder:text-zinc-600" placeholder="Tell me about your project..." rows="3"></textarea>
</div>
<button className="w-full py-3 bg-white text-black font-medium text-sm rounded-lg hover:bg-zinc-200 transition-colors flex justify-center items-center gap-2">
                        Send Message
                        <span className="iconify" data-icon="lucide:send" data-width="14"></span>
</button>
</form>
</div>
</section>
</main>
<footer className="border-t border-white/10 py-12 bg-black z-10 relative">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-zinc-500">
                © 2024 AlexDev. Built with <span className="text-zinc-300">Next.js</span> and <span className="text-zinc-300">Tailwind</span>.
            </div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="18"></span></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="18"></span></a>
</div>
</div>
</footer>


    </>
  );
}
