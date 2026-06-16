import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Orbitron', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
slate: {
850: '#151e2e',
900: '#0f172a',
950: '#020617',
},
tech: {
blue: '#3b82f6',
cyan: '#06b6d4',
purple: '#8b5cf6',
gold: '#fbbf24',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'shimmer': 'shimmer 2s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
shimmer: {
'0%': { backgroundPosition: '-1000px 0' },
'100%': { backgroundPosition: '1000px 0' }
}
}
}
}
}



        function toggleTheme() {
            const html = document.querySelector('html');
            html.classList.toggle('dark');
            const icon = document.getElementById('theme-icon');
            if (html.classList.contains('dark')) {
                icon.setAttribute('icon', 'solar:sun-2-linear');
            } else {
                icon.setAttribute('icon', 'solar:moon-stars-linear');
            }
        }
    


        // Simple Intersection Observer for smooth fade-ins
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-4');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('section').forEach(section => {
                section.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-4');
                observer.observe(section);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      



<div className="fixed inset-0 bg-grid-pattern pointer-events-none -z-20"></div>
<div className="fixed top-0 left-0 w-full h-full bg-gradient-radial from-tech-blue/5 via-transparent to-transparent opacity-40 pointer-events-none -z-10"></div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-black/5 dark:border-white/10 flex items-center justify-center group-hover:border-tech-blue/50 transition-colors">
<span className="font-display font-bold text-lg text-slate-900 dark:text-white tracking-tighter">GS</span>
</div>
</a>
<div className="flex items-center gap-6">

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 dark:text-gray-400 hover:text-tech-blue dark:hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 dark:text-gray-400 hover:text-tech-blue dark:hover:text-white transition-colors" href="#skills">Tech Stack</a>
<a className="text-sm font-medium text-slate-600 dark:text-gray-400 hover:text-tech-blue dark:hover:text-white transition-colors" href="#achievements">Achievements</a>
<a className="text-sm font-medium text-slate-600 dark:text-gray-400 hover:text-tech-blue dark:hover:text-white transition-colors" href="#projects">Projects</a>
</div>

<button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-slate-900 dark:text-white" onclick="toggleTheme()">
<iconify-icon icon="solar:sun-2-linear" id="theme-icon" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="relative pt-20">

<section className="min-h-[85vh] flex flex-col items-center justify-center px-6 relative overflow-hidden text-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-tech-blue/20 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
<div className="max-w-4xl mx-auto space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tech-blue/10 border border-tech-blue/20 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-blue opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-tech-blue"></span>
</span>
<span className="text-xs font-mono font-medium text-tech-blue tracking-wide">JUNIOR HEAD BOY 2025-26</span>
</div>
<h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter text-slate-900 dark:text-white leading-[0.9] text-glow interactive-title cursor-default hover:scale-105 transition-transform duration-500">
                    GARVIT<br/>SINGH
                </h1>
<p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed text-balance">
                    Architecting the future with <span className="text-slate-900 dark:text-white font-semibold">Mathematics</span> &amp; <span className="text-slate-900 dark:text-white font-semibold">Interactive Code</span>.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
<a className="w-full md:w-auto px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2" href="#projects">
                        Explore Work
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full md:w-auto px-8 py-3.5 glass-card text-slate-900 dark:text-white font-medium rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors border border-black/10 dark:border-white/10 flex items-center justify-center gap-2" href="mailto:garvit2411@sunbeamschoolmau.edu.in">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
                        garvit2411@sunbeamschoolmau.edu.in
                    </a>
</div>
</div>
</section>

<section className="py-20 px-6 border-y border-black/5 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/30" id="skills">
<div className="max-w-7xl mx-auto text-center mb-12">
<h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-2">Technical Arsenal</h2>
<p className="text-slate-500 dark:text-gray-400 text-sm">20+ Languages, Frameworks &amp; GPT Integration Tools</p>
</div>
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">

