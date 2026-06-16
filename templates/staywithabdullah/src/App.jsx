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
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-emerald-100 font-medium tracking-tight text-lg hover:opacity-80 transition-opacity" href="#">
                AMB
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-emerald-100 transition-colors" href="#about">About</a>
<a className="hover:text-emerald-100 transition-colors" href="#stack">Stack</a>
<a className="hover:text-emerald-100 transition-colors" href="#projects">Projects</a>
<a className="hover:text-emerald-100 transition-colors" href="#contact">Contact</a>
</div>
<a className="group flex items-center gap-2 text-sm text-emerald-100 bg-emerald-900 border border-emerald-800 hover:border-emerald-700 hover:bg-emerald-800 py-1.5 px-4 rounded-full transition-all duration-300" href="#contact">
<span>Let's talk</span>
<iconify-icon className="transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-grid">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/50 border border-emerald-800 text-xs font-medium text-cyan-400 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                Available for new projects
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-emerald-500 tracking-tight mb-6 leading-tight">
                Crafting seamless <br className="hidden md:block"/> mobile experiences.
            </h1>
<p className="text-lg md:text-xl text-emerald-400 font-light max-w-xl mx-auto mb-10 leading-relaxed">
                I'm <span className="text-emerald-200 font-normal">Abdullah Al Masud Bhuiyan</span>, a Flutter Developer and Computer Science Undergraduate building high-performance applications with pixel-perfect precision.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 bg-emerald-100 text-emerald-950 rounded-full font-medium text-sm hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2" href="#projects">
                    View Projects
                    <iconify-icon icon="solar:layers-minimalistic-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 bg-emerald-900 text-emerald-300 border border-emerald-800 rounded-full font-medium text-sm hover:bg-emerald-800 hover:text-white transition-all duration-300 flex items-center justify-center gap-2" href="https://github.com" target="_blank">
<iconify-icon icon="solar:code-circle-linear" width="18"></iconify-icon>
                    GitHub Profile
                </a>
</div>
</div>
</header>

<section className="py-20 px-6 border-t border-emerald-900 bg-emerald-950" id="about">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 p-8 rounded-2xl bg-emerald-900/30 border border-emerald-800/50 hover:border-emerald-700/50 transition-colors group">
<div className="flex items-start justify-between mb-8">
<div className="p-3 bg-emerald-900 rounded-xl border border-emerald-800 text-emerald-100">
<iconify-icon icon="solar:user-id-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl text-emerald-100 font-medium mb-2 tracking-tight">Computer Science Undergraduate</h3>
<p className="text-sm text-emerald-400 leading-relaxed">
                        Currently pursuing my Bachelor's degree. My academic foundation strengthens my ability to write efficient, scalable, and algorithmic code for complex mobile applications.
                    </p>
</div>

<div className="col-span-1 p-8 rounded-2xl bg-emerald-900/30 border border-emerald-800/50 hover:border-emerald-700/50 transition-colors">
<div className="flex items-start justify-between mb-8">
<div className="p-3 bg-emerald-900 rounded-xl border border-emerald-800 text-emerald-100">
<iconify-icon icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl text-emerald-100 font-medium mb-2 tracking-tight">Flutter Expert</h3>
<p className="text-sm text-emerald-400 leading-relaxed">
                        Specialized in cross-platform development, creating native-feel apps for both iOS and Android from a single codebase.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6" id="stack">
