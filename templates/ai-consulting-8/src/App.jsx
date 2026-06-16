import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Check for dark mode preference immediately to prevent flash
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark');
} else {
document.documentElement.classList.remove('dark');
}
tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
brand: {
50: '#fef2f2',
100: '#fee2e2',
200: '#fecaca',
300: '#fca5a5',
400: '#f87171',
500: '#ef4444', // Primary Red
600: '#dc2626',
700: '#b91c1c',
800: '#991b1b',
900: '#7f1d1d',
950: '#450a0a',
},
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a', // Deep Black
}
},
animation: {
'blob': 'blob 10s infinite',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        // Toggle Logic
        const themeToggleBtn = document.getElementById('theme-toggle');
        
        themeToggleBtn.addEventListener('click', () => {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
            }
        });

        // Animation Observer
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-on-scroll').forEach(el => {
                observer.observe(el);
            });

            // Header Background on Scroll
            const header = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('shadow-lg');
                } else {
                    header.classList.remove('shadow-lg');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgwIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgNDBoMVYwaC0xeiIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] text-neutral-900 dark:text-white opacity-40"></div>

<div className="absolute -top-20 -left-20 w-96 h-96 bg-brand-500/10 dark:bg-brand-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob"></div>
<div className="absolute top-1/2 -right-20 w-96 h-96 bg-brand-500/5 dark:bg-red-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-brand-400/10 dark:bg-brand-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
</div>

<header className="fixed top-0 w-full z-50 border-b border-neutral-200 dark:border-white/5 backdrop-blur-md bg-white/80 dark:bg-neutral-950/80 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="relative w-10 h-10 flex items-center justify-center bg-brand-500 text-white rounded shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="relative z-10" icon="solar:asteroid-bold-duotone" width="24"></iconify-icon>
</div>
<span className="text-neutral-900 dark:text-white font-semibold tracking-tight text-lg uppercase">Moving Stone</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-slate-400">
<a className="hover:text-brand-600 dark:hover:text-white transition-colors relative group" href="#services">
                    Services
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-brand-600 dark:hover:text-white transition-colors relative group" href="#industries">
                    Industries
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-brand-600 dark:hover:text-white transition-colors relative group" href="#manifesto">
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-brand-600 dark:hover:text-white transition-colors relative group" href="#blog">
                    Insights
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-500 transition-all duration-300 group-hover:w-full"></span>
</a>
</nav>

<div className="flex items-center gap-4">

<button aria-label="Toggle Dark Mode" className="w-9 h-9 rounded-full flex items-center justify-center border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-slate-400 hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors" id="theme-toggle">
<iconify-icon className="hidden dark:block text-lg" icon="solar:sun-2-bold-duotone"></iconify-icon>
<iconify-icon className="block dark:hidden text-lg" icon="solar:moon-bold-duotone"></iconify-icon>
</button>
<a className="hidden md:flex items-center gap-2 bg-neutral-900 dark:bg-white hover:bg-brand-600 dark:hover:bg-brand-500 text-white dark:text-neutral-950 px-5 py-2.5 rounded text-sm font-semibold transition-all group shadow-md hover:shadow-brand-500/20" href="#contact">
                    Get in Touch
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-bold-duotone"></iconify-icon>
</a>

<button className="md:hidden text-neutral-900 dark:text-white hover:text-brand-500 transition-colors">
<iconify-icon icon="solar:hamburger-menu-bold-duotone" width="32"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="relative z-10">

<section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
<div className="max-w-6xl mx-auto px-6 text-center relative z-20">
<div className="reveal-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-brand-500/30 bg-white dark:bg-brand-500/5 text-brand-600 dark:text-brand-300 text-xs tracking-wider uppercase mb-10 hover:border-brand-500 transition-colors cursor-default shadow-sm">
<iconify-icon className="text-brand-500 animate-pulse" icon="solar:stars-bold-duotone"></iconify-icon>
                    The Future Has Arrived
                </div>
