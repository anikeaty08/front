import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
DEFAULT: '#FF8FAB',
glow: '#ff8fab80',
dim: '#853b4d'
},
dark: {
bg: '#030303',
surface: '#0A0A0A',
border: '#1F1F1F'
}
},
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
},
animation: {
'float': 'float 8s ease-in-out infinite',
'blob': 'blob 20s infinite',
'shimmer': 'shimmer 2s linear infinite',
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
shimmer: {
from: { backgroundPosition: '0 0' },
to: { backgroundPosition: '-200% 0' },
},
fadeInUp: {
'0%': { opacity: 0, transform: 'translateY(20px)' },
'100%': { opacity: 1, transform: 'translateY(0)' },
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

<div className="absolute inset-0 bg-grid opacity-20"></div>

<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] animate-blob mix-blend-screen"></div>
<div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"></div>
<div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white text-sm font-semibold tracking-tight flex items-center gap-2" href="#">
<div className="w-4 h-4 rounded-sm bg-gradient-to-tr from-brand to-purple-500"></div>
                    snipdocs
                </a>
<div className="hidden md:flex items-center gap-6 text-[13px] font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Product</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Enterprise</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-[13px] text-neutral-400 hover:text-white transition-colors font-medium hidden sm:block" href="#">Sign in</a>
<div className="gradient-border-mask p-[1px]">
<a className="block bg-neutral-900 text-white px-3 py-1.5 text-[13px] font-medium rounded-full hover:bg-neutral-800 transition-colors" href="#">
                        Get Started
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-36 px-6 z-10">
<div className="max-w-5xl mx-auto text-center perspective-container">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
</span>
<span className="text-[11px] text-neutral-300 font-medium tracking-wide uppercase">New: AI Analysis v2.0</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.04em] mb-8 leading-[0.95] opacity-0 animate-[fadeInUp_0.8s_0.2s_ease-out_forwards] hero-title">
                Documentation <br/>
<span className="bg-gradient-to-r from-brand via-purple-300 to-white bg-clip-text text-transparent">reimagined.</span>
</h1>

<p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fadeInUp_0.8s_0.4s_ease-out_forwards] tracking-tight">
                Connect your codebase. Generate beautiful, interactive documentation that syncs automatically. No maintenance required.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[fadeInUp_0.8s_0.6s_ease-out_forwards]">
<button className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-white px-8 py-3.5 transition-all hover:bg-neutral-200">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1s_infinite]"></div>
<span className="relative flex items-center justify-center gap-2 text-sm font-semibold text-black tracking-tight">
                        Start Building
                        <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</span>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-medium text-neutral-400 hover:text-white border border-white/5 bg-white/5 hover:bg-white/10 transition-all tracking-tight">
                    Read the manifesto
                </button>
</div>

<div className="mt-24 group opacity-0 animate-[fadeInUp_1s_0.8s_ease-out_forwards]">
<div className="transform-3d relative rounded-xl border border-white/10 bg-[#050505] shadow-2xl overflow-hidden mx-auto max-w-4xl">

<div className="absolute -inset-1 bg-gradient-to-r from-brand/20 to-purple-500/20 blur-xl opacity-20"></div>

<div className="relative bg-[#0A0A0A] rounded-xl overflow-hidden">

<div className="h-11 border-b border-white/5 flex items-center px-4 justify-between bg-[#0A0A0A]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#1F1F1F]"></div>
<div className="w-3 h-3 rounded-full bg-[#1F1F1F]"></div>
<div className="w-3 h-3 rounded-full bg-[#1F1F1F]"></div>
</div>
<div className="flex items-center gap-2 px-3 py-1 rounded bg-[#111] border border-white/5 text-[10px] font-mono text-neutral-500">
<iconify-icon icon="lucide:lock" width="10"></iconify-icon>
                                docs.snipdocs.com
                            </div>
<div className="w-16"></div> 
</div>

<div className="grid grid-cols-12 h-[450px]">

<div className="hidden md:block col-span-3 border-r border-white/5 bg-[#080808] p-4">
<div className="space-y-6">
<div>
<div className="text-[11px] font-semibold text-white uppercase tracking-wider mb-3 opacity-50">Overview</div>
<div className="space-y-1">
<div className="flex items-center gap-2 text-[13px] text-brand bg-brand/5 px-2 py-1.5 rounded-md border border-brand/10">
<iconify-icon icon="lucide:zap" width="14"></iconify-icon>
                                                Introduction
                                            </div>
<div className="flex items-center gap-2 text-[13px] text-neutral-500 px-2 py-1.5 hover:text-neutral-300 cursor-pointer transition-colors">
<iconify-icon icon="lucide:key" width="14"></iconify-icon>
                                                Authentication
                                            </div>
