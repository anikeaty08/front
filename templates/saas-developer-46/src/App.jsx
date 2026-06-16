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
sienna: {
500: '#a0522d',
900: '#3a1e12',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
},
animation: {
'float': 'float 6s ease-in-out infinite',
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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-radial from-sienna-900/20 via-transparent to-transparent opacity-40 pointer-events-none z-0"></div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white font-medium tracking-tight text-sm flex items-center gap-2" href="#">
<div className="w-4 h-4 bg-zinc-100 rounded-sm"></div>
                    SIENNA
                </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium hover:text-white transition-colors" href="#">Product</a>
<a className="text-xs font-medium hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-xs font-medium hover:text-white transition-colors" href="#">Resources</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-zinc-100 text-black text-xs font-medium px-3 py-1.5 rounded-full hover:bg-zinc-200 transition-colors" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20">
<div className="max-w-4xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 hover:border-white/20 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sienna-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sienna-500"></span>
</span>
<span className="text-xs font-medium text-zinc-300">Introducing Sienna 2.0</span>
</div>
<h1 className="text-4xl md:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500 tracking-tighter mb-6 leading-[1.1]">
                Design the future<br/>of your workflow.
            </h1>
<p className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                A unified workspace for engineering teams. Manage projects, track bugs, and deploy code faster with our intelligent platform.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-10 px-6 rounded-full bg-zinc-100 text-black text-sm font-medium hover:bg-white transition-all flex items-center gap-2">
                    Start Building
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="h-10 px-6 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm font-medium hover:bg-zinc-800 transition-all flex items-center gap-2 group">
<iconify-icon className="group-hover:text-white transition-colors" icon="solar:play-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Watch Demo
                </button>
</div>

<div className="relative w-full max-w-5xl mx-auto">
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20 h-full w-full"></div>
<div className="border border-white/10 rounded-xl bg-[#0a0a0a] overflow-hidden shadow-2xl shadow-sienna-900/10">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02]">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
</div>

<div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

<div className="hidden md:block col-span-1 space-y-4">
<div className="h-8 w-24 bg-zinc-900 rounded-md mb-6"></div>
<div className="space-y-2">
<div className="flex items-center gap-3 p-2 rounded hover:bg-white/5 cursor-pointer">
<iconify-icon className="text-zinc-500" icon="solar:home-smile-linear"></iconify-icon>
<div className="h-2 w-16 bg-zinc-900 rounded"></div>
</div>
<div className="flex items-center gap-3 p-2 rounded bg-white/5 border border-white/5">
<iconify-icon className="text-zinc-200" icon="solar:folder-with-files-linear"></iconify-icon>
<div className="h-2 w-20 bg-zinc-700 rounded"></div>
</div>
<div className="flex items-center gap-3 p-2 rounded hover:bg-white/5 cursor-pointer">
<iconify-icon className="text-zinc-500" icon="solar:users-group-rounded-linear"></iconify-icon>
<div className="h-2 w-14 bg-zinc-900 rounded"></div>
</div>
<div className="flex items-center gap-3 p-2 rounded hover:bg-white/5 cursor-pointer">
<iconify-icon className="text-zinc-500" icon="solar:settings-linear"></iconify-icon>
<div className="h-2 w-16 bg-zinc-900 rounded"></div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 space-y-6">
<div className="flex items-center justify-between mb-8">
<div className="h-8 w-32 bg-zinc-800 rounded-md"></div>
<div className="h-8 w-8 rounded-full bg-zinc-800"></div>
</div>

<div className="h-40 w-full border border-white/5 rounded-lg bg-gradient-to-b from-white/[0.02] to-transparent relative p-4 flex items-end gap-2">
<div className="w-full bg-sienna-500/20 h-[40%] rounded-sm hover:bg-sienna-500/40 transition-colors"></div>
<div className="w-full bg-sienna-500/20 h-[70%] rounded-sm hover:bg-sienna-500/40 transition-colors"></div>
<div className="w-full bg-sienna-500/20 h-[50%] rounded-sm hover:bg-sienna-500/40 transition-colors"></div>
<div className="w-full bg-sienna-500/20 h-[85%] rounded-sm hover:bg-sienna-500/40 transition-colors"></div>
<div className="w-full bg-zinc-800/50 h-[30%] rounded-sm"></div>
<div className="w-full bg-zinc-800/50 h-[45%] rounded-sm"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="h-24 rounded-lg border border-white/5 bg-white/[0.02]"></div>
<div className="h-24 rounded-lg border border-white/5 bg-white/[0.02]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 py-10 bg-white/[0.01]">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-zinc-500 mb-8 uppercase tracking-widest">Trusted by teams at</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale">

<div className="flex items-center gap-2 font-semibold text-lg text-white"><div className="w-5 h-5 border-2 border-current rounded-full"></div> ACME</div>
<div className="flex items-center gap-2 font-semibold text-lg text-white"><div className="w-5 h-5 bg-current rotate-45"></div> KALE</div>
<div className="flex items-center gap-2 font-semibold text-lg text-white"><div className="w-5 h-5 border-2 border-current"></div> BOX</div>
<div className="flex items-center gap-2 font-semibold text-lg text-white"><div className="w-5 h-5 rounded-full bg-current"></div> SPHERE</div>
<div className="flex items-center gap-2 font-semibold text-lg text-white"><div className="w-5 h-5 border-b-2 border-current"></div> LINE</div>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Precision in every pixel.</h2>
<p className="text-zinc-500 text-lg max-w-2xl">Engineered for speed and reliability. Experience a workflow that adapts to your needs without the clutter.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden relative group hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div>
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Real-time Analytics</h3>
<p className="text-sm text-zinc-500 max-w-sm">Monitor your application's performance with millisecond precision. Get insights that matter instantly.</p>
</div>

