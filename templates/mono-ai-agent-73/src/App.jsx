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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};

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
      

<div className="fixed inset-0 z-[-2] bg-[#030303]">
<div className="absolute top-0 left-0 right-0 h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#030303]/50 to-[#030303]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="text-sm font-medium tracking-tighter text-white">MONO AI</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#agents">Agents</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#integration">Integration</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#docs">Docs</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="https://github.com" target="_blank">
<span className="iconify" data-height="16" data-icon="lucide:github" data-width="16"></span>
<span>Star</span>
</a>
<a className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#">
                    Deploy
                </a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="hero-perspective-container">
<div className="hero-grid-plane-2"></div>
<div className="hero-grid-plane"></div>

<div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-black via-black/80 to-transparent"></div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-900/10 rounded-[100%] blur-[120px] -z-10 opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-float" style={{animationDuration: '4s'}}>
<span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
<span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">Beta v1.1</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-6">
                Orchestrate your <br className="hidden md:block"/>
<span className="text-gradient-blue relative inline-block">
                    Hybrid Workforce
                    <svg className="absolute -bottom-2 left-0 w-full h-2 text-blue-500/50" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Describe features in natural language. Mono automatically delegates execution to autonomous coding agents or human engineers based on complexity.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-12 px-8 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
<span className="iconify" data-height="18" data-icon="lucide:sparkles" data-width="18"></span>
                    Create Task
                </button>
<button className="h-12 px-8 rounded-full border border-neutral-800 bg-neutral-900/50 text-white text-sm font-medium hover:bg-neutral-800 hover:border-neutral-700 transition-all backdrop-blur-sm flex items-center gap-2">
<span className="iconify" data-height="18" data-icon="lucide:play-circle" data-width="18"></span>
<span>Watch Demo</span>
</button>
</div>

<div className="relative max-w-6xl mx-auto perspective-1000">
<div className="relative bg-[#0a0a0a] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col group animate-float" style={{perspective: '1000px', transformStyle: 'preserve-3d', minHeight: '600px'}}>