</div>
</div>
<div>
<div className="text-[11px] font-semibold text-white uppercase tracking-wider mb-3 opacity-50">API Reference</div>
<div className="space-y-1 pl-2 border-l border-white/5">
<div className="text-[13px] text-neutral-500 px-2 py-1 hover:text-neutral-300 cursor-pointer">/v1/projects</div>
<div className="text-[13px] text-neutral-500 px-2 py-1 hover:text-neutral-300 cursor-pointer">/v1/deployments</div>
<div className="text-[13px] text-neutral-500 px-2 py-1 hover:text-neutral-300 cursor-pointer">/v1/webhooks</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-9 bg-[#0A0A0A] p-8 relative">

<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand/5 blur-[80px] rounded-full pointer-events-none"></div>
<div className="flex items-center gap-3 mb-6">
<h2 className="text-2xl font-semibold text-white tracking-tight">Introduction</h2>
<span className="px-2 py-0.5 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-[10px] font-medium tracking-wide">STABLE</span>
</div>
<p className="text-sm text-neutral-400 leading-7 max-w-lg mb-8">
                                    Snipdocs allows you to create <span className="text-white font-medium">live documentation</span> directly from your codebase. It parses your Markdown, JSDoc, and comments to generate a static site.
                                </p>

<div className="rounded-lg border border-white/10 bg-[#050505] overflow-hidden shadow-xl">
<div className="flex items-center justify-between px-4 py-2 bg-[#0F0F0F] border-b border-white/5">
<span className="text-[11px] text-neutral-500 font-mono">config.js</span>
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-500/20"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
<div className="w-2 h-2 rounded-full bg-green-500/20"></div>
</div>
</div>
<div className="p-4 font-mono text-[13px] leading-6 overflow-x-auto">
<div className="flex"><span className="text-neutral-600 w-6 select-none">1</span><span className="text-purple-400">import</span> <span className="text-white">{</span> <span className="text-blue-400">Snip</span> <span className="text-white">}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@snipdocs/core'</span>;</div>
<div className="flex"><span className="text-neutral-600 w-6 select-none">2</span></div>
<div className="flex"><span className="text-neutral-600 w-6 select-none">3</span><span className="text-neutral-500">// Initialize the documentation engine</span></div>
<div className="flex"><span className="text-neutral-600 w-6 select-none">4</span><span className="text-purple-400">const</span> <span className="text-blue-400">docs</span> <span className="text-white">=</span> <span className="text-purple-400">new</span> <span className="text-yellow-300">Snip</span><span className="text-white">({</span></div>
<div className="flex"><span className="text-neutral-600 w-6 select-none">5</span> <span className="text-white pl-4">apiKey:</span> <span className="text-green-400">'sk_live_51...'</span>,</div>
<div className="flex"><span className="text-neutral-600 w-6 select-none">6</span> <span className="text-white pl-4">theme:</span> <span className="text-green-400">'dark'</span>,</div>
<div className="flex"><span className="text-neutral-600 w-6 select-none">7</span> <span className="text-white pl-4">sync:</span> <span className="text-purple-400">true</span></div>
<div className="flex"><span className="text-neutral-600 w-6 select-none">8</span><span className="text-white">});</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-neutral-600 tracking-[0.2em] uppercase mb-10">Powering next-gen engineering teams</p>
<div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-40 grayscale mix-blend-screen">

<div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white"><span className="w-6 h-6 border-2 border-white rounded-full"></span>Vertex</div>
<div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white"><span className="w-6 h-6 bg-white transform rotate-45"></span>NEXUS</div>
<div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white"><span className="w-6 h-6 border-b-4 border-l-4 border-white rounded-bl-lg"></span>Flux</div>
<div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white"><div className="flex gap-0.5"><div className="w-2 h-6 bg-white"></div><div className="w-2 h-6 bg-white opacity-50"></div></div>STRATA</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto relative">
<div className="absolute inset-0 bg-brand/5 blur-[200px] pointer-events-none"></div>
<div className="mb-20 text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-[-0.03em] mb-6">Designed for flow state.</h2>
<p className="text-neutral-400 text-lg">Every interaction is optimized for speed and clarity. No clutter, just code.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 md:h-[600px]">

<div className="md:col-span-2 row-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-brand/20 text-white">
<iconify-icon icon="lucide:zap" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Real-time Synchronization</h3>
<p className="text-neutral-400 max-w-md mb-8">
                        Changes to your markdown files are pushed instantly via websockets. See updates across all devices in milliseconds.
                    </p>

<div className="mt-auto relative rounded-t-xl border-t border-l border-r border-white/10 bg-[#050505] p-4 shadow-2xl translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs text-neutral-400 font-mono">Syncing...</span>
</div>
<span className="text-xs text-neutral-600 font-mono">12ms latency</span>
</div>
<div className="space-y-2">
<div className="h-2 w-3/4 bg-white/10 rounded-full animate-pulse"></div>
<div className="h-2 w-1/2 bg-white/10 rounded-full animate-pulse delay-75"></div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 relative overflow-hidden group hover:border-brand/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 text-white border border-white/5">
<iconify-icon icon="lucide:search" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">AI Search</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                    Semantic vector search that understands intent, not just keywords.
                </p>
</div>

<div className="glass-panel rounded-3xl p-8 relative overflow-hidden group hover:border-brand/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 text-white border border-white/5">
<iconify-icon icon="lucide:shield" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Granular Access</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                    JWT-based auth integration. Control who sees what down to the line of code.
                </p>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1">
<div className="inline-block text-brand text-xs font-semibold tracking-wider uppercase mb-4">Integrations</div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-[-0.03em] mb-6">Works where you work.</h2>
<p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                    Don't break your context. Snipdocs brings documentation directly into your IDE, Slack channels, and PR workflows.
                </p>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded bg-[#4A154B] flex items-center justify-center text-white shrink-0">
<iconify-icon icon="lucide:slack" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Slack Bot</h4>
<p className="text-xs text-neutral-500 group-hover:text-neutral-400">Auto-respond to technical questions in channels.</p>
</div>
<iconify-icon className="ml-auto text-neutral-600 group-hover:text-white transition-colors" icon="lucide:arrow-right"></iconify-icon>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded bg-[#007ACC] flex items-center justify-center text-white shrink-0">
<iconify-icon icon="lucide:code" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">VS Code Extension</h4>
<p className="text-xs text-neutral-500 group-hover:text-neutral-400">View docs on hover without leaving the editor.</p>
</div>
<iconify-icon className="ml-auto text-neutral-600 group-hover:text-white transition-colors" icon="lucide:arrow-right"></iconify-icon>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative">

<div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-blue-500/20 rounded-full blur-[80px]"></div>
<div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 shadow-2xl">

<div className="flex items-start gap-4 mb-6">
<div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center text-white text-xs font-bold">JD</div>
<div>
<div className="flex items-baseline gap-2">
<span className="text-white text-sm font-bold">John Doe</span>
<span className="text-[10px] text-neutral-500">10:42 AM</span>
</div>
<p className="text-sm text-neutral-300 mt-1">
                                @snipdocs how do I paginate the users endpoint?
                            </p>
</div>
</div>
<div className="flex items-start gap-4 pl-12">
<div className="w-8 h-8 rounded bg-gradient-to-br from-brand to-purple-500 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="lucide:bot" width="16"></iconify-icon>
</div>
<div className="bg-[#111] border border-white/10 rounded-lg p-4 w-full">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-bold text-white">Snipdocs Bot</span>
<span className="text-[10px] bg-neutral-800 text-neutral-400 px-1 rounded">APP</span>
</div>
<p className="text-sm text-neutral-300 mb-3">
                                To paginate the <code className="bg-neutral-800 px-1 py-0.5 rounded text-xs text-white">GET /users</code> endpoint, pass the <code className="text-brand">page</code> and <code className="text-brand">limit</code> query parameters.
                            </p>
<div className="bg-black rounded border border-white/10 p-3 font-mono text-xs text-neutral-400">
                                GET /v1/users?page=2&amp;limit=20
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#030303] relative overflow-hidden">
<div className="max-w-2xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Total Control</h2>
<p className="text-neutral-500">Fine-tune your documentation privacy and deployment settings.</p>
</div>
<div className="max-w-md mx-auto glass-panel rounded-2xl p-8 border-t border-white/10">

<div className="flex items-center justify-between mb-8 group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:globe" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Public Access</div>
<div className="text-[11px] text-neutral-500">Allow search indexing</div>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
</label>
</div>

<div className="flex items-center justify-between mb-8 group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:lock" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">SSO Enforcement</div>
<div className="text-[11px] text-neutral-500">Require SAML login</div>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
</label>
</div>

<div className="pt-4 border-t border-white/5">
<div className="flex justify-between text-xs font-medium text-neutral-400 mb-4">
<span>Cache TTL</span>
<span className="text-white">60s</span>
</div>
<div className="relative w-full h-1 bg-neutral-800 rounded-full cursor-pointer group">
<div className="absolute h-full bg-brand rounded-full w-1/3 group-hover:bg-brand-glow transition-colors"></div>
<div className="absolute h-4 w-4 bg-white rounded-full shadow top-1/2 -translate-y-1/2 left-1/3 cursor-grab hover:scale-110 transition-transform"></div>
</div>
</div>
</div>
</section>

<section className="py-32 text-center px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-radial from-brand/10 to-transparent opacity-50"></div>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-[-0.04em] mb-8">
                Ready to upgrade your<br/>developer experience?
            </h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-white text-black px-8 py-4 text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors" href="#">
                    Start for Free
                </a>
<a className="w-full sm:w-auto text-neutral-400 hover:text-white px-8 py-4 text-sm font-medium transition-colors" href="#">
                    Talk to Sales
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
<div className="max-w-xs">
<a className="text-white text-lg font-semibold tracking-tight flex items-center gap-2 mb-6" href="#">
<div className="w-4 h-4 rounded-sm bg-gradient-to-tr from-brand to-purple-500"></div>
                        snipdocs
                    </a>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Design and code documentation tools for the modern web. Built for teams who care about details.
                    </p>
</div>
<div className="flex gap-16 flex-wrap">
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Product</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-brand transition-colors" href="#">Features</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Enterprise</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-brand transition-colors" href="#">About</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-brand transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
<p className="text-xs text-neutral-600">© 2023 Snipdocs Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="16"></iconify-icon></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
