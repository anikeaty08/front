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



        // Spotlight Effect Logic
        const cardsContainer = document.getElementById("cards-container");
        const cards = document.querySelectorAll(".spotlight-card");

        document.getElementById("main-body").onmousemove = e => {
            for(const card of cards) {
                const rect = card.getBoundingClientRect(),
                      x = e.clientX - rect.left,
                      y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            };
        }

        // Search Modal Logic
        const modal = document.getElementById('search-modal');
        const input = document.getElementById('search-input');

        function openSearch() {
            modal.classList.remove('hidden-modal');
            modal.classList.add('visible-modal');
            setTimeout(() => input.focus(), 50); // Slight delay to ensure visibility
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }

        function closeSearch() {
            modal.classList.remove('visible-modal');
            modal.classList.add('hidden-modal');
            document.body.style.overflow = ''; // Restore scrolling
        }

        // Keyboard Shortcuts
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                const isOpen = modal.classList.contains('visible-modal');
                isOpen ? closeSearch() : openSearch();
            }
            if (e.key === 'Escape' && modal.classList.contains('visible-modal')) {
                closeSearch();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] bg-[#020202]">
<div className="absolute inset-0 grid-bg animate-pulse" style={{animationDuration: '4s'}}></div>
<div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen"></div>

<div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020202]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
<div className="relative w-7 h-7 flex items-center justify-center overflow-hidden rounded-lg bg-white/5 border border-white/10 group-hover:border-indigo-500/50 transition-colors">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-white relative z-10" icon="lucide:layers" width="16"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-sm">Nexus</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Our Services</a>
<a className="hover:text-white transition-colors" href="#about">About Us</a>
<a className="hover:text-white transition-colors" href="#contact">Contact Us</a>
</div>
<div className="flex items-center gap-4">
<button className="group relative px-3 py-1.5 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer flex items-center gap-2" onclick="openSearch()">
<span className="text-xs text-neutral-400 group-hover:text-white transition-colors">Search...</span>
<span className="hidden md:flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-black/50 border border-white/10 text-[10px] text-neutral-500 font-mono">
<iconify-icon icon="lucide:command" width="10"></iconify-icon>K
                    </span>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 hidden-modal" id="search-modal">

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closeSearch()"></div>

<div className="modal-content relative w-full max-w-xl bg-[#0F0F0F] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col ring-1 ring-white/5">

<div className="flex items-center gap-3 px-4 py-4 border-b border-white/5">
<iconify-icon className="text-indigo-500" icon="lucide:search" width="20"></iconify-icon>
<input className="w-full bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none font-medium h-6 caret-indigo-500" id="search-input" placeholder="What would you like to build?" type="text"/>
<button className="p-1 rounded hover:bg-white/10 text-neutral-500 hover:text-white transition-colors" onclick="closeSearch()">
<span className="text-[10px] font-mono border border-white/10 rounded px-1.5 py-0.5">ESC</span>
</button>
</div>

<div className="p-2">
<div className="px-2 py-2 text-[10px] font-medium text-neutral-500 uppercase tracking-wider font-mono">Quick Actions</div>
<button className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/5 text-neutral-300 hover:text-white transition-colors group text-left">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-500 group-hover:text-indigo-400 transition-colors" icon="lucide:plus-circle" width="16"></iconify-icon>
<span className="text-sm">Create New Agent</span>
</div>
<span className="text-[10px] text-neutral-600 font-mono">A</span>
</button>
<button className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/5 text-neutral-300 hover:text-white transition-colors group text-left">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-500 group-hover:text-indigo-400 transition-colors" icon="lucide:book" width="16"></iconify-icon>
<span className="text-sm">Documentation</span>
</div>
</button>
<button className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/5 text-neutral-300 hover:text-white transition-colors group text-left">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-500 group-hover:text-indigo-400 transition-colors" icon="lucide:webhook" width="16"></iconify-icon>
<span className="text-sm">Manage Webhooks</span>
</div>
</button>
</div>

<div className="px-4 py-2.5 border-t border-white/5 bg-neutral-900/50 flex items-center justify-between text-[10px] text-neutral-500">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-indigo-400" icon="lucide:sparkles" width="12"></iconify-icon>
                    AI Suggestion Enabled
                </span>
<div className="flex gap-3">
<span className="cursor-pointer hover:text-neutral-300 transition-colors">Recent</span>
<span className="cursor-pointer hover:text-neutral-300 transition-colors">Favorites</span>
</div>
</div>
</div>
</div>

<header className="relative pt-32 pb-32 md:pt-48 md:pb-40 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-indigo-300 mb-8 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(99,102,241,0.2)]">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
</span>
                        NEXUS ENGINE V2.0 LIVE
                    </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-6 leading-[1.1] text-white">
                        Build software at the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300 animate-text-shimmer">speed of thought.</span>