<h1 className="reveal-on-scroll text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-900 dark:text-white tracking-tight leading-[1.05] mb-8 drop-shadow-sm">
                    Building at the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-500 dark:from-white dark:via-brand-300 dark:to-brand-500 text-glow">Speed of AI</span>
</h1>
<p className="reveal-on-scroll delay-100 max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 dark:text-slate-400 leading-relaxed mb-12">
                    We help forward-thinking businesses turn AI from an abstract idea into a real competitive advantage. Move from AI curious to AI native.
                </p>
<div className="reveal-on-scroll delay-200 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded hover:-translate-y-1 transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2" href="#contact">
                        Start the Transformation
                        <iconify-icon icon="solar:tuning-square-2-bold-duotone" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-neutral-300 dark:border-white/10 text-neutral-900 dark:text-white font-semibold rounded hover:bg-neutral-100 dark:hover:bg-white/5 transition-all" href="#services">
                        View Services
                    </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-[fade-in_2s_ease-out_2s_forwards] hover:opacity-100 transition-opacity">
<span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-slate-600 font-semibold">Scroll</span>
<div className="w-5 h-8 border-2 border-neutral-400 dark:border-slate-700 rounded-full flex justify-center pt-1">
<div className="w-1 h-1.5 bg-brand-500 rounded-full animate-bounce"></div>
</div>
</div>
</section>

<section className="border-y border-neutral-200 dark:border-white/5 bg-neutral-50 dark:bg-black/20 backdrop-blur-sm py-14 overflow-hidden mask-gradient">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-slate-600 font-semibold mb-10">Powering the next generation</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="group transition-all duration-300 hover:opacity-100 hover:scale-110">
<iconify-icon className="text-neutral-800 dark:text-slate-500 group-hover:text-brand-600 dark:group-hover:text-white transition-colors duration-500" height="40" icon="simple-icons:stripe" width="80"></iconify-icon>
</div>

<div className="group transition-all duration-300 hover:opacity-100 hover:scale-110">
<iconify-icon className="text-neutral-800 dark:text-slate-500 group-hover:text-black dark:group-hover:text-white transition-colors duration-500" height="40" icon="simple-icons:vercel" width="90"></iconify-icon>
</div>

<div className="group transition-all duration-300 hover:opacity-100 hover:scale-110">
<iconify-icon className="text-neutral-800 dark:text-slate-500 group-hover:text-black dark:group-hover:text-white transition-colors duration-500" height="40" icon="simple-icons:openai" width="90"></iconify-icon>
</div>

<div className="group transition-all duration-300 hover:opacity-100 hover:scale-110">
<iconify-icon className="text-neutral-800 dark:text-slate-500 group-hover:text-[#F38020] dark:group-hover:text-white transition-colors duration-500" height="40" icon="simple-icons:cloudflare" width="90"></iconify-icon>
</div>

<div className="group transition-all duration-300 hover:opacity-100 hover:scale-110">
<iconify-icon className="text-neutral-800 dark:text-slate-500 group-hover:text-[#232F3E] dark:group-hover:text-white transition-colors duration-500" height="40" icon="simple-icons:amazonwebservices" width="60"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative bg-white dark:bg-transparent" id="manifesto">
<div className="max-w-4xl mx-auto px-6">
<div className="reveal-on-scroll border-l-2 border-brand-500 pl-6 md:pl-10 relative">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-neutral-950 border-2 border-brand-500"></div>
<h2 className="text-3xl md:text-5xl font-medium text-neutral-900 dark:text-white leading-tight mb-8 tracking-tight">
                        Too many businesses have been left with pretty slides and failed prototypes, but no real progress.
                    </h2>
<div className="space-y-6 text-lg text-neutral-600 dark:text-slate-400">
<p>The margin for inefficiency is gone. Every company now faces a choice: speed up or fall behind.</p>
<p className="text-neutral-900 dark:text-slate-200 font-semibold flex items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:check-circle-bold-duotone"></iconify-icon>
                            AI is the path forward.
                        </p>
