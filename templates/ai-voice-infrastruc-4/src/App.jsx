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



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-10">
<a className="text-white text-lg tracking-tight font-semibold flex items-center gap-2.5" href="#">
<div className="relative flex items-center justify-center w-6 h-6 bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-lg shadow-lg shadow-indigo-500/20">
<i className="w-3.5 h-3.5 text-white" data-lucide="waves"></i>
</div>
                    Thinkrr
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#voices">Voice Lab</a>
<a className="hover:text-white transition-colors" href="#integrations">Integrations</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#">Get Started Free</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="absolute inset-0 grid-bg pointer-events-none -z-10"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-[11px] font-medium text-indigo-300 mb-8 hover:bg-indigo-500/10 transition-colors cursor-pointer ring-1 ring-transparent hover:ring-indigo-500/20">
<span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                New: Hostaway Integration for Short-Term Rentals
                <i className="w-3 h-3 ml-1" data-lucide="arrow-right"></i>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter leading-[1] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-500">
                Launch your own <br/>
<span className="text-indigo-400">Voice AI Agency.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                The complete infrastructure to build, deploy, and resell human-like voice agents. 
                Inbound, outbound, and scheduling—fully white-labeled for your brand.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-11 px-8 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] flex items-center gap-2">
                    Start Building Now
                    <i className="w-4 h-4 text-zinc-600" data-lucide="chevron-right"></i>
</button>
<button className="h-11 px-8 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 text-zinc-300 text-sm font-medium transition-all flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                    View Demo
                </button>
</div>

<div className="mt-20 relative max-w-5xl mx-auto perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-b from-indigo-500/20 to-transparent rounded-2xl blur-lg opacity-50"></div>
<div className="glass-panel rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#0A0A0A]">
<div className="h-10 border-b border-white/5 flex items-center px-4 justify-between bg-black/40">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
</div>
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Agency_Dashboard_v2</div>
</div>
<div className="grid md:grid-cols-3 h-[400px]">

<div className="border-r border-white/5 p-4 hidden md:block bg-zinc-900/20">
<div className="space-y-6">
<div className="space-y-1">
<div className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider mb-2">Active Agents</div>
<div className="flex items-center justify-between p-2 rounded bg-indigo-500/10 border border-indigo-500/20">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
<span className="text-xs text-indigo-200 font-medium">Sales Rep (Outbound)</span>
</div>
<span className="text-[10px] text-indigo-400">Live</span>
</div>
<div className="flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-pointer">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
<span className="text-xs text-zinc-400">Support (Inbound)</span>
</div>
</div>
</div>
<div className="space-y-1">
<div className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider mb-2">Performance</div>
<div className="p-3 rounded bg-zinc-900/50 border border-white/5">
<div className="text-xs text-zinc-400 mb-1">Calls Today</div>
<div className="text-xl font-semibold text-white">1,248</div>
<div className="w-full bg-zinc-800 h-1 rounded-full mt-2 overflow-hidden">
<div className="bg-indigo-500 h-full w-[70%]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 p-6 flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 pointer-events-none">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-xs text-green-400 font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                                    System Operational
                                </div>
