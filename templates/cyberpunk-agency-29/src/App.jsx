import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
cyber: {
black: '#050505',
dark: '#0a0a0a',
panel: '#111111',
red: '#DC2626', // Deep crimson
reddim: '#7f1d1d',
gray: '#888888',
light: '#e5e5e5'
}
},
fontFamily: {
display: ['Orbitron', 'sans-serif'],
tech: ['Rajdhani', 'sans-serif'],
body: ['Inter', 'sans-serif'],
header: ['Audiowide', 'sans-serif']
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.15]"></div>

<div className="absolute inset-0 scanlines opacity-30"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)]"></div>

<div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-cyber-red/10 to-transparent"></div>

<div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-cyber-black/80 backdrop-blur-md">
<div className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2 group cursor-pointer">
<i className="text-cyber-red w-6 h-6 group-hover:animate-pulse" data-lucide="cpu"></i>
<span className="font-display font-bold text-xl tracking-widest uppercase">NEXUS<span className="text-cyber-red">CORE</span></span>
</div>

<div className="hidden lg:flex items-center gap-10 font-tech text-lg tracking-widest uppercase text-gray-400">
<a className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.8)] transition-all duration-300" href="#">Home</a>
<a className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.8)] transition-all duration-300" href="#projects">Portfolio</a>
<a className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.8)] transition-all duration-300" href="#services">Services</a>
<a className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.8)] transition-all duration-300" href="#process">Process</a>
<a className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.8)] transition-all duration-300" href="#contact">Uplink</a>
</div>

<button className="hidden md:block group relative px-8 py-3 bg-transparent border border-cyber-red/50 text-white font-tech font-bold tracking-widest uppercase overflow-hidden transform -skew-x-12 hover:bg-cyber-red/10 transition-all duration-300">
<span className="absolute inset-0 w-1 bg-cyber-red transition-all duration-300 group-hover:w-full opacity-20"></span>
<span className="relative skew-x-12 inline-block flex items-center gap-2">
                    Initiate Project <i className="w-4 h-4" data-lucide="chevron-right"></i>
</span>
</button>

<button className="lg:hidden text-white">
<i className="w-8 h-8" data-lucide="menu"></i>
</button>
</div>
</nav>

<main className="relative z-10">
<section className="min-h-screen flex items-center relative overflow-hidden pt-20">
<div className="max-w-screen-2xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8 relative z-20">
<div className="inline-flex items-center gap-3 border-l-2 border-cyber-red pl-4">
<span className="text-cyber-red animate-pulse text-xs font-tech tracking-[0.2em] uppercase">System Status: Online</span>
<span className="text-gray-500 text-xs font-tech tracking-[0.2em] uppercase">V.95.0.1</span>
</div>
<h1 className="font-display font-black text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-white uppercase glow-text">
                        Engineering <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">Digital</span> <br/>
                        Realities
                    </h1>
<p className="font-tech text-xl md:text-2xl text-gray-400 max-w-xl tracking-wide border-l border-white/10 pl-6 py-2">
                        Intelligent systems. Immersive worlds. Future-grade infrastructure. We architect the unseen layers of tomorrow.
                    </p>
<div className="flex flex-col sm:flex-row gap-6 pt-6">
<button className="group relative px-10 py-4 bg-cyber-red text-black font-display font-bold tracking-widest uppercase transform -skew-x-12 hover:bg-white transition-colors duration-300 shadow-[0_0_30px_rgba(220,38,38,0.6)]">
<span className="block skew-x-12">Initiate Protocol</span>
</button>
<button className="group relative px-10 py-4 bg-transparent border border-white/30 text-white font-display font-bold tracking-widest uppercase transform -skew-x-12 hover:border-cyber-red hover:text-cyber-red transition-all duration-300">
<span className="block skew-x-12">View Archive</span>
</button>
</div>
</div>

<div className="relative h-full flex justify-center lg:justify-end">

