import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
500: '#10b981', // Emerald
600: '#059669',
glow: 'rgba(16, 185, 129, 0.5)'
}
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
      

<nav className="fixed top-0 inset-x-0 z-50 glass-panel border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-2 cursor-pointer group">
<div className="relative w-8 h-8 flex items-center justify-center bg-zinc-900 rounded border border-white/10 group-hover:border-brand-500/50 transition-colors duration-300">
<span className="iconify text-brand-500" data-icon="lucide:sparkles" data-strokeWidth="1.5"></span>
</div>
<span className="text-white font-semibold tracking-tight text-lg">NovaCanvas</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Product</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Workflows</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Enterprise</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Resources</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-white hover:text-brand-500 transition-colors" href="#">Log in</a>
<button className="bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                        Start free
                    </button>

<button className="md:hidden text-zinc-400 hover:text-white">
<span className="iconify w-6 h-6" data-icon="lucide:menu" data-strokeWidth="1.5"></span>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] hero-glow rounded-full blur-3xl opacity-50"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="flex flex-col gap-6 text-center lg:text-left">
<div className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-brand-500">
<span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
                        AI-powered design workflows
                    </div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                        Use all your <br className="hidden lg:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-zinc-500">AI models,</span> <br className="hidden lg:block"/>
                        together at last.
                    </h1>
<p className="text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                        Combine image, video, and design models on a single node-based canvas. Turn creative vision into reusable workflows without compromising quality.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
<button className="w-full sm:w-auto bg-white text-zinc-950 px-8 py-3 rounded-full font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                            Build your first workflow
                            <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</button>
<button className="w-full sm:w-auto px-8 py-3 rounded-full font-medium text-zinc-300 border border-zinc-800 hover:border-zinc-600 hover:text-white transition-colors flex items-center justify-center gap-2 group">
<div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors">
<span className="iconify w-3 h-3 ml-0.5" data-fill="currentColor" data-icon="lucide:play" data-strokeWidth="1.5"></span>
</div>
                            Watch demo
                        </button>
</div>
</div>

<div className="relative w-full aspect-[4/3] lg:aspect-square">
<div className="absolute inset-0 bg-zinc-900/40 rounded-2xl border border-white/5 backdrop-blur-sm overflow-hidden shadow-2xl">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#3f3f46 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: '0.1'}}></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none stroke-zinc-700" style={{zIndex: '0'}}>
<path className="opacity-50" d="M100,120 C180,120 180,250 260,250" fill="none" strokeWidth="2"></path>
<path className="opacity-50" d="M100,380 C180,380 180,250 260,250" fill="none" strokeWidth="2"></path>
<path className="opacity-80 node-line" d="M420,250 C480,250 480,250 540,250" fill="none" stroke="#10b981" strokeWidth="2"></path>
</svg>

<div className="absolute left-[40px] top-[80px] w-48 bg-zinc-900 rounded-xl border border-zinc-700 shadow-lg p-3 z-10 animate-float" style={{animationDelay: '0s'}}>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="iconify text-purple-400" data-icon="lucide:type" data-strokeWidth="1.5"></span>
<span className="text-xs font-medium text-white">Prompt</span>
</div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<div className="h-12 bg-zinc-800 rounded border border-zinc-700/50 p-2">
<div className="h-1.5 w-3/4 bg-zinc-600 rounded mb-1.5"></div>
<div className="h-1.5 w-1/2 bg-zinc-600 rounded"></div>
</div>
</div>

<div className="absolute left-[40px] top-[340px] w-48 bg-zinc-900 rounded-xl border border-zinc-700 shadow-lg p-3 z-10 animate-float" style={{animationDelay: '1s'}}>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="iconify text-blue-400" data-icon="lucide:image" data-strokeWidth="1.5"></span>
<span className="text-xs font-medium text-white">Ref Image</span>
</div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<div className="h-20 bg-zinc-800 rounded border border-zinc-700/50 flex items-center justify-center">
<span className="iconify text-zinc-600" data-icon="lucide:image" data-strokeWidth="1.5"></span>
</div>
</div>