<div className="max-w-5xl mx-auto">
<h2 className="text-2xl font-medium text-emerald-100 tracking-tight mb-12 flex items-center gap-3">
<iconify-icon className="text-emerald-500" icon="solar:cpu-linear"></iconify-icon>
                Technologies
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-900/20 border border-emerald-800 hover:bg-emerald-900/40 transition-colors">
<iconify-icon className="text-cyan-400" icon="solar:code-square-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-emerald-300">Flutter</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-900/20 border border-emerald-800 hover:bg-emerald-900/40 transition-colors">
<iconify-icon className="text-blue-400" icon="solar:code-file-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-emerald-300">Dart</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-900/20 border border-emerald-800 hover:bg-emerald-900/40 transition-colors">
<iconify-icon className="text-sky-400" icon="solar:fire-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-emerald-300">Firebase</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-900/20 border border-emerald-800 hover:bg-emerald-900/40 transition-colors">
<iconify-icon className="text-indigo-400" icon="solar:link-circle-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-emerald-300">REST APIs</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-900/20 border border-emerald-800 hover:bg-emerald-900/40 transition-colors">
<iconify-icon className="text-cyan-400" icon="solar:database-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-emerald-300">SQL/NoSQL</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-900/20 border border-emerald-800 hover:bg-emerald-900/40 transition-colors">
<iconify-icon className="text-sky-400" icon="solar:git-branch-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-emerald-300">Git &amp; Github</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-900/20 border border-emerald-800 hover:bg-emerald-900/40 transition-colors">
<iconify-icon className="text-purple-400" icon="solar:figma-file-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-emerald-300">UI/UX Basics</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-900/20 border border-emerald-800 hover:bg-emerald-900/40 transition-colors">
<iconify-icon className="text-yellow-400" icon="solar:smile-circle-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-emerald-300">Provider/Bloc</span>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-emerald-900/20 border-y border-emerald-900" id="projects">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-2xl font-medium text-emerald-100 tracking-tight mb-2">Featured Projects</h2>
<p className="text-sm text-emerald-500">Selected works demonstrating mobile development capabilities.</p>
</div>
<a className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1" href="#">
                    View all repositories <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group flex flex-col bg-emerald-950 border border-emerald-800 rounded-2xl overflow-hidden hover:border-emerald-700 transition-all duration-300">
<div className="h-48 bg-emerald-900 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950 to-transparent opacity-60 z-10"></div>

<div className="w-32 h-48 bg-emerald-800 rounded-t-2xl border-t border-x border-emerald-700 transform translate-y-8 group-hover:translate-y-6 transition-transform duration-500"></div>
<iconify-icon className="absolute z-20 text-emerald-500 drop-shadow-lg group-hover:text-cyan-400 transition-colors" icon="solar:shop-linear" width="48"></iconify-icon>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Flutter</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-800 text-emerald-400 border border-emerald-700">E-Commerce</span>
</div>
<h3 className="text-lg font-medium text-emerald-100 mb-2 tracking-tight">Kartify Market</h3>
<p className="text-sm text-emerald-400 leading-relaxed mb-6 flex-grow">
                            A fully functional e-commerce application with cart management, payment gateway integration, and real-time order tracking using Firebase.
                        </p>
<div className="flex items-center gap-4 mt-auto">
<a className="text-xs font-medium text-emerald-300 hover:text-white flex items-center gap-1" href="#">
<iconify-icon icon="solar:link-linear"></iconify-icon> Demo
                            </a>
<a className="text-xs font-medium text-emerald-300 hover:text-white flex items-center gap-1" href="#">
<iconify-icon icon="solar:code-circle-linear"></iconify-icon> Code
                            </a>
</div>
</div>
</div>

<div className="group flex flex-col bg-emerald-950 border border-emerald-800 rounded-2xl overflow-hidden hover:border-emerald-700 transition-all duration-300">
<div className="h-48 bg-emerald-900 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950 to-transparent opacity-60 z-10"></div>
<div className="w-32 h-48 bg-emerald-800 rounded-t-2xl border-t border-x border-emerald-700 transform translate-y-8 group-hover:translate-y-6 transition-transform duration-500"></div>
<iconify-icon className="absolute z-20 text-emerald-500 drop-shadow-lg group-hover:text-indigo-400 transition-colors" icon="solar:chat-round-line-linear" width="48"></iconify-icon>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Flutter</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-800 text-emerald-400 border border-emerald-700">Social</span>
</div>
<h3 className="text-lg font-medium text-emerald-100 mb-2 tracking-tight">ChatStream</h3>
<p className="text-sm text-emerald-400 leading-relaxed mb-6 flex-grow">
                            Real-time messaging application leveraging WebSockets. Features include group chats, media sharing, and push notifications.
                        </p>
<div className="flex items-center gap-4 mt-auto">
<a className="text-xs font-medium text-emerald-300 hover:text-white flex items-center gap-1" href="#">
<iconify-icon icon="solar:link-linear"></iconify-icon> Demo
                            </a>
<a className="text-xs font-medium text-emerald-300 hover:text-white flex items-center gap-1" href="#">
<iconify-icon icon="solar:code-circle-linear"></iconify-icon> Code
                            </a>
</div>
</div>
</div>