<div className="absolute top-1/4 right-0 w-64 h-64 border border-cyber-red/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute top-1/3 right-10 w-40 h-40 border border-cyber-red/40 border-dashed rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

<div className="relative w-full max-w-lg aspect-[3/4] transform -skew-x-6 border-r-2 border-cyber-red/50 overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent z-10"></div>
<img alt="Cyberpunk Interface" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&amp;w=1932&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-10 left-6 z-20 font-tech">
<div className="text-cyber-red text-sm tracking-widest uppercase mb-1">Target Acquired</div>
<div className="text-white text-2xl font-bold uppercase tracking-widest">Unit 734</div>
</div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-t border-white/5" id="services">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="flex items-end justify-between mb-20 border-b border-white/10 pb-6">
<div>
<span className="text-cyber-red font-tech tracking-[0.3em] text-sm uppercase block mb-2">System Interface v9.0</span>
<h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter text-white">Service <span className="text-gray-600">Protocols</span></h2>
</div>
<div className="hidden md:flex gap-2">
<div className="w-2 h-2 bg-cyber-red"></div>
<div className="w-2 h-2 bg-gray-600"></div>
<div className="w-2 h-2 bg-gray-800"></div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">


<div className="group relative h-80 bg-cyber-panel border border-white/5 transform -skew-x-6 hover:border-cyber-red transition-colors duration-300 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-20 group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-black/90"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end transform skew-x-6">
<span className="text-cyber-red font-tech text-4xl font-bold opacity-50 mb-auto">01</span>
<h3 className="font-display text-xl font-bold uppercase mb-2 group-hover:text-cyber-red transition-colors">AI / ML Dev</h3>
<p className="font-tech text-gray-400 text-sm leading-relaxed">Neural networks and predictive models designed to automate complex decision trees.</p>
<div className="mt-4 w-full h-[1px] bg-white/20 group-hover:bg-cyber-red group-hover:w-1/2 transition-all duration-500"></div>
</div>
</div>

<div className="group relative h-80 bg-cyber-panel border border-white/5 transform -skew-x-6 hover:border-cyber-red transition-colors duration-300 overflow-hidden mt-8 lg:mt-0">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-20 group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-black/90"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end transform skew-x-6">
<span className="text-cyber-red font-tech text-4xl font-bold opacity-50 mb-auto">02</span>
<h3 className="font-display text-xl font-bold uppercase mb-2 group-hover:text-cyber-red transition-colors">Immersive VR</h3>
<p className="font-tech text-gray-400 text-sm leading-relaxed">Full-dive virtual environments for training, combat simulation, and remote ops.</p>
<div className="mt-4 w-full h-[1px] bg-white/20 group-hover:bg-cyber-red group-hover:w-1/2 transition-all duration-500"></div>
</div>
</div>

<div className="group relative h-80 bg-cyber-panel border border-white/5 transform -skew-x-6 hover:border-cyber-red transition-colors duration-300 overflow-hidden lg:mt-8">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-20 group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-black/90"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end transform skew-x-6">
<span className="text-cyber-red font-tech text-4xl font-bold opacity-50 mb-auto">03</span>
<h3 className="font-display text-xl font-bold uppercase mb-2 group-hover:text-cyber-red transition-colors">Cyber Security</h3>
<p className="font-tech text-gray-400 text-sm leading-relaxed">Military-grade encryption and active countermeasures for digital assets.</p>
<div className="mt-4 w-full h-[1px] bg-white/20 group-hover:bg-cyber-red group-hover:w-1/2 transition-all duration-500"></div>
</div>
</div>

