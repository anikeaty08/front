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



        document.addEventListener('DOMContentLoaded', () => {
            const cursor = document.getElementById('cursor-glow');
            let mouseX = window.innerWidth / 2;
            let mouseY = window.innerHeight / 2;
            let currentX = window.innerWidth / 2;
            let currentY = window.innerHeight / 2;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            function animate() {
                // Linear interpolation for smooth delay
                const speed = 0.08; 
                
                currentX += (mouseX - currentX) * speed;
                currentY += (mouseY - currentY) * speed;
                
                // Update CSS position
                cursor.style.left = `${currentX}px`;
                cursor.style.top = `${currentY}px`;
                
                requestAnimationFrame(animate);
            }
            
            animate();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="cursor-glow"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-lg font-medium tracking-tight text-white flex items-center gap-1" href="#">
<span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
                    Frello
                </a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-400">
<a className="hover:text-white transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-zinc-400 hover:text-white hidden sm:block" href="#">Log in</a>
<a className="text-sm font-medium bg-white text-black px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-colors" href="#pricing">Start Free</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden subtle-grid border-b border-white/5">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
<h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-400 mb-6">
                    A simple CRM for freelancers who want fewer tabs and faster payments.
                </h1>
<p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl font-light">
                    Track deals, automate follow-ups, and send invoices from one clean dashboard—without the complexity of big CRMs.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
<button className="h-10 px-6 rounded-full bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-all flex items-center gap-2">
                        Start for free
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2" width="16"></iconify-icon>
</button>
<a className="h-10 px-6 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 font-medium text-sm hover:bg-zinc-800 transition-all flex items-center" href="#pricing">
                        See pricing
                    </a>
</div>
</div>

<div className="relative max-w-6xl mx-auto mt-12 perspective-1000">
<div className="glass-card overflow-hidden border-white/10 border rounded-xl shadow-2xl relative bg-zinc-900/40">

<div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-zinc-900/50">
<div className="flex items-center gap-6">
<div className="text-sm font-medium text-white">Dashboard</div>
<div className="flex items-center bg-zinc-800/50 rounded-lg p-0.5 border border-white/5">
<div className="px-3 py-1 text-xs font-medium text-white bg-zinc-700/50 rounded shadow-sm border border-white/5">Overview</div>
<div className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-300 cursor-pointer">Deals</div>
<div className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-300 cursor-pointer">Clients</div>
</div>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="solar:bell-linear"></iconify-icon>
<div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px] font-bold">JD</div>
</div>
</div>

<div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 flex flex-col gap-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-zinc-400 flex items-center gap-2">
<iconify-icon icon="solar:kanban-linear"></iconify-icon> Active Pipeline
                                </h3>
<button className="text-xs text-indigo-400 hover:text-indigo-300">+ New Deal</button>
</div>

<div className="grid grid-cols-3 gap-4 h-full">

<div className="bg-zinc-900/30 rounded-lg p-3 border border-white/5 flex flex-col gap-3">
<div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider mb-1">Lead</div>
<div className="bg-zinc-800/40 border border-white/5 p-3 rounded shadow-sm hover:border-zinc-700 transition-colors cursor-pointer group">
<div className="text-xs font-medium text-zinc-200 mb-1 group-hover:text-indigo-400 transition-colors">Website Redesign</div>
<div className="text-[10px] text-zinc-500">TechCorp Inc.</div>
<div className="mt-2 text-[10px] font-medium text-zinc-400">$4,500</div>
</div>
<div className="bg-zinc-800/40 border border-white/5 p-3 rounded shadow-sm hover:border-zinc-700 transition-colors cursor-pointer group">
<div className="text-xs font-medium text-zinc-200 mb-1 group-hover:text-indigo-400 transition-colors">Brand Identity</div>
<div className="text-[10px] text-zinc-500">Local Coffee</div>
<div className="mt-2 text-[10px] font-medium text-zinc-400">$2,200</div>
</div>
</div>

<div className="bg-zinc-900/30 rounded-lg p-3 border border-white/5 flex flex-col gap-3">
<div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider mb-1">Proposal</div>
<div className="bg-zinc-800/80 border border-indigo-500/30 p-3 rounded shadow-lg relative group">
<div className="absolute top-2 right-2 w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></div>
<div className="text-xs font-medium text-white mb-1">Q3 Marketing</div>
<div className="text-[10px] text-zinc-400">Nexus Solutions</div>
<div className="mt-2 flex items-center justify-between">
<span className="text-[10px] font-medium text-white">$8,500</span>
<span className="text-[8px] bg-amber-500/10 text-amber-300 px-1 py-0.5 rounded border border-amber-500/10">Stalled</span>
</div>
</div>
</div>

<div className="bg-zinc-900/30 rounded-lg p-3 border border-white/5 flex flex-col gap-3">
<div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider mb-1">Won</div>
<div className="bg-zinc-800/40 border border-emerald-500/20 p-3 rounded opacity-80">
<div className="flex justify-between items-start">
<div className="text-xs font-medium text-zinc-300 line-through decoration-zinc-600">Mobile App UI</div>
<iconify-icon className="text-emerald-500 text-xs" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="text-[10px] text-zinc-500 mt-1">GreenEnergy</div>
<div className="mt-2 text-[10px] font-medium text-emerald-400/80">Invoiced</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6">

<div className="flex flex-col gap-2">
<h3 className="text-sm font-medium text-zinc-400 flex items-center gap-2">
<iconify-icon icon="solar:chart-2-linear"></iconify-icon> Forecast
                                </h3>
<div className="bg-zinc-900/30 rounded-lg p-4 border border-white/5">
<div className="flex items-end justify-between mb-4">
<div>
<div className="text-[10px] text-zinc-500 uppercase">This Month</div>
<div className="text-xl font-medium text-white">€12,450</div>
</div>
<div className="text-[10px] text-emerald-400 flex items-center gap-0.5">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> +12%
                                        </div>
</div>

<div className="flex items-end gap-1 h-16 w-full">
<div className="w-1/5 bg-zinc-800 h-[40%] rounded-t-sm"></div>
<div className="w-1/5 bg-zinc-800 h-[65%] rounded-t-sm"></div>
<div className="w-1/5 bg-zinc-700 h-[55%] rounded-t-sm"></div>
<div className="w-1/5 bg-indigo-500/50 h-[85%] rounded-t-sm"></div>
<div className="w-1/5 bg-zinc-800 h-[30%] rounded-t-sm border-t border-dashed border-zinc-600"></div>
</div>
</div>
</div>

<div className="flex flex-col gap-2">
<h3 className="text-sm font-medium text-zinc-400 flex items-center gap-2">
<iconify-icon icon="solar:bill-list-linear"></iconify-icon> Invoices
                                </h3>
<div className="bg-zinc-900/30 rounded-lg border border-white/5 divide-y divide-white/5">

<div className="p-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:file-text-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-white">INV-2024-01</div>
<div className="text-[10px] text-zinc-500">Due in 2 days</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-medium text-white">€3,200</div>
<div className="text-[9px] text-amber-400">Pending</div>
</div>
</div>

<div className="p-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:file-check-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-white">INV-2023-42</div>
<div className="text-[10px] text-zinc-500">Paid yesterday</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-medium text-zinc-400">€1,500</div>
<div className="text-[9px] text-emerald-400">Paid</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950/20" id="benefits">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:w-2/3">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Designed for your workflow</h2>
<p className="text-lg text-zinc-400 font-light max-w-2xl">
                    Freelancers using these workflows typically recover deals they would have forgotten and save several hours per week on admin.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 bg-zinc-900/20 border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
<iconify-icon icon="solar:kanban-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Never lose a deal</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-md">
                            Visual pipeline moves from Lead to Won. Stalled deals are highlighted after 7 days so you know who to nudge.
                        </p>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[300px] h-[200px] opacity-50 md:opacity-100 transition-opacity">
<div className="glass-card p-3 rounded-lg border border-white/10 transform -rotate-6 shadow-xl absolute top-0 right-10 w-48">
<div className="flex justify-between items-start mb-2">
<div className="h-2 w-20 bg-zinc-700 rounded-full"></div>
<div className="h-4 w-4 rounded-full bg-indigo-500"></div>
</div>
<div className="h-1.5 w-12 bg-zinc-800 rounded-full mb-4"></div>
<div className="flex gap-2">
<div className="h-4 w-10 bg-zinc-800 rounded"></div>
</div>
</div>
<div className="glass-card p-3 rounded-lg border border-white/10 transform rotate-3 shadow-2xl absolute top-12 right-0 z-10 bg-zinc-900 w-48">
<div className="flex justify-between items-start mb-2">
<div className="h-2 w-24 bg-white rounded-full"></div>
</div>
<div className="h-1.5 w-16 bg-zinc-600 rounded-full mb-3"></div>
<div className="flex items-center gap-2 p-1.5 bg-amber-500/10 rounded border border-amber-500/20">
<iconify-icon className="text-amber-400 text-xs" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-[9px] text-amber-300">Stalled 7d</span>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/20 border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="relative z-10 mb-20">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
<iconify-icon icon="solar:documents-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">One-click Invoicing</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Turn a won deal into a professional invoice instantly.
                        </p>
</div>

<div className="absolute bottom-0 left-0 w-full px-6 pb-6">
<div className="glass-card rounded-t-xl border-t border-x border-white/10 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
<iconify-icon icon="solar:check-circle-linear" width="12"></iconify-icon>
</div>
<div className="h-2 w-20 bg-zinc-700 rounded-full"></div>
</div>
<div className="h-2 w-8 bg-zinc-700 rounded-full"></div>
</div>
<div className="w-full h-8 bg-indigo-600 rounded flex items-center justify-center text-[10px] font-medium text-white">Send Invoice</div>
</div>
</div>
</div>

<div className="bg-zinc-900/20 border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="relative z-10 mb-20">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">See what's coming</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Simple revenue forecasting for the next months.
                        </p>
</div>

<div className="absolute bottom-6 left-6 right-6 h-24 flex items-end justify-between gap-1 mask-linear-fade">
<div className="w-full bg-zinc-800 h-[30%] rounded-t-sm"></div>
<div className="w-full bg-zinc-800 h-[50%] rounded-t-sm"></div>
<div className="w-full bg-zinc-700 h-[40%] rounded-t-sm"></div>
<div className="w-full bg-zinc-700 h-[70%] rounded-t-sm"></div>
<div className="w-full bg-blue-500 h-[60%] rounded-t-sm shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
<div className="w-full bg-zinc-800 h-[20%] rounded-t-sm"></div>
</div>
</div>

<div className="col-span-1 md:col-span-2 bg-zinc-900/20 border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
<iconify-icon icon="solar:alarm-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Automated Tasks</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                                Don't manually create to-do lists. Moving a deal to "Contract Sent" automatically creates a follow-up task for 3 days later.
                            </p>
</div>
<div className="relative">

<div className="glass-card rounded-xl border border-white/10 p-1">
<div className="bg-zinc-950/50 rounded-lg p-3 mb-1 flex items-center gap-3">
<div className="w-4 h-4 rounded border border-zinc-600"></div>
<div className="flex-1">
<div className="h-2 w-24 bg-zinc-700 rounded-full mb-1"></div>
<div className="h-1.5 w-12 bg-zinc-800 rounded-full"></div>
</div>
<div className="text-[9px] text-zinc-500">Today</div>
</div>
<div className="bg-zinc-900/80 rounded-lg p-3 flex items-center gap-3 border border-amber-500/30 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
<div className="w-4 h-4 rounded border border-amber-500 flex items-center justify-center text-amber-500">
<iconify-icon className="text-[10px]" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs font-medium text-white">Follow up on contract</div>
<div className="text-[10px] text-zinc-500">Auto-generated</div>
</div>
<div className="text-[9px] text-amber-400">Due</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-zinc-950/50" id="how-it-works">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-16 text-center">A typical day with Frello</h2>
<div className="relative pl-8 md:pl-0">

<div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-px bg-zinc-800 -translate-x-1/2"></div>

<div className="relative mb-16 md:mb-24 group">
<div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-zinc-950 border border-zinc-700 z-10 items-center justify-center">
<div className="w-2 h-2 rounded-full bg-zinc-500 group-hover:bg-amber-400 transition-colors"></div>
</div>
<div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
<div className="md:w-1/2 md:text-right order-2 md:order-1">
<span className="text-xs font-medium text-amber-400 uppercase tracking-widest mb-1 block">09:00 AM</span>
<h3 className="text-lg font-medium text-white mb-2">Morning Check-in</h3>
<p className="text-sm text-zinc-400">Review your automated task list. See which leads need a nudge and which invoices are overdue.</p>
</div>
<div className="md:w-1/2 order-1 md:order-2">

<div className="glass-card p-4 rounded-xl border border-white/10 max-w-sm ml-0 md:ml-0 relative transform transition-transform group-hover:-translate-y-1">
<div className="flex items-center gap-3 mb-3 pb-3 border-b border-white/5">
<div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
<iconify-icon icon="solar:sun-fog-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-white">Good morning, Alex</div>
<div className="text-[10px] text-zinc-500">3 tasks due today</div>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-xs text-zinc-300">
<iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon>
                                        Email Design Studio
                                    </div>
<div className="flex items-center gap-2 text-xs text-zinc-300">
<iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon>
                                        Send invoice to Acme
                                    </div>
</div>
</div>
</div>
</div>
</div>

<div className="relative mb-16 md:mb-24 group">
<div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-zinc-950 border border-zinc-700 z-10 items-center justify-center">
<div className="w-2 h-2 rounded-full bg-zinc-500 group-hover:bg-indigo-400 transition-colors"></div>
</div>
<div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
<div className="md:w-1/2 order-2 md:order-2">
<span className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-1 block">02:00 PM</span>
<h3 className="text-lg font-medium text-white mb-2">Move the needle</h3>
<p className="text-sm text-zinc-400">Drag a deal to "Proposal Sent". Frello automatically logs the activity and sets a reminder.</p>
</div>
<div className="md:w-1/2 md:text-right order-1 md:order-1 flex justify-start md:justify-end">

<div className="glass-card p-4 rounded-xl border border-white/10 max-w-sm w-full relative transform transition-transform group-hover:-translate-y-1">
<div className="flex items-center gap-3 bg-zinc-900/50 p-2 rounded-lg border border-white/5 mb-2">
<div className="text-[10px] font-medium text-zinc-500">FROM</div>
<div className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-300">Lead</div>
</div>
<div className="flex justify-center my-1 text-zinc-600">
<iconify-icon icon="solar:arrow-down-linear"></iconify-icon>
</div>
<div className="flex items-center gap-3 bg-indigo-500/10 p-2 rounded-lg border border-indigo-500/30">
<div className="text-[10px] font-medium text-indigo-300">TO</div>
<div className="px-2 py-0.5 rounded bg-indigo-500 text-[10px] text-white">Proposal Sent</div>
</div>
<div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-zinc-500">
<iconify-icon className="text-indigo-400" icon="solar:bell-linear"></iconify-icon>
                                    Reminder set for 3 days
                                </div>
</div>
</div>
</div>
</div>

<div className="relative group">
<div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-zinc-950 border border-zinc-700 z-10 items-center justify-center">
<div className="w-2 h-2 rounded-full bg-zinc-500 group-hover:bg-emerald-400 transition-colors"></div>
</div>
<div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
<div className="md:w-1/2 md:text-right order-2 md:order-1">
<span className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-1 block">05:30 PM</span>
<h3 className="text-lg font-medium text-white mb-2">Get Paid</h3>
<p className="text-sm text-zinc-400">Close a deal and generate the invoice immediately. Watch your forecast update instantly.</p>
</div>
<div className="md:w-1/2 order-1 md:order-2">

<div className="glass-card p-4 rounded-xl border border-white/10 max-w-sm relative transform transition-transform group-hover:-translate-y-1">
<div className="flex items-center justify-between mb-4">
<div className="text-xs font-medium text-white">Invoice #1024</div>
<div className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px]">Sent</div>
</div>
<div className="flex items-end gap-1 h-12 w-full mb-2">
<div className="w-1/5 bg-zinc-800 h-[40%] rounded-t-sm"></div>
<div className="w-1/5 bg-zinc-800 h-[60%] rounded-t-sm"></div>
<div className="w-1/5 bg-zinc-800 h-[50%] rounded-t-sm"></div>
<div className="w-1/5 bg-zinc-800 h-[30%] rounded-t-sm"></div>
<div className="w-1/5 bg-emerald-500 h-full rounded-t-sm shadow-[0_0_10px_rgba(16,185,129,0.3)] animate-pulse"></div>
</div>
<div className="text-center text-[10px] text-zinc-500">Forecast updated</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-white mb-16 text-center">Loved by freelancers</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-xl border border-white/5">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 text-xs font-bold">SJ</div>
<div>
<div className="text-sm font-medium text-white">Sarah Jenkins</div>
<div className="text-xs text-zinc-500">Brand Designer</div>
</div>
</div>
<p className="text-sm text-zinc-300 leading-relaxed">
                        "I finally stopped using messy spreadsheets. Frello is the first tool that actually feels like it was made for a one-person business, not a sales army."
                    </p>
