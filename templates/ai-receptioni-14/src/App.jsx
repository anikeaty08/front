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
<div className="z-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="blur-[120px] bg-purple-900/20 w-[60%] h-[50%] rounded-full absolute top-[-20%] left-[20%]"></div>
</div>

<nav className="fixed z-50 bg-[#030712]/80 border-white/5 border-b top-0 right-0 left-0 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-8 gap-y-8 items-center justify-between">
<a className="inline-flex items-center justify-center bg-center mix-blend-normal w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/89aa8d90-461f-4de8-bb50-e6af5ca535a3_320w.png)] bg-cover rounded mr-[10px] ml-[10px] relative" href="#"></a>
<div className="hidden md:flex gap-8 text-sm font-medium gap-x-8 gap-y-8 items-center">
<a className="text-slate-400 hover:text-white transition-colors" href="#hero">Home</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#features">Features</a>
</div>
<a className="hidden md:block px-5 py-2 text-xs font-semibold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all" href="#contact">
                Book a Call
            </a>
</div>
</nav>

<section className="z-10 min-h-screen flex flex-col pt-32 pr-6 pb-20 pl-6 relative items-center" id="hero">

<div className="z-20 text-center max-w-4xl mr-auto mb-16 ml-auto relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-[11px] font-medium tracking-wide mb-8 animate-float">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
                AI Receptionist 2.0 is live
            </div>

<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                Automate your calls <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-purple-300">without losing touch.</span>
</h1>

<p className="md:text-lg leading-relaxed text-base font-light text-slate-400 max-w-xl mr-auto mb-10 ml-auto">
                The AI receptionist that handles bookings, questions, and follow-ups 24/7. Sounds like a human, works like a machine.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-200 transition-colors shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                    Start Automating
                </button>
<button className="px-8 py-3.5 text-sm font-medium text-slate-300 border border-white/10 rounded-full hover:bg-white/5 transition-all flex items-center gap-2">
<iconify-icon icon="lucide:play" width="14"></iconify-icon>
                    View Demo
                </button>
</div>
</div>

<div className="w-full max-w-5xl mx-auto perspective-container relative z-10">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="tilted-card glass-panel rounded-xl md:rounded-2xl border border-white/10 overflow-hidden relative bg-[#0B0F19]/80">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
<div className="ml-4 px-3 py-1 rounded bg-black/40 text-[10px] text-slate-500 font-mono border border-white/5 flex items-center gap-2">
<iconify-icon icon="lucide:lock" width="10"></iconify-icon>
                        dashboard.nex.ai
                    </div>
</div>

<div className="grid grid-cols-12 h-[400px] md:h-[500px]">

<div className="col-span-12 md:col-span-3 border-r border-white/5 bg-black/20 p-4 hidden md:flex flex-col gap-6">
<div className="space-y-1">
<div className="text-[10px] uppercase text-slate-500 font-bold tracking-wider mb-2">Overview</div>
<div className="flex items-center gap-3 px-3 py-2 bg-purple-500/10 text-purple-300 rounded-lg text-xs font-medium border border-purple-500/20">
<iconify-icon icon="lucide:phone-incoming"></iconify-icon>
                                Live Calls
                            </div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white rounded-lg text-xs font-medium transition-colors">
<iconify-icon icon="lucide:calendar"></iconify-icon>
                                Calendar
                            </div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white rounded-lg text-xs font-medium transition-colors">
<iconify-icon icon="lucide:users"></iconify-icon>
                                Clients
                            </div>
</div>

<div className="mt-auto p-3 rounded-xl bg-slate-900/50 border border-white/5">
<div className="text-[10px] text-slate-500 mb-1">Total Bookings</div>
<div className="text-xl font-semibold text-white">1,284</div>
<div className="text-[10px] text-green-400 flex items-center gap-1 mt-1">
<iconify-icon icon="lucide:trending-up" width="10"></iconify-icon>
                                +12% this week
                            </div>
</div>
</div>

