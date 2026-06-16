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
}
}
}
}



        // Check for saved theme preference or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Toggle function
        function toggleTheme() {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-noise"></div>

<nav className="fixed top-0 w-full z-50 border-b border-neutral-200 dark:border-white/5 bg-white/80 dark:bg-[#030303]/80 backdrop-blur-md transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm font-semibold tracking-widest text-neutral-900 dark:text-white hover:opacity-80 transition-opacity" href="#">
                STELLARSEARCH.AI
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors" href="#about">About</a>
<a className="text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors" href="#expertise">Expertise</a>
<a className="text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors" href="#testimonials">Testimonials</a>
<a className="text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors" href="#candidates">For Candidates</a>
</div>
<div className="flex items-center gap-4">

<button className="p-2 rounded-full text-neutral-500 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors focus:outline-none" onclick="toggleTheme()">
<span className="iconify block dark:hidden" data-icon="lucide:moon" data-width="16"></span>
<span className="iconify hidden dark:block" data-icon="lucide:sun" data-width="16"></span>
</button>
<a className="text-xs font-medium border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5 px-4 py-2 rounded-full hover:bg-neutral-200 dark:hover:bg-white/10 transition-all text-neutral-900 dark:text-white" href="#contact">
                    Contact
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="absolute inset-0 z-0 aura-glow opacity-40 pointer-events-none transform -translate-y-20"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-white/5 mb-8 w-fit backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-neutral-600 dark:text-neutral-300 tracking-tight">Accepting new startup partners</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-neutral-900 dark:text-white leading-[1.1] mb-6">
                    Transforming AI startups with the <span className="text-gradient">Top 0.01% Talent</span>
</h1>
<p className="text-lg text-neutral-500 dark:text-neutral-400 font-light leading-relaxed mb-8 max-w-lg">
                    We help NY and SF-based AI startups build founding engineering teams that actually ship. The applied AI world is small; we operate inside it.
                </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<a className="group relative px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all flex items-center gap-2" href="#contact">
                        Talk to StellarSearch
                        <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="text-sm font-medium text-neutral-500 hover:text-black dark:text-neutral-500 dark:hover:text-white transition-colors px-4 py-3" href="#candidates">
                        For candidates →
                    </a>
</div>
</div>

<div className="relative h-[400px] w-full hidden lg:flex items-center justify-center">

<div className="relative w-full h-full border-subtle rounded-xl bg-gradient-to-br from-neutral-100/50 dark:from-white/5 to-transparent p-1 overflow-hidden transition-colors duration-500">
<div className="absolute inset-0 grid-lines opacity-100"></div>

<div className="absolute top-1/4 left-1/4 p-4 border border-neutral-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] rounded-lg shadow-xl dark:shadow-2xl z-20 transition-colors duration-300">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-white/10 flex items-center justify-center text-neutral-900 dark:text-white">
<span className="iconify" data-icon="lucide:brain-circuit" data-width="16"></span>
</div>
<div>
<div className="text-xs font-medium text-neutral-900 dark:text-white">LLM Architect</div>
<div className="text-[10px] text-neutral-500">Ex-OpenAI, DeepMind</div>
</div>
</div>
<div className="flex gap-1">
<span className="h-1 w-12 bg-emerald-500/20 rounded-full"></span>
<span className="h-1 w-8 bg-neutral-200 dark:bg-neutral-800 rounded-full"></span>
</div>
</div>
<div className="absolute bottom-1/3 right-1/4 p-4 border border-neutral-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] rounded-lg shadow-xl dark:shadow-2xl z-10 opacity-90 dark:opacity-80 scale-90 transition-colors duration-300">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-white/10 flex items-center justify-center text-neutral-900 dark:text-white">
<span className="iconify" data-icon="lucide:video" data-width="16"></span>
</div>
<div>
<div className="text-xs font-medium text-neutral-900 dark:text-white">Computer Vision</div>
<div className="text-[10px] text-neutral-500">PhD, Stanford</div>
</div>
</div>
<div className="flex gap-1">
<span className="h-1 w-16 bg-purple-500/20 rounded-full"></span>
</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 dark:opacity-20" xmlns="http://www.w3.org/2000/svg">
<path className="stroke-neutral-900 dark:stroke-white" d="M150 150 C 250 150, 300 250, 400 300" fill="none" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-neutral-200 dark:border-white/5 bg-neutral-50/50 dark:bg-[#050505] transition-colors duration-300" id="about">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
<div>
<h2 className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-4">The Landscape</h2>
<h3 className="text-3xl font-medium text-neutral-900 dark:text-white tracking-tight mb-6">This is not general recruiting.</h3>
<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                    Applied AI is niche by nature. We specialize inside it. We work with the people building LLM copilots, multimodal systems, agentic workflows, and production-grade research pipelines. 
                </p>
<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    These aren’t folks you’ll find through LinkedIn searches. They’re the builders shaping the next wave of AI-native products, turning papers into products across NYC and SF.
                </p>
</div>
<div className="relative border-subtle bg-white dark:bg-[#0A0A0A] rounded-xl p-8 flex flex-col justify-center shadow-sm dark:shadow-none transition-colors duration-300">

<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">INPUT</span>
<span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">PROCESS</span>
<span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">OUTPUT</span>
</div>
<div className="flex items-center gap-4">
<div className="flex-1 p-4 border border-neutral-200 dark:border-white/10 rounded bg-neutral-50 dark:bg-white/5 text-center transition-colors">
<span className="iconify mx-auto text-neutral-400 mb-2" data-icon="lucide:database" data-width="20"></span>
<div className="text-xs text-neutral-600 dark:text-neutral-300">Data</div>
</div>
<span className="iconify text-neutral-400 dark:text-neutral-600" data-icon="lucide:arrow-right" data-width="20"></span>
<div className="flex-1 p-4 border border-neutral-300 dark:border-white/20 rounded bg-white dark:bg-white/5 text-center shadow-md dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
<span className="iconify mx-auto text-neutral-900 dark:text-white mb-2" data-icon="lucide:cpu" data-width="20"></span>
<div className="text-xs text-neutral-900 dark:text-white font-medium">Model</div>
</div>
<span className="iconify text-neutral-400 dark:text-neutral-600" data-icon="lucide:arrow-right" data-width="20"></span>
<div className="flex-1 p-4 border border-neutral-200 dark:border-white/10 rounded bg-neutral-50 dark:bg-white/5 text-center transition-colors">
<span className="iconify mx-auto text-neutral-400 mb-2" data-icon="lucide:box" data-width="20"></span>
<div className="text-xs text-neutral-600 dark:text-neutral-300">Product</div>
</div>
</div>
<div className="pt-4 border-t border-neutral-100 dark:border-white/5 text-center">
<p className="text-xs text-neutral-500">We place the engineers who own this entire pipeline.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden bg-white dark:bg-[#030303] transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 mb-12 text-center">
<h2 className="text-2xl font-medium text-neutral-900 dark:text-white tracking-tight mb-2">We don’t search. We already know them.</h2>
<p className="text-sm text-neutral-500">Access to the builders behind the breakthroughs.</p>
</div>

<div className="marquee-container w-full relative">
<div className="marquee-content flex gap-6 w-max px-6">

<div className="w-80 p-5 bg-white dark:bg-[#0F0F0F] border border-neutral-200 dark:border-white/10 rounded-lg shrink-0 transition-colors">
<div className="flex items-center gap-3 mb-3">
<span className="iconify text-neutral-500 dark:text-neutral-400" data-icon="lucide:github" data-width="20"></span>
<div className="text-xs font-mono text-neutral-600 dark:text-neutral-300">github.com/video-diffusion</div>
</div>
<p className="text-sm text-neutral-500 dark:text-neutral-400">Contributed to SOTA video generation model. Optimization of attention mechanisms.</p>
</div>

<div className="w-80 p-5 bg-white dark:bg-[#0F0F0F] border border-neutral-200 dark:border-white/10 rounded-lg shrink-0 transition-colors">
<div className="flex items-center gap-3 mb-3">
<span className="iconify text-neutral-500 dark:text-neutral-400" data-icon="lucide:file-text" data-width="20"></span>
<div className="text-xs font-mono text-neutral-600 dark:text-neutral-300">NeurIPS 2024 Paper</div>
</div>
<p className="text-sm text-neutral-500 dark:text-neutral-400">Lead Author: "Efficient Multimodal Learning in Low-Resource Environments".</p>
</div>

<div className="w-80 p-5 bg-white dark:bg-[#0F0F0F] border border-neutral-200 dark:border-white/10 rounded-lg shrink-0 transition-colors">
<div className="flex items-center gap-3 mb-3">
<span className="iconify text-neutral-500 dark:text-neutral-400" data-icon="lucide:code-2" data-width="20"></span>
<div className="text-xs font-mono text-neutral-600 dark:text-neutral-300">Senior Research Engineer</div>
</div>
<p className="text-sm text-neutral-500 dark:text-neutral-400">Built retrieval pipeline for Top 3 LLM company. Scaling infra to 10k GPU cluster.</p>
</div>

<div className="w-80 p-5 bg-white dark:bg-[#0F0F0F] border border-neutral-200 dark:border-white/10 rounded-lg shrink-0 transition-colors">
<div className="flex items-center gap-3 mb-3">
<span className="iconify text-neutral-500 dark:text-neutral-400" data-icon="lucide:mic" data-width="20"></span>
<div className="text-xs font-mono text-neutral-600 dark:text-neutral-300">Audio Synthesis Expert</div>
</div>
<p className="text-sm text-neutral-500 dark:text-neutral-400">Developed real-time voice conversion engine with &lt; 50ms latency.</p>
</div>

<div className="w-80 p-5 bg-white dark:bg-[#0F0F0F] border border-neutral-200 dark:border-white/10 rounded-lg shrink-0 transition-colors">
<div className="flex items-center gap-3 mb-3">
<span className="iconify text-neutral-500 dark:text-neutral-400" data-icon="lucide:github" data-width="20"></span>
<div className="text-xs font-mono text-neutral-600 dark:text-neutral-300">github.com/agentic-flow</div>
</div>
<p className="text-sm text-neutral-500 dark:text-neutral-400">Maintainer of popular open source agent framework. 15k+ Stars.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 dark:bg-[#050505] border-t border-neutral-200 dark:border-white/5 transition-colors duration-300" id="expertise">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-neutral-900 dark:text-white tracking-tight mb-16">Where we place talent</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 border border-neutral-200 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:border-neutral-300 hover:bg-white dark:hover:bg-white/[0.04] rounded-xl transition-all shadow-sm dark:shadow-none">
<span className="iconify text-neutral-500 dark:text-neutral-300 mb-4" data-icon="lucide:video" data-width="24"></span>
<h3 className="text-sm font-medium text-neutral-900 dark:text-white mb-2">Video &amp; Multimodal</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Engineers building video generation, computer vision, and foundation models. Pre-training and fine-tuning expertise.
                    </p>
</div>

<div className="group p-6 border border-neutral-200 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:border-neutral-300 hover:bg-white dark:hover:bg-white/[0.04] rounded-xl transition-all shadow-sm dark:shadow-none">
<span className="iconify text-neutral-500 dark:text-neutral-300 mb-4" data-icon="lucide:image" data-width="24"></span>
<h3 className="text-sm font-medium text-neutral-900 dark:text-white mb-2">Image Generation</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Specialists in diffusion models, style transfer, inpainting, and advanced synthesis for creative tooling.
                    </p>
</div>

<div className="group p-6 border border-neutral-200 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:border-neutral-300 hover:bg-white dark:hover:bg-white/[0.04] rounded-xl transition-all shadow-sm dark:shadow-none">
<span className="iconify text-neutral-500 dark:text-neutral-300 mb-4" data-icon="lucide:mic-2" data-width="24"></span>
<h3 className="text-sm font-medium text-neutral-900 dark:text-white mb-2">Speech &amp; Audio</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Experts in lifelike voice synthesis, dynamic audio effects, and real-time conversational audio processing.
                    </p>
</div>

<div className="group p-6 border border-neutral-200 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:border-neutral-300 hover:bg-white dark:hover:bg-white/[0.04] rounded-xl transition-all shadow-sm dark:shadow-none">
<span className="iconify text-neutral-500 dark:text-neutral-300 mb-4" data-icon="lucide:flask-conical" data-width="24"></span>
<h3 className="text-sm font-medium text-neutral-900 dark:text-white mb-2">Research Scientists</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Researchers with h-indexes above 25. People who turn novel papers into proprietary production advantages.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white dark:bg-[#030303] transition-colors duration-300">
<div className="max-w-4xl mx-auto">
<h2 className="text-2xl font-medium text-neutral-900 dark:text-white text-center mb-16 tracking-tight">A simple process, built for speed</h2>
<div className="relative border-l border-neutral-200 dark:border-white/10 ml-4 md:ml-0 space-y-12">

<div className="relative pl-8 md:pl-12">
<span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600"></span>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-1">1. Scope the role properly</h3>
<p className="text-sm text-neutral-500 max-w-md">We don't just take a JD. We align on technical outcomes and cultural fit.</p>
</div>

<div className="relative pl-8 md:pl-12">
<span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-neutral-900 dark:bg-white border border-neutral-900 dark:border-white shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_white]"></span>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-1">2. Immediate Access</h3>
<p className="text-sm text-neutral-500 max-w-md">We present high-signal, vetted profiles within 24 hours of engagement.</p>
</div>

<div className="relative pl-8 md:pl-12">
<span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600"></span>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-1">3. Focused Interviews</h3>
<p className="text-sm text-neutral-500 max-w-md">No volume. No noise. Only candidates that match the 0.01% bar.</p>
</div>

<div className="relative pl-8 md:pl-12">
<span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600"></span>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-1">4. Hire with Confidence</h3>
<p className="text-sm text-neutral-500 max-w-md">Backed by a 60-day placement guarantee.</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-neutral-200 dark:border-white/5 bg-neutral-50 dark:bg-[#080808] transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
<div>
<div className="text-5xl lg:text-6xl font-semibold tracking-tighter text-neutral-900 dark:text-white mb-2">92%</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Placement Success</div>
</div>
<div>
<div className="text-5xl lg:text-6xl font-semibold tracking-tighter text-neutral-900 dark:text-white mb-2">17<span className="text-2xl align-top text-neutral-400 dark:text-neutral-600">days</span></div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Avg Time-to-Hire</div>
</div>
<div>
<div className="text-5xl lg:text-6xl font-semibold tracking-tighter text-neutral-900 dark:text-white mb-2">98%</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Candidate Retention</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-[#030303] transition-colors duration-300" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-medium text-neutral-900 dark:text-white mb-12">Trusted by founders, respected by candidates</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 border border-neutral-200 dark:border-white/10 rounded-xl bg-white dark:bg-[#0A0A0A] shadow-sm dark:shadow-none transition-colors">
<div className="mb-4">
<span className="iconify text-neutral-400 dark:text-neutral-600" data-icon="lucide:quote" data-width="20"></span>
</div>
<p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                        "Liam's ability to navigate the unique challenges of startup recruiting is invaluable. A keen eye for matching candidates with not just skills, but cultural fit."
                    </p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-900 dark:text-white font-medium">S</div>
<div>
<div className="text-xs font-medium text-neutral-900 dark:text-white">Shikha</div>
<div className="text-[10px] text-neutral-500">Executive Talent Acquisition</div>
</div>
</div>
</div>

<div className="p-6 border border-neutral-200 dark:border-white/10 rounded-xl bg-white dark:bg-[#0A0A0A] shadow-sm dark:shadow-none transition-colors">
<div className="mb-4">
<span className="iconify text-neutral-400 dark:text-neutral-600" data-icon="lucide:quote" data-width="20"></span>
</div>
<p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                        "Everything presented was highly relevant to my skill set. He came back with a range of options that aligned almost perfectly. Incredibly sharp."
                    </p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-900 dark:text-white font-medium">R</div>
<div>
<div className="text-xs font-medium text-neutral-900 dark:text-white">Ribhav</div>
<div className="text-[10px] text-neutral-500">Senior AI Research Engineer</div>
</div>
</div>
</div>

<div className="p-6 border border-neutral-200 dark:border-white/10 rounded-xl bg-white dark:bg-[#0A0A0A] shadow-sm dark:shadow-none transition-colors">
<div className="mb-4">
<span className="iconify text-neutral-400 dark:text-neutral-600" data-icon="lucide:quote" data-width="20"></span>
</div>
<p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                        "Outstanding communications and timely follow-ups. Liam is an exceptional recruiter who understands the AI industry well."
                    </p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-900 dark:text-white font-medium">J</div>
<div>
<div className="text-xs font-medium text-neutral-900 dark:text-white">Jay</div>
<div className="text-[10px] text-neutral-500">Software Engineer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white dark:bg-[#030303] transition-colors duration-300" id="candidates">
<div className="max-w-4xl mx-auto rounded-2xl border border-neutral-200 dark:border-white/10 bg-gradient-to-br from-neutral-900 to-black p-10 md:p-16 text-center text-white">
<h2 className="text-2xl font-medium text-white mb-4">For builders working on real AI systems</h2>
<p className="text-neutral-400 mb-8 max-w-lg mx-auto leading-relaxed">
                If you’re already building, researching, or deploying applied AI, we may already be working with companies you’d want to join. We don't push roles. We match context.
            </p>
<a className="inline-flex items-center gap-2 text-sm text-white font-medium hover:text-neutral-300 transition-colors" href="#">
                Connect regarding opportunities <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6 bg-white dark:bg-[#030303] transition-colors duration-300">
<h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-8">Common Questions</h2>
<div className="space-y-4">
<details className="group border-b border-neutral-200 dark:border-white/5 pb-4">
<summary className="flex justify-between items-center cursor-pointer list-none text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors">
                    What is an AI executive search partner?
                    <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="text-neutral-500 text-sm mt-3 leading-relaxed">
                    A recruitment expert specialized in Gen AI. We help startups find the rare talent required to process and integrate multiple data types to solve complex problems.
                </div>
</details>
<details className="group border-b border-neutral-200 dark:border-white/5 pb-4">
<summary className="flex justify-between items-center cursor-pointer list-none text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors">
                    How do you find 0.01% candidates?
                    <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="text-neutral-500 text-sm mt-3 leading-relaxed">
                    We analyze research papers, personal GitHub profiles, and private communities. We uncover the minds behind influential tools and groundbreaking research, not just active job seekers.
                </div>
</details>
<details className="group border-b border-neutral-200 dark:border-white/5 pb-4">
<summary className="flex justify-between items-center cursor-pointer list-none text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors">
                    What are your fees?
                    <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="text-neutral-500 text-sm mt-3 leading-relaxed">
                    We offer retained or contingent success-based fees, personalized based on hiring plan headcount and search intricacy.
                </div>
</details>
</div>
</section>

<section className="py-32 px-6 border-t border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-[#030303] text-center transition-colors duration-300" id="contact">
<div className="max-w-2xl mx-auto">
<h2 className="text-4xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6">Ready to build your founding team?</h2>
<p className="text-neutral-500 mb-10">We’ll respond quickly. No sales pitch.</p>
<a className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all text-sm" href="mailto:contact@stellarsearch.ai">
                Get in Touch
            </a>
</div>
<div className="mt-32 border-t border-neutral-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto text-xs text-neutral-500 dark:text-neutral-600">
<p>© 2025 stellarsearch.ai. All Rights Reserved.</p>
<p>Website By Nexaflow</p>
</div>
</section>


    </>
  );
}
