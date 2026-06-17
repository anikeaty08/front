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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
base: '#050505',
surface: '#111111',
surface2: '#1a1a1a',
accent1: '#00f2fe',
accent2: '#4facfe',
accent3: '#a18cd1',
}
}
}
}



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
      

<div className="fixed inset-0 z-[-1] bg-grid"></div>
<div className="fixed top-0 left-1/4 w-[40vw] h-[40vw] rounded-full bg-accent1/5 blur-[120px] mix-blend-screen pointer-events-none z-[-1]"></div>
<div className="fixed bottom-0 right-1/4 w-[40vw] h-[40vw] rounded-full bg-accent3/5 blur-[120px] mix-blend-screen pointer-events-none z-[-1]"></div>

<nav className="fixed top-0 w-full z-50 glass-panel border-x-0 border-t-0">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-lg font-medium tracking-tighter text-white">AN.</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-gray-400">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#skills">Capabilities</a>
<a className="hover:text-white transition-colors" href="#prompts">Prompts</a>
<a className="hover:text-white transition-colors" href="#projects">Work</a>
</div>
<div className="flex items-center gap-4">
<button className="text-gray-400 hover:text-white transition-colors flex items-center">
<iconify-icon height="20" icon="solar:moon-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<a className="hidden sm:flex items-center justify-center px-4 py-2 text-sm text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-full transition-all" href="#contact">
                    Get in touch
                </a>
</div>
</div>
</nav>

<section className="md:pt-52 md:pb-32 flex flex-col text-center max-w-7xl mr-auto ml-auto pt-40 pr-6 pb-24 pl-6 relative items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-8 border-white/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent1 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-accent1"></span>
</span>
<span className="text-xs text-gray-300">Available for freelance opportunities</span>
</div>
<h1 className="md:text-7xl leading-tight text-5xl font-medium text-white tracking-tight max-w-4xl mb-6">Hetvi Limbani<br/> <span className="glow-text">Generative AI Specialist</span></h1>
<p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mb-12">
            Crafting powerful, precision-engineered prompts that turn abstract ideas into actionable intelligence and automated workflows.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2" href="#prompts">
                View My Prompts
                <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 rounded-full glass-panel text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2" href="#contact">
                Hire Me
                <iconify-icon height="18" icon="solar:briefcase-linear" width="18"></iconify-icon>
</a>
</div>
<div className="w-full max-w-3xl mt-24 text-left">
<div className="glass-panel rounded-xl overflow-hidden shadow-2xl shadow-black/50">
<div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<span className="ml-4 text-xs font-mono text-gray-500">system_init.prompt</span>
</div>
<div className="p-6 font-mono text-sm leading-relaxed text-gray-400">
<span className="text-accent3">System:</span> Initialize environment parameters.<br/>
<span className="text-accent1">Role:</span> Expert AI Communicator.<br/>
<span className="text-accent1">Objective:</span> Bridge human intent with machine execution.<br/>
<span className="text-gray-500 mt-2 block">&gt;&gt; Awaiting input stream...</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="about">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="md:text-red-200 text-3xl font-medium tracking-tight mb-6">About Me</h2>
<p className="leading-relaxed text-base font-light text-slate-300 border-stone-50 mb-6">I'm Hetvi Limbani, an AI Prompt Engineer with a passion for bridging human creativity and machine intelligence. I specialize in crafting precise, effective prompts for AI platforms.

