import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
background: '#0a0a0a',
surface: '#111111',
border: '#222222',
primary: '#eeeeee',
secondary: '#888888',
accent: '#6366f1',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'subtle-grid': 'linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg tracking-tighter font-semibold text-white flex items-center gap-2" href="#">
<span className="w-6 h-6 rounded bg-indigo-500 flex items-center justify-center text-xs text-black font-bold">P</span>
                PORTFOLIO
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>
<a className="px-4 py-2 text-xs font-medium bg-white text-black rounded-full hover:bg-indigo-50 text-center transition-transform hover:scale-105" href="#contact">
                Let's Talk
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

<div className="lg:col-span-7 flex flex-col gap-6 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 w-fit">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-zinc-300">Available for projects</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                    Designing <span className="text-zinc-500">intuitive</span> digital systems.
                </h1>
<p className="text-lg text-zinc-400 max-w-lg leading-relaxed font-light">
                    I am a UI/UX Designer specialized in building functional, aesthetic dashboards, mobile applications, and high-conversion landing pages.
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<button className="px-6 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-2">
                        View Projects
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="px-6 py-3 border border-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:file-download-linear" width="18"></iconify-icon>
                        Resume
                    </button>
</div>
</div>

<div className="lg:col-span-5 relative mt-12 lg:mt-0 h-[400px]">
<div className="relative w-full h-full perspective-[1000px]">

<div className="absolute top-0 right-0 w-3/4 h-64 glass-card rounded-xl p-4 transform rotate-y-[-12deg] rotate-x-[10deg] shadow-2xl animate-float z-20 flex flex-col gap-3 border-t border-l border-white/20">
<div className="flex justify-between items-center pb-2 border-b border-white/5">
<div className="w-20 h-2 bg-zinc-700 rounded-full"></div>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
</div>
<div className="flex gap-2 h-full">
<div className="w-1/4 h-full bg-white/5 rounded-lg"></div>
<div className="w-3/4 flex flex-col gap-2">
<div className="w-full h-24 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-lg border border-white/5 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-indigo-500/20 blur-xl"></div>
</div>
<div className="grid grid-cols-2 gap-2 h-full">
<div className="bg-white/5 rounded-lg"></div>
<div className="bg-white/5 rounded-lg"></div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-4 w-48 h-80 glass-card rounded-2xl p-3 transform rotate-y-[12deg] rotate-z-[-6deg] shadow-xl z-30 border-t border-l border-white/20">
<div className="w-full h-full bg-black/40 rounded-xl overflow-hidden flex flex-col relative">
<div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-black rounded-full z-10"></div>
<div className="h-1/2 bg-zinc-800/50 p-3 flex items-end">
<h3 className="text-xs font-semibold text-white">Hello,<br/>Designer</h3>
</div>
<div className="p-3 grid grid-cols-2 gap-2">
<div className="h-16 rounded-lg bg-indigo-500/20 border border-indigo-500/30"></div>
<div className="h-16 rounded-lg bg-white/5"></div>
<div className="col-span-2 h-10 rounded-lg bg-white/5"></div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent -z-10"></div>
</div>
</div>
</div>
</header>

<div className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col">
<span className="text-3xl font-semibold text-white tracking-tight">4+</span>
<span className="text-xs text-zinc-500 uppercase tracking-wider font-medium mt-1">Years Experience</span>
</div>
<div className="flex flex-col">
<span className="text-3xl font-semibold text-white tracking-tight">85+</span>
<span className="text-xs text-zinc-500 uppercase tracking-wider font-medium mt-1">Projects Done</span>
</div>
<div className="flex flex-col">
<span className="text-3xl font-semibold text-white tracking-tight">100%</span>
<span className="text-xs text-zinc-500 uppercase tracking-wider font-medium mt-1">Client Satisfaction</span>
</div>
<div className="flex flex-col">
<span className="text-3xl font-semibold text-white tracking-tight">24/7</span>
<span className="text-xs text-zinc-500 uppercase tracking-wider font-medium mt-1">Support</span>
</div>
</div>
</div>

<section className="py-24 px-6 max-w-7xl mx-auto" id="work">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-sm font-semibold text-indigo-400 tracking-wide uppercase mb-2">Selected Work</h2>
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Digital Masterpieces</h3>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-full text-xs font-medium bg-white text-black transition-all">All</button>
<button className="px-4 py-2 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all">Mobile</button>
<button className="px-4 py-2 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all">Web</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[350px]">

<div className="group lg:col-span-2 relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

<div className="absolute inset-4 top-12 bg-zinc-800 rounded-t-lg border border-white/5 p-4 transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 origin-top">
<div className="grid grid-cols-3 gap-4 h-full">
<div className="col-span-1 bg-white/5 rounded h-full animate-pulse"></div>
<div className="col-span-2 flex flex-col gap-4">
<div className="h-8 bg-white/5 rounded w-full"></div>
<div className="h-32 bg-indigo-500/10 border border-indigo-500/20 rounded w-full"></div>
<div className="h-full bg-white/5 rounded w-full"></div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 z-20 flex justify-between items-end">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded text-[10px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/20">SaaS</span>
<span className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-zinc-400 border border-white/10">Dashboard</span>
</div>
<h4 className="text-xl font-medium text-white group-hover:text-indigo-300 transition-colors">FinTech Analytics Pro</h4>
</div>
<div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="group lg:row-span-2 relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 cursor-pointer">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 to-transparent z-0"></div>
<div className="absolute inset-0 flex justify-center pt-10 transition-transform duration-500 group-hover:scale-105">
<div className="w-48 h-full bg-black border-x border-t border-white/10 rounded-t-3xl p-2 relative shadow-2xl">
<div className="w-full h-full bg-zinc-800 rounded-t-2xl overflow-hidden relative">

