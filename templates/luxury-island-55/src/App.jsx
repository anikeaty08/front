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



        // 1. Clock Logic
        function updateClock() {
            const now = new Date();
            const timeString = now.toISOString().split('T')[1].split('.')[0] + ' UTC';
            document.getElementById('clock').textContent = timeString;
        }
        setInterval(updateClock, 1000);
        updateClock();

        // 2. Lens Logic
        const lensContainer = document.getElementById('lens-wrapper');
        const lensMask = document.getElementById('lens-mask');

        lensContainer.addEventListener('mousemove', (e) => {
            const rect = lensContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Update custom properties for CSS mask
            // NOTE: We update the clip-path coordinates via inline style for performance
            lensMask.style.clipPath = `circle(120px at ${x}px ${y}px)`;
            
            // Show tags based on proximity (Simulated logic)
            // In a real app, calculate distance to tag elements
        });

        // Reset lens on leave
        lensContainer.addEventListener('mouseleave', () => {
             lensMask.style.clipPath = `circle(0px at 50% 50%)`;
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full h-14 z-50 glass-panel border-b border-white/10 flex items-center justify-between px-6">

<div className="flex items-center gap-3">
<div className="w-6 h-6 border border-[#00FF94] flex items-center justify-center">
<div className="w-3 h-3 bg-[#00FF94]"></div>
</div>
<span className="text-sm font-semibold tracking-widest-custom text-white">ARCHIPELAGO OS</span>
</div>

<div className="flex items-center gap-6">

<div className="hidden md:flex flex-col items-end">
<span className="text-xs font-mono-tech text-[#00FF94]" id="clock">00:00:00 UTC</span>
<span className="text-[10px] text-white/50 uppercase tracking-wider">System: Online</span>
</div>

<div className="status-dot"></div>

<button className="hidden sm:flex items-center gap-2 px-4 py-1.5 border border-white/20 text-xs uppercase tracking-wider hover:bg-white/5 transition-colors text-white/80">
                Access Portal
                <iconify-icon icon="solar:login-2-linear" width="14"></iconify-icon>
</button>
</div>
</nav>

<section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 grid-motion-bg opacity-30 transform -skew-x-12 scale-150"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,148,0.1)_0%,transparent_70%)]"></div>

<div className="relative z-10 text-center max-w-5xl px-4">
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight-custom mb-6 leading-none">
                TOTAL. ISLAND.<br/>
<span className="text-white/40">AUTONOMY.</span>
</h1>
<p className="text-base text-white/60 max-w-xl mx-auto mb-10 font-light">
                Centralized command operating system for remote luxury assets. 
                Monitor infrastructure, security, and staffing from a single pane of glass.
            </p>
<div className="flex justify-center gap-4">
<button className="px-8 py-3 bg-[#00FF94] text-black text-sm font-semibold tracking-wide uppercase hover:bg-[#00e082] transition-colors">
                    Initialize Demo
                </button>
<button className="px-8 py-3 border border-white/20 text-white text-sm font-medium tracking-wide uppercase hover:bg-white/5 transition-colors">
                    Documentation
                </button>
</div>
</div>


<div className="absolute top-32 left-10 md:left-20 w-64 glass-panel p-4 rounded hidden lg:block border-l-2 border-l-[#00FF94]">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] font-mono-tech text-white/50 uppercase">Energy Output</span>
<iconify-icon className="text-[#00FF94]" icon="solar:bolt-circle-linear"></iconify-icon>
</div>
<div className="text-2xl font-mono-tech text-white">402 <span className="text-xs text-white/40">kWh</span></div>
<div className="w-full h-1 bg-white/10 mt-3 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-[85%] bg-[#00FF94]"></div>
</div>
</div>

<div className="absolute bottom-32 right-10 md:right-20 w-64 glass-panel p-4 rounded hidden lg:block border-r-2 border-r-red-500">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] font-mono-tech text-white/50 uppercase">Perimeter Status</span>
<iconify-icon className="text-red-500" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
<span className="text-sm text-white">Drone Sector 4</span>
</div>
<div className="mt-2 text-[10px] font-mono-tech text-white/40">LAT: 24.453 | LNG: -77.234</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-[#0A0A0A]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-[10px] uppercase tracking-[0.2em] text-white/30 mb-8">Trusted Infrastructure Partners</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-50 hover:opacity-100 transition-opacity duration-500">

<div className="group flex items-center gap-2 cursor-pointer">
<iconify-icon className="text-white text-xl group-hover:text-[#00FF94] transition-colors" icon="simple-icons:spacex"></iconify-icon>
<span className="font-bold tracking-tighter text-lg text-white group-hover:text-white transition-colors">STARLINK</span>
</div>
<div className="group flex items-center gap-2 cursor-pointer">
<iconify-icon className="text-white text-xl group-hover:text-[#00FF94] transition-colors" icon="simple-icons:tesla"></iconify-icon>
<span className="font-bold tracking-tighter text-lg text-white">ENERGY</span>
</div>
<div className="group flex items-center gap-2 cursor-pointer">
<iconify-icon className="text-white text-xl group-hover:text-[#00FF94] transition-colors" icon="solar:shield-star-linear"></iconify-icon>
<span className="font-bold tracking-tighter text-lg text-white">STARK SEC</span>
</div>
<div className="group flex items-center gap-2 cursor-pointer">
<iconify-icon className="text-white text-xl group-hover:text-[#00FF94] transition-colors" icon="simple-icons:fourseasons"></iconify-icon>
<span className="font-bold tracking-tighter text-lg text-white">PRIVATE</span>
</div>
</div>
</div>
</section>

<section className="relative w-full py-24 bg-[#050505] overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight-custom">The Infrastructure Layer.</h2>
<p className="text-white/50 mt-4 max-w-lg">See beyond the luxury finishes. Monitor the critical systems that keep your island alive.</p>
</div>
<div className="relative w-full h-[600px] md:h-[700px] bg-[#0A0A0A] border-y border-white/10 lens-container group" id="lens-wrapper">


<img alt="Luxury Villa" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>

<div className="lens-mask bg-[#001005]" id="lens-mask">
<img alt="Schematic" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwRkY5NCIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-50"></div>
</div>

<div className="lens-tag absolute top-1/3 left-1/4 bg-black/80 border border-[#00FF94] px-3 py-1 text-[#00FF94] text-[10px] font-mono-tech uppercase" id="tag-1">
                Grid: 98% Active
            </div>
<div className="lens-tag absolute bottom-1/3 right-1/3 bg-black/80 border border-[#00FF94] px-3 py-1 text-[#00FF94] text-[10px] font-mono-tech uppercase" id="tag-2">
                H20: Potable
            </div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-widest uppercase pointer-events-none group-hover:opacity-0 transition-opacity">
                Hover to Scan Infrastructure
            </div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[600px]">

<div className="lg:col-span-4 flex flex-col h-full border border-white/10 bg-[#0A0A0A] rounded-sm overflow-hidden">
<div className="p-4 border-b border-white/10 bg-[#0F0F0F]">
<span className="text-xs text-white/40 font-mono-tech uppercase">Select Coordinate</span>
</div>
<div className="overflow-y-auto flex-1">

<button className="w-full text-left p-4 border-b border-white/5 hover:bg-white/5 transition-colors group relative bg-white/5">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00FF94]"></div>
<div className="flex justify-between items-start mb-1">
<span className="text-sm font-medium text-white">001: Spectre Atoll</span>
<span className="text-[10px] text-[#00FF94] border border-[#00FF94]/30 px-1.5 rounded-sm">ACTIVE</span>
</div>
<span className="text-xs text-white/40 font-mono-tech">24.453° N, 77.234° W</span>
</button>