<div className="w-full h-32 mt-4 relative">

<svg className="w-full h-full stroke-sienna-500 stroke-2 fill-none overflow-visible" viewbox="0 0 400 100">
<path className="drop-shadow-[0_0_10px_rgba(160,82,45,0.5)]" d="M0 80 Q 40 70 80 50 T 160 60 T 240 30 T 320 40 T 400 10"></path>
<path d="M0 80 L 400 80" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden relative group hover:border-white/20 transition-colors">
<div className="p-8 h-full flex flex-col relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Secure by Default</h3>
<p className="text-sm text-zinc-500">Enterprise-grade security built into the core. Compliant with SOC2 and GDPR.</p>
<div className="mt-auto flex items-center gap-2 pt-6">
<div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
<div className="h-full w-[80%] bg-green-500/80 rounded-full"></div>
</div>
<span className="text-xs text-green-500 font-medium">100%</span>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden relative group hover:border-white/20 transition-colors">
<div className="p-8 h-full flex flex-col relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Lightning Fast</h3>
<p className="text-sm text-zinc-500">Optimized for speed. Deployments happen in seconds, not minutes.</p>
<div className="mt-auto flex justify-between items-end pt-4">
<div className="text-4xl font-semibold text-white tracking-tighter">98<span className="text-lg text-zinc-600 font-normal">ms</span></div>
<div className="text-xs text-zinc-500 mb-1">Avg. Latency</div>
</div>
</div>
</div>

<div className="md:col-span-2 rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden relative group hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 h-full flex flex-col relative z-10">
<div className="flex items-start justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Team Collaboration</h3>
<p className="text-sm text-zinc-500 max-w-sm">Built for multiplayer. Comment, review, and approve in real-time without leaving the app.</p>
</div>
</div>

<div className="mt-6 space-y-3 pl-4 border-l border-white/10">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-zinc-700"></div>
<div className="text-xs text-zinc-300 bg-zinc-800/50 px-3 py-1.5 rounded-full rounded-tl-none border border-white/5">Can we update the primary color?</div>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-sienna-600"></div>
<div className="text-xs text-white bg-sienna-900/30 px-3 py-1.5 rounded-full rounded-tl-none border border-sienna-500/20">Done. Pushing changes now.</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-4xl mx-auto px-6 text-center mb-12">
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">Control at your fingertips</h2>
<p className="text-zinc-500 text-sm">Customize every aspect of your experience with granular controls.</p>
</div>
<div className="max-w-md mx-auto bg-[#0a0a0a] border border-white/10 rounded-xl p-6 shadow-2xl">

<div className="flex items-center justify-between py-3 border-b border-white/5">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:moon-linear"></iconify-icon>
<span className="text-sm text-zinc-200">Dark Mode</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-sienna-600"></div>
</label>
</div>

<div className="py-4 border-b border-white/5">
<div className="flex justify-between mb-2">
<span className="text-xs text-zinc-400">Opacity</span>
<span className="text-xs text-white">85%</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1.5">
<div className="bg-white h-1.5 rounded-full w-[85%] relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow cursor-pointer hover:scale-110 transition-transform"></div>
</div>
</div>
</div>

<div className="pt-4 space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 border border-zinc-600 rounded bg-transparent group-hover:border-zinc-400 transition-colors">
<input className="peer appearance-none w-full h-full absolute inset-0 z-10 cursor-pointer" type="checkbox"/>
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all" icon="solar:check-circle-bold"></iconify-icon>
</div>
<span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">Enable notifications</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 border border-zinc-600 rounded bg-transparent group-hover:border-zinc-400 transition-colors">
<input checked="" className="peer appearance-none w-full h-full absolute inset-0 z-10 cursor-pointer" type="checkbox"/>
<iconify-icon className="text-sienna-500 opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all" icon="solar:check-circle-bold"></iconify-icon>
</div>
<span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">Auto-save changes</span>
</label>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-radial from-sienna-900/20 to-transparent opacity-50"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-6">Ready to get started?</h2>
<p className="text-lg text-zinc-400 mb-10 font-light">Join thousands of developers building the future with Sienna.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                    Create free account
                </button>
<button className="h-12 px-8 rounded-full border border-white/10 bg-black/50 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/10 transition-all">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-[#050505]">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="col-span-2 md:col-span-1">
<a className="text-white font-medium tracking-tight text-sm flex items-center gap-2 mb-4" href="#">
<div className="w-4 h-4 bg-zinc-100 rounded-sm"></div>
                    SIENNA
                </a>
<p className="text-xs text-zinc-600 leading-relaxed">
                    Designed for the modern web.<br/>
                    © 2023 Sienna Inc.
                </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">Product</h4>
<ul className="space-y-2">
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">Company</h4>
<ul className="space-y-2">
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">About</a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">Legal</h4>
<ul className="space-y-2">
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
</footer>

    </>
  );
}