<div className="absolute left-[260px] top-[180px] w-56 bg-zinc-800 rounded-xl border border-brand-500/50 shadow-[0_0_30px_rgba(16,185,129,0.15)] p-4 z-20">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="iconify text-brand-500" data-icon="lucide:cpu" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium text-white">Flux Pro 1.1</span>
</div>
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px] text-zinc-400">
<span>Guidance</span>
<span>7.5</span>
</div>
<div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden">
<div className="bg-brand-500 h-full w-2/3"></div>
</div>
<div className="flex justify-between text-[10px] text-zinc-400 pt-1">
<span>Steps</span>
<span>25</span>
</div>
<div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden">
<div className="bg-brand-500 h-full w-1/3"></div>
</div>
</div>
</div>

<div className="absolute left-[540px] top-[180px] w-48 bg-zinc-900 rounded-xl border border-zinc-700 shadow-lg p-2 z-10 animate-float" style={{animationDelay: '2s'}}>
<div className="bg-zinc-800 rounded-lg aspect-square border border-zinc-700/50 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-brand-900/50 opacity-50"></div>
<span className="relative text-xs text-white font-medium z-10">Generative Result</span>
<div className="absolute bottom-2 right-2 p-1 bg-black/50 rounded backdrop-blur">
<span className="iconify text-white w-3 h-3" data-icon="lucide:download" data-strokeWidth="1.5"></span>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-zinc-950/80 backdrop-blur border border-white/10 px-4 py-2 rounded-full flex items-center gap-3 shadow-xl z-30">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-white">Browser-based</span>
</div>
<div className="w-px h-3 bg-white/10"></div>
<span className="text-xs text-zinc-400">No GPU required</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-zinc-900/20 py-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<p className="text-sm text-zinc-500 font-medium mb-8 uppercase tracking-widest">Trusted by creative teams at</p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
<span className="iconify" data-icon="lucide:triangle" data-strokeWidth="2"></span> VORTEX
                </div>
<div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
<span className="iconify" data-icon="lucide:hexagon" data-strokeWidth="2"></span> ACME AI
                </div>
<div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
<span className="iconify" data-icon="lucide:circle-dashed" data-strokeWidth="2"></span> ORBITAL
                </div>
<div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
<span className="iconify" data-icon="lucide:box" data-strokeWidth="2"></span> CUBE
                </div>
<div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
<span className="iconify" data-icon="lucide:layers" data-strokeWidth="2"></span> STRATA
                </div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">Use every model, in one place.</h2>
<p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto font-light">
                Drop any model into your canvas—mix image, video, 3D, and text in a single workflow.
            </p>
<div className="flex flex-wrap justify-center gap-3">

