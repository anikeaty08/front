import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



        lucide.createIcons({
            attrs: {
                'stroke-width': '1.5',
                'class': 'lucide'
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1]">
<div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[20%] w-[30%] h-[30%] rounded-full bg-blue-900/10 blur-[100px]"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="bot"></i>
</div>
<span className="text-lg font-medium tracking-tight text-white">AETHER</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">Solutions</a>
<a className="hover:text-white transition-colors" href="#workflow">How it works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-neutral-400 hover:text-white hidden sm:block" href="#">Log in</a>
<button className="group relative px-4 py-2 rounded-full bg-white text-black text-sm font-semibold overflow-hidden transition-all hover:bg-neutral-200">
<span className="relative z-10 flex items-center gap-2">
                        Get Started <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8 hover:bg-white/10 transition-colors cursor-pointer">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                New: GPT-4o Snapshots Available
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter leading-[1.1] mb-8">
                The AI Backbone for your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300 animate-shine">HighLevel Agency.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Deploy white-label AI chatbots, automation workflows, and voice agents into your clients' sub-accounts in seconds.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-lg font-semibold hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="zap"></i>
                    Install Snapshot
                </button>
<button className="w-full sm:w-auto px-8 py-3.5 glass-card text-white rounded-lg font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                    View Demo
                </button>
</div>
</div>

<div className="mt-20 relative max-w-6xl mx-auto perspective-[2000px]">
<div className="relative rounded-xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl overflow-hidden shadow-2xl shadow-indigo-500/10 transform rotate-x-12 translate-y-10 scale-95 opacity-90">

<div className="h-10 border-b border-white/5 bg-neutral-900/80 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
</div>
<div className="mx-auto w-1/3 h-5 bg-white/5 rounded text-[10px] flex items-center justify-center text-neutral-600 font-mono">app.gohighlevel.com/automation</div>
</div>

<div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-6 h-[500px] overflow-hidden">

<div className="col-span-3 hidden md:flex flex-col gap-3 border-r border-white/5 pr-6">
<div className="h-8 w-full bg-white/5 rounded animate-pulse"></div>
<div className="h-8 w-3/4 bg-white/5 rounded animate-pulse opacity-50"></div>
<div className="h-8 w-5/6 bg-white/5 rounded animate-pulse opacity-50"></div>
<div className="mt-auto p-4 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
<div className="text-xs text-indigo-300 font-mono">AI AGENT ACTIVE</div>
</div>
</div>

<div className="col-span-9 relative">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
<path d="M 100 100 C 200 100, 150 200, 250 200" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"></path>
<path d="M 250 200 C 350 200, 300 300, 400 300" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"></path>
</svg>

<div className="absolute top-16 left-10 p-4 rounded-lg bg-neutral-800 border border-white/10 w-48 shadow-lg z-10">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center"><i className="w-3 h-3" data-lucide="message-square"></i></div>
<span className="text-xs font-semibold text-white">Inbound Lead</span>
</div>
<div className="h-1.5 w-full bg-neutral-700 rounded-full overflow-hidden">
<div className="h-full w-full bg-green-500"></div>
</div>
</div>
<div className="absolute top-40 left-[220px] p-4 rounded-lg bg-indigo-900/20 border border-indigo-500/30 w-56 shadow-lg shadow-indigo-500/5 z-10 backdrop-blur-sm">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded bg-indigo-500 text-white flex items-center justify-center"><i className="w-3 h-3" data-lucide="brain-circuit"></i></div>
<span className="text-xs font-semibold text-indigo-100">AI Qualification</span>
</div>
<div className="text-[10px] text-indigo-300 font-mono">Analyzing intent...</div>
</div>
<div className="absolute top-64 left-[400px] p-4 rounded-lg bg-neutral-800 border border-white/10 w-48 shadow-lg z-10">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center"><i className="w-3 h-3" data-lucide="calendar"></i></div>
<span className="text-xs font-semibold text-white">Book Appointment</span>
</div>
<div className="h-1.5 w-full bg-neutral-700 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-blue-500"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -inset-4 bg-gradient-to-t from-indigo-500/20 to-transparent blur-3xl -z-10 opacity-40"></div>
</div>

<div className="mt-24 pt-10 border-t border-white/5">
<p className="text-center text-sm text-neutral-500 mb-8 font-medium">POWERING AGENCIES USING</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale mix-blend-screen">
<div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"><span className="w-6 h-6 bg-white rounded-full"></span> HighLevel</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"><i className="w-6 h-6" data-lucide="zap"></i> Zapier</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"><i className="w-6 h-6" data-lucide="bot"></i> OpenAI</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"><i className="w-6 h-6" data-lucide="database"></i> Airtable</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Complete Autopilot Agency</h2>
<p className="text-neutral-400 text-lg font-light">Stop building workflows from scratch. Our snapshots come pre-loaded with advanced AI prompts and logic.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 group glass-card rounded-2xl p-8 relative overflow-hidden transition-all duration-500 hover:border-indigo-500/30">
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="messages-square"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Conversational Booking AI</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-sm">Our AI doesn't just chat. It qualifies leads, handles objections, and books appointments directly into the GHL calendar using natural language.</p>
</div>
<div className="w-full bg-neutral-900 rounded-lg p-3 border border-white/5 mt-4">
<div className="flex gap-3 mb-2">
<div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] text-white">AI</div>
<div className="bg-neutral-800 rounded-tr-xl rounded-bl-xl rounded-br-xl p-2 text-xs text-neutral-300">
                                    I see you're interested in scaling. Do you have 15 mins this Thursday?
                                </div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="w-6 h-6 rounded-full bg-neutral-700 flex items-center justify-center text-[10px] text-white">User</div>
<div className="bg-indigo-600 rounded-tl-xl rounded-bl-xl rounded-br-xl p-2 text-xs text-white">
                                    Yes, 2pm works perfectly.
                                </div>
</div>
</div>
</div>
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/5 to-transparent pointer-events-none"></div>
</div>

<div className="md:col-span-1 group glass-card rounded-2xl p-8 relative overflow-hidden transition-all duration-500 hover:border-indigo-500/30">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-[60px]"></div>
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center mb-6 text-white">
<i className="w-5 h-5" data-lucide="download"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-2">1-Click Snapshots</h3>
<p className="text-sm text-neutral-400 mb-6">Instantly deploy entire agency setups. No manual copying of triggers or campaigns.</p>
<div className="flex items-center gap-2 text-xs text-green-400 font-mono bg-green-900/20 w-fit px-2 py-1 rounded border border-green-900/50">
<i className="w-3 h-3" data-lucide="check"></i> Installation Complete
                    </div>
</div>

<div className="md:col-span-1 group glass-card rounded-2xl p-8 relative overflow-hidden transition-all duration-500 hover:border-indigo-500/30">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center mb-6 text-white">
<i className="w-5 h-5" data-lucide="fingerprint"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-2">White Label Ready</h3>
<p className="text-sm text-neutral-400">Rebrand our tools as your own. Your clients will never know we exist. Custom domain support included.</p>
</div>

<div className="md:col-span-2 group glass-card rounded-2xl p-8 relative overflow-hidden transition-all duration-500 hover:border-indigo-500/30">
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center mb-6 text-white">
<i className="w-5 h-5" data-lucide="workflow"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Multi-Channel Reactivation</h3>
<p className="text-sm text-neutral-400 max-w-md">Revive dead leads via SMS, Email, and Voice Drops simultaneously using our "Lazarus" workflow logic.</p>
</div>
<div className="mt-4 flex items-center gap-4 border-t border-white/5 pt-4">
<div className="flex flex-col gap-1">
<span className="text-xs text-neutral-500">SMS Open Rate</span>
<span className="text-lg font-mono text-white">98.4%</span>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div className="flex flex-col gap-1">
<span className="text-xs text-neutral-500">Recovery Rate</span>
<span className="text-lg font-mono text-white">14.2%</span>
</div>
</div>
</div>
<div className="absolute -right-10 -bottom-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Scalable Pricing</h2>
<p className="text-neutral-400 text-lg font-light">Pay per sub-account or unlock unlimited access.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-8 rounded-2xl border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-white tracking-tight">$97</span>
<span className="text-neutral-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-neutral-400">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> 1 Sub-Account License</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> Basic Chatbot</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> Standard Workflows</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> Email Support</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 transition-colors text-sm">Start Trial</button>
</div>

<div className="relative p-8 rounded-2xl border border-indigo-500/30 bg-neutral-900/60 shadow-2xl shadow-indigo-500/10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
<h3 className="text-lg font-medium text-white mb-2">Agency</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-white tracking-tight">$297</span>
<span className="text-neutral-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-neutral-300">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-indigo-400" data-lucide="check"></i> Unlimited Sub-Accounts</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-indigo-400" data-lucide="check"></i> GPT-4o Advanced Bot</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-indigo-400" data-lucide="check"></i> Reactivation Snapshots</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-indigo-400" data-lucide="check"></i> White Label Support</li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition-colors text-sm">Get Started</button>

</div>

<div className="p-8 rounded-2xl border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors">
<h3 className="text-lg font-medium text-white mb-2">Lifetime</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-white tracking-tight">$2,497</span>
<span className="text-neutral-500">/once</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-neutral-400">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> All Agency Features</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> Source Code Access</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> Custom Installation</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> Priority Zoom Support</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 transition-colors text-sm">Contact Sales</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-950 pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-violet-600 rounded flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="bot"></i>
</div>
<span className="text-base font-semibold tracking-tight text-white">AETHER</span>
</div>
<p className="text-sm text-neutral-500 leading-relaxed">
                    Helping agencies scale with white-label AI infrastructure. Built for HighLevel.
                </p>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Product</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Snapshots</a></li>
<li><a className="hover:text-white transition-colors" href="#">AI Chatbots</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Legal</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-600">© 2024 Aether Labs Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</footer>


    </>
  );
}