<p>We’re not the kind of consultancy that talks about what could happen someday. We build what actually works today. We design the automations, copilots, and systems that reshape how your teams operate.</p>
<p>We call this becoming <span className="text-brand-600 dark:text-brand-400 font-semibold border-b border-brand-500/30 pb-0.5">AI-first</span>. Not just aware of the technology, but built on top of it.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 dark:bg-white/[0.01] border-t border-neutral-200 dark:border-white/5 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-brand-600 dark:text-brand-400 font-mono text-xs tracking-widest uppercase mb-2 block flex items-center gap-2">
<span className="w-8 h-px bg-brand-500"></span> Our Expertise
                        </span>
<h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">Transform Your Business</h2>
</div>
<a className="text-sm font-semibold text-neutral-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-white transition-colors flex items-center gap-2 group" href="#contact">
                        View full capability deck
                        <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-bold-duotone"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="reveal-on-scroll group bg-white dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-white/10 p-8 hover:border-brand-500 transition-all duration-500 relative overflow-hidden rounded-xl hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-brand-500/10">
<div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-500/20 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-brand-500/5">
<iconify-icon icon="solar:magic-stick-3-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 tracking-tight">Generative AI</h3>
<p className="text-sm text-neutral-600 dark:text-slate-400 leading-relaxed group-hover:text-neutral-900 dark:group-hover:text-slate-300 transition-colors">Custom LLM deployment and prompt engineering architectures that create value, not just content.</p>
</div>
<div className="reveal-on-scroll delay-100 group bg-white dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-white/10 p-8 hover:border-brand-500 transition-all duration-500 relative overflow-hidden rounded-xl hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-brand-500/10">
<div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-500/20 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-brand-500/5">
<iconify-icon icon="solar:server-square-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 tracking-tight">Enterprise Systems</h3>
<p className="text-sm text-neutral-600 dark:text-slate-400 leading-relaxed group-hover:text-neutral-900 dark:group-hover:text-slate-300 transition-colors">Modernizing legacy ERPs with AI layers to sharpen how organizations think, decide, and execute.</p>
</div>
<div className="reveal-on-scroll delay-200 group bg-white dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-white/10 p-8 hover:border-brand-500 transition-all duration-500 relative overflow-hidden rounded-xl hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-brand-500/10">
<div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-500/20 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-brand-500/5">
<iconify-icon icon="solar:smartphone-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 tracking-tight">App Development</h3>
<p className="text-sm text-neutral-600 dark:text-slate-400 leading-relaxed group-hover:text-neutral-900 dark:group-hover:text-slate-300 transition-colors">Intelligent mobile and web applications built with predictive capabilities and fluid UX.</p>
</div>
<div className="reveal-on-scroll delay-300 group bg-white dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-white/10 p-8 hover:border-brand-500 transition-all duration-500 relative overflow-hidden rounded-xl hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-brand-500/10">
<div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-500/20 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-brand-500/5">
<iconify-icon icon="solar:cog-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 tracking-tight">Smart Automation</h3>
<p className="text-sm text-neutral-600 dark:text-slate-400 leading-relaxed group-hover:text-neutral-900 dark:group-hover:text-slate-300 transition-colors">End-to-end workflow automation that removes inefficiency and scales your workforce.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-white dark:bg-neutral-950" id="industries">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-gradient-to-l from-brand-50 dark:from-brand-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div className="reveal-on-scroll">
<span className="text-brand-600 dark:text-brand-400 font-mono text-xs tracking-widest uppercase mb-2 block flex items-center gap-2">
<span className="w-8 h-px bg-brand-500"></span> Sectors
                        </span>
<h2 className="text-4xl font-bold text-neutral-900 dark:text-white tracking-tight mb-6 leading-tight">Discover Our Impact <br/>Across Industries</h2>
<p className="text-neutral-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">We don't believe in one-size-fits-all. Our AI Operating Systems are tailored to the unique regulatory and operational challenges of your sector.</p>
<a className="inline-flex items-center gap-2 bg-neutral-900 dark:bg-slate-100 text-white dark:text-neutral-950 px-6 py-3 rounded font-bold hover:bg-brand-600 dark:hover:bg-brand-400 transition-colors shadow-lg hover:shadow-brand-400/25" href="#contact">
                            Let's Talk Strategy
                            <iconify-icon icon="solar:arrow-right-up-bold-duotone"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 gap-x-8 gap-y-6">

