import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 glass border-b-white/5 border-t-0 border-l-0 border-r-0">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white tracking-tighter font-semibold text-lg flex items-center gap-2" href="#">
<iconify-icon className="text-cyan-400" icon="solar:cpu-linear" width="20"></iconify-icon>
                KOMOLIKA RAUT
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#skills">Skills</a>
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
<a className="hover:text-white transition-colors" href="#roadmap">Roadmap</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors" href="#contact">
                    Get in touch
                </a>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="relative z-10">

<section className="min-h-screen flex items-center pt-20 pb-12 px-6">
<div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 text-xs font-medium text-cyan-400">
<span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        Available for AI/ML Roles &amp; Internships
                    </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white leading-[1.1]">
                        Building Intelligent Systems with <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-500 glow-text">
                            AI, ML &amp; Deep Learning
                        </span>
</h1>
<p className="text-base md:text-lg max-w-xl leading-relaxed text-zinc-400">
                        AI Engineering student passionate about Machine Learning, NLP, Deep Learning, LLMs, MLOps, and architecting impactful AI products for real-world problems.
                    </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<a className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all" href="#projects">
                            View Projects
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 glass border-white/10 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-all" href="#">
<iconify-icon icon="solar:document-linear" width="18"></iconify-icon>
                            Download Resume
                        </a>
<div className="flex items-center gap-4 ml-2">
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:github-linear" width="24"></iconify-icon></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="24"></iconify-icon></a>
</div>
</div>
</div>
<div className="relative hidden lg:flex justify-center items-center animate-float">

<div className="w-80 h-80 relative">
<div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 border border-indigo-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-8 border border-cyan-500/20 rounded-full border-dashed animate-[spin_20s_linear_infinite]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 bg-gradient-to-tr from-indigo-600 to-cyan-400 rounded-full blur-xl opacity-50"></div>
<iconify-icon className="text-white absolute z-10" icon="solar:code-square-linear" width="48"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-5 space-y-4">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">About Me</h2>
<div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"></div>
</div>
<div className="lg:col-span-7 space-y-6 text-base leading-relaxed">
<p>
                            I am a 3rd Year Engineering student specializing in Artificial Intelligence based in Nagpur, India. My academic and practical focus revolves around <span className="text-white font-medium">Machine Learning, Deep Learning, NLP, Transformers, and Fuzzy Systems</span>.
                        </p>
<p>
                            I am deeply passionate about bridging the gap between theoretical research and scalable, real-world AI applications. Whether it's fine-tuning Small Language Models (SLMs) or building predictive analytics engines, I thrive on solving complex problems.
                        </p>
<p>
                            Currently, I am preparing for top-tier AI/ML roles (targeting 10+ LPA), seeking research internships, and aiming to contribute to product-based companies where AI drives core business value.
                        </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