</div>

<div className="glass-card p-6 rounded-xl border border-white/5 bg-zinc-900/40">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 text-xs font-bold">MT</div>
<div>
<div className="text-sm font-medium text-white">Mike Thomas</div>
<div className="text-xs text-zinc-500">Web Developer</div>
</div>
</div>
<p className="text-sm text-zinc-300 leading-relaxed">
                        "The automated follow-ups saved me a $3k deal last week. I would have completely forgotten to email the client back if it wasn't for the nudge."
                    </p>
</div>

<div className="glass-card p-6 rounded-xl border border-white/5">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 text-xs font-bold">ER</div>
<div>
<div className="text-sm font-medium text-white">Elena Rodriguez</div>
<div className="text-xs text-zinc-500">Copywriter</div>
</div>
</div>
<p className="text-sm text-zinc-300 leading-relaxed">
                        "Simple enough that I actually use it every day. The forecasting feature helps me sleep better at night knowing what income is coming next month."
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950/30" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Simple pricing that grows with you</h2>
<p className="text-zinc-400">Transparent costs, no hidden enterprise tiers.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">

<div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/20">
<h3 className="text-lg font-medium text-white">Starter</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight text-white">€0</span>
<span className="text-zinc-500">/mo</span>
</div>
<p className="mt-4 text-sm text-zinc-400">For new freelancers just getting organized.</p>
<button className="mt-6 w-full py-2 px-4 rounded-lg border border-zinc-700 hover:bg-zinc-800 text-sm font-medium text-white transition-colors">Start on Starter</button>
<ul className="mt-8 space-y-3">
<li className="flex gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Up to 3 clients
                        </li>
