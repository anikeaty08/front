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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="stars absolute inset-0"></div>
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full opacity-40"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 blur-[100px] rounded-full opacity-30"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030014]/70 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="flex text-white w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98d55e2d-7849-407b-a436-7d007de490b0_3840w.jpg)] bg-contain rounded-full items-center justify-center">
<svg aria-hidden="true" className="" data-icon="lucide:rocket" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></g></svg>
</div>
<span className="text-sm font-medium tracking-tight text-white group-hover:text-violet-200 transition-colors">SPACE CADETS</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#mission">Mission</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#systems">Systems</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#results">Results</a>
</div>
<div className="flex items-center gap-4">
<a className="px-5 py-2 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all flex items-center gap-2 group" href="#contact">
<span>Initiate Launch</span>
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</nav>

<section className="relative z-10 pt-32 pb-20 px-6">
<div className="max-w-4xl mx-auto text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-[10px] font-medium tracking-wide uppercase">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-500"></span>
</span>
                Now accepting new cadets for Q4
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                Automate your entire <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-white">
                    business infrastructure.
                </span>
</h1>
<p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed font-light">
                We deploy autonomous AI agents that handle sales, operations, and support—letting you scale revenue without increasing headcount.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-950 rounded-full font-medium text-sm hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2">
                    Book Your Strategy Call
                </button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/10 text-slate-300 rounded-full font-medium text-sm hover:bg-white/5 hover:text-white transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
<svg aria-hidden="true" data-icon="lucide:play-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                    View The System
                </button>
</div>
</div>
</section>

<section className="relative z-10 pb-32 px-4">
<div className="max-w-5xl mx-auto">
<div className="relative rounded-xl border border-white/10 bg-[#06060c] shadow-2xl glow-purple overflow-hidden group transform perspective-1000 rotate-x-2">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50"></div>

<div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
</div>
<div className="ml-auto text-[10px] text-slate-500 font-mono">mission_control_v2.exe</div>
</div>

<div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="space-y-6">
<div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
<div className="text-[10px] uppercase text-slate-500 tracking-wider mb-3">Active Agents</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs text-slate-300">Outbound SDR-01</span>
<span className="text-[10px] ml-auto text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">Active</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse delay-75"></div>
<span className="text-xs text-slate-300">Support Bot-Beta</span>
<span className="text-[10px] ml-auto text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">Active</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-amber-500"></div>
<span className="text-xs text-slate-300">Content Gen-09</span>
<span className="text-[10px] ml-auto text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded">Learning</span>
</div>
</div>
</div>
<div className="p-4 rounded-lg bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20">
<div className="text-[10px] uppercase text-violet-300 tracking-wider mb-2">Revenue Velocity</div>
<div className="text-2xl font-medium text-white">$42,305</div>
<div className="text-[10px] text-violet-400 mt-1 flex items-center gap-1">
<svg aria-hidden="true" data-icon="lucide:trending-up" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg> +128% vs Manual
                            </div>
</div>
</div>

<div className="md:col-span-2 p-4 rounded-lg bg-white/[0.03] border border-white/5 relative overflow-hidden">
<div className="flex justify-between items-center mb-6">
<div className="text-xs text-white font-medium">Lead Generation Output</div>
<div className="flex gap-2">
<div className="px-2 py-1 rounded bg-white/5 text-[10px] text-slate-400">7D</div>
<div className="px-2 py-1 rounded bg-white/10 text-[10px] text-white">30D</div>
</div>
</div>

<div className="h-32 flex items-end justify-between gap-1 px-2">
<div className="w-full bg-violet-500/20 h-[30%] rounded-t-sm"></div>
<div className="w-full bg-violet-500/30 h-[45%] rounded-t-sm"></div>
<div className="w-full bg-violet-500/40 h-[40%] rounded-t-sm"></div>
<div className="w-full bg-violet-500/50 h-[60%] rounded-t-sm"></div>
<div className="w-full bg-violet-500/60 h-[75%] rounded-t-sm"></div>
<div className="w-full bg-violet-500/80 h-[65%] rounded-t-sm"></div>
<div className="w-full bg-violet-500 h-[90%] rounded-t-sm shadow-[0_0_15px_rgba(139,92,246,0.5)] relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white bg-slate-900 border border-white/10 px-1.5 rounded">AI Active</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 pt-8 border-t border-white/5">
<p className="text-center text-[10px] text-slate-500 uppercase tracking-widest mb-6 font-medium">Powering the next generation of unicorns</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<span className="text-lg font-bold tracking-tighter font-serif text-white">ACME CORP</span>
<span className="text-lg font-bold tracking-tight text-white italic">Velocity</span>
<span className="text-lg font-semibold tracking-wide text-white">NEXUS</span>
<span className="text-lg font-bold tracking-tighter text-white">Starlight.ai</span>
<span className="text-lg font-medium tracking-tight text-white border px-1 border-white">BLOCKS</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#030014]">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6 leading-tight">
                    You are piloting a rocket 
                    <span className="text-slate-500">with a bicycle manual.</span>