<div className="glass p-4 rounded-xl text-center">
<div className="text-2xl font-semibold text-white tracking-tight">3rd</div>
<div className="text-xs mt-1">Year Engg.</div>
</div>
<div className="glass p-4 rounded-xl text-center">
<div className="text-2xl font-semibold text-white tracking-tight">10+</div>
<div className="text-xs mt-1">Projects</div>
</div>
<div className="glass p-4 rounded-xl text-center">
<div className="text-2xl font-semibold text-white tracking-tight">NLP</div>
<div className="text-xs mt-1">Core Focus</div>
</div>
<div className="glass p-4 rounded-xl text-center">
<div className="text-2xl font-semibold text-white tracking-tight">GATE</div>
<div className="text-xs mt-1">Aspirant</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-white/[0.01]" id="skills">
<div className="max-w-7xl mx-auto space-y-12">
<div className="text-center space-y-4">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Technical Arsenal</h2>
<p className="text-sm text-zinc-400 max-w-2xl mx-auto">Core competencies across the AI and software engineering spectrum.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass p-6 rounded-2xl glow-box transition-all duration-300">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
<div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
<iconify-icon icon="solar:brain-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">ML &amp; Deep Learning</h3>
</div>
<div className="space-y-5">
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-zinc-300">Machine Learning</span><span className="text-zinc-500">90%</span></div>
<div className="w-full bg-white/5 rounded-full h-1"><div className="bg-indigo-500 h-1 rounded-full" style={{width: '90%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-zinc-300">Deep Learning</span><span className="text-zinc-500">85%</span></div>
<div className="w-full bg-white/5 rounded-full h-1"><div className="bg-indigo-500 h-1 rounded-full" style={{width: '85%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-zinc-300">TensorFlow &amp; PyTorch</span><span className="text-zinc-500">80%</span></div>
<div className="w-full bg-white/5 rounded-full h-1"><div className="bg-indigo-500 h-1 rounded-full" style={{width: '80%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-zinc-300">Scikit-learn</span><span className="text-zinc-500">95%</span></div>
<div className="w-full bg-white/5 rounded-full h-1"><div className="bg-indigo-500 h-1 rounded-full" style={{width: '95%'}}></div></div>
</div>
</div>
</div>

<div className="glass p-6 rounded-2xl glow-box transition-all duration-300">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
<div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
<iconify-icon icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">NLP &amp; LLMs</h3>
</div>
<div className="space-y-5">
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-zinc-300">Natural Language Processing</span><span className="text-zinc-500">85%</span></div>
<div className="w-full bg-white/5 rounded-full h-1"><div className="bg-cyan-400 h-1 rounded-full" style={{width: '85%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-zinc-300">Transformers / BERT</span><span className="text-zinc-500">80%</span></div>
<div className="w-full bg-white/5 rounded-full h-1"><div className="bg-cyan-400 h-1 rounded-full" style={{width: '80%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-zinc-300">LLM Fine-tuning (SLMs)</span><span className="text-zinc-500">75%</span></div>
<div className="w-full bg-white/5 rounded-full h-1"><div className="bg-cyan-400 h-1 rounded-full" style={{width: '75%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-zinc-300">Prompt Engineering</span><span className="text-zinc-500">90%</span></div>
<div className="w-full bg-white/5 rounded-full h-1"><div className="bg-cyan-400 h-1 rounded-full" style={{width: '90%'}}></div></div>
</div>
</div>
</div>

<div className="glass p-6 rounded-2xl glow-box transition-all duration-300">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
<div className="p-2 bg-violet-500/10 rounded-lg text-violet-400">
<iconify-icon icon="solar:server-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Engineering &amp; Tools</h3>
</div>
<div className="space-y-5">
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-zinc-300">Python &amp; SQL</span><span className="text-zinc-500">95%</span></div>
<div className="w-full bg-white/5 rounded-full h-1"><div className="bg-violet-500 h-1 rounded-full" style={{width: '95%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-zinc-300">MLOps &amp; Docker</span><span className="text-zinc-500">70%</span></div>
<div className="w-full bg-white/5 rounded-full h-1"><div className="bg-violet-500 h-1 rounded-full" style={{width: '70%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-zinc-300">FastAPI &amp; Streamlit</span><span className="text-zinc-500">85%</span></div>
<div className="w-full bg-white/5 rounded-full h-1"><div className="bg-violet-500 h-1 rounded-full" style={{width: '85%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-zinc-300">MATLAB &amp; Fuzzy Logic</span><span className="text-zinc-500">80%</span></div>
<div className="w-full bg-white/5 rounded-full h-1"><div className="bg-violet-500 h-1 rounded-full" style={{width: '80%'}}></div></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="projects">
<div className="max-w-7xl mx-auto space-y-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="space-y-4">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Featured Projects</h2>
<p className="text-sm text-zinc-400 max-w-xl">A selection of my recent work in predictive modeling, NLP, and intelligent systems.</p>
</div>
<div className="flex gap-2">

<span className="text-xs bg-white/10 text-white px-3 py-1 rounded-full cursor-pointer hover:bg-white/20 transition-colors">All</span>
<span className="text-xs bg-transparent border border-white/10 text-zinc-400 px-3 py-1 rounded-full cursor-pointer hover:text-white transition-colors">NLP</span>
<span className="text-xs bg-transparent border border-white/10 text-zinc-400 px-3 py-1 rounded-full cursor-pointer hover:text-white transition-colors">Deep Learning</span>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="group relative glass rounded-2xl overflow-hidden p-6 hover:bg-white/[0.03] transition-all duration-500">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div className="mb-4 inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 text-xs font-medium">
                            Research Oriented
                        </div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">BERT-Based Predictive Modeling</h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                            Developed a predictive analytics system using BERT to analyze and forecast student academic performance based on textual and structural data patterns.
                        </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-300">NLP</span>
<span className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-300">BERT</span>
<span className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-300">Predictive Analytics</span>
</div>
<div className="flex gap-4">
<a className="text-xs font-medium text-white flex items-center gap-2 hover:text-cyan-400 transition-colors" href="#">
<iconify-icon icon="solar:github-linear" width="16"></iconify-icon> View Source
                            </a>
</div>
</div>

<div className="group relative glass rounded-2xl overflow-hidden p-6 hover:bg-white/[0.03] transition-all duration-500">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div className="mb-4 inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-medium">
                            AI Application
                        </div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Game-Based IP Awareness Platform</h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                            An AI-driven educational website for children featuring interactive storytelling, an intelligent quiz engine, and awareness games with a child-friendly UI.
                        </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-300">AI Education</span>
<span className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-300">Quiz Engine</span>
<span className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-300">React</span>
</div>
<div className="flex gap-4">
<a className="text-xs font-medium text-white flex items-center gap-2 hover:text-cyan-400 transition-colors" href="#">
<iconify-icon icon="solar:github-linear" width="16"></iconify-icon> Code
                            </a>
<a className="text-xs font-medium text-white flex items-center gap-2 hover:text-cyan-400 transition-colors" href="#">
<iconify-icon icon="solar:global-linear" width="16"></iconify-icon> Live Demo
                            </a>
</div>
</div>

<div className="group relative glass rounded-2xl overflow-hidden p-6 hover:bg-white/[0.03] transition-all duration-500">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div className="mb-4 inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-400 text-xs font-medium">
                            Control Systems
                        </div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Fuzzy Logic Controller</h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                            Designed a fuzzy logic controller using MATLAB and Python, defining membership functions and fuzzy sets for complex engineering AI applications.
                        </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-300">MATLAB</span>
<span className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-300">Python</span>
<span className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-300">Fuzzy Sets</span>
</div>
<div className="flex gap-4">
<a className="text-xs font-medium text-white flex items-center gap-2 hover:text-cyan-400 transition-colors" href="#">
<iconify-icon icon="solar:github-linear" width="16"></iconify-icon> View Source
                            </a>
</div>
</div>

<div className="group relative glass rounded-2xl overflow-hidden p-6 hover:bg-white/[0.03] transition-all duration-500">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div className="mb-4 inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                            LLM Operations
                        </div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">SLM Fine-tuning Project</h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                            Established fine-tuning workflows for Small Language Models, encompassing instruction datasets, template engineering, and tabular to instruction conversion.
                        </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-300">LLM Fine-tuning</span>
<span className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-300">Instruction Datasets</span>
<span className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-300">PyTorch</span>
</div>
<div className="flex gap-4">
<a className="text-xs font-medium text-white flex items-center gap-2 hover:text-cyan-400 transition-colors" href="#">
<iconify-icon icon="solar:github-linear" width="16"></iconify-icon> View Source
                            </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

<div className="space-y-8">
<div className="space-y-2">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Research &amp; Focus Areas</h2>
<p className="text-sm text-zinc-400">Current domains of exploration and expertise building.</p>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-4 p-4 glass rounded-xl border border-white/5">
<iconify-icon className="text-cyan-400 mt-0.5" icon="solar:lightbulb-linear" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-white">NLP &amp; LLMs</h4>
<p className="text-xs text-zinc-400 mt-1">Deep dives into Transformers, fine-tuning small language models, and instruction engineering.</p>
</div>
</li>
<li className="flex items-start gap-4 p-4 glass rounded-xl border border-white/5">
<iconify-icon className="text-indigo-400 mt-0.5" icon="solar:graph-linear" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-white">Predictive Intelligence</h4>
<p className="text-xs text-zinc-400 mt-1">Building AI for Decision Systems using traditional ML and advanced deep learning architectures.</p>
</div>
</li>
<li className="flex items-start gap-4 p-4 glass rounded-xl border border-white/5">
<iconify-icon className="text-violet-400 mt-0.5" icon="solar:box-linear" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-white">AI Product Engineering</h4>
<p className="text-xs text-zinc-400 mt-1">Focusing on educational AI, MLOps, and deploying scalable machine learning models.</p>
</div>
</li>
</ul>
</div>

<div className="space-y-8">
<div className="space-y-2">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Key Milestones</h2>
<p className="text-sm text-zinc-400">Progress and achievements on my engineering path.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 glass rounded-xl border border-white/5 flex items-center gap-3 hover:border-white/10 transition-colors">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-300 font-medium">3rd Year AI Engg Student</span>
</div>
<div className="p-4 glass rounded-xl border border-white/5 flex items-center gap-3 hover:border-white/10 transition-colors">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-300 font-medium">Strong ML/DL roadmap active</span>
</div>
<div className="p-4 glass rounded-xl border border-white/5 flex items-center gap-3 hover:border-white/10 transition-colors">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-300 font-medium">Research-grade NLP projects</span>
</div>
<div className="p-4 glass rounded-xl border border-white/5 flex items-center gap-3 hover:border-white/10 transition-colors">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:target-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-300 font-medium">Targeting 10+ LPA AI roles</span>
</div>
<div className="p-4 glass rounded-xl border border-white/5 flex items-center gap-3 hover:border-white/10 transition-colors">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:code-circle-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-300 font-medium">Open-source development</span>
</div>
<div className="p-4 glass rounded-xl border border-white/5 flex items-center gap-3 hover:border-white/10 transition-colors">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:user-circle-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-300 font-medium">Active GitHub portfolio</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="roadmap">
<div className="max-w-3xl mx-auto">
<div className="text-center space-y-4 mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">My AI Engineering Journey</h2>
<p className="text-sm text-zinc-400">The structured path I am following toward professional mastery.</p>
</div>
<div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-8 pb-4">
<div className="relative pl-8 md:pl-10">
<div className="absolute w-6 h-6 bg-[#050505] rounded-full -left-3 top-0 border border-white/20 flex items-center justify-center">
<div className="w-2 h-2 bg-zinc-500 rounded-full"></div>
</div>
<h3 className="text-sm font-semibold text-white">ML Foundations</h3>
<p className="text-xs text-zinc-500 mt-1">Mathematics, Statistics, Python, and traditional Machine Learning algorithms.</p>
</div>
<div className="relative pl-8 md:pl-10">
<div className="absolute w-6 h-6 bg-[#050505] rounded-full -left-3 top-0 border border-white/20 flex items-center justify-center">
<div className="w-2 h-2 bg-zinc-500 rounded-full"></div>
</div>
<h3 className="text-sm font-semibold text-white">Deep Learning</h3>
<p className="text-xs text-zinc-500 mt-1">Neural Networks, TensorFlow, PyTorch, CNNs, and sequence models.</p>
</div>
<div className="relative pl-8 md:pl-10">
<div className="absolute w-6 h-6 bg-[#050505] rounded-full -left-3 top-0 border border-cyan-500/50 flex items-center justify-center">
<div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
</div>
<h3 className="text-sm font-semibold text-cyan-400">NLP + Transformers (Current Phase)</h3>
<p className="text-xs text-zinc-400 mt-1">BERT, attention mechanisms, text processing, and predictive text modeling.</p>
</div>
<div className="relative pl-8 md:pl-10">
<div className="absolute w-6 h-6 bg-[#050505] rounded-full -left-3 top-0 border border-indigo-500/50 flex items-center justify-center">
<div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
</div>
<h3 className="text-sm font-semibold text-indigo-400">LLM Fine-Tuning</h3>
<p className="text-xs text-zinc-400 mt-1">Instruction engineering, SLMs, prompt design, and dataset curation.</p>
</div>
<div className="relative pl-8 md:pl-10">
<div className="absolute w-6 h-6 bg-[#050505] rounded-full -left-3 top-0 border border-white/20 flex items-center justify-center">
<div className="w-2 h-2 bg-zinc-700 rounded-full"></div>
</div>
<h3 className="text-sm font-semibold text-zinc-300">MLOps + Deployment</h3>
<p className="text-xs text-zinc-500 mt-1">Docker, CI/CD for ML, FastAPI, model serving and monitoring.</p>
</div>
<div className="relative pl-8 md:pl-10">
<div className="absolute w-6 h-6 bg-[#050505] rounded-full -left-3 top-0 border border-white/20 flex items-center justify-center">
<div className="w-2 h-2 bg-zinc-700 rounded-full"></div>
</div>
<h3 className="text-sm font-semibold text-zinc-300">AI Product Engineering</h3>
<p className="text-xs text-zinc-500 mt-1">End-to-end full-stack AI applications integrating advanced models into seamless UIs.</p>
</div>
<div className="relative pl-8 md:pl-10">
<div className="absolute w-6 h-6 bg-[#050505] rounded-full -left-3 top-0 border border-violet-500/30 flex items-center justify-center">
<iconify-icon className="text-violet-400" icon="solar:star-linear" width="12"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white">Research &amp; Placement</h3>
<p className="text-xs text-zinc-500 mt-1">Securing high-tier research internships and landing a 10+ LPA AI Engineering role.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative overflow-hidden" id="contact">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Let's Connect</h2>
<p className="text-sm text-zinc-400 leading-relaxed">
                        I am currently open to internship opportunities, collaborative research projects, and discussions regarding AI/ML roles. Let's build something intelligent together.
                    </p>
<div className="space-y-4 pt-4">
<a className="flex items-center gap-3 text-sm text-zinc-300 hover:text-cyan-400 transition-colors w-fit">
<div className="w-10 h-10 rounded-full glass flex items-center justify-center">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
                           komolikaraut8@gmail.com
                        </a>
<a className="flex items-center gap-3 text-sm text-zinc-300 hover:text-indigo-400 transition-colors w-fit" href="https://www.linkedin.com/in/komolika-raut-7a5793290?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app">
<div className="w-10 h-10 rounded-full glass flex items-center justify-center">
<iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon>
</div>
                            
                            linked in
                        </a>
<a className="flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors w-fit" href="#">
<div className="w-10 h-10 rounded-full glass flex items-center justify-center">
<iconify-icon icon="solar:github-linear" width="20"></iconify-icon>
</div>
                            GitHub Portfolio
                        </a>
</div>
</div>
<div className="glass p-6 md:p-8 rounded-2xl border border-white/10">
<form className="space-y-4">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-400">Name</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-600 transition-colors focus:bg-black/80" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-400">Email</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-600 transition-colors focus:bg-black/80" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-400">Message</label>
<textarea className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-600 transition-colors focus:bg-black/80 resize-none" placeholder="Discussing an AI role..." rows="4"></textarea>
</div>
<div className="pt-2 flex items-center justify-between">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative w-4 h-4 rounded border border-white/20 bg-black group-hover:border-white/40 transition-colors flex items-center justify-center">
<input className="appearance-none absolute inset-0 cursor-pointer peer" type="checkbox"/>
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-xs text-zinc-400 group-hover:text-zinc-300">Request Resume</span>
</label>
<button className="bg-white text-black px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-2" type="button">
                                Send Message
                                <iconify-icon icon="solar:plain-linear" width="16"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</section>

<footer className="py-8 px-6 border-t border-white/5 text-center">
<p className="text-xs text-zinc-500">© 2024 Komolika Raut. Aspiring AI Engineer. Built with semantic HTML &amp; Tailwind.</p>
</footer>
</main>

<div className="fixed bottom-6 right-6 z-50 group cursor-pointer">
<div className="absolute -inset-2 bg-indigo-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 glass rounded-full flex items-center justify-center text-white border-white/20 hover:bg-white/10 transition-colors shadow-lg shadow-black/50 relative z-10">
<iconify-icon icon="solar:chat-square-code-linear" width="24"></iconify-icon>
</div>
</div>

    </>
  );
}