<div className="col-span-12 md:col-span-9 p-6 relative">

<div className="flex justify-between items-center mb-8">
<div className="">
<h3 className="text-white font-medium text-sm">Active Call #2491</h3>
<p className="text-xs text-slate-500">Incoming • +1 (555) 012-3456</p>
</div>
<div className="flex items-center gap-2 px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-[10px] text-green-400 animate-pulse">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                Live Processing
                            </div>
</div>

<div className="flex items-center justify-center gap-1 h-16 mb-8 opacity-80">
<div className="voice-bar" style={{animationDuration: '0.6s'}}></div>
<div className="voice-bar" style={{animationDuration: '0.9s'}}></div>
<div className="voice-bar" style={{animationDuration: '0.5s'}}></div>
<div className="voice-bar" style={{animationDuration: '0.7s'}}></div>
<div className="voice-bar" style={{animationDuration: '1.1s'}}></div>
<div className="voice-bar" style={{animationDuration: '0.6s'}}></div>
<div className="voice-bar" style={{animationDuration: '0.8s'}}></div>
<div className="voice-bar" style={{animationDuration: '0.5s'}}></div>
<div className="voice-bar" style={{animationDuration: '0.9s'}}></div>
<div className="voice-bar" style={{animationDuration: '0.7s'}}></div>
</div>

<div className="space-y-4 max-w-lg mx-auto">
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] shrink-0">
<iconify-icon className="text-slate-300" icon="lucide:user"></iconify-icon>
</div>
<div className="bg-slate-800/50 border border-white/5 rounded-2xl rounded-tl-none px-4 py-2 text-xs text-slate-300">
                                    I need to reschedule my dental appointment for next week.
                                </div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-[10px] shrink-0 shadow-lg shadow-purple-900/50">
<iconify-icon className="text-white" icon="lucide:bot"></iconify-icon>
</div>
<div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl rounded-tr-none px-4 py-2 text-xs text-purple-200">
                                    I can help with that. Looking at the calendar, I have Tuesday at 2 PM or Thursday at 10 AM available.
                                </div>
</div>
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] shrink-0">
<iconify-icon className="text-slate-300" icon="lucide:user"></iconify-icon>
</div>
<div className="bg-slate-800/50 border border-white/5 rounded-2xl rounded-tl-none px-4 py-2 text-xs text-slate-300">
                                    Tuesday at 2 PM works perfectly.
                                </div>
</div>