</h1>
<p className="text-base text-neutral-400 max-w-xl mb-10 leading-relaxed font-light">
                        The visual interface for the autonomous web. Compose intelligent agents, automate recursive workflows, and deploy infrastructure without touching a server.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="h-10 px-8 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all flex items-center gap-2 w-full sm:w-auto justify-center shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                            Start Building
                            <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="h-10 px-8 rounded-full border border-white/10 bg-white/5 text-neutral-300 font-medium text-sm hover:bg-white/10 transition-all flex items-center gap-2 w-full sm:w-auto justify-center group" onclick="openSearch()">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:terminal" width="16"></iconify-icon>
                            Documentation
                        </button>
</div>
<div className="mt-12 flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="hover:scale-110 transition-transform" icon="simple-icons:openai" width="20"></iconify-icon>
<iconify-icon className="hover:scale-110 transition-transform" icon="simple-icons:anthropic" width="20"></iconify-icon>
<iconify-icon className="hover:scale-110 transition-transform" icon="simple-icons:aws" width="24"></iconify-icon>
<iconify-icon className="hover:scale-110 transition-transform" icon="simple-icons:vercel" width="20"></iconify-icon>
<span className="text-xs text-neutral-500 font-mono">POWERED BY MODERN STACK</span>
</div>
</div>

<div className="relative w-full aspect-square lg:aspect-[4/3] perspective-1000">

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-[80px] animate-pulse"></div>

<div className="absolute inset-0 bg-[#080808]/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-float">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

<div className="h-10 border-b border-white/5 flex items-center justify-between px-4 bg-white/5">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-[10px] font-mono text-neutral-500">pipeline_v4.tsx</div>
<iconify-icon className="text-neutral-500" icon="lucide:more-horizontal" width="14"></iconify-icon>
</div>

<div className="relative w-full h-full p-8">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">

<path d="M120,80 C120,150 220,80 220,150" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"></path>
<path className="animate-beam" d="M120,80 C120,150 220,80 220,150" fill="none" stroke="#6366f1" strokeWidth="2"></path>

<path d="M280,200 C280,260 180,260 180,300" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"></path>
<path className="animate-beam" d="M280,200 C280,260 180,260 180,300" fill="none" stroke="#a855f7" strokeWidth="2" style={{animationDelay: '0.5s'}}></path>

<path d="M280,200 C280,260 380,260 380,300" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"></path>
<path className="animate-beam" d="M280,200 C280,260 380,260 380,300" fill="none" stroke="#22c55e" strokeWidth="2" style={{animationDelay: '0.8s'}}></path>
</svg>

<div className="absolute top-[40px] left-[60px] w-40 glass rounded-lg p-3 z-10 border-l-2 border-l-white">
<div className="flex justify-between items-center mb-2">
<span className="text-[9px] font-mono text-neutral-400">WEBHOOK_EVENT</span>
<iconify-icon className="text-white" icon="lucide:zap" width="12"></iconify-icon>
</div>
<div className="text-xs font-medium text-white">Stripe Payment</div>
<div className="text-[9px] text-neutral-500 font-mono mt-1">status: succeeded</div>
</div>

<div className="absolute top-[150px] left-[220px] w-48 glass rounded-lg p-3 z-10 border-l-2 border-l-indigo-500 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]">
<div className="flex justify-between items-center mb-2">
<span className="text-[9px] font-mono text-indigo-400">INTELLIGENCE</span>
<iconify-icon className="text-indigo-400 animate-pulse" icon="lucide:sparkles" width="12"></iconify-icon>
</div>
<div className="text-xs font-medium text-white">Analyze Customer</div>
<div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-indigo-500 rounded-full animate-[width_2s_ease-in-out_infinite]"></div>
</div>
</div>

<div className="absolute top-[300px] left-[100px] w-40 glass rounded-lg p-3 z-10 border-l-2 border-l-purple-500">
<div className="flex justify-between items-center mb-2">
<span className="text-[9px] font-mono text-purple-400">STORE</span>
<iconify-icon className="text-purple-400" icon="lucide:database" width="12"></iconify-icon>
</div>
<div className="text-xs font-medium text-white">Update CRM</div>
</div>

<div className="absolute top-[300px] left-[340px] w-40 glass rounded-lg p-3 z-10 border-l-2 border-l-green-500">
<div className="flex justify-between items-center mb-2">
<span className="text-[9px] font-mono text-green-400">ACTION</span>
<iconify-icon className="text-green-400" icon="lucide:send" width="12"></iconify-icon>
</div>
<div className="text-xs font-medium text-white">Send Email</div>
</div>