<div className="group relative h-80 bg-cyber-panel border border-white/5 transform -skew-x-6 hover:border-cyber-red transition-colors duration-300 overflow-hidden lg:mt-0">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-20 group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-black/90"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end transform skew-x-6">
<span className="text-cyber-red font-tech text-4xl font-bold opacity-50 mb-auto">04</span>
<h3 className="font-display text-xl font-bold uppercase mb-2 group-hover:text-cyber-red transition-colors">Interface Design</h3>
<p className="font-tech text-gray-400 text-sm leading-relaxed">Tactical UI/UX optimized for cognitive load reduction and speed.</p>
<div className="mt-4 w-full h-[1px] bg-white/20 group-hover:bg-cyber-red group-hover:w-1/2 transition-all duration-500"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-cyber-dark relative overflow-hidden" id="process">
<div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
<div className="max-w-screen-2xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="font-display font-bold text-4xl uppercase tracking-tighter text-white mb-2">Execution <span className="text-cyber-red">Protocol</span></h2>
<p className="font-tech text-gray-500 tracking-widest uppercase text-sm">Precision driven workflow designed for elite output</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="group relative bg-cyber-black border border-white/10 p-8 transform -skew-x-12 hover:border-cyber-red/50 transition-all duration-300 hover:-translate-y-2">
<div className="absolute top-0 left-0 w-full h-1 bg-cyber-red opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="transform skew-x-12 text-center md:text-left bg-cyber-black"> 
<span className="font-tech text-cyber-red text-sm tracking-widest block mb-2">PHASE_01</span>
<h3 className="font-display text-xl font-bold uppercase mb-4">Discovery</h3>
<p className="font-tech text-gray-400 text-sm">Reconnaissance of user needs and technical constraints.</p>
</div>
</div>

<div className="group relative bg-cyber-black border border-white/10 p-8 transform -skew-x-12 hover:border-cyber-red/50 transition-all duration-300 md:mt-12 hover:-translate-y-2">
<div className="absolute top-0 left-0 w-full h-1 bg-cyber-red opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="transform skew-x-12 text-center md:text-left">
<span className="font-tech text-cyber-red text-sm tracking-widest block mb-2">PHASE_02</span>
<h3 className="font-display text-xl font-bold uppercase mb-4">Strategy</h3>
<p className="font-tech text-gray-400 text-sm">Formulation of tactical architecture and design systems.</p>
</div>
</div>

<div className="group relative bg-cyber-black border border-white/10 p-8 transform -skew-x-12 hover:border-cyber-red/50 transition-all duration-300 hover:-translate-y-2">
<div className="absolute top-0 left-0 w-full h-1 bg-cyber-red opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="transform skew-x-12 text-center md:text-left">
<span className="font-tech text-cyber-red text-sm tracking-widest block mb-2">PHASE_03</span>
<h3 className="font-display text-xl font-bold uppercase mb-4">Execution</h3>
<p className="font-tech text-gray-400 text-sm">Rigorous development cycles and hybrid testing.</p>
</div>
</div>

<div className="group relative bg-cyber-black border border-white/10 p-8 transform -skew-x-12 hover:border-cyber-red/50 transition-all duration-300 md:mt-12 hover:-translate-y-2">
<div className="absolute top-0 left-0 w-full h-1 bg-cyber-red opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="transform skew-x-12 text-center md:text-left">
<span className="font-tech text-cyber-red text-sm tracking-widest block mb-2">PHASE_04</span>
<h3 className="font-display text-xl font-bold uppercase mb-4">Launch</h3>
<p className="font-tech text-gray-400 text-sm">Deployment, system demand, and world integration.</p>
</div>
</div>
</div>
</div>
<div className="flex justify-center mt-16">
<a className="font-tech text-white uppercase tracking-widest border-b border-cyber-red pb-1 hover:text-cyber-red transition-colors flex items-center gap-2" href="#">
                        View Full Brief <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-32 relative" id="projects">
<div className="max-w-screen-xl mx-auto px-6">
<div className="flex justify-between items-end mb-8">
<h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter text-white">Project <span className="text-gray-600">Archive</span></h2>
<span className="font-tech text-cyber-red text-xs animate-pulse">REC ● [4K_HDR]</span>
</div>

