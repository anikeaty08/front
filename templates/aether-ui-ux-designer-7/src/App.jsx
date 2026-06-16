import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
glass: {
100: 'rgba(255, 255, 255, 0.03)',
200: 'rgba(255, 255, 255, 0.05)',
300: 'rgba(255, 255, 255, 0.1)',
border: 'rgba(255, 255, 255, 0.08)',
highlight: 'rgba(255, 255, 255, 0.15)',
},
neon: {
cyan: '#06b6d4',
purple: '#8b5cf6',
blue: '#3b82f6'
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'glass-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
},
boxShadow: {
'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
'glass-hover': '0 10px 40px rgba(0, 0, 0, 0.2)',
'glow': '0 0 20px rgba(139, 92, 246, 0.15)',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="ambient-light">
<div className="orb orb-1"></div>
<div className="orb orb-2"></div>
<div className="orb orb-3"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
<div className="glass-shine backdrop-blur-2xl bg-glass-200 border border-glass-border rounded-full px-6 py-3 flex items-center gap-8 shadow-glass transition-all hover:border-glass-highlight hover:bg-glass-300">
<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2" href="#">
<iconify-icon icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
                AETHER
            </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-white bg-white/10 px-4 py-1.5 rounded-full hover:bg-white/20 transition-all border border-white/5" href="#contact">
                Let's Talk
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden pt-20 pr-6 pl-6 relative items-center justify-center">
<div className="container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8 relative z-10 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glass-border bg-glass-100 backdrop-blur-md text-xs font-medium text-cyan-300 tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    Available for freelance
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1] text-glow">
                    Designing the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-300">Digital Future.</span>
</h1>
<p className="text-lg text-slate-400 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    Crafting award-winning digital experiences with a focus on motion, aesthetics, and user-centric functionality.
                </p>
<div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
<a className="group relative px-8 py-3.5 rounded-2xl bg-white text-slate-900 font-medium text-sm overflow-hidden transition-all hover:scale-[1.02] shadow-glow" href="#work">
<div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-purple-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="relative flex items-center gap-2">
                            View Projects
                            <iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</span>
</a>
<a className="px-8 py-3.5 rounded-2xl border border-glass-border bg-glass-100 text-white font-medium text-sm backdrop-blur-md hover:bg-glass-200 transition-all hover:border-white/20" href="#contact">
                        Copy Email
                    </a>
</div>
<div className="pt-8 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<iconify-icon className="text-white" icon="solar:figma-linear" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="solar:dribbble-linear" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="solar:behance-linear" width="24"></iconify-icon>
<span className="text-xs tracking-widest uppercase font-semibold text-slate-500">Trusted by innovators</span>
</div>
</div>

<div className="relative hidden lg:block h-[600px] w-full perspective-1000">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] rounded-3xl border border-white/10 bg-glass-gradient backdrop-blur-xl shadow-glass transform rotate-y-12 rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out z-20 overflow-hidden group">

<div className="p-6 border-b border-white/5 flex justify-between items-center">
<div className="w-12 h-12 rounded-full bg-white/10"></div>
<div className="space-y-2">
<div className="w-32 h-2 rounded-full bg-white/20"></div>
<div className="w-20 h-2 rounded-full bg-white/10"></div>
</div>
</div>
<div className="p-6 space-y-4">
<div className="w-full h-32 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/5 relative overflow-hidden">
<div className="group-hover:translate-y-0 transition-transform duration-500 bg-white/5 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
</div>
<div className="flex gap-4">
<div className="w-1/2 h-24 rounded-2xl bg-white/5 border border-white/5"></div>
<div className="w-1/2 h-24 rounded-2xl bg-white/5 border border-white/5"></div>
</div>
</div>
</div>

<div className="absolute top-[20%] right-[10%] w-[300px] h-[400px] rounded-3xl border border-white/5 bg-slate-900/40 backdrop-blur-md z-10 transform translate-x-10 translate-y-10 rotate-6 shadow-2xl"></div>

<div className="transform -translate-x-12 flex bg-glass-100 w-[280px] h-[200px] z-30 border-white/5 border rounded-3xl absolute bottom-[20%] left-[5%] backdrop-blur-lg translate-y-12 -rotate-3 items-center justify-center">
<div className="text-center">
<div className="text-3xl font-bold text-white mb-1">98%</div>
<div className="text-xs text-slate-400 uppercase tracking-wider">Satisfaction</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="work">
<div className="container max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Selected Works</h2>
<p className="text-slate-400 max-w-md">A curated collection of projects exploring the intersection of design, technology, and human experience.</p>
</div>
<a className="text-white text-sm font-medium border-b border-white/20 pb-1 hover:border-white transition-colors flex items-center gap-1" href="#">
                    See Archive
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group lg:col-span-2 relative h-[400px] rounded-3xl border border-glass-border bg-glass-100 overflow-hidden backdrop-blur-md transition-all duration-500 hover:bg-glass-200 hover:shadow-glass-hover hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 z-10"></div>
<img alt="Abstract Project" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<div className="flex justify-between items-end">
<div className="">
<div className="text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-2">Fintech</div>
<h3 className="text-2xl font-semibold text-white mb-2 group-hover:translate-x-2 transition-transform">Nova Finance Dashboard</h3>
<p className="text-slate-300 text-sm line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100">Real-time data visualization for next-gen crypto markets.</p>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group relative h-[400px] rounded-3xl border border-glass-border bg-glass-100 overflow-hidden backdrop-blur-md transition-all duration-500 hover:bg-glass-200 hover:shadow-glass-hover hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90 z-10"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity">
<div className="w-40 h-40 rounded-full bg-purple-500/30 blur-3xl"></div>
<div className="w-32 h-32 absolute border border-white/10 rounded-full rotate-45"></div>
<div className="w-24 h-24 absolute border border-white/10 rounded-full -rotate-12"></div>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20">
<div className="text-purple-300 text-xs font-semibold tracking-wider uppercase mb-2">AI Interface</div>
<h3 className="text-xl font-semibold text-white mb-2 group-hover:translate-x-2 transition-transform">Lumina AI</h3>
<p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">Conversational intelligence.</p>
</div>
<div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>