</h2>
<p className="text-slate-400 text-sm leading-relaxed mb-8">
                    The old way of scaling requires hiring more bodies, managing burnout, and accepting human error. It's slow, expensive, and unscalable.
                </p>
</div>
<div className="space-y-4">
<div className="p-5 rounded-xl border border-red-500/10 bg-red-500/5 flex gap-4 items-start">
<div className="mt-1 text-red-400">
<svg aria-hidden="true" data-icon="lucide:x-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m15 9l-6 6m0-6l6 6"></path></g></svg>
</div>
<div>
<h4 className="text-white text-sm font-medium">Lead leakage</h4>
<p className="text-slate-400 text-xs mt-1">47% of leads are never followed up with because your team is "too busy" doing data entry.</p>
</div>
</div>
<div className="p-5 rounded-xl border border-red-500/10 bg-red-500/5 flex gap-4 items-start">
<div className="mt-1 text-red-400">
<svg aria-hidden="true" data-icon="lucide:x-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m15 9l-6 6m0-6l6 6"></path></g></svg>
</div>
<div>
<h4 className="text-white text-sm font-medium">Inconsistent Output</h4>
<p className="text-slate-400 text-xs mt-1">Manual outreach fluctuates with mood and energy. AI runs at 100% efficiency, 24/7/365.</p>
</div>
</div>
<div className="p-5 rounded-xl border border-red-500/10 bg-red-500/5 flex gap-4 items-start">
<div className="mt-1 text-red-400">
<svg aria-hidden="true" data-icon="lucide:x-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m15 9l-6 6m0-6l6 6"></path></g></svg>
</div>
<div>
<h4 className="text-white text-sm font-medium">Rising Overhead</h4>
<p className="text-slate-400 text-xs mt-1">Every new $10k in revenue costs you $5k in payroll. Margins stay thin.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="systems">
<div className="absolute inset-0 bg-gradient-to-b from-[#030014] to-[#0a0520]"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">The Orbital System</h2>
<p className="text-slate-400 text-sm">We don't just give you a login. We build, launch, and manage a custom AI infrastructure for your specific growth goals.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-panel p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 blur-[80px] rounded-full group-hover:bg-violet-500/20 transition-all duration-700"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-6">
<svg aria-hidden="true" data-icon="lucide:bot" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Autonomous Revenue Agents</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md">
                            We build custom LLM agents trained on your best sales scripts. They scrape leads, enrich data, write personalized emails, handle objections, and book meetings on your calendar automatically.
                        </p>
<ul className="grid grid-cols-2 gap-3">
<li className="flex items-center gap-2 text-xs text-slate-300">
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Lead Scraping
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Email Verification
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 1-to-1 Personalization
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Inbox Management
                            </li>
</ul>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
<svg aria-hidden="true" data-icon="lucide:workflow" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Ops Automation</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-4">
                            Connect your CRM, Slack, and billing. No data entry ever again.
                        </p>
</div>
<div className="p-3 bg-black/40 rounded border border-white/5 mt-4">
<div className="flex items-center gap-3 text-xs text-slate-300 mb-2">
<svg aria-hidden="true" data-icon="lucide:check-circle" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> Stripe Payment
                        </div>
<div className="w-0.5 h-3 bg-white/10 ml-1.5 mb-1"></div>
<div className="flex items-center gap-3 text-xs text-slate-300">
<svg aria-hidden="true" data-icon="lucide:check-circle" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> Slack Alert Sent
                        </div>
</div>
</div>

<div className="md:col-span-3 mt-6 p-1 rounded-2xl bg-gradient-to-r from-white/5 via-white/10 to-white/5">
<div className="bg-[#05050a] rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<span className="text-xs font-semibold text-violet-400 tracking-wider uppercase mb-1 block">Included Launch Bonus</span>
<h3 className="text-lg font-medium text-white">The "Zero-Gravity" Onboarding Protocol</h3>
<p className="text-slate-400 text-xs mt-1">We don't just build it. We train your team on how to co-pilot the system.</p>
</div>
<div className="flex gap-4">
<div className="px-4 py-2 bg-white/5 rounded border border-white/10 text-xs text-white">
                                + 24/7 System Monitoring
                             </div>
<div className="px-4 py-2 bg-white/5 rounded border border-white/10 text-xs text-white">
                                + Monthly Strategy Audits
                             </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="results">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
