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
      

<div className="orb-container">
<div className="orb orb-1"></div>
<div className="orb orb-2"></div>
<div className="orb orb-3"></div>
</div>
<div className="perspective-grid"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-7 h-7 rounded bg-white flex items-center justify-center text-black font-bold text-xs tracking-tight shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    N
                </div>
<span className="font-medium text-white tracking-tight text-sm">Nexus AI</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#agents">Agents</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#scheduling">Scheduling</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#integrations">Integrations</a>
</div>
<div className="flex items-center gap-3">
<button className="text-xs font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block">Log in</button>
<button className="flex items-center gap-2 bg-white text-black hover:bg-neutral-200 text-xs font-medium px-4 py-2 rounded-full transition-all">
<span>Get Started</span>
</button>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
<div className="space-y-8 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] uppercase tracking-widest font-semibold animate-fade-in-up">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live Intelligence
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-[1.05] text-glow">
                    Fluid conversations. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-white">Perfect timing.</span>
</h1>
<p className="text-lg text-neutral-400 font-light max-w-lg leading-relaxed">
                    Deploy autonomous AI agents that handle customer support and complex scheduling workflows instantly.
                </p>
<div className="flex flex-wrap items-center gap-4 pt-2">
<button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]">
                        Create Agent
                        <span className="iconify" data-icon="lucide:sparkles" data-width="14"></span>
</button>
<div className="flex items-center gap-3 px-4 py-2 text-xs text-neutral-400 border-l border-white/10 ml-2">
<span className="iconify text-indigo-400" data-icon="lucide:check-circle" data-width="14"></span>
<span>SOC2 Compliant</span>
</div>
</div>
</div>

<div className="relative h-[500px] w-full flex items-center justify-center perspective-[2000px]">

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent blur-[100px] rounded-full pointer-events-none"></div>

<div className="absolute w-[340px] glass-panel rounded-2xl p-5" style={{transform: 'translateZ(-40px) translateX(40px) rotateY(-15deg) rotateX(5deg)', animation: 'float-slow 8s ease-in-out infinite reverse'}}>
<div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-[10px] text-white">AI</div>
<div>
<div className="text-xs font-medium text-white">Nexus Assistant</div>
<div className="text-[10px] text-emerald-400">Online</div>
</div>
</div>
<span className="iconify text-neutral-500" data-icon="lucide:more-horizontal" data-width="16"></span>
</div>
<div className="space-y-3">
<div className="flex gap-3">
<div className="p-3 bg-white/5 rounded-2xl rounded-tl-none text-xs text-neutral-300 max-w-[85%] leading-relaxed">
                                I found three available slots for the product demo next week.
                            </div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="p-3 bg-indigo-600 text-white rounded-2xl rounded-tr-none text-xs max-w-[85%] leading-relaxed shadow-lg shadow-indigo-500/20">
                                Tuesday at 2 PM sounds perfect. Book it.
                            </div>
</div>
<div className="flex gap-3">
<div className="p-3 bg-white/5 rounded-2xl rounded-tl-none text-xs text-neutral-300 max-w-[85%] leading-relaxed flex items-center gap-2">
<span className="iconify text-emerald-400" data-icon="lucide:calendar-check-2" data-width="14"></span>
                                Confirmed. Invite sent to john@acme.com.
                            </div>
</div>
</div>
<div className="mt-4 relative">
<div className="h-8 bg-black/40 rounded-full border border-white/5 flex items-center px-3">
<span className="text-[10px] text-neutral-600">Type a message...</span>
</div>
<div className="absolute right-1 top-1 w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:arrow-up" data-width="12"></span>
</div>
</div>
</div>

<div className="absolute w-[300px] glass-panel rounded-2xl p-6" style={{transform: 'translateZ(40px) translateX(-40px) rotateY(-5deg) rotateX(2deg)', animation: 'float-slow 7s ease-in-out infinite'}}>
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-white">October 2024</h3>
<div className="flex gap-1">
<span className="w-2 h-2 rounded-full bg-red-500/50"></span>
<span className="w-2 h-2 rounded-full bg-yellow-500/50"></span>
<span className="w-2 h-2 rounded-full bg-green-500/50"></span>
</div>
</div>

