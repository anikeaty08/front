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
},
colors: {
brand: {
50: '#fff7ed',
100: '#ffedd5',
500: '#f97316',
600: '#ea580c',
900: '#7c2d12',
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Skill Hover Logic
        function updatePreview(skill) {
            const codePreview = document.getElementById('code-preview');
            const visualPreview = document.getElementById('visual-preview');
            const filename = document.getElementById('filename');

            codePreview.classList.remove('hidden');
            visualPreview.classList.add('hidden');

            if (skill === 'react') {
                filename.innerText = 'App.tsx';
                codePreview.innerHTML = `
<span class="text-purple-400">import</span> { useState } <span class="text-purple-400">from</span> <span class="text-green-400">'react'</span>;

<span class="text-blue-400">export default function</span> <span class="text-yellow-300">Counter</span>() {
  <span class="text-blue-400">const</span> [count, setCount] = <span class="text-yellow-300">useState</span>(0);
  
  <span class="text-purple-400">return</span> (
    <span class="text-gray-400">&lt;</span><span class="text-red-400">button</span> <span class="text-orange-400">onClick</span>={() => setCount(c => c + 1)}<span class="text-gray-400">&gt;</span>
      Count is {count}
    <span class="text-gray-400">&lt;/</span><span class="text-red-400">button</span><span class="text-gray-400">&gt;</span>
  );
}`;
            } else if (skill === 'tailwind') {
                filename.innerText = 'Card.html';
                codePreview.innerHTML = `
<span class="text-gray-400">&lt;</span><span class="text-red-400">div</span> <span class="text-orange-400">class</span>=<span class="text-green-400">"p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"</span><span class="text-gray-400">&gt;</span>
  <span class="text-gray-400">&lt;</span><span class="text-red-400">div</span> <span class="text-orange-400">class</span>=<span class="text-green-400">"shrink-0"</span><span class="text-gray-400">&gt;</span>
    <span class="text-gray-400">&lt;</span><span class="text-red-400">img</span> <span class="text-orange-400">class</span>=<span class="text-green-400">"h-12 w-12"</span> <span class="text-orange-400">src</span>=<span class="text-green-400">"/img/logo.svg"</span> <span class="text-orange-400">alt</span>=<span class="text-green-400">"Logo"</span><span class="text-gray-400">&gt;</span>
  <span class="text-gray-400">&lt;/</span><span class="text-red-400">div</span><span class="text-gray-400">&gt;</span>
  <span class="text-gray-400">&lt;</span><span class="text-red-400">div</span><span class="text-gray-400">&gt;</span>
    <span class="text-gray-400">&lt;</span><span class="text-red-400">div</span> <span class="text-orange-400">class</span>=<span class="text-green-400">"text-xl font-medium text-black"</span><span class="text-gray-400">&gt;</span>ChitChat<span class="text-gray-400">&lt;/</span><span class="text-red-400">div</span><span class="text-gray-400">&gt;</span>
    <span class="text-gray-400">&lt;</span><span class="text-red-400">p</span> <span class="text-orange-400">class</span>=<span class="text-green-400">"text-slate-500"</span><span class="text-gray-400">&gt;</span>You have a new message!<span class="text-gray-400">&lt;/</span><span class="text-red-400">p</span><span class="text-gray-400">&gt;</span>
  <span class="text-gray-400">&lt;/</span><span class="text-red-400">div</span><span class="text-gray-400">&gt;</span>
<span class="text-gray-400">&lt;/</span><span class="text-red-400">div</span><span class="text-gray-400">&gt;</span>`;
            } else if (skill === 'uiux') {
                filename.innerText = 'Design_System.fig';
                codePreview.classList.add('hidden');
                visualPreview.classList.remove('hidden');
            } else if (skill === 'ts') {
                filename.innerText = 'types.ts';
                codePreview.innerHTML = `
<span class="text-blue-400">interface</span> <span class="text-yellow-300">User</span> {
  id: <span class="text-green-400">number</span>;
  username: <span class="text-green-400">string</span>;
  role: <span class="text-green-400">'admin'</span> | <span class="text-green-400">'guest'</span>;
}

<span class="text-blue-400">function</span> <span class="text-yellow-300">getUser</span>(id: <span class="text-green-400">number</span>): <span class="text-yellow-300">Promise</span>&lt;<span class="text-yellow-300">User</span>&gt; {
  <span class="text-purple-400">return</span> <span class="text-yellow-300">fetch</span>(<span class="text-green-400">\`/api/user/\${id}\`</span>).<span class="text-yellow-300">then</span>(res => res.<span class="text-yellow-300">json</span>());
}`;
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tight text-slate-900 dark:text-white flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
                Folioblox
            </a>
<div className="hidden md:flex items-center gap-8 text-base font-medium">
<a className="hover:text-orange-600 transition-colors" href="#about">About</a>
<a className="hover:text-orange-600 transition-colors" href="#skills">Skills</a>
<a className="hover:text-orange-600 transition-colors" href="#projects">Projects</a>
<a className="hover:text-orange-600 transition-colors" href="#playground">Playground</a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors text-slate-900 dark:text-white" onclick="document.documentElement.classList.toggle('dark')">
<i className="w-5 h-5 hidden dark:block" data-lucide="moon"></i>
<i className="w-5 h-5 dark:hidden" data-lucide="sun"></i>
</button>
<a className="px-5 py-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-sm font-medium hover:opacity-90 transition-opacity" href="#contact">
                    Let's Talk
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/20 rounded-full blur-3xl -z-10 dark:bg-orange-500/10"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl -z-10 dark:bg-purple-500/10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 border border-orange-200/50 dark:border-orange-800/50 text-sm font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                    Available for freelance
                </div>
<h1 className="text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                    Creative <br/>
<span className="text-gradient">Director &amp; Dev.</span>
</h1>
<p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed font-normal">
                    Great design should feel invisible. From logo to language, I build brands that connect and convert through clean code and intuitive interfaces.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 text-white font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all hover:-translate-y-1">
                        Get in Touch
                    </button>
<button className="px-8 py-3.5 rounded-full glass-panel text-slate-900 dark:text-white font-medium hover:bg-white/40 dark:hover:bg-slate-800/40 transition-all">
                        View Projects
                    </button>
</div>
<div className="flex items-center gap-6 pt-4 text-slate-500 dark:text-slate-400">
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#"><i className="w-6 h-6" data-lucide="github"></i></a>
<a className="hover:text-blue-500 transition-colors" href="#"><i className="w-6 h-6" data-lucide="twitter"></i></a>
<a className="hover:text-pink-500 transition-colors" href="#"><i className="w-6 h-6" data-lucide="dribbble"></i></a>
<a className="hover:text-blue-700 transition-colors" href="#"><i className="w-6 h-6" data-lucide="linkedin"></i></a>
</div>
</div>
<div className="relative lg:h-[600px] flex items-center justify-center">

<div className="absolute top-20 right-10 z-20 glass-panel p-4 rounded-2xl animate-bounce" style={{animationDuration: '3s'}}>
<i className="w-6 h-6 text-pink-500 mb-2" data-lucide="code-2"></i>
<div className="w-24 h-2 bg-slate-200 dark:bg-slate-700 rounded-full mb-1"></div>
<div className="w-16 h-2 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
</div>
<div className="relative z-10 w-[400px] h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 dark:border-slate-800/50 group">
<img alt="Portrait" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-sm font-medium text-orange-300 mb-1">Based in San Francisco</p>
<p className="text-lg font-medium tracking-tight">Making life simpler.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-white mb-4">About Me</h2>
<div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full"></div>
</div>
<div className="grid md:grid-cols-12 gap-8">

<div className="md:col-span-4 glass-panel p-8 rounded-3xl text-center relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-orange-400 to-pink-500 opacity-20 group-hover:opacity-30 transition-opacity"></div>
<div className="w-24 h-24 mx-auto rounded-full border-4 border-white dark:border-slate-800 overflow-hidden relative z-10 shadow-lg mb-6">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-medium text-slate-900 dark:text-white">Alex Morgan</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Product Designer &amp; Dev</p>
<p className="text-base leading-relaxed mb-6">
                        Obsessed with pixel-perfect designs and clean, maintainable code. I bridge the gap between Figma and VS Code.
                    </p>
<div className="flex justify-center gap-2">
<span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium">UX/UI</span>
<span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium">React</span>
<span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium">Node</span>
</div>
</div>

<div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
<div className="glass-panel p-6 rounded-2xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
<i className="w-5 h-5" data-lucide="graduation-cap"></i>
</div>
<h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Education</h4>
<p className="text-sm">M.S. Computer Science</p>
<p className="text-xs text-slate-400">Stanford University, 2019-2021</p>
</div>
<div className="glass-panel p-6 rounded-2xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Motivation</h4>
<p className="text-sm">Solving complex problems with simple, elegant solutions driven by user needs.</p>
</div>
<div className="glass-panel p-6 rounded-2xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-4">
<i className="w-5 h-5" data-lucide="sprout"></i>
</div>
<h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Growth</h4>
<p className="text-sm">Currently learning Rust and WebAssembly to push browser performance limits.</p>
</div>
<div className="glass-panel p-6 rounded-2xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-4">
<i className="w-5 h-5" data-lucide="target"></i>
</div>
<h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Focus</h4>
<p className="text-sm">Building accessible design systems that scale across enterprise applications.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-100/50 dark:bg-slate-900/30" id="skills">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16">

<div className="w-full md:w-1/3 space-y-8 sticky top-32 self-start">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-white mb-6">Technical Proficiency</h2>
<p className="mb-8 text-base">Hover over a skill to see implementation details.</p>
</div>
<div className="space-y-6" id="skills-list">

<div className="group cursor-pointer" onmouseover="updatePreview('react')">
<div className="flex justify-between mb-2">
<span className="font-medium text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">React &amp; Next.js</span>
<span className="text-sm text-slate-400">95%</span>
</div>
<div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-orange-500 w-[95%] rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
</div>
</div>
<div className="group cursor-pointer" onmouseover="updatePreview('tailwind')">
<div className="flex justify-between mb-2">
<span className="font-medium text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">Tailwind CSS</span>
<span className="text-sm text-slate-400">98%</span>
</div>
<div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-cyan-500 w-[98%] rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
</div>
</div>
<div className="group cursor-pointer" onmouseover="updatePreview('uiux')">
<div className="flex justify-between mb-2">
<span className="font-medium text-slate-900 dark:text-white group-hover:text-pink-500 transition-colors">UI/UX Design</span>
<span className="text-sm text-slate-400">90%</span>
</div>
<div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-pink-500 w-[90%] rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
</div>
</div>
<div className="group cursor-pointer" onmouseover="updatePreview('ts')">
<div className="flex justify-between mb-2">
<span className="font-medium text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">TypeScript</span>
<span className="text-sm text-slate-400">88%</span>
</div>
<div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[88%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
</div>
</div>
</div>
</div>

<div className="w-full md:w-2/3">
<div className="glass-panel rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-[#1e1e1e] dark:bg-[#0d1117]">

<div className="flex items-center px-4 py-3 bg-white/5 dark:bg-white/5 border-b border-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="ml-4 text-xs font-mono text-slate-400" id="filename">Component.tsx</div>
</div>

<div className="p-6 overflow-x-auto">
<pre className="font-mono text-sm leading-relaxed" id="code-preview">
<span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;

<span className="text-blue-400">const</span> <span className="text-yellow-300">Portfolio</span> = () =&gt; {
  <span className="text-purple-400">return</span> (
    <span className="text-gray-400">&lt;</span><span className="text-red-400">div</span> <span className="text-orange-400">className</span>=<span className="text-green-400">"hero"</span><span className="text-gray-400">&gt;</span>
      <span className="text-gray-400">&lt;</span><span className="text-red-400">h1</span><span className="text-gray-400">&gt;</span>Building Digital Products<span className="text-gray-400">&lt;/</span><span className="text-red-400">h1</span><span className="text-gray-400">&gt;</span>
    <span className="text-gray-400">&lt;/</span><span className="text-red-400">div</span><span className="text-gray-400">&gt;</span>
  );
};
                            </pre>

<div className="hidden h-64 w-full bg-gradient-to-br from-pink-500 to-orange-400 rounded-lg flex items-center justify-center text-white font-bold text-2xl relative overflow-hidden" id="visual-preview">
<div className="absolute inset-0 bg-white/20 backdrop-blur-sm m-8 rounded-lg flex items-center justify-center">
                                    Figma Prototype
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<h3 className="text-2xl font-medium tracking-tight text-slate-900 dark:text-white mb-10 text-center">Tools &amp; Workflow</h3>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">

<div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-orange-200 dark:hover:border-orange-900 hover:shadow-lg transition-all group">
<i className="w-8 h-8 text-slate-400 group-hover:text-pink-500 transition-colors mb-3" data-lucide="figma"></i>
<span className="text-sm font-medium">Figma</span>
</div>
<div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 hover:shadow-lg transition-all group">
<i className="w-8 h-8 text-slate-400 group-hover:text-blue-500 transition-colors mb-3" data-lucide="codepen"></i>
<span className="text-sm font-medium">VS Code</span>
</div>
<div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-orange-200 dark:hover:border-orange-900 hover:shadow-lg transition-all group">
<i className="w-8 h-8 text-slate-400 group-hover:text-orange-500 transition-colors mb-3" data-lucide="git-branch"></i>
<span className="text-sm font-medium">Git</span>
</div>
<div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-green-200 dark:hover:border-green-900 hover:shadow-lg transition-all group">
<i className="w-8 h-8 text-slate-400 group-hover:text-green-500 transition-colors mb-3" data-lucide="terminal"></i>
<span className="text-sm font-medium">Terminal</span>
</div>
<div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-purple-200 dark:hover:border-purple-900 hover:shadow-lg transition-all group">
<i className="w-8 h-8 text-slate-400 group-hover:text-purple-500 transition-colors mb-3" data-lucide="trello"></i>
<span className="text-sm font-medium">Notion</span>
</div>
<div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-cyan-200 dark:hover:border-cyan-900 hover:shadow-lg transition-all group">
<i className="w-8 h-8 text-slate-400 group-hover:text-cyan-500 transition-colors mb-3" data-lucide="layers"></i>
<span className="text-sm font-medium">Linear</span>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 dark:bg-slate-950" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-white mb-2">Featured Projects</h2>
<p className="text-slate-500">A selection of my recent work.</p>
</div>
<a className="text-sm font-medium text-orange-600 hover:text-orange-700 flex items-center gap-1" href="#">View All <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
<div className="relative h-48 overflow-hidden">
<div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse"></div>
<img alt="Project 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-green-600 border border-green-200 dark:border-green-900">Completed</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2">FinTech Dashboard</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">A comprehensive financial analytics dashboard featuring real-time data visualization and dark mode.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">React</span>
<span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">D3.js</span>
<span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Tailwind</span>
</div>
<div className="mt-auto flex gap-4">
<button className="flex-1 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium hover:opacity-90">Live Demo</button>
<button className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white"><i className="w-4 h-4" data-lucide="github"></i></button>
</div>
</div>
</div>

<div className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
<div className="relative h-48 overflow-hidden">
<img alt="Project 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-orange-500 border border-orange-200 dark:border-orange-900">In Progress</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2">E-Commerce API</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Scalable REST API for a multi-vendor marketplace with Stripe integration and inventory management.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Node.js</span>
<span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Express</span>
<span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">MongoDB</span>
</div>
<div className="mt-auto flex gap-4">
<button className="flex-1 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium hover:opacity-90">Live Demo</button>
<button className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white"><i className="w-4 h-4" data-lucide="github"></i></button>
</div>
</div>
</div>

<div className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
<div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<i className="w-16 h-16 text-white/80" data-lucide="smartphone"></i>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2">Health Tracker App</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Mobile application for tracking daily fitness goals, calorie intake, and sleep patterns.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">React Native</span>
<span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Firebase</span>
</div>
<div className="mt-auto flex gap-4">
<button className="flex-1 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium hover:opacity-90">App Store</button>
<button className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white"><i className="w-4 h-4" data-lucide="github"></i></button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="playground">
<div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/50 -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-white mb-10 text-center">Interactive Playground</h2>
<div className="grid lg:grid-cols-2 gap-8">

<div className="glass-panel p-6 rounded-2xl">
<div className="flex items-center justify-between mb-6">
<h3 className="font-medium flex items-center gap-2"><i className="w-5 h-5 text-orange-500" data-lucide="cpu"></i> CSS Generator</h3>
<div className="flex bg-slate-200 dark:bg-slate-800 rounded-lg p-1">
<button className="px-3 py-1 text-xs font-medium bg-white dark:bg-slate-700 rounded shadow-sm">Border</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500">Shadow</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500">Glass</button>
</div>
</div>
<div className="space-y-6">
<div>
<label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">Radius</label>
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500" max="50" min="0" type="range" value="16"/>
</div>
<div>
<label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">Opacity</label>
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500" max="100" min="0" type="range" value="70"/>
</div>
<div className="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-sm relative group">
<p>border-radius: 16px;</p>
<p>background: rgba(255,255,255, 0.7);</p>
<p>backdrop-filter: blur(10px);</p>
<button className="absolute top-2 right-2 p-1.5 bg-white/10 rounded hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-4 h-4 text-white" data-lucide="copy"></i>
</button>
</div>
</div>
</div>

<div className="glass-panel p-12 rounded-2xl flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
<div className="w-48 h-48 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 flex items-center justify-center text-slate-900 font-medium">
                        Preview Element
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-white mb-10">Latest Thoughts</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="glass-panel p-8 rounded-3xl hover:border-orange-200 dark:hover:border-orange-900 transition-all cursor-pointer group">
<span className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2 block">Development</span>
<h3 className="text-2xl font-medium text-slate-900 dark:text-white mb-3 group-hover:text-orange-600 transition-colors">Why I Switched from Webpack to Vite</h3>
<p className="text-slate-500 leading-relaxed mb-6">The build times were getting unbearable. Here is a breakdown of the performance gains and the migration process.</p>
<div className="flex items-center text-sm text-slate-400 gap-4">
<span>Oct 12, 2023</span>
<span>•</span>
<span>5 min read</span>
</div>
</div>
<div className="glass-panel p-8 rounded-3xl hover:border-pink-200 dark:hover:border-pink-900 transition-all cursor-pointer group">
<span className="text-xs font-bold text-pink-500 uppercase tracking-wider mb-2 block">Design</span>
<h3 className="text-2xl font-medium text-slate-900 dark:text-white mb-3 group-hover:text-pink-600 transition-colors">The Psychology of Micro-interactions</h3>
<p className="text-slate-500 leading-relaxed mb-6">How small animations can drastically improve user retention and perceived application speed.</p>
<div className="flex items-center text-sm text-slate-400 gap-4">
<span>Sep 28, 2023</span>
<span>•</span>
<span>8 min read</span>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200 dark:border-slate-800 py-12 bg-white dark:bg-slate-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="sparkles"></i>
</div>
<span className="text-lg font-medium text-slate-900 dark:text-white">Folioblox</span>
</div>
<div className="text-sm text-slate-500">
                © 2023 Alex Morgan. Built with Tailwind CSS.
            </div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">GitHub</a>
<a className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Email</a>
</div>
</div>
</footer>



    </>
  );
}