</div>
<div className="mt-auto mb-8 mx-auto w-full max-w-md text-center">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mx-auto mb-6 flex items-center justify-center shadow-lg shadow-indigo-500/25">
<i className="w-8 h-8 text-white" data-lucide="mic"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">"Hey, is this John from Real Estate Co?"</h3>
<p className="text-sm text-zinc-500 mb-8">Agent: <span className="text-indigo-400">Sarah (US, Cheerful)</span> • Confidence: 98%</p>
<div className="flex items-center justify-center gap-1.5 h-12">
<div className="wave-bar"></div><div className="wave-bar"></div><div className="wave-bar"></div><div className="wave-bar"></div><div className="wave-bar"></div>
<div className="wave-bar"></div><div className="wave-bar"></div><div className="wave-bar"></div><div className="wave-bar"></div><div className="wave-bar"></div>
<div className="wave-bar"></div><div className="wave-bar"></div><div className="wave-bar"></div><div className="wave-bar"></div><div className="wave-bar"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-zinc-900/20 py-10 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-500 uppercase tracking-widest mb-8">Seamlessly Integrated With</p>
<div className="flex justify-center items-center flex-wrap gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
<div className="flex items-center gap-2 text-white font-bold text-lg"><i className="text-blue-500" data-lucide="layers"></i> GoHighLevel</div>
<div className="flex items-center gap-2 text-white font-bold text-lg"><i className="text-green-500" data-lucide="layout-grid"></i> WhatsApp</div>
<div className="flex items-center gap-2 text-white font-bold text-lg"><i className="text-blue-400" data-lucide="calendar"></i> Google Cal</div>
<div className="flex items-center gap-2 text-white font-bold text-lg"><i className="text-orange-500" data-lucide="webhook"></i> Zapier</div>
<div className="flex items-center gap-2 text-white font-bold text-lg"><i className="text-purple-500" data-lucide="database"></i> Salesforce</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-3 gap-8">
<div className="space-y-4 p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<h3 className="text-lg font-medium text-white">Instant Lead Response</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Leads go cold in minutes. Thinkrr agents call within seconds of form submission, running 24/7 without coffee breaks.
                    </p>
</div>
<div className="space-y-4 p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
<h3 className="text-lg font-medium text-white">Automate Pipelines</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Hiring sales reps is costly and slow. Deploy infinite AI agents to qualify leads and book meetings directly into your CRM.
                    </p>
</div>
<div className="space-y-4 p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group">
<div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="wallet"></i>
</div>
<h3 className="text-lg font-medium text-white">Maximize Revenue</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        More conversations mean more conversions. Help your clients close more deals and increase their LTV, reducing your churn.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/10 border-y border-white/5" id="voices">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Hyper-realistic voices.</h2>
<p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto">
                    Real accents. Real conversations. Choose from our library of 50+ pre-trained voices or clone your own.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="glass-panel p-4 rounded-xl hover:border-indigo-500/30 transition-all group cursor-pointer">
<div className="aspect-square rounded-lg bg-gradient-to-b from-zinc-800 to-zinc-900 mb-4 flex items-center justify-center relative overflow-hidden">
<img alt="Yuna" className="w-20 h-20 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Yuna&amp;backgroundColor=b6e3f4"/>
<div className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<i className="w-3.5 h-3.5 text-black fill-current ml-0.5" data-lucide="play"></i>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium text-white">Yuna</h4>
<p className="text-xs text-zinc-500">Korean / English</p>
</div>
<span className="text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded border border-white/5">Soft</span>
</div>
</div>

<div className="glass-panel p-4 rounded-xl hover:border-indigo-500/30 transition-all group cursor-pointer">
<div className="aspect-square rounded-lg bg-gradient-to-b from-zinc-800 to-zinc-900 mb-4 flex items-center justify-center relative overflow-hidden">
<img alt="Marcus" className="w-20 h-20 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus&amp;backgroundColor=ffdfbf"/>
<div className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<i className="w-3.5 h-3.5 text-black fill-current ml-0.5" data-lucide="play"></i>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium text-white">Marcus</h4>
<p className="text-xs text-zinc-500">British / Formal</p>
</div>
<span className="text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded border border-white/5">Deep</span>
</div>
</div>

<div className="glass-panel p-4 rounded-xl hover:border-indigo-500/30 transition-all group cursor-pointer">
<div className="aspect-square rounded-lg bg-gradient-to-b from-zinc-800 to-zinc-900 mb-4 flex items-center justify-center relative overflow-hidden">
<img alt="Camila" className="w-20 h-20 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Camila&amp;backgroundColor=ffdfbf"/>
<div className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<i className="w-3.5 h-3.5 text-black fill-current ml-0.5" data-lucide="play"></i>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium text-white">Camila</h4>
<p className="text-xs text-zinc-500">Spanish / English</p>
</div>
<span className="text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded border border-white/5">Energetic</span>
</div>
</div>