<div className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 border border-white/10 hover:border-brand-500/50 hover:bg-zinc-800 transition-all cursor-default">
<span className="iconify text-green-400 group-hover:scale-110 transition-transform" data-icon="lucide:image" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">GPT Image</span>
</div>
<div className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 border border-white/10 hover:border-brand-500/50 hover:bg-zinc-800 transition-all cursor-default">
<span className="iconify text-purple-400 group-hover:scale-110 transition-transform" data-icon="lucide:wand-2" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Flux Pro 1.1 Ultra</span>
</div>
<div className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 border border-white/10 hover:border-brand-500/50 hover:bg-zinc-800 transition-all cursor-default">
<span className="iconify text-blue-400 group-hover:scale-110 transition-transform" data-icon="lucide:aperture" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">SD 3.5</span>
</div>
<div className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 border border-white/10 hover:border-brand-500/50 hover:bg-zinc-800 transition-all cursor-default">
<span className="iconify text-pink-400 group-hover:scale-110 transition-transform" data-icon="lucide:video" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Runway Gen-4</span>
</div>
<div className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 border border-white/10 hover:border-brand-500/50 hover:bg-zinc-800 transition-all cursor-default">
<span className="iconify text-yellow-400 group-hover:scale-110 transition-transform" data-icon="lucide:image-plus" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Imagen 3</span>
</div>
<div className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 border border-white/10 hover:border-brand-500/50 hover:bg-zinc-800 transition-all cursor-default">
<span className="iconify text-red-400 group-hover:scale-110 transition-transform" data-icon="lucide:film" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Veo 3</span>
</div>
<div className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 border border-white/10 hover:border-brand-500/50 hover:bg-zinc-800 transition-all cursor-default">
<span className="iconify text-orange-400 group-hover:scale-110 transition-transform" data-icon="lucide:pencil" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Recraft</span>
</div>
<div className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 border border-white/10 hover:border-brand-500/50 hover:bg-zinc-800 transition-all cursor-default">
<span className="iconify text-teal-400 group-hover:scale-110 transition-transform" data-icon="lucide:clapperboard" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Kling</span>
</div>
<div className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 border border-white/10 hover:border-brand-500/50 hover:bg-zinc-800 transition-all cursor-default">
<span className="iconify text-indigo-400 group-hover:scale-110 transition-transform" data-icon="lucide:box-select" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Luma Ray</span>
</div>
<div className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 border border-white/10 hover:border-brand-500/50 hover:bg-zinc-800 transition-all cursor-default">
<span className="iconify text-cyan-400 group-hover:scale-110 transition-transform" data-icon="lucide:sparkles" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Ideogram</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-y border-white/5">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">All the pro tools you rely on.</h2>
<p className="text-zinc-400 text-lg mt-4 font-light">In one seamless workflow.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">

<div className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-zinc-900 border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
<span className="iconify text-zinc-300 group-hover:text-white" data-icon="lucide:flip-horizontal" data-strokeWidth="1.5"></span>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-white">Invert</span>
</div>
<div className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-zinc-900 border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
<span className="iconify text-zinc-300 group-hover:text-white" data-icon="lucide:maximize" data-strokeWidth="1.5"></span>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-white">Outpaint</span>
</div>
<div className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-zinc-900 border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
<span className="iconify text-zinc-300 group-hover:text-white" data-icon="lucide:crop" data-strokeWidth="1.5"></span>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-white">Crop</span>
</div>
<div className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-zinc-900 border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
<span className="iconify text-zinc-300 group-hover:text-white" data-icon="lucide:brush" data-strokeWidth="1.5"></span>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-white">Inpaint</span>
</div>
<div className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-zinc-900 border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
<span className="iconify text-zinc-300 group-hover:text-white" data-icon="lucide:scissors" data-strokeWidth="1.5"></span>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-white">Mask</span>
</div>
<div className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-zinc-900 border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
<span className="iconify text-zinc-300 group-hover:text-white" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5"></span>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-white">Upscale</span>
</div>
<div className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-zinc-900 border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
<span className="iconify text-zinc-300 group-hover:text-white" data-icon="lucide:layers" data-strokeWidth="1.5"></span>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-white">Z-Depth</span>
</div>
<div className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-zinc-900 border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
<span className="iconify text-zinc-300 group-hover:text-white" data-icon="lucide:eye" data-strokeWidth="1.5"></span>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-white">Describe</span>
</div>
<div className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-zinc-900 border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
<span className="iconify text-zinc-300 group-hover:text-white" data-icon="lucide:palette" data-strokeWidth="1.5"></span>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-white">Channels</span>
</div>
<div className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-zinc-900 border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
<span className="iconify text-zinc-300 group-hover:text-white" data-icon="lucide:sun" data-strokeWidth="1.5"></span>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-white">Relight</span>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight mb-6">Control every pixel of the outcome.</h2>
<p className="text-lg text-zinc-400 mb-8 font-light leading-relaxed">
                    Layers, type, and blends—everything you expect from pro-grade compositing, backed by AI. Your creativity stays in control, while the canvas automates the busywork.
                </p>