<div className="reveal-on-scroll flex items-center gap-3 border-b border-neutral-200 dark:border-white/5 pb-4 group cursor-default">
<iconify-icon className="text-neutral-400 group-hover:text-brand-500 transition-colors text-xl" icon="solar:plane-bold-duotone"></iconify-icon>
<span className="text-neutral-700 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white transition-colors font-medium">Travel &amp; Hospitality</span>
</div>
<div className="reveal-on-scroll flex items-center gap-3 border-b border-neutral-200 dark:border-white/5 pb-4 group cursor-default delay-75">
<iconify-icon className="text-neutral-400 group-hover:text-brand-500 transition-colors text-xl" icon="solar:card-bold-duotone"></iconify-icon>
<span className="text-neutral-700 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white transition-colors font-medium">Banking &amp; Fintech</span>
</div>
<div className="reveal-on-scroll flex items-center gap-3 border-b border-neutral-200 dark:border-white/5 pb-4 group cursor-default delay-100">
<iconify-icon className="text-neutral-400 group-hover:text-brand-500 transition-colors text-xl" icon="solar:cart-large-bold-duotone"></iconify-icon>
<span className="text-neutral-700 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white transition-colors font-medium">Retail &amp; CPG</span>
</div>
<div className="reveal-on-scroll flex items-center gap-3 border-b border-neutral-200 dark:border-white/5 pb-4 group cursor-default delay-150">
<iconify-icon className="text-neutral-400 group-hover:text-brand-500 transition-colors text-xl" icon="solar:heart-pulse-bold-duotone"></iconify-icon>
<span className="text-neutral-700 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white transition-colors font-medium">Healthcare</span>
</div>
<div className="reveal-on-scroll flex items-center gap-3 border-b border-neutral-200 dark:border-white/5 pb-4 group cursor-default delay-200">
<iconify-icon className="text-neutral-400 group-hover:text-brand-500 transition-colors text-xl" icon="solar:bolt-bold-duotone"></iconify-icon>
<span className="text-neutral-700 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white transition-colors font-medium">Energy &amp; Oil</span>
</div>
<div className="reveal-on-scroll flex items-center gap-3 border-b border-neutral-200 dark:border-white/5 pb-4 group cursor-default delay-250">
<iconify-icon className="text-neutral-400 group-hover:text-brand-500 transition-colors text-xl" icon="solar:buildings-2-bold-duotone"></iconify-icon>
<span className="text-neutral-700 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white transition-colors font-medium">Public Sector</span>
</div>
<div className="reveal-on-scroll flex items-center gap-3 border-b border-neutral-200 dark:border-white/5 pb-4 group cursor-default delay-300">
<iconify-icon className="text-neutral-400 group-hover:text-brand-500 transition-colors text-xl" icon="solar:gamepad-bold-duotone"></iconify-icon>
<span className="text-neutral-700 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white transition-colors font-medium">Gaming</span>
</div>
<div className="reveal-on-scroll flex items-center gap-3 border-b border-neutral-200 dark:border-white/5 pb-4 group cursor-default delay-300">
<iconify-icon className="text-neutral-400 group-hover:text-brand-500 transition-colors text-xl" icon="solar:rocket-bold-duotone"></iconify-icon>
<span className="text-neutral-700 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white transition-colors font-medium">Startups</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-neutral-100 dark:bg-black border-y border-neutral-200 dark:border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-neutral-500 dark:text-slate-500 mb-8 text-xs font-semibold uppercase tracking-widest">Recognized for Excellence</p>
<div className="flex flex-wrap justify-center gap-6">
<div className="reveal-on-scroll border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 px-6 py-4 rounded hover:border-brand-500 transition-colors cursor-default group shadow-sm">
<span className="block text-neutral-900 dark:text-white font-bold text-lg group-hover:text-brand-600 dark:group-hover:text-brand-200 transition-colors">TechCrunch</span>
<span className="text-[10px] text-brand-600 dark:text-brand-400 uppercase tracking-wide">Top AI Agency 2024</span>
</div>
<div className="reveal-on-scroll delay-75 border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 px-6 py-4 rounded hover:border-brand-500 transition-colors cursor-default group shadow-sm">
<span className="block text-neutral-900 dark:text-white font-bold text-lg group-hover:text-brand-600 dark:group-hover:text-brand-200 transition-colors">Clutch</span>
<span className="text-[10px] text-brand-600 dark:text-brand-400 uppercase tracking-wide">Global Leader</span>
</div>
<div className="reveal-on-scroll delay-150 border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 px-6 py-4 rounded hover:border-brand-500 transition-colors cursor-default group shadow-sm">
<span className="block text-neutral-900 dark:text-white font-bold text-lg group-hover:text-brand-600 dark:group-hover:text-brand-200 transition-colors">Forbes</span>
<span className="text-[10px] text-brand-600 dark:text-brand-400 uppercase tracking-wide">Innovation Award</span>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-white dark:bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-neutral-200 dark:divide-white/5">
<div className="reveal-on-scroll">
<div className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">3k+</div>
<div className="text-xs text-neutral-500 dark:text-slate-500 uppercase tracking-widest font-semibold">Projects Delivered</div>
</div>
<div className="reveal-on-scroll delay-100">
<div className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">250+</div>
<div className="text-xs text-neutral-500 dark:text-slate-500 uppercase tracking-widest font-semibold">Active Clients</div>
</div>
<div className="reveal-on-scroll delay-200">
<div className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">23</div>
<div className="text-xs text-neutral-500 dark:text-slate-500 uppercase tracking-widest font-semibold">Countries</div>
</div>
<div className="reveal-on-scroll delay-300">
<div className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">15+</div>
<div className="text-xs text-neutral-500 dark:text-slate-500 uppercase tracking-widest font-semibold">Years Experience</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 dark:bg-white/[0.02]" id="blog">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 flex justify-between items-end">
<div>
<span className="text-brand-600 dark:text-brand-400 font-mono text-xs tracking-widest uppercase mb-2 block flex items-center gap-2">
<span className="w-8 h-px bg-brand-500"></span> Case Studies
                        </span>