<div className="grid grid-cols-7 gap-2 mb-4 text-center">
<span className="text-[10px] text-neutral-600">M</span>
<span className="text-[10px] text-neutral-600">T</span>
<span className="text-[10px] text-neutral-600">W</span>
<span className="text-[10px] text-neutral-600">T</span>
<span className="text-[10px] text-neutral-600">F</span>
<span className="text-[10px] text-neutral-600">S</span>
<span className="text-[10px] text-neutral-600">S</span>
</div>
<div className="grid grid-cols-7 gap-2 text-center text-xs text-neutral-400 mb-4">
<span className="opacity-30">28</span><span className="opacity-30">29</span><span className="opacity-30">30</span>
<span>1</span><span>2</span><span>3</span><span>4</span>
<span>5</span>
<span className="relative flex items-center justify-center">
                            6
                            <span className="absolute inset-0 bg-indigo-500 rounded-lg -z-10 shadow-lg shadow-indigo-500/30"></span>
<span className="absolute -bottom-1 w-1 h-1 bg-white rounded-full"></span>
</span>
<span>7</span><span>8</span><span>9</span><span>10</span><span>11</span>
</div>

<div className="bg-neutral-800/80 border border-white/5 rounded-lg p-3 flex items-center gap-3 animate-[float-delayed_4s_ease-in-out_infinite]">
<div className="w-8 h-8 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
<span className="iconify" data-icon="lucide:video" data-width="14"></span>
</div>
<div>
<div className="text-xs font-medium text-white">Product Demo</div>
<div className="text-[10px] text-neutral-500">2:00 PM • 45m</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="services">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/20 transition-all duration-700"></div>
<div className="relative z-10 flex flex-col md:flex-row h-full gap-8">
<div className="flex-1 space-y-4">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
<span className="iconify text-indigo-400" data-icon="lucide:bot-message-square" data-width="20"></span>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight">Conversational AI</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
                                Engage visitors with human-like interactions. Our NLP models understand context, sentiment, and intent to resolve queries instantly.
                            </p>
<div className="pt-4 flex gap-2">
<span className="text-[10px] border border-white/10 px-2 py-1 rounded bg-white/5 text-neutral-400">GPT-4o</span>
<span className="text-[10px] border border-white/10 px-2 py-1 rounded bg-white/5 text-neutral-400">Claude 3.5</span>
<span className="text-[10px] border border-white/10 px-2 py-1 rounded bg-white/5 text-neutral-400">Llama 3</span>
</div>
</div>
<div className="flex-1 flex items-center justify-center">

<div className="w-full space-y-3 opacity-90">
<div className="flex gap-2 animate-pulse">
<div className="w-2 h-2 rounded-full bg-neutral-600"></div>
<div className="w-2 h-2 rounded-full bg-neutral-600 animation-delay-200"></div>
<div className="w-2 h-2 rounded-full bg-neutral-600 animation-delay-400"></div>
</div>
<div className="bg-neutral-800 border border-white/5 p-3 rounded-lg rounded-tl-none w-3/4">
<div className="h-2 w-1/2 bg-neutral-700 rounded mb-2"></div>
<div className="h-2 w-3/4 bg-neutral-700 rounded"></div>
</div>
<div className="bg-indigo-900/40 border border-indigo-500/30 p-3 rounded-lg rounded-tr-none w-3/4 ml-auto">
<div className="h-2 w-2/3 bg-indigo-500/40 rounded ml-auto"></div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[40px] group-hover:bg-emerald-500/20 transition-all duration-700"></div>
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
<span className="iconify text-emerald-400" data-icon="lucide:calendar-clock" data-width="20"></span>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-3">Smart Scheduling</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">
                        Eliminate the back-and-forth. AI negotiates times across timezones and manages cancellations automatically.
                    </p>
<div className="w-full bg-neutral-900 rounded-lg border border-white/5 p-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs text-neutral-300">Available Now</span>
</div>
<span className="text-xs text-neutral-500 font-mono">10:00 AM</span>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 hover:bg-white/[0.02] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
<span className="iconify text-purple-400" data-icon="lucide:workflow" data-width="20"></span>
</div>
<h3 className="text-lg text-white font-medium tracking-tight mb-2">Workflow Automation</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Connect your chatbot to 5,000+ apps via Zapier. Trigger actions based on conversation outcomes.
                    </p>
