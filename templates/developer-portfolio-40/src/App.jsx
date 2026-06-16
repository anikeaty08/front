import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tight text-lg hover:text-zinc-300 transition-colors" href="#">
                ALEX.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-light">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#resume">
<span>Resume</span>
<iconify-icon icon="solar:file-download-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[100px] -z-10 opacity-20 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Available for freelance work
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter mb-6 leading-[1.1]">
                Crafting digital <br/>
<span className="gradient-text">experiences that matter.</span>
</h1>
<p className="text-lg md:text-xl font-light text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                I'm a multidisciplinary developer focused on building accessible, pixel-perfect, and performant web applications with seamless user interactions.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#work">
                    View Projects
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/5 transition-colors flex items-center justify-center gap-2" href="#contact">
                    Contact Me
                </a>
</div>
</div>
</header>

<section className="py-24 px-6 relative" id="services">
<div className="max-w-6xl mx-auto">
<div className="mb-16 border-b border-white/5 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Capabilities</h2>
<p className="text-sm text-zinc-500">Services I offer to my clients.</p>
</div>
<a className="text-sm text-white border-b border-white/20 pb-0.5 hover:border-white transition-colors" href="#contact">Start a project</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-500 subtle-glow">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:code-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Development</h3>
<p className="text-sm font-light leading-relaxed">Building robust front-end applications using modern frameworks like React and Vue, ensuring scalability and speed.</p>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-500 subtle-glow">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:figma-file-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Design Systems</h3>
<p className="text-sm font-light leading-relaxed">Creating consistent, accessible design systems and UI kits that streamline the development process.</p>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-500 subtle-glow">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:monitor-smartphone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Responsive UI</h3>
<p className="text-sm font-light leading-relaxed">Ensuring your website looks and functions perfectly across all devices, from large desktops to mobile phones.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900/20" id="work">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Selected Work</h2>
<p className="text-sm text-zinc-500">A collection of projects I've worked on.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative block">
<div className="aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 mb-6 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-900 group-hover:scale-105 transition-transform duration-700"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-50">
<div className="w-32 h-2 bg-white/10 rounded-full"></div>
<div className="w-24 h-2 bg-white/10 rounded-full"></div>
<div className="w-40 h-2 bg-white/10 rounded-full"></div>
</div>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-medium text-white mb-1 group-hover:text-zinc-300 transition-colors">Finance Dashboard</h3>
<p className="text-sm text-zinc-500 font-light">React, Tailwind, Recharts</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-white/30 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group relative block">
<div className="aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 mb-6 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-800 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30">
<iconify-icon className="text-white" icon="solar:shop-linear" width="64"></iconify-icon>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-medium text-white mb-1 group-hover:text-zinc-300 transition-colors">E-commerce Platform</h3>
<p className="text-sm text-zinc-500 font-light">Next.js, Stripe, Prisma</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-white/30 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group relative block">
<div className="aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 mb-6 relative">
<div className="absolute inset-0 bg-gradient-to-bl from-zinc-800 to-black group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute bottom-8 left-8 right-8 top-8 border border-dashed border-white/10 rounded-lg"></div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-medium text-white mb-1 group-hover:text-zinc-300 transition-colors">Task Management App</h3>
<p className="text-sm text-zinc-500 font-light">Vue, Firebase, Pinia</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-white/30 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group relative block">
<div className="aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 mb-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-black to-zinc-800 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30">
<iconify-icon className="text-white" icon="solar:music-note-slider-linear" width="64"></iconify-icon>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-medium text-white mb-1 group-hover:text-zinc-300 transition-colors">Audio Streaming UI</h3>
<p className="text-sm text-zinc-500 font-light">React, Web Audio API</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-white/30 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="resume">
<div className="max-w-4xl mx-auto">
<div className="relative rounded-3xl bg-zinc-900/50 border border-white/10 p-8 md:p-12 overflow-hidden">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex flex-col md:flex-row justify-between items-start gap-10 relative z-10">
<div className="flex-1">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Experience &amp; Skills</h2>
<p className="text-zinc-400 font-light mb-8 max-w-lg leading-relaxed">
                            With over 5 years of experience in front-end development, I've had the privilege of working with startups and established companies to deliver exceptional digital products.
                        </p>
<div className="space-y-6 mb-8">

<div className="flex gap-4">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white"></div>
<div>
<h4 className="text-white font-medium text-sm">Senior Frontend Engineer</h4>
<p className="text-zinc-500 text-xs mt-1">TechCorp Inc. • 2021 - Present</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
<div>
<h4 className="text-zinc-300 font-normal text-sm">Frontend Developer</h4>
<p className="text-zinc-500 text-xs mt-1">Creative Agency • 2019 - 2021</p>
</div>
</div>
</div>
</div>
<div className="w-full md:w-auto flex flex-col items-start md:items-end gap-4">
<div className="bg-black/50 border border-white/5 p-6 rounded-xl w-full md:w-64">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-white" icon="solar:document-text-linear" width="20"></iconify-icon>
<span className="text-sm text-white font-medium">Resume.pdf</span>
</div>
<div className="space-y-2 mb-6">
<div className="h-1.5 w-full bg-zinc-800 rounded-full"></div>
<div className="h-1.5 w-3/4 bg-zinc-800 rounded-full"></div>
<div className="h-1.5 w-5/6 bg-zinc-800 rounded-full"></div>
</div>
<button className="w-full py-2 bg-white text-black text-xs font-medium rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                                Download CV
                                <iconify-icon icon="solar:download-minimalistic-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="contact">
<div className="max-w-2xl mx-auto text-center mb-12">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Get in touch</h2>
<p className="text-zinc-500 font-light">Have a project in mind? Let's build something together.</p>
</div>
<div className="max-w-xl mx-auto">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group">
<label className="block text-xs text-zinc-500 mb-2 group-focus-within:text-white transition-colors">Name</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-white text-sm focus:border-white focus:outline-none transition-colors placeholder-zinc-700" placeholder="John Doe" type="text"/>
</div>
<div className="group">
<label className="block text-xs text-zinc-500 mb-2 group-focus-within:text-white transition-colors">Email</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-white text-sm focus:border-white focus:outline-none transition-colors placeholder-zinc-700" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="group">
<label className="block text-xs text-zinc-500 mb-2 group-focus-within:text-white transition-colors">Message</label>
<textarea className="w-full bg-transparent border-b border-white/20 py-2 text-white text-sm focus:border-white focus:outline-none transition-colors placeholder-zinc-700 resize-none" placeholder="Tell me about your project..." rows="4"></textarea>
</div>
<div className="pt-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<input className="appearance-none w-4 h-4 border border-white/20 rounded bg-transparent checked:bg-white checked:border-white transition-colors cursor-pointer relative after:content-[''] after:hidden after:absolute after:top-0.5 after:left-1.5 after:w-1 after:h-2 after:border-r-2 after:border-b-2 after:border-black after:rotate-45 checked:after:block" id="copy" type="checkbox"/>
<label className="text-xs text-zinc-500 select-none cursor-pointer" htmlFor="copy">Send me a copy</label>
</div>
<button className="px-6 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-200 transition-colors" type="button">
                        Send Message
                    </button>
</div>
</form>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-black">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-zinc-600 text-xs">
                © 2023 Alex Dev. All rights reserved.
            </div>
<div className="flex items-center gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