<div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-tech-blue/50 transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all" icon="logos:python" width="32"></iconify-icon>
<span className="text-xs font-mono font-medium text-slate-600 dark:text-gray-300">Python</span>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-tech-blue/50 transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all" icon="logos:c-sharp" width="32"></iconify-icon>
<span className="text-xs font-mono font-medium text-slate-600 dark:text-gray-300">C#</span>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-tech-blue/50 transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all" icon="logos:c-plusplus" width="32"></iconify-icon>
<span className="text-xs font-mono font-medium text-slate-600 dark:text-gray-300">C++</span>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-tech-blue/50 transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all" icon="logos:javascript" width="32"></iconify-icon>
<span className="text-xs font-mono font-medium text-slate-600 dark:text-gray-300">JavaScript</span>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-tech-blue/50 transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all" icon="logos:typescript-icon" width="32"></iconify-icon>
<span className="text-xs font-mono font-medium text-slate-600 dark:text-gray-300">TypeScript</span>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-tech-blue/50 transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all" icon="logos:react" width="32"></iconify-icon>
<span className="text-xs font-mono font-medium text-slate-600 dark:text-gray-300">React</span>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-tech-blue/50 transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all dark:invert" icon="logos:nextjs-icon" width="32"></iconify-icon>
<span className="text-xs font-mono font-medium text-slate-600 dark:text-gray-300">Next.js</span>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-tech-blue/50 transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all" icon="logos:tailwindcss-icon" width="32"></iconify-icon>
<span className="text-xs font-mono font-medium text-slate-600 dark:text-gray-300">Tailwind</span>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-tech-blue/50 transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all" icon="logos:nodejs-icon" width="32"></iconify-icon>
<span className="text-xs font-mono font-medium text-slate-600 dark:text-gray-300">Node.js</span>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-tech-blue/50 transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all" icon="logos:mongodb-icon" width="32"></iconify-icon>
<span className="text-xs font-mono font-medium text-slate-600 dark:text-gray-300">MongoDB</span>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-tech-blue/50 transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all dark:invert" icon="logos:unity" width="32"></iconify-icon>
<span className="text-xs font-mono font-medium text-slate-600 dark:text-gray-300">Unity</span>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-tech-blue/50 transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all" icon="logos:godot-icon" width="32"></iconify-icon>
<span className="text-xs font-mono font-medium text-slate-600 dark:text-gray-300">Godot</span>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-tech-blue/50 transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all" icon="logos:blender" width="32"></iconify-icon>
<span className="text-xs font-mono font-medium text-slate-600 dark:text-gray-300">Blender</span>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-tech-blue/50 transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all dark:invert" icon="logos:openai-icon" width="32"></iconify-icon>
<span className="text-xs font-mono font-medium text-slate-600 dark:text-gray-300">OpenAI API</span>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-tech-blue/50 transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all" icon="logos:google-gemini" width="32"></iconify-icon>
<span className="text-xs font-mono font-medium text-slate-600 dark:text-gray-300">Gemini Pro</span>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-tech-blue/50 transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all" icon="logos:git-icon" width="32"></iconify-icon>
<span className="text-xs font-mono font-medium text-slate-600 dark:text-gray-300">Git</span>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-tech-blue/50 transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all" icon="logos:docker-icon" width="32"></iconify-icon>
<span className="text-xs font-mono font-medium text-slate-600 dark:text-gray-300">Docker</span>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-tech-blue/50 transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all" icon="logos:java" width="32"></iconify-icon>
<span className="text-xs font-mono font-medium text-slate-600 dark:text-gray-300">Java</span>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-tech-blue/50 transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all" icon="logos:html-5" width="32"></iconify-icon>
<span className="text-xs font-mono font-medium text-slate-600 dark:text-gray-300">HTML5</span>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-tech-blue/50 transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all" icon="logos:css-3" width="32"></iconify-icon>
<span className="text-xs font-mono font-medium text-slate-600 dark:text-gray-300">CSS3</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="achievements">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="font-display font-bold text-3xl text-slate-900 dark:text-white mb-2">Honors &amp; Awards</h2>
<p className="text-slate-500 dark:text-gray-400 text-sm">Recognized excellence in Mathematics and Leadership in 2025.</p>
</div>
<iconify-icon className="text-tech-gold text-3xl opacity-50" icon="solar:cup-star-linear"></iconify-icon>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-xl relative group hover:border-tech-gold/30 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tech-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 bg-tech-gold/10 rounded-lg flex items-center justify-center mb-6 text-tech-gold">
<iconify-icon icon="solar:medal-ribbon-star-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-2">Maths Arena Final 2025</h3>
<p className="font-mono text-xs text-tech-gold mb-4">RANK 1 CHAMPION</p>
<p className="text-sm text-slate-600 dark:text-gray-400">Secured First Place in the 2025 inter-school mathematics competition, demonstrating superior problem-solving speed and accuracy.</p>
</div>