<div className="glass-panel p-4 rounded-xl hover:border-indigo-500/30 transition-all group cursor-pointer">
<div className="aspect-square rounded-lg bg-gradient-to-b from-zinc-800 to-zinc-900 mb-4 flex items-center justify-center relative overflow-hidden">
<img alt="Felix" className="w-20 h-20 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&amp;backgroundColor=c0aede"/>
<div className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<i className="w-3.5 h-3.5 text-black fill-current ml-0.5" data-lucide="play"></i>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium text-white">Felix</h4>
<p className="text-xs text-zinc-500">German / English</p>
</div>
<span className="text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded border border-white/5">Assertive</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Complete agency toolkit.</h2>
<p className="text-zinc-400 max-w-xl">Everything you need to run a high-performance voice AI agency.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel rounded-2xl p-8 feature-card relative overflow-hidden group">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
<i className="w-5 h-5" data-lucide="phone-incoming"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Inbound Handling</h3>
<p className="text-sm text-zinc-400">Field every call instantly. No voicemails, no missed opportunities.</p>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 feature-card relative overflow-hidden group">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-6 text-green-400">
<i className="w-5 h-5" data-lucide="phone-outgoing"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Outbound Campaigns</h3>
<p className="text-sm text-zinc-400">Trigger thousands of calls from leads lists. Auto-dialing with power.</p>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 feature-card relative overflow-hidden group md:row-span-2">
<div className="relative z-10 h-full flex flex-col">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400">
<i className="w-5 h-5" data-lucide="message-circle"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Smart Web Widget</h3>
<p className="text-sm text-zinc-400 mb-6">Capture leads and engage support visitors directly on client sites.</p>
<div className="mt-auto bg-zinc-900 rounded-lg border border-white/5 p-4 transform group-hover:translate-y-2 transition-transform">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center"><i className="w-4 h-4 text-white" data-lucide="mic"></i></div>
<div className="text-[10px] text-zinc-400">How can I help you today?</div>
</div>
<div className="h-1 bg-zinc-800 rounded-full w-full"></div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 feature-card relative overflow-hidden group">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 text-orange-400">
<i className="w-5 h-5" data-lucide="calendar-check"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Real-time Scheduling</h3>
<p className="text-sm text-zinc-400">Seamlessly books meetings into GCal or Outlook during conversation.</p>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 feature-card relative overflow-hidden group">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6 text-pink-400">
<i className="w-5 h-5" data-lucide="languages"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">15+ Languages</h3>
<p className="text-sm text-zinc-400">Auto-detect language and switch instantly to speak like a local.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-medium text-blue-300 mb-6">
<i className="w-3 h-3" data-lucide="layers"></i>
                    Native Integration
                </div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                    Made for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">GoHighLevel</span> users.
                </h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                    Thinkrr is built to work hand-in-hand with GHL. No Zapier required. Sync contacts, trigger calls from workflows, and update custom fields automatically.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><i className="w-3 h-3" data-lucide="check"></i></div>
                        Snapshot installation in one click
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><i className="w-3 h-3" data-lucide="check"></i></div>
                        Tag-based call triggering
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><i className="w-3 h-3" data-lucide="check"></i></div>
                        Call recordings synced to contact timeline
                    </li>
</ul>
<button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors shadow-lg shadow-blue-500/20">
                    See the GHL Workflow
                </button>
</div>

<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-xl"></div>
<div className="glass-panel rounded-xl p-6 border border-white/10 bg-[#0F172A]">

<div className="flex flex-col gap-4">
<div className="flex items-center justify-center">
<div className="bg-zinc-800 rounded px-4 py-2 text-xs text-zinc-300 border border-white/5">Form Submitted</div>
</div>
<div className="h-8 w-[1px] bg-zinc-700 mx-auto"></div>
<div className="flex items-center justify-center">
<div className="bg-blue-600/20 text-blue-300 rounded px-4 py-2 text-xs border border-blue-500/30 flex items-center gap-2">
<i className="w-3 h-3" data-lucide="webhook"></i>
                                Thinkrr: Initiate Call
                            </div>
