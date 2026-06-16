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
background: '#080808',
surface: '#0F0F0F',
border: '#27272a',
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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
<div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tight text-lg flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<span className="text-background text-xs font-semibold">T</span>
</div>
<span className="tracking-tight">Tushar.dev</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#stack">Stack</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-white bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/10 transition-all" href="#contact">
<span>Let's talk</span>
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>
<main className="relative pt-32 pb-20 px-6">

<section className="max-w-3xl mx-auto mb-32 fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-zinc-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Available for new projects
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 leading-[1.1]">
                TUSHAR LAGARIYA <span className="text-zinc-500"></span> <br/>
<span className="text-gradient"></span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mb-10">
                I’m Tushar Lagariya, a Computer Engineer focused on building accessible, pixel-perfect user interfaces with modern web technologies.
            </p>
<div className="flex flex-wrap gap-4">

<a className="h-10 px-6 flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-full text-sm font-medium hover:border-zinc-700 hover:text-white transition-colors" href="https://github.com" target="_blank">
<iconify-icon icon="solar:code-circle-linear" width="18"></iconify-icon>
                    GitHub
                </a>
</div>
</section>

<section className="max-w-5xl mx-auto mb-32" id="work">
<div className="flex items-end justify-between mb-12 border-b border-white/5 pb-4">
<h2 className="text-2xl text-white font-medium tracking-tight">projects</h2>
<span className="text-xs text-zinc-500">01 — 04</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative bg-surface border border-white/5 rounded-2xl overflow-hidden card-hover transition-all duration-300">
<div className="aspect-[16/10] bg-zinc-900/50 relative overflow-hidden flex items-center justify-center group-hover:bg-zinc-900/80 transition-colors">

<div className="w-3/4 h-3/4 bg-background border border-white/5 rounded-lg shadow-2xl flex flex-col overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
<div className="h-6 border-b border-white/5 flex items-center px-3 gap-1.5 bg-zinc-900/30">
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
</div>
<div className="flex-1 p-4 grid grid-cols-3 gap-3">
<div className="col-span-2 h-full bg-zinc-800/20 rounded"></div>
<div className="col-span-1 h-full bg-zinc-800/20 rounded"></div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg text-white font-medium tracking-tight">Financial Dashboard</h3>
<div className="flex gap-2">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">A comprehensive analytics platform for tracking real-time crypto assets and stock performance.</p>
<div className="flex gap-2 flex-wrap">
<span className="text-xs font-medium text-zinc-400 bg-white/5 px-2 py-1 rounded">React</span>
<span className="text-xs font-medium text-zinc-400 bg-white/5 px-2 py-1 rounded">Tailwind</span>
<span className="text-xs font-medium text-zinc-400 bg-white/5 px-2 py-1 rounded">D3.js</span>
</div>
</div>
</div>

<div className="group relative bg-surface border border-white/5 rounded-2xl overflow-hidden card-hover transition-all duration-300">
<div className="aspect-[16/10] bg-zinc-900/50 relative overflow-hidden flex items-center justify-center group-hover:bg-zinc-900/80 transition-colors">
<div className="w-3/4 h-3/4 bg-background border border-white/5 rounded-lg shadow-2xl p-4 flex flex-col gap-3 transform group-hover:scale-[1.02] transition-transform duration-500">
<div className="w-1/3 h-2 bg-zinc-800 rounded"></div>
<div className="w-full h-24 bg-zinc-800/30 rounded border border-white/5"></div>
<div className="flex gap-2">
<div className="w-8 h-8 rounded-full bg-zinc-800"></div>
<div className="flex-1 h-8 bg-zinc-800/30 rounded"></div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg text-white font-medium tracking-tight">TaskFlow App</h3>
<div className="flex gap-2">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">Collaborative project management tool focusing on minimal design and maximum efficiency.</p>
<div className="flex gap-2 flex-wrap">
<span className="text-xs font-medium text-zinc-400 bg-white/5 px-2 py-1 rounded">Next.js</span>
<span className="text-xs font-medium text-zinc-400 bg-white/5 px-2 py-1 rounded">Supabase</span>
</div>
</div>
</div>

<div className="group relative bg-surface border border-white/5 rounded-2xl overflow-hidden card-hover transition-all duration-300">
<div className="aspect-[16/10] bg-zinc-900/50 relative overflow-hidden flex items-center justify-center group-hover:bg-zinc-900/80 transition-colors">
<div className="w-64 h-64 border border-zinc-800 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-700">
<div className="w-48 h-48 border border-zinc-700/50 rounded-full flex items-center justify-center">
<iconify-icon className="text-zinc-600 text-4xl" icon="solar:musical-note-linear"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg text-white font-medium tracking-tight">Audio Phonic</h3>
<div className="flex gap-2">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">Generative audio experiment using Web Audio API to visualize sound frequencies.</p>
<div className="flex gap-2 flex-wrap">
<span className="text-xs font-medium text-zinc-400 bg-white/5 px-2 py-1 rounded">WebGL</span>
<span className="text-xs font-medium text-zinc-400 bg-white/5 px-2 py-1 rounded">Typescript</span>
</div>
</div>
</div>