<h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">Stories of Transformation</h2>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-400 dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:arrow-left-bold-duotone"></iconify-icon>
</button>
<button className="w-10 h-10 rounded border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-400 dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:arrow-right-bold-duotone"></iconify-icon>
</button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="reveal-on-scroll group cursor-pointer">
<div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-5 border border-neutral-200 dark:border-white/5 shadow-sm">
<div className="absolute inset-0 bg-brand-500/10 dark:bg-brand-900/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="w-full h-full bg-neutral-100 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
<iconify-icon className="text-neutral-300 dark:text-white/10 text-7xl group-hover:text-brand-500/20 transition-colors" icon="solar:graph-new-bold-duotone"></iconify-icon>
</div>
<div className="absolute top-4 left-4 z-20 bg-white/80 dark:bg-black/60 backdrop-blur-md text-neutral-900 dark:text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-neutral-200 dark:border-white/10">Fintech</div>
</div>
<h3 className="text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mb-2 leading-tight">Automating Fraud Detection for Global Banking</h3>
<div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-slate-500 group-hover:text-neutral-900 dark:group-hover:text-slate-300 transition-colors">
<span>Read Case Study</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-bold-duotone"></iconify-icon>
</div>
</div>

<div className="reveal-on-scroll group cursor-pointer delay-100">
<div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-5 border border-neutral-200 dark:border-white/5 shadow-sm">
<div className="absolute inset-0 bg-brand-500/10 dark:bg-brand-900/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="w-full h-full bg-neutral-100 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
<iconify-icon className="text-neutral-300 dark:text-white/10 text-7xl group-hover:text-brand-500/20 transition-colors" icon="solar:cart-large-bold-duotone"></iconify-icon>
</div>
<div className="absolute top-4 left-4 z-20 bg-white/80 dark:bg-black/60 backdrop-blur-md text-neutral-900 dark:text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-neutral-200 dark:border-white/10">E-Commerce</div>
</div>
<h3 className="text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mb-2 leading-tight">Predictive Inventory Management Systems</h3>
<div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-slate-500 group-hover:text-neutral-900 dark:group-hover:text-slate-300 transition-colors">
<span>Read Case Study</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-bold-duotone"></iconify-icon>
</div>
</div>