<div className="flex flex-col gap-4">
<div className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-brand-500">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="2"></span>
</div>
<div>
<h4 className="text-white font-medium">Non-destructive editing</h4>
<p className="text-sm text-zinc-500">Go back to any node at any time.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-brand-500">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="2"></span>
</div>
<div>
<h4 className="text-white font-medium">Version history</h4>
<p className="text-sm text-zinc-500">Compare iterations side-by-side.</p>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900 rounded-xl border border-white/10 p-4 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px]"></div>

<div className="relative z-10 flex gap-4 h-80">

<div className="flex-1 bg-black rounded-lg border border-white/5 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-brand-900/40"></div>
<span className="iconify text-white/20 w-12 h-12" data-icon="lucide:image" data-strokeWidth="1.5"></span>

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-zinc-900/90 backdrop-blur rounded-full px-3 py-1.5 flex gap-3 border border-white/10">
<span className="iconify text-zinc-400 hover:text-white cursor-pointer" data-icon="lucide:zoom-in" data-strokeWidth="1.5"></span>
<span className="iconify text-zinc-400 hover:text-white cursor-pointer" data-icon="lucide:move" data-strokeWidth="1.5"></span>
<span className="iconify text-zinc-400 hover:text-white cursor-pointer" data-icon="lucide:hand" data-strokeWidth="1.5"></span>
</div>
</div>

<div className="w-48 flex-shrink-0 bg-zinc-950 rounded-lg border border-white/5 flex flex-col">
<div className="p-3 border-b border-white/5 flex justify-between items-center">
<span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Layers</span>
<span className="iconify text-zinc-500" data-icon="lucide:plus" data-strokeWidth="1.5"></span>
</div>
<div className="flex-1 p-2 space-y-1 overflow-hidden">

<div className="flex items-center gap-2 p-2 bg-zinc-800 rounded border border-white/5">
<span className="iconify text-zinc-400" data-icon="lucide:eye" data-strokeWidth="1.5"></span>
<span className="text-xs text-white">Composite</span>
</div>

<div className="flex items-center gap-2 p-2 hover:bg-zinc-900 rounded transition-colors">
<span className="iconify text-zinc-600" data-icon="lucide:eye" data-strokeWidth="1.5"></span>
<span className="text-xs text-zinc-400">Color Grade</span>
</div>

<div className="flex items-center gap-2 p-2 hover:bg-zinc-900 rounded transition-colors">
<span className="iconify text-zinc-600" data-icon="lucide:eye" data-strokeWidth="1.5"></span>
<span className="text-xs text-zinc-400">Typography</span>
</div>

<div className="flex items-center gap-2 p-2 hover:bg-zinc-900 rounded transition-colors">
<span className="iconify text-zinc-400" data-icon="lucide:eye" data-strokeWidth="1.5"></span>
<span className="text-xs text-zinc-400">Bg: Gen-4</span>
</div>
</div>

<div className="p-3 border-t border-white/5">
<div className="flex justify-between items-center bg-zinc-900 px-2 py-1 rounded border border-white/5">
<span className="text-[10px] text-zinc-400">Normal</span>
<span className="iconify text-zinc-500 w-3 h-3" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-zinc-900 to-zinc-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl bg-zinc-900 border border-white/5 p-8 lg:p-12 overflow-hidden relative">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-50"></div>
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<span className="text-brand-500 font-medium text-sm tracking-wide uppercase mb-2 block">From workflow</span>
<h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">From workflow to one-click apps.</h2>
<p className="text-zinc-400 text-lg mb-8 font-light">
                            Convert any canvas into an app-like interface. Auto-generate simplified UIs so your team can run complex workflows without touching the node graph.
                        </p>
<button className="bg-white text-black hover:bg-zinc-200 px-6 py-2.5 rounded-full text-sm font-medium transition-colors inline-flex items-center gap-2">
                            Explore App Mode
                            <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</button>
</div>
<div className="relative group">

<div className="absolute inset-0 bg-zinc-950/50 backdrop-blur-sm rounded-xl z-0 scale-95 opacity-50 translate-y-4"></div>