<div className="relative w-full p-2 border border-white/10 transform -skew-x-2 bg-cyber-panel/50 backdrop-blur-sm group">
<div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-cyber-red/50"></div>
<div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-cyber-red/50"></div>
<div className="relative w-full aspect-video bg-black overflow-hidden transform skew-x-2">

<img alt="Project Obsidian" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center z-20">
<button className="w-20 h-20 border border-white/50 flex items-center justify-center rounded-none hover:bg-cyber-red hover:border-cyber-red transition-all duration-300 group-hover:scale-110">
<i className="w-8 h-8 fill-white text-white ml-1" data-lucide="play"></i>
</button>
</div>

<div className="absolute bottom-8 left-8 z-20">
<h3 className="font-display text-3xl font-bold uppercase text-white mb-1">Project: Obsidian</h3>
<p className="font-tech text-cyber-red tracking-widest text-sm">SECTOR_7 // CLASSIFIED</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
<div className="bg-cyber-panel p-1 border-l-2 border-cyber-red/50 hover:bg-white/5 transition-colors cursor-pointer group">
<div className="flex items-center gap-4 p-4">
<div className="w-16 h-10 bg-gray-800 overflow-hidden">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1614726365723-49cfae96a604?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="font-display text-sm font-bold uppercase text-white">Flight Sim X</h4>
<span className="text-xs font-tech text-gray-500 uppercase">Aviation / Simulation</span>
</div>
</div>
</div>
<div className="bg-cyber-panel p-1 border-l-2 border-white/10 hover:border-cyber-red/50 hover:bg-white/5 transition-colors cursor-pointer group">
<div className="flex items-center gap-4 p-4">
<div className="w-16 h-10 bg-gray-800 overflow-hidden">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1555617778-02518510b9fa?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="font-display text-sm font-bold uppercase text-white">Brain Interface</h4>
<span className="text-xs font-tech text-gray-500 uppercase">Neural / Medical</span>
</div>
</div>
</div>
<div className="bg-cyber-panel p-1 border-l-2 border-white/10 hover:border-cyber-red/50 hover:bg-white/5 transition-colors cursor-pointer group">
<div className="flex items-center gap-4 p-4">
<div className="w-16 h-10 bg-gray-800 overflow-hidden">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="font-display text-sm font-bold uppercase text-white">Drone Swarm UI</h4>
<span className="text-xs font-tech text-gray-500 uppercase">Military / Logistics</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-r from-cyber-black to-cyber-dark border-y border-white/5">
<div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter text-white mb-6">Architects of <br/> Digital Evolution</h2>
<p className="font-tech text-xl text-gray-400 max-w-lg mb-8 leading-relaxed">
                        We don't just write code. We forge the infrastructure for the post-human era. Our unit specializes in high-stakes digital deployments for classified sectors.
                    </p>
<div className="grid grid-cols-2 gap-4">
<div className="bg-cyber-panel p-6 transform -skew-x-12 border border-white/5 hover:border-cyber-red/30 transition-colors">
<div className="transform skew-x-12">
<span className="block text-4xl font-display font-bold text-white mb-1">120<span className="text-cyber-red">+</span></span>
<span className="text-sm font-tech text-gray-500 uppercase tracking-widest">Deployments</span>
</div>
</div>
<div className="bg-cyber-panel p-6 transform -skew-x-12 border border-white/5 hover:border-cyber-red/30 transition-colors">
<div className="transform skew-x-12">
<span className="block text-4xl font-display font-bold text-white mb-1">40</span>
<span className="text-sm font-tech text-gray-500 uppercase tracking-widest">Global Units</span>
</div>
</div>
</div>
</div>
<div className="relative h-96 w-full transform skew-x-6 border border-white/10 overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
</div>
</div>
</section>