<div className="absolute top-[180px] left-[300px] pointer-events-none">
<iconify-icon className="text-white drop-shadow-md" icon="lucide:mouse-pointer-2" width="20"></iconify-icon>
<div className="absolute top-4 left-4 bg-indigo-500 text-white text-[9px] px-1.5 py-0.5 rounded font-medium whitespace-nowrap">Collaborator</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 relative bg-[#020202]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Our Services</h2>
<div className="h-px w-24 bg-gradient-to-r from-indigo-500 to-transparent"></div>
<p className="mt-6 text-neutral-400 max-w-2xl text-sm leading-relaxed">
                    End-to-end digital solutions designed to scale. From intelligent automation agents to custom enterprise infrastructure.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="cards-container">

<div className="spotlight-card rounded-xl border border-white/10 p-8 flex flex-col group h-full">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-indigo-400" icon="lucide:phone-call" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">AI Voice Calling Agents</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Human-like conversational voice agents capable of handling outbound sales, support queries, and scheduling with zero latency.</p>
</div>

<div className="spotlight-card rounded-xl border border-white/10 p-8 flex flex-col group h-full">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-purple-400" icon="lucide:bot" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">AI Chatbots &amp; Automations</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Deploy 24/7 intelligent assistants and automate repetitive workflows across your tech stack to drive efficiency.</p>
</div>

<div className="spotlight-card rounded-xl border border-white/10 p-8 flex flex-col group h-full">
<div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-cyan-400" icon="lucide:layout-template" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Website Building Services</h3>
<p className="text-sm text-neutral-400 leading-relaxed">High-performance, SEO-optimized marketing sites built on modern frameworks designed to convert visitors into customers.</p>
</div>

<div className="spotlight-card rounded-xl border border-white/10 p-8 flex flex-col group h-full">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-pink-400" icon="lucide:palette" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Web &amp; App Design</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Full-cycle product design and development for web and mobile applications, focusing on intuitive UI/UX and robust functionality.</p>
</div>

<div className="spotlight-card rounded-xl border border-white/10 p-8 flex flex-col group h-full">
<div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-amber-400" icon="lucide:users" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">CRM Building Services</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Custom Customer Relationship Management systems tailored to your sales process, ensuring data integrity and team alignment.</p>
</div>

<div className="spotlight-card rounded-xl border border-white/10 p-8 flex flex-col group h-full">
<div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-green-400" icon="lucide:bar-chart-2" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Data Analytics Services</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Turn raw data into actionable insights with custom dashboards, reporting pipelines, and predictive modeling.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#030303]" id="workflow">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16">

<div className="w-full lg:w-1/3 space-y-8">
<div>
<h2 className="text-2xl font-medium text-white mb-4">Parameter Control</h2>
<p className="text-sm text-neutral-400">Fine-tune your agent's behavior with granular controls.</p>
</div>

<div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6">
<div className="flex justify-between text-xs font-medium text-white mb-4">
<span>Creativity (Temperature)</span>
<span className="font-mono text-indigo-400">0.7</span>
</div>
<input className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-4 [&amp;::-webkit-slider-thumb]:h-4 [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:bg-white [&amp;::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(255,255,255,0.5)]" max="100" min="0" type="range" value="70"/>
</div>

<div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 space-y-4">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-white">Enable Long-term Memory</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 shadow-inner"></div>
</label>
</div>
<div className="h-px bg-white/5"></div>
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-white">Human-in-the-loop Review</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 shadow-inner"></div>
</label>
</div>
</div>

<div className="rounded-xl bg-[#080808] border border-white/5 p-4 font-mono text-[10px] text-neutral-400 overflow-hidden relative">
<div className="absolute top-0 right-0 p-2 text-xs text-neutral-600">JSON</div>
<p><span className="text-purple-400">"agent_config"</span>: {</p>
<p className="pl-4"><span className="text-indigo-400">"model"</span>: "gpt-4-turbo",</p>
<p className="pl-4"><span className="text-indigo-400">"tools"</span>: ["search", "calc"],</p>
<p className="pl-4"><span className="text-indigo-400">"timeout"</span>: 5000</p>
<p>}</p>
</div>
</div>

<div className="w-full lg:w-2/3">
<div className="relative h-full min-h-[400px] rounded-xl border border-white/10 bg-[#080808] overflow-hidden flex flex-col">
<div className="h-10 border-b border-white/5 bg-white/5 px-4 flex items-center justify-between">
<span className="text-xs font-medium text-white">Live Execution Log</span>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] font-mono text-neutral-500">LISTENING</span>
</div>
</div>
<div className="p-6 font-mono text-xs space-y-3">
<div className="flex gap-3 items-start opacity-50">
<span className="text-neutral-600">10:42:01</span>
<span className="text-indigo-300">System</span>
<span className="text-neutral-400">Initializing workspace...</span>
</div>
<div className="flex gap-3 items-start opacity-75">
<span className="text-neutral-600">10:42:02</span>
<span className="text-green-300">Webhook</span>
<span className="text-neutral-400">Payload received: { user_id: "882a" }</span>
</div>
<div className="flex gap-3 items-start">
<span className="text-neutral-600">10:42:05</span>
<span className="text-purple-300">Agent</span>
<span className="text-white">Analyzing user sentiment based on last 5 tickets...</span>
</div>
<div className="flex gap-3 items-start pl-16 border-l border-white/10 my-2">
<div className="w-full bg-neutral-900 p-2 rounded text-[10px] text-neutral-500">
                                    &gt; Retrieving context from VectorStore<br/>
                                    &gt; Found 3 matching documents (score: 0.92)<br/>
                                    &gt; Generating response...
                                </div>
</div>
<div className="flex gap-3 items-start">
<span className="text-neutral-600">10:42:08</span>
<span className="text-green-300">Action</span>
<span className="text-neutral-400">Draft created in Zendesk.</span>
</div>
<div className="h-4 w-2 bg-white/50 animate-pulse mt-2"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<div id="about"></div>

<section className="py-24 border-t border-white/5 bg-[#020202] relative">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(120,119,198,0.1),transparent_50%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white mb-4">Enterprise-grade Infrastructure</h2>
<p className="text-sm text-neutral-400">Scale from one agent to a thousand without friction.</p>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/10 text-xs text-neutral-500 font-medium">
<th className="py-4 px-4 pl-0 w-1/3">Feature</th>
<th className="py-4 px-4 text-center">Starter</th>
<th className="py-4 px-4 text-center text-white">Pro</th>
<th className="py-4 px-4 text-center">Enterprise</th>
</tr>
</thead>
<tbody className="text-sm text-neutral-300">
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-4 px-4 pl-0 text-white font-medium">Monthly Active Agents</td>
<td className="py-4 px-4 text-center text-neutral-500">5</td>
<td className="py-4 px-4 text-center text-indigo-400 font-bold">50</td>
<td className="py-4 px-4 text-center text-neutral-500">Unlimited</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-4 px-4 pl-0">Vector Storage</td>
<td className="py-4 px-4 text-center text-neutral-500">100 MB</td>
<td className="py-4 px-4 text-center">10 GB</td>
<td className="py-4 px-4 text-center text-neutral-500">Dedicated</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-4 px-4 pl-0">Execution Timeout</td>
<td className="py-4 px-4 text-center text-neutral-500">10s</td>
<td className="py-4 px-4 text-center">60s</td>
<td className="py-4 px-4 text-center text-neutral-500">Custom</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-4 px-4 pl-0">Fine-tuning</td>
<td className="py-4 px-4 text-center text-neutral-500">
<iconify-icon className="text-neutral-700" icon="lucide:x"></iconify-icon>
</td>
<td className="py-4 px-4 text-center">
<iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon>
</td>
<td className="py-4 px-4 text-center text-neutral-500">
<iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon>
</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-4 px-4 pl-0">SLA Support</td>
<td className="py-4 px-4 text-center text-neutral-500">Community</td>
<td className="py-4 px-4 text-center">Email</td>
<td className="py-4 px-4 text-center text-neutral-500">24/7 Phone</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<div id="contact"></div>

<footer className="border-t border-white/5 bg-[#010101] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-white" icon="lucide:layers" width="16"></iconify-icon>
<span className="text-white font-medium text-xs tracking-tight">NEXUS</span>
</div>
<p className="text-neutral-600 text-xs max-w-xs leading-relaxed">
                        Design the future of work. <br/>
                        San Francisco, CA.
                    </p>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-3">
<span className="text-white font-medium text-xs">Product</span>
<a className="text-neutral-600 hover:text-white text-xs transition-colors" href="#">Changelog</a>
<a className="text-neutral-600 hover:text-white text-xs transition-colors" href="#">Documentation</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white font-medium text-xs">Legal</span>
<a className="text-neutral-600 hover:text-white text-xs transition-colors" href="#">Terms</a>
<a className="text-neutral-600 hover:text-white text-xs transition-colors" href="#">Privacy</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-neutral-700 text-[10px] font-mono">© 2024 NEXUS SYSTEMS INC.</p>
<div className="flex items-center gap-2 text-[10px] text-neutral-500 font-mono bg-white/5 px-2 py-1 rounded border border-white/5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    SYSTEMS OPERATIONAL
                </div>
</div>
</div>
</footer>


    </>
  );
}