<div className="pb-8 md:pb-0 px-4">
<div className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">$14M+</div>
<p className="text-slate-500 text-xs uppercase tracking-wider">Pipeline Generated</p>
</div>
<div className="py-8 md:py-0 px-4">
<div className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">80hrs</div>
<p className="text-slate-500 text-xs uppercase tracking-wider">Saved Per Week Per Client</p>
</div>
<div className="pt-8 md:pt-0 px-4">
<div className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">45 Days</div>
<p className="text-slate-500 text-xs uppercase tracking-wider">Avg. ROI Timeline</p>
</div>
</div>
<div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
<div className="flex gap-1 mb-4 text-violet-400">
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-slate-300 text-sm italic mb-6">"Space Cadets replaced our entire outbound agency. The quality of the AI agents is indistinguishable from a senior SDR, but at a fraction of the cost."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<div className="text-white text-xs font-medium">Sarah Jenkins</div>
<div className="text-slate-500 text-[10px]">CRO at TechFlow</div>
</div>
</div>
</div>
<div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
<div className="flex gap-1 mb-4 text-violet-400">
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-slate-300 text-sm italic mb-6">"We went from booking 5 meetings a month to 45 within the first 60 days of launch. The operational automation is just the cherry on top."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<div className="text-white text-xs font-medium">Marcus Chen</div>
<div className="text-slate-500 text-[10px]">Founder, SaaSify</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-6">
<div className="max-w-3xl mx-auto text-center">
<div className="inline-block p-1 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-600 mb-8">
<div className="bg-[#030014] rounded-full px-6 py-2">
<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-white text-xs font-bold tracking-widest uppercase">Mission Success Guarantee</span>
</div>
</div>
<h2 className="text-2xl md:text-3xl font-medium text-white mb-4">You hit orbit, or we don't get paid.</h2>
<p className="text-slate-400 text-sm mb-0">If our system doesn't generate positive ROI within 90 days of launch, we will continue working for free until it does, or refund your implementation fee. No questions asked.</p>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-slate-950/30">
<div className="max-w-2xl mx-auto">
<h2 className="text-2xl font-medium text-white mb-10 text-center">Frequency Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white/[0.02] border border-white/5 rounded-lg overflow-hidden transition-all duration-300 open:bg-white/[0.04]">
<summary className="flex justify-between items-center p-4 cursor-pointer text-sm font-medium text-white select-none">
                        Is this just ChatGPT connected to email?
                        <svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="p-4 pt-0 text-slate-400 text-xs leading-relaxed">
                        No. We build complex, multi-step agentic workflows using LangChain and custom vector databases. Our agents have memory, can research prospects on LinkedIn, and verify data before ever sending an email.
                    </div>
</details>
<details className="group bg-white/[0.02] border border-white/5 rounded-lg overflow-hidden transition-all duration-300 open:bg-white/[0.04]">
<summary className="flex justify-between items-center p-4 cursor-pointer text-sm font-medium text-white select-none">
                        How long does implementation take?
                        <svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="p-4 pt-0 text-slate-400 text-xs leading-relaxed">
                        Our "Launch Protocol" takes 14 days. This includes strategy, technical setup (DNS, domains), script writing, and agent training. You'll see your first automated leads in Week 3.
                    </div>
</details>
<details className="group bg-white/[0.02] border border-white/5 rounded-lg overflow-hidden transition-all duration-300 open:bg-white/[0.04]">
<summary className="flex justify-between items-center p-4 cursor-pointer text-sm font-medium text-white select-none">
                        Do I need technical skills?
                        <svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="p-4 pt-0 text-slate-400 text-xs leading-relaxed">
                        Zero. We handle 100% of the technical infrastructure. You just need to show up to the sales calls that land on your calendar.
                    </div>
</details>
<details className="group bg-white/[0.02] border border-white/5 rounded-lg overflow-hidden transition-all duration-300 open:bg-white/[0.04]">
<summary className="flex justify-between items-center p-4 cursor-pointer text-sm font-medium text-white select-none">
                        Will this damage my domain reputation?
                        <svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="p-4 pt-0 text-slate-400 text-xs leading-relaxed">
                        Never. We buy secondary domains (e.g., try-yourbrand.com) and warm them up for 2 weeks before sending. Your main domain is completely insulated.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-violet-600/5"></div>
<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready for blast off?</h2>
<p className="text-base text-slate-400 mb-10 font-light max-w-xl mx-auto">Stop operating your business manually. Join the Space Cadets program and build a revenue machine that runs while you sleep.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-3 bg-white text-slate-950 rounded-full font-medium text-sm hover:bg-slate-200 transition-all shadow-lg shadow-white/10">
                    Book Discovery Call
                </button>
</div>
<p className="mt-6 text-[10px] text-slate-500 uppercase tracking-widest">Limited spots for Q4 • No obligation</p>
</div>
</section>

<footer className="bg-[#020010] pt-16 pb-8 px-6 border-t border-white/5">
<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4 text-white">
<svg aria-hidden="true" data-icon="lucide:rocket" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></g></svg>
<span className="text-sm font-bold tracking-tight">SPACE CADETS</span>
</div>
<p className="text-[10px] text-slate-500 leading-relaxed max-w-xs">
                    Helping businesses launch into the next era of AI. Autonomous systems for scalable growth.
                </p>
</div>
<div>
<h4 className="text-white text-xs font-medium mb-4">Agency</h4>
<ul className="space-y-2 text-[10px] text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Our Mission</a></li>
<li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-[10px] text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium mb-4">Connect</h4>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:twitter" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:linkedin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:github" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg>
</a>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-slate-600">© 2024 Space Cadets AI Agency. All rights reserved.</p>
<p className="text-[10px] text-slate-700 font-mono">Website by Space Cadets Agency</p>
</div>
</footer>

    </>
  );
}