<div className="h-14 border-b border-white/5 bg-white/[0.02] px-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="iconify text-neutral-500" data-icon="lucide:layout-kanban" data-width="18"></span>
<span className="text-sm font-medium text-neutral-300">Product Roadmap / Sprint 32</span>
<span className="px-2 py-0.5 rounded text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20">Active</span>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] border border-[#0a0a0a]">AI</div>
<div className="w-6 h-6 rounded-full bg-neutral-700 flex items-center justify-center text-[10px] border border-[#0a0a0a]">JD</div>
<div className="w-6 h-6 rounded-full bg-neutral-700 flex items-center justify-center text-[10px] border border-[#0a0a0a]">TS</div>
</div>
<div className="w-px h-4 bg-white/10"></div>
<span className="iconify text-neutral-500" data-icon="lucide:settings-2" data-width="16"></span>
</div>
</div>

<div className="p-6 border-b border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
<div className="relative">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<span className="iconify text-blue-400 animate-pulse" data-icon="lucide:sparkles" data-width="16"></span>
</div>
<input className="w-full bg-[#111] border border-white/10 rounded-lg py-3 pl-12 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="Describe a new feature or task (e.g., 'Update the pricing page to include the Enterprise tier')..." type="text"/>
<div className="absolute inset-y-0 right-4 flex items-center">
<span className="text-[10px] text-neutral-600 border border-white/5 px-2 py-1 rounded">Enter to triage</span>
</div>
</div>
</div>

<div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto bg-[#0a0a0a]">

<div className="flex flex-col gap-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-neutral-500"></span>
<span className="text-xs font-medium text-neutral-400">Incoming Requests</span>
</div>
<span className="text-xs text-neutral-600">1</span>
</div>

<div className="glass-card p-4 rounded-lg relative overflow-hidden group/card cursor-pointer">
<div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
<div className="flex items-start justify-between mb-2">
<span className="text-[10px] text-neutral-500 font-mono">REQ-204</span>
<span className="iconify text-neutral-600" data-icon="lucide:more-horizontal" data-width="14"></span>
</div>
<p className="text-sm font-medium text-neutral-200 mb-3">"Implement Dark Mode toggle in settings"</p>
<div className="flex items-center gap-2 mt-2 p-2 bg-blue-500/5 rounded border border-blue-500/10">
<span className="iconify text-blue-400 animate-spin" data-icon="lucide:loader-2" data-width="12"></span>
<span className="text-[10px] text-blue-300">Analyzing complexity...</span>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]"></span>
<span className="text-xs font-medium text-purple-200">Autonomous Agents</span>
</div>
<span className="text-xs text-neutral-600">3</span>
</div>

<div className="glass-card p-4 rounded-lg cursor-pointer border-l-2 border-l-purple-500">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2">
<div className="bg-purple-500/20 text-purple-300 text-[10px] px-1.5 py-0.5 rounded flex items-center gap-1">
<span className="iconify" data-icon="lucide:bot" data-width="10"></span>
<span>High Confidence (98%)</span>
</div>
</div>
</div>
<h4 className="text-sm font-medium text-white mb-1">Refactor API Middleware</h4>
<p className="text-xs text-neutral-500 mb-3 line-clamp-2">Migrate the authentication middleware from Express to Fastify adapters.</p>
<div className="flex items-center justify-between pt-2 border-t border-white/5">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-[10px] text-neutral-400">Writing tests...</span>
</div>
<span className="iconify text-purple-400" data-icon="lucide:code-2" data-width="14"></span>
</div>
</div>

<div className="glass-card p-4 rounded-lg cursor-pointer opacity-80">
<div className="flex items-start justify-between mb-2">
<div className="bg-purple-500/20 text-purple-300 text-[10px] px-1.5 py-0.5 rounded flex items-center gap-1">
<span className="iconify" data-icon="lucide:bot" data-width="10"></span>
<span>Med Confidence (85%)</span>
</div>
</div>
<h4 className="text-sm font-medium text-white mb-1">Fix CSS z-index issue</h4>
<p className="text-xs text-neutral-500 mb-3">Dropdown menu overlapping with hero section.</p>
<div className="flex items-center justify-between pt-2 border-t border-white/5">
<span className="text-[10px] text-neutral-500">Queued</span>
<span className="iconify text-neutral-600" data-icon="lucide:file-code" data-width="14"></span>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-orange-500"></span>
<span className="text-xs font-medium text-orange-200">Human Required</span>
</div>
<span className="text-xs text-neutral-600">1</span>
</div>

<div className="glass-card p-4 rounded-lg cursor-pointer border-l-2 border-l-orange-500">
<div className="flex items-start justify-between mb-2">
<div className="bg-orange-500/20 text-orange-300 text-[10px] px-1.5 py-0.5 rounded flex items-center gap-1">
<span className="iconify" data-icon="lucide:user" data-width="10"></span>
<span>Creative Task</span>
</div>
<div className="w-5 h-5 rounded-full bg-neutral-700 border border-neutral-600 flex items-center justify-center text-[8px]">JD</div>
</div>
<h4 className="text-sm font-medium text-white mb-1">Design New Landing Page</h4>
<p className="text-xs text-neutral-500 mb-3">Requires updated brand aesthetics and 3D assets.</p>
<div className="flex items-center gap-2 p-2 bg-neutral-900 rounded text-[10px] text-neutral-400">
<span className="iconify text-orange-400" data-icon="lucide:alert-circle" data-width="12"></span>
                                    AI Note: "Subjective design requirements detected."
                                </div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-blue-500/10 to-transparent blur-3xl -z-10 opacity-40"></div>
</div>
</div>
</main>

<section className="py-24 border-t border-white/5 relative z-10 bg-[#030303]" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-gradient">Engineered for Autonomy</h2>
<p className="text-neutral-400 font-light">
                    Everything you need to manage a fleet of coding agents. From token usage tracking to sandbox execution environments.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass glass-hover rounded-2xl p-8 relative overflow-hidden group transition-all duration-300">
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6">
<span className="iconify text-white" data-icon="lucide:network" data-width="24"></span>
</div>
<h3 className="text-xl font-medium mb-2">Neural Orchestration</h3>
<p className="text-neutral-400 text-sm font-light max-w-md">
                            Visualize agent communication in real-time. Our graph-based view lets you see how agents delegate tasks, share context, and resolve conflicts automatically.
                        </p>
</div>

<div className="absolute right-0 top-0 w-1/2 h-full opacity-30 md:opacity-50">
<svg className="w-full h-full" viewbox="0 0 200 200">
<defs>
<pattern height="20" id="grid" patternunits="userSpaceOnUse" width="20">
<path className="text-white/20" d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
<circle className="text-blue-500/50" cx="100" cy="100" fill="none" r="40" stroke="currentColor" strokeWidth="1"></circle>
<circle className="text-purple-500/50" cx="150" cy="50" fill="none" r="20" stroke="currentColor" strokeWidth="1"></circle>
<line className="text-white/20" stroke="currentColor" strokeWidth="1" x1="100" x2="150" y1="100" y2="50"></line>
</svg>
</div>
</div>

<div className="glass glass-hover rounded-2xl p-8 relative overflow-hidden group transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6">
<span className="iconify text-white" data-icon="lucide:box" data-width="24"></span>
</div>
<h3 className="text-xl font-medium mb-2">Sandboxed Runtime</h3>
<p className="text-neutral-400 text-sm font-light mb-6">
                        Every agent runs in an isolated Docker container. Safe, secure, and easily reproducible.
                    </p>
<div className="mt-auto border border-dashed border-white/10 rounded-lg p-3 bg-black/20">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-[10px] text-neutral-500 uppercase font-mono">Container ID: 8f3a21</span>
</div>
<div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-3/4"></div>
</div>
</div>
</div>

<div className="glass glass-hover rounded-2xl p-8 transition-all duration-300">
<span className="iconify text-blue-400 mb-4" data-icon="lucide:zap" data-width="24"></span>
<h3 className="text-lg font-medium mb-2">LLM Agnostic</h3>
<p className="text-neutral-400 text-xs font-light">
                        Switch between GPT-4, Claude 3, and Llama 3 instantly via config.
                    </p>
</div>

<div className="glass glass-hover rounded-2xl p-8 transition-all duration-300">
<span className="iconify text-purple-400 mb-4" data-icon="lucide:git-pull-request" data-width="24"></span>
<h3 className="text-lg font-medium mb-2">Auto-PR</h3>
<p className="text-neutral-400 text-xs font-light">
                        Agents open Pull Requests with detailed context and diff explanations.
                    </p>
</div>

<div className="md:col-span-1 glass glass-hover rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between">
<div>
<span className="iconify text-orange-400 mb-4" data-icon="lucide:activity" data-width="24"></span>
<h3 className="text-lg font-medium mb-2">Cost Observability</h3>
<p className="text-neutral-400 text-xs font-light">
                            Real-time token usage analytics per agent.
                        </p>
</div>
<div className="flex items-end gap-1 h-12 mt-4 opacity-50">
<div className="w-1/5 bg-white/20 h-[40%] rounded-t-sm"></div>
<div className="w-1/5 bg-white/40 h-[70%] rounded-t-sm"></div>
<div className="w-1/5 bg-blue-500 h-[100%] rounded-t-sm shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
<div className="w-1/5 bg-white/30 h-[60%] rounded-t-sm"></div>
<div className="w-1/5 bg-white/20 h-[30%] rounded-t-sm"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 z-10 relative" id="integration">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 space-y-8">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">Drop-in Integration</h2>
<p className="text-neutral-400 font-light leading-relaxed">
                    Mono AI sits right alongside your `package.json`. Define your agent swarm in a single configuration file. No complex infrastructure to manage.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center">
<span className="iconify text-blue-400" data-icon="lucide:check" data-width="14"></span>
</div>
<span className="text-sm text-neutral-300">YAML or JSON configuration</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center">
<span className="iconify text-blue-400" data-icon="lucide:check" data-width="14"></span>
</div>
<span className="text-sm text-neutral-300">Environment variable security</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center">
<span className="iconify text-blue-400" data-icon="lucide:check" data-width="14"></span>
</div>
<span className="text-sm text-neutral-300">Local or Remote execution</span>
</li>
</ul>
</div>
<div className="flex-1 w-full">
<div className="rounded-xl bg-[#0F0F0F] border border-white/10 p-4 shadow-2xl relative group">
<div className="absolute -top-3 left-4 bg-[#0F0F0F] px-3 py-1 text-[10px] text-neutral-400 border border-white/10 border-b-0 rounded-t-md font-mono">
                        mono.config.yaml
                    </div>
<pre className="font-mono text-xs md:text-sm leading-relaxed overflow-x-auto"><span className="text-purple-400">project_name:</span> <span className="text-green-400">"SuperApp"</span>
<span className="text-purple-400">agents:</span>
  <span className="text-blue-400">- name:</span> <span className="text-green-400">"Frontend_Dev"</span>
    <span className="text-purple-400">model:</span> <span className="text-yellow-400">"claude-3-opus"</span>
    <span className="text-purple-400">tools:</span> 
      <span className="text-neutral-500">-</span> <span className="text-green-400">"react_scanner"</span>
      <span className="text-neutral-500">-</span> <span className="text-green-400">"tailwind_linter"</span>
    <span className="text-purple-400">permissions:</span>
      <span className="text-neutral-500">-</span> <span className="text-green-400">"read:src"</span>
      <span className="text-neutral-500">-</span> <span className="text-green-400">"write:src/components"</span>

  <span className="text-blue-400">- name:</span> <span className="text-green-400">"QA_Bot"</span>
    <span className="text-purple-400">model:</span> <span className="text-yellow-400">"gpt-4-turbo"</span>
    <span className="text-purple-400">trigger:</span> <span className="text-green-400">"on_pr_open"</span>
</pre>
<button className="absolute top-4 right-4 p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors">
<span className="iconify text-neutral-400" data-icon="lucide:copy" data-width="14"></span>
</button>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 text-center relative z-10 bg-[#030303]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-sm text-neutral-500 mb-8 font-medium">TRUSTED BY ENGINEERS AT</p>
<div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:triangle" data-width="24"></span>
<span className="font-bold tracking-tighter">VERCEL</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:hexagon" data-width="24"></span>
<span className="font-bold tracking-tighter">LINEAR</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:box" data-width="24"></span>
<span className="font-bold tracking-tighter">RAYCAST</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:circle" data-width="24"></span>
<span className="font-bold tracking-tighter">OPENAI</span>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
<span className="text-sm font-semibold tracking-tight text-white">MONO AI</span>
</div>
<div className="flex items-center gap-6 text-xs text-neutral-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
<div className="text-[10px] text-neutral-600">
                © 2024 Mono AI Open Source.
            </div>
</div>
</footer>

    </>
  );
}