<div className="reveal-on-scroll group cursor-pointer delay-200">
<div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-5 border border-neutral-200 dark:border-white/5 shadow-sm">
<div className="absolute inset-0 bg-brand-500/10 dark:bg-brand-900/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="w-full h-full bg-neutral-100 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
<iconify-icon className="text-neutral-300 dark:text-white/10 text-7xl group-hover:text-brand-500/20 transition-colors" icon="solar:medical-kit-bold-duotone"></iconify-icon>
</div>
<div className="absolute top-4 left-4 z-20 bg-white/80 dark:bg-black/60 backdrop-blur-md text-neutral-900 dark:text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-neutral-200 dark:border-white/10">Healthcare</div>
</div>
<h3 className="text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mb-2 leading-tight">Patient Triage via Natural Language Processing</h3>
<div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-slate-500 group-hover:text-neutral-900 dark:group-hover:text-slate-300 transition-colors">
<span>Read Case Study</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-bold-duotone"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-neutral-900 dark:text-white tracking-tight">Our Global Leadership</h2>
<p className="text-neutral-600 dark:text-slate-400 mt-2">Architects of the AI Revolution</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="reveal-on-scroll bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/5 p-6 rounded-xl hover:border-brand-500 transition-all group hover:-translate-y-1 shadow-sm">
<div className="w-20 h-20 bg-neutral-200 dark:bg-slate-800 rounded-full mb-6 overflow-hidden mx-auto border-2 border-transparent group-hover:border-brand-500 transition-colors">
<iconify-icon className="text-neutral-400 dark:text-slate-600 w-full h-full text-7xl" icon="solar:user-circle-bold-duotone"></iconify-icon>
</div>
<div className="text-center">
<h4 className="text-lg font-bold text-neutral-900 dark:text-white">Elena Korves</h4>
<p className="text-sm text-brand-600 dark:text-brand-400 mb-4 font-medium">Chief Executive Officer</p>
<div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
<a className="text-neutral-500 dark:text-slate-400 hover:text-black dark:hover:text-white" href="#"><iconify-icon icon="solar:link-circle-bold-duotone" width="24"></iconify-icon></a>
</div>
</div>
</div>
<div className="reveal-on-scroll delay-100 bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/5 p-6 rounded-xl hover:border-brand-500 transition-all group hover:-translate-y-1 shadow-sm">
<div className="w-20 h-20 bg-neutral-200 dark:bg-slate-800 rounded-full mb-6 overflow-hidden mx-auto border-2 border-transparent group-hover:border-brand-500 transition-colors">
<iconify-icon className="text-neutral-400 dark:text-slate-600 w-full h-full text-7xl" icon="solar:user-circle-bold-duotone"></iconify-icon>
</div>
<div className="text-center">
<h4 className="text-lg font-bold text-neutral-900 dark:text-white">David Chen</h4>
<p className="text-sm text-brand-600 dark:text-brand-400 mb-4 font-medium">CTO &amp; Head of AI</p>
<div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
<a className="text-neutral-500 dark:text-slate-400 hover:text-black dark:hover:text-white" href="#"><iconify-icon icon="solar:link-circle-bold-duotone" width="24"></iconify-icon></a>
</div>
</div>
</div>
<div className="reveal-on-scroll delay-200 bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/5 p-6 rounded-xl hover:border-brand-500 transition-all group hover:-translate-y-1 shadow-sm">
<div className="w-20 h-20 bg-neutral-200 dark:bg-slate-800 rounded-full mb-6 overflow-hidden mx-auto border-2 border-transparent group-hover:border-brand-500 transition-colors">
<iconify-icon className="text-neutral-400 dark:text-slate-600 w-full h-full text-7xl" icon="solar:user-circle-bold-duotone"></iconify-icon>
</div>
<div className="text-center">
<h4 className="text-lg font-bold text-neutral-900 dark:text-white">Sarah Jenkins</h4>
<p className="text-sm text-brand-600 dark:text-brand-400 mb-4 font-medium">VP of Strategy</p>
<div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
<a className="text-neutral-500 dark:text-slate-400 hover:text-black dark:hover:text-white" href="#"><iconify-icon icon="solar:link-circle-bold-duotone" width="24"></iconify-icon></a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-neutral-900 dark:bg-neutral-950" id="contact">
<div className="absolute inset-0 bg-brand-600/10 dark:bg-brand-900/10 radial-gradient"></div>