<div className="relative z-10 bg-zinc-950 rounded-xl border border-white/10 shadow-2xl overflow-hidden transform transition-transform duration-500 hover:-translate-y-2">
<div className="bg-zinc-900 px-4 py-3 border-b border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-brand-500"></span>
<span className="text-sm font-medium text-white">Product Photo Gen</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded">Team-ready</span>
<span className="iconify text-zinc-400" data-icon="lucide:share-2" data-strokeWidth="1.5"></span>
</div>
</div>
<div className="p-6 space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Product Name</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-500/50" type="text" value="Neon Smart Watch"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Environment</label>
<select className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-500/50 appearance-none">
<option>Cyberpunk City</option>
<option>Studio Minimal</option>
<option>Nature Outdoor</option>
</select>
</div>
<button className="w-full bg-brand-600 hover:bg-brand-500 text-white font-medium py-2 rounded-lg transition-colors shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                    Run Generation
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">Explore ready-made workflows.</h2>
<p className="text-zinc-400 text-lg font-light max-w-2xl mx-auto">
                From multi-layer compositing to matte manipulation, remix and fork workflows built by the community.
            </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="aspect-video bg-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-black"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:scale-105 transition-transform duration-500">
<span className="iconify text-indigo-400 w-16 h-16" data-icon="lucide:video" data-strokeWidth="1"></span>
</div>

<div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">Open workflow</span>
</div>
</div>
<div className="p-5">
<h3 className="text-white font-medium mb-1">Image to Video</h3>
<p className="text-sm text-zinc-500 mb-4">Transform static assets into motion with Gen-4 consistency.</p>
<div className="flex gap-2">
<span className="px-2 py-1 rounded text-[10px] bg-zinc-800 text-zinc-400 border border-zinc-700">Motion</span>
<span className="px-2 py-1 rounded text-[10px] bg-zinc-800 text-zinc-400 border border-zinc-700">Ads</span>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="aspect-video bg-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-black"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:scale-105 transition-transform duration-500">
<span className="iconify text-emerald-400 w-16 h-16" data-icon="lucide:box" data-strokeWidth="1"></span>
</div>
<div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">Open workflow</span>
</div>
</div>
<div className="p-5">
<h3 className="text-white font-medium mb-1">Product Mockup 3D</h3>
<p className="text-sm text-zinc-500 mb-4">Generate photorealistic environments for 3D packaging.</p>
<div className="flex gap-2">
<span className="px-2 py-1 rounded text-[10px] bg-zinc-800 text-zinc-400 border border-zinc-700">3D</span>
<span className="px-2 py-1 rounded text-[10px] bg-zinc-800 text-zinc-400 border border-zinc-700">Commercial</span>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="aspect-video bg-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-pink-900/40 to-black"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:scale-105 transition-transform duration-500">
<span className="iconify text-pink-400 w-16 h-16" data-icon="lucide:users" data-strokeWidth="1"></span>
</div>
<div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">Open workflow</span>
</div>
</div>
<div className="p-5">
<h3 className="text-white font-medium mb-1">UGC Ad Remix</h3>
<p className="text-sm text-zinc-500 mb-4">Batch process user content with consistent branding overlays.</p>
<div className="flex gap-2">
<span className="px-2 py-1 rounded text-[10px] bg-zinc-800 text-zinc-400 border border-zinc-700">Social</span>
<span className="px-2 py-1 rounded text-[10px] bg-zinc-800 text-zinc-400 border border-zinc-700">Automation</span>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="iconify text-brand-500" data-icon="lucide:sparkles" data-strokeWidth="1.5"></span>
<span className="text-white font-semibold tracking-tight">NovaCanvas</span>
</div>
<p className="text-zinc-500 text-sm max-w-xs">
                        The unified interface for the next generation of generative AI tools.
                    </p>
</div>
<div className="flex flex-wrap gap-8 text-sm text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Product</a>
<a className="hover:text-white transition-colors" href="#">Enterprise</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Docs</a>
<a className="hover:text-white transition-colors" href="#">Community</a>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
<p>© 2024 NovaCanvas Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Twitter</a>
<a className="hover:text-zinc-400 transition-colors" href="#">GitHub</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