<div className="glass-card p-8 rounded-xl relative group hover:border-blue-400/30 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 text-blue-400">
<iconify-icon icon="solar:calculator-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-2">Aryabhatta Ganit 2025</h3>
<p className="font-mono text-xs text-blue-400 mb-4">TOP 100 REGIONAL</p>
<p className="text-sm text-slate-600 dark:text-gray-400">Achieved Top 100 rank in the 2025 prestigious Prayagraj Region selection, competing against thousands of students.</p>
</div>

<div className="glass-card p-8 rounded-xl relative group hover:border-purple-400/30 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 text-purple-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-2">Junior Head Boy</h3>
<p className="font-mono text-xs text-purple-400 mb-4">TERM 2025-26</p>
<p className="text-sm text-slate-600 dark:text-gray-400">Elected student council leader for the 2025-26 academic session. Responsible for coordinating student activities.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50/50 dark:bg-slate-900/30" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="font-display font-bold text-3xl text-slate-900 dark:text-white mb-6">The Journey</h2>
<p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
                        My passion lies at the intersection of logic and creativity. Starting as a mathematics enthusiast, I discovered that Game Development is the ultimate application of abstract math—simulating physics, calculating vectors, and coding artificial intelligence.
                    </p>
<p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                        Currently based in Mau, India, I balance my role as <strong className="text-slate-900 dark:text-white">Junior Head Boy 2025-26</strong> at Sunbeam School with building enterprise-grade software and indie games.
                    </p>
</div>

<div className="relative space-y-12 border-l border-slate-300 dark:border-white/10 pl-8">
<div className="relative">
<div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-tech-blue border-4 border-slate-100 dark:border-slate-900"></div>
<span className="font-mono text-xs text-tech-blue mb-1 block">2025-26</span>
<h4 className="text-slate-900 dark:text-white font-medium">Junior Head Boy</h4>
<p className="text-xs text-slate-500 dark:text-gray-500 mt-1">Leading student council &amp; STEM initiatives.</p>
</div>
<div className="relative">
<div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-slate-400 dark:bg-slate-700 border-4 border-slate-100 dark:border-slate-900"></div>
<span className="font-mono text-xs text-slate-500 dark:text-gray-500 mb-1 block">2025</span>
<h4 className="text-slate-900 dark:text-white font-medium">Kingdom of Dragons</h4>
<p className="text-xs text-slate-500 dark:text-gray-500 mt-1">Advanced development on flagship strategy title.</p>
</div>
<div className="relative">
<div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-slate-400 dark:bg-slate-700 border-4 border-slate-100 dark:border-slate-900"></div>
<span className="font-mono text-xs text-slate-500 dark:text-gray-500 mb-1 block">2025</span>
<h4 className="text-slate-900 dark:text-white font-medium">Maths Arena Champion</h4>
<p className="text-xs text-slate-500 dark:text-gray-500 mt-1">Rank 1 Regional Mathematics.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="projects">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<h2 className="font-display font-bold text-3xl text-slate-900 dark:text-white">Featured Projects</h2>
</div>

<div className="glass-card rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 mb-12">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="relative min-h-[300px] bg-slate-800">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614726365723-49cfae92782f?q=80&amp;w=2069&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