</p>
<p className="leading-relaxed text-base font-light text-slate-300 mb-8">My approach combines technical understanding of how language models work with creative problem-solving — so every prompt I write doesn't just work, it excels. I've helped many clients automate content workflows, generate stunning visuals, and build AI-powered systems that scale.</p>
<div className="flex gap-8 border-t border-white/10 pt-8">
<div className="">
<div className="text-3xl font-medium text-white tracking-tight mb-1">50+</div>
<div className="text-xs text-gray-500 uppercase tracking-widest">Workflows Automated</div>
</div>
<div className="">
<div className="text-3xl font-medium text-white tracking-tight mb-1">10k+</div>
<div className="text-xs text-gray-500 uppercase tracking-widest">Prompts Engineered</div>
</div>
</div>
</div>
<div className="relative h-[400px] glass-panel rounded-2xl flex items-center justify-center overflow-hidden">
<div className="bg-gradient-to-br from-accent1/10 to-accent3/10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex gap-6 z-10 gap-x-6 gap-y-6 items-center">
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 shadow-lg backdrop-blur-md">
<iconify-icon height="28" icon="solar:user-linear" width="28"></iconify-icon>
</div>
<div className="flex gap-2 text-accent1 animate-pulse">
<iconify-icon height="24" icon="solar:minus-linear" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:minus-linear" width="24"></iconify-icon>
</div>
<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent1 to-accent3 p-[1px] shadow-[0_0_30px_rgba(0,242,254,0.3)]">
<div className="w-full h-full bg-surface2 rounded-2xl flex items-center justify-center text-white">
<iconify-icon className="" height="32" icon="solar:cpu-linear" width="32"></iconify-icon>
</div>
</div>
<div className="flex gap-2 text-accent3 animate-pulse">
<iconify-icon height="24" icon="solar:minus-linear" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:minus-linear" width="24"></iconify-icon>
</div>
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shadow-lg backdrop-blur-md">
<iconify-icon height="28" icon="solar:document-text-linear" width="28"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-surface" id="skills">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Technical Capabilities</h2>
<p className="text-gray-400 font-light max-w-2xl text-sm">A comprehensive toolkit spanning text generation, visual synthesis, and systemic automation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:text-accent1 transition-colors">
<iconify-icon height="20" icon="solar:code-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Prompt Engineering</h3>
<p className="text-sm font-light text-gray-500 mb-6">Designing precise, context-aware prompts that extract maximum value from LLMs — from zero-shot to chain-of-thought techniques.</p>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="w-[95%] h-full bg-gradient-to-r from-accent1 to-accent3"></div>
</div>
</div>
<div className="glass-panel hover:bg-white/5 transition-colors group rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:text-accent1 transition-colors">
<iconify-icon height="20" icon="solar:gallery-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Generative Visuals</h3>
<p className="text-sm font-light text-gray-500 mb-6">Fluent in the full generative AI ecosystem — text, image, video, and audio generation across all leading platforms.</p>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="w-[85%] h-full bg-gradient-to-r from-accent1 to-accent3"></div>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:text-accent1 transition-colors">
<iconify-icon height="20" icon="solar:workflow-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Workflow Automation</h3>
<p className="text-sm text-gray-500 font-light mb-6">Connecting LLMs to Zapier, Make, and API endpoints for seamless data processing.</p>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="w-[90%] h-full bg-gradient-to-r from-accent1 to-accent3"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 relative" id="prompts">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent1/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Prompt Library</h2>
<p className="text-gray-400 font-light max-w-xl text-sm">Curated snippets designed for maximum output quality, spacing, and adherence to constraints.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-full text-xs font-medium bg-white/10 text-white border border-white/10">All</button>
<button className="px-4 py-2 rounded-full text-xs font-medium text-gray-400 hover:text-white transition-colors">Copywriting</button>
<button className="px-4 py-2 rounded-full text-xs font-medium text-gray-400 hover:text-white transition-colors">Code</button>
<button className="px-4 py-2 rounded-full text-xs font-medium text-gray-400 hover:text-white transition-colors">Visuals</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