</div>
<div className="h-8 w-[1px] bg-zinc-700 mx-auto"></div>
<div className="grid grid-cols-2 gap-8 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-4 border-t border-r border-l border-zinc-700 rounded-t-lg"></div>
<div className="flex flex-col items-center mt-4">
<div className="bg-green-900/20 text-green-300 rounded px-3 py-2 text-[10px] border border-green-500/30 text-center">
                                    Call Outcome: <br/> <strong>Booked</strong>
</div>
</div>
<div className="flex flex-col items-center mt-4">
<div className="bg-red-900/20 text-red-300 rounded px-3 py-2 text-[10px] border border-red-500/30 text-center">
                                    Call Outcome: <br/> <strong>No Answer</strong>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Launch in minutes.</h2>
<p className="text-zinc-400 text-sm">From install to automation — launch fully functional agents for your clients instantly.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="relative">
<div className="text-sm font-semibold text-indigo-400 mb-4 flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center text-xs border border-indigo-500/20">1</span>
                        One-Click Install
                    </div>
<div className="glass-panel h-48 rounded-lg flex items-center justify-center border border-white/10 mb-4 p-4">
<div className="w-3/4 h-24 bg-zinc-900 rounded border border-zinc-800 flex flex-col p-3 shadow-lg">
<div className="w-1/2 h-2 bg-zinc-700 rounded mb-2"></div>
<div className="w-full h-8 bg-indigo-600 rounded mt-auto flex items-center justify-center text-[10px] text-white">Connect Account</div>
</div>
</div>
<p className="text-xs text-zinc-500">Connect your Agency Admin account to start syncing all future client sub-accounts.</p>
</div>
<div className="relative">
<div className="text-sm font-semibold text-indigo-400 mb-4 flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center text-xs border border-indigo-500/20">2</span>
                        Configure Agent
                    </div>
<div className="glass-panel h-48 rounded-lg flex items-center justify-center border border-white/10 mb-4 p-4">
<div className="w-3/4 h-32 bg-zinc-900 rounded border border-zinc-800 p-3 space-y-2 shadow-lg">
<div className="flex justify-between items-center"><div className="w-8 h-2 bg-zinc-700 rounded"></div><div className="w-4 h-4 rounded bg-green-500/20"></div></div>
<div className="w-full h-1 bg-zinc-800 rounded"></div>
<div className="w-2/3 h-1 bg-zinc-800 rounded"></div>
<div className="w-full h-8 bg-zinc-800 rounded border border-zinc-700 mt-4 flex items-center px-2 text-[8px] text-zinc-500">Select Prompt...</div>
</div>
</div>
<p className="text-xs text-zinc-500">Select from our template library or create a custom prompt for the specific niche.</p>
</div>
<div className="relative">
<div className="text-sm font-semibold text-indigo-400 mb-4 flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center text-xs border border-indigo-500/20">3</span>
                        Deploy &amp; Resell
                    </div>
<div className="glass-panel h-48 rounded-lg flex items-center justify-center border border-white/10 mb-4 p-4">
<div className="w-3/4 h-24 bg-gradient-to-br from-indigo-900/40 to-black rounded border border-indigo-500/30 flex items-center justify-center shadow-lg relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-500/10 animate-pulse"></div>
<div className="text-xs font-mono text-indigo-300">STATUS: ACTIVE</div>
</div>
</div>
<p className="text-xs text-zinc-500">Charge your clients a monthly retainer plus usage markup. Keep 100% of the profit.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div className="sticky top-32">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Thinkrr Voice Studio.</h2>
<p className="text-zinc-400 text-sm mb-8">A powerful environment to manage your agency operations.</p>
<div className="space-y-4">
<div className="p-4 rounded-lg bg-white/5 border border-indigo-500/50 cursor-pointer transition-all">
<h3 className="text-sm font-medium text-white flex items-center gap-2">
<i className="w-4 h-4 text-indigo-400" data-lucide="book-open"></i> Scenario Library
                            </h3>