<button className="w-full text-left p-4 border-b border-white/5 hover:bg-white/5 transition-colors group">
<div className="flex justify-between items-start mb-1">
<span className="text-sm font-medium text-white/70 group-hover:text-white">002: Indigo Reef</span>
<span className="text-[10px] text-amber-500 border border-amber-500/30 px-1.5 rounded-sm">MAINT</span>
</div>
<span className="text-xs text-white/40 font-mono-tech">18.221° N, 64.101° W</span>
</button>

<button className="w-full text-left p-4 border-b border-white/5 hover:bg-white/5 transition-colors group">
<div className="flex justify-between items-start mb-1">
<span className="text-sm font-medium text-white/70 group-hover:text-white">003: Glass Fortress</span>
<span className="text-[10px] text-red-500 border border-red-500/30 px-1.5 rounded-sm">SECURED</span>
</div>
<span className="text-xs text-white/40 font-mono-tech">44.912° N, 12.301° E</span>
</button>
</div>
</div>

<div className="lg:col-span-8 border border-white/10 rounded-sm relative overflow-hidden bg-[#020202] group">

<div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-77.234,24.453,13,0/800x600?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2xsY3I1c2gwN2RnMm9vM2hzcjJ2b25zIn0.V2z8')] bg-cover bg-center grayscale opacity-60"></div>