<iconify-icon className="absolute top-10 left-10 text-white/5 dark:text-brand-900/40 text-9xl animate-float" icon="solar:asteroid-bold-duotone"></iconify-icon>
<iconify-icon className="absolute bottom-10 right-10 text-white/5 dark:text-brand-900/40 text-8xl animate-float animation-delay-2000" icon="solar:stars-bold-duotone"></iconify-icon>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Step off the sidelines and into the action.</h2>
<p className="text-xl text-neutral-300 dark:text-slate-400 mb-10 leading-relaxed">We don’t just implement AI. We build AI operating systems for the next decade of growth.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-4 bg-brand-600 dark:bg-brand-500 text-white font-bold rounded hover:bg-brand-500 dark:hover:bg-brand-400 transition-all shadow-lg shadow-brand-600/20 hover:scale-105">
                        Schedule a Consultation
                    </button>
<button className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded hover:bg-white/10 transition-colors">
                        Contact Sales
                    </button>
</div>
</div>
</section>
</main>

<footer className="bg-neutral-50 dark:bg-black border-t border-neutral-200 dark:border-white/10 pt-20 pb-10 transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6 group" href="#">
<div className="w-8 h-8 rounded flex items-center justify-center text-brand-600 dark:text-brand-500 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:asteroid-bold-duotone" width="24"></iconify-icon>
</div>
<span className="text-neutral-900 dark:text-white font-semibold tracking-tight uppercase">Moving Stone</span>
</a>
<p className="text-sm text-neutral-500 dark:text-slate-500 leading-relaxed">
                        Helping forward-thinking businesses turn AI from an abstract idea into a real competitive advantage.
                    </p>
</div>
<div>
<h5 className="text-neutral-900 dark:text-white font-semibold mb-6">Company</h5>
<ul className="space-y-4 text-sm text-neutral-500 dark:text-slate-500">
<li><a className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Manifesto</a></li>
<li><a className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="text-neutral-900 dark:text-white font-semibold mb-6">Services</h5>
<ul className="space-y-4 text-sm text-neutral-500 dark:text-slate-500">
<li><a className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Generative AI</a></li>
<li><a className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Automation</a></li>
<li><a className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Data Strategy</a></li>
<li><a className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Enterprise Apps</a></li>
</ul>
</div>
<div>
<h5 className="text-neutral-900 dark:text-white font-semibold mb-6">Connect</h5>
<div className="flex gap-4 mb-6">
<a className="text-neutral-500 dark:text-slate-500 hover:text-black dark:hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:x" width="20"></iconify-icon></a>
<a className="text-neutral-500 dark:text-slate-500 hover:text-black dark:hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:linkedin" width="20"></iconify-icon></a>
<a className="text-neutral-500 dark:text-slate-500 hover:text-black dark:hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:github" width="20"></iconify-icon></a>
</div>
<p className="text-sm text-neutral-500 dark:text-slate-500">hello@movingstone.ai</p>
<p className="text-sm text-neutral-500 dark:text-slate-500">+1 (555) 010-9933</p>
</div>
</div>
<div className="border-t border-neutral-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-500 dark:text-slate-600">© 2024 Moving Stone Agency. All rights reserved.</p>
<div className="flex gap-6 text-xs text-neutral-500 dark:text-slate-600">
<a className="hover:text-black dark:hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-black dark:hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