<p className="text-xs text-zinc-400 mt-2 pl-6">Access 50+ pre-built scripts for Real Estate, Solar, Insurance, and Medical niches.</p>
</div>
<div className="p-4 rounded-lg border border-white/5 hover:bg-white/5 cursor-pointer transition-all opacity-60 hover:opacity-100">
<h3 className="text-sm font-medium text-white flex items-center gap-2">
<i className="w-4 h-4 text-zinc-400" data-lucide="history"></i> Call Analysis
                            </h3>
<p className="text-xs text-zinc-400 mt-2 pl-6">Detailed recording breakdown, sentiment analysis, and success tagging.</p>
</div>
<div className="p-4 rounded-lg border border-white/5 hover:bg-white/5 cursor-pointer transition-all opacity-60 hover:opacity-100">
<h3 className="text-sm font-medium text-white flex items-center gap-2">
<i className="w-4 h-4 text-zinc-400" data-lucide="tag"></i> White Labeling
                            </h3>
<p className="text-xs text-zinc-400 mt-2 pl-6">Replace our logo with yours. Your clients never know Thinkrr exists.</p>
</div>
</div>
</div>
<div className="glass-panel rounded-xl overflow-hidden border border-white/10 shadow-2xl">
<div className="h-10 bg-black/40 border-b border-white/5 flex items-center px-4">
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
</div>
<div className="p-6 bg-[#0c0c0c] min-h-[400px]">

<div className="grid grid-cols-2 gap-4">
<div className="p-3 rounded border border-white/10 bg-zinc-900/50 hover:border-indigo-500/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="p-1.5 rounded bg-orange-500/10 text-orange-400"><i className="w-3 h-3" data-lucide="sun"></i></div>
<span className="text-[9px] text-zinc-500">v2.1</span>
</div>
<div className="text-xs font-medium text-white">Solar Lead Qualify</div>
<p className="text-[10px] text-zinc-500 mt-1">Qualifies homeowners for solar installation suitability.</p>
</div>
<div className="p-3 rounded border border-white/10 bg-zinc-900/50 hover:border-indigo-500/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="p-1.5 rounded bg-blue-500/10 text-blue-400"><i className="w-3 h-3" data-lucide="home"></i></div>
<span className="text-[9px] text-zinc-500">v1.4</span>
</div>
<div className="text-xs font-medium text-white">Real Estate Follow-up</div>
<p className="text-[10px] text-zinc-500 mt-1">Re-engages old leads for potential listing appointments.</p>
</div>
<div className="p-3 rounded border border-white/10 bg-zinc-900/50 hover:border-indigo-500/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="p-1.5 rounded bg-green-500/10 text-green-400"><i className="w-3 h-3" data-lucide="stethoscope"></i></div>
<span className="text-[9px] text-zinc-500">v3.0</span>
</div>
<div className="text-xs font-medium text-white">Dental Booking</div>
<p className="text-[10px] text-zinc-500 mt-1">Handles inbound appointment scheduling for clinics.</p>
</div>
<div className="p-3 rounded border border-white/10 bg-zinc-900/50 hover:border-indigo-500/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="p-1.5 rounded bg-purple-500/10 text-purple-400"><i className="w-3 h-3" data-lucide="car"></i></div>
<span className="text-[9px] text-zinc-500">v1.1</span>
</div>
<div className="text-xs font-medium text-white">Auto Insurance Quote</div>
<p className="text-[10px] text-zinc-500 mt-1">Collects driver info and calculates preliminary quote.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">Success Stories.</h2>
<p className="text-zinc-400 text-sm mt-2">See how agencies are scaling with Thinkrr.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<div className="glass-panel p-8 rounded-2xl relative">
<div className="absolute -top-4 -left-4 w-10 h-10 bg-zinc-900 rounded-full border border-zinc-800 flex items-center justify-center text-indigo-500 font-bold text-xl">"</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-6">
                        From struggling to book demos to skyrocketing sales. We deployed the Real Estate agent for a client and they booked 40 appointments in the first week. The ROI is insane.
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white font-bold text-xs">CC</div>
<div>
<div className="text-sm font-medium text-white">Chris Colvard</div>
<div className="text-xs text-zinc-500">Founder, Apex Media</div>
</div>
</div>
</div>
<div className="glass-panel p-8 rounded-2xl relative">
<div className="absolute -top-4 -left-4 w-10 h-10 bg-zinc-900 rounded-full border border-zinc-800 flex items-center justify-center text-indigo-500 font-bold text-xl">"</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-6">
                        The White Label feature is a game changer. My clients think I built this tech myself. It adds so much value to my agency retainer model.
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white font-bold text-xs">SK</div>
<div>
<div className="text-sm font-medium text-white">Sarah Klein</div>
<div className="text-xs text-zinc-500">CEO, ScaleUp Systems</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold text-white tracking-tight">Frequently asked questions.</h2>
</div>
<div className="space-y-2">
<details className="group bg-zinc-900/30 rounded-lg border border-white/5 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-sm text-zinc-300 hover:text-white transition-colors">
<span>Can I use any phone provider?</span>
<span className="transition group-open:rotate-180"><i className="w-4 h-4" data-lucide="chevron-down"></i></span>
</summary>
<div className="text-zinc-400 text-xs p-4 pt-0 leading-relaxed">
                        Yes, Thinkrr integrates with Twilio, SignalWire, and VAPI. You can bring your own numbers or purchase them directly through our dashboard.
                    </div>