<li className="flex gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Up to 10 deals
                        </li>
<li className="flex gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Up to 5 invoices/month
                        </li>
<li className="flex gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Basic pipeline and tasks
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-indigo-500/30 bg-zinc-900/60 relative shadow-2xl shadow-indigo-900/10">
<h3 className="text-lg font-medium text-white">Professional</h3>
<div className="mt-4 flex flex-col">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight text-white">€12</span>
<span className="text-zinc-500">/mo</span>
</div>
<span className="text-xs text-indigo-400 mt-1">or ~€10 / month annually</span>
</div>
<p className="mt-4 text-sm text-zinc-400">For working freelancers who run their business from one place.</p>
<button className="mt-6 w-full py-2 px-4 rounded-lg bg-white hover:bg-zinc-200 text-sm font-medium text-zinc-950 transition-colors">Try Professional</button>
<ul className="mt-8 space-y-3">
<li className="flex gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Unlimited clients and deals
                        </li>
<li className="flex gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Full invoicing with overdue alerts
                        </li>
<li className="flex gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Follow-up automations
                        </li>
<li className="flex gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Services catalog and better filters
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/20">
<h3 className="text-lg font-medium text-white">Frello Pro</h3>
<div className="mt-4 flex flex-col">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight text-white">€24</span>
<span className="text-zinc-500">/mo</span>
</div>
<span className="text-xs text-emerald-500 mt-1">or ~€20 / month annually</span>
</div>
<p className="mt-4 text-sm text-zinc-400">For freelancers who want AI help and deeper insights.</p>
<button className="mt-6 w-full py-2 px-4 rounded-lg border border-zinc-700 hover:bg-zinc-800 text-sm font-medium text-white transition-colors">Get Frello Pro</button>
<ul className="mt-8 space-y-3">
<li className="flex gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Everything in Professional
                        </li>
<li className="flex gap-3 text-sm text-zinc-300">

<iconify-icon className="text-emerald-500 shrink-0" icon="solar:cpu-linear"></iconify-icon> AI proposal assistant
                        </li>
<li className="flex gap-3 text-sm text-zinc-300">

<iconify-icon className="text-emerald-500 shrink-0" icon="solar:cpu-linear"></iconify-icon> AI follow-up suggestions
                        </li>
<li className="flex gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Insights dashboard
                        </li>
</ul>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-medium tracking-tight text-white">Frello</span>
<span className="text-xs text-zinc-600">© 2026</span>
</div>
<div className="flex gap-8">
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>



    </>
  );
}