<div className="group relative bg-surface border border-white/5 rounded-2xl overflow-hidden card-hover transition-all duration-300 flex flex-col justify-center">
<div className="p-8 flex flex-col h-full justify-between">
<div>
<div className="w-10 h-10 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:folder-with-files-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium tracking-tight mb-2">Design System</h3>
<p className="text-sm text-zinc-500 mb-6">A complete documentation site for a proprietary design system used by over 20 internal products.</p>
</div>
<a className="inline-flex items-center text-xs text-white hover:text-zinc-300 transition-colors gap-1" href="#">
                            Read Case Study 
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto mb-32" id="stack">
<h2 className="text-2xl text-white font-medium tracking-tight mb-8">Technologies</h2>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

<div className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-surface hover:bg-white/5 transition-colors cursor-default">
<div className="w-8 h-8 rounded-lg bg-black border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:code-file-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium">React</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-surface hover:bg-white/5 transition-colors cursor-default">
<div className="w-8 h-8 rounded-lg bg-black border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:bolt-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium">Next.js</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-surface hover:bg-white/5 transition-colors cursor-default">
<div className="w-8 h-8 rounded-lg bg-black border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:palette-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium">Tailwind</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-surface hover:bg-white/5 transition-colors cursor-default">
<div className="w-8 h-8 rounded-lg bg-black border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:server-square-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium">Node.js</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-surface hover:bg-white/5 transition-colors cursor-default">
<div className="w-8 h-8 rounded-lg bg-black border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:database-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium">Postgres</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-surface hover:bg-white/5 transition-colors cursor-default">
<div className="w-8 h-8 rounded-lg bg-black border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:figma-file-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium">Figma</span>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto mb-32" id="about">
<h2 className="text-2xl text-white font-medium tracking-tight mb-8">Experience</h2>
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-zinc-500">
<iconify-icon icon="solar:case-round-linear" width="18"></iconify-icon>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/5 bg-surface">
<div className="flex justify-between items-center mb-1">
<span className="font-medium text-white text-sm">Senior Computer Engineer</span>
<time className="font-mono text-xs text-zinc-500">2021-Present</time>
</div>
<div className="text-xs text-zinc-400 mb-2">TechCorp Inc.</div>
<p className="text-sm text-zinc-500 leading-relaxed">Leading the design system initiative and rebuilding the core product dashboard using React Server Components.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-zinc-500">
<iconify-icon icon="solar:laptop-linear" width="18"></iconify-icon>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/5 bg-surface">
<div className="flex justify-between items-center mb-1">
<span className="font-medium text-white text-sm">Product Designer</span>
<time className="font-mono text-xs text-zinc-500">2019-2021</time>
</div>
<div className="text-xs text-zinc-400 mb-2">Creative Studio</div>
<p className="text-sm text-zinc-500 leading-relaxed">Designed mobile-first interfaces for fintech startups and conducted user research phases.</p>
</div>
</div>
</div>
</section>

<section className="max-w-xl mx-auto mb-32" id="contact">
<div className="text-center mb-12">
<h2 className="text-3xl text-white font-medium tracking-tight mb-4">Get in touch</h2>
<p className="text-zinc-500 text-sm">Have a project in mind or just want to say hi?</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 ml-1">Name</label>
<input className="w-full bg-surface border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-700" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 ml-1">Email</label>
<input className="w-full bg-surface border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-700" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 ml-1">Subject</label>
<div className="relative">
<select className="w-full bg-surface border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors appearance-none cursor-pointer">
<option>Project Inquiry</option>
<option>Collaboration</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 ml-1">Message</label>
<textarea className="w-full bg-surface border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-700 resize-none" placeholder="Tell me about your project..." rows="4"></textarea>
</div>
<div className="flex items-center gap-2 pt-2">

<label className="flex items-center gap-2 cursor-pointer group">
<input className="peer hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-700 bg-transparent flex items-center justify-center peer-checked:bg-white peer-checked:border-white transition-all">
<iconify-icon className="text-black text-[10px] opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-400 select-none">Subscribe to newsletter</span>
</label>
</div>
<button className="w-full bg-white text-black font-medium text-sm py-3 rounded-lg hover:bg-zinc-200 transition-colors mt-2" type="button">
                    Send Message
                </button>
</form>
</section>

<footer className="max-w-screen-xl mx-auto px-6 py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-xs text-zinc-600">
                © 2024 Tushar.dev. All rights reserved.
            </div>
<div className="flex items-center gap-6">
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</footer>
</main>

    </>
  );
}