<div className="glass-panel rounded-2xl border border-white/10 overflow-hidden flex flex-col h-full">
<div className="p-8 border-b border-white/5">
<div className="flex items-start sm:items-center justify-between gap-4 mb-4 flex-col sm:flex-row">
<h3 className="text-lg font-medium tracking-tight text-slate-50">Developers spend hours coding for websites and apps</h3>
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400 font-mono whitespace-nowrap">GPT-4 Turbo</span>
</div>
<p className="text-sm font-light text-gray-400">Generated highly structured websites and apps in minutes.</p>
</div>
<div className="group flex-grow bg-black/40 p-8 relative">
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 flex items-center justify-center" title="Copy Prompt">
<iconify-icon height="16" icon="solar:copy-linear" width="16"></iconify-icon>
</button>
</div>
<pre className="font-mono text-xs text-gray-300 whitespace-pre-wrap leading-loose"><code className="">🔧 Website Development Prompt for Electrician Business

Build a modern, mobile-friendly website for an electrician service business where customers can:

🏠 Core Features
Homepage
Clean UI similar to Urban Company
Show services like:
Fan installation
Wiring repair
Switchboard fixing
Appliance installation
Display pricing (fixed or starting price)
“Book Now” button prominently visible

... [Truncated for preview]</code></pre>
</div>
<div className="p-6 sm:p-8 border-t border-white/5 bg-black/60 flex flex-col mt-auto">
<div className="flex items-center gap-2 text-accent1 mb-4">
<iconify-icon height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
<span className="text-[11px] font-bold uppercase tracking-widest">Results</span>
</div>
<div className="break-all text-sm font-medium italic text-stone-400 font-mono border-white/10 border-l ml-2 pl-4">https://electroserve-rrse555.public.builtwithrocket.new</div>
</div>
</div>

<div className="glass-panel overflow-hidden flex flex-col h-full border-white/10 border rounded-2xl">
<div className="p-8 border-b border-white/5">
<div className="flex items-start sm:items-center justify-between gap-4 mb-4 flex-col sm:flex-row">
<h3 className="text-lg font-medium text-slate-50 tracking-tight">Animators spend hours animating videos, images and adding audios</h3>
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400 font-mono whitespace-nowrap">GPT-4 Turbo</span>
</div>
<p className="text-sm font-light text-gray-400">Generated videos, images and audios with AI in minutes</p>
</div>
<div className="group flex-grow text-slate-300 bg-black/40 p-8 relative">
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 flex items-center justify-center" title="Copy Prompt">
<iconify-icon height="16" icon="solar:copy-linear" width="16"></iconify-icon>
</button>
</div>
<pre className="font-mono text-xs text-gray-300 whitespace-pre-wrap leading-loose"><code>Gave prompt for different scenes</code></pre>
</div>
<div className="p-6 sm:p-8 border-t border-white/5 bg-black/60 flex flex-col mt-auto">
<div className="flex items-center gap-2 text-accent1 mb-4">
<iconify-icon height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
<span className="text-[11px] font-bold uppercase tracking-widest">Results</span>
</div>
<div className="break-all text-sm font-medium italic text-stone-400 font-mono border-white/10 border-l ml-2 pl-4">https://www.veed.io/view/5db1acb1-a2a3-4292-9f2d-a510d4f3e1fa?source=editor&amp;panel=share
https://www.veed.io/view/06395cd5-006f-4a9a-8c5f-b421962a5bbc?source=Homepage&amp;panel=share
https://veed.io/view/9e5b92fd-c71e-473e-b7e5-405ec7e942a9</div>
</div>
</div>