<div className="group relative h-[350px] rounded-3xl border border-glass-border bg-glass-100 overflow-hidden backdrop-blur-md transition-all duration-500 hover:bg-glass-200 hover:shadow-glass-hover hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 z-10"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent"></div>

<div className="absolute top-10 left-10 right-10 bottom-0 bg-slate-900/80 rounded-t-xl border-t border-l border-r border-white/10 p-4 transform translate-y-8 group-hover:translate-y-4 transition-transform duration-500">
<div className="flex gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="space-y-3">
<div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
<div className="h-24 w-full bg-white/5 rounded-lg"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20">
<div className="text-blue-300 text-xs font-semibold tracking-wider uppercase mb-2">SaaS</div>
<h3 className="text-xl font-semibold text-white group-hover:translate-x-2 transition-transform">TaskFlow Pro</h3>
</div>
</div>

<div className="group lg:col-span-2 relative h-[350px] rounded-3xl border border-glass-border bg-glass-100 overflow-hidden backdrop-blur-md transition-all duration-500 hover:bg-glass-200 hover:shadow-glass-hover hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 z-10"></div>
<img alt="Mobile App" className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-700" src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full flex justify-between items-end">
<div>
<div className="text-emerald-300 text-xs font-semibold tracking-wider uppercase mb-2">Health Tech</div>
<h3 className="text-2xl font-semibold text-white mb-2 group-hover:translate-x-2 transition-transform">Vitality Mobile App</h3>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 bg-slate-950/50 backdrop-blur-sm border-y border-white/5">
<div className="container max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-4 block">Expertise</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Capabilities</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

<div className="group p-6 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all text-center">
<div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-cyan-300" icon="solar:smartphone-linear" width="28"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">App Design</h3>
<p className="text-slate-400 text-sm leading-relaxed">Native iOS &amp; Android interfaces focused on usability.</p>
</div>

<div className="group p-6 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all text-center">
<div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-purple-300" icon="solar:monitor-linear" width="28"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Web Design</h3>
<p className="text-slate-400 text-sm leading-relaxed">Responsive, immersive web experiences that convert.</p>
</div>

<div className="group p-6 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all text-center">
<div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-amber-300" icon="solar:magic-stick-3-linear" width="28"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Design Systems</h3>
<p className="text-slate-400 text-sm leading-relaxed">Scalable component libraries for consistent branding.</p>
</div>

<div className="group p-6 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all text-center">
<div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-emerald-300" icon="solar:code-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Development</h3>
<p className="text-slate-400 text-sm leading-relaxed">Clean code implementation using modern frameworks.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="container max-w-4xl mx-auto">
<div className="rounded-3xl border border-glass-border bg-glass-100 p-8 md:p-12 backdrop-blur-xl relative overflow-hidden">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
<div className="">
<h3 className="text-2xl font-semibold text-white mb-6">Recognition</h3>
<ul className="space-y-4">
<li className="flex items-center justify-between border-b border-white/5 pb-2">
<span className="text-slate-300">Awwwards SOTD</span>
<span className="text-white font-medium">2023</span>
</li>
<li className="flex items-center justify-between border-b border-white/5 pb-2">
<span className="text-slate-300">Behance Featured</span>
<span className="text-white font-medium">3x</span>
</li>
<li className="flex items-center justify-between border-b border-white/5 pb-2">
<span className="text-slate-300">CSS Design Awards</span>
<span className="text-white font-medium">Winner</span>
</li>
</ul>
</div>
<div className="md:border-l border-white/10 md:pl-8">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="text-5xl font-bold text-white">4+</div>
<div className="text-sm text-slate-400 uppercase tracking-wide">Years ofExperience</div>
</div>
<div className="h-px bg-white/10 w-full my-2"></div>
<div className="flex items-center gap-3">
<div className="text-5xl font-bold text-white">50+</div>
<div className="text-sm text-slate-400 uppercase tracking-wide">ProjectsDelivered</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-24 px-6 relative overflow-hidden" id="contact">
<div className="container max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">Ready to create something <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">extraordinary?</span></h2>
<p className="text-slate-400 text-lg mb-10">I'm currently available for new projects. Let's build the next big thing together.</p>
<a className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-slate-900 font-semibold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]" href="mailto:hello@aether.design">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
                hello@aether.design
            </a>
<div className="mt-20 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 border-t border-white/5 pt-8">
<p>© 2024 Aether Design. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-gradient-to-t from-purple-900/20 to-transparent blur-3xl -z-10"></div>
</footer>

    </>
  );
}