<div className="h-40 bg-indigo-600 w-full rounded-b-3xl"></div>
<div className="absolute top-20 left-4 right-4 bg-zinc-900 rounded-xl p-3 shadow-lg flex flex-col gap-2">
<div className="w-12 h-12 rounded-full bg-zinc-700 mx-auto -mt-8 border-4 border-zinc-900"></div>
<div className="h-2 bg-zinc-700 rounded w-3/4 mx-auto"></div>
<div className="h-2 bg-zinc-800 rounded w-1/2 mx-auto"></div>
</div>
<div className="mt-20 px-4 space-y-2">
<div className="h-12 bg-white/5 rounded-lg w-full"></div>
<div className="h-12 bg-white/5 rounded-lg w-full"></div>
<div className="h-12 bg-white/5 rounded-lg w-full"></div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
<span className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-zinc-400 border border-white/10 mb-2 inline-block">iOS / Android</span>
<h4 className="text-xl font-medium text-white group-hover:text-indigo-300 transition-colors">Health &amp; Wellness App</h4>
<p className="text-sm text-zinc-400 mt-1 line-clamp-2">Complete UX overhaul for a leading meditation tracking application.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 cursor-pointer">
<div className="absolute inset-0 bg-zinc-900"></div>
<div className="absolute inset-4 bg-zinc-800 rounded border border-white/5 flex flex-col gap-0 overflow-hidden group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-shadow">
<div className="h-6 border-b border-white/5 bg-zinc-900 flex items-center px-2 gap-1">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="flex-1 p-4 flex flex-col items-center justify-center gap-2">
<div className="text-center">
<div className="h-2 w-24 bg-zinc-600 rounded mx-auto mb-2"></div>
<div className="h-6 w-32 bg-white rounded mx-auto"></div>
</div>
<div className="w-full h-24 bg-indigo-500/10 rounded mt-2 border border-dashed border-indigo-500/30"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 z-20">
<h4 className="text-lg font-medium text-white">E-commerce Landing</h4>
<span className="text-xs text-zinc-500">Web Design</span>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 cursor-pointer flex items-center justify-center">
<div className="grid grid-cols-2 gap-4 p-8 opacity-50 group-hover:opacity-80 transition-opacity">
<div className="w-16 h-16 rounded-xl bg-indigo-500"></div>
<div className="w-16 h-16 rounded-full bg-pink-500"></div>
<div className="w-16 h-16 rounded-lg bg-teal-500 transform rotate-12"></div>
<div className="w-16 h-16 rounded-tl-3xl bg-orange-500"></div>
</div>
<div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black to-transparent">
<div>
<h4 className="text-lg font-medium text-white">Prisma Design System</h4>
<span className="text-xs text-zinc-500">Branding &amp; UI Kit</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900/30 border-y border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="space-y-4">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:devices-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">UI/UX Design</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Creating pixel-perfect interfaces with a focus on user experience and accessibility.
                    </p>
</div>

<div className="space-y-4">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">Mobile Apps</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Designing native iOS and Android applications that feel fluid and intuitive.
                    </p>
</div>

<div className="space-y-4">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:widget-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">Design Systems</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Building scalable component libraries and style guides for consistency.
                    </p>
</div>

<div className="space-y-4">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:figma-file-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">Prototyping</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        High-fidelity interactive prototypes to visualize the final product flow.
                    </p>
</div>
</div>

<div className="mt-16 pt-10 border-t border-white/5">
<p className="text-center text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-8">My Tech Stack</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-zinc-300">
<iconify-icon icon="solar:figma-linear" width="24"></iconify-icon>
<span className="font-medium">Figma</span>
</div>
<div className="flex items-center gap-2 text-zinc-300">
<iconify-icon icon="simple-icons:adobeillustrator" width="20"></iconify-icon>
<span className="font-medium">Illustrator</span>
</div>
<div className="flex items-center gap-2 text-zinc-300">
<iconify-icon icon="simple-icons:framer" width="20"></iconify-icon>
<span className="font-medium">Framer</span>
</div>
<div className="flex items-center gap-2 text-zinc-300">
<iconify-icon icon="solar:code-circle-linear" width="24"></iconify-icon>
<span className="font-medium">Webflow</span>
</div>
</div>
</div>
</div>
</section>

<footer className="relative py-24 px-6 overflow-hidden" id="contact">

<div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-indigo-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to build something amazing?</h2>
<p className="text-zinc-400 text-lg mb-10">
                I'm currently available for freelance projects and remote roles. Let's turn your ideas into visual reality.
            </p>
<a className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform" href="mailto:contact@designer.com">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
                Start a Conversation
            </a>
<div className="mt-20 flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-zinc-500">
<p>© 2023 UI/UX Portfolio. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Dribbble</a>
<a className="hover:text-white transition-colors" href="#">Behance</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