<div className="glass-panel rounded-2xl border border-white/10 overflow-hidden flex flex-col h-full">
<div className="p-8 border-b border-white/5">
<div className="flex items-start sm:items-center justify-between gap-4 mb-4 flex-col sm:flex-row">
<h3 className="text-lg font-medium text-slate-50 tracking-tight">Balancing lectures, assignments and notes is quite a difficult tasks</h3>
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400 font-mono whitespace-nowrap">GPT-4 Turbo</span>
</div>
<p className="text-sm font-light text-gray-400">Generate timetable of remaining and completed assignments and tracking notes with lectures </p>
</div>
<div className="group flex-grow bg-black/40 p-8 relative">
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 flex items-center justify-center" title="Copy Prompt">
<iconify-icon height="16" icon="solar:copy-linear" width="16"></iconify-icon>
</button>
</div>
<pre className="font-mono text-xs text-gray-300 whitespace-pre-wrap leading-loose"><code className="">Tick lists the things fastly and easily</code></pre>
</div>
<div className="p-6 sm:p-8 border-t border-white/5 bg-black/60 flex flex-col mt-auto">
<div className="flex items-center gap-2 text-accent1 mb-4">
<iconify-icon height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
<span className="text-[11px] font-bold uppercase tracking-widest">Results</span>
</div>
<div className="break-all text-sm font-medium italic text-stone-400 font-mono border-white/10 border-l ml-2 pl-4">
                            https://www.notion.so/School-HQ-8dd29bd9a57d43fba5c5ec7d3af85c0d
                        </div>
</div>
</div>

<div className="glass-panel rounded-2xl border border-white/10 overflow-hidden flex flex-col h-full">
<div className="p-8 border-b border-white/5">
<div className="flex items-start sm:items-center justify-between gap-4 mb-4 flex-col sm:flex-row">
<h3 className="text-lg font-medium text-white tracking-tight">Balancing meetings and availability is quite a difficult tasks</h3>
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400 font-mono whitespace-nowrap">GPT-4 Turbo</span>
</div>
<p className="text-sm font-light text-gray-400">Meetings and availability can be aligned </p>
</div>
<div className="group flex-grow bg-black/40 p-8 relative">
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 flex items-center justify-center" title="Copy Prompt">
<iconify-icon height="16" icon="solar:copy-linear" width="16"></iconify-icon>
</button>
</div>
<pre className="font-mono text-xs text-gray-300 whitespace-pre-wrap leading-loose"><code>Meetings and availability can be aligned in one platform</code></pre>
</div>
<div className="p-6 sm:p-8 border-t border-white/5 bg-black/60 flex flex-col mt-auto">
<div className="flex items-center gap-2 text-accent1 mb-4">
<iconify-icon height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
<span className="text-[11px] font-bold uppercase tracking-widest">Results</span>
</div>
<div className="break-all text-sm font-medium italic text-stone-400 font-mono border-white/10 border-l ml-2 pl-4">
                            https://calendly.com/d/cvpf-9q3-qnk/meeting
                        </div>
</div>
</div>

<div className="glass-panel rounded-2xl border border-white/10 overflow-hidden flex flex-col h-full">
<div className="p-8 border-b border-white/5">
<div className="flex items-start sm:items-center justify-between gap-4 mb-4 flex-col sm:flex-row">
<h3 className="text-lg font-medium text-white tracking-tight">Employees take hours to make a smooth presentation</h3>
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400 font-mono whitespace-nowrap">GPT-4 Turbo</span>
</div>
<p className="text-sm font-light text-gray-400">Generates smooth presentation in minutes</p>
</div>
<div className="group flex-grow bg-black/40 p-8 relative">
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 flex items-center justify-center" title="Copy Prompt">
<iconify-icon height="16" icon="solar:copy-linear" width="16"></iconify-icon>
</button>
</div>
<pre className="font-mono text-xs text-gray-300 whitespace-pre-wrap leading-loose"><code>Presentation are generated in minutes by just typing the topics</code></pre>
</div>
<div className="p-6 sm:p-8 border-t border-white/5 bg-black/60 flex flex-col mt-auto">
<div className="flex items-center gap-2 text-accent1 mb-4">
<iconify-icon height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
<span className="text-[11px] font-bold uppercase tracking-widest">Results</span>
</div>
<div className="break-all text-sm font-medium italic text-stone-400 font-mono border-white/10 border-l ml-2 pl-4">
                            https://app.presentations.ai/#/docs/edit/28606613
                        </div>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