<div className="group flex flex-col bg-emerald-950 border border-emerald-800 rounded-2xl overflow-hidden hover:border-emerald-700 transition-all duration-300">
<div className="h-48 bg-emerald-900 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950 to-transparent opacity-60 z-10"></div>
<div className="w-32 h-48 bg-emerald-800 rounded-t-2xl border-t border-x border-emerald-700 transform translate-y-8 group-hover:translate-y-6 transition-transform duration-500"></div>
<iconify-icon className="absolute z-20 text-emerald-500 drop-shadow-lg group-hover:text-sky-400 transition-colors" icon="solar:checklist-minimalistic-linear" width="48"></iconify-icon>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Flutter</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-800 text-emerald-400 border border-emerald-700">Utility</span>
</div>
<h3 className="text-lg font-medium text-emerald-100 mb-2 tracking-tight">TaskFlow</h3>
<p className="text-sm text-emerald-400 leading-relaxed mb-6 flex-grow">
                            Productivity tool focusing on local storage optimization (SQLite) and clean UI state management using Riverpod.
                        </p>
<div className="flex items-center gap-4 mt-auto">
<a className="text-xs font-medium text-emerald-300 hover:text-white flex items-center gap-1" href="#">
<iconify-icon icon="solar:link-linear"></iconify-icon> Demo
                            </a>
<a className="text-xs font-medium text-emerald-300 hover:text-white flex items-center gap-1" href="#">
<iconify-icon icon="solar:code-circle-linear"></iconify-icon> Code
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-medium text-emerald-100 tracking-tight mb-8">Education &amp; Journey</h2>
<div className="relative border-l border-emerald-800 ml-3 space-y-12">

<div className="relative pl-8">
<div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-emerald-950 border border-cyan-500 ring-4 ring-emerald-950"></div>
<span className="text-xs font-medium text-cyan-400 mb-1 block">Present</span>
<h3 className="text-lg font-medium text-emerald-100 tracking-tight">Undergraduate Student</h3>
<p className="text-sm text-emerald-500 mb-2">B.Sc. in Computer Science</p>
<p className="text-sm text-emerald-400 leading-relaxed">
                        Focusing on Data Structures, Algorithms, and Software Engineering principles. actively leading the university's mobile development club.
                    </p>
</div>

<div className="relative pl-8">
<div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-emerald-950 border border-emerald-700 ring-4 ring-emerald-950"></div>
<span className="text-xs font-medium text-emerald-500 mb-1 block">2022</span>
<h3 className="text-lg font-medium text-emerald-100 tracking-tight">Started Flutter Journey</h3>
<p className="text-sm text-emerald-500 mb-2">Self-taught &amp; Courses</p>
<p className="text-sm text-emerald-400 leading-relaxed">
                        Began exploring cross-platform development, building small utility apps and contributing to open-source projects.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-emerald-900 bg-emerald-950" id="contact">
<div className="max-w-xl mx-auto text-center">
<h2 className="text-3xl font-medium text-emerald-100 tracking-tight mb-4">Let's build something together</h2>
<p className="text-emerald-400 mb-10 font-light">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
<form className="space-y-4 text-left">
<div>
<label className="sr-only" htmlFor="email">Email</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-emerald-500" icon="solar:letter-linear"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-3 bg-emerald-900 border border-emerald-800 rounded-lg text-emerald-100 placeholder-emerald-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm transition-all" id="email" placeholder="Enter your email" type="email"/>
</div>
</div>
<div>
<label className="sr-only" htmlFor="message">Message</label>
<textarea className="block w-full p-3 bg-emerald-900 border border-emerald-800 rounded-lg text-emerald-100 placeholder-emerald-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm transition-all resize-none" id="message" placeholder="Tell me about your project..." rows="4"></textarea>
</div>
<button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-emerald-900 transition-colors" type="submit">
                    Send Message
                </button>
</form>
<div className="mt-12 pt-8 border-t border-emerald-900 flex justify-center gap-6">
<a className="text-emerald-500 hover:text-emerald-300 transition-colors" href="#">
<span className="sr-only">GitHub</span>
<iconify-icon icon="solar:code-circle-linear" width="24"></iconify-icon>
</a>
<a className="text-emerald-500 hover:text-emerald-300 transition-colors" href="#">
<span className="sr-only">LinkedIn</span>
<iconify-icon icon="solar:link-circle-linear" width="24"></iconify-icon>
</a>
<a className="text-emerald-500 hover:text-emerald-300 transition-colors" href="#">
<span className="sr-only">Twitter</span>
<iconify-icon icon="solar:mention-circle-linear" width="24"></iconify-icon>
</a>
</div>
<p className="mt-8 text-xs text-emerald-600">© 2024 Abdullah Al Masud Bhuiyan. All rights reserved.</p>
</div>
</section>

    </>
  );
}