</div>

<div className="glass-panel rounded-2xl p-8 hover:bg-white/[0.02] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
<span className="iconify text-blue-400" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-lg text-white font-medium tracking-tight mb-2">Enterprise Security</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Bank-grade encryption for all scheduling data and conversation logs. HIPAA &amp; GDPR compliant.
                    </p>
</div>

<div className="glass-panel rounded-2xl p-8 hover:bg-white/[0.02] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
<span className="iconify text-orange-400" data-icon="lucide:bar-chart-3" data-width="20"></span>
</div>
<h3 className="text-lg text-white font-medium tracking-tight mb-2">Predictive Analytics</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Forecast demand for meetings and support queries. Optimize staffing based on AI predictions.
                    </p>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-black/50 py-10 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-8 text-center">
<p className="text-xs text-neutral-500 font-medium uppercase tracking-widest">Seamlessly Integrated With</p>
</div>
<div className="relative flex overflow-x-hidden group">
<div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap gap-16 px-8 items-center text-neutral-500">
<span className="flex items-center gap-2"><span className="iconify" data-icon="logos:google-calendar" data-width="24"></span> Google Calendar</span>
<span className="flex items-center gap-2"><span className="iconify" data-icon="logos:slack-icon" data-width="24"></span> Slack</span>
<span className="flex items-center gap-2"><span className="iconify" data-icon="logos:notion-icon" data-width="24"></span> Notion</span>
<span className="flex items-center gap-2"><span className="iconify" data-icon="logos:hubspot" data-width="24"></span> HubSpot</span>
<span className="flex items-center gap-2"><span className="iconify" data-icon="simple-icons:zoom" data-width="24"></span> Zoom</span>
<span className="flex items-center gap-2"><span className="iconify" data-icon="logos:salesforce" data-width="30"></span> Salesforce</span>
<span className="flex items-center gap-2"><span className="iconify" data-icon="logos:microsoft-teams" data-width="24"></span> Teams</span>

<span className="flex items-center gap-2"><span className="iconify" data-icon="logos:google-calendar" data-width="24"></span> Google Calendar</span>
<span className="flex items-center gap-2"><span className="iconify" data-icon="logos:slack-icon" data-width="24"></span> Slack</span>
<span className="flex items-center gap-2"><span className="iconify" data-icon="logos:notion-icon" data-width="24"></span> Notion</span>
<span className="flex items-center gap-2"><span className="iconify" data-icon="logos:hubspot" data-width="24"></span> HubSpot</span>
<span className="flex items-center gap-2"><span className="iconify" data-icon="simple-icons:zoom" data-width="24"></span> Zoom</span>
<span className="flex items-center gap-2"><span className="iconify" data-icon="logos:salesforce" data-width="30"></span> Salesforce</span>
<span className="flex items-center gap-2"><span className="iconify" data-icon="logos:microsoft-teams" data-width="24"></span> Teams</span>
</div>
</div>
<style>
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            </style>
</section>

<section className="max-w-4xl mx-auto px-6 py-32 text-center relative">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
<div className="w-96 h-96 bg-indigo-500/10 rounded-full blur-[80px]"></div>
</div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
                Stop trading time. <br/>Start automating.
            </h2>
<p className="text-neutral-400 mb-10 font-light max-w-xl mx-auto">
                Join 10,000+ teams using Nexus to reclaim 20 hours a week per employee through intelligent scheduling and support automation.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full font-medium text-sm hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                    Start Free Trial
                </button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 border border-white/10 text-white rounded-full font-medium text-sm hover:bg-neutral-800 transition-all">
                    Book a Demo
                </button>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-white flex items-center justify-center text-black font-bold text-xs">N</div>
<span className="text-sm text-neutral-400 font-medium">Nexus AI</span>
</div>
<div className="flex gap-6 text-xs text-neutral-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Agents</a>
<a className="hover:text-white transition-colors" href="#">Scheduling</a>
<a className="hover:text-white transition-colors" href="#">API</a>
<a className="hover:text-white transition-colors" href="#">Security</a>
</div>
<div className="text-xs text-neutral-600">
                    © 2024 Nexus Inc.
                </div>
</div>
</footer>
</main>

    </>
  );
}