<div className="flex justify-end mt-4">
<div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-lg px-3 py-1.5">
<iconify-icon className="animate-spin text-purple-400" icon="lucide:loader-2" width="12"></iconify-icon>
<span className="text-[10px] text-slate-400">Updating Google Calendar...</span>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B0F19] to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 border-t border-white/5 bg-[#030712]" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-white/10 text-slate-400 text-[10px] font-bold tracking-widest uppercase mb-4">
                    Capabilities
                </span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Complete Automation</h2>
<p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
                    Everything you need to manage appointments and clients, handled entirely by AI.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel rounded-2xl p-8 group hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
<iconify-icon className="text-purple-400 text-xl" icon="lucide:clock"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">24/7 Booking Automation</h3>
<p className="text-sm text-slate-400 leading-relaxed">Schedules appointments any time, instantly. Never miss a client due to office hours again.</p>
</div>

<div className="glass-panel rounded-2xl p-8 group hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
<iconify-icon className="text-blue-400 text-xl" icon="lucide:user"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Client Info Saved</h3>
<p className="text-sm text-slate-400 leading-relaxed">Every interaction stored and organized automatically. Build a robust CRM without data entry.</p>
</div>

<div className="glass-panel rounded-2xl p-8 group hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-6">
<iconify-icon className="text-yellow-400 text-xl" icon="lucide:sparkles"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Smart Follow Ups</h3>
<p className="text-sm text-slate-400 leading-relaxed">Timely reminders that keep clients engaged and reduce no-show rates significantly.</p>
</div>

<div className="glass-panel rounded-2xl p-8 group hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-6">
<iconify-icon className="text-pink-400 text-xl" icon="lucide:calendar-days"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Google Calendar Sync</h3>
<p className="text-sm text-slate-400 leading-relaxed">Live updates, cancellations, and reschedules synced perfectly with your existing workflow.</p>
</div>

<div className="glass-panel rounded-2xl p-8 group md:col-span-2 lg:col-span-2 hover:bg-white/5 transition-colors">
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center h-full">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-emerald-400 text-xl" icon="lucide:message-circle"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-white mb-2">Lead Engagement via SMS &amp; Gmail</h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-lg">Turns new leads into loyal clients by instantly responding across multiple channels, ensuring no opportunity slips through the cracks.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 bg-[#030712]" id="features">
<div className="max-w-6xl mx-auto">
<div className="relative glass-panel rounded-3xl p-10 md:p-16 overflow-hidden border border-purple-500/20">

<div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
<div className="">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Why switch to AI?</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 shrink-0 border border-green-500/20">
<iconify-icon className="" icon="lucide:trending-up" width="14"></iconify-icon>
</div>
<div className="">
<h4 className="text-white font-medium text-sm">Higher booking rates</h4>
<p className="text-slate-400 text-xs mt-1">Instant responses lead to 40% more conversions.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 border border-blue-500/20">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<div className="">
<h4 className="text-white font-medium text-sm">No missed opportunities</h4>
<p className="text-slate-400 text-xs mt-1">Every lead gets a personalized reply, 24/7/365.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0 border border-purple-500/20">
<iconify-icon icon="lucide:zap" width="14"></iconify-icon>
</div>
<div className="">
<h4 className="text-white font-medium text-sm">Saves staff time</h4>
<p className="text-slate-400 text-xs mt-1">Free up your team to focus on high-value work.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
<div className="bg-[#0B0F19] border border-white/10 rounded-2xl p-6 relative">
<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
<span className="text-sm font-medium text-slate-300">Performance Metric</span>
<span className="text-[10px] text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-1 rounded">+124% Growth</span>
</div>
<div className="space-y-4">
<div className="flex justify-between text-xs text-slate-400 mb-1">
<span>Manual Booking</span>
<span>24%</span>
</div>
<div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full w-[24%] bg-slate-600 rounded-full"></div>
</div>
<div className="flex justify-between text-xs text-slate-400 mb-1 mt-4">
<span className="text-purple-300">AI Receptionist</span>
<span className="text-purple-300 font-bold">92%</span>
</div>
<div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full w-[92%] bg-gradient-to-r from-purple-600 to-indigo-400 rounded-full shadow-[0_0_15px_rgba(147,51,234,0.4)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 overflow-hidden" id="contact">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-700/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-20">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                Ready to Launch?
            </h2>
<p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
                See a live demo and discover how it fits your business instantly.
            </p>
<div className="flex justify-center">
<button className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
<div className="relative px-10 py-4 bg-[#0B0F19] rounded-full leading-none flex items-center gap-2 border border-white/10 group-hover:bg-black transition duration-200">
<span className="text-white font-semibold text-sm">Schedule a Call</span>
<iconify-icon className="text-purple-400 group-hover:rotate-12 transition-transform duration-300" icon="lucide:calendar"></iconify-icon>
</div>
</button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020617] py-12 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-80">
<a className="inline-flex items-center justify-center bg-center mix-blend-normal w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/89aa8d90-461f-4de8-bb50-e6af5ca535a3_320w.png)] bg-cover rounded mr-[10px] ml-[10px]" href="#"></a>
</div>
<div className="flex gap-6 text-xs text-slate-500 items-center">
<a className="hover:text-purple-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-purple-400 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-purple-400 transition-colors" href="#">Twitter</a>
<a className="hover:text-purple-400 transition-colors flex items-center" href="#">
<iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
</a>
</div>
<div className="text-xs text-slate-600">
                © 2024 Nex Elevate. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