<section className="py-32">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="flex items-center justify-between mb-16">
<h2 className="font-display font-bold text-4xl uppercase tracking-tighter text-white">Intelligence <span className="text-cyber-red">Log</span></h2>
<button className="hidden md:block font-tech text-sm uppercase tracking-widest border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition-all">Access All Logs</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group relative cursor-pointer">
<div className="h-64 overflow-hidden clip-parallelogram mb-6 relative">
<div className="absolute inset-0 bg-cyber-red/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="border-l border-white/10 pl-4 transition-all duration-300 group-hover:border-cyber-red group-hover:pl-6">
<span className="text-cyber-red font-tech text-xs tracking-widest uppercase mb-2 block">Cybernetics // 2095.04.12</span>
<h3 className="font-display text-xl font-bold uppercase text-white mb-2 leading-tight group-hover:text-cyber-red transition-colors">The Rise of Organic UI</h3>
<p className="font-tech text-gray-500 text-sm line-clamp-2">Exploring the merger of biological inputs with hard-light construct interfaces.</p>
</div>
</article>

<article className="group relative cursor-pointer">
<div className="h-64 overflow-hidden clip-parallelogram mb-6 relative">
<div className="absolute inset-0 bg-cyber-red/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1550745165-9010d4506950?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="border-l border-white/10 pl-4 transition-all duration-300 group-hover:border-cyber-red group-hover:pl-6">
<span className="text-cyber-red font-tech text-xs tracking-widest uppercase mb-2 block">Hardware // 2095.03.28</span>
<h3 className="font-display text-xl font-bold uppercase text-white mb-2 leading-tight group-hover:text-cyber-red transition-colors">Quantum Server Farms</h3>
<p className="font-tech text-gray-500 text-sm line-clamp-2">Cooling solutions for the next generation of predictive AI models.</p>
</div>
</article>

<article className="group relative cursor-pointer">
<div className="h-64 overflow-hidden clip-parallelogram mb-6 relative">
<div className="absolute inset-0 bg-cyber-red/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="border-l border-white/10 pl-4 transition-all duration-300 group-hover:border-cyber-red group-hover:pl-6">
<span className="text-cyber-red font-tech text-xs tracking-widest uppercase mb-2 block">Security // 2095.02.15</span>
<h3 className="font-display text-xl font-bold uppercase text-white mb-2 leading-tight group-hover:text-cyber-red transition-colors">Zero-Trust Architecture</h3>
<p className="font-tech text-gray-500 text-sm line-clamp-2">Why biometric keys are failing in the age of synthetic replication.</p>
</div>
</article>
</div>
</div>
</section>

<section className="py-32 relative bg-cyber-black" id="contact">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute -right-20 bottom-0 w-96 h-96 bg-cyber-red/5 blur-[100px]"></div>
</div>
<div className="max-w-2xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<div className="inline-block border border-cyber-red/30 px-3 py-1 mb-4 bg-cyber-red/5">
<span className="text-cyber-red text-xs font-tech tracking-[0.3em] uppercase animate-pulse">Encryption: Enabled</span>
</div>
<h2 className="font-display font-bold text-5xl uppercase text-white mb-2">Establish <span className="text-cyber-red">Uplink</span></h2>
<p className="font-tech text-gray-500">Input your coordinates to initiate secure communication protocol.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="relative group">
<input className="w-full bg-cyber-panel/50 border-b-2 border-white/10 p-4 text-white font-tech tracking-widest placeholder-gray-600 focus:outline-none focus:border-cyber-red transition-colors" placeholder="CODENAME" type="text"/>
<div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20 group-hover:border-cyber-red transition-colors"></div>
</div>
<div className="relative group">
<input className="w-full bg-cyber-panel/50 border-b-2 border-white/10 p-4 text-white font-tech tracking-widest placeholder-gray-600 focus:outline-none focus:border-cyber-red transition-colors" placeholder="SECURE EMAIL" type="email"/>
<div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20 group-hover:border-cyber-red transition-colors"></div>
</div>
</div>
<div className="relative group">
<select className="w-full bg-cyber-panel/50 border-b-2 border-white/10 p-4 text-gray-400 font-tech tracking-widest focus:outline-none focus:border-cyber-red transition-colors appearance-none cursor-pointer">
<option>SELECT MISSION TYPE</option>
<option>System Architecture</option>
<option>AI Integration</option>
<option>Cyber Security</option>
<option>Visual Design</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4 pointer-events-none" data-lucide="chevron-down"></i>
</div>
<div className="relative group">
<textarea className="w-full bg-cyber-panel/50 border-b-2 border-white/10 p-4 text-white font-tech tracking-widest placeholder-gray-600 focus:outline-none focus:border-cyber-red transition-colors" placeholder="TRANSMISSION DATA..." rows="4"></textarea>
<div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20 group-hover:border-cyber-red transition-colors"></div>
</div>
<div className="flex justify-between items-center pt-6">
<span className="text-xs font-tech text-gray-700 uppercase tracking-widest">Session_ID: 844_X5</span>
<button className="group relative px-12 py-4 bg-cyber-red text-black font-display font-bold tracking-widest uppercase transform -skew-x-12 hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]" type="button">
<span className="block skew-x-12 flex items-center gap-2">
                                Transmit <i className="w-4 h-4" data-lucide="wifi"></i>