</details>
<details className="group bg-zinc-900/30 rounded-lg border border-white/5 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-sm text-zinc-300 hover:text-white transition-colors">
<span>Do you support multiple languages?</span>
<span className="transition group-open:rotate-180"><i className="w-4 h-4" data-lucide="chevron-down"></i></span>
</summary>
<div className="text-zinc-400 text-xs p-4 pt-0 leading-relaxed">
                        Absolutely. We support over 50 languages including Spanish, French, German, Portuguese, and Japanese with native-level accents.
                    </div>
</details>
<details className="group bg-zinc-900/30 rounded-lg border border-white/5 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-sm text-zinc-300 hover:text-white transition-colors">
<span>What is your cost per minute?</span>
<span className="transition group-open:rotate-180"><i className="w-4 h-4" data-lucide="chevron-down"></i></span>
</summary>
<div className="text-zinc-400 text-xs p-4 pt-0 leading-relaxed">
                        Our agency pricing starts at $0.08/min and goes as low as $0.05/min with volume commitments. Check our pricing page for detailed tiers.
                    </div>
</details>
<details className="group bg-zinc-900/30 rounded-lg border border-white/5 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-sm text-zinc-300 hover:text-white transition-colors">
<span>Can your system do conversational booking?</span>
<span className="transition group-open:rotate-180"><i className="w-4 h-4" data-lucide="chevron-down"></i></span>
</summary>
<div className="text-zinc-400 text-xs p-4 pt-0 leading-relaxed">
                        Yes. Our agents can check calendar availability in real-time and book slots while on the phone with the lead.
                    </div>
</details>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-16 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
<div>
<a className="text-white text-lg tracking-tight font-semibold flex items-center gap-2 mb-4" href="#">
<div className="w-4 h-4 bg-indigo-500 rounded-sm"></div>
                        Thinkrr
                    </a>
<p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
                        The leading Voice AI infrastructure for marketing agencies and SaaS platforms. Built for scale, reliability, and speed.
                    </p>
</div>
<div className="flex gap-12 md:gap-24">
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">Product</h4>
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Agency Cloud</a>
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">White Label</a>
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Voices</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">Resources</h4>
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Documentation</a>
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">API Reference</a>
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Community</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">Legal</h4>
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Security</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-zinc-600">© 2024 Thinkrr AI Inc. All rights reserved.</div>
<div className="flex gap-4">
<a className="text-zinc-600 hover:text-white" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-zinc-600 hover:text-white" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-zinc-600 hover:text-white" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