<div className="absolute top-4 left-4">
<span className="bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase">Seeking Publisher</span>
</div>
</div>
<div className="p-8 lg:p-12 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-tech-cyan text-xl" icon="solar:gamepad-bold"></iconify-icon>
<span className="font-mono text-xs text-tech-cyan">UNITY 6 / C#</span>
</div>
<h3 className="font-display font-bold text-3xl text-slate-900 dark:text-white mb-4">Kingdom of Dragons</h3>
<p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
                                A procedural strategy game set in a dystopian neon future. Features custom neural-network AI for enemy pathfinding, dynamic economy systems, and high-fidelity URP shaders.
                            </p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-black/5 dark:bg-white/5 p-3 rounded-lg border border-black/5 dark:border-white/5">
<span className="block text-slate-900 dark:text-white font-bold text-lg">95%</span>
<span className="text-[10px] text-slate-500 dark:text-gray-500 uppercase">Code Optimization</span>
</div>
<div className="bg-black/5 dark:bg-white/5 p-3 rounded-lg border border-black/5 dark:border-white/5">
<span className="block text-slate-900 dark:text-white font-bold text-lg">AI</span>
<span className="text-[10px] text-slate-500 dark:text-gray-500 uppercase">Self-Learning Agents</span>
</div>
</div>
<div className="flex gap-4">
<button className="px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-black text-sm font-semibold rounded hover:opacity-80 transition-colors">View Demo</button>
<button className="px-6 py-2 border border-black/20 dark:border-white/20 text-slate-900 dark:text-white text-sm font-medium rounded hover:bg-black/5 dark:hover:bg-white/5 transition-colors">Documentation</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="glass-card p-8 rounded-xl hover:border-black/20 dark:hover:border-white/20 transition-all">
<div className="flex justify-between items-start mb-6">
<iconify-icon className="text-tech-blue text-2xl" icon="solar:graph-up-linear"></iconify-icon>
<iconify-icon className="text-gray-500" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Neural Net Visualizer</h4>
<p className="text-sm text-slate-600 dark:text-gray-400 mb-4">Web-based tool (React/Three.js) to visualize Dijkstra's algorithm and A* pathfinding in real-time 3D environments.</p>
<div className="flex gap-2">
<span className="text-[10px] bg-black/5 dark:bg-white/5 px-2 py-1 rounded text-slate-500 dark:text-gray-300">React</span>
<span className="text-[10px] bg-black/5 dark:bg-white/5 px-2 py-1 rounded text-slate-500 dark:text-gray-300">Three.js</span>
</div>
</div>

<div className="glass-card p-8 rounded-xl hover:border-black/20 dark:hover:border-white/20 transition-all">
<div className="flex justify-between items-start mb-6">
<iconify-icon className="text-green-500 text-2xl" icon="solar:smartphone-linear"></iconify-icon>
<iconify-icon className="text-gray-500" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Inventory System API</h4>
<p className="text-sm text-slate-600 dark:text-gray-400 mb-4">Scalable REST API for managing RPG inventory items, built with Node.js and MongoDB. Handles 10k+ requests/sec.</p>
<div className="flex gap-2">
<span className="text-[10px] bg-black/5 dark:bg-white/5 px-2 py-1 rounded text-slate-500 dark:text-gray-300">Node.js</span>
<span className="text-[10px] bg-black/5 dark:bg-white/5 px-2 py-1 rounded text-slate-500 dark:text-gray-300">MongoDB</span>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-black/5 dark:border-white/5 bg-slate-100 dark:bg-slate-900/50">
<div className="max-w-7xl mx-auto text-center px-6">
<div className="mb-6 flex justify-center gap-6">
<a className="text-slate-400 hover:text-tech-blue transition-colors" href="#" title="LinkedIn">
<iconify-icon icon="mdi:linkedin" width="24"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-tech-blue transition-colors" href="#" title="GitHub">
<iconify-icon icon="mdi:github" width="24"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-tech-blue transition-colors" href="mailto:garvit2411@sunbeamschoolmau.edu.in" title="Email">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</a>
</div>
<p className="text-xs text-slate-500 dark:text-gray-600 font-mono">
                    © 2025 Garvit Singh. All Rights Reserved.
                </p>
</div>
</footer>
</main>


    </>
  );
}