</span>
</button>
</div>
<div className="text-right">
<span className="text-[10px] font-tech text-cyber-red opacity-50 uppercase tracking-widest">Latency: 12ms</span>
</div>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-cyber-black py-12 relative z-10">
<div className="max-w-screen-2xl mx-auto px-6 flex flex-col items-center justify-center">
<div className="mb-8 text-center">
<h3 className="font-display font-bold text-2xl tracking-widest text-white uppercase mb-2">Connect Neural Networks</h3>
<div className="flex gap-6 justify-center mt-6">
<a className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-cyber-red hover:border-cyber-red hover:text-black transition-all transform -skew-x-6 text-gray-400" href="#">
<i className="w-4 h-4 transform skew-x-6" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-cyber-red hover:border-cyber-red hover:text-black transition-all transform -skew-x-6 text-gray-400" href="#">
<i className="w-4 h-4 transform skew-x-6" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-cyber-red hover:border-cyber-red hover:text-black transition-all transform -skew-x-6 text-gray-400" href="#">
<i className="w-4 h-4 transform skew-x-6" data-lucide="linkedin"></i>
</a>
<a className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-cyber-red hover:border-cyber-red hover:text-black transition-all transform -skew-x-6 text-gray-400" href="#">
<i className="w-4 h-4 transform skew-x-6" data-lucide="youtube"></i>
</a>
<a className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-cyber-red hover:border-cyber-red hover:text-black transition-all transform -skew-x-6 text-gray-400" href="#">
<i className="w-4 h-4 transform skew-x-6" data-lucide="github"></i>
</a>
</div>
<div className="flex gap-8 justify-center mt-2">
<span className="text-[9px] font-tech text-gray-700 uppercase tracking-widest mt-1">Media</span>
<span className="text-[9px] font-tech text-gray-700 uppercase tracking-widest mt-1">Facebook</span>
<span className="text-[9px] font-tech text-gray-700 uppercase tracking-widest mt-1">LinkedIn</span>
<span className="text-[9px] font-tech text-gray-700 uppercase tracking-widest mt-1">Youtube</span>
<span className="text-[9px] font-tech text-gray-700 uppercase tracking-widest mt-1">Behance</span>
</div>
</div>
<div className="text-center border-t border-white/5 pt-8 w-full">
<p className="font-tech text-gray-600 text-xs tracking-[0.2em] uppercase">
                        © 2095 CYBERPUNK SYSTEMS // ALL RIGHTS RESERVED
                    </p>
</div>
</div>
</footer>
</main>


    </>
  );
}