<div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between">
<div className="flex justify-between">
<div className="bg-black/80 backdrop-blur p-2 border border-white/10">
<div className="text-[10px] text-[#00FF94] font-mono-tech">SAT-LINK: CONNECTED</div>
</div>
<iconify-icon className="text-white/50" icon="solar:maximize-square-linear"></iconify-icon>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/20 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-[#00FF94] rounded-full animate-pulse"></div>
</div>
<div className="bg-black/80 backdrop-blur p-4 border border-white/10 self-start max-w-xs">
<h4 className="text-sm text-white font-medium mb-1">North Cay Reserve</h4>
<p className="text-xs text-white/50">Full autonomy achieved via 400kWh Solar Array. Desalination plant operating at 92% efficiency.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#080808] border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">

<div className="flex-1">
<div className="text-[10px] font-mono-tech uppercase tracking-widest text-white/40 mb-4">Gallons H20 Desalinated</div>
<div className="bg-[#030303] border border-white/10 p-6 shadow-inner rounded-sm">
<span className="text-4xl md:text-5xl font-mono-tech text-[#00FF94] tracking-tight">1,204,921</span>
</div>
</div>

<div className="flex-1">
<div className="text-[10px] font-mono-tech uppercase tracking-widest text-white/40 mb-4">Megawatts Stored</div>
<div className="bg-[#030303] border border-white/10 p-6 shadow-inner rounded-sm">
<span className="text-4xl md:text-5xl font-mono-tech text-white tracking-tight">840.5 MW</span>
</div>
</div>

<div className="flex-1">
<div className="text-[10px] font-mono-tech uppercase tracking-widest text-white/40 mb-4">Incidents Prevented</div>
<div className="bg-[#030303] border border-white/10 p-6 shadow-inner rounded-sm">
<span className="text-4xl md:text-5xl font-mono-tech text-white tracking-tight">000,014</span>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white mb-2">Access Tiers</h2>
<p className="text-white/40 text-sm">Select your level of command.</p>
</div>
<div className="flex flex-col md:flex-row justify-center gap-12 perspective-container">

<div className="card-3d-wrapper w-full md:w-[350px] h-[220px]">
<div className="card-3d w-full h-full rounded-xl p-8 relative overflow-hidden bg-neutral-800 border border-white/10 flex flex-col justify-between">

<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
<div className="flex justify-between items-start">
<iconify-icon className="text-white/50 text-3xl" icon="solar:chip-linear"></iconify-icon>
<span className="text-xs uppercase tracking-widest text-white/60">Graphite</span>
</div>
<div>
<div className="text-lg font-mono-tech text-white/80 tracking-widest mb-1">4500 0012 9921</div>
<div className="flex justify-between items-end">
<span className="text-[10px] text-white/40 uppercase">Single Asset</span>
<span className="text-sm text-white">$5k/mo</span>
</div>
</div>
</div>
</div>

<div className="card-3d-wrapper w-full md:w-[350px] h-[220px]">
<div className="card-3d w-full h-full rounded-xl p-8 relative overflow-hidden bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 border border-white/20 flex flex-col justify-between shadow-[0_0_30px_rgba(255,255,255,0.1)]">
<div className="flex justify-between items-start">
<iconify-icon className="text-black/50 text-3xl" icon="solar:chip-linear"></iconify-icon>
<span className="text-xs uppercase tracking-widest text-black/60 font-bold">Titanium</span>
</div>
<div>
<div className="text-lg font-mono-tech text-black/80 tracking-widest mb-1">9900 2134 0000</div>
<div className="flex justify-between items-end">
<span className="text-[10px] text-black/50 uppercase font-bold">Multi-Site</span>
<span className="text-sm text-black font-bold">$12k/mo</span>
</div>
</div>
</div>
</div>

<div className="card-3d-wrapper w-full md:w-[350px] h-[220px]">
<div className="card-3d w-full h-full rounded-xl p-8 relative overflow-hidden bg-black border border-[#00FF94]/50 flex flex-col justify-between shadow-[0_0_40px_rgba(0,255,148,0.1)]">

<div className="absolute top-0 right-0 w-32 h-32 bg-[#00FF94] blur-[60px] opacity-10"></div>
<div className="flex justify-between items-start">
<iconify-icon className="text-[#00FF94] text-3xl" icon="solar:chip-linear"></iconify-icon>
<span className="text-xs uppercase tracking-widest text-[#00FF94]">Obsidian</span>
</div>
<div>
<div className="text-lg font-mono-tech text-white tracking-widest mb-1">0000 0000 0001</div>
<div className="flex justify-between items-end">
<span className="text-[10px] text-white/40 uppercase">Global Portfolio</span>
<span className="text-sm text-[#00FF94]">Custom</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-4xl mx-auto px-6">
<h3 className="text-xs font-mono-tech text-[#00FF94] mb-8 uppercase tracking-widest">Support Protocol // Tickets</h3>
<div className="border border-white/10 rounded-sm bg-[#0A0A0A]">

<div className="group border-b border-white/5">
<details className="group">
<summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/5 transition-colors list-none">
<div className="flex items-center gap-4">
<span className="text-xs font-mono-tech text-white/40">#4092</span>
<span className="text-sm text-white">How is staff vetted for private islands?</span>
</div>
<div className="flex items-center gap-4">
<span className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded-sm">RESOLVED</span>
<iconify-icon className="text-white/40 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</summary>
<div className="p-4 pt-0 text-sm text-white/60 pl-16 font-mono-tech">
                        &gt; All staff undergo Tier-1 background checks equivalent to clearance protocols. Biometric data is stored securely on-premise.
                    </div>
</details>
</div>

<div className="group border-b border-white/5">
<details className="group">
<summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/5 transition-colors list-none">
<div className="flex items-center gap-4">
<span className="text-xs font-mono-tech text-white/40">#4093</span>
<span className="text-sm text-white">Data privacy compliance?</span>
</div>
<div className="flex items-center gap-4">
<span className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded-sm">RESOLVED</span>
<iconify-icon className="text-white/40 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</summary>
<div className="p-4 pt-0 text-sm text-white/60 pl-16 font-mono-tech">
                        &gt; Localized servers. No cloud dependencies. End-to-end encryption on all comms channels.
                    </div>
</details>
</div>

<div className="group">
<details className="group">
<summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/5 transition-colors list-none">
<div className="flex items-center gap-4">
<span className="text-xs font-mono-tech text-white/40">#4094</span>
<span className="text-sm text-white">Satellite backup latency?</span>
</div>
<div className="flex items-center gap-4">
<span className="text-[10px] bg-[#00FF94]/10 text-[#00FF94] px-2 py-0.5 rounded-sm">OPEN</span>
<iconify-icon className="text-white/40 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</summary>
<div className="p-4 pt-0 text-sm text-white/60 pl-16 font-mono-tech">
                        &gt; Starlink integration ensures &lt; 20ms latency regardless of maritime location. Failover is automatic.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-4xl font-semibold text-white tracking-tight-custom mb-4">Secure Uplink.</h2>
<p className="text-white/50 mb-8">Interact with the schematic to initiate a secure inquiry channel based on your specific infrastructure needs.</p>
<form className="space-y-4 max-w-sm">
<div className="relative group">
<input className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#00FF94] font-mono-tech text-sm placeholder:text-white/20 transition-colors" placeholder="SECURE EMAIL" type="email"/>
</div>
<button className="group flex items-center gap-2 text-[#00FF94] text-xs uppercase tracking-widest mt-4" type="submit">
                        Transmit Request
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>

<div className="relative w-full h-[400px] border border-white/10 bg-[#0A0A0A] p-4 group">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxwYXRoIGQ9Ik0wIDBoMjB2MjBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-30"></div>


<div className="absolute top-1/4 left-1/4 w-24 h-24 border border-white/30 bg-white/5 hover:bg-[#00FF94]/10 hover:border-[#00FF94] transition-all cursor-pointer flex flex-col items-center justify-center gap-2 group/zone">
<iconify-icon className="text-white group-hover/zone:text-[#00FF94] text-2xl" icon="solar:home-2-linear"></iconify-icon>
<span className="text-[8px] uppercase tracking-widest text-white/50 group-hover/zone:text-[#00FF94]">Estate</span>
</div>

<div className="absolute bottom-1/3 right-1/4 w-20 h-20 rounded-full border border-white/30 bg-white/5 hover:bg-[#00FF94]/10 hover:border-[#00FF94] transition-all cursor-pointer flex items-center justify-center group/zone">
<span className="text-xl font-bold text-white/30 group-hover/zone:text-[#00FF94]">H</span>
</div>

<div className="absolute top-1/3 right-1/3 w-32 h-12 border border-white/30 bg-white/5 hover:bg-[#00FF94]/10 hover:border-[#00FF94] transition-all cursor-pointer flex items-center justify-center group/zone transform rotate-12">
<span className="text-[8px] uppercase tracking-widest text-white/50 group-hover/zone:text-[#00FF94]">Solar Array</span>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none stroke-white/10" style={{strokeWidth: '1'}}>
<line x1="25%" x2="75%" y1="25%" y2="66%"></line>
<line x1="75%" x2="66%" y1="66%" y2="33%"></line>
</svg>
</div>
</div>
</section>

<footer className="w-full h-16 bg-[#020202] border-t border-white/10 flex items-center justify-between px-6 z-50">
<div className="text-[10px] text-white/40 font-mono-tech">
            ARCHIPELAGO OS v3.0
        </div>
<div className="hidden md:flex gap-6">
<a className="text-[10px] text-white/30 hover:text-white uppercase tracking-wider" href="#">Privacy Protocol</a>
<a className="text-[10px] text-white/30 hover:text-white uppercase tracking-wider" href="#">Terms of Command</a>
</div>
<div className="flex items-center gap-3">
<span className="text-[10px] text-[#00FF94] tracking-widest uppercase shadow-[#00FF94]">All Systems Operational</span>
<div className="w-1.5 h-1.5 bg-[#00FF94] rounded-full animate-pulse shadow-[0_0_8px_#00FF94]"></div>
</div>
</footer>



    </>
  );
}
